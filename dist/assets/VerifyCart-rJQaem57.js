import{a$ as m,r as l,l as _,a as t,t as c,F as y,b0 as f,o as s,b as p}from"./index-B-tdYEh_.js";const u=m.create({baseURL:"https://jsonplaceholder.typicode.com/",timeout:1e4,headers:{"Content-Type":"application/json",Accept:"application/json"}});u.interceptors.request.use(e=>{const r=localStorage.getItem("token");return r&&(e.headers.Authorization=`Bearer ${r}`),e},e=>Promise.reject(e));u.interceptors.response.use(e=>e,e=>(console.error("API Error:",e.response||e.message),Promise.reject(e)));const v=async()=>{try{return(await u.get("posts")).data}catch(e){throw new Error(e.response.data.message||"Failed to fetch gold price")}},g={key:0},k={key:1},x={key:2,class:"d-flex flex-wrap"},P={__name:"VerifyCart",setup(e){const r=l(null),n=l(!1),o=l(null),d=async()=>{n.value=!0,o.value=null;try{const a=await v();console.log(a),r.value=a}catch(a){o.value=a.message||"خطا در دریافت اطلاعات طلا"}finally{n.value=!1}};return _(()=>{d()}),(a,j)=>(s(),t("div",null,[n.value?(s(),t("p",g,"در حال بارگذاری")):o.value?(s(),t("p",k,"`"+c(o.value),1)):(s(),t("div",x,[(s(!0),t(y,null,f(r.value,(i,h)=>(s(),t("div",{key:h,class:"px-4"},[p("p",null,"id: "+c(i.id),1),p("p",null,"userId: "+c(i.userId),1)]))),128))]))]))}};export{P as default};
