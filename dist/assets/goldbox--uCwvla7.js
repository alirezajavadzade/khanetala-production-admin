import{a4 as o}from"./index-wToI4KX1.js";const s=o.create({baseURL:"https://khaneetala.ir/api/admin",headers:{"Content-Type":"application/json",Accept:"application/json"}});s.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));s.interceptors.response.use(e=>e,e=>(e.response.status==401&&(localStorage.removeItem("token"),router.push("/login")),console.error("API Error:",e.response||e.message),Promise.reject(e)));const n={async BuyGoldBox(e){return(await s.get(`/transactions/buy?type=${e}`)).data},async SubmitGoldboxBuy(e){const t=JSON.stringify({authority:e.authority});return(await s.put(`/transactions/${e.id}`,t)).data},async SellGoldBox(e){return(await s.get(`/transactions/sell?type=${e}`)).data}};export{n as G};
