import{a5 as i,a6 as p,ao as n}from"./index-D7eKee9q.js";import{V as a}from"./api-NPXzHDGP.js";const r=p(),s=i.create({baseURL:"https://gateway.khanetala.ir/v1/main/admin",headers:{"Content-Type":"application/json",Accept:"application/json"}});s.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t?e.headers.Authorization=`Bearer ${t}`:r.replace("/login"),e},e=>Promise.reject(e));s.interceptors.response.use(e=>e,e=>(e.response.status==401&&(localStorage.removeItem("token"),r.replace("/login")),console.error("API Error:",e.response||e.message),Promise.reject(e)));const d={async BuyGoldBox(e){return(await s.get(`/transactions/buy?type=${e}`)).data},async SubmitGoldboxBuy(e){const t=JSON.stringify({authority:e.authority});return(await s.put(`/transactions/${e.id}`,t)).data},async SellGoldBox(e){return(await s.get(`/transactions/sell?type=${e}`)).data},async AuthNumberTradeGoldbox(e){const t=JSON.stringify({phoneNumber:e});return(await a.post("/old/identity/status",t)).data},async AuthIdentityOldUser(e){const t=JSON.stringify({phoneNumber:e.phoneNumber,birthDate:e.birthDate,nationalCode:e.nationalCode});return(await a.post(`/old/approve/${e.id}`,t)).data},async AuthIdentityNewUser(e){const t=JSON.stringify({phoneNumber:e.phoneNumber,birthDate:e.birthDate,nationalCode:e.nationalCode});return(await a.post("/old/approvenew",t)).data},async CreateInvoiceTradeBuy(e){const t=JSON.stringify(e);return(await n.post("/call/create",t)).data},async CreateInvoiceTradeSell(e){const t=JSON.stringify(e);return(await n.post("/callsell/create",t)).data}};export{d as G};
