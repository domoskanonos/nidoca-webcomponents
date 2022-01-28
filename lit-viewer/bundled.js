/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),o=new Map;class n{constructor(t,o){if(this._$cssResult$=!0,o!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=o.get(this.cssText);return t&&void 0===e&&(o.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=t=>new n("string"==typeof t?t:t+"",e),i=(t,...o)=>{const r=1===t.length?t[0]:o.reduce(((e,o,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[n+1]),t[0]);return new n(r,e)},a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return r(e)})(t):t;var s,l;const c={toAttribute(t,e){switch(e){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},p=(t,e)=>e!==t&&(e==e||t==t),d={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:p};class h extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const n=this._$Eh(o,e);void 0!==n&&(this._$Eu.set(n,o),t.push(n))})),t}static createProperty(t,e=d){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Em)&&void 0!==e?e:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Em)||void 0===e||e.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const o=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{t?e.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((t=>{const o=document.createElement("style");o.textContent=t.cssText,e.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$Eg(t,e,o=d){var n,r;const i=this.constructor._$Eh(t,o);if(void 0!==i&&!0===o.reflect){const a=(null!==(r=null===(n=o.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==r?r:c.toAttribute)(e,o.type);this._$Ei=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Ei=null}}_$AK(t,e){var o,n,r;const i=this.constructor,a=i._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=i.getPropertyOptions(a),s=t.converter,l=null!==(r=null!==(n=null===(o=s)||void 0===o?void 0:o.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==r?r:c.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let n=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Em)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,e)=>this._$Eg(e,this[e],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}var u,f;h.finalized=!0,h.elementProperties=new Map,h.elementStyles=[],h.shadowRootOptions={mode:"open"},null===(s=globalThis.reactiveElementPlatformSupport)||void 0===s||s.call(globalThis,{ReactiveElement:h}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");const y=globalThis.trustedTypes,g=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,b="?"+m,v=`<${b}>`,x=document,T=(t="")=>x.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,R=t=>{var e;return $(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,w=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,N=/"/g,C=/^(?:script|style|textarea)$/i,_=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),I=_(1),L=(_(2),Symbol.for("lit-noChange")),P=Symbol.for("lit-nothing"),j=new WeakMap,B=x.createTreeWalker(x,129,null,!1),D=(t,e)=>{const o=t.length-1,n=[];let r,i=2===e?"<svg>":"",a=S;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,p=0;for(;p<o.length&&(a.lastIndex=p,l=a.exec(o),null!==l);)p=a.lastIndex,a===S?"!--"===l[1]?a=O:void 0!==l[1]?a=w:void 0!==l[2]?(C.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=A):void 0!==l[3]&&(a=A):a===A?">"===l[0]?(a=null!=r?r:S,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?A:'"'===l[3]?N:k):a===N||a===k?a=A:a===O||a===w?a=S:(a=A,r=void 0);const d=a===A&&t[e+1].startsWith("/>")?" ":"";i+=a===S?o+v:c>=0?(n.push(s),o.slice(0,c)+"$lit$"+o.slice(c)+m+d):o+m+(-2===c?(n.push(void 0),e):d)}const s=i+(t[o]||"<?>")+(2===e?"</svg>":"");return[void 0!==g?g.createHTML(s):s,n]};class M{constructor({strings:t,_$litType$:e},o){let n;this.parts=[];let r=0,i=0;const a=t.length-1,s=this.parts,[l,c]=D(t,e);if(this.el=M.createElement(l,o),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=B.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const o=c[i++];if(t.push(e),void 0!==o){const t=n.getAttribute(o.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?F:"@"===e[1]?Y:U})}else s.push({type:6,index:r})}for(const e of t)n.removeAttribute(e)}if(C.test(n.tagName)){const t=n.textContent.split(m),e=t.length-1;if(e>0){n.textContent=y?y.emptyScript:"";for(let o=0;o<e;o++)n.append(t[o],T()),B.nextNode(),s.push({type:2,index:++r});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===b)s.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(m,t+1));)s.push({type:7,index:r}),t+=m.length-1}r++}}static createElement(t,e){const o=x.createElement("template");return o.innerHTML=t,o}}function z(t,e,o=t,n){var r,i,a,s;if(e===L)return e;let l=void 0!==n?null===(r=o._$Cl)||void 0===r?void 0:r[n]:o._$Cu;const c=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,n)),void 0!==n?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=l:o._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,n)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:n}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(o,!0);B.currentNode=r;let i=B.nextNode(),a=0,s=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new H(i,i.nextSibling,this,t):1===l.type?e=new l.ctor(i,l.name,l.strings,this,t):6===l.type&&(e=new X(i,this,t)),this.v.push(e),l=n[++s]}a!==(null==l?void 0:l.index)&&(i=B.nextNode(),a++)}return r}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class H{constructor(t,e,o,n){var r;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=n,this._$Cg=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),E(t)?t===P||null==t||""===t?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==L&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):R(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==P&&E(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:n}=t,r="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=M.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(o);else{const t=new W(r,this),e=t.p(this.options);t.m(o),this.S(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new M(t)),e}M(t){$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,n=0;for(const r of t)n===e.length?e.push(o=new H(this.A(T()),this.A(T()),this,this.options)):o=e[n],o._$AI(r),n++;n<e.length&&(this._$AR(o&&o._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,o,n,r){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,n){const r=this.strings;let i=!1;if(void 0===r)t=z(this,t,e,0),i=!E(t)||t!==this._$AH&&t!==L,i&&(this._$AH=t);else{const n=t;let a,s;for(t=r[0],a=0;a<r.length-1;a++)s=z(this,n[o+a],e,a),s===L&&(s=this._$AH[a]),i||(i=!E(s)||s!==this._$AH[a]),s===P?t=P:t!==P&&(t+=(null!=s?s:"")+r[a+1]),this._$AH[a]=s}i&&!n&&this.k(t)}k(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends U{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===P?void 0:t}}class F extends U{constructor(){super(...arguments),this.type=4}k(t){t&&t!==P?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Y extends U{constructor(t,e,o,n,r){super(t,e,o,n,r),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=z(this,t,e,0))&&void 0!==o?o:P)===L)return;const n=this._$AH,r=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==P&&(n===P||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const V={P:"$lit$",V:m,L:b,I:1,N:D,R:W,D:R,j:z,H,O:U,F,B:Y,W:G,Z:X};var q,K,J;null===(u=globalThis.litHtmlPlatformSupport)||void 0===u||u.call(globalThis,M,H),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");class Z extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var n,r;const i=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:e;let a=i._$litPart$;if(void 0===a){const t=null!==(r=null==o?void 0:o.renderBefore)&&void 0!==r?r:null;i._$litPart$=a=new H(e.insertBefore(T(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return L}}Z.finalized=!0,Z._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:Z}),null===(K=globalThis.litElementPlatformSupport)||void 0===K||K.call(globalThis,{LitElement:Z}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.0.0-rc.4");const Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:n}=e;return{kind:o,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e);var tt;console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(t){t.STRING="String",t.NUMBER="Number",t.BOOLEAN="Boolean",t.COMBOBOX="Class",t.ARRAY="Array",t.UNDEFINED="undefined"}(tt||(tt={}));class et{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.propertyName,this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isArray()?tt.ARRAY:this.isPrimitive()?this.getTypeName():tt.COMBOBOX}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let o=0;o<e.length;o++){const n=e[o];if(n.key==t)return n.value}}isArray(){return"Array"==this.getConverterTypeName()}isPrimitive(){return"String"==this.getTypeName()|"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class ot{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let o=[];if(e&&(e.tagName==t&&o.push(e),e.children.length>0)){const n=null==e?void 0:e.children;for(let e=0;e<n.length;e++)o=o.concat(this.getElementsByTagName(t,n.item(e)))}return o}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed");const e=[];for(const o of Array.from(t.keys()))e.push(new et(o,t.get(o)));return e}}const nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function rt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):nt(t,e)}function it(t,e){return(({finisher:t,descriptor:e})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(o.key)}:{...o,key:n};return null!=t&&(i.finisher=function(e){t(e,n)}),i}{const r=o.constructor;void 0!==e&&Object.defineProperty(o,n,e(n)),null==t||t(r,n)}})({descriptor:o=>{const n={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[e]&&(this[e]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}const at=t=>(...e)=>({_$litDirective$:t,values:e});class st{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:lt}=V,ct=()=>document.createComment(""),pt=(t,e,o)=>{var n;const r=t._$AA.parentNode,i=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=r.insertBefore(ct(),i),n=r.insertBefore(ct(),i);o=new lt(e,n,t,t.options)}else{const e=o._$AB.nextSibling,a=o._$AM,s=a!==t;if(s){let e;null===(n=o._$AQ)||void 0===n||n.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==a._$AU&&o._$AP(e)}if(e!==i||s){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;r.insertBefore(t,i),t=e}}}return o},dt=(t,e,o=t)=>(t._$AI(e,o),t),ht={},ut=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const n=t._$AB.nextSibling;for(;o!==n;){const t=o.nextSibling;o.remove(),o=t}},ft=(t,e,o)=>{const n=new Map;for(let r=e;r<=o;r++)n.set(t[r],r);return n},yt=at(class extends st{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let n;void 0===o?o=e:void 0!==e&&(n=e);const r=[],i=[];let a=0;for(const e of t)r[a]=n?n(e,a):a,i[a]=o(e,a),a++;return{values:i,keys:r}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,n]){var r;const i=(t=>t._$AH)(t),{values:a,keys:s}=this.dt(e,o,n);if(!Array.isArray(i))return this.ct=s,a;const l=null!==(r=this.ct)&&void 0!==r?r:this.ct=[],c=[];let p,d,h=0,u=i.length-1,f=0,y=a.length-1;for(;h<=u&&f<=y;)if(null===i[h])h++;else if(null===i[u])u--;else if(l[h]===s[f])c[f]=dt(i[h],a[f]),h++,f++;else if(l[u]===s[y])c[y]=dt(i[u],a[y]),u--,y--;else if(l[h]===s[y])c[y]=dt(i[h],a[y]),pt(t,c[y+1],i[h]),h++,y--;else if(l[u]===s[f])c[f]=dt(i[u],a[f]),pt(t,i[h],i[u]),u--,f++;else if(void 0===p&&(p=ft(s,f,y),d=ft(l,h,u)),p.has(l[h]))if(p.has(l[u])){const e=d.get(s[f]),o=void 0!==e?i[e]:null;if(null===o){const e=pt(t,i[h]);dt(e,a[f]),c[f]=e}else c[f]=dt(o,a[f]),pt(t,i[h],o),i[e]=null;f++}else ut(i[u]),u--;else ut(i[h]),h++;for(;f<=y;){const e=pt(t,c[y+1]);dt(e,a[f]),c[f++]=e}for(;h<=u;){const t=i[h++];null!==t&&ut(t)}return this.ct=s,((t,e=ht)=>{t._$AH=e})(t,c),L}}),gt={},mt=at(class extends st{constructor(){super(...arguments),this.ot=gt}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every(((t,e)=>t===this.ot[e])))return L}else if(this.ot===e)return L;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});class bt extends Z{}class vt{}vt.PRIMARY="primary",vt.SECONDARY="secondary",vt.SURFACE="surface",vt.BACKGROUND="background";var xt,Tt,Et,$t=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Rt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.NONE="NONE",t.ALL="ALL",t.ALL_ROUND="ALL_ROUND",t.HORIZONTAL="HORIZONTAL",t.VERTICAL="VERTICAL",t.LEFT="LEFT",t.RIGHT="RIGHT",t.TOP="TOP",t.BOTTOM="BOTTOM",t.BOTTOM_SELECTED="BOTTOM_SELECTED",t.FULL_WIDTH="FULL_WIDTH",t.FULL_HEIGHT="FULL_HEIGHT"}(Tt||(Tt={})),function(t){t.NONE="NONE",t.THIN="THIN",t.MEDIUM="MEDIUM",t.THICK="THICK"}(Et||(Et={}));let St=class extends Z{constructor(){super(...arguments),this.theme=vt.SURFACE,this.borderProperties=[Tt.ALL],this.borderSize=Et.THIN}render(){return I`
      <style>
        .BORDER {
          border-color: var(--app-color-${this.theme}-background);
        }
        .BOTTOM_SELECTED:focus-within {
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>

      <slot class="${this.toBorderPropertiesString(this.borderProperties)} ${this.borderSize}"></slot>
    `}toBorderPropertiesString(t){let e="BORDER";return t.forEach((t=>{e=e.concat(" ").concat(t)})),e}};St.styles=i`
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
  `,$t([rt({type:vt,converter:String}),Rt("design:type","function"==typeof(xt=void 0!==vt&&vt)?xt:Object)],St.prototype,"theme",void 0),$t([rt({type:Tt,converter:Array}),Rt("design:type",Array)],St.prototype,"borderProperties",void 0),$t([rt({type:Et,converter:String}),Rt("design:type",String)],St.prototype,"borderSize",void 0),St=$t([Q("nidoca-border")],St);var Ot,wt,At=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},kt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.ALL="ALL",t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t.LEFT="LEFT",t.RIGHT="RIGHT",t.TOP="TOP",t.BOTTOM="BOTTOM"}(Ot||(Ot={})),function(t){t.ZERO="--space-zero",t.LITTLE="--space-little",t.SMALL="--space-small",t.MEDIUM="--space-medium",t.NORMAL="--space-normal",t.BIG="--space-big",t.MAX="--space-max"}(wt||(wt={}));let Nt=class extends Z{constructor(){super(...arguments),this.devices=[Ve.DESKTOP,Ve.TABLET,Ve.MOBILE],this.spacerTypes=[Ot.ALL],this.spacerSize=wt.NORMAL,this.cssStyle=""}render(){return I`
      <style>
        ${this.toStyle(this.devices,this.spacerTypes,this.spacerSize)}
      </style>
      <span class="spacer" style="${this.cssStyle}">
        <slot></slot>
      </span>
    `}toStyle(t,e,o){const n="var(".concat(o).concat(")");let r="";e.forEach((t=>{switch(t){case Ot.LEFT:r=r.concat("padding-left:".concat(n).concat(";"));break;case Ot.RIGHT:r=r.concat("padding-right:".concat(n).concat(";"));break;case Ot.TOP:r=r.concat("padding-top:".concat(n).concat(";"));break;case Ot.BOTTOM:r=r.concat("padding-bottom:".concat(n).concat(";"));break;case Ot.ALL:r=r.concat("padding-left:".concat(n).concat(";")),r=r.concat("padding-right:".concat(n).concat(";")),r=r.concat("padding-top:".concat(n).concat(";")),r=r.concat("padding-bottom:".concat(n).concat(";"));break;case Ot.HORIZONTAL:r=r.concat("padding-left:".concat(n).concat(";")),r=r.concat("padding-right:".concat(n).concat(";"));break;case Ot.VERTICAL:r=r.concat("padding-top:".concat(n).concat(";")),r=r.concat("padding-bottom:".concat(n).concat(";"))}})),r=".spacer {".concat(r).concat().concat("}");let i="";return t.forEach((t=>{i=i.concat(t.asMediaStyle(r))})),i}};Nt.styles=i`
    .spacer,
    ::slotted(.spacer) {
      box-sizing: border-box;
      display: block;
    }
  `,At([rt({type:Array}),kt("design:type",Array)],Nt.prototype,"devices",void 0),At([rt({type:Array}),kt("design:type",Array)],Nt.prototype,"spacerTypes",void 0),At([rt({type:String}),kt("design:type",String)],Nt.prototype,"spacerSize",void 0),At([rt({type:String}),kt("design:type",String)],Nt.prototype,"cssStyle",void 0),Nt=At([Q("nidoca-layout-spacer")],Nt);var Ct=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},_t=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let It=class extends Z{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return I`
      <div class="ACCORDION_ITEM">
        <nidoca-border
          .borderProperties="${[Tt.BOTTOM,Tt.LEFT,Tt.RIGHT,Tt.FULL_WIDTH]}"
        >
          <nidoca-layout-flex
            class="ACCORDION_HEADER"
            @click="${()=>this.toggle()}"
            .flexDirection="${ie.ROW}"
            .flexWrap="${ae.WRAP}"
            .flexJustifyContent="${se.SPACE_BETWEEN}"
            .flexAlignItems="${le.CENTER}"
            .flexAlignContent="${ce.CENTER}"
          >
            <nidoca-layout-spacer
              spacerSize="${wt.MEDIUM}"
              .spacerTypes="${[Ot.LEFT]}"
            >
              <nidoca-typography text="${this.header}"></nidoca-typography>
            </nidoca-layout-spacer>
            <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
          </nidoca-layout-flex>
          ${this.opened?I`<slot></slot>`:I``}
        </nidoca-border>
      </div>
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};It.styles=i`
    .ACCORDION_HEADER {
      cursor: pointer;
    }
  `,Ct([rt({type:String}),_t("design:type",String)],It.prototype,"header",void 0),Ct([rt({type:Boolean}),_t("design:type",Boolean)],It.prototype,"opened",void 0),It=Ct([Q("nidoca-accordion-item")],It);var Lt,Pt=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},jt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.SINGLE="SINGLE",t.MULTI="MULTI"}(Lt||(Lt={}));let Bt=class extends Z{constructor(){super(...arguments),this.accordionType=Lt.SINGLE}render(){return I`
      <nidoca-border
        .borderProperties="${[Tt.TOP,Tt.FULL_WIDTH]}"
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
      >
        <slot id="accordionSlot"></slot>
      </nidoca-border>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case Lt.SINGLE:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof It&&n!=e&&(n.opened=!1)}}case Lt.MULTI:}t.stopPropagation()}};Bt.styles=i``,Pt([rt({type:Lt}),jt("design:type",String)],Bt.prototype,"accordionType",void 0),Pt([it("#accordionSlot"),jt("design:type",Object)],Bt.prototype,"accordionSlot",void 0),Bt=Pt([Q("nidoca-accordion")],Bt);var Dt,Mt,zt=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Wt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6",t.SUBTITLE1="SUBTITLE1",t.SUBTITLE2="SUBTITLE2",t.BODY1="BODY1",t.BODY2="BODY2",t.BUTTON="BUTTON",t.CAPTION="CAPTION",t.OVERLINE="OVERLINE"}(Dt||(Dt={})),function(t){t.JUSTIFY="text-align:justify;",t.JUSTIFY_ALL="text-align:justify-all;",t.LEFT="text-align: left;",t.RIGHT="text-align: right;",t.CENTER="text-align: center;",t.START="text-align: start;",t.END="text-align: end;",t.MATCH_PARENT="text-align: match-parent;",t.INHERIT="text-align: inherit;",t.INITIAL="text-align: initial;",t.UNSET="text-align: unset;"}(Mt||(Mt={}));let Ht=class extends Z{constructor(){super(...arguments),this.type=Dt.BODY1,this.textAlign=Mt.START,this.text=""}render(){return I`
      <span class="TYPOGRAPHY ${this.type}" style="${this.textAlign}"
        >${this.text}<slot></slot
      ></span>
    `}};Ht.styles=i`
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
  `,zt([rt({type:Dt,converter:String}),Wt("design:type",String)],Ht.prototype,"type",void 0),zt([rt({type:Mt,converter:String}),Wt("design:type",String)],Ht.prototype,"textAlign",void 0),zt([rt({type:String}),Wt("design:type",String)],Ht.prototype,"text",void 0),Ht=zt([Q("nidoca-typography")],Ht);var Ut,Gt=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ft=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(Ut||(Ut={}));let Yt=class extends Z{constructor(){super(...arguments),this.icon="",this.title="",this.isLast=!1,this.first=!1}render(){return I`
      <nidoca-layout-flex
        .flexDirection="${ie.COLUMN}"
        .flexWrap="${ae.NO_WRAP}"
        .flexJustifyContent="${se.SPACE_EVENLY}"
        .flexAlignItems="${le.FLEX_START}"
        .flexAlignContent="${ce.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
      >
        <nidoca-layout-flex
          .flexDirection="${ie.ROW}"
          .flexWrap="${ae.NO_WRAP}"
          .flexJustifyContent="${se.FLEX_START}"
          .flexAlignItems="${le.CENTER}"
          .flexAlignContent="${ce.SPACE_EVENLY}"
          containerStyle=""
          itemStyle=""
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${po.NONE}"
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

          ${this.isLast?I``:I`<nidoca-icon
            color="${this.determineBackgroundColor(this.state)}"
            icon="label_important">
          </nidoca-icon>`}
        </nidoca-layout-flex>
        <nidoca-typography
          style="width:48px;"
          .type="${Dt.OVERLINE}"
          textAlign="${Mt.CENTER}"
          text="${this.title}"
          ><slot></slot>
        </nidoca-typography>
      </nidoca-layout-flex>
    `}determineBackgroundColor(t){return t==Ut.COMPLETED?"var(--app-color-primary)":t==Ut.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==Ut.FINISH?"var(--app-color-success)":t==Ut.COMPLETED?"var(--mdc-theme-on-primary)":t==Ut.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};Yt.styles=i`
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
  `,Gt([rt({type:String}),Ft("design:type",String)],Yt.prototype,"icon",void 0),Gt([rt({type:String}),Ft("design:type",String)],Yt.prototype,"title",void 0),Gt([rt({type:Number}),Ft("design:type",Object)],Yt.prototype,"state",void 0),Gt([rt({type:Boolean}),Ft("design:type",Boolean)],Yt.prototype,"isLast",void 0),Yt=Gt([Q("nidoca-wizard-step")],Yt);var Xt=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Vt=class extends Z{render(){return I`
      <nidoca-layout-flex
        .flexDirection="${ie.ROW}"
        .flexWrap="${ae.NO_WRAP}"
        .flexJustifyContent="${se.FLEX_START}"
        .flexAlignItems="${le.FLEX_START}"
        .flexAlignContent="${ce.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-flex>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let n=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof Yt&&(e.index=t,e.state==Ut.CURRENT&&(n=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(n)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof Yt&&void 0!==n.index&&(n.index<t?n.state=Ut.COMPLETED:n.index==t?n.state=Ut.CURRENT:n.state=Ut.OPEN)}}}};Vt.styles=i``,Xt([it("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Vt.prototype,"wizardSlot",void 0),Vt=Xt([Q("nidoca-wizard")],Vt);var qt=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Kt=class extends Z{constructor(){super(...arguments),this.clickable=!0}render(){return I`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Kt.styles=i`
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
  `,qt([rt({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Kt.prototype,"clickable",void 0),Kt=qt([Q("nidoca-chip")],Kt);var Jt=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Zt=class extends Z{constructor(){super(...arguments),this.code=""}render(){return I`
         <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
      `}};Zt.styles=i`
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
   `,Jt([rt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Zt.prototype,"code",void 0),Zt=Jt([Q("nidoca-code")],Zt);var Qt=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},te=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ee=class extends Z{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const o=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?I`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:I``}calculatePositionStyle(t){let e="";if(t){const o=t.getBoundingClientRect();o.right>window.innerWidth/2?e+=`right:${window.innerWidth-o.right}px;`:e+=`left:${o.left}px;`,o.top>window.innerHeight/2?e+=`bottom:${o.height+window.innerHeight-o.top}px;`:e+=`top:${o.bottom}px;`}return e}};ee.styles=i`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Qt([rt({type:Boolean}),te("design:type",Boolean)],ee.prototype,"show",void 0),Qt([rt({type:Object}),te("design:type",Object)],ee.prototype,"associatedElement",void 0),ee=Qt([Q("nidoca-elevation"),te("design:paramtypes",[])],ee);var oe=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};class ne{}ne.PROGRESS="PROGRESS",ne.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let re=class extends Z{constructor(){super(...arguments),this.progressType=ne.PROGRESS_CIRCULAR}render(){return I` <progress class="${this.progressType}"></progress> `}};re.styles=i`
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
  `,oe([rt({type:ne}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",ne)],re.prototype,"progressType",void 0),re=oe([Q("nidoca-progress")],re);var ie,ae,se,le,ce,pe=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},de=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.ROW="row",t.ROW_REVERSE="rowData-reverse",t.COLUMN="column",t.COLUMN_REVERSE="column-reverse"}(ie||(ie={})),function(t){t.WRAP="wrap",t.NO_WRAP="nowrap",t.WRAP_REVERSE="flexWrap-reverse"}(ae||(ae={})),function(t){t.FLEX_START="flex-start",t.FLEX_END="flex-end",t.CENTER="center",t.SPACE_BETWEEN="space-between",t.SPACE_AROUND="space-around",t.SPACE_EVENLY="space-evenly"}(se||(se={})),function(t){t.FLEX_START="flex-start",t.FLEX_END="flex-end",t.CENTER="center",t.STRETCH="stretch",t.START="start",t.END="end",t.BASELINE="baseline",t.FIRST_BASELINE="first baseline",t.LAST_BASLINE="last baseline",t.SAFE="safe",t.UNSAFE="unsafe"}(le||(le={})),function(t){t.FLEX_START="flex-start",t.FLEX_END="flex-end",t.CENTER="center",t.STRETCH="stretch",t.SPACE_AROUND="space-around",t.SPACE_EVENLY="space-evenly",t.SPACE_BETWEEN="space-between",t.START="start",t.END="end",t.BASELINE="baseline",t.FIRST_BASELINE="first baseline",t.LAST_BASLINE="last baseline",t.SAFE="safe",t.UNSAFE="unsafe"}(ce||(ce={}));let he=class extends Z{constructor(){super(...arguments),this.flexDirection=ie.ROW,this.flexWrap=ae.WRAP,this.flexJustifyContent=se.FLEX_START,this.flexAlignItems=le.FLEX_START,this.flexAlignContent=ce.FLEX_START}render(){return I`
      <slot
        class="flexContainer flexContainerDevice"
        style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.flexJustifyContent}; align-items: ${this.flexAlignItems}; align-content: ${this.flexAlignContent};"
        id="slotElement"
        @slotchange="${t=>this.slotChanged(t)}"
      ></slot>
    `}slotChanged(t){const e=t.target;this.changeSlotComponentsStyle(e)}changeSlotComponentsStyle(t){if(null==t)return;const e=t.assignedElements();for(let t=0;t<e.length;t++){const o=e[t].classList;o.contains("flexItem")||o.add("flexItem"),o.contains("flexItemDevice")||o.add("flexItemDevice")}}};he.styles=i`
    :host,
    *,
    ::slotted(*) {
      box-sizing: border-box;
      display: inline-block;
    }

    .flexContainer,
    ::slotted(.flexContainer) {
      margin: auto;
      display: flex;
      overflow: auto;
      box-sizing: border-boxed;
      width: 100%;
    }

    .flexItem,
    ::slotted(.flexItem) {
      box-sizing: border-box;
    }
  `,pe([rt({type:ie,converter:String}),de("design:type",String)],he.prototype,"flexDirection",void 0),pe([rt({type:ae,converter:String}),de("design:type",String)],he.prototype,"flexWrap",void 0),pe([rt({type:se,converter:String}),de("design:type",String)],he.prototype,"flexJustifyContent",void 0),pe([rt({type:le,converter:String}),de("design:type",String)],he.prototype,"flexAlignItems",void 0),pe([rt({type:ce,converter:String}),de("design:type",String)],he.prototype,"flexAlignContent",void 0),he=pe([Q("nidoca-layout-flex")],he);var ue,fe,ye=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ge=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.CONTAINED="CONTAINED",t.OUTLINED="OUTLINED",t.TEXT="TEXT"}(fe||(fe={}));let me=class extends Z{constructor(){super(...arguments),this.theme=vt.PRIMARY,this.buttonType=fe.CONTAINED,this.leadingIcon="",this.text=""}render(){return I`
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
      <nidoca-ripple>
        <nidoca-border
          theme="${this.theme}"
          borderSize="${this.buttonType==fe.TEXT?Et.NONE:Et.THIN}"
        >
          <nidoca-layout-flex
            class="BUTTON ${this.buttonType}"
            @click="${()=>{this.clicked()}}"
            flexWrap="${ae.NO_WRAP}"
            .flexJustifyContent="${se.CENTER}"
            .flexAlignItems="${le.CENTER}"
          >
            ${this.leadingIcon?I`<nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>`:I``}
            ${this.leadingIcon&&this.buttonType!=fe.TEXT?I`<nidoca-layout-spacer spacerSize="${wt.MEDIUM}"> </nidoca-layout-spacer>`:I``}

            <nidoca-layout-spacer
              spacerSize="${wt.BIG}"
              .spacerTypes="${[Ot.TOP,Ot.BOTTOM]}"
            >
              <nidoca-typography text="${this.text}" type="${Dt.BUTTON}">
                <slot></slot>
              </nidoca-typography>
            </nidoca-layout-spacer>

            ${this.buttonType!=fe.TEXT?I`<nidoca-layout-spacer spacerSize="${wt.MEDIUM}"></nidoca-layout-spacer>`:I``}
          </nidoca-layout-flex>
        </nidoca-border>
      </nidoca-ripple>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};me.styles=i`
    :host {
      display: block;
      width: max-content;
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
  `,ye([rt({type:vt,converter:String}),ge("design:type","function"==typeof(ue=void 0!==vt&&vt)?ue:Object)],me.prototype,"theme",void 0),ye([rt({type:fe,converter:String}),ge("design:type",String)],me.prototype,"buttonType",void 0),ye([rt({type:String}),ge("design:type",String)],me.prototype,"leadingIcon",void 0),ye([rt({type:String}),ge("design:type",String)],me.prototype,"text",void 0),me=ye([Q("nidoca-button")],me);var be,ve=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};!function(t){t.NONE="NONE",t.KEY_LIGHT="KEY_LIGHT",t.AMBIENT_LIGHT="AMBIENT_LIGHT",t.COMBINED="COMBINED"}(be||(be={}));let xe=class extends Z{constructor(){super(...arguments),this.shadowType=be.KEY_LIGHT}render(){return I` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `}};xe.styles=i`

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
  `,ve([rt({type:be}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],xe.prototype,"shadowType",void 0),xe=ve([Q("nidoca-box-shadow")],xe);var Te,Ee,$e=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.NORMAL="NORMAL",t.CLEAR="CLEAR"}(Ee||(Ee={}));let Se=class extends Z{constructor(){super(...arguments),this.label="",this.showLabel=!0,this.errorText="",this.infoText="",this.warningText="",this.theme=vt.SURFACE,this.inputframeMode=Ee.NORMAL}render(){return this.inputframeMode==Ee.NORMAL?I`
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
            .borderSize="${Et.MEDIUM}"
            .borderProperties="${[Tt.FULL_WIDTH,Tt.BOTTOM_SELECTED,Tt.BOTTOM]}"
          >
            <nidoca-layout-spacer
              cssStyle="width:100%;"
              spacerSize="${wt.SMALL}"
              .spacerTypes="${[Ot.ALL]}"
            >
              <nidoca-layout-flex
                .flexAlignContent="${ce.CENTER}"
                itemStyle="flex-basis: 100%;"
              >
                ${this.showLabel?I`
                      <nidoca-typography
                        class="label"
                        .type="${Dt.CAPTION}"
                        text="${this.label}"
                      ></nidoca-typography>
                    `:I``}
                <slot id="slotElement"></slot>
              </nidoca-layout-flex>
            </nidoca-layout-spacer>
          </nidoca-border>

          ${this.infoText?I`<nidoca-typography
                .type="${Dt.BODY1}"
                text="${this.infoText}"
              ></nidoca-typography>`:I``}
          ${this.warningText?I` <nidoca-typography
                style="color:var(--app-color-warning-background)"
                .type="${Dt.BODY1}"
                text="${this.warningText}"
              ></nidoca-typography>`:I``}
          ${this.errorText?I` <nidoca-typography
                style="color:var(--app-color-error-background)"
                .type="${Dt.BODY1}"
                text="${this.errorText}"
              ></nidoca-typography>`:I``}
        `:I`<slot id="slotElement"></slot>`}setShowLabel(){if(this.slotElement){const t=this.slotElement.assignedElements();for(let e=0;e<t.length;e++){const o=t[e];("SELECT"===o.tagName||"date"===o.getAttribute("type")||"datetime-local"===o.getAttribute("type")||"month"===o.getAttribute("type")||"time"===o.getAttribute("type")||"week"===o.getAttribute("type")||o instanceof HTMLInputElement)&&(this.showLabel=!0)}}}};Se.styles=i``,$e([rt({type:String}),Re("design:type",String)],Se.prototype,"label",void 0),$e([rt({type:Boolean}),Re("design:type",Boolean)],Se.prototype,"showLabel",void 0),$e([rt({type:String}),Re("design:type",String)],Se.prototype,"errorText",void 0),$e([rt({type:String}),Re("design:type",String)],Se.prototype,"infoText",void 0),$e([rt({type:String}),Re("design:type",String)],Se.prototype,"warningText",void 0),$e([rt({type:String}),Re("design:type","function"==typeof(Te=void 0!==vt&&vt)?Te:Object)],Se.prototype,"theme",void 0),$e([rt({type:String}),Re("design:type",String)],Se.prototype,"inputframeMode",void 0),$e([it("#slotElement"),Re("design:type",Object)],Se.prototype,"slotElement",void 0),Se=$e([Q("nidoca-form-inputframe")],Se);var Oe=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},we=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ae=class extends Z{constructor(){super(...arguments),this.autocomplete=!0}render(){return I`
      <form
        class="container"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        .?autocomplete="${this.autocomplete}"
      >
        <slot id="slotElement"></slot>
      </form>
    `}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const n=o[t];this.recursiveInputElementSearch(n,e)}return e}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t&&e.scrollIntoView(!0),t=!1);return t}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const n=o.getOutputData();e[n.key]=n.value,t.append(n.key,n.value)}const o={};return o.jsonObject=e,o.formData=t,o}formButtonClicked(t){console.log("formButton clicked: "+t.detail),"submitButton"===t.detail&&this.dispatchEvent(new CustomEvent("nidoca-event-form-submit-button-clicked",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}recursiveInputElementSearch(t,e){if(t instanceof bt)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};Ae.styles=i`
    .container {
      box-sizing: border-box;
    }
  `,Oe([rt({type:Boolean}),we("design:type",Boolean)],Ae.prototype,"autocomplete",void 0),Oe([it("#slotElement"),we("design:type",Object)],Ae.prototype,"slotElement",void 0),Ae=Oe([Q("nidoca-form")],Ae);const ke=t=>null!=t?t:P;var Ne,Ce,_e=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ie=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url"}(Ce||(Ce={}));let Le=class extends bt{constructor(){super(...arguments),this.type=Ce.TEXT,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=Ee.NORMAL}render(){return this.type==Ce.HIDDEN?I`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:I`
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
              size="${ke(this.size)}"
              minlength="${ke(this.minlength)}"
              maxlength="${ke(this.maxlength)}"
              min="${ke(this.min)}"
              max="${ke(this.max)}"
              step="${ke(this.step)}"
              ?required="${this.required}"
              ?disabled="${this.disabled}"
              ?checked="${this.checked}"
            />
          </nidoca-form-inputframe>
        `}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Le.styles=i`
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
  `,_e([rt({type:String}),Ie("design:type",String)],Le.prototype,"type",void 0),_e([rt({type:String}),Ie("design:type",String)],Le.prototype,"name",void 0),_e([rt(),Ie("design:type",Object)],Le.prototype,"value",void 0),_e([rt({type:String}),Ie("design:type",String)],Le.prototype,"label",void 0),_e([rt({type:Boolean}),Ie("design:type",Boolean)],Le.prototype,"required",void 0),_e([rt({type:String}),Ie("design:type",String)],Le.prototype,"placeholder",void 0),_e([rt({type:Boolean}),Ie("design:type",Boolean)],Le.prototype,"disabled",void 0),_e([rt({type:Boolean}),Ie("design:type",Boolean)],Le.prototype,"checked",void 0),_e([rt({type:Number}),Ie("design:type",Object)],Le.prototype,"maxlength",void 0),_e([rt({type:Number}),Ie("design:type",Object)],Le.prototype,"minlength",void 0),_e([rt({type:Number}),Ie("design:type",Object)],Le.prototype,"min",void 0),_e([rt({type:Number}),Ie("design:type",Object)],Le.prototype,"max",void 0),_e([rt({type:Number}),Ie("design:type",Object)],Le.prototype,"step",void 0),_e([rt({type:Number}),Ie("design:type",Object)],Le.prototype,"size",void 0),_e([rt({type:String}),Ie("design:type",String)],Le.prototype,"errorText",void 0),_e([rt({type:String}),Ie("design:type",String)],Le.prototype,"infoText",void 0),_e([rt({type:String}),Ie("design:type",String)],Le.prototype,"warningText",void 0),_e([rt({type:String}),Ie("design:type","function"==typeof(Ne=void 0!==Ee&&Ee)?Ne:Object)],Le.prototype,"inputframeMode",void 0),_e([it("#inputElement"),Ie("design:type",Object)],Le.prototype,"inputElement",void 0),Le=_e([Q("nidoca-form-text")],Le);var Pe,je=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let De=class extends bt{constructor(){super(...arguments),this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=Ee.NORMAL}render(){return I`
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
    `}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};De.styles=i`
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
  `,je([rt({type:String}),Be("design:type",String)],De.prototype,"name",void 0),je([rt(),Be("design:type",Object)],De.prototype,"value",void 0),je([rt({type:String}),Be("design:type",String)],De.prototype,"label",void 0),je([rt({type:Boolean}),Be("design:type",Boolean)],De.prototype,"required",void 0),je([rt({type:String}),Be("design:type",String)],De.prototype,"placeholder",void 0),je([rt({type:Boolean}),Be("design:type",Boolean)],De.prototype,"disabled",void 0),je([rt({type:Number}),Be("design:type",Number)],De.prototype,"rows",void 0),je([rt({type:String}),Be("design:type",String)],De.prototype,"errorText",void 0),je([rt({type:String}),Be("design:type",String)],De.prototype,"infoText",void 0),je([rt({type:String}),Be("design:type",String)],De.prototype,"warningText",void 0),je([rt({type:String}),Be("design:type","function"==typeof(Pe=void 0!==Ee&&Ee)?Pe:Object)],De.prototype,"inputframeMode",void 0),je([it("#inputElement"),Be("design:type",Object)],De.prototype,"inputElement",void 0),De=je([Q("nidoca-form-textarea")],De);var Me,ze,We=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},He=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.DATE="date",t.DATETIME_LOCAL="datetime-local",t.MONTH="month",t.TIME="time",t.WEEK="week"}(ze||(ze={}));let Ue=class extends bt{constructor(){super(...arguments),this.type=ze.DATE,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.multiple=!1,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=Ee.NORMAL}render(){return I`
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
          size="${ke(this.size)}"
          minlength="${ke(this.minlength)}"
          maxlength="${ke(this.maxlength)}"
          min="${ke(this.min)}"
          max="${ke(this.max)}"
          step="${ke(this.step)}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?multiple="${this.multiple}"
        />
      </nidoca-form-inputframe>
    `}getOutputData(){var t;return{key:this.name,value:null===(t=this.inputElement)||void 0===t?void 0:t.value}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Ue.styles=i`
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
  `,We([rt(),He("design:type",String)],Ue.prototype,"type",void 0),We([rt({type:String}),He("design:type",String)],Ue.prototype,"name",void 0),We([rt({type:String}),He("design:type",String)],Ue.prototype,"value",void 0),We([rt({type:String}),He("design:type",String)],Ue.prototype,"label",void 0),We([rt({type:Boolean}),He("design:type",Boolean)],Ue.prototype,"required",void 0),We([rt({type:String}),He("design:type",String)],Ue.prototype,"placeholder",void 0),We([rt({type:Boolean}),He("design:type",Boolean)],Ue.prototype,"disabled",void 0),We([rt({type:Boolean}),He("design:type",Boolean)],Ue.prototype,"checked",void 0),We([rt({type:Boolean}),He("design:type",Boolean)],Ue.prototype,"multiple",void 0),We([rt({type:Number}),He("design:type",Object)],Ue.prototype,"maxlength",void 0),We([rt({type:Number}),He("design:type",Object)],Ue.prototype,"minlength",void 0),We([rt({type:Number}),He("design:type",Object)],Ue.prototype,"min",void 0),We([rt({type:Number}),He("design:type",Object)],Ue.prototype,"max",void 0),We([rt({type:Number}),He("design:type",Object)],Ue.prototype,"step",void 0),We([rt({type:Number}),He("design:type",Object)],Ue.prototype,"size",void 0),We([rt({type:String}),He("design:type",String)],Ue.prototype,"errorText",void 0),We([rt({type:String}),He("design:type",String)],Ue.prototype,"infoText",void 0),We([rt({type:String}),He("design:type",String)],Ue.prototype,"warningText",void 0),We([it("#inputElement"),He("design:type",Object)],Ue.prototype,"inputElement",void 0),We([rt({type:String}),He("design:type","function"==typeof(Me=void 0!==Ee&&Ee)?Me:Object)],Ue.prototype,"inputframeMode",void 0),Ue=We([Q("nidoca-form-date")],Ue);var Ge,Fe=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xe=class extends bt{constructor(){super(...arguments),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=vt.PRIMARY}render(){return I`
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
        <nidoca-typography .type="${Dt.SUBTITLE1}" text="${this.label}">
          <slot></slot>
        </nidoca-typography>

        ${this.infoText.length>0?I` <nidoca-typography
              .type="${Dt.SUBTITLE2}"
              text="${this.infoText}"
            ></nidoca-typography>`:I``}

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

      ${this.warningText?I` <nidoca-typography
            style="color:var(--app-color-warning-background)"
            .type="${Dt.BODY1}"
            text="${this.warningText}"
          ></nidoca-typography>`:I``}
      ${this.errorText?I` <nidoca-typography
            style="color:var(--app-color-error-background)"
            .type="${Dt.BODY1}"
            text="${this.errorText}"
          ></nidoca-typography>`:I``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Xe.styles=i`
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
  `,Fe([rt({type:String}),Ye("design:type",String)],Xe.prototype,"name",void 0),Fe([rt({type:String}),Ye("design:type",String)],Xe.prototype,"label",void 0),Fe([rt({type:String}),Ye("design:type",String)],Xe.prototype,"infoText",void 0),Fe([rt({type:String}),Ye("design:type",String)],Xe.prototype,"errorText",void 0),Fe([rt({type:String}),Ye("design:type",String)],Xe.prototype,"warningText",void 0),Fe([rt({type:Boolean}),Ye("design:type",Boolean)],Xe.prototype,"required",void 0),Fe([rt({type:Boolean}),Ye("design:type",Boolean)],Xe.prototype,"disabled",void 0),Fe([rt({type:Boolean}),Ye("design:type",Boolean)],Xe.prototype,"checked",void 0),Fe([rt({type:String}),Ye("design:type","function"==typeof(Ge=void 0!==vt&&vt)?Ge:Object)],Xe.prototype,"theme",void 0),Fe([it("#inputElement"),Ye("design:type",Object)],Xe.prototype,"inputElement",void 0),Xe=Fe([Q("nidoca-form-switch")],Xe);class Ve{constructor(t,e,o){this.key=t,this.minWidth=e,this.maxWidth=o}static applyDevices(t,e){for(let o=0;o<e.length;o++)if(e[o]==this.getCurrentScreen())return t;return""}static getCurrentScreen(){let t=null;return[Ve.MOBILE,Ve.TABLET,Ve.DESKTOP].forEach((e=>{(null==e.minWidth||e.minWidth<window.innerWidth)&&(null==e.maxWidth||e.maxWidth>window.innerWidth)&&(t=e)})),t}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}Ve.MOBILE=new Ve("MOBILE",0,640),Ve.TABLET=new Ve("TABLET",641,1007),Ve.DESKTOP=new Ve("DESKTOP",1008,null);var qe=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Ke=class extends Z{render(){return I`<nidoca-border .borderProperties="${[Tt.BOTTOM]}">
      <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"> </slot
    ></nidoca-border>`}slotChanged(t){const e=t.target.assignedElements(),o=e.length;for(let t=0;t<o;t++){const n=e[t],r=Ve.getCurrentScreen();if(r)switch(r){case Ve.MOBILE:n.setAttribute("style","flex-basis:100%;");break;case Ve.TABLET:case Ve.DESKTOP:n.setAttribute("style","flex-basis:"+String(100/o)+"%;")}}}};Ke.styles=i`
    slot {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-content: center;
    }
  `,qe([it("#slotElement"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Ke.prototype,"slotElement",void 0),Ke=qe([Q("nidoca-layout-section")],Ke);var Je=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Ze=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Qe=class extends Z{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return I`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,n,r,i){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(r).concat(";").concat("bottom:").concat(i).concat(";")}};Qe.styles=i`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Je([rt({type:String}),Ze("design:type",String)],Qe.prototype,"height",void 0),Je([rt({type:String}),Ze("design:type",String)],Qe.prototype,"width",void 0),Je([rt({type:String}),Ze("design:type",String)],Qe.prototype,"left",void 0),Je([rt({type:String}),Ze("design:type",String)],Qe.prototype,"top",void 0),Je([rt({type:String}),Ze("design:type",String)],Qe.prototype,"right",void 0),Je([rt({type:String}),Ze("design:type",String)],Qe.prototype,"bottom",void 0),Qe=Je([Q("nidoca-layout-floating")],Qe);var to=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},eo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class oo{}oo._100="_100",oo._75="_75",oo._50="_50",oo._25="_25",oo.MIN_CONTENT="MIN_CONTENT",oo.AUTO="AUTO";let no=class extends Z{constructor(){super(...arguments),this.width=oo.MIN_CONTENT,this.devices=[Ve.DESKTOP,Ve.TABLET,Ve.MOBILE]}render(){return I`
      <div class="container ${Ve.applyDevices(this.width,this.devices)}">
        <div class="container FIT_CONTENT">
          <slot></slot>
        </div>
      </div>
    `}};no.styles=i`
    .container,
    ::slotted(.container) {
      margin: auto;
    }

    ._100,
    ::slotted(._100) {
      width: 100%;
    }
    ._75,
    ::slotted(._75) {
      width: 75%;
    }
    ._50,
    ::slotted(._50) {
      width: 50%;
    }
    ._25,
    ::slotted(._25) {
      width: 25%;
    }

    .MIN_CONTENT,
    ::slotted(.MIN_CONTENT) {
      width: min-content;
    }
    .AUTO,
    ::slotted(.AUTO) {
      width: auto;
    }
    .FIT_CONTENT,
    ::slotted(.FIT_CONTENT) {
      width: fit-content;
    }
  `,to([rt({type:oo,converter:String}),eo("design:type",String)],no.prototype,"width",void 0),to([rt({type:Ve,converter:Array}),eo("design:type",Array)],no.prototype,"devices",void 0),no=to([Q("nidoca-layout-container")],no);var ro=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ao=class extends Z{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-normal)",this.title=""}render(){return I`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.title}"
        @click="${this.clicked}"
        style="${this.cssStyle}"
        >${this.icon}</i
      >
    `}clicked(){return function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function a(t){try{l(n.next(t))}catch(t){i(t)}}function s(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};ao.styles=i`
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
  `,ro([rt({type:String}),io("design:type",String)],ao.prototype,"icon",void 0),ro([rt({type:Boolean}),io("design:type",Boolean)],ao.prototype,"clickable",void 0),ro([rt({type:Boolean}),io("design:type",Boolean)],ao.prototype,"deactivated",void 0),ro([rt({type:String}),io("design:type",String)],ao.prototype,"cssStyle",void 0),ro([rt({type:String}),io("design:type",String)],ao.prototype,"title",void 0),ao=ro([Q("nidoca-icon")],ao);var so,lo=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},co=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class po{}po.NONE="NONE",po.DEFAULT_SHADOW="DEFAULT_SHADOW",po.SHADOW_1="SHADOW_1",po.SHADOW_2="SHADOW_2",po.SHADOW_3="SHADOW_3";let ho=class extends Z{constructor(){super(...arguments),this.icon="",this.theme=vt.PRIMARY,this.shadowType=po.DEFAULT_SHADOW,this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-normal)"}render(){return I`
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
    `}clicked(){return function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function a(t){try{l(n.next(t))}catch(t){i(t)}}function s(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};ho.styles=i`
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
  `,lo([rt({type:String}),co("design:type",String)],ho.prototype,"icon",void 0),lo([rt({type:vt}),co("design:type","function"==typeof(so=void 0!==vt&&vt)?so:Object)],ho.prototype,"theme",void 0),lo([rt({type:po}),co("design:type",po)],ho.prototype,"shadowType",void 0),lo([rt({type:Boolean}),co("design:type",Boolean)],ho.prototype,"clickable",void 0),lo([rt({type:Boolean}),co("design:type",Boolean)],ho.prototype,"deactivated",void 0),lo([rt({type:String}),co("design:type",String)],ho.prototype,"cssStyle",void 0),ho=lo([Q("nidoca-icon-extended")],ho);var uo=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let fo=class extends Z{render(){return I`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};fo.styles=i`
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
  `,uo([it("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],fo.prototype,"rippleContainerElement",void 0),fo=uo([Q("nidoca-ripple")],fo);var yo=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},go=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class mo{}mo.ROUND="ROUND",mo.CLICKABLE="CLICKABLE",mo.ZOOM_WRAPPED="ZOOM_WRAPPED",mo.FULL_WIDTH="FULL_WIDTH";let bo=class extends Z{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.richMediaProperties=[mo.CLICKABLE,mo.FULL_WIDTH]}render(){return I`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"><img src="${this.src}" /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat(t)})),e}};bo.styles=i`
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
  `,yo([rt({type:String}),go("design:type",String)],bo.prototype,"src",void 0),yo([rt({type:mo,converter:Array}),go("design:type",Array)],bo.prototype,"richMediaProperties",void 0),bo=yo([Q("nidoca-img")],bo);var vo=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let xo=class extends Z{constructor(){super(...arguments),this.src=""}render(){return I`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};xo.styles=i``,vo([rt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],xo.prototype,"src",void 0),xo=vo([Q("nidoca-movie")],xo);var To=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Eo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $o=class extends Z{constructor(){super(...arguments),this.min=1,this.max=10,this.errorText="nidoca-captcha-wrong-value",this.numberOne=1,this.numberTwo=1}render(){return I`
      <nidoca-form-text
        id="inputfield"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        label="${"nidoca-captcha-label".concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        name="captcha"
        trailingIcon="create"
        type="${Ce.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};$o.styles=i``,To([rt({type:Number}),Eo("design:type",Number)],$o.prototype,"min",void 0),To([rt({type:Number}),Eo("design:type",Number)],$o.prototype,"max",void 0),To([rt({type:String}),Eo("design:type",String)],$o.prototype,"errorText",void 0),To([it("#inputfield"),Eo("design:type",Object)],$o.prototype,"inputfield",void 0),$o=To([Q("nidoca-captcha")],$o);var Ro,So=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Oo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}(Ro||(Ro={}));let wo=class extends Z{constructor(){super(...arguments),this.text="",this.href="",this.targetType=Ro.SELF}render(){return I` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `}};wo.styles=i`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,So([rt({type:String}),Oo("design:type",String)],wo.prototype,"text",void 0),So([rt({type:String}),Oo("design:type",String)],wo.prototype,"href",void 0),So([rt({type:String}),Oo("design:type",String)],wo.prototype,"targetType",void 0),wo=So([Q("nidoca-link")],wo);var Ao=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ko=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let No=class extends Z{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1,this.clickStart=null}update(t){super.update(t),null!=t.get("selectionMode")&&(this.selectionMode||(this.selected=!1))}render(){return I`
      <nidoca-ripple
        @mousedown="${()=>this.downAction()}"
        @mouseup="${()=>this.upAction()}"
        @pointerup="${()=>this.upAction()}"
        @pointerdown="${()=>this.downAction()}"
      >
        <div class="container">
          ${this.selectionMode?I`<nidoca-icon
                class="columnSelection"
                @click="${()=>this.switchSelected()}"
                icon="${this.selected?"check_box":"check_box_outline_blank"}"
              ></nidoca-icon>`:I`<span></span>`}
          <slot name="graphic" class="slotGraphic"></slot>
          <div class="containerTypography">
            <slot></slot>
            <slot name="secondary"></slot>
          </div>
          <slot name="meta" class="slotMeta"></slot>
        </div>
      </nidoca-ripple>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};No.styles=i`
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
  `,Ao([rt({type:Boolean}),ko("design:type",Boolean)],No.prototype,"selectionMode",void 0),Ao([rt({type:Boolean}),ko("design:type",Boolean)],No.prototype,"selected",void 0),No=Ao([Q("nidoca-list-item")],No);var Co,_o=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Lo=class extends Z{constructor(){super(...arguments),this.selectionMode=!1,this.theme=vt.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.selectionMode=this.selectionMode}))}))}render(){return I`
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
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof No&&t.push(n)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof No&&n.selected&&t.push(n)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let o=0;for(let n=0;n<e.length;n++){const r=e[n];r instanceof No&&(r.selected&&t.push(o),o++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){this.getItems().forEach((t=>{t.selected=!1}))}};Lo.styles=i`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,_o([rt({type:Boolean}),Io("design:type",Boolean)],Lo.prototype,"selectionMode",void 0),_o([it("#slotElement"),Io("design:type",Object)],Lo.prototype,"slotElement",void 0),_o([rt({type:String}),Io("design:type","function"==typeof(Co=void 0!==vt&&vt)?Co:Object)],Lo.prototype,"theme",void 0),Lo=_o([Q("nidoca-list")],Lo);var Po,jo=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Bo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Do=class extends Z{constructor(){super(...arguments),this.theme=vt.PRIMARY,this.prominent=!1,this.cssStyle="height:60px;width:100%;position:relativ;"}render(){return I`
      <style>
        :host,
        slot {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-layout-flex
        .flexDirection="${ie.ROW}"
        .flexWrap="${ae.NO_WRAP}"
        .flexJustifyContent="${se.SPACE_BETWEEN}"
        .flexAlignItems="${le.CENTER}"
        .flexAlignContent="${ce.SPACE_AROUND}"
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
      ${this.prominent?I`<slot class="prominent" name="prominent"></slot>`:I``}
    `}};Do.styles=i`
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
  `,jo([rt({type:vt}),Bo("design:type","function"==typeof(Po=void 0!==vt&&vt)?Po:Object)],Do.prototype,"theme",void 0),jo([rt({type:Boolean}),Bo("design:type",Boolean)],Do.prototype,"prominent",void 0),jo([rt({type:String}),Bo("design:type",String)],Do.prototype,"cssStyle",void 0),Do=jo([Q("nidoca-top-app-bar")],Do);var Mo=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},zo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Wo=class extends Z{constructor(){super(...arguments),this.text="",this.rendered=!0}render(){return this.rendered?I`
          <nidoca-layout-flex
            .flexItemProperties="${[]}"
            .flexDirection="${ie.ROW}"
            .flexWrap="${ae.NO_WRAP}"
            .flexJustifyContent="${se.FLEX_END}"
            .flexAlignItems="${le.CENTER}"
            .flexAlignContent="${ce.FLEX_START}"
            itemStyle="flex-basis: 100%;"
          >
            <nidoca-layout-spacer spacerSize="${wt.SMALL}" .spacerTypes="${[Ot.ALL]}">
              <nidoca-typography .type="${Dt.H6}" text="${this.text}"></nidoca-typography>
            </nidoca-layout-spacer>
          </nidoca-layout-flex>
        `:I``}};Wo.styles=i``,Mo([rt({type:String}),zo("design:type",String)],Wo.prototype,"text",void 0),Mo([rt({type:Boolean}),zo("design:type",Boolean)],Wo.prototype,"rendered",void 0),Wo=Mo([Q("nidoca-list-section")],Wo);var Ho=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Uo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Go=class extends Z{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new ao],["row 2",new ao]]}render(){return I`
      <div>
        <table>
          <thead>
            ${mt([this.headers],(()=>I` ${yt(this.headers,(t=>I` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${mt([this.rows],(()=>I`
                  ${yt(this.rows,(t=>I`
                        <tr>
                          ${yt(t,(t=>I` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Go.styles=i`
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
  `,Ho([rt({type:Array}),Uo("design:type",Array)],Go.prototype,"headers",void 0),Ho([rt({type:Array}),Uo("design:type",Array)],Go.prototype,"rows",void 0),Go=Ho([Q("nidoca-table")],Go);var Fo=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let Yo=class extends Z{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?I`<slot></slot>`:I``}};Yo.styles=i``,Fo([rt({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Yo.prototype,"selected",void 0),Yo=Fo([Q("nidoca-tab-content")],Yo);var Xo,Vo=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},qo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ko=class extends Z{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=vt.PRIMARY}render(){return I`
      <style>
        :host(.SELECTED) {
          border-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?I`
              <nidoca-typography
                .type="${Dt.OVERLINE}"
                text="${this.text}"
              ></nidoca-typography>
            `:I``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ko.styles=i`
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
  `,Vo([rt({type:Boolean}),qo("design:type",Boolean)],Ko.prototype,"selected",void 0),Vo([rt({type:String}),qo("design:type",String)],Ko.prototype,"text",void 0),Vo([rt({type:String}),qo("design:type","function"==typeof(Xo=void 0!==vt&&vt)?Xo:Object)],Ko.prototype,"theme",void 0),Ko=Vo([Q("nidoca-tab")],Ko);var Jo,Zo=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Qo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let tn=class extends Z{constructor(){super(...arguments),this.theme=vt.PRIMARY,this.tabIndex=0}render(){return I`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements();console.log(t.length);const e=100/t.length,o=t[this.tabIndex];for(let n=0;n<t.length;n++){const r=t[n];r instanceof Ko&&(r.theme=this.theme,r.style.width=String(e).concat("%"),r==o?(r.selected=!0,r.classList.add("SELECTED")):(r.selected=!1,r.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof Yo&&(this.tabIndex==t?n.selected=!0:n.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];if(n instanceof Ko&&n==t){this.tabIndex=o;break}}}}};tn.styles=i`
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
  `,Zo([it("#tabSlot"),Qo("design:type",Object)],tn.prototype,"tabSlot",void 0),Zo([it("#tabContentSlot"),Qo("design:type",Object)],tn.prototype,"tabContentSlot",void 0),Zo([rt({type:String}),Qo("design:type","function"==typeof(Jo=void 0!==vt&&vt)?Jo:Object)],tn.prototype,"theme",void 0),Zo([rt({type:Number}),Qo("design:type",Number)],tn.prototype,"tabIndex",void 0),tn=Zo([Q("nidoca-tabs")],tn);var en,on=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},nn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let rn=class extends Z{constructor(){super(),this.theme=vt.PRIMARY,this.navigationClosed=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false")}updated(t){super.updated(t),new Promise((t=>requestAnimationFrame(t))).then((()=>{if(null!=this.headerElement){const t=this.headerElement.offsetHeight,e="top:".concat(String(t)).concat("px;"),o="padding-top:".concat(String(t)).concat("px;");console.debug("set header height to corresponding elements: %s",e),null!=this.sidebarElement&&this.sidebarElement.setAttribute("style",e),null!=this.contentElement&&this.contentElement.setAttribute("style",o)}}))}render(){return I`
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
            <nidoca-layout-spacer spacerSize="${wt.LITTLE}">
              <slot class="slotHeader" name="prominent"></slot>
            </nidoca-layout-spacer>
          </span>
        </nidoca-top-app-bar>
      </div>
      <div id="sidebar" class="${this.navigationClosed?"menuClosed":""}"><slot name="sidebar"></slot></div>
      <div id="content" class="${this.navigationClosed?"menuClosed":""}"><slot name="content"></slot></div>
    `}};rn.styles=i`
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
  `,on([rt({type:String}),nn("design:type","function"==typeof(en=void 0!==vt&&vt)?en:Object)],rn.prototype,"theme",void 0),on([rt({type:Boolean}),nn("design:type",Boolean)],rn.prototype,"navigationClosed",void 0),on([rt({type:Boolean}),nn("design:type",Boolean)],rn.prototype,"prominent",void 0),on([it("#header"),nn("design:type",Object)],rn.prototype,"headerElement",void 0),on([it("#sidebar"),nn("design:type",Object)],rn.prototype,"sidebarElement",void 0),on([it("#content"),nn("design:type",Object)],rn.prototype,"contentElement",void 0),rn=on([Q("nidoca-template"),nn("design:paramtypes",[])],rn);var an,sn=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},ln=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let cn=class extends Z{constructor(){super(...arguments),this.theme=vt.PRIMARY,this.value="",this.placeholder="",this.disabled=!1}render(){return I`
      <style>
        .container {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-layout-flex
        class="container"
        .flexDirection="${ie.ROW}"
        .flexWrap="${ae.NO_WRAP}"
        .flexJustifyContent="${se.FLEX_START}"
        .flexAlignItems="${le.CENTER}"
        .flexAlignContent="${ce.FLEX_START}"
      >
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
      </nidoca-layout-flex>
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,o,n){return new(o||(o=Promise))((function(r,i){function a(t){try{l(n.next(t))}catch(t){i(t)}}function s(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};cn.styles=i`
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
  `,sn([rt({type:vt,converter:String}),ln("design:type","function"==typeof(an=void 0!==vt&&vt)?an:Object)],cn.prototype,"theme",void 0),sn([rt({type:String}),ln("design:type",String)],cn.prototype,"value",void 0),sn([rt({type:String}),ln("design:type",String)],cn.prototype,"placeholder",void 0),sn([rt({type:Boolean}),ln("design:type",Boolean)],cn.prototype,"disabled",void 0),sn([it("#inputElement"),ln("design:type",Object)],cn.prototype,"inputElement",void 0),cn=sn([Q("nidoca-search-bar")],cn);var pn=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},dn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class hn{}hn.CENTER="CENTER",hn.LEFT="LEFT",hn.RIGHT="RIGHT",hn.TOP="TOP",hn.BOTTOM="BOTTOM",hn.SLIDE_CENTER="SLIDE_CENTER",hn.SLIDE_LEFT="SLIDE_LEFT",hn.SLIDE_RIGHT="SLIDE_RIGHT",hn.SLIDE_TOP="SLIDE_TOP",hn.SLIDE_BOTTOM="SLIDE_BOTTOM";let un=class extends Z{constructor(){super(...arguments),this.transitionType=hn.CENTER,this.duration=.5}render(){return I` <div class="${this.transitionType}"><slot></slot></div> `}};un.styles=i`
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
  `,pn([rt({type:hn}),dn("design:type",hn)],un.prototype,"transitionType",void 0),pn([rt({type:Number}),dn("design:type",Number)],un.prototype,"duration",void 0),un=pn([Q("nidoca-transition")],un);var fn=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let yn=class extends Z{constructor(){super(...arguments),this.show=!1}render(){return this.show?I`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${hn.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:I``}};yn.styles=i`
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
  `,fn([rt({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],yn.prototype,"show",void 0),yn=fn([Q("nidoca-dialog")],yn);var gn,mn=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},bn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let vn=class extends Z{constructor(){super(...arguments),this.show=!1,this.theme=vt.BACKGROUND}render(){return I`
      <style>
        .box {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        ${Ve.MOBILE.asMediaStyle("slot{min-width:320px;}")}
        ${Ve.TABLET.asMediaStyle("slot{min-width:480px;}")}
        ${Ve.DESKTOP.asMediaStyle("slot{min-width:640px;}")}
      </style>
      <nidoca-dialog .show="${this.show}">
        <nidoca-card class="box" .shadowType="${be.KEY_LIGHT}">
          <nidoca-layout-spacer>
            <slot name="header"></slot>
            <slot name="text"></slot>
            <slot name="action"></slot>
          </nidoca-layout-spacer>
        </nidoca-card>
      </nidoca-dialog>
    `}};vn.styles=i`
    slot {
      display: flex;
    }
  `,mn([rt({type:Boolean}),bn("design:type",Boolean)],vn.prototype,"show",void 0),mn([rt({type:vt}),bn("design:type","function"==typeof(gn=void 0!==vt&&vt)?gn:Object)],vn.prototype,"theme",void 0),vn=mn([Q("nidoca-dialog-action")],vn);var xn=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},Tn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let En=class extends Z{constructor(){super(...arguments),this.imgSrc="",this.title="",this.description=""}render(){return I`<nidoca-layout-flex
      .flexDirection="${ie.COLUMN}"
      .flexWrap="${ae.WRAP}"
      .flexJustifyContent="${se.SPACE_BETWEEN}"
      .flexAlignItems="${le.CENTER}"
      .flexAlignContent="${ce.CENTER}"
    >
      <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[mo.ROUND]}"> </nidoca-img>
      <nidoca-layout-spacer spacerSize="${wt.LITTLE}">
        <nidoca-typography type="${Dt.H3}">${this.title}</nidoca-typography>
      </nidoca-layout-spacer>
      <nidoca-typography type="${Dt.H5}">${this.description}</nidoca-typography>
    </nidoca-layout-flex>`}};xn([rt({type:String}),Tn("design:type",String)],En.prototype,"imgSrc",void 0),xn([rt({type:String}),Tn("design:type",String)],En.prototype,"title",void 0),xn([rt({type:String}),Tn("design:type",String)],En.prototype,"description",void 0),En=xn([Q("nidoca-avatar")],En);let $n=class extends Z{render(){return I`
      <nidoca-box-shadow .shadowType="${be.KEY_LIGHT}">
      <slot class="slotContainer"></slot>
      </nidoca-box-shadow>
    `}};$n.styles=i`
    .slotContainer {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
  `,$n=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([Q("nidoca-card")],$n);let Rn=class extends Z{render(){return I`
    
    <nidoca-layout-spacer .spacerTypes="${[Ot.BOTTOM]}">
    <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
    </nidoca-layout-spacer>
    
    `}slotChanged(t){const e=t.target;this.changeSlotComponentsStyle(e)}changeSlotComponentsStyle(t){if(null==t)return;const e=t.assignedElements();for(let t=0;t<e.length;t++){const o=e[t].classList;o.contains("flexItem")||o.add("flexItem"),o.contains("flexItemDevice")||o.add("flexItemDevice")}}};Rn.styles=i`
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
  `,Rn=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([Q("nidoca-gallery")],Rn);let Sn=class extends Z{render(){return I`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};Sn.styles=i`
    :host {
      display: none;
    }
  `,Sn=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a}([Q("nidoca-print")],Sn);var On,wn=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a},An=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let kn=class extends bt{constructor(){super(...arguments),this.value="",this.options=[],this.name="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.required=!0,this.multiple=!1,this.size=1,this.inputframeMode=Ee.NORMAL}render(){return I`
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
          ${mt([this.value,this.options],(()=>I`
              ${yt(this.options,(t=>null==t?I` <option></option>`:this.isSelectedOption(t)?I` <option value="${t.key}" selected>${t.value}</option> `:I` <option value="${t.key}">${t.value}</option> `))}
            `))}
        </select>
      </nidoca-form-inputframe>
    `}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}static stringArrayToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),t.forEach((t=>{o.push({key:t,value:t})})),o}static toComboboxOptions(t=null,e=null){if(null==t)return[];let o=[];return Object.values(t).forEach((n=>{let r=String(Object.keys(t)[Object.values(t).indexOf(n)]);e&&(r=r.concat(e)),o.push({key:n,value:r})})),o}};kn.styles=i`
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
  `,wn([rt(),An("design:type",Object)],kn.prototype,"value",void 0),wn([rt({type:class{constructor(){this.key=""}}}),An("design:type",Array)],kn.prototype,"options",void 0),wn([rt({type:String}),An("design:type",String)],kn.prototype,"name",void 0),wn([rt({type:String}),An("design:type",String)],kn.prototype,"label",void 0),wn([rt({type:String}),An("design:type",String)],kn.prototype,"errorText",void 0),wn([rt({type:String}),An("design:type",String)],kn.prototype,"infoText",void 0),wn([rt({type:String}),An("design:type",String)],kn.prototype,"warningText",void 0),wn([rt({type:Boolean}),An("design:type",Boolean)],kn.prototype,"required",void 0),wn([rt({type:Boolean}),An("design:type",Boolean)],kn.prototype,"multiple",void 0),wn([rt({type:Number}),An("design:type",Number)],kn.prototype,"size",void 0),wn([rt({type:String}),An("design:type","function"==typeof(On=void 0!==Ee&&Ee)?On:Object)],kn.prototype,"inputframeMode",void 0),wn([it("#selectElement"),An("design:type",Object)],kn.prototype,"selectElement",void 0),kn=wn([Q("nidoca-form-combobox")],kn);class Nn{constructor(t){this.propertyWrapper=t}getInputElement(t){return null==t?I``:this.renderPropertyInput(t.classWrapper,this.propertyWrapper)}renderPropertyInput(t,e){if(null==t)return I``;switch(e.getRenderType()){case tt.STRING:return I`<nidoca-form-text .textType="${Ce.TEXT}"
          value="${t.instance[e.propertyName]}"
          @input="${o=>{t.instance[e.propertyName]=o.target.getOutputData().value,t.instance.requestUpdate()}}"
        /></nidoca-form-text>`;case tt.NUMBER:return I`<nidoca-form-text
          .textType="${Ce.NUMBER}"
          value="${t.instance[e.propertyName]}"
          @input="${o=>{t.instance[e.propertyName]=o.target.getOutputData().value,t.instance.requestUpdate()}}"
        ></nidoca-form-text>`;case tt.BOOLEAN:return I`<nidoca-form-switch
          type="checkbox"
          .checked="${t.instance[e.propertyName]}"
          @input="${o=>{t.instance[e.propertyName]=o.target.getOutputData().value,t.instance.requestUpdate()}}"
        ></nidoca-form-switch`;case tt.COMBOBOX:return I`<nidoca-form-combobox
          .options="${kn.enumToOptions(e.getType(),!1)}"
          value="${t.instance[e.propertyName]}"
          @input="${o=>{t.instance[e.propertyName]=e.getEnumValue(o.target.getOutputData().value),t.instance.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case tt.ARRAY:return I`
          <nidoca-form-combobox
            .options="${kn.toComboboxOptions(e.getType(),e.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${t.instance[e.propertyName]}"
            @input="${o=>{t.instance[e.propertyName]=o.target.getOutputData().value,t.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return I``}}getAsHtml(t){switch(this.propertyWrapper.getConverterTypeName()){case tt.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case tt.ARRAY:return"";case tt.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case tt.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case tt.STRING:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case tt.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${${t.classWrapper.instance[this.propertyWrapper.propertyName]}}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getConverterTypeName()){case tt.COMBOBOX:case tt.ARRAY:return"";case tt.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getConverterTypeName()){case tt.COMBOBOX:case tt.ARRAY:return"";case tt.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class Cn{constructor(t,e){this.showcaseElement=t,this.classWrapper=e}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n</${this.classWrapper.getTagName()}>\n`}getAsAngular(){return`\n<${this.classWrapper.getTagName()}\n${this.classWrapper.getProperties().map((t=>`.${t.propertyName}="\${this.${t.propertyName}}"\n`)).join("")}></${this.classWrapper.getTagName()}>\n`}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(I`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new Nn(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}var _n=function(t,e,o,n){var r,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(i<3?r(a):i>3?r(e,o,a):r(e,o))||a);return i>3&&a&&Object.defineProperty(e,o,a),a};let In=class extends Z{constructor(){super(...arguments),this.clazzGuiWrapper=null,this.customEventNames=[]}render(){var t,e,o;return I`
      <div class="container">

      <nidoca-layout-spacer .spacerTypes="${[Ot.LEFT,Ot.RIGHT]}">


      <nidoca-layout-spacer
      .spacerTypes="${[Ot.TOP,Ot.BOTTOM]}"
    > <nidoca-typography .type="${Dt.H2}">Tag</nidoca-typography>
    </nidoca-layout-spacer>
        <nidoca-code
          >${"<".concat(this.clazzGuiWrapper?this.clazzGuiWrapper.classWrapper.getTagName():"").concat("/>")}</nidoca-code
        >


        <nidoca-layout-spacer
      .spacerTypes="${[Ot.TOP,Ot.BOTTOM]}"
    > <nidoca-typography .type="${Dt.H2}">Vorschau</nidoca-typography>
    </nidoca-layout-spacer>

        <nidoca-layout-container .width="${oo._75}">
          <nidoca-layout-spacer>
            <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
          </nidoca-layout-spacer>
        </nidoca-layout-container>

          ${this.clazzGuiWrapper?I`
                ${(null===(t=this.clazzGuiWrapper)||void 0===t?void 0:t.hasProperties())?I`<nidoca-layout-spacer
                        .spacerTypes="${[Ot.TOP,Ot.BOTTOM]}"
                      >
                        <nidoca-typography .type="${Dt.H2}">Attribute</nidoca-typography>
                      </nidoca-layout-spacer>

                      <nidoca-table
                        .headers="${["name","type","converter type","render type","values"]}"
                        .rows="${this.toAttributeRows(this.clazzGuiWrapper.getPropertyGuiWrappers())}"
                      >
                      </nidoca-table>`:I``}
                ${(null===(e=this.clazzGuiWrapper)||void 0===e?void 0:e.classWrapper.hasSlots())?I` <nidoca-layout-spacer
                        .spacerTypes="${[Ot.TOP,Ot.BOTTOM]}"
                      >
                        <nidoca-typography .type="${Dt.H2}">Slots</nidoca-typography>
                      </nidoca-layout-spacer>

                      <nidoca-table
                        .headers="${["name"]}"
                        .rows="${this.toSlotRows(null===(o=this.clazzGuiWrapper)||void 0===o?void 0:o.classWrapper.getSlotNames())}"
                      >
                      </nidoca-table>`:I``}
                ${this.customEventNames.length>0?I`<nidoca-layout-spacer
                        .spacerTypes="${[Ot.TOP,Ot.BOTTOM]}"
                      >
                        <nidoca-typography .type="${Dt.H2}"
                          >Custom Events</nidoca-typography
                        > </nidoca-layout-spacer
                      ><nidoca-table .headers="${["name"]}" .rows="${this.toCustomEventRows(this.customEventNames)}">
                      </nidoca-table>`:I``}

                <nidoca-layout-spacer .spacerTypes="${[Ot.TOP,Ot.BOTTOM]}">
                  <nidoca-typography .type="${Dt.H2}">Quelltext</nidoca-typography>
                </nidoca-layout-spacer>

                <nidoca-tabs tabIndex="2">
                  <nidoca-tab slot="tab">Javascript</nidoca-tab>
                  <nidoca-tab slot="tab">Typescript</nidoca-tab>
                  <nidoca-tab slot="tab">Lit</nidoca-tab>
                  <nidoca-tab slot="tab">Angular</nidoca-tab>

                  <nidoca-tab-content slot="tabContent">
                    <nidoca-layout-spacer .spacerTypes="${[Ot.TOP]}">
                      <nidoca-code style="width:100%;">${this.clazzGuiWrapper.getAsJavascript()}</nidoca-code>
                    </nidoca-layout-spacer>
                  </nidoca-tab-content>

                  <nidoca-tab-content slot="tabContent">
                    <nidoca-layout-spacer .spacerTypes="${[Ot.TOP]}">
                      <nidoca-code>${this.clazzGuiWrapper.getTypescript()}</nidoca-code>
                    </nidoca-layout-spacer>
                  </nidoca-tab-content>

                  <nidoca-tab-content slot="tabContent">
                    <nidoca-layout-spacer .spacerTypes="${[Ot.TOP]}">
                      <nidoca-code>${this.clazzGuiWrapper.getAsLit()}</nidoca-code>
                    </nidoca-layout-spacer>
                  </nidoca-tab-content>

                  <nidoca-tab-content slot="tabContent">
                    <nidoca-layout-spacer .spacerTypes="${[Ot.TOP]}">
                      <nidoca-code>${this.clazzGuiWrapper.getAsHtml()}</nidoca-code>
                    </nidoca-layout-spacer>
                  </nidoca-tab-content>
                </nidoca-tabs>
              `:I``}
        </nidoca-layout-spacer>
      </div>
    `}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t.propertyWrapper.propertyName),o.push(t.propertyWrapper.getTypeName()),o.push(t.propertyWrapper.getConverterTypeName()),o.push(t.propertyWrapper.getRenderType()),o.push(t.getInputElement(this.clazzGuiWrapper)),e.push(o),o})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const o=[];return o.push(t),e.push(o),o})),e}slotChanged(t){const e=t.target.assignedElements()[0];e instanceof Z&&(this.clazzGuiWrapper=new Cn(this,new ot(e))),this.requestUpdate()}};In.styles=i`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `,_n([rt({type:Array}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Array)],In.prototype,"customEventNames",void 0),In=_n([Q("lit-viewer")],In)})();