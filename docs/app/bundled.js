/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class o{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new o(n,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new o("string"==typeof t?t:t+"",e))(i)})(t):t;var s;const a=window.trustedTypes,l=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var o,n;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const s=(null!==(n=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this._$Ei=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Ei=null}}_$AK(t,e){var i,o,n;const r=this.constructor,s=r._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=r.getPropertyOptions(s),a=t.converter,l=null!==(n=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.2.0");const g=globalThis.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,b="?"+y,x=`<${b}>`,v=document,w=(t="")=>v.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,k=t=>{var e;return S(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,$=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,P=/"/g,M=/^(?:script|style|textarea)$/i,D=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),A=D(1),C=(D(2),Symbol.for("lit-noChange")),I=Symbol.for("lit-nothing"),j=new WeakMap,L=v.createTreeWalker(v,129,null,!1),N=(t,e)=>{const i=t.length-1,o=[];let n,r=2===e?"<svg>":"",s=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===R?"!--"===l[1]?s=O:void 0!==l[1]?s=$:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=E):void 0!==l[3]&&(s=E):s===E?">"===l[0]?(s=null!=n?n:R,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?E:'"'===l[3]?P:T):s===P||s===T?s=E:s===O||s===$?s=R:(s=E,n=void 0);const h=s===E&&t[e+1].startsWith("/>")?" ":"";r+=s===R?i+x:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+y+h):i+y+(-2===c?(o.push(void 0),e):h)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,o]};class B{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const s=t.length-1,a=this.parts,[l,c]=N(t,e);if(this.el=B.createElement(l,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=L.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[r++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?Y:"@"===e[1]?q:F})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(M.test(o.tagName)){const t=o.textContent.split(y),e=t.length-1;if(e>0){o.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],w()),L.nextNode(),a.push({type:2,index:++n});o.append(t[e],w())}}}else if(8===o.nodeType)if(o.data===b)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(y,t+1));)a.push({type:7,index:n}),t+=y.length-1}n++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,o){var n,r,s,a;if(e===C)return e;let l=void 0!==o?null===(n=i._$Cl)||void 0===n?void 0:n[o]:i._$Cu;const c=_(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(s=(a=i)._$Cl)&&void 0!==s?s:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,o)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:v).importNode(i,!0);L.currentNode=n;let r=L.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new H(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new G(r,this,t)),this.v.push(e),l=o[++a]}s!==(null==l?void 0:l.index)&&(r=L.nextNode(),s++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{constructor(t,e,i,o){var n;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),_(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==C&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):k(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==I&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S(v.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=B.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new W(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new B(t)),e}A(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new H(this.M(w()),this.M(w()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,o,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(void 0===n)t=z(this,t,e,0),r=!_(t)||t!==this._$AH&&t!==C,r&&(this._$AH=t);else{const o=t;let s,a;for(t=n[0],s=0;s<n.length-1;s++)a=z(this,o[i+s],e,s),a===C&&(a=this._$AH[s]),r||(r=!_(a)||a!==this._$AH[s]),a===I?t=I:t!==I&&(t+=(null!=a?a:"")+n[s+1]),this._$AH[s]=a}r&&!o&&this.k(t)}k(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends F{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===I?void 0:t}}const V=g?g.emptyScript:"";class Y extends F{constructor(){super(...arguments),this.type=4}k(t){t&&t!==I?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class q extends F{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:I)===C)return;const o=this._$AH,n=t===I&&o!==I||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==I&&(o===I||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const K={P:"$lit$",V:y,L:b,I:1,N,R:W,D:k,j:z,H,O:F,F:Y,B:q,W:U,Z:G},X=window.litHtmlPolyfillSupport;var J,Z;null==X||X(B,H),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.1.1");class Q extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,n;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let s=r._$litPart$;if(void 0===s){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=s=new H(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return C}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.1.1");class et{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){this._registeredElementsMap.set("nidoca-form-upload",A` <nidoca-form-upload theme="primary"></nidoca-form-upload>`),this.registeredElementsMap.set("nidoca-list",A` <nidoca-list theme="secondary" selectionMode>
        <nidoca-list-section>A</nidoca-list-section>
        <nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item>
        <nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item>
        <nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item>
      </nidoca-list>`),this._registeredElementsMap.set("nidoca-form-contact",A` <nidoca-form-contact
        @nidoca-form-contact-submit="${t=>alert(JSON.stringify(t.detail))}"
        theme="${it.BACKGROUND}"
      ></nidoca-form-contact>`),this._registeredElementsMap.set("nidoca-form-change-password",A` <nidoca-form-change-password
        theme="${it.SECONDARY}"
        @nidoca-form-change-password-submit="${t=>alert(JSON.stringify(t.detail))}"
      ></nidoca-form-change-password>`),this._registeredElementsMap.set("nidoca-form-register",A` <nidoca-form-register
        @nidoca-form-register-submit="${t=>alert(JSON.stringify(t.detail))}"
        theme="${it.PRIMARY}"
      ></nidoca-form-register>`),this._registeredElementsMap.set("nidoca-form-reset-password",A` <nidoca-form-reset-password
        @nidoca-form-reset-password-submit="${t=>alert(JSON.stringify(t.detail))}"
        theme="${it.PRIMARY}"
      ></nidoca-form-reset-password>`),this._registeredElementsMap.set("nidoca-form-newsletter",A` <nidoca-form-newsletter
        @nidoca-form-newsletter-submit="${t=>alert(JSON.stringify(t.detail))}"
        theme="${it.SURFACE}"
      ></nidoca-form-newsletter>`),this._registeredElementsMap.set("nidoca-form-login",A` <nidoca-form-login
        @nidoca-form-login-submit="${t=>alert(JSON.stringify(t.detail))}"
      ></nidoca-form-login>`),this.registeredElementsMap.set("nidoca-article",A` <nidoca-article
        overline="Ut enim ad minim veniam"
        title="Ut enim ad minim veniam"
        summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      >
        <nidoca-button theme="${it.SECONDARY}" .buttonType="${Bt.OUTLINED}"
          >Aktion
        </nidoca-button>
      </nidoca-article>`),this.registeredElementsMap.set("nidoca-text",A` <nidoca-text>Ut enim ad minim veniam.</nidoca-text>`);const t=new wi;t.src="http://nidoca.eu/img/DSC02586.jpg",t.width="100%",t.height="100%",this.registeredElementsMap.set("nidoca-img",A`${t}`);const e=new ki;e.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",A`${e}`),this.registeredElementsMap.set("nidoca-search-bar",A` <nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`),this.registeredElementsMap.set("nidoca-avatar",A`<nidoca-avatar
        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
        primaryText="Dominik Bruhn"
        description="Softwareentwickler"
      >
      </nidoca-avatar>`);const i=new Nt;i.style.padding="var(--space-6)",this.registeredElementsMap.set("nidoca-progress",A`${i}`);const o=new hi;o.style.padding="var(--space-6)",o.icon="home",o.primaryText="Home Icon",o.clickable=!0,o.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",A`${o}`),this._registeredElementsMap.set("nidoca-menu",A` <nidoca-menu theme="secondary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"></nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"></nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"></nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"></nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"></nidoca-menu-item>
      </nidoca-menu>`),this._registeredElementsMap.set("nidoca-accordion",A` <nidoca-accordion .theme="${it.PRIMARY}">
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
      </nidoca-accordion>`),this._registeredElementsMap.set("nidoca-box-shadow",A` <nidoca-box-shadow></nidoca-box-shadow>`),this._registeredElementsMap.set("nidoca-button",A` <nidoca-button leadingIcon="home" buttonType="CONTAINED">Mein Button</nidoca-button>`),this._registeredElementsMap.set("nidoca-card",A` <nidoca-card></nidoca-card>`),this._registeredElementsMap.set("nidoca-chip",A` <nidoca-chip>Lorem Ipsum</nidoca-chip>`),this._registeredElementsMap.set("nidoca-code",A` <nidoca-code>Lorem Ipsum</nidoca-code>`),this._registeredElementsMap.set("nidoca-dialog-action",A` <nidoca-dialog-action></nidoca-dialog-action>`),this._registeredElementsMap.set("nidoca-dialog",A` <nidoca-dialog>
        <nidoca-button
          @click="${t=>{t.target.parentNode.show=!1,t.target.getRootNode().host.requestUpdate()}}"
          >Schließen
        </nidoca-button>
      </nidoca-dialog>`),this._registeredElementsMap.set("nidoca-form-combobox",A` <nidoca-form-combobox
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
      ></nidoca-form-combobox>`),this._registeredElementsMap.set("nidoca-form-date",A` <nidoca-form-date
        theme="background"
        label="Geburtstag"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-date>`),this._registeredElementsMap.set("nidoca-form-switch",A` <nidoca-form-switch></nidoca-form-switch>`),this._registeredElementsMap.set("nidoca-form-text",A`
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
      `),this._registeredElementsMap.set("nidoca-form-textarea",A` <nidoca-form-textarea
        theme="secondary"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-textarea>`),this._registeredElementsMap.set("nidoca-form-captcha",A` <nidoca-form-captcha
        theme="primary"
        label="Wie lautet das Ergebnis von:"
        name="captcha"
      ></nidoca-form-captcha>`),this._registeredElementsMap.set("nidoca-gallery",A` <nidoca-gallery>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
      </nidoca-gallery>`),this._registeredElementsMap.set("nidoca-link",A` <nidoca-link></nidoca-link>`),this._registeredElementsMap.set("nidoca-ripple",A` <nidoca-ripple></nidoca-ripple>`),this._registeredElementsMap.set("nidoca-tabs",A`
        <nidoca-tabs tabIndex="0">
          <nidoca-tab slot="tab">Tab 1</nidoca-tab>
          <nidoca-tab slot="tab">Tab 2</nidoca-tab>
          <nidoca-tab slot="tab">Tab 3</nidoca-tab>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 1</nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 2</nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 3</nidoca-tab-content>
        </nidoca-tabs>
      `),this._registeredElementsMap.set("nidoca-table",A` <nidoca-table></nidoca-table>`),this._registeredElementsMap.set("nidoca-top-app-bar",A` <nidoca-top-app-bar .theme="${it.PRIMARY}">
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>

        <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>`),this._registeredElementsMap.set("nidoca-upload",A` <nidoca-upload></nidoca-upload>`),this._registeredElementsMap.set("nidoca-wizard",A` <nidoca-wizard></nidoca-wizard>`),this._registeredElementsMap.set("nidoca-icon-with-description",A` <nidoca-icon-with-description title="Komponentenbibliothek" icon="local_library">
        Die Nidoca Webcomponents ist eine Sammlung von Webkomponenten mit über
        ${et.getUniqueInstance().registeredElementNames.length} Komponenten. Diese sind für den direkten Einsatz in
        deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die Komponenten können dank der Webcomponent
        Technologie überall in andere Frameworks eingebaungen werden.
      </nidoca-icon-with-description>`)}static getUniqueInstance(){return et.uniqueInstance||(et.uniqueInstance=new et),et.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const t=[];for(const e of this.registeredElementsMap.keys())t.push(e);return t}registerElementName(t){console.log(`register element: ${t}`);const e=document.createElement(t);this.registeredElementsMap.set(t,A`${e}`)}}class it{static getStyle(t){return t?A` <style>
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
        </style>`:A``}static getOposite(t){return t==it.BACKGROUND?it.PRIMARY:t==it.PRIMARY||t==it.SURFACE?it.SECONDARY:t==it.SECONDARY?it.PRIMARY:it.SURFACE}getParentTheme(t){let e=t.parentElement;for(;null!=e;){if(e instanceof Uo&&null!=e.theme)return e.theme;e=e.parentElement}}}it.PRIMARY="primary",it.SECONDARY="secondary",it.SURFACE="surface",it.BACKGROUND="background";class ot{constructor(t,e,i=10240){this.key=t,this.minWidth=e,this.maxWidth=i}static applyDevices(t,e){for(let i=0;i<e.length;i++)if(e[i]==this.getCurrentScreen())return t;return""}static getCurrentScreen(){let t=null;return[ot.MOBILE,ot.TABLET,ot.DESKTOP].forEach((e=>{(null==e.minWidth||e.minWidth<window.innerWidth)&&(null==e.maxWidth||e.maxWidth>window.innerWidth)&&(t=e)})),t}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}ot.MOBILE=new ot("MOBILE",0,640),ot.TABLET=new ot("TABLET",641,1007),ot.DESKTOP=new ot("DESKTOP",1008),ot.WIDE_DESKTOP=new ot("WIDE_DESKTOP",1008);const nt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e),rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)}const at=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,r=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(r.finisher=function(e){t(e,o)}),r}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}};function lt(t,e){return at({descriptor:i=>{const o={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[e]&&(this[e]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;var dt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let pt=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return A`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?A` <slot></slot>`:A``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};pt.styles=n`
    :host {
      border-left-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    .header {
      padding-left: var(--space-2);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      cursor: pointer;
    }
  `,dt([st({type:String}),ht("design:type",String)],pt.prototype,"header",void 0),dt([st({type:Boolean}),ht("design:type",Boolean)],pt.prototype,"opened",void 0),pt=dt([nt("nidoca-accordion-item")],pt);var ut,ft,gt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},mt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.SINGLE="SINGLE",t.MULTI="MULTI"}(ft||(ft={}));let yt=class extends Q{constructor(){super(...arguments),this.theme=it.SURFACE,this.accordionType=ft.SINGLE}render(){return A`
      ${it.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case ft.SINGLE:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let i=0;i<t.length;i++){const o=t[i];o instanceof pt&&o!=e&&(o.opened=!1)}}case ft.MULTI:}t.stopPropagation()}};yt.styles=n`
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
  `,gt([st({type:it,converter:String}),mt("design:type","function"==typeof(ut=void 0!==it&&it)?ut:Object)],yt.prototype,"theme",void 0),gt([st({type:ft,converter:String}),mt("design:type",String)],yt.prototype,"accordionType",void 0),gt([lt("#accordionSlot"),mt("design:type",Object)],yt.prototype,"accordionSlot",void 0),yt=gt([nt("nidoca-accordion")],yt);var bt,xt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},vt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6",t.SUBTITLE1="SUBTITLE1",t.SUBTITLE2="SUBTITLE2",t.BODY1="BODY1",t.BODY2="BODY2",t.BUTTON="BUTTON",t.CAPTION="CAPTION",t.OVERLINE="OVERLINE"}(bt||(bt={}));let wt=class extends Q{constructor(){super(),this.type=bt.BODY1,this.text="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{this.slotElement&&"type"==e&&(this.slotElement.classList.remove(...this.slotElement.classList),this.slotElement.classList.add(this.type))}))}render(){return A`
            <slot id="slotElement">${this.text}</slot>`}};wt.styles=n`
    :host,
    slot {
      display: block;
      vertical-align: text-bottom;
    }
  `,xt([st({type:bt,converter:String}),vt("design:type",String)],wt.prototype,"type",void 0),xt([st({type:String}),vt("design:type",String)],wt.prototype,"text",void 0),xt([st({type:String}),vt("design:type",Object)],wt.prototype,"theme",void 0),xt([lt("#slotElement"),vt("design:type",Object)],wt.prototype,"slotElement",void 0),wt=xt([nt("nidoca-text"),vt("design:paramtypes",[])],wt);var _t,St=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},kt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(_t||(_t={}));let Rt=class extends Q{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return A`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${gi.NONE}"
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
        <nidoca-text style="width:48px;" .type="${bt.OVERLINE}" text="${this.primaryText}"
          ><slot></slot>
        </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==_t.COMPLETED?"var(--app-color-primary)":t==_t.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==_t.FINISH?"var(--app-color-success)":t==_t.COMPLETED?"var(--mdc-theme-on-primary)":t==_t.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};Rt.styles=n`
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
  `,St([st({type:String}),kt("design:type",String)],Rt.prototype,"icon",void 0),St([st({type:String}),kt("design:type",String)],Rt.prototype,"primaryText",void 0),St([st({type:Number}),kt("design:type",Object)],Rt.prototype,"state",void 0),St([st({type:Boolean}),kt("design:type",Boolean)],Rt.prototype,"isLast",void 0),Rt=St([nt("nidoca-wizard-step")],Rt);var Ot=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let $t=class extends Q{render(){return A`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements();let o=0;for(let t=0;t<i.length;t++){const e=i[t];e instanceof Rt&&(e.index=t,e.state==_t.CURRENT&&(o=t),e.index==i.length-1&&(e.isLast=!0))}this.changeState(o)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof Rt&&void 0!==o.index&&(o.index<t?o.state=_t.COMPLETED:o.index==t?o.state=_t.CURRENT:o.state=_t.OPEN)}}}};$t.styles=n``,Ot([lt("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],$t.prototype,"wizardSlot",void 0),$t=Ot([nt("nidoca-wizard")],$t);var Et=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Tt=class extends Q{constructor(){super(...arguments),this.clickable=!0}render(){return A`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};Tt.styles=n`
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
  `,Et([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Tt.prototype,"clickable",void 0),Tt=Et([nt("nidoca-chip")],Tt);var Pt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Mt=class extends Q{constructor(){super(...arguments),this.code=""}render(){return A`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};Mt.styles=n`
  :host {
    font-size:0.75rem;
  }
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
  `,Pt([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Mt.prototype,"code",void 0),Mt=Pt([nt("nidoca-code")],Mt);var Dt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},At=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ct=class extends Q{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const i=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();i&&(i.top>t.clientY||i.right<t.clientX||i.left>t.clientX||i.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?A`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:A``}calculatePositionStyle(t){let e="";if(t){const i=t.getBoundingClientRect();i.right>window.innerWidth/2?e+=`right:${window.innerWidth-i.right}px;`:e+=`left:${i.left}px;`,i.top>window.innerHeight/2?e+=`bottom:${i.height+window.innerHeight-i.top}px;`:e+=`top:${i.bottom}px;`}return e}};Ct.styles=n`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Dt([st({type:Boolean}),At("design:type",Boolean)],Ct.prototype,"show",void 0),Dt([st({type:Object}),At("design:type",Object)],Ct.prototype,"associatedElement",void 0),Ct=Dt([nt("nidoca-elevation"),At("design:paramtypes",[])],Ct);var It=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},jt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Lt{}Lt.PROGRESS="PROGRESS",Lt.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Nt=class extends Q{constructor(){super(...arguments),this.progressType=Lt.PROGRESS}render(){return A` <style>
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

      <progress class="${this.progressType}"></progress>`}};Nt.styles=n``,It([st({type:it,converter:String}),jt("design:type",Object)],Nt.prototype,"theme",void 0),It([st({type:Lt,converter:String}),jt("design:type",String)],Nt.prototype,"progressType",void 0),Nt=It([nt("nidoca-progress")],Nt);var Bt,zt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Wt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.CONTAINED="CONTAINED",t.OUTLINED="OUTLINED",t.TEXT="TEXT"}(Bt||(Bt={}));let Ht=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.buttonType=Bt.CONTAINED,this.leadingIcon="",this.text=""}render(){return A`
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
                    font-weight: 900;
                    color: var(--app-color-${this.theme}-background);
                }

                .OUTLINED:focus-within,
                ::slotted(.OUTLINED:focus-within) {
                    border-color: var(--app-color-${this.theme}-selected);
                }
            </style>
            <nidoca-ripple class="fullWidth">
                <div
                        class="BUTTON ${this.buttonType}"
                        @click="${()=>{this.clicked()}}"
                >
                    ${this.leadingIcon?A`
                        <nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>`:A``}
                    ${this.leadingIcon||this.buttonType==Bt.TEXT?A``:A`
                                <nidoca-layout-spacer></nidoca-layout-spacer>`}

                    <nidoca-text text="${this.text}" type="${bt.BUTTON}">
                        <slot></slot>
                    </nidoca-text>

                    ${this.buttonType!=Bt.TEXT?A`
                        <nidoca-layout-spacer></nidoca-layout-spacer>`:A``}
                </div>
            </nidoca-ripple>
        `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ht.styles=n`
    :host,
    .fullWidth {
      display: block;
      width: 100%;
    }

    .BUTTON {
      cursor: pointer;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      box-sizing: border-box;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      border-style: solid;
      border-width: var(--border-width);
      height: calc(var(--line-height) * 2);
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `,zt([st({type:it,converter:String}),Wt("design:type",Object)],Ht.prototype,"theme",void 0),zt([st({type:Bt,converter:String}),Wt("design:type",String)],Ht.prototype,"buttonType",void 0),zt([st({type:String}),Wt("design:type",String)],Ht.prototype,"leadingIcon",void 0),zt([st({type:String}),Wt("design:type",String)],Ht.prototype,"text",void 0),Ht=zt([nt("nidoca-button")],Ht);var Ft,Ut=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};!function(t){t.NONE="NONE",t.KEY_LIGHT="KEY_LIGHT",t.AMBIENT_LIGHT="AMBIENT_LIGHT",t.COMBINED="COMBINED"}(Ft||(Ft={}));let Vt=class extends Q{constructor(){super(...arguments),this.shadowType=Ft.KEY_LIGHT}render(){return A` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `}};Vt.styles=n`
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
  `,Ut([st({type:Ft}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Vt.prototype,"shadowType",void 0),Vt=Ut([nt("nidoca-box-shadow")],Vt);class Yt extends Q{}var qt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Gt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Kt=class extends Q{constructor(){super(...arguments),this.autocomplete=!0}render(){return A`
            <form
                    .?autocomplete="${this.autocomplete}"
                    class="container"
            >
                <slot id="slotElement"></slot>
            </form>
        `}getOutputData(){const t=new FormData,e={};for(const i of this.getInputElements(this.slotElement)){const o=i.getOutputData();e[o.key]=o.value,t.append(o.key,o.value)}const i={};return i.jsonObject=e,i.formData=t,i}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(null==t)return[];const e=[],i=t.assignedElements({flatten:!0});for(let t=0;t<i.length;t++){const o=i[t];this.recursiveInputElementSearch(o,e)}return e}recursiveInputElementSearch(t,e){if(t instanceof Yt)e.push(t);else if(t.hasChildNodes()){const i=t.children;for(const t of[].slice.call(i))this.recursiveInputElementSearch(t,e)}}};Kt.styles=n`
    :host {
      display: block;
    }
    .container {
      box-sizing: border-box;
    }
    #slot {
      display: block;
      width: 100%;
    }
  `,qt([st({type:Boolean}),Gt("design:type",Boolean)],Kt.prototype,"autocomplete",void 0),qt([lt("#slotElement"),Gt("design:type",Object)],Kt.prototype,"slotElement",void 0),Kt=qt([nt("nidoca-form")],Kt);const Xt=t=>(...e)=>({_$litDirective$:t,values:e});class Jt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:Zt}=K,Qt=()=>document.createComment(""),te=(t,e,i)=>{var o;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(Qt(),r),o=n.insertBefore(Qt(),r);i=new Zt(e,o,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,a=s!==t;if(a){let e;null===(o=i._$AQ)||void 0===o||o.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==r||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return i},ee=(t,e,i=t)=>(t._$AI(e,i),t),ie={},oe=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const o=t._$AB.nextSibling;for(;i!==o;){const t=i.nextSibling;i.remove(),i=t}},ne=(t,e,i)=>{const o=new Map;for(let n=e;n<=i;n++)o.set(t[n],n);return o},re=Xt(class extends Jt{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let o;void 0===i?i=e:void 0!==e&&(o=e);const n=[],r=[];let s=0;for(const e of t)n[s]=o?o(e,s):s,r[s]=i(e,s),s++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,o]){var n;const r=t._$AH,{values:s,keys:a}=this.dt(e,i,o);if(!Array.isArray(r))return this.at=a,s;const l=null!==(n=this.at)&&void 0!==n?n:this.at=[],c=[];let d,h,p=0,u=r.length-1,f=0,g=s.length-1;for(;p<=u&&f<=g;)if(null===r[p])p++;else if(null===r[u])u--;else if(l[p]===a[f])c[f]=ee(r[p],s[f]),p++,f++;else if(l[u]===a[g])c[g]=ee(r[u],s[g]),u--,g--;else if(l[p]===a[g])c[g]=ee(r[p],s[g]),te(t,c[g+1],r[p]),p++,g--;else if(l[u]===a[f])c[f]=ee(r[u],s[f]),te(t,r[p],r[u]),u--,f++;else if(void 0===d&&(d=ne(a,f,g),h=ne(l,p,u)),d.has(l[p]))if(d.has(l[u])){const e=h.get(a[f]),i=void 0!==e?r[e]:null;if(null===i){const e=te(t,r[p]);ee(e,s[f]),c[f]=e}else c[f]=ee(i,s[f]),te(t,r[p],i),r[e]=null;f++}else oe(r[u]),u--;else oe(r[p]),p++;for(;f<=g;){const e=te(t,c[g+1]);ee(e,s[f]),c[f++]=e}for(;p<=u;){const t=r[p++];null!==t&&oe(t)}return this.at=a,((t,e=ie)=>{t._$AH=e})(t,c),C}}),se={},ae=Xt(class extends Jt{constructor(){super(...arguments),this.nt=se}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return C}else if(this.nt===e)return C;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});var le=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ce=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let de=class extends Yt{constructor(){super(...arguments),this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return A` <style>
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
          border-color: var(--app-color-${this.theme}-selected);
        }

        option {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer border">
        ${this.trailingIcon?A`<nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space-3);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:A``}
        <div class="container">
          <nidoca-text
            style="padding-left:var(--space-3); padding-right:var(--space-3);"
            class="label"
            .type="${bt.CAPTION}"
            text="${this.label}"
          ></nidoca-text>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${ae([this.value,this.options],(()=>A`
                ${re(this.options,(t=>null==t?A` <option></option>`:this.isSelectedOption(t)?A` <option value="${t.key}" selected>${t.value}</option> `:A` <option value="${t.key}">${t.value}</option> `))}
              `))}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?A`<div style="display:flex;flex-direction:column;">
            ${this.infoText?A` <nidoca-text .type="${bt.SUBTITLE1}" text="${this.infoText}"></nidoca-text>`:A``}
            ${this.warningText?A` <nidoca-text
                  style="color:var(--app-color-warning-background)"
                  .type="${bt.SUBTITLE1}"
                  text="${this.warningText}"
                ></nidoca-text>`:A``}
            ${this.errorText?A` <nidoca-text
                  style="color:var(--app-color-error-background)"
                  .type="${bt.SUBTITLE1}"
                  text="${this.errorText}"
                ></nidoca-text>`:A``}
          </div> `:A``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,i=this.selectElement.options.length;e<i;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const i of this.value)if(e=t.key===i,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const i=[];return e&&i.push({key:"",value:""}),Object.keys(t).forEach((e=>{i.push({key:e,value:t[e]})})),i}static stringArrayToOptions(t,e=!0){const i=[];return e&&i.push({key:"",value:""}),t.forEach((t=>{i.push({key:t,value:t})})),i}static toComboboxOptions(t=null,e=null){if(null==t)return[];const i=[];return Object.values(t).forEach((o=>{let n=String(Object.keys(t)[Object.values(t).indexOf(o)]);e&&(n=n.concat(e)),i.push({key:o,value:n})})),i}};de.styles=n`
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

    option {
      padding-left: var(--space-2);
    }

    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-2);
      line-height: var(--line-height-2);
      padding-left: var(--space-2);
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
  `,le([st({type:it,converter:String}),ce("design:type",Object)],de.prototype,"theme",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"trailingIcon",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"label",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"errorText",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"infoText",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"warningText",void 0),le([st(),ce("design:type",Object)],de.prototype,"value",void 0),le([st({type:Array}),ce("design:type",Array)],de.prototype,"options",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"name",void 0),le([st({type:Boolean}),ce("design:type",Boolean)],de.prototype,"required",void 0),le([st({type:Boolean}),ce("design:type",Boolean)],de.prototype,"multiple",void 0),le([st({type:Number}),ce("design:type",Number)],de.prototype,"size",void 0),le([lt("#selectElement"),ce("design:type",Object)],de.prototype,"selectElement",void 0),de=le([nt("nidoca-form-combobox")],de);const he=t=>null!=t?t:I;var pe,ue=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},fe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.COLOR="color",t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url"}(pe||(pe={}));let ge=class extends Yt{constructor(){super(),this.type=pe.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return this.type==pe.HIDDEN?A`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}"/>`:A`
                    <style>
                        .parentContainer,
                        ::slotted(.parentContainer) {
                            color: var(--app-color-${this.theme});
                            background-color: var(--app-color-${this.theme}-background);
                        }

                        .border,
                        ::slotted(.border) {
                            border-color: var(--app-color-${this.theme}-border);
                        }

                        .border:focus-within,
                        ::slotted(.border:focus-within) {
                            border-color: var(--app-color-${this.theme}-selected);
                        }
                    </style>
                    <div class="parentContainer border">
                        ${this.trailingIcon?A`
                                    <nidoca-icon
                                            style="font-size: var(--icon-size-big);padding-left:var(--space-2);padding-right:var(--space-2);"
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
                                    size="${he(this.size)}"
                                    minlength="${he(this.minlength)}"
                                    maxlength="${he(this.maxlength)}"
                                    pattern="${he(this.pattern)}"
                                    min="${he(this.min)}"
                                    max="${he(this.max)}"
                                    step="${he(this.step)}"
                                    ?required="${this.required}"
                                    ?disabled="${this.disabled}"
                                    ?checked="${this.checked}"
                            />
                        </div>
                    </div>

                    ${this.infoText||this.warningText||this.errorText?A`
                                <div style="display:flex;flex-direction:column;">
                                    ${this.infoText?A`
                                                <nidoca-text .type="${bt.SUBTITLE1}"
                                                             text="${this.infoText}"></nidoca-text>`:A``}
                                    ${this.warningText?A`
                                                <nidoca-text-error
                                                        style="color:var(--app-color-warning-background)"
                                                        .type="${bt.SUBTITLE1}"
                                                        text="${this.warningText}"
                                                ></nidoca-text-error>`:A``}
                                    ${this.errorText?A`
                                                <nidoca-text-error
                                                        style="color:var(--app-color-error-background)"
                                                        .type="${bt.SUBTITLE1}"
                                                        text="${this.errorText}"
                                                ></nidoca-text-error>`:A``}
                                </div>
                            `:A``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};ge.styles=n`
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

    .border {
      border-bottom-style: solid;
      border-width: var(--border-width);
    }

    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      background: inherit;
      color: inherit;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    input:focus::placeholder {
      color: transparent;
    }
  `,ue([st({type:pe,converter:String}),fe("design:type",String)],ge.prototype,"type",void 0),ue([st({type:String}),fe("design:type",String)],ge.prototype,"label",void 0),ue([st({type:String}),fe("design:type",String)],ge.prototype,"placeholder",void 0),ue([st({type:String}),fe("design:type",String)],ge.prototype,"trailingIcon",void 0),ue([st({type:String}),fe("design:type",String)],ge.prototype,"errorText",void 0),ue([st({type:String}),fe("design:type",String)],ge.prototype,"infoText",void 0),ue([st({type:String}),fe("design:type",String)],ge.prototype,"warningText",void 0),ue([st({type:String}),fe("design:type",String)],ge.prototype,"name",void 0),ue([st(),fe("design:type",String)],ge.prototype,"value",void 0),ue([st({type:Boolean}),fe("design:type",Boolean)],ge.prototype,"required",void 0),ue([st({type:Boolean}),fe("design:type",Boolean)],ge.prototype,"disabled",void 0),ue([st({type:Boolean}),fe("design:type",Boolean)],ge.prototype,"checked",void 0),ue([st({type:Number}),fe("design:type",Object)],ge.prototype,"maxlength",void 0),ue([st({type:Number}),fe("design:type",Object)],ge.prototype,"minlength",void 0),ue([st({type:Number}),fe("design:type",Object)],ge.prototype,"min",void 0),ue([st({type:Number}),fe("design:type",Object)],ge.prototype,"max",void 0),ue([st({type:String}),fe("design:type",Object)],ge.prototype,"step",void 0),ue([st({type:Number}),fe("design:type",Object)],ge.prototype,"size",void 0),ue([st({type:String}),fe("design:type",Object)],ge.prototype,"pattern",void 0),ue([lt("#inputElement"),fe("design:type",Object)],ge.prototype,"inputElement",void 0),ue([st({type:it,converter:String}),fe("design:type",String)],ge.prototype,"theme",void 0),ge=ue([nt("nidoca-form-text"),fe("design:paramtypes",[])],ge);var me=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ye=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let be=class extends Yt{constructor(){super(...arguments),this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return A` <style>
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
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="parentContainer border">
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
              ${this.infoText?A` <nidoca-text .type="${bt.SUBTITLE1}" text="${this.infoText}"></nidoca-text>`:A``}
              ${this.warningText?A` <nidoca-text
                    style="color:var(--app-color-warning-background)"
                    .type="${bt.SUBTITLE1}"
                    text="${this.warningText}"
                  ></nidoca-text>`:A``}
              ${this.errorText?A` <nidoca-text
                    style="color:var(--app-color-error-background)"
                    .type="${bt.SUBTITLE1}"
                    text="${this.errorText}"
                  ></nidoca-text>`:A``}
            </div>
          `:A``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};be.styles=n`
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
      padding-left: var(--space-2);
      padding-right: var(--space-2);
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
  `,me([st({type:it,converter:String}),ye("design:type",Object)],be.prototype,"theme",void 0),me([st({type:String}),ye("design:type",String)],be.prototype,"infoText",void 0),me([st({type:String}),ye("design:type",String)],be.prototype,"warningText",void 0),me([st({type:String}),ye("design:type",String)],be.prototype,"errorText",void 0),me([st({type:String}),ye("design:type",String)],be.prototype,"name",void 0),me([st(),ye("design:type",String)],be.prototype,"value",void 0),me([st({type:String}),ye("design:type",String)],be.prototype,"label",void 0),me([st({type:Boolean}),ye("design:type",Boolean)],be.prototype,"required",void 0),me([st({type:String}),ye("design:type",String)],be.prototype,"placeholder",void 0),me([st({type:Boolean}),ye("design:type",Boolean)],be.prototype,"disabled",void 0),me([st({type:Number}),ye("design:type",Number)],be.prototype,"rows",void 0),me([lt("#inputElement"),ye("design:type",Object)],be.prototype,"inputElement",void 0),be=me([nt("nidoca-form-textarea")],be);var xe,ve=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},we=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.DATE="date",t.DATETIME_LOCAL="datetime-local",t.MONTH="month",t.TIME="time",t.WEEK="week"}(xe||(xe={}));let _e=class extends Yt{constructor(){super(),this.trailingIcon="",this.type=xe.DATE,this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.errorText="",this.infoText="",this.warningText="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A` <style>
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
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="parentContainer border">
        ${this.trailingIcon?A` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space-3);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:A``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
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
      ${this.infoText||this.warningText||this.errorText?A`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?A` <nidoca-text .type="${bt.SUBTITLE1}" text="${this.infoText}"></nidoca-text>`:A``}
              ${this.warningText?A` <nidoca-text
                    style="color:var(--app-color-warning-background)"
                    .type="${bt.SUBTITLE1}"
                    text="${this.warningText}"
                  ></nidoca-text>`:A``}
              ${this.errorText?A` <nidoca-text
                    style="color:var(--app-color-error-background)"
                    .type="${bt.SUBTITLE1}"
                    text="${this.errorText}"
                  ></nidoca-text>`:A``}
            </div>
          `:A``}`}getOutputData(){var t;return{key:this.name,value:null===(t=this.inputElement)||void 0===t?void 0:t.value}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};_e.styles=n`
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
      padding-left: var(--space-3);
      padding-right: var(--space-3);
    }
    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `,ve([st({type:String}),we("design:type",String)],_e.prototype,"trailingIcon",void 0),ve([st(),we("design:type",String)],_e.prototype,"type",void 0),ve([st({type:String}),we("design:type",String)],_e.prototype,"name",void 0),ve([st({type:String}),we("design:type",String)],_e.prototype,"value",void 0),ve([st({type:String}),we("design:type",String)],_e.prototype,"label",void 0),ve([st({type:Boolean}),we("design:type",Boolean)],_e.prototype,"required",void 0),ve([st({type:String}),we("design:type",String)],_e.prototype,"placeholder",void 0),ve([st({type:Boolean}),we("design:type",Boolean)],_e.prototype,"disabled",void 0),ve([st({type:String}),we("design:type",String)],_e.prototype,"errorText",void 0),ve([st({type:String}),we("design:type",String)],_e.prototype,"infoText",void 0),ve([st({type:String}),we("design:type",String)],_e.prototype,"warningText",void 0),ve([lt("#inputElement"),we("design:type",Object)],_e.prototype,"inputElement",void 0),ve([st({type:it,converter:String}),we("design:type",String)],_e.prototype,"theme",void 0),_e=ve([nt("nidoca-form-date"),we("design:paramtypes",[])],_e);var Se=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ke=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Re=class extends Yt{constructor(){super(...arguments),this.theme=it.PRIMARY}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return A`
      <nidoca-box theme="${he(this.theme)}">
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
    `}upload(){var t;null===(t=this.inputElement)||void 0===t||t.click()}};Re.styles=n`
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
    
  `,Se([st({type:it,converter:String}),ke("design:type",Object)],Re.prototype,"theme",void 0),Se([lt("#inputElement"),ke("design:type",Object)],Re.prototype,"inputElement",void 0),Re=Se([nt("nidoca-form-upload")],Re);var Oe=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},$e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ee=class extends Yt{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=it.PRIMARY,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A`
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

                ${this.infoText.length>0?A`
                            <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:A``}

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

            ${this.warningText?A`
                <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:A``}
            ${this.errorText?A`
                <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:A``}
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
  `,Oe([st({type:String}),$e("design:type",String)],Ee.prototype,"name",void 0),Oe([st({type:String}),$e("design:type",String)],Ee.prototype,"label",void 0),Oe([st({type:String}),$e("design:type",String)],Ee.prototype,"infoText",void 0),Oe([st({type:String}),$e("design:type",String)],Ee.prototype,"errorText",void 0),Oe([st({type:String}),$e("design:type",String)],Ee.prototype,"warningText",void 0),Oe([st({type:Boolean}),$e("design:type",Boolean)],Ee.prototype,"required",void 0),Oe([st({type:Boolean}),$e("design:type",Boolean)],Ee.prototype,"disabled",void 0),Oe([st({type:Boolean}),$e("design:type",Boolean)],Ee.prototype,"checked",void 0),Oe([st({type:String}),$e("design:type",String)],Ee.prototype,"theme",void 0),Oe([lt("#inputElement"),$e("design:type",Object)],Ee.prototype,"inputElement",void 0),Ee=Oe([nt("nidoca-form-switch"),$e("design:paramtypes",[])],Ee);var Te=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Pe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Me=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return A`
            <nidoca-box theme="${this.theme}">
                <nidoca-form id="form">
                    <nidoca-text class="paddingBottom" .type="${bt.H1}">${this.label}</nidoca-text>

                    <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                      textType="${pe.EMAIL}"
                                      label="${this.emailLabel}"
                                      name="email"
                                      trailingIcon="email"
                                      required
                                      minLength="4"
                                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                    ></nidoca-form-text>

                    <nidoca-button theme="${it.getOposite(this.theme)}" class="paddingBottom"
                                   @nidoca-event-button-clicked="${()=>this.register()}">${this.buttonLabel}
                    </nidoca-button>

                    <slot></slot>

                </nidoca-form>
            </nidoca-box>
        `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Me.styles=n`
  
  :host {
  display:block;
  }
  
  .paddingBottom {
  padding-bottom: var(--space-3);
}
  
  `,Te([st({type:it,converter:String}),Pe("design:type",Object)],Me.prototype,"theme",void 0),Te([st({type:String,converter:String}),Pe("design:type",String)],Me.prototype,"label",void 0),Te([st({type:String,converter:String}),Pe("design:type",String)],Me.prototype,"emailLabel",void 0),Te([st({type:String,converter:String}),Pe("design:type",String)],Me.prototype,"buttonLabel",void 0),Te([lt("#form"),Pe("design:type",Object)],Me.prototype,"formComponent",void 0),Me=Te([nt("nidoca-form-newsletter")],Me);var De=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ae=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ce=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return A`
            <nidoca-box theme="${this.theme}">
                <nidoca-form id="form">
                    <nidoca-text class="paddingBottom" .type="${bt.H1}">${this.label}</nidoca-text>

                    <nidoca-form-text
                            theme="${he(this.theme)}"
                            class="paddingBottom"
                            textType="${pe.EMAIL}"
                            label="${this.emailLabel}"
                            name="email"
                            trailingIcon="email"
                            required
                            minLength="4"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                    ></nidoca-form-text>

                    <nidoca-button
                            theme="${it.getOposite(this.theme)}"
                            class="paddingBottom"
                            @nidoca-event-button-clicked="${()=>this.register()}"
                    >${this.buttonLabel}
                    </nidoca-button>

                    <slot></slot>
                </nidoca-form>
            </nidoca-box>
        `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Ce.styles=n`
    :host {
      display: block;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,De([st({type:it,converter:String}),Ae("design:type",Object)],Ce.prototype,"theme",void 0),De([st({type:String,converter:String}),Ae("design:type",String)],Ce.prototype,"label",void 0),De([st({type:String,converter:String}),Ae("design:type",String)],Ce.prototype,"emailLabel",void 0),De([st({type:String,converter:String}),Ae("design:type",String)],Ce.prototype,"buttonLabel",void 0),De([lt("#form"),Ae("design:type",Object)],Ce.prototype,"formComponent",void 0),Ce=De([nt("nidoca-form-reset-password")],Ce);var Ie=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},je=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Le=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return A`
            <nidoca-box theme="${this.theme}">
                <nidoca-form id="form">
                    <nidoca-text class="paddingBottom" .type="${bt.H1}">${this.label}</nidoca-text>

                    <nidoca-form-text
                            id="oldPassword"
                            theme="${he(this.theme)}"
                            class="paddingBottom"
                            textType="${pe.PASSWORD}"
                            label="${this.oldPasswordLabel}"
                            name="oldPassword"
                            required
                    ></nidoca-form-text>

                    <nidoca-form-text
                            id="newPassword"
                            theme="${he(this.theme)}"
                            class="paddingBottom"
                            textType="${pe.PASSWORD}"
                            label="${this.newPasswordLabel}"
                            name="newPassword"
                            required
                    ></nidoca-form-text>

                    <nidoca-form-text
                            id="repeatNewPassword"
                            theme="${he(this.theme)}"
                            class="paddingBottom"
                            textType="${pe.PASSWORD}"
                            label="${this.repeatNewPasswordLabel}"
                            name="repeatNewPassword"
                            required
                    ></nidoca-form-text>

                    <nidoca-button
                            theme="${it.getOposite(this.theme)}"
                            class="paddingBottom"
                            @nidoca-event-button-clicked="${()=>this.changePassword()}"
                    >${this.buttonLabel}
                    </nidoca-button>

                    <slot></slot>
                </nidoca-form>
                ${this.showErrorMessageSamePassword?A`
                            <nidoca-text
                                    type="${bt.CAPTION}"
                                    style="color:var(--app-color-error-background)"
                                    text="${this.errorMessageSamePasswordLabel}"
                            ></nidoca-text>`:A``}
                ${this.showErrorMessagePasswordDiff?A`
                            <nidoca-text
                                    type="${bt.CAPTION}"
                                    style="color:var(--app-color-error-background)"
                                    text="${this.errorMessagePasswordDiffLabel}"
                            ></nidoca-text>`:A``}
            </nidoca-box>

        `}changePassword(){var t,e,i,o,n;(null===(t=this.formComponent)||void 0===t?void 0:t.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(e=this.newPasswordInputField)||void 0===e?void 0:e.getOutputData().value)!=(null===(i=this.repeatNewPasswordInputField)||void 0===i?void 0:i.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(o=this.oldPasswordInputField)||void 0===o?void 0:o.getOutputData().value)==(null===(n=this.newPasswordInputField)||void 0===n?void 0:n.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};Le.styles=n`
    :host {
      display: block;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Ie([st({type:it,converter:String}),je("design:type",Object)],Le.prototype,"theme",void 0),Ie([st({type:String,converter:String}),je("design:type",String)],Le.prototype,"label",void 0),Ie([st({type:String,converter:String}),je("design:type",String)],Le.prototype,"oldPasswordLabel",void 0),Ie([st({type:String,converter:String}),je("design:type",String)],Le.prototype,"newPasswordLabel",void 0),Ie([st({type:String,converter:String}),je("design:type",String)],Le.prototype,"repeatNewPasswordLabel",void 0),Ie([st({type:String,converter:String}),je("design:type",String)],Le.prototype,"buttonLabel",void 0),Ie([lt("#form"),je("design:type",Object)],Le.prototype,"formComponent",void 0),Ie([lt("#oldPassword"),je("design:type",Object)],Le.prototype,"oldPasswordInputField",void 0),Ie([lt("#newPassword"),je("design:type",Object)],Le.prototype,"newPasswordInputField",void 0),Ie([lt("#repeatNewPassword"),je("design:type",Object)],Le.prototype,"repeatNewPasswordInputField",void 0),Ie([st(),je("design:type",String)],Le.prototype,"errorMessageSamePasswordLabel",void 0),Ie([st(),je("design:type",String)],Le.prototype,"errorMessagePasswordDiffLabel",void 0),Le=Ie([nt("nidoca-form-change-password")],Le);var Ne=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Be=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ze=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return A`
            <nidoca-box theme="${this.theme}">
                <nidoca-form id="form">
                    <nidoca-text class="paddingBottom" .type="${bt.H1}">${this.label}</nidoca-text>

                    <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                      textType="${pe.EMAIL}"
                                      label="${this.emailLabel}"
                                      name="email"
                                      trailingIcon="account_circle"
                                      required
                                      minLength="4"
                                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                    ></nidoca-form-text>

                    <nidoca-form-text theme="${this.theme}" class="paddingBottom"
                                      textType="${pe.PASSWORD}"
                                      label="${this.passwordLabel}"
                                      name="password"
                                      trailingIcon="vpn_key"
                                      required
                                      minLength="8"
                    ></nidoca-form-text>

                    <nidoca-button theme="${it.getOposite(this.theme)}" class="paddingBottom"
                                   @nidoca-event-button-clicked="${()=>this.register()}">${this.buttonLabel}
                    </nidoca-button>

                    <slot></slot>

                </nidoca-form>
            </nidoca-box>

        `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};ze.styles=n`
  
  :host {
  display:block;
  }
  
  .paddingBottom {
  padding-bottom: var(--space-3);
}
  
  `,Ne([st({type:it,converter:String}),Be("design:type",Object)],ze.prototype,"theme",void 0),Ne([st({type:String,converter:String}),Be("design:type",String)],ze.prototype,"label",void 0),Ne([st({type:String,converter:String}),Be("design:type",String)],ze.prototype,"emailLabel",void 0),Ne([st({type:String,converter:String}),Be("design:type",String)],ze.prototype,"passwordLabel",void 0),Ne([st({type:String,converter:String}),Be("design:type",String)],ze.prototype,"buttonLabel",void 0),Ne([lt("#form"),Be("design:type",Object)],ze.prototype,"formComponent",void 0),ze=Ne([nt("nidoca-form-register")],ze);var We=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let He=class extends Q{constructor(){super(...arguments),this.code=""}render(){return A``}};He.styles=n``,We([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],He.prototype,"code",void 0),He=We([nt("nidoca-upload")],He);var Fe=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ue=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ve=class extends Q{constructor(){super(),this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A`
            <style>
                hr {
                    border-color: var(--app-color-${this.theme}-border);
                    border-bottom-style: solid;
                    border-width: thin;
                }
            </style>
            <hr/>


        `}};Ve.styles=n`
    :host,
    ::slotted(:host) {
    padding-top:var(--space-2);
    padding-bottom:var(--space-2);
      
      
    }
  `,Fe([st({type:it,converter:String}),Ue("design:type",String)],Ve.prototype,"theme",void 0),Ve=Fe([nt("nidoca-hr"),Ue("design:paramtypes",[])],Ve);var Ye=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let qe=class extends Q{constructor(){super(...arguments),this.text=""}render(){return A`
      <div class="container">
        <nidoca-layout-spacer left="10px"></nidoca-layout-spacer>
        ${this.text?A`<nidoca-text .type="${pe.H5}">${this.text}</nidoca-text>`:A``}
        <slot></slot>
      </div>
    `}};qe.styles=n`
    .container {
      display: flex;
    }
  `,Ye([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],qe.prototype,"text",void 0),qe=Ye([nt("nidoca-menu-area")],qe);var Ge,Ke=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.ITEM="item",t.SECTION="section"}(Ge||(Ge={}));let Je=class extends Q{constructor(){super(...arguments),this.text="",this.icon="",this.type=Ge.ITEM}render(){return A`
      <div class="container ${this.type}">
        ${this.icon?A` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:A` <nidoca-layout-spacer left="10px" right="36px"></nidoca-layout-spacer>`}
        ${this.text?A`<nidoca-text
              .type="${this.type==Ge.ITEM?pe.SUBTITLE1:pe.CAPTION}"
              >${this.text}</nidoca-text
            >`:A``}
      </div>
    `}};Je.styles=n`
    .container {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
  `,Ke([st({type:String}),Xe("design:type",String)],Je.prototype,"text",void 0),Ke([st({type:String}),Xe("design:type",String)],Je.prototype,"icon",void 0),Ke([st({type:String}),Xe("design:type",String)],Je.prototype,"type",void 0),Je=Ke([nt("nidoca-menu-item")],Je);var Ze=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Qe=class extends Q{render(){return A`
            ${it.getStyle(this.theme)}
            <slot></slot>`}};Qe.styles=n`
    :host,
    slot {
      display: block;
    }

    slot {
      padding-left: var(--space-4);
      padding-right: var(--space-4);
    }
  `,Ze([st({type:it,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Qe.prototype,"theme",void 0),Qe=Ze([nt("nidoca-menu")],Qe);var ti=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ei=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ii=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return A`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,i,o,n,r){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(i).concat(";").concat("right:").concat(o).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(r).concat(";")}};ii.styles=n`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,ti([st({type:String}),ei("design:type",String)],ii.prototype,"height",void 0),ti([st({type:String}),ei("design:type",String)],ii.prototype,"width",void 0),ti([st({type:String}),ei("design:type",String)],ii.prototype,"left",void 0),ti([st({type:String}),ei("design:type",String)],ii.prototype,"top",void 0),ti([st({type:String}),ei("design:type",String)],ii.prototype,"right",void 0),ti([st({type:String}),ei("design:type",String)],ii.prototype,"bottom",void 0),ii=ti([nt("nidoca-layout-floating")],ii);var oi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ni=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ri=class extends Q{constructor(){super(...arguments),this.width="",this.height="",this.minWidth="",this.minHeight="",this.contentWidth="",this.contentHeight=""}render(){return A`
            ${it.getStyle(this.theme)}
            <div class="container theme">
                <div class="container"
                     style="">
                    <slot></slot>
                </div>
            </div>
        `}};ri.styles=n`
    :host {
      display: block;
    }
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `,oi([st({type:String}),ni("design:type",String)],ri.prototype,"width",void 0),oi([st({type:String}),ni("design:type",String)],ri.prototype,"height",void 0),oi([st({type:String}),ni("design:type",String)],ri.prototype,"minWidth",void 0),oi([st({type:String}),ni("design:type",String)],ri.prototype,"minHeight",void 0),oi([st({type:String}),ni("design:type",String)],ri.prototype,"contentWidth",void 0),oi([st({type:String}),ni("design:type",String)],ri.prototype,"contentHeight",void 0),oi([st({type:it,converter:String}),ni("design:type",Object)],ri.prototype,"theme",void 0),ri=oi([nt("nidoca-container")],ri);var si=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let li=class extends Q{constructor(){super(),this.hideSidebox=!0,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A` <style>
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
      ${this.hideSidebox?A``:A` <slot class="sidebox" name="sidebox"></slot>`}`}};li.styles=n`
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

    @media only screen and (min-width: ${ot.TABLET.minWidth}px) and (max-width: ${ot.TABLET.maxWidth}px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: ${ot.MOBILE.maxWidth}px) {
      .sidebox {
        width: 100%;
      }
    }
  `,si([st({type:it,converter:String}),ai("design:type",String)],li.prototype,"theme",void 0),si([st({type:Boolean,converter:String}),ai("design:type",Boolean)],li.prototype,"hideSidebox",void 0),li=si([nt("nidoca-split-screen"),ai("design:paramtypes",[])],li);var ci=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},di=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let hi=class extends Q{constructor(){super(),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A`
            <style>
                :hover {
                    background-color: var(--app-color-${this.theme}-hover);
                }
            </style>
            <i
                    class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
                    title="${this.primaryText}"
                    @click="${this.clicked}"
            >${this.icon}</i
            >
        `}clicked(){return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};hi.styles=n`
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
      color: var(--app-color-surface-background-dark);
    }
  `,ci([st({type:String}),di("design:type",String)],hi.prototype,"icon",void 0),ci([st({type:Boolean}),di("design:type",Boolean)],hi.prototype,"clickable",void 0),ci([st({type:Boolean}),di("design:type",Boolean)],hi.prototype,"deactivated",void 0),ci([st({type:String}),di("design:type",String)],hi.prototype,"primaryText",void 0),ci([st({type:it,converter:String}),di("design:type",String)],hi.prototype,"theme",void 0),hi=ci([nt("nidoca-icon"),di("design:paramtypes",[])],hi);var pi,ui=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},fi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class gi{}gi.NONE="NONE",gi.DEFAULT_SHADOW="DEFAULT_SHADOW",gi.SHADOW_1="SHADOW_1",gi.SHADOW_2="SHADOW_2",gi.SHADOW_3="SHADOW_3";let mi=class extends Q{constructor(){super(...arguments),this.icon="",this.theme=it.PRIMARY,this.shadowType=gi.DEFAULT_SHADOW,this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-4)"}render(){return A`
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
    `}clicked(){return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};mi.styles=n`
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
  `,ui([st({type:String}),fi("design:type",String)],mi.prototype,"icon",void 0),ui([st({type:Object}),fi("design:type","function"==typeof(pi=void 0!==it&&it)?pi:Object)],mi.prototype,"theme",void 0),ui([st({type:Object}),fi("design:type",gi)],mi.prototype,"shadowType",void 0),ui([st({type:Boolean}),fi("design:type",Boolean)],mi.prototype,"clickable",void 0),ui([st({type:Boolean}),fi("design:type",Boolean)],mi.prototype,"deactivated",void 0),ui([st({type:String}),fi("design:type",String)],mi.prototype,"cssStyle",void 0),mi=ui([nt("nidoca-icon-extended")],mi);var yi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let bi=class extends Q{render(){return A`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),i=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${i}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};bi.styles=n`
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
  `,yi([lt("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],bi.prototype,"rippleContainerElement",void 0),bi=yi([nt("nidoca-ripple")],bi);var xi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},vi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let wi=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%"}render(){return A`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};wi.styles=n`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,xi([st({type:String}),vi("design:type",String)],wi.prototype,"src",void 0),xi([st({type:String}),vi("design:type",String)],wi.prototype,"width",void 0),xi([st({type:String}),vi("design:type",String)],wi.prototype,"height",void 0),wi=xi([nt("nidoca-img")],wi);let _i=class extends wi{render(){return A`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};_i.styles=n`
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
  `,_i=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-img-round")],_i);var Si=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let ki=class extends Q{constructor(){super(...arguments),this.src=""}render(){return A`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};ki.styles=n``,Si([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],ki.prototype,"src",void 0),ki=Si([nt("nidoca-movie")],ki);var Ri=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Oi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $i=class extends Q{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return A`
      <nidoca-form-text
        .theme="${this.theme}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${pe.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};$i.styles=n`
    :host {
      display: block;
      width: 100%;
    }
  `,Ri([st({type:it,converter:String}),Oi("design:type",Object)],$i.prototype,"theme",void 0),Ri([st({type:String}),Oi("design:type",String)],$i.prototype,"label",void 0),Ri([st({type:String}),Oi("design:type",String)],$i.prototype,"placeholder",void 0),Ri([st({type:String}),Oi("design:type",String)],$i.prototype,"name",void 0),Ri([st({type:Number}),Oi("design:type",Number)],$i.prototype,"min",void 0),Ri([st({type:Number}),Oi("design:type",Number)],$i.prototype,"max",void 0),Ri([st({type:String}),Oi("design:type",String)],$i.prototype,"errorText",void 0),Ri([lt("#inputfield"),Oi("design:type",Object)],$i.prototype,"inputfield",void 0),$i=Ri([nt("nidoca-form-captcha")],$i);var Ei,Ti=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Pi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}(Ei||(Ei={}));let Mi=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType=Ei.SELF}render(){return A` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `}};Mi.styles=n`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,Ti([st({type:String}),Pi("design:type",String)],Mi.prototype,"text",void 0),Ti([st({type:String}),Pi("design:type",String)],Mi.prototype,"href",void 0),Ti([st({type:String}),Pi("design:type",String)],Mi.prototype,"targetType",void 0),Mi=Ti([nt("nidoca-link")],Mi);var Di=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ci=class extends Q{constructor(){super(),this.multiSelect=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}update(t){super.update(t),null!=t.get("selectionMode")&&(this.multiSelect||(this.selected=!1))}render(){return A`
      <style>
        .selected {
          background-color: var(--app-color-${this.theme}-hover);
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
          ${this.primaryText?A`
                                <nidoca-text-body class="item"
                                >${this.primaryText}
                                </nidoca-text
                                >`:A``}
          <slot></slot>
          ${this.secondaryText?A` <nidoca-text-caption class="item">${this.secondaryText} </nidoca-text-caption>`:A``}
          <slot name="secondary"></slot>
        </div>
        <slot name="meta" class="item"></slot>
      </div>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",console.log(t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};Ci.styles=n`
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
  `,Di([st({type:it,converter:String}),Ai("design:type",Object)],Ci.prototype,"theme",void 0),Di([st({type:Boolean}),Ai("design:type",Boolean)],Ci.prototype,"multiSelect",void 0),Di([st({type:Boolean}),Ai("design:type",Boolean)],Ci.prototype,"selected",void 0),Di([st({type:String}),Ai("design:type",String)],Ci.prototype,"primaryText",void 0),Di([st({type:String}),Ai("design:type",String)],Ci.prototype,"secondaryText",void 0),Ci=Di([nt("nidoca-list-item"),Ai("design:paramtypes",[])],Ci);var Ii=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ji=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Li=class extends Q{constructor(){super(),this.multiSelect=!1,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.multiSelect=this.multiSelect}))}))}render(){return A`
            <style>

                slot {
                    border-color: var(--app-color-${this.theme}-border);
                    border-top-style: solid;
                    border-width: thin;
                }

                ::slotted(nidoca-list-section) {
                    color: var(--app-color-${this.theme});
                    background-color: var(--app-color-${this.theme}-background-optional);
                }

                ::slotted(nidoca-list-item) {
                    color: var(--app-color-${this.theme});
                    background-color: var(--app-color-${this.theme}-background);
                }

                ::slotted(nidoca-list-item), ::slotted(nidoca-list-section) {
                    border-color: var(--app-color-${this.theme}-border);
                    border-bottom-style: solid;
                    border-width: thin;
                }

                ::slotted(nidoca-list-item:hover) {
                    background-color: var(--app-color-background-selected);
                }
            </style>
            <slot
                    @nidoca-event-list-item-click="${t=>{this.multiSelect||this.unselectAll(),t.detail.selected=!0}}"

                    @nidoca-event-list-item-unselect="${()=>{this.multiSelect=0===this.getSelectedItems().length}}"
                    class="slotList"
                    id="slotElement"
            ></slot> `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof Ci&&t.push(o)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof Ci&&o.selected&&t.push(o)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let i=0;for(let o=0;o<e.length;o++){const n=e[o];n instanceof Ci&&(n.selected&&t.push(i),i++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){console.log("sdojsdoijsoidjsdioj "+this.getItems().length),this.getItems().forEach((t=>{t.selected=!1}))}};Li.styles=n`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Ii([st({type:it,converter:String}),ji("design:type",Object)],Li.prototype,"theme",void 0),Ii([st({type:Boolean}),ji("design:type",Boolean)],Li.prototype,"multiSelect",void 0),Ii([lt("#slotElement"),ji("design:type",Object)],Li.prototype,"slotElement",void 0),Li=Ii([nt("nidoca-list"),ji("design:paramtypes",[])],Li);var Ni=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Bi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let zi=class extends Q{constructor(){super(),this.text="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A`
      <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-caption>
    `}};zi.styles=n`
  :host {
 display:block;
 padding-left: var(--space-2);

  `,Ni([st({type:it,converter:String}),Bi("design:type",Object)],zi.prototype,"theme",void 0),Ni([st({type:String}),Bi("design:type",String)],zi.prototype,"text",void 0),zi=Ni([nt("nidoca-list-section"),Bi("design:paramtypes",[])],zi);var Wi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Hi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fi=class extends Q{constructor(){super(),this.prominent=!1,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A`
            ${it.getStyle(this.theme)}
            <div class="bar">
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
            ${this.prominent?A`
                <slot class="prominent" name="prominent"></slot>`:A``}
        `}};Fi.styles=n`
    :host {
      width: 100%;
      position: relativ;
      display: block;
      height: min-content;
    }

    .bar {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      align-content: space-around;
    }

    slot {
      display: flex;
      align-items: center;
    }

    .prominent {
      flex-basis: 100%;
      flex-grow: 3;
    }
  `,Wi([st({type:it,converter:String}),Hi("design:type",String)],Fi.prototype,"theme",void 0),Wi([st({type:Boolean}),Hi("design:type",Boolean)],Fi.prototype,"prominent",void 0),Fi=Wi([nt("nidoca-top-app-bar"),Hi("design:paramtypes",[])],Fi);var Ui=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Vi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Yi=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new hi],["row 2",new hi]]}render(){return A`
      <div>
        <table>
          <thead>
            ${ae([this.headers],(()=>A` ${re(this.headers,(t=>A` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${ae([this.rows],(()=>A`
                  ${re(this.rows,(t=>A`
                        <tr>
                          ${re(t,(t=>A` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Yi.styles=n`
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
  `,Ui([st({type:Array}),Vi("design:type",Array)],Yi.prototype,"headers",void 0),Ui([st({type:Array}),Vi("design:type",Array)],Yi.prototype,"rows",void 0),Yi=Ui([nt("nidoca-table")],Yi);var qi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Gi=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?A`<slot></slot>`:A``}};Gi.styles=n``,qi([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Gi.prototype,"selected",void 0),Gi=qi([nt("nidoca-tab-content")],Gi);var Ki,Xi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ji=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Zi=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=it.PRIMARY}render(){return A`
      <style>
        :host(.SELECTED) {
          border-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?A` <nidoca-text .type="${bt.OVERLINE}" text="${this.text}"></nidoca-text> `:A``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Zi.styles=n`
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
  `,Xi([st({type:Boolean}),Ji("design:type",Boolean)],Zi.prototype,"selected",void 0),Xi([st({type:String}),Ji("design:type",String)],Zi.prototype,"text",void 0),Xi([st({type:String}),Ji("design:type","function"==typeof(Ki=void 0!==it&&it)?Ki:Object)],Zi.prototype,"theme",void 0),Zi=Xi([nt("nidoca-tab")],Zi);var Qi,to=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},eo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let io=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.tabIndex=0}render(){return A`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,i=t[this.tabIndex];for(let o=0;o<t.length;o++){const n=t[o];n instanceof Zi&&(n.theme=this.theme,n.style.width=String(e).concat("%"),n==i?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof Gi&&(this.tabIndex==t?o.selected=!0:o.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];if(o instanceof Zi&&o==t){this.tabIndex=i;break}}}}};io.styles=n`
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
  `,to([lt("#tabSlot"),eo("design:type",Object)],io.prototype,"tabSlot",void 0),to([lt("#tabContentSlot"),eo("design:type",Object)],io.prototype,"tabContentSlot",void 0),to([st({type:String}),eo("design:type","function"==typeof(Qi=void 0!==it&&it)?Qi:Object)],io.prototype,"theme",void 0),to([st({type:Number}),eo("design:type",Number)],io.prototype,"tabIndex",void 0),io=to([nt("nidoca-tabs")],io);var oo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},no=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ro=class extends Q{constructor(){super(),this.navigationClosed=!1,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false")}updated(t){super.updated(t)}render(){return A`
      <slot id="sidebar" class="${this.navigationClosed?"menuClosed":""}" name="sidebar"></slot>

      <div class="right">
        <nidoca-top-app-bar
          id="header"
          class="${this.navigationClosed?"menuClosed":""}"
          .prominent="${this.prominent}"
          theme="${it.PRIMARY}"
        >
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

        <slot id="content" class="${this.navigationClosed?"menuClosed":""}" name="content"></slot>
      </div>
    `}};ro.styles=n`
    :host {
      display: flex;
      flex-direction: row;
    }

    .slotHeader {
      display: flex;
      align-items: center;
    }

    #header {
    }

    .right {
      width: 100%;
    }

    #content {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: var(--app-color-background);
      background-color: var(--app-color-background-background);
    }

    #content.menuClosed {
    }

    #sidebar {
      display: block;
      color: var(--app-color-primary);
      background-color: var(--app-color-primary-background);
      min-height: 100%;
      max-height: 100%;
    }

    #sidebar.menuClosed {
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
      }
    }
  `,oo([st({type:Boolean}),no("design:type",Boolean)],ro.prototype,"navigationClosed",void 0),oo([st({type:Boolean}),no("design:type",Boolean)],ro.prototype,"prominent",void 0),oo([lt("#header"),no("design:type",Object)],ro.prototype,"headerElement",void 0),oo([lt("#sidebar"),no("design:type",Object)],ro.prototype,"sidebarElement",void 0),oo([lt("#content"),no("design:type",Object)],ro.prototype,"contentElement",void 0),ro=oo([nt("nidoca-template"),no("design:paramtypes",[])],ro);let so=class extends wt{render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-caption-${this.theme});
        }
      </style>
      ${super.render()}`}};so.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-caption);
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,so=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-button")],so);let ao=class extends wt{render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-caption-${this.theme});
        }
      </style>
      ${super.render()}`}};ao.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-caption);
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,ao=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-overline")],ao);let lo=class extends wt{render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-${this.theme});
        }
      </style>
      ${super.render()}`}};lo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size);
      line-height: 1.5;
      font-weight: 400;
    }
  `,lo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-body")],lo);let co=class extends wt{render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-caption-${this.theme});
        }
      </style>
      ${super.render()}`}};co.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-caption);
      line-height: 1;
      font-weight: 400;
    }
  `,co=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-caption")],co);let ho=class extends wt{render(){return A`<style>
        :host,
        slot {
          color: var(--app-color-error-${this.theme});
        }</style
      >${super.render()}`}};ho=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-error")],ho);let po=class extends wt{render(){return A`<style>
        :host,
        slot {
          color: var(--app-color-success-${this.theme});
        }</style
      >${super.render()}`}};po=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-success")],po);let uo=class extends wt{render(){return A`<style>
        :host,
        slot {
          color: var(--app-color-warning-${this.theme});
        }</style
      >${super.render()}`}};uo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-warning")],uo);let fo=class extends wt{render(){return A`<style>
        :host,
        slot {
          color: var(--app-color-info-${this.theme});
        }</style
      >${super.render()}`}};fo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-info")],fo);let go=class extends wt{render(){return A`
            <style>
                :host,
                slot,
                ::slotted(:host),
                ::slotted(slot) {
                    color: var(--app-color-caption-${this.theme});
                }
            </style>
            ${super.render()}`}};go.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-h1);
      line-height: 1;
      font-weight: 400;
    }
  `,go=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h1")],go);let mo=class extends wt{render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-caption-${this.theme});
        }
      </style>
      ${super.render()}`}};mo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-h1);
      line-height: 1;
      font-weight: 400;
    }
  `,mo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h2")],mo);let yo=class extends wt{render(){return A`
            <style>
                :host,
                slot,
                ::slotted(:host),
                ::slotted(slot) {
                    color: var(--app-color-caption-${this.theme});
                }
            </style>
            ${super.render()}`}};yo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-h1);
      line-height: 1;
      font-weight: 400;
    }
  `,yo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h3")],yo);let bo=class extends wt{render(){return A`
            <style>
                :host,
                slot,
                ::slotted(:host),
                ::slotted(slot) {
                    color: var(--app-color-caption-${this.theme});
                }
            </style>
            ${super.render()}`}};bo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-h1);
      line-height: 1;
      font-weight: 400;
    }
  `,bo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h4")],bo);let xo=class extends wt{render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-caption-${this.theme});
        }
      </style>
      ${super.render()}`}};xo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-h1);
      line-height: 1;
      font-weight: 400;
    }
  `,xo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h5")],xo);let vo=class extends wt{render(){return A`
            <style>
                :host,
                slot,
                ::slotted(:host),
                ::slotted(slot) {
                    color: var(--app-color-caption-${this.theme});
                }
            </style>
            ${super.render()}`}};vo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-h1);
      line-height: 1;
      font-weight: 400;
    }
  `,vo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h6")],vo);var wo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},_o=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let So=class extends Q{constructor(){super(),this.value="",this.placeholder="",this.disabled=!1,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A`
      <style>
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
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
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};So.styles=n`
    :host {
      width: 100%;
      height: fit-content;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }

    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      padding: 0;
    }

    input:focus {
      outline: none;
      box-shadow: none;
    }
  `,wo([st({type:String}),_o("design:type",String)],So.prototype,"value",void 0),wo([st({type:String}),_o("design:type",String)],So.prototype,"placeholder",void 0),wo([st({type:Boolean}),_o("design:type",Boolean)],So.prototype,"disabled",void 0),wo([lt("#inputElement"),_o("design:type",Object)],So.prototype,"inputElement",void 0),wo([st({type:it,converter:String}),_o("design:type",String)],So.prototype,"theme",void 0),So=wo([nt("nidoca-search-bar"),_o("design:paramtypes",[])],So);var ko=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ro=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Oo{}Oo.CENTER="CENTER",Oo.LEFT="LEFT",Oo.RIGHT="RIGHT",Oo.TOP="TOP",Oo.BOTTOM="BOTTOM",Oo.SLIDE_CENTER="SLIDE_CENTER",Oo.SLIDE_LEFT="SLIDE_LEFT",Oo.SLIDE_RIGHT="SLIDE_RIGHT",Oo.SLIDE_TOP="SLIDE_TOP",Oo.SLIDE_BOTTOM="SLIDE_BOTTOM";let $o=class extends Q{constructor(){super(...arguments),this.transitionType=Oo.CENTER,this.duration=.5}render(){return A` <div .class="${this.transitionType}"><slot></slot></div> `}};$o.styles=n`
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
  `,ko([st({type:Object}),Ro("design:type",Oo)],$o.prototype,"transitionType",void 0),ko([st({type:Number}),Ro("design:type",Number)],$o.prototype,"duration",void 0),$o=ko([nt("nidoca-transition")],$o);var Eo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let To=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?A`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${Oo.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:A``}};To.styles=n`
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
  `,Eo([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],To.prototype,"show",void 0),To=Eo([nt("nidoca-dialog")],To);var Po=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Mo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Do=class extends Q{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return A`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text style="padding-bottom:var(--space-2);" type="${bt.H2}">${this.title}</nidoca-text>
        <nidoca-text style="padding-bottom:var(--space-2);" type="${bt.SUBTITLE1}"
          >${this.description}
        </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Bt.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Bt.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};Do.styles=n``,Po([st({type:Boolean}),Mo("design:type",Boolean)],Do.prototype,"show",void 0),Po([st({type:String}),Mo("design:type",String)],Do.prototype,"title",void 0),Po([st({type:String}),Mo("design:type",String)],Do.prototype,"description",void 0),Po([st({type:String}),Mo("design:type",String)],Do.prototype,"labelButtonYes",void 0),Po([st({type:String}),Mo("design:type",String)],Do.prototype,"labelButtonNo",void 0),Do=Po([nt("nidoca-dialog-decision")],Do);var Ao=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Co=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Io{}Io.ROUND="ROUND",Io.CLICKABLE="CLICKABLE",Io.ZOOM_WRAPPED="ZOOM_WRAPPED",Io.FULL_WIDTH="FULL_WIDTH";let jo=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[Io.CLICKABLE,Io.FULL_WIDTH]}render(){return A`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}};jo.styles=n`
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
  `,Ao([st({type:String}),Co("design:type",String)],jo.prototype,"src",void 0),Ao([st({type:String}),Co("design:type",String)],jo.prototype,"width",void 0),Ao([st({type:String}),Co("design:type",String)],jo.prototype,"height",void 0),Ao([st({type:Io,converter:Array}),Co("design:type",Array)],jo.prototype,"richMediaProperties",void 0),jo=Ao([nt("nidoca-img-roullnd")],jo);var Lo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let No=class extends Q{constructor(){super(...arguments),this.imgSrc=""}render(){return A`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[Io.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};No.styles=n`
    :host {
      display: block;
    }
  `,Lo([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],No.prototype,"imgSrc",void 0),No=Lo([nt("nidoca-avatar")],No);let Bo=class extends Q{render(){return A`
      <nidoca-box-shadow .shadowType="${Ft.KEY_LIGHT}">
        <slot class="slotContainer"></slot>
      </nidoca-box-shadow>
    `}};Bo.styles=n`
    :host {
      display: block;
    }
    .slotContainer {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
  `,Bo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-card")],Bo);let zo=class extends Q{render(){return A`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements();for(let t=0;t<i.length;t++){const e=i[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};zo.styles=n`
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
  `,zo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-gallery")],zo);let Wo=class extends Q{render(){return A`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};Wo.styles=n`
    :host {
      display: none;
    }
  `,Wo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-print")],Wo);let Ho=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return A`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target,i=e.offsetWidth,o=e.assignedElements(),n=o.length,r=[];let s=0;for(let t=0;t<n;t++){const e=o[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)r.push(e);else{const e=t.toUpperCase();s+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*i}}}let a=100;s>0&&(a=100-s/i*100),0==a&&(a=100/n),this.flexBasis=String(a/r.length)+"%",this.requestUpdate()}};Ho.styles=n`
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

    @media only screen and (min-width: ${ot.TABLET.minWidth}px) and (max-width: ${ot.TABLET.maxWidth}px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: ${ot.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,Ho=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-section")],Ho);var Fo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Uo=class extends Q{constructor(){super(...arguments),this.theme=it.BACKGROUND}render(){return A`
            ${it.getStyle(this.theme)}
            <slot></slot>
        `}};Uo.styles=n`
    :host {
      display: block;
      padding:var(--space-6)
    }
    slot {
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    }
  `,Fo([st({type:it,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Uo.prototype,"theme",void 0),Uo=Fo([nt("nidoca-box")],Uo);var Vo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Yo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qo=class extends Q{constructor(){super(...arguments),this.overline="",this.title="",this.summary="",this.text=""}render(){return A`
            <div style="display:flex; flex-direction:column;">
                <slot name="caption"></slot>
                ${this.overline?A`
                    <nidoca-text .type="${bt.OVERLINE}">${this.overline}</nidoca-text> `:A``}
                <slot name="title"></slot>
                ${this.title?A`
                    <nidoca-text .type="${bt.H2}">${this.title}</nidoca-text> `:A``}
                <slot name="summary"></slot>
                ${this.summary?A`
                            <nidoca-text .type="${bt.BODY2}">${this.summary}</nidoca-text> `:A``}
                <slot name="text"></slot>
                ${this.text?A`
                    <nidoca-text-body>${this.text}</nidoca-text-body>`:A``}
                <slot></slot>
            </div>
        `}};qo.styles=n`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  `,Vo([st({type:String}),Yo("design:type",String)],qo.prototype,"overline",void 0),Vo([st({type:String}),Yo("design:type",String)],qo.prototype,"title",void 0),Vo([st({type:String}),Yo("design:type",String)],qo.prototype,"summary",void 0),Vo([st({type:String}),Yo("design:type",String)],qo.prototype,"text",void 0),qo=Vo([nt("nidoca-article")],qo);class Go{getCurrent(t){if(null==t)return t;const e={};return this.getElements(t).forEach((t=>{const i=t.tagName,o=t.getAttribute("name");if(null==o||null==o)console.warn("input name is empty.");else{const n=t.value;if("INPUT"==i)switch(t.getAttribute("type")){case"number":e[o]=Number(n);break;case"date":case"datetime":e[o]=new Date(n);break;case"checkbox":e[o]=t.checked;break;default:t.checked?e[o]=t.checked:""==n||isNaN(n)?e[o]=n:e[o]=Number(n)}else"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||(e[o]=n)}})),e}getElements(t){let e=[];if(t){const i=t.tagName;if("INPUT"!=i&&"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||e.push(t),t.children.length>0){const i=null==t?void 0:t.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}if(t.shadowRoot&&t.shadowRoot.children.length>0){const i=t.shadowRoot.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}}return e}}class Ko{parseDate(t,e){const i=/[^0-9a-z]/gi;let o=0,n=0,r=0,s=0,a=0,l=0,c=0;const d=t.split(i);try{e.split(i).forEach((function(t,e){switch((""+t).charAt(0)){case"y":case"Y":o=parseInt(d[e]);break;case"M":n=parseInt(d[e])-1;break;case"d":r=parseInt(d[e]);break;case"h":case"H":case"k":case"K":s=parseInt(d[e]);break;case"m":a=parseInt(d[e]);break;case"s":l=parseInt(d[e]);break;case"S":c=parseInt(d[e])}}))}catch(t){throw console.log(t),new Error("Invalid date format.")}return new Date(o,n,r,s,a,l,c)}formatDate(t,e){if(null==t)return"";const i={};return i.M=t.getMonth()+1,i.d=t.getDate(),i.h=t.getHours(),i.m=t.getMinutes(),i.s=t.getSeconds(),e=e.replace(/(M+|d+|h+|m+|s+)/g,(function(t){return((t.length>1?"0":"")+i[t.slice(-1)]).slice(-2)})),e.replace(/(y+)/g,(function(e){return t.getFullYear().toString().slice(-e.length)}))}parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let o=0;o<e.length;o++)if(e[o].exec(i)){console.debug("parse date string to date, key=%s, value=%s",t,i),i=new Date(i);break}return i}))}diffDays(t,e){if(null==t||null==t||null==e||null==e)return null;const i=t.getTime();return(e.getTime()-i)/864e5}}var Xo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Jo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Zo=class extends Q{constructor(){super(),this.nidocaDateHelper=new Ko,this.items=[],this.properties=[],this.hideSidebox=!0,this.showDeleteDialog=!1,this.showDuplicateDialog=!1,this.errorMessage="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{"controller"==e&&this.controller&&(this.properties=this.controller.getProperties(),this.controller.search("").then((t=>{this.items=t,this.requestUpdate()})))}))}render(){return A`
      <nidoca-split-screen .hideSidebox="${this.hideSidebox}">
        <div slot="left">
          <nidoca-box>
            <nidoca-text type="${bt.H2}">Verträge</nidoca-text>
            <nidoca-text type="${bt.CAPTION}">${this.items.length} Verträge</nidoca-text>

            <div style="display:flex;flex-direction:row;">
              <nidoca-search-bar
                style="flex-basis:auto;"
                id="searchbar"
                @nidoca-search-bar-event-value-changed="${t=>{var e;null===(e=this.controller)||void 0===e||e.search(t.detail).then((t=>{this.items=t,this.requestUpdate()}))}}"
                theme="surface"
              ></nidoca-search-bar>

              <nidoca-button
                style="flex-basis:200px;padding-left:var(--space-2)"
                leadingIcon="add"
                @nidoca-event-button-clicked="${()=>{this.initItem({})}}"
                >Neuer Vertrag</nidoca-button
              >
            </div>
          </nidoca-box>
          <nidoca-list selectionMode>
            ${this.items.map(((t,e)=>A`
                ${0==e||this.newSection(this.items[e-1],t)?A`<nidoca-list-section>${this.getPrimaryText(t).charAt(0)}</nidoca-list-section>`:A``}
                <nidoca-list-item
                  @nidoca-event-list-item-click="${()=>{this.initItem(t)}}"
                  primaryText="${this.getPrimaryText(t)}"
                  secondaryText="${this.getSecondaryText(t)}"
                ></nidoca-list-item>
              `))}
          </nidoca-list>
        </div>

        <div slot="sidebox">
          ${this.item?A`
                <nidoca-box>
                  <nidoca-top-app-bar>
                    <nidoca-text-body slot="left">${this.getPrimaryText(this.item)}</nidoca-text-body>
                    <nidoca-icon
                      style="padding-right: var(--space-2);"
                      icon="done"
                      slot="right"
                      title="Speichern"
                      @nidoca-event-icon-clicked="${()=>{var t,e;if(this.errorMessage="",this.editForm&&this.editForm.validate()){const i=(new Go).getCurrent(this);""==i[this.getPrimaryIdKey()]?(i[this.getPrimaryIdKey()]=null,null===(t=this.controller)||void 0===t||t.persist(i).then((t=>{this.item=void 0,this.hideSidebox=!0,this.updateList(t)}))):null===(e=this.controller)||void 0===e||e.update(i).then((t=>{t?(this.item=void 0,this.hideSidebox=!0,this.updateList(i)):this.errorMessage="Fehler beim Speichern"}))}else this.errorMessage="Das Formular enthält Fehler. Bitte überprüfen Sie den Inhalt"}}"
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
                  ${this.errorMessage?A`<nidoca-text-error>${this.errorMessage}</nidoca-text-error>`:A``}
                </nidoca-box>

                <nidoca-box>
                  <nidoca-form id="editForm">
                    ${this.properties.map((t=>A`${t.key==this.getPrimaryIdKey()?A`
                              <nidoca-form-text
                                type="${pe.HIDDEN}"
                                name="${t.key}"
                                value="${this.item[t.key]}"
                              >
                              </nidoca-form-text>
                            `:"date"==t.type?A` <nidoca-form-date
                              name="${t.key}"
                              label="${t.label}"
                              value="${this.item[t.key]?this.nidocaDateHelper.formatDate(this.item[t.key],"yyyy-MM-dd"):""}"
                              ?required="${t.required}"
                            ></nidoca-form-date>`:"checkbox"==t.type?A` <nidoca-form-switch
                              name="${t.key}"
                              label="${t.label}"
                              .checked="${this.item[t.key]}"
                            ></nidoca-form-switch>`:"object"==t.type?A``:"textarea"==t.type?A`<nidoca-form-textarea
                              type="${t.type}"
                              name="${t.key}"
                              label="${t.label}"
                              value="${this.item[t.key]}"
                              ?required="${t.required}"
                            ></nidoca-form-textarea>`:A`
                              <nidoca-form-text
                                type="${t.type}"
                                step="${he(t.step)}"
                                name="${t.key}"
                                label="${t.label}"
                                value="${this.item[t.key]}"
                                ?required="${t.required}"
                              >
                              </nidoca-form-text>
                            `}

                        <div style="padding-bottom:var(--space-4)"></div> `))}
                  </nidoca-form>
                </nidoca-box>
              `:A``}
        </div>
      </nidoca-split-screen>

      <nidoca-dialog-decision
        title="Element löschen ?"
        description="Möchtest du das Element wirklich löschen ? Es geht unwiederuflich verloren."
        .show="${this.showDeleteDialog}"
        @nidoca-dialog-decision-no="${()=>{this.showDeleteDialog=!1}}"
        @nidoca-dialog-decision-yes="${()=>{var t;null===(t=this.controller)||void 0===t||t.delete(this.item).then((()=>{var t;null===(t=this.controller)||void 0===t||t.search(this.searchbar?this.searchbar.value:"").then((t=>{this.items=t,this.hideSidebox=!0,this.showDeleteDialog=!1,this.requestUpdate()}))}))}}"
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
    `}updateList(t){var e;let i=!0;const o=null===(e=this.controller)||void 0===e?void 0:e.getPrimaryIdKey();o&&(this.items=this.items.map((e=>e[o]==t[o]?(i=!1,t):e)),t[o]&&i&&this.items.push(t))}initItem(t){this.item=t,this.hideSidebox=!1}getPrimaryIdKey(){return this.controller?this.controller.getPrimaryIdKey():"id"}newSection(t,e){var i,o;if(this.controller&&t){const n=null===(i=this.controller)||void 0===i?void 0:i.getPrimaryText(t),r=null===(o=this.controller)||void 0===o?void 0:o.getPrimaryText(e);return n.charAt(0)!=r.charAt(0)}return!1}getPrimaryText(t){return this.controller?this.controller.getPrimaryText(t):""}getSecondaryText(t){return this.controller?this.controller.getSecondaryText(t):""}};Zo.styles=n``,Xo([st({type:Object,converter:Object}),Jo("design:type",Object)],Zo.prototype,"controller",void 0),Xo([st({type:Object,converter:Object}),Jo("design:type",Object)],Zo.prototype,"item",void 0),Xo([st({type:Boolean,converter:String}),Jo("design:type",Boolean)],Zo.prototype,"hideSidebox",void 0),Xo([st({type:Boolean,converter:String}),Jo("design:type",Boolean)],Zo.prototype,"showDeleteDialog",void 0),Xo([st({type:Boolean,converter:String}),Jo("design:type",Boolean)],Zo.prototype,"showDuplicateDialog",void 0),Xo([st({type:it,converter:String}),Jo("design:type",String)],Zo.prototype,"theme",void 0),Xo([lt("#searchbar"),Jo("design:type",Object)],Zo.prototype,"searchbar",void 0),Xo([lt("#editForm"),Jo("design:type",Object)],Zo.prototype,"editForm",void 0),Xo([st({type:String,converter:String}),Jo("design:type",String)],Zo.prototype,"errorMessage",void 0),Zo=Xo([nt("nidoca-generic-crud"),Jo("design:paramtypes",[])],Zo);var Qo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},tn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let en=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return A`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
        .type="${pe.BODY2}"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `}};en.styles=n`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,Qo([st({type:String}),tn("design:type",String)],en.prototype,"primaryText",void 0),Qo([st({type:String}),tn("design:type",String)],en.prototype,"text",void 0),Qo([st({type:String}),tn("design:type",String)],en.prototype,"icon",void 0),en=Qo([nt("nidoca-icon-with-description")],en);var on=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},nn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let rn=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return A`
            <nidoca-box theme="${this.theme}">
                <nidoca-form id="authenitcate-form">
                    <nidoca-text class="paddingBottom" .type="${bt.H2}">${this.label}</nidoca-text>
                    <nidoca-form-text
                            .theme="${this.theme}"
                            class="paddingBottom"
                            name="name"
                            .textType="${pe.TEXT}"
                            value=""
                            label="${this.nameLabel}"
                            required
                    ></nidoca-form-text>
                    <nidoca-form-text
                            theme="${this.theme}"
                            class="paddingBottom"
                            .textType="${pe.EMAIL}"
                            label="${this.emailLabel}"
                            name="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
                            required
                    ></nidoca-form-text>
                    <nidoca-form-text
                            label="${this.titleLabel}"
                            .theme="${this.theme}"
                            class="paddingBottom"
                            .textType="${pe.TEXT}"
                            value=""
                            label="title"
                            required
                    ></nidoca-form-text>
                    <nidoca-form-textarea
                            label="${this.messageLabel}"
                            .theme="${this.theme}"
                            class="paddingBottom"
                            name="message"
                            trailingIcon="vpn_key"
                            required
                    ></nidoca-form-textarea>
                    <nidoca-button
                            theme="${it.getOposite(this.theme)}"
                            class="paddingBottom"
                            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
                            .buttonType="${Bt.CONTAINED}"
                    >${this.buttonLabel}
                    </nidoca-button
                    >
                </nidoca-form>
            </nidoca-box>
        `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};rn.styles=n`
    :host {
      display: block;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,on([st({type:it,converter:String}),nn("design:type",Object)],rn.prototype,"theme",void 0),on([st({type:String,converter:String}),nn("design:type",String)],rn.prototype,"label",void 0),on([st({type:String,converter:String}),nn("design:type",String)],rn.prototype,"nameLabel",void 0),on([st({type:String,converter:String}),nn("design:type",String)],rn.prototype,"emailLabel",void 0),on([st({type:String,converter:String}),nn("design:type",String)],rn.prototype,"titleLabel",void 0),on([st({type:String,converter:String}),nn("design:type",String)],rn.prototype,"messageLabel",void 0),on([st({type:String,converter:String}),nn("design:type",String)],rn.prototype,"buttonLabel",void 0),on([lt("#authenitcate-form"),nn("design:type",Object)],rn.prototype,"formComponent",void 0),rn=on([nt("nidoca-form-contact")],rn);const sn="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function an(t,e,i){const o=i||(t=>Array.prototype.slice.call(t));let n=!1,r=[];return function(...i){r=o(i),n||(n=!0,sn.call(window,(()=>{n=!1,t.apply(e,r)})))}}const ln=t=>"start"===t?"left":"end"===t?"right":"center",cn=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2;function dn(){}const hn=function(){let t=0;return function(){return t++}}();function pn(t){return null==t}function un(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function fn(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const gn=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function mn(t,e){return gn(t)?t:e}function yn(t,e){return void 0===t?e:t}const bn=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function xn(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function vn(t,e,i,o){let n,r,s;if(un(t))if(r=t.length,o)for(n=r-1;n>=0;n--)e.call(i,t[n],n);else for(n=0;n<r;n++)e.call(i,t[n],n);else if(fn(t))for(s=Object.keys(t),r=s.length,n=0;n<r;n++)e.call(i,t[s[n]],s[n])}function wn(t,e){let i,o,n,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,o=t.length;i<o;++i)if(n=t[i],r=e[i],n.datasetIndex!==r.datasetIndex||n.index!==r.index)return!1;return!0}function _n(t){if(un(t))return t.map(_n);if(fn(t)){const e=Object.create(null),i=Object.keys(t),o=i.length;let n=0;for(;n<o;++n)e[i[n]]=_n(t[i[n]]);return e}return t}function Sn(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function kn(t,e,i,o){if(!Sn(t))return;const n=e[t],r=i[t];fn(n)&&fn(r)?Rn(n,r,o):e[t]=_n(r)}function Rn(t,e,i){const o=un(e)?e:[e],n=o.length;if(!fn(t))return t;const r=(i=i||{}).merger||kn;for(let s=0;s<n;++s){if(!fn(e=o[s]))continue;const n=Object.keys(e);for(let o=0,s=n.length;o<s;++o)r(n[o],t,e,i)}return t}function On(t,e){return Rn(t,e,{merger:$n})}function $n(t,e,i){if(!Sn(t))return;const o=e[t],n=i[t];fn(o)&&fn(n)?On(o,n):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=_n(n))}function En(t,e){const i=t.indexOf(".",e);return-1===i?t.length:i}function Tn(t,e){if(""===e)return t;let i=0,o=En(e,i);for(;t&&o>i;)t=t[e.substr(i,o-i)],i=o+1,o=En(e,i);return t}function Pn(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Mn=t=>void 0!==t,Dn=t=>"function"==typeof t,An=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0},Cn=Math.PI,In=2*Cn,jn=In+Cn,Ln=Number.POSITIVE_INFINITY,Nn=Cn/180,Bn=Cn/2,zn=Cn/4,Wn=2*Cn/3,Hn=Math.log10,Fn=Math.sign;function Un(t){const e=Math.round(t);t=Yn(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(Hn(t))),o=t/i;return(o<=1?1:o<=2?2:o<=5?5:10)*i}function Vn(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Yn(t,e,i){return Math.abs(t-e)<i}function qn(t,e,i){let o,n,r;for(o=0,n=t.length;o<n;o++)r=t[o][i],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function Gn(t){return t*(Cn/180)}function Kn(t){return t*(180/Cn)}function Xn(t){if(!gn(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Jn(t,e){const i=e.x-t.x,o=e.y-t.y,n=Math.sqrt(i*i+o*o);let r=Math.atan2(o,i);return r<-.5*Cn&&(r+=In),{angle:r,distance:n}}function Zn(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Qn(t,e){return(t-e+jn)%In-Cn}function tr(t){return(t%In+In)%In}function er(t,e,i,o){const n=tr(t),r=tr(e),s=tr(i),a=tr(r-n),l=tr(s-n),c=tr(n-r),d=tr(n-s);return n===r||n===s||o&&r===s||a>l&&c<d}function ir(t,e,i){return Math.max(e,Math.min(i,t))}function or(t,e,i,o=1e-6){return t>=Math.min(e,i)-o&&t<=Math.max(e,i)+o}const nr=t=>0===t||1===t,rr=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*In/i),sr=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*In/i)+1,ar={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Bn),easeOutSine:t=>Math.sin(t*Bn),easeInOutSine:t=>-.5*(Math.cos(Cn*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>nr(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>nr(t)?t:rr(t,.075,.3),easeOutElastic:t=>nr(t)?t:sr(t,.075,.3),easeInOutElastic(t){const e=.1125;return nr(t)?t:t<.5?.5*rr(2*t,e,.45):.5+.5*sr(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-ar.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*ar.easeInBounce(2*t):.5*ar.easeOutBounce(2*t-1)+.5},lr={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},cr="0123456789ABCDEF",dr=t=>cr[15&t],hr=t=>cr[(240&t)>>4]+cr[15&t],pr=t=>(240&t)>>4==(15&t);function ur(t){return t+.5|0}const fr=(t,e,i)=>Math.max(Math.min(t,i),e);function gr(t){return fr(ur(2.55*t),0,255)}function mr(t){return fr(ur(255*t),0,255)}function yr(t){return fr(ur(t/2.55)/100,0,1)}function br(t){return fr(ur(100*t),0,100)}const xr=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,vr=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function wr(t,e,i){const o=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-o*Math.max(Math.min(n-3,9-n,1),-1);return[n(0),n(8),n(4)]}function _r(t,e,i){const o=(o,n=(o+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return[o(5),o(3),o(1)]}function Sr(t,e,i){const o=wr(t,1,.5);let n;for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)o[n]*=1-e-i,o[n]+=e;return o}function kr(t){const e=t.r/255,i=t.g/255,o=t.b/255,n=Math.max(e,i,o),r=Math.min(e,i,o),s=(n+r)/2;let a,l,c;return n!==r&&(c=n-r,l=s>.5?c/(2-n-r):c/(n+r),a=n===e?(i-o)/c+(i<o?6:0):n===i?(o-e)/c+2:(e-i)/c+4,a=60*a+.5),[0|a,l||0,s]}function Rr(t,e,i,o){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,o)).map(mr)}function Or(t,e,i){return Rr(wr,t,e,i)}function $r(t){return(t%360+360)%360}const Er={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Tr={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let Pr;function Mr(t,e,i){if(t){let o=kr(t);o[e]=Math.max(0,Math.min(o[e]+o[e]*i,0===e?360:1)),o=Or(o),t.r=o[0],t.g=o[1],t.b=o[2]}}function Dr(t,e){return t?Object.assign(e||{},t):t}function Ar(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=mr(t[3]))):(e=Dr(t,{r:0,g:0,b:0,a:1})).a=mr(e.a),e}function Cr(t){return"r"===t.charAt(0)?function(t){const e=xr.exec(t);let i,o,n,r=255;if(e){if(e[7]!==i){const t=+e[7];r=255&(e[8]?gr(t):255*t)}return i=+e[1],o=+e[3],n=+e[5],i=255&(e[2]?gr(i):i),o=255&(e[4]?gr(o):o),n=255&(e[6]?gr(n):n),{r:i,g:o,b:n,a:r}}}(t):function(t){const e=vr.exec(t);let i,o=255;if(!e)return;e[5]!==i&&(o=e[6]?gr(+e[5]):mr(+e[5]));const n=$r(+e[2]),r=+e[3]/100,s=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return Rr(Sr,t,e,i)}(n,r,s):"hsv"===e[1]?function(t,e,i){return Rr(_r,t,e,i)}(n,r,s):Or(n,r,s),{r:i[0],g:i[1],b:i[2],a:o}}(t)}class Ir{constructor(t){if(t instanceof Ir)return t;const e=typeof t;let i;var o,n,r;"object"===e?i=Ar(t):"string"===e&&(r=(o=t).length,"#"===o[0]&&(4===r||5===r?n={r:255&17*lr[o[1]],g:255&17*lr[o[2]],b:255&17*lr[o[3]],a:5===r?17*lr[o[4]]:255}:7!==r&&9!==r||(n={r:lr[o[1]]<<4|lr[o[2]],g:lr[o[3]]<<4|lr[o[4]],b:lr[o[5]]<<4|lr[o[6]],a:9===r?lr[o[7]]<<4|lr[o[8]]:255})),i=n||function(t){Pr||(Pr=function(){const t={},e=Object.keys(Tr),i=Object.keys(Er);let o,n,r,s,a;for(o=0;o<e.length;o++){for(s=a=e[o],n=0;n<i.length;n++)r=i[n],a=a.replace(r,Er[r]);r=parseInt(Tr[s],16),t[a]=[r>>16&255,r>>8&255,255&r]}return t}(),Pr.transparent=[0,0,0,0]);const e=Pr[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}(t)||Cr(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Dr(this._rgb);return t&&(t.a=yr(t.a)),t}set rgb(t){this._rgb=Ar(t)}rgbString(){return this._valid?function(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${yr(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}(this._rgb):this._rgb}hexString(){return this._valid?function(t){var e=function(t){return pr(t.r)&&pr(t.g)&&pr(t.b)&&pr(t.a)}(t)?dr:hr;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):""):t}(this._rgb):this._rgb}hslString(){return this._valid?function(t){if(!t)return;const e=kr(t),i=e[0],o=br(e[1]),n=br(e[2]);return t.a<255?`hsla(${i}, ${o}%, ${n}%, ${yr(t.a)})`:`hsl(${i}, ${o}%, ${n}%)`}(this._rgb):this._rgb}mix(t,e){const i=this;if(t){const o=i.rgb,n=t.rgb;let r;const s=e===r?.5:e,a=2*s-1,l=o.a-n.a,c=((a*l==-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,o.r=255&c*o.r+r*n.r+.5,o.g=255&c*o.g+r*n.g+.5,o.b=255&c*o.b+r*n.b+.5,o.a=s*o.a+(1-s)*n.a,i.rgb=o}return i}clone(){return new Ir(this.rgb)}alpha(t){return this._rgb.a=mr(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=ur(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Mr(this._rgb,2,t),this}darken(t){return Mr(this._rgb,2,-t),this}saturate(t){return Mr(this._rgb,1,t),this}desaturate(t){return Mr(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=kr(t);i[0]=$r(i[0]+e),i=Or(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function jr(t){return new Ir(t)}const Lr=t=>t instanceof CanvasGradient||t instanceof CanvasPattern;function Nr(t){return Lr(t)?t:jr(t)}function Br(t){return Lr(t)?t:jr(t).saturate(.5).darken(.1).hexString()}const zr=Object.create(null),Wr=Object.create(null);function Hr(t,e){if(!e)return t;const i=e.split(".");for(let e=0,o=i.length;e<o;++e){const o=i[e];t=t[o]||(t[o]=Object.create(null))}return t}function Fr(t,e,i){return"string"==typeof e?Rn(Hr(t,e),i):Rn(Hr(t,""),e)}var Ur=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>Br(e.backgroundColor),this.hoverBorderColor=(t,e)=>Br(e.borderColor),this.hoverColor=(t,e)=>Br(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return Fr(this,t,e)}get(t){return Hr(this,t)}describe(t,e){return Fr(Wr,t,e)}override(t,e){return Fr(zr,t,e)}route(t,e,i,o){const n=Hr(this,t),r=Hr(this,i),s="_"+e;Object.defineProperties(n,{[s]:{value:n[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[s],e=r[o];return fn(t)?Object.assign({},e,t):yn(t,e)},set(t){this[s]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Vr(t,e,i,o,n){let r=e[n];return r||(r=e[n]=t.measureText(n).width,i.push(n)),r>o&&(o=r),o}function Yr(t,e,i,o){let n=(o=o||{}).data=o.data||{},r=o.garbageCollect=o.garbageCollect||[];o.font!==e&&(n=o.data={},r=o.garbageCollect=[],o.font=e),t.save(),t.font=e;let s=0;const a=i.length;let l,c,d,h,p;for(l=0;l<a;l++)if(h=i[l],null!=h&&!0!==un(h))s=Vr(t,n,r,s,h);else if(un(h))for(c=0,d=h.length;c<d;c++)p=h[c],null==p||un(p)||(s=Vr(t,n,r,s,p));t.restore();const u=r.length/2;if(u>i.length){for(l=0;l<u;l++)delete n[r[l]];r.splice(0,u)}return s}function qr(t,e,i){const o=t.currentDevicePixelRatio,n=0!==i?Math.max(i/2,.5):0;return Math.round((e-n)*o)/o+n}function Gr(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Kr(t,e,i,o){let n,r,s,a,l;const c=e.pointStyle,d=e.rotation,h=e.radius;let p=(d||0)*Nn;if(c&&"object"==typeof c&&(n=c.toString(),"[object HTMLImageElement]"===n||"[object HTMLCanvasElement]"===n))return t.save(),t.translate(i,o),t.rotate(p),t.drawImage(c,-c.width/2,-c.height/2,c.width,c.height),void t.restore();if(!(isNaN(h)||h<=0)){switch(t.beginPath(),c){default:t.arc(i,o,h,0,In),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(p)*h,o-Math.cos(p)*h),p+=Wn,t.lineTo(i+Math.sin(p)*h,o-Math.cos(p)*h),p+=Wn,t.lineTo(i+Math.sin(p)*h,o-Math.cos(p)*h),t.closePath();break;case"rectRounded":l=.516*h,a=h-l,r=Math.cos(p+zn)*a,s=Math.sin(p+zn)*a,t.arc(i-r,o-s,l,p-Cn,p-Bn),t.arc(i+s,o-r,l,p-Bn,p),t.arc(i+r,o+s,l,p,p+Bn),t.arc(i-s,o+r,l,p+Bn,p+Cn),t.closePath();break;case"rect":if(!d){a=Math.SQRT1_2*h,t.rect(i-a,o-a,2*a,2*a);break}p+=zn;case"rectRot":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+s,o-r),t.lineTo(i+r,o+s),t.lineTo(i-s,o+r),t.closePath();break;case"crossRot":p+=zn;case"cross":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+r,o+s),t.moveTo(i+s,o-r),t.lineTo(i-s,o+r);break;case"star":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+r,o+s),t.moveTo(i+s,o-r),t.lineTo(i-s,o+r),p+=zn,r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+r,o+s),t.moveTo(i+s,o-r),t.lineTo(i-s,o+r);break;case"line":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+r,o+s);break;case"dash":t.moveTo(i,o),t.lineTo(i+Math.cos(p)*h,o+Math.sin(p)*h)}t.fill(),e.borderWidth>0&&t.stroke()}}function Xr(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function Jr(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Zr(t){t.restore()}function Qr(t,e,i,o,n){if(!e)return t.lineTo(i.x,i.y);if("middle"===n){const o=(e.x+i.x)/2;t.lineTo(o,e.y),t.lineTo(o,i.y)}else"after"===n!=!!o?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function ts(t,e,i,o){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(o?e.cp1x:e.cp2x,o?e.cp1y:e.cp2y,o?i.cp2x:i.cp1x,o?i.cp2y:i.cp1y,i.x,i.y)}function es(t,e,i,o,n,r={}){const s=un(e)?e:[e],a=r.strokeWidth>0&&""!==r.strokeColor;let l,c;for(t.save(),t.font=n.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),pn(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,r),l=0;l<s.length;++l)c=s[l],a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),pn(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,i,o,r.maxWidth)),t.fillText(c,i,o,r.maxWidth),is(t,i,o,c,r),o+=n.lineHeight;t.restore()}function is(t,e,i,o,n){if(n.strikethrough||n.underline){const r=t.measureText(o),s=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=i-r.actualBoundingBoxAscent,c=i+r.actualBoundingBoxDescent,d=n.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=n.decorationWidth||2,t.moveTo(s,d),t.lineTo(a,d),t.stroke()}}function os(t,e){const{x:i,y:o,w:n,h:r,radius:s}=e;t.arc(i+s.topLeft,o+s.topLeft,s.topLeft,-Bn,Cn,!0),t.lineTo(i,o+r-s.bottomLeft),t.arc(i+s.bottomLeft,o+r-s.bottomLeft,s.bottomLeft,Cn,Bn,!0),t.lineTo(i+n-s.bottomRight,o+r),t.arc(i+n-s.bottomRight,o+r-s.bottomRight,s.bottomRight,Bn,0,!0),t.lineTo(i+n,o+s.topRight),t.arc(i+n-s.topRight,o+s.topRight,s.topRight,0,-Bn,!0),t.lineTo(i+s.topLeft,o)}const ns=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),rs=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function ss(t,e){const i=(""+t).match(ns);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}const as=t=>+t||0;function ls(t,e){const i={},o=fn(e),n=o?Object.keys(e):e,r=fn(t)?o?i=>yn(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of n)i[t]=as(r(t));return i}function cs(t){return ls(t,{top:"y",right:"x",bottom:"y",left:"x"})}function ds(t){return ls(t,["topLeft","topRight","bottomLeft","bottomRight"])}function hs(t){const e=cs(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function ps(t,e){t=t||{},e=e||Ur.font;let i=yn(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let o=yn(t.style,e.style);o&&!(""+o).match(rs)&&(console.warn('Invalid font style specified: "'+o+'"'),o="");const n={family:yn(t.family,e.family),lineHeight:ss(yn(t.lineHeight,e.lineHeight),i),size:i,style:o,weight:yn(t.weight,e.weight),string:""};return n.string=function(t){return!t||pn(t.size)||pn(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(n),n}function us(t,e,i,o){let n,r,s,a=!0;for(n=0,r=t.length;n<r;++n)if(s=t[n],void 0!==s&&(void 0!==e&&"function"==typeof s&&(s=s(e),a=!1),void 0!==i&&un(s)&&(s=s[i%s.length],a=!1),void 0!==s))return o&&!a&&(o.cacheable=!1),s}function fs(t,e){return Object.assign(Object.create(t),e)}function gs(t,e,i){i=i||(i=>t[i]<e);let o,n=t.length-1,r=0;for(;n-r>1;)o=r+n>>1,i(o)?r=o:n=o;return{lo:r,hi:n}}const ms=(t,e,i)=>gs(t,i,(o=>t[o][e]<i)),ys=(t,e,i)=>gs(t,i,(o=>t[o][e]>=i)),bs=["push","pop","shift","splice","unshift"];function xs(t,e){const i=t._chartjs;if(!i)return;const o=i.listeners,n=o.indexOf(e);-1!==n&&o.splice(n,1),o.length>0||(bs.forEach((e=>{delete t[e]})),delete t._chartjs)}function vs(t){const e=new Set;let i,o;for(i=0,o=t.length;i<o;++i)e.add(t[i]);return e.size===o?t:Array.from(e)}function ws(t,e=[""],i=t,o,n=(()=>t[0])){Mn(o)||(o=Ds("_fallback",t));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:o,_getTarget:n,override:n=>ws([n,...t],e,i,o)};return new Proxy(r,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,o)=>Os(i,o,(()=>function(t,e,i,o){let n;for(const r of e)if(n=Ds(ks(r,t),i),Mn(n))return Rs(t,n)?Ps(i,o,t,n):n}(o,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>As(t).includes(e),ownKeys:t=>As(t),set(t,e,i){const o=t._storage||(t._storage=n());return t[e]=o[e]=i,delete t._keys,!0}})}function _s(t,e,i,o){const n={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:Ss(t,o),setContext:e=>_s(t,e,i,o),override:n=>_s(t.override(n),e,i,o)};return new Proxy(n,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>Os(t,e,(()=>function(t,e,i){const{_proxy:o,_context:n,_subProxy:r,_descriptors:s}=t;let a=o[e];return Dn(a)&&s.isScriptable(e)&&(a=function(t,e,i,o){const{_proxy:n,_context:r,_subProxy:s,_stack:a}=i;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);return a.add(t),e=e(r,s||o),a.delete(t),Rs(t,e)&&(e=Ps(n._scopes,n,t,e)),e}(e,a,t,i)),un(a)&&a.length&&(a=function(t,e,i,o){const{_proxy:n,_context:r,_subProxy:s,_descriptors:a}=i;if(Mn(r.index)&&o(t))e=e[r.index%e.length];else if(fn(e[0])){const i=e,o=n._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=Ps(o,n,t,l);e.push(_s(i,r,s&&s[t],a))}}return e}(e,a,t,s.isIndexable)),Rs(e,a)&&(a=_s(a,n,r&&r[e],s)),a}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,o)=>(t[i]=o,delete e[i],!0)})}function Ss(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:o=e.indexable,_allKeys:n=e.allKeys}=t;return{allKeys:n,scriptable:i,indexable:o,isScriptable:Dn(i)?i:()=>i,isIndexable:Dn(o)?o:()=>o}}const ks=(t,e)=>t?t+Pn(e):e,Rs=(t,e)=>fn(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Os(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const o=i();return t[e]=o,o}function $s(t,e,i){return Dn(t)?t(e,i):t}const Es=(t,e)=>!0===t?e:"string"==typeof t?Tn(e,t):void 0;function Ts(t,e,i,o,n){for(const r of e){const e=Es(i,r);if(e){t.add(e);const r=$s(e._fallback,i,n);if(Mn(r)&&r!==i&&r!==o)return r}else if(!1===e&&Mn(o)&&i!==o)return null}return!1}function Ps(t,e,i,o){const n=e._rootScopes,r=$s(e._fallback,i,o),s=[...t,...n],a=new Set;a.add(o);let l=Ms(a,s,i,r||i,o);return null!==l&&(!Mn(r)||r===i||(l=Ms(a,s,r,l,o),null!==l))&&ws(Array.from(a),[""],n,r,(()=>function(t,e,i){const o=t._getTarget();e in o||(o[e]={});const n=o[e];return un(n)&&fn(i)?i:n}(e,i,o)))}function Ms(t,e,i,o,n){for(;i;)i=Ts(t,e,i,o,n);return i}function Ds(t,e){for(const i of e){if(!i)continue;const e=i[t];if(Mn(e))return e}}function As(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}const Cs=Number.EPSILON||1e-14,Is=(t,e)=>e<t.length&&!t[e].skip&&t[e],js=t=>"x"===t?"y":"x";function Ls(t,e,i,o){const n=t.skip?e:t,r=e,s=i.skip?e:i,a=Zn(r,n),l=Zn(s,r);let c=a/(a+l),d=l/(a+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=o*c,p=o*d;return{previous:{x:r.x-h*(s.x-n.x),y:r.y-h*(s.y-n.y)},next:{x:r.x+p*(s.x-n.x),y:r.y+p*(s.y-n.y)}}}function Ns(t,e,i){return Math.max(Math.min(t,i),e)}function Bs(t,e,i,o,n){let r,s,a,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)!function(t,e="x"){const i=js(e),o=t.length,n=Array(o).fill(0),r=Array(o);let s,a,l,c=Is(t,0);for(s=0;s<o;++s)if(a=l,l=c,c=Is(t,s+1),l){if(c){const t=c[e]-l[e];n[s]=0!==t?(c[i]-l[i])/t:0}r[s]=a?c?Fn(n[s-1])!==Fn(n[s])?0:(n[s-1]+n[s])/2:n[s-1]:n[s]}!function(t,e,i){const o=t.length;let n,r,s,a,l,c=Is(t,0);for(let d=0;d<o-1;++d)l=c,c=Is(t,d+1),l&&c&&(Yn(e[d],0,Cs)?i[d]=i[d+1]=0:(n=i[d]/e[d],r=i[d+1]/e[d],a=Math.pow(n,2)+Math.pow(r,2),a<=9||(s=3/Math.sqrt(a),i[d]=n*s*e[d],i[d+1]=r*s*e[d])))}(t,n,r),function(t,e,i="x"){const o=js(i),n=t.length;let r,s,a,l=Is(t,0);for(let c=0;c<n;++c){if(s=a,a=l,l=Is(t,c+1),!a)continue;const n=a[i],d=a[o];s&&(r=(n-s[i])/3,a[`cp1${i}`]=n-r,a[`cp1${o}`]=d-r*e[c]),l&&(r=(l[i]-n)/3,a[`cp2${i}`]=n+r,a[`cp2${o}`]=d+r*e[c])}}(t,r,e)}(t,n);else{let i=o?t[t.length-1]:t[0];for(r=0,s=t.length;r<s;++r)a=t[r],l=Ls(i,a,t[Math.min(r+1,s-(o?0:1))%s],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,i=a}e.capBezierPoints&&function(t,e){let i,o,n,r,s,a=Xr(t[0],e);for(i=0,o=t.length;i<o;++i)s=r,r=a,a=i<o-1&&Xr(t[i+1],e),r&&(n=t[i],s&&(n.cp1x=Ns(n.cp1x,e.left,e.right),n.cp1y=Ns(n.cp1y,e.top,e.bottom)),a&&(n.cp2x=Ns(n.cp2x,e.left,e.right),n.cp2y=Ns(n.cp2y,e.top,e.bottom)))}(t,i)}function zs(){return"undefined"!=typeof window&&"undefined"!=typeof document}function Ws(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function Hs(t,e,i){let o;return"string"==typeof t?(o=parseInt(t,10),-1!==t.indexOf("%")&&(o=o/100*e.parentNode[i])):o=t,o}const Fs=t=>window.getComputedStyle(t,null),Us=["top","right","bottom","left"];function Vs(t,e,i){const o={};i=i?"-"+i:"";for(let n=0;n<4;n++){const r=Us[n];o[r]=parseFloat(t[e+"-"+r+i])||0}return o.width=o.left+o.right,o.height=o.top+o.bottom,o}function Ys(t,e){const{canvas:i,currentDevicePixelRatio:o}=e,n=Fs(i),r="border-box"===n.boxSizing,s=Vs(n,"padding"),a=Vs(n,"border","width"),{x:l,y:c,box:d}=function(t,e){const i=t.native||t,o=i.touches,n=o&&o.length?o[0]:i,{offsetX:r,offsetY:s}=n;let a,l,c=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(r,s,i.target))a=r,l=s;else{const t=e.getBoundingClientRect();a=n.clientX-t.left,l=n.clientY-t.top,c=!0}return{x:a,y:l,box:c}}(t,i),h=s.left+(d&&a.left),p=s.top+(d&&a.top);let{width:u,height:f}=e;return r&&(u-=s.width+a.width,f-=s.height+a.height),{x:Math.round((l-h)/u*i.width/o),y:Math.round((c-p)/f*i.height/o)}}const qs=t=>Math.round(10*t)/10;function Gs(t,e,i){const o=e||1,n=Math.floor(t.height*o),r=Math.floor(t.width*o);t.height=n/o,t.width=r/o;const s=t.canvas;return s.style&&(i||!s.style.height&&!s.style.width)&&(s.style.height=`${t.height}px`,s.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==o||s.height!==n||s.width!==r)&&(t.currentDevicePixelRatio=o,s.height=n,s.width=r,t.ctx.setTransform(o,0,0,o,0,0),!0)}const Ks=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function Xs(t,e){const i=function(t,e){return Fs(t).getPropertyValue(e)}(t,e),o=i&&i.match(/^(\d+)(\.\d+)?px$/);return o?+o[1]:void 0}function Js(t,e,i,o){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function Zs(t,e,i,o){return{x:t.x+i*(e.x-t.x),y:"middle"===o?i<.5?t.y:e.y:"after"===o?i<1?t.y:e.y:i>0?e.y:t.y}}function Qs(t,e,i,o){const n={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},s=Js(t,n,i),a=Js(n,r,i),l=Js(r,e,i),c=Js(s,a,i),d=Js(a,l,i);return Js(c,d,i)}const ta=new Map;function ea(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let o=ta.get(i);return o||(o=new Intl.NumberFormat(t,e),ta.set(i,o)),o}(e,i).format(t)}function ia(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function oa(t,e){let i,o;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,o=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=o)}function na(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function ra(t){return"angle"===t?{between:er,compare:Qn,normalize:tr}:{between:or,compare:(t,e)=>t-e,normalize:t=>t}}function sa({start:t,end:e,count:i,loop:o,style:n}){return{start:t%i,end:e%i,loop:o&&(e-t+1)%i==0,style:n}}function aa(t,e,i){if(!i)return[t];const{property:o,start:n,end:r}=i,s=e.length,{compare:a,between:l,normalize:c}=ra(o),{start:d,end:h,loop:p,style:u}=function(t,e,i){const{property:o,start:n,end:r}=i,{between:s,normalize:a}=ra(o),l=e.length;let c,d,{start:h,end:p,loop:u}=t;if(u){for(h+=l,p+=l,c=0,d=l;c<d&&s(a(e[h%l][o]),n,r);++c)h--,p--;h%=l,p%=l}return p<h&&(p+=l),{start:h,end:p,loop:u,style:t.style}}(t,e,i),f=[];let g,m,y,b=!1,x=null;for(let t=d,i=d;t<=h;++t)m=e[t%s],m.skip||(g=c(m[o]),g!==y&&(b=l(g,n,r),null===x&&(b||l(n,y,g)&&0!==a(n,y))&&(x=0===a(g,n)?t:i),null!==x&&(!b||0===a(r,g)||l(r,y,g))&&(f.push(sa({start:x,end:t,loop:p,count:s,style:u})),x=null),i=t,y=g));return null!==x&&f.push(sa({start:x,end:h,loop:p,count:s,style:u})),f}function la(t,e){const i=[],o=t.segments;for(let n=0;n<o.length;n++){const r=aa(o[n],t.points,e);r.length&&i.push(...r)}return i}function ca(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function da(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var ha=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,o){const n=e.listeners[o],r=e.duration;n.forEach((o=>o({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(i-e.start,r)})))}_refresh(){this._request||(this._running=!0,this._request=sn.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((i,o)=>{if(!i.running||!i.items.length)return;const n=i.items;let r,s=n.length-1,a=!1;for(;s>=0;--s)r=n[s],r._active?(r._total>i.duration&&(i.duration=r._total),r.tick(t),a=!0):(n[s]=n[n.length-1],n.pop());a&&(o.draw(),this._notify(o,i,t,"progress")),n.length||(i.running=!1,this._notify(o,i,t,"complete"),i.initial=!1),e+=n.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let o=i.length-1;for(;o>=0;--o)i[o].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const pa="transparent",ua={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const o=Nr(t||pa),n=o.valid&&Nr(e||pa);return n&&n.valid?n.mix(o,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class fa{constructor(t,e,i,o){const n=e[i];o=us([t.to,o,n,t.from]);const r=us([t.from,n,o]);this._active=!0,this._fn=t.fn||ua[t.type||typeof r],this._easing=ar[t.easing]||ar.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=r,this._to=o,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const o=this._target[this._prop],n=i-this._start,r=this._duration-n;this._start=i,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=us([t.to,e,o,t.from]),this._from=us([t.from,o,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,o=this._prop,n=this._from,r=this._loop,s=this._to;let a;if(this._active=n!==s&&(r||e<i),!this._active)return this._target[o]=s,void this._notify(!0);e<0?this._target[o]=n:(a=e/i%2,a=r&&a>1?2-a:a,a=this._easing(Math.min(1,Math.max(0,a))),this._target[o]=this._fn(n,s,a))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}Ur.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const ga=Object.keys(Ur.animation);Ur.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),Ur.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),Ur.describe("animations",{_fallback:"animation"}),Ur.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class ma{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!fn(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const o=t[i];if(!fn(o))return;const n={};for(const t of ga)n[t]=o[t];(un(o.properties)&&o.properties||[i]).forEach((t=>{t!==i&&e.has(t)||e.set(t,n)}))}))}_animateOptions(t,e){const i=e.options,o=function(t,e){if(!e)return;let i=t.options;if(i)return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i;t.options=e}(t,i);if(!o)return[];const n=this._createAnimations(o,i);return i.$shared&&function(t,e){const i=[],o=Object.keys(e);for(let e=0;e<o.length;e++){const n=t[o[e]];n&&n.active()&&i.push(n.wait())}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i}),(()=>{})),n}_createAnimations(t,e){const i=this._properties,o=[],n=t.$animations||(t.$animations={}),r=Object.keys(e),s=Date.now();let a;for(a=r.length-1;a>=0;--a){const l=r[a];if("$"===l.charAt(0))continue;if("options"===l){o.push(...this._animateOptions(t,e));continue}const c=e[l];let d=n[l];const h=i.get(l);if(d){if(h&&d.active()){d.update(h,c,s);continue}d.cancel()}h&&h.duration?(n[l]=d=new fa(h,t,l,c),o.push(d)):t[l]=c}return o}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(ha.add(this._chart,i),!0):void 0}}function ya(t,e){const i=t&&t.options||{},o=i.reverse,n=void 0===i.min?e:0,r=void 0===i.max?e:0;return{start:o?r:n,end:o?n:r}}function ba(t,e){const i=[],o=t._getSortedDatasetMetas(e);let n,r;for(n=0,r=o.length;n<r;++n)i.push(o[n].index);return i}function xa(t,e,i,o={}){const n=t.keys,r="single"===o.mode;let s,a,l,c;if(null!==e){for(s=0,a=n.length;s<a;++s){if(l=+n[s],l===i){if(o.all)continue;break}c=t.values[l],gn(c)&&(r||0===e||Fn(e)===Fn(c))&&(e+=c)}return e}}function va(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function wa(t,e,i){const o=t[e]||(t[e]={});return o[i]||(o[i]={})}function _a(t,e,i,o){for(const n of e.getMatchingVisibleMetas(o).reverse()){const e=t[n.index];if(i&&e>0||!i&&e<0)return n.index}return null}function Sa(t,e){const{chart:i,_cachedMeta:o}=t,n=i._stacks||(i._stacks={}),{iScale:r,vScale:s,index:a}=o,l=r.axis,c=s.axis,d=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(r,s,o),h=e.length;let p;for(let t=0;t<h;++t){const i=e[t],{[l]:r,[c]:h}=i;p=(i._stacks||(i._stacks={}))[c]=wa(n,d,r),p[a]=h,p._top=_a(p,s,!0,o.type),p._bottom=_a(p,s,!1,o.type)}}function ka(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function Ra(t,e){const i=t.controller.index,o=t.vScale&&t.vScale.axis;if(o){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[o]||void 0===e[o][i])return;delete e[o][i]}}}const Oa=t=>"reset"===t||"none"===t,$a=(t,e)=>e?t:Object.assign({},t);class Ea{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=va(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&Ra(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),o=(t,e,i,o)=>"x"===t?e:"r"===t?o:i,n=e.xAxisID=yn(i.xAxisID,ka(t,"x")),r=e.yAxisID=yn(i.yAxisID,ka(t,"y")),s=e.rAxisID=yn(i.rAxisID,ka(t,"r")),a=e.indexAxis,l=e.iAxisID=o(a,n,r,s),c=e.vAxisID=o(a,r,n,s);e.xScale=this.getScaleForId(n),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(s),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&xs(this._data,this),t._stacked&&Ra(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(fn(e))this._data=function(t){const e=Object.keys(t),i=new Array(e.length);let o,n,r;for(o=0,n=e.length;o<n;++o)r=e[o],i[o]={x:r,y:t[r]};return i}(e);else if(i!==e){if(i){xs(i,this);const t=this._cachedMeta;Ra(t),t._parsed=[]}e&&Object.isExtensible(e)&&(this,(o=e)._chartjs?o._chartjs.listeners.push(this):(Object.defineProperty(o,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[this]}}),bs.forEach((t=>{const e="_onData"+Pn(t),i=o[t];Object.defineProperty(o,t,{configurable:!0,enumerable:!1,value(...t){const n=i.apply(this,t);return o._chartjs.listeners.forEach((i=>{"function"==typeof i[e]&&i[e](...t)})),n}})})))),this._syncList=[],this._data=e}var o}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let o=!1;this._dataCheck();const n=e._stacked;e._stacked=va(e.vScale,e),e.stack!==i.stack&&(o=!0,Ra(e),e.stack=i.stack),this._resyncElements(t),(o||n!==e._stacked)&&Sa(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:o}=this,{iScale:n,_stacked:r}=i,s=n.axis;let a,l,c,d=0===t&&e===o.length||i._sorted,h=t>0&&i._parsed[t-1];if(!1===this._parsing)i._parsed=o,i._sorted=!0,c=o;else{c=un(o[t])?this.parseArrayData(i,o,t,e):fn(o[t])?this.parseObjectData(i,o,t,e):this.parsePrimitiveData(i,o,t,e);const n=()=>null===l[s]||h&&l[s]<h[s];for(a=0;a<e;++a)i._parsed[a+t]=l=c[a],d&&(n()&&(d=!1),h=l);i._sorted=d}r&&Sa(this,c)}parsePrimitiveData(t,e,i,o){const{iScale:n,vScale:r}=t,s=n.axis,a=r.axis,l=n.getLabels(),c=n===r,d=new Array(o);let h,p,u;for(h=0,p=o;h<p;++h)u=h+i,d[h]={[s]:c||n.parse(l[u],u),[a]:r.parse(e[u],u)};return d}parseArrayData(t,e,i,o){const{xScale:n,yScale:r}=t,s=new Array(o);let a,l,c,d;for(a=0,l=o;a<l;++a)c=a+i,d=e[c],s[a]={x:n.parse(d[0],c),y:r.parse(d[1],c)};return s}parseObjectData(t,e,i,o){const{xScale:n,yScale:r}=t,{xAxisKey:s="x",yAxisKey:a="y"}=this._parsing,l=new Array(o);let c,d,h,p;for(c=0,d=o;c<d;++c)h=c+i,p=e[h],l[c]={x:n.parse(Tn(p,s),h),y:r.parse(Tn(p,a),h)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const o=this.chart,n=this._cachedMeta,r=e[t.axis];return xa({keys:ba(o,!0),values:e._stacks[t.axis]},r,n.index,{mode:i})}updateRangeFromParsed(t,e,i,o){const n=i[e.axis];let r=null===n?NaN:n;const s=o&&i._stacks[e.axis];o&&s&&(o.values=s,r=xa(o,n,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const i=this._cachedMeta,o=i._parsed,n=i._sorted&&t===i.iScale,r=o.length,s=this._getOtherScale(t),a=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:ba(i,!0),values:null})(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:d}=function(t){const{min:e,max:i,minDefined:o,maxDefined:n}=t.getUserBounds();return{min:o?e:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}(s);let h,p;function u(){p=o[h];const e=p[s.axis];return!gn(p[t.axis])||c>e||d<e}for(h=0;h<r&&(u()||(this.updateRangeFromParsed(l,t,p,a),!n));++h);if(n)for(h=r-1;h>=0;--h)if(!u()){this.updateRangeFromParsed(l,t,p,a);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let o,n,r;for(o=0,n=e.length;o<n;++o)r=e[o][t.axis],gn(r)&&i.push(r);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,o=e.vScale,n=this.getParsed(t);return{label:i?""+i.getLabelForValue(n[i.axis]):"",value:o?""+o.getLabelForValue(n[o.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,o,n;return fn(t)?(e=t.top,i=t.right,o=t.bottom,n=t.left):e=i=o=n=t,{top:e,right:i,bottom:o,left:n,disabled:!1===t}}(yn(this.options.clip,function(t,e,i){if(!1===i)return!1;const o=ya(t,i),n=ya(e,i);return{top:n.end,right:o.end,bottom:n.start,left:o.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,o=i.data||[],n=e.chartArea,r=[],s=this._drawStart||0,a=this._drawCount||o.length-s,l=this.options.drawActiveElementsOnTop;let c;for(i.dataset&&i.dataset.draw(t,n,s,a),c=s;c<s+a;++c){const e=o[c];e.hidden||(e.active&&l?r.push(e):e.draw(t,n))}for(c=0;c<r.length;++c)r[c].draw(t,n)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const o=this.getDataset();let n;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];n=e.$context||(e.$context=function(t,e,i){return fs(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),n.parsed=this.getParsed(t),n.raw=o.data[t],n.index=n.dataIndex=t}else n=this.$context||(this.$context=function(t,e){return fs(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),n.dataset=o,n.index=n.datasetIndex=this.index;return n.active=!!e,n.mode=i,n}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const o="active"===e,n=this._cachedDataOpts,r=t+"-"+e,s=n[r],a=this.enableOptionSharing&&Mn(i);if(s)return $a(s,a);const l=this.chart.config,c=l.datasetElementScopeKeys(this._type,t),d=o?[`${t}Hover`,"hover",t,""]:[t,""],h=l.getOptionScopes(this.getDataset(),c),p=Object.keys(Ur.elements[t]),u=l.resolveNamedOptions(h,p,(()=>this.getContext(i,o)),d);return u.$shared&&(u.$shared=a,n[r]=Object.freeze($a(u,a))),u}_resolveAnimations(t,e,i){const o=this.chart,n=this._cachedDataOpts,r=`animation-${e}`,s=n[r];if(s)return s;let a;if(!1!==o.options.animation){const o=this.chart.config,n=o.datasetAnimationScopeKeys(this._type,e),r=o.getOptionScopes(this.getDataset(),n);a=o.createResolver(r,this.getContext(t,i,e))}const l=new ma(o,a&&a.animations);return a&&a._cacheable&&(n[r]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Oa(t)||this.chart._animationsDisabled}updateElement(t,e,i,o){Oa(o)?Object.assign(t,i):this._resolveAnimations(e,o).update(t,i)}updateSharedOptions(t,e,i){t&&!Oa(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,o){t.active=o;const n=this.getStyle(e,o);this._resolveAnimations(e,i,o).update(t,{options:!o&&this.getSharedOptions(n)||n})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const o=i.length,n=e.length,r=Math.min(n,o);r&&this.parse(0,r),n>o?this._insertElements(o,n-o,t):n<o&&this._removeElements(n,o-n)}_insertElements(t,e,i=!0){const o=this._cachedMeta,n=o.data,r=t+e;let s;const a=t=>{for(t.length+=e,s=t.length-1;s>=r;s--)t[s]=t[s-e]};for(a(n),s=t;s<r;++s)n[s]=new this.dataElementType;this._parsing&&a(o._parsed),this.parse(t,e),i&&this.updateElements(n,t,e,"reset")}updateElements(t,e,i,o){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const o=i._parsed.splice(t,e);i._stacked&&Ra(i,o)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,o]=t;this[e](i,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function Ta(t){const e=t.iScale,i=function(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let o=[];for(let e=0,n=i.length;e<n;e++)o=o.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=vs(o.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let o,n,r,s,a=e._length;const l=()=>{32767!==r&&-32768!==r&&(Mn(s)&&(a=Math.min(a,Math.abs(r-s)||a)),s=r)};for(o=0,n=i.length;o<n;++o)r=e.getPixelForValue(i[o]),l();for(s=void 0,o=0,n=e.ticks.length;o<n;++o)r=e.getPixelForTick(o),l();return a}function Pa(t,e,i,o){return un(t)?function(t,e,i,o){const n=i.parse(t[0],o),r=i.parse(t[1],o),s=Math.min(n,r),a=Math.max(n,r);let l=s,c=a;Math.abs(s)>Math.abs(a)&&(l=a,c=s),e[i.axis]=c,e._custom={barStart:l,barEnd:c,start:n,end:r,min:s,max:a}}(t,e,i,o):e[i.axis]=i.parse(t,o),e}function Ma(t,e,i,o){const n=t.iScale,r=t.vScale,s=n.getLabels(),a=n===r,l=[];let c,d,h,p;for(c=i,d=i+o;c<d;++c)p=e[c],h={},h[n.axis]=a||n.parse(s[c],c),l.push(Pa(p,h,r,c));return l}function Da(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function Aa(t,e,i,o){let n=e.borderSkipped;const r={};if(!n)return void(t.borderSkipped=r);const{start:s,end:a,reverse:l,top:c,bottom:d}=function(t){let e,i,o,n,r;return t.horizontal?(e=t.base>t.x,i="left",o="right"):(e=t.base<t.y,i="bottom",o="top"),e?(n="end",r="start"):(n="start",r="end"),{start:i,end:o,reverse:e,top:n,bottom:r}}(t);"middle"===n&&i&&(t.enableBorderRadius=!0,(i._top||0)===o?n=c:(i._bottom||0)===o?n=d:(r[Ca(d,s,a,l)]=!0,n=c)),r[Ca(n,s,a,l)]=!0,t.borderSkipped=r}function Ca(t,e,i,o){var n,r,s;return o?(s=i,t=Ia(t=(n=t)===(r=e)?s:n===s?r:n,i,e)):t=Ia(t,e,i),t}function Ia(t,e,i){return"start"===t?e:"end"===t?i:t}function ja(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}Ea.defaults={},Ea.prototype.datasetElementType=null,Ea.prototype.dataElementType=null;class La extends Ea{parsePrimitiveData(t,e,i,o){return Ma(t,e,i,o)}parseArrayData(t,e,i,o){return Ma(t,e,i,o)}parseObjectData(t,e,i,o){const{iScale:n,vScale:r}=t,{xAxisKey:s="x",yAxisKey:a="y"}=this._parsing,l="x"===n.axis?s:a,c="x"===r.axis?s:a,d=[];let h,p,u,f;for(h=i,p=i+o;h<p;++h)f=e[h],u={},u[n.axis]=n.parse(Tn(f,l),h),d.push(Pa(Tn(f,c),u,r,h));return d}updateRangeFromParsed(t,e,i,o){super.updateRangeFromParsed(t,e,i,o);const n=i._custom;n&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,n.min),t.max=Math.max(t.max,n.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:o}=e,n=this.getParsed(t),r=n._custom,s=Da(r)?"["+r.start+", "+r.end+"]":""+o.getLabelForValue(n[o.axis]);return{label:""+i.getLabelForValue(n[i.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize(),this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,o){const n="reset"===o,{index:r,_cachedMeta:{vScale:s}}=this,a=s.getBasePixel(),l=s.isHorizontal(),c=this._getRuler(),d=this.resolveDataElementOptions(e,o),h=this.getSharedOptions(d),p=this.includeOptions(o,h);this.updateSharedOptions(h,o,d);for(let d=e;d<e+i;d++){const e=this.getParsed(d),i=n||pn(e[s.axis])?{base:a,head:a}:this._calculateBarValuePixels(d),u=this._calculateBarIndexPixels(d,c),f=(e._stacks||{})[s.axis],g={horizontal:l,base:i.base,enableBorderRadius:!f||Da(e._custom)||r===f._top||r===f._bottom,x:l?i.head:u.center,y:l?u.center:i.head,height:l?u.size:Math.abs(i.size),width:l?Math.abs(i.size):u.size};p&&(g.options=h||this.resolveDataElementOptions(d,t[d].active?"active":o));const m=g.options||t[d].options;Aa(g,m,f,r),ja(g,m,c.ratio),this.updateElement(t[d],d,g,o)}}_getStacks(t,e){const i=this._cachedMeta.iScale,o=i.getMatchingVisibleMetas(this._type),n=i.options.stacked,r=o.length,s=[];let a,l;for(a=0;a<r;++a)if(l=o[a],l.controller.options.grouped){if(void 0!==e){const t=l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];if(pn(t)||isNaN(t))continue}if((!1===n||-1===s.indexOf(l.stack)||void 0===n&&void 0===l.stack)&&s.push(l.stack),l.index===t)break}return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){const o=this._getStacks(t,i),n=void 0!==e?o.indexOf(e):-1;return-1===n?o.length-1:n}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,o=[];let n,r;for(n=0,r=e.data.length;n<r;++n)o.push(i.getPixelForValue(this.getParsed(n)[i.axis],n));const s=t.barThickness;return{min:s||Ta(e),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i},options:{base:o,minBarLength:n}}=this,r=o||0,s=this.getParsed(t),a=s._custom,l=Da(a);let c,d,h=s[e.axis],p=0,u=i?this.applyStack(e,s,i):h;u!==h&&(p=u-h,u=h),l&&(h=a.barStart,u=a.barEnd-a.barStart,0!==h&&Fn(h)!==Fn(a.barEnd)&&(p=0),p+=h);const f=pn(o)||l?p:o;let g=e.getPixelForValue(f);if(c=this.chart.getDataVisibility(t)?e.getPixelForValue(p+u):g,d=c-g,Math.abs(d)<n&&(d=function(t,e,i){return 0!==t?Fn(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}(d,e,r)*n,h===r&&(g-=d/2),c=g+d),g===e.getPixelForValue(r)){const t=Fn(d)*e.getLineWidthForValue(r)/2;g+=t,d-=t}return{size:d,base:g,head:c,center:c+d/2}}_calculateBarIndexPixels(t,e){const i=e.scale,o=this.options,n=o.skipNull,r=yn(o.maxBarThickness,1/0);let s,a;if(e.grouped){const i=n?this._getStackCount(t):e.stackCount,l="flex"===o.barThickness?function(t,e,i,o){const n=e.pixels,r=n[t];let s=t>0?n[t-1]:null,a=t<n.length-1?n[t+1]:null;const l=i.categoryPercentage;null===s&&(s=r-(null===a?e.end-e.start:a-r)),null===a&&(a=r+r-s);const c=r-(r-Math.min(s,a))/2*l;return{chunk:Math.abs(a-s)/2*l/o,ratio:i.barPercentage,start:c}}(t,e,o,i):function(t,e,i,o){const n=i.barThickness;let r,s;return pn(n)?(r=e.min*i.categoryPercentage,s=i.barPercentage):(r=n*o,s=1),{chunk:r/o,ratio:s,start:e.pixels[t]-r/2}}(t,e,o,i),c=this._getStackIndex(this.index,this._cachedMeta.stack,n?t:void 0);s=l.start+l.chunk*c+l.chunk/2,a=Math.min(r,l.chunk*l.ratio)}else s=i.getPixelForValue(this.getParsed(t)[i.axis],t),a=Math.min(r,e.min*e.ratio);return{base:s-a/2,head:s+a/2,center:s,size:a}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,o=i.length;let n=0;for(;n<o;++n)null!==this.getParsed(n)[e.axis]&&i[n].draw(this._ctx)}}La.id="bar",La.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},La.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class Na extends Ea{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,o){const n=super.parsePrimitiveData(t,e,i,o);for(let t=0;t<n.length;t++)n[t]._custom=this.resolveDataElementOptions(t+i).radius;return n}parseArrayData(t,e,i,o){const n=super.parseArrayData(t,e,i,o);for(let t=0;t<n.length;t++){const o=e[i+t];n[t]._custom=yn(o[2],this.resolveDataElementOptions(t+i).radius)}return n}parseObjectData(t,e,i,o){const n=super.parseObjectData(t,e,i,o);for(let t=0;t<n.length;t++){const o=e[i+t];n[t]._custom=yn(o&&o.r&&+o.r,this.resolveDataElementOptions(t+i).radius)}return n}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,{xScale:i,yScale:o}=e,n=this.getParsed(t),r=i.getLabelForValue(n.x),s=o.getLabelForValue(n.y),a=n._custom;return{label:e.label,value:"("+r+", "+s+(a?", "+a:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,o){const n="reset"===o,{iScale:r,vScale:s}=this._cachedMeta,a=this.resolveDataElementOptions(e,o),l=this.getSharedOptions(a),c=this.includeOptions(o,l),d=r.axis,h=s.axis;for(let a=e;a<e+i;a++){const e=t[a],i=!n&&this.getParsed(a),l={},p=l[d]=n?r.getPixelForDecimal(.5):r.getPixelForValue(i[d]),u=l[h]=n?s.getBasePixel():s.getPixelForValue(i[h]);l.skip=isNaN(p)||isNaN(u),c&&(l.options=this.resolveDataElementOptions(a,e.active?"active":o),n&&(l.options.radius=0)),this.updateElement(e,a,l,o)}this.updateSharedOptions(l,o,a)}resolveDataElementOptions(t,e){const i=this.getParsed(t);let o=super.resolveDataElementOptions(t,e);o.$shared&&(o=Object.assign({},o,{$shared:!1}));const n=o.radius;return"active"!==e&&(o.radius=0),o.radius+=yn(i&&i._custom,n),o}}Na.id="bubble",Na.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},Na.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class Ba extends Ea{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,o=this._cachedMeta;if(!1===this._parsing)o._parsed=i;else{let n,r,s=t=>+i[t];if(fn(i[t])){const{key:t="value"}=this._parsing;s=e=>+Tn(i[e],t)}for(n=t,r=t+e;n<r;++n)o._parsed[n]=s(n)}}_getRotation(){return Gn(this.options.rotation-90)}_getCircumference(){return Gn(this.options.circumference)}_getRotationExtents(){let t=In,e=-In;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){const o=this.chart.getDatasetMeta(i).controller,n=o._getRotation(),r=o._getCircumference();t=Math.min(t,n),e=Math.max(e,n+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,o=this._cachedMeta,n=o.data,r=this.getMaxBorderWidth()+this.getMaxOffset(n)+this.options.spacing,s=Math.max((Math.min(i.width,i.height)-r)/2,0),a=Math.min((c=s,"string"==typeof(l=this.options.cutout)&&l.endsWith("%")?parseFloat(l)/100:l/c),1);var l,c;const d=this._getRingWeight(this.index),{circumference:h,rotation:p}=this._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:g,offsetY:m}=function(t,e,i){let o=1,n=1,r=0,s=0;if(e<In){const a=t,l=a+e,c=Math.cos(a),d=Math.sin(a),h=Math.cos(l),p=Math.sin(l),u=(t,e,o)=>er(t,a,l,!0)?1:Math.max(e,e*i,o,o*i),f=(t,e,o)=>er(t,a,l,!0)?-1:Math.min(e,e*i,o,o*i),g=u(0,c,h),m=u(Bn,d,p),y=f(Cn,c,h),b=f(Cn+Bn,d,p);o=(g-y)/2,n=(m-b)/2,r=-(g+y)/2,s=-(m+b)/2}return{ratioX:o,ratioY:n,offsetX:r,offsetY:s}}(p,h,a),y=(i.width-r)/u,b=(i.height-r)/f,x=Math.max(Math.min(y,b)/2,0),v=bn(this.options.radius,x),w=(v-Math.max(v*a,0))/this._getVisibleDatasetWeightTotal();this.offsetX=g*v,this.offsetY=m*v,o.total=this.calculateTotal(),this.outerRadius=v-w*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-w*d,0),this.updateElements(n,0,n.length,t)}_circumference(t,e){const i=this.options,o=this._cachedMeta,n=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===o._parsed[t]||o.data[t].hidden?0:this.calculateCircumference(o._parsed[t]*n/In)}updateElements(t,e,i,o){const n="reset"===o,r=this.chart,s=r.chartArea,a=r.options.animation,l=(s.left+s.right)/2,c=(s.top+s.bottom)/2,d=n&&a.animateScale,h=d?0:this.innerRadius,p=d?0:this.outerRadius,u=this.resolveDataElementOptions(e,o),f=this.getSharedOptions(u),g=this.includeOptions(o,f);let m,y=this._getRotation();for(m=0;m<e;++m)y+=this._circumference(m,n);for(m=e;m<e+i;++m){const e=this._circumference(m,n),i=t[m],r={x:l+this.offsetX,y:c+this.offsetY,startAngle:y,endAngle:y+e,circumference:e,outerRadius:p,innerRadius:h};g&&(r.options=f||this.resolveDataElementOptions(m,i.active?"active":o)),y+=e,this.updateElement(i,m,r,o)}this.updateSharedOptions(f,o,u)}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,o=0;for(i=0;i<e.length;i++){const n=t._parsed[i];null===n||isNaN(n)||!this.chart.getDataVisibility(i)||e[i].hidden||(o+=Math.abs(n))}return o}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?In*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,o=i.data.labels||[],n=ea(e._parsed[t],i.options.locale);return{label:o[t]||"",value:n}}getMaxBorderWidth(t){let e=0;const i=this.chart;let o,n,r,s,a;if(!t)for(o=0,n=i.data.datasets.length;o<n;++o)if(i.isDatasetVisible(o)){r=i.getDatasetMeta(o),t=r.data,s=r.controller;break}if(!t)return 0;for(o=0,n=t.length;o<n;++o)a=s.resolveDataElementOptions(o),"inner"!==a.borderAlign&&(e=Math.max(e,a.borderWidth||0,a.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,o=t.length;i<o;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(yn(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}Ba.id="doughnut",Ba.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},Ba.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},Ba.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,o)=>{const n=t.getDatasetMeta(0).controller.getStyle(o);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const i=": "+t.formattedValue;return un(e)?(e=e.slice(),e[0]+=i):e+=i,e}}}}};class za extends Ea{initialize(){this.enableOptionSharing=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:o=[],_dataset:n}=e,r=this.chart._animationsDisabled;let{start:s,count:a}=function(t,e,i){const o=e.length;let n=0,r=o;if(t._sorted){const{iScale:s,_parsed:a}=t,l=s.axis,{min:c,max:d,minDefined:h,maxDefined:p}=s.getUserBounds();h&&(n=ir(Math.min(ms(a,s.axis,c).lo,i?o:ms(e,l,s.getPixelForValue(c)).lo),0,o-1)),r=p?ir(Math.max(ms(a,s.axis,d).hi+1,i?0:ms(e,l,s.getPixelForValue(d)).hi+1),n,o)-n:o-n}return{start:n,count:r}}(e,o,r);this._drawStart=s,this._drawCount=a,function(t){const{xScale:e,yScale:i,_scaleRanges:o}=t,n={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!o)return t._scaleRanges=n,!0;const r=o.xmin!==e.min||o.xmax!==e.max||o.ymin!==i.min||o.ymax!==i.max;return Object.assign(o,n),r}(e)&&(s=0,a=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!n._decimated,i.points=o;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:l},t),this.updateElements(o,s,a,t)}updateElements(t,e,i,o){const n="reset"===o,{iScale:r,vScale:s,_stacked:a,_dataset:l}=this._cachedMeta,c=this.resolveDataElementOptions(e,o),d=this.getSharedOptions(c),h=this.includeOptions(o,d),p=r.axis,u=s.axis,{spanGaps:f,segment:g}=this.options,m=Vn(f)?f:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||n||"none"===o;let b=e>0&&this.getParsed(e-1);for(let c=e;c<e+i;++c){const e=t[c],i=this.getParsed(c),f=y?e:{},x=pn(i[u]),v=f[p]=r.getPixelForValue(i[p],c),w=f[u]=n||x?s.getBasePixel():s.getPixelForValue(a?this.applyStack(s,i,a):i[u],c);f.skip=isNaN(v)||isNaN(w)||x,f.stop=c>0&&i[p]-b[p]>m,g&&(f.parsed=i,f.raw=l.data[c]),h&&(f.options=d||this.resolveDataElementOptions(c,e.active?"active":o)),y||this.updateElement(e,c,f,o),b=i}this.updateSharedOptions(d,o,c)}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,o=t.data||[];if(!o.length)return i;const n=o[0].size(this.resolveDataElementOptions(0)),r=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,n,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}za.id="line",za.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},za.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class Wa extends Ea{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,o=i.data.labels||[],n=ea(e._parsed[t].r,i.options.locale);return{label:o[t]||"",value:n}}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,o=Math.min(e.right-e.left,e.bottom-e.top),n=Math.max(o/2,0),r=(n-Math.max(i.cutoutPercentage?n/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=n-r*this.index,this.innerRadius=this.outerRadius-r}updateElements(t,e,i,o){const n="reset"===o,r=this.chart,s=this.getDataset(),a=r.options.animation,l=this._cachedMeta.rScale,c=l.xCenter,d=l.yCenter,h=l.getIndexAngle(0)-.5*Cn;let p,u=h;const f=360/this.countVisibleElements();for(p=0;p<e;++p)u+=this._computeAngle(p,o,f);for(p=e;p<e+i;p++){const e=t[p];let i=u,g=u+this._computeAngle(p,o,f),m=r.getDataVisibility(p)?l.getDistanceFromCenterForValue(s.data[p]):0;u=g,n&&(a.animateScale&&(m=0),a.animateRotate&&(i=g=h));const y={x:c,y:d,innerRadius:0,outerRadius:m,startAngle:i,endAngle:g,options:this.resolveDataElementOptions(p,e.active?"active":o)};this.updateElement(e,p,y,o)}}countVisibleElements(){const t=this.getDataset(),e=this._cachedMeta;let i=0;return e.data.forEach(((e,o)=>{!isNaN(t.data[o])&&this.chart.getDataVisibility(o)&&i++})),i}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Gn(this.resolveDataElementOptions(t,e).angle||i):0}}Wa.id="polarArea",Wa.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},Wa.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,o)=>{const n=t.getDatasetMeta(0).controller.getStyle(o);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class Ha extends Ba{}Ha.id="pie",Ha.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class Fa extends Ea{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}update(t){const e=this._cachedMeta,i=e.dataset,o=e.data||[],n=e.iScale.getLabels();if(i.points=o,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const r={_loop:!0,_fullLoop:n.length===o.length,options:e};this.updateElement(i,void 0,r,t)}this.updateElements(o,0,o.length,t)}updateElements(t,e,i,o){const n=this.getDataset(),r=this._cachedMeta.rScale,s="reset"===o;for(let a=e;a<e+i;a++){const e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":o),l=r.getPointPositionForValue(a,n.data[a]),c=s?r.xCenter:l.x,d=s?r.yCenter:l.y,h={x:c,y:d,angle:l.angle,skip:isNaN(c)||isNaN(d),options:i};this.updateElement(e,a,h,o)}}}Fa.id="radar",Fa.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},Fa.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Ua extends za{}Ua.id="scatter",Ua.defaults={showLine:!1,fill:!1},Ua.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Va=Object.freeze({__proto__:null,BarController:La,BubbleController:Na,DoughnutController:Ba,LineController:za,PolarAreaController:Wa,PieController:Ha,RadarController:Fa,ScatterController:Ua});function Ya(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class qa{constructor(t){this.options=t||{}}formats(){return Ya()}parse(t,e){return Ya()}format(t,e){return Ya()}add(t,e,i){return Ya()}diff(t,e,i){return Ya()}startOf(t,e,i){return Ya()}endOf(t,e){return Ya()}}qa.override=function(t){Object.assign(qa.prototype,t)};var Ga={_date:qa};function Ka(t,e){return"native"in t?{x:t.x,y:t.y}:Ys(t,e)}function Xa(t,e,i,o){const{controller:n,data:r,_sorted:s}=t,a=n._cachedMeta.iScale;if(a&&e===a.axis&&"r"!==e&&s&&r.length){const t=a._reversePixels?ys:ms;if(!o)return t(r,e,i);if(n._sharedOptions){const o=r[0],n="function"==typeof o.getRange&&o.getRange(e);if(n){const o=t(r,e,i-n),s=t(r,e,i+n);return{lo:o.lo,hi:s.hi}}}}return{lo:0,hi:r.length-1}}function Ja(t,e,i,o,n){const r=t.getSortedVisibleDatasetMetas(),s=i[e];for(let t=0,i=r.length;t<i;++t){const{index:i,data:a}=r[t],{lo:l,hi:c}=Xa(r[t],e,s,n);for(let t=l;t<=c;++t){const e=a[t];e.skip||o(e,i,t)}}}function Za(t,e,i,o){const n=[];return Xr(e,t.chartArea,t._minPadding)?(Ja(t,i,e,(function(t,i,r){t.inRange(e.x,e.y,o)&&n.push({element:t,datasetIndex:i,index:r})}),!0),n):n}function Qa(t,e,i,o,n){return Xr(e,t.chartArea,t._minPadding)?"r"!==i||o?function(t,e,i,o,n){let r=[];const s=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,o){const n=e?Math.abs(t.x-o.x):0,r=i?Math.abs(t.y-o.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2))}}(i);let a=Number.POSITIVE_INFINITY;return Ja(t,i,e,(function(i,l,c){const d=i.inRange(e.x,e.y,n);if(o&&!d)return;const h=i.getCenterPoint(n);if(!Xr(h,t.chartArea,t._minPadding)&&!d)return;const p=s(e,h);p<a?(r=[{element:i,datasetIndex:l,index:c}],a=p):p===a&&r.push({element:i,datasetIndex:l,index:c})})),r}(t,e,i,o,n):function(t,e,i,o){let n=[];return Ja(t,i,e,(function(t,i,r){const{startAngle:s,endAngle:a}=t.getProps(["startAngle","endAngle"],o),{angle:l}=Jn(t,{x:e.x,y:e.y});er(l,s,a)&&n.push({element:t,datasetIndex:i,index:r})})),n}(t,e,i,n):[]}function tl(t,e,i,o){const n=Ka(e,t),r=[],s=i.axis,a="x"===s?"inXRange":"inYRange";let l=!1;return function(t,e){const i=t.getSortedVisibleDatasetMetas();let o,n,r;for(let t=0,s=i.length;t<s;++t){({index:o,data:n}=i[t]);for(let t=0,i=n.length;t<i;++t)r=n[t],r.skip||e(r,o,t)}}(t,((t,e,i)=>{t[a](n[s],o)&&r.push({element:t,datasetIndex:e,index:i}),t.inRange(n.x,n.y,o)&&(l=!0)})),i.intersect&&!l?[]:r}var el={modes:{index(t,e,i,o){const n=Ka(e,t),r=i.axis||"x",s=i.intersect?Za(t,n,r,o):Qa(t,n,r,!1,o),a=[];return s.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=s[0].index,i=t.data[e];i&&!i.skip&&a.push({element:i,datasetIndex:t.index,index:e})})),a):[]},dataset(t,e,i,o){const n=Ka(e,t),r=i.axis||"xy";let s=i.intersect?Za(t,n,r,o):Qa(t,n,r,!1,o);if(s.length>0){const e=s[0].datasetIndex,i=t.getDatasetMeta(e).data;s=[];for(let t=0;t<i.length;++t)s.push({element:i[t],datasetIndex:e,index:t})}return s},point:(t,e,i,o)=>Za(t,Ka(e,t),i.axis||"xy",o),nearest:(t,e,i,o)=>Qa(t,Ka(e,t),i.axis||"xy",i.intersect,o),x:(t,e,i,o)=>tl(t,e,{axis:"x",intersect:i.intersect},o),y:(t,e,i,o)=>tl(t,e,{axis:"y",intersect:i.intersect},o)}};const il=["left","top","right","bottom"];function ol(t,e){return t.filter((t=>t.pos===e))}function nl(t,e){return t.filter((t=>-1===il.indexOf(t.pos)&&t.box.axis===e))}function rl(t,e){return t.sort(((t,i)=>{const o=e?i:t,n=e?t:i;return o.weight===n.weight?o.index-n.index:o.weight-n.weight}))}function sl(t,e,i,o){return Math.max(t[i],e[i])+Math.max(t[o],e[o])}function al(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function ll(t,e,i,o){const{pos:n,box:r}=i,s=t.maxPadding;if(!fn(n)){i.size&&(t[n]-=i.size);const e=o[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?r.height:r.width),i.size=e.size/e.count,t[n]+=i.size}r.getPadding&&al(s,r.getPadding());const a=Math.max(0,e.outerWidth-sl(s,t,"left","right")),l=Math.max(0,e.outerHeight-sl(s,t,"top","bottom")),c=a!==t.w,d=l!==t.h;return t.w=a,t.h=l,i.horizontal?{same:c,other:d}:{same:d,other:c}}function cl(t,e){const i=e.maxPadding;return function(t){const o={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{o[t]=Math.max(e[t],i[t])})),o}(t?["left","right"]:["top","bottom"])}function dl(t,e,i,o){const n=[];let r,s,a,l,c,d;for(r=0,s=t.length,c=0;r<s;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,cl(a.horizontal,e));const{same:s,other:h}=ll(e,i,a,o);c|=s&&n.length,d=d||h,l.fullSize||n.push(a)}return c&&dl(n,e,i,o)||d}function hl(t,e,i,o,n){t.top=i,t.left=e,t.right=e+o,t.bottom=i+n,t.width=o,t.height=n}function pl(t,e,i,o){const n=i.padding;let{x:r,y:s}=e;for(const a of t){const t=a.box,l=o[a.stack]||{count:1,placed:0,weight:1},c=a.stackWeight/l.weight||1;if(a.horizontal){const o=e.w*c,r=l.size||t.height;Mn(l.start)&&(s=l.start),t.fullSize?hl(t,n.left,s,i.outerWidth-n.right-n.left,r):hl(t,e.left+l.placed,s,o,r),l.start=s,l.placed+=o,s=t.bottom}else{const o=e.h*c,s=l.size||t.width;Mn(l.start)&&(r=l.start),t.fullSize?hl(t,r,n.top,s,i.outerHeight-n.bottom-n.top):hl(t,r,e.top+l.placed,s,o),l.start=r,l.placed+=o,r=t.right}}e.x=r,e.y=s}Ur.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var ul={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,o){if(!t)return;const n=hs(t.options.layout.padding),r=Math.max(e-n.width,0),s=Math.max(i-n.height,0),a=function(t){const e=function(t){const e=[];let i,o,n,r,s,a;for(i=0,o=(t||[]).length;i<o;++i)n=t[i],({position:r,options:{stack:s,stackWeight:a=1}}=n),e.push({index:i,box:n,pos:r,horizontal:n.isHorizontal(),weight:n.weight,stack:s&&r+s,stackWeight:a});return e}(t),i=rl(e.filter((t=>t.box.fullSize)),!0),o=rl(ol(e,"left"),!0),n=rl(ol(e,"right")),r=rl(ol(e,"top"),!0),s=rl(ol(e,"bottom")),a=nl(e,"x"),l=nl(e,"y");return{fullSize:i,leftAndTop:o.concat(r),rightAndBottom:n.concat(l).concat(s).concat(a),chartArea:ol(e,"chartArea"),vertical:o.concat(n).concat(l),horizontal:r.concat(s).concat(a)}}(t.boxes),l=a.vertical,c=a.horizontal;vn(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const d=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,h=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:r,availableHeight:s,vBoxMaxWidth:r/2/d,hBoxMaxHeight:s/2}),p=Object.assign({},n);al(p,hs(o));const u=Object.assign({maxPadding:p,w:r,h:s,x:n.left,y:n.top},n),f=function(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:o,stackWeight:n}=i;if(!t||!il.includes(o))continue;const r=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=n}return e}(t),{vBoxMaxWidth:o,hBoxMaxHeight:n}=e;let r,s,a;for(r=0,s=t.length;r<s;++r){a=t[r];const{fullSize:s}=a.box,l=i[a.stack],c=l&&a.stackWeight/l.weight;a.horizontal?(a.width=c?c*o:s&&e.availableWidth,a.height=n):(a.width=o,a.height=c?c*n:s&&e.availableHeight)}return i}(l.concat(c),h);dl(a.fullSize,u,h,f),dl(l,u,h,f),dl(c,u,h,f)&&dl(l,u,h,f),function(t){const e=t.maxPadding;function i(i){const o=Math.max(e[i]-t[i],0);return t[i]+=o,o}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(u),pl(a.leftAndTop,u,h,f),u.x+=u.w,u.y+=u.h,pl(a.rightAndBottom,u,h,f),t.chartArea={left:u.left,top:u.top,right:u.left+u.w,bottom:u.top+u.h,height:u.h,width:u.w},vn(a.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(u.w,u.h,{left:0,top:0,right:0,bottom:0})}))}};class fl{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,o){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,o?Math.floor(e/o):i)}}isAttached(t){return!0}updateConfig(t){}}class gl extends fl{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ml={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},yl=t=>null===t||""===t,bl=!!Ks&&{passive:!0};function xl(t,e,i){t.canvas.removeEventListener(e,i,bl)}function vl(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function wl(t,e,i){const o=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||vl(i.addedNodes,o),e=e&&!vl(i.removedNodes,o);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}function _l(t,e,i){const o=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||vl(i.removedNodes,o),e=e&&!vl(i.addedNodes,o);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}const Sl=new Map;let kl=0;function Rl(){const t=window.devicePixelRatio;t!==kl&&(kl=t,Sl.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function Ol(t,e,i){const o=t.canvas,n=o&&Ws(o);if(!n)return;const r=an(((t,e)=>{const o=n.clientWidth;i(t,e),o<n.clientWidth&&i()}),window),s=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,o=e.contentRect.height;0===i&&0===o||r(i,o)}));return s.observe(n),function(t,e){Sl.size||window.addEventListener("resize",Rl),Sl.set(t,e)}(t,r),s}function $l(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){Sl.delete(t),Sl.size||window.removeEventListener("resize",Rl)}(t)}function El(t,e,i){const o=t.canvas,n=an((e=>{null!==t.ctx&&i(function(t,e){const i=ml[t.type]||t.type,{x:o,y:n}=Ys(t,e);return{type:i,chart:e,native:t,x:void 0!==o?o:null,y:void 0!==n?n:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,i){t.addEventListener(e,i,bl)}(o,e,n),n}class Tl extends fl{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,o=t.getAttribute("height"),n=t.getAttribute("width");if(t.$chartjs={initial:{height:o,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",yl(n)){const e=Xs(t,"width");void 0!==e&&(t.width=e)}if(yl(o))if(""===t.style.height)t.height=t.width/(e||2);else{const e=Xs(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const i=e.$chartjs.initial;["height","width"].forEach((t=>{const o=i[t];pn(o)?e.removeAttribute(t):e.setAttribute(t,o)}));const o=i.style||{};return Object.keys(o).forEach((t=>{e.style[t]=o[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,i){this.removeEventListener(t,e);const o=t.$proxies||(t.$proxies={}),n={attach:wl,detach:_l,resize:Ol}[e]||El;o[e]=n(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),o=i[e];o&&(({attach:$l,detach:$l,resize:$l}[e]||xl)(t,e,o),i[e]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,o){return function(t,e,i,o){const n=Fs(t),r=Vs(n,"margin"),s=Hs(n.maxWidth,t,"clientWidth")||Ln,a=Hs(n.maxHeight,t,"clientHeight")||Ln,l=function(t,e,i){let o,n;if(void 0===e||void 0===i){const r=Ws(t);if(r){const t=r.getBoundingClientRect(),s=Fs(r),a=Vs(s,"border","width"),l=Vs(s,"padding");e=t.width-l.width-a.width,i=t.height-l.height-a.height,o=Hs(s.maxWidth,r,"clientWidth"),n=Hs(s.maxHeight,r,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:o||Ln,maxHeight:n||Ln}}(t,e,i);let{width:c,height:d}=l;if("content-box"===n.boxSizing){const t=Vs(n,"border","width"),e=Vs(n,"padding");c-=e.width+t.width,d-=e.height+t.height}return c=Math.max(0,c-r.width),d=Math.max(0,o?Math.floor(c/o):d-r.height),c=qs(Math.min(c,s,l.maxWidth)),d=qs(Math.min(d,a,l.maxHeight)),c&&!d&&(d=qs(c/2)),{width:c,height:d}}(t,e,i,o)}isAttached(t){const e=Ws(t);return!(!e||!e.isConnected)}}class Pl{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Vn(this.x)&&Vn(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const o={};return t.forEach((t=>{o[t]=i[t]&&i[t].active()?i[t]._to:this[t]})),o}}Pl.defaults={},Pl.defaultRoutes=void 0;const Ml={values:t=>un(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const o=this.chart.options.locale;let n,r=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(n="scientific"),r=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t)),i}(t,i)}const s=Hn(Math.abs(r)),a=Math.max(Math.min(-1*Math.floor(s),20),0),l={notation:n,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),ea(t,o,l)},logarithmic(t,e,i){if(0===t)return"0";const o=t/Math.pow(10,Math.floor(Hn(t)));return 1===o||2===o||5===o?Ml.numeric.call(this,t,e,i):""}};var Dl={formatters:Ml};function Al(t,e,i,o,n){const r=yn(o,0),s=Math.min(yn(n,t.length),t.length);let a,l,c,d=0;for(i=Math.ceil(i),n&&(a=n-o,i=a/Math.floor(a/i)),c=r;c<0;)d++,c=Math.round(r+d*i);for(l=Math.max(r,0);l<s;l++)l===c&&(e.push(t[l]),d++,c=Math.round(r+d*i))}Ur.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Dl.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),Ur.route("scale.ticks","color","","color"),Ur.route("scale.grid","color","","borderColor"),Ur.route("scale.grid","borderColor","","borderColor"),Ur.route("scale.title","color","","color"),Ur.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),Ur.describe("scales",{_fallback:"scale"}),Ur.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const Cl=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function Il(t,e){const i=[],o=t.length/e,n=t.length;let r=0;for(;r<n;r+=o)i.push(t[Math.floor(r)]);return i}function jl(t,e,i){const o=t.ticks.length,n=Math.min(e,o-1),r=t._startPixel,s=t._endPixel,a=1e-6;let l,c=t.getPixelForTick(n);if(!(i&&(l=1===o?Math.max(c-r,s-c):0===e?(t.getPixelForTick(1)-c)/2:(c-t.getPixelForTick(n-1))/2,c+=n<e?l:-l,c<r-a||c>s+a)))return c}function Ll(t){return t.drawTicks?t.tickLength:0}function Nl(t,e){if(!t.display)return 0;const i=ps(t.font,e),o=hs(t.padding);return(un(t.text)?t.text.length:1)*i.lineHeight+o.height}function Bl(t,e,i){let o=ln(t);return(i&&"right"!==e||!i&&"right"===e)&&(o=(t=>"left"===t?"right":"right"===t?"left":t)(o)),o}class zl extends Pl{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:o}=this;return t=mn(t,Number.POSITIVE_INFINITY),e=mn(e,Number.NEGATIVE_INFINITY),i=mn(i,Number.POSITIVE_INFINITY),o=mn(o,Number.NEGATIVE_INFINITY),{min:mn(t,i),max:mn(e,o),minDefined:gn(t),maxDefined:gn(e)}}getMinMax(t){let e,{min:i,max:o,minDefined:n,maxDefined:r}=this.getUserBounds();if(n&&r)return{min:i,max:o};const s=this.getMatchingVisibleMetas();for(let a=0,l=s.length;a<l;++a)e=s[a].controller.getMinMax(this,t),n||(i=Math.min(i,e.min)),r||(o=Math.max(o,e.max));return i=r&&i>o?o:i,o=n&&i>o?i:o,{min:mn(i,mn(o,i)),max:mn(o,mn(i,o))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){xn(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:o,grace:n,ticks:r}=this.options,s=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=function(t,e,i){const{min:o,max:n}=t,r=bn(e,(n-o)/2),s=(t,e)=>i&&0===t?0:t+e;return{min:s(o,-Math.abs(r)),max:s(n,r)}}(this,n,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const a=s<this.ticks.length;this._convertTicksToLabels(a?Il(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||"auto"===r.source)&&(this.ticks=function(t,e){const i=t.options.ticks,o=i.maxTicksLimit||function(t){const e=t.options.offset,i=t._tickSize(),o=t._length/i+(e?0:1),n=t._maxLength/i;return Math.floor(Math.min(o,n))}(t),n=i.major.enabled?function(t){const e=[];let i,o;for(i=0,o=t.length;i<o;i++)t[i].major&&e.push(i);return e}(e):[],r=n.length,s=n[0],a=n[r-1],l=[];if(r>o)return function(t,e,i,o){let n,r=0,s=i[0];for(o=Math.ceil(o),n=0;n<t.length;n++)n===s&&(e.push(t[n]),r++,s=i[r*o])}(e,l,n,r/o),l;const c=function(t,e,i){const o=function(t){const e=t.length;let i,o;if(e<2)return!1;for(o=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==o)return!1;return o}(t),n=e.length/i;if(!o)return Math.max(n,1);const r=function(t){const e=[],i=Math.sqrt(t);let o;for(o=1;o<i;o++)t%o==0&&(e.push(o),e.push(t/o));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}(o);for(let t=0,e=r.length-1;t<e;t++){const e=r[t];if(e>n)return e}return Math.max(n,1)}(n,e,o);if(r>0){let t,i;const o=r>1?Math.round((a-s)/(r-1)):null;for(Al(e,l,c,pn(o)?0:s-o,s),t=0,i=r-1;t<i;t++)Al(e,l,c,n[t],n[t+1]);return Al(e,l,c,a,pn(o)?e.length:a+o),l}return Al(e,l,c),l}(this,this.ticks),this._labelSizes=null),a&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){xn(this.options.afterUpdate,[this])}beforeSetDimensions(){xn(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){xn(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),xn(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){xn(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,o,n;for(i=0,o=t.length;i<o;i++)n=t[i],n.label=xn(e.callback,[n.value,i,t],this)}afterTickToLabelConversion(){xn(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){xn(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=this.ticks.length,o=e.minRotation||0,n=e.maxRotation;let r,s,a,l=o;if(!this._isVisible()||!e.display||o>=n||i<=1||!this.isHorizontal())return void(this.labelRotation=o);const c=this._getLabelSizes(),d=c.widest.width,h=c.highest.height,p=ir(this.chart.width-d,0,this.maxWidth);r=t.offset?this.maxWidth/i:p/(i-1),d+6>r&&(r=p/(i-(t.offset?.5:1)),s=this.maxHeight-Ll(t.grid)-e.padding-Nl(t.title,this.chart.options.font),a=Math.sqrt(d*d+h*h),l=Kn(Math.min(Math.asin(ir((c.highest.height+6)/r,-1,1)),Math.asin(ir(s/a,-1,1))-Math.asin(ir(h/a,-1,1)))),l=Math.max(o,Math.min(n,l))),this.labelRotation=l}afterCalculateLabelRotation(){xn(this.options.afterCalculateLabelRotation,[this])}beforeFit(){xn(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:o,grid:n}}=this,r=this._isVisible(),s=this.isHorizontal();if(r){const r=Nl(o,e.options.font);if(s?(t.width=this.maxWidth,t.height=Ll(n)+r):(t.height=this.maxHeight,t.width=Ll(n)+r),i.display&&this.ticks.length){const{first:e,last:o,widest:n,highest:r}=this._getLabelSizes(),a=2*i.padding,l=Gn(this.labelRotation),c=Math.cos(l),d=Math.sin(l);if(s){const e=i.mirror?0:d*n.width+c*r.height;t.height=Math.min(this.maxHeight,t.height+e+a)}else{const e=i.mirror?0:c*n.width+d*r.height;t.width=Math.min(this.maxWidth,t.width+e+a)}this._calculatePadding(e,o,d,c)}}this._handleMargins(),s?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,o){const{ticks:{align:n,padding:r},position:s}=this.options,a=0!==this.labelRotation,l="top"!==s&&"x"===this.axis;if(this.isHorizontal()){const s=this.getPixelForTick(0)-this.left,c=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,h=0;a?l?(d=o*t.width,h=i*e.height):(d=i*t.height,h=o*e.width):"start"===n?h=e.width:"end"===n?d=t.width:(d=t.width/2,h=e.width/2),this.paddingLeft=Math.max((d-s+r)*this.width/(this.width-s),0),this.paddingRight=Math.max((h-c+r)*this.width/(this.width-c),0)}else{let i=e.height/2,o=t.height/2;"start"===n?(i=0,o=t.height):"end"===n&&(i=e.height,o=0),this.paddingTop=i+r,this.paddingBottom=o+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){xn(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)pn(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Il(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,e){const{ctx:i,_longestTextCache:o}=this,n=[],r=[];let s,a,l,c,d,h,p,u,f,g,m,y=0,b=0;for(s=0;s<e;++s){if(c=t[s].label,d=this._resolveTickFontOptions(s),i.font=h=d.string,p=o[h]=o[h]||{data:{},gc:[]},u=d.lineHeight,f=g=0,pn(c)||un(c)){if(un(c))for(a=0,l=c.length;a<l;++a)m=c[a],pn(m)||un(m)||(f=Vr(i,p.data,p.gc,f,m),g+=u)}else f=Vr(i,p.data,p.gc,f,c),g=u;n.push(f),r.push(g),y=Math.max(f,y),b=Math.max(g,b)}!function(t,e){vn(t,(t=>{const i=t.gc,o=i.length/2;let n;if(o>e){for(n=0;n<o;++n)delete t.data[i[n]];i.splice(0,o)}}))}(o,e);const x=n.indexOf(y),v=r.indexOf(b),w=t=>({width:n[t]||0,height:r[t]||0});return{first:w(0),last:w(e-1),widest:w(x),highest:w(v),widths:n,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return ir(this._alignToPixels?qr(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return fs(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=fs(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=Gn(this.labelRotation),i=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e)),n=this._getLabelSizes(),r=t.autoSkipPadding||0,s=n?n.widest.width+r:0,a=n?n.highest.height+r:0;return this.isHorizontal()?a*i>s*o?s/i:a/o:a*o<s*i?a/i:s/o}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,o=this.options,{grid:n,position:r}=o,s=n.offset,a=this.isHorizontal(),l=this.ticks.length+(s?1:0),c=Ll(n),d=[],h=n.setContext(this.getContext()),p=h.drawBorder?h.borderWidth:0,u=p/2,f=function(t){return qr(i,t,p)};let g,m,y,b,x,v,w,_,S,k,R,O;if("top"===r)g=f(this.bottom),v=this.bottom-c,_=g-u,k=f(t.top)+u,O=t.bottom;else if("bottom"===r)g=f(this.top),k=t.top,O=f(t.bottom)-u,v=g+u,_=this.top+c;else if("left"===r)g=f(this.right),x=this.right-c,w=g-u,S=f(t.left)+u,R=t.right;else if("right"===r)g=f(this.left),S=t.left,R=f(t.right)-u,x=g+u,w=this.left+c;else if("x"===e){if("center"===r)g=f((t.top+t.bottom)/2+.5);else if(fn(r)){const t=Object.keys(r)[0],e=r[t];g=f(this.chart.scales[t].getPixelForValue(e))}k=t.top,O=t.bottom,v=g+u,_=v+c}else if("y"===e){if("center"===r)g=f((t.left+t.right)/2);else if(fn(r)){const t=Object.keys(r)[0],e=r[t];g=f(this.chart.scales[t].getPixelForValue(e))}x=g-u,w=x-c,S=t.left,R=t.right}const $=yn(o.ticks.maxTicksLimit,l),E=Math.max(1,Math.ceil(l/$));for(m=0;m<l;m+=E){const t=n.setContext(this.getContext(m)),e=t.lineWidth,o=t.color,r=n.borderDash||[],l=t.borderDashOffset,c=t.tickWidth,h=t.tickColor,p=t.tickBorderDash||[],u=t.tickBorderDashOffset;y=jl(this,m,s),void 0!==y&&(b=qr(i,y,e),a?x=w=S=R=b:v=_=k=O=b,d.push({tx1:x,ty1:v,tx2:w,ty2:_,x1:S,y1:k,x2:R,y2:O,width:e,color:o,borderDash:r,borderDashOffset:l,tickWidth:c,tickColor:h,tickBorderDash:p,tickBorderDashOffset:u}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(t){const e=this.axis,i=this.options,{position:o,ticks:n}=i,r=this.isHorizontal(),s=this.ticks,{align:a,crossAlign:l,padding:c,mirror:d}=n,h=Ll(i.grid),p=h+c,u=d?-c:p,f=-Gn(this.labelRotation),g=[];let m,y,b,x,v,w,_,S,k,R,O,$,E="middle";if("top"===o)w=this.bottom-u,_=this._getXAxisLabelAlignment();else if("bottom"===o)w=this.top+u,_=this._getXAxisLabelAlignment();else if("left"===o){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,v=t.x}else if("right"===o){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,v=t.x}else if("x"===e){if("center"===o)w=(t.top+t.bottom)/2+p;else if(fn(o)){const t=Object.keys(o)[0],e=o[t];w=this.chart.scales[t].getPixelForValue(e)+p}_=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===o)v=(t.left+t.right)/2-p;else if(fn(o)){const t=Object.keys(o)[0],e=o[t];v=this.chart.scales[t].getPixelForValue(e)}_=this._getYAxisLabelAlignment(h).textAlign}"y"===e&&("start"===a?E="top":"end"===a&&(E="bottom"));const T=this._getLabelSizes();for(m=0,y=s.length;m<y;++m){b=s[m],x=b.label;const t=n.setContext(this.getContext(m));S=this.getPixelForTick(m)+n.labelOffset,k=this._resolveTickFontOptions(m),R=k.lineHeight,O=un(x)?x.length:1;const e=O/2,i=t.color,a=t.textStrokeColor,c=t.textStrokeWidth;let h;if(r?(v=S,$="top"===o?"near"===l||0!==f?-O*R+R/2:"center"===l?-T.highest.height/2-e*R+R:-T.highest.height+R/2:"near"===l||0!==f?R/2:"center"===l?T.highest.height/2-e*R:T.highest.height-O*R,d&&($*=-1)):(w=S,$=(1-O)*R/2),t.showLabelBackdrop){const e=hs(t.backdropPadding),i=T.heights[m],o=T.widths[m];let n=w+$-e.top,r=v-e.left;switch(E){case"middle":n-=i/2;break;case"bottom":n-=i}switch(_){case"center":r-=o/2;break;case"right":r-=o}h={left:r,top:n,width:o+e.width,height:i+e.height,color:t.backdropColor}}g.push({rotation:f,label:x,font:k,color:i,strokeColor:a,strokeWidth:c,textOffset:$,textAlign:_,textBaseline:E,translation:[v,w],backdrop:h})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Gn(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align&&(i="right"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:o,padding:n}}=this.options,r=t+n,s=this._getLabelSizes().widest.width;let a,l;return"left"===e?o?(l=this.right+n,"near"===i?a="left":"center"===i?(a="center",l+=s/2):(a="right",l+=s)):(l=this.right-r,"near"===i?a="right":"center"===i?(a="center",l-=s/2):(a="left",l=this.left)):"right"===e?o?(l=this.left+n,"near"===i?a="right":"center"===i?(a="center",l-=s/2):(a="left",l-=s)):(l=this.left+r,"near"===i?a="left":"center"===i?(a="center",l+=s/2):(a="right",l=this.right)):a="right",{textAlign:a,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:o,width:n,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,o,n,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex((e=>e.value===t));return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let n,r;const s=(t,e,o)=>{o.width&&o.color&&(i.save(),i.lineWidth=o.width,i.strokeStyle=o.color,i.setLineDash(o.borderDash||[]),i.lineDashOffset=o.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(n=0,r=o.length;n<r;++n){const t=o[n];e.drawOnChartArea&&s({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&s({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{grid:i}}=this,o=i.setContext(this.getContext()),n=i.drawBorder?o.borderWidth:0;if(!n)return;const r=i.setContext(this.getContext(0)).lineWidth,s=this._borderValue;let a,l,c,d;this.isHorizontal()?(a=qr(t,this.left,n)-n/2,l=qr(t,this.right,r)+r/2,c=d=s):(c=qr(t,this.top,n)-n/2,d=qr(t,this.bottom,r)+r/2,a=l=s),e.save(),e.lineWidth=o.borderWidth,e.strokeStyle=o.borderColor,e.beginPath(),e.moveTo(a,c),e.lineTo(l,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&Jr(e,i);const o=this._labelItems||(this._labelItems=this._computeLabelItems(t));let n,r;for(n=0,r=o.length;n<r;++n){const t=o[n],i=t.font,r=t.label;t.backdrop&&(e.fillStyle=t.backdrop.color,e.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),es(e,r,0,t.textOffset,i,t)}i&&Zr(e)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:o}}=this;if(!i.display)return;const n=ps(i.font),r=hs(i.padding),s=i.align;let a=n.lineHeight/2;"bottom"===e||"center"===e||fn(e)?(a+=r.bottom,un(i.text)&&(a+=n.lineHeight*(i.text.length-1))):a+=r.top;const{titleX:l,titleY:c,maxWidth:d,rotation:h}=function(t,e,i,o){const{top:n,left:r,bottom:s,right:a,chart:l}=t,{chartArea:c,scales:d}=l;let h,p,u,f=0;const g=s-n,m=a-r;if(t.isHorizontal()){if(p=cn(o,r,a),fn(i)){const t=Object.keys(i)[0],o=i[t];u=d[t].getPixelForValue(o)+g-e}else u="center"===i?(c.bottom+c.top)/2+g-e:Cl(t,i,e);h=a-r}else{if(fn(i)){const t=Object.keys(i)[0],o=i[t];p=d[t].getPixelForValue(o)-m+e}else p="center"===i?(c.left+c.right)/2-m+e:Cl(t,i,e);u=cn(o,s,n),f="left"===i?-Bn:Bn}return{titleX:p,titleY:u,maxWidth:h,rotation:f}}(this,a,e,s);es(t,i.text,0,0,n,{color:i.color,maxWidth:d,rotation:h,textAlign:Bl(s,e,o),textBaseline:"middle",translation:[l,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=yn(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===zl.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[];let n,r;for(n=0,r=e.length;n<r;++n){const r=e[n];r[i]!==this.id||t&&r.type!==t||o.push(r)}return o}_resolveTickFontOptions(t){return ps(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Wl{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return"id"in t&&"defaults"in t})(e)&&(i=this.register(e));const o=this.items,n=t.id,r=this.scope+"."+n;if(!n)throw new Error("class does not have id: "+t);return n in o||(o[n]=t,function(t,e,i){const o=Rn(Object.create(null),[i?Ur.get(i):{},Ur.get(e),t.defaults]);Ur.set(e,o),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const o=i.split("."),n=o.pop(),r=[t].concat(o).join("."),s=e[i].split("."),a=s.pop(),l=s.join(".");Ur.route(r,n,l,a)}))}(e,t.defaultRoutes),t.descriptors&&Ur.describe(e,t.descriptors)}(t,r,i),this.override&&Ur.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,o=this.scope;i in e&&delete e[i],o&&i in Ur[o]&&(delete Ur[o][i],this.override&&delete zr[i])}}var Hl=new class{constructor(){this.controllers=new Wl(Ea,"datasets",!0),this.elements=new Wl(Pl,"elements"),this.plugins=new Wl(Object,"plugins"),this.scales=new Wl(zl,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach((e=>{const o=i||this._getRegistryForType(e);i||o.isForType(e)||o===this.plugins&&e.id?this._exec(t,o,e):vn(e,(e=>{const o=i||this._getRegistryForType(e);this._exec(t,o,e)}))}))}_exec(t,e,i){const o=Pn(t);xn(i["before"+o],[],i),e[t](i),xn(i["after"+o],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const o=e.get(t);if(void 0===o)throw new Error('"'+t+'" is not a registered '+i+".");return o}};class Fl{constructor(){this._init=[]}notify(t,e,i,o){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const n=o?this._descriptors(t).filter(o):this._descriptors(t),r=this._notify(n,t,e,i);return"afterDestroy"===e&&(this._notify(n,t,"stop"),this._notify(this._init,t,"uninstall")),r}_notify(t,e,i,o){o=o||{};for(const n of t){const t=n.plugin;if(!1===xn(t[i],[e,o,n.options],t)&&o.cancelable)return!1}return!0}invalidate(){pn(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,o=yn(i.options&&i.options.plugins,{}),n=function(t){const e=[],i=Object.keys(Hl.plugins.items);for(let t=0;t<i.length;t++)e.push(Hl.getPlugin(i[t]));const o=t.plugins||[];for(let t=0;t<o.length;t++){const i=o[t];-1===e.indexOf(i)&&e.push(i)}return e}(i);return!1!==o||e?function(t,e,i,o){const n=[],r=t.getContext();for(let s=0;s<e.length;s++){const a=e[s],l=Ul(i[a.id],o);null!==l&&n.push({plugin:a,options:Vl(t.config,a,l,r)})}return n}(t,n,o,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,o=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(o(e,i),t,"stop"),this._notify(o(i,e),t,"start")}}function Ul(t,e){return e||!1!==t?!0===t?{}:t:null}function Vl(t,e,i,o){const n=t.pluginScopeKeys(e),r=t.getOptionScopes(i,n);return t.createResolver(r,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Yl(t,e){const i=Ur.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function ql(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase();var i}function Gl(t){const e=t.options||(t.options={});e.plugins=yn(e.plugins,{}),e.scales=function(t,e){const i=zr[t.type]||{scales:{}},o=e.scales||{},n=Yl(t.type,e),r=Object.create(null),s=Object.create(null);return Object.keys(o).forEach((t=>{const e=o[t];if(!fn(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const a=ql(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(a,n),c=i.scales||{};r[a]=r[a]||t,s[t]=On(Object.create(null),[{axis:a},e,c[a],c[l]])})),t.data.datasets.forEach((i=>{const n=i.type||t.type,a=i.indexAxis||Yl(n,e),l=(zr[n]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,a),n=i[e+"AxisID"]||r[e]||e;s[n]=s[n]||Object.create(null),On(s[n],[{axis:e},o[n],l[t]])}))})),Object.keys(s).forEach((t=>{const e=s[t];On(e,[Ur.scales[e.type],Ur.scale])})),s}(t,e)}function Kl(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const Xl=new Map,Jl=new Set;function Zl(t,e){let i=Xl.get(t);return i||(i=e(),Xl.set(t,i),Jl.add(i)),i}const Ql=(t,e,i)=>{const o=Tn(e,i);void 0!==o&&t.add(o)};class tc{constructor(t){this._config=function(t){return(t=t||{}).data=Kl(t.data),Gl(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Kl(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Gl(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Zl(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return Zl(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return Zl(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return Zl(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let o=i.get(t);return o&&!e||(o=new Map,i.set(t,o)),o}getOptionScopes(t,e,i){const{options:o,type:n}=this,r=this._cachedScopes(t,i),s=r.get(e);if(s)return s;const a=new Set;e.forEach((e=>{t&&(a.add(t),e.forEach((e=>Ql(a,t,e)))),e.forEach((t=>Ql(a,o,t))),e.forEach((t=>Ql(a,zr[n]||{},t))),e.forEach((t=>Ql(a,Ur,t))),e.forEach((t=>Ql(a,Wr,t)))}));const l=Array.from(a);return 0===l.length&&l.push(Object.create(null)),Jl.has(e)&&r.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,zr[e]||{},Ur.datasets[e]||{},{type:e},Ur,Wr]}resolveNamedOptions(t,e,i,o=[""]){const n={$shared:!0},{resolver:r,subPrefixes:s}=ec(this._resolverCache,t,o);let a=r;(function(t,e){const{isScriptable:i,isIndexable:o}=Ss(t);for(const n of e){const e=i(n),r=o(n),s=(r||e)&&t[n];if(e&&(Dn(s)||ic(s))||r&&un(s))return!0}return!1})(r,e)&&(n.$shared=!1,a=_s(r,i=Dn(i)?i():i,this.createResolver(t,i,s)));for(const t of e)n[t]=a[t];return n}createResolver(t,e,i=[""],o){const{resolver:n}=ec(this._resolverCache,t,i);return fn(e)?_s(n,e,void 0,o):n}}function ec(t,e,i){let o=t.get(e);o||(o=new Map,t.set(e,o));const n=i.join();let r=o.get(n);return r||(r={resolver:ws(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},o.set(n,r)),r}const ic=t=>fn(t)&&Object.getOwnPropertyNames(t).reduce(((e,i)=>e||Dn(t[i])),!1),oc=["top","bottom","left","right","chartArea"];function nc(t,e){return"top"===t||"bottom"===t||-1===oc.indexOf(t)&&"x"===e}function rc(t,e){return function(i,o){return i[t]===o[t]?i[e]-o[e]:i[t]-o[t]}}function sc(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),xn(i&&i.onComplete,[t],e)}function ac(t){const e=t.chart,i=e.options.animation;xn(i&&i.onProgress,[t],e)}function lc(t){return zs()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const cc={},dc=t=>{const e=lc(t);return Object.values(cc).filter((t=>t.canvas===e)).pop()};function hc(t,e,i){const o=Object.keys(t);for(const n of o){const o=+n;if(o>=e){const r=t[n];delete t[n],(i>0||o>e)&&(t[o+i]=r)}}}class pc{constructor(t,e){const i=this.config=new tc(e),o=lc(t),n=dc(o);if(n)throw new Error("Canvas is already in use. Chart with ID '"+n.id+"' must be destroyed before the canvas can be reused.");const r=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||function(t){return!zs()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?gl:Tl}(o)),this.platform.updateConfig(i);const s=this.platform.acquireContext(o,r.aspectRatio),a=s&&s.canvas,l=a&&a.height,c=a&&a.width;this.id=hn(),this.ctx=s,this.canvas=a,this.width=c,this.height=l,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Fl,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=function(t,e){let i;return function(...o){return e?(clearTimeout(i),i=setTimeout(t,e,o)):t.apply(this,o),e}}((t=>this.update(t)),r.resizeDelay||0),this._dataChanges=[],cc[this.id]=this,s&&a?(ha.listen(this,"complete",sc),ha.listen(this,"progress",ac),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:o,_aspectRatio:n}=this;return pn(t)?e&&n?n:o?i/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Gs(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Gr(this.canvas,this.ctx),this}stop(){return ha.stop(this),this}resize(t,e){ha.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,o=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(o,t,e,n),s=i.devicePixelRatio||this.platform.getDevicePixelRatio(),a=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,Gs(this,s,!0)&&(this.notifyPlugins("resize",{size:r}),xn(i.onResize,[this,r],this),this.attached&&this._doResize(a)&&this.render())}ensureScalesHaveIDs(){vn(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,o=Object.keys(i).reduce(((t,e)=>(t[e]=!1,t)),{});let n=[];e&&(n=n.concat(Object.keys(e).map((t=>{const i=e[t],o=ql(t,i),n="r"===o,r="x"===o;return{options:i,dposition:n?"chartArea":r?"bottom":"left",dtype:n?"radialLinear":r?"category":"linear"}})))),vn(n,(e=>{const n=e.options,r=n.id,s=ql(r,n),a=yn(n.type,e.dtype);void 0!==n.position&&nc(n.position,s)===nc(e.dposition)||(n.position=e.dposition),o[r]=!0;let l=null;r in i&&i[r].type===a?l=i[r]:(l=new(Hl.getScale(a))({id:r,type:a,ctx:this.ctx,chart:this}),i[l.id]=l),l.init(n,t)})),vn(o,((t,e)=>{t||delete i[e]})),vn(i,(t=>{ul.configure(this,t,t.options),ul.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(rc("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,o;for(this._removeUnreferencedMetasets(),i=0,o=e.length;i<o;i++){const o=e[i];let n=this.getDatasetMeta(i);const r=o.type||this.config.type;if(n.type&&n.type!==r&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=r,n.indexAxis=o.indexAxis||Yl(r,this.options),n.order=o.order||0,n.index=i,n.label=""+o.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{const e=Hl.getController(r),{datasetElementType:o,dataElementType:s}=Ur.datasets[r];Object.assign(e.prototype,{dataElementType:Hl.getElement(s),datasetElementType:o&&Hl.getElement(o)}),n.controller=new e(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){vn(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!o&&-1===n.indexOf(e);e.buildOrUpdateElements(i),r=Math.max(+e.getMaxOverflow(),r)}r=this._minPadding=i.layout.autoPadding?r:0,this._updateLayout(r),o||vn(n,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(rc("z","_idx"));const{_active:s,_lastEvent:a}=this;a?this._eventHandler(a,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){vn(this.scales,(t=>{ul.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);An(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:o,count:n}of e)hc(t,o,"_removeElements"===i?-n:n)}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),o=i(0);for(let t=1;t<e;t++)if(!An(o,i(t)))return;return Array.from(o).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;ul.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],vn(this.boxes,(t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,Dn(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),o={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",o)&&(i.controller._update(e),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(ha.has(this)?this.attached&&!ha.running(this)&&ha.start(this):(this.draw(),sc({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let o,n;for(o=0,n=e.length;o<n;++o){const n=e[o];t&&!n.visible||i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i=t._clip,o=!i.disabled,n=this.chartArea,r={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",r)&&(o&&Jr(e,{left:!1===i.left?0:n.left-i.left,right:!1===i.right?this.width:n.right+i.right,top:!1===i.top?0:n.top-i.top,bottom:!1===i.bottom?this.height:n.bottom+i.bottom}),t.controller.draw(),o&&Zr(e),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}getElementsAtEventForMode(t,e,i,o){const n=el.modes[e];return"function"==typeof n?n(this,t,i,o):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let o=i.filter((t=>t&&t._dataset===e)).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=fs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const o=i?"show":"hide",n=this.getDatasetMeta(t),r=n.controller._resolveAnimations(void 0,o);Mn(e)?(n.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),r.update(n,{visible:i}),this.update((e=>e.datasetIndex===t?o:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),ha.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Gr(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete cc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},o=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};vn(this.options.events,(t=>i(t,o)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},o=(i,o)=>{t[i]&&(e.removeEventListener(this,i,o),delete t[i])},n=(t,e)=>{this.canvas&&this.resize(t,e)};let r;const s=()=>{o("attach",s),this.attached=!0,this.resize(),i("resize",n),i("detach",r)};r=()=>{this.attached=!1,o("resize",n),this._stop(),this._resize(0,0),i("attach",s)},e.isAttached(this.canvas)?s():r()}unbindEvents(){vn(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},vn(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const o=i?"set":"remove";let n,r,s,a;for("dataset"===e&&(n=this.getDatasetMeta(t[0].datasetIndex),n.controller["_"+o+"DatasetHoverStyle"]()),s=0,a=t.length;s<a;++s){r=t[s];const e=r&&this.getDatasetMeta(r.datasetIndex).controller;e&&e[o+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map((({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}));!wn(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){const o=this.options.hover,n=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),r=n(e,t),s=i?t:n(t,e);r.length&&this.updateHoverStyle(r,o.mode,!1),s.length&&o.mode&&this.updateHoverStyle(s,o.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:Xr(t,this.chartArea,this._minPadding)},o=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,o))return;const n=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(n||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:o=[],options:n}=this,r=e,s=this._getActiveElements(t,o,i,r),a=function(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}(t),l=function(t,e,i,o){return i&&"mouseout"!==t.type?o?e:t:null}(t,this._lastEvent,i,a);i&&(this._lastEvent=null,xn(n.onHover,[t,s,this],this),a&&xn(n.onClick,[t,s,this],this));const c=!wn(s,o);return(c||e)&&(this._active=s,this._updateHoverStyles(s,o,e)),this._lastEvent=l,c}_getActiveElements(t,e,i,o){if("mouseout"===t.type)return[];if(!i)return e;const n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,o)}}const uc=()=>vn(pc.instances,(t=>t._plugins.invalidate())),fc=!0;function gc(t,e,i){const{startAngle:o,pixelMargin:n,x:r,y:s,outerRadius:a,innerRadius:l}=e;let c=n/a;t.beginPath(),t.arc(r,s,a,o-c,i+c),l>n?(c=n/l,t.arc(r,s,l,i+c,o-c,!0)):t.arc(r,s,n,i+Bn,o-Bn),t.closePath(),t.clip()}function mc(t,e,i,o){return{x:i+t*Math.cos(e),y:o+t*Math.sin(e)}}function yc(t,e,i,o,n){const{x:r,y:s,startAngle:a,pixelMargin:l,innerRadius:c}=e,d=Math.max(e.outerRadius+o+i-l,0),h=c>0?c+o+i+l:0;let p=0;const u=n-a;if(o){const t=((c>0?c-o:0)+(d>0?d-o:0))/2;p=(u-(0!==t?u*t/(t+o):u))/2}const f=(u-Math.max(.001,u*d-i/Cn)/d)/2,g=a+f+p,m=n-f-p,{outerStart:y,outerEnd:b,innerStart:x,innerEnd:v}=function(t,e,i,o){const n=ls(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]),r=(i-e)/2,s=Math.min(r,o*e/2),a=t=>{const e=(i-Math.min(r,t))*o/2;return ir(t,0,Math.min(r,e))};return{outerStart:a(n.outerStart),outerEnd:a(n.outerEnd),innerStart:ir(n.innerStart,0,s),innerEnd:ir(n.innerEnd,0,s)}}(e,h,d,m-g),w=d-y,_=d-b,S=g+y/w,k=m-b/_,R=h+x,O=h+v,$=g+x/R,E=m-v/O;if(t.beginPath(),t.arc(r,s,d,S,k),b>0){const e=mc(_,k,r,s);t.arc(e.x,e.y,b,k,m+Bn)}const T=mc(O,m,r,s);if(t.lineTo(T.x,T.y),v>0){const e=mc(O,E,r,s);t.arc(e.x,e.y,v,m+Bn,E+Math.PI)}if(t.arc(r,s,h,m-v/h,g+x/h,!0),x>0){const e=mc(R,$,r,s);t.arc(e.x,e.y,x,$+Math.PI,g-Bn)}const P=mc(w,g,r,s);if(t.lineTo(P.x,P.y),y>0){const e=mc(w,S,r,s);t.arc(e.x,e.y,y,g-Bn,S)}t.closePath()}Object.defineProperties(pc,{defaults:{enumerable:fc,value:Ur},instances:{enumerable:fc,value:cc},overrides:{enumerable:fc,value:zr},registry:{enumerable:fc,value:Hl},version:{enumerable:fc,value:"3.7.0"},getChart:{enumerable:fc,value:dc},register:{enumerable:fc,value:(...t)=>{Hl.add(...t),uc()}},unregister:{enumerable:fc,value:(...t)=>{Hl.remove(...t),uc()}}});class bc extends Pl{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const o=this.getProps(["x","y"],i),{angle:n,distance:r}=Jn(o,{x:t,y:e}),{startAngle:s,endAngle:a,innerRadius:l,outerRadius:c,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),h=this.options.spacing/2,p=yn(d,a-s)>=In||er(n,s,a),u=or(r,l+h,c+h);return p&&u}getCenterPoint(t){const{x:e,y:i,startAngle:o,endAngle:n,innerRadius:r,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:a,spacing:l}=this.options,c=(o+n)/2,d=(r+s+l+a)/2;return{x:e+Math.cos(c)*d,y:i+Math.sin(c)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,o=(e.offset||0)/2,n=(e.spacing||0)/2;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>In?Math.floor(i/In):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let r=0;if(o){r=o/2;const e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*r,Math.sin(e)*r),this.circumference>=Cn&&(r=o)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const s=function(t,e,i,o){const{fullCircles:n,startAngle:r,circumference:s}=e;let a=e.endAngle;if(n){yc(t,e,i,o,r+In);for(let e=0;e<n;++e)t.fill();isNaN(s)||(a=r+s%In,s%In==0&&(a+=In))}return yc(t,e,i,o,a),t.fill(),a}(t,this,r,n);(function(t,e,i,o,n){const{options:r}=e,{borderWidth:s,borderJoinStyle:a}=r,l="inner"===r.borderAlign;s&&(l?(t.lineWidth=2*s,t.lineJoin=a||"round"):(t.lineWidth=s,t.lineJoin=a||"bevel"),e.fullCircles&&function(t,e,i){const{x:o,y:n,startAngle:r,pixelMargin:s,fullCircles:a}=e,l=Math.max(e.outerRadius-s,0),c=e.innerRadius+s;let d;for(i&&gc(t,e,r+In),t.beginPath(),t.arc(o,n,c,r+In,r,!0),d=0;d<a;++d)t.stroke();for(t.beginPath(),t.arc(o,n,l,r,r+In),d=0;d<a;++d)t.stroke()}(t,e,l),l&&gc(t,e,n),yc(t,e,i,o,n),t.stroke())})(t,this,r,n,s),t.restore()}}function xc(t,e,i=e){t.lineCap=yn(i.borderCapStyle,e.borderCapStyle),t.setLineDash(yn(i.borderDash,e.borderDash)),t.lineDashOffset=yn(i.borderDashOffset,e.borderDashOffset),t.lineJoin=yn(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=yn(i.borderWidth,e.borderWidth),t.strokeStyle=yn(i.borderColor,e.borderColor)}function vc(t,e,i){t.lineTo(i.x,i.y)}function wc(t,e,i={}){const o=t.length,{start:n=0,end:r=o-1}=i,{start:s,end:a}=e,l=Math.max(n,s),c=Math.min(r,a),d=n<s&&r<s||n>a&&r>a;return{count:o,start:l,loop:e.loop,ilen:c<l&&!d?o+c-l:c-l}}function _c(t,e,i,o){const{points:n,options:r}=e,{count:s,start:a,loop:l,ilen:c}=wc(n,i,o),d=function(t){return t.stepped?Qr:t.tension||"monotone"===t.cubicInterpolationMode?ts:vc}(r);let h,p,u,{move:f=!0,reverse:g}=o||{};for(h=0;h<=c;++h)p=n[(a+(g?c-h:h))%s],p.skip||(f?(t.moveTo(p.x,p.y),f=!1):d(t,u,p,g,r.stepped),u=p);return l&&(p=n[(a+(g?c:0))%s],d(t,u,p,g,r.stepped)),!!l}function Sc(t,e,i,o){const n=e.points,{count:r,start:s,ilen:a}=wc(n,i,o),{move:l=!0,reverse:c}=o||{};let d,h,p,u,f,g,m=0,y=0;const b=t=>(s+(c?a-t:t))%r,x=()=>{u!==f&&(t.lineTo(m,f),t.lineTo(m,u),t.lineTo(m,g))};for(l&&(h=n[b(0)],t.moveTo(h.x,h.y)),d=0;d<=a;++d){if(h=n[b(d)],h.skip)continue;const e=h.x,i=h.y,o=0|e;o===p?(i<u?u=i:i>f&&(f=i),m=(y*m+e)/++y):(x(),t.lineTo(e,i),p=o,y=0,u=f=i),g=i}x()}function kc(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i?_c:Sc}bc.id="arc",bc.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0},bc.defaultRoutes={backgroundColor:"backgroundColor"};const Rc="function"==typeof Path2D;class Oc extends Pl{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const o=i.spanGaps?this._loop:this._fullLoop;Bs(this._points,i,t,o,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){const i=t.points,o=t.options.spanGaps,n=i.length;if(!n)return[];const r=!!t._loop,{start:s,end:a}=function(t,e,i,o){let n=0,r=e-1;if(i&&!o)for(;n<e&&!t[n].skip;)n++;for(;n<e&&t[n].skip;)n++;for(n%=e,i&&(r+=n);r>n&&t[r%e].skip;)r--;return r%=e,{start:n,end:r}}(i,n,r,o);return function(t,e,i,o){return o&&o.setContext&&i?function(t,e,i,o){const n=t._chart.getContext(),r=ca(t.options),{_datasetIndex:s,options:{spanGaps:a}}=t,l=i.length,c=[];let d=r,h=e[0].start,p=h;function u(t,e,o,n){const r=a?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=r;for(;i[e%l].skip;)e+=r;t%l!=e%l&&(c.push({start:t%l,end:e%l,loop:o,style:n}),d=n,h=e%l)}}for(const t of e){h=a?h:t.start;let e,r=i[h%l];for(p=h+1;p<=t.end;p++){const a=i[p%l];e=ca(o.setContext(fs(n,{type:"segment",p0:r,p1:a,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:s}))),da(e,d)&&u(h,p-1,t.loop,d),r=a,d=e}h<p-1&&u(h,p-1,t.loop,d)}return c}(t,e,i,o):e}(t,!0===o?[{start:s,end:a,loop:r}]:function(t,e,i,o){const n=t.length,r=[];let s,a=e,l=t[e];for(s=e+1;s<=i;++s){const i=t[s%n];i.skip||i.stop?l.skip||(o=!1,r.push({start:e%n,end:(s-1)%n,loop:o}),e=a=i.stop?s:null):(a=s,l.skip&&(e=s)),l=i}return null!==a&&r.push({start:e%n,end:a%n,loop:o}),r}(i,s,a<s?a+n:a,!!t._fullLoop&&0===s&&a===n-1),i,e)}(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,o=t[e],n=this.points,r=la(this,{property:e,start:o,end:o});if(!r.length)return;const s=[],a=function(t){return t.stepped?Zs:t.tension||"monotone"===t.cubicInterpolationMode?Qs:Js}(i);let l,c;for(l=0,c=r.length;l<c;++l){const{start:c,end:d}=r[l],h=n[c],p=n[d];if(h===p){s.push(h);continue}const u=a(h,p,Math.abs((o-h[e])/(p[e]-h[e])),i.stepped);u[e]=t[e],s.push(u)}return 1===s.length?s[0]:s}pathSegment(t,e,i){return kc(this)(t,this,e,i)}path(t,e,i){const o=this.segments,n=kc(this);let r=this._loop;e=e||0,i=i||this.points.length-e;for(const s of o)r&=n(t,this,s,{start:e,end:e+i-1});return!!r}draw(t,e,i,o){const n=this.options||{};(this.points||[]).length&&n.borderWidth&&(t.save(),function(t,e,i,o){Rc&&!e.options.segment?function(t,e,i,o){let n=e._path;n||(n=e._path=new Path2D,e.path(n,i,o)&&n.closePath()),xc(t,e.options),t.stroke(n)}(t,e,i,o):function(t,e,i,o){const{segments:n,options:r}=e,s=kc(e);for(const a of n)xc(t,r,a.style),t.beginPath(),s(t,e,a,{start:i,end:i+o-1})&&t.closePath(),t.stroke()}(t,e,i,o)}(t,this,i,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function $c(t,e,i,o){const n=t.options,{[i]:r}=t.getProps([i],o);return Math.abs(e-r)<n.radius+n.hitRadius}Oc.id="line",Oc.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},Oc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},Oc.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class Ec extends Pl{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const o=this.options,{x:n,y:r}=this.getProps(["x","y"],i);return Math.pow(t-n,2)+Math.pow(e-r,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(t,e){return $c(this,t,"x",e)}inYRange(t,e){return $c(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;return e=Math.max(e,e&&t.hoverRadius||0),2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!Xr(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Kr(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function Tc(t,e){const{x:i,y:o,base:n,width:r,height:s}=t.getProps(["x","y","base","width","height"],e);let a,l,c,d,h;return t.horizontal?(h=s/2,a=Math.min(i,n),l=Math.max(i,n),c=o-h,d=o+h):(h=r/2,a=i-h,l=i+h,c=Math.min(o,n),d=Math.max(o,n)),{left:a,top:c,right:l,bottom:d}}function Pc(t,e,i,o){return t?0:ir(e,i,o)}function Mc(t,e,i,o){const n=null===e,r=null===i,s=t&&!(n&&r)&&Tc(t,o);return s&&(n||or(e,s.left,s.right))&&(r||or(i,s.top,s.bottom))}function Dc(t,e){t.rect(e.x,e.y,e.w,e.h)}function Ac(t,e,i={}){const o=t.x!==i.x?-e:0,n=t.y!==i.y?-e:0,r=(t.x+t.w!==i.x+i.w?e:0)-o,s=(t.y+t.h!==i.y+i.h?e:0)-n;return{x:t.x+o,y:t.y+n,w:t.w+r,h:t.h+s,radius:t.radius}}Ec.id="point",Ec.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},Ec.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class Cc extends Pl{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:o}}=this,{inner:n,outer:r}=function(t){const e=Tc(t),i=e.right-e.left,o=e.bottom-e.top,n=function(t,e,i){const o=t.options.borderWidth,n=t.borderSkipped,r=cs(o);return{t:Pc(n.top,r.top,0,i),r:Pc(n.right,r.right,0,e),b:Pc(n.bottom,r.bottom,0,i),l:Pc(n.left,r.left,0,e)}}(t,i/2,o/2),r=function(t,e,i){const{enableBorderRadius:o}=t.getProps(["enableBorderRadius"]),n=t.options.borderRadius,r=ds(n),s=Math.min(e,i),a=t.borderSkipped,l=o||fn(n);return{topLeft:Pc(!l||a.top||a.left,r.topLeft,0,s),topRight:Pc(!l||a.top||a.right,r.topRight,0,s),bottomLeft:Pc(!l||a.bottom||a.left,r.bottomLeft,0,s),bottomRight:Pc(!l||a.bottom||a.right,r.bottomRight,0,s)}}(t,i/2,o/2);return{outer:{x:e.left,y:e.top,w:i,h:o,radius:r},inner:{x:e.left+n.l,y:e.top+n.t,w:i-n.l-n.r,h:o-n.t-n.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,r.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(n.b,n.r))}}}}(this),s=(a=r.radius).topLeft||a.topRight||a.bottomLeft||a.bottomRight?os:Dc;var a;t.save(),r.w===n.w&&r.h===n.h||(t.beginPath(),s(t,Ac(r,e,n)),t.clip(),s(t,Ac(n,-e,r)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),s(t,Ac(n,e)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,e,i){return Mc(this,t,e,i)}inXRange(t,e){return Mc(this,t,null,e)}inYRange(t,e){return Mc(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:o,horizontal:n}=this.getProps(["x","y","base","horizontal"],t);return{x:n?(e+o)/2:e,y:n?i:(i+o)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}Cc.id="bar",Cc.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},Cc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var Ic=Object.freeze({__proto__:null,ArcElement:bc,LineElement:Oc,PointElement:Ec,BarElement:Cc});function jc(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function Lc(t){t.data.datasets.forEach((t=>{jc(t)}))}var Nc={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled)return void Lc(t);const o=t.width;t.data.datasets.forEach(((e,n)=>{const{_data:r,indexAxis:s}=e,a=t.getDatasetMeta(n),l=r||e.data;if("y"===us([s,t.options.indexAxis]))return;if("line"!==a.type)return;const c=t.scales[a.xAxisID];if("linear"!==c.type&&"time"!==c.type)return;if(t.options.parsing)return;let d,{start:h,count:p}=function(t,e){const i=e.length;let o,n=0;const{iScale:r}=t,{min:s,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(n=ir(ms(e,r.axis,s).lo,0,i-1)),o=c?ir(ms(e,r.axis,a).hi+1,n,i)-n:i-n,{start:n,count:o}}(a,l);if(p<=(i.threshold||4*o))jc(e);else{switch(pn(r)&&(e._data=l,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":d=function(t,e,i,o,n){const r=n.samples||o;if(r>=i)return t.slice(e,e+i);const s=[],a=(i-2)/(r-2);let l=0;const c=e+i-1;let d,h,p,u,f,g=e;for(s[l++]=t[g],d=0;d<r-2;d++){let o,n=0,r=0;const c=Math.floor((d+1)*a)+1+e,m=Math.min(Math.floor((d+2)*a)+1,i)+e,y=m-c;for(o=c;o<m;o++)n+=t[o].x,r+=t[o].y;n/=y,r/=y;const b=Math.floor(d*a)+1+e,x=Math.min(Math.floor((d+1)*a)+1,i)+e,{x:v,y:w}=t[g];for(p=u=-1,o=b;o<x;o++)u=.5*Math.abs((v-n)*(t[o].y-w)-(v-t[o].x)*(r-w)),u>p&&(p=u,h=t[o],f=o);s[l++]=h,g=f}return s[l++]=t[c],s}(l,h,p,o,i);break;case"min-max":d=function(t,e,i,o){let n,r,s,a,l,c,d,h,p,u,f=0,g=0;const m=[],y=e+i-1,b=t[e].x,x=t[y].x-b;for(n=e;n<e+i;++n){r=t[n],s=(r.x-b)/x*o,a=r.y;const e=0|s;if(e===l)a<p?(p=a,c=n):a>u&&(u=a,d=n),f=(g*f+r.x)/++g;else{const i=n-1;if(!pn(c)&&!pn(d)){const e=Math.min(c,d),o=Math.max(c,d);e!==h&&e!==i&&m.push({...t[e],x:f}),o!==h&&o!==i&&m.push({...t[o],x:f})}n>0&&i!==h&&m.push(t[i]),m.push(r),l=e,g=0,p=u=a,c=d=h=n}}return m}(l,h,p,o);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=d}}))},destroy(t){Lc(t)}};function Bc(t,e,i){const o=function(t){const e=t.options,i=e.fill;let o=yn(i&&i.target,i);return void 0===o&&(o=!!e.backgroundColor),!1!==o&&null!==o&&(!0===o?"origin":o)}(t);if(fn(o))return!isNaN(o.value)&&o;let n=parseFloat(o);return gn(n)&&Math.floor(n)===n?("-"!==o[0]&&"+"!==o[0]||(n=e+n),!(n===e||n<0||n>=i)&&n):["origin","start","end","stack","shape"].indexOf(o)>=0&&o}class zc{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:o,y:n,radius:r}=this;return e=e||{start:0,end:In},t.arc(o,n,r,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:o}=this,n=t.angle;return{x:e+Math.cos(n)*o,y:i+Math.sin(n)*o,angle:n}}}function Wc(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function Hc(t,e,i){const o=[];for(let n=0;n<i.length;n++){const r=i[n],{first:s,last:a,point:l}=Fc(r,e,"x");if(!(!l||s&&a))if(s)o.unshift(l);else if(t.push(l),!a)break}t.push(...o)}function Fc(t,e,i){const o=t.interpolate(e,i);if(!o)return{};const n=o[i],r=t.segments,s=t.points;let a=!1,l=!1;for(let t=0;t<r.length;t++){const e=r[t],o=s[e.start][i],c=s[e.end][i];if(or(n,o,c)){a=n===o,l=n===c;break}}return{first:a,last:l,point:o}}function Uc(t){const{chart:e,fill:i,line:o}=t;if(gn(i))return function(t,e){const i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:o}=t,n=[],r=o.segments,s=o.points,a=function(t,e){const i=[],o=t.getMatchingVisibleMetas("line");for(let t=0;t<o.length;t++){const n=o[t];if(n.index===e)break;n.hidden||i.unshift(n.dataset)}return i}(e,i);a.push(Vc({x:null,y:e.bottom},o));for(let t=0;t<r.length;t++){const e=r[t];for(let t=e.start;t<=e.end;t++)Hc(n,s[t],a)}return new Oc({points:n,options:{}})}(t);if("shape"===i)return!0;const n=function(t){return(t.scale||{}).getPointPositionForValue?function(t){const{scale:e,fill:i}=t,o=e.options,n=e.getLabels().length,r=[],s=o.reverse?e.max:e.min,a=o.reverse?e.min:e.max;let l,c,d;if(d="start"===i?s:"end"===i?a:fn(i)?i.value:e.getBaseValue(),o.grid.circular)return c=e.getPointPositionForValue(0,s),new zc({x:c.x,y:c.y,radius:e.getDistanceFromCenterForValue(d)});for(l=0;l<n;++l)r.push(e.getPointPositionForValue(l,d));return r}(t):function(t){const{scale:e={},fill:i}=t;let o,n=null;return"start"===i?n=e.bottom:"end"===i?n=e.top:fn(i)?n=e.getPixelForValue(i.value):e.getBasePixel&&(n=e.getBasePixel()),gn(n)?(o=e.isHorizontal(),{x:o?n:null,y:o?null:n}):null}(t)}(t);return n instanceof zc?n:Vc(n,o)}function Vc(t,e){let i=[],o=!1;return un(t)?(o=!0,i=t):i=function(t,e){const{x:i=null,y:o=null}=t||{},n=e.points,r=[];return e.segments.forEach((({start:t,end:e})=>{e=Wc(t,e,n);const s=n[t],a=n[e];null!==o?(r.push({x:s.x,y:o}),r.push({x:a.x,y:o})):null!==i&&(r.push({x:i,y:s.y}),r.push({x:i,y:a.y}))})),r}(t,e),i.length?new Oc({points:i,options:{tension:0},_loop:o,_fullLoop:o}):null}function Yc(t,e,i){let o=t[e].fill;const n=[e];let r;if(!i)return o;for(;!1!==o&&-1===n.indexOf(o);){if(!gn(o))return o;if(r=t[o],!r)return!1;if(r.visible)return o;n.push(o),o=r.fill}return!1}function qc(t,e,i){t.beginPath(),e.path(t),t.lineTo(e.last().x,i),t.lineTo(e.first().x,i),t.closePath(),t.clip()}function Gc(t,e,i,o){if(o)return;let n=e[t],r=i[t];return"angle"===t&&(n=tr(n),r=tr(r)),{property:t,start:n,end:r}}function Kc(t,e,i,o){return t&&e?o(t[i],e[i]):t?t[i]:e?e[i]:0}function Xc(t,e,i){const{top:o,bottom:n}=e.chart.chartArea,{property:r,start:s,end:a}=i||{};"x"===r&&(t.beginPath(),t.rect(s,o,a-s,n-o),t.clip())}function Jc(t,e,i,o){const n=e.interpolate(i,o);n&&t.lineTo(n.x,n.y)}function Zc(t,e){const{line:i,target:o,property:n,color:r,scale:s}=e,a=function(t,e,i){const o=t.segments,n=t.points,r=e.points,s=[];for(const t of o){let{start:o,end:a}=t;a=Wc(o,a,n);const l=Gc(i,n[o],n[a],t.loop);if(!e.segments){s.push({source:t,target:l,start:n[o],end:n[a]});continue}const c=la(e,l);for(const e of c){const o=Gc(i,r[e.start],r[e.end],e.loop),a=aa(t,n,o);for(const t of a)s.push({source:t,target:e,start:{[i]:Kc(l,o,"start",Math.max)},end:{[i]:Kc(l,o,"end",Math.min)}})}}return s}(i,o,n);for(const{source:e,target:l,start:c,end:d}of a){const{style:{backgroundColor:a=r}={}}=e,h=!0!==o;t.save(),t.fillStyle=a,Xc(t,s,h&&Gc(n,c,d)),t.beginPath();const p=!!i.pathSegment(t,e);let u;if(h){p?t.closePath():Jc(t,o,d,n);const e=!!o.pathSegment(t,l,{move:p,reverse:!0});u=p&&e,u||Jc(t,o,c,n)}t.closePath(),t.fill(u?"evenodd":"nonzero"),t.restore()}}function Qc(t,e,i){const o=Uc(e),{line:n,scale:r,axis:s}=e,a=n.options,l=a.fill,c=a.backgroundColor,{above:d=c,below:h=c}=l||{};o&&n.points.length&&(Jr(t,i),function(t,e){const{line:i,target:o,above:n,below:r,area:s,scale:a}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&r!==n&&(qc(t,o,s.top),Zc(t,{line:i,target:o,color:n,scale:a,property:l}),t.restore(),t.save(),qc(t,o,s.bottom)),Zc(t,{line:i,target:o,color:r,scale:a,property:l}),t.restore()}(t,{line:n,target:o,above:d,below:h,area:i,scale:r,axis:s}),Zr(t))}var td={id:"filler",afterDatasetsUpdate(t,e,i){const o=(t.data.datasets||[]).length,n=[];let r,s,a,l;for(s=0;s<o;++s)r=t.getDatasetMeta(s),a=r.dataset,l=null,a&&a.options&&a instanceof Oc&&(l={visible:t.isDatasetVisible(s),index:s,fill:Bc(a,s,o),chart:t,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,n.push(l);for(s=0;s<o;++s)l=n[s],l&&!1!==l.fill&&(l.fill=Yc(n,s,i.propagate))},beforeDraw(t,e,i){const o="beforeDraw"===i.drawTime,n=t.getSortedVisibleDatasetMetas(),r=t.chartArea;for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&(i.line.updateControlPoints(r,i.axis),o&&Qc(t.ctx,i,r))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const o=t.getSortedVisibleDatasetMetas();for(let e=o.length-1;e>=0;--e){const i=o[e].$filler;i&&Qc(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const o=e.meta.$filler;o&&!1!==o.fill&&"beforeDatasetDraw"===i.drawTime&&Qc(t.ctx,o,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const ed=(t,e)=>{let{boxHeight:i=e,boxWidth:o=e}=t;return t.usePointStyle&&(i=Math.min(i,e),o=Math.min(o,e)),{boxWidth:o,boxHeight:i,itemHeight:Math.max(e,i)}};class id extends Pl{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=xn(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const i=t.labels,o=ps(i.font),n=o.size,r=this._computeTitleHeight(),{boxWidth:s,itemHeight:a}=ed(i,n);let l,c;e.font=o.string,this.isHorizontal()?(l=this.maxWidth,c=this._fitRows(r,n,s,a)+10):(c=this.maxHeight,l=this._fitCols(r,n,s,a)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,o){const{ctx:n,maxWidth:r,options:{labels:{padding:s}}}=this,a=this.legendHitBoxes=[],l=this.lineWidths=[0],c=o+s;let d=t;n.textAlign="left",n.textBaseline="middle";let h=-1,p=-c;return this.legendItems.forEach(((t,u)=>{const f=i+e/2+n.measureText(t.text).width;(0===u||l[l.length-1]+f+2*s>r)&&(d+=c,l[l.length-(u>0?0:1)]=0,p+=c,h++),a[u]={left:0,top:p,row:h,width:f,height:o},l[l.length-1]+=f+s})),d}_fitCols(t,e,i,o){const{ctx:n,maxHeight:r,options:{labels:{padding:s}}}=this,a=this.legendHitBoxes=[],l=this.columnSizes=[],c=r-t;let d=s,h=0,p=0,u=0,f=0;return this.legendItems.forEach(((t,r)=>{const g=i+e/2+n.measureText(t.text).width;r>0&&p+o+2*s>c&&(d+=h+s,l.push({width:h,height:p}),u+=h+s,f++,h=p=0),a[r]={left:u,top:p,col:f,width:g,height:o},h=Math.max(h,g),p+=o+s})),d+=h,l.push({width:h,height:p}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:o},rtl:n}}=this,r=ia(n,this.left,this.width);if(this.isHorizontal()){let n=0,s=cn(i,this.left+o,this.right-this.lineWidths[n]);for(const a of e)n!==a.row&&(n=a.row,s=cn(i,this.left+o,this.right-this.lineWidths[n])),a.top+=this.top+t+o,a.left=r.leftForLtr(r.x(s),a.width),s+=a.width+o}else{let n=0,s=cn(i,this.top+t+o,this.bottom-this.columnSizes[n].height);for(const a of e)a.col!==n&&(n=a.col,s=cn(i,this.top+t+o,this.bottom-this.columnSizes[n].height)),a.top=s,a.left+=this.left+o,a.left=r.leftForLtr(r.x(a.left),a.width),s+=a.height+o}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;Jr(t,this),this._draw(),Zr(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:o}=this,{align:n,labels:r}=t,s=Ur.color,a=ia(t.rtl,this.left,this.width),l=ps(r.font),{color:c,padding:d}=r,h=l.size,p=h/2;let u;this.drawTitle(),o.textAlign=a.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=l.string;const{boxWidth:f,boxHeight:g,itemHeight:m}=ed(r,h),y=this.isHorizontal(),b=this._computeTitleHeight();u=y?{x:cn(n,this.left+d,this.right-i[0]),y:this.top+d+b,line:0}:{x:this.left+d,y:cn(n,this.top+b+d,this.bottom-e[0].height),line:0},oa(this.ctx,t.textDirection);const x=m+d;this.legendItems.forEach(((v,w)=>{o.strokeStyle=v.fontColor||c,o.fillStyle=v.fontColor||c;const _=o.measureText(v.text).width,S=a.textAlign(v.textAlign||(v.textAlign=r.textAlign)),k=f+p+_;let R=u.x,O=u.y;a.setWidth(this.width),y?w>0&&R+k+d>this.right&&(O=u.y+=x,u.line++,R=u.x=cn(n,this.left+d,this.right-i[u.line])):w>0&&O+x>this.bottom&&(R=u.x=R+e[u.line].width+d,u.line++,O=u.y=cn(n,this.top+b+d,this.bottom-e[u.line].height)),function(t,e,i){if(isNaN(f)||f<=0||isNaN(g)||g<0)return;o.save();const n=yn(i.lineWidth,1);if(o.fillStyle=yn(i.fillStyle,s),o.lineCap=yn(i.lineCap,"butt"),o.lineDashOffset=yn(i.lineDashOffset,0),o.lineJoin=yn(i.lineJoin,"miter"),o.lineWidth=n,o.strokeStyle=yn(i.strokeStyle,s),o.setLineDash(yn(i.lineDash,[])),r.usePointStyle){const r={radius:f*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},s=a.xPlus(t,f/2);Kr(o,r,s,e+p)}else{const r=e+Math.max((h-g)/2,0),s=a.leftForLtr(t,f),l=ds(i.borderRadius);o.beginPath(),Object.values(l).some((t=>0!==t))?os(o,{x:s,y:r,w:f,h:g,radius:l}):o.rect(s,r,f,g),o.fill(),0!==n&&o.stroke()}o.restore()}(a.x(R),O,v),R=((t,e,i,o)=>t===(o?"left":"right")?i:"center"===t?(e+i)/2:e)(S,R+f+p,y?R+k:this.right,t.rtl),function(t,e,i){es(o,i.text,t,e+m/2,l,{strikethrough:i.hidden,textAlign:a.textAlign(i.textAlign)})}(a.x(R),O,v),y?u.x+=k+d:u.y+=x})),na(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=ps(e.font),o=hs(e.padding);if(!e.display)return;const n=ia(t.rtl,this.left,this.width),r=this.ctx,s=e.position,a=i.size/2,l=o.top+a;let c,d=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),c=this.top+l,d=cn(t.align,d,this.right-h);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);c=l+cn(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const p=cn(s,d,d+h);r.textAlign=n.textAlign(ln(s)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=i.string,es(r,e.text,p,c,i)}_computeTitleHeight(){const t=this.options.title,e=ps(t.font),i=hs(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,o,n;if(or(t,this.left,this.right)&&or(e,this.top,this.bottom))for(n=this.legendHitBoxes,i=0;i<n.length;++i)if(o=n[i],or(t,o.left,o.left+o.width)&&or(e,o.top,o.top+o.height))return this.legendItems[i];return null}handleEvent(t){const e=this.options;if(!function(t,e){return!("mousemove"!==t||!e.onHover&&!e.onLeave)||!(!e.onClick||"click"!==t&&"mouseup"!==t)}(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type){const o=this._hoveredItem,n=((t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index)(o,i);o&&!n&&xn(e.onLeave,[t,o,this],this),this._hoveredItem=i,i&&!n&&xn(e.onHover,[t,i,this],this)}else i&&xn(e.onClick,[t,i,this],this)}}var od={id:"legend",_element:id,start(t,e,i){const o=t.legend=new id({ctx:t.ctx,options:i,chart:t});ul.configure(t,o,i),ul.addBox(t,o)},stop(t){ul.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const o=t.legend;ul.configure(t,o,i),o.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const o=e.datasetIndex,n=i.chart;n.isDatasetVisible(o)?(n.hide(o),e.hidden=!0):(n.show(o),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:o,textAlign:n,color:r}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const s=t.controller.getStyle(i?0:void 0),a=hs(s.borderWidth);return{text:e[t.index].label,fillStyle:s.backgroundColor,fontColor:r,hidden:!t.visible,lineCap:s.borderCapStyle,lineDash:s.borderDash,lineDashOffset:s.borderDashOffset,lineJoin:s.borderJoinStyle,lineWidth:(a.width+a.height)/4,strokeStyle:s.borderColor,pointStyle:o||s.pointStyle,rotation:s.rotation,textAlign:n||s.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class nd extends Pl{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const o=un(i.text)?i.text.length:1;this._padding=hs(i.padding);const n=o*ps(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=n:this.width=n}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:o,right:n,options:r}=this,s=r.align;let a,l,c,d=0;return this.isHorizontal()?(l=cn(s,i,n),c=e+t,a=n-i):("left"===r.position?(l=i+t,c=cn(s,o,e),d=-.5*Cn):(l=n-t,c=cn(s,e,o),d=.5*Cn),a=o-e),{titleX:l,titleY:c,maxWidth:a,rotation:d}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=ps(e.font),o=i.lineHeight/2+this._padding.top,{titleX:n,titleY:r,maxWidth:s,rotation:a}=this._drawArgs(o);es(t,e.text,0,0,i,{color:e.color,maxWidth:s,rotation:a,textAlign:ln(e.align),textBaseline:"middle",translation:[n,r]})}}var rd={id:"title",_element:nd,start(t,e,i){!function(t,e){const i=new nd({ctx:t.ctx,options:e,chart:t});ul.configure(t,i,e),ul.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const e=t.titleBlock;ul.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const o=t.titleBlock;ul.configure(t,o,i),o.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const sd=new WeakMap;var ad={id:"subtitle",start(t,e,i){const o=new nd({ctx:t.ctx,options:i,chart:t});ul.configure(t,o,i),ul.addBox(t,o),sd.set(t,o)},stop(t){ul.removeBox(t,sd.get(t)),sd.delete(t)},beforeUpdate(t,e,i){const o=sd.get(t);ul.configure(t,o,i),o.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ld={average(t){if(!t.length)return!1;let e,i,o=0,n=0,r=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();o+=t.x,n+=t.y,++r}}return{x:o/r,y:n/r}},nearest(t,e){if(!t.length)return!1;let i,o,n,r=e.x,s=e.y,a=Number.POSITIVE_INFINITY;for(i=0,o=t.length;i<o;++i){const o=t[i].element;if(o&&o.hasValue()){const t=Zn(e,o.getCenterPoint());t<a&&(a=t,n=o)}}if(n){const t=n.tooltipPosition();r=t.x,s=t.y}return{x:r,y:s}}};function cd(t,e){return e&&(un(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function dd(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function hd(t,e){const{element:i,datasetIndex:o,index:n}=e,r=t.getDatasetMeta(o).controller,{label:s,value:a}=r.getLabelAndValue(n);return{chart:t,label:s,parsed:r.getParsed(n),raw:t.data.datasets[o].data[n],formattedValue:a,dataset:r.getDataset(),dataIndex:n,datasetIndex:o,element:i}}function pd(t,e){const i=t.chart.ctx,{body:o,footer:n,title:r}=t,{boxWidth:s,boxHeight:a}=e,l=ps(e.bodyFont),c=ps(e.titleFont),d=ps(e.footerFont),h=r.length,p=n.length,u=o.length,f=hs(e.padding);let g=f.height,m=0,y=o.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);y+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),y&&(g+=u*(e.displayColors?Math.max(a,l.lineHeight):l.lineHeight)+(y-u)*l.lineHeight+(y-1)*e.bodySpacing),p&&(g+=e.footerMarginTop+p*d.lineHeight+(p-1)*e.footerSpacing);let b=0;const x=function(t){m=Math.max(m,i.measureText(t).width+b)};return i.save(),i.font=c.string,vn(t.title,x),i.font=l.string,vn(t.beforeBody.concat(t.afterBody),x),b=e.displayColors?s+2+e.boxPadding:0,vn(o,(t=>{vn(t.before,x),vn(t.lines,x),vn(t.after,x)})),b=0,i.font=d.string,vn(t.footer,x),i.restore(),m+=f.width,{width:m,height:g}}function ud(t,e,i,o){const{x:n,width:r}=i,{width:s,chartArea:{left:a,right:l}}=t;let c="center";return"center"===o?c=n<=(a+l)/2?"left":"right":n<=r/2?c="left":n>=s-r/2&&(c="right"),function(t,e,i,o){const{x:n,width:r}=o,s=i.caretSize+i.caretPadding;return"left"===t&&n+r+s>e.width||"right"===t&&n-r-s<0||void 0}(c,t,e,i)&&(c="center"),c}function fd(t,e,i){const o=i.yAlign||e.yAlign||function(t,e){const{y:i,height:o}=e;return i<o/2?"top":i>t.height-o/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||ud(t,e,i,o),yAlign:o}}function gd(t,e,i,o){const{caretSize:n,caretPadding:r,cornerRadius:s}=t,{xAlign:a,yAlign:l}=i,c=n+r,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=ds(s);let f=function(t,e){let{x:i,width:o}=t;return"right"===e?i-=o:"center"===e&&(i-=o/2),i}(e,a);const g=function(t,e,i){let{y:o,height:n}=t;return"top"===e?o+=i:o-="bottom"===e?n+i:n/2,o}(e,l,c);return"center"===l?"left"===a?f+=c:"right"===a&&(f-=c):"left"===a?f-=Math.max(d,p)+n:"right"===a&&(f+=Math.max(h,u)+n),{x:ir(f,0,o.width-e.width),y:ir(g,0,o.height-e.height)}}function md(t,e,i){const o=hs(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-o.right:t.x+o.left}function yd(t){return cd([],dd(t))}function bd(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class xd extends Pl{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&e.options.animation&&i.animations,n=new ma(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=(this,fs(this.chart.getContext(),{tooltip:this,tooltipItems:this._tooltipItems,type:"tooltip"})))}getTitle(t,e){const{callbacks:i}=e,o=i.beforeTitle.apply(this,[t]),n=i.title.apply(this,[t]),r=i.afterTitle.apply(this,[t]);let s=[];return s=cd(s,dd(o)),s=cd(s,dd(n)),s=cd(s,dd(r)),s}getBeforeBody(t,e){return yd(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const{callbacks:i}=e,o=[];return vn(t,(t=>{const e={before:[],lines:[],after:[]},n=bd(i,t);cd(e.before,dd(n.beforeLabel.call(this,t))),cd(e.lines,n.label.call(this,t)),cd(e.after,dd(n.afterLabel.call(this,t))),o.push(e)})),o}getAfterBody(t,e){return yd(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:i}=e,o=i.beforeFooter.apply(this,[t]),n=i.footer.apply(this,[t]),r=i.afterFooter.apply(this,[t]);let s=[];return s=cd(s,dd(o)),s=cd(s,dd(n)),s=cd(s,dd(r)),s}_createItems(t){const e=this._active,i=this.chart.data,o=[],n=[],r=[];let s,a,l=[];for(s=0,a=e.length;s<a;++s)l.push(hd(this.chart,e[s]));return t.filter&&(l=l.filter(((e,o,n)=>t.filter(e,o,n,i)))),t.itemSort&&(l=l.sort(((e,o)=>t.itemSort(e,o,i)))),vn(l,(e=>{const i=bd(t.callbacks,e);o.push(i.labelColor.call(this,e)),n.push(i.labelPointStyle.call(this,e)),r.push(i.labelTextColor.call(this,e))})),this.labelColors=o,this.labelPointStyles=n,this.labelTextColors=r,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),o=this._active;let n,r=[];if(o.length){const t=ld[i.position].call(this,o,this._eventPosition);r=this._createItems(i),this.title=this.getTitle(r,i),this.beforeBody=this.getBeforeBody(r,i),this.body=this.getBody(r,i),this.afterBody=this.getAfterBody(r,i),this.footer=this.getFooter(r,i);const e=this._size=pd(this,i),s=Object.assign({},t,e),a=fd(this.chart,i,s),l=gd(i,s,a,this.chart);this.xAlign=a.xAlign,this.yAlign=a.yAlign,n={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(n={opacity:0});this._tooltipItems=r,this.$context=void 0,n&&this._resolveAnimations().update(this,n),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,o){const n=this.getCaretPosition(t,i,o);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}getCaretPosition(t,e,i){const{xAlign:o,yAlign:n}=this,{caretSize:r,cornerRadius:s}=i,{topLeft:a,topRight:l,bottomLeft:c,bottomRight:d}=ds(s),{x:h,y:p}=t,{width:u,height:f}=e;let g,m,y,b,x,v;return"center"===n?(x=p+f/2,"left"===o?(g=h,m=g-r,b=x+r,v=x-r):(g=h+u,m=g+r,b=x-r,v=x+r),y=g):(m="left"===o?h+Math.max(a,c)+r:"right"===o?h+u-Math.max(l,d)-r:this.caretX,"top"===n?(b=p,x=b-r,g=m-r,y=m+r):(b=p+f,x=b+r,g=m+r,y=m-r),v=b),{x1:g,x2:m,x3:y,y1:b,y2:x,y3:v}}drawTitle(t,e,i){const o=this.title,n=o.length;let r,s,a;if(n){const l=ia(i.rtl,this.x,this.width);for(t.x=md(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",r=ps(i.titleFont),s=i.titleSpacing,e.fillStyle=i.titleColor,e.font=r.string,a=0;a<n;++a)e.fillText(o[a],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s,a+1===n&&(t.y+=i.titleMarginBottom-s)}}_drawColorBox(t,e,i,o,n){const r=this.labelColors[i],s=this.labelPointStyles[i],{boxHeight:a,boxWidth:l,boxPadding:c}=n,d=ps(n.bodyFont),h=md(this,"left",n),p=o.x(h),u=a<d.lineHeight?(d.lineHeight-a)/2:0,f=e.y+u;if(n.usePointStyle){const e={radius:Math.min(l,a)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},i=o.leftForLtr(p,l)+l/2,c=f+a/2;t.strokeStyle=n.multiKeyBackground,t.fillStyle=n.multiKeyBackground,Kr(t,e,i,c),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,Kr(t,e,i,c)}else{t.lineWidth=r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const e=o.leftForLtr(p,l-c),i=o.leftForLtr(o.xPlus(p,1),l-c-2),s=ds(r.borderRadius);Object.values(s).some((t=>0!==t))?(t.beginPath(),t.fillStyle=n.multiKeyBackground,os(t,{x:e,y:f,w:l,h:a,radius:s}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),os(t,{x:i,y:f+1,w:l-2,h:a-2,radius:s}),t.fill()):(t.fillStyle=n.multiKeyBackground,t.fillRect(e,f,l,a),t.strokeRect(e,f,l,a),t.fillStyle=r.backgroundColor,t.fillRect(i,f+1,l-2,a-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:o}=this,{bodySpacing:n,bodyAlign:r,displayColors:s,boxHeight:a,boxWidth:l,boxPadding:c}=i,d=ps(i.bodyFont);let h=d.lineHeight,p=0;const u=ia(i.rtl,this.x,this.width),f=function(i){e.fillText(i,u.x(t.x+p),t.y+h/2),t.y+=h+n},g=u.textAlign(r);let m,y,b,x,v,w,_;for(e.textAlign=r,e.textBaseline="middle",e.font=d.string,t.x=md(this,g,i),e.fillStyle=i.bodyColor,vn(this.beforeBody,f),p=s&&"right"!==g?"center"===r?l/2+c:l+2+c:0,x=0,w=o.length;x<w;++x){for(m=o[x],y=this.labelTextColors[x],e.fillStyle=y,vn(m.before,f),b=m.lines,s&&b.length&&(this._drawColorBox(e,t,x,u,i),h=Math.max(d.lineHeight,a)),v=0,_=b.length;v<_;++v)f(b[v]),h=d.lineHeight;vn(m.after,f)}p=0,h=d.lineHeight,vn(this.afterBody,f),t.y-=n}drawFooter(t,e,i){const o=this.footer,n=o.length;let r,s;if(n){const a=ia(i.rtl,this.x,this.width);for(t.x=md(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=a.textAlign(i.footerAlign),e.textBaseline="middle",r=ps(i.footerFont),e.fillStyle=i.footerColor,e.font=r.string,s=0;s<n;++s)e.fillText(o[s],a.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+i.footerSpacing}}drawBackground(t,e,i,o){const{xAlign:n,yAlign:r}=this,{x:s,y:a}=t,{width:l,height:c}=i,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=ds(o.cornerRadius);e.fillStyle=o.backgroundColor,e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.beginPath(),e.moveTo(s+d,a),"top"===r&&this.drawCaret(t,e,i,o),e.lineTo(s+l-h,a),e.quadraticCurveTo(s+l,a,s+l,a+h),"center"===r&&"right"===n&&this.drawCaret(t,e,i,o),e.lineTo(s+l,a+c-u),e.quadraticCurveTo(s+l,a+c,s+l-u,a+c),"bottom"===r&&this.drawCaret(t,e,i,o),e.lineTo(s+p,a+c),e.quadraticCurveTo(s,a+c,s,a+c-p),"center"===r&&"left"===n&&this.drawCaret(t,e,i,o),e.lineTo(s,a+d),e.quadraticCurveTo(s,a,s+d,a),e.closePath(),e.fill(),o.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,o=i&&i.x,n=i&&i.y;if(o||n){const i=ld[t.position].call(this,this._active,this._eventPosition);if(!i)return;const r=this._size=pd(this,t),s=Object.assign({},i,this._size),a=fd(e,t,s),l=gd(t,s,a,e);o._to===l.x&&n._to===l.y||(this.xAlign=a.xAlign,this.yAlign=a.yAlign,this.width=r.width,this.height=r.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const o={width:this.width,height:this.height},n={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const r=hs(e.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&s&&(t.save(),t.globalAlpha=i,this.drawBackground(n,t,o,e),oa(t,e.textDirection),n.y+=r.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),na(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,o=t.map((({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}})),n=!wn(i,o),r=this._positionChanged(o,e);(n||r)&&(this._active=o,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,n=this._active||[],r=this._getActiveElements(t,n,e,i),s=this._positionChanged(r,t),a=e||!wn(r,n)||s;return a&&(this._active=r,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),a}_getActiveElements(t,e,i,o){const n=this.options;if("mouseout"===t.type)return[];if(!o)return e;const r=this.chart.getElementsAtEventForMode(t,n.mode,n,i);return n.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:i,caretY:o,options:n}=this,r=ld[n.position].call(this,t,e);return!1!==r&&(i!==r.x||o!==r.y)}}xd.positioners=ld;var vd={id:"tooltip",_element:xd,positioners:ld,afterInit(t,e,i){i&&(t.tooltip=new xd({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip,i={tooltip:e};!1!==t.notifyPlugins("beforeTooltipDraw",i)&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i))},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:dn,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,o=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(o>0&&e.dataIndex<o)return i[e.dataIndex]}return""},afterTitle:dn,beforeBody:dn,beforeLabel:dn,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return pn(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:dn,afterBody:dn,beforeFooter:dn,footer:dn,afterFooter:dn}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},wd=Object.freeze({__proto__:null,Decimation:Nc,Filler:td,Legend:od,SubTitle:ad,Title:rd,Tooltip:vd});class _d extends zl{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:o}of e)t[i]===o&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(pn(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:ir(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:function(t,e,i,o){const n=t.indexOf(e);return-1===n?((t,e,i,o)=>("string"==typeof e?(i=t.push(e)-1,o.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,o):n!==t.lastIndexOf(e)?i:n}(i,t,yn(e,t),this._addedLabels),i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:o}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,o=[];let n=this.getLabels();n=0===t&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)o.push({value:i});return o}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function Sd(t,e,{horizontal:i,minRotation:o}){const n=Gn(o),r=(i?Math.sin(n):Math.cos(n))||.001,s=.75*e*(""+t).length;return Math.min(e/r,s)}_d.id="category",_d.defaults={ticks:{callback:_d.prototype.getLabelForValue}};class kd extends zl{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return pn(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:o,max:n}=this;const r=t=>o=e?o:t,s=t=>n=i?n:t;if(t){const t=Fn(o),e=Fn(n);t<0&&e<0?s(0):t>0&&e>0&&r(0)}if(o===n){let e=1;(n>=Number.MAX_SAFE_INTEGER||o<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*n)),s(n+e),t||r(o-e)}this.min=o,this.max=n}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:o}=t;return o?(e=Math.ceil(this.max/o)-Math.floor(this.min/o)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${o} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const o=function(t,e){const i=[],{bounds:o,step:n,min:r,max:s,precision:a,count:l,maxTicks:c,maxDigits:d,includeBounds:h}=t,p=n||1,u=c-1,{min:f,max:g}=e,m=!pn(r),y=!pn(s),b=!pn(l),x=(g-f)/(d+1);let v,w,_,S,k=Un((g-f)/u/p)*p;if(k<1e-14&&!m&&!y)return[{value:f},{value:g}];S=Math.ceil(g/k)-Math.floor(f/k),S>u&&(k=Un(S*k/u/p)*p),pn(a)||(v=Math.pow(10,a),k=Math.ceil(k*v)/v),"ticks"===o?(w=Math.floor(f/k)*k,_=Math.ceil(g/k)*k):(w=f,_=g),m&&y&&n&&function(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}((s-r)/n,k/1e3)?(S=Math.round(Math.min((s-r)/k,c)),k=(s-r)/S,w=r,_=s):b?(w=m?r:w,_=y?s:_,S=l-1,k=(_-w)/S):(S=(_-w)/k,S=Yn(S,Math.round(S),k/1e3)?Math.round(S):Math.ceil(S));const R=Math.max(Xn(k),Xn(w));v=Math.pow(10,pn(a)?R:a),w=Math.round(w*v)/v,_=Math.round(_*v)/v;let O=0;for(m&&(h&&w!==r?(i.push({value:r}),w<r&&O++,Yn(Math.round((w+O*k)*v)/v,r,Sd(r,x,t))&&O++):w<r&&O++);O<S;++O)i.push({value:Math.round((w+O*k)*v)/v});return y&&h&&_!==s?i.length&&Yn(i[i.length-1].value,s,Sd(s,x,t))?i[i.length-1].value=s:i.push({value:s}):y&&_!==s||i.push({value:_}),i}({maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&qn(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const o=(i-e)/Math.max(t.length-1,1)/2;e-=o,i+=o}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return ea(t,this.chart.options.locale,this.options.ticks.format)}}class Rd extends kd{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=gn(t)?t:0,this.max=gn(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Gn(this.options.ticks.minRotation),o=(t?Math.sin(i):Math.cos(i))||.001,n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/o))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function Od(t){return 1==t/Math.pow(10,Math.floor(Hn(t)))}Rd.id="linear",Rd.defaults={ticks:{callback:Dl.formatters.numeric}};class $d extends zl{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=kd.prototype.parse.apply(this,[t,e]);if(0!==i)return gn(i)&&i>0?i:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=gn(t)?Math.max(0,t):null,this.max=gn(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,o=this.max;const n=e=>i=t?i:e,r=t=>o=e?o:t,s=(t,e)=>Math.pow(10,Math.floor(Hn(t))+e);i===o&&(i<=0?(n(1),r(10)):(n(s(i,-1)),r(s(o,1)))),i<=0&&n(s(o,-1)),o<=0&&r(s(i,1)),this._zero&&this.min!==this._suggestedMin&&i===s(this.min,0)&&n(s(i,-1)),this.min=i,this.max=o}buildTicks(){const t=this.options,e=function(t,e){const i=Math.floor(Hn(e.max)),o=Math.ceil(e.max/Math.pow(10,i)),n=[];let r=mn(t.min,Math.pow(10,Math.floor(Hn(e.min)))),s=Math.floor(Hn(r)),a=Math.floor(r/Math.pow(10,s)),l=s<0?Math.pow(10,Math.abs(s)):1;do{n.push({value:r,major:Od(r)}),++a,10===a&&(a=1,++s,l=s>=0?1:l),r=Math.round(a*Math.pow(10,s)*l)/l}while(s<i||s===i&&a<o);const c=mn(t.max,r);return n.push({value:c,major:Od(r)}),n}({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&qn(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":ea(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Hn(t),this._valueRange=Hn(this.max)-Hn(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Hn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function Ed(t){const e=t.ticks;if(e.display&&t.display){const t=hs(e.backdropPadding);return yn(e.font&&e.font.size,Ur.font.size)+t.height}return 0}function Td(t,e,i,o,n){return t===o||t===n?{start:e-i/2,end:e+i/2}:t<o||t>n?{start:e-i,end:e}:{start:e,end:e+i}}function Pd(t,e,i,o,n){const r=Math.abs(Math.sin(i)),s=Math.abs(Math.cos(i));let a=0,l=0;o.start<e.l?(a=(e.l-o.start)/r,t.l=Math.min(t.l,e.l-a)):o.end>e.r&&(a=(o.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),n.start<e.t?(l=(e.t-n.start)/s,t.t=Math.min(t.t,e.t-l)):n.end>e.b&&(l=(n.end-e.b)/s,t.b=Math.max(t.b,e.b+l))}function Md(t){return 0===t||180===t?"center":t<180?"left":"right"}function Dd(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function Ad(t,e,i){return 90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e),t}function Cd(t,e,i,o){const{ctx:n}=t;if(i)n.arc(t.xCenter,t.yCenter,e,0,In);else{let i=t.getPointPosition(0,e);n.moveTo(i.x,i.y);for(let r=1;r<o;r++)i=t.getPointPosition(r,e),n.lineTo(i.x,i.y)}}$d.id="logarithmic",$d.defaults={ticks:{callback:Dl.formatters.logarithmic,major:{enabled:!0}}};class Id extends kd{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=hs(Ed(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=gn(t)&&!isNaN(t)?t:0,this.max=gn(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ed(this.options))}generateTickLabels(t){kd.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const i=xn(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?function(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),o=[],n=[],r=t._pointLabels.length,s=t.options.pointLabels,a=s.centerPointLabels?Cn/r:0;for(let h=0;h<r;h++){const r=s.setContext(t.getPointLabelContext(h));n[h]=r.padding;const p=t.getPointPosition(h,t.drawingArea+n[h],a),u=ps(r.font),f=(l=t.ctx,c=u,d=un(d=t._pointLabels[h])?d:[d],{w:Yr(l,c.string,d),h:d.length*c.lineHeight});o[h]=f;const g=tr(t.getIndexAngle(h)+a),m=Math.round(Kn(g));Pd(i,e,g,Td(m,p.x,f.w,0,180),Td(m,p.y,f.h,90,270))}var l,c,d;t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){const o=[],n=t._pointLabels.length,r=t.options,s=Ed(r)/2,a=t.drawingArea,l=r.pointLabels.centerPointLabels?Cn/n:0;for(let r=0;r<n;r++){const n=t.getPointPosition(r,a+s+i[r],l),c=Math.round(Kn(tr(n.angle+Bn))),d=e[r],h=Ad(n.y,d.h,c),p=Md(c),u=Dd(n.x,d.w,p);o.push({x:n.x,y:h,textAlign:p,left:u,top:h,right:u+d.w,bottom:h+d.h})}return o}(t,o,n)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,o){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,o))}getIndexAngle(t){return tr(t*(In/(this._pointLabels.length||1))+Gn(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(pn(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(pn(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return function(t,e,i){return fs(t,{label:i,index:e,type:"pointLabel"})}(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const o=this.getIndexAngle(t)-Bn+i;return{x:Math.cos(o)*e+this.xCenter,y:Math.sin(o)*e+this.yCenter,angle:o}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:o,bottom:n}=this._pointLabelItems[t];return{left:e,top:i,right:o,bottom:n}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Cd(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:o}=e,n=this._pointLabels.length;let r,s,a;if(e.pointLabels.display&&function(t,e){const{ctx:i,options:{pointLabels:o}}=t;for(let n=e-1;n>=0;n--){const e=o.setContext(t.getPointLabelContext(n)),r=ps(e.font),{x:s,y:a,textAlign:l,left:c,top:d,right:h,bottom:p}=t._pointLabelItems[n],{backdropColor:u}=e;if(!pn(u)){const t=hs(e.backdropPadding);i.fillStyle=u,i.fillRect(c-t.left,d-t.top,h-c+t.width,p-d+t.height)}es(i,t._pointLabels[n],s,a+r.lineHeight/2,r,{color:e.color,textAlign:l,textBaseline:"middle"})}}(this,n),o.display&&this.ticks.forEach(((t,e)=>{0!==e&&(s=this.getDistanceFromCenterForValue(t.value),function(t,e,i,o){const n=t.ctx,r=e.circular,{color:s,lineWidth:a}=e;!r&&!o||!s||!a||i<0||(n.save(),n.strokeStyle=s,n.lineWidth=a,n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),Cd(t,i,r,o),n.closePath(),n.stroke(),n.restore())}(this,o.setContext(this.getContext(e-1)),s,n))})),i.display){for(t.save(),r=n-1;r>=0;r--){const o=i.setContext(this.getPointLabelContext(r)),{color:n,lineWidth:l}=o;l&&n&&(t.lineWidth=l,t.strokeStyle=n,t.setLineDash(o.borderDash),t.lineDashOffset=o.borderDashOffset,s=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),a=this.getPointPosition(r,s),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(a.x,a.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const o=this.getIndexAngle(0);let n,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((o,s)=>{if(0===s&&!e.reverse)return;const a=i.setContext(this.getContext(s)),l=ps(a.font);if(n=this.getDistanceFromCenterForValue(this.ticks[s].value),a.showLabelBackdrop){t.font=l.string,r=t.measureText(o.label).width,t.fillStyle=a.backdropColor;const e=hs(a.backdropPadding);t.fillRect(-r/2-e.left,-n-l.size/2-e.top,r+e.width,l.size+e.height)}es(t,o.label,0,-n,l,{color:a.color})})),t.restore()}drawTitle(){}}Id.id="radialLinear",Id.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Dl.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},Id.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},Id.descriptors={angleLines:{_fallback:"grid"}};const jd={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ld=Object.keys(jd);function Nd(t,e){return t-e}function Bd(t,e){if(pn(e))return null;const i=t._adapter,{parser:o,round:n,isoWeekday:r}=t._parseOpts;let s=e;return"function"==typeof o&&(s=o(s)),gn(s)||(s="string"==typeof o?i.parse(s,o):i.parse(s)),null===s?null:(n&&(s="week"!==n||!Vn(r)&&!0!==r?i.startOf(s,n):i.startOf(s,"isoWeek",r)),+s)}function zd(t,e,i,o){const n=Ld.length;for(let r=Ld.indexOf(t);r<n-1;++r){const t=jd[Ld[r]],n=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(n*t.size))<=o)return Ld[r]}return Ld[n-1]}function Wd(t,e,i){if(i){if(i.length){const{lo:o,hi:n}=gs(i,e);t[i[o]>=e?i[o]:i[n]]=!0}}else t[e]=!0}function Hd(t,e,i){const o=[],n={},r=e.length;let s,a;for(s=0;s<r;++s)a=e[s],n[a]=s,o.push({value:a,major:!1});return 0!==r&&i?function(t,e,i,o){const n=t._adapter,r=+n.startOf(e[0].value,o),s=e[e.length-1].value;let a,l;for(a=r;a<=s;a=+n.add(a,1,o))l=i[a],l>=0&&(e[l].major=!0);return e}(t,o,n,i):o}class Fd extends zl{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const i=t.time||(t.time={}),o=this._adapter=new Ga._date(t.adapters.date);On(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Bd(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:o,max:n,minDefined:r,maxDefined:s}=this.getUserBounds();function a(t){r||isNaN(t.min)||(o=Math.min(o,t.min)),s||isNaN(t.max)||(n=Math.max(n,t.max))}r&&s||(a(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||a(this.getMinMax(!1))),o=gn(o)&&!isNaN(o)?o:+e.startOf(Date.now(),i),n=gn(n)&&!isNaN(n)?n:+e.endOf(Date.now(),i)+1,this.min=Math.min(o,n-1),this.max=Math.max(o+1,n)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,o="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const n=this.min,r=function(t,e,i){let o=0,n=t.length;for(;o<n&&t[o]<e;)o++;for(;n>o&&t[n-1]>i;)n--;return o>0||n<t.length?t.slice(o,n):t}(o,n,this.max);return this._unit=e.unit||(i.autoSkip?zd(e.minUnit,this.min,this.max,this._getLabelCapacity(n)):function(t,e,i,o,n){for(let r=Ld.length-1;r>=Ld.indexOf(i);r--){const i=Ld[r];if(jd[i].common&&t._adapter.diff(n,o,i)>=e-1)return i}return Ld[i?Ld.indexOf(i):0]}(this,r.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=Ld.indexOf(t)+1,i=Ld.length;e<i;++e)if(jd[Ld[e]].common)return Ld[e]}(this._unit):void 0,this.initOffsets(o),t.reverse&&r.reverse(),Hd(this,r,this._majorUnit)}initOffsets(t){let e,i,o=0,n=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),o=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),n=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;o=ir(o,0,r),n=ir(n,0,r),this._offsets={start:o,end:n,factor:1/(o+1+n)}}_generate(){const t=this._adapter,e=this.min,i=this.max,o=this.options,n=o.time,r=n.unit||zd(n.minUnit,e,i,this._getLabelCapacity(e)),s=yn(n.stepSize,1),a="week"===r&&n.isoWeekday,l=Vn(a)||!0===a,c={};let d,h,p=e;if(l&&(p=+t.startOf(p,"isoWeek",a)),p=+t.startOf(p,l?"day":r),t.diff(i,e,r)>1e5*s)throw new Error(e+" and "+i+" are too far apart with stepSize of "+s+" "+r);const u="data"===o.ticks.source&&this.getDataTimestamps();for(d=p,h=0;d<i;d=+t.add(d,s,r),h++)Wd(c,d,u);return d!==i&&"ticks"!==o.bounds&&1!==h||Wd(c,d,u),Object.keys(c).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,o){const n=this.options,r=n.time.displayFormats,s=this._unit,a=this._majorUnit,l=s&&r[s],c=a&&r[a],d=i[e],h=a&&c&&d&&d.major,p=this._adapter.format(t,o||(h?c:l)),u=n.ticks.callback;return u?xn(u,[p,e,i],this):p}generateTickLabels(t){let e,i,o;for(e=0,i=t.length;e<i;++e)o=t[e],o.label=this._tickFormatFunction(o.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,o=Gn(this.isHorizontal()?e.maxRotation:e.minRotation),n=Math.cos(o),r=Math.sin(o),s=this._resolveTickFontOptions(0).size;return{w:i*n+s*r,h:i*r+s*n}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,o=i[e.unit]||i.millisecond,n=this._tickFormatFunction(t,0,Hd(this,[t],this._majorUnit),o),r=this._getLabelSize(n),s=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return s>0?s:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(t=0,e=o.length;t<e;++t)i=i.concat(o[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const o=this.getLabels();for(e=0,i=o.length;e<i;++e)t.push(Bd(this,o[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return vs(t.sort(Nd))}}function Ud(t,e,i){let o,n,r,s,a=0,l=t.length-1;i?(e>=t[a].pos&&e<=t[l].pos&&({lo:a,hi:l}=ms(t,"pos",e)),({pos:o,time:r}=t[a]),({pos:n,time:s}=t[l])):(e>=t[a].time&&e<=t[l].time&&({lo:a,hi:l}=ms(t,"time",e)),({time:o,pos:r}=t[a]),({time:n,pos:s}=t[l]));const c=n-o;return c?r+(s-r)*(e-o)/c:r}Fd.id="time",Fd.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class Vd extends Fd{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Ud(e,this.min),this._tableRange=Ud(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,o=[],n=[];let r,s,a,l,c;for(r=0,s=t.length;r<s;++r)l=t[r],l>=e&&l<=i&&o.push(l);if(o.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(r=0,s=o.length;r<s;++r)c=o[r+1],a=o[r-1],l=o[r],Math.round((c+a)/2)!==l&&n.push({time:l,pos:r/(s-1)});return n}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Ud(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Ud(this._table,i*this._tableRange+this._minPos,!0)}}Vd.id="timeseries",Vd.defaults=Fd.defaults;const Yd=[Va,Ic,wd,Object.freeze({__proto__:null,CategoryScale:_d,LinearScale:Rd,LogarithmicScale:$d,RadialLinearScale:Id,TimeScale:Fd,TimeSeriesScale:Vd})];pc.register(...Yd);const qd=pc;var Gd=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Kd=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xd=class extends Q{updated(t){t.has("options")&&this.options&&this.loadCanvas().then((()=>{console.log("canvas loaded.")}))}render(){return A`<div style="width: 100%; height:100%;">
      <canvas id="bar-chart" width="100%"></canvas>
    </div>`}loadCanvas(){return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const t=yield this.canvas;t&&new qd(t,this.options)}))}};var Jd;Xd.styles=n`
    :host {
      display: block;
    }
  `,Gd([at({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("#bar-chart")},enumerable:!0,configurable:!0})}),Kd("design:type",Object)],Xd.prototype,"canvas",void 0),Gd([st(),Kd("design:type",Object)],Xd.prototype,"options",void 0),Xd=Gd([nt("nidoca-chart-js-wrapper")],Xd),et.getUniqueInstance().initDefaultComponents(),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(t){t.STRING="String",t.NUMBER="Number",t.BOOLEAN="Boolean",t.COMBOBOX="Class",t.ARRAY="Array",t.UNDEFINED="undefined"}(Jd||(Jd={}));class Zd{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?Jd.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?Jd.UNDEFINED:this.getTypeName():Jd.COMBOBOX}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let i=0;i<e.length;i++){const o=e[i];if(o.key==t)return o.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class Qd{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let i=[];if(e&&(e.tagName==t&&i.push(e),e.children.length>0)){const o=null==e?void 0:e.children;for(let e=0;e<o.length;e++)i=i.concat(this.getElementsByTagName(t,o.item(e)))}return i}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed");const e=[];for(const i of Array.from(t.keys()))e.push(new Zd(i,t.get(i)));return e}}class th{constructor(t){this.propertyWrapper=t}getInputElement(t){if(null==t)return A``;const e=t.classWrapper;if(null==e)return A``;switch(this.propertyWrapper.getRenderType()){case Jd.STRING:return A`<nidoca-form-text .textType="${pe.TEXT}"
        label="${this.propertyWrapper.propertyName}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
        /></nidoca-form-text>`;case Jd.NUMBER:return A`<nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${pe.NUMBER}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case Jd.BOOLEAN:return A`<nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case Jd.COMBOBOX:return A` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${de.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter((t=>this.propertyWrapper.getType()[t]==e.instance[this.propertyWrapper.propertyName]))[0]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(i.target.getOutputData().value),t.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case Jd.ARRAY:return A`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${de.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${e.instance[this.propertyWrapper.propertyName]}"
            @input="${t=>{e.instance[this.propertyWrapper.propertyName]=t.target.getOutputData().value,e.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return A``}}getAsHtml(t){switch(this.propertyWrapper.getConverterTypeName()){case Jd.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case Jd.ARRAY:return"";case Jd.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case Jd.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case Jd.STRING:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case Jd.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getConverterTypeName()){case Jd.COMBOBOX:case Jd.ARRAY:return"";case Jd.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getConverterTypeName()){case Jd.COMBOBOX:case Jd.ARRAY:return"";case Jd.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class eh{constructor(t,e){this.parent=t,this.classWrapper=e}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`\n<${this.classWrapper.getTagName()}\n${this.classWrapper.getProperties().map((t=>`.${t.propertyName}="\${this.${t.propertyName}}"\n`)).join("")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(t){return t.indexOf(">")>-1&&(t=t.substr(t.indexOf(">")+1,t.length)),t}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(A`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new th(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}var ih=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},oh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let nh=class extends Q{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(t){t.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new eh(this,new Qd(this.element)),this.requestUpdate())}render(){var t,e,i,o,n,r,s;return A` <nidoca-section .theme="${it.PRIMARY}">
        <div>
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-text .type="${bt.H2}">Tag</nidoca-text>
          </nidoca-layout-spacer>
          <nidoca-code
            >${this.webcomponentGuiWrapper?this.webcomponentGuiWrapper.classWrapper.getHTMLTag():""}
          </nidoca-code>

          <div style="padding-top:var(--space-3);">
            <nidoca-section> ${this.element} </nidoca-section>
          </div>
        </div>

        <div style="padding-left:var(--space-3)">
          ${(null===(t=this.webcomponentGuiWrapper)||void 0===t?void 0:t.hasProperties())?A`
                <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
                  <nidoca-text .type="${bt.H2}"> Attribute </nidoca-text>
                </nidoca-layout-spacer>

                ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((t=>A`${t.getInputElement(this.webcomponentGuiWrapper)}
                    <div style="padding-bottom:var(--space-6);"></div>`))}
              `:A``}
          ${(null===(e=this.webcomponentGuiWrapper)||void 0===e?void 0:e.classWrapper.hasSlots())?A` <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
                  <nidoca-text .type="${bt.H2}">Slots </nidoca-text>
                </nidoca-layout-spacer>

                <nidoca-table
                  .headers="${["name"]}"
                  .rows="${this.toSlotRows(this.webcomponentGuiWrapper.classWrapper.getSlotNames())}"
                >
                </nidoca-table>`:A``}
          ${this.customEventNames.length>0?A` <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
                  <nidoca-text .type="${bt.H2}">Custom Events </nidoca-text>
                </nidoca-layout-spacer>
                <nidoca-table .headers="${["name"]}" .rows="${this.toCustomEventRows(this.customEventNames)}">
                </nidoca-table>`:A``}
        </div>
      </nidoca-section>
      <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
        <nidoca-text .type="${bt.H2}"> Quelltext </nidoca-text>
      </nidoca-layout-spacer>
      <nidoca-tabs tabIndex="0">
        <nidoca-tab slot="tab">Javascript</nidoca-tab>
        <nidoca-tab slot="tab">Typescript</nidoca-tab>
        <nidoca-tab slot="tab">Lit</nidoca-tab>
        <nidoca-tab slot="tab">Angular</nidoca-tab>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-code style="width:100%;">${null===(i=this.webcomponentGuiWrapper)||void 0===i?void 0:i.getAsJavascript()} </nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-code>${null===(o=this.webcomponentGuiWrapper)||void 0===o?void 0:o.getTypescript()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-code>${null===(n=this.webcomponentGuiWrapper)||void 0===n?void 0:n.getAsLit()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
            <nidoca-code>${null===(r=this.webcomponentGuiWrapper)||void 0===r?void 0:r.getAsHtml()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>
      </nidoca-tabs>

      <nidoca-layout-spacer top="var(--space)" bottom="var(--space)">
        <nidoca-text .type="${bt.H2}"> Attribute </nidoca-text>
      </nidoca-layout-spacer>

      <nidoca-table
        .headers="${["name","type","converter type","render type"]}"
        .rows="${this.toAttributeRows(null===(s=this.webcomponentGuiWrapper)||void 0===s?void 0:s.getPropertyGuiWrappers())}"
      >
      </nidoca-table>
      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements()[0];i instanceof HTMLElement&&(this.element=i)}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t.propertyWrapper.propertyName),i.push(t.propertyWrapper.getTypeName()),i.push(t.propertyWrapper.getConverterTypeName()),i.push(t.propertyWrapper.getRenderType()),e.push(i),i})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}};nh.styles=n`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `,ih([st({type:Array}),oh("design:type",Array)],nh.prototype,"customEventNames",void 0),ih([st({type:Object}),oh("design:type",Object)],nh.prototype,"element",void 0),nh=ih([nt("webcomponent-viewer")],nh);let rh=class extends Q{render(){return A`
      <nidoca-section style="width:50%;">
        <div style="padding-top:20vh;padding-bottom:20vh;">
          <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
            <nidoca-img
              width="100px"
              height="100px"
              src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg"
            >
            </nidoca-img>
            <nidoca-text .type="${bt.H1}">&nbsp;nidoca-webcomponents</nidoca-text>
          </div>
        </div>
      </nidoca-section>

      <nidoca-container .theme="${it.PRIMARY}">
        <nidoca-section>
          <nidoca-icon-with-description title="Komponentenbibliothek" icon="local_library">
            Die Nidoca Webcomponents ist eine Sammlung von Webkomponenten mit über
            ${et.getUniqueInstance().registeredElementNames.length} Komponenten. Diese sind für den direkten Einsatz
            in deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die Komponenten können dank der
            Webcomponent Technologie überall in andere Frameworks eingebaungen werden.
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

      <nidoca-container .theme="${it.SECONDARY}">
        <nidoca-section style="width:50%; padding-top:var(--space-8);padding-bottom:var(--space-8);">
          <nidoca-article
            summary="Die Komponenten sind für Desktop, Tablet und Mobile optimiert."
            text="The components looks good on all devices, because they are designed responsive. Responsive web design is a
            creative and technical paradigm for creating websites, so that they can react to the properties of the end
            device used, especially smartphones and tablet computers."
          >
            <nidoca-text slot="title" .type="${bt.H2}">Responsive Komponenten</nidoca-text>
          </nidoca-article>
        </nidoca-section>
      </nidoca-container>

      <nidoca-container .theme="${it.BACKGROUND}">
        <nidoca-section style="width:50%; padding-top:var(--space-8);padding-bottom:var(--space-8);">
          <nidoca-article
            summary="Alle Komponenten erfüllen den Webcomponent Standart"
            text="Webkomponenten sind eine Gruppe von Web-Technologien, die es ermöglichen, benutzerdefinierte, wiederverwendbare HTML Elemente zu erstellen, deren Funktionalität gekapselt ist und damit vollständig getrennt von anderem Code."
          >
            <nidoca-text slot="title" .type="${bt.H2}">Webcomponents</nidoca-text>
          </nidoca-article>
        </nidoca-section>
      </nidoca-container>

      <nidoca-container .theme="${it.PRIMARY}">
        <nidoca-section style="width:50%; padding:var(--space-8);">
          <nidoca-form-contact></nidoca-form-contact>
        </nidoca-section>
      </nidoca-container>

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
          title="Komponentenframework"
          summary="Es ist ein HTML Kom"
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
        <nidoca-icon style="font-size:256px;" icon="donut_small"></nidoca-icon>
      </nidoca-section>
    `}};rh.styles=n``,rh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-main")],rh);var sh=function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))};class ah{constructor(t){this.host=t}persist(t,e){return sh(this,void 0,void 0,(function*(){const i=this.host.concat(t),o=yield this.request(i,"POST","application/json; charset=utf-8",e);return console.log("persist item, value: %s",JSON.stringify(e)),this.parse(yield o.text())[0]}))}update(t,e,i){return sh(this,void 0,void 0,(function*(){const o=this.host.concat(t).concat("?id=eq.".concat(e));console.debug("update item value: %s",JSON.stringify(i));const n=yield this.request(o,"PUT","application/json; charset=utf-8",i);return console.log("item updated ? ".concat(String(n.status))),200==n.status}))}delete(t,e){return sh(this,void 0,void 0,(function*(){const i=this.host.concat(t).concat("?id=eq.").concat(e),o=yield this.request(i,"DELETE","application/json; charset=utf-8",void 0);return console.debug("delete item for id= %s",e),200==o.status}))}search(t,e){return sh(this,void 0,void 0,(function*(){const i=this.host.concat(t).concat(e),o=yield this.request(i,"GET","application/json; charset=utf-8",void 0);return this.parse(yield o.text())}))}request(t,e,i,o){return sh(this,void 0,void 0,(function*(){const n={"Accept-Encoding":"*"};n["Content-Type"]=i,n.Prefer="return=representation";const r={headers:n,method:e,body:JSON.stringify(o)},s=yield fetch(t,r);return console.info("response status: ",s.status),s}))}parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let t=0;t<e.length;t++)if(e[t].exec(i)){i=new Date(i);break}return i}))}}var lh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ch=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let dh=class extends Q{constructor(){super(...arguments),this.client=new ah("http://89.58.33.189")}firstUpdated(){this.client.search("/vertrag","").then((t=>{const e=t.filter((t=>t.kosten>0)).sort(((t,e)=>t.kosten/t.abrechnungsperiode>e.kosten/e.abrechnungsperiode?-1:1));let i=0;e.forEach((t=>{i+=t.kosten/t.abrechnungsperiode})),console.log(i),this.options={type:"bar",data:{labels:e.map((t=>t.name)),datasets:[{indexAxis:"y",label:"Kosten pro Monat",data:e.map((t=>t.kosten/t.abrechnungsperiode)),backgroundColor:e.map((()=>getComputedStyle(document.body).getPropertyValue("--app-color-background"))),borderWidth:0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}}}}})),this.client.search("/vertrag_kategorie","").then((t=>{this.options2={type:"pie",data:{labels:t.map((t=>t.kategorie)),datasets:[{label:"My First Dataset",data:t.map((t=>t.kosten)),backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]}}}))}render(){return A`
      <nidoca-section style="width:50%;">
        <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
          <nidoca-img-round
            width="150px;"
            height="150px;"
            src="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
          ></nidoca-img-round>
          <nidoca-text-h1>Willkommen zurück Dominik</nidoca-text-h1>
        </div>
      </nidoca-section>
      <nidoca-card style="padding:var(--space-2);">
        <nidoca-box>
          <nidoca-text-body>Kostenverteilung pro Monat in Euro</nidoca-text-body>
          <nidoca-chart-js-wrapper style="display:block;width:15vw;height:15vw;" .options="${this.options}">
          </nidoca-chart-js-wrapper>
        </nidoca-box>
      </nidoca-card>

      <nidoca-card style="padding:var(--space-2);">
        <nidoca-box>
          <nidoca-text-body>Kostenverteilung pro Kategorie</nidoca-text-body>
          <nidoca-chart-js-wrapper style="display:block;width:15vw;height:15vw;" .options="${this.options2}">
          </nidoca-chart-js-wrapper>
        </nidoca-box>
      </nidoca-card>
    `}};dh.styles=n``,lh([st(),ch("design:type",Object)],dh.prototype,"options",void 0),lh([st(),ch("design:type",Object)],dh.prototype,"options2",void 0),dh=lh([nt("nidoca-page-dashboard")],dh);var hh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let ph=class extends Q{constructor(){super(...arguments),this.elementName="nidoca-dialog"}render(){return A`
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
            .options="${de.stringArrayToOptions(et.getUniqueInstance().registeredElementNames)}"
            @input="${t=>{this.elementName=t.target.getOutputData().value}}"
          ></nidoca-form-combobox>
        </nidoca-layout-spacer>
      </nidoca-section>

      <nidoca-section style="width:50%;">
        <webcomponent-viewer>
          ${et.getUniqueInstance().registeredElementsMap.get(this.elementName)}
        </webcomponent-viewer>
      </nidoca-section>
    `}};ph.styles=n``,hh([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],ph.prototype,"elementName",void 0),ph=hh([nt("nidoca-page-playground")],ph);let uh=class extends Q{render(){return A`
            <nidoca-section style="width:50%;">
                <nidoca-layout-spacer top="var(--space-8)" bottom="var(--space-8)">
                    <nidoca-article
                            title="Komponentenübersicht"
                            text="Auf dieser Seite kannst du dir die einzelnen Komponenten von Nidoca anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
                    ></nidoca-article>
                    <nidoca-layout-spacer top="20px"></nidoca-layout-spacer>
                </nidoca-layout-spacer>
            </nidoca-section>

            ${et.getUniqueInstance().registeredElementNames.map((t=>A`
                        <nidoca-section style="width:50%;padding-top:var(--space)">
                            <nidoca-text type="H4" text="<${t}></${t}>"></nidoca-text>
                            ${et.getUniqueInstance().registeredElementsMap.get(t)}
                        </nidoca-section>
                    `))}
        `}};uh.styles=n``,uh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-components")],uh);let fh=class extends Q{render(){return A`
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Impressum" summary="Angaben gemäß § 5 TMG">
            <nidoca-text-body>Dominik Bruhn</nidoca-text-body>
            <nidoca-text-body>Holzwickeder Straße 109c</nidoca-text-body>
            <nidoca-text-body>44309 Dortmund</nidoca-text-body>
            <nidoca-layout-spacer></nidoca-layout-spacer>
            <nidoca-text-body
              >Telefonnummer: +49 152 052 488 62</nidoca-text-body
            >
            <nidoca-text-body
              >E-Mail: dominikbruhn [at] googlemail.com</nidoca-text-body
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Streitsschlichtung">
            <nidoca-text-body
              >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="${Ei.BLANK}"
                >https://ec.europa.eu/consumers/odr</nidoca-link
              >. <br />Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.</nidoca-text-body
            >
            <nidoca-text-body
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </nidoca-text-body>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Haftungsinhalt">
            <nidoca-text-body>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen.<br />
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </nidoca-text-body>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Haftungslinks">
            <nidoca-text-body>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </nidoca-text-body>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Copyright">
            <nidoca-text-body>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
              beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </nidoca-text-body>
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <nidoca-layout-spacer top="var(--space-8)" bottom="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Quelle">
            <nidoca-link href="https://www.e-recht24.de/impressum-generator.html" targetType="${Ei.BLANK}"
              >https://www.e-recht24.de/impressum-generator.html</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <div style="padding-top:var(--space-8); padding-bottom:var(--space-8);">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Material Icons">
            <nidoca-link href="https://fonts.google.com/icons" targetType="${Ei.BLANK}"
              >https://fonts.google.com/icons</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Fonts">
            <nidoca-link href=" https://fonts.google.com/" targetType="${Ei.BLANK}">
              https://fonts.google.com/</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </div>
    `}};fh.styles=n``,fh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-imprint")],fh);class gh{constructor(){this.id=0,this.name="",this.beschreibung="",this.internetseite="",this.benutzername="",this.adresse="",this.email="",this.iban="",this.vertragsnehmer="",this.kategorie="",this.vertragsbeginn=new Date,this.vertragsende=new Date,this.kuendigungsfrist=0,this.vertragsnummer="",this.ansprechpatrtner="",this.supporttelefon="",this.kosten=0,this.abrechnungsperiode=0,this.aktiv=!1,this.gekuendigt=!1}}class mh extends class{fromModel(t){const e=[];return Object.keys(t).map((i=>{const o=typeof t[i];e.push({key:i,label:i.charAt(0).toUpperCase().concat(i.slice(1)),type:"object"==o?t[i]instanceof Date?"date":"object":"boolean"==o?"checkbox":o,required:!1,step:"number"==o?"any":void 0})})),e}}{constructor(){super(...arguments),this.postgrestClient=new ah("http://89.58.33.189")}search(t){return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return this.postgrestClient.search("/vertrag","?offset=0&limit=100&order=name.asc&name=like.*".concat(t).concat("*"))}))}delete(t){return this.postgrestClient.delete("/vertrag",t.id)}persist(t){return delete t.id,this.postgrestClient.persist("/vertrag",t)}update(t){return this.postgrestClient.update("/vertrag",t.id,t)}getProperties(){const t=this.fromModel(new gh);return t.forEach((t=>{"adresse"!=t.key&&"beschreibung"!=t.key||(t.type="textarea"),"internetseite"==t.key&&(t.type="url"),"name"==t.key&&(t.required=!0)})),t}getPrimaryIdKey(){return"id"}getPrimaryText(t){return t.name}getSecondaryText(t){return t.beschreibung}}let yh=class extends Q{render(){return A` <nidoca-generic-crud .controller="${new mh}"></nidoca-generic-crud> `}};yh.styles=n``,yh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-list")],yh);var bh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},xh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let vh=class extends Q{constructor(){super(),this.cssVars=[],this.cssVars=((t=document.styleSheets)=>{const e=[];return Array.from(t).forEach((t=>{Array.from(t.cssRules).forEach((t=>{if(!t||!t.style)return;const i=t.style;Array.from(i).forEach((t=>{t.startsWith("--")&&-1==e.indexOf(t)&&e.push(t)}))}))})),e})()}render(){return A`
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section style="width:50%;">
          <nidoca-article title="CSS Variablen">
            ${ae([this.cssVars],(()=>A`
                  ${re(this.cssVars,(t=>A`
                      <nidoca-form-text
                        style="width:100%;"
                        @input="${e=>{document.documentElement.style.setProperty(t,e.target?e.target.getOutputData().value:"")}}"
                        type="${t.indexOf("color")>-1?pe.COLOR:pe.TEXT}"
                        name="${t}"
                        value="${getComputedStyle(document.documentElement).getPropertyValue(t).trim()}"
                        label="${t}"
                      ></nidoca-form-text>
                      <nidoca-layout-spacer top="var(--space-3)"></nidoca-layout-spacer>
                    `))}
                `))}
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>
    `}};vh.styles=n``,bh([st({type:Array}),xh("design:type",Array)],vh.prototype,"cssVars",void 0),vh=bh([nt("nidoca-page-settings"),xh("design:paramtypes",[])],vh);let wh=class extends Q{render(){return A``}};wh.styles=n``,wh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-privacy")],wh);let _h=class extends Q{render(){return A``}};_h.styles=n``,_h=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-terms-of-use")],_h);class Sh{constructor(){this.listeners=[],window.onpopstate=t=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(t.state)),this.notifyListeners()},document.addEventListener("click",(t=>{if(!this.shouldIgnoreEvent(t)){const e=this.getAnchor(t);e&&!this.shouldIgnoreAnchor(e)&&(t.preventDefault(),e.hash.length>0&&this.navigate(e.hash))}}))}static getUniqueInstance(){return Sh.uniqueInstance||(Sh.uniqueInstance=new Sh),Sh.uniqueInstance}subscribe(t){console.trace("subscribe router listener"),this.listeners.push(t)}back(){history.back()}forward(){history.forward()}navigate(t,e=null){-1==t.indexOf("#")&&(t="#".concat(t)),console.trace("navigate to: %s",t),null!=e&&console.trace("state: %s",JSON.stringify(e)),document.location.hash!==t?(history.pushState(e,"",t),this.notifyListeners()):console.trace("you are already on page: "+t)}getCurrentState(){return history.state}getStateProperty(t){const e=this.getCurrentState();return null!=e?e[t]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const t=this.getCurrentPage();this.listeners.forEach((e=>e.routeChanged(t)))}shouldIgnoreEvent(t){return t.defaultPrevented||0!==t.button||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey}getAnchor(t){for(const e of t.composedPath?t.composedPath():[])if(this.isAnchor(e))return e;let e=t.target;for(;e&&!this.isAnchor(e);)e=e.parentNode;return e&&this.isAnchor(e)?e:null}isAnchor(t){return t.nodeName&&"a"===t.nodeName.toLowerCase()}shouldIgnoreAnchor(t){return!(!t.target||"_self"===t.target.toLowerCase())||(!!t.hasAttribute("download")||(t.origin||this.getAnchorOrigin(t))!==window.location.origin)}getAnchorOrigin(t){const e=t.port,i=t.protocol;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}}let kh=class extends Q{render(){return A`
      <nidoca-list slot="sidebar">
        <nidoca-list-item
          icon="home"
          text="Home"
          href="#main"
          .rendered="${!0}"
          @click="${()=>Sh.getUniqueInstance().navigate("main")}"
        ></nidoca-list-item>
        <nidoca-list-item
          icon="home"
          text="Gallery"
          href="#main"
          .rendered="${!0}"
          @click="${()=>Sh.getUniqueInstance().navigate("gallery")}"
        ></nidoca-list-item>
      </nidoca-list>
    `}};kh.styles=n``,kh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-elevation-settings")],kh);var Rh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Oh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $h=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Anmeldung",this.usernameLabel="Benutzername/Email",this.passwordLabel="Passwort",this.buttonLabel="Anmelden"}render(){return A`
      <nidoca-box theme="${this.theme}">
        <nidoca-icon icon="close" clickable></nidoca-icon>
        <nidoca-form id="authenitcate-form">
          <nidoca-text class="paddingBottom" .type="${bt.H1}">Anmeldung</nidoca-text>

          <nidoca-form-text
            theme="${this.theme}"
            class="paddingBottom"
            textType="${pe.EMAIL}"
            label="${this.usernameLabel}"
            name="username"
            required
            trailingIcon="account_circle"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${this.theme}"
            class="paddingBottom"
            textType="${pe.PASSWORD}"
            label="${this.passwordLabel}"
            label="password"
            name="password"
            required
            trailingIcon="vpn_key"
          ></nidoca-form-text>

          <nidoca-button
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.login()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}login(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-login-submit",{detail:this.formComponent.getOutputData(),bubbles:!1,composed:!1}))}};$h.styles=n`
    :host {
      display: block;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Rh([st({type:it,converter:String}),Oh("design:type",Object)],$h.prototype,"theme",void 0),Rh([st({type:String,converter:String}),Oh("design:type",String)],$h.prototype,"label",void 0),Rh([st({type:String,converter:String}),Oh("design:type",String)],$h.prototype,"usernameLabel",void 0),Rh([st({type:String,converter:String}),Oh("design:type",String)],$h.prototype,"passwordLabel",void 0),Rh([st({type:String,converter:String}),Oh("design:type",String)],$h.prototype,"buttonLabel",void 0),Rh([lt("#authenitcate-form"),Oh("design:type",Object)],$h.prototype,"formComponent",void 0),$h=Rh([nt("nidoca-form-login")],$h);var Eh=function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))};const{fetch:Th}=window;window.fetch=(t,e)=>Eh(void 0,void 0,void 0,(function*(){const i=Ph.getToken();(yield Ph.isLoggedIn())&&e&&e.headers&&i&&(e.headers.Authorization=`Bearer ${i.access_token}`);const o=yield Th(t,e);return o.clone().json().catch((t=>console.error(t))),o}));class Ph{static init(t,e){return Eh(this,void 0,void 0,(function*(){const i=yield fetch(t,{headers:{},method:"GET",body:void 0});return Ph.setIssuer(yield i.json()),Ph.setClientId(e),200==i.status}))}static setClientId(t){sessionStorage.setItem(Ph.client_id_key,t)}static getClientId(){return sessionStorage.getItem(Ph.client_id_key)||""}static setIssuer(t){sessionStorage.setItem(Ph.issuer_key,JSON.stringify(t))}static getIssuer(){const t=sessionStorage.getItem(Ph.issuer_key);if(t)return Ph.parse(t)}static setToken(t){t.expires_in_date=new Date((new Date).getTime()+t.expires_in),t.refresh_expires_in_date=new Date((new Date).getTime()+t.refresh_expires_in),sessionStorage.setItem(Ph.token_key,JSON.stringify(t))}static getToken(){const t=sessionStorage.getItem(Ph.token_key);if(t)return Ph.parse(t)}static parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let t=0;t<e.length;t++)if(e[t].exec(i)){i=new Date(i);break}return i}))}static isLoggedIn(){return Eh(this,void 0,void 0,(function*(){const t=this.getToken();if(t&&t.expires_in_date.getTime()-1>(new Date).getTime())return!0;const e=Ph.getIssuer();if(e&&t){const i=yield Th(e.token_endpoint,{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:new URLSearchParams({client_id:Ph.getClientId(),grant_type:"refresh_token",refresh_token:t.refresh_token})});return Ph.setToken(yield i.json()),200==i.status}return!1}))}static login(t,e){return Eh(this,void 0,void 0,(function*(){console.log(`login ${t}`);const i=Ph.getIssuer();if(i){const o=yield Th(i.token_endpoint,{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:new URLSearchParams({client_id:Ph.getClientId(),grant_type:"password",username:t,password:e})});if(200==o.status){const t=yield o.json();this.setToken(t)}return console.info("login response status: ",o.status),200==o.status}return!1}))}}Ph.token_key="token",Ph.issuer_key="issuer",Ph.client_id_key="client_id";var Mh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Dh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ah=class extends Q{constructor(){super(),this.showPopup=!1,this.popupContent=A``,this.navigationClosed=!1,this.prominent=!1,this.currentPage=A` <nidoca-page-main></nidoca-page-main>`,this.elevationShow=!1,Ph.init("https://89.58.33.189/auth/realms/master/.well-known/openid-configuration","master-realm").then((t=>{console.log(`nidoca oauth client init ok ? ${t}`)})),Sh.getUniqueInstance().subscribe(this),this.routeChanged(Sh.getUniqueInstance().getCurrentPage())}routeChanged(t){switch(console.log("enter new page, url: %s",t),t){case"dashboard":this.currentPage=A` <nidoca-page-dashboard></nidoca-page-dashboard>`;break;case"playground":this.currentPage=A` <nidoca-page-playground></nidoca-page-playground>`;break;case"components":this.currentPage=A` <nidoca-page-components></nidoca-page-components>`;break;case"list":this.currentPage=A` <nidoca-page-list></nidoca-page-list>`;break;case"settings":this.currentPage=A` <nidoca-page-settings></nidoca-page-settings>`;break;case"imprint":this.currentPage=A` <nidoca-page-imprint></nidoca-page-imprint>`;break;case"terms-of-use":this.currentPage=A` <nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"privacy":this.currentPage=A` <nidoca-page-privacy></nidoca-page-privacy>`;break;default:this.currentPage=A` <nidoca-page-main></nidoca-page-main>`}}render(){return A`
            <nidoca-template .prominent="${this.prominent}" .navigationClosed="${this.navigationClosed}">
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        slot="topLeft"
                        style="padding-left:var(--space-2);"
                        icon="${this.navigationClosed?"menu":"clear"}"
                        .clickable="${!0}"
                        @nidoca-event-icon-clicked="${()=>this.navigationClosed=!this.navigationClosed}"
                ></nidoca-icon>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        icon="${this.prominent?"search_off":"search"}"
                        @nidoca-event-icon-clicked="${()=>this.prominent=!this.prominent}"
                ></nidoca-icon>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        icon="person"
                        @nidoca-event-icon-clicked="${()=>{this.showPopup=!0,this.popupContent=A` <nidoca-form-login
                            @nidoca-event-icon-clicked="${()=>this.showPopup=!1}"
                            @nidoca-form-login-submit="${t=>function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){(yield Ph.login(t.detail.jsonObject.username,t.detail.jsonObject.password))&&(this.showPopup=!1)}))}"
                          ></nidoca-form-login>`}}"
                ></nidoca-icon>
                <nidoca-icon slot="topRight" style="padding-right:var(--space-2);" icon="share"></nidoca-icon>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        icon="more_vert"
                        .clickable="${!0}"
                        @nidoca-event-icon-clicked="${t=>{this.elevationShow=!0,this.elevationAssociatedElement=t.target,this.elevationContentElement=A` <nidoca-elevation-settings></nidoca-elevation-settings>`}}"
                ></nidoca-icon>

                <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

                <span slot="content">${this.currentPage}</span>


                <nidoca-avatar
                        style="width:150px;"
                        slot="sidebar"
                        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
                >
                    <nidoca-text-body>Dominik Bruhn</nidoca-text-body>
                    <nidoca-text-caption>Softwareentwickler</nidoca-text-caption>
                </nidoca-avatar>

                <nidoca-menu slot="sidebar">
                    <nidoca-menu-item text="Start" @click="${()=>Sh.getUniqueInstance().navigate("main")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Dashboard"
                                      @click="${()=>Sh.getUniqueInstance().navigate("dashboard")}">
                    </nidoca-menu-item>

                    <nidoca-menu-area text="Framework"></nidoca-menu-area>

                    <nidoca-menu-item text="Spielwiese"
                                      @click="${()=>Sh.getUniqueInstance().navigate("playground")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Liste" @click="${()=>Sh.getUniqueInstance().navigate("list")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item
                            text="Komponenten"
                            @click="${()=>Sh.getUniqueInstance().navigate("components")}"
                    >
                    </nidoca-menu-item>

                    <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>

                    <nidoca-menu-item text="Impressum"
                                      @click="${()=>Sh.getUniqueInstance().navigate("imprint")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Datenschutz"
                                      @click="${()=>Sh.getUniqueInstance().navigate("privacy")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item
                            text="Nutzungsbedingungen"
                            @click="${()=>Sh.getUniqueInstance().navigate("terms-of-use")}"
                    >
                    </nidoca-menu-item>

                    <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>

                    <nidoca-menu-item
                            icon="home"
                            text="Einstellungen"
                            @click="${()=>Sh.getUniqueInstance().navigate("settings")}"
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
            >${this.elevationContentElement}
            </nidoca-elevation>
        `}};Mh([st({type:Boolean}),Dh("design:type",Boolean)],Ah.prototype,"showPopup",void 0),Mh([st({type:Object}),Dh("design:type",Object)],Ah.prototype,"popupContent",void 0),Mh([st({type:Boolean}),Dh("design:type",Boolean)],Ah.prototype,"navigationClosed",void 0),Mh([st({type:Boolean}),Dh("design:type",Boolean)],Ah.prototype,"prominent",void 0),Mh([st({type:Object}),Dh("design:type",Object)],Ah.prototype,"currentPage",void 0),Mh([st({type:Boolean}),Dh("design:type",Boolean)],Ah.prototype,"elevationShow",void 0),Mh([st({type:Object}),Dh("design:type",Object)],Ah.prototype,"elevationAssociatedElement",void 0),Mh([st({type:Object}),Dh("design:type",Object)],Ah.prototype,"elevationContentElement",void 0),Ah=Mh([nt("nidoca-app"),Dh("design:paramtypes",[])],Ah)})();