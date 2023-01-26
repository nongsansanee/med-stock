import{B as p,a as h}from"./Guest.75c473a4.js";import{X as g,k as y,c as r,b as t,i as k,a as o,d as a,n as v,x as b,F as x,l as s,o as d,f as c}from"./app.1d013a92.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const w={layout:p,components:{BreezeButton:h,Head:g,Link:y},props:{status:String},data(){return{form:this.$inertia.form()}},methods:{submit(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}}},L=o("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},z={class:"mt-4 flex items-center justify-between"},C=c(" Resend Verification Email "),E=c("Log Out");function N(m,i,S,H,n,e){const l=s("Head"),u=s("BreezeButton"),f=s("Link");return d(),r(x,null,[t(l,{title:"Email Verification"}),L,e.verificationLinkSent?(d(),r("div",V," A new verification link has been sent to the email address you provided during registration. ")):k("",!0),o("form",{onSubmit:i[0]||(i[0]=b((..._)=>e.submit&&e.submit(..._),["prevent"]))},[o("div",z,[t(u,{class:v({"opacity-25":n.form.processing}),disabled:n.form.processing},{default:a(()=>[C]),_:1},8,["class","disabled"]),t(f,{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:a(()=>[E]),_:1},8,["href"])])],32)],64)}const A=B(w,[["render",N]]);export{A as default};
