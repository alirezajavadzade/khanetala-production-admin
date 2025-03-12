import{a5 as pe,_ as fe,r as u,j as Ve,c as ye,b as n,w as t,a0 as F,e as B,a6 as ge,a4 as P,o as h,a1 as c,B as I,a as s,t as r,V as g,a3 as z,a2 as be}from"./index-Cc3c-qHk.js";import{V as Y}from"./api-Bl6DwNuI.js";import{V as G}from"./VDialog-YFPPZC7X.js";import{V as ke,a as q,b as xe,c as J}from"./VTabs-BJaXmhHl.js";import{b as we,V as N,a as _,c as K}from"./VTextField-CUqnsReO.js";import{V as Q}from"./VDataTable-D7aU3e2w.js";import{V as X}from"./VSpacer-DbGH0DHz.js";import{V as Ce}from"./VForm-DMX1FCUR.js";import{V as A}from"./VSelect-hmgAib01.js";import"./VMenu-UA7lto2B.js";import"./index-CVqcLgM_.js";import"./VImg-Cv4fp2-A.js";import"./VWindowItem-Ae9ECmSl.js";const H=pe.create({baseURL:"https://khaneetala.ir/api",headers:{"Content-Type":"application/json",Accept:"application/json"}});H.interceptors.request.use(o=>{const v=localStorage.getItem("token");return v?o.headers.Authorization=`Bearer ${v}`:router.push("/login"),o},o=>Promise.reject(o));H.interceptors.response.use(o=>o,o=>(o.response.status==401&&(localStorage.removeItem("token"),router.push("/login")),console.error("API Error:",o.response||o.message),Promise.reject(o)));const j={async Alluser(){return(await H.get("/admin/users/all")).data},async oldUser(){return(await Y.get("/old/users")).data},async VerifyUser(o){const v=JSON.stringify({phoneNumber:o.phoneNumber,nationalCode:o.nationalCode,birthDate:o.birthDate});return(await Y.post(`old/approve/${o.id}`,v)).data}},he={class:"d-flex flex-column flex-md-row justify-space-between w-100 px-4 py-8 user-dialog-info"},Ne={class:"d-flex flex-column w-100 px-4"},_e={class:"d-flex align-items-center my-2"},Ue={class:"mx-2"},Se={class:"d-flex align-items-center my-2"},De={class:"mx-2"},Te={class:"d-flex align-items-center my-2"},$e={class:"mx-2"},Be={class:"d-flex align-items-center my-2 user-price"},Ie={class:"mx-2"},ze={class:"d-flex flex-column w-100 px-4"},Ae={class:"d-flex align-items-center my-2"},je={class:"mx-2"},He={class:"d-flex align-items-center my-2"},Me={class:"mx-2"},We={class:"d-flex align-items-center my-2"},Oe={class:"mx-2"},Le={class:"d-flex align-items-center my-2 user-price"},Re={class:"mx-2"},Ee={__name:"userView",setup(o){const v=u(!1),b=u(!1),U=u(""),S=u(""),k=u(null),x=u(""),d=u(!1),M=u(),W=u(),w=u(!1),p=u(!1),D=u(!1),Z=u([{title:"نام",key:"firstName"},{title:"نام خانوادگی",key:"lastName"},{title:"شماره همراه",key:"phoneNumber"},{title:"دارایی طلا (گرم)",key:"wallet.goldWeight"},{title:"دارایی ریالی",key:"wallet.balance"},{title:"شهر",key:"officeName"},{title:"کارت بانکی",key:"isHaveBank"},{title:"فعالیت",key:"action"}]),ee=u([{title:"نام",key:"firstName"},{title:"نام خانوادگی",key:"lastName"},{title:"شماره همراه",key:"phoneNumber"},{title:"دارایی طلا (گرم)",key:"wallet.goldWeight"},{title:"دارایی ریالی",key:"wallet.balance"},{title:"فعالیت",key:"action"}]),m=u({phoneNumber:"",nationalCode:"",birthDate:"",id:""}),i=u(),f=u(),V=u(),y=u(),ae=u([{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4},{name:"5",value:5},{name:"6",value:6},{name:"7",value:7},{name:"8",value:8},{name:"9",value:9},{name:"10",value:10},{name:"11",value:11},{name:"12",value:12},{name:"13",value:13},{name:"14",value:14},{name:"15",value:15},{name:"16",value:16},{name:"17",value:17},{name:"18",value:18},{name:"19",value:19},{name:"20",value:20},{name:"21",value:21},{name:"22",value:22},{name:"23",value:23},{name:"24",value:24},{name:"25",value:25},{name:"26",value:26},{name:"27",value:27},{name:"28",value:28},{name:"29",value:29},{name:"30",value:30},{name:"31",value:31}]),le=u([{name:"فروردین",value:1},{name:"اردیبهشت",value:2},{name:"خرداد",value:3},{name:"تیر",value:4},{name:"مرداد",value:5},{name:"شهریور",value:6},{name:"مهر",value:7},{name:"آبان",value:8},{name:"آذر",value:9},{name:"دی",value:10},{name:"بهمن",value:11},{name:"اسفند",value:12}]),ne=u([{name:"1300",value:1300},{name:"1301",value:1301},{name:"1302",value:1302},{name:"1303",value:1303},{name:"1304",value:1304},{name:"1305",value:1305},{name:"1306",value:1306},{name:"1307",value:1307},{name:"1308",value:1308},{name:"1309",value:1309},{name:"1310",value:1310},{name:"1311",value:1311},{name:"1312",value:1312},{name:"1313",value:1313},{name:"1314",value:1314},{name:"1315",value:1315},{name:"1316",value:1316},{name:"1317",value:1317},{name:"1318",value:1318},{name:"1319",value:1319},{name:"1320",value:1320},{name:"1321",value:1321},{name:"1322",value:1322},{name:"1323",value:1323},{name:"1324",value:1324},{name:"1325",value:1325},{name:"1326",value:1326},{name:"1327",value:1327},{name:"1328",value:1328},{name:"1329",value:1329},{name:"1330",value:1330},{name:"1331",value:1331},{name:"1332",value:1332},{name:"1333",value:1333},{name:"1334",value:1334},{name:"1335",value:1335},{name:"1336",value:1336},{name:"1337",value:1337},{name:"1338",value:1338},{name:"1339",value:1339},{name:"1340",value:1340},{name:"1341",value:1341},{name:"1342",value:1342},{name:"1343",value:1343},{name:"1344",value:1344},{name:"1345",value:1345},{name:"1346",value:1346},{name:"1347",value:1347},{name:"1348",value:1348},{name:"1349",value:1349},{name:"1350",value:1350},{name:"1351",value:1351},{name:"1352",value:1352},{name:"1353",value:1353},{name:"1354",value:1354},{name:"1355",value:1355},{name:"1356",value:1356},{name:"1357",value:1357},{name:"1358",value:1358},{name:"1359",value:1359},{name:"1360",value:1360},{name:"1361",value:1361},{name:"1362",value:1362},{name:"1363",value:1363},{name:"1364",value:1364},{name:"1365",value:1365},{name:"1366",value:1366},{name:"1367",value:1367},{name:"1368",value:1368},{name:"1369",value:1369},{name:"1370",value:1370},{name:"1371",value:1371},{name:"1372",value:1372},{name:"1373",value:1373},{name:"1374",value:1374},{name:"1375",value:1375},{name:"1376",value:1376},{name:"1377",value:1377},{name:"1378",value:1378},{name:"1379",value:1379},{name:"1380",value:1380},{name:"1381",value:1381},{name:"1382",value:1382},{name:"1383",value:1383},{name:"1384",value:1384},{name:"1385",value:1385},{name:"1386",value:1386},{name:"1387",value:1387},{name:"1388",value:1388},{name:"1389",value:1389},{name:"1390",value:1390},{name:"1391",value:1391},{name:"1392",value:1392},{name:"1393",value:1393},{name:"1394",value:1394},{name:"1395",value:1395},{name:"1396",value:1396},{name:"1397",value:1397},{name:"1398",value:1398},{name:"1399",value:1399},{name:"1400",value:1400},{name:"1401",value:1401},{name:"1402",value:1402},{name:"1403",value:1403}]),O=async()=>{try{v.value=!0;const a=await j.Alluser();return M.value=a.data,a}catch(a){x.value=a.response.data.error||"خطایی رخ داده است!",d.value=!0,setTimeout(()=>{d.value=!1},1e4)}finally{v.value=!1}},L=async()=>{try{b.value=!0;const a=await j.oldUser();return W.value=a.data,a}catch(a){x.value=a.response.data.error||"خطایی رخ داده است!",d.value=!0,setTimeout(()=>{d.value=!1},1e4)}finally{b.value=!1}},T=a=>a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),R=a=>{w.value=!0,i.value=a},te=a=>{p.value=!0,m.value.id=a.id,m.value.phoneNumber=a.phoneNumber,m.value.nationalCode=a.nationalCode},se=async()=>{try{D.value=!0;const a=await j.VerifyUser(m.value);return p.value=!1,L(),O(),a}catch(a){x.value=a.response.data.error||"خطایی رخ داده است!",d.value=!0,setTimeout(()=>{d.value=!1},1e4)}finally{D.value=!1}},ue=()=>{m.value.phoneNumber=m.value.phoneNumber.replace(/[٠-٩۰-۹]/g,a=>String.fromCharCode(a.charCodeAt(0)-(a.charCodeAt(0)>=1776?1728:1584))).replace(/\D/g,"").slice(0,11)},oe=()=>{m.value.nationalCode=m.value.nationalCode.replace(/\D/g,"").slice(0,10),E.every(a=>a(m.value.nationalCode)===!0)},me=a=>{f.value=a,$()},re=a=>{V.value=a,$()},ie=a=>{y.value=a,$()},$=()=>{if(y.value&&V.value&&f.value){const a=String(V.value).padStart(2,"0"),e=String(f.value).padStart(2,"0");m.value.birthDate=`${y.value}${a}${e}`}},ve=[a=>!!a||"شماره همراه نمی‌تواند خالی باشد",a=>/^\d{11}$/.test(a)||"شماره همراه باید 11 رقم باشد",a=>a.startsWith("09")||"شماره همراه باید با 09 شروع شود"],E=[a=>!!a||"کد ملی الزامی است",a=>/^\d{10}$/.test(a)||"کد ملی باید ۱۰ رقم باشد",a=>{if(!/^\d{10}$/.test(a))return!0;const e=+a[9],l=a.split("").slice(0,9).reduce((C,de,ce)=>C+ +de*(10-ce),0)%11;return l<2&&e===l||l>=2&&e+l===11||"کد ملی نامعتبر است"}];return Ve(()=>{O(),L()}),(a,e)=>(h(),ye("div",null,[n(F,null,{default:t(()=>[n(c,null,{default:t(()=>[n(ke,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=l=>k.value=l),"align-tabs":"center"},{default:t(()=>[n(q,{value:"one"},{default:t(()=>e[14]||(e[14]=[I("کاربران احراز شده")])),_:1}),n(q,{value:"two"},{default:t(()=>e[15]||(e[15]=[I("کاربران درانتظار احراز")])),_:1})]),_:1},8,["modelValue"])]),_:1}),n(c,{cols:"12"},{default:t(()=>[n(we,null,{default:t(()=>[n(xe,{modelValue:k.value,"onUpdate:modelValue":e[3]||(e[3]=l=>k.value=l)},{default:t(()=>[n(J,{value:"one"},{default:t(()=>[n(N,{title:"کاربران احراز هویت شده"},{text:t(()=>[n(_,{modelValue:U.value,"onUpdate:modelValue":e[1]||(e[1]=l=>U.value=l),label:"جستجو","prepend-inner-icon":"ri-search-line"},null,8,["modelValue"])]),default:t(()=>[n(Q,{headers:Z.value,items:M.value,search:U.value,loading:v.value},{"item.wallet.balance":t(({item:l})=>[s("p",null,r(T(l.wallet.balance)),1)]),"item.isHaveBank":t(({item:l})=>[l.isHaveBank==!0?(h(),B(g,{key:0,size:"small",icon:"ri-close-line",color:"#c9190c"})):l.isHaveBank==!1?(h(),B(g,{key:1,size:"small",icon:"ri-check-line",color:"#0b8707"})):P("",!0)]),"item.action":t(({item:l})=>[n(g,{class:"me-2",size:"small",icon:"ri-information-line",color:"#d4af37",onClick:C=>R(l)},null,8,["onClick"])]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1}),n(J,{value:"two"},{default:t(()=>[n(N,{title:"کاربران در انتظار احراز"},{text:t(()=>[n(_,{modelValue:S.value,"onUpdate:modelValue":e[2]||(e[2]=l=>S.value=l),label:"جستجو","prepend-inner-icon":"ri-search-line"},null,8,["modelValue"])]),default:t(()=>[n(Q,{headers:ee.value,items:W.value,search:S.value,loading:b.value},{"item.wallet.balance":t(({item:l})=>[s("p",null,r(T(l.wallet.balance)),1)]),"item.action":t(({item:l})=>[n(g,{class:"me-2",size:"small",icon:"ri-information-line",color:"#d4af37",onClick:C=>R(l)},null,8,["onClick"]),n(g,{class:"me-2",size:"small",icon:"ri-user-follow-line",color:"#008000",onClick:C=>te(l)},null,8,["onClick"])]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),n(G,{modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=l=>w.value=l),"max-width":"600",class:"dialog"},{default:t(()=>[n(N,{class:"dialog-card"},{default:t(()=>[e[24]||(e[24]=s("div",{class:"k-dialog-title"},[s("p",null,"اطلاعات کاربران")],-1)),s("div",he,[s("div",Ne,[s("div",_e,[e[16]||(e[16]=s("p",null,"نام: ",-1)),s("p",Ue,r(i.value.firstName),1)]),s("div",Se,[e[17]||(e[17]=s("p",null,"نام خانوادگی: ",-1)),s("p",De,r(i.value.lastName),1)]),s("div",Te,[e[18]||(e[18]=s("p",null,"نام پدر: ",-1)),s("p",$e,r(i.value.fatherName),1)]),s("div",Be,[e[19]||(e[19]=s("p",null,"موجودی کیف پول: ",-1)),s("p",Ie,r(T(i.value.wallet.balance))+" ریال",1)])]),s("div",ze,[s("div",Ae,[e[20]||(e[20]=s("p",null,"تاریخ تولد: ",-1)),s("p",je,r(i.value.birthDate),1)]),s("div",He,[e[21]||(e[21]=s("p",null,"کد ملی: ",-1)),s("p",Me,r(i.value.nationalCode),1)]),s("div",We,[e[22]||(e[22]=s("p",null,"شماره همراه: ",-1)),s("p",Oe,r(i.value.phoneNumber),1)]),s("div",Le,[e[23]||(e[23]=s("p",null,"موجودی طلا: ",-1)),s("p",Re,r(i.value.wallet.goldWeight)+" گرم",1)])])]),n(K,null,{default:t(()=>[n(X),n(z,{text:"بستن",onClick:e[4]||(e[4]=l=>w.value=!1),size:"large",class:"m-3"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),n(G,{modelValue:p.value,"onUpdate:modelValue":e[13]||(e[13]=l=>p.value=l),"max-width":"600",class:"dialog",persistent:""},{default:t(()=>[n(Ce,{ref:"form",onSubmit:e[12]||(e[12]=be(l=>se(a.item),["prevent"]))},{default:t(()=>[n(N,{class:"dialog-card"},{default:t(()=>[e[25]||(e[25]=s("div",{class:"k-dialog-title"},[s("p",null,"احراز هویت")],-1)),n(F,{class:"my-5"},{default:t(()=>[n(c,{cols:"12",md:"6",class:"my-3"},{default:t(()=>[n(_,{modelValue:m.value.phoneNumber,"onUpdate:modelValue":e[6]||(e[6]=l=>m.value.phoneNumber=l),label:"شماره همراه",rules:ve,onInput:ue},null,8,["modelValue"])]),_:1}),n(c,{cols:"12",md:"6",class:"my-3"},{default:t(()=>[n(_,{modelValue:m.value.nationalCode,"onUpdate:modelValue":e[7]||(e[7]=l=>m.value.nationalCode=l),label:"کد ملی",rules:E,onInput:oe},null,8,["modelValue"])]),_:1}),n(c,{cols:"12",md:"4",class:"my-3"},{default:t(()=>[n(A,{modelValue:f.value,"onUpdate:modelValue":[e[8]||(e[8]=l=>f.value=l),me],label:"روز تولد",items:ae.value,variant:"outlined","item-title":"name","item-value":"value",class:"first-select",rules:[l=>!!l||"روز الزامی است"]},null,8,["modelValue","items","rules"])]),_:1}),n(c,{cols:"12",md:"4",class:"my-3"},{default:t(()=>[n(A,{modelValue:V.value,"onUpdate:modelValue":[e[9]||(e[9]=l=>V.value=l),re],label:"ماه تولد",items:le.value,variant:"outlined",class:"second-select","item-title":"name","item-value":"value",rules:[l=>!!l||"ماه الزامی است"]},null,8,["modelValue","items","rules"])]),_:1}),n(c,{cols:"12",md:"4",class:"my-3"},{default:t(()=>[n(A,{modelValue:y.value,"onUpdate:modelValue":[e[10]||(e[10]=l=>y.value=l),ie],label:"سال تولد",items:ne.value,variant:"outlined",class:"third-select","item-title":"name","item-value":"value",rules:[l=>!!l||"سال الزامی است"]},null,8,["modelValue","items","rules"])]),_:1})]),_:1}),n(K,null,{default:t(()=>[n(X),n(z,{text:"بستن",onClick:e[11]||(e[11]=l=>p.value=!1),size:"large",class:"m-3"}),n(z,{type:"submit",size:"large",class:"m-3",variant:"tonal",text:"ثبت",loading:D.value},null,8,["loading"])]),_:1})]),_:1})]),_:1},512)]),_:1},8,["modelValue"]),d.value?(h(),B(ge,{key:0,color:"error",border:"bottom",elevation:"2",class:"k-alert alert-animatiton",closable:""},{default:t(()=>[I(r(x.value),1)]),_:1})):P("",!0)]))}},na=fe(Ee,[["__scopeId","data-v-b3213545"]]);export{na as default};
