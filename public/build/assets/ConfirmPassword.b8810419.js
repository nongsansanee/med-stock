import{B as p,a as u}from"./Guest.74cf52b6.js";import{B as f,a as _,b as B}from"./ValidationErrors.2e65d90c.js";import{X as b,c as w,b as e,a as t,d as z,n as h,x,F as V,l as o,o as y,f as v}from"./app.9b9bfbb4.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";const g={layout:p,components:{BreezeButton:u,BreezeInput:f,BreezeLabel:_,BreezeValidationErrors:B,Head:b},data(){return{form:this.$inertia.form({password:""})}},methods:{submit(){this.form.post(this.route("password.confirm"),{onFinish:()=>this.form.reset()})}}},E=t("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),L={class:"flex justify-end mt-4"},P=v(" Confirm ");function k(F,s,H,I,r,n){const i=o("Head"),m=o("BreezeValidationErrors"),l=o("BreezeLabel"),d=o("BreezeInput"),c=o("BreezeButton");return y(),w(V,null,[e(i,{title:"Confirm Password"}),E,e(m,{class:"mb-4"}),t("form",{onSubmit:s[1]||(s[1]=x((...a)=>n.submit&&n.submit(...a),["prevent"]))},[t("div",null,[e(l,{for:"password",value:"Password"}),e(d,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:r.form.password,"onUpdate:modelValue":s[0]||(s[0]=a=>r.form.password=a),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),t("div",L,[e(c,{class:h(["ml-4",{"opacity-25":r.form.processing}]),disabled:r.form.processing},{default:z(()=>[P]),_:1},8,["class","disabled"])])],32)],64)}const G=C(g,[["render",k]]);export{G as default};