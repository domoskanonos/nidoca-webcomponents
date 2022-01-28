/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";var e;!function(e){e.PRIMARY="primary",e.SECONDARY="secondary",e.SURFACE="surface",e.BACKGROUND="background"}(e||(e={}));class t{constructor(e,t,o){this.key=e,this.minWidth=t,this.maxWidth=o}static getCurrentScreen(){let e=null;return[t.MOBILE,t.TABLET,t.DESKTOP].forEach((t=>{(null==t.minWidth||t.minWidth<window.innerWidth)&&(null==t.maxWidth||t.maxWidth>window.innerWidth)&&(e=t)})),e}asMediaStyle(e){let t="@media ";return this.minWidth&&(t=t.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(t=t.concat(" and "))),this.maxWidth&&(t=t.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),t=t.concat("{"),t=t.concat(e),t=t.concat("} "),t}}t.MOBILE=new t("MOBILE",0,640),t.TABLET=new t("TABLET",641,1007),t.DESKTOP=new t("DESKTOP",1008,null);const o=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new Map;class r{constructor(e,t){if(this._$cssResult$=!0,t!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=i.get(this.cssText);return o&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const a=e=>new r("string"==typeof e?e:e+"",n),s=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new r(o,n)},c=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return a(t)})(e):e;var l,p;const d={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},h=(e,t)=>t!==e&&(t==t||e==e),y={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class f extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Eh(o,t);void 0!==n&&(this._$Eu.set(n,o),e.push(n))})),e}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||y}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eh(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$Em)&&void 0!==t?t:this._$Em=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$Em)||void 0===t||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{o?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style");o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$Eg(e,t,o=y){var n,i;const r=this.constructor._$Eh(e,o);if(void 0!==r&&!0===o.reflect){const a=(null!==(i=null===(n=o.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:d.toAttribute)(t,o.type);this._$Ei=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(e,t){var o,n,i;const r=this.constructor,a=r._$Eu.get(e);if(void 0!==a&&this._$Ei!==a){const e=r.getPropertyOptions(a),s=e.converter,c=null!==(i=null!==(n=null===(o=s)||void 0===o?void 0:o.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==i?i:d.fromAttribute;this._$Ei=a,this[a]=c(t,e.type),this._$Ei=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Ei!==e&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Em)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){void 0!==this._$ES&&(this._$ES.forEach(((e,t)=>this._$Eg(t,this[t],e))),this._$ES=void 0),this._$ET()}updated(e){}firstUpdated(e){}}var u,g;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null===(l=globalThis.reactiveElementPlatformSupport)||void 0===l||l.call(globalThis,{ReactiveElement:f}),(null!==(p=globalThis.reactiveElementVersions)&&void 0!==p?p:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");const m=globalThis.trustedTypes,b=m?m.createPolicy("lit-html",{createHTML:e=>e}):void 0,v=`lit$${(Math.random()+"").slice(9)}$`,x="?"+v,E=`<${x}>`,S=document,$=(e="")=>S.createComment(e),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,O=e=>{var t;return R(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,k=/>/g,I=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,L=/'/g,C=/"/g,_=/^(?:script|style|textarea)$/i,P=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),j=P(1),N=(P(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),B=new WeakMap,M=S.createTreeWalker(S,129,null,!1),H=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=w;for(let t=0;t<o;t++){const o=e[t];let s,c,l=-1,p=0;for(;p<o.length&&(a.lastIndex=p,c=a.exec(o),null!==c);)p=a.lastIndex,a===w?"!--"===c[1]?a=A:void 0!==c[1]?a=k:void 0!==c[2]?(_.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=I):void 0!==c[3]&&(a=I):a===I?">"===c[0]?(a=null!=i?i:w,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?I:'"'===c[3]?C:L):a===C||a===L?a=I:a===A||a===k?a=w:(a=I,i=void 0);const d=a===I&&e[t+1].startsWith("/>")?" ":"";r+=a===w?o+E:l>=0?(n.push(s),o.slice(0,l)+"$lit$"+o.slice(l)+v+d):o+v+(-2===l?(n.push(void 0),t):d)}const s=r+(e[o]||"<?>")+(2===t?"</svg>":"");return[void 0!==b?b.createHTML(s):s,n]};class U{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,s=this.parts,[c,l]=H(e,t);if(this.el=U.createElement(c,o),M.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=M.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(v)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+"$lit$").split(v),t=/([.?@])?(.*)/.exec(o);s.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?X:"@"===t[1]?V:Y})}else s.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(_.test(n.tagName)){const e=n.textContent.split(v),t=e.length-1;if(t>0){n.textContent=m?m.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],$()),M.nextNode(),s.push({type:2,index:++i});n.append(e[t],$())}}}else if(8===n.nodeType)if(n.data===x)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(v,e+1));)s.push({type:7,index:i}),e+=v.length-1}i++}}static createElement(e,t){const o=S.createElement("template");return o.innerHTML=e,o}}function z(e,t,o=e,n){var i,r,a,s;if(t===N)return t;let c=void 0!==n?null===(i=o._$Cl)||void 0===i?void 0:i[n]:o._$Cu;const l=T(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=c:o._$Cu=c),void 0!==c&&(t=z(e,c._$AS(e,t.values),c,n)),t}class W{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(o,!0);M.currentNode=i;let r=M.nextNode(),a=0,s=0,c=n[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new F(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new q(r,this,e)),this.v.push(t),c=n[++s]}a!==(null==c?void 0:c.index)&&(r=M.nextNode(),a++)}return i}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class F{constructor(e,t,o,n){var i;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cg=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),T(e)?e===D||null==e||""===e?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==N&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):O(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==D&&T(this._$AH)?this._$AA.nextSibling.data=e:this.S(S.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=U.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.m(o);else{const e=new W(i,this),t=e.p(this.options);e.m(o),this.S(t),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new U(e)),t}M(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new F(this.A($()),this.A($()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Y{constructor(e,t,o,n,i){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=z(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==N,r&&(this._$AH=e);else{const n=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=z(this,n[o+a],t,a),s===N&&(s=this._$AH[a]),r||(r=!T(s)||s!==this._$AH[a]),s===D?e=D:e!==D&&(e+=(null!=s?s:"")+i[a+1]),this._$AH[a]=s}r&&!n&&this.k(e)}k(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends Y{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===D?void 0:e}}class X extends Y{constructor(){super(...arguments),this.type=4}k(e){e&&e!==D?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class V extends Y{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=z(this,e,t,0))&&void 0!==o?o:D)===N)return;const n=this._$AH,i=e===D&&n!==D||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==D&&(n===D||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class q{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const K={P:"$lit$",V:v,L:x,I:1,N:H,R:W,D:O,j:z,H:F,O:Y,F:X,B:V,W:G,Z:q};var J,Z,Q;null===(u=globalThis.litHtmlPlatformSupport)||void 0===u||u.call(globalThis,U,F),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");class ee extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let a=r._$litPart$;if(void 0===a){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=a=new F(t.insertBefore($(),e),e,void 0,null!=o?o:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return N}}ee.finalized=!0,ee._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:ee}),null===(Z=globalThis.litElementPlatformSupport)||void 0===Z||Z.call(globalThis,{LitElement:ee}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.0.0-rc.4");const te=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),oe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function ne(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):oe(e,t)}function ie(e,t){return(({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}})({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var re,ae,se,ce=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},le=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.NONE="NONE",e.ALL="ALL",e.ALL_ROUND="ALL_ROUND",e.HORIZONTAL="HORIZONTAL",e.VERTICAL="VERTICAL",e.LEFT="LEFT",e.RIGHT="RIGHT",e.TOP="TOP",e.BOTTOM="BOTTOM",e.BOTTOM_SELECTED="BOTTOM_SELECTED",e.FULL_WIDTH="FULL_WIDTH",e.FULL_HEIGHT="FULL_HEIGHT"}(ae||(ae={})),function(e){e.THIN="THIN",e.MEDIUM="MEDIUM",e.THICK="THICK"}(se||(se={}));let pe=class extends ee{constructor(){super(...arguments),this.theme=e.SURFACE,this.borderProperties=[ae.ALL],this.borderSize=se.THIN}render(){return j`
      <style>
        .BORDER {
          border-color: var(--app-color-${this.theme}-background);
        }
        .BOTTOM_SELECTED:focus-within {
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>

      <slot class="${this.toBorderPropertiesString(this.borderProperties)} ${this.borderSize}"></slot>
    `}toBorderPropertiesString(e){let t="BORDER";return e.forEach((e=>{t=t.concat(" ").concat(e)})),t}};pe.styles=s`
    :host,
    slot {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
      float: left;
      clear: none;
      display: contents;
    }

    slot {
      display: inline-block;
    }

    .FULL_WIDTH {
      width: 100%;
    }

    .FULL_HEIGHT {
      height: 100%;
    }

    .THIN {
      border-width: thin;
    }

    .MEDIUM {
      border-width: 2px;
    }

    .THICK {
      border-width: 4px;
    }

    .ALL {
      border-style: solid;
    }

    .ALL_ROUND {
      overflow: hidden;
      border-style: solid;
      border-radius: 10px;
    }

    .HORIZONTAL,
    .TOP {
      border-top-style: solid;
    }

    .HORIZONTAL,
    .BOTTOM {
      border-bottom-style: solid;
    }

    .VERTICAL,
    .LEFT {
      border-left-style: solid;
    }

    .VERTICAL,
    .RIGHT {
      border-right-style: solid;
    }

    .BOTTOM_SELECTED {
      border-bottom-style: solid;
    }
  `,ce([ne({type:String}),le("design:type","function"==typeof(re=void 0!==e&&e)?re:Object)],pe.prototype,"theme",void 0),ce([ne({type:Array}),le("design:type",Array)],pe.prototype,"borderProperties",void 0),ce([ne({type:String}),le("design:type",String)],pe.prototype,"borderSize",void 0),pe=ce([te("nidoca-border")],pe);var de,he,ye=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},fe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.ALL="ALL",e.VERTICAL="VERTICAL",e.HORIZONTAL="HORIZONTAL",e.LEFT="LEFT",e.RIGHT="RIGHT",e.TOP="TOP",e.BOTTOM="BOTTOM"}(de||(de={})),function(e){e.ZERO="--space-zero",e.LITTLE="--space-little",e.SMALL="--space-small",e.MEDIUM="--space-medium",e.NORMAL="--space-normal",e.BIG="--space-big",e.MAX="--space-max"}(he||(he={}));let ue=class extends ee{constructor(){super(...arguments),this.devices=[t.DESKTOP,t.TABLET,t.MOBILE],this.spacerTypes=[de.ALL],this.spacerSize=he.NORMAL,this.cssStyle=""}render(){return j`
      <style>
        ${this.toStyle(this.devices,this.spacerTypes,this.spacerSize)}
      </style>
      <span class="spacer" style="${this.cssStyle}">
        <slot></slot>
      </span>
    `}toStyle(e,t,o){const n="var(".concat(o).concat(")");let i="";t.forEach((e=>{switch(e){case de.LEFT:i=i.concat("padding-left:".concat(n).concat(";"));break;case de.RIGHT:i=i.concat("padding-right:".concat(n).concat(";"));break;case de.TOP:i=i.concat("padding-top:".concat(n).concat(";"));break;case de.BOTTOM:i=i.concat("padding-bottom:".concat(n).concat(";"));break;case de.ALL:i=i.concat("padding-left:".concat(n).concat(";")),i=i.concat("padding-right:".concat(n).concat(";")),i=i.concat("padding-top:".concat(n).concat(";")),i=i.concat("padding-bottom:".concat(n).concat(";"));break;case de.HORIZONTAL:i=i.concat("padding-left:".concat(n).concat(";")),i=i.concat("padding-right:".concat(n).concat(";"));break;case de.VERTICAL:i=i.concat("padding-top:".concat(n).concat(";")),i=i.concat("padding-bottom:".concat(n).concat(";"))}})),i=".spacer {".concat(i).concat().concat("}");let r="";return e.forEach((e=>{r=r.concat(e.asMediaStyle(i))})),r}};ue.styles=s`
    .spacer,
    ::slotted(.spacer) {
      box-sizing: border-box;
      display: inline-block;
    }
  `,ye([ne({type:Array}),fe("design:type",Array)],ue.prototype,"devices",void 0),ye([ne({type:Array}),fe("design:type",Array)],ue.prototype,"spacerTypes",void 0),ye([ne({type:String}),fe("design:type",String)],ue.prototype,"spacerSize",void 0),ye([ne({type:String}),fe("design:type",String)],ue.prototype,"cssStyle",void 0),ue=ye([te("nidoca-layout-spacer")],ue);var ge,me=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};!function(e){e.HIDE="HIDE",e.INVISIBLE="INVISIBLE",e.NORMAL="NORMAL"}(ge||(ge={}));let be=class extends ee{constructor(){super(...arguments),this.visibleType=ge.NORMAL}render(){return j` <slot class="${this.visibleType}"></slot> `}};be.styles=s`
    .HIDE,
    ::slotted(.HIDE) {
      display: none !important;
      visibility: hidden !important;
    }

    .INVISIBLE,
    ::slotted(.INVISIBLE) {
      visibility: hidden !important;
    }
  `,me([ne({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],be.prototype,"visibleType",void 0),be=me([te("nidoca-visible")],be);var ve=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},xe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ee=class extends ee{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return j`
      <div class="ACCORDION_ITEM">
        <nidoca-border
          .borderProperties="${[ae.BOTTOM,ae.LEFT,ae.RIGHT,ae.FULL_WIDTH]}"
        >
          <nidoca-layout-flex
            class="ACCORDION_HEADER"
            @click="${()=>this.toggle()}"
            .flexDirection="${Xe.ROW}"
            .flexWrap="${Ve.WRAP}"
            .flexJustifyContent="${qe.SPACE_BETWEEN}"
            .flexAlignItems="${Ke.CENTER}"
            .flexAlignContent="${Je.CENTER}"
          >
            <nidoca-layout-spacer spacerSize="${he.MEDIUM}" .spacerTypes="${[de.LEFT]}">
              <nidoca-typography text="${this.header}"></nidoca-typography>
            </nidoca-layout-spacer>
            <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
          </nidoca-layout-flex>
          <nidoca-visible visibleType="${this.opened?ge.NORMAL:ge.HIDE}">
            <slot></slot>
          </nidoca-visible>
        </nidoca-border>
      </div>
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ee.styles=s`
    .ACCORDION_HEADER {
      cursor: pointer;
    }
  `,ve([ne({type:String}),xe("design:type",String)],Ee.prototype,"header",void 0),ve([ne({type:Boolean}),xe("design:type",Boolean)],Ee.prototype,"opened",void 0),Ee=ve([te("nidoca-accordion-item")],Ee);var Se,$e=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Te=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.SINGLE="SINGLE",e.MULTI="MULTI"}(Se||(Se={}));let Re=class extends ee{constructor(){super(...arguments),this.accordionType=Se.SINGLE}render(){return j`
      <nidoca-border
        .borderProperties="${[ae.TOP,ae.FULL_WIDTH]}"
        @nidoca-event-accordion-item-clicked="${e=>this.accordionSwitched(e)}"
      >
        <slot id="accordionSlot"></slot>
      </nidoca-border>
    `}accordionSwitched(e){const t=e.detail;switch(this.accordionType){case Se.SINGLE:if(null!=this.accordionSlot){const e=this.accordionSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof Ee&&n!=t&&(n.opened=!1)}}break;case Se.MULTI:}}};Re.styles=s``,$e([ne({type:Se}),Te("design:type",String)],Re.prototype,"accordionType",void 0),$e([ie("#accordionSlot"),Te("design:type",Object)],Re.prototype,"accordionSlot",void 0),Re=$e([te("nidoca-accordion")],Re);var Oe,we,Ae=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ke=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6",e.SUBTITLE1="SUBTITLE1",e.SUBTITLE2="SUBTITLE2",e.BODY1="BODY1",e.BODY2="BODY2",e.BUTTON="BUTTON",e.CAPTION="CAPTION",e.OVERLINE="OVERLINE"}(Oe||(Oe={})),function(e){e.JUSTIFY="text-align:justify;",e.JUSTIFY_ALL="text-align:justify-all;",e.LEFT="text-align: left;",e.RIGHT="text-align: right;",e.CENTER="text-align: center;",e.START="text-align: start;",e.END="text-align: end;",e.MATCH_PARENT="text-align: match-parent;",e.INHERIT="text-align: inherit;",e.INITIAL="text-align: initial;",e.UNSET="text-align: unset;"}(we||(we={}));let Ie=class extends ee{constructor(){super(...arguments),this.type=Oe.BODY1,this.textAlign=we.START,this.text=""}render(){return j`
      <span class="TYPOGRAPHY ${this.type}" style="${this.textAlign}"
        >${this.text}<slot></slot
      ></span>
    `}};Ie.styles=s`
    .TYPOGRAPHY {
      display: inline-block;
    }

    .H1,
    .H2,
    .H3,
    .H4,
    .H5,
    .H6,
    .SUBTITLE1,
    .SUBTITLE2,
    .BODY1,
    .BODY2,
    .BUTTON,
    .CAPTION,
    .OVERLINE {
      text-overflow: ellipsis;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      line-height: normal;
      white-space: normal;
      word-wrap: normal;
      word-break: break-word;
    }

    .H1 {
      font-size: 2.75rem;
    }

    .H2,
    ::slotted(.H2) {
      font-size: 2.5rem;
      vertical-align: top;
    }

    .H3 {
      font-size: 2rem;
    }

    .H4 {
      font-size: 1.5rem;
    }

    .H5 {
      font-size: 1.25rem;
    }

    .H6 {
      font-size: 1.15rem;
    }

    .H4,
    .H5,
    .H6,
    .OVERLINE,
    .CAPTION,
    .SUBTITLE2 {
      opacity: 0.6;
    }

    .SUBTITLE1 {
      font-size: 1rem;
    }

    .SUBTITLE2 {
      font-size: 0.875rem;
    }

    .BODY1 {
      font-size: 1em;
      text-decoration-style: solid;
      line-height: 1.5;
    }

    .BODY2 {
      font-size: 0.875rem;
      text-decoration-style: solid;
      line-height: 1.5;
    }

    .BUTTON {
      font-size: 0.875rem;
      text-transform: uppercase;
    }

    .CAPTION {
      font-size: 0.75rem;
    }

    .OVERLINE {
      font-size: 0.625rem;
      text-transform: uppercase;
    }
  `,Ae([ne({type:String}),ke("design:type",String)],Ie.prototype,"type",void 0),Ae([ne({type:String}),ke("design:type",String)],Ie.prototype,"textAlign",void 0),Ae([ne({type:String}),ke("design:type",String)],Ie.prototype,"text",void 0),Ie=Ae([te("nidoca-typography")],Ie);var Le,Ce=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},_e=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e[e.CURRENT=0]="CURRENT",e[e.COMPLETED=1]="COMPLETED",e[e.OPEN=2]="OPEN",e[e.FINISH=3]="FINISH"}(Le||(Le={}));let Pe=class extends ee{constructor(){super(...arguments),this.icon="",this.title="",this.isLast=!1,this.first=!1}render(){return j`
      <nidoca-layout-flex
        .flexDirection="${Xe.COLUMN}"
        .flexWrap="${Ve.NO_WRAP}"
        .flexJustifyContent="${qe.SPACE_EVENLY}"
        .flexAlignItems="${Ke.FLEX_START}"
        .flexAlignContent="${Je.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
      >
        <nidoca-layout-flex
          .flexDirection="${Xe.ROW}"
          .flexWrap="${Ve.NO_WRAP}"
          .flexJustifyContent="${qe.FLEX_START}"
          .flexAlignItems="${Ke.CENTER}"
          .flexAlignContent="${Je.SPACE_EVENLY}"
          containerStyle=""
          itemStyle=""
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${so.NONE}"
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

          ${this.isLast?j``:j`<nidoca-icon
            color="${this.determineBackgroundColor(this.state)}"
            icon="label_important">
          </nidoca-icon>`}
        </nidoca-layout-flex>
        <nidoca-typography
          style="width:48px;"
          .type="${Oe.OVERLINE}"
          textAlign="${we.CENTER}"
          text="${this.title}"
          ><slot></slot>
        </nidoca-typography>
      </nidoca-layout-flex>
    `}determineBackgroundColor(e){return e==Le.COMPLETED?"var(--app-color-primary)":e==Le.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(e){return e==Le.FINISH?"var(--app-color-success)":e==Le.COMPLETED?"var(--mdc-theme-on-primary)":e==Le.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const e=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}};Pe.styles=s`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space-little);
    }

    .wizard-step-connector.selected {
      padding: var(--space-little);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-color-primary);
    }
  `,Ce([ne({type:String}),_e("design:type",String)],Pe.prototype,"icon",void 0),Ce([ne({type:String}),_e("design:type",String)],Pe.prototype,"title",void 0),Ce([ne({type:Number}),_e("design:type",Object)],Pe.prototype,"state",void 0),Ce([ne({type:Boolean}),_e("design:type",Boolean)],Pe.prototype,"isLast",void 0),Pe=Ce([te("nidoca-wizard-step")],Pe);var je=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ne=class extends ee{render(){return j`
      <nidoca-layout-flex
        .flexDirection="${Xe.ROW}"
        .flexWrap="${Ve.NO_WRAP}"
        .flexJustifyContent="${qe.FLEX_START}"
        .flexAlignItems="${Ke.FLEX_START}"
        .flexAlignContent="${Je.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-flex>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();let n=0;for(let e=0;e<o.length;e++){const t=o[e];t instanceof Pe&&(t.index=e,t.state==Le.CURRENT&&(n=e),t.index==o.length-1&&(t.isLast=!0))}this.changeState(n)}stepClicked(e){const t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){const t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Pe&&void 0!==n.index&&(n.index<e?n.state=Le.COMPLETED:n.index==e?n.state=Le.CURRENT:n.state=Le.OPEN)}}}};Ne.styles=s``,je([ie("#wizardSlot"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],Ne.prototype,"wizardSlot",void 0),Ne=je([te("nidoca-wizard")],Ne);var De=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Be=class extends ee{constructor(){super(...arguments),this.clickable=!0}render(){return j`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Be.styles=s`
    .chip {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 var(--space-normal);
      border-radius: var(--line-height-large);
      line-height: var(--line-height-large);
    }

    .chip:hover {
      background: var(--app-color-surface-background-dark);
    }

    .clickable {
      cursor: pointer;
    }
  `,De([ne({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Be.prototype,"clickable",void 0),Be=De([te("nidoca-chip")],Be);var Me=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let He=class extends ee{constructor(){super(...arguments),this.code=""}render(){return j`
         <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
      `}};He.styles=s`
      pre {
   margin: 0;
   padding: 0;
   white-space: unset;
}

pre code {
   white-space: pre-line;
   display: block;
   line-height: 1.75;
   padding: 1em 1.5em;
   overflow-x: auto;
}

code {
   background: var(--app-color-surface-background);
   border-radius: 0.375em;
   border: solid 1px var(--app-color-surface-background-dark);
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
   `,Me([ne({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],He.prototype,"code",void 0),He=Me([te("nidoca-code")],He);var Ue=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ze=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let We=class extends ee{constructor(){super(),this.show=!1,addEventListener("click",(e=>{var t;const o=null===(t=this.associatedElement)||void 0===t?void 0:t.getBoundingClientRect();o&&(o.top>e.clientY||o.right<e.clientX||o.left>e.clientX||o.bottom<e.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return j`
      <nidoca-visible visibleType="${this.show?ge.NORMAL:ge.HIDE}">
        <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
          <nidoca-border>
            <slot id="slot"></slot>
          </nidoca-border>
        </div>
      </nidoca-visible>
    `}calculatePositionStyle(e){let t="";if(e){const o=e.getBoundingClientRect();o.right>window.innerWidth/2?t+=`right:${window.innerWidth-o.right}px;`:t+=`left:${o.left}px;`,o.top>window.innerHeight/2?t+=`bottom:${o.height+window.innerHeight-o.top}px;`:t+=`top:${o.bottom}px;`}return t}};We.styles=s`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Ue([ne({type:Boolean}),ze("design:type",Boolean)],We.prototype,"show",void 0),Ue([ne({type:Object}),ze("design:type",Object)],We.prototype,"associatedElement",void 0),We=Ue([te("nidoca-elevation"),ze("design:paramtypes",[])],We);var Fe,Ye=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};!function(e){e.PROGRESS="PROGRESS",e.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}(Fe||(Fe={}));let Ge=class extends ee{constructor(){super(...arguments),this.progressType=Fe.PROGRESS}render(){return j` <progress class="${this.progressType}"></progress> `}};Ge.styles=s`
    .PROGRESS {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      height: 0.25em;
      color: var(--app-color-primary);
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
      color: var(--app-color-primary);
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
  `,Ye([ne({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Ge.prototype,"progressType",void 0),Ge=Ye([te("nidoca-progress")],Ge);var Xe,Ve,qe,Ke,Je,Ze=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Qe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.ROW="row",e.ROW_REVERSE="rowData-reverse",e.COLUMN="column",e.COLUMN_REVERSE="column-reverse"}(Xe||(Xe={})),function(e){e.WRAP="wrap",e.NO_WRAP="nowrap",e.WRAP_REVERSE="flexWrap-reverse"}(Ve||(Ve={})),function(e){e.FLEX_START="flex-start",e.FLEX_END="flex-end",e.CENTER="center",e.SPACE_BETWEEN="space-between",e.SPACE_AROUND="space-around",e.SPACE_EVENLY="space-evenly"}(qe||(qe={})),function(e){e.FLEX_START="flex-start",e.FLEX_END="flex-end",e.CENTER="center",e.STRETCH="stretch",e.START="start",e.END="end",e.BASELINE="baseline",e.FIRST_BASELINE="first baseline",e.LAST_BASLINE="last baseline",e.SAFE="safe",e.UNSAFE="unsafe"}(Ke||(Ke={})),function(e){e.FLEX_START="flex-start",e.FLEX_END="flex-end",e.CENTER="center",e.STRETCH="stretch",e.SPACE_AROUND="space-around",e.SPACE_EVENLY="space-evenly",e.SPACE_BETWEEN="space-between",e.START="start",e.END="end",e.BASELINE="baseline",e.FIRST_BASELINE="first baseline",e.LAST_BASLINE="last baseline",e.SAFE="safe",e.UNSAFE="unsafe"}(Je||(Je={}));let et=class extends ee{constructor(){super(...arguments),this.devices=[t.DESKTOP,t.TABLET,t.MOBILE],this.flexDirection=Xe.ROW,this.flexWrap=Ve.WRAP,this.flexJustifyContent=qe.FLEX_START,this.flexAlignItems=Ke.FLEX_START,this.flexAlignContent=Je.FLEX_START,this.containerStyle="",this.itemStyle=""}render(){return j`
      <style>
        ${this.toDeviceStyle("flexContainerDevice",this.devices,this.containerStyle)}
        ${this.toDeviceStyle("flexItemDevice",this.devices,this.itemStyle)}
      </style>
      <slot
        class="flexContainer flexContainerDevice"
        style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.flexJustifyContent}; align-items: ${this.flexAlignItems}; align-content: ${this.flexAlignContent};"
        id="slotElement"
        @slotchange="${e=>this.slotChanged(e)}"
      ></slot>
    `}slotChanged(e){const t=e.target;this.changeSlotComponentsStyle(t)}changeSlotComponentsStyle(e){if(null==e)return;const t=e.assignedElements();for(let e=0;e<t.length;e++){const o=t[e].classList;o.contains("flexItem")||o.add("flexItem"),o.contains("flexItemDevice")||o.add("flexItemDevice")}}toDeviceStyle(e,t,o){o=".".concat(e).concat(", ::slotted(.").concat(e).concat(") {").concat(o).concat().concat("}");let n="";return t.forEach((e=>{n=n.concat(e.asMediaStyle(o))})),n}};et.styles=s`
    :host,
    *,
    ::slotted(*) {
      box-sizing: border-box;
    }

    .flexContainer,
    ::slotted(.flexContainer) {
      margin: auto;
      display: flex;
      overflow: auto;
      box-sizing: border-boxed;
    }

    .flexItem,
    ::slotted(.flexItem) {
      box-sizing: border-box;
      overflow: auto;
    }
  `,Ze([ne({type:Array}),Qe("design:type",Array)],et.prototype,"devices",void 0),Ze([ne({type:String}),Qe("design:type",String)],et.prototype,"flexDirection",void 0),Ze([ne({type:String}),Qe("design:type",String)],et.prototype,"flexWrap",void 0),Ze([ne({type:String}),Qe("design:type",String)],et.prototype,"flexJustifyContent",void 0),Ze([ne({type:String}),Qe("design:type",String)],et.prototype,"flexAlignItems",void 0),Ze([ne({type:String}),Qe("design:type",String)],et.prototype,"flexAlignContent",void 0),Ze([ne({type:String}),Qe("design:type",String)],et.prototype,"containerStyle",void 0),Ze([ne({type:String}),Qe("design:type",String)],et.prototype,"itemStyle",void 0),Ze([ie("#slotElement"),Qe("design:type",Object)],et.prototype,"slotElement",void 0),et=Ze([te("nidoca-layout-flex")],et);var tt,ot=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},nt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.CONTAINED="CONTAINED",e.OUTLINED="OUTLINED",e.TEXT="TEXT"}(tt||(tt={}));let it=class extends ee{constructor(){super(...arguments),this.buttonType=tt.CONTAINED,this.leadingIcon="",this.text=""}render(){return j`
      <nidoca-ripple>
        <nidoca-layout-flex
          class="BUTTON ${this.buttonType}"
          @click="${()=>{this.clicked()}}"
          flexWrap="${Ve.NO_WRAP}"
          .flexJustifyContent="${qe.CENTER}"
          .flexAlignItems="${Ke.CENTER}"
        >
          <nidoca-visible visibleType="${this.leadingIcon?ge.NORMAL:ge.HIDE}">
            <nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>
          </nidoca-visible>
          <nidoca-visible visibleType="${this.leadingIcon?ge.NORMAL:ge.HIDE}"> </nidoca-visible>
          <nidoca-typography text="${this.text}" type="${Oe.BUTTON}">
            <slot></slot>
          </nidoca-typography>

          <nidoca-visible visibleType="${this.buttonType==tt.TEXT?ge.HIDE:ge.NORMAL}">
            <nidoca-layout-spacer spacerSize="${he.MEDIUM}"></nidoca-layout-spacer>
          </nidoca-visible>
        </nidoca-layout-flex>
      </nidoca-ripple>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};it.styles=s`
    
    .BUTTON {
      cursor: pointer;
      text-transform: uppercase;
      box-sizing: border-box;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      line-height: 48px;
    }

    .TEXT {
      font-weight: 900;
      color: var(--app-color-primary-background)
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `,ot([ne({type:String}),nt("design:type",String)],it.prototype,"buttonType",void 0),ot([ne({type:String}),nt("design:type",String)],it.prototype,"leadingIcon",void 0),ot([ne({type:String}),nt("design:type",String)],it.prototype,"text",void 0),it=ot([te("nidoca-button")],it);var rt,at=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};!function(e){e.NONE="NONE",e.KEY_LIGHT="KEY_LIGHT",e.AMBIENT_LIGHT="AMBIENT_LIGHT",e.COMBINED="COMBINED"}(rt||(rt={}));let st=class extends ee{constructor(){super(...arguments),this.shadowType=rt.NONE}render(){return j` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `}};st.styles=s`

    .SHADOW {
      display: inline-block;
    }

    .KEY_LIGHT {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .AMBIENT_LIGHT {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .COMBINED {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
  `,at([ne({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],st.prototype,"shadowType",void 0),st=at([te("nidoca-box-shadow")],st);var ct,lt,pt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},dt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.NORMAL="NORMAL",e.CLEAR="CLEAR"}(lt||(lt={}));let ht=class extends ee{constructor(){super(...arguments),this.label="",this.showLabel=!0,this.errorText="",this.infoText="",this.warningText="",this.theme=e.SURFACE,this.inputframeMode=lt.NORMAL}render(){return this.inputframeMode==lt.NORMAL?j`
          <style>
            .main {
              color: var(--app-color-${this.theme});
              background-color: var(--app-color-${this.theme}-background-light);
            }

            :focus-within {
              background-color: var(--app-color-${this.theme}-background);
            }
          </style>
          <nidoca-border
            @slotchange="${()=>this.setShowLabel()}"
            @click="${()=>this.setShowLabel()}"
            @input="${()=>this.setShowLabel()}"
            class="main"
            .theme="${this.theme}"
            .borderSize="${se.MEDIUM}"
            .borderProperties="${[ae.FULL_WIDTH,ae.BOTTOM_SELECTED,ae.BOTTOM]}"
          >
            <nidoca-layout-spacer
              cssStyle="width:100%;"
              spacerSize="${he.SMALL}"
              .spacerTypes="${[de.ALL]}"
            >
              <nidoca-layout-flex
                .flexAlignContent="${Je.CENTER}"
                itemStyle="flex-basis: 100%;"
              >
                <nidoca-visible
                  .visibleType="${this.showLabel?ge.NORMAL:ge.INVISIBLE}"
                >
                  <nidoca-typography
                    class="label"
                    .type="${Oe.CAPTION}"
                    text="${this.label}"
                  ></nidoca-typography>
                </nidoca-visible>

                <slot id="slotElement"></slot>
              </nidoca-layout-flex>
            </nidoca-layout-spacer>
          </nidoca-border>

          <nidoca-visible visibleType="${this.infoText?ge.NORMAL:ge.HIDE}">
            <nidoca-typography
              .type="${Oe.BODY1}"
              text="${this.infoText}"
            ></nidoca-typography>
          </nidoca-visible>

          <nidoca-visible visibleType="${this.warningText?ge.NORMAL:ge.HIDE}">
            <nidoca-typography
              style="color:var(--app-color-warning-background)"
              .type="${Oe.BODY1}"
              text="${this.warningText}"
            ></nidoca-typography>
          </nidoca-visible>

          <nidoca-visible visibleType="${this.errorText?ge.NORMAL:ge.HIDE}">
            <nidoca-typography
              style="color:var(--app-color-error-background)"
              .type="${Oe.BODY1}"
              text="${this.errorText}"
            ></nidoca-typography>
          </nidoca-visible>
        `:j`<slot id="slotElement"></slot>`}setShowLabel(){if(this.slotElement){const e=this.slotElement.assignedElements();for(let t=0;t<e.length;t++){const o=e[t];("SELECT"===o.tagName||"date"===o.getAttribute("type")||"datetime-local"===o.getAttribute("type")||"month"===o.getAttribute("type")||"time"===o.getAttribute("type")||"week"===o.getAttribute("type")||o instanceof HTMLInputElement)&&(this.showLabel=!0)}}}};ht.styles=s``,pt([ne({type:String}),dt("design:type",String)],ht.prototype,"label",void 0),pt([ne({type:Boolean}),dt("design:type",Boolean)],ht.prototype,"showLabel",void 0),pt([ne({type:String}),dt("design:type",String)],ht.prototype,"errorText",void 0),pt([ne({type:String}),dt("design:type",String)],ht.prototype,"infoText",void 0),pt([ne({type:String}),dt("design:type",String)],ht.prototype,"warningText",void 0),pt([ne({type:String}),dt("design:type","function"==typeof(ct=void 0!==e&&e)?ct:Object)],ht.prototype,"theme",void 0),pt([ne({type:String}),dt("design:type",String)],ht.prototype,"inputframeMode",void 0),pt([ie("#slotElement"),dt("design:type",Object)],ht.prototype,"slotElement",void 0),ht=pt([te("nidoca-form-inputframe")],ht);class yt extends ee{}var ft=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ut=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let gt=class extends ee{constructor(){super(...arguments),this.autocomplete=!0}render(){return j`
      <form
        class="container"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        .?autocomplete="${this.autocomplete}"
      >
        <slot id="slotElement"></slot>
      </form>
    `}getInputElements(e){if(null==e)return[];const t=[],o=e.assignedElements({flatten:!0});for(let e=0;e<o.length;e++){const n=o[e];this.recursiveInputElementSearch(n,t)}return t}validate(){let e=!0;for(const t of this.getInputElements(this.slotElement))t.validate()||(e&&t.scrollIntoView(!0),e=!1);return e}getOutputData(){const e=new FormData,t={};for(const o of this.getInputElements(this.slotElement)){const n=o.getOutputData();t[n.key]=n.value,e.append(n.key,n.value)}const o={};return o.jsonObject=t,o.formData=e,o}formButtonClicked(e){switch(console.log("formButton clicked: "+e.detail),e.detail){case"submitButton":this.dispatchEvent(new CustomEvent("nidoca-event-form-submit-button-clicked",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}}recursiveInputElementSearch(e,t){if(e instanceof yt)t.push(e);else if(e.hasChildNodes()){const o=e.children;for(const e of[].slice.call(o))this.recursiveInputElementSearch(e,t)}}};gt.styles=s`
    .container {
      box-sizing: border-box;
    }
  `,ft([ne({type:Boolean}),ut("design:type",Boolean)],gt.prototype,"autocomplete",void 0),ft([ie("#slotElement"),ut("design:type",Object)],gt.prototype,"slotElement",void 0),gt=ft([te("nidoca-form")],gt);const mt=e=>(...t)=>({_$litDirective$:e,values:t});class bt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{H:vt}=K,xt=()=>document.createComment(""),Et=(e,t,o)=>{var n;const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(xt(),r),n=i.insertBefore(xt(),r);o=new vt(t,n,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,s=a!==e;if(s){let t;null===(n=o._$AQ)||void 0===n||n.call(o,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||s){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},St=(e,t,o=e)=>(e._$AI(t,o),e),$t={},Tt=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let o=e._$AA;const n=e._$AB.nextSibling;for(;o!==n;){const e=o.nextSibling;o.remove(),o=e}},Rt=(e,t,o)=>{const n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},Ot=mt(class extends bt{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const i=[],r=[];let a=0;for(const t of e)i[a]=n?n(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){var i;const r=(e=>e._$AH)(e),{values:a,keys:s}=this.dt(t,o,n);if(!Array.isArray(r))return this.ct=s,a;const c=null!==(i=this.ct)&&void 0!==i?i:this.ct=[],l=[];let p,d,h=0,y=r.length-1,f=0,u=a.length-1;for(;h<=y&&f<=u;)if(null===r[h])h++;else if(null===r[y])y--;else if(c[h]===s[f])l[f]=St(r[h],a[f]),h++,f++;else if(c[y]===s[u])l[u]=St(r[y],a[u]),y--,u--;else if(c[h]===s[u])l[u]=St(r[h],a[u]),Et(e,l[u+1],r[h]),h++,u--;else if(c[y]===s[f])l[f]=St(r[y],a[f]),Et(e,r[h],r[y]),y--,f++;else if(void 0===p&&(p=Rt(s,f,u),d=Rt(c,h,y)),p.has(c[h]))if(p.has(c[y])){const t=d.get(s[f]),o=void 0!==t?r[t]:null;if(null===o){const t=Et(e,r[h]);St(t,a[f]),l[f]=t}else l[f]=St(o,a[f]),Et(e,r[h],o),r[t]=null;f++}else Tt(r[y]),y--;else Tt(r[h]),h++;for(;f<=u;){const t=Et(e,l[u+1]);St(t,a[f]),l[f++]=t}for(;h<=y;){const e=r[h++];null!==e&&Tt(e)}return this.ct=s,((e,t=$t)=>{e._$AH=t})(e,l),N}}),wt={},At=mt(class extends bt{constructor(){super(...arguments),this.ot=wt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every(((e,t)=>e===this.ot[t])))return N}else if(this.ot===t)return N;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});var kt,It=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Lt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ct=class extends yt{constructor(){super(...arguments),this.value="",this.options=[],this.name="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.required=!0,this.multiple=!1,this.size=1,this.inputframeMode=lt.NORMAL}render(){return j`
      <nidoca-form-inputframe
        label="${this.label}"
        errorText="${this.errorText}"
        infoText="${this.infoText}"
        warningText="${this.warningText}"
        .inputframeMode="${this.inputframeMode}"
      >
        <select
          id="selectElement"
          name="${this.name}"
          size="${this.size}"
          ?required="${this.required}"
          ?multiple="${this.multiple}"
        >
          ${At([this.value,this.options],(()=>j`
              ${Ot(this.options,(e=>null==e?j` <option></option>`:this.isSelectedOption(e)?j` <option value="${e.key}" selected>${e.value}</option> `:j` <option value="${e.key}">${e.value}</option> `))}
            `))}
        </select>
      </nidoca-form-inputframe>
    `}getOutputData(){let e=this.value;if(null!=this.selectElement&&this.multiple){e=[];for(let t=0,o=this.selectElement.options.length;t<o;t++)this.selectElement.options[t].selected&&e.push(this.options[t].key)}else null!=this.selectElement&&(e=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:e}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(e){if(this.multiple){let t=!1;for(const o of this.value)if(t=e.key===o,t)return!0}return this.value===e.key}static enumToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),Object.keys(e).forEach((t=>{o.push({key:t,value:e[t]})})),o}};Ct.styles=s`
    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
    }

    select option {
      color: inherit;
      background: inherit;
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
  `,It([ne(),Lt("design:type",Object)],Ct.prototype,"value",void 0),It([ne({type:class{constructor(){this.key=""}}}),Lt("design:type",Array)],Ct.prototype,"options",void 0),It([ne({type:String}),Lt("design:type",String)],Ct.prototype,"name",void 0),It([ne({type:String}),Lt("design:type",String)],Ct.prototype,"label",void 0),It([ne({type:String}),Lt("design:type",String)],Ct.prototype,"errorText",void 0),It([ne({type:String}),Lt("design:type",String)],Ct.prototype,"infoText",void 0),It([ne({type:String}),Lt("design:type",String)],Ct.prototype,"warningText",void 0),It([ne({type:Boolean}),Lt("design:type",Boolean)],Ct.prototype,"required",void 0),It([ne({type:Boolean}),Lt("design:type",Boolean)],Ct.prototype,"multiple",void 0),It([ne({type:Number}),Lt("design:type",Number)],Ct.prototype,"size",void 0),It([ne({type:String}),Lt("design:type","function"==typeof(kt=void 0!==lt&&lt)?kt:Object)],Ct.prototype,"inputframeMode",void 0),It([ie("#selectElement"),Lt("design:type",Object)],Ct.prototype,"selectElement",void 0),Ct=It([te("nidoca-form-combobox")],Ct);const _t=e=>null!=e?e:D;var Pt,jt,Nt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Dt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.EMAIL="email",e.HIDDEN="hidden",e.NUMBER="number",e.PASSWORD="password",e.TEL="tel",e.TEXT="text",e.SEARCH="search",e.URL="url"}(jt||(jt={}));let Bt=class extends yt{constructor(){super(...arguments),this.type=jt.TEXT,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=lt.NORMAL}render(){return this.type==jt.HIDDEN?j`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:j`
          <nidoca-form-inputframe
            label="${this.label}"
            .errorText="${this.errorText}"
            .infoText="${this.infoText}"
            .warningText="${this.warningText}"
            .inputframeMode="${this.inputframeMode}"
          >
            <input
              id="inputElement"
              name="${this.name}"
              type="${this.type}"
              value="${this.value}"
              placeholder="${this.placeholder?this.placeholder:this.label}"
              size="${_t(this.size)}"
              minlength="${_t(this.minlength)}"
              maxlength="${_t(this.maxlength)}"
              min="${_t(this.min)}"
              max="${_t(this.max)}"
              step="${_t(this.step)}"
              ?required="${this.required}"
              ?disabled="${this.disabled}"
              ?checked="${this.checked}"
            />
          </nidoca-form-inputframe>
        `}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Bt.styles=s`
    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
    }
    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    input:focus::placeholder {
      color: transparent;
    }
  `,Nt([ne({type:String}),Dt("design:type",String)],Bt.prototype,"type",void 0),Nt([ne({type:String}),Dt("design:type",String)],Bt.prototype,"name",void 0),Nt([ne(),Dt("design:type",Object)],Bt.prototype,"value",void 0),Nt([ne({type:String}),Dt("design:type",String)],Bt.prototype,"label",void 0),Nt([ne({type:Boolean}),Dt("design:type",Boolean)],Bt.prototype,"required",void 0),Nt([ne({type:String}),Dt("design:type",String)],Bt.prototype,"placeholder",void 0),Nt([ne({type:Boolean}),Dt("design:type",Boolean)],Bt.prototype,"disabled",void 0),Nt([ne({type:Boolean}),Dt("design:type",Boolean)],Bt.prototype,"checked",void 0),Nt([ne({type:Number}),Dt("design:type",Object)],Bt.prototype,"maxlength",void 0),Nt([ne({type:Number}),Dt("design:type",Object)],Bt.prototype,"minlength",void 0),Nt([ne({type:Number}),Dt("design:type",Object)],Bt.prototype,"min",void 0),Nt([ne({type:Number}),Dt("design:type",Object)],Bt.prototype,"max",void 0),Nt([ne({type:Number}),Dt("design:type",Object)],Bt.prototype,"step",void 0),Nt([ne({type:Number}),Dt("design:type",Object)],Bt.prototype,"size",void 0),Nt([ne({type:String}),Dt("design:type",String)],Bt.prototype,"errorText",void 0),Nt([ne({type:String}),Dt("design:type",String)],Bt.prototype,"infoText",void 0),Nt([ne({type:String}),Dt("design:type",String)],Bt.prototype,"warningText",void 0),Nt([ne({type:String}),Dt("design:type","function"==typeof(Pt=void 0!==lt&&lt)?Pt:Object)],Bt.prototype,"inputframeMode",void 0),Nt([ie("#inputElement"),Dt("design:type",Object)],Bt.prototype,"inputElement",void 0),Bt=Nt([te("nidoca-form-text")],Bt);var Mt,Ht=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ut=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let zt=class extends yt{constructor(){super(...arguments),this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=lt.NORMAL}render(){return j`
      <nidoca-form-inputframe
        label="${this.label}"
        .errorText="${this.errorText}"
        .infoText="${this.infoText}"
        .warningText="${this.warningText}"
        .inputframeMode="${this.inputframeMode}"
      >
        <textarea
          id="inputElement"
          name="${this.name}"
          placeholder="${this.placeholder?this.placeholder:this.label}"
          rows="${this.rows}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
        >
${this.value}</textarea
        >
      </nidoca-form-inputframe>
    `}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};zt.styles=s`
    textarea {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
    }
    textarea:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    textarea:focus::placeholder {
      color: transparent;
    }
  `,Ht([ne({type:String}),Ut("design:type",String)],zt.prototype,"name",void 0),Ht([ne(),Ut("design:type",Object)],zt.prototype,"value",void 0),Ht([ne({type:String}),Ut("design:type",String)],zt.prototype,"label",void 0),Ht([ne({type:Boolean}),Ut("design:type",Boolean)],zt.prototype,"required",void 0),Ht([ne({type:String}),Ut("design:type",String)],zt.prototype,"placeholder",void 0),Ht([ne({type:Boolean}),Ut("design:type",Boolean)],zt.prototype,"disabled",void 0),Ht([ne({type:Number}),Ut("design:type",Number)],zt.prototype,"rows",void 0),Ht([ne({type:String}),Ut("design:type",String)],zt.prototype,"errorText",void 0),Ht([ne({type:String}),Ut("design:type",String)],zt.prototype,"infoText",void 0),Ht([ne({type:String}),Ut("design:type",String)],zt.prototype,"warningText",void 0),Ht([ne({type:String}),Ut("design:type","function"==typeof(Mt=void 0!==lt&&lt)?Mt:Object)],zt.prototype,"inputframeMode",void 0),Ht([ie("#inputElement"),Ut("design:type",Object)],zt.prototype,"inputElement",void 0),zt=Ht([te("nidoca-form-textarea")],zt);var Wt,Ft,Yt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Gt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.DATE="date",e.DATETIME_LOCAL="datetime-local",e.MONTH="month",e.TIME="time",e.WEEK="week"}(Ft||(Ft={}));let Xt=class extends yt{constructor(){super(...arguments),this.type=Ft.DATE,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.multiple=!1,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=lt.NORMAL}render(){return j`
      <nidoca-form-inputframe
        label="${this.label}"
        errorText="${this.errorText}"
        infoText="${this.infoText}"
        warningText="${this.warningText}"
        .inputframeMode="${this.inputframeMode}"
      >
        <input
          id="inputElement"
          name="${this.name}"
          type="${this.type}"
          value="${this.value}"
          placeholder="${this.placeholder?this.placeholder:this.label}"
          size="${_t(this.size)}"
          minlength="${_t(this.minlength)}"
          maxlength="${_t(this.maxlength)}"
          min="${_t(this.min)}"
          max="${_t(this.max)}"
          step="${_t(this.step)}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?multiple="${this.multiple}"
        />
      </nidoca-form-inputframe>
    `}getOutputData(){var e;return{key:this.name,value:null===(e=this.inputElement)||void 0===e?void 0:e.value}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Xt.styles=s`
    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
    }
    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `,Yt([ne(),Gt("design:type",String)],Xt.prototype,"type",void 0),Yt([ne({type:String}),Gt("design:type",String)],Xt.prototype,"name",void 0),Yt([ne({type:String}),Gt("design:type",String)],Xt.prototype,"value",void 0),Yt([ne({type:String}),Gt("design:type",String)],Xt.prototype,"label",void 0),Yt([ne({type:Boolean}),Gt("design:type",Boolean)],Xt.prototype,"required",void 0),Yt([ne({type:String}),Gt("design:type",String)],Xt.prototype,"placeholder",void 0),Yt([ne({type:Boolean}),Gt("design:type",Boolean)],Xt.prototype,"disabled",void 0),Yt([ne({type:Boolean}),Gt("design:type",Boolean)],Xt.prototype,"checked",void 0),Yt([ne({type:Boolean}),Gt("design:type",Boolean)],Xt.prototype,"multiple",void 0),Yt([ne({type:Number}),Gt("design:type",Object)],Xt.prototype,"maxlength",void 0),Yt([ne({type:Number}),Gt("design:type",Object)],Xt.prototype,"minlength",void 0),Yt([ne({type:Number}),Gt("design:type",Object)],Xt.prototype,"min",void 0),Yt([ne({type:Number}),Gt("design:type",Object)],Xt.prototype,"max",void 0),Yt([ne({type:Number}),Gt("design:type",Object)],Xt.prototype,"step",void 0),Yt([ne({type:Number}),Gt("design:type",Object)],Xt.prototype,"size",void 0),Yt([ne({type:String}),Gt("design:type",String)],Xt.prototype,"errorText",void 0),Yt([ne({type:String}),Gt("design:type",String)],Xt.prototype,"infoText",void 0),Yt([ne({type:String}),Gt("design:type",String)],Xt.prototype,"warningText",void 0),Yt([ie("#inputElement"),Gt("design:type",Object)],Xt.prototype,"inputElement",void 0),Yt([ne({type:String}),Gt("design:type","function"==typeof(Wt=void 0!==lt&&lt)?Wt:Object)],Xt.prototype,"inputframeMode",void 0),Xt=Yt([te("nidoca-form-date")],Xt);var Vt,qt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Kt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Jt=class extends yt{constructor(){super(...arguments),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=e.PRIMARY}render(){return j`
      <style>
        .slider:before {
          background-color: var(--app-color-${this.theme}-background-dark);
        }
        input:checked + .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }
        input:checked + .slider {
          background-color: var(--app-color-${this.theme}-background-light);
        }
        input:focus + .slider {
          box-shadow: 0 0 20px var(--app-color-${this.theme}-background);
        }
      </style>

      <nidoca-list-item>
        <nidoca-typography .type="${Oe.SUBTITLE1}" text="${this.label}">
          <slot></slot>
        </nidoca-typography>
        <nidoca-visible
          slot="secondary"
          visibleType="${this.infoText.length>0?ge.NORMAL:ge.HIDE}"
        >
          <nidoca-typography
            .type="${Oe.SUBTITLE2}"
            text="${this.infoText}"
          ></nidoca-typography>
        </nidoca-visible>
        <label class="switch" slot="meta">
          <input
            id="inputElement"
            name="${this.name}"
            type="checkbox"
            ?checked="${this.checked}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      <nidoca-visible visibleType="${this.warningText?ge.NORMAL:ge.HIDE}">
        <nidoca-typography
          style="color:var(--app-color-warning-background)"
          .type="${Oe.BODY1}"
          text="${this.warningText}"
        ></nidoca-typography>
      </nidoca-visible>

      <nidoca-visible visibleType="${this.errorText?ge.NORMAL:ge.HIDE}">
        <nidoca-typography
          style="color:var(--app-color-error-background)"
          .type="${Oe.BODY1}"
          text="${this.errorText}"
        ></nidoca-typography>
      </nidoca-visible>
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Jt.styles=s`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
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
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 0px;
      bottom: -4px;

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
  `,qt([ne({type:String}),Kt("design:type",String)],Jt.prototype,"name",void 0),qt([ne({type:String}),Kt("design:type",String)],Jt.prototype,"label",void 0),qt([ne({type:String}),Kt("design:type",String)],Jt.prototype,"infoText",void 0),qt([ne({type:String}),Kt("design:type",String)],Jt.prototype,"errorText",void 0),qt([ne({type:String}),Kt("design:type",String)],Jt.prototype,"warningText",void 0),qt([ne({type:Boolean}),Kt("design:type",Boolean)],Jt.prototype,"required",void 0),qt([ne({type:Boolean}),Kt("design:type",Boolean)],Jt.prototype,"disabled",void 0),qt([ne({type:Boolean}),Kt("design:type",Boolean)],Jt.prototype,"checked",void 0),qt([ne({type:String}),Kt("design:type","function"==typeof(Vt=void 0!==e&&e)?Vt:Object)],Jt.prototype,"theme",void 0),qt([ie("#inputElement"),Kt("design:type",Object)],Jt.prototype,"inputElement",void 0),Jt=qt([te("nidoca-form-switch")],Jt);var Zt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Qt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let eo=class extends ee{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return j`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(e,t,o,n,i,r){return"height:".concat(e).concat(";").concat("width:").concat(t).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(i).concat(";").concat("bottom:").concat(r).concat(";")}};eo.styles=s`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Zt([ne({type:String}),Qt("design:type",String)],eo.prototype,"height",void 0),Zt([ne({type:String}),Qt("design:type",String)],eo.prototype,"width",void 0),Zt([ne({type:String}),Qt("design:type",String)],eo.prototype,"left",void 0),Zt([ne({type:String}),Qt("design:type",String)],eo.prototype,"top",void 0),Zt([ne({type:String}),Qt("design:type",String)],eo.prototype,"right",void 0),Zt([ne({type:String}),Qt("design:type",String)],eo.prototype,"bottom",void 0),eo=Zt([te("nidoca-layout-floating")],eo);var to=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let oo=class extends ee{render(){return j`<nidoca-border .borderProperties="${[ae.BOTTOM]}">
      <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"> </slot
    ></nidoca-border>`}slotChanged(e){const o=e.target.assignedElements(),n=o.length;for(let e=0;e<n;e++){const i=o[e],r=t.getCurrentScreen();if(r)switch(r){case t.MOBILE:i.setAttribute("style","flex-basis:100%;");break;case t.TABLET:case t.DESKTOP:i.setAttribute("style","flex-basis:"+String(100/n)+"%;")}}}};oo.styles=s`
    slot {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-content: center;
    }
  `,to([ie("#slotElement"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],oo.prototype,"slotElement",void 0),oo=to([te("nidoca-layout-section")],oo);var no=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},io=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ro=class extends ee{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-normal)",this.title=""}render(){return j`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.title}"
        @click="${this.clicked}"
        style="${this.cssStyle}"
        >${this.icon}</i
      >
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};ro.styles=s`
    .material-icons {
      font-family: "Material Icons";
      font-weight: normal;
      font-style: normal;
      font-size: var(--icon-size);
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
      font-feature-settings: "liga";
    }

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      color: var(--app-color-surface-background-dark);
    }
  `,no([ne({type:String}),io("design:type",String)],ro.prototype,"icon",void 0),no([ne({type:Boolean}),io("design:type",Boolean)],ro.prototype,"clickable",void 0),no([ne({type:Boolean}),io("design:type",Boolean)],ro.prototype,"deactivated",void 0),no([ne({type:String}),io("design:type",String)],ro.prototype,"cssStyle",void 0),no([ne({type:String}),io("design:type",String)],ro.prototype,"title",void 0),ro=no([te("nidoca-icon")],ro);var ao,so,co=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},lo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.NONE="NONE",e.DEFAULT_SHADOW="DEFAULT_SHADOW",e.SHADOW_1="SHADOW_1",e.SHADOW_2="SHADOW_2",e.SHADOW_3="SHADOW_3"}(so||(so={}));let po=class extends ee{constructor(){super(...arguments),this.icon="",this.theme=e.PRIMARY,this.shadowType=so.DEFAULT_SHADOW,this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-normal)"}render(){return j`
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
          title="${this.title}"
          cssStyle="${this.cssStyle}"
        ></nidoca-icon>
      </span>
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};po.styles=s`
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
  `,co([ne({type:String}),lo("design:type",String)],po.prototype,"icon",void 0),co([ne({type:String}),lo("design:type","function"==typeof(ao=void 0!==e&&e)?ao:Object)],po.prototype,"theme",void 0),co([ne({type:String}),lo("design:type",String)],po.prototype,"shadowType",void 0),co([ne({type:Boolean}),lo("design:type",Boolean)],po.prototype,"clickable",void 0),co([ne({type:Boolean}),lo("design:type",Boolean)],po.prototype,"deactivated",void 0),co([ne({type:String}),lo("design:type",String)],po.prototype,"cssStyle",void 0),po=co([te("nidoca-icon-extended")],po);var ho=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let yo=class extends ee{render(){return j`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(null!=this.rippleContainerElement){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);const t=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};yo.styles=s`
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
  `,ho([ie("#rippleContainer"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],yo.prototype,"rippleContainerElement",void 0),yo=ho([te("nidoca-ripple")],yo);var fo,uo,go=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},mo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.IMG="IMG",e.MOVIE="MOVIE"}(fo||(fo={})),function(e){e.ROUND="ROUND",e.CLICKABLE="CLICKABLE",e.ZOOM_WRAPPED="ZOOM_WRAPPED",e.FULL_WIDTH="FULL_WIDTH"}(uo||(uo={}));let bo=class extends ee{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.richMediaProperties=[uo.CLICKABLE,uo.FULL_WIDTH]}render(){return j`
          <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"><img src="${this.src}" /></span>
        `}toRichMediaPropertiesString(e){let t="";return e.forEach((e=>{t=t.concat(" ").concat(e)})),t}};bo.styles=s`
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
  `,go([ne({type:String}),mo("design:type",String)],bo.prototype,"src",void 0),go([ne({type:Array}),mo("design:type",Array)],bo.prototype,"richMediaProperties",void 0),bo=go([te("nidoca-img")],bo);var vo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let xo=class extends ee{constructor(){super(...arguments),this.src="http://picsum.photos/400/300"}render(){return j`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};xo.styles=s``,vo([ne({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],xo.prototype,"src",void 0),xo=vo([te("nidoca-movie")],xo);var Eo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},So=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let $o=class extends ee{constructor(){super(...arguments),this.min=1,this.max=10,this.errorText="nidoca-captcha-wrong-value",this.numberOne=1,this.numberTwo=1}render(){return j`
      <nidoca-form-text
        id="inputfield"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        label="${"nidoca-captcha-label".concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        name="captcha"
        trailingIcon="create"
        type="${jt.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(e){(e.has("min")||e.has("max"))&&this.generateNewNumber(),super.updated(e)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(e,t){return Math.random()*(t-e)+e}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const e=this.isValid();return e&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),e}};$o.styles=s``,Eo([ne({type:Number}),So("design:type",Number)],$o.prototype,"min",void 0),Eo([ne({type:Number}),So("design:type",Number)],$o.prototype,"max",void 0),Eo([ne({type:String}),So("design:type",String)],$o.prototype,"errorText",void 0),Eo([ie("#inputfield"),So("design:type",Object)],$o.prototype,"inputfield",void 0),$o=Eo([te("nidoca-captcha")],$o);var To,Ro=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Oo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.BLANK="_blank",e.SELF="_self",e.PARENT="_parent",e.TOP="_top"}(To||(To={}));let wo=class extends ee{constructor(){super(...arguments),this.text="",this.href="",this.targetType=To.SELF}render(){return j` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `}};wo.styles=s`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,Ro([ne({type:String}),Oo("design:type",String)],wo.prototype,"text",void 0),Ro([ne({type:String}),Oo("design:type",String)],wo.prototype,"href",void 0),Ro([ne({type:String}),Oo("design:type",String)],wo.prototype,"targetType",void 0),wo=Ro([te("nidoca-link")],wo);var Ao=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ko=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Io=class extends ee{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1,this.clickStart=null}update(e){super.update(e),null!=e.get("selectionMode")&&(this.selectionMode||(this.selected=!1))}render(){return j`
      <nidoca-ripple
        @mousedown="${()=>this.downAction()}"
        @mouseup="${()=>this.upAction()}"
        @pointerup="${()=>this.upAction()}"
        @pointerdown="${()=>this.downAction()}"
      >
        <div class="container">
          ${this.selectionMode?j`<nidoca-icon
                class="columnSelection"
                @click="${()=>this.switchSelected()}"
                icon="${this.selected?"check_box":"check_box_outline_blank"}"
              ></nidoca-icon>`:j`<span></span>`}
          <slot name="graphic" class="slotGraphic"></slot>
          <div class="containerTypography">
            <slot></slot>
            <slot name="secondary"></slot>
          </div>
          <slot name="meta" class="slotMeta"></slot>
        </div>
      </nidoca-ripple>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let e="";e=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};Io.styles=s`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: 1fr 1fr minmax(auto, 100%) 1fr;
      min-height: var(--line-height-massiv);
    }

    .slotGraphic,
    .slotMeta,
    .columnSelection {
      align-self: center;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
    }

    .containerTypography {
      display: flex;
      flex-direction: column;
      align-self: center;
    }
  `,Ao([ne({type:Boolean}),ko("design:type",Boolean)],Io.prototype,"selectionMode",void 0),Ao([ne({type:Boolean}),ko("design:type",Boolean)],Io.prototype,"selected",void 0),Io=Ao([te("nidoca-list-item")],Io);var Lo,Co=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},_o=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Po=class extends ee{constructor(){super(...arguments),this.selectionMode=!1,this.theme=e.BACKGROUND}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"selectionMode"==t&&this.getItems().forEach((e=>{e.selectionMode=this.selectionMode}))}))}render(){return j`
      <style>
        ::slotted(nidoca-list-item) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        ::slotted(nidoca-list-item:hover) {
          background-color: var(--app-color-${this.theme}-background-light);
        }
      </style>
      <slot
        @nidoca-event-list-item-unselect="${()=>{this.selectionMode=0===this.getSelectedItems().length}}"
        class="slotList"
        id="slotElement"
      ></slot>
    `}getItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Io&&e.push(n)}}return e}getSelectedItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Io&&n.selected&&e.push(n)}}return e}getSelectedIndexes(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();let o=0;for(let n=0;n<t.length;n++){const i=t[n];i instanceof Io&&(i.selected&&e.push(o),o++)}}return e}selectAll(){this.getItems().forEach((e=>{e.selected=!0}))}unselectAll(){this.getItems().forEach((e=>{e.selected=!1}))}};Po.styles=s`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Co([ne({type:Boolean}),_o("design:type",Boolean)],Po.prototype,"selectionMode",void 0),Co([ie("#slotElement"),_o("design:type",Object)],Po.prototype,"slotElement",void 0),Co([ne({type:String}),_o("design:type","function"==typeof(Lo=void 0!==e&&e)?Lo:Object)],Po.prototype,"theme",void 0),Po=Co([te("nidoca-list")],Po);var jo,No=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Do=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Bo=class extends ee{constructor(){super(...arguments),this.theme=e.PRIMARY,this.prominent=!1,this.cssStyle="height:60px;width:100%;position:relativ;"}render(){return j`
      <style>
        :host,
        slot {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-layout-flex
        .flexDirection="${Xe.ROW}"
        .flexWrap="${Ve.NO_WRAP}"
        .flexJustifyContent="${qe.SPACE_BETWEEN}"
        .flexAlignItems="${Ke.CENTER}"
        .flexAlignContent="${Je.SPACE_AROUND}"
        containerStyle="${this.cssStyle}"
        itemStyle=""
      >
        <span>
          <slot name="left"></slot>
        </span>
        <span>
          <slot name="center"></slot>
        </span>
        <span>
          <slot name="right"></slot>
        </span>
      </nidoca-layout-flex>
      ${this.prominent?j`<slot class="prominent" name="prominent"></slot>`:j``}
    `}};Bo.styles=s`
    :host {
      display: block;
      width:100%;
    }

    slot {
      display: flex;
      align-items: center;
    }

    .prominent {
      flex-basis: 100%;
      flex-grow: 3;
    }
  `,No([ne({type:String}),Do("design:type","function"==typeof(jo=void 0!==e&&e)?jo:Object)],Bo.prototype,"theme",void 0),No([ne({type:Boolean}),Do("design:type",Boolean)],Bo.prototype,"prominent",void 0),No([ne({type:String}),Do("design:type",String)],Bo.prototype,"cssStyle",void 0),Bo=No([te("nidoca-top-app-bar")],Bo);var Mo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ho=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Uo=class extends ee{constructor(){super(...arguments),this.text="",this.rendered=!0}render(){return this.rendered?j`
          <nidoca-layout-flex
            .flexItemProperties="${[]}"
            .flexDirection="${Xe.ROW}"
            .flexWrap="${Ve.NO_WRAP}"
            .flexJustifyContent="${qe.FLEX_END}"
            .flexAlignItems="${Ke.CENTER}"
            .flexAlignContent="${Je.FLEX_START}"
            itemStyle="flex-basis: 100%;"
          >
            <nidoca-layout-spacer spacerSize="${he.SMALL}" .spacerTypes="${[de.ALL]}">
              <nidoca-typography .type="${Oe.H6}" text="${this.text}"></nidoca-typography>
            </nidoca-layout-spacer>
          </nidoca-layout-flex>
        `:j``}};Uo.styles=s``,Mo([ne({type:String}),Ho("design:type",String)],Uo.prototype,"text",void 0),Mo([ne({type:Boolean}),Ho("design:type",Boolean)],Uo.prototype,"rendered",void 0),Uo=Mo([te("nidoca-list-section")],Uo);var zo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Wo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Fo=class extends ee{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new ro],["row 2",new ro]]}render(){return j`
      <div>
        <table>
          <thead>
            ${At([this.headers],(()=>j` ${repeat(this.headers,(e=>j` <th colspan="1" rowspan="1">${e}</th> `))} `))}
          </thead>
          <tbody>
            ${At([this.rows],(()=>j`
                  ${repeat(this.rows,(e=>j`
                        <tr>
                          ${repeat(e,(e=>j` <td colspan="1" rowspan="1">${e}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Fo.styles=s`
    table,
    ::slotted(table) {
      border-spacing: 0;
      width: 100%;
    }

    td,
    th {
      vertical-align: center;
      padding: var(--space-small);
      box-sizing: border-box;
      text-align: left;
      border-bottom: 1px solid var(--app-color-surface-background);
      border-left: 1px solid var(--app-color-surface-background);
    }

    tr > td:last-of-type,
    th:last-of-type {
      border-right: 1px solid var(--app-color-surface-background);
    }

    th {
      border-top: 1px solid var(--app-color-surface-background);
      background-color: var(--app-color-surface-background-dark);
      color: var(--app-color);
    }
  `,zo([ne({type:Array}),Wo("design:type",Array)],Fo.prototype,"headers",void 0),zo([ne({type:Array}),Wo("design:type",Array)],Fo.prototype,"rows",void 0),Fo=zo([te("nidoca-table")],Fo);var Yo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Go=class extends ee{constructor(){super(...arguments),this.selected=!1}render(){return j`
      <nidoca-visible visibleType="${this.selected?ge.NORMAL:ge.HIDE}">
        <slot></slot>
      </nidoca-visible>
    `}};Go.styles=s``,Yo([ne({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Go.prototype,"selected",void 0),Go=Yo([te("nidoca-tab-content")],Go);var Xo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Vo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let qo=class extends ee{constructor(){super(...arguments),this.selected=!1,this.text=""}render(){return j`
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?j`
              <nidoca-typography .type="${Oe.OVERLINE}" text="${this.text}"></nidoca-typography>
            `:j``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};qo.styles=s`
    :host {
      border-width: 4px;
      border-color: var(--app-color-surface-background);
      border-bottom-style: solid;
      margin-left: 2px;
      margin-right: 2px;
    }

    :host(.SELECTED) {
      border-color: var(--app-color-primary);
    }

    .tab,
    ::slotted(.tab) {
      cursor: pointer;
      box-sizing: border-box;
    }
  `,Xo([ne({type:Boolean}),Vo("design:type",Boolean)],qo.prototype,"selected",void 0),Xo([ne({type:String}),Vo("design:type",String)],qo.prototype,"text",void 0),qo=Xo([te("nidoca-tab")],qo);var Ko=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Jo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Zo=class extends ee{firstUpdated(e){super.firstUpdated(e),this.changeSelectedTabStyle()}update(e){super.update(e),null!=e.get("tabType")&&this.changeSelectedTabStyle()}changeSelectedTabStyle(){if(null!=this.tabSlot){const e=this.tabSlot.assignedElements();console.log(e.length);const t=100/e.length;for(let o=0;o<e.length;o++){const n=e[o];n instanceof qo&&(n.style.width=String(t).concat("%"),n.selected&&n.classList.add("SELECTED"))}}}render(){return j`
      <nidoca-grid-container
        @nidoca-event-tab-clicked="${e=>this.tabClicked(e)}"
        .gridTemplateRows="${["auto","auto"]}"
        .gridTemplateColumns="${["100%"]}"
      >
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </nidoca-grid-container>
    `}tabClicked(e){const t=e.detail;if(t.selected)return;let o=0;if(null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let n=0;n<e.length;n++){const i=e[n];i instanceof qo&&(i==t?(o=n,i.selected=!0,i.classList.add("SELECTED")):(i.selected=!1,i.classList.remove("SELECTED")))}}console.log("tab selected, index = %s",o);let n=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let t=0;t<e.length;t++){const i=e[t];i instanceof Go&&(i.selected=o==n,n++)}}}};Zo.styles=s`
    slot {
      display: inline;
    }

    #tabSlot {
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,Ko([ie("#tabSlot"),Jo("design:type",Object)],Zo.prototype,"tabSlot",void 0),Ko([ie("#tabContentSlot"),Jo("design:type",Object)],Zo.prototype,"tabContentSlot",void 0),Zo=Ko([te("nidoca-tabs")],Zo);var Qo,en=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},tn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let on=class extends ee{constructor(){super(),this.theme=e.PRIMARY,this.navigationClosed=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false")}updated(e){super.updated(e),new Promise((e=>requestAnimationFrame(e))).then((()=>{if(null!=this.headerElement){const e=this.headerElement.offsetHeight,t="top:".concat(String(e)).concat("px;"),o="padding-top:".concat(String(e)).concat("px;");console.debug("set header height to corresponding elements: %s",t),null!=this.sidebarElement&&this.sidebarElement.setAttribute("style",t),null!=this.contentElement&&this.contentElement.setAttribute("style",o)}}))}render(){return j`
      <style>
        #sidebar {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div id="header" class="${this.navigationClosed?"menuClosed":""}">
        <nidoca-top-app-bar .prominent="${this.prominent}" .theme="${this.theme}">
          <span slot="left">
            <slot class="slotHeader" name="topLeft"></slot>
          </span>
          <span slot="center">
            <slot class="slotHeader" name="topCenter"></slot>
          </span>
          <span slot="right">
            <slot class="slotHeader" name="topRight"></slot>
          </span>
          <span class="slotProminent" slot="prominent">
            <nidoca-layout-spacer spacerSize="${he.LITTLE}">
              <slot class="slotHeader" name="prominent"></slot>
            </nidoca-layout-spacer>
          </span>
        </nidoca-top-app-bar>
      </div>
      <div id="sidebar" class="${this.navigationClosed?"menuClosed":""}"><slot name="sidebar"></slot></div>
      <div id="content" class="${this.navigationClosed?"menuClosed":""}"><slot name="content"></slot></div>
    `}};on.styles=s`
    .slotHeader {
      display: flex;
      align-items: center;
    }

    #header {
      position: fixed;
      width: 100%;
      z-index: 1;
      background-color: inherit;
      color: inherit;
    }

    .content {
      display: flex;
      flex-direction: column;
    }

    #content {
      overflow-y: scroll;
    }

    #content.menuClosed {
      margin-left: 0;
      opacity: 1;
      transition: all 0.35s ease;
    }

    #sidebar {
      z-index: 1;
      position: fixed;
      width: 300px;
      min-height: 100%;
      transition: all 0.35s linear;
      overflow-y: scroll;
      max-height: 100%;
    }

    #sidebar.menuClosed {
      width: 0px;
      margin-left: -300px;
      transition: all 0.35s ease;
    }

    @media screen and (min-width: 521px) {
      #content {
        transition: margin-left 0.35s linear;
        margin-left: 300px;
      }
    }

    .slotProminent {
      width: 100%;
    }
  `,en([ne({type:String}),tn("design:type","function"==typeof(Qo=void 0!==e&&e)?Qo:Object)],on.prototype,"theme",void 0),en([ne({type:Boolean}),tn("design:type",Boolean)],on.prototype,"navigationClosed",void 0),en([ne({type:Boolean}),tn("design:type",Boolean)],on.prototype,"prominent",void 0),en([ie("#header"),tn("design:type",Object)],on.prototype,"headerElement",void 0),en([ie("#sidebar"),tn("design:type",Object)],on.prototype,"sidebarElement",void 0),en([ie("#content"),tn("design:type",Object)],on.prototype,"contentElement",void 0),on=en([te("nidoca-template"),tn("design:paramtypes",[])],on);var nn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},rn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let an=class extends ee{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1}render(){return j`
      <nidoca-layout-flex
        .flexDirection="${Xe.ROW}"
        .flexWrap="${Ve.NO_WRAP}"
        .flexJustifyContent="${qe.FLEX_START}"
        .flexAlignItems="${Ke.FLEX_START}"
        .flexAlignContent="${Je.FLEX_START}"
      >
        <nidoca-layout-spacer .spacerTypes="${[de.RIGHT]}">
          <nidoca-icon icon="search"></nidoca-icon>
        </nidoca-layout-spacer>
        <input
          id="inputElement"
          type="text"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${()=>this.valueChanged()}"
        />
        <nidoca-layout-spacer .spacerTypes="${[de.RIGHT]}">
          <nidoca-icon icon="close" @click="${()=>this.clearValue()}"></nidoca-icon>
        </nidoca-layout-spacer>
      </nidoca-layout-flex>
    `}clearValue(){this.value=""}valueChanged(){var e;return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){const t=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(e=this.inputElement)||void 0===e?void 0:e.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}))}};an.styles=s`
    :host {
      width: 100%;
    }

    input {
      height: var(--line-height-large);
      line-height: var(--line-height-large);
      font: inherit;
      color: inherit;
      background-color: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `,nn([ne({type:String}),rn("design:type",String)],an.prototype,"value",void 0),nn([ne({type:String}),rn("design:type",String)],an.prototype,"placeholder",void 0),nn([ne({type:Boolean}),rn("design:type",Boolean)],an.prototype,"disabled",void 0),nn([ie("#inputElement"),rn("design:type",Object)],an.prototype,"inputElement",void 0),an=nn([te("nidoca-search-bar")],an);var sn,cn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ln=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.CENTER="CENTER",e.LEFT="LEFT",e.RIGHT="RIGHT",e.TOP="TOP",e.BOTTOM="BOTTOM",e.SLIDE_CENTER="SLIDE_CENTER",e.SLIDE_LEFT="SLIDE_LEFT",e.SLIDE_RIGHT="SLIDE_RIGHT",e.SLIDE_TOP="SLIDE_TOP",e.SLIDE_BOTTOM="SLIDE_BOTTOM"}(sn||(sn={}));let pn=class extends ee{constructor(){super(...arguments),this.transitionType=sn.CENTER,this.duration=.5}render(){return j` <div class="${this.transitionType}"><slot></slot></div> `}};pn.styles=s`
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
  `,cn([ne({type:String}),ln("design:type",String)],pn.prototype,"transitionType",void 0),cn([ne({type:Number}),ln("design:type",Number)],pn.prototype,"duration",void 0),pn=cn([te("nidoca-transition")],pn);var dn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},hn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let yn=class extends ee{constructor(){super(...arguments),this.show=!1,this.content=j``}render(){return j`
      <nidoca-visible visibleType="${this.show?ge.NORMAL:ge.HIDE}">
        <div class="fullScreen opacScreen"></div>
        <div class="fullScreen wrapperOutside">
          <div class="wrapperInside">
            <!-- Dialog -->
            <nidoca-transition .transitionType="${sn.SLIDE_CENTER}">
              <div class="dialogContainer">
                ${this.content}
                <slot></slot>
              </div>
            </nidoca-transition>
          </div>
        </div>
      </nidoca-visible>
    `}};yn.styles=s`
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
      width: min-content;
      height: auto;

      padding: 0;
      margin: 0 auto;
    }
  `,dn([ne({type:Boolean}),hn("design:type",Boolean)],yn.prototype,"show",void 0),dn([ne({type:Object}),hn("design:type",Object)],yn.prototype,"content",void 0),yn=dn([te("nidoca-dialog")],yn);var fn,un=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},gn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let mn=class extends ee{constructor(){super(...arguments),this.show=!1,this.theme=e.BACKGROUND}render(){return j`
      <style>
        .box {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        ${t.MOBILE.asMediaStyle("slot{min-width:320px;}")}
        ${t.TABLET.asMediaStyle("slot{min-width:480px;}")}
        ${t.DESKTOP.asMediaStyle("slot{min-width:640px;}")}
      </style>
      <nidoca-dialog .show="${this.show}">
        <nidoca-card class="box" .shadowType="${rt.KEY_LIGHT}">
          <nidoca-layout-spacer>
            <slot name="header"></slot>
            <slot name="text"></slot>
            <slot name="action"></slot>
          </nidoca-layout-spacer>
        </nidoca-card>
      </nidoca-dialog>
    `}};mn.styles=s`
    slot {
      display: flex;
    }
  `,un([ne({type:Boolean}),gn("design:type",Boolean)],mn.prototype,"show",void 0),un([ne({type:String}),gn("design:type","function"==typeof(fn=void 0!==e&&e)?fn:Object)],mn.prototype,"theme",void 0),mn=un([te("nidoca-dialog-action")],mn);var bn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},vn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let xn=class extends ee{constructor(){super(...arguments),this.imgSrc="",this.title="",this.description=""}render(){return j`<nidoca-layout-flex
      .flexDirection="${Xe.COLUMN}"
      .flexWrap="${Ve.WRAP}"
      .flexJustifyContent="${qe.SPACE_BETWEEN}"
      .flexAlignItems="${Ke.CENTER}"
      .flexAlignContent="${Je.CENTER}"
    >
      <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[uo.ROUND]}"> </nidoca-img>
      <nidoca-layout-spacer spacerSize="${he.LITTLE}">
        <nidoca-typography type="${Oe.H3}">${this.title}</nidoca-typography>
      </nidoca-layout-spacer>
      <nidoca-typography type="${Oe.H5}">${this.description}</nidoca-typography>
    </nidoca-layout-flex>`}};bn([ne({type:String}),vn("design:type",String)],xn.prototype,"imgSrc",void 0),bn([ne({type:String}),vn("design:type",String)],xn.prototype,"title",void 0),bn([ne({type:String}),vn("design:type",String)],xn.prototype,"description",void 0),xn=bn([te("nidoca-avatar")],xn);var En=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Sn=class extends ee{constructor(){super(...arguments),this.code=""}render(){return j`
      <nidoca-box-shadow .shadowType="${rt.KEY_LIGHT}">
        <nidoca-layout-flex
          .flexDirection="${Xe.COLUMN}"
          .flexWrap="${Ve.WRAP}"
          .flexJustifyContent="${qe.SPACE_BETWEEN}"
          .flexAlignItems="${Ke.FLEX_START}"
          .flexAlignContent="${Je.FLEX_START}"
        >
          <slot name="media"></slot>
          <nidoca-layout-spacer>
            <slot name="supportingText"></slot>
            <slot name="actions"></slot>
          </nidoca-layout-spacer>
        </nidoca-layout-flex>
        <slot></slot>
      </nidoca-box-shadow>
    `}};Sn.styles=s``,En([ne({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Sn.prototype,"code",void 0),Sn=En([te("nidoca-card")],Sn);let $n=class extends ee{render(){return j`
    
    <nidoca-layout-spacer .spacerTypes="${[de.BOTTOM]}">
    <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
    </nidoca-layout-spacer>
    
    `}slotChanged(e){const t=e.target;this.changeSlotComponentsStyle(t)}changeSlotComponentsStyle(e){if(null==e)return;const t=e.assignedElements();for(let e=0;e<t.length;e++){const o=t[e].classList;o.contains("flexItem")||o.add("flexItem"),o.contains("flexItemDevice")||o.add("flexItemDevice")}}};$n.styles=s`
    slot, ::slotted(slot) {
      display: flex;
      flex-direction: row;
      flex-wrap:wrap;
      justify-content:space-evenly;
    }

    .flexItem,
    ::slotted(.flexItem) {
      flex-basis: 24%;
      padding-top: var(--space-medium);
    }
  `,$n=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([te("nidoca-gallery")],$n);let Tn=class extends ee{render(){return j`<slot></slot>`}print(){const e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};Tn.styles=s`
    :host {
      display: none;
    }
  `,Tn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([te("nidoca-print")],Tn);const Rn="https://github.com/domoskanonos/nidoca-assets/raw/main/dummy.jpg",On="Lorem ipsum dolor sit amet",wn="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",An="Lorem ipsum dolor sit amet, consetetur sadipscing elitr.";let kn=class extends ee{render(){return j`



<nidoca-typography text="Header 1" type="${Oe.H1}"> </nidoca-typography>
<br/>
<nidoca-typography text="Header 2" type="${Oe.H2}"> </nidoca-typography>
<br/>
<nidoca-typography text="Header 3" type="${Oe.H3}"> </nidoca-typography>
<br/>
<nidoca-typography text="Header 4" type="${Oe.H4}"> </nidoca-typography>
<br/>
<nidoca-typography text="Header 5" type="${Oe.H5}"> </nidoca-typography>
<br/>
<nidoca-typography text="Header 6" type="${Oe.H6}"> </nidoca-typography>
<br/>
<nidoca-typography text="Button" type="${Oe.BUTTON}"> </nidoca-typography>
<br/>
<nidoca-typography text="Mein Text Body 1" type="${Oe.BODY1}"> </nidoca-typography>
<br/>
<nidoca-typography text="Mein Text Body 2" type="${Oe.BODY2}"> </nidoca-typography>
<br/>
<nidoca-typography text="Caption" type="${Oe.CAPTION}"> </nidoca-typography>
<br/>
<nidoca-typography text="Overline" type="${Oe.OVERLINE}"> </nidoca-typography>
<br/>
<nidoca-typography text="Subtitel 1" type="${Oe.SUBTITLE1}"> </nidoca-typography>
<br/>
<nidoca-typography text="Subtitel 2" type="${Oe.SUBTITLE2}"> </nidoca-typography>
<br/>




      <nidoca-layout-section>
        <nidoca-img src="${Rn}"> </nidoca-img>
        <nidoca-layout-spacer>
          <nidoca-typography type="${Oe.H1}">${An}</nidoca-typography>
          <nidoca-typography type="${Oe.BODY1}">${wn}</nidoca-typography>
          <nidoca-button>Lorem Ipsum</nidoca-button>
        </nidoca-layout-spacer>

        <nidoca-icon-extended icon="home"></nidoca-icon-extended>
        <nidoca-dialog-action .show="${!1}">
          <nidoca-typography slot="header" type="${Oe.H1}"
            >${An}</nidoca-typography
          >
          <nidoca-typography slot="text" type="${Oe.BODY1}"
            >${wn}</nidoca-typography
          >

          <nidoca-button slot="action" buttonType="${tt.TEXT}">Ok</nidoca-button>
          <nidoca-button slot="action" buttonType="${tt.TEXT}">Ok</nidoca-button>
          <nidoca-button>Ok</nidoca-button>
        </nidoca-dialog-action>
      </nidoca-layout-section>

      <nidoca-layout-section>
        <nidoca-layout-spacer>
          <nidoca-typography type="${Oe.H3}">${An}</nidoca-typography>

          <nidoca-typography type="${Oe.BODY1}">${wn}</nidoca-typography>
        </nidoca-layout-spacer>
        <nidoca-img style="width:200px;height:500px" src="${Rn}"> </nidoca-img>
        <nidoca-img src="${Rn}"> </nidoca-img>
        <nidoca-img src="${Rn}"> </nidoca-img>
      </nidoca-layout-section>

      <nidoca-layout-section>
        <nidoca-layout-spacer>
          <nidoca-typography type="${Oe.H3}">${An}</nidoca-typography>
          <nidoca-typography type="${Oe.BODY1}">${wn}</nidoca-typography>
        </nidoca-layout-spacer>

        <nidoca-avatar
          title="${On}"
          description="${An}"
          imgSrc="${Rn}"
        ></nidoca-avatar>
        <nidoca-avatar
          title="${On}"
          description="${An}"
          imgSrc="${Rn}"
        ></nidoca-avatar>
        <nidoca-avatar
          title="${On}"
          description="${An}"
          imgSrc="${Rn}"
        ></nidoca-avatar>
      </nidoca-layout-section>




    `}};kn.styles=s``,kn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([te("nidoca-page-main")],kn);let In=class extends ee{render(){return j`
        <nidoca-gallery >
          ${["","","","","","","","",""].map((()=>j`
              <nidoca-card>
                <nidoca-img slot="media" src="${Rn}"> </nidoca-img>
                <nidoca-typography slot="supportingText" type="${Oe.H3}"
                  >${On}</nidoca-typography
                >
                <nidoca-typography slot="supportingText" type="${Oe.BODY1}"
                  >${wn}
                </nidoca-typography>

                <nidoca-button buttonType="${tt.TEXT}" slot="actions">Go</nidoca-button>
                <nidoca-button buttonType="${tt.TEXT}" slot="actions">Leave</nidoca-button>
              </nidoca-card>
            `))}
        </nidoca-gallery>

    `}};In.styles=s``,In=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([te("nidoca-page-gallery")],In);class Ln{constructor(){this.listeners=[],window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",(e=>{if(!this.shouldIgnoreEvent(e)){const t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}}))}static getUniqueInstance(){return Ln.uniqueInstance||(Ln.uniqueInstance=new Ln),Ln.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){-1==e.indexOf("#")&&(e="#".concat(e)),console.trace("navigate to: %s",e),null!=t&&console.trace("state: %s",JSON.stringify(t)),document.location.hash!==e?(history.pushState(t,"",e),this.notifyListeners()):console.trace("you are already on page: "+e)}getCurrentState(){return history.state}getStateProperty(e){const t=this.getCurrentState();return null!=t?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const e=this.getCurrentPage();this.listeners.forEach((t=>t.routeChanged(e)))}shouldIgnoreEvent(e){return e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(const t of e.composedPath?e.composedPath():[])if(this.isAnchor(t))return t;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&"a"===e.nodeName.toLowerCase()}shouldIgnoreAnchor(e){return!(!e.target||"_self"===e.target.toLowerCase())||(!!e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){const t=e.port,o=e.protocol;return`${o}//${"http:"===o&&"80"===t||"https:"===o&&"443"===t?e.hostname:e.host}`}}let Cn=class extends ee{render(){return j`
      <nidoca-layout-spacer nidocaSpacerSize="${he.LITTLE}"></nidoca-layout-spacer>
      <nidoca-layout-flex
        flexItemBasisValue="auto"
        .flexJustifyContent="${qe.FLEX_START}"
        .flexAlignItems="${Ke.CENTER}"
      >
        <nidoca-icon
          icon="arrow_back"
          .clickable="${!0}"
          .withIconSpace="${!1}"
          @nidoca-event-icon-clicked="${()=>Ln.getUniqueInstance().back()}"
        ></nidoca-icon>
        <nidoca-layout-spacer
          NidocaSpacerSize="${he.SMALL}"
          .spacerTypes="${[de.LEFT,de.RIGHT]}"
        ></nidoca-layout-spacer>
        <nidoca-typography .type="${Oe.H3}">Settings</nidoca-typography>
      </nidoca-layout-flex>
      <nidoca-layout-spacer
        nidocaSpacerSize="${he.LITTLE}"
        .nidocaSpacerType="${[de.TOP,de.BOTTOM]}"
      >
      </nidoca-layout-spacer>
      <nidoca-layout-flex
        .flexJustifyContent="${qe.FLEX_START}"
        .alignItems="${Ke.CENTER}"
      >
        <nidoca-layout-spacer
          NidocaSpacerSize="${he.LITTLE}"
          .nidocaSpacerType="${[de.TOP,de.BOTTOM]}"
        >
          <nidoca-typography .type="${Oe.H6}">Spracheinstellungen</nidoca-typography>
        </nidoca-layout-spacer>
      </nidoca-layout-flex>
    `}};Cn.styles=s``,Cn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([te("nidoca-page-settings")],Cn);var _n=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Pn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let jn=class extends ee{constructor(){super(...arguments),this.prominent=!1,this.selectionMode=!1,this.elevationShow=!1,this.elevationContentElement=j`
    <nidoca-list .theme=${e.SURFACE}>
      <nidoca-list-item text="Kündigung drucken" @click="${()=>{var e;return null===(e=this.printElement)||void 0===e?void 0:e.print()}}">hiuhiuh</nidoca-list-item>
      <nidoca-list-item icon="delete" title="Vertrag löschen"></nidoca-list-item>
      <nidoca-list-item icon="share" title="Teilen"></nidoca-list-item>
      <nidoca-list-item text="Alle auswählen" @click="${()=>console.log("")}"></nidoca-list-item>
      <nidoca-list-item text="Alle abwählen" @click="${()=>this.selectionMode=!1}"></nidoca-list-item>
    </nidoca-list>
  `}render(){return j`
      <nidoca-layout-flex
        .flexDirection="${Xe.COLUMN}"
        .flexWrap="${Ve.WRAP}"
        .flexJustifyContent="${qe.CENTER}"
        .flexAlignItems="${Ke.CENTER}"
        .flexAlignContent="${Je.CENTER}"
      >
        <nidoca-layout-spacer>
          <nidoca-typography type="${Oe.H1}">Listenansicht mit Suche</nidoca-typography>
        </nidoca-layout-spacer>
        <nidoca-layout-spacer .spacerTypes="${[de.BOTTOM]}">
          <nidoca-typography type="${Oe.BODY1}"
            >Diese Listenansicht ist ein schönes Beispiel wie man eine Liste an Elementen anzeigt und verschiedene
            Funktionalität implementieren kann.</nidoca-typography
          >
        </nidoca-layout-spacer>

        <nidoca-top-app-bar .prominent="${this.prominent}" .theme="${e.SURFACE}">
          <nidoca-layout-spacer
            slot="left"
            spacerSize="${he.MEDIUM}"
            .spacerTypes=${[de.LEFT]}
          >
            <nidoca-typography type="${Oe.BODY1}"
              >Aufgaben</nidoca-typography
            ></nidoca-layout-spacer
          >
          <nidoca-icon
            slot="right"
            icon="${this.prominent?"search_off":"search"}"
            @nidoca-event-icon-clicked="${()=>this.prominent=!this.prominent}"
          ></nidoca-icon>
          <nidoca-icon
            slot="right"
            icon="${this.selectionMode?"low_priority":"list"}"
            @nidoca-event-icon-clicked="${()=>{this.selectionMode=!this.selectionMode}}"
          ></nidoca-icon>
          <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
          <nidoca-icon
            slot="right"
            icon="more_vert"
            .clickable="${!0}"
            @nidoca-event-icon-clicked="${e=>{this.elevationAssociatedElement=e.target,this.elevationShow=!0}}"
          ></nidoca-icon>

          <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
        </nidoca-top-app-bar>

        <nidoca-list .selectionMode="${this.selectionMode}">
          ${[{primary:"List Item",secondary:"Komponente muss schöner werden"},{primary:"List Item",secondary:"Komponente muss schöner werden"},{primary:"List Item",secondary:"Komponente muss schöner werden"},{primary:"List Item",secondary:"Komponente muss schöner werden"},{primary:"List Item",secondary:"Komponente muss schöner werden"}].map((e=>j`
              <nidoca-list-item
                ><nidoca-typography .type="${Oe.H6}">${e.primary}</nidoca-typography>
                <nidoca-typography .type="${Oe.BODY1}" slot="secondary"
                  >${e.secondary}</nidoca-typography
                >
                <nidoca-icon slot="graphic" icon="face">face</nidoca-icon>
                <nidoca-icon slot="meta" icon="arrow_right">arrow_right</nidoca-icon>
              </nidoca-list-item>
            `))}
        </nidoca-list>
      </nidoca-layout-flex>

      <nidoca-layout-spacer slot="topRight">
        <nidoca-icon
          icon="more_vert"
          .clickable="${!0}"
          @nidoca-event-icon-clicked="${e=>{this.elevationAssociatedElement=e.target,this.elevationShow=!0}}"
        ></nidoca-icon>
      </nidoca-layout-spacer>

      <nidoca-elevation
        .show="${this.elevationShow}"
        .associatedElement="${this.elevationAssociatedElement}"
        @nidoca-elevation-event-closeme="${()=>this.elevationShow=!1}"
        >${this.elevationContentElement}</nidoca-elevation
      >

      <nidoca-print id="print">Hallo, finde ich super das es so geht <br/>Huhuh<br/>Huhuh<br/>Huhuh<br/>Huhuh<br/>Huhuh<br/>Huhuh</nidoca-print>
    `}};jn.styles=s``,_n([ne({type:Boolean}),Pn("design:type",Boolean)],jn.prototype,"prominent",void 0),_n([ne({type:Boolean}),Pn("design:type",Boolean)],jn.prototype,"selectionMode",void 0),_n([ne({type:Boolean}),Pn("design:type",Boolean)],jn.prototype,"elevationShow",void 0),_n([ne({type:Object}),Pn("design:type",Object)],jn.prototype,"elevationAssociatedElement",void 0),_n([ne({type:Object}),Pn("design:type",Object)],jn.prototype,"elevationContentElement",void 0),_n([ie("#print"),Pn("design:type",Object)],jn.prototype,"printElement",void 0),jn=_n([te("nidoca-page-list")],jn);var Nn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Dn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Bn=class extends ee{constructor(){super(...arguments),this.prominent=!1,this.selectionMode=!1,this.elevationShow=!1,this.elevationContentElement=j`sdjoidj`}render(){return j`
      <nidoca-form
        id="form"
        @nidoca-form-text-event-change="${()=>this.showCurrentFormValues()}"
        @nidoca-form-switch-event-change="${()=>this.showCurrentFormValues()}"
      >
        <nidoca-form-textarea name="textarea" label="Mein Text"></nidoca-form-textarea>
        <nidoca-form-text type="${jt.TEXT}" name="text" label="Mein Textfeld"></nidoca-form-text>
        <nidoca-form-text type="${jt.EMAIL}" name="email" label="Meine Email"></nidoca-form-text>
        <nidoca-form-text type="${jt.NUMBER}" name="number" label="Meine Nummer"></nidoca-form-text>
        <nidoca-form-text
          type="${jt.PASSWORD}"
          name="password"
          label="Mein Passwort"
        ></nidoca-form-text>
        <nidoca-form-text type="${jt.TEL}" name="tel" label="Mein Telefon"></nidoca-form-text>
        <nidoca-form-text type="${jt.URL}" name="url" label="Meine URL"></nidoca-form-text>
        <nidoca-form-date type="${Ft.DATE}" name="date" label="Mein Textfeld"></nidoca-form-date>
        <nidoca-form-date
          type="${Ft.DATETIME_LOCAL}"
          name="dateLocal"
          label="Mein Textfeld"
        ></nidoca-form-date>
        <nidoca-form-date type="${Ft.MONTH}" name="month" label="Mein Textfeld"></nidoca-form-date>
        <nidoca-form-date type="${Ft.TIME}" name="time" label="Mein Textfeld"></nidoca-form-date>
        <nidoca-form-date type="${Ft.WEEK}" name="week" label="Mein Textfeld"></nidoca-form-date>
        <nidoca-form-switch
          name="switch"
          label="Mein Auswahlfeld"
          assistiveText="Mein Auswahlfeld Informationstext"
          errorText="Mein Error Text"
          warningText="Mein Warning Text"
          .checked="${!0}"
        ></nidoca-form-switch>
        <nidoca-form-combobox name="combobox" label="Meine Combobox"></nidoca-form-combobox>
      </nidoca-form>
    `}showCurrentFormValues(){var e;console.log(null===(e=this.form)||void 0===e?void 0:e.getOutputData())}clicked(e){throw new Error("Method not implemented."+e)}};Bn.styles=s``,Nn([ne({type:Boolean}),Dn("design:type",Boolean)],Bn.prototype,"prominent",void 0),Nn([ne({type:Boolean}),Dn("design:type",Boolean)],Bn.prototype,"selectionMode",void 0),Nn([ne({type:Boolean}),Dn("design:type",Boolean)],Bn.prototype,"elevationShow",void 0),Nn([ne({type:Object}),Dn("design:type",Object)],Bn.prototype,"elevationAssociatedElement",void 0),Nn([ne({type:Object}),Dn("design:type",Object)],Bn.prototype,"elevationContentElement",void 0),Nn([ie("#form"),Dn("design:type",Object)],Bn.prototype,"form",void 0),Bn=Nn([te("nidoca-page-form")],Bn);let Mn=class extends ee{render(){return j`
      ${[e.PRIMARY,e.SECONDARY,e.SURFACE].map((e=>j`
          <nidoca-top-app-bar .prominent="${!0}" .theme="${e}">
            <nidoca-icon
              slot="right"
              icon="search"
            ></nidoca-icon>
            <nidoca-icon
              slot="right"
              icon="list"
            ></nidoca-icon>
            <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
            <nidoca-icon
              slot="right"
              icon="more_vert"
              .clickable="${!0}"
            ></nidoca-icon>

            <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
          </nidoca-top-app-bar>
        `))}
    `}clicked(e){throw new Error("Method not implemented."+e)}};Mn.styles=s``,Mn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([te("nidoca-page-top-app-bar")],Mn);let Hn=class extends ee{render(){return j`
      <nidoca-list slot="sidebar">
        <nidoca-list-item
          icon="home"
          text="Home"
          href="#main"
          .rendered="${!0}"
          @click="${()=>Ln.getUniqueInstance().navigate("main")}"
        ></nidoca-list-item>
        <nidoca-list-item
          icon="home"
          text="Gallery"
          href="#main"
          .rendered="${!0}"
          @click="${()=>Ln.getUniqueInstance().navigate("gallery")}"
        ></nidoca-list-item>
      </nidoca-list>
    `}};Hn.styles=s``,Hn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([te("nidoca-elevation-settings")],Hn);let Un=class extends ee{render(){return j`
      Login

      <nidoca-button @nidoca-event-button-clicked="${()=>this.closePopup()}">Schließen</nidoca-button>
    `}closePopup(){this.dispatchEvent(new CustomEvent("nidoca-popup-login-closePopup",{detail:this,bubbles:!0,composed:!0}))}};Un.styles=s``,Un=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([te("nidoca-popup-login")],Un);var zn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Wn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Fn=class extends ee{constructor(){super(),this.showPopup=!1,this.popupContent=j``,this.navigationClosed=!0,this.prominent=!1,this.currentPage=j`<nidoca-page-main></nidoca-page-main>`,this.elevationShow=!1,Ln.getUniqueInstance().subscribe(this)}firstUpdated(){this.routeChanged(Ln.getUniqueInstance().getCurrentPage())}routeChanged(e){switch(console.log("enter new page, url: %s",e),e){case"gallery":this.currentPage=j`<nidoca-page-gallery></nidoca-page-gallery>`;break;case"settings":this.currentPage=j`<nidoca-page-settings></nidoca-page-settings>`;break;case"list":this.currentPage=j`<nidoca-page-list></nidoca-page-list>`;break;case"form":this.currentPage=j`<nidoca-page-form></nidoca-page-form>`;break;case"topAppBar":this.currentPage=j`<nidoca-page-top-app-bar></nidoca-page-top-app-bar>`;break;case"main":default:this.currentPage=j`<nidoca-page-main></nidoca-page-main>`}}render(){return j`
      <nidoca-template
        .prominent="${this.prominent}"
        .navigationClosed="${this.navigationClosed}"
        .theme="${e.PRIMARY}"
      >
        <nidoca-typography slot="topCenter" type="${Oe.BODY1}"
          >nidoca framework</nidoca-typography
        >
        <nidoca-icon
          slot="topLeft"
          icon="${this.navigationClosed?"menu":"clear"}"
          .clickable="${!0}"
          @nidoca-event-icon-clicked="${()=>this.navigationClosed=!this.navigationClosed}"
        ></nidoca-icon>
        <nidoca-icon
          slot="topRight"
          icon="${this.prominent?"search_off":"search"}"
          @nidoca-event-icon-clicked="${()=>this.prominent=!this.prominent}"
        ></nidoca-icon>
        <nidoca-icon
          slot="topRight"
          icon="person"
          @nidoca-event-icon-clicked="${()=>{this.showPopup=!0,this.popupContent=j`<nidoca-popup-login></nidoca-popup-login>`}}"
        ></nidoca-icon>
        <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
        <nidoca-icon
          slot="topRight"
          icon="more_vert"
          .clickable="${!0}"
          @nidoca-event-icon-clicked="${e=>{this.elevationShow=!0,this.elevationAssociatedElement=e.target,this.elevationContentElement=j`<nidoca-elevation-settings></nidoca-elevation-settings>`}}"
        ></nidoca-icon>

        <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

        <span slot="content">${this.currentPage}</span>

        <nidoca-list slot="sidebar">
          <nidoca-list-item
            icon="home"
            .rendered="${!0}"
            @click="${()=>Ln.getUniqueInstance().navigate("main")}"
          >Home</nidoca-list-item>
          <nidoca-list-item
            icon="home"
            .rendered="${!0}"
            @click="${()=>Ln.getUniqueInstance().navigate("gallery")}"
          >Gallery</nidoca-list-item>
          <nidoca-list-item
            icon="home"
            .rendered="${!0}"
            @click="${()=>Ln.getUniqueInstance().navigate("topAppBar")}"
          >topAppBar</nidoca-list-item>
          <nidoca-list-item @click="${()=>Ln.getUniqueInstance().navigate("list")}">Liste</nidoca-list-item>
          <nidoca-list-item @click="${()=>Ln.getUniqueInstance().navigate("form")}">
            <nidoca-typography .type="${Oe.H6}">Formular</nidoca-typography>
            <nidoca-icon slot="graphic" icon="face">face</nidoca-icon>
            <nidoca-icon slot="meta" icon="arrow_right">arrow_right</nidoca-icon>
          </nidoca-list-item>
        </nidoca-list>
      </nidoca-template>
      <nidoca-dialog
        .show="${this.showPopup}"
        .content="${this.popupContent}"
        @nidoca-popup-login-closePopup="${()=>this.showPopup=!1}"
      >
      </nidoca-dialog>
      <nidoca-elevation
        .show="${this.elevationShow}"
        .associatedElement="${this.elevationAssociatedElement}"
        @mouseout="${()=>this.elevationShow=!1}"
        >${this.elevationContentElement}</nidoca-elevation
      >
    `}};zn([ne({type:Boolean}),Wn("design:type",Boolean)],Fn.prototype,"showPopup",void 0),zn([ne({type:Object}),Wn("design:type",Object)],Fn.prototype,"popupContent",void 0),zn([ne({type:Boolean}),Wn("design:type",Boolean)],Fn.prototype,"navigationClosed",void 0),zn([ne({type:Boolean}),Wn("design:type",Boolean)],Fn.prototype,"prominent",void 0),zn([ne({type:Object}),Wn("design:type",Object)],Fn.prototype,"currentPage",void 0),zn([ne({type:Boolean}),Wn("design:type",Boolean)],Fn.prototype,"elevationShow",void 0),zn([ne({type:Object}),Wn("design:type",Object)],Fn.prototype,"elevationAssociatedElement",void 0),zn([ne({type:Object}),Wn("design:type",Object)],Fn.prototype,"elevationContentElement",void 0),Fn=zn([te("nidoca-app"),Wn("design:paramtypes",[])],Fn)})();