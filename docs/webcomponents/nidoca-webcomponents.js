/*! For license information please see nidoca-webcomponents.js.LICENSE.txt */
(()=>{"use strict";var t={d:(e,o)=>{for(var i in o)t.o(o,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:o[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{r$:()=>at,g7:()=>it,hn:()=>ot,N2:()=>bi,I9:()=>pi,rl:()=>Yt,$N:()=>Ue,yl:()=>Je,Nv:()=>eo,dS:()=>so,fG:()=>xo,jC:()=>co,uV:()=>Wt,Gi:()=>ge,el:()=>lt,V1:()=>Tt,xQ:()=>St,kQ:()=>$t,I0:()=>rt,yo:()=>nt});const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),i=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,o,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1]),t[0]);return new n(i,o)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new n("string"==typeof t?t:t+"",o))(e)})(t):t;var s;const l=window.trustedTypes,c=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},h=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:h};class y extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,o)=>{const i=this._$Eh(o,e);void 0!==i&&(this._$Eu.set(i,o),t.push(i))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of e)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,o;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(o=t.hostConnected)||void 0===o||o.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{e?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=e.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ES(t,e,o=f){var i,n;const r=this.constructor._$Eh(t,o);if(void 0!==r&&!0===o.reflect){const a=(null!==(n=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:p.toAttribute)(e,o.type);this._$Ei=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(t,e){var o,i,n;const r=this.constructor,a=r._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=r.getPropertyOptions(a),s=t.converter,l=null!==(n=null!==(i=null===(o=s)||void 0===o?void 0:o.fromAttribute)&&void 0!==i?i:"function"==typeof s?s:null)&&void 0!==n?n:p.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,o){let i=!0;void 0!==t&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===o.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(o)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var u;y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:y}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.2.0");const m=globalThis.trustedTypes,g=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,v="?"+b,x=`<${v}>`,w=document,$=(t="")=>w.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,R=t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,O=/>/g,I=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,j=/'/g,_=/"/g,A=/^(?:script|style|textarea)$/i,C=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),P=C(1),D=(C(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),B=new WeakMap,N=w.createTreeWalker(w,129,null,!1),M=(t,e)=>{const o=t.length-1,i=[];let n,r=2===e?"<svg>":"",a=T;for(let e=0;e<o;e++){const o=t[e];let s,l,c=-1,d=0;for(;d<o.length&&(a.lastIndex=d,l=a.exec(o),null!==l);)d=a.lastIndex,a===T?"!--"===l[1]?a=k:void 0!==l[1]?a=O:void 0!==l[2]?(A.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=I):void 0!==l[3]&&(a=I):a===I?">"===l[0]?(a=null!=n?n:T,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?I:'"'===l[3]?_:j):a===_||a===j?a=I:a===k||a===O?a=T:(a=I,n=void 0);const p=a===I&&t[e+1].startsWith("/>")?" ":"";r+=a===T?o+x:c>=0?(i.push(s),o.slice(0,c)+"$lit$"+o.slice(c)+b+p):o+b+(-2===c?(i.push(void 0),e):p)}const s=r+(t[o]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(s):s,i]};class z{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[l,c]=M(t,e);if(this.el=z.createElement(l,o),N.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=N.nextNode())&&s.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(b)){const o=c[r++];if(t.push(e),void 0!==o){const t=i.getAttribute(o.toLowerCase()+"$lit$").split(b),e=/([.?@])?(.*)/.exec(o);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?F:"@"===e[1]?X:Y})}else s.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(A.test(i.tagName)){const t=i.textContent.split(b),e=t.length-1;if(e>0){i.textContent=m?m.emptyScript:"";for(let o=0;o<e;o++)i.append(t[o],$()),N.nextNode(),s.push({type:2,index:++n});i.append(t[e],$())}}}else if(8===i.nodeType)if(i.data===v)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(b,t+1));)s.push({type:7,index:n}),t+=b.length-1}n++}}static createElement(t,e){const o=w.createElement("template");return o.innerHTML=t,o}}function H(t,e,o=t,i){var n,r,a,s;if(e===D)return e;let l=void 0!==i?null===(n=o._$Cl)||void 0===n?void 0:n[i]:o._$Cu;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,o,i)),void 0!==i?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[i]=l:o._$Cu=l),void 0!==l&&(e=H(t,l._$AS(t,e.values),l,i)),e}class U{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(o,!0);N.currentNode=n;let r=N.nextNode(),a=0,s=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new W(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new K(r,this,t)),this.v.push(e),l=i[++s]}a!==(null==l?void 0:l.index)&&(r=N.nextNode(),a++)}return n}m(t){let e=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class W{constructor(t,e,o,i){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),S(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==D&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):R(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==L&&S(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:o,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=z.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(o);else{const t=new U(n,this),e=t.p(this.options);t.m(o),this.S(e),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new z(t)),e}A(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const n of t)i===e.length?e.push(o=new W(this.M($()),this.M($()),this,this.options)):o=e[i],o._$AI(n),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,o,i,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const n=this.strings;let r=!1;if(void 0===n)t=H(this,t,e,0),r=!S(t)||t!==this._$AH&&t!==D,r&&(this._$AH=t);else{const i=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=H(this,i[o+a],e,a),s===D&&(s=this._$AH[a]),r||(r=!S(s)||s!==this._$AH[a]),s===L?t=L:t!==L&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends Y{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}const q=m?m.emptyScript:"";class F extends Y{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class X extends Y{constructor(t,e,o,i,n){super(t,e,o,i,n),this.type=5}_$AI(t,e=this){var o;if((t=null!==(o=H(this,t,e,0))&&void 0!==o?o:L)===D)return;const i=this._$AH,n=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==L&&(i===L||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==o?o:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const V={P:"$lit$",V:b,L:v,I:1,N:M,R:U,D:R,j:H,H:W,O:Y,F,B:X,W:G,Z:K},J=window.litHtmlPolyfillSupport;var Z,Q;null==J||J(z,W),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.1.1");class tt extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new W(e.insertBefore($(),t),t,void 0,null!=o?o:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return D}}tt.finalized=!0,tt._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.1.1");const ot=0,it=640,nt=641,rt=1007,at=1008;class st{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){const t=new bi;t.style.padding="var(--space-medium)",t.title="Ut enim ad minim veniam",t.summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",t.text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",this.registeredElementsMap.set("nidoca-article",P`${t}`);const e=new Tt;e.style.padding="var(--space-medium)",e.text="Typography",e.type="BODY1",e.textAlign="left",this.registeredElementsMap.set("nidoca-typography",P`${e}`);const o=new so;o.src="http://nidoca.eu/img/DSC02586.jpg",o.width="100%",o.height="100%",this.registeredElementsMap.set("nidoca-img",P`${o}`);const i=new co;i.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",P`${i}`),this.registeredElementsMap.set("nidoca-search-bar",P`<nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`);const n=new pi;n.style.padding="var(--space-medium)",n.imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg",n.primaryText="Dominik Bruhn",n.description="Softwareentwickler",this.registeredElementsMap.set("nidoca-avatar",P`${n}`);const r=new Wt;r.style.padding="var(--space-big)",this.registeredElementsMap.set("nidoca-progress",P`${r}`);const a=new Je;a.style.padding="var(--space-big)",a.icon="home",a.primaryText="Home Icon",a.clickable=!0,a.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",P`${a}`);const s=new xo;s.selectionMode=!0,s.selected=!0,s.primaryText="List Item",s.secondaryText="List Item Secondary Text",this.registeredElementsMap.set("nidoca-list-item",P`${s}`),this.registeredElementsMap.set("nidoca-list",P`<nidoca-list theme="primary" selectionMode stlye="padding:var(--space-big);"
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
      ></nidoca-list>`),this._registeredElementsMap.set("nidoca-menu",P` <nidoca-menu theme="secondary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"> </nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"> </nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"> </nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"> </nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"> </nidoca-menu-item>
      </nidoca-menu>`),this._registeredElementsMap.set("nidoca-accordion",P`<nidoca-accordion .theme="${lt.PRIMARY}"
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
      ></nidoca-accordion>`),this._registeredElementsMap.set("nidoca-box-shadow",P`<nidoca-box-shadow></nidoca-box-shadow>`),this._registeredElementsMap.set("nidoca-button",P`<nidoca-button leadingIcon="home" buttonType="OUTLINED">Mein Button</nidoca-button>`),this._registeredElementsMap.set("nidoca-card",P`<nidoca-card></nidoca-card>`),this._registeredElementsMap.set("nidoca-chip",P`<nidoca-chip>jojij</nidoca-chip>`),this._registeredElementsMap.set("nidoca-code",P`<nidoca-code></nidoca-code>`),this._registeredElementsMap.set("nidoca-dialog-action",P`<nidoca-dialog-action></nidoca-dialog-action>`),this._registeredElementsMap.set("nidoca-elevation",P`
        <nidoca-elevation
          .show="${!0}"
          .associatedElement="${void 0}"
          @nidoca-elevation-event-closeme="${()=>alert("Hallo")}"
        >joijiojoij
        </nidoca-elevation>
      `),this._registeredElementsMap.set("nidoca-dialog",P`<nidoca-dialog></nidoca-dialog>`),this._registeredElementsMap.set("nidoca-form-combobox",P`<nidoca-form-combobox
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
      ></nidoca-form-combobox>`),this._registeredElementsMap.set("nidoca-form-date",P`<nidoca-form-date
        theme="primary"
        label="Geburtstag"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-date>`),this._registeredElementsMap.set("nidoca-form-switch",P`<nidoca-form-switch></nidoca-form-switch>`),this._registeredElementsMap.set("nidoca-form-text",P`
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
      `),this._registeredElementsMap.set("nidoca-form-textarea",P`<nidoca-form-textarea
        style="width:100%;"
        theme="primary"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-textarea>`),this._registeredElementsMap.set("nidoca-form-captcha",P`<nidoca-form-captcha
        theme="primary"
        label="Wie lautet das Ergebnis von:"
        name="captcha"
      ></nidoca-form-captcha>`),this._registeredElementsMap.set("nidoca-gallery",P`<nidoca-gallery
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
      ></nidoca-gallery>`),this._registeredElementsMap.set("nidoca-link",P`<nidoca-link></nidoca-link>`),this._registeredElementsMap.set("nidoca-ripple",P`<nidoca-ripple></nidoca-ripple>`),this._registeredElementsMap.set("nidoca-tabs",P`
        <nidoca-tabs tabIndex="0">
          <nidoca-tab slot="tab">Tab 1</nidoca-tab>
          <nidoca-tab slot="tab">Tab 2</nidoca-tab>
          <nidoca-tab slot="tab">Tab 3</nidoca-tab>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 1 </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 2 </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 3 </nidoca-tab-content>
        </nidoca-tabs>
      `),this._registeredElementsMap.set("nidoca-table",P`<nidoca-table></nidoca-table>`),this._registeredElementsMap.set("nidoca-top-app-bar",P`<nidoca-top-app-bar .theme="${lt.PRIMARY}">
        <nidoca-typography slot="center" type="${$t.BODY1}">Top App Bar</nidoca-typography>
        <nidoca-icon slot="left" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" icon="more_vert" clickable></nidoca-icon>

        <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>`),this._registeredElementsMap.set("nidoca-upload",P`<nidoca-upload></nidoca-upload>`),this._registeredElementsMap.set("nidoca-wizard",P`<nidoca-wizard></nidoca-wizard>`)}static getUniqueInstance(){return st.uniqueInstance||(st.uniqueInstance=new st),st.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const t=[];for(const e of this.registeredElementsMap.keys())t.push(e);return t}registerElementName(t){console.log(`register element: ${t}`);const e=document.createElement(t);this.registeredElementsMap.set(t,P`${e}`)}}class lt{static getStyle(t){return t?P`<style>
          :host,
          *,
          ::slotted(*) {
            color: var(--app-color-${t});
            background-color: var(--app-color-${t}-background);
          }
        </style>`:P``}}lt.PRIMARY="primary",lt.SECONDARY="secondary",lt.SURFACE="surface",lt.BACKGROUND="background";const ct=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:o,elements:i}=e;return{kind:o,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(o){o.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function pt(t){return(e,o)=>void 0!==o?((t,e,o)=>{e.constructor.createProperty(o,t)})(t,e,o):dt(t,e)}function ht(t,e){return(({finisher:t,descriptor:e})=>(o,i)=>{var n;if(void 0===i){const i=null!==(n=o.originalKey)&&void 0!==n?n:o.key,r=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(o.key)}:{...o,key:i};return null!=t&&(r.finisher=function(e){t(e,i)}),r}{const n=o.constructor;void 0!==e&&Object.defineProperty(o,i,e(i)),null==t||t(n,i)}})({descriptor:o=>{const i={get(){var e,o;return null!==(o=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof o?Symbol():"__"+o;i.get=function(){var o,i;return void 0===this[e]&&(this[e]=null!==(i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}var ft;null===(ft=window.HTMLSlotElement)||void 0===ft||ft.prototype.assignedElements;var yt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ut=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let mt=class extends tt{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return P`
      <div
        @click="${()=>this.toggle()}"
        style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;align-content:center; cursor:pointer;"
      >
        <nidoca-typography style="padding-left:var(--space-medium);" text="${this.header}"></nidoca-typography>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?P` <slot></slot>`:P``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};mt.styles=r`
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
  `,yt([pt({type:String}),ut("design:type",String)],mt.prototype,"header",void 0),yt([pt({type:Boolean}),ut("design:type",Boolean)],mt.prototype,"opened",void 0),mt=yt([ct("nidoca-accordion-item")],mt);var gt,bt,vt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},xt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.SINGLE="SINGLE",t.MULTI="MULTI"}(bt||(bt={}));let wt=class extends tt{constructor(){super(...arguments),this.theme=lt.SURFACE,this.accordionType=bt.SINGLE}render(){return P`
      ${lt.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case bt.SINGLE:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof mt&&i!=e&&(i.opened=!1)}}case bt.MULTI:}t.stopPropagation()}};wt.styles=r`
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
  `,vt([pt({type:lt,converter:String}),xt("design:type","function"==typeof(gt=void 0!==lt&&lt)?gt:Object)],wt.prototype,"theme",void 0),vt([pt({type:bt,converter:String}),xt("design:type",String)],wt.prototype,"accordionType",void 0),vt([ht("#accordionSlot"),xt("design:type",Object)],wt.prototype,"accordionSlot",void 0),wt=vt([ct("nidoca-accordion")],wt);var $t,St,Et=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Rt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6",t.SUBTITLE1="SUBTITLE1",t.SUBTITLE2="SUBTITLE2",t.BODY1="BODY1",t.BODY2="BODY2",t.BUTTON="BUTTON",t.CAPTION="CAPTION",t.OVERLINE="OVERLINE"}($t||($t={})),function(t){t.JUSTIFY="text-align:justify;",t.JUSTIFY_ALL="text-align:justify-all;",t.LEFT="text-align: left;",t.RIGHT="text-align: right;",t.CENTER="text-align: center;",t.START="text-align: start;",t.END="text-align: end;",t.MATCH_PARENT="text-align: match-parent;",t.INHERIT="text-align: inherit;",t.INITIAL="text-align: initial;",t.UNSET="text-align: unset;"}(St||(St={}));let Tt=class extends tt{constructor(){super(...arguments),this.type=$t.BODY1,this.textAlign=St.START,this.text=""}render(){return P` <span class="TYPOGRAPHY ${this.type}" style="${this.textAlign}">${this.text}<slot></slot></span> `}};Tt.styles=r`
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
  `,Et([pt({type:$t,converter:String}),Rt("design:type",String)],Tt.prototype,"type",void 0),Et([pt({type:St,converter:String}),Rt("design:type",String)],Tt.prototype,"textAlign",void 0),Et([pt({type:String}),Rt("design:type",String)],Tt.prototype,"text",void 0),Tt=Et([ct("nidoca-typography")],Tt);var kt,Ot=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},It=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(kt||(kt={}));let jt=class extends tt{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return P`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${eo.NONE}"
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
          .type="${$t.OVERLINE}"
          textAlign="${St.CENTER}"
          text="${this.primaryText}"
          ><slot></slot>
        </nidoca-typography>
      </div>
    `}determineBackgroundColor(t){return t==kt.COMPLETED?"var(--app-color-primary)":t==kt.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==kt.FINISH?"var(--app-color-success)":t==kt.COMPLETED?"var(--mdc-theme-on-primary)":t==kt.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};jt.styles=r`
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
  `,Ot([pt({type:String}),It("design:type",String)],jt.prototype,"icon",void 0),Ot([pt({type:String}),It("design:type",String)],jt.prototype,"primaryText",void 0),Ot([pt({type:Number}),It("design:type",Object)],jt.prototype,"state",void 0),Ot([pt({type:Boolean}),It("design:type",Boolean)],jt.prototype,"isLast",void 0),jt=Ot([ct("nidoca-wizard-step")],jt);var _t=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let At=class extends tt{render(){return P`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();let i=0;for(let t=0;t<o.length;t++){const e=o[t];e instanceof jt&&(e.index=t,e.state==kt.CURRENT&&(i=t),e.index==o.length-1&&(e.isLast=!0))}this.changeState(i)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof jt&&void 0!==i.index&&(i.index<t?i.state=kt.COMPLETED:i.index==t?i.state=kt.CURRENT:i.state=kt.OPEN)}}}};At.styles=r``,_t([ht("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],At.prototype,"wizardSlot",void 0),At=_t([ct("nidoca-wizard")],At);var Ct=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Pt=class extends tt{constructor(){super(...arguments),this.clickable=!0}render(){return P`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Pt.styles=r`
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
  `,Ct([pt({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Pt.prototype,"clickable",void 0),Pt=Ct([ct("nidoca-chip")],Pt);var Dt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Lt=class extends tt{constructor(){super(...arguments),this.code=""}render(){return P`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};Lt.styles=r`
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
  `,Dt([pt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Lt.prototype,"code",void 0),Lt=Dt([ct("nidoca-code")],Lt);var Bt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Nt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Mt=class extends tt{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const o=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?P`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:P``}calculatePositionStyle(t){let e="";if(t){const o=t.getBoundingClientRect();o.right>window.innerWidth/2?e+=`right:${window.innerWidth-o.right}px;`:e+=`left:${o.left}px;`,o.top>window.innerHeight/2?e+=`bottom:${o.height+window.innerHeight-o.top}px;`:e+=`top:${o.bottom}px;`}return e}};Mt.styles=r`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Bt([pt({type:Boolean}),Nt("design:type",Boolean)],Mt.prototype,"show",void 0),Bt([pt({type:Object}),Nt("design:type",Object)],Mt.prototype,"associatedElement",void 0),Mt=Bt([ct("nidoca-elevation"),Nt("design:paramtypes",[])],Mt);var zt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Ut{}Ut.PROGRESS="PROGRESS",Ut.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Wt=class extends tt{constructor(){super(...arguments),this.progressType=Ut.PROGRESS}render(){return P` <style>
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

      <progress class="${this.progressType}"></progress>`}};Wt.styles=r``,zt([pt({type:lt,converter:String}),Ht("design:type",Object)],Wt.prototype,"theme",void 0),zt([pt({type:Ut,converter:String}),Ht("design:type",String)],Wt.prototype,"progressType",void 0),Wt=zt([ct("nidoca-progress")],Wt);var Yt,Gt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},qt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.CONTAINED="CONTAINED",t.OUTLINED="OUTLINED",t.TEXT="TEXT"}(Yt||(Yt={}));let Ft=class extends tt{constructor(){super(...arguments),this.theme=lt.PRIMARY,this.buttonType=Yt.CONTAINED,this.leadingIcon="",this.text=""}render(){return P`
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
            ${this.leadingIcon?P`<nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>`:P``}
            ${this.leadingIcon||this.buttonType==Yt.TEXT?P``:P`<nidoca-layout-spacer> </nidoca-layout-spacer>`}

            <nidoca-typography
              style="padding:var(--space-big);"
              text="${this.text}"
              type="${$t.BUTTON}"
            >
              <slot></slot>
            </nidoca-typography>

            ${this.buttonType!=Yt.TEXT?P`<nidoca-layout-spacer></nidoca-layout-spacer>`:P``}
          </div>
        </div>
      </nidoca-ripple>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ft.styles=r`
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
  `,Gt([pt({type:lt,converter:String}),qt("design:type",Object)],Ft.prototype,"theme",void 0),Gt([pt({type:Yt,converter:String}),qt("design:type",String)],Ft.prototype,"buttonType",void 0),Gt([pt({type:String}),qt("design:type",String)],Ft.prototype,"leadingIcon",void 0),Gt([pt({type:String}),qt("design:type",String)],Ft.prototype,"text",void 0),Ft=Gt([ct("nidoca-button")],Ft);var Xt,Kt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};!function(t){t.NONE="NONE",t.KEY_LIGHT="KEY_LIGHT",t.AMBIENT_LIGHT="AMBIENT_LIGHT",t.COMBINED="COMBINED"}(Xt||(Xt={}));let Vt=class extends tt{constructor(){super(...arguments),this.shadowType=Xt.KEY_LIGHT}render(){return P` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `}};Vt.styles=r`
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
  `,Kt([pt({type:Xt}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Vt.prototype,"shadowType",void 0),Vt=Kt([ct("nidoca-box-shadow")],Vt);class Jt extends tt{}var Zt=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Qt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let te=class extends tt{constructor(){super(),this.autocomplete=!0,null==this.getAttribute("style")&&this.setAttribute("style","width:100%;")}render(){return P`
      <form
        class="container"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        .?autocomplete="${this.autocomplete}"
      >
        <slot id="slotElement"></slot>
      </form>
    `}getInputElements(t){if(null==t)return[];const e=[],o=t.assignedElements({flatten:!0});for(let t=0;t<o.length;t++){const i=o[t];this.recursiveInputElementSearch(i,e)}return e}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t&&e.scrollIntoView(!0),t=!1);return t}getOutputData(){const t=new FormData,e={};for(const o of this.getInputElements(this.slotElement)){const i=o.getOutputData();e[i.key]=i.value,t.append(i.key,i.value)}const o={};return o.jsonObject=e,o.formData=t,o}formButtonClicked(t){console.log("formButton clicked: "+t.detail),"submitButton"===t.detail&&this.dispatchEvent(new CustomEvent("nidoca-event-form-submit-button-clicked",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}recursiveInputElementSearch(t,e){if(t instanceof Jt)e.push(t);else if(t.hasChildNodes()){const o=t.children;for(const t of[].slice.call(o))this.recursiveInputElementSearch(t,e)}}};te.styles=r`
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
  `,Zt([pt({type:Boolean}),Qt("design:type",Boolean)],te.prototype,"autocomplete",void 0),Zt([pt({type:lt,converter:String}),Qt("design:type",Object)],te.prototype,"theme",void 0),Zt([ht("#slotElement"),Qt("design:type",Object)],te.prototype,"slotElement",void 0),te=Zt([ct("nidoca-form"),Qt("design:paramtypes",[])],te);const ee=t=>(...e)=>({_$litDirective$:t,values:e});class oe{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,o){this._$Ct=t,this._$AM=e,this._$Ci=o}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:ie}=V,ne=()=>document.createComment(""),re=(t,e,o)=>{var i;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===o){const e=n.insertBefore(ne(),r),i=n.insertBefore(ne(),r);o=new ie(e,i,t,t.options)}else{const e=o._$AB.nextSibling,a=o._$AM,s=a!==t;if(s){let e;null===(i=o._$AQ)||void 0===i||i.call(o,t),o._$AM=t,void 0!==o._$AP&&(e=t._$AU)!==a._$AU&&o._$AP(e)}if(e!==r||s){let t=o._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return o},ae=(t,e,o=t)=>(t._$AI(e,o),t),se={},le=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let o=t._$AA;const i=t._$AB.nextSibling;for(;o!==i;){const t=o.nextSibling;o.remove(),o=t}},ce=(t,e,o)=>{const i=new Map;for(let n=e;n<=o;n++)i.set(t[n],n);return i},de=ee(class extends oe{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,o){let i;void 0===o?o=e:void 0!==e&&(i=e);const n=[],r=[];let a=0;for(const e of t)n[a]=i?i(e,a):a,r[a]=o(e,a),a++;return{values:r,keys:n}}render(t,e,o){return this.dt(t,e,o).values}update(t,[e,o,i]){var n;const r=t._$AH,{values:a,keys:s}=this.dt(e,o,i);if(!Array.isArray(r))return this.at=s,a;const l=null!==(n=this.at)&&void 0!==n?n:this.at=[],c=[];let d,p,h=0,f=r.length-1,y=0,u=a.length-1;for(;h<=f&&y<=u;)if(null===r[h])h++;else if(null===r[f])f--;else if(l[h]===s[y])c[y]=ae(r[h],a[y]),h++,y++;else if(l[f]===s[u])c[u]=ae(r[f],a[u]),f--,u--;else if(l[h]===s[u])c[u]=ae(r[h],a[u]),re(t,c[u+1],r[h]),h++,u--;else if(l[f]===s[y])c[y]=ae(r[f],a[y]),re(t,r[h],r[f]),f--,y++;else if(void 0===d&&(d=ce(s,y,u),p=ce(l,h,f)),d.has(l[h]))if(d.has(l[f])){const e=p.get(s[y]),o=void 0!==e?r[e]:null;if(null===o){const e=re(t,r[h]);ae(e,a[y]),c[y]=e}else c[y]=ae(o,a[y]),re(t,r[h],o),r[e]=null;y++}else le(r[f]),f--;else le(r[h]),h++;for(;y<=u;){const e=re(t,c[u+1]);ae(e,a[y]),c[y++]=e}for(;h<=f;){const t=r[h++];null!==t&&le(t)}return this.at=s,((t,e=se)=>{t._$AH=e})(t,c),D}}),pe={},he=ee(class extends oe{constructor(){super(...arguments),this.nt=pe}render(t,e){return e()}update(t,[e,o]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return D}else if(this.nt===e)return D;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,o)}});var fe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ue=class extends Jt{constructor(){super(...arguments),this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return P` <style>
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
        ${this.trailingIcon?P`<nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space-medium);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:P``}
        <div class="container">
          <nidoca-typography
            style="padding-left:var(--space-medium); padding-right:var(--space-medium);"
            class="label"
            .type="${$t.CAPTION}"
            text="${this.label}"
          ></nidoca-typography>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${he([this.value,this.options],(()=>P`
                ${de(this.options,(t=>null==t?P` <option></option>`:this.isSelectedOption(t)?P` <option value="${t.key}" selected>${t.value}</option> `:P` <option value="${t.key}">${t.value}</option> `))}
              `))}
          </select>
        </div>
      </div>

      ${this.infoText||this.warningText||this.errorText?P`<div>
            ${this.infoText?P` <nidoca-typography
                  .type="${$t.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-typography>`:P``}
            ${this.warningText?P` <nidoca-typography
                  style="color:var(--app-color-warning-background)"
                  .type="${$t.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-typography>`:P``}
            ${this.errorText?P` <nidoca-typography
                  style="color:var(--app-color-error-background)"
                  .type="${$t.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-typography>`:P``}
          </div> `:P``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,o=this.selectElement.options.length;e<o;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const o of this.value)if(e=t.key===o,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),Object.keys(t).forEach((e=>{o.push({key:e,value:t[e]})})),o}static stringArrayToOptions(t,e=!0){const o=[];return e&&o.push({key:"",value:""}),t.forEach((t=>{o.push({key:t,value:t})})),o}static toComboboxOptions(t=null,e=null){if(null==t)return[];const o=[];return Object.values(t).forEach((i=>{let n=String(Object.keys(t)[Object.values(t).indexOf(i)]);e&&(n=n.concat(e)),o.push({key:i,value:n})})),o}};ue.styles=r`
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
  `,fe([pt({type:lt,converter:String}),ye("design:type",Object)],ue.prototype,"theme",void 0),fe([pt({type:String}),ye("design:type",String)],ue.prototype,"trailingIcon",void 0),fe([pt({type:String}),ye("design:type",String)],ue.prototype,"label",void 0),fe([pt({type:String}),ye("design:type",String)],ue.prototype,"errorText",void 0),fe([pt({type:String}),ye("design:type",String)],ue.prototype,"infoText",void 0),fe([pt({type:String}),ye("design:type",String)],ue.prototype,"warningText",void 0),fe([pt(),ye("design:type",Object)],ue.prototype,"value",void 0),fe([pt({type:Array}),ye("design:type",Array)],ue.prototype,"options",void 0),fe([pt({type:String}),ye("design:type",String)],ue.prototype,"name",void 0),fe([pt({type:Boolean}),ye("design:type",Boolean)],ue.prototype,"required",void 0),fe([pt({type:Boolean}),ye("design:type",Boolean)],ue.prototype,"multiple",void 0),fe([pt({type:Number}),ye("design:type",Number)],ue.prototype,"size",void 0),fe([ht("#selectElement"),ye("design:type",Object)],ue.prototype,"selectElement",void 0),ue=fe([ct("nidoca-form-combobox")],ue);const me=t=>null!=t?t:L;var ge,be=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ve=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.COLOR="color",t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url"}(ge||(ge={}));let xe=class extends Jt{constructor(){super(...arguments),this.type=ge.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1}render(){return this.type==ge.HIDDEN?P`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:P` <style>
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
            ${this.trailingIcon?P`<nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space-medium);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:P``}
            <div class="container">
              <nidoca-typography
                style="padding-left:var(--space-medium); padding-right:var(--space-medium);"
                class="label"
                .type="${$t.CAPTION}"
                text="${this.label}"
              ></nidoca-typography>

              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder?this.placeholder:this.label}"
                size="${me(this.size)}"
                minlength="${me(this.minlength)}"
                maxlength="${me(this.maxlength)}"
                min="${me(this.min)}"
                max="${me(this.max)}"
                step="${me(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?P`<div>
                ${this.infoText?P` <nidoca-typography
                      .type="${$t.SUBTITLE1}"
                      text="${this.infoText}"
                    ></nidoca-typography>`:P``}
                ${this.warningText?P` <nidoca-typography
                      style="color:var(--app-color-warning-background)"
                      .type="${$t.SUBTITLE1}"
                      text="${this.warningText}"
                    ></nidoca-typography>`:P``}
                ${this.errorText?P` <nidoca-typography
                      style="color:var(--app-color-error-background)"
                      .type="${$t.SUBTITLE1}"
                      text="${this.errorText}"
                    ></nidoca-typography>`:P``}
              </div> `:P``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};xe.styles=r`
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
  `,be([pt({type:lt,converter:String}),ve("design:type",Object)],xe.prototype,"theme",void 0),be([pt({type:ge,converter:String}),ve("design:type",String)],xe.prototype,"type",void 0),be([pt({type:String}),ve("design:type",String)],xe.prototype,"label",void 0),be([pt({type:String}),ve("design:type",String)],xe.prototype,"placeholder",void 0),be([pt({type:String}),ve("design:type",String)],xe.prototype,"trailingIcon",void 0),be([pt({type:String}),ve("design:type",String)],xe.prototype,"errorText",void 0),be([pt({type:String}),ve("design:type",String)],xe.prototype,"infoText",void 0),be([pt({type:String}),ve("design:type",String)],xe.prototype,"warningText",void 0),be([pt({type:String}),ve("design:type",String)],xe.prototype,"name",void 0),be([pt(),ve("design:type",String)],xe.prototype,"value",void 0),be([pt({type:Boolean}),ve("design:type",Boolean)],xe.prototype,"required",void 0),be([pt({type:Boolean}),ve("design:type",Boolean)],xe.prototype,"disabled",void 0),be([pt({type:Boolean}),ve("design:type",Boolean)],xe.prototype,"checked",void 0),be([pt({type:Number}),ve("design:type",Object)],xe.prototype,"maxlength",void 0),be([pt({type:Number}),ve("design:type",Object)],xe.prototype,"minlength",void 0),be([pt({type:Number}),ve("design:type",Object)],xe.prototype,"min",void 0),be([pt({type:Number}),ve("design:type",Object)],xe.prototype,"max",void 0),be([pt({type:Number}),ve("design:type",Object)],xe.prototype,"step",void 0),be([pt({type:Number}),ve("design:type",Object)],xe.prototype,"size",void 0),be([ht("#inputElement"),ve("design:type",Object)],xe.prototype,"inputElement",void 0),xe=be([ct("nidoca-form-text")],xe);var we=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},$e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Se=class extends Jt{constructor(){super(...arguments),this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return P`
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
            .type="${$t.CAPTION}"
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

      ${this.infoText||this.warningText||this.errorText?P`<div>
            ${this.infoText?P` <nidoca-typography
                  .type="${$t.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-typography>`:P``}
            ${this.warningText?P` <nidoca-typography
                  style="color:var(--app-color-warning-background)"
                  .type="${$t.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-typography>`:P``}
            ${this.errorText?P` <nidoca-typography
                  style="color:var(--app-color-error-background)"
                  .type="${$t.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-typography>`:P``}
          </div> `:P``}
    `}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Se.styles=r`
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
  `,we([pt({type:lt,converter:String}),$e("design:type",Object)],Se.prototype,"theme",void 0),we([pt({type:String}),$e("design:type",String)],Se.prototype,"infoText",void 0),we([pt({type:String}),$e("design:type",String)],Se.prototype,"warningText",void 0),we([pt({type:String}),$e("design:type",String)],Se.prototype,"errorText",void 0),we([pt({type:String}),$e("design:type",String)],Se.prototype,"name",void 0),we([pt(),$e("design:type",String)],Se.prototype,"value",void 0),we([pt({type:String}),$e("design:type",String)],Se.prototype,"label",void 0),we([pt({type:Boolean}),$e("design:type",Boolean)],Se.prototype,"required",void 0),we([pt({type:String}),$e("design:type",String)],Se.prototype,"placeholder",void 0),we([pt({type:Boolean}),$e("design:type",Boolean)],Se.prototype,"disabled",void 0),we([pt({type:Number}),$e("design:type",Number)],Se.prototype,"rows",void 0),we([ht("#inputElement"),$e("design:type",Object)],Se.prototype,"inputElement",void 0),Se=we([ct("nidoca-form-textarea")],Se);var Ee,Re=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Te=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.DATE="date",t.DATETIME_LOCAL="datetime-local",t.MONTH="month",t.TIME="time",t.WEEK="week"}(Ee||(Ee={}));let ke=class extends Jt{constructor(){super(...arguments),this.trailingIcon="",this.type=Ee.DATE,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.errorText="",this.infoText="",this.warningText=""}render(){return P`
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
        ${this.trailingIcon?P`<nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space-medium);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:P``}
        <div class="container">
          <nidoca-typography
            style="padding-left:var(--space-medium); padding-right:var(--space-medium);"
            class="label"
            .type="${$t.CAPTION}"
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
      ${this.infoText||this.warningText||this.errorText?P`<div>
            ${this.infoText?P` <nidoca-typography
                  .type="${$t.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-typography>`:P``}
            ${this.warningText?P` <nidoca-typography
                  style="color:var(--app-color-warning-background)"
                  .type="${$t.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-typography>`:P``}
            ${this.errorText?P` <nidoca-typography
                  style="color:var(--app-color-error-background)"
                  .type="${$t.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-typography>`:P``}
          </div> `:P``}
    `}getOutputData(){var t;return{key:this.name,value:null===(t=this.inputElement)||void 0===t?void 0:t.value}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ke.styles=r`
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
  `,Re([pt({type:lt,converter:String}),Te("design:type",Object)],ke.prototype,"theme",void 0),Re([pt({type:String}),Te("design:type",String)],ke.prototype,"trailingIcon",void 0),Re([pt(),Te("design:type",String)],ke.prototype,"type",void 0),Re([pt({type:String}),Te("design:type",String)],ke.prototype,"name",void 0),Re([pt({type:String}),Te("design:type",String)],ke.prototype,"value",void 0),Re([pt({type:String}),Te("design:type",String)],ke.prototype,"label",void 0),Re([pt({type:Boolean}),Te("design:type",Boolean)],ke.prototype,"required",void 0),Re([pt({type:String}),Te("design:type",String)],ke.prototype,"placeholder",void 0),Re([pt({type:Boolean}),Te("design:type",Boolean)],ke.prototype,"disabled",void 0),Re([pt({type:String}),Te("design:type",String)],ke.prototype,"errorText",void 0),Re([pt({type:String}),Te("design:type",String)],ke.prototype,"infoText",void 0),Re([pt({type:String}),Te("design:type",String)],ke.prototype,"warningText",void 0),Re([ht("#inputElement"),Te("design:type",Object)],ke.prototype,"inputElement",void 0),ke=Re([ct("nidoca-form-date")],ke);var Oe,Ie=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},je=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _e=class extends Jt{constructor(){super(...arguments),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=lt.PRIMARY}render(){return P`
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
        <nidoca-typography .type="${$t.SUBTITLE1}" text="${this.label}">
          <slot></slot>
        </nidoca-typography>

        ${this.infoText.length>0?P` <nidoca-typography
              .type="${$t.SUBTITLE2}"
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
            @input="${t=>{this.checked=t.target.checked,console.log(this.checked)}}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      ${this.warningText?P` <nidoca-typography
            style="color:var(--app-color-warning-background)"
            .type="${$t.BODY1}"
            text="${this.warningText}"
          ></nidoca-typography>`:P``}
      ${this.errorText?P` <nidoca-typography
            style="color:var(--app-color-error-background)"
            .type="${$t.BODY1}"
            text="${this.errorText}"
          ></nidoca-typography>`:P``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};_e.styles=r`
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
  `,Ie([pt({type:String}),je("design:type",String)],_e.prototype,"name",void 0),Ie([pt({type:String}),je("design:type",String)],_e.prototype,"label",void 0),Ie([pt({type:String}),je("design:type",String)],_e.prototype,"infoText",void 0),Ie([pt({type:String}),je("design:type",String)],_e.prototype,"errorText",void 0),Ie([pt({type:String}),je("design:type",String)],_e.prototype,"warningText",void 0),Ie([pt({type:Boolean}),je("design:type",Boolean)],_e.prototype,"required",void 0),Ie([pt({type:Boolean}),je("design:type",Boolean)],_e.prototype,"disabled",void 0),Ie([pt({type:Boolean}),je("design:type",Boolean)],_e.prototype,"checked",void 0),Ie([pt({type:String}),je("design:type","function"==typeof(Oe=void 0!==lt&&lt)?Oe:Object)],_e.prototype,"theme",void 0),Ie([ht("#inputElement"),je("design:type",Object)],_e.prototype,"inputElement",void 0),_e=Ie([ct("nidoca-form-switch")],_e);var Ae=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Ce=class extends tt{constructor(){super(...arguments),this.code=""}render(){return P``}};Ce.styles=r``,Ae([pt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ce.prototype,"code",void 0),Ce=Ae([ct("nidoca-upload")],Ce);var Pe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let De=class extends tt{constructor(){super(...arguments),this.text=""}render(){return P`
      <div class="container">
        <nidoca-layout-spacer left="10px"></nidoca-layout-spacer>
        ${this.text?P`<nidoca-typography .type="${$t.H5}">${this.text}</nidoca-typography>`:P``}
        <slot></slot>
      </div>
    `}};De.styles=r`
    .container {
      display: flex;
    }
  `,Pe([pt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],De.prototype,"text",void 0),De=Pe([ct("nidoca-menu-area")],De);var Le,Be=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ne=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.ITEM="item",t.SECTION="section"}(Le||(Le={}));let Me=class extends tt{constructor(){super(...arguments),this.text="",this.icon="",this.type=Le.ITEM}render(){return P`
      <div class="container ${this.type}">
        ${this.icon?P` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space-little); font-size:var(--icon-size);"
            ></nidoca-icon>`:P` <nidoca-layout-spacer left="10px" right="36px"></nidoca-layout-spacer>`}
        ${this.text?P`<nidoca-typography
              .type="${this.type==Le.ITEM?$t.SUBTITLE1:$t.CAPTION}"
              >${this.text}</nidoca-typography
            >`:P``}
      </div>
    `}};Me.styles=r`
    .container {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
  `,Be([pt({type:String}),Ne("design:type",String)],Me.prototype,"text",void 0),Be([pt({type:String}),Ne("design:type",String)],Me.prototype,"icon",void 0),Be([pt({type:String}),Ne("design:type",String)],Me.prototype,"type",void 0),Me=Be([ct("nidoca-menu-item")],Me);var ze=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let He=class extends tt{render(){return P` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <slot></slot>`}};He.styles=r`
    :host {
      display: block;
      width: 100%;
      padding-left: var(--space-normal);
      padding-right: var(--space-normal);
    }
  `,ze([pt({type:lt,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],He.prototype,"theme",void 0),He=ze([ct("nidoca-menu")],He);class Ue{constructor(t,e,o=10240){this.key=t,this.minWidth=e,this.maxWidth=o}static applyDevices(t,e){for(let o=0;o<e.length;o++)if(e[o]==this.getCurrentScreen())return t;return""}static getCurrentScreen(){let t=null;return[Ue.MOBILE,Ue.TABLET,Ue.DESKTOP].forEach((e=>{(null==e.minWidth||e.minWidth<window.innerWidth)&&(null==e.maxWidth||e.maxWidth>window.innerWidth)&&(t=e)})),t}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}Ue.MOBILE=new Ue("MOBILE",ot,it),Ue.TABLET=new Ue("TABLET",nt,rt),Ue.DESKTOP=new Ue("DESKTOP",at);var We=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ge=class extends tt{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return P`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,o,i,n,r){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(i).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(r).concat(";")}};Ge.styles=r`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,We([pt({type:String}),Ye("design:type",String)],Ge.prototype,"height",void 0),We([pt({type:String}),Ye("design:type",String)],Ge.prototype,"width",void 0),We([pt({type:String}),Ye("design:type",String)],Ge.prototype,"left",void 0),We([pt({type:String}),Ye("design:type",String)],Ge.prototype,"top",void 0),We([pt({type:String}),Ye("design:type",String)],Ge.prototype,"right",void 0),We([pt({type:String}),Ye("design:type",String)],Ge.prototype,"bottom",void 0),Ge=We([ct("nidoca-layout-floating")],Ge);var qe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Fe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xe=class extends tt{constructor(){super(...arguments),this.width="",this.height="",this.minWidth="",this.minHeight="",this.contentWidth="",this.contentHeight="",this.devices=[Ue.DESKTOP,Ue.TABLET,Ue.MOBILE]}updated(t){for(let e=0;e<this.devices.length;e++)if(this.devices[e]==Ue.getCurrentScreen()){t.has("width")&&""!=this.width&&(this.style.width=this.width),t.has("height")&&""!=this.height&&(this.style.height=this.height),t.has("minWidth")&&""!=this.minWidth&&(this.style.minWidth=this.minWidth),t.has("minHeight")&&""!=this.minHeight&&(this.style.minHeight=this.minHeight);break}super.updated(t)}render(){return P`
      ${lt.getStyle(this.theme)}
      <div class="container theme">
        <div class="container" style="${this.applyDevices(this.contentWidth,this.contentHeight,this.devices)}">
          <slot></slot>
        </div>
      </div>
    `}applyDevices(t,e,o){for(let i=0;i<o.length;i++)if(o[i]==Ue.getCurrentScreen())return`${""!=t?"width:".concat(t).concat(";"):""}${""!=e?"height:".concat(e).concat(";"):""}`;return""}};Xe.styles=r`
    :host {
      display: block;
    }
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `,qe([pt({type:String}),Fe("design:type",String)],Xe.prototype,"width",void 0),qe([pt({type:String}),Fe("design:type",String)],Xe.prototype,"height",void 0),qe([pt({type:String}),Fe("design:type",String)],Xe.prototype,"minWidth",void 0),qe([pt({type:String}),Fe("design:type",String)],Xe.prototype,"minHeight",void 0),qe([pt({type:String}),Fe("design:type",String)],Xe.prototype,"contentWidth",void 0),qe([pt({type:String}),Fe("design:type",String)],Xe.prototype,"contentHeight",void 0),qe([pt({type:Ue,converter:Array}),Fe("design:type",Array)],Xe.prototype,"devices",void 0),qe([pt({type:lt,converter:String}),Fe("design:type",Object)],Xe.prototype,"theme",void 0),Xe=qe([ct("nidoca-layout-container")],Xe);var Ke=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ve=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Je=class extends tt{constructor(){super(),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText="",null==this.getAttribute("style")&&this.setAttribute("style","font-size: var(--icon-size); padding:var(--space-normal)")}render(){return P`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};Je.styles=r`
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
  `,Ke([pt({type:String}),Ve("design:type",String)],Je.prototype,"icon",void 0),Ke([pt({type:Boolean}),Ve("design:type",Boolean)],Je.prototype,"clickable",void 0),Ke([pt({type:Boolean}),Ve("design:type",Boolean)],Je.prototype,"deactivated",void 0),Ke([pt({type:String}),Ve("design:type",String)],Je.prototype,"primaryText",void 0),Je=Ke([ct("nidoca-icon"),Ve("design:paramtypes",[])],Je);var Ze,Qe=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},to=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class eo{}eo.NONE="NONE",eo.DEFAULT_SHADOW="DEFAULT_SHADOW",eo.SHADOW_1="SHADOW_1",eo.SHADOW_2="SHADOW_2",eo.SHADOW_3="SHADOW_3";let oo=class extends tt{constructor(){super(...arguments),this.icon="",this.theme=lt.PRIMARY,this.shadowType=eo.DEFAULT_SHADOW,this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-normal)"}render(){return P`
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
    `}clicked(){return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};oo.styles=r`
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
  `,Qe([pt({type:String}),to("design:type",String)],oo.prototype,"icon",void 0),Qe([pt({type:Object}),to("design:type","function"==typeof(Ze=void 0!==lt&&lt)?Ze:Object)],oo.prototype,"theme",void 0),Qe([pt({type:Object}),to("design:type",eo)],oo.prototype,"shadowType",void 0),Qe([pt({type:Boolean}),to("design:type",Boolean)],oo.prototype,"clickable",void 0),Qe([pt({type:Boolean}),to("design:type",Boolean)],oo.prototype,"deactivated",void 0),Qe([pt({type:String}),to("design:type",String)],oo.prototype,"cssStyle",void 0),oo=Qe([ct("nidoca-icon-extended")],oo);var io=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let no=class extends tt{render(){return P`
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
  `,io([ht("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],no.prototype,"rippleContainerElement",void 0),no=io([ct("nidoca-ripple")],no);var ro=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ao=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let so=class extends tt{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%"}render(){return P`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};so.styles=r`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,ro([pt({type:String}),ao("design:type",String)],so.prototype,"src",void 0),ro([pt({type:String}),ao("design:type",String)],so.prototype,"width",void 0),ro([pt({type:String}),ao("design:type",String)],so.prototype,"height",void 0),so=ro([ct("nidoca-img")],so);var lo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let co=class extends tt{constructor(){super(...arguments),this.src=""}render(){return P`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};co.styles=r``,lo([pt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],co.prototype,"src",void 0),co=lo([ct("nidoca-movie")],co);var po=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ho=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fo=class extends tt{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return P`
      <nidoca-form-text
        .theme="${this.theme}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${ge.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};fo.styles=r`
    :host {
      display: block;
      width: 100%;
    }
  `,po([pt({type:lt,converter:String}),ho("design:type",Object)],fo.prototype,"theme",void 0),po([pt({type:String}),ho("design:type",String)],fo.prototype,"label",void 0),po([pt({type:String}),ho("design:type",String)],fo.prototype,"placeholder",void 0),po([pt({type:String}),ho("design:type",String)],fo.prototype,"name",void 0),po([pt({type:Number}),ho("design:type",Number)],fo.prototype,"min",void 0),po([pt({type:Number}),ho("design:type",Number)],fo.prototype,"max",void 0),po([pt({type:String}),ho("design:type",String)],fo.prototype,"errorText",void 0),po([ht("#inputfield"),ho("design:type",Object)],fo.prototype,"inputfield",void 0),fo=po([ct("nidoca-form-captcha")],fo);var yo,uo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},mo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}(yo||(yo={}));let go=class extends tt{constructor(){super(...arguments),this.text="",this.href="",this.targetType=yo.SELF}render(){return P` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `}};go.styles=r`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,uo([pt({type:String}),mo("design:type",String)],go.prototype,"text",void 0),uo([pt({type:String}),mo("design:type",String)],go.prototype,"href",void 0),uo([pt({type:String}),mo("design:type",String)],go.prototype,"targetType",void 0),go=uo([ct("nidoca-link")],go);var bo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},vo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let xo=class extends tt{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null}update(t){super.update(t),null!=t.get("selectionMode")&&(this.selectionMode||(this.selected=!1))}render(){return P`
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
            ${this.primaryText?P`<nidoca-typography class="item" .type="${$t.BODY1}"
                  >${this.primaryText}</nidoca-typography
                >`:P``}
            <slot></slot>
            ${this.secondaryText?P`<nidoca-typography class="item" .type="${$t.SUBTITLE1}"
                  >${this.secondaryText}</nidoca-typography
                >`:P``}
            <slot name="secondary"></slot>
          </div>
          <slot name="meta" class="item"></slot>
        </div>
      </nidoca-ripple>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};xo.styles=r`
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
  `,bo([pt({type:Boolean}),vo("design:type",Boolean)],xo.prototype,"selectionMode",void 0),bo([pt({type:Boolean}),vo("design:type",Boolean)],xo.prototype,"selected",void 0),bo([pt({type:String}),vo("design:type",String)],xo.prototype,"primaryText",void 0),bo([pt({type:String}),vo("design:type",String)],xo.prototype,"secondaryText",void 0),xo=bo([ct("nidoca-list-item")],xo);var wo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},$o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let So=class extends tt{constructor(){super(...arguments),this.selectionMode=!1}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.selectionMode=this.selectionMode}))}))}render(){return P`<style>
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
      ></slot> `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof xo&&t.push(i)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof xo&&i.selected&&t.push(i)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let o=0;for(let i=0;i<e.length;i++){const n=e[i];n instanceof xo&&(n.selected&&t.push(o),o++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){this.getItems().forEach((t=>{t.selected=!1}))}};So.styles=r`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,wo([pt({type:lt,converter:String}),$o("design:type",Object)],So.prototype,"theme",void 0),wo([pt({type:Boolean}),$o("design:type",Boolean)],So.prototype,"selectionMode",void 0),wo([ht("#slotElement"),$o("design:type",Object)],So.prototype,"slotElement",void 0),So=wo([ct("nidoca-list")],So);var Eo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Ro=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let To=class extends tt{constructor(){super(...arguments),this.theme=lt.PRIMARY,this.prominent=!1}render(){return P`
      ${lt.getStyle(this.theme)}
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
      ${this.prominent?P`<slot class="prominent" name="prominent"></slot>`:P``}
    `}};To.styles=r`
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
  `,Eo([pt({type:lt,converter:String}),Ro("design:type",String)],To.prototype,"theme",void 0),Eo([pt({type:Boolean}),Ro("design:type",Boolean)],To.prototype,"prominent",void 0),To=Eo([ct("nidoca-top-app-bar")],To);var ko=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Oo=class extends tt{constructor(){super(...arguments),this.text=""}render(){return P`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-end;align-content:flex-start;"
      >
        <nidoca-layout-spacer style="flex-basis:100%;">
          <nidoca-typography .type="${$t.H6}" text="${this.text}"></nidoca-typography>
        </nidoca-layout-spacer>
      </div>
    `}};Oo.styles=r``,ko([pt({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Oo.prototype,"text",void 0),Oo=ko([ct("nidoca-list-section")],Oo);var Io=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},jo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _o=class extends tt{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new Je],["row 2",new Je]]}render(){return P`
      <div>
        <table>
          <thead>
            ${he([this.headers],(()=>P` ${de(this.headers,(t=>P` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${he([this.rows],(()=>P`
                  ${de(this.rows,(t=>P`
                        <tr>
                          ${de(t,(t=>P` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};_o.styles=r`
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
  `,Io([pt({type:Array}),jo("design:type",Array)],_o.prototype,"headers",void 0),Io([pt({type:Array}),jo("design:type",Array)],_o.prototype,"rows",void 0),_o=Io([ct("nidoca-table")],_o);var Ao=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let Co=class extends tt{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?P`<slot></slot>`:P``}};Co.styles=r``,Ao([pt({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Co.prototype,"selected",void 0),Co=Ao([ct("nidoca-tab-content")],Co);var Po,Do=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Lo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Bo=class extends tt{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=lt.PRIMARY}render(){return P`
      <style>
        :host(.SELECTED) {
          border-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?P` <nidoca-typography .type="${$t.OVERLINE}" text="${this.text}"></nidoca-typography> `:P``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Bo.styles=r`
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
  `,Do([pt({type:Boolean}),Lo("design:type",Boolean)],Bo.prototype,"selected",void 0),Do([pt({type:String}),Lo("design:type",String)],Bo.prototype,"text",void 0),Do([pt({type:String}),Lo("design:type","function"==typeof(Po=void 0!==lt&&lt)?Po:Object)],Bo.prototype,"theme",void 0),Bo=Do([ct("nidoca-tab")],Bo);var No,Mo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},zo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ho=class extends tt{constructor(){super(...arguments),this.theme=lt.PRIMARY,this.tabIndex=0}render(){return P`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,o=t[this.tabIndex];for(let i=0;i<t.length;i++){const n=t[i];n instanceof Bo&&(n.theme=this.theme,n.style.width=String(e).concat("%"),n==o?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof Co&&(this.tabIndex==t?i.selected=!0:i.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];if(i instanceof Bo&&i==t){this.tabIndex=o;break}}}}};Ho.styles=r`
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
  `,Mo([ht("#tabSlot"),zo("design:type",Object)],Ho.prototype,"tabSlot",void 0),Mo([ht("#tabContentSlot"),zo("design:type",Object)],Ho.prototype,"tabContentSlot",void 0),Mo([pt({type:String}),zo("design:type","function"==typeof(No=void 0!==lt&&lt)?No:Object)],Ho.prototype,"theme",void 0),Mo([pt({type:Number}),zo("design:type",Number)],Ho.prototype,"tabIndex",void 0),Ho=Mo([ct("nidoca-tabs")],Ho);var Uo,Wo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Yo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Go=class extends tt{constructor(){super(),this.theme=lt.PRIMARY,this.navigationClosed=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false")}updated(t){super.updated(t),new Promise((t=>requestAnimationFrame(t))).then((()=>{if(null!=this.headerElement){const t=this.headerElement.offsetHeight,e="top:".concat(String(t)).concat("px;"),o="padding-top:".concat(String(t)).concat("px;");console.debug("set header height to corresponding elements: %s",e),null!=this.sidebarElement&&this.sidebarElement.setAttribute("style",e),null!=this.contentElement&&this.contentElement.setAttribute("style",o)}}))}render(){return P`
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
    `}};Go.styles=r`
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

    @media only screen and (min-width: ${nt}px) and (max-width: ${rt}px) {
      #content {
      }
    }

    @media only screen and (max-width: ${it}px) {
      #content {
      }
    }

    @media screen and (min-width: ${it}px) {
      #content {
        transition: margin-left 0.35s linear;
        margin-left: 300px;
      }
    }

    .slotProminent {
      width: 100%;
    }
  `,Wo([pt({type:String}),Yo("design:type","function"==typeof(Uo=void 0!==lt&&lt)?Uo:Object)],Go.prototype,"theme",void 0),Wo([pt({type:Boolean}),Yo("design:type",Boolean)],Go.prototype,"navigationClosed",void 0),Wo([pt({type:Boolean}),Yo("design:type",Boolean)],Go.prototype,"prominent",void 0),Wo([ht("#header"),Yo("design:type",Object)],Go.prototype,"headerElement",void 0),Wo([ht("#sidebar"),Yo("design:type",Object)],Go.prototype,"sidebarElement",void 0),Wo([ht("#content"),Yo("design:type",Object)],Go.prototype,"contentElement",void 0),Go=Wo([ct("nidoca-template"),Yo("design:paramtypes",[])],Go);var qo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Fo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xo=class extends tt{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1}render(){return P`
      ${lt.getStyle(this.theme)}
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
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function a(t){try{l(i.next(t))}catch(t){r(t)}}function s(t){try{l(i.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(a,s)}l((i=i.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};Xo.styles=r`
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
  `,qo([pt({type:lt,converter:String}),Fo("design:type",Object)],Xo.prototype,"theme",void 0),qo([pt({type:String}),Fo("design:type",String)],Xo.prototype,"value",void 0),qo([pt({type:String}),Fo("design:type",String)],Xo.prototype,"placeholder",void 0),qo([pt({type:Boolean}),Fo("design:type",Boolean)],Xo.prototype,"disabled",void 0),qo([ht("#inputElement"),Fo("design:type",Object)],Xo.prototype,"inputElement",void 0),Xo=qo([ct("nidoca-search-bar")],Xo);var Ko=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},Vo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Jo{}Jo.CENTER="CENTER",Jo.LEFT="LEFT",Jo.RIGHT="RIGHT",Jo.TOP="TOP",Jo.BOTTOM="BOTTOM",Jo.SLIDE_CENTER="SLIDE_CENTER",Jo.SLIDE_LEFT="SLIDE_LEFT",Jo.SLIDE_RIGHT="SLIDE_RIGHT",Jo.SLIDE_TOP="SLIDE_TOP",Jo.SLIDE_BOTTOM="SLIDE_BOTTOM";let Zo=class extends tt{constructor(){super(...arguments),this.transitionType=Jo.CENTER,this.duration=.5}render(){return P` <div .class="${this.transitionType}"><slot></slot></div> `}};Zo.styles=r`
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
  `,Ko([pt({type:Object}),Vo("design:type",Jo)],Zo.prototype,"transitionType",void 0),Ko([pt({type:Number}),Vo("design:type",Number)],Zo.prototype,"duration",void 0),Zo=Ko([ct("nidoca-transition")],Zo);var Qo=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a};let ti=class extends tt{constructor(){super(...arguments),this.show=!1}render(){return this.show?P`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${Jo.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:P``}};ti.styles=r`
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
  `,Qo([pt({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],ti.prototype,"show",void 0),ti=Qo([ct("nidoca-dialog")],ti);var ei,oi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ii=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ni=class extends tt{constructor(){super(...arguments),this.show=!1,this.theme=lt.BACKGROUND}render(){return P`
      <style>
        .box {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        ${Ue.MOBILE.asMediaStyle("slot{min-width:320px;}")}
        ${Ue.TABLET.asMediaStyle("slot{min-width:480px;}")}
        ${Ue.DESKTOP.asMediaStyle("slot{min-width:640px;}")}
      </style>
      <nidoca-dialog .show="${this.show}">
        <nidoca-card class="box" .shadowType="${Xt.KEY_LIGHT}">
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
  `,oi([pt({type:Boolean}),ii("design:type",Boolean)],ni.prototype,"show",void 0),oi([pt({type:lt}),ii("design:type","function"==typeof(ei=void 0!==lt&&lt)?ei:Object)],ni.prototype,"theme",void 0),ni=oi([ct("nidoca-dialog-action")],ni);var ri=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class si{}si.ROUND="ROUND",si.CLICKABLE="CLICKABLE",si.ZOOM_WRAPPED="ZOOM_WRAPPED",si.FULL_WIDTH="FULL_WIDTH";let li=class extends tt{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[si.CLICKABLE,si.FULL_WIDTH]}render(){return P`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}};li.styles=r`
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
  `,ri([pt({type:String}),ai("design:type",String)],li.prototype,"src",void 0),ri([pt({type:String}),ai("design:type",String)],li.prototype,"width",void 0),ri([pt({type:String}),ai("design:type",String)],li.prototype,"height",void 0),ri([pt({type:si,converter:Array}),ai("design:type",Array)],li.prototype,"richMediaProperties",void 0),li=ri([ct("nidoca-img-round")],li);var ci=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},di=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let pi=class extends tt{constructor(){super(...arguments),this.imgSrc="",this.primaryText="",this.description=""}render(){return P` <div
      style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
    >
        <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[si.ROUND]}"> </nidoca-img>
        <nidoca-layout-spacer
          left="var(--space-little)"
          right="var(--space-little)"
          top="var(--space-little)"
          bottom="var(--space-little)"
        >
          <nidoca-typography type="${$t.H3}">${this.primaryText}</nidoca-typography>
        </nidoca-layout-spacer>
        <nidoca-typography type="${$t.H5}">${this.description}</nidoca-typography>
  </div>
    </div>`}};ci([pt({type:String}),di("design:type",String)],pi.prototype,"imgSrc",void 0),ci([pt({type:String}),di("design:type",String)],pi.prototype,"primaryText",void 0),ci([pt({type:String}),di("design:type",String)],pi.prototype,"description",void 0),pi=ci([ct("nidoca-avatar")],pi);let hi=class extends tt{render(){return P`
      <nidoca-box-shadow .shadowType="${Xt.KEY_LIGHT}">
        <slot class="slotContainer"></slot>
      </nidoca-box-shadow>
    `}};hi.styles=r`
    .slotContainer {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
  `,hi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([ct("nidoca-card")],hi);let fi=class extends tt{render(){return P`
      <nidoca-layout-spacer bottom="var(--space-little)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const o=e.assignedElements();for(let t=0;t<o.length;t++){const e=o[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};fi.styles=r`
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
  `,fi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([ct("nidoca-gallery")],fi);let yi=class extends tt{render(){return P`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};yi.styles=r`
    :host {
      display: none;
    }
  `,yi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([ct("nidoca-print")],yi);let ui=class extends tt{constructor(){super(...arguments),this.flexBasis="auto"}render(){return P`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target,o=e.offsetWidth,i=e.assignedElements(),n=i.length,r=[];let a=0;for(let t=0;t<n;t++){const e=i[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)r.push(e);else{const e=t.toUpperCase();a+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),this.flexBasis=String(s/r.length)+"%",this.requestUpdate()}};ui.styles=r`
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

    @media only screen and (min-width: ${Ue.TABLET.minWidth}px) and (max-width: ${Ue.TABLET.maxWidth}px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: ${Ue.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,ui=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([ct("nidoca-section")],ui);var mi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},gi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let bi=class extends tt{constructor(){super(...arguments),this.title="",this.summary="",this.text=""}render(){return P`
      <div style="display:flex; flex-direction:column;">
        <slot name="title"></slot>
        ${this.title?P`<nidoca-typography .type="${$t.H2}">${this.title}</nidoca-typography>
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`:P``}
        <slot name="summary"></slot>${this.summary?P`<nidoca-typography .type="${$t.BODY1}"><i>${this.summary}</i></nidoca-typography>
              <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>`:P``}
        <slot name="text"></slot>
        ${this.text?P`<nidoca-typography .type="${$t.BODY1}">${this.text}</nidoca-typography>`:P``}
        <slot></slot>
      </div>
    `}};bi.styles=r`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  `,mi([pt({type:String}),gi("design:type",String)],bi.prototype,"title",void 0),mi([pt({type:String}),gi("design:type",String)],bi.prototype,"summary",void 0),mi([pt({type:String}),gi("design:type",String)],bi.prototype,"text",void 0),bi=mi([ct("nidoca-article")],bi);var vi=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},xi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let wi=class extends tt{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return P`
      <nidoca-layout-spacer top="48px" bottom="48px">
        <div style="display:flex;flex-direction:column;align-items:center">
          <nidoca-icon
            icon="${this.icon}"
            style="font-size: 96px; padding:var(--space-normal);"
            backgroundColor="var(--app-color-surface-background)"
          ></nidoca-icon>
          <nidoca-typography .type="${$t.H2}">${this.primaryText}</nidoca-typography>
          <nidoca-layout-spacer>
            <nidoca-typography .type="${$t.BODY2}" .textAlign="${St.CENTER}">
              ${this.text}
              <slot></slot>
            </nidoca-typography>
          </nidoca-layout-spacer>
        </div>
      </nidoca-layout-spacer>
    `}};wi.styles=r``,vi([pt({type:String}),xi("design:type",String)],wi.prototype,"primaryText",void 0),vi([pt({type:String}),xi("design:type",String)],wi.prototype,"text",void 0),vi([pt({type:String}),xi("design:type",String)],wi.prototype,"icon",void 0),wi=vi([ct("nidoca-icon-with-description")],wi);let $i=class extends tt{render(){return P`
      <nidoca-form id="authenitcate-form">
        <nidoca-typography .type="${$t.H2}">Kontaktformular</nidoca-typography>
        <nidoca-form-text name="name" .textType="${ge.TEXT}" value="" label="name"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text .textType="${ge.EMAIL}" label="email" name="email"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-form-text name="title" .textType="${ge.TEXT}" value="" label="title"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-form-textarea label="message" name="message" trailingIcon="vpn_key"></nidoca-form-textarea>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>

        <nidoca-button
          text="Senden"
          @nidoca-event-button-clicked="${()=>alert("Login")}"
          .buttonType="${Yt.CONTAINED}"
        ></nidoca-button>

        <nidoca-layout-spacer bottom="var(--space-medium)"></nidoca-layout-spacer>
        <nidoca-typography
          slot="errorMessages"
          .type="${$t.OVERLINE}"
          text="huhu"
        ></nidoca-typography>
      </nidoca-form>
    `}};$i.styles=r``,$i=function(t,e,o,i){var n,r=arguments.length,a=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,i);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}([ct("nidoca-form-contact")],$i),st.getUniqueInstance().initDefaultComponents()})();