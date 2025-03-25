import{a5 as ne,a6 as re,D as ie,G as ue,H as q,aj as de,r,ak as ce,A as K,I as me,K as ve,al as fe,b as t,J as W,F as Z,ah as pe,V as T,am as Ve,an as ge,_ as ye,k as ke,c as x,w as o,e as J,a7 as be,h as O,o as v,a1 as Q,a2 as L,a as c,a4 as I,C as X,a8 as Ae,a3 as we,t as Y}from"./index-RIGcn3Ac.js";import{V as he}from"./VContainer-ebUxiMVz.js";import{V as ee}from"./VDialog-viVvUrdy.js";import{V as H}from"./VCard-C8EetYgM.js";import{m as Ce,u as xe,a as ae,V as z}from"./VTextField-BJnqtJdl.js";import{V as _e}from"./VDataTable-w2Fq-DvN.js";import{V as Pe}from"./VForm-CJ31S2dq.js";import{b as Se}from"./index-BzFZzskb.js";import{m as Ne,b as te}from"./VSelect-JELSds4a.js";import"./VMenu-E9who3fl.js";import"./VImg-C9PhzfSt.js";const le=re(),_=ne.create({baseURL:"https://gateway.khaneetala.ir/v1/admin",headers:{"Content-Type":"application/json",Accept:"application/json"}});_.interceptors.request.use(e=>{const u=localStorage.getItem("token");return u?e.headers.Authorization=`Bearer ${u}`:le.replace("/login"),e},e=>Promise.reject(e));_.interceptors.response.use(e=>e,e=>(e.response.status==401&&(localStorage.removeItem("token"),le.replace("/login")),console.error("API Error:",e.response||e.message),Promise.reject(e)));const R={async AdminList(){return(await _.get("/all")).data},async AccessPoint(e){return(await _.get(`/menu/all/${e}`)).data},async SubmitAccessPoint(e,u){const g=JSON.stringify({accessPoints:e});return(await _.post(`/access/update/${u}`,g)).data},async AddAdmin(e){const u=JSON.stringify(e);return(await _.post("/create",u)).data}},Be=ie({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Ce(),...Ne()},"VSwitch"),Le=ue()({name:"VSwitch",inheritAttrs:!1,props:Be(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{attrs:g,slots:n}=u;const f=q(e,"indeterminate"),m=q(e,"modelValue"),{loaderClasses:P}=de(e),{isFocused:S,focus:N,blur:y}=xe(e),p=r(),i=ce&&window.matchMedia("(forced-colors: active)").matches,k=K(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),d=me(),U=K(()=>e.id||`switch-${d}`);function D(){f.value&&(f.value=!1)}function $(A){var w,h;A.stopPropagation(),A.preventDefault(),(h=(w=p.value)==null?void 0:w.input)==null||h.click()}return ve(()=>{const[A,w]=fe(g),h=ae.filterProps(e),j=te.filterProps(e);return t(ae,W({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":f.value},P.value,e.class]},A,h,{modelValue:m.value,"onUpdate:modelValue":B=>m.value=B,id:U.value,focused:S.value,style:e.style}),{...n,default:B=>{let{id:F,messagesId:M,isDisabled:a,isReadonly:l,isValid:s}=B;const C={model:m,isValid:s};return t(te,W({ref:p},j,{modelValue:m.value,"onUpdate:modelValue":[b=>m.value=b,D],id:F.value,"aria-describedby":M.value,type:"checkbox","aria-checked":f.value?"mixed":void 0,disabled:a.value,readonly:l.value,onFocus:N,onBlur:y},w),{...n,default:b=>{let{backgroundColorClasses:E,backgroundColorStyles:V}=b;return t("div",{class:["v-switch__track",i?void 0:E.value],style:V.value,onClick:$},[n["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[n["track-true"](C)]),n["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[n["track-false"](C)])])},input:b=>{let{inputNode:E,icon:V,backgroundColorClasses:se,backgroundColorStyles:oe}=b;return t(Z,null,[E,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":V||e.loading},e.inset||i?void 0:se.value],style:e.inset?void 0:oe.value},[n.thumb?t(pe,{defaults:{VIcon:{icon:V,size:"x-small"}}},{default:()=>[n.thumb({...C,icon:V})]}):t(Se,null,{default:()=>[e.loading?t(Ve,{name:"v-switch",active:!0,color:s.value===!1?void 0:k.value},{default:G=>n.loader?n.loader(G):t(ge,{active:G.isActive,color:G.color,indeterminate:!0,size:"16",width:"2"},null)}):V&&t(T,{key:String(V),icon:V,size:"x-small"},null)]})])])}})}})}),{}}}),Ie={class:"px-5 py-3 d-flex justify-end"},ze={key:0,class:"table-green"},Ue={key:1,class:"table-red"},De={class:"d-flex flex-column w-100 h-100 my-2"},Re={key:0,class:"dialog-loading"},Te={class:"d-flex justify-space-between"},$e={class:"d-flex justify-space-between"},je={__name:"managmentAdminView",setup(e){const u=r([{title:"نام",key:"firstName"},{title:"نام خانوادگی",key:"lastName"},{title:"شماره همراه",key:"phoneNumber"},{title:"نقش",key:"role"},{title:"اکتیو",key:"isBlocked"},{title:"فعالیت",key:"action"}]),g=r([]),n=r(""),f=r(!1),m=r(!1),P=r(!1),S=r(!1),N=r(),y=r(!1),p=r(""),i=r(!1),k=r(!1),d=r({firstName:"",lastName:"",phoneNumber:"",password:"",role:0}),U=r(""),D=async()=>{try{f.value=!0;const a=await R.AdminList();return g.value=a.data,a}catch(a){p.value=a.response.data.error||"خطایی رخ داده است!",i.value=!0,setTimeout(()=>{i.value=!1},1e4)}finally{f.value=!1}},$=async a=>{try{P.value=!0;const l=await R.AccessPoint(a);return N.value=l.data,l}catch(l){p.value=l.response.data.error||"خطایی رخ داده است!",i.value=!0,setTimeout(()=>{i.value=!1},1e4)}finally{P.value=!1}},A=async a=>{y.value=!0,$(a.id),U.value=a.id},w=async()=>{try{S.value=!0;const a=await R.SubmitAccessPoint(N.value,U.value);return y.value=!1,a}catch(a){p.value=a.response.data.error||"خطایی رخ داده است!",i.value=!0,setTimeout(()=>{i.value=!1},1e4)}finally{S.value=!1}},h=async()=>{try{m.value=!0;const a=await R.AddAdmin(d.value);return k.value=!1,D(),a}catch(a){p.value=a.response.data.error||"خطایی رخ داده است!",i.value=!0,setTimeout(()=>{i.value=!1},1e4)}finally{m.value=!1}},j=[a=>!!a||"شماره همراه الزامی است",a=>/^09\d{9}$/.test(a)||"شماره معتبر نیست"],B=[a=>!!a||"رمز عبور الزامی است",a=>a&&a.length>=8||"رمز عبور باید حداقل ۸ کاراکتر باشد",a=>/[A-Z]/.test(a)||"رمز عبور باید حداقل یک حرف بزرگ داشته باشد",a=>/[a-z]/.test(a)||"رمز عبور باید حداقل یک حرف کوچک داشته باشد",a=>/[0-9]/.test(a)||"رمز عبور باید حداقل یک عدد داشته باشد",a=>/[^A-Za-z0-9]/.test(a)||"رمز عبور باید حداقل یک کاراکتر خاص (!@#$%^&*) داشته باشد"],F=[a=>!!a||"نام الزامی است"],M=[a=>!!a||"نام خانوادگی الزامی است"];return ke(()=>{D()}),(a,l)=>(v(),x(Z,null,[t(he,null,{default:o(()=>[t(Q,null,{default:o(()=>[t(L,{cols:"12"},{default:o(()=>[t(H,{title:"سطح دسترسی ها"},{text:o(()=>[t(z,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=s=>n.value=s),label:"جستجو","prepend-inner-icon":"ri-search-line"},null,8,["modelValue"])]),default:o(()=>[c("div",Ie,[t(I,{onClick:l[0]||(l[0]=s=>k.value=!0)},{default:o(()=>l[10]||(l[10]=[X("افزودن کاربر")])),_:1})]),t(_e,{headers:u.value,items:g.value,search:n.value,loading:f.value},{"item.isBlocked":o(({item:s})=>[s.isBlocked==!0?(v(),J(T,{key:0,size:"small",icon:"ri-close-line",color:"#c9190c"})):s.isBlocked==!1?(v(),J(T,{key:1,size:"small",icon:"ri-check-line",color:"#0b8707"})):O("",!0)]),"item.role":o(({item:s})=>[s.role==!0?(v(),x("span",ze,"مدیر")):s.role==!1?(v(),x("span",Ue,"کارشناس")):O("",!0)]),"item.action":o(({item:s})=>[t(T,{class:"me-2",size:"small",icon:"ri-user-settings-line",color:"#d4af37",onClick:C=>A(s)},null,8,["onClick"])]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1})]),_:1})]),_:1}),t(ee,{modelValue:y.value,"onUpdate:modelValue":l[3]||(l[3]=s=>y.value=s),"max-width":"450",class:"dialog"},{default:o(()=>[t(H,{class:"dialog-card"},{default:o(()=>[l[12]||(l[12]=c("div",{class:"k-dialog-title"},[c("p",null,"سطح دسترسی")],-1)),c("div",De,[P.value==!0?(v(),x("div",Re,l[11]||(l[11]=[c("p",null,"لطفا منتظر بمانید ... ",-1)]))):(v(!0),x(Z,{key:1},Ae(N.value,(s,C)=>(v(),x("div",{class:"d-flex justify-space-between align-items-center mx-4 my-2",key:C},[c("span",null,Y(s.persianName),1),t(Le,{modelValue:s.isAccess,"onUpdate:modelValue":b=>s.isAccess=b,color:"#b08c4d"},null,8,["modelValue","onUpdate:modelValue"])]))),128))]),c("div",Te,[t(I,{text:"انصراف",onClick:l[2]||(l[2]=s=>y.value=!1),size:"large",class:"m-3",variant:"outlined"}),t(I,{text:"ثبت دسترسی",onClick:w,size:"large",class:"m-3",loading:S.value},null,8,["loading"])])]),_:1})]),_:1},8,["modelValue"]),t(ee,{modelValue:k.value,"onUpdate:modelValue":l[9]||(l[9]=s=>k.value=s),"max-width":"600",class:"dialog"},{default:o(()=>[t(H,{class:"dialog-card"},{default:o(()=>[l[13]||(l[13]=c("div",{class:"k-dialog-title"},[c("p",null,"افزودن ادمین جدید")],-1)),t(Pe,{ref:"form",onSubmit:we(h,["prevent"])},{default:o(()=>[t(Q,null,{default:o(()=>[t(L,{cols:"12",md:"6",class:"my-4"},{default:o(()=>[t(z,{modelValue:d.value.firstName,"onUpdate:modelValue":l[4]||(l[4]=s=>d.value.firstName=s),label:"نام",variant:"outlined",rules:F},null,8,["modelValue"])]),_:1}),t(L,{cols:"12",md:"6",class:"my-4"},{default:o(()=>[t(z,{modelValue:d.value.lastName,"onUpdate:modelValue":l[5]||(l[5]=s=>d.value.lastName=s),label:"نام خانوادگی",variant:"outlined",rules:M},null,8,["modelValue"])]),_:1}),t(L,{cols:"12",md:"6",class:"my-4"},{default:o(()=>[t(z,{modelValue:d.value.phoneNumber,"onUpdate:modelValue":l[6]||(l[6]=s=>d.value.phoneNumber=s),label:"شماره همراه",variant:"outlined",rules:j},null,8,["modelValue"])]),_:1}),t(L,{cols:"12",md:"6",class:"my-4"},{default:o(()=>[t(z,{modelValue:d.value.password,"onUpdate:modelValue":l[7]||(l[7]=s=>d.value.password=s),label:"رمز عبور",variant:"outlined",rules:B},null,8,["modelValue"])]),_:1})]),_:1}),c("div",$e,[t(I,{text:"انصراف",onClick:l[8]||(l[8]=s=>k.value=!1),size:"large",class:"m-3",variant:"outlined"}),t(I,{type:"submit",text:"افزودن",size:"large",class:"m-3",loading:m.value},null,8,["loading"])])]),_:1},512)]),_:1})]),_:1},8,["modelValue"]),i.value?(v(),J(be,{key:0,color:"error",border:"bottom",elevation:"2",class:"k-alert alert-animatiton",closable:""},{default:o(()=>[X(Y(p.value),1)]),_:1})):O("",!0)],64))}},Qe=ye(je,[["__scopeId","data-v-05d3be43"]]);export{Qe as default};
