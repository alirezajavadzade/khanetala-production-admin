import{A as _}from"./accounting-CFIU5YlZ.js";import{_ as k,r as o,k as x,c as y,b as a,w as e,a1 as g,e as S,a7 as h,h as B,o as u,a2 as b,a as m,t as p,C as w}from"./index-Dbwicb6H.js";import{a as C,V as G}from"./VCard-BQgM7hxv.js";import{V as N}from"./VTextField-Bpc0VdGj.js";import{V as T}from"./VDataTable-CTIwBiR6.js";import{a as A}from"./VSelect-De4jifd_.js";import"./index-CSwstpxY.js";import"./VImg-IfgpgyIs.js";import"./VMenu-C6U2brb9.js";const R={__name:"AccountingSellTrade",setup(P){const c=o(""),r=o(!1),s=o(!1),f=o([{title:"نام",key:"seller.firstName"},{title:"نام خانوادگی",key:"seller.lastName"},{title:"شناسه پرداخت",key:"invoiceId"},{title:"مبلغ (ریال)",key:"totalPrice"},{title:"میزان طلا (گرم)",key:"goldWeight"},{title:"قیمت طلا (ریال)",key:"goldPrice"},{title:"تاریخ",key:"date"},{title:"زمان",key:"time"},{title:"کارشناس",key:"accounterId"},{title:"وضعیت",key:"status"}]),i=o(),n=o(),v=async()=>{try{s.value=!0;const t=await _.GoldBoxSellList();return n.value=t.data,t}catch(t){c.value=t.response.data.error||"خطایی رخ داده است!",r.value=!0,setTimeout(()=>{r.value=!1},1e4)}finally{s.value=!1}},V=t=>t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return x(()=>{v()}),(t,d)=>(u(),y("div",null,[a(g,null,{default:e(()=>[a(b,{cols:"12"},{default:e(()=>[a(C,null,{default:e(()=>[a(G,{title:"فروش صندوق طلا"},{text:e(()=>[a(N,{modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=l=>i.value=l),label:"جستجو","prepend-inner-icon":"ri-search-line"},null,8,["modelValue"])]),default:e(()=>[a(T,{headers:f.value,items:n.value,search:i.value,loading:s.value},{"item.totalPrice":e(({item:l})=>[m("p",null,p(V(l.totalPrice)),1)]),"item.status":e(({item:l})=>[m("div",null,[a(A,{text:l.status=="completed"?"برداشت شده":"در انتظار برداشت",color:l.status=="completed"?"#ff0000":"#66666",size:"small"},null,8,["text","color"])])]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1})]),_:1})]),_:1}),r.value?(u(),S(h,{key:0,color:"error",border:"bottom",elevation:"2",class:"k-alert alert-animatiton",closable:""},{default:e(()=>[w(p(c.value),1)]),_:1})):B("",!0)]))}},W=k(R,[["__scopeId","data-v-32d39a8c"]]);export{W as default};
