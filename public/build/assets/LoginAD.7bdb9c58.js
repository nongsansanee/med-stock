import{u as f,o as a,c as n,a as e,t as i,b as o,w as d,v as c,k as h,p as b}from"./app.bd79abaf.js";import{d as u,b as g}from"./buddhistEra.3c92b23f.js";const w={class:"md:h-screen"},x={class:"px-6 h-full text-gray-800"},v={class:"flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full"},_={class:"w-full md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mt-8 md:mt-0 mb-12 md:mb-0"},y=e("div",{class:"flex justify-center text-xl"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"})]),e("label",{class:"my-2"},"\u0E02\u0E48\u0E32\u0E27\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E2A\u0E31\u0E21\u0E1E\u0E31\u0E19\u0E18\u0E4C")],-1),k={class:"flex flex-col p-2 bg-purple-200 rounded-md shadow-md"},j={class:"font-bold py-2"},D=e("p",{class:"p-2"},[e("label",{for:""},"\u0E02\u0E2D\u0E40\u0E0A\u0E34\u0E0D\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E31\u0E2A\u0E14\u0E38\u0E43\u0E19\u0E01\u0E32\u0E23\u0E15\u0E31\u0E14\u0E2A\u0E15\u0E4A\u0E2D\u0E01")],-1),B={class:"p-2 underline underline-offset-1"},S=["href"],M={class:"xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0"},V=b('<div class="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg><label class="p-4 text-xl">\u0E23\u0E30\u0E1A\u0E1A\u0E1E\u0E31\u0E2A\u0E14\u0E38 (MED-STOCK)</label></div><div class="my-4 text-md text-gray-800"><p class="underline underline-offset-1"> Login \u0E14\u0E49\u0E27\u0E22 Siriraj AD (\u0E43\u0E0A\u0E49 User ID \u0E41\u0E25\u0E30 Password \u0E40\u0E14\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E23\u0E30\u0E1A\u0E1A e-Document)</p></div>',2),C={class:"mb-6"},A={class:"mb-6"},E={key:0,class:"bg-red-500 text-white p-2 my-2"},H=e("a",{class:"inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker",href:"https://si-eservice3.si.mahidol.ac.th/selfservice/",target:"_blank"}," \u0E25\u0E37\u0E21 Password? ",-1),U={name:"LoginAD",props:{status:{type:String},doc_division_filename:{type:String}},setup(p){u.extend(g);const s=f({username:"",password:""}),m=()=>{s.post(route("login"),{preserveState:!1,preserveScroll:!0,onSuccess:t=>{},onError:t=>{console.log("error")},onFinish:t=>{}})};return(t,l)=>(a(),n("section",w,[e("div",x,[e("div",v,[e("div",_,[y,e("div",k,[e("label",j," \u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35,\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48 "+i(o(u)(new Date).locale("th").format("D MMM BBBB HH:mm"))+" \u0E19. ",1),D,e("p",B,[e("a",{href:p.doc_division_filename,target:"_blank"}," 1.\u0E04\u0E39\u0E48\u0E21\u0E37\u0E2D\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E02\u0E32\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E15\u0E31\u0E14\u0E2A\u0E15\u0E4A\u0E2D\u0E01\u0E1E\u0E31\u0E2A\u0E14\u0E38 ",8,S)])])]),e("div",M,[V,e("div",C,[d(e("input",{type:"text",placeholder:"\u0E0A\u0E37\u0E48\u0E2D.\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25 3 \u0E15\u0E31\u0E27 (\u0E20\u0E32\u0E29\u0E32\u0E2D\u0E31\u0E07\u0E01\u0E24\u0E29)",class:"form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","onUpdate:modelValue":l[0]||(l[0]=r=>o(s).username=r)},null,512),[[c,o(s).username]])]),e("div",A,[d(e("input",{type:"password",class:"form-control block w-full px-4 py-2 text-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none","onUpdate:modelValue":l[1]||(l[1]=r=>o(s).password=r)},null,512),[[c,o(s).password]])]),t.$page.props.flash.status?(a(),n("div",E,i(t.$page.props.flash.msg),1)):h("",!0),e("div",{class:"flex items-center justify-between"},[e("button",{class:"bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded",onClick:m}," \u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A "),H])])])])]))}};export{U as default};
