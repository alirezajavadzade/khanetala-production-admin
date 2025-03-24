import{a5 as fe,a6 as Ve,_ as ye,r as u,j as be,c as ge,b as n,w as s,a0 as P,e as B,a7 as xe,a4 as Y,o as _,a1 as p,B as I,a as t,t as r,V as g,a3 as A,a2 as ke}from"./index-BmYntJHi.js";import{V as G}from"./api-GHQiBzAm.js";import{V as q}from"./VDialog-C0HhqDxn.js";import{V as we,a as J,b as Ce,c as K}from"./VTabs-D1wavBqd.js";import{a as _e,V as N,b as Q}from"./VCard-B8J-gnjA.js";import{V as h}from"./VTextField-DkFWOHYT.js";import{V as X}from"./VDataTable-DrdRmIME.js";import{V as Z}from"./VSpacer-uS8LX0Qi.js";import{V as Ne}from"./VForm-w_OpnKKv.js";import{V as z}from"./VSelect-BR5DuRtB.js";import"./VMenu-DfrCjHC6.js";import"./index-DOS0UCrd.js";import"./VImg-Dtnrfja0.js";const ee=Ve(),H=fe.create({baseURL:"https://khaneetala.ir/api",headers:{"Content-Type":"application/json",Accept:"application/json"}});H.interceptors.request.use(o=>{const v=localStorage.getItem("token");return v?o.headers.Authorization=`Bearer ${v}`:ee.replace("/login"),o},o=>Promise.reject(o));H.interceptors.response.use(o=>o,o=>(o.response.status==401&&(localStorage.removeItem("token"),ee.replace("/login")),console.error("API Error:",o.response||o.message),Promise.reject(o)));const j={async Alluser(){return(await H.get("/admin/users/all")).data},async oldUser(){return(await G.get("/old/users")).data},async VerifyUser(o){const v=JSON.stringify({phoneNumber:o.phoneNumber,nationalCode:o.nationalCode,birthDate:o.birthDate});return(await G.post(`old/approve/${o.id}`,v)).data}},he={class:"d-flex flex-column flex-md-row justify-space-between w-100 px-4 py-8 user-dialog-info"},Ue={class:"d-flex flex-column w-100 px-4"},Se={class:"d-flex align-items-center my-2"},De={class:"mx-2"},Te={class:"d-flex align-items-center my-2"},$e={class:"mx-2"},Be={class:"d-flex align-items-center my-2"},Ie={class:"mx-2"},Ae={class:"d-flex align-items-center my-2 user-price"},ze={class:"mx-2"},je={class:"d-flex align-items-center my-2"},He={class:"mx-2"},Me={class:"d-flex flex-column w-100 px-4"},We={class:"d-flex align-items-center my-2"},Fe={class:"mx-2"},Oe={class:"d-flex align-items-center my-2"},Re={class:"mx-2"},Le={class:"d-flex align-items-center my-2"},Ee={class:"mx-2"},Pe={class:"d-flex align-items-center my-2 user-price"},Ye={class:"mx-2"},Ge={class:"d-flex align-items-center my-2"},qe={class:"mx-2"},Je={__name:"userView",setup(o){const v=u(!1),x=u(!1),U=u(""),S=u(""),k=u(null),w=u(""),d=u(!1),M=u(),W=u(),C=u(!1),f=u(!1),D=u(!1),ae=u([{title:"نام",key:"firstName"},{title:"نام خانوادگی",key:"lastName"},{title:"شماره همراه",key:"phoneNumber"},{title:"دارایی طلا (گرم)",key:"wallet.goldWeight"},{title:"دارایی ریالی",key:"wallet.balance"},{title:"شهر",key:"officeName"},{title:"کارت بانکی",key:"isHaveBank"},{title:"فعالیت",key:"action"}]),le=u([{title:"نام",key:"firstName"},{title:"نام خانوادگی",key:"lastName"},{title:"شماره همراه",key:"phoneNumber"},{title:"دارایی طلا (گرم)",key:"wallet.goldWeight"},{title:"دارایی ریالی",key:"wallet.balance"},{title:"فعالیت",key:"action"}]),m=u({phoneNumber:"",nationalCode:"",birthDate:"",id:""}),i=u(),V=u(),y=u(),b=u(),ne=u([{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4},{name:"5",value:5},{name:"6",value:6},{name:"7",value:7},{name:"8",value:8},{name:"9",value:9},{name:"10",value:10},{name:"11",value:11},{name:"12",value:12},{name:"13",value:13},{name:"14",value:14},{name:"15",value:15},{name:"16",value:16},{name:"17",value:17},{name:"18",value:18},{name:"19",value:19},{name:"20",value:20},{name:"21",value:21},{name:"22",value:22},{name:"23",value:23},{name:"24",value:24},{name:"25",value:25},{name:"26",value:26},{name:"27",value:27},{name:"28",value:28},{name:"29",value:29},{name:"30",value:30},{name:"31",value:31}]),te=u([{name:"فروردین",value:1},{name:"اردیبهشت",value:2},{name:"خرداد",value:3},{name:"تیر",value:4},{name:"مرداد",value:5},{name:"شهریور",value:6},{name:"مهر",value:7},{name:"آبان",value:8},{name:"آذر",value:9},{name:"دی",value:10},{name:"بهمن",value:11},{name:"اسفند",value:12}]),se=u([{name:"1300",value:1300},{name:"1301",value:1301},{name:"1302",value:1302},{name:"1303",value:1303},{name:"1304",value:1304},{name:"1305",value:1305},{name:"1306",value:1306},{name:"1307",value:1307},{name:"1308",value:1308},{name:"1309",value:1309},{name:"1310",value:1310},{name:"1311",value:1311},{name:"1312",value:1312},{name:"1313",value:1313},{name:"1314",value:1314},{name:"1315",value:1315},{name:"1316",value:1316},{name:"1317",value:1317},{name:"1318",value:1318},{name:"1319",value:1319},{name:"1320",value:1320},{name:"1321",value:1321},{name:"1322",value:1322},{name:"1323",value:1323},{name:"1324",value:1324},{name:"1325",value:1325},{name:"1326",value:1326},{name:"1327",value:1327},{name:"1328",value:1328},{name:"1329",value:1329},{name:"1330",value:1330},{name:"1331",value:1331},{name:"1332",value:1332},{name:"1333",value:1333},{name:"1334",value:1334},{name:"1335",value:1335},{name:"1336",value:1336},{name:"1337",value:1337},{name:"1338",value:1338},{name:"1339",value:1339},{name:"1340",value:1340},{name:"1341",value:1341},{name:"1342",value:1342},{name:"1343",value:1343},{name:"1344",value:1344},{name:"1345",value:1345},{name:"1346",value:1346},{name:"1347",value:1347},{name:"1348",value:1348},{name:"1349",value:1349},{name:"1350",value:1350},{name:"1351",value:1351},{name:"1352",value:1352},{name:"1353",value:1353},{name:"1354",value:1354},{name:"1355",value:1355},{name:"1356",value:1356},{name:"1357",value:1357},{name:"1358",value:1358},{name:"1359",value:1359},{name:"1360",value:1360},{name:"1361",value:1361},{name:"1362",value:1362},{name:"1363",value:1363},{name:"1364",value:1364},{name:"1365",value:1365},{name:"1366",value:1366},{name:"1367",value:1367},{name:"1368",value:1368},{name:"1369",value:1369},{name:"1370",value:1370},{name:"1371",value:1371},{name:"1372",value:1372},{name:"1373",value:1373},{name:"1374",value:1374},{name:"1375",value:1375},{name:"1376",value:1376},{name:"1377",value:1377},{name:"1378",value:1378},{name:"1379",value:1379},{name:"1380",value:1380},{name:"1381",value:1381},{name:"1382",value:1382},{name:"1383",value:1383},{name:"1384",value:1384},{name:"1385",value:1385},{name:"1386",value:1386},{name:"1387",value:1387},{name:"1388",value:1388},{name:"1389",value:1389},{name:"1390",value:1390},{name:"1391",value:1391},{name:"1392",value:1392},{name:"1393",value:1393},{name:"1394",value:1394},{name:"1395",value:1395},{name:"1396",value:1396},{name:"1397",value:1397},{name:"1398",value:1398},{name:"1399",value:1399},{name:"1400",value:1400},{name:"1401",value:1401},{name:"1402",value:1402},{name:"1403",value:1403}]),F=async()=>{try{v.value=!0;const a=await j.Alluser();return M.value=a.data,a}catch(a){w.value=a.response.data.error||"خطایی رخ داده است!",d.value=!0,setTimeout(()=>{d.value=!1},1e4)}finally{v.value=!1}},O=async()=>{try{x.value=!0;const a=await j.oldUser();return W.value=a.data,a}catch(a){w.value=a.response.data.error||"خطایی رخ داده است!",d.value=!0,setTimeout(()=>{d.value=!1},1e4)}finally{x.value=!1}},T=a=>a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),R=a=>{C.value=!0,i.value=a},ue=a=>{f.value=!0,m.value.id=a.id,m.value.phoneNumber=a.phoneNumber,m.value.nationalCode=a.nationalCode},oe=async()=>{try{D.value=!0;const a=await j.VerifyUser(m.value);return f.value=!1,O(),F(),a}catch(a){w.value=a.response.data.error||"خطایی رخ داده است!",d.value=!0,setTimeout(()=>{d.value=!1},1e4)}finally{D.value=!1}},me=()=>{m.value.phoneNumber=m.value.phoneNumber.replace(/[٠-٩۰-۹]/g,a=>String.fromCharCode(a.charCodeAt(0)-(a.charCodeAt(0)>=1776?1728:1584))).replace(/\D/g,"").slice(0,11)},re=()=>{m.value.nationalCode=m.value.nationalCode.replace(/\D/g,"").slice(0,10),L.every(a=>a(m.value.nationalCode)===!0)},ie=a=>{V.value=a,$()},ve=a=>{y.value=a,$()},de=a=>{b.value=a,$()},$=()=>{if(b.value&&y.value&&V.value){const a=String(y.value).padStart(2,"0"),e=String(V.value).padStart(2,"0");m.value.birthDate=`${b.value}${a}${e}`}},ce=[a=>!!a||"شماره همراه نمی‌تواند خالی باشد",a=>/^\d{11}$/.test(a)||"شماره همراه باید 11 رقم باشد",a=>a.startsWith("09")||"شماره همراه باید با 09 شروع شود"],L=[a=>!!a||"کد ملی الزامی است",a=>/^\d{10}$/.test(a)||"کد ملی باید ۱۰ رقم باشد",a=>{if(!/^\d{10}$/.test(a))return!0;const e=+a[9],l=a.split("").slice(0,9).reduce((c,E,pe)=>c+ +E*(10-pe),0)%11;return l<2&&e===l||l>=2&&e+l===11||"کد ملی نامعتبر است"}];return be(()=>{F(),O()}),(a,e)=>(_(),ge("div",null,[n(P,null,{default:s(()=>[n(p,null,{default:s(()=>[n(we,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=l=>k.value=l),"align-tabs":"center"},{default:s(()=>[n(J,{value:"one"},{default:s(()=>e[14]||(e[14]=[I("کاربران احراز شده")])),_:1}),n(J,{value:"two"},{default:s(()=>e[15]||(e[15]=[I("کاربران درانتظار احراز")])),_:1})]),_:1},8,["modelValue"])]),_:1}),n(p,{cols:"12"},{default:s(()=>[n(_e,null,{default:s(()=>[n(Ce,{modelValue:k.value,"onUpdate:modelValue":e[3]||(e[3]=l=>k.value=l)},{default:s(()=>[n(K,{value:"one"},{default:s(()=>[n(N,{title:"کاربران احراز هویت شده"},{text:s(()=>[n(h,{modelValue:U.value,"onUpdate:modelValue":e[1]||(e[1]=l=>U.value=l),label:"جستجو","prepend-inner-icon":"ri-search-line"},null,8,["modelValue"])]),default:s(()=>[n(X,{headers:ae.value,items:M.value,search:U.value,loading:v.value},{"item.wallet.balance":s(({item:l})=>[t("p",null,r(T(l.wallet.balance)),1)]),"item.isHaveBank":s(({item:l})=>[l.isHaveBank==!0?(_(),B(g,{key:0,size:"small",icon:"ri-close-line",color:"#c9190c"})):l.isHaveBank==!1?(_(),B(g,{key:1,size:"small",icon:"ri-check-line",color:"#0b8707"})):Y("",!0)]),"item.action":s(({item:l})=>[n(g,{class:"me-2",size:"small",icon:"ri-information-line",color:"#d4af37",onClick:c=>R(l)},null,8,["onClick"])]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1}),n(K,{value:"two"},{default:s(()=>[n(N,{title:"کاربران در انتظار احراز"},{text:s(()=>[n(h,{modelValue:S.value,"onUpdate:modelValue":e[2]||(e[2]=l=>S.value=l),label:"جستجو","prepend-inner-icon":"ri-search-line"},null,8,["modelValue"])]),default:s(()=>[n(X,{headers:le.value,items:W.value,search:S.value,loading:x.value},{"item.wallet.balance":s(({item:l})=>[t("p",null,r(T(l.wallet.balance)),1)]),"item.action":s(({item:l})=>[n(g,{class:"me-2",size:"small",icon:"ri-information-line",color:"#d4af37",onClick:c=>R(l)},null,8,["onClick"]),n(g,{class:"me-2",size:"small",icon:"ri-user-follow-line",color:"#FF3131",onClick:c=>ue(l)},null,8,["onClick"])]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),n(q,{modelValue:C.value,"onUpdate:modelValue":e[5]||(e[5]=l=>C.value=l),"max-width":"600",class:"dialog"},{default:s(()=>[n(N,{class:"dialog-card"},{default:s(()=>{var l,c;return[e[26]||(e[26]=t("div",{class:"k-dialog-title"},[t("p",null,"اطلاعات کاربران")],-1)),t("div",he,[t("div",Ue,[t("div",Se,[e[16]||(e[16]=t("p",null,"نام: ",-1)),t("p",De,r(i.value.firstName),1)]),t("div",Te,[e[17]||(e[17]=t("p",null,"نام خانوادگی: ",-1)),t("p",$e,r(i.value.lastName),1)]),t("div",Be,[e[18]||(e[18]=t("p",null,"نام پدر: ",-1)),t("p",Ie,r(i.value.fatherName),1)]),t("div",Ae,[e[19]||(e[19]=t("p",null,"موجودی کیف پول: ",-1)),t("p",ze,r(T(i.value.wallet.balance))+" ریال",1)]),t("div",je,[e[20]||(e[20]=t("p",null,"شماره کارت: ",-1)),t("p",He,r((l=i.value.bankAccounts[0])==null?void 0:l.cardNumber),1)])]),t("div",Me,[t("div",We,[e[21]||(e[21]=t("p",null,"تاریخ تولد: ",-1)),t("p",Fe,r(i.value.birthDate),1)]),t("div",Oe,[e[22]||(e[22]=t("p",null,"کد ملی: ",-1)),t("p",Re,r(i.value.nationalCode),1)]),t("div",Le,[e[23]||(e[23]=t("p",null,"شماره همراه: ",-1)),t("p",Ee,r(i.value.phoneNumber),1)]),t("div",Pe,[e[24]||(e[24]=t("p",null,"موجودی طلا: ",-1)),t("p",Ye,r(i.value.wallet.goldWeight)+" گرم",1)]),t("div",Ge,[e[25]||(e[25]=t("p",null,"شماره شبا: ",-1)),t("p",qe,r((c=i.value.bankAccounts[0])==null?void 0:c.shebaNumber),1)])])]),n(Q,null,{default:s(()=>[n(Z),n(A,{text:"بستن",onClick:e[4]||(e[4]=E=>C.value=!1),size:"large",class:"m-3"})]),_:1})]}),_:1})]),_:1},8,["modelValue"]),n(q,{modelValue:f.value,"onUpdate:modelValue":e[13]||(e[13]=l=>f.value=l),"max-width":"600",class:"dialog",persistent:""},{default:s(()=>[n(Ne,{ref:"form",onSubmit:e[12]||(e[12]=ke(l=>oe(a.item),["prevent"]))},{default:s(()=>[n(N,{class:"dialog-card"},{default:s(()=>[e[27]||(e[27]=t("div",{class:"k-dialog-title"},[t("p",null,"احراز هویت")],-1)),n(P,{class:"my-5"},{default:s(()=>[n(p,{cols:"12",md:"6",class:"my-3"},{default:s(()=>[n(h,{modelValue:m.value.phoneNumber,"onUpdate:modelValue":e[6]||(e[6]=l=>m.value.phoneNumber=l),label:"شماره همراه",rules:ce,onInput:me},null,8,["modelValue"])]),_:1}),n(p,{cols:"12",md:"6",class:"my-3"},{default:s(()=>[n(h,{modelValue:m.value.nationalCode,"onUpdate:modelValue":e[7]||(e[7]=l=>m.value.nationalCode=l),label:"کد ملی",rules:L,onInput:re},null,8,["modelValue"])]),_:1}),n(p,{cols:"12",md:"4",class:"my-3"},{default:s(()=>[n(z,{modelValue:V.value,"onUpdate:modelValue":[e[8]||(e[8]=l=>V.value=l),ie],label:"روز تولد",items:ne.value,variant:"outlined","item-title":"name","item-value":"value",class:"first-select",rules:[l=>!!l||"روز الزامی است"]},null,8,["modelValue","items","rules"])]),_:1}),n(p,{cols:"12",md:"4",class:"my-3"},{default:s(()=>[n(z,{modelValue:y.value,"onUpdate:modelValue":[e[9]||(e[9]=l=>y.value=l),ve],label:"ماه تولد",items:te.value,variant:"outlined",class:"second-select","item-title":"name","item-value":"value",rules:[l=>!!l||"ماه الزامی است"]},null,8,["modelValue","items","rules"])]),_:1}),n(p,{cols:"12",md:"4",class:"my-3"},{default:s(()=>[n(z,{modelValue:b.value,"onUpdate:modelValue":[e[10]||(e[10]=l=>b.value=l),de],label:"سال تولد",items:se.value,variant:"outlined",class:"third-select","item-title":"name","item-value":"value",rules:[l=>!!l||"سال الزامی است"]},null,8,["modelValue","items","rules"])]),_:1})]),_:1}),n(Q,null,{default:s(()=>[n(Z),n(A,{text:"بستن",onClick:e[11]||(e[11]=l=>f.value=!1),size:"large",class:"m-3"}),n(A,{type:"submit",size:"large",class:"m-3",variant:"tonal",text:"ثبت",loading:D.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"]),d.value?(_(),B(xe,{key:0,color:"error",border:"bottom",elevation:"2",class:"k-alert alert-animatiton",closable:""},{default:s(()=>[I(r(w.value),1)]),_:1})):Y("",!0)]))}},ra=ye(Je,[["__scopeId","data-v-8ece6523"]]);export{ra as default};
