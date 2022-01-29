/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new Map;class i{constructor(t,o){if(this._$cssResult$=!0,o!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=o.get(this.cssText);return t&&void 0===e&&(o.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=(t,...o)=>{const r=1===t.length?t[0]:o.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new i(r,e)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let o="";for(const e of t.cssRules)o+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(o)})(t):t;var a;const s=window.trustedTypes,l=s?s.emptyScript:"",c=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:d};class y extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Eh(o,e);void 0!==i&&(this._$Eu.set(i,o),t.push(i))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const o=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{t?e.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=t.cssText,e.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=h){var i,r;const n=this.constructor._$Eh(t,o);if(void 0!==n&&!0===o.reflect){const a=(null!==(r=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==r?r:p.toAttribute)(e,o.type);this._$Ei=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Ei=null}}_$AK(t,e){var o,i,r;const n=this.constructor,a=n._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=n.getPropertyOptions(a),s=t.converter,l=null!==(r=null!==(i=null===(o=s)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof s?s:null)&&void 0!==r?r:p.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var u;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:y}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.2.0");const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,b="?"+g,v=`<${b}>`,x=document,$=(t="")=>x.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,E=t=>{var e;return T(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,O=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,I=/"/g,j=/^(?:script|style|textarea)$/i,C=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),N=C(1),_=(C(2),Symbol.for("lit-noChange")),P=Symbol.for("lit-nothing"),L=new WeakMap,B=x.createTreeWalker(x,129,null,!1),D=(t,e)=>{const o=t.length-1,i=[];let r,n=2===e?"<svg>":"",a=R;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,p=0;for(;p<o.length&&(a.lastIndex=p,l=a.exec(o),null!==l);)p=a.lastIndex,a===R?"!--"===l[1]?a=S:void 0!==l[1]?a=O:void 0!==l[2]?(j.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=k):void 0!==l[3]&&(a=k):a===k?">"===l[0]?(a=null!=r?r:R,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?k:'"'===l[3]?I:A):a===I||a===A?a=k:a===S||a===O?a=R:(a=k,r=void 0);const d=a===k&&t[e+1].startsWith("/>")?" ":"";n+=a===R?o+v:c>=0?(i.push(s),o.slice(0,c)+"$lit$"+o.slice(c)+g+d):o+g+(-2===c?(i.push(void 0),e):d)}const s=n+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(s):s,i]};class M{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,n=0;const a=t.length-1,s=this.parts,[l,c]=D(t,e);if(this.el=M.createElement(l,o),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=B.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const o=c[n++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?q:"@"===e[1]?X:U})}else s.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(j.test(i.tagName)){const t=i.textContent.split(g),e=t.length-1;if(e>0){i.textContent=f?f.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],$()),B.nextNode(),s.push({type:2,index:++r});i.append(t[e],$())}}}else if(8===i.nodeType)if(i.data===b)s.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(g,t+1));)s.push({type:7,index:r}),t+=g.length-1}r++}}static createElement(t,e){const o=x.createElement("template");return o.innerHTML=t,o}}function z(t,e,o=t,i){var r,n,a,s;if(e===_)return e;let l=void 0!==i?null===(r=o._$Cl)||void 0===r?void 0:r[i]:o._$Cu;const c=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,i)),void 0!==i?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,i)),e}class H{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(o,!0);B.currentNode=r;let n=B.nextNode(),a=0,s=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new W(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new F(n,this,t)),this.v.push(e),l=i[++s]}a!==(null==l?void 0:l.index)&&(n=B.nextNode(),a++)}return r}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class W{constructor(t,e,o,i){var r;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),w(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==_&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):E(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==P&&w(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=M.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(o);else{const t=new H(r,this),e=t.p(this.options);t.m(o),this.S(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new M(t)),e}A(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new W(this.M($()),this.M($()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,o,i,r){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const r=this.strings;let n=!1;if(void 0===r)t=z(this,t,e,0),n=!w(t)||t!==this._$AH&&t!==_,n&&(this._$AH=t);else{const i=t;let a,s;for(t=r[0],a=0;a<r.length-1;a++)s=z(this,i[o+a],e,a),s===_&&(s=this._$AH[a]),n||(n=!w(s)||s!==this._$AH[a]),s===P?t=P:t!==P&&(t+=(null!=s?s:"")+r[a+1]),this._$AH[a]=s}n&&!i&&this.k(t)}k(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends U{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===P?void 0:t}}const Y=f?f.emptyScript:"";class q extends U{constructor(){super(...arguments),this.type=4}k(t){t&&t!==P?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class X extends U{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=z(this,t,e,0))&&void 0!==o?o:P)===_)return;const i=this._$AH,r=t===P&&i!==P||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==P&&(i===P||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const V={P:"$lit$",V:g,L:b,I:1,N:D,R:H,D:E,j:z,H:W,O:U,F:q,B:X,W:G,Z:F},K=window.litHtmlPolyfillSupport;var J,Z;null==K||K(M,W),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.1.1");class Q extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var i,r;const n=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=n._$litPart$;if(void 0===a){const t=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;n._$litPart$=a=new W(e.insertBefore($(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return _}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.1.1");const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e);var ot,it;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements,console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(t){t.STRING="String",t.NUMBER="Number",t.BOOLEAN="Boolean",t.COMBOBOX="Class",t.ARRAY="Array",t.UNDEFINED="undefined"}(it||(it={}));class rt{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.propertyName,this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?it.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?it.UNDEFINED:this.getTypeName():it.COMBOBOX}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let o=0;o<e.length;o++){const i=e[o];if(i.key==t)return i.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class nt{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let o=[];if(e&&(e.tagName==t&&o.push(e),e.children.length>0)){const i=null==e?void 0:e.children;for(let e=0;e<i.length;e++)o=o.concat(this.getElementsByTagName(t,i.item(e)))}return o}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed");const e=[];for(const o of Array.from(t.keys()))e.push(new rt(o,t.get(o)));return e}}const at=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function st(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):at(t,e)}function lt(t,e){return(({finisher:t,descriptor:e})=>(o,i)=>{var r;if(void 0===i){const i=null!==(r=o.originalKey)&&void 0!==r?r:o.key,n=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return null!=t&&(n.finisher=function(e){t(e,i)}),n}{const r=o.constructor;void 0!==e&&Object.defineProperty(o,i,e(i)),null==t||t(r,i)}})({descriptor:o=>{const i={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;i.get=function(){var o,i;return void 0===this[e]&&(this[e]=null!==(i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}const ct=t=>(...e)=>({_$litDirective$:t,values:e});class pt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:dt}=V,ht=()=>document.createComment(""),yt=(t,e,o)=>{var i;const r=t._$AA.parentNode,n=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=r.insertBefore(ht(),n),i=r.insertBefore(ht(),n);o=new dt(e,i,t,t.options)}else{const e=o._$AB.nextSibling,a=o._$AM,s=a!==t;if(s){let e;null===(i=o._$AQ)||void 0===i||i.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==a._$AU&&o._$AP(e)}if(e!==n||s){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,n),t=e}}}return o},ut=(t,e,o=t)=>(t._$AI(e,o),t),ft={},mt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const i=t._$AB.nextSibling;for(;o!==i;){const t=o.nextSibling;o.remove(),o=t}},gt=(t,e,o)=>{const i=new Map;for(let r=e;r<=o;r++)i.set(t[r],r);return i},bt=ct(class extends pt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let i;void 0===o?o=e:void 0!==e&&(i=e);const r=[],n=[];let a=0;for(const e of t)r[a]=i?i(e,a):a,n[a]=o(e,a),a++;return{values:n,keys:r}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,i]){var r;const n=t._$AH,{values:a,keys:s}=this.dt(e,o,i);if(!Array.isArray(n))return this.at=s,a;const l=null!==(r=this.at)&&void 0!==r?r:this.at=[],c=[];let p,d,h=0,y=n.length-1,u=0,f=a.length-1;for(;h<=y&&u<=f;)if(null===n[h])h++;else if(null===n[y])y--;else if(l[h]===s[u])c[u]=ut(n[h],a[u]),h++,u++;else if(l[y]===s[f])c[f]=ut(n[y],a[f]),y--,f--;else if(l[h]===s[f])c[f]=ut(n[h],a[f]),yt(t,c[f+1],n[h]),h++,f--;else if(l[y]===s[u])c[u]=ut(n[y],a[u]),yt(t,n[h],n[y]),y--,u++;else if(void 0===p&&(p=gt(s,u,f),d=gt(l,h,y)),p.has(l[h]))if(p.has(l[y])){const e=d.get(s[u]),o=void 0!==e?n[e]:null;if(null===o){const e=yt(t,n[h]);ut(e,a[u]),c[u]=e}else c[u]=ut(o,a[u]),yt(t,n[h],o),n[e]=null;u++}else mt(n[y]),y--;else mt(n[h]),h++;for(;u<=f;){const e=yt(t,c[f+1]);ut(e,a[u]),c[u++]=e}for(;h<=y;){const t=n[h++];null!==t&&mt(t)}return this.at=s,((t,e=ft)=>{t._$AH=e})(t,c),_}}),vt={},xt=ct(class extends pt{constructor(){super(...arguments),this.nt=vt}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return _}else if(this.nt===e)return _;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});class $t extends Q{}class wt{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){const t=new vi;t.style.padding="var(--space-medium)",t.title="Ut enim ad minim veniam",t.summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",t.text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",this.registeredElementsMap.set("nidoca-article",N`${t}`);const e=new Lt;e.style.padding="var(--space-medium)",e.text="Typography",e.type="BODY1",e.textAlign="left",this.registeredElementsMap.set("nidoca-typography",N`${e}`);const o=new lo;o.src="http://nidoca.eu/img/DSC02586.jpg",o.width="100%",o.height="100%",this.registeredElementsMap.set("nidoca-img",N`${o}`);const i=new po;i.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",N`${i}`);const r=new Vo;r.placeholder="Suche...",this.registeredElementsMap.set("nidoca-search-bar",N`${r}`);const n=new hi;n.style.padding="var(--space-medium)",n.imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg",n.primaryText="Dominik Bruhn",n.description="Softwareentwickler",this.registeredElementsMap.set("nidoca-avatar",N`${n}`);const a=new Zt;a.style.padding="var(--space-big)",this.registeredElementsMap.set("nidoca-progress",N`${a}`);const s=new Ze;s.style.padding="var(--space-big)",s.icon="home",s.primaryText="Home Icon",s.clickable=!0,s.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",N`${s}`);const l=new $o;l.selectionMode=!0,l.selected=!0,l.primaryText="List Item",l.secondaryText="List Item Secondary Text",this.registeredElementsMap.set("nidoca-list-item",N`${l}`),this.registeredElementsMap.set("nidoca-list",N`<nidoca-list theme="primary" selectionMode stlye="padding:var(--space-big);"
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
      ></nidoca-list>`),this._registeredElementsMap.set("nidoca-menu",N` <nidoca-menu theme="primary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"> </nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"> </nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"> </nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"> </nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"> </nidoca-menu-item>
      </nidoca-menu>`),this._registeredElementsMap.set("nidoca-accordion",N`<nidoca-accordion .theme="${Tt.PRIMARY}"
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
      ></nidoca-accordion>`),this._registeredElementsMap.set("nidoca-border",N`<nidoca-border></nidoca-border>`),this._registeredElementsMap.set("nidoca-box-shadow",N`<nidoca-box-shadow></nidoca-box-shadow>`),this._registeredElementsMap.set("nidoca-button",N`<nidoca-button leadingIcon="home" buttonType="OUTLINED">Mein Button</nidoca-button>`),this._registeredElementsMap.set("nidoca-captcha",N`<nidoca-captcha></nidoca-captcha>`),this._registeredElementsMap.set("nidoca-card",N`<nidoca-card></nidoca-card>`),this._registeredElementsMap.set("nidoca-chip",N`<nidoca-chip>jojij</nidoca-chip>`),this._registeredElementsMap.set("nidoca-code",N`<nidoca-code></nidoca-code>`),this._registeredElementsMap.set("nidoca-dialog-action",N`<nidoca-dialog-action></nidoca-dialog-action>`),this._registeredElementsMap.set("nidoca-elevation",N`<nidoca-elevation></nidoca-elevation>`),this._registeredElementsMap.set("nidoca-dialog",N`<nidoca-dialog></nidoca-dialog>`),this._registeredElementsMap.set("nidoca-form-combobox",N`<nidoca-form-combobox
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
      ></nidoca-form-combobox>`),this._registeredElementsMap.set("nidoca-form-date",N`<nidoca-form-date
        theme="primary"
        label="Geburtstag"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-date>`),this._registeredElementsMap.set("nidoca-form-switch",N`<nidoca-form-switch></nidoca-form-switch>`),this._registeredElementsMap.set("nidoca-form-text",N`
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
      `),this._registeredElementsMap.set("nidoca-form-textarea",N`<nidoca-form-textarea
        style="width:100%;"
        theme="primary"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-textarea>`),this._registeredElementsMap.set("nidoca-gallery",N`<nidoca-gallery
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
      ></nidoca-gallery>`),this._registeredElementsMap.set("nidoca-link",N`<nidoca-link></nidoca-link>`),this._registeredElementsMap.set("nidoca-ripple",N`<nidoca-ripple></nidoca-ripple>`),this._registeredElementsMap.set("nidoca-tabs",N`<nidoca-tabs></nidoca-tabs>`),this._registeredElementsMap.set("nidoca-table",N`<nidoca-table></nidoca-table>`),this._registeredElementsMap.set("nidoca-top-app-bar",N`<nidoca-top-app-bar .theme="${Tt.PRIMARY}">
        <nidoca-typography slot="center" type="${Ct.BODY1}">Top App Bar</nidoca-typography>
        <nidoca-icon slot="left" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" icon="more_vert" clickable></nidoca-icon>

        <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>`),this._registeredElementsMap.set("nidoca-upload",N`<nidoca-upload></nidoca-upload>`),this._registeredElementsMap.set("nidoca-wizard",N`<nidoca-wizard></nidoca-wizard>`)}static getUniqueInstance(){return wt.uniqueInstance||(wt.uniqueInstance=new wt),wt.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const t=[];for(const e of this.registeredElementsMap.keys())t.push(e);return t}registerElementName(t){console.log(`register element: ${t}`);const e=document.createElement(t);this.registeredElementsMap.set(t,N`${e}`)}}class Tt{static getStyle(t){return t?N`<style>
          :host,
          *,
          ::slotted(*) {
            color: var(--app-color-${t});
            background-color: var(--app-color-${t}-background);
          }
        </style>`:N``}}Tt.PRIMARY="primary",Tt.SECONDARY="secondary",Tt.SURFACE="surface",Tt.BACKGROUND="background";var Et=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Rt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let St=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return N`
      <div
        @click="${()=>this.toggle()}"
        style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;align-content:center; cursor:pointer;"
      >
        <nidoca-typography style="padding-left:var(--space-medium);" text="${this.header}"></nidoca-typography>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?N` <slot></slot>`:N``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};St.styles=r`
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
  `,Et([st({type:String}),Rt("design:type",String)],St.prototype,"header",void 0),Et([st({type:Boolean}),Rt("design:type",Boolean)],St.prototype,"opened",void 0),St=Et([et("nidoca-accordion-item")],St);var Ot,kt,At=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},It=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.SINGLE="SINGLE",t.MULTI="MULTI"}(kt||(kt={}));let jt=class extends Q{constructor(){super(...arguments),this.theme=Tt.SURFACE,this.accordionType=kt.SINGLE}render(){return N`
      ${Tt.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case kt.SINGLE:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof St&&i!=e&&(i.opened=!1)}}case kt.MULTI:}t.stopPropagation()}};jt.styles=r`
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
  `,At([st({type:Tt,converter:String}),It("design:type","function"==typeof(Ot=void 0!==Tt&&Tt)?Ot:Object)],jt.prototype,"theme",void 0),At([st({type:kt,converter:String}),It("design:type",String)],jt.prototype,"accordionType",void 0),At([lt("#accordionSlot"),It("design:type",Object)],jt.prototype,"accordionSlot",void 0),jt=At([et("nidoca-accordion")],jt);var Ct,Nt,_t=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6",t.SUBTITLE1="SUBTITLE1",t.SUBTITLE2="SUBTITLE2",t.BODY1="BODY1",t.BODY2="BODY2",t.BUTTON="BUTTON",t.CAPTION="CAPTION",t.OVERLINE="OVERLINE"}(Ct||(Ct={})),function(t){t.JUSTIFY="text-align:justify;",t.JUSTIFY_ALL="text-align:justify-all;",t.LEFT="text-align: left;",t.RIGHT="text-align: right;",t.CENTER="text-align: center;",t.START="text-align: start;",t.END="text-align: end;",t.MATCH_PARENT="text-align: match-parent;",t.INHERIT="text-align: inherit;",t.INITIAL="text-align: initial;",t.UNSET="text-align: unset;"}(Nt||(Nt={}));let Lt=class extends Q{constructor(){super(...arguments),this.type=Ct.BODY1,this.textAlign=Nt.START,this.text=""}render(){return N` <span class="TYPOGRAPHY ${this.type}" style="${this.textAlign}">${this.text}<slot></slot></span> `}};Lt.styles=r`
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
  `,_t([st({type:Ct,converter:String}),Pt("design:type",String)],Lt.prototype,"type",void 0),_t([st({type:Nt,converter:String}),Pt("design:type",String)],Lt.prototype,"textAlign",void 0),_t([st({type:String}),Pt("design:type",String)],Lt.prototype,"text",void 0),Lt=_t([et("nidoca-typography")],Lt);var Bt,Dt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Mt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(Bt||(Bt={}));let zt=class extends Q{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return N`
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

          ${this.isLast?N``:N`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-typography
          style="width:48px;"
          .type="${Ct.OVERLINE}"
          textAlign="${Nt.CENTER}"
          text="${this.primaryText}"
          ><slot></slot>
        </nidoca-typography>
      </div>
    `}determineBackgroundColor(t){return t==Bt.COMPLETED?"var(--app-color-primary)":t==Bt.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==Bt.FINISH?"var(--app-color-success)":t==Bt.COMPLETED?"var(--mdc-theme-on-primary)":t==Bt.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};zt.styles=r`
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
  `,Dt([st({type:String}),Mt("design:type",String)],zt.prototype,"icon",void 0),Dt([st({type:String}),Mt("design:type",String)],zt.prototype,"primaryText",void 0),Dt([st({type:Number}),Mt("design:type",Object)],zt.prototype,"state",void 0),Dt([st({type:Boolean}),Mt("design:type",Boolean)],zt.prototype,"isLast",void 0),zt=Dt([et("nidoca-wizard-step")],zt);var Ht=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Wt=class extends Q{render(){return N`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let i=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof zt&&(e.index=t,e.state==Bt.CURRENT&&(i=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(i)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof zt&&void 0!==i.index&&(i.index<t?i.state=Bt.COMPLETED:i.index==t?i.state=Bt.CURRENT:i.state=Bt.OPEN)}}}};Wt.styles=r``,Ht([lt("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Wt.prototype,"wizardSlot",void 0),Wt=Ht([et("nidoca-wizard")],Wt);var Ut=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Gt=class extends Q{constructor(){super(...arguments),this.clickable=!0}render(){return N`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Gt.styles=r`
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
  `,Ut([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Gt.prototype,"clickable",void 0),Gt=Ut([et("nidoca-chip")],Gt);var Yt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let qt=class extends Q{constructor(){super(...arguments),this.code=""}render(){return N`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};qt.styles=r`
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
  `,Yt([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],qt.prototype,"code",void 0),qt=Yt([et("nidoca-code")],qt);var Xt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Ft=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vt=class extends Q{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const o=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?N`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:N``}calculatePositionStyle(t){let e="";if(t){const o=t.getBoundingClientRect();o.right>window.innerWidth/2?e+=`right:${window.innerWidth-o.right}px;`:e+=`left:${o.left}px;`,o.top>window.innerHeight/2?e+=`bottom:${o.height+window.innerHeight-o.top}px;`:e+=`top:${o.bottom}px;`}return e}};Vt.styles=r`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Xt([st({type:Boolean}),Ft("design:type",Boolean)],Vt.prototype,"show",void 0),Xt([st({type:Object}),Ft("design:type",Object)],Vt.prototype,"associatedElement",void 0),Vt=Xt([et("nidoca-elevation"),Ft("design:paramtypes",[])],Vt);var Kt=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};class Jt{}Jt.PROGRESS="PROGRESS",Jt.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Zt=class extends Q{constructor(){super(...arguments),this.progressType=Jt.PROGRESS_CIRCULAR}render(){return N` <progress .class="${this.progressType}"></progress> `}};Zt.styles=r`
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
  `,Kt([st({type:Jt}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Jt)],Zt.prototype,"progressType",void 0),Zt=Kt([et("nidoca-progress")],Zt);var Qt,te,ee,oe=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},ie=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.NONE="NONE",t.ALL="ALL",t.ALL_ROUND="ALL_ROUND",t.HORIZONTAL="HORIZONTAL",t.VERTICAL="VERTICAL",t.LEFT="LEFT",t.RIGHT="RIGHT",t.TOP="TOP",t.BOTTOM="BOTTOM",t.BOTTOM_SELECTED="BOTTOM_SELECTED"}(te||(te={})),function(t){t.NONE="NONE",t.THIN="THIN",t.MEDIUM="MEDIUM",t.THICK="THICK"}(ee||(ee={}));let re=class extends Q{constructor(){super(...arguments),this.theme=Tt.SURFACE,this.borderProperties=[te.ALL],this.borderSize=ee.THIN}render(){return N`
      <style>
        .BORDER {
          border-color: var(--app-color-${this.theme}-background);
        }
        .BOTTOM_SELECTED:focus-within {
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>

      <slot class="${this.toBorderPropertiesString(this.borderProperties)} ${this.borderSize}"></slot>
    `}toBorderPropertiesString(t){let e="BORDER";return t.forEach((t=>{e=e.concat(" ").concat(t)})),e}};re.styles=r`
    :host,
    slot {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
      clear: none;
      display: inline-block;
    }

    slot {
      display: inline-block;
      width: 100%;
    }

    .NONE {
      border-width: 0;
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
  `,oe([st({type:Tt,converter:String}),ie("design:type","function"==typeof(Qt=void 0!==Tt&&Tt)?Qt:Object)],re.prototype,"theme",void 0),oe([st({type:te,converter:Array}),ie("design:type",Array)],re.prototype,"borderProperties",void 0),oe([st({type:ee,converter:String}),ie("design:type",String)],re.prototype,"borderSize",void 0),re=oe([et("nidoca-border")],re);var ne,ae=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},se=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.CONTAINED="CONTAINED",t.OUTLINED="OUTLINED",t.TEXT="TEXT"}(ne||(ne={}));let le=class extends Q{constructor(){super(...arguments),this.theme=Tt.PRIMARY,this.buttonType=ne.CONTAINED,this.leadingIcon="",this.text=""}render(){return N`
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
        <nidoca-border
          class="fullWidth"
          borderSize="${this.buttonType==ne.TEXT?ee.NONE:ee.THIN}"
        >
          <div
            class="BUTTON ${this.buttonType}"
            @click="${()=>{this.clicked()}}"
            style="display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;"
          >
            ${this.leadingIcon?N`<nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>`:N``}
            ${this.leadingIcon||this.buttonType==ne.TEXT?N``:N`<nidoca-layout-spacer> </nidoca-layout-spacer>`}

            <nidoca-typography
              style="padding:var(--space-big);"
              text="${this.text}"
              type="${Ct.BUTTON}"
            >
              <slot></slot>
            </nidoca-typography>

            ${this.buttonType!=ne.TEXT?N`<nidoca-layout-spacer></nidoca-layout-spacer>`:N``}
          </div>
        </nidoca-border>
      </nidoca-ripple>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};le.styles=r`
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
  `,ae([st({type:Tt,converter:String}),se("design:type",Object)],le.prototype,"theme",void 0),ae([st({type:ne,converter:String}),se("design:type",String)],le.prototype,"buttonType",void 0),ae([st({type:String}),se("design:type",String)],le.prototype,"leadingIcon",void 0),ae([st({type:String}),se("design:type",String)],le.prototype,"text",void 0),le=ae([et("nidoca-button")],le);var ce,pe=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};!function(t){t.NONE="NONE",t.KEY_LIGHT="KEY_LIGHT",t.AMBIENT_LIGHT="AMBIENT_LIGHT",t.COMBINED="COMBINED"}(ce||(ce={}));let de=class extends Q{constructor(){super(...arguments),this.shadowType=ce.KEY_LIGHT}render(){return N` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `}};de.styles=r`
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
  `,pe([st({type:ce}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],de.prototype,"shadowType",void 0),de=pe([et("nidoca-box-shadow")],de);var he=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ue=class extends Q{constructor(){super(),this.autocomplete=!0,null==this.getAttribute("style")&&this.setAttribute("style","width:100%;")}render(){return N`
      <form
        class="container"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        .?autocomplete="${this.autocomplete}"
      >
        <slot id="slotElement"></slot>
      </form>
    `}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const i=o[t];this.recursiveInputElementSearch(i,e)}return e}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t&&e.scrollIntoView(!0),t=!1);return t}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const i=o.getOutputData();e[i.key]=i.value,t.append(i.key,i.value)}const o={};return o.jsonObject=e,o.formData=t,o}formButtonClicked(t){console.log("formButton clicked: "+t.detail),"submitButton"===t.detail&&this.dispatchEvent(new CustomEvent("nidoca-event-form-submit-button-clicked",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}recursiveInputElementSearch(t,e){if(t instanceof $t)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};ue.styles=r`
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
  `,he([st({type:Boolean}),ye("design:type",Boolean)],ue.prototype,"autocomplete",void 0),he([st({type:Tt,converter:String}),ye("design:type",Object)],ue.prototype,"theme",void 0),he([lt("#slotElement"),ye("design:type",Object)],ue.prototype,"slotElement",void 0),ue=he([et("nidoca-form"),ye("design:paramtypes",[])],ue);const fe=t=>null!=t?t:P;var me,ge=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.COLOR="color",t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url"}(me||(me={}));let ve=class extends $t{constructor(){super(...arguments),this.type=me.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1}render(){return this.type==me.HIDDEN?N`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:N` <style>
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
            ${this.trailingIcon?N`<nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space-medium);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:N``}
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
                size="${fe(this.size)}"
                minlength="${fe(this.minlength)}"
                maxlength="${fe(this.maxlength)}"
                min="${fe(this.min)}"
                max="${fe(this.max)}"
                step="${fe(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?N`<div>
                ${this.infoText?N` <nidoca-typography
                      .type="${Ct.SUBTITLE1}"
                      text="${this.infoText}"
                    ></nidoca-typography>`:N``}
                ${this.warningText?N` <nidoca-typography
                      style="color:var(--app-color-warning-background)"
                      .type="${Ct.SUBTITLE1}"
                      text="${this.warningText}"
                    ></nidoca-typography>`:N``}
                ${this.errorText?N` <nidoca-typography
                      style="color:var(--app-color-error-background)"
                      .type="${Ct.SUBTITLE1}"
                      text="${this.errorText}"
                    ></nidoca-typography>`:N``}
              </div> `:N``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ve.styles=r`
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
  `,ge([st({type:Tt,converter:String}),be("design:type",Object)],ve.prototype,"theme",void 0),ge([st({type:me,converter:String}),be("design:type",String)],ve.prototype,"type",void 0),ge([st({type:String}),be("design:type",String)],ve.prototype,"label",void 0),ge([st({type:String}),be("design:type",String)],ve.prototype,"placeholder",void 0),ge([st({type:String}),be("design:type",String)],ve.prototype,"trailingIcon",void 0),ge([st({type:String}),be("design:type",String)],ve.prototype,"errorText",void 0),ge([st({type:String}),be("design:type",String)],ve.prototype,"infoText",void 0),ge([st({type:String}),be("design:type",String)],ve.prototype,"warningText",void 0),ge([st({type:String}),be("design:type",String)],ve.prototype,"name",void 0),ge([st(),be("design:type",String)],ve.prototype,"value",void 0),ge([st({type:Boolean}),be("design:type",Boolean)],ve.prototype,"required",void 0),ge([st({type:Boolean}),be("design:type",Boolean)],ve.prototype,"disabled",void 0),ge([st({type:Boolean}),be("design:type",Boolean)],ve.prototype,"checked",void 0),ge([st({type:Number}),be("design:type",Object)],ve.prototype,"maxlength",void 0),ge([st({type:Number}),be("design:type",Object)],ve.prototype,"minlength",void 0),ge([st({type:Number}),be("design:type",Object)],ve.prototype,"min",void 0),ge([st({type:Number}),be("design:type",Object)],ve.prototype,"max",void 0),ge([st({type:Number}),be("design:type",Object)],ve.prototype,"step",void 0),ge([st({type:Number}),be("design:type",Object)],ve.prototype,"size",void 0),ge([lt("#inputElement"),be("design:type",Object)],ve.prototype,"inputElement",void 0),ve=ge([et("nidoca-form-text")],ve);var xe=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},$e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let we=class extends $t{constructor(){super(...arguments),this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return N`
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

      ${this.infoText||this.warningText||this.errorText?N`<div>
            ${this.infoText?N` <nidoca-typography
                  .type="${Ct.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-typography>`:N``}
            ${this.warningText?N` <nidoca-typography
                  style="color:var(--app-color-warning-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-typography>`:N``}
            ${this.errorText?N` <nidoca-typography
                  style="color:var(--app-color-error-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-typography>`:N``}
          </div> `:N``}
    `}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};we.styles=r`
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
  `,xe([st({type:Tt,converter:String}),$e("design:type",Object)],we.prototype,"theme",void 0),xe([st({type:String}),$e("design:type",String)],we.prototype,"infoText",void 0),xe([st({type:String}),$e("design:type",String)],we.prototype,"warningText",void 0),xe([st({type:String}),$e("design:type",String)],we.prototype,"errorText",void 0),xe([st({type:String}),$e("design:type",String)],we.prototype,"name",void 0),xe([st(),$e("design:type",String)],we.prototype,"value",void 0),xe([st({type:String}),$e("design:type",String)],we.prototype,"label",void 0),xe([st({type:Boolean}),$e("design:type",Boolean)],we.prototype,"required",void 0),xe([st({type:String}),$e("design:type",String)],we.prototype,"placeholder",void 0),xe([st({type:Boolean}),$e("design:type",Boolean)],we.prototype,"disabled",void 0),xe([st({type:Number}),$e("design:type",Number)],we.prototype,"rows",void 0),xe([lt("#inputElement"),$e("design:type",Object)],we.prototype,"inputElement",void 0),we=xe([et("nidoca-form-textarea")],we);var Te,Ee=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.DATE="date",t.DATETIME_LOCAL="datetime-local",t.MONTH="month",t.TIME="time",t.WEEK="week"}(Te||(Te={}));let Se=class extends $t{constructor(){super(...arguments),this.trailingIcon="",this.type=Te.DATE,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.errorText="",this.infoText="",this.warningText=""}render(){return N`
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
        ${this.trailingIcon?N`<nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space-medium);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:N``}
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
      ${this.infoText||this.warningText||this.errorText?N`<div>
            ${this.infoText?N` <nidoca-typography
                  .type="${Ct.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-typography>`:N``}
            ${this.warningText?N` <nidoca-typography
                  style="color:var(--app-color-warning-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-typography>`:N``}
            ${this.errorText?N` <nidoca-typography
                  style="color:var(--app-color-error-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-typography>`:N``}
          </div> `:N``}
    `}getOutputData(){var t;return{key:this.name,value:null===(t=this.inputElement)||void 0===t?void 0:t.value}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Se.styles=r`
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
  `,Ee([st({type:Tt,converter:String}),Re("design:type",Object)],Se.prototype,"theme",void 0),Ee([st({type:String}),Re("design:type",String)],Se.prototype,"trailingIcon",void 0),Ee([st(),Re("design:type",String)],Se.prototype,"type",void 0),Ee([st({type:String}),Re("design:type",String)],Se.prototype,"name",void 0),Ee([st({type:String}),Re("design:type",String)],Se.prototype,"value",void 0),Ee([st({type:String}),Re("design:type",String)],Se.prototype,"label",void 0),Ee([st({type:Boolean}),Re("design:type",Boolean)],Se.prototype,"required",void 0),Ee([st({type:String}),Re("design:type",String)],Se.prototype,"placeholder",void 0),Ee([st({type:Boolean}),Re("design:type",Boolean)],Se.prototype,"disabled",void 0),Ee([st({type:String}),Re("design:type",String)],Se.prototype,"errorText",void 0),Ee([st({type:String}),Re("design:type",String)],Se.prototype,"infoText",void 0),Ee([st({type:String}),Re("design:type",String)],Se.prototype,"warningText",void 0),Ee([lt("#inputElement"),Re("design:type",Object)],Se.prototype,"inputElement",void 0),Se=Ee([et("nidoca-form-date")],Se);var Oe,ke=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Ae=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ie=class extends $t{constructor(){super(...arguments),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=Tt.PRIMARY}render(){return N`
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

        ${this.infoText.length>0?N` <nidoca-typography
              .type="${Ct.SUBTITLE2}"
              text="${this.infoText}"
            ></nidoca-typography>`:N``}

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

      ${this.warningText?N` <nidoca-typography
            style="color:var(--app-color-warning-background)"
            .type="${Ct.BODY1}"
            text="${this.warningText}"
          ></nidoca-typography>`:N``}
      ${this.errorText?N` <nidoca-typography
            style="color:var(--app-color-error-background)"
            .type="${Ct.BODY1}"
            text="${this.errorText}"
          ></nidoca-typography>`:N``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Ie.styles=r`
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
  `,ke([st({type:String}),Ae("design:type",String)],Ie.prototype,"name",void 0),ke([st({type:String}),Ae("design:type",String)],Ie.prototype,"label",void 0),ke([st({type:String}),Ae("design:type",String)],Ie.prototype,"infoText",void 0),ke([st({type:String}),Ae("design:type",String)],Ie.prototype,"errorText",void 0),ke([st({type:String}),Ae("design:type",String)],Ie.prototype,"warningText",void 0),ke([st({type:Boolean}),Ae("design:type",Boolean)],Ie.prototype,"required",void 0),ke([st({type:Boolean}),Ae("design:type",Boolean)],Ie.prototype,"disabled",void 0),ke([st({type:Boolean}),Ae("design:type",Boolean)],Ie.prototype,"checked",void 0),ke([st({type:String}),Ae("design:type","function"==typeof(Oe=void 0!==Tt&&Tt)?Oe:Object)],Ie.prototype,"theme",void 0),ke([lt("#inputElement"),Ae("design:type",Object)],Ie.prototype,"inputElement",void 0),Ie=ke([et("nidoca-form-switch")],Ie);var je=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Ce=class extends Q{constructor(){super(...arguments),this.code=""}render(){return N``}};Ce.styles=r``,je([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ce.prototype,"code",void 0),Ce=je([et("nidoca-upload")],Ce);var Ne=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let _e=class extends Q{constructor(){super(...arguments),this.text=""}render(){return N`
      <div class="container">
        <nidoca-layout-spacer left="10px"></nidoca-layout-spacer>
        ${this.text?N`<nidoca-typography .type="${Ct.H5}">${this.text}</nidoca-typography>`:N``}
        <slot></slot>
      </div>
    `}};_e.styles=r`
    .container {
      display: flex;
    }
  `,Ne([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],_e.prototype,"text",void 0),_e=Ne([et("nidoca-menu-area")],_e);var Pe,Le=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.ITEM="item",t.SECTION="section"}(Pe||(Pe={}));let De=class extends Q{constructor(){super(...arguments),this.text="",this.icon="",this.type=Pe.ITEM}render(){return N`
      <div class="container ${this.type}">
        ${this.icon?N` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space-little); font-size:var(--icon-size);"
            ></nidoca-icon>`:N` <nidoca-layout-spacer left="10px" right="36px"></nidoca-layout-spacer>`}
        ${this.text?N`<nidoca-typography
              .type="${this.type==Pe.ITEM?Ct.SUBTITLE1:Ct.CAPTION}"
              >${this.text}</nidoca-typography
            >`:N``}
      </div>
    `}};De.styles=r`
    .container {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
  `,Le([st({type:String}),Be("design:type",String)],De.prototype,"text",void 0),Le([st({type:String}),Be("design:type",String)],De.prototype,"icon",void 0),Le([st({type:String}),Be("design:type",String)],De.prototype,"type",void 0),De=Le([et("nidoca-menu-item")],De);var Me=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ze=class extends Q{render(){return N` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <slot></slot>`}};ze.styles=r`
    :host {
      display: block;
      width: 100%;
      padding-left: var(--space-normal);
      padding-right: var(--space-normal);
    }
  `,Me([st({type:Tt,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],ze.prototype,"theme",void 0),ze=Me([et("nidoca-menu")],ze);class He{constructor(t,e,o=10240){this.key=t,this.minWidth=e,this.maxWidth=o}static applyDevices(t,e){for(let o=0;o<e.length;o++)if(e[o]==this.getCurrentScreen())return t;return""}static getCurrentScreen(){let t=null;return[He.MOBILE,He.TABLET,He.DESKTOP].forEach((e=>{(null==e.minWidth||e.minWidth<window.innerWidth)&&(null==e.maxWidth||e.maxWidth>window.innerWidth)&&(t=e)})),t}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}He.MOBILE=new He("MOBILE",0,640),He.TABLET=new He("TABLET",641,1007),He.DESKTOP=new He("DESKTOP",1008);var We=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Ue=class extends Q{render(){return N`<nidoca-border .borderProperties="${[te.BOTTOM]}">
      <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"> </slot
    ></nidoca-border>`}slotChanged(t){const e=t.target.assignedElements(),o=e.length;for(let t=0;t<o;t++){const i=e[t],r=He.getCurrentScreen();if(r)switch(r){case He.MOBILE:i.setAttribute("style","flex-basis:100%;");break;case He.TABLET:case He.DESKTOP:i.setAttribute("style","flex-basis:"+String(100/o)+"%;")}}}};Ue.styles=r`
    slot {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-content: center;
    }
  `,We([lt("#slotElement"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Ue.prototype,"slotElement",void 0),Ue=We([et("nidoca-layout-section")],Ue);var Ge=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qe=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return N`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,i,r,n){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(i).concat(";").concat("top:").concat(r).concat(";").concat("bottom:").concat(n).concat(";")}};qe.styles=r`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Ge([st({type:String}),Ye("design:type",String)],qe.prototype,"height",void 0),Ge([st({type:String}),Ye("design:type",String)],qe.prototype,"width",void 0),Ge([st({type:String}),Ye("design:type",String)],qe.prototype,"left",void 0),Ge([st({type:String}),Ye("design:type",String)],qe.prototype,"top",void 0),Ge([st({type:String}),Ye("design:type",String)],qe.prototype,"right",void 0),Ge([st({type:String}),Ye("design:type",String)],qe.prototype,"bottom",void 0),qe=Ge([et("nidoca-layout-floating")],qe);var Xe=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Fe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ve=class extends Q{constructor(){super(...arguments),this.width="",this.height="",this.minWidth="",this.minHeight="",this.contentWidth="",this.contentHeight="",this.devices=[He.DESKTOP,He.TABLET,He.MOBILE]}updated(t){for(let e=0;e<this.devices.length;e++)if(this.devices[e]==He.getCurrentScreen()){t.has("width")&&""!=this.width&&(this.style.width=this.width),t.has("height")&&""!=this.height&&(this.style.height=this.height),t.has("minWidth")&&""!=this.minWidth&&(this.style.minWidth=this.minWidth),t.has("minHeight")&&""!=this.minHeight&&(this.style.minHeight=this.minHeight);break}super.updated(t)}render(){return N`
      ${Tt.getStyle(this.theme)}
      <div class="container theme">
        <div class="container" style="${this.applyDevices(this.contentWidth,this.contentHeight,this.devices)}">
          <slot></slot>
        </div>
      </div>
    `}applyDevices(t,e,o){for(let i=0;i<o.length;i++)if(o[i]==He.getCurrentScreen())return`${""!=t?"width:".concat(t).concat(";"):""}${""!=e?"height:".concat(e).concat(";"):""}`;return""}};Ve.styles=r`
    :host {
      display: block;
    }
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `,Xe([st({type:String}),Fe("design:type",String)],Ve.prototype,"width",void 0),Xe([st({type:String}),Fe("design:type",String)],Ve.prototype,"height",void 0),Xe([st({type:String}),Fe("design:type",String)],Ve.prototype,"minWidth",void 0),Xe([st({type:String}),Fe("design:type",String)],Ve.prototype,"minHeight",void 0),Xe([st({type:String}),Fe("design:type",String)],Ve.prototype,"contentWidth",void 0),Xe([st({type:String}),Fe("design:type",String)],Ve.prototype,"contentHeight",void 0),Xe([st({type:He,converter:Array}),Fe("design:type",Array)],Ve.prototype,"devices",void 0),Xe([st({type:Tt,converter:String}),Fe("design:type",Object)],Ve.prototype,"theme",void 0),Ve=Xe([et("nidoca-layout-container")],Ve);var Ke=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Je=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ze=class extends Q{constructor(){super(),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText="",null==this.getAttribute("style")&&this.setAttribute("style","font-size: var(--icon-size); padding:var(--space-normal)")}render(){return N`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(r,n){function a(t){try{l(i.next(t))}catch(t){n(t)}}function s(t){try{l(i.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};Ze.styles=r`
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
  `,Ke([st({type:String}),Je("design:type",String)],Ze.prototype,"icon",void 0),Ke([st({type:Boolean}),Je("design:type",Boolean)],Ze.prototype,"clickable",void 0),Ke([st({type:Boolean}),Je("design:type",Boolean)],Ze.prototype,"deactivated",void 0),Ke([st({type:String}),Je("design:type",String)],Ze.prototype,"primaryText",void 0),Ze=Ke([et("nidoca-icon"),Je("design:paramtypes",[])],Ze);var Qe,to=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},eo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class oo{}oo.NONE="NONE",oo.DEFAULT_SHADOW="DEFAULT_SHADOW",oo.SHADOW_1="SHADOW_1",oo.SHADOW_2="SHADOW_2",oo.SHADOW_3="SHADOW_3";let io=class extends Q{constructor(){super(...arguments),this.icon="",this.theme=Tt.PRIMARY,this.shadowType=oo.DEFAULT_SHADOW,this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-normal)"}render(){return N`
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
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(r,n){function a(t){try{l(i.next(t))}catch(t){n(t)}}function s(t){try{l(i.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};io.styles=r`
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
  `,to([st({type:String}),eo("design:type",String)],io.prototype,"icon",void 0),to([st({type:Object}),eo("design:type","function"==typeof(Qe=void 0!==Tt&&Tt)?Qe:Object)],io.prototype,"theme",void 0),to([st({type:Object}),eo("design:type",oo)],io.prototype,"shadowType",void 0),to([st({type:Boolean}),eo("design:type",Boolean)],io.prototype,"clickable",void 0),to([st({type:Boolean}),eo("design:type",Boolean)],io.prototype,"deactivated",void 0),to([st({type:String}),eo("design:type",String)],io.prototype,"cssStyle",void 0),io=to([et("nidoca-icon-extended")],io);var ro=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let no=class extends Q{render(){return N`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};no.styles=r`
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
  `,ro([lt("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],no.prototype,"rippleContainerElement",void 0),no=ro([et("nidoca-ripple")],no);var ao=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},so=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let lo=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%"}render(){return N`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};lo.styles=r`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,ao([st({type:String}),so("design:type",String)],lo.prototype,"src",void 0),ao([st({type:String}),so("design:type",String)],lo.prototype,"width",void 0),ao([st({type:String}),so("design:type",String)],lo.prototype,"height",void 0),lo=ao([et("nidoca-img")],lo);var co=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let po=class extends Q{constructor(){super(...arguments),this.src=""}render(){return N`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};po.styles=r``,co([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],po.prototype,"src",void 0),po=co([et("nidoca-movie")],po);var ho=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},yo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let uo=class extends Q{constructor(){super(...arguments),this.min=1,this.max=10,this.errorText="nidoca-captcha-wrong-value",this.numberOne=1,this.numberTwo=1}render(){return N`
      <nidoca-form-text
        id="inputfield"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        label="${"nidoca-captcha-label".concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        name="captcha"
        trailingIcon="create"
        type="${me.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};uo.styles=r``,ho([st({type:Number}),yo("design:type",Number)],uo.prototype,"min",void 0),ho([st({type:Number}),yo("design:type",Number)],uo.prototype,"max",void 0),ho([st({type:String}),yo("design:type",String)],uo.prototype,"errorText",void 0),ho([lt("#inputfield"),yo("design:type",Object)],uo.prototype,"inputfield",void 0),uo=ho([et("nidoca-captcha")],uo);var fo,mo=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},go=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}(fo||(fo={}));let bo=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType=fo.SELF}render(){return N` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `}};bo.styles=r`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,mo([st({type:String}),go("design:type",String)],bo.prototype,"text",void 0),mo([st({type:String}),go("design:type",String)],bo.prototype,"href",void 0),mo([st({type:String}),go("design:type",String)],bo.prototype,"targetType",void 0),bo=mo([et("nidoca-link")],bo);var vo=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},xo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $o=class extends Q{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null}update(t){super.update(t),null!=t.get("selectionMode")&&(this.selectionMode||(this.selected=!1))}render(){return N`
      <nidoca-ripple
        @mousedown="${()=>this.downAction()}"
        @mouseup="${()=>this.upAction()}"
        @pointerup="${()=>this.upAction()}"
        @pointerdown="${()=>this.downAction()}"
      >
        <div class="container">
          ${this.selectionMode?N`<nidoca-icon
                class="item"
                @click="${()=>this.switchSelected()}"
                icon="${this.selected?"check_box":"check_box_outline_blank"}"
              ></nidoca-icon>`:N`<span></span>`}
          <slot name="graphic" class="item"></slot>
          <div class="containerTypography ${this.selectionMode?"":"spaceLeft"}">
            ${this.primaryText?N`<nidoca-typography class="item" .type="${Ct.BODY1}"
                  >${this.primaryText}</nidoca-typography
                >`:N``}
            <slot></slot>
            ${this.secondaryText?N`<nidoca-typography class="item" .type="${Ct.SUBTITLE1}"
                  >${this.secondaryText}</nidoca-typography
                >`:N``}
            <slot name="secondary"></slot>
          </div>
          <slot name="meta" class="item"></slot>
        </div>
      </nidoca-ripple>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};$o.styles=r`
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
  `,vo([st({type:Boolean}),xo("design:type",Boolean)],$o.prototype,"selectionMode",void 0),vo([st({type:Boolean}),xo("design:type",Boolean)],$o.prototype,"selected",void 0),vo([st({type:String}),xo("design:type",String)],$o.prototype,"primaryText",void 0),vo([st({type:String}),xo("design:type",String)],$o.prototype,"secondaryText",void 0),$o=vo([et("nidoca-list-item")],$o);var wo=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},To=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Eo=class extends Q{constructor(){super(...arguments),this.selectionMode=!1}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.selectionMode=this.selectionMode}))}))}render(){return N`<style>
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
      ></slot> `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof $o&&t.push(i)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof $o&&i.selected&&t.push(i)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let o=0;for(let i=0;i<e.length;i++){const r=e[i];r instanceof $o&&(r.selected&&t.push(o),o++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){this.getItems().forEach((t=>{t.selected=!1}))}};Eo.styles=r`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,wo([st({type:Tt,converter:String}),To("design:type",Object)],Eo.prototype,"theme",void 0),wo([st({type:Boolean}),To("design:type",Boolean)],Eo.prototype,"selectionMode",void 0),wo([lt("#slotElement"),To("design:type",Object)],Eo.prototype,"slotElement",void 0),Eo=wo([et("nidoca-list")],Eo);var Ro=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},So=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oo=class extends Q{constructor(){super(...arguments),this.theme=Tt.PRIMARY,this.prominent=!1}render(){return N`
      ${Tt.getStyle(this.theme)}
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
      ${this.prominent?N`<slot class="prominent" name="prominent"></slot>`:N``}
    `}};Oo.styles=r`
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
  `,Ro([st({type:Tt,converter:String}),So("design:type",String)],Oo.prototype,"theme",void 0),Ro([st({type:Boolean}),So("design:type",Boolean)],Oo.prototype,"prominent",void 0),Oo=Ro([et("nidoca-top-app-bar")],Oo);var ko=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let Ao=class extends Q{constructor(){super(...arguments),this.text=""}render(){return N`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-end;align-content:flex-start;"
      >
        <nidoca-layout-spacer style="flex-basis:100%;">
          <nidoca-typography .type="${Ct.H6}" text="${this.text}"></nidoca-typography>
        </nidoca-layout-spacer>
      </div>
    `}};Ao.styles=r``,ko([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ao.prototype,"text",void 0),Ao=ko([et("nidoca-list-section")],Ao);var Io=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},jo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Co=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new Ze],["row 2",new Ze]]}render(){return N`
      <div>
        <table>
          <thead>
            ${xt([this.headers],(()=>N` ${bt(this.headers,(t=>N` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${xt([this.rows],(()=>N`
                  ${bt(this.rows,(t=>N`
                        <tr>
                          ${bt(t,(t=>N` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Co.styles=r`
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
  `,Io([st({type:Array}),jo("design:type",Array)],Co.prototype,"headers",void 0),Io([st({type:Array}),jo("design:type",Array)],Co.prototype,"rows",void 0),Co=Io([et("nidoca-table")],Co);var No=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let _o=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?N`<slot></slot>`:N``}};_o.styles=r``,No([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],_o.prototype,"selected",void 0),_o=No([et("nidoca-tab-content")],_o);var Po,Lo=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Bo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Do=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=Tt.PRIMARY}render(){return N`
      <style>
        :host(.SELECTED) {
          border-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?N` <nidoca-typography .type="${Ct.OVERLINE}" text="${this.text}"></nidoca-typography> `:N``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Do.styles=r`
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
  `,Lo([st({type:Boolean}),Bo("design:type",Boolean)],Do.prototype,"selected",void 0),Lo([st({type:String}),Bo("design:type",String)],Do.prototype,"text",void 0),Lo([st({type:String}),Bo("design:type","function"==typeof(Po=void 0!==Tt&&Tt)?Po:Object)],Do.prototype,"theme",void 0),Do=Lo([et("nidoca-tab")],Do);var Mo,zo=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Ho=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Wo=class extends Q{constructor(){super(...arguments),this.theme=Tt.PRIMARY,this.tabIndex=0}render(){return N`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,o=t[this.tabIndex];for(let i=0;i<t.length;i++){const r=t[i];r instanceof Do&&(r.theme=this.theme,r.style.width=String(e).concat("%"),r==o?(r.selected=!0,r.classList.add("SELECTED")):(r.selected=!1,r.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof _o&&(this.tabIndex==t?i.selected=!0:i.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof Do&&i==t){this.tabIndex=o;break}}}}};Wo.styles=r`
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
  `,zo([lt("#tabSlot"),Ho("design:type",Object)],Wo.prototype,"tabSlot",void 0),zo([lt("#tabContentSlot"),Ho("design:type",Object)],Wo.prototype,"tabContentSlot",void 0),zo([st({type:String}),Ho("design:type","function"==typeof(Mo=void 0!==Tt&&Tt)?Mo:Object)],Wo.prototype,"theme",void 0),zo([st({type:Number}),Ho("design:type",Number)],Wo.prototype,"tabIndex",void 0),Wo=zo([et("nidoca-tabs")],Wo);var Uo,Go=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Yo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qo=class extends Q{constructor(){super(),this.theme=Tt.PRIMARY,this.navigationClosed=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false")}updated(t){super.updated(t),new Promise((t=>requestAnimationFrame(t))).then((()=>{if(null!=this.headerElement){const t=this.headerElement.offsetHeight,e="top:".concat(String(t)).concat("px;"),o="padding-top:".concat(String(t)).concat("px;");console.debug("set header height to corresponding elements: %s",e),null!=this.sidebarElement&&this.sidebarElement.setAttribute("style",e),null!=this.contentElement&&this.contentElement.setAttribute("style",o)}}))}render(){return N`
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
    `}};qo.styles=r`
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
  `,Go([st({type:String}),Yo("design:type","function"==typeof(Uo=void 0!==Tt&&Tt)?Uo:Object)],qo.prototype,"theme",void 0),Go([st({type:Boolean}),Yo("design:type",Boolean)],qo.prototype,"navigationClosed",void 0),Go([st({type:Boolean}),Yo("design:type",Boolean)],qo.prototype,"prominent",void 0),Go([lt("#header"),Yo("design:type",Object)],qo.prototype,"headerElement",void 0),Go([lt("#sidebar"),Yo("design:type",Object)],qo.prototype,"sidebarElement",void 0),Go([lt("#content"),Yo("design:type",Object)],qo.prototype,"contentElement",void 0),qo=Go([et("nidoca-template"),Yo("design:paramtypes",[])],qo);var Xo=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Fo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vo=class extends Q{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1}render(){return N`
      <style></style>
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
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,o,i){return new(o||(o=Promise))((function(r,n){function a(t){try{l(i.next(t))}catch(t){n(t)}}function s(t){try{l(i.throw(t))}catch(t){n(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};Vo.styles=r`
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
  `,Xo([st({type:String}),Fo("design:type",String)],Vo.prototype,"value",void 0),Xo([st({type:String}),Fo("design:type",String)],Vo.prototype,"placeholder",void 0),Xo([st({type:Boolean}),Fo("design:type",Boolean)],Vo.prototype,"disabled",void 0),Xo([lt("#inputElement"),Fo("design:type",Object)],Vo.prototype,"inputElement",void 0),Vo=Xo([et("nidoca-search-bar")],Vo);var Ko=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Jo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Zo{}Zo.CENTER="CENTER",Zo.LEFT="LEFT",Zo.RIGHT="RIGHT",Zo.TOP="TOP",Zo.BOTTOM="BOTTOM",Zo.SLIDE_CENTER="SLIDE_CENTER",Zo.SLIDE_LEFT="SLIDE_LEFT",Zo.SLIDE_RIGHT="SLIDE_RIGHT",Zo.SLIDE_TOP="SLIDE_TOP",Zo.SLIDE_BOTTOM="SLIDE_BOTTOM";let Qo=class extends Q{constructor(){super(...arguments),this.transitionType=Zo.CENTER,this.duration=.5}render(){return N` <div .class="${this.transitionType}"><slot></slot></div> `}};Qo.styles=r`
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
  `,Ko([st({type:Object}),Jo("design:type",Zo)],Qo.prototype,"transitionType",void 0),Ko([st({type:Number}),Jo("design:type",Number)],Qo.prototype,"duration",void 0),Qo=Ko([et("nidoca-transition")],Qo);var ti=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a};let ei=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?N`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${Zo.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:N``}};ei.styles=r`
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
  `,ti([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],ei.prototype,"show",void 0),ei=ti([et("nidoca-dialog")],ei);var oi,ii=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},ri=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ni=class extends Q{constructor(){super(...arguments),this.show=!1,this.theme=Tt.BACKGROUND}render(){return N`
      <style>
        .box {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        ${He.MOBILE.asMediaStyle("slot{min-width:320px;}")}
        ${He.TABLET.asMediaStyle("slot{min-width:480px;}")}
        ${He.DESKTOP.asMediaStyle("slot{min-width:640px;}")}
      </style>
      <nidoca-dialog .show="${this.show}">
        <nidoca-card class="box" .shadowType="${ce.KEY_LIGHT}">
          <nidoca-layout-spacer>
            <slot name="header"></slot>
            <slot name="text"></slot>
            <slot name="action"></slot>
          </nidoca-layout-spacer>
        </nidoca-card>
      </nidoca-dialog>
    `}};ni.styles=r`
    slot {
      display: flex;
    }
  `,ii([st({type:Boolean}),ri("design:type",Boolean)],ni.prototype,"show",void 0),ii([st({type:Tt}),ri("design:type","function"==typeof(oi=void 0!==Tt&&Tt)?oi:Object)],ni.prototype,"theme",void 0),ni=ii([et("nidoca-dialog-action")],ni);var ai=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},si=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class li{}li.ROUND="ROUND",li.CLICKABLE="CLICKABLE",li.ZOOM_WRAPPED="ZOOM_WRAPPED",li.FULL_WIDTH="FULL_WIDTH";let ci=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[li.CLICKABLE,li.FULL_WIDTH]}render(){return N`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}};ci.styles=r`
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
  `,ai([st({type:String}),si("design:type",String)],ci.prototype,"src",void 0),ai([st({type:String}),si("design:type",String)],ci.prototype,"width",void 0),ai([st({type:String}),si("design:type",String)],ci.prototype,"height",void 0),ai([st({type:li,converter:Array}),si("design:type",Array)],ci.prototype,"richMediaProperties",void 0),ci=ai([et("nidoca-img-round")],ci);var pi=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},di=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let hi=class extends Q{constructor(){super(...arguments),this.imgSrc="",this.primaryText="",this.description=""}render(){return N` <div
      style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
    >
        <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[li.ROUND]}"> </nidoca-img>
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
    </div>`}};pi([st({type:String}),di("design:type",String)],hi.prototype,"imgSrc",void 0),pi([st({type:String}),di("design:type",String)],hi.prototype,"primaryText",void 0),pi([st({type:String}),di("design:type",String)],hi.prototype,"description",void 0),hi=pi([et("nidoca-avatar")],hi);let yi=class extends Q{render(){return N`
      <nidoca-box-shadow .shadowType="${ce.KEY_LIGHT}">
        <slot class="slotContainer"></slot>
      </nidoca-box-shadow>
    `}};yi.styles=r`
    .slotContainer {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
  `,yi=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-card")],yi);let ui=class extends Q{render(){return N`
      <nidoca-layout-spacer bottom="var(--space-little)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();for(let t=0;t<o.length;t++){const e=o[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};ui.styles=r`
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
  `,ui=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-gallery")],ui);let fi=class extends Q{render(){return N`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};fi.styles=r`
    :host {
      display: none;
    }
  `,fi=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-print")],fi);let mi=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return N`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target,o=e.offsetWidth,i=e.assignedElements(),r=i.length,n=[];let a=0;for(let t=0;t<r;t++){const e=i[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)n.push(e);else{const e=t.toUpperCase();a+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),this.flexBasis=String(s/n.length)+"%",this.requestUpdate()}};mi.styles=r`
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

    @media only screen and (min-width: ${He.TABLET.minWidth}px) and (max-width: ${He.TABLET.maxWidth}px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: ${He.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,mi=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-section")],mi);var gi=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},bi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let vi=class extends Q{constructor(){super(...arguments),this.title="",this.summary="",this.text=""}render(){return N`
      <div style="display:flex; flex-direction:column;">
        <slot name="title"></slot>
        ${this.title?N`<nidoca-typography .type="${Ct.H2}">${this.title}</nidoca-typography>
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`:N``}
        <slot name="summary"></slot>${this.summary?N`<nidoca-typography .type="${Ct.BODY1}"><i>${this.summary}</i></nidoca-typography>
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`:N``}
        <slot name="text"></slot>
        ${this.text?N`<nidoca-typography .type="${Ct.BODY1}">${this.text}</nidoca-typography>`:N``}
        <slot></slot>
      </div>
    `}};vi.styles=r`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  `,gi([st({type:String}),bi("design:type",String)],vi.prototype,"title",void 0),gi([st({type:String}),bi("design:type",String)],vi.prototype,"summary",void 0),gi([st({type:String}),bi("design:type",String)],vi.prototype,"text",void 0),vi=gi([et("nidoca-article")],vi);var xi=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},$i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let wi=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return N`
      <nidoca-layout-spacer top="48px" bottom="48px">
        <div style="display:flex;flex-direction:column;align-items:center">
          <nidoca-icon
            icon="${this.icon}"
            style="font-size: 96px; padding:var(--space-normal);"
            backgroundColor="var(--app-color-surface-background)"
          ></nidoca-icon>
          <nidoca-typography .type="${Ct.H2}">${this.primaryText}</nidoca-typography>
          <nidoca-layout-spacer>
            <nidoca-typography .type="${Ct.BODY2}" .textAlign="${Nt.CENTER}">
              ${this.text}
              <slot></slot>
            </nidoca-typography>
          </nidoca-layout-spacer>
        </div>
      </nidoca-layout-spacer>
    `}};wi.styles=r``,xi([st({type:String}),$i("design:type",String)],wi.prototype,"primaryText",void 0),xi([st({type:String}),$i("design:type",String)],wi.prototype,"text",void 0),xi([st({type:String}),$i("design:type",String)],wi.prototype,"icon",void 0),wi=xi([et("nidoca-icon-with-description")],wi);let Ti=class extends Q{render(){return N`
      <nidoca-form id="authenitcate-form">
        <nidoca-typography .type="${Ct.H2}">Kontaktformular</nidoca-typography>
        <nidoca-form-text name="name" .textType="${me.TEXT}" value="" label="name"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text .textType="${me.EMAIL}" label="email" name="email"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text name="title" .textType="${me.TEXT}" value="" label="title"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-form-textarea label="message" name="message" trailingIcon="vpn_key"></nidoca-form-textarea>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-button
          text="Senden"
          @nidoca-event-button-clicked="${()=>alert("Login")}"
          .buttonType="${ne.CONTAINED}"
        ></nidoca-button>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-typography
          slot="errorMessages"
          .type="${Ct.OVERLINE}"
          text="huhu"
        ></nidoca-typography>
      </nidoca-form>
    `}};Ti.styles=r``,Ti=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a}([et("nidoca-form-contact")],Ti),wt.getUniqueInstance().initDefaultComponents();var Ei=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Ri=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Si=class extends $t{constructor(){super(...arguments),this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return N` <style>
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
        ${this.trailingIcon?N`<nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space-medium);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:N``}
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
            ${xt([this.value,this.options],(()=>N`
                ${bt(this.options,(t=>null==t?N` <option></option>`:this.isSelectedOption(t)?N` <option value="${t.key}" selected>${t.value}</option> `:N` <option value="${t.key}">${t.value}</option> `))}
              `))}
          </select>
        </div>
      </div>

      ${this.infoText||this.warningText||this.errorText?N`<div>
            ${this.infoText?N` <nidoca-typography
                  .type="${Ct.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-typography>`:N``}
            ${this.warningText?N` <nidoca-typography
                  style="color:var(--app-color-warning-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-typography>`:N``}
            ${this.errorText?N` <nidoca-typography
                  style="color:var(--app-color-error-background)"
                  .type="${Ct.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-typography>`:N``}
          </div> `:N``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}static stringArrayToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),t.forEach((t=>{o.push({key:t,value:t})})),o}static toComboboxOptions(t=null,e=null){if(null==t)return[];const o=[];return Object.values(t).forEach((i=>{let r=String(Object.keys(t)[Object.values(t).indexOf(i)]);e&&(r=r.concat(e)),o.push({key:i,value:r})})),o}};Si.styles=r`
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
  `,Ei([st({type:Tt,converter:String}),Ri("design:type",Object)],Si.prototype,"theme",void 0),Ei([st({type:String}),Ri("design:type",String)],Si.prototype,"trailingIcon",void 0),Ei([st({type:String}),Ri("design:type",String)],Si.prototype,"label",void 0),Ei([st({type:String}),Ri("design:type",String)],Si.prototype,"errorText",void 0),Ei([st({type:String}),Ri("design:type",String)],Si.prototype,"infoText",void 0),Ei([st({type:String}),Ri("design:type",String)],Si.prototype,"warningText",void 0),Ei([st(),Ri("design:type",Object)],Si.prototype,"value",void 0),Ei([st({type:Array}),Ri("design:type",Array)],Si.prototype,"options",void 0),Ei([st({type:String}),Ri("design:type",String)],Si.prototype,"name",void 0),Ei([st({type:Boolean}),Ri("design:type",Boolean)],Si.prototype,"required",void 0),Ei([st({type:Boolean}),Ri("design:type",Boolean)],Si.prototype,"multiple",void 0),Ei([st({type:Number}),Ri("design:type",Number)],Si.prototype,"size",void 0),Ei([lt("#selectElement"),Ri("design:type",Object)],Si.prototype,"selectElement",void 0),Si=Ei([et("nidoca-form-combobox")],Si);class Oi{constructor(t){this.propertyWrapper=t}getInputElement(t){if(null==t)return N``;const e=t.classWrapper;if(null==e)return N``;switch(this.propertyWrapper.getRenderType()){case it.STRING:return N`<nidoca-form-text .textType="${me.TEXT}"
        label="${this.propertyWrapper.propertyName}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.showcaseElement.requestUpdate()}}"
        /></nidoca-form-text>`;case it.NUMBER:return N`<nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${me.NUMBER}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.showcaseElement.requestUpdate()}}"
        ></nidoca-form-text>`;case it.BOOLEAN:return N`<nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,t.showcaseElement.requestUpdate()}}"
        ></nidoca-form-switch>`;case it.COMBOBOX:return N`<nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${Si.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(o.target.getOutputData().value),t.showcaseElement.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case it.ARRAY:return N`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${Si.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${e.instance[this.propertyWrapper.propertyName]}"
            @input="${t=>{e.instance[this.propertyWrapper.propertyName]=t.target.getOutputData().value,e.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return N``}}getAsHtml(t){switch(this.propertyWrapper.getConverterTypeName()){case it.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case it.ARRAY:return"";case it.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case it.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case it.STRING:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case it.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getConverterTypeName()){case it.COMBOBOX:case it.ARRAY:return"";case it.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getConverterTypeName()){case it.COMBOBOX:case it.ARRAY:return"";case it.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class ki{constructor(t){this.classWrapper=t}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`\n<${this.classWrapper.getTagName()}\n${this.classWrapper.getProperties().map((t=>`.${t.propertyName}="\${this.${t.propertyName}}"\n`)).join("")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(t){return t.indexOf(">")>-1&&(t=t.substr(t.indexOf(">")+1,t.length)),t}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(N`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new Oi(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}var Ai=function(t,e,o,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,o,a):r(e,o))||a);return n>3&&a&&Object.defineProperty(e,o,a),a},Ii=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ji=class extends Q{constructor(){super(...arguments),this.clazzGuiWrapper=null,this.customEventNames=[]}updated(t){t.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.clazzGuiWrapper=new ki(new nt(this.element)),this.requestUpdate())}render(){var t,e,o,i,r,n,a;return N` <nidoca-section .theme="${Tt.PRIMARY}">
        <div>
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-typography .type="${Ct.H2}">Tag</nidoca-typography>
          </nidoca-layout-spacer>
          <nidoca-code>${this.clazzGuiWrapper?this.clazzGuiWrapper.classWrapper.getHTMLTag():""} </nidoca-code>

          <div style="padding-top:var(--space-medium);">
            <nidoca-section> ${this.element} </nidoca-section>
          </div>
        </div>

        <div style="padding-left:var(--space-medium)">
          ${(null===(t=this.clazzGuiWrapper)||void 0===t?void 0:t.hasProperties())?N`
                <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${Ct.H2}"> Attribute </nidoca-typography>
                </nidoca-layout-spacer>

                ${this.clazzGuiWrapper.getPropertyGuiWrappers().map((t=>N`${t.getInputElement(this.clazzGuiWrapper)}
                    <div style="padding-bottom:var(--space-big);"></div>`))}
              `:N``}
          ${(null===(e=this.clazzGuiWrapper)||void 0===e?void 0:e.classWrapper.hasSlots())?N` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${Ct.H2}">Slots </nidoca-typography>
                </nidoca-layout-spacer>

                <nidoca-table
                  .headers="${["name"]}"
                  .rows="${this.toSlotRows(this.clazzGuiWrapper.classWrapper.getSlotNames())}"
                >
                </nidoca-table>`:N``}
          ${this.customEventNames.length>0?N` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${Ct.H2}">Custom Events </nidoca-typography>
                </nidoca-layout-spacer>
                <nidoca-table .headers="${["name"]}" .rows="${this.toCustomEventRows(this.customEventNames)}">
                </nidoca-table>`:N``}
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
            <nidoca-code style="width:100%;">${null===(o=this.clazzGuiWrapper)||void 0===o?void 0:o.getAsJavascript()} </nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${null===(i=this.clazzGuiWrapper)||void 0===i?void 0:i.getTypescript()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${null===(r=this.clazzGuiWrapper)||void 0===r?void 0:r.getAsLit()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${null===(n=this.clazzGuiWrapper)||void 0===n?void 0:n.getAsHtml()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>
      </nidoca-tabs>

      <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
        <nidoca-typography .type="${Ct.H2}"> Attribute </nidoca-typography>
      </nidoca-layout-spacer>

      <nidoca-table
        .headers="${["name","type","converter type","render type"]}"
        .rows="${this.toAttributeRows(null===(a=this.clazzGuiWrapper)||void 0===a?void 0:a.getPropertyGuiWrappers())}"
      >
      </nidoca-table>
      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements()[0];o instanceof HTMLElement&&(this.element=o)}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t.propertyWrapper.propertyName),o.push(t.propertyWrapper.getTypeName()),o.push(t.propertyWrapper.getConverterTypeName()),o.push(t.propertyWrapper.getRenderType()),e.push(o),o})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}};ji.styles=r`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `,Ai([st({type:Array}),Ii("design:type",Array)],ji.prototype,"customEventNames",void 0),Ai([st({type:Object}),Ii("design:type",Object)],ji.prototype,"element",void 0),ji=Ai([et("lit-viewer")],ji)})();