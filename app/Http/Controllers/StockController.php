<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ItemTransaction;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Stock;
use App\Models\StockItem;
use App\Models\Unit;
use Illuminate\Log\Logger;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;


class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

       // Log::info('StockController index');
        $user = Auth::user();
        $stocks = Stock::where('unit_id',$user->unitid)
                        ->where('status',1)
                        ->get();

        //dd($stocks);
        //dd(count($stocks));
        if(count($stocks)==0){
            return Inertia::render('Stock/index',[
                'stock_status'=> 'close',
                'can'=>[
                        'checkout_item'=>$user->can('checkout_item')
                        ],
                ]);
        }
        $stock_items = StockItem::query()
                                ->when(request()->input('search'), function ($query, $search) {
                                    $query->where('item_name', 'like', "%{$search}%")
                                    ->orWhere('business_name','like',"%{$search}%");
                                })
                                ->where('stock_id',$user->unitid)
                                ->where('status','!=',9)
                                ->orderBy('item_name')
                                ->paginate(10)
                                ->withQueryString();
                             //   ->get();
      
        foreach($stock_items as $key=>$stock_item){
            $checkin_last = ItemTransaction::where('stock_item_id',$stock_item->id)
                                            ->where('action','checkin')
                                            ->where('status','active')
                                            ->latest()
                                            ->first();
            $stock_items[$key]['checkin_last'] = $checkin_last;
        }
        $unit = Unit::where('unitid',$user->unitid)->first();
      
        $main_menu_links = [
            'is_admin_division_stock'=> $user->can('view_master_data'),
           // 'user_abilities'=>$user->abilities,
          ];
  
        request()->session()->flash('mainMenuLinks', $main_menu_links);
        // request()->session()->flash('user', $user);
        //logger($stock_items);
        return Inertia::render('Stock/index',[
                                'stocks'=>$stocks,
                                'stock_items'=>$stock_items,
                                'unit'=> $unit,
                                'can_abilities'=>$user->abilities,
                                'can'=>[
                                        'checkout_item'=>$user->can('checkout_item')
                                        ],
                                'filters' => request()->only(['search'])        
                                ]);
    }
    // public function filter()
    // {
    //     dd(Request()->all());
    // }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user = Auth::user();
        $main_menu_links = [
            'is_admin_division_stock'=> $user->can('view_master_data'),
           // 'user_abilities'=>$user->abilities,
          ];
        request()->session()->flash('mainMenuLinks', $main_menu_links);
         request()->session()->flash('user', $user);
        $units = Unit::all();
        return Inertia::render('Admin/AddStock',[
            'units'=> $units,
            ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       // logger($request->all());
        $user = Auth::user();
        Stock::create([
            'stockname'=>$request->stock_name_thai,
            'stockengname'=>$request->stock_name_en,
            'status'=>1,
            'unit_id'=>$request->unit,
            'user_id'=>$user->id
            ]);
        return Redirect::route('stock-add')
            ->with(['status' => 'success', 'msg' => 'บันทึกเรียบร้อยแล้ว']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Stock $stock)
    {
        $stock_status_list = array(
                            ['id'=>'1','desc'=>'เปิดใช้งาน'],
                            ['id'=>'2','desc'=>'ปิดใช้งาน'],
                            ['id'=>'3','desc'=>'ยกเลิก'],
                        );
       
        // $unit =Stock::with('unit:unitid,unitname')->where('id',$stock->id)->first();
      
        //$stock->unit;
        $stock->load(['unit']);  //load relation unit 
        return Inertia::render('Admin/EditStock',[
            'stock'=> $stock,
            'stock_status_list'=>$stock_status_list
            //'unitname' => $unit->unit->unitname,
            ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Stock $stock)
    {   

        // $stock->fill(request()->all());
        // $stock->forceFill(request()->all());

       // logger(request()->all());

        $original_val = $stock->getOriginal(); //เก็บค่าเก่าไว้ก่อน
      //  logger($original_val);
        $old_changes =array();
        $stock->update([
                        'stockname'=> request()->input('stock_name_thai'),
                        'stockengname'=> request()->input('stock_name_en'),
                        'status'=> request()->input('stock_status')
                ]); // สัมพันธ์กับ protected fillable ใน Model
        $changes = $stock->getChanges(); //ได้เฉพาะคอลัมน์ที่มีการเปลี่ยนแปลงค่า + updated_at ถ้าตารางนี้มีการใช้ timestamp
      // dd($changes);
        if(count($changes)){
          
            foreach($changes as $key=>$val){
                $old_changes[] = [ 'column'=>$key , 'old'=>$original_val[$key] , 'new'=>$val];
            }
            array_pop($old_changes); //เอา updated_at  ออก
           
            /****************  insert log ****************/
          //  logger($old_changes);
            return Redirect::back()->with(['status' => 'success', 'msg' => 'แก้ไขข้อมูลสำเร็จ']);
        }
            /****************  insert log ****************/
           // logger($old_changes);
        return Redirect::back()->with(['status' => 'warning', 'msg' => 'ข้อมูลที่ระบุมาไม่มีการเปลี่ยนแปลง']);

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


    public function getListStockUnit($unit_id)
    {
       // logger('StockController show');
        //logger($request->all());

        $list_stock_unit = Stock::where('unit_id',$unit_id)->get();
        return response()->json([
            'list_stock_unit' => $list_stock_unit
        ]);

    }
}
