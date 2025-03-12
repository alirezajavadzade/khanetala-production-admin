import{a5 as r}from"./index-Cc3c-qHk.js";const t=r.create({baseURL:"https://khaneetala.ir/api/admin",headers:{"Content-Type":"application/json",Accept:"application/json"}});t.interceptors.request.use(e=>{const s=localStorage.getItem("token");return s?e.headers.Authorization=`Bearer ${s}`:router.push("/login"),e},e=>Promise.reject(e));t.interceptors.response.use(e=>e,e=>(e.response.status==401&&(localStorage.removeItem("token"),router.push("/login")),console.error("API Error:",e.response||e.message),Promise.reject(e)));const o={async AllWallet(){return(await t.get("/wallet/all")).data},async PendingWithdraw(){return(await t.get("/withdraw/pending")).data},async CompleteWithdraw(){return(await t.get("/withdraw/succeed")).data},async SubmitWithdraw(e){const s=JSON.stringify({withdrawalId:e.withdrawalId});return(await t.put(`/withdraw/${e.id}`,s)).data},async PendingDeposit(){return(await t.get("/deposit/pending")).data},async CompleteDeposit(){return(await t.get("/deposit/succeed")).data},async FailedDeposit(){return(await t.get("/deposit/failed")).data},async SubmitDeposit(e){const s=JSON.stringify({authority:e.authority});return(await t.put(`/deposit/${e.id}`,s)).data}};export{o as W};
