import{C as R,L as P,ab as V,M as b,at as C,O as w,aB as S,P as O,Q as W,aC as D,E as p,af as A,ad as B,b4 as I,au as _,S as x,b5 as z,J as $,b as v,V as y,ai as T,b8 as j}from"./index-Dfpqkfnz.js";import{V as F}from"./VImg-C-fKbzw8.js";const d=Symbol("Forwarded refs");function m(t,u){let a=t;for(;a;){const o=Reflect.getOwnPropertyDescriptor(a,u);if(o)return o;a=Object.getPrototypeOf(a)}}function L(t){for(var u=arguments.length,a=new Array(u>1?u-1:0),o=1;o<u;o++)a[o-1]=arguments[o];return t[d]=a,new Proxy(t,{get(n,e){if(Reflect.has(n,e))return Reflect.get(n,e);if(!(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))){for(const s of a)if(s.value&&Reflect.has(s.value,e)){const r=Reflect.get(s.value,e);return typeof r=="function"?r.bind(s.value):r}}},has(n,e){if(Reflect.has(n,e))return!0;if(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))return!1;for(const s of a)if(s.value&&Reflect.has(s.value,e))return!0;return!1},set(n,e,s){if(Reflect.has(n,e))return Reflect.set(n,e,s);if(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))return!1;for(const r of a)if(r.value&&Reflect.has(r.value,e))return Reflect.set(r.value,e,s);return!1},getOwnPropertyDescriptor(n,e){var r;const s=Reflect.getOwnPropertyDescriptor(n,e);if(s)return s;if(!(typeof e=="symbol"||e.startsWith("$")||e.startsWith("__"))){for(const l of a){if(!l.value)continue;const i=m(l.value,e)??("_"in l.value?m((r=l.value._)==null?void 0:r.setupState,e):void 0);if(i)return i}for(const l of a){const i=l.value&&l.value[d];if(!i)continue;const f=i.slice();for(;f.length;){const c=f.shift(),h=m(c.value,e);if(h)return h;const g=c.value&&c.value[d];g&&f.push(...g)}}}}})}const q=R({start:Boolean,end:Boolean,icon:P,image:String,text:String,...V(),...b(),...C(),...w(),...S(),...O(),...W(),...D({variant:"flat"})},"VAvatar"),M=p()({name:"VAvatar",props:q(),setup(t,u){let{slots:a}=u;const{themeClasses:o}=A(t),{borderClasses:n}=B(t),{colorClasses:e,colorStyles:s,variantClasses:r}=I(t),{densityClasses:l}=_(t),{roundedClasses:i}=x(t),{sizeClasses:f,sizeStyles:c}=z(t);return $(()=>v(t.tag,{class:["v-avatar",{"v-avatar--start":t.start,"v-avatar--end":t.end},o.value,n.value,e.value,l.value,i.value,f.value,r.value,t.class],style:[s.value,c.value,t.style]},{default:()=>[a.default?v(T,{key:"content-defaults",defaults:{VImg:{cover:!0,src:t.image},VIcon:{icon:t.icon}}},{default:()=>[a.default()]}):t.image?v(F,{key:"image",src:t.image,alt:"",cover:!0},null):t.icon?v(y,{key:"icon",icon:t.icon},null):t.text,j(!1,"v-avatar")]})),{}}});export{M as V,L as f};
