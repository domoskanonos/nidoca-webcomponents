/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),o=new Map;class n{constructor(e,o){if(this._$cssResult$=!0,o!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=o.get(this.cssText);return e&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const i=(e,...o)=>{const i=1===e.length?e[0]:o.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new n(i,t)},r=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let o="";for(const t of e.cssRules)o+=t.cssText;return(e=>new n("string"==typeof e?e:e+"",t))(o)})(e):e;var a;const s=window.trustedTypes,c=s?s.emptyScript:"",l=window.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?c:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},d=(e,t)=>t!==e&&(t==t||e==e),h={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:d};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Eh(o,t);void 0!==n&&(this._$Eu.set(n,o),e.push(n))})),e}static createProperty(e,t=h){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const i=this[e];this[t]=n,this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eh(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{e?t.adoptedStyleSheets=o.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):o.forEach((e=>{const o=document.createElement("style"),n=window.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ES(e,t,o=h){var n,i;const r=this.constructor._$Eh(e,o);if(void 0!==r&&!0===o.reflect){const a=(null!==(i=null===(n=o.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:p.toAttribute)(t,o.type);this._$Ei=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Ei=null}}_$AK(e,t){var o,n,i;const r=this.constructor,a=r._$Eu.get(e);if(void 0!==a&&this._$Ei!==a){const e=r.getPropertyOptions(a),s=e.converter,c=null!==(i=null!==(n=null===(o=s)||void 0===o?void 0:o.fromAttribute)&&void 0!==n?n:"function"==typeof s?s:null)&&void 0!==i?i:p.fromAttribute;this._$Ei=a,this[a]=c(t,e.type),this._$Ei=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||d)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$Ei!==e&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$E_&&(this._$E_.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var y;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:u}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.2.0");const m=globalThis.trustedTypes,g=m?m.createPolicy("lit-html",{createHTML:e=>e}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,b="?"+f,v=`<${b}>`,x=document,w=(e="")=>x.createComment(e),$=e=>null===e||"object"!=typeof e&&"function"!=typeof e,S=Array.isArray,R=e=>{var t;return S(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,O=/>/g,k=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,I=/'/g,A=/"/g,j=/^(?:script|style|textarea)$/i,C=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),P=C(1),N=(C(2),Symbol.for("lit-noChange")),_=Symbol.for("lit-nothing"),D=new WeakMap,B=x.createTreeWalker(x,129,null,!1),L=(e,t)=>{const o=e.length-1,n=[];let i,r=2===t?"<svg>":"",a=E;for(let t=0;t<o;t++){const o=e[t];let s,c,l=-1,p=0;for(;p<o.length&&(a.lastIndex=p,c=a.exec(o),null!==c);)p=a.lastIndex,a===E?"!--"===c[1]?a=T:void 0!==c[1]?a=O:void 0!==c[2]?(j.test(c[2])&&(i=RegExp("</"+c[2],"g")),a=k):void 0!==c[3]&&(a=k):a===k?">"===c[0]?(a=null!=i?i:E,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?k:'"'===c[3]?A:I):a===A||a===I?a=k:a===T||a===O?a=E:(a=k,i=void 0);const d=a===k&&e[t+1].startsWith("/>")?" ":"";r+=a===E?o+v:l>=0?(n.push(s),o.slice(0,l)+"$lit$"+o.slice(l)+f+d):o+f+(-2===l?(n.push(void 0),t):d)}const s=r+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(s):s,n]};class M{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let i=0,r=0;const a=e.length-1,s=this.parts,[c,l]=L(e,t);if(this.el=M.createElement(c,o),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=B.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(f)){const o=l[r++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+"$lit$").split(f),t=/([.?@])?(.*)/.exec(o);s.push({type:1,index:i,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?q:"@"===t[1]?K:H})}else s.push({type:6,index:i})}for(const t of e)n.removeAttribute(t)}if(j.test(n.tagName)){const e=n.textContent.split(f),t=e.length-1;if(t>0){n.textContent=m?m.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],w()),B.nextNode(),s.push({type:2,index:++i});n.append(e[t],w())}}}else if(8===n.nodeType)if(n.data===b)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(f,e+1));)s.push({type:7,index:i}),e+=f.length-1}i++}}static createElement(e,t){const o=x.createElement("template");return o.innerHTML=e,o}}function W(e,t,o=e,n){var i,r,a,s;if(t===N)return t;let c=void 0!==n?null===(i=o._$Cl)||void 0===i?void 0:i[n]:o._$Cu;const l=$(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,n)),void 0!==n?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[n]=c:o._$Cu=c),void 0!==c&&(t=W(e,c._$AS(e,t.values),c,n)),t}class z{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:n}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:x).importNode(o,!0);B.currentNode=i;let r=B.nextNode(),a=0,s=0,c=n[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new U(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new V(r,this,e)),this.v.push(t),c=n[++s]}a!==(null==c?void 0:c.index)&&(r=B.nextNode(),a++)}return i}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class U{constructor(e,t,o,n){var i;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cg=null===(i=null==n?void 0:n.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),$(e)?e===_||null==e||""===e?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==N&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):R(e)?this.A(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==_&&$(this._$AH)?this._$AA.nextSibling.data=e:this.S(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=M.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.m(o);else{const e=new z(i,this),t=e.p(this.options);e.m(o),this.S(t),this._$AH=e}}_$AC(e){let t=D.get(e.strings);return void 0===t&&D.set(e.strings,t=new M(e)),t}A(e){S(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const i of e)n===t.length?t.push(o=new U(this.M(w()),this.M(w()),this,this.options)):o=t[n],o._$AI(i),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class H{constructor(e,t,o,n,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const i=this.strings;let r=!1;if(void 0===i)e=W(this,e,t,0),r=!$(e)||e!==this._$AH&&e!==N,r&&(this._$AH=e);else{const n=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=W(this,n[o+a],t,a),s===N&&(s=this._$AH[a]),r||(r=!$(s)||s!==this._$AH[a]),s===_?e=_:e!==_&&(e+=(null!=s?s:"")+i[a+1]),this._$AH[a]=s}r&&!n&&this.k(e)}k(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends H{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===_?void 0:e}}const Y=m?m.emptyScript:"";class q extends H{constructor(){super(...arguments),this.type=4}k(e){e&&e!==_?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class K extends H{constructor(e,t,o,n,i){super(e,t,o,n,i),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=W(this,e,t,0))&&void 0!==o?o:_)===N)return;const n=this._$AH,i=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==_&&(n===_||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class V{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const F={P:"$lit$",V:f,L:b,I:1,N:L,R:z,D:R,j:W,H:U,O:H,F:q,B:K,W:G,Z:V},X=window.litHtmlPolyfillSupport;var J,Z;null==X||X(M,U),(null!==(y=globalThis.litHtmlVersions)&&void 0!==y?y:globalThis.litHtmlVersions=[]).push("2.1.1");class Q extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,o)=>{var n,i;const r=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let a=r._$litPart$;if(void 0===a){const e=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:null;r._$litPart$=a=new U(t.insertBefore(w(),e),e,void 0,null!=o?o:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return N}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q});const ee=globalThis.litElementPolyfillSupport;null==ee||ee({LitElement:Q}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.1.1");class te{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){const e=new un;e.style.padding="var(--space-3)",e.title="Ut enim ad minim veniam",e.summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",e.text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",this.registeredElementsMap.set("nidoca-article",P`${e}`);const t=new xe;t.style.padding="var(--space-3)",t.text="Typography",t.type="BODY1",t.textAlign="left",this.registeredElementsMap.set("nidoca-text",P`${t}`);const o=new to;o.src="http://nidoca.eu/img/DSC02586.jpg",o.width="100%",o.height="100%",this.registeredElementsMap.set("nidoca-img",P`${o}`);const n=new no;n.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",P`${n}`),this.registeredElementsMap.set("nidoca-search-bar",P`<nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`);const i=new an;i.style.padding="var(--space-3)",i.imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg",i.primaryText="Dominik Bruhn",i.description="Softwareentwickler",this.registeredElementsMap.set("nidoca-avatar",P`${i}`);const r=new Be;r.style.padding="var(--space-6)",this.registeredElementsMap.set("nidoca-progress",P`${r}`);const a=new Yt;a.style.padding="var(--space-6)",a.icon="home",a.primaryText="Home Icon",a.clickable=!0,a.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",P`${a}`);const s=new yo;s.selectionMode=!0,s.selected=!0,s.primaryText="List Item",s.secondaryText="List Item Secondary Text",this.registeredElementsMap.set("nidoca-list-item",P`${s}`),this.registeredElementsMap.set("nidoca-list",P`<nidoca-list theme="primary" selectionMode stlye="padding:var(--space-6);"
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
      </nidoca-menu>`),this._registeredElementsMap.set("nidoca-accordion",P`<nidoca-accordion .theme="${oe.PRIMARY}"
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
      `),this._registeredElementsMap.set("nidoca-table",P`<nidoca-table></nidoca-table>`),this._registeredElementsMap.set("nidoca-top-app-bar",P`<nidoca-top-app-bar .theme="${oe.PRIMARY}">
        <nidoca-text slot="center" type="${ge.BODY1}">Top App Bar</nidoca-text>
        <nidoca-icon slot="left" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" icon="more_vert" clickable></nidoca-icon>

        <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>`),this._registeredElementsMap.set("nidoca-upload",P`<nidoca-upload></nidoca-upload>`),this._registeredElementsMap.set("nidoca-wizard",P`<nidoca-wizard></nidoca-wizard>`)}static getUniqueInstance(){return te.uniqueInstance||(te.uniqueInstance=new te),te.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const e=[];for(const t of this.registeredElementsMap.keys())e.push(t);return e}registerElementName(e){console.log(`register element: ${e}`);const t=document.createElement(e);this.registeredElementsMap.set(e,P`${t}`)}}class oe{static getStyle(e){return e?P`<style>
          :host,
          *,
          ::slotted(*) {
            color: var(--app-color-${e});
            background-color: var(--app-color-${e}-background);
          }
        </style>`:P``}}oe.PRIMARY="primary",oe.SECONDARY="secondary",oe.SURFACE="surface",oe.BACKGROUND="background";const ne=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:n}=t;return{kind:o,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),ie=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function re(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):ie(e,t)}function ae(e,t){return(({finisher:e,descriptor:t})=>(o,n)=>{var i;if(void 0===n){const n=null!==(i=o.originalKey)&&void 0!==i?i:o.key,r=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(r.finisher=function(t){e(t,n)}),r}{const i=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(i,n)}})({descriptor:o=>{const n={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;n.get=function(){var o,n;return void 0===this[t]&&(this[t]=null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}var se;null===(se=window.HTMLSlotElement)||void 0===se||se.prototype.assignedElements;var ce=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},le=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let pe=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return P`
      <div
        @click="${()=>this.toggle()}"
        style="display:flex;flex-direction:row;align-items:center;justify-content:space-between;align-content:center; cursor:pointer;"
      >
        <nidoca-text style="padding-left:var(--space-3);" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?P` <slot></slot>`:P``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};pe.styles=i`
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
  `,ce([re({type:String}),le("design:type",String)],pe.prototype,"header",void 0),ce([re({type:Boolean}),le("design:type",Boolean)],pe.prototype,"opened",void 0),pe=ce([ne("nidoca-accordion-item")],pe);var de,he,ue=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ye=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.SINGLE="SINGLE",e.MULTI="MULTI"}(he||(he={}));let me=class extends Q{constructor(){super(...arguments),this.theme=oe.SURFACE,this.accordionType=he.SINGLE}render(){return P`
      ${oe.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${e=>this.accordionSwitched(e)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(e){const t=e.detail;switch(this.accordionType){case he.SINGLE:if(null!=this.accordionSlot){const e=this.accordionSlot.assignedElements();for(let o=0;o<e.length;o++){const n=e[o];n instanceof pe&&n!=t&&(n.opened=!1)}}case he.MULTI:}e.stopPropagation()}};me.styles=i`
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
  `,ue([re({type:oe,converter:String}),ye("design:type","function"==typeof(de=void 0!==oe&&oe)?de:Object)],me.prototype,"theme",void 0),ue([re({type:he,converter:String}),ye("design:type",String)],me.prototype,"accordionType",void 0),ue([ae("#accordionSlot"),ye("design:type",Object)],me.prototype,"accordionSlot",void 0),me=ue([ne("nidoca-accordion")],me);var ge,fe,be=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ve=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6",e.SUBTITLE1="SUBTITLE1",e.SUBTITLE2="SUBTITLE2",e.BODY1="BODY1",e.BODY2="BODY2",e.BUTTON="BUTTON",e.CAPTION="CAPTION",e.OVERLINE="OVERLINE"}(ge||(ge={})),function(e){e.JUSTIFY="text-align:justify;",e.JUSTIFY_ALL="text-align:justify-all;",e.LEFT="text-align: left;",e.RIGHT="text-align: right;",e.CENTER="text-align: center;",e.START="text-align: start;",e.END="text-align: end;",e.MATCH_PARENT="text-align: match-parent;",e.INHERIT="text-align: inherit;",e.INITIAL="text-align: initial;",e.UNSET="text-align: unset;"}(fe||(fe={}));let xe=class extends Q{constructor(){super(...arguments),this.type=ge.BODY1,this.textAlign=fe.START,this.text=""}render(){return P` <span class="TYPOGRAPHY ${this.type}" style="${this.textAlign}">${this.text}<slot></slot></span> `}};xe.styles=i`
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
  `,be([re({type:ge,converter:String}),ve("design:type",String)],xe.prototype,"type",void 0),be([re({type:fe,converter:String}),ve("design:type",String)],xe.prototype,"textAlign",void 0),be([re({type:String}),ve("design:type",String)],xe.prototype,"text",void 0),xe=be([ne("nidoca-text")],xe);var we,$e=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Se=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e[e.CURRENT=0]="CURRENT",e[e.COMPLETED=1]="COMPLETED",e[e.OPEN=2]="OPEN",e[e.FINISH=3]="FINISH"}(we||(we={}));let Re=class extends Q{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return P`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${Ft.NONE}"
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
        <nidoca-text
          style="width:48px;"
          .type="${ge.OVERLINE}"
          textAlign="${fe.CENTER}"
          text="${this.primaryText}"
          ><slot></slot>
        </nidoca-text>
      </div>
    `}determineBackgroundColor(e){return e==we.COMPLETED?"var(--app-color-primary)":e==we.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(e){return e==we.FINISH?"var(--app-color-success)":e==we.COMPLETED?"var(--mdc-theme-on-primary)":e==we.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const e=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}};Re.styles=i`
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
  `,$e([re({type:String}),Se("design:type",String)],Re.prototype,"icon",void 0),$e([re({type:String}),Se("design:type",String)],Re.prototype,"primaryText",void 0),$e([re({type:Number}),Se("design:type",Object)],Re.prototype,"state",void 0),$e([re({type:Boolean}),Se("design:type",Boolean)],Re.prototype,"isLast",void 0),Re=$e([ne("nidoca-wizard-step")],Re);var Ee=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Te=class extends Q{render(){return P`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();let n=0;for(let e=0;e<o.length;e++){const t=o[e];t instanceof Re&&(t.index=e,t.state==we.CURRENT&&(n=e),t.index==o.length-1&&(t.isLast=!0))}this.changeState(n)}stepClicked(e){const t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){const t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Re&&void 0!==n.index&&(n.index<e?n.state=we.COMPLETED:n.index==e?n.state=we.CURRENT:n.state=we.OPEN)}}}};Te.styles=i``,Ee([ae("#wizardSlot"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],Te.prototype,"wizardSlot",void 0),Te=Ee([ne("nidoca-wizard")],Te);var Oe=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let ke=class extends Q{constructor(){super(...arguments),this.clickable=!0}render(){return P`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};ke.styles=i`
    .chip {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 var(--space-4);
      border-radius: var(--line-height);
      line-height: var(--line-height);
    }

    .chip:hover {
      background: var(--app-color-surface-background-dark);
    }

    .clickable {
      cursor: pointer;
    }
  `,Oe([re({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],ke.prototype,"clickable",void 0),ke=Oe([ne("nidoca-chip")],ke);var Ie=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ae=class extends Q{constructor(){super(...arguments),this.code=""}render(){return P`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};Ae.styles=i`
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
  `,Ie([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Ae.prototype,"code",void 0),Ae=Ie([ne("nidoca-code")],Ae);var je=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ce=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Pe=class extends Q{constructor(){super(),this.show=!1,addEventListener("click",(e=>{var t;const o=null===(t=this.associatedElement)||void 0===t?void 0:t.getBoundingClientRect();o&&(o.top>e.clientY||o.right<e.clientX||o.left>e.clientX||o.bottom<e.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?P`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:P``}calculatePositionStyle(e){let t="";if(e){const o=e.getBoundingClientRect();o.right>window.innerWidth/2?t+=`right:${window.innerWidth-o.right}px;`:t+=`left:${o.left}px;`,o.top>window.innerHeight/2?t+=`bottom:${o.height+window.innerHeight-o.top}px;`:t+=`top:${o.bottom}px;`}return t}};Pe.styles=i`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,je([re({type:Boolean}),Ce("design:type",Boolean)],Pe.prototype,"show",void 0),je([re({type:Object}),Ce("design:type",Object)],Pe.prototype,"associatedElement",void 0),Pe=je([ne("nidoca-elevation"),Ce("design:paramtypes",[])],Pe);var Ne=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},_e=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class De{}De.PROGRESS="PROGRESS",De.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Be=class extends Q{constructor(){super(...arguments),this.progressType=De.PROGRESS}render(){return P` <style>
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

      <progress class="${this.progressType}"></progress>`}};Be.styles=i``,Ne([re({type:oe,converter:String}),_e("design:type",Object)],Be.prototype,"theme",void 0),Ne([re({type:De,converter:String}),_e("design:type",String)],Be.prototype,"progressType",void 0),Be=Ne([ne("nidoca-progress")],Be);var Le,Me=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},We=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.CONTAINED="CONTAINED",e.OUTLINED="OUTLINED",e.TEXT="TEXT"}(Le||(Le={}));let ze=class extends Q{constructor(){super(...arguments),this.theme=oe.PRIMARY,this.buttonType=Le.CONTAINED,this.leadingIcon="",this.text=""}render(){return P`
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
            ${this.leadingIcon||this.buttonType==Le.TEXT?P``:P`<nidoca-layout-spacer> </nidoca-layout-spacer>`}

            <nidoca-text
              style="padding:var(--space-6);"
              text="${this.text}"
              type="${ge.BUTTON}"
            >
              <slot></slot>
            </nidoca-text>

            ${this.buttonType!=Le.TEXT?P`<nidoca-layout-spacer></nidoca-layout-spacer>`:P``}
          </div>
        </div>
      </nidoca-ripple>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};ze.styles=i`
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
  `,Me([re({type:oe,converter:String}),We("design:type",Object)],ze.prototype,"theme",void 0),Me([re({type:Le,converter:String}),We("design:type",String)],ze.prototype,"buttonType",void 0),Me([re({type:String}),We("design:type",String)],ze.prototype,"leadingIcon",void 0),Me([re({type:String}),We("design:type",String)],ze.prototype,"text",void 0),ze=Me([ne("nidoca-button")],ze);var Ue,He=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};!function(e){e.NONE="NONE",e.KEY_LIGHT="KEY_LIGHT",e.AMBIENT_LIGHT="AMBIENT_LIGHT",e.COMBINED="COMBINED"}(Ue||(Ue={}));let Ge=class extends Q{constructor(){super(...arguments),this.shadowType=Ue.KEY_LIGHT}render(){return P` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `}};Ge.styles=i`
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
  `,He([re({type:Ue}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Ge.prototype,"shadowType",void 0),Ge=He([ne("nidoca-box-shadow")],Ge);class Ye extends Q{}var qe=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ke=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ve=class extends Q{constructor(){super(),this.autocomplete=!0,null==this.getAttribute("style")&&this.setAttribute("style","width:100%;")}render(){return P`
      <form
        class="container"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        .?autocomplete="${this.autocomplete}"
      >
        <slot id="slotElement"></slot>
      </form>
    `}getInputElements(e){if(null==e)return[];const t=[],o=e.assignedElements({flatten:!0});for(let e=0;e<o.length;e++){const n=o[e];this.recursiveInputElementSearch(n,t)}return t}validate(){let e=!0;for(const t of this.getInputElements(this.slotElement))t.validate()||(e&&t.scrollIntoView(!0),e=!1);return e}getOutputData(){const e=new FormData,t={};for(const o of this.getInputElements(this.slotElement)){const n=o.getOutputData();t[n.key]=n.value,e.append(n.key,n.value)}const o={};return o.jsonObject=t,o.formData=e,o}formButtonClicked(e){console.log("formButton clicked: "+e.detail),"submitButton"===e.detail&&this.dispatchEvent(new CustomEvent("nidoca-event-form-submit-button-clicked",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}recursiveInputElementSearch(e,t){if(e instanceof Ye)t.push(e);else if(e.hasChildNodes()){const o=e.children;for(const e of[].slice.call(o))this.recursiveInputElementSearch(e,t)}}};Ve.styles=i`
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
  `,qe([re({type:Boolean}),Ke("design:type",Boolean)],Ve.prototype,"autocomplete",void 0),qe([re({type:oe,converter:String}),Ke("design:type",Object)],Ve.prototype,"theme",void 0),qe([ae("#slotElement"),Ke("design:type",Object)],Ve.prototype,"slotElement",void 0),Ve=qe([ne("nidoca-form"),Ke("design:paramtypes",[])],Ve);const Fe=e=>(...t)=>({_$litDirective$:e,values:t});class Xe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{H:Je}=F,Ze=()=>document.createComment(""),Qe=(e,t,o)=>{var n;const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=i.insertBefore(Ze(),r),n=i.insertBefore(Ze(),r);o=new Je(t,n,e,e.options)}else{const t=o._$AB.nextSibling,a=o._$AM,s=a!==e;if(s){let t;null===(n=o._$AQ)||void 0===n||n.call(o,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==a._$AU&&o._$AP(t)}if(t!==r||s){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;i.insertBefore(e,r),e=t}}}return o},et=(e,t,o=e)=>(e._$AI(t,o),e),tt={},ot=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let o=e._$AA;const n=e._$AB.nextSibling;for(;o!==n;){const e=o.nextSibling;o.remove(),o=e}},nt=(e,t,o)=>{const n=new Map;for(let i=t;i<=o;i++)n.set(e[i],i);return n},it=Fe(class extends Xe{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let n;void 0===o?o=t:void 0!==t&&(n=t);const i=[],r=[];let a=0;for(const t of e)i[a]=n?n(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:i}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){var i;const r=e._$AH,{values:a,keys:s}=this.dt(t,o,n);if(!Array.isArray(r))return this.at=s,a;const c=null!==(i=this.at)&&void 0!==i?i:this.at=[],l=[];let p,d,h=0,u=r.length-1,y=0,m=a.length-1;for(;h<=u&&y<=m;)if(null===r[h])h++;else if(null===r[u])u--;else if(c[h]===s[y])l[y]=et(r[h],a[y]),h++,y++;else if(c[u]===s[m])l[m]=et(r[u],a[m]),u--,m--;else if(c[h]===s[m])l[m]=et(r[h],a[m]),Qe(e,l[m+1],r[h]),h++,m--;else if(c[u]===s[y])l[y]=et(r[u],a[y]),Qe(e,r[h],r[u]),u--,y++;else if(void 0===p&&(p=nt(s,y,m),d=nt(c,h,u)),p.has(c[h]))if(p.has(c[u])){const t=d.get(s[y]),o=void 0!==t?r[t]:null;if(null===o){const t=Qe(e,r[h]);et(t,a[y]),l[y]=t}else l[y]=et(o,a[y]),Qe(e,r[h],o),r[t]=null;y++}else ot(r[u]),u--;else ot(r[h]),h++;for(;y<=m;){const t=Qe(e,l[m+1]);et(t,a[y]),l[y++]=t}for(;h<=u;){const e=r[h++];null!==e&&ot(e)}return this.at=s,((e,t=tt)=>{e._$AH=t})(e,l),N}}),rt={},at=Fe(class extends Xe{constructor(){super(...arguments),this.nt=rt}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return N}else if(this.nt===t)return N;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,o)}});var st=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ct=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let lt=class extends Ye{constructor(){super(...arguments),this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return P` <style>
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
              style="font-size: var(--icon-size-big);padding-left:var(--space-3);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:P``}
        <div class="container">
          <nidoca-text
            style="padding-left:var(--space-3); padding-right:var(--space-3);"
            class="label"
            .type="${ge.CAPTION}"
            text="${this.label}"
          ></nidoca-text>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${at([this.value,this.options],(()=>P`
                ${it(this.options,(e=>null==e?P` <option></option>`:this.isSelectedOption(e)?P` <option value="${e.key}" selected>${e.value}</option> `:P` <option value="${e.key}">${e.value}</option> `))}
              `))}
          </select>
        </div>
      </div>

      ${this.infoText||this.warningText||this.errorText?P`<div>
            ${this.infoText?P` <nidoca-text
                  .type="${ge.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-text>`:P``}
            ${this.warningText?P` <nidoca-text
                  style="color:var(--app-color-warning-background)"
                  .type="${ge.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-text>`:P``}
            ${this.errorText?P` <nidoca-text
                  style="color:var(--app-color-error-background)"
                  .type="${ge.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-text>`:P``}
          </div> `:P``}`}getOutputData(){let e=this.value;if(null!=this.selectElement&&this.multiple){e=[];for(let t=0,o=this.selectElement.options.length;t<o;t++)this.selectElement.options[t].selected&&e.push(this.options[t].key)}else null!=this.selectElement&&(e=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:e}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(e){if(this.multiple){let t=!1;for(const o of this.value)if(t=e.key===o,t)return!0}return this.value===e.key}static enumToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),Object.keys(e).forEach((t=>{o.push({key:t,value:e[t]})})),o}static stringArrayToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),e.forEach((e=>{o.push({key:e,value:e})})),o}static toComboboxOptions(e=null,t=null){if(null==e)return[];const o=[];return Object.values(e).forEach((n=>{let i=String(Object.keys(e)[Object.values(e).indexOf(n)]);t&&(i=i.concat(t)),o.push({key:n,value:i})})),o}};lt.styles=i`
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
      height: var(--line-height-3);
      line-height: var(--line-height-3);
      padding-left: var(--space-3);
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
  `,st([re({type:oe,converter:String}),ct("design:type",Object)],lt.prototype,"theme",void 0),st([re({type:String}),ct("design:type",String)],lt.prototype,"trailingIcon",void 0),st([re({type:String}),ct("design:type",String)],lt.prototype,"label",void 0),st([re({type:String}),ct("design:type",String)],lt.prototype,"errorText",void 0),st([re({type:String}),ct("design:type",String)],lt.prototype,"infoText",void 0),st([re({type:String}),ct("design:type",String)],lt.prototype,"warningText",void 0),st([re(),ct("design:type",Object)],lt.prototype,"value",void 0),st([re({type:Array}),ct("design:type",Array)],lt.prototype,"options",void 0),st([re({type:String}),ct("design:type",String)],lt.prototype,"name",void 0),st([re({type:Boolean}),ct("design:type",Boolean)],lt.prototype,"required",void 0),st([re({type:Boolean}),ct("design:type",Boolean)],lt.prototype,"multiple",void 0),st([re({type:Number}),ct("design:type",Number)],lt.prototype,"size",void 0),st([ae("#selectElement"),ct("design:type",Object)],lt.prototype,"selectElement",void 0),lt=st([ne("nidoca-form-combobox")],lt);const pt=e=>null!=e?e:_;var dt,ht=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ut=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.COLOR="color",e.EMAIL="email",e.HIDDEN="hidden",e.NUMBER="number",e.PASSWORD="password",e.TEL="tel",e.TEXT="text",e.SEARCH="search",e.URL="url"}(dt||(dt={}));let yt=class extends Ye{constructor(){super(...arguments),this.type=dt.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1}render(){return this.type==dt.HIDDEN?P`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:P` <style>
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
                  style="font-size: var(--icon-size-big);padding-left:var(--space-3);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:P``}
            <div class="container">
              <nidoca-text
                style="padding-left:var(--space-3); padding-right:var(--space-3);"
                class="label"
                .type="${ge.CAPTION}"
                text="${this.label}"
              ></nidoca-text>

              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder?this.placeholder:this.label}"
                size="${pt(this.size)}"
                minlength="${pt(this.minlength)}"
                maxlength="${pt(this.maxlength)}"
                min="${pt(this.min)}"
                max="${pt(this.max)}"
                step="${pt(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?P`<div>
                ${this.infoText?P` <nidoca-text
                      .type="${ge.SUBTITLE1}"
                      text="${this.infoText}"
                    ></nidoca-text>`:P``}
                ${this.warningText?P` <nidoca-text
                      style="color:var(--app-color-warning-background)"
                      .type="${ge.SUBTITLE1}"
                      text="${this.warningText}"
                    ></nidoca-text>`:P``}
                ${this.errorText?P` <nidoca-text
                      style="color:var(--app-color-error-background)"
                      .type="${ge.SUBTITLE1}"
                      text="${this.errorText}"
                    ></nidoca-text>`:P``}
              </div> `:P``}`}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};yt.styles=i`
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
      height: var(--line-height-3);
      line-height: var(--line-height-3);
      padding-left: var(--space-3);
      padding-right: var(--space-3);
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
    input:focus::placeholder {
      color: transparent;
    }
  `,ht([re({type:oe,converter:String}),ut("design:type",Object)],yt.prototype,"theme",void 0),ht([re({type:dt,converter:String}),ut("design:type",String)],yt.prototype,"type",void 0),ht([re({type:String}),ut("design:type",String)],yt.prototype,"label",void 0),ht([re({type:String}),ut("design:type",String)],yt.prototype,"placeholder",void 0),ht([re({type:String}),ut("design:type",String)],yt.prototype,"trailingIcon",void 0),ht([re({type:String}),ut("design:type",String)],yt.prototype,"errorText",void 0),ht([re({type:String}),ut("design:type",String)],yt.prototype,"infoText",void 0),ht([re({type:String}),ut("design:type",String)],yt.prototype,"warningText",void 0),ht([re({type:String}),ut("design:type",String)],yt.prototype,"name",void 0),ht([re(),ut("design:type",String)],yt.prototype,"value",void 0),ht([re({type:Boolean}),ut("design:type",Boolean)],yt.prototype,"required",void 0),ht([re({type:Boolean}),ut("design:type",Boolean)],yt.prototype,"disabled",void 0),ht([re({type:Boolean}),ut("design:type",Boolean)],yt.prototype,"checked",void 0),ht([re({type:Number}),ut("design:type",Object)],yt.prototype,"maxlength",void 0),ht([re({type:Number}),ut("design:type",Object)],yt.prototype,"minlength",void 0),ht([re({type:Number}),ut("design:type",Object)],yt.prototype,"min",void 0),ht([re({type:Number}),ut("design:type",Object)],yt.prototype,"max",void 0),ht([re({type:Number}),ut("design:type",Object)],yt.prototype,"step",void 0),ht([re({type:Number}),ut("design:type",Object)],yt.prototype,"size",void 0),ht([ae("#inputElement"),ut("design:type",Object)],yt.prototype,"inputElement",void 0),yt=ht([ne("nidoca-form-text")],yt);var mt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},gt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ft=class extends Ye{constructor(){super(...arguments),this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return P`
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
          <nidoca-text
            style="padding-left:var(--space-3); padding-right:var(--space-3);"
            class="label"
            .type="${ge.CAPTION}"
            text="${this.label}"
          ></nidoca-text>

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
            ${this.infoText?P` <nidoca-text
                  .type="${ge.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-text>`:P``}
            ${this.warningText?P` <nidoca-text
                  style="color:var(--app-color-warning-background)"
                  .type="${ge.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-text>`:P``}
            ${this.errorText?P` <nidoca-text
                  style="color:var(--app-color-error-background)"
                  .type="${ge.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-text>`:P``}
          </div> `:P``}
    `}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ft.styles=i`
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
      padding-left: var(--space-3);
      padding-right: var(--space-3);
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
  `,mt([re({type:oe,converter:String}),gt("design:type",Object)],ft.prototype,"theme",void 0),mt([re({type:String}),gt("design:type",String)],ft.prototype,"infoText",void 0),mt([re({type:String}),gt("design:type",String)],ft.prototype,"warningText",void 0),mt([re({type:String}),gt("design:type",String)],ft.prototype,"errorText",void 0),mt([re({type:String}),gt("design:type",String)],ft.prototype,"name",void 0),mt([re(),gt("design:type",String)],ft.prototype,"value",void 0),mt([re({type:String}),gt("design:type",String)],ft.prototype,"label",void 0),mt([re({type:Boolean}),gt("design:type",Boolean)],ft.prototype,"required",void 0),mt([re({type:String}),gt("design:type",String)],ft.prototype,"placeholder",void 0),mt([re({type:Boolean}),gt("design:type",Boolean)],ft.prototype,"disabled",void 0),mt([re({type:Number}),gt("design:type",Number)],ft.prototype,"rows",void 0),mt([ae("#inputElement"),gt("design:type",Object)],ft.prototype,"inputElement",void 0),ft=mt([ne("nidoca-form-textarea")],ft);var bt,vt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},xt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.DATE="date",e.DATETIME_LOCAL="datetime-local",e.MONTH="month",e.TIME="time",e.WEEK="week"}(bt||(bt={}));let wt=class extends Ye{constructor(){super(...arguments),this.trailingIcon="",this.type=bt.DATE,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.errorText="",this.infoText="",this.warningText=""}render(){return P`
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
              style="font-size: var(--icon-size-big);padding-left:var(--space-3);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:P``}
        <div class="container">
          <nidoca-text
            style="padding-left:var(--space-3); padding-right:var(--space-3);"
            class="label"
            .type="${ge.CAPTION}"
            text="${this.label}"
          ></nidoca-text>
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
            ${this.infoText?P` <nidoca-text
                  .type="${ge.SUBTITLE1}"
                  text="${this.infoText}"
                ></nidoca-text>`:P``}
            ${this.warningText?P` <nidoca-text
                  style="color:var(--app-color-warning-background)"
                  .type="${ge.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-text>`:P``}
            ${this.errorText?P` <nidoca-text
                  style="color:var(--app-color-error-background)"
                  .type="${ge.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-text>`:P``}
          </div> `:P``}
    `}getOutputData(){var e;return{key:this.name,value:null===(e=this.inputElement)||void 0===e?void 0:e.value}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};wt.styles=i`
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
      height: var(--line-height-3);
      line-height: var(--line-height-3);
      padding-left: var(--space-3);
      padding-right: var(--space-3);
    }
    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `,vt([re({type:oe,converter:String}),xt("design:type",Object)],wt.prototype,"theme",void 0),vt([re({type:String}),xt("design:type",String)],wt.prototype,"trailingIcon",void 0),vt([re(),xt("design:type",String)],wt.prototype,"type",void 0),vt([re({type:String}),xt("design:type",String)],wt.prototype,"name",void 0),vt([re({type:String}),xt("design:type",String)],wt.prototype,"value",void 0),vt([re({type:String}),xt("design:type",String)],wt.prototype,"label",void 0),vt([re({type:Boolean}),xt("design:type",Boolean)],wt.prototype,"required",void 0),vt([re({type:String}),xt("design:type",String)],wt.prototype,"placeholder",void 0),vt([re({type:Boolean}),xt("design:type",Boolean)],wt.prototype,"disabled",void 0),vt([re({type:String}),xt("design:type",String)],wt.prototype,"errorText",void 0),vt([re({type:String}),xt("design:type",String)],wt.prototype,"infoText",void 0),vt([re({type:String}),xt("design:type",String)],wt.prototype,"warningText",void 0),vt([ae("#inputElement"),xt("design:type",Object)],wt.prototype,"inputElement",void 0),wt=vt([ne("nidoca-form-date")],wt);var $t,St=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Rt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Et=class extends Ye{constructor(){super(...arguments),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=oe.PRIMARY}render(){return P`
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
        <nidoca-text .type="${ge.SUBTITLE1}" text="${this.label}">
          <slot></slot>
        </nidoca-text>

        ${this.infoText.length>0?P` <nidoca-text
              .type="${ge.SUBTITLE2}"
              text="${this.infoText}"
            ></nidoca-text>`:P``}

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

      ${this.warningText?P` <nidoca-text
            style="color:var(--app-color-warning-background)"
            .type="${ge.BODY1}"
            text="${this.warningText}"
          ></nidoca-text>`:P``}
      ${this.errorText?P` <nidoca-text
            style="color:var(--app-color-error-background)"
            .type="${ge.BODY1}"
            text="${this.errorText}"
          ></nidoca-text>`:P``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};Et.styles=i`
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
  `,St([re({type:String}),Rt("design:type",String)],Et.prototype,"name",void 0),St([re({type:String}),Rt("design:type",String)],Et.prototype,"label",void 0),St([re({type:String}),Rt("design:type",String)],Et.prototype,"infoText",void 0),St([re({type:String}),Rt("design:type",String)],Et.prototype,"errorText",void 0),St([re({type:String}),Rt("design:type",String)],Et.prototype,"warningText",void 0),St([re({type:Boolean}),Rt("design:type",Boolean)],Et.prototype,"required",void 0),St([re({type:Boolean}),Rt("design:type",Boolean)],Et.prototype,"disabled",void 0),St([re({type:Boolean}),Rt("design:type",Boolean)],Et.prototype,"checked",void 0),St([re({type:String}),Rt("design:type","function"==typeof($t=void 0!==oe&&oe)?$t:Object)],Et.prototype,"theme",void 0),St([ae("#inputElement"),Rt("design:type",Object)],Et.prototype,"inputElement",void 0),Et=St([ne("nidoca-form-switch")],Et);var Tt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Ot=class extends Q{constructor(){super(...arguments),this.code=""}render(){return P``}};Ot.styles=i``,Tt([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Ot.prototype,"code",void 0),Ot=Tt([ne("nidoca-upload")],Ot);var kt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let It=class extends Q{constructor(){super(...arguments),this.text=""}render(){return P`
      <div class="container">
        <nidoca-layout-spacer left="10px"></nidoca-layout-spacer>
        ${this.text?P`<nidoca-text .type="${ge.H5}">${this.text}</nidoca-text>`:P``}
        <slot></slot>
      </div>
    `}};It.styles=i`
    .container {
      display: flex;
    }
  `,kt([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],It.prototype,"text",void 0),It=kt([ne("nidoca-menu-area")],It);var At,jt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ct=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.ITEM="item",e.SECTION="section"}(At||(At={}));let Pt=class extends Q{constructor(){super(...arguments),this.text="",this.icon="",this.type=At.ITEM}render(){return P`
      <div class="container ${this.type}">
        ${this.icon?P` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:P` <nidoca-layout-spacer left="10px" right="36px"></nidoca-layout-spacer>`}
        ${this.text?P`<nidoca-text
              .type="${this.type==At.ITEM?ge.SUBTITLE1:ge.CAPTION}"
              >${this.text}</nidoca-text
            >`:P``}
      </div>
    `}};Pt.styles=i`
    .container {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
  `,jt([re({type:String}),Ct("design:type",String)],Pt.prototype,"text",void 0),jt([re({type:String}),Ct("design:type",String)],Pt.prototype,"icon",void 0),jt([re({type:String}),Ct("design:type",String)],Pt.prototype,"type",void 0),Pt=jt([ne("nidoca-menu-item")],Pt);var Nt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let _t=class extends Q{render(){return P` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <slot></slot>`}};_t.styles=i`
    :host {
      display: block;
      width: 100%;
      padding-left: var(--space-4);
      padding-right: var(--space-4);
    }
  `,Nt([re({type:oe,converter:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],_t.prototype,"theme",void 0),_t=Nt([ne("nidoca-menu")],_t);class Dt{constructor(e,t,o=10240){this.key=e,this.minWidth=t,this.maxWidth=o}static applyDevices(e,t){for(let o=0;o<t.length;o++)if(t[o]==this.getCurrentScreen())return e;return""}static getCurrentScreen(){let e=null;return[Dt.MOBILE,Dt.TABLET,Dt.DESKTOP].forEach((t=>{(null==t.minWidth||t.minWidth<window.innerWidth)&&(null==t.maxWidth||t.maxWidth>window.innerWidth)&&(e=t)})),e}asMediaStyle(e){let t="@media ";return this.minWidth&&(t=t.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(t=t.concat(" and "))),this.maxWidth&&(t=t.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),t=t.concat("{"),t=t.concat(e),t=t.concat("} "),t}}Dt.MOBILE=new Dt("MOBILE",0,640),Dt.TABLET=new Dt("TABLET",641,1007),Dt.DESKTOP=new Dt("DESKTOP",1008);var Bt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Lt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Mt=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return P`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(e,t,o,n,i,r){return"height:".concat(e).concat(";").concat("width:").concat(t).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(i).concat(";").concat("bottom:").concat(r).concat(";")}};Mt.styles=i`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Bt([re({type:String}),Lt("design:type",String)],Mt.prototype,"height",void 0),Bt([re({type:String}),Lt("design:type",String)],Mt.prototype,"width",void 0),Bt([re({type:String}),Lt("design:type",String)],Mt.prototype,"left",void 0),Bt([re({type:String}),Lt("design:type",String)],Mt.prototype,"top",void 0),Bt([re({type:String}),Lt("design:type",String)],Mt.prototype,"right",void 0),Bt([re({type:String}),Lt("design:type",String)],Mt.prototype,"bottom",void 0),Mt=Bt([ne("nidoca-layout-floating")],Mt);var Wt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},zt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ut=class extends Q{constructor(){super(...arguments),this.width="",this.height="",this.minWidth="",this.minHeight="",this.contentWidth="",this.contentHeight="",this.devices=[Dt.DESKTOP,Dt.TABLET,Dt.MOBILE]}updated(e){for(let t=0;t<this.devices.length;t++)if(this.devices[t]==Dt.getCurrentScreen()){e.has("width")&&""!=this.width&&(this.style.width=this.width),e.has("height")&&""!=this.height&&(this.style.height=this.height),e.has("minWidth")&&""!=this.minWidth&&(this.style.minWidth=this.minWidth),e.has("minHeight")&&""!=this.minHeight&&(this.style.minHeight=this.minHeight);break}super.updated(e)}render(){return P`
      ${oe.getStyle(this.theme)}
      <div class="container theme">
        <div class="container" style="${this.applyDevices(this.contentWidth,this.contentHeight,this.devices)}">
          <slot></slot>
        </div>
      </div>
    `}applyDevices(e,t,o){for(let n=0;n<o.length;n++)if(o[n]==Dt.getCurrentScreen())return`${""!=e?"width:".concat(e).concat(";"):""}${""!=t?"height:".concat(t).concat(";"):""}`;return""}};Ut.styles=i`
    :host {
      display: block;
    }
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `,Wt([re({type:String}),zt("design:type",String)],Ut.prototype,"width",void 0),Wt([re({type:String}),zt("design:type",String)],Ut.prototype,"height",void 0),Wt([re({type:String}),zt("design:type",String)],Ut.prototype,"minWidth",void 0),Wt([re({type:String}),zt("design:type",String)],Ut.prototype,"minHeight",void 0),Wt([re({type:String}),zt("design:type",String)],Ut.prototype,"contentWidth",void 0),Wt([re({type:String}),zt("design:type",String)],Ut.prototype,"contentHeight",void 0),Wt([re({type:Dt,converter:Array}),zt("design:type",Array)],Ut.prototype,"devices",void 0),Wt([re({type:oe,converter:String}),zt("design:type",Object)],Ut.prototype,"theme",void 0),Ut=Wt([ne("nidoca-layout-container")],Ut);var Ht=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Gt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Yt=class extends Q{constructor(){super(),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText="",null==this.getAttribute("style")&&this.setAttribute("style","font-size: var(--icon-size); padding:var(--space-4)")}render(){return P`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};Yt.styles=i`
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
  `,Ht([re({type:String}),Gt("design:type",String)],Yt.prototype,"icon",void 0),Ht([re({type:Boolean}),Gt("design:type",Boolean)],Yt.prototype,"clickable",void 0),Ht([re({type:Boolean}),Gt("design:type",Boolean)],Yt.prototype,"deactivated",void 0),Ht([re({type:String}),Gt("design:type",String)],Yt.prototype,"primaryText",void 0),Yt=Ht([ne("nidoca-icon"),Gt("design:paramtypes",[])],Yt);var qt,Kt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Vt=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Ft{}Ft.NONE="NONE",Ft.DEFAULT_SHADOW="DEFAULT_SHADOW",Ft.SHADOW_1="SHADOW_1",Ft.SHADOW_2="SHADOW_2",Ft.SHADOW_3="SHADOW_3";let Xt=class extends Q{constructor(){super(...arguments),this.icon="",this.theme=oe.PRIMARY,this.shadowType=Ft.DEFAULT_SHADOW,this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-4)"}render(){return P`
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
    `}clicked(){return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};Xt.styles=i`
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
  `,Kt([re({type:String}),Vt("design:type",String)],Xt.prototype,"icon",void 0),Kt([re({type:Object}),Vt("design:type","function"==typeof(qt=void 0!==oe&&oe)?qt:Object)],Xt.prototype,"theme",void 0),Kt([re({type:Object}),Vt("design:type",Ft)],Xt.prototype,"shadowType",void 0),Kt([re({type:Boolean}),Vt("design:type",Boolean)],Xt.prototype,"clickable",void 0),Kt([re({type:Boolean}),Vt("design:type",Boolean)],Xt.prototype,"deactivated",void 0),Kt([re({type:String}),Vt("design:type",String)],Xt.prototype,"cssStyle",void 0),Xt=Kt([ne("nidoca-icon-extended")],Xt);var Jt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Zt=class extends Q{render(){return P`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(null!=this.rippleContainerElement){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);const t=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};Zt.styles=i`
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
  `,Jt([ae("#rippleContainer"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],Zt.prototype,"rippleContainerElement",void 0),Zt=Jt([ne("nidoca-ripple")],Zt);var Qt=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},eo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let to=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%"}render(){return P`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};to.styles=i`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,Qt([re({type:String}),eo("design:type",String)],to.prototype,"src",void 0),Qt([re({type:String}),eo("design:type",String)],to.prototype,"width",void 0),Qt([re({type:String}),eo("design:type",String)],to.prototype,"height",void 0),to=Qt([ne("nidoca-img")],to);var oo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let no=class extends Q{constructor(){super(...arguments),this.src=""}render(){return P`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};no.styles=i``,oo([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],no.prototype,"src",void 0),no=oo([ne("nidoca-movie")],no);var io=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},ro=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let ao=class extends Q{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return P`
      <nidoca-form-text
        .theme="${this.theme}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${dt.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(e){(e.has("min")||e.has("max"))&&this.generateNewNumber(),super.updated(e)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(e,t){return Math.random()*(t-e)+e}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const e=this.isValid();return e&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),e}};ao.styles=i`
    :host {
      display: block;
      width: 100%;
    }
  `,io([re({type:oe,converter:String}),ro("design:type",Object)],ao.prototype,"theme",void 0),io([re({type:String}),ro("design:type",String)],ao.prototype,"label",void 0),io([re({type:String}),ro("design:type",String)],ao.prototype,"placeholder",void 0),io([re({type:String}),ro("design:type",String)],ao.prototype,"name",void 0),io([re({type:Number}),ro("design:type",Number)],ao.prototype,"min",void 0),io([re({type:Number}),ro("design:type",Number)],ao.prototype,"max",void 0),io([re({type:String}),ro("design:type",String)],ao.prototype,"errorText",void 0),io([ae("#inputfield"),ro("design:type",Object)],ao.prototype,"inputfield",void 0),ao=io([ne("nidoca-form-captcha")],ao);var so,co=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},lo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};!function(e){e.BLANK="_blank",e.SELF="_self",e.PARENT="_parent",e.TOP="_top"}(so||(so={}));let po=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType=so.SELF}render(){return P` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `}};po.styles=i`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,co([re({type:String}),lo("design:type",String)],po.prototype,"text",void 0),co([re({type:String}),lo("design:type",String)],po.prototype,"href",void 0),co([re({type:String}),lo("design:type",String)],po.prototype,"targetType",void 0),po=co([ne("nidoca-link")],po);var ho=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},uo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let yo=class extends Q{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null}update(e){super.update(e),null!=e.get("selectionMode")&&(this.selectionMode||(this.selected=!1))}render(){return P`
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
            ${this.primaryText?P`<nidoca-text class="item" .type="${ge.BODY1}"
                  >${this.primaryText}</nidoca-text
                >`:P``}
            <slot></slot>
            ${this.secondaryText?P`<nidoca-text class="item" .type="${ge.SUBTITLE1}"
                  >${this.secondaryText}</nidoca-text
                >`:P``}
            <slot name="secondary"></slot>
          </div>
          <slot name="meta" class="item"></slot>
        </div>
      </nidoca-ripple>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let e="";e=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};yo.styles=i`
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
      padding-left: var(--space-3);
    }
  `,ho([re({type:Boolean}),uo("design:type",Boolean)],yo.prototype,"selectionMode",void 0),ho([re({type:Boolean}),uo("design:type",Boolean)],yo.prototype,"selected",void 0),ho([re({type:String}),uo("design:type",String)],yo.prototype,"primaryText",void 0),ho([re({type:String}),uo("design:type",String)],yo.prototype,"secondaryText",void 0),yo=ho([ne("nidoca-list-item")],yo);var mo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},go=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let fo=class extends Q{constructor(){super(...arguments),this.selectionMode=!1}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"selectionMode"==t&&this.getItems().forEach((e=>{e.selectionMode=this.selectionMode}))}))}render(){return P`<style>
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
      ></slot> `}getItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof yo&&e.push(n)}}return e}getSelectedItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof yo&&n.selected&&e.push(n)}}return e}getSelectedIndexes(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();let o=0;for(let n=0;n<t.length;n++){const i=t[n];i instanceof yo&&(i.selected&&e.push(o),o++)}}return e}selectAll(){this.getItems().forEach((e=>{e.selected=!0}))}unselectAll(){this.getItems().forEach((e=>{e.selected=!1}))}};fo.styles=i`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,mo([re({type:oe,converter:String}),go("design:type",Object)],fo.prototype,"theme",void 0),mo([re({type:Boolean}),go("design:type",Boolean)],fo.prototype,"selectionMode",void 0),mo([ae("#slotElement"),go("design:type",Object)],fo.prototype,"slotElement",void 0),fo=mo([ne("nidoca-list")],fo);var bo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},vo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let xo=class extends Q{constructor(){super(...arguments),this.theme=oe.PRIMARY,this.prominent=!1}render(){return P`
      ${oe.getStyle(this.theme)}
      <div
        style="min-height: var(--line-height-5);display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between;align-content:space-around;"
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
    `}};xo.styles=i`
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
  `,bo([re({type:oe,converter:String}),vo("design:type",String)],xo.prototype,"theme",void 0),bo([re({type:Boolean}),vo("design:type",Boolean)],xo.prototype,"prominent",void 0),xo=bo([ne("nidoca-top-app-bar")],xo);var wo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let $o=class extends Q{constructor(){super(...arguments),this.text=""}render(){return P`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-end;align-content:flex-start;"
      >
        <nidoca-layout-spacer style="flex-basis:100%;">
          <nidoca-text .type="${ge.H6}" text="${this.text}"></nidoca-text>
        </nidoca-layout-spacer>
      </div>
    `}};$o.styles=i``,wo([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],$o.prototype,"text",void 0),$o=wo([ne("nidoca-list-section")],$o);var So=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ro=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Eo=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new Yt],["row 2",new Yt]]}render(){return P`
      <div>
        <table>
          <thead>
            ${at([this.headers],(()=>P` ${it(this.headers,(e=>P` <th colspan="1" rowspan="1">${e}</th> `))} `))}
          </thead>
          <tbody>
            ${at([this.rows],(()=>P`
                  ${it(this.rows,(e=>P`
                        <tr>
                          ${it(e,(e=>P` <td colspan="1" rowspan="1">${e}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Eo.styles=i`
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
      padding: var(--space-2);
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
  `,So([re({type:Array}),Ro("design:type",Array)],Eo.prototype,"headers",void 0),So([re({type:Array}),Ro("design:type",Array)],Eo.prototype,"rows",void 0),Eo=So([ne("nidoca-table")],Eo);var To=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Oo=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?P`<slot></slot>`:P``}};Oo.styles=i``,To([re({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Oo.prototype,"selected",void 0),Oo=To([ne("nidoca-tab-content")],Oo);var ko,Io=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ao=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let jo=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=oe.PRIMARY}render(){return P`
      <style>
        :host(.SELECTED) {
          border-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?P` <nidoca-text .type="${ge.OVERLINE}" text="${this.text}"></nidoca-text> `:P``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};jo.styles=i`
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
  `,Io([re({type:Boolean}),Ao("design:type",Boolean)],jo.prototype,"selected",void 0),Io([re({type:String}),Ao("design:type",String)],jo.prototype,"text",void 0),Io([re({type:String}),Ao("design:type","function"==typeof(ko=void 0!==oe&&oe)?ko:Object)],jo.prototype,"theme",void 0),jo=Io([ne("nidoca-tab")],jo);var Co,Po=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},No=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let _o=class extends Q{constructor(){super(...arguments),this.theme=oe.PRIMARY,this.tabIndex=0}render(){return P`
      <div class="container" @nidoca-event-tab-clicked="${e=>this.tabClicked(e)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this.tabIndexChanged()}update(e){super.update(e),null!=e.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const e=this.tabSlot.assignedElements(),t=100/e.length,o=e[this.tabIndex];for(let n=0;n<e.length;n++){const i=e[n];i instanceof jo&&(i.theme=this.theme,i.style.width=String(t).concat("%"),i==o?(i.selected=!0,i.classList.add("SELECTED")):(i.selected=!1,i.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let e=0;if(null!=this.tabContentSlot){const t=this.tabContentSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];n instanceof Oo&&(this.tabIndex==e?n.selected=!0:n.selected=!1,e++)}}}tabClicked(e){const t=e.detail;this.changeTabIndex(t)}changeTabIndex(e){if(!e.selected&&null!=this.tabSlot){const t=this.tabSlot.assignedElements();for(let o=0;o<t.length;o++){const n=t[o];if(n instanceof jo&&n==e){this.tabIndex=o;break}}}}};_o.styles=i`
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
  `,Po([ae("#tabSlot"),No("design:type",Object)],_o.prototype,"tabSlot",void 0),Po([ae("#tabContentSlot"),No("design:type",Object)],_o.prototype,"tabContentSlot",void 0),Po([re({type:String}),No("design:type","function"==typeof(Co=void 0!==oe&&oe)?Co:Object)],_o.prototype,"theme",void 0),Po([re({type:Number}),No("design:type",Number)],_o.prototype,"tabIndex",void 0),_o=Po([ne("nidoca-tabs")],_o);var Do,Bo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Lo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Mo=class extends Q{constructor(){super(),this.theme=oe.PRIMARY,this.navigationClosed=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false")}updated(e){super.updated(e),new Promise((e=>requestAnimationFrame(e))).then((()=>{if(null!=this.headerElement){const e=this.headerElement.offsetHeight,t="top:".concat(String(e)).concat("px;"),o="padding-top:".concat(String(e)).concat("px;");console.debug("set header height to corresponding elements: %s",t),null!=this.sidebarElement&&this.sidebarElement.setAttribute("style",t),null!=this.contentElement&&this.contentElement.setAttribute("style",o)}}))}render(){return P`
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
    `}};Mo.styles=i`
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
  `,Bo([re({type:String}),Lo("design:type","function"==typeof(Do=void 0!==oe&&oe)?Do:Object)],Mo.prototype,"theme",void 0),Bo([re({type:Boolean}),Lo("design:type",Boolean)],Mo.prototype,"navigationClosed",void 0),Bo([re({type:Boolean}),Lo("design:type",Boolean)],Mo.prototype,"prominent",void 0),Bo([ae("#header"),Lo("design:type",Object)],Mo.prototype,"headerElement",void 0),Bo([ae("#sidebar"),Lo("design:type",Object)],Mo.prototype,"sidebarElement",void 0),Bo([ae("#content"),Lo("design:type",Object)],Mo.prototype,"contentElement",void 0),Mo=Bo([ne("nidoca-template"),Lo("design:paramtypes",[])],Mo);var Wo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},zo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Uo=class extends Q{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1}render(){return P`
      ${oe.getStyle(this.theme)}
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
    `}clearValue(){this.value=""}valueChanged(){var e;return function(e,t,o,n){return new(o||(o=Promise))((function(i,r){function a(e){try{c(n.next(e))}catch(e){r(e)}}function s(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))}(this,void 0,void 0,(function*(){const t=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(e=this.inputElement)||void 0===e?void 0:e.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}))}};Uo.styles=i`
    :host {
      width: 100%;
    }

    input {
      height: var(--line-height-3);
      line-height: var(--line-height-3);
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
  `,Wo([re({type:oe,converter:String}),zo("design:type",Object)],Uo.prototype,"theme",void 0),Wo([re({type:String}),zo("design:type",String)],Uo.prototype,"value",void 0),Wo([re({type:String}),zo("design:type",String)],Uo.prototype,"placeholder",void 0),Wo([re({type:Boolean}),zo("design:type",Boolean)],Uo.prototype,"disabled",void 0),Wo([ae("#inputElement"),zo("design:type",Object)],Uo.prototype,"inputElement",void 0),Uo=Wo([ne("nidoca-search-bar")],Uo);var Ho=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Go=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Yo{}Yo.CENTER="CENTER",Yo.LEFT="LEFT",Yo.RIGHT="RIGHT",Yo.TOP="TOP",Yo.BOTTOM="BOTTOM",Yo.SLIDE_CENTER="SLIDE_CENTER",Yo.SLIDE_LEFT="SLIDE_LEFT",Yo.SLIDE_RIGHT="SLIDE_RIGHT",Yo.SLIDE_TOP="SLIDE_TOP",Yo.SLIDE_BOTTOM="SLIDE_BOTTOM";let qo=class extends Q{constructor(){super(...arguments),this.transitionType=Yo.CENTER,this.duration=.5}render(){return P` <div .class="${this.transitionType}"><slot></slot></div> `}};qo.styles=i`
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
  `,Ho([re({type:Object}),Go("design:type",Yo)],qo.prototype,"transitionType",void 0),Ho([re({type:Number}),Go("design:type",Number)],qo.prototype,"duration",void 0),qo=Ho([ne("nidoca-transition")],qo);var Ko=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let Vo=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?P`
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
        `:P``}};Vo.styles=i`
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
  `,Ko([re({type:Boolean}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Boolean)],Vo.prototype,"show",void 0),Vo=Ko([ne("nidoca-dialog")],Vo);var Fo,Xo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Jo=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Zo=class extends Q{constructor(){super(...arguments),this.show=!1,this.theme=oe.BACKGROUND}render(){return P`
      <style>
        .box {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        ${Dt.MOBILE.asMediaStyle("slot{min-width:320px;}")}
        ${Dt.TABLET.asMediaStyle("slot{min-width:480px;}")}
        ${Dt.DESKTOP.asMediaStyle("slot{min-width:640px;}")}
      </style>
      <nidoca-dialog .show="${this.show}">
        <nidoca-card class="box" .shadowType="${Ue.KEY_LIGHT}">
          <nidoca-layout-spacer>
            <slot name="header"></slot>
            <slot name="text"></slot>
            <slot name="action"></slot>
          </nidoca-layout-spacer>
        </nidoca-card>
      </nidoca-dialog>
    `}};Zo.styles=i`
    slot {
      display: flex;
    }
  `,Xo([re({type:Boolean}),Jo("design:type",Boolean)],Zo.prototype,"show",void 0),Xo([re({type:oe}),Jo("design:type","function"==typeof(Fo=void 0!==oe&&oe)?Fo:Object)],Zo.prototype,"theme",void 0),Zo=Xo([ne("nidoca-dialog-action")],Zo);var Qo=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},en=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class tn{}tn.ROUND="ROUND",tn.CLICKABLE="CLICKABLE",tn.ZOOM_WRAPPED="ZOOM_WRAPPED",tn.FULL_WIDTH="FULL_WIDTH";let on=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[tn.CLICKABLE,tn.FULL_WIDTH]}render(){return P`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(e){let t="";return e.forEach((e=>{t=t.concat(" ").concat("")})),t}};on.styles=i`
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
  `,Qo([re({type:String}),en("design:type",String)],on.prototype,"src",void 0),Qo([re({type:String}),en("design:type",String)],on.prototype,"width",void 0),Qo([re({type:String}),en("design:type",String)],on.prototype,"height",void 0),Qo([re({type:tn,converter:Array}),en("design:type",Array)],on.prototype,"richMediaProperties",void 0),on=Qo([ne("nidoca-img-round")],on);var nn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},rn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let an=class extends Q{constructor(){super(...arguments),this.imgSrc="",this.primaryText="",this.description=""}render(){return P` <div
      style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
    >
        <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[tn.ROUND]}"> </nidoca-img>
        <nidoca-layout-spacer
          left="var(--space)"
          right="var(--space)"
          top="var(--space)"
          bottom="var(--space)"
        >
          <nidoca-text type="${ge.H3}">${this.primaryText}</nidoca-text>
        </nidoca-layout-spacer>
        <nidoca-text type="${ge.H5}">${this.description}</nidoca-text>
  </div>
    </div>`}};nn([re({type:String}),rn("design:type",String)],an.prototype,"imgSrc",void 0),nn([re({type:String}),rn("design:type",String)],an.prototype,"primaryText",void 0),nn([re({type:String}),rn("design:type",String)],an.prototype,"description",void 0),an=nn([ne("nidoca-avatar")],an);let sn=class extends Q{render(){return P`
      <nidoca-box-shadow .shadowType="${Ue.KEY_LIGHT}">
        <slot class="slotContainer"></slot>
      </nidoca-box-shadow>
    `}};sn.styles=i`
    .slotContainer {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
  `,sn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-card")],sn);let cn=class extends Q{render(){return P`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();for(let e=0;e<o.length;e++){const t=o[e].classList;t.contains("flexItem")||t.add("flexItem"),t.contains("flexItemDevice")||t.add("flexItemDevice")}}};cn.styles=i`
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
  `,cn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-gallery")],cn);let ln=class extends Q{render(){return P`<slot></slot>`}print(){const e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};ln.styles=i`
    :host {
      display: none;
    }
  `,ln=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-print")],ln);let pn=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return P`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){const t=e.target,o=t.offsetWidth,n=t.assignedElements(),i=n.length,r=[];let a=0;for(let e=0;e<i;e++){const t=n[e];if(t.setAttribute("class","item"),t instanceof HTMLElement){const e=t.style.width;if(0==e.length)r.push(t);else{const t=e.toUpperCase();a+=t.indexOf("PX")>-1?Number(t.replace("PX","")):Number(t.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),this.flexBasis=String(s/r.length)+"%",this.requestUpdate()}};pn.styles=i`
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

    @media only screen and (min-width: ${Dt.TABLET.minWidth}px) and (max-width: ${Dt.TABLET.maxWidth}px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: ${Dt.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,pn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-section")],pn);var dn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},hn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let un=class extends Q{constructor(){super(...arguments),this.title="",this.summary="",this.text=""}render(){return P`
      <div style="display:flex; flex-direction:column;">
        <slot name="title"></slot>
        ${this.title?P`<nidoca-text .type="${ge.H2}">${this.title}</nidoca-text>
              <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>`:P``}
        <slot name="summary"></slot>${this.summary?P`<nidoca-text .type="${ge.BODY1}"><i>${this.summary}</i></nidoca-text>
              <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>`:P``}
        <slot name="text"></slot>
        ${this.text?P`<nidoca-text .type="${ge.BODY1}">${this.text}</nidoca-text>`:P``}
        <slot></slot>
      </div>
    `}};un.styles=i`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  `,dn([re({type:String}),hn("design:type",String)],un.prototype,"title",void 0),dn([re({type:String}),hn("design:type",String)],un.prototype,"summary",void 0),dn([re({type:String}),hn("design:type",String)],un.prototype,"text",void 0),un=dn([ne("nidoca-article")],un);var yn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},mn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let gn=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return P`
      <nidoca-layout-spacer top="48px" bottom="48px">
        <div style="display:flex;flex-direction:column;align-items:center">
          <nidoca-icon
            icon="${this.icon}"
            style="font-size: 96px; padding:var(--space-4);"
            backgroundColor="var(--app-color-surface-background)"
          ></nidoca-icon>
          <nidoca-text .type="${ge.H2}">${this.primaryText}</nidoca-text>
          <nidoca-layout-spacer>
            <nidoca-text .type="${ge.BODY2}" .textAlign="${fe.CENTER}">
              ${this.text}
              <slot></slot>
            </nidoca-text>
          </nidoca-layout-spacer>
        </div>
      </nidoca-layout-spacer>
    `}};gn.styles=i``,yn([re({type:String}),mn("design:type",String)],gn.prototype,"primaryText",void 0),yn([re({type:String}),mn("design:type",String)],gn.prototype,"text",void 0),yn([re({type:String}),mn("design:type",String)],gn.prototype,"icon",void 0),gn=yn([ne("nidoca-icon-with-description")],gn);let fn=class extends Q{render(){return P`
      <nidoca-form id="authenitcate-form">
        <nidoca-text .type="${ge.H2}">Kontaktformular</nidoca-text>
        <nidoca-form-text name="name" .textType="${dt.TEXT}" value="" label="name"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>
        <nidoca-form-text .textType="${dt.EMAIL}" label="email" name="email"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>
        <nidoca-form-text name="title" .textType="${dt.TEXT}" value="" label="title"></nidoca-form-text>
        <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>

        <nidoca-form-textarea label="message" name="message" trailingIcon="vpn_key"></nidoca-form-textarea>

        <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>

        <nidoca-button
          text="Senden"
          @nidoca-event-button-clicked="${()=>alert("Login")}"
          .buttonType="${Le.CONTAINED}"
        ></nidoca-button>

        <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>
        <nidoca-text
          slot="errorMessages"
          .type="${ge.OVERLINE}"
          text="huhu"
        ></nidoca-text>
      </nidoca-form>
    `}};var bn;fn.styles=i``,fn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-form-contact")],fn),te.getUniqueInstance().initDefaultComponents(),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(e){e.STRING="String",e.NUMBER="Number",e.BOOLEAN="Boolean",e.COMBOBOX="Class",e.ARRAY="Array",e.UNDEFINED="undefined"}(bn||(bn={}));class vn{constructor(e,t){this.propertyName=e,this.propertyValue=t}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?bn.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?bn.UNDEFINED:this.getTypeName():bn.COMBOBOX}getEnumValues(){const e=[];return Object.values(this.getType()).forEach((t=>{e.push({key:t,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(t)])})})),e}getEnumValue(e){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(e)]}getEnumKey(e){const t=this.getEnumValues();for(let o=0;o<t.length;o++){const n=t[o];if(n.key==e)return n.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var e;return null===(e=this.propertyValue)||void 0===e?void 0:e.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var e;return null===(e=this.getConverterType())||void 0===e?void 0:e.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class xn{constructor(e){this.instance=e}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((e=>e.name?e.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(e,t){let o=[];if(t&&(t.tagName==e&&o.push(t),t.children.length>0)){const n=null==t?void 0:t.children;for(let t=0;t<n.length;t++)o=o.concat(this.getElementsByTagName(e,n.item(t)))}return o}getPropertieNames(){const e=this.instance.constructor;return Object.getOwnPropertyNames(e)}getProperties(){const e=this.instance.constructor.elementProperties;if(!e)throw new Error("selected item malformed");const t=[];for(const o of Array.from(e.keys()))t.push(new vn(o,e.get(o)));return t}}class wn{constructor(e){this.propertyWrapper=e}getInputElement(e){if(null==e)return P``;const t=e.classWrapper;if(null==t)return P``;switch(this.propertyWrapper.getRenderType()){case bn.STRING:return P`<nidoca-form-text .textType="${dt.TEXT}"
        label="${this.propertyWrapper.propertyName}"
          value="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,e.parent.requestUpdate()}}"
        /></nidoca-form-text>`;case bn.NUMBER:return P`<nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${dt.NUMBER}"
          value="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,e.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case bn.BOOLEAN:return P`<nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=o.target.getOutputData().value,e.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case bn.COMBOBOX:return P` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${lt.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter((e=>this.propertyWrapper.getType()[e]==t.instance[this.propertyWrapper.propertyName]))[0]}"
          @input="${o=>{t.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(o.target.getOutputData().value),e.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case bn.ARRAY:return P`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${lt.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${t.instance[this.propertyWrapper.propertyName]}"
            @input="${e=>{t.instance[this.propertyWrapper.propertyName]=e.target.getOutputData().value,t.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return P``}}getAsHtml(e){switch(this.propertyWrapper.getConverterTypeName()){case bn.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case bn.ARRAY:return"";case bn.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(e.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(e){switch(this.propertyWrapper.getRenderType()){case bn.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(e.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case bn.STRING:return`${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case bn.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsJavascript(e){switch(this.propertyWrapper.getConverterTypeName()){case bn.COMBOBOX:case bn.ARRAY:return"";case bn.STRING:return`element.${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${e.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(e){switch(this.propertyWrapper.getConverterTypeName()){case bn.COMBOBOX:case bn.ARRAY:return"";case bn.STRING:return`element.${this.propertyWrapper.propertyName}="${e.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${e.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class $n{constructor(e,t){this.parent=e,this.classWrapper=t}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((e=>e.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((e=>e.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((e=>e.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((e=>e.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`\n<${this.classWrapper.getTagName()}\n${this.classWrapper.getProperties().map((e=>`.${e.propertyName}="\${this.${e.propertyName}}"\n`)).join("")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(e){return e.indexOf(">")>-1&&(e=e.substr(e.indexOf(">")+1,e.length)),e}renderPropertyGui(){const e=[];for(const t of this.getPropertyGuiWrappers())e.push(P`
          <div>
            <b>${t.propertyWrapper.propertyName}</b>

            <pre>${t.propertyWrapper.getTypeName()}</pre>
            <div>${t.getInputElement(this)}</div>
          </div>
        `);return e}getPropertyGuiWrappers(){const e=[];for(const t of this.classWrapper.getProperties())e.push(new wn(t));return e}getPropertieNames(){const e=[];return this.getPropertyGuiWrappers().map((t=>{e.push(t.propertyWrapper.propertyName)})),e}hasProperties(){return this.getPropertieNames().length>0}}var Sn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Rn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let En=class extends Q{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(e){e.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new $n(this,new xn(this.element)),this.requestUpdate())}render(){var e,t,o,n,i,r,a;return P` <nidoca-section .theme="${oe.PRIMARY}">
        <div>
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-text .type="${ge.H2}">Tag</nidoca-text>
          </nidoca-layout-spacer>
          <nidoca-code
            >${this.webcomponentGuiWrapper?this.webcomponentGuiWrapper.classWrapper.getHTMLTag():""}
          </nidoca-code>

          <div style="padding-top:var(--space-3);">
            <nidoca-section> ${this.element} </nidoca-section>
          </div>
        </div>

        <div style="padding-left:var(--space-3)">
          ${(null===(e=this.webcomponentGuiWrapper)||void 0===e?void 0:e.hasProperties())?P`
                <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
                  <nidoca-text .type="${ge.H2}"> Attribute </nidoca-text>
                </nidoca-layout-spacer>

                ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((e=>P`${e.getInputElement(this.webcomponentGuiWrapper)}
                    <div style="padding-bottom:var(--space-6);"></div>`))}
              `:P``}
          ${(null===(t=this.webcomponentGuiWrapper)||void 0===t?void 0:t.classWrapper.hasSlots())?P` <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
                  <nidoca-text .type="${ge.H2}">Slots </nidoca-text>
                </nidoca-layout-spacer>

                <nidoca-table
                  .headers="${["name"]}"
                  .rows="${this.toSlotRows(this.webcomponentGuiWrapper.classWrapper.getSlotNames())}"
                >
                </nidoca-table>`:P``}
          ${this.customEventNames.length>0?P` <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
                  <nidoca-text .type="${ge.H2}">Custom Events </nidoca-text>
                </nidoca-layout-spacer>
                <nidoca-table .headers="${["name"]}" .rows="${this.toCustomEventRows(this.customEventNames)}">
                </nidoca-table>`:P``}
        </div>
      </nidoca-section>
      <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
        <nidoca-text .type="${ge.H2}"> Quelltext </nidoca-text>
      </nidoca-layout-spacer>
      <nidoca-tabs tabIndex="0">
        <nidoca-tab slot="tab">Javascript</nidoca-tab>
        <nidoca-tab slot="tab">Typescript</nidoca-tab>
        <nidoca-tab slot="tab">Lit</nidoca-tab>
        <nidoca-tab slot="tab">Angular</nidoca-tab>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-code style="width:100%;">${null===(o=this.webcomponentGuiWrapper)||void 0===o?void 0:o.getAsJavascript()} </nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-code>${null===(n=this.webcomponentGuiWrapper)||void 0===n?void 0:n.getTypescript()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-code>${null===(i=this.webcomponentGuiWrapper)||void 0===i?void 0:i.getAsLit()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-code>${null===(r=this.webcomponentGuiWrapper)||void 0===r?void 0:r.getAsHtml()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>
      </nidoca-tabs>

      <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
        <nidoca-text .type="${ge.H2}"> Attribute </nidoca-text>
      </nidoca-layout-spacer>

      <nidoca-table
        .headers="${["name","type","converter type","render type"]}"
        .rows="${this.toAttributeRows(null===(a=this.webcomponentGuiWrapper)||void 0===a?void 0:a.getPropertyGuiWrappers())}"
      >
      </nidoca-table>
      <slot @slotchange="${e=>this.slotChanged(e)}"></slot>`}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements()[0];o instanceof HTMLElement&&(this.element=o)}toAttributeRows(e){const t=[[]];return e&&e.map((e=>{const o=[];return o.push(e.propertyWrapper.propertyName),o.push(e.propertyWrapper.getTypeName()),o.push(e.propertyWrapper.getConverterTypeName()),o.push(e.propertyWrapper.getRenderType()),t.push(o),o})),t}toSlotRows(e){const t=[[]];return e&&e.map((e=>{const o=[];return o.push(e),t.push(o),o})),t}toCustomEventRows(e){const t=[[]];return e&&e.map((e=>{const o=[];return o.push(e),t.push(o),o})),t}};En.styles=i`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `,Sn([re({type:Array}),Rn("design:type",Array)],En.prototype,"customEventNames",void 0),Sn([re({type:Object}),Rn("design:type",Object)],En.prototype,"element",void 0),En=Sn([ne("webcomponent-viewer")],En);let Tn=class extends Q{render(){return P`
      <nidoca-section style="width:50%;">
        <nidoca-layout-spacer top="250px" bottom="250px">
          <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
            <nidoca-img
              width="100px"
              height="100px"
              src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg"
            >
            </nidoca-img>
            <nidoca-text .type="${ge.H1}">&nbsp;nidoca-webcomponents</nidoca-text>
          </div>
        </nidoca-layout-spacer>
      </nidoca-section>

      <nidoca-layout-container .theme="${oe.PRIMARY}">
        <nidoca-section .devices="${[Dt.DESKTOP]}">
          <nidoca-icon-with-description
            title="Komponentenbibliothek"
            icon="local_library"
            style="padding:var(--space-3);"
          >
            Nidoce ist eine Komponentenbibliothek mit über ${te.getUniqueInstance().registeredElementNames.length}
            Komponenten für den direkten Einsatz in deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die
            Komponenten können dank der Webcomponent Technologie überall in andere Frameworks eingebaungen werden.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Leichtgewichtig" icon="code" style="padding:var(--space-3);">
            Es ist ein sehr kleines, leichtes Komponenten-Framework, das nur 32 KB klein ist. Es enthält mehr als 30
            Komponenten und diverse Zusatzfunktionen wie Routing / Internationalisierung und Speicherung. Komponenten
            können einfach angepasst werden und sind sehr einfach erweiterbar. erstellen.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Open Source" icon="code" style="padding:var(--space-3);">
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
        <nidoca-section style="width:50%; padding-top:var(--space-8);padding-bottom:var(--space-8);">
          <nidoca-article
            summary="Die Komponenten sind für Desktop, Tablet und Mobile optimiert."
            text="The components looks good on all devices, because they are designed responsive. Responsive web design is a
            creative and technical paradigm for creating websites, so that they can react to the properties of the end
            device used, especially smartphones and tablet computers."
          >
            <nidoca-text slot="title" .type="${ge.H2}"
              >Responsive Komponenten</nidoca-text
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-layout-container .theme="${oe.BACKGROUND}">
        <nidoca-section style="width:50%; padding-top:var(--space-8);padding-bottom:var(--space-8);">
          <nidoca-article
            summary="Alle Komponenten erfüllen den Webcomponent Standart"
            text="Webkomponenten sind eine Gruppe von Web-Technologien, die es ermöglichen, benutzerdefinierte, wiederverwendbare HTML Elemente zu erstellen, deren Funktionalität gekapselt ist und damit vollständig getrennt von anderem Code."
          >
            <nidoca-text slot="title" .type="${ge.H2}">Webcomponents</nidoca-text>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-container>

      <nidoca-layout-container .theme="${oe.PRIMARY}">
        <nidoca-section style="width:50%; padding:var(--space-8);">
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
    `}};Tn.styles=i``,Tn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-main")],Tn);var On=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};let kn=class extends Q{constructor(){super(...arguments),this.elementName="nidoca-elevation"}render(){return P`
      <nidoca-section style="width:50%;">
        <nidoca-layout-spacer top="var(--space-8)" bottom="var(--space-8)">
          <nidoca-article
            title="Komponentenübersicht"
            text="Auf dieser Seite kannst du dir die einzelnen Komponenten von Nidoca anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
          ></nidoca-article>
          <nidoca-layout-spacer top="20px"></nidoca-layout-spacer>
          <nidoca-form-combobox
            name="components"
            label="Komponenten"
            value="${this.elementName}"
            .options="${lt.stringArrayToOptions(te.getUniqueInstance().registeredElementNames)}"
            @input="${e=>{this.elementName=e.target.getOutputData().value}}"
          ></nidoca-form-combobox>
        </nidoca-layout-spacer>
      </nidoca-section>

      <nidoca-section style="width:50%;">
        <webcomponent-viewer> ${te.getUniqueInstance().registeredElementsMap.get(this.elementName)} </webcomponent-viewer>
      </nidoca-section>
    `}};kn.styles=i``,On([re({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],kn.prototype,"elementName",void 0),kn=On([ne("nidoca-page-components")],kn);let In=class extends Q{render(){return P`
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Impressum" summary="Angaben gemäß § 5 TMG">
            <nidoca-text .type="${ge.BODY1}">Dominik Bruhn</nidoca-text>
            <nidoca-text .type="${ge.BODY1}">Holzwickeder Straße 109c</nidoca-text>
            <nidoca-text .type="${ge.BODY1}">44309 Dortmund</nidoca-text>
            <nidoca-layout-spacer></nidoca-layout-spacer>
            <nidoca-text .type="${ge.BODY1}"
              >Telefonnummer: +49 152 052 488 62</nidoca-text
            >
            <nidoca-text .type="${ge.BODY1}"
              >E-Mail: dominikbruhn [at] googlemail.com</nidoca-text
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Streitsschlichtung">
            <nidoca-text .type="${ge.BODY1}"
              >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="${so.BLANK}"
                >https://ec.europa.eu/consumers/odr</nidoca-link
              >. <br />Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.</nidoca-text
            >
            <nidoca-text .type="${ge.BODY1}">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </nidoca-text>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Haftungsinhalt">
            <nidoca-text .type="${ge.BODY1}">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.<br />
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </nidoca-text>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Haftungslinks">
            <nidoca-text .type="${ge.BODY1}">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </nidoca-text>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Copyright">
            <nidoca-text .type="${ge.BODY1}">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </nidoca-text>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)" bottom="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Quelle">
            <nidoca-link href="https://www.e-recht24.de/impressum-generator.html" targetType="${so.BLANK}"
              >https://www.e-recht24.de/impressum-generator.html</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <div style="padding-top:var(--space-8); padding-bottom:var(--space-8);">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Material Icons">
            <nidoca-link href="https://fonts.google.com/icons" targetType="${so.BLANK}"
              >https://fonts.google.com/icons</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Fonts">
            <nidoca-link href=" https://fonts.google.com/" targetType="${so.BLANK}">
              https://fonts.google.com/</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </div>
    `}};In.styles=i``,In=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-imprint")],In);var An=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},jn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Cn=class extends Q{constructor(){super(),this.cssVars=[],this.cssVars=((e=document.styleSheets)=>{const t=[];return Array.from(e).forEach((e=>{Array.from(e.cssRules).forEach((e=>{if(!e||!e.style)return;const o=e.style;Array.from(o).forEach((e=>{e.startsWith("--")&&-1==t.indexOf(e)&&t.push(e)}))}))})),t})()}render(){return P`
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="CSS Variablen">
            ${at([this.cssVars],(()=>P`
                  ${it(this.cssVars,(e=>P`
                      <nidoca-form-text
                        style="width:100%;"
                        @input="${t=>{document.documentElement.style.setProperty(e,t.target?t.target.getOutputData().value:"")}}"
                        type="${e.indexOf("color")>-1?dt.COLOR:dt.TEXT}"
                        name="${e}"
                        value="${getComputedStyle(document.documentElement).getPropertyValue(e).trim()}"
                        label="${e}"
                      ></nidoca-form-text>
                      <nidoca-layout-spacer top="var(--space-3)"></nidoca-layout-spacer>
                    `))}
                `))}
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>
    `}};Cn.styles=i``,An([re({type:Array}),jn("design:type",Array)],Cn.prototype,"cssVars",void 0),Cn=An([ne("nidoca-page-settings"),jn("design:paramtypes",[])],Cn);let Pn=class extends Q{render(){return P``}};Pn.styles=i``,Pn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-privacy")],Pn);let Nn=class extends Q{render(){return P``}};Nn.styles=i``,Nn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-page-terms-of-use")],Nn);class _n{constructor(){this.listeners=[],window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",(e=>{if(!this.shouldIgnoreEvent(e)){const t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}}))}static getUniqueInstance(){return _n.uniqueInstance||(_n.uniqueInstance=new _n),_n.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){-1==e.indexOf("#")&&(e="#".concat(e)),console.trace("navigate to: %s",e),null!=t&&console.trace("state: %s",JSON.stringify(t)),document.location.hash!==e?(history.pushState(t,"",e),this.notifyListeners()):console.trace("you are already on page: "+e)}getCurrentState(){return history.state}getStateProperty(e){const t=this.getCurrentState();return null!=t?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const e=this.getCurrentPage();this.listeners.forEach((t=>t.routeChanged(e)))}shouldIgnoreEvent(e){return e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(const t of e.composedPath?e.composedPath():[])if(this.isAnchor(t))return t;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&"a"===e.nodeName.toLowerCase()}shouldIgnoreAnchor(e){return!(!e.target||"_self"===e.target.toLowerCase())||(!!e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){const t=e.port,o=e.protocol;return`${o}//${"http:"===o&&"80"===t||"https:"===o&&"443"===t?e.hostname:e.host}`}}let Dn=class extends Q{render(){return P`
      <nidoca-list slot="sidebar">
        <nidoca-list-item
          icon="home"
          text="Home"
          href="#main"
          .rendered="${!0}"
          @click="${()=>_n.getUniqueInstance().navigate("main")}"
        ></nidoca-list-item>
        <nidoca-list-item
          icon="home"
          text="Gallery"
          href="#main"
          .rendered="${!0}"
          @click="${()=>_n.getUniqueInstance().navigate("gallery")}"
        ></nidoca-list-item>
      </nidoca-list>
    `}};Dn.styles=i``,Dn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}([ne("nidoca-elevation-settings")],Dn);var Bn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},Ln=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Mn=class extends Q{constructor(){super(...arguments),this.username=localStorage.getItem("nidoca-local-storage-authentication-username-value"),this.hrefResetPassword="#reset_password",this.hrefRegister="#register",this.errorMessage=""}render(){return P`
      <nidoca-layout-container minWidth="350px" maxWidth="80%" .theme="${oe.BACKGROUND}">
        <nidoca-layout-spacer
          left="var(--space-6)"
          right="var(--space-6)"
          top="var(--space-6)"
          bottom="var(--space-6)"
        >
          <nidoca-form id="authenitcate-form">
            <nidoca-text .type="${ge.H1}">Anmeldung</nidoca-text>
            <nidoca-form-text
              name="username"
              .textType="${dt.EMAIL}"
              .value="${this.username}"
              label="username"
              trailingIcon="account_circle"
            ></nidoca-form-text>
            <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>
            <nidoca-form-text
              .textType="${dt.PASSWORD}"
              label="password"
              name="password"
              trailingIcon="vpn_key"
            ></nidoca-form-text>
            <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>
            <nidoca-button text="Login" @nidoca-event-button-clicked="${()=>alert("Login")}"></nidoca-button>
            <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>
            <nidoca-button @nidoca-event-button-clicked="${()=>this.closePopup()}">Schließen</nidoca-button>
            <nidoca-layout-spacer bottom="var(--space-3)"></nidoca-layout-spacer>
            <nidoca-text
              slot="errorMessages"
              .type="${ge.OVERLINE}"
              text="${this.errorMessage}"
            ></nidoca-text>
          </nidoca-form>
        </nidoca-layout-spacer>
      </nidoca-layout-container>
    `}closePopup(){this.dispatchEvent(new CustomEvent("nidoca-form-login-closePopup",{detail:this,bubbles:!0,composed:!0}))}};Mn.styles=i``,Bn([re(),Ln("design:type",Object)],Mn.prototype,"username",void 0),Bn([re(),Ln("design:type",String)],Mn.prototype,"hrefResetPassword",void 0),Bn([re(),Ln("design:type",String)],Mn.prototype,"hrefRegister",void 0),Bn([ae("#authenitcate-form"),Ln("design:type",Object)],Mn.prototype,"formComponent",void 0),Bn([re(),Ln("design:type",String)],Mn.prototype,"errorMessage",void 0),Mn=Bn([ne("nidoca-form-login")],Mn);var Wn=function(e,t,o,n){var i,r=arguments.length,a=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(r<3?i(a):r>3?i(t,o,a):i(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},zn=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Un=class extends Q{constructor(){super(),this.showPopup=!1,this.popupContent=P``,this.navigationClosed=!0,this.prominent=!1,this.currentPage=P`<nidoca-page-main></nidoca-page-main>`,this.elevationShow=!1,_n.getUniqueInstance().subscribe(this),this.routeChanged(_n.getUniqueInstance().getCurrentPage())}routeChanged(e){switch(console.log("enter new page, url: %s",e),e){case"components":this.currentPage=P`<nidoca-page-components></nidoca-page-components>`;break;case"settings":this.currentPage=P`<nidoca-page-settings></nidoca-page-settings>`;break;case"imprint":this.currentPage=P`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"terms-of-use":this.currentPage=P`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"privacy":this.currentPage=P`<nidoca-page-privacy></nidoca-page-privacy>`;break;default:this.currentPage=P`<nidoca-page-main></nidoca-page-main>`}}render(){return P`
      <nidoca-template
        .prominent="${this.prominent}"
        .navigationClosed="${this.navigationClosed}"
        .theme="${oe.PRIMARY}"
      >
        <nidoca-text slot="topCenter" type="${ge.BODY1}"></nidoca-text>
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
          @nidoca-event-icon-clicked="${()=>{this.showPopup=!0,this.popupContent=P`<nidoca-form-login></nidoca-form-login>`}}"
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
          <nidoca-menu-item text="Start" @click="${()=>_n.getUniqueInstance().navigate("main")}">
          </nidoca-menu-item>

          <nidoca-menu-area text="Framework"></nidoca-menu-area>

          <nidoca-menu-item
            text="Komponenten"
            @click="${()=>_n.getUniqueInstance().navigate("components")}"
          >
          </nidoca-menu-item>

          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>

          <nidoca-menu-item text="Impressum" @click="${()=>_n.getUniqueInstance().navigate("imprint")}">
          </nidoca-menu-item>

          <nidoca-menu-item text="Datenschutz" @click="${()=>_n.getUniqueInstance().navigate("privacy")}">
          </nidoca-menu-item>

          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @click="${()=>_n.getUniqueInstance().navigate("terms-of-use")}"
          >
          </nidoca-menu-item>

          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>

          <nidoca-menu-item
            icon="home"
            text="Einstellungen"
            @click="${()=>_n.getUniqueInstance().navigate("settings")}"
          >
          </nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
      <nidoca-dialog .show="${this.showPopup}" @nidoca-form-login-closePopup="${()=>this.showPopup=!1}"
        >${this.popupContent}
      </nidoca-dialog>
      <nidoca-elevation
        .show="${this.elevationShow}"
        .associatedElement="${this.elevationAssociatedElement}"
        @mouseout="${()=>this.elevationShow=!1}"
        >${this.elevationContentElement}</nidoca-elevation
      >
    `}};Wn([re({type:Boolean}),zn("design:type",Boolean)],Un.prototype,"showPopup",void 0),Wn([re({type:Object}),zn("design:type",Object)],Un.prototype,"popupContent",void 0),Wn([re({type:Boolean}),zn("design:type",Boolean)],Un.prototype,"navigationClosed",void 0),Wn([re({type:Boolean}),zn("design:type",Boolean)],Un.prototype,"prominent",void 0),Wn([re({type:Object}),zn("design:type",Object)],Un.prototype,"currentPage",void 0),Wn([re({type:Boolean}),zn("design:type",Boolean)],Un.prototype,"elevationShow",void 0),Wn([re({type:Object}),zn("design:type",Object)],Un.prototype,"elevationAssociatedElement",void 0),Wn([re({type:Object}),zn("design:type",Object)],Un.prototype,"elevationContentElement",void 0),Un=Wn([ne("nidoca-app"),zn("design:paramtypes",[])],Un)})();