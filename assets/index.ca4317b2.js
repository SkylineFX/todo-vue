var ol=Object.defineProperty;var sl=(e,t,n)=>t in e?ol(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var dr=(e,t,n)=>(sl(e,typeof t!="symbol"?t+"":t,n),n);const ll=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ll();function ra(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const fl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cl=ra(fl);function io(e){return!!e||e===""}function aa(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=le(r)?ml(r):aa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(le(e))return e;if(ie(e))return e}}const ul=/;(?![^(]*\))/g,dl=/:(.+)/;function ml(e){const t={};return e.split(ul).forEach(n=>{if(n){const r=n.split(dl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function He(e){let t="";if(le(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=He(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function pl(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=$t(e[r],t[r]);return n}function $t(e,t){if(e===t)return!0;let n=Wa(e),r=Wa(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=sn(e),r=sn(t),n||r)return e===t;if(n=R(e),r=R(t),n||r)return n&&r?pl(e,t):!1;if(n=ie(e),r=ie(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!$t(e[o],t[o]))return!1}}return String(e)===String(t)}function oo(e,t){return e.findIndex(n=>$t(n,t))}const Ba=e=>le(e)?e:e==null?"":R(e)||ie(e)&&(e.toString===fo||!H(e.toString))?JSON.stringify(e,so,2):String(e),so=(e,t)=>t&&t.__v_isRef?so(e,t.value):Rt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Kn(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!R(t)&&!co(t)?String(t):t,J={},Ft=[],Ie=()=>{},hl=()=>!1,gl=/^on[^a-z]/,Yn=e=>gl.test(e),ia=e=>e.startsWith("onUpdate:"),se=Object.assign,oa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vl=Object.prototype.hasOwnProperty,B=(e,t)=>vl.call(e,t),R=Array.isArray,Rt=e=>vn(e)==="[object Map]",Kn=e=>vn(e)==="[object Set]",Wa=e=>vn(e)==="[object Date]",H=e=>typeof e=="function",le=e=>typeof e=="string",sn=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",lo=e=>ie(e)&&H(e.then)&&H(e.catch),fo=Object.prototype.toString,vn=e=>fo.call(e),bl=e=>vn(e).slice(8,-1),co=e=>vn(e)==="[object Object]",sa=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yl=/-(\w)/g,je=Vn(e=>e.replace(yl,(t,n)=>n?n.toUpperCase():"")),xl=/\B([A-Z])/g,Ot=Vn(e=>e.replace(xl,"-$1").toLowerCase()),qn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),mr=Vn(e=>e?`on${qn(e)}`:""),ln=(e,t)=>!Object.is(e,t),En=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ln=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ya;const _l=()=>Ya||(Ya=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ge;class wl{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ge&&(this.parent=ge,this.index=(ge.scopes||(ge.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ge;try{return ge=this,t()}finally{ge=n}}}on(){ge=this}off(){ge=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function kl(e,t=ge){t&&t.active&&t.effects.push(e)}function Cl(){return ge}function Al(e){ge&&ge.cleanups.push(e)}const la=e=>{const t=new Set(e);return t.w=0,t.n=0,t},uo=e=>(e.w&lt)>0,mo=e=>(e.n&lt)>0,Ol=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=lt},El=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];uo(a)&&!mo(a)?a.delete(e):t[n++]=a,a.w&=~lt,a.n&=~lt}t.length=n}},Or=new WeakMap;let Jt=0,lt=1;const Er=30;let Ee;const _t=Symbol(""),Tr=Symbol("");class fa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kl(this,r)}run(){if(!this.active)return this.fn();let t=Ee,n=ot;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ee,Ee=this,ot=!0,lt=1<<++Jt,Jt<=Er?Ol(this):Ka(this),this.fn()}finally{Jt<=Er&&El(this),lt=1<<--Jt,Ee=this.parent,ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ee===this?this.deferStop=!0:this.active&&(Ka(this),this.onStop&&this.onStop(),this.active=!1)}}function Ka(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ot=!0;const po=[];function Bt(){po.push(ot),ot=!1}function Wt(){const e=po.pop();ot=e===void 0?!0:e}function xe(e,t,n){if(ot&&Ee){let r=Or.get(e);r||Or.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=la()),ho(a)}}function ho(e,t){let n=!1;Jt<=Er?mo(e)||(e.n|=lt,n=!uo(e)):n=!e.has(Ee),n&&(e.add(Ee),Ee.deps.push(e))}function Ye(e,t,n,r,a,i){const o=Or.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?sa(n)&&s.push(o.get("length")):(s.push(o.get(_t)),Rt(e)&&s.push(o.get(Tr)));break;case"delete":R(e)||(s.push(o.get(_t)),Rt(e)&&s.push(o.get(Tr)));break;case"set":Rt(e)&&s.push(o.get(_t));break}if(s.length===1)s[0]&&Pr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Pr(la(l))}}function Pr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Va(r);for(const r of n)r.computed||Va(r)}function Va(e,t){(e!==Ee||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Tl=ra("__proto__,__v_isRef,__isVue"),go=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(sn)),Pl=ca(),Sl=ca(!1,!0),Il=ca(!0),qa=Nl();function Nl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)xe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(K)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Bt();const r=K(this)[t].apply(this,n);return Wt(),r}}),e}function ca(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?ql:_o:t?xo:yo).get(r))return r;const o=R(r);if(!e&&o&&B(qa,a))return Reflect.get(qa,a,i);const s=Reflect.get(r,a,i);return(sn(a)?go.has(a):Tl(a))||(e||xe(r,"get",a),t)?s:ue(s)?o&&sa(a)?s:s.value:ie(s)?e?wo(s):ma(s):s}}const Ml=vo(),Ll=vo(!0);function vo(e=!1){return function(n,r,a,i){let o=n[r];if(fn(o)&&ue(o)&&!ue(a))return!1;if(!e&&!fn(a)&&(Sr(a)||(a=K(a),o=K(o)),!R(n)&&ue(o)&&!ue(a)))return o.value=a,!0;const s=R(n)&&sa(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===K(i)&&(s?ln(a,o)&&Ye(n,"set",r,a):Ye(n,"add",r,a)),l}}function Fl(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ye(e,"delete",t,void 0),r}function Rl(e,t){const n=Reflect.has(e,t);return(!sn(t)||!go.has(t))&&xe(e,"has",t),n}function Dl(e){return xe(e,"iterate",R(e)?"length":_t),Reflect.ownKeys(e)}const bo={get:Pl,set:Ml,deleteProperty:Fl,has:Rl,ownKeys:Dl},jl={get:Il,set(e,t){return!0},deleteProperty(e,t){return!0}},$l=se({},bo,{get:Sl,set:Ll}),ua=e=>e,Xn=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,r=!1){e=e.__v_raw;const a=K(e),i=K(t);n||(t!==i&&xe(a,"get",t),xe(a,"get",i));const{has:o}=Xn(a),s=r?ua:n?ha:cn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function _n(e,t=!1){const n=this.__v_raw,r=K(n),a=K(e);return t||(e!==a&&xe(r,"has",e),xe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function wn(e,t=!1){return e=e.__v_raw,!t&&xe(K(e),"iterate",_t),Reflect.get(e,"size",e)}function Xa(e){e=K(e);const t=K(this);return Xn(t).has.call(t,e)||(t.add(e),Ye(t,"add",e,e)),this}function Ja(e,t){t=K(t);const n=K(this),{has:r,get:a}=Xn(n);let i=r.call(n,e);i||(e=K(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&Ye(n,"set",e,t):Ye(n,"add",e,t),this}function Ga(e){const t=K(this),{has:n,get:r}=Xn(t);let a=n.call(t,e);a||(e=K(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Ye(t,"delete",e,void 0),i}function Za(){const e=K(this),t=e.size!==0,n=e.clear();return t&&Ye(e,"clear",void 0,void 0),n}function kn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=K(o),l=t?ua:e?ha:cn;return!e&&xe(s,"iterate",_t),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function Cn(e,t,n){return function(...r){const a=this.__v_raw,i=K(a),o=Rt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?ua:t?ha:cn;return!t&&xe(i,"iterate",l?Tr:_t),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function Ze(e){return function(...t){return e==="delete"?!1:this}}function zl(){const e={get(i){return xn(this,i)},get size(){return wn(this)},has:_n,add:Xa,set:Ja,delete:Ga,clear:Za,forEach:kn(!1,!1)},t={get(i){return xn(this,i,!1,!0)},get size(){return wn(this)},has:_n,add:Xa,set:Ja,delete:Ga,clear:Za,forEach:kn(!1,!0)},n={get(i){return xn(this,i,!0)},get size(){return wn(this,!0)},has(i){return _n.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:kn(!0,!1)},r={get(i){return xn(this,i,!0,!0)},get size(){return wn(this,!0)},has(i){return _n.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Cn(i,!1,!1),n[i]=Cn(i,!0,!1),t[i]=Cn(i,!1,!0),r[i]=Cn(i,!0,!0)}),[e,n,t,r]}const[Ul,Hl,Bl,Wl]=zl();function da(e,t){const n=t?e?Wl:Bl:e?Hl:Ul;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const Yl={get:da(!1,!1)},Kl={get:da(!1,!0)},Vl={get:da(!0,!1)},yo=new WeakMap,xo=new WeakMap,_o=new WeakMap,ql=new WeakMap;function Xl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jl(e){return e.__v_skip||!Object.isExtensible(e)?0:Xl(bl(e))}function ma(e){return fn(e)?e:pa(e,!1,bo,Yl,yo)}function Gl(e){return pa(e,!1,$l,Kl,xo)}function wo(e){return pa(e,!0,jl,Vl,_o)}function pa(e,t,n,r,a){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Jl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Dt(e){return fn(e)?Dt(e.__v_raw):!!(e&&e.__v_isReactive)}function fn(e){return!!(e&&e.__v_isReadonly)}function Sr(e){return!!(e&&e.__v_isShallow)}function ko(e){return Dt(e)||fn(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function Co(e){return Mn(e,"__v_skip",!0),e}const cn=e=>ie(e)?ma(e):e,ha=e=>ie(e)?wo(e):e;function Ao(e){ot&&Ee&&(e=K(e),ho(e.dep||(e.dep=la())))}function Oo(e,t){e=K(e),e.dep&&Pr(e.dep)}function ue(e){return!!(e&&e.__v_isRef===!0)}function De(e){return Eo(e,!1)}function Zl(e){return Eo(e,!0)}function Eo(e,t){return ue(e)?e:new Ql(e,t)}class Ql{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:cn(t)}get value(){return Ao(this),this._value}set value(t){t=this.__v_isShallow?t:K(t),ln(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:cn(t),Oo(this))}}function ye(e){return ue(e)?e.value:e}const ef={get:(e,t,n)=>ye(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ue(a)&&!ue(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function To(e){return Dt(e)?e:new Proxy(e,ef)}class tf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new fa(t,()=>{this._dirty||(this._dirty=!0,Oo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=K(this);return Ao(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ir(e,t,n=!1){let r,a;const i=H(e);return i?(r=e,a=Ie):(r=e.get,a=e.set),new tf(r,a,i||!a,n)}function st(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Jn(i,t,n)}return a}function Ae(e,t,n,r){if(H(e)){const i=st(e,t,n,r);return i&&lo(i)&&i.catch(o=>{Jn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}function Jn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){st(l,null,10,[e,o,s]);return}}nf(e,n,a,r)}function nf(e,t,n,r=!0){console.error(e)}let Fn=!1,Nr=!1;const be=[];let Be=0;const en=[];let Gt=null,It=0;const tn=[];let tt=null,Nt=0;const Po=Promise.resolve();let ga=null,Mr=null;function va(e){const t=ga||Po;return e?t.then(this?e.bind(this):e):t}function rf(e){let t=Be+1,n=be.length;for(;t<n;){const r=t+n>>>1;un(be[r])<e?t=r+1:n=r}return t}function So(e){(!be.length||!be.includes(e,Fn&&e.allowRecurse?Be+1:Be))&&e!==Mr&&(e.id==null?be.push(e):be.splice(rf(e.id),0,e),Io())}function Io(){!Fn&&!Nr&&(Nr=!0,ga=Po.then(Lo))}function af(e){const t=be.indexOf(e);t>Be&&be.splice(t,1)}function No(e,t,n,r){R(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Io()}function of(e){No(e,Gt,en,It)}function sf(e){No(e,tt,tn,Nt)}function Gn(e,t=null){if(en.length){for(Mr=t,Gt=[...new Set(en)],en.length=0,It=0;It<Gt.length;It++)Gt[It]();Gt=null,It=0,Mr=null,Gn(e,t)}}function Mo(e){if(Gn(),tn.length){const t=[...new Set(tn)];if(tn.length=0,tt){tt.push(...t);return}for(tt=t,tt.sort((n,r)=>un(n)-un(r)),Nt=0;Nt<tt.length;Nt++)tt[Nt]();tt=null,Nt=0}}const un=e=>e.id==null?1/0:e.id;function Lo(e){Nr=!1,Fn=!0,Gn(e),be.sort((n,r)=>un(n)-un(r));const t=Ie;try{for(Be=0;Be<be.length;Be++){const n=be[Be];n&&n.active!==!1&&st(n,null,14)}}finally{Be=0,be.length=0,Mo(),Fn=!1,ga=null,(be.length||en.length||tn.length)&&Lo(e)}}function lf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||J;p&&(a=n.map(x=>x.trim())),m&&(a=n.map(Ln))}let s,l=r[s=mr(t)]||r[s=mr(je(t))];!l&&i&&(l=r[s=mr(Ot(t))]),l&&Ae(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ae(f,e,6,a)}}function Fo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!H(e)){const l=f=>{const u=Fo(f,t,!0);u&&(s=!0,se(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):se(o,i),r.set(e,o),o)}function Zn(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Ot(t))||B(e,t))}let Ce=null,Ro=null;function Rn(e){const t=Ce;return Ce=e,Ro=e&&e.type.__scopeId||null,t}function ba(e,t=Ce,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&fi(-1);const i=Rn(t),o=e(...a);return Rn(i),r._d&&fi(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function pr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:x,ctx:E,inheritAttrs:I}=e;let T,g;const C=Rn(e);try{if(n.shapeFlag&4){const D=a||r;T=Fe(u.call(D,D,m,i,x,p,E)),g=l}else{const D=t;T=Fe(D.length>1?D(i,{attrs:l,slots:s,emit:f}):D(i,null)),g=t.props?l:ff(l)}}catch(D){nn.length=0,Jn(D,e,1),T=ae(Ne)}let S=T;if(g&&I!==!1){const D=Object.keys(g),{shapeFlag:z}=S;D.length&&z&7&&(o&&D.some(ia)&&(g=cf(g,o)),S=ft(S,g))}return n.dirs&&(S=ft(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),T=S,Rn(C),T}const ff=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},cf=(e,t)=>{const n={};for(const r in e)(!ia(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function uf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Qa(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!Zn(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Qa(r,o,f):!0:!!o;return!1}function Qa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function df({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const mf=e=>e.__isSuspense;function pf(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):sf(e)}function hf(e,t){if(oe){let n=oe.provides;const r=oe.parent&&oe.parent.provides;r===n&&(n=oe.provides=Object.create(r)),n[e]=t}}function hr(e,t,n=!1){const r=oe||Ce;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&H(t)?t.call(r.proxy):t}}const ei={};function wt(e,t,n){return Do(e,t,n)}function Do(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){const s=oe;let l,f=!1,u=!1;if(ue(e)?(l=()=>e.value,f=Sr(e)):Dt(e)?(l=()=>e,r=!0):R(e)?(u=!0,f=e.some(g=>Dt(g)||Sr(g)),l=()=>e.map(g=>{if(ue(g))return g.value;if(Dt(g))return yt(g);if(H(g))return st(g,s,2)})):H(e)?t?l=()=>st(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ae(e,s,3,[p])}:l=Ie,t&&r){const g=l;l=()=>yt(g())}let m,p=g=>{m=T.onStop=()=>{st(g,s,4)}};if(hn)return p=Ie,t?n&&Ae(t,s,3,[l(),u?[]:void 0,p]):l(),Ie;let x=u?[]:ei;const E=()=>{if(!!T.active)if(t){const g=T.run();(r||f||(u?g.some((C,S)=>ln(C,x[S])):ln(g,x)))&&(m&&m(),Ae(t,s,3,[g,x===ei?void 0:x,p]),x=g)}else T.run()};E.allowRecurse=!!t;let I;a==="sync"?I=E:a==="post"?I=()=>pe(E,s&&s.suspense):I=()=>of(E);const T=new fa(l,I);return t?n?E():x=T.run():a==="post"?pe(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&oa(s.scope.effects,T)}}function gf(e,t,n){const r=this.proxy,a=le(e)?e.includes(".")?jo(r,e):()=>r[e]:e.bind(r,r);let i;H(t)?i=t:(i=t.handler,n=t);const o=oe;zt(this);const s=Do(a,i.bind(r),n);return o?zt(o):kt(),s}function jo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!ie(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))yt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(Kn(e)||Rt(e))e.forEach(n=>{yt(n,t)});else if(co(e))for(const n in e)yt(e[n],t);return e}function $o(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xa(()=>{e.isMounted=!0}),Wo(()=>{e.isUnmounting=!0}),e}const ke=[Function,Array],vf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ke,onEnter:ke,onAfterEnter:ke,onEnterCancelled:ke,onBeforeLeave:ke,onLeave:ke,onAfterLeave:ke,onLeaveCancelled:ke,onBeforeAppear:ke,onAppear:ke,onAfterAppear:ke,onAppearCancelled:ke},setup(e,{slots:t}){const n=nr(),r=$o();let a;return()=>{const i=t.default&&ya(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const I of i)if(I.type!==Ne){o=I;break}}const s=K(e),{mode:l}=s;if(r.isLeaving)return gr(o);const f=ti(o);if(!f)return gr(o);const u=dn(f,s,r,n);mn(f,u);const m=n.subTree,p=m&&ti(m);let x=!1;const{getTransitionKey:E}=f.type;if(E){const I=E();a===void 0?a=I:I!==a&&(a=I,x=!0)}if(p&&p.type!==Ne&&(!vt(f,p)||x)){const I=dn(p,s,r,n);if(mn(p,I),l==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update()},gr(o);l==="in-out"&&f.type!==Ne&&(I.delayLeave=(T,g,C)=>{const S=zo(r,p);S[String(p.key)]=p,T._leaveCb=()=>{g(),T._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},bf=vf;function zo(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function dn(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:m,onLeave:p,onAfterLeave:x,onLeaveCancelled:E,onBeforeAppear:I,onAppear:T,onAfterAppear:g,onAppearCancelled:C}=t,S=String(e.key),D=zo(n,e),z=(U,W)=>{U&&Ae(U,r,9,W)},j=(U,W)=>{const te=W[1];z(U,W),R(U)?U.every(fe=>fe.length<=1)&&te():U.length<=1&&te()},V={mode:i,persisted:o,beforeEnter(U){let W=s;if(!n.isMounted)if(a)W=I||s;else return;U._leaveCb&&U._leaveCb(!0);const te=D[S];te&&vt(e,te)&&te.el._leaveCb&&te.el._leaveCb(),z(W,[U])},enter(U){let W=l,te=f,fe=u;if(!n.isMounted)if(a)W=T||l,te=g||f,fe=C||u;else return;let N=!1;const ne=U._enterCb=we=>{N||(N=!0,we?z(fe,[U]):z(te,[U]),V.delayedLeave&&V.delayedLeave(),U._enterCb=void 0)};W?j(W,[U,ne]):ne()},leave(U,W){const te=String(e.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return W();z(m,[U]);let fe=!1;const N=U._leaveCb=ne=>{fe||(fe=!0,W(),ne?z(E,[U]):z(x,[U]),U._leaveCb=void 0,D[te]===e&&delete D[te])};D[te]=e,p?j(p,[U,N]):N()},clone(U){return dn(U,t,n,r)}};return V}function gr(e){if(Qn(e))return e=ft(e),e.children=null,e}function ti(e){return Qn(e)?e.children?e.children[0]:void 0:e}function mn(e,t){e.shapeFlag&6&&e.component?mn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ya(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ve?(o.patchFlag&128&&a++,r=r.concat(ya(o.children,t,s))):(t||o.type!==Ne)&&r.push(s!=null?ft(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function dt(e){return H(e)?{setup:e,name:e.name}:e}const Tn=e=>!!e.type.__asyncLoader,Qn=e=>e.type.__isKeepAlive;function yf(e,t){Uo(e,"a",t)}function xf(e,t){Uo(e,"da",t)}function Uo(e,t,n=oe){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(er(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Qn(a.parent.vnode)&&_f(r,t,n,a),a=a.parent}}function _f(e,t,n,r){const a=er(t,e,r,!0);Yo(()=>{oa(r[t],a)},n)}function er(e,t,n=oe,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Bt(),zt(n);const s=Ae(t,n,e,o);return kt(),Wt(),s});return r?a.unshift(i):a.push(i),i}}const Xe=e=>(t,n=oe)=>(!hn||e==="sp")&&er(e,t,n),Ho=Xe("bm"),xa=Xe("m"),wf=Xe("bu"),Bo=Xe("u"),Wo=Xe("bum"),Yo=Xe("um"),kf=Xe("sp"),Cf=Xe("rtg"),Af=Xe("rtc");function Of(e,t=oe){er("ec",e,t)}function at(e,t){const n=Ce;if(n===null)return e;const r=rr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=J]=t[i];H(o)&&(o={mounted:o,updated:o}),o.deep&&yt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f})}return e}function mt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Bt(),Ae(l,n,8,[e.el,s,e,t]),Wt())}}const Ko="components";function Vo(e,t){return Tf(Ko,e,!0,t)||e}const Ef=Symbol();function Tf(e,t,n=!0,r=!1){const a=Ce||oe;if(a){const i=a.type;if(e===Ko){const s=ic(i,!1);if(s&&(s===t||s===je(t)||s===qn(je(t))))return i}const o=ni(a[e]||i[e],t)||ni(a.appContext[e],t);return!o&&r?i:o}}function ni(e,t){return e&&(e[t]||e[je(t)]||e[qn(je(t))])}function Pf(e,t,n,r){let a;const i=n&&n[r];if(R(e)||le(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ie(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Lr=e=>e?os(e)?rr(e)||e.proxy:Lr(e.parent):null,Dn=se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lr(e.parent),$root:e=>Lr(e.root),$emit:e=>e.emit,$options:e=>Xo(e),$forceUpdate:e=>e.f||(e.f=()=>So(e.update)),$nextTick:e=>e.n||(e.n=va.bind(e.proxy)),$watch:e=>gf.bind(e)}),Sf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const x=o[t];if(x!==void 0)switch(x){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==J&&B(r,t))return o[t]=1,r[t];if(a!==J&&B(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&B(f,t))return o[t]=3,i[t];if(n!==J&&B(n,t))return o[t]=4,n[t];Fr&&(o[t]=0)}}const u=Dn[t];let m,p;if(u)return t==="$attrs"&&xe(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&B(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,B(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==J&&B(a,t)?(a[t]=n,!0):r!==J&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&B(e,o)||t!==J&&B(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(Dn,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Fr=!0;function If(e){const t=Xo(e),n=e.proxy,r=e.ctx;Fr=!1,t.beforeCreate&&ri(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:x,updated:E,activated:I,deactivated:T,beforeDestroy:g,beforeUnmount:C,destroyed:S,unmounted:D,render:z,renderTracked:j,renderTriggered:V,errorCaptured:U,serverPrefetch:W,expose:te,inheritAttrs:fe,components:N,directives:ne,filters:we}=t;if(f&&Nf(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const re in o){const Z=o[re];H(Z)&&(r[re]=Z.bind(n))}if(a){const re=a.call(n,n);ie(re)&&(e.data=ma(re))}if(Fr=!0,i)for(const re in i){const Z=i[re],$e=H(Z)?Z.bind(n,n):H(Z.get)?Z.get.bind(n,n):Ie,fr=!H(Z)&&H(Z.set)?Z.set.bind(n):Ie,Kt=me({get:$e,set:fr});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:Tt=>Kt.value=Tt})}if(s)for(const re in s)qo(s[re],r,n,re);if(l){const re=H(l)?l.call(n):l;Reflect.ownKeys(re).forEach(Z=>{hf(Z,re[Z])})}u&&ri(u,e,"c");function ce(re,Z){R(Z)?Z.forEach($e=>re($e.bind(n))):Z&&re(Z.bind(n))}if(ce(Ho,m),ce(xa,p),ce(wf,x),ce(Bo,E),ce(yf,I),ce(xf,T),ce(Of,U),ce(Af,j),ce(Cf,V),ce(Wo,C),ce(Yo,D),ce(kf,W),R(te))if(te.length){const re=e.exposed||(e.exposed={});te.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>n[Z],set:$e=>n[Z]=$e})})}else e.exposed||(e.exposed={});z&&e.render===Ie&&(e.render=z),fe!=null&&(e.inheritAttrs=fe),N&&(e.components=N),ne&&(e.directives=ne)}function Nf(e,t,n=Ie,r=!1){R(e)&&(e=Rr(e));for(const a in e){const i=e[a];let o;ie(i)?"default"in i?o=hr(i.from||a,i.default,!0):o=hr(i.from||a):o=hr(i),ue(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ri(e,t,n){Ae(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function qo(e,t,n,r){const a=r.includes(".")?jo(n,r):()=>n[r];if(le(e)){const i=t[e];H(i)&&wt(a,i)}else if(H(e))wt(a,e.bind(n));else if(ie(e))if(R(e))e.forEach(i=>qo(i,t,n,r));else{const i=H(e.handler)?e.handler.bind(n):t[e.handler];H(i)&&wt(a,i,e)}}function Xo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>jn(l,f,o,!0)),jn(l,t,o)),i.set(t,l),l}function jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&jn(e,i,n,!0),a&&a.forEach(o=>jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Mf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Mf={data:ai,props:gt,emits:gt,methods:gt,computed:gt,beforeCreate:de,created:de,beforeMount:de,mounted:de,beforeUpdate:de,updated:de,beforeDestroy:de,beforeUnmount:de,destroyed:de,unmounted:de,activated:de,deactivated:de,errorCaptured:de,serverPrefetch:de,components:gt,directives:gt,watch:Ff,provide:ai,inject:Lf};function ai(e,t){return t?e?function(){return se(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function Lf(e,t){return gt(Rr(e),Rr(t))}function Rr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function de(e,t){return e?[...new Set([].concat(e,t))]:t}function gt(e,t){return e?se(se(Object.create(null),e),t):t}function Ff(e,t){if(!e)return t;if(!t)return e;const n=se(Object.create(null),e);for(const r in t)n[r]=de(e[r],t[r]);return n}function Rf(e,t,n,r=!1){const a={},i={};Mn(i,tr,1),e.propsDefaults=Object.create(null),Jo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Gl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Df(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=K(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(Zn(e.emitsOptions,p))continue;const x=t[p];if(l)if(B(i,p))x!==i[p]&&(i[p]=x,f=!0);else{const E=je(p);a[E]=Dr(l,s,E,x,e,!1)}else x!==i[p]&&(i[p]=x,f=!0)}}}else{Jo(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!B(t,m)&&((u=Ot(m))===m||!B(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Dr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!B(t,m)&&!0)&&(delete i[m],f=!0)}f&&Ye(e,"set","$attrs")}function Jo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(On(l))continue;const f=t[l];let u;a&&B(a,u=je(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:Zn(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=K(n),f=s||J;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Dr(a,l,m,f[m],e,!B(f,m))}}return o}function Dr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&H(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(zt(a),r=f[n]=l.call(null,t),kt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ot(n))&&(r=!0))}return r}function Go(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!H(e)){const u=m=>{l=!0;const[p,x]=Go(m,t,!0);se(o,p),x&&s.push(...x)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return r.set(e,Ft),Ft;if(R(i))for(let u=0;u<i.length;u++){const m=je(i[u]);ii(m)&&(o[m]=J)}else if(i)for(const u in i){const m=je(u);if(ii(m)){const p=i[u],x=o[m]=R(p)||H(p)?{type:p}:p;if(x){const E=li(Boolean,x.type),I=li(String,x.type);x[0]=E>-1,x[1]=I<0||E<I,(E>-1||B(x,"default"))&&s.push(m)}}}const f=[o,s];return r.set(e,f),f}function ii(e){return e[0]!=="$"}function oi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function si(e,t){return oi(e)===oi(t)}function li(e,t){return R(t)?t.findIndex(n=>si(n,e)):H(t)&&si(t,e)?0:-1}const Zo=e=>e[0]==="_"||e==="$stable",_a=e=>R(e)?e.map(Fe):[Fe(e)],jf=(e,t,n)=>{if(t._n)return t;const r=ba((...a)=>_a(t(...a)),n);return r._c=!1,r},Qo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Zo(a))continue;const i=e[a];if(H(i))t[a]=jf(a,i,r);else if(i!=null){const o=_a(i);t[a]=()=>o}}},es=(e,t)=>{const n=_a(t);e.slots.default=()=>n},$f=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),Mn(t,"_",n)):Qo(t,e.slots={})}else e.slots={},t&&es(e,t);Mn(e.slots,tr,1)},zf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(se(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Qo(t,a)),o=t}else t&&(es(e,t),o={default:1});if(i)for(const s in a)!Zo(s)&&!(s in o)&&delete a[s]};function ts(){return{app:null,config:{isNativeTag:hl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uf=0;function Hf(e,t){return function(r,a=null){H(r)||(r=Object.assign({},r)),a!=null&&!ie(a)&&(a=null);const i=ts(),o=new Set;let s=!1;const l=i.app={_uid:Uf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sc,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...u)):H(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const p=ae(r,a);return p.appContext=i,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,rr(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l}};return l}}function jr(e,t,n,r,a=!1){if(R(e)){e.forEach((p,x)=>jr(p,t&&(R(t)?t[x]:t),n,r,a));return}if(Tn(r)&&!a)return;const i=r.shapeFlag&4?rr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(le(f)?(u[f]=null,B(m,f)&&(m[f]=null)):ue(f)&&(f.value=null)),H(l))st(l,s,12,[o,u]);else{const p=le(l),x=ue(l);if(p||x){const E=()=>{if(e.f){const I=p?u[l]:l.value;a?R(I)&&oa(I,i):R(I)?I.includes(i)||I.push(i):p?(u[l]=[i],B(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,B(m,l)&&(m[l]=o)):x&&(l.value=o,e.k&&(u[e.k]=o))};o?(E.id=-1,pe(E,n)):E()}}}const pe=pf;function Bf(e){return Wf(e)}function Wf(e,t){const n=_l();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:x=Ie,cloneNode:E,insertStaticContent:I}=e,T=(c,d,h,b=null,v=null,w=null,A=!1,_=null,k=!!d.dynamicChildren)=>{if(c===d)return;c&&!vt(c,d)&&(b=yn(c),Ge(c,v,w,!0),c=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:y,ref:M,shapeFlag:P}=d;switch(y){case wa:g(c,d,h,b);break;case Ne:C(c,d,h,b);break;case vr:c==null&&S(d,h,b,A);break;case ve:ne(c,d,h,b,v,w,A,_,k);break;default:P&1?j(c,d,h,b,v,w,A,_,k):P&6?we(c,d,h,b,v,w,A,_,k):(P&64||P&128)&&y.process(c,d,h,b,v,w,A,_,k,Pt)}M!=null&&v&&jr(M,c&&c.ref,w,d||c,!d)},g=(c,d,h,b)=>{if(c==null)r(d.el=s(d.children),h,b);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},C=(c,d,h,b)=>{c==null?r(d.el=l(d.children||""),h,b):d.el=c.el},S=(c,d,h,b)=>{[c.el,c.anchor]=I(c.children,d,h,b,c.el,c.anchor)},D=({el:c,anchor:d},h,b)=>{let v;for(;c&&c!==d;)v=p(c),r(c,h,b),c=v;r(d,h,b)},z=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),a(c),c=h;a(d)},j=(c,d,h,b,v,w,A,_,k)=>{A=A||d.type==="svg",c==null?V(d,h,b,v,w,A,_,k):te(c,d,v,w,A,_,k)},V=(c,d,h,b,v,w,A,_)=>{let k,y;const{type:M,props:P,shapeFlag:L,transition:$,patchFlag:Y,dirs:q}=c;if(c.el&&E!==void 0&&Y===-1)k=c.el=E(c.el);else{if(k=c.el=o(c.type,w,P&&P.is,P),L&8?u(k,c.children):L&16&&W(c.children,k,null,b,v,w&&M!=="foreignObject",A,_),q&&mt(c,null,b,"created"),P){for(const Q in P)Q!=="value"&&!On(Q)&&i(k,Q,null,P[Q],w,c.children,b,v,ze);"value"in P&&i(k,"value",null,P.value),(y=P.onVnodeBeforeMount)&&Le(y,b,c)}U(k,c,c.scopeId,A,b)}q&&mt(c,null,b,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;X&&$.beforeEnter(k),r(k,d,h),((y=P&&P.onVnodeMounted)||X||q)&&pe(()=>{y&&Le(y,b,c),X&&$.enter(k),q&&mt(c,null,b,"mounted")},v)},U=(c,d,h,b,v)=>{if(h&&x(c,h),b)for(let w=0;w<b.length;w++)x(c,b[w]);if(v){let w=v.subTree;if(d===w){const A=v.vnode;U(c,A,A.scopeId,A.slotScopeIds,v.parent)}}},W=(c,d,h,b,v,w,A,_,k=0)=>{for(let y=k;y<c.length;y++){const M=c[y]=_?rt(c[y]):Fe(c[y]);T(null,M,d,h,b,v,w,A,_)}},te=(c,d,h,b,v,w,A)=>{const _=d.el=c.el;let{patchFlag:k,dynamicChildren:y,dirs:M}=d;k|=c.patchFlag&16;const P=c.props||J,L=d.props||J;let $;h&&pt(h,!1),($=L.onVnodeBeforeUpdate)&&Le($,h,d,c),M&&mt(d,c,h,"beforeUpdate"),h&&pt(h,!0);const Y=v&&d.type!=="foreignObject";if(y?fe(c.dynamicChildren,y,_,h,b,Y,w):A||$e(c,d,_,null,h,b,Y,w,!1),k>0){if(k&16)N(_,d,P,L,h,b,v);else if(k&2&&P.class!==L.class&&i(_,"class",null,L.class,v),k&4&&i(_,"style",P.style,L.style,v),k&8){const q=d.dynamicProps;for(let X=0;X<q.length;X++){const Q=q[X],Oe=P[Q],St=L[Q];(St!==Oe||Q==="value")&&i(_,Q,Oe,St,v,c.children,h,b,ze)}}k&1&&c.children!==d.children&&u(_,d.children)}else!A&&y==null&&N(_,d,P,L,h,b,v);(($=L.onVnodeUpdated)||M)&&pe(()=>{$&&Le($,h,d,c),M&&mt(d,c,h,"updated")},b)},fe=(c,d,h,b,v,w,A)=>{for(let _=0;_<d.length;_++){const k=c[_],y=d[_],M=k.el&&(k.type===ve||!vt(k,y)||k.shapeFlag&70)?m(k.el):h;T(k,y,M,null,b,v,w,A,!0)}},N=(c,d,h,b,v,w,A)=>{if(h!==b){for(const _ in b){if(On(_))continue;const k=b[_],y=h[_];k!==y&&_!=="value"&&i(c,_,y,k,A,d.children,v,w,ze)}if(h!==J)for(const _ in h)!On(_)&&!(_ in b)&&i(c,_,h[_],null,A,d.children,v,w,ze);"value"in b&&i(c,"value",h.value,b.value)}},ne=(c,d,h,b,v,w,A,_,k)=>{const y=d.el=c?c.el:s(""),M=d.anchor=c?c.anchor:s("");let{patchFlag:P,dynamicChildren:L,slotScopeIds:$}=d;$&&(_=_?_.concat($):$),c==null?(r(y,h,b),r(M,h,b),W(d.children,h,M,v,w,A,_,k)):P>0&&P&64&&L&&c.dynamicChildren?(fe(c.dynamicChildren,L,h,v,w,A,_),(d.key!=null||v&&d===v.subTree)&&ns(c,d,!0)):$e(c,d,h,M,v,w,A,_,k)},we=(c,d,h,b,v,w,A,_,k)=>{d.slotScopeIds=_,c==null?d.shapeFlag&512?v.ctx.activate(d,h,b,A,k):Et(d,h,b,v,w,A,k):ce(c,d,k)},Et=(c,d,h,b,v,w,A)=>{const _=c.component=ec(c,b,v);if(Qn(c)&&(_.ctx.renderer=Pt),tc(_),_.asyncDep){if(v&&v.registerDep(_,re),!c.el){const k=_.subTree=ae(Ne);C(null,k,d,h)}return}re(_,c,d,h,v,w,A)},ce=(c,d,h)=>{const b=d.component=c.component;if(uf(c,d,h))if(b.asyncDep&&!b.asyncResolved){Z(b,d,h);return}else b.next=d,af(b.update),b.update();else d.el=c.el,b.vnode=d},re=(c,d,h,b,v,w,A)=>{const _=()=>{if(c.isMounted){let{next:M,bu:P,u:L,parent:$,vnode:Y}=c,q=M,X;pt(c,!1),M?(M.el=Y.el,Z(c,M,A)):M=Y,P&&En(P),(X=M.props&&M.props.onVnodeBeforeUpdate)&&Le(X,$,M,Y),pt(c,!0);const Q=pr(c),Oe=c.subTree;c.subTree=Q,T(Oe,Q,m(Oe.el),yn(Oe),c,v,w),M.el=Q.el,q===null&&df(c,Q.el),L&&pe(L,v),(X=M.props&&M.props.onVnodeUpdated)&&pe(()=>Le(X,$,M,Y),v)}else{let M;const{el:P,props:L}=d,{bm:$,m:Y,parent:q}=c,X=Tn(d);if(pt(c,!1),$&&En($),!X&&(M=L&&L.onVnodeBeforeMount)&&Le(M,q,d),pt(c,!0),P&&ur){const Q=()=>{c.subTree=pr(c),ur(P,c.subTree,c,v,null)};X?d.type.__asyncLoader().then(()=>!c.isUnmounted&&Q()):Q()}else{const Q=c.subTree=pr(c);T(null,Q,h,b,c,v,w),d.el=Q.el}if(Y&&pe(Y,v),!X&&(M=L&&L.onVnodeMounted)){const Q=d;pe(()=>Le(M,q,Q),v)}(d.shapeFlag&256||q&&Tn(q.vnode)&&q.vnode.shapeFlag&256)&&c.a&&pe(c.a,v),c.isMounted=!0,d=h=b=null}},k=c.effect=new fa(_,()=>So(y),c.scope),y=c.update=()=>k.run();y.id=c.uid,pt(c,!0),y()},Z=(c,d,h)=>{d.component=c;const b=c.vnode.props;c.vnode=d,c.next=null,Df(c,d.props,b,h),zf(c,d.children,h),Bt(),Gn(void 0,c.update),Wt()},$e=(c,d,h,b,v,w,A,_,k=!1)=>{const y=c&&c.children,M=c?c.shapeFlag:0,P=d.children,{patchFlag:L,shapeFlag:$}=d;if(L>0){if(L&128){Kt(y,P,h,b,v,w,A,_,k);return}else if(L&256){fr(y,P,h,b,v,w,A,_,k);return}}$&8?(M&16&&ze(y,v,w),P!==y&&u(h,P)):M&16?$&16?Kt(y,P,h,b,v,w,A,_,k):ze(y,v,w,!0):(M&8&&u(h,""),$&16&&W(P,h,b,v,w,A,_,k))},fr=(c,d,h,b,v,w,A,_,k)=>{c=c||Ft,d=d||Ft;const y=c.length,M=d.length,P=Math.min(y,M);let L;for(L=0;L<P;L++){const $=d[L]=k?rt(d[L]):Fe(d[L]);T(c[L],$,h,null,v,w,A,_,k)}y>M?ze(c,v,w,!0,!1,P):W(d,h,b,v,w,A,_,k,P)},Kt=(c,d,h,b,v,w,A,_,k)=>{let y=0;const M=d.length;let P=c.length-1,L=M-1;for(;y<=P&&y<=L;){const $=c[y],Y=d[y]=k?rt(d[y]):Fe(d[y]);if(vt($,Y))T($,Y,h,null,v,w,A,_,k);else break;y++}for(;y<=P&&y<=L;){const $=c[P],Y=d[L]=k?rt(d[L]):Fe(d[L]);if(vt($,Y))T($,Y,h,null,v,w,A,_,k);else break;P--,L--}if(y>P){if(y<=L){const $=L+1,Y=$<M?d[$].el:b;for(;y<=L;)T(null,d[y]=k?rt(d[y]):Fe(d[y]),h,Y,v,w,A,_,k),y++}}else if(y>L)for(;y<=P;)Ge(c[y],v,w,!0),y++;else{const $=y,Y=y,q=new Map;for(y=Y;y<=L;y++){const he=d[y]=k?rt(d[y]):Fe(d[y]);he.key!=null&&q.set(he.key,y)}let X,Q=0;const Oe=L-Y+1;let St=!1,za=0;const Vt=new Array(Oe);for(y=0;y<Oe;y++)Vt[y]=0;for(y=$;y<=P;y++){const he=c[y];if(Q>=Oe){Ge(he,v,w,!0);continue}let Me;if(he.key!=null)Me=q.get(he.key);else for(X=Y;X<=L;X++)if(Vt[X-Y]===0&&vt(he,d[X])){Me=X;break}Me===void 0?Ge(he,v,w,!0):(Vt[Me-Y]=y+1,Me>=za?za=Me:St=!0,T(he,d[Me],h,null,v,w,A,_,k),Q++)}const Ua=St?Yf(Vt):Ft;for(X=Ua.length-1,y=Oe-1;y>=0;y--){const he=Y+y,Me=d[he],Ha=he+1<M?d[he+1].el:b;Vt[y]===0?T(null,Me,h,Ha,v,w,A,_,k):St&&(X<0||y!==Ua[X]?Tt(Me,h,Ha,2):X--)}}},Tt=(c,d,h,b,v=null)=>{const{el:w,type:A,transition:_,children:k,shapeFlag:y}=c;if(y&6){Tt(c.component.subTree,d,h,b);return}if(y&128){c.suspense.move(d,h,b);return}if(y&64){A.move(c,d,h,Pt);return}if(A===ve){r(w,d,h);for(let P=0;P<k.length;P++)Tt(k[P],d,h,b);r(c.anchor,d,h);return}if(A===vr){D(c,d,h);return}if(b!==2&&y&1&&_)if(b===0)_.beforeEnter(w),r(w,d,h),pe(()=>_.enter(w),v);else{const{leave:P,delayLeave:L,afterLeave:$}=_,Y=()=>r(w,d,h),q=()=>{P(w,()=>{Y(),$&&$()})};L?L(w,Y,q):q()}else r(w,d,h)},Ge=(c,d,h,b=!1,v=!1)=>{const{type:w,props:A,ref:_,children:k,dynamicChildren:y,shapeFlag:M,patchFlag:P,dirs:L}=c;if(_!=null&&jr(_,null,h,c,!0),M&256){d.ctx.deactivate(c);return}const $=M&1&&L,Y=!Tn(c);let q;if(Y&&(q=A&&A.onVnodeBeforeUnmount)&&Le(q,d,c),M&6)il(c.component,h,b);else{if(M&128){c.suspense.unmount(h,b);return}$&&mt(c,null,d,"beforeUnmount"),M&64?c.type.remove(c,d,h,v,Pt,b):y&&(w!==ve||P>0&&P&64)?ze(y,d,h,!1,!0):(w===ve&&P&384||!v&&M&16)&&ze(k,d,h),b&&ja(c)}(Y&&(q=A&&A.onVnodeUnmounted)||$)&&pe(()=>{q&&Le(q,d,c),$&&mt(c,null,d,"unmounted")},h)},ja=c=>{const{type:d,el:h,anchor:b,transition:v}=c;if(d===ve){al(h,b);return}if(d===vr){z(c);return}const w=()=>{a(h),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:A,delayLeave:_}=v,k=()=>A(h,w);_?_(c.el,w,k):k()}else w()},al=(c,d)=>{let h;for(;c!==d;)h=p(c),a(c),c=h;a(d)},il=(c,d,h)=>{const{bum:b,scope:v,update:w,subTree:A,um:_}=c;b&&En(b),v.stop(),w&&(w.active=!1,Ge(A,c,d,h)),_&&pe(_,d),pe(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ze=(c,d,h,b=!1,v=!1,w=0)=>{for(let A=w;A<c.length;A++)Ge(c[A],d,h,b,v)},yn=c=>c.shapeFlag&6?yn(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),$a=(c,d,h)=>{c==null?d._vnode&&Ge(d._vnode,null,null,!0):T(d._vnode||null,c,d,null,null,null,h),Mo(),d._vnode=c},Pt={p:T,um:Ge,m:Tt,r:ja,mt:Et,mc:W,pc:$e,pbc:fe,n:yn,o:e};let cr,ur;return t&&([cr,ur]=t(Pt)),{render:$a,hydrate:cr,createApp:Hf($a,cr)}}function pt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ns(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=rt(a[i]),s.el=o.el),n||ns(o,s))}}function Yf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Kf=e=>e.__isTeleport,ve=Symbol(void 0),wa=Symbol(void 0),Ne=Symbol(void 0),vr=Symbol(void 0),nn=[];let Te=null;function Pe(e=!1){nn.push(Te=e?null:[])}function Vf(){nn.pop(),Te=nn[nn.length-1]||null}let pn=1;function fi(e){pn+=e}function rs(e){return e.dynamicChildren=pn>0?Te||Ft:null,Vf(),pn>0&&Te&&Te.push(e),e}function We(e,t,n,r,a,i){return rs(G(e,t,n,r,a,i,!0))}function as(e,t,n,r,a){return rs(ae(e,t,n,r,a,!0))}function $r(e){return e?e.__v_isVNode===!0:!1}function vt(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",is=({key:e})=>e!=null?e:null,Pn=({ref:e,ref_key:t,ref_for:n})=>e!=null?le(e)||ue(e)||H(e)?{i:Ce,r:e,k:t,f:!!n}:e:null;function G(e,t=null,n=null,r=0,a=null,i=e===ve?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&is(t),ref:t&&Pn(t),scopeId:Ro,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ka(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=le(n)?8:16),pn>0&&!o&&Te&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Te.push(l),l}const ae=qf;function qf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Ef)&&(e=Ne),$r(e)){const s=ft(e,t,!0);return n&&ka(s,n),pn>0&&!i&&Te&&(s.shapeFlag&6?Te[Te.indexOf(e)]=s:Te.push(s)),s.patchFlag|=-2,s}if(oc(e)&&(e=e.__vccOpts),t){t=Xf(t);let{class:s,style:l}=t;s&&!le(s)&&(t.class=He(s)),ie(l)&&(ko(l)&&!R(l)&&(l=se({},l)),t.style=aa(l))}const o=le(e)?1:mf(e)?128:Kf(e)?64:ie(e)?4:H(e)?2:0;return G(e,t,n,r,a,o,i,!0)}function Xf(e){return e?ko(e)||tr in e?se({},e):e:null}function ft(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Gf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&is(s),ref:t&&t.ref?n&&a?R(a)?a.concat(Pn(t)):[a,Pn(t)]:Pn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ft(e.ssContent),ssFallback:e.ssFallback&&ft(e.ssFallback),el:e.el,anchor:e.anchor}}function Jf(e=" ",t=0){return ae(wa,null,e,t)}function zr(e="",t=!1){return t?(Pe(),as(Ne,null,e)):ae(Ne,null,e)}function Fe(e){return e==null||typeof e=="boolean"?ae(Ne):R(e)?ae(ve,null,e.slice()):typeof e=="object"?rt(e):ae(wa,null,String(e))}function rt(e){return e.el===null||e.memo?e:ft(e)}function ka(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ka(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(tr in t)?t._ctx=Ce:a===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[Jf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Gf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=He([t.class,r.class]));else if(a==="style")t.style=aa([t.style,r.style]);else if(Yn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Le(e,t,n,r=null){Ae(e,t,7,[n,r])}const Zf=ts();let Qf=0;function ec(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Zf,i={uid:Qf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new wl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Go(r,a),emitsOptions:Fo(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=lf.bind(null,i),e.ce&&e.ce(i),i}let oe=null;const nr=()=>oe||Ce,zt=e=>{oe=e,e.scope.on()},kt=()=>{oe&&oe.scope.off(),oe=null};function os(e){return e.vnode.shapeFlag&4}let hn=!1;function tc(e,t=!1){hn=t;const{props:n,children:r}=e.vnode,a=os(e);Rf(e,n,a,t),$f(e,r);const i=a?nc(e,t):void 0;return hn=!1,i}function nc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Co(new Proxy(e.ctx,Sf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ac(e):null;zt(e),Bt();const i=st(r,e,0,[e.props,a]);if(Wt(),kt(),lo(i)){if(i.then(kt,kt),t)return i.then(o=>{ci(e,o,t)}).catch(o=>{Jn(o,e,0)});e.asyncDep=i}else ci(e,i,t)}else ss(e,t)}function ci(e,t,n){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=To(t)),ss(e,n)}let ui;function ss(e,t,n){const r=e.type;if(!e.render){if(!t&&ui&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=se(se({isCustomElement:i,delimiters:s},o),l);r.render=ui(a,f)}}e.render=r.render||Ie}zt(e),Bt(),If(e),Wt(),kt()}function rc(e){return new Proxy(e.attrs,{get(t,n){return xe(e,"get","$attrs"),t[n]}})}function ac(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=rc(e))},slots:e.slots,emit:e.emit,expose:t}}function rr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(To(Co(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dn)return Dn[n](e)}}))}function ic(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function oc(e){return H(e)&&"__vccOpts"in e}const me=(e,t)=>Ir(e,t,hn);function ls(e,t,n){const r=arguments.length;return r===2?ie(t)&&!R(t)?$r(t)?ae(e,null,[t]):ae(e,t):ae(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$r(n)&&(n=[n]),ae(e,t,n))}const sc="3.2.37",lc="http://www.w3.org/2000/svg",bt=typeof document<"u"?document:null,di=bt&&bt.createElement("template"),fc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?bt.createElementNS(lc,e):bt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{di.innerHTML=r?`<svg>${e}</svg>`:e;const s=di.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function cc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function uc(e,t,n){const r=e.style,a=le(n);if(n&&!a){for(const i in n)Ur(r,i,n[i]);if(t&&!le(t))for(const i in t)n[i]==null&&Ur(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const mi=/\s*!important$/;function Ur(e,t,n){if(R(n))n.forEach(r=>Ur(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=dc(e,t);mi.test(n)?e.setProperty(Ot(r),n.replace(mi,""),"important"):e[r]=n}}const pi=["Webkit","Moz","ms"],br={};function dc(e,t){const n=br[t];if(n)return n;let r=je(t);if(r!=="filter"&&r in e)return br[t]=r;r=qn(r);for(let a=0;a<pi.length;a++){const i=pi[a]+r;if(i in e)return br[t]=i}return t}const hi="http://www.w3.org/1999/xlink";function mc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(hi,t.slice(6,t.length)):e.setAttributeNS(hi,t,n);else{const i=cl(t);n==null||i&&!io(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function pc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=io(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[fs,hc]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Hr=0;const gc=Promise.resolve(),vc=()=>{Hr=0},bc=()=>Hr||(gc.then(vc),Hr=fs());function it(e,t,n,r){e.addEventListener(t,n,r)}function yc(e,t,n,r){e.removeEventListener(t,n,r)}function xc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=_c(t);if(r){const f=i[t]=wc(r,a);it(e,s,f,l)}else o&&(yc(e,s,o,l),i[t]=void 0)}}const gi=/(?:Once|Passive|Capture)$/;function _c(e){let t;if(gi.test(e)){t={};let n;for(;n=e.match(gi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ot(e.slice(2)),t]}function wc(e,t){const n=r=>{const a=r.timeStamp||fs();(hc||a>=n.attached-1)&&Ae(kc(r,n.value),t,5,[r])};return n.value=e,n.attached=bc(),n}function kc(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const vi=/^on[a-z]/,Cc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?cc(e,r,a):t==="style"?uc(e,n,r):Yn(t)?ia(t)||xc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ac(e,t,r,a))?pc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),mc(e,t,r,a))};function Ac(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&vi.test(t)&&H(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||vi.test(t)&&le(n)?!1:t in e}const Qe="transition",qt="animation",cs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Oc=se({},bf.props,cs),ht=(e,t=[])=>{R(e)?e.forEach(n=>n(...t)):e&&e(...t)},bi=e=>e?R(e)?e.some(t=>t.length>1):e.length>1:!1;function Ec(e){const t={};for(const N in e)N in cs||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:u=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,E=Tc(a),I=E&&E[0],T=E&&E[1],{onBeforeEnter:g,onEnter:C,onEnterCancelled:S,onLeave:D,onLeaveCancelled:z,onBeforeAppear:j=g,onAppear:V=C,onAppearCancelled:U=S}=t,W=(N,ne,we)=>{nt(N,ne?u:s),nt(N,ne?f:o),we&&we()},te=(N,ne)=>{N._isLeaving=!1,nt(N,m),nt(N,x),nt(N,p),ne&&ne()},fe=N=>(ne,we)=>{const Et=N?V:C,ce=()=>W(ne,N,we);ht(Et,[ne,ce]),yi(()=>{nt(ne,N?l:i),Ue(ne,N?u:s),bi(Et)||xi(ne,r,I,ce)})};return se(t,{onBeforeEnter(N){ht(g,[N]),Ue(N,i),Ue(N,o)},onBeforeAppear(N){ht(j,[N]),Ue(N,l),Ue(N,f)},onEnter:fe(!1),onAppear:fe(!0),onLeave(N,ne){N._isLeaving=!0;const we=()=>te(N,ne);Ue(N,m),ds(),Ue(N,p),yi(()=>{!N._isLeaving||(nt(N,m),Ue(N,x),bi(D)||xi(N,r,T,we))}),ht(D,[N,we])},onEnterCancelled(N){W(N,!1),ht(S,[N])},onAppearCancelled(N){W(N,!0),ht(U,[N])},onLeaveCancelled(N){te(N),ht(z,[N])}})}function Tc(e){if(e==null)return null;if(ie(e))return[yr(e.enter),yr(e.leave)];{const t=yr(e);return[t,t]}}function yr(e){return Ln(e)}function Ue(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function nt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function yi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Pc=0;function xi(e,t,n,r){const a=e._endId=++Pc,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=us(e,t);if(!o)return r();const f=o+"end";let u=0;const m=()=>{e.removeEventListener(f,p),i()},p=x=>{x.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},s+1),e.addEventListener(f,p)}function us(e,t){const n=window.getComputedStyle(e),r=E=>(n[E]||"").split(", "),a=r(Qe+"Delay"),i=r(Qe+"Duration"),o=_i(a,i),s=r(qt+"Delay"),l=r(qt+"Duration"),f=_i(s,l);let u=null,m=0,p=0;t===Qe?o>0&&(u=Qe,m=o,p=i.length):t===qt?f>0&&(u=qt,m=f,p=l.length):(m=Math.max(o,f),u=m>0?o>f?Qe:qt:null,p=u?u===Qe?i.length:l.length:0);const x=u===Qe&&/\b(transform|all)(,|$)/.test(n[Qe+"Property"]);return{type:u,timeout:m,propCount:p,hasTransform:x}}function _i(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>wi(n)+wi(e[r])))}function wi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function ds(){return document.body.offsetHeight}const ms=new WeakMap,ps=new WeakMap,Sc={name:"TransitionGroup",props:se({},Oc,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=nr(),r=$o();let a,i;return Bo(()=>{if(!a.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Lc(a[0].el,n.vnode.el,o))return;a.forEach(Ic),a.forEach(Nc);const s=a.filter(Mc);ds(),s.forEach(l=>{const f=l.el,u=f.style;Ue(f,o),u.transform=u.webkitTransform=u.transitionDuration="";const m=f._moveCb=p=>{p&&p.target!==f||(!p||/transform$/.test(p.propertyName))&&(f.removeEventListener("transitionend",m),f._moveCb=null,nt(f,o))};f.addEventListener("transitionend",m)})}),()=>{const o=K(e),s=Ec(o);let l=o.tag||ve;a=i,i=t.default?ya(t.default()):[];for(let f=0;f<i.length;f++){const u=i[f];u.key!=null&&mn(u,dn(u,s,r,n))}if(a)for(let f=0;f<a.length;f++){const u=a[f];mn(u,dn(u,s,r,n)),ms.set(u,u.el.getBoundingClientRect())}return ae(l,null,i)}}},hs=Sc;function Ic(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Nc(e){ps.set(e,e.el.getBoundingClientRect())}function Mc(e){const t=ms.get(e),n=ps.get(e),r=t.left-n.left,a=t.top-n.top;if(r||a){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${a}px)`,i.transitionDuration="0s",e}}function Lc(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(s=>s&&r.classList.remove(s))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(r);const{hasTransform:i}=us(r);return a.removeChild(r),i}const Ut=e=>{const t=e.props["onUpdate:modelValue"]||!1;return R(t)?n=>En(t,n):t};function Fc(e){e.target.composing=!0}function ki(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Rc={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=Ut(a);const i=r||a.props&&a.props.type==="number";it(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Ln(s)),e._assign(s)}),n&&it(e,"change",()=>{e.value=e.value.trim()}),t||(it(e,"compositionstart",Fc),it(e,"compositionend",ki),it(e,"change",ki))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=Ut(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Ln(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},gs={deep:!0,created(e,t,n){e._assign=Ut(n),it(e,"change",()=>{const r=e._modelValue,a=vs(e),i=e.checked,o=e._assign;if(R(r)){const s=oo(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const f=[...r];f.splice(s,1),o(f)}}else if(Kn(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(bs(e,i))})},mounted:Ci,beforeUpdate(e,t,n){e._assign=Ut(n),Ci(e,t,n)}};function Ci(e,{value:t,oldValue:n},r){e._modelValue=t,R(t)?e.checked=oo(t,r.props.value)>-1:Kn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=$t(t,bs(e,!0)))}const xr={created(e,{value:t},n){e.checked=$t(t,n.props.value),e._assign=Ut(n),it(e,"change",()=>{e._assign(vs(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e._assign=Ut(r),t!==n&&(e.checked=$t(t,r.props.value))}};function vs(e){return"_value"in e?e._value:e.value}function bs(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Dc={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jc=(e,t)=>n=>{if(!("key"in n))return;const r=Ot(n.key);if(t.some(a=>a===r||Dc[a]===r))return e(n)},ys={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Xt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Xt(e,!0),r.enter(e)):r.leave(e,()=>{Xt(e,!1)}):Xt(e,t))},beforeUnmount(e,{value:t}){Xt(e,t)}};function Xt(e,t){e.style.display=t?e._vod:"none"}const $c=se({patchProp:Cc},fc);let Ai;function zc(){return Ai||(Ai=Bf($c))}const Uc=(...e)=>{const t=zc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Hc(r);if(!a)return;const i=t._component;!H(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Hc(e){return le(e)?document.querySelector(e):e}const Bc="/todo-vue/icon-sun.svg",Wc="/todo-vue/icon-moon.svg";var Oi;const xs=typeof window<"u",Yc=e=>typeof e=="string",_r=()=>{};xs&&((Oi=window==null?void 0:window.navigator)==null?void 0:Oi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Kc(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const _s=e=>e();function Vc(e=_s){const t=De(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...i)=>{t.value&&e(...i)}}}function ws(e){return Cl()?(Al(e),!0):!1}function qc(e,t=!0){nr()?Ho(e):t?e():va(e)}function Xc(e,t=!0){nr()?xa(e):t?e():va(e)}function Jc(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,a=ue(e),i=De(e);function o(s){return arguments.length?(i.value=s,i.value):(i.value=i.value===ye(n)?ye(r):ye(n),i.value)}return a?o:[i,o]}var Ei=Object.getOwnPropertySymbols,Gc=Object.prototype.hasOwnProperty,Zc=Object.prototype.propertyIsEnumerable,Qc=(e,t)=>{var n={};for(var r in e)Gc.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Ei)for(var r of Ei(e))t.indexOf(r)<0&&Zc.call(e,r)&&(n[r]=e[r]);return n};function eu(e,t,n={}){const r=n,{eventFilter:a=_s}=r,i=Qc(r,["eventFilter"]);return wt(e,Kc(a,t),i)}var tu=Object.defineProperty,nu=Object.defineProperties,ru=Object.getOwnPropertyDescriptors,$n=Object.getOwnPropertySymbols,ks=Object.prototype.hasOwnProperty,Cs=Object.prototype.propertyIsEnumerable,Ti=(e,t,n)=>t in e?tu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,au=(e,t)=>{for(var n in t||(t={}))ks.call(t,n)&&Ti(e,n,t[n]);if($n)for(var n of $n(t))Cs.call(t,n)&&Ti(e,n,t[n]);return e},iu=(e,t)=>nu(e,ru(t)),ou=(e,t)=>{var n={};for(var r in e)ks.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&$n)for(var r of $n(e))t.indexOf(r)<0&&Cs.call(e,r)&&(n[r]=e[r]);return n};function su(e,t,n={}){const r=n,{eventFilter:a}=r,i=ou(r,["eventFilter"]),{eventFilter:o,pause:s,resume:l,isActive:f}=Vc(a);return{stop:eu(e,t,iu(au({},i),{eventFilter:o})),pause:s,resume:l,isActive:f}}function lu(e){var t;const n=ye(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Ht=xs?window:void 0;function fu(...e){let t,n,r,a;if(Yc(e[0])?([n,r,a]=e,t=Ht):[t,n,r,a]=e,!t)return _r;let i=_r;const o=wt(()=>lu(t),l=>{i(),l&&(l.addEventListener(n,r,a),i=()=>{l.removeEventListener(n,r,a),i=_r})},{immediate:!0,flush:"post"}),s=()=>{o(),i()};return ws(s),s}function cu(e,t={}){const{window:n=Ht}=t,r=Boolean(n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const i=De(!1),o=()=>{!r||(a||(a=n.matchMedia(e)),i.value=a.matches)};return qc(()=>{o(),a&&("addEventListener"in a?a.addEventListener("change",o):a.addListener(o),ws(()=>{"removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o)}))}),i}const Br=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wr="__vueuse_ssr_handlers__";Br[Wr]=Br[Wr]||{};const uu=Br[Wr];function As(e,t){return uu[e]||t}function du(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const mu={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function pu(e,t,n,r={}){var a;const{flush:i="pre",deep:o=!0,listenToStorageChanges:s=!0,writeDefaults:l=!0,shallow:f,window:u=Ht,eventFilter:m,onError:p=j=>{console.error(j)}}=r,x=(f?Zl:De)(t);if(!n)try{n=As("getDefaultStorage",()=>{var j;return(j=Ht)==null?void 0:j.localStorage})()}catch(j){p(j)}if(!n)return x;const E=ye(t),I=du(E),T=(a=r.serializer)!=null?a:mu[I],{pause:g,resume:C}=su(x,()=>S(x.value),{flush:i,deep:o,eventFilter:m});return u&&s&&fu(u,"storage",z),z(),x;function S(j){try{j==null?n.removeItem(e):n.setItem(e,T.write(j))}catch(V){p(V)}}function D(j){if(!(j&&j.key!==e)){g();try{const V=j?j.newValue:n.getItem(e);return V==null?(l&&E!==null&&n.setItem(e,T.write(E)),E):typeof V!="string"?V:T.read(V)}catch(V){p(V)}finally{C()}}}function z(j){j&&j.key!==e||(x.value=D(j))}}function Os(e){return cu("(prefers-color-scheme: dark)",e)}var hu=Object.defineProperty,Pi=Object.getOwnPropertySymbols,gu=Object.prototype.hasOwnProperty,vu=Object.prototype.propertyIsEnumerable,Si=(e,t,n)=>t in e?hu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bu=(e,t)=>{for(var n in t||(t={}))gu.call(t,n)&&Si(e,n,t[n]);if(Pi)for(var n of Pi(t))vu.call(t,n)&&Si(e,n,t[n]);return e};function yu(e={}){const{selector:t="html",attribute:n="class",window:r=Ht,storage:a,storageKey:i="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:s,emitAuto:l}=e,f=bu({auto:"",light:"light",dark:"dark"},e.modes||{}),u=Os({window:r}),m=me(()=>u.value?"dark":"light"),p=s||(i==null?De("auto"):pu(i,"auto",a,{window:r,listenToStorageChanges:o})),x=me({get(){return p.value==="auto"&&!l?m.value:p.value},set(g){p.value=g}}),E=As("updateHTMLAttrs",(g,C,S)=>{const D=r==null?void 0:r.document.querySelector(g);if(!!D)if(C==="class"){const z=S.split(/\s/g);Object.values(f).flatMap(j=>(j||"").split(/\s/g)).filter(Boolean).forEach(j=>{z.includes(j)?D.classList.add(j):D.classList.remove(j)})}else D.setAttribute(C,S)});function I(g){var C;const S=g==="auto"?m.value:g;E(t,n,(C=f[S])!=null?C:S)}function T(g){e.onChanged?e.onChanged(g,I):I(g)}return wt(x,T,{flush:"post",immediate:!0}),Xc(()=>T(x.value)),x}var xu=Object.defineProperty,_u=Object.defineProperties,wu=Object.getOwnPropertyDescriptors,Ii=Object.getOwnPropertySymbols,ku=Object.prototype.hasOwnProperty,Cu=Object.prototype.propertyIsEnumerable,Ni=(e,t,n)=>t in e?xu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Au=(e,t)=>{for(var n in t||(t={}))ku.call(t,n)&&Ni(e,n,t[n]);if(Ii)for(var n of Ii(t))Cu.call(t,n)&&Ni(e,n,t[n]);return e},Ou=(e,t)=>_u(e,wu(t));function Eu(e={}){const{valueDark:t="dark",valueLight:n="",window:r=Ht}=e,a=yu(Ou(Au({},e),{onChanged:(s,l)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,s==="dark"):l(s)},modes:{dark:t,light:n}})),i=Os({window:r});return me({get(){return a.value==="dark"},set(s){s===i.value?a.value="auto":a.value=s?"dark":"light"}})}var Mi;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Mi||(Mi={}));const Tu={src:Bc,alt:"",class:"w-5 h-5 fill-dark-gray-300 dark:fill:light-gray-100",key:"sun"},Pu={src:Wc,alt:"",class:"w-5 h-5 fill-dark-gray-300 dark:fill:light-gray-100",key:"moon"},Su=dt({__name:"ThemeSwitch",setup(e){const t=Eu(),n=Jc(t);return(r,a)=>(Pe(),as(hs,{tag:"div",name:"rotate",class:"w-fit h-fit rounded-full cursor-pointer",onClick:a[0]||(a[0]=i=>ye(n)())},{default:ba(()=>[ye(t)?(Pe(),We("img",Tu)):zr("",!0),ye(t)?zr("",!0):(Pe(),We("img",Pu))]),_:1}))}});const Iu={class:"w-full h-full bg-wave-header-light dark:bg-wave-header-dark bg-no-repeat bg-center bg-cover overflow-auto"},Nu={class:"w-[85vw] lg:w-[60vw] xl:w-[40vw] h-fit flex justify-between mt-12 mb-12 mx-auto text-center"},Mu=G("h1",{class:"text-3xl font-bold text-dark-gray-300 dark:text-light-gray-100 tracking-[.5em] uppercase select-none"},"Todo",-1),Lu=dt({__name:"Header",setup(e){return(t,n)=>(Pe(),We("div",Iu,[G("div",Nu,[Mu,ae(Su)])]))}});class Fu{constructor(t,n){dr(this,"checked");dr(this,"text");this.checked=t,this.text=n}}const Ru={class:"w-full h-12 mb-[20px] lg:h-16 flex items-center rounded-md bg-light-gray-100 dark:bg-dark-gray-500-desat px-5"},Du={class:"h-[18px] lg:h-6 lg:mr-5 aspect-square mr-4 relative"},ju=dt({__name:"TodoInput",emits:["add"],setup(e,{emit:t}){const n=De(!1),r=De(""),a=(i,o)=>{if(!o)return;const s=new Fu(i,o);t("add",s),n.value=!1,r.value=""};return(i,o)=>{const s=Vo("font-awesome-icon");return Pe(),We("div",Ru,[G("div",Du,[at(G("input",{type:"checkbox",class:"h-[18px] lg:h-6 aspect-square appearance-none select-none cursor-pointer rounded-full outline outline-2 transition-all duration-300 outline-light-gray-300 dark:outline-dark-gray-400 checked:bg-gradient-to-br from-cyan to-purple checked:outline-none dark:checked:outline-none","onUpdate:modelValue":o[0]||(o[0]=l=>n.value=l)},null,512),[[gs,n.value]]),at(ae(s,{icon:"check",onClick:o[1]||(o[1]=l=>n.value=!n.value),class:"pointer-events-none text-light-gray-100 cursor-pointer select-none text-[12px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},null,512),[[ys,n.value]])]),at(G("input",{type:"text",placeholder:"Create a new todo...",class:"w-full h-full outline-none text-sm lg:text-xl rounded-md bg-light-gray-100 dark:bg-dark-gray-500-desat text-light-gray-500 dark:text-dark-blue-100",onKeyup:o[2]||(o[2]=jc(l=>a(n.value,r.value),["enter"])),"onUpdate:modelValue":o[3]||(o[3]=l=>r.value=l)},null,544),[[Rc,r.value]])])}}}),$u={class:"w-[85vw] lg:w-[60vw] xl:w-[40vw] h-full mx-auto"},zu={class:"h-[18px] lg:h-6 lg:mr-5 aspect-square mr-4 relative"},Uu=["onUpdate:modelValue"],Hu=["onClick"],Bu={class:"w-28 text-sm text-light-gray-400 dark:text-dark-gray-300"},Wu={class:"w-full h-12 flex items-center justify-center gap-3 rounded-md bg-light-gray-100 dark:bg-dark-gray-500-desat absolute left-0 top-[70px] 2xl:w-fit 2xl:static 2xl:top-0"},Yu=dt({__name:"TodoList",setup(e){let t=De([]);localStorage.getItem("todos")&&(t.value=JSON.parse(localStorage.getItem("todos")));let n=De(0);const r=De("all"),a=f=>{t.value.push(f),o()},i=f=>{t.value.splice(f,1),o()},o=()=>{localStorage.setItem("todos",JSON.stringify(t.value))},s=()=>{t.value=t.value.filter(f=>!f.checked),o()};n=Ir(()=>{let f=0;return t.value.forEach(u=>{u.checked||f++}),f});const l=Ir(()=>r.value==="all"?t.value:r.value==="active"?t.value.filter(f=>!f.checked):(r.value,t.value.filter(f=>f.checked)));return(f,u)=>{const m=Vo("font-awesome-icon");return Pe(),We("div",$u,[ae(ju,{onAdd:a}),ae(hs,{tag:"section",name:"fade",class:"w-full h-fit"},{default:ba(()=>[(Pe(!0),We(ve,null,Pf(ye(l),(p,x)=>(Pe(),We("div",{key:p.text,class:He([{round:x==0},"w-[85vw] lg:w-[60vw] xl:w-[40vw] h-14 lg:h-16 flex items-center justify-between bg-light-gray-100 dark:bg-dark-gray-500-desat border-b-[1px] border-light-gray-200 dark:border-dark-gray-400 px-5"])},[G("div",zu,[at(G("input",{type:"checkbox",class:"h-[18px] lg:h-6 aspect-square appearance-none select-none cursor-pointer rounded-full outline outline-2 transition-all duration-300 outline-light-gray-300 dark:outline-dark-gray-400 checked:bg-gradient-to-br from-cyan to-purple checked:outline-none dark:checked:outline-none","onUpdate:modelValue":E=>p.checked=E,onChange:u[0]||(u[0]=E=>o())},null,40,Uu),[[gs,p.checked]]),at(ae(m,{icon:"check",onClick:E=>p.checked=!p.checked,class:"pointer-events-none text-light-gray-200 cursor-pointer select-none text-[12px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"},null,8,["onClick"]),[[ys,p.checked]])]),G("div",{class:He([{done:p.checked},"w-full h-full outline-none text-sm lg:text-xl rounded-md bg-light-gray-100 dark:bg-dark-gray-500-desat text-light-gray-500 dark:text-dark-blue-100 flex items-center cursor-pointer select-none"]),onClick:E=>p.checked=!p.checked},Ba(p.text),11,Hu),ae(m,{icon:"x",onClick:E=>i(x),class:"w-4 text-light-gray-300 dark:text-dark-gray-300 cursor-pointer"},null,8,["onClick"])],2))),128)),ye(t).length?(Pe(),We("div",{key:"buttons",class:He([{round:!ye(l).length},"w-full h-14 flex items-center justify-between bg-light-gray-100 dark:bg-dark-gray-500-desat px-5 rounded-b-md relative"])},[G("p",Bu,Ba(ye(n))+" items left",1),G("div",Wu,[G("div",null,[G("label",{for:"all",class:He([{active:r.value=="all"},"select-none cursor-pointer text-light-gray-400 dark:text-dark-gray-300 hover:text-light-gray-500 dark:hover:text-dark-gray-100-hover font-bold ease-linear duration-100"])},"All",2),at(G("input",{id:"all",value:"all",type:"radio","onUpdate:modelValue":u[1]||(u[1]=p=>r.value=p),class:"hidden"},null,512),[[xr,r.value]])]),G("div",null,[G("label",{for:"active",class:He([{active:r.value=="active"},"select-none cursor-pointer text-light-gray-400 dark:text-dark-gray-300 hover:text-light-gray-500 dark:hover:text-dark-gray-100-hover font-bold ease-linear duration-100"])},"Active",2),at(G("input",{id:"active",value:"active",type:"radio","onUpdate:modelValue":u[2]||(u[2]=p=>r.value=p),class:"hidden"},null,512),[[xr,r.value]])]),G("div",null,[G("label",{for:"completed",class:He([{active:r.value=="completed"},"select-none cursor-pointer text-light-gray-400 dark:text-dark-gray-300 hover:text-light-gray-500 dark:hover:text-dark-gray-100-hover font-bold ease-linear duration-100"])},"Completed",2),at(G("input",{id:"completed",value:"completed",type:"radio","onUpdate:modelValue":u[3]||(u[3]=p=>r.value=p),class:"hidden"},null,512),[[xr,r.value]])])]),G("div",{onClick:s,class:"w-28 text-right cursor-pointer text-light-gray-400 dark:text-dark-gray-300 hover:text-light-gray-500 dark:hover:text-dark-gray-100-hover ease-linear duration-100 text-sm"},"Clear Completed")],2)):zr("",!0)]),_:1})])}}});const Ku={class:"w-full h-[25vh] min-h-[12rem] lg:h-[30vh] lg:min-h-[17.5rem]"},Vu={class:"w-full min-h-[75vh] -mt-20 lg:-mt-32"},qu=G("footer",{class:"w-full h-20 flex items-center justify-center select-none"},[G("p",{class:"text-dark-gray-300 dark:text-light-gray-100 text-sm"},"Drag and drop to reorder list")],-1),Xu=dt({__name:"App",setup(e){return(t,n)=>(Pe(),We(ve,null,[G("header",Ku,[ae(Lu)]),G("main",Vu,[ae(Yu)]),qu],64))}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Li(Object(n),!0).forEach(function(r){Zu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function Ju(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gu(e,t,n){return t&&Fi(e.prototype,t),n&&Fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Zu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ca(e,t){return ed(e)||nd(e,t)||Es(e,t)||ad()}function ar(e){return Qu(e)||td(e)||Es(e)||rd()}function Qu(e){if(Array.isArray(e))return Yr(e)}function ed(e){if(Array.isArray(e))return e}function td(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nd(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Es(e,t){if(!!e){if(typeof e=="string")return Yr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Yr(e,t)}}function Yr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ad(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ri=function(){},Aa={},Ts={},Ps=null,Ss={mark:Ri,measure:Ri};try{typeof window<"u"&&(Aa=window),typeof document<"u"&&(Ts=document),typeof MutationObserver<"u"&&(Ps=MutationObserver),typeof performance<"u"&&(Ss=performance)}catch{}var id=Aa.navigator||{},Di=id.userAgent,ji=Di===void 0?"":Di,ct=Aa,ee=Ts,$i=Ps,An=Ss;ct.document;var Je=!!ee.documentElement&&!!ee.head&&typeof ee.addEventListener=="function"&&typeof ee.createElement=="function",Is=~ji.indexOf("MSIE")||~ji.indexOf("Trident/"),Ke="___FONT_AWESOME___",Kr=16,Ns="fa",Ms="svg-inline--fa",Ct="data-fa-i2svg",Vr="data-fa-pseudo-element",od="data-fa-pseudo-element-pending",Oa="data-prefix",Ea="data-icon",zi="fontawesome-i2svg",sd="async",ld=["HTML","HEAD","STYLE","SCRIPT"],Ls=function(){try{return!0}catch{return!1}}(),Ta={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Un={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Fs={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},fd={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},cd=/fa[srltdbk\-\ ]/,Rs="fa-layers-text",ud=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,dd={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Ds=[1,2,3,4,5,6,7,8,9,10],md=Ds.concat([11,12,13,14,15,16,17,18,19,20]),pd=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},hd=[].concat(ar(Object.keys(Un)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",xt.GROUP,xt.SWAP_OPACITY,xt.PRIMARY,xt.SECONDARY]).concat(Ds.map(function(e){return"".concat(e,"x")})).concat(md.map(function(e){return"w-".concat(e)})),js=ct.FontAwesomeConfig||{};function gd(e){var t=ee.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ee&&typeof ee.querySelector=="function"){var bd=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bd.forEach(function(e){var t=Ca(e,2),n=t[0],r=t[1],a=vd(gd(n));a!=null&&(js[r]=a)})}var yd={familyPrefix:Ns,styleDefault:"solid",replacementClass:Ms,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},rn=O(O({},yd),js);rn.autoReplaceSvg||(rn.observeMutations=!1);var F={};Object.keys(rn).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){rn[e]=n,Sn.forEach(function(r){return r(F)})},get:function(){return rn[e]}})});ct.FontAwesomeConfig=F;var Sn=[];function xd(e){return Sn.push(e),function(){Sn.splice(Sn.indexOf(e),1)}}var et=Kr,Re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _d(e){if(!(!e||!Je)){var t=ee.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ee.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ee.head.insertBefore(t,r),e}}var wd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){for(var e=12,t="";e-- >0;)t+=wd[Math.random()*62|0];return t}function Yt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Pa(e){return e.classList?Yt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function $s(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat($s(e[n]),'" ')},"").trim()}function ir(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Sa(e){return e.size!==Re.size||e.x!==Re.x||e.y!==Re.y||e.rotate!==Re.rotate||e.flipX||e.flipY}function Cd(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Ad(e){var t=e.transform,n=e.width,r=n===void 0?Kr:n,a=e.height,i=a===void 0?Kr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Is?l+="translate(".concat(t.x/et-r/2,"em, ").concat(t.y/et-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):l+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),l+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Od=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zs(){var e=Ns,t=Ms,n=F.familyPrefix,r=F.replacementClass,a=Od;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ui=!1;function wr(){F.autoAddCss&&!Ui&&(_d(zs()),Ui=!0)}var Ed={mixout:function(){return{dom:{css:zs,insertCss:wr}}},hooks:function(){return{beforeDOMElementCreation:function(){wr()},beforeI2svg:function(){wr()}}}},Ve=ct||{};Ve[Ke]||(Ve[Ke]={});Ve[Ke].styles||(Ve[Ke].styles={});Ve[Ke].hooks||(Ve[Ke].hooks={});Ve[Ke].shims||(Ve[Ke].shims=[]);var Se=Ve[Ke],Us=[],Td=function e(){ee.removeEventListener("DOMContentLoaded",e),Hn=1,Us.map(function(t){return t()})},Hn=!1;Je&&(Hn=(ee.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ee.readyState),Hn||ee.addEventListener("DOMContentLoaded",Td));function Pd(e){!Je||(Hn?setTimeout(e,0):Us.push(e))}function bn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?$s(e):"<".concat(t," ").concat(kd(r),">").concat(i.map(bn).join(""),"</").concat(t,">")}function Hi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Sd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Sd(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Id(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function qr(e){var t=Id(e);return t.length===1?t[0].toString(16):null}function Nd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Bi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Xr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Bi(t);typeof Se.hooks.addPack=="function"&&!a?Se.hooks.addPack(e,Bi(t)):Se.styles[e]=O(O({},Se.styles[e]||{}),i),e==="fas"&&Xr("fa",t)}var an=Se.styles,Md=Se.shims,Ld=Object.values(Fs),Ia=null,Hs={},Bs={},Ws={},Ys={},Ks={},Fd=Object.keys(Ta);function Rd(e){return~hd.indexOf(e)}function Dd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Rd(a)?a:null}var Vs=function(){var t=function(i){return kr(an,function(o,s,l){return o[l]=kr(s,i,{}),o},{})};Hs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Bs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ks=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in an||F.autoFetchSvg,r=kr(Md,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ws=r.names,Ys=r.unicodes,Ia=or(F.styleDefault)};xd(function(e){Ia=or(e.styleDefault)});Vs();function Na(e,t){return(Hs[e]||{})[t]}function jd(e,t){return(Bs[e]||{})[t]}function Mt(e,t){return(Ks[e]||{})[t]}function qs(e){return Ws[e]||{prefix:null,iconName:null}}function $d(e){var t=Ys[e],n=Na("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ut(){return Ia}var Ma=function(){return{prefix:null,iconName:null,rest:[]}};function or(e){var t=Ta[e],n=Un[e]||Un[t],r=e in Se.styles?e:null;return n||r||null}function sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Dd(F.familyPrefix,s);if(an[s]?(s=Ld.includes(s)?fd[s]:s,a=s,o.prefix=s):Fd.indexOf(s)>-1?(a=s,o.prefix=or(s)):l?o.iconName=l:s!==F.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=a==="fa"?qs(o.iconName):{},u=Mt(o.prefix,o.iconName);f.prefix&&(a=null),o.iconName=f.iconName||u||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!an.far&&an.fas&&!F.autoFetchSvg&&(o.prefix="fas")}return o},Ma());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ut()||"fas"),i}var zd=function(){function e(){Ju(this,e),this.definitions={}}return Gu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),Xr(s,o[s]);var l=Fs[s];l&&Xr(l,o[s]),Vs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Wi=[],Lt={},jt={},Ud=Object.keys(jt);function Hd(e,t){var n=t.mixoutsTo;return Wi=e,Lt={},Object.keys(jt).forEach(function(r){Ud.indexOf(r)===-1&&delete jt[r]}),Wi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Lt[o]||(Lt[o]=[]),Lt[o].push(i[o])})}r.provides&&r.provides(jt)}),n}function Jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Lt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function At(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Lt[e]||[];a.forEach(function(i){i.apply(null,n)})}function qe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return jt[e]?jt[e].apply(null,t):void 0}function Gr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ut();if(!!t)return t=Mt(n,t)||t,Hi(Xs.definitions,n,t)||Hi(Se.styles,n,t)}var Xs=new zd,Bd=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,At("noAuto")},Wd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Je?(At("beforeI2svg",t),qe("pseudoElements2svg",t),qe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Pd(function(){Kd({autoReplaceSvgRoot:n}),At("watch",t)})}},Yd={icon:function(t){if(t===null)return null;if(zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=or(t[0]);return{prefix:r,iconName:Mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.familyPrefix,"-"))>-1||t.match(cd))){var a=sr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ut(),iconName:Mt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ut();return{prefix:i,iconName:Mt(i,t)||t}}}},_e={noAuto:Bd,config:F,dom:Wd,parse:Yd,library:Xs,findIconDefinition:Gr,toHtml:bn},Kd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ee:n;(Object.keys(Se.styles).length>0||F.autoFetchSvg)&&Je&&F.autoReplaceSvg&&_e.dom.i2svg({node:r})};function lr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return bn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Je){var r=ee.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Vd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Sa(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=ir(O(O({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function qd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(F.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function La(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,x=p===void 0?!1:p,E=r.found?r:n,I=E.width,T=E.height,g=a==="fak",C=[F.replacementClass,i?"".concat(F.familyPrefix,"-").concat(i):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),S={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(T)})},D=g&&!~m.classes.indexOf("fa-fw")?{width:"".concat(I/T*16*.0625,"em")}:{};x&&(S.attributes[Ct]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||gn())},children:[l]}),delete S.attributes.title);var z=O(O({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:O(O({},D),m.styles)}),j=r.found&&n.found?qe("generateAbstractMask",z)||{children:[],attributes:{}}:qe("generateAbstractIcon",z)||{children:[],attributes:{}},V=j.children,U=j.attributes;return z.children=V,z.attributes=U,s?qd(z):Vd(z)}function Yi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ct]="");var u=O({},o.styles);Sa(a)&&(u.transform=Ad({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=ir(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Xd(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ir(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Cr=Se.styles;function Zr(e){var t=e[0],n=e[1],r=e.slice(4),a=Ca(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(F.familyPrefix,"-").concat(xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(xt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(xt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Jd={found:!1,width:512,height:512};function Gd(e,t){!Ls&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Qr(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=ut()),new Promise(function(r,a){if(qe("missingIconAbstract"),n==="fa"){var i=qs(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Cr[t]&&Cr[t][e]){var o=Cr[t][e];return r(Zr(o))}Gd(e,t),r(O(O({},Jd),{},{icon:F.showMissingIcons&&e?qe("missingIconAbstract")||{}:{}}))})}var Ki=function(){},ea=F.measurePerformance&&An&&An.mark&&An.measure?An:{mark:Ki,measure:Ki},Zt='FA "6.1.1"',Zd=function(t){return ea.mark("".concat(Zt," ").concat(t," begins")),function(){return Js(t)}},Js=function(t){ea.mark("".concat(Zt," ").concat(t," ends")),ea.measure("".concat(Zt," ").concat(t),"".concat(Zt," ").concat(t," begins"),"".concat(Zt," ").concat(t," ends"))},Fa={begin:Zd,end:Js},In=function(){};function Vi(e){var t=e.getAttribute?e.getAttribute(Ct):null;return typeof t=="string"}function Qd(e){var t=e.getAttribute?e.getAttribute(Oa):null,n=e.getAttribute?e.getAttribute(Ea):null;return t&&n}function em(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function tm(){if(F.autoReplaceSvg===!0)return Nn.replace;var e=Nn[F.autoReplaceSvg];return e||Nn.replace}function nm(e){return ee.createElementNS("http://www.w3.org/2000/svg",e)}function rm(e){return ee.createElement(e)}function Gs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?nm:rm:n;if(typeof e=="string")return ee.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Gs(o,{ceFn:r}))}),a}function am(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Nn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Gs(a),n)}),n.getAttribute(Ct)===null&&F.keepOriginalSource){var r=ee.createComment(am(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Pa(n).indexOf(F.replacementClass))return Nn.replace(t);var a=new RegExp("".concat(F.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===F.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return bn(s)}).join(`
`);n.setAttribute(Ct,""),n.innerHTML=o}};function qi(e){e()}function Zs(e,t){var n=typeof t=="function"?t:In;if(e.length===0)n();else{var r=qi;F.mutateApproach===sd&&(r=ct.requestAnimationFrame||qi),r(function(){var a=tm(),i=Fa.begin("mutate");e.map(a),i(),n()})}}var Ra=!1;function Qs(){Ra=!0}function ta(){Ra=!1}var Bn=null;function Xi(e){if(!!$i&&!!F.observeMutations){var t=e.treeCallback,n=t===void 0?In:t,r=e.nodeCallback,a=r===void 0?In:r,i=e.pseudoElementsCallback,o=i===void 0?In:i,s=e.observeMutationsRoot,l=s===void 0?ee:s;Bn=new $i(function(f){if(!Ra){var u=ut();Yt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Vi(m.addedNodes[0])&&(F.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&F.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Vi(m.target)&&~pd.indexOf(m.attributeName))if(m.attributeName==="class"&&Qd(m.target)){var p=sr(Pa(m.target)),x=p.prefix,E=p.iconName;m.target.setAttribute(Oa,x||u),E&&m.target.setAttribute(Ea,E)}else em(m.target)&&a(m.target)})}}),Je&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function im(){!Bn||Bn.disconnect()}function om(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function sm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=sr(Pa(e));return a.prefix||(a.prefix=ut()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=jd(a.prefix,e.innerText)||Na(a.prefix,qr(e.innerText))),a}function lm(e){var t=Yt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||gn()):(t["aria-hidden"]="true",t.focusable="false")),t}function fm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=sm(e),r=n.iconName,a=n.prefix,i=n.rest,o=lm(e),s=Jr("parseNodeAttributes",{},e),l=t.styleParser?om(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var cm=Se.styles;function el(e){var t=F.autoReplaceSvg==="nest"?Ji(e,{styleParser:!1}):Ji(e);return~t.extra.classes.indexOf(Rs)?qe("generateLayersText",e,t):qe("generateSvgReplacementMutation",e,t)}function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Je)return Promise.resolve();var n=ee.documentElement.classList,r=function(m){return n.add("".concat(zi,"-").concat(m))},a=function(m){return n.remove("".concat(zi,"-").concat(m))},i=F.autoFetchSvg?Object.keys(Ta):Object.keys(cm),o=[".".concat(Rs,":not([").concat(Ct,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Yt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Fa.begin("onTree"),f=s.reduce(function(u,m){try{var p=el(m);p&&u.push(p)}catch(x){Ls||x.name==="MissingIcon"&&console.error(x)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){Zs(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function um(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;el(e).then(function(n){n&&Zs([n],t)})}function dm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Gr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Gr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var mm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Re:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,x=n.titleId,E=x===void 0?null:x,I=n.classes,T=I===void 0?[]:I,g=n.attributes,C=g===void 0?{}:g,S=n.styles,D=S===void 0?{}:S;if(!!t){var z=t.prefix,j=t.iconName,V=t.icon;return lr(O({type:"icon"},t),function(){return At("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(p?C["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(E||gn()):(C["aria-hidden"]="true",C.focusable="false")),La({icons:{main:Zr(V),mask:l?Zr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:j,transform:O(O({},Re),a),symbol:o,title:p,maskId:u,titleId:E,extra:{attributes:C,styles:D,classes:T}})})}},pm={mixout:function(){return{icon:dm(mm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Gi,n.nodeCallback=um,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ee:r,i=n.callback,o=i===void 0?function(){}:i;return Gi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(x,E){Promise.all([Qr(a,s),u.iconName?Qr(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var T=Ca(I,2),g=T[0],C=T[1];x([n,La({icons:{main:g,mask:C},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(E)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ir(s);l.length>0&&(a.style=l);var f;return Sa(o)&&(f=qe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},hm={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return lr({type:"layer"},function(){At("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(F.familyPrefix,"-layers")].concat(ar(i)).join(" ")},children:o}]})}}}},gm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return lr({type:"counter",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),Xd({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(F.familyPrefix,"-layers-counter")].concat(ar(s))}})})}}}},vm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Re:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,x=p===void 0?{}:p;return lr({type:"text",content:n},function(){return At("beforeDOMElementCreation",{content:n,params:r}),Yi({content:n,transform:O(O({},Re),i),title:s,extra:{attributes:m,styles:x,classes:["".concat(F.familyPrefix,"-layers-text")].concat(ar(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Is){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return F.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},bm=new RegExp('"',"ug"),Zi=[1105920,1112319];function ym(e){var t=e.replace(bm,""),n=Nd(t,0),r=n>=Zi[0]&&n<=Zi[1],a=t.length===2?t[0]===t[1]:!1;return{value:qr(a?t[0]:t),isSecondary:r||a}}function Qi(e,t){var n="".concat(od).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Yt(e.children),o=i.filter(function(j){return j.getAttribute(Vr)===t})[0],s=ct.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ud),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Un[l[2].toLowerCase()]:dd[f],x=ym(m),E=x.value,I=x.isSecondary,T=l[0].startsWith("FontAwesome"),g=Na(p,E),C=g;if(T){var S=$d(E);S.iconName&&S.prefix&&(g=S.iconName,p=S.prefix)}if(g&&!I&&(!o||o.getAttribute(Oa)!==p||o.getAttribute(Ea)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var D=fm(),z=D.extra;z.attributes[Vr]=t,Qr(g,p).then(function(j){var V=La(O(O({},D),{},{icons:{main:j,mask:Ma()},prefix:p,iconName:C,extra:z,watchable:!0})),U=ee.createElement("svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=V.map(function(W){return bn(W)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function xm(e){return Promise.all([Qi(e,"::before"),Qi(e,"::after")])}function _m(e){return e.parentNode!==document.head&&!~ld.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Vr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function eo(e){if(!!Je)return new Promise(function(t,n){var r=Yt(e.querySelectorAll("*")).filter(_m).map(xm),a=Fa.begin("searchPseudoElements");Qs(),Promise.all(r).then(function(){a(),ta(),t()}).catch(function(){a(),ta(),n()})})}var wm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=eo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ee:r;F.searchPseudoElements&&eo(a)}}},to=!1,km={mixout:function(){return{dom:{unwatch:function(){Qs(),to=!0}}}},hooks:function(){return{bootstrap:function(){Xi(Jr("mutationObserverCallbacks",{}))},noAuto:function(){im()},watch:function(n){var r=n.observeMutationsRoot;to?ta():Xi(Jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},no=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Cm={mixout:function(){return{parse:{transform:function(n){return no(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=no(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},x={outer:s,inner:m,path:p};return{tag:"g",attributes:O({},x.outer),children:[{tag:"g",attributes:O({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),x.path)}]}]}}}},Ar={x:0,y:0,width:"100%",height:"100%"};function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Am(e){return e.tag==="g"?e.children:[e]}var Om={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?sr(a.split(" ").map(function(o){return o.trim()})):Ma();return i.prefix||(i.prefix=ut()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,p=o.icon,x=Cd({transform:l,containerWidth:m,iconWidth:f}),E={tag:"rect",attributes:O(O({},Ar),{},{fill:"white"})},I=u.children?{children:u.children.map(ro)}:{},T={tag:"g",attributes:O({},x.inner),children:[ro(O({tag:u.tag,attributes:O(O({},u.attributes),x.path)},I))]},g={tag:"g",attributes:O({},x.outer),children:[T]},C="mask-".concat(s||gn()),S="clip-".concat(s||gn()),D={tag:"mask",attributes:O(O({},Ar),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[E,g]},z={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Am(p)},D]};return r.push(z,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(C,")")},Ar)}),{children:r,attributes:a}}}},Em={provides:function(t){var n=!1;ct.matchMedia&&(n=ct.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Tm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Pm=[Ed,pm,hm,gm,vm,wm,km,Cm,Om,Em,Tm];Hd(Pm,{mixoutsTo:_e});_e.noAuto;var tl=_e.config,Sm=_e.library;_e.dom;var nl=_e.parse;_e.findIconDefinition;_e.toHtml;var Im=_e.icon;_e.layer;var Nm=_e.text;_e.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Mm={prefix:"fas",iconName:"check",icon:[448,512,[10004,10003],"f00c","M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"]},Lm={prefix:"fas",iconName:"x",icon:[384,512,[120],"58","M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"]},Fm=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rm(e,t){return t={exports:{}},e(t,t.exports),t.exports}var Dm=Rm(function(e){(function(t){var n=function(g,C,S){if(!f(C)||m(C)||p(C)||x(C)||l(C))return C;var D,z=0,j=0;if(u(C))for(D=[],j=C.length;z<j;z++)D.push(n(g,C[z],S));else{D={};for(var V in C)Object.prototype.hasOwnProperty.call(C,V)&&(D[g(V,S)]=n(g,C[V],S))}return D},r=function(g,C){C=C||{};var S=C.separator||"_",D=C.split||/(?=[A-Z])/;return g.split(D).join(S)},a=function(g){return E(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(C,S){return S?S.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var C=a(g);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(g,C){return r(g,C).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},f=function(g){return g===Object(g)},u=function(g){return s.call(g)=="[object Array]"},m=function(g){return s.call(g)=="[object Date]"},p=function(g){return s.call(g)=="[object RegExp]"},x=function(g){return s.call(g)=="[object Boolean]"},E=function(g){return g=g-0,g===g},I=function(g,C){var S=C&&"process"in C?C.process:C;return typeof S!="function"?g:function(D,z){return S(D,g,z)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,C){return n(I(a,C),g)},decamelizeKeys:function(g,C){return n(I(o,C),g,C)},pascalizeKeys:function(g,C){return n(I(i,C),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(Fm)}),jm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Qt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Wn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$m=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},na=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function zm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Dm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Um(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Da(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=Um(u);break;case"style":l.style=zm(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=$m(n,["class","style"]);return ls(e.tag,Wn({},t,{class:a.class,style:Wn({},a.style,o)},a.attrs,s),r)}var rl=!1;try{rl=!0}catch{}function Hm(){if(!rl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function on(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Qt({},e,t):{}}function Bm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Qt(t,"fa-"+e.size,e.size!==null),Qt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Qt(t,"fa-pull-"+e.pull,e.pull!==null),Qt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ao(e){if(e===null)return null;if((typeof e>"u"?"undefined":jm(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Wm=dt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=me(function(){return ao(t.icon)}),i=me(function(){return on("classes",Bm(t))}),o=me(function(){return on("transform",typeof t.transform=="string"?nl.transform(t.transform):t.transform)}),s=me(function(){return on("mask",ao(t.mask))}),l=me(function(){return Im(a.value,Wn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});wt(l,function(u){if(!u)return Hm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=me(function(){return l.value?Da(l.value.abstract[0],{},r):null});return function(){return f.value}}});dt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=tl.familyPrefix,i=me(function(){return[a+"-layers"].concat(na(t.fixedWidth?[a+"-fw"]:[]))});return function(){return ls("div",{class:i.value},r.default?r.default():[])}}});dt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=tl.familyPrefix,i=me(function(){return on("classes",[].concat(na(t.counter?[a+"-layers-counter"]:[]),na(t.position?[a+"-layers-"+t.position]:[])))}),o=me(function(){return on("transform",typeof t.transform=="string"?nl.transform(t.transform):t.transform)}),s=me(function(){var f=Nm(t.value.toString(),Wn({},o.value,i.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=me(function(){return Da(s.value,{},r)});return function(){return l.value}}});Sm.add(Mm,Lm);Uc(Xu).component("font-awesome-icon",Wm).mount("#app");
