import{a5 as a,a6 as r,ay as c}from"./index-BHyl33af.js";const n=r(),t=a.create({baseURL:"https://khaneetala.ir/api/call",headers:{"Content-Type":"application/json",Accept:"application/json"}});t.interceptors.request.use(e=>{const s=localStorage.getItem("token");return s?e.headers.Authorization=`Bearer ${s}`:n.replace("/login"),e},e=>Promise.reject(e));t.interceptors.response.use(e=>e,e=>(e.response.status==401&&(localStorage.removeItem("token"),n.replace("/login")),console.error("API Error:",e.response||e.message),Promise.reject(e)));const p={async PendingAccountingList(){return(await t.get("/status/pending")).data},async CompleteAccountingList(){return(await t.get("/status/completed")).data},async rejectAccountingList(){return(await t.get("/status/failed")).data},async SubmitAccountingReview(e){const s=JSON.stringify({description:e.description});return(await t.put(`/approve/${e.id}`,s)).data},async RejectAccountingReview(e){const s=JSON.stringify({description:e.description});return(await t.put(`/reject/${e.id}`,s)).data},async GoldBoxSellList(){return(await c.get("/selllist")).data}};export{p as A};
