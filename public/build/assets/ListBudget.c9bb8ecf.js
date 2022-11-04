import{r as m,h as C,o as s,c as l,a as e,t as d,u as O,C as S,w as I,v as $,b as u,k as h,F as x,f as p,j as y,d as w,e as i,y as F,l as L}from"./app.bd79abaf.js";import{A as U}from"./AppLayout.96c85c3c.js";import{_ as B}from"./ModalUpToYou.c37d44dc.js";import"./_plugin-vue_export-helper.cdc0426e.js";const D={for:"",class:"px-6"},P={name:"BudgetOrder",props:{orderIndex:{type:Number,required:!0},orderItem:{type:Object,required:!0}},setup(o){const r=o,n=m(0);return C(()=>{n.value=r.orderItem.timeline.approve_budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(f,_)=>(s(),l("div",null,[e("label",D,d(o.orderIndex+1)+". \u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D("+d(o.orderItem.type)+"): "+d(o.orderItem.order_no)+"/"+d(o.orderItem.year)+" \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D: "+d(o.orderItem.date_order)+" \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E07\u0E34\u0E19:"+d(n.value)+" \u0E1A\u0E32\u0E17 ",1)]))}},T={for:"",class:"px-6"},z={name:"PurchaseOrder",props:{orderIndex:{type:Number,required:!0},orderItem:{type:Object,required:!0}},setup(o){const r=o,n=m(0);return C(()=>{n.value=r.orderItem.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(f,_)=>(s(),l("div",null,[e("label",T,d(o.orderIndex+1)+". \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D: "+d(o.orderItem.date_order)+" \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E07\u0E34\u0E19:"+d(n.value)+" \u0E1A\u0E32\u0E17 ",1)]))}},G={class:"py-2 border-b-2 border-red-300"},H={class:"flex justify-between"},J={class:""},K={class:"font-bold"},Q={key:0,class:"flex justify-between px-3"},R=e("label",{class:""}," \u0E23\u0E30\u0E1A\u0E38\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13: ",-1),W={key:1,class:"flex justify-between px-3"},X={class:"px-3 text-green-600 font-bold"},Z={class:"flex px-2"},ee={key:0,class:"flex mr-2"},te=["href"],oe={key:2},de={key:0},re=e("label",{class:"px-6 font-bold"},"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",-1),se={key:1,class:"mt-2"},le=e("label",{class:"px-6 font-bold"},"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",-1),ne=e("p",{class:"text-md font-bold text-red-600"},"\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",-1),ue={class:"w-full flex flex-col text-gray-900 text-md font-medium dark:text-white"},ae={for:""},ce={for:""},ie=e("p",{class:"text-md font-bold text-red-600"},"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13",-1),ge={class:"w-full flex flex-col text-gray-900 text-md font-medium dark:text-white"},be={for:""},me={for:""},fe=e("p",{class:"text-md font-bold text-red-600"},"\u0E01\u0E23\u0E38\u0E13\u0E32\u0E2D\u0E48\u0E32\u0E19 ",-1),_e={class:"w-full flex flex-col text-gray-900 text-md font-medium dark:text-white"},he={for:""},xe={name:"StockBudget",props:{stockIndex:{type:Number,required:!0},stockBudget:{type:Object,required:!0},budgetYear:{type:Number,required:!0}},setup(o){const r=o,n=m(!1),f=m(!1),_=m(0),g=m(!1),a=m(!1),t=O({stock_id:{type:Number},stock_name:{type:String},budget_year:{type:Number},budget_input:{type:Number,defaulte:0},budget_edit:{type:Number,defaulte:0}}),j=S(()=>r.stockBudget.budget.budget_add.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","));S(()=>r.stockBudget.budget.budget_add!=0?r.stockBudget.balance_budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"0");const N=c=>{f.value=!0,t.stock_id=r.stockBudget.id,t.stock_name=r.stockBudget.stockname,t.budget_year=r.budgetYear,_.value=t.budget_input.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},M=()=>{f.value=!1},q=()=>{console.log("close alert="+t.budget_year),g.value=!1,F.Inertia.visit(route("budget-list"))},Y=()=>{f.value=!1,t.stock_id=r.stockBudget.id,t.budget_year=r.budgetYear,t.post(route("add-budget"),{preserveState:!0,preserveScroll:!0,onSuccess:c=>{console.log("success"),g.value=!0},onError:c=>{console.log("error"),g.value=!0},onFinish:c=>{console.log("finish")}})},A=()=>{console.log("edit budget"),t.stock_id=r.stockBudget.id,t.stock_name=r.stockBudget.stockname,t.budget_year=r.budgetYear,t.budget_edit=r.stockBudget.budget.budget_add,a.value=!0},E=()=>{a.value=!1,t.post(route("edit-budget"),{preserveState:!0,preserveScroll:!0,onSuccess:c=>{console.log("success"),g.value=!0,console.log(t.budget_year)},onError:c=>{console.log("error"),g.value=!0},onFinish:c=>{console.log("finish")}})},V=()=>{a.value=!1};return(c,v)=>(s(),l(x,null,[e("div",null,[e("div",G,[e("div",H,[e("div",J,[e("label",K,d(o.stockIndex+1)+". "+d(o.stockBudget.stockname),1)])]),o.stockBudget.budget.budget_add==0?(s(),l("div",Q,[e("div",null,[R,I(e("input",{type:"number",class:"rounded-md","onUpdate:modelValue":v[0]||(v[0]=b=>u(t).budget_input=b)},null,512),[[$,u(t).budget_input]])]),e("div",{class:"p-2 mr-2"},[e("button",{class:"flex justify-center py-1 px-2 bg-green-200 text-green-900 rounded-md shadow-md hover:bg-green-300 focus:outline-none",onClick:N}," \u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01 ")])])):h("",!0),o.stockBudget.budget.budget_add!=0?(s(),l("div",W,[e("div",null,[e("label",X," \u0E44\u0E14\u0E49\u0E2D\u0E19\u0E38\u0E21\u0E31\u0E15\u0E34 "+d(u(j))+" \u0E1A\u0E32\u0E17 ",1)]),e("div",Z,[e("div",{class:"px-3"},[e("button",{class:"flex justify-center py-1 px-2 bg-yellow-200 text-yellow-900 rounded-md shadow-md hover:bg-yellow-300 focus:outline-none",onClick:A}," \u0E41\u0E01\u0E49\u0E44\u0E02 ")]),o.stockBudget.count_import>0?(s(),l("div",ee,[e("a",{href:c.route("get-list-order",{stock_id:o.stockBudget.id,year:o.budgetYear}),class:"flex justify-center py-1 px-2 bg-blue-200 text-blue-900 rounded-md shadow-md hover:bg-blue-300 focus:outline-none"}," \u0E14\u0E39\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E17\u0E35\u0E48\u0E19\u0E33\u0E40\u0E02\u0E49\u0E32\u0E08\u0E32\u0E01Excel ",8,te)])):h("",!0)])])):h("",!0),n.value?(s(),l("div",oe,[o.stockBudget.orders.length!=0?(s(),l("div",de,[re,(s(!0),l(x,null,p(o.stockBudget.orders,(b,k)=>(s(),y(P,{key:b.id,orderIndex:k,orderItem:b},null,8,["orderIndex","orderItem"]))),128))])):h("",!0),o.stockBudget.purchase_orders.length!=0?(s(),l("div",se,[le,(s(!0),l(x,null,p(o.stockBudget.purchase_orders,(b,k)=>(s(),y(z,{key:b.id,orderIndex:k,orderItem:b},null,8,["orderIndex","orderItem"]))),128))])):h("",!0)])):h("",!0)])]),w(B,{isModalOpen:f.value},{header:i(()=>[ne]),body:i(()=>[e("div",ue,[e("div",ae,d(u(t).stock_name),1),e("div",null," \u0E1B\u0E35\u0E07\u0E1A:"+d(u(t).budget_year+543),1),e("div",ce," \u0E08\u0E33\u0E19\u0E27\u0E19 "+d(_.value)+" \u0E1A\u0E32\u0E17 ",1)])]),footer:i(()=>[e("div",{class:"w-full text-center md:block"},[e("button",{class:"mx-4 md:mb-0 bg-green-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-green-400",onClick:Y}," \u0E15\u0E01\u0E25\u0E07 "),e("button",{class:"mx-4 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600",onClick:M}," \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ")])]),_:1},8,["isModalOpen"]),w(B,{isModalOpen:a.value},{header:i(()=>[ie]),body:i(()=>[e("div",ge,[e("div",be,d(u(t).stock_name),1),e("div",null," \u0E1B\u0E35\u0E07\u0E1A:"+d(u(t).budget_year+543),1),e("div",me,[I(e("input",{type:"number",class:"rounded-md","onUpdate:modelValue":v[1]||(v[1]=b=>u(t).budget_edit=b)},null,512),[[$,u(t).budget_edit]])])])]),footer:i(()=>[e("div",{class:"w-full text-center md:block"},[e("button",{class:"mx-4 md:mb-0 bg-green-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-green-400",onClick:E}," \u0E15\u0E01\u0E25\u0E07 "),e("button",{class:"mx-4 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600",onClick:V}," \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ")])]),_:1},8,["isModalOpen"]),w(B,{isModalOpen:g.value},{header:i(()=>[fe]),body:i(()=>[e("div",_e,[e("div",he,d(c.$page.props.flash.status)+":"+d(c.$page.props.flash.msg),1)])]),footer:i(()=>[e("div",{class:"w-full text-center md:block"},[e("button",{class:"mx-4 md:mb-0 bg-green-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-green-400",onClick:q}," \u0E15\u0E01\u0E25\u0E07 ")])]),_:1},8,["isModalOpen"])],64))}},ve={class:"flex flex-col mb-2 text-md font-bold text-gray-900"},pe={class:"m-2"},ye=e("label",{for:""},"\u0E23\u0E30\u0E1A\u0E38\u0E1B\u0E35\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13:",-1),ke=["value"],we=e("h1",{class:"text-center font-bold text-lg"},"\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13\u0E41\u0E15\u0E48\u0E25\u0E30\u0E2A\u0E32\u0E02\u0E32",-1),Be={key:0,class:"text-center font-bold text-lg"},Oe={name:"ListBudget",props:{years:{type:Object,required:!0}},setup(o){const r=m("");m(!0);const n=O({year_selected:""}),f=()=>{axios.get(route("get-list-budget",{year:n.year_selected})).then(_=>{r.value=_.data.stocks})};return(_,g)=>(s(),y(U,null,{default:i(()=>[e("div",ve,[e("div",pe,[ye,I(e("select",{name:"",id:"","onUpdate:modelValue":g[0]||(g[0]=a=>u(n).year_selected=a),class:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline",onChange:f},[(s(!0),l(x,null,p(o.years,(a,t)=>(s(),l("option",{key:t,value:a},d(a+543),9,ke))),128))],544),[[L,u(n).year_selected]])])]),e("div",null,[we,u(n).year_selected?(s(),l("h1",Be,"\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E1B\u0E35\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13 "+d(u(n).year_selected+543),1)):h("",!0),(s(!0),l(x,null,p(r.value,(a,t)=>(s(),y(xe,{key:a.id,stockIndex:t,stockBudget:a,budgetYear:u(n).year_selected},null,8,["stockIndex","stockBudget","budgetYear"]))),128))])]),_:1}))}};export{Oe as default};
