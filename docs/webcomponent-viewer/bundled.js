/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new Map;class i{constructor(t,o){if(this._$cssResult$=!0,o!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=o.get(this.cssText);return t&&void 0===e&&(o.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...o)=>{const n=1===t.length?t[0]:o.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new i(n,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let o="";for(const e of t.cssRules)o+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(o)})(t):t;var a;const s=window.trustedTypes,c=s?s.emptyScript:"",l=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:d};class y extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Eh(o,e);void 0!==i&&(this._$Eu.set(i,o),t.push(i))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const o=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{t?e.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=t.cssText,e.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=h){var i,n;const r=this.constructor._$Eh(t,o);if(void 0!==r&&!0===o.reflect){const a=(null!==(n=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:p.toAttribute)(e,o.type);this._$Ei=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(t,e){var o,i,n;const r=this.constructor,a=r._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=r.getPropertyOptions(a),s=t.converter,c=null!==(n=null!==(i=null===(o=s)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof s?s:null)&&void 0!==n?n:p.fromAttribute;this._$Ei=a,this[a]=c(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var u;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:y}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.2.0");const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,b="?"+g,v=`<${b}>`,x=document,$=(t="")=>x.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,T=t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,O=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,I=/"/g,j=/^(?:script|style|textarea)$/i,C=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),_=C(1),N=(C(2),Symbol.for("lit-noChange")),P=Symbol.for("lit-nothing"),B=new WeakMap,D=x.createTreeWalker(x,129,null,!1),L=(t,e)=>{const o=t.length-1,i=[];let n,r=2===e?"<svg>":"",a=E;for(let e=0;e<o;e++){const o=t[e];let s,c,l=-1,p=0;for(;p<o.length&&(a.lastIndex=p,c=a.exec(o),null!==c);)p=a.lastIndex,a===E?"!--"===c[1]?a=R:void 0!==c[1]?a=O:void 0!==c[2]?(j.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=k):void 0!==c[3]&&(a=k):a===k?">"===c[0]?(a=null!=n?n:E,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?k:'"'===c[3]?I:A):a===I||a===A?a=k:a===R||a===O?a=E:(a=k,n=void 0);const d=a===k&&t[e+1].startsWith("/>")?" ":"";r+=a===E?o+v:l>=0?(i.push(s),o.slice(0,l)+"$lit$"+o.slice(l)+g+d):o+g+(-2===l?(i.push(void 0),e):d)}const s=r+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(s):s,i]};class M{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[c,l]=L(t,e);if(this.el=M.createElement(c,o),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=D.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const o=l[r++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?q:"@"===e[1]?X:z})}else s.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(j.test(i.tagName)){const t=i.textContent.split(g),e=t.length-1;if(e>0){i.textContent=f?f.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],$()),D.nextNode(),s.push({type:2,index:++n});i.append(t[e],$())}}}else if(8===i.nodeType)if(i.data===b)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(g,t+1));)s.push({type:7,index:n}),t+=g.length-1}n++}}static createElement(t,e){const o=x.createElement("template");return o.innerHTML=t,o}}function W(t,e,o=t,i){var n,r,a,s;if(e===N)return e;let c=void 0!==i?null===(n=o._$Cl)||void 0===n?void 0:n[i]:o._$Cu;const l=w(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,o,i)),void 0!==i?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[i]=c:o._$Cu=c),void 0!==c&&(e=W(t,c._$AS(t,e.values),c,i)),e}class H{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(o,!0);D.currentNode=n;let r=D.nextNode(),a=0,s=0,c=i[0];for(;void 0!==c;){if(a===c.index){let e;2===c.type?e=new U(r,r.nextSibling,this,t):1===c.type?e=new c.ctor(r,c.name,c.strings,this,t):6===c.type&&(e=new F(r,this,t)),this.v.push(e),c=i[++s]}a!==(null==c?void 0:c.index)&&(r=D.nextNode(),a++)}return n}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class U{constructor(t,e,o,i){var n;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),w(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):T(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==P&&w(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=M.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(o);else{const t=new H(n,this),e=t.p(this.options);t.m(o),this.S(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new M(t)),e}A(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new U(this.M($()),this.M($()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class z{constructor(t,e,o,i,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const n=this.strings;let r=!1;if(void 0===n)t=W(this,t,e,0),r=!w(t)||t!==this._$AH&&t!==N,r&&(this._$AH=t);else{const i=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=W(this,i[o+a],e,a),s===N&&(s=this._$AH[a]),r||(r=!w(s)||s!==this._$AH[a]),s===P?t=P:t!==P&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.k(t)}k(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends z{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===P?void 0:t}}const Y=f?f.emptyScript:"";class q extends z{constructor(){super(...arguments),this.type=4}k(t){t&&t!==P?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class X extends z{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=W(this,t,e,0))&&void 0!==o?o:P)===N)return;const i=this._$AH,n=t===P&&i!==P||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==P&&(i===P||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const V={P:"$lit$",V:g,L:b,I:1,N:L,R:H,D:T,j:W,H:U,O:z,F:q,B:X,W:G,Z:F},K=window.litHtmlPolyfillSupport;var J,Z;null==K||K(M,U),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.1.1");class Q extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new U(e.insertBefore($(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.1.1");const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e);var ot,it;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements,console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(t){t.STRING="String",t.NUMBER="Number",t.BOOLEAN="Boolean",t.COMBOBOX="Class",t.ARRAY="Array",t.UNDEFINED="undefined"}(it||(it={}));class nt{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?it.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?it.UNDEFINED:this.getTypeName():it.COMBOBOX}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let o=0;o<e.length;o++){const i=e[o];if(i.key==t)return i.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class rt{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let o=[];if(e&&(e.tagName==t&&o.push(e),e.children.length>0)){const i=null==e?void 0:e.children;for(let e=0;e<i.length;e++)o=o.concat(this.getElementsByTagName(t,i.item(e)))}return o}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed");const e=[];for(const o of Array.from(t.keys()))e.push(new nt(o,t.get(o)));return e}}const at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function st(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):at(t,e)}function ct(t,e){return(({finisher:t,descriptor:e})=>(o,i)=>{var n;if(void 0===i){const i=null!==(n=o.originalKey)&&void 0!==n?n:o.key,r=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return null!=t&&(r.finisher=function(e){t(e,i)}),r}{const n=o.constructor;void 0!==e&&Object.defineProperty(o,i,e(i)),null==t||t(n,i)}})({descriptor:o=>{const i={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;i.get=function(){var o,i;return void 0===this[e]&&(this[e]=null!==(i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}const lt=t=>(...e)=>({_$litDirective$:t,values:e});class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:dt}=V,ht=()=>document.createComment(""),yt=(t,e,o)=>{var i;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=n.insertBefore(ht(),r),i=n.insertBefore(ht(),r);o=new dt(e,i,t,t.options)}else{const e=o._$AB.nextSibling,a=o._$AM,s=a!==t;if(s){let e;null===(i=o._$AQ)||void 0===i||i.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==a._$AU&&o._$AP(e)}if(e!==r||s){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return o},ut=(t,e,o=t)=>(t._$AI(e,o),t),ft={},mt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const i=t._$AB.nextSibling;for(;o!==i;){const t=o.nextSibling;o.remove(),o=t}},gt=(t,e,o)=>{const i=new Map;for(let n=e;n<=o;n++)i.set(t[n],n);return i},bt=lt(class extends pt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let i;void 0===o?o=e:void 0!==e&&(i=e);const n=[],r=[];let a=0;for(const e of t)n[a]=i?i(e,a):a,r[a]=o(e,a),a++;return{values:r,keys:n}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,i]){var n;const r=t._$AH,{values:a,keys:s}=this.dt(e,o,i);if(!Array.isArray(r))return this.at=s,a;const c=null!==(n=this.at)&&void 0!==n?n:this.at=[],l=[];let p,d,h=0,y=r.length-1,u=0,f=a.length-1;for(;h<=y&&u<=f;)if(null===r[h])h++;else if(null===r[y])y--;else if(c[h]===s[u])l[u]=ut(r[h],a[u]),h++,u++;else if(c[y]===s[f])l[f]=ut(r[y],a[f]),y--,f--;else if(c[h]===s[f])l[f]=ut(r[h],a[f]),yt(t,l[f+1],r[h]),h++,f--;else if(c[y]===s[u])l[u]=ut(r[y],a[u]),yt(t,r[h],r[y]),y--,u++;else if(void 0===p&&(p=gt(s,u,f),d=gt(c,h,y)),p.has(c[h]))if(p.has(c[y])){const e=d.get(s[u]),o=void 0!==e?r[e]:null;if(null===o){const e=yt(t,r[h]);ut(e,a[u]),l[u]=e}else l[u]=ut(o,a[u]),yt(t,r[h],o),r[e]=null;u++}else mt(r[y]),y--;else mt(r[h]),h++;for(;u<=f;){const e=yt(t,l[f+1]);ut(e,a[u]),l[u++]=e}for(;h<=y;){const t=r[h++];null!==t&&mt(t)}return this.at=s,((t,e=ft)=>{t._$AH=e})(t,l),N}}),vt={},xt=lt(class extends pt{constructor(){super(...arguments),this.nt=vt}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return N}else if(this.nt===e)return N;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});class $t extends Q{}class wt{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){const t=new hi;t.style.padding="var(--space-medium)",t.title="Ut enim ad minim veniam",t.summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",t.text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",this.registeredElementsMap.set("nidoca-article",_`${t}`);const e=new Bt;e.style.padding="var(--space-medium)",e.text="Typography",e.type="BODY1",e.textAlign="left",this.registeredElementsMap.set("nidoca-typography",_`${e}`);const o=new eo;o.src="http://nidoca.eu/img/DSC02586.jpg",o.width="100%",o.height="100%",this.registeredElementsMap.set("nidoca-img",_`${o}`);const i=new io;i.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",_`${i}`),this.registeredElementsMap.set("nidoca-search-bar",_`<nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`);const n=new ri;n.style.padding="var(--space-medium)",n.imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg",n.primaryText="Dominik Bruhn",n.description="Softwareentwickler",this.registeredElementsMap.set("nidoca-avatar",_`${n}`);const r=new Qt;r.style.padding="var(--space-big)",this.registeredElementsMap.set("nidoca-progress",_`${r}`);const a=new Ye;a.style.padding="var(--space-big)",a.icon="home",a.primaryText="Home Icon",a.clickable=!0,a.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",_`${a}`);const s=new uo;s.selectionMode=!0,s.selected=!0,s.primaryText="List Item",s.secondaryText="List Item Secondary Text",this.registeredElementsMap.set("nidoca-list-item",_`${s}`),this.registeredElementsMap.set("nidoca-list",_`<nidoca-list theme="primary" selectionMode stlye="padding:var(--space-big);"
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
      ></nidoca-list>`),this._registeredElementsMap.set("nidoca-menu",_` <nidoca-menu theme="secondary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"> </nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"> </nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"> </nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"> </nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"> </nidoca-menu-item>
      </nidoca-menu>`),this._registeredElementsMap.set("nidoca-accordion",_`<nidoca-accordion .theme="${St.PRIMARY}"
        ><nidoca-accordion-item header="Lorem Ipsum" opened
          ><nidoca-article
            style="padding:25px;"
            title="Lorem Ipsum"
            summary="Lorem Ipsum Dolorem ipsum med en to."
            text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
          ></nidoca-article></nidoca-accordion-item
        ><nidoca-accordion-item header="Bild 2"
          ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img></nidoca-accordion-item
        ><nidoca-accordion-item header="Bild 3"
          ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img></nidoca-accordion-item
        ><nidoca-accordion-item header="Bild 4"
          ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img></nidoca-accordion-item
      ></nidoca-accordion>`),this._registeredElementsMap.set("nidoca-box-shadow",_`<nidoca-box-shadow></nidoca-box-shadow>`),this._registeredElementsMap.set("nidoca-button",_`<nidoca-button leadingIcon="home" buttonType="OUTLINED">Mein Button</nidoca-button>`),this._registeredElementsMap.set("nidoca-card",_`<nidoca-card></nidoca-card>`),this._registeredElementsMap.set("nidoca-chip",_`<nidoca-chip>jojij</nidoca-chip>`),this._registeredElementsMap.set("nidoca-code",_`<nidoca-code></nidoca-code>`),this._registeredElementsMap.set("nidoca-dialog-action",_`<nidoca-dialog-action></nidoca-dialog-action>`),this._registeredElementsMap.set("nidoca-elevation",_`
        <nidoca-elevation
          .show="${!0}"
          .associatedElement="${void 0}"
          @nidoca-elevation-event-closeme="${()=>alert("Hallo")}"
        >joijiojoij
        </nidoca-elevation>
      `),this._registeredElementsMap.set("nidoca-dialog",_`<nidoca-dialog></nidoca-dialog>`),this._registeredElementsMap.set("nidoca-form-combobox",_`<nidoca-form-combobox
        theme="primary"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
        .options="${[{key:"item1",value:"Item 1"},{key:"item2",value:"Item 2"}]}"
        value="item2"
      ></nidoca-form-combobox>`),this._registeredElementsMap.set("nidoca-form-date",_`<nidoca-form-date
        theme="primary"
        label="Geburtstag"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-date>`),this._registeredElementsMap.set("nidoca-form-switch",_`<nidoca-form-switch></nidoca-form-switch>`),this._registeredElementsMap.set("nidoca-form-text",_`
        <nidoca-form-text
          style="width:100%;"
          theme="primary"
          label="Mein Textfeld"
          placeholder="Platzhalter"
          trailingIcon="home"
          infoText="Info"
          warningText="Warnung"
          errorText="Fehler"
          name="text"
        >
        </nidoca-form-text>
      `),this._registeredElementsMap.set("nidoca-form-textarea",_`<nidoca-form-textarea
        style="width:100%;"
        theme="primary"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-textarea>`),this._registeredElementsMap.set("nidoca-form-captcha",_`<nidoca-form-captcha
        theme="primary"
        label="Wie lautet das Ergebnis von:"
        name="captcha"
      ></nidoca-form-captcha>`),this._registeredElementsMap.set("nidoca-gallery",_`<nidoca-gallery
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
      ></nidoca-gallery>`),this._registeredElementsMap.set("nidoca-link",_`<nidoca-link></nidoca-link>`),this._registeredElementsMap.set("nidoca-ripple",_`<nidoca-ripple></nidoca-ripple>`),this._registeredElementsMap.set("nidoca-tabs",_`
        <nidoca-tabs tabIndex="0">
          <nidoca-tab slot="tab">Tab 1</nidoca-tab>
          <nidoca-tab slot="tab">Tab 2</nidoca-tab>
          <nidoca-tab slot="tab">Tab 3</nidoca-tab>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 1 </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 2 </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 3 </nidoca-tab-content>
        </nidoca-tabs>
      `),this._registeredElementsMap.set("nidoca-table",_`<nidoca-table></nidoca-table>`),this._registeredElementsMap.set("nidoca-top-app-bar",_`<nidoca-top-app-bar .theme="${St.PRIMARY}">
        <nidoca-typography slot="center" type="${Ct.BODY1}">Top App Bar</nidoca-typography>
        <nidoca-icon slot="left" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" icon="more_vert" clickable></nidoca-icon>

        <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>`),this._registeredElementsMap.set("nidoca-upload",_`<nidoca-upload></nidoca-upload>`),this._registeredElementsMap.set("nidoca-wizard",_`<nidoca-wizard></nidoca-wizard>`)}static getUniqueInstance(){return wt.uniqueInstance||(wt.uniqueInstance=new wt),wt.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const t=[];for(const e of this.registeredElementsMap.keys())t.push(e);return t}registerElementName(t){console.log(`register element: ${t}`);const e=document.createElement(t);this.registeredElementsMap.set(t,_`${e}`)}}class St{static getStyle(t){return t?_`<style>
          :host,
          *,
          ::slotted(*) {
            color: var(--app-color-${t});
            background-color: var(--app-color-${t}-background);
          }
        </style>`:_``}}St.PRIMARY="primary",St.SECONDARY="secondary",St.SURFACE="surface",St.BACKGROUND="background";var Tt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Et=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Rt=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return _`
      <div
        @click="${()=>this.toggle()}"
        style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;align-content:center; cursor:pointer;"
      >
        <nidoca-typography style="padding-left:var(--space-medium);" text="${this.header}"></nidoca-typography>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?_` <slot></slot>`:_``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};Rt.styles=n`
    :host {
      border-left-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    .container {
      display: block;
      width: 100%;
    }
  `,Tt([st({type:String}),Et("design:type",String)],Rt.prototype,"header",void 0),Tt([st({type:Boolean}),Et("design:type",Boolean)],Rt.prototype,"opened",void 0),Rt=Tt([et("nidoca-accordion-item")],Rt);var Ot,kt,At=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},It=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.SINGLE="SINGLE",t.MULTI="MULTI"}(kt||(kt={}));let jt=class extends Q{constructor(){super(...arguments),this.theme=St.SURFACE,this.accordionType=kt.SINGLE}render(){return _`
      ${St.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case kt.SINGLE:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof Rt&&i!=e&&(i.opened=!1)}}case kt.MULTI:}t.stopPropagation()}};jt.styles=n`
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
  `,At([st({type:St,converter:String}),It("design:type","function"==typeof(Ot=void 0!==St&&St)?Ot:Object)],jt.prototype,"theme",void 0),At([st({type:kt,converter:String}),It("design:type",String)],jt.prototype,"accordionType",void 0),At([ct("#accordionSlot"),It("design:type",Object)],jt.prototype,"accordionSlot",void 0),jt=At([et("nidoca-accordion")],jt);var Ct,_t,Nt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6",t.SUBTITLE1="SUBTITLE1",t.SUBTITLE2="SUBTITLE2",t.BODY1="BODY1",t.BODY2="BODY2",t.BUTTON="BUTTON",t.CAPTION="CAPTION",t.OVERLINE="OVERLINE"}(Ct||(Ct={})),function(t){t.JUSTIFY="text-align:justify;",t.JUSTIFY_ALL="text-align:justify-all;",t.LEFT="text-align: left;",t.RIGHT="text-align: right;",t.CENTER="text-align: center;",t.START="text-align: start;",t.END="text-align: end;",t.MATCH_PARENT="text-align: match-parent;",t.INHERIT="text-align: inherit;",t.INITIAL="text-align: initial;",t.UNSET="text-align: unset;"}(_t||(_t={}));let Bt=class extends Q{constructor(){super(...arguments),this.type=Ct.BODY1,this.textAlign=_t.START,this.text=""}render(){return _` <span class="TYPOGRAPHY ${this.type}" style="${this.textAlign}">${this.text}<slot></slot></span> `}};Bt.styles=n`
    :host {
      display: block;
    }

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
      font-size: 3.5rem;
    }

    .H2,
    ::slotted(.H2) {
      font-size: 2.75rem;
      vertical-align: top;
    }

    .H3 {
      font-size: 2.5rem;
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
      font-size: 1.5rem;
      font-weight: 200;
    }

    .BODY2 {
      text-decoration-style: solid;
      font-size: 1.25rem;
      font-weight: 300;
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
  `,Nt([st({type:Ct,converter:String}),Pt("design:type",String)],Bt.prototype,"type",void 0),Nt([st({type:_t,converter:String}),Pt("design:type",String)],Bt.prototype,"textAlign",void 0),Nt([st({type:String}),Pt("design:type",String)],Bt.prototype,"text",void 0),Bt=Nt([et("nidoca-typography")],Bt);var Dt,Lt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Mt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(Dt||(Dt={}));let Wt=class extends Q{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return _`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${Ve.NONE}"
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

          ${this.isLast?_``:_`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-typography
          style="width:48px;"
          .type="${Ct.OVERLINE}"
          textAlign="${_t.CENTER}"
          text="${this.primaryText}"
          ><slot></slot>
        </nidoca-typography>
      </div>
    `}determineBackgroundColor(t){return t==Dt.COMPLETED?"var(--app-color-primary)":t==Dt.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==Dt.FINISH?"var(--app-color-success)":t==Dt.COMPLETED?"var(--mdc-theme-on-primary)":t==Dt.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};Wt.styles=n`
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
  `,Lt([st({type:String}),Mt("design:type",String)],Wt.prototype,"icon",void 0),Lt([st({type:String}),Mt("design:type",String)],Wt.prototype,"primaryText",void 0),Lt([st({type:Number}),Mt("design:type",Object)],Wt.prototype,"state",void 0),Lt([st({type:Boolean}),Mt("design:type",Boolean)],Wt.prototype,"isLast",void 0),Wt=Lt([et("nidoca-wizard-step")],Wt);var Ht=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ut=class extends Q{render(){return _`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let i=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof Wt&&(e.index=t,e.state==Dt.CURRENT&&(i=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(i)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof Wt&&void 0!==i.index&&(i.index<t?i.state=Dt.COMPLETED:i.index==t?i.state=Dt.CURRENT:i.state=Dt.OPEN)}}}};Ut.styles=n``,Ht([ct("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Ut.prototype,"wizardSlot",void 0),Ut=Ht([et("nidoca-wizard")],Ut);var zt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Gt=class extends Q{constructor(){super(...arguments),this.clickable=!0}render(){return _`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Gt.styles=n`
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
  `,zt([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Gt.prototype,"clickable",void 0),Gt=zt([et("nidoca-chip")],Gt);var Yt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let qt=class extends Q{constructor(){super(...arguments),this.code=""}render(){return _`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};qt.styles=n`
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
      font-family: "Courier New", monospace;
      font-size: 0.85em;
      position: relative;
    }

    .icon-position {
      position: absolute;
      top: -24px;
      right: 0;
      opacity: 0.2;
    }
  `,Yt([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],qt.prototype,"code",void 0),qt=Yt([et("nidoca-code")],qt);var Xt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ft=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vt=class extends Q{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const o=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?_`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:_``}calculatePositionStyle(t){let e="";if(t){const o=t.getBoundingClientRect();o.right>window.innerWidth/2?e+=`right:${window.innerWidth-o.right}px;`:e+=`left:${o.left}px;`,o.top>window.innerHeight/2?e+=`bottom:${o.height+window.innerHeight-o.top}px;`:e+=`top:${o.bottom}px;`}return e}};Vt.styles=n`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Xt([st({type:Boolean}),Ft("design:type",Boolean)],Vt.prototype,"show",void 0),Xt([st({type:Object}),Ft("design:type",Object)],Vt.prototype,"associatedElement",void 0),Vt=Xt([et("nidoca-elevation"),Ft("design:paramtypes",[])],Vt);var Kt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Jt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Zt{}Zt.PROGRESS="PROGRESS",Zt.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Qt=class extends Q{constructor(){super(...arguments),this.progressType=Zt.PROGRESS}render(){return _` <style>
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
          content: "";
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

      <progress class="${this.progressType}"></progress>`}};Qt.styles=n``,Kt([st({type:St,converter:String}),Jt("design:type",Object)],Qt.prototype,"theme",void 0),Kt([st({type:Zt,converter:String}),Jt("design:type",String)],Qt.prototype,"progressType",void 0),Qt=Kt([et("nidoca-progress")],Qt);var te,ee=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},oe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.CONTAINED="CONTAINED",t.OUTLINED="OUTLINED",t.TEXT="TEXT"}(te||(te={}));let ie=class extends Q{constructor(){super(...arguments),this.theme=St.PRIMARY,this.buttonType=te.CONTAINED,this.leadingIcon="",this.text=""}render(){return _`
      <style>
        .OUTLINED {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-${this.theme});
        }

        .CONTAINED {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .TEXT {
          font-weight: 900;
          color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-ripple class="fullWidth">
        <div style="border:1px solid black;">
          <div
            class="BUTTON ${this.buttonType}"
            @click="${()=>{this.clicked()}}"
            style="display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;"
          >
            ${this.leadingIcon?_`<nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>`:_``}
            ${this.leadingIcon||this.buttonType==te.TEXT?_``:_`<nidoca-layout-spacer> </nidoca-layout-spacer>`}

            <nidoca-typography
              style="padding:var(--space-big);"
              text="${this.text}"
              type="${Ct.BUTTON}"
            >
              <slot></slot>
            </nidoca-typography>

            ${this.buttonType!=te.TEXT?_`<nidoca-layout-spacer></nidoca-layout-spacer>`:_``}
          </div>
        </div>
      </nidoca-ripple>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};ie.styles=n`
    :host,
    .fullWidth {
      display: block;
      width: 100%;
    }

    .BUTTON {
      cursor: pointer;
      text-transform: uppercase;
      box-sizing: border-box;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `,ee([st({type:St,converter:String}),oe("design:type",Object)],ie.prototype,"theme",void 0),ee([st({type:te,converter:String}),oe("design:type",String)],ie.prototype,"buttonType",void 0),ee([st({type:String}),oe("design:type",String)],ie.prototype,"leadingIcon",void 0),ee([st({type:String}),oe("design:type",String)],ie.prototype,"text",void 0),ie=ee([et("nidoca-button")],ie);var ne,re=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};!function(t){t.NONE="NONE",t.KEY_LIGHT="KEY_LIGHT",t.AMBIENT_LIGHT="AMBIENT_LIGHT",t.COMBINED="COMBINED"}(ne||(ne={}));let ae=class extends Q{constructor(){super(...arguments),this.shadowType=ne.KEY_LIGHT}render(){return _` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `}};ae.styles=n`
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
  `,re([st({type:ne}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],ae.prototype,"shadowType",void 0),ae=re([et("nidoca-box-shadow")],ae);var se=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ce=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let le=class extends Q{constructor(){super(),this.autocomplete=!0,null==this.getAttribute("style")&&this.setAttribute("style","width:100%;")}render(){return _`
      <form
        class="container"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        .?autocomplete="${this.autocomplete}"
      >
        <slot id="slotElement"></slot>
      </form>
    `}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const i=o[t];this.recursiveInputElementSearch(i,e)}return e}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t&&e.scrollIntoView(!0),t=!1);return t}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const i=o.getOutputData();e[i.key]=i.value,t.append(i.key,i.value)}const o={};return o.jsonObject=e,o.formData=t,o}formButtonClicked(t){console.log("formButton clicked: "+t.detail),"submitButton"===t.detail&&this.dispatchEvent(new CustomEvent("nidoca-event-form-submit-button-clicked",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}recursiveInputElementSearch(t,e){if(t instanceof $t)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};le.styles=n`
    .container {
      box-sizing: border-box;
    }
    :host {
      display: block;
    }
    #slot {
      display: block;
      width: 100%;
    }
  `,se([st({type:Boolean}),ce("design:type",Boolean)],le.prototype,"autocomplete",void 0),se([st({type:St,converter:String}),ce("design:type",Object)],le.prototype,"theme",void 0),se([ct("#slotElement"),ce("design:type",Object)],le.prototype,"slotElement",void 0),le=se([et("nidoca-form"),ce("design:paramtypes",[])],le);const pe=t=>null!=t?t:P;var de,he=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.COLOR="color",t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url"}(de||(de={}));let ue=class extends $t{constructor(){super(...arguments),this.type=de.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1}render(){return this.type==de.HIDDEN?_`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:_` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }
            .border,
            ::slotted(.border) {
              border-color: var(--app-color-${this.theme}-border);
              border-bottom-style: solid;
            }
            .border:focus-within,
            ::slotted(.border:focus-within) {
              border-color: var(--app-color-${this.theme}-border-selected);
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon?_`<nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space-medium);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:_``}
            <div class="container">
              <nidoca-typography
                style="padding-left:var(--space-medium); padding-right:var(--space-medium);"
                class="label"
                .type="${Ct.CAPTION}"
                text="${this.label}"
              ></nidoca-typography>

              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder?this.placeholder:this.label}"
                size="${pe(this.size)}"
                minlength="${pe(this.minlength)}"
                maxlength="${pe(this.maxlength)}"
                min="${pe(this.min)}"
                max="${pe(this.max)}"
                step="${pe(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?_`<div>
                ${this.infoText?_` <nidoca-typography
                      .type="${Ct.SUBTITLE1}"
                      text="${this.infoText}"
                    ></nidoca-typography>`:_``}
                ${this.warningText?_` <nidoca-typography
                      style="color:var(--app-color-warning-background)"
                      .type="${Ct.SUBTITLE1}"
                      text="${this.warningText}"
                    ></nidoca-typography>`:_``}
                ${this.errorText?_` <nidoca-typography
                      style="color:var(--app-color-error-background)"
                      .type="${Ct.SUBTITLE1}"
                      text="${this.errorText}"
                    ></nidoca-typography>`:_``}
              </div> `:_``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ue.styles=n`
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
      height: var(--line-height-large);
      line-height: var(--line-height-large);
      padding-left: var(--space-medium);
      padding-right: var(--space-medium);
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    input:focus::placeholder {
      color: transparent;
    }
  `,he([st({type:St,converter:String}),ye("design:type",Object)],ue.prototype,"theme",void 0),he([st({type:de,converter:String}),ye("design:type",String)],ue.prototype,"type",void 0),he([st({type:String}),ye("design:type",String)],ue.prototype,"label",void 0),he([st({type:String}),ye("design:type",String)],ue.prototype,"placeholder",void 0),he([st({type:String}),ye("design:type",String)],ue.prototype,"trailingIcon",void 0),he([st({type:String}),ye("design:type",String)],ue.prototype,"errorText",void 0),he([st({type:String}),ye("design:type",String)],ue.prototype,"infoText",void 0),he([st({type:String}),ye("design:type",String)],ue.prototype,"warningText",void 0),he([st({type:String}),ye("design:type",String)],ue.prototype,"name",void 0),he([st(),ye("design:type",String)],ue.prototype,"value",void 0),he([st({type:Boolean}),ye("design:type",Boolean)],ue.prototype,"required",void 0),he([st({type:Boolean}),ye("design:type",Boolean)],ue.prototype,"disabled",void 0),he([st({type:Boolean}),ye("design:type",Boolean)],ue.prototype,"checked",void 0),he([st({type:Number}),ye("design:type",Object)],ue.prototype,"maxlength",void 0),he([st({type:Number}),ye("design:type",Object)],ue.prototype,"minlength",void 0),he([st({type:Number}),ye("design:type",Object)],ue.prototype,"min",void 0),he([st({type:Number}),ye("design:type",Object)],ue.prototype,"max",void 0),he([st({type:Number}),ye("design:type",Object)],ue.prototype,"step",void 0),he([st({type:Number}),ye("design:type",Object)],ue.prototype,"size",void 0),he([ct("#inputElement"),ye("design:type",Object)],ue.prototype,"inputElement",void 0),ue=he([et("nidoca-form-text")],ue);var fe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},me=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ge=class extends $t{constructor(){super(...arguments),this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return _`
      <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        .border,
        ::slotted(.border) {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
        }
        .border:focus-within,
        ::slotted(.border:focus-within) {
          border-color: var(--app-color-${this.theme}-border-selected);
        }
      </style>
      <div class="parentContainer border">
        <div class="container">
          <nidoca-typography
            style="padding-left:var(--space-medium); padding-right:var(--space-medium);"
            class="label"
            .type="${Ct.CAPTION}"
            text="${this.label}"
          ></nidoca-typography>

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
        </div>
      </div>

      ${this.infoText||this.warningText||this.errorText?_`<div>
            ${this.infoText?_` <nidoca-typography
                  .type="${Ct.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-typography>`:_``}
            ${this.warningText?_` <nidoca-typography
                  style="color:var(--app-color-warning-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-typography>`:_``}
            ${this.errorText?_` <nidoca-typography
                  style="color:var(--app-color-error-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-typography>`:_``}
          </div> `:_``}
    `}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ge.styles=n`
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
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    textarea {
      padding-left: var(--space-medium);
      padding-right: var(--space-medium);
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
  `,fe([st({type:St,converter:String}),me("design:type",Object)],ge.prototype,"theme",void 0),fe([st({type:String}),me("design:type",String)],ge.prototype,"infoText",void 0),fe([st({type:String}),me("design:type",String)],ge.prototype,"warningText",void 0),fe([st({type:String}),me("design:type",String)],ge.prototype,"errorText",void 0),fe([st({type:String}),me("design:type",String)],ge.prototype,"name",void 0),fe([st(),me("design:type",String)],ge.prototype,"value",void 0),fe([st({type:String}),me("design:type",String)],ge.prototype,"label",void 0),fe([st({type:Boolean}),me("design:type",Boolean)],ge.prototype,"required",void 0),fe([st({type:String}),me("design:type",String)],ge.prototype,"placeholder",void 0),fe([st({type:Boolean}),me("design:type",Boolean)],ge.prototype,"disabled",void 0),fe([st({type:Number}),me("design:type",Number)],ge.prototype,"rows",void 0),fe([ct("#inputElement"),me("design:type",Object)],ge.prototype,"inputElement",void 0),ge=fe([et("nidoca-form-textarea")],ge);var be,ve=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.DATE="date",t.DATETIME_LOCAL="datetime-local",t.MONTH="month",t.TIME="time",t.WEEK="week"}(be||(be={}));let $e=class extends $t{constructor(){super(...arguments),this.trailingIcon="",this.type=be.DATE,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.errorText="",this.infoText="",this.warningText=""}render(){return _`
      <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        .border,
        ::slotted(.border) {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
        }
        .border:focus-within,
        ::slotted(.border:focus-within) {
          border-color: var(--app-color-${this.theme}-border-selected);
        }
      </style>
      <div class="parentContainer border">
        ${this.trailingIcon?_`<nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space-medium);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:_``}
        <div class="container">
          <nidoca-typography
            style="padding-left:var(--space-medium); padding-right:var(--space-medium);"
            class="label"
            .type="${Ct.CAPTION}"
            text="${this.label}"
          ></nidoca-typography>
          <input
            id="inputElement"
            name="${this.name}"
            type="${this.type}"
            value="${this.value}"
            placeholder="${this.placeholder?this.placeholder:this.label}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
          />
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?_`<div>
            ${this.infoText?_` <nidoca-typography
                  .type="${Ct.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-typography>`:_``}
            ${this.warningText?_` <nidoca-typography
                  style="color:var(--app-color-warning-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-typography>`:_``}
            ${this.errorText?_` <nidoca-typography
                  style="color:var(--app-color-error-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-typography>`:_``}
          </div> `:_``}
    `}getOutputData(){var t;return{key:this.name,value:null===(t=this.inputElement)||void 0===t?void 0:t.value}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};$e.styles=n`
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
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
      padding-left: var(--space-medium);
      padding-right: var(--space-medium);
    }
    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `,ve([st({type:St,converter:String}),xe("design:type",Object)],$e.prototype,"theme",void 0),ve([st({type:String}),xe("design:type",String)],$e.prototype,"trailingIcon",void 0),ve([st(),xe("design:type",String)],$e.prototype,"type",void 0),ve([st({type:String}),xe("design:type",String)],$e.prototype,"name",void 0),ve([st({type:String}),xe("design:type",String)],$e.prototype,"value",void 0),ve([st({type:String}),xe("design:type",String)],$e.prototype,"label",void 0),ve([st({type:Boolean}),xe("design:type",Boolean)],$e.prototype,"required",void 0),ve([st({type:String}),xe("design:type",String)],$e.prototype,"placeholder",void 0),ve([st({type:Boolean}),xe("design:type",Boolean)],$e.prototype,"disabled",void 0),ve([st({type:String}),xe("design:type",String)],$e.prototype,"errorText",void 0),ve([st({type:String}),xe("design:type",String)],$e.prototype,"infoText",void 0),ve([st({type:String}),xe("design:type",String)],$e.prototype,"warningText",void 0),ve([ct("#inputElement"),xe("design:type",Object)],$e.prototype,"inputElement",void 0),$e=ve([et("nidoca-form-date")],$e);var we,Se=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Te=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ee=class extends $t{constructor(){super(...arguments),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=St.PRIMARY}render(){return _`
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
        <nidoca-typography .type="${Ct.SUBTITLE1}" text="${this.label}">
          <slot></slot>
        </nidoca-typography>

        ${this.infoText.length>0?_` <nidoca-typography
              .type="${Ct.SUBTITLE2}"
              text="${this.infoText}"
            ></nidoca-typography>`:_``}

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

      ${this.warningText?_` <nidoca-typography
            style="color:var(--app-color-warning-background)"
            .type="${Ct.BODY1}"
            text="${this.warningText}"
          ></nidoca-typography>`:_``}
      ${this.errorText?_` <nidoca-typography
            style="color:var(--app-color-error-background)"
            .type="${Ct.BODY1}"
            text="${this.errorText}"
          ></nidoca-typography>`:_``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Ee.styles=n`
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
      background-color: var(--app-color-surface-background);
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
  `,Se([st({type:String}),Te("design:type",String)],Ee.prototype,"name",void 0),Se([st({type:String}),Te("design:type",String)],Ee.prototype,"label",void 0),Se([st({type:String}),Te("design:type",String)],Ee.prototype,"infoText",void 0),Se([st({type:String}),Te("design:type",String)],Ee.prototype,"errorText",void 0),Se([st({type:String}),Te("design:type",String)],Ee.prototype,"warningText",void 0),Se([st({type:Boolean}),Te("design:type",Boolean)],Ee.prototype,"required",void 0),Se([st({type:Boolean}),Te("design:type",Boolean)],Ee.prototype,"disabled",void 0),Se([st({type:Boolean}),Te("design:type",Boolean)],Ee.prototype,"checked",void 0),Se([st({type:String}),Te("design:type","function"==typeof(we=void 0!==St&&St)?we:Object)],Ee.prototype,"theme",void 0),Se([ct("#inputElement"),Te("design:type",Object)],Ee.prototype,"inputElement",void 0),Ee=Se([et("nidoca-form-switch")],Ee);var Re=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Oe=class extends Q{constructor(){super(...arguments),this.code=""}render(){return _``}};Oe.styles=n``,Re([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Oe.prototype,"code",void 0),Oe=Re([et("nidoca-upload")],Oe);var ke=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ae=class extends Q{constructor(){super(...arguments),this.text=""}render(){return _`
      <div class="container">
        <nidoca-layout-spacer left="10px"></nidoca-layout-spacer>
        ${this.text?_`<nidoca-typography .type="${Ct.H5}">${this.text}</nidoca-typography>`:_``}
        <slot></slot>
      </div>
    `}};Ae.styles=n`
    .container {
      display: flex;
    }
  `,ke([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ae.prototype,"text",void 0),Ae=ke([et("nidoca-menu-area")],Ae);var Ie,je=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ce=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.ITEM="item",t.SECTION="section"}(Ie||(Ie={}));let _e=class extends Q{constructor(){super(...arguments),this.text="",this.icon="",this.type=Ie.ITEM}render(){return _`
      <div class="container ${this.type}">
        ${this.icon?_` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space-little); font-size:var(--icon-size);"
            ></nidoca-icon>`:_` <nidoca-layout-spacer left="10px" right="36px"></nidoca-layout-spacer>`}
        ${this.text?_`<nidoca-typography
              .type="${this.type==Ie.ITEM?Ct.SUBTITLE1:Ct.CAPTION}"
              >${this.text}</nidoca-typography
            >`:_``}
      </div>
    `}};_e.styles=n`
    .container {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
  `,je([st({type:String}),Ce("design:type",String)],_e.prototype,"text",void 0),je([st({type:String}),Ce("design:type",String)],_e.prototype,"icon",void 0),je([st({type:String}),Ce("design:type",String)],_e.prototype,"type",void 0),_e=je([et("nidoca-menu-item")],_e);var Ne=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Pe=class extends Q{render(){return _` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <slot></slot>`}};Pe.styles=n`
    :host {
      display: block;
      width: 100%;
      padding-left: var(--space-normal);
      padding-right: var(--space-normal);
    }
  `,Ne([st({type:St,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Pe.prototype,"theme",void 0),Pe=Ne([et("nidoca-menu")],Pe);class Be{constructor(t,e,o=10240){this.key=t,this.minWidth=e,this.maxWidth=o}static applyDevices(t,e){for(let o=0;o<e.length;o++)if(e[o]==this.getCurrentScreen())return t;return""}static getCurrentScreen(){let t=null;return[Be.MOBILE,Be.TABLET,Be.DESKTOP].forEach((e=>{(null==e.minWidth||e.minWidth<window.innerWidth)&&(null==e.maxWidth||e.maxWidth>window.innerWidth)&&(t=e)})),t}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}Be.MOBILE=new Be("MOBILE",0,640),Be.TABLET=new Be("TABLET",641,1007),Be.DESKTOP=new Be("DESKTOP",1008);var De=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Le=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Me=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return _`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,i,n,r){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(i).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(r).concat(";")}};Me.styles=n`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,De([st({type:String}),Le("design:type",String)],Me.prototype,"height",void 0),De([st({type:String}),Le("design:type",String)],Me.prototype,"width",void 0),De([st({type:String}),Le("design:type",String)],Me.prototype,"left",void 0),De([st({type:String}),Le("design:type",String)],Me.prototype,"top",void 0),De([st({type:String}),Le("design:type",String)],Me.prototype,"right",void 0),De([st({type:String}),Le("design:type",String)],Me.prototype,"bottom",void 0),Me=De([et("nidoca-layout-floating")],Me);var We=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},He=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ue=class extends Q{constructor(){super(...arguments),this.width="",this.height="",this.minWidth="",this.minHeight="",this.contentWidth="",this.contentHeight="",this.devices=[Be.DESKTOP,Be.TABLET,Be.MOBILE]}updated(t){for(let e=0;e<this.devices.length;e++)if(this.devices[e]==Be.getCurrentScreen()){t.has("width")&&""!=this.width&&(this.style.width=this.width),t.has("height")&&""!=this.height&&(this.style.height=this.height),t.has("minWidth")&&""!=this.minWidth&&(this.style.minWidth=this.minWidth),t.has("minHeight")&&""!=this.minHeight&&(this.style.minHeight=this.minHeight);break}super.updated(t)}render(){return _`
      ${St.getStyle(this.theme)}
      <div class="container theme">
        <div class="container" style="${this.applyDevices(this.contentWidth,this.contentHeight,this.devices)}">
          <slot></slot>
        </div>
      </div>
    `}applyDevices(t,e,o){for(let i=0;i<o.length;i++)if(o[i]==Be.getCurrentScreen())return`${""!=t?"width:".concat(t).concat(";"):""}${""!=e?"height:".concat(e).concat(";"):""}`;return""}};Ue.styles=n`
    :host {
      display: block;
    }
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `,We([st({type:String}),He("design:type",String)],Ue.prototype,"width",void 0),We([st({type:String}),He("design:type",String)],Ue.prototype,"height",void 0),We([st({type:String}),He("design:type",String)],Ue.prototype,"minWidth",void 0),We([st({type:String}),He("design:type",String)],Ue.prototype,"minHeight",void 0),We([st({type:String}),He("design:type",String)],Ue.prototype,"contentWidth",void 0),We([st({type:String}),He("design:type",String)],Ue.prototype,"contentHeight",void 0),We([st({type:Be,converter:Array}),He("design:type",Array)],Ue.prototype,"devices",void 0),We([st({type:St,converter:String}),He("design:type",Object)],Ue.prototype,"theme",void 0),Ue=We([et("nidoca-layout-container")],Ue);var ze=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ge=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ye=class extends Q{constructor(){super(),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText="",null==this.getAttribute("style")&&this.setAttribute("style","font-size: var(--icon-size); padding:var(--space-normal)")}render(){return _`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};Ye.styles=n`
    :host {
      line-height: 0;
    }
    .material-icons {
      font-family: "Material Icons";
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
      font-feature-settings: "liga";
    }

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      color: var(--app-color-surface-background-dark);
    }
  `,ze([st({type:String}),Ge("design:type",String)],Ye.prototype,"icon",void 0),ze([st({type:Boolean}),Ge("design:type",Boolean)],Ye.prototype,"clickable",void 0),ze([st({type:Boolean}),Ge("design:type",Boolean)],Ye.prototype,"deactivated",void 0),ze([st({type:String}),Ge("design:type",String)],Ye.prototype,"primaryText",void 0),Ye=ze([et("nidoca-icon"),Ge("design:paramtypes",[])],Ye);var qe,Xe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Fe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Ve{}Ve.NONE="NONE",Ve.DEFAULT_SHADOW="DEFAULT_SHADOW",Ve.SHADOW_1="SHADOW_1",Ve.SHADOW_2="SHADOW_2",Ve.SHADOW_3="SHADOW_3";let Ke=class extends Q{constructor(){super(...arguments),this.icon="",this.theme=St.PRIMARY,this.shadowType=Ve.DEFAULT_SHADOW,this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-normal)"}render(){return _`
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
          title="${this.primaryText}"
          cssStyle="${this.cssStyle}"
        ></nidoca-icon>
      </span>
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};Ke.styles=n`
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
  `,Xe([st({type:String}),Fe("design:type",String)],Ke.prototype,"icon",void 0),Xe([st({type:Object}),Fe("design:type","function"==typeof(qe=void 0!==St&&St)?qe:Object)],Ke.prototype,"theme",void 0),Xe([st({type:Object}),Fe("design:type",Ve)],Ke.prototype,"shadowType",void 0),Xe([st({type:Boolean}),Fe("design:type",Boolean)],Ke.prototype,"clickable",void 0),Xe([st({type:Boolean}),Fe("design:type",Boolean)],Ke.prototype,"deactivated",void 0),Xe([st({type:String}),Fe("design:type",String)],Ke.prototype,"cssStyle",void 0),Ke=Xe([et("nidoca-icon-extended")],Ke);var Je=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ze=class extends Q{render(){return _`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};Ze.styles=n`
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

    [anim="ripple"] {
      position: relative;
      overflow: hidden;
    }

    [anim="ripple"]:before {
      content: "";
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
  `,Je([ct("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Ze.prototype,"rippleContainerElement",void 0),Ze=Je([et("nidoca-ripple")],Ze);var Qe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},to=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let eo=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%"}render(){return _`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};eo.styles=n`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,Qe([st({type:String}),to("design:type",String)],eo.prototype,"src",void 0),Qe([st({type:String}),to("design:type",String)],eo.prototype,"width",void 0),Qe([st({type:String}),to("design:type",String)],eo.prototype,"height",void 0),eo=Qe([et("nidoca-img")],eo);var oo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let io=class extends Q{constructor(){super(...arguments),this.src=""}render(){return _`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};io.styles=n``,oo([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],io.prototype,"src",void 0),io=oo([et("nidoca-movie")],io);var no=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ro=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ao=class extends Q{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return _`
      <nidoca-form-text
        .theme="${this.theme}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${de.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};ao.styles=n`
    :host {
      display: block;
      width: 100%;
    }
  `,no([st({type:St,converter:String}),ro("design:type",Object)],ao.prototype,"theme",void 0),no([st({type:String}),ro("design:type",String)],ao.prototype,"label",void 0),no([st({type:String}),ro("design:type",String)],ao.prototype,"placeholder",void 0),no([st({type:String}),ro("design:type",String)],ao.prototype,"name",void 0),no([st({type:Number}),ro("design:type",Number)],ao.prototype,"min",void 0),no([st({type:Number}),ro("design:type",Number)],ao.prototype,"max",void 0),no([st({type:String}),ro("design:type",String)],ao.prototype,"errorText",void 0),no([ct("#inputfield"),ro("design:type",Object)],ao.prototype,"inputfield",void 0),ao=no([et("nidoca-form-captcha")],ao);var so,co=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},lo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}(so||(so={}));let po=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType=so.SELF}render(){return _` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `}};po.styles=n`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,co([st({type:String}),lo("design:type",String)],po.prototype,"text",void 0),co([st({type:String}),lo("design:type",String)],po.prototype,"href",void 0),co([st({type:String}),lo("design:type",String)],po.prototype,"targetType",void 0),po=co([et("nidoca-link")],po);var ho=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},yo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let uo=class extends Q{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null}update(t){super.update(t),null!=t.get("selectionMode")&&(this.selectionMode||(this.selected=!1))}render(){return _`
      <nidoca-ripple
        @mousedown="${()=>this.downAction()}"
        @mouseup="${()=>this.upAction()}"
        @pointerup="${()=>this.upAction()}"
        @pointerdown="${()=>this.downAction()}"
      >
        <div class="container">
          ${this.selectionMode?_`<nidoca-icon
                class="item"
                @click="${()=>this.switchSelected()}"
                icon="${this.selected?"check_box":"check_box_outline_blank"}"
              ></nidoca-icon>`:_`<span></span>`}
          <slot name="graphic" class="item"></slot>
          <div class="containerTypography ${this.selectionMode?"":"spaceLeft"}">
            ${this.primaryText?_`<nidoca-typography class="item" .type="${Ct.BODY1}"
                  >${this.primaryText}</nidoca-typography
                >`:_``}
            <slot></slot>
            ${this.secondaryText?_`<nidoca-typography class="item" .type="${Ct.SUBTITLE1}"
                  >${this.secondaryText}</nidoca-typography
                >`:_``}
            <slot name="secondary"></slot>
          </div>
          <slot name="meta" class="item"></slot>
        </div>
      </nidoca-ripple>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};uo.styles=n`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: 1fr 1fr minmax(auto, 100%) 1fr;
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

    .spaceLeft {
      padding-left: var(--space-medium);
    }
  `,ho([st({type:Boolean}),yo("design:type",Boolean)],uo.prototype,"selectionMode",void 0),ho([st({type:Boolean}),yo("design:type",Boolean)],uo.prototype,"selected",void 0),ho([st({type:String}),yo("design:type",String)],uo.prototype,"primaryText",void 0),ho([st({type:String}),yo("design:type",String)],uo.prototype,"secondaryText",void 0),uo=ho([et("nidoca-list-item")],uo);var fo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},mo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let go=class extends Q{constructor(){super(...arguments),this.selectionMode=!1}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.selectionMode=this.selectionMode}))}))}render(){return _`<style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        ::slotted(nidoca-list-item) {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <slot
        @nidoca-event-list-item-unselect="${()=>{this.selectionMode=0===this.getSelectedItems().length}}"
        class="slotList"
        id="slotElement"
      ></slot> `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof uo&&t.push(i)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof uo&&i.selected&&t.push(i)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let o=0;for(let i=0;i<e.length;i++){const n=e[i];n instanceof uo&&(n.selected&&t.push(o),o++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){this.getItems().forEach((t=>{t.selected=!1}))}};go.styles=n`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,fo([st({type:St,converter:String}),mo("design:type",Object)],go.prototype,"theme",void 0),fo([st({type:Boolean}),mo("design:type",Boolean)],go.prototype,"selectionMode",void 0),fo([ct("#slotElement"),mo("design:type",Object)],go.prototype,"slotElement",void 0),go=fo([et("nidoca-list")],go);var bo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},vo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let xo=class extends Q{constructor(){super(...arguments),this.theme=St.PRIMARY,this.prominent=!1}render(){return _`
      ${St.getStyle(this.theme)}
      <div
        style="min-height: var(--line-height-massiv);display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between;align-content:space-around;"
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
      </div>
      ${this.prominent?_`<slot class="prominent" name="prominent"></slot>`:_``}
    `}};xo.styles=n`
    :host {
      width: 100%;
      position: relativ;
      display: block;
    }

    slot {
      display: flex;
      align-items: center;
    }

    .prominent {
      flex-basis: 100%;
      flex-grow: 3;
    }
  `,bo([st({type:St,converter:String}),vo("design:type",String)],xo.prototype,"theme",void 0),bo([st({type:Boolean}),vo("design:type",Boolean)],xo.prototype,"prominent",void 0),xo=bo([et("nidoca-top-app-bar")],xo);var $o=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let wo=class extends Q{constructor(){super(...arguments),this.text=""}render(){return _`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-end;align-content:flex-start;"
      >
        <nidoca-layout-spacer style="flex-basis:100%;">
          <nidoca-typography .type="${Ct.H6}" text="${this.text}"></nidoca-typography>
        </nidoca-layout-spacer>
      </div>
    `}};wo.styles=n``,$o([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],wo.prototype,"text",void 0),wo=$o([et("nidoca-list-section")],wo);var So=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},To=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Eo=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new Ye],["row 2",new Ye]]}render(){return _`
      <div>
        <table>
          <thead>
            ${xt([this.headers],(()=>_` ${bt(this.headers,(t=>_` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${xt([this.rows],(()=>_`
                  ${bt(this.rows,(t=>_`
                        <tr>
                          ${bt(t,(t=>_` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Eo.styles=n`
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
  `,So([st({type:Array}),To("design:type",Array)],Eo.prototype,"headers",void 0),So([st({type:Array}),To("design:type",Array)],Eo.prototype,"rows",void 0),Eo=So([et("nidoca-table")],Eo);var Ro=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Oo=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?_`<slot></slot>`:_``}};Oo.styles=n``,Ro([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Oo.prototype,"selected",void 0),Oo=Ro([et("nidoca-tab-content")],Oo);var ko,Ao=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let jo=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=St.PRIMARY}render(){return _`
      <style>
        :host(.SELECTED) {
          border-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?_` <nidoca-typography .type="${Ct.OVERLINE}" text="${this.text}"></nidoca-typography> `:_``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};jo.styles=n`
    :host {
      border-color: var(--app-color-surface-background);
      border-width: 4px;
      border-bottom-style: solid;
      margin-left: 2px;
      margin-right: 2px;
    }

    .tab,
    ::slotted(.tab) {
      cursor: pointer;
      box-sizing: border-box;
    }
  `,Ao([st({type:Boolean}),Io("design:type",Boolean)],jo.prototype,"selected",void 0),Ao([st({type:String}),Io("design:type",String)],jo.prototype,"text",void 0),Ao([st({type:String}),Io("design:type","function"==typeof(ko=void 0!==St&&St)?ko:Object)],jo.prototype,"theme",void 0),jo=Ao([et("nidoca-tab")],jo);var Co,_o=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},No=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Po=class extends Q{constructor(){super(...arguments),this.theme=St.PRIMARY,this.tabIndex=0}render(){return _`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,o=t[this.tabIndex];for(let i=0;i<t.length;i++){const n=t[i];n instanceof jo&&(n.theme=this.theme,n.style.width=String(e).concat("%"),n==o?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof Oo&&(this.tabIndex==t?i.selected=!0:i.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof jo&&i==t){this.tabIndex=o;break}}}}};Po.styles=n`
    :host {
      display: block;
      width: 100%;
    }
    slot {
      display: inline;
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
  `,_o([ct("#tabSlot"),No("design:type",Object)],Po.prototype,"tabSlot",void 0),_o([ct("#tabContentSlot"),No("design:type",Object)],Po.prototype,"tabContentSlot",void 0),_o([st({type:String}),No("design:type","function"==typeof(Co=void 0!==St&&St)?Co:Object)],Po.prototype,"theme",void 0),_o([st({type:Number}),No("design:type",Number)],Po.prototype,"tabIndex",void 0),Po=_o([et("nidoca-tabs")],Po);var Bo,Do=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Lo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Mo=class extends Q{constructor(){super(),this.theme=St.PRIMARY,this.navigationClosed=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false")}updated(t){super.updated(t),new Promise((t=>requestAnimationFrame(t))).then((()=>{if(null!=this.headerElement){const t=this.headerElement.offsetHeight,e="top:".concat(String(t)).concat("px;"),o="padding-top:".concat(String(t)).concat("px;");console.debug("set header height to corresponding elements: %s",e),null!=this.sidebarElement&&this.sidebarElement.setAttribute("style",e),null!=this.contentElement&&this.contentElement.setAttribute("style",o)}}))}render(){return _`
      <style>
        #sidebar {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div id="header" class="${this.navigationClosed?"menuClosed":""}">
        <nidoca-top-app-bar style="width:100%;" .prominent="${this.prominent}" .theme="${this.theme}">
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
            <nidoca-layout-spacer>
              <slot class="slotHeader" name="prominent"></slot>
            </nidoca-layout-spacer>
          </span>
        </nidoca-top-app-bar>
      </div>
      <div id="sidebar" class="${this.navigationClosed?"menuClosed":""}"><slot name="sidebar"></slot></div>
      <div id="content" class="${this.navigationClosed?"menuClosed":""}"><slot name="content"></slot></div>
    `}};Mo.styles=n`
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

    @media only screen and (min-width: ${641}px) and (max-width: ${1007}px) {
      #content {
      }
    }

    @media only screen and (max-width: ${640}px) {
      #content {
      }
    }

    @media screen and (min-width: ${640}px) {
      #content {
        transition: margin-left 0.35s linear;
        margin-left: 300px;
      }
    }

    .slotProminent {
      width: 100%;
    }
  `,Do([st({type:String}),Lo("design:type","function"==typeof(Bo=void 0!==St&&St)?Bo:Object)],Mo.prototype,"theme",void 0),Do([st({type:Boolean}),Lo("design:type",Boolean)],Mo.prototype,"navigationClosed",void 0),Do([st({type:Boolean}),Lo("design:type",Boolean)],Mo.prototype,"prominent",void 0),Do([ct("#header"),Lo("design:type",Object)],Mo.prototype,"headerElement",void 0),Do([ct("#sidebar"),Lo("design:type",Object)],Mo.prototype,"sidebarElement",void 0),Do([ct("#content"),Lo("design:type",Object)],Mo.prototype,"contentElement",void 0),Mo=Do([et("nidoca-template"),Lo("design:paramtypes",[])],Mo);var Wo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ho=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Uo=class extends Q{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1}render(){return _`
      ${St.getStyle(this.theme)}
      <div style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;">
        <nidoca-icon icon="search"></nidoca-icon>
        <input
          id="inputElement"
          type="text"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${()=>this.valueChanged()}"
        />
        <nidoca-icon icon="close" @click="${()=>this.clearValue()}"></nidoca-icon>
      </div>
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function s(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};Uo.styles=n`
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
  `,Wo([st({type:St,converter:String}),Ho("design:type",Object)],Uo.prototype,"theme",void 0),Wo([st({type:String}),Ho("design:type",String)],Uo.prototype,"value",void 0),Wo([st({type:String}),Ho("design:type",String)],Uo.prototype,"placeholder",void 0),Wo([st({type:Boolean}),Ho("design:type",Boolean)],Uo.prototype,"disabled",void 0),Wo([ct("#inputElement"),Ho("design:type",Object)],Uo.prototype,"inputElement",void 0),Uo=Wo([et("nidoca-search-bar")],Uo);var zo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Go=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Yo{}Yo.CENTER="CENTER",Yo.LEFT="LEFT",Yo.RIGHT="RIGHT",Yo.TOP="TOP",Yo.BOTTOM="BOTTOM",Yo.SLIDE_CENTER="SLIDE_CENTER",Yo.SLIDE_LEFT="SLIDE_LEFT",Yo.SLIDE_RIGHT="SLIDE_RIGHT",Yo.SLIDE_TOP="SLIDE_TOP",Yo.SLIDE_BOTTOM="SLIDE_BOTTOM";let qo=class extends Q{constructor(){super(...arguments),this.transitionType=Yo.CENTER,this.duration=.5}render(){return _` <div .class="${this.transitionType}"><slot></slot></div> `}};qo.styles=n`
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
  `,zo([st({type:Object}),Go("design:type",Yo)],qo.prototype,"transitionType",void 0),zo([st({type:Number}),Go("design:type",Number)],qo.prototype,"duration",void 0),qo=zo([et("nidoca-transition")],qo);var Xo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Fo=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?_`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${Yo.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:_``}};Fo.styles=n`
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
  `,Xo([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Fo.prototype,"show",void 0),Fo=Xo([et("nidoca-dialog")],Fo);var Vo,Ko=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Jo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Zo=class extends Q{constructor(){super(...arguments),this.show=!1,this.theme=St.BACKGROUND}render(){return _`
      <style>
        .box {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        ${Be.MOBILE.asMediaStyle("slot{min-width:320px;}")}
        ${Be.TABLET.asMediaStyle("slot{min-width:480px;}")}
        ${Be.DESKTOP.asMediaStyle("slot{min-width:640px;}")}
      </style>
      <nidoca-dialog .show="${this.show}">
        <nidoca-card class="box" .shadowType="${ne.KEY_LIGHT}">
          <nidoca-layout-spacer>
            <slot name="header"></slot>
            <slot name="text"></slot>
            <slot name="action"></slot>
          </nidoca-layout-spacer>
        </nidoca-card>
      </nidoca-dialog>
    `}};Zo.styles=n`
    slot {
      display: flex;
    }
  `,Ko([st({type:Boolean}),Jo("design:type",Boolean)],Zo.prototype,"show",void 0),Ko([st({type:St}),Jo("design:type","function"==typeof(Vo=void 0!==St&&St)?Vo:Object)],Zo.prototype,"theme",void 0),Zo=Ko([et("nidoca-dialog-action")],Zo);var Qo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ti=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class ei{}ei.ROUND="ROUND",ei.CLICKABLE="CLICKABLE",ei.ZOOM_WRAPPED="ZOOM_WRAPPED",ei.FULL_WIDTH="FULL_WIDTH";let oi=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[ei.CLICKABLE,ei.FULL_WIDTH]}render(){return _`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}};oi.styles=n`
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
  `,Qo([st({type:String}),ti("design:type",String)],oi.prototype,"src",void 0),Qo([st({type:String}),ti("design:type",String)],oi.prototype,"width",void 0),Qo([st({type:String}),ti("design:type",String)],oi.prototype,"height",void 0),Qo([st({type:ei,converter:Array}),ti("design:type",Array)],oi.prototype,"richMediaProperties",void 0),oi=Qo([et("nidoca-img-round")],oi);var ii=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ni=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ri=class extends Q{constructor(){super(...arguments),this.imgSrc="",this.primaryText="",this.description=""}render(){return _` <div
      style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
    >
        <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[ei.ROUND]}"> </nidoca-img>
        <nidoca-layout-spacer
          left="var(--space-little)"
          right="var(--space-little)"
          top="var(--space-little)"
          bottom="var(--space-little)"
        >
          <nidoca-typography type="${Ct.H3}">${this.primaryText}</nidoca-typography>
        </nidoca-layout-spacer>
        <nidoca-typography type="${Ct.H5}">${this.description}</nidoca-typography>
  </div>
    </div>`}};ii([st({type:String}),ni("design:type",String)],ri.prototype,"imgSrc",void 0),ii([st({type:String}),ni("design:type",String)],ri.prototype,"primaryText",void 0),ii([st({type:String}),ni("design:type",String)],ri.prototype,"description",void 0),ri=ii([et("nidoca-avatar")],ri);let ai=class extends Q{render(){return _`
      <nidoca-box-shadow .shadowType="${ne.KEY_LIGHT}">
        <slot class="slotContainer"></slot>
      </nidoca-box-shadow>
    `}};ai.styles=n`
    .slotContainer {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
  `,ai=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-card")],ai);let si=class extends Q{render(){return _`
      <nidoca-layout-spacer bottom="var(--space-little)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();for(let t=0;t<o.length;t++){const e=o[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};si.styles=n`
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
      padding-top: var(--space-medium);
    }
  `,si=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-gallery")],si);let ci=class extends Q{render(){return _`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};ci.styles=n`
    :host {
      display: none;
    }
  `,ci=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-print")],ci);let li=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return _`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target,o=e.offsetWidth,i=e.assignedElements(),n=i.length,r=[];let a=0;for(let t=0;t<n;t++){const e=i[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)r.push(e);else{const e=t.toUpperCase();a+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),this.flexBasis=String(s/r.length)+"%",this.requestUpdate()}};li.styles=n`
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

    ::slotted(.item),
    .item {
      display: block;
    }

    @media only screen and (min-width: ${Be.TABLET.minWidth}px) and (max-width: ${Be.TABLET.maxWidth}px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: ${Be.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,li=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-section")],li);var pi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},di=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let hi=class extends Q{constructor(){super(...arguments),this.title="",this.summary="",this.text=""}render(){return _`
      <div style="display:flex; flex-direction:column;">
        <slot name="title"></slot>
        ${this.title?_`<nidoca-typography .type="${Ct.H2}">${this.title}</nidoca-typography>
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`:_``}
        <slot name="summary"></slot>${this.summary?_`<nidoca-typography .type="${Ct.BODY1}"><i>${this.summary}</i></nidoca-typography>
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`:_``}
        <slot name="text"></slot>
        ${this.text?_`<nidoca-typography .type="${Ct.BODY1}">${this.text}</nidoca-typography>`:_``}
        <slot></slot>
      </div>
    `}};hi.styles=n`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  `,pi([st({type:String}),di("design:type",String)],hi.prototype,"title",void 0),pi([st({type:String}),di("design:type",String)],hi.prototype,"summary",void 0),pi([st({type:String}),di("design:type",String)],hi.prototype,"text",void 0),hi=pi([et("nidoca-article")],hi);var yi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ui=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fi=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return _`
      <nidoca-layout-spacer top="48px" bottom="48px">
        <div style="display:flex;flex-direction:column;align-items:center">
          <nidoca-icon
            icon="${this.icon}"
            style="font-size: 96px; padding:var(--space-normal);"
            backgroundColor="var(--app-color-surface-background)"
          ></nidoca-icon>
          <nidoca-typography .type="${Ct.H2}">${this.primaryText}</nidoca-typography>
          <nidoca-layout-spacer>
            <nidoca-typography .type="${Ct.BODY2}" .textAlign="${_t.CENTER}">
              ${this.text}
              <slot></slot>
            </nidoca-typography>
          </nidoca-layout-spacer>
        </div>
      </nidoca-layout-spacer>
    `}};fi.styles=n``,yi([st({type:String}),ui("design:type",String)],fi.prototype,"primaryText",void 0),yi([st({type:String}),ui("design:type",String)],fi.prototype,"text",void 0),yi([st({type:String}),ui("design:type",String)],fi.prototype,"icon",void 0),fi=yi([et("nidoca-icon-with-description")],fi);let mi=class extends Q{render(){return _`
      <nidoca-form id="authenitcate-form">
        <nidoca-typography .type="${Ct.H2}">Kontaktformular</nidoca-typography>
        <nidoca-form-text name="name" .textType="${de.TEXT}" value="" label="name"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text .textType="${de.EMAIL}" label="email" name="email"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text name="title" .textType="${de.TEXT}" value="" label="title"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-form-textarea label="message" name="message" trailingIcon="vpn_key"></nidoca-form-textarea>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-button
          text="Senden"
          @nidoca-event-button-clicked="${()=>alert("Login")}"
          .buttonType="${te.CONTAINED}"
        ></nidoca-button>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-typography
          slot="errorMessages"
          .type="${Ct.OVERLINE}"
          text="huhu"
        ></nidoca-typography>
      </nidoca-form>
    `}};mi.styles=n``,mi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-form-contact")],mi),wt.getUniqueInstance().initDefaultComponents();var gi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},bi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let vi=class extends $t{constructor(){super(...arguments),this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return _` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        .border,
        ::slotted(.border) {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
        }
        .border:focus-within,
        ::slotted(.border:focus-within) {
          border-color: var(--app-color-${this.theme}-border-selected);
        }
      </style>
      <div class="parentContainer border">
        ${this.trailingIcon?_`<nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space-medium);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:_``}
        <div class="container">
          <nidoca-typography
            style="padding-left:var(--space-medium); padding-right:var(--space-medium);"
            class="label"
            .type="${Ct.CAPTION}"
            text="${this.label}"
          ></nidoca-typography>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${xt([this.value,this.options],(()=>_`
                ${bt(this.options,(t=>null==t?_` <option></option>`:this.isSelectedOption(t)?_` <option value="${t.key}" selected>${t.value}</option> `:_` <option value="${t.key}">${t.value}</option> `))}
              `))}
          </select>
        </div>
      </div>

      ${this.infoText||this.warningText||this.errorText?_`<div>
            ${this.infoText?_` <nidoca-typography
                  .type="${Ct.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-typography>`:_``}
            ${this.warningText?_` <nidoca-typography
                  style="color:var(--app-color-warning-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-typography>`:_``}
            ${this.errorText?_` <nidoca-typography
                  style="color:var(--app-color-error-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-typography>`:_``}
          </div> `:_``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}static stringArrayToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),t.forEach((t=>{o.push({key:t,value:t})})),o}static toComboboxOptions(t=null,e=null){if(null==t)return[];const o=[];return Object.values(t).forEach((i=>{let n=String(Object.keys(t)[Object.values(t).indexOf(i)]);e&&(n=n.concat(e)),o.push({key:i,value:n})})),o}};vi.styles=n`
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
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
      padding-left: var(--space-medium);
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
  `,gi([st({type:St,converter:String}),bi("design:type",Object)],vi.prototype,"theme",void 0),gi([st({type:String}),bi("design:type",String)],vi.prototype,"trailingIcon",void 0),gi([st({type:String}),bi("design:type",String)],vi.prototype,"label",void 0),gi([st({type:String}),bi("design:type",String)],vi.prototype,"errorText",void 0),gi([st({type:String}),bi("design:type",String)],vi.prototype,"infoText",void 0),gi([st({type:String}),bi("design:type",String)],vi.prototype,"warningText",void 0),gi([st(),bi("design:type",Object)],vi.prototype,"value",void 0),gi([st({type:Array}),bi("design:type",Array)],vi.prototype,"options",void 0),gi([st({type:String}),bi("design:type",String)],vi.prototype,"name",void 0),gi([st({type:Boolean}),bi("design:type",Boolean)],vi.prototype,"required",void 0),gi([st({type:Boolean}),bi("design:type",Boolean)],vi.prototype,"multiple",void 0),gi([st({type:Number}),bi("design:type",Number)],vi.prototype,"size",void 0),gi([ct("#selectElement"),bi("design:type",Object)],vi.prototype,"selectElement",void 0),vi=gi([et("nidoca-form-combobox")],vi);class xi{constructor(t){this.propertyWrapper=t}getInputElement(t){if(null==t)return _``;const e=t.classWrapper;if(null==e)return _``;switch(this.propertyWrapper.getRenderType()){case it.STRING:return _`<nidoca-form-text .textType="${de.TEXT}"
        label="${this.propertyWrapper.propertyName}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.parent.requestUpdate()}}"
        /></nidoca-form-text>`;case it.NUMBER:return _`<nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${de.NUMBER}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case it.BOOLEAN:return _`<nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case it.COMBOBOX:return _` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${vi.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter((t=>this.propertyWrapper.getType()[t]==e.instance[this.propertyWrapper.propertyName]))[0]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(o.target.getOutputData().value),t.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case it.ARRAY:return _`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${vi.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${e.instance[this.propertyWrapper.propertyName]}"
            @input="${t=>{e.instance[this.propertyWrapper.propertyName]=t.target.getOutputData().value,e.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return _``}}getAsHtml(t){switch(this.propertyWrapper.getConverterTypeName()){case it.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case it.ARRAY:return"";case it.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case it.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case it.STRING:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case it.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getConverterTypeName()){case it.COMBOBOX:case it.ARRAY:return"";case it.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getConverterTypeName()){case it.COMBOBOX:case it.ARRAY:return"";case it.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class $i{constructor(t,e){this.parent=t,this.classWrapper=e}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`\n<${this.classWrapper.getTagName()}\n${this.classWrapper.getProperties().map((t=>`.${t.propertyName}="\${this.${t.propertyName}}"\n`)).join("")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(t){return t.indexOf(">")>-1&&(t=t.substr(t.indexOf(">")+1,t.length)),t}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(_`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new xi(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}var wi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Si=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ti=class extends Q{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(t){t.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new $i(this,new rt(this.element)),this.requestUpdate())}render(){var t,e,o,i,n,r,a;return _` <nidoca-section .theme="${St.PRIMARY}">
        <div>
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-typography .type="${Ct.H2}">Tag</nidoca-typography>
          </nidoca-layout-spacer>
          <nidoca-code
            >${this.webcomponentGuiWrapper?this.webcomponentGuiWrapper.classWrapper.getHTMLTag():""}
          </nidoca-code>

          <div style="padding-top:var(--space-medium);">
            <nidoca-section> ${this.element} </nidoca-section>
          </div>
        </div>

        <div style="padding-left:var(--space-medium)">
          ${(null===(t=this.webcomponentGuiWrapper)||void 0===t?void 0:t.hasProperties())?_`
                <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${Ct.H2}"> Attribute </nidoca-typography>
                </nidoca-layout-spacer>

                ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((t=>_`${t.getInputElement(this.webcomponentGuiWrapper)}
                    <div style="padding-bottom:var(--space-big);"></div>`))}
              `:_``}
          ${(null===(e=this.webcomponentGuiWrapper)||void 0===e?void 0:e.classWrapper.hasSlots())?_` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${Ct.H2}">Slots </nidoca-typography>
                </nidoca-layout-spacer>

                <nidoca-table
                  .headers="${["name"]}"
                  .rows="${this.toSlotRows(this.webcomponentGuiWrapper.classWrapper.getSlotNames())}"
                >
                </nidoca-table>`:_``}
          ${this.customEventNames.length>0?_` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${Ct.H2}">Custom Events </nidoca-typography>
                </nidoca-layout-spacer>
                <nidoca-table .headers="${["name"]}" .rows="${this.toCustomEventRows(this.customEventNames)}">
                </nidoca-table>`:_``}
        </div>
      </nidoca-section>
      <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
        <nidoca-typography .type="${Ct.H2}"> Quelltext </nidoca-typography>
      </nidoca-layout-spacer>
      <nidoca-tabs tabIndex="0">
        <nidoca-tab slot="tab">Javascript</nidoca-tab>
        <nidoca-tab slot="tab">Typescript</nidoca-tab>
        <nidoca-tab slot="tab">Lit</nidoca-tab>
        <nidoca-tab slot="tab">Angular</nidoca-tab>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code style="width:100%;">${null===(o=this.webcomponentGuiWrapper)||void 0===o?void 0:o.getAsJavascript()} </nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${null===(i=this.webcomponentGuiWrapper)||void 0===i?void 0:i.getTypescript()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${null===(n=this.webcomponentGuiWrapper)||void 0===n?void 0:n.getAsLit()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${null===(r=this.webcomponentGuiWrapper)||void 0===r?void 0:r.getAsHtml()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>
      </nidoca-tabs>

      <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
        <nidoca-typography .type="${Ct.H2}"> Attribute </nidoca-typography>
      </nidoca-layout-spacer>

      <nidoca-table
        .headers="${["name","type","converter type","render type"]}"
        .rows="${this.toAttributeRows(null===(a=this.webcomponentGuiWrapper)||void 0===a?void 0:a.getPropertyGuiWrappers())}"
      >
      </nidoca-table>
      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements()[0];o instanceof HTMLElement&&(this.element=o)}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t.propertyWrapper.propertyName),o.push(t.propertyWrapper.getTypeName()),o.push(t.propertyWrapper.getConverterTypeName()),o.push(t.propertyWrapper.getRenderType()),e.push(o),o})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}};Ti.styles=n`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `,wi([st({type:Array}),Si("design:type",Array)],Ti.prototype,"customEventNames",void 0),wi([st({type:Object}),Si("design:type",Object)],Ti.prototype,"element",void 0),Ti=wi([et("webcomponent-viewer")],Ti)})();