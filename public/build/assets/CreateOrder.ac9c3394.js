import{u as C,r as _,o as i,c as n,a as e,g as c,t as r,b as o,k as f,w as h,v as x,n as M,l as z,F as y,f as k,h as B,i as $,j as L,e as j,d as O,L as S}from"./app.fa9136dd.js";import{A as V}from"./AppLayout.d009ae27.js";import"./_plugin-vue_export-helper.cdc0426e.js";const F={class:"w-full p-2"},N={class:"w-full bg-indigo-100 border-2 border-indigo-300 mt-3 rounded-lg lg:max-w-full lg:flex lg:flex-col"},A={class:"flex ml-2"},U={class:"ml-2"},I={class:"ml-2 text-red-600"},H={class:"inline-flex px-2 text-lg font-semibold leading-5 rounded-full"},P=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})],-1),q={class:"flex ml-6"},E={class:"flex justify-end w-1/4 py-2 px-2"},D={key:0,class:"text-red-600"},T=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1),G=[T],J=e("div",null," \u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D:",-1),K={class:"w-3/4"},Q={class:"flex ml-6"},R=e("div",{class:"w-1/4 py-2 px-2 text-right"}," Cat.No:",-1),W={class:"w-3/4"},X={class:"flex ml-6"},Y=e("div",{class:"w-1/4 py-2 px-2 text-right"}," Lot.No:",-1),Z={class:"w-3/4"},ee={class:"flex ml-6"},te=e("div",{class:"w-1/4 py-2 px-2 text-right"}," \u0E23\u0E32\u0E04\u0E32\u0E15\u0E48\u0E2D\u0E2B\u0E19\u0E48\u0E27\u0E22:",-1),se={class:"w-3/4"},oe={class:"flex ml-6 mt-2"},le={class:"flex justify-end w-1/4 py-2 px-2"},re={key:0,class:"text-red-600"},ie=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})],-1),ne=[ie],de=e("div",null," \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E1C\u0E39\u0E49\u0E02\u0E32\u0E22:",-1),ae={class:"w-3/4"},ue=["value"],ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),_e=c(" \u0E43\u0E2A\u0E48\u0E15\u0E30\u0E01\u0E23\u0E49\u0E32 "),pe=[ce,_e],me={name:"OrderItem",props:{businesses:{type:Object,required:!0},itemIndex:{type:Number,required:!0},itemStock:{type:Object,required:!0}},emits:["previewOrder"],setup(u,{emit:w}){const v=u,t=C({item:[],business_input:[],order_input:0,preview_orders:Array});t.item=v.itemStock;const b=_(0),p=_(!1),m=_(!1),g=_(""),d=()=>{if(t.order_input==0)return m.value=!0,g.value="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",!1;if(m.value=!1,t.business_input.length==0)return p.value=!0,g.value="\u0E01\u0E23\u0E38\u0E13\u0E32\u0E23\u0E30\u0E1A\u0E38\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E1C\u0E39\u0E49\u0E02\u0E32\u0E22",!1;p.value=!1;const a=t.business_input.split("-");t.preview_orders=[],b.value=t.order_input*t.item.price;let s=b.value.toFixed(2);t.preview_orders.push({stock_id:t.item.stock_id,id:t.item.id,sap:t.item.item_code,item_name:t.item.item_name,order_input:t.order_input,price:t.item.price,business_id:a[0],business_name:a[1],total:s,catalog_number:t.item.checkin_last.profile.catalog_number,lot_number:t.item.checkin_last.profile.lot_number}),w("previewOrder",t.preview_orders)};return(a,s)=>(i(),n("div",F,[e("div",N,[e("div",A,[c(r(u.itemIndex+1)+". ",1),e("p",U,r(o(t).item.item_code)+":"+r(o(t).item.item_name),1),e("p",I,[e("span",H,[P,c(" "+r(o(t).item.item_sum),1)])])]),e("div",q,[e("div",E,[m.value?(i(),n("div",D,G)):f("",!0),J]),e("div",K,[h(e("input",{type:"number",placeholder:"\u0E08\u0E33\u0E19\u0E27\u0E19\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D",class:M(["block w-full mt-1 rounded-md",[m.value?"border-red-500 border-2 ":"border-gray-400"]]),"onUpdate:modelValue":s[0]||(s[0]=l=>o(t).order_input=l)},null,2),[[x,o(t).order_input]])])]),e("div",Q,[R,e("div",W,[h(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=l=>o(t).item.checkin_last.profile.catalog_number=l),class:"block w-full mt-1 border-gray-400 rounded-md"},null,512),[[x,o(t).item.checkin_last.profile.catalog_number]])])]),e("div",X,[Y,e("div",Z,[h(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=l=>o(t).item.checkin_last.profile.lot_number=l),class:"block w-full mt-1 border-gray-400 rounded-md"},null,512),[[x,o(t).item.checkin_last.profile.lot_number]])])]),e("div",ee,[te,e("div",se,[h(e("input",{type:"number","onUpdate:modelValue":s[3]||(s[3]=l=>o(t).item.price=l),class:"block w-full mt-1 border-gray-400 rounded-md"},null,512),[[x,o(t).item.price]])])]),e("div",oe,[e("div",le,[p.value?(i(),n("div",re,ne)):f("",!0),de]),e("div",ae,[h(e("select",{id:"business_input",class:M(["block appearance-none w-full bg-white border hover:border-gray-500 px-2 py-2 pr-6 rounded shadow leading-tight",[p.value?"border-red-500 border-2 ":"border-gray-400"]]),"onUpdate:modelValue":s[4]||(s[4]=l=>o(t).business_input=l)},[(i(!0),n(y,null,k(u.businesses,l=>(i(),n("option",{key:l.id,value:l.id+"-"+l.business_name},r(l.business_name),9,ue))),128))],2),[[z,o(t).business_input]])])]),e("div",{class:"m-2"},[e("button",{class:"w-full flex justify-center text-sm text-white bg-blue-600 rounded-md hover:bg-blue-400 focus:outline-none",onClick:d},pe)])])]))}},he={key:0,class:"alert-banner fixed right-0 m-2 w-5/6 md:w-full max-w-sm"},we=e("input",{type:"checkbox",class:"hidden",id:"banneralert"},null,-1),ve={class:"close cursor-pointer flex items-center justify-between w-full p-2 bg-green-300 shadow rounded-md text-green-800 font-bold",title:"close",for:"banneralert"},fe=e("svg",{class:"fill-current text-white",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 18 18"},[e("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),be={class:"w-full bg-blue-100 p-2 rounded-md"},ge={class:"bg-blue-800 text-white text-xl text-center"},xe=e("div",{class:"mt-3"},[e("label",{for:""},"\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E04\u0E25\u0E31\u0E07\u0E1E\u0E31\u0E2A\u0E14\u0E38")],-1),ye=["value"],ke=e("h1",{class:"m-3 text-center text-lg font-bold"},"\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E2D\u0E01\u0E2A\u0E32\u0E23\u0E43\u0E1A\u0E2A\u0E31\u0E0D\u0E0D\u0E32\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D\u0E1E\u0E31\u0E2A\u0E14\u0E38 ",-1),Me={class:"m-3 text-center text-lg font-bold"},$e={class:"flex text-right px-6 justify-end"},Le=e("div",{class:"flex"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})])],-1),je={class:""},Ce={key:1,class:"alert-banner fixed z-20 top-60 ml-10 shadow-lg w-3/4 lg:ml-96 lg:w-2/5"},ze=e("label",{for:"previeworder",class:"flex items-start justify-between w-full p-1 bg-yellow-200 shadow-lg text-yellow-900 font-bold",title:"close"},[c(" \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1E\u0E31\u0E2A\u0E14\u0E38\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D "),e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8 cursor-pointer",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})])],-1),Be=c("\u0E25\u0E1A"),Oe={for:"",class:"flex items-start justify-between w-full p-1 bg-yellow-100 shadow-lg text-yellow-800 font-bold"},Se=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"})],-1),Ve=c(" \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E43\u0E1A\u0E2A\u0E31\u0E48\u0E07\u0E0B\u0E37\u0E49\u0E2D "),Fe=[Se,Ve],Ie={name:"CreateOrder",props:{stocks:Array,stock_items:Array,unit:Object,businesses:Array,sysdate_thai:String,sysdate:String},setup(u){const w=_(!1);_(0);const v=_(0),t=C({preview_orders:[],unit_id:0});B(()=>{t.items=$().props.value.stock_items,t.unit_id=$().props.value.unit.unitid});const b=d=>{t.preview_orders.push(d)},p=()=>{w.value=!0,v.value=0;let d=0,a=0;t.preview_orders.forEach(s=>{d=parseFloat(s[0].total),a=a+d}),v.value=a.toFixed(2)},m=()=>{w.value=!1},g=()=>{t.post(route("add-order"),{preserveState:!1,preserveScroll:!0,onSuccess:d=>{console.log("success")},onError:d=>{console.log("error")},onFinish:d=>{console.log("finish")}})};return(d,a)=>(i(),L(V,null,{default:j(()=>[d.$page.props.flash.status=="success"?(i(),n("div",he,[we,e("label",ve,[c(r(d.$page.props.flash.msg)+" ",1),fe])])):f("",!0),e("div",be,[e("div",ge,r(u.unit.unitname),1),xe,h(e("select",{name:"",id:"",class:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":a[0]||(a[0]=s=>o(t).unit_id=s)},[(i(!0),n(y,null,k(u.stocks,s=>(i(),n("option",{key:s.id,value:s.id},r(s.stockname),9,ye))),128))],512),[[z,o(t).unit_id]])]),ke,e("h1",Me,"\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E08\u0E33\u0E19\u0E27\u0E19\u0E04\u0E07\u0E40\u0E2B\u0E25\u0E37\u0E2D \u0E13 \u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 "+r(u.sysdate_thai),1),e("div",$e,[Le,e("div",je,[o(t).preview_orders.length>0?(i(),n("button",{key:0,class:"transition duration-500 ease-in-out bg-red-600 hover:bg-red-400 transform hover:-translate-y-1 hover:scale-110 inline-flex px-2 text-lg font-semibold leading-5 text-white rounded-full",onClick:p},r(o(t).preview_orders.length),1)):f("",!0)])]),w.value?(i(),n("div",Ce,[ze,e("input",{type:"checkbox",class:"hidden",id:"previeworder",onClick:m}),(i(!0),n(y,null,k(o(t).preview_orders,(s,l)=>(i(),n("label",{key:s.id,class:"close cursor-pointer flex items-start justify-between w-full pt-4 px-2 bg-yellow-100 shadow-lg text-sm text-yellow-900",title:"close",for:"previeworder"},[c(r(l+1)+"."+r(s[0].item_name)+" \u0E08\u0E33\u0E19\u0E27\u0E19 "+r(s[0].order_input)+" x "+r(s[0].price)+" \u0E40\u0E1B\u0E47\u0E19\u0E40\u0E07\u0E34\u0E19 "+r(s[0].total)+" \u0E1A\u0E32\u0E17 ",1),O(o(S),{class:"ml-4 px-2 text-red-800 font-bold bg-red-300 rounded-md"},{default:j(()=>[Be]),_:1})]))),128)),e("label",Oe," \u0E23\u0E27\u0E21 "+r(v.value)+" \u0E1A\u0E32\u0E17 ",1),e("button",{class:"w-full flex justify-center py-2 text-sm text-yellow-900 font-bold bg-yellow-300 hover:bg-yellow-200 focus:outline-none",onClick:a[1]||(a[1]=s=>g())},Fe)])):f("",!0),(i(!0),n(y,null,k(u.stock_items,(s,l)=>(i(),L(me,{key:s.id,itemIndex:l,itemStock:s,businesses:u.businesses,onPreviewOrder:b},null,8,["itemIndex","itemStock","businesses"]))),128))]),_:1}))}};export{Ie as default};
