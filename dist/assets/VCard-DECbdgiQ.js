import{E as l,M as s,ah as j,J as c,b as n,C as y,P as f,aw as H,L as m,at as x,F as A,V as P,ai as V,ab as J,aW as X,ac as Y,aQ as Z,N as q,bz as G,O as K,b3 as U,Q as $,aC as ee,aZ as ae,af as te,ad as ne,b4 as de,au as ie,aX as le,ae as se,aR as ce,W as re,bA as ue,S as oe,b7 as ve,z as S,Y as me,am as ye,aS as be,b8 as ge,I as ke}from"./index-Dfpqkfnz.js";import{V as h}from"./VAvatar-CthOB--A.js";import{V as Ce}from"./VImg-C-fKbzw8.js";const Ve=l()({name:"VCardActions",props:s(),setup(e,d){let{slots:t}=d;return j({VBtn:{slim:!0,variant:"text"}}),c(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=y({opacity:[Number,String],...s(),...f()},"VCardSubtitle"),Ie=l()({name:"VCardSubtitle",props:fe(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),pe=H("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),Pe=l()({name:"VCardItem",props:Ae(),setup(e,d){let{slots:t}=d;return c(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),b=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),g=!!(r||t.append),k=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[b&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(pe,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),C&&n(Ie,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),g&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=y({opacity:[Number,String],...s(),...f()},"VCardText"),he=l()({name:"VCardText",props:Se(),setup(e,d){let{slots:t}=d;return c(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...J(),...s(),...x(),...X(),...Y(),...Z(),...q(),...G(),...K(),...U(),...f(),...$(),...ee({variant:"elevated"})},"VCard"),Be=l()({name:"VCard",directives:{Ripple:ae},props:xe(),setup(e,d){let{attrs:t,slots:a}=d;const{themeClasses:b}=te(e),{borderClasses:r}=ne(e),{colorClasses:g,colorStyles:k,variantClasses:C}=de(e),{densityClasses:u}=ie(e),{dimensionStyles:i}=le(e),{elevationClasses:T}=se(e),{loaderClasses:L}=ce(e),{locationStyles:N}=re(e),{positionClasses:B}=ue(e),{roundedClasses:D}=oe(e),o=ve(e,t),_=S(()=>e.link!==!1&&o.isLink.value),v=S(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return c(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),M=F||E,O=!!(a.append||e.appendAvatar||e.appendIcon),w=!!(a.prepend||e.prependAvatar||e.prependIcon),z=!!(a.image||e.image),Q=M||w||O,W=!!(a.text||e.text!=null);return me(n(R,ke({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},b.value,r.value,g.value,u.value,T.value,L.value,B.value,D.value,C.value,e.class],style:[k.value,i.value,N.value,e.style],onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var I;return[z&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(Ce,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),Q&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),W&&n(he,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ve,null,{default:a.actions}),ge(v.value,"v-card")]}}),[[ye("ripple"),v.value&&e.ripple]])}),{}}});export{Be as V,he as a,Ve as b};
