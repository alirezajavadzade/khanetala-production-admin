import{m as y,j as D,u as L,V as m}from"./VMenu-CWJpJzYw.js";import{f as w}from"./index-DqRtrUNQ.js";import{B as A,D as B,E as I,r as S,j as F,at as R,h as g,I as T,au as H,H as d,b as E,af as O,ap as W}from"./index-wToI4KX1.js";const j=A({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:D},zIndex:2400})},"VDialog"),U=B()({name:"VDialog",props:j(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,h){let{emit:v,slots:i}=h;const u=I(e,"modelValue"),{scopeId:V}=L(),t=S();function f(a){var l,c;const o=a.relatedTarget,r=a.target;if(o!==r&&((l=t.value)!=null&&l.contentEl)&&((c=t.value)!=null&&c.globalTop)&&![document,t.value.contentEl].includes(r)&&!t.value.contentEl.contains(r)){const n=H(t.value.contentEl);if(!n.length)return;const s=n[0],x=n[n.length-1];o===s?x.focus():s.focus()}}F(()=>{document.removeEventListener("focusin",f)}),R&&g(()=>u.value&&e.retainFocus,a=>{a?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0});function P(){var a;v("afterEnter"),(a=t.value)!=null&&a.contentEl&&!t.value.contentEl.contains(document.activeElement)&&t.value.contentEl.focus({preventScroll:!0})}function b(){v("afterLeave")}return g(u,async a=>{var o;a||(await W(),(o=t.value.activatorEl)==null||o.focus({preventScroll:!0}))}),T(()=>{const a=m.filterProps(e),o=d({"aria-haspopup":"dialog"},e.activatorProps),r=d({tabindex:-1},e.contentProps);return E(m,d({ref:t,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:u.value,"onUpdate:modelValue":l=>u.value=l,"aria-modal":"true",activatorProps:o,contentProps:r,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:P,onAfterLeave:b},V),{activator:i.activator,default:function(){for(var l=arguments.length,c=new Array(l),n=0;n<l;n++)c[n]=arguments[n];return E(O,{root:"VDialog"},{default:()=>{var s;return[(s=i.default)==null?void 0:s.call(i,...c)]}})}})}),w({},t)}});export{U as V};
