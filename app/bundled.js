/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),o=new Map;class n{constructor(e,o){if(this._$cssResult$=!0,o!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=o.get(this.cssText);return e&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const i=(e,...o)=>{const i=1===e.length?e[0]:o.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new n(i,t)},r=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let o="";for(const t of e.cssRules)o+=t.cssText;return(e=>new n("string"==typeof e?e:e+"",t))(o)})(e):e;var a;const s=window.trustedTypes,c=s?s.emptyScript:"",l=window.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},d=(e,t)=>t!==e&&(t==t||e==e),h={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:d};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Eh(o,t);void 0!==n&&(this._$Eu.set(n,o),e.push(n))})),e}static createProperty(e,t=h){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eh(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{e?t.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),n=window.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ES(e,t,o=h){var n,i;const r=this.constructor._$Eh(e,o);if(void 0!==r&&!0===o.reflect){const a=(null!==(i=null===(n=o.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:p.toAttribute)(t,o.type);this._$Ei=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(e,t){var o,n,i;const r=this.constructor,a=r._$Eu.get(e);if(void 0!==a&&this._$Ei!==a){const e=r.getPropertyOptions(a),s=e.converter,c=null!==(i=null!==(n=null===(o=s)||void 0===o?void 0:o.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==i?i:p.fromAttribute;this._$Ei=a,this[a]=c(t,e.type),this._$Ei=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||d)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var y;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:u}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.2.0");const f=globalThis.trustedTypes,m=f?f.createPolicy("lit-html",{createHTML:e=>e}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,b="?"+g,v=`<${b}>`,x=document,w=(e="")=>x.createComment(e),$=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,E=e=>{var t;return R(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,T=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,A=/'/g,I=/"/g,j=/^(?:script|style|textarea)$/i,N=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),P=N(1),C=(N(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),D=new WeakMap,_=x.createTreeWalker(x,129,null,!1),B=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=O;for(let t=0;t<o;t++){const o=e[t];let s,c,l=-1,p=0;for(;p<o.length&&(a.lastIndex=p,c=a.exec(o),null!==c);)p=a.lastIndex,a===O?"!--"===c[1]?a=S:void 0!==c[1]?a=T:void 0!==c[2]?(j.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=k):void 0!==c[3]&&(a=k):a===k?">"===c[0]?(a=null!=i?i:O,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?k:'"'===c[3]?I:A):a===I||a===A?a=k:a===S||a===T?a=O:(a=k,i=void 0);const d=a===k&&e[t+1].startsWith("/>")?" ":"";r+=a===O?o+v:l>=0?(n.push(s),o.slice(0,l)+"$lit$"+o.slice(l)+g+d):o+g+(-2===l?(n.push(void 0),t):d)}const s=r+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(s):s,n]};class M{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,s=this.parts,[c,l]=B(e,t);if(this.el=M.createElement(c,o),_.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=_.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(g)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+"$lit$").split(g),t=/([.?@])?(.*)/.exec(o);s.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?K:"@"===t[1]?q:U})}else s.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(j.test(n.tagName)){const e=n.textContent.split(g),t=e.length-1;if(t>0){n.textContent=f?f.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],w()),_.nextNode(),s.push({type:2,index:++i});n.append(e[t],w())}}}else if(8===n.nodeType)if(n.data===b)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(g,e+1));)s.push({type:7,index:i}),e+=g.length-1}i++}}static createElement(e,t){const o=x.createElement("template");return o.innerHTML=e,o}}function z(e,t,o=e,n){var i,r,a,s;if(t===C)return t;let c=void 0!==n?null===(i=o._$Cl)||void 0===i?void 0:i[n]:o._$Cu;const l=$(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=c:o._$Cu=c),void 0!==c&&(t=z(e,c._$AS(e,t.values),c,n)),t}class H{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(o,!0);_.currentNode=i;let r=_.nextNode(),a=0,s=0,c=n[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new W(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new F(r,this,e)),this.v.push(t),c=n[++s]}a!==(null==c?void 0:c.index)&&(r=_.nextNode(),a++)}return i}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class W{constructor(e,t,o,n){var i;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cg=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=z(this,e,t),$(e)?e===L||null==e||""===e?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==C&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):E(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==L&&$(this._$AH)?this._$AA.nextSibling.data=e:this.S(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=M.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.m(o);else{const e=new H(i,this),t=e.p(this.options);e.m(o),this.S(t),this._$AH=e}}_$AC(e){let t=D.get(e.strings);return void 0===t&&D.set(e.strings,t=new M(e)),t}A(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new W(this.M(w()),this.M(w()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class U{constructor(e,t,o,n,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=z(this,e,t,0),r=!$(e)||e!==this._$AH&&e!==C,r&&(this._$AH=e);else{const n=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=z(this,n[o+a],t,a),s===C&&(s=this._$AH[a]),r||(r=!$(s)||s!==this._$AH[a]),s===L?e=L:e!==L&&(e+=(null!=s?s:"")+i[a+1]),this._$AH[a]=s}r&&!n&&this.k(e)}k(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends U{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===L?void 0:e}}const Y=f?f.emptyScript:"";class K extends U{constructor(){super(...arguments),this.type=4}k(e){e&&e!==L?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class q extends U{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=z(this,e,t,0))&&void 0!==o?o:L)===C)return;const n=this._$AH,i=e===L&&n!==L||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==L&&(n===L||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class F{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const V={P:"$lit$",V:g,L:b,I:1,N:B,R:H,D:E,j:z,H:W,O:U,F:K,B:q,W:G,Z:F},X=window.litHtmlPolyfillSupport;var Z,J;null==X||X(M,W),(null!==(y=globalThis.litHtmlVersions)&&void 0!==y?y:globalThis.litHtmlVersions=[]).push("2.1.1");class Q extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let a=r._$litPart$;if(void 0===a){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=a=new W(t.insertBefore(w(),e),e,void 0,null!=o?o:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return C}}Q.finalized=!0,Q._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Q});const ee=globalThis.litElementPolyfillSupport;null==ee||ee({LitElement:Q}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.1.1");class te{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){const e=new Cn;e.style.padding="var(--space-medium)",e.title="Ut enim ad minim veniam",e.summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",e.text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",this.registeredElementsMap.set("nidoca-article",P`${e}`);const t=new Oe;t.style.padding="var(--space-medium)",t.text="Typography",t.type="BODY1",t.textAlign="left",this.registeredElementsMap.set("nidoca-typography",P`${t}`);const o=new $o;o.src="http://nidoca.eu/img/DSC02586.jpg",o.width="100%",o.height="100%",this.registeredElementsMap.set("nidoca-img",P`${o}`);const n=new Eo;n.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",P`${n}`);const i=new pn;i.placeholder="Suche...",this.registeredElementsMap.set("nidoca-search-bar",P`${i}`);const r=new Tn;r.style.padding="var(--space-medium)",r.imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg",r.primaryText="Dominik Bruhn",r.description="Softwareentwickler",this.registeredElementsMap.set("nidoca-avatar",P`${r}`);const a=new He;a.style.padding="var(--space-big)",this.registeredElementsMap.set("nidoca-progress",P`${a}`);const s=new ho;s.style.padding="var(--space-big)",s.icon="home",s.primaryText="Home Icon",s.clickable=!0,s.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",P`${s}`);const c=new Co;c.selectionMode=!0,c.selected=!0,c.primaryText="List Item",c.secondaryText="List Item Secondary Text",this.registeredElementsMap.set("nidoca-list-item",P`${c}`),(new _o).appendChild(c.cloneNode(!0)),this.registeredElementsMap.set("nidoca-list",P`<nidoca-list selectionMode stlye="padding:var(--space-big);"
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
      ></nidoca-list>`),this._registeredElementsMap.set("nidoca-menu",P` <nidoca-menu>
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"> </nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"> </nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"> </nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"> </nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"> </nidoca-menu-item>
      </nidoca-menu>`)}static getUniqueInstance(){return te.uniqueInstance||(te.uniqueInstance=new te),te.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const e=[];for(const t of this.registeredElementsMap.keys())e.push(t);return e}registerElementName(e){console.log(`register element: ${e}`);const t=document.createElement(e);this.registeredElementsMap.set(e,P`${t}`)}}class oe{}oe.PRIMARY="primary",oe.SECONDARY="secondary",oe.SURFACE="surface",oe.BACKGROUND="background";const ne=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),ie=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function re(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):ie(e,t)}function ae(e,t){return(({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}})({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var se;null===(se=window.HTMLSlotElement)||void 0===se||se.prototype.assignedElements;var ce,le,pe,de=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},he=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.NONE="NONE",e.ALL="ALL",e.ALL_ROUND="ALL_ROUND",e.HORIZONTAL="HORIZONTAL",e.VERTICAL="VERTICAL",e.LEFT="LEFT",e.RIGHT="RIGHT",e.TOP="TOP",e.BOTTOM="BOTTOM",e.BOTTOM_SELECTED="BOTTOM_SELECTED",e.FULL_WIDTH="FULL_WIDTH",e.FULL_HEIGHT="FULL_HEIGHT"}(le||(le={})),function(e){e.NONE="NONE",e.THIN="THIN",e.MEDIUM="MEDIUM",e.THICK="THICK"}(pe||(pe={}));let ue=class extends Q{constructor(){super(...arguments),this.theme=oe.SURFACE,this.borderProperties=[le.ALL],this.borderSize=pe.THIN}render(){return P`
      <style>
        .BORDER {
          border-color: var(--app-color-${this.theme}-background);
        }
        .BOTTOM_SELECTED:focus-within {
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>

      <slot class="${this.toBorderPropertiesString(this.borderProperties)} ${this.borderSize}"></slot>
    `}toBorderPropertiesString(e){let t="BORDER";return e.forEach((e=>{t=t.concat(" ").concat(e)})),t}};ue.styles=i`
    :host,
    slot {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
      clear: none;
      display: inline-block
    }

    slot {
      display: inline-block;
      width:100%;
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
  `,de([re({type:oe,converter:String}),he("design:type","function"==typeof(ce=void 0!==oe&&oe)?ce:Object)],ue.prototype,"theme",void 0),de([re({type:le,converter:Array}),he("design:type",Array)],ue.prototype,"borderProperties",void 0),de([re({type:pe,converter:String}),he("design:type",String)],ue.prototype,"borderSize",void 0),ue=de([ne("nidoca-border")],ue);var ye=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},fe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let me=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return P`
      <div class="ACCORDION_ITEM">
        <nidoca-border
          .borderProperties="${[le.BOTTOM,le.LEFT,le.RIGHT,le.FULL_WIDTH]}"
        >
          <div
            class="ACCORDION_HEADER"
            @click="${()=>this.toggle()}"
            style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;align-content:center;"
          >
            <nidoca-layout-spacer left="var(--space-medium)">
              <nidoca-typography text="${this.header}"></nidoca-typography>
            </nidoca-layout-spacer>
            <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
          </div>
          ${this.opened?P` <slot></slot>`:P``}
        </nidoca-border>
      </div>
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};me.styles=i`
    .ACCORDION_HEADER {
      cursor: pointer;
    }
  `,ye([re({type:String}),fe("design:type",String)],me.prototype,"header",void 0),ye([re({type:Boolean}),fe("design:type",Boolean)],me.prototype,"opened",void 0),me=ye([ne("nidoca-accordion-item")],me);var ge,be=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ve=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.SINGLE="SINGLE",e.MULTI="MULTI"}(ge||(ge={}));let xe=class extends Q{constructor(){super(...arguments),this.accordionType=ge.SINGLE}render(){return P`
      <nidoca-border
        .borderProperties="${[le.TOP,le.FULL_WIDTH]}"
        @nidoca-event-accordion-item-clicked="${e=>this.accordionSwitched(e)}"
      >
        <slot id="accordionSlot"></slot>
      </nidoca-border>
    `}accordionSwitched(e){const t=e.detail;switch(this.accordionType){case ge.SINGLE:if(null!=this.accordionSlot){const e=this.accordionSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof me&&n!=t&&(n.opened=!1)}}case ge.MULTI:}e.stopPropagation()}};xe.styles=i``,be([re({type:ge}),ve("design:type",String)],xe.prototype,"accordionType",void 0),be([ae("#accordionSlot"),ve("design:type",Object)],xe.prototype,"accordionSlot",void 0),xe=be([ne("nidoca-accordion")],xe);var we,$e,Re=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ee=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6",e.SUBTITLE1="SUBTITLE1",e.SUBTITLE2="SUBTITLE2",e.BODY1="BODY1",e.BODY2="BODY2",e.BUTTON="BUTTON",e.CAPTION="CAPTION",e.OVERLINE="OVERLINE"}(we||(we={})),function(e){e.JUSTIFY="text-align:justify;",e.JUSTIFY_ALL="text-align:justify-all;",e.LEFT="text-align: left;",e.RIGHT="text-align: right;",e.CENTER="text-align: center;",e.START="text-align: start;",e.END="text-align: end;",e.MATCH_PARENT="text-align: match-parent;",e.INHERIT="text-align: inherit;",e.INITIAL="text-align: initial;",e.UNSET="text-align: unset;"}($e||($e={}));let Oe=class extends Q{constructor(){super(...arguments),this.type=we.BODY1,this.textAlign=$e.START,this.text=""}render(){return P` <span class="TYPOGRAPHY ${this.type}" style="${this.textAlign}">${this.text}<slot></slot></span> `}};Oe.styles=i`
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
  `,Re([re({type:we,converter:String}),Ee("design:type",String)],Oe.prototype,"type",void 0),Re([re({type:$e,converter:String}),Ee("design:type",String)],Oe.prototype,"textAlign",void 0),Re([re({type:String}),Ee("design:type",String)],Oe.prototype,"text",void 0),Oe=Re([ne("nidoca-typography")],Oe);var Se,Te=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ke=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e[e.CURRENT=0]="CURRENT",e[e.COMPLETED=1]="COMPLETED",e[e.OPEN=2]="OPEN",e[e.FINISH=3]="FINISH"}(Se||(Se={}));let Ae=class extends Q{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return P`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${mo.NONE}"
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

          ${this.isLast?P``:P`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-typography
          style="width:48px;"
          .type="${we.OVERLINE}"
          textAlign="${$e.CENTER}"
          text="${this.primaryText}"
          ><slot></slot>
        </nidoca-typography>
      </div>
    `}determineBackgroundColor(e){return e==Se.COMPLETED?"var(--app-color-primary)":e==Se.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(e){return e==Se.FINISH?"var(--app-color-success)":e==Se.COMPLETED?"var(--mdc-theme-on-primary)":e==Se.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const e=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}};Ae.styles=i`
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
  `,Te([re({type:String}),ke("design:type",String)],Ae.prototype,"icon",void 0),Te([re({type:String}),ke("design:type",String)],Ae.prototype,"primaryText",void 0),Te([re({type:Number}),ke("design:type",Object)],Ae.prototype,"state",void 0),Te([re({type:Boolean}),ke("design:type",Boolean)],Ae.prototype,"isLast",void 0),Ae=Te([ne("nidoca-wizard-step")],Ae);var Ie=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let je=class extends Q{render(){return P`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();let n=0;for(let e=0;e<o.length;e++){const t=o[e];t instanceof Ae&&(t.index=e,t.state==Se.CURRENT&&(n=e),t.index==o.length-1&&(t.isLast=!0))}this.changeState(n)}stepClicked(e){const t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){const t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Ae&&void 0!==n.index&&(n.index<e?n.state=Se.COMPLETED:n.index==e?n.state=Se.CURRENT:n.state=Se.OPEN)}}}};je.styles=i``,Ie([ae("#wizardSlot"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],je.prototype,"wizardSlot",void 0),je=Ie([ne("nidoca-wizard")],je);var Ne=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Pe=class extends Q{constructor(){super(...arguments),this.clickable=!0}render(){return P`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Pe.styles=i`
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
  `,Ne([re({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Pe.prototype,"clickable",void 0),Pe=Ne([ne("nidoca-chip")],Pe);var Ce=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Le=class extends Q{constructor(){super(...arguments),this.code=""}render(){return P`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};Le.styles=i`
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
  `,Ce([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Le.prototype,"code",void 0),Le=Ce([ne("nidoca-code")],Le);var De=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},_e=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Be=class extends Q{constructor(){super(),this.show=!1,addEventListener("click",(e=>{var t;const o=null===(t=this.associatedElement)||void 0===t?void 0:t.getBoundingClientRect();o&&(o.top>e.clientY||o.right<e.clientX||o.left>e.clientX||o.bottom<e.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?P`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:P``}calculatePositionStyle(e){let t="";if(e){const o=e.getBoundingClientRect();o.right>window.innerWidth/2?t+=`right:${window.innerWidth-o.right}px;`:t+=`left:${o.left}px;`,o.top>window.innerHeight/2?t+=`bottom:${o.height+window.innerHeight-o.top}px;`:t+=`top:${o.bottom}px;`}return t}};Be.styles=i`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,De([re({type:Boolean}),_e("design:type",Boolean)],Be.prototype,"show",void 0),De([re({type:Object}),_e("design:type",Object)],Be.prototype,"associatedElement",void 0),Be=De([ne("nidoca-elevation"),_e("design:paramtypes",[])],Be);var Me=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};class ze{}ze.PROGRESS="PROGRESS",ze.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let He=class extends Q{constructor(){super(...arguments),this.progressType=ze.PROGRESS_CIRCULAR}render(){return P` <progress .class="${this.progressType}"></progress> `}};He.styles=i`
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
  `,Me([re({type:ze}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",ze)],He.prototype,"progressType",void 0),He=Me([ne("nidoca-progress")],He);var We,Ue,Ge=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ye=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.CONTAINED="CONTAINED",e.OUTLINED="OUTLINED",e.TEXT="TEXT"}(Ue||(Ue={}));let Ke=class extends Q{constructor(){super(...arguments),this.theme=oe.PRIMARY,this.buttonType=Ue.CONTAINED,this.leadingIcon="",this.text=""}render(){return P`
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
          .theme="${this.theme}"
          borderSize="${this.buttonType==Ue.TEXT?pe.NONE:pe.THIN}"
        >
          <div
            class="BUTTON ${this.buttonType}"
            @click="${()=>{this.clicked()}}"
            style="display:flex;flex-wrap:nowrap;align-items:center;justify-content:center;"
          >
            ${this.leadingIcon?P`<nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>`:P``}
            ${this.leadingIcon||this.buttonType==Ue.TEXT?P``:P`<nidoca-layout-spacer> </nidoca-layout-spacer>`}

            <nidoca-layout-spacer
              class="fullWidth"
              left="var(--space-big)"
              right="var(--space-big)"
              top="var(--space-big)"
              bottom="var(--space-big)"
            >
              <nidoca-typography text="${this.text}" type="${we.BUTTON}">
                <slot></slot>
              </nidoca-typography>
            </nidoca-layout-spacer>

            ${this.buttonType!=Ue.TEXT?P`<nidoca-layout-spacer></nidoca-layout-spacer>`:P``}
          </div>
        </nidoca-border>
      </nidoca-ripple>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ke.styles=i`
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
  `,Ge([re({type:oe,converter:String}),Ye("design:type","function"==typeof(We=void 0!==oe&&oe)?We:Object)],Ke.prototype,"theme",void 0),Ge([re({type:Ue,converter:String}),Ye("design:type",String)],Ke.prototype,"buttonType",void 0),Ge([re({type:String}),Ye("design:type",String)],Ke.prototype,"leadingIcon",void 0),Ge([re({type:String}),Ye("design:type",String)],Ke.prototype,"text",void 0),Ke=Ge([ne("nidoca-button")],Ke);var qe,Fe=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};!function(e){e.NONE="NONE",e.KEY_LIGHT="KEY_LIGHT",e.AMBIENT_LIGHT="AMBIENT_LIGHT",e.COMBINED="COMBINED"}(qe||(qe={}));let Ve=class extends Q{constructor(){super(...arguments),this.shadowType=qe.KEY_LIGHT}render(){return P` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `}};Ve.styles=i`

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
  `,Fe([re({type:qe}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Ve.prototype,"shadowType",void 0),Ve=Fe([ne("nidoca-box-shadow")],Ve);var Xe,Ze,Je=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Qe=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.NORMAL="NORMAL",e.CLEAR="CLEAR"}(Ze||(Ze={}));let et=class extends Q{constructor(){super(...arguments),this.label="",this.showLabel=!0,this.errorText="",this.infoText="",this.warningText="",this.theme=oe.SURFACE,this.inputframeMode=Ze.NORMAL,this.trailingIcon=""}render(){return this.inputframeMode==Ze.NORMAL?P`
          <style>
            .container {
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
            class="container"
            .theme="${this.theme}"
            .borderSize="${pe.MEDIUM}"
            .borderProperties="${[le.FULL_WIDTH,le.BOTTOM_SELECTED,le.BOTTOM]}"
          >
            <div style="display:flex;align-content:center;align-items:center;flex-direction:row;">
              ${this.trailingIcon?P`<nidoca-layout-spacer left="var(--space-medium)"
                    ><nidoca-icon style="font-size: var(--icon-size-big);" icon="${this.trailingIcon}"></nidoca-icon
                  ></nidoca-layout-spacer>`:P``}
              <nidoca-layout-spacer left="var(--space-medium)" style="width:100%;">
                <div style="display:flex;align-content:center;flex-direction:column;">
                  ${this.showLabel?P`
                        <nidoca-typography
                          style="flex-basis:100%;"
                          class="label"
                          .type="${we.CAPTION}"
                          text="${this.label}"
                        ></nidoca-typography>
                      `:P``}
                  <slot style="flex-basis:100%;" id="slotElement"></slot>
                </div>
              </nidoca-layout-spacer>
            </div>
          </nidoca-border>

          ${this.infoText?P` <nidoca-typography
                .type="${we.BODY1}"
                text="${this.infoText}"
              ></nidoca-typography>`:P``}
          ${this.warningText?P` <nidoca-typography
                style="color:var(--app-color-warning-background)"
                .type="${we.BODY1}"
                text="${this.warningText}"
              ></nidoca-typography>`:P``}
          ${this.errorText?P` <nidoca-typography
                style="color:var(--app-color-error-background)"
                .type="${we.BODY1}"
                text="${this.errorText}"
              ></nidoca-typography>`:P``}
        `:P` <slot id="slotElement"></slot>`}setShowLabel(){if(this.slotElement){const e=this.slotElement.assignedElements();for(let t=0;t<e.length;t++){const o=e[t];("SELECT"===o.tagName||"date"===o.getAttribute("type")||"datetime-local"===o.getAttribute("type")||"month"===o.getAttribute("type")||"time"===o.getAttribute("type")||"week"===o.getAttribute("type")||o instanceof HTMLInputElement)&&(this.showLabel=!0)}}}};et.styles=i`
    :host,
    slot,
    .container {
      display: block;
      width: 100%;
    }
  `,Je([re({type:String}),Qe("design:type",String)],et.prototype,"label",void 0),Je([re({type:Boolean}),Qe("design:type",Boolean)],et.prototype,"showLabel",void 0),Je([re({type:String}),Qe("design:type",String)],et.prototype,"errorText",void 0),Je([re({type:String}),Qe("design:type",String)],et.prototype,"infoText",void 0),Je([re({type:String}),Qe("design:type",String)],et.prototype,"warningText",void 0),Je([re({type:Object}),Qe("design:type","function"==typeof(Xe=void 0!==oe&&oe)?Xe:Object)],et.prototype,"theme",void 0),Je([re({type:String}),Qe("design:type",String)],et.prototype,"inputframeMode",void 0),Je([re({type:String}),Qe("design:type",String)],et.prototype,"trailingIcon",void 0),Je([ae("#slotElement"),Qe("design:type",Object)],et.prototype,"slotElement",void 0),et=Je([ne("nidoca-form-inputframe")],et);class tt extends Q{}var ot=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},nt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let it=class extends Q{constructor(){super(),this.autocomplete=!0,null==this.getAttribute("style")&&this.setAttribute("style","width:100%;")}render(){return P`
      <form
        class="container"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        .?autocomplete="${this.autocomplete}"
      >
        <slot id="slotElement"></slot>
      </form>
    `}getInputElements(e){if(null==e)return[];const t=[],o=e.assignedElements({flatten:!0});for(let e=0;e<o.length;e++){const n=o[e];this.recursiveInputElementSearch(n,t)}return t}validate(){let e=!0;for(const t of this.getInputElements(this.slotElement))t.validate()||(e&&t.scrollIntoView(!0),e=!1);return e}getOutputData(){const e=new FormData,t={};for(const o of this.getInputElements(this.slotElement)){const n=o.getOutputData();t[n.key]=n.value,e.append(n.key,n.value)}const o={};return o.jsonObject=t,o.formData=e,o}formButtonClicked(e){console.log("formButton clicked: "+e.detail),"submitButton"===e.detail&&this.dispatchEvent(new CustomEvent("nidoca-event-form-submit-button-clicked",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}recursiveInputElementSearch(e,t){if(e instanceof tt)t.push(e);else if(e.hasChildNodes()){const o=e.children;for(const e of[].slice.call(o))this.recursiveInputElementSearch(e,t)}}};it.styles=i`
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
  `,ot([re({type:Boolean}),nt("design:type",Boolean)],it.prototype,"autocomplete",void 0),ot([ae("#slotElement"),nt("design:type",Object)],it.prototype,"slotElement",void 0),it=ot([ne("nidoca-form"),nt("design:paramtypes",[])],it);const rt=e=>(...t)=>({_$litDirective$:e,values:t});class at{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{H:st}=V,ct=()=>document.createComment(""),lt=(e,t,o)=>{var n;const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(ct(),r),n=i.insertBefore(ct(),r);o=new st(t,n,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,s=a!==e;if(s){let t;null===(n=o._$AQ)||void 0===n||n.call(o,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||s){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},pt=(e,t,o=e)=>(e._$AI(t,o),e),dt={},ht=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let o=e._$AA;const n=e._$AB.nextSibling;for(;o!==n;){const e=o.nextSibling;o.remove(),o=e}},ut=(e,t,o)=>{const n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},yt=rt(class extends at{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const i=[],r=[];let a=0;for(const t of e)i[a]=n?n(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){var i;const r=e._$AH,{values:a,keys:s}=this.dt(t,o,n);if(!Array.isArray(r))return this.at=s,a;const c=null!==(i=this.at)&&void 0!==i?i:this.at=[],l=[];let p,d,h=0,u=r.length-1,y=0,f=a.length-1;for(;h<=u&&y<=f;)if(null===r[h])h++;else if(null===r[u])u--;else if(c[h]===s[y])l[y]=pt(r[h],a[y]),h++,y++;else if(c[u]===s[f])l[f]=pt(r[u],a[f]),u--,f--;else if(c[h]===s[f])l[f]=pt(r[h],a[f]),lt(e,l[f+1],r[h]),h++,f--;else if(c[u]===s[y])l[y]=pt(r[u],a[y]),lt(e,r[h],r[u]),u--,y++;else if(void 0===p&&(p=ut(s,y,f),d=ut(c,h,u)),p.has(c[h]))if(p.has(c[u])){const t=d.get(s[y]),o=void 0!==t?r[t]:null;if(null===o){const t=lt(e,r[h]);pt(t,a[y]),l[y]=t}else l[y]=pt(o,a[y]),lt(e,r[h],o),r[t]=null;y++}else ht(r[u]),u--;else ht(r[h]),h++;for(;y<=f;){const t=lt(e,l[f+1]);pt(t,a[y]),l[y++]=t}for(;h<=u;){const e=r[h++];null!==e&&ht(e)}return this.at=s,((e,t=dt)=>{e._$AH=t})(e,l),C}}),ft={},mt=rt(class extends at{constructor(){super(...arguments),this.nt=ft}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return C}else if(this.nt===t)return C;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});var gt,bt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},vt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let xt=class extends tt{constructor(){super(...arguments),this.value="",this.options=[],this.name="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.required=!0,this.multiple=!1,this.size=1,this.inputframeMode=Ze.NORMAL}render(){return P`
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
          ${mt([this.value,this.options],(()=>P`
              ${yt(this.options,(e=>null==e?P` <option></option>`:this.isSelectedOption(e)?P` <option value="${e.key}" selected>${e.value}</option> `:P` <option value="${e.key}">${e.value}</option> `))}
            `))}
        </select>
      </nidoca-form-inputframe>
    `}getOutputData(){let e=this.value;if(null!=this.selectElement&&this.multiple){e=[];for(let t=0,o=this.selectElement.options.length;t<o;t++)this.selectElement.options[t].selected&&e.push(this.options[t].key)}else null!=this.selectElement&&(e=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:e}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(e){if(this.multiple){let t=!1;for(const o of this.value)if(t=e.key===o,t)return!0}return this.value===e.key}static enumToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),Object.keys(e).forEach((t=>{o.push({key:t,value:e[t]})})),o}static stringArrayToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),e.forEach((e=>{o.push({key:e,value:e})})),o}static toComboboxOptions(e=null,t=null){if(null==e)return[];const o=[];return Object.values(e).forEach((n=>{let i=String(Object.keys(e)[Object.values(e).indexOf(n)]);t&&(i=i.concat(t)),o.push({key:n,value:i})})),o}};xt.styles=i`
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
  `,bt([re(),vt("design:type",Object)],xt.prototype,"value",void 0),bt([re({type:Array}),vt("design:type",Array)],xt.prototype,"options",void 0),bt([re({type:String}),vt("design:type",String)],xt.prototype,"name",void 0),bt([re({type:String}),vt("design:type",String)],xt.prototype,"label",void 0),bt([re({type:String}),vt("design:type",String)],xt.prototype,"errorText",void 0),bt([re({type:String}),vt("design:type",String)],xt.prototype,"infoText",void 0),bt([re({type:String}),vt("design:type",String)],xt.prototype,"warningText",void 0),bt([re({type:Boolean}),vt("design:type",Boolean)],xt.prototype,"required",void 0),bt([re({type:Boolean}),vt("design:type",Boolean)],xt.prototype,"multiple",void 0),bt([re({type:Number}),vt("design:type",Number)],xt.prototype,"size",void 0),bt([re({type:String}),vt("design:type","function"==typeof(gt=void 0!==Ze&&Ze)?gt:Object)],xt.prototype,"inputframeMode",void 0),bt([ae("#selectElement"),vt("design:type",Object)],xt.prototype,"selectElement",void 0),xt=bt([ne("nidoca-form-combobox")],xt);const wt=e=>null!=e?e:L;var $t,Rt,Et=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ot=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.COLOR="color",e.EMAIL="email",e.HIDDEN="hidden",e.NUMBER="number",e.PASSWORD="password",e.TEL="tel",e.TEXT="text",e.SEARCH="search",e.URL="url"}(Rt||(Rt={}));let St=class extends tt{constructor(){super(...arguments),this.type=Rt.TEXT,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.errorText="",this.infoText="",this.warningText="",this.trailingIcon="",this.inputframeMode=Ze.NORMAL}render(){return this.type==Rt.HIDDEN?P`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:P`
          <nidoca-form-inputframe
            label="${this.label}"
            .errorText="${this.errorText}"
            .infoText="${this.infoText}"
            .warningText="${this.warningText}"
            .inputframeMode="${this.inputframeMode}"
            trailingIcon="${this.trailingIcon}"
          >
            <input
              id="inputElement"
              name="${this.name}"
              .type="${this.type}"
              value="${this.value}"
              placeholder="${this.placeholder?this.placeholder:this.label}"
              size="${wt(this.size)}"
              minlength="${wt(this.minlength)}"
              maxlength="${wt(this.maxlength)}"
              min="${wt(this.min)}"
              max="${wt(this.max)}"
              step="${wt(this.step)}"
              ?required="${this.required}"
              ?disabled="${this.disabled}"
              ?checked="${this.checked}"
            />
          </nidoca-form-inputframe>
        `}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};St.styles=i`
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
  `,Et([re({type:String}),Ot("design:type",String)],St.prototype,"type",void 0),Et([re({type:String}),Ot("design:type",String)],St.prototype,"name",void 0),Et([re(),Ot("design:type",Object)],St.prototype,"value",void 0),Et([re({type:String}),Ot("design:type",String)],St.prototype,"label",void 0),Et([re({type:Boolean}),Ot("design:type",Boolean)],St.prototype,"required",void 0),Et([re({type:String}),Ot("design:type",String)],St.prototype,"placeholder",void 0),Et([re({type:Boolean}),Ot("design:type",Boolean)],St.prototype,"disabled",void 0),Et([re({type:Boolean}),Ot("design:type",Boolean)],St.prototype,"checked",void 0),Et([re({type:Number}),Ot("design:type",Object)],St.prototype,"maxlength",void 0),Et([re({type:Number}),Ot("design:type",Object)],St.prototype,"minlength",void 0),Et([re({type:Number}),Ot("design:type",Object)],St.prototype,"min",void 0),Et([re({type:Number}),Ot("design:type",Object)],St.prototype,"max",void 0),Et([re({type:Number}),Ot("design:type",Object)],St.prototype,"step",void 0),Et([re({type:Number}),Ot("design:type",Object)],St.prototype,"size",void 0),Et([re({type:String}),Ot("design:type",String)],St.prototype,"errorText",void 0),Et([re({type:String}),Ot("design:type",String)],St.prototype,"infoText",void 0),Et([re({type:String}),Ot("design:type",String)],St.prototype,"warningText",void 0),Et([re({type:String}),Ot("design:type",String)],St.prototype,"trailingIcon",void 0),Et([re({type:String}),Ot("design:type","function"==typeof($t=void 0!==Ze&&Ze)?$t:Object)],St.prototype,"inputframeMode",void 0),Et([ae("#inputElement"),Ot("design:type",Object)],St.prototype,"inputElement",void 0),St=Et([ne("nidoca-form-text")],St);var Tt,kt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},At=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let It=class extends tt{constructor(){super(...arguments),this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=Ze.NORMAL}render(){return P`
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
    `}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};It.styles=i`
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
  `,kt([re({type:String}),At("design:type",String)],It.prototype,"name",void 0),kt([re(),At("design:type",Object)],It.prototype,"value",void 0),kt([re({type:String}),At("design:type",String)],It.prototype,"label",void 0),kt([re({type:Boolean}),At("design:type",Boolean)],It.prototype,"required",void 0),kt([re({type:String}),At("design:type",String)],It.prototype,"placeholder",void 0),kt([re({type:Boolean}),At("design:type",Boolean)],It.prototype,"disabled",void 0),kt([re({type:Number}),At("design:type",Number)],It.prototype,"rows",void 0),kt([re({type:String}),At("design:type",String)],It.prototype,"errorText",void 0),kt([re({type:String}),At("design:type",String)],It.prototype,"infoText",void 0),kt([re({type:String}),At("design:type",String)],It.prototype,"warningText",void 0),kt([re({type:String}),At("design:type","function"==typeof(Tt=void 0!==Ze&&Ze)?Tt:Object)],It.prototype,"inputframeMode",void 0),kt([ae("#inputElement"),At("design:type",Object)],It.prototype,"inputElement",void 0),It=kt([ne("nidoca-form-textarea")],It);var jt,Nt,Pt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ct=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.DATE="date",e.DATETIME_LOCAL="datetime-local",e.MONTH="month",e.TIME="time",e.WEEK="week"}(Nt||(Nt={}));let Lt=class extends tt{constructor(){super(...arguments),this.type=Nt.DATE,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.multiple=!1,this.errorText="",this.infoText="",this.warningText="",this.inputframeMode=Ze.NORMAL}render(){return P`
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
          size="${wt(this.size)}"
          minlength="${wt(this.minlength)}"
          maxlength="${wt(this.maxlength)}"
          min="${wt(this.min)}"
          max="${wt(this.max)}"
          step="${wt(this.step)}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?multiple="${this.multiple}"
        />
      </nidoca-form-inputframe>
    `}getOutputData(){var e;return{key:this.name,value:null===(e=this.inputElement)||void 0===e?void 0:e.value}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Lt.styles=i`
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
  `,Pt([re(),Ct("design:type",String)],Lt.prototype,"type",void 0),Pt([re({type:String}),Ct("design:type",String)],Lt.prototype,"name",void 0),Pt([re({type:String}),Ct("design:type",String)],Lt.prototype,"value",void 0),Pt([re({type:String}),Ct("design:type",String)],Lt.prototype,"label",void 0),Pt([re({type:Boolean}),Ct("design:type",Boolean)],Lt.prototype,"required",void 0),Pt([re({type:String}),Ct("design:type",String)],Lt.prototype,"placeholder",void 0),Pt([re({type:Boolean}),Ct("design:type",Boolean)],Lt.prototype,"disabled",void 0),Pt([re({type:Boolean}),Ct("design:type",Boolean)],Lt.prototype,"checked",void 0),Pt([re({type:Boolean}),Ct("design:type",Boolean)],Lt.prototype,"multiple",void 0),Pt([re({type:Number}),Ct("design:type",Object)],Lt.prototype,"maxlength",void 0),Pt([re({type:Number}),Ct("design:type",Object)],Lt.prototype,"minlength",void 0),Pt([re({type:Number}),Ct("design:type",Object)],Lt.prototype,"min",void 0),Pt([re({type:Number}),Ct("design:type",Object)],Lt.prototype,"max",void 0),Pt([re({type:Number}),Ct("design:type",Object)],Lt.prototype,"step",void 0),Pt([re({type:Number}),Ct("design:type",Object)],Lt.prototype,"size",void 0),Pt([re({type:String}),Ct("design:type",String)],Lt.prototype,"errorText",void 0),Pt([re({type:String}),Ct("design:type",String)],Lt.prototype,"infoText",void 0),Pt([re({type:String}),Ct("design:type",String)],Lt.prototype,"warningText",void 0),Pt([ae("#inputElement"),Ct("design:type",Object)],Lt.prototype,"inputElement",void 0),Pt([re({type:String}),Ct("design:type","function"==typeof(jt=void 0!==Ze&&Ze)?jt:Object)],Lt.prototype,"inputframeMode",void 0),Lt=Pt([ne("nidoca-form-date")],Lt);var Dt,_t=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Bt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Mt=class extends tt{constructor(){super(...arguments),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=oe.PRIMARY}render(){return P`
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
        <nidoca-typography .type="${we.SUBTITLE1}" text="${this.label}">
          <slot></slot>
        </nidoca-typography>

        ${this.infoText.length>0?P` <nidoca-typography
              .type="${we.SUBTITLE2}"
              text="${this.infoText}"
            ></nidoca-typography>`:P``}

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

      ${this.warningText?P` <nidoca-typography
            style="color:var(--app-color-warning-background)"
            .type="${we.BODY1}"
            text="${this.warningText}"
          ></nidoca-typography>`:P``}
      ${this.errorText?P` <nidoca-typography
            style="color:var(--app-color-error-background)"
            .type="${we.BODY1}"
            text="${this.errorText}"
          ></nidoca-typography>`:P``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Mt.styles=i`
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
  `,_t([re({type:String}),Bt("design:type",String)],Mt.prototype,"name",void 0),_t([re({type:String}),Bt("design:type",String)],Mt.prototype,"label",void 0),_t([re({type:String}),Bt("design:type",String)],Mt.prototype,"infoText",void 0),_t([re({type:String}),Bt("design:type",String)],Mt.prototype,"errorText",void 0),_t([re({type:String}),Bt("design:type",String)],Mt.prototype,"warningText",void 0),_t([re({type:Boolean}),Bt("design:type",Boolean)],Mt.prototype,"required",void 0),_t([re({type:Boolean}),Bt("design:type",Boolean)],Mt.prototype,"disabled",void 0),_t([re({type:Boolean}),Bt("design:type",Boolean)],Mt.prototype,"checked",void 0),_t([re({type:String}),Bt("design:type","function"==typeof(Dt=void 0!==oe&&oe)?Dt:Object)],Mt.prototype,"theme",void 0),_t([ae("#inputElement"),Bt("design:type",Object)],Mt.prototype,"inputElement",void 0),Mt=_t([ne("nidoca-form-switch")],Mt);var zt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ht=class extends Q{constructor(){super(...arguments),this.code=""}render(){return P`
         


      `}};Ht.styles=i`

   `,zt([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Ht.prototype,"code",void 0),Ht=zt([ne("nidoca-upload")],Ht);var Wt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ut=class extends Q{constructor(){super(...arguments),this.text=""}render(){return P`
      <div class="container">
        <nidoca-layout-spacer left="10px"></nidoca-layout-spacer>
        ${this.text?P`<nidoca-typography .type="${we.H5}">${this.text}</nidoca-typography>`:P``}
        <slot></slot>
      </div>
    `}};Ut.styles=i`
    .container {
      display: flex;
    }
  `,Wt([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Ut.prototype,"text",void 0),Ut=Wt([ne("nidoca-menu-area")],Ut);var Gt,Yt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Kt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.ITEM="item",e.SECTION="section"}(Gt||(Gt={}));let qt=class extends Q{constructor(){super(...arguments),this.text="",this.icon="",this.type=Gt.ITEM}render(){return P`
      <div class="container ${this.type}">
        ${this.icon?P` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-left:10px;padding-right:10px; font-size:24px;"
            ></nidoca-icon>`:P` <nidoca-layout-spacer left="10px" right="36px"></nidoca-layout-spacer>`}
        ${this.text?P`<nidoca-typography
              .type="${this.type==Gt.ITEM?we.BODY1:we.CAPTION}"
              >${this.text}</nidoca-typography
            >`:P``}
      </div>
    `}};qt.styles=i`
    .container {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
  `,Yt([re({type:String}),Kt("design:type",String)],qt.prototype,"text",void 0),Yt([re({type:String}),Kt("design:type",String)],qt.prototype,"icon",void 0),Yt([re({type:String}),Kt("design:type",String)],qt.prototype,"type",void 0),qt=Yt([ne("nidoca-menu-item")],qt);var Ft=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Vt=class extends Q{constructor(){super(...arguments),this.text=""}render(){return P` <slot></slot>`}};Vt.styles=i``,Ft([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Vt.prototype,"text",void 0),Vt=Ft([ne("nidoca-menu")],Vt);class Xt{constructor(e,t,o=10240){this.key=e,this.minWidth=t,this.maxWidth=o}static applyDevices(e,t){for(let o=0;o<t.length;o++)if(t[o]==this.getCurrentScreen())return e;return""}static getCurrentScreen(){let e=null;return[Xt.MOBILE,Xt.TABLET,Xt.DESKTOP].forEach((t=>{(null==t.minWidth||t.minWidth<window.innerWidth)&&(null==t.maxWidth||t.maxWidth>window.innerWidth)&&(e=t)})),e}asMediaStyle(e){let t="@media ";return this.minWidth&&(t=t.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(t=t.concat(" and "))),this.maxWidth&&(t=t.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),t=t.concat("{"),t=t.concat(e),t=t.concat("} "),t}}Xt.MOBILE=new Xt("MOBILE",0,640),Xt.TABLET=new Xt("TABLET",641,1007),Xt.DESKTOP=new Xt("DESKTOP",1008);var Zt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Jt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Qt=class extends Q{constructor(){super(...arguments),this.devices=[Xt.DESKTOP,Xt.TABLET,Xt.MOBILE],this.left="0",this.right="0",this.top="0",this.bottom="0"}render(){return P`
            <style>
                ${this.toStyle(this.devices,this.left,this.right,this.top,this.bottom)}
            </style>
            <span class="spacer">
        <slot></slot>
      </span>
        `}toStyle(e,t,o,n,i){let r=`padding-left:${t};padding-right:${o};padding-top:${n};padding-bottom:${i};`;r=".spacer {".concat(r).concat().concat("}");let a="";return e.forEach((e=>{a=a.concat(e.asMediaStyle(r))})),a}};Qt.styles=i`
    .spacer,
    ::slotted(.spacer) {
      box-sizing: border-box;
      display: block;
    }
  `,Zt([re({type:Array}),Jt("design:type",Array)],Qt.prototype,"devices",void 0),Zt([re({type:String}),Jt("design:type",String)],Qt.prototype,"left",void 0),Zt([re({type:String}),Jt("design:type",String)],Qt.prototype,"right",void 0),Zt([re({type:String}),Jt("design:type",String)],Qt.prototype,"top",void 0),Zt([re({type:String}),Jt("design:type",String)],Qt.prototype,"bottom",void 0),Qt=Zt([ne("nidoca-layout-spacer")],Qt);var eo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let to=class extends Q{render(){return P`<nidoca-border .borderProperties="${[le.BOTTOM]}">
      <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"> </slot
    ></nidoca-border>`}slotChanged(e){const t=e.target.assignedElements(),o=t.length;for(let e=0;e<o;e++){const n=t[e],i=Xt.getCurrentScreen();if(i)switch(i){case Xt.MOBILE:n.setAttribute("style","flex-basis:100%;");break;case Xt.TABLET:case Xt.DESKTOP:n.setAttribute("style","flex-basis:"+String(100/o)+"%;")}}}};to.styles=i`
    slot {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-content: center;
    }
  `,eo([ae("#slotElement"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],to.prototype,"slotElement",void 0),to=eo([ne("nidoca-layout-section")],to);var oo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},no=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let io=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return P`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(e,t,o,n,i,r){return"height:".concat(e).concat(";").concat("width:").concat(t).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(i).concat(";").concat("bottom:").concat(r).concat(";")}};io.styles=i`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,oo([re({type:String}),no("design:type",String)],io.prototype,"height",void 0),oo([re({type:String}),no("design:type",String)],io.prototype,"width",void 0),oo([re({type:String}),no("design:type",String)],io.prototype,"left",void 0),oo([re({type:String}),no("design:type",String)],io.prototype,"top",void 0),oo([re({type:String}),no("design:type",String)],io.prototype,"right",void 0),oo([re({type:String}),no("design:type",String)],io.prototype,"bottom",void 0),io=oo([ne("nidoca-layout-floating")],io);var ro,ao=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},so=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let co=class extends Q{constructor(){super(...arguments),this.width="",this.height="",this.minWidth="",this.minHeight="",this.contentWidth="",this.contentHeight="",this.devices=[Xt.DESKTOP,Xt.TABLET,Xt.MOBILE],this.theme=oe.BACKGROUND}updated(e){for(let t=0;t<this.devices.length;t++)if(this.devices[t]==Xt.getCurrentScreen()){e.has("width")&&""!=this.width&&(this.style.width=this.width),e.has("height")&&""!=this.height&&(this.style.height=this.height),e.has("minWidth")&&""!=this.minWidth&&(this.style.minWidth=this.minWidth),e.has("minHeight")&&""!=this.minHeight&&(this.style.minHeight=this.minHeight);break}super.updated(e)}render(){return P`
      <style>
        .container,
        ::slotted(.container) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="container">
        <div class="container" style="${this.applyDevices(this.contentWidth,this.contentHeight,this.devices)}">
          <slot></slot>
        </div>
      </div>
    `}applyDevices(e,t,o){for(let n=0;n<o.length;n++)if(o[n]==Xt.getCurrentScreen())return`${""!=e?"width:".concat(e).concat(";"):""}${""!=t?"height:".concat(t).concat(";"):""}`;return""}};co.styles=i`
    :host {
      display: block;
    }
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `,ao([re({type:String}),so("design:type",String)],co.prototype,"width",void 0),ao([re({type:String}),so("design:type",String)],co.prototype,"height",void 0),ao([re({type:String}),so("design:type",String)],co.prototype,"minWidth",void 0),ao([re({type:String}),so("design:type",String)],co.prototype,"minHeight",void 0),ao([re({type:String}),so("design:type",String)],co.prototype,"contentWidth",void 0),ao([re({type:String}),so("design:type",String)],co.prototype,"contentHeight",void 0),ao([re({type:Xt,converter:Array}),so("design:type",Array)],co.prototype,"devices",void 0),ao([re({type:oe,converter:String}),so("design:type","function"==typeof(ro=void 0!==oe&&oe)?ro:Object)],co.prototype,"theme",void 0),co=ao([ne("nidoca-layout-container")],co);var lo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},po=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ho=class extends Q{constructor(){super(),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText="",null==this.getAttribute("style")&&this.setAttribute("style","font-size: var(--icon-size); padding:var(--space-normal)")}render(){return P`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};ho.styles=i`
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
  `,lo([re({type:String}),po("design:type",String)],ho.prototype,"icon",void 0),lo([re({type:Boolean}),po("design:type",Boolean)],ho.prototype,"clickable",void 0),lo([re({type:Boolean}),po("design:type",Boolean)],ho.prototype,"deactivated",void 0),lo([re({type:String}),po("design:type",String)],ho.prototype,"primaryText",void 0),ho=lo([ne("nidoca-icon"),po("design:paramtypes",[])],ho);var uo,yo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},fo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class mo{}mo.NONE="NONE",mo.DEFAULT_SHADOW="DEFAULT_SHADOW",mo.SHADOW_1="SHADOW_1",mo.SHADOW_2="SHADOW_2",mo.SHADOW_3="SHADOW_3";let go=class extends Q{constructor(){super(...arguments),this.icon="",this.theme=oe.PRIMARY,this.shadowType=mo.DEFAULT_SHADOW,this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-normal)"}render(){return P`
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
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};go.styles=i`
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
  `,yo([re({type:String}),fo("design:type",String)],go.prototype,"icon",void 0),yo([re({type:Object}),fo("design:type","function"==typeof(uo=void 0!==oe&&oe)?uo:Object)],go.prototype,"theme",void 0),yo([re({type:Object}),fo("design:type",mo)],go.prototype,"shadowType",void 0),yo([re({type:Boolean}),fo("design:type",Boolean)],go.prototype,"clickable",void 0),yo([re({type:Boolean}),fo("design:type",Boolean)],go.prototype,"deactivated",void 0),yo([re({type:String}),fo("design:type",String)],go.prototype,"cssStyle",void 0),go=yo([ne("nidoca-icon-extended")],go);var bo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let vo=class extends Q{render(){return P`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(null!=this.rippleContainerElement){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);const t=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};vo.styles=i`
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
  `,bo([ae("#rippleContainer"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],vo.prototype,"rippleContainerElement",void 0),vo=bo([ne("nidoca-ripple")],vo);var xo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},wo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let $o=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%"}render(){return P`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};$o.styles=i`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,xo([re({type:String}),wo("design:type",String)],$o.prototype,"src",void 0),xo([re({type:String}),wo("design:type",String)],$o.prototype,"width",void 0),xo([re({type:String}),wo("design:type",String)],$o.prototype,"height",void 0),$o=xo([ne("nidoca-img")],$o);var Ro=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Eo=class extends Q{constructor(){super(...arguments),this.src=""}render(){return P`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Eo.styles=i`
  `,Ro([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Eo.prototype,"src",void 0),Eo=Ro([ne("nidoca-movie")],Eo);var Oo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},So=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let To=class extends Q{constructor(){super(...arguments),this.min=1,this.max=10,this.errorText="nidoca-captcha-wrong-value",this.numberOne=1,this.numberTwo=1}render(){return P`
      <nidoca-form-text
        id="inputfield"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        label="${"nidoca-captcha-label".concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        name="captcha"
        trailingIcon="create"
        type="${Rt.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(e){(e.has("min")||e.has("max"))&&this.generateNewNumber(),super.updated(e)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(e,t){return Math.random()*(t-e)+e}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const e=this.isValid();return e&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),e}};To.styles=i``,Oo([re({type:Number}),So("design:type",Number)],To.prototype,"min",void 0),Oo([re({type:Number}),So("design:type",Number)],To.prototype,"max",void 0),Oo([re({type:String}),So("design:type",String)],To.prototype,"errorText",void 0),Oo([ae("#inputfield"),So("design:type",Object)],To.prototype,"inputfield",void 0),To=Oo([ne("nidoca-captcha")],To);var ko,Ao=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Io=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.BLANK="_blank",e.SELF="_self",e.PARENT="_parent",e.TOP="_top"}(ko||(ko={}));let jo=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType=ko.SELF}render(){return P` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `}};jo.styles=i`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,Ao([re({type:String}),Io("design:type",String)],jo.prototype,"text",void 0),Ao([re({type:String}),Io("design:type",String)],jo.prototype,"href",void 0),Ao([re({type:String}),Io("design:type",String)],jo.prototype,"targetType",void 0),jo=Ao([ne("nidoca-link")],jo);var No=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Po=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Co=class extends Q{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null}update(e){super.update(e),null!=e.get("selectionMode")&&(this.selectionMode||(this.selected=!1))}render(){return P`
      <nidoca-ripple
        @mousedown="${()=>this.downAction()}"
        @mouseup="${()=>this.upAction()}"
        @pointerup="${()=>this.upAction()}"
        @pointerdown="${()=>this.downAction()}"
      >
        <div class="container">
          ${this.selectionMode?P`<nidoca-icon
                class="item"
                @click="${()=>this.switchSelected()}"
                icon="${this.selected?"check_box":"check_box_outline_blank"}"
              ></nidoca-icon>`:P`<span></span>`}
          <slot name="graphic" class="item"></slot>
          <div class="containerTypography ${this.selectionMode?"":"spaceLeft"}">
            ${this.primaryText?P`<nidoca-typography class="item" .type="${we.BODY1}"
                  >${this.primaryText}</nidoca-typography
                >`:P``}
            <slot></slot>
            ${this.secondaryText?P`<nidoca-typography class="item" .type="${we.SUBTITLE1}"
                  >${this.secondaryText}</nidoca-typography
                >`:P``}
            <slot name="secondary"></slot>
          </div>
          <slot name="meta" class="item"></slot>
        </div>
      </nidoca-ripple>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let e="";e=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};Co.styles=i`
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
  `,No([re({type:Boolean}),Po("design:type",Boolean)],Co.prototype,"selectionMode",void 0),No([re({type:Boolean}),Po("design:type",Boolean)],Co.prototype,"selected",void 0),No([re({type:String}),Po("design:type",String)],Co.prototype,"primaryText",void 0),No([re({type:String}),Po("design:type",String)],Co.prototype,"secondaryText",void 0),Co=No([ne("nidoca-list-item")],Co);var Lo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Do=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _o=class extends Q{constructor(){super(...arguments),this.selectionMode=!1}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"selectionMode"==t&&this.getItems().forEach((e=>{e.selectionMode=this.selectionMode}))}))}render(){return P`
      <slot
        @nidoca-event-list-item-unselect="${()=>{this.selectionMode=0===this.getSelectedItems().length}}"
        class="slotList"
        id="slotElement"
      ></slot>
    `}getItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Co&&e.push(n)}}return e}getSelectedItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Co&&n.selected&&e.push(n)}}return e}getSelectedIndexes(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();let o=0;for(let n=0;n<t.length;n++){const i=t[n];i instanceof Co&&(i.selected&&e.push(o),o++)}}return e}selectAll(){this.getItems().forEach((e=>{e.selected=!0}))}unselectAll(){this.getItems().forEach((e=>{e.selected=!1}))}};_o.styles=i`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Lo([re({type:Boolean}),Do("design:type",Boolean)],_o.prototype,"selectionMode",void 0),Lo([ae("#slotElement"),Do("design:type",Object)],_o.prototype,"slotElement",void 0),_o=Lo([ne("nidoca-list")],_o);var Bo,Mo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},zo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ho=class extends Q{constructor(){super(...arguments),this.theme=oe.PRIMARY,this.prominent=!1,this.cssStyle="height:60px;width:100%;position:relativ;"}render(){return P`
      <style>
        :host,
        slot {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div
        style="width:100%; display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between;align-content:space-around;"
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
      ${this.prominent?P`<slot class="prominent" name="prominent"></slot>`:P``}
    `}};Ho.styles=i`
    :host {
      display: block;
      width: 100%;
    }

    slot {
      display: flex;
      align-items: center;
    }

    .prominent {
      flex-basis: 100%;
      flex-grow: 3;
    }
  `,Mo([re({type:oe}),zo("design:type","function"==typeof(Bo=void 0!==oe&&oe)?Bo:Object)],Ho.prototype,"theme",void 0),Mo([re({type:Boolean}),zo("design:type",Boolean)],Ho.prototype,"prominent",void 0),Mo([re({type:String}),zo("design:type",String)],Ho.prototype,"cssStyle",void 0),Ho=Mo([ne("nidoca-top-app-bar")],Ho);var Wo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Uo=class extends Q{constructor(){super(...arguments),this.text=""}render(){return P`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-end;align-content:flex-start;"
      >
        <nidoca-layout-spacer style="flex-basis:100%;">
          <nidoca-typography .type="${we.H6}" text="${this.text}"></nidoca-typography>
        </nidoca-layout-spacer>
      </div>
    `}};Uo.styles=i``,Wo([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Uo.prototype,"text",void 0),Uo=Wo([ne("nidoca-list-section")],Uo);var Go=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Yo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ko=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new ho],["row 2",new ho]]}render(){return P`
      <div>
        <table>
          <thead>
            ${mt([this.headers],(()=>P` ${yt(this.headers,(e=>P` <th colspan="1" rowspan="1">${e}</th> `))} `))}
          </thead>
          <tbody>
            ${mt([this.rows],(()=>P`
                  ${yt(this.rows,(e=>P`
                        <tr>
                          ${yt(e,(e=>P` <td colspan="1" rowspan="1">${e}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Ko.styles=i`
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
  `,Go([re({type:Array}),Yo("design:type",Array)],Ko.prototype,"headers",void 0),Go([re({type:Array}),Yo("design:type",Array)],Ko.prototype,"rows",void 0),Ko=Go([ne("nidoca-table")],Ko);var qo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Fo=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?P`<slot></slot>`:P``}};Fo.styles=i``,qo([re({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Fo.prototype,"selected",void 0),Fo=qo([ne("nidoca-tab-content")],Fo);var Vo,Xo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Zo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Jo=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=oe.PRIMARY}render(){return P`
      <style>
        :host(.SELECTED) {
          border-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?P`
              <nidoca-typography
                .type="${we.OVERLINE}"
                text="${this.text}"
              ></nidoca-typography>
            `:P``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Jo.styles=i`
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
  `,Xo([re({type:Boolean}),Zo("design:type",Boolean)],Jo.prototype,"selected",void 0),Xo([re({type:String}),Zo("design:type",String)],Jo.prototype,"text",void 0),Xo([re({type:String}),Zo("design:type","function"==typeof(Vo=void 0!==oe&&oe)?Vo:Object)],Jo.prototype,"theme",void 0),Jo=Xo([ne("nidoca-tab")],Jo);var Qo,en=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},tn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let on=class extends Q{constructor(){super(...arguments),this.theme=oe.PRIMARY,this.tabIndex=0}render(){return P`
      <div class="container" @nidoca-event-tab-clicked="${e=>this.tabClicked(e)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this.tabIndexChanged()}update(e){super.update(e),null!=e.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const e=this.tabSlot.assignedElements(),t=100/e.length,o=e[this.tabIndex];for(let n=0;n<e.length;n++){const i=e[n];i instanceof Jo&&(i.theme=this.theme,i.style.width=String(t).concat("%"),i==o?(i.selected=!0,i.classList.add("SELECTED")):(i.selected=!1,i.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let e=0;if(null!=this.tabContentSlot){const t=this.tabContentSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Fo&&(this.tabIndex==e?n.selected=!0:n.selected=!1,e++)}}}tabClicked(e){const t=e.detail;this.changeTabIndex(t)}changeTabIndex(e){if(!e.selected&&null!=this.tabSlot){const t=this.tabSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];if(n instanceof Jo&&n==e){this.tabIndex=o;break}}}}};on.styles=i`
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
  `,en([ae("#tabSlot"),tn("design:type",Object)],on.prototype,"tabSlot",void 0),en([ae("#tabContentSlot"),tn("design:type",Object)],on.prototype,"tabContentSlot",void 0),en([re({type:String}),tn("design:type","function"==typeof(Qo=void 0!==oe&&oe)?Qo:Object)],on.prototype,"theme",void 0),en([re({type:Number}),tn("design:type",Number)],on.prototype,"tabIndex",void 0),on=en([ne("nidoca-tabs")],on);var nn,rn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},an=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let sn=class extends Q{constructor(){super(),this.theme=oe.PRIMARY,this.navigationClosed=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false")}updated(e){super.updated(e),new Promise((e=>requestAnimationFrame(e))).then((()=>{if(null!=this.headerElement){const e=this.headerElement.offsetHeight,t="top:".concat(String(e)).concat("px;"),o="padding-top:".concat(String(e)).concat("px;");console.debug("set header height to corresponding elements: %s",t),null!=this.sidebarElement&&this.sidebarElement.setAttribute("style",t),null!=this.contentElement&&this.contentElement.setAttribute("style",o)}}))}render(){return P`
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
    `}};sn.styles=i`

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
  `,rn([re({type:String}),an("design:type","function"==typeof(nn=void 0!==oe&&oe)?nn:Object)],sn.prototype,"theme",void 0),rn([re({type:Boolean}),an("design:type",Boolean)],sn.prototype,"navigationClosed",void 0),rn([re({type:Boolean}),an("design:type",Boolean)],sn.prototype,"prominent",void 0),rn([ae("#header"),an("design:type",Object)],sn.prototype,"headerElement",void 0),rn([ae("#sidebar"),an("design:type",Object)],sn.prototype,"sidebarElement",void 0),rn([ae("#content"),an("design:type",Object)],sn.prototype,"contentElement",void 0),sn=rn([ne("nidoca-template"),an("design:paramtypes",[])],sn);var cn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ln=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let pn=class extends Q{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1}render(){return P`
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
    `}clearValue(){this.value=""}valueChanged(){var e;return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){const t=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(e=this.inputElement)||void 0===e?void 0:e.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}))}};pn.styles=i`
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
  `,cn([re({type:String}),ln("design:type",String)],pn.prototype,"value",void 0),cn([re({type:String}),ln("design:type",String)],pn.prototype,"placeholder",void 0),cn([re({type:Boolean}),ln("design:type",Boolean)],pn.prototype,"disabled",void 0),cn([ae("#inputElement"),ln("design:type",Object)],pn.prototype,"inputElement",void 0),pn=cn([ne("nidoca-search-bar")],pn);var dn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},hn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class un{}un.CENTER="CENTER",un.LEFT="LEFT",un.RIGHT="RIGHT",un.TOP="TOP",un.BOTTOM="BOTTOM",un.SLIDE_CENTER="SLIDE_CENTER",un.SLIDE_LEFT="SLIDE_LEFT",un.SLIDE_RIGHT="SLIDE_RIGHT",un.SLIDE_TOP="SLIDE_TOP",un.SLIDE_BOTTOM="SLIDE_BOTTOM";let yn=class extends Q{constructor(){super(...arguments),this.transitionType=un.CENTER,this.duration=.5}render(){return P` <div .class="${this.transitionType}"><slot></slot></div> `}};yn.styles=i`
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
  `,dn([re({type:Object}),hn("design:type",un)],yn.prototype,"transitionType",void 0),dn([re({type:Number}),hn("design:type",Number)],yn.prototype,"duration",void 0),yn=dn([ne("nidoca-transition")],yn);var fn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let mn=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?P`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${un.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:P``}};mn.styles=i`
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
  `,fn([re({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],mn.prototype,"show",void 0),mn=fn([ne("nidoca-dialog")],mn);var gn,bn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},vn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let xn=class extends Q{constructor(){super(...arguments),this.show=!1,this.theme=oe.BACKGROUND}render(){return P`
      <style>
        .box {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        ${Xt.MOBILE.asMediaStyle("slot{min-width:320px;}")}
        ${Xt.TABLET.asMediaStyle("slot{min-width:480px;}")}
        ${Xt.DESKTOP.asMediaStyle("slot{min-width:640px;}")}
      </style>
      <nidoca-dialog .show="${this.show}">
        <nidoca-card class="box" .shadowType="${qe.KEY_LIGHT}">
          <nidoca-layout-spacer>
            <slot name="header"></slot>
            <slot name="text"></slot>
            <slot name="action"></slot>
          </nidoca-layout-spacer>
        </nidoca-card>
      </nidoca-dialog>
    `}};xn.styles=i`
    slot {
      display: flex;
    }
  `,bn([re({type:Boolean}),vn("design:type",Boolean)],xn.prototype,"show",void 0),bn([re({type:oe}),vn("design:type","function"==typeof(gn=void 0!==oe&&oe)?gn:Object)],xn.prototype,"theme",void 0),xn=bn([ne("nidoca-dialog-action")],xn);var wn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},$n=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Rn{}Rn.ROUND="ROUND",Rn.CLICKABLE="CLICKABLE",Rn.ZOOM_WRAPPED="ZOOM_WRAPPED",Rn.FULL_WIDTH="FULL_WIDTH";let En=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[Rn.CLICKABLE,Rn.FULL_WIDTH]}render(){return P`
            <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"><img width="${this.width}"
                                                                                             height="${this.height}"
                                                                                             src="${this.src}"/></span>
        `}toRichMediaPropertiesString(e){let t="";return e.forEach((e=>{t=t.concat(" ").concat("")})),t}};En.styles=i`
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
  `,wn([re({type:String}),$n("design:type",String)],En.prototype,"src",void 0),wn([re({type:String}),$n("design:type",String)],En.prototype,"width",void 0),wn([re({type:String}),$n("design:type",String)],En.prototype,"height",void 0),wn([re({type:Rn,converter:Array}),$n("design:type",Array)],En.prototype,"richMediaProperties",void 0),En=wn([ne("nidoca-img-round")],En);var On=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Sn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Tn=class extends Q{constructor(){super(...arguments),this.imgSrc="",this.primaryText="",this.description=""}render(){return P` <div
      style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
    >
        <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[Rn.ROUND]}"> </nidoca-img>
        <nidoca-layout-spacer
          left="var(--space-little)"
          right="var(--space-little)"
          top="var(--space-little)"
          bottom="var(--space-little)"
        >
          <nidoca-typography type="${we.H3}">${this.primaryText}</nidoca-typography>
        </nidoca-layout-spacer>
        <nidoca-typography type="${we.H5}">${this.description}</nidoca-typography>
  </div>
    </div>`}};On([re({type:String}),Sn("design:type",String)],Tn.prototype,"imgSrc",void 0),On([re({type:String}),Sn("design:type",String)],Tn.prototype,"primaryText",void 0),On([re({type:String}),Sn("design:type",String)],Tn.prototype,"description",void 0),Tn=On([ne("nidoca-avatar")],Tn);let kn=class extends Q{render(){return P`
      <nidoca-box-shadow .shadowType="${qe.KEY_LIGHT}">
      <slot class="slotContainer"></slot>
      </nidoca-box-shadow>
    `}};kn.styles=i`
    .slotContainer {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
  `,kn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-card")],kn);let An=class extends Q{render(){return P`
    
    <nidoca-layout-spacer bottom="var(--space-little)" left="">
    <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
    </nidoca-layout-spacer>
    
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();for(let e=0;e<o.length;e++){const t=o[e].classList;t.contains("flexItem")||t.add("flexItem"),t.contains("flexItemDevice")||t.add("flexItemDevice")}}};An.styles=i`
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
  `,An=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-gallery")],An);let In=class extends Q{render(){return P`<slot></slot>`}print(){const e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};In.styles=i`
    :host {
      display: none;
    }
  `,In=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-print")],In);let jn=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return P`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){const t=e.target,o=t.offsetWidth,n=t.assignedElements(),i=n.length,r=[];let a=0;for(let e=0;e<i;e++){const t=n[e];if(t.setAttribute("class","item"),t instanceof HTMLElement){const e=t.style.width;if(0==e.length)r.push(t);else{const t=e.toUpperCase();a+=t.indexOf("PX")>-1?Number(t.replace("PX","")):Number(t.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),this.flexBasis=String(s/r.length)+"%",this.requestUpdate()}};jn.styles=i`
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

    @media only screen and (min-width: ${Xt.TABLET.minWidth}px) and (max-width: ${Xt.TABLET.maxWidth}px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: ${Xt.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,jn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-section")],jn);var Nn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Pn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Cn=class extends Q{constructor(){super(...arguments),this.title="",this.summary="",this.text=""}render(){return P`
      <div style="display:flex; flex-direction:column;">
        <slot name="title"></slot>
        ${this.title?P`<nidoca-typography .type="${we.H2}">${this.title}</nidoca-typography>
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`:P``}
        <slot name="summary"></slot>${this.summary?P`<nidoca-typography .type="${we.BODY1}"><i>${this.summary}</i></nidoca-typography>
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`:P``}
        <slot name="text"></slot>
        ${this.text?P`<nidoca-typography .type="${we.BODY1}">${this.text}</nidoca-typography>`:P``}
        <slot></slot>
      </div>
    `}};Cn.styles=i`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  `,Nn([re({type:String}),Pn("design:type",String)],Cn.prototype,"title",void 0),Nn([re({type:String}),Pn("design:type",String)],Cn.prototype,"summary",void 0),Nn([re({type:String}),Pn("design:type",String)],Cn.prototype,"text",void 0),Cn=Nn([ne("nidoca-article")],Cn);var Ln=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Dn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _n=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return P`
      <nidoca-layout-spacer top="48px" bottom="48px">
        <div style="display:flex;flex-direction:column;align-items:center">
          <nidoca-icon
            icon="${this.icon}"
            style="font-size: 96px; padding:var(--space-normal);"
            backgroundColor="var(--app-color-surface-background)"
          ></nidoca-icon>
          <nidoca-typography .type="${we.H2}">${this.primaryText}</nidoca-typography>
          <nidoca-layout-spacer>
            <nidoca-typography
              .type="${we.BODY2}"
              .textAlign="${$e.CENTER}"
            >
              ${this.text}
              <slot></slot>
            </nidoca-typography>
          </nidoca-layout-spacer>
        </div>
      </nidoca-layout-spacer>
    `}};_n.styles=i``,Ln([re({type:String}),Dn("design:type",String)],_n.prototype,"primaryText",void 0),Ln([re({type:String}),Dn("design:type",String)],_n.prototype,"text",void 0),Ln([re({type:String}),Dn("design:type",String)],_n.prototype,"icon",void 0),_n=Ln([ne("nidoca-icon-with-description")],_n);let Bn=class extends Q{render(){return P`
      <nidoca-form id="authenitcate-form">
        <nidoca-typography .type="${we.H2}">Kontaktformular</nidoca-typography>
        <nidoca-form-text name="name" .textType="${Rt.TEXT}" value="" label="name"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text .textType="${Rt.EMAIL}" label="email" name="email"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text name="title" .textType="${Rt.TEXT}" value="" label="title"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-form-textarea label="message" name="message" trailingIcon="vpn_key"></nidoca-form-textarea>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-button
          text="Senden"
          @nidoca-event-button-clicked="${()=>alert("Login")}"
          .buttonType="${Ue.CONTAINED}"
        ></nidoca-button>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-typography
          slot="errorMessages"
          .type="${we.OVERLINE}"
          text="huhu"
        ></nidoca-typography>
      </nidoca-form>
    `}};var Mn;Bn.styles=i``,Bn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-form-contact")],Bn),te.getUniqueInstance().initDefaultComponents(),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(e){e.STRING="String",e.NUMBER="Number",e.BOOLEAN="Boolean",e.COMBOBOX="Class",e.ARRAY="Array",e.UNDEFINED="undefined"}(Mn||(Mn={}));class zn{constructor(e,t){this.propertyName=e,this.propertyValue=t}getClassName(){return this.propertyName,this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?Mn.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?Mn.UNDEFINED:this.getTypeName():Mn.COMBOBOX}getEnumValues(){const e=[];return Object.values(this.getType()).forEach((t=>{e.push({key:t,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(t)])})})),e}getEnumValue(e){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(e)]}getEnumKey(e){const t=this.getEnumValues();for(let o=0;o<t.length;o++){const n=t[o];if(n.key==e)return n.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var e;return null===(e=this.propertyValue)||void 0===e?void 0:e.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var e;return null===(e=this.getConverterType())||void 0===e?void 0:e.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class Hn{constructor(e){this.instance=e}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((e=>e.name?e.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(e,t){let o=[];if(t&&(t.tagName==e&&o.push(t),t.children.length>0)){const n=null==t?void 0:t.children;for(let t=0;t<n.length;t++)o=o.concat(this.getElementsByTagName(e,n.item(t)))}return o}getPropertieNames(){const e=this.instance.constructor;return Object.getOwnPropertyNames(e)}getProperties(){const e=this.instance.constructor.elementProperties;if(!e)throw new Error("selected item malformed");const t=[];for(const o of Array.from(e.keys()))t.push(new zn(o,e.get(o)));return t}}class Wn{constructor(e){this.propertyWrapper=e}getInputElement(e){if(null==e)return P``;const t=e.classWrapper;if(null==t)return P``;switch(this.propertyWrapper.getRenderType()){case Mn.STRING:return P`<nidoca-form-text .textType="${Rt.TEXT}"
        label="${this.propertyWrapper.propertyName}"
          value="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,e.showcaseElement.requestUpdate()}}"
        /></nidoca-form-text>`;case Mn.NUMBER:return P`<nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${Rt.NUMBER}"
          value="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,e.showcaseElement.requestUpdate()}}"
        ></nidoca-form-text>`;case Mn.BOOLEAN:return P`<nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,e.showcaseElement.requestUpdate()}}"
        ></nidoca-form-switch>`;case Mn.COMBOBOX:return P`<nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${xt.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(o.target.getOutputData().value),e.showcaseElement.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case Mn.ARRAY:return P`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${xt.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${t.instance[this.propertyWrapper.propertyName]}"
            @input="${e=>{t.instance[this.propertyWrapper.propertyName]=e.target.getOutputData().value,t.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return P``}}getAsHtml(e){switch(this.propertyWrapper.getConverterTypeName()){case Mn.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case Mn.ARRAY:return"";case Mn.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(e.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(e){switch(this.propertyWrapper.getRenderType()){case Mn.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(e.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case Mn.STRING:return`${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case Mn.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsJavascript(e){switch(this.propertyWrapper.getConverterTypeName()){case Mn.COMBOBOX:case Mn.ARRAY:return"";case Mn.STRING:return`element.${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${e.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(e){switch(this.propertyWrapper.getConverterTypeName()){case Mn.COMBOBOX:case Mn.ARRAY:return"";case Mn.STRING:return`element.${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${e.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class Un{constructor(e){this.classWrapper=e}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((e=>e.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((e=>e.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((e=>e.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((e=>e.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`\n<${this.classWrapper.getTagName()}\n${this.classWrapper.getProperties().map((e=>`.${e.propertyName}="\${this.${e.propertyName}}"\n`)).join("")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(e){return e.indexOf(">")>-1&&(e=e.substr(e.indexOf(">")+1,e.length)),e}renderPropertyGui(){const e=[];for(const t of this.getPropertyGuiWrappers())e.push(P`
          <div>
            <b>${t.propertyWrapper.propertyName}</b>

            <pre>${t.propertyWrapper.getTypeName()}</pre>
            <div>${t.getInputElement(this)}</div>
          </div>
        `);return e}getPropertyGuiWrappers(){const e=[];for(const t of this.classWrapper.getProperties())e.push(new Wn(t));return e}getPropertieNames(){const e=[];return this.getPropertyGuiWrappers().map((t=>{e.push(t.propertyWrapper.propertyName)})),e}hasProperties(){return this.getPropertieNames().length>0}}var Gn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Yn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Kn=class extends Q{constructor(){super(...arguments),this.clazzGuiWrapper=null,this.customEventNames=[]}updated(e){e.has("element")&&null!=this.element&&(this.clazzGuiWrapper=new Un(new Hn(this.element)),this.requestUpdate())}render(){var e,t,o,n,i,r,a;return P` <nidoca-section .theme="${oe.PRIMARY}">
        <div>
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-typography .type="${we.H2}">Tag</nidoca-typography>
          </nidoca-layout-spacer>
          <nidoca-code>${this.clazzGuiWrapper?this.clazzGuiWrapper.classWrapper.getHTMLTag():""} </nidoca-code>

          <div style="padding-top:var(--space-medium);">
            <nidoca-layout-container .theme="${oe.PRIMARY}"> ${this.element} </nidoca-layout-container>
          </div>
        </div>

        <div style="padding-left:var(--space-medium)">
          ${(null===(e=this.clazzGuiWrapper)||void 0===e?void 0:e.hasProperties())?P`
                <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${we.H2}"> Attribute </nidoca-typography>
                </nidoca-layout-spacer>

                ${this.clazzGuiWrapper.getPropertyGuiWrappers().map((e=>P`${e.getInputElement(this.clazzGuiWrapper)}
                    <div style="padding-bottom:var(--space-big);"></div>`))}
              `:P``}
          ${(null===(t=this.clazzGuiWrapper)||void 0===t?void 0:t.classWrapper.hasSlots())?P` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${we.H2}">Slots </nidoca-typography>
                </nidoca-layout-spacer>

                <nidoca-table
                  .headers="${["name"]}"
                  .rows="${this.toSlotRows(this.clazzGuiWrapper.classWrapper.getSlotNames())}"
                >
                </nidoca-table>`:P``}
          ${this.customEventNames.length>0?P` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${we.H2}">Custom Events </nidoca-typography>
                </nidoca-layout-spacer>
                <nidoca-table .headers="${["name"]}" .rows="${this.toCustomEventRows(this.customEventNames)}">
                </nidoca-table>`:P``}
        </div>
      </nidoca-section>
      <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
        <nidoca-typography .type="${we.H2}"> Quelltext </nidoca-typography>
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
            <nidoca-code>${null===(n=this.clazzGuiWrapper)||void 0===n?void 0:n.getTypescript()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${null===(i=this.clazzGuiWrapper)||void 0===i?void 0:i.getAsLit()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${null===(r=this.clazzGuiWrapper)||void 0===r?void 0:r.getAsHtml()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>
      </nidoca-tabs>

      <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
        <nidoca-typography .type="${we.H2}"> Attribute </nidoca-typography>
      </nidoca-layout-spacer>

      <nidoca-table
        .headers="${["name","type","converter type","render type"]}"
        .rows="${this.toAttributeRows(null===(a=this.clazzGuiWrapper)||void 0===a?void 0:a.getPropertyGuiWrappers())}"
      >
      </nidoca-table>
      <slot @slotchange="${e=>this.slotChanged(e)}"></slot>`}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements()[0];o instanceof HTMLElement&&(this.element=o)}toAttributeRows(e){const t=[[]];return e&&e.map((e=>{const o=[];return o.push(e.propertyWrapper.propertyName),o.push(e.propertyWrapper.getTypeName()),o.push(e.propertyWrapper.getConverterTypeName()),o.push(e.propertyWrapper.getRenderType()),t.push(o),o})),t}toSlotRows(e){const t=[[]];return e&&e.map((e=>{const o=[];return o.push(e),t.push(o),o})),t}toCustomEventRows(e){const t=[[]];return e&&e.map((e=>{const o=[];return o.push(e),t.push(o),o})),t}};Kn.styles=i`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `,Gn([re({type:Array}),Yn("design:type",Array)],Kn.prototype,"customEventNames",void 0),Gn([re({type:Object}),Yn("design:type",Object)],Kn.prototype,"element",void 0),Kn=Gn([ne("lit-viewer")],Kn);let qn=class extends Q{render(){return P`
      <nidoca-section style="width:50%;">
        <nidoca-layout-spacer top="250px" bottom="250px">
          <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
            <nidoca-img
              width="100px"
              height="100px"
              src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg"
            >
            </nidoca-img>
            <nidoca-typography .type="${we.H1}">&nbsp;nidoca-webcomponents</nidoca-typography>
          </div>
        </nidoca-layout-spacer>
      </nidoca-section>

      <nidoca-layout-container .theme="${oe.PRIMARY}">
        <nidoca-section .devices="${[Xt.DESKTOP]}">
          <nidoca-icon-with-description
            title="Komponentenbibliothek"
            icon="local_library"
            style="padding:var(--space-medium);"
          >
            Nidoce ist eine Komponentenbibliothek mit über ${te.getUniqueInstance().registeredElementNames.length}
            Komponenten für den direkten Einsatz in deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die
            Komponenten können dank der Webcomponent Technologie überall in andere Frameworks eingebaungen werden.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Leichtgewichtig" icon="code" style="padding:var(--space-medium);">
            Es ist ein sehr kleines, leichtes Komponenten-Framework, das nur 32 KB klein ist. Es enthält mehr als 30
            Komponenten und diverse Zusatzfunktionen wie Routing / Internationalisierung und Speicherung. Komponenten
            können einfach angepasst werden und sind sehr einfach erweiterbar. erstellen.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Open Source" icon="code" style="padding:var(--space-medium);">
            Es ist ein Open-Source-Projekt, das Sie auf Github finden können. Du kannst das Projekt natürlich gerne
            finanziell unterstützen, wenn es dir gefällt.
          </nidoca-icon-with-description>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-section>
        <nidoca-img src="http://nidoca.eu/img/1638344581876.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC01380.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/1638344581857.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02560.jpg"></nidoca-img>

        <nidoca-article
          style=""
          title="Lorem Ipsum"
          summary="Lorem Ipsum Dolorem ipsum med en to."
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
      </nidoca-section>

      <nidoca-section style="width:50%; padding:50px;">
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-article
          style="padding-left:25px;"
          title="Lorem Ipsum"
          summary="Lorem Ipsum Dolorem ipsum med en to."
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
      </nidoca-section>

      <nidoca-layout-container .theme="${oe.SECONDARY}">
        <nidoca-section style="width:50%; padding-top:var(--space-max);padding-bottom:var(--space-max);">
          <nidoca-article
            summary="Die Komponenten sind für Desktop, Tablet und Mobile optimiert."
            text="The components looks good on all devices, because they are designed responsive. Responsive web design is a
            creative and technical paradigm for creating websites, so that they can react to the properties of the end
            device used, especially smartphones and tablet computers."
          >
            <nidoca-typography slot="title" .type="${we.H2}"
              >Responsive Komponenten</nidoca-typography
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-layout-container .theme="${oe.BACKGROUND}">
        <nidoca-section style="width:50%; padding-top:var(--space-max);padding-bottom:var(--space-max);">
          <nidoca-article
            summary="Alle Komponenten erfüllen den Webcomponent Standart"
            text="Webkomponenten sind eine Gruppe von Web-Technologien, die es ermöglichen, benutzerdefinierte, wiederverwendbare HTML Elemente zu erstellen, deren Funktionalität gekapselt ist und damit vollständig getrennt von anderem Code."
          >
            <nidoca-typography slot="title" .type="${we.H2}">Webcomponents</nidoca-typography>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-layout-container .theme="${oe.PRIMARY}">
        <nidoca-section style="width:50%; padding:var(--space-max);">
          <nidoca-form-contact></nidoca-form-contact>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-section>
        <nidoca-img src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
        <nidoca-article
          title="Lorem Ipsum"
          summary="Lorem Ipsum Dolorem ipsum med en to."
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
      </nidoca-section>
      <nidoca-section>
        <nidoca-article
          title="Lorem Ipsum"
          summary="Lorem Ipsum Dolorem ipsum med en to."
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
        <nidoca-img src="http://nidoca.eu/img/IMG_1825.jpg"></nidoca-img>
      </nidoca-section>
    `}};qn.styles=i``,qn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-main")],qn);var Fn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Vn=class extends Q{constructor(){super(...arguments),this.elementName="nidoca-article"}render(){return P`
      <nidoca-section style="width:50%;">
        <nidoca-layout-spacer top="var(--space-max)" bottom="var(--space-max)">
          <nidoca-article
            title="Komponentenübersicht"
            text="Auf dieser Seite kannst du dir die einzelnen Komponenten von Nidoca anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
          ></nidoca-article>
          <nidoca-layout-spacer top="20px"></nidoca-layout-spacer>
          <nidoca-form-combobox
            name="components"
            label="Komponenten"
            value="${this.elementName}"
            .options="${xt.stringArrayToOptions(te.getUniqueInstance().registeredElementNames)}"
            @input="${e=>{this.elementName=e.target.getOutputData().value}}"
          ></nidoca-form-combobox>
        </nidoca-layout-spacer>
      </nidoca-section>

      <nidoca-section style="width:50%;">
        <lit-viewer> ${te.getUniqueInstance().registeredElementsMap.get(this.elementName)} </lit-viewer>
      </nidoca-section>
    `}};Vn.styles=i``,Fn([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Vn.prototype,"elementName",void 0),Vn=Fn([ne("nidoca-page-components")],Vn);let Xn=class extends Q{render(){return P`
      <nidoca-layout-spacer top="var(--space-max)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Impressum" summary="Angaben gemäß § 5 TMG">
            <nidoca-typography .type="${we.BODY1}">Dominik Bruhn</nidoca-typography>
            <nidoca-typography .type="${we.BODY1}">Holzwickeder Straße 109c</nidoca-typography>
            <nidoca-typography .type="${we.BODY1}">44309 Dortmund</nidoca-typography>
            <nidoca-layout-spacer></nidoca-layout-spacer>
            <nidoca-typography .type="${we.BODY1}"
              >Telefonnummer: +49 152 052 488 62</nidoca-typography
            >
            <nidoca-typography .type="${we.BODY1}"
              >E-Mail: dominikbruhn [at] googlemail.com</nidoca-typography
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>
      <nidoca-layout-spacer top="var(--space-max)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Streitsschlichtung">
            <nidoca-typography .type="${we.BODY1}"
              >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="${ko.BLANK}"
                >https://ec.europa.eu/consumers/odr</nidoca-link
              >. <br />Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.</nidoca-typography
            >
            <nidoca-typography .type="${we.BODY1}">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </nidoca-typography>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-max)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Haftungsinhalt">
            <nidoca-typography .type="${we.BODY1}">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.<br />
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </nidoca-typography>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-max)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Haftungslinks">
            <nidoca-typography .type="${we.BODY1}">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </nidoca-typography>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-max)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Copyright">
            <nidoca-typography .type="${we.BODY1}">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </nidoca-typography>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-max)" bottom="var(--space-max)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Quelle">
            <nidoca-link href="https://www.e-recht24.de/impressum-generator.html" targetType="${ko.BLANK}"
              >https://www.e-recht24.de/impressum-generator.html</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <div style="padding-top:var(--space-max); padding-bottom:var(--space-max);">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Material Icons">
            <nidoca-link href="https://fonts.google.com/icons" targetType="${ko.BLANK}"
              >https://fonts.google.com/icons</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Fonts">
            <nidoca-link href=" https://fonts.google.com/" targetType="${ko.BLANK}">
              https://fonts.google.com/</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </div>
    `}};Xn.styles=i``,Xn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-imprint")],Xn);var Zn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Jn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Qn=class extends Q{constructor(){super(),this.cssVars=[],this.cssVars=((e=document.styleSheets)=>{const t=[];return Array.from(e).forEach((e=>{Array.from(e.cssRules).forEach((e=>{if(!e||!e.style)return;const o=e.style;Array.from(o).forEach((e=>{e.startsWith("--")&&-1==t.indexOf(e)&&t.push(e)}))}))})),t})()}render(){return P`
      <nidoca-layout-spacer top="var(--space-max)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="CSS Variablen">
            ${mt([this.cssVars],(()=>P`
                  ${yt(this.cssVars,(e=>P`
                      <nidoca-form-text
                      style="width:100%;"
                        @input="${t=>{document.documentElement.style.setProperty(e,t.target?t.target.getOutputData().value:"")}}"
                        type="${e.indexOf("color")>-1?Rt.COLOR:Rt.TEXT}"
                        name="${e}"
                        value="${getComputedStyle(document.documentElement).getPropertyValue(e).trim()}"
                        label="${e}"
                      ></nidoca-form-text>
                      <nidoca-layout-spacer top="var(--space-medium)"></nidoca-layout-spacer>

                    `))}
                `))}
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>
    `}};Qn.styles=i``,Zn([re({type:Array}),Jn("design:type",Array)],Qn.prototype,"cssVars",void 0),Qn=Zn([ne("nidoca-page-settings"),Jn("design:paramtypes",[])],Qn);let ei=class extends Q{render(){return P``}};ei.styles=i``,ei=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-privacy")],ei);let ti=class extends Q{render(){return P``}};ti.styles=i``,ti=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-terms-of-use")],ti);class oi{constructor(){this.listeners=[],window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",(e=>{if(!this.shouldIgnoreEvent(e)){const t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}}))}static getUniqueInstance(){return oi.uniqueInstance||(oi.uniqueInstance=new oi),oi.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){-1==e.indexOf("#")&&(e="#".concat(e)),console.trace("navigate to: %s",e),null!=t&&console.trace("state: %s",JSON.stringify(t)),document.location.hash!==e?(history.pushState(t,"",e),this.notifyListeners()):console.trace("you are already on page: "+e)}getCurrentState(){return history.state}getStateProperty(e){const t=this.getCurrentState();return null!=t?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const e=this.getCurrentPage();this.listeners.forEach((t=>t.routeChanged(e)))}shouldIgnoreEvent(e){return e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(const t of e.composedPath?e.composedPath():[])if(this.isAnchor(t))return t;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&"a"===e.nodeName.toLowerCase()}shouldIgnoreAnchor(e){return!(!e.target||"_self"===e.target.toLowerCase())||(!!e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){const t=e.port,o=e.protocol;return`${o}//${"http:"===o&&"80"===t||"https:"===o&&"443"===t?e.hostname:e.host}`}}let ni=class extends Q{render(){return P`
      <nidoca-list slot="sidebar">
        <nidoca-list-item
          icon="home"
          text="Home"
          href="#main"
          .rendered="${!0}"
          @click="${()=>oi.getUniqueInstance().navigate("main")}"
        ></nidoca-list-item>
        <nidoca-list-item
          icon="home"
          text="Gallery"
          href="#main"
          .rendered="${!0}"
          @click="${()=>oi.getUniqueInstance().navigate("gallery")}"
        ></nidoca-list-item>
      </nidoca-list>
    `}};ni.styles=i``,ni=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-elevation-settings")],ni);var ii=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ri=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ai=class extends Q{constructor(){super(...arguments),this.username=localStorage.getItem("nidoca-local-storage-authentication-username-value"),this.hrefResetPassword="#reset_password",this.hrefRegister="#register",this.errorMessage=""}render(){return P`
      <nidoca-layout-container minWidth="350px" maxWidth="80%" .theme="${oe.BACKGROUND}">
        <nidoca-layout-spacer
          left="var(--space-big)"
          right="var(--space-big)"
          top="var(--space-big)"
          bottom="var(--space-big)"
        >
          <nidoca-form id="authenitcate-form">
          <nidoca-typography .type="${we.H1}">Anmeldung</nidoca-typography>
            <nidoca-form-text
              name="username"
              .textType="${Rt.EMAIL}"
              .value="${this.username}"
              label="username"
              trailingIcon="account_circle"
            ></nidoca-form-text>
            <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
            <nidoca-form-text
              .textType="${Rt.PASSWORD}"
              label="password"
              name="password"
              trailingIcon="vpn_key"
            ></nidoca-form-text>
            <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
            <nidoca-button text="Login" @nidoca-event-button-clicked="${()=>alert("Login")}"></nidoca-button>
            <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
            <nidoca-button @nidoca-event-button-clicked="${()=>this.closePopup()}">Schließen</nidoca-button>
            <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
            <nidoca-typography
              slot="errorMessages"
              .type="${we.OVERLINE}"
              text="${this.errorMessage}"
            ></nidoca-typography>
          </nidoca-form>
        </nidoca-layout-spacer>
      </nidoca-layout-container>
    `}closePopup(){this.dispatchEvent(new CustomEvent("nidoca-popup-login-closePopup",{detail:this,bubbles:!0,composed:!0}))}};ai.styles=i``,ii([re(),ri("design:type",Object)],ai.prototype,"username",void 0),ii([re(),ri("design:type",String)],ai.prototype,"hrefResetPassword",void 0),ii([re(),ri("design:type",String)],ai.prototype,"hrefRegister",void 0),ii([ae("#authenitcate-form"),ri("design:type",Object)],ai.prototype,"formComponent",void 0),ii([re(),ri("design:type",String)],ai.prototype,"errorMessage",void 0),ai=ii([ne("nidoca-popup-login")],ai);var si=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ci=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let li=class extends Q{constructor(){super(),this.showPopup=!1,this.popupContent=P``,this.navigationClosed=!1,this.prominent=!1,this.currentPage=P`<nidoca-page-main></nidoca-page-main>`,this.elevationShow=!1,oi.getUniqueInstance().subscribe(this),this.routeChanged(oi.getUniqueInstance().getCurrentPage())}routeChanged(e){switch(console.log("enter new page, url: %s",e),e){case"components":this.currentPage=P`<nidoca-page-components></nidoca-page-components>`;break;case"settings":this.currentPage=P`<nidoca-page-settings></nidoca-page-settings>`;break;case"imprint":this.currentPage=P`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"terms-of-use":this.currentPage=P`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"privacy":this.currentPage=P`<nidoca-page-privacy></nidoca-page-privacy>`;break;default:this.currentPage=P`<nidoca-page-main></nidoca-page-main>`}}render(){return P`
      <nidoca-template
        .prominent="${this.prominent}"
        .navigationClosed="${this.navigationClosed}"
        .theme="${oe.PRIMARY}"
      >
        <nidoca-typography slot="topCenter" type="${we.BODY1}"></nidoca-typography>
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
          @nidoca-event-icon-clicked="${()=>{this.showPopup=!0,this.popupContent=P`<nidoca-popup-login></nidoca-popup-login>`}}"
        ></nidoca-icon>
        <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
        <nidoca-icon
          slot="topRight"
          icon="more_vert"
          .clickable="${!0}"
          @nidoca-event-icon-clicked="${e=>{this.elevationShow=!0,this.elevationAssociatedElement=e.target,this.elevationContentElement=P`<nidoca-elevation-settings></nidoca-elevation-settings>`}}"
        ></nidoca-icon>

        <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

        <span slot="content">${this.currentPage}</span>

        <nidoca-menu slot="sidebar">
          <nidoca-menu-item text="Start" @click="${()=>oi.getUniqueInstance().navigate("main")}">
          </nidoca-menu-item>

          <nidoca-menu-area text="Framework"></nidoca-menu-area>

          <nidoca-menu-item
            text="Komponenten"
            @click="${()=>oi.getUniqueInstance().navigate("components")}"
          >
          </nidoca-menu-item>

          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>

          <nidoca-menu-item text="Impressum" @click="${()=>oi.getUniqueInstance().navigate("imprint")}">
          </nidoca-menu-item>

          <nidoca-menu-item text="Datenschutz" @click="${()=>oi.getUniqueInstance().navigate("privacy")}">
          </nidoca-menu-item>

          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @click="${()=>oi.getUniqueInstance().navigate("terms-of-use")}"
          >
          </nidoca-menu-item>

          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>

          <nidoca-menu-item
            icon="home"
            text="Einstellungen"
            @click="${()=>oi.getUniqueInstance().navigate("settings")}"
          >
          </nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
      <nidoca-dialog .show="${this.showPopup}" @nidoca-popup-login-closePopup="${()=>this.showPopup=!1}"
        >${this.popupContent}
      </nidoca-dialog>
      <nidoca-elevation
        .show="${this.elevationShow}"
        .associatedElement="${this.elevationAssociatedElement}"
        @mouseout="${()=>this.elevationShow=!1}"
        >${this.elevationContentElement}</nidoca-elevation
      >
    `}};si([re({type:Boolean}),ci("design:type",Boolean)],li.prototype,"showPopup",void 0),si([re({type:Object}),ci("design:type",Object)],li.prototype,"popupContent",void 0),si([re({type:Boolean}),ci("design:type",Boolean)],li.prototype,"navigationClosed",void 0),si([re({type:Boolean}),ci("design:type",Boolean)],li.prototype,"prominent",void 0),si([re({type:Object}),ci("design:type",Object)],li.prototype,"currentPage",void 0),si([re({type:Boolean}),ci("design:type",Boolean)],li.prototype,"elevationShow",void 0),si([re({type:Object}),ci("design:type",Object)],li.prototype,"elevationAssociatedElement",void 0),si([re({type:Object}),ci("design:type",Object)],li.prototype,"elevationContentElement",void 0),li=si([ne("nidoca-app"),ci("design:paramtypes",[])],li)})();