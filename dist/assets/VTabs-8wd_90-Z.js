import{B as I,C as z,ah as se,D as W,T as le,r as _,y as g,I as $,a2 as X,b as f,F as O,H as P,ai as j,L as D,O as F,P as ie,ad as ue,a7 as ce,S as re,aj as de,x as Y,h as ve,ak as fe,X as U,al as he,am as q,E as Q,an as me,ao as ge,Y as be,ag as H,ap as ye,aq as we,ar as xe,Q as Te,s as C,ae as Ve,as as Se}from"./index-wToI4KX1.js";import{f as Ce,b as ke,s as Be}from"./index-DqRtrUNQ.js";import{g as Pe,h as Ie,i as We,u as $e}from"./VMenu-CWJpJzYw.js";import{M as Ee}from"./VImg-DHToRddC.js";import{m as _e,c as L}from"./VDataTable-gfjExOxn.js";const R=Symbol.for("vuetify:v-tabs"),Xe=I({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...z(se({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ye=W()({name:"VTab",props:Xe(),setup(e,o){let{slots:n,attrs:t}=o;const{textColorClasses:s,textColorStyles:l}=le(e,"sliderColor"),a=_(),v=_(),c=g(()=>e.direction==="horizontal"),m=g(()=>{var b,i;return((i=(b=a.value)==null?void 0:b.group)==null?void 0:i.isSelected.value)??!1});function T(b){var r,u;let{value:i}=b;if(i){const y=(u=(r=a.value)==null?void 0:r.$el.parentElement)==null?void 0:u.querySelector(".v-tab--selected .v-tab__slider"),k=v.value;if(!y||!k)return;const E=getComputedStyle(y).color,V=y.getBoundingClientRect(),S=k.getBoundingClientRect(),d=c.value?"x":"y",h=c.value?"X":"Y",w=c.value?"right":"bottom",x=c.value?"width":"height",ee=V[d],te=S[d],B=ee>te?V[w]-S[w]:V[d]-S[d],ne=Math.sign(B)>0?c.value?"right":"bottom":Math.sign(B)<0?c.value?"left":"top":"center",oe=(Math.abs(B)+(Math.sign(B)<0?V[x]:S[x]))/Math.max(V[x],S[x])||0,ae=V[x]/S[x]||0,M=1.5;ke(k,{backgroundColor:[E,"currentcolor"],transform:[`translate${h}(${B}px) scale${h}(${ae})`,`translate${h}(${B/M}px) scale${h}(${(oe-1)/M+1})`,"none"],transformOrigin:Array(3).fill(ne)},{duration:225,easing:Be})}}return $(()=>{const b=X.filterProps(e);return f(X,P({symbol:R,ref:a,class:["v-tab",e.class],style:e.style,tabindex:m.value?0:-1,role:"tab","aria-selected":String(m.value),active:!1},b,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":T}),{...n,default:()=>{var i;return f(O,null,[((i=n.default)==null?void 0:i.call(n))??e.text,!e.hideSlider&&f("div",{ref:v,class:["v-tab__slider",s.value],style:l.value},null)])}})}),Ce({},a)}}),He=e=>{const{touchstartX:o,touchendX:n,touchstartY:t,touchendY:s}=e,l=.5,a=16;e.offsetX=n-o,e.offsetY=s-t,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&n<o-a&&e.left(e),e.right&&n>o+a&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&s<t-a&&e.up(e),e.down&&s>t+a&&e.down(e))};function Re(e,o){var t;const n=e.changedTouches[0];o.touchstartX=n.clientX,o.touchstartY=n.clientY,(t=o.start)==null||t.call(o,{originalEvent:e,...o})}function Me(e,o){var t;const n=e.changedTouches[0];o.touchendX=n.clientX,o.touchendY=n.clientY,(t=o.end)==null||t.call(o,{originalEvent:e,...o}),He(o)}function Le(e,o){var t;const n=e.changedTouches[0];o.touchmoveX=n.clientX,o.touchmoveY=n.clientY,(t=o.move)==null||t.call(o,{originalEvent:e,...o})}function Ae(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>Re(n,o),touchend:n=>Me(n,o),touchmove:n=>Le(n,o)}}function Ge(e,o){var v;const n=o.value,t=n!=null&&n.parent?e.parentElement:e,s=(n==null?void 0:n.options)??{passive:!0},l=(v=o.instance)==null?void 0:v.$.uid;if(!t||!l)return;const a=Ae(o.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[l]=a,j(a).forEach(c=>{t.addEventListener(c,a[c],s)})}function ze(e,o){var l,a;const n=(l=o.value)!=null&&l.parent?e.parentElement:e,t=(a=o.instance)==null?void 0:a.$.uid;if(!(n!=null&&n._touchHandlers)||!t)return;const s=n._touchHandlers[t];j(s).forEach(v=>{n.removeEventListener(v,s[v])}),delete n._touchHandlers[t]}const J={mounted:Ge,unmounted:ze},K=Symbol.for("vuetify:v-window"),N=Symbol.for("vuetify:v-window-group"),Z=I({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...D(),...F(),...ie()},"VWindow"),A=W()({name:"VWindow",directives:{Touch:J},props:Z(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{themeClasses:t}=ue(e),{isRtl:s}=ce(),{t:l}=re(),a=de(e,N),v=_(),c=g(()=>s.value?!e.reverse:e.reverse),m=Y(!1),T=g(()=>{const d=e.direction==="vertical"?"y":"x",w=(c.value?!m.value:m.value)?"-reverse":"";return`v-window-${d}${w}-transition`}),b=Y(0),i=_(void 0),r=g(()=>a.items.value.findIndex(d=>a.selected.value.includes(d.id)));ve(r,(d,h)=>{const w=a.items.value.length,x=w-1;w<=2?m.value=d<h:d===x&&h===0?m.value=!0:d===0&&h===x?m.value=!1:m.value=d<h}),fe(K,{transition:T,isReversed:m,transitionCount:b,transitionHeight:i,rootRef:v});const u=g(()=>e.continuous||r.value!==0),y=g(()=>e.continuous||r.value!==a.items.value.length-1);function k(){u.value&&a.prev()}function E(){y.value&&a.next()}const V=g(()=>{const d=[],h={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:a.prev,"aria-label":l("$vuetify.carousel.prev")};d.push(u.value?n.prev?n.prev({props:h}):f(X,h,null):f("div",null,null));const w={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:a.next,"aria-label":l("$vuetify.carousel.next")};return d.push(y.value?n.next?n.next({props:w}):f(X,w,null):f("div",null,null)),d}),S=g(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?k():E()},right:()=>{c.value?E():k()},start:h=>{let{originalEvent:w}=h;w.stopPropagation()}},...e.touch===!0?{}:e.touch});return $(()=>U(f(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var d,h;return[f("div",{class:"v-window__container",style:{height:i.value}},[(d=n.default)==null?void 0:d.call(n,{group:a}),e.showArrows!==!1&&f("div",{class:"v-window__controls"},[V.value])]),(h=n.additional)==null?void 0:h.call(n,{group:a})]}}),[[he("touch"),S.value]])),{group:a}}}),Oe=I({...z(Z(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),je=W()({name:"VTabsWindow",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const t=q(R,null),s=Q(e,"modelValue"),l=g({get(){var a;return s.value!=null||!t?s.value:(a=t.items.value.find(v=>t.selected.value.includes(v.id)))==null?void 0:a.value},set(a){s.value=a}});return $(()=>{const a=A.filterProps(e);return f(A,P({_as:"VTabsWindow"},a,{modelValue:l.value,"onUpdate:modelValue":v=>l.value=v,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),n)}),{}}}),p=I({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...D(),...me(),...Pe()},"VWindowItem"),G=W()({name:"VWindowItem",directives:{Touch:J},props:p(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const t=q(K),s=ge(e,N),{isBooted:l}=Ie();if(!t||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=Y(!1),v=g(()=>l.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function m(){var u;a.value||!t||(a.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=H((u=t.rootRef.value)==null?void 0:u.clientHeight)),t.transitionCount.value+=1)}function T(){c()}function b(u){a.value&&ye(()=>{!v.value||!a.value||!t||(t.transitionHeight.value=H(u.clientHeight))})}const i=g(()=>{const u=t.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof u!="string"?t.transition.value:u,onBeforeEnter:m,onAfterEnter:c,onEnterCancelled:T,onBeforeLeave:m,onAfterLeave:c,onLeaveCancelled:T,onEnter:b}:!1}),{hasContent:r}=We(e,s.isSelected);return $(()=>f(Ee,{transition:i.value,disabled:!l.value},{default:()=>{var u;return[U(f("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[r.value&&((u=n.default)==null?void 0:u.call(n))]),[[be,s.isSelected.value]])]}})),{groupItem:s}}}),De=I({...p()},"VTabsWindowItem"),Fe=W()({name:"VTabsWindowItem",props:De(),setup(e,o){let{slots:n}=o;return $(()=>{const t=G.filterProps(e);return f(G,P({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),n)}),{}}});function Ue(e){return e?e.map(o=>Se(o)?o:{text:o,value:o}):[]}const qe=I({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,..._e({mandatory:"force",selectedClass:"v-tab-item--selected"}),...we(),...F()},"VTabs"),et=W()({name:"VTabs",props:qe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:n,slots:t}=o;const s=Q(e,"modelValue"),l=g(()=>Ue(e.items)),{densityClasses:a}=xe(e),{backgroundColorClasses:v,backgroundColorStyles:c}=Te(C(e,"bgColor")),{scopeId:m}=$e();return Ve({VTab:{color:C(e,"color"),direction:C(e,"direction"),stacked:C(e,"stacked"),fixed:C(e,"fixedTabs"),sliderColor:C(e,"sliderColor"),hideSlider:C(e,"hideSlider")}}),$(()=>{const T=L.filterProps(e),b=!!(t.window||e.items.length>0);return f(O,null,[f(L,P(T,{modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,v.value,e.class],style:[{"--v-tabs-height":H(e.height)},c.value,e.style],role:"tablist",symbol:R},m,n),{default:()=>{var i;return[((i=t.default)==null?void 0:i.call(t))??l.value.map(r=>{var u;return((u=t.tab)==null?void 0:u.call(t,{item:r}))??f(Ye,P(r,{key:r.text,value:r.value}),{default:t[`tab.${r.value}`]?()=>{var y;return(y=t[`tab.${r.value}`])==null?void 0:y.call(t,{item:r})}:void 0})})]}}),b&&f(je,P({modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,key:"tabs-window"},m),{default:()=>{var i;return[l.value.map(r=>{var u;return((u=t.item)==null?void 0:u.call(t,{item:r}))??f(Fe,{value:r.value},{default:()=>{var y;return(y=t[`item.${r.value}`])==null?void 0:y.call(t,{item:r})}})}),(i=t.window)==null?void 0:i.call(t)]}})])}),{}}});export{et as V,Ye as a,je as b,Fe as c};
