import{r as B,u as U,o as d,j as $,e as f,c as a,a as e,g as m,t as r,k as h,w as b,l as g,b as u,f as _,F as p,d as M,B as V}from"./app.3477dcbe.js";import{A as E}from"./AppLayout.b1836c37.js";import{_ as C}from"./ModalUpToYou.719c8554.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S={key:0,class:"alert-banner fixed right-0 m-4 w-2/3 md:w-full max-w-sm"},A=e("input",{type:"checkbox",class:"hidden",id:"banneralert"},null,-1),F={class:"close cursor-pointer flex items-center justify-between w-full p-2 bg-green-300 shadow rounded-md text-green-800 font-bold",title:"close",for:"banneralert"},N=e("svg",{class:"fill-current text-white",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 18 18"},[e("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),O={key:1,class:"alert-banner fixed right-0 m-4 w-2/3 md:w-full max-w-sm"},z=e("input",{type:"checkbox",class:"hidden",id:"banneralert"},null,-1),D={class:"close cursor-pointer flex items-center justify-between w-full p-2 bg-yellow-200 shadow rounded-md text-yellow-800 font-bold",title:"close",for:"banneralert"},R=e("svg",{class:"fill-current text-red",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 18 18"},[e("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),q={key:2,class:"alert-banner fixed right-0 m-4 w-2/3 md:w-full max-w-sm"},T=e("input",{type:"checkbox",class:"hidden",id:"banneralert"},null,-1),G={class:"close cursor-pointer flex items-center justify-between w-full p-2 bg-red-200 shadow rounded-md text-red-800 font-bold",title:"close",for:"banneralert"},H=e("svg",{class:"fill-current text-red",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 18 18"},[e("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),I={class:"w-full p-4 flex-col justify-center bg-blue-100 rounded-md"},J=e("div",{class:"text-center text-lg font-bold"},[e("p",{class:"my-2"},"\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19")],-1),K={class:"w-full bg-blue-100 rounded-md"},P={class:"mt-3"},Q={for:""},W=e("div",{class:"mt-3"},[e("label",{for:""},"\u0E23\u0E30\u0E1A\u0E38\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E31\u0E07\u0E01\u0E31\u0E14:")],-1),X=["value"],Y={class:"w-full bg-blue-100 rounded-md"},Z={class:"w-full bg-blue-100 rounded-md"},ee=e("div",{class:"bg-blue-800 text-white text-xl text-center"},null,-1),te=e("div",{class:"mt-3"},[e("label",{for:""},"\u0E23\u0E30\u0E1A\u0E38\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E23\u0E30\u0E1A\u0E1A:")],-1),se=["value"],oe=e("div",{class:"mt-3"},[e("label",{for:""},"\u0E23\u0E30\u0E1A\u0E38\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19:")],-1),le=["value"],re={for:"one"},ne={class:"mt-3"},de={for:""},ae={class:""},ie=e("p",{class:"text-md font-bold text-red-600"},"\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E43\u0E0A\u0E48\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48?",-1),ue={class:"text-gray-900 text-md font-medium dark:text-white"},ce={class:"flex justify-start w-full text-sm"},fe={class:"flex justify-start w-full text-sm"},me={class:"flex justify-start w-full text-sm"},he={class:"flex justify-start w-full text-sm"},we={name:"EditUser",props:{user:Array,user_status_list:{type:Array,required:!0},units:Object,roles:Object},setup(i){const n=i,c=B(!1),w=t=>n.user_status_list[t-1].desc,x=()=>{let t={};return t=n.roles.find(l=>l.id===o.role_id),o.role_name=t.name,t.label},v=()=>{c.value=!1},o=U({user_id:n.user.id,unit_id:n.user.unitid,role_id:n.user.roles[0].id,role_name:n.user.roles[0].label,user_name_thai:n.user.username?n.user.name:"",user_status:n.user.status?n.user.status:0}),y=()=>{let t={};return t=n.units.find(l=>l.unitid===o.unit_id),t.unitname},k=()=>{c.value=!0},j=()=>{c.value=!1,o.post(route("update-user",o.user_id),{preserveState:!1,preserveScroll:!0,onSuccess:t=>{console.log("success")},onError:t=>{console.log("error")},onFinish:t=>{console.log("finish")}})};return(t,l)=>(d(),$(E,null,{default:f(()=>[t.$page.props.flash.status=="success"?(d(),a("div",S,[A,e("label",F,[m(r(t.$page.props.flash.msg)+" ",1),N])])):h("",!0),t.$page.props.flash.status=="warning"?(d(),a("div",O,[z,e("label",D,[m(r(t.$page.props.flash.msg)+" ",1),R])])):h("",!0),t.$page.props.flash.status=="error"?(d(),a("div",q,[T,e("label",G,[m(r(t.$page.props.flash.msg)+" ",1),H])])):h("",!0),e("div",I,[J,e("div",null,[e("div",K,[e("div",P,[e("label",Q,"\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48:"+r(i.user.name),1)])]),W,b(e("select",{name:"",id:"",class:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":l[0]||(l[0]=s=>u(o).unit_id=s)},[(d(!0),a(p,null,_(i.units,s=>(d(),a("option",{key:s.id,value:s.unitid},r(s.unitname),9,X))),128))],512),[[g,u(o).unit_id]]),e("div",Y,[e("div",Z,[ee,te,b(e("select",{name:"",id:"",class:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-6 rounded shadow leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":l[1]||(l[1]=s=>u(o).role_id=s)},[(d(!0),a(p,null,_(i.roles,s=>(d(),a("option",{key:s.id,value:s.id},r(s.label),9,se))),128))],512),[[g,u(o).role_id]])]),oe,(d(!0),a(p,null,_(i.user_status_list,s=>(d(),a("div",{key:s.id,class:"form-check"},[b(e("input",{type:"radio",id:"one",value:s.id,"onUpdate:modelValue":l[2]||(l[2]=L=>u(o).user_status=L),class:"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"},null,8,le),[[V,u(o).user_status]]),e("label",re,r(s.desc),1)]))),128))]),e("div",ne,[e("label",de,"\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25:"+r(i.user.profile.user_name_in),1)]),e("div",ae,[e("button",{type:"submit",class:"w-full flex justify-center py-2 text-md bg-green-500 hover:bg-green-700 text-white border border-green-500 rounded",onClick:l[3]||(l[3]=s=>k())}," \u0E41\u0E01\u0E49\u0E44\u0E02 ")])])]),M(C,{isModalOpen:c.value},{header:f(()=>[ie]),body:f(()=>[e("div",ue,[e("label",ce," \u0E0A\u0E37\u0E48\u0E2D: "+r(i.user.name),1),e("label",fe," \u0E2B\u0E19\u0E48\u0E27\u0E22/\u0E2A\u0E32\u0E02\u0E32: "+r(y()),1),e("label",me," \u0E2A\u0E34\u0E17\u0E18\u0E34\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E23\u0E30\u0E1A\u0E1A: "+r(x()),1),e("label",he," \u0E2A\u0E16\u0E32\u0E19\u0E30: "+r(w(u(o).user_status)),1)])]),footer:f(()=>[e("div",{class:"w-full text-center md:block"},[e("button",{class:"mx-4 md:mb-0 bg-green-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-green-400",onClick:j}," \u0E15\u0E01\u0E25\u0E07 "),e("button",{class:"mx-4 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600",onClick:v}," \u0E22\u0E01\u0E40\u0E25\u0E34\u0E01 ")])]),_:1},8,["isModalOpen"])]),_:1}))}};export{we as default};