/*! For license information please see nidoca-webcomponents.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{N2:()=>Yi,rl:()=>Dt,vK:()=>le,k1:()=>re,Nv:()=>no,Ot:()=>ho,ST:()=>Po,m7:()=>Ue,Q0:()=>ei,TI:()=>ai,el:()=>ot,Z_:()=>it});const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const o=this.t;if(e&&void 0===t){const e=void 0!==o&&1===o.length;e&&(t=i.get(o)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(o,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new n(i,t,o)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t;var s;const l=window.trustedTypes,c=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},h=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{e?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=f){var i,n;const r=this.constructor._$Ep(t,o);if(void 0!==r&&!0===o.reflect){const a=(null!==(n=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:p.toAttribute)(e,o.type);this._$El=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(t,e){var o,i;const n=this.constructor,r=n._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=n.getPropertyOptions(r),a=t.converter,s=null!==(i=null!==(o=null==a?void 0:a.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==i?i:p.fromAttribute;this._$El=r,this[r]=s(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var m;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:u}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.3.3");const y=globalThis.trustedTypes,g=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,v="?"+b,x=`<${v}>`,w=document,$=(t="")=>w.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,k=t=>{var e;return R(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,E=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,T=/"/g,C=/^(?:script|style|textarea|title)$/i,A=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),I=A(1),D=(A(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),B=new WeakMap,z=w.createTreeWalker(w,129,null,!1),N=(t,e)=>{const o=t.length-1,i=[];let n,r=2===e?"<svg>":"",a=O;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===O?"!--"===l[1]?a=j:void 0!==l[1]?a=E:void 0!==l[2]?(C.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=P):void 0!==l[3]&&(a=P):a===P?">"===l[0]?(a=null!=n?n:O,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?P:'"'===l[3]?T:_):a===T||a===_?a=P:a===j||a===E?a=O:(a=P,n=void 0);const p=a===P&&t[e+1].startsWith("/>")?" ":"";r+=a===O?o+x:c>=0?(i.push(s),o.slice(0,c)+"$lit$"+o.slice(c)+b+p):o+b+(-2===c?(i.push(void 0),e):p)}const s=r+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(s):s,i]};class M{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[l,c]=N(t,e);if(this.el=M.createElement(l,o),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=z.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const o=c[r++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?X:"@"===e[1]?Y:G})}else s.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(C.test(i.tagName)){const t=i.textContent.split(b),e=t.length-1;if(e>0){i.textContent=y?y.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],$()),z.nextNode(),s.push({type:2,index:++n});i.append(t[e],$())}}}else if(8===i.nodeType)if(i.data===v)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(b,t+1));)s.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,e){const o=w.createElement("template");return o.innerHTML=t,o}}function U(t,e,o=t,i){var n,r,a,s;if(e===D)return e;let l=void 0!==i?null===(n=o._$Cl)||void 0===n?void 0:n[i]:o._$Cu;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,i)),void 0!==i?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(e=U(t,l._$AS(t,e.values),l,i)),e}class H{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(o,!0);z.currentNode=n;let r=z.nextNode(),a=0,s=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new q(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new V(r,this,t)),this.v.push(e),l=i[++s]}a!==(null==l?void 0:l.index)&&(r=z.nextNode(),a++)}return n}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class q{constructor(t,e,o,i){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),S(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):k(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==L&&S(this._$AH)?this._$AA.nextSibling.data=t:this.k(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=M.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(o);else{const t=new H(n,this),e=t.p(this.options);t.m(o),this.k(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new M(t)),e}S(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new q(this.M($()),this.M($()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,o,i,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const n=this.strings;let r=!1;if(void 0===n)t=U(this,t,e,0),r=!S(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const i=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=U(this,i[o+a],e,a),s===D&&(s=this._$AH[a]),r||(r=!S(s)||s!==this._$AH[a]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.C(t)}C(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends G{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===L?void 0:t}}const F=y?y.emptyScript:"";class X extends G{constructor(){super(...arguments),this.type=4}C(t){t&&t!==L?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class Y extends G{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=U(this,t,e,0))&&void 0!==o?o:L)===D)return;const i=this._$AH,n=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==L&&(i===L||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const K={L:"$lit$",P:b,V:v,I:1,N,R:H,j:k,D:U,H:q,F:G,O:X,W:Y,B:W,Z:V},J=window.litHtmlPolyfillSupport;var Z,Q;null==J||J(M,q),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.2.6");class tt extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new q(e.insertBefore($(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return D}}tt.finalized=!0,tt._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;var ot;null==et||et({LitElement:tt}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.1"),function(t){t.primary="primary",t.secondary="secondary",t.surface="surface",t.plain="plain"}(ot||(ot={}));class it{static getStyle(t){return t?t==ot.plain?I``:I` <style>
            :host,
            *,
            ::slotted(*) {
              color: var(--app-color-${t});
              background-color: var(--app-color-${t}-background);
              border-color: var(--app-color-${t}-border);
            }

            ::slotted(.h2),
            .h2 {
              color: #3f6796;
            }
          </style>`:I``}static getOposite(t){return t==ot.plain?ot.surface:t==ot.primary||t==ot.primary?ot.secondary:t==ot.secondary?ot.primary:ot.plain}getParentTheme(t){let e=t;for(;null!=e;){if(null!=e.theme)return e.theme;e=e.parentElement}}}const nt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function at(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):rt(t,e)}function st(t,e){return(({finisher:t,descriptor:e})=>(o,i)=>{var n;if(void 0===i){const i=null!==(n=o.originalKey)&&void 0!==n?n:o.key,r=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return null!=t&&(r.finisher=function(e){t(e,i)}),r}{const n=o.constructor;void 0!==e&&Object.defineProperty(o,i,e(i)),null==t||t(n,i)}})({descriptor:o=>{const i={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;i.get=function(){var o,i;return void 0===this[e]&&(this[e]=null!==(i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}var lt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;var ct=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},dt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let pt=class extends tt{constructor(){super(...arguments),this.theme=ot.surface,this.header="",this.opened=!1}render(){return I`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?I` <slot></slot>`:I``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};pt.styles=r`
    :host {
      border-left-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
    }

    .header {
      height: var(--height-medium);
      box-sizing: border-box;
      padding-left: var(--space-2);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      cursor: pointer;
    }
  `,ct([at({type:ot,converter:String}),dt("design:type",String)],pt.prototype,"theme",void 0),ct([at({type:String}),dt("design:type",String)],pt.prototype,"header",void 0),ct([at({type:Boolean}),dt("design:type",Boolean)],pt.prototype,"opened",void 0),pt=ct([nt("nidoca-accordion-item")],pt);var ht,ft=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ut=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.single="single",t.multi="multi"}(ht||(ht={}));let mt=class extends tt{constructor(){super(...arguments),this.theme=ot.plain,this.accordionType=ht.single}updated(t){super.updated(t),t.forEach(((t,e)=>{if("theme"==e&&null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let e=0;e<t.length;e++){const o=t[e];o instanceof pt&&(o.theme=this.theme)}}}))}render(){return I`
      ${it.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case ht.single:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof pt&&i!=e&&(i.opened=!1)}}case ht.multi:}t.stopPropagation()}static example(t=""){return I`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${Yi.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${Yi.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${Yi.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${Yi.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};mt.styles=r`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,ft([at({type:ot,converter:String}),ut("design:type",String)],mt.prototype,"theme",void 0),ft([at({type:ht,converter:String}),ut("design:type",String)],mt.prototype,"accordionType",void 0),ft([st("#accordionSlot"),ut("design:type",Object)],mt.prototype,"accordionSlot",void 0),mt=ft([nt("nidoca-accordion")],mt);var yt,gt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},bt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.current=0]="current",t[t.completed=1]="completed",t[t.open=2]="open",t[t.finish=3]="finish"}(yt||(yt={}));let vt=class extends tt{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return I`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${no.NONE}"
            .withIconSpace="${!1}"
            .round="${!0}"
            .clickable="${!0}"
            .deactivated="${!1}"
            color="${this.determineColor(this.state)}"
            backgroundColor="${this.determineBackgroundColor(this.state)}"
            size="24"
            @nidoca-event-icon-clicked="${()=>this.stepClicked()}"
            sizeUnit="px"
          >
          </nidoca-icon>

          ${this.isLast?I``:I`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==yt.completed?"var(--app-color-text-primary)":t==yt.current?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==yt.finish?"var(--app-color-success)":t==yt.completed?"var(--mdc-theme-on-primary)":t==yt.current?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};vt.styles=r`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space);
    }

    .wizard-step-connector.selected {
      padding: var(--space);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-text-color-primary);
    }
  `,gt([at({type:String}),bt("design:type",String)],vt.prototype,"icon",void 0),gt([at({type:String}),bt("design:type",String)],vt.prototype,"primaryText",void 0),gt([at({type:Number}),bt("design:type",Object)],vt.prototype,"state",void 0),gt([at({type:Boolean}),bt("design:type",Boolean)],vt.prototype,"isLast",void 0),vt=gt([nt("nidoca-wizard-step")],vt);var xt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let wt=class extends tt{render(){return I`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let i=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof vt&&(e.index=t,e.state==yt.current&&(i=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(i)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof vt&&void 0!==i.index&&(i.index<t?i.state=yt.completed:i.index==t?i.state=yt.current:i.state=yt.open)}}}};wt.styles=r``,xt([st("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],wt.prototype,"wizardSlot",void 0),wt=xt([nt("nidoca-wizard")],wt);var $t=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},St=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Rt=class extends tt{constructor(){super(...arguments),this.clickable=!0,this.theme=ot.surface,this.text=""}render(){return I`
      <style>
        .chip:hover {
          background-color: var(--app-color-${this.theme}-background-dark);
        }
        .chip {
          background-color: var(--app-color-${this.theme}-background-light);
        }
      </style>
      <div class="chip ${this.clickable?"clickable":""}">
        <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>
        <slot></slot>
      </div>
    `}static example(t=""){return I`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};Rt.styles=r`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }

    .clickable {
      cursor: pointer;
    }
  `,$t([at({type:Boolean}),St("design:type",Boolean)],Rt.prototype,"clickable",void 0),$t([at({type:ot,converter:String}),St("design:type",String)],Rt.prototype,"theme",void 0),$t([at({type:String}),St("design:type",String)],Rt.prototype,"text",void 0),Rt=$t([nt("nidoca-chip")],Rt);var kt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ot=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let jt=class extends tt{constructor(){super(...arguments),this.code="",this.theme=ot.plain}render(){return I`
      <style>
        code {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border: solid 1px var(--app-color-${this.theme}-border);
        }
      </style>
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}static example(t=""){return I`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};jt.styles=r`
    :host {
      display: block;
    }
    pre {
      margin: 0;
      padding: 0;
      white-space: unset;
    }

    pre code {
      white-space: pre-line;
      display: block;
      line-height: var(--height-min);
      padding: 1em 1.5em;
      overflow-x: auto;
    }

    code {
      border-radius: 0.375em;
      font-family: 'Courier New', monospace;
      font-size: 0.85em;
      position: relative;
    }

    .icon-position {
      position: absolute;
      top: -24px;
      right: 0;
      opacity: 0.2;
    }
  `,kt([at({type:String}),Ot("design:type",String)],jt.prototype,"code",void 0),kt([at({type:String}),Ot("design:type",String)],jt.prototype,"theme",void 0),jt=kt([nt("nidoca-code")],jt);var Et=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _t=class extends tt{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const o=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?I`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:I``}calculatePositionStyle(t){let e="";if(t){const o=t.getBoundingClientRect();o.right>window.innerWidth/2?e+=`right:${window.innerWidth-o.right}px;`:e+=`left:${o.left}px;`,o.top>window.innerHeight/2?e+=`bottom:${o.height+window.innerHeight-o.top}px;`:e+=`top:${o.bottom}px;`}return e}};_t.styles=r`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Et([at({type:Boolean}),Pt("design:type",Boolean)],_t.prototype,"show",void 0),Et([at({type:Object}),Pt("design:type",Object)],_t.prototype,"associatedElement",void 0),_t=Et([nt("nidoca-elevation"),Pt("design:paramtypes",[])],_t);var Tt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ct=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class At{}At.PROGRESS="PROGRESS",At.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let It=class extends tt{constructor(){super(...arguments),this.progressType=At.PROGRESS}render(){return I` <style>
        :host {
          width: 100%;
          display: block;
        }

        .PROGRESS {
          color: var(--app-color-${this.theme}-background);
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border: none;
          height: 0.25em;
          background-color: #dddddd;
          font-size: 16px;
          width: 100%;
        }

        .PROGRESS::-webkit-progress-bar {
          background-color: transparent;
        }

        /* Determinate */
        .PROGRESS::-webkit-progress-value {
          background-color: currentColor;
          transition: all 0.2s;
        }

        .PROGRESS::-moz-progress-bar {
          background-color: currentColor;
          transition: all 0.2s;
        }

        .PROGRESS::-ms-fill {
          border: none;
          background-color: currentColor;
          transition: all 0.2s;
        }

        /* Indeterminate */
        .PROGRESS:indeterminate {
          background-size: 200% 100%;
          background-image: linear-gradient(
            to right,
            transparent 50%,
            currentColor 50%,
            currentColor 60%,
            transparent 60%,
            transparent 71.5%,
            currentColor 71.5%,
            currentColor 84%,
            transparent 84%
          );
          animation: progresslinear 2s infinite linear;
        }

        .PROGRESS:indeterminate::-moz-progress-bar {
          background-color: transparent;
        }

        .PROGRESS:indeterminate::-ms-fill {
          animation-name: none;
        }

        @keyframes progresslinear {
          0% {
            background-size: 200% 100%;
            background-position: left -31.25% top 0%;
          }
          50% {
            background-size: 800% 100%;
            background-position: left -49% top 0%;
          }
          100% {
            background-size: 400% 100%;
            background-position: left -102% top 0%;
          }
        }

        .PROGRESS_CIRCULAR {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          box-sizing: border-box;
          border: none;
          border-radius: 50%;
          padding: 0.25em;
          width: 3em;
          height: 3em;
          color: var(--app-color-${this.theme}-background);
          background-color: transparent;
          font-size: 16px;
          overflow: hidden;
          margin-top: 30px;
        }

        .PROGRESS_CIRCULAR::-webkit-progress-bar {
          background-color: transparent;
        }

        /* Indeterminate */
        .PROGRESS_CIRCULAR:indeterminate {
          mask-image: linear-gradient(transparent 50%, black 50%), linear-gradient(to right, transparent 50%, black 50%);
          animation: progress-circular 6s infinite cubic-bezier(0.3, 0.6, 1, 1);
        }

        :-ms-lang(x),
        .PROGRESS_CIRCULAR:indeterminate {
          animation: none;
        }

        .PROGRESS_CIRCULAR:indeterminate::before,
        .PROGRESS_CIRCULAR:indeterminate::-webkit-progress-value {
          content: '';
          display: block;
          box-sizing: border-box;
          margin-bottom: 0.25em;
          border: solid 0.25em transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          width: 100% !important;
          height: 100%;
          background-color: transparent;
          animation: progress-circular-pseudo 0.75s infinite linear alternate;
        }

        .PROGRESS_CIRCULAR:indeterminate::-moz-progress-bar {
          box-sizing: border-box;
          border: solid 0.25em transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background-color: transparent;
          animation: progress-circular-pseudo 0.75s infinite linear alternate;
        }

        .PROGRESS_CIRCULAR:indeterminate::-ms-fill {
          animation-name: -ms-ring;
        }

        @keyframes progress-circular {
          0% {
            transform: rotate(0deg);
          }
          12.5% {
            transform: rotate(180deg);
            animation-timing-function: linear;
          }
          25% {
            transform: rotate(630deg);
          }
          37.5% {
            transform: rotate(810deg);
            animation-timing-function: linear;
          }
          50% {
            transform: rotate(1260deg);
          }
          62.5% {
            transform: rotate(1440deg);
            animation-timing-function: linear;
          }
          75% {
            transform: rotate(1890deg);
          }
          87.5% {
            transform: rotate(2070deg);
            animation-timing-function: linear;
          }
          100% {
            transform: rotate(2520deg);
          }
        }

        @keyframes progress-circular-pseudo {
          0% {
            transform: rotate(-30deg);
          }
          29.4% {
            border-left-color: transparent;
          }
          29.41% {
            border-left-color: currentColor;
          }
          64.7% {
            border-bottom-color: transparent;
          }
          64.71% {
            border-bottom-color: currentColor;
          }
          100% {
            border-left-color: currentColor;
            border-bottom-color: currentColor;
            transform: rotate(225deg);
          }
        }
      </style>

      <progress class="${this.progressType}"></progress>`}};It.styles=r``,Tt([at({type:ot,converter:String}),Ct("design:type",Object)],It.prototype,"theme",void 0),Tt([at({type:At,converter:String}),Ct("design:type",String)],It.prototype,"progressType",void 0),It=Tt([nt("nidoca-progress")],It);var Dt,Lt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Bt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.contained="contained",t.outlined="outlined",t.text="text"}(Dt||(Dt={}));let zt=class extends tt{constructor(){super(...arguments),this.theme=ot.primary,this.buttonType=Dt.contained,this.leadingIcon="",this.text=""}render(){return I`
      <style>
        .outlined {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-text-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .contained {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .text {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${()=>{this.clicked()}}"
      >
        ${this.leadingIcon?I` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:I``}

        <nidoca-text-button theme="${this.theme}"
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return I`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};zt.styles=r`
    :host,
    .fullWidth {
      display: block;
      width: 100%;
    }

    .container {
      cursor: pointer;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      border-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `,Lt([at({type:ot,converter:String}),Bt("design:type",String)],zt.prototype,"theme",void 0),Lt([at({type:Dt,converter:String}),Bt("design:type",String)],zt.prototype,"buttonType",void 0),Lt([at({type:String}),Bt("design:type",String)],zt.prototype,"leadingIcon",void 0),Lt([at({type:String}),Bt("design:type",String)],zt.prototype,"text",void 0),zt=Lt([nt("nidoca-button")],zt);class Nt extends tt{}var Mt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ut=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ht=class extends tt{constructor(){super(...arguments),this.autocomplete=!0}render(){return I`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const i=o.getOutputData();e[i.key]=i.value,t.append(i.key,i.value)}const o={};return o.jsonObject=e,o.formData=t,o}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const i=o[t];this.recursiveInputElementSearch(i,e)}return e}recursiveInputElementSearch(t,e){if(t instanceof Nt)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};Ht.styles=r`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,Mt([at({type:Boolean}),Ut("design:type",Boolean)],Ht.prototype,"autocomplete",void 0),Mt([st("#slotElement"),Ut("design:type",Object)],Ht.prototype,"slotElement",void 0),Ht=Mt([nt("nidoca-form")],Ht);const qt=t=>(...e)=>({_$litDirective$:t,values:e});class Gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:Wt}=K,Ft=()=>document.createComment(""),Xt=(t,e,o)=>{var i;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=n.insertBefore(Ft(),r),i=n.insertBefore(Ft(),r);o=new Wt(e,i,t,t.options)}else{const e=o._$AB.nextSibling,a=o._$AM,s=a!==t;if(s){let e;null===(i=o._$AQ)||void 0===i||i.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==a._$AU&&o._$AP(e)}if(e!==r||s){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return o},Yt=(t,e,o=t)=>(t._$AI(e,o),t),Vt={},Kt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const i=t._$AB.nextSibling;for(;o!==i;){const t=o.nextSibling;o.remove(),o=t}},Jt=(t,e,o)=>{const i=new Map;for(let n=e;n<=o;n++)i.set(t[n],n);return i},Zt=qt(class extends Gt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let i;void 0===o?o=e:void 0!==e&&(i=e);const n=[],r=[];let a=0;for(const e of t)n[a]=i?i(e,a):a,r[a]=o(e,a),a++;return{values:r,keys:n}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,i]){var n;const r=t._$AH,{values:a,keys:s}=this.dt(e,o,i);if(!Array.isArray(r))return this.ut=s,a;const l=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],c=[];let d,p,h=0,f=r.length-1,u=0,m=a.length-1;for(;h<=f&&u<=m;)if(null===r[h])h++;else if(null===r[f])f--;else if(l[h]===s[u])c[u]=Yt(r[h],a[u]),h++,u++;else if(l[f]===s[m])c[m]=Yt(r[f],a[m]),f--,m--;else if(l[h]===s[m])c[m]=Yt(r[h],a[m]),Xt(t,c[m+1],r[h]),h++,m--;else if(l[f]===s[u])c[u]=Yt(r[f],a[u]),Xt(t,r[h],r[f]),f--,u++;else if(void 0===d&&(d=Jt(s,u,m),p=Jt(l,h,f)),d.has(l[h]))if(d.has(l[f])){const e=p.get(s[u]),o=void 0!==e?r[e]:null;if(null===o){const e=Xt(t,r[h]);Yt(e,a[u]),c[u]=e}else c[u]=Yt(o,a[u]),Xt(t,r[h],o),r[e]=null;u++}else Kt(r[f]),f--;else Kt(r[h]),h++;for(;u<=m;){const e=Xt(t,c[m+1]);Yt(e,a[u]),c[u++]=e}for(;h<=f;){const t=r[h++];null!==t&&Kt(t)}return this.ut=s,((t,e=Vt)=>{t._$AH=e})(t,c),D}}),Qt={},te=qt(class extends Gt{constructor(){super(...arguments),this.nt=Qt}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return D}else if(this.nt===e)return D;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});var ee=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},oe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ie=class extends Nt{constructor(){super(...arguments),this.theme=ot.surface,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return I` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: brightness(var(--app-darken-1));
        }

        option {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer">
        ${this.trailingIcon?I` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:I``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${te([this.value,this.options],(()=>I`
                ${Zt(this.options,(t=>null==t?I` <option></option>`:this.isSelectedOption(t)?I` <option value="${t.key}" selected>${t.value}</option> `:I` <option value="${t.key}">${t.value}</option> `))}
              `))}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?I`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?I` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:I``}
              ${this.warningText?I` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:I``}
              ${this.errorText?I` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:I``}
            </div>
          `:I``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}static stringArrayToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),t.forEach((t=>{o.push({key:t,value:t})})),o}static toComboboxOptions(t=null,e=null){if(null==t)return[];const o=[];return Object.values(t).forEach((i=>{let n=String(Object.keys(t)[Object.values(t).indexOf(i)]);e&&(n=n.concat(e)),o.push({key:i,value:n})})),o}};ie.styles=r`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    option {
      padding: 0;
    }

    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--height-min);
      line-height: var(--height-min);
    }

    select[multiple] {
      line-height: unset;
      height: auto;
    }

    select:focus {
      outline: none;
      box-shadow: none;
    }

    select:valid {
      outline: none;
      box-shadow: none;
    }
  `,ee([at({type:ot,converter:String}),oe("design:type",String)],ie.prototype,"theme",void 0),ee([at({type:String}),oe("design:type",String)],ie.prototype,"trailingIcon",void 0),ee([at({type:String}),oe("design:type",String)],ie.prototype,"label",void 0),ee([at({type:String}),oe("design:type",String)],ie.prototype,"errorText",void 0),ee([at({type:String}),oe("design:type",String)],ie.prototype,"infoText",void 0),ee([at({type:String}),oe("design:type",String)],ie.prototype,"warningText",void 0),ee([at(),oe("design:type",Object)],ie.prototype,"value",void 0),ee([at({type:Array}),oe("design:type",Array)],ie.prototype,"options",void 0),ee([at({type:String}),oe("design:type",String)],ie.prototype,"name",void 0),ee([at({type:Boolean}),oe("design:type",Boolean)],ie.prototype,"required",void 0),ee([at({type:Boolean}),oe("design:type",Boolean)],ie.prototype,"multiple",void 0),ee([at({type:Number}),oe("design:type",Number)],ie.prototype,"size",void 0),ee([st("#selectElement"),oe("design:type",Object)],ie.prototype,"selectElement",void 0),ie=ee([nt("nidoca-form-combobox")],ie);const ne=t=>null!=t?t:L;var re,ae=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},se=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.color="color",t.email="email",t.hidden="hidden",t.number="number",t.password="password",t.tel="tel",t.text="text",t.search="search",t.url="url",t.date="date",t.month="month",t.time="time",t.week="week"}(re||(re={}));let le=class extends Nt{constructor(){super(...arguments),this.type=re.text,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=ot.surface}render(){return this.type==re.hidden?I`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:I` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-text-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }

            .parentContainer,
            ::slotted(.parentContainer) {
              border-color: var(--app-color-${this.theme}-border);
            }

            .parentContainer:focus-within,
            ::slotted(.parentContainer:focus-within) {
              border-color: var(--app-color-${this.theme}-border);
              background-color: var(--app-color-${this.theme}-selected);
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon?I` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:I``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${ne(this.size)}"
                minlength="${ne(this.minlength)}"
                maxlength="${ne(this.maxlength)}"
                pattern="${ne(this.pattern)}"
                min="${ne(this.min)}"
                max="${ne(this.max)}"
                step="${ne(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?I`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?I` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:I``}
                  ${this.warningText?I` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:I``}
                  ${this.errorText?I` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:I``}
                </div>
              `:I``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:null==e?void 0:e.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};le.styles=r`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      padding: var(--space);
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      background: inherit;
      color: inherit;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    input:focus::placeholder {
      color: transparent;
    }
  `,ae([at({type:re,converter:String}),se("design:type",String)],le.prototype,"type",void 0),ae([at({type:String}),se("design:type",String)],le.prototype,"label",void 0),ae([at({type:String}),se("design:type",String)],le.prototype,"placeholder",void 0),ae([at({type:String}),se("design:type",String)],le.prototype,"trailingIcon",void 0),ae([at({type:String}),se("design:type",String)],le.prototype,"errorText",void 0),ae([at({type:String}),se("design:type",String)],le.prototype,"infoText",void 0),ae([at({type:String}),se("design:type",String)],le.prototype,"warningText",void 0),ae([at({type:String}),se("design:type",String)],le.prototype,"name",void 0),ae([at(),se("design:type",String)],le.prototype,"value",void 0),ae([at({type:Boolean}),se("design:type",Boolean)],le.prototype,"required",void 0),ae([at({type:Boolean}),se("design:type",Boolean)],le.prototype,"disabled",void 0),ae([at({type:Boolean}),se("design:type",Boolean)],le.prototype,"checked",void 0),ae([at({type:Number}),se("design:type",Object)],le.prototype,"maxlength",void 0),ae([at({type:Number}),se("design:type",Object)],le.prototype,"minlength",void 0),ae([at({type:Number}),se("design:type",Object)],le.prototype,"min",void 0),ae([at({type:Number}),se("design:type",Object)],le.prototype,"max",void 0),ae([at({type:String}),se("design:type",Object)],le.prototype,"step",void 0),ae([at({type:Number}),se("design:type",Object)],le.prototype,"size",void 0),ae([at({type:String}),se("design:type",Object)],le.prototype,"pattern",void 0),ae([st("#inputElement"),se("design:type",Object)],le.prototype,"inputElement",void 0),ae([at({type:ot,converter:String}),se("design:type",String)],le.prototype,"theme",void 0),le=ae([nt("nidoca-form-text")],le);let ce=class extends le{constructor(){super(),this.type=re.date}};ce=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-form-date"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],ce);var de=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},pe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let he=class extends Nt{constructor(){super(...arguments),this.theme=ot.surface,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return I` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .parentContainer,
        ::slotted(.parentContainer) {
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="parentContainer">
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>

          <textarea
            id="inputElement"
            name="${this.name}"
            placeholder="${this.placeholder}"
            rows="${this.rows}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
          >
${this.value}</textarea
          >
        </div>
      </div>

      ${this.infoText||this.warningText||this.errorText?I`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?I` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:I``}
              ${this.warningText?I` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:I``}
              ${this.errorText?I` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:I``}
            </div>
          `:I``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};he.styles=r`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    textarea {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      line-height: var(--height-min);
    }
    textarea:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    textarea:focus::placeholder {
      color: transparent;
    }
  `,de([at({type:ot,converter:String}),pe("design:type",String)],he.prototype,"theme",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"infoText",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"warningText",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"errorText",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"name",void 0),de([at(),pe("design:type",String)],he.prototype,"value",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"label",void 0),de([at({type:Boolean}),pe("design:type",Boolean)],he.prototype,"required",void 0),de([at({type:String}),pe("design:type",String)],he.prototype,"placeholder",void 0),de([at({type:Boolean}),pe("design:type",Boolean)],he.prototype,"disabled",void 0),de([at({type:Number}),pe("design:type",Number)],he.prototype,"rows",void 0),de([st("#inputElement"),pe("design:type",Object)],he.prototype,"inputElement",void 0),he=de([nt("nidoca-form-textarea")],he);var fe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ue=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let me=class extends Nt{constructor(){super(...arguments),this.theme=ot.primary}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return I`
      <nidoca-box theme="${ne(this.theme)}">
        <div class="container">
          <nidoca-icon
            clickable
            class="icon"
            @nidoca-event-icon-clicked="${()=>this.upload()}"
            icon="cloud_upload"
          ></nidoca-icon>

          Upload your Files
          <input style="display:none;" id="inputElement" name="file" type="file" />
        </div>
      </nidoca-box>
    `}upload(){var t;null===(t=this.inputElement)||void 0===t||t.click()}};me.styles=r`
    :host,
    slot {
      display: block;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }

    .icon {
      font-size: 96px;
      align-self: center;
    }
  `,fe([at({type:ot,converter:String}),ue("design:type",Object)],me.prototype,"theme",void 0),fe([st("#inputElement"),ue("design:type",Object)],me.prototype,"inputElement",void 0),me=fe([nt("nidoca-form-upload")],me);var ye=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ge=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let be=class extends Nt{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=ot.primary,this.theme=it.prototype.getParentTheme(this)||ot.plain}render(){return I`
      <style>
        .slider {
          background-color: var(--app-color-${this.theme}-border);
        }

        .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }

        input:checked + .slider:before {
          background-color: var(--app-color-text-${this.theme});
        }

        input:checked + .slider {
          background-color: var(--app-color-${this.theme}-selected);
        }

        input:focus + .slider {
          box-shadow: 0 0 20px var(--app-color-${this.theme}-border);
        }
      </style>

      <nidoca-list-item>
        <nidoca-text-subtitle>
          ${this.label}
          <slot></slot>
        </nidoca-text-subtitle>

        ${this.infoText.length>0?I` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:I``}

        <label class="switch" slot="meta">
          <input
            id="inputElement"
            name="${this.name}"
            type="checkbox"
            ?checked="${this.checked}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            @input="${t=>{this.checked=t.target.checked,console.log(this.checked)}}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      ${this.warningText?I` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:I``}
      ${this.errorText?I` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:I``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};be.styles=r`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: var(--height-max);
    }

    .switch {
      position: relative;
      display: inline-block;
      height: 18px;
      width: 48px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      width: 40px;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 24px;
      width: 24px;
      left: 0px;
      bottom: -3px;

      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
    }

    .slider.round {
      border-radius: 12px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `,ye([at({type:String}),ge("design:type",String)],be.prototype,"name",void 0),ye([at({type:String}),ge("design:type",String)],be.prototype,"label",void 0),ye([at({type:String}),ge("design:type",String)],be.prototype,"infoText",void 0),ye([at({type:String}),ge("design:type",String)],be.prototype,"errorText",void 0),ye([at({type:String}),ge("design:type",String)],be.prototype,"warningText",void 0),ye([at({type:Boolean}),ge("design:type",Boolean)],be.prototype,"required",void 0),ye([at({type:Boolean}),ge("design:type",Boolean)],be.prototype,"disabled",void 0),ye([at({type:Boolean}),ge("design:type",Boolean)],be.prototype,"checked",void 0),ye([at({type:String}),ge("design:type",String)],be.prototype,"theme",void 0),ye([st("#inputElement"),ge("design:type",Object)],be.prototype,"inputElement",void 0),be=ye([nt("nidoca-form-switch"),ge("design:paramtypes",[])],be);var ve=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let we=class extends tt{constructor(){super(...arguments),this.theme=ot.primary,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return I`
      <nidoca-box theme="${ne(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${re.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};we.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,ve([at({type:ot,converter:String}),xe("design:type",Object)],we.prototype,"theme",void 0),ve([at({type:String,converter:String}),xe("design:type",String)],we.prototype,"label",void 0),ve([at({type:String,converter:String}),xe("design:type",String)],we.prototype,"emailLabel",void 0),ve([at({type:String,converter:String}),xe("design:type",String)],we.prototype,"buttonLabel",void 0),ve([st("#form"),xe("design:type",Object)],we.prototype,"formComponent",void 0),we=ve([nt("nidoca-form-newsletter")],we);var $e=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Se=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Re=class extends tt{constructor(){super(...arguments),this.theme=ot.primary,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return I`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${re.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Re.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,$e([at({type:ot,converter:String}),Se("design:type",String)],Re.prototype,"theme",void 0),$e([at({type:String,converter:String}),Se("design:type",String)],Re.prototype,"label",void 0),$e([at({type:String,converter:String}),Se("design:type",String)],Re.prototype,"emailLabel",void 0),$e([at({type:String,converter:String}),Se("design:type",String)],Re.prototype,"buttonLabel",void 0),$e([st("#form"),Se("design:type",Object)],Re.prototype,"formComponent",void 0),Re=$e([nt("nidoca-form-reset-password")],Re);var ke=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Oe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let je=class extends tt{constructor(){super(...arguments),this.theme=ot.surface,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return I`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${re.password}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${re.password}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${re.password}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?I` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:I``}
        ${this.showErrorMessagePasswordDiff?I` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:I``}
      </nidoca-box>
    `}changePassword(){var t,e,o,i,n;(null===(t=this.formComponent)||void 0===t?void 0:t.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(e=this.newPasswordInputField)||void 0===e?void 0:e.getOutputData().value)!=(null===(o=this.repeatNewPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(i=this.oldPasswordInputField)||void 0===i?void 0:i.getOutputData().value)==(null===(n=this.newPasswordInputField)||void 0===n?void 0:n.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};je.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,ke([at({type:ot,converter:String}),Oe("design:type",String)],je.prototype,"theme",void 0),ke([at({type:String,converter:String}),Oe("design:type",String)],je.prototype,"label",void 0),ke([at({type:String,converter:String}),Oe("design:type",String)],je.prototype,"oldPasswordLabel",void 0),ke([at({type:String,converter:String}),Oe("design:type",String)],je.prototype,"newPasswordLabel",void 0),ke([at({type:String,converter:String}),Oe("design:type",String)],je.prototype,"repeatNewPasswordLabel",void 0),ke([at({type:String,converter:String}),Oe("design:type",String)],je.prototype,"buttonLabel",void 0),ke([st("#form"),Oe("design:type",Object)],je.prototype,"formComponent",void 0),ke([st("#oldPassword"),Oe("design:type",Object)],je.prototype,"oldPasswordInputField",void 0),ke([st("#newPassword"),Oe("design:type",Object)],je.prototype,"newPasswordInputField",void 0),ke([st("#repeatNewPassword"),Oe("design:type",Object)],je.prototype,"repeatNewPasswordInputField",void 0),ke([at(),Oe("design:type",String)],je.prototype,"errorMessageSamePasswordLabel",void 0),ke([at(),Oe("design:type",String)],je.prototype,"errorMessagePasswordDiffLabel",void 0),je=ke([nt("nidoca-form-change-password")],je);var Ee=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Pe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _e=class extends tt{constructor(){super(...arguments),this.theme=ot.primary,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return I`
      <nidoca-box theme="${ne(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${re.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${re.password}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};_e.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Ee([at({type:ot,converter:String}),Pe("design:type",Object)],_e.prototype,"theme",void 0),Ee([at({type:String,converter:String}),Pe("design:type",String)],_e.prototype,"label",void 0),Ee([at({type:String,converter:String}),Pe("design:type",String)],_e.prototype,"emailLabel",void 0),Ee([at({type:String,converter:String}),Pe("design:type",String)],_e.prototype,"passwordLabel",void 0),Ee([at({type:String,converter:String}),Pe("design:type",String)],_e.prototype,"buttonLabel",void 0),Ee([st("#form"),Pe("design:type",Object)],_e.prototype,"formComponent",void 0),_e=Ee([nt("nidoca-form-register")],_e);var Te=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ce=class extends tt{constructor(){super(...arguments),this.code=""}render(){return I``}};Ce.styles=r``,Te([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ce.prototype,"code",void 0),Ce=Te([nt("nidoca-upload")],Ce);var Ae=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ie=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let De=class extends tt{constructor(){super(),this.theme=it.prototype.getParentTheme(this)||ot.plain}render(){return I`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};De.styles=r`
    :host,
    ::slotted(:host) {
      display: block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,Ae([at({type:ot,converter:String}),Ie("design:type",String)],De.prototype,"theme",void 0),De=Ae([nt("nidoca-hr"),Ie("design:paramtypes",[])],De);var Le=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ze=class extends tt{constructor(){super(...arguments),this.text="",this.icon=""}render(){return I`
      <div class="container">
        ${this.icon?I` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:I``}
        ${this.text?I` <nidoca-text-button>${this.text}</nidoca-text-button>`:I``}
        <slot></slot>
      </div>
    `}static example(t=""){return I`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};ze.styles=r`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,Le([at({type:String}),Be("design:type",String)],ze.prototype,"text",void 0),Le([at({type:String}),Be("design:type",String)],ze.prototype,"icon",void 0),ze=Le([nt("nidoca-menu-area")],ze);var Ne=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Me=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ue=class extends tt{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1,this.theme=ot.surface}render(){return I`
      <style>
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?I` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:I``}
        ${this.text?I` <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>`:I``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return I`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};Ue.styles=r`
    .container {
      display: flex;
      cursor: pointer;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));
    }
  `,Ne([at({type:String}),Me("design:type",String)],Ue.prototype,"text",void 0),Ne([at({type:String}),Me("design:type",String)],Ue.prototype,"icon",void 0),Ne([at({type:Boolean}),Me("design:type",Boolean)],Ue.prototype,"selected",void 0),Ne([at({type:String}),Me("design:type",String)],Ue.prototype,"theme",void 0),Ue=Ne([nt("nidoca-menu-item")],Ue);var He=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},qe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ge=class extends tt{constructor(){super(...arguments),this.theme=ot.surface}render(){return I` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach(((t,e)=>{if("theme"==e&&null!=this.slotElement){const t=this.slotElement.assignedElements();for(let e=0;e<t.length;e++){const o=t[e];o instanceof Ue&&(o.theme=this.theme)}}}))}firstUpdated(){this.addEventListener("click",(t=>{if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof Ue){const e=i.getBoundingClientRect();e.left<t.x&&e.right>t.x&&(e.top<t.y&&e.bottom>t.y?i.selected=!0:i.selected=!1)}}}}))}static example(t=""){return I`
      <nidoca-menu slot="${t}" theme="primary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"></nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"></nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"></nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"></nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"></nidoca-menu-item>
      </nidoca-menu>
    `}};Ge.styles=r`
    :host,
    slot {
      display: block;
    }
  `,He([at({type:String}),qe("design:type",String)],Ge.prototype,"theme",void 0),He([st("#slotElement"),qe("design:type",Object)],Ge.prototype,"slotElement",void 0),Ge=He([nt("nidoca-menu")],Ge);var We=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Fe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xe=class extends tt{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return I`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,i,n,r){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(i).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(r).concat(";")}};Xe.styles=r`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,We([at({type:String}),Fe("design:type",String)],Xe.prototype,"height",void 0),We([at({type:String}),Fe("design:type",String)],Xe.prototype,"width",void 0),We([at({type:String}),Fe("design:type",String)],Xe.prototype,"left",void 0),We([at({type:String}),Fe("design:type",String)],Xe.prototype,"top",void 0),We([at({type:String}),Fe("design:type",String)],Xe.prototype,"right",void 0),We([at({type:String}),Fe("design:type",String)],Xe.prototype,"bottom",void 0),Xe=We([nt("nidoca-layout-floating")],Xe);var Ye=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ve=class extends tt{constructor(){super(...arguments),this.theme=ot.plain}render(){return I`
      ${it.getStyle(this.theme)}
      <slot></slot>
    `}};Ve.styles=r`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,Ye([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ve.prototype,"theme",void 0),Ve=Ye([nt("nidoca-container")],Ve);var Ke=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Je=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ze=class extends tt{constructor(){super(),this.hideSidebox=!0,this.theme=it.prototype.getParentTheme(this)||ot.plain}render(){return I` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .sidebox {
          border-color: var(--app-color-${this.theme}-border);
          border-left-style: solid;
          border-width: thin;
        }
      </style>
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox?I``:I` <slot class="sidebox" name="sidebox"></slot>`}`}};Ze.styles=r`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    .listbox {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
    }

    .sidebox {
      display: block;
      z-index: 1;
      position: fixed;
      right: 0;
      width: 33vw;
      min-height: 100%;
      transition: all 0.35s linear;
      overflow-y: scroll;
      max-height: 100%;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: 640px) {
      .sidebox {
        width: 100%;
      }
    }
  `,Ke([at({type:ot,converter:String}),Je("design:type",String)],Ze.prototype,"theme",void 0),Ke([at({type:Boolean,converter:String}),Je("design:type",Boolean)],Ze.prototype,"hideSidebox",void 0),Ze=Ke([nt("nidoca-split-screen"),Je("design:paramtypes",[])],Ze);var Qe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},to=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let eo=class extends tt{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return I`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}static example(t=""){return I`
      <nidoca-icon slot="${t}" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
    `}};eo.styles=r`
    :host {
      display: inline-block;
      font-size: var(--icon-size);
    }
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
    }

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      filter: brightness(var(--app-lighten-2));
    }

    .clickable:hover {
      filter: brightness(var(--app-darken-2));
    }
  `,Qe([at({type:String}),to("design:type",String)],eo.prototype,"icon",void 0),Qe([at({type:Boolean}),to("design:type",Boolean)],eo.prototype,"clickable",void 0),Qe([at({type:Boolean}),to("design:type",Boolean)],eo.prototype,"deactivated",void 0),Qe([at({type:String}),to("design:type",String)],eo.prototype,"primaryText",void 0),eo=Qe([nt("nidoca-icon")],eo);var oo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class no{}no.NONE="NONE",no.DEFAULT_SHADOW="DEFAULT_SHADOW",no.SHADOW_1="SHADOW_1",no.SHADOW_2="SHADOW_2",no.SHADOW_3="SHADOW_3";let ro=class extends tt{constructor(){super(...arguments),this.theme=ot.primary,this.shadowType=no.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return I`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <span class="iconExtended round ${this.shadowType}">
        <nidoca-icon
          .deactivated="${this.deactivated}"
          .clickable="${this.clickable}"
          icon="${this.icon}"
          style="font-size: inherit;"
        ></nidoca-icon>
      </span>
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};ro.styles=r`
    .round {
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }

    .DEFAULT_SHADOW {
      -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_1 {
      -moz-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    .SHADOW_2 {
      -moz-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_3 {
      -moz-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      -webkit-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
    }
  `,oo([at({type:String}),io("design:type",String)],ro.prototype,"theme",void 0),oo([at({type:Object}),io("design:type",no)],ro.prototype,"shadowType",void 0),oo([at({type:String}),io("design:type",String)],ro.prototype,"icon",void 0),oo([at({type:Boolean}),io("design:type",Boolean)],ro.prototype,"clickable",void 0),oo([at({type:Boolean}),io("design:type",Boolean)],ro.prototype,"deactivated",void 0),ro=oo([nt("nidoca-icon-extended")],ro);var ao=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let so=class extends tt{render(){return I`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};so.styles=r`
    :host {
      display: inline-block;
    }

    :root {
      --ripple-background: var(--app-color-surface-background-dark);
      --ripple-opacity: 0.8;
      --ripple-duration: 600ms;
      --ripple-easing: linear;

      --y: 0;
      --x: 0;
      --d: 0;
      --t: 0;
      --s: 0;
      --o: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    [anim='ripple'] {
      position: relative;
      overflow: hidden;
    }

    [anim='ripple']:before {
      content: '';
      position: absolute;
      display: block;
      background: var(--ripple-background, white);
      border-radius: 50%;
      pointer-events: none;
      top: calc(var(--y) * 1px);
      left: calc(var(--x) * 1px);
      width: calc(var(--d) * 1px);
      height: calc(var(--d) * 1px);
      opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));
      -webkit-transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
      -webkit-transform: translate(-50%, -50%) scale(var(--s, 1));
      transform: translate(-50%, -50%) scale(var(--s, 1));
      -webkit-transform-origin: center;
      transform-origin: center;
    }
  `,ao([st("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],so.prototype,"rippleContainerElement",void 0),so=ao([nt("nidoca-ripple")],so);var lo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},co=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let po=class extends tt{constructor(){super(...arguments),this.src="",this.width="auto",this.height="auto",this.zoom=!1}render(){return this.src?I`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:I``}static example(t=""){return I`<nidoca-img width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img>`}};po.styles=r`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }

    :host .zoom:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }
  `,lo([at({type:String}),co("design:type",String)],po.prototype,"src",void 0),lo([at({type:String}),co("design:type",String)],po.prototype,"width",void 0),lo([at({type:String}),co("design:type",String)],po.prototype,"height",void 0),lo([at({type:Boolean}),co("design:type",Boolean)],po.prototype,"zoom",void 0),po=lo([nt("nidoca-img")],po);let ho=class extends po{static example(t=""){return I`<nidoca-img-round width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img-round>`}};ho.styles=r`
    :host {
      font-size: 0;
      display: inline-block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }

    :host .zoom:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }
  `,ho=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-img-round")],ho);var fo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let uo=class extends tt{constructor(){super(...arguments),this.src=""}render(){return I`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};uo.styles=r``,fo([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],uo.prototype,"src",void 0),uo=fo([nt("nidoca-movie")],uo);var mo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},yo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let go=class extends tt{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return I`
      <nidoca-form-text
        theme="${ne(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${re.number}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};go.styles=r`
    :host {
      display: block;
      width: 100%;
    }
  `,mo([at({type:ot,converter:String}),yo("design:type",Object)],go.prototype,"theme",void 0),mo([at({type:String}),yo("design:type",String)],go.prototype,"label",void 0),mo([at({type:String}),yo("design:type",String)],go.prototype,"placeholder",void 0),mo([at({type:String}),yo("design:type",String)],go.prototype,"name",void 0),mo([at({type:Number}),yo("design:type",Number)],go.prototype,"min",void 0),mo([at({type:Number}),yo("design:type",Number)],go.prototype,"max",void 0),mo([at({type:String}),yo("design:type",String)],go.prototype,"errorText",void 0),mo([st("#inputfield"),yo("design:type",Object)],go.prototype,"inputfield",void 0),go=mo([nt("nidoca-form-captcha")],go);var bo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},vo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let xo=class extends tt{constructor(){super(...arguments),this.text="",this.href="",this.targetType="_self"}render(){return I`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};xo.styles=r`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,bo([at({type:String}),vo("design:type",String)],xo.prototype,"text",void 0),bo([at({type:String}),vo("design:type",String)],xo.prototype,"href",void 0),bo([at({type:String}),vo("design:type",String)],xo.prototype,"targetType",void 0),xo=bo([nt("nidoca-link")],xo);var wo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},$o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let So=class extends tt{constructor(){super(...arguments),this.theme=ot.surface,this.primaryText="",this.secondaryText="",this.selected=!1}render(){return I`
      <style>
        .container {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
        .container.selected {
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div @click="${()=>this.switchSelected()}" class="container ${this.selected?"selected":""}">
        <slot name="left" class="item left"></slot>
        <div class="containerTypography">
          ${this.primaryText?I` <nidoca-text-body theme="${this.theme}" class="item">${this.primaryText} </nidoca-text-body>`:I``}
          <slot></slot>
          ${this.secondaryText?I` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-caption>`:I``}
          <slot name="secondary"></slot>
        </div>
        <slot name="right" class="item right"></slot>
      </div>
    `}switchSelected(){this.selected=Boolean(!this.selected),this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this.selected,bubbles:!0,composed:!0}))}static example(t=""){return I`<nidoca-list-item
      theme="primary"
      slot="${t}"
      primaryText="List Item"
      secondaryText="List Item Secondary Text"
    >
      ${ho.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};So.styles=r`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: min-content 1fr min-content;
      padding: var(--space-2);
    }

    .item {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .left {
      padding-right: var(--space-2);
    }

    .right {
      padding-left: var(--space-2);
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `,wo([at({type:ot,converter:String}),$o("design:type",String)],So.prototype,"theme",void 0),wo([at({type:String}),$o("design:type",String)],So.prototype,"primaryText",void 0),wo([at({type:String}),$o("design:type",String)],So.prototype,"secondaryText",void 0),wo([at({type:Boolean}),$o("design:type",Boolean)],So.prototype,"selected",void 0),So=wo([nt("nidoca-list-item")],So);var Ro=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ko=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oo=class extends tt{constructor(){super(...arguments),this.theme=ot.surface,this.multiselect=!1}updated(t){super.updated(t),t.forEach(((t,e)=>{"theme"==e&&this.getItems().forEach((t=>{t.theme=this.theme}))}))}render(){return I`
      <slot
        @nidoca-event-list-item-clicked="${t=>{this.multiselect||(this.unselectAll(),t.target.selected=!0)}}"
        id="slotElement"
      ></slot>
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof So&&t.push(i)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof So&&i.selected&&t.push(i)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let o=0;for(let i=0;i<e.length;i++){const n=e[i];n instanceof So&&(n.selected&&t.push(o),o++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){this.getItems().forEach((t=>{t.selected=!1}))}static example(){return I`<nidoca-list theme="primary">
      ${Po.example()} ${So.example()} ${So.example()} ${So.example()}
    </nidoca-list>`}};Oo.styles=r`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Ro([at({type:ot,converter:String}),ko("design:type",String)],Oo.prototype,"theme",void 0),Ro([at({type:Boolean}),ko("design:type",Boolean)],Oo.prototype,"multiselect",void 0),Ro([st("#slotElement"),ko("design:type",Object)],Oo.prototype,"slotElement",void 0),Oo=Ro([nt("nidoca-list")],Oo);var jo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Eo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Po=class extends tt{constructor(){super(...arguments),this.theme=ot.surface,this.text=""}render(){return I`
      <style>
        :host {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background-dark);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }

        :host {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <nidoca-text-body theme="${this.theme}" style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-body>
    `}static example(){return I`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};Po.styles=r`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,jo([at({type:ot,converter:String}),Eo("design:type",String)],Po.prototype,"theme",void 0),jo([at({type:String}),Eo("design:type",String)],Po.prototype,"text",void 0),Po=jo([nt("nidoca-list-section")],Po);var _o=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},To=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Co=class extends tt{constructor(){super(...arguments),this.theme=ot.primary,this.prominent=!1}render(){return I`
      <style>
        * {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>

      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?I` <slot class="prominent" name="prominent"></slot>`:I``}
    `}static example(t=""){return I`
      <nidoca-top-app-bar slot="${t}" style="min-height: 48px;" theme="primary" prominent>
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>
        <nidoca-search-bar theme="primary" slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>
    `}};Co.styles=r`
    :host {
      display: block;
      top: 0;
      width: 100%;
      position: sticky;
    }

    .bar {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      align-content: space-around;
      width: 100%;
      height: var(--height-medium);
      box-sizing: border-box;
    }

    slot {
      display: flex;
      align-items: center;
      flex-basis: auto;
    }

    .prominent {
      display: block;
    }
  `,_o([at({type:String,converter:String}),To("design:type",String)],Co.prototype,"theme",void 0),_o([at({type:Boolean}),To("design:type",Boolean)],Co.prototype,"prominent",void 0),Co=_o([nt("nidoca-top-app-bar")],Co);var Ao=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Do=class extends tt{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new eo],["row 2",new eo]],this.theme=ot.plain}render(){return I`
      <style>
        td,
        th {
          border-bottom: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          border-left: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        tr > td:last-of-type,
        th:last-of-type {
          border-right: var(--border-width-min) solid var(--app-color-${this.theme}-border);
        }

        th {
          border-top: var(--border-width-min) solid var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <div>
        <table>
          <thead>
            ${te([this.headers],(()=>I` ${Zt(this.headers,(t=>I` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${te([this.rows],(()=>I`
                  ${Zt(this.rows,(t=>I`
                        <tr>
                          ${Zt(t,(t=>I` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Do.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    table,
    ::slotted(table) {
      border-spacing: 0;
      width: 100%;
    }

    td,
    th {
      vertical-align: center;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      height: var(--height-medium);
      box-sizing: border-box;
      text-align: left;
    }
  `,Ao([at({type:Array}),Io("design:type",Array)],Do.prototype,"headers",void 0),Ao([at({type:Array}),Io("design:type",Array)],Do.prototype,"rows",void 0),Ao([at({type:ot,converter:String}),Io("design:type",String)],Do.prototype,"theme",void 0),Do=Ao([nt("nidoca-table")],Do);var Lo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Bo=class extends tt{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?I` <slot></slot>`:I``}};Bo.styles=r`
    :host,
    slot {
      display: block;
    }
  `,Lo([at({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Bo.prototype,"selected",void 0),Bo=Lo([nt("nidoca-tab-content")],Bo);var zo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},No=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Mo=class extends tt{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=ot.surface}render(){return I`
      <style>
        .container {
          color: var(--app-color-text-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background-light);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
        :hover {
          border-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.tabClicked()}">
        ${this.text?I` <nidoca-text text="${this.text}"></nidoca-text> `:I``}
        <slot></slot>
      </div>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Mo.styles=r`
    :host {
      display: block;
      padding-right: var(--space);
    }

    .container {
      line-height: var(--height-min);
      height: var(--height-min);
      box-sizing: border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }

    slot {
      display: block;
    }
  `,zo([at({type:Boolean}),No("design:type",Boolean)],Mo.prototype,"selected",void 0),zo([at({type:String}),No("design:type",String)],Mo.prototype,"text",void 0),zo([at({type:String}),No("design:type",String)],Mo.prototype,"theme",void 0),Mo=zo([nt("nidoca-tab")],Mo);var Uo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ho=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qo=class extends tt{constructor(){super(...arguments),this.theme=ot.surface,this.tabIndex=0}render(){return I`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,o=t[this.tabIndex];for(let i=0;i<t.length;i++){const n=t[i];n instanceof Mo&&(n.theme=this.theme,n.style.width=String(e).concat("%"),n==o?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof Bo&&(this.tabIndex==t?i.selected=!0:i.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof Mo&&i==t){this.tabIndex=o;break}}}}static example(t=""){return I`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab">Tab 1</nidoca-tab>
        <nidoca-tab slot="tab">Tab 2</nidoca-tab>
        <nidoca-tab slot="tab">Tab 3</nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${Yi.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${Yi.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${Yi.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};qo.styles=r`
    :host {
      display: block;
      width: 100%;
    }
    slot {
      display: block;
    }

    .container {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 100%;
    }

    #tabSlot {
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,Uo([st("#tabSlot"),Ho("design:type",Object)],qo.prototype,"tabSlot",void 0),Uo([st("#tabContentSlot"),Ho("design:type",Object)],qo.prototype,"tabContentSlot",void 0),Uo([at({type:String}),Ho("design:type",String)],qo.prototype,"theme",void 0),Uo([at({type:Number}),Ho("design:type",Number)],qo.prototype,"tabIndex",void 0),qo=Uo([nt("nidoca-tabs")],qo);var Go=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Wo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fo=class extends tt{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(t=>{if(!this.hideLeft&&this.leftElement){console.log("close");const e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}}))}updated(t){super.updated(t)}render(){return I`
      <slot
        id="left"
        @nidoca-event-menu-item-clicked="${()=>{641>window.innerWidth&&(this.hideLeft=!0)}}"
        class="${this.hideLeft?"hideLeft":""}"
        name="left"
      >
      </slot>

      <div class="right">
        <nidoca-top-app-bar theme="primary" id="header" .prominent="${this.prominent}">
          <nidoca-icon
            slot="left"
            style="padding-left:var(--space-2);"
            icon="menu"
            .clickable="${!0}"
            @nidoca-event-icon-clicked="${()=>{this.hideLeft=!this.hideLeft}}"
          ></nidoca-icon>

          <span slot="left">
            <slot class="slotHeader" name="topLeft"></slot>
          </span>
          <span slot="center">
            <slot class="slotHeader" name="topCenter"></slot>
          </span>
          <span slot="right">
            <slot class="slotHeader" name="topRight"></slot>
          </span>
          <span style="width: 100%;" slot="prominent">
            <slot class="slotHeader" name="prominent"></slot>
          </span>
        </nidoca-top-app-bar>
        <slot id="content" name="content"></slot>
      </div>
    `}};Fo.styles=r`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
      color: var(--app-color-text-primary);
      background-color: var(--app-color-primary-background);
      min-width: 280px;
      min-height: 100%;
      max-height: 100%;
    }

    #left.hideLeft {
      transition: all 0.35s ease;
      display: none;
    }

    @media screen and (max-width: 640px) {
      #left {
        position: fixed;
        z-index: 1;
      }
    }

    .right {
      width: 100%;
      height: 100vh;
      overflow: scroll;
    }
  `,Go([at({type:Boolean}),Wo("design:type",Boolean)],Fo.prototype,"hideLeft",void 0),Go([at({type:Boolean}),Wo("design:type",Boolean)],Fo.prototype,"prominent",void 0),Go([st("#header"),Wo("design:type",Object)],Fo.prototype,"headerElement",void 0),Go([st("#left"),Wo("design:type",Object)],Fo.prototype,"leftElement",void 0),Go([st("#content"),Wo("design:type",Object)],Fo.prototype,"contentElement",void 0),Fo=Go([nt("nidoca-template"),Wo("design:paramtypes",[])],Fo);var Xo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Yo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vo=class extends tt{firstUpdated(t){super.firstUpdated(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((t=>{this.videoElement&&(this.videoElement.srcObject=t)}))}render(){return I`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){const t=this.canvasElement.getContext("2d");if(t){t.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);const e=this.canvasElement.toDataURL("image/jpeg");console.log(e)}}}};Vo.styles=r``,Xo([st("#video"),Yo("design:type",Object)],Vo.prototype,"videoElement",void 0),Xo([st("#canvas"),Yo("design:type",Object)],Vo.prototype,"canvasElement",void 0),Xo([st("#click-photo"),Yo("design:type",Object)],Vo.prototype,"buttonElement",void 0),Vo=Xo([nt("nidoca-video")],Vo);var Ko=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Jo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Zo=class extends tt{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return I`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((t=>I`${t}`))}
    `}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"src"==e&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((t=>{const e=document.createElement("canvas");e.width=t[0],e.height=t[1];const o=e.getContext("2d");o&&this.img&&(this.img.crossOrigin="anonymous",o.drawImage(this.img,0,0,t[0],t[1]),e.toBlob((t=>{}),"image/webp")),this.canvasElements.push(e)})),this.requestUpdate()})}};Zo.styles=r``,Ko([at({type:String}),Jo("design:type",String)],Zo.prototype,"src",void 0),Ko([st("#img"),Jo("design:type",Object)],Zo.prototype,"img",void 0),Zo=Ko([nt("nidoca-svg-2-webp")],Zo);var Qo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ti=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ei=class extends tt{constructor(){super(...arguments),this.theme=ot.surface,this.text=""}render(){return I`<style>
        slot {
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}static example(t=""){return I`
      <div slot="${t}">
        <nidoca-text-h1>nidoca-text-h1</nidoca-text-h1>
        <nidoca-text-h2>nidoca-text-h2</nidoca-text-h2>
        <nidoca-text-h3>nidoca-text-h3</nidoca-text-h3>
        <nidoca-text-h4>nidoca-text-h4</nidoca-text-h4>
        <nidoca-text-h5>nidoca-text-h5</nidoca-text-h5>
        <nidoca-text-h6>nidoca-text-h6</nidoca-text-h6>
        <nidoca-text>nidoca-text</nidoca-text>
        <nidoca-text-body>nidoca-text-body</nidoca-text-body>
        <nidoca-text-overline>nidoca-text-overline</nidoca-text-overline>
        <nidoca-text-subtitle>nidoca-text-subtitle</nidoca-text-subtitle>
        <nidoca-text-caption>nidoca-text-caption</nidoca-text-caption>
        <nidoca-text-button>nidoca-text-button</nidoca-text-button>
        <nidoca-text-error>nidoca-text-error</nidoca-text-error>
        <nidoca-text-warning>nidoca-text-warning</nidoca-text-warning>
        <nidoca-text-info>nidoca-text-info</nidoca-text-info>
        <nidoca-text-success>nidoca-text-success</nidoca-text-success>
      </div>
    `}};ei.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 100%;
    }

    slot {
    }
  `,Qo([at({type:ot,converter:String}),ti("design:type",Object)],ei.prototype,"theme",void 0),Qo([at({type:String}),ti("design:type",String)],ei.prototype,"text",void 0),ei=Qo([nt("nidoca-text")],ei);let oi=class extends ei{render(){return I` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};oi.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 105%;
    }
  `,oi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-body")],oi);let ii=class extends ei{render(){return I`${super.render()}`}};ii.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `,ii=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-button")],ii);let ni=class extends ei{};ni.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,ni=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-overline")],ni);let ri=class extends ei{render(){return I` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ri.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,ri=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-subtitle")],ri);let ai=class extends ei{render(){return I`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};ai.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,ai=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-caption")],ai);let si=class extends ai{render(){return I`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};si=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-error")],si);let li=class extends ai{render(){return I`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};li=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-success")],li);let ci=class extends ai{render(){return I`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};ci=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-warning")],ci);let di=class extends ai{render(){return I`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};di=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-info")],di);let pi=class extends ei{};pi.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,pi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h1")],pi);let hi=class extends ei{};hi.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,hi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h2")],hi);let fi=class extends ei{};fi.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,fi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h3")],fi);let ui=class extends ei{};ui.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,ui=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h4")],ui);let mi=class extends ei{};mi.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,mi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h5")],mi);let yi=class extends ei{};yi.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,yi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-text-h6")],yi);var gi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},bi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let vi=class extends tt{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=ot.surface}render(){return I`
      <style>
        .container,
        input {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .container:focus-within,
        input:focus-within {
          border-color: var(--app-color-${this.theme}-selected);
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container border">
        <nidoca-icon style="padding-right:var(--space);padding-left:var(--space);" icon="search"></nidoca-icon>
        <input
          id="inputElement"
          type="text"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${()=>this.valueChanged()}"
        />
        <nidoca-icon
          style="padding-right:var(--space);padding-left:var(--space);"
          icon="close"
          @click="${()=>this.clearValue()}"
        ></nidoca-icon>
      </div>
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}static example(t=""){return I`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};vi.styles=r`
    :host {
      width: 100%;
      display: block;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    input {
      font: inherit;
      width: 100%;
      border: none;
      padding: 0;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
    }
  `,gi([at({type:String}),bi("design:type",String)],vi.prototype,"value",void 0),gi([at({type:String}),bi("design:type",String)],vi.prototype,"placeholder",void 0),gi([at({type:Boolean}),bi("design:type",Boolean)],vi.prototype,"disabled",void 0),gi([st("#inputElement"),bi("design:type",Object)],vi.prototype,"inputElement",void 0),gi([at({type:ot,converter:String}),bi("design:type",String)],vi.prototype,"theme",void 0),vi=gi([nt("nidoca-search-bar")],vi);var xi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},wi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class $i{}$i.CENTER="CENTER",$i.LEFT="LEFT",$i.RIGHT="RIGHT",$i.TOP="TOP",$i.BOTTOM="BOTTOM",$i.SLIDE_CENTER="SLIDE_CENTER",$i.SLIDE_LEFT="SLIDE_LEFT",$i.SLIDE_RIGHT="SLIDE_RIGHT",$i.SLIDE_TOP="SLIDE_TOP",$i.SLIDE_BOTTOM="SLIDE_BOTTOM";let Si=class extends tt{constructor(){super(...arguments),this.transitionType=$i.CENTER,this.duration=.5}render(){return I` <div class="${ne(this.transitionType)}"><slot></slot></div> `}};Si.styles=r`
    /* Declaration of keyframes */

    @-webkit-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @-moz-keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-10px);
        -moz-transform: translatex(-10px);
        -o-transform: translatex(-10px);
        transform: translatex(-10px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        -webkit-transform: translatex(-100px);
        -moz-transform: translatex(-100px);
        -o-transform: translatex(-100px);
        transform: translatex(-100px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(20px);
        -moz-transform: translatex(20px);
        -o-transform: translatex(20px);
        transform: translatex(20px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @-moz-keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(20px);
        -moz-transform: translatex(20px);
        -o-transform: translatex(20px);
        transform: translatex(20px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }
    @keyframes fadeInRight {
      from {
        opacity: 0;
        -webkit-transform: translatex(200px);
        -moz-transform: translatex(200px);
        -o-transform: translatex(200px);
        transform: translatex(200px);
      }
      to {
        opacity: 1;
        -webkit-transform: translatex(0);
        -moz-transform: translatex(0);
        -o-transform: translatex(0);
        transform: translatex(0);
      }
    }

    @keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInUp {
      from {
        transform: translate3d(0, 40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @keyframes fadeInBottom {
      from {
        transform: translate3d(0, -40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeInBottom {
      from {
        transform: translate3d(0, -40px, 0);
      }

      to {
        transform: translate3d(0, 0, 0);
        opacity: 1;
      }
    }

    @-webkit-keyframes slideInLeft {
      0% {
        opacity: 0;

        -webkit-transform: translateX(-400px);
      }
      60% {
        -webkit-transform: translateX(30px);
      }
      80% {
        -webkit-transform: translateX(-10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateX(0);
      }
    }

    @keyframes slideInLeft {
      0% {
        opacity: 0;

        transform: translateX(-400px);
      }
      60% {
        transform: translateX(30px);
      }
      80% {
        transform: translateX(-10px);
      }
      100% {
        opacity: 1;

        transform: translateX(0);
      }
    }

    @-webkit-keyframes slideInRight {
      0% {
        opacity: 0;

        -webkit-transform: translateX(400px);
      }
      60% {
        -webkit-transform: translateX(-30px);
      }
      80% {
        -webkit-transform: translateX(10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      0% {
        opacity: 0;

        transform: translateX(400px);
      }
      60% {
        transform: translateX(-30px);
      }
      80% {
        transform: translateX(10px);
      }
      100% {
        opacity: 1;

        transform: translateX(0);
      }
    }

    @-webkit-keyframes slideInCenter {
      0% {
        opacity: 0;
        -webkit-transform: scale(0.3);
      }

      50% {
        opacity: 1;
        -webkit-transform: scale(1.05);
      }

      70% {
        -webkit-transform: scale(0.9);
      }

      100% {
        -webkit-transform: scale(1);
      }
    }

    @keyframes slideInCenter {
      0% {
        opacity: 0;
        transform: scale(0.3);
      }

      50% {
        opacity: 1;
        transform: scale(1.05);
      }

      70% {
        transform: scale(0.9);
      }

      100% {
        transform: scale(1);
      }
    }

    @-webkit-keyframes slideInTop {
      0% {
        opacity: 0;

        -webkit-transform: translateY(400px);
      }
      60% {
        -webkit-transform: translateY(-30px);
      }
      80% {
        -webkit-transform: translateY(10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateY(0);
      }
    }

    @keyframes slideInTop {
      0% {
        opacity: 0;

        transform: translateY(400px);
      }
      60% {
        transform: translateY(-30px);
      }
      80% {
        transform: translateY(10px);
      }
      100% {
        opacity: 1;

        transform: translateY(0);
      }
    }

    @-webkit-keyframes slideInBottom {
      0% {
        opacity: 0;

        -webkit-transform: translateY(-400px);
      }
      60% {
        -webkit-transform: translateY(30px);
      }
      80% {
        -webkit-transform: translateY(-10px);
      }
      100% {
        opacity: 1;

        -webkit-transform: translateY(0);
      }
    }

    @keyframes slideInBottom {
      0% {
        opacity: 0;

        transform: translateY(-400px);
      }
      60% {
        transform: translateY(30px);
      }
      80% {
        transform: translateY(-10px);
      }
      100% {
        opacity: 1;

        transform: translateY(0);
      }
    }

    /*  */
    .CENTER {
      animation: fadeIn ease 2s;
      -webkit-animation: fadeIn ease 2s;
      -moz-animation: fadeIn ease 2s;
      -o-animation: fadeIn ease 2s;
      -ms-animation: fadeIn ease 2s;
    }

    .LEFT {
      -webkit-animation-name: fadeInLeft;
      -moz-animation-name: fadeInLeft;
      -o-animation-name: fadeInLeft;
      animation-name: fadeInLeft;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-duration: 1s;
      animation-delay: 1s;
    }
    .RIGHT {
      -webkit-animation-name: fadeInRight;
      -moz-animation-name: fadeInRight;
      -o-animation-name: fadeInRight;
      animation-name: fadeInRight;
      -webkit-animation-fill-mode: both;
      -moz-animation-fill-mode: both;
      -o-animation-fill-mode: both;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -moz-animation-duration: 1s;
      -o-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
      -o-animation-duration: 1s;
      animation-delay: 1s;
    }

    .TOP {
      opacity: 0;
      animation-name: fadeInUp;
      -webkit-animation-name: fadeInUp;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }
    .BOTTOM {
      opacity: 0;
      animation-name: fadeInBottom;
      -webkit-animation-name: fadeInBottom;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_LEFT {
      -webkit-animation-name: slideInLeft;
      animation-name: slideInLeft;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_RIGHT {
      -webkit-animation-name: slideInRight;
      animation-name: slideInRight;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_CENTER {
      -webkit-animation-name: slideInCenter;
      animation-name: slideInCenter;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_TOP {
      -webkit-animation-name: slideInTop;
      animation-name: slideInTop;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }

    .SLIDE_BOTTOM {
      -webkit-animation-name: slideInBottom;
      animation-name: slideInBottom;
      opacity: 1;
      animation-duration: 1s;
      animation-fill-mode: both;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: both;
    }
  `,xi([at({type:String}),wi("design:type",String)],Si.prototype,"transitionType",void 0),xi([at({type:Number}),wi("design:type",Number)],Si.prototype,"duration",void 0),Si=xi([nt("nidoca-transition")],Si);var Ri=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let ki=class extends tt{constructor(){super(...arguments),this.show=!1}render(){return this.show?I`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${$i.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:I``}};ki.styles=r`
    .fullScreen {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .opacScreen {
      z-index: 20;
      opacity: 0.85;
      background-color: var(--app-color-surface-background);
    }

    .wrapperOutside {
      display: table;
      z-index: 30;
    }

    .wrapperInside {
      display: table-cell;
      vertical-align: middle;
    }

    .dialogContainer {
      width: max-content;
      height: auto;

      padding: 0;
      margin: 0 auto;
    }
  `,Ri([at({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],ki.prototype,"show",void 0),ki=Ri([nt("nidoca-dialog")],ki);var Oi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ji=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ei=class extends tt{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return I`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Dt.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Dt.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};Ei.styles=r``,Oi([at({type:Boolean}),ji("design:type",Boolean)],Ei.prototype,"show",void 0),Oi([at({type:String}),ji("design:type",String)],Ei.prototype,"title",void 0),Oi([at({type:String}),ji("design:type",String)],Ei.prototype,"description",void 0),Oi([at({type:String}),ji("design:type",String)],Ei.prototype,"labelButtonYes",void 0),Oi([at({type:String}),ji("design:type",String)],Ei.prototype,"labelButtonNo",void 0),Ei=Oi([nt("nidoca-dialog-decision")],Ei);var Pi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},_i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ti=class extends tt{constructor(){super(...arguments),this.theme=ot.surface,this.src="",this.title="",this.subtitle=""}render(){return I`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.src}"></nidoca-img-round>
                <div style="padding: var(--space);">
                <nidoca-text-body style="text-align:center;" theme="${this.theme}">${this.title}</nidoca-text-body>
                <nidoca-text-caption style="text-align:center;" theme="${this.theme}">${this.subtitle}</nidoca-text-caption>

  </div>
            </div>
            </div>`}static example(t=""){return I`<nidoca-avatar
      width="64px"
      width="64px"
      slot="${t}"
      title="Dominik Bruhn"
      subtitle="Softwareentwickler"
      src="face.jpg"
      >Dominik Bruhn</nidoca-avatar
    >`}};Ti.styles=r`
    :host {
      display: block;
    }
  `,Pi([at({type:ot,converter:String}),_i("design:type",String)],Ti.prototype,"theme",void 0),Pi([at({type:String}),_i("design:type",String)],Ti.prototype,"src",void 0),Pi([at({type:String}),_i("design:type",String)],Ti.prototype,"title",void 0),Pi([at({type:String}),_i("design:type",String)],Ti.prototype,"subtitle",void 0),Ti=Pi([nt("nidoca-avatar")],Ti);var Ci=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ai=class extends tt{constructor(){super(...arguments),this.theme=ot.plain}render(){return I`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Ai.styles=r`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
    }
    slot {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `,Ci([at({type:ot,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ai.prototype,"theme",void 0),Ai=Ci([nt("nidoca-card")],Ai);let Ii=class extends tt{render(){return I`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();for(let t=0;t<o.length;t++){const e=o[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};Ii.styles=r`
    slot,
    ::slotted(slot) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .flexItem,
    ::slotted(.flexItem) {
      flex-basis: 24%;
      padding-top: var(--space-3);
    }
  `,Ii=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-gallery")],Ii);let Di=class extends tt{render(){return I`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};Di.styles=r`
    :host {
      display: none;
    }
  `,Di=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-print")],Di);let Li=class extends tt{constructor(){super(...arguments),this.flexBasis="auto"}render(){return I`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target,o=e.offsetWidth,i=e.assignedElements(),n=i.length,r=[];let a=0;for(let t=0;t<n;t++){const e=i[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)r.push(e);else{const e=t.toUpperCase();a+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),0==s&&(s=100/n),this.flexBasis=String(s/r.length)+"%",this.requestUpdate()}};Li.styles=r`
    :host {
      display: block;
      margin: auto;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }

    @media only screen and (max-width: 1007px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,Li=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-section")],Li);var Bi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},zi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ni=class extends tt{render(){return I` <slot></slot>`}};Ni.styles=r`
    :host {
      display: block;
    }

    slot {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: stretch;
      width: 50%;
      margin: auto;
    }

    @media only screen and (max-width: 1007px) {
      slot {
        width: 100%;
      }
    }
  `,Ni=Bi([nt("nidoca-dashboard")],Ni);let Mi=class extends tt{render(){return I` <slot></slot>`}};Mi.styles=r`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,Mi=Bi([nt("nidoca-dashboard-box-25")],Mi);let Ui=class extends tt{render(){return I` <slot></slot>`}};Ui.styles=r`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,Ui=Bi([nt("nidoca-dashboard-box-50")],Ui);let Hi=class extends tt{render(){return I` <slot></slot>`}};Hi.styles=r`
    :host {
      width: 100%;
      display: block;
    }
  `,Hi=Bi([nt("nidoca-dashboard-box-100")],Hi);let qi=class extends tt{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return I`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};qi.styles=r`
    :host {
      padding: var(--space-2);
      box-sizing: border-box;
    }

    :host,
    nidoca-card {
      display: block;
      height: 100%;
      width: 100%;
    }

    .clickable {
      cursor: pointer;
    }
  `,Bi([at({type:Boolean}),zi("design:type",Boolean)],qi.prototype,"clickable",void 0),Bi([at({type:String}),zi("design:type",String)],qi.prototype,"title",void 0),qi=Bi([nt("nidoca-dashboard-card")],qi);var Gi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Wi=class extends tt{constructor(){super(...arguments),this.theme=ot.plain}render(){return I`
      ${it.getStyle(this.theme)}
      <slot></slot>
    `}};Wi.styles=r`
    :host {
      display: block;
      padding: var(--space-6);
      box-sizing: border-box;
    }
    slot {
      display: block;
      margin: auto;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      :host {
        padding: var(--space-4);
      }
    }

    @media only screen and (max-width: 640px) {
      :host {
        padding: var(--space-2);
      }
    }
  `,Gi([at({type:ot,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Wi.prototype,"theme",void 0),Wi=Gi([nt("nidoca-box")],Wi);var Fi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Xi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Yi=class extends tt{constructor(){super(...arguments),this.theme=ot.plain,this.overline="",this.title="",this.summary="",this.text=""}render(){return I`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?I` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:I``}
        ${this.title?I` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:I``}
        ${this.summary?I`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:I``}
        ${this.text?I` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:I``}
        <slot></slot>
      </div>
    `}static example(t=""){return I`<nidoca-article
      theme="plain"
      slot="${t}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`}};Yi.styles=r`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    .paddingBottom {
      padding-bottom: var(--space-2);
    }
  `,Fi([at({type:ot,converter:String}),Xi("design:type",String)],Yi.prototype,"theme",void 0),Fi([at({type:String}),Xi("design:type",String)],Yi.prototype,"overline",void 0),Fi([at({type:String}),Xi("design:type",String)],Yi.prototype,"title",void 0),Fi([at({type:String}),Xi("design:type",String)],Yi.prototype,"summary",void 0),Fi([at({type:String}),Xi("design:type",String)],Yi.prototype,"text",void 0),Yi=Fi([nt("nidoca-article")],Yi);var Vi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ki=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ji=class extends tt{constructor(){super(...arguments),this.theme=ot.primary,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return I`
      <nidoca-box theme="${ne(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${re.text}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${re.email}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${re.text}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${Dt.contained}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Ji.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Vi([at({type:ot,converter:String}),Ki("design:type",Object)],Ji.prototype,"theme",void 0),Vi([at({type:String,converter:String}),Ki("design:type",String)],Ji.prototype,"label",void 0),Vi([at({type:String,converter:String}),Ki("design:type",String)],Ji.prototype,"nameLabel",void 0),Vi([at({type:String,converter:String}),Ki("design:type",String)],Ji.prototype,"emailLabel",void 0),Vi([at({type:String,converter:String}),Ki("design:type",String)],Ji.prototype,"titleLabel",void 0),Vi([at({type:String,converter:String}),Ki("design:type",String)],Ji.prototype,"messageLabel",void 0),Vi([at({type:String,converter:String}),Ki("design:type",String)],Ji.prototype,"buttonLabel",void 0),Vi([st("#authenitcate-form"),Ki("design:type",Object)],Ji.prototype,"formComponent",void 0),Ji=Vi([nt("nidoca-form-contact")],Ji);let Zi=class extends tt{render(){return I`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `}};Zi.styles=r`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100vh;
      width: 100vw;
    }

    .right {
      background-color: var(--app-color-text-primary-background);
    }

    .left {
      margin: auto;
      width: min-content;
      height: min-content;
    }

    @media only screen and (max-width: 640px) {
      :host {
        grid-template-columns: 1fr;
      }
      .right {
        display: block;
        overflow: hidden;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0.1;
        z-index: -1;
      }
    }
  `,Zi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([nt("nidoca-page-login")],Zi);var Qi,tn=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},en=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.anchor="anchor",t.page="page"}(Qi||(Qi={}));let on=class extends tt{constructor(){super(...arguments),this.loggedIn=!1}updated(t){if(super.updated(t),t.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),t.has("route")&&this.root){for(let t=0;t<this.root.childs.length;t++){const e=this.root.childs[t];if(e.route==this.route){this.contentComponent=document.createElement(e.rootComponent);break}}this.requestUpdate()}}render(){var t;return this.loggedIn?I`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?I`${this.contentComponent}`:I``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(t=this.root)||void 0===t?void 0:t.childs.map((t=>I` <nidoca-menu-item
                        text="${t.name}"
                        @click="${()=>{this.routeTo(t)}}"
                      ></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:I` <nidoca-page-login
          @nidoca-form-login-submit="${t=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:t.detail,bubbles:!0,composed:!0}))}}"
        ></nidoca-page-login>`}routeTo(t){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:t.route,bubbles:!0,composed:!0}))}};tn([at({type:Array}),en("design:type",Object)],on.prototype,"root",void 0),tn([at({type:Boolean}),en("design:type",Boolean)],on.prototype,"loggedIn",void 0),tn([at({type:String,converter:String}),en("design:type",Object)],on.prototype,"route",void 0),on=tn([nt("nidoca-app")],on)})();