import{B as u,a as c}from"./Guest.4846969e.js";import{B as f,a as w,b as _}from"./ValidationErrors.0ea04080.js";import{H as B,m as t,o as V,c as b,d as e,a,e as z,n as v,x as k,F as h,g as x}from"./app.6fde6ef9.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const g={layout:u,components:{BreezeButton:c,BreezeInput:f,BreezeLabel:w,BreezeValidationErrors:_,Head:B},props:{email:String,token:String},data(){return{form:this.$inertia.form({token:this.token,email:this.email,password:"",password_confirmation:""})}},methods:{submit(){this.form.post(this.route("password.update"),{onFinish:()=>this.form.reset("password","password_confirmation")})}}},E={class:"mt-4"},P={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},H=x(" Reset Password ");function L(q,o,F,I,s,i){const m=t("Head"),d=t("BreezeValidationErrors"),n=t("BreezeLabel"),l=t("BreezeInput"),p=t("BreezeButton");return V(),b(h,null,[e(m,{title:"Reset Password"}),e(d,{class:"mb-4"}),a("form",{onSubmit:o[3]||(o[3]=k((...r)=>i.submit&&i.submit(...r),["prevent"]))},[a("div",null,[e(n,{for:"email",value:"Email"}),e(l,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s.form.email,"onUpdate:modelValue":o[0]||(o[0]=r=>s.form.email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),a("div",E,[e(n,{for:"password",value:"Password"}),e(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s.form.password,"onUpdate:modelValue":o[1]||(o[1]=r=>s.form.password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),a("div",P,[e(n,{for:"password_confirmation",value:"Confirm Password"}),e(l,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s.form.password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=r=>s.form.password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),a("div",C,[e(p,{class:v({"opacity-25":s.form.processing}),disabled:s.form.processing},{default:z(()=>[H]),_:1},8,["class","disabled"])])],32)],64)}const j=y(g,[["render",L]]);export{j as default};