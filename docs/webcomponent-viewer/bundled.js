/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class o{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new o(n,e)},s=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new o("string"==typeof t?t:t+"",e))(i)})(t):t;var r;const a=window.trustedTypes,l=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var o,n;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const r=(null!==(n=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(t,e){var i,o,n;const s=this.constructor,r=s._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=s.getPropertyOptions(r),a=t.converter,l=null!==(n=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.2.0");const g=globalThis.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,b="?"+y,x=`<${b}>`,v=document,w=(t="")=>v.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,k=t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,E=/>/g,$=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,M=/'/g,T=/"/g,P=/^(?:script|style|textarea)$/i,A=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),C=A(1),D=(A(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),L=new WeakMap,I=v.createTreeWalker(v,129,null,!1),N=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===R?"!--"===l[1]?r=O:void 0!==l[1]?r=E:void 0!==l[2]?(P.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=$):void 0!==l[3]&&(r=$):r===$?">"===l[0]?(r=null!=n?n:R,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?$:'"'===l[3]?T:M):r===T||r===M?r=$:r===O||r===E?r=R:(r=$,n=void 0);const h=r===$&&t[e+1].startsWith("/>")?" ":"";s+=r===R?i+x:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+y+h):i+y+(-2===c?(o.push(void 0),e):h)}const a=s+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,o]};class B{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,c]=N(t,e);if(this.el=B.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=I.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?Y:"@"===e[1]?q:H})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(P.test(o.tagName)){const t=o.textContent.split(y),e=t.length-1;if(e>0){o.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],w()),I.nextNode(),a.push({type:2,index:++n});o.append(t[e],w())}}}else if(8===o.nodeType)if(o.data===b)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(y,t+1));)a.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,o){var n,s,r,a;if(e===D)return e;let l=void 0!==o?null===(n=i._$Cl)||void 0===n?void 0:n[o]:i._$Cu;const c=_(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,o)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:v).importNode(i,!0);I.currentNode=n;let s=I.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new F(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new G(s,this,t)),this.v.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=I.nextNode(),r++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,o){var n;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),_(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):k(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==j&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S(v.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=B.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new W(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new B(t)),e}A(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new F(this.M(w()),this.M(w()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,i,o,n){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=z(this,t,e,0),s=!_(t)||t!==this._$AH&&t!==D,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=z(this,o[i+r],e,r),a===D&&(a=this._$AH[r]),s||(s=!_(a)||a!==this._$AH[r]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.k(t)}k(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends H{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===j?void 0:t}}const V=g?g.emptyScript:"";class Y extends H{constructor(){super(...arguments),this.type=4}k(t){t&&t!==j?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class q extends H{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:j)===D)return;const o=this._$AH,n=t===j&&o!==j||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==j&&(o===j||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const X={P:"$lit$",V:y,L:b,I:1,N,R:W,D:k,j:z,H:F,O:H,F:Y,B:q,W:U,Z:G},K=window.litHtmlPolyfillSupport;var J,Z;null==K||K(B,F),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.1.1");class Q extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new F(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return D}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.1.1");const et=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e);var it,ot;null===(it=window.HTMLSlotElement)||void 0===it||it.prototype.assignedElements,console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(t){t.STRING="String",t.NUMBER="Number",t.BOOLEAN="Boolean",t.COMBOBOX="Class",t.ARRAY="Array",t.UNDEFINED="undefined"}(ot||(ot={}));class nt{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?ot.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?ot.UNDEFINED:this.getTypeName():ot.COMBOBOX}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let i=0;i<e.length;i++){const o=e[i];if(o.key==t)return o.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class st{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let i=[];if(e&&(e.tagName==t&&i.push(e),e.children.length>0)){const o=null==e?void 0:e.children;for(let e=0;e<o.length;e++)i=i.concat(this.getElementsByTagName(t,o.item(e)))}return i}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed. no lit element ? wrong lit version ?");const e=[];for(const i of Array.from(t.keys()))e.push(new nt(i,t.get(i)));return e}}const rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)}const lt=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(s.finisher=function(e){t(e,o)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}};function ct(t,e){return lt({descriptor:i=>{const o={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[e]&&(this[e]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}const dt=t=>(...e)=>({_$litDirective$:t,values:e});class ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:pt}=X,ut=()=>document.createComment(""),ft=(t,e,i)=>{var o;const n=t._$AA.parentNode,s=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(ut(),s),o=n.insertBefore(ut(),s);i=new pt(e,o,t,t.options)}else{const e=i._$AB.nextSibling,r=i._$AM,a=r!==t;if(a){let e;null===(o=i._$AQ)||void 0===o||o.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==r._$AU&&i._$AP(e)}if(e!==s||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,s),t=e}}}return i},gt=(t,e,i=t)=>(t._$AI(e,i),t),mt={},yt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const o=t._$AB.nextSibling;for(;i!==o;){const t=i.nextSibling;i.remove(),i=t}},bt=(t,e,i)=>{const o=new Map;for(let n=e;n<=i;n++)o.set(t[n],n);return o},xt=dt(class extends ht{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let o;void 0===i?i=e:void 0!==e&&(o=e);const n=[],s=[];let r=0;for(const e of t)n[r]=o?o(e,r):r,s[r]=i(e,r),r++;return{values:s,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,o]){var n;const s=t._$AH,{values:r,keys:a}=this.dt(e,i,o);if(!Array.isArray(s))return this.at=a,r;const l=null!==(n=this.at)&&void 0!==n?n:this.at=[],c=[];let d,h,p=0,u=s.length-1,f=0,g=r.length-1;for(;p<=u&&f<=g;)if(null===s[p])p++;else if(null===s[u])u--;else if(l[p]===a[f])c[f]=gt(s[p],r[f]),p++,f++;else if(l[u]===a[g])c[g]=gt(s[u],r[g]),u--,g--;else if(l[p]===a[g])c[g]=gt(s[p],r[g]),ft(t,c[g+1],s[p]),p++,g--;else if(l[u]===a[f])c[f]=gt(s[u],r[f]),ft(t,s[p],s[u]),u--,f++;else if(void 0===d&&(d=bt(a,f,g),h=bt(l,p,u)),d.has(l[p]))if(d.has(l[u])){const e=h.get(a[f]),i=void 0!==e?s[e]:null;if(null===i){const e=ft(t,s[p]);gt(e,r[f]),c[f]=e}else c[f]=gt(i,r[f]),ft(t,s[p],i),s[e]=null;f++}else yt(s[u]),u--;else yt(s[p]),p++;for(;f<=g;){const e=ft(t,c[g+1]);gt(e,r[f]),c[f++]=e}for(;p<=u;){const t=s[p++];null!==t&&yt(t)}return this.at=a,((t,e=mt)=>{t._$AH=e})(t,c),D}}),vt={},wt=dt(class extends ht{constructor(){super(...arguments),this.nt=vt}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return D}else if(this.nt===e)return D;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});class _t extends Q{}class St{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){this._registeredElementsMap.set("nidoca-form-upload",C`
                <nidoca-form-upload theme="primary"></nidoca-form-upload>`),this.registeredElementsMap.set("nidoca-list",C`
                <nidoca-list theme="secondary" selectionMode>
                    <nidoca-list-section>A</nidoca-list-section>
                    <nidoca-list-item primaryText="List Item"
                                      secondaryText="List Item Secondary Text"></nidoca-list-item>
                    <nidoca-list-item primaryText="List Item"
                                      secondaryText="List Item Secondary Text"></nidoca-list-item>
                    <nidoca-list-item primaryText="List Item"
                                      secondaryText="List Item Secondary Text"></nidoca-list-item>
                </nidoca-list>`),this._registeredElementsMap.set("nidoca-form-contact",C`
                <nidoca-form-contact
                        @nidoca-form-contact-submit="${t=>alert(JSON.stringify(t.detail))}"
                        theme="${kt.BACKGROUND}"
                ></nidoca-form-contact>`),this._registeredElementsMap.set("nidoca-form-change-password",C`
                <nidoca-form-change-password
                        theme="${kt.SECONDARY}"
                        @nidoca-form-change-password-submit="${t=>alert(JSON.stringify(t.detail))}"
                ></nidoca-form-change-password>`),this._registeredElementsMap.set("nidoca-form-register",C`
                <nidoca-form-register
                        @nidoca-form-register-submit="${t=>alert(JSON.stringify(t.detail))}"
                        theme="${kt.PRIMARY}"
                ></nidoca-form-register>`),this._registeredElementsMap.set("nidoca-form-reset-password",C`
                <nidoca-form-reset-password
                        @nidoca-form-reset-password-submit="${t=>alert(JSON.stringify(t.detail))}"
                        theme="${kt.PRIMARY}"
                ></nidoca-form-reset-password>`),this._registeredElementsMap.set("nidoca-form-newsletter",C`
                <nidoca-form-newsletter
                        @nidoca-form-newsletter-submit="${t=>alert(JSON.stringify(t.detail))}"
                        theme="${kt.SURFACE}"
                ></nidoca-form-newsletter>`),this._registeredElementsMap.set("nidoca-form-login",C`
                <nidoca-form-login
                        @nidoca-form-login-submit="${t=>alert(JSON.stringify(t.detail))}"
                ></nidoca-form-login>`),this.registeredElementsMap.set("nidoca-article",C`
                <nidoca-article
                        overline="Ut enim ad minim veniam"
                        title="Ut enim ad minim veniam"
                        summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                >
                    <nidoca-button theme="${kt.SECONDARY}" .buttonType="${Kt.OUTLINED}"
                    >Aktion
                    </nidoca-button>
                </nidoca-article>`),this.registeredElementsMap.set("nidoca-text",C`
            <nidoca-text>Ut enim ad minim veniam.</nidoca-text>`);const t=new li;t.src="http://nidoca.eu/img/DSC02586.jpg",t.width="100%",t.height="100%",this.registeredElementsMap.set("nidoca-img",C`${t}`);const e=new hi;e.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",C`${e}`),this.registeredElementsMap.set("nidoca-search-bar",C`
                <nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`),this.registeredElementsMap.set("nidoca-avatar",C`
                <nidoca-avatar
                        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
                        primaryText="Dominik Bruhn"
                        description="Softwareentwickler"
                >
                </nidoca-avatar>`);const i=new Xt;i.style.padding="var(--space-6)",this.registeredElementsMap.set("nidoca-progress",C`${i}`);const o=new Qe;o.style.padding="var(--space-6)",o.icon="home",o.primaryText="Home Icon",o.clickable=!0,o.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",C`${o}`),this._registeredElementsMap.set("nidoca-menu",C`
                <nidoca-menu theme="primary">
                    <nidoca-menu-item text="Start"></nidoca-menu-item>
                    <nidoca-menu-area text="Framework"></nidoca-menu-area>
                    <nidoca-menu-item text="Komponenten"></nidoca-menu-item>
                    <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
                    <nidoca-menu-item text="Impressum"></nidoca-menu-item>
                    <nidoca-menu-item text="Datenschutz"></nidoca-menu-item>
                    <nidoca-menu-item text="Nutzungsbedingungen"></nidoca-menu-item>
                    <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
                    <nidoca-menu-item icon="home" text="Einstellungen"></nidoca-menu-item>
                </nidoca-menu>`),this._registeredElementsMap.set("nidoca-accordion",C`
                <nidoca-accordion .theme="${kt.PRIMARY}">
                    <nidoca-accordion-item header="Lorem Ipsum" opened>
                        <nidoca-article
                                style="padding:25px;"
                                title="Lorem Ipsum"
                                summary="Lorem Ipsum Dolorem ipsum med en to."
                                text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
                        ></nidoca-article>
                    </nidoca-accordion-item>
                    <nidoca-accordion-item header="Bild 2">
                        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    </nidoca-accordion-item>
                    <nidoca-accordion-item header="Bild 3">
                        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    </nidoca-accordion-item>
                    <nidoca-accordion-item header="Bild 4">
                        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    </nidoca-accordion-item>
                </nidoca-accordion>`),this._registeredElementsMap.set("nidoca-button",C`
                <nidoca-button leadingIcon="home" buttonType="CONTAINED">Mein Button</nidoca-button>`),this._registeredElementsMap.set("nidoca-card",C`
            <nidoca-card></nidoca-card>`),this._registeredElementsMap.set("nidoca-chip",C`
            <nidoca-chip>Lorem Ipsum</nidoca-chip>`),this._registeredElementsMap.set("nidoca-code",C`
            <nidoca-code>Lorem Ipsum</nidoca-code>`),this._registeredElementsMap.set("nidoca-dialog-action",C`
            <nidoca-dialog-action></nidoca-dialog-action>`),this._registeredElementsMap.set("nidoca-dialog",C`
                <nidoca-dialog>
                    <nidoca-button
                            @click="${t=>{t.target.parentNode.show=!1,t.target.getRootNode().host.requestUpdate()}}"
                    >Schließen
                    </nidoca-button>
                </nidoca-dialog>`),this._registeredElementsMap.set("nidoca-form-combobox",C`
                <nidoca-form-combobox
                        theme="surface"
                        label="Mein Textfeld"
                        placeholder="Platzhalter"
                        trailingIcon="home"
                        infoText="Info"
                        warningText="Warnung"
                        errorText="Fehler"
                        name="text"
                        .options="${[{key:"item1",value:"Item 1"},{key:"item2",value:"Item 2"}]}"
                        value="item2"
                ></nidoca-form-combobox>`),this._registeredElementsMap.set("nidoca-form-date",C`
                <nidoca-form-date
                        theme="background"
                        label="Geburtstag"
                        placeholder="Platzhalter"
                        trailingIcon="home"
                        infoText="Info"
                        warningText="Warnung"
                        errorText="Fehler"
                        name="text"
                ></nidoca-form-date>`),this._registeredElementsMap.set("nidoca-form-switch",C`
            <nidoca-form-switch></nidoca-form-switch>`),this._registeredElementsMap.set("nidoca-form-text",C`
                <nidoca-form-text
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
            `),this._registeredElementsMap.set("nidoca-form-textarea",C`
                <nidoca-form-textarea
                        theme="secondary"
                        label="Mein Textfeld"
                        placeholder="Platzhalter"
                        infoText="Info"
                        warningText="Warnung"
                        errorText="Fehler"
                        name="text"
                ></nidoca-form-textarea>`),this._registeredElementsMap.set("nidoca-form-captcha",C`
                <nidoca-form-captcha
                        theme="primary"
                        label="Wie lautet das Ergebnis von:"
                        name="captcha"
                ></nidoca-form-captcha>`),this._registeredElementsMap.set("nidoca-gallery",C`
                <nidoca-gallery>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                </nidoca-gallery>`),this._registeredElementsMap.set("nidoca-link",C`
            <nidoca-link></nidoca-link>`),this._registeredElementsMap.set("nidoca-ripple",C`
            <nidoca-ripple></nidoca-ripple>`),this._registeredElementsMap.set("nidoca-tabs",C`
                <nidoca-tabs tabIndex="0">
                    <nidoca-tab slot="tab">Tab 1</nidoca-tab>
                    <nidoca-tab slot="tab">Tab 2</nidoca-tab>
                    <nidoca-tab slot="tab">Tab 3</nidoca-tab>
                    <nidoca-tab-content slot="tabContent">
                        <nidoca-text>Tab Inhalt 1</nidoca-text>
                    </nidoca-tab-content>
                    <nidoca-tab-content slot="tabContent">
                        <nidoca-text>Tab Inhalt 2</nidoca-text>
                    </nidoca-tab-content>
                    <nidoca-tab-content slot="tabContent">
                        <nidoca-text>Tab Inhalt 3</nidoca-text>
                    </nidoca-tab-content>
                </nidoca-tabs>
            `),this._registeredElementsMap.set("nidoca-table",C`
            <nidoca-table></nidoca-table>`),this._registeredElementsMap.set("nidoca-top-app-bar",C`
                <nidoca-top-app-bar style="min-height: 48px;" .theme="${kt.PRIMARY}">
                    <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
                    <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
                    <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
                    <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert"
                                 clickable></nidoca-icon>

                    <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
                </nidoca-top-app-bar>`),this._registeredElementsMap.set("nidoca-upload",C`
            <nidoca-upload></nidoca-upload>`),this._registeredElementsMap.set("nidoca-wizard",C`
            <nidoca-wizard></nidoca-wizard>`),this._registeredElementsMap.set("nidoca-icon-with-description",C`
                <nidoca-icon-with-description title="Komponentenbibliothek" icon="local_library">
                    Die Nidoca Webcomponents ist eine Sammlung von Webkomponenten mit über
                    ${St.getUniqueInstance().registeredElementNames.length} Komponenten. Diese sind für den direkten
                    Einsatz in
                    deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die Komponenten können dank der
                    Webcomponent
                    Technologie überall in andere Frameworks eingebaungen werden.
                </nidoca-icon-with-description>`)}static getUniqueInstance(){return St.uniqueInstance||(St.uniqueInstance=new St),St.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const t=[];for(const e of this.registeredElementsMap.keys())t.push(e);return t}registerElementName(t){console.log(`register element: ${t}`);const e=document.createElement(t);this.registeredElementsMap.set(t,C`${e}`)}}class kt{static getStyle(t){return t?t==kt.TRANSPARENT?C``:C`
                <style>
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
                </style>`:C``}static getOposite(t){return t==kt.BACKGROUND?kt.SURFACE:t==kt.PRIMARY||t==kt.PRIMARY?kt.SECONDARY:t==kt.SECONDARY?kt.PRIMARY:kt.BACKGROUND}getParentTheme(t){let e=t;for(;null!=e;){if(null!=e.theme)return e.theme;e=e.parentElement}}}kt.PRIMARY="primary",kt.SECONDARY="secondary",kt.SURFACE="surface",kt.BACKGROUND="background",kt.TRANSPARENT="transparent";class Rt{constructor(t,e,i=10240){this.key=t,this.minWidth=e,this.maxWidth=i}static applyDevices(t,e){for(let i=0;i<e.length;i++)if(e[i]==this.getCurrentScreen())return t;return""}static getCurrentScreen(){let t=null;return[Rt.MOBILE,Rt.TABLET,Rt.DESKTOP].forEach((e=>{(null==e.minWidth||e.minWidth<window.innerWidth)&&(null==e.maxWidth||e.maxWidth>window.innerWidth)&&(t=e)})),t}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}Rt.MOBILE=new Rt("MOBILE",0,640),Rt.TABLET=new Rt("TABLET",641,1007),Rt.DESKTOP=new Rt("DESKTOP",1008),Rt.WIDE_DESKTOP=new Rt("WIDE_DESKTOP",1008);var Ot=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Et=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $t=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return C`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?C` <slot></slot>`:C``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};$t.styles=n`
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
      box-sizing:border-box;
      padding-left: var(--space-2);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      cursor: pointer;
    }
  `,Ot([at({type:String}),Et("design:type",String)],$t.prototype,"header",void 0),Ot([at({type:Boolean}),Et("design:type",Boolean)],$t.prototype,"opened",void 0),$t=Ot([et("nidoca-accordion-item")],$t);var Mt,Tt=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.SINGLE="SINGLE",t.MULTI="MULTI"}(Mt||(Mt={}));let At=class extends Q{constructor(){super(...arguments),this.theme=kt.SURFACE,this.accordionType=Mt.SINGLE}render(){return C`
      ${kt.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case Mt.SINGLE:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let i=0;i<t.length;i++){const o=t[i];o instanceof $t&&o!=e&&(o.opened=!1)}}case Mt.MULTI:}t.stopPropagation()}};At.styles=n`
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
  `,Tt([at({type:kt,converter:String}),Pt("design:type",String)],At.prototype,"theme",void 0),Tt([at({type:Mt,converter:String}),Pt("design:type",String)],At.prototype,"accordionType",void 0),Tt([ct("#accordionSlot"),Pt("design:type",Object)],At.prototype,"accordionSlot",void 0),At=Tt([et("nidoca-accordion")],At);var Ct,Dt=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},jt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(Ct||(Ct={}));let Lt=class extends Q{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return C`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${ii.NONE}"
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

          ${this.isLast?C``:C`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"
          ><slot></slot>
        </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==Ct.COMPLETED?"var(--app-color-primary)":t==Ct.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==Ct.FINISH?"var(--app-color-success)":t==Ct.COMPLETED?"var(--mdc-theme-on-primary)":t==Ct.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};Lt.styles=n`
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
  `,Dt([at({type:String}),jt("design:type",String)],Lt.prototype,"icon",void 0),Dt([at({type:String}),jt("design:type",String)],Lt.prototype,"primaryText",void 0),Dt([at({type:Number}),jt("design:type",Object)],Lt.prototype,"state",void 0),Dt([at({type:Boolean}),jt("design:type",Boolean)],Lt.prototype,"isLast",void 0),Lt=Dt([et("nidoca-wizard-step")],Lt);var It=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let Nt=class extends Q{render(){return C`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements();let o=0;for(let t=0;t<i.length;t++){const e=i[t];e instanceof Lt&&(e.index=t,e.state==Ct.CURRENT&&(o=t),e.index==i.length-1&&(e.isLast=!0))}this.changeState(o)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof Lt&&void 0!==o.index&&(o.index<t?o.state=Ct.COMPLETED:o.index==t?o.state=Ct.CURRENT:o.state=Ct.OPEN)}}}};Nt.styles=n``,It([ct("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Nt.prototype,"wizardSlot",void 0),Nt=It([et("nidoca-wizard")],Nt);var Bt=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let zt=class extends Q{constructor(){super(...arguments),this.clickable=!0}render(){return C`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};zt.styles=n`
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
  `,Bt([at({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],zt.prototype,"clickable",void 0),zt=Bt([et("nidoca-chip")],zt);var Wt=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let Ft=class extends Q{constructor(){super(...arguments),this.code=""}render(){return C`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};Ft.styles=n`
    :host {
      display:block;
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
  `,Wt([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ft.prototype,"code",void 0),Ft=Wt([et("nidoca-code")],Ft);var Ht=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Ut=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vt=class extends Q{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const i=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();i&&(i.top>t.clientY||i.right<t.clientX||i.left>t.clientX||i.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?C`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:C``}calculatePositionStyle(t){let e="";if(t){const i=t.getBoundingClientRect();i.right>window.innerWidth/2?e+=`right:${window.innerWidth-i.right}px;`:e+=`left:${i.left}px;`,i.top>window.innerHeight/2?e+=`bottom:${i.height+window.innerHeight-i.top}px;`:e+=`top:${i.bottom}px;`}return e}};Vt.styles=n`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Ht([at({type:Boolean}),Ut("design:type",Boolean)],Vt.prototype,"show",void 0),Ht([at({type:Object}),Ut("design:type",Object)],Vt.prototype,"associatedElement",void 0),Vt=Ht([et("nidoca-elevation"),Ut("design:paramtypes",[])],Vt);var Yt=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},qt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Gt{}Gt.PROGRESS="PROGRESS",Gt.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Xt=class extends Q{constructor(){super(...arguments),this.progressType=Gt.PROGRESS}render(){return C` <style>
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

      <progress class="${this.progressType}"></progress>`}};Xt.styles=n``,Yt([at({type:kt,converter:String}),qt("design:type",Object)],Xt.prototype,"theme",void 0),Yt([at({type:Gt,converter:String}),qt("design:type",String)],Xt.prototype,"progressType",void 0),Xt=Yt([et("nidoca-progress")],Xt);var Kt,Jt=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Zt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.CONTAINED="CONTAINED",t.OUTLINED="OUTLINED",t.TEXT="TEXT"}(Kt||(Kt={}));let Qt=class extends Q{constructor(){super(...arguments),this.theme=kt.PRIMARY,this.buttonType=Kt.CONTAINED,this.leadingIcon="",this.text=""}render(){return C`
      <style>
        .OUTLINED {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .CONTAINED {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .TEXT {
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
        ${this.leadingIcon?C` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:C``}

        <nidoca-text-button text="${this.text}">
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};Qt.styles=n`
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
  `,Jt([at({type:kt,converter:String}),Zt("design:type",Object)],Qt.prototype,"theme",void 0),Jt([at({type:Kt,converter:String}),Zt("design:type",String)],Qt.prototype,"buttonType",void 0),Jt([at({type:String}),Zt("design:type",String)],Qt.prototype,"leadingIcon",void 0),Jt([at({type:String}),Zt("design:type",String)],Qt.prototype,"text",void 0),Qt=Jt([et("nidoca-button")],Qt);var te=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},ee=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ie=class extends Q{constructor(){super(...arguments),this.autocomplete=!0}render(){return C`
            <form autocomplete="${this.autocomplete?"on":"off"}">
                <slot id="slotElement"></slot>
            </form>
        `}getOutputData(){const t=new FormData,e={};for(const i of this.getInputElements(this.slotElement)){const o=i.getOutputData();e[o.key]=o.value,t.append(o.key,o.value)}const i={};return i.jsonObject=e,i.formData=t,i}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(null==t)return[];const e=[],i=t.assignedElements({flatten:!0});for(let t=0;t<i.length;t++){const o=i[t];this.recursiveInputElementSearch(o,e)}return e}recursiveInputElementSearch(t,e){if(t instanceof _t)e.push(t);else if(t.hasChildNodes()){const i=t.children;for(const t of[].slice.call(i))this.recursiveInputElementSearch(t,e)}}};ie.styles=n`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,te([at({type:Boolean}),ee("design:type",Boolean)],ie.prototype,"autocomplete",void 0),te([ct("#slotElement"),ee("design:type",Object)],ie.prototype,"slotElement",void 0),ie=te([et("nidoca-form")],ie);const oe=t=>null!=t?t:j;var ne,se=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.COLOR="color",t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url",t.DATE="date",t.DATETIME_LOCAL="datetime-local",t.MONTH="month",t.TIME="time",t.WEEK="week"}(ne||(ne={}));let ae=class extends _t{constructor(){super(...arguments),this.type=ne.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=kt.SURFACE}render(){return this.type==ne.HIDDEN?C`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}"/>`:C`
                    <style>
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
                        ${this.trailingIcon?C`
                                    <nidoca-icon
                                            style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                                            icon="${this.trailingIcon}"
                                    ></nidoca-icon>`:C``}
                        <div class="container">
                            <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
                            <input
                                    id="inputElement"
                                    name="${this.name}"
                                    .type="${this.type}"
                                    value="${this.value}"
                                    placeholder="${this.placeholder}"
                                    size="${oe(this.size)}"
                                    minlength="${oe(this.minlength)}"
                                    maxlength="${oe(this.maxlength)}"
                                    pattern="${oe(this.pattern)}"
                                    min="${oe(this.min)}"
                                    max="${oe(this.max)}"
                                    step="${oe(this.step)}"
                                    ?required="${this.required}"
                                    ?disabled="${this.disabled}"
                                    ?checked="${this.checked}"
                            />
                        </div>
                    </div>

                    ${this.infoText||this.warningText||this.errorText?C`
                                <div style="display:flex;flex-direction:column;">
                                    ${this.infoText?C`
                                                <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:C``}
                                    ${this.warningText?C`
                                                <nidoca-text-warning
                                                        style="color:var(--app-color-warning-background)"
                                                        text="${this.warningText}"
                                                ></nidoca-text-warning>`:C``}
                                    ${this.errorText?C`
                                                <nidoca-text-error
                                                        style="color:var(--app-color-error-background)"
                                                        text="${this.errorText}"
                                                ></nidoca-text-error>`:C``}
                                </div>
                            `:C``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:null==e?void 0:e.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};ae.styles=n`
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
      box-sizing:border-box;
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
  `,se([at({type:ne,converter:String}),re("design:type",String)],ae.prototype,"type",void 0),se([at({type:String}),re("design:type",String)],ae.prototype,"label",void 0),se([at({type:String}),re("design:type",String)],ae.prototype,"placeholder",void 0),se([at({type:String}),re("design:type",String)],ae.prototype,"trailingIcon",void 0),se([at({type:String}),re("design:type",String)],ae.prototype,"errorText",void 0),se([at({type:String}),re("design:type",String)],ae.prototype,"infoText",void 0),se([at({type:String}),re("design:type",String)],ae.prototype,"warningText",void 0),se([at({type:String}),re("design:type",String)],ae.prototype,"name",void 0),se([at(),re("design:type",String)],ae.prototype,"value",void 0),se([at({type:Boolean}),re("design:type",Boolean)],ae.prototype,"required",void 0),se([at({type:Boolean}),re("design:type",Boolean)],ae.prototype,"disabled",void 0),se([at({type:Boolean}),re("design:type",Boolean)],ae.prototype,"checked",void 0),se([at({type:Number}),re("design:type",Object)],ae.prototype,"maxlength",void 0),se([at({type:Number}),re("design:type",Object)],ae.prototype,"minlength",void 0),se([at({type:Number}),re("design:type",Object)],ae.prototype,"min",void 0),se([at({type:Number}),re("design:type",Object)],ae.prototype,"max",void 0),se([at({type:String}),re("design:type",Object)],ae.prototype,"step",void 0),se([at({type:Number}),re("design:type",Object)],ae.prototype,"size",void 0),se([at({type:String}),re("design:type",Object)],ae.prototype,"pattern",void 0),se([ct("#inputElement"),re("design:type",Object)],ae.prototype,"inputElement",void 0),se([at({type:kt,converter:String}),re("design:type",String)],ae.prototype,"theme",void 0),ae=se([et("nidoca-form-text")],ae);let le=class extends ae{constructor(){super(),this.type=ne.DATE}};le=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-form-date"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],le);var ce=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},de=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let he=class extends _t{constructor(){super(...arguments),this.theme=kt.SURFACE,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return C`
            <style>
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

            ${this.infoText||this.warningText||this.errorText?C`
                        <div style="display:flex;flex-direction:column;">
                            ${this.infoText?C`
                                <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:C``}
                            ${this.warningText?C`
                                        <nidoca-text-warning
                                                style="color:var(--app-color-warning-background)"
                                                text="${this.warningText}"
                                        ></nidoca-text-warning>`:C``}
                            ${this.errorText?C`
                                        <nidoca-text-error
                                                style="color:var(--app-color-error-background)"
                                                text="${this.errorText}"
                                        ></nidoca-text-error>`:C``}
                        </div>
                    `:C``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};he.styles=n`
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
  `,ce([at({type:kt,converter:String}),de("design:type",String)],he.prototype,"theme",void 0),ce([at({type:String}),de("design:type",String)],he.prototype,"infoText",void 0),ce([at({type:String}),de("design:type",String)],he.prototype,"warningText",void 0),ce([at({type:String}),de("design:type",String)],he.prototype,"errorText",void 0),ce([at({type:String}),de("design:type",String)],he.prototype,"name",void 0),ce([at(),de("design:type",String)],he.prototype,"value",void 0),ce([at({type:String}),de("design:type",String)],he.prototype,"label",void 0),ce([at({type:Boolean}),de("design:type",Boolean)],he.prototype,"required",void 0),ce([at({type:String}),de("design:type",String)],he.prototype,"placeholder",void 0),ce([at({type:Boolean}),de("design:type",Boolean)],he.prototype,"disabled",void 0),ce([at({type:Number}),de("design:type",Number)],he.prototype,"rows",void 0),ce([ct("#inputElement"),de("design:type",Object)],he.prototype,"inputElement",void 0),he=ce([et("nidoca-form-textarea")],he);var pe=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},ue=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fe=class extends _t{constructor(){super(...arguments),this.theme=kt.PRIMARY}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return C`
      <nidoca-box theme="${oe(this.theme)}">
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
    `}upload(){var t;null===(t=this.inputElement)||void 0===t||t.click()}};fe.styles=n`
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
  `,pe([at({type:kt,converter:String}),ue("design:type",Object)],fe.prototype,"theme",void 0),pe([ct("#inputElement"),ue("design:type",Object)],fe.prototype,"inputElement",void 0),fe=pe([et("nidoca-form-upload")],fe);var ge=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},me=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ye=class extends _t{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=kt.PRIMARY,this.theme=kt.prototype.getParentTheme(this)||kt.BACKGROUND}render(){return C`
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

        ${this.infoText.length>0?C` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:C``}

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

      ${this.warningText?C` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:C``}
      ${this.errorText?C` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:C``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ye.styles=n`
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
      content: "";
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
  `,ge([at({type:String}),me("design:type",String)],ye.prototype,"name",void 0),ge([at({type:String}),me("design:type",String)],ye.prototype,"label",void 0),ge([at({type:String}),me("design:type",String)],ye.prototype,"infoText",void 0),ge([at({type:String}),me("design:type",String)],ye.prototype,"errorText",void 0),ge([at({type:String}),me("design:type",String)],ye.prototype,"warningText",void 0),ge([at({type:Boolean}),me("design:type",Boolean)],ye.prototype,"required",void 0),ge([at({type:Boolean}),me("design:type",Boolean)],ye.prototype,"disabled",void 0),ge([at({type:Boolean}),me("design:type",Boolean)],ye.prototype,"checked",void 0),ge([at({type:String}),me("design:type",String)],ye.prototype,"theme",void 0),ge([ct("#inputElement"),me("design:type",Object)],ye.prototype,"inputElement",void 0),ye=ge([et("nidoca-form-switch"),me("design:paramtypes",[])],ye);var be=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ve=class extends Q{constructor(){super(...arguments),this.theme=kt.PRIMARY,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return C`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ne.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};ve.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,be([at({type:kt,converter:String}),xe("design:type",Object)],ve.prototype,"theme",void 0),be([at({type:String,converter:String}),xe("design:type",String)],ve.prototype,"label",void 0),be([at({type:String,converter:String}),xe("design:type",String)],ve.prototype,"emailLabel",void 0),be([at({type:String,converter:String}),xe("design:type",String)],ve.prototype,"buttonLabel",void 0),be([ct("#form"),xe("design:type",Object)],ve.prototype,"formComponent",void 0),ve=be([et("nidoca-form-newsletter")],ve);var we=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},_e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Se=class extends Q{constructor(){super(...arguments),this.theme=kt.PRIMARY,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return C`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ne.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Se.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,we([at({type:kt,converter:String}),_e("design:type",String)],Se.prototype,"theme",void 0),we([at({type:String,converter:String}),_e("design:type",String)],Se.prototype,"label",void 0),we([at({type:String,converter:String}),_e("design:type",String)],Se.prototype,"emailLabel",void 0),we([at({type:String,converter:String}),_e("design:type",String)],Se.prototype,"buttonLabel",void 0),we([ct("#form"),_e("design:type",Object)],Se.prototype,"formComponent",void 0),Se=we([et("nidoca-form-reset-password")],Se);var ke=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oe=class extends Q{constructor(){super(...arguments),this.theme=kt.SURFACE,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return C`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ne.PASSWORD}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ne.PASSWORD}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ne.PASSWORD}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?C` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:C``}
        ${this.showErrorMessagePasswordDiff?C` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:C``}
      </nidoca-box>
    `}changePassword(){var t,e,i,o,n;(null===(t=this.formComponent)||void 0===t?void 0:t.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(e=this.newPasswordInputField)||void 0===e?void 0:e.getOutputData().value)!=(null===(i=this.repeatNewPasswordInputField)||void 0===i?void 0:i.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(o=this.oldPasswordInputField)||void 0===o?void 0:o.getOutputData().value)==(null===(n=this.newPasswordInputField)||void 0===n?void 0:n.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};Oe.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,ke([at({type:kt,converter:String}),Re("design:type",String)],Oe.prototype,"theme",void 0),ke([at({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"label",void 0),ke([at({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"oldPasswordLabel",void 0),ke([at({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"newPasswordLabel",void 0),ke([at({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"repeatNewPasswordLabel",void 0),ke([at({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"buttonLabel",void 0),ke([ct("#form"),Re("design:type",Object)],Oe.prototype,"formComponent",void 0),ke([ct("#oldPassword"),Re("design:type",Object)],Oe.prototype,"oldPasswordInputField",void 0),ke([ct("#newPassword"),Re("design:type",Object)],Oe.prototype,"newPasswordInputField",void 0),ke([ct("#repeatNewPassword"),Re("design:type",Object)],Oe.prototype,"repeatNewPasswordInputField",void 0),ke([at(),Re("design:type",String)],Oe.prototype,"errorMessageSamePasswordLabel",void 0),ke([at(),Re("design:type",String)],Oe.prototype,"errorMessagePasswordDiffLabel",void 0),Oe=ke([et("nidoca-form-change-password")],Oe);var Ee=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},$e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Me=class extends Q{constructor(){super(...arguments),this.theme=kt.PRIMARY,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return C`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ne.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ne.PASSWORD}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Me.styles=n`
    :host {
      display: block;
      width:100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Ee([at({type:kt,converter:String}),$e("design:type",Object)],Me.prototype,"theme",void 0),Ee([at({type:String,converter:String}),$e("design:type",String)],Me.prototype,"label",void 0),Ee([at({type:String,converter:String}),$e("design:type",String)],Me.prototype,"emailLabel",void 0),Ee([at({type:String,converter:String}),$e("design:type",String)],Me.prototype,"passwordLabel",void 0),Ee([at({type:String,converter:String}),$e("design:type",String)],Me.prototype,"buttonLabel",void 0),Ee([ct("#form"),$e("design:type",Object)],Me.prototype,"formComponent",void 0),Me=Ee([et("nidoca-form-register")],Me);var Te=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let Pe=class extends Q{constructor(){super(...arguments),this.code=""}render(){return C``}};Pe.styles=n``,Te([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Pe.prototype,"code",void 0),Pe=Te([et("nidoca-upload")],Pe);var Ae=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Ce=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let De=class extends Q{constructor(){super(),this.theme=kt.prototype.getParentTheme(this)||kt.BACKGROUND}render(){return C`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};De.styles=n`
    :host,
    ::slotted(:host) {
      display:block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,Ae([at({type:kt,converter:String}),Ce("design:type",String)],De.prototype,"theme",void 0),De=Ae([et("nidoca-hr"),Ce("design:paramtypes",[])],De);var je=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let Le=class extends Q{constructor(){super(...arguments),this.text=""}render(){return C`
            <div class="container">
                ${this.text?C`
                    <nidoca-text-button>${this.text}</nidoca-text-button>`:C``}
                <slot></slot>
            </div>
        `}};Le.styles=n`
    .container {
      display: flex;
      padding-left:var(--space-2);
      padding-right:var(--space-2);
      padding-top:var(--space);
      padding-bottom:var(--space);
    }
  `,je([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Le.prototype,"text",void 0),Le=je([et("nidoca-menu-area")],Le);var Ie=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Ne=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Be=class extends Q{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1}render(){return C`
            <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
                ${this.icon?C`
                            <nidoca-icon
                                    slot="graphic"
                                    icon="${this.icon}"
                                    style="padding-right:var(--space); font-size:var(--icon-size);"
                            ></nidoca-icon>`:C``}
                ${this.text?C`
                    <nidoca-text>${this.text}</nidoca-text>`:C``}
            </div>
        `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};Be.styles=n`
    .container {
      display: flex;
      cursor: pointer;
      padding-left:var(--space-2);
      padding-right:var(--space-2);
      padding-top:var(--space);
      padding-bottom:var(--space);
    }
    
    .container:hover {
      backdrop-filter: contrast(var(--app-color-percent-hover));    
    }
    
    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));    
    }
      
  `,Ie([at({type:String}),Ne("design:type",String)],Be.prototype,"text",void 0),Ie([at({type:String}),Ne("design:type",String)],Be.prototype,"icon",void 0),Ie([at({type:Boolean}),Ne("design:type",Boolean)],Be.prototype,"selected",void 0),Be=Ie([et("nidoca-menu-item")],Be);var ze=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},We=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fe=class extends Q{constructor(){super(...arguments),this.theme=kt.SECONDARY}render(){return C`
            <style>
                :host,
                *,
                ::slotted(*) {
                    color: var(--app-color-${this.theme});
                    background-color: var(--app-color-${this.theme}-background);
                    border-color: var(--app-color-${this.theme}-border);
                }
            </style>
            <slot id="slotElement"></slot>`}firstUpdated(){this.addEventListener("click",(t=>{if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];if(o instanceof Be){const e=o.getBoundingClientRect();e.left<t.x&&e.right>t.x&&(e.top<t.y&&e.bottom>t.y?o.selected=!0:o.selected=!1)}}}}))}};Fe.styles=n`
    :host,
    slot {
      display: block;
    }
    slot {
    }
  `,ze([at({type:kt,converter:String}),We("design:type",Object)],Fe.prototype,"theme",void 0),ze([ct("#slotElement"),We("design:type",Object)],Fe.prototype,"slotElement",void 0),Fe=ze([et("nidoca-menu")],Fe);var He=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Ue=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ve=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return C`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,i,o,n,s){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(i).concat(";").concat("right:").concat(o).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(s).concat(";")}};Ve.styles=n`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,He([at({type:String}),Ue("design:type",String)],Ve.prototype,"height",void 0),He([at({type:String}),Ue("design:type",String)],Ve.prototype,"width",void 0),He([at({type:String}),Ue("design:type",String)],Ve.prototype,"left",void 0),He([at({type:String}),Ue("design:type",String)],Ve.prototype,"top",void 0),He([at({type:String}),Ue("design:type",String)],Ve.prototype,"right",void 0),He([at({type:String}),Ue("design:type",String)],Ve.prototype,"bottom",void 0),Ve=He([et("nidoca-layout-floating")],Ve);var Ye=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let qe=class extends Q{constructor(){super(...arguments),this.theme=kt.BACKGROUND}render(){return C`
            ${kt.getStyle(this.theme)}
            <slot></slot>
        `}};qe.styles=n`

    :host {
      display: block;
    }

    slot {
        display:block;
        margin:auto;
        width:min-content;
    }
    
    @media only screen and (min-width: 641px) and (max-width: 1918px) {
        slot {
            width:50%;
        }
    }
    
    @media only screen and (max-width: 640px) {
        slot {
            width:90%;
        }
    }
    
    @media only screen and (min-width: 1919px) {
        slot {
            width:75%;
        }
    }
    
  `,Ye([at({type:kt,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],qe.prototype,"theme",void 0),qe=Ye([et("nidoca-container")],qe);var Ge=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ke=class extends Q{constructor(){super(),this.hideSidebox=!0,this.theme=kt.prototype.getParentTheme(this)||kt.BACKGROUND}render(){return C` <style>
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
      ${this.hideSidebox?C``:C` <slot class="sidebox" name="sidebox"></slot>`}`}};Ke.styles=n`
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

    @media only screen and (min-width: ${Rt.TABLET.minWidth}px) and (max-width: ${Rt.TABLET.maxWidth}px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: ${Rt.MOBILE.maxWidth}px) {
      .sidebox {
        width: 100%;
      }
    }
  `,Ge([at({type:kt,converter:String}),Xe("design:type",String)],Ke.prototype,"theme",void 0),Ge([at({type:Boolean,converter:String}),Xe("design:type",Boolean)],Ke.prototype,"hideSidebox",void 0),Ke=Ge([et("nidoca-split-screen"),Xe("design:paramtypes",[])],Ke);var Je=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Ze=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Qe=class extends Q{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return C`
            <i
                    class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
                    title="${this.primaryText}"
                    @click="${this.clicked}"
            >${this.icon}</i
            >
        `}clicked(){return function(t,e,i,o){return new(i||(i=Promise))((function(n,s){function r(t){try{l(o.next(t))}catch(t){s(t)}}function a(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};Qe.styles=n`
    :host {
      display: inline-block;
      font-size: var(--icon-size);
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
        filter: brightness(var(--app-lighten-2));
    }
    
    .clickable:hover {
        filter: brightness(var(--app-darken-2));
     }
    
  `,Je([at({type:String}),Ze("design:type",String)],Qe.prototype,"icon",void 0),Je([at({type:Boolean}),Ze("design:type",Boolean)],Qe.prototype,"clickable",void 0),Je([at({type:Boolean}),Ze("design:type",Boolean)],Qe.prototype,"deactivated",void 0),Je([at({type:String}),Ze("design:type",String)],Qe.prototype,"primaryText",void 0),Qe=Je([et("nidoca-icon")],Qe);var ti=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},ei=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class ii{}ii.NONE="NONE",ii.DEFAULT_SHADOW="DEFAULT_SHADOW",ii.SHADOW_1="SHADOW_1",ii.SHADOW_2="SHADOW_2",ii.SHADOW_3="SHADOW_3";let oi=class extends Q{constructor(){super(...arguments),this.theme=kt.PRIMARY,this.shadowType=ii.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return C`
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
        `}clicked(){return function(t,e,i,o){return new(i||(i=Promise))((function(n,s){function r(t){try{l(o.next(t))}catch(t){s(t)}}function a(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};oi.styles=n`
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
  `,ti([at({type:String}),ei("design:type",String)],oi.prototype,"theme",void 0),ti([at({type:Object}),ei("design:type",ii)],oi.prototype,"shadowType",void 0),ti([at({type:String}),ei("design:type",String)],oi.prototype,"icon",void 0),ti([at({type:Boolean}),ei("design:type",Boolean)],oi.prototype,"clickable",void 0),ti([at({type:Boolean}),ei("design:type",Boolean)],oi.prototype,"deactivated",void 0),oi=ti([et("nidoca-icon-extended")],oi);var ni=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let si=class extends Q{render(){return C`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),i=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${i}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};si.styles=n`
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
  `,ni([ct("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],si.prototype,"rippleContainerElement",void 0),si=ni([et("nidoca-ripple")],si);var ri=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let li=class extends Q{constructor(){super(...arguments),this.src="",this.width="100%",this.height="100%"}render(){return this.src?C`<img width="${this.width}" height="${this.height}" src="${this.src}"/>`:C``}};li.styles=n`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,ri([at({type:String}),ai("design:type",String)],li.prototype,"src",void 0),ri([at({type:String}),ai("design:type",String)],li.prototype,"width",void 0),ri([at({type:String}),ai("design:type",String)],li.prototype,"height",void 0),li=ri([et("nidoca-img")],li);let ci=class extends li{render(){return C`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};ci.styles=n`
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
  `,ci=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-img-round")],ci);var di=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let hi=class extends Q{constructor(){super(...arguments),this.src=""}render(){return C`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};hi.styles=n``,di([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],hi.prototype,"src",void 0),hi=di([et("nidoca-movie")],hi);var pi=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},ui=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fi=class extends Q{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return C`
      <nidoca-form-text
        .theme="${this.theme}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${ne.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};fi.styles=n`
    :host {
      display: block;
      width: 100%;
    }
  `,pi([at({type:kt,converter:String}),ui("design:type",Object)],fi.prototype,"theme",void 0),pi([at({type:String}),ui("design:type",String)],fi.prototype,"label",void 0),pi([at({type:String}),ui("design:type",String)],fi.prototype,"placeholder",void 0),pi([at({type:String}),ui("design:type",String)],fi.prototype,"name",void 0),pi([at({type:Number}),ui("design:type",Number)],fi.prototype,"min",void 0),pi([at({type:Number}),ui("design:type",Number)],fi.prototype,"max",void 0),pi([at({type:String}),ui("design:type",String)],fi.prototype,"errorText",void 0),pi([ct("#inputfield"),ui("design:type",Object)],fi.prototype,"inputfield",void 0),fi=pi([et("nidoca-form-captcha")],fi);var gi,mi=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},yi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}(gi||(gi={}));let bi=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType=gi.SELF}render(){return C`<a href="${this.href}" .target="${this.targetType}">
            <nidoca-text>${this.text}</nidoca-text>
            <slot></slot>
        </a> `}};bi.styles=n`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height:1.5em;
     }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,mi([at({type:String}),yi("design:type",String)],bi.prototype,"text",void 0),mi([at({type:String}),yi("design:type",String)],bi.prototype,"href",void 0),mi([at({type:String}),yi("design:type",String)],bi.prototype,"targetType",void 0),bi=mi([et("nidoca-link")],bi);var xi=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},vi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let wi=class extends Q{constructor(){super(),this.multiSelect=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null,this.theme=kt.prototype.getParentTheme(this)||kt.BACKGROUND}update(t){super.update(t),null!=t.get("selectionMode")&&(this.multiSelect||(this.selected=!1))}render(){return C`
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
        ${this.multiSelect?C` <nidoca-icon
              style="padding-right: var(--space-2);"
              class="item"
              @click="${()=>this.switchSelected()}"
              icon="${this.selected?"check_box":"check_box_outline_blank"}"
            ></nidoca-icon>`:C`<span></span>`}
        <slot name="graphic" class="item"></slot>
        <div class="containerTypography">
          ${this.primaryText?C`
                                <nidoca-text class="item"
                                >${this.primaryText}
                                </nidoca-text
                                >`:C``}
          <slot></slot>
          ${this.secondaryText?C` <nidoca-text-caption class="item">${this.secondaryText} </nidoca-text-caption>`:C``}
          <slot name="secondary"></slot>
        </div>
        <slot name="meta" class="item"></slot>
      </div>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",console.log(t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};wi.styles=n`
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
  `,xi([at({type:kt,converter:String}),vi("design:type",Object)],wi.prototype,"theme",void 0),xi([at({type:Boolean}),vi("design:type",Boolean)],wi.prototype,"multiSelect",void 0),xi([at({type:Boolean}),vi("design:type",Boolean)],wi.prototype,"selected",void 0),xi([at({type:String}),vi("design:type",String)],wi.prototype,"primaryText",void 0),xi([at({type:String}),vi("design:type",String)],wi.prototype,"secondaryText",void 0),wi=xi([et("nidoca-list-item"),vi("design:paramtypes",[])],wi);var _i=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Si=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ki=class extends Q{constructor(){super(),this.multiSelect=!1,this.theme=kt.prototype.getParentTheme(this)||kt.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.multiSelect=this.multiSelect}))}))}render(){return C`
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
        @nidoca-event-list-item-click="${t=>{this.multiSelect||this.unselectAll(),t.detail.selected=!0}}"
        @nidoca-event-list-item-unselect="${()=>{this.multiSelect=0===this.getSelectedItems().length}}"
        class="slotList"
        id="slotElement"
      ></slot>
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof wi&&t.push(o)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof wi&&o.selected&&t.push(o)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let i=0;for(let o=0;o<e.length;o++){const n=e[o];n instanceof wi&&(n.selected&&t.push(i),i++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){console.log("sdojsdoijsoidjsdioj "+this.getItems().length),this.getItems().forEach((t=>{t.selected=!1}))}};ki.styles=n`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,_i([at({type:kt,converter:String}),Si("design:type",Object)],ki.prototype,"theme",void 0),_i([at({type:Boolean}),Si("design:type",Boolean)],ki.prototype,"multiSelect",void 0),_i([ct("#slotElement"),Si("design:type",Object)],ki.prototype,"slotElement",void 0),ki=_i([et("nidoca-list"),Si("design:paramtypes",[])],ki);var Ri=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Oi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ei=class extends Q{constructor(){super(),this.text="",this.theme=kt.prototype.getParentTheme(this)||kt.BACKGROUND}render(){return C`
      <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-caption>
    `}};Ei.styles=n`
  :host {
     display:block;
     padding-left: var(--space-2);  
  `,Ri([at({type:kt,converter:String}),Oi("design:type",Object)],Ei.prototype,"theme",void 0),Ri([at({type:String}),Oi("design:type",String)],Ei.prototype,"text",void 0),Ei=Ri([et("nidoca-list-section"),Oi("design:paramtypes",[])],Ei);var $i=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Mi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ti=class extends Q{constructor(){super(...arguments),this.theme=kt.PRIMARY,this.prominent=!1}render(){return C`
      ${kt.getStyle(this.theme)}
      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?C` <slot class="prominent" name="prominent"></slot>`:C``}
    `}};Ti.styles=n`
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
      box-sizing:border-box;
    }

    slot {
      display: flex;
      align-items: center;
      flex-basis: auto;
    }

    .prominent {
      display: block;
    }
  `,$i([at({type:kt,converter:String}),Mi("design:type",Object)],Ti.prototype,"theme",void 0),$i([at({type:Boolean}),Mi("design:type",Boolean)],Ti.prototype,"prominent",void 0),Ti=$i([et("nidoca-top-app-bar")],Ti);var Pi=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ci=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new Qe],["row 2",new Qe]],this.theme=kt.BACKGROUND}render(){return C`
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
            ${wt([this.headers],(()=>C` ${xt(this.headers,(t=>C` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${wt([this.rows],(()=>C`
                  ${xt(this.rows,(t=>C`
                        <tr>
                          ${xt(t,(t=>C` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Ci.styles=n`
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
  `,Pi([at({type:Array}),Ai("design:type",Array)],Ci.prototype,"headers",void 0),Pi([at({type:Array}),Ai("design:type",Array)],Ci.prototype,"rows",void 0),Pi([at({type:kt,converter:String}),Ai("design:type",String)],Ci.prototype,"theme",void 0),Ci=Pi([et("nidoca-table")],Ci);var Di=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let ji=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?C`
            <slot></slot>`:C``}};ji.styles=n`
      :host,slot {
      display:block;
    }
  `,Di([at({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],ji.prototype,"selected",void 0),ji=Di([et("nidoca-tab-content")],ji);var Li=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Ii=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ni=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=kt.SURFACE}render(){return C`
            <style>
                .container {
                    border-color: var(--app-color-${this.theme}-background);
                }
                .selected {
                    border-color: var(--app-color-${this.theme}-selected);
                }
            </style>
            <div class="container ${this.selected?"selected":""}" @click="${()=>this.tabClicked()}">
                ${this.text?C`
                            <nidoca-text text="${this.text}"></nidoca-text> `:C``}
                <slot></slot>
            </div>
        `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ni.styles=n`
    :host {
      display:block;
      padding-right:var(--space);
    }
 
    .container {
      line-height: var(--height-min);
      height: var(--height-min);
      box-sizing:border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }
    
    slot {
      display:block;
      }

  `,Li([at({type:Boolean}),Ii("design:type",Boolean)],Ni.prototype,"selected",void 0),Li([at({type:String}),Ii("design:type",String)],Ni.prototype,"text",void 0),Li([at({type:String}),Ii("design:type",String)],Ni.prototype,"theme",void 0),Ni=Li([et("nidoca-tab")],Ni);var Bi=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},zi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Wi=class extends Q{constructor(){super(...arguments),this.theme=kt.SURFACE,this.tabIndex=0}render(){return C`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,i=t[this.tabIndex];for(let o=0;o<t.length;o++){const n=t[o];n instanceof Ni&&(n.theme=this.theme,n.style.width=String(e).concat("%"),n==i?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof ji&&(this.tabIndex==t?o.selected=!0:o.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];if(o instanceof Ni&&o==t){this.tabIndex=i;break}}}}};Wi.styles=n`
    :host {
      display: block;
      width: 100%;
    }
    slot {
       display:block;
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
  `,Bi([ct("#tabSlot"),zi("design:type",Object)],Wi.prototype,"tabSlot",void 0),Bi([ct("#tabContentSlot"),zi("design:type",Object)],Wi.prototype,"tabContentSlot",void 0),Bi([at({type:String}),zi("design:type",String)],Wi.prototype,"theme",void 0),Bi([at({type:Number}),zi("design:type",Number)],Wi.prototype,"tabIndex",void 0),Wi=Bi([et("nidoca-tabs")],Wi);var Fi=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Hi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ui=class extends Q{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(t=>{if(!this.hideLeft&&this.leftElement){console.log("close");const e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}}))}updated(t){super.updated(t)}render(){return C`
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
        `}};Ui.styles=n`
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
    
    @media screen and (max-width: ${640}px) {
      #left {
        position: fixed;
        z-index:1;
      }
    }

    .right {
      width: 100%;
      height: 100vh;
      overflow: scroll;
    }
    
  `,Fi([at({type:Boolean}),Hi("design:type",Boolean)],Ui.prototype,"hideLeft",void 0),Fi([at({type:Boolean}),Hi("design:type",Boolean)],Ui.prototype,"prominent",void 0),Fi([ct("#header"),Hi("design:type",Object)],Ui.prototype,"headerElement",void 0),Fi([ct("#left"),Hi("design:type",Object)],Ui.prototype,"leftElement",void 0),Fi([ct("#content"),Hi("design:type",Object)],Ui.prototype,"contentElement",void 0),Ui=Fi([et("nidoca-template"),Hi("design:paramtypes",[])],Ui);var Vi=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Yi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qi=class extends Q{firstUpdated(t){super.firstUpdated(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((t=>{this.videoElement&&(this.videoElement.srcObject=t)}))}render(){return C`


            <video id="video" width="320" height="240" autoplay></video>
            <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
            <canvas id="canvas" width="320" height="240"></canvas>




        `}makeFoto(){if(this.canvasElement&&this.videoElement){const t=this.canvasElement.getContext("2d");if(t){t.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let e=this.canvasElement.toDataURL("image/jpeg");console.log(e)}}}};qi.styles=n`
    
  `,Vi([ct("#video"),Yi("design:type",Object)],qi.prototype,"videoElement",void 0),Vi([ct("#canvas"),Yi("design:type",Object)],qi.prototype,"canvasElement",void 0),Vi([ct("#click-photo"),Yi("design:type",Object)],qi.prototype,"buttonElement",void 0),qi=Vi([et("nidoca-video")],qi);var Gi=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Xi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ki=class extends Q{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return C`

            <img style="display: none;" id="img" src="${this.src}"/>


            ${this.canvasElements.map((t=>C`${t}`))}



        `}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"src"==e&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((t=>{const e=document.createElement("canvas");e.width=t[0],e.height=t[1];let i=e.getContext("2d");i&&this.img&&(this.img.crossOrigin="anonymous",i.drawImage(this.img,0,0,t[0],t[1]),e.toBlob((t=>{}),"image/webp")),this.canvasElements.push(e)})),this.requestUpdate()})}};Ki.styles=n`
    
  `,Gi([at({type:String}),Xi("design:type",String)],Ki.prototype,"src",void 0),Gi([ct("#img"),Xi("design:type",Object)],Ki.prototype,"img",void 0),Ki=Gi([et("nidoca-svg-2-webp")],Ki);var Ji=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let Zi=class extends Q{constructor(){super(...arguments),this.text=""}render(){return C` <slot id="slotElement">${this.text}</slot>`}};Zi.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `,Ji([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Zi.prototype,"text",void 0),Zi=Ji([et("nidoca-text")],Zi);let Qi=class extends Zi{render(){return C`
            ${super.render()}`}};Qi.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      line-height:1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `,Qi=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-button")],Qi);let to=class extends Zi{};to.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,to=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-overline")],to);let eo=class extends Zi{render(){return C` ${super.render()}`}};eo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.5em;
      font-weight: 400;
    }
  `,eo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-body")],eo);let io=class extends Zi{};io.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
        display: block;
        font-weight: 400;
        line-height:1.5em;
        filter: brightness(var(--app-lighten-3));
    }
    
    #slotElement{
    
    }
    
  `,io=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-caption")],io);let oo=class extends io{constructor(){super(),this.style.color="red"}};oo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-error"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],oo);let no=class extends io{constructor(){super(),this.style.color="green"}};no=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-success"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],no);let so=class extends io{constructor(){super(),this.style.color="yellow"}};so=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-warning"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],so);let ro=class extends io{constructor(){super(),this.style.color="blue"}};ro=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-info"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],ro);let ao=class extends Zi{};ao.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.0em;
    }
  `,ao=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-h1")],ao);let lo=class extends Zi{};lo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,lo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-h2")],lo);let co=class extends Zi{};co.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,co=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-h3")],co);let ho=class extends Zi{};ho.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 115%;
      line-height: 1.5em;
    }
  `,ho=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-h4")],ho);let po=class extends Zi{};po.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,po=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-h5")],po);let uo=class extends Zi{};uo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 105%;
      line-height: 1.5em;
    }
  `,uo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-text-h6")],uo);var fo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},go=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let mo=class extends Q{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=kt.SURFACE}render(){return C`
            <style>
                .container, input {
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
                        ?value="${this.value}"
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
        `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,i,o){return new(i||(i=Promise))((function(n,s){function r(t){try{l(o.next(t))}catch(t){s(t)}}function a(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};mo.styles=n`
    
    :host {
        width: 100%;
        display:block;
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
      box-sizing:border-box;
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
    
  `,fo([at({type:String}),go("design:type",String)],mo.prototype,"value",void 0),fo([at({type:String}),go("design:type",String)],mo.prototype,"placeholder",void 0),fo([at({type:Boolean}),go("design:type",Boolean)],mo.prototype,"disabled",void 0),fo([ct("#inputElement"),go("design:type",Object)],mo.prototype,"inputElement",void 0),fo([at({type:kt,converter:String}),go("design:type",String)],mo.prototype,"theme",void 0),mo=fo([et("nidoca-search-bar")],mo);var yo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},bo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class xo{}xo.CENTER="CENTER",xo.LEFT="LEFT",xo.RIGHT="RIGHT",xo.TOP="TOP",xo.BOTTOM="BOTTOM",xo.SLIDE_CENTER="SLIDE_CENTER",xo.SLIDE_LEFT="SLIDE_LEFT",xo.SLIDE_RIGHT="SLIDE_RIGHT",xo.SLIDE_TOP="SLIDE_TOP",xo.SLIDE_BOTTOM="SLIDE_BOTTOM";let vo=class extends Q{constructor(){super(...arguments),this.transitionType=xo.CENTER,this.duration=.5}render(){return C` <div .class="${this.transitionType}"><slot></slot></div> `}};vo.styles=n`
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
  `,yo([at({type:Object}),bo("design:type",xo)],vo.prototype,"transitionType",void 0),yo([at({type:Number}),bo("design:type",Number)],vo.prototype,"duration",void 0),vo=yo([et("nidoca-transition")],vo);var wo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let _o=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?C`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${xo.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:C``}};_o.styles=n`
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
  `,wo([at({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],_o.prototype,"show",void 0),_o=wo([et("nidoca-dialog")],_o);var So=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},ko=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ro=class extends Q{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return C`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Kt.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Kt.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};Ro.styles=n``,So([at({type:Boolean}),ko("design:type",Boolean)],Ro.prototype,"show",void 0),So([at({type:String}),ko("design:type",String)],Ro.prototype,"title",void 0),So([at({type:String}),ko("design:type",String)],Ro.prototype,"description",void 0),So([at({type:String}),ko("design:type",String)],Ro.prototype,"labelButtonYes",void 0),So([at({type:String}),ko("design:type",String)],Ro.prototype,"labelButtonNo",void 0),Ro=So([et("nidoca-dialog-decision")],Ro);var Oo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},Eo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class $o{}$o.ROUND="ROUND",$o.CLICKABLE="CLICKABLE",$o.ZOOM_WRAPPED="ZOOM_WRAPPED",$o.FULL_WIDTH="FULL_WIDTH";class Mo extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[$o.CLICKABLE,$o.FULL_WIDTH]}render(){return C`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}}Mo.styles=n`
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
  `,Oo([at({type:String}),Eo("design:type",String)],Mo.prototype,"src",void 0),Oo([at({type:String}),Eo("design:type",String)],Mo.prototype,"width",void 0),Oo([at({type:String}),Eo("design:type",String)],Mo.prototype,"height",void 0),Oo([at({type:$o,converter:Array}),Eo("design:type",Array)],Mo.prototype,"richMediaProperties",void 0);var To=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let Po=class extends Q{constructor(){super(...arguments),this.imgSrc=""}render(){return C`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[$o.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};Po.styles=n`
    :host {
      display: block;
    }
  `,To([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Po.prototype,"imgSrc",void 0),Po=To([et("nidoca-avatar")],Po);var Ao=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let Co=class extends Q{constructor(){super(...arguments),this.theme=kt.SURFACE}render(){return C`
            <style>
                :host {
                    border-color: var(--app-color-${this.theme}-border);
                }
            </style>
            <slot></slot>
        `}};Co.styles=n`
    :host {
        box-sizing:border-box;
        display: block;
        border-radius: 1rem;
        border-style: solid;
        border-width: var(--border-width-min);
        box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16); 
    }
    slot {
      display: block;
    }
  `,Ao([at({type:kt,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Co.prototype,"theme",void 0),Co=Ao([et("nidoca-card")],Co);let Do=class extends Q{render(){return C`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements();for(let t=0;t<i.length;t++){const e=i[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};Do.styles=n`
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
  `,Do=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-gallery")],Do);let jo=class extends Q{render(){return C`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};jo.styles=n`
    :host {
      display: none;
    }
  `,jo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-print")],jo);let Lo=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return C`
            <style>
                .item,
                ::slotted(.item) {
                    flex-basis: ${this.flexBasis};
                }
            </style>
            <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
        `}slotChanged(t){const e=t.target,i=e.offsetWidth,o=e.assignedElements(),n=o.length,s=[];let r=0;for(let t=0;t<n;t++){const e=o[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)s.push(e);else{const e=t.toUpperCase();r+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*i}}}let a=100;r>0&&(a=100-r/i*100),0==a&&(a=100/n),this.flexBasis=String(a/s.length)+"%",this.requestUpdate()}};Lo.styles=n`
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

    @media only screen and (min-width: ${Rt.TABLET.minWidth}px) and (max-width: ${Rt.TABLET.maxWidth}px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: ${Rt.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,Lo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-section")],Lo);var Io=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},No=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Bo=class extends Q{render(){return C`
            <slot></slot>`}};Bo.styles=n`
    
    :host {
      display:block;
    }
    
    slot {
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        align-content: stretch;
        align-items: stretch;
        width:50%;
        margin: auto;
    }
      
    @media only screen and (max-width: 1007px) {
        slot {
            width:100%;
        }
    }

  `,Bo=Io([et("nidoca-dashboard")],Bo);let zo=class extends Q{render(){return C`
            <slot></slot>`}};zo.styles=n`
    :host {
        display:block;
        width:25%;
    }
    
    @media only screen and (max-width: 1919px) {
        :host {
        width:50%;
        }
    }
    
    `,zo=Io([et("nidoca-dashboard-box-25")],zo);let Wo=class extends Q{render(){return C`
            <slot></slot>`}};Wo.styles=n`
    :host {
        width:50%;
        display:block;
    }
    @media only screen and (max-width: 1919px) {
        :host {
        width:100%;
        }
    }

    `,Wo=Io([et("nidoca-dashboard-box-50")],Wo);let Fo=class extends Q{render(){return C`
            <slot></slot>`}};Fo.styles=n`
    :host {
        width:100%;
        display:block;
    }
    `,Fo=Io([et("nidoca-dashboard-box-100")],Fo);let Ho=class extends Q{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return C`
            <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
                <nidoca-box>
                    <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
                    <slot></slot>
                </nidoca-box>
            </nidoca-card>
        `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ho.styles=n`
    
    :host {
        padding:var(--space-2);
        box-sizing:border-box;
    }
    
    :host, nidoca-card {
        display:block;
        height:100%;
        width:100%;
    }
    
    .clickable {
        cursor: pointer;
    }
    
    `,Io([at({type:Boolean}),No("design:type",Boolean)],Ho.prototype,"clickable",void 0),Io([at({type:String}),No("design:type",String)],Ho.prototype,"title",void 0),Ho=Io([et("nidoca-dashboard-card")],Ho);var Uo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let Vo=class extends Q{constructor(){super(...arguments),this.theme=kt.TRANSPARENT}render(){return C`
            ${kt.getStyle(this.theme)}
            <slot></slot>
        `}};Vo.styles=n`
    :host {
      display: block;
      padding: var(--space-6);
      box-sizing:border-box;
    }
    slot {
    display:block;
      margin:auto;
    }

    @media only screen and (min-width: ${Rt.TABLET.minWidth}px) and (max-width: ${Rt.TABLET.maxWidth}px) {
      :host {
        padding: var(--space-4);
      }
    }

    @media only screen and (max-width: ${Rt.MOBILE.maxWidth}px) {
      :host {
        padding: var(--space-2);
      }
    }
  `,Uo([at({type:kt,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Vo.prototype,"theme",void 0),Vo=Uo([et("nidoca-box")],Vo);var Yo=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},qo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Go=class extends Q{constructor(){super(...arguments),this.overline="",this.title="",this.summary="",this.text=""}render(){return C`
      <div style="display:flex; flex-direction:column;">
        ${this.overline?C` <nidoca-text class="paddingBottom">${this.overline}</nidoca-text> `:C``}
        ${this.title?C` <nidoca-text-h2 class="paddingBottom">${this.title}</nidoca-text-h2> `:C``}
        ${this.summary?C` <nidoca-text-caption class="paddingBottom">${this.summary}</nidoca-text-caption> `:C``}
        ${this.text?C` <nidoca-text class="paddingBottom">${this.text}</nidoca-text>`:C``}
        <slot></slot>
      </div>
    `}};Go.styles=n`
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
      padding-bottom:var(--space-2);
    }

  `,Yo([at({type:String}),qo("design:type",String)],Go.prototype,"overline",void 0),Yo([at({type:String}),qo("design:type",String)],Go.prototype,"title",void 0),Yo([at({type:String}),qo("design:type",String)],Go.prototype,"summary",void 0),Yo([at({type:String}),qo("design:type",String)],Go.prototype,"text",void 0),Go=Yo([et("nidoca-article")],Go);class Xo{getCurrent(t){if(null==t)return t;const e={};return this.getElements(t).forEach((t=>{const i=t.tagName,o=t.getAttribute("name");if(null==o||null==o)console.warn("input name is empty.");else{const n=t.value;if("INPUT"==i)switch(t.getAttribute("type")){case"number":e[o]=Number(n);break;case"date":case"datetime":e[o]=new Date(n);break;case"text":e[o]=n;break;case"checkbox":e[o]=t.checked;break;default:t.checked?e[o]=t.checked:""==n||isNaN(n)?e[o]=n:e[o]=Number(n)}else"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||(e[o]=n)}})),e}getElements(t){let e=[];if(t){const i=t.tagName;if("INPUT"!=i&&"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||e.push(t),t.children.length>0){const i=null==t?void 0:t.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}if(t.shadowRoot&&t.shadowRoot.children.length>0){const i=t.shadowRoot.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}}return e}}class Ko{parseDate(t,e){const i=/[^0-9a-z]/gi;let o=0,n=0,s=0,r=0,a=0,l=0,c=0;const d=t.split(i);try{e.split(i).forEach((function(t,e){switch((""+t).charAt(0)){case"y":case"Y":o=parseInt(d[e]);break;case"M":n=parseInt(d[e])-1;break;case"d":s=parseInt(d[e]);break;case"h":case"H":case"k":case"K":r=parseInt(d[e]);break;case"m":a=parseInt(d[e]);break;case"s":l=parseInt(d[e]);break;case"S":c=parseInt(d[e])}}))}catch(t){throw console.log(t),new Error("Invalid date format.")}return new Date(o,n,s,r,a,l,c)}formatDate(t,e){if(null==t)return"";const i={};return i.M=t.getMonth()+1,i.d=t.getDate(),i.h=t.getHours(),i.m=t.getMinutes(),i.s=t.getSeconds(),e=e.replace(/(M+|d+|h+|m+|s+)/g,(function(t){return((t.length>1?"0":"")+i[t.slice(-1)]).slice(-2)})),e.replace(/(y+)/g,(function(e){return t.getFullYear().toString().slice(-e.length)}))}parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let o=0;o<e.length;o++)if(e[o].exec(i)){console.debug("parse date string to date, key=%s, value=%s",t,i),i=new Date(i);break}return i}))}diffDays(t,e){if(null==t||null==t||null==e||null==e)return null;const i=t.getTime();return(e.getTime()-i)/864e5}}var Jo=function(t,e,i,o){return new(i||(i=Promise))((function(n,s){function r(t){try{l(o.next(t))}catch(t){s(t)}}function a(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))};class Zo{constructor(t,e,i,o){this.token=t,this.role=e,this.email=i,this.exp=o}getExpireDate(){return new Date(1e3*this.exp)}}class Qo{constructor(t){this.host=t}static searchOr(t,e){let i="";return t.forEach((t=>{console.log(JSON.stringify(t)),t[e]&&(i=0==i.length?"&or=(":i.concat(","),i=i.concat(`${e}.eq.${t[e]}`))})),i.length>0&&(i=i.concat(")")),i}static login(t,e){return Jo(this,void 0,void 0,(function*(){console.log(`login ${t}`);const i=yield fetch(this.HOST.concat("/rpc/login"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:t,pass:e})});if(200==i.status){const t=(yield i.json()).token;t&&localStorage.setItem(Qo.token_key,t)}else console.warn("login response status: ",i.status);return 200==i.status}))}static parseJwt(t){const e=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join("")),o=JSON.parse(i);return new Zo(t,o.role,o.email,o.exp)}static getToken(){const t=localStorage.getItem(Qo.token_key);if(t)return this.parseJwt(t)}static persist(t,e){return Jo(this,void 0,void 0,(function*(){const i=this.HOST.concat(t),o=yield this.request(i,"POST","application/json; charset=utf-8",e);return console.log("persist item, value: %s",JSON.stringify(e)),200==o.status?this.parse(yield o.text())[0]:void 0}))}static update(t,e,i){return Jo(this,void 0,void 0,(function*(){const o=this.HOST.concat(t).concat("?id=eq.".concat(e));console.debug("update item value: %s",JSON.stringify(i));const n=yield this.request(o,"PUT","application/json; charset=utf-8",i);return console.log("item updated ? ".concat(String(n.status))),200==n.status}))}static delete(t,e){return Jo(this,void 0,void 0,(function*(){const i=this.HOST.concat(t).concat("?id=eq.").concat(e),o=yield this.request(i,"DELETE","application/json; charset=utf-8",void 0);return console.debug("delete item for id= %s",e),200==o.status}))}static search(t,e){return Jo(this,void 0,void 0,(function*(){const i=this.HOST.concat(t).concat(e),o=yield this.request(i,"GET","application/json; charset=utf-8",void 0);return 200==o.status?this.parse(yield o.text()):void 0}))}static request(t,e,i,o){return Jo(this,void 0,void 0,(function*(){const n={"Accept-Encoding":"*"};n["Content-Type"]=i,n.Prefer="return=representation";const s=this.getToken();s&&(n.Authorization=`Bearer ${s.token}`);const r={headers:n,method:e,body:JSON.stringify(o)},a=yield fetch(t,r);return console.info("response status: ",a.status),a}))}static parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let t=0;t<e.length;t++)if(e[t].exec(i)){i=new Date(i);break}return i}))}static isLoggedIn(){return null!=this.getToken()}static logout(){localStorage.removeItem(this.token_key)}}Qo.token_key="token",Qo.HOST="https://api.nidoca.com";var tn,en=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},on=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.MODEL_SINGLE="MODEL_SINGLE",t.MODEL_MULTI="MODEL_MULTI"}(tn||(tn={}));let nn=class extends Q{constructor(){super(),this.nidocaDateHelper=new Ko,this.items=[],this.properties=[],this.hideSidebox=!0,this.showDeleteDialog=!1,this.showDuplicateDialog=!1,this.errorMessage="",this.theme=kt.prototype.getParentTheme(this)||kt.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{"controller"==e&&this.controller&&(this.properties=this.controller.getProperties(),this.controller.search("").then((t=>{this.items=t,this.requestUpdate()})))}))}render(){var t,e,i;return C`
      <nidoca-split-screen .hideSidebox="${this.hideSidebox}">
        <div slot="left">
          <nidoca-box>
            <nidoca-text-h2>${null===(t=this.controller)||void 0===t?void 0:t.getText(tn.MODEL_SINGLE)}</nidoca-text-h2>
            <nidoca-text-caption
              >${this.items.length} ${null===(e=this.controller)||void 0===e?void 0:e.getText(tn.MODEL_MULTI)}
            </nidoca-text-caption>
            <nidoca-search-bar
              style="flex-basis:auto;"
              id="searchbar"
              placeholder="Suche..."
              @nidoca-search-bar-event-value-changed="${t=>{const e=t.detail;this.search(e)}}"
            ></nidoca-search-bar>
          </nidoca-box>
          <nidoca-list selectionMode>
            ${this.items.map(((t,e)=>{var i,o;return C`
                ${0==e||(null===(i=this.controller)||void 0===i?void 0:i.newSection(this.items[e-1],t))?C` <nidoca-list-section>${null===(o=this.controller)||void 0===o?void 0:o.getSectionText(t)} </nidoca-list-section>`:C``}
                <nidoca-list-item
                  @nidoca-event-list-item-click="${()=>{this.initItem(t)}}"
                  primaryText="${this.getPrimaryText(t)}"
                  secondaryText="${this.getSecondaryText(t)}"
                ></nidoca-list-item>
              `}))}
          </nidoca-list>
        </div>

        <div slot="sidebox">
          ${this.item?C`
                <nidoca-box>
                  <nidoca-top-app-bar theme="background">
                    <nidoca-text-body slot="left">
                      ${null===(i=this.controller)||void 0===i?void 0:i.getText(tn.MODEL_SINGLE)}
                    </nidoca-text-body>
                    <nidoca-icon
                      style="padding-right: var(--space-2);"
                      icon="done"
                      slot="right"
                      title="Speichern"
                      @nidoca-event-icon-clicked="${()=>{var t,e;if(this.errorMessage="",this.editForm&&this.editForm.validate()){const i=(new Xo).getCurrent(this.editForm);""==i[this.getPrimaryIdKey()]?(i[this.getPrimaryIdKey()]=null,null===(t=this.controller)||void 0===t||t.persist(i).then((t=>{this.item=void 0,this.hideSidebox=!0,this.updateList(t)}))):null===(e=this.controller)||void 0===e||e.update(i).then((t=>{t?(this.item=void 0,this.hideSidebox=!0,this.updateList(i)):this.errorMessage="Fehler beim Speichern"}))}else this.errorMessage="Das Formular enthält Fehler. Bitte überprüfen Sie den Inhalt"}}"
                    ></nidoca-icon>

                    <nidoca-icon
                      style="padding-right: var(--space-2);"
                      slot="right"
                      icon="content_copy"
                      @nidoca-event-icon-clicked="${()=>{this.showDuplicateDialog=!0}}"
                    ></nidoca-icon>

                    <nidoca-icon
                      style="padding-right: var(--space-2);"
                      slot="right"
                      icon="delete"
                      clickable
                      @nidoca-event-icon-clicked="${()=>{this.showDeleteDialog=!0}}"
                    ></nidoca-icon>

                    <nidoca-icon
                      slot="right"
                      icon="close"
                      clickable
                      @nidoca-event-icon-clicked="${()=>{this.hideSidebox=!0}}"
                    ></nidoca-icon>
                  </nidoca-top-app-bar>
                  <nidoca-hr></nidoca-hr>
                  ${this.errorMessage?C` <nidoca-text-error>${this.errorMessage}</nidoca-text-error>`:C``}
                </nidoca-box>

                <nidoca-box>
                  <nidoca-form id="editForm">
                    ${this.properties.map((t=>{var e,i,o,n;let s;switch(t.type){case"id":s=C`
                            <nidoca-form-text
                              class="formElement"
                              type="${ne.HIDDEN}"
                              name="${t.key}"
                              value="${this.item[t.key]}"
                            >
                            </nidoca-form-text>
                          `;break;case"any":case"object":case"1:n":s=C``;break;case"date":s=C` <nidoca-form-date
                            class="formElement"
                            name="${t.key}"
                            label="${this.controller?null===(e=this.controller)||void 0===e?void 0:e.getText(t.key):""}"
                            value="${this.item[t.key]?this.nidocaDateHelper.formatDate(this.item[t.key],"yyyy-MM-dd"):""}"
                            ?required="${t.required}"
                          ></nidoca-form-date>`;break;case"checkbox":s=C` <nidoca-form-switch
                            class="formElement"
                            name="${t.key}"
                            label="${this.controller?null===(i=this.controller)||void 0===i?void 0:i.getText(t.key):""}"
                            .checked="${this.item[t.key]}"
                          ></nidoca-form-switch>`;break;case"textarea":s=C` <nidoca-form-textarea
                            class="formElement"
                            type="${t.type}"
                            name="${t.key}"
                            label="${this.controller?null===(o=this.controller)||void 0===o?void 0:o.getText(t.key):""}"
                            value="${this.item[t.key]}"
                            ?required="${t.required}"
                          ></nidoca-form-textarea>`;break;default:s=C` <nidoca-form-text
                            class="formElement"
                            type="text"
                            step="${oe(t.step)}"
                            name="${t.key}"
                            label="${this.controller?null===(n=this.controller)||void 0===n?void 0:n.getText(t.key):""}"
                            value="${this.item[t.key]}"
                            ?required="${t.required}"
                          >
                          </nidoca-form-text>`}return s}))}
                  </nidoca-form>
                  <slot></slot>
                </nidoca-box>
              `:C``}
        </div>
      </nidoca-split-screen>

      <nidoca-layout-floating bottom="4vw" right="4vw">
        <nidoca-icon-extended
          icon="add"
          style="font-size: var(--icon-size-max);"
          clickable
          @nidoca-event-icon-clicked="${()=>{this.initItem({})}}"
        >
        </nidoca-icon-extended>
      </nidoca-layout-floating>

      <nidoca-dialog-decision
        title="Element löschen ?"
        description="Möchtest du das Element wirklich löschen ? Es geht unwiederuflich verloren."
        .show="${this.showDeleteDialog}"
        @nidoca-dialog-decision-no="${()=>{this.showDeleteDialog=!1}}"
        @nidoca-dialog-decision-yes="${()=>{var t;null===(t=this.controller)||void 0===t||t.delete(this.item).then((()=>{this.hideSidebox=!0,this.showDeleteDialog=!1,this.search(this.searchbar?this.searchbar.value:"")}))}}"
      >
      </nidoca-dialog-decision>

      <nidoca-dialog-decision
        title="Element duplizieren ?"
        description="Möchtest du diese Element wirklich duplizieren ?"
        .show="${this.showDuplicateDialog}"
        @nidoca-dialog-decision-no="${()=>{this.showDuplicateDialog=!1}}"
        @nidoca-dialog-decision-yes="${()=>{this.item=Object.assign({},this.item),this.item[this.getPrimaryIdKey()]=void 0,this.showDuplicateDialog=!1}}"
      >
      </nidoca-dialog-decision>
    `}search(t){var e;null===(e=this.controller)||void 0===e||e.search(t).then((t=>{this.items=t,this.requestUpdate()}))}updateList(t){var e;let i=!0;const o=null===(e=this.controller)||void 0===e?void 0:e.getPrimaryIdKey();o&&(this.items=this.items.map((e=>e[o]==t[o]?(i=!1,t):e)),t[o]&&i&&this.items.push(t))}initItem(t){this.item=t,this.hideSidebox=!1,this.dispatchEvent(new CustomEvent("nidoca-event-generic-crud-new-item",{detail:t,bubbles:!0,composed:!0}))}getPrimaryIdKey(){return this.controller?this.controller.getPrimaryIdKey():"id"}getPrimaryText(t){return this.controller?this.controller.getPrimaryText(t):""}getSecondaryText(t){return this.controller?this.controller.getSecondaryText(t):""}};nn.styles=n`
    .formElement {
      padding-bottom: var(--space-2);
    }
  `,en([at({type:Object,converter:Object}),on("design:type",Object)],nn.prototype,"controller",void 0),en([at({type:Object,converter:Object}),on("design:type",Object)],nn.prototype,"item",void 0),en([at({type:Boolean,converter:String}),on("design:type",Boolean)],nn.prototype,"hideSidebox",void 0),en([at({type:Boolean,converter:String}),on("design:type",Boolean)],nn.prototype,"showDeleteDialog",void 0),en([at({type:Boolean,converter:String}),on("design:type",Boolean)],nn.prototype,"showDuplicateDialog",void 0),en([at({type:kt,converter:String}),on("design:type",String)],nn.prototype,"theme",void 0),en([ct("#searchbar"),on("design:type",Object)],nn.prototype,"searchbar",void 0),en([ct("#editForm"),on("design:type",Object)],nn.prototype,"editForm",void 0),en([at({type:String,converter:String}),on("design:type",String)],nn.prototype,"errorMessage",void 0),nn=en([et("nidoca-generic-crud"),on("design:paramtypes",[])],nn);var sn=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},rn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let an=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return C`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
        .type="${ne.BODY2}"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `}};an.styles=n`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,sn([at({type:String}),rn("design:type",String)],an.prototype,"primaryText",void 0),sn([at({type:String}),rn("design:type",String)],an.prototype,"text",void 0),sn([at({type:String}),rn("design:type",String)],an.prototype,"icon",void 0),an=sn([et("nidoca-icon-with-description")],an);var ln=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},cn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let dn=class extends Q{constructor(){super(...arguments),this.theme=kt.PRIMARY,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return C`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${ne.TEXT}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ne.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${ne.TEXT}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${kt.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${Kt.CONTAINED}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};dn.styles=n`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,ln([at({type:kt,converter:String}),cn("design:type",Object)],dn.prototype,"theme",void 0),ln([at({type:String,converter:String}),cn("design:type",String)],dn.prototype,"label",void 0),ln([at({type:String,converter:String}),cn("design:type",String)],dn.prototype,"nameLabel",void 0),ln([at({type:String,converter:String}),cn("design:type",String)],dn.prototype,"emailLabel",void 0),ln([at({type:String,converter:String}),cn("design:type",String)],dn.prototype,"titleLabel",void 0),ln([at({type:String,converter:String}),cn("design:type",String)],dn.prototype,"messageLabel",void 0),ln([at({type:String,converter:String}),cn("design:type",String)],dn.prototype,"buttonLabel",void 0),ln([ct("#authenitcate-form"),cn("design:type",Object)],dn.prototype,"formComponent",void 0),dn=ln([et("nidoca-form-contact")],dn);const hn="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function pn(t,e,i){const o=i||(t=>Array.prototype.slice.call(t));let n=!1,s=[];return function(...i){s=o(i),n||(n=!0,hn.call(window,(()=>{n=!1,t.apply(e,s)})))}}const un=t=>"start"===t?"left":"end"===t?"right":"center",fn=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2;function gn(){}const mn=function(){let t=0;return function(){return t++}}();function yn(t){return null==t}function bn(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function xn(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const vn=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function wn(t,e){return vn(t)?t:e}function _n(t,e){return void 0===t?e:t}const Sn=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function kn(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function Rn(t,e,i,o){let n,s,r;if(bn(t))if(s=t.length,o)for(n=s-1;n>=0;n--)e.call(i,t[n],n);else for(n=0;n<s;n++)e.call(i,t[n],n);else if(xn(t))for(r=Object.keys(t),s=r.length,n=0;n<s;n++)e.call(i,t[r[n]],r[n])}function On(t,e){let i,o,n,s;if(!t||!e||t.length!==e.length)return!1;for(i=0,o=t.length;i<o;++i)if(n=t[i],s=e[i],n.datasetIndex!==s.datasetIndex||n.index!==s.index)return!1;return!0}function En(t){if(bn(t))return t.map(En);if(xn(t)){const e=Object.create(null),i=Object.keys(t),o=i.length;let n=0;for(;n<o;++n)e[i[n]]=En(t[i[n]]);return e}return t}function $n(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function Mn(t,e,i,o){if(!$n(t))return;const n=e[t],s=i[t];xn(n)&&xn(s)?Tn(n,s,o):e[t]=En(s)}function Tn(t,e,i){const o=bn(e)?e:[e],n=o.length;if(!xn(t))return t;const s=(i=i||{}).merger||Mn;for(let r=0;r<n;++r){if(!xn(e=o[r]))continue;const n=Object.keys(e);for(let o=0,r=n.length;o<r;++o)s(n[o],t,e,i)}return t}function Pn(t,e){return Tn(t,e,{merger:An})}function An(t,e,i){if(!$n(t))return;const o=e[t],n=i[t];xn(o)&&xn(n)?Pn(o,n):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=En(n))}function Cn(t,e){const i=t.indexOf(".",e);return-1===i?t.length:i}function Dn(t,e){if(""===e)return t;let i=0,o=Cn(e,i);for(;t&&o>i;)t=t[e.substr(i,o-i)],i=o+1,o=Cn(e,i);return t}function jn(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Ln=t=>void 0!==t,In=t=>"function"==typeof t,Nn=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0},Bn=Math.PI,zn=2*Bn,Wn=zn+Bn,Fn=Number.POSITIVE_INFINITY,Hn=Bn/180,Un=Bn/2,Vn=Bn/4,Yn=2*Bn/3,qn=Math.log10,Gn=Math.sign;function Xn(t){const e=Math.round(t);t=Jn(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(qn(t))),o=t/i;return(o<=1?1:o<=2?2:o<=5?5:10)*i}function Kn(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Jn(t,e,i){return Math.abs(t-e)<i}function Zn(t,e,i){let o,n,s;for(o=0,n=t.length;o<n;o++)s=t[o][i],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Qn(t){return t*(Bn/180)}function ts(t){return t*(180/Bn)}function es(t){if(!vn(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function is(t,e){const i=e.x-t.x,o=e.y-t.y,n=Math.sqrt(i*i+o*o);let s=Math.atan2(o,i);return s<-.5*Bn&&(s+=zn),{angle:s,distance:n}}function os(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function ns(t,e){return(t-e+Wn)%zn-Bn}function ss(t){return(t%zn+zn)%zn}function rs(t,e,i,o){const n=ss(t),s=ss(e),r=ss(i),a=ss(s-n),l=ss(r-n),c=ss(n-s),d=ss(n-r);return n===s||n===r||o&&s===r||a>l&&c<d}function as(t,e,i){return Math.max(e,Math.min(i,t))}function ls(t,e,i,o=1e-6){return t>=Math.min(e,i)-o&&t<=Math.max(e,i)+o}const cs=t=>0===t||1===t,ds=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*zn/i),hs=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*zn/i)+1,ps={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Un),easeOutSine:t=>Math.sin(t*Un),easeInOutSine:t=>-.5*(Math.cos(Bn*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>cs(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>cs(t)?t:ds(t,.075,.3),easeOutElastic:t=>cs(t)?t:hs(t,.075,.3),easeInOutElastic(t){const e=.1125;return cs(t)?t:t<.5?.5*ds(2*t,e,.45):.5+.5*hs(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-ps.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*ps.easeInBounce(2*t):.5*ps.easeOutBounce(2*t-1)+.5},us={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},fs="0123456789ABCDEF",gs=t=>fs[15&t],ms=t=>fs[(240&t)>>4]+fs[15&t],ys=t=>(240&t)>>4==(15&t);function bs(t){return t+.5|0}const xs=(t,e,i)=>Math.max(Math.min(t,i),e);function vs(t){return xs(bs(2.55*t),0,255)}function ws(t){return xs(bs(255*t),0,255)}function _s(t){return xs(bs(t/2.55)/100,0,1)}function Ss(t){return xs(bs(100*t),0,100)}const ks=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,Rs=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Os(t,e,i){const o=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-o*Math.max(Math.min(n-3,9-n,1),-1);return[n(0),n(8),n(4)]}function Es(t,e,i){const o=(o,n=(o+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return[o(5),o(3),o(1)]}function $s(t,e,i){const o=Os(t,1,.5);let n;for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)o[n]*=1-e-i,o[n]+=e;return o}function Ms(t){const e=t.r/255,i=t.g/255,o=t.b/255,n=Math.max(e,i,o),s=Math.min(e,i,o),r=(n+s)/2;let a,l,c;return n!==s&&(c=n-s,l=r>.5?c/(2-n-s):c/(n+s),a=n===e?(i-o)/c+(i<o?6:0):n===i?(o-e)/c+2:(e-i)/c+4,a=60*a+.5),[0|a,l||0,r]}function Ts(t,e,i,o){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,o)).map(ws)}function Ps(t,e,i){return Ts(Os,t,e,i)}function As(t){return(t%360+360)%360}const Cs={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ds={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let js;function Ls(t,e,i){if(t){let o=Ms(t);o[e]=Math.max(0,Math.min(o[e]+o[e]*i,0===e?360:1)),o=Ps(o),t.r=o[0],t.g=o[1],t.b=o[2]}}function Is(t,e){return t?Object.assign(e||{},t):t}function Ns(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ws(t[3]))):(e=Is(t,{r:0,g:0,b:0,a:1})).a=ws(e.a),e}function Bs(t){return"r"===t.charAt(0)?function(t){const e=ks.exec(t);let i,o,n,s=255;if(e){if(e[7]!==i){const t=+e[7];s=255&(e[8]?vs(t):255*t)}return i=+e[1],o=+e[3],n=+e[5],i=255&(e[2]?vs(i):i),o=255&(e[4]?vs(o):o),n=255&(e[6]?vs(n):n),{r:i,g:o,b:n,a:s}}}(t):function(t){const e=Rs.exec(t);let i,o=255;if(!e)return;e[5]!==i&&(o=e[6]?vs(+e[5]):ws(+e[5]));const n=As(+e[2]),s=+e[3]/100,r=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return Ts($s,t,e,i)}(n,s,r):"hsv"===e[1]?function(t,e,i){return Ts(Es,t,e,i)}(n,s,r):Ps(n,s,r),{r:i[0],g:i[1],b:i[2],a:o}}(t)}class zs{constructor(t){if(t instanceof zs)return t;const e=typeof t;let i;var o,n,s;"object"===e?i=Ns(t):"string"===e&&(s=(o=t).length,"#"===o[0]&&(4===s||5===s?n={r:255&17*us[o[1]],g:255&17*us[o[2]],b:255&17*us[o[3]],a:5===s?17*us[o[4]]:255}:7!==s&&9!==s||(n={r:us[o[1]]<<4|us[o[2]],g:us[o[3]]<<4|us[o[4]],b:us[o[5]]<<4|us[o[6]],a:9===s?us[o[7]]<<4|us[o[8]]:255})),i=n||function(t){js||(js=function(){const t={},e=Object.keys(Ds),i=Object.keys(Cs);let o,n,s,r,a;for(o=0;o<e.length;o++){for(r=a=e[o],n=0;n<i.length;n++)s=i[n],a=a.replace(s,Cs[s]);s=parseInt(Ds[r],16),t[a]=[s>>16&255,s>>8&255,255&s]}return t}(),js.transparent=[0,0,0,0]);const e=js[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}(t)||Bs(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Is(this._rgb);return t&&(t.a=_s(t.a)),t}set rgb(t){this._rgb=Ns(t)}rgbString(){return this._valid?function(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${_s(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}(this._rgb):this._rgb}hexString(){return this._valid?function(t){var e=function(t){return ys(t.r)&&ys(t.g)&&ys(t.b)&&ys(t.a)}(t)?gs:ms;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):""):t}(this._rgb):this._rgb}hslString(){return this._valid?function(t){if(!t)return;const e=Ms(t),i=e[0],o=Ss(e[1]),n=Ss(e[2]);return t.a<255?`hsla(${i}, ${o}%, ${n}%, ${_s(t.a)})`:`hsl(${i}, ${o}%, ${n}%)`}(this._rgb):this._rgb}mix(t,e){const i=this;if(t){const o=i.rgb,n=t.rgb;let s;const r=e===s?.5:e,a=2*r-1,l=o.a-n.a,c=((a*l==-1?a:(a+l)/(1+a*l))+1)/2;s=1-c,o.r=255&c*o.r+s*n.r+.5,o.g=255&c*o.g+s*n.g+.5,o.b=255&c*o.b+s*n.b+.5,o.a=r*o.a+(1-r)*n.a,i.rgb=o}return i}clone(){return new zs(this.rgb)}alpha(t){return this._rgb.a=ws(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=bs(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Ls(this._rgb,2,t),this}darken(t){return Ls(this._rgb,2,-t),this}saturate(t){return Ls(this._rgb,1,t),this}desaturate(t){return Ls(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=Ms(t);i[0]=As(i[0]+e),i=Ps(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function Ws(t){return new zs(t)}const Fs=t=>t instanceof CanvasGradient||t instanceof CanvasPattern;function Hs(t){return Fs(t)?t:Ws(t)}function Us(t){return Fs(t)?t:Ws(t).saturate(.5).darken(.1).hexString()}const Vs=Object.create(null),Ys=Object.create(null);function qs(t,e){if(!e)return t;const i=e.split(".");for(let e=0,o=i.length;e<o;++e){const o=i[e];t=t[o]||(t[o]=Object.create(null))}return t}function Gs(t,e,i){return"string"==typeof e?Tn(qs(t,e),i):Tn(qs(t,""),e)}var Xs=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>Us(e.backgroundColor),this.hoverBorderColor=(t,e)=>Us(e.borderColor),this.hoverColor=(t,e)=>Us(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return Gs(this,t,e)}get(t){return qs(this,t)}describe(t,e){return Gs(Ys,t,e)}override(t,e){return Gs(Vs,t,e)}route(t,e,i,o){const n=qs(this,t),s=qs(this,i),r="_"+e;Object.defineProperties(n,{[r]:{value:n[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[r],e=s[o];return xn(t)?Object.assign({},e,t):_n(t,e)},set(t){this[r]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Ks(t,e,i,o,n){let s=e[n];return s||(s=e[n]=t.measureText(n).width,i.push(n)),s>o&&(o=s),o}function Js(t,e,i,o){let n=(o=o||{}).data=o.data||{},s=o.garbageCollect=o.garbageCollect||[];o.font!==e&&(n=o.data={},s=o.garbageCollect=[],o.font=e),t.save(),t.font=e;let r=0;const a=i.length;let l,c,d,h,p;for(l=0;l<a;l++)if(h=i[l],null!=h&&!0!==bn(h))r=Ks(t,n,s,r,h);else if(bn(h))for(c=0,d=h.length;c<d;c++)p=h[c],null==p||bn(p)||(r=Ks(t,n,s,r,p));t.restore();const u=s.length/2;if(u>i.length){for(l=0;l<u;l++)delete n[s[l]];s.splice(0,u)}return r}function Zs(t,e,i){const o=t.currentDevicePixelRatio,n=0!==i?Math.max(i/2,.5):0;return Math.round((e-n)*o)/o+n}function Qs(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function tr(t,e,i,o){let n,s,r,a,l;const c=e.pointStyle,d=e.rotation,h=e.radius;let p=(d||0)*Hn;if(c&&"object"==typeof c&&(n=c.toString(),"[object HTMLImageElement]"===n||"[object HTMLCanvasElement]"===n))return t.save(),t.translate(i,o),t.rotate(p),t.drawImage(c,-c.width/2,-c.height/2,c.width,c.height),void t.restore();if(!(isNaN(h)||h<=0)){switch(t.beginPath(),c){default:t.arc(i,o,h,0,zn),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(p)*h,o-Math.cos(p)*h),p+=Yn,t.lineTo(i+Math.sin(p)*h,o-Math.cos(p)*h),p+=Yn,t.lineTo(i+Math.sin(p)*h,o-Math.cos(p)*h),t.closePath();break;case"rectRounded":l=.516*h,a=h-l,s=Math.cos(p+Vn)*a,r=Math.sin(p+Vn)*a,t.arc(i-s,o-r,l,p-Bn,p-Un),t.arc(i+r,o-s,l,p-Un,p),t.arc(i+s,o+r,l,p,p+Un),t.arc(i-r,o+s,l,p+Un,p+Bn),t.closePath();break;case"rect":if(!d){a=Math.SQRT1_2*h,t.rect(i-a,o-a,2*a,2*a);break}p+=Vn;case"rectRot":s=Math.cos(p)*h,r=Math.sin(p)*h,t.moveTo(i-s,o-r),t.lineTo(i+r,o-s),t.lineTo(i+s,o+r),t.lineTo(i-r,o+s),t.closePath();break;case"crossRot":p+=Vn;case"cross":s=Math.cos(p)*h,r=Math.sin(p)*h,t.moveTo(i-s,o-r),t.lineTo(i+s,o+r),t.moveTo(i+r,o-s),t.lineTo(i-r,o+s);break;case"star":s=Math.cos(p)*h,r=Math.sin(p)*h,t.moveTo(i-s,o-r),t.lineTo(i+s,o+r),t.moveTo(i+r,o-s),t.lineTo(i-r,o+s),p+=Vn,s=Math.cos(p)*h,r=Math.sin(p)*h,t.moveTo(i-s,o-r),t.lineTo(i+s,o+r),t.moveTo(i+r,o-s),t.lineTo(i-r,o+s);break;case"line":s=Math.cos(p)*h,r=Math.sin(p)*h,t.moveTo(i-s,o-r),t.lineTo(i+s,o+r);break;case"dash":t.moveTo(i,o),t.lineTo(i+Math.cos(p)*h,o+Math.sin(p)*h)}t.fill(),e.borderWidth>0&&t.stroke()}}function er(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function ir(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function or(t){t.restore()}function nr(t,e,i,o,n){if(!e)return t.lineTo(i.x,i.y);if("middle"===n){const o=(e.x+i.x)/2;t.lineTo(o,e.y),t.lineTo(o,i.y)}else"after"===n!=!!o?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function sr(t,e,i,o){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(o?e.cp1x:e.cp2x,o?e.cp1y:e.cp2y,o?i.cp2x:i.cp1x,o?i.cp2y:i.cp1y,i.x,i.y)}function rr(t,e,i,o,n,s={}){const r=bn(e)?e:[e],a=s.strokeWidth>0&&""!==s.strokeColor;let l,c;for(t.save(),t.font=n.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),yn(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,s),l=0;l<r.length;++l)c=r[l],a&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),yn(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(c,i,o,s.maxWidth)),t.fillText(c,i,o,s.maxWidth),ar(t,i,o,c,s),o+=n.lineHeight;t.restore()}function ar(t,e,i,o,n){if(n.strikethrough||n.underline){const s=t.measureText(o),r=e-s.actualBoundingBoxLeft,a=e+s.actualBoundingBoxRight,l=i-s.actualBoundingBoxAscent,c=i+s.actualBoundingBoxDescent,d=n.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=n.decorationWidth||2,t.moveTo(r,d),t.lineTo(a,d),t.stroke()}}function lr(t,e){const{x:i,y:o,w:n,h:s,radius:r}=e;t.arc(i+r.topLeft,o+r.topLeft,r.topLeft,-Un,Bn,!0),t.lineTo(i,o+s-r.bottomLeft),t.arc(i+r.bottomLeft,o+s-r.bottomLeft,r.bottomLeft,Bn,Un,!0),t.lineTo(i+n-r.bottomRight,o+s),t.arc(i+n-r.bottomRight,o+s-r.bottomRight,r.bottomRight,Un,0,!0),t.lineTo(i+n,o+r.topRight),t.arc(i+n-r.topRight,o+r.topRight,r.topRight,0,-Un,!0),t.lineTo(i+r.topLeft,o)}const cr=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),dr=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function hr(t,e){const i=(""+t).match(cr);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}const pr=t=>+t||0;function ur(t,e){const i={},o=xn(e),n=o?Object.keys(e):e,s=xn(t)?o?i=>_n(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of n)i[t]=pr(s(t));return i}function fr(t){return ur(t,{top:"y",right:"x",bottom:"y",left:"x"})}function gr(t){return ur(t,["topLeft","topRight","bottomLeft","bottomRight"])}function mr(t){const e=fr(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function yr(t,e){t=t||{},e=e||Xs.font;let i=_n(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let o=_n(t.style,e.style);o&&!(""+o).match(dr)&&(console.warn('Invalid font style specified: "'+o+'"'),o="");const n={family:_n(t.family,e.family),lineHeight:hr(_n(t.lineHeight,e.lineHeight),i),size:i,style:o,weight:_n(t.weight,e.weight),string:""};return n.string=function(t){return!t||yn(t.size)||yn(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(n),n}function br(t,e,i,o){let n,s,r,a=!0;for(n=0,s=t.length;n<s;++n)if(r=t[n],void 0!==r&&(void 0!==e&&"function"==typeof r&&(r=r(e),a=!1),void 0!==i&&bn(r)&&(r=r[i%r.length],a=!1),void 0!==r))return o&&!a&&(o.cacheable=!1),r}function xr(t,e){return Object.assign(Object.create(t),e)}function vr(t,e,i){i=i||(i=>t[i]<e);let o,n=t.length-1,s=0;for(;n-s>1;)o=s+n>>1,i(o)?s=o:n=o;return{lo:s,hi:n}}const wr=(t,e,i)=>vr(t,i,(o=>t[o][e]<i)),_r=(t,e,i)=>vr(t,i,(o=>t[o][e]>=i)),Sr=["push","pop","shift","splice","unshift"];function kr(t,e){const i=t._chartjs;if(!i)return;const o=i.listeners,n=o.indexOf(e);-1!==n&&o.splice(n,1),o.length>0||(Sr.forEach((e=>{delete t[e]})),delete t._chartjs)}function Rr(t){const e=new Set;let i,o;for(i=0,o=t.length;i<o;++i)e.add(t[i]);return e.size===o?t:Array.from(e)}function Or(t,e=[""],i=t,o,n=(()=>t[0])){Ln(o)||(o=Ir("_fallback",t));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:o,_getTarget:n,override:n=>Or([n,...t],e,i,o)};return new Proxy(s,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,o)=>Pr(i,o,(()=>function(t,e,i,o){let n;for(const s of e)if(n=Ir(Mr(s,t),i),Ln(n))return Tr(t,n)?jr(i,o,t,n):n}(o,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>Nr(t).includes(e),ownKeys:t=>Nr(t),set(t,e,i){const o=t._storage||(t._storage=n());return t[e]=o[e]=i,delete t._keys,!0}})}function Er(t,e,i,o){const n={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:$r(t,o),setContext:e=>Er(t,e,i,o),override:n=>Er(t.override(n),e,i,o)};return new Proxy(n,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>Pr(t,e,(()=>function(t,e,i){const{_proxy:o,_context:n,_subProxy:s,_descriptors:r}=t;let a=o[e];return In(a)&&r.isScriptable(e)&&(a=function(t,e,i,o){const{_proxy:n,_context:s,_subProxy:r,_stack:a}=i;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);return a.add(t),e=e(s,r||o),a.delete(t),Tr(t,e)&&(e=jr(n._scopes,n,t,e)),e}(e,a,t,i)),bn(a)&&a.length&&(a=function(t,e,i,o){const{_proxy:n,_context:s,_subProxy:r,_descriptors:a}=i;if(Ln(s.index)&&o(t))e=e[s.index%e.length];else if(xn(e[0])){const i=e,o=n._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=jr(o,n,t,l);e.push(Er(i,s,r&&r[t],a))}}return e}(e,a,t,r.isIndexable)),Tr(e,a)&&(a=Er(a,n,s&&s[e],r)),a}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,o)=>(t[i]=o,delete e[i],!0)})}function $r(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:o=e.indexable,_allKeys:n=e.allKeys}=t;return{allKeys:n,scriptable:i,indexable:o,isScriptable:In(i)?i:()=>i,isIndexable:In(o)?o:()=>o}}const Mr=(t,e)=>t?t+jn(e):e,Tr=(t,e)=>xn(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Pr(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const o=i();return t[e]=o,o}function Ar(t,e,i){return In(t)?t(e,i):t}const Cr=(t,e)=>!0===t?e:"string"==typeof t?Dn(e,t):void 0;function Dr(t,e,i,o,n){for(const s of e){const e=Cr(i,s);if(e){t.add(e);const s=Ar(e._fallback,i,n);if(Ln(s)&&s!==i&&s!==o)return s}else if(!1===e&&Ln(o)&&i!==o)return null}return!1}function jr(t,e,i,o){const n=e._rootScopes,s=Ar(e._fallback,i,o),r=[...t,...n],a=new Set;a.add(o);let l=Lr(a,r,i,s||i,o);return null!==l&&(!Ln(s)||s===i||(l=Lr(a,r,s,l,o),null!==l))&&Or(Array.from(a),[""],n,s,(()=>function(t,e,i){const o=t._getTarget();e in o||(o[e]={});const n=o[e];return bn(n)&&xn(i)?i:n}(e,i,o)))}function Lr(t,e,i,o,n){for(;i;)i=Dr(t,e,i,o,n);return i}function Ir(t,e){for(const i of e){if(!i)continue;const e=i[t];if(Ln(e))return e}}function Nr(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}const Br=Number.EPSILON||1e-14,zr=(t,e)=>e<t.length&&!t[e].skip&&t[e],Wr=t=>"x"===t?"y":"x";function Fr(t,e,i,o){const n=t.skip?e:t,s=e,r=i.skip?e:i,a=os(s,n),l=os(r,s);let c=a/(a+l),d=l/(a+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=o*c,p=o*d;return{previous:{x:s.x-h*(r.x-n.x),y:s.y-h*(r.y-n.y)},next:{x:s.x+p*(r.x-n.x),y:s.y+p*(r.y-n.y)}}}function Hr(t,e,i){return Math.max(Math.min(t,i),e)}function Ur(t,e,i,o,n){let s,r,a,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)!function(t,e="x"){const i=Wr(e),o=t.length,n=Array(o).fill(0),s=Array(o);let r,a,l,c=zr(t,0);for(r=0;r<o;++r)if(a=l,l=c,c=zr(t,r+1),l){if(c){const t=c[e]-l[e];n[r]=0!==t?(c[i]-l[i])/t:0}s[r]=a?c?Gn(n[r-1])!==Gn(n[r])?0:(n[r-1]+n[r])/2:n[r-1]:n[r]}!function(t,e,i){const o=t.length;let n,s,r,a,l,c=zr(t,0);for(let d=0;d<o-1;++d)l=c,c=zr(t,d+1),l&&c&&(Jn(e[d],0,Br)?i[d]=i[d+1]=0:(n=i[d]/e[d],s=i[d+1]/e[d],a=Math.pow(n,2)+Math.pow(s,2),a<=9||(r=3/Math.sqrt(a),i[d]=n*r*e[d],i[d+1]=s*r*e[d])))}(t,n,s),function(t,e,i="x"){const o=Wr(i),n=t.length;let s,r,a,l=zr(t,0);for(let c=0;c<n;++c){if(r=a,a=l,l=zr(t,c+1),!a)continue;const n=a[i],d=a[o];r&&(s=(n-r[i])/3,a[`cp1${i}`]=n-s,a[`cp1${o}`]=d-s*e[c]),l&&(s=(l[i]-n)/3,a[`cp2${i}`]=n+s,a[`cp2${o}`]=d+s*e[c])}}(t,s,e)}(t,n);else{let i=o?t[t.length-1]:t[0];for(s=0,r=t.length;s<r;++s)a=t[s],l=Fr(i,a,t[Math.min(s+1,r-(o?0:1))%r],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,i=a}e.capBezierPoints&&function(t,e){let i,o,n,s,r,a=er(t[0],e);for(i=0,o=t.length;i<o;++i)r=s,s=a,a=i<o-1&&er(t[i+1],e),s&&(n=t[i],r&&(n.cp1x=Hr(n.cp1x,e.left,e.right),n.cp1y=Hr(n.cp1y,e.top,e.bottom)),a&&(n.cp2x=Hr(n.cp2x,e.left,e.right),n.cp2y=Hr(n.cp2y,e.top,e.bottom)))}(t,i)}function Vr(){return"undefined"!=typeof window&&"undefined"!=typeof document}function Yr(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function qr(t,e,i){let o;return"string"==typeof t?(o=parseInt(t,10),-1!==t.indexOf("%")&&(o=o/100*e.parentNode[i])):o=t,o}const Gr=t=>window.getComputedStyle(t,null),Xr=["top","right","bottom","left"];function Kr(t,e,i){const o={};i=i?"-"+i:"";for(let n=0;n<4;n++){const s=Xr[n];o[s]=parseFloat(t[e+"-"+s+i])||0}return o.width=o.left+o.right,o.height=o.top+o.bottom,o}function Jr(t,e){const{canvas:i,currentDevicePixelRatio:o}=e,n=Gr(i),s="border-box"===n.boxSizing,r=Kr(n,"padding"),a=Kr(n,"border","width"),{x:l,y:c,box:d}=function(t,e){const i=t.native||t,o=i.touches,n=o&&o.length?o[0]:i,{offsetX:s,offsetY:r}=n;let a,l,c=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(s,r,i.target))a=s,l=r;else{const t=e.getBoundingClientRect();a=n.clientX-t.left,l=n.clientY-t.top,c=!0}return{x:a,y:l,box:c}}(t,i),h=r.left+(d&&a.left),p=r.top+(d&&a.top);let{width:u,height:f}=e;return s&&(u-=r.width+a.width,f-=r.height+a.height),{x:Math.round((l-h)/u*i.width/o),y:Math.round((c-p)/f*i.height/o)}}const Zr=t=>Math.round(10*t)/10;function Qr(t,e,i){const o=e||1,n=Math.floor(t.height*o),s=Math.floor(t.width*o);t.height=n/o,t.width=s/o;const r=t.canvas;return r.style&&(i||!r.style.height&&!r.style.width)&&(r.style.height=`${t.height}px`,r.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==o||r.height!==n||r.width!==s)&&(t.currentDevicePixelRatio=o,r.height=n,r.width=s,t.ctx.setTransform(o,0,0,o,0,0),!0)}const ta=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function ea(t,e){const i=function(t,e){return Gr(t).getPropertyValue(e)}(t,e),o=i&&i.match(/^(\d+)(\.\d+)?px$/);return o?+o[1]:void 0}function ia(t,e,i,o){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function oa(t,e,i,o){return{x:t.x+i*(e.x-t.x),y:"middle"===o?i<.5?t.y:e.y:"after"===o?i<1?t.y:e.y:i>0?e.y:t.y}}function na(t,e,i,o){const n={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},r=ia(t,n,i),a=ia(n,s,i),l=ia(s,e,i),c=ia(r,a,i),d=ia(a,l,i);return ia(c,d,i)}const sa=new Map;function ra(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let o=sa.get(i);return o||(o=new Intl.NumberFormat(t,e),sa.set(i,o)),o}(e,i).format(t)}function aa(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function la(t,e){let i,o;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,o=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=o)}function ca(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function da(t){return"angle"===t?{between:rs,compare:ns,normalize:ss}:{between:ls,compare:(t,e)=>t-e,normalize:t=>t}}function ha({start:t,end:e,count:i,loop:o,style:n}){return{start:t%i,end:e%i,loop:o&&(e-t+1)%i==0,style:n}}function pa(t,e,i){if(!i)return[t];const{property:o,start:n,end:s}=i,r=e.length,{compare:a,between:l,normalize:c}=da(o),{start:d,end:h,loop:p,style:u}=function(t,e,i){const{property:o,start:n,end:s}=i,{between:r,normalize:a}=da(o),l=e.length;let c,d,{start:h,end:p,loop:u}=t;if(u){for(h+=l,p+=l,c=0,d=l;c<d&&r(a(e[h%l][o]),n,s);++c)h--,p--;h%=l,p%=l}return p<h&&(p+=l),{start:h,end:p,loop:u,style:t.style}}(t,e,i),f=[];let g,m,y,b=!1,x=null;for(let t=d,i=d;t<=h;++t)m=e[t%r],m.skip||(g=c(m[o]),g!==y&&(b=l(g,n,s),null===x&&(b||l(n,y,g)&&0!==a(n,y))&&(x=0===a(g,n)?t:i),null!==x&&(!b||0===a(s,g)||l(s,y,g))&&(f.push(ha({start:x,end:t,loop:p,count:r,style:u})),x=null),i=t,y=g));return null!==x&&f.push(ha({start:x,end:h,loop:p,count:r,style:u})),f}function ua(t,e){const i=[],o=t.segments;for(let n=0;n<o.length;n++){const s=pa(o[n],t.points,e);s.length&&i.push(...s)}return i}function fa(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function ga(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var ma=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,o){const n=e.listeners[o],s=e.duration;n.forEach((o=>o({chart:t,initial:e.initial,numSteps:s,currentStep:Math.min(i-e.start,s)})))}_refresh(){this._request||(this._running=!0,this._request=hn.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((i,o)=>{if(!i.running||!i.items.length)return;const n=i.items;let s,r=n.length-1,a=!1;for(;r>=0;--r)s=n[r],s._active?(s._total>i.duration&&(i.duration=s._total),s.tick(t),a=!0):(n[r]=n[n.length-1],n.pop());a&&(o.draw(),this._notify(o,i,t,"progress")),n.length||(i.running=!1,this._notify(o,i,t,"complete"),i.initial=!1),e+=n.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let o=i.length-1;for(;o>=0;--o)i[o].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const ya="transparent",ba={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const o=Hs(t||ya),n=o.valid&&Hs(e||ya);return n&&n.valid?n.mix(o,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class xa{constructor(t,e,i,o){const n=e[i];o=br([t.to,o,n,t.from]);const s=br([t.from,n,o]);this._active=!0,this._fn=t.fn||ba[t.type||typeof s],this._easing=ps[t.easing]||ps.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=s,this._to=o,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const o=this._target[this._prop],n=i-this._start,s=this._duration-n;this._start=i,this._duration=Math.floor(Math.max(s,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=br([t.to,e,o,t.from]),this._from=br([t.from,o,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,o=this._prop,n=this._from,s=this._loop,r=this._to;let a;if(this._active=n!==r&&(s||e<i),!this._active)return this._target[o]=r,void this._notify(!0);e<0?this._target[o]=n:(a=e/i%2,a=s&&a>1?2-a:a,a=this._easing(Math.min(1,Math.max(0,a))),this._target[o]=this._fn(n,r,a))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}Xs.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const va=Object.keys(Xs.animation);Xs.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),Xs.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),Xs.describe("animations",{_fallback:"animation"}),Xs.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class wa{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!xn(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const o=t[i];if(!xn(o))return;const n={};for(const t of va)n[t]=o[t];(bn(o.properties)&&o.properties||[i]).forEach((t=>{t!==i&&e.has(t)||e.set(t,n)}))}))}_animateOptions(t,e){const i=e.options,o=function(t,e){if(!e)return;let i=t.options;if(i)return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i;t.options=e}(t,i);if(!o)return[];const n=this._createAnimations(o,i);return i.$shared&&function(t,e){const i=[],o=Object.keys(e);for(let e=0;e<o.length;e++){const n=t[o[e]];n&&n.active()&&i.push(n.wait())}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i}),(()=>{})),n}_createAnimations(t,e){const i=this._properties,o=[],n=t.$animations||(t.$animations={}),s=Object.keys(e),r=Date.now();let a;for(a=s.length-1;a>=0;--a){const l=s[a];if("$"===l.charAt(0))continue;if("options"===l){o.push(...this._animateOptions(t,e));continue}const c=e[l];let d=n[l];const h=i.get(l);if(d){if(h&&d.active()){d.update(h,c,r);continue}d.cancel()}h&&h.duration?(n[l]=d=new xa(h,t,l,c),o.push(d)):t[l]=c}return o}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(ma.add(this._chart,i),!0):void 0}}function _a(t,e){const i=t&&t.options||{},o=i.reverse,n=void 0===i.min?e:0,s=void 0===i.max?e:0;return{start:o?s:n,end:o?n:s}}function Sa(t,e){const i=[],o=t._getSortedDatasetMetas(e);let n,s;for(n=0,s=o.length;n<s;++n)i.push(o[n].index);return i}function ka(t,e,i,o={}){const n=t.keys,s="single"===o.mode;let r,a,l,c;if(null!==e){for(r=0,a=n.length;r<a;++r){if(l=+n[r],l===i){if(o.all)continue;break}c=t.values[l],vn(c)&&(s||0===e||Gn(e)===Gn(c))&&(e+=c)}return e}}function Ra(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function Oa(t,e,i){const o=t[e]||(t[e]={});return o[i]||(o[i]={})}function Ea(t,e,i,o){for(const n of e.getMatchingVisibleMetas(o).reverse()){const e=t[n.index];if(i&&e>0||!i&&e<0)return n.index}return null}function $a(t,e){const{chart:i,_cachedMeta:o}=t,n=i._stacks||(i._stacks={}),{iScale:s,vScale:r,index:a}=o,l=s.axis,c=r.axis,d=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(s,r,o),h=e.length;let p;for(let t=0;t<h;++t){const i=e[t],{[l]:s,[c]:h}=i;p=(i._stacks||(i._stacks={}))[c]=Oa(n,d,s),p[a]=h,p._top=Ea(p,r,!0,o.type),p._bottom=Ea(p,r,!1,o.type)}}function Ma(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function Ta(t,e){const i=t.controller.index,o=t.vScale&&t.vScale.axis;if(o){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[o]||void 0===e[o][i])return;delete e[o][i]}}}const Pa=t=>"reset"===t||"none"===t,Aa=(t,e)=>e?t:Object.assign({},t);class Ca{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Ra(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&Ta(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),o=(t,e,i,o)=>"x"===t?e:"r"===t?o:i,n=e.xAxisID=_n(i.xAxisID,Ma(t,"x")),s=e.yAxisID=_n(i.yAxisID,Ma(t,"y")),r=e.rAxisID=_n(i.rAxisID,Ma(t,"r")),a=e.indexAxis,l=e.iAxisID=o(a,n,s,r),c=e.vAxisID=o(a,s,n,r);e.xScale=this.getScaleForId(n),e.yScale=this.getScaleForId(s),e.rScale=this.getScaleForId(r),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&kr(this._data,this),t._stacked&&Ta(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(xn(e))this._data=function(t){const e=Object.keys(t),i=new Array(e.length);let o,n,s;for(o=0,n=e.length;o<n;++o)s=e[o],i[o]={x:s,y:t[s]};return i}(e);else if(i!==e){if(i){kr(i,this);const t=this._cachedMeta;Ta(t),t._parsed=[]}e&&Object.isExtensible(e)&&(this,(o=e)._chartjs?o._chartjs.listeners.push(this):(Object.defineProperty(o,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[this]}}),Sr.forEach((t=>{const e="_onData"+jn(t),i=o[t];Object.defineProperty(o,t,{configurable:!0,enumerable:!1,value(...t){const n=i.apply(this,t);return o._chartjs.listeners.forEach((i=>{"function"==typeof i[e]&&i[e](...t)})),n}})})))),this._syncList=[],this._data=e}var o}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let o=!1;this._dataCheck();const n=e._stacked;e._stacked=Ra(e.vScale,e),e.stack!==i.stack&&(o=!0,Ta(e),e.stack=i.stack),this._resyncElements(t),(o||n!==e._stacked)&&$a(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:o}=this,{iScale:n,_stacked:s}=i,r=n.axis;let a,l,c,d=0===t&&e===o.length||i._sorted,h=t>0&&i._parsed[t-1];if(!1===this._parsing)i._parsed=o,i._sorted=!0,c=o;else{c=bn(o[t])?this.parseArrayData(i,o,t,e):xn(o[t])?this.parseObjectData(i,o,t,e):this.parsePrimitiveData(i,o,t,e);const n=()=>null===l[r]||h&&l[r]<h[r];for(a=0;a<e;++a)i._parsed[a+t]=l=c[a],d&&(n()&&(d=!1),h=l);i._sorted=d}s&&$a(this,c)}parsePrimitiveData(t,e,i,o){const{iScale:n,vScale:s}=t,r=n.axis,a=s.axis,l=n.getLabels(),c=n===s,d=new Array(o);let h,p,u;for(h=0,p=o;h<p;++h)u=h+i,d[h]={[r]:c||n.parse(l[u],u),[a]:s.parse(e[u],u)};return d}parseArrayData(t,e,i,o){const{xScale:n,yScale:s}=t,r=new Array(o);let a,l,c,d;for(a=0,l=o;a<l;++a)c=a+i,d=e[c],r[a]={x:n.parse(d[0],c),y:s.parse(d[1],c)};return r}parseObjectData(t,e,i,o){const{xScale:n,yScale:s}=t,{xAxisKey:r="x",yAxisKey:a="y"}=this._parsing,l=new Array(o);let c,d,h,p;for(c=0,d=o;c<d;++c)h=c+i,p=e[h],l[c]={x:n.parse(Dn(p,r),h),y:s.parse(Dn(p,a),h)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const o=this.chart,n=this._cachedMeta,s=e[t.axis];return ka({keys:Sa(o,!0),values:e._stacks[t.axis]},s,n.index,{mode:i})}updateRangeFromParsed(t,e,i,o){const n=i[e.axis];let s=null===n?NaN:n;const r=o&&i._stacks[e.axis];o&&r&&(o.values=r,s=ka(o,n,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,e){const i=this._cachedMeta,o=i._parsed,n=i._sorted&&t===i.iScale,s=o.length,r=this._getOtherScale(t),a=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:Sa(i,!0),values:null})(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:d}=function(t){const{min:e,max:i,minDefined:o,maxDefined:n}=t.getUserBounds();return{min:o?e:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}(r);let h,p;function u(){p=o[h];const e=p[r.axis];return!vn(p[t.axis])||c>e||d<e}for(h=0;h<s&&(u()||(this.updateRangeFromParsed(l,t,p,a),!n));++h);if(n)for(h=s-1;h>=0;--h)if(!u()){this.updateRangeFromParsed(l,t,p,a);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let o,n,s;for(o=0,n=e.length;o<n;++o)s=e[o][t.axis],vn(s)&&i.push(s);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,o=e.vScale,n=this.getParsed(t);return{label:i?""+i.getLabelForValue(n[i.axis]):"",value:o?""+o.getLabelForValue(n[o.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,o,n;return xn(t)?(e=t.top,i=t.right,o=t.bottom,n=t.left):e=i=o=n=t,{top:e,right:i,bottom:o,left:n,disabled:!1===t}}(_n(this.options.clip,function(t,e,i){if(!1===i)return!1;const o=_a(t,i),n=_a(e,i);return{top:n.end,right:o.end,bottom:n.start,left:o.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,o=i.data||[],n=e.chartArea,s=[],r=this._drawStart||0,a=this._drawCount||o.length-r,l=this.options.drawActiveElementsOnTop;let c;for(i.dataset&&i.dataset.draw(t,n,r,a),c=r;c<r+a;++c){const e=o[c];e.hidden||(e.active&&l?s.push(e):e.draw(t,n))}for(c=0;c<s.length;++c)s[c].draw(t,n)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const o=this.getDataset();let n;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];n=e.$context||(e.$context=function(t,e,i){return xr(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),n.parsed=this.getParsed(t),n.raw=o.data[t],n.index=n.dataIndex=t}else n=this.$context||(this.$context=function(t,e){return xr(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),n.dataset=o,n.index=n.datasetIndex=this.index;return n.active=!!e,n.mode=i,n}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const o="active"===e,n=this._cachedDataOpts,s=t+"-"+e,r=n[s],a=this.enableOptionSharing&&Ln(i);if(r)return Aa(r,a);const l=this.chart.config,c=l.datasetElementScopeKeys(this._type,t),d=o?[`${t}Hover`,"hover",t,""]:[t,""],h=l.getOptionScopes(this.getDataset(),c),p=Object.keys(Xs.elements[t]),u=l.resolveNamedOptions(h,p,(()=>this.getContext(i,o)),d);return u.$shared&&(u.$shared=a,n[s]=Object.freeze(Aa(u,a))),u}_resolveAnimations(t,e,i){const o=this.chart,n=this._cachedDataOpts,s=`animation-${e}`,r=n[s];if(r)return r;let a;if(!1!==o.options.animation){const o=this.chart.config,n=o.datasetAnimationScopeKeys(this._type,e),s=o.getOptionScopes(this.getDataset(),n);a=o.createResolver(s,this.getContext(t,i,e))}const l=new wa(o,a&&a.animations);return a&&a._cacheable&&(n[s]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Pa(t)||this.chart._animationsDisabled}updateElement(t,e,i,o){Pa(o)?Object.assign(t,i):this._resolveAnimations(e,o).update(t,i)}updateSharedOptions(t,e,i){t&&!Pa(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,o){t.active=o;const n=this.getStyle(e,o);this._resolveAnimations(e,i,o).update(t,{options:!o&&this.getSharedOptions(n)||n})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const o=i.length,n=e.length,s=Math.min(n,o);s&&this.parse(0,s),n>o?this._insertElements(o,n-o,t):n<o&&this._removeElements(n,o-n)}_insertElements(t,e,i=!0){const o=this._cachedMeta,n=o.data,s=t+e;let r;const a=t=>{for(t.length+=e,r=t.length-1;r>=s;r--)t[r]=t[r-e]};for(a(n),r=t;r<s;++r)n[r]=new this.dataElementType;this._parsing&&a(o._parsed),this.parse(t,e),i&&this.updateElements(n,t,e,"reset")}updateElements(t,e,i,o){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const o=i._parsed.splice(t,e);i._stacked&&Ta(i,o)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,o]=t;this[e](i,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function Da(t){const e=t.iScale,i=function(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let o=[];for(let e=0,n=i.length;e<n;e++)o=o.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=Rr(o.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let o,n,s,r,a=e._length;const l=()=>{32767!==s&&-32768!==s&&(Ln(r)&&(a=Math.min(a,Math.abs(s-r)||a)),r=s)};for(o=0,n=i.length;o<n;++o)s=e.getPixelForValue(i[o]),l();for(r=void 0,o=0,n=e.ticks.length;o<n;++o)s=e.getPixelForTick(o),l();return a}function ja(t,e,i,o){return bn(t)?function(t,e,i,o){const n=i.parse(t[0],o),s=i.parse(t[1],o),r=Math.min(n,s),a=Math.max(n,s);let l=r,c=a;Math.abs(r)>Math.abs(a)&&(l=a,c=r),e[i.axis]=c,e._custom={barStart:l,barEnd:c,start:n,end:s,min:r,max:a}}(t,e,i,o):e[i.axis]=i.parse(t,o),e}function La(t,e,i,o){const n=t.iScale,s=t.vScale,r=n.getLabels(),a=n===s,l=[];let c,d,h,p;for(c=i,d=i+o;c<d;++c)p=e[c],h={},h[n.axis]=a||n.parse(r[c],c),l.push(ja(p,h,s,c));return l}function Ia(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function Na(t,e,i,o){let n=e.borderSkipped;const s={};if(!n)return void(t.borderSkipped=s);const{start:r,end:a,reverse:l,top:c,bottom:d}=function(t){let e,i,o,n,s;return t.horizontal?(e=t.base>t.x,i="left",o="right"):(e=t.base<t.y,i="bottom",o="top"),e?(n="end",s="start"):(n="start",s="end"),{start:i,end:o,reverse:e,top:n,bottom:s}}(t);"middle"===n&&i&&(t.enableBorderRadius=!0,(i._top||0)===o?n=c:(i._bottom||0)===o?n=d:(s[Ba(d,r,a,l)]=!0,n=c)),s[Ba(n,r,a,l)]=!0,t.borderSkipped=s}function Ba(t,e,i,o){var n,s,r;return o?(r=i,t=za(t=(n=t)===(s=e)?r:n===r?s:n,i,e)):t=za(t,e,i),t}function za(t,e,i){return"start"===t?e:"end"===t?i:t}function Wa(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}Ca.defaults={},Ca.prototype.datasetElementType=null,Ca.prototype.dataElementType=null;class Fa extends Ca{parsePrimitiveData(t,e,i,o){return La(t,e,i,o)}parseArrayData(t,e,i,o){return La(t,e,i,o)}parseObjectData(t,e,i,o){const{iScale:n,vScale:s}=t,{xAxisKey:r="x",yAxisKey:a="y"}=this._parsing,l="x"===n.axis?r:a,c="x"===s.axis?r:a,d=[];let h,p,u,f;for(h=i,p=i+o;h<p;++h)f=e[h],u={},u[n.axis]=n.parse(Dn(f,l),h),d.push(ja(Dn(f,c),u,s,h));return d}updateRangeFromParsed(t,e,i,o){super.updateRangeFromParsed(t,e,i,o);const n=i._custom;n&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,n.min),t.max=Math.max(t.max,n.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:o}=e,n=this.getParsed(t),s=n._custom,r=Ia(s)?"["+s.start+", "+s.end+"]":""+o.getLabelForValue(n[o.axis]);return{label:""+i.getLabelForValue(n[i.axis]),value:r}}initialize(){this.enableOptionSharing=!0,super.initialize(),this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,o){const n="reset"===o,{index:s,_cachedMeta:{vScale:r}}=this,a=r.getBasePixel(),l=r.isHorizontal(),c=this._getRuler(),d=this.resolveDataElementOptions(e,o),h=this.getSharedOptions(d),p=this.includeOptions(o,h);this.updateSharedOptions(h,o,d);for(let d=e;d<e+i;d++){const e=this.getParsed(d),i=n||yn(e[r.axis])?{base:a,head:a}:this._calculateBarValuePixels(d),u=this._calculateBarIndexPixels(d,c),f=(e._stacks||{})[r.axis],g={horizontal:l,base:i.base,enableBorderRadius:!f||Ia(e._custom)||s===f._top||s===f._bottom,x:l?i.head:u.center,y:l?u.center:i.head,height:l?u.size:Math.abs(i.size),width:l?Math.abs(i.size):u.size};p&&(g.options=h||this.resolveDataElementOptions(d,t[d].active?"active":o));const m=g.options||t[d].options;Na(g,m,f,s),Wa(g,m,c.ratio),this.updateElement(t[d],d,g,o)}}_getStacks(t,e){const i=this._cachedMeta.iScale,o=i.getMatchingVisibleMetas(this._type),n=i.options.stacked,s=o.length,r=[];let a,l;for(a=0;a<s;++a)if(l=o[a],l.controller.options.grouped){if(void 0!==e){const t=l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];if(yn(t)||isNaN(t))continue}if((!1===n||-1===r.indexOf(l.stack)||void 0===n&&void 0===l.stack)&&r.push(l.stack),l.index===t)break}return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){const o=this._getStacks(t,i),n=void 0!==e?o.indexOf(e):-1;return-1===n?o.length-1:n}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,o=[];let n,s;for(n=0,s=e.data.length;n<s;++n)o.push(i.getPixelForValue(this.getParsed(n)[i.axis],n));const r=t.barThickness;return{min:r||Da(e),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:r?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i},options:{base:o,minBarLength:n}}=this,s=o||0,r=this.getParsed(t),a=r._custom,l=Ia(a);let c,d,h=r[e.axis],p=0,u=i?this.applyStack(e,r,i):h;u!==h&&(p=u-h,u=h),l&&(h=a.barStart,u=a.barEnd-a.barStart,0!==h&&Gn(h)!==Gn(a.barEnd)&&(p=0),p+=h);const f=yn(o)||l?p:o;let g=e.getPixelForValue(f);if(c=this.chart.getDataVisibility(t)?e.getPixelForValue(p+u):g,d=c-g,Math.abs(d)<n&&(d=function(t,e,i){return 0!==t?Gn(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}(d,e,s)*n,h===s&&(g-=d/2),c=g+d),g===e.getPixelForValue(s)){const t=Gn(d)*e.getLineWidthForValue(s)/2;g+=t,d-=t}return{size:d,base:g,head:c,center:c+d/2}}_calculateBarIndexPixels(t,e){const i=e.scale,o=this.options,n=o.skipNull,s=_n(o.maxBarThickness,1/0);let r,a;if(e.grouped){const i=n?this._getStackCount(t):e.stackCount,l="flex"===o.barThickness?function(t,e,i,o){const n=e.pixels,s=n[t];let r=t>0?n[t-1]:null,a=t<n.length-1?n[t+1]:null;const l=i.categoryPercentage;null===r&&(r=s-(null===a?e.end-e.start:a-s)),null===a&&(a=s+s-r);const c=s-(s-Math.min(r,a))/2*l;return{chunk:Math.abs(a-r)/2*l/o,ratio:i.barPercentage,start:c}}(t,e,o,i):function(t,e,i,o){const n=i.barThickness;let s,r;return yn(n)?(s=e.min*i.categoryPercentage,r=i.barPercentage):(s=n*o,r=1),{chunk:s/o,ratio:r,start:e.pixels[t]-s/2}}(t,e,o,i),c=this._getStackIndex(this.index,this._cachedMeta.stack,n?t:void 0);r=l.start+l.chunk*c+l.chunk/2,a=Math.min(s,l.chunk*l.ratio)}else r=i.getPixelForValue(this.getParsed(t)[i.axis],t),a=Math.min(s,e.min*e.ratio);return{base:r-a/2,head:r+a/2,center:r,size:a}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,o=i.length;let n=0;for(;n<o;++n)null!==this.getParsed(n)[e.axis]&&i[n].draw(this._ctx)}}Fa.id="bar",Fa.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},Fa.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class Ha extends Ca{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,o){const n=super.parsePrimitiveData(t,e,i,o);for(let t=0;t<n.length;t++)n[t]._custom=this.resolveDataElementOptions(t+i).radius;return n}parseArrayData(t,e,i,o){const n=super.parseArrayData(t,e,i,o);for(let t=0;t<n.length;t++){const o=e[i+t];n[t]._custom=_n(o[2],this.resolveDataElementOptions(t+i).radius)}return n}parseObjectData(t,e,i,o){const n=super.parseObjectData(t,e,i,o);for(let t=0;t<n.length;t++){const o=e[i+t];n[t]._custom=_n(o&&o.r&&+o.r,this.resolveDataElementOptions(t+i).radius)}return n}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,{xScale:i,yScale:o}=e,n=this.getParsed(t),s=i.getLabelForValue(n.x),r=o.getLabelForValue(n.y),a=n._custom;return{label:e.label,value:"("+s+", "+r+(a?", "+a:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,o){const n="reset"===o,{iScale:s,vScale:r}=this._cachedMeta,a=this.resolveDataElementOptions(e,o),l=this.getSharedOptions(a),c=this.includeOptions(o,l),d=s.axis,h=r.axis;for(let a=e;a<e+i;a++){const e=t[a],i=!n&&this.getParsed(a),l={},p=l[d]=n?s.getPixelForDecimal(.5):s.getPixelForValue(i[d]),u=l[h]=n?r.getBasePixel():r.getPixelForValue(i[h]);l.skip=isNaN(p)||isNaN(u),c&&(l.options=this.resolveDataElementOptions(a,e.active?"active":o),n&&(l.options.radius=0)),this.updateElement(e,a,l,o)}this.updateSharedOptions(l,o,a)}resolveDataElementOptions(t,e){const i=this.getParsed(t);let o=super.resolveDataElementOptions(t,e);o.$shared&&(o=Object.assign({},o,{$shared:!1}));const n=o.radius;return"active"!==e&&(o.radius=0),o.radius+=_n(i&&i._custom,n),o}}Ha.id="bubble",Ha.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},Ha.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class Ua extends Ca{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,o=this._cachedMeta;if(!1===this._parsing)o._parsed=i;else{let n,s,r=t=>+i[t];if(xn(i[t])){const{key:t="value"}=this._parsing;r=e=>+Dn(i[e],t)}for(n=t,s=t+e;n<s;++n)o._parsed[n]=r(n)}}_getRotation(){return Qn(this.options.rotation-90)}_getCircumference(){return Qn(this.options.circumference)}_getRotationExtents(){let t=zn,e=-zn;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){const o=this.chart.getDatasetMeta(i).controller,n=o._getRotation(),s=o._getCircumference();t=Math.min(t,n),e=Math.max(e,n+s)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,o=this._cachedMeta,n=o.data,s=this.getMaxBorderWidth()+this.getMaxOffset(n)+this.options.spacing,r=Math.max((Math.min(i.width,i.height)-s)/2,0),a=Math.min((c=r,"string"==typeof(l=this.options.cutout)&&l.endsWith("%")?parseFloat(l)/100:l/c),1);var l,c;const d=this._getRingWeight(this.index),{circumference:h,rotation:p}=this._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:g,offsetY:m}=function(t,e,i){let o=1,n=1,s=0,r=0;if(e<zn){const a=t,l=a+e,c=Math.cos(a),d=Math.sin(a),h=Math.cos(l),p=Math.sin(l),u=(t,e,o)=>rs(t,a,l,!0)?1:Math.max(e,e*i,o,o*i),f=(t,e,o)=>rs(t,a,l,!0)?-1:Math.min(e,e*i,o,o*i),g=u(0,c,h),m=u(Un,d,p),y=f(Bn,c,h),b=f(Bn+Un,d,p);o=(g-y)/2,n=(m-b)/2,s=-(g+y)/2,r=-(m+b)/2}return{ratioX:o,ratioY:n,offsetX:s,offsetY:r}}(p,h,a),y=(i.width-s)/u,b=(i.height-s)/f,x=Math.max(Math.min(y,b)/2,0),v=Sn(this.options.radius,x),w=(v-Math.max(v*a,0))/this._getVisibleDatasetWeightTotal();this.offsetX=g*v,this.offsetY=m*v,o.total=this.calculateTotal(),this.outerRadius=v-w*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-w*d,0),this.updateElements(n,0,n.length,t)}_circumference(t,e){const i=this.options,o=this._cachedMeta,n=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===o._parsed[t]||o.data[t].hidden?0:this.calculateCircumference(o._parsed[t]*n/zn)}updateElements(t,e,i,o){const n="reset"===o,s=this.chart,r=s.chartArea,a=s.options.animation,l=(r.left+r.right)/2,c=(r.top+r.bottom)/2,d=n&&a.animateScale,h=d?0:this.innerRadius,p=d?0:this.outerRadius,u=this.resolveDataElementOptions(e,o),f=this.getSharedOptions(u),g=this.includeOptions(o,f);let m,y=this._getRotation();for(m=0;m<e;++m)y+=this._circumference(m,n);for(m=e;m<e+i;++m){const e=this._circumference(m,n),i=t[m],s={x:l+this.offsetX,y:c+this.offsetY,startAngle:y,endAngle:y+e,circumference:e,outerRadius:p,innerRadius:h};g&&(s.options=f||this.resolveDataElementOptions(m,i.active?"active":o)),y+=e,this.updateElement(i,m,s,o)}this.updateSharedOptions(f,o,u)}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,o=0;for(i=0;i<e.length;i++){const n=t._parsed[i];null===n||isNaN(n)||!this.chart.getDataVisibility(i)||e[i].hidden||(o+=Math.abs(n))}return o}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?zn*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,o=i.data.labels||[],n=ra(e._parsed[t],i.options.locale);return{label:o[t]||"",value:n}}getMaxBorderWidth(t){let e=0;const i=this.chart;let o,n,s,r,a;if(!t)for(o=0,n=i.data.datasets.length;o<n;++o)if(i.isDatasetVisible(o)){s=i.getDatasetMeta(o),t=s.data,r=s.controller;break}if(!t)return 0;for(o=0,n=t.length;o<n;++o)a=r.resolveDataElementOptions(o),"inner"!==a.borderAlign&&(e=Math.max(e,a.borderWidth||0,a.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,o=t.length;i<o;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(_n(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}Ua.id="doughnut",Ua.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},Ua.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},Ua.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,o)=>{const n=t.getDatasetMeta(0).controller.getStyle(o);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const i=": "+t.formattedValue;return bn(e)?(e=e.slice(),e[0]+=i):e+=i,e}}}}};class Va extends Ca{initialize(){this.enableOptionSharing=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:o=[],_dataset:n}=e,s=this.chart._animationsDisabled;let{start:r,count:a}=function(t,e,i){const o=e.length;let n=0,s=o;if(t._sorted){const{iScale:r,_parsed:a}=t,l=r.axis,{min:c,max:d,minDefined:h,maxDefined:p}=r.getUserBounds();h&&(n=as(Math.min(wr(a,r.axis,c).lo,i?o:wr(e,l,r.getPixelForValue(c)).lo),0,o-1)),s=p?as(Math.max(wr(a,r.axis,d).hi+1,i?0:wr(e,l,r.getPixelForValue(d)).hi+1),n,o)-n:o-n}return{start:n,count:s}}(e,o,s);this._drawStart=r,this._drawCount=a,function(t){const{xScale:e,yScale:i,_scaleRanges:o}=t,n={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!o)return t._scaleRanges=n,!0;const s=o.xmin!==e.min||o.xmax!==e.max||o.ymin!==i.min||o.ymax!==i.max;return Object.assign(o,n),s}(e)&&(r=0,a=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!n._decimated,i.points=o;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!s,options:l},t),this.updateElements(o,r,a,t)}updateElements(t,e,i,o){const n="reset"===o,{iScale:s,vScale:r,_stacked:a,_dataset:l}=this._cachedMeta,c=this.resolveDataElementOptions(e,o),d=this.getSharedOptions(c),h=this.includeOptions(o,d),p=s.axis,u=r.axis,{spanGaps:f,segment:g}=this.options,m=Kn(f)?f:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||n||"none"===o;let b=e>0&&this.getParsed(e-1);for(let c=e;c<e+i;++c){const e=t[c],i=this.getParsed(c),f=y?e:{},x=yn(i[u]),v=f[p]=s.getPixelForValue(i[p],c),w=f[u]=n||x?r.getBasePixel():r.getPixelForValue(a?this.applyStack(r,i,a):i[u],c);f.skip=isNaN(v)||isNaN(w)||x,f.stop=c>0&&i[p]-b[p]>m,g&&(f.parsed=i,f.raw=l.data[c]),h&&(f.options=d||this.resolveDataElementOptions(c,e.active?"active":o)),y||this.updateElement(e,c,f,o),b=i}this.updateSharedOptions(d,o,c)}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,o=t.data||[];if(!o.length)return i;const n=o[0].size(this.resolveDataElementOptions(0)),s=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,n,s)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}Va.id="line",Va.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},Va.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class Ya extends Ca{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,o=i.data.labels||[],n=ra(e._parsed[t].r,i.options.locale);return{label:o[t]||"",value:n}}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,o=Math.min(e.right-e.left,e.bottom-e.top),n=Math.max(o/2,0),s=(n-Math.max(i.cutoutPercentage?n/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=n-s*this.index,this.innerRadius=this.outerRadius-s}updateElements(t,e,i,o){const n="reset"===o,s=this.chart,r=this.getDataset(),a=s.options.animation,l=this._cachedMeta.rScale,c=l.xCenter,d=l.yCenter,h=l.getIndexAngle(0)-.5*Bn;let p,u=h;const f=360/this.countVisibleElements();for(p=0;p<e;++p)u+=this._computeAngle(p,o,f);for(p=e;p<e+i;p++){const e=t[p];let i=u,g=u+this._computeAngle(p,o,f),m=s.getDataVisibility(p)?l.getDistanceFromCenterForValue(r.data[p]):0;u=g,n&&(a.animateScale&&(m=0),a.animateRotate&&(i=g=h));const y={x:c,y:d,innerRadius:0,outerRadius:m,startAngle:i,endAngle:g,options:this.resolveDataElementOptions(p,e.active?"active":o)};this.updateElement(e,p,y,o)}}countVisibleElements(){const t=this.getDataset(),e=this._cachedMeta;let i=0;return e.data.forEach(((e,o)=>{!isNaN(t.data[o])&&this.chart.getDataVisibility(o)&&i++})),i}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Qn(this.resolveDataElementOptions(t,e).angle||i):0}}Ya.id="polarArea",Ya.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},Ya.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,o)=>{const n=t.getDatasetMeta(0).controller.getStyle(o);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class qa extends Ua{}qa.id="pie",qa.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class Ga extends Ca{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}update(t){const e=this._cachedMeta,i=e.dataset,o=e.data||[],n=e.iScale.getLabels();if(i.points=o,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const s={_loop:!0,_fullLoop:n.length===o.length,options:e};this.updateElement(i,void 0,s,t)}this.updateElements(o,0,o.length,t)}updateElements(t,e,i,o){const n=this.getDataset(),s=this._cachedMeta.rScale,r="reset"===o;for(let a=e;a<e+i;a++){const e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":o),l=s.getPointPositionForValue(a,n.data[a]),c=r?s.xCenter:l.x,d=r?s.yCenter:l.y,h={x:c,y:d,angle:l.angle,skip:isNaN(c)||isNaN(d),options:i};this.updateElement(e,a,h,o)}}}Ga.id="radar",Ga.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},Ga.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Xa extends Va{}Xa.id="scatter",Xa.defaults={showLine:!1,fill:!1},Xa.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Ka=Object.freeze({__proto__:null,BarController:Fa,BubbleController:Ha,DoughnutController:Ua,LineController:Va,PolarAreaController:Ya,PieController:qa,RadarController:Ga,ScatterController:Xa});function Ja(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Za{constructor(t){this.options=t||{}}formats(){return Ja()}parse(t,e){return Ja()}format(t,e){return Ja()}add(t,e,i){return Ja()}diff(t,e,i){return Ja()}startOf(t,e,i){return Ja()}endOf(t,e){return Ja()}}Za.override=function(t){Object.assign(Za.prototype,t)};var Qa={_date:Za};function tl(t,e){return"native"in t?{x:t.x,y:t.y}:Jr(t,e)}function el(t,e,i,o){const{controller:n,data:s,_sorted:r}=t,a=n._cachedMeta.iScale;if(a&&e===a.axis&&"r"!==e&&r&&s.length){const t=a._reversePixels?_r:wr;if(!o)return t(s,e,i);if(n._sharedOptions){const o=s[0],n="function"==typeof o.getRange&&o.getRange(e);if(n){const o=t(s,e,i-n),r=t(s,e,i+n);return{lo:o.lo,hi:r.hi}}}}return{lo:0,hi:s.length-1}}function il(t,e,i,o,n){const s=t.getSortedVisibleDatasetMetas(),r=i[e];for(let t=0,i=s.length;t<i;++t){const{index:i,data:a}=s[t],{lo:l,hi:c}=el(s[t],e,r,n);for(let t=l;t<=c;++t){const e=a[t];e.skip||o(e,i,t)}}}function ol(t,e,i,o){const n=[];return er(e,t.chartArea,t._minPadding)?(il(t,i,e,(function(t,i,s){t.inRange(e.x,e.y,o)&&n.push({element:t,datasetIndex:i,index:s})}),!0),n):n}function nl(t,e,i,o,n){return er(e,t.chartArea,t._minPadding)?"r"!==i||o?function(t,e,i,o,n){let s=[];const r=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,o){const n=e?Math.abs(t.x-o.x):0,s=i?Math.abs(t.y-o.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(s,2))}}(i);let a=Number.POSITIVE_INFINITY;return il(t,i,e,(function(i,l,c){const d=i.inRange(e.x,e.y,n);if(o&&!d)return;const h=i.getCenterPoint(n);if(!er(h,t.chartArea,t._minPadding)&&!d)return;const p=r(e,h);p<a?(s=[{element:i,datasetIndex:l,index:c}],a=p):p===a&&s.push({element:i,datasetIndex:l,index:c})})),s}(t,e,i,o,n):function(t,e,i,o){let n=[];return il(t,i,e,(function(t,i,s){const{startAngle:r,endAngle:a}=t.getProps(["startAngle","endAngle"],o),{angle:l}=is(t,{x:e.x,y:e.y});rs(l,r,a)&&n.push({element:t,datasetIndex:i,index:s})})),n}(t,e,i,n):[]}function sl(t,e,i,o){const n=tl(e,t),s=[],r=i.axis,a="x"===r?"inXRange":"inYRange";let l=!1;return function(t,e){const i=t.getSortedVisibleDatasetMetas();let o,n,s;for(let t=0,r=i.length;t<r;++t){({index:o,data:n}=i[t]);for(let t=0,i=n.length;t<i;++t)s=n[t],s.skip||e(s,o,t)}}(t,((t,e,i)=>{t[a](n[r],o)&&s.push({element:t,datasetIndex:e,index:i}),t.inRange(n.x,n.y,o)&&(l=!0)})),i.intersect&&!l?[]:s}var rl={modes:{index(t,e,i,o){const n=tl(e,t),s=i.axis||"x",r=i.intersect?ol(t,n,s,o):nl(t,n,s,!1,o),a=[];return r.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=r[0].index,i=t.data[e];i&&!i.skip&&a.push({element:i,datasetIndex:t.index,index:e})})),a):[]},dataset(t,e,i,o){const n=tl(e,t),s=i.axis||"xy";let r=i.intersect?ol(t,n,s,o):nl(t,n,s,!1,o);if(r.length>0){const e=r[0].datasetIndex,i=t.getDatasetMeta(e).data;r=[];for(let t=0;t<i.length;++t)r.push({element:i[t],datasetIndex:e,index:t})}return r},point:(t,e,i,o)=>ol(t,tl(e,t),i.axis||"xy",o),nearest:(t,e,i,o)=>nl(t,tl(e,t),i.axis||"xy",i.intersect,o),x:(t,e,i,o)=>sl(t,e,{axis:"x",intersect:i.intersect},o),y:(t,e,i,o)=>sl(t,e,{axis:"y",intersect:i.intersect},o)}};const al=["left","top","right","bottom"];function ll(t,e){return t.filter((t=>t.pos===e))}function cl(t,e){return t.filter((t=>-1===al.indexOf(t.pos)&&t.box.axis===e))}function dl(t,e){return t.sort(((t,i)=>{const o=e?i:t,n=e?t:i;return o.weight===n.weight?o.index-n.index:o.weight-n.weight}))}function hl(t,e,i,o){return Math.max(t[i],e[i])+Math.max(t[o],e[o])}function pl(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function ul(t,e,i,o){const{pos:n,box:s}=i,r=t.maxPadding;if(!xn(n)){i.size&&(t[n]-=i.size);const e=o[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?s.height:s.width),i.size=e.size/e.count,t[n]+=i.size}s.getPadding&&pl(r,s.getPadding());const a=Math.max(0,e.outerWidth-hl(r,t,"left","right")),l=Math.max(0,e.outerHeight-hl(r,t,"top","bottom")),c=a!==t.w,d=l!==t.h;return t.w=a,t.h=l,i.horizontal?{same:c,other:d}:{same:d,other:c}}function fl(t,e){const i=e.maxPadding;return function(t){const o={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{o[t]=Math.max(e[t],i[t])})),o}(t?["left","right"]:["top","bottom"])}function gl(t,e,i,o){const n=[];let s,r,a,l,c,d;for(s=0,r=t.length,c=0;s<r;++s){a=t[s],l=a.box,l.update(a.width||e.w,a.height||e.h,fl(a.horizontal,e));const{same:r,other:h}=ul(e,i,a,o);c|=r&&n.length,d=d||h,l.fullSize||n.push(a)}return c&&gl(n,e,i,o)||d}function ml(t,e,i,o,n){t.top=i,t.left=e,t.right=e+o,t.bottom=i+n,t.width=o,t.height=n}function yl(t,e,i,o){const n=i.padding;let{x:s,y:r}=e;for(const a of t){const t=a.box,l=o[a.stack]||{count:1,placed:0,weight:1},c=a.stackWeight/l.weight||1;if(a.horizontal){const o=e.w*c,s=l.size||t.height;Ln(l.start)&&(r=l.start),t.fullSize?ml(t,n.left,r,i.outerWidth-n.right-n.left,s):ml(t,e.left+l.placed,r,o,s),l.start=r,l.placed+=o,r=t.bottom}else{const o=e.h*c,r=l.size||t.width;Ln(l.start)&&(s=l.start),t.fullSize?ml(t,s,n.top,r,i.outerHeight-n.bottom-n.top):ml(t,s,e.top+l.placed,r,o),l.start=s,l.placed+=o,s=t.right}}e.x=s,e.y=r}Xs.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var bl={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,o){if(!t)return;const n=mr(t.options.layout.padding),s=Math.max(e-n.width,0),r=Math.max(i-n.height,0),a=function(t){const e=function(t){const e=[];let i,o,n,s,r,a;for(i=0,o=(t||[]).length;i<o;++i)n=t[i],({position:s,options:{stack:r,stackWeight:a=1}}=n),e.push({index:i,box:n,pos:s,horizontal:n.isHorizontal(),weight:n.weight,stack:r&&s+r,stackWeight:a});return e}(t),i=dl(e.filter((t=>t.box.fullSize)),!0),o=dl(ll(e,"left"),!0),n=dl(ll(e,"right")),s=dl(ll(e,"top"),!0),r=dl(ll(e,"bottom")),a=cl(e,"x"),l=cl(e,"y");return{fullSize:i,leftAndTop:o.concat(s),rightAndBottom:n.concat(l).concat(r).concat(a),chartArea:ll(e,"chartArea"),vertical:o.concat(n).concat(l),horizontal:s.concat(r).concat(a)}}(t.boxes),l=a.vertical,c=a.horizontal;Rn(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const d=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,h=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:s,availableHeight:r,vBoxMaxWidth:s/2/d,hBoxMaxHeight:r/2}),p=Object.assign({},n);pl(p,mr(o));const u=Object.assign({maxPadding:p,w:s,h:r,x:n.left,y:n.top},n),f=function(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:o,stackWeight:n}=i;if(!t||!al.includes(o))continue;const s=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=n}return e}(t),{vBoxMaxWidth:o,hBoxMaxHeight:n}=e;let s,r,a;for(s=0,r=t.length;s<r;++s){a=t[s];const{fullSize:r}=a.box,l=i[a.stack],c=l&&a.stackWeight/l.weight;a.horizontal?(a.width=c?c*o:r&&e.availableWidth,a.height=n):(a.width=o,a.height=c?c*n:r&&e.availableHeight)}return i}(l.concat(c),h);gl(a.fullSize,u,h,f),gl(l,u,h,f),gl(c,u,h,f)&&gl(l,u,h,f),function(t){const e=t.maxPadding;function i(i){const o=Math.max(e[i]-t[i],0);return t[i]+=o,o}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(u),yl(a.leftAndTop,u,h,f),u.x+=u.w,u.y+=u.h,yl(a.rightAndBottom,u,h,f),t.chartArea={left:u.left,top:u.top,right:u.left+u.w,bottom:u.top+u.h,height:u.h,width:u.w},Rn(a.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(u.w,u.h,{left:0,top:0,right:0,bottom:0})}))}};class xl{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,o){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,o?Math.floor(e/o):i)}}isAttached(t){return!0}updateConfig(t){}}class vl extends xl{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const wl={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},_l=t=>null===t||""===t,Sl=!!ta&&{passive:!0};function kl(t,e,i){t.canvas.removeEventListener(e,i,Sl)}function Rl(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function Ol(t,e,i){const o=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||Rl(i.addedNodes,o),e=e&&!Rl(i.removedNodes,o);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}function El(t,e,i){const o=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||Rl(i.removedNodes,o),e=e&&!Rl(i.addedNodes,o);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}const $l=new Map;let Ml=0;function Tl(){const t=window.devicePixelRatio;t!==Ml&&(Ml=t,$l.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function Pl(t,e,i){const o=t.canvas,n=o&&Yr(o);if(!n)return;const s=pn(((t,e)=>{const o=n.clientWidth;i(t,e),o<n.clientWidth&&i()}),window),r=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,o=e.contentRect.height;0===i&&0===o||s(i,o)}));return r.observe(n),function(t,e){$l.size||window.addEventListener("resize",Tl),$l.set(t,e)}(t,s),r}function Al(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){$l.delete(t),$l.size||window.removeEventListener("resize",Tl)}(t)}function Cl(t,e,i){const o=t.canvas,n=pn((e=>{null!==t.ctx&&i(function(t,e){const i=wl[t.type]||t.type,{x:o,y:n}=Jr(t,e);return{type:i,chart:e,native:t,x:void 0!==o?o:null,y:void 0!==n?n:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,i){t.addEventListener(e,i,Sl)}(o,e,n),n}class Dl extends xl{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,o=t.getAttribute("height"),n=t.getAttribute("width");if(t.$chartjs={initial:{height:o,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",_l(n)){const e=ea(t,"width");void 0!==e&&(t.width=e)}if(_l(o))if(""===t.style.height)t.height=t.width/(e||2);else{const e=ea(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const i=e.$chartjs.initial;["height","width"].forEach((t=>{const o=i[t];yn(o)?e.removeAttribute(t):e.setAttribute(t,o)}));const o=i.style||{};return Object.keys(o).forEach((t=>{e.style[t]=o[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,i){this.removeEventListener(t,e);const o=t.$proxies||(t.$proxies={}),n={attach:Ol,detach:El,resize:Pl}[e]||Cl;o[e]=n(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),o=i[e];o&&(({attach:Al,detach:Al,resize:Al}[e]||kl)(t,e,o),i[e]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,o){return function(t,e,i,o){const n=Gr(t),s=Kr(n,"margin"),r=qr(n.maxWidth,t,"clientWidth")||Fn,a=qr(n.maxHeight,t,"clientHeight")||Fn,l=function(t,e,i){let o,n;if(void 0===e||void 0===i){const s=Yr(t);if(s){const t=s.getBoundingClientRect(),r=Gr(s),a=Kr(r,"border","width"),l=Kr(r,"padding");e=t.width-l.width-a.width,i=t.height-l.height-a.height,o=qr(r.maxWidth,s,"clientWidth"),n=qr(r.maxHeight,s,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:o||Fn,maxHeight:n||Fn}}(t,e,i);let{width:c,height:d}=l;if("content-box"===n.boxSizing){const t=Kr(n,"border","width"),e=Kr(n,"padding");c-=e.width+t.width,d-=e.height+t.height}return c=Math.max(0,c-s.width),d=Math.max(0,o?Math.floor(c/o):d-s.height),c=Zr(Math.min(c,r,l.maxWidth)),d=Zr(Math.min(d,a,l.maxHeight)),c&&!d&&(d=Zr(c/2)),{width:c,height:d}}(t,e,i,o)}isAttached(t){const e=Yr(t);return!(!e||!e.isConnected)}}class jl{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Kn(this.x)&&Kn(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const o={};return t.forEach((t=>{o[t]=i[t]&&i[t].active()?i[t]._to:this[t]})),o}}jl.defaults={},jl.defaultRoutes=void 0;const Ll={values:t=>bn(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const o=this.chart.options.locale;let n,s=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(n="scientific"),s=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t)),i}(t,i)}const r=qn(Math.abs(s)),a=Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:n,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),ra(t,o,l)},logarithmic(t,e,i){if(0===t)return"0";const o=t/Math.pow(10,Math.floor(qn(t)));return 1===o||2===o||5===o?Ll.numeric.call(this,t,e,i):""}};var Il={formatters:Ll};function Nl(t,e,i,o,n){const s=_n(o,0),r=Math.min(_n(n,t.length),t.length);let a,l,c,d=0;for(i=Math.ceil(i),n&&(a=n-o,i=a/Math.floor(a/i)),c=s;c<0;)d++,c=Math.round(s+d*i);for(l=Math.max(s,0);l<r;l++)l===c&&(e.push(t[l]),d++,c=Math.round(s+d*i))}Xs.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Il.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),Xs.route("scale.ticks","color","","color"),Xs.route("scale.grid","color","","borderColor"),Xs.route("scale.grid","borderColor","","borderColor"),Xs.route("scale.title","color","","color"),Xs.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),Xs.describe("scales",{_fallback:"scale"}),Xs.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const Bl=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function zl(t,e){const i=[],o=t.length/e,n=t.length;let s=0;for(;s<n;s+=o)i.push(t[Math.floor(s)]);return i}function Wl(t,e,i){const o=t.ticks.length,n=Math.min(e,o-1),s=t._startPixel,r=t._endPixel,a=1e-6;let l,c=t.getPixelForTick(n);if(!(i&&(l=1===o?Math.max(c-s,r-c):0===e?(t.getPixelForTick(1)-c)/2:(c-t.getPixelForTick(n-1))/2,c+=n<e?l:-l,c<s-a||c>r+a)))return c}function Fl(t){return t.drawTicks?t.tickLength:0}function Hl(t,e){if(!t.display)return 0;const i=yr(t.font,e),o=mr(t.padding);return(bn(t.text)?t.text.length:1)*i.lineHeight+o.height}function Ul(t,e,i){let o=un(t);return(i&&"right"!==e||!i&&"right"===e)&&(o=(t=>"left"===t?"right":"right"===t?"left":t)(o)),o}class Vl extends jl{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:o}=this;return t=wn(t,Number.POSITIVE_INFINITY),e=wn(e,Number.NEGATIVE_INFINITY),i=wn(i,Number.POSITIVE_INFINITY),o=wn(o,Number.NEGATIVE_INFINITY),{min:wn(t,i),max:wn(e,o),minDefined:vn(t),maxDefined:vn(e)}}getMinMax(t){let e,{min:i,max:o,minDefined:n,maxDefined:s}=this.getUserBounds();if(n&&s)return{min:i,max:o};const r=this.getMatchingVisibleMetas();for(let a=0,l=r.length;a<l;++a)e=r[a].controller.getMinMax(this,t),n||(i=Math.min(i,e.min)),s||(o=Math.max(o,e.max));return i=s&&i>o?o:i,o=n&&i>o?i:o,{min:wn(i,wn(o,i)),max:wn(o,wn(i,o))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){kn(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:o,grace:n,ticks:s}=this.options,r=s.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=function(t,e,i){const{min:o,max:n}=t,s=Sn(e,(n-o)/2),r=(t,e)=>i&&0===t?0:t+e;return{min:r(o,-Math.abs(s)),max:r(n,s)}}(this,n,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const a=r<this.ticks.length;this._convertTicksToLabels(a?zl(this.ticks,r):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),s.display&&(s.autoSkip||"auto"===s.source)&&(this.ticks=function(t,e){const i=t.options.ticks,o=i.maxTicksLimit||function(t){const e=t.options.offset,i=t._tickSize(),o=t._length/i+(e?0:1),n=t._maxLength/i;return Math.floor(Math.min(o,n))}(t),n=i.major.enabled?function(t){const e=[];let i,o;for(i=0,o=t.length;i<o;i++)t[i].major&&e.push(i);return e}(e):[],s=n.length,r=n[0],a=n[s-1],l=[];if(s>o)return function(t,e,i,o){let n,s=0,r=i[0];for(o=Math.ceil(o),n=0;n<t.length;n++)n===r&&(e.push(t[n]),s++,r=i[s*o])}(e,l,n,s/o),l;const c=function(t,e,i){const o=function(t){const e=t.length;let i,o;if(e<2)return!1;for(o=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==o)return!1;return o}(t),n=e.length/i;if(!o)return Math.max(n,1);const s=function(t){const e=[],i=Math.sqrt(t);let o;for(o=1;o<i;o++)t%o==0&&(e.push(o),e.push(t/o));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}(o);for(let t=0,e=s.length-1;t<e;t++){const e=s[t];if(e>n)return e}return Math.max(n,1)}(n,e,o);if(s>0){let t,i;const o=s>1?Math.round((a-r)/(s-1)):null;for(Nl(e,l,c,yn(o)?0:r-o,r),t=0,i=s-1;t<i;t++)Nl(e,l,c,n[t],n[t+1]);return Nl(e,l,c,a,yn(o)?e.length:a+o),l}return Nl(e,l,c),l}(this,this.ticks),this._labelSizes=null),a&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){kn(this.options.afterUpdate,[this])}beforeSetDimensions(){kn(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){kn(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),kn(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){kn(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,o,n;for(i=0,o=t.length;i<o;i++)n=t[i],n.label=kn(e.callback,[n.value,i,t],this)}afterTickToLabelConversion(){kn(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){kn(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=this.ticks.length,o=e.minRotation||0,n=e.maxRotation;let s,r,a,l=o;if(!this._isVisible()||!e.display||o>=n||i<=1||!this.isHorizontal())return void(this.labelRotation=o);const c=this._getLabelSizes(),d=c.widest.width,h=c.highest.height,p=as(this.chart.width-d,0,this.maxWidth);s=t.offset?this.maxWidth/i:p/(i-1),d+6>s&&(s=p/(i-(t.offset?.5:1)),r=this.maxHeight-Fl(t.grid)-e.padding-Hl(t.title,this.chart.options.font),a=Math.sqrt(d*d+h*h),l=ts(Math.min(Math.asin(as((c.highest.height+6)/s,-1,1)),Math.asin(as(r/a,-1,1))-Math.asin(as(h/a,-1,1)))),l=Math.max(o,Math.min(n,l))),this.labelRotation=l}afterCalculateLabelRotation(){kn(this.options.afterCalculateLabelRotation,[this])}beforeFit(){kn(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:o,grid:n}}=this,s=this._isVisible(),r=this.isHorizontal();if(s){const s=Hl(o,e.options.font);if(r?(t.width=this.maxWidth,t.height=Fl(n)+s):(t.height=this.maxHeight,t.width=Fl(n)+s),i.display&&this.ticks.length){const{first:e,last:o,widest:n,highest:s}=this._getLabelSizes(),a=2*i.padding,l=Qn(this.labelRotation),c=Math.cos(l),d=Math.sin(l);if(r){const e=i.mirror?0:d*n.width+c*s.height;t.height=Math.min(this.maxHeight,t.height+e+a)}else{const e=i.mirror?0:c*n.width+d*s.height;t.width=Math.min(this.maxWidth,t.width+e+a)}this._calculatePadding(e,o,d,c)}}this._handleMargins(),r?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,o){const{ticks:{align:n,padding:s},position:r}=this.options,a=0!==this.labelRotation,l="top"!==r&&"x"===this.axis;if(this.isHorizontal()){const r=this.getPixelForTick(0)-this.left,c=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,h=0;a?l?(d=o*t.width,h=i*e.height):(d=i*t.height,h=o*e.width):"start"===n?h=e.width:"end"===n?d=t.width:(d=t.width/2,h=e.width/2),this.paddingLeft=Math.max((d-r+s)*this.width/(this.width-r),0),this.paddingRight=Math.max((h-c+s)*this.width/(this.width-c),0)}else{let i=e.height/2,o=t.height/2;"start"===n?(i=0,o=t.height):"end"===n&&(i=e.height,o=0),this.paddingTop=i+s,this.paddingBottom=o+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){kn(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)yn(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=zl(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,e){const{ctx:i,_longestTextCache:o}=this,n=[],s=[];let r,a,l,c,d,h,p,u,f,g,m,y=0,b=0;for(r=0;r<e;++r){if(c=t[r].label,d=this._resolveTickFontOptions(r),i.font=h=d.string,p=o[h]=o[h]||{data:{},gc:[]},u=d.lineHeight,f=g=0,yn(c)||bn(c)){if(bn(c))for(a=0,l=c.length;a<l;++a)m=c[a],yn(m)||bn(m)||(f=Ks(i,p.data,p.gc,f,m),g+=u)}else f=Ks(i,p.data,p.gc,f,c),g=u;n.push(f),s.push(g),y=Math.max(f,y),b=Math.max(g,b)}!function(t,e){Rn(t,(t=>{const i=t.gc,o=i.length/2;let n;if(o>e){for(n=0;n<o;++n)delete t.data[i[n]];i.splice(0,o)}}))}(o,e);const x=n.indexOf(y),v=s.indexOf(b),w=t=>({width:n[t]||0,height:s[t]||0});return{first:w(0),last:w(e-1),widest:w(x),highest:w(v),widths:n,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return as(this._alignToPixels?Zs(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return xr(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=xr(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=Qn(this.labelRotation),i=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e)),n=this._getLabelSizes(),s=t.autoSkipPadding||0,r=n?n.widest.width+s:0,a=n?n.highest.height+s:0;return this.isHorizontal()?a*i>r*o?r/i:a/o:a*o<r*i?a/i:r/o}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,o=this.options,{grid:n,position:s}=o,r=n.offset,a=this.isHorizontal(),l=this.ticks.length+(r?1:0),c=Fl(n),d=[],h=n.setContext(this.getContext()),p=h.drawBorder?h.borderWidth:0,u=p/2,f=function(t){return Zs(i,t,p)};let g,m,y,b,x,v,w,_,S,k,R,O;if("top"===s)g=f(this.bottom),v=this.bottom-c,_=g-u,k=f(t.top)+u,O=t.bottom;else if("bottom"===s)g=f(this.top),k=t.top,O=f(t.bottom)-u,v=g+u,_=this.top+c;else if("left"===s)g=f(this.right),x=this.right-c,w=g-u,S=f(t.left)+u,R=t.right;else if("right"===s)g=f(this.left),S=t.left,R=f(t.right)-u,x=g+u,w=this.left+c;else if("x"===e){if("center"===s)g=f((t.top+t.bottom)/2+.5);else if(xn(s)){const t=Object.keys(s)[0],e=s[t];g=f(this.chart.scales[t].getPixelForValue(e))}k=t.top,O=t.bottom,v=g+u,_=v+c}else if("y"===e){if("center"===s)g=f((t.left+t.right)/2);else if(xn(s)){const t=Object.keys(s)[0],e=s[t];g=f(this.chart.scales[t].getPixelForValue(e))}x=g-u,w=x-c,S=t.left,R=t.right}const E=_n(o.ticks.maxTicksLimit,l),$=Math.max(1,Math.ceil(l/E));for(m=0;m<l;m+=$){const t=n.setContext(this.getContext(m)),e=t.lineWidth,o=t.color,s=n.borderDash||[],l=t.borderDashOffset,c=t.tickWidth,h=t.tickColor,p=t.tickBorderDash||[],u=t.tickBorderDashOffset;y=Wl(this,m,r),void 0!==y&&(b=Zs(i,y,e),a?x=w=S=R=b:v=_=k=O=b,d.push({tx1:x,ty1:v,tx2:w,ty2:_,x1:S,y1:k,x2:R,y2:O,width:e,color:o,borderDash:s,borderDashOffset:l,tickWidth:c,tickColor:h,tickBorderDash:p,tickBorderDashOffset:u}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(t){const e=this.axis,i=this.options,{position:o,ticks:n}=i,s=this.isHorizontal(),r=this.ticks,{align:a,crossAlign:l,padding:c,mirror:d}=n,h=Fl(i.grid),p=h+c,u=d?-c:p,f=-Qn(this.labelRotation),g=[];let m,y,b,x,v,w,_,S,k,R,O,E,$="middle";if("top"===o)w=this.bottom-u,_=this._getXAxisLabelAlignment();else if("bottom"===o)w=this.top+u,_=this._getXAxisLabelAlignment();else if("left"===o){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,v=t.x}else if("right"===o){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,v=t.x}else if("x"===e){if("center"===o)w=(t.top+t.bottom)/2+p;else if(xn(o)){const t=Object.keys(o)[0],e=o[t];w=this.chart.scales[t].getPixelForValue(e)+p}_=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===o)v=(t.left+t.right)/2-p;else if(xn(o)){const t=Object.keys(o)[0],e=o[t];v=this.chart.scales[t].getPixelForValue(e)}_=this._getYAxisLabelAlignment(h).textAlign}"y"===e&&("start"===a?$="top":"end"===a&&($="bottom"));const M=this._getLabelSizes();for(m=0,y=r.length;m<y;++m){b=r[m],x=b.label;const t=n.setContext(this.getContext(m));S=this.getPixelForTick(m)+n.labelOffset,k=this._resolveTickFontOptions(m),R=k.lineHeight,O=bn(x)?x.length:1;const e=O/2,i=t.color,a=t.textStrokeColor,c=t.textStrokeWidth;let h;if(s?(v=S,E="top"===o?"near"===l||0!==f?-O*R+R/2:"center"===l?-M.highest.height/2-e*R+R:-M.highest.height+R/2:"near"===l||0!==f?R/2:"center"===l?M.highest.height/2-e*R:M.highest.height-O*R,d&&(E*=-1)):(w=S,E=(1-O)*R/2),t.showLabelBackdrop){const e=mr(t.backdropPadding),i=M.heights[m],o=M.widths[m];let n=w+E-e.top,s=v-e.left;switch($){case"middle":n-=i/2;break;case"bottom":n-=i}switch(_){case"center":s-=o/2;break;case"right":s-=o}h={left:s,top:n,width:o+e.width,height:i+e.height,color:t.backdropColor}}g.push({rotation:f,label:x,font:k,color:i,strokeColor:a,strokeWidth:c,textOffset:E,textAlign:_,textBaseline:$,translation:[v,w],backdrop:h})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Qn(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align&&(i="right"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:o,padding:n}}=this.options,s=t+n,r=this._getLabelSizes().widest.width;let a,l;return"left"===e?o?(l=this.right+n,"near"===i?a="left":"center"===i?(a="center",l+=r/2):(a="right",l+=r)):(l=this.right-s,"near"===i?a="right":"center"===i?(a="center",l-=r/2):(a="left",l=this.left)):"right"===e?o?(l=this.left+n,"near"===i?a="right":"center"===i?(a="center",l-=r/2):(a="left",l-=r)):(l=this.left+s,"near"===i?a="left":"center"===i?(a="center",l+=r/2):(a="right",l=this.right)):a="right",{textAlign:a,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:o,width:n,height:s}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,o,n,s),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex((e=>e.value===t));return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let n,s;const r=(t,e,o)=>{o.width&&o.color&&(i.save(),i.lineWidth=o.width,i.strokeStyle=o.color,i.setLineDash(o.borderDash||[]),i.lineDashOffset=o.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(n=0,s=o.length;n<s;++n){const t=o[n];e.drawOnChartArea&&r({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&r({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{grid:i}}=this,o=i.setContext(this.getContext()),n=i.drawBorder?o.borderWidth:0;if(!n)return;const s=i.setContext(this.getContext(0)).lineWidth,r=this._borderValue;let a,l,c,d;this.isHorizontal()?(a=Zs(t,this.left,n)-n/2,l=Zs(t,this.right,s)+s/2,c=d=r):(c=Zs(t,this.top,n)-n/2,d=Zs(t,this.bottom,s)+s/2,a=l=r),e.save(),e.lineWidth=o.borderWidth,e.strokeStyle=o.borderColor,e.beginPath(),e.moveTo(a,c),e.lineTo(l,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&ir(e,i);const o=this._labelItems||(this._labelItems=this._computeLabelItems(t));let n,s;for(n=0,s=o.length;n<s;++n){const t=o[n],i=t.font,s=t.label;t.backdrop&&(e.fillStyle=t.backdrop.color,e.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),rr(e,s,0,t.textOffset,i,t)}i&&or(e)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:o}}=this;if(!i.display)return;const n=yr(i.font),s=mr(i.padding),r=i.align;let a=n.lineHeight/2;"bottom"===e||"center"===e||xn(e)?(a+=s.bottom,bn(i.text)&&(a+=n.lineHeight*(i.text.length-1))):a+=s.top;const{titleX:l,titleY:c,maxWidth:d,rotation:h}=function(t,e,i,o){const{top:n,left:s,bottom:r,right:a,chart:l}=t,{chartArea:c,scales:d}=l;let h,p,u,f=0;const g=r-n,m=a-s;if(t.isHorizontal()){if(p=fn(o,s,a),xn(i)){const t=Object.keys(i)[0],o=i[t];u=d[t].getPixelForValue(o)+g-e}else u="center"===i?(c.bottom+c.top)/2+g-e:Bl(t,i,e);h=a-s}else{if(xn(i)){const t=Object.keys(i)[0],o=i[t];p=d[t].getPixelForValue(o)-m+e}else p="center"===i?(c.left+c.right)/2-m+e:Bl(t,i,e);u=fn(o,r,n),f="left"===i?-Un:Un}return{titleX:p,titleY:u,maxWidth:h,rotation:f}}(this,a,e,r);rr(t,i.text,0,0,n,{color:i.color,maxWidth:d,rotation:h,textAlign:Ul(r,e,o),textBaseline:"middle",translation:[l,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=_n(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===Vl.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[];let n,s;for(n=0,s=e.length;n<s;++n){const s=e[n];s[i]!==this.id||t&&s.type!==t||o.push(s)}return o}_resolveTickFontOptions(t){return yr(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Yl{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return"id"in t&&"defaults"in t})(e)&&(i=this.register(e));const o=this.items,n=t.id,s=this.scope+"."+n;if(!n)throw new Error("class does not have id: "+t);return n in o||(o[n]=t,function(t,e,i){const o=Tn(Object.create(null),[i?Xs.get(i):{},Xs.get(e),t.defaults]);Xs.set(e,o),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const o=i.split("."),n=o.pop(),s=[t].concat(o).join("."),r=e[i].split("."),a=r.pop(),l=r.join(".");Xs.route(s,n,l,a)}))}(e,t.defaultRoutes),t.descriptors&&Xs.describe(e,t.descriptors)}(t,s,i),this.override&&Xs.override(t.id,t.overrides)),s}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,o=this.scope;i in e&&delete e[i],o&&i in Xs[o]&&(delete Xs[o][i],this.override&&delete Vs[i])}}var ql=new class{constructor(){this.controllers=new Yl(Ca,"datasets",!0),this.elements=new Yl(jl,"elements"),this.plugins=new Yl(Object,"plugins"),this.scales=new Yl(Vl,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach((e=>{const o=i||this._getRegistryForType(e);i||o.isForType(e)||o===this.plugins&&e.id?this._exec(t,o,e):Rn(e,(e=>{const o=i||this._getRegistryForType(e);this._exec(t,o,e)}))}))}_exec(t,e,i){const o=jn(t);kn(i["before"+o],[],i),e[t](i),kn(i["after"+o],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const o=e.get(t);if(void 0===o)throw new Error('"'+t+'" is not a registered '+i+".");return o}};class Gl{constructor(){this._init=[]}notify(t,e,i,o){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const n=o?this._descriptors(t).filter(o):this._descriptors(t),s=this._notify(n,t,e,i);return"afterDestroy"===e&&(this._notify(n,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,e,i,o){o=o||{};for(const n of t){const t=n.plugin;if(!1===kn(t[i],[e,o,n.options],t)&&o.cancelable)return!1}return!0}invalidate(){yn(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,o=_n(i.options&&i.options.plugins,{}),n=function(t){const e=[],i=Object.keys(ql.plugins.items);for(let t=0;t<i.length;t++)e.push(ql.getPlugin(i[t]));const o=t.plugins||[];for(let t=0;t<o.length;t++){const i=o[t];-1===e.indexOf(i)&&e.push(i)}return e}(i);return!1!==o||e?function(t,e,i,o){const n=[],s=t.getContext();for(let r=0;r<e.length;r++){const a=e[r],l=Xl(i[a.id],o);null!==l&&n.push({plugin:a,options:Kl(t.config,a,l,s)})}return n}(t,n,o,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,o=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(o(e,i),t,"stop"),this._notify(o(i,e),t,"start")}}function Xl(t,e){return e||!1!==t?!0===t?{}:t:null}function Kl(t,e,i,o){const n=t.pluginScopeKeys(e),s=t.getOptionScopes(i,n);return t.createResolver(s,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Jl(t,e){const i=Xs.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Zl(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase();var i}function Ql(t){const e=t.options||(t.options={});e.plugins=_n(e.plugins,{}),e.scales=function(t,e){const i=Vs[t.type]||{scales:{}},o=e.scales||{},n=Jl(t.type,e),s=Object.create(null),r=Object.create(null);return Object.keys(o).forEach((t=>{const e=o[t];if(!xn(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const a=Zl(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(a,n),c=i.scales||{};s[a]=s[a]||t,r[t]=Pn(Object.create(null),[{axis:a},e,c[a],c[l]])})),t.data.datasets.forEach((i=>{const n=i.type||t.type,a=i.indexAxis||Jl(n,e),l=(Vs[n]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,a),n=i[e+"AxisID"]||s[e]||e;r[n]=r[n]||Object.create(null),Pn(r[n],[{axis:e},o[n],l[t]])}))})),Object.keys(r).forEach((t=>{const e=r[t];Pn(e,[Xs.scales[e.type],Xs.scale])})),r}(t,e)}function tc(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const ec=new Map,ic=new Set;function oc(t,e){let i=ec.get(t);return i||(i=e(),ec.set(t,i),ic.add(i)),i}const nc=(t,e,i)=>{const o=Dn(e,i);void 0!==o&&t.add(o)};class sc{constructor(t){this._config=function(t){return(t=t||{}).data=tc(t.data),Ql(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=tc(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Ql(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return oc(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return oc(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return oc(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return oc(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let o=i.get(t);return o&&!e||(o=new Map,i.set(t,o)),o}getOptionScopes(t,e,i){const{options:o,type:n}=this,s=this._cachedScopes(t,i),r=s.get(e);if(r)return r;const a=new Set;e.forEach((e=>{t&&(a.add(t),e.forEach((e=>nc(a,t,e)))),e.forEach((t=>nc(a,o,t))),e.forEach((t=>nc(a,Vs[n]||{},t))),e.forEach((t=>nc(a,Xs,t))),e.forEach((t=>nc(a,Ys,t)))}));const l=Array.from(a);return 0===l.length&&l.push(Object.create(null)),ic.has(e)&&s.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Vs[e]||{},Xs.datasets[e]||{},{type:e},Xs,Ys]}resolveNamedOptions(t,e,i,o=[""]){const n={$shared:!0},{resolver:s,subPrefixes:r}=rc(this._resolverCache,t,o);let a=s;(function(t,e){const{isScriptable:i,isIndexable:o}=$r(t);for(const n of e){const e=i(n),s=o(n),r=(s||e)&&t[n];if(e&&(In(r)||ac(r))||s&&bn(r))return!0}return!1})(s,e)&&(n.$shared=!1,a=Er(s,i=In(i)?i():i,this.createResolver(t,i,r)));for(const t of e)n[t]=a[t];return n}createResolver(t,e,i=[""],o){const{resolver:n}=rc(this._resolverCache,t,i);return xn(e)?Er(n,e,void 0,o):n}}function rc(t,e,i){let o=t.get(e);o||(o=new Map,t.set(e,o));const n=i.join();let s=o.get(n);return s||(s={resolver:Or(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},o.set(n,s)),s}const ac=t=>xn(t)&&Object.getOwnPropertyNames(t).reduce(((e,i)=>e||In(t[i])),!1),lc=["top","bottom","left","right","chartArea"];function cc(t,e){return"top"===t||"bottom"===t||-1===lc.indexOf(t)&&"x"===e}function dc(t,e){return function(i,o){return i[t]===o[t]?i[e]-o[e]:i[t]-o[t]}}function hc(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),kn(i&&i.onComplete,[t],e)}function pc(t){const e=t.chart,i=e.options.animation;kn(i&&i.onProgress,[t],e)}function uc(t){return Vr()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const fc={},gc=t=>{const e=uc(t);return Object.values(fc).filter((t=>t.canvas===e)).pop()};function mc(t,e,i){const o=Object.keys(t);for(const n of o){const o=+n;if(o>=e){const s=t[n];delete t[n],(i>0||o>e)&&(t[o+i]=s)}}}class yc{constructor(t,e){const i=this.config=new sc(e),o=uc(t),n=gc(o);if(n)throw new Error("Canvas is already in use. Chart with ID '"+n.id+"' must be destroyed before the canvas can be reused.");const s=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||function(t){return!Vr()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?vl:Dl}(o)),this.platform.updateConfig(i);const r=this.platform.acquireContext(o,s.aspectRatio),a=r&&r.canvas,l=a&&a.height,c=a&&a.width;this.id=mn(),this.ctx=r,this.canvas=a,this.width=c,this.height=l,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Gl,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=function(t,e){let i;return function(...o){return e?(clearTimeout(i),i=setTimeout(t,e,o)):t.apply(this,o),e}}((t=>this.update(t)),s.resizeDelay||0),this._dataChanges=[],fc[this.id]=this,r&&a?(ma.listen(this,"complete",hc),ma.listen(this,"progress",pc),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:o,_aspectRatio:n}=this;return yn(t)?e&&n?n:o?i/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Qr(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Qs(this.canvas,this.ctx),this}stop(){return ma.stop(this),this}resize(t,e){ma.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,o=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,s=this.platform.getMaximumSize(o,t,e,n),r=i.devicePixelRatio||this.platform.getDevicePixelRatio(),a=this.width?"resize":"attach";this.width=s.width,this.height=s.height,this._aspectRatio=this.aspectRatio,Qr(this,r,!0)&&(this.notifyPlugins("resize",{size:s}),kn(i.onResize,[this,s],this),this.attached&&this._doResize(a)&&this.render())}ensureScalesHaveIDs(){Rn(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,o=Object.keys(i).reduce(((t,e)=>(t[e]=!1,t)),{});let n=[];e&&(n=n.concat(Object.keys(e).map((t=>{const i=e[t],o=Zl(t,i),n="r"===o,s="x"===o;return{options:i,dposition:n?"chartArea":s?"bottom":"left",dtype:n?"radialLinear":s?"category":"linear"}})))),Rn(n,(e=>{const n=e.options,s=n.id,r=Zl(s,n),a=_n(n.type,e.dtype);void 0!==n.position&&cc(n.position,r)===cc(e.dposition)||(n.position=e.dposition),o[s]=!0;let l=null;s in i&&i[s].type===a?l=i[s]:(l=new(ql.getScale(a))({id:s,type:a,ctx:this.ctx,chart:this}),i[l.id]=l),l.init(n,t)})),Rn(o,((t,e)=>{t||delete i[e]})),Rn(i,(t=>{bl.configure(this,t,t.options),bl.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(dc("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,o;for(this._removeUnreferencedMetasets(),i=0,o=e.length;i<o;i++){const o=e[i];let n=this.getDatasetMeta(i);const s=o.type||this.config.type;if(n.type&&n.type!==s&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=s,n.indexAxis=o.indexAxis||Jl(s,this.options),n.order=o.order||0,n.index=i,n.label=""+o.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{const e=ql.getController(s),{datasetElementType:o,dataElementType:r}=Xs.datasets[s];Object.assign(e.prototype,{dataElementType:ql.getElement(r),datasetElementType:o&&ql.getElement(o)}),n.controller=new e(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){Rn(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let s=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!o&&-1===n.indexOf(e);e.buildOrUpdateElements(i),s=Math.max(+e.getMaxOverflow(),s)}s=this._minPadding=i.layout.autoPadding?s:0,this._updateLayout(s),o||Rn(n,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(dc("z","_idx"));const{_active:r,_lastEvent:a}=this;a?this._eventHandler(a,!0):r.length&&this._updateHoverStyles(r,r,!0),this.render()}_updateScales(){Rn(this.scales,(t=>{bl.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);Nn(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:o,count:n}of e)mc(t,o,"_removeElements"===i?-n:n)}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),o=i(0);for(let t=1;t<e;t++)if(!Nn(o,i(t)))return;return Array.from(o).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;bl.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],Rn(this.boxes,(t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,In(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),o={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",o)&&(i.controller._update(e),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(ma.has(this)?this.attached&&!ma.running(this)&&ma.start(this):(this.draw(),hc({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let o,n;for(o=0,n=e.length;o<n;++o){const n=e[o];t&&!n.visible||i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i=t._clip,o=!i.disabled,n=this.chartArea,s={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",s)&&(o&&ir(e,{left:!1===i.left?0:n.left-i.left,right:!1===i.right?this.width:n.right+i.right,top:!1===i.top?0:n.top-i.top,bottom:!1===i.bottom?this.height:n.bottom+i.bottom}),t.controller.draw(),o&&or(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}getElementsAtEventForMode(t,e,i,o){const n=rl.modes[e];return"function"==typeof n?n(this,t,i,o):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let o=i.filter((t=>t&&t._dataset===e)).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=xr(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const o=i?"show":"hide",n=this.getDatasetMeta(t),s=n.controller._resolveAnimations(void 0,o);Ln(e)?(n.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),s.update(n,{visible:i}),this.update((e=>e.datasetIndex===t?o:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),ma.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Qs(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete fc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},o=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};Rn(this.options.events,(t=>i(t,o)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},o=(i,o)=>{t[i]&&(e.removeEventListener(this,i,o),delete t[i])},n=(t,e)=>{this.canvas&&this.resize(t,e)};let s;const r=()=>{o("attach",r),this.attached=!0,this.resize(),i("resize",n),i("detach",s)};s=()=>{this.attached=!1,o("resize",n),this._stop(),this._resize(0,0),i("attach",r)},e.isAttached(this.canvas)?r():s()}unbindEvents(){Rn(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},Rn(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const o=i?"set":"remove";let n,s,r,a;for("dataset"===e&&(n=this.getDatasetMeta(t[0].datasetIndex),n.controller["_"+o+"DatasetHoverStyle"]()),r=0,a=t.length;r<a;++r){s=t[r];const e=s&&this.getDatasetMeta(s.datasetIndex).controller;e&&e[o+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map((({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}));!On(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){const o=this.options.hover,n=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),s=n(e,t),r=i?t:n(t,e);s.length&&this.updateHoverStyle(s,o.mode,!1),r.length&&o.mode&&this.updateHoverStyle(r,o.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:er(t,this.chartArea,this._minPadding)},o=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,o))return;const n=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(n||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:o=[],options:n}=this,s=e,r=this._getActiveElements(t,o,i,s),a=function(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}(t),l=function(t,e,i,o){return i&&"mouseout"!==t.type?o?e:t:null}(t,this._lastEvent,i,a);i&&(this._lastEvent=null,kn(n.onHover,[t,r,this],this),a&&kn(n.onClick,[t,r,this],this));const c=!On(r,o);return(c||e)&&(this._active=r,this._updateHoverStyles(r,o,e)),this._lastEvent=l,c}_getActiveElements(t,e,i,o){if("mouseout"===t.type)return[];if(!i)return e;const n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,o)}}const bc=()=>Rn(yc.instances,(t=>t._plugins.invalidate())),xc=!0;function vc(t,e,i){const{startAngle:o,pixelMargin:n,x:s,y:r,outerRadius:a,innerRadius:l}=e;let c=n/a;t.beginPath(),t.arc(s,r,a,o-c,i+c),l>n?(c=n/l,t.arc(s,r,l,i+c,o-c,!0)):t.arc(s,r,n,i+Un,o-Un),t.closePath(),t.clip()}function wc(t,e,i,o){return{x:i+t*Math.cos(e),y:o+t*Math.sin(e)}}function _c(t,e,i,o,n){const{x:s,y:r,startAngle:a,pixelMargin:l,innerRadius:c}=e,d=Math.max(e.outerRadius+o+i-l,0),h=c>0?c+o+i+l:0;let p=0;const u=n-a;if(o){const t=((c>0?c-o:0)+(d>0?d-o:0))/2;p=(u-(0!==t?u*t/(t+o):u))/2}const f=(u-Math.max(.001,u*d-i/Bn)/d)/2,g=a+f+p,m=n-f-p,{outerStart:y,outerEnd:b,innerStart:x,innerEnd:v}=function(t,e,i,o){const n=ur(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]),s=(i-e)/2,r=Math.min(s,o*e/2),a=t=>{const e=(i-Math.min(s,t))*o/2;return as(t,0,Math.min(s,e))};return{outerStart:a(n.outerStart),outerEnd:a(n.outerEnd),innerStart:as(n.innerStart,0,r),innerEnd:as(n.innerEnd,0,r)}}(e,h,d,m-g),w=d-y,_=d-b,S=g+y/w,k=m-b/_,R=h+x,O=h+v,E=g+x/R,$=m-v/O;if(t.beginPath(),t.arc(s,r,d,S,k),b>0){const e=wc(_,k,s,r);t.arc(e.x,e.y,b,k,m+Un)}const M=wc(O,m,s,r);if(t.lineTo(M.x,M.y),v>0){const e=wc(O,$,s,r);t.arc(e.x,e.y,v,m+Un,$+Math.PI)}if(t.arc(s,r,h,m-v/h,g+x/h,!0),x>0){const e=wc(R,E,s,r);t.arc(e.x,e.y,x,E+Math.PI,g-Un)}const T=wc(w,g,s,r);if(t.lineTo(T.x,T.y),y>0){const e=wc(w,S,s,r);t.arc(e.x,e.y,y,g-Un,S)}t.closePath()}Object.defineProperties(yc,{defaults:{enumerable:xc,value:Xs},instances:{enumerable:xc,value:fc},overrides:{enumerable:xc,value:Vs},registry:{enumerable:xc,value:ql},version:{enumerable:xc,value:"3.7.0"},getChart:{enumerable:xc,value:gc},register:{enumerable:xc,value:(...t)=>{ql.add(...t),bc()}},unregister:{enumerable:xc,value:(...t)=>{ql.remove(...t),bc()}}});class Sc extends jl{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const o=this.getProps(["x","y"],i),{angle:n,distance:s}=is(o,{x:t,y:e}),{startAngle:r,endAngle:a,innerRadius:l,outerRadius:c,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),h=this.options.spacing/2,p=_n(d,a-r)>=zn||rs(n,r,a),u=ls(s,l+h,c+h);return p&&u}getCenterPoint(t){const{x:e,y:i,startAngle:o,endAngle:n,innerRadius:s,outerRadius:r}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:a,spacing:l}=this.options,c=(o+n)/2,d=(s+r+l+a)/2;return{x:e+Math.cos(c)*d,y:i+Math.sin(c)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,o=(e.offset||0)/2,n=(e.spacing||0)/2;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>zn?Math.floor(i/zn):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let s=0;if(o){s=o/2;const e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*s,Math.sin(e)*s),this.circumference>=Bn&&(s=o)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const r=function(t,e,i,o){const{fullCircles:n,startAngle:s,circumference:r}=e;let a=e.endAngle;if(n){_c(t,e,i,o,s+zn);for(let e=0;e<n;++e)t.fill();isNaN(r)||(a=s+r%zn,r%zn==0&&(a+=zn))}return _c(t,e,i,o,a),t.fill(),a}(t,this,s,n);(function(t,e,i,o,n){const{options:s}=e,{borderWidth:r,borderJoinStyle:a}=s,l="inner"===s.borderAlign;r&&(l?(t.lineWidth=2*r,t.lineJoin=a||"round"):(t.lineWidth=r,t.lineJoin=a||"bevel"),e.fullCircles&&function(t,e,i){const{x:o,y:n,startAngle:s,pixelMargin:r,fullCircles:a}=e,l=Math.max(e.outerRadius-r,0),c=e.innerRadius+r;let d;for(i&&vc(t,e,s+zn),t.beginPath(),t.arc(o,n,c,s+zn,s,!0),d=0;d<a;++d)t.stroke();for(t.beginPath(),t.arc(o,n,l,s,s+zn),d=0;d<a;++d)t.stroke()}(t,e,l),l&&vc(t,e,n),_c(t,e,i,o,n),t.stroke())})(t,this,s,n,r),t.restore()}}function kc(t,e,i=e){t.lineCap=_n(i.borderCapStyle,e.borderCapStyle),t.setLineDash(_n(i.borderDash,e.borderDash)),t.lineDashOffset=_n(i.borderDashOffset,e.borderDashOffset),t.lineJoin=_n(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=_n(i.borderWidth,e.borderWidth),t.strokeStyle=_n(i.borderColor,e.borderColor)}function Rc(t,e,i){t.lineTo(i.x,i.y)}function Oc(t,e,i={}){const o=t.length,{start:n=0,end:s=o-1}=i,{start:r,end:a}=e,l=Math.max(n,r),c=Math.min(s,a),d=n<r&&s<r||n>a&&s>a;return{count:o,start:l,loop:e.loop,ilen:c<l&&!d?o+c-l:c-l}}function Ec(t,e,i,o){const{points:n,options:s}=e,{count:r,start:a,loop:l,ilen:c}=Oc(n,i,o),d=function(t){return t.stepped?nr:t.tension||"monotone"===t.cubicInterpolationMode?sr:Rc}(s);let h,p,u,{move:f=!0,reverse:g}=o||{};for(h=0;h<=c;++h)p=n[(a+(g?c-h:h))%r],p.skip||(f?(t.moveTo(p.x,p.y),f=!1):d(t,u,p,g,s.stepped),u=p);return l&&(p=n[(a+(g?c:0))%r],d(t,u,p,g,s.stepped)),!!l}function $c(t,e,i,o){const n=e.points,{count:s,start:r,ilen:a}=Oc(n,i,o),{move:l=!0,reverse:c}=o||{};let d,h,p,u,f,g,m=0,y=0;const b=t=>(r+(c?a-t:t))%s,x=()=>{u!==f&&(t.lineTo(m,f),t.lineTo(m,u),t.lineTo(m,g))};for(l&&(h=n[b(0)],t.moveTo(h.x,h.y)),d=0;d<=a;++d){if(h=n[b(d)],h.skip)continue;const e=h.x,i=h.y,o=0|e;o===p?(i<u?u=i:i>f&&(f=i),m=(y*m+e)/++y):(x(),t.lineTo(e,i),p=o,y=0,u=f=i),g=i}x()}function Mc(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i?Ec:$c}Sc.id="arc",Sc.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0},Sc.defaultRoutes={backgroundColor:"backgroundColor"};const Tc="function"==typeof Path2D;class Pc extends jl{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const o=i.spanGaps?this._loop:this._fullLoop;Ur(this._points,i,t,o,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){const i=t.points,o=t.options.spanGaps,n=i.length;if(!n)return[];const s=!!t._loop,{start:r,end:a}=function(t,e,i,o){let n=0,s=e-1;if(i&&!o)for(;n<e&&!t[n].skip;)n++;for(;n<e&&t[n].skip;)n++;for(n%=e,i&&(s+=n);s>n&&t[s%e].skip;)s--;return s%=e,{start:n,end:s}}(i,n,s,o);return function(t,e,i,o){return o&&o.setContext&&i?function(t,e,i,o){const n=t._chart.getContext(),s=fa(t.options),{_datasetIndex:r,options:{spanGaps:a}}=t,l=i.length,c=[];let d=s,h=e[0].start,p=h;function u(t,e,o,n){const s=a?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=s;for(;i[e%l].skip;)e+=s;t%l!=e%l&&(c.push({start:t%l,end:e%l,loop:o,style:n}),d=n,h=e%l)}}for(const t of e){h=a?h:t.start;let e,s=i[h%l];for(p=h+1;p<=t.end;p++){const a=i[p%l];e=fa(o.setContext(xr(n,{type:"segment",p0:s,p1:a,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:r}))),ga(e,d)&&u(h,p-1,t.loop,d),s=a,d=e}h<p-1&&u(h,p-1,t.loop,d)}return c}(t,e,i,o):e}(t,!0===o?[{start:r,end:a,loop:s}]:function(t,e,i,o){const n=t.length,s=[];let r,a=e,l=t[e];for(r=e+1;r<=i;++r){const i=t[r%n];i.skip||i.stop?l.skip||(o=!1,s.push({start:e%n,end:(r-1)%n,loop:o}),e=a=i.stop?r:null):(a=r,l.skip&&(e=r)),l=i}return null!==a&&s.push({start:e%n,end:a%n,loop:o}),s}(i,r,a<r?a+n:a,!!t._fullLoop&&0===r&&a===n-1),i,e)}(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,o=t[e],n=this.points,s=ua(this,{property:e,start:o,end:o});if(!s.length)return;const r=[],a=function(t){return t.stepped?oa:t.tension||"monotone"===t.cubicInterpolationMode?na:ia}(i);let l,c;for(l=0,c=s.length;l<c;++l){const{start:c,end:d}=s[l],h=n[c],p=n[d];if(h===p){r.push(h);continue}const u=a(h,p,Math.abs((o-h[e])/(p[e]-h[e])),i.stepped);u[e]=t[e],r.push(u)}return 1===r.length?r[0]:r}pathSegment(t,e,i){return Mc(this)(t,this,e,i)}path(t,e,i){const o=this.segments,n=Mc(this);let s=this._loop;e=e||0,i=i||this.points.length-e;for(const r of o)s&=n(t,this,r,{start:e,end:e+i-1});return!!s}draw(t,e,i,o){const n=this.options||{};(this.points||[]).length&&n.borderWidth&&(t.save(),function(t,e,i,o){Tc&&!e.options.segment?function(t,e,i,o){let n=e._path;n||(n=e._path=new Path2D,e.path(n,i,o)&&n.closePath()),kc(t,e.options),t.stroke(n)}(t,e,i,o):function(t,e,i,o){const{segments:n,options:s}=e,r=Mc(e);for(const a of n)kc(t,s,a.style),t.beginPath(),r(t,e,a,{start:i,end:i+o-1})&&t.closePath(),t.stroke()}(t,e,i,o)}(t,this,i,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Ac(t,e,i,o){const n=t.options,{[i]:s}=t.getProps([i],o);return Math.abs(e-s)<n.radius+n.hitRadius}Pc.id="line",Pc.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},Pc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},Pc.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class Cc extends jl{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const o=this.options,{x:n,y:s}=this.getProps(["x","y"],i);return Math.pow(t-n,2)+Math.pow(e-s,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(t,e){return Ac(this,t,"x",e)}inYRange(t,e){return Ac(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;return e=Math.max(e,e&&t.hoverRadius||0),2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!er(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,tr(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function Dc(t,e){const{x:i,y:o,base:n,width:s,height:r}=t.getProps(["x","y","base","width","height"],e);let a,l,c,d,h;return t.horizontal?(h=r/2,a=Math.min(i,n),l=Math.max(i,n),c=o-h,d=o+h):(h=s/2,a=i-h,l=i+h,c=Math.min(o,n),d=Math.max(o,n)),{left:a,top:c,right:l,bottom:d}}function jc(t,e,i,o){return t?0:as(e,i,o)}function Lc(t,e,i,o){const n=null===e,s=null===i,r=t&&!(n&&s)&&Dc(t,o);return r&&(n||ls(e,r.left,r.right))&&(s||ls(i,r.top,r.bottom))}function Ic(t,e){t.rect(e.x,e.y,e.w,e.h)}function Nc(t,e,i={}){const o=t.x!==i.x?-e:0,n=t.y!==i.y?-e:0,s=(t.x+t.w!==i.x+i.w?e:0)-o,r=(t.y+t.h!==i.y+i.h?e:0)-n;return{x:t.x+o,y:t.y+n,w:t.w+s,h:t.h+r,radius:t.radius}}Cc.id="point",Cc.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},Cc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class Bc extends jl{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:o}}=this,{inner:n,outer:s}=function(t){const e=Dc(t),i=e.right-e.left,o=e.bottom-e.top,n=function(t,e,i){const o=t.options.borderWidth,n=t.borderSkipped,s=fr(o);return{t:jc(n.top,s.top,0,i),r:jc(n.right,s.right,0,e),b:jc(n.bottom,s.bottom,0,i),l:jc(n.left,s.left,0,e)}}(t,i/2,o/2),s=function(t,e,i){const{enableBorderRadius:o}=t.getProps(["enableBorderRadius"]),n=t.options.borderRadius,s=gr(n),r=Math.min(e,i),a=t.borderSkipped,l=o||xn(n);return{topLeft:jc(!l||a.top||a.left,s.topLeft,0,r),topRight:jc(!l||a.top||a.right,s.topRight,0,r),bottomLeft:jc(!l||a.bottom||a.left,s.bottomLeft,0,r),bottomRight:jc(!l||a.bottom||a.right,s.bottomRight,0,r)}}(t,i/2,o/2);return{outer:{x:e.left,y:e.top,w:i,h:o,radius:s},inner:{x:e.left+n.l,y:e.top+n.t,w:i-n.l-n.r,h:o-n.t-n.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,s.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(n.b,n.r))}}}}(this),r=(a=s.radius).topLeft||a.topRight||a.bottomLeft||a.bottomRight?lr:Ic;var a;t.save(),s.w===n.w&&s.h===n.h||(t.beginPath(),r(t,Nc(s,e,n)),t.clip(),r(t,Nc(n,-e,s)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),r(t,Nc(n,e)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,e,i){return Lc(this,t,e,i)}inXRange(t,e){return Lc(this,t,null,e)}inYRange(t,e){return Lc(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:o,horizontal:n}=this.getProps(["x","y","base","horizontal"],t);return{x:n?(e+o)/2:e,y:n?i:(i+o)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}Bc.id="bar",Bc.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},Bc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var zc=Object.freeze({__proto__:null,ArcElement:Sc,LineElement:Pc,PointElement:Cc,BarElement:Bc});function Wc(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function Fc(t){t.data.datasets.forEach((t=>{Wc(t)}))}var Hc={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled)return void Fc(t);const o=t.width;t.data.datasets.forEach(((e,n)=>{const{_data:s,indexAxis:r}=e,a=t.getDatasetMeta(n),l=s||e.data;if("y"===br([r,t.options.indexAxis]))return;if("line"!==a.type)return;const c=t.scales[a.xAxisID];if("linear"!==c.type&&"time"!==c.type)return;if(t.options.parsing)return;let d,{start:h,count:p}=function(t,e){const i=e.length;let o,n=0;const{iScale:s}=t,{min:r,max:a,minDefined:l,maxDefined:c}=s.getUserBounds();return l&&(n=as(wr(e,s.axis,r).lo,0,i-1)),o=c?as(wr(e,s.axis,a).hi+1,n,i)-n:i-n,{start:n,count:o}}(a,l);if(p<=(i.threshold||4*o))Wc(e);else{switch(yn(s)&&(e._data=l,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":d=function(t,e,i,o,n){const s=n.samples||o;if(s>=i)return t.slice(e,e+i);const r=[],a=(i-2)/(s-2);let l=0;const c=e+i-1;let d,h,p,u,f,g=e;for(r[l++]=t[g],d=0;d<s-2;d++){let o,n=0,s=0;const c=Math.floor((d+1)*a)+1+e,m=Math.min(Math.floor((d+2)*a)+1,i)+e,y=m-c;for(o=c;o<m;o++)n+=t[o].x,s+=t[o].y;n/=y,s/=y;const b=Math.floor(d*a)+1+e,x=Math.min(Math.floor((d+1)*a)+1,i)+e,{x:v,y:w}=t[g];for(p=u=-1,o=b;o<x;o++)u=.5*Math.abs((v-n)*(t[o].y-w)-(v-t[o].x)*(s-w)),u>p&&(p=u,h=t[o],f=o);r[l++]=h,g=f}return r[l++]=t[c],r}(l,h,p,o,i);break;case"min-max":d=function(t,e,i,o){let n,s,r,a,l,c,d,h,p,u,f=0,g=0;const m=[],y=e+i-1,b=t[e].x,x=t[y].x-b;for(n=e;n<e+i;++n){s=t[n],r=(s.x-b)/x*o,a=s.y;const e=0|r;if(e===l)a<p?(p=a,c=n):a>u&&(u=a,d=n),f=(g*f+s.x)/++g;else{const i=n-1;if(!yn(c)&&!yn(d)){const e=Math.min(c,d),o=Math.max(c,d);e!==h&&e!==i&&m.push({...t[e],x:f}),o!==h&&o!==i&&m.push({...t[o],x:f})}n>0&&i!==h&&m.push(t[i]),m.push(s),l=e,g=0,p=u=a,c=d=h=n}}return m}(l,h,p,o);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=d}}))},destroy(t){Fc(t)}};function Uc(t,e,i){const o=function(t){const e=t.options,i=e.fill;let o=_n(i&&i.target,i);return void 0===o&&(o=!!e.backgroundColor),!1!==o&&null!==o&&(!0===o?"origin":o)}(t);if(xn(o))return!isNaN(o.value)&&o;let n=parseFloat(o);return vn(n)&&Math.floor(n)===n?("-"!==o[0]&&"+"!==o[0]||(n=e+n),!(n===e||n<0||n>=i)&&n):["origin","start","end","stack","shape"].indexOf(o)>=0&&o}class Vc{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:o,y:n,radius:s}=this;return e=e||{start:0,end:zn},t.arc(o,n,s,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:o}=this,n=t.angle;return{x:e+Math.cos(n)*o,y:i+Math.sin(n)*o,angle:n}}}function Yc(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function qc(t,e,i){const o=[];for(let n=0;n<i.length;n++){const s=i[n],{first:r,last:a,point:l}=Gc(s,e,"x");if(!(!l||r&&a))if(r)o.unshift(l);else if(t.push(l),!a)break}t.push(...o)}function Gc(t,e,i){const o=t.interpolate(e,i);if(!o)return{};const n=o[i],s=t.segments,r=t.points;let a=!1,l=!1;for(let t=0;t<s.length;t++){const e=s[t],o=r[e.start][i],c=r[e.end][i];if(ls(n,o,c)){a=n===o,l=n===c;break}}return{first:a,last:l,point:o}}function Xc(t){const{chart:e,fill:i,line:o}=t;if(vn(i))return function(t,e){const i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:o}=t,n=[],s=o.segments,r=o.points,a=function(t,e){const i=[],o=t.getMatchingVisibleMetas("line");for(let t=0;t<o.length;t++){const n=o[t];if(n.index===e)break;n.hidden||i.unshift(n.dataset)}return i}(e,i);a.push(Kc({x:null,y:e.bottom},o));for(let t=0;t<s.length;t++){const e=s[t];for(let t=e.start;t<=e.end;t++)qc(n,r[t],a)}return new Pc({points:n,options:{}})}(t);if("shape"===i)return!0;const n=function(t){return(t.scale||{}).getPointPositionForValue?function(t){const{scale:e,fill:i}=t,o=e.options,n=e.getLabels().length,s=[],r=o.reverse?e.max:e.min,a=o.reverse?e.min:e.max;let l,c,d;if(d="start"===i?r:"end"===i?a:xn(i)?i.value:e.getBaseValue(),o.grid.circular)return c=e.getPointPositionForValue(0,r),new Vc({x:c.x,y:c.y,radius:e.getDistanceFromCenterForValue(d)});for(l=0;l<n;++l)s.push(e.getPointPositionForValue(l,d));return s}(t):function(t){const{scale:e={},fill:i}=t;let o,n=null;return"start"===i?n=e.bottom:"end"===i?n=e.top:xn(i)?n=e.getPixelForValue(i.value):e.getBasePixel&&(n=e.getBasePixel()),vn(n)?(o=e.isHorizontal(),{x:o?n:null,y:o?null:n}):null}(t)}(t);return n instanceof Vc?n:Kc(n,o)}function Kc(t,e){let i=[],o=!1;return bn(t)?(o=!0,i=t):i=function(t,e){const{x:i=null,y:o=null}=t||{},n=e.points,s=[];return e.segments.forEach((({start:t,end:e})=>{e=Yc(t,e,n);const r=n[t],a=n[e];null!==o?(s.push({x:r.x,y:o}),s.push({x:a.x,y:o})):null!==i&&(s.push({x:i,y:r.y}),s.push({x:i,y:a.y}))})),s}(t,e),i.length?new Pc({points:i,options:{tension:0},_loop:o,_fullLoop:o}):null}function Jc(t,e,i){let o=t[e].fill;const n=[e];let s;if(!i)return o;for(;!1!==o&&-1===n.indexOf(o);){if(!vn(o))return o;if(s=t[o],!s)return!1;if(s.visible)return o;n.push(o),o=s.fill}return!1}function Zc(t,e,i){t.beginPath(),e.path(t),t.lineTo(e.last().x,i),t.lineTo(e.first().x,i),t.closePath(),t.clip()}function Qc(t,e,i,o){if(o)return;let n=e[t],s=i[t];return"angle"===t&&(n=ss(n),s=ss(s)),{property:t,start:n,end:s}}function td(t,e,i,o){return t&&e?o(t[i],e[i]):t?t[i]:e?e[i]:0}function ed(t,e,i){const{top:o,bottom:n}=e.chart.chartArea,{property:s,start:r,end:a}=i||{};"x"===s&&(t.beginPath(),t.rect(r,o,a-r,n-o),t.clip())}function id(t,e,i,o){const n=e.interpolate(i,o);n&&t.lineTo(n.x,n.y)}function od(t,e){const{line:i,target:o,property:n,color:s,scale:r}=e,a=function(t,e,i){const o=t.segments,n=t.points,s=e.points,r=[];for(const t of o){let{start:o,end:a}=t;a=Yc(o,a,n);const l=Qc(i,n[o],n[a],t.loop);if(!e.segments){r.push({source:t,target:l,start:n[o],end:n[a]});continue}const c=ua(e,l);for(const e of c){const o=Qc(i,s[e.start],s[e.end],e.loop),a=pa(t,n,o);for(const t of a)r.push({source:t,target:e,start:{[i]:td(l,o,"start",Math.max)},end:{[i]:td(l,o,"end",Math.min)}})}}return r}(i,o,n);for(const{source:e,target:l,start:c,end:d}of a){const{style:{backgroundColor:a=s}={}}=e,h=!0!==o;t.save(),t.fillStyle=a,ed(t,r,h&&Qc(n,c,d)),t.beginPath();const p=!!i.pathSegment(t,e);let u;if(h){p?t.closePath():id(t,o,d,n);const e=!!o.pathSegment(t,l,{move:p,reverse:!0});u=p&&e,u||id(t,o,c,n)}t.closePath(),t.fill(u?"evenodd":"nonzero"),t.restore()}}function nd(t,e,i){const o=Xc(e),{line:n,scale:s,axis:r}=e,a=n.options,l=a.fill,c=a.backgroundColor,{above:d=c,below:h=c}=l||{};o&&n.points.length&&(ir(t,i),function(t,e){const{line:i,target:o,above:n,below:s,area:r,scale:a}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&s!==n&&(Zc(t,o,r.top),od(t,{line:i,target:o,color:n,scale:a,property:l}),t.restore(),t.save(),Zc(t,o,r.bottom)),od(t,{line:i,target:o,color:s,scale:a,property:l}),t.restore()}(t,{line:n,target:o,above:d,below:h,area:i,scale:s,axis:r}),or(t))}var sd={id:"filler",afterDatasetsUpdate(t,e,i){const o=(t.data.datasets||[]).length,n=[];let s,r,a,l;for(r=0;r<o;++r)s=t.getDatasetMeta(r),a=s.dataset,l=null,a&&a.options&&a instanceof Pc&&(l={visible:t.isDatasetVisible(r),index:r,fill:Uc(a,r,o),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:a}),s.$filler=l,n.push(l);for(r=0;r<o;++r)l=n[r],l&&!1!==l.fill&&(l.fill=Jc(n,r,i.propagate))},beforeDraw(t,e,i){const o="beforeDraw"===i.drawTime,n=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&(i.line.updateControlPoints(s,i.axis),o&&nd(t.ctx,i,s))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const o=t.getSortedVisibleDatasetMetas();for(let e=o.length-1;e>=0;--e){const i=o[e].$filler;i&&nd(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const o=e.meta.$filler;o&&!1!==o.fill&&"beforeDatasetDraw"===i.drawTime&&nd(t.ctx,o,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const rd=(t,e)=>{let{boxHeight:i=e,boxWidth:o=e}=t;return t.usePointStyle&&(i=Math.min(i,e),o=Math.min(o,e)),{boxWidth:o,boxHeight:i,itemHeight:Math.max(e,i)}};class ad extends jl{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=kn(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const i=t.labels,o=yr(i.font),n=o.size,s=this._computeTitleHeight(),{boxWidth:r,itemHeight:a}=rd(i,n);let l,c;e.font=o.string,this.isHorizontal()?(l=this.maxWidth,c=this._fitRows(s,n,r,a)+10):(c=this.maxHeight,l=this._fitCols(s,n,r,a)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,o){const{ctx:n,maxWidth:s,options:{labels:{padding:r}}}=this,a=this.legendHitBoxes=[],l=this.lineWidths=[0],c=o+r;let d=t;n.textAlign="left",n.textBaseline="middle";let h=-1,p=-c;return this.legendItems.forEach(((t,u)=>{const f=i+e/2+n.measureText(t.text).width;(0===u||l[l.length-1]+f+2*r>s)&&(d+=c,l[l.length-(u>0?0:1)]=0,p+=c,h++),a[u]={left:0,top:p,row:h,width:f,height:o},l[l.length-1]+=f+r})),d}_fitCols(t,e,i,o){const{ctx:n,maxHeight:s,options:{labels:{padding:r}}}=this,a=this.legendHitBoxes=[],l=this.columnSizes=[],c=s-t;let d=r,h=0,p=0,u=0,f=0;return this.legendItems.forEach(((t,s)=>{const g=i+e/2+n.measureText(t.text).width;s>0&&p+o+2*r>c&&(d+=h+r,l.push({width:h,height:p}),u+=h+r,f++,h=p=0),a[s]={left:u,top:p,col:f,width:g,height:o},h=Math.max(h,g),p+=o+r})),d+=h,l.push({width:h,height:p}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:o},rtl:n}}=this,s=aa(n,this.left,this.width);if(this.isHorizontal()){let n=0,r=fn(i,this.left+o,this.right-this.lineWidths[n]);for(const a of e)n!==a.row&&(n=a.row,r=fn(i,this.left+o,this.right-this.lineWidths[n])),a.top+=this.top+t+o,a.left=s.leftForLtr(s.x(r),a.width),r+=a.width+o}else{let n=0,r=fn(i,this.top+t+o,this.bottom-this.columnSizes[n].height);for(const a of e)a.col!==n&&(n=a.col,r=fn(i,this.top+t+o,this.bottom-this.columnSizes[n].height)),a.top=r,a.left+=this.left+o,a.left=s.leftForLtr(s.x(a.left),a.width),r+=a.height+o}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;ir(t,this),this._draw(),or(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:o}=this,{align:n,labels:s}=t,r=Xs.color,a=aa(t.rtl,this.left,this.width),l=yr(s.font),{color:c,padding:d}=s,h=l.size,p=h/2;let u;this.drawTitle(),o.textAlign=a.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=l.string;const{boxWidth:f,boxHeight:g,itemHeight:m}=rd(s,h),y=this.isHorizontal(),b=this._computeTitleHeight();u=y?{x:fn(n,this.left+d,this.right-i[0]),y:this.top+d+b,line:0}:{x:this.left+d,y:fn(n,this.top+b+d,this.bottom-e[0].height),line:0},la(this.ctx,t.textDirection);const x=m+d;this.legendItems.forEach(((v,w)=>{o.strokeStyle=v.fontColor||c,o.fillStyle=v.fontColor||c;const _=o.measureText(v.text).width,S=a.textAlign(v.textAlign||(v.textAlign=s.textAlign)),k=f+p+_;let R=u.x,O=u.y;a.setWidth(this.width),y?w>0&&R+k+d>this.right&&(O=u.y+=x,u.line++,R=u.x=fn(n,this.left+d,this.right-i[u.line])):w>0&&O+x>this.bottom&&(R=u.x=R+e[u.line].width+d,u.line++,O=u.y=fn(n,this.top+b+d,this.bottom-e[u.line].height)),function(t,e,i){if(isNaN(f)||f<=0||isNaN(g)||g<0)return;o.save();const n=_n(i.lineWidth,1);if(o.fillStyle=_n(i.fillStyle,r),o.lineCap=_n(i.lineCap,"butt"),o.lineDashOffset=_n(i.lineDashOffset,0),o.lineJoin=_n(i.lineJoin,"miter"),o.lineWidth=n,o.strokeStyle=_n(i.strokeStyle,r),o.setLineDash(_n(i.lineDash,[])),s.usePointStyle){const s={radius:f*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},r=a.xPlus(t,f/2);tr(o,s,r,e+p)}else{const s=e+Math.max((h-g)/2,0),r=a.leftForLtr(t,f),l=gr(i.borderRadius);o.beginPath(),Object.values(l).some((t=>0!==t))?lr(o,{x:r,y:s,w:f,h:g,radius:l}):o.rect(r,s,f,g),o.fill(),0!==n&&o.stroke()}o.restore()}(a.x(R),O,v),R=((t,e,i,o)=>t===(o?"left":"right")?i:"center"===t?(e+i)/2:e)(S,R+f+p,y?R+k:this.right,t.rtl),function(t,e,i){rr(o,i.text,t,e+m/2,l,{strikethrough:i.hidden,textAlign:a.textAlign(i.textAlign)})}(a.x(R),O,v),y?u.x+=k+d:u.y+=x})),ca(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=yr(e.font),o=mr(e.padding);if(!e.display)return;const n=aa(t.rtl,this.left,this.width),s=this.ctx,r=e.position,a=i.size/2,l=o.top+a;let c,d=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),c=this.top+l,d=fn(t.align,d,this.right-h);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);c=l+fn(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const p=fn(r,d,d+h);s.textAlign=n.textAlign(un(r)),s.textBaseline="middle",s.strokeStyle=e.color,s.fillStyle=e.color,s.font=i.string,rr(s,e.text,p,c,i)}_computeTitleHeight(){const t=this.options.title,e=yr(t.font),i=mr(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,o,n;if(ls(t,this.left,this.right)&&ls(e,this.top,this.bottom))for(n=this.legendHitBoxes,i=0;i<n.length;++i)if(o=n[i],ls(t,o.left,o.left+o.width)&&ls(e,o.top,o.top+o.height))return this.legendItems[i];return null}handleEvent(t){const e=this.options;if(!function(t,e){return!("mousemove"!==t||!e.onHover&&!e.onLeave)||!(!e.onClick||"click"!==t&&"mouseup"!==t)}(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type){const o=this._hoveredItem,n=((t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index)(o,i);o&&!n&&kn(e.onLeave,[t,o,this],this),this._hoveredItem=i,i&&!n&&kn(e.onHover,[t,i,this],this)}else i&&kn(e.onClick,[t,i,this],this)}}var ld={id:"legend",_element:ad,start(t,e,i){const o=t.legend=new ad({ctx:t.ctx,options:i,chart:t});bl.configure(t,o,i),bl.addBox(t,o)},stop(t){bl.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const o=t.legend;bl.configure(t,o,i),o.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const o=e.datasetIndex,n=i.chart;n.isDatasetVisible(o)?(n.hide(o),e.hidden=!0):(n.show(o),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:o,textAlign:n,color:s}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const r=t.controller.getStyle(i?0:void 0),a=mr(r.borderWidth);return{text:e[t.index].label,fillStyle:r.backgroundColor,fontColor:s,hidden:!t.visible,lineCap:r.borderCapStyle,lineDash:r.borderDash,lineDashOffset:r.borderDashOffset,lineJoin:r.borderJoinStyle,lineWidth:(a.width+a.height)/4,strokeStyle:r.borderColor,pointStyle:o||r.pointStyle,rotation:r.rotation,textAlign:n||r.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class cd extends jl{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const o=bn(i.text)?i.text.length:1;this._padding=mr(i.padding);const n=o*yr(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=n:this.width=n}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:o,right:n,options:s}=this,r=s.align;let a,l,c,d=0;return this.isHorizontal()?(l=fn(r,i,n),c=e+t,a=n-i):("left"===s.position?(l=i+t,c=fn(r,o,e),d=-.5*Bn):(l=n-t,c=fn(r,e,o),d=.5*Bn),a=o-e),{titleX:l,titleY:c,maxWidth:a,rotation:d}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=yr(e.font),o=i.lineHeight/2+this._padding.top,{titleX:n,titleY:s,maxWidth:r,rotation:a}=this._drawArgs(o);rr(t,e.text,0,0,i,{color:e.color,maxWidth:r,rotation:a,textAlign:un(e.align),textBaseline:"middle",translation:[n,s]})}}var dd={id:"title",_element:cd,start(t,e,i){!function(t,e){const i=new cd({ctx:t.ctx,options:e,chart:t});bl.configure(t,i,e),bl.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const e=t.titleBlock;bl.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const o=t.titleBlock;bl.configure(t,o,i),o.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const hd=new WeakMap;var pd={id:"subtitle",start(t,e,i){const o=new cd({ctx:t.ctx,options:i,chart:t});bl.configure(t,o,i),bl.addBox(t,o),hd.set(t,o)},stop(t){bl.removeBox(t,hd.get(t)),hd.delete(t)},beforeUpdate(t,e,i){const o=hd.get(t);bl.configure(t,o,i),o.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ud={average(t){if(!t.length)return!1;let e,i,o=0,n=0,s=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();o+=t.x,n+=t.y,++s}}return{x:o/s,y:n/s}},nearest(t,e){if(!t.length)return!1;let i,o,n,s=e.x,r=e.y,a=Number.POSITIVE_INFINITY;for(i=0,o=t.length;i<o;++i){const o=t[i].element;if(o&&o.hasValue()){const t=os(e,o.getCenterPoint());t<a&&(a=t,n=o)}}if(n){const t=n.tooltipPosition();s=t.x,r=t.y}return{x:s,y:r}}};function fd(t,e){return e&&(bn(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function gd(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function md(t,e){const{element:i,datasetIndex:o,index:n}=e,s=t.getDatasetMeta(o).controller,{label:r,value:a}=s.getLabelAndValue(n);return{chart:t,label:r,parsed:s.getParsed(n),raw:t.data.datasets[o].data[n],formattedValue:a,dataset:s.getDataset(),dataIndex:n,datasetIndex:o,element:i}}function yd(t,e){const i=t.chart.ctx,{body:o,footer:n,title:s}=t,{boxWidth:r,boxHeight:a}=e,l=yr(e.bodyFont),c=yr(e.titleFont),d=yr(e.footerFont),h=s.length,p=n.length,u=o.length,f=mr(e.padding);let g=f.height,m=0,y=o.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);y+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),y&&(g+=u*(e.displayColors?Math.max(a,l.lineHeight):l.lineHeight)+(y-u)*l.lineHeight+(y-1)*e.bodySpacing),p&&(g+=e.footerMarginTop+p*d.lineHeight+(p-1)*e.footerSpacing);let b=0;const x=function(t){m=Math.max(m,i.measureText(t).width+b)};return i.save(),i.font=c.string,Rn(t.title,x),i.font=l.string,Rn(t.beforeBody.concat(t.afterBody),x),b=e.displayColors?r+2+e.boxPadding:0,Rn(o,(t=>{Rn(t.before,x),Rn(t.lines,x),Rn(t.after,x)})),b=0,i.font=d.string,Rn(t.footer,x),i.restore(),m+=f.width,{width:m,height:g}}function bd(t,e,i,o){const{x:n,width:s}=i,{width:r,chartArea:{left:a,right:l}}=t;let c="center";return"center"===o?c=n<=(a+l)/2?"left":"right":n<=s/2?c="left":n>=r-s/2&&(c="right"),function(t,e,i,o){const{x:n,width:s}=o,r=i.caretSize+i.caretPadding;return"left"===t&&n+s+r>e.width||"right"===t&&n-s-r<0||void 0}(c,t,e,i)&&(c="center"),c}function xd(t,e,i){const o=i.yAlign||e.yAlign||function(t,e){const{y:i,height:o}=e;return i<o/2?"top":i>t.height-o/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||bd(t,e,i,o),yAlign:o}}function vd(t,e,i,o){const{caretSize:n,caretPadding:s,cornerRadius:r}=t,{xAlign:a,yAlign:l}=i,c=n+s,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=gr(r);let f=function(t,e){let{x:i,width:o}=t;return"right"===e?i-=o:"center"===e&&(i-=o/2),i}(e,a);const g=function(t,e,i){let{y:o,height:n}=t;return"top"===e?o+=i:o-="bottom"===e?n+i:n/2,o}(e,l,c);return"center"===l?"left"===a?f+=c:"right"===a&&(f-=c):"left"===a?f-=Math.max(d,p)+n:"right"===a&&(f+=Math.max(h,u)+n),{x:as(f,0,o.width-e.width),y:as(g,0,o.height-e.height)}}function wd(t,e,i){const o=mr(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-o.right:t.x+o.left}function _d(t){return fd([],gd(t))}function Sd(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class kd extends jl{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&e.options.animation&&i.animations,n=new wa(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=(this,xr(this.chart.getContext(),{tooltip:this,tooltipItems:this._tooltipItems,type:"tooltip"})))}getTitle(t,e){const{callbacks:i}=e,o=i.beforeTitle.apply(this,[t]),n=i.title.apply(this,[t]),s=i.afterTitle.apply(this,[t]);let r=[];return r=fd(r,gd(o)),r=fd(r,gd(n)),r=fd(r,gd(s)),r}getBeforeBody(t,e){return _d(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const{callbacks:i}=e,o=[];return Rn(t,(t=>{const e={before:[],lines:[],after:[]},n=Sd(i,t);fd(e.before,gd(n.beforeLabel.call(this,t))),fd(e.lines,n.label.call(this,t)),fd(e.after,gd(n.afterLabel.call(this,t))),o.push(e)})),o}getAfterBody(t,e){return _d(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:i}=e,o=i.beforeFooter.apply(this,[t]),n=i.footer.apply(this,[t]),s=i.afterFooter.apply(this,[t]);let r=[];return r=fd(r,gd(o)),r=fd(r,gd(n)),r=fd(r,gd(s)),r}_createItems(t){const e=this._active,i=this.chart.data,o=[],n=[],s=[];let r,a,l=[];for(r=0,a=e.length;r<a;++r)l.push(md(this.chart,e[r]));return t.filter&&(l=l.filter(((e,o,n)=>t.filter(e,o,n,i)))),t.itemSort&&(l=l.sort(((e,o)=>t.itemSort(e,o,i)))),Rn(l,(e=>{const i=Sd(t.callbacks,e);o.push(i.labelColor.call(this,e)),n.push(i.labelPointStyle.call(this,e)),s.push(i.labelTextColor.call(this,e))})),this.labelColors=o,this.labelPointStyles=n,this.labelTextColors=s,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),o=this._active;let n,s=[];if(o.length){const t=ud[i.position].call(this,o,this._eventPosition);s=this._createItems(i),this.title=this.getTitle(s,i),this.beforeBody=this.getBeforeBody(s,i),this.body=this.getBody(s,i),this.afterBody=this.getAfterBody(s,i),this.footer=this.getFooter(s,i);const e=this._size=yd(this,i),r=Object.assign({},t,e),a=xd(this.chart,i,r),l=vd(i,r,a,this.chart);this.xAlign=a.xAlign,this.yAlign=a.yAlign,n={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(n={opacity:0});this._tooltipItems=s,this.$context=void 0,n&&this._resolveAnimations().update(this,n),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,o){const n=this.getCaretPosition(t,i,o);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}getCaretPosition(t,e,i){const{xAlign:o,yAlign:n}=this,{caretSize:s,cornerRadius:r}=i,{topLeft:a,topRight:l,bottomLeft:c,bottomRight:d}=gr(r),{x:h,y:p}=t,{width:u,height:f}=e;let g,m,y,b,x,v;return"center"===n?(x=p+f/2,"left"===o?(g=h,m=g-s,b=x+s,v=x-s):(g=h+u,m=g+s,b=x-s,v=x+s),y=g):(m="left"===o?h+Math.max(a,c)+s:"right"===o?h+u-Math.max(l,d)-s:this.caretX,"top"===n?(b=p,x=b-s,g=m-s,y=m+s):(b=p+f,x=b+s,g=m+s,y=m-s),v=b),{x1:g,x2:m,x3:y,y1:b,y2:x,y3:v}}drawTitle(t,e,i){const o=this.title,n=o.length;let s,r,a;if(n){const l=aa(i.rtl,this.x,this.width);for(t.x=wd(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",s=yr(i.titleFont),r=i.titleSpacing,e.fillStyle=i.titleColor,e.font=s.string,a=0;a<n;++a)e.fillText(o[a],l.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+r,a+1===n&&(t.y+=i.titleMarginBottom-r)}}_drawColorBox(t,e,i,o,n){const s=this.labelColors[i],r=this.labelPointStyles[i],{boxHeight:a,boxWidth:l,boxPadding:c}=n,d=yr(n.bodyFont),h=wd(this,"left",n),p=o.x(h),u=a<d.lineHeight?(d.lineHeight-a)/2:0,f=e.y+u;if(n.usePointStyle){const e={radius:Math.min(l,a)/2,pointStyle:r.pointStyle,rotation:r.rotation,borderWidth:1},i=o.leftForLtr(p,l)+l/2,c=f+a/2;t.strokeStyle=n.multiKeyBackground,t.fillStyle=n.multiKeyBackground,tr(t,e,i,c),t.strokeStyle=s.borderColor,t.fillStyle=s.backgroundColor,tr(t,e,i,c)}else{t.lineWidth=s.borderWidth||1,t.strokeStyle=s.borderColor,t.setLineDash(s.borderDash||[]),t.lineDashOffset=s.borderDashOffset||0;const e=o.leftForLtr(p,l-c),i=o.leftForLtr(o.xPlus(p,1),l-c-2),r=gr(s.borderRadius);Object.values(r).some((t=>0!==t))?(t.beginPath(),t.fillStyle=n.multiKeyBackground,lr(t,{x:e,y:f,w:l,h:a,radius:r}),t.fill(),t.stroke(),t.fillStyle=s.backgroundColor,t.beginPath(),lr(t,{x:i,y:f+1,w:l-2,h:a-2,radius:r}),t.fill()):(t.fillStyle=n.multiKeyBackground,t.fillRect(e,f,l,a),t.strokeRect(e,f,l,a),t.fillStyle=s.backgroundColor,t.fillRect(i,f+1,l-2,a-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:o}=this,{bodySpacing:n,bodyAlign:s,displayColors:r,boxHeight:a,boxWidth:l,boxPadding:c}=i,d=yr(i.bodyFont);let h=d.lineHeight,p=0;const u=aa(i.rtl,this.x,this.width),f=function(i){e.fillText(i,u.x(t.x+p),t.y+h/2),t.y+=h+n},g=u.textAlign(s);let m,y,b,x,v,w,_;for(e.textAlign=s,e.textBaseline="middle",e.font=d.string,t.x=wd(this,g,i),e.fillStyle=i.bodyColor,Rn(this.beforeBody,f),p=r&&"right"!==g?"center"===s?l/2+c:l+2+c:0,x=0,w=o.length;x<w;++x){for(m=o[x],y=this.labelTextColors[x],e.fillStyle=y,Rn(m.before,f),b=m.lines,r&&b.length&&(this._drawColorBox(e,t,x,u,i),h=Math.max(d.lineHeight,a)),v=0,_=b.length;v<_;++v)f(b[v]),h=d.lineHeight;Rn(m.after,f)}p=0,h=d.lineHeight,Rn(this.afterBody,f),t.y-=n}drawFooter(t,e,i){const o=this.footer,n=o.length;let s,r;if(n){const a=aa(i.rtl,this.x,this.width);for(t.x=wd(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=a.textAlign(i.footerAlign),e.textBaseline="middle",s=yr(i.footerFont),e.fillStyle=i.footerColor,e.font=s.string,r=0;r<n;++r)e.fillText(o[r],a.x(t.x),t.y+s.lineHeight/2),t.y+=s.lineHeight+i.footerSpacing}}drawBackground(t,e,i,o){const{xAlign:n,yAlign:s}=this,{x:r,y:a}=t,{width:l,height:c}=i,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=gr(o.cornerRadius);e.fillStyle=o.backgroundColor,e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.beginPath(),e.moveTo(r+d,a),"top"===s&&this.drawCaret(t,e,i,o),e.lineTo(r+l-h,a),e.quadraticCurveTo(r+l,a,r+l,a+h),"center"===s&&"right"===n&&this.drawCaret(t,e,i,o),e.lineTo(r+l,a+c-u),e.quadraticCurveTo(r+l,a+c,r+l-u,a+c),"bottom"===s&&this.drawCaret(t,e,i,o),e.lineTo(r+p,a+c),e.quadraticCurveTo(r,a+c,r,a+c-p),"center"===s&&"left"===n&&this.drawCaret(t,e,i,o),e.lineTo(r,a+d),e.quadraticCurveTo(r,a,r+d,a),e.closePath(),e.fill(),o.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,o=i&&i.x,n=i&&i.y;if(o||n){const i=ud[t.position].call(this,this._active,this._eventPosition);if(!i)return;const s=this._size=yd(this,t),r=Object.assign({},i,this._size),a=xd(e,t,r),l=vd(t,r,a,e);o._to===l.x&&n._to===l.y||(this.xAlign=a.xAlign,this.yAlign=a.yAlign,this.width=s.width,this.height=s.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const o={width:this.width,height:this.height},n={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const s=mr(e.padding),r=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&r&&(t.save(),t.globalAlpha=i,this.drawBackground(n,t,o,e),la(t,e.textDirection),n.y+=s.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),ca(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,o=t.map((({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}})),n=!On(i,o),s=this._positionChanged(o,e);(n||s)&&(this._active=o,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,n=this._active||[],s=this._getActiveElements(t,n,e,i),r=this._positionChanged(s,t),a=e||!On(s,n)||r;return a&&(this._active=s,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),a}_getActiveElements(t,e,i,o){const n=this.options;if("mouseout"===t.type)return[];if(!o)return e;const s=this.chart.getElementsAtEventForMode(t,n.mode,n,i);return n.reverse&&s.reverse(),s}_positionChanged(t,e){const{caretX:i,caretY:o,options:n}=this,s=ud[n.position].call(this,t,e);return!1!==s&&(i!==s.x||o!==s.y)}}kd.positioners=ud;var Rd={id:"tooltip",_element:kd,positioners:ud,afterInit(t,e,i){i&&(t.tooltip=new kd({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip,i={tooltip:e};!1!==t.notifyPlugins("beforeTooltipDraw",i)&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i))},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:gn,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,o=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(o>0&&e.dataIndex<o)return i[e.dataIndex]}return""},afterTitle:gn,beforeBody:gn,beforeLabel:gn,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return yn(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:gn,afterBody:gn,beforeFooter:gn,footer:gn,afterFooter:gn}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Od=Object.freeze({__proto__:null,Decimation:Hc,Filler:sd,Legend:ld,SubTitle:pd,Title:dd,Tooltip:Rd});class Ed extends Vl{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:o}of e)t[i]===o&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(yn(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:as(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:function(t,e,i,o){const n=t.indexOf(e);return-1===n?((t,e,i,o)=>("string"==typeof e?(i=t.push(e)-1,o.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,o):n!==t.lastIndexOf(e)?i:n}(i,t,_n(e,t),this._addedLabels),i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:o}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,o=[];let n=this.getLabels();n=0===t&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)o.push({value:i});return o}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function $d(t,e,{horizontal:i,minRotation:o}){const n=Qn(o),s=(i?Math.sin(n):Math.cos(n))||.001,r=.75*e*(""+t).length;return Math.min(e/s,r)}Ed.id="category",Ed.defaults={ticks:{callback:Ed.prototype.getLabelForValue}};class Md extends Vl{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return yn(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:o,max:n}=this;const s=t=>o=e?o:t,r=t=>n=i?n:t;if(t){const t=Gn(o),e=Gn(n);t<0&&e<0?r(0):t>0&&e>0&&s(0)}if(o===n){let e=1;(n>=Number.MAX_SAFE_INTEGER||o<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*n)),r(n+e),t||s(o-e)}this.min=o,this.max=n}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:o}=t;return o?(e=Math.ceil(this.max/o)-Math.floor(this.min/o)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${o} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const o=function(t,e){const i=[],{bounds:o,step:n,min:s,max:r,precision:a,count:l,maxTicks:c,maxDigits:d,includeBounds:h}=t,p=n||1,u=c-1,{min:f,max:g}=e,m=!yn(s),y=!yn(r),b=!yn(l),x=(g-f)/(d+1);let v,w,_,S,k=Xn((g-f)/u/p)*p;if(k<1e-14&&!m&&!y)return[{value:f},{value:g}];S=Math.ceil(g/k)-Math.floor(f/k),S>u&&(k=Xn(S*k/u/p)*p),yn(a)||(v=Math.pow(10,a),k=Math.ceil(k*v)/v),"ticks"===o?(w=Math.floor(f/k)*k,_=Math.ceil(g/k)*k):(w=f,_=g),m&&y&&n&&function(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}((r-s)/n,k/1e3)?(S=Math.round(Math.min((r-s)/k,c)),k=(r-s)/S,w=s,_=r):b?(w=m?s:w,_=y?r:_,S=l-1,k=(_-w)/S):(S=(_-w)/k,S=Jn(S,Math.round(S),k/1e3)?Math.round(S):Math.ceil(S));const R=Math.max(es(k),es(w));v=Math.pow(10,yn(a)?R:a),w=Math.round(w*v)/v,_=Math.round(_*v)/v;let O=0;for(m&&(h&&w!==s?(i.push({value:s}),w<s&&O++,Jn(Math.round((w+O*k)*v)/v,s,$d(s,x,t))&&O++):w<s&&O++);O<S;++O)i.push({value:Math.round((w+O*k)*v)/v});return y&&h&&_!==r?i.length&&Jn(i[i.length-1].value,r,$d(r,x,t))?i[i.length-1].value=r:i.push({value:r}):y&&_!==r||i.push({value:_}),i}({maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&Zn(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const o=(i-e)/Math.max(t.length-1,1)/2;e-=o,i+=o}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return ra(t,this.chart.options.locale,this.options.ticks.format)}}class Td extends Md{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=vn(t)?t:0,this.max=vn(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Qn(this.options.ticks.minRotation),o=(t?Math.sin(i):Math.cos(i))||.001,n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/o))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function Pd(t){return 1==t/Math.pow(10,Math.floor(qn(t)))}Td.id="linear",Td.defaults={ticks:{callback:Il.formatters.numeric}};class Ad extends Vl{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Md.prototype.parse.apply(this,[t,e]);if(0!==i)return vn(i)&&i>0?i:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=vn(t)?Math.max(0,t):null,this.max=vn(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,o=this.max;const n=e=>i=t?i:e,s=t=>o=e?o:t,r=(t,e)=>Math.pow(10,Math.floor(qn(t))+e);i===o&&(i<=0?(n(1),s(10)):(n(r(i,-1)),s(r(o,1)))),i<=0&&n(r(o,-1)),o<=0&&s(r(i,1)),this._zero&&this.min!==this._suggestedMin&&i===r(this.min,0)&&n(r(i,-1)),this.min=i,this.max=o}buildTicks(){const t=this.options,e=function(t,e){const i=Math.floor(qn(e.max)),o=Math.ceil(e.max/Math.pow(10,i)),n=[];let s=wn(t.min,Math.pow(10,Math.floor(qn(e.min)))),r=Math.floor(qn(s)),a=Math.floor(s/Math.pow(10,r)),l=r<0?Math.pow(10,Math.abs(r)):1;do{n.push({value:s,major:Pd(s)}),++a,10===a&&(a=1,++r,l=r>=0?1:l),s=Math.round(a*Math.pow(10,r)*l)/l}while(r<i||r===i&&a<o);const c=wn(t.max,s);return n.push({value:c,major:Pd(s)}),n}({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&Zn(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":ra(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=qn(t),this._valueRange=qn(this.max)-qn(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(qn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function Cd(t){const e=t.ticks;if(e.display&&t.display){const t=mr(e.backdropPadding);return _n(e.font&&e.font.size,Xs.font.size)+t.height}return 0}function Dd(t,e,i,o,n){return t===o||t===n?{start:e-i/2,end:e+i/2}:t<o||t>n?{start:e-i,end:e}:{start:e,end:e+i}}function jd(t,e,i,o,n){const s=Math.abs(Math.sin(i)),r=Math.abs(Math.cos(i));let a=0,l=0;o.start<e.l?(a=(e.l-o.start)/s,t.l=Math.min(t.l,e.l-a)):o.end>e.r&&(a=(o.end-e.r)/s,t.r=Math.max(t.r,e.r+a)),n.start<e.t?(l=(e.t-n.start)/r,t.t=Math.min(t.t,e.t-l)):n.end>e.b&&(l=(n.end-e.b)/r,t.b=Math.max(t.b,e.b+l))}function Ld(t){return 0===t||180===t?"center":t<180?"left":"right"}function Id(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function Nd(t,e,i){return 90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e),t}function Bd(t,e,i,o){const{ctx:n}=t;if(i)n.arc(t.xCenter,t.yCenter,e,0,zn);else{let i=t.getPointPosition(0,e);n.moveTo(i.x,i.y);for(let s=1;s<o;s++)i=t.getPointPosition(s,e),n.lineTo(i.x,i.y)}}Ad.id="logarithmic",Ad.defaults={ticks:{callback:Il.formatters.logarithmic,major:{enabled:!0}}};class zd extends Md{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=mr(Cd(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=vn(t)&&!isNaN(t)?t:0,this.max=vn(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Cd(this.options))}generateTickLabels(t){Md.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const i=kn(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?function(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),o=[],n=[],s=t._pointLabels.length,r=t.options.pointLabels,a=r.centerPointLabels?Bn/s:0;for(let h=0;h<s;h++){const s=r.setContext(t.getPointLabelContext(h));n[h]=s.padding;const p=t.getPointPosition(h,t.drawingArea+n[h],a),u=yr(s.font),f=(l=t.ctx,c=u,d=bn(d=t._pointLabels[h])?d:[d],{w:Js(l,c.string,d),h:d.length*c.lineHeight});o[h]=f;const g=ss(t.getIndexAngle(h)+a),m=Math.round(ts(g));jd(i,e,g,Dd(m,p.x,f.w,0,180),Dd(m,p.y,f.h,90,270))}var l,c,d;t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){const o=[],n=t._pointLabels.length,s=t.options,r=Cd(s)/2,a=t.drawingArea,l=s.pointLabels.centerPointLabels?Bn/n:0;for(let s=0;s<n;s++){const n=t.getPointPosition(s,a+r+i[s],l),c=Math.round(ts(ss(n.angle+Un))),d=e[s],h=Nd(n.y,d.h,c),p=Ld(c),u=Id(n.x,d.w,p);o.push({x:n.x,y:h,textAlign:p,left:u,top:h,right:u+d.w,bottom:h+d.h})}return o}(t,o,n)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,o){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,o))}getIndexAngle(t){return ss(t*(zn/(this._pointLabels.length||1))+Qn(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(yn(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(yn(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return function(t,e,i){return xr(t,{label:i,index:e,type:"pointLabel"})}(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const o=this.getIndexAngle(t)-Un+i;return{x:Math.cos(o)*e+this.xCenter,y:Math.sin(o)*e+this.yCenter,angle:o}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:o,bottom:n}=this._pointLabelItems[t];return{left:e,top:i,right:o,bottom:n}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Bd(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:o}=e,n=this._pointLabels.length;let s,r,a;if(e.pointLabels.display&&function(t,e){const{ctx:i,options:{pointLabels:o}}=t;for(let n=e-1;n>=0;n--){const e=o.setContext(t.getPointLabelContext(n)),s=yr(e.font),{x:r,y:a,textAlign:l,left:c,top:d,right:h,bottom:p}=t._pointLabelItems[n],{backdropColor:u}=e;if(!yn(u)){const t=mr(e.backdropPadding);i.fillStyle=u,i.fillRect(c-t.left,d-t.top,h-c+t.width,p-d+t.height)}rr(i,t._pointLabels[n],r,a+s.lineHeight/2,s,{color:e.color,textAlign:l,textBaseline:"middle"})}}(this,n),o.display&&this.ticks.forEach(((t,e)=>{0!==e&&(r=this.getDistanceFromCenterForValue(t.value),function(t,e,i,o){const n=t.ctx,s=e.circular,{color:r,lineWidth:a}=e;!s&&!o||!r||!a||i<0||(n.save(),n.strokeStyle=r,n.lineWidth=a,n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),Bd(t,i,s,o),n.closePath(),n.stroke(),n.restore())}(this,o.setContext(this.getContext(e-1)),r,n))})),i.display){for(t.save(),s=n-1;s>=0;s--){const o=i.setContext(this.getPointLabelContext(s)),{color:n,lineWidth:l}=o;l&&n&&(t.lineWidth=l,t.strokeStyle=n,t.setLineDash(o.borderDash),t.lineDashOffset=o.borderDashOffset,r=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),a=this.getPointPosition(s,r),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(a.x,a.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const o=this.getIndexAngle(0);let n,s;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((o,r)=>{if(0===r&&!e.reverse)return;const a=i.setContext(this.getContext(r)),l=yr(a.font);if(n=this.getDistanceFromCenterForValue(this.ticks[r].value),a.showLabelBackdrop){t.font=l.string,s=t.measureText(o.label).width,t.fillStyle=a.backdropColor;const e=mr(a.backdropPadding);t.fillRect(-s/2-e.left,-n-l.size/2-e.top,s+e.width,l.size+e.height)}rr(t,o.label,0,-n,l,{color:a.color})})),t.restore()}drawTitle(){}}zd.id="radialLinear",zd.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Il.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},zd.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},zd.descriptors={angleLines:{_fallback:"grid"}};const Wd={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Fd=Object.keys(Wd);function Hd(t,e){return t-e}function Ud(t,e){if(yn(e))return null;const i=t._adapter,{parser:o,round:n,isoWeekday:s}=t._parseOpts;let r=e;return"function"==typeof o&&(r=o(r)),vn(r)||(r="string"==typeof o?i.parse(r,o):i.parse(r)),null===r?null:(n&&(r="week"!==n||!Kn(s)&&!0!==s?i.startOf(r,n):i.startOf(r,"isoWeek",s)),+r)}function Vd(t,e,i,o){const n=Fd.length;for(let s=Fd.indexOf(t);s<n-1;++s){const t=Wd[Fd[s]],n=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(n*t.size))<=o)return Fd[s]}return Fd[n-1]}function Yd(t,e,i){if(i){if(i.length){const{lo:o,hi:n}=vr(i,e);t[i[o]>=e?i[o]:i[n]]=!0}}else t[e]=!0}function qd(t,e,i){const o=[],n={},s=e.length;let r,a;for(r=0;r<s;++r)a=e[r],n[a]=r,o.push({value:a,major:!1});return 0!==s&&i?function(t,e,i,o){const n=t._adapter,s=+n.startOf(e[0].value,o),r=e[e.length-1].value;let a,l;for(a=s;a<=r;a=+n.add(a,1,o))l=i[a],l>=0&&(e[l].major=!0);return e}(t,o,n,i):o}class Gd extends Vl{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const i=t.time||(t.time={}),o=this._adapter=new Qa._date(t.adapters.date);Pn(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Ud(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:o,max:n,minDefined:s,maxDefined:r}=this.getUserBounds();function a(t){s||isNaN(t.min)||(o=Math.min(o,t.min)),r||isNaN(t.max)||(n=Math.max(n,t.max))}s&&r||(a(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||a(this.getMinMax(!1))),o=vn(o)&&!isNaN(o)?o:+e.startOf(Date.now(),i),n=vn(n)&&!isNaN(n)?n:+e.endOf(Date.now(),i)+1,this.min=Math.min(o,n-1),this.max=Math.max(o+1,n)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,o="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const n=this.min,s=function(t,e,i){let o=0,n=t.length;for(;o<n&&t[o]<e;)o++;for(;n>o&&t[n-1]>i;)n--;return o>0||n<t.length?t.slice(o,n):t}(o,n,this.max);return this._unit=e.unit||(i.autoSkip?Vd(e.minUnit,this.min,this.max,this._getLabelCapacity(n)):function(t,e,i,o,n){for(let s=Fd.length-1;s>=Fd.indexOf(i);s--){const i=Fd[s];if(Wd[i].common&&t._adapter.diff(n,o,i)>=e-1)return i}return Fd[i?Fd.indexOf(i):0]}(this,s.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=Fd.indexOf(t)+1,i=Fd.length;e<i;++e)if(Wd[Fd[e]].common)return Fd[e]}(this._unit):void 0,this.initOffsets(o),t.reverse&&s.reverse(),qd(this,s,this._majorUnit)}initOffsets(t){let e,i,o=0,n=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),o=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),n=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);const s=t.length<3?.5:.25;o=as(o,0,s),n=as(n,0,s),this._offsets={start:o,end:n,factor:1/(o+1+n)}}_generate(){const t=this._adapter,e=this.min,i=this.max,o=this.options,n=o.time,s=n.unit||Vd(n.minUnit,e,i,this._getLabelCapacity(e)),r=_n(n.stepSize,1),a="week"===s&&n.isoWeekday,l=Kn(a)||!0===a,c={};let d,h,p=e;if(l&&(p=+t.startOf(p,"isoWeek",a)),p=+t.startOf(p,l?"day":s),t.diff(i,e,s)>1e5*r)throw new Error(e+" and "+i+" are too far apart with stepSize of "+r+" "+s);const u="data"===o.ticks.source&&this.getDataTimestamps();for(d=p,h=0;d<i;d=+t.add(d,r,s),h++)Yd(c,d,u);return d!==i&&"ticks"!==o.bounds&&1!==h||Yd(c,d,u),Object.keys(c).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,o){const n=this.options,s=n.time.displayFormats,r=this._unit,a=this._majorUnit,l=r&&s[r],c=a&&s[a],d=i[e],h=a&&c&&d&&d.major,p=this._adapter.format(t,o||(h?c:l)),u=n.ticks.callback;return u?kn(u,[p,e,i],this):p}generateTickLabels(t){let e,i,o;for(e=0,i=t.length;e<i;++e)o=t[e],o.label=this._tickFormatFunction(o.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,o=Qn(this.isHorizontal()?e.maxRotation:e.minRotation),n=Math.cos(o),s=Math.sin(o),r=this._resolveTickFontOptions(0).size;return{w:i*n+r*s,h:i*s+r*n}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,o=i[e.unit]||i.millisecond,n=this._tickFormatFunction(t,0,qd(this,[t],this._majorUnit),o),s=this._getLabelSize(n),r=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return r>0?r:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(t=0,e=o.length;t<e;++t)i=i.concat(o[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const o=this.getLabels();for(e=0,i=o.length;e<i;++e)t.push(Ud(this,o[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Rr(t.sort(Hd))}}function Xd(t,e,i){let o,n,s,r,a=0,l=t.length-1;i?(e>=t[a].pos&&e<=t[l].pos&&({lo:a,hi:l}=wr(t,"pos",e)),({pos:o,time:s}=t[a]),({pos:n,time:r}=t[l])):(e>=t[a].time&&e<=t[l].time&&({lo:a,hi:l}=wr(t,"time",e)),({time:o,pos:s}=t[a]),({time:n,pos:r}=t[l]));const c=n-o;return c?s+(r-s)*(e-o)/c:s}Gd.id="time",Gd.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class Kd extends Gd{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Xd(e,this.min),this._tableRange=Xd(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,o=[],n=[];let s,r,a,l,c;for(s=0,r=t.length;s<r;++s)l=t[s],l>=e&&l<=i&&o.push(l);if(o.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(s=0,r=o.length;s<r;++s)c=o[s+1],a=o[s-1],l=o[s],Math.round((c+a)/2)!==l&&n.push({time:l,pos:s/(r-1)});return n}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Xd(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Xd(this._table,i*this._tableRange+this._minPos,!0)}}Kd.id="timeseries",Kd.defaults=Gd.defaults;const Jd=[Ka,zc,Od,Object.freeze({__proto__:null,CategoryScale:Ed,LinearScale:Td,LogarithmicScale:Ad,RadialLinearScale:zd,TimeScale:Gd,TimeSeriesScale:Kd})];yc.register(...Jd);const Zd=yc;var Qd=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},th=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let eh=class extends Q{updated(t){t.has("options")&&this.options&&this.loadCanvas().then((()=>{console.log("canvas loaded.")}))}render(){return C` <div style="width: 100%; height:100%;">
      <canvas id="bar-chart" width="max-content" height="max-content"></canvas>
    </div>`}loadCanvas(){return function(t,e,i,o){return new(i||(i=Promise))((function(n,s){function r(t){try{l(o.next(t))}catch(t){s(t)}}function a(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const t=yield this.canvas;t&&this.options&&(console.log(this.options),new Zd(t,this.options))}))}};eh.styles=n`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,Qd([lt({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("#bar-chart")},enumerable:!0,configurable:!0})}),th("design:type",Object)],eh.prototype,"canvas",void 0),Qd([at({type:Object,converter:Object}),th("design:type",Object)],eh.prototype,"options",void 0),eh=Qd([et("nidoca-chart-js-wrapper")],eh);let ih=class extends Q{render(){return C`
            <nidoca-form-login class="left"></nidoca-form-login>
            <nidoca-img class="right"
                        src="http://nidoca.eu/img/IMG_0524.jpg"
            ></nidoca-img>
        `}};ih.styles=n`
    :host {
        display:grid;
        grid-template-columns: 1fr 1fr;
        height: 100vh;
        width: 100vw;
    }
    
    .right {
        background-color: var(--app-color-primary-background);
    }
    
    .left {
        margin: auto;
        width:min-content;
        height:min-content;
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
            z-index: -1
        }
    }
`,ih=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}([et("nidoca-page-login")],ih);var oh,nh=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},sh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.anchor="anchor",t.page="page"}(oh||(oh={}));let rh=class extends Q{constructor(){super(...arguments),this.loggedIn=!1}updated(t){if(super.updated(t),t.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),t.has("route")&&this.root){for(let t=0;t<this.root.childs.length;t++){let e=this.root.childs[t];if(e.route==this.route){this.contentComponent=document.createElement(e.rootComponent);break}}this.requestUpdate()}}render(){var t;return this.loggedIn?C`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?C`${this.contentComponent}`:C``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(t=this.root)||void 0===t?void 0:t.childs.map((t=>C`
                        <nidoca-menu-item text="${t.name}"
                                          @click="${()=>{this.routeTo(t)}}"></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:C`
            <nidoca-page-login @nidoca-form-login-submit="${t=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:t.detail,bubbles:!0,composed:!0}))}}"></nidoca-page-login>`}routeTo(t){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:t.route,bubbles:!0,composed:!0}))}};nh([at({type:Array}),sh("design:type",Object)],rh.prototype,"root",void 0),nh([at({type:Boolean}),sh("design:type",Boolean)],rh.prototype,"loggedIn",void 0),nh([at({type:String,converter:String}),sh("design:type",Object)],rh.prototype,"route",void 0),rh=nh([et("nidoca-app")],rh),St.getUniqueInstance().initDefaultComponents();var ah=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},lh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ch=class extends _t{constructor(){super(...arguments),this.theme=kt.SURFACE,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return C`
            <style>
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
                ${this.trailingIcon?C`
                            <nidoca-icon
                                    style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                                    icon="${this.trailingIcon}"
                            ></nidoca-icon>`:C``}
                <div class="container">
                    <nidoca-text-caption
                            class="label"
                            text="${this.label}"
                    ></nidoca-text-caption>
                    <select
                            id="selectElement"
                            name="${this.name}"
                            size="${this.size}"
                            ?required="${this.required}"
                            ?multiple="${this.multiple}"
                    >
                        ${wt([this.value,this.options],(()=>C`
                                    ${xt(this.options,(t=>null==t?C`
                                                        <option></option>`:this.isSelectedOption(t)?C`
                                                                <option value="${t.key}" selected>${t.value}
                                                                </option> `:C`
                                                                <option value="${t.key}">${t.value}</option> `))}
                                `))}
                    </select>
                </div>
            </div>
            ${this.infoText||this.warningText||this.errorText?C`
                        <div style="display:flex;flex-direction:column;">
                            ${this.infoText?C`
                                        <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:C``}
                            ${this.warningText?C`
                                        <nidoca-text-warning
                                                style="color:var(--app-color-warning-background)"
                                                text="${this.warningText}"
                                        ></nidoca-text-warning>`:C``}
                            ${this.errorText?C`
                                        <nidoca-text-error
                                                style="color:var(--app-color-error-background)"
                                                text="${this.errorText}"
                                        ></nidoca-text-error>`:C``}
                        </div>
                    `:C``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,i=this.selectElement.options.length;e<i;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const i of this.value)if(e=t.key===i,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const i=[];return e&&i.push({key:"",value:""}),Object.keys(t).forEach((e=>{i.push({key:e,value:t[e]})})),i}static stringArrayToOptions(t,e=!0){const i=[];return e&&i.push({key:"",value:""}),t.forEach((t=>{i.push({key:t,value:t})})),i}static toComboboxOptions(t=null,e=null){if(null==t)return[];const i=[];return Object.values(t).forEach((o=>{let n=String(Object.keys(t)[Object.values(t).indexOf(o)]);e&&(n=n.concat(e)),i.push({key:o,value:n})})),i}};ch.styles=n`
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
      box-sizing:border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }
    
    option {
        padding:0;
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
  `,ah([at({type:kt,converter:String}),lh("design:type",String)],ch.prototype,"theme",void 0),ah([at({type:String}),lh("design:type",String)],ch.prototype,"trailingIcon",void 0),ah([at({type:String}),lh("design:type",String)],ch.prototype,"label",void 0),ah([at({type:String}),lh("design:type",String)],ch.prototype,"errorText",void 0),ah([at({type:String}),lh("design:type",String)],ch.prototype,"infoText",void 0),ah([at({type:String}),lh("design:type",String)],ch.prototype,"warningText",void 0),ah([at(),lh("design:type",Object)],ch.prototype,"value",void 0),ah([at({type:Array}),lh("design:type",Array)],ch.prototype,"options",void 0),ah([at({type:String}),lh("design:type",String)],ch.prototype,"name",void 0),ah([at({type:Boolean}),lh("design:type",Boolean)],ch.prototype,"required",void 0),ah([at({type:Boolean}),lh("design:type",Boolean)],ch.prototype,"multiple",void 0),ah([at({type:Number}),lh("design:type",Number)],ch.prototype,"size",void 0),ah([ct("#selectElement"),lh("design:type",Object)],ch.prototype,"selectElement",void 0),ch=ah([et("nidoca-form-combobox")],ch);class dh{constructor(t){this.propertyWrapper=t}getInputElement(t){if(null==t)return C``;const e=t.classWrapper;if(null==e)return C``;switch(this.propertyWrapper.getRenderType()){case ot.STRING:return C`
                    <nidoca-form-text .textType="${ne.TEXT}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${e.instance[this.propertyWrapper.propertyName]}"
                                      @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    /></nidoca-form-text>`;case ot.NUMBER:return C`
                    <nidoca-form-text
                            label="${this.propertyWrapper.propertyName}"
                            .textType="${ne.NUMBER}"
                            value="${e.instance[this.propertyWrapper.propertyName]}"
                            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    ></nidoca-form-text>`;case ot.BOOLEAN:return C`
                    <nidoca-form-switch
                            label="${this.propertyWrapper.propertyName}"
                            type="checkbox"
                            .checked="${e.instance[this.propertyWrapper.propertyName]}"
                            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    ></nidoca-form-switch>`;case ot.COMBOBOX:return C`
                    <nidoca-form-combobox
                            label="${this.propertyWrapper.propertyName}"
                            .options="${ch.enumToOptions(this.propertyWrapper.getType(),!1)}"
                            value="${Object.keys(this.propertyWrapper.getType()).filter((t=>this.propertyWrapper.getType()[t]==e.instance[this.propertyWrapper.propertyName]))[0]}"
                            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(i.target.getOutputData().value),t.parent.requestUpdate()}}"
                    >
                    </nidoca-form-combobox>`;case ot.ARRAY:return C`
                    <nidoca-form-combobox
                            label="${this.propertyWrapper.propertyName}"
                            .options="${ch.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
                            .multiple="${!0}"
                            size="5"
                            .value="${e.instance[this.propertyWrapper.propertyName]}"
                            @input="${t=>{e.instance[this.propertyWrapper.propertyName]=t.target.getOutputData().value,e.instance.requestUpdate()}}"
                    >
                    </nidoca-form-combobox>
                `;default:return C``}}getAsHtml(t){switch(this.propertyWrapper.getConverterTypeName()){case ot.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case ot.ARRAY:return"";case ot.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case ot.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case ot.STRING:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case ot.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsAngular(t){switch(this.propertyWrapper.getRenderType()){case ot.COMBOBOX:return`[${this.propertyWrapper.propertyName}]="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case ot.STRING:return`[${this.propertyWrapper.propertyName}]="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case ot.ARRAY:return`[${this.propertyWrapper.propertyName}]="\${[]}"\n`;default:return`[${this.propertyWrapper.propertyName}]="\${}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getConverterTypeName()){case ot.COMBOBOX:case ot.ARRAY:return"";case ot.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getConverterTypeName()){case ot.COMBOBOX:case ot.ARRAY:return"";case ot.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class hh{constructor(t,e){this.parent=t,this.classWrapper=e}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsAngular(this))).join("  ")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(t){return t.indexOf(">")>-1&&(t=t.substr(t.indexOf(">")+1,t.length)),t}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(C`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new dh(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}var ph=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r},uh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fh=class extends Q{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(t){t.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new hh(this,new st(this.element)),this.requestUpdate())}render(){var t,e,i,o,n,s,r,a;return C`
            <nidoca-section .theme="${kt.PRIMARY}">
                <div>
                    <nidoca-text-h2 class="paddingTopBottom">Tag</nidoca-text-h2>
                    <nidoca-code
                    >${this.webcomponentGuiWrapper?this.webcomponentGuiWrapper.classWrapper.getHTMLTag():""}
                    </nidoca-code>

                    <div style="padding-top:var(--space-3);">
                        <nidoca-section> ${this.element}</nidoca-section>
                    </div>
                </div>

                <div style="padding-left:var(--space-3)">
                    ${(null===(t=this.webcomponentGuiWrapper)||void 0===t?void 0:t.hasProperties())?C`
                                <nidoca-text-h2 class="paddingTopBottom">Attribute</nidoca-text-h2>
                                ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((t=>C`${t.getInputElement(this.webcomponentGuiWrapper)}
                                    <div class="paddingTopBottom"></div>`))}
                            `:C``}
                    ${(null===(e=this.webcomponentGuiWrapper)||void 0===e?void 0:e.classWrapper.hasSlots())?C`
                                <nidoca-text-h2 class="paddingTopBottom">Slots</nidoca-text-h2>

                                <nidoca-table theme="surface"
                                              .headers="${["name"]}"
                                              .rows="${this.toSlotRows(this.webcomponentGuiWrapper.classWrapper.getSlotNames())}"
                                >
                                </nidoca-table>`:C``}
                    ${this.customEventNames.length>0?C`
                                <nidoca-text-h2 class="paddingTopBottom">Custom Events</nidoca-text-h2>
                                <nidoca-table class="paddingTopBottom" .headers="${["name"]}"
                                              .rows="${this.toCustomEventRows(this.customEventNames)}">
                                </nidoca-table>`:C``}
                </div>
            </nidoca-section>

            <nidoca-hr></nidoca-hr>

            <nidoca-text-h2 class="paddingTopBottom">Quelltext</nidoca-text-h2>
            <nidoca-tabs tabIndex="0">
                <nidoca-tab slot="tab">Angular</nidoca-tab>
                <nidoca-tab slot="tab">Javascript</nidoca-tab>
                <nidoca-tab slot="tab">Typescript</nidoca-tab>
                <nidoca-tab slot="tab">Lit</nidoca-tab>
                <nidoca-tab slot="tab">Html</nidoca-tab>


                <nidoca-tab-content slot="tabContent">
                    <nidoca-code class="paddingTopBottom">${null===(i=this.webcomponentGuiWrapper)||void 0===i?void 0:i.getAsAngular()}</nidoca-code>
                </nidoca-tab-content>

                <nidoca-tab-content slot="tabContent">
                    <nidoca-code class="paddingTopBottom">${null===(o=this.webcomponentGuiWrapper)||void 0===o?void 0:o.getAsJavascript()}
                    </nidoca-code>
                </nidoca-tab-content>

                <nidoca-tab-content slot="tabContent">
                    <nidoca-code class="paddingTopBottom">${null===(n=this.webcomponentGuiWrapper)||void 0===n?void 0:n.getTypescript()}</nidoca-code>
                </nidoca-tab-content>

                <nidoca-tab-content slot="tabContent">
                    <nidoca-code class="paddingTopBottom">${null===(s=this.webcomponentGuiWrapper)||void 0===s?void 0:s.getAsLit()}</nidoca-code>
                </nidoca-tab-content>

                <nidoca-tab-content slot="tabContent">
                    <nidoca-code class="paddingTopBottom">${null===(r=this.webcomponentGuiWrapper)||void 0===r?void 0:r.getAsHtml()}</nidoca-code>
                </nidoca-tab-content>
            </nidoca-tabs>

            <nidoca-hr></nidoca-hr>

            <nidoca-text-h2 class="paddingTopBottom">Attribute Übersicht</nidoca-text-h2>
            <nidoca-table class="paddingTopBottom"
                          theme="surface"
                          .headers="${["name","type","converter type","render type"]}"
                          .rows="${this.toAttributeRows(null===(a=this.webcomponentGuiWrapper)||void 0===a?void 0:a.getPropertyGuiWrappers())}"
            >
            </nidoca-table>
            <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements()[0];i instanceof HTMLElement&&(this.element=i)}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t.propertyWrapper.propertyName),i.push(t.propertyWrapper.getTypeName()),i.push(t.propertyWrapper.getConverterTypeName()),i.push(t.propertyWrapper.getRenderType()),e.push(i),i})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}};fh.styles=n`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
    
    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
    
  `,ph([at({type:Array}),uh("design:type",Array)],fh.prototype,"customEventNames",void 0),ph([at({type:Object}),uh("design:type",Object)],fh.prototype,"element",void 0),fh=ph([et("webcomponent-viewer")],fh);var gh=function(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r};let mh=class extends Q{constructor(){super(...arguments),this.componentMap=new Map,this.options=[]}render(){return C`
            <nidoca-form-combobox
                    name="components"
                    label="Komponenten"
                    value="${this.elementName}"
                    .options="${this.options}"
                    @input="${t=>{this.elementName=t.target.getOutputData().value}}"
            ></nidoca-form-combobox>

            <nidoca-hr></nidoca-hr>

            <webcomponent-viewer>
                ${this.componentMap.get(this.elementName?this.elementName:"")}
            </webcomponent-viewer>
            <slot @slotchange="${t=>this.slotChanged(t)}"></slot>


        `}slotChanged(t){const e=t.target.assignedElements(),i=e.length;for(let t=0;t<i;t++){const i=e[t];i instanceof HTMLElement&&(null==this.elementName&&(this.elementName=i.tagName),this.componentMap.set(i.tagName,i.cloneNode(!0)))}this.options=ch.stringArrayToOptions(Array.from(this.componentMap.keys())),this.requestUpdate()}};mh.styles=n`
        slot {
            display:none;
        }
    `,gh([at({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],mh.prototype,"elementName",void 0),mh=gh([et("webcomponent-viewer-container")],mh)})();