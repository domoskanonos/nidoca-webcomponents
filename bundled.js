/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),o=new WeakMap;class n{constructor(e,o,n){if(this._$cssResult$=!0,n!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let t=this.o;const n=this.t;if(e&&void 0===t){const e=void 0!==n&&1===n.length;e&&(t=o.get(n)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o.set(n,t))}return t}toString(){return this.cssText}}const i=(e,...o)=>{const i=1===e.length?e[0]:o.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new n(i,e,t)},r=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let o="";for(const t of e.cssRules)o+=t.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,t))(o)})(e):e;var a;const s=window.trustedTypes,c=s?s.emptyScript:"",l=window.reactiveElementPolyfillSupport,d={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},p=(e,t)=>t!==e&&(t==t||e==e),h={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:p};class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=h){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{e?t.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),n=window.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=h){var n,i;const r=this.constructor._$Ep(e,o);if(void 0!==r&&!0===o.reflect){const a=(null!==(i=null===(n=o.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:d.toAttribute)(t,o.type);this._$El=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(e,t){var o,n;const i=this.constructor,r=i._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=i.getPropertyOptions(r),a=e.converter,s=null!==(n=null!==(o=null==a?void 0:a.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==n?n:d.fromAttribute;this._$El=r,this[r]=s(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var u;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:f}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.3.3");const g=globalThis.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,b="?"+m,v=`<${b}>`,x=document,w=(e="")=>x.createComment(e),R=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,S=e=>{var t;return $(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,j=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,_=/"/g,T=/^(?:script|style|textarea|title)$/i,C=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),A=C(1),D=(C(2),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),L=new WeakMap,z=x.createTreeWalker(x,129,null,!1),B=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=k;for(let t=0;t<o;t++){const o=e[t];let s,c,l=-1,d=0;for(;d<o.length&&(a.lastIndex=d,c=a.exec(o),null!==c);)d=a.lastIndex,a===k?"!--"===c[1]?a=O:void 0!==c[1]?a=j:void 0!==c[2]?(T.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=E):void 0!==c[3]&&(a=E):a===E?">"===c[0]?(a=null!=i?i:k,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?E:'"'===c[3]?_:P):a===_||a===P?a=E:a===O||a===j?a=k:(a=E,i=void 0);const p=a===E&&e[t+1].startsWith("/>")?" ":"";r+=a===k?o+v:l>=0?(n.push(s),o.slice(0,l)+"$lit$"+o.slice(l)+m+p):o+m+(-2===l?(n.push(void 0),t):p)}const s=r+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(s):s,n]};class N{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,s=this.parts,[c,l]=B(e,t);if(this.el=N.createElement(c,o),z.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=z.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(m)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+"$lit$").split(m),t=/([.?@])?(.*)/.exec(o);s.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?W:"?"===t[1]?F:"@"===t[1]?V:q})}else s.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(T.test(n.tagName)){const e=n.textContent.split(m),t=e.length-1;if(t>0){n.textContent=g?g.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],w()),z.nextNode(),s.push({type:2,index:++i});n.append(e[t],w())}}}else if(8===n.nodeType)if(n.data===b)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(m,e+1));)s.push({type:7,index:i}),e+=m.length-1}i++}}static createElement(e,t){const o=x.createElement("template");return o.innerHTML=e,o}}function U(e,t,o=e,n){var i,r,a,s;if(t===D)return t;let c=void 0!==n?null===(i=o._$Cl)||void 0===i?void 0:i[n]:o._$Cu;const l=R(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=c:o._$Cu=c),void 0!==c&&(t=U(e,c._$AS(e,t.values),c,n)),t}class M{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(o,!0);z.currentNode=i;let r=z.nextNode(),a=0,s=0,c=n[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new H(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new K(r,this,e)),this.v.push(t),c=n[++s]}a!==(null==c?void 0:c.index)&&(r=z.nextNode(),a++)}return i}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class H{constructor(e,t,o,n){var i;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cg=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),R(e)?e===I||null==e||""===e?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==D&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):S(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==I&&R(this._$AH)?this._$AA.nextSibling.data=e:this.k(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=N.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.m(o);else{const e=new M(i,this),t=e.p(this.options);e.m(o),this.k(t),this._$AH=e}}_$AC(e){let t=L.get(e.strings);return void 0===t&&L.set(e.strings,t=new N(e)),t}S(e){$(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new H(this.M(w()),this.M(w()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class q{constructor(e,t,o,n,i){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=U(this,e,t,0),r=!R(e)||e!==this._$AH&&e!==D,r&&(this._$AH=e);else{const n=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=U(this,n[o+a],t,a),s===D&&(s=this._$AH[a]),r||(r=!R(s)||s!==this._$AH[a]),s===I?e=I:e!==I&&(e+=(null!=s?s:"")+i[a+1]),this._$AH[a]=s}r&&!n&&this.C(e)}C(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class W extends q{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===I?void 0:e}}const G=g?g.emptyScript:"";class F extends q{constructor(){super(...arguments),this.type=4}C(e){e&&e!==I?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class V extends q{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=U(this,e,t,0))&&void 0!==o?o:I)===D)return;const n=this._$AH,i=e===I&&n!==I||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==I&&(n===I||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class K{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const X={L:"$lit$",P:m,V:b,I:1,N:B,R:M,j:S,D:U,H,F:q,O:F,W:V,B:W,Z:K},Y=window.litHtmlPolyfillSupport;var Z,J;null==Y||Y(N,H),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.2.6");class Q extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let a=r._$litPart$;if(void 0===a){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=a=new H(t.insertBefore(w(),e),e,void 0,null!=o?o:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return D}}Q.finalized=!0,Q._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Q});const ee=globalThis.litElementPolyfillSupport;var te;null==ee||ee({LitElement:Q}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.1"),function(e){e.primary="primary",e.secondary="secondary",e.surface="surface",e.background="background",e.transparent="transparent"}(te||(te={}));class oe{static getStyle(e){return e?e==te.transparent?A``:A` <style>
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
          </style>`:A``}static getOposite(e){return e==te.background?te.surface:e==te.primary||e==te.primary?te.secondary:e==te.secondary?te.primary:te.background}getParentTheme(e){let t=e;for(;null!=t;){if(null!=t.theme)return t.theme;t=t.parentElement}}}const ne=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),ie=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function re(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):ie(e,t)}function ae(e,t){return(({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}})({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var se;null===(se=window.HTMLSlotElement)||void 0===se||se.prototype.assignedElements;var ce=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},le=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let de=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return A`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?A` <slot></slot>`:A``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};de.styles=i`
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
  `,ce([re({type:String}),le("design:type",String)],de.prototype,"header",void 0),ce([re({type:Boolean}),le("design:type",Boolean)],de.prototype,"opened",void 0),de=ce([ne("nidoca-accordion-item")],de);var pe,he=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},fe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.single="single",e.multi="multi"}(pe||(pe={}));let ue=class extends Q{constructor(){super(...arguments),this.theme=te.surface,this.accordionType=pe.single}render(){return A`
      ${oe.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${e=>this.accordionSwitched(e)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(e){const t=e.detail;switch(this.accordionType){case pe.single:if(null!=this.accordionSlot){const e=this.accordionSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof de&&n!=t&&(n.opened=!1)}}case pe.multi:}e.stopPropagation()}};ue.styles=i`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    slot {
      font-size: 0;
    }
  `,he([re({type:te,converter:String}),fe("design:type",String)],ue.prototype,"theme",void 0),he([re({type:pe,converter:String}),fe("design:type",String)],ue.prototype,"accordionType",void 0),he([ae("#accordionSlot"),fe("design:type",Object)],ue.prototype,"accordionSlot",void 0),ue=he([ne("nidoca-accordion")],ue);var ge,ye=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},me=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e[e.current=0]="current",e[e.completed=1]="completed",e[e.open=2]="open",e[e.finish=3]="finish"}(ge||(ge={}));let be=class extends Q{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return A`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${oo.NONE}"
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

          ${this.isLast?A``:A`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(e){return e==ge.completed?"var(--app-color-primary)":e==ge.current?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(e){return e==ge.finish?"var(--app-color-success)":e==ge.completed?"var(--mdc-theme-on-primary)":e==ge.current?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const e=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}};be.styles=i`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space);
    }

    .wizard-step-connector.selected {
      padding: var(--space);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-color-primary);
    }
  `,ye([re({type:String}),me("design:type",String)],be.prototype,"icon",void 0),ye([re({type:String}),me("design:type",String)],be.prototype,"primaryText",void 0),ye([re({type:Number}),me("design:type",Object)],be.prototype,"state",void 0),ye([re({type:Boolean}),me("design:type",Boolean)],be.prototype,"isLast",void 0),be=ye([ne("nidoca-wizard-step")],be);var ve=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let xe=class extends Q{render(){return A`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();let n=0;for(let e=0;e<o.length;e++){const t=o[e];t instanceof be&&(t.index=e,t.state==ge.current&&(n=e),t.index==o.length-1&&(t.isLast=!0))}this.changeState(n)}stepClicked(e){const t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){const t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof be&&void 0!==n.index&&(n.index<e?n.state=ge.completed:n.index==e?n.state=ge.current:n.state=ge.open)}}}};xe.styles=i``,ve([ae("#wizardSlot"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],xe.prototype,"wizardSlot",void 0),xe=ve([ne("nidoca-wizard")],xe);var we=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Re=class extends Q{constructor(){super(...arguments),this.clickable=!0}render(){return A`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Re.styles=i`
    .chip {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 var(--space-4);
      border-radius: var(--line-height-3);
      line-height: var(--line-height-3);
    }

    .chip:hover {
      background: var(--app-color-surface-background-dark);
    }

    .clickable {
      cursor: pointer;
    }
  `,we([re({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Re.prototype,"clickable",void 0),Re=we([ne("nidoca-chip")],Re);var $e=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Se=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ke=class extends Q{constructor(){super(...arguments),this.code="",this.theme=te.surface}render(){return A`
      <style>
        code {
          color: var(--app-color-${this.theme});
          background: var(--app-color-${this.theme}-background);
          border: solid 1px var(--app-color-${this.theme}-border);
        }
      </style>
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};ke.styles=i`
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
  `,$e([re({type:String}),Se("design:type",String)],ke.prototype,"code",void 0),$e([re({type:String}),Se("design:type",String)],ke.prototype,"theme",void 0),ke=$e([ne("nidoca-code")],ke);var Oe=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},je=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ee=class extends Q{constructor(){super(),this.show=!1,addEventListener("click",(e=>{var t;const o=null===(t=this.associatedElement)||void 0===t?void 0:t.getBoundingClientRect();o&&(o.top>e.clientY||o.right<e.clientX||o.left>e.clientX||o.bottom<e.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?A`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:A``}calculatePositionStyle(e){let t="";if(e){const o=e.getBoundingClientRect();o.right>window.innerWidth/2?t+=`right:${window.innerWidth-o.right}px;`:t+=`left:${o.left}px;`,o.top>window.innerHeight/2?t+=`bottom:${o.height+window.innerHeight-o.top}px;`:t+=`top:${o.bottom}px;`}return t}};Ee.styles=i`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Oe([re({type:Boolean}),je("design:type",Boolean)],Ee.prototype,"show",void 0),Oe([re({type:Object}),je("design:type",Object)],Ee.prototype,"associatedElement",void 0),Ee=Oe([ne("nidoca-elevation"),je("design:paramtypes",[])],Ee);var Pe=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},_e=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Te{}Te.PROGRESS="PROGRESS",Te.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Ce=class extends Q{constructor(){super(...arguments),this.progressType=Te.PROGRESS}render(){return A` <style>
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

      <progress class="${this.progressType}"></progress>`}};Ce.styles=i``,Pe([re({type:te,converter:String}),_e("design:type",Object)],Ce.prototype,"theme",void 0),Pe([re({type:Te,converter:String}),_e("design:type",String)],Ce.prototype,"progressType",void 0),Ce=Pe([ne("nidoca-progress")],Ce);var Ae,De=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ie=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.contained="contained",e.outlined="outlined",e.text="text"}(Ae||(Ae={}));let Le=class extends Q{constructor(){super(...arguments),this.theme=te.primary,this.buttonType=Ae.contained,this.leadingIcon="",this.text=""}render(){return A`
      <style>
        .outlined {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .contained {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .text {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${()=>{this.clicked()}}"
      >
        ${this.leadingIcon?A` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:A``}

        <nidoca-text-button
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};Le.styles=i`
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
  `,De([re({type:te,converter:String}),Ie("design:type",Object)],Le.prototype,"theme",void 0),De([re({type:Ae,converter:String}),Ie("design:type",String)],Le.prototype,"buttonType",void 0),De([re({type:String}),Ie("design:type",String)],Le.prototype,"leadingIcon",void 0),De([re({type:String}),Ie("design:type",String)],Le.prototype,"text",void 0),Le=De([ne("nidoca-button")],Le);class ze extends Q{}var Be=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ne=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ue=class extends Q{constructor(){super(...arguments),this.autocomplete=!0}render(){return A`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const e=new FormData,t={};for(const o of this.getInputElements(this.slotElement)){const n=o.getOutputData();t[n.key]=n.value,e.append(n.key,n.value)}const o={};return o.jsonObject=t,o.formData=e,o}validate(){let e=!0;for(const t of this.getInputElements(this.slotElement))t.validate()||(e=!1);return e||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),e}getInputElements(e){if(null==e)return[];const t=[],o=e.assignedElements({flatten:!0});for(let e=0;e<o.length;e++){const n=o[e];this.recursiveInputElementSearch(n,t)}return t}recursiveInputElementSearch(e,t){if(e instanceof ze)t.push(e);else if(e.hasChildNodes()){const o=e.children;for(const e of[].slice.call(o))this.recursiveInputElementSearch(e,t)}}};Ue.styles=i`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,Be([re({type:Boolean}),Ne("design:type",Boolean)],Ue.prototype,"autocomplete",void 0),Be([ae("#slotElement"),Ne("design:type",Object)],Ue.prototype,"slotElement",void 0),Ue=Be([ne("nidoca-form")],Ue);const Me=e=>(...t)=>({_$litDirective$:e,values:t});class He{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{H:qe}=X,We=()=>document.createComment(""),Ge=(e,t,o)=>{var n;const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(We(),r),n=i.insertBefore(We(),r);o=new qe(t,n,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,s=a!==e;if(s){let t;null===(n=o._$AQ)||void 0===n||n.call(o,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||s){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},Fe=(e,t,o=e)=>(e._$AI(t,o),e),Ve={},Ke=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let o=e._$AA;const n=e._$AB.nextSibling;for(;o!==n;){const e=o.nextSibling;o.remove(),o=e}},Xe=(e,t,o)=>{const n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},Ye=Me(class extends He{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const i=[],r=[];let a=0;for(const t of e)i[a]=n?n(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){var i;const r=e._$AH,{values:a,keys:s}=this.dt(t,o,n);if(!Array.isArray(r))return this.ut=s,a;const c=null!==(i=this.ut)&&void 0!==i?i:this.ut=[],l=[];let d,p,h=0,f=r.length-1,u=0,g=a.length-1;for(;h<=f&&u<=g;)if(null===r[h])h++;else if(null===r[f])f--;else if(c[h]===s[u])l[u]=Fe(r[h],a[u]),h++,u++;else if(c[f]===s[g])l[g]=Fe(r[f],a[g]),f--,g--;else if(c[h]===s[g])l[g]=Fe(r[h],a[g]),Ge(e,l[g+1],r[h]),h++,g--;else if(c[f]===s[u])l[u]=Fe(r[f],a[u]),Ge(e,r[h],r[f]),f--,u++;else if(void 0===d&&(d=Xe(s,u,g),p=Xe(c,h,f)),d.has(c[h]))if(d.has(c[f])){const t=p.get(s[u]),o=void 0!==t?r[t]:null;if(null===o){const t=Ge(e,r[h]);Fe(t,a[u]),l[u]=t}else l[u]=Fe(o,a[u]),Ge(e,r[h],o),r[t]=null;u++}else Ke(r[f]),f--;else Ke(r[h]),h++;for(;u<=g;){const t=Ge(e,l[g+1]);Fe(t,a[u]),l[u++]=t}for(;h<=f;){const e=r[h++];null!==e&&Ke(e)}return this.ut=s,((e,t=Ve)=>{e._$AH=t})(e,l),D}}),Ze={},Je=Me(class extends He{constructor(){super(...arguments),this.nt=Ze}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return D}else if(this.nt===t)return D;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});var Qe=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},et=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let tt=class extends ze{constructor(){super(...arguments),this.theme=te.surface,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return A` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: brightness(var(--app-darken-1));
        }

        option {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer">
        ${this.trailingIcon?A` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:A``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${Je([this.value,this.options],(()=>A`
                ${Ye(this.options,(e=>null==e?A` <option></option>`:this.isSelectedOption(e)?A` <option value="${e.key}" selected>${e.value}</option> `:A` <option value="${e.key}">${e.value}</option> `))}
              `))}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?A`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?A` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:A``}
              ${this.warningText?A` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:A``}
              ${this.errorText?A` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:A``}
            </div>
          `:A``}`}getOutputData(){let e=this.value;if(null!=this.selectElement&&this.multiple){e=[];for(let t=0,o=this.selectElement.options.length;t<o;t++)this.selectElement.options[t].selected&&e.push(this.options[t].key)}else null!=this.selectElement&&(e=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:e}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(e){if(this.multiple){let t=!1;for(const o of this.value)if(t=e.key===o,t)return!0}return this.value===e.key}static enumToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),Object.keys(e).forEach((t=>{o.push({key:t,value:e[t]})})),o}static stringArrayToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),e.forEach((e=>{o.push({key:e,value:e})})),o}static toComboboxOptions(e=null,t=null){if(null==e)return[];const o=[];return Object.values(e).forEach((n=>{let i=String(Object.keys(e)[Object.values(e).indexOf(n)]);t&&(i=i.concat(t)),o.push({key:n,value:i})})),o}};tt.styles=i`
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
  `,Qe([re({type:te,converter:String}),et("design:type",String)],tt.prototype,"theme",void 0),Qe([re({type:String}),et("design:type",String)],tt.prototype,"trailingIcon",void 0),Qe([re({type:String}),et("design:type",String)],tt.prototype,"label",void 0),Qe([re({type:String}),et("design:type",String)],tt.prototype,"errorText",void 0),Qe([re({type:String}),et("design:type",String)],tt.prototype,"infoText",void 0),Qe([re({type:String}),et("design:type",String)],tt.prototype,"warningText",void 0),Qe([re(),et("design:type",Object)],tt.prototype,"value",void 0),Qe([re({type:Array}),et("design:type",Array)],tt.prototype,"options",void 0),Qe([re({type:String}),et("design:type",String)],tt.prototype,"name",void 0),Qe([re({type:Boolean}),et("design:type",Boolean)],tt.prototype,"required",void 0),Qe([re({type:Boolean}),et("design:type",Boolean)],tt.prototype,"multiple",void 0),Qe([re({type:Number}),et("design:type",Number)],tt.prototype,"size",void 0),Qe([ae("#selectElement"),et("design:type",Object)],tt.prototype,"selectElement",void 0),tt=Qe([ne("nidoca-form-combobox")],tt);const ot=e=>null!=e?e:I;var nt,it=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},rt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.color="color",e.email="email",e.hidden="hidden",e.number="number",e.password="password",e.tel="tel",e.text="text",e.search="search",e.url="url",e.date="date",e.month="month",e.time="time",e.week="week"}(nt||(nt={}));let at=class extends ze{constructor(){super(...arguments),this.type=nt.text,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=te.surface}render(){return this.type==nt.hidden?A`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:A` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }

            .parentContainer,
            ::slotted(.parentContainer) {
              border-color: var(--app-color-${this.theme}-border);
            }

            .parentContainer:focus-within,
            ::slotted(.parentContainer:focus-within) {
              border-color: var(--app-color-${this.theme}-border);
              filter: contrast(var(--app-color-percent-selected));
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon?A` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:A``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${ot(this.size)}"
                minlength="${ot(this.minlength)}"
                maxlength="${ot(this.maxlength)}"
                pattern="${ot(this.pattern)}"
                min="${ot(this.min)}"
                max="${ot(this.max)}"
                step="${ot(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?A`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?A` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:A``}
                  ${this.warningText?A` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:A``}
                  ${this.errorText?A` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:A``}
                </div>
              `:A``}`}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:null==t?void 0:t.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};at.styles=i`
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
  `,it([re({type:nt,converter:String}),rt("design:type",String)],at.prototype,"type",void 0),it([re({type:String}),rt("design:type",String)],at.prototype,"label",void 0),it([re({type:String}),rt("design:type",String)],at.prototype,"placeholder",void 0),it([re({type:String}),rt("design:type",String)],at.prototype,"trailingIcon",void 0),it([re({type:String}),rt("design:type",String)],at.prototype,"errorText",void 0),it([re({type:String}),rt("design:type",String)],at.prototype,"infoText",void 0),it([re({type:String}),rt("design:type",String)],at.prototype,"warningText",void 0),it([re({type:String}),rt("design:type",String)],at.prototype,"name",void 0),it([re(),rt("design:type",String)],at.prototype,"value",void 0),it([re({type:Boolean}),rt("design:type",Boolean)],at.prototype,"required",void 0),it([re({type:Boolean}),rt("design:type",Boolean)],at.prototype,"disabled",void 0),it([re({type:Boolean}),rt("design:type",Boolean)],at.prototype,"checked",void 0),it([re({type:Number}),rt("design:type",Object)],at.prototype,"maxlength",void 0),it([re({type:Number}),rt("design:type",Object)],at.prototype,"minlength",void 0),it([re({type:Number}),rt("design:type",Object)],at.prototype,"min",void 0),it([re({type:Number}),rt("design:type",Object)],at.prototype,"max",void 0),it([re({type:String}),rt("design:type",Object)],at.prototype,"step",void 0),it([re({type:Number}),rt("design:type",Object)],at.prototype,"size",void 0),it([re({type:String}),rt("design:type",Object)],at.prototype,"pattern",void 0),it([ae("#inputElement"),rt("design:type",Object)],at.prototype,"inputElement",void 0),it([re({type:te,converter:String}),rt("design:type",String)],at.prototype,"theme",void 0),at=it([ne("nidoca-form-text")],at);let st=class extends at{constructor(){super(),this.type=nt.date}};st=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-form-date"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],st);var ct=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},lt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let dt=class extends ze{constructor(){super(...arguments),this.theme=te.surface,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return A` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .parentContainer,
        ::slotted(.parentContainer) {
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          filter: contrast(var(--app-color-percent-hover));
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

      ${this.infoText||this.warningText||this.errorText?A`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?A` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:A``}
              ${this.warningText?A` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:A``}
              ${this.errorText?A` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:A``}
            </div>
          `:A``}`}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};dt.styles=i`
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
  `,ct([re({type:te,converter:String}),lt("design:type",String)],dt.prototype,"theme",void 0),ct([re({type:String}),lt("design:type",String)],dt.prototype,"infoText",void 0),ct([re({type:String}),lt("design:type",String)],dt.prototype,"warningText",void 0),ct([re({type:String}),lt("design:type",String)],dt.prototype,"errorText",void 0),ct([re({type:String}),lt("design:type",String)],dt.prototype,"name",void 0),ct([re(),lt("design:type",String)],dt.prototype,"value",void 0),ct([re({type:String}),lt("design:type",String)],dt.prototype,"label",void 0),ct([re({type:Boolean}),lt("design:type",Boolean)],dt.prototype,"required",void 0),ct([re({type:String}),lt("design:type",String)],dt.prototype,"placeholder",void 0),ct([re({type:Boolean}),lt("design:type",Boolean)],dt.prototype,"disabled",void 0),ct([re({type:Number}),lt("design:type",Number)],dt.prototype,"rows",void 0),ct([ae("#inputElement"),lt("design:type",Object)],dt.prototype,"inputElement",void 0),dt=ct([ne("nidoca-form-textarea")],dt);var pt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ht=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ft=class extends ze{constructor(){super(...arguments),this.theme=te.primary}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return A`
      <nidoca-box theme="${ot(this.theme)}">
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
    `}upload(){var e;null===(e=this.inputElement)||void 0===e||e.click()}};ft.styles=i`
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
  `,pt([re({type:te,converter:String}),ht("design:type",Object)],ft.prototype,"theme",void 0),pt([ae("#inputElement"),ht("design:type",Object)],ft.prototype,"inputElement",void 0),ft=pt([ne("nidoca-form-upload")],ft);var ut=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},gt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let yt=class extends ze{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=te.primary,this.theme=oe.prototype.getParentTheme(this)||te.background}render(){return A`
      <style>
        .slider {
          background-color: var(--app-color-${this.theme}-border);
        }

        .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }

        input:checked + .slider:before {
          background-color: var(--app-color-${this.theme});
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

        ${this.infoText.length>0?A` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:A``}

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

      ${this.warningText?A` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:A``}
      ${this.errorText?A` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:A``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};yt.styles=i`
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
  `,ut([re({type:String}),gt("design:type",String)],yt.prototype,"name",void 0),ut([re({type:String}),gt("design:type",String)],yt.prototype,"label",void 0),ut([re({type:String}),gt("design:type",String)],yt.prototype,"infoText",void 0),ut([re({type:String}),gt("design:type",String)],yt.prototype,"errorText",void 0),ut([re({type:String}),gt("design:type",String)],yt.prototype,"warningText",void 0),ut([re({type:Boolean}),gt("design:type",Boolean)],yt.prototype,"required",void 0),ut([re({type:Boolean}),gt("design:type",Boolean)],yt.prototype,"disabled",void 0),ut([re({type:Boolean}),gt("design:type",Boolean)],yt.prototype,"checked",void 0),ut([re({type:String}),gt("design:type",String)],yt.prototype,"theme",void 0),ut([ae("#inputElement"),gt("design:type",Object)],yt.prototype,"inputElement",void 0),yt=ut([ne("nidoca-form-switch"),gt("design:paramtypes",[])],yt);var mt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},bt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let vt=class extends Q{constructor(){super(...arguments),this.theme=te.primary,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return A`
      <nidoca-box theme="${ot(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${nt.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};vt.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,mt([re({type:te,converter:String}),bt("design:type",Object)],vt.prototype,"theme",void 0),mt([re({type:String,converter:String}),bt("design:type",String)],vt.prototype,"label",void 0),mt([re({type:String,converter:String}),bt("design:type",String)],vt.prototype,"emailLabel",void 0),mt([re({type:String,converter:String}),bt("design:type",String)],vt.prototype,"buttonLabel",void 0),mt([ae("#form"),bt("design:type",Object)],vt.prototype,"formComponent",void 0),vt=mt([ne("nidoca-form-newsletter")],vt);var xt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},wt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Rt=class extends Q{constructor(){super(...arguments),this.theme=te.primary,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return A`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${nt.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Rt.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,xt([re({type:te,converter:String}),wt("design:type",String)],Rt.prototype,"theme",void 0),xt([re({type:String,converter:String}),wt("design:type",String)],Rt.prototype,"label",void 0),xt([re({type:String,converter:String}),wt("design:type",String)],Rt.prototype,"emailLabel",void 0),xt([re({type:String,converter:String}),wt("design:type",String)],Rt.prototype,"buttonLabel",void 0),xt([ae("#form"),wt("design:type",Object)],Rt.prototype,"formComponent",void 0),Rt=xt([ne("nidoca-form-reset-password")],Rt);var $t=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},St=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let kt=class extends Q{constructor(){super(...arguments),this.theme=te.surface,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return A`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${nt.password}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${nt.password}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${nt.password}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?A` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:A``}
        ${this.showErrorMessagePasswordDiff?A` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:A``}
      </nidoca-box>
    `}changePassword(){var e,t,o,n,i;(null===(e=this.formComponent)||void 0===e?void 0:e.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(t=this.newPasswordInputField)||void 0===t?void 0:t.getOutputData().value)!=(null===(o=this.repeatNewPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(n=this.oldPasswordInputField)||void 0===n?void 0:n.getOutputData().value)==(null===(i=this.newPasswordInputField)||void 0===i?void 0:i.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};kt.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,$t([re({type:te,converter:String}),St("design:type",String)],kt.prototype,"theme",void 0),$t([re({type:String,converter:String}),St("design:type",String)],kt.prototype,"label",void 0),$t([re({type:String,converter:String}),St("design:type",String)],kt.prototype,"oldPasswordLabel",void 0),$t([re({type:String,converter:String}),St("design:type",String)],kt.prototype,"newPasswordLabel",void 0),$t([re({type:String,converter:String}),St("design:type",String)],kt.prototype,"repeatNewPasswordLabel",void 0),$t([re({type:String,converter:String}),St("design:type",String)],kt.prototype,"buttonLabel",void 0),$t([ae("#form"),St("design:type",Object)],kt.prototype,"formComponent",void 0),$t([ae("#oldPassword"),St("design:type",Object)],kt.prototype,"oldPasswordInputField",void 0),$t([ae("#newPassword"),St("design:type",Object)],kt.prototype,"newPasswordInputField",void 0),$t([ae("#repeatNewPassword"),St("design:type",Object)],kt.prototype,"repeatNewPasswordInputField",void 0),$t([re(),St("design:type",String)],kt.prototype,"errorMessageSamePasswordLabel",void 0),$t([re(),St("design:type",String)],kt.prototype,"errorMessagePasswordDiffLabel",void 0),kt=$t([ne("nidoca-form-change-password")],kt);var Ot=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},jt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Et=class extends Q{constructor(){super(...arguments),this.theme=te.primary,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return A`
      <nidoca-box theme="${ot(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${nt.email}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${nt.password}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Et.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Ot([re({type:te,converter:String}),jt("design:type",Object)],Et.prototype,"theme",void 0),Ot([re({type:String,converter:String}),jt("design:type",String)],Et.prototype,"label",void 0),Ot([re({type:String,converter:String}),jt("design:type",String)],Et.prototype,"emailLabel",void 0),Ot([re({type:String,converter:String}),jt("design:type",String)],Et.prototype,"passwordLabel",void 0),Ot([re({type:String,converter:String}),jt("design:type",String)],Et.prototype,"buttonLabel",void 0),Ot([ae("#form"),jt("design:type",Object)],Et.prototype,"formComponent",void 0),Et=Ot([ne("nidoca-form-register")],Et);var Pt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let _t=class extends Q{constructor(){super(...arguments),this.code=""}render(){return A``}};_t.styles=i``,Pt([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],_t.prototype,"code",void 0),_t=Pt([ne("nidoca-upload")],_t);var Tt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ct=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let At=class extends Q{constructor(){super(),this.theme=oe.prototype.getParentTheme(this)||te.background}render(){return A`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};At.styles=i`
    :host,
    ::slotted(:host) {
      display: block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,Tt([re({type:te,converter:String}),Ct("design:type",String)],At.prototype,"theme",void 0),At=Tt([ne("nidoca-hr"),Ct("design:paramtypes",[])],At);var Dt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},It=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Lt=class extends Q{constructor(){super(...arguments),this.text="",this.icon=""}render(){return A`
      <div class="container">
        ${this.icon?A` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:A``}
        ${this.text?A` <nidoca-text-button>${this.text}</nidoca-text-button>`:A``}
        <slot></slot>
      </div>
    `}};Lt.styles=i`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,Dt([re({type:String}),It("design:type",String)],Lt.prototype,"text",void 0),Dt([re({type:String}),It("design:type",String)],Lt.prototype,"icon",void 0),Lt=Dt([ne("nidoca-menu-area")],Lt);var zt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Bt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Nt=class extends Q{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1}render(){return A`
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?A` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:A``}
        ${this.text?A` <nidoca-text>${this.text}</nidoca-text>`:A``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};Nt.styles=i`
    .container {
      display: flex;
      cursor: pointer;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .container:hover {
      backdrop-filter: contrast(var(--app-color-percent-hover));
    }

    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));
    }
  `,zt([re({type:String}),Bt("design:type",String)],Nt.prototype,"text",void 0),zt([re({type:String}),Bt("design:type",String)],Nt.prototype,"icon",void 0),zt([re({type:Boolean}),Bt("design:type",Boolean)],Nt.prototype,"selected",void 0),Nt=zt([ne("nidoca-menu-item")],Nt);var Ut=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Mt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ht=class extends Q{constructor(){super(...arguments),this.theme=te.secondary}render(){return A` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}firstUpdated(){this.addEventListener("click",(e=>{if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];if(n instanceof Nt){const t=n.getBoundingClientRect();t.left<e.x&&t.right>e.x&&(t.top<e.y&&t.bottom>e.y?n.selected=!0:n.selected=!1)}}}}))}};Ht.styles=i`
    :host,
    slot {
      display: block;
    }
  `,Ut([re({type:te,converter:String}),Mt("design:type",Object)],Ht.prototype,"theme",void 0),Ut([ae("#slotElement"),Mt("design:type",Object)],Ht.prototype,"slotElement",void 0),Ht=Ut([ne("nidoca-menu")],Ht);var qt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Wt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Gt=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return A`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(e,t,o,n,i,r){return"height:".concat(e).concat(";").concat("width:").concat(t).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(i).concat(";").concat("bottom:").concat(r).concat(";")}};Gt.styles=i`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,qt([re({type:String}),Wt("design:type",String)],Gt.prototype,"height",void 0),qt([re({type:String}),Wt("design:type",String)],Gt.prototype,"width",void 0),qt([re({type:String}),Wt("design:type",String)],Gt.prototype,"left",void 0),qt([re({type:String}),Wt("design:type",String)],Gt.prototype,"top",void 0),qt([re({type:String}),Wt("design:type",String)],Gt.prototype,"right",void 0),qt([re({type:String}),Wt("design:type",String)],Gt.prototype,"bottom",void 0),Gt=qt([ne("nidoca-layout-floating")],Gt);var Ft=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Vt=class extends Q{constructor(){super(...arguments),this.theme=te.background}render(){return A`
      ${oe.getStyle(this.theme)}
      <slot></slot>
    `}};Vt.styles=i`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,Ft([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Vt.prototype,"theme",void 0),Vt=Ft([ne("nidoca-container")],Vt);var Kt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Xt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Yt=class extends Q{constructor(){super(),this.hideSidebox=!0,this.theme=oe.prototype.getParentTheme(this)||te.background}render(){return A` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .sidebox {
          border-color: var(--app-color-${this.theme}-border);
          border-left-style: solid;
          border-width: thin;
        }
      </style>
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox?A``:A` <slot class="sidebox" name="sidebox"></slot>`}`}};Yt.styles=i`
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
  `,Kt([re({type:te,converter:String}),Xt("design:type",String)],Yt.prototype,"theme",void 0),Kt([re({type:Boolean,converter:String}),Xt("design:type",Boolean)],Yt.prototype,"hideSidebox",void 0),Yt=Kt([ne("nidoca-split-screen"),Xt("design:paramtypes",[])],Yt);var Zt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Jt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Qt=class extends Q{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return A`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};Qt.styles=i`
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
  `,Zt([re({type:String}),Jt("design:type",String)],Qt.prototype,"icon",void 0),Zt([re({type:Boolean}),Jt("design:type",Boolean)],Qt.prototype,"clickable",void 0),Zt([re({type:Boolean}),Jt("design:type",Boolean)],Qt.prototype,"deactivated",void 0),Zt([re({type:String}),Jt("design:type",String)],Qt.prototype,"primaryText",void 0),Qt=Zt([ne("nidoca-icon")],Qt);var eo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},to=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class oo{}oo.NONE="NONE",oo.DEFAULT_SHADOW="DEFAULT_SHADOW",oo.SHADOW_1="SHADOW_1",oo.SHADOW_2="SHADOW_2",oo.SHADOW_3="SHADOW_3";let no=class extends Q{constructor(){super(...arguments),this.theme=te.primary,this.shadowType=oo.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return A`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-${this.theme});
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
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};no.styles=i`
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
  `,eo([re({type:String}),to("design:type",String)],no.prototype,"theme",void 0),eo([re({type:Object}),to("design:type",oo)],no.prototype,"shadowType",void 0),eo([re({type:String}),to("design:type",String)],no.prototype,"icon",void 0),eo([re({type:Boolean}),to("design:type",Boolean)],no.prototype,"clickable",void 0),eo([re({type:Boolean}),to("design:type",Boolean)],no.prototype,"deactivated",void 0),no=eo([ne("nidoca-icon-extended")],no);var io=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let ro=class extends Q{render(){return A`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(null!=this.rippleContainerElement){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);const t=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};ro.styles=i`
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
  `,io([ae("#rippleContainer"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],ro.prototype,"rippleContainerElement",void 0),ro=io([ne("nidoca-ripple")],ro);var ao=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},so=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let co=class extends Q{constructor(){super(...arguments),this.src="",this.width="100%",this.height="100%"}render(){return this.src?A`<img width="${this.width}" height="${this.height}" src="${this.src}" />`:A``}};co.styles=i`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,ao([re({type:String}),so("design:type",String)],co.prototype,"src",void 0),ao([re({type:String}),so("design:type",String)],co.prototype,"width",void 0),ao([re({type:String}),so("design:type",String)],co.prototype,"height",void 0),co=ao([ne("nidoca-img")],co);let lo=class extends co{render(){return A`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};lo.styles=i`
    :host {
      font-size: 0;
      display: block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }
  `,lo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-img-round")],lo);var po=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let ho=class extends Q{constructor(){super(...arguments),this.src=""}render(){return A`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};ho.styles=i``,po([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],ho.prototype,"src",void 0),ho=po([ne("nidoca-movie")],ho);var fo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},uo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let go=class extends Q{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return A`
      <nidoca-form-text
        theme="${ot(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${nt.number}"
        value=""
      ></nidoca-form-text>
    `}updated(e){(e.has("min")||e.has("max"))&&this.generateNewNumber(),super.updated(e)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(e,t){return Math.random()*(t-e)+e}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const e=this.isValid();return e&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),e}};go.styles=i`
    :host {
      display: block;
      width: 100%;
    }
  `,fo([re({type:te,converter:String}),uo("design:type",Object)],go.prototype,"theme",void 0),fo([re({type:String}),uo("design:type",String)],go.prototype,"label",void 0),fo([re({type:String}),uo("design:type",String)],go.prototype,"placeholder",void 0),fo([re({type:String}),uo("design:type",String)],go.prototype,"name",void 0),fo([re({type:Number}),uo("design:type",Number)],go.prototype,"min",void 0),fo([re({type:Number}),uo("design:type",Number)],go.prototype,"max",void 0),fo([re({type:String}),uo("design:type",String)],go.prototype,"errorText",void 0),fo([ae("#inputfield"),uo("design:type",Object)],go.prototype,"inputfield",void 0),go=fo([ne("nidoca-form-captcha")],go);var yo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},mo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let bo=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType="_self"}render(){return A`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};bo.styles=i`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,yo([re({type:String}),mo("design:type",String)],bo.prototype,"text",void 0),yo([re({type:String}),mo("design:type",String)],bo.prototype,"href",void 0),yo([re({type:String}),mo("design:type",String)],bo.prototype,"targetType",void 0),bo=yo([ne("nidoca-link")],bo);var vo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},xo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let wo=class extends Q{constructor(){super(),this.multiSelect=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null,this.theme=oe.prototype.getParentTheme(this)||te.background}update(e){super.update(e),null!=e.get("selectionMode")&&(this.multiSelect||(this.selected=!1))}render(){return A`
      <style>
        .selected {
          backdrop-filter: contrast(var(--app-color-percent-selected));
        }
      </style>
      <div
        class="container ${this.selected?"selected":""}"
        @mousedown="${()=>this.downAction()}"
        @mouseup="${()=>this.upAction()}"
        @pointerup="${()=>this.upAction()}"
        @pointerdown="${()=>this.downAction()}"
      >
        ${this.multiSelect?A` <nidoca-icon
              style="padding-right: var(--space-2);"
              class="item"
              @click="${()=>this.switchSelected()}"
              icon="${this.selected?"check_box":"check_box_outline_blank"}"
            ></nidoca-icon>`:A`<span></span>`}
        <slot name="graphic" class="item"></slot>
        <div class="containerTypography">
          ${this.primaryText?A` <nidoca-text class="item">${this.primaryText} </nidoca-text>`:A``}
          <slot></slot>
          ${this.secondaryText?A` <nidoca-text-caption class="item">${this.secondaryText} </nidoca-text-caption>`:A``}
          <slot name="secondary"></slot>
        </div>
        <slot name="meta" class="item"></slot>
      </div>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let e="";e=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",console.log(e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};wo.styles=i`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: 1fr 1fr minmax(auto, 100%) 1fr;
      padding: var(--space-2);
    }

    .item {
      align-self: center;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `,vo([re({type:te,converter:String}),xo("design:type",Object)],wo.prototype,"theme",void 0),vo([re({type:Boolean}),xo("design:type",Boolean)],wo.prototype,"multiSelect",void 0),vo([re({type:Boolean}),xo("design:type",Boolean)],wo.prototype,"selected",void 0),vo([re({type:String}),xo("design:type",String)],wo.prototype,"primaryText",void 0),vo([re({type:String}),xo("design:type",String)],wo.prototype,"secondaryText",void 0),wo=vo([ne("nidoca-list-item"),xo("design:paramtypes",[])],wo);var Ro=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},$o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let So=class extends Q{constructor(){super(),this.multiSelect=!1,this.theme=oe.prototype.getParentTheme(this)||te.background}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"selectionMode"==t&&this.getItems().forEach((e=>{e.multiSelect=this.multiSelect}))}))}render(){return A`
      <style>
        slot {
          border-color: var(--app-color-${this.theme}-border);
          border-top-style: solid;
          border-width: thin;
        }

        ::slotted(nidoca-list-section) {
          color: var(--app-color-${this.theme});
          backdrop-filter: contrast(var(--app-color-percent-optional));
        }

        ::slotted(nidoca-list-item) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        ::slotted(nidoca-list-item),
        ::slotted(nidoca-list-section) {
          border-bottom-style: solid;
          border-width: var(--border-width-min);
        }

        ::slotted(nidoca-list-item:hover) {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <slot
        @nidoca-event-list-item-click="${e=>{this.multiSelect||this.unselectAll(),e.detail.selected=!0}}"
        @nidoca-event-list-item-unselect="${()=>{this.multiSelect=0===this.getSelectedItems().length}}"
        class="slotList"
        id="slotElement"
      ></slot>
    `}getItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof wo&&e.push(n)}}return e}getSelectedItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof wo&&n.selected&&e.push(n)}}return e}getSelectedIndexes(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();let o=0;for(let n=0;n<t.length;n++){const i=t[n];i instanceof wo&&(i.selected&&e.push(o),o++)}}return e}selectAll(){this.getItems().forEach((e=>{e.selected=!0}))}unselectAll(){console.log("sdojsdoijsoidjsdioj "+this.getItems().length),this.getItems().forEach((e=>{e.selected=!1}))}};So.styles=i`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Ro([re({type:te,converter:String}),$o("design:type",Object)],So.prototype,"theme",void 0),Ro([re({type:Boolean}),$o("design:type",Boolean)],So.prototype,"multiSelect",void 0),Ro([ae("#slotElement"),$o("design:type",Object)],So.prototype,"slotElement",void 0),So=Ro([ne("nidoca-list"),$o("design:paramtypes",[])],So);var ko=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Oo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let jo=class extends Q{constructor(){super(),this.text="",this.theme=oe.prototype.getParentTheme(this)||te.background}render(){return A`
      <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-caption>
    `}};jo.styles=i`
  :host {
     display:block;
     padding-left: var(--space-2);  
  `,ko([re({type:te,converter:String}),Oo("design:type",Object)],jo.prototype,"theme",void 0),ko([re({type:String}),Oo("design:type",String)],jo.prototype,"text",void 0),jo=ko([ne("nidoca-list-section"),Oo("design:paramtypes",[])],jo);var Eo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Po=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _o=class extends Q{constructor(){super(...arguments),this.theme=te.primary,this.prominent=!1}render(){return A`
      ${oe.getStyle(this.theme)}
      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?A` <slot class="prominent" name="prominent"></slot>`:A``}
    `}};_o.styles=i`
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
  `,Eo([re({type:te,converter:String}),Po("design:type",Object)],_o.prototype,"theme",void 0),Eo([re({type:Boolean}),Po("design:type",Boolean)],_o.prototype,"prominent",void 0),_o=Eo([ne("nidoca-top-app-bar")],_o);var To=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Co=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ao=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new Qt],["row 2",new Qt]],this.theme=te.background}render(){return A`
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
          color: var(--app-color-${this.theme});
        }
      </style>
      <div>
        <table>
          <thead>
            ${Je([this.headers],(()=>A` ${Ye(this.headers,(e=>A` <th colspan="1" rowspan="1">${e}</th> `))} `))}
          </thead>
          <tbody>
            ${Je([this.rows],(()=>A`
                  ${Ye(this.rows,(e=>A`
                        <tr>
                          ${Ye(e,(e=>A` <td colspan="1" rowspan="1">${e}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Ao.styles=i`
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
  `,To([re({type:Array}),Co("design:type",Array)],Ao.prototype,"headers",void 0),To([re({type:Array}),Co("design:type",Array)],Ao.prototype,"rows",void 0),To([re({type:te,converter:String}),Co("design:type",String)],Ao.prototype,"theme",void 0),Ao=To([ne("nidoca-table")],Ao);var Do=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Io=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?A` <slot></slot>`:A``}};Io.styles=i`
    :host,
    slot {
      display: block;
    }
  `,Do([re({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Io.prototype,"selected",void 0),Io=Do([ne("nidoca-tab-content")],Io);var Lo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},zo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Bo=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=te.surface}render(){return A`
      <style>
        .container {
          border-color: var(--app-color-${this.theme}-background);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.tabClicked()}">
        ${this.text?A` <nidoca-text text="${this.text}"></nidoca-text> `:A``}
        <slot></slot>
      </div>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Bo.styles=i`
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
  `,Lo([re({type:Boolean}),zo("design:type",Boolean)],Bo.prototype,"selected",void 0),Lo([re({type:String}),zo("design:type",String)],Bo.prototype,"text",void 0),Lo([re({type:String}),zo("design:type",String)],Bo.prototype,"theme",void 0),Bo=Lo([ne("nidoca-tab")],Bo);var No=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Uo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Mo=class extends Q{constructor(){super(...arguments),this.theme=te.surface,this.tabIndex=0}render(){return A`
      <div class="container" @nidoca-event-tab-clicked="${e=>this.tabClicked(e)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this.tabIndexChanged()}update(e){super.update(e),null!=e.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const e=this.tabSlot.assignedElements(),t=100/e.length,o=e[this.tabIndex];for(let n=0;n<e.length;n++){const i=e[n];i instanceof Bo&&(i.theme=this.theme,i.style.width=String(t).concat("%"),i==o?(i.selected=!0,i.classList.add("SELECTED")):(i.selected=!1,i.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let e=0;if(null!=this.tabContentSlot){const t=this.tabContentSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Io&&(this.tabIndex==e?n.selected=!0:n.selected=!1,e++)}}}tabClicked(e){const t=e.detail;this.changeTabIndex(t)}changeTabIndex(e){if(!e.selected&&null!=this.tabSlot){const t=this.tabSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];if(n instanceof Bo&&n==e){this.tabIndex=o;break}}}}};Mo.styles=i`
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
  `,No([ae("#tabSlot"),Uo("design:type",Object)],Mo.prototype,"tabSlot",void 0),No([ae("#tabContentSlot"),Uo("design:type",Object)],Mo.prototype,"tabContentSlot",void 0),No([re({type:String}),Uo("design:type",String)],Mo.prototype,"theme",void 0),No([re({type:Number}),Uo("design:type",Number)],Mo.prototype,"tabIndex",void 0),Mo=No([ne("nidoca-tabs")],Mo);var Ho=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},qo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Wo=class extends Q{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(e=>{if(!this.hideLeft&&this.leftElement){console.log("close");const t=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=e.x-t.width}}))}updated(e){super.updated(e)}render(){return A`
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
    `}};Wo.styles=i`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
      color: var(--app-color-primary);
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
  `,Ho([re({type:Boolean}),qo("design:type",Boolean)],Wo.prototype,"hideLeft",void 0),Ho([re({type:Boolean}),qo("design:type",Boolean)],Wo.prototype,"prominent",void 0),Ho([ae("#header"),qo("design:type",Object)],Wo.prototype,"headerElement",void 0),Ho([ae("#left"),qo("design:type",Object)],Wo.prototype,"leftElement",void 0),Ho([ae("#content"),qo("design:type",Object)],Wo.prototype,"contentElement",void 0),Wo=Ho([ne("nidoca-template"),qo("design:paramtypes",[])],Wo);var Go=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Fo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Vo=class extends Q{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((e=>{this.videoElement&&(this.videoElement.srcObject=e)}))}render(){return A`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){const e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);const t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};Vo.styles=i``,Go([ae("#video"),Fo("design:type",Object)],Vo.prototype,"videoElement",void 0),Go([ae("#canvas"),Fo("design:type",Object)],Vo.prototype,"canvasElement",void 0),Go([ae("#click-photo"),Fo("design:type",Object)],Vo.prototype,"buttonElement",void 0),Vo=Go([ne("nidoca-video")],Vo);var Ko=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Xo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Yo=class extends Q{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return A`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((e=>A`${e}`))}
    `}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"src"==t&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((e=>{const t=document.createElement("canvas");t.width=e[0],t.height=e[1];const o=t.getContext("2d");o&&this.img&&(this.img.crossOrigin="anonymous",o.drawImage(this.img,0,0,e[0],e[1]),t.toBlob((e=>{}),"image/webp")),this.canvasElements.push(t)})),this.requestUpdate()})}};Yo.styles=i``,Ko([re({type:String}),Xo("design:type",String)],Yo.prototype,"src",void 0),Ko([ae("#img"),Xo("design:type",Object)],Yo.prototype,"img",void 0),Yo=Ko([ne("nidoca-svg-2-webp")],Yo);var Zo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Jo=class extends Q{constructor(){super(...arguments),this.text=""}render(){return A` <slot id="slotElement">${this.text}</slot>`}};Jo.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `,Zo([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Jo.prototype,"text",void 0),Jo=Zo([ne("nidoca-text")],Jo);let Qo=class extends Jo{render(){return A`${super.render()}`}};Qo.styles=i`
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
  `,Qo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-button")],Qo);let en=class extends Jo{};en.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,en=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-overline")],en);let tn=class extends Jo{render(){return A` ${super.render()}`}};tn.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.5em;
      font-weight: 400;
    }
  `,tn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-body")],tn);let on=class extends Jo{};on.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `,on=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-caption")],on);let nn=class extends on{constructor(){super(),this.style.color="red"}};nn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-error"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],nn);let rn=class extends on{constructor(){super(),this.style.color="green"}};rn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-success"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],rn);let an=class extends on{constructor(){super(),this.style.color="yellow"}};an=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-warning"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],an);let sn=class extends on{constructor(){super(),this.style.color="blue"}};sn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-info"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:paramtypes",[])],sn);let cn=class extends Jo{};cn.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1em;
    }
  `,cn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-h1")],cn);let ln=class extends Jo{};ln.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,ln=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-h2")],ln);let dn=class extends Jo{};dn.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,dn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-h3")],dn);let pn=class extends Jo{};pn.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 115%;
      line-height: 1.5em;
    }
  `,pn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-h4")],pn);let hn=class extends Jo{};hn.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,hn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-h5")],hn);let fn=class extends Jo{};fn.styles=i`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 105%;
      line-height: 1.5em;
    }
  `,fn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-text-h6")],fn);var un=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},gn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let yn=class extends Q{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=te.surface}render(){return A`
      <style>
        .container,
        input {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .container:focus-within,
        ::slotted(.container:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: contrast(var(--app-color-percent-selected));
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
    `}clearValue(){this.value=""}valueChanged(){var e;return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){const t=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(e=this.inputElement)||void 0===e?void 0:e.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}))}};yn.styles=i`
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
  `,un([re({type:String}),gn("design:type",String)],yn.prototype,"value",void 0),un([re({type:String}),gn("design:type",String)],yn.prototype,"placeholder",void 0),un([re({type:Boolean}),gn("design:type",Boolean)],yn.prototype,"disabled",void 0),un([ae("#inputElement"),gn("design:type",Object)],yn.prototype,"inputElement",void 0),un([re({type:te,converter:String}),gn("design:type",String)],yn.prototype,"theme",void 0),yn=un([ne("nidoca-search-bar")],yn);var mn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},bn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class vn{}vn.CENTER="CENTER",vn.LEFT="LEFT",vn.RIGHT="RIGHT",vn.TOP="TOP",vn.BOTTOM="BOTTOM",vn.SLIDE_CENTER="SLIDE_CENTER",vn.SLIDE_LEFT="SLIDE_LEFT",vn.SLIDE_RIGHT="SLIDE_RIGHT",vn.SLIDE_TOP="SLIDE_TOP",vn.SLIDE_BOTTOM="SLIDE_BOTTOM";let xn=class extends Q{constructor(){super(...arguments),this.transitionType=vn.CENTER,this.duration=.5}render(){return A` <div class="${ot(this.transitionType)}"><slot></slot></div> `}};xn.styles=i`
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
  `,mn([re({type:String}),bn("design:type",String)],xn.prototype,"transitionType",void 0),mn([re({type:Number}),bn("design:type",Number)],xn.prototype,"duration",void 0),xn=mn([ne("nidoca-transition")],xn);var wn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Rn=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?A`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${vn.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:A``}};Rn.styles=i`
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
  `,wn([re({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Rn.prototype,"show",void 0),Rn=wn([ne("nidoca-dialog")],Rn);var $n=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Sn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let kn=class extends Q{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return A`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Ae.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Ae.text}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};kn.styles=i``,$n([re({type:Boolean}),Sn("design:type",Boolean)],kn.prototype,"show",void 0),$n([re({type:String}),Sn("design:type",String)],kn.prototype,"title",void 0),$n([re({type:String}),Sn("design:type",String)],kn.prototype,"description",void 0),$n([re({type:String}),Sn("design:type",String)],kn.prototype,"labelButtonYes",void 0),$n([re({type:String}),Sn("design:type",String)],kn.prototype,"labelButtonNo",void 0),kn=$n([ne("nidoca-dialog-decision")],kn);var On=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},jn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class En{}En.ROUND="ROUND",En.CLICKABLE="CLICKABLE",En.ZOOM_WRAPPED="ZOOM_WRAPPED",En.FULL_WIDTH="FULL_WIDTH";class Pn extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[En.CLICKABLE,En.FULL_WIDTH]}render(){return A`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(e){let t="";return e.forEach((e=>{t=t.concat(" ").concat("")})),t}}Pn.styles=i`
    :host,
    span {
      margin: 0;
      padding: 0;
      font-size: 0;
      letter-spacing: 0;
      line-height: 0;
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
    }

    .CLICKABLE {
      cursor: pointer;
    }

    .ZOOM_WRAPPED {
      overflow: hidden;
    }

    .ZOOM_WRAPPED img:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }

    .FULL_WIDTH {
      box-sizing: border-box;
    }
    .FULL_WIDTH img {
      width: 100%;
    }

    .ROUND {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
    }
    .ROUND img {
      padding: 0.25em;
      border-radius: 50%;
      width: 100%;
    }

    @media only screen and (max-width: 768px), only screen and (orientation: portrait) {
    }
  `,On([re({type:String}),jn("design:type",String)],Pn.prototype,"src",void 0),On([re({type:String}),jn("design:type",String)],Pn.prototype,"width",void 0),On([re({type:String}),jn("design:type",String)],Pn.prototype,"height",void 0),On([re({type:En,converter:Array}),jn("design:type",Array)],Pn.prototype,"richMediaProperties",void 0);var _n=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Tn=class extends Q{constructor(){super(...arguments),this.imgSrc=""}render(){return A`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[En.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};Tn.styles=i`
    :host {
      display: block;
    }
  `,_n([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Tn.prototype,"imgSrc",void 0),Tn=_n([ne("nidoca-avatar")],Tn);var Cn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let An=class extends Q{constructor(){super(...arguments),this.theme=te.surface}render(){return A`
      <style>
        :host {
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};An.styles=i`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
    }
    slot {
      display: block;
    }
  `,Cn([re({type:te,converter:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],An.prototype,"theme",void 0),An=Cn([ne("nidoca-card")],An);let Dn=class extends Q{render(){return A`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();for(let e=0;e<o.length;e++){const t=o[e].classList;t.contains("flexItem")||t.add("flexItem"),t.contains("flexItemDevice")||t.add("flexItemDevice")}}};Dn.styles=i`
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
  `,Dn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-gallery")],Dn);let In=class extends Q{render(){return A`<slot></slot>`}print(){const e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};In.styles=i`
    :host {
      display: none;
    }
  `,In=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-print")],In);let Ln=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return A`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){const t=e.target,o=t.offsetWidth,n=t.assignedElements(),i=n.length,r=[];let a=0;for(let e=0;e<i;e++){const t=n[e];if(t.setAttribute("class","item"),t instanceof HTMLElement){const e=t.style.width;if(0==e.length)r.push(t);else{const t=e.toUpperCase();a+=t.indexOf("PX")>-1?Number(t.replace("PX","")):Number(t.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),0==s&&(s=100/i),this.flexBasis=String(s/r.length)+"%",this.requestUpdate()}};Ln.styles=i`
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
  `,Ln=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-section")],Ln);var zn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Bn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Nn=class extends Q{render(){return A` <slot></slot>`}};Nn.styles=i`
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
  `,Nn=zn([ne("nidoca-dashboard")],Nn);let Un=class extends Q{render(){return A` <slot></slot>`}};Un.styles=i`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,Un=zn([ne("nidoca-dashboard-box-25")],Un);let Mn=class extends Q{render(){return A` <slot></slot>`}};Mn.styles=i`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,Mn=zn([ne("nidoca-dashboard-box-50")],Mn);let Hn=class extends Q{render(){return A` <slot></slot>`}};Hn.styles=i`
    :host {
      width: 100%;
      display: block;
    }
  `,Hn=zn([ne("nidoca-dashboard-box-100")],Hn);let qn=class extends Q{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return A`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};qn.styles=i`
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
  `,zn([re({type:Boolean}),Bn("design:type",Boolean)],qn.prototype,"clickable",void 0),zn([re({type:String}),Bn("design:type",String)],qn.prototype,"title",void 0),qn=zn([ne("nidoca-dashboard-card")],qn);var Wn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Gn=class extends Q{constructor(){super(...arguments),this.theme=te.transparent}render(){return A`
      ${oe.getStyle(this.theme)}
      <slot></slot>
    `}};Gn.styles=i`
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
  `,Wn([re({type:te,converter:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],Gn.prototype,"theme",void 0),Gn=Wn([ne("nidoca-box")],Gn);var Fn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Vn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Kn=class extends Q{constructor(){super(...arguments),this.overline="",this.title="",this.summary="",this.text=""}render(){return A`
      <div style="display:flex; flex-direction:column;">
        ${this.overline?A` <nidoca-text class="paddingBottom">${this.overline}</nidoca-text> `:A``}
        ${this.title?A` <nidoca-text-h2 class="paddingBottom">${this.title}</nidoca-text-h2> `:A``}
        ${this.summary?A` <nidoca-text-caption class="paddingBottom">${this.summary}</nidoca-text-caption> `:A``}
        ${this.text?A` <nidoca-text class="paddingBottom">${this.text}</nidoca-text>`:A``}
        <slot></slot>
      </div>
    `}};Kn.styles=i`
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
  `,Fn([re({type:String}),Vn("design:type",String)],Kn.prototype,"overline",void 0),Fn([re({type:String}),Vn("design:type",String)],Kn.prototype,"title",void 0),Fn([re({type:String}),Vn("design:type",String)],Kn.prototype,"summary",void 0),Fn([re({type:String}),Vn("design:type",String)],Kn.prototype,"text",void 0),Kn=Fn([ne("nidoca-article")],Kn);var Xn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Yn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Zn=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return A`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `}};Zn.styles=i`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,Xn([re({type:String}),Yn("design:type",String)],Zn.prototype,"primaryText",void 0),Xn([re({type:String}),Yn("design:type",String)],Zn.prototype,"text",void 0),Xn([re({type:String}),Yn("design:type",String)],Zn.prototype,"icon",void 0),Zn=Xn([ne("nidoca-icon-with-description")],Zn);var Jn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Qn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ei=class extends Q{constructor(){super(...arguments),this.theme=te.primary,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return A`
      <nidoca-box theme="${ot(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${nt.text}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${nt.email}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${nt.text}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${oe.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${Ae.contained}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};ei.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Jn([re({type:te,converter:String}),Qn("design:type",Object)],ei.prototype,"theme",void 0),Jn([re({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"label",void 0),Jn([re({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"nameLabel",void 0),Jn([re({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"emailLabel",void 0),Jn([re({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"titleLabel",void 0),Jn([re({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"messageLabel",void 0),Jn([re({type:String,converter:String}),Qn("design:type",String)],ei.prototype,"buttonLabel",void 0),Jn([ae("#authenitcate-form"),Qn("design:type",Object)],ei.prototype,"formComponent",void 0),ei=Jn([ne("nidoca-form-contact")],ei);let ti=class extends Q{render(){return A`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `}};ti.styles=i`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100vh;
      width: 100vw;
    }

    .right {
      background-color: var(--app-color-primary-background);
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
  `,ti=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-login")],ti);var oi,ni=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ii=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.anchor="anchor",e.page="page"}(oi||(oi={}));let ri=class extends Q{constructor(){super(...arguments),this.loggedIn=!1}updated(e){if(super.updated(e),e.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),e.has("route")&&this.root){for(let e=0;e<this.root.childs.length;e++){const t=this.root.childs[e];if(t.route==this.route){this.contentComponent=document.createElement(t.rootComponent);break}}this.requestUpdate()}}render(){var e;return this.loggedIn?A`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?A`${this.contentComponent}`:A``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(e=this.root)||void 0===e?void 0:e.childs.map((e=>A` <nidoca-menu-item
                        text="${e.name}"
                        @click="${()=>{this.routeTo(e)}}"
                      ></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:A` <nidoca-page-login
          @nidoca-form-login-submit="${e=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:e.detail,bubbles:!0,composed:!0}))}}"
        ></nidoca-page-login>`}routeTo(e){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:e.route,bubbles:!0,composed:!0}))}};ni([re({type:Array}),ii("design:type",Object)],ri.prototype,"root",void 0),ni([re({type:Boolean}),ii("design:type",Boolean)],ri.prototype,"loggedIn",void 0),ni([re({type:String,converter:String}),ii("design:type",Object)],ri.prototype,"route",void 0),ri=ni([ne("nidoca-app")],ri);let ai=class extends Q{render(){return A`
      <nidoca-container style="padding-top:20vh;padding-bottom:20vh;">
        <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
          <nidoca-img src="logo.svg" width="128px"></nidoca-img>
          <nidoca-text-h1 style="padding-left:var(--space-2);">nidoca-webcomponents</nidoca-text-h1>
        </div>
      </nidoca-container>
      <nidoca-container theme="primary">
        <nidoca-section>
          <nidoca-icon-with-description title="Komponentenbibliothek" icon="local_library">
            Die Nidoca Webcomponents ist eine Sammlung von Webkomponenten mit über 36 Komponenten. Diese sind für den
            direkten Einsatz in deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die Komponenten können
            dank der Webcomponent Technologie überall in andere Frameworks eingebaungen werden.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Leichtgewichtig" icon="code">
            Es ist ein sehr kleines, leichtes Komponenten-Framework, das nur 32 KB klein ist. Es enthält mehr als 30
            Komponenten und diverse Zusatzfunktionen wie Routing / Internationalisierung und Speicherung. Komponenten
            können einfach angepasst werden und sind sehr einfach erweiterbar. erstellen.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Open Source" icon="lightbulb">
            Es ist ein Open-Source-Projekt, das Sie auf Github finden können. Du kannst das Projekt natürlich gerne
            finanziell unterstützen, wenn es dir gefällt.
          </nidoca-icon-with-description>
        </nidoca-section>
      </nidoca-container>

      <nidoca-container theme="background">
        <nidoca-icon-with-description title="HTML" icon="code">
          So einfach kannst du die Komponenten in deine HTML Seite einbinden und verwenden:
        </nidoca-icon-with-description>
        <nidoca-code style="padding-bottom:var(--space-4)"
          >&lt;script
          src=&quot;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca-webcomponents.js&quot;&gt;&lt;/script&gt;
          &lt;style&gt;@import
          url(&#39;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca.css&#39;);&lt;/style&gt;
          &lt;nidoca-button&gt;Mein Button&lt;/nidoca-button&gt;
        </nidoca-code>
      </nidoca-container>
    `}};ai.styles=i``,ai=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-main")],ai);let si=class extends Q{render(){return A`
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
    `}};si.styles=i`
    nidoca-article {
      padding-bottom: var(--space-2);
    }
  `,si=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-imprint")],si);var ci=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let li=class extends Q{constructor(){super(...arguments),this.cssVars=[]}firstUpdated(){this.cssVars=((e=document.styleSheets)=>{const t=[];return Array.from(e).forEach((e=>{Array.from(e.cssRules).forEach((e=>{if(!e||!e.style)return;const o=e.style;Array.from(o).forEach((e=>{e.startsWith("--")&&-1==t.indexOf(e)&&t.push(e)}))}))})),t})(),console.log(this.cssVars)}render(){return A`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${Je([this.cssVars],(()=>A`
                ${Ye(this.cssVars,(e=>A`
                    <nidoca-form-text
                      style="width:100%;padding-bottom: var(--space-3);"
                      @input="${t=>{document.documentElement.style.setProperty(e,t.target?t.target.getOutputData().value:"")}}"
                      type="${e.indexOf("color")>-1?nt.COLOR:nt.TEXT}"
                      name="${e}"
                      value="${getComputedStyle(document.documentElement).getPropertyValue(e).trim()}"
                      label="${e}"
                    ></nidoca-form-text>
                  `))}
              `))}
        </nidoca-article>
      </nidoca-container>
    `}};li.styles=i``,ci([re({type:Array}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Array)],li.prototype,"cssVars",void 0),li=ci([ne("nidoca-page-settings")],li);let di=class extends Q{render(){return A``}};di.styles=i``,di=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-privacy")],di);let pi=class extends Q{render(){return A``}};pi.styles=i``,pi=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-terms-of-use")],pi);class hi{constructor(){this.listeners=[],window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",(e=>{if(!this.shouldIgnoreEvent(e)){const t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}}))}static getUniqueInstance(){return hi.uniqueInstance||(hi.uniqueInstance=new hi),hi.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){-1==e.indexOf("#")&&(e="#".concat(e)),console.trace("navigate to: %s",e),null!=t&&console.trace("state: %s",JSON.stringify(t)),document.location.hash!==e?(history.pushState(t,"",e),this.notifyListeners()):console.trace("you are already on page: "+e)}getCurrentState(){return history.state}getStateProperty(e){const t=this.getCurrentState();return null!=t?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const e=this.getCurrentPage();this.listeners.forEach((t=>t.routeChanged(e)))}shouldIgnoreEvent(e){return e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(const t of e.composedPath?e.composedPath():[])if(this.isAnchor(t))return t;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&"a"===e.nodeName.toLowerCase()}shouldIgnoreAnchor(e){return!(!e.target||"_self"===e.target.toLowerCase())||(!!e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){const t=e.port,o=e.protocol;return`${o}//${"http:"===o&&"80"===t||"https:"===o&&"443"===t?e.hostname:e.host}`}}var fi,ui=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},gi=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let yi=class extends Q{constructor(){super(),this.content=A``,hi.getUniqueInstance().subscribe(this),this.routeChanged(hi.getUniqueInstance().getCurrentPage())}routeChanged(e){switch(e){case"privacy":this.content=A`<nidoca-page-privacy></nidoca-page-privacy>`;break;case"imprint":this.content=A`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"settings":this.content=A`<nidoca-page-settings></nidoca-page-settings>`;break;case"terms-of-use":this.content=A`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;default:this.content=A`<nidoca-page-main></nidoca-page-main>`}}render(){return A`
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
    `}};ui([re({type:Object}),gi("design:type","function"==typeof(fi="undefined"!=typeof TemplateResult&&TemplateResult)?fi:Object)],yi.prototype,"content",void 0),yi=ui([ne("nidoca-my-app"),gi("design:paramtypes",[])],yi)})();