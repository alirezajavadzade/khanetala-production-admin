import{r as p,e as _,w as l,a0 as k,o as c,b as e,c as w,a8 as C,F as y,a3 as f,B as m,a1 as B}from"./index-Dfpqkfnz.js";import{V as F,a as R,b as x,c as u,d as z}from"./VStepper-BAqcIdQo.js";import{V as i,b}from"./VCard-DECbdgiQ.js";import{V as n}from"./VForm-BcN4j-94.js";import"./VAvatar-CthOB--A.js";import"./VImg-C-fKbzw8.js";import"./VWindowItem-D4JbBMjf.js";import"./ssrBoot-BEGXEBRu.js";import"./form-D43RqBoT.js";const $={__name:"inpersonSaleView",setup(L){const g=p([1,2,3,4]),s=p(1),v=p({}),d=r=>r<s.value,o=(r,t)=>{r&&(v.value[t]=r)},V=async r=>{const t=v.value[s.value];if(t){const{valid:a}=await t.validate();a&&await S()&&s.value++}},S=async r=>{if(s.value===1)return!0;if(s.value===2)return!0;if(s.value===3)return!0;if(s.value===4)return!0};return(r,t)=>(c(),_(k,null,{default:l(()=>[e(B,{cols:"12"},{default:l(()=>[e(F,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a)},{default:l(()=>[e(R,null,{default:l(()=>[(c(!0),w(y,null,C(g.value,a=>(c(),_(z,{key:a,complete:d(a),title:`مرحله ${a}`,value:a,icon:d(a)?"ri-check-line":"ri-close-line",color:d(a)?"#0b8707":"#c7c3c3",class:"custom-stepper-icon"},null,8,["complete","title","value","icon","color"]))),128))]),_:1}),e(x,null,{default:l(()=>[e(u,{value:1},{default:l(()=>[e(i,{class:"step-card"},{default:l(()=>[e(n,{ref:a=>o(a,1)},null,512),e(b,{class:"btn-box first-step"},{default:l(()=>[e(f,{onClick:V,color:"primary",size:"large",variant:"elevated",loading:r.stepOneLoading,disabled:!r.isFormValid},{default:l(()=>t[1]||(t[1]=[m(" بعدی ")])),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1}),e(u,{value:2},{default:l(()=>[e(i,{class:"step-card"},{default:l(()=>[e(n,{ref:a=>o(a,2)},null,512),e(b,{class:"btn-box"},{default:l(()=>[e(f,{onClick:r.prevStep,size:"large"},{default:l(()=>t[2]||(t[2]=[m("قبلی")])),_:1},8,["onClick"]),e(f,{onClick:V,color:"primary",size:"large",variant:"elevated",loading:r.stepTwoLoading},{default:l(()=>t[3]||(t[3]=[m(" بعدی ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1}),e(u,{value:3},{default:l(()=>[e(i,{class:"step-card"},{default:l(()=>[e(n,{ref:a=>o(a,3)},null,512)]),_:1})]),_:1}),e(u,{value:4},{default:l(()=>[e(i,{class:"step-card"},{default:l(()=>[e(n,{ref:a=>o(a,4)},null,512)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};export{$ as default};
