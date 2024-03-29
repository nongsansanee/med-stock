<?php

namespace App\Http\Controllers;

use App\Models\budget;
use App\Models\ItemTransaction;
use App\Models\LogActivity;
use App\Models\OrderItem;
use App\Models\OrderPurchase;
use App\Models\Stock;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $year_send= array();
      
        $year_start = budget::select('year')->orderBy('year','asc')->first();
        $year_start = $year_start->year - 1;
      
        array_push($year_send,$year_start);

        $budget_years = budget::select('year')->distinct()->get();
    
        foreach($budget_years as  $year){
           // Log::info($year->year);
           array_push($year_send,$year->year);
          // Log::info($year_send);
        }

        $year_end = budget::select('year')->orderBy('year','desc')->first();
        $year_end = $year_end->year + 1;
        array_push($year_send,$year_end);
        //Log::info($year_send);
        return Inertia::render('Admin/ListBudget',[
                            'years'=>$year_send,
                           
                        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       // Log::info($request);
        $user = Auth::user();
      //  return ' BudgetController store';
        try{
           // budget::latest()->first();
            budget::create([
                    'stock_id'=>$request->stock_id,
                    'year'=>$request->budget_year,
                    'budget_add'=>$request->budget_input,
                    'status'=>'on',
                    'user_id'=> $user->id
            ]);
        }catch(\Illuminate\Database\QueryException $e){
            //rollback
            Log::info($e->getMessage());
            return redirect()->back()->with(['status' => 'error', 'msg' =>  'เกิดความผิดพลาดในการบันทึกข้อมูลกรุณาติดต่อเจ้าหน้าที่ IT ภาคฯ']);
        }
       
        return Redirect::back()->with(['status' => 'success', 'msg' => 'บันทึกงบประมาณสำเร็จ']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($year)
    {
        //Log::info($year);
       // $year = $request->year_selected;
       // Log::info($year);
       // return "test";
        $stocks = Stock::where('status','1')->get();
        $use_budget=0;
        $purchase_use_budget=0;
        $balance_budget=0.0;
        foreach($stocks as $key=>$stock){
            $budget_year = budget::where('stock_id',$stock->id)
                                            ->where('year',$year) 
                                            ->first();
                                          //  ->where('status','on')    
           // Log::info($budget_year->count());
 
            if(!$budget_year){
               
                $budget_year['budget_add']=0.00;
                $budget_year['year']=0;
                $balance_budget = 0.0;
                $stocks[$key]['count_import'] = 0;
               // Log::info($budget_year);
            }else{
                //*********ข้อมูลใบสัญญาสั่งซื้อ
                $stock_orders = OrderItem::select('order_no','year','date_order','timeline','type')
                                            ->where('unit_id',$stock->id)
                                            ->where('year',$year)
                                            ->whereIn('status',['approve','checkin'])
                                            ->get();
                if( $stock_orders->count()!=0){
                    foreach($stock_orders as $order){
                        $use_budget += $order->timeline['approve_budget'];
                    }
                }else{
                    $use_budget = 0.0;
                }
          

                //*********ข้อมูลใบสั่งซื้อ
                $purchase_orders = OrderPurchase::select('date_order','project_name','budget','timeline')
                                        ->where('unit_id',$stock->id)
                                        ->where('year',$year)
                                        ->whereIn('status',['created','approved','received'])
                                        ->get();
                if( $purchase_orders->count()!=0){
                    foreach($purchase_orders as $purchase_order){
                     $purchase_use_budget += $purchase_order->budget;
                    }
                }else{
                    $purchase_use_budget = 0.0;
                }

                $balance_budget = (float)$budget_year->budget_add - (float)$use_budget - (float)$purchase_use_budget; 

               //*********ข้อมูล Import ใบสั่งซื้อ

               $count_import = ItemTransaction::where(['stock_id'=>$stock->id,'year'=>$year,'action'=>'checkin','status'=>'active'])
                                                ->count();

               // Log::info('purchase_use_budget=>'.$purchase_use_budget);
                $stocks[$key]['orders'] = $stock_orders;
                $stocks[$key]['purchase_orders'] = $purchase_orders;
                $stocks[$key]['use_budget'] = $use_budget;
                $stocks[$key]['purchase_use_budget'] = $purchase_use_budget;
                $stocks[$key]['balance_budget'] = $balance_budget;
                $stocks[$key]['count_import'] = $count_import;
            }
          
            $stocks[$key]['budget'] = $budget_year;
          //   Log::info($stocks);

        }
        return response()->json([
            'stocks' => $stocks
        ]);
        // return Inertia::render('Admin/ListBudget',[
        //     // 'budgets'=>$budgets,
        //     'stock_budgets'=>$stocks,
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
       // Log::info($request);
        //return 'test edit budget';
        $user = Auth::user();

        /* Insert Log */
        $budget = budget::where(['stock_id'=>$request->stock_id , 'year'=>$request->budget_year])
                        ->first();
        $original_val_budget = array();
        $original_val_budget = $budget->getOriginal(); //เก็บค่าเก่าไว้ก่อน
  
        try{
          // budget::latest()->first();
           
             $budget->update(['budget_add'=>$request->budget_edit]);
            //Log::info($update_budget);
            $budget_changes = $budget->getChanges();
          //  logger($budget_changes);
        }catch(\Illuminate\Database\QueryException $e){
            //rollback
            Log::info($e->getMessage());
            return redirect()->back()->with(['status' => 'error', 'msg' =>  'เกิดความผิดพลาดในการแก้ไขข้อมูลกรุณาติดต่อเจ้าหน้าที่ IT ภาคฯ']);
        }

        $old_changes =array();
        if (count($budget_changes)) {
            foreach ($budget_changes as $key=>$val) {
                $old_changes[] = [ 'column'=>$key , 'old'=>$original_val_budget[$key] , 'new'=>$val];
            }
            array_pop($old_changes); //เอา updated_at  ออก
        }
         
            /****************  insert log ****************/
        
          $use_in = Auth::user();

          $detail_log =array();
          $detail_log['table'] ='budget';
          $detail_log['row_change'] =$budget->id;

         //  dd($detail_log);

           $log_activity = LogActivity::create([
               'user_id' => $use_in->id,
               'sap_id' => $budget->id,
               'function_name' => 'manage_budget',
               'action' => 'edit_budget',
               'detail' => $detail_log,
               'old_value'=> $old_changes,
           ]);

        return Redirect::back()->with(['status' => 'success', 'msg' => 'แก้ไขงบประมาณสำเร็จ']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
