/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class i{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new i(n,e,o)},a=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,o))(t)})(e):e;var s;const c=window,l=c.trustedTypes,d=l?l.emptyScript:"",p=c.reactiveElementPolyfillSupport,h={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},f=(e,t)=>t!==e&&(t==t||e==e),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:f};class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=u){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var o;const n=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,n)=>{t?o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),i=e.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=u){var n;const i=this.constructor._$Ep(e,o);if(void 0!==i&&!0===o.reflect){const r=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:h).toAttribute(t,o.type);this._$El=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,i=n._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=n.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:h;this._$El=i,this[i]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||f)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var g;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:m}),(null!==(s=c.reactiveElementVersions)&&void 0!==s?s:c.reactiveElementVersions=[]).push("1.4.1");const y=window,b=y.trustedTypes,v=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,$=`<${w}>`,S=document,R=(e="")=>S.createComment(e),k=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,j=e=>O(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,C=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),_=/'/g,A=/"/g,I=/^(?:script|style|textarea|title)$/i,D=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),z=D(1),B=(D(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),N=new WeakMap,U=S.createTreeWalker(S,129,null,!1),H=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=E;for(let t=0;t<o;t++){const o=e[t];let s,c,l=-1,d=0;for(;d<o.length&&(a.lastIndex=d,c=a.exec(o),null!==c);)d=a.lastIndex,a===E?"!--"===c[1]?a=P:void 0!==c[1]?a=C:void 0!==c[2]?(I.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=T):void 0!==c[3]&&(a=T):a===T?">"===c[0]?(a=null!=i?i:E,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?T:'"'===c[3]?A:_):a===A||a===_?a=T:a===P||a===C?a=E:(a=T,i=void 0);const p=a===T&&e[t+1].startsWith("/>")?" ":"";r+=a===E?o+$:l>=0?(n.push(s),o.slice(0,l)+"$lit$"+o.slice(l)+x+p):o+x+(-2===l?(n.push(void 0),t):p)}const s=r+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==v?v.createHTML(s):s,n]};class M{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,s=this.parts,[c,l]=H(e,t);if(this.el=M.createElement(c,o),U.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=U.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(x)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+"$lit$").split(x),t=/([.?@])?(.*)/.exec(o);s.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?V:"?"===t[1]?X:"@"===t[1]?Y:F})}else s.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(I.test(n.tagName)){const e=n.textContent.split(x),t=e.length-1;if(t>0){n.textContent=b?b.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],R()),U.nextNode(),s.push({type:2,index:++i});n.append(e[t],R())}}}else if(8===n.nodeType)if(n.data===w)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(x,e+1));)s.push({type:7,index:i}),e+=x.length-1}i++}}static createElement(e,t){const o=S.createElement("template");return o.innerHTML=e,o}}function q(e,t,o=e,n){var i,r,a,s;if(t===B)return t;let c=void 0!==n?null===(i=o._$Co)||void 0===i?void 0:i[n]:o._$Cl;const l=k(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(a=(s=o)._$Co)&&void 0!==a?a:s._$Co=[])[n]=c:o._$Cl=c),void 0!==c&&(t=q(e,c._$AS(e,t.values),c,n)),t}class G{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(o,!0);U.currentNode=i;let r=U.nextNode(),a=0,s=0,c=n[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new W(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new J(r,this,e)),this.u.push(t),c=n[++s]}a!==(null==c?void 0:c.index)&&(r=U.nextNode(),a++)}return i}p(e){let t=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class W{constructor(e,t,o,n){var i;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cm=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),k(e)?e===L||null==e||""===e?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==B&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):j(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==L&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=M.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.p(o);else{const e=new G(i,this),t=e.v(this.options);e.p(o),this.T(t),this._$AH=e}}_$AC(e){let t=N.get(e.strings);return void 0===t&&N.set(e.strings,t=new M(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new W(this.O(R()),this.O(R()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class F{constructor(e,t,o,n,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=q(this,e,t,0),r=!k(e)||e!==this._$AH&&e!==B,r&&(this._$AH=e);else{const n=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=q(this,n[o+a],t,a),s===B&&(s=this._$AH[a]),r||(r=!k(s)||s!==this._$AH[a]),s===L?e=L:e!==L&&(e+=(null!=s?s:"")+i[a+1]),this._$AH[a]=s}r&&!n&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class V extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}const K=b?b.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}j(e){e&&e!==L?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class Y extends F{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=q(this,e,t,0))&&void 0!==o?o:L)===B)return;const n=this._$AH,i=e===L&&n!==L||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==L&&(n===L||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class J{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const Z={P:"$lit$",A:x,M:w,C:1,L:H,R:G,D:j,V:q,I:W,H:F,N:X,U:Y,B:V,F:J},Q=y.litHtmlPolyfillSupport;var ee,te;null==Q||Q(M,W),(null!==(g=y.litHtmlVersions)&&void 0!==g?g:y.litHtmlVersions=[]).push("2.4.0");class oe extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let a=r._$litPart$;if(void 0===a){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=a=new W(t.insertBefore(R(),e),e,void 0,null!=o?o:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return B}}oe.finalized=!0,oe._$litElement$=!0,null===(ee=globalThis.litElementHydrateSupport)||void 0===ee||ee.call(globalThis,{LitElement:oe});const ne=globalThis.litElementPolyfillSupport;var ie;null==ne||ne({LitElement:oe}),(null!==(te=globalThis.litElementVersions)&&void 0!==te?te:globalThis.litElementVersions=[]).push("3.2.2"),function(e){e.primary="primary",e.secondary="secondary",e.surface="surface",e.plain="plain"}(ie||(ie={}));class re{static getStyle(e){return e?e==ie.plain?z``:z` <style>
            :host,
            *,
            ::slotted(*) {
              color: var(--app-color-${e});
              background-color: var(--app-color-${e}-background);
              border-color: var(--app-color-${e}-border);
            }

            ::slotted(.h2),
            .h2 {
              color: #3f6796;
            }
          </style>`:z``}static getOposite(e){return e==ie.plain?ie.surface:e==ie.primary||e==ie.primary?ie.secondary:e==ie.secondary?ie.primary:ie.plain}getParentTheme(e){let t=e;for(;null!=t;){if(null!=t.theme)return t.theme;t=t.parentElement}}}const ae=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){customElements.define(e,t)}}})(e,t),se=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function ce(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):se(e,t)}function le(e,t){return(({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}})({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var de;null===(de=window.HTMLSlotElement)||void 0===de||de.prototype.assignedElements;var pe=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},he=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let fe=class extends oe{constructor(){super(...arguments),this.theme=ie.surface,this.header="",this.opened=!1}render(){return z`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?z` <slot></slot>`:z``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};fe.styles=r`
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
  `,pe([ce({type:ie,converter:String}),he("design:type",String)],fe.prototype,"theme",void 0),pe([ce({type:String}),he("design:type",String)],fe.prototype,"header",void 0),pe([ce({type:Boolean}),he("design:type",Boolean)],fe.prototype,"opened",void 0),fe=pe([ae("nidoca-accordion-item")],fe);var ue,me=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ge=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.single="single",e.multi="multi"}(ue||(ue={}));let ye=class extends oe{constructor(){super(...arguments),this.theme=ie.plain,this.accordionType=ue.single}updated(e){super.updated(e),e.forEach(((e,t)=>{if("theme"==t&&null!=this.accordionSlot){const e=this.accordionSlot.assignedElements();for(let t=0;t<e.length;t++){const o=e[t];o instanceof fe&&(o.theme=this.theme)}}}))}render(){return z`
      ${re.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${e=>this.accordionSwitched(e)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(e){const t=e.detail;switch(this.accordionType){case ue.single:if(null!=this.accordionSlot){const e=this.accordionSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof fe&&n!=t&&(n.opened=!1)}}case ue.multi:}e.stopPropagation()}static example(e=""){return z`<nidoca-accordion slot="${e}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${Jn.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${Jn.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${Jn.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${Jn.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};ye.styles=r`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,me([ce({type:ie,converter:String}),ge("design:type",String)],ye.prototype,"theme",void 0),me([ce({type:ue,converter:String}),ge("design:type",String)],ye.prototype,"accordionType",void 0),me([le("#accordionSlot"),ge("design:type",Object)],ye.prototype,"accordionSlot",void 0),ye=me([ae("nidoca-accordion")],ye);var be,ve=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},xe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e[e.current=0]="current",e[e.completed=1]="completed",e[e.open=2]="open",e[e.finish=3]="finish"}(be||(be={}));let we=class extends oe{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return z`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${ao.NONE}"
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
    `}determineBackgroundColor(e){return e==be.completed?"var(--app-color-text-primary)":e==be.current?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(e){return e==be.finish?"var(--app-color-success)":e==be.completed?"var(--mdc-theme-on-primary)":e==be.current?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){const e=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}};we.styles=r`
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
  `,ve([ce({type:String}),xe("design:type",String)],we.prototype,"icon",void 0),ve([ce({type:String}),xe("design:type",String)],we.prototype,"primaryText",void 0),ve([ce({type:Number}),xe("design:type",Object)],we.prototype,"state",void 0),ve([ce({type:Boolean}),xe("design:type",Boolean)],we.prototype,"isLast",void 0),we=ve([ae("nidoca-wizard-step")],we);var $e=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Se=class extends oe{render(){return z`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();let n=0;for(let e=0;e<o.length;e++){const t=o[e];t instanceof we&&(t.index=e,t.state==be.current&&(n=e),t.index==o.length-1&&(t.isLast=!0))}this.changeState(n)}stepClicked(e){const t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){const t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof we&&void 0!==n.index&&(n.index<e?n.state=be.completed:n.index==e?n.state=be.current:n.state=be.open)}}}};Se.styles=r``,$e([le("#wizardSlot"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],Se.prototype,"wizardSlot",void 0),Se=$e([ae("nidoca-wizard")],Se);var Re=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ke=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Oe=class extends oe{constructor(){super(...arguments),this.clickable=!0,this.theme=ie.surface,this.text=""}render(){return z`
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
    `}static example(e=""){return z`<nidoca-chip slot="${e}" clickable text="Mein Chip"></nidoca-chip>`}};Oe.styles=r`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }

    .clickable {
      cursor: pointer;
    }
  `,Re([ce({type:Boolean}),ke("design:type",Boolean)],Oe.prototype,"clickable",void 0),Re([ce({type:ie,converter:String}),ke("design:type",String)],Oe.prototype,"theme",void 0),Re([ce({type:String}),ke("design:type",String)],Oe.prototype,"text",void 0),Oe=Re([ae("nidoca-chip")],Oe);var je=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ee=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Pe=class extends oe{constructor(){super(...arguments),this.code="",this.theme=ie.plain}render(){return z`
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
    `}static example(e=""){return z`<nidoca-code slot="${e}" theme="surface"> my code </nidoca-code>`}};Pe.styles=r`
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
  `,je([ce({type:String}),Ee("design:type",String)],Pe.prototype,"code",void 0),je([ce({type:String}),Ee("design:type",String)],Pe.prototype,"theme",void 0),Pe=je([ae("nidoca-code")],Pe);var Ce=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Te=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _e=class extends oe{constructor(){super(),this.show=!1,addEventListener("click",(e=>{var t;const o=null===(t=this.associatedElement)||void 0===t?void 0:t.getBoundingClientRect();o&&(o.top>e.clientY||o.right<e.clientX||o.left>e.clientX||o.bottom<e.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?z`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:z``}calculatePositionStyle(e){let t="";if(e){const o=e.getBoundingClientRect();o.right>window.innerWidth/2?t+=`right:${window.innerWidth-o.right}px;`:t+=`left:${o.left}px;`,o.top>window.innerHeight/2?t+=`bottom:${o.height+window.innerHeight-o.top}px;`:t+=`top:${o.bottom}px;`}return t}};_e.styles=r`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Ce([ce({type:Boolean}),Te("design:type",Boolean)],_e.prototype,"show",void 0),Ce([ce({type:Object}),Te("design:type",Object)],_e.prototype,"associatedElement",void 0),_e=Ce([ae("nidoca-elevation"),Te("design:paramtypes",[])],_e);var Ae=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ie=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class De{}De.PROGRESS="PROGRESS",De.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let ze=class extends oe{constructor(){super(...arguments),this.progressType=De.PROGRESS}render(){return z` <style>
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

      <progress class="${this.progressType}"></progress>`}};ze.styles=r``,Ae([ce({type:ie,converter:String}),Ie("design:type",Object)],ze.prototype,"theme",void 0),Ae([ce({type:De,converter:String}),Ie("design:type",String)],ze.prototype,"progressType",void 0),ze=Ae([ae("nidoca-progress")],ze);var Be,Le=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ne=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.contained="contained",e.outlined="outlined",e.text="text"}(Be||(Be={}));let Ue=class extends oe{constructor(){super(...arguments),this.theme=ie.primary,this.buttonType=Be.contained,this.leadingIcon="",this.text=""}render(){return z`
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
        ${this.leadingIcon?z` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:z``}

        <nidoca-text-button theme="${this.theme}"
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(e=""){return z`<nidoca-button slot="${e}" text="Start" icon="home"></nidoca-button>`}};Ue.styles=r`
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
  `,Le([ce({type:ie,converter:String}),Ne("design:type",String)],Ue.prototype,"theme",void 0),Le([ce({type:Be,converter:String}),Ne("design:type",String)],Ue.prototype,"buttonType",void 0),Le([ce({type:String}),Ne("design:type",String)],Ue.prototype,"leadingIcon",void 0),Le([ce({type:String}),Ne("design:type",String)],Ue.prototype,"text",void 0),Ue=Le([ae("nidoca-button")],Ue);class He extends oe{}var Me=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},qe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ge=class extends oe{constructor(){super(...arguments),this.autocomplete=!0}render(){return z`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const e=new FormData,t={};for(const o of this.getInputElements(this.slotElement)){const n=o.getOutputData();t[n.key]=n.value,e.append(n.key,n.value)}const o={};return o.jsonObject=t,o.formData=e,o}validate(){let e=!0;for(const t of this.getInputElements(this.slotElement))t.validate()||(e=!1);return e||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),e}getInputElements(e){if(null==e)return[];const t=[],o=e.assignedElements({flatten:!0});for(let e=0;e<o.length;e++){const n=o[e];this.recursiveInputElementSearch(n,t)}return t}recursiveInputElementSearch(e,t){if(e instanceof He)t.push(e);else if(e.hasChildNodes()){const o=e.children;for(const e of[].slice.call(o))this.recursiveInputElementSearch(e,t)}}};Ge.styles=r`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,Me([ce({type:Boolean}),qe("design:type",Boolean)],Ge.prototype,"autocomplete",void 0),Me([le("#slotElement"),qe("design:type",Object)],Ge.prototype,"slotElement",void 0),Ge=Me([ae("nidoca-form")],Ge);const We=e=>(...t)=>({_$litDirective$:e,values:t});class Fe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:Ve}=Z,Ke=()=>document.createComment(""),Xe=(e,t,o)=>{var n;const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(Ke(),r),n=i.insertBefore(Ke(),r);o=new Ve(t,n,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,s=a!==e;if(s){let t;null===(n=o._$AQ)||void 0===n||n.call(o,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||s){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},Ye=(e,t,o=e)=>(e._$AI(t,o),e),Je={},Ze=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let o=e._$AA;const n=e._$AB.nextSibling;for(;o!==n;){const e=o.nextSibling;o.remove(),o=e}},Qe=(e,t,o)=>{const n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},et=We(class extends Fe{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}ht(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const i=[],r=[];let a=0;for(const t of e)i[a]=n?n(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:i}}render(e,t,o){return this.ht(e,t,o).values}update(e,[t,o,n]){var i;const r=e._$AH,{values:a,keys:s}=this.ht(t,o,n);if(!Array.isArray(r))return this.ut=s,a;const c=null!==(i=this.ut)&&void 0!==i?i:this.ut=[],l=[];let d,p,h=0,f=r.length-1,u=0,m=a.length-1;for(;h<=f&&u<=m;)if(null===r[h])h++;else if(null===r[f])f--;else if(c[h]===s[u])l[u]=Ye(r[h],a[u]),h++,u++;else if(c[f]===s[m])l[m]=Ye(r[f],a[m]),f--,m--;else if(c[h]===s[m])l[m]=Ye(r[h],a[m]),Xe(e,l[m+1],r[h]),h++,m--;else if(c[f]===s[u])l[u]=Ye(r[f],a[u]),Xe(e,r[h],r[f]),f--,u++;else if(void 0===d&&(d=Qe(s,u,m),p=Qe(c,h,f)),d.has(c[h]))if(d.has(c[f])){const t=p.get(s[u]),o=void 0!==t?r[t]:null;if(null===o){const t=Xe(e,r[h]);Ye(t,a[u]),l[u]=t}else l[u]=Ye(o,a[u]),Xe(e,r[h],o),r[t]=null;u++}else Ze(r[f]),f--;else Ze(r[h]),h++;for(;u<=m;){const t=Xe(e,l[m+1]);Ye(t,a[u]),l[u++]=t}for(;h<=f;){const e=r[h++];null!==e&&Ze(e)}return this.ut=s,((e,t=Je)=>{e._$AH=t})(e,l),B}}),tt={},ot=We(class extends Fe{constructor(){super(...arguments),this.ot=tt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every(((e,t)=>e===this.ot[t])))return B}else if(this.ot===t)return B;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});var nt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},it=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let rt=class extends He{constructor(){super(...arguments),this.theme=ie.surface,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return z` <style>
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
            ${ot([this.value,this.options],(()=>z`
                ${et(this.options,(e=>null==e?z` <option></option>`:this.isSelectedOption(e)?z` <option value="${e.key}" selected>${e.value}</option> `:z` <option value="${e.key}">${e.value}</option> `))}
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
          `:z``}`}getOutputData(){let e=this.value;if(null!=this.selectElement&&this.multiple){e=[];for(let t=0,o=this.selectElement.options.length;t<o;t++)this.selectElement.options[t].selected&&e.push(this.options[t].key)}else null!=this.selectElement&&(e=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:e}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(e){if(this.multiple){let t=!1;for(const o of this.value)if(t=e.key===o,t)return!0}return this.value===e.key}static enumToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),Object.keys(e).forEach((t=>{o.push({key:t,value:e[t]})})),o}static stringArrayToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),e.forEach((e=>{o.push({key:e,value:e})})),o}static toComboboxOptions(e=null,t=null){if(null==e)return[];const o=[];return Object.values(e).forEach((n=>{let i=String(Object.keys(e)[Object.values(e).indexOf(n)]);t&&(i=i.concat(t)),o.push({key:n,value:i})})),o}};rt.styles=r`
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
  `,nt([ce({type:ie,converter:String}),it("design:type",String)],rt.prototype,"theme",void 0),nt([ce({type:String}),it("design:type",String)],rt.prototype,"trailingIcon",void 0),nt([ce({type:String}),it("design:type",String)],rt.prototype,"label",void 0),nt([ce({type:String}),it("design:type",String)],rt.prototype,"errorText",void 0),nt([ce({type:String}),it("design:type",String)],rt.prototype,"infoText",void 0),nt([ce({type:String}),it("design:type",String)],rt.prototype,"warningText",void 0),nt([ce(),it("design:type",Object)],rt.prototype,"value",void 0),nt([ce({type:Array}),it("design:type",Array)],rt.prototype,"options",void 0),nt([ce({type:String}),it("design:type",String)],rt.prototype,"name",void 0),nt([ce({type:Boolean}),it("design:type",Boolean)],rt.prototype,"required",void 0),nt([ce({type:Boolean}),it("design:type",Boolean)],rt.prototype,"multiple",void 0),nt([ce({type:Number}),it("design:type",Number)],rt.prototype,"size",void 0),nt([le("#selectElement"),it("design:type",Object)],rt.prototype,"selectElement",void 0),rt=nt([ae("nidoca-form-combobox")],rt);const at=e=>null!=e?e:L;var st,ct=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},lt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.color="color",e.email="email",e.hidden="hidden",e.number="number",e.password="password",e.tel="tel",e.text="text",e.search="search",e.url="url",e.date="date",e.month="month",e.time="time",e.week="week"}(st||(st={}));let dt=class extends He{constructor(){super(...arguments),this.type=st.text,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=ie.surface}render(){return this.type==st.hidden?z`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:z` <style>
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
                size="${at(this.size)}"
                minlength="${at(this.minlength)}"
                maxlength="${at(this.maxlength)}"
                pattern="${at(this.pattern)}"
                min="${at(this.min)}"
                max="${at(this.max)}"
                step="${at(this.step)}"
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
              `:z``}`}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:null==t?void 0:t.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};dt.styles=r`
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
  `,ct([ce({type:st,converter:String}),lt("design:type",String)],dt.prototype,"type",void 0),ct([ce({type:String}),lt("design:type",String)],dt.prototype,"label",void 0),ct([ce({type:String}),lt("design:type",String)],dt.prototype,"placeholder",void 0),ct([ce({type:String}),lt("design:type",String)],dt.prototype,"trailingIcon",void 0),ct([ce({type:String}),lt("design:type",String)],dt.prototype,"errorText",void 0),ct([ce({type:String}),lt("design:type",String)],dt.prototype,"infoText",void 0),ct([ce({type:String}),lt("design:type",String)],dt.prototype,"warningText",void 0),ct([ce({type:String}),lt("design:type",String)],dt.prototype,"name",void 0),ct([ce(),lt("design:type",String)],dt.prototype,"value",void 0),ct([ce({type:Boolean}),lt("design:type",Boolean)],dt.prototype,"required",void 0),ct([ce({type:Boolean}),lt("design:type",Boolean)],dt.prototype,"disabled",void 0),ct([ce({type:Boolean}),lt("design:type",Boolean)],dt.prototype,"checked",void 0),ct([ce({type:Number}),lt("design:type",Object)],dt.prototype,"maxlength",void 0),ct([ce({type:Number}),lt("design:type",Object)],dt.prototype,"minlength",void 0),ct([ce({type:Number}),lt("design:type",Object)],dt.prototype,"min",void 0),ct([ce({type:Number}),lt("design:type",Object)],dt.prototype,"max",void 0),ct([ce({type:String}),lt("design:type",Object)],dt.prototype,"step",void 0),ct([ce({type:Number}),lt("design:type",Object)],dt.prototype,"size",void 0),ct([ce({type:String}),lt("design:type",Object)],dt.prototype,"pattern",void 0),ct([le("#inputElement"),lt("design:type",Object)],dt.prototype,"inputElement",void 0),ct([ce({type:ie,converter:String}),lt("design:type",String)],dt.prototype,"theme",void 0),dt=ct([ae("nidoca-form-text")],dt);let pt=class extends dt{constructor(){super(),this.type=st.date}};pt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-form-date"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],pt);var ht=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ft=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ut=class extends He{constructor(){super(...arguments),this.theme=ie.surface,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return z` <style>
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
          `:z``}`}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ut.styles=r`
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
  `,ht([ce({type:ie,converter:String}),ft("design:type",String)],ut.prototype,"theme",void 0),ht([ce({type:String}),ft("design:type",String)],ut.prototype,"infoText",void 0),ht([ce({type:String}),ft("design:type",String)],ut.prototype,"warningText",void 0),ht([ce({type:String}),ft("design:type",String)],ut.prototype,"errorText",void 0),ht([ce({type:String}),ft("design:type",String)],ut.prototype,"name",void 0),ht([ce(),ft("design:type",String)],ut.prototype,"value",void 0),ht([ce({type:String}),ft("design:type",String)],ut.prototype,"label",void 0),ht([ce({type:Boolean}),ft("design:type",Boolean)],ut.prototype,"required",void 0),ht([ce({type:String}),ft("design:type",String)],ut.prototype,"placeholder",void 0),ht([ce({type:Boolean}),ft("design:type",Boolean)],ut.prototype,"disabled",void 0),ht([ce({type:Number}),ft("design:type",Number)],ut.prototype,"rows",void 0),ht([le("#inputElement"),ft("design:type",Object)],ut.prototype,"inputElement",void 0),ut=ht([ae("nidoca-form-textarea")],ut);var mt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},gt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let yt=class extends He{constructor(){super(...arguments),this.theme=ie.primary}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return z`
      <nidoca-box theme="${at(this.theme)}">
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
    `}upload(){var e;null===(e=this.inputElement)||void 0===e||e.click()}};yt.styles=r`
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
  `,mt([ce({type:ie,converter:String}),gt("design:type",Object)],yt.prototype,"theme",void 0),mt([le("#inputElement"),gt("design:type",Object)],yt.prototype,"inputElement",void 0),yt=mt([ae("nidoca-form-upload")],yt);var bt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},vt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let xt=class extends He{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=ie.primary,this.theme=re.prototype.getParentTheme(this)||ie.plain}render(){return z`
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
            @input="${e=>{this.checked=e.target.checked,console.log(this.checked)}}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      ${this.warningText?z` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:z``}
      ${this.errorText?z` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:z``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};xt.styles=r`
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
  `,bt([ce({type:String}),vt("design:type",String)],xt.prototype,"name",void 0),bt([ce({type:String}),vt("design:type",String)],xt.prototype,"label",void 0),bt([ce({type:String}),vt("design:type",String)],xt.prototype,"infoText",void 0),bt([ce({type:String}),vt("design:type",String)],xt.prototype,"errorText",void 0),bt([ce({type:String}),vt("design:type",String)],xt.prototype,"warningText",void 0),bt([ce({type:Boolean}),vt("design:type",Boolean)],xt.prototype,"required",void 0),bt([ce({type:Boolean}),vt("design:type",Boolean)],xt.prototype,"disabled",void 0),bt([ce({type:Boolean}),vt("design:type",Boolean)],xt.prototype,"checked",void 0),bt([ce({type:String}),vt("design:type",String)],xt.prototype,"theme",void 0),bt([le("#inputElement"),vt("design:type",Object)],xt.prototype,"inputElement",void 0),xt=bt([ae("nidoca-form-switch"),vt("design:paramtypes",[])],xt);var wt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},$t=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let St=class extends oe{constructor(){super(...arguments),this.theme=ie.primary,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return z`
      <nidoca-box theme="${at(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${st.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};St.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,wt([ce({type:ie,converter:String}),$t("design:type",Object)],St.prototype,"theme",void 0),wt([ce({type:String,converter:String}),$t("design:type",String)],St.prototype,"label",void 0),wt([ce({type:String,converter:String}),$t("design:type",String)],St.prototype,"emailLabel",void 0),wt([ce({type:String,converter:String}),$t("design:type",String)],St.prototype,"buttonLabel",void 0),wt([le("#form"),$t("design:type",Object)],St.prototype,"formComponent",void 0),St=wt([ae("nidoca-form-newsletter")],St);var Rt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},kt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ot=class extends oe{constructor(){super(...arguments),this.theme=ie.primary,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return z`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${st.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Ot.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Rt([ce({type:ie,converter:String}),kt("design:type",String)],Ot.prototype,"theme",void 0),Rt([ce({type:String,converter:String}),kt("design:type",String)],Ot.prototype,"label",void 0),Rt([ce({type:String,converter:String}),kt("design:type",String)],Ot.prototype,"emailLabel",void 0),Rt([ce({type:String,converter:String}),kt("design:type",String)],Ot.prototype,"buttonLabel",void 0),Rt([le("#form"),kt("design:type",Object)],Ot.prototype,"formComponent",void 0),Ot=Rt([ae("nidoca-form-reset-password")],Ot);var jt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Et=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Pt=class extends oe{constructor(){super(...arguments),this.theme=ie.surface,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return z`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${st.password}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${st.password}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${st.password}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${re.getOposite(this.theme)}"
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
    `}changePassword(){var e,t,o,n,i;(null===(e=this.formComponent)||void 0===e?void 0:e.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(t=this.newPasswordInputField)||void 0===t?void 0:t.getOutputData().value)!=(null===(o=this.repeatNewPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(n=this.oldPasswordInputField)||void 0===n?void 0:n.getOutputData().value)==(null===(i=this.newPasswordInputField)||void 0===i?void 0:i.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};Pt.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,jt([ce({type:ie,converter:String}),Et("design:type",String)],Pt.prototype,"theme",void 0),jt([ce({type:String,converter:String}),Et("design:type",String)],Pt.prototype,"label",void 0),jt([ce({type:String,converter:String}),Et("design:type",String)],Pt.prototype,"oldPasswordLabel",void 0),jt([ce({type:String,converter:String}),Et("design:type",String)],Pt.prototype,"newPasswordLabel",void 0),jt([ce({type:String,converter:String}),Et("design:type",String)],Pt.prototype,"repeatNewPasswordLabel",void 0),jt([ce({type:String,converter:String}),Et("design:type",String)],Pt.prototype,"buttonLabel",void 0),jt([le("#form"),Et("design:type",Object)],Pt.prototype,"formComponent",void 0),jt([le("#oldPassword"),Et("design:type",Object)],Pt.prototype,"oldPasswordInputField",void 0),jt([le("#newPassword"),Et("design:type",Object)],Pt.prototype,"newPasswordInputField",void 0),jt([le("#repeatNewPassword"),Et("design:type",Object)],Pt.prototype,"repeatNewPasswordInputField",void 0),jt([ce(),Et("design:type",String)],Pt.prototype,"errorMessageSamePasswordLabel",void 0),jt([ce(),Et("design:type",String)],Pt.prototype,"errorMessagePasswordDiffLabel",void 0),Pt=jt([ae("nidoca-form-change-password")],Pt);var Ct=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Tt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _t=class extends oe{constructor(){super(...arguments),this.theme=ie.primary,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return z`
      <nidoca-box theme="${at(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${st.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${st.password}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};_t.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Ct([ce({type:ie,converter:String}),Tt("design:type",Object)],_t.prototype,"theme",void 0),Ct([ce({type:String,converter:String}),Tt("design:type",String)],_t.prototype,"label",void 0),Ct([ce({type:String,converter:String}),Tt("design:type",String)],_t.prototype,"emailLabel",void 0),Ct([ce({type:String,converter:String}),Tt("design:type",String)],_t.prototype,"passwordLabel",void 0),Ct([ce({type:String,converter:String}),Tt("design:type",String)],_t.prototype,"buttonLabel",void 0),Ct([le("#form"),Tt("design:type",Object)],_t.prototype,"formComponent",void 0),_t=Ct([ae("nidoca-form-register")],_t);var At=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let It=class extends oe{constructor(){super(...arguments),this.code=""}render(){return z``}};It.styles=r``,At([ce({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],It.prototype,"code",void 0),It=At([ae("nidoca-upload")],It);var Dt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},zt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Bt=class extends oe{constructor(){super(),this.theme=re.prototype.getParentTheme(this)||ie.plain}render(){return z`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};Bt.styles=r`
    :host,
    ::slotted(:host) {
      display: block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,Dt([ce({type:ie,converter:String}),zt("design:type",String)],Bt.prototype,"theme",void 0),Bt=Dt([ae("nidoca-hr"),zt("design:paramtypes",[])],Bt);var Lt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Nt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ut=class extends oe{constructor(){super(...arguments),this.text="",this.icon=""}render(){return z`
      <div class="container">
        ${this.icon?z` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:z``}
        ${this.text?z` <nidoca-text-button>${this.text}</nidoca-text-button>`:z``}
        <slot></slot>
      </div>
    `}static example(e=""){return z`<nidoca-menu-area slot="${e}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};Ut.styles=r`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,Lt([ce({type:String}),Nt("design:type",String)],Ut.prototype,"text",void 0),Lt([ce({type:String}),Nt("design:type",String)],Ut.prototype,"icon",void 0),Ut=Lt([ae("nidoca-menu-area")],Ut);var Ht=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Mt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let qt=class extends oe{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1,this.theme=ie.surface}render(){return z`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(e=""){return z`<nidoca-menu-item slot="${e}" text="Start" icon="home"></nidoca-menu-item>`}};qt.styles=r`
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
  `,Ht([ce({type:String}),Mt("design:type",String)],qt.prototype,"text",void 0),Ht([ce({type:String}),Mt("design:type",String)],qt.prototype,"icon",void 0),Ht([ce({type:Boolean}),Mt("design:type",Boolean)],qt.prototype,"selected",void 0),Ht([ce({type:String}),Mt("design:type",String)],qt.prototype,"theme",void 0),qt=Ht([ae("nidoca-menu-item")],qt);var Gt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Wt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ft=class extends oe{constructor(){super(...arguments),this.theme=ie.surface}render(){return z` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(e){super.updated(e),e.forEach(((e,t)=>{if("theme"==t&&null!=this.slotElement){const e=this.slotElement.assignedElements();for(let t=0;t<e.length;t++){const o=e[t];o instanceof qt&&(o.theme=this.theme)}}}))}firstUpdated(){this.addEventListener("click",(e=>{if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];if(n instanceof qt){const t=n.getBoundingClientRect();t.left<e.x&&t.right>e.x&&(t.top<e.y&&t.bottom>e.y?n.selected=!0:n.selected=!1)}}}}))}static example(e=""){return z`
      <nidoca-menu slot="${e}" theme="primary">
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
    `}};Ft.styles=r`
    :host,
    slot {
      display: block;
    }
  `,Gt([ce({type:String}),Wt("design:type",String)],Ft.prototype,"theme",void 0),Gt([le("#slotElement"),Wt("design:type",Object)],Ft.prototype,"slotElement",void 0),Ft=Gt([ae("nidoca-menu")],Ft);var Vt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Kt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Xt=class extends oe{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return z`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(e,t,o,n,i,r){return"height:".concat(e).concat(";").concat("width:").concat(t).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(i).concat(";").concat("bottom:").concat(r).concat(";")}};Xt.styles=r`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Vt([ce({type:String}),Kt("design:type",String)],Xt.prototype,"height",void 0),Vt([ce({type:String}),Kt("design:type",String)],Xt.prototype,"width",void 0),Vt([ce({type:String}),Kt("design:type",String)],Xt.prototype,"left",void 0),Vt([ce({type:String}),Kt("design:type",String)],Xt.prototype,"top",void 0),Vt([ce({type:String}),Kt("design:type",String)],Xt.prototype,"right",void 0),Vt([ce({type:String}),Kt("design:type",String)],Xt.prototype,"bottom",void 0),Xt=Vt([ae("nidoca-layout-floating")],Xt);var Yt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Jt=class extends oe{constructor(){super(...arguments),this.theme=ie.plain}render(){return z`
      ${re.getStyle(this.theme)}
      <slot></slot>
    `}};Jt.styles=r`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,Yt([ce({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Jt.prototype,"theme",void 0),Jt=Yt([ae("nidoca-container")],Jt);var Zt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Qt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let eo=class extends oe{constructor(){super(),this.hideSidebox=!0,this.theme=re.prototype.getParentTheme(this)||ie.plain}render(){return z` <style>
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
      ${this.hideSidebox?z``:z` <slot class="sidebox" name="sidebox"></slot>`}`}};eo.styles=r`
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
  `,Zt([ce({type:ie,converter:String}),Qt("design:type",String)],eo.prototype,"theme",void 0),Zt([ce({type:Boolean,converter:String}),Qt("design:type",Boolean)],eo.prototype,"hideSidebox",void 0),eo=Zt([ae("nidoca-split-screen"),Qt("design:paramtypes",[])],eo);var to=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},oo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let no=class extends oe{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return z`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}static example(e=""){return z`
      <nidoca-icon slot="${e}" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
    `}};no.styles=r`
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
  `,to([ce({type:String}),oo("design:type",String)],no.prototype,"icon",void 0),to([ce({type:Boolean}),oo("design:type",Boolean)],no.prototype,"clickable",void 0),to([ce({type:Boolean}),oo("design:type",Boolean)],no.prototype,"deactivated",void 0),to([ce({type:String}),oo("design:type",String)],no.prototype,"primaryText",void 0),no=to([ae("nidoca-icon")],no);var io=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ro=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class ao{}ao.NONE="NONE",ao.DEFAULT_SHADOW="DEFAULT_SHADOW",ao.SHADOW_1="SHADOW_1",ao.SHADOW_2="SHADOW_2",ao.SHADOW_3="SHADOW_3";let so=class extends oe{constructor(){super(...arguments),this.theme=ie.primary,this.shadowType=ao.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return z`
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
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};so.styles=r`
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
  `,io([ce({type:String}),ro("design:type",String)],so.prototype,"theme",void 0),io([ce({type:Object}),ro("design:type",ao)],so.prototype,"shadowType",void 0),io([ce({type:String}),ro("design:type",String)],so.prototype,"icon",void 0),io([ce({type:Boolean}),ro("design:type",Boolean)],so.prototype,"clickable",void 0),io([ce({type:Boolean}),ro("design:type",Boolean)],so.prototype,"deactivated",void 0),so=io([ae("nidoca-icon-extended")],so);var co=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let lo=class extends oe{render(){return z`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(null!=this.rippleContainerElement){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);const t=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};lo.styles=r`
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
  `,co([le("#rippleContainer"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],lo.prototype,"rippleContainerElement",void 0),lo=co([ae("nidoca-ripple")],lo);var po=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ho=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let fo=class extends oe{constructor(){super(...arguments),this.src="",this.width="auto",this.height="auto",this.zoom=!1}render(){return this.src?z`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:z``}static example(e=""){return z`<nidoca-img width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img>`}};fo.styles=r`
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
  `,po([ce({type:String}),ho("design:type",String)],fo.prototype,"src",void 0),po([ce({type:String}),ho("design:type",String)],fo.prototype,"width",void 0),po([ce({type:String}),ho("design:type",String)],fo.prototype,"height",void 0),po([ce({type:Boolean}),ho("design:type",Boolean)],fo.prototype,"zoom",void 0),fo=po([ae("nidoca-img")],fo);let uo=class extends fo{static example(e=""){return z`<nidoca-img-round width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img-round>`}};uo.styles=r`
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
  `,uo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-img-round")],uo);var mo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let go=class extends oe{constructor(){super(...arguments),this.src=""}render(){return z`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};go.styles=r``,mo([ce({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],go.prototype,"src",void 0),go=mo([ae("nidoca-movie")],go);var yo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},bo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let vo=class extends oe{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return z`
      <nidoca-form-text
        theme="${at(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${st.number}"
        value=""
      ></nidoca-form-text>
    `}updated(e){(e.has("min")||e.has("max"))&&this.generateNewNumber(),super.updated(e)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(e,t){return Math.random()*(t-e)+e}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const e=this.isValid();return e&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),e}};vo.styles=r`
    :host {
      display: block;
      width: 100%;
    }
  `,yo([ce({type:ie,converter:String}),bo("design:type",Object)],vo.prototype,"theme",void 0),yo([ce({type:String}),bo("design:type",String)],vo.prototype,"label",void 0),yo([ce({type:String}),bo("design:type",String)],vo.prototype,"placeholder",void 0),yo([ce({type:String}),bo("design:type",String)],vo.prototype,"name",void 0),yo([ce({type:Number}),bo("design:type",Number)],vo.prototype,"min",void 0),yo([ce({type:Number}),bo("design:type",Number)],vo.prototype,"max",void 0),yo([ce({type:String}),bo("design:type",String)],vo.prototype,"errorText",void 0),yo([le("#inputfield"),bo("design:type",Object)],vo.prototype,"inputfield",void 0),vo=yo([ae("nidoca-form-captcha")],vo);var xo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},wo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let $o=class extends oe{constructor(){super(...arguments),this.text="",this.href="",this.targetType="_self"}render(){return z`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};$o.styles=r`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,xo([ce({type:String}),wo("design:type",String)],$o.prototype,"text",void 0),xo([ce({type:String}),wo("design:type",String)],$o.prototype,"href",void 0),xo([ce({type:String}),wo("design:type",String)],$o.prototype,"targetType",void 0),$o=xo([ae("nidoca-link")],$o);var So=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ro=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ko=class extends oe{constructor(){super(...arguments),this.theme=ie.surface,this.primaryText="",this.secondaryText="",this.selected=!1}render(){return z`
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
    `}switchSelected(){this.selected=Boolean(!this.selected),this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this.selected,bubbles:!0,composed:!0}))}static example(e=""){return z`<nidoca-list-item
      theme="primary"
      slot="${e}"
      primaryText="List Item"
      secondaryText="List Item Secondary Text"
    >
      ${uo.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};ko.styles=r`
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
  `,So([ce({type:ie,converter:String}),Ro("design:type",String)],ko.prototype,"theme",void 0),So([ce({type:String}),Ro("design:type",String)],ko.prototype,"primaryText",void 0),So([ce({type:String}),Ro("design:type",String)],ko.prototype,"secondaryText",void 0),So([ce({type:Boolean}),Ro("design:type",Boolean)],ko.prototype,"selected",void 0),ko=So([ae("nidoca-list-item")],ko);var Oo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},jo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Eo=class extends oe{constructor(){super(...arguments),this.theme=ie.surface,this.multiselect=!1}updated(e){super.updated(e),e.forEach(((e,t)=>{"theme"==t&&this.getItems().forEach((e=>{e.theme=this.theme}))}))}render(){return z`
      <slot
        @nidoca-event-list-item-clicked="${e=>{this.multiselect||(this.unselectAll(),e.target.selected=!0)}}"
        id="slotElement"
      ></slot>
    `}getItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof ko&&e.push(n)}}return e}getSelectedItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof ko&&n.selected&&e.push(n)}}return e}getSelectedIndexes(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();let o=0;for(let n=0;n<t.length;n++){const i=t[n];i instanceof ko&&(i.selected&&e.push(o),o++)}}return e}selectAll(){this.getItems().forEach((e=>{e.selected=!0}))}unselectAll(){this.getItems().forEach((e=>{e.selected=!1}))}static example(){return z`<nidoca-list theme="primary">
      ${To.example()} ${ko.example()} ${ko.example()} ${ko.example()}
    </nidoca-list>`}};Eo.styles=r`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Oo([ce({type:ie,converter:String}),jo("design:type",String)],Eo.prototype,"theme",void 0),Oo([ce({type:Boolean}),jo("design:type",Boolean)],Eo.prototype,"multiselect",void 0),Oo([le("#slotElement"),jo("design:type",Object)],Eo.prototype,"slotElement",void 0),Eo=Oo([ae("nidoca-list")],Eo);var Po=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Co=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let To=class extends oe{constructor(){super(...arguments),this.theme=ie.surface,this.text=""}render(){return z`
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
    `}static example(){return z`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};To.styles=r`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,Po([ce({type:ie,converter:String}),Co("design:type",String)],To.prototype,"theme",void 0),Po([ce({type:String}),Co("design:type",String)],To.prototype,"text",void 0),To=Po([ae("nidoca-list-section")],To);var _o=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ao=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Io=class extends oe{constructor(){super(...arguments),this.theme=ie.primary,this.prominent=!1}render(){return z`
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
    `}static example(e=""){return z`
      <nidoca-top-app-bar slot="${e}" style="min-height: 48px;" theme="primary" prominent>
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>
        <nidoca-search-bar theme="primary" slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>
    `}};Io.styles=r`
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
  `,_o([ce({type:String,converter:String}),Ao("design:type",String)],Io.prototype,"theme",void 0),_o([ce({type:Boolean}),Ao("design:type",Boolean)],Io.prototype,"prominent",void 0),Io=_o([ae("nidoca-top-app-bar")],Io);var Do=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},zo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Bo=class extends oe{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new no],["row 2",new no]],this.theme=ie.plain}render(){return z`
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
            ${ot([this.headers],(()=>z` ${et(this.headers,(e=>z` <th colspan="1" rowspan="1">${e}</th> `))} `))}
          </thead>
          <tbody>
            ${ot([this.rows],(()=>z`
                  ${et(this.rows,(e=>z`
                        <tr>
                          ${et(e,(e=>z` <td colspan="1" rowspan="1">${e}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Bo.styles=r`
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
  `,Do([ce({type:Array}),zo("design:type",Array)],Bo.prototype,"headers",void 0),Do([ce({type:Array}),zo("design:type",Array)],Bo.prototype,"rows",void 0),Do([ce({type:ie,converter:String}),zo("design:type",String)],Bo.prototype,"theme",void 0),Bo=Do([ae("nidoca-table")],Bo);var Lo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let No=class extends oe{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?z` <slot></slot>`:z``}};No.styles=r`
    :host,
    slot {
      display: block;
    }
  `,Lo([ce({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],No.prototype,"selected",void 0),No=Lo([ae("nidoca-tab-content")],No);var Uo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ho=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Mo=class extends oe{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=ie.surface}render(){return z`
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
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Mo.styles=r`
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
  `,Uo([ce({type:Boolean}),Ho("design:type",Boolean)],Mo.prototype,"selected",void 0),Uo([ce({type:String}),Ho("design:type",String)],Mo.prototype,"text",void 0),Uo([ce({type:String}),Ho("design:type",String)],Mo.prototype,"theme",void 0),Mo=Uo([ae("nidoca-tab")],Mo);var qo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Go=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Wo=class extends oe{constructor(){super(...arguments),this.theme=ie.surface,this.tabIndex=0}render(){return z`
      <div class="container" @nidoca-event-tab-clicked="${e=>this.tabClicked(e)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this.tabIndexChanged()}update(e){super.update(e),null!=e.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const e=this.tabSlot.assignedElements(),t=100/e.length,o=e[this.tabIndex];for(let n=0;n<e.length;n++){const i=e[n];i instanceof Mo&&(i.theme=this.theme,i.style.width=String(t).concat("%"),i==o?(i.selected=!0,i.classList.add("SELECTED")):(i.selected=!1,i.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let e=0;if(null!=this.tabContentSlot){const t=this.tabContentSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof No&&(this.tabIndex==e?n.selected=!0:n.selected=!1,e++)}}}tabClicked(e){const t=e.detail;this.changeTabIndex(t)}changeTabIndex(e){if(!e.selected&&null!=this.tabSlot){const t=this.tabSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];if(n instanceof Mo&&n==e){this.tabIndex=o;break}}}}static example(e=""){return z`
      <nidoca-tabs theme="surface" slot="${e}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${Jn.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${Jn.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${Jn.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};Wo.styles=r`
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
  `,qo([le("#tabSlot"),Go("design:type",Object)],Wo.prototype,"tabSlot",void 0),qo([le("#tabContentSlot"),Go("design:type",Object)],Wo.prototype,"tabContentSlot",void 0),qo([ce({type:String}),Go("design:type",String)],Wo.prototype,"theme",void 0),qo([ce({type:Number}),Go("design:type",Number)],Wo.prototype,"tabIndex",void 0),Wo=qo([ae("nidoca-tabs")],Wo);var Fo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Vo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ko=class extends oe{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(e=>{if(!this.hideLeft&&this.leftElement){console.log("close");const t=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=e.x-t.width}}))}updated(e){super.updated(e)}render(){return z`
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
    `}};Ko.styles=r`
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
  `,Fo([ce({type:Boolean}),Vo("design:type",Boolean)],Ko.prototype,"hideLeft",void 0),Fo([ce({type:Boolean}),Vo("design:type",Boolean)],Ko.prototype,"prominent",void 0),Fo([le("#header"),Vo("design:type",Object)],Ko.prototype,"headerElement",void 0),Fo([le("#left"),Vo("design:type",Object)],Ko.prototype,"leftElement",void 0),Fo([le("#content"),Vo("design:type",Object)],Ko.prototype,"contentElement",void 0),Ko=Fo([ae("nidoca-template"),Vo("design:paramtypes",[])],Ko);var Xo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Yo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Jo=class extends oe{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((e=>{this.videoElement&&(this.videoElement.srcObject=e)}))}render(){return z`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){const e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);const t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};Jo.styles=r``,Xo([le("#video"),Yo("design:type",Object)],Jo.prototype,"videoElement",void 0),Xo([le("#canvas"),Yo("design:type",Object)],Jo.prototype,"canvasElement",void 0),Xo([le("#click-photo"),Yo("design:type",Object)],Jo.prototype,"buttonElement",void 0),Jo=Xo([ae("nidoca-video")],Jo);var Zo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Qo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let en=class extends oe{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return z`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((e=>z`${e}`))}
    `}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"src"==t&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((e=>{const t=document.createElement("canvas");t.width=e[0],t.height=e[1];const o=t.getContext("2d");o&&this.img&&(this.img.crossOrigin="anonymous",o.drawImage(this.img,0,0,e[0],e[1]),t.toBlob((e=>{}),"image/webp")),this.canvasElements.push(t)})),this.requestUpdate()})}};en.styles=r``,Zo([ce({type:String}),Qo("design:type",String)],en.prototype,"src",void 0),Zo([le("#img"),Qo("design:type",Object)],en.prototype,"img",void 0),en=Zo([ae("nidoca-svg-2-webp")],en);var tn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},on=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let nn=class extends oe{constructor(){super(...arguments),this.theme=ie.surface,this.text=""}render(){return z`<style>
        slot {
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}static example(e=""){return z`
      <div slot="${e}">
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
    `}};nn.styles=r`
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
  `,tn([ce({type:ie,converter:String}),on("design:type",Object)],nn.prototype,"theme",void 0),tn([ce({type:String}),on("design:type",String)],nn.prototype,"text",void 0),nn=tn([ae("nidoca-text")],nn);let rn=class extends nn{render(){return z` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};rn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 105%;
    }
  `,rn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-body")],rn);let an=class extends nn{render(){return z`${super.render()}`}};an.styles=r`
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
  `,an=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-button")],an);let sn=class extends nn{};sn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,sn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-overline")],sn);let cn=class extends nn{render(){return z` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};cn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,cn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-subtitle")],cn);let ln=class extends nn{render(){return z`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};ln.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,ln=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-caption")],ln);let dn=class extends ln{render(){return z`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};dn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-error")],dn);let pn=class extends ln{render(){return z`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};pn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-success")],pn);let hn=class extends ln{render(){return z`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};hn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-warning")],hn);let fn=class extends ln{render(){return z`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};fn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-info")],fn);let un=class extends nn{};un.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,un=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-h1")],un);let mn=class extends nn{};mn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,mn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-h2")],mn);let gn=class extends nn{};gn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,gn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-h3")],gn);let yn=class extends nn{};yn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,yn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-h4")],yn);let bn=class extends nn{};bn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,bn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-h5")],bn);let vn=class extends nn{};vn.styles=r`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,vn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-text-h6")],vn);var xn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},wn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let $n=class extends oe{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=ie.surface}render(){return z`
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
    `}clearValue(){this.value=""}valueChanged(){var e;return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){const t=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(e=this.inputElement)||void 0===e?void 0:e.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}))}static example(e=""){return z`<nidoca-search-bar slot="${e}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};$n.styles=r`
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
  `,xn([ce({type:String}),wn("design:type",String)],$n.prototype,"value",void 0),xn([ce({type:String}),wn("design:type",String)],$n.prototype,"placeholder",void 0),xn([ce({type:Boolean}),wn("design:type",Boolean)],$n.prototype,"disabled",void 0),xn([le("#inputElement"),wn("design:type",Object)],$n.prototype,"inputElement",void 0),xn([ce({type:ie,converter:String}),wn("design:type",String)],$n.prototype,"theme",void 0),$n=xn([ae("nidoca-search-bar")],$n);var Sn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Rn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class kn{}kn.CENTER="CENTER",kn.LEFT="LEFT",kn.RIGHT="RIGHT",kn.TOP="TOP",kn.BOTTOM="BOTTOM",kn.SLIDE_CENTER="SLIDE_CENTER",kn.SLIDE_LEFT="SLIDE_LEFT",kn.SLIDE_RIGHT="SLIDE_RIGHT",kn.SLIDE_TOP="SLIDE_TOP",kn.SLIDE_BOTTOM="SLIDE_BOTTOM";let On=class extends oe{constructor(){super(...arguments),this.transitionType=kn.CENTER,this.duration=.5}render(){return z` <div class="${at(this.transitionType)}"><slot></slot></div> `}};On.styles=r`
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
  `,Sn([ce({type:String}),Rn("design:type",String)],On.prototype,"transitionType",void 0),Sn([ce({type:Number}),Rn("design:type",Number)],On.prototype,"duration",void 0),On=Sn([ae("nidoca-transition")],On);var jn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let En=class extends oe{constructor(){super(...arguments),this.show=!1}render(){return this.show?z`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${kn.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:z``}};En.styles=r`
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
  `,jn([ce({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],En.prototype,"show",void 0),En=jn([ae("nidoca-dialog")],En);var Pn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Cn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Tn=class extends oe{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return z`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Be.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Be.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};Tn.styles=r``,Pn([ce({type:Boolean}),Cn("design:type",Boolean)],Tn.prototype,"show",void 0),Pn([ce({type:String}),Cn("design:type",String)],Tn.prototype,"title",void 0),Pn([ce({type:String}),Cn("design:type",String)],Tn.prototype,"description",void 0),Pn([ce({type:String}),Cn("design:type",String)],Tn.prototype,"labelButtonYes",void 0),Pn([ce({type:String}),Cn("design:type",String)],Tn.prototype,"labelButtonNo",void 0),Tn=Pn([ae("nidoca-dialog-decision")],Tn);var _n=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},An=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let In=class extends oe{constructor(){super(...arguments),this.theme=ie.surface,this.src="",this.title="",this.subtitle=""}render(){return z`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.src}"></nidoca-img-round>
                <div style="padding: var(--space);">
                <nidoca-text-body style="text-align:center;" theme="${this.theme}">${this.title}</nidoca-text-body>
                <nidoca-text-caption style="text-align:center;" theme="${this.theme}">${this.subtitle}</nidoca-text-caption>

  </div>
            </div>
            </div>`}static example(e=""){return z`<nidoca-avatar
      width="64px"
      width="64px"
      slot="${e}"
      title="Dominik Bruhn"
      subtitle="Softwareentwickler"
      src="face.jpg"
      >Dominik Bruhn</nidoca-avatar
    >`}};In.styles=r`
    :host {
      display: block;
    }
  `,_n([ce({type:ie,converter:String}),An("design:type",String)],In.prototype,"theme",void 0),_n([ce({type:String}),An("design:type",String)],In.prototype,"src",void 0),_n([ce({type:String}),An("design:type",String)],In.prototype,"title",void 0),_n([ce({type:String}),An("design:type",String)],In.prototype,"subtitle",void 0),In=_n([ae("nidoca-avatar")],In);var Dn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let zn=class extends oe{constructor(){super(...arguments),this.theme=ie.plain}render(){return z`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};zn.styles=r`
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
  `,Dn([ce({type:ie,converter:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],zn.prototype,"theme",void 0),zn=Dn([ae("nidoca-card")],zn);let Bn=class extends oe{render(){return z`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();for(let e=0;e<o.length;e++){const t=o[e].classList;t.contains("flexItem")||t.add("flexItem"),t.contains("flexItemDevice")||t.add("flexItemDevice")}}};Bn.styles=r`
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
  `,Bn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-gallery")],Bn);let Ln=class extends oe{render(){return z`<slot></slot>`}print(){const e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};Ln.styles=r`
    :host {
      display: none;
    }
  `,Ln=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-print")],Ln);let Nn=class extends oe{constructor(){super(...arguments),this.flexBasis="auto"}render(){return z`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){const t=e.target,o=t.offsetWidth,n=t.assignedElements(),i=n.length,r=[];let a=0;for(let e=0;e<i;e++){const t=n[e];if(t.setAttribute("class","item"),t instanceof HTMLElement){const e=t.style.width;if(0==e.length)r.push(t);else{const t=e.toUpperCase();a+=t.indexOf("PX")>-1?Number(t.replace("PX","")):Number(t.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),0==s&&(s=100/i),this.flexBasis=String(s/r.length)+"%",this.requestUpdate()}};Nn.styles=r`
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
  `,Nn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-section")],Nn);var Un=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Hn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Mn=class extends oe{render(){return z` <slot></slot>`}};Mn.styles=r`
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
  `,Mn=Un([ae("nidoca-dashboard")],Mn);let qn=class extends oe{render(){return z` <slot></slot>`}};qn.styles=r`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,qn=Un([ae("nidoca-dashboard-box-25")],qn);let Gn=class extends oe{render(){return z` <slot></slot>`}};Gn.styles=r`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,Gn=Un([ae("nidoca-dashboard-box-50")],Gn);let Wn=class extends oe{render(){return z` <slot></slot>`}};Wn.styles=r`
    :host {
      width: 100%;
      display: block;
    }
  `,Wn=Un([ae("nidoca-dashboard-box-100")],Wn);let Fn=class extends oe{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return z`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Fn.styles=r`
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
  `,Un([ce({type:Boolean}),Hn("design:type",Boolean)],Fn.prototype,"clickable",void 0),Un([ce({type:String}),Hn("design:type",String)],Fn.prototype,"title",void 0),Fn=Un([ae("nidoca-dashboard-card")],Fn);var Vn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Kn=class extends oe{constructor(){super(...arguments),this.theme=ie.plain}render(){return z`
      ${re.getStyle(this.theme)}
      <slot></slot>
    `}};Kn.styles=r`
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
  `,Vn([ce({type:ie,converter:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],Kn.prototype,"theme",void 0),Kn=Vn([ae("nidoca-box")],Kn);var Xn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Yn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Jn=class extends oe{constructor(){super(...arguments),this.theme=ie.plain,this.overline="",this.title="",this.summary="",this.text=""}render(){return z`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?z` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:z``}
        ${this.title?z` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:z``}
        ${this.summary?z`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:z``}
        ${this.text?z` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:z``}
        <slot></slot>
      </div>
    `}static example(e=""){return z`<nidoca-article
      theme="plain"
      slot="${e}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`}};Jn.styles=r`
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
  `,Xn([ce({type:ie,converter:String}),Yn("design:type",String)],Jn.prototype,"theme",void 0),Xn([ce({type:String}),Yn("design:type",String)],Jn.prototype,"overline",void 0),Xn([ce({type:String}),Yn("design:type",String)],Jn.prototype,"title",void 0),Xn([ce({type:String}),Yn("design:type",String)],Jn.prototype,"summary",void 0),Xn([ce({type:String}),Yn("design:type",String)],Jn.prototype,"text",void 0),Jn=Xn([ae("nidoca-article")],Jn);var Zn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Qn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ei=class extends oe{constructor(){super(...arguments),this.theme=ie.primary,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return z`
      <nidoca-box theme="${at(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${st.text}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${st.email}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${st.text}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${re.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${Be.contained}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};ei.styles=r`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Zn([ce({type:ie,converter:String}),Qn("design:type",Object)],ei.prototype,"theme",void 0),Zn([ce({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"label",void 0),Zn([ce({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"nameLabel",void 0),Zn([ce({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"emailLabel",void 0),Zn([ce({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"titleLabel",void 0),Zn([ce({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"messageLabel",void 0),Zn([ce({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"buttonLabel",void 0),Zn([le("#authenitcate-form"),Qn("design:type",Object)],ei.prototype,"formComponent",void 0),ei=Zn([ae("nidoca-form-contact")],ei);let ti=class extends oe{render(){return z`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `}};ti.styles=r`
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
  `,ti=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-page-login")],ti);var oi,ni=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ii=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.anchor="anchor",e.page="page"}(oi||(oi={}));let ri=class extends oe{constructor(){super(...arguments),this.loggedIn=!1}updated(e){if(super.updated(e),e.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),e.has("route")&&this.root){for(let e=0;e<this.root.childs.length;e++){const t=this.root.childs[e];if(t.route==this.route){this.contentComponent=document.createElement(t.rootComponent);break}}this.requestUpdate()}}render(){var e;return this.loggedIn?z`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?z`${this.contentComponent}`:z``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(e=this.root)||void 0===e?void 0:e.childs.map((e=>z` <nidoca-menu-item
                        text="${e.name}"
                        @click="${()=>{this.routeTo(e)}}"
                      ></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:z` <nidoca-page-login
          @nidoca-form-login-submit="${e=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:e.detail,bubbles:!0,composed:!0}))}}"
        ></nidoca-page-login>`}routeTo(e){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:e.route,bubbles:!0,composed:!0}))}};ni([ce({type:Array}),ii("design:type",Object)],ri.prototype,"root",void 0),ni([ce({type:Boolean}),ii("design:type",Boolean)],ri.prototype,"loggedIn",void 0),ni([ce({type:String,converter:String}),ii("design:type",Object)],ri.prototype,"route",void 0),ri=ni([ae("nidoca-app")],ri);let ai=class extends oe{render(){return z`
      <nidoca-container style="">
        <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
          <nidoca-img src="logo.svg" width="128px"></nidoca-img>
          <nidoca-text-h2 style="padding-left:var(--space-2);">nidoca-webcomponents</nidoca-text-h2>
        </div>
      </nidoca-container>
      <!--
      <nidoca-container theme="primary">
        <nidoca-text-h1 style="text-align:center;">HTML Einbindung</nidoca-text-h1>

        <nidoca-code
          >&lt;script
          src=&quot;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca-webcomponents.js&quot;&gt;&lt;/script&gt;
          &lt;style&gt;@import
          url(&#39;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca.css&#39;);&lt;/style&gt;
          &lt;nidoca-button&gt;Mein Button&lt;/nidoca-button&gt;
        </nidoca-code>
      </nidoca-container>
  -->
      <nidoca-container>
        <nidoca-text-h1 style="text-align:center;">Komponenten</nidoca-text-h1>
      </nidoca-container>

      ${this.getComponentHtml(Pe,new Pe,"Komponente um Quellcode darzustellen.")}
      ${this.getComponentHtml(Wo,new Wo,"Top App Bar Komponente")}
      ${this.getComponentHtml(nn,new nn,"Typography Komponenten")}
      ${this.getComponentHtml(Io,new Io,"Top App Bar Komponente")}
      ${this.getComponentHtml(Oe,new Oe,"Chip Komponente")}
      ${this.getComponentHtml(Jn,new Jn,"Artikel Komponente")}
      ${this.getComponentHtml(ye,new ye,"Accordion Komponente")}
      ${this.getComponentHtml(Ue,new Ue,"Button")}
      ${this.getComponentHtml(Ft,new Ft,"Menü")}
      ${this.getComponentHtml(qt,new qt,"Menüelement")}
      ${this.getComponentHtml(Ut,new Ut,"Menübereich")}
      ${this.getComponentHtml($n,new $n,"Suchfeld")}
      ${this.getComponentHtml(fo,new fo,"Einfaches Bild")}
      ${this.getComponentHtml(uo,new uo,"Rundes Bild")}
      ${this.getComponentHtml(In,new In,"Avatar Komponente, Bild mit Text")}
      ${this.getComponentHtml(To,new To,"Unterkomponente für die Komponente <nidoca-list/>")}
      ${this.getComponentHtml(ko,new ko,"Unterkomponente für die Komponente <nidoca-list/>")}
      ${this.getComponentHtml(Eo,new Eo,"Listenkomponente für mobile und Desktop Anwendungen. Unterkomponenten dieser Komponente sind nidoca-list-section und nidoca-list-item")}
    `}getComponentHtml(e,t,o){return z` <nidoca-container>
      <nidoca-section style="padding:var(--space-4);">
        <nidoca-card style="padding:var(--space-4); heigth:500px;"> ${e.example()} </nidoca-card>
        <nidoca-article
          style="padding:var(--space-4);"
          theme="plain"
          overline="<${t.tagName}></${t.tagName}>"
          title="${t.tagName}"
          text="${o}"
        >
          <nidoca-button
            style="width:250px;"
            @nidoca-event-button-clicked="${()=>window.open("https://domoskanonos.github.io/nidoca-lit-viewer/","_blank")}"
            >Ausprobieren</nidoca-button
          >
        </nidoca-article>
      </nidoca-section>
    </nidoca-container>`}};ai.styles=r``,ai=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-page-main")],ai);let si=class extends oe{render(){return z`
      <nidoca-container>
        <nidoca-article title="Impressum" summary="Angaben gemäß § 5 TMG">
          <nidoca-text>Dominik Bruhn</nidoca-text>
          <nidoca-text>Holzwickeder Straße 109c</nidoca-text>
          <nidoca-text>44309 Dortmund</nidoca-text>
          <nidoca-layout-spacer></nidoca-layout-spacer>
          <nidoca-text>Telefonnummer: +49 152 052 488 62</nidoca-text>
          <nidoca-text>E-Mail: dominikbruhn [at] googlemail.com</nidoca-text>
        </nidoca-article>
        <nidoca-article title="Streitsschlichtung">
          <nidoca-text
            >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="_blanck"
              >https://ec.europa.eu/consumers/odr
            </nidoca-link>
            . <br />Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.
          </nidoca-text>
          <nidoca-text>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </nidoca-text>
        </nidoca-article>
        <nidoca-article title="Haftungsinhalt">
          <nidoca-text>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.<br />
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </nidoca-text>
        </nidoca-article>
        <nidoca-article title="Haftungslinks">
          <nidoca-text>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </nidoca-text>
        </nidoca-article>
        <nidoca-article title="Copyright">
          <nidoca-text>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </nidoca-text>
        </nidoca-article>
        <nidoca-article title="Quelle">
          <nidoca-link href="https://www.e-recht24.de/impressum-generator.html" targetType="_blanck"
            >https://www.e-recht24.de/impressum-generator.html
          </nidoca-link>
        </nidoca-article>
        <nidoca-article title="Google Material Icons">
          <nidoca-text> Unser Framework und diese Seite verwenden die Google Material Icons Bibliothek: </nidoca-text>
          <nidoca-link href="https://fonts.google.com/icons" targetType="_blanck"
            >https://fonts.google.com/icons
          </nidoca-link>
        </nidoca-article>
        <nidoca-article title="Google Fonts">
          <nidoca-text> Unser Framework und diese Seite verwenden Google Fonts: </nidoca-text>
          <nidoca-link href=" https://fonts.google.com/" targetType="_blanck"> https://fonts.google.com/ </nidoca-link>
        </nidoca-article>
      </nidoca-container>
    `}};si.styles=r`
    nidoca-article {
      padding-bottom: var(--space-2);
    }
  `,si=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-page-imprint")],si);var ci=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let li=class extends oe{constructor(){super(...arguments),this.cssVars=[]}firstUpdated(){this.cssVars=((e=document.styleSheets)=>{const t=[];return Array.from(e).forEach((e=>{Array.from(e.cssRules).forEach((e=>{if(!e||!e.style)return;const o=e.style;Array.from(o).forEach((e=>{e.startsWith("--")&&-1==t.indexOf(e)&&t.push(e)}))}))})),t})(),console.log(this.cssVars)}render(){return z`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${ot([this.cssVars],(()=>z`
                ${et(this.cssVars,(e=>z`
                    <nidoca-form-text
                      style="width:100%;padding-bottom: var(--space-3);"
                      @input="${t=>{document.documentElement.style.setProperty(e,t.target?t.target.getOutputData().value:"")}}"
                      type="${e.indexOf("color")>-1?st.COLOR:st.TEXT}"
                      name="${e}"
                      value="${getComputedStyle(document.documentElement).getPropertyValue(e).trim()}"
                      label="${e}"
                    ></nidoca-form-text>
                  `))}
              `))}
        </nidoca-article>
      </nidoca-container>
    `}};li.styles=r``,ci([ce({type:Array}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Array)],li.prototype,"cssVars",void 0),li=ci([ae("nidoca-page-settings")],li);let di=class extends oe{render(){return z``}};di.styles=r``,di=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-page-privacy")],di);let pi=class extends oe{render(){return z``}};pi.styles=r``,pi=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ae("nidoca-page-terms-of-use")],pi);class hi{constructor(){this.listeners=[],window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",(e=>{if(!this.shouldIgnoreEvent(e)){const t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}}))}static getUniqueInstance(){return hi.uniqueInstance||(hi.uniqueInstance=new hi),hi.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){-1==e.indexOf("#")&&(e="#".concat(e)),console.trace("navigate to: %s",e),null!=t&&console.trace("state: %s",JSON.stringify(t)),document.location.hash!==e?(history.pushState(t,"",e),this.notifyListeners()):console.trace("you are already on page: "+e)}getCurrentState(){return history.state}getStateProperty(e){const t=this.getCurrentState();return null!=t?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const e=this.getCurrentPage();this.listeners.forEach((t=>t.routeChanged(e)))}shouldIgnoreEvent(e){return e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(const t of e.composedPath?e.composedPath():[])if(this.isAnchor(t))return t;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&"a"===e.nodeName.toLowerCase()}shouldIgnoreAnchor(e){return!(!e.target||"_self"===e.target.toLowerCase())||(!!e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){const t=e.port,o=e.protocol;return`${o}//${"http:"===o&&"80"===t||"https:"===o&&"443"===t?e.hostname:e.host}`}}var fi,ui=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},mi=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let gi=class extends oe{constructor(){super(),this.content=z``,hi.getUniqueInstance().subscribe(this),this.routeChanged(hi.getUniqueInstance().getCurrentPage())}routeChanged(e){switch(e){case"privacy":this.content=z`<nidoca-page-privacy></nidoca-page-privacy>`;break;case"imprint":this.content=z`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"settings":this.content=z`<nidoca-page-settings></nidoca-page-settings>`;break;case"terms-of-use":this.content=z`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;default:this.content=z`<nidoca-page-main></nidoca-page-main>`}}render(){return z`
      <nidoca-template>
        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_self"
          href="https://domoskanonos.github.io/nidoca-webcomponents/"
          >Homepage</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-webcomponents/docs/index.html"
          >Typedoc</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://github.com/domoskanonos/nidoca-webcomponents"
          >Github</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-lit-viewer/"
          >Spielwiese</nidoca-link
        >

        <div slot="content">${this.content}</div>

        <div slot="left" style="height:var(--height-medium);"></div>
        <nidoca-menu slot="left" theme="primary">
          <nidoca-menu-item
            @nidoca-event-menu-item-clicked="${()=>{hi.getUniqueInstance().navigate("#main")}}"
            icon="home"
            text="Start"
          ></nidoca-menu-item>
          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
          <nidoca-menu-item
            text="Impressum"
            @nidoca-event-menu-item-clicked="${()=>{hi.getUniqueInstance().navigate("#imprint")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Datenschutz"
            @nidoca-event-menu-item-clicked="${()=>{hi.getUniqueInstance().navigate("#privacy")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @nidoca-event-menu-item-clicked="${()=>{hi.getUniqueInstance().navigate("#terms-of-use")}}"
          ></nidoca-menu-item>
          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
          <nidoca-menu-item
            text="Einstellungen"
            @nidoca-event-menu-item-clicked="${()=>{hi.getUniqueInstance().navigate("#settings")}}"
          ></nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
    `}};ui([ce({type:Object}),mi("design:type","function"==typeof(fi="undefined"!=typeof TemplateResult&&TemplateResult)?fi:Object)],gi.prototype,"content",void 0),gi=ui([ae("nidoca-my-app"),mi("design:paramtypes",[])],gi)})();