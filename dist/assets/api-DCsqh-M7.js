import{a5 as o,a6 as s}from"./index-D7eKee9q.js";const r=s(),a=o.create({baseURL:"https://gateway.khanetala.ir/v1/main/admin",headers:{"Content-Type":"application/json",Accept:"application/json"}});a.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t?e.headers.Authorization=`Bearer ${t}`:r.replace("/login"),e},e=>Promise.reject(e));a.interceptors.response.use(e=>e,e=>(e.response.status==401&&(localStorage.removeItem("token"),r.replace("/login")),console.error("API Error:",e.response||e.message),Promise.reject(e)));export{a as W};
