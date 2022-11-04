import{B as w,a as z}from"./Guest.4846969e.js";import{w as v,D as V,o as m,c,H as C,L,m as r,d as s,t as E,k as f,a,j as F,e as _,n as H,x as N,F as U,g as h}from"./app.6fde6ef9.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";import{B as q,a as D,b as I}from"./ValidationErrors.0ea04080.js";const P={emits:["update:checked"],props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},computed:{proxyChecked:{get(){return this.checked},set(i){this.$emit("update:checked",i)}}}},R=["value"];function S(i,e,n,k,o,l){return v((m(),c("input",{type:"checkbox",value:n.value,"onUpdate:modelValue":e[0]||(e[0]=d=>l.proxyChecked=d),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,R)),[[V,l.proxyChecked]])}const j=b(P,[["render",S]]),M={layout:w,components:{BreezeButton:z,BreezeCheckbox:j,BreezeInput:q,BreezeLabel:D,BreezeValidationErrors:I,Head:C,Link:L},props:{canResetPassword:Boolean,status:String},data(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit(){this.form.post(this.route("login"),{onFinish:()=>this.form.reset("password")})}}},A={key:0,class:"mb-4 font-medium text-sm text-green-600"},G={class:"mt-4"},T={class:"block mt-4"},J={class:"flex items-center"},K=a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),O={class:"flex items-center justify-end mt-4"},Q=h(" Forgot your password? "),W=h(" Log in ");function X(i,e,n,k,o,l){const d=r("Head"),B=r("BreezeValidationErrors"),u=r("BreezeLabel"),p=r("BreezeInput"),x=r("BreezeCheckbox"),g=r("Link"),y=r("BreezeButton");return m(),c(U,null,[s(d,{title:"Login"}),s(B,{class:"mb-4"}),n.status?(m(),c("div",A,E(n.status),1)):f("",!0),a("form",{onSubmit:e[3]||(e[3]=N((...t)=>l.submit&&l.submit(...t),["prevent"]))},[a("div",null,[s(u,{for:"email",value:"Email"}),s(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o.form.email,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),a("div",G,[s(u,{for:"password",value:"Password"}),s(p,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o.form.password,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.password=t),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),a("div",T,[a("label",J,[s(x,{name:"remember",checked:o.form.remember,"onUpdate:checked":e[2]||(e[2]=t=>o.form.remember=t)},null,8,["checked"]),K])]),a("div",O,[n.canResetPassword?(m(),F(g,{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:_(()=>[Q]),_:1},8,["href"])):f("",!0),s(y,{class:H(["ml-4",{"opacity-25":o.form.processing}]),disabled:o.form.processing},{default:_(()=>[W]),_:1},8,["class","disabled"])])],32)],64)}const oe=b(M,[["render",X]]);export{oe as default};