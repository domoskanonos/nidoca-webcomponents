/*! For license information please see nidoca-webcomponents.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{N2:()=>on,rl:()=>Bt,vK:()=>pe,k1:()=>le,Nv:()=>ro,Ot:()=>mo,ST:()=>Do,m7:()=>Ge,Q0:()=>si,TI:()=>hi,el:()=>rt,Z_:()=>at});const e=window,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(t,e,o){if(this._$cssResult$=!0,o!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&n.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new r(o,t,i)},s=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var l;const c=window,d=c.trustedTypes,p=d?d.emptyScript:"",h=c.reactiveElementPolyfillSupport,f={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},u=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:u};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Ep(o,e);void 0!==i&&(this._$Ev.set(i,o),t.push(i))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{o?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((o=>{const i=document.createElement("style"),n=e.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=o.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=m){var i;const n=this.constructor._$Ep(t,o);if(void 0!==n&&!0===o.reflect){const r=(void 0!==(null===(i=o.converter)||void 0===i?void 0:i.toAttribute)?o.converter:f).toAttribute(e,o.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,n=i._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(o=t.converter)||void 0===o?void 0:o.fromAttribute)?t.converter:f;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:y}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.4.1");const b=window,v=b.trustedTypes,x=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,$="?"+w,R=`<${$}>`,S=document,k=(t="")=>S.createComment(t),O=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,E=t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,C=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),A=/'/g,I=/"/g,D=/^(?:script|style|textarea|title)$/i,L=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),z=L(1),B=(L(2),Symbol.for("lit-noChange")),N=Symbol.for("lit-nothing"),M=new WeakMap,U=S.createTreeWalker(S,129,null,!1),H=(t,e)=>{const o=t.length-1,i=[];let n,r=2===e?"<svg>":"",a=P;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===P?"!--"===l[1]?a=_:void 0!==l[1]?a=C:void 0!==l[2]?(D.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=T):void 0!==l[3]&&(a=T):a===T?">"===l[0]?(a=null!=n?n:P,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?T:'"'===l[3]?I:A):a===I||a===A?a=T:a===_||a===C?a=P:(a=T,n=void 0);const p=a===T&&t[e+1].startsWith("/>")?" ":"";r+=a===P?o+R:c>=0?(i.push(s),o.slice(0,c)+"$lit$"+o.slice(c)+w+p):o+w+(-2===c?(i.push(void 0),e):p)}const s=r+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==x?x.createHTML(s):s,i]};class q{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[l,c]=H(t,e);if(this.el=q.createElement(l,o),U.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=U.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const o=c[r++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?K:"@"===e[1]?J:F})}else s.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(D.test(i.tagName)){const t=i.textContent.split(w),e=t.length-1;if(e>0){i.textContent=v?v.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],k()),U.nextNode(),s.push({type:2,index:++n});i.append(t[e],k())}}}else if(8===i.nodeType)if(i.data===$)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(w,t+1));)s.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,e){const o=S.createElement("template");return o.innerHTML=t,o}}function G(t,e,o=t,i){var n,r,a,s;if(e===B)return e;let l=void 0!==i?null===(n=o._$Co)||void 0===n?void 0:n[i]:o._$Cl;const c=O(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,i)),void 0!==i?(null!==(a=(s=o)._$Co)&&void 0!==a?a:s._$Co=[])[i]=l:o._$Cl=l),void 0!==l&&(e=G(t,l._$AS(t,e.values),l,i)),e}class X{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:o},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(o,!0);U.currentNode=n;let r=U.nextNode(),a=0,s=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new Y(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Z(r,this,t)),this.u.push(e),l=i[++s]}a!==(null==l?void 0:l.index)&&(r=U.nextNode(),a++)}return n}p(t){let e=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class Y{constructor(t,e,o,i){var n;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cm=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),O(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==B&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):E(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==N&&O(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:o,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(o);else{const t=new X(n,this),e=t.v(this.options);t.p(o),this.T(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new q(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new Y(this.O(k()),this.O(k()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,o,i,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const n=this.strings;let r=!1;if(void 0===n)t=G(this,t,e,0),r=!O(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const i=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=G(this,i[o+a],e,a),s===B&&(s=this._$AH[a]),r||(r=!O(s)||s!==this._$AH[a]),s===N?t=N:t!==N&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const V=v?v.emptyScript:"";class K extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class J extends F{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=G(this,t,e,0))&&void 0!==o?o:N)===B)return;const i=this._$AH,n=t===N&&i!==N||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==N&&(i===N||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}const Q={P:"$lit$",A:w,M:$,C:1,L:H,R:X,D:E,V:G,I:Y,H:F,N:K,U:J,B:W,F:Z},tt=b.litHtmlPolyfillSupport;var et,ot;null==tt||tt(q,Y),(null!==(g=b.litHtmlVersions)&&void 0!==g?g:b.litHtmlVersions=[]).push("2.4.0");class it extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new Y(e.insertBefore(k(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}it.finalized=!0,it._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:it});const nt=globalThis.litElementPolyfillSupport;var rt;null==nt||nt({LitElement:it}),(null!==(ot=globalThis.litElementVersions)&&void 0!==ot?ot:globalThis.litElementVersions=[]).push("3.2.2"),function(t){t.primary="primary",t.secondary="secondary",t.surface="surface",t.plain="plain"}(rt||(rt={}));class at{static getStyle(t){return t?t==rt.plain?z``:z` <style>
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
          </style>`:z``}static getOposite(t){return t==rt.plain?rt.surface:t==rt.primary||t==rt.primary?rt.secondary:t==rt.secondary?rt.primary:rt.plain}getParentTheme(t){let e=t;for(;null!=e;){if(null!=e.theme)return e.theme;e=e.parentElement}}}const st=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){customElements.define(t,e)}}})(t,e),lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function ct(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):lt(t,e)}function dt(t,e){return(({finisher:t,descriptor:e})=>(o,i)=>{var n;if(void 0===i){const i=null!==(n=o.originalKey)&&void 0!==n?n:o.key,r=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return null!=t&&(r.finisher=function(e){t(e,i)}),r}{const n=o.constructor;void 0!==e&&Object.defineProperty(o,i,e(i)),null==t||t(n,i)}})({descriptor:o=>{const i={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;i.get=function(){var o,i;return void 0===this[e]&&(this[e]=null!==(i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}var pt;null===(pt=window.HTMLSlotElement)||void 0===pt||pt.prototype.assignedElements;var ht=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ft=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ut=class extends it{constructor(){super(...arguments),this.theme=rt.surface,this.header="",this.opened=!1}render(){return z`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?z` <slot></slot>`:z``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};ut.styles=a`
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
  `,ht([ct({type:rt,converter:String}),ft("design:type",String)],ut.prototype,"theme",void 0),ht([ct({type:String}),ft("design:type",String)],ut.prototype,"header",void 0),ht([ct({type:Boolean}),ft("design:type",Boolean)],ut.prototype,"opened",void 0),ut=ht([st("nidoca-accordion-item")],ut);var mt,yt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},gt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.single="single",t.multi="multi"}(mt||(mt={}));let bt=class extends it{constructor(){super(...arguments),this.theme=rt.plain,this.accordionType=mt.single}updated(t){super.updated(t),t.forEach(((t,e)=>{if("theme"==e&&null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let e=0;e<t.length;e++){const o=t[e];o instanceof ut&&(o.theme=this.theme)}}}))}render(){return z`
      ${at.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case mt.single:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof ut&&i!=e&&(i.opened=!1)}}case mt.multi:}t.stopPropagation()}static example(t=""){return z`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${on.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${on.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${on.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${on.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};bt.styles=a`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,yt([ct({type:rt,converter:String}),gt("design:type",String)],bt.prototype,"theme",void 0),yt([ct({type:mt,converter:String}),gt("design:type",String)],bt.prototype,"accordionType",void 0),yt([dt("#accordionSlot"),gt("design:type",Object)],bt.prototype,"accordionSlot",void 0),bt=yt([st("nidoca-accordion")],bt);var vt,xt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},wt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.current=0]="current",t[t.completed=1]="completed",t[t.open=2]="open",t[t.finish=3]="finish"}(vt||(vt={}));let $t=class extends it{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return z`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${ro.none}"
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

          ${this.isLast?z``:z`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==vt.completed?"var(--app-color-text-primary)":t==vt.current?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==vt.finish?"var(--app-color-success)":t==vt.completed?"var(--mdc-theme-on-primary)":t==vt.current?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};$t.styles=a`
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
  `,xt([ct({type:String}),wt("design:type",String)],$t.prototype,"icon",void 0),xt([ct({type:String}),wt("design:type",String)],$t.prototype,"primaryText",void 0),xt([ct({type:Number}),wt("design:type",Object)],$t.prototype,"state",void 0),xt([ct({type:Boolean}),wt("design:type",Boolean)],$t.prototype,"isLast",void 0),$t=xt([st("nidoca-wizard-step")],$t);var Rt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let St=class extends it{render(){return z`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let i=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof $t&&(e.index=t,e.state==vt.current&&(i=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(i)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof $t&&void 0!==i.index&&(i.index<t?i.state=vt.completed:i.index==t?i.state=vt.current:i.state=vt.open)}}}};St.styles=a``,Rt([dt("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],St.prototype,"wizardSlot",void 0),St=Rt([st("nidoca-wizard")],St);var kt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ot=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let jt=class extends it{constructor(){super(...arguments),this.clickable=!0,this.theme=rt.surface,this.text=""}render(){return z`
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
    `}static example(t=""){return z`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};jt.styles=a`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }

    .clickable {
      cursor: pointer;
    }
  `,kt([ct({type:Boolean}),Ot("design:type",Boolean)],jt.prototype,"clickable",void 0),kt([ct({type:rt,converter:String}),Ot("design:type",String)],jt.prototype,"theme",void 0),kt([ct({type:String}),Ot("design:type",String)],jt.prototype,"text",void 0),jt=kt([st("nidoca-chip")],jt);var Et=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _t=class extends it{constructor(){super(...arguments),this.code="",this.theme=rt.plain}render(){return z`
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
    `}static example(t=""){return z`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};_t.styles=a`
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
  `,Et([ct({type:String}),Pt("design:type",String)],_t.prototype,"code",void 0),Et([ct({type:String}),Pt("design:type",String)],_t.prototype,"theme",void 0),_t=Et([st("nidoca-code")],_t);var Ct=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Tt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let At=class extends it{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const o=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?z`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:z``}calculatePositionStyle(t){let e="";if(t){const o=t.getBoundingClientRect();o.right>window.innerWidth/2?e+=`right:${window.innerWidth-o.right}px;`:e+=`left:${o.left}px;`,o.top>window.innerHeight/2?e+=`bottom:${o.height+window.innerHeight-o.top}px;`:e+=`top:${o.bottom}px;`}return e}};At.styles=a`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Ct([ct({type:Boolean}),Tt("design:type",Boolean)],At.prototype,"show",void 0),Ct([ct({type:Object}),Tt("design:type",Object)],At.prototype,"associatedElement",void 0),At=Ct([st("nidoca-elevation"),Tt("design:paramtypes",[])],At);var It=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Dt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Lt{}Lt.PROGRESS="PROGRESS",Lt.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let zt=class extends it{constructor(){super(...arguments),this.progressType=Lt.PROGRESS}render(){return z` <style>
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

      <progress class="${this.progressType}"></progress>`}};zt.styles=a``,It([ct({type:rt,converter:String}),Dt("design:type",Object)],zt.prototype,"theme",void 0),It([ct({type:Lt,converter:String}),Dt("design:type",String)],zt.prototype,"progressType",void 0),zt=It([st("nidoca-progress")],zt);var Bt,Nt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Mt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.contained="contained",t.outlined="outlined",t.text="text"}(Bt||(Bt={}));let Ut=class extends it{constructor(){super(...arguments),this.theme=rt.primary,this.buttonType=Bt.contained,this.icon="",this.text=""}render(){return z`
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
        ${this.icon?z` <nidoca-icon
              .clickable="${!1}"
              .icon="${this.icon}"
              style="padding-right:var(--space);"
            ></nidoca-icon>`:z``}

        <nidoca-text-button theme="${this.theme}"
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return z`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};Ut.styles=a`
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
  `,Nt([ct({type:rt,converter:String}),Mt("design:type",String)],Ut.prototype,"theme",void 0),Nt([ct({type:Bt,converter:String}),Mt("design:type",String)],Ut.prototype,"buttonType",void 0),Nt([ct({type:String}),Mt("design:type",String)],Ut.prototype,"icon",void 0),Nt([ct({type:String}),Mt("design:type",String)],Ut.prototype,"text",void 0),Ut=Nt([st("nidoca-button")],Ut);class Ht extends it{}var qt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Gt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xt=class extends it{constructor(){super(...arguments),this.autocomplete=!0}render(){return z`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const i=o.getOutputData();e[i.key]=i.value,t.append(i.key,i.value)}const o={};return o.jsonObject=e,o.formData=t,o}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const i=o[t];this.recursiveInputElementSearch(i,e)}return e}recursiveInputElementSearch(t,e){if(t instanceof Ht)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};Xt.styles=a`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,qt([ct({type:Boolean}),Gt("design:type",Boolean)],Xt.prototype,"autocomplete",void 0),qt([dt("#slotElement"),Gt("design:type",Object)],Xt.prototype,"slotElement",void 0),Xt=qt([st("nidoca-form")],Xt);const Yt=t=>(...e)=>({_$litDirective$:t,values:e});class Ft{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{I:Wt}=Q,Vt=()=>document.createComment(""),Kt=(t,e,o)=>{var i;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=n.insertBefore(Vt(),r),i=n.insertBefore(Vt(),r);o=new Wt(e,i,t,t.options)}else{const e=o._$AB.nextSibling,a=o._$AM,s=a!==t;if(s){let e;null===(i=o._$AQ)||void 0===i||i.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==a._$AU&&o._$AP(e)}if(e!==r||s){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return o},Jt=(t,e,o=t)=>(t._$AI(e,o),t),Zt={},Qt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const i=t._$AB.nextSibling;for(;o!==i;){const t=o.nextSibling;o.remove(),o=t}},te=(t,e,o)=>{const i=new Map;for(let n=e;n<=o;n++)i.set(t[n],n);return i},ee=Yt(class extends Ft{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}ht(t,e,o){let i;void 0===o?o=e:void 0!==e&&(i=e);const n=[],r=[];let a=0;for(const e of t)n[a]=i?i(e,a):a,r[a]=o(e,a),a++;return{values:r,keys:n}}render(t,e,o){return this.ht(t,e,o).values}update(t,[e,o,i]){var n;const r=t._$AH,{values:a,keys:s}=this.ht(e,o,i);if(!Array.isArray(r))return this.ut=s,a;const l=null!==(n=this.ut)&&void 0!==n?n:this.ut=[],c=[];let d,p,h=0,f=r.length-1,u=0,m=a.length-1;for(;h<=f&&u<=m;)if(null===r[h])h++;else if(null===r[f])f--;else if(l[h]===s[u])c[u]=Jt(r[h],a[u]),h++,u++;else if(l[f]===s[m])c[m]=Jt(r[f],a[m]),f--,m--;else if(l[h]===s[m])c[m]=Jt(r[h],a[m]),Kt(t,c[m+1],r[h]),h++,m--;else if(l[f]===s[u])c[u]=Jt(r[f],a[u]),Kt(t,r[h],r[f]),f--,u++;else if(void 0===d&&(d=te(s,u,m),p=te(l,h,f)),d.has(l[h]))if(d.has(l[f])){const e=p.get(s[u]),o=void 0!==e?r[e]:null;if(null===o){const e=Kt(t,r[h]);Jt(e,a[u]),c[u]=e}else c[u]=Jt(o,a[u]),Kt(t,r[h],o),r[e]=null;u++}else Qt(r[f]),f--;else Qt(r[h]),h++;for(;u<=m;){const e=Kt(t,c[m+1]);Jt(e,a[u]),c[u++]=e}for(;h<=f;){const t=r[h++];null!==t&&Qt(t)}return this.ut=s,((t,e=Zt)=>{t._$AH=e})(t,c),B}}),oe={},ie=Yt(class extends Ft{constructor(){super(...arguments),this.ot=oe}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((t,e)=>t===this.ot[e])))return B}else if(this.ot===e)return B;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});var ne=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ae=class extends Ht{constructor(){super(...arguments),this.theme=rt.surface,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return z` <style>
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
        ${this.trailingIcon?z` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:z``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${ie([this.value,this.options],(()=>z`
                ${ee(this.options,(t=>null==t?z` <option></option>`:this.isSelectedOption(t)?z` <option value="${t.key}" selected>${t.value}</option> `:z` <option value="${t.key}">${t.value}</option> `))}
              `))}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?z`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?z` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:z``}
              ${this.warningText?z` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:z``}
              ${this.errorText?z` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:z``}
            </div>
          `:z``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}static stringArrayToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),t.forEach((t=>{o.push({key:t,value:t})})),o}static toComboboxOptions(t=null,e=null){if(null==t)return[];const o=[];return Object.values(t).forEach((i=>{let n=String(Object.keys(t)[Object.values(t).indexOf(i)]);e&&(n=n.concat(e)),o.push({key:i,value:n})})),o}};ae.styles=a`
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
  `,ne([ct({type:rt,converter:String}),re("design:type",String)],ae.prototype,"theme",void 0),ne([ct({type:String}),re("design:type",String)],ae.prototype,"trailingIcon",void 0),ne([ct({type:String}),re("design:type",String)],ae.prototype,"label",void 0),ne([ct({type:String}),re("design:type",String)],ae.prototype,"errorText",void 0),ne([ct({type:String}),re("design:type",String)],ae.prototype,"infoText",void 0),ne([ct({type:String}),re("design:type",String)],ae.prototype,"warningText",void 0),ne([ct(),re("design:type",Object)],ae.prototype,"value",void 0),ne([ct({type:Array}),re("design:type",Array)],ae.prototype,"options",void 0),ne([ct({type:String}),re("design:type",String)],ae.prototype,"name",void 0),ne([ct({type:Boolean}),re("design:type",Boolean)],ae.prototype,"required",void 0),ne([ct({type:Boolean}),re("design:type",Boolean)],ae.prototype,"multiple",void 0),ne([ct({type:Number}),re("design:type",Number)],ae.prototype,"size",void 0),ne([dt("#selectElement"),re("design:type",Object)],ae.prototype,"selectElement",void 0),ae=ne([st("nidoca-form-combobox")],ae);const se=t=>null!=t?t:N;var le,ce=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},de=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.color="color",t.email="email",t.hidden="hidden",t.number="number",t.password="password",t.tel="tel",t.text="text",t.search="search",t.url="url",t.date="date",t.month="month",t.time="time",t.week="week"}(le||(le={}));let pe=class extends Ht{constructor(){super(...arguments),this.type=le.text,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=rt.surface}render(){return this.type==le.hidden?z`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:z` <style>
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
            ${this.trailingIcon?z` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:z``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${se(this.size)}"
                minlength="${se(this.minlength)}"
                maxlength="${se(this.maxlength)}"
                pattern="${se(this.pattern)}"
                min="${se(this.min)}"
                max="${se(this.max)}"
                step="${se(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?z`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?z` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:z``}
                  ${this.warningText?z` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:z``}
                  ${this.errorText?z` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:z``}
                </div>
              `:z``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:null==e?void 0:e.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};pe.styles=a`
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
  `,ce([ct({type:le,converter:String}),de("design:type",String)],pe.prototype,"type",void 0),ce([ct({type:String}),de("design:type",String)],pe.prototype,"label",void 0),ce([ct({type:String}),de("design:type",String)],pe.prototype,"placeholder",void 0),ce([ct({type:String}),de("design:type",String)],pe.prototype,"trailingIcon",void 0),ce([ct({type:String}),de("design:type",String)],pe.prototype,"errorText",void 0),ce([ct({type:String}),de("design:type",String)],pe.prototype,"infoText",void 0),ce([ct({type:String}),de("design:type",String)],pe.prototype,"warningText",void 0),ce([ct({type:String}),de("design:type",String)],pe.prototype,"name",void 0),ce([ct(),de("design:type",String)],pe.prototype,"value",void 0),ce([ct({type:Boolean}),de("design:type",Boolean)],pe.prototype,"required",void 0),ce([ct({type:Boolean}),de("design:type",Boolean)],pe.prototype,"disabled",void 0),ce([ct({type:Boolean}),de("design:type",Boolean)],pe.prototype,"checked",void 0),ce([ct({type:Number}),de("design:type",Object)],pe.prototype,"maxlength",void 0),ce([ct({type:Number}),de("design:type",Object)],pe.prototype,"minlength",void 0),ce([ct({type:Number}),de("design:type",Object)],pe.prototype,"min",void 0),ce([ct({type:Number}),de("design:type",Object)],pe.prototype,"max",void 0),ce([ct({type:String}),de("design:type",Object)],pe.prototype,"step",void 0),ce([ct({type:Number}),de("design:type",Object)],pe.prototype,"size",void 0),ce([ct({type:String}),de("design:type",Object)],pe.prototype,"pattern",void 0),ce([dt("#inputElement"),de("design:type",Object)],pe.prototype,"inputElement",void 0),ce([ct({type:rt,converter:String}),de("design:type",String)],pe.prototype,"theme",void 0),pe=ce([st("nidoca-form-text")],pe);let he=class extends pe{constructor(){super(),this.type=le.date}};he=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-form-date"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],he);var fe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ue=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let me=class extends Ht{constructor(){super(...arguments),this.theme=rt.surface,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return z` <style>
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

      ${this.infoText||this.warningText||this.errorText?z`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?z` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:z``}
              ${this.warningText?z` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:z``}
              ${this.errorText?z` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:z``}
            </div>
          `:z``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};me.styles=a`
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
  `,fe([ct({type:rt,converter:String}),ue("design:type",String)],me.prototype,"theme",void 0),fe([ct({type:String}),ue("design:type",String)],me.prototype,"infoText",void 0),fe([ct({type:String}),ue("design:type",String)],me.prototype,"warningText",void 0),fe([ct({type:String}),ue("design:type",String)],me.prototype,"errorText",void 0),fe([ct({type:String}),ue("design:type",String)],me.prototype,"name",void 0),fe([ct(),ue("design:type",String)],me.prototype,"value",void 0),fe([ct({type:String}),ue("design:type",String)],me.prototype,"label",void 0),fe([ct({type:Boolean}),ue("design:type",Boolean)],me.prototype,"required",void 0),fe([ct({type:String}),ue("design:type",String)],me.prototype,"placeholder",void 0),fe([ct({type:Boolean}),ue("design:type",Boolean)],me.prototype,"disabled",void 0),fe([ct({type:Number}),ue("design:type",Number)],me.prototype,"rows",void 0),fe([dt("#inputElement"),ue("design:type",Object)],me.prototype,"inputElement",void 0),me=fe([st("nidoca-form-textarea")],me);var ye=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ge=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let be=class extends Ht{constructor(){super(...arguments),this.theme=rt.primary}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return z`
      <nidoca-box theme="${se(this.theme)}">
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
    `}upload(){var t;null===(t=this.inputElement)||void 0===t||t.click()}};be.styles=a`
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
  `,ye([ct({type:rt,converter:String}),ge("design:type",Object)],be.prototype,"theme",void 0),ye([dt("#inputElement"),ge("design:type",Object)],be.prototype,"inputElement",void 0),be=ye([st("nidoca-form-upload")],be);var ve=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let we=class extends Ht{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=rt.primary,this.theme=at.prototype.getParentTheme(this)||rt.plain}render(){return z`
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

        ${this.infoText.length>0?z` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:z``}

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

      ${this.warningText?z` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:z``}
      ${this.errorText?z` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:z``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};we.styles=a`
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
  `,ve([ct({type:String}),xe("design:type",String)],we.prototype,"name",void 0),ve([ct({type:String}),xe("design:type",String)],we.prototype,"label",void 0),ve([ct({type:String}),xe("design:type",String)],we.prototype,"infoText",void 0),ve([ct({type:String}),xe("design:type",String)],we.prototype,"errorText",void 0),ve([ct({type:String}),xe("design:type",String)],we.prototype,"warningText",void 0),ve([ct({type:Boolean}),xe("design:type",Boolean)],we.prototype,"required",void 0),ve([ct({type:Boolean}),xe("design:type",Boolean)],we.prototype,"disabled",void 0),ve([ct({type:Boolean}),xe("design:type",Boolean)],we.prototype,"checked",void 0),ve([ct({type:String}),xe("design:type",String)],we.prototype,"theme",void 0),ve([dt("#inputElement"),xe("design:type",Object)],we.prototype,"inputElement",void 0),we=ve([st("nidoca-form-switch"),xe("design:paramtypes",[])],we);var $e=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Se=class extends it{constructor(){super(...arguments),this.theme=rt.primary,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return z`
      <nidoca-box theme="${se(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${le.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Se.styles=a`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,$e([ct({type:rt,converter:String}),Re("design:type",Object)],Se.prototype,"theme",void 0),$e([ct({type:String,converter:String}),Re("design:type",String)],Se.prototype,"label",void 0),$e([ct({type:String,converter:String}),Re("design:type",String)],Se.prototype,"emailLabel",void 0),$e([ct({type:String,converter:String}),Re("design:type",String)],Se.prototype,"buttonLabel",void 0),$e([dt("#form"),Re("design:type",Object)],Se.prototype,"formComponent",void 0),Se=$e([st("nidoca-form-newsletter")],Se);var ke=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Oe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let je=class extends it{constructor(){super(...arguments),this.theme=rt.primary,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return z`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${le.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};je.styles=a`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,ke([ct({type:rt,converter:String}),Oe("design:type",String)],je.prototype,"theme",void 0),ke([ct({type:String,converter:String}),Oe("design:type",String)],je.prototype,"label",void 0),ke([ct({type:String,converter:String}),Oe("design:type",String)],je.prototype,"emailLabel",void 0),ke([ct({type:String,converter:String}),Oe("design:type",String)],je.prototype,"buttonLabel",void 0),ke([dt("#form"),Oe("design:type",Object)],je.prototype,"formComponent",void 0),je=ke([st("nidoca-form-reset-password")],je);var Ee=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Pe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _e=class extends it{constructor(){super(...arguments),this.theme=rt.surface,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return z`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${le.password}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${le.password}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${le.password}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?z` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:z``}
        ${this.showErrorMessagePasswordDiff?z` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:z``}
      </nidoca-box>
    `}changePassword(){var t,e,o,i,n;(null===(t=this.formComponent)||void 0===t?void 0:t.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(e=this.newPasswordInputField)||void 0===e?void 0:e.getOutputData().value)!=(null===(o=this.repeatNewPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(i=this.oldPasswordInputField)||void 0===i?void 0:i.getOutputData().value)==(null===(n=this.newPasswordInputField)||void 0===n?void 0:n.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};_e.styles=a`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Ee([ct({type:rt,converter:String}),Pe("design:type",String)],_e.prototype,"theme",void 0),Ee([ct({type:String,converter:String}),Pe("design:type",String)],_e.prototype,"label",void 0),Ee([ct({type:String,converter:String}),Pe("design:type",String)],_e.prototype,"oldPasswordLabel",void 0),Ee([ct({type:String,converter:String}),Pe("design:type",String)],_e.prototype,"newPasswordLabel",void 0),Ee([ct({type:String,converter:String}),Pe("design:type",String)],_e.prototype,"repeatNewPasswordLabel",void 0),Ee([ct({type:String,converter:String}),Pe("design:type",String)],_e.prototype,"buttonLabel",void 0),Ee([dt("#form"),Pe("design:type",Object)],_e.prototype,"formComponent",void 0),Ee([dt("#oldPassword"),Pe("design:type",Object)],_e.prototype,"oldPasswordInputField",void 0),Ee([dt("#newPassword"),Pe("design:type",Object)],_e.prototype,"newPasswordInputField",void 0),Ee([dt("#repeatNewPassword"),Pe("design:type",Object)],_e.prototype,"repeatNewPasswordInputField",void 0),Ee([ct(),Pe("design:type",String)],_e.prototype,"errorMessageSamePasswordLabel",void 0),Ee([ct(),Pe("design:type",String)],_e.prototype,"errorMessagePasswordDiffLabel",void 0),_e=Ee([st("nidoca-form-change-password")],_e);var Ce=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Te=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ae=class extends it{constructor(){super(...arguments),this.theme=rt.primary,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return z`
      <nidoca-box theme="${se(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${le.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${le.password}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Ae.styles=a`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Ce([ct({type:rt,converter:String}),Te("design:type",Object)],Ae.prototype,"theme",void 0),Ce([ct({type:String,converter:String}),Te("design:type",String)],Ae.prototype,"label",void 0),Ce([ct({type:String,converter:String}),Te("design:type",String)],Ae.prototype,"emailLabel",void 0),Ce([ct({type:String,converter:String}),Te("design:type",String)],Ae.prototype,"passwordLabel",void 0),Ce([ct({type:String,converter:String}),Te("design:type",String)],Ae.prototype,"buttonLabel",void 0),Ce([dt("#form"),Te("design:type",Object)],Ae.prototype,"formComponent",void 0),Ae=Ce([st("nidoca-form-register")],Ae);var Ie=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let De=class extends it{constructor(){super(...arguments),this.code=""}render(){return z``}};De.styles=a``,Ie([ct({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],De.prototype,"code",void 0),De=Ie([st("nidoca-upload")],De);var Le=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ze=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Be=class extends it{constructor(){super(...arguments),this.theme=rt.plain,this.text=""}render(){return z`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};Be.styles=a`
    :host,
    ::slotted(:host) {
      display: block;
      width: 100%;
      padding-right: var(--space-2);
      padding-left: var(--space-2);
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
      text-align: center;
    }
    ::slotted(slot),
    div {
      display: block;
    }
    .hr {
      border-bottom-style: solid;
      border-width: thin;
    }
  `,Le([ct({type:rt,converter:String}),ze("design:type",String)],Be.prototype,"theme",void 0),Le([ct({type:String,converter:String}),ze("design:type",String)],Be.prototype,"text",void 0),Be=Le([st("nidoca-hr")],Be);var Ne=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Me=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ue=class extends it{constructor(){super(...arguments),this.text="",this.icon=""}render(){return z`
      <div class="container">
        ${this.icon?z` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:z``}
        ${this.text?z` <nidoca-text-button>${this.text}</nidoca-text-button>`:z``}
        <slot></slot>
      </div>
    `}static example(t=""){return z`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};Ue.styles=a`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,Ne([ct({type:String}),Me("design:type",String)],Ue.prototype,"text",void 0),Ne([ct({type:String}),Me("design:type",String)],Ue.prototype,"icon",void 0),Ue=Ne([st("nidoca-menu-area")],Ue);var He=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},qe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ge=class extends it{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1,this.theme=rt.surface}render(){return z`
      <style>
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?z` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:z``}
        ${this.text?z` <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>`:z``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return z`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};Ge.styles=a`
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
  `,He([ct({type:String}),qe("design:type",String)],Ge.prototype,"text",void 0),He([ct({type:String}),qe("design:type",String)],Ge.prototype,"icon",void 0),He([ct({type:Boolean}),qe("design:type",Boolean)],Ge.prototype,"selected",void 0),He([ct({type:String}),qe("design:type",String)],Ge.prototype,"theme",void 0),Ge=He([st("nidoca-menu-item")],Ge);var Xe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fe=class extends it{constructor(){super(...arguments),this.theme=rt.surface}render(){return z` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach(((t,e)=>{if("theme"==e&&null!=this.slotElement){const t=this.slotElement.assignedElements();for(let e=0;e<t.length;e++){const o=t[e];o instanceof Ge&&(o.theme=this.theme)}}}))}firstUpdated(){this.addEventListener("click",(t=>{if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof Ge){const e=i.getBoundingClientRect();e.left<t.x&&e.right>t.x&&(e.top<t.y&&e.bottom>t.y?i.selected=!0:i.selected=!1)}}}}))}static example(t=""){return z`
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
    `}};Fe.styles=a`
    :host,
    slot {
      display: block;
    }
  `,Xe([ct({type:String}),Ye("design:type",String)],Fe.prototype,"theme",void 0),Xe([dt("#slotElement"),Ye("design:type",Object)],Fe.prototype,"slotElement",void 0),Fe=Xe([st("nidoca-menu")],Fe);var We=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ve=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ke=class extends it{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return z`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,i,n,r){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(i).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(r).concat(";")}};Ke.styles=a`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,We([ct({type:String}),Ve("design:type",String)],Ke.prototype,"height",void 0),We([ct({type:String}),Ve("design:type",String)],Ke.prototype,"width",void 0),We([ct({type:String}),Ve("design:type",String)],Ke.prototype,"left",void 0),We([ct({type:String}),Ve("design:type",String)],Ke.prototype,"top",void 0),We([ct({type:String}),Ve("design:type",String)],Ke.prototype,"right",void 0),We([ct({type:String}),Ve("design:type",String)],Ke.prototype,"bottom",void 0),Ke=We([st("nidoca-layout-floating")],Ke);var Je=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ze=class extends it{constructor(){super(...arguments),this.theme=rt.plain}render(){return z`
      ${at.getStyle(this.theme)}
      <slot></slot>
    `}};Ze.styles=a`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,Je([ct({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ze.prototype,"theme",void 0),Ze=Je([st("nidoca-container")],Ze);var Qe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},to=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let eo=class extends it{constructor(){super(),this.hideSidebox=!0,this.theme=at.prototype.getParentTheme(this)||rt.plain}render(){return z` <style>
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
      ${this.hideSidebox?z``:z` <slot class="sidebox" name="sidebox"></slot>`}`}};eo.styles=a`
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
  `,Qe([ct({type:rt,converter:String}),to("design:type",String)],eo.prototype,"theme",void 0),Qe([ct({type:Boolean,converter:String}),to("design:type",Boolean)],eo.prototype,"hideSidebox",void 0),eo=Qe([st("nidoca-split-screen"),to("design:paramtypes",[])],eo);var oo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let no=class extends it{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.title=""}render(){return z`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.title}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}static example(t=""){return z`
      <nidoca-icon
        slot="${t}"
        style="padding-left:var(--space)"
        clickable
        icon="menu"
        title="Mein Icon"
      ></nidoca-icon>
    `}};no.styles=a`
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
  `,oo([ct({type:String}),io("design:type",String)],no.prototype,"icon",void 0),oo([ct({type:Boolean}),io("design:type",Boolean)],no.prototype,"clickable",void 0),oo([ct({type:Boolean}),io("design:type",Boolean)],no.prototype,"deactivated",void 0),oo([ct({type:String}),io("design:type",String)],no.prototype,"title",void 0),no=oo([st("nidoca-icon")],no);var ro,ao=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},so=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.none="none",t.shadow_1="shadow_1",t.shadow_2="shadow_2",t.shadow_3="shadow_3"}(ro||(ro={}));let lo=class extends it{constructor(){super(...arguments),this.theme=rt.primary,this.shadowType=ro.shadow_1,this.icon="",this.clickable=!0,this.deactivated=!1,this.title=""}render(){return z`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <span class="iconExtended icon ${this.shadowType}">
        <nidoca-icon
          .deactivated="${this.deactivated}"
          .clickable="${this.clickable}"
          icon="${this.icon}"
        ></nidoca-icon>
      </span>
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}static example(t=""){return z`
      <nidoca-icon-extended
        slot="${t}"
        style="padding-left:var(--space)"
        clickable
        icon="home"
        title="Mein Icon"
      ></nidoca-icon-extended>
    `}};lo.styles=a`
    .icon {
      padding: var(--space);
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }

    .default {
      -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .shadow_1 {
      -moz-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    .shadow_2 {
      -moz-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .shadow_3 {
      -moz-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      -webkit-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
    }
  `,ao([ct({type:String}),so("design:type",String)],lo.prototype,"theme",void 0),ao([ct({type:Object}),so("design:type",String)],lo.prototype,"shadowType",void 0),ao([ct({type:String}),so("design:type",String)],lo.prototype,"icon",void 0),ao([ct({type:Boolean}),so("design:type",Boolean)],lo.prototype,"clickable",void 0),ao([ct({type:Boolean}),so("design:type",Boolean)],lo.prototype,"deactivated",void 0),ao([ct({type:String}),so("design:type",String)],lo.prototype,"title",void 0),lo=ao([st("nidoca-icon-extended")],lo);var co=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let po=class extends it{render(){return z`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};po.styles=a`
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
  `,co([dt("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],po.prototype,"rippleContainerElement",void 0),po=co([st("nidoca-ripple")],po);var ho=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},fo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let uo=class extends it{constructor(){super(...arguments),this.src="",this.width="auto",this.height="auto",this.zoom=!1}render(){return this.src?z`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:z``}static example(t=""){return z`<nidoca-img width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img>`}};uo.styles=a`
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
  `,ho([ct({type:String}),fo("design:type",String)],uo.prototype,"src",void 0),ho([ct({type:String}),fo("design:type",String)],uo.prototype,"width",void 0),ho([ct({type:String}),fo("design:type",String)],uo.prototype,"height",void 0),ho([ct({type:Boolean}),fo("design:type",Boolean)],uo.prototype,"zoom",void 0),uo=ho([st("nidoca-img")],uo);let mo=class extends uo{static example(t=""){return z`<nidoca-img-round width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img-round>`}};mo.styles=a`
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
  `,mo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-img-round")],mo);var yo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},go=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let bo=class extends it{constructor(){super(...arguments),this.theme=rt.plain}render(){return z`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:z``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();for(let t=0;t<o.length;t++){const e=o[t];if(e instanceof uo){null==this.selected&&0==t&&(this.selected=e.cloneNode(!0)),e.addEventListener("click",(t=>{t.target&&(this.selected=t.target.cloneNode(!0))})),e.width="148px";const o=e.classList;o.contains("img")||o.add("img")}}}};bo.styles=a`
    :host,
    ::slotted(:host) {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      align-self: center;
    }

    slot,
    ::slotted(slot) {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      width: 100%;
    }

    ::slotted(.img) {
      cursor: pointer;
    }

    .container {
      text-align: center;
    }
  `,yo([ct({type:rt,converter:String}),go("design:type",String)],bo.prototype,"theme",void 0),yo([ct({state:!0}),go("design:type",Object)],bo.prototype,"selected",void 0),bo=yo([st("nidoca-img-slider")],bo);var vo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let xo=class extends it{constructor(){super(...arguments),this.src=""}render(){return z`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};xo.styles=a``,vo([ct({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],xo.prototype,"src",void 0),xo=vo([st("nidoca-movie")],xo);var wo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},$o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ro=class extends it{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return z`
      <nidoca-form-text
        theme="${se(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${le.number}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};Ro.styles=a`
    :host {
      display: block;
      width: 100%;
    }
  `,wo([ct({type:rt,converter:String}),$o("design:type",Object)],Ro.prototype,"theme",void 0),wo([ct({type:String}),$o("design:type",String)],Ro.prototype,"label",void 0),wo([ct({type:String}),$o("design:type",String)],Ro.prototype,"placeholder",void 0),wo([ct({type:String}),$o("design:type",String)],Ro.prototype,"name",void 0),wo([ct({type:Number}),$o("design:type",Number)],Ro.prototype,"min",void 0),wo([ct({type:Number}),$o("design:type",Number)],Ro.prototype,"max",void 0),wo([ct({type:String}),$o("design:type",String)],Ro.prototype,"errorText",void 0),wo([dt("#inputfield"),$o("design:type",Object)],Ro.prototype,"inputfield",void 0),Ro=wo([st("nidoca-form-captcha")],Ro);var So=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ko=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oo=class extends it{constructor(){super(...arguments),this.text="",this.href="",this.targetType="_self"}render(){return z`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};Oo.styles=a`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,So([ct({type:String}),ko("design:type",String)],Oo.prototype,"text",void 0),So([ct({type:String}),ko("design:type",String)],Oo.prototype,"href",void 0),So([ct({type:String}),ko("design:type",String)],Oo.prototype,"targetType",void 0),Oo=So([st("nidoca-link")],Oo);var jo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Eo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Po=class extends it{constructor(){super(...arguments),this.theme=rt.surface,this.primaryText="",this.secondaryText="",this.selected=!1}render(){return z`
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
          ${this.primaryText?z` <nidoca-text-body theme="${this.theme}" class="item">${this.primaryText} </nidoca-text-body>`:z``}
          <slot></slot>
          ${this.secondaryText?z` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-caption>`:z``}
          <slot name="secondary"></slot>
        </div>
        <slot name="right" class="item right"></slot>
      </div>
    `}switchSelected(){this.selected=Boolean(!this.selected),this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this.selected,bubbles:!0,composed:!0}))}static example(t=""){return z`<nidoca-list-item
      theme="primary"
      slot="${t}"
      primaryText="List Item"
      secondaryText="List Item Secondary Text"
    >
      ${mo.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};Po.styles=a`
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
  `,jo([ct({type:rt,converter:String}),Eo("design:type",String)],Po.prototype,"theme",void 0),jo([ct({type:String}),Eo("design:type",String)],Po.prototype,"primaryText",void 0),jo([ct({type:String}),Eo("design:type",String)],Po.prototype,"secondaryText",void 0),jo([ct({type:Boolean}),Eo("design:type",Boolean)],Po.prototype,"selected",void 0),Po=jo([st("nidoca-list-item")],Po);var _o=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Co=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let To=class extends it{constructor(){super(...arguments),this.theme=rt.surface,this.multiselect=!1}updated(t){super.updated(t),t.forEach(((t,e)=>{"theme"==e&&this.getItems().forEach((t=>{t.theme=this.theme}))}))}render(){return z`
      <slot
        @nidoca-event-list-item-clicked="${t=>{this.multiselect||(this.unselectAll(),t.target.selected=!0)}}"
        id="slotElement"
      ></slot>
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof Po&&t.push(i)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof Po&&i.selected&&t.push(i)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let o=0;for(let i=0;i<e.length;i++){const n=e[i];n instanceof Po&&(n.selected&&t.push(o),o++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){this.getItems().forEach((t=>{t.selected=!1}))}static example(){return z`<nidoca-list theme="primary">
      ${Do.example()} ${Po.example()} ${Po.example()} ${Po.example()}
    </nidoca-list>`}};To.styles=a`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,_o([ct({type:rt,converter:String}),Co("design:type",String)],To.prototype,"theme",void 0),_o([ct({type:Boolean}),Co("design:type",Boolean)],To.prototype,"multiselect",void 0),_o([dt("#slotElement"),Co("design:type",Object)],To.prototype,"slotElement",void 0),To=_o([st("nidoca-list")],To);var Ao=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Do=class extends it{constructor(){super(...arguments),this.theme=rt.surface,this.text=""}render(){return z`
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
    `}static example(){return z`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};Do.styles=a`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,Ao([ct({type:rt,converter:String}),Io("design:type",String)],Do.prototype,"theme",void 0),Ao([ct({type:String}),Io("design:type",String)],Do.prototype,"text",void 0),Do=Ao([st("nidoca-list-section")],Do);var Lo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},zo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Bo=class extends it{constructor(){super(...arguments),this.theme=rt.primary,this.prominent=!1}render(){return z`
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
      ${this.prominent?z` <slot class="prominent" name="prominent"></slot>`:z``}
    `}static example(t=""){return z`
      <nidoca-top-app-bar slot="${t}" style="min-height: 48px;" theme="primary" prominent>
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>
        <nidoca-search-bar theme="primary" slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>
    `}};Bo.styles=a`
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
  `,Lo([ct({type:String,converter:String}),zo("design:type",String)],Bo.prototype,"theme",void 0),Lo([ct({type:Boolean}),zo("design:type",Boolean)],Bo.prototype,"prominent",void 0),Bo=Lo([st("nidoca-top-app-bar")],Bo);var No=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Mo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Uo=class extends it{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new no],["row 2",new no]],this.theme=rt.plain}render(){return z`
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
            ${ie([this.headers],(()=>z` ${ee(this.headers,(t=>z` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${ie([this.rows],(()=>z`
                  ${ee(this.rows,(t=>z`
                        <tr>
                          ${ee(t,(t=>z` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Uo.styles=a`
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
  `,No([ct({type:Array}),Mo("design:type",Array)],Uo.prototype,"headers",void 0),No([ct({type:Array}),Mo("design:type",Array)],Uo.prototype,"rows",void 0),No([ct({type:rt,converter:String}),Mo("design:type",String)],Uo.prototype,"theme",void 0),Uo=No([st("nidoca-table")],Uo);var Ho=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let qo=class extends it{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?z` <slot></slot>`:z``}};qo.styles=a`
    :host,
    slot {
      display: block;
    }
  `,Ho([ct({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],qo.prototype,"selected",void 0),qo=Ho([st("nidoca-tab-content")],qo);var Go=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Xo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Yo=class extends it{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=rt.surface}render(){return z`
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
        ${this.text?z` <nidoca-text text="${this.text}"></nidoca-text> `:z``}
        <slot></slot>
      </div>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Yo.styles=a`
    :host {
      display: block;
      margin-right: var(--space);
      overflow: hidden;
    }

    .container {
      box-sizing: border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }

    slot {
      display: block;
    }
  `,Go([ct({type:Boolean}),Xo("design:type",Boolean)],Yo.prototype,"selected",void 0),Go([ct({type:String}),Xo("design:type",String)],Yo.prototype,"text",void 0),Go([ct({type:String}),Xo("design:type",String)],Yo.prototype,"theme",void 0),Yo=Go([st("nidoca-tab")],Yo);var Fo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Wo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vo=class extends it{constructor(){super(...arguments),this.theme=rt.surface,this.tabIndex=0}render(){return z`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,o=t[this.tabIndex];for(let i=0;i<t.length;i++){const n=t[i];n instanceof Yo&&(n.theme=this.theme,n.style.width=String(e).concat("%"),n==o?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof qo&&(this.tabIndex==t?i.selected=!0:i.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof Yo&&i==t){this.tabIndex=o;break}}}}static example(t=""){return z`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${on.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${on.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${on.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};Vo.styles=a`
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
      display: flex;
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      align-items: end;
      justify-content: center;
    }
  `,Fo([dt("#tabSlot"),Wo("design:type",Object)],Vo.prototype,"tabSlot",void 0),Fo([dt("#tabContentSlot"),Wo("design:type",Object)],Vo.prototype,"tabContentSlot",void 0),Fo([ct({type:String}),Wo("design:type",String)],Vo.prototype,"theme",void 0),Fo([ct({type:Number}),Wo("design:type",Number)],Vo.prototype,"tabIndex",void 0),Vo=Fo([st("nidoca-tabs")],Vo);var Ko=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Jo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Zo=class extends it{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(t=>{if(!this.hideLeft&&this.leftElement){console.log("close");const e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}}))}updated(t){super.updated(t)}render(){return z`
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
    `}};Zo.styles=a`
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
  `,Ko([ct({type:Boolean}),Jo("design:type",Boolean)],Zo.prototype,"hideLeft",void 0),Ko([ct({type:Boolean}),Jo("design:type",Boolean)],Zo.prototype,"prominent",void 0),Ko([dt("#header"),Jo("design:type",Object)],Zo.prototype,"headerElement",void 0),Ko([dt("#left"),Jo("design:type",Object)],Zo.prototype,"leftElement",void 0),Ko([dt("#content"),Jo("design:type",Object)],Zo.prototype,"contentElement",void 0),Zo=Ko([st("nidoca-template"),Jo("design:paramtypes",[])],Zo);var Qo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ti=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ei=class extends it{firstUpdated(t){super.firstUpdated(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((t=>{this.videoElement&&(this.videoElement.srcObject=t)}))}render(){return z`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){const t=this.canvasElement.getContext("2d");if(t){t.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);const e=this.canvasElement.toDataURL("image/jpeg");console.log(e)}}}};ei.styles=a``,Qo([dt("#video"),ti("design:type",Object)],ei.prototype,"videoElement",void 0),Qo([dt("#canvas"),ti("design:type",Object)],ei.prototype,"canvasElement",void 0),Qo([dt("#click-photo"),ti("design:type",Object)],ei.prototype,"buttonElement",void 0),ei=Qo([st("nidoca-video")],ei);var oi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ii=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ni=class extends it{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return z`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((t=>z`${t}`))}
    `}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"src"==e&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((t=>{const e=document.createElement("canvas");e.width=t[0],e.height=t[1];const o=e.getContext("2d");o&&this.img&&(this.img.crossOrigin="anonymous",o.drawImage(this.img,0,0,t[0],t[1]),e.toBlob((t=>{}),"image/webp")),this.canvasElements.push(e)})),this.requestUpdate()})}};ni.styles=a``,oi([ct({type:String}),ii("design:type",String)],ni.prototype,"src",void 0),oi([dt("#img"),ii("design:type",Object)],ni.prototype,"img",void 0),ni=oi([st("nidoca-svg-2-webp")],ni);var ri=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let si=class extends it{constructor(){super(...arguments),this.theme=rt.surface,this.text=""}render(){return z`<style>
        slot {
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}static example(t=""){return z`
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
    `}};si.styles=a`
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
  `,ri([ct({type:rt,converter:String}),ai("design:type",Object)],si.prototype,"theme",void 0),ri([ct({type:String}),ai("design:type",String)],si.prototype,"text",void 0),si=ri([st("nidoca-text")],si);let li=class extends si{render(){return z` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};li.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 105%;
    }
  `,li=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-body")],li);let ci=class extends si{render(){return z`${super.render()}`}};ci.styles=a`
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
  `,ci=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-button")],ci);let di=class extends si{};di.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,di=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-overline")],di);let pi=class extends si{render(){return z` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};pi.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,pi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-subtitle")],pi);let hi=class extends si{render(){return z`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};hi.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,hi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-caption")],hi);let fi=class extends hi{render(){return z`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};fi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-error")],fi);let ui=class extends hi{render(){return z`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};ui=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-success")],ui);let mi=class extends hi{render(){return z`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};mi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-warning")],mi);let yi=class extends hi{render(){return z`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};yi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-info")],yi);let gi=class extends si{};gi.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,gi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-h1")],gi);let bi=class extends si{};bi.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `,bi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-h2")],bi);let vi=class extends si{};vi.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,vi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-h3")],vi);let xi=class extends si{};xi.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,xi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-h4")],xi);let wi=class extends si{};wi.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,wi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-h5")],wi);let $i=class extends si{};$i.styles=a`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,$i=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-text-h6")],$i);var Ri=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Si=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ki=class extends it{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=rt.surface}render(){return z`
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
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}static example(t=""){return z`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};ki.styles=a`
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
  `,Ri([ct({type:String}),Si("design:type",String)],ki.prototype,"value",void 0),Ri([ct({type:String}),Si("design:type",String)],ki.prototype,"placeholder",void 0),Ri([ct({type:Boolean}),Si("design:type",Boolean)],ki.prototype,"disabled",void 0),Ri([dt("#inputElement"),Si("design:type",Object)],ki.prototype,"inputElement",void 0),Ri([ct({type:rt,converter:String}),Si("design:type",String)],ki.prototype,"theme",void 0),ki=Ri([st("nidoca-search-bar")],ki);var Oi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ji=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Ei{}Ei.CENTER="CENTER",Ei.LEFT="LEFT",Ei.RIGHT="RIGHT",Ei.TOP="TOP",Ei.BOTTOM="BOTTOM",Ei.SLIDE_CENTER="SLIDE_CENTER",Ei.SLIDE_LEFT="SLIDE_LEFT",Ei.SLIDE_RIGHT="SLIDE_RIGHT",Ei.SLIDE_TOP="SLIDE_TOP",Ei.SLIDE_BOTTOM="SLIDE_BOTTOM";let Pi=class extends it{constructor(){super(...arguments),this.transitionType=Ei.CENTER,this.duration=.5}render(){return z` <div class="${se(this.transitionType)}"><slot></slot></div> `}};Pi.styles=a`
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
  `,Oi([ct({type:String}),ji("design:type",String)],Pi.prototype,"transitionType",void 0),Oi([ct({type:Number}),ji("design:type",Number)],Pi.prototype,"duration",void 0),Pi=Oi([st("nidoca-transition")],Pi);var _i=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ci=class extends it{constructor(){super(...arguments),this.show=!1}render(){return this.show?z`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${Ei.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:z``}};Ci.styles=a`
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
  `,_i([ct({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Ci.prototype,"show",void 0),Ci=_i([st("nidoca-dialog")],Ci);var Ti=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ii=class extends it{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return z`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Bt.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Bt.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};Ii.styles=a``,Ti([ct({type:Boolean}),Ai("design:type",Boolean)],Ii.prototype,"show",void 0),Ti([ct({type:String}),Ai("design:type",String)],Ii.prototype,"title",void 0),Ti([ct({type:String}),Ai("design:type",String)],Ii.prototype,"description",void 0),Ti([ct({type:String}),Ai("design:type",String)],Ii.prototype,"labelButtonYes",void 0),Ti([ct({type:String}),Ai("design:type",String)],Ii.prototype,"labelButtonNo",void 0),Ii=Ti([st("nidoca-dialog-decision")],Ii);var Di=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Li=class extends it{constructor(){super(...arguments),this.icon=""}render(){return z`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `}static example(t="",e="surface"){return z`
      <nidoca-infobox slot="${t}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${e}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${e}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `}};Li.styles=a`
    :host {
      display: block;
      text-align: center;
    }
    slot {
      display: block;
      padding-top: var(--icon-size);
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-bottom: var(--space-2);
    }

    .card {
      display: block;
      margin-top: calc(((var(--icon-size) / 2) +var(--space)) * -1);
    }
  `,Di([ct({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Li.prototype,"icon",void 0),Li=Di([st("nidoca-infobox")],Li);var zi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Bi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ni=class extends it{constructor(){super(...arguments),this.theme=rt.surface,this.src="",this.title="",this.subtitle=""}render(){return z`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.src}"></nidoca-img-round>
                <div style="padding: var(--space);">
                <nidoca-text-body style="text-align:center;" theme="${this.theme}">${this.title}</nidoca-text-body>
                <nidoca-text-caption style="text-align:center;" theme="${this.theme}">${this.subtitle}</nidoca-text-caption>

  </div>
            </div>
            </div>`}static example(t=""){return z`<nidoca-avatar
      width="64px"
      width="64px"
      slot="${t}"
      title="Dominik Bruhn"
      subtitle="Softwareentwickler"
      src="face.jpg"
      >Dominik Bruhn</nidoca-avatar
    >`}};Ni.styles=a`
    :host {
      display: block;
    }
  `,zi([ct({type:rt,converter:String}),Bi("design:type",String)],Ni.prototype,"theme",void 0),zi([ct({type:String}),Bi("design:type",String)],Ni.prototype,"src",void 0),zi([ct({type:String}),Bi("design:type",String)],Ni.prototype,"title",void 0),zi([ct({type:String}),Bi("design:type",String)],Ni.prototype,"subtitle",void 0),Ni=zi([st("nidoca-avatar")],Ni);var Mi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ui=class extends it{constructor(){super(...arguments),this.theme=rt.surface}render(){return z`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Ui.styles=a`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
      height: 100%;
    }
    slot {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `,Mi([ct({type:rt,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ui.prototype,"theme",void 0),Ui=Mi([st("nidoca-card")],Ui);let Hi=class extends it{render(){return z`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();for(let t=0;t<o.length;t++){const e=o[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};Hi.styles=a`
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
  `,Hi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-gallery")],Hi);let qi=class extends it{render(){return z`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};qi.styles=a`
    :host {
      display: none;
    }
  `,qi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-print")],qi);let Gi=class extends it{render(){return z`
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target.assignedElements(),o=e.length;for(let t=0;t<o;t++){const i=e[t].classList,n="item_count_"+o;i.contains(n)||i.add(n)}}};Gi.styles=a`
    :host {
      display: block;
      margin: auto;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }

    ::slotted(.item_count_1) {
      flex-basis: 100%;
      width: 100%;
    }
    ::slotted(.item_count_2) {
      flex-basis: 50%;
      width: 50%;
    }
    ::slotted(.item_count_3) {
      flex-basis: 33.3%;
      width: 33.3%;
    }
    ::slotted(.item_count_4) {
      flex-basis: 25%;
      width: 25%;
    }

    @media only screen and (max-width: 1007px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      ::slotted(.item_count_1),
      ::slotted(.item_count_2),
      ::slotted(.item_count_3),
      ::slotted(.item_count_4) {
        flex-basis: 100%;
        width: 100%;
      }
    }
  `,Gi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-section")],Gi);var Xi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Yi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fi=class extends it{render(){return z` <slot></slot>`}};Fi.styles=a`
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
  `,Fi=Xi([st("nidoca-dashboard")],Fi);let Wi=class extends it{render(){return z` <slot></slot>`}};Wi.styles=a`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,Wi=Xi([st("nidoca-dashboard-box-25")],Wi);let Vi=class extends it{render(){return z` <slot></slot>`}};Vi.styles=a`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,Vi=Xi([st("nidoca-dashboard-box-50")],Vi);let Ki=class extends it{render(){return z` <slot></slot>`}};Ki.styles=a`
    :host {
      width: 100%;
      display: block;
    }
  `,Ki=Xi([st("nidoca-dashboard-box-100")],Ki);let Ji=class extends it{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return z`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ji.styles=a`
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
  `,Xi([ct({type:Boolean}),Yi("design:type",Boolean)],Ji.prototype,"clickable",void 0),Xi([ct({type:String}),Yi("design:type",String)],Ji.prototype,"title",void 0),Ji=Xi([st("nidoca-dashboard-card")],Ji);var Zi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Qi=class extends it{constructor(){super(...arguments),this.theme=rt.plain}render(){return z`
      ${at.getStyle(this.theme)}
      <slot></slot>
    `}};Qi.styles=a`
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
  `,Zi([ct({type:rt,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Qi.prototype,"theme",void 0),Qi=Zi([st("nidoca-box")],Qi);var tn=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},en=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let on=class extends it{constructor(){super(...arguments),this.theme=rt.plain,this.overline="",this.title="",this.summary="",this.text=""}render(){return z`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?z` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:z``}
        ${this.title?z` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:z``}
        ${this.summary?z`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:z``}
        ${this.text?z` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:z``}
        <slot></slot>
      </div>
    `}static example(t="",e="plain"){return z`<nidoca-article
      theme="${e}"
      slot="${t}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`}};on.styles=a`
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
      padding-bottom: var(--space);
    }
  `,tn([ct({type:rt,converter:String}),en("design:type",String)],on.prototype,"theme",void 0),tn([ct({type:String}),en("design:type",String)],on.prototype,"overline",void 0),tn([ct({type:String}),en("design:type",String)],on.prototype,"title",void 0),tn([ct({type:String}),en("design:type",String)],on.prototype,"summary",void 0),tn([ct({type:String}),en("design:type",String)],on.prototype,"text",void 0),on=tn([st("nidoca-article")],on);var nn=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},rn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let an=class extends it{constructor(){super(...arguments),this.theme=rt.primary,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return z`
      <nidoca-box theme="${se(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${le.text}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${le.email}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${le.text}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${at.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${Bt.contained}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};an.styles=a`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,nn([ct({type:rt,converter:String}),rn("design:type",Object)],an.prototype,"theme",void 0),nn([ct({type:String,converter:String}),rn("design:type",String)],an.prototype,"label",void 0),nn([ct({type:String,converter:String}),rn("design:type",String)],an.prototype,"nameLabel",void 0),nn([ct({type:String,converter:String}),rn("design:type",String)],an.prototype,"emailLabel",void 0),nn([ct({type:String,converter:String}),rn("design:type",String)],an.prototype,"titleLabel",void 0),nn([ct({type:String,converter:String}),rn("design:type",String)],an.prototype,"messageLabel",void 0),nn([ct({type:String,converter:String}),rn("design:type",String)],an.prototype,"buttonLabel",void 0),nn([dt("#authenitcate-form"),rn("design:type",Object)],an.prototype,"formComponent",void 0),an=nn([st("nidoca-form-contact")],an);let sn=class extends it{render(){return z`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `}};sn.styles=a`
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
  `,sn=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([st("nidoca-page-login")],sn);var ln,cn=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},dn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.anchor="anchor",t.page="page"}(ln||(ln={}));let pn=class extends it{constructor(){super(...arguments),this.loggedIn=!1}updated(t){if(super.updated(t),t.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),t.has("route")&&this.root){for(let t=0;t<this.root.childs.length;t++){const e=this.root.childs[t];if(e.route==this.route){this.contentComponent=document.createElement(e.rootComponent);break}}this.requestUpdate()}}render(){var t;return this.loggedIn?z`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?z`${this.contentComponent}`:z``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(t=this.root)||void 0===t?void 0:t.childs.map((t=>z` <nidoca-menu-item
                        text="${t.name}"
                        @click="${()=>{this.routeTo(t)}}"
                      ></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:z` <nidoca-page-login
          @nidoca-form-login-submit="${t=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:t.detail,bubbles:!0,composed:!0}))}}"
        ></nidoca-page-login>`}routeTo(t){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:t.route,bubbles:!0,composed:!0}))}};cn([ct({type:Array}),dn("design:type",Object)],pn.prototype,"root",void 0),cn([ct({type:Boolean}),dn("design:type",Boolean)],pn.prototype,"loggedIn",void 0),cn([ct({type:String,converter:String}),dn("design:type",Object)],pn.prototype,"route",void 0),pn=cn([st("nidoca-app")],pn)})();