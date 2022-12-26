import{u as x,r as v,o as d,c as i,a as e,t as n,b as r,F as _,f as y,w as p,v as m,D as f,n as b,k,p as B}from"./app.db9daac3.js";import{d as c,b as j}from"./buddhistEra.95fed84f.js";const D={class:"md:h-screen"},M={class:"px-6 h-full text-gray-800"},S={class:"flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full"},C={class:"w-full md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mt-8 md:mt-0 mb-6 md:mb-0"},V=e("div",{class:"flex justify-center text-xl"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})]),e("label",{class:"my-2"},"\u0E02\u0E48\u0E32\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C")],-1),H={class:"flex flex-col p-2 bg-purple-200 rounded-md shadow-md"},E={class:"font-bold py-2"},A=e("p",{class:"p-2 underline underline-offset-1"},[e("a",{href:"../../../../docs/poster_division_med_stock.pdf",target:"_blank"}," 1.\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E02\u0E32\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E15\u0E31\u0E14\u0E2A\u0E15\u0E4A\u0E2D\u0E01\u0E27\u0E31\u0E2A\u0E14\u0E38 ")],-1),F={class:"underline underline-offset-2"},I={class:""},K={class:"mt-6 text-sm text-red-800"},L={class:"xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0"},N=B('<div class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg><label class="p-4 text-xl">\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E31\u0E2A\u0E14\u0E38 (MED-STOCK)</label></div><div class="my-4 text-md text-gray-800"><p class="text-red-700"> Login \u0E14\u0E49\u0E27\u0E22 Siriraj AD (\u0E43\u0E0A\u0E49 Username \u0E41\u0E25\u0E30 Password \u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E1A e-Document)</p></div>',2),$={class:"mb-6"},z={class:"mb-6"},U={key:0,class:"bg-red-500 text-white p-2 my-2"},O={class:"flex items-center justify-between"},P=e("a",{class:"inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker",href:"https://si-eservice3.si.mahidol.ac.th/selfservice/",target:"_blank"}," \u0E25\u0E37\u0E21 Password? ",-1),G={name:"LoginAD",props:{status:{type:String},annouces:{type:Object}},setup(g){c.extend(j);const l=x({username:"",password:""}),a=v(!1),h=()=>{l.post(route("login"),{preserveState:!0,preserveScroll:!0,onSuccess:o=>{},onError:o=>{console.log("error")},onFinish:o=>{}}),a.value=!1},u=o=>{a.value=!0,document.getElementById(o).focus()};return(o,t)=>(d(),i("section",D,[e("div",M,[e("div",S,[e("div",C,[V,e("div",H,[e("label",E," \u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35,\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 "+n(r(c)(new Date).locale("th").format("D MMM BBBB HH:mm"))+" \u0E19. ",1),A]),(d(!0),i(_,null,y(g.annouces,(s,w)=>(d(),i("div",{key:s.id,class:"flex flex-col my-2 p-2 bg-red-200 rounded-md shadow-md"},[e("p",F," \u0E02\u0E48\u0E32\u0E27\u0E17\u0E35\u0E48 "+n(w+1)+".",1),e("p",I,n(s.message),1),e("p",K," [\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E01\u0E32\u0E28: "+n(r(c)(s.updated_at).locale("th").format("D MMM BBBB HH:mm"))+" \u0E19.]",1)]))),128))]),e("div",L,[N,e("div",$,[p(e("input",{type:"text",placeholder:"\u0E0A\u0E37\u0E48\u0E2D.\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 3 \u0E15\u0E31\u0E27 (\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29)",class:"form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","onUpdate:modelValue":t[0]||(t[0]=s=>r(l).username=s),onKeyup:t[1]||(t[1]=f(s=>u("pwdInput"),["enter"]))},null,544),[[m,r(l).username]])]),e("div",z,[p(e("input",{id:"pwdInput",type:"password",class:b(["form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",[a.value?"cursor-not-allowed ":"border-gray-400"]]),"onUpdate:modelValue":t[2]||(t[2]=s=>r(l).password=s),onKeyup:t[3]||(t[3]=f(s=>u("loginBtn"),["enter"]))},null,34),[[m,r(l).password]])]),o.$page.props.flash.status?(d(),i("div",U,n(o.$page.props.flash.msg),1)):k("",!0),e("div",O,[e("button",{id:"loginBtn",class:b(["bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded",[a.value?"border-blue-300 border-4  cursor-pointer ":"border-gray-400"]]),onClick:h}," \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A ",2),P])])])])]))}};export{G as default};
