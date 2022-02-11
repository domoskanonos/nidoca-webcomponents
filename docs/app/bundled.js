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
      </nidoca-article>`),this.registeredElementsMap.set("nidoca-text",A` <nidoca-text>Ut enim ad minim veniam.</nidoca-text>`);const t=new vi;t.src="http://nidoca.eu/img/DSC02586.jpg",t.width="100%",t.height="100%",this.registeredElementsMap.set("nidoca-img",A`${t}`);const e=new Si;e.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",A`${e}`),this.registeredElementsMap.set("nidoca-search-bar",A` <nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`),this.registeredElementsMap.set("nidoca-avatar",A` <nidoca-avatar
        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
        primaryText="Dominik Bruhn"
        description="Softwareentwickler"
      >
      </nidoca-avatar>`);const i=new Nt;i.style.padding="var(--space-6)",this.registeredElementsMap.set("nidoca-progress",A`${i}`);const o=new di;o.style.padding="var(--space-6)",o.icon="home",o.primaryText="Home Icon",o.clickable=!0,o.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",A`${o}`),this._registeredElementsMap.set("nidoca-menu",A` <nidoca-menu theme="secondary">
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
      `),this._registeredElementsMap.set("nidoca-table",A` <nidoca-table></nidoca-table>`),this._registeredElementsMap.set("nidoca-top-app-bar",A` <nidoca-top-app-bar style="min-height: 48px;" .theme="${it.PRIMARY}">
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
        </style>`:A``}static getOposite(t){return t==it.BACKGROUND?it.PRIMARY:t==it.PRIMARY||t==it.SURFACE?it.SECONDARY:t==it.SECONDARY?it.PRIMARY:it.SURFACE}getParentTheme(t){let e=t;for(;null!=e;){if(null!=e.theme)return e.theme;e=e.parentElement}}}it.PRIMARY="primary",it.SECONDARY="secondary",it.SURFACE="surface",it.BACKGROUND="background";class ot{constructor(t,e,i=10240){this.key=t,this.minWidth=e,this.maxWidth=i}static applyDevices(t,e){for(let i=0;i<e.length;i++)if(e[i]==this.getCurrentScreen())return t;return""}static getCurrentScreen(){let t=null;return[ot.MOBILE,ot.TABLET,ot.DESKTOP].forEach((e=>{(null==e.minWidth||e.minWidth<window.innerWidth)&&(null==e.maxWidth||e.maxWidth>window.innerWidth)&&(t=e)})),t}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}ot.MOBILE=new ot("MOBILE",0,640),ot.TABLET=new ot("TABLET",641,1007),ot.DESKTOP=new ot("DESKTOP",1008),ot.WIDE_DESKTOP=new ot("WIDE_DESKTOP",1008);const nt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e),rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)}const at=({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){const o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,r=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(r.finisher=function(e){t(e,o)}),r}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}};function lt(t,e){return at({descriptor:i=>{const o={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[e]&&(this[e]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;var dt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let pt=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return A`
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
  `,gt([st({type:it,converter:String}),mt("design:type","function"==typeof(ut=void 0!==it&&it)?ut:Object)],yt.prototype,"theme",void 0),gt([st({type:ft,converter:String}),mt("design:type",String)],yt.prototype,"accordionType",void 0),gt([lt("#accordionSlot"),mt("design:type",Object)],yt.prototype,"accordionSlot",void 0),yt=gt([nt("nidoca-accordion")],yt);var bt,xt=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},vt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.H1="H1",t.H2="H2",t.H3="H3",t.H4="H4",t.H5="H5",t.H6="H6",t.SUBTITLE1="SUBTITLE1",t.SUBTITLE2="SUBTITLE2",t.BODY1="BODY1",t.BODY2="BODY2",t.BUTTON="BUTTON",t.CAPTION="CAPTION",t.OVERLINE="OVERLINE"}(bt||(bt={}));let wt=class extends Q{constructor(){super(),this.type=bt.BODY1,this.text="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{this.slotElement&&"type"==e&&(this.slotElement.classList.remove(...this.slotElement.classList),this.slotElement.classList.add(this.type))}))}render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-${this.theme});
        }
      </style>
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
            .iconShadowType="${fi.NONE}"
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
      font-size: 0.75rem;
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
          ${this.leadingIcon?A` <nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>`:A``}
          ${this.leadingIcon||this.buttonType==Bt.TEXT?A``:A` <nidoca-layout-spacer></nidoca-layout-spacer>`}

          <nidoca-text text="${this.text}" type="${bt.BUTTON}">
            <slot></slot>
          </nidoca-text>

          ${this.buttonType!=Bt.TEXT?A` <nidoca-layout-spacer></nidoca-layout-spacer>`:A``}
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
      <form .?autocomplete="${this.autocomplete}" class="container">
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
  `,le([st({type:it,converter:String}),ce("design:type",Object)],de.prototype,"theme",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"trailingIcon",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"label",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"errorText",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"infoText",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"warningText",void 0),le([st(),ce("design:type",Object)],de.prototype,"value",void 0),le([st({type:Array}),ce("design:type",Array)],de.prototype,"options",void 0),le([st({type:String}),ce("design:type",String)],de.prototype,"name",void 0),le([st({type:Boolean}),ce("design:type",Boolean)],de.prototype,"required",void 0),le([st({type:Boolean}),ce("design:type",Boolean)],de.prototype,"multiple",void 0),le([st({type:Number}),ce("design:type",Number)],de.prototype,"size",void 0),le([lt("#selectElement"),ce("design:type",Object)],de.prototype,"selectElement",void 0),de=le([nt("nidoca-form-combobox")],de);const he=t=>null!=t?t:I;var pe,ue=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},fe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.COLOR="color",t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url"}(pe||(pe={}));let ge=class extends Yt{constructor(){super(),this.type=pe.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return this.type==pe.HIDDEN?A`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:A` <style>
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
            ${this.trailingIcon?A` <nidoca-icon
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
                  ${this.infoText?A` <nidoca-text .type="${bt.SUBTITLE1}" text="${this.infoText}"></nidoca-text>`:A``}
                  ${this.warningText?A` <nidoca-text-error
                        style="color:var(--app-color-warning-background)"
                        .type="${bt.SUBTITLE1}"
                        text="${this.warningText}"
                      ></nidoca-text-error>`:A``}
                  ${this.errorText?A` <nidoca-text-error
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

        ${this.infoText.length>0?A` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:A``}

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

      ${this.warningText?A` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:A``}
      ${this.errorText?A` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:A``}
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

          <nidoca-form-text
            theme="${this.theme}"
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Me.styles=n`
    :host {
      display: block;
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
        ${this.showErrorMessageSamePassword?A` <nidoca-text
              type="${bt.CAPTION}"
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:A``}
        ${this.showErrorMessagePasswordDiff?A` <nidoca-text
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

          <nidoca-form-text
            theme="${this.theme}"
            class="paddingBottom"
            textType="${pe.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${this.theme}"
            class="paddingBottom"
            textType="${pe.PASSWORD}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};ze.styles=n`
    :host {
      display: block;
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
      <hr />
    `}};Ve.styles=n`
    :host,
    ::slotted(:host) {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
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
  `,Ye([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],qe.prototype,"text",void 0),qe=Ye([nt("nidoca-menu-area")],qe);var Ge=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ke=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xe=class extends Q{constructor(){super(...arguments),this.text="",this.icon=""}render(){return A`
      <div class="container" @click="${()=>this.clicked()}">
        ${this.icon?A` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:A` <nidoca-layout-spacer left="10px" right="36px"></nidoca-layout-spacer>`}
        ${this.text?A` <nidoca-text-body>${this.text} </nidoca-text-body>`:A``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};Xe.styles=n`
    .container {
      display: flex;
    }
    .item {
      cursor: pointer;
    }
  `,Ge([st({type:String}),Ke("design:type",String)],Xe.prototype,"text",void 0),Ge([st({type:String}),Ke("design:type",String)],Xe.prototype,"icon",void 0),Xe=Ge([nt("nidoca-menu-item")],Xe);var Je=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Ze=class extends Q{constructor(){super(...arguments),this.theme=it.BACKGROUND}render(){return A` ${it.getStyle(this.theme)}
      <slot></slot>`}};Ze.styles=n`
    :host,
    slot {
      display: block;
    }

    slot {
      padding-left: var(--space-4);
      padding-right: var(--space-4);
    }
  `,Je([st({type:it,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Ze.prototype,"theme",void 0),Ze=Je([nt("nidoca-menu")],Ze);var Qe=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ti=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ei=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return A`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,i,o,n,r){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(i).concat(";").concat("right:").concat(o).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(r).concat(";")}};ei.styles=n`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Qe([st({type:String}),ti("design:type",String)],ei.prototype,"height",void 0),Qe([st({type:String}),ti("design:type",String)],ei.prototype,"width",void 0),Qe([st({type:String}),ti("design:type",String)],ei.prototype,"left",void 0),Qe([st({type:String}),ti("design:type",String)],ei.prototype,"top",void 0),Qe([st({type:String}),ti("design:type",String)],ei.prototype,"right",void 0),Qe([st({type:String}),ti("design:type",String)],ei.prototype,"bottom",void 0),ei=Qe([nt("nidoca-layout-floating")],ei);var ii=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},oi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ni=class extends Q{constructor(){super(...arguments),this.width="",this.height="",this.minWidth="",this.minHeight="",this.contentWidth="",this.contentHeight=""}render(){return A`
      ${it.getStyle(this.theme)}
      <div class="container theme">
        <div class="container" style="">
          <slot></slot>
        </div>
      </div>
    `}};ni.styles=n`
    :host {
      display: block;
    }
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `,ii([st({type:String}),oi("design:type",String)],ni.prototype,"width",void 0),ii([st({type:String}),oi("design:type",String)],ni.prototype,"height",void 0),ii([st({type:String}),oi("design:type",String)],ni.prototype,"minWidth",void 0),ii([st({type:String}),oi("design:type",String)],ni.prototype,"minHeight",void 0),ii([st({type:String}),oi("design:type",String)],ni.prototype,"contentWidth",void 0),ii([st({type:String}),oi("design:type",String)],ni.prototype,"contentHeight",void 0),ii([st({type:it,converter:String}),oi("design:type",Object)],ni.prototype,"theme",void 0),ni=ii([nt("nidoca-container")],ni);var ri=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},si=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ai=class extends Q{constructor(){super(),this.hideSidebox=!0,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A` <style>
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
      ${this.hideSidebox?A``:A` <slot class="sidebox" name="sidebox"></slot>`}`}};ai.styles=n`
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
  `,ri([st({type:it,converter:String}),si("design:type",String)],ai.prototype,"theme",void 0),ri([st({type:Boolean,converter:String}),si("design:type",Boolean)],ai.prototype,"hideSidebox",void 0),ai=ri([nt("nidoca-split-screen"),si("design:paramtypes",[])],ai);var li=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ci=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let di=class extends Q{constructor(){super(),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A`
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
    `}clicked(){return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};di.styles=n`
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
  `,li([st({type:String}),ci("design:type",String)],di.prototype,"icon",void 0),li([st({type:Boolean}),ci("design:type",Boolean)],di.prototype,"clickable",void 0),li([st({type:Boolean}),ci("design:type",Boolean)],di.prototype,"deactivated",void 0),li([st({type:String}),ci("design:type",String)],di.prototype,"primaryText",void 0),li([st({type:it,converter:String}),ci("design:type",String)],di.prototype,"theme",void 0),di=li([nt("nidoca-icon"),ci("design:paramtypes",[])],di);var hi,pi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ui=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class fi{}fi.NONE="NONE",fi.DEFAULT_SHADOW="DEFAULT_SHADOW",fi.SHADOW_1="SHADOW_1",fi.SHADOW_2="SHADOW_2",fi.SHADOW_3="SHADOW_3";let gi=class extends Q{constructor(){super(...arguments),this.icon="",this.theme=it.PRIMARY,this.shadowType=fi.DEFAULT_SHADOW,this.clickable=!0,this.deactivated=!1,this.cssStyle="font-size: var(--icon-size); padding:var(--space-4)"}render(){return A`
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
    `}clicked(){return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};gi.styles=n`
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
  `,pi([st({type:String}),ui("design:type",String)],gi.prototype,"icon",void 0),pi([st({type:Object}),ui("design:type","function"==typeof(hi=void 0!==it&&it)?hi:Object)],gi.prototype,"theme",void 0),pi([st({type:Object}),ui("design:type",fi)],gi.prototype,"shadowType",void 0),pi([st({type:Boolean}),ui("design:type",Boolean)],gi.prototype,"clickable",void 0),pi([st({type:Boolean}),ui("design:type",Boolean)],gi.prototype,"deactivated",void 0),pi([st({type:String}),ui("design:type",String)],gi.prototype,"cssStyle",void 0),gi=pi([nt("nidoca-icon-extended")],gi);var mi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let yi=class extends Q{render(){return A`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),i=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${i}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};yi.styles=n`
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
  `,mi([lt("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],yi.prototype,"rippleContainerElement",void 0),yi=mi([nt("nidoca-ripple")],yi);var bi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},xi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let vi=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%"}render(){return A`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};vi.styles=n`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,bi([st({type:String}),xi("design:type",String)],vi.prototype,"src",void 0),bi([st({type:String}),xi("design:type",String)],vi.prototype,"width",void 0),bi([st({type:String}),xi("design:type",String)],vi.prototype,"height",void 0),vi=bi([nt("nidoca-img")],vi);let wi=class extends vi{render(){return A`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};wi.styles=n`
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
  `,wi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-img-round")],wi);var _i=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Si=class extends Q{constructor(){super(...arguments),this.src=""}render(){return A`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Si.styles=n``,_i([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Si.prototype,"src",void 0),Si=_i([nt("nidoca-movie")],Si);var ki=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ri=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oi=class extends Q{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return A`
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
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};Oi.styles=n`
    :host {
      display: block;
      width: 100%;
    }
  `,ki([st({type:it,converter:String}),Ri("design:type",Object)],Oi.prototype,"theme",void 0),ki([st({type:String}),Ri("design:type",String)],Oi.prototype,"label",void 0),ki([st({type:String}),Ri("design:type",String)],Oi.prototype,"placeholder",void 0),ki([st({type:String}),Ri("design:type",String)],Oi.prototype,"name",void 0),ki([st({type:Number}),Ri("design:type",Number)],Oi.prototype,"min",void 0),ki([st({type:Number}),Ri("design:type",Number)],Oi.prototype,"max",void 0),ki([st({type:String}),Ri("design:type",String)],Oi.prototype,"errorText",void 0),ki([lt("#inputfield"),Ri("design:type",Object)],Oi.prototype,"inputfield",void 0),Oi=ki([nt("nidoca-form-captcha")],Oi);var $i,Ei=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ti=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}($i||($i={}));let Pi=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType=$i.SELF}render(){return A` <a href="${this.href}" .target="${this.targetType}">${this.text}<slot></slot></a> `}};Pi.styles=n`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,Ei([st({type:String}),Ti("design:type",String)],Pi.prototype,"text",void 0),Ei([st({type:String}),Ti("design:type",String)],Pi.prototype,"href",void 0),Ei([st({type:String}),Ti("design:type",String)],Pi.prototype,"targetType",void 0),Pi=Ei([nt("nidoca-link")],Pi);var Mi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Di=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ai=class extends Q{constructor(){super(),this.multiSelect=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}update(t){super.update(t),null!=t.get("selectionMode")&&(this.multiSelect||(this.selected=!1))}render(){return A`
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
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",console.log(t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};Ai.styles=n`
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
  `,Mi([st({type:it,converter:String}),Di("design:type",Object)],Ai.prototype,"theme",void 0),Mi([st({type:Boolean}),Di("design:type",Boolean)],Ai.prototype,"multiSelect",void 0),Mi([st({type:Boolean}),Di("design:type",Boolean)],Ai.prototype,"selected",void 0),Mi([st({type:String}),Di("design:type",String)],Ai.prototype,"primaryText",void 0),Mi([st({type:String}),Di("design:type",String)],Ai.prototype,"secondaryText",void 0),Ai=Mi([nt("nidoca-list-item"),Di("design:paramtypes",[])],Ai);var Ci=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ii=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ji=class extends Q{constructor(){super(),this.multiSelect=!1,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.multiSelect=this.multiSelect}))}))}render(){return A`
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

        ::slotted(nidoca-list-item),
        ::slotted(nidoca-list-section) {
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
      ></slot>
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof Ai&&t.push(o)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof Ai&&o.selected&&t.push(o)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let i=0;for(let o=0;o<e.length;o++){const n=e[o];n instanceof Ai&&(n.selected&&t.push(i),i++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){console.log("sdojsdoijsoidjsdioj "+this.getItems().length),this.getItems().forEach((t=>{t.selected=!1}))}};ji.styles=n`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,Ci([st({type:it,converter:String}),Ii("design:type",Object)],ji.prototype,"theme",void 0),Ci([st({type:Boolean}),Ii("design:type",Boolean)],ji.prototype,"multiSelect",void 0),Ci([lt("#slotElement"),Ii("design:type",Object)],ji.prototype,"slotElement",void 0),ji=Ci([nt("nidoca-list"),Ii("design:paramtypes",[])],ji);var Li=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ni=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Bi=class extends Q{constructor(){super(),this.text="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return A`
      <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-caption>
    `}};Bi.styles=n`
  :host {
 display:block;
 padding-left: var(--space-2);

  `,Li([st({type:it,converter:String}),Ni("design:type",Object)],Bi.prototype,"theme",void 0),Li([st({type:String}),Ni("design:type",String)],Bi.prototype,"text",void 0),Bi=Li([nt("nidoca-list-section"),Ni("design:paramtypes",[])],Bi);var zi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Wi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Hi=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.prominent=!1}render(){return A`
      ${it.getStyle(this.theme)}
      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?A` <slot class="prominent" name="prominent"></slot>`:A``}
    `}};Hi.styles=n`
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
      min-height: calc(var(--line-height) * 2);
    }

    slot {
      display: flex;
      align-items: center;
      flex-basis: 33.33%;
    }

    .prominent {
      display: block;
    }
  `,zi([st({type:it,converter:String}),Wi("design:type",Object)],Hi.prototype,"theme",void 0),zi([st({type:Boolean}),Wi("design:type",Boolean)],Hi.prototype,"prominent",void 0),Hi=zi([nt("nidoca-top-app-bar")],Hi);var Fi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ui=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vi=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new di],["row 2",new di]]}render(){return A`
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
    `}};Vi.styles=n`
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
  `,Fi([st({type:Array}),Ui("design:type",Array)],Vi.prototype,"headers",void 0),Fi([st({type:Array}),Ui("design:type",Array)],Vi.prototype,"rows",void 0),Vi=Fi([nt("nidoca-table")],Vi);var Yi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let qi=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?A`<slot></slot>`:A``}};qi.styles=n``,Yi([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],qi.prototype,"selected",void 0),qi=Yi([nt("nidoca-tab-content")],qi);var Gi,Ki=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Xi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ji=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=it.PRIMARY}render(){return A`
      <style>
        :host(.SELECTED) {
          border-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?A` <nidoca-text .type="${bt.OVERLINE}" text="${this.text}"></nidoca-text> `:A``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ji.styles=n`
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
  `,Ki([st({type:Boolean}),Xi("design:type",Boolean)],Ji.prototype,"selected",void 0),Ki([st({type:String}),Xi("design:type",String)],Ji.prototype,"text",void 0),Ki([st({type:String}),Xi("design:type","function"==typeof(Gi=void 0!==it&&it)?Gi:Object)],Ji.prototype,"theme",void 0),Ji=Ki([nt("nidoca-tab")],Ji);var Zi,Qi=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},to=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let eo=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.tabIndex=0}render(){return A`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,i=t[this.tabIndex];for(let o=0;o<t.length;o++){const n=t[o];n instanceof Ji&&(n.theme=this.theme,n.style.width=String(e).concat("%"),n==i?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];o instanceof qi&&(this.tabIndex==t?o.selected=!0:o.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let i=0;i<e.length;i++){const o=e[i];if(o instanceof Ji&&o==t){this.tabIndex=i;break}}}}};eo.styles=n`
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
  `,Qi([lt("#tabSlot"),to("design:type",Object)],eo.prototype,"tabSlot",void 0),Qi([lt("#tabContentSlot"),to("design:type",Object)],eo.prototype,"tabContentSlot",void 0),Qi([st({type:String}),to("design:type","function"==typeof(Zi=void 0!==it&&it)?Zi:Object)],eo.prototype,"theme",void 0),Qi([st({type:Number}),to("design:type",Number)],eo.prototype,"tabIndex",void 0),eo=Qi([nt("nidoca-tabs")],eo);var io=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},oo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let no=class extends Q{constructor(){super(),this.hideLeft=!1,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(t=>{if(!this.hideLeft&&this.leftElement){console.log("close");const e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}}))}updated(t){super.updated(t)}render(){return A`
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
        `}};no.styles=n`
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
    
  `,io([st({type:Boolean}),oo("design:type",Boolean)],no.prototype,"hideLeft",void 0),io([st({type:Boolean}),oo("design:type",Boolean)],no.prototype,"prominent",void 0),io([lt("#header"),oo("design:type",Object)],no.prototype,"headerElement",void 0),io([lt("#left"),oo("design:type",Object)],no.prototype,"leftElement",void 0),io([lt("#content"),oo("design:type",Object)],no.prototype,"contentElement",void 0),no=io([nt("nidoca-template"),oo("design:paramtypes",[])],no);let ro=class extends wt{render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-caption-${this.theme});
        }
      </style>
      ${super.render()}`}};ro.styles=n`
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
  `,ro=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-button")],ro);let so=class extends wt{render(){return A` <style>
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
  `,so=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-overline")],so);let ao=class extends wt{render(){return A` ${super.render()}`}};ao.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size);
      line-height: 1.5;
      font-weight: 400;
    }
  `,ao=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-body")],ao);let lo=class extends wt{render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-caption-${this.theme});
        }
      </style>
      ${super.render()}`}};lo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-caption);
      line-height: 1;
      font-weight: 400;
    }
  `,lo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-caption")],lo);let co=class extends wt{render(){return A`<style>
        :host,
        slot {
          color: var(--app-color-error-${this.theme});
        }</style
      >${super.render()}`}};co=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-error")],co);let ho=class extends wt{render(){return A`<style>
        :host,
        slot {
          color: var(--app-color-success-${this.theme});
        }</style
      >${super.render()}`}};ho=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-success")],ho);let po=class extends wt{render(){return A`<style>
        :host,
        slot {
          color: var(--app-color-warning-${this.theme});
        }</style
      >${super.render()}`}};po=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-warning")],po);let uo=class extends wt{render(){return A`<style>
        :host,
        slot {
          color: var(--app-color-info-${this.theme});
        }</style
      >${super.render()}`}};uo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-info")],uo);let fo=class extends wt{render(){return A` <style>
        :host,
        slot,
        ::slotted(:host),
        ::slotted(slot) {
          color: var(--app-color-caption-${this.theme});
        }
      </style>
      ${super.render()}`}};fo.styles=n`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-size: var(--font-size-h1);
      line-height: 1;
      font-weight: 400;
    }
  `,fo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h1")],fo);let go=class extends wt{render(){return A` <style>
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
  `,go=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h2")],go);let mo=class extends wt{render(){return A` <style>
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
  `,mo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h3")],mo);let yo=class extends wt{render(){return A` <style>
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
  `,yo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h4")],yo);let bo=class extends wt{render(){return A` <style>
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
  `,bo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h5")],bo);let xo=class extends wt{render(){return A` <style>
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
  `,xo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-text-h6")],xo);var vo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},wo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _o=class extends Q{constructor(){super(),this.value="",this.placeholder="",this.disabled=!1,this.theme=it.prototype.getParentTheme(this)||it.PRIMARY}render(){return A`
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
    `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};_o.styles=n`
    :host {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      min-height: calc(var(--line-height) * 2);
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
  `,vo([st({type:String}),wo("design:type",String)],_o.prototype,"value",void 0),vo([st({type:String}),wo("design:type",String)],_o.prototype,"placeholder",void 0),vo([st({type:Boolean}),wo("design:type",Boolean)],_o.prototype,"disabled",void 0),vo([lt("#inputElement"),wo("design:type",Object)],_o.prototype,"inputElement",void 0),vo([st({type:it,converter:String}),wo("design:type",String)],_o.prototype,"theme",void 0),_o=vo([nt("nidoca-search-bar"),wo("design:paramtypes",[])],_o);var So=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ko=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Ro{}Ro.CENTER="CENTER",Ro.LEFT="LEFT",Ro.RIGHT="RIGHT",Ro.TOP="TOP",Ro.BOTTOM="BOTTOM",Ro.SLIDE_CENTER="SLIDE_CENTER",Ro.SLIDE_LEFT="SLIDE_LEFT",Ro.SLIDE_RIGHT="SLIDE_RIGHT",Ro.SLIDE_TOP="SLIDE_TOP",Ro.SLIDE_BOTTOM="SLIDE_BOTTOM";let Oo=class extends Q{constructor(){super(...arguments),this.transitionType=Ro.CENTER,this.duration=.5}render(){return A` <div .class="${this.transitionType}"><slot></slot></div> `}};Oo.styles=n`
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
  `,So([st({type:Object}),ko("design:type",Ro)],Oo.prototype,"transitionType",void 0),So([st({type:Number}),ko("design:type",Number)],Oo.prototype,"duration",void 0),Oo=So([nt("nidoca-transition")],Oo);var $o=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Eo=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?A`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${Ro.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:A``}};Eo.styles=n`
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
  `,$o([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Eo.prototype,"show",void 0),Eo=$o([nt("nidoca-dialog")],Eo);var To=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Po=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Mo=class extends Q{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return A`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};Mo.styles=n``,To([st({type:Boolean}),Po("design:type",Boolean)],Mo.prototype,"show",void 0),To([st({type:String}),Po("design:type",String)],Mo.prototype,"title",void 0),To([st({type:String}),Po("design:type",String)],Mo.prototype,"description",void 0),To([st({type:String}),Po("design:type",String)],Mo.prototype,"labelButtonYes",void 0),To([st({type:String}),Po("design:type",String)],Mo.prototype,"labelButtonNo",void 0),Mo=To([nt("nidoca-dialog-decision")],Mo);var Do=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ao=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Co{}Co.ROUND="ROUND",Co.CLICKABLE="CLICKABLE",Co.ZOOM_WRAPPED="ZOOM_WRAPPED",Co.FULL_WIDTH="FULL_WIDTH";let Io=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[Co.CLICKABLE,Co.FULL_WIDTH]}render(){return A`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}};Io.styles=n`
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
  `,Do([st({type:String}),Ao("design:type",String)],Io.prototype,"src",void 0),Do([st({type:String}),Ao("design:type",String)],Io.prototype,"width",void 0),Do([st({type:String}),Ao("design:type",String)],Io.prototype,"height",void 0),Do([st({type:Co,converter:Array}),Ao("design:type",Array)],Io.prototype,"richMediaProperties",void 0),Io=Do([nt("nidoca-img-roullnd")],Io);var jo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Lo=class extends Q{constructor(){super(...arguments),this.imgSrc=""}render(){return A`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[Co.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};Lo.styles=n`
    :host {
      display: block;
    }
  `,jo([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Lo.prototype,"imgSrc",void 0),Lo=jo([nt("nidoca-avatar")],Lo);let No=class extends Q{render(){return A`
      <nidoca-box-shadow .shadowType="${Ft.KEY_LIGHT}">
        <slot class="slotContainer"></slot>
      </nidoca-box-shadow>
    `}};No.styles=n`
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
  `,No=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-card")],No);let Bo=class extends Q{render(){return A`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements();for(let t=0;t<i.length;t++){const e=i[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};Bo.styles=n`
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
  `,Bo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-gallery")],Bo);let zo=class extends Q{render(){return A`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};zo.styles=n`
    :host {
      display: none;
    }
  `,zo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-print")],zo);let Wo=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return A`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){const e=t.target,i=e.offsetWidth,o=e.assignedElements(),n=o.length,r=[];let s=0;for(let t=0;t<n;t++){const e=o[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)r.push(e);else{const e=t.toUpperCase();s+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*i}}}let a=100;s>0&&(a=100-s/i*100),0==a&&(a=100/n),this.flexBasis=String(a/r.length)+"%",this.requestUpdate()}};Wo.styles=n`
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
  `,Wo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-section")],Wo);var Ho=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Fo=class extends Q{constructor(){super(...arguments),this.theme=it.BACKGROUND}render(){return A`
      ${it.getStyle(this.theme)}
      <slot></slot>
    `}};Fo.styles=n`
    :host {
      display: block;
      padding: var(--space-6);
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  `,Ho([st({type:it,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Fo.prototype,"theme",void 0),Fo=Ho([nt("nidoca-box")],Fo);var Uo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Vo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Yo=class extends Q{constructor(){super(...arguments),this.overline="",this.title="",this.summary="",this.text=""}render(){return A`
      <div style="display:flex; flex-direction:column;">
        <slot name="caption"></slot>
        ${this.overline?A` <nidoca-text .type="${bt.OVERLINE}">${this.overline}</nidoca-text> `:A``}
        <slot name="title"></slot>
        ${this.title?A` <nidoca-text .type="${bt.H2}">${this.title}</nidoca-text> `:A``}
        <slot name="summary"></slot>
        ${this.summary?A` <nidoca-text .type="${bt.BODY2}">${this.summary}</nidoca-text> `:A``}
        <slot name="text"></slot>
        ${this.text?A` <nidoca-text-body>${this.text}</nidoca-text-body>`:A``}
        <slot></slot>
      </div>
    `}};Yo.styles=n`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  `,Uo([st({type:String}),Vo("design:type",String)],Yo.prototype,"overline",void 0),Uo([st({type:String}),Vo("design:type",String)],Yo.prototype,"title",void 0),Uo([st({type:String}),Vo("design:type",String)],Yo.prototype,"summary",void 0),Uo([st({type:String}),Vo("design:type",String)],Yo.prototype,"text",void 0),Yo=Uo([nt("nidoca-article")],Yo);class qo{getCurrent(t){if(null==t)return t;const e={};return this.getElements(t).forEach((t=>{const i=t.tagName,o=t.getAttribute("name");if(null==o||null==o)console.warn("input name is empty.");else{const n=t.value;if("INPUT"==i)switch(t.getAttribute("type")){case"number":e[o]=Number(n);break;case"date":case"datetime":e[o]=new Date(n);break;case"checkbox":e[o]=t.checked;break;default:t.checked?e[o]=t.checked:""==n||isNaN(n)?e[o]=n:e[o]=Number(n)}else"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||(e[o]=n)}})),e}getElements(t){let e=[];if(t){const i=t.tagName;if("INPUT"!=i&&"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||e.push(t),t.children.length>0){const i=null==t?void 0:t.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}if(t.shadowRoot&&t.shadowRoot.children.length>0){const i=t.shadowRoot.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}}return e}}class Go{parseDate(t,e){const i=/[^0-9a-z]/gi;let o=0,n=0,r=0,s=0,a=0,l=0,c=0;const d=t.split(i);try{e.split(i).forEach((function(t,e){switch((""+t).charAt(0)){case"y":case"Y":o=parseInt(d[e]);break;case"M":n=parseInt(d[e])-1;break;case"d":r=parseInt(d[e]);break;case"h":case"H":case"k":case"K":s=parseInt(d[e]);break;case"m":a=parseInt(d[e]);break;case"s":l=parseInt(d[e]);break;case"S":c=parseInt(d[e])}}))}catch(t){throw console.log(t),new Error("Invalid date format.")}return new Date(o,n,r,s,a,l,c)}formatDate(t,e){if(null==t)return"";const i={};return i.M=t.getMonth()+1,i.d=t.getDate(),i.h=t.getHours(),i.m=t.getMinutes(),i.s=t.getSeconds(),e=e.replace(/(M+|d+|h+|m+|s+)/g,(function(t){return((t.length>1?"0":"")+i[t.slice(-1)]).slice(-2)})),e.replace(/(y+)/g,(function(e){return t.getFullYear().toString().slice(-e.length)}))}parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let o=0;o<e.length;o++)if(e[o].exec(i)){console.debug("parse date string to date, key=%s, value=%s",t,i),i=new Date(i);break}return i}))}diffDays(t,e){if(null==t||null==t||null==e||null==e)return null;const i=t.getTime();return(e.getTime()-i)/864e5}}var Ko=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Xo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Jo=class extends Q{constructor(){super(),this.nidocaDateHelper=new Go,this.items=[],this.properties=[],this.hideSidebox=!0,this.showDeleteDialog=!1,this.showDuplicateDialog=!1,this.errorMessage="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{"controller"==e&&this.controller&&(this.properties=this.controller.getProperties(),this.controller.search("").then((t=>{this.items=t,this.requestUpdate()})))}))}render(){return A`
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
                      @nidoca-event-icon-clicked="${()=>{var t,e;if(this.errorMessage="",this.editForm&&this.editForm.validate()){const i=(new qo).getCurrent(this);""==i[this.getPrimaryIdKey()]?(i[this.getPrimaryIdKey()]=null,null===(t=this.controller)||void 0===t||t.persist(i).then((t=>{this.item=void 0,this.hideSidebox=!0,this.updateList(t)}))):null===(e=this.controller)||void 0===e||e.update(i).then((t=>{t?(this.item=void 0,this.hideSidebox=!0,this.updateList(i)):this.errorMessage="Fehler beim Speichern"}))}else this.errorMessage="Das Formular enthält Fehler. Bitte überprüfen Sie den Inhalt"}}"
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
    `}updateList(t){var e;let i=!0;const o=null===(e=this.controller)||void 0===e?void 0:e.getPrimaryIdKey();o&&(this.items=this.items.map((e=>e[o]==t[o]?(i=!1,t):e)),t[o]&&i&&this.items.push(t))}initItem(t){this.item=t,this.hideSidebox=!1}getPrimaryIdKey(){return this.controller?this.controller.getPrimaryIdKey():"id"}newSection(t,e){var i,o;if(this.controller&&t){const n=null===(i=this.controller)||void 0===i?void 0:i.getPrimaryText(t),r=null===(o=this.controller)||void 0===o?void 0:o.getPrimaryText(e);return n.charAt(0)!=r.charAt(0)}return!1}getPrimaryText(t){return this.controller?this.controller.getPrimaryText(t):""}getSecondaryText(t){return this.controller?this.controller.getSecondaryText(t):""}};Jo.styles=n``,Ko([st({type:Object,converter:Object}),Xo("design:type",Object)],Jo.prototype,"controller",void 0),Ko([st({type:Object,converter:Object}),Xo("design:type",Object)],Jo.prototype,"item",void 0),Ko([st({type:Boolean,converter:String}),Xo("design:type",Boolean)],Jo.prototype,"hideSidebox",void 0),Ko([st({type:Boolean,converter:String}),Xo("design:type",Boolean)],Jo.prototype,"showDeleteDialog",void 0),Ko([st({type:Boolean,converter:String}),Xo("design:type",Boolean)],Jo.prototype,"showDuplicateDialog",void 0),Ko([st({type:it,converter:String}),Xo("design:type",String)],Jo.prototype,"theme",void 0),Ko([lt("#searchbar"),Xo("design:type",Object)],Jo.prototype,"searchbar",void 0),Ko([lt("#editForm"),Xo("design:type",Object)],Jo.prototype,"editForm",void 0),Ko([st({type:String,converter:String}),Xo("design:type",String)],Jo.prototype,"errorMessage",void 0),Jo=Ko([nt("nidoca-generic-crud"),Xo("design:paramtypes",[])],Jo);var Zo=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Qo=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let tn=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return A`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
        .type="${pe.BODY2}"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `}};tn.styles=n`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,Zo([st({type:String}),Qo("design:type",String)],tn.prototype,"primaryText",void 0),Zo([st({type:String}),Qo("design:type",String)],tn.prototype,"text",void 0),Zo([st({type:String}),Qo("design:type",String)],tn.prototype,"icon",void 0),tn=Zo([nt("nidoca-icon-with-description")],tn);var en=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},on=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let nn=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return A`
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
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};nn.styles=n`
    :host {
      display: block;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,en([st({type:it,converter:String}),on("design:type",Object)],nn.prototype,"theme",void 0),en([st({type:String,converter:String}),on("design:type",String)],nn.prototype,"label",void 0),en([st({type:String,converter:String}),on("design:type",String)],nn.prototype,"nameLabel",void 0),en([st({type:String,converter:String}),on("design:type",String)],nn.prototype,"emailLabel",void 0),en([st({type:String,converter:String}),on("design:type",String)],nn.prototype,"titleLabel",void 0),en([st({type:String,converter:String}),on("design:type",String)],nn.prototype,"messageLabel",void 0),en([st({type:String,converter:String}),on("design:type",String)],nn.prototype,"buttonLabel",void 0),en([lt("#authenitcate-form"),on("design:type",Object)],nn.prototype,"formComponent",void 0),nn=en([nt("nidoca-form-contact")],nn);const rn="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function sn(t,e,i){const o=i||(t=>Array.prototype.slice.call(t));let n=!1,r=[];return function(...i){r=o(i),n||(n=!0,rn.call(window,(()=>{n=!1,t.apply(e,r)})))}}const an=t=>"start"===t?"left":"end"===t?"right":"center",ln=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2;function cn(){}const dn=function(){let t=0;return function(){return t++}}();function hn(t){return null==t}function pn(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function un(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const fn=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function gn(t,e){return fn(t)?t:e}function mn(t,e){return void 0===t?e:t}const yn=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function bn(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function xn(t,e,i,o){let n,r,s;if(pn(t))if(r=t.length,o)for(n=r-1;n>=0;n--)e.call(i,t[n],n);else for(n=0;n<r;n++)e.call(i,t[n],n);else if(un(t))for(s=Object.keys(t),r=s.length,n=0;n<r;n++)e.call(i,t[s[n]],s[n])}function vn(t,e){let i,o,n,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,o=t.length;i<o;++i)if(n=t[i],r=e[i],n.datasetIndex!==r.datasetIndex||n.index!==r.index)return!1;return!0}function wn(t){if(pn(t))return t.map(wn);if(un(t)){const e=Object.create(null),i=Object.keys(t),o=i.length;let n=0;for(;n<o;++n)e[i[n]]=wn(t[i[n]]);return e}return t}function _n(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function Sn(t,e,i,o){if(!_n(t))return;const n=e[t],r=i[t];un(n)&&un(r)?kn(n,r,o):e[t]=wn(r)}function kn(t,e,i){const o=pn(e)?e:[e],n=o.length;if(!un(t))return t;const r=(i=i||{}).merger||Sn;for(let s=0;s<n;++s){if(!un(e=o[s]))continue;const n=Object.keys(e);for(let o=0,s=n.length;o<s;++o)r(n[o],t,e,i)}return t}function Rn(t,e){return kn(t,e,{merger:On})}function On(t,e,i){if(!_n(t))return;const o=e[t],n=i[t];un(o)&&un(n)?Rn(o,n):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=wn(n))}function $n(t,e){const i=t.indexOf(".",e);return-1===i?t.length:i}function En(t,e){if(""===e)return t;let i=0,o=$n(e,i);for(;t&&o>i;)t=t[e.substr(i,o-i)],i=o+1,o=$n(e,i);return t}function Tn(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Pn=t=>void 0!==t,Mn=t=>"function"==typeof t,Dn=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0},An=Math.PI,Cn=2*An,In=Cn+An,jn=Number.POSITIVE_INFINITY,Ln=An/180,Nn=An/2,Bn=An/4,zn=2*An/3,Wn=Math.log10,Hn=Math.sign;function Fn(t){const e=Math.round(t);t=Vn(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(Wn(t))),o=t/i;return(o<=1?1:o<=2?2:o<=5?5:10)*i}function Un(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Vn(t,e,i){return Math.abs(t-e)<i}function Yn(t,e,i){let o,n,r;for(o=0,n=t.length;o<n;o++)r=t[o][i],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function qn(t){return t*(An/180)}function Gn(t){return t*(180/An)}function Kn(t){if(!fn(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Xn(t,e){const i=e.x-t.x,o=e.y-t.y,n=Math.sqrt(i*i+o*o);let r=Math.atan2(o,i);return r<-.5*An&&(r+=Cn),{angle:r,distance:n}}function Jn(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Zn(t,e){return(t-e+In)%Cn-An}function Qn(t){return(t%Cn+Cn)%Cn}function tr(t,e,i,o){const n=Qn(t),r=Qn(e),s=Qn(i),a=Qn(r-n),l=Qn(s-n),c=Qn(n-r),d=Qn(n-s);return n===r||n===s||o&&r===s||a>l&&c<d}function er(t,e,i){return Math.max(e,Math.min(i,t))}function ir(t,e,i,o=1e-6){return t>=Math.min(e,i)-o&&t<=Math.max(e,i)+o}const or=t=>0===t||1===t,nr=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*Cn/i),rr=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*Cn/i)+1,sr={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Nn),easeOutSine:t=>Math.sin(t*Nn),easeInOutSine:t=>-.5*(Math.cos(An*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>or(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>or(t)?t:nr(t,.075,.3),easeOutElastic:t=>or(t)?t:rr(t,.075,.3),easeInOutElastic(t){const e=.1125;return or(t)?t:t<.5?.5*nr(2*t,e,.45):.5+.5*rr(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-sr.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*sr.easeInBounce(2*t):.5*sr.easeOutBounce(2*t-1)+.5},ar={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},lr="0123456789ABCDEF",cr=t=>lr[15&t],dr=t=>lr[(240&t)>>4]+lr[15&t],hr=t=>(240&t)>>4==(15&t);function pr(t){return t+.5|0}const ur=(t,e,i)=>Math.max(Math.min(t,i),e);function fr(t){return ur(pr(2.55*t),0,255)}function gr(t){return ur(pr(255*t),0,255)}function mr(t){return ur(pr(t/2.55)/100,0,1)}function yr(t){return ur(pr(100*t),0,100)}const br=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,xr=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function vr(t,e,i){const o=e*Math.min(i,1-i),n=(e,n=(e+t/30)%12)=>i-o*Math.max(Math.min(n-3,9-n,1),-1);return[n(0),n(8),n(4)]}function wr(t,e,i){const o=(o,n=(o+t/60)%6)=>i-i*e*Math.max(Math.min(n,4-n,1),0);return[o(5),o(3),o(1)]}function _r(t,e,i){const o=vr(t,1,.5);let n;for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)o[n]*=1-e-i,o[n]+=e;return o}function Sr(t){const e=t.r/255,i=t.g/255,o=t.b/255,n=Math.max(e,i,o),r=Math.min(e,i,o),s=(n+r)/2;let a,l,c;return n!==r&&(c=n-r,l=s>.5?c/(2-n-r):c/(n+r),a=n===e?(i-o)/c+(i<o?6:0):n===i?(o-e)/c+2:(e-i)/c+4,a=60*a+.5),[0|a,l||0,s]}function kr(t,e,i,o){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,o)).map(gr)}function Rr(t,e,i){return kr(vr,t,e,i)}function Or(t){return(t%360+360)%360}const $r={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Er={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let Tr;function Pr(t,e,i){if(t){let o=Sr(t);o[e]=Math.max(0,Math.min(o[e]+o[e]*i,0===e?360:1)),o=Rr(o),t.r=o[0],t.g=o[1],t.b=o[2]}}function Mr(t,e){return t?Object.assign(e||{},t):t}function Dr(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=gr(t[3]))):(e=Mr(t,{r:0,g:0,b:0,a:1})).a=gr(e.a),e}function Ar(t){return"r"===t.charAt(0)?function(t){const e=br.exec(t);let i,o,n,r=255;if(e){if(e[7]!==i){const t=+e[7];r=255&(e[8]?fr(t):255*t)}return i=+e[1],o=+e[3],n=+e[5],i=255&(e[2]?fr(i):i),o=255&(e[4]?fr(o):o),n=255&(e[6]?fr(n):n),{r:i,g:o,b:n,a:r}}}(t):function(t){const e=xr.exec(t);let i,o=255;if(!e)return;e[5]!==i&&(o=e[6]?fr(+e[5]):gr(+e[5]));const n=Or(+e[2]),r=+e[3]/100,s=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return kr(_r,t,e,i)}(n,r,s):"hsv"===e[1]?function(t,e,i){return kr(wr,t,e,i)}(n,r,s):Rr(n,r,s),{r:i[0],g:i[1],b:i[2],a:o}}(t)}class Cr{constructor(t){if(t instanceof Cr)return t;const e=typeof t;let i;var o,n,r;"object"===e?i=Dr(t):"string"===e&&(r=(o=t).length,"#"===o[0]&&(4===r||5===r?n={r:255&17*ar[o[1]],g:255&17*ar[o[2]],b:255&17*ar[o[3]],a:5===r?17*ar[o[4]]:255}:7!==r&&9!==r||(n={r:ar[o[1]]<<4|ar[o[2]],g:ar[o[3]]<<4|ar[o[4]],b:ar[o[5]]<<4|ar[o[6]],a:9===r?ar[o[7]]<<4|ar[o[8]]:255})),i=n||function(t){Tr||(Tr=function(){const t={},e=Object.keys(Er),i=Object.keys($r);let o,n,r,s,a;for(o=0;o<e.length;o++){for(s=a=e[o],n=0;n<i.length;n++)r=i[n],a=a.replace(r,$r[r]);r=parseInt(Er[s],16),t[a]=[r>>16&255,r>>8&255,255&r]}return t}(),Tr.transparent=[0,0,0,0]);const e=Tr[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}(t)||Ar(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Mr(this._rgb);return t&&(t.a=mr(t.a)),t}set rgb(t){this._rgb=Dr(t)}rgbString(){return this._valid?function(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${mr(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}(this._rgb):this._rgb}hexString(){return this._valid?function(t){var e=function(t){return hr(t.r)&&hr(t.g)&&hr(t.b)&&hr(t.a)}(t)?cr:dr;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):""):t}(this._rgb):this._rgb}hslString(){return this._valid?function(t){if(!t)return;const e=Sr(t),i=e[0],o=yr(e[1]),n=yr(e[2]);return t.a<255?`hsla(${i}, ${o}%, ${n}%, ${mr(t.a)})`:`hsl(${i}, ${o}%, ${n}%)`}(this._rgb):this._rgb}mix(t,e){const i=this;if(t){const o=i.rgb,n=t.rgb;let r;const s=e===r?.5:e,a=2*s-1,l=o.a-n.a,c=((a*l==-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,o.r=255&c*o.r+r*n.r+.5,o.g=255&c*o.g+r*n.g+.5,o.b=255&c*o.b+r*n.b+.5,o.a=s*o.a+(1-s)*n.a,i.rgb=o}return i}clone(){return new Cr(this.rgb)}alpha(t){return this._rgb.a=gr(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=pr(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Pr(this._rgb,2,t),this}darken(t){return Pr(this._rgb,2,-t),this}saturate(t){return Pr(this._rgb,1,t),this}desaturate(t){return Pr(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=Sr(t);i[0]=Or(i[0]+e),i=Rr(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function Ir(t){return new Cr(t)}const jr=t=>t instanceof CanvasGradient||t instanceof CanvasPattern;function Lr(t){return jr(t)?t:Ir(t)}function Nr(t){return jr(t)?t:Ir(t).saturate(.5).darken(.1).hexString()}const Br=Object.create(null),zr=Object.create(null);function Wr(t,e){if(!e)return t;const i=e.split(".");for(let e=0,o=i.length;e<o;++e){const o=i[e];t=t[o]||(t[o]=Object.create(null))}return t}function Hr(t,e,i){return"string"==typeof e?kn(Wr(t,e),i):kn(Wr(t,""),e)}var Fr=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>Nr(e.backgroundColor),this.hoverBorderColor=(t,e)=>Nr(e.borderColor),this.hoverColor=(t,e)=>Nr(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return Hr(this,t,e)}get(t){return Wr(this,t)}describe(t,e){return Hr(zr,t,e)}override(t,e){return Hr(Br,t,e)}route(t,e,i,o){const n=Wr(this,t),r=Wr(this,i),s="_"+e;Object.defineProperties(n,{[s]:{value:n[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[s],e=r[o];return un(t)?Object.assign({},e,t):mn(t,e)},set(t){this[s]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Ur(t,e,i,o,n){let r=e[n];return r||(r=e[n]=t.measureText(n).width,i.push(n)),r>o&&(o=r),o}function Vr(t,e,i,o){let n=(o=o||{}).data=o.data||{},r=o.garbageCollect=o.garbageCollect||[];o.font!==e&&(n=o.data={},r=o.garbageCollect=[],o.font=e),t.save(),t.font=e;let s=0;const a=i.length;let l,c,d,h,p;for(l=0;l<a;l++)if(h=i[l],null!=h&&!0!==pn(h))s=Ur(t,n,r,s,h);else if(pn(h))for(c=0,d=h.length;c<d;c++)p=h[c],null==p||pn(p)||(s=Ur(t,n,r,s,p));t.restore();const u=r.length/2;if(u>i.length){for(l=0;l<u;l++)delete n[r[l]];r.splice(0,u)}return s}function Yr(t,e,i){const o=t.currentDevicePixelRatio,n=0!==i?Math.max(i/2,.5):0;return Math.round((e-n)*o)/o+n}function qr(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Gr(t,e,i,o){let n,r,s,a,l;const c=e.pointStyle,d=e.rotation,h=e.radius;let p=(d||0)*Ln;if(c&&"object"==typeof c&&(n=c.toString(),"[object HTMLImageElement]"===n||"[object HTMLCanvasElement]"===n))return t.save(),t.translate(i,o),t.rotate(p),t.drawImage(c,-c.width/2,-c.height/2,c.width,c.height),void t.restore();if(!(isNaN(h)||h<=0)){switch(t.beginPath(),c){default:t.arc(i,o,h,0,Cn),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(p)*h,o-Math.cos(p)*h),p+=zn,t.lineTo(i+Math.sin(p)*h,o-Math.cos(p)*h),p+=zn,t.lineTo(i+Math.sin(p)*h,o-Math.cos(p)*h),t.closePath();break;case"rectRounded":l=.516*h,a=h-l,r=Math.cos(p+Bn)*a,s=Math.sin(p+Bn)*a,t.arc(i-r,o-s,l,p-An,p-Nn),t.arc(i+s,o-r,l,p-Nn,p),t.arc(i+r,o+s,l,p,p+Nn),t.arc(i-s,o+r,l,p+Nn,p+An),t.closePath();break;case"rect":if(!d){a=Math.SQRT1_2*h,t.rect(i-a,o-a,2*a,2*a);break}p+=Bn;case"rectRot":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+s,o-r),t.lineTo(i+r,o+s),t.lineTo(i-s,o+r),t.closePath();break;case"crossRot":p+=Bn;case"cross":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+r,o+s),t.moveTo(i+s,o-r),t.lineTo(i-s,o+r);break;case"star":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+r,o+s),t.moveTo(i+s,o-r),t.lineTo(i-s,o+r),p+=Bn,r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+r,o+s),t.moveTo(i+s,o-r),t.lineTo(i-s,o+r);break;case"line":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,o-s),t.lineTo(i+r,o+s);break;case"dash":t.moveTo(i,o),t.lineTo(i+Math.cos(p)*h,o+Math.sin(p)*h)}t.fill(),e.borderWidth>0&&t.stroke()}}function Kr(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function Xr(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Jr(t){t.restore()}function Zr(t,e,i,o,n){if(!e)return t.lineTo(i.x,i.y);if("middle"===n){const o=(e.x+i.x)/2;t.lineTo(o,e.y),t.lineTo(o,i.y)}else"after"===n!=!!o?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function Qr(t,e,i,o){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(o?e.cp1x:e.cp2x,o?e.cp1y:e.cp2y,o?i.cp2x:i.cp1x,o?i.cp2y:i.cp1y,i.x,i.y)}function ts(t,e,i,o,n,r={}){const s=pn(e)?e:[e],a=r.strokeWidth>0&&""!==r.strokeColor;let l,c;for(t.save(),t.font=n.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),hn(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,r),l=0;l<s.length;++l)c=s[l],a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),hn(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,i,o,r.maxWidth)),t.fillText(c,i,o,r.maxWidth),es(t,i,o,c,r),o+=n.lineHeight;t.restore()}function es(t,e,i,o,n){if(n.strikethrough||n.underline){const r=t.measureText(o),s=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=i-r.actualBoundingBoxAscent,c=i+r.actualBoundingBoxDescent,d=n.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=n.decorationWidth||2,t.moveTo(s,d),t.lineTo(a,d),t.stroke()}}function is(t,e){const{x:i,y:o,w:n,h:r,radius:s}=e;t.arc(i+s.topLeft,o+s.topLeft,s.topLeft,-Nn,An,!0),t.lineTo(i,o+r-s.bottomLeft),t.arc(i+s.bottomLeft,o+r-s.bottomLeft,s.bottomLeft,An,Nn,!0),t.lineTo(i+n-s.bottomRight,o+r),t.arc(i+n-s.bottomRight,o+r-s.bottomRight,s.bottomRight,Nn,0,!0),t.lineTo(i+n,o+s.topRight),t.arc(i+n-s.topRight,o+s.topRight,s.topRight,0,-Nn,!0),t.lineTo(i+s.topLeft,o)}const os=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),ns=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function rs(t,e){const i=(""+t).match(os);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}const ss=t=>+t||0;function as(t,e){const i={},o=un(e),n=o?Object.keys(e):e,r=un(t)?o?i=>mn(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of n)i[t]=ss(r(t));return i}function ls(t){return as(t,{top:"y",right:"x",bottom:"y",left:"x"})}function cs(t){return as(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ds(t){const e=ls(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function hs(t,e){t=t||{},e=e||Fr.font;let i=mn(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let o=mn(t.style,e.style);o&&!(""+o).match(ns)&&(console.warn('Invalid font style specified: "'+o+'"'),o="");const n={family:mn(t.family,e.family),lineHeight:rs(mn(t.lineHeight,e.lineHeight),i),size:i,style:o,weight:mn(t.weight,e.weight),string:""};return n.string=function(t){return!t||hn(t.size)||hn(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(n),n}function ps(t,e,i,o){let n,r,s,a=!0;for(n=0,r=t.length;n<r;++n)if(s=t[n],void 0!==s&&(void 0!==e&&"function"==typeof s&&(s=s(e),a=!1),void 0!==i&&pn(s)&&(s=s[i%s.length],a=!1),void 0!==s))return o&&!a&&(o.cacheable=!1),s}function us(t,e){return Object.assign(Object.create(t),e)}function fs(t,e,i){i=i||(i=>t[i]<e);let o,n=t.length-1,r=0;for(;n-r>1;)o=r+n>>1,i(o)?r=o:n=o;return{lo:r,hi:n}}const gs=(t,e,i)=>fs(t,i,(o=>t[o][e]<i)),ms=(t,e,i)=>fs(t,i,(o=>t[o][e]>=i)),ys=["push","pop","shift","splice","unshift"];function bs(t,e){const i=t._chartjs;if(!i)return;const o=i.listeners,n=o.indexOf(e);-1!==n&&o.splice(n,1),o.length>0||(ys.forEach((e=>{delete t[e]})),delete t._chartjs)}function xs(t){const e=new Set;let i,o;for(i=0,o=t.length;i<o;++i)e.add(t[i]);return e.size===o?t:Array.from(e)}function vs(t,e=[""],i=t,o,n=(()=>t[0])){Pn(o)||(o=Ms("_fallback",t));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:o,_getTarget:n,override:n=>vs([n,...t],e,i,o)};return new Proxy(r,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,o)=>Rs(i,o,(()=>function(t,e,i,o){let n;for(const r of e)if(n=Ms(Ss(r,t),i),Pn(n))return ks(t,n)?Ts(i,o,t,n):n}(o,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>Ds(t).includes(e),ownKeys:t=>Ds(t),set(t,e,i){const o=t._storage||(t._storage=n());return t[e]=o[e]=i,delete t._keys,!0}})}function ws(t,e,i,o){const n={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:_s(t,o),setContext:e=>ws(t,e,i,o),override:n=>ws(t.override(n),e,i,o)};return new Proxy(n,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>Rs(t,e,(()=>function(t,e,i){const{_proxy:o,_context:n,_subProxy:r,_descriptors:s}=t;let a=o[e];return Mn(a)&&s.isScriptable(e)&&(a=function(t,e,i,o){const{_proxy:n,_context:r,_subProxy:s,_stack:a}=i;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);return a.add(t),e=e(r,s||o),a.delete(t),ks(t,e)&&(e=Ts(n._scopes,n,t,e)),e}(e,a,t,i)),pn(a)&&a.length&&(a=function(t,e,i,o){const{_proxy:n,_context:r,_subProxy:s,_descriptors:a}=i;if(Pn(r.index)&&o(t))e=e[r.index%e.length];else if(un(e[0])){const i=e,o=n._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=Ts(o,n,t,l);e.push(ws(i,r,s&&s[t],a))}}return e}(e,a,t,s.isIndexable)),ks(e,a)&&(a=ws(a,n,r&&r[e],s)),a}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,o)=>(t[i]=o,delete e[i],!0)})}function _s(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:o=e.indexable,_allKeys:n=e.allKeys}=t;return{allKeys:n,scriptable:i,indexable:o,isScriptable:Mn(i)?i:()=>i,isIndexable:Mn(o)?o:()=>o}}const Ss=(t,e)=>t?t+Tn(e):e,ks=(t,e)=>un(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Rs(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const o=i();return t[e]=o,o}function Os(t,e,i){return Mn(t)?t(e,i):t}const $s=(t,e)=>!0===t?e:"string"==typeof t?En(e,t):void 0;function Es(t,e,i,o,n){for(const r of e){const e=$s(i,r);if(e){t.add(e);const r=Os(e._fallback,i,n);if(Pn(r)&&r!==i&&r!==o)return r}else if(!1===e&&Pn(o)&&i!==o)return null}return!1}function Ts(t,e,i,o){const n=e._rootScopes,r=Os(e._fallback,i,o),s=[...t,...n],a=new Set;a.add(o);let l=Ps(a,s,i,r||i,o);return null!==l&&(!Pn(r)||r===i||(l=Ps(a,s,r,l,o),null!==l))&&vs(Array.from(a),[""],n,r,(()=>function(t,e,i){const o=t._getTarget();e in o||(o[e]={});const n=o[e];return pn(n)&&un(i)?i:n}(e,i,o)))}function Ps(t,e,i,o,n){for(;i;)i=Es(t,e,i,o,n);return i}function Ms(t,e){for(const i of e){if(!i)continue;const e=i[t];if(Pn(e))return e}}function Ds(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}const As=Number.EPSILON||1e-14,Cs=(t,e)=>e<t.length&&!t[e].skip&&t[e],Is=t=>"x"===t?"y":"x";function js(t,e,i,o){const n=t.skip?e:t,r=e,s=i.skip?e:i,a=Jn(r,n),l=Jn(s,r);let c=a/(a+l),d=l/(a+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=o*c,p=o*d;return{previous:{x:r.x-h*(s.x-n.x),y:r.y-h*(s.y-n.y)},next:{x:r.x+p*(s.x-n.x),y:r.y+p*(s.y-n.y)}}}function Ls(t,e,i){return Math.max(Math.min(t,i),e)}function Ns(t,e,i,o,n){let r,s,a,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)!function(t,e="x"){const i=Is(e),o=t.length,n=Array(o).fill(0),r=Array(o);let s,a,l,c=Cs(t,0);for(s=0;s<o;++s)if(a=l,l=c,c=Cs(t,s+1),l){if(c){const t=c[e]-l[e];n[s]=0!==t?(c[i]-l[i])/t:0}r[s]=a?c?Hn(n[s-1])!==Hn(n[s])?0:(n[s-1]+n[s])/2:n[s-1]:n[s]}!function(t,e,i){const o=t.length;let n,r,s,a,l,c=Cs(t,0);for(let d=0;d<o-1;++d)l=c,c=Cs(t,d+1),l&&c&&(Vn(e[d],0,As)?i[d]=i[d+1]=0:(n=i[d]/e[d],r=i[d+1]/e[d],a=Math.pow(n,2)+Math.pow(r,2),a<=9||(s=3/Math.sqrt(a),i[d]=n*s*e[d],i[d+1]=r*s*e[d])))}(t,n,r),function(t,e,i="x"){const o=Is(i),n=t.length;let r,s,a,l=Cs(t,0);for(let c=0;c<n;++c){if(s=a,a=l,l=Cs(t,c+1),!a)continue;const n=a[i],d=a[o];s&&(r=(n-s[i])/3,a[`cp1${i}`]=n-r,a[`cp1${o}`]=d-r*e[c]),l&&(r=(l[i]-n)/3,a[`cp2${i}`]=n+r,a[`cp2${o}`]=d+r*e[c])}}(t,r,e)}(t,n);else{let i=o?t[t.length-1]:t[0];for(r=0,s=t.length;r<s;++r)a=t[r],l=js(i,a,t[Math.min(r+1,s-(o?0:1))%s],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,i=a}e.capBezierPoints&&function(t,e){let i,o,n,r,s,a=Kr(t[0],e);for(i=0,o=t.length;i<o;++i)s=r,r=a,a=i<o-1&&Kr(t[i+1],e),r&&(n=t[i],s&&(n.cp1x=Ls(n.cp1x,e.left,e.right),n.cp1y=Ls(n.cp1y,e.top,e.bottom)),a&&(n.cp2x=Ls(n.cp2x,e.left,e.right),n.cp2y=Ls(n.cp2y,e.top,e.bottom)))}(t,i)}function Bs(){return"undefined"!=typeof window&&"undefined"!=typeof document}function zs(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function Ws(t,e,i){let o;return"string"==typeof t?(o=parseInt(t,10),-1!==t.indexOf("%")&&(o=o/100*e.parentNode[i])):o=t,o}const Hs=t=>window.getComputedStyle(t,null),Fs=["top","right","bottom","left"];function Us(t,e,i){const o={};i=i?"-"+i:"";for(let n=0;n<4;n++){const r=Fs[n];o[r]=parseFloat(t[e+"-"+r+i])||0}return o.width=o.left+o.right,o.height=o.top+o.bottom,o}function Vs(t,e){const{canvas:i,currentDevicePixelRatio:o}=e,n=Hs(i),r="border-box"===n.boxSizing,s=Us(n,"padding"),a=Us(n,"border","width"),{x:l,y:c,box:d}=function(t,e){const i=t.native||t,o=i.touches,n=o&&o.length?o[0]:i,{offsetX:r,offsetY:s}=n;let a,l,c=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(r,s,i.target))a=r,l=s;else{const t=e.getBoundingClientRect();a=n.clientX-t.left,l=n.clientY-t.top,c=!0}return{x:a,y:l,box:c}}(t,i),h=s.left+(d&&a.left),p=s.top+(d&&a.top);let{width:u,height:f}=e;return r&&(u-=s.width+a.width,f-=s.height+a.height),{x:Math.round((l-h)/u*i.width/o),y:Math.round((c-p)/f*i.height/o)}}const Ys=t=>Math.round(10*t)/10;function qs(t,e,i){const o=e||1,n=Math.floor(t.height*o),r=Math.floor(t.width*o);t.height=n/o,t.width=r/o;const s=t.canvas;return s.style&&(i||!s.style.height&&!s.style.width)&&(s.style.height=`${t.height}px`,s.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==o||s.height!==n||s.width!==r)&&(t.currentDevicePixelRatio=o,s.height=n,s.width=r,t.ctx.setTransform(o,0,0,o,0,0),!0)}const Gs=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function Ks(t,e){const i=function(t,e){return Hs(t).getPropertyValue(e)}(t,e),o=i&&i.match(/^(\d+)(\.\d+)?px$/);return o?+o[1]:void 0}function Xs(t,e,i,o){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function Js(t,e,i,o){return{x:t.x+i*(e.x-t.x),y:"middle"===o?i<.5?t.y:e.y:"after"===o?i<1?t.y:e.y:i>0?e.y:t.y}}function Zs(t,e,i,o){const n={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},s=Xs(t,n,i),a=Xs(n,r,i),l=Xs(r,e,i),c=Xs(s,a,i),d=Xs(a,l,i);return Xs(c,d,i)}const Qs=new Map;function ta(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let o=Qs.get(i);return o||(o=new Intl.NumberFormat(t,e),Qs.set(i,o)),o}(e,i).format(t)}function ea(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function ia(t,e){let i,o;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,o=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=o)}function oa(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function na(t){return"angle"===t?{between:tr,compare:Zn,normalize:Qn}:{between:ir,compare:(t,e)=>t-e,normalize:t=>t}}function ra({start:t,end:e,count:i,loop:o,style:n}){return{start:t%i,end:e%i,loop:o&&(e-t+1)%i==0,style:n}}function sa(t,e,i){if(!i)return[t];const{property:o,start:n,end:r}=i,s=e.length,{compare:a,between:l,normalize:c}=na(o),{start:d,end:h,loop:p,style:u}=function(t,e,i){const{property:o,start:n,end:r}=i,{between:s,normalize:a}=na(o),l=e.length;let c,d,{start:h,end:p,loop:u}=t;if(u){for(h+=l,p+=l,c=0,d=l;c<d&&s(a(e[h%l][o]),n,r);++c)h--,p--;h%=l,p%=l}return p<h&&(p+=l),{start:h,end:p,loop:u,style:t.style}}(t,e,i),f=[];let g,m,y,b=!1,x=null;for(let t=d,i=d;t<=h;++t)m=e[t%s],m.skip||(g=c(m[o]),g!==y&&(b=l(g,n,r),null===x&&(b||l(n,y,g)&&0!==a(n,y))&&(x=0===a(g,n)?t:i),null!==x&&(!b||0===a(r,g)||l(r,y,g))&&(f.push(ra({start:x,end:t,loop:p,count:s,style:u})),x=null),i=t,y=g));return null!==x&&f.push(ra({start:x,end:h,loop:p,count:s,style:u})),f}function aa(t,e){const i=[],o=t.segments;for(let n=0;n<o.length;n++){const r=sa(o[n],t.points,e);r.length&&i.push(...r)}return i}function la(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function ca(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var da=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,o){const n=e.listeners[o],r=e.duration;n.forEach((o=>o({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(i-e.start,r)})))}_refresh(){this._request||(this._running=!0,this._request=rn.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((i,o)=>{if(!i.running||!i.items.length)return;const n=i.items;let r,s=n.length-1,a=!1;for(;s>=0;--s)r=n[s],r._active?(r._total>i.duration&&(i.duration=r._total),r.tick(t),a=!0):(n[s]=n[n.length-1],n.pop());a&&(o.draw(),this._notify(o,i,t,"progress")),n.length||(i.running=!1,this._notify(o,i,t,"complete"),i.initial=!1),e+=n.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let o=i.length-1;for(;o>=0;--o)i[o].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const ha="transparent",pa={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const o=Lr(t||ha),n=o.valid&&Lr(e||ha);return n&&n.valid?n.mix(o,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class ua{constructor(t,e,i,o){const n=e[i];o=ps([t.to,o,n,t.from]);const r=ps([t.from,n,o]);this._active=!0,this._fn=t.fn||pa[t.type||typeof r],this._easing=sr[t.easing]||sr.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=r,this._to=o,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const o=this._target[this._prop],n=i-this._start,r=this._duration-n;this._start=i,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=n,this._loop=!!t.loop,this._to=ps([t.to,e,o,t.from]),this._from=ps([t.from,o,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,o=this._prop,n=this._from,r=this._loop,s=this._to;let a;if(this._active=n!==s&&(r||e<i),!this._active)return this._target[o]=s,void this._notify(!0);e<0?this._target[o]=n:(a=e/i%2,a=r&&a>1?2-a:a,a=this._easing(Math.min(1,Math.max(0,a))),this._target[o]=this._fn(n,s,a))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}Fr.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const fa=Object.keys(Fr.animation);Fr.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),Fr.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),Fr.describe("animations",{_fallback:"animation"}),Fr.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class ga{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!un(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const o=t[i];if(!un(o))return;const n={};for(const t of fa)n[t]=o[t];(pn(o.properties)&&o.properties||[i]).forEach((t=>{t!==i&&e.has(t)||e.set(t,n)}))}))}_animateOptions(t,e){const i=e.options,o=function(t,e){if(!e)return;let i=t.options;if(i)return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i;t.options=e}(t,i);if(!o)return[];const n=this._createAnimations(o,i);return i.$shared&&function(t,e){const i=[],o=Object.keys(e);for(let e=0;e<o.length;e++){const n=t[o[e]];n&&n.active()&&i.push(n.wait())}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i}),(()=>{})),n}_createAnimations(t,e){const i=this._properties,o=[],n=t.$animations||(t.$animations={}),r=Object.keys(e),s=Date.now();let a;for(a=r.length-1;a>=0;--a){const l=r[a];if("$"===l.charAt(0))continue;if("options"===l){o.push(...this._animateOptions(t,e));continue}const c=e[l];let d=n[l];const h=i.get(l);if(d){if(h&&d.active()){d.update(h,c,s);continue}d.cancel()}h&&h.duration?(n[l]=d=new ua(h,t,l,c),o.push(d)):t[l]=c}return o}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(da.add(this._chart,i),!0):void 0}}function ma(t,e){const i=t&&t.options||{},o=i.reverse,n=void 0===i.min?e:0,r=void 0===i.max?e:0;return{start:o?r:n,end:o?n:r}}function ya(t,e){const i=[],o=t._getSortedDatasetMetas(e);let n,r;for(n=0,r=o.length;n<r;++n)i.push(o[n].index);return i}function ba(t,e,i,o={}){const n=t.keys,r="single"===o.mode;let s,a,l,c;if(null!==e){for(s=0,a=n.length;s<a;++s){if(l=+n[s],l===i){if(o.all)continue;break}c=t.values[l],fn(c)&&(r||0===e||Hn(e)===Hn(c))&&(e+=c)}return e}}function xa(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function va(t,e,i){const o=t[e]||(t[e]={});return o[i]||(o[i]={})}function wa(t,e,i,o){for(const n of e.getMatchingVisibleMetas(o).reverse()){const e=t[n.index];if(i&&e>0||!i&&e<0)return n.index}return null}function _a(t,e){const{chart:i,_cachedMeta:o}=t,n=i._stacks||(i._stacks={}),{iScale:r,vScale:s,index:a}=o,l=r.axis,c=s.axis,d=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(r,s,o),h=e.length;let p;for(let t=0;t<h;++t){const i=e[t],{[l]:r,[c]:h}=i;p=(i._stacks||(i._stacks={}))[c]=va(n,d,r),p[a]=h,p._top=wa(p,s,!0,o.type),p._bottom=wa(p,s,!1,o.type)}}function Sa(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function ka(t,e){const i=t.controller.index,o=t.vScale&&t.vScale.axis;if(o){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[o]||void 0===e[o][i])return;delete e[o][i]}}}const Ra=t=>"reset"===t||"none"===t,Oa=(t,e)=>e?t:Object.assign({},t);class $a{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=xa(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&ka(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),o=(t,e,i,o)=>"x"===t?e:"r"===t?o:i,n=e.xAxisID=mn(i.xAxisID,Sa(t,"x")),r=e.yAxisID=mn(i.yAxisID,Sa(t,"y")),s=e.rAxisID=mn(i.rAxisID,Sa(t,"r")),a=e.indexAxis,l=e.iAxisID=o(a,n,r,s),c=e.vAxisID=o(a,r,n,s);e.xScale=this.getScaleForId(n),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(s),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&bs(this._data,this),t._stacked&&ka(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(un(e))this._data=function(t){const e=Object.keys(t),i=new Array(e.length);let o,n,r;for(o=0,n=e.length;o<n;++o)r=e[o],i[o]={x:r,y:t[r]};return i}(e);else if(i!==e){if(i){bs(i,this);const t=this._cachedMeta;ka(t),t._parsed=[]}e&&Object.isExtensible(e)&&(this,(o=e)._chartjs?o._chartjs.listeners.push(this):(Object.defineProperty(o,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[this]}}),ys.forEach((t=>{const e="_onData"+Tn(t),i=o[t];Object.defineProperty(o,t,{configurable:!0,enumerable:!1,value(...t){const n=i.apply(this,t);return o._chartjs.listeners.forEach((i=>{"function"==typeof i[e]&&i[e](...t)})),n}})})))),this._syncList=[],this._data=e}var o}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let o=!1;this._dataCheck();const n=e._stacked;e._stacked=xa(e.vScale,e),e.stack!==i.stack&&(o=!0,ka(e),e.stack=i.stack),this._resyncElements(t),(o||n!==e._stacked)&&_a(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:o}=this,{iScale:n,_stacked:r}=i,s=n.axis;let a,l,c,d=0===t&&e===o.length||i._sorted,h=t>0&&i._parsed[t-1];if(!1===this._parsing)i._parsed=o,i._sorted=!0,c=o;else{c=pn(o[t])?this.parseArrayData(i,o,t,e):un(o[t])?this.parseObjectData(i,o,t,e):this.parsePrimitiveData(i,o,t,e);const n=()=>null===l[s]||h&&l[s]<h[s];for(a=0;a<e;++a)i._parsed[a+t]=l=c[a],d&&(n()&&(d=!1),h=l);i._sorted=d}r&&_a(this,c)}parsePrimitiveData(t,e,i,o){const{iScale:n,vScale:r}=t,s=n.axis,a=r.axis,l=n.getLabels(),c=n===r,d=new Array(o);let h,p,u;for(h=0,p=o;h<p;++h)u=h+i,d[h]={[s]:c||n.parse(l[u],u),[a]:r.parse(e[u],u)};return d}parseArrayData(t,e,i,o){const{xScale:n,yScale:r}=t,s=new Array(o);let a,l,c,d;for(a=0,l=o;a<l;++a)c=a+i,d=e[c],s[a]={x:n.parse(d[0],c),y:r.parse(d[1],c)};return s}parseObjectData(t,e,i,o){const{xScale:n,yScale:r}=t,{xAxisKey:s="x",yAxisKey:a="y"}=this._parsing,l=new Array(o);let c,d,h,p;for(c=0,d=o;c<d;++c)h=c+i,p=e[h],l[c]={x:n.parse(En(p,s),h),y:r.parse(En(p,a),h)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const o=this.chart,n=this._cachedMeta,r=e[t.axis];return ba({keys:ya(o,!0),values:e._stacks[t.axis]},r,n.index,{mode:i})}updateRangeFromParsed(t,e,i,o){const n=i[e.axis];let r=null===n?NaN:n;const s=o&&i._stacks[e.axis];o&&s&&(o.values=s,r=ba(o,n,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const i=this._cachedMeta,o=i._parsed,n=i._sorted&&t===i.iScale,r=o.length,s=this._getOtherScale(t),a=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:ya(i,!0),values:null})(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:d}=function(t){const{min:e,max:i,minDefined:o,maxDefined:n}=t.getUserBounds();return{min:o?e:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}(s);let h,p;function u(){p=o[h];const e=p[s.axis];return!fn(p[t.axis])||c>e||d<e}for(h=0;h<r&&(u()||(this.updateRangeFromParsed(l,t,p,a),!n));++h);if(n)for(h=r-1;h>=0;--h)if(!u()){this.updateRangeFromParsed(l,t,p,a);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let o,n,r;for(o=0,n=e.length;o<n;++o)r=e[o][t.axis],fn(r)&&i.push(r);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,o=e.vScale,n=this.getParsed(t);return{label:i?""+i.getLabelForValue(n[i.axis]):"",value:o?""+o.getLabelForValue(n[o.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,o,n;return un(t)?(e=t.top,i=t.right,o=t.bottom,n=t.left):e=i=o=n=t,{top:e,right:i,bottom:o,left:n,disabled:!1===t}}(mn(this.options.clip,function(t,e,i){if(!1===i)return!1;const o=ma(t,i),n=ma(e,i);return{top:n.end,right:o.end,bottom:n.start,left:o.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,o=i.data||[],n=e.chartArea,r=[],s=this._drawStart||0,a=this._drawCount||o.length-s,l=this.options.drawActiveElementsOnTop;let c;for(i.dataset&&i.dataset.draw(t,n,s,a),c=s;c<s+a;++c){const e=o[c];e.hidden||(e.active&&l?r.push(e):e.draw(t,n))}for(c=0;c<r.length;++c)r[c].draw(t,n)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const o=this.getDataset();let n;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];n=e.$context||(e.$context=function(t,e,i){return us(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),n.parsed=this.getParsed(t),n.raw=o.data[t],n.index=n.dataIndex=t}else n=this.$context||(this.$context=function(t,e){return us(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),n.dataset=o,n.index=n.datasetIndex=this.index;return n.active=!!e,n.mode=i,n}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const o="active"===e,n=this._cachedDataOpts,r=t+"-"+e,s=n[r],a=this.enableOptionSharing&&Pn(i);if(s)return Oa(s,a);const l=this.chart.config,c=l.datasetElementScopeKeys(this._type,t),d=o?[`${t}Hover`,"hover",t,""]:[t,""],h=l.getOptionScopes(this.getDataset(),c),p=Object.keys(Fr.elements[t]),u=l.resolveNamedOptions(h,p,(()=>this.getContext(i,o)),d);return u.$shared&&(u.$shared=a,n[r]=Object.freeze(Oa(u,a))),u}_resolveAnimations(t,e,i){const o=this.chart,n=this._cachedDataOpts,r=`animation-${e}`,s=n[r];if(s)return s;let a;if(!1!==o.options.animation){const o=this.chart.config,n=o.datasetAnimationScopeKeys(this._type,e),r=o.getOptionScopes(this.getDataset(),n);a=o.createResolver(r,this.getContext(t,i,e))}const l=new ga(o,a&&a.animations);return a&&a._cacheable&&(n[r]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ra(t)||this.chart._animationsDisabled}updateElement(t,e,i,o){Ra(o)?Object.assign(t,i):this._resolveAnimations(e,o).update(t,i)}updateSharedOptions(t,e,i){t&&!Ra(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,o){t.active=o;const n=this.getStyle(e,o);this._resolveAnimations(e,i,o).update(t,{options:!o&&this.getSharedOptions(n)||n})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const o=i.length,n=e.length,r=Math.min(n,o);r&&this.parse(0,r),n>o?this._insertElements(o,n-o,t):n<o&&this._removeElements(n,o-n)}_insertElements(t,e,i=!0){const o=this._cachedMeta,n=o.data,r=t+e;let s;const a=t=>{for(t.length+=e,s=t.length-1;s>=r;s--)t[s]=t[s-e]};for(a(n),s=t;s<r;++s)n[s]=new this.dataElementType;this._parsing&&a(o._parsed),this.parse(t,e),i&&this.updateElements(n,t,e,"reset")}updateElements(t,e,i,o){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const o=i._parsed.splice(t,e);i._stacked&&ka(i,o)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,o]=t;this[e](i,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function Ea(t){const e=t.iScale,i=function(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let o=[];for(let e=0,n=i.length;e<n;e++)o=o.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=xs(o.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let o,n,r,s,a=e._length;const l=()=>{32767!==r&&-32768!==r&&(Pn(s)&&(a=Math.min(a,Math.abs(r-s)||a)),s=r)};for(o=0,n=i.length;o<n;++o)r=e.getPixelForValue(i[o]),l();for(s=void 0,o=0,n=e.ticks.length;o<n;++o)r=e.getPixelForTick(o),l();return a}function Ta(t,e,i,o){return pn(t)?function(t,e,i,o){const n=i.parse(t[0],o),r=i.parse(t[1],o),s=Math.min(n,r),a=Math.max(n,r);let l=s,c=a;Math.abs(s)>Math.abs(a)&&(l=a,c=s),e[i.axis]=c,e._custom={barStart:l,barEnd:c,start:n,end:r,min:s,max:a}}(t,e,i,o):e[i.axis]=i.parse(t,o),e}function Pa(t,e,i,o){const n=t.iScale,r=t.vScale,s=n.getLabels(),a=n===r,l=[];let c,d,h,p;for(c=i,d=i+o;c<d;++c)p=e[c],h={},h[n.axis]=a||n.parse(s[c],c),l.push(Ta(p,h,r,c));return l}function Ma(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function Da(t,e,i,o){let n=e.borderSkipped;const r={};if(!n)return void(t.borderSkipped=r);const{start:s,end:a,reverse:l,top:c,bottom:d}=function(t){let e,i,o,n,r;return t.horizontal?(e=t.base>t.x,i="left",o="right"):(e=t.base<t.y,i="bottom",o="top"),e?(n="end",r="start"):(n="start",r="end"),{start:i,end:o,reverse:e,top:n,bottom:r}}(t);"middle"===n&&i&&(t.enableBorderRadius=!0,(i._top||0)===o?n=c:(i._bottom||0)===o?n=d:(r[Aa(d,s,a,l)]=!0,n=c)),r[Aa(n,s,a,l)]=!0,t.borderSkipped=r}function Aa(t,e,i,o){var n,r,s;return o?(s=i,t=Ca(t=(n=t)===(r=e)?s:n===s?r:n,i,e)):t=Ca(t,e,i),t}function Ca(t,e,i){return"start"===t?e:"end"===t?i:t}function Ia(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}$a.defaults={},$a.prototype.datasetElementType=null,$a.prototype.dataElementType=null;class ja extends $a{parsePrimitiveData(t,e,i,o){return Pa(t,e,i,o)}parseArrayData(t,e,i,o){return Pa(t,e,i,o)}parseObjectData(t,e,i,o){const{iScale:n,vScale:r}=t,{xAxisKey:s="x",yAxisKey:a="y"}=this._parsing,l="x"===n.axis?s:a,c="x"===r.axis?s:a,d=[];let h,p,u,f;for(h=i,p=i+o;h<p;++h)f=e[h],u={},u[n.axis]=n.parse(En(f,l),h),d.push(Ta(En(f,c),u,r,h));return d}updateRangeFromParsed(t,e,i,o){super.updateRangeFromParsed(t,e,i,o);const n=i._custom;n&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,n.min),t.max=Math.max(t.max,n.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:o}=e,n=this.getParsed(t),r=n._custom,s=Ma(r)?"["+r.start+", "+r.end+"]":""+o.getLabelForValue(n[o.axis]);return{label:""+i.getLabelForValue(n[i.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize(),this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,o){const n="reset"===o,{index:r,_cachedMeta:{vScale:s}}=this,a=s.getBasePixel(),l=s.isHorizontal(),c=this._getRuler(),d=this.resolveDataElementOptions(e,o),h=this.getSharedOptions(d),p=this.includeOptions(o,h);this.updateSharedOptions(h,o,d);for(let d=e;d<e+i;d++){const e=this.getParsed(d),i=n||hn(e[s.axis])?{base:a,head:a}:this._calculateBarValuePixels(d),u=this._calculateBarIndexPixels(d,c),f=(e._stacks||{})[s.axis],g={horizontal:l,base:i.base,enableBorderRadius:!f||Ma(e._custom)||r===f._top||r===f._bottom,x:l?i.head:u.center,y:l?u.center:i.head,height:l?u.size:Math.abs(i.size),width:l?Math.abs(i.size):u.size};p&&(g.options=h||this.resolveDataElementOptions(d,t[d].active?"active":o));const m=g.options||t[d].options;Da(g,m,f,r),Ia(g,m,c.ratio),this.updateElement(t[d],d,g,o)}}_getStacks(t,e){const i=this._cachedMeta.iScale,o=i.getMatchingVisibleMetas(this._type),n=i.options.stacked,r=o.length,s=[];let a,l;for(a=0;a<r;++a)if(l=o[a],l.controller.options.grouped){if(void 0!==e){const t=l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];if(hn(t)||isNaN(t))continue}if((!1===n||-1===s.indexOf(l.stack)||void 0===n&&void 0===l.stack)&&s.push(l.stack),l.index===t)break}return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){const o=this._getStacks(t,i),n=void 0!==e?o.indexOf(e):-1;return-1===n?o.length-1:n}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,o=[];let n,r;for(n=0,r=e.data.length;n<r;++n)o.push(i.getPixelForValue(this.getParsed(n)[i.axis],n));const s=t.barThickness;return{min:s||Ea(e),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i},options:{base:o,minBarLength:n}}=this,r=o||0,s=this.getParsed(t),a=s._custom,l=Ma(a);let c,d,h=s[e.axis],p=0,u=i?this.applyStack(e,s,i):h;u!==h&&(p=u-h,u=h),l&&(h=a.barStart,u=a.barEnd-a.barStart,0!==h&&Hn(h)!==Hn(a.barEnd)&&(p=0),p+=h);const f=hn(o)||l?p:o;let g=e.getPixelForValue(f);if(c=this.chart.getDataVisibility(t)?e.getPixelForValue(p+u):g,d=c-g,Math.abs(d)<n&&(d=function(t,e,i){return 0!==t?Hn(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}(d,e,r)*n,h===r&&(g-=d/2),c=g+d),g===e.getPixelForValue(r)){const t=Hn(d)*e.getLineWidthForValue(r)/2;g+=t,d-=t}return{size:d,base:g,head:c,center:c+d/2}}_calculateBarIndexPixels(t,e){const i=e.scale,o=this.options,n=o.skipNull,r=mn(o.maxBarThickness,1/0);let s,a;if(e.grouped){const i=n?this._getStackCount(t):e.stackCount,l="flex"===o.barThickness?function(t,e,i,o){const n=e.pixels,r=n[t];let s=t>0?n[t-1]:null,a=t<n.length-1?n[t+1]:null;const l=i.categoryPercentage;null===s&&(s=r-(null===a?e.end-e.start:a-r)),null===a&&(a=r+r-s);const c=r-(r-Math.min(s,a))/2*l;return{chunk:Math.abs(a-s)/2*l/o,ratio:i.barPercentage,start:c}}(t,e,o,i):function(t,e,i,o){const n=i.barThickness;let r,s;return hn(n)?(r=e.min*i.categoryPercentage,s=i.barPercentage):(r=n*o,s=1),{chunk:r/o,ratio:s,start:e.pixels[t]-r/2}}(t,e,o,i),c=this._getStackIndex(this.index,this._cachedMeta.stack,n?t:void 0);s=l.start+l.chunk*c+l.chunk/2,a=Math.min(r,l.chunk*l.ratio)}else s=i.getPixelForValue(this.getParsed(t)[i.axis],t),a=Math.min(r,e.min*e.ratio);return{base:s-a/2,head:s+a/2,center:s,size:a}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,o=i.length;let n=0;for(;n<o;++n)null!==this.getParsed(n)[e.axis]&&i[n].draw(this._ctx)}}ja.id="bar",ja.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},ja.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class La extends $a{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,o){const n=super.parsePrimitiveData(t,e,i,o);for(let t=0;t<n.length;t++)n[t]._custom=this.resolveDataElementOptions(t+i).radius;return n}parseArrayData(t,e,i,o){const n=super.parseArrayData(t,e,i,o);for(let t=0;t<n.length;t++){const o=e[i+t];n[t]._custom=mn(o[2],this.resolveDataElementOptions(t+i).radius)}return n}parseObjectData(t,e,i,o){const n=super.parseObjectData(t,e,i,o);for(let t=0;t<n.length;t++){const o=e[i+t];n[t]._custom=mn(o&&o.r&&+o.r,this.resolveDataElementOptions(t+i).radius)}return n}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,{xScale:i,yScale:o}=e,n=this.getParsed(t),r=i.getLabelForValue(n.x),s=o.getLabelForValue(n.y),a=n._custom;return{label:e.label,value:"("+r+", "+s+(a?", "+a:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,o){const n="reset"===o,{iScale:r,vScale:s}=this._cachedMeta,a=this.resolveDataElementOptions(e,o),l=this.getSharedOptions(a),c=this.includeOptions(o,l),d=r.axis,h=s.axis;for(let a=e;a<e+i;a++){const e=t[a],i=!n&&this.getParsed(a),l={},p=l[d]=n?r.getPixelForDecimal(.5):r.getPixelForValue(i[d]),u=l[h]=n?s.getBasePixel():s.getPixelForValue(i[h]);l.skip=isNaN(p)||isNaN(u),c&&(l.options=this.resolveDataElementOptions(a,e.active?"active":o),n&&(l.options.radius=0)),this.updateElement(e,a,l,o)}this.updateSharedOptions(l,o,a)}resolveDataElementOptions(t,e){const i=this.getParsed(t);let o=super.resolveDataElementOptions(t,e);o.$shared&&(o=Object.assign({},o,{$shared:!1}));const n=o.radius;return"active"!==e&&(o.radius=0),o.radius+=mn(i&&i._custom,n),o}}La.id="bubble",La.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},La.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class Na extends $a{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,o=this._cachedMeta;if(!1===this._parsing)o._parsed=i;else{let n,r,s=t=>+i[t];if(un(i[t])){const{key:t="value"}=this._parsing;s=e=>+En(i[e],t)}for(n=t,r=t+e;n<r;++n)o._parsed[n]=s(n)}}_getRotation(){return qn(this.options.rotation-90)}_getCircumference(){return qn(this.options.circumference)}_getRotationExtents(){let t=Cn,e=-Cn;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){const o=this.chart.getDatasetMeta(i).controller,n=o._getRotation(),r=o._getCircumference();t=Math.min(t,n),e=Math.max(e,n+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,o=this._cachedMeta,n=o.data,r=this.getMaxBorderWidth()+this.getMaxOffset(n)+this.options.spacing,s=Math.max((Math.min(i.width,i.height)-r)/2,0),a=Math.min((c=s,"string"==typeof(l=this.options.cutout)&&l.endsWith("%")?parseFloat(l)/100:l/c),1);var l,c;const d=this._getRingWeight(this.index),{circumference:h,rotation:p}=this._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:g,offsetY:m}=function(t,e,i){let o=1,n=1,r=0,s=0;if(e<Cn){const a=t,l=a+e,c=Math.cos(a),d=Math.sin(a),h=Math.cos(l),p=Math.sin(l),u=(t,e,o)=>tr(t,a,l,!0)?1:Math.max(e,e*i,o,o*i),f=(t,e,o)=>tr(t,a,l,!0)?-1:Math.min(e,e*i,o,o*i),g=u(0,c,h),m=u(Nn,d,p),y=f(An,c,h),b=f(An+Nn,d,p);o=(g-y)/2,n=(m-b)/2,r=-(g+y)/2,s=-(m+b)/2}return{ratioX:o,ratioY:n,offsetX:r,offsetY:s}}(p,h,a),y=(i.width-r)/u,b=(i.height-r)/f,x=Math.max(Math.min(y,b)/2,0),v=yn(this.options.radius,x),w=(v-Math.max(v*a,0))/this._getVisibleDatasetWeightTotal();this.offsetX=g*v,this.offsetY=m*v,o.total=this.calculateTotal(),this.outerRadius=v-w*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-w*d,0),this.updateElements(n,0,n.length,t)}_circumference(t,e){const i=this.options,o=this._cachedMeta,n=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===o._parsed[t]||o.data[t].hidden?0:this.calculateCircumference(o._parsed[t]*n/Cn)}updateElements(t,e,i,o){const n="reset"===o,r=this.chart,s=r.chartArea,a=r.options.animation,l=(s.left+s.right)/2,c=(s.top+s.bottom)/2,d=n&&a.animateScale,h=d?0:this.innerRadius,p=d?0:this.outerRadius,u=this.resolveDataElementOptions(e,o),f=this.getSharedOptions(u),g=this.includeOptions(o,f);let m,y=this._getRotation();for(m=0;m<e;++m)y+=this._circumference(m,n);for(m=e;m<e+i;++m){const e=this._circumference(m,n),i=t[m],r={x:l+this.offsetX,y:c+this.offsetY,startAngle:y,endAngle:y+e,circumference:e,outerRadius:p,innerRadius:h};g&&(r.options=f||this.resolveDataElementOptions(m,i.active?"active":o)),y+=e,this.updateElement(i,m,r,o)}this.updateSharedOptions(f,o,u)}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,o=0;for(i=0;i<e.length;i++){const n=t._parsed[i];null===n||isNaN(n)||!this.chart.getDataVisibility(i)||e[i].hidden||(o+=Math.abs(n))}return o}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Cn*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,o=i.data.labels||[],n=ta(e._parsed[t],i.options.locale);return{label:o[t]||"",value:n}}getMaxBorderWidth(t){let e=0;const i=this.chart;let o,n,r,s,a;if(!t)for(o=0,n=i.data.datasets.length;o<n;++o)if(i.isDatasetVisible(o)){r=i.getDatasetMeta(o),t=r.data,s=r.controller;break}if(!t)return 0;for(o=0,n=t.length;o<n;++o)a=s.resolveDataElementOptions(o),"inner"!==a.borderAlign&&(e=Math.max(e,a.borderWidth||0,a.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,o=t.length;i<o;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(mn(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}Na.id="doughnut",Na.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},Na.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},Na.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,o)=>{const n=t.getDatasetMeta(0).controller.getStyle(o);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const i=": "+t.formattedValue;return pn(e)?(e=e.slice(),e[0]+=i):e+=i,e}}}}};class Ba extends $a{initialize(){this.enableOptionSharing=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:o=[],_dataset:n}=e,r=this.chart._animationsDisabled;let{start:s,count:a}=function(t,e,i){const o=e.length;let n=0,r=o;if(t._sorted){const{iScale:s,_parsed:a}=t,l=s.axis,{min:c,max:d,minDefined:h,maxDefined:p}=s.getUserBounds();h&&(n=er(Math.min(gs(a,s.axis,c).lo,i?o:gs(e,l,s.getPixelForValue(c)).lo),0,o-1)),r=p?er(Math.max(gs(a,s.axis,d).hi+1,i?0:gs(e,l,s.getPixelForValue(d)).hi+1),n,o)-n:o-n}return{start:n,count:r}}(e,o,r);this._drawStart=s,this._drawCount=a,function(t){const{xScale:e,yScale:i,_scaleRanges:o}=t,n={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!o)return t._scaleRanges=n,!0;const r=o.xmin!==e.min||o.xmax!==e.max||o.ymin!==i.min||o.ymax!==i.max;return Object.assign(o,n),r}(e)&&(s=0,a=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!n._decimated,i.points=o;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:l},t),this.updateElements(o,s,a,t)}updateElements(t,e,i,o){const n="reset"===o,{iScale:r,vScale:s,_stacked:a,_dataset:l}=this._cachedMeta,c=this.resolveDataElementOptions(e,o),d=this.getSharedOptions(c),h=this.includeOptions(o,d),p=r.axis,u=s.axis,{spanGaps:f,segment:g}=this.options,m=Un(f)?f:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||n||"none"===o;let b=e>0&&this.getParsed(e-1);for(let c=e;c<e+i;++c){const e=t[c],i=this.getParsed(c),f=y?e:{},x=hn(i[u]),v=f[p]=r.getPixelForValue(i[p],c),w=f[u]=n||x?s.getBasePixel():s.getPixelForValue(a?this.applyStack(s,i,a):i[u],c);f.skip=isNaN(v)||isNaN(w)||x,f.stop=c>0&&i[p]-b[p]>m,g&&(f.parsed=i,f.raw=l.data[c]),h&&(f.options=d||this.resolveDataElementOptions(c,e.active?"active":o)),y||this.updateElement(e,c,f,o),b=i}this.updateSharedOptions(d,o,c)}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,o=t.data||[];if(!o.length)return i;const n=o[0].size(this.resolveDataElementOptions(0)),r=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,n,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}Ba.id="line",Ba.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},Ba.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class za extends $a{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,o=i.data.labels||[],n=ta(e._parsed[t].r,i.options.locale);return{label:o[t]||"",value:n}}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,o=Math.min(e.right-e.left,e.bottom-e.top),n=Math.max(o/2,0),r=(n-Math.max(i.cutoutPercentage?n/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=n-r*this.index,this.innerRadius=this.outerRadius-r}updateElements(t,e,i,o){const n="reset"===o,r=this.chart,s=this.getDataset(),a=r.options.animation,l=this._cachedMeta.rScale,c=l.xCenter,d=l.yCenter,h=l.getIndexAngle(0)-.5*An;let p,u=h;const f=360/this.countVisibleElements();for(p=0;p<e;++p)u+=this._computeAngle(p,o,f);for(p=e;p<e+i;p++){const e=t[p];let i=u,g=u+this._computeAngle(p,o,f),m=r.getDataVisibility(p)?l.getDistanceFromCenterForValue(s.data[p]):0;u=g,n&&(a.animateScale&&(m=0),a.animateRotate&&(i=g=h));const y={x:c,y:d,innerRadius:0,outerRadius:m,startAngle:i,endAngle:g,options:this.resolveDataElementOptions(p,e.active?"active":o)};this.updateElement(e,p,y,o)}}countVisibleElements(){const t=this.getDataset(),e=this._cachedMeta;let i=0;return e.data.forEach(((e,o)=>{!isNaN(t.data[o])&&this.chart.getDataVisibility(o)&&i++})),i}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?qn(this.resolveDataElementOptions(t,e).angle||i):0}}za.id="polarArea",za.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},za.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,o)=>{const n=t.getDatasetMeta(0).controller.getStyle(o);return{text:e,fillStyle:n.backgroundColor,strokeStyle:n.borderColor,lineWidth:n.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(o),index:o}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class Wa extends Na{}Wa.id="pie",Wa.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class Ha extends $a{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}update(t){const e=this._cachedMeta,i=e.dataset,o=e.data||[],n=e.iScale.getLabels();if(i.points=o,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const r={_loop:!0,_fullLoop:n.length===o.length,options:e};this.updateElement(i,void 0,r,t)}this.updateElements(o,0,o.length,t)}updateElements(t,e,i,o){const n=this.getDataset(),r=this._cachedMeta.rScale,s="reset"===o;for(let a=e;a<e+i;a++){const e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":o),l=r.getPointPositionForValue(a,n.data[a]),c=s?r.xCenter:l.x,d=s?r.yCenter:l.y,h={x:c,y:d,angle:l.angle,skip:isNaN(c)||isNaN(d),options:i};this.updateElement(e,a,h,o)}}}Ha.id="radar",Ha.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},Ha.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Fa extends Ba{}Fa.id="scatter",Fa.defaults={showLine:!1,fill:!1},Fa.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Ua=Object.freeze({__proto__:null,BarController:ja,BubbleController:La,DoughnutController:Na,LineController:Ba,PolarAreaController:za,PieController:Wa,RadarController:Ha,ScatterController:Fa});function Va(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ya{constructor(t){this.options=t||{}}formats(){return Va()}parse(t,e){return Va()}format(t,e){return Va()}add(t,e,i){return Va()}diff(t,e,i){return Va()}startOf(t,e,i){return Va()}endOf(t,e){return Va()}}Ya.override=function(t){Object.assign(Ya.prototype,t)};var qa={_date:Ya};function Ga(t,e){return"native"in t?{x:t.x,y:t.y}:Vs(t,e)}function Ka(t,e,i,o){const{controller:n,data:r,_sorted:s}=t,a=n._cachedMeta.iScale;if(a&&e===a.axis&&"r"!==e&&s&&r.length){const t=a._reversePixels?ms:gs;if(!o)return t(r,e,i);if(n._sharedOptions){const o=r[0],n="function"==typeof o.getRange&&o.getRange(e);if(n){const o=t(r,e,i-n),s=t(r,e,i+n);return{lo:o.lo,hi:s.hi}}}}return{lo:0,hi:r.length-1}}function Xa(t,e,i,o,n){const r=t.getSortedVisibleDatasetMetas(),s=i[e];for(let t=0,i=r.length;t<i;++t){const{index:i,data:a}=r[t],{lo:l,hi:c}=Ka(r[t],e,s,n);for(let t=l;t<=c;++t){const e=a[t];e.skip||o(e,i,t)}}}function Ja(t,e,i,o){const n=[];return Kr(e,t.chartArea,t._minPadding)?(Xa(t,i,e,(function(t,i,r){t.inRange(e.x,e.y,o)&&n.push({element:t,datasetIndex:i,index:r})}),!0),n):n}function Za(t,e,i,o,n){return Kr(e,t.chartArea,t._minPadding)?"r"!==i||o?function(t,e,i,o,n){let r=[];const s=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,o){const n=e?Math.abs(t.x-o.x):0,r=i?Math.abs(t.y-o.y):0;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2))}}(i);let a=Number.POSITIVE_INFINITY;return Xa(t,i,e,(function(i,l,c){const d=i.inRange(e.x,e.y,n);if(o&&!d)return;const h=i.getCenterPoint(n);if(!Kr(h,t.chartArea,t._minPadding)&&!d)return;const p=s(e,h);p<a?(r=[{element:i,datasetIndex:l,index:c}],a=p):p===a&&r.push({element:i,datasetIndex:l,index:c})})),r}(t,e,i,o,n):function(t,e,i,o){let n=[];return Xa(t,i,e,(function(t,i,r){const{startAngle:s,endAngle:a}=t.getProps(["startAngle","endAngle"],o),{angle:l}=Xn(t,{x:e.x,y:e.y});tr(l,s,a)&&n.push({element:t,datasetIndex:i,index:r})})),n}(t,e,i,n):[]}function Qa(t,e,i,o){const n=Ga(e,t),r=[],s=i.axis,a="x"===s?"inXRange":"inYRange";let l=!1;return function(t,e){const i=t.getSortedVisibleDatasetMetas();let o,n,r;for(let t=0,s=i.length;t<s;++t){({index:o,data:n}=i[t]);for(let t=0,i=n.length;t<i;++t)r=n[t],r.skip||e(r,o,t)}}(t,((t,e,i)=>{t[a](n[s],o)&&r.push({element:t,datasetIndex:e,index:i}),t.inRange(n.x,n.y,o)&&(l=!0)})),i.intersect&&!l?[]:r}var tl={modes:{index(t,e,i,o){const n=Ga(e,t),r=i.axis||"x",s=i.intersect?Ja(t,n,r,o):Za(t,n,r,!1,o),a=[];return s.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=s[0].index,i=t.data[e];i&&!i.skip&&a.push({element:i,datasetIndex:t.index,index:e})})),a):[]},dataset(t,e,i,o){const n=Ga(e,t),r=i.axis||"xy";let s=i.intersect?Ja(t,n,r,o):Za(t,n,r,!1,o);if(s.length>0){const e=s[0].datasetIndex,i=t.getDatasetMeta(e).data;s=[];for(let t=0;t<i.length;++t)s.push({element:i[t],datasetIndex:e,index:t})}return s},point:(t,e,i,o)=>Ja(t,Ga(e,t),i.axis||"xy",o),nearest:(t,e,i,o)=>Za(t,Ga(e,t),i.axis||"xy",i.intersect,o),x:(t,e,i,o)=>Qa(t,e,{axis:"x",intersect:i.intersect},o),y:(t,e,i,o)=>Qa(t,e,{axis:"y",intersect:i.intersect},o)}};const el=["left","top","right","bottom"];function il(t,e){return t.filter((t=>t.pos===e))}function ol(t,e){return t.filter((t=>-1===el.indexOf(t.pos)&&t.box.axis===e))}function nl(t,e){return t.sort(((t,i)=>{const o=e?i:t,n=e?t:i;return o.weight===n.weight?o.index-n.index:o.weight-n.weight}))}function rl(t,e,i,o){return Math.max(t[i],e[i])+Math.max(t[o],e[o])}function sl(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function al(t,e,i,o){const{pos:n,box:r}=i,s=t.maxPadding;if(!un(n)){i.size&&(t[n]-=i.size);const e=o[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?r.height:r.width),i.size=e.size/e.count,t[n]+=i.size}r.getPadding&&sl(s,r.getPadding());const a=Math.max(0,e.outerWidth-rl(s,t,"left","right")),l=Math.max(0,e.outerHeight-rl(s,t,"top","bottom")),c=a!==t.w,d=l!==t.h;return t.w=a,t.h=l,i.horizontal?{same:c,other:d}:{same:d,other:c}}function ll(t,e){const i=e.maxPadding;return function(t){const o={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{o[t]=Math.max(e[t],i[t])})),o}(t?["left","right"]:["top","bottom"])}function cl(t,e,i,o){const n=[];let r,s,a,l,c,d;for(r=0,s=t.length,c=0;r<s;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,ll(a.horizontal,e));const{same:s,other:h}=al(e,i,a,o);c|=s&&n.length,d=d||h,l.fullSize||n.push(a)}return c&&cl(n,e,i,o)||d}function dl(t,e,i,o,n){t.top=i,t.left=e,t.right=e+o,t.bottom=i+n,t.width=o,t.height=n}function hl(t,e,i,o){const n=i.padding;let{x:r,y:s}=e;for(const a of t){const t=a.box,l=o[a.stack]||{count:1,placed:0,weight:1},c=a.stackWeight/l.weight||1;if(a.horizontal){const o=e.w*c,r=l.size||t.height;Pn(l.start)&&(s=l.start),t.fullSize?dl(t,n.left,s,i.outerWidth-n.right-n.left,r):dl(t,e.left+l.placed,s,o,r),l.start=s,l.placed+=o,s=t.bottom}else{const o=e.h*c,s=l.size||t.width;Pn(l.start)&&(r=l.start),t.fullSize?dl(t,r,n.top,s,i.outerHeight-n.bottom-n.top):dl(t,r,e.top+l.placed,s,o),l.start=r,l.placed+=o,r=t.right}}e.x=r,e.y=s}Fr.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var pl={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,o){if(!t)return;const n=ds(t.options.layout.padding),r=Math.max(e-n.width,0),s=Math.max(i-n.height,0),a=function(t){const e=function(t){const e=[];let i,o,n,r,s,a;for(i=0,o=(t||[]).length;i<o;++i)n=t[i],({position:r,options:{stack:s,stackWeight:a=1}}=n),e.push({index:i,box:n,pos:r,horizontal:n.isHorizontal(),weight:n.weight,stack:s&&r+s,stackWeight:a});return e}(t),i=nl(e.filter((t=>t.box.fullSize)),!0),o=nl(il(e,"left"),!0),n=nl(il(e,"right")),r=nl(il(e,"top"),!0),s=nl(il(e,"bottom")),a=ol(e,"x"),l=ol(e,"y");return{fullSize:i,leftAndTop:o.concat(r),rightAndBottom:n.concat(l).concat(s).concat(a),chartArea:il(e,"chartArea"),vertical:o.concat(n).concat(l),horizontal:r.concat(s).concat(a)}}(t.boxes),l=a.vertical,c=a.horizontal;xn(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const d=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,h=Object.freeze({outerWidth:e,outerHeight:i,padding:n,availableWidth:r,availableHeight:s,vBoxMaxWidth:r/2/d,hBoxMaxHeight:s/2}),p=Object.assign({},n);sl(p,ds(o));const u=Object.assign({maxPadding:p,w:r,h:s,x:n.left,y:n.top},n),f=function(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:o,stackWeight:n}=i;if(!t||!el.includes(o))continue;const r=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=n}return e}(t),{vBoxMaxWidth:o,hBoxMaxHeight:n}=e;let r,s,a;for(r=0,s=t.length;r<s;++r){a=t[r];const{fullSize:s}=a.box,l=i[a.stack],c=l&&a.stackWeight/l.weight;a.horizontal?(a.width=c?c*o:s&&e.availableWidth,a.height=n):(a.width=o,a.height=c?c*n:s&&e.availableHeight)}return i}(l.concat(c),h);cl(a.fullSize,u,h,f),cl(l,u,h,f),cl(c,u,h,f)&&cl(l,u,h,f),function(t){const e=t.maxPadding;function i(i){const o=Math.max(e[i]-t[i],0);return t[i]+=o,o}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(u),hl(a.leftAndTop,u,h,f),u.x+=u.w,u.y+=u.h,hl(a.rightAndBottom,u,h,f),t.chartArea={left:u.left,top:u.top,right:u.left+u.w,bottom:u.top+u.h,height:u.h,width:u.w},xn(a.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(u.w,u.h,{left:0,top:0,right:0,bottom:0})}))}};class ul{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,o){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,o?Math.floor(e/o):i)}}isAttached(t){return!0}updateConfig(t){}}class fl extends ul{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const gl={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ml=t=>null===t||""===t,yl=!!Gs&&{passive:!0};function bl(t,e,i){t.canvas.removeEventListener(e,i,yl)}function xl(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function vl(t,e,i){const o=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||xl(i.addedNodes,o),e=e&&!xl(i.removedNodes,o);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}function wl(t,e,i){const o=t.canvas,n=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||xl(i.removedNodes,o),e=e&&!xl(i.addedNodes,o);e&&i()}));return n.observe(document,{childList:!0,subtree:!0}),n}const _l=new Map;let Sl=0;function kl(){const t=window.devicePixelRatio;t!==Sl&&(Sl=t,_l.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function Rl(t,e,i){const o=t.canvas,n=o&&zs(o);if(!n)return;const r=sn(((t,e)=>{const o=n.clientWidth;i(t,e),o<n.clientWidth&&i()}),window),s=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,o=e.contentRect.height;0===i&&0===o||r(i,o)}));return s.observe(n),function(t,e){_l.size||window.addEventListener("resize",kl),_l.set(t,e)}(t,r),s}function Ol(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){_l.delete(t),_l.size||window.removeEventListener("resize",kl)}(t)}function $l(t,e,i){const o=t.canvas,n=sn((e=>{null!==t.ctx&&i(function(t,e){const i=gl[t.type]||t.type,{x:o,y:n}=Vs(t,e);return{type:i,chart:e,native:t,x:void 0!==o?o:null,y:void 0!==n?n:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,i){t.addEventListener(e,i,yl)}(o,e,n),n}class El extends ul{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,o=t.getAttribute("height"),n=t.getAttribute("width");if(t.$chartjs={initial:{height:o,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",ml(n)){const e=Ks(t,"width");void 0!==e&&(t.width=e)}if(ml(o))if(""===t.style.height)t.height=t.width/(e||2);else{const e=Ks(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const i=e.$chartjs.initial;["height","width"].forEach((t=>{const o=i[t];hn(o)?e.removeAttribute(t):e.setAttribute(t,o)}));const o=i.style||{};return Object.keys(o).forEach((t=>{e.style[t]=o[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,i){this.removeEventListener(t,e);const o=t.$proxies||(t.$proxies={}),n={attach:vl,detach:wl,resize:Rl}[e]||$l;o[e]=n(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),o=i[e];o&&(({attach:Ol,detach:Ol,resize:Ol}[e]||bl)(t,e,o),i[e]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,o){return function(t,e,i,o){const n=Hs(t),r=Us(n,"margin"),s=Ws(n.maxWidth,t,"clientWidth")||jn,a=Ws(n.maxHeight,t,"clientHeight")||jn,l=function(t,e,i){let o,n;if(void 0===e||void 0===i){const r=zs(t);if(r){const t=r.getBoundingClientRect(),s=Hs(r),a=Us(s,"border","width"),l=Us(s,"padding");e=t.width-l.width-a.width,i=t.height-l.height-a.height,o=Ws(s.maxWidth,r,"clientWidth"),n=Ws(s.maxHeight,r,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:o||jn,maxHeight:n||jn}}(t,e,i);let{width:c,height:d}=l;if("content-box"===n.boxSizing){const t=Us(n,"border","width"),e=Us(n,"padding");c-=e.width+t.width,d-=e.height+t.height}return c=Math.max(0,c-r.width),d=Math.max(0,o?Math.floor(c/o):d-r.height),c=Ys(Math.min(c,s,l.maxWidth)),d=Ys(Math.min(d,a,l.maxHeight)),c&&!d&&(d=Ys(c/2)),{width:c,height:d}}(t,e,i,o)}isAttached(t){const e=zs(t);return!(!e||!e.isConnected)}}class Tl{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Un(this.x)&&Un(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const o={};return t.forEach((t=>{o[t]=i[t]&&i[t].active()?i[t]._to:this[t]})),o}}Tl.defaults={},Tl.defaultRoutes=void 0;const Pl={values:t=>pn(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const o=this.chart.options.locale;let n,r=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(n="scientific"),r=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t)),i}(t,i)}const s=Wn(Math.abs(r)),a=Math.max(Math.min(-1*Math.floor(s),20),0),l={notation:n,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),ta(t,o,l)},logarithmic(t,e,i){if(0===t)return"0";const o=t/Math.pow(10,Math.floor(Wn(t)));return 1===o||2===o||5===o?Pl.numeric.call(this,t,e,i):""}};var Ml={formatters:Pl};function Dl(t,e,i,o,n){const r=mn(o,0),s=Math.min(mn(n,t.length),t.length);let a,l,c,d=0;for(i=Math.ceil(i),n&&(a=n-o,i=a/Math.floor(a/i)),c=r;c<0;)d++,c=Math.round(r+d*i);for(l=Math.max(r,0);l<s;l++)l===c&&(e.push(t[l]),d++,c=Math.round(r+d*i))}Fr.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Ml.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),Fr.route("scale.ticks","color","","color"),Fr.route("scale.grid","color","","borderColor"),Fr.route("scale.grid","borderColor","","borderColor"),Fr.route("scale.title","color","","color"),Fr.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),Fr.describe("scales",{_fallback:"scale"}),Fr.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const Al=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function Cl(t,e){const i=[],o=t.length/e,n=t.length;let r=0;for(;r<n;r+=o)i.push(t[Math.floor(r)]);return i}function Il(t,e,i){const o=t.ticks.length,n=Math.min(e,o-1),r=t._startPixel,s=t._endPixel,a=1e-6;let l,c=t.getPixelForTick(n);if(!(i&&(l=1===o?Math.max(c-r,s-c):0===e?(t.getPixelForTick(1)-c)/2:(c-t.getPixelForTick(n-1))/2,c+=n<e?l:-l,c<r-a||c>s+a)))return c}function jl(t){return t.drawTicks?t.tickLength:0}function Ll(t,e){if(!t.display)return 0;const i=hs(t.font,e),o=ds(t.padding);return(pn(t.text)?t.text.length:1)*i.lineHeight+o.height}function Nl(t,e,i){let o=an(t);return(i&&"right"!==e||!i&&"right"===e)&&(o=(t=>"left"===t?"right":"right"===t?"left":t)(o)),o}class Bl extends Tl{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:o}=this;return t=gn(t,Number.POSITIVE_INFINITY),e=gn(e,Number.NEGATIVE_INFINITY),i=gn(i,Number.POSITIVE_INFINITY),o=gn(o,Number.NEGATIVE_INFINITY),{min:gn(t,i),max:gn(e,o),minDefined:fn(t),maxDefined:fn(e)}}getMinMax(t){let e,{min:i,max:o,minDefined:n,maxDefined:r}=this.getUserBounds();if(n&&r)return{min:i,max:o};const s=this.getMatchingVisibleMetas();for(let a=0,l=s.length;a<l;++a)e=s[a].controller.getMinMax(this,t),n||(i=Math.min(i,e.min)),r||(o=Math.max(o,e.max));return i=r&&i>o?o:i,o=n&&i>o?i:o,{min:gn(i,gn(o,i)),max:gn(o,gn(i,o))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){bn(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:o,grace:n,ticks:r}=this.options,s=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=function(t,e,i){const{min:o,max:n}=t,r=yn(e,(n-o)/2),s=(t,e)=>i&&0===t?0:t+e;return{min:s(o,-Math.abs(r)),max:s(n,r)}}(this,n,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const a=s<this.ticks.length;this._convertTicksToLabels(a?Cl(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||"auto"===r.source)&&(this.ticks=function(t,e){const i=t.options.ticks,o=i.maxTicksLimit||function(t){const e=t.options.offset,i=t._tickSize(),o=t._length/i+(e?0:1),n=t._maxLength/i;return Math.floor(Math.min(o,n))}(t),n=i.major.enabled?function(t){const e=[];let i,o;for(i=0,o=t.length;i<o;i++)t[i].major&&e.push(i);return e}(e):[],r=n.length,s=n[0],a=n[r-1],l=[];if(r>o)return function(t,e,i,o){let n,r=0,s=i[0];for(o=Math.ceil(o),n=0;n<t.length;n++)n===s&&(e.push(t[n]),r++,s=i[r*o])}(e,l,n,r/o),l;const c=function(t,e,i){const o=function(t){const e=t.length;let i,o;if(e<2)return!1;for(o=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==o)return!1;return o}(t),n=e.length/i;if(!o)return Math.max(n,1);const r=function(t){const e=[],i=Math.sqrt(t);let o;for(o=1;o<i;o++)t%o==0&&(e.push(o),e.push(t/o));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}(o);for(let t=0,e=r.length-1;t<e;t++){const e=r[t];if(e>n)return e}return Math.max(n,1)}(n,e,o);if(r>0){let t,i;const o=r>1?Math.round((a-s)/(r-1)):null;for(Dl(e,l,c,hn(o)?0:s-o,s),t=0,i=r-1;t<i;t++)Dl(e,l,c,n[t],n[t+1]);return Dl(e,l,c,a,hn(o)?e.length:a+o),l}return Dl(e,l,c),l}(this,this.ticks),this._labelSizes=null),a&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){bn(this.options.afterUpdate,[this])}beforeSetDimensions(){bn(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){bn(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),bn(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){bn(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,o,n;for(i=0,o=t.length;i<o;i++)n=t[i],n.label=bn(e.callback,[n.value,i,t],this)}afterTickToLabelConversion(){bn(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){bn(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=this.ticks.length,o=e.minRotation||0,n=e.maxRotation;let r,s,a,l=o;if(!this._isVisible()||!e.display||o>=n||i<=1||!this.isHorizontal())return void(this.labelRotation=o);const c=this._getLabelSizes(),d=c.widest.width,h=c.highest.height,p=er(this.chart.width-d,0,this.maxWidth);r=t.offset?this.maxWidth/i:p/(i-1),d+6>r&&(r=p/(i-(t.offset?.5:1)),s=this.maxHeight-jl(t.grid)-e.padding-Ll(t.title,this.chart.options.font),a=Math.sqrt(d*d+h*h),l=Gn(Math.min(Math.asin(er((c.highest.height+6)/r,-1,1)),Math.asin(er(s/a,-1,1))-Math.asin(er(h/a,-1,1)))),l=Math.max(o,Math.min(n,l))),this.labelRotation=l}afterCalculateLabelRotation(){bn(this.options.afterCalculateLabelRotation,[this])}beforeFit(){bn(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:o,grid:n}}=this,r=this._isVisible(),s=this.isHorizontal();if(r){const r=Ll(o,e.options.font);if(s?(t.width=this.maxWidth,t.height=jl(n)+r):(t.height=this.maxHeight,t.width=jl(n)+r),i.display&&this.ticks.length){const{first:e,last:o,widest:n,highest:r}=this._getLabelSizes(),a=2*i.padding,l=qn(this.labelRotation),c=Math.cos(l),d=Math.sin(l);if(s){const e=i.mirror?0:d*n.width+c*r.height;t.height=Math.min(this.maxHeight,t.height+e+a)}else{const e=i.mirror?0:c*n.width+d*r.height;t.width=Math.min(this.maxWidth,t.width+e+a)}this._calculatePadding(e,o,d,c)}}this._handleMargins(),s?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,o){const{ticks:{align:n,padding:r},position:s}=this.options,a=0!==this.labelRotation,l="top"!==s&&"x"===this.axis;if(this.isHorizontal()){const s=this.getPixelForTick(0)-this.left,c=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,h=0;a?l?(d=o*t.width,h=i*e.height):(d=i*t.height,h=o*e.width):"start"===n?h=e.width:"end"===n?d=t.width:(d=t.width/2,h=e.width/2),this.paddingLeft=Math.max((d-s+r)*this.width/(this.width-s),0),this.paddingRight=Math.max((h-c+r)*this.width/(this.width-c),0)}else{let i=e.height/2,o=t.height/2;"start"===n?(i=0,o=t.height):"end"===n&&(i=e.height,o=0),this.paddingTop=i+r,this.paddingBottom=o+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){bn(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)hn(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Cl(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,e){const{ctx:i,_longestTextCache:o}=this,n=[],r=[];let s,a,l,c,d,h,p,u,f,g,m,y=0,b=0;for(s=0;s<e;++s){if(c=t[s].label,d=this._resolveTickFontOptions(s),i.font=h=d.string,p=o[h]=o[h]||{data:{},gc:[]},u=d.lineHeight,f=g=0,hn(c)||pn(c)){if(pn(c))for(a=0,l=c.length;a<l;++a)m=c[a],hn(m)||pn(m)||(f=Ur(i,p.data,p.gc,f,m),g+=u)}else f=Ur(i,p.data,p.gc,f,c),g=u;n.push(f),r.push(g),y=Math.max(f,y),b=Math.max(g,b)}!function(t,e){xn(t,(t=>{const i=t.gc,o=i.length/2;let n;if(o>e){for(n=0;n<o;++n)delete t.data[i[n]];i.splice(0,o)}}))}(o,e);const x=n.indexOf(y),v=r.indexOf(b),w=t=>({width:n[t]||0,height:r[t]||0});return{first:w(0),last:w(e-1),widest:w(x),highest:w(v),widths:n,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return er(this._alignToPixels?Yr(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return us(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=us(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=qn(this.labelRotation),i=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e)),n=this._getLabelSizes(),r=t.autoSkipPadding||0,s=n?n.widest.width+r:0,a=n?n.highest.height+r:0;return this.isHorizontal()?a*i>s*o?s/i:a/o:a*o<s*i?a/i:s/o}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,o=this.options,{grid:n,position:r}=o,s=n.offset,a=this.isHorizontal(),l=this.ticks.length+(s?1:0),c=jl(n),d=[],h=n.setContext(this.getContext()),p=h.drawBorder?h.borderWidth:0,u=p/2,f=function(t){return Yr(i,t,p)};let g,m,y,b,x,v,w,_,S,k,R,O;if("top"===r)g=f(this.bottom),v=this.bottom-c,_=g-u,k=f(t.top)+u,O=t.bottom;else if("bottom"===r)g=f(this.top),k=t.top,O=f(t.bottom)-u,v=g+u,_=this.top+c;else if("left"===r)g=f(this.right),x=this.right-c,w=g-u,S=f(t.left)+u,R=t.right;else if("right"===r)g=f(this.left),S=t.left,R=f(t.right)-u,x=g+u,w=this.left+c;else if("x"===e){if("center"===r)g=f((t.top+t.bottom)/2+.5);else if(un(r)){const t=Object.keys(r)[0],e=r[t];g=f(this.chart.scales[t].getPixelForValue(e))}k=t.top,O=t.bottom,v=g+u,_=v+c}else if("y"===e){if("center"===r)g=f((t.left+t.right)/2);else if(un(r)){const t=Object.keys(r)[0],e=r[t];g=f(this.chart.scales[t].getPixelForValue(e))}x=g-u,w=x-c,S=t.left,R=t.right}const $=mn(o.ticks.maxTicksLimit,l),E=Math.max(1,Math.ceil(l/$));for(m=0;m<l;m+=E){const t=n.setContext(this.getContext(m)),e=t.lineWidth,o=t.color,r=n.borderDash||[],l=t.borderDashOffset,c=t.tickWidth,h=t.tickColor,p=t.tickBorderDash||[],u=t.tickBorderDashOffset;y=Il(this,m,s),void 0!==y&&(b=Yr(i,y,e),a?x=w=S=R=b:v=_=k=O=b,d.push({tx1:x,ty1:v,tx2:w,ty2:_,x1:S,y1:k,x2:R,y2:O,width:e,color:o,borderDash:r,borderDashOffset:l,tickWidth:c,tickColor:h,tickBorderDash:p,tickBorderDashOffset:u}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(t){const e=this.axis,i=this.options,{position:o,ticks:n}=i,r=this.isHorizontal(),s=this.ticks,{align:a,crossAlign:l,padding:c,mirror:d}=n,h=jl(i.grid),p=h+c,u=d?-c:p,f=-qn(this.labelRotation),g=[];let m,y,b,x,v,w,_,S,k,R,O,$,E="middle";if("top"===o)w=this.bottom-u,_=this._getXAxisLabelAlignment();else if("bottom"===o)w=this.top+u,_=this._getXAxisLabelAlignment();else if("left"===o){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,v=t.x}else if("right"===o){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,v=t.x}else if("x"===e){if("center"===o)w=(t.top+t.bottom)/2+p;else if(un(o)){const t=Object.keys(o)[0],e=o[t];w=this.chart.scales[t].getPixelForValue(e)+p}_=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===o)v=(t.left+t.right)/2-p;else if(un(o)){const t=Object.keys(o)[0],e=o[t];v=this.chart.scales[t].getPixelForValue(e)}_=this._getYAxisLabelAlignment(h).textAlign}"y"===e&&("start"===a?E="top":"end"===a&&(E="bottom"));const T=this._getLabelSizes();for(m=0,y=s.length;m<y;++m){b=s[m],x=b.label;const t=n.setContext(this.getContext(m));S=this.getPixelForTick(m)+n.labelOffset,k=this._resolveTickFontOptions(m),R=k.lineHeight,O=pn(x)?x.length:1;const e=O/2,i=t.color,a=t.textStrokeColor,c=t.textStrokeWidth;let h;if(r?(v=S,$="top"===o?"near"===l||0!==f?-O*R+R/2:"center"===l?-T.highest.height/2-e*R+R:-T.highest.height+R/2:"near"===l||0!==f?R/2:"center"===l?T.highest.height/2-e*R:T.highest.height-O*R,d&&($*=-1)):(w=S,$=(1-O)*R/2),t.showLabelBackdrop){const e=ds(t.backdropPadding),i=T.heights[m],o=T.widths[m];let n=w+$-e.top,r=v-e.left;switch(E){case"middle":n-=i/2;break;case"bottom":n-=i}switch(_){case"center":r-=o/2;break;case"right":r-=o}h={left:r,top:n,width:o+e.width,height:i+e.height,color:t.backdropColor}}g.push({rotation:f,label:x,font:k,color:i,strokeColor:a,strokeWidth:c,textOffset:$,textAlign:_,textBaseline:E,translation:[v,w],backdrop:h})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-qn(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align&&(i="right"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:o,padding:n}}=this.options,r=t+n,s=this._getLabelSizes().widest.width;let a,l;return"left"===e?o?(l=this.right+n,"near"===i?a="left":"center"===i?(a="center",l+=s/2):(a="right",l+=s)):(l=this.right-r,"near"===i?a="right":"center"===i?(a="center",l-=s/2):(a="left",l=this.left)):"right"===e?o?(l=this.left+n,"near"===i?a="right":"center"===i?(a="center",l-=s/2):(a="left",l-=s)):(l=this.left+r,"near"===i?a="left":"center"===i?(a="center",l+=s/2):(a="right",l=this.right)):a="right",{textAlign:a,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:o,width:n,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,o,n,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex((e=>e.value===t));return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let n,r;const s=(t,e,o)=>{o.width&&o.color&&(i.save(),i.lineWidth=o.width,i.strokeStyle=o.color,i.setLineDash(o.borderDash||[]),i.lineDashOffset=o.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(n=0,r=o.length;n<r;++n){const t=o[n];e.drawOnChartArea&&s({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&s({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{grid:i}}=this,o=i.setContext(this.getContext()),n=i.drawBorder?o.borderWidth:0;if(!n)return;const r=i.setContext(this.getContext(0)).lineWidth,s=this._borderValue;let a,l,c,d;this.isHorizontal()?(a=Yr(t,this.left,n)-n/2,l=Yr(t,this.right,r)+r/2,c=d=s):(c=Yr(t,this.top,n)-n/2,d=Yr(t,this.bottom,r)+r/2,a=l=s),e.save(),e.lineWidth=o.borderWidth,e.strokeStyle=o.borderColor,e.beginPath(),e.moveTo(a,c),e.lineTo(l,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&Xr(e,i);const o=this._labelItems||(this._labelItems=this._computeLabelItems(t));let n,r;for(n=0,r=o.length;n<r;++n){const t=o[n],i=t.font,r=t.label;t.backdrop&&(e.fillStyle=t.backdrop.color,e.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),ts(e,r,0,t.textOffset,i,t)}i&&Jr(e)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:o}}=this;if(!i.display)return;const n=hs(i.font),r=ds(i.padding),s=i.align;let a=n.lineHeight/2;"bottom"===e||"center"===e||un(e)?(a+=r.bottom,pn(i.text)&&(a+=n.lineHeight*(i.text.length-1))):a+=r.top;const{titleX:l,titleY:c,maxWidth:d,rotation:h}=function(t,e,i,o){const{top:n,left:r,bottom:s,right:a,chart:l}=t,{chartArea:c,scales:d}=l;let h,p,u,f=0;const g=s-n,m=a-r;if(t.isHorizontal()){if(p=ln(o,r,a),un(i)){const t=Object.keys(i)[0],o=i[t];u=d[t].getPixelForValue(o)+g-e}else u="center"===i?(c.bottom+c.top)/2+g-e:Al(t,i,e);h=a-r}else{if(un(i)){const t=Object.keys(i)[0],o=i[t];p=d[t].getPixelForValue(o)-m+e}else p="center"===i?(c.left+c.right)/2-m+e:Al(t,i,e);u=ln(o,s,n),f="left"===i?-Nn:Nn}return{titleX:p,titleY:u,maxWidth:h,rotation:f}}(this,a,e,s);ts(t,i.text,0,0,n,{color:i.color,maxWidth:d,rotation:h,textAlign:Nl(s,e,o),textBaseline:"middle",translation:[l,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=mn(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===Bl.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[];let n,r;for(n=0,r=e.length;n<r;++n){const r=e[n];r[i]!==this.id||t&&r.type!==t||o.push(r)}return o}_resolveTickFontOptions(t){return hs(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class zl{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return"id"in t&&"defaults"in t})(e)&&(i=this.register(e));const o=this.items,n=t.id,r=this.scope+"."+n;if(!n)throw new Error("class does not have id: "+t);return n in o||(o[n]=t,function(t,e,i){const o=kn(Object.create(null),[i?Fr.get(i):{},Fr.get(e),t.defaults]);Fr.set(e,o),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const o=i.split("."),n=o.pop(),r=[t].concat(o).join("."),s=e[i].split("."),a=s.pop(),l=s.join(".");Fr.route(r,n,l,a)}))}(e,t.defaultRoutes),t.descriptors&&Fr.describe(e,t.descriptors)}(t,r,i),this.override&&Fr.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,o=this.scope;i in e&&delete e[i],o&&i in Fr[o]&&(delete Fr[o][i],this.override&&delete Br[i])}}var Wl=new class{constructor(){this.controllers=new zl($a,"datasets",!0),this.elements=new zl(Tl,"elements"),this.plugins=new zl(Object,"plugins"),this.scales=new zl(Bl,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach((e=>{const o=i||this._getRegistryForType(e);i||o.isForType(e)||o===this.plugins&&e.id?this._exec(t,o,e):xn(e,(e=>{const o=i||this._getRegistryForType(e);this._exec(t,o,e)}))}))}_exec(t,e,i){const o=Tn(t);bn(i["before"+o],[],i),e[t](i),bn(i["after"+o],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const o=e.get(t);if(void 0===o)throw new Error('"'+t+'" is not a registered '+i+".");return o}};class Hl{constructor(){this._init=[]}notify(t,e,i,o){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const n=o?this._descriptors(t).filter(o):this._descriptors(t),r=this._notify(n,t,e,i);return"afterDestroy"===e&&(this._notify(n,t,"stop"),this._notify(this._init,t,"uninstall")),r}_notify(t,e,i,o){o=o||{};for(const n of t){const t=n.plugin;if(!1===bn(t[i],[e,o,n.options],t)&&o.cancelable)return!1}return!0}invalidate(){hn(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,o=mn(i.options&&i.options.plugins,{}),n=function(t){const e=[],i=Object.keys(Wl.plugins.items);for(let t=0;t<i.length;t++)e.push(Wl.getPlugin(i[t]));const o=t.plugins||[];for(let t=0;t<o.length;t++){const i=o[t];-1===e.indexOf(i)&&e.push(i)}return e}(i);return!1!==o||e?function(t,e,i,o){const n=[],r=t.getContext();for(let s=0;s<e.length;s++){const a=e[s],l=Fl(i[a.id],o);null!==l&&n.push({plugin:a,options:Ul(t.config,a,l,r)})}return n}(t,n,o,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,o=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(o(e,i),t,"stop"),this._notify(o(i,e),t,"start")}}function Fl(t,e){return e||!1!==t?!0===t?{}:t:null}function Ul(t,e,i,o){const n=t.pluginScopeKeys(e),r=t.getOptionScopes(i,n);return t.createResolver(r,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Vl(t,e){const i=Fr.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Yl(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase();var i}function ql(t){const e=t.options||(t.options={});e.plugins=mn(e.plugins,{}),e.scales=function(t,e){const i=Br[t.type]||{scales:{}},o=e.scales||{},n=Vl(t.type,e),r=Object.create(null),s=Object.create(null);return Object.keys(o).forEach((t=>{const e=o[t];if(!un(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const a=Yl(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(a,n),c=i.scales||{};r[a]=r[a]||t,s[t]=Rn(Object.create(null),[{axis:a},e,c[a],c[l]])})),t.data.datasets.forEach((i=>{const n=i.type||t.type,a=i.indexAxis||Vl(n,e),l=(Br[n]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,a),n=i[e+"AxisID"]||r[e]||e;s[n]=s[n]||Object.create(null),Rn(s[n],[{axis:e},o[n],l[t]])}))})),Object.keys(s).forEach((t=>{const e=s[t];Rn(e,[Fr.scales[e.type],Fr.scale])})),s}(t,e)}function Gl(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const Kl=new Map,Xl=new Set;function Jl(t,e){let i=Kl.get(t);return i||(i=e(),Kl.set(t,i),Xl.add(i)),i}const Zl=(t,e,i)=>{const o=En(e,i);void 0!==o&&t.add(o)};class Ql{constructor(t){this._config=function(t){return(t=t||{}).data=Gl(t.data),ql(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Gl(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),ql(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Jl(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return Jl(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return Jl(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return Jl(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let o=i.get(t);return o&&!e||(o=new Map,i.set(t,o)),o}getOptionScopes(t,e,i){const{options:o,type:n}=this,r=this._cachedScopes(t,i),s=r.get(e);if(s)return s;const a=new Set;e.forEach((e=>{t&&(a.add(t),e.forEach((e=>Zl(a,t,e)))),e.forEach((t=>Zl(a,o,t))),e.forEach((t=>Zl(a,Br[n]||{},t))),e.forEach((t=>Zl(a,Fr,t))),e.forEach((t=>Zl(a,zr,t)))}));const l=Array.from(a);return 0===l.length&&l.push(Object.create(null)),Xl.has(e)&&r.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Br[e]||{},Fr.datasets[e]||{},{type:e},Fr,zr]}resolveNamedOptions(t,e,i,o=[""]){const n={$shared:!0},{resolver:r,subPrefixes:s}=tc(this._resolverCache,t,o);let a=r;(function(t,e){const{isScriptable:i,isIndexable:o}=_s(t);for(const n of e){const e=i(n),r=o(n),s=(r||e)&&t[n];if(e&&(Mn(s)||ec(s))||r&&pn(s))return!0}return!1})(r,e)&&(n.$shared=!1,a=ws(r,i=Mn(i)?i():i,this.createResolver(t,i,s)));for(const t of e)n[t]=a[t];return n}createResolver(t,e,i=[""],o){const{resolver:n}=tc(this._resolverCache,t,i);return un(e)?ws(n,e,void 0,o):n}}function tc(t,e,i){let o=t.get(e);o||(o=new Map,t.set(e,o));const n=i.join();let r=o.get(n);return r||(r={resolver:vs(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},o.set(n,r)),r}const ec=t=>un(t)&&Object.getOwnPropertyNames(t).reduce(((e,i)=>e||Mn(t[i])),!1),ic=["top","bottom","left","right","chartArea"];function oc(t,e){return"top"===t||"bottom"===t||-1===ic.indexOf(t)&&"x"===e}function nc(t,e){return function(i,o){return i[t]===o[t]?i[e]-o[e]:i[t]-o[t]}}function rc(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),bn(i&&i.onComplete,[t],e)}function sc(t){const e=t.chart,i=e.options.animation;bn(i&&i.onProgress,[t],e)}function ac(t){return Bs()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const lc={},cc=t=>{const e=ac(t);return Object.values(lc).filter((t=>t.canvas===e)).pop()};function dc(t,e,i){const o=Object.keys(t);for(const n of o){const o=+n;if(o>=e){const r=t[n];delete t[n],(i>0||o>e)&&(t[o+i]=r)}}}class hc{constructor(t,e){const i=this.config=new Ql(e),o=ac(t),n=cc(o);if(n)throw new Error("Canvas is already in use. Chart with ID '"+n.id+"' must be destroyed before the canvas can be reused.");const r=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||function(t){return!Bs()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?fl:El}(o)),this.platform.updateConfig(i);const s=this.platform.acquireContext(o,r.aspectRatio),a=s&&s.canvas,l=a&&a.height,c=a&&a.width;this.id=dn(),this.ctx=s,this.canvas=a,this.width=c,this.height=l,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Hl,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=function(t,e){let i;return function(...o){return e?(clearTimeout(i),i=setTimeout(t,e,o)):t.apply(this,o),e}}((t=>this.update(t)),r.resizeDelay||0),this._dataChanges=[],lc[this.id]=this,s&&a?(da.listen(this,"complete",rc),da.listen(this,"progress",sc),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:o,_aspectRatio:n}=this;return hn(t)?e&&n?n:o?i/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():qs(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return qr(this.canvas,this.ctx),this}stop(){return da.stop(this),this}resize(t,e){da.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,o=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(o,t,e,n),s=i.devicePixelRatio||this.platform.getDevicePixelRatio(),a=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,qs(this,s,!0)&&(this.notifyPlugins("resize",{size:r}),bn(i.onResize,[this,r],this),this.attached&&this._doResize(a)&&this.render())}ensureScalesHaveIDs(){xn(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,o=Object.keys(i).reduce(((t,e)=>(t[e]=!1,t)),{});let n=[];e&&(n=n.concat(Object.keys(e).map((t=>{const i=e[t],o=Yl(t,i),n="r"===o,r="x"===o;return{options:i,dposition:n?"chartArea":r?"bottom":"left",dtype:n?"radialLinear":r?"category":"linear"}})))),xn(n,(e=>{const n=e.options,r=n.id,s=Yl(r,n),a=mn(n.type,e.dtype);void 0!==n.position&&oc(n.position,s)===oc(e.dposition)||(n.position=e.dposition),o[r]=!0;let l=null;r in i&&i[r].type===a?l=i[r]:(l=new(Wl.getScale(a))({id:r,type:a,ctx:this.ctx,chart:this}),i[l.id]=l),l.init(n,t)})),xn(o,((t,e)=>{t||delete i[e]})),xn(i,(t=>{pl.configure(this,t,t.options),pl.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(nc("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,o;for(this._removeUnreferencedMetasets(),i=0,o=e.length;i<o;i++){const o=e[i];let n=this.getDatasetMeta(i);const r=o.type||this.config.type;if(n.type&&n.type!==r&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=r,n.indexAxis=o.indexAxis||Vl(r,this.options),n.order=o.order||0,n.index=i,n.label=""+o.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{const e=Wl.getController(r),{datasetElementType:o,dataElementType:s}=Fr.datasets[r];Object.assign(e.prototype,{dataElementType:Wl.getElement(s),datasetElementType:o&&Wl.getElement(o)}),n.controller=new e(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){xn(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!o&&-1===n.indexOf(e);e.buildOrUpdateElements(i),r=Math.max(+e.getMaxOverflow(),r)}r=this._minPadding=i.layout.autoPadding?r:0,this._updateLayout(r),o||xn(n,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(nc("z","_idx"));const{_active:s,_lastEvent:a}=this;a?this._eventHandler(a,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){xn(this.scales,(t=>{pl.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);Dn(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:o,count:n}of e)dc(t,o,"_removeElements"===i?-n:n)}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),o=i(0);for(let t=1;t<e;t++)if(!Dn(o,i(t)))return;return Array.from(o).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;pl.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],xn(this.boxes,(t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,Mn(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),o={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",o)&&(i.controller._update(e),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(da.has(this)?this.attached&&!da.running(this)&&da.start(this):(this.draw(),rc({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let o,n;for(o=0,n=e.length;o<n;++o){const n=e[o];t&&!n.visible||i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i=t._clip,o=!i.disabled,n=this.chartArea,r={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",r)&&(o&&Xr(e,{left:!1===i.left?0:n.left-i.left,right:!1===i.right?this.width:n.right+i.right,top:!1===i.top?0:n.top-i.top,bottom:!1===i.bottom?this.height:n.bottom+i.bottom}),t.controller.draw(),o&&Jr(e),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}getElementsAtEventForMode(t,e,i,o){const n=tl.modes[e];return"function"==typeof n?n(this,t,i,o):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let o=i.filter((t=>t&&t._dataset===e)).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=us(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const o=i?"show":"hide",n=this.getDatasetMeta(t),r=n.controller._resolveAnimations(void 0,o);Pn(e)?(n.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),r.update(n,{visible:i}),this.update((e=>e.datasetIndex===t?o:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),da.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),qr(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete lc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},o=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};xn(this.options.events,(t=>i(t,o)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,o)=>{e.addEventListener(this,i,o),t[i]=o},o=(i,o)=>{t[i]&&(e.removeEventListener(this,i,o),delete t[i])},n=(t,e)=>{this.canvas&&this.resize(t,e)};let r;const s=()=>{o("attach",s),this.attached=!0,this.resize(),i("resize",n),i("detach",r)};r=()=>{this.attached=!1,o("resize",n),this._stop(),this._resize(0,0),i("attach",s)},e.isAttached(this.canvas)?s():r()}unbindEvents(){xn(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},xn(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const o=i?"set":"remove";let n,r,s,a;for("dataset"===e&&(n=this.getDatasetMeta(t[0].datasetIndex),n.controller["_"+o+"DatasetHoverStyle"]()),s=0,a=t.length;s<a;++s){r=t[s];const e=r&&this.getDatasetMeta(r.datasetIndex).controller;e&&e[o+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map((({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}));!vn(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){const o=this.options.hover,n=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),r=n(e,t),s=i?t:n(t,e);r.length&&this.updateHoverStyle(r,o.mode,!1),s.length&&o.mode&&this.updateHoverStyle(s,o.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:Kr(t,this.chartArea,this._minPadding)},o=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,o))return;const n=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(n||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:o=[],options:n}=this,r=e,s=this._getActiveElements(t,o,i,r),a=function(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}(t),l=function(t,e,i,o){return i&&"mouseout"!==t.type?o?e:t:null}(t,this._lastEvent,i,a);i&&(this._lastEvent=null,bn(n.onHover,[t,s,this],this),a&&bn(n.onClick,[t,s,this],this));const c=!vn(s,o);return(c||e)&&(this._active=s,this._updateHoverStyles(s,o,e)),this._lastEvent=l,c}_getActiveElements(t,e,i,o){if("mouseout"===t.type)return[];if(!i)return e;const n=this.options.hover;return this.getElementsAtEventForMode(t,n.mode,n,o)}}const pc=()=>xn(hc.instances,(t=>t._plugins.invalidate())),uc=!0;function fc(t,e,i){const{startAngle:o,pixelMargin:n,x:r,y:s,outerRadius:a,innerRadius:l}=e;let c=n/a;t.beginPath(),t.arc(r,s,a,o-c,i+c),l>n?(c=n/l,t.arc(r,s,l,i+c,o-c,!0)):t.arc(r,s,n,i+Nn,o-Nn),t.closePath(),t.clip()}function gc(t,e,i,o){return{x:i+t*Math.cos(e),y:o+t*Math.sin(e)}}function mc(t,e,i,o,n){const{x:r,y:s,startAngle:a,pixelMargin:l,innerRadius:c}=e,d=Math.max(e.outerRadius+o+i-l,0),h=c>0?c+o+i+l:0;let p=0;const u=n-a;if(o){const t=((c>0?c-o:0)+(d>0?d-o:0))/2;p=(u-(0!==t?u*t/(t+o):u))/2}const f=(u-Math.max(.001,u*d-i/An)/d)/2,g=a+f+p,m=n-f-p,{outerStart:y,outerEnd:b,innerStart:x,innerEnd:v}=function(t,e,i,o){const n=as(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]),r=(i-e)/2,s=Math.min(r,o*e/2),a=t=>{const e=(i-Math.min(r,t))*o/2;return er(t,0,Math.min(r,e))};return{outerStart:a(n.outerStart),outerEnd:a(n.outerEnd),innerStart:er(n.innerStart,0,s),innerEnd:er(n.innerEnd,0,s)}}(e,h,d,m-g),w=d-y,_=d-b,S=g+y/w,k=m-b/_,R=h+x,O=h+v,$=g+x/R,E=m-v/O;if(t.beginPath(),t.arc(r,s,d,S,k),b>0){const e=gc(_,k,r,s);t.arc(e.x,e.y,b,k,m+Nn)}const T=gc(O,m,r,s);if(t.lineTo(T.x,T.y),v>0){const e=gc(O,E,r,s);t.arc(e.x,e.y,v,m+Nn,E+Math.PI)}if(t.arc(r,s,h,m-v/h,g+x/h,!0),x>0){const e=gc(R,$,r,s);t.arc(e.x,e.y,x,$+Math.PI,g-Nn)}const P=gc(w,g,r,s);if(t.lineTo(P.x,P.y),y>0){const e=gc(w,S,r,s);t.arc(e.x,e.y,y,g-Nn,S)}t.closePath()}Object.defineProperties(hc,{defaults:{enumerable:uc,value:Fr},instances:{enumerable:uc,value:lc},overrides:{enumerable:uc,value:Br},registry:{enumerable:uc,value:Wl},version:{enumerable:uc,value:"3.7.0"},getChart:{enumerable:uc,value:cc},register:{enumerable:uc,value:(...t)=>{Wl.add(...t),pc()}},unregister:{enumerable:uc,value:(...t)=>{Wl.remove(...t),pc()}}});class yc extends Tl{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const o=this.getProps(["x","y"],i),{angle:n,distance:r}=Xn(o,{x:t,y:e}),{startAngle:s,endAngle:a,innerRadius:l,outerRadius:c,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),h=this.options.spacing/2,p=mn(d,a-s)>=Cn||tr(n,s,a),u=ir(r,l+h,c+h);return p&&u}getCenterPoint(t){const{x:e,y:i,startAngle:o,endAngle:n,innerRadius:r,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:a,spacing:l}=this.options,c=(o+n)/2,d=(r+s+l+a)/2;return{x:e+Math.cos(c)*d,y:i+Math.sin(c)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,o=(e.offset||0)/2,n=(e.spacing||0)/2;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>Cn?Math.floor(i/Cn):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let r=0;if(o){r=o/2;const e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*r,Math.sin(e)*r),this.circumference>=An&&(r=o)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const s=function(t,e,i,o){const{fullCircles:n,startAngle:r,circumference:s}=e;let a=e.endAngle;if(n){mc(t,e,i,o,r+Cn);for(let e=0;e<n;++e)t.fill();isNaN(s)||(a=r+s%Cn,s%Cn==0&&(a+=Cn))}return mc(t,e,i,o,a),t.fill(),a}(t,this,r,n);(function(t,e,i,o,n){const{options:r}=e,{borderWidth:s,borderJoinStyle:a}=r,l="inner"===r.borderAlign;s&&(l?(t.lineWidth=2*s,t.lineJoin=a||"round"):(t.lineWidth=s,t.lineJoin=a||"bevel"),e.fullCircles&&function(t,e,i){const{x:o,y:n,startAngle:r,pixelMargin:s,fullCircles:a}=e,l=Math.max(e.outerRadius-s,0),c=e.innerRadius+s;let d;for(i&&fc(t,e,r+Cn),t.beginPath(),t.arc(o,n,c,r+Cn,r,!0),d=0;d<a;++d)t.stroke();for(t.beginPath(),t.arc(o,n,l,r,r+Cn),d=0;d<a;++d)t.stroke()}(t,e,l),l&&fc(t,e,n),mc(t,e,i,o,n),t.stroke())})(t,this,r,n,s),t.restore()}}function bc(t,e,i=e){t.lineCap=mn(i.borderCapStyle,e.borderCapStyle),t.setLineDash(mn(i.borderDash,e.borderDash)),t.lineDashOffset=mn(i.borderDashOffset,e.borderDashOffset),t.lineJoin=mn(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=mn(i.borderWidth,e.borderWidth),t.strokeStyle=mn(i.borderColor,e.borderColor)}function xc(t,e,i){t.lineTo(i.x,i.y)}function vc(t,e,i={}){const o=t.length,{start:n=0,end:r=o-1}=i,{start:s,end:a}=e,l=Math.max(n,s),c=Math.min(r,a),d=n<s&&r<s||n>a&&r>a;return{count:o,start:l,loop:e.loop,ilen:c<l&&!d?o+c-l:c-l}}function wc(t,e,i,o){const{points:n,options:r}=e,{count:s,start:a,loop:l,ilen:c}=vc(n,i,o),d=function(t){return t.stepped?Zr:t.tension||"monotone"===t.cubicInterpolationMode?Qr:xc}(r);let h,p,u,{move:f=!0,reverse:g}=o||{};for(h=0;h<=c;++h)p=n[(a+(g?c-h:h))%s],p.skip||(f?(t.moveTo(p.x,p.y),f=!1):d(t,u,p,g,r.stepped),u=p);return l&&(p=n[(a+(g?c:0))%s],d(t,u,p,g,r.stepped)),!!l}function _c(t,e,i,o){const n=e.points,{count:r,start:s,ilen:a}=vc(n,i,o),{move:l=!0,reverse:c}=o||{};let d,h,p,u,f,g,m=0,y=0;const b=t=>(s+(c?a-t:t))%r,x=()=>{u!==f&&(t.lineTo(m,f),t.lineTo(m,u),t.lineTo(m,g))};for(l&&(h=n[b(0)],t.moveTo(h.x,h.y)),d=0;d<=a;++d){if(h=n[b(d)],h.skip)continue;const e=h.x,i=h.y,o=0|e;o===p?(i<u?u=i:i>f&&(f=i),m=(y*m+e)/++y):(x(),t.lineTo(e,i),p=o,y=0,u=f=i),g=i}x()}function Sc(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i?wc:_c}yc.id="arc",yc.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0},yc.defaultRoutes={backgroundColor:"backgroundColor"};const kc="function"==typeof Path2D;class Rc extends Tl{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const o=i.spanGaps?this._loop:this._fullLoop;Ns(this._points,i,t,o,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){const i=t.points,o=t.options.spanGaps,n=i.length;if(!n)return[];const r=!!t._loop,{start:s,end:a}=function(t,e,i,o){let n=0,r=e-1;if(i&&!o)for(;n<e&&!t[n].skip;)n++;for(;n<e&&t[n].skip;)n++;for(n%=e,i&&(r+=n);r>n&&t[r%e].skip;)r--;return r%=e,{start:n,end:r}}(i,n,r,o);return function(t,e,i,o){return o&&o.setContext&&i?function(t,e,i,o){const n=t._chart.getContext(),r=la(t.options),{_datasetIndex:s,options:{spanGaps:a}}=t,l=i.length,c=[];let d=r,h=e[0].start,p=h;function u(t,e,o,n){const r=a?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=r;for(;i[e%l].skip;)e+=r;t%l!=e%l&&(c.push({start:t%l,end:e%l,loop:o,style:n}),d=n,h=e%l)}}for(const t of e){h=a?h:t.start;let e,r=i[h%l];for(p=h+1;p<=t.end;p++){const a=i[p%l];e=la(o.setContext(us(n,{type:"segment",p0:r,p1:a,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:s}))),ca(e,d)&&u(h,p-1,t.loop,d),r=a,d=e}h<p-1&&u(h,p-1,t.loop,d)}return c}(t,e,i,o):e}(t,!0===o?[{start:s,end:a,loop:r}]:function(t,e,i,o){const n=t.length,r=[];let s,a=e,l=t[e];for(s=e+1;s<=i;++s){const i=t[s%n];i.skip||i.stop?l.skip||(o=!1,r.push({start:e%n,end:(s-1)%n,loop:o}),e=a=i.stop?s:null):(a=s,l.skip&&(e=s)),l=i}return null!==a&&r.push({start:e%n,end:a%n,loop:o}),r}(i,s,a<s?a+n:a,!!t._fullLoop&&0===s&&a===n-1),i,e)}(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,o=t[e],n=this.points,r=aa(this,{property:e,start:o,end:o});if(!r.length)return;const s=[],a=function(t){return t.stepped?Js:t.tension||"monotone"===t.cubicInterpolationMode?Zs:Xs}(i);let l,c;for(l=0,c=r.length;l<c;++l){const{start:c,end:d}=r[l],h=n[c],p=n[d];if(h===p){s.push(h);continue}const u=a(h,p,Math.abs((o-h[e])/(p[e]-h[e])),i.stepped);u[e]=t[e],s.push(u)}return 1===s.length?s[0]:s}pathSegment(t,e,i){return Sc(this)(t,this,e,i)}path(t,e,i){const o=this.segments,n=Sc(this);let r=this._loop;e=e||0,i=i||this.points.length-e;for(const s of o)r&=n(t,this,s,{start:e,end:e+i-1});return!!r}draw(t,e,i,o){const n=this.options||{};(this.points||[]).length&&n.borderWidth&&(t.save(),function(t,e,i,o){kc&&!e.options.segment?function(t,e,i,o){let n=e._path;n||(n=e._path=new Path2D,e.path(n,i,o)&&n.closePath()),bc(t,e.options),t.stroke(n)}(t,e,i,o):function(t,e,i,o){const{segments:n,options:r}=e,s=Sc(e);for(const a of n)bc(t,r,a.style),t.beginPath(),s(t,e,a,{start:i,end:i+o-1})&&t.closePath(),t.stroke()}(t,e,i,o)}(t,this,i,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Oc(t,e,i,o){const n=t.options,{[i]:r}=t.getProps([i],o);return Math.abs(e-r)<n.radius+n.hitRadius}Rc.id="line",Rc.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},Rc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},Rc.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class $c extends Tl{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const o=this.options,{x:n,y:r}=this.getProps(["x","y"],i);return Math.pow(t-n,2)+Math.pow(e-r,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(t,e){return Oc(this,t,"x",e)}inYRange(t,e){return Oc(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;return e=Math.max(e,e&&t.hoverRadius||0),2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!Kr(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Gr(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function Ec(t,e){const{x:i,y:o,base:n,width:r,height:s}=t.getProps(["x","y","base","width","height"],e);let a,l,c,d,h;return t.horizontal?(h=s/2,a=Math.min(i,n),l=Math.max(i,n),c=o-h,d=o+h):(h=r/2,a=i-h,l=i+h,c=Math.min(o,n),d=Math.max(o,n)),{left:a,top:c,right:l,bottom:d}}function Tc(t,e,i,o){return t?0:er(e,i,o)}function Pc(t,e,i,o){const n=null===e,r=null===i,s=t&&!(n&&r)&&Ec(t,o);return s&&(n||ir(e,s.left,s.right))&&(r||ir(i,s.top,s.bottom))}function Mc(t,e){t.rect(e.x,e.y,e.w,e.h)}function Dc(t,e,i={}){const o=t.x!==i.x?-e:0,n=t.y!==i.y?-e:0,r=(t.x+t.w!==i.x+i.w?e:0)-o,s=(t.y+t.h!==i.y+i.h?e:0)-n;return{x:t.x+o,y:t.y+n,w:t.w+r,h:t.h+s,radius:t.radius}}$c.id="point",$c.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},$c.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class Ac extends Tl{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:o}}=this,{inner:n,outer:r}=function(t){const e=Ec(t),i=e.right-e.left,o=e.bottom-e.top,n=function(t,e,i){const o=t.options.borderWidth,n=t.borderSkipped,r=ls(o);return{t:Tc(n.top,r.top,0,i),r:Tc(n.right,r.right,0,e),b:Tc(n.bottom,r.bottom,0,i),l:Tc(n.left,r.left,0,e)}}(t,i/2,o/2),r=function(t,e,i){const{enableBorderRadius:o}=t.getProps(["enableBorderRadius"]),n=t.options.borderRadius,r=cs(n),s=Math.min(e,i),a=t.borderSkipped,l=o||un(n);return{topLeft:Tc(!l||a.top||a.left,r.topLeft,0,s),topRight:Tc(!l||a.top||a.right,r.topRight,0,s),bottomLeft:Tc(!l||a.bottom||a.left,r.bottomLeft,0,s),bottomRight:Tc(!l||a.bottom||a.right,r.bottomRight,0,s)}}(t,i/2,o/2);return{outer:{x:e.left,y:e.top,w:i,h:o,radius:r},inner:{x:e.left+n.l,y:e.top+n.t,w:i-n.l-n.r,h:o-n.t-n.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,r.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(n.b,n.r))}}}}(this),s=(a=r.radius).topLeft||a.topRight||a.bottomLeft||a.bottomRight?is:Mc;var a;t.save(),r.w===n.w&&r.h===n.h||(t.beginPath(),s(t,Dc(r,e,n)),t.clip(),s(t,Dc(n,-e,r)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),s(t,Dc(n,e)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,e,i){return Pc(this,t,e,i)}inXRange(t,e){return Pc(this,t,null,e)}inYRange(t,e){return Pc(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:o,horizontal:n}=this.getProps(["x","y","base","horizontal"],t);return{x:n?(e+o)/2:e,y:n?i:(i+o)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}Ac.id="bar",Ac.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},Ac.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var Cc=Object.freeze({__proto__:null,ArcElement:yc,LineElement:Rc,PointElement:$c,BarElement:Ac});function Ic(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function jc(t){t.data.datasets.forEach((t=>{Ic(t)}))}var Lc={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled)return void jc(t);const o=t.width;t.data.datasets.forEach(((e,n)=>{const{_data:r,indexAxis:s}=e,a=t.getDatasetMeta(n),l=r||e.data;if("y"===ps([s,t.options.indexAxis]))return;if("line"!==a.type)return;const c=t.scales[a.xAxisID];if("linear"!==c.type&&"time"!==c.type)return;if(t.options.parsing)return;let d,{start:h,count:p}=function(t,e){const i=e.length;let o,n=0;const{iScale:r}=t,{min:s,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(n=er(gs(e,r.axis,s).lo,0,i-1)),o=c?er(gs(e,r.axis,a).hi+1,n,i)-n:i-n,{start:n,count:o}}(a,l);if(p<=(i.threshold||4*o))Ic(e);else{switch(hn(r)&&(e._data=l,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":d=function(t,e,i,o,n){const r=n.samples||o;if(r>=i)return t.slice(e,e+i);const s=[],a=(i-2)/(r-2);let l=0;const c=e+i-1;let d,h,p,u,f,g=e;for(s[l++]=t[g],d=0;d<r-2;d++){let o,n=0,r=0;const c=Math.floor((d+1)*a)+1+e,m=Math.min(Math.floor((d+2)*a)+1,i)+e,y=m-c;for(o=c;o<m;o++)n+=t[o].x,r+=t[o].y;n/=y,r/=y;const b=Math.floor(d*a)+1+e,x=Math.min(Math.floor((d+1)*a)+1,i)+e,{x:v,y:w}=t[g];for(p=u=-1,o=b;o<x;o++)u=.5*Math.abs((v-n)*(t[o].y-w)-(v-t[o].x)*(r-w)),u>p&&(p=u,h=t[o],f=o);s[l++]=h,g=f}return s[l++]=t[c],s}(l,h,p,o,i);break;case"min-max":d=function(t,e,i,o){let n,r,s,a,l,c,d,h,p,u,f=0,g=0;const m=[],y=e+i-1,b=t[e].x,x=t[y].x-b;for(n=e;n<e+i;++n){r=t[n],s=(r.x-b)/x*o,a=r.y;const e=0|s;if(e===l)a<p?(p=a,c=n):a>u&&(u=a,d=n),f=(g*f+r.x)/++g;else{const i=n-1;if(!hn(c)&&!hn(d)){const e=Math.min(c,d),o=Math.max(c,d);e!==h&&e!==i&&m.push({...t[e],x:f}),o!==h&&o!==i&&m.push({...t[o],x:f})}n>0&&i!==h&&m.push(t[i]),m.push(r),l=e,g=0,p=u=a,c=d=h=n}}return m}(l,h,p,o);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=d}}))},destroy(t){jc(t)}};function Nc(t,e,i){const o=function(t){const e=t.options,i=e.fill;let o=mn(i&&i.target,i);return void 0===o&&(o=!!e.backgroundColor),!1!==o&&null!==o&&(!0===o?"origin":o)}(t);if(un(o))return!isNaN(o.value)&&o;let n=parseFloat(o);return fn(n)&&Math.floor(n)===n?("-"!==o[0]&&"+"!==o[0]||(n=e+n),!(n===e||n<0||n>=i)&&n):["origin","start","end","stack","shape"].indexOf(o)>=0&&o}class Bc{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:o,y:n,radius:r}=this;return e=e||{start:0,end:Cn},t.arc(o,n,r,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:o}=this,n=t.angle;return{x:e+Math.cos(n)*o,y:i+Math.sin(n)*o,angle:n}}}function zc(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function Wc(t,e,i){const o=[];for(let n=0;n<i.length;n++){const r=i[n],{first:s,last:a,point:l}=Hc(r,e,"x");if(!(!l||s&&a))if(s)o.unshift(l);else if(t.push(l),!a)break}t.push(...o)}function Hc(t,e,i){const o=t.interpolate(e,i);if(!o)return{};const n=o[i],r=t.segments,s=t.points;let a=!1,l=!1;for(let t=0;t<r.length;t++){const e=r[t],o=s[e.start][i],c=s[e.end][i];if(ir(n,o,c)){a=n===o,l=n===c;break}}return{first:a,last:l,point:o}}function Fc(t){const{chart:e,fill:i,line:o}=t;if(fn(i))return function(t,e){const i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:o}=t,n=[],r=o.segments,s=o.points,a=function(t,e){const i=[],o=t.getMatchingVisibleMetas("line");for(let t=0;t<o.length;t++){const n=o[t];if(n.index===e)break;n.hidden||i.unshift(n.dataset)}return i}(e,i);a.push(Uc({x:null,y:e.bottom},o));for(let t=0;t<r.length;t++){const e=r[t];for(let t=e.start;t<=e.end;t++)Wc(n,s[t],a)}return new Rc({points:n,options:{}})}(t);if("shape"===i)return!0;const n=function(t){return(t.scale||{}).getPointPositionForValue?function(t){const{scale:e,fill:i}=t,o=e.options,n=e.getLabels().length,r=[],s=o.reverse?e.max:e.min,a=o.reverse?e.min:e.max;let l,c,d;if(d="start"===i?s:"end"===i?a:un(i)?i.value:e.getBaseValue(),o.grid.circular)return c=e.getPointPositionForValue(0,s),new Bc({x:c.x,y:c.y,radius:e.getDistanceFromCenterForValue(d)});for(l=0;l<n;++l)r.push(e.getPointPositionForValue(l,d));return r}(t):function(t){const{scale:e={},fill:i}=t;let o,n=null;return"start"===i?n=e.bottom:"end"===i?n=e.top:un(i)?n=e.getPixelForValue(i.value):e.getBasePixel&&(n=e.getBasePixel()),fn(n)?(o=e.isHorizontal(),{x:o?n:null,y:o?null:n}):null}(t)}(t);return n instanceof Bc?n:Uc(n,o)}function Uc(t,e){let i=[],o=!1;return pn(t)?(o=!0,i=t):i=function(t,e){const{x:i=null,y:o=null}=t||{},n=e.points,r=[];return e.segments.forEach((({start:t,end:e})=>{e=zc(t,e,n);const s=n[t],a=n[e];null!==o?(r.push({x:s.x,y:o}),r.push({x:a.x,y:o})):null!==i&&(r.push({x:i,y:s.y}),r.push({x:i,y:a.y}))})),r}(t,e),i.length?new Rc({points:i,options:{tension:0},_loop:o,_fullLoop:o}):null}function Vc(t,e,i){let o=t[e].fill;const n=[e];let r;if(!i)return o;for(;!1!==o&&-1===n.indexOf(o);){if(!fn(o))return o;if(r=t[o],!r)return!1;if(r.visible)return o;n.push(o),o=r.fill}return!1}function Yc(t,e,i){t.beginPath(),e.path(t),t.lineTo(e.last().x,i),t.lineTo(e.first().x,i),t.closePath(),t.clip()}function qc(t,e,i,o){if(o)return;let n=e[t],r=i[t];return"angle"===t&&(n=Qn(n),r=Qn(r)),{property:t,start:n,end:r}}function Gc(t,e,i,o){return t&&e?o(t[i],e[i]):t?t[i]:e?e[i]:0}function Kc(t,e,i){const{top:o,bottom:n}=e.chart.chartArea,{property:r,start:s,end:a}=i||{};"x"===r&&(t.beginPath(),t.rect(s,o,a-s,n-o),t.clip())}function Xc(t,e,i,o){const n=e.interpolate(i,o);n&&t.lineTo(n.x,n.y)}function Jc(t,e){const{line:i,target:o,property:n,color:r,scale:s}=e,a=function(t,e,i){const o=t.segments,n=t.points,r=e.points,s=[];for(const t of o){let{start:o,end:a}=t;a=zc(o,a,n);const l=qc(i,n[o],n[a],t.loop);if(!e.segments){s.push({source:t,target:l,start:n[o],end:n[a]});continue}const c=aa(e,l);for(const e of c){const o=qc(i,r[e.start],r[e.end],e.loop),a=sa(t,n,o);for(const t of a)s.push({source:t,target:e,start:{[i]:Gc(l,o,"start",Math.max)},end:{[i]:Gc(l,o,"end",Math.min)}})}}return s}(i,o,n);for(const{source:e,target:l,start:c,end:d}of a){const{style:{backgroundColor:a=r}={}}=e,h=!0!==o;t.save(),t.fillStyle=a,Kc(t,s,h&&qc(n,c,d)),t.beginPath();const p=!!i.pathSegment(t,e);let u;if(h){p?t.closePath():Xc(t,o,d,n);const e=!!o.pathSegment(t,l,{move:p,reverse:!0});u=p&&e,u||Xc(t,o,c,n)}t.closePath(),t.fill(u?"evenodd":"nonzero"),t.restore()}}function Zc(t,e,i){const o=Fc(e),{line:n,scale:r,axis:s}=e,a=n.options,l=a.fill,c=a.backgroundColor,{above:d=c,below:h=c}=l||{};o&&n.points.length&&(Xr(t,i),function(t,e){const{line:i,target:o,above:n,below:r,area:s,scale:a}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&r!==n&&(Yc(t,o,s.top),Jc(t,{line:i,target:o,color:n,scale:a,property:l}),t.restore(),t.save(),Yc(t,o,s.bottom)),Jc(t,{line:i,target:o,color:r,scale:a,property:l}),t.restore()}(t,{line:n,target:o,above:d,below:h,area:i,scale:r,axis:s}),Jr(t))}var Qc={id:"filler",afterDatasetsUpdate(t,e,i){const o=(t.data.datasets||[]).length,n=[];let r,s,a,l;for(s=0;s<o;++s)r=t.getDatasetMeta(s),a=r.dataset,l=null,a&&a.options&&a instanceof Rc&&(l={visible:t.isDatasetVisible(s),index:s,fill:Nc(a,s,o),chart:t,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,n.push(l);for(s=0;s<o;++s)l=n[s],l&&!1!==l.fill&&(l.fill=Vc(n,s,i.propagate))},beforeDraw(t,e,i){const o="beforeDraw"===i.drawTime,n=t.getSortedVisibleDatasetMetas(),r=t.chartArea;for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&(i.line.updateControlPoints(r,i.axis),o&&Zc(t.ctx,i,r))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const o=t.getSortedVisibleDatasetMetas();for(let e=o.length-1;e>=0;--e){const i=o[e].$filler;i&&Zc(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const o=e.meta.$filler;o&&!1!==o.fill&&"beforeDatasetDraw"===i.drawTime&&Zc(t.ctx,o,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const td=(t,e)=>{let{boxHeight:i=e,boxWidth:o=e}=t;return t.usePointStyle&&(i=Math.min(i,e),o=Math.min(o,e)),{boxWidth:o,boxHeight:i,itemHeight:Math.max(e,i)}};class ed extends Tl{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=bn(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const i=t.labels,o=hs(i.font),n=o.size,r=this._computeTitleHeight(),{boxWidth:s,itemHeight:a}=td(i,n);let l,c;e.font=o.string,this.isHorizontal()?(l=this.maxWidth,c=this._fitRows(r,n,s,a)+10):(c=this.maxHeight,l=this._fitCols(r,n,s,a)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,o){const{ctx:n,maxWidth:r,options:{labels:{padding:s}}}=this,a=this.legendHitBoxes=[],l=this.lineWidths=[0],c=o+s;let d=t;n.textAlign="left",n.textBaseline="middle";let h=-1,p=-c;return this.legendItems.forEach(((t,u)=>{const f=i+e/2+n.measureText(t.text).width;(0===u||l[l.length-1]+f+2*s>r)&&(d+=c,l[l.length-(u>0?0:1)]=0,p+=c,h++),a[u]={left:0,top:p,row:h,width:f,height:o},l[l.length-1]+=f+s})),d}_fitCols(t,e,i,o){const{ctx:n,maxHeight:r,options:{labels:{padding:s}}}=this,a=this.legendHitBoxes=[],l=this.columnSizes=[],c=r-t;let d=s,h=0,p=0,u=0,f=0;return this.legendItems.forEach(((t,r)=>{const g=i+e/2+n.measureText(t.text).width;r>0&&p+o+2*s>c&&(d+=h+s,l.push({width:h,height:p}),u+=h+s,f++,h=p=0),a[r]={left:u,top:p,col:f,width:g,height:o},h=Math.max(h,g),p+=o+s})),d+=h,l.push({width:h,height:p}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:o},rtl:n}}=this,r=ea(n,this.left,this.width);if(this.isHorizontal()){let n=0,s=ln(i,this.left+o,this.right-this.lineWidths[n]);for(const a of e)n!==a.row&&(n=a.row,s=ln(i,this.left+o,this.right-this.lineWidths[n])),a.top+=this.top+t+o,a.left=r.leftForLtr(r.x(s),a.width),s+=a.width+o}else{let n=0,s=ln(i,this.top+t+o,this.bottom-this.columnSizes[n].height);for(const a of e)a.col!==n&&(n=a.col,s=ln(i,this.top+t+o,this.bottom-this.columnSizes[n].height)),a.top=s,a.left+=this.left+o,a.left=r.leftForLtr(r.x(a.left),a.width),s+=a.height+o}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;Xr(t,this),this._draw(),Jr(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:o}=this,{align:n,labels:r}=t,s=Fr.color,a=ea(t.rtl,this.left,this.width),l=hs(r.font),{color:c,padding:d}=r,h=l.size,p=h/2;let u;this.drawTitle(),o.textAlign=a.textAlign("left"),o.textBaseline="middle",o.lineWidth=.5,o.font=l.string;const{boxWidth:f,boxHeight:g,itemHeight:m}=td(r,h),y=this.isHorizontal(),b=this._computeTitleHeight();u=y?{x:ln(n,this.left+d,this.right-i[0]),y:this.top+d+b,line:0}:{x:this.left+d,y:ln(n,this.top+b+d,this.bottom-e[0].height),line:0},ia(this.ctx,t.textDirection);const x=m+d;this.legendItems.forEach(((v,w)=>{o.strokeStyle=v.fontColor||c,o.fillStyle=v.fontColor||c;const _=o.measureText(v.text).width,S=a.textAlign(v.textAlign||(v.textAlign=r.textAlign)),k=f+p+_;let R=u.x,O=u.y;a.setWidth(this.width),y?w>0&&R+k+d>this.right&&(O=u.y+=x,u.line++,R=u.x=ln(n,this.left+d,this.right-i[u.line])):w>0&&O+x>this.bottom&&(R=u.x=R+e[u.line].width+d,u.line++,O=u.y=ln(n,this.top+b+d,this.bottom-e[u.line].height)),function(t,e,i){if(isNaN(f)||f<=0||isNaN(g)||g<0)return;o.save();const n=mn(i.lineWidth,1);if(o.fillStyle=mn(i.fillStyle,s),o.lineCap=mn(i.lineCap,"butt"),o.lineDashOffset=mn(i.lineDashOffset,0),o.lineJoin=mn(i.lineJoin,"miter"),o.lineWidth=n,o.strokeStyle=mn(i.strokeStyle,s),o.setLineDash(mn(i.lineDash,[])),r.usePointStyle){const r={radius:f*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},s=a.xPlus(t,f/2);Gr(o,r,s,e+p)}else{const r=e+Math.max((h-g)/2,0),s=a.leftForLtr(t,f),l=cs(i.borderRadius);o.beginPath(),Object.values(l).some((t=>0!==t))?is(o,{x:s,y:r,w:f,h:g,radius:l}):o.rect(s,r,f,g),o.fill(),0!==n&&o.stroke()}o.restore()}(a.x(R),O,v),R=((t,e,i,o)=>t===(o?"left":"right")?i:"center"===t?(e+i)/2:e)(S,R+f+p,y?R+k:this.right,t.rtl),function(t,e,i){ts(o,i.text,t,e+m/2,l,{strikethrough:i.hidden,textAlign:a.textAlign(i.textAlign)})}(a.x(R),O,v),y?u.x+=k+d:u.y+=x})),oa(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=hs(e.font),o=ds(e.padding);if(!e.display)return;const n=ea(t.rtl,this.left,this.width),r=this.ctx,s=e.position,a=i.size/2,l=o.top+a;let c,d=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),c=this.top+l,d=ln(t.align,d,this.right-h);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);c=l+ln(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const p=ln(s,d,d+h);r.textAlign=n.textAlign(an(s)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=i.string,ts(r,e.text,p,c,i)}_computeTitleHeight(){const t=this.options.title,e=hs(t.font),i=ds(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,o,n;if(ir(t,this.left,this.right)&&ir(e,this.top,this.bottom))for(n=this.legendHitBoxes,i=0;i<n.length;++i)if(o=n[i],ir(t,o.left,o.left+o.width)&&ir(e,o.top,o.top+o.height))return this.legendItems[i];return null}handleEvent(t){const e=this.options;if(!function(t,e){return!("mousemove"!==t||!e.onHover&&!e.onLeave)||!(!e.onClick||"click"!==t&&"mouseup"!==t)}(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type){const o=this._hoveredItem,n=((t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index)(o,i);o&&!n&&bn(e.onLeave,[t,o,this],this),this._hoveredItem=i,i&&!n&&bn(e.onHover,[t,i,this],this)}else i&&bn(e.onClick,[t,i,this],this)}}var id={id:"legend",_element:ed,start(t,e,i){const o=t.legend=new ed({ctx:t.ctx,options:i,chart:t});pl.configure(t,o,i),pl.addBox(t,o)},stop(t){pl.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const o=t.legend;pl.configure(t,o,i),o.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const o=e.datasetIndex,n=i.chart;n.isDatasetVisible(o)?(n.hide(o),e.hidden=!0):(n.show(o),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:o,textAlign:n,color:r}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const s=t.controller.getStyle(i?0:void 0),a=ds(s.borderWidth);return{text:e[t.index].label,fillStyle:s.backgroundColor,fontColor:r,hidden:!t.visible,lineCap:s.borderCapStyle,lineDash:s.borderDash,lineDashOffset:s.borderDashOffset,lineJoin:s.borderJoinStyle,lineWidth:(a.width+a.height)/4,strokeStyle:s.borderColor,pointStyle:o||s.pointStyle,rotation:s.rotation,textAlign:n||s.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class od extends Tl{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const o=pn(i.text)?i.text.length:1;this._padding=ds(i.padding);const n=o*hs(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=n:this.width=n}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:o,right:n,options:r}=this,s=r.align;let a,l,c,d=0;return this.isHorizontal()?(l=ln(s,i,n),c=e+t,a=n-i):("left"===r.position?(l=i+t,c=ln(s,o,e),d=-.5*An):(l=n-t,c=ln(s,e,o),d=.5*An),a=o-e),{titleX:l,titleY:c,maxWidth:a,rotation:d}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=hs(e.font),o=i.lineHeight/2+this._padding.top,{titleX:n,titleY:r,maxWidth:s,rotation:a}=this._drawArgs(o);ts(t,e.text,0,0,i,{color:e.color,maxWidth:s,rotation:a,textAlign:an(e.align),textBaseline:"middle",translation:[n,r]})}}var nd={id:"title",_element:od,start(t,e,i){!function(t,e){const i=new od({ctx:t.ctx,options:e,chart:t});pl.configure(t,i,e),pl.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const e=t.titleBlock;pl.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const o=t.titleBlock;pl.configure(t,o,i),o.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const rd=new WeakMap;var sd={id:"subtitle",start(t,e,i){const o=new od({ctx:t.ctx,options:i,chart:t});pl.configure(t,o,i),pl.addBox(t,o),rd.set(t,o)},stop(t){pl.removeBox(t,rd.get(t)),rd.delete(t)},beforeUpdate(t,e,i){const o=rd.get(t);pl.configure(t,o,i),o.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ad={average(t){if(!t.length)return!1;let e,i,o=0,n=0,r=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();o+=t.x,n+=t.y,++r}}return{x:o/r,y:n/r}},nearest(t,e){if(!t.length)return!1;let i,o,n,r=e.x,s=e.y,a=Number.POSITIVE_INFINITY;for(i=0,o=t.length;i<o;++i){const o=t[i].element;if(o&&o.hasValue()){const t=Jn(e,o.getCenterPoint());t<a&&(a=t,n=o)}}if(n){const t=n.tooltipPosition();r=t.x,s=t.y}return{x:r,y:s}}};function ld(t,e){return e&&(pn(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function cd(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function dd(t,e){const{element:i,datasetIndex:o,index:n}=e,r=t.getDatasetMeta(o).controller,{label:s,value:a}=r.getLabelAndValue(n);return{chart:t,label:s,parsed:r.getParsed(n),raw:t.data.datasets[o].data[n],formattedValue:a,dataset:r.getDataset(),dataIndex:n,datasetIndex:o,element:i}}function hd(t,e){const i=t.chart.ctx,{body:o,footer:n,title:r}=t,{boxWidth:s,boxHeight:a}=e,l=hs(e.bodyFont),c=hs(e.titleFont),d=hs(e.footerFont),h=r.length,p=n.length,u=o.length,f=ds(e.padding);let g=f.height,m=0,y=o.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);y+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),y&&(g+=u*(e.displayColors?Math.max(a,l.lineHeight):l.lineHeight)+(y-u)*l.lineHeight+(y-1)*e.bodySpacing),p&&(g+=e.footerMarginTop+p*d.lineHeight+(p-1)*e.footerSpacing);let b=0;const x=function(t){m=Math.max(m,i.measureText(t).width+b)};return i.save(),i.font=c.string,xn(t.title,x),i.font=l.string,xn(t.beforeBody.concat(t.afterBody),x),b=e.displayColors?s+2+e.boxPadding:0,xn(o,(t=>{xn(t.before,x),xn(t.lines,x),xn(t.after,x)})),b=0,i.font=d.string,xn(t.footer,x),i.restore(),m+=f.width,{width:m,height:g}}function pd(t,e,i,o){const{x:n,width:r}=i,{width:s,chartArea:{left:a,right:l}}=t;let c="center";return"center"===o?c=n<=(a+l)/2?"left":"right":n<=r/2?c="left":n>=s-r/2&&(c="right"),function(t,e,i,o){const{x:n,width:r}=o,s=i.caretSize+i.caretPadding;return"left"===t&&n+r+s>e.width||"right"===t&&n-r-s<0||void 0}(c,t,e,i)&&(c="center"),c}function ud(t,e,i){const o=i.yAlign||e.yAlign||function(t,e){const{y:i,height:o}=e;return i<o/2?"top":i>t.height-o/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||pd(t,e,i,o),yAlign:o}}function fd(t,e,i,o){const{caretSize:n,caretPadding:r,cornerRadius:s}=t,{xAlign:a,yAlign:l}=i,c=n+r,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=cs(s);let f=function(t,e){let{x:i,width:o}=t;return"right"===e?i-=o:"center"===e&&(i-=o/2),i}(e,a);const g=function(t,e,i){let{y:o,height:n}=t;return"top"===e?o+=i:o-="bottom"===e?n+i:n/2,o}(e,l,c);return"center"===l?"left"===a?f+=c:"right"===a&&(f-=c):"left"===a?f-=Math.max(d,p)+n:"right"===a&&(f+=Math.max(h,u)+n),{x:er(f,0,o.width-e.width),y:er(g,0,o.height-e.height)}}function gd(t,e,i){const o=ds(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-o.right:t.x+o.left}function md(t){return ld([],cd(t))}function yd(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class bd extends Tl{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&e.options.animation&&i.animations,n=new ga(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=(this,us(this.chart.getContext(),{tooltip:this,tooltipItems:this._tooltipItems,type:"tooltip"})))}getTitle(t,e){const{callbacks:i}=e,o=i.beforeTitle.apply(this,[t]),n=i.title.apply(this,[t]),r=i.afterTitle.apply(this,[t]);let s=[];return s=ld(s,cd(o)),s=ld(s,cd(n)),s=ld(s,cd(r)),s}getBeforeBody(t,e){return md(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const{callbacks:i}=e,o=[];return xn(t,(t=>{const e={before:[],lines:[],after:[]},n=yd(i,t);ld(e.before,cd(n.beforeLabel.call(this,t))),ld(e.lines,n.label.call(this,t)),ld(e.after,cd(n.afterLabel.call(this,t))),o.push(e)})),o}getAfterBody(t,e){return md(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:i}=e,o=i.beforeFooter.apply(this,[t]),n=i.footer.apply(this,[t]),r=i.afterFooter.apply(this,[t]);let s=[];return s=ld(s,cd(o)),s=ld(s,cd(n)),s=ld(s,cd(r)),s}_createItems(t){const e=this._active,i=this.chart.data,o=[],n=[],r=[];let s,a,l=[];for(s=0,a=e.length;s<a;++s)l.push(dd(this.chart,e[s]));return t.filter&&(l=l.filter(((e,o,n)=>t.filter(e,o,n,i)))),t.itemSort&&(l=l.sort(((e,o)=>t.itemSort(e,o,i)))),xn(l,(e=>{const i=yd(t.callbacks,e);o.push(i.labelColor.call(this,e)),n.push(i.labelPointStyle.call(this,e)),r.push(i.labelTextColor.call(this,e))})),this.labelColors=o,this.labelPointStyles=n,this.labelTextColors=r,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),o=this._active;let n,r=[];if(o.length){const t=ad[i.position].call(this,o,this._eventPosition);r=this._createItems(i),this.title=this.getTitle(r,i),this.beforeBody=this.getBeforeBody(r,i),this.body=this.getBody(r,i),this.afterBody=this.getAfterBody(r,i),this.footer=this.getFooter(r,i);const e=this._size=hd(this,i),s=Object.assign({},t,e),a=ud(this.chart,i,s),l=fd(i,s,a,this.chart);this.xAlign=a.xAlign,this.yAlign=a.yAlign,n={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(n={opacity:0});this._tooltipItems=r,this.$context=void 0,n&&this._resolveAnimations().update(this,n),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,o){const n=this.getCaretPosition(t,i,o);e.lineTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.lineTo(n.x3,n.y3)}getCaretPosition(t,e,i){const{xAlign:o,yAlign:n}=this,{caretSize:r,cornerRadius:s}=i,{topLeft:a,topRight:l,bottomLeft:c,bottomRight:d}=cs(s),{x:h,y:p}=t,{width:u,height:f}=e;let g,m,y,b,x,v;return"center"===n?(x=p+f/2,"left"===o?(g=h,m=g-r,b=x+r,v=x-r):(g=h+u,m=g+r,b=x-r,v=x+r),y=g):(m="left"===o?h+Math.max(a,c)+r:"right"===o?h+u-Math.max(l,d)-r:this.caretX,"top"===n?(b=p,x=b-r,g=m-r,y=m+r):(b=p+f,x=b+r,g=m+r,y=m-r),v=b),{x1:g,x2:m,x3:y,y1:b,y2:x,y3:v}}drawTitle(t,e,i){const o=this.title,n=o.length;let r,s,a;if(n){const l=ea(i.rtl,this.x,this.width);for(t.x=gd(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",r=hs(i.titleFont),s=i.titleSpacing,e.fillStyle=i.titleColor,e.font=r.string,a=0;a<n;++a)e.fillText(o[a],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s,a+1===n&&(t.y+=i.titleMarginBottom-s)}}_drawColorBox(t,e,i,o,n){const r=this.labelColors[i],s=this.labelPointStyles[i],{boxHeight:a,boxWidth:l,boxPadding:c}=n,d=hs(n.bodyFont),h=gd(this,"left",n),p=o.x(h),u=a<d.lineHeight?(d.lineHeight-a)/2:0,f=e.y+u;if(n.usePointStyle){const e={radius:Math.min(l,a)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},i=o.leftForLtr(p,l)+l/2,c=f+a/2;t.strokeStyle=n.multiKeyBackground,t.fillStyle=n.multiKeyBackground,Gr(t,e,i,c),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,Gr(t,e,i,c)}else{t.lineWidth=r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const e=o.leftForLtr(p,l-c),i=o.leftForLtr(o.xPlus(p,1),l-c-2),s=cs(r.borderRadius);Object.values(s).some((t=>0!==t))?(t.beginPath(),t.fillStyle=n.multiKeyBackground,is(t,{x:e,y:f,w:l,h:a,radius:s}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),is(t,{x:i,y:f+1,w:l-2,h:a-2,radius:s}),t.fill()):(t.fillStyle=n.multiKeyBackground,t.fillRect(e,f,l,a),t.strokeRect(e,f,l,a),t.fillStyle=r.backgroundColor,t.fillRect(i,f+1,l-2,a-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:o}=this,{bodySpacing:n,bodyAlign:r,displayColors:s,boxHeight:a,boxWidth:l,boxPadding:c}=i,d=hs(i.bodyFont);let h=d.lineHeight,p=0;const u=ea(i.rtl,this.x,this.width),f=function(i){e.fillText(i,u.x(t.x+p),t.y+h/2),t.y+=h+n},g=u.textAlign(r);let m,y,b,x,v,w,_;for(e.textAlign=r,e.textBaseline="middle",e.font=d.string,t.x=gd(this,g,i),e.fillStyle=i.bodyColor,xn(this.beforeBody,f),p=s&&"right"!==g?"center"===r?l/2+c:l+2+c:0,x=0,w=o.length;x<w;++x){for(m=o[x],y=this.labelTextColors[x],e.fillStyle=y,xn(m.before,f),b=m.lines,s&&b.length&&(this._drawColorBox(e,t,x,u,i),h=Math.max(d.lineHeight,a)),v=0,_=b.length;v<_;++v)f(b[v]),h=d.lineHeight;xn(m.after,f)}p=0,h=d.lineHeight,xn(this.afterBody,f),t.y-=n}drawFooter(t,e,i){const o=this.footer,n=o.length;let r,s;if(n){const a=ea(i.rtl,this.x,this.width);for(t.x=gd(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=a.textAlign(i.footerAlign),e.textBaseline="middle",r=hs(i.footerFont),e.fillStyle=i.footerColor,e.font=r.string,s=0;s<n;++s)e.fillText(o[s],a.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+i.footerSpacing}}drawBackground(t,e,i,o){const{xAlign:n,yAlign:r}=this,{x:s,y:a}=t,{width:l,height:c}=i,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=cs(o.cornerRadius);e.fillStyle=o.backgroundColor,e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.beginPath(),e.moveTo(s+d,a),"top"===r&&this.drawCaret(t,e,i,o),e.lineTo(s+l-h,a),e.quadraticCurveTo(s+l,a,s+l,a+h),"center"===r&&"right"===n&&this.drawCaret(t,e,i,o),e.lineTo(s+l,a+c-u),e.quadraticCurveTo(s+l,a+c,s+l-u,a+c),"bottom"===r&&this.drawCaret(t,e,i,o),e.lineTo(s+p,a+c),e.quadraticCurveTo(s,a+c,s,a+c-p),"center"===r&&"left"===n&&this.drawCaret(t,e,i,o),e.lineTo(s,a+d),e.quadraticCurveTo(s,a,s+d,a),e.closePath(),e.fill(),o.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,o=i&&i.x,n=i&&i.y;if(o||n){const i=ad[t.position].call(this,this._active,this._eventPosition);if(!i)return;const r=this._size=hd(this,t),s=Object.assign({},i,this._size),a=ud(e,t,s),l=fd(t,s,a,e);o._to===l.x&&n._to===l.y||(this.xAlign=a.xAlign,this.yAlign=a.yAlign,this.width=r.width,this.height=r.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const o={width:this.width,height:this.height},n={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const r=ds(e.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&s&&(t.save(),t.globalAlpha=i,this.drawBackground(n,t,o,e),ia(t,e.textDirection),n.y+=r.top,this.drawTitle(n,t,e),this.drawBody(n,t,e),this.drawFooter(n,t,e),oa(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,o=t.map((({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}})),n=!vn(i,o),r=this._positionChanged(o,e);(n||r)&&(this._active=o,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const o=this.options,n=this._active||[],r=this._getActiveElements(t,n,e,i),s=this._positionChanged(r,t),a=e||!vn(r,n)||s;return a&&(this._active=r,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),a}_getActiveElements(t,e,i,o){const n=this.options;if("mouseout"===t.type)return[];if(!o)return e;const r=this.chart.getElementsAtEventForMode(t,n.mode,n,i);return n.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:i,caretY:o,options:n}=this,r=ad[n.position].call(this,t,e);return!1!==r&&(i!==r.x||o!==r.y)}}bd.positioners=ad;var xd={id:"tooltip",_element:bd,positioners:ad,afterInit(t,e,i){i&&(t.tooltip=new bd({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip,i={tooltip:e};!1!==t.notifyPlugins("beforeTooltipDraw",i)&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i))},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:cn,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,o=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(o>0&&e.dataIndex<o)return i[e.dataIndex]}return""},afterTitle:cn,beforeBody:cn,beforeLabel:cn,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return hn(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:cn,afterBody:cn,beforeFooter:cn,footer:cn,afterFooter:cn}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},vd=Object.freeze({__proto__:null,Decimation:Lc,Filler:Qc,Legend:id,SubTitle:sd,Title:nd,Tooltip:xd});class wd extends Bl{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:o}of e)t[i]===o&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(hn(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:er(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:function(t,e,i,o){const n=t.indexOf(e);return-1===n?((t,e,i,o)=>("string"==typeof e?(i=t.push(e)-1,o.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,o):n!==t.lastIndexOf(e)?i:n}(i,t,mn(e,t),this._addedLabels),i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:o}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,o=[];let n=this.getLabels();n=0===t&&e===n.length-1?n:n.slice(t,e+1),this._valueRange=Math.max(n.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)o.push({value:i});return o}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function _d(t,e,{horizontal:i,minRotation:o}){const n=qn(o),r=(i?Math.sin(n):Math.cos(n))||.001,s=.75*e*(""+t).length;return Math.min(e/r,s)}wd.id="category",wd.defaults={ticks:{callback:wd.prototype.getLabelForValue}};class Sd extends Bl{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return hn(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:o,max:n}=this;const r=t=>o=e?o:t,s=t=>n=i?n:t;if(t){const t=Hn(o),e=Hn(n);t<0&&e<0?s(0):t>0&&e>0&&r(0)}if(o===n){let e=1;(n>=Number.MAX_SAFE_INTEGER||o<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*n)),s(n+e),t||r(o-e)}this.min=o,this.max=n}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:o}=t;return o?(e=Math.ceil(this.max/o)-Math.floor(this.min/o)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${o} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const o=function(t,e){const i=[],{bounds:o,step:n,min:r,max:s,precision:a,count:l,maxTicks:c,maxDigits:d,includeBounds:h}=t,p=n||1,u=c-1,{min:f,max:g}=e,m=!hn(r),y=!hn(s),b=!hn(l),x=(g-f)/(d+1);let v,w,_,S,k=Fn((g-f)/u/p)*p;if(k<1e-14&&!m&&!y)return[{value:f},{value:g}];S=Math.ceil(g/k)-Math.floor(f/k),S>u&&(k=Fn(S*k/u/p)*p),hn(a)||(v=Math.pow(10,a),k=Math.ceil(k*v)/v),"ticks"===o?(w=Math.floor(f/k)*k,_=Math.ceil(g/k)*k):(w=f,_=g),m&&y&&n&&function(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}((s-r)/n,k/1e3)?(S=Math.round(Math.min((s-r)/k,c)),k=(s-r)/S,w=r,_=s):b?(w=m?r:w,_=y?s:_,S=l-1,k=(_-w)/S):(S=(_-w)/k,S=Vn(S,Math.round(S),k/1e3)?Math.round(S):Math.ceil(S));const R=Math.max(Kn(k),Kn(w));v=Math.pow(10,hn(a)?R:a),w=Math.round(w*v)/v,_=Math.round(_*v)/v;let O=0;for(m&&(h&&w!==r?(i.push({value:r}),w<r&&O++,Vn(Math.round((w+O*k)*v)/v,r,_d(r,x,t))&&O++):w<r&&O++);O<S;++O)i.push({value:Math.round((w+O*k)*v)/v});return y&&h&&_!==s?i.length&&Vn(i[i.length-1].value,s,_d(s,x,t))?i[i.length-1].value=s:i.push({value:s}):y&&_!==s||i.push({value:_}),i}({maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&Yn(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const o=(i-e)/Math.max(t.length-1,1)/2;e-=o,i+=o}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return ta(t,this.chart.options.locale,this.options.ticks.format)}}class kd extends Sd{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=fn(t)?t:0,this.max=fn(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=qn(this.options.ticks.minRotation),o=(t?Math.sin(i):Math.cos(i))||.001,n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/o))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function Rd(t){return 1==t/Math.pow(10,Math.floor(Wn(t)))}kd.id="linear",kd.defaults={ticks:{callback:Ml.formatters.numeric}};class Od extends Bl{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Sd.prototype.parse.apply(this,[t,e]);if(0!==i)return fn(i)&&i>0?i:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=fn(t)?Math.max(0,t):null,this.max=fn(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,o=this.max;const n=e=>i=t?i:e,r=t=>o=e?o:t,s=(t,e)=>Math.pow(10,Math.floor(Wn(t))+e);i===o&&(i<=0?(n(1),r(10)):(n(s(i,-1)),r(s(o,1)))),i<=0&&n(s(o,-1)),o<=0&&r(s(i,1)),this._zero&&this.min!==this._suggestedMin&&i===s(this.min,0)&&n(s(i,-1)),this.min=i,this.max=o}buildTicks(){const t=this.options,e=function(t,e){const i=Math.floor(Wn(e.max)),o=Math.ceil(e.max/Math.pow(10,i)),n=[];let r=gn(t.min,Math.pow(10,Math.floor(Wn(e.min)))),s=Math.floor(Wn(r)),a=Math.floor(r/Math.pow(10,s)),l=s<0?Math.pow(10,Math.abs(s)):1;do{n.push({value:r,major:Rd(r)}),++a,10===a&&(a=1,++s,l=s>=0?1:l),r=Math.round(a*Math.pow(10,s)*l)/l}while(s<i||s===i&&a<o);const c=gn(t.max,r);return n.push({value:c,major:Rd(r)}),n}({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&Yn(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":ta(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Wn(t),this._valueRange=Wn(this.max)-Wn(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Wn(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function $d(t){const e=t.ticks;if(e.display&&t.display){const t=ds(e.backdropPadding);return mn(e.font&&e.font.size,Fr.font.size)+t.height}return 0}function Ed(t,e,i,o,n){return t===o||t===n?{start:e-i/2,end:e+i/2}:t<o||t>n?{start:e-i,end:e}:{start:e,end:e+i}}function Td(t,e,i,o,n){const r=Math.abs(Math.sin(i)),s=Math.abs(Math.cos(i));let a=0,l=0;o.start<e.l?(a=(e.l-o.start)/r,t.l=Math.min(t.l,e.l-a)):o.end>e.r&&(a=(o.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),n.start<e.t?(l=(e.t-n.start)/s,t.t=Math.min(t.t,e.t-l)):n.end>e.b&&(l=(n.end-e.b)/s,t.b=Math.max(t.b,e.b+l))}function Pd(t){return 0===t||180===t?"center":t<180?"left":"right"}function Md(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function Dd(t,e,i){return 90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e),t}function Ad(t,e,i,o){const{ctx:n}=t;if(i)n.arc(t.xCenter,t.yCenter,e,0,Cn);else{let i=t.getPointPosition(0,e);n.moveTo(i.x,i.y);for(let r=1;r<o;r++)i=t.getPointPosition(r,e),n.lineTo(i.x,i.y)}}Od.id="logarithmic",Od.defaults={ticks:{callback:Ml.formatters.logarithmic,major:{enabled:!0}}};class Cd extends Sd{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ds($d(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=fn(t)&&!isNaN(t)?t:0,this.max=fn(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/$d(this.options))}generateTickLabels(t){Sd.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const i=bn(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?function(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),o=[],n=[],r=t._pointLabels.length,s=t.options.pointLabels,a=s.centerPointLabels?An/r:0;for(let h=0;h<r;h++){const r=s.setContext(t.getPointLabelContext(h));n[h]=r.padding;const p=t.getPointPosition(h,t.drawingArea+n[h],a),u=hs(r.font),f=(l=t.ctx,c=u,d=pn(d=t._pointLabels[h])?d:[d],{w:Vr(l,c.string,d),h:d.length*c.lineHeight});o[h]=f;const g=Qn(t.getIndexAngle(h)+a),m=Math.round(Gn(g));Td(i,e,g,Ed(m,p.x,f.w,0,180),Ed(m,p.y,f.h,90,270))}var l,c,d;t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){const o=[],n=t._pointLabels.length,r=t.options,s=$d(r)/2,a=t.drawingArea,l=r.pointLabels.centerPointLabels?An/n:0;for(let r=0;r<n;r++){const n=t.getPointPosition(r,a+s+i[r],l),c=Math.round(Gn(Qn(n.angle+Nn))),d=e[r],h=Dd(n.y,d.h,c),p=Pd(c),u=Md(n.x,d.w,p);o.push({x:n.x,y:h,textAlign:p,left:u,top:h,right:u+d.w,bottom:h+d.h})}return o}(t,o,n)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,o){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,o))}getIndexAngle(t){return Qn(t*(Cn/(this._pointLabels.length||1))+qn(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(hn(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(hn(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return function(t,e,i){return us(t,{label:i,index:e,type:"pointLabel"})}(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const o=this.getIndexAngle(t)-Nn+i;return{x:Math.cos(o)*e+this.xCenter,y:Math.sin(o)*e+this.yCenter,angle:o}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:o,bottom:n}=this._pointLabelItems[t];return{left:e,top:i,right:o,bottom:n}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Ad(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:o}=e,n=this._pointLabels.length;let r,s,a;if(e.pointLabels.display&&function(t,e){const{ctx:i,options:{pointLabels:o}}=t;for(let n=e-1;n>=0;n--){const e=o.setContext(t.getPointLabelContext(n)),r=hs(e.font),{x:s,y:a,textAlign:l,left:c,top:d,right:h,bottom:p}=t._pointLabelItems[n],{backdropColor:u}=e;if(!hn(u)){const t=ds(e.backdropPadding);i.fillStyle=u,i.fillRect(c-t.left,d-t.top,h-c+t.width,p-d+t.height)}ts(i,t._pointLabels[n],s,a+r.lineHeight/2,r,{color:e.color,textAlign:l,textBaseline:"middle"})}}(this,n),o.display&&this.ticks.forEach(((t,e)=>{0!==e&&(s=this.getDistanceFromCenterForValue(t.value),function(t,e,i,o){const n=t.ctx,r=e.circular,{color:s,lineWidth:a}=e;!r&&!o||!s||!a||i<0||(n.save(),n.strokeStyle=s,n.lineWidth=a,n.setLineDash(e.borderDash),n.lineDashOffset=e.borderDashOffset,n.beginPath(),Ad(t,i,r,o),n.closePath(),n.stroke(),n.restore())}(this,o.setContext(this.getContext(e-1)),s,n))})),i.display){for(t.save(),r=n-1;r>=0;r--){const o=i.setContext(this.getPointLabelContext(r)),{color:n,lineWidth:l}=o;l&&n&&(t.lineWidth=l,t.strokeStyle=n,t.setLineDash(o.borderDash),t.lineDashOffset=o.borderDashOffset,s=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),a=this.getPointPosition(r,s),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(a.x,a.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const o=this.getIndexAngle(0);let n,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((o,s)=>{if(0===s&&!e.reverse)return;const a=i.setContext(this.getContext(s)),l=hs(a.font);if(n=this.getDistanceFromCenterForValue(this.ticks[s].value),a.showLabelBackdrop){t.font=l.string,r=t.measureText(o.label).width,t.fillStyle=a.backdropColor;const e=ds(a.backdropPadding);t.fillRect(-r/2-e.left,-n-l.size/2-e.top,r+e.width,l.size+e.height)}ts(t,o.label,0,-n,l,{color:a.color})})),t.restore()}drawTitle(){}}Cd.id="radialLinear",Cd.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Ml.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},Cd.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},Cd.descriptors={angleLines:{_fallback:"grid"}};const Id={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},jd=Object.keys(Id);function Ld(t,e){return t-e}function Nd(t,e){if(hn(e))return null;const i=t._adapter,{parser:o,round:n,isoWeekday:r}=t._parseOpts;let s=e;return"function"==typeof o&&(s=o(s)),fn(s)||(s="string"==typeof o?i.parse(s,o):i.parse(s)),null===s?null:(n&&(s="week"!==n||!Un(r)&&!0!==r?i.startOf(s,n):i.startOf(s,"isoWeek",r)),+s)}function Bd(t,e,i,o){const n=jd.length;for(let r=jd.indexOf(t);r<n-1;++r){const t=Id[jd[r]],n=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(n*t.size))<=o)return jd[r]}return jd[n-1]}function zd(t,e,i){if(i){if(i.length){const{lo:o,hi:n}=fs(i,e);t[i[o]>=e?i[o]:i[n]]=!0}}else t[e]=!0}function Wd(t,e,i){const o=[],n={},r=e.length;let s,a;for(s=0;s<r;++s)a=e[s],n[a]=s,o.push({value:a,major:!1});return 0!==r&&i?function(t,e,i,o){const n=t._adapter,r=+n.startOf(e[0].value,o),s=e[e.length-1].value;let a,l;for(a=r;a<=s;a=+n.add(a,1,o))l=i[a],l>=0&&(e[l].major=!0);return e}(t,o,n,i):o}class Hd extends Bl{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const i=t.time||(t.time={}),o=this._adapter=new qa._date(t.adapters.date);Rn(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Nd(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:o,max:n,minDefined:r,maxDefined:s}=this.getUserBounds();function a(t){r||isNaN(t.min)||(o=Math.min(o,t.min)),s||isNaN(t.max)||(n=Math.max(n,t.max))}r&&s||(a(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||a(this.getMinMax(!1))),o=fn(o)&&!isNaN(o)?o:+e.startOf(Date.now(),i),n=fn(n)&&!isNaN(n)?n:+e.endOf(Date.now(),i)+1,this.min=Math.min(o,n-1),this.max=Math.max(o+1,n)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,o="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);const n=this.min,r=function(t,e,i){let o=0,n=t.length;for(;o<n&&t[o]<e;)o++;for(;n>o&&t[n-1]>i;)n--;return o>0||n<t.length?t.slice(o,n):t}(o,n,this.max);return this._unit=e.unit||(i.autoSkip?Bd(e.minUnit,this.min,this.max,this._getLabelCapacity(n)):function(t,e,i,o,n){for(let r=jd.length-1;r>=jd.indexOf(i);r--){const i=jd[r];if(Id[i].common&&t._adapter.diff(n,o,i)>=e-1)return i}return jd[i?jd.indexOf(i):0]}(this,r.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=jd.indexOf(t)+1,i=jd.length;e<i;++e)if(Id[jd[e]].common)return jd[e]}(this._unit):void 0,this.initOffsets(o),t.reverse&&r.reverse(),Wd(this,r,this._majorUnit)}initOffsets(t){let e,i,o=0,n=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),o=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),n=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;o=er(o,0,r),n=er(n,0,r),this._offsets={start:o,end:n,factor:1/(o+1+n)}}_generate(){const t=this._adapter,e=this.min,i=this.max,o=this.options,n=o.time,r=n.unit||Bd(n.minUnit,e,i,this._getLabelCapacity(e)),s=mn(n.stepSize,1),a="week"===r&&n.isoWeekday,l=Un(a)||!0===a,c={};let d,h,p=e;if(l&&(p=+t.startOf(p,"isoWeek",a)),p=+t.startOf(p,l?"day":r),t.diff(i,e,r)>1e5*s)throw new Error(e+" and "+i+" are too far apart with stepSize of "+s+" "+r);const u="data"===o.ticks.source&&this.getDataTimestamps();for(d=p,h=0;d<i;d=+t.add(d,s,r),h++)zd(c,d,u);return d!==i&&"ticks"!==o.bounds&&1!==h||zd(c,d,u),Object.keys(c).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,o){const n=this.options,r=n.time.displayFormats,s=this._unit,a=this._majorUnit,l=s&&r[s],c=a&&r[a],d=i[e],h=a&&c&&d&&d.major,p=this._adapter.format(t,o||(h?c:l)),u=n.ticks.callback;return u?bn(u,[p,e,i],this):p}generateTickLabels(t){let e,i,o;for(e=0,i=t.length;e<i;++e)o=t[e],o.label=this._tickFormatFunction(o.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,o=qn(this.isHorizontal()?e.maxRotation:e.minRotation),n=Math.cos(o),r=Math.sin(o),s=this._resolveTickFontOptions(0).size;return{w:i*n+s*r,h:i*r+s*n}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,o=i[e.unit]||i.millisecond,n=this._tickFormatFunction(t,0,Wd(this,[t],this._majorUnit),o),r=this._getLabelSize(n),s=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return s>0?s:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;const o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(t=0,e=o.length;t<e;++t)i=i.concat(o[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const o=this.getLabels();for(e=0,i=o.length;e<i;++e)t.push(Nd(this,o[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return xs(t.sort(Ld))}}function Fd(t,e,i){let o,n,r,s,a=0,l=t.length-1;i?(e>=t[a].pos&&e<=t[l].pos&&({lo:a,hi:l}=gs(t,"pos",e)),({pos:o,time:r}=t[a]),({pos:n,time:s}=t[l])):(e>=t[a].time&&e<=t[l].time&&({lo:a,hi:l}=gs(t,"time",e)),({time:o,pos:r}=t[a]),({time:n,pos:s}=t[l]));const c=n-o;return c?r+(s-r)*(e-o)/c:r}Hd.id="time",Hd.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class Ud extends Hd{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Fd(e,this.min),this._tableRange=Fd(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,o=[],n=[];let r,s,a,l,c;for(r=0,s=t.length;r<s;++r)l=t[r],l>=e&&l<=i&&o.push(l);if(o.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(r=0,s=o.length;r<s;++r)c=o[r+1],a=o[r-1],l=o[r],Math.round((c+a)/2)!==l&&n.push({time:l,pos:r/(s-1)});return n}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Fd(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Fd(this._table,i*this._tableRange+this._minPos,!0)}}Ud.id="timeseries",Ud.defaults=Hd.defaults;const Vd=[Ua,Cc,vd,Object.freeze({__proto__:null,CategoryScale:wd,LinearScale:kd,LogarithmicScale:Od,RadialLinearScale:Cd,TimeScale:Hd,TimeSeriesScale:Ud})];hc.register(...Vd);const Yd=hc;var qd=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Gd=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Kd=class extends Q{updated(t){t.has("options")&&this.options&&this.loadCanvas().then((()=>{console.log("canvas loaded.")}))}render(){return A`
            <div style="width: 100%; height:100%;">
                <canvas id="bar-chart" width="100%"></canvas>
            </div>`}loadCanvas(){return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const t=yield this.canvas;t&&this.options&&new Yd(t,this.options)}))}};var Xd;Kd.styles=n`
    :host {
      display: block;
    }
  `,qd([at({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("#bar-chart")},enumerable:!0,configurable:!0})}),Gd("design:type",Object)],Kd.prototype,"canvas",void 0),qd([st(),Gd("design:type",Object)],Kd.prototype,"options",void 0),Kd=qd([nt("nidoca-chart-js-wrapper")],Kd),et.getUniqueInstance().initDefaultComponents(),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(t){t.STRING="String",t.NUMBER="Number",t.BOOLEAN="Boolean",t.COMBOBOX="Class",t.ARRAY="Array",t.UNDEFINED="undefined"}(Xd||(Xd={}));class Jd{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?Xd.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?Xd.UNDEFINED:this.getTypeName():Xd.COMBOBOX}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let i=0;i<e.length;i++){const o=e[i];if(o.key==t)return o.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class Zd{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let i=[];if(e&&(e.tagName==t&&i.push(e),e.children.length>0)){const o=null==e?void 0:e.children;for(let e=0;e<o.length;e++)i=i.concat(this.getElementsByTagName(t,o.item(e)))}return i}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed");const e=[];for(const i of Array.from(t.keys()))e.push(new Jd(i,t.get(i)));return e}}class Qd{constructor(t){this.propertyWrapper=t}getInputElement(t){if(null==t)return A``;const e=t.classWrapper;if(null==e)return A``;switch(this.propertyWrapper.getRenderType()){case Xd.STRING:return A`<nidoca-form-text .textType="${pe.TEXT}"
        label="${this.propertyWrapper.propertyName}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
        /></nidoca-form-text>`;case Xd.NUMBER:return A`<nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${pe.NUMBER}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case Xd.BOOLEAN:return A`<nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case Xd.COMBOBOX:return A` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${de.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter((t=>this.propertyWrapper.getType()[t]==e.instance[this.propertyWrapper.propertyName]))[0]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(i.target.getOutputData().value),t.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case Xd.ARRAY:return A`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${de.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${e.instance[this.propertyWrapper.propertyName]}"
            @input="${t=>{e.instance[this.propertyWrapper.propertyName]=t.target.getOutputData().value,e.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return A``}}getAsHtml(t){switch(this.propertyWrapper.getConverterTypeName()){case Xd.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case Xd.ARRAY:return"";case Xd.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case Xd.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case Xd.STRING:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case Xd.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getConverterTypeName()){case Xd.COMBOBOX:case Xd.ARRAY:return"";case Xd.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getConverterTypeName()){case Xd.COMBOBOX:case Xd.ARRAY:return"";case Xd.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class th{constructor(t,e){this.parent=t,this.classWrapper=e}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`\n<${this.classWrapper.getTagName()}\n${this.classWrapper.getProperties().map((t=>`.${t.propertyName}="\${this.${t.propertyName}}"\n`)).join("")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(t){return t.indexOf(">")>-1&&(t=t.substr(t.indexOf(">")+1,t.length)),t}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(A`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new Qd(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}var eh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ih=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let oh=class extends Q{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(t){t.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new th(this,new Zd(this.element)),this.requestUpdate())}render(){var t,e,i,o,n,r,s;return A` <nidoca-section .theme="${it.PRIMARY}">
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
      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements()[0];i instanceof HTMLElement&&(this.element=i)}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t.propertyWrapper.propertyName),i.push(t.propertyWrapper.getTypeName()),i.push(t.propertyWrapper.getConverterTypeName()),i.push(t.propertyWrapper.getRenderType()),e.push(i),i})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}};oh.styles=n`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `,eh([st({type:Array}),ih("design:type",Array)],oh.prototype,"customEventNames",void 0),eh([st({type:Object}),ih("design:type",Object)],oh.prototype,"element",void 0),oh=eh([nt("webcomponent-viewer")],oh);let nh=class extends Q{render(){return A`
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
    `}};nh.styles=n``,nh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-main")],nh);var rh=function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))};class sh{constructor(t){this.host=t}persist(t,e){return rh(this,void 0,void 0,(function*(){const i=this.host.concat(t),o=yield this.request(i,"POST","application/json; charset=utf-8",e);return console.log("persist item, value: %s",JSON.stringify(e)),this.parse(yield o.text())[0]}))}update(t,e,i){return rh(this,void 0,void 0,(function*(){const o=this.host.concat(t).concat("?id=eq.".concat(e));console.debug("update item value: %s",JSON.stringify(i));const n=yield this.request(o,"PUT","application/json; charset=utf-8",i);return console.log("item updated ? ".concat(String(n.status))),200==n.status}))}delete(t,e){return rh(this,void 0,void 0,(function*(){const i=this.host.concat(t).concat("?id=eq.").concat(e),o=yield this.request(i,"DELETE","application/json; charset=utf-8",void 0);return console.debug("delete item for id= %s",e),200==o.status}))}search(t,e){return rh(this,void 0,void 0,(function*(){const i=this.host.concat(t).concat(e),o=yield this.request(i,"GET","application/json; charset=utf-8",void 0);return this.parse(yield o.text())}))}request(t,e,i,o){return rh(this,void 0,void 0,(function*(){const n={"Accept-Encoding":"*"};n["Content-Type"]=i,n.Prefer="return=representation";const r={headers:n,method:e,body:JSON.stringify(o)},s=yield fetch(t,r);return console.info("response status: ",s.status),s}))}parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let t=0;t<e.length;t++)if(e[t].exec(i)){i=new Date(i);break}return i}))}}var ah=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},lh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ch=class extends Q{constructor(){super(...arguments),this.client=new sh("http://89.58.33.189")}firstUpdated(){this.client.search("/vertrag","").then((t=>{const e=t.filter((t=>t.kosten>0)).sort(((t,e)=>t.kosten/t.abrechnungsperiode>e.kosten/e.abrechnungsperiode?-1:1));let i=0;e.forEach((t=>{i+=t.kosten/t.abrechnungsperiode})),console.log(i),this.options={type:"bar",data:{labels:e.map((t=>t.name)),datasets:[{indexAxis:"y",label:"Kosten pro Monat",data:e.map((t=>t.kosten/t.abrechnungsperiode)),backgroundColor:e.map((()=>getComputedStyle(document.body).getPropertyValue("--app-color-background"))),borderWidth:0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}}}}})),this.client.search("/vertrag_kategorie","").then((t=>{this.options2={type:"pie",data:{labels:t.map((t=>t.kategorie)),datasets:[{label:"My First Dataset",data:t.map((t=>t.kosten)),backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]}}}))}render(){return A`
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
    `}};ch.styles=n``,ah([st(),lh("design:type",Object)],ch.prototype,"options",void 0),ah([st(),lh("design:type",Object)],ch.prototype,"options2",void 0),ch=ah([nt("nidoca-page-dashboard")],ch);var dh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let hh=class extends Q{constructor(){super(...arguments),this.elementName="nidoca-dialog"}render(){return A`
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
    `}};hh.styles=n``,dh([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],hh.prototype,"elementName",void 0),hh=dh([nt("nidoca-page-playground")],hh);let ph=class extends Q{render(){return A`
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
    `}};ph.styles=n``,ph=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-components")],ph);let uh=class extends Q{render(){return A`
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
              <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="${$i.BLANK}"
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
            <nidoca-link href="https://www.e-recht24.de/impressum-generator.html" targetType="${$i.BLANK}"
              >https://www.e-recht24.de/impressum-generator.html</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </nidoca-layout-spacer>

      <div style="padding-top:var(--space-8); padding-bottom:var(--space-8);">
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Material Icons">
            <nidoca-link href="https://fonts.google.com/icons" targetType="${$i.BLANK}"
              >https://fonts.google.com/icons</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
        <nidoca-section style="width:50%;">
          <nidoca-article title="Google Fonts">
            <nidoca-link href=" https://fonts.google.com/" targetType="${$i.BLANK}">
              https://fonts.google.com/</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </div>
    `}};uh.styles=n``,uh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-imprint")],uh);class fh{constructor(){this.id=0,this.name="",this.beschreibung="",this.internetseite="",this.benutzername="",this.adresse="",this.email="",this.iban="",this.vertragsnehmer="",this.kategorie="",this.vertragsbeginn=new Date,this.vertragsende=new Date,this.kuendigungsfrist=0,this.vertragsnummer="",this.ansprechpatrtner="",this.supporttelefon="",this.kosten=0,this.abrechnungsperiode=0,this.aktiv=!1,this.gekuendigt=!1}}class gh extends class{fromModel(t){const e=[];return Object.keys(t).map((i=>{const o=typeof t[i];e.push({key:i,label:i.charAt(0).toUpperCase().concat(i.slice(1)),type:"object"==o?t[i]instanceof Date?"date":"object":"boolean"==o?"checkbox":o,required:!1,step:"number"==o?"any":void 0})})),e}}{constructor(){super(...arguments),this.postgrestClient=new sh("http://89.58.33.189")}search(t){return function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return this.postgrestClient.search("/vertrag","?offset=0&limit=100&order=name.asc&name=like.*".concat(t).concat("*"))}))}delete(t){return this.postgrestClient.delete("/vertrag",t.id)}persist(t){return delete t.id,this.postgrestClient.persist("/vertrag",t)}update(t){return this.postgrestClient.update("/vertrag",t.id,t)}getProperties(){const t=this.fromModel(new fh);return t.forEach((t=>{"adresse"!=t.key&&"beschreibung"!=t.key||(t.type="textarea"),"internetseite"==t.key&&(t.type="url"),"name"==t.key&&(t.required=!0)})),t}getPrimaryIdKey(){return"id"}getPrimaryText(t){return t.name}getSecondaryText(t){return t.beschreibung}}let mh=class extends Q{render(){return A` <nidoca-generic-crud .controller="${new gh}"></nidoca-generic-crud> `}};mh.styles=n``,mh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-list")],mh);var yh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},bh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let xh=class extends Q{constructor(){super(),this.cssVars=[],this.cssVars=((t=document.styleSheets)=>{const e=[];return Array.from(t).forEach((t=>{Array.from(t.cssRules).forEach((t=>{if(!t||!t.style)return;const i=t.style;Array.from(i).forEach((t=>{t.startsWith("--")&&-1==e.indexOf(t)&&e.push(t)}))}))})),e})()}render(){return A`
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
    `}};xh.styles=n``,yh([st({type:Array}),bh("design:type",Array)],xh.prototype,"cssVars",void 0),xh=yh([nt("nidoca-page-settings"),bh("design:paramtypes",[])],xh);let vh=class extends Q{render(){return A``}};vh.styles=n``,vh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-privacy")],vh);let wh=class extends Q{render(){return A``}};wh.styles=n``,wh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-page-terms-of-use")],wh);class _h{constructor(){this.listeners=[],window.onpopstate=t=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(t.state)),this.notifyListeners()},document.addEventListener("click",(t=>{if(!this.shouldIgnoreEvent(t)){const e=this.getAnchor(t);e&&!this.shouldIgnoreAnchor(e)&&(t.preventDefault(),e.hash.length>0&&this.navigate(e.hash))}}))}static getUniqueInstance(){return _h.uniqueInstance||(_h.uniqueInstance=new _h),_h.uniqueInstance}subscribe(t){console.trace("subscribe router listener"),this.listeners.push(t)}back(){history.back()}forward(){history.forward()}navigate(t,e=null){-1==t.indexOf("#")&&(t="#".concat(t)),console.trace("navigate to: %s",t),null!=e&&console.trace("state: %s",JSON.stringify(e)),document.location.hash!==t?(history.pushState(e,"",t),this.notifyListeners()):console.trace("you are already on page: "+t)}getCurrentState(){return history.state}getStateProperty(t){const e=this.getCurrentState();return null!=e?e[t]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const t=this.getCurrentPage();this.listeners.forEach((e=>e.routeChanged(t)))}shouldIgnoreEvent(t){return t.defaultPrevented||0!==t.button||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey}getAnchor(t){for(const e of t.composedPath?t.composedPath():[])if(this.isAnchor(e))return e;let e=t.target;for(;e&&!this.isAnchor(e);)e=e.parentNode;return e&&this.isAnchor(e)?e:null}isAnchor(t){return t.nodeName&&"a"===t.nodeName.toLowerCase()}shouldIgnoreAnchor(t){return!(!t.target||"_self"===t.target.toLowerCase())||(!!t.hasAttribute("download")||(t.origin||this.getAnchorOrigin(t))!==window.location.origin)}getAnchorOrigin(t){const e=t.port,i=t.protocol;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}}let Sh=class extends Q{render(){return A`
      <nidoca-list slot="sidebar">
        <nidoca-list-item
          icon="home"
          text="Home"
          href="#main"
          .rendered="${!0}"
          @click="${()=>_h.getUniqueInstance().navigate("main")}"
        ></nidoca-list-item>
        <nidoca-list-item
          icon="home"
          text="Gallery"
          href="#main"
          .rendered="${!0}"
          @click="${()=>_h.getUniqueInstance().navigate("gallery")}"
        ></nidoca-list-item>
      </nidoca-list>
    `}};Sh.styles=n``,Sh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([nt("nidoca-elevation-settings")],Sh);var kh=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Rh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oh=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Anmeldung",this.usernameLabel="Benutzername/Email",this.passwordLabel="Passwort",this.buttonLabel="Anmelden"}render(){return A`
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
    `}login(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-login-submit",{detail:this.formComponent.getOutputData(),bubbles:!1,composed:!1}))}};Oh.styles=n`
    :host {
      display: block;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,kh([st({type:it,converter:String}),Rh("design:type",Object)],Oh.prototype,"theme",void 0),kh([st({type:String,converter:String}),Rh("design:type",String)],Oh.prototype,"label",void 0),kh([st({type:String,converter:String}),Rh("design:type",String)],Oh.prototype,"usernameLabel",void 0),kh([st({type:String,converter:String}),Rh("design:type",String)],Oh.prototype,"passwordLabel",void 0),kh([st({type:String,converter:String}),Rh("design:type",String)],Oh.prototype,"buttonLabel",void 0),kh([lt("#authenitcate-form"),Rh("design:type",Object)],Oh.prototype,"formComponent",void 0),Oh=kh([nt("nidoca-form-login")],Oh);var $h=function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))};const{fetch:Eh}=window;window.fetch=(t,e)=>$h(void 0,void 0,void 0,(function*(){const i=Th.getToken();(yield Th.isLoggedIn())&&e&&e.headers&&i&&(e.headers.Authorization=`Bearer ${i.access_token}`);const o=yield Eh(t,e);return o.clone().json().catch((t=>console.error(t))),o}));class Th{static init(t,e){return $h(this,void 0,void 0,(function*(){const i=yield fetch(t,{headers:{},method:"GET",body:void 0});return Th.setIssuer(yield i.json()),Th.setClientId(e),200==i.status}))}static setClientId(t){sessionStorage.setItem(Th.client_id_key,t)}static getClientId(){return sessionStorage.getItem(Th.client_id_key)||""}static setIssuer(t){sessionStorage.setItem(Th.issuer_key,JSON.stringify(t))}static getIssuer(){const t=sessionStorage.getItem(Th.issuer_key);if(t)return Th.parse(t)}static setToken(t){t.expires_in_date=new Date((new Date).getTime()+t.expires_in),t.refresh_expires_in_date=new Date((new Date).getTime()+t.refresh_expires_in),sessionStorage.setItem(Th.token_key,JSON.stringify(t))}static getToken(){const t=sessionStorage.getItem(Th.token_key);if(t)return Th.parse(t)}static parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let t=0;t<e.length;t++)if(e[t].exec(i)){i=new Date(i);break}return i}))}static isLoggedIn(){return $h(this,void 0,void 0,(function*(){const t=this.getToken();if(t&&t.expires_in_date.getTime()-1>(new Date).getTime())return!0;const e=Th.getIssuer();if(e&&t){const i=yield Eh(e.token_endpoint,{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:new URLSearchParams({client_id:Th.getClientId(),grant_type:"refresh_token",refresh_token:t.refresh_token})});return Th.setToken(yield i.json()),200==i.status}return!1}))}static login(t,e){return $h(this,void 0,void 0,(function*(){console.log(`login ${t}`);const i=Th.getIssuer();if(i){const o=yield Eh(i.token_endpoint,{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:new URLSearchParams({client_id:Th.getClientId(),grant_type:"password",username:t,password:e})});if(200==o.status){const t=yield o.json();this.setToken(t)}return console.info("login response status: ",o.status),200==o.status}return!1}))}}Th.token_key="token",Th.issuer_key="issuer",Th.client_id_key="client_id";var Ph=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Mh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Dh=class extends Q{constructor(){super(),this.showPopup=!1,this.popupContent=A``,this.navigationClosed=!1,this.prominent=!1,this.currentPage=A` <nidoca-page-main></nidoca-page-main>`,this.elevationShow=!1,Th.init("https://89.58.33.189/auth/realms/master/.well-known/openid-configuration","master-realm").then((t=>{console.log(`nidoca oauth client init ok ? ${t}`)})),_h.getUniqueInstance().subscribe(this),this.routeChanged(_h.getUniqueInstance().getCurrentPage())}routeChanged(t){switch(console.log("enter new page, url: %s",t),t){case"dashboard":this.currentPage=A` <nidoca-page-dashboard></nidoca-page-dashboard>`;break;case"playground":this.currentPage=A` <nidoca-page-playground></nidoca-page-playground>`;break;case"components":this.currentPage=A` <nidoca-page-components></nidoca-page-components>`;break;case"list":this.currentPage=A` <nidoca-page-list></nidoca-page-list>`;break;case"settings":this.currentPage=A` <nidoca-page-settings></nidoca-page-settings>`;break;case"imprint":this.currentPage=A` <nidoca-page-imprint></nidoca-page-imprint>`;break;case"terms-of-use":this.currentPage=A` <nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"privacy":this.currentPage=A` <nidoca-page-privacy></nidoca-page-privacy>`;break;default:this.currentPage=A` <nidoca-page-main></nidoca-page-main>`}}render(){return A`
            <nidoca-template .prominent="${this.prominent}" .navigationClosed="${this.navigationClosed}">
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>

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
                            @nidoca-form-login-submit="${t=>function(t,e,i,o){return new(i||(i=Promise))((function(n,r){function s(t){try{l(o.next(t))}catch(t){r(t)}}function a(t){try{l(o.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((o=o.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){(yield Th.login(t.detail.jsonObject.username,t.detail.jsonObject.password))&&(this.showPopup=!1)}))}"
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
                        slot="left"
                        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
                >
                    <nidoca-text-body>Dominik Bruhn</nidoca-text-body>
                    <nidoca-text-caption>Softwareentwickler</nidoca-text-caption>
                </nidoca-avatar>

                <nidoca-menu slot="left">
                    <nidoca-menu-item text="Start" @click="${()=>_h.getUniqueInstance().navigate("main")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Dashboard"
                                      @click="${()=>_h.getUniqueInstance().navigate("dashboard")}">
                    </nidoca-menu-item>

                    <nidoca-menu-area text="Framework"></nidoca-menu-area>

                    <nidoca-menu-item text="Spielwiese"
                                      @click="${()=>_h.getUniqueInstance().navigate("playground")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Liste" @click="${()=>_h.getUniqueInstance().navigate("list")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item
                            text="Komponenten"
                            @click="${()=>_h.getUniqueInstance().navigate("components")}"
                    >
                    </nidoca-menu-item>

                    <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>

                    <nidoca-menu-item text="Impressum"
                                      @click="${()=>_h.getUniqueInstance().navigate("imprint")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Datenschutz"
                                      @click="${()=>_h.getUniqueInstance().navigate("privacy")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item
                            text="Nutzungsbedingungen"
                            @click="${()=>_h.getUniqueInstance().navigate("terms-of-use")}"
                    >
                    </nidoca-menu-item>

                    <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>

                    <nidoca-menu-item
                            icon="home"
                            text="Einstellungen"
                            @click="${()=>_h.getUniqueInstance().navigate("settings")}"
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
        `}};Ph([st({type:Boolean}),Mh("design:type",Boolean)],Dh.prototype,"showPopup",void 0),Ph([st({type:Object}),Mh("design:type",Object)],Dh.prototype,"popupContent",void 0),Ph([st({type:Boolean}),Mh("design:type",Boolean)],Dh.prototype,"navigationClosed",void 0),Ph([st({type:Boolean}),Mh("design:type",Boolean)],Dh.prototype,"prominent",void 0),Ph([st({type:Object}),Mh("design:type",Object)],Dh.prototype,"currentPage",void 0),Ph([st({type:Boolean}),Mh("design:type",Boolean)],Dh.prototype,"elevationShow",void 0),Ph([st({type:Object}),Mh("design:type",Object)],Dh.prototype,"elevationAssociatedElement",void 0),Ph([st({type:Object}),Mh("design:type",Object)],Dh.prototype,"elevationContentElement",void 0),Dh=Ph([nt("nidoca-app"),Mh("design:paramtypes",[])],Dh)})();