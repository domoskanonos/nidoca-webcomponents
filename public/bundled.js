/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{jQ:()=>Ot,E1:()=>bt,_Y:()=>gt,Qb:()=>ut,A5:()=>mt,gP:()=>yt,O2:()=>Je,nR:()=>pe,$N:()=>e});class e{constructor(t,e,o){this.key=t,this.minWidth=e,this.maxWidth=o}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(this.minWidth).concat(")"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(this.maxWidth).concat(")")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}e.MOBILE=new e("MOBILE","0px","640px"),e.TABLET=new e("TABLET","641px","1007px"),e.DESKTOP=new e("DESKTOP","1008px",null);const o="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,o=null)=>{for(;e!==o;){const o=e.nextSibling;t.removeChild(e),e=o}},i=`{{lit-${String(Math.random()).slice(2)}}}`,r=`\x3c!--${i}--\x3e`,a=new RegExp(`${i}|${r}`),s="$lit$";class c{constructor(t,e){this.parts=[],this.element=e;const o=[],n=[],r=document.createTreeWalker(e.content,133,null,!1);let c=0,d=-1,f=0;const{strings:u,values:{length:y}}=t;for(;f<y;){const t=r.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:o}=e;let n=0;for(let t=0;t<o;t++)l(e[t].name,s)&&n++;for(;n-- >0;){const e=u[f],o=h.exec(e)[2],n=o.toLowerCase()+s,i=t.getAttribute(n);t.removeAttribute(n);const r=i.split(a);this.parts.push({type:"attribute",index:d,name:o,strings:r}),f+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),r.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const n=t.parentNode,i=e.split(a),r=i.length-1;for(let e=0;e<r;e++){let o,r=i[e];if(""===r)o=p();else{const t=h.exec(r);null!==t&&l(t[2],s)&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-s.length)+t[3]),o=document.createTextNode(r)}n.insertBefore(o,t),this.parts.push({type:"node",index:++d})}""===i[r]?(n.insertBefore(p(),t),o.push(t)):t.data=i[r],f+=r}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&d!==c||(d++,e.insertBefore(p(),t)),c=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(o.push(t),d--),f++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),f++}}else r.currentNode=n.pop()}for(const t of o)t.parentNode.removeChild(t)}}const l=(t,e)=>{const o=t.length-e.length;return o>=0&&t.slice(o)===e},d=t=>-1!==t.index,p=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function f(t,e){const{element:{content:o},parts:n}=t,i=document.createTreeWalker(o,133,null,!1);let r=y(n),a=n[r],s=-1,c=0;const l=[];let d=null;for(;i.nextNode();){s++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==a&&a.index===s;)a.index=null!==d?-1:a.index-c,r=y(n,r),a=n[r]}l.forEach((t=>t.parentNode.removeChild(t)))}const u=t=>{let e=11===t.nodeType?0:1;const o=document.createTreeWalker(t,133,null,!1);for(;o.nextNode();)e++;return e},y=(t,e=-1)=>{for(let o=e+1;o<t.length;o++){const e=t[o];if(d(e))return o}return-1},m=new WeakMap,g=t=>(...e)=>{const o=t(...e);return m.set(o,!0),o},b=t=>"function"==typeof t&&m.has(t),v={},x={};class S{constructor(t,e,o){this.__parts=[],this.template=t,this.processor=e,this.options=o}update(t){let e=0;for(const o of this.__parts)void 0!==o&&o.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let r,a=0,s=0,c=i.nextNode();for(;a<n.length;)if(r=n[a],d(r)){for(;s<r.index;)s++,"TEMPLATE"===c.nodeName&&(e.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=e.pop(),c=i.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));a++}else this.__parts.push(void 0),a++;return o&&(document.adoptNode(t),customElements.upgrade(t)),t}}const E=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),R=` ${i} `;class T{constructor(t,e,o,n){this.strings=t,this.values=e,this.type=o,this.processor=n}getHTML(){const t=this.strings.length-1;let e="",o=!1;for(let n=0;n<t;n++){const t=this.strings[n],a=t.lastIndexOf("\x3c!--");o=(a>-1||o)&&-1===t.indexOf("--\x3e",a+1);const c=h.exec(t);e+=null===c?t+(o?R:r):t.substr(0,c.index)+c[1]+c[2]+s+c[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==E&&(e=E.createHTML(e)),t.innerHTML=e,t}}const O=t=>null===t||!("object"==typeof t||"function"==typeof t),w=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,e,o){this.dirty=!0,this.element=t,this.name=e,this.strings=o,this.parts=[];for(let t=0;t<o.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _(this)}_getValue(){const t=this.strings,e=t.length-1,o=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=o[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!w(t))return t}let n="";for(let i=0;i<e;i++){n+=t[i];const e=o[i];if(void 0!==e){const t=e.value;if(O(t)||!w(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||O(t)&&t===this.value||(this.value=t,b(t)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class I{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(p()),this.endNode=t.appendChild(p())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=p()),t.__insert(this.endNode=p())}insertAfterPart(t){t.__insert(this.startNode=p()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}const t=this.__pendingValue;t!==v&&(O(t)?t!==this.value&&this.__commitText(t):t instanceof T?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):w(t)?this.__commitIterable(t):t===x?(this.value=x,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,o="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=o:this.__commitNode(document.createTextNode(o)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof S&&this.value.template===e)this.value.update(t.values);else{const o=new S(e,t.processor,this.options),n=o._clone();o.update(t.values),this.__commitNode(n),this.value=o}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let o,n=0;for(const i of t)o=e[n],void 0===o&&(o=new I(this.options),e.push(o),0===n?o.appendIntoPart(this):o.insertAfterPart(e[n-1])),o.setValue(i),o.commit(),n++;n<e.length&&(e.length=n,this.clear(o&&o.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class C{constructor(t,e,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=o}setValue(t){this.__pendingValue=t}commit(){for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=v}}class N extends k{constructor(t,e,o){super(t,e,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends _{}let L=!1;(()=>{try{const t={get capture(){return L=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class P{constructor(t,e,o){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=o,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=v,t(this)}if(this.__pendingValue===v)return;const t=this.__pendingValue,e=this.value,o=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=$(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=v}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const $=t=>t&&(L?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function D(t){let e=j.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,e));let o=e.stringsArray.get(t.strings);if(void 0!==o)return o;const n=t.strings.join(i);return o=e.keyString.get(n),void 0===o&&(o=new c(t,t.getTemplateElement()),e.keyString.set(n,o)),e.stringsArray.set(t.strings,o),o}const j=new Map,M=new WeakMap,B=new class{handleAttributeExpressions(t,e,o,n){const i=e[0];return"."===i?new N(t,e.slice(1),o).parts:"@"===i?[new P(t,e.slice(1),n.eventContext)]:"?"===i?[new C(t,e.slice(1),o)]:new k(t,e,o).parts}handleTextExpression(t){return new I(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const z=(t,...e)=>new T(t,e,"html",B),U=(t,e)=>`${t}--${e}`;let H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);const F=t=>e=>{const o=U(e.type,t);let n=j.get(o);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},j.set(o,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const a=e.strings.join(i);if(r=n.keyString.get(a),void 0===r){const o=e.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(o,t),r=new c(e,o),n.keyString.set(a,r)}return n.stringsArray.set(e.strings,r),r},W=["html","svg"],V=new Set;window.JSCompiler_renameProperty=(t,e)=>t;const Y={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},G=(t,e)=>e!==t&&(e==e||t==t),X={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:G};class q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,o)=>{const n=this._attributeNameForProperty(o,e);void 0!==n&&(this._attributeToPropertyMap.set(n,o),t.push(n))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=X){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const o="symbol"==typeof t?Symbol():`__${t}`,n=this.getPropertyDescriptor(t,o,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(n){const i=this[t];this[e]=n,this.requestUpdateInternal(t,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||X}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const o of e)this.createProperty(o,t[o])}}static _attributeNameForProperty(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,o=G){return o(t,e)}static _propertyValueFromAttribute(t,e){const o=e.type,n=e.converter||Y,i="function"==typeof n?n:n.fromAttribute;return i?i(t,o):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const o=e.type,n=e.converter;return(n&&n.toAttribute||Y.toAttribute)(t,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,o){e!==o&&this._attributeToProperty(t,o)}_propertyToAttribute(t,e,o=X){const n=this.constructor,i=n._attributeNameForProperty(t,o);if(void 0!==i){const t=n._propertyValueToAttribute(e,o);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const o=this.constructor,n=o._attributeToPropertyMap.get(t);if(void 0!==n){const t=o.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=o._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,o){let n=!0;if(void 0!==t){const i=this.constructor;o=o||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}q.finalized=!0;const J=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:n}=e;return{kind:o,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),K=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function Z(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):K(t,e)}function Q(t,e){return(o,n)=>{const i={get(){return this.renderRoot.querySelector(t)},enumerable:!0,configurable:!0};if(e){const e=void 0!==n?n:o.key,r="symbol"==typeof e?Symbol():`__${e}`;i.get=function(){return void 0===this[r]&&(this[r]=this.renderRoot.querySelector(t)),this[r]}}return void 0!==n?tt(i,o,n):et(i,o)}}const tt=(t,e,o)=>{Object.defineProperty(e,o,t)},et=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),ot=Element.prototype;ot.msMatchesSelector||ot.webkitMatchesSelector;const nt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol();class rt{constructor(t,e){if(e!==it)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(nt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const at=(t,...e)=>{const o=e.reduce(((e,o,n)=>e+(t=>{if(t instanceof rt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+t[n+1]),t[0]);return new rt(o,it)};(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const st={};class ct extends q{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,o)=>t.reduceRight(((t,o)=>Array.isArray(o)?e(o,t):(t.add(o),t)),o),o=e(t,new Set),n=[];o.forEach((t=>n.unshift(t))),this._styles=n}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!nt){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new rt(String(e),it)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?nt?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==st&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return st}}ct.finalized=!0,ct.render=(t,e,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const i=o.scopeName,r=M.has(e),a=H&&11===e.nodeType&&!!e.host,s=a&&!V.has(i),c=s?document.createDocumentFragment():e;if(((t,e,o)=>{let i=M.get(e);void 0===i&&(n(e,e.firstChild),M.set(e,i=new I(Object.assign({templateFactory:D},o))),i.appendInto(e)),i.setValue(t),i.commit()})(t,c,Object.assign({templateFactory:F(i)},o)),s){const t=M.get(c);M.delete(c);((t,e,o)=>{V.add(t);const n=o?o.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:r}=i;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(n,t);const a=document.createElement("style");for(let t=0;t<r;t++){const e=i[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{W.forEach((e=>{const o=j.get(U(e,t));void 0!==o&&o.keyString.forEach((t=>{const{element:{content:e}}=t,o=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{o.add(t)})),f(t,o)}))}))})(t);const s=n.content;o?function(t,e,o=null){const{element:{content:n},parts:i}=t;if(null==o)return void n.appendChild(e);const r=document.createTreeWalker(n,133,null,!1);let a=y(i),s=0,c=-1;for(;r.nextNode();)for(c++,r.currentNode===o&&(s=u(e),o.parentNode.insertBefore(e,o));-1!==a&&i[a].index===c;){if(s>0){for(;-1!==a;)i[a].index+=s,a=y(i,a);return}a=y(i,a)}}(o,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(n,t);const c=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(o){s.insertBefore(a,s.firstChild);const t=new Set;t.add(a),f(o,t)}})(i,c,t.value instanceof S?t.value.template:void 0),n(e,e.firstChild),e.appendChild(c),M.set(e,t)}!r&&a&&window.ShadyCSS.styleElement(e.host)},ct.shadowRootOptions={mode:"open"};var lt,dt,pt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.ALL="ALL",t.VERTICAL="VERTICAL",t.HORIZONTAL="HORIZONTAL",t.LEFT="LEFT",t.RIGHT="RIGHT",t.TOP="TOP",t.BOTTOM="BOTTOM"}(lt||(lt={})),function(t){t.ZERO="--space-zero",t.LITTLE="--space-little",t.SMALL="--space-small",t.MEDIUM="--space-medium",t.NORMAL="--space-normal",t.BIG="--space-big",t.MAX="--space-max"}(dt||(dt={}));let ft=class extends ct{constructor(){super(...arguments),this.devices=[e.DESKTOP,e.TABLET,e.MOBILE],this.spacerTypes=[lt.ALL],this.spacerSize=dt.NORMAL,this.cssStyle=""}render(){return z`
      <style>
        ${this.toStyle(this.devices,this.spacerTypes,this.spacerSize)}
      </style>
      <span class="SPACER" style="${this.cssStyle}">
        <slot class="slotStyle"></slot>
      </span>
    `}toStyle(t,e,o){const n="var(".concat(o).concat(")");let i="";e.forEach((t=>{switch(t){case lt.LEFT:i=i.concat("padding-left:".concat(n).concat(";"));break;case lt.RIGHT:i=i.concat("padding-right:".concat(n).concat(";"));break;case lt.TOP:i=i.concat("padding-top:".concat(n).concat(";"));break;case lt.BOTTOM:i=i.concat("padding-bottom:".concat(n).concat(";"));break;case lt.ALL:i=i.concat("padding-left:".concat(n).concat(";")),i=i.concat("padding-right:".concat(n).concat(";")),i=i.concat("padding-top:".concat(n).concat(";")),i=i.concat("padding-bottom:".concat(n).concat(";"));break;case lt.HORIZONTAL:i=i.concat("padding-left:".concat(n).concat(";")),i=i.concat("padding-right:".concat(n).concat(";"));break;case lt.VERTICAL:i=i.concat("padding-top:".concat(n).concat(";")),i=i.concat("padding-bottom:".concat(n).concat(";"))}})),i=".SPACER {".concat(i).concat().concat("}");let r="";return t.forEach((t=>{r=r.concat(t.asMediaStyle(i))})),r}};ft.styles=at`
    .SPACER,
    ::slotted(.SPACER) {
      box-sizing: border-box;
      display: block;
    }

    .slotStyle {
      display:flex;
      flex-direction: column;
    }

  `,pt([Z({type:Array}),ht("design:type",Array)],ft.prototype,"devices",void 0),pt([Z({type:Array}),ht("design:type",Array)],ft.prototype,"spacerTypes",void 0),pt([Z({type:String}),ht("design:type",String)],ft.prototype,"spacerSize",void 0),pt([Z({type:String}),ht("design:type",String)],ft.prototype,"cssStyle",void 0),ft=pt([J("nidoca-spacer")],ft);var ut,yt,mt,gt,bt,vt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},xt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.ROW="row",t.ROW_REVERSE="rowData-reverse",t.COLUMN="column",t.COLUMN_REVERSE="column-reverse"}(ut||(ut={})),function(t){t.WRAP="wrap",t.NO_WRAP="nowrap",t.WRAP_REVERSE="flexWrap-reverse"}(yt||(yt={})),function(t){t.FLEX_START="flex-start",t.FLEX_END="flex-end",t.CENTER="center",t.SPACE_BETWEEN="space-between",t.SPACE_AROUND="space-around",t.SPACE_EVENLY="space-evenly"}(mt||(mt={})),function(t){t.FLEX_START="flex-start",t.FLEX_END="flex-end",t.CENTER="center",t.STRETCH="stretch",t.START="start",t.END="end",t.BASELINE="baseline",t.FIRST_BASELINE="first baseline",t.LAST_BASLINE="last baseline",t.SAFE="safe",t.UNSAFE="unsafe"}(gt||(gt={})),function(t){t.FLEX_START="flex-start",t.FLEX_END="flex-end",t.CENTER="center",t.STRETCH="stretch",t.SPACE_AROUND="space-around",t.SPACE_EVENLY="space-evenly",t.SPACE_BETWEEN="space-between",t.START="start",t.END="end",t.BASELINE="baseline",t.FIRST_BASELINE="first baseline",t.LAST_BASLINE="last baseline",t.SAFE="safe",t.UNSAFE="unsafe"}(bt||(bt={}));let St=class extends ct{constructor(){super(...arguments),this.devices=[e.DESKTOP,e.TABLET,e.MOBILE],this.flexDirection=ut.ROW,this.flexWrap=yt.WRAP,this.flexJustifyContent=mt.FLEX_START,this.flexAlignItems=gt.FLEX_START,this.flexAlignContent=bt.FLEX_START,this.containerStyle="",this.itemStyle=""}render(){return z`
      <style>
        ${this.toDeviceStyle("flexContainerDevice",this.devices,this.containerStyle)}
        ${this.toDeviceStyle("flexItemDevice",this.devices,this.itemStyle)}
      </style>
      <slot
        class="flexContainer flexContainerDevice"
        style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.flexJustifyContent}; align-items: ${this.flexAlignItems}; align-content: ${this.flexAlignContent};"
        id="slotElement"
        @slotchange="${t=>this.slotChanged(t)}"
      ></slot>
    `}slotChanged(t){const e=t.target;e.classList,this.changeSlotComponentsStyle(e)}changeSlotComponentsStyle(t){if(null==t)return;const e=t.assignedElements();for(let t=0;t<e.length;t++){const o=e[t].classList;o.contains("flexItem")||o.add("flexItem"),o.contains("flexItemDevice")||o.add("flexItemDevice")}}toDeviceStyle(t,e,o){o=".".concat(t).concat(", ::slotted(.").concat(t).concat(") {").concat(o).concat().concat("}");let n="";return e.forEach((t=>{n=n.concat(t.asMediaStyle(o))})),n}};St.styles=at`
    :host,
    *,
    ::slotted(*) {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
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
  `,vt([Z({type:e}),xt("design:type",Array)],St.prototype,"devices",void 0),vt([Z({type:ut}),xt("design:type",String)],St.prototype,"flexDirection",void 0),vt([Z({type:yt}),xt("design:type",String)],St.prototype,"flexWrap",void 0),vt([Z({type:mt}),xt("design:type",String)],St.prototype,"flexJustifyContent",void 0),vt([Z({type:gt}),xt("design:type",String)],St.prototype,"flexAlignItems",void 0),vt([Z({type:bt}),xt("design:type",String)],St.prototype,"flexAlignContent",void 0),vt([Z({type:String}),xt("design:type",String)],St.prototype,"containerStyle",void 0),vt([Z({type:String}),xt("design:type",String)],St.prototype,"itemStyle",void 0),vt([Q("#slotElement"),xt("design:type",Object)],St.prototype,"slotElement",void 0),St=vt([J("nidoca-flex-container")],St);var Et=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Rt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Tt=class extends ct{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return z`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,n,i,r){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(i).concat(";").concat("bottom:").concat(r).concat(";")}};Tt.styles=at`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Et([Z({type:String}),Rt("design:type",String)],Tt.prototype,"height",void 0),Et([Z({type:String}),Rt("design:type",String)],Tt.prototype,"width",void 0),Et([Z({type:String}),Rt("design:type",String)],Tt.prototype,"left",void 0),Et([Z({type:String}),Rt("design:type",String)],Tt.prototype,"top",void 0),Et([Z({type:String}),Rt("design:type",String)],Tt.prototype,"right",void 0),Et([Z({type:String}),Rt("design:type",String)],Tt.prototype,"bottom",void 0),Tt=Et([J("nidoca-floating-container")],Tt);var Ot,wt,kt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},_t=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.NONE="NONE",t.ALL="ALL",t.ALL_ROUND="ALL_ROUND",t.HORIZONTAL="HORIZONTAL",t.VERTICAL="VERTICAL",t.LEFT="LEFT",t.RIGHT="RIGHT",t.TOP="TOP",t.BOTTOM="BOTTOM",t.BOTTOM_SELECTED="BOTTOM_SELECTED",t.FULL_WIDTH="FULL_WIDTH",t.FULL_HEIGHT="FULL_HEIGHT"}(Ot||(Ot={})),function(t){t.THIN="THIN",t.MEDIUM="MEDIUM",t.THICK="THICK"}(wt||(wt={}));let It=class extends ct{constructor(){super(...arguments),this.borderProperties=[Ot.ALL],this.borderSize=wt.THIN}render(){return z`
      <slot
        class="${this.toBorderPropertiesString(this.borderProperties)} ${this.borderSize}"
      ></slot>
    `}toBorderPropertiesString(t){let e="BORDER";return t.forEach((t=>{e=e.concat(" ").concat(t)})),e}};It.styles=at`
    :host,
    * {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
    }
    .BORDER {
      border-color: var(--app-color-surface-background);
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
      border-color: var(--mdc-theme-primary);
    }

  `,kt([Z({type:Ot}),_t("design:type",Array)],It.prototype,"borderProperties",void 0),kt([Z({type:wt}),_t("design:type",String)],It.prototype,"borderSize",void 0),It=kt([J("nidoca-border")],It);var Ct,Nt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};!function(t){t.HIDE="HIDE",t.INVISIBLE="INVISIBLE",t.NORMAL="NORMAL"}(Ct||(Ct={}));let At=class extends ct{constructor(){super(...arguments),this.visibleType=Ct.NORMAL}render(){return z` <slot class="${this.visibleType}"></slot> `}};At.styles=at`
    .HIDE,
    ::slotted(.HIDE) {
      display: none !important;
      visibility: hidden !important;
    }

    .INVISIBLE,
    ::slotted(.INVISIBLE) {
      visibility: hidden !important;
    }
  `,Nt([Z({type:Ct}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],At.prototype,"visibleType",void 0),At=Nt([J("nidoca-visible")],At);var Lt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $t=class extends ct{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return z`
      <div class="ACCORDION_ITEM">
        <nidoca-border
          .borderProperties="${[Ot.BOTTOM,Ot.LEFT,Ot.RIGHT,Ot.FULL_WIDTH]}"
        >
          <nidoca-flex-container
            class="ACCORDION_HEADER"
            @click="${()=>this.toggle()}"
            .flexDirection="${ut.ROW}"
            .flexWrap="${yt.WRAP}"
            .flexJustifyContent="${mt.SPACE_BETWEEN}"
            .flexAlignItems="${gt.CENTER}"
            .flexAlignContent="${bt.CENTER}"
          >
            <nidoca-spacer spacerSize="${dt.MEDIUM}" .spacerTypes="${[lt.LEFT]}">
              <nidoca-typography text="${this.header}"></nidoca-typography>
            </nidoca-spacer>
            <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
          </nidoca-flex-container>
          <nidoca-visible visibleType="${this.opened?Ct.NORMAL:Ct.HIDE}">
            <slot></slot>
          </nidoca-visible>
        </nidoca-border>
      </div>
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};$t.styles=at`
    .ACCORDION_HEADER {
      cursor: pointer;
    }
  `,Lt([Z({type:String}),Pt("design:type",String)],$t.prototype,"header",void 0),Lt([Z({type:Boolean}),Pt("design:type",Boolean)],$t.prototype,"opened",void 0),$t=Lt([J("nidoca-accordion-item")],$t);var Dt,jt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Mt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.SINGLE="SINGLE",t.MULTI="MULTI"}(Dt||(Dt={}));let Bt=class extends ct{constructor(){super(...arguments),this.accordionType=Dt.SINGLE}render(){return z`
      <nidoca-border
        .borderProperties="${[Ot.TOP,Ot.FULL_WIDTH]}"
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
      >
        <slot id="accordionSlot"></slot>
      </nidoca-border>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case Dt.SINGLE:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof $t&&n!=e&&(n.opened=!1)}}break;case Dt.MULTI:}}};Bt.styles=at``,jt([Z({type:Dt}),Mt("design:type",String)],Bt.prototype,"accordionType",void 0),jt([Q("#accordionSlot"),Mt("design:type",Object)],Bt.prototype,"accordionSlot",void 0),Bt=jt([J("nidoca-accordion")],Bt);var zt,Ut,Ht=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ft=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6",t.SUBTITLE1="SUBTITLE1",t.SUBTITLE2="SUBTITLE2",t.BODY1="BODY1",t.BODY2="BODY2",t.BUTTON="BUTTON",t.CAPTION="CAPTION",t.OVERLINE="OVERLINE"}(zt||(zt={})),function(t){t.JUSTIFY="text-align:justify;",t.JUSTIFY_ALL="text-align:justify-all;",t.LEFT="text-align: left;",t.RIGHT="text-align: right;",t.CENTER="text-align: center;",t.START="text-align: start;",t.END="text-align: end;",t.MATCH_PARENT="text-align: match-parent;",t.INHERIT="text-align: inherit;",t.INITIAL="text-align: initial;",t.UNSET="text-align: unset;"}(Ut||(Ut={}));let Wt=class extends ct{constructor(){super(...arguments),this.typographyType=zt.BODY1,this.typographyAlignment=Ut.START,this.text=""}render(){return z`
      <span class="TYPOGRAPHY ${this.typographyType}" style="${this.typographyAlignment}"
        >${this.text}<slot></slot
      ></span>
    `}};Wt.styles=at`
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
  `,Ht([Z({type:zt}),Ft("design:type",String)],Wt.prototype,"typographyType",void 0),Ht([Z({type:Ut}),Ft("design:type",String)],Wt.prototype,"typographyAlignment",void 0),Ht([Z({type:String}),Ft("design:type",String)],Wt.prototype,"text",void 0),Wt=Ht([J("nidoca-typography")],Wt);var Vt,Yt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Gt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(Vt||(Vt={}));let Xt=class extends ct{constructor(){super(...arguments),this.icon="",this.title="",this.isLast=!1,this.first=!1}render(){return z`
      <nidoca-flex-container
        .flexDirection="${ut.COLUMN}"
        .flexWrap="${yt.NO_WRAP}"
        .flexJustifyContent="${mt.SPACE_EVENLY}"
        .flexAlignItems="${gt.FLEX_START}"
        .flexAlignContent="${bt.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
      >
        <nidoca-flex-container
          .flexDirection="${ut.ROW}"
          .flexWrap="${yt.NO_WRAP}"
          .flexJustifyContent="${mt.FLEX_START}"
          .flexAlignItems="${gt.CENTER}"
          .flexAlignContent="${bt.SPACE_EVENLY}"
          containerStyle=""
          itemStyle=""
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${Je.NONE}"
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

          ${this.isLast?z``:z`<nidoca-icon
            color="${this.determineBackgroundColor(this.state)}"
            icon="label_important">
          </nidoca-icon>`}
        </nidoca-flex-container>
        <nidoca-typography
          style="width:48px;"
          .typographyType="${zt.OVERLINE}"
          typographyAlignment="${Ut.CENTER}"
          text="${this.title}"
          ><slot></slot>
        </nidoca-typography>
      </nidoca-flex-container>
    `}determineBackgroundColor(t){return t==Vt.COMPLETED?"var(--mdc-theme-primary)":t==Vt.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==Vt.FINISH?"var(--app-color-success)":t==Vt.COMPLETED?"var(--mdc-theme-on-primary)":t==Vt.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};Xt.styles=at`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space-little);
    }

    .wizard-step-connector.selected {
      padding: var(--space-little);
      color: var(--mdc-theme-on-primary);
      background-color: var(--mdc-theme-primary);
    }
  `,Yt([Z({type:String}),Gt("design:type",String)],Xt.prototype,"icon",void 0),Yt([Z({type:String}),Gt("design:type",String)],Xt.prototype,"title",void 0),Yt([Z({type:Vt}),Gt("design:type",Object)],Xt.prototype,"state",void 0),Yt([Z({type:Boolean}),Gt("design:type",Boolean)],Xt.prototype,"isLast",void 0),Xt=Yt([J("nidoca-wizard-step")],Xt);var qt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Jt=class extends ct{render(){return z`
      <nidoca-flex-container
        .flexDirection="${ut.ROW}"
        .flexWrap="${yt.NO_WRAP}"
        .flexJustifyContent="${mt.FLEX_START}"
        .flexAlignItems="${gt.FLEX_START}"
        .flexAlignContent="${bt.SPACE_EVENLY}"
        containerStyle=""
        itemStyle=""
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-flex-container>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let n=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof Xt&&(e.index=t,e.state==Vt.CURRENT&&(n=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(n)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof Xt&&void 0!==n.index&&(n.index<t?n.state=Vt.COMPLETED:n.index==t?n.state=Vt.CURRENT:n.state=Vt.OPEN)}}}};Jt.styles=at``,qt([Q("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Jt.prototype,"wizardSlot",void 0),Jt=qt([J("nidoca-wizard")],Jt);var Kt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Zt=class extends ct{constructor(){super(...arguments),this.clickable=!0}render(){return z`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Zt.styles=at`
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
  `,Kt([Z({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Zt.prototype,"clickable",void 0),Zt=Kt([J("nidoca-chip")],Zt);var Qt=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let te=class extends ct{constructor(){super(...arguments),this.code=""}render(){return z`
         <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
      `}};te.styles=at`
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
   `,Qt([Z({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],te.prototype,"code",void 0),te=Qt([J("nidoca-code")],te);var ee,oe=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};!function(t){t.PROGRESS="PROGRESS",t.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}(ee||(ee={}));let ne=class extends ct{constructor(){super(...arguments),this.progressType=ee.PROGRESS}render(){return z` <progress class="${this.progressType}"></progress> `}};ne.styles=at`
    .PROGRESS {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      height: 0.25em;
      color: var(--mdc-theme-primary);
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
      color: var(--mdc-theme-primary);
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
  `,oe([Z({type:ee}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],ne.prototype,"progressType",void 0),ne=oe([J("nidoca-progress")],ne);var ie,re=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ae=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.PRIMARY="PRIMARY",t.SECONDARY="SECONDARY",t.CLEAR="CLEAR"}(ie||(ie={}));let se=class extends ct{constructor(){super(...arguments),this.buttonType=ie.PRIMARY,this.leadingIcon="thumb_up",this.text=""}render(){return z`
      <nidoca-ripple>
        <nidoca-flex-container
          class="BUTTON ${this.buttonType}"
          @click="${()=>{this.clicked()}}"
          flexWrap="${yt.NO_WRAP}"
          .flexJustifyContent="${mt.CENTER}"
          .flexAlignItems="${gt.CENTER}"
        >
          <nidoca-visible visibleType="${this.leadingIcon?Ct.NORMAL:Ct.HIDE}">
            <nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>
          </nidoca-visible>
          <nidoca-visible visibleType="${this.leadingIcon?Ct.NORMAL:Ct.HIDE}"> </nidoca-visible>
          <nidoca-typography text="${this.text}" typographyType="${zt.BUTTON}">
            <slot></slot>
          </nidoca-typography>

          <nidoca-visible visibleType="${this.buttonType==ie.CLEAR?Ct.HIDE:Ct.NORMAL}">
            <nidoca-spacer spacerSize="${dt.MEDIUM}"></nidoca-spacer>
          </nidoca-visible>
        </nidoca-flex-container>
      </nidoca-ripple>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};se.styles=at`
    .BUTTON {
      cursor: pointer;
      text-transform: uppercase;
      box-sizing: border-box;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      line-height: 48px;
    }

    .PRIMARY {
      background-color: var(--mdc-theme-primary);
      color: var(--mdc-theme-on-primary);
    }
    ::slotted(.PRIMARY:hover),
    .PRIMARY:hover,
    ::slotted(.PRIMARY:active),
    .PRIMARY:active {
      background-color: var(--mdc-theme-primary-dark);
      color: var(--mdc-theme-on-primary-dark);
    }

    .SECONDARY {
      background-color: var(--app-color-secondary-background);
      color: var(--app-color-secondary);
    }
    ::slotted(.SECONDARY:hover),
    .SECONDARY:hover,
    ::slotted(.SECONDARY:active),
    .SECONDARY:active {
      background-color: var(--app-color-secondary-background-dark);
      color: var(--app-color-secondary-dark);
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `,re([Z({type:ie}),ae("design:type",String)],se.prototype,"buttonType",void 0),re([Z({type:String}),ae("design:type",String)],se.prototype,"leadingIcon",void 0),re([Z({type:String}),ae("design:type",String)],se.prototype,"text",void 0),se=re([J("nidoca-button")],se);var ce,le=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};!function(t){t.NONE="NONE",t.KEY_LIGHT="KEY_LIGHT",t.AMBIENT_LIGHT="AMBIENT_LIGHT",t.COMBINED="COMBINED"}(ce||(ce={}));let de=class extends ct{constructor(){super(...arguments),this.shadowType=ce.NONE}render(){return z` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `}};de.styles=at`

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
  `,le([Z({type:ce}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],de.prototype,"shadowType",void 0),de=le([J("nidoca-box-shadow")],de);var pe,he=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},fe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},ue=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{c(n.next(t))}catch(t){r(t)}}function s(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))};!function(t){t.NORMAL="NORMAL",t.CLEAR="CLEAR"}(pe||(pe={}));let ye=class extends ct{constructor(){super(...arguments),this.label="",this.errorText="",this.infoText="",this.warningText="",this.selected=!1,this.inputframeMode=pe.NORMAL}render(){return this.inputframeMode==pe.NORMAL?z`
          <nidoca-border
            class="main"
            .borderSize="${this.selected?wt.THIN:wt.MEDIUM}"
            .borderProperties="${[Ot.FULL_WIDTH,this.selected?Ot.BOTTOM_SELECTED:Ot.BOTTOM]}"
            @mouseover="${()=>this.mouseover()}"
            @mouseout="${()=>this.mouseout()}"
          >
            <nidoca-spacer spacerSize="${dt.SMALL}" .spacerTypes="${[lt.ALL]}">
              <nidoca-flex-container .flexAlignContent="${bt.CENTER}" itemStyle="flex-basis: 100%;">
                <nidoca-typography .typographyType="${zt.CAPTION}" text="${this.label}"></nidoca-typography>
                <slot></slot>
              </nidoca-flex-container>
            </nidoca-spacer>
          </nidoca-border>

          <nidoca-flex-container .flexAlignContent="${bt.CENTER}" itemStyle="flex-basis: 100%;"
            ><nidoca-visible visibleType="${this.infoText?Ct.NORMAL:Ct.HIDE}">
              <nidoca-typography .typographyType="${zt.BODY1}" text="${this.infoText}"></nidoca-typography>
            </nidoca-visible>

            <nidoca-visible visibleType="${this.warningText?Ct.NORMAL:Ct.HIDE}">
              <nidoca-typography
                style="color:var(--app-color-warning-background)"
                .typographyType="${zt.BODY1}"
                text="${this.warningText}"
              ></nidoca-typography>
            </nidoca-visible>

            <nidoca-visible visibleType="${this.errorText?Ct.NORMAL:Ct.HIDE}">
              <nidoca-typography
                style="color:var(--app-color-error-background)"
                .typographyType="${zt.BODY1}"
                text="${this.errorText}"
              ></nidoca-typography> </nidoca-visible
          ></nidoca-flex-container>
        `:z`<slot></slot>`}mouseover(){return ue(this,void 0,void 0,(function*(){this.selected=!0}))}mouseout(){return ue(this,void 0,void 0,(function*(){this.selected=!1}))}};ye.styles=at`
    .main {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
    }
  `,he([Z({type:String}),fe("design:type",String)],ye.prototype,"label",void 0),he([Z({type:String}),fe("design:type",String)],ye.prototype,"errorText",void 0),he([Z({type:String}),fe("design:type",String)],ye.prototype,"infoText",void 0),he([Z({type:String}),fe("design:type",String)],ye.prototype,"warningText",void 0),he([Z({type:Boolean}),fe("design:type",Boolean)],ye.prototype,"selected",void 0),he([Z({type:pe}),fe("design:type",String)],ye.prototype,"inputframeMode",void 0),ye=he([J("nidoca-form-inputframe")],ye);class me extends ct{}var ge=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ve=class extends ct{constructor(){super(...arguments),this.autocomplete=!0}render(){return z`
      <form
        class="FORM"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        .?autocomplete="${this.autocomplete}"
      >
        <slot id="slotElement"></slot>
      </form>
    `}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const n=o[t];this.recursiveInputElementSearch(n,e)}return e}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))if(!e.validate()){t=!1;break}return t}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const n=o.getOutputData();e[n.key]=n.value,t.append(n.key,n.value)}const o={};return o.jsonObject=e,o.formData=t,o}formButtonClicked(t){switch(console.log("formButton clicked: "+t.detail),t.detail){case"submitButton":this.dispatchEvent(new CustomEvent("nidoca-event-form-submit-button-clicked",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}}recursiveInputElementSearch(t,e){if(t instanceof me)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};ve.styles=at`
    .FORM {
      box-sizing: border-box;
    }
  `,ge([Z({type:Boolean}),be("design:type",Boolean)],ve.prototype,"autocomplete",void 0),ge([Q("#slotElement"),be("design:type",Object)],ve.prototype,"slotElement",void 0),ve=ge([J("nidoca-form")],ve);const xe=(t,e)=>{const o=t.startNode.parentNode,n=void 0===e?t.endNode:e.startNode,i=o.insertBefore(p(),n);o.insertBefore(p(),n);const r=new I(t.options);return r.insertAfterNode(i),r},Se=(t,e)=>(t.setValue(e),t.commit(),t),Ee=(t,e,o)=>{const n=t.startNode.parentNode,i=o?o.startNode:t.endNode,r=e.endNode.nextSibling;r!==i&&((t,e,o=null,n=null)=>{for(;e!==o;){const o=e.nextSibling;t.insertBefore(e,n),e=o}})(n,e.startNode,r,i)},Re=t=>{n(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},Te=(t,e,o)=>{const n=new Map;for(let i=e;i<=o;i++)n.set(t[i],i);return n},Oe=new WeakMap,we=new WeakMap,ke=g(((t,e,o)=>{let n;return void 0===o?o=e:void 0!==e&&(n=e),e=>{if(!(e instanceof I))throw new Error("repeat can only be used in text bindings");const i=Oe.get(e)||[],r=we.get(e)||[],a=[],s=[],c=[];let l,d,p=0;for(const e of t)c[p]=n?n(e,p):p,s[p]=o(e,p),p++;let h=0,f=i.length-1,u=0,y=s.length-1;for(;h<=f&&u<=y;)if(null===i[h])h++;else if(null===i[f])f--;else if(r[h]===c[u])a[u]=Se(i[h],s[u]),h++,u++;else if(r[f]===c[y])a[y]=Se(i[f],s[y]),f--,y--;else if(r[h]===c[y])a[y]=Se(i[h],s[y]),Ee(e,i[h],a[y+1]),h++,y--;else if(r[f]===c[u])a[u]=Se(i[f],s[u]),Ee(e,i[f],i[h]),f--,u++;else if(void 0===l&&(l=Te(c,u,y),d=Te(r,h,f)),l.has(r[h]))if(l.has(r[f])){const t=d.get(c[u]),o=void 0!==t?i[t]:null;if(null===o){const t=xe(e,i[h]);Se(t,s[u]),a[u]=t}else a[u]=Se(o,s[u]),Ee(e,o,i[h]),i[t]=null;u++}else Re(i[f]),f--;else Re(i[h]),h++;for(;u<=y;){const t=xe(e,a[y+1]);Se(t,s[u]),a[u++]=t}for(;h<=f;){const t=i[h++];null!==t&&Re(t)}Oe.set(e,a),we.set(e,c)}})),_e=new WeakMap,Ie=g(((t,e)=>o=>{const n=_e.get(o);if(Array.isArray(t)){if(Array.isArray(n)&&n.length===t.length&&t.every(((t,e)=>t===n[e])))return}else if(n===t&&(void 0!==t||_e.has(o)))return;o.setValue(e()),_e.set(o,Array.isArray(t)?Array.from(t):t)}));var Ce,Ne=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ae=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},Le=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{c(n.next(t))}catch(t){r(t)}}function s(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))};let Pe=class extends me{constructor(){super(...arguments),this.value="",this.options=[],this.name="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.required=!0,this.multiple=!1,this.size=1,this.inputframeMode=pe.NORMAL}render(){return z`
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
          @change="${()=>this.change()}"
        >
          ${Ie([this.value,this.options],(()=>z`
              ${ke(this.options,(t=>null==t?z` <option></option>`:this.isSelectedOption(t)?z` <option value="${t.key}" selected>${t.value}</option> `:z` <option value="${t.key}">${t.value}</option> `))}
            `))}
        </select>
      </nidoca-form-inputframe>
    `}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}focused(){return Le(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}focusout(){return Le(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}change(){return Le(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}dispatchOutputDataChangeEvent(){return Le(this,void 0,void 0,(function*(){if(this.validate()){const t=new CustomEvent("nidoca-form-combobox-event-change",{detail:this.getOutputData(),bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}}))}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}};Pe.styles=at`
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
  `,Ne([Z(),Ae("design:type",Object)],Pe.prototype,"value",void 0),Ne([Z({type:class{constructor(){this.key=""}}}),Ae("design:type",Array)],Pe.prototype,"options",void 0),Ne([Z({type:String}),Ae("design:type",String)],Pe.prototype,"name",void 0),Ne([Z({type:String}),Ae("design:type",String)],Pe.prototype,"label",void 0),Ne([Z({type:String}),Ae("design:type",String)],Pe.prototype,"errorText",void 0),Ne([Z({type:String}),Ae("design:type",String)],Pe.prototype,"infoText",void 0),Ne([Z({type:String}),Ae("design:type",String)],Pe.prototype,"warningText",void 0),Ne([Z({type:Boolean}),Ae("design:type",Boolean)],Pe.prototype,"required",void 0),Ne([Z({type:Boolean}),Ae("design:type",Boolean)],Pe.prototype,"multiple",void 0),Ne([Z({type:Number}),Ae("design:type",Number)],Pe.prototype,"size",void 0),Ne([Z({type:pe}),Ae("design:type","function"==typeof(Ce=void 0!==pe&&pe)?Ce:Object)],Pe.prototype,"inputframeMode",void 0),Ne([Q("#selectElement"),Ae("design:type",Object)],Pe.prototype,"selectElement",void 0),Pe=Ne([J("nidoca-form-combobox")],Pe);var $e,De,je=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Me=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},Be=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{c(n.next(t))}catch(t){r(t)}}function s(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))};!function(t){t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url"}(De||(De={}));let ze=class extends me{constructor(){super(...arguments),this.textType=De.TEXT,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=pe.NORMAL}render(){return z`
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
          type="${this.textType}"
          value="${this.value}"
          placeholder="${this.placeholder?this.placeholder:this.label}"
          size="${this.size}"
          minlength="${this.minlength}"
          maxlength="${this.maxlength}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          @keyup="${this.handleKeyup}"
          @change="${()=>this.handleChange()}"
          @focus="${()=>this.handleFocus()}"
          @focusout="${()=>this.handleFocusout()}"
        />
      </nidoca-form-inputframe>
    `}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}handleFocus(){return Be(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent("nidoca-form-text-event-focus")}))}handleFocusout(){return Be(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent("nidoca-form-text-focusout")}))}handleChange(){return Be(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent("nidoca-form-text-event-change")}))}handleKeyup(){return Be(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent("nidoca-form-text-event-change")}))}dispatchOutputDataChangeEvent(t){return Be(this,void 0,void 0,(function*(){if(this.validate()){const e=new CustomEvent(t,{detail:this.getOutputData(),bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}}))}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ze.styles=at`
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
  `,je([Z({type:De}),Me("design:type",String)],ze.prototype,"textType",void 0),je([Z({type:String}),Me("design:type",String)],ze.prototype,"name",void 0),je([Z(),Me("design:type",Object)],ze.prototype,"value",void 0),je([Z({type:String}),Me("design:type",String)],ze.prototype,"label",void 0),je([Z({type:Boolean}),Me("design:type",Boolean)],ze.prototype,"required",void 0),je([Z({type:String}),Me("design:type",String)],ze.prototype,"placeholder",void 0),je([Z({type:Boolean}),Me("design:type",Boolean)],ze.prototype,"disabled",void 0),je([Z({type:Boolean}),Me("design:type",Boolean)],ze.prototype,"checked",void 0),je([Z({type:Number}),Me("design:type",Object)],ze.prototype,"maxlength",void 0),je([Z({type:Number}),Me("design:type",Object)],ze.prototype,"minlength",void 0),je([Z({type:Number}),Me("design:type",Object)],ze.prototype,"min",void 0),je([Z({type:Number}),Me("design:type",Object)],ze.prototype,"max",void 0),je([Z({type:Number}),Me("design:type",Object)],ze.prototype,"step",void 0),je([Z({type:Number}),Me("design:type",Object)],ze.prototype,"size",void 0),je([Z({type:String}),Me("design:type",String)],ze.prototype,"errorText",void 0),je([Z({type:String}),Me("design:type",String)],ze.prototype,"infoText",void 0),je([Z({type:String}),Me("design:type",String)],ze.prototype,"warningText",void 0),je([Z({type:pe}),Me("design:type","function"==typeof($e=void 0!==pe&&pe)?$e:Object)],ze.prototype,"inputframeMode",void 0),je([Q("#inputElement"),Me("design:type",Object)],ze.prototype,"inputElement",void 0),ze=je([J("nidoca-form-text")],ze);var Ue,He,Fe=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},We=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},Ve=function(t,e,o,n){return new(o||(o=Promise))((function(i,r){function a(t){try{c(n.next(t))}catch(t){r(t)}}function s(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}))};!function(t){t.DATE="date",t.DATETIME_LOCAL="datetime-local",t.MONTH="month",t.TIME="time",t.WEEK="week"}(He||(He={}));let Ye=class extends me{constructor(){super(...arguments),this.dateType=He.DATE,this.name="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.multiple=!1,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=pe.NORMAL}render(){return z`
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
          type="${this.dateType}"
          value="${this.value}"
          placeholder="${this.placeholder?this.placeholder:this.label}"
          size="${this.size}"
          minlength="${this.minlength}"
          maxlength="${this.maxlength}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?multiple="${this.multiple}"
          @keyup="${this.handleKeyup}"
          @change="${()=>this.handleChange()}"
          @focus="${()=>this.handleFocus()}"
          @focusout="${()=>this.handleFocusout()}"
        />
      </nidoca-form-inputframe>
    `}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}handleFocus(){return Ve(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}handleFocusout(){return Ve(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}handleChange(){return Ve(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}handleKeyup(){return Ve(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}dispatchOutputDataChangeEvent(){return Ve(this,void 0,void 0,(function*(){if(this.validate()){const t=new CustomEvent("nidoca-form-text-event-change",{detail:this.getOutputData(),bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}}))}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Ye.styles=at`
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
  `,Fe([Z(),We("design:type",String)],Ye.prototype,"dateType",void 0),Fe([Z({type:String}),We("design:type",String)],Ye.prototype,"name",void 0),Fe([Z(),We("design:type",Object)],Ye.prototype,"value",void 0),Fe([Z({type:String}),We("design:type",String)],Ye.prototype,"label",void 0),Fe([Z({type:Boolean}),We("design:type",Boolean)],Ye.prototype,"required",void 0),Fe([Z({type:String}),We("design:type",String)],Ye.prototype,"placeholder",void 0),Fe([Z({type:Boolean}),We("design:type",Boolean)],Ye.prototype,"disabled",void 0),Fe([Z({type:Boolean}),We("design:type",Boolean)],Ye.prototype,"checked",void 0),Fe([Z({type:Boolean}),We("design:type",Boolean)],Ye.prototype,"multiple",void 0),Fe([Z({type:Number}),We("design:type",Object)],Ye.prototype,"maxlength",void 0),Fe([Z({type:Number}),We("design:type",Object)],Ye.prototype,"minlength",void 0),Fe([Z({type:Number}),We("design:type",Object)],Ye.prototype,"min",void 0),Fe([Z({type:Number}),We("design:type",Object)],Ye.prototype,"max",void 0),Fe([Z({type:Number}),We("design:type",Object)],Ye.prototype,"step",void 0),Fe([Z({type:Number}),We("design:type",Object)],Ye.prototype,"size",void 0),Fe([Z({type:String}),We("design:type",String)],Ye.prototype,"errorText",void 0),Fe([Z({type:String}),We("design:type",String)],Ye.prototype,"infoText",void 0),Fe([Z({type:String}),We("design:type",String)],Ye.prototype,"warningText",void 0),Fe([Q("#inputElement"),We("design:type",Object)],Ye.prototype,"inputElement",void 0),Fe([Z({type:pe}),We("design:type","function"==typeof(Ue=void 0!==pe&&pe)?Ue:Object)],Ye.prototype,"inputframeMode",void 0),Ye=Fe([J("nidoca-form-date")],Ye);var Ge=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qe=class extends me{constructor(){super(...arguments),this.name="",this.assistiveText="",this.infoText="",this.errorText="",this.selected=!1}render(){return z`
        <nidoca-grid-container
                .gridTemplateRows='${["auto"]}'
                .gridTemplateColumns='${["1fr","auto"]}'
        >
            <nidoca-flex-container
                    flexItemBasisValue='100%'
            >
                <nidoca-typography
                        .typographyType='${zt.SUBTITLE1}'
                        text='${this.infoText}'
                >
                    <slot></slot
                    >
                </nidoca-typography>
                <nidoca-visible
                        visibleType='${this.assistiveText.length>0?Ct.NORMAL:Ct.HIDE}'
                >
                    <nidoca-typography
                            .typographyType='${zt.SUBTITLE2}'
                            text='${this.assistiveText}'
                    ></nidoca-typography>
                </nidoca-visible>
            </nidoca-flex-container>
            <componetn-container>
                <nidoca-visible
                        visibleType='${this.selected?Ct.HIDE:Ct.NORMAL}'
                >
                    <nidoca-icon
                            @nidoca-event-icon-clicked='${()=>{this.switchSelected()}}'
                            icon='toggle_off'
                            .clickable='${!0}'
                    ></nidoca-icon>
                </nidoca-visible>
                <nidoca-visible
                        visibleType='${this.selected?Ct.NORMAL:Ct.HIDE}'
                >
                    <nidoca-icon
                            color='var(--mdc-theme-primary)'
                            @nidoca-event-icon-clicked='${()=>{this.switchSelected()}}'
                            icon='toggle_on'
                            .clickable='${!0}'
                    ></nidoca-icon>
                </nidoca-visible>
            </componetn-container>
        </nidoca-grid-container>

    `}getOutputData(){return{key:this.name,value:this.selected}}validate(){return!0}switchSelected(){if(this.selected=!this.selected,this.validate()){const t=new CustomEvent("nidoca-form-switch-event-change",{detail:this.getOutputData(),bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}}};qe.styles=at`
    
  `,Ge([Z({type:String}),Xe("design:type",String)],qe.prototype,"name",void 0),Ge([Z({type:String}),Xe("design:type",String)],qe.prototype,"assistiveText",void 0),Ge([Z({type:String}),Xe("design:type",String)],qe.prototype,"infoText",void 0),Ge([Z({type:String}),Xe("design:type",String)],qe.prototype,"errorText",void 0),Ge([Z({type:Boolean}),Xe("design:type",Boolean)],qe.prototype,"selected",void 0),qe=Ge([J("nidoca-form-switch")],qe);var Je,Ke=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ze=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.NONE="NONE",t.DEFAULT_SHADOW="DEFAULT_SHADOW",t.SHADOW_1="SHADOW_1",t.SHADOW_2="SHADOW_2",t.SHADOW_3="SHADOW_3"}(Je||(Je={}));let Qe=class extends ct{constructor(){super(...arguments),this.icon="",this.iconShadowType=Je.NONE,this.withIconSpace=!0,this.round=!1,this.clickable=!0,this.deactivated=!1,this.color="",this.backgroundColor="transparent",this.size=24,this.sizeUnit="px"}render(){return z`
      <nidoca-spacer cssStyle="padding: ${this.withIconSpace?String(this.size/2).concat(this.sizeUnit):"0px"}">
        <span
          class="icon-container ${this.iconShadowType} ${this.clickable&&!this.deactivated?"clickable":""} ${this.round?"ROUND":""} ${this.deactivated?"deactivated":""}"
          title="${this.title}"
          @click="${this.clicked}"
          style="${"line-height: ".concat(this.size.toString()).concat(this.sizeUnit).concat(";")}${"width: ".concat(this.size.toString()).concat(this.sizeUnit).concat(";")}${this.backgroundColor?"background-color:".concat(this.backgroundColor).concat(";"):""} ${this.round?"height:".concat((2*this.size).toString()).concat("px;").concat("width:").concat((2*this.size).toString()).concat("px;"):""}"
          ><i
            class="material-icons"
            style="${this.color.length>0?"color: ".concat(this.color).concat(";"):""} ${null!=this.size?"font-size: ".concat(this.size.toString()).concat(this.sizeUnit).concat(";"):""}"
            >${this.icon}</i
          >
        </span>
      </nidoca-spacer>
    `}clicked(){return t=this,e=void 0,n=function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}},new((o=void 0)||(o=Promise))((function(i,r){function a(t){try{c(n.next(t))}catch(t){r(t)}}function s(t){try{c(n.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}c((n=n.apply(t,e||[])).next())}));var t,e,o,n}};Qe.styles=at`
    .material-icons {
      font-family: 'Material Icons';
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
      font-feature-settings: 'liga';
    }

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: inherit;
      color: inherit;
    }

    .icon-container:active {
      color: var(--app-color-secondary-background);
    }

    .ROUND {
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

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      color: var(--app-color-surface-background-dark);
    }
  `,Ke([Z({type:String}),Ze("design:type",String)],Qe.prototype,"icon",void 0),Ke([Z({type:Je}),Ze("design:type",String)],Qe.prototype,"iconShadowType",void 0),Ke([Z({type:Boolean}),Ze("design:type",Boolean)],Qe.prototype,"withIconSpace",void 0),Ke([Z({type:Boolean}),Ze("design:type",Boolean)],Qe.prototype,"round",void 0),Ke([Z({type:Boolean}),Ze("design:type",Boolean)],Qe.prototype,"clickable",void 0),Ke([Z({type:Boolean}),Ze("design:type",Boolean)],Qe.prototype,"deactivated",void 0),Ke([Z({type:String}),Ze("design:type",String)],Qe.prototype,"color",void 0),Ke([Z({type:String}),Ze("design:type",String)],Qe.prototype,"backgroundColor",void 0),Ke([Z({type:Number}),Ze("design:type",Number)],Qe.prototype,"size",void 0),Ke([Z({type:String}),Ze("design:type",String)],Qe.prototype,"sizeUnit",void 0),Qe=Ke([J("nidoca-icon")],Qe);var to,eo,oo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},no=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.IMG="IMG",t.MOVIE="MOVIE"}(to||(to={})),function(t){t.ROUND="ROUND",t.CLICKABLE="CLICKABLE",t.ZOOM_WRAPPED="ZOOM_WRAPPED",t.FULL_WIDTH="FULL_WIDTH"}(eo||(eo={}));let io=class extends ct{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.richMediaType=to.IMG,this.richMediaProperties=[eo.CLICKABLE]}render(){return this.richMediaType==to.IMG?z`
          <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"><img src="${this.src}" /></span>
        `:z`
          <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}">
            <iframe
              src="${this.src}"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe
          ></span>
        `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat(t)})),e}};io.styles=at`
    :host,
    span {
      margin: 0;
      padding: 0;
      font-size: 0;
      letter-spacing: 0;
      line-height: 0;
    }

    img,
    iframe {
      box-sizing: border-box;
      height: auto;
      width: auto;
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
    .FULL_WIDTH img,
    .FULL_WIDTH iframe {
      width: 100%;
    }

    .ROUND {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 75%;
      box-sizing: border-box;
    }
    .ROUND img,
    .ROUND iframe {
      padding: 0.25em;
      border-radius: 50%;
      width: 100%;
    }

    @media only screen and (max-width: 768px), only screen and (orientation: portrait) {
    }
  `,oo([Z({type:String}),no("design:type",String)],io.prototype,"src",void 0),oo([Z({type:to}),no("design:type",String)],io.prototype,"richMediaType",void 0),oo([Z({type:eo}),no("design:type",Array)],io.prototype,"richMediaProperties",void 0),io=oo([J("nidoca-rich-media")],io);var ro=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ao=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let so=class extends ct{constructor(){super(...arguments),this.min=1,this.max=10,this.errorText="nidoca-captcha-wrong-value",this.numberOne=1,this.numberTwo=1}render(){return z`
      <nidoca-form-text
        id="inputfield"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        label="${"nidoca-captcha-label".concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        name="captcha"
        trailingIcon="create"
        .textType="${De.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};so.styles=at``,ro([Z({type:Number}),ao("design:type",Number)],so.prototype,"min",void 0),ro([Z({type:Number}),ao("design:type",Number)],so.prototype,"max",void 0),ro([Z({type:String}),ao("design:type",String)],so.prototype,"errorText",void 0),ro([Q("#inputfield"),ao("design:type",Object)],so.prototype,"inputfield",void 0),so=ro([J("nidoca-captcha")],so);var co,lo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},po=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}(co||(co={}));let ho=class extends ct{constructor(){super(...arguments),this.text="",this.href="",this.targetType=co.SELF}render(){return z` <a href="${this.href}" target="${this.targetType}">${this.text}<slot></slot></a> `}};ho.styles=at`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,lo([Z({type:String}),po("design:type",String)],ho.prototype,"text",void 0),lo([Z({type:String}),po("design:type",String)],ho.prototype,"href",void 0),lo([Z({type:co}),po("design:type",String)],ho.prototype,"targetType",void 0),ho=lo([J("nidoca-link")],ho);var fo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},uo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let yo=class extends ct{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1}update(t){super.update(t),null!=t.get("selectionMode")&&(this.selectionMode||(this.selected=!1))}render(){return z`
      <nidoca-ripple>
        <div class="LIST_ITEM">
          <nidoca-visible visibleType="${this.selectionMode?Ct.NORMAL:Ct.HIDE}">
            <nidoca-icon
              @click="${()=>this.switchSelected()}"
              icon="${this.selected?"check_box":"check_box_outline_blank"}"
            ></nidoca-icon>
          </nidoca-visible>
          <slot class="LIST_ITEM_SLOT" @click="${()=>this.itemClicked()}"></slot></div
      ></nidoca-ripple>
    `}itemClicked(){this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this,bubbles:!0,composed:!0}))}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};yo.styles=at`
    .LIST_ITEM_SLOT {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      width: 100%;
    }

    .LIST_ITEM {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: auto 1fr;
      cursor: pointer;
    }

    .LIST_ITEM:hover {
      background-color: var(--app-color-surface-background-light);
    }
  `,fo([Z({type:Boolean}),uo("design:type",Boolean)],yo.prototype,"selectionMode",void 0),fo([Z({type:Boolean}),uo("design:type",Boolean)],yo.prototype,"selected",void 0),yo=fo([J("nidoca-list-item")],yo);var mo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},go=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let bo=class extends ct{constructor(){super(...arguments),this.selectionMode=!1}update(t){super.update(t),null!=t.get("selectionMode")&&this.getItems().forEach((t=>{t.selectionMode=this.selectionMode}))}render(){return z` <slot class="LIST_SLOT" id="slotElement"></slot> `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof yo&&t.push(n)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof yo&&n.selected&&t.push(n)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof yo&&n.selected&&t.push(o)}}return t}};bo.styles=at`
    .LIST_SLOT {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,mo([Z({type:Boolean}),go("design:type",Boolean)],bo.prototype,"selectionMode",void 0),mo([Q("#slotElement"),go("design:type",Object)],bo.prototype,"slotElement",void 0),bo=mo([J("nidoca-list")],bo);var vo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let xo=class extends ct{constructor(){super(...arguments),this.prominent=!1}render(){return z`
      <nidoca-flex-container
        .devices="${[]}"
        .flexDirection="${ut.ROW}"
        .flexWrap="${yt.WRAP}"
        .flexJustifyContent="${mt.SPACE_BETWEEN}"
        .flexAlignItems="${gt.CENTER}"
        .flexAlignContent="${bt.SPACE_AROUND}"
        containerStyle=""
        itemStyle=""
      >
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
        ${this.prominent?z`<slot class="prominent" name="prominent"></slot>`:z``}
      </nidoca-flex-container>
    `}};xo.styles=at`
    slot {
      display: block;
    }

    .prominent {
      flex-basis: 100%;
      flex-grow: 3;
    }

  `,vo([Z({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],xo.prototype,"prominent",void 0),xo=vo([J("nidoca-top-app-bar")],xo);var So,Eo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};!function(t){t.SURFACE="SURFACE",t.PRIMARY="PRIMARY",t.SECONDARY="SECONDARY"}(So||(So={}));let Ro=class extends ct{constructor(){super(...arguments),this.navigationStyle=So.PRIMARY}render(){return z`
      <div class="NAVIGATION ${this.navigationStyle}">
        <slot name="contentBefore"></slot>
        <slot name="links"></slot>
        <slot name="contentAfter"></slot>
      </div>
    `}};Ro.styles=at`
    .SURFACE {
      background-color: var(--app-color-surface-background);
      color: var(--app-color-surface);
    }

    .PRIMARY {
      background-color: var(--mdc-theme-primary);
      color: var(--mdc-theme-on-primary);
    }

    .SECONDARY {
      background-color: var(--app-color-secondary-background);
      color: var(--app-color-secondary);
    }

    .NAVIGATION {
    }
  `,Eo([Z({type:So}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ro.prototype,"navigationStyle",void 0),Ro=Eo([J("nidoca-navigation")],Ro);var To=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Oo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let wo=class extends ct{constructor(){super(...arguments),this.icon="",this.text="",this.href=""}render(){return z`
          <div
            class="navItem"
            class="${"TODO: RouterService.getUniqueInstance().getPath()"==this.href?"navItem selected":"navItem"}"
          >
            <nidoca-spacer spacerSize="${dt.LITTLE}" .spacerTypes="${[lt.VERTICAL]}">
              <nidoca-flex-container
                @click="${()=>this.linkClicked()}"
                .flexDirection="${ut.ROW}"
                .flexWrap="${yt.NO_WRAP}"
                .flexJustifyContent="${mt.FLEX_START}"
                .flexAlignItems="${gt.CENTER}"
                .flexAlignContent="${bt.FLEX_START}"
                itemStyle="flex-basis: 48px auto;"
              >
                <nidoca-icon icon="${this.icon}" .withIconSpace="${!1}"></nidoca-icon>
                <nidoca-spacer spacerSize="${dt.LITTLE}" .spacerTypes="${[lt.LEFT]}">
                  <nidoca-typography typographyType="${zt.BODY1}">${this.text}</nidoca-typography>
                </nidoca-spacer>
              </nidoca-flex-container>
            </nidoca-spacer>
          </div>
        `}linkClicked(){const t="nidoca-event-link-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this.href,bubbles:!0,composed:!0}))}};wo.styles=at`
    .navItem {
      cursor: pointer;
    }

    ::slotted(.navItem.selected),
    .navItem.selected,
    ::slotted(.navItem:hover),
    .navItem:hover,
    ::slotted(.navItem:active),
    .navItem:active {
      color: var(--mdc-theme-on-primary-light);
      background-color: var(--mdc-theme-primary-dark);
    }
  `,To([Z({type:String}),Oo("design:type",String)],wo.prototype,"icon",void 0),To([Z({type:String}),Oo("design:type",String)],wo.prototype,"text",void 0),To([Z({type:String}),Oo("design:type",String)],wo.prototype,"href",void 0),wo=To([J("nidoca-navigation-link")],wo);var ko=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},_o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Io=class extends ct{constructor(){super(...arguments),this.text="",this.rendered=!0}render(){return this.rendered?z`
          <nidoca-flex-container
            .flexItemProperties="${[]}"
            .flexDirection="${ut.ROW}"
            .flexWrap="${yt.NO_WRAP}"
            .flexJustifyContent="${mt.FLEX_END}"
            .flexAlignItems="${gt.CENTER}"
            .flexAlignContent="${bt.FLEX_START}"
            itemStyle="flex-basis: 100%;"
          >
            <nidoca-spacer spacerSize="${dt.SMALL}" .spacerTypes="${[lt.ALL]}">
              <nidoca-typography .typographyType="${zt.H6}" text="${this.text}"></nidoca-typography>
            </nidoca-spacer>
          </nidoca-flex-container>
        `:z``}};Io.styles=at``,ko([Z({type:String}),_o("design:type",String)],Io.prototype,"text",void 0),ko([Z({type:Boolean}),_o("design:type",Boolean)],Io.prototype,"rendered",void 0),Io=ko([J("nidoca-navigation-section")],Io);var Co=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},No=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ao=class extends ct{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new Qe],["row 2",new Qe]]}render(){return z`
      <div>
        <table>
          <thead>
            ${Ie([this.headers],(()=>z` ${ke(this.headers,(t=>z` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${Ie([this.rows],(()=>z`
                  ${ke(this.rows,(t=>z`
                        <tr>
                          ${ke(t,(t=>z` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Ao.styles=at`
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
  `,Co([Z({type:Array}),No("design:type",Array)],Ao.prototype,"headers",void 0),Co([Z({type:Array}),No("design:type",Array)],Ao.prototype,"rows",void 0),Ao=Co([J("nidoca-table")],Ao);var Lo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Po=class extends ct{constructor(){super(...arguments),this.selected=!1}render(){return z`
      <nidoca-visible visibleType="${this.selected?Ct.NORMAL:Ct.HIDE}">
        <slot></slot>
      </nidoca-visible>
    `}};Po.styles=at``,Lo([Z({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Po.prototype,"selected",void 0),Po=Lo([J("nidoca-tab-content")],Po);var $o=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Do=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let jo=class extends ct{constructor(){super(...arguments),this.selected=!1,this.text=""}render(){return z`
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?z`
              <nidoca-typography .typographyType="${zt.OVERLINE}" text="${this.text}"></nidoca-typography>
            `:z``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};jo.styles=at`
    :host {
      border-width: 4px;
      border-color: var(--app-color-surface-background);
      border-bottom-style: solid;
      margin-left: 2px;
      margin-right: 2px;
    }

    :host(.SELECTED) {
      border-color: var(--mdc-theme-primary);
    }

    .tab,
    ::slotted(.tab) {
      cursor: pointer;
      box-sizing: border-box;
    }
  `,$o([Z({type:Boolean}),Do("design:type",Boolean)],jo.prototype,"selected",void 0),$o([Z({type:String}),Do("design:type",String)],jo.prototype,"text",void 0),jo=$o([J("nidoca-tab")],jo);var Mo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Bo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let zo=class extends ct{firstUpdated(t){super.firstUpdated(t),this.changeSelectedTabStyle()}update(t){super.update(t),null!=t.get("tabType")&&this.changeSelectedTabStyle()}changeSelectedTabStyle(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements();console.log(t.length);const e=100/t.length;for(let o=0;o<t.length;o++){const n=t[o];n instanceof jo&&(n.style.width=String(e).concat("%"),n.selected&&n.classList.add("SELECTED"))}}}render(){return z`
      <nidoca-grid-container
        @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}"
        .gridTemplateRows="${["auto","auto"]}"
        .gridTemplateColumns="${["100%"]}"
      >
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </nidoca-grid-container>
    `}tabClicked(t){const e=t.detail;if(e.selected)return;let o=0;if(null!=this.tabSlot){const t=this.tabSlot.assignedElements();for(let n=0;n<t.length;n++){const i=t[n];i instanceof jo&&(i==e?(o=n,i.selected=!0,i.classList.add("SELECTED")):(i.selected=!1,i.classList.remove("SELECTED")))}}console.log("tab selected, index = %s",o);let n=0;if(null!=this.tabContentSlot){const t=this.tabContentSlot.assignedElements();for(let e=0;e<t.length;e++){const i=t[e];i instanceof Po&&(i.selected=o==n,n++)}}}};zo.styles=at`
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
  `,Mo([Q("#tabSlot"),Bo("design:type",Object)],zo.prototype,"tabSlot",void 0),Mo([Q("#tabContentSlot"),Bo("design:type",Object)],zo.prototype,"tabContentSlot",void 0),zo=Mo([J("nidoca-tabs")],zo);var Uo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ho=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fo=class extends ct{constructor(){super(...arguments),this.navigationClosed=!0}updated(t){super.updated(t),new Promise((t=>requestAnimationFrame(t))).then((()=>{if(null!=this.headerElement){const t=this.headerElement.offsetHeight,e="top:".concat(String(t)).concat("px;"),o="padding-top:".concat(String(t)).concat("px;");console.debug("set header height to corresponding elements: %s",e),null!=this.sidebarElement&&this.sidebarElement.setAttribute("style",e),null!=this.contentElement&&this.contentElement.setAttribute("style",o)}}))}render(){return z`
      <div id="header" class="${this.navigationClosed?"menuClosed":""}">
        <nidoca-top-app-bar>
        <slot name="left"></slot>
        <nidoca-icon
            slot="left"
            icon="${this.navigationClosed?"menu":"clear"}"
            .clickable="${!0}"
            @nidoca-event-icon-clicked="${()=>this.toogleNavigation()}"
          ></nidoca-icon>
          <nidoca-typography slot="center" .typographyType="${zt.BODY1}"></nidoca-typography>
        </nidoca-top-app-bar>
      </div>
      <div id="sidebar" class="${this.navigationClosed?"menuClosed":""}"><slot name="sidebar"></slot></div>
      <div id="content" class="${this.navigationClosed?"menuClosed":""}"><slot name="content"></slot></div>
    `}toogleNavigation(){console.log("toogle navigation."),this.navigationClosed=!this.navigationClosed}};Fo.styles=at`
    #header {
      position: fixed;
      width: 100%;
      z-index: 1;
      background-color: var(--mdc-theme-primary);
      color: var(--mdc-theme-on-primary);
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
      background-color: var(--mdc-theme-primary);
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
  `,Uo([Z({type:Boolean}),Ho("design:type",Boolean)],Fo.prototype,"navigationClosed",void 0),Uo([Q("#header"),Ho("design:type",Object)],Fo.prototype,"headerElement",void 0),Uo([Q("#sidebar"),Ho("design:type",Object)],Fo.prototype,"sidebarElement",void 0),Uo([Q("#content"),Ho("design:type",Object)],Fo.prototype,"contentElement",void 0),Fo=Uo([J("nidoca-template")],Fo);var Wo,Vo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Yo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.CENTER="CENTER",t.LEFT="LEFT",t.RIGHT="RIGHT",t.TOP="TOP",t.BOTTOM="BOTTOM",t.SLIDE_CENTER="SLIDE_CENTER",t.SLIDE_LEFT="SLIDE_LEFT",t.SLIDE_RIGHT="SLIDE_RIGHT",t.SLIDE_TOP="SLIDE_TOP",t.SLIDE_BOTTOM="SLIDE_BOTTOM"}(Wo||(Wo={}));let Go=class extends ct{constructor(){super(...arguments),this.transitionType=Wo.CENTER,this.duration=.5}render(){return z` <div class="${this.transitionType}"><slot></slot></div> `}};Go.styles=at`
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
  `,Vo([Z({type:Wo}),Yo("design:type",String)],Go.prototype,"transitionType",void 0),Vo([Z({type:Number}),Yo("design:type",Number)],Go.prototype,"duration",void 0),Go=Vo([J("nidoca-transition")],Go);var Xo=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let qo=class extends ct{constructor(){super(...arguments),this.show=!1}render(){return z`
      <nidoca-visible visibleType="${this.show?Ct.NORMAL:Ct.HIDE}">
        <div class="fullScreen opacScreen"></div>
        <div class="fullScreen wrapperOutside">
          <div class="wrapperInside">
            <!-- Dialog -->
            <nidoca-transition .transitionType="${Wo.SLIDE_CENTER}">
              <div class="dialogContainer">
                <slot></slot>
              </div>
            </nidoca-transition>
          </div>
        </div>
      </nidoca-visible>
    `}};qo.styles=at`
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
  `,Xo([Z({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],qo.prototype,"show",void 0),qo=Xo([J("nidoca-dialog")],qo)})();