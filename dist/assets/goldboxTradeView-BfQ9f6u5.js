import{G as fe}from"./goldbox-Dckl-vGc.js";import{B as T,D as $,S as pe,I as H,b as e,a6 as ae,a2 as w,a7 as be,a8 as Ve,a9 as ke,aa as ye,y as S,X as _e,ab as xe,ac as Se,V as X,K as z,C as ge,ad as Ce,E as we,H as ee,ae as Ie,L as Pe,af as Ne,ag as he,M as Be,ah as Te,N as Ae,O as De,P as We,ai as ze,Q as Re,s as Ee,aj as Fe,ak as Le,al as $e,U as He,am as Ue,R as Ge,an as je,ao as Me,ap as Oe,aq as qe,k as Ke,ar as Qe,as as se,at as Xe,F as Z,_ as Je,r as _,c as W,w as a,$ as E,e as F,a5 as oe,a3 as j,o as x,a0 as p,au as Ye,a as d,A as C,t as B}from"./index-DmgxRB-4.js";import{V as Ze}from"./index-DKlL1WMg.js";import{m as el,V as ne,a as ll,b as re}from"./VWindowItem-DHECF_T0.js";import{V as tl}from"./ssrBoot-CQrWc69C.js";import{V as M,a as O,c as q}from"./VTextField-DaCIV6TW.js";import{V as K}from"./VForm-79T8sHKA.js";import{V as Q}from"./VContainer-BwRoTkPP.js";import"./api-D3v2CiAO.js";import"./VImg-CDKDXNUY.js";const le=Symbol.for("vuetify:v-stepper"),ie=T({color:String,disabled:{type:[Boolean,String],default:!1},prevText:{type:String,default:"$vuetify.stepper.prev"},nextText:{type:String,default:"$vuetify.stepper.next"}},"VStepperActions"),al=$()({name:"VStepperActions",props:ie(),emits:{"click:prev":()=>!0,"click:next":()=>!0},setup(l,u){let{emit:s,slots:r}=u;const{t:v}=pe();function b(){s("click:prev")}function f(){s("click:next")}return H(()=>{const k={onClick:b},c={onClick:f};return e("div",{class:"v-stepper-actions"},[e(ae,{defaults:{VBtn:{disabled:["prev",!0].includes(l.disabled),text:v(l.prevText),variant:"text"}}},{default:()=>{var m;return[((m=r.prev)==null?void 0:m.call(r,{props:k}))??e(w,k,null)]}}),e(ae,{defaults:{VBtn:{color:l.color,disabled:["next",!0].includes(l.disabled),text:v(l.nextText),variant:"tonal"}}},{default:()=>{var m;return[((m=r.next)==null?void 0:m.call(r,{props:c}))??e(w,c,null)]}})])}),{}}}),de=be("v-stepper-header"),sl=T({color:String,title:String,subtitle:String,complete:Boolean,completeIcon:{type:z,default:"$complete"},editable:Boolean,editIcon:{type:z,default:"$edit"},error:Boolean,errorIcon:{type:z,default:"$error"},icon:z,ripple:{type:[Boolean,Object],default:!0},rules:{type:Array,default:()=>[]}},"StepperItem"),ol=T({...sl(),...Ve()},"VStepperItem"),ce=$()({name:"VStepperItem",directives:{Ripple:ke},props:ol(),emits:{"group:selected":l=>!0},setup(l,u){let{slots:s}=u;const r=ye(l,le,!0),v=S(()=>(r==null?void 0:r.value.value)??l.value),b=S(()=>l.rules.every(A=>A()===!0)),f=S(()=>!l.disabled&&l.editable),k=S(()=>!l.disabled&&l.editable),c=S(()=>l.error||!b.value),m=S(()=>l.complete||l.rules.length>0&&b.value),i=S(()=>c.value?l.errorIcon:m.value?l.completeIcon:r.isSelected.value&&l.editable?l.editIcon:l.icon),y=S(()=>({canEdit:k.value,hasError:c.value,hasCompleted:m.value,title:l.title,subtitle:l.subtitle,step:v.value,value:l.value}));return H(()=>{var g,D,N;const A=(!r||r.isSelected.value||m.value||k.value)&&!c.value&&!l.disabled,U=!!(l.title!=null||s.title),R=!!(l.subtitle!=null||s.subtitle);function P(){r==null||r.toggle()}return _e(e("button",{class:["v-stepper-item",{"v-stepper-item--complete":m.value,"v-stepper-item--disabled":l.disabled,"v-stepper-item--error":c.value},r==null?void 0:r.selectedClass.value],disabled:!l.editable,onClick:P},[f.value&&Se(!0,"v-stepper-item"),e(Ze,{key:"stepper-avatar",class:"v-stepper-item__avatar",color:A?l.color:void 0,size:24},{default:()=>{var V;return[((V=s.icon)==null?void 0:V.call(s,y.value))??(i.value?e(X,{icon:i.value},null):v.value)]}}),e("div",{class:"v-stepper-item__content"},[U&&e("div",{key:"title",class:"v-stepper-item__title"},[((g=s.title)==null?void 0:g.call(s,y.value))??l.title]),R&&e("div",{key:"subtitle",class:"v-stepper-item__subtitle"},[((D=s.subtitle)==null?void 0:D.call(s,y.value))??l.subtitle]),(N=s.default)==null?void 0:N.call(s,y.value)])]),[[xe("ripple"),l.ripple&&l.editable,null]])}),{}}}),nl=T({...ge(el(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VStepperWindow"),me=$()({name:"VStepperWindow",props:nl(),emits:{"update:modelValue":l=>!0},setup(l,u){let{slots:s}=u;const r=Ce(le,null),v=we(l,"modelValue"),b=S({get(){var f;return v.value!=null||!r?v.value:(f=r.items.value.find(k=>r.selected.value.includes(k.id)))==null?void 0:f.value},set(f){v.value=f}});return H(()=>{const f=ne.filterProps(l);return e(ne,ee({_as:"VStepperWindow"},f,{modelValue:b.value,"onUpdate:modelValue":k=>b.value=k,class:["v-stepper-window",l.class],style:l.style,mandatory:!1,touch:!1}),s)}),{}}}),rl=T({...ll()},"VStepperWindowItem"),L=$()({name:"VStepperWindowItem",props:rl(),setup(l,u){let{slots:s}=u;return H(()=>{const r=re.filterProps(l);return e(re,ee({_as:"VStepperWindowItem"},r,{class:["v-stepper-window-item",l.class],style:l.style}),s)}),{}}}),ve=T({color:String,...Ie(),...Pe(),...Ne(),...he(),...Be(),...Te(),...Ae(),...De(),...We()},"VSheet"),ue=$()({name:"VSheet",props:ve(),setup(l,u){let{slots:s}=u;const{themeClasses:r}=ze(l),{backgroundColorClasses:v,backgroundColorStyles:b}=Re(Ee(l,"color")),{borderClasses:f}=Fe(l),{dimensionStyles:k}=Le(l),{elevationClasses:c}=$e(l),{locationStyles:m}=He(l),{positionClasses:i}=Ue(l),{roundedClasses:y}=Ge(l);return H(()=>e(l.tag,{class:["v-sheet",r.value,v.value,f.value,c.value,i.value,y.value,l.class],style:[b.value,k.value,m.value,l.style]},s)),{}}}),ul=T({altLabels:Boolean,bgColor:String,completeIcon:z,editIcon:z,editable:Boolean,errorIcon:z,hideActions:Boolean,items:{type:Array,default:()=>[]},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},nonLinear:Boolean,flat:Boolean,...je()},"Stepper"),il=T({...ul(),...Me({mandatory:"force",selectedClass:"v-stepper-item--selected"}),...ve(),...Oe(ie(),["prevText","nextText"])},"VStepper"),dl=$()({name:"VStepper",props:il(),emits:{"update:modelValue":l=>!0},setup(l,u){let{slots:s}=u;const{items:r,next:v,prev:b,selected:f}=qe(l,le),{displayClasses:k,mobile:c}=Ke(l),{completeIcon:m,editIcon:i,errorIcon:y,color:A,editable:U,prevText:R,nextText:P}=Qe(l),g=S(()=>l.items.map((V,h)=>{const I=se(V,l.itemTitle,V),G=se(V,l.itemValue,h+1);return{title:I,value:G,raw:V}})),D=S(()=>r.value.findIndex(V=>f.value.includes(V.id))),N=S(()=>l.disabled?l.disabled:D.value===0?"prev":D.value===r.value.length-1?"next":!1);return Xe({VStepperItem:{editable:U,errorIcon:y,completeIcon:m,editIcon:i,prevText:R,nextText:P},VStepperActions:{color:A,disabled:N,prevText:R,nextText:P}}),H(()=>{const V=ue.filterProps(l),h=!!(s.header||l.items.length),I=l.items.length>0,G=!l.hideActions&&!!(I||s.actions);return e(ue,ee(V,{color:l.bgColor,class:["v-stepper",{"v-stepper--alt-labels":l.altLabels,"v-stepper--flat":l.flat,"v-stepper--non-linear":l.nonLinear,"v-stepper--mobile":c.value},k.value,l.class],style:l.style}),{default:()=>{var n,t;return[h&&e(de,{key:"stepper-header"},{default:()=>[g.value.map((o,J)=>{let{raw:Y,...te}=o;return e(Z,null,[!!J&&e(tl,null,null),e(ce,te,{default:s[`header-item.${te.value}`]??s.header,icon:s.icon,title:s.title,subtitle:s.subtitle})])})]}),I&&e(me,{key:"stepper-window"},{default:()=>[g.value.map(o=>e(L,{value:o.value},{default:()=>{var J,Y;return((J=s[`item.${o.value}`])==null?void 0:J.call(s,o))??((Y=s.item)==null?void 0:Y.call(s,o))}}))]}),(n=s.default)==null?void 0:n.call(s,{prev:b,next:v}),G&&(((t=s.actions)==null?void 0:t.call(s,{next:v,prev:b}))??e(al,{key:"stepper-actions","onClick:prev":b,"onClick:next":v},s))]}})}),{prev:b,next:v}}}),cl={class:"w-100 d-flex justify-space-between align-items-center"},ml={key:0,class:"d-flex"},vl={key:1,class:"d-flex"},fl={key:1,class:"d-flex"},pl={class:"mb-0"},bl={class:"d-flex"},Vl={class:"mb-0"},kl={class:"d-flex"},yl={key:0,class:"mb-0"},_l={key:1,class:"mb-0"},xl={class:"d-flex"},Sl={class:"mb-0"},gl={class:"d-flex"},Cl={class:"mb-0"},wl={class:"d-flex"},Il={class:"mb-0"},Pl={class:"d-flex"},Nl={class:"mb-0"},hl={class:"d-flex"},Bl={__name:"goldboxTradeView",setup(l){const u=_(1),s=[1,2,3,4,5],r=_(!1);_(!1),_(!1),_(!1),_(!1);const v=_(""),b=_(""),f=_(!1),k=_(!1),c=_({phoneNumber:"",email:"",fullName:"",address:"",confirmCode:""}),m=_({userExist:"",userVerified:""}),i=_({id:"",firstName:"",birthDate:"",lastName:"",fatherName:"",gender:"",officeName:"",phoneNumber:"",nationalCode:"",isHaveBank:""}),y=_({}),A=async()=>{try{r.value=!0;const n=await fe.AuthNumberTradeGoldbox(c.value.phoneNumber);return m.value.userExist=n.data.userExist,m.value.userVerified=n.data.userVerified,i.value.id=n.data.user.id,i.value.firstName=n.data.user.firstName,i.value.lastName=n.data.user.lastName,i.value.fatherName=n.data.user.fatherName,i.value.gender=n.data.user.gender,i.value.officeName=n.data.user.officeName,i.value.phoneNumber=n.data.user.phoneNumber,i.value.nationalCode=n.data.user.nationalCode,i.value.isHaveBank=n.data.user.isHaveBank,i.value.birthDate=n.data.user.birthDate,n}catch(n){v.value=n.response.data.error||"خطایی رخ داده است!",f.value=!0,setTimeout(()=>{f.value=!1},1e4)}finally{r.value=!1}},U=async()=>{if(u.value===1)return await A();u.value===2||u.value===3||u.value===4||u.value===5||u.value},R=[n=>!!n||"شماره همراه الزامی است",n=>/^09\d{9}$/.test(n)||"شماره معتبر نیست"],P=n=>!!n||"این فیلد الزامی است",g=(n,t)=>{n&&(y.value[t]=n)},D=()=>{c.value.phoneNumber=c.value.phoneNumber.replace(/\D/g,"").slice(0,11)},N=n=>n<u.value,V=S(()=>y.value[u.value]?y.value[u.value].isValid:!1),h=async()=>{const n=y.value[u.value];if(n){const{valid:t}=await n.validate();if(t){const o=await U();console.log(o),o&&u.value++}}},I=()=>{u.value>1&&u.value--},G=async()=>{const n=y.value[u.value];if(n){const{valid:t}=await n.validate();t&&(alert("فرم با موفقیت ارسال شد!"),console.log(c.value))}};return(n,t)=>(x(),W(Z,null,[e(E,{class:"k-row"},{default:a(()=>[e(p,{cols:"12"},{default:a(()=>[e(dl,{modelValue:u.value,"onUpdate:modelValue":t[5]||(t[5]=o=>u.value=o)},{default:a(()=>[e(de,null,{default:a(()=>[(x(),W(Z,null,Ye(s,o=>e(ce,{key:o,complete:N(o),title:`مرحله ${o}`,value:o,icon:N(o)?"ri-check-line":"ri-close-line",color:N(o)?"#0b8707":"#c7c3c3",class:"custom-stepper-icon"},null,8,["complete","title","value","icon","color"])),64))]),_:1}),e(me,null,{default:a(()=>[e(L,{value:1},{default:a(()=>[e(M,{class:"step-card"},{default:a(()=>[e(K,{ref:o=>g(o,1)},{default:a(()=>[e(Q,null,{default:a(()=>[e(E,null,{default:a(()=>[e(p,{cols:"12"},{default:a(()=>t[6]||(t[6]=[d("div",{class:"d-flex"},[d("h3",{class:"trade-step-title"},"احراز هویت")],-1)])),_:1}),e(p,{cols:"12",md:"4",class:"d-none d-md-flex"}),e(p,{cols:"12",md:"4"},{default:a(()=>[e(O,{modelValue:c.value.phoneNumber,"onUpdate:modelValue":t[0]||(t[0]=o=>c.value.phoneNumber=o),label:"شماره همراه",variant:"outlined",rules:R,onInput:D},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"4",class:"d-none d-md-flex"})]),_:1})]),_:1})]),_:1},512),e(q,{class:"btn-box first-step"},{default:a(()=>[e(w,{onClick:h,color:"primary",size:"large",variant:"elevated",loading:r.value,disabled:!V.value},{default:a(()=>t[7]||(t[7]=[C(" بعدی ")])),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1}),e(L,{value:2},{default:a(()=>[e(M,{class:"step-card"},{default:a(()=>[e(K,{ref:o=>g(o,2)},{default:a(()=>[e(Q,null,{default:a(()=>[e(E,null,{default:a(()=>[e(p,{cols:"12"},{default:a(()=>[d("div",cl,[t[10]||(t[10]=d("h3",{class:"trade-step-title"},"اطلاعات کاربر",-1)),m.value.userVerified?(x(),W("div",ml,[t[8]||(t[8]=d("p",{class:"mb-0"},"کاربر احراز هویت شده است",-1)),e(X,{class:"me-2",size:"small",icon:"ri-check-line",color:"#0b8707"})])):(x(),W("div",vl,[t[9]||(t[9]=d("p",{class:"mb-0"},"کاربر احراز هویت نشده است",-1)),e(X,{class:"me-2",size:"small",icon:"ri-close-line",color:"#c9190c"})]))])]),_:1}),e(p,{cols:"12",md:"3",class:"my-3"},{default:a(()=>[m.value.userVerified==!1?(x(),F(O,{key:0,modelValue:i.value.nationalCode,"onUpdate:modelValue":t[1]||(t[1]=o=>i.value.nationalCode=o),label:"کد ملی",variant:"outlined"},null,8,["modelValue"])):(x(),W("div",fl,[t[11]||(t[11]=d("p",{class:"mb-0"},"کد ملی : ",-1)),d("p",pl,B(i.value.nationalCode),1)]))]),_:1}),e(p,{cols:"12",md:"3",class:"my-3"},{default:a(()=>[d("div",bl,[t[12]||(t[12]=d("p",{class:"mb-0"},"شماره همراه : ",-1)),d("p",Vl,B(c.value.phoneNumber),1)])]),_:1}),m.value.userVerified==!0?(x(),F(p,{key:0,cols:"12",md:"3",class:"my-3 d-none d-md-flex"})):j("",!0),e(p,{cols:"12",md:"3",class:"my-3"},{default:a(()=>[d("div",kl,[t[13]||(t[13]=d("p",{class:"mb-0"},"جنسیت : ",-1)),i.value.gender==!0?(x(),W("p",yl,"مرد")):i.value.gender==!1?(x(),W("p",_l,"زن")):j("",!0)])]),_:1}),e(p,{cols:"12",md:"3",class:"my-3"},{default:a(()=>[d("div",xl,[t[14]||(t[14]=d("p",{class:"mb-0"},"نام : ",-1)),d("p",Sl,B(i.value.firstName),1)])]),_:1}),e(p,{cols:"12",md:"3",class:"my-3"},{default:a(()=>[d("div",gl,[t[15]||(t[15]=d("p",{class:"mb-0"},"نام خانوادگی : ",-1)),d("p",Cl,B(i.value.lastName),1)])]),_:1}),e(p,{cols:"12",md:"3",class:"my-3"},{default:a(()=>[d("div",wl,[t[16]||(t[16]=d("p",{class:"mb-0"},"نام پدر : ",-1)),d("p",Il,B(i.value.fatherName),1)])]),_:1}),e(p,{cols:"12",md:"3",class:"my-3"},{default:a(()=>[d("div",Pl,[t[17]||(t[17]=d("p",{class:"mb-0"},"شهر : ",-1)),d("p",Nl,B(i.value.officeName),1)])]),_:1}),e(p,{cols:"12",md:"3",class:"my-3"},{default:a(()=>[d("div",hl,[t[18]||(t[18]=d("p",{class:"mb-0"},"کارت بانکی : ",-1)),i.value.isHaveBank==!0?(x(),F(X,{key:0,size:"small",icon:"ri-close-line",color:"#c9190c"})):i.value.isHaveBank==!1?(x(),F(X,{key:1,size:"small",icon:"ri-check-line",color:"#0b8707"})):j("",!0)])]),_:1})]),_:1})]),_:1})]),_:1},512),e(q,{class:"btn-box"},{default:a(()=>[e(w,{onClick:I,size:"large"},{default:a(()=>t[19]||(t[19]=[C("قبلی")])),_:1}),e(w,{onClick:h,color:"primary",size:"large",variant:"elevated",disabled:!V.value},{default:a(()=>t[20]||(t[20]=[C(" بعدی ")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),e(L,{value:3},{default:a(()=>[e(M,{class:"step-card"},{default:a(()=>[e(K,{ref:o=>g(o,3)},{default:a(()=>[e(Q,null,{default:a(()=>[e(E,null,{default:a(()=>[e(p,{cols:"12",md:"6"},{default:a(()=>[e(O,{modelValue:c.value.fullName,"onUpdate:modelValue":t[2]||(t[2]=o=>c.value.fullName=o),label:"نام و نام خانوادگی",variant:"outlined",rules:[P]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512),e(q,{class:"btn-box"},{default:a(()=>[e(w,{onClick:I,size:"large"},{default:a(()=>t[21]||(t[21]=[C("قبلی")])),_:1}),e(w,{onClick:h,color:"primary",size:"large",variant:"elevated",disabled:!V.value},{default:a(()=>t[22]||(t[22]=[C(" بعدی ")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),e(L,{value:4},{default:a(()=>[e(M,{class:"step-card"},{default:a(()=>[e(K,{ref:o=>g(o,4)},{default:a(()=>[e(Q,null,{default:a(()=>[e(E,null,{default:a(()=>[e(p,{cols:"12",md:"6"},{default:a(()=>[e(O,{modelValue:c.value.address,"onUpdate:modelValue":t[3]||(t[3]=o=>c.value.address=o),label:"آدرس خود را وارد کنید",variant:"outlined",rules:[P]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512),e(q,{class:"btn-box"},{default:a(()=>[e(w,{onClick:I,size:"large"},{default:a(()=>t[23]||(t[23]=[C("قبلی")])),_:1}),e(w,{onClick:h,color:"primary",size:"large",variant:"elevated",disabled:!V.value},{default:a(()=>t[24]||(t[24]=[C(" بعدی ")])),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1}),e(L,{value:5},{default:a(()=>[e(M,{class:"step-card"},{default:a(()=>[e(K,{ref:o=>g(o,5)},{default:a(()=>[e(Q,null,{default:a(()=>[e(E,null,{default:a(()=>[e(p,{cols:"12",md:"6"},{default:a(()=>[e(O,{modelValue:c.value.confirmCode,"onUpdate:modelValue":t[4]||(t[4]=o=>c.value.confirmCode=o),label:"کد تأیید را وارد کنید",variant:"outlined",rules:[P]},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1})]),_:1},512),e(q,{class:"btn-box"},{default:a(()=>[e(w,{onClick:I,size:"large"},{default:a(()=>t[25]||(t[25]=[C("قبلی")])),_:1}),e(w,{onClick:G,color:"success",size:"large",variant:"elevated"},{default:a(()=>t[26]||(t[26]=[C("ثبت")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),f.value?(x(),F(oe,{key:0,color:"error",border:"bottom",elevation:"2",class:"k-alert alert-animatiton",closable:""},{default:a(()=>[C(B(v.value),1)]),_:1})):j("",!0),k.value?(x(),F(oe,{key:1,color:"success",border:"bottom",elevation:"2",class:"k-alert alert-animatiton",closable:""},{default:a(()=>[C(B(b.value),1)]),_:1})):j("",!0)],64))}},Hl=Je(Bl,[["__scopeId","data-v-c00ce8b1"]]);export{Hl as default};
