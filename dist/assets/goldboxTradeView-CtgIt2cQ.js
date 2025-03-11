import{G as ye}from"./goldbox-HOditTNR.js";import{a5 as Xe,C as Y,E as Z,T as Ze,J as ee,b as a,a7 as We,a3 as H,a8 as ea,a9 as aa,aa as la,ab as ta,z as B,Y as _e,ac as Ue,ad as sa,V as K,L as X,D as na,ae as ua,G as Ee,I as ue,af as oa,M as ia,ag as ra,ah as da,N as va,ai as ma,O as ca,P as fa,Q as pa,aj as ba,R as ga,v as ya,ak as Va,al as xa,am as ka,W as ha,an as wa,S as Pa,ao as Sa,ap as Na,aq as Ca,ar as _a,l as Ia,as as Ba,at as Fe,au as Ta,F as oe,r as g,y as Wa,av as Fa,j as Da,i as ce,k as Aa,aw as Ra,ax as za,ay as Ne,az as Ga,aA as Ua,aB as Ea,_ as Ha,c as Q,w as s,a0 as J,e as z,a6 as De,a4 as O,o as C,a1 as r,aC as $a,a as n,B as E,t as x,p as Ma,aD as ja}from"./index-W2K_4ALS.js";import{V as La}from"./VDialog-CVV3IxIH.js";import{V as Oa,f as Ya}from"./index-CXAA9vRw.js";import{m as qa,V as Ae,a as Ja,b as Re}from"./VWindowItem-U2u8PRzU.js";import{e as Ie}from"./VMenu-B5wgajYW.js";import{m as Qa,d as Ka,u as Xa,e as ze,f as Za,g as el,h as al,V as fe,a as pe,c as Ve}from"./VTextField-B2ylD1kW.js";import{V as xe}from"./VForm-C0G8rmX1.js";import{V as ke}from"./VContainer-C-Dw8WXZ.js";import{V as Ce}from"./VSelect-rUAuS1qF.js";import{I as ll}from"./VImg-uBnxvz-E.js";import"./api-CXqEyOSp.js";const Be=Xe.create({baseURL:"https://khaneetala.ir/api",headers:{"Content-Type":"application/json",Accept:"application/json"}});Be.interceptors.request.use(e=>{const m=localStorage.getItem("token");return m&&(e.headers.Authorization=`Bearer ${m}`),e},e=>Promise.reject(e));Be.interceptors.response.use(e=>e,e=>(e.response.status==401&&(localStorage.removeItem("token"),router.push("/login")),console.error("API Error:",e.response||e.message),Promise.reject(e)));const tl={async GoldPriceByTime(e){return(await Be.get(`/goldPrice/${e}`)).data}},Te=Symbol.for("vuetify:v-stepper"),He=Y({color:String,disabled:{type:[Boolean,String],default:!1},prevText:{type:String,default:"$vuetify.stepper.prev"},nextText:{type:String,default:"$vuetify.stepper.next"}},"VStepperActions"),sl=Z()({name:"VStepperActions",props:He(),emits:{"click:prev":()=>!0,"click:next":()=>!0},setup(e,m){let{emit:u,slots:v}=m;const{t:c}=Ze();function p(){u("click:prev")}function V(){u("click:next")}return ee(()=>{const w={onClick:p},P={onClick:V};return a("div",{class:"v-stepper-actions"},[a(We,{defaults:{VBtn:{disabled:["prev",!0].includes(e.disabled),text:c(e.prevText),variant:"text"}}},{default:()=>{var k;return[((k=v.prev)==null?void 0:k.call(v,{props:w}))??a(H,w,null)]}}),a(We,{defaults:{VBtn:{color:e.color,disabled:["next",!0].includes(e.disabled),text:c(e.nextText),variant:"tonal"}}},{default:()=>{var k;return[((k=v.next)==null?void 0:k.call(v,{props:P}))??a(H,P,null)]}})])}),{}}}),$e=ea("v-stepper-header"),nl=Y({color:String,title:String,subtitle:String,complete:Boolean,completeIcon:{type:X,default:"$complete"},editable:Boolean,editIcon:{type:X,default:"$edit"},error:Boolean,errorIcon:{type:X,default:"$error"},icon:X,ripple:{type:[Boolean,Object],default:!0},rules:{type:Array,default:()=>[]}},"StepperItem"),ul=Y({...nl(),...aa()},"VStepperItem"),Me=Z()({name:"VStepperItem",directives:{Ripple:la},props:ul(),emits:{"group:selected":e=>!0},setup(e,m){let{slots:u}=m;const v=ta(e,Te,!0),c=B(()=>(v==null?void 0:v.value.value)??e.value),p=B(()=>e.rules.every(S=>S()===!0)),V=B(()=>!e.disabled&&e.editable),w=B(()=>!e.disabled&&e.editable),P=B(()=>e.error||!p.value),k=B(()=>e.complete||e.rules.length>0&&p.value),W=B(()=>P.value?e.errorIcon:k.value?e.completeIcon:v.isSelected.value&&e.editable?e.editIcon:e.icon),D=B(()=>({canEdit:w.value,hasError:P.value,hasCompleted:k.value,title:e.title,subtitle:e.subtitle,step:c.value,value:e.value}));return ee(()=>{var _,f,h;const S=(!v||v.isSelected.value||k.value||w.value)&&!P.value&&!e.disabled,$=!!(e.title!=null||u.title),A=!!(e.subtitle!=null||u.subtitle);function d(){v==null||v.toggle()}return _e(a("button",{class:["v-stepper-item",{"v-stepper-item--complete":k.value,"v-stepper-item--disabled":e.disabled,"v-stepper-item--error":P.value},v==null?void 0:v.selectedClass.value],disabled:!e.editable,onClick:d},[V.value&&sa(!0,"v-stepper-item"),a(Oa,{key:"stepper-avatar",class:"v-stepper-item__avatar",color:S?e.color:void 0,size:24},{default:()=>{var y;return[((y=u.icon)==null?void 0:y.call(u,D.value))??(W.value?a(K,{icon:W.value},null):c.value)]}}),a("div",{class:"v-stepper-item__content"},[$&&a("div",{key:"title",class:"v-stepper-item__title"},[((_=u.title)==null?void 0:_.call(u,D.value))??e.title]),A&&a("div",{key:"subtitle",class:"v-stepper-item__subtitle"},[((f=u.subtitle)==null?void 0:f.call(u,D.value))??e.subtitle]),(h=u.default)==null?void 0:h.call(u,D.value)])]),[[Ue("ripple"),e.ripple&&e.editable,null]])}),{}}}),ol=Y({...na(qa(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VStepperWindow"),je=Z()({name:"VStepperWindow",props:ol(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:u}=m;const v=ua(Te,null),c=Ee(e,"modelValue"),p=B({get(){var V;return c.value!=null||!v?c.value:(V=v.items.value.find(w=>v.selected.value.includes(w.id)))==null?void 0:V.value},set(V){c.value=V}});return ee(()=>{const V=Ae.filterProps(e);return a(Ae,ue({_as:"VStepperWindow"},V,{modelValue:p.value,"onUpdate:modelValue":w=>p.value=w,class:["v-stepper-window",e.class],style:e.style,mandatory:!1,touch:!1}),u)}),{}}}),il=Y({...Ja()},"VStepperWindowItem"),be=Z()({name:"VStepperWindowItem",props:il(),setup(e,m){let{slots:u}=m;return ee(()=>{const v=Re.filterProps(e);return a(Re,ue({_as:"VStepperWindowItem"},v,{class:["v-stepper-window-item",e.class],style:e.style}),u)}),{}}}),Le=Y({color:String,...oa(),...ia(),...ra(),...da(),...va(),...ma(),...ca(),...fa(),...pa()},"VSheet"),Ge=Z()({name:"VSheet",props:Le(),setup(e,m){let{slots:u}=m;const{themeClasses:v}=ba(e),{backgroundColorClasses:c,backgroundColorStyles:p}=ga(ya(e,"color")),{borderClasses:V}=Va(e),{dimensionStyles:w}=xa(e),{elevationClasses:P}=ka(e),{locationStyles:k}=ha(e),{positionClasses:W}=wa(e),{roundedClasses:D}=Pa(e);return ee(()=>a(e.tag,{class:["v-sheet",v.value,c.value,V.value,P.value,W.value,D.value,e.class],style:[p.value,w.value,k.value,e.style]},u)),{}}}),rl=Y({altLabels:Boolean,bgColor:String,completeIcon:X,editIcon:X,editable:Boolean,errorIcon:X,hideActions:Boolean,items:{type:Array,default:()=>[]},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},nonLinear:Boolean,flat:Boolean,...Sa()},"Stepper"),dl=Y({...rl(),...Na({mandatory:"force",selectedClass:"v-stepper-item--selected"}),...Le(),...Ca(He(),["prevText","nextText"])},"VStepper"),vl=Z()({name:"VStepper",props:dl(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:u}=m;const{items:v,next:c,prev:p,selected:V}=_a(e,Te),{displayClasses:w,mobile:P}=Ia(e),{completeIcon:k,editIcon:W,errorIcon:D,color:S,editable:$,prevText:A,nextText:d}=Ba(e),_=B(()=>e.items.map((y,o)=>{const q=Fe(y,e.itemTitle,y),R=Fe(y,e.itemValue,o+1);return{title:q,value:R,raw:y}})),f=B(()=>v.value.findIndex(y=>V.value.includes(y.id))),h=B(()=>e.disabled?e.disabled:f.value===0?"prev":f.value===v.value.length-1?"next":!1);return Ta({VStepperItem:{editable:$,errorIcon:D,completeIcon:k,editIcon:W,prevText:A,nextText:d},VStepperActions:{color:S,disabled:h,prevText:A,nextText:d}}),ee(()=>{const y=Ge.filterProps(e),o=!!(u.header||e.items.length),q=e.items.length>0,R=!e.hideActions&&!!(q||u.actions);return a(Ge,ue(y,{color:e.bgColor,class:["v-stepper",{"v-stepper--alt-labels":e.altLabels,"v-stepper--flat":e.flat,"v-stepper--non-linear":e.nonLinear,"v-stepper--mobile":P.value},w.value,e.class],style:e.style}),{default:()=>{var L,G;return[o&&a($e,{key:"stepper-header"},{default:()=>[_.value.map((N,F)=>{let{raw:b,...T}=N;return a(oe,null,[!!F&&a(Ie,null,null),a(Me,T,{default:u[`header-item.${T.value}`]??u.header,icon:u.icon,title:u.title,subtitle:u.subtitle})])})]}),q&&a(je,{key:"stepper-window"},{default:()=>[_.value.map(N=>a(be,{value:N.value},{default:()=>{var F,b;return((F=u[`item.${N.value}`])==null?void 0:F.call(u,N))??((b=u.item)==null?void 0:b.call(u,N))}}))]}),(L=u.default)==null?void 0:L.call(u,{prev:p,next:c}),R&&(((G=u.actions)==null?void 0:G.call(u,{next:c,prev:p}))??a(sl,{key:"stepper-actions","onClick:prev":p,"onClick:next":c},u))]}})}),{prev:p,next:c}}}),ml=Y({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Qa(),...Ka()},"VTextarea"),cl=Z()({name:"VTextarea",directives:{Intersect:ll},inheritAttrs:!1,props:ml(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,m){let{attrs:u,emit:v,slots:c}=m;const p=Ee(e,"modelValue"),{isFocused:V,focus:w,blur:P}=Xa(e),k=B(()=>typeof e.counterValue=="function"?e.counterValue(p.value):(p.value||"").toString().length),W=B(()=>{if(u.maxlength)return u.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function D(b,T){var I,U;!e.autofocus||!b||(U=(I=T[0].target)==null?void 0:I.focus)==null||U.call(I)}const S=g(),$=g(),A=Wa(""),d=g(),_=B(()=>e.persistentPlaceholder||V.value||e.active);function f(){var b;d.value!==document.activeElement&&((b=d.value)==null||b.focus()),V.value||w()}function h(b){f(),v("click:control",b)}function y(b){v("mousedown:control",b)}function o(b){b.stopPropagation(),f(),Ne(()=>{p.value="",Ga(e["onClick:clear"],b)})}function q(b){var I;const T=b.target;if(p.value=T.value,(I=e.modelModifiers)!=null&&I.trim){const U=[T.selectionStart,T.selectionEnd];Ne(()=>{T.selectionStart=U[0],T.selectionEnd=U[1]})}}const R=g(),L=g(+e.rows),G=B(()=>["plain","underlined"].includes(e.variant));Fa(()=>{e.autoGrow||(L.value=+e.rows)});function N(){e.autoGrow&&Ne(()=>{if(!R.value||!$.value)return;const b=getComputedStyle(R.value),T=getComputedStyle($.value.$el),I=parseFloat(b.getPropertyValue("--v-field-padding-top"))+parseFloat(b.getPropertyValue("--v-input-padding-top"))+parseFloat(b.getPropertyValue("--v-field-padding-bottom")),U=R.value.scrollHeight,ae=parseFloat(b.lineHeight),ie=Math.max(parseFloat(e.rows)*ae+I,parseFloat(T.getPropertyValue("--v-input-control-height"))),re=parseFloat(e.maxRows)*ae+I||1/0,M=Ea(U??0,ie,re);L.value=Math.floor((M-I)/ae),A.value=Ua(M)})}Da(N),ce(p,N),ce(()=>e.rows,N),ce(()=>e.maxRows,N),ce(()=>e.density,N);let F;return ce(R,b=>{b?(F=new ResizeObserver(N),F.observe(R.value)):F==null||F.disconnect()}),Aa(()=>{F==null||F.disconnect()}),ee(()=>{const b=!!(c.counter||e.counter||e.counterValue),T=!!(b||c.details),[I,U]=Ra(u),{modelValue:ae,...ie}=ze.filterProps(e),re=Za(e);return a(ze,ue({ref:S,modelValue:p.value,"onUpdate:modelValue":M=>p.value=M,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":G.value},e.class],style:e.style},I,ie,{centerAffix:L.value===1&&!G.value,focused:V.value}),{...c,default:M=>{let{id:le,isDisabled:de,isDirty:ge,isReadonly:he,isValid:te}=M;return a(el,ue({ref:$,style:{"--v-textarea-control-height":A.value},onClick:h,onMousedown:y,"onClick:clear":o,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},re,{id:le.value,active:_.value||ge.value,centerAffix:L.value===1&&!G.value,dirty:ge.value||e.dirty,disabled:de.value,focused:V.value,error:te.value===!1}),{...c,default:we=>{let{props:{class:se,...ne}}=we;return a(oe,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),_e(a("textarea",ue({ref:d,class:se,value:p.value,onInput:q,autofocus:e.autofocus,readonly:he.value,disabled:de.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:f,onBlur:P},ne,U),null),[[Ue("intersect"),{handler:D},null,{once:!0}]]),e.autoGrow&&_e(a("textarea",{class:[se,"v-textarea__sizer"],id:`${ne.id}-sizer`,"onUpdate:modelValue":ve=>p.value=ve,ref:R,readonly:!0,"aria-hidden":"true"},null),[[za,p.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:T?M=>{var le;return a(oe,null,[(le=c.details)==null?void 0:le.call(c,M),b&&a(oe,null,[a("span",null,null),a(al,{active:e.persistentCounter||V.value,value:k.value,max:W.value,disabled:e.disabled},c.counter)])])}:void 0})}),Ya({},S,$,d)}}),fl={class:"w-100 d-flex justify-space-between align-items-center"},pl={key:0,class:"d-flex"},bl={key:1,class:"d-flex"},gl={key:1,class:"d-flex"},yl={class:"mb-0"},Vl={class:"d-flex"},xl={class:"mb-0"},kl={class:"d-flex"},hl={class:"mb-0"},wl={class:"d-flex"},Pl={key:0,class:"mb-0"},Sl={key:1,class:"mb-0"},Nl={class:"d-flex"},Cl={class:"mb-0"},_l={class:"d-flex"},Il={class:"mb-0"},Bl={class:"d-flex"},Tl={class:"mb-0"},Wl={class:"d-flex"},Fl={class:"mb-0"},Dl={class:"d-flex"},Al={class:"livePrice-box"},Rl={class:"d-flex justify-center align-center h-100"},zl={class:"invoice-box"},Gl={class:"invoice-box"},Ul={class:"invoice-box"},El={class:"invoice-box"},Hl={class:"invoice-box"},$l={class:"invoice-box"},Ml={class:"invoice-box"},jl={class:"invoice-box"},Ll={class:"invoice-box"},Ol={class:"invoice-box"},Yl={class:"invoice-box"},ql={class:"invoice-box"},Jl={__name:"goldboxTradeView",setup(e){const m=g(1),u=[1,2,3,4],v=g(!1),c=g(!1),p=g(!1),V=g(!1),w=g(),P=g(),k=g(),W=g(""),D=g(""),S=g(!1),$=g(!1),A=g(!1),d=g({goldPrice:"",goldWeight:"",totalPrice:"",date:"",time:"",adminId:"",wallet:{goldWeight:"",balance:"",blocked:""},user:{firstName:"",lastName:"",fatherName:"",phoneNumber:"",nationalCode:""}}),_=g({phoneNumber:"",email:"",fullName:"",address:"",confirmCode:""}),f=g({userId:"",goldPrice:"",goldWeight:"",description:"",totalPrice:"",invoiceId:""}),h=g({date:"",time:"",buyPrice:"",sellPrice:"",milliseconds:""}),y=g({userExist:"",userVerified:""}),o=g({id:"",firstName:"",birthDate:"",lastName:"",fatherName:"",gender:"",officeName:"",phoneNumber:"",nationalCode:"",isHaveBank:""}),q=g([{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4},{name:"5",value:5},{name:"6",value:6},{name:"7",value:7},{name:"8",value:8},{name:"9",value:9},{name:"10",value:10},{name:"11",value:11},{name:"12",value:12},{name:"13",value:13},{name:"14",value:14},{name:"15",value:15},{name:"16",value:16},{name:"17",value:17},{name:"18",value:18},{name:"19",value:19},{name:"20",value:20},{name:"21",value:21},{name:"22",value:22},{name:"23",value:23},{name:"24",value:24},{name:"25",value:25},{name:"26",value:26},{name:"27",value:27},{name:"28",value:28},{name:"29",value:29},{name:"30",value:30},{name:"31",value:31}]),R=g([{name:"فروردین",value:1},{name:"اردیبهشت",value:2},{name:"خرداد",value:3},{name:"تیر",value:4},{name:"مرداد",value:5},{name:"شهریور",value:6},{name:"مهر",value:7},{name:"آبان",value:8},{name:"آذر",value:9},{name:"دی",value:10},{name:"بهمن",value:11},{name:"اسفند",value:12}]),L=g([{name:"1300",value:1300},{name:"1301",value:1301},{name:"1302",value:1302},{name:"1303",value:1303},{name:"1304",value:1304},{name:"1305",value:1305},{name:"1306",value:1306},{name:"1307",value:1307},{name:"1308",value:1308},{name:"1309",value:1309},{name:"1310",value:1310},{name:"1311",value:1311},{name:"1312",value:1312},{name:"1313",value:1313},{name:"1314",value:1314},{name:"1315",value:1315},{name:"1316",value:1316},{name:"1317",value:1317},{name:"1318",value:1318},{name:"1319",value:1319},{name:"1320",value:1320},{name:"1321",value:1321},{name:"1322",value:1322},{name:"1323",value:1323},{name:"1324",value:1324},{name:"1325",value:1325},{name:"1326",value:1326},{name:"1327",value:1327},{name:"1328",value:1328},{name:"1329",value:1329},{name:"1330",value:1330},{name:"1331",value:1331},{name:"1332",value:1332},{name:"1333",value:1333},{name:"1334",value:1334},{name:"1335",value:1335},{name:"1336",value:1336},{name:"1337",value:1337},{name:"1338",value:1338},{name:"1339",value:1339},{name:"1340",value:1340},{name:"1341",value:1341},{name:"1342",value:1342},{name:"1343",value:1343},{name:"1344",value:1344},{name:"1345",value:1345},{name:"1346",value:1346},{name:"1347",value:1347},{name:"1348",value:1348},{name:"1349",value:1349},{name:"1350",value:1350},{name:"1351",value:1351},{name:"1352",value:1352},{name:"1353",value:1353},{name:"1354",value:1354},{name:"1355",value:1355},{name:"1356",value:1356},{name:"1357",value:1357},{name:"1358",value:1358},{name:"1359",value:1359},{name:"1360",value:1360},{name:"1361",value:1361},{name:"1362",value:1362},{name:"1363",value:1363},{name:"1364",value:1364},{name:"1365",value:1365},{name:"1366",value:1366},{name:"1367",value:1367},{name:"1368",value:1368},{name:"1369",value:1369},{name:"1370",value:1370},{name:"1371",value:1371},{name:"1372",value:1372},{name:"1373",value:1373},{name:"1374",value:1374},{name:"1375",value:1375},{name:"1376",value:1376},{name:"1377",value:1377},{name:"1378",value:1378},{name:"1379",value:1379},{name:"1380",value:1380},{name:"1381",value:1381},{name:"1382",value:1382},{name:"1383",value:1383},{name:"1384",value:1384},{name:"1385",value:1385},{name:"1386",value:1386},{name:"1387",value:1387},{name:"1388",value:1388},{name:"1389",value:1389},{name:"1390",value:1390},{name:"1391",value:1391},{name:"1392",value:1392},{name:"1393",value:1393},{name:"1394",value:1394},{name:"1395",value:1395},{name:"1396",value:1396},{name:"1397",value:1397},{name:"1398",value:1398},{name:"1399",value:1399},{name:"1400",value:1400},{name:"1401",value:1401},{name:"1402",value:1402},{name:"1403",value:1403}]),G=g({}),N=t=>t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),F=t=>{w.value=t,I()},b=t=>{P.value=t,I()},T=t=>{k.value=t,I()},I=()=>{if(k.value&&P.value&&w.value){const t=String(P.value).padStart(2,"0"),l=String(w.value).padStart(2,"0");o.value.birthDate=`${k.value}${t}${l}`}},U=async()=>{try{v.value=!0;const t=await ye.AuthNumberTradeGoldbox(_.value.phoneNumber);return y.value.userExist=t.data.userExist,y.value.userVerified=t.data.userVerified,o.value.id=t.data.user.id,o.value.firstName=t.data.user.firstName,o.value.lastName=t.data.user.lastName,o.value.fatherName=t.data.user.fatherName,o.value.gender=t.data.user.gender,o.value.officeName=t.data.user.officeName,o.value.phoneNumber=t.data.user.phoneNumber,o.value.nationalCode=t.data.user.nationalCode,o.value.isHaveBank=t.data.user.isHaveBank,o.value.birthDate=t.data.user.birthDate,t}catch(t){W.value=t.response.data.error||"خطایی رخ داده است!",S.value=!0,setTimeout(()=>{S.value=!1},1e4)}finally{v.value=!1}},ae=async()=>{try{p.value=!0,f.value.userId=o.value.id,f.value.goldPrice=h.value.buyPrice;const t=await ye.CreateInvoiceTradeBuy(f.value);return d.value.adminId=t.data.invoice.adminId,d.value.date=t.data.invoice.date,d.value.time=t.data.invoice.time,d.value.goldPrice=t.data.invoice.goldPrice,d.value.goldWeight=t.data.invoice.goldWeight,d.value.totalPrice=t.data.invoice.totalPrice,d.value.user.firstName=t.data.invoice.buyer.firstName,d.value.user.lastName=t.data.invoice.buyer.lastName,d.value.user.fatherName=t.data.invoice.buyer.fatherName,d.value.user.nationalCode=t.data.invoice.buyer.nationalCode,d.value.user.phoneNumber=t.data.invoice.buyer.phoneNumber,d.value.wallet.balance=t.data.wallet.balance,d.value.wallet.blocked=t.data.wallet.blocked,d.value.wallet.goldWeight=t.data.wallet.goldWeight,t}catch(t){W.value=t.response.data.error||"خطایی رخ داده است!",S.value=!0,setTimeout(()=>{S.value=!1},1e4)}finally{p.value=!1}},ie=async()=>{if(m.value===1)return await U();if(m.value===2)return!0;if(m.value===3)return await ae();if(m.value===4)return!0},re=async()=>{if(y.value.userExist==!0)try{c.value=!0,o.value.phoneNumber=_.value.phoneNumber;const t=await ye.AuthIdentityOldUser(o.value);return o.value.fatherName=t.data.fatherName,o.value.gender=t.data.gender,o.value.isHaveBank=t.data.isHaveBank,o.value.officeName=t.data.officeName,o.value.firstName=t.data.firstName,o.value.lastName=t.data.lastName,y.value.userVerified=!0,t}catch(t){W.value=t.response.data.error||"خطایی رخ داده است!",S.value=!0,setTimeout(()=>{S.value=!1},1e4)}finally{c.value=!1}else try{c.value=!0,o.value.phoneNumber=_.value.phoneNumber;const t=await ye.AuthIdentityNewUser(o.value);return o.value.fatherName=t.data.fatherName,o.value.gender=t.data.gender,o.value.isHaveBank=t.data.isHaveBank,o.value.officeName=t.data.officeName,o.value.firstName=t.data.firstName,o.value.lastName=t.data.lastName,y.value.userVerified=!0,t}catch(t){W.value=t.response.data.error||"خطایی رخ داده است!",S.value=!0,setTimeout(()=>{S.value=!1},1e4)}finally{c.value=!1}},M=[t=>!!t||"شماره همراه الزامی است",t=>/^09\d{9}$/.test(t)||"شماره معتبر نیست"],le=[t=>!!t||"شناسه پرداخت الزامی است"],de=[t=>!!t||"کد ملی الزامی است",t=>/^\d{10}$/.test(t)||"کد ملی باید ۱۰ رقم باشد",t=>{if(!/^\d{10}$/.test(t))return!0;const l=+t[9],j=t.split("").slice(0,9).reduce((i,Se,me)=>i+ +Se*(10-me),0)%11;return j<2&&l===j||j>=2&&l+j===11||"کد ملی نامعتبر است"}],ge=[t=>!!t||"مقدار ورودی نمی‌تواند خالی باشد",t=>/^\d+(\.\d{1,3})?$/.test(t)||"فقط عدد مجاز است و حداکثر 3 رقم اعشار"],he=()=>{o.value.nationalCode=o.value.nationalCode.replace(/\D/g,"").slice(0,10),de.every(t=>t(o.value.nationalCode)===!0)},te=(t,l)=>{t&&(G.value[l]=t)},we=()=>{_.value.phoneNumber=_.value.phoneNumber.replace(/\D/g,"").slice(0,11)},se=t=>t<m.value,ne=B(()=>G.value[m.value]?G.value[m.value].isValid:!1),ve=async()=>{const t=G.value[m.value];if(t){const{valid:l}=await t.validate();l&&await ie()&&m.value++}},Pe=()=>{m.value>1&&m.value--,w.value="",P.value="",k.value="",o.value.nationalCode=""},Oe=async()=>{A.value=!0,setInterval(()=>{A.value=!1,_.value.phoneNumber="",m.value=1},3e3)},Ye=()=>{const[t,l,j]=h.value.date.split("/").map(Number),[i,Se]=h.value.time.split(":").map(Number),me=ja.toGregorian(t,l,j),Ke=new Date(me.gy,me.gm-1,me.gd,i,Se,0);h.value.milliseconds=Ke.getTime()},qe=async()=>{Ye();try{V.value=!0;const t=await tl.GoldPriceByTime(h.value.milliseconds);return h.value.buyPrice=t.buyPrice,h.value.sellPrice=t.sellPrice,t}catch(t){W.value=t.response.data.error||"خطایی رخ داده است!",S.value=!0,setTimeout(()=>{S.value=!1},1e4)}finally{V.value=!1}},Je=()=>{f.value.totalPrice=f.value.totalPrice.replace(/[^0-9]/g,""),f.value.goldWeight=(f.value.totalPrice/h.value.buyPrice).toFixed(3)},Qe=()=>{f.value.goldWeight=f.value.goldWeight.replace(/[^0-9.]/g,"");const t=f.value.goldWeight.split(".");t.length>1&&(f.value.goldWeight=t[0]+"."+t.slice(1).join("")),t.length>1&&t[1].length>2&&(f.value.goldWeight=t[0]+"."+t[1].slice(0,3)),f.value.totalPrice=parseInt(f.value.goldWeight*h.value.buyPrice)};return(t,l)=>{const j=Ma("persian-date-picker");return C(),Q(oe,null,[a(J,{class:"k-row"},{default:s(()=>[a(r,{cols:"12"},{default:s(()=>[a(vl,{modelValue:m.value,"onUpdate:modelValue":l[11]||(l[11]=i=>m.value=i)},{default:s(()=>[a($e,null,{default:s(()=>[(C(),Q(oe,null,$a(u,i=>a(Me,{key:i,complete:se(i),title:`مرحله ${i}`,value:i,icon:se(i)?"ri-check-line":"ri-close-line",color:se(i)?"#0b8707":"#c7c3c3",class:"custom-stepper-icon"},null,8,["complete","title","value","icon","color"])),64))]),_:1}),a(je,null,{default:s(()=>[a(be,{value:1},{default:s(()=>[a(fe,{class:"step-card"},{default:s(()=>[a(xe,{ref:i=>te(i,1)},{default:s(()=>[a(ke,null,{default:s(()=>[a(J,null,{default:s(()=>[a(r,{cols:"12"},{default:s(()=>l[13]||(l[13]=[n("div",{class:"d-flex"},[n("h3",{class:"trade-step-title"},"احراز هویت")],-1)])),_:1}),a(r,{cols:"12",md:"4",class:"d-none d-md-flex"}),a(r,{cols:"12",md:"4"},{default:s(()=>[a(pe,{modelValue:_.value.phoneNumber,"onUpdate:modelValue":l[0]||(l[0]=i=>_.value.phoneNumber=i),label:"شماره همراه",variant:"outlined",rules:M,onInput:we},null,8,["modelValue"])]),_:1}),a(r,{cols:"12",md:"4",class:"d-none d-md-flex"})]),_:1})]),_:1})]),_:1},512),a(Ve,{class:"btn-box first-step"},{default:s(()=>[a(H,{onClick:ve,color:"primary",size:"large",variant:"elevated",loading:v.value,disabled:!ne.value},{default:s(()=>l[14]||(l[14]=[E(" بعدی ")])),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1}),a(be,{value:2},{default:s(()=>[a(fe,{class:"step-card"},{default:s(()=>[a(xe,{ref:i=>te(i,2)},{default:s(()=>[a(ke,null,{default:s(()=>[a(J,null,{default:s(()=>[a(r,{cols:"12"},{default:s(()=>[n("div",fl,[l[17]||(l[17]=n("h3",{class:"trade-step-title"},"اطلاعات کاربر",-1)),y.value.userVerified?(C(),Q("div",pl,[l[15]||(l[15]=n("p",{class:"mb-0"},"کاربر احراز هویت شده است",-1)),a(K,{class:"me-2",size:"small",icon:"ri-check-line",color:"#0b8707"})])):(C(),Q("div",bl,[l[16]||(l[16]=n("p",{class:"mb-0"},"کاربر احراز هویت نشده است",-1)),a(K,{class:"me-2",size:"small",icon:"ri-close-line",color:"#c9190c"})]))])]),_:1}),a(r,{cols:"12",md:"3",class:"my-3"},{default:s(()=>[y.value.userVerified==!1?(C(),z(pe,{key:0,modelValue:o.value.nationalCode,"onUpdate:modelValue":l[1]||(l[1]=i=>o.value.nationalCode=i),label:"کد ملی",variant:"outlined",rules:de,onInput:he},null,8,["modelValue"])):(C(),Q("div",gl,[l[18]||(l[18]=n("p",{class:"mb-0"},"کد ملی : ",-1)),n("p",yl,x(o.value.nationalCode),1)]))]),_:1}),y.value.userVerified==!1?(C(),z(r,{key:0,cols:"4",md:"3",class:"my-3"})):O("",!0),y.value.userVerified==!1?(C(),z(r,{key:1,cols:"4",md:"2",class:"my-3"},{default:s(()=>[a(Ce,{modelValue:w.value,"onUpdate:modelValue":[l[2]||(l[2]=i=>w.value=i),F],label:"روز تولد",items:q.value,variant:"outlined","item-title":"name","item-value":"value",class:"first-select",rules:[i=>!!i||"روز الزامی است"]},null,8,["modelValue","items","rules"])]),_:1})):O("",!0),y.value.userVerified==!1?(C(),z(r,{key:2,cols:"4",md:"2",class:"my-3"},{default:s(()=>[a(Ce,{modelValue:P.value,"onUpdate:modelValue":[l[3]||(l[3]=i=>P.value=i),b],label:"ماه تولد",items:R.value,variant:"outlined",class:"second-select","item-title":"name","item-value":"value",rules:[i=>!!i||"ماه الزامی است"]},null,8,["modelValue","items","rules"])]),_:1})):O("",!0),y.value.userVerified==!1?(C(),z(r,{key:3,cols:"4",md:"2",class:"my-3"},{default:s(()=>[a(Ce,{modelValue:k.value,"onUpdate:modelValue":[l[4]||(l[4]=i=>k.value=i),T],label:"سال تولد",items:L.value,variant:"outlined",class:"third-select","item-title":"name","item-value":"value",rules:[i=>!!i||"سال الزامی است"]},null,8,["modelValue","items","rules"])]),_:1})):O("",!0),y.value.userVerified==!0?(C(),z(r,{key:4,cols:"12",md:"3",class:"my-3"},{default:s(()=>[n("div",Vl,[l[19]||(l[19]=n("p",{class:"mb-0"},"تاریخ تولد : ",-1)),n("p",xl,x(o.value.birthDate),1)])]),_:1})):O("",!0),a(r,{cols:"12",md:"3",class:"my-3"},{default:s(()=>[n("div",kl,[l[20]||(l[20]=n("p",{class:"mb-0"},"شماره همراه : ",-1)),n("p",hl,x(_.value.phoneNumber),1)])]),_:1}),a(r,{cols:"12",md:"3",class:"my-3"},{default:s(()=>[n("div",wl,[l[21]||(l[21]=n("p",{class:"mb-0"},"جنسیت : ",-1)),o.value.gender==!0?(C(),Q("p",Pl,"مرد")):o.value.gender==!1?(C(),Q("p",Sl,"زن")):O("",!0)])]),_:1}),a(r,{cols:"12",md:"3",class:"my-3"},{default:s(()=>[n("div",Nl,[l[22]||(l[22]=n("p",{class:"mb-0"},"نام : ",-1)),n("p",Cl,x(o.value.firstName),1)])]),_:1}),a(r,{cols:"12",md:"3",class:"my-3"},{default:s(()=>[n("div",_l,[l[23]||(l[23]=n("p",{class:"mb-0"},"نام خانوادگی : ",-1)),n("p",Il,x(o.value.lastName),1)])]),_:1}),a(r,{cols:"12",md:"3",class:"my-3"},{default:s(()=>[n("div",Bl,[l[24]||(l[24]=n("p",{class:"mb-0"},"نام پدر : ",-1)),n("p",Tl,x(o.value.fatherName),1)])]),_:1}),a(r,{cols:"12",md:"3",class:"my-3"},{default:s(()=>[n("div",Wl,[l[25]||(l[25]=n("p",{class:"mb-0"},"شهر : ",-1)),n("p",Fl,x(o.value.officeName),1)])]),_:1}),a(r,{cols:"12",md:"3",class:"my-3"},{default:s(()=>[n("div",Dl,[l[26]||(l[26]=n("p",{class:"mb-0"},"کارت بانکی : ",-1)),o.value.isHaveBank==!0?(C(),z(K,{key:0,size:"small",icon:"ri-close-line",color:"#c9190c"})):o.value.isHaveBank==!1?(C(),z(K,{key:1,size:"small",icon:"ri-check-line",color:"#0b8707"})):O("",!0)])]),_:1})]),_:1})]),_:1})]),_:1},512),a(Ve,{class:"btn-box"},{default:s(()=>[a(H,{onClick:Pe,size:"large"},{default:s(()=>l[27]||(l[27]=[E("قبلی")])),_:1}),y.value.userVerified==!1?(C(),z(H,{key:0,onClick:re,color:"primary",size:"large",variant:"elevated",disabled:!ne.value,loading:c.value},{default:s(()=>l[28]||(l[28]=[E(" استعلام هویت ")])),_:1},8,["disabled","loading"])):(C(),z(H,{key:1,onClick:ve,color:"primary",size:"large",variant:"elevated",loading:c.value},{default:s(()=>l[29]||(l[29]=[E(" بعدی ")])),_:1},8,["loading"]))]),_:1})]),_:1})]),_:1}),a(be,{value:3},{default:s(()=>[a(fe,{class:"step-card"},{default:s(()=>[a(xe,{ref:i=>te(i,3)},{default:s(()=>[a(ke,null,{default:s(()=>[a(J,null,{default:s(()=>[a(r,{cols:"12"},{default:s(()=>l[30]||(l[30]=[n("div",{class:"w-100 d-flex justify-space-between align-items-center"},[n("h3",{class:"trade-step-title"},"ثبت خرید")],-1)])),_:1})]),_:1}),a(J,{class:""},{default:s(()=>[a(r,{cols:"12",md:"3"},{default:s(()=>[a(j,{modelValue:h.value.date,"onUpdate:modelValue":l[5]||(l[5]=i=>h.value.date=i),placeholder:"تاریخ"},null,8,["modelValue"])]),_:1}),a(r,{cols:"12",md:"3"},{default:s(()=>[a(j,{type:"time",modelValue:h.value.time,"onUpdate:modelValue":l[6]||(l[6]=i=>h.value.time=i),placeholder:"زمان"},null,8,["modelValue"])]),_:1}),a(r,{cols:"12",md:"3"},{default:s(()=>[n("div",Al,[l[31]||(l[31]=n("p",null,"قیمت طلا : ",-1)),n("p",null,x(N(h.value.buyPrice)),1)])]),_:1}),a(r,{cols:"12",md:"3"},{default:s(()=>[a(H,{onClick:qe,class:"h-100",color:"primary",size:"large",variant:"elevated",block:"",loading:V.value},{default:s(()=>l[32]||(l[32]=[E(" استعلام قیمت طلا ")])),_:1},8,["loading"])]),_:1})]),_:1}),a(J,null,{default:s(()=>[a(r,{cols:"12",md:"3"},{default:s(()=>[a(pe,{modelValue:f.value.totalPrice,"onUpdate:modelValue":l[7]||(l[7]=i=>f.value.totalPrice=i),label:"مبلغ (ریال)",variant:"outlined",onInput:Je,disabled:h.value.buyPrice==""},null,8,["modelValue","disabled"])]),_:1}),a(r,{cols:"12",md:"2"},{default:s(()=>[n("div",Rl,[a(K,{class:"me-2",size:"small",icon:"ri-arrow-left-right-line",color:"#0b8707"})])]),_:1}),a(r,{cols:"12",md:"3"},{default:s(()=>[a(pe,{modelValue:f.value.goldWeight,"onUpdate:modelValue":l[8]||(l[8]=i=>f.value.goldWeight=i),label:"وزن (گرم)",variant:"outlined",rules:ge,onInput:Qe,disabled:h.value.buyPrice==""},null,8,["modelValue","disabled"])]),_:1}),a(r,{cols:"12",md:"4"},{default:s(()=>[a(pe,{modelValue:f.value.invoiceId,"onUpdate:modelValue":l[9]||(l[9]=i=>f.value.invoiceId=i),label:"شناسه پرداخت",variant:"outlined",rules:le},null,8,["modelValue"])]),_:1}),a(r,{cols:"12"},{default:s(()=>[a(cl,{label:"توضیحات (اختیاری)",variant:"outlined",modelValue:f.value.description,"onUpdate:modelValue":l[10]||(l[10]=i=>f.value.description=i)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},512),a(Ve,{class:"btn-box"},{default:s(()=>[a(H,{onClick:Pe,size:"large"},{default:s(()=>l[33]||(l[33]=[E("قبلی")])),_:1}),a(H,{onClick:ve,color:"primary",size:"large",variant:"elevated",disabled:!ne.value,loading:p.value},{default:s(()=>l[34]||(l[34]=[E(" بعدی ")])),_:1},8,["disabled","loading"])]),_:1})]),_:1})]),_:1}),a(be,{value:4},{default:s(()=>[a(fe,{class:"step-card"},{default:s(()=>[a(xe,{ref:i=>te(i,4)},{default:s(()=>[a(ke,null,{default:s(()=>[a(J,null,{default:s(()=>[a(r,{cols:"12"},{default:s(()=>l[35]||(l[35]=[n("div",{class:"w-100 d-flex justify-space-between align-items-center"},[n("h3",{class:"trade-step-title"},"فاکتور فروش")],-1)])),_:1})]),_:1}),a(J,null,{default:s(()=>[a(r,{cols:"12"},{default:s(()=>l[36]||(l[36]=[n("div",{class:"d-flex"},[n("h4",null,"اطلاعات کاربر")],-1)])),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",zl,[l[37]||(l[37]=n("p",null,"نام : ",-1)),n("p",null,x(d.value.user.firstName),1)])]),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",Gl,[l[38]||(l[38]=n("p",null,"نام خانوادگی : ",-1)),n("p",null,x(d.value.user.lastName),1)])]),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",Ul,[l[39]||(l[39]=n("p",null,"نام پدر : ",-1)),n("p",null,x(d.value.user.fatherName),1)])]),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",El,[l[40]||(l[40]=n("p",null,"کد ملی : ",-1)),n("p",null,x(d.value.user.nationalCode),1)])]),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",Hl,[l[41]||(l[41]=n("p",null," شماره همراه : ",-1)),n("p",null,x(d.value.user.phoneNumber),1)])]),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",$l,[l[42]||(l[42]=n("p",null,"کارشناس : ",-1)),n("p",null,x(d.value.adminId),1)])]),_:1}),a(Ie),a(r,{cols:"12"},{default:s(()=>l[43]||(l[43]=[n("div",{class:"d-flex"},[n("h4",null,"اطلاعات معامله")],-1)])),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",Ml,[l[44]||(l[44]=n("p",null,"وزن طلا : ",-1)),n("p",null,x(d.value.goldWeight)+" گرم",1)])]),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",jl,[l[45]||(l[45]=n("p",null,"قیمت طلا : ",-1)),n("p",null,x(N(d.value.goldPrice))+" ریال",1)])]),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",Ll,[l[46]||(l[46]=n("p",null,"قیمت کل : ",-1)),n("p",null,x(N(d.value.totalPrice))+" ریال",1)])]),_:1}),a(Ie),a(r,{cols:"12"},{default:s(()=>l[47]||(l[47]=[n("div",{class:"d-flex"},[n("h4",null,"اطلاعات کیف پول")],-1)])),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",Ol,[l[48]||(l[48]=n("p",null," موجودی کیف پول : ",-1)),n("p",null,x(N(d.value.wallet.balance))+" ریال",1)])]),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",Yl,[l[49]||(l[49]=n("p",null,"دارایی طلا: ",-1)),n("p",null,x(d.value.wallet.goldWeight)+" گرم",1)])]),_:1}),a(r,{cols:"6",md:"3"},{default:s(()=>[n("div",ql,[l[50]||(l[50]=n("p",null,"مبلغ در انتظار برداشت : ",-1)),n("p",null,x(N(d.value.wallet.blocked))+" ریال",1)])]),_:1})]),_:1})]),_:1})]),_:1},512),a(Ve,{class:"btn-box"},{default:s(()=>[a(H,{onClick:Pe,size:"large"},{default:s(()=>l[51]||(l[51]=[E("قبلی")])),_:1}),a(H,{onClick:Oe,color:"primary",size:"large",variant:"elevated"},{default:s(()=>l[52]||(l[52]=[E(" ثبت ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),S.value?(C(),z(De,{key:0,color:"error",border:"bottom",elevation:"2",class:"k-alert alert-animatiton",closable:""},{default:s(()=>[E(x(W.value),1)]),_:1})):O("",!0),$.value?(C(),z(De,{key:1,color:"success",border:"bottom",elevation:"2",class:"k-alert alert-animatiton",closable:""},{default:s(()=>[E(x(D.value),1)]),_:1})):O("",!0),a(La,{modelValue:A.value,"onUpdate:modelValue":l[12]||(l[12]=i=>A.value=i),"max-width":"500"},{default:s(()=>[a(fe,{title:"تایید فاکتور",class:"modal-card"},{default:s(()=>[a(K,{class:"mt-3 mb-6",icon:"ri-checkbox-circle-fill",color:"#0b8707"}),n("h4",null," فاکتور "+x(d.value.user.firstName)+" "+x(d.value.user.lastName)+" با موفقیت ثبت شد ",1)]),_:1})]),_:1},8,["modelValue"])],64)}}},it=Ha(Jl,[["__scopeId","data-v-c168073a"]]);export{it as default};
