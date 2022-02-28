/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class n{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=(t,...i)=>{const o=1===t.length?t[0]:i.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new n(o,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",e))(i)})(t):t;var s;const a=window.trustedTypes,l=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var n,o;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const s=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:d.toAttribute)(e,i.type);this._$Ei=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Ei=null}}_$AK(t,e){var i,n,o;const r=this.constructor,s=r._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=r.getPropertyOptions(s),a=t.converter,l=null!==(o=null!==(n=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.2.0");const g=globalThis.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,b="?"+y,x=`<${b}>`,v=document,w=(t="")=>v.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,S=t=>{var e;return k(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,$=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,M=/"/g,T=/^(?:script|style|textarea)$/i,A=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),D=A(1),C=(A(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),I=new WeakMap,L=v.createTreeWalker(v,129,null,!1),N=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",s=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===R?"!--"===l[1]?s=O:void 0!==l[1]?s=$:void 0!==l[2]?(T.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=E):void 0!==l[3]&&(s=E):s===E?">"===l[0]?(s=null!=o?o:R,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?E:'"'===l[3]?M:P):s===M||s===P?s=E:s===O||s===$?s=R:(s=E,o=void 0);const h=s===E&&t[e+1].startsWith("/>")?" ":"";r+=s===R?i+x:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+y+h):i+y+(-2===c?(n.push(void 0),e):h)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,n]};class B{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const s=t.length-1,a=this.parts,[l,c]=N(t,e);if(this.el=B.createElement(l,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=L.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?U:"?"===e[1]?Y:"@"===e[1]?q:H})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(T.test(n.tagName)){const t=n.textContent.split(y),e=t.length-1;if(e>0){n.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],w()),L.nextNode(),a.push({type:2,index:++o});n.append(t[e],w())}}}else if(8===n.nodeType)if(n.data===b)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(y,t+1));)a.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,e){const i=v.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,n){var o,r,s,a;if(e===C)return e;let l=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const c=_(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(s=(a=i)._$Cl)&&void 0!==s?s:a._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,n)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:v).importNode(i,!0);L.currentNode=o;let r=L.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new F(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new K(r,this,t)),this.v.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(r=L.nextNode(),s++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,n){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),_(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==C&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):S(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==j&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S(v.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=B.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new W(o,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new B(t)),e}A(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new F(this.M(w()),this.M(w()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,i,n,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=z(this,t,e,0),r=!_(t)||t!==this._$AH&&t!==C,r&&(this._$AH=t);else{const n=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=z(this,n[i+s],e,s),a===C&&(a=this._$AH[s]),r||(r=!_(a)||a!==this._$AH[s]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}r&&!n&&this.k(t)}k(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class U extends H{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===j?void 0:t}}const V=g?g.emptyScript:"";class Y extends H{constructor(){super(...arguments),this.type=4}k(t){t&&t!==j?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class q extends H{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:j)===C)return;const n=this._$AH,o=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==j&&(n===j||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const G={P:"$lit$",V:y,L:b,I:1,N,R:W,D:S,j:z,H:F,O:H,F:Y,B:q,W:U,Z:K},X=window.litHtmlPolyfillSupport;var J,Z;null==X||X(B,F),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.1.1");class Q extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let s=r._$litPart$;if(void 0===s){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=s=new F(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return C}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.1.1");class et{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){this._registeredElementsMap.set("nidoca-form-upload",D`
                <nidoca-form-upload theme="primary"></nidoca-form-upload>`),this.registeredElementsMap.set("nidoca-list",D`
                <nidoca-list theme="secondary" selectionMode>
                    <nidoca-list-section>A</nidoca-list-section>
                    <nidoca-list-item primaryText="List Item"
                                      secondaryText="List Item Secondary Text"></nidoca-list-item>
                    <nidoca-list-item primaryText="List Item"
                                      secondaryText="List Item Secondary Text"></nidoca-list-item>
                    <nidoca-list-item primaryText="List Item"
                                      secondaryText="List Item Secondary Text"></nidoca-list-item>
                </nidoca-list>`),this._registeredElementsMap.set("nidoca-form-contact",D`
                <nidoca-form-contact
                        @nidoca-form-contact-submit="${t=>alert(JSON.stringify(t.detail))}"
                        theme="${it.BACKGROUND}"
                ></nidoca-form-contact>`),this._registeredElementsMap.set("nidoca-form-change-password",D`
                <nidoca-form-change-password
                        theme="${it.SECONDARY}"
                        @nidoca-form-change-password-submit="${t=>alert(JSON.stringify(t.detail))}"
                ></nidoca-form-change-password>`),this._registeredElementsMap.set("nidoca-form-register",D`
                <nidoca-form-register
                        @nidoca-form-register-submit="${t=>alert(JSON.stringify(t.detail))}"
                        theme="${it.PRIMARY}"
                ></nidoca-form-register>`),this._registeredElementsMap.set("nidoca-form-reset-password",D`
                <nidoca-form-reset-password
                        @nidoca-form-reset-password-submit="${t=>alert(JSON.stringify(t.detail))}"
                        theme="${it.PRIMARY}"
                ></nidoca-form-reset-password>`),this._registeredElementsMap.set("nidoca-form-newsletter",D`
                <nidoca-form-newsletter
                        @nidoca-form-newsletter-submit="${t=>alert(JSON.stringify(t.detail))}"
                        theme="${it.SURFACE}"
                ></nidoca-form-newsletter>`),this._registeredElementsMap.set("nidoca-form-login",D`
                <nidoca-form-login
                        @nidoca-form-login-submit="${t=>alert(JSON.stringify(t.detail))}"
                ></nidoca-form-login>`),this.registeredElementsMap.set("nidoca-article",D`
                <nidoca-article
                        overline="Ut enim ad minim veniam"
                        title="Ut enim ad minim veniam"
                        summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                >
                    <nidoca-button theme="${it.SECONDARY}" .buttonType="${Ct.OUTLINED}"
                    >Aktion
                    </nidoca-button>
                </nidoca-article>`),this.registeredElementsMap.set("nidoca-text",D`
            <nidoca-text>Ut enim ad minim veniam.</nidoca-text>`);const t=new ci;t.src="http://nidoca.eu/img/DSC02586.jpg",t.width="100%",t.height="100%",this.registeredElementsMap.set("nidoca-img",D`${t}`);const e=new pi;e.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",D`${e}`),this.registeredElementsMap.set("nidoca-search-bar",D`
                <nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`),this.registeredElementsMap.set("nidoca-avatar",D`
                <nidoca-avatar
                        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
                        primaryText="Dominik Bruhn"
                        description="Softwareentwickler"
                >
                </nidoca-avatar>`);const i=new Dt;i.style.padding="var(--space-6)",this.registeredElementsMap.set("nidoca-progress",D`${i}`);const n=new ti;n.style.padding="var(--space-6)",n.icon="home",n.primaryText="Home Icon",n.clickable=!0,n.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",D`${n}`),this._registeredElementsMap.set("nidoca-menu",D`
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
                </nidoca-menu>`),this._registeredElementsMap.set("nidoca-accordion",D`
                <nidoca-accordion .theme="${it.PRIMARY}">
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
                </nidoca-accordion>`),this._registeredElementsMap.set("nidoca-button",D`
                <nidoca-button leadingIcon="home" buttonType="CONTAINED">Mein Button</nidoca-button>`),this._registeredElementsMap.set("nidoca-card",D`
            <nidoca-card></nidoca-card>`),this._registeredElementsMap.set("nidoca-chip",D`
            <nidoca-chip>Lorem Ipsum</nidoca-chip>`),this._registeredElementsMap.set("nidoca-code",D`
            <nidoca-code>Lorem Ipsum</nidoca-code>`),this._registeredElementsMap.set("nidoca-dialog-action",D`
            <nidoca-dialog-action></nidoca-dialog-action>`),this._registeredElementsMap.set("nidoca-dialog",D`
                <nidoca-dialog>
                    <nidoca-button
                            @click="${t=>{t.target.parentNode.show=!1,t.target.getRootNode().host.requestUpdate()}}"
                    >Schließen
                    </nidoca-button>
                </nidoca-dialog>`),this._registeredElementsMap.set("nidoca-form-combobox",D`
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
                ></nidoca-form-combobox>`),this._registeredElementsMap.set("nidoca-form-date",D`
                <nidoca-form-date
                        theme="background"
                        label="Geburtstag"
                        placeholder="Platzhalter"
                        trailingIcon="home"
                        infoText="Info"
                        warningText="Warnung"
                        errorText="Fehler"
                        name="text"
                ></nidoca-form-date>`),this._registeredElementsMap.set("nidoca-form-switch",D`
            <nidoca-form-switch></nidoca-form-switch>`),this._registeredElementsMap.set("nidoca-form-text",D`
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
            `),this._registeredElementsMap.set("nidoca-form-textarea",D`
                <nidoca-form-textarea
                        theme="secondary"
                        label="Mein Textfeld"
                        placeholder="Platzhalter"
                        infoText="Info"
                        warningText="Warnung"
                        errorText="Fehler"
                        name="text"
                ></nidoca-form-textarea>`),this._registeredElementsMap.set("nidoca-form-captcha",D`
                <nidoca-form-captcha
                        theme="primary"
                        label="Wie lautet das Ergebnis von:"
                        name="captcha"
                ></nidoca-form-captcha>`),this._registeredElementsMap.set("nidoca-gallery",D`
                <nidoca-gallery>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                    <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
                </nidoca-gallery>`),this._registeredElementsMap.set("nidoca-link",D`
            <nidoca-link></nidoca-link>`),this._registeredElementsMap.set("nidoca-ripple",D`
            <nidoca-ripple></nidoca-ripple>`),this._registeredElementsMap.set("nidoca-tabs",D`
                <nidoca-tabs tabIndex="0">
                    <nidoca-tab slot="tab">Tab 1</nidoca-tab>
                    <nidoca-tab slot="tab">Tab 2</nidoca-tab>
                    <nidoca-tab slot="tab">Tab 3</nidoca-tab>
                    <nidoca-tab-content slot="tabContent"><nidoca-text>Tab Inhalt 1</nidoca-text></nidoca-tab-content>
                    <nidoca-tab-content slot="tabContent"><nidoca-text>Tab Inhalt 2</nidoca-text></nidoca-tab-content>
                    <nidoca-tab-content slot="tabContent"><nidoca-text>Tab Inhalt 3</nidoca-text></nidoca-tab-content>
                </nidoca-tabs>
            `),this._registeredElementsMap.set("nidoca-table",D`
            <nidoca-table></nidoca-table>`),this._registeredElementsMap.set("nidoca-top-app-bar",D`
                <nidoca-top-app-bar style="min-height: 48px;" .theme="${it.PRIMARY}">
                    <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
                    <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
                    <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
                    <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert"
                                 clickable></nidoca-icon>

                    <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
                </nidoca-top-app-bar>`),this._registeredElementsMap.set("nidoca-upload",D`
            <nidoca-upload></nidoca-upload>`),this._registeredElementsMap.set("nidoca-wizard",D`
            <nidoca-wizard></nidoca-wizard>`),this._registeredElementsMap.set("nidoca-icon-with-description",D`
                <nidoca-icon-with-description title="Komponentenbibliothek" icon="local_library">
                    Die Nidoca Webcomponents ist eine Sammlung von Webkomponenten mit über
                    ${et.getUniqueInstance().registeredElementNames.length} Komponenten. Diese sind für den direkten
                    Einsatz in
                    deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die Komponenten können dank der
                    Webcomponent
                    Technologie überall in andere Frameworks eingebaungen werden.
                </nidoca-icon-with-description>`)}static getUniqueInstance(){return et.uniqueInstance||(et.uniqueInstance=new et),et.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const t=[];for(const e of this.registeredElementsMap.keys())t.push(e);return t}registerElementName(t){console.log(`register element: ${t}`);const e=document.createElement(t);this.registeredElementsMap.set(t,D`${e}`)}}class it{static getStyle(t){return t?D`
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
                    </style>`:D``}static getOposite(t){return t==it.BACKGROUND?it.SURFACE:t==it.PRIMARY||t==it.PRIMARY?it.SECONDARY:t==it.SECONDARY?it.PRIMARY:it.BACKGROUND}getParentTheme(t){let e=t;for(;null!=e;){if(null!=e.theme)return e.theme;e=e.parentElement}}}it.PRIMARY="primary",it.SECONDARY="secondary",it.SURFACE="surface",it.BACKGROUND="background";class nt{constructor(t,e,i=10240){this.key=t,this.minWidth=e,this.maxWidth=i}static applyDevices(t,e){for(let i=0;i<e.length;i++)if(e[i]==this.getCurrentScreen())return t;return""}static getCurrentScreen(){let t=null;return[nt.MOBILE,nt.TABLET,nt.DESKTOP].forEach((e=>{(null==e.minWidth||e.minWidth<window.innerWidth)&&(null==e.maxWidth||e.maxWidth>window.innerWidth)&&(t=e)})),t}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}nt.MOBILE=new nt("MOBILE",0,640),nt.TABLET=new nt("TABLET",641,1007),nt.DESKTOP=new nt("DESKTOP",1008),nt.WIDE_DESKTOP=new nt("WIDE_DESKTOP",1008);const ot=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)}const at=({finisher:t,descriptor:e})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,r=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(r.finisher=function(e){t(e,n)}),r}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(o,n)}};function lt(t,e){return at({descriptor:i=>{const n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;var dt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let pt=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return D`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?D` <slot></slot>`:D``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};pt.styles=o`
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
  `,dt([st({type:String}),ht("design:type",String)],pt.prototype,"header",void 0),dt([st({type:Boolean}),ht("design:type",Boolean)],pt.prototype,"opened",void 0),pt=dt([ot("nidoca-accordion-item")],pt);var ut,ft=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},gt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.SINGLE="SINGLE",t.MULTI="MULTI"}(ut||(ut={}));let mt=class extends Q{constructor(){super(...arguments),this.theme=it.SURFACE,this.accordionType=ut.SINGLE}render(){return D`
      ${it.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){const e=t.detail;switch(this.accordionType){case ut.SINGLE:if(null!=this.accordionSlot){const t=this.accordionSlot.assignedElements();for(let i=0;i<t.length;i++){const n=t[i];n instanceof pt&&n!=e&&(n.opened=!1)}}case ut.MULTI:}t.stopPropagation()}};mt.styles=o`
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
  `,ft([st({type:it,converter:String}),gt("design:type",String)],mt.prototype,"theme",void 0),ft([st({type:ut,converter:String}),gt("design:type",String)],mt.prototype,"accordionType",void 0),ft([lt("#accordionSlot"),gt("design:type",Object)],mt.prototype,"accordionSlot",void 0),mt=ft([ot("nidoca-accordion")],mt);var yt,bt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},xt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(yt||(yt={}));let vt=class extends Q{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return D`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${ni.NONE}"
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

          ${this.isLast?D``:D`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"
          ><slot></slot>
        </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==yt.COMPLETED?"var(--app-color-primary)":t==yt.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==yt.FINISH?"var(--app-color-success)":t==yt.COMPLETED?"var(--mdc-theme-on-primary)":t==yt.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};vt.styles=o`
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
  `,bt([st({type:String}),xt("design:type",String)],vt.prototype,"icon",void 0),bt([st({type:String}),xt("design:type",String)],vt.prototype,"primaryText",void 0),bt([st({type:Number}),xt("design:type",Object)],vt.prototype,"state",void 0),bt([st({type:Boolean}),xt("design:type",Boolean)],vt.prototype,"isLast",void 0),vt=bt([ot("nidoca-wizard-step")],vt);var wt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let _t=class extends Q{render(){return D`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements();let n=0;for(let t=0;t<i.length;t++){const e=i[t];e instanceof vt&&(e.index=t,e.state==yt.CURRENT&&(n=t),e.index==i.length-1&&(e.isLast=!0))}this.changeState(n)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];n instanceof vt&&void 0!==n.index&&(n.index<t?n.state=yt.COMPLETED:n.index==t?n.state=yt.CURRENT:n.state=yt.OPEN)}}}};_t.styles=o``,wt([lt("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],_t.prototype,"wizardSlot",void 0),_t=wt([ot("nidoca-wizard")],_t);var kt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let St=class extends Q{constructor(){super(...arguments),this.clickable=!0}render(){return D`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};St.styles=o`
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
  `,kt([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],St.prototype,"clickable",void 0),St=kt([ot("nidoca-chip")],St);var Rt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Ot=class extends Q{constructor(){super(...arguments),this.code=""}render(){return D`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};Ot.styles=o`
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
  `,Rt([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ot.prototype,"code",void 0),Ot=Rt([ot("nidoca-code")],Ot);var $t=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Et=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Pt=class extends Q{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const i=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();i&&(i.top>t.clientY||i.right<t.clientX||i.left>t.clientX||i.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?D`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:D``}calculatePositionStyle(t){let e="";if(t){const i=t.getBoundingClientRect();i.right>window.innerWidth/2?e+=`right:${window.innerWidth-i.right}px;`:e+=`left:${i.left}px;`,i.top>window.innerHeight/2?e+=`bottom:${i.height+window.innerHeight-i.top}px;`:e+=`top:${i.bottom}px;`}return e}};Pt.styles=o`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,$t([st({type:Boolean}),Et("design:type",Boolean)],Pt.prototype,"show",void 0),$t([st({type:Object}),Et("design:type",Object)],Pt.prototype,"associatedElement",void 0),Pt=$t([ot("nidoca-elevation"),Et("design:paramtypes",[])],Pt);var Mt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Tt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class At{}At.PROGRESS="PROGRESS",At.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Dt=class extends Q{constructor(){super(...arguments),this.progressType=At.PROGRESS}render(){return D` <style>
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

      <progress class="${this.progressType}"></progress>`}};Dt.styles=o``,Mt([st({type:it,converter:String}),Tt("design:type",Object)],Dt.prototype,"theme",void 0),Mt([st({type:At,converter:String}),Tt("design:type",String)],Dt.prototype,"progressType",void 0),Dt=Mt([ot("nidoca-progress")],Dt);var Ct,jt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},It=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.CONTAINED="CONTAINED",t.OUTLINED="OUTLINED",t.TEXT="TEXT"}(Ct||(Ct={}));let Lt=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.buttonType=Ct.CONTAINED,this.leadingIcon="",this.text=""}render(){return D`
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
        ${this.leadingIcon?D` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:D``}

        <nidoca-text-button text="${this.text}">
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};Lt.styles=o`
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
  `,jt([st({type:it,converter:String}),It("design:type",Object)],Lt.prototype,"theme",void 0),jt([st({type:Ct,converter:String}),It("design:type",String)],Lt.prototype,"buttonType",void 0),jt([st({type:String}),It("design:type",String)],Lt.prototype,"leadingIcon",void 0),jt([st({type:String}),It("design:type",String)],Lt.prototype,"text",void 0),Lt=jt([ot("nidoca-button")],Lt);class Nt extends Q{}var Bt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},zt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Wt=class extends Q{constructor(){super(...arguments),this.autocomplete=!0}render(){return D`
      <form .?autocomplete="${this.autocomplete}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const t=new FormData,e={};for(const i of this.getInputElements(this.slotElement)){const n=i.getOutputData();e[n.key]=n.value,t.append(n.key,n.value)}const i={};return i.jsonObject=e,i.formData=t,i}validate(){let t=!0;for(const e of this.getInputElements(this.slotElement))e.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(null==t)return[];const e=[],i=t.assignedElements({flatten:!0});for(let t=0;t<i.length;t++){const n=i[t];this.recursiveInputElementSearch(n,e)}return e}recursiveInputElementSearch(t,e){if(t instanceof Nt)e.push(t);else if(t.hasChildNodes()){const i=t.children;for(const t of[].slice.call(i))this.recursiveInputElementSearch(t,e)}}};Wt.styles=o`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,Bt([st({type:Boolean}),zt("design:type",Boolean)],Wt.prototype,"autocomplete",void 0),Bt([lt("#slotElement"),zt("design:type",Object)],Wt.prototype,"slotElement",void 0),Wt=Bt([ot("nidoca-form")],Wt);const Ft=t=>(...e)=>({_$litDirective$:t,values:e});class Ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:Ut}=G,Vt=()=>document.createComment(""),Yt=(t,e,i)=>{var n;const o=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(Vt(),r),n=o.insertBefore(Vt(),r);i=new Ut(e,n,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,a=s!==t;if(a){let e;null===(n=i._$AQ)||void 0===n||n.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==r||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,r),t=e}}}return i},qt=(t,e,i=t)=>(t._$AI(e,i),t),Kt={},Gt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const n=t._$AB.nextSibling;for(;i!==n;){const t=i.nextSibling;i.remove(),i=t}},Xt=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},Jt=Ft(class extends Ht{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],r=[];let s=0;for(const e of t)o[s]=n?n(e,s):s,r[s]=i(e,s),s++;return{values:r,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){var o;const r=t._$AH,{values:s,keys:a}=this.dt(e,i,n);if(!Array.isArray(r))return this.at=a,s;const l=null!==(o=this.at)&&void 0!==o?o:this.at=[],c=[];let d,h,p=0,u=r.length-1,f=0,g=s.length-1;for(;p<=u&&f<=g;)if(null===r[p])p++;else if(null===r[u])u--;else if(l[p]===a[f])c[f]=qt(r[p],s[f]),p++,f++;else if(l[u]===a[g])c[g]=qt(r[u],s[g]),u--,g--;else if(l[p]===a[g])c[g]=qt(r[p],s[g]),Yt(t,c[g+1],r[p]),p++,g--;else if(l[u]===a[f])c[f]=qt(r[u],s[f]),Yt(t,r[p],r[u]),u--,f++;else if(void 0===d&&(d=Xt(a,f,g),h=Xt(l,p,u)),d.has(l[p]))if(d.has(l[u])){const e=h.get(a[f]),i=void 0!==e?r[e]:null;if(null===i){const e=Yt(t,r[p]);qt(e,s[f]),c[f]=e}else c[f]=qt(i,s[f]),Yt(t,r[p],i),r[e]=null;f++}else Gt(r[u]),u--;else Gt(r[p]),p++;for(;f<=g;){const e=Yt(t,c[g+1]);qt(e,s[f]),c[f++]=e}for(;p<=u;){const t=r[p++];null!==t&&Gt(t)}return this.at=a,((t,e=Kt)=>{t._$AH=e})(t,c),C}}),Zt={},Qt=Ft(class extends Ht{constructor(){super(...arguments),this.nt=Zt}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return C}else if(this.nt===e)return C;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});var te=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ee=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ie=class extends Nt{constructor(){super(...arguments),this.theme=it.SURFACE,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return D`
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
                ${this.trailingIcon?D`
                            <nidoca-icon
                                    style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                                    icon="${this.trailingIcon}"
                            ></nidoca-icon>`:D``}
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
                        ${Qt([this.value,this.options],(()=>D`
                                    ${Jt(this.options,(t=>null==t?D`
                                                        <option></option>`:this.isSelectedOption(t)?D`
                                                                <option value="${t.key}" selected>${t.value}
                                                                </option> `:D`
                                                                <option value="${t.key}">${t.value}</option> `))}
                                `))}
                    </select>
                </div>
            </div>
            ${this.infoText||this.warningText||this.errorText?D`
                        <div style="display:flex;flex-direction:column;">
                            ${this.infoText?D`
                                        <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:D``}
                            ${this.warningText?D`
                                        <nidoca-text-warning
                                                style="color:var(--app-color-warning-background)"
                                                text="${this.warningText}"
                                        ></nidoca-text-warning>`:D``}
                            ${this.errorText?D`
                                        <nidoca-text-error
                                                style="color:var(--app-color-error-background)"
                                                text="${this.errorText}"
                                        ></nidoca-text-error>`:D``}
                        </div>
                    `:D``}`}getOutputData(){let t=this.value;if(null!=this.selectElement&&this.multiple){t=[];for(let e=0,i=this.selectElement.options.length;e<i;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else null!=this.selectElement&&(t=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(t){if(this.multiple){let e=!1;for(const i of this.value)if(e=t.key===i,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){const i=[];return e&&i.push({key:"",value:""}),Object.keys(t).forEach((e=>{i.push({key:e,value:t[e]})})),i}static stringArrayToOptions(t,e=!0){const i=[];return e&&i.push({key:"",value:""}),t.forEach((t=>{i.push({key:t,value:t})})),i}static toComboboxOptions(t=null,e=null){if(null==t)return[];const i=[];return Object.values(t).forEach((n=>{let o=String(Object.keys(t)[Object.values(t).indexOf(n)]);e&&(o=o.concat(e)),i.push({key:n,value:o})})),i}};ie.styles=o`
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
  `,te([st({type:it,converter:String}),ee("design:type",String)],ie.prototype,"theme",void 0),te([st({type:String}),ee("design:type",String)],ie.prototype,"trailingIcon",void 0),te([st({type:String}),ee("design:type",String)],ie.prototype,"label",void 0),te([st({type:String}),ee("design:type",String)],ie.prototype,"errorText",void 0),te([st({type:String}),ee("design:type",String)],ie.prototype,"infoText",void 0),te([st({type:String}),ee("design:type",String)],ie.prototype,"warningText",void 0),te([st(),ee("design:type",Object)],ie.prototype,"value",void 0),te([st({type:Array}),ee("design:type",Array)],ie.prototype,"options",void 0),te([st({type:String}),ee("design:type",String)],ie.prototype,"name",void 0),te([st({type:Boolean}),ee("design:type",Boolean)],ie.prototype,"required",void 0),te([st({type:Boolean}),ee("design:type",Boolean)],ie.prototype,"multiple",void 0),te([st({type:Number}),ee("design:type",Number)],ie.prototype,"size",void 0),te([lt("#selectElement"),ee("design:type",Object)],ie.prototype,"selectElement",void 0),ie=te([ot("nidoca-form-combobox")],ie);const ne=t=>null!=t?t:j;var oe,re=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},se=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.COLOR="color",t.EMAIL="email",t.HIDDEN="hidden",t.NUMBER="number",t.PASSWORD="password",t.TEL="tel",t.TEXT="text",t.SEARCH="search",t.URL="url",t.DATE="date",t.DATETIME_LOCAL="datetime-local",t.MONTH="month",t.TIME="time",t.WEEK="week"}(oe||(oe={}));let ae=class extends Nt{constructor(){super(...arguments),this.type=oe.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=it.SURFACE}render(){return this.type==oe.HIDDEN?D`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}"/>`:D`
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
                        ${this.trailingIcon?D`
                                    <nidoca-icon
                                            style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                                            icon="${this.trailingIcon}"
                                    ></nidoca-icon>`:D``}
                        <div class="container">
                            <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
                            <input
                                    id="inputElement"
                                    name="${this.name}"
                                    .type="${this.type}"
                                    value="${this.value}"
                                    placeholder="${this.placeholder}"
                                    size="${ne(this.size)}"
                                    minlength="${ne(this.minlength)}"
                                    maxlength="${ne(this.maxlength)}"
                                    pattern="${ne(this.pattern)}"
                                    min="${ne(this.min)}"
                                    max="${ne(this.max)}"
                                    step="${ne(this.step)}"
                                    ?required="${this.required}"
                                    ?disabled="${this.disabled}"
                                    ?checked="${this.checked}"
                            />
                        </div>
                    </div>

                    ${this.infoText||this.warningText||this.errorText?D`
                                <div style="display:flex;flex-direction:column;">
                                    ${this.infoText?D`
                                                <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:D``}
                                    ${this.warningText?D`
                                                <nidoca-text-warning
                                                        style="color:var(--app-color-warning-background)"
                                                        text="${this.warningText}"
                                                ></nidoca-text-warning>`:D``}
                                    ${this.errorText?D`
                                                <nidoca-text-error
                                                        style="color:var(--app-color-error-background)"
                                                        text="${this.errorText}"
                                                ></nidoca-text-error>`:D``}
                                </div>
                            `:D``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};ae.styles=o`
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
  `,re([st({type:oe,converter:String}),se("design:type",String)],ae.prototype,"type",void 0),re([st({type:String}),se("design:type",String)],ae.prototype,"label",void 0),re([st({type:String}),se("design:type",String)],ae.prototype,"placeholder",void 0),re([st({type:String}),se("design:type",String)],ae.prototype,"trailingIcon",void 0),re([st({type:String}),se("design:type",String)],ae.prototype,"errorText",void 0),re([st({type:String}),se("design:type",String)],ae.prototype,"infoText",void 0),re([st({type:String}),se("design:type",String)],ae.prototype,"warningText",void 0),re([st({type:String}),se("design:type",String)],ae.prototype,"name",void 0),re([st(),se("design:type",String)],ae.prototype,"value",void 0),re([st({type:Boolean}),se("design:type",Boolean)],ae.prototype,"required",void 0),re([st({type:Boolean}),se("design:type",Boolean)],ae.prototype,"disabled",void 0),re([st({type:Boolean}),se("design:type",Boolean)],ae.prototype,"checked",void 0),re([st({type:Number}),se("design:type",Object)],ae.prototype,"maxlength",void 0),re([st({type:Number}),se("design:type",Object)],ae.prototype,"minlength",void 0),re([st({type:Number}),se("design:type",Object)],ae.prototype,"min",void 0),re([st({type:Number}),se("design:type",Object)],ae.prototype,"max",void 0),re([st({type:String}),se("design:type",Object)],ae.prototype,"step",void 0),re([st({type:Number}),se("design:type",Object)],ae.prototype,"size",void 0),re([st({type:String}),se("design:type",Object)],ae.prototype,"pattern",void 0),re([lt("#inputElement"),se("design:type",Object)],ae.prototype,"inputElement",void 0),re([st({type:it,converter:String}),se("design:type",String)],ae.prototype,"theme",void 0),ae=re([ot("nidoca-form-text")],ae);let le=class extends ae{constructor(){super(),this.type=oe.DATE}};le=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-form-date"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],le);var ce=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},de=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let he=class extends Nt{constructor(){super(...arguments),this.theme=it.SURFACE,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return D`
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

            ${this.infoText||this.warningText||this.errorText?D`
                        <div style="display:flex;flex-direction:column;">
                            ${this.infoText?D`
                                <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:D``}
                            ${this.warningText?D`
                                        <nidoca-text-warning
                                                style="color:var(--app-color-warning-background)"
                                                text="${this.warningText}"
                                        ></nidoca-text-warning>`:D``}
                            ${this.errorText?D`
                                        <nidoca-text-error
                                                style="color:var(--app-color-error-background)"
                                                text="${this.errorText}"
                                        ></nidoca-text-error>`:D``}
                        </div>
                    `:D``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:e}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};he.styles=o`
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
  `,ce([st({type:it,converter:String}),de("design:type",String)],he.prototype,"theme",void 0),ce([st({type:String}),de("design:type",String)],he.prototype,"infoText",void 0),ce([st({type:String}),de("design:type",String)],he.prototype,"warningText",void 0),ce([st({type:String}),de("design:type",String)],he.prototype,"errorText",void 0),ce([st({type:String}),de("design:type",String)],he.prototype,"name",void 0),ce([st(),de("design:type",String)],he.prototype,"value",void 0),ce([st({type:String}),de("design:type",String)],he.prototype,"label",void 0),ce([st({type:Boolean}),de("design:type",Boolean)],he.prototype,"required",void 0),ce([st({type:String}),de("design:type",String)],he.prototype,"placeholder",void 0),ce([st({type:Boolean}),de("design:type",Boolean)],he.prototype,"disabled",void 0),ce([st({type:Number}),de("design:type",Number)],he.prototype,"rows",void 0),ce([lt("#inputElement"),de("design:type",Object)],he.prototype,"inputElement",void 0),he=ce([ot("nidoca-form-textarea")],he);var pe=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ue=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fe=class extends Nt{constructor(){super(...arguments),this.theme=it.PRIMARY}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return D`
      <nidoca-box theme="${ne(this.theme)}">
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
    `}upload(){var t;null===(t=this.inputElement)||void 0===t||t.click()}};fe.styles=o`
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
  `,pe([st({type:it,converter:String}),ue("design:type",Object)],fe.prototype,"theme",void 0),pe([lt("#inputElement"),ue("design:type",Object)],fe.prototype,"inputElement",void 0),fe=pe([ot("nidoca-form-upload")],fe);var ge=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},me=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ye=class extends Nt{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=it.PRIMARY,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return D`
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

        ${this.infoText.length>0?D` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:D``}

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

      ${this.warningText?D` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:D``}
      ${this.errorText?D` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:D``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};ye.styles=o`
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
  `,ge([st({type:String}),me("design:type",String)],ye.prototype,"name",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"label",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"infoText",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"errorText",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"warningText",void 0),ge([st({type:Boolean}),me("design:type",Boolean)],ye.prototype,"required",void 0),ge([st({type:Boolean}),me("design:type",Boolean)],ye.prototype,"disabled",void 0),ge([st({type:Boolean}),me("design:type",Boolean)],ye.prototype,"checked",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"theme",void 0),ge([lt("#inputElement"),me("design:type",Object)],ye.prototype,"inputElement",void 0),ye=ge([ot("nidoca-form-switch"),me("design:paramtypes",[])],ye);var be=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ve=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return D`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.EMAIL}"
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};ve.styles=o`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,be([st({type:it,converter:String}),xe("design:type",Object)],ve.prototype,"theme",void 0),be([st({type:String,converter:String}),xe("design:type",String)],ve.prototype,"label",void 0),be([st({type:String,converter:String}),xe("design:type",String)],ve.prototype,"emailLabel",void 0),be([st({type:String,converter:String}),xe("design:type",String)],ve.prototype,"buttonLabel",void 0),be([lt("#form"),xe("design:type",Object)],ve.prototype,"formComponent",void 0),ve=be([ot("nidoca-form-newsletter")],ve);var we=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},_e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ke=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return D`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.EMAIL}"
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};ke.styles=o`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,we([st({type:it,converter:String}),_e("design:type",String)],ke.prototype,"theme",void 0),we([st({type:String,converter:String}),_e("design:type",String)],ke.prototype,"label",void 0),we([st({type:String,converter:String}),_e("design:type",String)],ke.prototype,"emailLabel",void 0),we([st({type:String,converter:String}),_e("design:type",String)],ke.prototype,"buttonLabel",void 0),we([lt("#form"),_e("design:type",Object)],ke.prototype,"formComponent",void 0),ke=we([ot("nidoca-form-reset-password")],ke);var Se=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Re=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Oe=class extends Q{constructor(){super(...arguments),this.theme=it.SURFACE,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return D`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.PASSWORD}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.PASSWORD}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.PASSWORD}"
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
        ${this.showErrorMessageSamePassword?D` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:D``}
        ${this.showErrorMessagePasswordDiff?D` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:D``}
      </nidoca-box>
    `}changePassword(){var t,e,i,n,o;(null===(t=this.formComponent)||void 0===t?void 0:t.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(e=this.newPasswordInputField)||void 0===e?void 0:e.getOutputData().value)!=(null===(i=this.repeatNewPasswordInputField)||void 0===i?void 0:i.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(n=this.oldPasswordInputField)||void 0===n?void 0:n.getOutputData().value)==(null===(o=this.newPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};Oe.styles=o`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Se([st({type:it,converter:String}),Re("design:type",String)],Oe.prototype,"theme",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"label",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"oldPasswordLabel",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"newPasswordLabel",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"repeatNewPasswordLabel",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"buttonLabel",void 0),Se([lt("#form"),Re("design:type",Object)],Oe.prototype,"formComponent",void 0),Se([lt("#oldPassword"),Re("design:type",Object)],Oe.prototype,"oldPasswordInputField",void 0),Se([lt("#newPassword"),Re("design:type",Object)],Oe.prototype,"newPasswordInputField",void 0),Se([lt("#repeatNewPassword"),Re("design:type",Object)],Oe.prototype,"repeatNewPasswordInputField",void 0),Se([st(),Re("design:type",String)],Oe.prototype,"errorMessageSamePasswordLabel",void 0),Se([st(),Re("design:type",String)],Oe.prototype,"errorMessagePasswordDiffLabel",void 0),Oe=Se([ot("nidoca-form-change-password")],Oe);var $e=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ee=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Pe=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return D`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.PASSWORD}"
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Pe.styles=o`
    :host {
      display: block;
      width:100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,$e([st({type:it,converter:String}),Ee("design:type",Object)],Pe.prototype,"theme",void 0),$e([st({type:String,converter:String}),Ee("design:type",String)],Pe.prototype,"label",void 0),$e([st({type:String,converter:String}),Ee("design:type",String)],Pe.prototype,"emailLabel",void 0),$e([st({type:String,converter:String}),Ee("design:type",String)],Pe.prototype,"passwordLabel",void 0),$e([st({type:String,converter:String}),Ee("design:type",String)],Pe.prototype,"buttonLabel",void 0),$e([lt("#form"),Ee("design:type",Object)],Pe.prototype,"formComponent",void 0),Pe=$e([ot("nidoca-form-register")],Pe);var Me=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Te=class extends Q{constructor(){super(...arguments),this.code=""}render(){return D``}};Te.styles=o``,Me([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Te.prototype,"code",void 0),Te=Me([ot("nidoca-upload")],Te);var Ae=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},De=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ce=class extends Q{constructor(){super(),this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return D`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};Ce.styles=o`
    :host,
    ::slotted(:host) {
      display:block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,Ae([st({type:it,converter:String}),De("design:type",String)],Ce.prototype,"theme",void 0),Ce=Ae([ot("nidoca-hr"),De("design:paramtypes",[])],Ce);var je=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Ie=class extends Q{constructor(){super(...arguments),this.text=""}render(){return D`
            <div class="container">
                ${this.text?D`
                    <nidoca-text-button>${this.text}</nidoca-text-button>`:D``}
                <slot></slot>
            </div>
        `}};Ie.styles=o`
    .container {
      display: flex;
      padding-left:var(--space-2);
      padding-right:var(--space-2);
      padding-top:var(--space);
      padding-bottom:var(--space);
    }
  `,je([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ie.prototype,"text",void 0),Ie=je([ot("nidoca-menu-area")],Ie);var Le=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ne=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Be=class extends Q{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1}render(){return D`
            <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
                ${this.icon?D`
                            <nidoca-icon
                                    slot="graphic"
                                    icon="${this.icon}"
                                    style="padding-right:var(--space); font-size:var(--icon-size);"
                            ></nidoca-icon>`:D``}
                ${this.text?D`
                    <nidoca-text>${this.text}</nidoca-text>`:D``}
            </div>
        `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};Be.styles=o`
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
      
  `,Le([st({type:String}),Ne("design:type",String)],Be.prototype,"text",void 0),Le([st({type:String}),Ne("design:type",String)],Be.prototype,"icon",void 0),Le([st({type:Boolean}),Ne("design:type",Boolean)],Be.prototype,"selected",void 0),Be=Le([ot("nidoca-menu-item")],Be);var ze=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},We=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fe=class extends Q{constructor(){super(...arguments),this.theme=it.SECONDARY}render(){return D`
            <style>
                :host,
                *,
                ::slotted(*) {
                    color: var(--app-color-${this.theme});
                    background-color: var(--app-color-${this.theme}-background);
                    border-color: var(--app-color-${this.theme}-border);
                }
            </style>
            <slot id="slotElement"></slot>`}firstUpdated(){this.addEventListener("click",(t=>{if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];if(n instanceof Be){const e=n.getBoundingClientRect();e.left<t.x&&e.right>t.x&&(e.top<t.y&&e.bottom>t.y?n.selected=!0:n.selected=!1)}}}}))}};Fe.styles=o`
    :host,
    slot {
      display: block;
    }
    slot {
    }
  `,ze([st({type:it,converter:String}),We("design:type",Object)],Fe.prototype,"theme",void 0),ze([lt("#slotElement"),We("design:type",Object)],Fe.prototype,"slotElement",void 0),Fe=ze([ot("nidoca-menu")],Fe);var He=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ue=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ve=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return D`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,i,n,o,r){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(i).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(o).concat(";").concat("bottom:").concat(r).concat(";")}};Ve.styles=o`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,He([st({type:String}),Ue("design:type",String)],Ve.prototype,"height",void 0),He([st({type:String}),Ue("design:type",String)],Ve.prototype,"width",void 0),He([st({type:String}),Ue("design:type",String)],Ve.prototype,"left",void 0),He([st({type:String}),Ue("design:type",String)],Ve.prototype,"top",void 0),He([st({type:String}),Ue("design:type",String)],Ve.prototype,"right",void 0),He([st({type:String}),Ue("design:type",String)],Ve.prototype,"bottom",void 0),Ve=He([ot("nidoca-layout-floating")],Ve);var Ye=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},qe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ke=class extends Q{constructor(){super(...arguments),this.width="",this.height="",this.minWidth="",this.minHeight="",this.contentWidth="",this.contentHeight=""}render(){return D`
      ${it.getStyle(this.theme)}
      <div class="container theme">
        <div class="container" style="">
          <slot></slot>
        </div>
      </div>
    `}};Ke.styles=o`
    :host {
      display: block;
    }
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `,Ye([st({type:String}),qe("design:type",String)],Ke.prototype,"width",void 0),Ye([st({type:String}),qe("design:type",String)],Ke.prototype,"height",void 0),Ye([st({type:String}),qe("design:type",String)],Ke.prototype,"minWidth",void 0),Ye([st({type:String}),qe("design:type",String)],Ke.prototype,"minHeight",void 0),Ye([st({type:String}),qe("design:type",String)],Ke.prototype,"contentWidth",void 0),Ye([st({type:String}),qe("design:type",String)],Ke.prototype,"contentHeight",void 0),Ye([st({type:it,converter:String}),qe("design:type",Object)],Ke.prototype,"theme",void 0),Ke=Ye([ot("nidoca-container")],Ke);var Ge=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Xe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Je=class extends Q{constructor(){super(),this.hideSidebox=!0,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return D` <style>
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
      ${this.hideSidebox?D``:D` <slot class="sidebox" name="sidebox"></slot>`}`}};Je.styles=o`
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

    @media only screen and (min-width: ${nt.TABLET.minWidth}px) and (max-width: ${nt.TABLET.maxWidth}px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: ${nt.MOBILE.maxWidth}px) {
      .sidebox {
        width: 100%;
      }
    }
  `,Ge([st({type:it,converter:String}),Xe("design:type",String)],Je.prototype,"theme",void 0),Ge([st({type:Boolean,converter:String}),Xe("design:type",Boolean)],Je.prototype,"hideSidebox",void 0),Je=Ge([ot("nidoca-split-screen"),Xe("design:paramtypes",[])],Je);var Ze=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Qe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ti=class extends Q{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return D`
            <i
                    class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
                    title="${this.primaryText}"
                    @click="${this.clicked}"
            >${this.icon}</i
            >
        `}clicked(){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};ti.styles=o`
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
    
  `,Ze([st({type:String}),Qe("design:type",String)],ti.prototype,"icon",void 0),Ze([st({type:Boolean}),Qe("design:type",Boolean)],ti.prototype,"clickable",void 0),Ze([st({type:Boolean}),Qe("design:type",Boolean)],ti.prototype,"deactivated",void 0),Ze([st({type:String}),Qe("design:type",String)],ti.prototype,"primaryText",void 0),ti=Ze([ot("nidoca-icon")],ti);var ei=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ii=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class ni{}ni.NONE="NONE",ni.DEFAULT_SHADOW="DEFAULT_SHADOW",ni.SHADOW_1="SHADOW_1",ni.SHADOW_2="SHADOW_2",ni.SHADOW_3="SHADOW_3";let oi=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.shadowType=ni.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return D`
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
        `}clicked(){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};oi.styles=o`
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
  `,ei([st({type:String}),ii("design:type",String)],oi.prototype,"theme",void 0),ei([st({type:Object}),ii("design:type",ni)],oi.prototype,"shadowType",void 0),ei([st({type:String}),ii("design:type",String)],oi.prototype,"icon",void 0),ei([st({type:Boolean}),ii("design:type",Boolean)],oi.prototype,"clickable",void 0),ei([st({type:Boolean}),ii("design:type",Boolean)],oi.prototype,"deactivated",void 0),oi=ei([ot("nidoca-icon-extended")],oi);var ri=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let si=class extends Q{render(){return D`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),i=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${i}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};si.styles=o`
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
  `,ri([lt("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],si.prototype,"rippleContainerElement",void 0),si=ri([ot("nidoca-ripple")],si);var ai=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},li=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ci=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%"}render(){return D`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};ci.styles=o`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,ai([st({type:String}),li("design:type",String)],ci.prototype,"src",void 0),ai([st({type:String}),li("design:type",String)],ci.prototype,"width",void 0),ai([st({type:String}),li("design:type",String)],ci.prototype,"height",void 0),ci=ai([ot("nidoca-img")],ci);let di=class extends ci{render(){return D`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};di.styles=o`
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
  `,di=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-img-round")],di);var hi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let pi=class extends Q{constructor(){super(...arguments),this.src=""}render(){return D`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};pi.styles=o``,hi([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],pi.prototype,"src",void 0),pi=hi([ot("nidoca-movie")],pi);var ui=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},fi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let gi=class extends Q{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return D`
      <nidoca-form-text
        .theme="${this.theme}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${oe.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};gi.styles=o`
    :host {
      display: block;
      width: 100%;
    }
  `,ui([st({type:it,converter:String}),fi("design:type",Object)],gi.prototype,"theme",void 0),ui([st({type:String}),fi("design:type",String)],gi.prototype,"label",void 0),ui([st({type:String}),fi("design:type",String)],gi.prototype,"placeholder",void 0),ui([st({type:String}),fi("design:type",String)],gi.prototype,"name",void 0),ui([st({type:Number}),fi("design:type",Number)],gi.prototype,"min",void 0),ui([st({type:Number}),fi("design:type",Number)],gi.prototype,"max",void 0),ui([st({type:String}),fi("design:type",String)],gi.prototype,"errorText",void 0),ui([lt("#inputfield"),fi("design:type",Object)],gi.prototype,"inputfield",void 0),gi=ui([ot("nidoca-form-captcha")],gi);var mi,yi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},bi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}(mi||(mi={}));let xi=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType=mi.SELF}render(){return D`<a href="${this.href}" .target="${this.targetType}">
            <nidoca-text>${this.text}</nidoca-text>
            <slot></slot>
        </a> `}};xi.styles=o`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height:1.5em;
     }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,yi([st({type:String}),bi("design:type",String)],xi.prototype,"text",void 0),yi([st({type:String}),bi("design:type",String)],xi.prototype,"href",void 0),yi([st({type:String}),bi("design:type",String)],xi.prototype,"targetType",void 0),xi=yi([ot("nidoca-link")],xi);var vi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},wi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let _i=class extends Q{constructor(){super(),this.multiSelect=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}update(t){super.update(t),null!=t.get("selectionMode")&&(this.multiSelect||(this.selected=!1))}render(){return D`
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
        ${this.multiSelect?D` <nidoca-icon
              style="padding-right: var(--space-2);"
              class="item"
              @click="${()=>this.switchSelected()}"
              icon="${this.selected?"check_box":"check_box_outline_blank"}"
            ></nidoca-icon>`:D`<span></span>`}
        <slot name="graphic" class="item"></slot>
        <div class="containerTypography">
          ${this.primaryText?D`
                                <nidoca-text class="item"
                                >${this.primaryText}
                                </nidoca-text
                                >`:D``}
          <slot></slot>
          ${this.secondaryText?D` <nidoca-text-caption class="item">${this.secondaryText} </nidoca-text-caption>`:D``}
          <slot name="secondary"></slot>
        </div>
        <slot name="meta" class="item"></slot>
      </div>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",console.log(t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};_i.styles=o`
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
  `,vi([st({type:it,converter:String}),wi("design:type",Object)],_i.prototype,"theme",void 0),vi([st({type:Boolean}),wi("design:type",Boolean)],_i.prototype,"multiSelect",void 0),vi([st({type:Boolean}),wi("design:type",Boolean)],_i.prototype,"selected",void 0),vi([st({type:String}),wi("design:type",String)],_i.prototype,"primaryText",void 0),vi([st({type:String}),wi("design:type",String)],_i.prototype,"secondaryText",void 0),_i=vi([ot("nidoca-list-item"),wi("design:paramtypes",[])],_i);var ki=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Si=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ri=class extends Q{constructor(){super(),this.multiSelect=!1,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.multiSelect=this.multiSelect}))}))}render(){return D`
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
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];n instanceof _i&&t.push(n)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];n instanceof _i&&n.selected&&t.push(n)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let i=0;for(let n=0;n<e.length;n++){const o=e[n];o instanceof _i&&(o.selected&&t.push(i),i++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){console.log("sdojsdoijsoidjsdioj "+this.getItems().length),this.getItems().forEach((t=>{t.selected=!1}))}};Ri.styles=o`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,ki([st({type:it,converter:String}),Si("design:type",Object)],Ri.prototype,"theme",void 0),ki([st({type:Boolean}),Si("design:type",Boolean)],Ri.prototype,"multiSelect",void 0),ki([lt("#slotElement"),Si("design:type",Object)],Ri.prototype,"slotElement",void 0),Ri=ki([ot("nidoca-list"),Si("design:paramtypes",[])],Ri);var Oi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},$i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ei=class extends Q{constructor(){super(),this.text="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return D`
      <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-caption>
    `}};Ei.styles=o`
  :host {
     display:block;
     padding-left: var(--space-2);  
  `,Oi([st({type:it,converter:String}),$i("design:type",Object)],Ei.prototype,"theme",void 0),Oi([st({type:String}),$i("design:type",String)],Ei.prototype,"text",void 0),Ei=Oi([ot("nidoca-list-section"),$i("design:paramtypes",[])],Ei);var Pi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Mi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ti=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.prominent=!1}render(){return D`
      ${it.getStyle(this.theme)}
      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?D` <slot class="prominent" name="prominent"></slot>`:D``}
    `}};Ti.styles=o`
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
  `,Pi([st({type:it,converter:String}),Mi("design:type",Object)],Ti.prototype,"theme",void 0),Pi([st({type:Boolean}),Mi("design:type",Boolean)],Ti.prototype,"prominent",void 0),Ti=Pi([ot("nidoca-top-app-bar")],Ti);var Ai=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Di=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ci=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new ti],["row 2",new ti]],this.theme=it.BACKGROUND}render(){return D`
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
            ${Qt([this.headers],(()=>D` ${Jt(this.headers,(t=>D` <th colspan="1" rowspan="1">${t}</th> `))} `))}
          </thead>
          <tbody>
            ${Qt([this.rows],(()=>D`
                  ${Jt(this.rows,(t=>D`
                        <tr>
                          ${Jt(t,(t=>D` <td colspan="1" rowspan="1">${t}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};Ci.styles=o`
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
  `,Ai([st({type:Array}),Di("design:type",Array)],Ci.prototype,"headers",void 0),Ai([st({type:Array}),Di("design:type",Array)],Ci.prototype,"rows",void 0),Ai([st({type:it,converter:String}),Di("design:type",String)],Ci.prototype,"theme",void 0),Ci=Ai([ot("nidoca-table")],Ci);var ji=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Ii=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?D`
            <slot></slot>`:D``}};Ii.styles=o`
      :host,slot {
      display:block;
    }
  `,ji([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],Ii.prototype,"selected",void 0),Ii=ji([ot("nidoca-tab-content")],Ii);var Li=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ni=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Bi=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=it.SURFACE}render(){return D`
            <style>
                .container {
                    border-color: var(--app-color-${this.theme}-background);
                }
                .selected {
                    border-color: var(--app-color-${this.theme}-selected);
                }
            </style>
            <div class="container ${this.selected?"selected":""}" @click="${()=>this.tabClicked()}">
                ${this.text?D`
                            <nidoca-text text="${this.text}"></nidoca-text> `:D``}
                <slot></slot>
            </div>
        `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Bi.styles=o`
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

  `,Li([st({type:Boolean}),Ni("design:type",Boolean)],Bi.prototype,"selected",void 0),Li([st({type:String}),Ni("design:type",String)],Bi.prototype,"text",void 0),Li([st({type:String}),Ni("design:type",String)],Bi.prototype,"theme",void 0),Bi=Li([ot("nidoca-tab")],Bi);var zi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Wi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fi=class extends Q{constructor(){super(...arguments),this.theme=it.SURFACE,this.tabIndex=0}render(){return D`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,i=t[this.tabIndex];for(let n=0;n<t.length;n++){const o=t[n];o instanceof Bi&&(o.theme=this.theme,o.style.width=String(e).concat("%"),o==i?(o.selected=!0,o.classList.add("SELECTED")):(o.selected=!1,o.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];n instanceof Ii&&(this.tabIndex==t?n.selected=!0:n.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];if(n instanceof Bi&&n==t){this.tabIndex=i;break}}}}};Fi.styles=o`
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
  `,zi([lt("#tabSlot"),Wi("design:type",Object)],Fi.prototype,"tabSlot",void 0),zi([lt("#tabContentSlot"),Wi("design:type",Object)],Fi.prototype,"tabContentSlot",void 0),zi([st({type:String}),Wi("design:type",String)],Fi.prototype,"theme",void 0),zi([st({type:Number}),Wi("design:type",Number)],Fi.prototype,"tabIndex",void 0),Fi=zi([ot("nidoca-tabs")],Fi);var Hi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ui=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vi=class extends Q{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(t=>{if(!this.hideLeft&&this.leftElement){console.log("close");const e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}}))}updated(t){super.updated(t)}render(){return D`
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
        `}};Vi.styles=o`
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
    
  `,Hi([st({type:Boolean}),Ui("design:type",Boolean)],Vi.prototype,"hideLeft",void 0),Hi([st({type:Boolean}),Ui("design:type",Boolean)],Vi.prototype,"prominent",void 0),Hi([lt("#header"),Ui("design:type",Object)],Vi.prototype,"headerElement",void 0),Hi([lt("#left"),Ui("design:type",Object)],Vi.prototype,"leftElement",void 0),Hi([lt("#content"),Ui("design:type",Object)],Vi.prototype,"contentElement",void 0),Vi=Hi([ot("nidoca-template"),Ui("design:paramtypes",[])],Vi);var Yi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let qi=class extends Q{constructor(){super(...arguments),this.text=""}render(){return D` <slot id="slotElement">${this.text}</slot>`}};qi.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `,Yi([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],qi.prototype,"text",void 0),qi=Yi([ot("nidoca-text")],qi);let Ki=class extends qi{render(){return D`
            ${super.render()}`}};Ki.styles=o`
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
  `,Ki=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-button")],Ki);let Gi=class extends qi{};Gi.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,Gi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-overline")],Gi);let Xi=class extends qi{render(){return D` ${super.render()}`}};Xi.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.5em;
      font-weight: 400;
    }
  `,Xi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-body")],Xi);let Ji=class extends qi{};Ji.styles=o`
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
    
  `,Ji=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-caption")],Ji);let Zi=class extends Ji{constructor(){super(),this.style.color="red"}};Zi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-error"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],Zi);let Qi=class extends Ji{constructor(){super(),this.style.color="green"}};Qi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-success"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],Qi);let tn=class extends Ji{constructor(){super(),this.style.color="yellow"}};tn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-warning"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],tn);let en=class extends Ji{constructor(){super(),this.style.color="blue"}};en=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-info"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],en);let nn=class extends qi{};nn.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,nn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h1")],nn);let on=class extends qi{};on.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 1.2em;
      line-height: 1.5em;
    }
  `,on=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h2")],on);let rn=class extends qi{};rn.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,rn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h3")],rn);let sn=class extends qi{};sn.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 115%;
      line-height: 1.5em;
    }
  `,sn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h4")],sn);let an=class extends qi{};an.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,an=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h5")],an);let ln=class extends qi{};ln.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 105%;
      line-height: 1.5em;
    }
  `,ln=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h6")],ln);var cn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},dn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let hn=class extends Q{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=it.SURFACE}render(){return D`
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
        `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};hn.styles=o`
    
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
    
  `,cn([st({type:String}),dn("design:type",String)],hn.prototype,"value",void 0),cn([st({type:String}),dn("design:type",String)],hn.prototype,"placeholder",void 0),cn([st({type:Boolean}),dn("design:type",Boolean)],hn.prototype,"disabled",void 0),cn([lt("#inputElement"),dn("design:type",Object)],hn.prototype,"inputElement",void 0),cn([st({type:it,converter:String}),dn("design:type",String)],hn.prototype,"theme",void 0),hn=cn([ot("nidoca-search-bar")],hn);var pn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},un=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class fn{}fn.CENTER="CENTER",fn.LEFT="LEFT",fn.RIGHT="RIGHT",fn.TOP="TOP",fn.BOTTOM="BOTTOM",fn.SLIDE_CENTER="SLIDE_CENTER",fn.SLIDE_LEFT="SLIDE_LEFT",fn.SLIDE_RIGHT="SLIDE_RIGHT",fn.SLIDE_TOP="SLIDE_TOP",fn.SLIDE_BOTTOM="SLIDE_BOTTOM";let gn=class extends Q{constructor(){super(...arguments),this.transitionType=fn.CENTER,this.duration=.5}render(){return D` <div .class="${this.transitionType}"><slot></slot></div> `}};gn.styles=o`
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
  `,pn([st({type:Object}),un("design:type",fn)],gn.prototype,"transitionType",void 0),pn([st({type:Number}),un("design:type",Number)],gn.prototype,"duration",void 0),gn=pn([ot("nidoca-transition")],gn);var mn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let yn=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?D`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${fn.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:D``}};yn.styles=o`
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
  `,mn([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],yn.prototype,"show",void 0),yn=mn([ot("nidoca-dialog")],yn);var bn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},xn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let vn=class extends Q{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return D`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Ct.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${Ct.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};vn.styles=o``,bn([st({type:Boolean}),xn("design:type",Boolean)],vn.prototype,"show",void 0),bn([st({type:String}),xn("design:type",String)],vn.prototype,"title",void 0),bn([st({type:String}),xn("design:type",String)],vn.prototype,"description",void 0),bn([st({type:String}),xn("design:type",String)],vn.prototype,"labelButtonYes",void 0),bn([st({type:String}),xn("design:type",String)],vn.prototype,"labelButtonNo",void 0),vn=bn([ot("nidoca-dialog-decision")],vn);var wn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},_n=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class kn{}kn.ROUND="ROUND",kn.CLICKABLE="CLICKABLE",kn.ZOOM_WRAPPED="ZOOM_WRAPPED",kn.FULL_WIDTH="FULL_WIDTH";let Sn=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[kn.CLICKABLE,kn.FULL_WIDTH]}render(){return D`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}};Sn.styles=o`
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
  `,wn([st({type:String}),_n("design:type",String)],Sn.prototype,"src",void 0),wn([st({type:String}),_n("design:type",String)],Sn.prototype,"width",void 0),wn([st({type:String}),_n("design:type",String)],Sn.prototype,"height",void 0),wn([st({type:kn,converter:Array}),_n("design:type",Array)],Sn.prototype,"richMediaProperties",void 0),Sn=wn([ot("nidoca-img-roullnd")],Sn);var Rn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let On=class extends Q{constructor(){super(...arguments),this.imgSrc=""}render(){return D`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[kn.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};On.styles=o`
    :host {
      display: block;
    }
  `,Rn([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],On.prototype,"imgSrc",void 0),On=Rn([ot("nidoca-avatar")],On);var $n=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let En=class extends Q{constructor(){super(...arguments),this.theme=it.SURFACE}render(){return D`
            <style>
                :host {
                    border-color: var(--app-color-${this.theme}-border);
                }
            </style>
            <slot></slot>
        `}};En.styles=o`
    :host {
      display: block;
      border-radius: 1rem;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      overflow:hidden;
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.23);
 
}

    }
    slot {
      height:100%;
      width:100%;
      display: block;
    }
  `,$n([st({type:it,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],En.prototype,"theme",void 0),En=$n([ot("nidoca-card")],En);let Pn=class extends Q{render(){return D`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements();for(let t=0;t<i.length;t++){const e=i[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};Pn.styles=o`
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
  `,Pn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-gallery")],Pn);let Mn=class extends Q{render(){return D`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};Mn.styles=o`
    :host {
      display: none;
    }
  `,Mn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-print")],Mn);let Tn=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return D`
            <style>
                .item,
                ::slotted(.item) {
                    flex-basis: ${this.flexBasis};
                }
            </style>
            <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
        `}slotChanged(t){const e=t.target,i=e.offsetWidth,n=e.assignedElements(),o=n.length,r=[];let s=0;for(let t=0;t<o;t++){const e=n[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)r.push(e);else{const e=t.toUpperCase();s+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*i}}}let a=100;s>0&&(a=100-s/i*100),0==a&&(a=100/o),this.flexBasis=String(a/r.length)+"%",this.requestUpdate()}};Tn.styles=o`
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

    @media only screen and (min-width: ${nt.TABLET.minWidth}px) and (max-width: ${nt.TABLET.maxWidth}px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: ${nt.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,Tn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-section")],Tn);var An=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Dn=class extends Q{render(){return D`
            <slot></slot>`}};Dn.styles=o`
    
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

  `,Dn=An([ot("nidoca-dashboard")],Dn);let Cn=class extends Q{render(){return D`
            <slot></slot>`}};Cn.styles=o`
    :host {
        width:25%;
    }
    `,Cn=An([ot("nidoca-dashboard-box-25")],Cn);let jn=class extends Q{render(){return D`
            <slot></slot>`}};jn.styles=o`
    :host {
        width:50%;
    }
    @media only screen and (max-width: 1919px) {
        :host {
        width:100%;
        }
    }

    `,jn=An([ot("nidoca-dashboard-box-50")],jn);let In=class extends Q{render(){return D`
            <slot></slot>`}};In.styles=o`
    :host {
        width:100%;
    }
    `,In=An([ot("nidoca-dashboard-box-100")],In);var Ln=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Nn=class extends Q{constructor(){super(...arguments),this.theme=it.BACKGROUND}render(){return D`
      ${it.getStyle(this.theme)}
      <slot></slot>
    `}};Nn.styles=o`
    :host {
      display: block;
      padding: var(--space-6);
      height:inherit;
      box-sizing:border-box;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start
    }

    @media only screen and (min-width: ${nt.TABLET.minWidth}px) and (max-width: ${nt.TABLET.maxWidth}px) {
      :host {
        padding: var(--space-4);
      }
    }

    @media only screen and (max-width: ${nt.MOBILE.maxWidth}px) {
      :host {
        padding: var(--space-2);
      }
    }
  `,Ln([st({type:it,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Nn.prototype,"theme",void 0),Nn=Ln([ot("nidoca-box")],Nn);var Bn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},zn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Wn=class extends Q{constructor(){super(...arguments),this.overline="",this.title="",this.summary="",this.text=""}render(){return D`
      <div style="display:flex; flex-direction:column;">
        ${this.overline?D` <nidoca-text class="paddingBottom">${this.overline}</nidoca-text> `:D``}
        ${this.title?D` <nidoca-text-h2 class="paddingBottom">${this.title}</nidoca-text-h2> `:D``}
        ${this.summary?D` <nidoca-text-caption class="paddingBottom">${this.summary}</nidoca-text-caption> `:D``}
        ${this.text?D` <nidoca-text class="paddingBottom">${this.text}</nidoca-text>`:D``}
        <slot></slot>
      </div>
    `}};Wn.styles=o`
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

  `,Bn([st({type:String}),zn("design:type",String)],Wn.prototype,"overline",void 0),Bn([st({type:String}),zn("design:type",String)],Wn.prototype,"title",void 0),Bn([st({type:String}),zn("design:type",String)],Wn.prototype,"summary",void 0),Bn([st({type:String}),zn("design:type",String)],Wn.prototype,"text",void 0),Wn=Bn([ot("nidoca-article")],Wn);class Fn{getCurrent(t){if(null==t)return t;const e={};return this.getElements(t).forEach((t=>{const i=t.tagName,n=t.getAttribute("name");if(null==n||null==n)console.warn("input name is empty.");else{const o=t.value;if("INPUT"==i)switch(t.getAttribute("type")){case"number":e[n]=Number(o);break;case"date":case"datetime":e[n]=new Date(o);break;case"checkbox":e[n]=t.checked;break;default:t.checked?e[n]=t.checked:""==o||isNaN(o)?e[n]=o:e[n]=Number(o)}else"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||(e[n]=o)}})),e}getElements(t){let e=[];if(t){const i=t.tagName;if("INPUT"!=i&&"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||e.push(t),t.children.length>0){const i=null==t?void 0:t.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}if(t.shadowRoot&&t.shadowRoot.children.length>0){const i=t.shadowRoot.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}}return e}}class Hn{parseDate(t,e){const i=/[^0-9a-z]/gi;let n=0,o=0,r=0,s=0,a=0,l=0,c=0;const d=t.split(i);try{e.split(i).forEach((function(t,e){switch((""+t).charAt(0)){case"y":case"Y":n=parseInt(d[e]);break;case"M":o=parseInt(d[e])-1;break;case"d":r=parseInt(d[e]);break;case"h":case"H":case"k":case"K":s=parseInt(d[e]);break;case"m":a=parseInt(d[e]);break;case"s":l=parseInt(d[e]);break;case"S":c=parseInt(d[e])}}))}catch(t){throw console.log(t),new Error("Invalid date format.")}return new Date(n,o,r,s,a,l,c)}formatDate(t,e){if(null==t)return"";const i={};return i.M=t.getMonth()+1,i.d=t.getDate(),i.h=t.getHours(),i.m=t.getMinutes(),i.s=t.getSeconds(),e=e.replace(/(M+|d+|h+|m+|s+)/g,(function(t){return((t.length>1?"0":"")+i[t.slice(-1)]).slice(-2)})),e.replace(/(y+)/g,(function(e){return t.getFullYear().toString().slice(-e.length)}))}parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let n=0;n<e.length;n++)if(e[n].exec(i)){console.debug("parse date string to date, key=%s, value=%s",t,i),i=new Date(i);break}return i}))}diffDays(t,e){if(null==t||null==t||null==e||null==e)return null;const i=t.getTime();return(e.getTime()-i)/864e5}}var Un=function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))};class Vn{constructor(t){this.host=t}static login(t,e){return Un(this,void 0,void 0,(function*(){console.log(`login ${t}`);const i=yield fetch(this.HOST.concat("/rpc/login"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:t,pass:e})});if(200==i.status){const t=yield i.json();console.log(t),this.setToken(t)}return console.info("login response status: ",i.status),200==i.status}))}static setToken(t){sessionStorage.setItem(Vn.token_key,JSON.stringify(t))}static getToken(){const t=sessionStorage.getItem(Vn.token_key);if(t)return Vn.parse(t)}static persist(t,e){return Un(this,void 0,void 0,(function*(){const i=this.HOST.concat(t),n=yield this.request(i,"POST","application/json; charset=utf-8",e);return console.log("persist item, value: %s",JSON.stringify(e)),this.parse(yield n.text())[0]}))}static update(t,e,i){return Un(this,void 0,void 0,(function*(){const n=this.HOST.concat(t).concat("?id=eq.".concat(e));console.debug("update item value: %s",JSON.stringify(i));const o=yield this.request(n,"PUT","application/json; charset=utf-8",i);return console.log("item updated ? ".concat(String(o.status))),200==o.status}))}static delete(t,e){return Un(this,void 0,void 0,(function*(){const i=this.HOST.concat(t).concat("?id=eq.").concat(e),n=yield this.request(i,"DELETE","application/json; charset=utf-8",void 0);return console.debug("delete item for id= %s",e),200==n.status}))}static search(t,e){return Un(this,void 0,void 0,(function*(){const i=this.HOST.concat(t).concat(e),n=yield this.request(i,"GET","application/json; charset=utf-8",void 0);return this.parse(yield n.text())}))}static request(t,e,i,n){return Un(this,void 0,void 0,(function*(){const o={"Accept-Encoding":"*"};o["Content-Type"]=i,o.Prefer="return=representation";const r=this.getToken();r&&(o.Authorization=`Bearer ${r.token}`);const s={headers:o,method:e,body:JSON.stringify(n)},a=yield fetch(t,s);return console.info("response status: ",a.status),a}))}static parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let t=0;t<e.length;t++)if(e[t].exec(i)){i=new Date(i);break}return i}))}}Vn.token_key="token",Vn.HOST="https://api.nidoca.com";var Yn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},qn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Kn extends class{fromModel(t){const e=[];return Object.keys(t).map((i=>{const n=typeof t[i];e.push({key:i,label:i.charAt(0).toUpperCase().concat(i.slice(1)),type:"object"==n?t[i]instanceof Date?"date":"object":"boolean"==n?"checkbox":n,required:!1,step:"number"==n?"any":void 0})})),e}}{delete(t){return Vn.delete(this.getPath(),t[this.getPrimaryIdKey()])}persist(t){return delete t[this.getPrimaryIdKey()],Vn.persist(this.getPath(),t)}update(t){return Vn.update(this.getPath(),t[this.getPrimaryIdKey()],t)}getProperties(){return this.fromModel(this.getModel())}getPropertie(t){const e=this.getProperties();for(let i=0;i<e.length;i++){const n=e[i];if(n.key==t)return n}}getPrimaryIdKey(){return"id"}getSectionText(t){const e=new Hn,i=this.getSectionKey(),n=this.getPropertie(i);return n?"date"===n.type?e.formatDate(t.ablaufdatum,"dd.MM.yyyy"):t.name.charAt(0):""}newSection(t,e){if(t){const i=this.getSectionKey(),n=this.getPropertie(i);if(n){const o=this.getSectionText(t),r=this.getSectionText(e);return"date"===n.type?e[i].getTime()>t[i].getTime():o.charAt(0)!=r.charAt(0)}}return!1}}let Gn=class extends Q{constructor(){super(),this.nidocaDateHelper=new Hn,this.items=[],this.properties=[],this.hideSidebox=!0,this.showDeleteDialog=!1,this.showDuplicateDialog=!1,this.errorMessage="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{"controller"==e&&this.controller&&(this.properties=this.controller.getProperties(),this.controller.search("").then((t=>{this.items=t,this.requestUpdate()})))}))}render(){return D`
            <nidoca-split-screen .hideSidebox="${this.hideSidebox}">
                <div slot="left">
                    <nidoca-box>
                        <nidoca-text-h2>Verträge</nidoca-text-h2>
                        <nidoca-text-caption>${this.items.length} Verträge</nidoca-text-caption>
                        <nidoca-search-bar
                                style="flex-basis:auto;"
                                id="searchbar"
                                placeholder="Suche..."
                                @nidoca-search-bar-event-value-changed="${t=>{var e;null===(e=this.controller)||void 0===e||e.search(t.detail).then((t=>{this.items=t,this.requestUpdate()}))}}"
                        ></nidoca-search-bar>
                    </nidoca-box>
                    <nidoca-list selectionMode>
                        ${this.items.map(((t,e)=>{var i,n;return D`
                                ${0==e||(null===(i=this.controller)||void 0===i?void 0:i.newSection(this.items[e-1],t))?D`
                                            <nidoca-list-section>${null===(n=this.controller)||void 0===n?void 0:n.getSectionText(t)}
                                            </nidoca-list-section>`:D``}
                                <nidoca-list-item
                                        @nidoca-event-list-item-click="${()=>{this.initItem(t)}}"
                                        primaryText="${this.getPrimaryText(t)}"
                                        secondaryText="${this.getSecondaryText(t)}"
                                ></nidoca-list-item>
                            `}))}
                    </nidoca-list>
                </div>

                <div slot="sidebox">
                    ${this.item?D`
                                <nidoca-box>
                                    <nidoca-top-app-bar theme="background">
                                        <nidoca-text-body slot="left">${this.getPrimaryText(this.item)}
                                        </nidoca-text-body>
                                        <nidoca-icon
                                                style="padding-right: var(--space-2);"
                                                icon="done"
                                                slot="right"
                                                title="Speichern"
                                                @nidoca-event-icon-clicked="${()=>{var t,e;if(this.errorMessage="",this.editForm&&this.editForm.validate()){const i=(new Fn).getCurrent(this);""==i[this.getPrimaryIdKey()]?(i[this.getPrimaryIdKey()]=null,null===(t=this.controller)||void 0===t||t.persist(i).then((t=>{this.item=void 0,this.hideSidebox=!0,this.updateList(t)}))):null===(e=this.controller)||void 0===e||e.update(i).then((t=>{t?(this.item=void 0,this.hideSidebox=!0,this.updateList(i)):this.errorMessage="Fehler beim Speichern"}))}else this.errorMessage="Das Formular enthält Fehler. Bitte überprüfen Sie den Inhalt"}}"
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
                                    ${this.errorMessage?D`
                                        <nidoca-text-error>${this.errorMessage}</nidoca-text-error>`:D``}
                                </nidoca-box>

                                <nidoca-box>
                                    <nidoca-form id="editForm">
                                        ${this.properties.map((t=>D`${t.key==this.getPrimaryIdKey()?D`
                                                        <nidoca-form-text
                                                                type="${oe.HIDDEN}"
                                                                name="${t.key}"
                                                                value="${this.item[t.key]}"
                                                        >
                                                        </nidoca-form-text>
                                                    `:"date"==t.type?D`
                                                                <nidoca-form-date
                                                                        name="${t.key}"
                                                                        label="${t.label}"
                                                                        value="${this.item[t.key]?this.nidocaDateHelper.formatDate(this.item[t.key],"yyyy-MM-dd"):""}"
                                                                        ?required="${t.required}"
                                                                ></nidoca-form-date>`:"checkbox"==t.type?D`
                                                                        <nidoca-form-switch
                                                                                name="${t.key}"
                                                                                label="${t.label}"
                                                                                .checked="${this.item[t.key]}"
                                                                        ></nidoca-form-switch>`:"object"==t.type?D``:"textarea"==t.type?D`
                                                                                        <nidoca-form-textarea
                                                                                                type="${t.type}"
                                                                                                name="${t.key}"
                                                                                                label="${t.label}"
                                                                                                value="${this.item[t.key]}"
                                                                                                ?required="${t.required}"
                                                                                        ></nidoca-form-textarea>`:D`
                                                                                        <nidoca-form-text
                                                                                                type="${t.type}"
                                                                                                step="${ne(t.step)}"
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
                            `:D``}
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
        `}updateList(t){var e;let i=!0;const n=null===(e=this.controller)||void 0===e?void 0:e.getPrimaryIdKey();n&&(this.items=this.items.map((e=>e[n]==t[n]?(i=!1,t):e)),t[n]&&i&&this.items.push(t))}initItem(t){this.item=t,this.hideSidebox=!1}getPrimaryIdKey(){return this.controller?this.controller.getPrimaryIdKey():"id"}getPrimaryText(t){return this.controller?this.controller.getPrimaryText(t):""}getSecondaryText(t){return this.controller?this.controller.getSecondaryText(t):""}};Gn.styles=o``,Yn([st({type:Object,converter:Object}),qn("design:type",Object)],Gn.prototype,"controller",void 0),Yn([st({type:Object,converter:Object}),qn("design:type",Object)],Gn.prototype,"item",void 0),Yn([st({type:Boolean,converter:String}),qn("design:type",Boolean)],Gn.prototype,"hideSidebox",void 0),Yn([st({type:Boolean,converter:String}),qn("design:type",Boolean)],Gn.prototype,"showDeleteDialog",void 0),Yn([st({type:Boolean,converter:String}),qn("design:type",Boolean)],Gn.prototype,"showDuplicateDialog",void 0),Yn([st({type:it,converter:String}),qn("design:type",String)],Gn.prototype,"theme",void 0),Yn([lt("#searchbar"),qn("design:type",Object)],Gn.prototype,"searchbar",void 0),Yn([lt("#editForm"),qn("design:type",Object)],Gn.prototype,"editForm",void 0),Yn([st({type:String,converter:String}),qn("design:type",String)],Gn.prototype,"errorMessage",void 0),Gn=Yn([ot("nidoca-generic-crud"),qn("design:paramtypes",[])],Gn);var Xn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Jn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Zn=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return D`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
        .type="${oe.BODY2}"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `}};Zn.styles=o`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,Xn([st({type:String}),Jn("design:type",String)],Zn.prototype,"primaryText",void 0),Xn([st({type:String}),Jn("design:type",String)],Zn.prototype,"text",void 0),Xn([st({type:String}),Jn("design:type",String)],Zn.prototype,"icon",void 0),Zn=Xn([ot("nidoca-icon-with-description")],Zn);var Qn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},to=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let eo=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return D`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${oe.TEXT}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.TEXT}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${Ct.CONTAINED}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};eo.styles=o`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Qn([st({type:it,converter:String}),to("design:type",Object)],eo.prototype,"theme",void 0),Qn([st({type:String,converter:String}),to("design:type",String)],eo.prototype,"label",void 0),Qn([st({type:String,converter:String}),to("design:type",String)],eo.prototype,"nameLabel",void 0),Qn([st({type:String,converter:String}),to("design:type",String)],eo.prototype,"emailLabel",void 0),Qn([st({type:String,converter:String}),to("design:type",String)],eo.prototype,"titleLabel",void 0),Qn([st({type:String,converter:String}),to("design:type",String)],eo.prototype,"messageLabel",void 0),Qn([st({type:String,converter:String}),to("design:type",String)],eo.prototype,"buttonLabel",void 0),Qn([lt("#authenitcate-form"),to("design:type",Object)],eo.prototype,"formComponent",void 0),eo=Qn([ot("nidoca-form-contact")],eo);const io="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function no(t,e,i){const n=i||(t=>Array.prototype.slice.call(t));let o=!1,r=[];return function(...i){r=n(i),o||(o=!0,io.call(window,(()=>{o=!1,t.apply(e,r)})))}}const oo=t=>"start"===t?"left":"end"===t?"right":"center",ro=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2;function so(){}const ao=function(){let t=0;return function(){return t++}}();function lo(t){return null==t}function co(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function ho(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const po=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function uo(t,e){return po(t)?t:e}function fo(t,e){return void 0===t?e:t}const go=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function mo(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function yo(t,e,i,n){let o,r,s;if(co(t))if(r=t.length,n)for(o=r-1;o>=0;o--)e.call(i,t[o],o);else for(o=0;o<r;o++)e.call(i,t[o],o);else if(ho(t))for(s=Object.keys(t),r=s.length,o=0;o<r;o++)e.call(i,t[s[o]],s[o])}function bo(t,e){let i,n,o,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(o=t[i],r=e[i],o.datasetIndex!==r.datasetIndex||o.index!==r.index)return!1;return!0}function xo(t){if(co(t))return t.map(xo);if(ho(t)){const e=Object.create(null),i=Object.keys(t),n=i.length;let o=0;for(;o<n;++o)e[i[o]]=xo(t[i[o]]);return e}return t}function vo(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function wo(t,e,i,n){if(!vo(t))return;const o=e[t],r=i[t];ho(o)&&ho(r)?_o(o,r,n):e[t]=xo(r)}function _o(t,e,i){const n=co(e)?e:[e],o=n.length;if(!ho(t))return t;const r=(i=i||{}).merger||wo;for(let s=0;s<o;++s){if(!ho(e=n[s]))continue;const o=Object.keys(e);for(let n=0,s=o.length;n<s;++n)r(o[n],t,e,i)}return t}function ko(t,e){return _o(t,e,{merger:So})}function So(t,e,i){if(!vo(t))return;const n=e[t],o=i[t];ho(n)&&ho(o)?ko(n,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=xo(o))}function Ro(t,e){const i=t.indexOf(".",e);return-1===i?t.length:i}function Oo(t,e){if(""===e)return t;let i=0,n=Ro(e,i);for(;t&&n>i;)t=t[e.substr(i,n-i)],i=n+1,n=Ro(e,i);return t}function $o(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Eo=t=>void 0!==t,Po=t=>"function"==typeof t,Mo=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0},To=Math.PI,Ao=2*To,Do=Ao+To,Co=Number.POSITIVE_INFINITY,jo=To/180,Io=To/2,Lo=To/4,No=2*To/3,Bo=Math.log10,zo=Math.sign;function Wo(t){const e=Math.round(t);t=Ho(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(Bo(t))),n=t/i;return(n<=1?1:n<=2?2:n<=5?5:10)*i}function Fo(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Ho(t,e,i){return Math.abs(t-e)<i}function Uo(t,e,i){let n,o,r;for(n=0,o=t.length;n<o;n++)r=t[n][i],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function Vo(t){return t*(To/180)}function Yo(t){return t*(180/To)}function qo(t){if(!po(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Ko(t,e){const i=e.x-t.x,n=e.y-t.y,o=Math.sqrt(i*i+n*n);let r=Math.atan2(n,i);return r<-.5*To&&(r+=Ao),{angle:r,distance:o}}function Go(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Xo(t,e){return(t-e+Do)%Ao-To}function Jo(t){return(t%Ao+Ao)%Ao}function Zo(t,e,i,n){const o=Jo(t),r=Jo(e),s=Jo(i),a=Jo(r-o),l=Jo(s-o),c=Jo(o-r),d=Jo(o-s);return o===r||o===s||n&&r===s||a>l&&c<d}function Qo(t,e,i){return Math.max(e,Math.min(i,t))}function tr(t,e,i,n=1e-6){return t>=Math.min(e,i)-n&&t<=Math.max(e,i)+n}const er=t=>0===t||1===t,ir=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*Ao/i),nr=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*Ao/i)+1,or={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Io),easeOutSine:t=>Math.sin(t*Io),easeInOutSine:t=>-.5*(Math.cos(To*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>er(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>er(t)?t:ir(t,.075,.3),easeOutElastic:t=>er(t)?t:nr(t,.075,.3),easeInOutElastic(t){const e=.1125;return er(t)?t:t<.5?.5*ir(2*t,e,.45):.5+.5*nr(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-or.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*or.easeInBounce(2*t):.5*or.easeOutBounce(2*t-1)+.5},rr={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},sr="0123456789ABCDEF",ar=t=>sr[15&t],lr=t=>sr[(240&t)>>4]+sr[15&t],cr=t=>(240&t)>>4==(15&t);function dr(t){return t+.5|0}const hr=(t,e,i)=>Math.max(Math.min(t,i),e);function pr(t){return hr(dr(2.55*t),0,255)}function ur(t){return hr(dr(255*t),0,255)}function fr(t){return hr(dr(t/2.55)/100,0,1)}function gr(t){return hr(dr(100*t),0,100)}const mr=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,yr=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function br(t,e,i){const n=e*Math.min(i,1-i),o=(e,o=(e+t/30)%12)=>i-n*Math.max(Math.min(o-3,9-o,1),-1);return[o(0),o(8),o(4)]}function xr(t,e,i){const n=(n,o=(n+t/60)%6)=>i-i*e*Math.max(Math.min(o,4-o,1),0);return[n(5),n(3),n(1)]}function vr(t,e,i){const n=br(t,1,.5);let o;for(e+i>1&&(o=1/(e+i),e*=o,i*=o),o=0;o<3;o++)n[o]*=1-e-i,n[o]+=e;return n}function wr(t){const e=t.r/255,i=t.g/255,n=t.b/255,o=Math.max(e,i,n),r=Math.min(e,i,n),s=(o+r)/2;let a,l,c;return o!==r&&(c=o-r,l=s>.5?c/(2-o-r):c/(o+r),a=o===e?(i-n)/c+(i<n?6:0):o===i?(n-e)/c+2:(e-i)/c+4,a=60*a+.5),[0|a,l||0,s]}function _r(t,e,i,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,n)).map(ur)}function kr(t,e,i){return _r(br,t,e,i)}function Sr(t){return(t%360+360)%360}const Rr={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Or={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let $r;function Er(t,e,i){if(t){let n=wr(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*i,0===e?360:1)),n=kr(n),t.r=n[0],t.g=n[1],t.b=n[2]}}function Pr(t,e){return t?Object.assign(e||{},t):t}function Mr(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=ur(t[3]))):(e=Pr(t,{r:0,g:0,b:0,a:1})).a=ur(e.a),e}function Tr(t){return"r"===t.charAt(0)?function(t){const e=mr.exec(t);let i,n,o,r=255;if(e){if(e[7]!==i){const t=+e[7];r=255&(e[8]?pr(t):255*t)}return i=+e[1],n=+e[3],o=+e[5],i=255&(e[2]?pr(i):i),n=255&(e[4]?pr(n):n),o=255&(e[6]?pr(o):o),{r:i,g:n,b:o,a:r}}}(t):function(t){const e=yr.exec(t);let i,n=255;if(!e)return;e[5]!==i&&(n=e[6]?pr(+e[5]):ur(+e[5]));const o=Sr(+e[2]),r=+e[3]/100,s=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return _r(vr,t,e,i)}(o,r,s):"hsv"===e[1]?function(t,e,i){return _r(xr,t,e,i)}(o,r,s):kr(o,r,s),{r:i[0],g:i[1],b:i[2],a:n}}(t)}class Ar{constructor(t){if(t instanceof Ar)return t;const e=typeof t;let i;var n,o,r;"object"===e?i=Mr(t):"string"===e&&(r=(n=t).length,"#"===n[0]&&(4===r||5===r?o={r:255&17*rr[n[1]],g:255&17*rr[n[2]],b:255&17*rr[n[3]],a:5===r?17*rr[n[4]]:255}:7!==r&&9!==r||(o={r:rr[n[1]]<<4|rr[n[2]],g:rr[n[3]]<<4|rr[n[4]],b:rr[n[5]]<<4|rr[n[6]],a:9===r?rr[n[7]]<<4|rr[n[8]]:255})),i=o||function(t){$r||($r=function(){const t={},e=Object.keys(Or),i=Object.keys(Rr);let n,o,r,s,a;for(n=0;n<e.length;n++){for(s=a=e[n],o=0;o<i.length;o++)r=i[o],a=a.replace(r,Rr[r]);r=parseInt(Or[s],16),t[a]=[r>>16&255,r>>8&255,255&r]}return t}(),$r.transparent=[0,0,0,0]);const e=$r[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}(t)||Tr(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Pr(this._rgb);return t&&(t.a=fr(t.a)),t}set rgb(t){this._rgb=Mr(t)}rgbString(){return this._valid?function(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${fr(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}(this._rgb):this._rgb}hexString(){return this._valid?function(t){var e=function(t){return cr(t.r)&&cr(t.g)&&cr(t.b)&&cr(t.a)}(t)?ar:lr;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):""):t}(this._rgb):this._rgb}hslString(){return this._valid?function(t){if(!t)return;const e=wr(t),i=e[0],n=gr(e[1]),o=gr(e[2]);return t.a<255?`hsla(${i}, ${n}%, ${o}%, ${fr(t.a)})`:`hsl(${i}, ${n}%, ${o}%)`}(this._rgb):this._rgb}mix(t,e){const i=this;if(t){const n=i.rgb,o=t.rgb;let r;const s=e===r?.5:e,a=2*s-1,l=n.a-o.a,c=((a*l==-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,n.r=255&c*n.r+r*o.r+.5,n.g=255&c*n.g+r*o.g+.5,n.b=255&c*n.b+r*o.b+.5,n.a=s*n.a+(1-s)*o.a,i.rgb=n}return i}clone(){return new Ar(this.rgb)}alpha(t){return this._rgb.a=ur(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=dr(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Er(this._rgb,2,t),this}darken(t){return Er(this._rgb,2,-t),this}saturate(t){return Er(this._rgb,1,t),this}desaturate(t){return Er(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=wr(t);i[0]=Sr(i[0]+e),i=kr(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function Dr(t){return new Ar(t)}const Cr=t=>t instanceof CanvasGradient||t instanceof CanvasPattern;function jr(t){return Cr(t)?t:Dr(t)}function Ir(t){return Cr(t)?t:Dr(t).saturate(.5).darken(.1).hexString()}const Lr=Object.create(null),Nr=Object.create(null);function Br(t,e){if(!e)return t;const i=e.split(".");for(let e=0,n=i.length;e<n;++e){const n=i[e];t=t[n]||(t[n]=Object.create(null))}return t}function zr(t,e,i){return"string"==typeof e?_o(Br(t,e),i):_o(Br(t,""),e)}var Wr=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>Ir(e.backgroundColor),this.hoverBorderColor=(t,e)=>Ir(e.borderColor),this.hoverColor=(t,e)=>Ir(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return zr(this,t,e)}get(t){return Br(this,t)}describe(t,e){return zr(Nr,t,e)}override(t,e){return zr(Lr,t,e)}route(t,e,i,n){const o=Br(this,t),r=Br(this,i),s="_"+e;Object.defineProperties(o,{[s]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[s],e=r[n];return ho(t)?Object.assign({},e,t):fo(t,e)},set(t){this[s]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Fr(t,e,i,n,o){let r=e[o];return r||(r=e[o]=t.measureText(o).width,i.push(o)),r>n&&(n=r),n}function Hr(t,e,i,n){let o=(n=n||{}).data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(o=n.data={},r=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let s=0;const a=i.length;let l,c,d,h,p;for(l=0;l<a;l++)if(h=i[l],null!=h&&!0!==co(h))s=Fr(t,o,r,s,h);else if(co(h))for(c=0,d=h.length;c<d;c++)p=h[c],null==p||co(p)||(s=Fr(t,o,r,s,p));t.restore();const u=r.length/2;if(u>i.length){for(l=0;l<u;l++)delete o[r[l]];r.splice(0,u)}return s}function Ur(t,e,i){const n=t.currentDevicePixelRatio,o=0!==i?Math.max(i/2,.5):0;return Math.round((e-o)*n)/n+o}function Vr(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Yr(t,e,i,n){let o,r,s,a,l;const c=e.pointStyle,d=e.rotation,h=e.radius;let p=(d||0)*jo;if(c&&"object"==typeof c&&(o=c.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,n),t.rotate(p),t.drawImage(c,-c.width/2,-c.height/2,c.width,c.height),void t.restore();if(!(isNaN(h)||h<=0)){switch(t.beginPath(),c){default:t.arc(i,n,h,0,Ao),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(p)*h,n-Math.cos(p)*h),p+=No,t.lineTo(i+Math.sin(p)*h,n-Math.cos(p)*h),p+=No,t.lineTo(i+Math.sin(p)*h,n-Math.cos(p)*h),t.closePath();break;case"rectRounded":l=.516*h,a=h-l,r=Math.cos(p+Lo)*a,s=Math.sin(p+Lo)*a,t.arc(i-r,n-s,l,p-To,p-Io),t.arc(i+s,n-r,l,p-Io,p),t.arc(i+r,n+s,l,p,p+Io),t.arc(i-s,n+r,l,p+Io,p+To),t.closePath();break;case"rect":if(!d){a=Math.SQRT1_2*h,t.rect(i-a,n-a,2*a,2*a);break}p+=Lo;case"rectRot":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+s,n-r),t.lineTo(i+r,n+s),t.lineTo(i-s,n+r),t.closePath();break;case"crossRot":p+=Lo;case"cross":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+r,n+s),t.moveTo(i+s,n-r),t.lineTo(i-s,n+r);break;case"star":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+r,n+s),t.moveTo(i+s,n-r),t.lineTo(i-s,n+r),p+=Lo,r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+r,n+s),t.moveTo(i+s,n-r),t.lineTo(i-s,n+r);break;case"line":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+r,n+s);break;case"dash":t.moveTo(i,n),t.lineTo(i+Math.cos(p)*h,n+Math.sin(p)*h)}t.fill(),e.borderWidth>0&&t.stroke()}}function qr(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function Kr(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Gr(t){t.restore()}function Xr(t,e,i,n,o){if(!e)return t.lineTo(i.x,i.y);if("middle"===o){const n=(e.x+i.x)/2;t.lineTo(n,e.y),t.lineTo(n,i.y)}else"after"===o!=!!n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function Jr(t,e,i,n){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?i.cp2x:i.cp1x,n?i.cp2y:i.cp1y,i.x,i.y)}function Zr(t,e,i,n,o,r={}){const s=co(e)?e:[e],a=r.strokeWidth>0&&""!==r.strokeColor;let l,c;for(t.save(),t.font=o.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),lo(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,r),l=0;l<s.length;++l)c=s[l],a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),lo(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,i,n,r.maxWidth)),t.fillText(c,i,n,r.maxWidth),Qr(t,i,n,c,r),n+=o.lineHeight;t.restore()}function Qr(t,e,i,n,o){if(o.strikethrough||o.underline){const r=t.measureText(n),s=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=i-r.actualBoundingBoxAscent,c=i+r.actualBoundingBoxDescent,d=o.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(s,d),t.lineTo(a,d),t.stroke()}}function ts(t,e){const{x:i,y:n,w:o,h:r,radius:s}=e;t.arc(i+s.topLeft,n+s.topLeft,s.topLeft,-Io,To,!0),t.lineTo(i,n+r-s.bottomLeft),t.arc(i+s.bottomLeft,n+r-s.bottomLeft,s.bottomLeft,To,Io,!0),t.lineTo(i+o-s.bottomRight,n+r),t.arc(i+o-s.bottomRight,n+r-s.bottomRight,s.bottomRight,Io,0,!0),t.lineTo(i+o,n+s.topRight),t.arc(i+o-s.topRight,n+s.topRight,s.topRight,0,-Io,!0),t.lineTo(i+s.topLeft,n)}const es=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),is=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function ns(t,e){const i=(""+t).match(es);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}const os=t=>+t||0;function rs(t,e){const i={},n=ho(e),o=n?Object.keys(e):e,r=ho(t)?n?i=>fo(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of o)i[t]=os(r(t));return i}function ss(t){return rs(t,{top:"y",right:"x",bottom:"y",left:"x"})}function as(t){return rs(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ls(t){const e=ss(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function cs(t,e){t=t||{},e=e||Wr.font;let i=fo(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let n=fo(t.style,e.style);n&&!(""+n).match(is)&&(console.warn('Invalid font style specified: "'+n+'"'),n="");const o={family:fo(t.family,e.family),lineHeight:ns(fo(t.lineHeight,e.lineHeight),i),size:i,style:n,weight:fo(t.weight,e.weight),string:""};return o.string=function(t){return!t||lo(t.size)||lo(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(o),o}function ds(t,e,i,n){let o,r,s,a=!0;for(o=0,r=t.length;o<r;++o)if(s=t[o],void 0!==s&&(void 0!==e&&"function"==typeof s&&(s=s(e),a=!1),void 0!==i&&co(s)&&(s=s[i%s.length],a=!1),void 0!==s))return n&&!a&&(n.cacheable=!1),s}function hs(t,e){return Object.assign(Object.create(t),e)}function ps(t,e,i){i=i||(i=>t[i]<e);let n,o=t.length-1,r=0;for(;o-r>1;)n=r+o>>1,i(n)?r=n:o=n;return{lo:r,hi:o}}const us=(t,e,i)=>ps(t,i,(n=>t[n][e]<i)),fs=(t,e,i)=>ps(t,i,(n=>t[n][e]>=i)),gs=["push","pop","shift","splice","unshift"];function ms(t,e){const i=t._chartjs;if(!i)return;const n=i.listeners,o=n.indexOf(e);-1!==o&&n.splice(o,1),n.length>0||(gs.forEach((e=>{delete t[e]})),delete t._chartjs)}function ys(t){const e=new Set;let i,n;for(i=0,n=t.length;i<n;++i)e.add(t[i]);return e.size===n?t:Array.from(e)}function bs(t,e=[""],i=t,n,o=(()=>t[0])){Eo(n)||(n=Ps("_fallback",t));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:n,_getTarget:o,override:o=>bs([o,...t],e,i,n)};return new Proxy(r,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,n)=>ks(i,n,(()=>function(t,e,i,n){let o;for(const r of e)if(o=Ps(ws(r,t),i),Eo(o))return _s(t,o)?$s(i,n,t,o):o}(n,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>Ms(t).includes(e),ownKeys:t=>Ms(t),set(t,e,i){const n=t._storage||(t._storage=o());return t[e]=n[e]=i,delete t._keys,!0}})}function xs(t,e,i,n){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:vs(t,n),setContext:e=>xs(t,e,i,n),override:o=>xs(t.override(o),e,i,n)};return new Proxy(o,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>ks(t,e,(()=>function(t,e,i){const{_proxy:n,_context:o,_subProxy:r,_descriptors:s}=t;let a=n[e];return Po(a)&&s.isScriptable(e)&&(a=function(t,e,i,n){const{_proxy:o,_context:r,_subProxy:s,_stack:a}=i;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);return a.add(t),e=e(r,s||n),a.delete(t),_s(t,e)&&(e=$s(o._scopes,o,t,e)),e}(e,a,t,i)),co(a)&&a.length&&(a=function(t,e,i,n){const{_proxy:o,_context:r,_subProxy:s,_descriptors:a}=i;if(Eo(r.index)&&n(t))e=e[r.index%e.length];else if(ho(e[0])){const i=e,n=o._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=$s(n,o,t,l);e.push(xs(i,r,s&&s[t],a))}}return e}(e,a,t,s.isIndexable)),_s(e,a)&&(a=xs(a,o,r&&r[e],s)),a}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,n)=>(t[i]=n,delete e[i],!0)})}function vs(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:n=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:i,indexable:n,isScriptable:Po(i)?i:()=>i,isIndexable:Po(n)?n:()=>n}}const ws=(t,e)=>t?t+$o(e):e,_s=(t,e)=>ho(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function ks(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const n=i();return t[e]=n,n}function Ss(t,e,i){return Po(t)?t(e,i):t}const Rs=(t,e)=>!0===t?e:"string"==typeof t?Oo(e,t):void 0;function Os(t,e,i,n,o){for(const r of e){const e=Rs(i,r);if(e){t.add(e);const r=Ss(e._fallback,i,o);if(Eo(r)&&r!==i&&r!==n)return r}else if(!1===e&&Eo(n)&&i!==n)return null}return!1}function $s(t,e,i,n){const o=e._rootScopes,r=Ss(e._fallback,i,n),s=[...t,...o],a=new Set;a.add(n);let l=Es(a,s,i,r||i,n);return null!==l&&(!Eo(r)||r===i||(l=Es(a,s,r,l,n),null!==l))&&bs(Array.from(a),[""],o,r,(()=>function(t,e,i){const n=t._getTarget();e in n||(n[e]={});const o=n[e];return co(o)&&ho(i)?i:o}(e,i,n)))}function Es(t,e,i,n,o){for(;i;)i=Os(t,e,i,n,o);return i}function Ps(t,e){for(const i of e){if(!i)continue;const e=i[t];if(Eo(e))return e}}function Ms(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}const Ts=Number.EPSILON||1e-14,As=(t,e)=>e<t.length&&!t[e].skip&&t[e],Ds=t=>"x"===t?"y":"x";function Cs(t,e,i,n){const o=t.skip?e:t,r=e,s=i.skip?e:i,a=Go(r,o),l=Go(s,r);let c=a/(a+l),d=l/(a+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=n*c,p=n*d;return{previous:{x:r.x-h*(s.x-o.x),y:r.y-h*(s.y-o.y)},next:{x:r.x+p*(s.x-o.x),y:r.y+p*(s.y-o.y)}}}function js(t,e,i){return Math.max(Math.min(t,i),e)}function Is(t,e,i,n,o){let r,s,a,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)!function(t,e="x"){const i=Ds(e),n=t.length,o=Array(n).fill(0),r=Array(n);let s,a,l,c=As(t,0);for(s=0;s<n;++s)if(a=l,l=c,c=As(t,s+1),l){if(c){const t=c[e]-l[e];o[s]=0!==t?(c[i]-l[i])/t:0}r[s]=a?c?zo(o[s-1])!==zo(o[s])?0:(o[s-1]+o[s])/2:o[s-1]:o[s]}!function(t,e,i){const n=t.length;let o,r,s,a,l,c=As(t,0);for(let d=0;d<n-1;++d)l=c,c=As(t,d+1),l&&c&&(Ho(e[d],0,Ts)?i[d]=i[d+1]=0:(o=i[d]/e[d],r=i[d+1]/e[d],a=Math.pow(o,2)+Math.pow(r,2),a<=9||(s=3/Math.sqrt(a),i[d]=o*s*e[d],i[d+1]=r*s*e[d])))}(t,o,r),function(t,e,i="x"){const n=Ds(i),o=t.length;let r,s,a,l=As(t,0);for(let c=0;c<o;++c){if(s=a,a=l,l=As(t,c+1),!a)continue;const o=a[i],d=a[n];s&&(r=(o-s[i])/3,a[`cp1${i}`]=o-r,a[`cp1${n}`]=d-r*e[c]),l&&(r=(l[i]-o)/3,a[`cp2${i}`]=o+r,a[`cp2${n}`]=d+r*e[c])}}(t,r,e)}(t,o);else{let i=n?t[t.length-1]:t[0];for(r=0,s=t.length;r<s;++r)a=t[r],l=Cs(i,a,t[Math.min(r+1,s-(n?0:1))%s],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,i=a}e.capBezierPoints&&function(t,e){let i,n,o,r,s,a=qr(t[0],e);for(i=0,n=t.length;i<n;++i)s=r,r=a,a=i<n-1&&qr(t[i+1],e),r&&(o=t[i],s&&(o.cp1x=js(o.cp1x,e.left,e.right),o.cp1y=js(o.cp1y,e.top,e.bottom)),a&&(o.cp2x=js(o.cp2x,e.left,e.right),o.cp2y=js(o.cp2y,e.top,e.bottom)))}(t,i)}function Ls(){return"undefined"!=typeof window&&"undefined"!=typeof document}function Ns(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function Bs(t,e,i){let n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}const zs=t=>window.getComputedStyle(t,null),Ws=["top","right","bottom","left"];function Fs(t,e,i){const n={};i=i?"-"+i:"";for(let o=0;o<4;o++){const r=Ws[o];n[r]=parseFloat(t[e+"-"+r+i])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}function Hs(t,e){const{canvas:i,currentDevicePixelRatio:n}=e,o=zs(i),r="border-box"===o.boxSizing,s=Fs(o,"padding"),a=Fs(o,"border","width"),{x:l,y:c,box:d}=function(t,e){const i=t.native||t,n=i.touches,o=n&&n.length?n[0]:i,{offsetX:r,offsetY:s}=o;let a,l,c=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(r,s,i.target))a=r,l=s;else{const t=e.getBoundingClientRect();a=o.clientX-t.left,l=o.clientY-t.top,c=!0}return{x:a,y:l,box:c}}(t,i),h=s.left+(d&&a.left),p=s.top+(d&&a.top);let{width:u,height:f}=e;return r&&(u-=s.width+a.width,f-=s.height+a.height),{x:Math.round((l-h)/u*i.width/n),y:Math.round((c-p)/f*i.height/n)}}const Us=t=>Math.round(10*t)/10;function Vs(t,e,i){const n=e||1,o=Math.floor(t.height*n),r=Math.floor(t.width*n);t.height=o/n,t.width=r/n;const s=t.canvas;return s.style&&(i||!s.style.height&&!s.style.width)&&(s.style.height=`${t.height}px`,s.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==n||s.height!==o||s.width!==r)&&(t.currentDevicePixelRatio=n,s.height=o,s.width=r,t.ctx.setTransform(n,0,0,n,0,0),!0)}const Ys=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function qs(t,e){const i=function(t,e){return zs(t).getPropertyValue(e)}(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function Ks(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function Gs(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:"middle"===n?i<.5?t.y:e.y:"after"===n?i<1?t.y:e.y:i>0?e.y:t.y}}function Xs(t,e,i,n){const o={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},s=Ks(t,o,i),a=Ks(o,r,i),l=Ks(r,e,i),c=Ks(s,a,i),d=Ks(a,l,i);return Ks(c,d,i)}const Js=new Map;function Zs(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let n=Js.get(i);return n||(n=new Intl.NumberFormat(t,e),Js.set(i,n)),n}(e,i).format(t)}function Qs(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function ta(t,e){let i,n;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,n=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)}function ea(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function ia(t){return"angle"===t?{between:Zo,compare:Xo,normalize:Jo}:{between:tr,compare:(t,e)=>t-e,normalize:t=>t}}function na({start:t,end:e,count:i,loop:n,style:o}){return{start:t%i,end:e%i,loop:n&&(e-t+1)%i==0,style:o}}function oa(t,e,i){if(!i)return[t];const{property:n,start:o,end:r}=i,s=e.length,{compare:a,between:l,normalize:c}=ia(n),{start:d,end:h,loop:p,style:u}=function(t,e,i){const{property:n,start:o,end:r}=i,{between:s,normalize:a}=ia(n),l=e.length;let c,d,{start:h,end:p,loop:u}=t;if(u){for(h+=l,p+=l,c=0,d=l;c<d&&s(a(e[h%l][n]),o,r);++c)h--,p--;h%=l,p%=l}return p<h&&(p+=l),{start:h,end:p,loop:u,style:t.style}}(t,e,i),f=[];let g,m,y,b=!1,x=null;for(let t=d,i=d;t<=h;++t)m=e[t%s],m.skip||(g=c(m[n]),g!==y&&(b=l(g,o,r),null===x&&(b||l(o,y,g)&&0!==a(o,y))&&(x=0===a(g,o)?t:i),null!==x&&(!b||0===a(r,g)||l(r,y,g))&&(f.push(na({start:x,end:t,loop:p,count:s,style:u})),x=null),i=t,y=g));return null!==x&&f.push(na({start:x,end:h,loop:p,count:s,style:u})),f}function ra(t,e){const i=[],n=t.segments;for(let o=0;o<n.length;o++){const r=oa(n[o],t.points,e);r.length&&i.push(...r)}return i}function sa(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function aa(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var la=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,n){const o=e.listeners[n],r=e.duration;o.forEach((n=>n({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(i-e.start,r)})))}_refresh(){this._request||(this._running=!0,this._request=io.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((i,n)=>{if(!i.running||!i.items.length)return;const o=i.items;let r,s=o.length-1,a=!1;for(;s>=0;--s)r=o[s],r._active?(r._total>i.duration&&(i.duration=r._total),r.tick(t),a=!0):(o[s]=o[o.length-1],o.pop());a&&(n.draw(),this._notify(n,i,t,"progress")),o.length||(i.running=!1,this._notify(n,i,t,"complete"),i.initial=!1),e+=o.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let n=i.length-1;for(;n>=0;--n)i[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const ca="transparent",da={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const n=jr(t||ca),o=n.valid&&jr(e||ca);return o&&o.valid?o.mix(n,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class ha{constructor(t,e,i,n){const o=e[i];n=ds([t.to,n,o,t.from]);const r=ds([t.from,o,n]);this._active=!0,this._fn=t.fn||da[t.type||typeof r],this._easing=or[t.easing]||or.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const n=this._target[this._prop],o=i-this._start,r=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=ds([t.to,e,n,t.from]),this._from=ds([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,n=this._prop,o=this._from,r=this._loop,s=this._to;let a;if(this._active=o!==s&&(r||e<i),!this._active)return this._target[n]=s,void this._notify(!0);e<0?this._target[n]=o:(a=e/i%2,a=r&&a>1?2-a:a,a=this._easing(Math.min(1,Math.max(0,a))),this._target[n]=this._fn(o,s,a))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}Wr.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const pa=Object.keys(Wr.animation);Wr.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),Wr.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),Wr.describe("animations",{_fallback:"animation"}),Wr.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class ua{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!ho(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const n=t[i];if(!ho(n))return;const o={};for(const t of pa)o[t]=n[t];(co(n.properties)&&n.properties||[i]).forEach((t=>{t!==i&&e.has(t)||e.set(t,o)}))}))}_animateOptions(t,e){const i=e.options,n=function(t,e){if(!e)return;let i=t.options;if(i)return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i;t.options=e}(t,i);if(!n)return[];const o=this._createAnimations(n,i);return i.$shared&&function(t,e){const i=[],n=Object.keys(e);for(let e=0;e<n.length;e++){const o=t[n[e]];o&&o.active()&&i.push(o.wait())}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i}),(()=>{})),o}_createAnimations(t,e){const i=this._properties,n=[],o=t.$animations||(t.$animations={}),r=Object.keys(e),s=Date.now();let a;for(a=r.length-1;a>=0;--a){const l=r[a];if("$"===l.charAt(0))continue;if("options"===l){n.push(...this._animateOptions(t,e));continue}const c=e[l];let d=o[l];const h=i.get(l);if(d){if(h&&d.active()){d.update(h,c,s);continue}d.cancel()}h&&h.duration?(o[l]=d=new ha(h,t,l,c),n.push(d)):t[l]=c}return n}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(la.add(this._chart,i),!0):void 0}}function fa(t,e){const i=t&&t.options||{},n=i.reverse,o=void 0===i.min?e:0,r=void 0===i.max?e:0;return{start:n?r:o,end:n?o:r}}function ga(t,e){const i=[],n=t._getSortedDatasetMetas(e);let o,r;for(o=0,r=n.length;o<r;++o)i.push(n[o].index);return i}function ma(t,e,i,n={}){const o=t.keys,r="single"===n.mode;let s,a,l,c;if(null!==e){for(s=0,a=o.length;s<a;++s){if(l=+o[s],l===i){if(n.all)continue;break}c=t.values[l],po(c)&&(r||0===e||zo(e)===zo(c))&&(e+=c)}return e}}function ya(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function ba(t,e,i){const n=t[e]||(t[e]={});return n[i]||(n[i]={})}function xa(t,e,i,n){for(const o of e.getMatchingVisibleMetas(n).reverse()){const e=t[o.index];if(i&&e>0||!i&&e<0)return o.index}return null}function va(t,e){const{chart:i,_cachedMeta:n}=t,o=i._stacks||(i._stacks={}),{iScale:r,vScale:s,index:a}=n,l=r.axis,c=s.axis,d=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(r,s,n),h=e.length;let p;for(let t=0;t<h;++t){const i=e[t],{[l]:r,[c]:h}=i;p=(i._stacks||(i._stacks={}))[c]=ba(o,d,r),p[a]=h,p._top=xa(p,s,!0,n.type),p._bottom=xa(p,s,!1,n.type)}}function wa(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function _a(t,e){const i=t.controller.index,n=t.vScale&&t.vScale.axis;if(n){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[n]||void 0===e[n][i])return;delete e[n][i]}}}const ka=t=>"reset"===t||"none"===t,Sa=(t,e)=>e?t:Object.assign({},t);class Ra{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ya(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&_a(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),n=(t,e,i,n)=>"x"===t?e:"r"===t?n:i,o=e.xAxisID=fo(i.xAxisID,wa(t,"x")),r=e.yAxisID=fo(i.yAxisID,wa(t,"y")),s=e.rAxisID=fo(i.rAxisID,wa(t,"r")),a=e.indexAxis,l=e.iAxisID=n(a,o,r,s),c=e.vAxisID=n(a,r,o,s);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(s),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&ms(this._data,this),t._stacked&&_a(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(ho(e))this._data=function(t){const e=Object.keys(t),i=new Array(e.length);let n,o,r;for(n=0,o=e.length;n<o;++n)r=e[n],i[n]={x:r,y:t[r]};return i}(e);else if(i!==e){if(i){ms(i,this);const t=this._cachedMeta;_a(t),t._parsed=[]}e&&Object.isExtensible(e)&&(this,(n=e)._chartjs?n._chartjs.listeners.push(this):(Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[this]}}),gs.forEach((t=>{const e="_onData"+$o(t),i=n[t];Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value(...t){const o=i.apply(this,t);return n._chartjs.listeners.forEach((i=>{"function"==typeof i[e]&&i[e](...t)})),o}})})))),this._syncList=[],this._data=e}var n}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let n=!1;this._dataCheck();const o=e._stacked;e._stacked=ya(e.vScale,e),e.stack!==i.stack&&(n=!0,_a(e),e.stack=i.stack),this._resyncElements(t),(n||o!==e._stacked)&&va(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:n}=this,{iScale:o,_stacked:r}=i,s=o.axis;let a,l,c,d=0===t&&e===n.length||i._sorted,h=t>0&&i._parsed[t-1];if(!1===this._parsing)i._parsed=n,i._sorted=!0,c=n;else{c=co(n[t])?this.parseArrayData(i,n,t,e):ho(n[t])?this.parseObjectData(i,n,t,e):this.parsePrimitiveData(i,n,t,e);const o=()=>null===l[s]||h&&l[s]<h[s];for(a=0;a<e;++a)i._parsed[a+t]=l=c[a],d&&(o()&&(d=!1),h=l);i._sorted=d}r&&va(this,c)}parsePrimitiveData(t,e,i,n){const{iScale:o,vScale:r}=t,s=o.axis,a=r.axis,l=o.getLabels(),c=o===r,d=new Array(n);let h,p,u;for(h=0,p=n;h<p;++h)u=h+i,d[h]={[s]:c||o.parse(l[u],u),[a]:r.parse(e[u],u)};return d}parseArrayData(t,e,i,n){const{xScale:o,yScale:r}=t,s=new Array(n);let a,l,c,d;for(a=0,l=n;a<l;++a)c=a+i,d=e[c],s[a]={x:o.parse(d[0],c),y:r.parse(d[1],c)};return s}parseObjectData(t,e,i,n){const{xScale:o,yScale:r}=t,{xAxisKey:s="x",yAxisKey:a="y"}=this._parsing,l=new Array(n);let c,d,h,p;for(c=0,d=n;c<d;++c)h=c+i,p=e[h],l[c]={x:o.parse(Oo(p,s),h),y:r.parse(Oo(p,a),h)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const n=this.chart,o=this._cachedMeta,r=e[t.axis];return ma({keys:ga(n,!0),values:e._stacks[t.axis]},r,o.index,{mode:i})}updateRangeFromParsed(t,e,i,n){const o=i[e.axis];let r=null===o?NaN:o;const s=n&&i._stacks[e.axis];n&&s&&(n.values=s,r=ma(n,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const i=this._cachedMeta,n=i._parsed,o=i._sorted&&t===i.iScale,r=n.length,s=this._getOtherScale(t),a=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:ga(i,!0),values:null})(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:d}=function(t){const{min:e,max:i,minDefined:n,maxDefined:o}=t.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:o?i:Number.POSITIVE_INFINITY}}(s);let h,p;function u(){p=n[h];const e=p[s.axis];return!po(p[t.axis])||c>e||d<e}for(h=0;h<r&&(u()||(this.updateRangeFromParsed(l,t,p,a),!o));++h);if(o)for(h=r-1;h>=0;--h)if(!u()){this.updateRangeFromParsed(l,t,p,a);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let n,o,r;for(n=0,o=e.length;n<o;++n)r=e[n][t.axis],po(r)&&i.push(r);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,n=e.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:n?""+n.getLabelForValue(o[n.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,n,o;return ho(t)?(e=t.top,i=t.right,n=t.bottom,o=t.left):e=i=n=o=t,{top:e,right:i,bottom:n,left:o,disabled:!1===t}}(fo(this.options.clip,function(t,e,i){if(!1===i)return!1;const n=fa(t,i),o=fa(e,i);return{top:o.end,right:n.end,bottom:o.start,left:n.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,n=i.data||[],o=e.chartArea,r=[],s=this._drawStart||0,a=this._drawCount||n.length-s,l=this.options.drawActiveElementsOnTop;let c;for(i.dataset&&i.dataset.draw(t,o,s,a),c=s;c<s+a;++c){const e=n[c];e.hidden||(e.active&&l?r.push(e):e.draw(t,o))}for(c=0;c<r.length;++c)r[c].draw(t,o)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const n=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];o=e.$context||(e.$context=function(t,e,i){return hs(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),o.parsed=this.getParsed(t),o.raw=n.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=function(t,e){return hs(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),o.dataset=n,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const n="active"===e,o=this._cachedDataOpts,r=t+"-"+e,s=o[r],a=this.enableOptionSharing&&Eo(i);if(s)return Sa(s,a);const l=this.chart.config,c=l.datasetElementScopeKeys(this._type,t),d=n?[`${t}Hover`,"hover",t,""]:[t,""],h=l.getOptionScopes(this.getDataset(),c),p=Object.keys(Wr.elements[t]),u=l.resolveNamedOptions(h,p,(()=>this.getContext(i,n)),d);return u.$shared&&(u.$shared=a,o[r]=Object.freeze(Sa(u,a))),u}_resolveAnimations(t,e,i){const n=this.chart,o=this._cachedDataOpts,r=`animation-${e}`,s=o[r];if(s)return s;let a;if(!1!==n.options.animation){const n=this.chart.config,o=n.datasetAnimationScopeKeys(this._type,e),r=n.getOptionScopes(this.getDataset(),o);a=n.createResolver(r,this.getContext(t,i,e))}const l=new ua(n,a&&a.animations);return a&&a._cacheable&&(o[r]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||ka(t)||this.chart._animationsDisabled}updateElement(t,e,i,n){ka(n)?Object.assign(t,i):this._resolveAnimations(e,n).update(t,i)}updateSharedOptions(t,e,i){t&&!ka(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,n){t.active=n;const o=this.getStyle(e,n);this._resolveAnimations(e,i,n).update(t,{options:!n&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const n=i.length,o=e.length,r=Math.min(o,n);r&&this.parse(0,r),o>n?this._insertElements(n,o-n,t):o<n&&this._removeElements(o,n-o)}_insertElements(t,e,i=!0){const n=this._cachedMeta,o=n.data,r=t+e;let s;const a=t=>{for(t.length+=e,s=t.length-1;s>=r;s--)t[s]=t[s-e]};for(a(o),s=t;s<r;++s)o[s]=new this.dataElementType;this._parsing&&a(n._parsed),this.parse(t,e),i&&this.updateElements(o,t,e,"reset")}updateElements(t,e,i,n){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const n=i._parsed.splice(t,e);i._stacked&&_a(i,n)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,n]=t;this[e](i,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function Oa(t){const e=t.iScale,i=function(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let n=[];for(let e=0,o=i.length;e<o;e++)n=n.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=ys(n.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let n,o,r,s,a=e._length;const l=()=>{32767!==r&&-32768!==r&&(Eo(s)&&(a=Math.min(a,Math.abs(r-s)||a)),s=r)};for(n=0,o=i.length;n<o;++n)r=e.getPixelForValue(i[n]),l();for(s=void 0,n=0,o=e.ticks.length;n<o;++n)r=e.getPixelForTick(n),l();return a}function $a(t,e,i,n){return co(t)?function(t,e,i,n){const o=i.parse(t[0],n),r=i.parse(t[1],n),s=Math.min(o,r),a=Math.max(o,r);let l=s,c=a;Math.abs(s)>Math.abs(a)&&(l=a,c=s),e[i.axis]=c,e._custom={barStart:l,barEnd:c,start:o,end:r,min:s,max:a}}(t,e,i,n):e[i.axis]=i.parse(t,n),e}function Ea(t,e,i,n){const o=t.iScale,r=t.vScale,s=o.getLabels(),a=o===r,l=[];let c,d,h,p;for(c=i,d=i+n;c<d;++c)p=e[c],h={},h[o.axis]=a||o.parse(s[c],c),l.push($a(p,h,r,c));return l}function Pa(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function Ma(t,e,i,n){let o=e.borderSkipped;const r={};if(!o)return void(t.borderSkipped=r);const{start:s,end:a,reverse:l,top:c,bottom:d}=function(t){let e,i,n,o,r;return t.horizontal?(e=t.base>t.x,i="left",n="right"):(e=t.base<t.y,i="bottom",n="top"),e?(o="end",r="start"):(o="start",r="end"),{start:i,end:n,reverse:e,top:o,bottom:r}}(t);"middle"===o&&i&&(t.enableBorderRadius=!0,(i._top||0)===n?o=c:(i._bottom||0)===n?o=d:(r[Ta(d,s,a,l)]=!0,o=c)),r[Ta(o,s,a,l)]=!0,t.borderSkipped=r}function Ta(t,e,i,n){var o,r,s;return n?(s=i,t=Aa(t=(o=t)===(r=e)?s:o===s?r:o,i,e)):t=Aa(t,e,i),t}function Aa(t,e,i){return"start"===t?e:"end"===t?i:t}function Da(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}Ra.defaults={},Ra.prototype.datasetElementType=null,Ra.prototype.dataElementType=null;class Ca extends Ra{parsePrimitiveData(t,e,i,n){return Ea(t,e,i,n)}parseArrayData(t,e,i,n){return Ea(t,e,i,n)}parseObjectData(t,e,i,n){const{iScale:o,vScale:r}=t,{xAxisKey:s="x",yAxisKey:a="y"}=this._parsing,l="x"===o.axis?s:a,c="x"===r.axis?s:a,d=[];let h,p,u,f;for(h=i,p=i+n;h<p;++h)f=e[h],u={},u[o.axis]=o.parse(Oo(f,l),h),d.push($a(Oo(f,c),u,r,h));return d}updateRangeFromParsed(t,e,i,n){super.updateRangeFromParsed(t,e,i,n);const o=i._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:n}=e,o=this.getParsed(t),r=o._custom,s=Pa(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(o[n.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize(),this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,n){const o="reset"===n,{index:r,_cachedMeta:{vScale:s}}=this,a=s.getBasePixel(),l=s.isHorizontal(),c=this._getRuler(),d=this.resolveDataElementOptions(e,n),h=this.getSharedOptions(d),p=this.includeOptions(n,h);this.updateSharedOptions(h,n,d);for(let d=e;d<e+i;d++){const e=this.getParsed(d),i=o||lo(e[s.axis])?{base:a,head:a}:this._calculateBarValuePixels(d),u=this._calculateBarIndexPixels(d,c),f=(e._stacks||{})[s.axis],g={horizontal:l,base:i.base,enableBorderRadius:!f||Pa(e._custom)||r===f._top||r===f._bottom,x:l?i.head:u.center,y:l?u.center:i.head,height:l?u.size:Math.abs(i.size),width:l?Math.abs(i.size):u.size};p&&(g.options=h||this.resolveDataElementOptions(d,t[d].active?"active":n));const m=g.options||t[d].options;Ma(g,m,f,r),Da(g,m,c.ratio),this.updateElement(t[d],d,g,n)}}_getStacks(t,e){const i=this._cachedMeta.iScale,n=i.getMatchingVisibleMetas(this._type),o=i.options.stacked,r=n.length,s=[];let a,l;for(a=0;a<r;++a)if(l=n[a],l.controller.options.grouped){if(void 0!==e){const t=l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];if(lo(t)||isNaN(t))continue}if((!1===o||-1===s.indexOf(l.stack)||void 0===o&&void 0===l.stack)&&s.push(l.stack),l.index===t)break}return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){const n=this._getStacks(t,i),o=void 0!==e?n.indexOf(e):-1;return-1===o?n.length-1:o}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,n=[];let o,r;for(o=0,r=e.data.length;o<r;++o)n.push(i.getPixelForValue(this.getParsed(o)[i.axis],o));const s=t.barThickness;return{min:s||Oa(e),pixels:n,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i},options:{base:n,minBarLength:o}}=this,r=n||0,s=this.getParsed(t),a=s._custom,l=Pa(a);let c,d,h=s[e.axis],p=0,u=i?this.applyStack(e,s,i):h;u!==h&&(p=u-h,u=h),l&&(h=a.barStart,u=a.barEnd-a.barStart,0!==h&&zo(h)!==zo(a.barEnd)&&(p=0),p+=h);const f=lo(n)||l?p:n;let g=e.getPixelForValue(f);if(c=this.chart.getDataVisibility(t)?e.getPixelForValue(p+u):g,d=c-g,Math.abs(d)<o&&(d=function(t,e,i){return 0!==t?zo(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}(d,e,r)*o,h===r&&(g-=d/2),c=g+d),g===e.getPixelForValue(r)){const t=zo(d)*e.getLineWidthForValue(r)/2;g+=t,d-=t}return{size:d,base:g,head:c,center:c+d/2}}_calculateBarIndexPixels(t,e){const i=e.scale,n=this.options,o=n.skipNull,r=fo(n.maxBarThickness,1/0);let s,a;if(e.grouped){const i=o?this._getStackCount(t):e.stackCount,l="flex"===n.barThickness?function(t,e,i,n){const o=e.pixels,r=o[t];let s=t>0?o[t-1]:null,a=t<o.length-1?o[t+1]:null;const l=i.categoryPercentage;null===s&&(s=r-(null===a?e.end-e.start:a-r)),null===a&&(a=r+r-s);const c=r-(r-Math.min(s,a))/2*l;return{chunk:Math.abs(a-s)/2*l/n,ratio:i.barPercentage,start:c}}(t,e,n,i):function(t,e,i,n){const o=i.barThickness;let r,s;return lo(o)?(r=e.min*i.categoryPercentage,s=i.barPercentage):(r=o*n,s=1),{chunk:r/n,ratio:s,start:e.pixels[t]-r/2}}(t,e,n,i),c=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);s=l.start+l.chunk*c+l.chunk/2,a=Math.min(r,l.chunk*l.ratio)}else s=i.getPixelForValue(this.getParsed(t)[i.axis],t),a=Math.min(r,e.min*e.ratio);return{base:s-a/2,head:s+a/2,center:s,size:a}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,n=i.length;let o=0;for(;o<n;++o)null!==this.getParsed(o)[e.axis]&&i[o].draw(this._ctx)}}Ca.id="bar",Ca.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},Ca.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class ja extends Ra{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,n){const o=super.parsePrimitiveData(t,e,i,n);for(let t=0;t<o.length;t++)o[t]._custom=this.resolveDataElementOptions(t+i).radius;return o}parseArrayData(t,e,i,n){const o=super.parseArrayData(t,e,i,n);for(let t=0;t<o.length;t++){const n=e[i+t];o[t]._custom=fo(n[2],this.resolveDataElementOptions(t+i).radius)}return o}parseObjectData(t,e,i,n){const o=super.parseObjectData(t,e,i,n);for(let t=0;t<o.length;t++){const n=e[i+t];o[t]._custom=fo(n&&n.r&&+n.r,this.resolveDataElementOptions(t+i).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,{xScale:i,yScale:n}=e,o=this.getParsed(t),r=i.getLabelForValue(o.x),s=n.getLabelForValue(o.y),a=o._custom;return{label:e.label,value:"("+r+", "+s+(a?", "+a:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,n){const o="reset"===n,{iScale:r,vScale:s}=this._cachedMeta,a=this.resolveDataElementOptions(e,n),l=this.getSharedOptions(a),c=this.includeOptions(n,l),d=r.axis,h=s.axis;for(let a=e;a<e+i;a++){const e=t[a],i=!o&&this.getParsed(a),l={},p=l[d]=o?r.getPixelForDecimal(.5):r.getPixelForValue(i[d]),u=l[h]=o?s.getBasePixel():s.getPixelForValue(i[h]);l.skip=isNaN(p)||isNaN(u),c&&(l.options=this.resolveDataElementOptions(a,e.active?"active":n),o&&(l.options.radius=0)),this.updateElement(e,a,l,n)}this.updateSharedOptions(l,n,a)}resolveDataElementOptions(t,e){const i=this.getParsed(t);let n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const o=n.radius;return"active"!==e&&(n.radius=0),n.radius+=fo(i&&i._custom,o),n}}ja.id="bubble",ja.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},ja.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class Ia extends Ra{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,n=this._cachedMeta;if(!1===this._parsing)n._parsed=i;else{let o,r,s=t=>+i[t];if(ho(i[t])){const{key:t="value"}=this._parsing;s=e=>+Oo(i[e],t)}for(o=t,r=t+e;o<r;++o)n._parsed[o]=s(o)}}_getRotation(){return Vo(this.options.rotation-90)}_getCircumference(){return Vo(this.options.circumference)}_getRotationExtents(){let t=Ao,e=-Ao;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){const n=this.chart.getDatasetMeta(i).controller,o=n._getRotation(),r=n._getCircumference();t=Math.min(t,o),e=Math.max(e,o+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,n=this._cachedMeta,o=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,s=Math.max((Math.min(i.width,i.height)-r)/2,0),a=Math.min((c=s,"string"==typeof(l=this.options.cutout)&&l.endsWith("%")?parseFloat(l)/100:l/c),1);var l,c;const d=this._getRingWeight(this.index),{circumference:h,rotation:p}=this._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:g,offsetY:m}=function(t,e,i){let n=1,o=1,r=0,s=0;if(e<Ao){const a=t,l=a+e,c=Math.cos(a),d=Math.sin(a),h=Math.cos(l),p=Math.sin(l),u=(t,e,n)=>Zo(t,a,l,!0)?1:Math.max(e,e*i,n,n*i),f=(t,e,n)=>Zo(t,a,l,!0)?-1:Math.min(e,e*i,n,n*i),g=u(0,c,h),m=u(Io,d,p),y=f(To,c,h),b=f(To+Io,d,p);n=(g-y)/2,o=(m-b)/2,r=-(g+y)/2,s=-(m+b)/2}return{ratioX:n,ratioY:o,offsetX:r,offsetY:s}}(p,h,a),y=(i.width-r)/u,b=(i.height-r)/f,x=Math.max(Math.min(y,b)/2,0),v=go(this.options.radius,x),w=(v-Math.max(v*a,0))/this._getVisibleDatasetWeightTotal();this.offsetX=g*v,this.offsetY=m*v,n.total=this.calculateTotal(),this.outerRadius=v-w*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-w*d,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){const i=this.options,n=this._cachedMeta,o=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===n._parsed[t]||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*o/Ao)}updateElements(t,e,i,n){const o="reset"===n,r=this.chart,s=r.chartArea,a=r.options.animation,l=(s.left+s.right)/2,c=(s.top+s.bottom)/2,d=o&&a.animateScale,h=d?0:this.innerRadius,p=d?0:this.outerRadius,u=this.resolveDataElementOptions(e,n),f=this.getSharedOptions(u),g=this.includeOptions(n,f);let m,y=this._getRotation();for(m=0;m<e;++m)y+=this._circumference(m,o);for(m=e;m<e+i;++m){const e=this._circumference(m,o),i=t[m],r={x:l+this.offsetX,y:c+this.offsetY,startAngle:y,endAngle:y+e,circumference:e,outerRadius:p,innerRadius:h};g&&(r.options=f||this.resolveDataElementOptions(m,i.active?"active":n)),y+=e,this.updateElement(i,m,r,n)}this.updateSharedOptions(f,n,u)}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,n=0;for(i=0;i<e.length;i++){const o=t._parsed[i];null===o||isNaN(o)||!this.chart.getDataVisibility(i)||e[i].hidden||(n+=Math.abs(o))}return n}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Ao*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=Zs(e._parsed[t],i.options.locale);return{label:n[t]||"",value:o}}getMaxBorderWidth(t){let e=0;const i=this.chart;let n,o,r,s,a;if(!t)for(n=0,o=i.data.datasets.length;n<o;++n)if(i.isDatasetVisible(n)){r=i.getDatasetMeta(n),t=r.data,s=r.controller;break}if(!t)return 0;for(n=0,o=t.length;n<o;++n)a=s.resolveDataElementOptions(n),"inner"!==a.borderAlign&&(e=Math.max(e,a.borderWidth||0,a.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,n=t.length;i<n;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(fo(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}Ia.id="doughnut",Ia.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},Ia.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},Ia.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,n)=>{const o=t.getDatasetMeta(0).controller.getStyle(n);return{text:e,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(n),index:n}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const i=": "+t.formattedValue;return co(e)?(e=e.slice(),e[0]+=i):e+=i,e}}}}};class La extends Ra{initialize(){this.enableOptionSharing=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:n=[],_dataset:o}=e,r=this.chart._animationsDisabled;let{start:s,count:a}=function(t,e,i){const n=e.length;let o=0,r=n;if(t._sorted){const{iScale:s,_parsed:a}=t,l=s.axis,{min:c,max:d,minDefined:h,maxDefined:p}=s.getUserBounds();h&&(o=Qo(Math.min(us(a,s.axis,c).lo,i?n:us(e,l,s.getPixelForValue(c)).lo),0,n-1)),r=p?Qo(Math.max(us(a,s.axis,d).hi+1,i?0:us(e,l,s.getPixelForValue(d)).hi+1),o,n)-o:n-o}return{start:o,count:r}}(e,n,r);this._drawStart=s,this._drawCount=a,function(t){const{xScale:e,yScale:i,_scaleRanges:n}=t,o={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!n)return t._scaleRanges=o,!0;const r=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==i.min||n.ymax!==i.max;return Object.assign(n,o),r}(e)&&(s=0,a=n.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=n;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:l},t),this.updateElements(n,s,a,t)}updateElements(t,e,i,n){const o="reset"===n,{iScale:r,vScale:s,_stacked:a,_dataset:l}=this._cachedMeta,c=this.resolveDataElementOptions(e,n),d=this.getSharedOptions(c),h=this.includeOptions(n,d),p=r.axis,u=s.axis,{spanGaps:f,segment:g}=this.options,m=Fo(f)?f:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||o||"none"===n;let b=e>0&&this.getParsed(e-1);for(let c=e;c<e+i;++c){const e=t[c],i=this.getParsed(c),f=y?e:{},x=lo(i[u]),v=f[p]=r.getPixelForValue(i[p],c),w=f[u]=o||x?s.getBasePixel():s.getPixelForValue(a?this.applyStack(s,i,a):i[u],c);f.skip=isNaN(v)||isNaN(w)||x,f.stop=c>0&&i[p]-b[p]>m,g&&(f.parsed=i,f.raw=l.data[c]),h&&(f.options=d||this.resolveDataElementOptions(c,e.active?"active":n)),y||this.updateElement(e,c,f,n),b=i}this.updateSharedOptions(d,n,c)}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return i;const o=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,o,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}La.id="line",La.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},La.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class Na extends Ra{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=Zs(e._parsed[t].r,i.options.locale);return{label:n[t]||"",value:o}}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(n/2,0),r=(o-Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=o-r*this.index,this.innerRadius=this.outerRadius-r}updateElements(t,e,i,n){const o="reset"===n,r=this.chart,s=this.getDataset(),a=r.options.animation,l=this._cachedMeta.rScale,c=l.xCenter,d=l.yCenter,h=l.getIndexAngle(0)-.5*To;let p,u=h;const f=360/this.countVisibleElements();for(p=0;p<e;++p)u+=this._computeAngle(p,n,f);for(p=e;p<e+i;p++){const e=t[p];let i=u,g=u+this._computeAngle(p,n,f),m=r.getDataVisibility(p)?l.getDistanceFromCenterForValue(s.data[p]):0;u=g,o&&(a.animateScale&&(m=0),a.animateRotate&&(i=g=h));const y={x:c,y:d,innerRadius:0,outerRadius:m,startAngle:i,endAngle:g,options:this.resolveDataElementOptions(p,e.active?"active":n)};this.updateElement(e,p,y,n)}}countVisibleElements(){const t=this.getDataset(),e=this._cachedMeta;let i=0;return e.data.forEach(((e,n)=>{!isNaN(t.data[n])&&this.chart.getDataVisibility(n)&&i++})),i}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?Vo(this.resolveDataElementOptions(t,e).angle||i):0}}Na.id="polarArea",Na.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},Na.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,n)=>{const o=t.getDatasetMeta(0).controller.getStyle(n);return{text:e,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(n),index:n}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class Ba extends Ia{}Ba.id="pie",Ba.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class za extends Ra{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}update(t){const e=this._cachedMeta,i=e.dataset,n=e.data||[],o=e.iScale.getLabels();if(i.points=n,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const r={_loop:!0,_fullLoop:o.length===n.length,options:e};this.updateElement(i,void 0,r,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,i,n){const o=this.getDataset(),r=this._cachedMeta.rScale,s="reset"===n;for(let a=e;a<e+i;a++){const e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":n),l=r.getPointPositionForValue(a,o.data[a]),c=s?r.xCenter:l.x,d=s?r.yCenter:l.y,h={x:c,y:d,angle:l.angle,skip:isNaN(c)||isNaN(d),options:i};this.updateElement(e,a,h,n)}}}za.id="radar",za.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},za.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Wa extends La{}Wa.id="scatter",Wa.defaults={showLine:!1,fill:!1},Wa.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Fa=Object.freeze({__proto__:null,BarController:Ca,BubbleController:ja,DoughnutController:Ia,LineController:La,PolarAreaController:Na,PieController:Ba,RadarController:za,ScatterController:Wa});function Ha(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ua{constructor(t){this.options=t||{}}formats(){return Ha()}parse(t,e){return Ha()}format(t,e){return Ha()}add(t,e,i){return Ha()}diff(t,e,i){return Ha()}startOf(t,e,i){return Ha()}endOf(t,e){return Ha()}}Ua.override=function(t){Object.assign(Ua.prototype,t)};var Va={_date:Ua};function Ya(t,e){return"native"in t?{x:t.x,y:t.y}:Hs(t,e)}function qa(t,e,i,n){const{controller:o,data:r,_sorted:s}=t,a=o._cachedMeta.iScale;if(a&&e===a.axis&&"r"!==e&&s&&r.length){const t=a._reversePixels?fs:us;if(!n)return t(r,e,i);if(o._sharedOptions){const n=r[0],o="function"==typeof n.getRange&&n.getRange(e);if(o){const n=t(r,e,i-o),s=t(r,e,i+o);return{lo:n.lo,hi:s.hi}}}}return{lo:0,hi:r.length-1}}function Ka(t,e,i,n,o){const r=t.getSortedVisibleDatasetMetas(),s=i[e];for(let t=0,i=r.length;t<i;++t){const{index:i,data:a}=r[t],{lo:l,hi:c}=qa(r[t],e,s,o);for(let t=l;t<=c;++t){const e=a[t];e.skip||n(e,i,t)}}}function Ga(t,e,i,n){const o=[];return qr(e,t.chartArea,t._minPadding)?(Ka(t,i,e,(function(t,i,r){t.inRange(e.x,e.y,n)&&o.push({element:t,datasetIndex:i,index:r})}),!0),o):o}function Xa(t,e,i,n,o){return qr(e,t.chartArea,t._minPadding)?"r"!==i||n?function(t,e,i,n,o){let r=[];const s=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){const o=e?Math.abs(t.x-n.x):0,r=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}}(i);let a=Number.POSITIVE_INFINITY;return Ka(t,i,e,(function(i,l,c){const d=i.inRange(e.x,e.y,o);if(n&&!d)return;const h=i.getCenterPoint(o);if(!qr(h,t.chartArea,t._minPadding)&&!d)return;const p=s(e,h);p<a?(r=[{element:i,datasetIndex:l,index:c}],a=p):p===a&&r.push({element:i,datasetIndex:l,index:c})})),r}(t,e,i,n,o):function(t,e,i,n){let o=[];return Ka(t,i,e,(function(t,i,r){const{startAngle:s,endAngle:a}=t.getProps(["startAngle","endAngle"],n),{angle:l}=Ko(t,{x:e.x,y:e.y});Zo(l,s,a)&&o.push({element:t,datasetIndex:i,index:r})})),o}(t,e,i,o):[]}function Ja(t,e,i,n){const o=Ya(e,t),r=[],s=i.axis,a="x"===s?"inXRange":"inYRange";let l=!1;return function(t,e){const i=t.getSortedVisibleDatasetMetas();let n,o,r;for(let t=0,s=i.length;t<s;++t){({index:n,data:o}=i[t]);for(let t=0,i=o.length;t<i;++t)r=o[t],r.skip||e(r,n,t)}}(t,((t,e,i)=>{t[a](o[s],n)&&r.push({element:t,datasetIndex:e,index:i}),t.inRange(o.x,o.y,n)&&(l=!0)})),i.intersect&&!l?[]:r}var Za={modes:{index(t,e,i,n){const o=Ya(e,t),r=i.axis||"x",s=i.intersect?Ga(t,o,r,n):Xa(t,o,r,!1,n),a=[];return s.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=s[0].index,i=t.data[e];i&&!i.skip&&a.push({element:i,datasetIndex:t.index,index:e})})),a):[]},dataset(t,e,i,n){const o=Ya(e,t),r=i.axis||"xy";let s=i.intersect?Ga(t,o,r,n):Xa(t,o,r,!1,n);if(s.length>0){const e=s[0].datasetIndex,i=t.getDatasetMeta(e).data;s=[];for(let t=0;t<i.length;++t)s.push({element:i[t],datasetIndex:e,index:t})}return s},point:(t,e,i,n)=>Ga(t,Ya(e,t),i.axis||"xy",n),nearest:(t,e,i,n)=>Xa(t,Ya(e,t),i.axis||"xy",i.intersect,n),x:(t,e,i,n)=>Ja(t,e,{axis:"x",intersect:i.intersect},n),y:(t,e,i,n)=>Ja(t,e,{axis:"y",intersect:i.intersect},n)}};const Qa=["left","top","right","bottom"];function tl(t,e){return t.filter((t=>t.pos===e))}function el(t,e){return t.filter((t=>-1===Qa.indexOf(t.pos)&&t.box.axis===e))}function il(t,e){return t.sort(((t,i)=>{const n=e?i:t,o=e?t:i;return n.weight===o.weight?n.index-o.index:n.weight-o.weight}))}function nl(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function ol(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function rl(t,e,i,n){const{pos:o,box:r}=i,s=t.maxPadding;if(!ho(o)){i.size&&(t[o]-=i.size);const e=n[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?r.height:r.width),i.size=e.size/e.count,t[o]+=i.size}r.getPadding&&ol(s,r.getPadding());const a=Math.max(0,e.outerWidth-nl(s,t,"left","right")),l=Math.max(0,e.outerHeight-nl(s,t,"top","bottom")),c=a!==t.w,d=l!==t.h;return t.w=a,t.h=l,i.horizontal?{same:c,other:d}:{same:d,other:c}}function sl(t,e){const i=e.maxPadding;return function(t){const n={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{n[t]=Math.max(e[t],i[t])})),n}(t?["left","right"]:["top","bottom"])}function al(t,e,i,n){const o=[];let r,s,a,l,c,d;for(r=0,s=t.length,c=0;r<s;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,sl(a.horizontal,e));const{same:s,other:h}=rl(e,i,a,n);c|=s&&o.length,d=d||h,l.fullSize||o.push(a)}return c&&al(o,e,i,n)||d}function ll(t,e,i,n,o){t.top=i,t.left=e,t.right=e+n,t.bottom=i+o,t.width=n,t.height=o}function cl(t,e,i,n){const o=i.padding;let{x:r,y:s}=e;for(const a of t){const t=a.box,l=n[a.stack]||{count:1,placed:0,weight:1},c=a.stackWeight/l.weight||1;if(a.horizontal){const n=e.w*c,r=l.size||t.height;Eo(l.start)&&(s=l.start),t.fullSize?ll(t,o.left,s,i.outerWidth-o.right-o.left,r):ll(t,e.left+l.placed,s,n,r),l.start=s,l.placed+=n,s=t.bottom}else{const n=e.h*c,s=l.size||t.width;Eo(l.start)&&(r=l.start),t.fullSize?ll(t,r,o.top,s,i.outerHeight-o.bottom-o.top):ll(t,r,e.top+l.placed,s,n),l.start=r,l.placed+=n,r=t.right}}e.x=r,e.y=s}Wr.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var dl={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,n){if(!t)return;const o=ls(t.options.layout.padding),r=Math.max(e-o.width,0),s=Math.max(i-o.height,0),a=function(t){const e=function(t){const e=[];let i,n,o,r,s,a;for(i=0,n=(t||[]).length;i<n;++i)o=t[i],({position:r,options:{stack:s,stackWeight:a=1}}=o),e.push({index:i,box:o,pos:r,horizontal:o.isHorizontal(),weight:o.weight,stack:s&&r+s,stackWeight:a});return e}(t),i=il(e.filter((t=>t.box.fullSize)),!0),n=il(tl(e,"left"),!0),o=il(tl(e,"right")),r=il(tl(e,"top"),!0),s=il(tl(e,"bottom")),a=el(e,"x"),l=el(e,"y");return{fullSize:i,leftAndTop:n.concat(r),rightAndBottom:o.concat(l).concat(s).concat(a),chartArea:tl(e,"chartArea"),vertical:n.concat(o).concat(l),horizontal:r.concat(s).concat(a)}}(t.boxes),l=a.vertical,c=a.horizontal;yo(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const d=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,h=Object.freeze({outerWidth:e,outerHeight:i,padding:o,availableWidth:r,availableHeight:s,vBoxMaxWidth:r/2/d,hBoxMaxHeight:s/2}),p=Object.assign({},o);ol(p,ls(n));const u=Object.assign({maxPadding:p,w:r,h:s,x:o.left,y:o.top},o),f=function(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:n,stackWeight:o}=i;if(!t||!Qa.includes(n))continue;const r=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=o}return e}(t),{vBoxMaxWidth:n,hBoxMaxHeight:o}=e;let r,s,a;for(r=0,s=t.length;r<s;++r){a=t[r];const{fullSize:s}=a.box,l=i[a.stack],c=l&&a.stackWeight/l.weight;a.horizontal?(a.width=c?c*n:s&&e.availableWidth,a.height=o):(a.width=n,a.height=c?c*o:s&&e.availableHeight)}return i}(l.concat(c),h);al(a.fullSize,u,h,f),al(l,u,h,f),al(c,u,h,f)&&al(l,u,h,f),function(t){const e=t.maxPadding;function i(i){const n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(u),cl(a.leftAndTop,u,h,f),u.x+=u.w,u.y+=u.h,cl(a.rightAndBottom,u,h,f),t.chartArea={left:u.left,top:u.top,right:u.left+u.w,bottom:u.top+u.h,height:u.h,width:u.w},yo(a.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(u.w,u.h,{left:0,top:0,right:0,bottom:0})}))}};class hl{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,n){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):i)}}isAttached(t){return!0}updateConfig(t){}}class pl extends hl{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const ul={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},fl=t=>null===t||""===t,gl=!!Ys&&{passive:!0};function ml(t,e,i){t.canvas.removeEventListener(e,i,gl)}function yl(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function bl(t,e,i){const n=t.canvas,o=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||yl(i.addedNodes,n),e=e&&!yl(i.removedNodes,n);e&&i()}));return o.observe(document,{childList:!0,subtree:!0}),o}function xl(t,e,i){const n=t.canvas,o=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||yl(i.removedNodes,n),e=e&&!yl(i.addedNodes,n);e&&i()}));return o.observe(document,{childList:!0,subtree:!0}),o}const vl=new Map;let wl=0;function _l(){const t=window.devicePixelRatio;t!==wl&&(wl=t,vl.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function kl(t,e,i){const n=t.canvas,o=n&&Ns(n);if(!o)return;const r=no(((t,e)=>{const n=o.clientWidth;i(t,e),n<o.clientWidth&&i()}),window),s=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,n=e.contentRect.height;0===i&&0===n||r(i,n)}));return s.observe(o),function(t,e){vl.size||window.addEventListener("resize",_l),vl.set(t,e)}(t,r),s}function Sl(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){vl.delete(t),vl.size||window.removeEventListener("resize",_l)}(t)}function Rl(t,e,i){const n=t.canvas,o=no((e=>{null!==t.ctx&&i(function(t,e){const i=ul[t.type]||t.type,{x:n,y:o}=Hs(t,e);return{type:i,chart:e,native:t,x:void 0!==n?n:null,y:void 0!==o?o:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,i){t.addEventListener(e,i,gl)}(n,e,o),o}class Ol extends hl{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,n=t.getAttribute("height"),o=t.getAttribute("width");if(t.$chartjs={initial:{height:n,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",fl(o)){const e=qs(t,"width");void 0!==e&&(t.width=e)}if(fl(n))if(""===t.style.height)t.height=t.width/(e||2);else{const e=qs(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const i=e.$chartjs.initial;["height","width"].forEach((t=>{const n=i[t];lo(n)?e.removeAttribute(t):e.setAttribute(t,n)}));const n=i.style||{};return Object.keys(n).forEach((t=>{e.style[t]=n[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,i){this.removeEventListener(t,e);const n=t.$proxies||(t.$proxies={}),o={attach:bl,detach:xl,resize:kl}[e]||Rl;n[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),n=i[e];n&&(({attach:Sl,detach:Sl,resize:Sl}[e]||ml)(t,e,n),i[e]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,n){return function(t,e,i,n){const o=zs(t),r=Fs(o,"margin"),s=Bs(o.maxWidth,t,"clientWidth")||Co,a=Bs(o.maxHeight,t,"clientHeight")||Co,l=function(t,e,i){let n,o;if(void 0===e||void 0===i){const r=Ns(t);if(r){const t=r.getBoundingClientRect(),s=zs(r),a=Fs(s,"border","width"),l=Fs(s,"padding");e=t.width-l.width-a.width,i=t.height-l.height-a.height,n=Bs(s.maxWidth,r,"clientWidth"),o=Bs(s.maxHeight,r,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:n||Co,maxHeight:o||Co}}(t,e,i);let{width:c,height:d}=l;if("content-box"===o.boxSizing){const t=Fs(o,"border","width"),e=Fs(o,"padding");c-=e.width+t.width,d-=e.height+t.height}return c=Math.max(0,c-r.width),d=Math.max(0,n?Math.floor(c/n):d-r.height),c=Us(Math.min(c,s,l.maxWidth)),d=Us(Math.min(d,a,l.maxHeight)),c&&!d&&(d=Us(c/2)),{width:c,height:d}}(t,e,i,n)}isAttached(t){const e=Ns(t);return!(!e||!e.isConnected)}}class $l{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Fo(this.x)&&Fo(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const n={};return t.forEach((t=>{n[t]=i[t]&&i[t].active()?i[t]._to:this[t]})),n}}$l.defaults={},$l.defaultRoutes=void 0;const El={values:t=>co(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const n=this.chart.options.locale;let o,r=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(o="scientific"),r=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t)),i}(t,i)}const s=Bo(Math.abs(r)),a=Math.max(Math.min(-1*Math.floor(s),20),0),l={notation:o,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),Zs(t,n,l)},logarithmic(t,e,i){if(0===t)return"0";const n=t/Math.pow(10,Math.floor(Bo(t)));return 1===n||2===n||5===n?El.numeric.call(this,t,e,i):""}};var Pl={formatters:El};function Ml(t,e,i,n,o){const r=fo(n,0),s=Math.min(fo(o,t.length),t.length);let a,l,c,d=0;for(i=Math.ceil(i),o&&(a=o-n,i=a/Math.floor(a/i)),c=r;c<0;)d++,c=Math.round(r+d*i);for(l=Math.max(r,0);l<s;l++)l===c&&(e.push(t[l]),d++,c=Math.round(r+d*i))}Wr.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Pl.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),Wr.route("scale.ticks","color","","color"),Wr.route("scale.grid","color","","borderColor"),Wr.route("scale.grid","borderColor","","borderColor"),Wr.route("scale.title","color","","color"),Wr.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),Wr.describe("scales",{_fallback:"scale"}),Wr.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const Tl=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function Al(t,e){const i=[],n=t.length/e,o=t.length;let r=0;for(;r<o;r+=n)i.push(t[Math.floor(r)]);return i}function Dl(t,e,i){const n=t.ticks.length,o=Math.min(e,n-1),r=t._startPixel,s=t._endPixel,a=1e-6;let l,c=t.getPixelForTick(o);if(!(i&&(l=1===n?Math.max(c-r,s-c):0===e?(t.getPixelForTick(1)-c)/2:(c-t.getPixelForTick(o-1))/2,c+=o<e?l:-l,c<r-a||c>s+a)))return c}function Cl(t){return t.drawTicks?t.tickLength:0}function jl(t,e){if(!t.display)return 0;const i=cs(t.font,e),n=ls(t.padding);return(co(t.text)?t.text.length:1)*i.lineHeight+n.height}function Il(t,e,i){let n=oo(t);return(i&&"right"!==e||!i&&"right"===e)&&(n=(t=>"left"===t?"right":"right"===t?"left":t)(n)),n}class Ll extends $l{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:n}=this;return t=uo(t,Number.POSITIVE_INFINITY),e=uo(e,Number.NEGATIVE_INFINITY),i=uo(i,Number.POSITIVE_INFINITY),n=uo(n,Number.NEGATIVE_INFINITY),{min:uo(t,i),max:uo(e,n),minDefined:po(t),maxDefined:po(e)}}getMinMax(t){let e,{min:i,max:n,minDefined:o,maxDefined:r}=this.getUserBounds();if(o&&r)return{min:i,max:n};const s=this.getMatchingVisibleMetas();for(let a=0,l=s.length;a<l;++a)e=s[a].controller.getMinMax(this,t),o||(i=Math.min(i,e.min)),r||(n=Math.max(n,e.max));return i=r&&i>n?n:i,n=o&&i>n?i:n,{min:uo(i,uo(n,i)),max:uo(n,uo(i,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){mo(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:n,grace:o,ticks:r}=this.options,s=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=function(t,e,i){const{min:n,max:o}=t,r=go(e,(o-n)/2),s=(t,e)=>i&&0===t?0:t+e;return{min:s(n,-Math.abs(r)),max:s(o,r)}}(this,o,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const a=s<this.ticks.length;this._convertTicksToLabels(a?Al(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||"auto"===r.source)&&(this.ticks=function(t,e){const i=t.options.ticks,n=i.maxTicksLimit||function(t){const e=t.options.offset,i=t._tickSize(),n=t._length/i+(e?0:1),o=t._maxLength/i;return Math.floor(Math.min(n,o))}(t),o=i.major.enabled?function(t){const e=[];let i,n;for(i=0,n=t.length;i<n;i++)t[i].major&&e.push(i);return e}(e):[],r=o.length,s=o[0],a=o[r-1],l=[];if(r>n)return function(t,e,i,n){let o,r=0,s=i[0];for(n=Math.ceil(n),o=0;o<t.length;o++)o===s&&(e.push(t[o]),r++,s=i[r*n])}(e,l,o,r/n),l;const c=function(t,e,i){const n=function(t){const e=t.length;let i,n;if(e<2)return!1;for(n=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==n)return!1;return n}(t),o=e.length/i;if(!n)return Math.max(o,1);const r=function(t){const e=[],i=Math.sqrt(t);let n;for(n=1;n<i;n++)t%n==0&&(e.push(n),e.push(t/n));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}(n);for(let t=0,e=r.length-1;t<e;t++){const e=r[t];if(e>o)return e}return Math.max(o,1)}(o,e,n);if(r>0){let t,i;const n=r>1?Math.round((a-s)/(r-1)):null;for(Ml(e,l,c,lo(n)?0:s-n,s),t=0,i=r-1;t<i;t++)Ml(e,l,c,o[t],o[t+1]);return Ml(e,l,c,a,lo(n)?e.length:a+n),l}return Ml(e,l,c),l}(this,this.ticks),this._labelSizes=null),a&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){mo(this.options.afterUpdate,[this])}beforeSetDimensions(){mo(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){mo(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),mo(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){mo(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,n,o;for(i=0,n=t.length;i<n;i++)o=t[i],o.label=mo(e.callback,[o.value,i,t],this)}afterTickToLabelConversion(){mo(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){mo(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=this.ticks.length,n=e.minRotation||0,o=e.maxRotation;let r,s,a,l=n;if(!this._isVisible()||!e.display||n>=o||i<=1||!this.isHorizontal())return void(this.labelRotation=n);const c=this._getLabelSizes(),d=c.widest.width,h=c.highest.height,p=Qo(this.chart.width-d,0,this.maxWidth);r=t.offset?this.maxWidth/i:p/(i-1),d+6>r&&(r=p/(i-(t.offset?.5:1)),s=this.maxHeight-Cl(t.grid)-e.padding-jl(t.title,this.chart.options.font),a=Math.sqrt(d*d+h*h),l=Yo(Math.min(Math.asin(Qo((c.highest.height+6)/r,-1,1)),Math.asin(Qo(s/a,-1,1))-Math.asin(Qo(h/a,-1,1)))),l=Math.max(n,Math.min(o,l))),this.labelRotation=l}afterCalculateLabelRotation(){mo(this.options.afterCalculateLabelRotation,[this])}beforeFit(){mo(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:n,grid:o}}=this,r=this._isVisible(),s=this.isHorizontal();if(r){const r=jl(n,e.options.font);if(s?(t.width=this.maxWidth,t.height=Cl(o)+r):(t.height=this.maxHeight,t.width=Cl(o)+r),i.display&&this.ticks.length){const{first:e,last:n,widest:o,highest:r}=this._getLabelSizes(),a=2*i.padding,l=Vo(this.labelRotation),c=Math.cos(l),d=Math.sin(l);if(s){const e=i.mirror?0:d*o.width+c*r.height;t.height=Math.min(this.maxHeight,t.height+e+a)}else{const e=i.mirror?0:c*o.width+d*r.height;t.width=Math.min(this.maxWidth,t.width+e+a)}this._calculatePadding(e,n,d,c)}}this._handleMargins(),s?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,n){const{ticks:{align:o,padding:r},position:s}=this.options,a=0!==this.labelRotation,l="top"!==s&&"x"===this.axis;if(this.isHorizontal()){const s=this.getPixelForTick(0)-this.left,c=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,h=0;a?l?(d=n*t.width,h=i*e.height):(d=i*t.height,h=n*e.width):"start"===o?h=e.width:"end"===o?d=t.width:(d=t.width/2,h=e.width/2),this.paddingLeft=Math.max((d-s+r)*this.width/(this.width-s),0),this.paddingRight=Math.max((h-c+r)*this.width/(this.width-c),0)}else{let i=e.height/2,n=t.height/2;"start"===o?(i=0,n=t.height):"end"===o&&(i=e.height,n=0),this.paddingTop=i+r,this.paddingBottom=n+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){mo(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)lo(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Al(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,e){const{ctx:i,_longestTextCache:n}=this,o=[],r=[];let s,a,l,c,d,h,p,u,f,g,m,y=0,b=0;for(s=0;s<e;++s){if(c=t[s].label,d=this._resolveTickFontOptions(s),i.font=h=d.string,p=n[h]=n[h]||{data:{},gc:[]},u=d.lineHeight,f=g=0,lo(c)||co(c)){if(co(c))for(a=0,l=c.length;a<l;++a)m=c[a],lo(m)||co(m)||(f=Fr(i,p.data,p.gc,f,m),g+=u)}else f=Fr(i,p.data,p.gc,f,c),g=u;o.push(f),r.push(g),y=Math.max(f,y),b=Math.max(g,b)}!function(t,e){yo(t,(t=>{const i=t.gc,n=i.length/2;let o;if(n>e){for(o=0;o<n;++o)delete t.data[i[o]];i.splice(0,n)}}))}(n,e);const x=o.indexOf(y),v=r.indexOf(b),w=t=>({width:o[t]||0,height:r[t]||0});return{first:w(0),last:w(e-1),widest:w(x),highest:w(v),widths:o,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Qo(this._alignToPixels?Ur(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return hs(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=hs(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=Vo(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),o=this._getLabelSizes(),r=t.autoSkipPadding||0,s=o?o.widest.width+r:0,a=o?o.highest.height+r:0;return this.isHorizontal()?a*i>s*n?s/i:a/n:a*n<s*i?a/i:s/n}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,n=this.options,{grid:o,position:r}=n,s=o.offset,a=this.isHorizontal(),l=this.ticks.length+(s?1:0),c=Cl(o),d=[],h=o.setContext(this.getContext()),p=h.drawBorder?h.borderWidth:0,u=p/2,f=function(t){return Ur(i,t,p)};let g,m,y,b,x,v,w,_,k,S,R,O;if("top"===r)g=f(this.bottom),v=this.bottom-c,_=g-u,S=f(t.top)+u,O=t.bottom;else if("bottom"===r)g=f(this.top),S=t.top,O=f(t.bottom)-u,v=g+u,_=this.top+c;else if("left"===r)g=f(this.right),x=this.right-c,w=g-u,k=f(t.left)+u,R=t.right;else if("right"===r)g=f(this.left),k=t.left,R=f(t.right)-u,x=g+u,w=this.left+c;else if("x"===e){if("center"===r)g=f((t.top+t.bottom)/2+.5);else if(ho(r)){const t=Object.keys(r)[0],e=r[t];g=f(this.chart.scales[t].getPixelForValue(e))}S=t.top,O=t.bottom,v=g+u,_=v+c}else if("y"===e){if("center"===r)g=f((t.left+t.right)/2);else if(ho(r)){const t=Object.keys(r)[0],e=r[t];g=f(this.chart.scales[t].getPixelForValue(e))}x=g-u,w=x-c,k=t.left,R=t.right}const $=fo(n.ticks.maxTicksLimit,l),E=Math.max(1,Math.ceil(l/$));for(m=0;m<l;m+=E){const t=o.setContext(this.getContext(m)),e=t.lineWidth,n=t.color,r=o.borderDash||[],l=t.borderDashOffset,c=t.tickWidth,h=t.tickColor,p=t.tickBorderDash||[],u=t.tickBorderDashOffset;y=Dl(this,m,s),void 0!==y&&(b=Ur(i,y,e),a?x=w=k=R=b:v=_=S=O=b,d.push({tx1:x,ty1:v,tx2:w,ty2:_,x1:k,y1:S,x2:R,y2:O,width:e,color:n,borderDash:r,borderDashOffset:l,tickWidth:c,tickColor:h,tickBorderDash:p,tickBorderDashOffset:u}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(t){const e=this.axis,i=this.options,{position:n,ticks:o}=i,r=this.isHorizontal(),s=this.ticks,{align:a,crossAlign:l,padding:c,mirror:d}=o,h=Cl(i.grid),p=h+c,u=d?-c:p,f=-Vo(this.labelRotation),g=[];let m,y,b,x,v,w,_,k,S,R,O,$,E="middle";if("top"===n)w=this.bottom-u,_=this._getXAxisLabelAlignment();else if("bottom"===n)w=this.top+u,_=this._getXAxisLabelAlignment();else if("left"===n){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,v=t.x}else if("right"===n){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,v=t.x}else if("x"===e){if("center"===n)w=(t.top+t.bottom)/2+p;else if(ho(n)){const t=Object.keys(n)[0],e=n[t];w=this.chart.scales[t].getPixelForValue(e)+p}_=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===n)v=(t.left+t.right)/2-p;else if(ho(n)){const t=Object.keys(n)[0],e=n[t];v=this.chart.scales[t].getPixelForValue(e)}_=this._getYAxisLabelAlignment(h).textAlign}"y"===e&&("start"===a?E="top":"end"===a&&(E="bottom"));const P=this._getLabelSizes();for(m=0,y=s.length;m<y;++m){b=s[m],x=b.label;const t=o.setContext(this.getContext(m));k=this.getPixelForTick(m)+o.labelOffset,S=this._resolveTickFontOptions(m),R=S.lineHeight,O=co(x)?x.length:1;const e=O/2,i=t.color,a=t.textStrokeColor,c=t.textStrokeWidth;let h;if(r?(v=k,$="top"===n?"near"===l||0!==f?-O*R+R/2:"center"===l?-P.highest.height/2-e*R+R:-P.highest.height+R/2:"near"===l||0!==f?R/2:"center"===l?P.highest.height/2-e*R:P.highest.height-O*R,d&&($*=-1)):(w=k,$=(1-O)*R/2),t.showLabelBackdrop){const e=ls(t.backdropPadding),i=P.heights[m],n=P.widths[m];let o=w+$-e.top,r=v-e.left;switch(E){case"middle":o-=i/2;break;case"bottom":o-=i}switch(_){case"center":r-=n/2;break;case"right":r-=n}h={left:r,top:o,width:n+e.width,height:i+e.height,color:t.backdropColor}}g.push({rotation:f,label:x,font:S,color:i,strokeColor:a,strokeWidth:c,textOffset:$,textAlign:_,textBaseline:E,translation:[v,w],backdrop:h})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Vo(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align&&(i="right"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:n,padding:o}}=this.options,r=t+o,s=this._getLabelSizes().widest.width;let a,l;return"left"===e?n?(l=this.right+o,"near"===i?a="left":"center"===i?(a="center",l+=s/2):(a="right",l+=s)):(l=this.right-r,"near"===i?a="right":"center"===i?(a="center",l-=s/2):(a="left",l=this.left)):"right"===e?n?(l=this.left+o,"near"===i?a="right":"center"===i?(a="center",l-=s/2):(a="left",l-=s)):(l=this.left+r,"near"===i?a="left":"center"===i?(a="center",l+=s/2):(a="right",l=this.right)):a="right",{textAlign:a,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:n,width:o,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,n,o,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex((e=>e.value===t));return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,r;const s=(t,e,n)=>{n.width&&n.color&&(i.save(),i.lineWidth=n.width,i.strokeStyle=n.color,i.setLineDash(n.borderDash||[]),i.lineDashOffset=n.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(o=0,r=n.length;o<r;++o){const t=n[o];e.drawOnChartArea&&s({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&s({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{grid:i}}=this,n=i.setContext(this.getContext()),o=i.drawBorder?n.borderWidth:0;if(!o)return;const r=i.setContext(this.getContext(0)).lineWidth,s=this._borderValue;let a,l,c,d;this.isHorizontal()?(a=Ur(t,this.left,o)-o/2,l=Ur(t,this.right,r)+r/2,c=d=s):(c=Ur(t,this.top,o)-o/2,d=Ur(t,this.bottom,r)+r/2,a=l=s),e.save(),e.lineWidth=n.borderWidth,e.strokeStyle=n.borderColor,e.beginPath(),e.moveTo(a,c),e.lineTo(l,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&Kr(e,i);const n=this._labelItems||(this._labelItems=this._computeLabelItems(t));let o,r;for(o=0,r=n.length;o<r;++o){const t=n[o],i=t.font,r=t.label;t.backdrop&&(e.fillStyle=t.backdrop.color,e.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),Zr(e,r,0,t.textOffset,i,t)}i&&Gr(e)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:n}}=this;if(!i.display)return;const o=cs(i.font),r=ls(i.padding),s=i.align;let a=o.lineHeight/2;"bottom"===e||"center"===e||ho(e)?(a+=r.bottom,co(i.text)&&(a+=o.lineHeight*(i.text.length-1))):a+=r.top;const{titleX:l,titleY:c,maxWidth:d,rotation:h}=function(t,e,i,n){const{top:o,left:r,bottom:s,right:a,chart:l}=t,{chartArea:c,scales:d}=l;let h,p,u,f=0;const g=s-o,m=a-r;if(t.isHorizontal()){if(p=ro(n,r,a),ho(i)){const t=Object.keys(i)[0],n=i[t];u=d[t].getPixelForValue(n)+g-e}else u="center"===i?(c.bottom+c.top)/2+g-e:Tl(t,i,e);h=a-r}else{if(ho(i)){const t=Object.keys(i)[0],n=i[t];p=d[t].getPixelForValue(n)-m+e}else p="center"===i?(c.left+c.right)/2-m+e:Tl(t,i,e);u=ro(n,s,o),f="left"===i?-Io:Io}return{titleX:p,titleY:u,maxWidth:h,rotation:f}}(this,a,e,s);Zr(t,i.text,0,0,o,{color:i.color,maxWidth:d,rotation:h,textAlign:Il(s,e,n),textBaseline:"middle",translation:[l,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=fo(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===Ll.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",n=[];let o,r;for(o=0,r=e.length;o<r;++o){const r=e[o];r[i]!==this.id||t&&r.type!==t||n.push(r)}return n}_resolveTickFontOptions(t){return cs(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Nl{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return"id"in t&&"defaults"in t})(e)&&(i=this.register(e));const n=this.items,o=t.id,r=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in n||(n[o]=t,function(t,e,i){const n=_o(Object.create(null),[i?Wr.get(i):{},Wr.get(e),t.defaults]);Wr.set(e,n),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const n=i.split("."),o=n.pop(),r=[t].concat(n).join("."),s=e[i].split("."),a=s.pop(),l=s.join(".");Wr.route(r,o,l,a)}))}(e,t.defaultRoutes),t.descriptors&&Wr.describe(e,t.descriptors)}(t,r,i),this.override&&Wr.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,n=this.scope;i in e&&delete e[i],n&&i in Wr[n]&&(delete Wr[n][i],this.override&&delete Lr[i])}}var Bl=new class{constructor(){this.controllers=new Nl(Ra,"datasets",!0),this.elements=new Nl($l,"elements"),this.plugins=new Nl(Object,"plugins"),this.scales=new Nl(Ll,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach((e=>{const n=i||this._getRegistryForType(e);i||n.isForType(e)||n===this.plugins&&e.id?this._exec(t,n,e):yo(e,(e=>{const n=i||this._getRegistryForType(e);this._exec(t,n,e)}))}))}_exec(t,e,i){const n=$o(t);mo(i["before"+n],[],i),e[t](i),mo(i["after"+n],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const n=e.get(t);if(void 0===n)throw new Error('"'+t+'" is not a registered '+i+".");return n}};class zl{constructor(){this._init=[]}notify(t,e,i,n){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(o,t,e,i);return"afterDestroy"===e&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),r}_notify(t,e,i,n){n=n||{};for(const o of t){const t=o.plugin;if(!1===mo(t[i],[e,n,o.options],t)&&n.cancelable)return!1}return!0}invalidate(){lo(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,n=fo(i.options&&i.options.plugins,{}),o=function(t){const e=[],i=Object.keys(Bl.plugins.items);for(let t=0;t<i.length;t++)e.push(Bl.getPlugin(i[t]));const n=t.plugins||[];for(let t=0;t<n.length;t++){const i=n[t];-1===e.indexOf(i)&&e.push(i)}return e}(i);return!1!==n||e?function(t,e,i,n){const o=[],r=t.getContext();for(let s=0;s<e.length;s++){const a=e[s],l=Wl(i[a.id],n);null!==l&&o.push({plugin:a,options:Fl(t.config,a,l,r)})}return o}(t,o,n,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,n=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(n(e,i),t,"stop"),this._notify(n(i,e),t,"start")}}function Wl(t,e){return e||!1!==t?!0===t?{}:t:null}function Fl(t,e,i,n){const o=t.pluginScopeKeys(e),r=t.getOptionScopes(i,o);return t.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Hl(t,e){const i=Wr.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Ul(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase();var i}function Vl(t){const e=t.options||(t.options={});e.plugins=fo(e.plugins,{}),e.scales=function(t,e){const i=Lr[t.type]||{scales:{}},n=e.scales||{},o=Hl(t.type,e),r=Object.create(null),s=Object.create(null);return Object.keys(n).forEach((t=>{const e=n[t];if(!ho(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const a=Ul(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(a,o),c=i.scales||{};r[a]=r[a]||t,s[t]=ko(Object.create(null),[{axis:a},e,c[a],c[l]])})),t.data.datasets.forEach((i=>{const o=i.type||t.type,a=i.indexAxis||Hl(o,e),l=(Lr[o]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,a),o=i[e+"AxisID"]||r[e]||e;s[o]=s[o]||Object.create(null),ko(s[o],[{axis:e},n[o],l[t]])}))})),Object.keys(s).forEach((t=>{const e=s[t];ko(e,[Wr.scales[e.type],Wr.scale])})),s}(t,e)}function Yl(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const ql=new Map,Kl=new Set;function Gl(t,e){let i=ql.get(t);return i||(i=e(),ql.set(t,i),Kl.add(i)),i}const Xl=(t,e,i)=>{const n=Oo(e,i);void 0!==n&&t.add(n)};class Jl{constructor(t){this._config=function(t){return(t=t||{}).data=Yl(t.data),Vl(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Yl(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Vl(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Gl(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return Gl(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return Gl(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return Gl(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let n=i.get(t);return n&&!e||(n=new Map,i.set(t,n)),n}getOptionScopes(t,e,i){const{options:n,type:o}=this,r=this._cachedScopes(t,i),s=r.get(e);if(s)return s;const a=new Set;e.forEach((e=>{t&&(a.add(t),e.forEach((e=>Xl(a,t,e)))),e.forEach((t=>Xl(a,n,t))),e.forEach((t=>Xl(a,Lr[o]||{},t))),e.forEach((t=>Xl(a,Wr,t))),e.forEach((t=>Xl(a,Nr,t)))}));const l=Array.from(a);return 0===l.length&&l.push(Object.create(null)),Kl.has(e)&&r.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Lr[e]||{},Wr.datasets[e]||{},{type:e},Wr,Nr]}resolveNamedOptions(t,e,i,n=[""]){const o={$shared:!0},{resolver:r,subPrefixes:s}=Zl(this._resolverCache,t,n);let a=r;(function(t,e){const{isScriptable:i,isIndexable:n}=vs(t);for(const o of e){const e=i(o),r=n(o),s=(r||e)&&t[o];if(e&&(Po(s)||Ql(s))||r&&co(s))return!0}return!1})(r,e)&&(o.$shared=!1,a=xs(r,i=Po(i)?i():i,this.createResolver(t,i,s)));for(const t of e)o[t]=a[t];return o}createResolver(t,e,i=[""],n){const{resolver:o}=Zl(this._resolverCache,t,i);return ho(e)?xs(o,e,void 0,n):o}}function Zl(t,e,i){let n=t.get(e);n||(n=new Map,t.set(e,n));const o=i.join();let r=n.get(o);return r||(r={resolver:bs(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},n.set(o,r)),r}const Ql=t=>ho(t)&&Object.getOwnPropertyNames(t).reduce(((e,i)=>e||Po(t[i])),!1),tc=["top","bottom","left","right","chartArea"];function ec(t,e){return"top"===t||"bottom"===t||-1===tc.indexOf(t)&&"x"===e}function ic(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}function nc(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),mo(i&&i.onComplete,[t],e)}function oc(t){const e=t.chart,i=e.options.animation;mo(i&&i.onProgress,[t],e)}function rc(t){return Ls()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const sc={},ac=t=>{const e=rc(t);return Object.values(sc).filter((t=>t.canvas===e)).pop()};function lc(t,e,i){const n=Object.keys(t);for(const o of n){const n=+o;if(n>=e){const r=t[o];delete t[o],(i>0||n>e)&&(t[n+i]=r)}}}class cc{constructor(t,e){const i=this.config=new Jl(e),n=rc(t),o=ac(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas can be reused.");const r=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||function(t){return!Ls()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?pl:Ol}(n)),this.platform.updateConfig(i);const s=this.platform.acquireContext(n,r.aspectRatio),a=s&&s.canvas,l=a&&a.height,c=a&&a.width;this.id=ao(),this.ctx=s,this.canvas=a,this.width=c,this.height=l,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new zl,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=function(t,e){let i;return function(...n){return e?(clearTimeout(i),i=setTimeout(t,e,n)):t.apply(this,n),e}}((t=>this.update(t)),r.resizeDelay||0),this._dataChanges=[],sc[this.id]=this,s&&a?(la.listen(this,"complete",nc),la.listen(this,"progress",oc),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:n,_aspectRatio:o}=this;return lo(t)?e&&o?o:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Vs(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Vr(this.canvas,this.ctx),this}stop(){return la.stop(this),this}resize(t,e){la.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,n=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,e,o),s=i.devicePixelRatio||this.platform.getDevicePixelRatio(),a=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,Vs(this,s,!0)&&(this.notifyPlugins("resize",{size:r}),mo(i.onResize,[this,r],this),this.attached&&this._doResize(a)&&this.render())}ensureScalesHaveIDs(){yo(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,n=Object.keys(i).reduce(((t,e)=>(t[e]=!1,t)),{});let o=[];e&&(o=o.concat(Object.keys(e).map((t=>{const i=e[t],n=Ul(t,i),o="r"===n,r="x"===n;return{options:i,dposition:o?"chartArea":r?"bottom":"left",dtype:o?"radialLinear":r?"category":"linear"}})))),yo(o,(e=>{const o=e.options,r=o.id,s=Ul(r,o),a=fo(o.type,e.dtype);void 0!==o.position&&ec(o.position,s)===ec(e.dposition)||(o.position=e.dposition),n[r]=!0;let l=null;r in i&&i[r].type===a?l=i[r]:(l=new(Bl.getScale(a))({id:r,type:a,ctx:this.ctx,chart:this}),i[l.id]=l),l.init(o,t)})),yo(n,((t,e)=>{t||delete i[e]})),yo(i,(t=>{dl.configure(this,t,t.options),dl.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(ic("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,n;for(this._removeUnreferencedMetasets(),i=0,n=e.length;i<n;i++){const n=e[i];let o=this.getDatasetMeta(i);const r=n.type||this.config.type;if(o.type&&o.type!==r&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=r,o.indexAxis=n.indexAxis||Hl(r,this.options),o.order=n.order||0,o.index=i,o.label=""+n.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const e=Bl.getController(r),{datasetElementType:n,dataElementType:s}=Wr.datasets[r];Object.assign(e.prototype,{dataElementType:Bl.getElement(s),datasetElementType:n&&Bl.getElement(n)}),o.controller=new e(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){yo(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!n&&-1===o.indexOf(e);e.buildOrUpdateElements(i),r=Math.max(+e.getMaxOverflow(),r)}r=this._minPadding=i.layout.autoPadding?r:0,this._updateLayout(r),n||yo(o,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(ic("z","_idx"));const{_active:s,_lastEvent:a}=this;a?this._eventHandler(a,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){yo(this.scales,(t=>{dl.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);Mo(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:n,count:o}of e)lc(t,n,"_removeElements"===i?-o:o)}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),n=i(0);for(let t=1;t<e;t++)if(!Mo(n,i(t)))return;return Array.from(n).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;dl.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],yo(this.boxes,(t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,Po(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),n={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",n)&&(i.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(la.has(this)?this.attached&&!la.running(this)&&la.start(this):(this.draw(),nc({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let n,o;for(n=0,o=e.length;n<o;++n){const o=e[n];t&&!o.visible||i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i=t._clip,n=!i.disabled,o=this.chartArea,r={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",r)&&(n&&Kr(e,{left:!1===i.left?0:o.left-i.left,right:!1===i.right?this.width:o.right+i.right,top:!1===i.top?0:o.top-i.top,bottom:!1===i.bottom?this.height:o.bottom+i.bottom}),t.controller.draw(),n&&Gr(e),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}getElementsAtEventForMode(t,e,i,n){const o=Za.modes[e];return"function"==typeof o?o(this,t,i,n):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let n=i.filter((t=>t&&t._dataset===e)).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context=hs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const n=i?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,n);Eo(e)?(o.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),r.update(o,{visible:i}),this.update((e=>e.datasetIndex===t?n:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),la.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Vr(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete sc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,n)=>{e.addEventListener(this,i,n),t[i]=n},n=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};yo(this.options.events,(t=>i(t,n)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,n)=>{e.addEventListener(this,i,n),t[i]=n},n=(i,n)=>{t[i]&&(e.removeEventListener(this,i,n),delete t[i])},o=(t,e)=>{this.canvas&&this.resize(t,e)};let r;const s=()=>{n("attach",s),this.attached=!0,this.resize(),i("resize",o),i("detach",r)};r=()=>{this.attached=!1,n("resize",o),this._stop(),this._resize(0,0),i("attach",s)},e.isAttached(this.canvas)?s():r()}unbindEvents(){yo(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},yo(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const n=i?"set":"remove";let o,r,s,a;for("dataset"===e&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+n+"DatasetHoverStyle"]()),s=0,a=t.length;s<a;++s){r=t[s];const e=r&&this.getDatasetMeta(r.datasetIndex).controller;e&&e[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map((({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}));!bo(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){const n=this.options.hover,o=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),r=o(e,t),s=i?t:o(t,e);r.length&&this.updateHoverStyle(r,n.mode,!1),s.length&&n.mode&&this.updateHoverStyle(s,n.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:qr(t,this.chartArea,this._minPadding)},n=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,n))return;const o=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,n),(o||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:n=[],options:o}=this,r=e,s=this._getActiveElements(t,n,i,r),a=function(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}(t),l=function(t,e,i,n){return i&&"mouseout"!==t.type?n?e:t:null}(t,this._lastEvent,i,a);i&&(this._lastEvent=null,mo(o.onHover,[t,s,this],this),a&&mo(o.onClick,[t,s,this],this));const c=!bo(s,n);return(c||e)&&(this._active=s,this._updateHoverStyles(s,n,e)),this._lastEvent=l,c}_getActiveElements(t,e,i,n){if("mouseout"===t.type)return[];if(!i)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,n)}}const dc=()=>yo(cc.instances,(t=>t._plugins.invalidate())),hc=!0;function pc(t,e,i){const{startAngle:n,pixelMargin:o,x:r,y:s,outerRadius:a,innerRadius:l}=e;let c=o/a;t.beginPath(),t.arc(r,s,a,n-c,i+c),l>o?(c=o/l,t.arc(r,s,l,i+c,n-c,!0)):t.arc(r,s,o,i+Io,n-Io),t.closePath(),t.clip()}function uc(t,e,i,n){return{x:i+t*Math.cos(e),y:n+t*Math.sin(e)}}function fc(t,e,i,n,o){const{x:r,y:s,startAngle:a,pixelMargin:l,innerRadius:c}=e,d=Math.max(e.outerRadius+n+i-l,0),h=c>0?c+n+i+l:0;let p=0;const u=o-a;if(n){const t=((c>0?c-n:0)+(d>0?d-n:0))/2;p=(u-(0!==t?u*t/(t+n):u))/2}const f=(u-Math.max(.001,u*d-i/To)/d)/2,g=a+f+p,m=o-f-p,{outerStart:y,outerEnd:b,innerStart:x,innerEnd:v}=function(t,e,i,n){const o=rs(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]),r=(i-e)/2,s=Math.min(r,n*e/2),a=t=>{const e=(i-Math.min(r,t))*n/2;return Qo(t,0,Math.min(r,e))};return{outerStart:a(o.outerStart),outerEnd:a(o.outerEnd),innerStart:Qo(o.innerStart,0,s),innerEnd:Qo(o.innerEnd,0,s)}}(e,h,d,m-g),w=d-y,_=d-b,k=g+y/w,S=m-b/_,R=h+x,O=h+v,$=g+x/R,E=m-v/O;if(t.beginPath(),t.arc(r,s,d,k,S),b>0){const e=uc(_,S,r,s);t.arc(e.x,e.y,b,S,m+Io)}const P=uc(O,m,r,s);if(t.lineTo(P.x,P.y),v>0){const e=uc(O,E,r,s);t.arc(e.x,e.y,v,m+Io,E+Math.PI)}if(t.arc(r,s,h,m-v/h,g+x/h,!0),x>0){const e=uc(R,$,r,s);t.arc(e.x,e.y,x,$+Math.PI,g-Io)}const M=uc(w,g,r,s);if(t.lineTo(M.x,M.y),y>0){const e=uc(w,k,r,s);t.arc(e.x,e.y,y,g-Io,k)}t.closePath()}Object.defineProperties(cc,{defaults:{enumerable:hc,value:Wr},instances:{enumerable:hc,value:sc},overrides:{enumerable:hc,value:Lr},registry:{enumerable:hc,value:Bl},version:{enumerable:hc,value:"3.7.0"},getChart:{enumerable:hc,value:ac},register:{enumerable:hc,value:(...t)=>{Bl.add(...t),dc()}},unregister:{enumerable:hc,value:(...t)=>{Bl.remove(...t),dc()}}});class gc extends $l{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const n=this.getProps(["x","y"],i),{angle:o,distance:r}=Ko(n,{x:t,y:e}),{startAngle:s,endAngle:a,innerRadius:l,outerRadius:c,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),h=this.options.spacing/2,p=fo(d,a-s)>=Ao||Zo(o,s,a),u=tr(r,l+h,c+h);return p&&u}getCenterPoint(t){const{x:e,y:i,startAngle:n,endAngle:o,innerRadius:r,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:a,spacing:l}=this.options,c=(n+o)/2,d=(r+s+l+a)/2;return{x:e+Math.cos(c)*d,y:i+Math.sin(c)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,n=(e.offset||0)/2,o=(e.spacing||0)/2;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>Ao?Math.floor(i/Ao):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let r=0;if(n){r=n/2;const e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*r,Math.sin(e)*r),this.circumference>=To&&(r=n)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const s=function(t,e,i,n){const{fullCircles:o,startAngle:r,circumference:s}=e;let a=e.endAngle;if(o){fc(t,e,i,n,r+Ao);for(let e=0;e<o;++e)t.fill();isNaN(s)||(a=r+s%Ao,s%Ao==0&&(a+=Ao))}return fc(t,e,i,n,a),t.fill(),a}(t,this,r,o);(function(t,e,i,n,o){const{options:r}=e,{borderWidth:s,borderJoinStyle:a}=r,l="inner"===r.borderAlign;s&&(l?(t.lineWidth=2*s,t.lineJoin=a||"round"):(t.lineWidth=s,t.lineJoin=a||"bevel"),e.fullCircles&&function(t,e,i){const{x:n,y:o,startAngle:r,pixelMargin:s,fullCircles:a}=e,l=Math.max(e.outerRadius-s,0),c=e.innerRadius+s;let d;for(i&&pc(t,e,r+Ao),t.beginPath(),t.arc(n,o,c,r+Ao,r,!0),d=0;d<a;++d)t.stroke();for(t.beginPath(),t.arc(n,o,l,r,r+Ao),d=0;d<a;++d)t.stroke()}(t,e,l),l&&pc(t,e,o),fc(t,e,i,n,o),t.stroke())})(t,this,r,o,s),t.restore()}}function mc(t,e,i=e){t.lineCap=fo(i.borderCapStyle,e.borderCapStyle),t.setLineDash(fo(i.borderDash,e.borderDash)),t.lineDashOffset=fo(i.borderDashOffset,e.borderDashOffset),t.lineJoin=fo(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=fo(i.borderWidth,e.borderWidth),t.strokeStyle=fo(i.borderColor,e.borderColor)}function yc(t,e,i){t.lineTo(i.x,i.y)}function bc(t,e,i={}){const n=t.length,{start:o=0,end:r=n-1}=i,{start:s,end:a}=e,l=Math.max(o,s),c=Math.min(r,a),d=o<s&&r<s||o>a&&r>a;return{count:n,start:l,loop:e.loop,ilen:c<l&&!d?n+c-l:c-l}}function xc(t,e,i,n){const{points:o,options:r}=e,{count:s,start:a,loop:l,ilen:c}=bc(o,i,n),d=function(t){return t.stepped?Xr:t.tension||"monotone"===t.cubicInterpolationMode?Jr:yc}(r);let h,p,u,{move:f=!0,reverse:g}=n||{};for(h=0;h<=c;++h)p=o[(a+(g?c-h:h))%s],p.skip||(f?(t.moveTo(p.x,p.y),f=!1):d(t,u,p,g,r.stepped),u=p);return l&&(p=o[(a+(g?c:0))%s],d(t,u,p,g,r.stepped)),!!l}function vc(t,e,i,n){const o=e.points,{count:r,start:s,ilen:a}=bc(o,i,n),{move:l=!0,reverse:c}=n||{};let d,h,p,u,f,g,m=0,y=0;const b=t=>(s+(c?a-t:t))%r,x=()=>{u!==f&&(t.lineTo(m,f),t.lineTo(m,u),t.lineTo(m,g))};for(l&&(h=o[b(0)],t.moveTo(h.x,h.y)),d=0;d<=a;++d){if(h=o[b(d)],h.skip)continue;const e=h.x,i=h.y,n=0|e;n===p?(i<u?u=i:i>f&&(f=i),m=(y*m+e)/++y):(x(),t.lineTo(e,i),p=n,y=0,u=f=i),g=i}x()}function wc(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i?xc:vc}gc.id="arc",gc.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0},gc.defaultRoutes={backgroundColor:"backgroundColor"};const _c="function"==typeof Path2D;class kc extends $l{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const n=i.spanGaps?this._loop:this._fullLoop;Is(this._points,i,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){const i=t.points,n=t.options.spanGaps,o=i.length;if(!o)return[];const r=!!t._loop,{start:s,end:a}=function(t,e,i,n){let o=0,r=e-1;if(i&&!n)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,i&&(r+=o);r>o&&t[r%e].skip;)r--;return r%=e,{start:o,end:r}}(i,o,r,n);return function(t,e,i,n){return n&&n.setContext&&i?function(t,e,i,n){const o=t._chart.getContext(),r=sa(t.options),{_datasetIndex:s,options:{spanGaps:a}}=t,l=i.length,c=[];let d=r,h=e[0].start,p=h;function u(t,e,n,o){const r=a?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=r;for(;i[e%l].skip;)e+=r;t%l!=e%l&&(c.push({start:t%l,end:e%l,loop:n,style:o}),d=o,h=e%l)}}for(const t of e){h=a?h:t.start;let e,r=i[h%l];for(p=h+1;p<=t.end;p++){const a=i[p%l];e=sa(n.setContext(hs(o,{type:"segment",p0:r,p1:a,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:s}))),aa(e,d)&&u(h,p-1,t.loop,d),r=a,d=e}h<p-1&&u(h,p-1,t.loop,d)}return c}(t,e,i,n):e}(t,!0===n?[{start:s,end:a,loop:r}]:function(t,e,i,n){const o=t.length,r=[];let s,a=e,l=t[e];for(s=e+1;s<=i;++s){const i=t[s%o];i.skip||i.stop?l.skip||(n=!1,r.push({start:e%o,end:(s-1)%o,loop:n}),e=a=i.stop?s:null):(a=s,l.skip&&(e=s)),l=i}return null!==a&&r.push({start:e%o,end:a%o,loop:n}),r}(i,s,a<s?a+o:a,!!t._fullLoop&&0===s&&a===o-1),i,e)}(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,n=t[e],o=this.points,r=ra(this,{property:e,start:n,end:n});if(!r.length)return;const s=[],a=function(t){return t.stepped?Gs:t.tension||"monotone"===t.cubicInterpolationMode?Xs:Ks}(i);let l,c;for(l=0,c=r.length;l<c;++l){const{start:c,end:d}=r[l],h=o[c],p=o[d];if(h===p){s.push(h);continue}const u=a(h,p,Math.abs((n-h[e])/(p[e]-h[e])),i.stepped);u[e]=t[e],s.push(u)}return 1===s.length?s[0]:s}pathSegment(t,e,i){return wc(this)(t,this,e,i)}path(t,e,i){const n=this.segments,o=wc(this);let r=this._loop;e=e||0,i=i||this.points.length-e;for(const s of n)r&=o(t,this,s,{start:e,end:e+i-1});return!!r}draw(t,e,i,n){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),function(t,e,i,n){_c&&!e.options.segment?function(t,e,i,n){let o=e._path;o||(o=e._path=new Path2D,e.path(o,i,n)&&o.closePath()),mc(t,e.options),t.stroke(o)}(t,e,i,n):function(t,e,i,n){const{segments:o,options:r}=e,s=wc(e);for(const a of o)mc(t,r,a.style),t.beginPath(),s(t,e,a,{start:i,end:i+n-1})&&t.closePath(),t.stroke()}(t,e,i,n)}(t,this,i,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Sc(t,e,i,n){const o=t.options,{[i]:r}=t.getProps([i],n);return Math.abs(e-r)<o.radius+o.hitRadius}kc.id="line",kc.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},kc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},kc.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class Rc extends $l{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const n=this.options,{x:o,y:r}=this.getProps(["x","y"],i);return Math.pow(t-o,2)+Math.pow(e-r,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,e){return Sc(this,t,"x",e)}inYRange(t,e){return Sc(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;return e=Math.max(e,e&&t.hoverRadius||0),2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!qr(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,Yr(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function Oc(t,e){const{x:i,y:n,base:o,width:r,height:s}=t.getProps(["x","y","base","width","height"],e);let a,l,c,d,h;return t.horizontal?(h=s/2,a=Math.min(i,o),l=Math.max(i,o),c=n-h,d=n+h):(h=r/2,a=i-h,l=i+h,c=Math.min(n,o),d=Math.max(n,o)),{left:a,top:c,right:l,bottom:d}}function $c(t,e,i,n){return t?0:Qo(e,i,n)}function Ec(t,e,i,n){const o=null===e,r=null===i,s=t&&!(o&&r)&&Oc(t,n);return s&&(o||tr(e,s.left,s.right))&&(r||tr(i,s.top,s.bottom))}function Pc(t,e){t.rect(e.x,e.y,e.w,e.h)}function Mc(t,e,i={}){const n=t.x!==i.x?-e:0,o=t.y!==i.y?-e:0,r=(t.x+t.w!==i.x+i.w?e:0)-n,s=(t.y+t.h!==i.y+i.h?e:0)-o;return{x:t.x+n,y:t.y+o,w:t.w+r,h:t.h+s,radius:t.radius}}Rc.id="point",Rc.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},Rc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class Tc extends $l{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:n}}=this,{inner:o,outer:r}=function(t){const e=Oc(t),i=e.right-e.left,n=e.bottom-e.top,o=function(t,e,i){const n=t.options.borderWidth,o=t.borderSkipped,r=ss(n);return{t:$c(o.top,r.top,0,i),r:$c(o.right,r.right,0,e),b:$c(o.bottom,r.bottom,0,i),l:$c(o.left,r.left,0,e)}}(t,i/2,n/2),r=function(t,e,i){const{enableBorderRadius:n}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,r=as(o),s=Math.min(e,i),a=t.borderSkipped,l=n||ho(o);return{topLeft:$c(!l||a.top||a.left,r.topLeft,0,s),topRight:$c(!l||a.top||a.right,r.topRight,0,s),bottomLeft:$c(!l||a.bottom||a.left,r.bottomLeft,0,s),bottomRight:$c(!l||a.bottom||a.right,r.bottomRight,0,s)}}(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n,radius:r},inner:{x:e.left+o.l,y:e.top+o.t,w:i-o.l-o.r,h:n-o.t-o.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,r.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(o.b,o.r))}}}}(this),s=(a=r.radius).topLeft||a.topRight||a.bottomLeft||a.bottomRight?ts:Pc;var a;t.save(),r.w===o.w&&r.h===o.h||(t.beginPath(),s(t,Mc(r,e,o)),t.clip(),s(t,Mc(o,-e,r)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),s(t,Mc(o,e)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,i){return Ec(this,t,e,i)}inXRange(t,e){return Ec(this,t,null,e)}inYRange(t,e){return Ec(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:n,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+n)/2:e,y:o?i:(i+n)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}Tc.id="bar",Tc.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},Tc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var Ac=Object.freeze({__proto__:null,ArcElement:gc,LineElement:kc,PointElement:Rc,BarElement:Tc});function Dc(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function Cc(t){t.data.datasets.forEach((t=>{Dc(t)}))}var jc={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled)return void Cc(t);const n=t.width;t.data.datasets.forEach(((e,o)=>{const{_data:r,indexAxis:s}=e,a=t.getDatasetMeta(o),l=r||e.data;if("y"===ds([s,t.options.indexAxis]))return;if("line"!==a.type)return;const c=t.scales[a.xAxisID];if("linear"!==c.type&&"time"!==c.type)return;if(t.options.parsing)return;let d,{start:h,count:p}=function(t,e){const i=e.length;let n,o=0;const{iScale:r}=t,{min:s,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(o=Qo(us(e,r.axis,s).lo,0,i-1)),n=c?Qo(us(e,r.axis,a).hi+1,o,i)-o:i-o,{start:o,count:n}}(a,l);if(p<=(i.threshold||4*n))Dc(e);else{switch(lo(r)&&(e._data=l,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":d=function(t,e,i,n,o){const r=o.samples||n;if(r>=i)return t.slice(e,e+i);const s=[],a=(i-2)/(r-2);let l=0;const c=e+i-1;let d,h,p,u,f,g=e;for(s[l++]=t[g],d=0;d<r-2;d++){let n,o=0,r=0;const c=Math.floor((d+1)*a)+1+e,m=Math.min(Math.floor((d+2)*a)+1,i)+e,y=m-c;for(n=c;n<m;n++)o+=t[n].x,r+=t[n].y;o/=y,r/=y;const b=Math.floor(d*a)+1+e,x=Math.min(Math.floor((d+1)*a)+1,i)+e,{x:v,y:w}=t[g];for(p=u=-1,n=b;n<x;n++)u=.5*Math.abs((v-o)*(t[n].y-w)-(v-t[n].x)*(r-w)),u>p&&(p=u,h=t[n],f=n);s[l++]=h,g=f}return s[l++]=t[c],s}(l,h,p,n,i);break;case"min-max":d=function(t,e,i,n){let o,r,s,a,l,c,d,h,p,u,f=0,g=0;const m=[],y=e+i-1,b=t[e].x,x=t[y].x-b;for(o=e;o<e+i;++o){r=t[o],s=(r.x-b)/x*n,a=r.y;const e=0|s;if(e===l)a<p?(p=a,c=o):a>u&&(u=a,d=o),f=(g*f+r.x)/++g;else{const i=o-1;if(!lo(c)&&!lo(d)){const e=Math.min(c,d),n=Math.max(c,d);e!==h&&e!==i&&m.push({...t[e],x:f}),n!==h&&n!==i&&m.push({...t[n],x:f})}o>0&&i!==h&&m.push(t[i]),m.push(r),l=e,g=0,p=u=a,c=d=h=o}}return m}(l,h,p,n);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=d}}))},destroy(t){Cc(t)}};function Ic(t,e,i){const n=function(t){const e=t.options,i=e.fill;let n=fo(i&&i.target,i);return void 0===n&&(n=!!e.backgroundColor),!1!==n&&null!==n&&(!0===n?"origin":n)}(t);if(ho(n))return!isNaN(n.value)&&n;let o=parseFloat(n);return po(o)&&Math.floor(o)===o?("-"!==n[0]&&"+"!==n[0]||(o=e+o),!(o===e||o<0||o>=i)&&o):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}class Lc{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:n,y:o,radius:r}=this;return e=e||{start:0,end:Ao},t.arc(n,o,r,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:n}=this,o=t.angle;return{x:e+Math.cos(o)*n,y:i+Math.sin(o)*n,angle:o}}}function Nc(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function Bc(t,e,i){const n=[];for(let o=0;o<i.length;o++){const r=i[o],{first:s,last:a,point:l}=zc(r,e,"x");if(!(!l||s&&a))if(s)n.unshift(l);else if(t.push(l),!a)break}t.push(...n)}function zc(t,e,i){const n=t.interpolate(e,i);if(!n)return{};const o=n[i],r=t.segments,s=t.points;let a=!1,l=!1;for(let t=0;t<r.length;t++){const e=r[t],n=s[e.start][i],c=s[e.end][i];if(tr(o,n,c)){a=o===n,l=o===c;break}}return{first:a,last:l,point:n}}function Wc(t){const{chart:e,fill:i,line:n}=t;if(po(i))return function(t,e){const i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:n}=t,o=[],r=n.segments,s=n.points,a=function(t,e){const i=[],n=t.getMatchingVisibleMetas("line");for(let t=0;t<n.length;t++){const o=n[t];if(o.index===e)break;o.hidden||i.unshift(o.dataset)}return i}(e,i);a.push(Fc({x:null,y:e.bottom},n));for(let t=0;t<r.length;t++){const e=r[t];for(let t=e.start;t<=e.end;t++)Bc(o,s[t],a)}return new kc({points:o,options:{}})}(t);if("shape"===i)return!0;const o=function(t){return(t.scale||{}).getPointPositionForValue?function(t){const{scale:e,fill:i}=t,n=e.options,o=e.getLabels().length,r=[],s=n.reverse?e.max:e.min,a=n.reverse?e.min:e.max;let l,c,d;if(d="start"===i?s:"end"===i?a:ho(i)?i.value:e.getBaseValue(),n.grid.circular)return c=e.getPointPositionForValue(0,s),new Lc({x:c.x,y:c.y,radius:e.getDistanceFromCenterForValue(d)});for(l=0;l<o;++l)r.push(e.getPointPositionForValue(l,d));return r}(t):function(t){const{scale:e={},fill:i}=t;let n,o=null;return"start"===i?o=e.bottom:"end"===i?o=e.top:ho(i)?o=e.getPixelForValue(i.value):e.getBasePixel&&(o=e.getBasePixel()),po(o)?(n=e.isHorizontal(),{x:n?o:null,y:n?null:o}):null}(t)}(t);return o instanceof Lc?o:Fc(o,n)}function Fc(t,e){let i=[],n=!1;return co(t)?(n=!0,i=t):i=function(t,e){const{x:i=null,y:n=null}=t||{},o=e.points,r=[];return e.segments.forEach((({start:t,end:e})=>{e=Nc(t,e,o);const s=o[t],a=o[e];null!==n?(r.push({x:s.x,y:n}),r.push({x:a.x,y:n})):null!==i&&(r.push({x:i,y:s.y}),r.push({x:i,y:a.y}))})),r}(t,e),i.length?new kc({points:i,options:{tension:0},_loop:n,_fullLoop:n}):null}function Hc(t,e,i){let n=t[e].fill;const o=[e];let r;if(!i)return n;for(;!1!==n&&-1===o.indexOf(n);){if(!po(n))return n;if(r=t[n],!r)return!1;if(r.visible)return n;o.push(n),n=r.fill}return!1}function Uc(t,e,i){t.beginPath(),e.path(t),t.lineTo(e.last().x,i),t.lineTo(e.first().x,i),t.closePath(),t.clip()}function Vc(t,e,i,n){if(n)return;let o=e[t],r=i[t];return"angle"===t&&(o=Jo(o),r=Jo(r)),{property:t,start:o,end:r}}function Yc(t,e,i,n){return t&&e?n(t[i],e[i]):t?t[i]:e?e[i]:0}function qc(t,e,i){const{top:n,bottom:o}=e.chart.chartArea,{property:r,start:s,end:a}=i||{};"x"===r&&(t.beginPath(),t.rect(s,n,a-s,o-n),t.clip())}function Kc(t,e,i,n){const o=e.interpolate(i,n);o&&t.lineTo(o.x,o.y)}function Gc(t,e){const{line:i,target:n,property:o,color:r,scale:s}=e,a=function(t,e,i){const n=t.segments,o=t.points,r=e.points,s=[];for(const t of n){let{start:n,end:a}=t;a=Nc(n,a,o);const l=Vc(i,o[n],o[a],t.loop);if(!e.segments){s.push({source:t,target:l,start:o[n],end:o[a]});continue}const c=ra(e,l);for(const e of c){const n=Vc(i,r[e.start],r[e.end],e.loop),a=oa(t,o,n);for(const t of a)s.push({source:t,target:e,start:{[i]:Yc(l,n,"start",Math.max)},end:{[i]:Yc(l,n,"end",Math.min)}})}}return s}(i,n,o);for(const{source:e,target:l,start:c,end:d}of a){const{style:{backgroundColor:a=r}={}}=e,h=!0!==n;t.save(),t.fillStyle=a,qc(t,s,h&&Vc(o,c,d)),t.beginPath();const p=!!i.pathSegment(t,e);let u;if(h){p?t.closePath():Kc(t,n,d,o);const e=!!n.pathSegment(t,l,{move:p,reverse:!0});u=p&&e,u||Kc(t,n,c,o)}t.closePath(),t.fill(u?"evenodd":"nonzero"),t.restore()}}function Xc(t,e,i){const n=Wc(e),{line:o,scale:r,axis:s}=e,a=o.options,l=a.fill,c=a.backgroundColor,{above:d=c,below:h=c}=l||{};n&&o.points.length&&(Kr(t,i),function(t,e){const{line:i,target:n,above:o,below:r,area:s,scale:a}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&r!==o&&(Uc(t,n,s.top),Gc(t,{line:i,target:n,color:o,scale:a,property:l}),t.restore(),t.save(),Uc(t,n,s.bottom)),Gc(t,{line:i,target:n,color:r,scale:a,property:l}),t.restore()}(t,{line:o,target:n,above:d,below:h,area:i,scale:r,axis:s}),Gr(t))}var Jc={id:"filler",afterDatasetsUpdate(t,e,i){const n=(t.data.datasets||[]).length,o=[];let r,s,a,l;for(s=0;s<n;++s)r=t.getDatasetMeta(s),a=r.dataset,l=null,a&&a.options&&a instanceof kc&&(l={visible:t.isDatasetVisible(s),index:s,fill:Ic(a,s,n),chart:t,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,o.push(l);for(s=0;s<n;++s)l=o[s],l&&!1!==l.fill&&(l.fill=Hc(o,s,i.propagate))},beforeDraw(t,e,i){const n="beforeDraw"===i.drawTime,o=t.getSortedVisibleDatasetMetas(),r=t.chartArea;for(let e=o.length-1;e>=0;--e){const i=o[e].$filler;i&&(i.line.updateControlPoints(r,i.axis),n&&Xc(t.ctx,i,r))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const n=t.getSortedVisibleDatasetMetas();for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&Xc(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const n=e.meta.$filler;n&&!1!==n.fill&&"beforeDatasetDraw"===i.drawTime&&Xc(t.ctx,n,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Zc=(t,e)=>{let{boxHeight:i=e,boxWidth:n=e}=t;return t.usePointStyle&&(i=Math.min(i,e),n=Math.min(n,e)),{boxWidth:n,boxHeight:i,itemHeight:Math.max(e,i)}};class Qc extends $l{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=mo(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const i=t.labels,n=cs(i.font),o=n.size,r=this._computeTitleHeight(),{boxWidth:s,itemHeight:a}=Zc(i,o);let l,c;e.font=n.string,this.isHorizontal()?(l=this.maxWidth,c=this._fitRows(r,o,s,a)+10):(c=this.maxHeight,l=this._fitCols(r,o,s,a)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,n){const{ctx:o,maxWidth:r,options:{labels:{padding:s}}}=this,a=this.legendHitBoxes=[],l=this.lineWidths=[0],c=n+s;let d=t;o.textAlign="left",o.textBaseline="middle";let h=-1,p=-c;return this.legendItems.forEach(((t,u)=>{const f=i+e/2+o.measureText(t.text).width;(0===u||l[l.length-1]+f+2*s>r)&&(d+=c,l[l.length-(u>0?0:1)]=0,p+=c,h++),a[u]={left:0,top:p,row:h,width:f,height:n},l[l.length-1]+=f+s})),d}_fitCols(t,e,i,n){const{ctx:o,maxHeight:r,options:{labels:{padding:s}}}=this,a=this.legendHitBoxes=[],l=this.columnSizes=[],c=r-t;let d=s,h=0,p=0,u=0,f=0;return this.legendItems.forEach(((t,r)=>{const g=i+e/2+o.measureText(t.text).width;r>0&&p+n+2*s>c&&(d+=h+s,l.push({width:h,height:p}),u+=h+s,f++,h=p=0),a[r]={left:u,top:p,col:f,width:g,height:n},h=Math.max(h,g),p+=n+s})),d+=h,l.push({width:h,height:p}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:n},rtl:o}}=this,r=Qs(o,this.left,this.width);if(this.isHorizontal()){let o=0,s=ro(i,this.left+n,this.right-this.lineWidths[o]);for(const a of e)o!==a.row&&(o=a.row,s=ro(i,this.left+n,this.right-this.lineWidths[o])),a.top+=this.top+t+n,a.left=r.leftForLtr(r.x(s),a.width),s+=a.width+n}else{let o=0,s=ro(i,this.top+t+n,this.bottom-this.columnSizes[o].height);for(const a of e)a.col!==o&&(o=a.col,s=ro(i,this.top+t+n,this.bottom-this.columnSizes[o].height)),a.top=s,a.left+=this.left+n,a.left=r.leftForLtr(r.x(a.left),a.width),s+=a.height+n}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;Kr(t,this),this._draw(),Gr(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:n}=this,{align:o,labels:r}=t,s=Wr.color,a=Qs(t.rtl,this.left,this.width),l=cs(r.font),{color:c,padding:d}=r,h=l.size,p=h/2;let u;this.drawTitle(),n.textAlign=a.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=l.string;const{boxWidth:f,boxHeight:g,itemHeight:m}=Zc(r,h),y=this.isHorizontal(),b=this._computeTitleHeight();u=y?{x:ro(o,this.left+d,this.right-i[0]),y:this.top+d+b,line:0}:{x:this.left+d,y:ro(o,this.top+b+d,this.bottom-e[0].height),line:0},ta(this.ctx,t.textDirection);const x=m+d;this.legendItems.forEach(((v,w)=>{n.strokeStyle=v.fontColor||c,n.fillStyle=v.fontColor||c;const _=n.measureText(v.text).width,k=a.textAlign(v.textAlign||(v.textAlign=r.textAlign)),S=f+p+_;let R=u.x,O=u.y;a.setWidth(this.width),y?w>0&&R+S+d>this.right&&(O=u.y+=x,u.line++,R=u.x=ro(o,this.left+d,this.right-i[u.line])):w>0&&O+x>this.bottom&&(R=u.x=R+e[u.line].width+d,u.line++,O=u.y=ro(o,this.top+b+d,this.bottom-e[u.line].height)),function(t,e,i){if(isNaN(f)||f<=0||isNaN(g)||g<0)return;n.save();const o=fo(i.lineWidth,1);if(n.fillStyle=fo(i.fillStyle,s),n.lineCap=fo(i.lineCap,"butt"),n.lineDashOffset=fo(i.lineDashOffset,0),n.lineJoin=fo(i.lineJoin,"miter"),n.lineWidth=o,n.strokeStyle=fo(i.strokeStyle,s),n.setLineDash(fo(i.lineDash,[])),r.usePointStyle){const r={radius:f*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:o},s=a.xPlus(t,f/2);Yr(n,r,s,e+p)}else{const r=e+Math.max((h-g)/2,0),s=a.leftForLtr(t,f),l=as(i.borderRadius);n.beginPath(),Object.values(l).some((t=>0!==t))?ts(n,{x:s,y:r,w:f,h:g,radius:l}):n.rect(s,r,f,g),n.fill(),0!==o&&n.stroke()}n.restore()}(a.x(R),O,v),R=((t,e,i,n)=>t===(n?"left":"right")?i:"center"===t?(e+i)/2:e)(k,R+f+p,y?R+S:this.right,t.rtl),function(t,e,i){Zr(n,i.text,t,e+m/2,l,{strikethrough:i.hidden,textAlign:a.textAlign(i.textAlign)})}(a.x(R),O,v),y?u.x+=S+d:u.y+=x})),ea(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=cs(e.font),n=ls(e.padding);if(!e.display)return;const o=Qs(t.rtl,this.left,this.width),r=this.ctx,s=e.position,a=i.size/2,l=n.top+a;let c,d=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),c=this.top+l,d=ro(t.align,d,this.right-h);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);c=l+ro(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const p=ro(s,d,d+h);r.textAlign=o.textAlign(oo(s)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=i.string,Zr(r,e.text,p,c,i)}_computeTitleHeight(){const t=this.options.title,e=cs(t.font),i=ls(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,n,o;if(tr(t,this.left,this.right)&&tr(e,this.top,this.bottom))for(o=this.legendHitBoxes,i=0;i<o.length;++i)if(n=o[i],tr(t,n.left,n.left+n.width)&&tr(e,n.top,n.top+n.height))return this.legendItems[i];return null}handleEvent(t){const e=this.options;if(!function(t,e){return!("mousemove"!==t||!e.onHover&&!e.onLeave)||!(!e.onClick||"click"!==t&&"mouseup"!==t)}(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type){const n=this._hoveredItem,o=((t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index)(n,i);n&&!o&&mo(e.onLeave,[t,n,this],this),this._hoveredItem=i,i&&!o&&mo(e.onHover,[t,i,this],this)}else i&&mo(e.onClick,[t,i,this],this)}}var td={id:"legend",_element:Qc,start(t,e,i){const n=t.legend=new Qc({ctx:t.ctx,options:i,chart:t});dl.configure(t,n,i),dl.addBox(t,n)},stop(t){dl.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const n=t.legend;dl.configure(t,n,i),n.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const n=e.datasetIndex,o=i.chart;o.isDatasetVisible(n)?(o.hide(n),e.hidden=!0):(o.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:n,textAlign:o,color:r}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const s=t.controller.getStyle(i?0:void 0),a=ls(s.borderWidth);return{text:e[t.index].label,fillStyle:s.backgroundColor,fontColor:r,hidden:!t.visible,lineCap:s.borderCapStyle,lineDash:s.borderDash,lineDashOffset:s.borderDashOffset,lineJoin:s.borderJoinStyle,lineWidth:(a.width+a.height)/4,strokeStyle:s.borderColor,pointStyle:n||s.pointStyle,rotation:s.rotation,textAlign:o||s.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class ed extends $l{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const n=co(i.text)?i.text.length:1;this._padding=ls(i.padding);const o=n*cs(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:n,right:o,options:r}=this,s=r.align;let a,l,c,d=0;return this.isHorizontal()?(l=ro(s,i,o),c=e+t,a=o-i):("left"===r.position?(l=i+t,c=ro(s,n,e),d=-.5*To):(l=o-t,c=ro(s,e,n),d=.5*To),a=n-e),{titleX:l,titleY:c,maxWidth:a,rotation:d}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=cs(e.font),n=i.lineHeight/2+this._padding.top,{titleX:o,titleY:r,maxWidth:s,rotation:a}=this._drawArgs(n);Zr(t,e.text,0,0,i,{color:e.color,maxWidth:s,rotation:a,textAlign:oo(e.align),textBaseline:"middle",translation:[o,r]})}}var id={id:"title",_element:ed,start(t,e,i){!function(t,e){const i=new ed({ctx:t.ctx,options:e,chart:t});dl.configure(t,i,e),dl.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const e=t.titleBlock;dl.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const n=t.titleBlock;dl.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const nd=new WeakMap;var od={id:"subtitle",start(t,e,i){const n=new ed({ctx:t.ctx,options:i,chart:t});dl.configure(t,n,i),dl.addBox(t,n),nd.set(t,n)},stop(t){dl.removeBox(t,nd.get(t)),nd.delete(t)},beforeUpdate(t,e,i){const n=nd.get(t);dl.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const rd={average(t){if(!t.length)return!1;let e,i,n=0,o=0,r=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();n+=t.x,o+=t.y,++r}}return{x:n/r,y:o/r}},nearest(t,e){if(!t.length)return!1;let i,n,o,r=e.x,s=e.y,a=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){const n=t[i].element;if(n&&n.hasValue()){const t=Go(e,n.getCenterPoint());t<a&&(a=t,o=n)}}if(o){const t=o.tooltipPosition();r=t.x,s=t.y}return{x:r,y:s}}};function sd(t,e){return e&&(co(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function ad(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function ld(t,e){const{element:i,datasetIndex:n,index:o}=e,r=t.getDatasetMeta(n).controller,{label:s,value:a}=r.getLabelAndValue(o);return{chart:t,label:s,parsed:r.getParsed(o),raw:t.data.datasets[n].data[o],formattedValue:a,dataset:r.getDataset(),dataIndex:o,datasetIndex:n,element:i}}function cd(t,e){const i=t.chart.ctx,{body:n,footer:o,title:r}=t,{boxWidth:s,boxHeight:a}=e,l=cs(e.bodyFont),c=cs(e.titleFont),d=cs(e.footerFont),h=r.length,p=o.length,u=n.length,f=ls(e.padding);let g=f.height,m=0,y=n.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);y+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),y&&(g+=u*(e.displayColors?Math.max(a,l.lineHeight):l.lineHeight)+(y-u)*l.lineHeight+(y-1)*e.bodySpacing),p&&(g+=e.footerMarginTop+p*d.lineHeight+(p-1)*e.footerSpacing);let b=0;const x=function(t){m=Math.max(m,i.measureText(t).width+b)};return i.save(),i.font=c.string,yo(t.title,x),i.font=l.string,yo(t.beforeBody.concat(t.afterBody),x),b=e.displayColors?s+2+e.boxPadding:0,yo(n,(t=>{yo(t.before,x),yo(t.lines,x),yo(t.after,x)})),b=0,i.font=d.string,yo(t.footer,x),i.restore(),m+=f.width,{width:m,height:g}}function dd(t,e,i,n){const{x:o,width:r}=i,{width:s,chartArea:{left:a,right:l}}=t;let c="center";return"center"===n?c=o<=(a+l)/2?"left":"right":o<=r/2?c="left":o>=s-r/2&&(c="right"),function(t,e,i,n){const{x:o,width:r}=n,s=i.caretSize+i.caretPadding;return"left"===t&&o+r+s>e.width||"right"===t&&o-r-s<0||void 0}(c,t,e,i)&&(c="center"),c}function hd(t,e,i){const n=i.yAlign||e.yAlign||function(t,e){const{y:i,height:n}=e;return i<n/2?"top":i>t.height-n/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||dd(t,e,i,n),yAlign:n}}function pd(t,e,i,n){const{caretSize:o,caretPadding:r,cornerRadius:s}=t,{xAlign:a,yAlign:l}=i,c=o+r,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=as(s);let f=function(t,e){let{x:i,width:n}=t;return"right"===e?i-=n:"center"===e&&(i-=n/2),i}(e,a);const g=function(t,e,i){let{y:n,height:o}=t;return"top"===e?n+=i:n-="bottom"===e?o+i:o/2,n}(e,l,c);return"center"===l?"left"===a?f+=c:"right"===a&&(f-=c):"left"===a?f-=Math.max(d,p)+o:"right"===a&&(f+=Math.max(h,u)+o),{x:Qo(f,0,n.width-e.width),y:Qo(g,0,n.height-e.height)}}function ud(t,e,i){const n=ls(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-n.right:t.x+n.left}function fd(t){return sd([],ad(t))}function gd(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class md extends $l{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),n=i.enabled&&e.options.animation&&i.animations,o=new ua(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=(this,hs(this.chart.getContext(),{tooltip:this,tooltipItems:this._tooltipItems,type:"tooltip"})))}getTitle(t,e){const{callbacks:i}=e,n=i.beforeTitle.apply(this,[t]),o=i.title.apply(this,[t]),r=i.afterTitle.apply(this,[t]);let s=[];return s=sd(s,ad(n)),s=sd(s,ad(o)),s=sd(s,ad(r)),s}getBeforeBody(t,e){return fd(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const{callbacks:i}=e,n=[];return yo(t,(t=>{const e={before:[],lines:[],after:[]},o=gd(i,t);sd(e.before,ad(o.beforeLabel.call(this,t))),sd(e.lines,o.label.call(this,t)),sd(e.after,ad(o.afterLabel.call(this,t))),n.push(e)})),n}getAfterBody(t,e){return fd(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:i}=e,n=i.beforeFooter.apply(this,[t]),o=i.footer.apply(this,[t]),r=i.afterFooter.apply(this,[t]);let s=[];return s=sd(s,ad(n)),s=sd(s,ad(o)),s=sd(s,ad(r)),s}_createItems(t){const e=this._active,i=this.chart.data,n=[],o=[],r=[];let s,a,l=[];for(s=0,a=e.length;s<a;++s)l.push(ld(this.chart,e[s]));return t.filter&&(l=l.filter(((e,n,o)=>t.filter(e,n,o,i)))),t.itemSort&&(l=l.sort(((e,n)=>t.itemSort(e,n,i)))),yo(l,(e=>{const i=gd(t.callbacks,e);n.push(i.labelColor.call(this,e)),o.push(i.labelPointStyle.call(this,e)),r.push(i.labelTextColor.call(this,e))})),this.labelColors=n,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),n=this._active;let o,r=[];if(n.length){const t=rd[i.position].call(this,n,this._eventPosition);r=this._createItems(i),this.title=this.getTitle(r,i),this.beforeBody=this.getBeforeBody(r,i),this.body=this.getBody(r,i),this.afterBody=this.getAfterBody(r,i),this.footer=this.getFooter(r,i);const e=this._size=cd(this,i),s=Object.assign({},t,e),a=hd(this.chart,i,s),l=pd(i,s,a,this.chart);this.xAlign=a.xAlign,this.yAlign=a.yAlign,o={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(o={opacity:0});this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,n){const o=this.getCaretPosition(t,i,n);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,i){const{xAlign:n,yAlign:o}=this,{caretSize:r,cornerRadius:s}=i,{topLeft:a,topRight:l,bottomLeft:c,bottomRight:d}=as(s),{x:h,y:p}=t,{width:u,height:f}=e;let g,m,y,b,x,v;return"center"===o?(x=p+f/2,"left"===n?(g=h,m=g-r,b=x+r,v=x-r):(g=h+u,m=g+r,b=x-r,v=x+r),y=g):(m="left"===n?h+Math.max(a,c)+r:"right"===n?h+u-Math.max(l,d)-r:this.caretX,"top"===o?(b=p,x=b-r,g=m-r,y=m+r):(b=p+f,x=b+r,g=m+r,y=m-r),v=b),{x1:g,x2:m,x3:y,y1:b,y2:x,y3:v}}drawTitle(t,e,i){const n=this.title,o=n.length;let r,s,a;if(o){const l=Qs(i.rtl,this.x,this.width);for(t.x=ud(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",r=cs(i.titleFont),s=i.titleSpacing,e.fillStyle=i.titleColor,e.font=r.string,a=0;a<o;++a)e.fillText(n[a],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s,a+1===o&&(t.y+=i.titleMarginBottom-s)}}_drawColorBox(t,e,i,n,o){const r=this.labelColors[i],s=this.labelPointStyles[i],{boxHeight:a,boxWidth:l,boxPadding:c}=o,d=cs(o.bodyFont),h=ud(this,"left",o),p=n.x(h),u=a<d.lineHeight?(d.lineHeight-a)/2:0,f=e.y+u;if(o.usePointStyle){const e={radius:Math.min(l,a)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},i=n.leftForLtr(p,l)+l/2,c=f+a/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Yr(t,e,i,c),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,Yr(t,e,i,c)}else{t.lineWidth=r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const e=n.leftForLtr(p,l-c),i=n.leftForLtr(n.xPlus(p,1),l-c-2),s=as(r.borderRadius);Object.values(s).some((t=>0!==t))?(t.beginPath(),t.fillStyle=o.multiKeyBackground,ts(t,{x:e,y:f,w:l,h:a,radius:s}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),ts(t,{x:i,y:f+1,w:l-2,h:a-2,radius:s}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(e,f,l,a),t.strokeRect(e,f,l,a),t.fillStyle=r.backgroundColor,t.fillRect(i,f+1,l-2,a-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:n}=this,{bodySpacing:o,bodyAlign:r,displayColors:s,boxHeight:a,boxWidth:l,boxPadding:c}=i,d=cs(i.bodyFont);let h=d.lineHeight,p=0;const u=Qs(i.rtl,this.x,this.width),f=function(i){e.fillText(i,u.x(t.x+p),t.y+h/2),t.y+=h+o},g=u.textAlign(r);let m,y,b,x,v,w,_;for(e.textAlign=r,e.textBaseline="middle",e.font=d.string,t.x=ud(this,g,i),e.fillStyle=i.bodyColor,yo(this.beforeBody,f),p=s&&"right"!==g?"center"===r?l/2+c:l+2+c:0,x=0,w=n.length;x<w;++x){for(m=n[x],y=this.labelTextColors[x],e.fillStyle=y,yo(m.before,f),b=m.lines,s&&b.length&&(this._drawColorBox(e,t,x,u,i),h=Math.max(d.lineHeight,a)),v=0,_=b.length;v<_;++v)f(b[v]),h=d.lineHeight;yo(m.after,f)}p=0,h=d.lineHeight,yo(this.afterBody,f),t.y-=o}drawFooter(t,e,i){const n=this.footer,o=n.length;let r,s;if(o){const a=Qs(i.rtl,this.x,this.width);for(t.x=ud(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=a.textAlign(i.footerAlign),e.textBaseline="middle",r=cs(i.footerFont),e.fillStyle=i.footerColor,e.font=r.string,s=0;s<o;++s)e.fillText(n[s],a.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+i.footerSpacing}}drawBackground(t,e,i,n){const{xAlign:o,yAlign:r}=this,{x:s,y:a}=t,{width:l,height:c}=i,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=as(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(s+d,a),"top"===r&&this.drawCaret(t,e,i,n),e.lineTo(s+l-h,a),e.quadraticCurveTo(s+l,a,s+l,a+h),"center"===r&&"right"===o&&this.drawCaret(t,e,i,n),e.lineTo(s+l,a+c-u),e.quadraticCurveTo(s+l,a+c,s+l-u,a+c),"bottom"===r&&this.drawCaret(t,e,i,n),e.lineTo(s+p,a+c),e.quadraticCurveTo(s,a+c,s,a+c-p),"center"===r&&"left"===o&&this.drawCaret(t,e,i,n),e.lineTo(s,a+d),e.quadraticCurveTo(s,a,s+d,a),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,n=i&&i.x,o=i&&i.y;if(n||o){const i=rd[t.position].call(this,this._active,this._eventPosition);if(!i)return;const r=this._size=cd(this,t),s=Object.assign({},i,this._size),a=hd(e,t,s),l=pd(t,s,a,e);n._to===l.x&&o._to===l.y||(this.xAlign=a.xAlign,this.yAlign=a.yAlign,this.width=r.width,this.height=r.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const n={width:this.width,height:this.height},o={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const r=ls(e.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&s&&(t.save(),t.globalAlpha=i,this.drawBackground(o,t,n,e),ta(t,e.textDirection),o.y+=r.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),ea(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,n=t.map((({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}})),o=!bo(i,n),r=this._positionChanged(n,e);(o||r)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,o=this._active||[],r=this._getActiveElements(t,o,e,i),s=this._positionChanged(r,t),a=e||!bo(r,o)||s;return a&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),a}_getActiveElements(t,e,i,n){const o=this.options;if("mouseout"===t.type)return[];if(!n)return e;const r=this.chart.getElementsAtEventForMode(t,o.mode,o,i);return o.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:i,caretY:n,options:o}=this,r=rd[o.position].call(this,t,e);return!1!==r&&(i!==r.x||n!==r.y)}}md.positioners=rd;var yd={id:"tooltip",_element:md,positioners:rd,afterInit(t,e,i){i&&(t.tooltip=new md({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip,i={tooltip:e};!1!==t.notifyPlugins("beforeTooltipDraw",i)&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i))},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:so,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,n=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return i[e.dataIndex]}return""},afterTitle:so,beforeBody:so,beforeLabel:so,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return lo(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:so,afterBody:so,beforeFooter:so,footer:so,afterFooter:so}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},bd=Object.freeze({__proto__:null,Decimation:jc,Filler:Jc,Legend:td,SubTitle:od,Title:id,Tooltip:yd});class xd extends Ll{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:n}of e)t[i]===n&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(lo(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:Qo(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:function(t,e,i,n){const o=t.indexOf(e);return-1===o?((t,e,i,n)=>("string"==typeof e?(i=t.push(e)-1,n.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,n):o!==t.lastIndexOf(e)?i:o}(i,t,fo(e,t),this._addedLabels),i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:n}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||(n=this.getLabels().length-1)),this.min=i,this.max=n}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,n=[];let o=this.getLabels();o=0===t&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)n.push({value:i});return n}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function vd(t,e,{horizontal:i,minRotation:n}){const o=Vo(n),r=(i?Math.sin(o):Math.cos(o))||.001,s=.75*e*(""+t).length;return Math.min(e/r,s)}xd.id="category",xd.defaults={ticks:{callback:xd.prototype.getLabelForValue}};class wd extends Ll{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return lo(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:n,max:o}=this;const r=t=>n=e?n:t,s=t=>o=i?o:t;if(t){const t=zo(n),e=zo(o);t<0&&e<0?s(0):t>0&&e>0&&r(0)}if(n===o){let e=1;(o>=Number.MAX_SAFE_INTEGER||n<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*o)),s(o+e),t||r(n-e)}this.min=n,this.max=o}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:n}=t;return n?(e=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const n=function(t,e){const i=[],{bounds:n,step:o,min:r,max:s,precision:a,count:l,maxTicks:c,maxDigits:d,includeBounds:h}=t,p=o||1,u=c-1,{min:f,max:g}=e,m=!lo(r),y=!lo(s),b=!lo(l),x=(g-f)/(d+1);let v,w,_,k,S=Wo((g-f)/u/p)*p;if(S<1e-14&&!m&&!y)return[{value:f},{value:g}];k=Math.ceil(g/S)-Math.floor(f/S),k>u&&(S=Wo(k*S/u/p)*p),lo(a)||(v=Math.pow(10,a),S=Math.ceil(S*v)/v),"ticks"===n?(w=Math.floor(f/S)*S,_=Math.ceil(g/S)*S):(w=f,_=g),m&&y&&o&&function(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}((s-r)/o,S/1e3)?(k=Math.round(Math.min((s-r)/S,c)),S=(s-r)/k,w=r,_=s):b?(w=m?r:w,_=y?s:_,k=l-1,S=(_-w)/k):(k=(_-w)/S,k=Ho(k,Math.round(k),S/1e3)?Math.round(k):Math.ceil(k));const R=Math.max(qo(S),qo(w));v=Math.pow(10,lo(a)?R:a),w=Math.round(w*v)/v,_=Math.round(_*v)/v;let O=0;for(m&&(h&&w!==r?(i.push({value:r}),w<r&&O++,Ho(Math.round((w+O*S)*v)/v,r,vd(r,x,t))&&O++):w<r&&O++);O<k;++O)i.push({value:Math.round((w+O*S)*v)/v});return y&&h&&_!==s?i.length&&Ho(i[i.length-1].value,s,vd(s,x,t))?i[i.length-1].value=s:i.push({value:s}):y&&_!==s||i.push({value:_}),i}({maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&Uo(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const n=(i-e)/Math.max(t.length-1,1)/2;e-=n,i+=n}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return Zs(t,this.chart.options.locale,this.options.ticks.format)}}class _d extends wd{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=po(t)?t:0,this.max=po(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=Vo(this.options.ticks.minRotation),n=(t?Math.sin(i):Math.cos(i))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/n))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function kd(t){return 1==t/Math.pow(10,Math.floor(Bo(t)))}_d.id="linear",_d.defaults={ticks:{callback:Pl.formatters.numeric}};class Sd extends Ll{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=wd.prototype.parse.apply(this,[t,e]);if(0!==i)return po(i)&&i>0?i:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=po(t)?Math.max(0,t):null,this.max=po(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,n=this.max;const o=e=>i=t?i:e,r=t=>n=e?n:t,s=(t,e)=>Math.pow(10,Math.floor(Bo(t))+e);i===n&&(i<=0?(o(1),r(10)):(o(s(i,-1)),r(s(n,1)))),i<=0&&o(s(n,-1)),n<=0&&r(s(i,1)),this._zero&&this.min!==this._suggestedMin&&i===s(this.min,0)&&o(s(i,-1)),this.min=i,this.max=n}buildTicks(){const t=this.options,e=function(t,e){const i=Math.floor(Bo(e.max)),n=Math.ceil(e.max/Math.pow(10,i)),o=[];let r=uo(t.min,Math.pow(10,Math.floor(Bo(e.min)))),s=Math.floor(Bo(r)),a=Math.floor(r/Math.pow(10,s)),l=s<0?Math.pow(10,Math.abs(s)):1;do{o.push({value:r,major:kd(r)}),++a,10===a&&(a=1,++s,l=s>=0?1:l),r=Math.round(a*Math.pow(10,s)*l)/l}while(s<i||s===i&&a<n);const c=uo(t.max,r);return o.push({value:c,major:kd(r)}),o}({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&Uo(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":Zs(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Bo(t),this._valueRange=Bo(this.max)-Bo(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Bo(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function Rd(t){const e=t.ticks;if(e.display&&t.display){const t=ls(e.backdropPadding);return fo(e.font&&e.font.size,Wr.font.size)+t.height}return 0}function Od(t,e,i,n,o){return t===n||t===o?{start:e-i/2,end:e+i/2}:t<n||t>o?{start:e-i,end:e}:{start:e,end:e+i}}function $d(t,e,i,n,o){const r=Math.abs(Math.sin(i)),s=Math.abs(Math.cos(i));let a=0,l=0;n.start<e.l?(a=(e.l-n.start)/r,t.l=Math.min(t.l,e.l-a)):n.end>e.r&&(a=(n.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),o.start<e.t?(l=(e.t-o.start)/s,t.t=Math.min(t.t,e.t-l)):o.end>e.b&&(l=(o.end-e.b)/s,t.b=Math.max(t.b,e.b+l))}function Ed(t){return 0===t||180===t?"center":t<180?"left":"right"}function Pd(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function Md(t,e,i){return 90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e),t}function Td(t,e,i,n){const{ctx:o}=t;if(i)o.arc(t.xCenter,t.yCenter,e,0,Ao);else{let i=t.getPointPosition(0,e);o.moveTo(i.x,i.y);for(let r=1;r<n;r++)i=t.getPointPosition(r,e),o.lineTo(i.x,i.y)}}Sd.id="logarithmic",Sd.defaults={ticks:{callback:Pl.formatters.logarithmic,major:{enabled:!0}}};class Ad extends wd{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ls(Rd(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=po(t)&&!isNaN(t)?t:0,this.max=po(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Rd(this.options))}generateTickLabels(t){wd.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const i=mo(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?function(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),n=[],o=[],r=t._pointLabels.length,s=t.options.pointLabels,a=s.centerPointLabels?To/r:0;for(let h=0;h<r;h++){const r=s.setContext(t.getPointLabelContext(h));o[h]=r.padding;const p=t.getPointPosition(h,t.drawingArea+o[h],a),u=cs(r.font),f=(l=t.ctx,c=u,d=co(d=t._pointLabels[h])?d:[d],{w:Hr(l,c.string,d),h:d.length*c.lineHeight});n[h]=f;const g=Jo(t.getIndexAngle(h)+a),m=Math.round(Yo(g));$d(i,e,g,Od(m,p.x,f.w,0,180),Od(m,p.y,f.h,90,270))}var l,c,d;t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){const n=[],o=t._pointLabels.length,r=t.options,s=Rd(r)/2,a=t.drawingArea,l=r.pointLabels.centerPointLabels?To/o:0;for(let r=0;r<o;r++){const o=t.getPointPosition(r,a+s+i[r],l),c=Math.round(Yo(Jo(o.angle+Io))),d=e[r],h=Md(o.y,d.h,c),p=Ed(c),u=Pd(o.x,d.w,p);n.push({x:o.x,y:h,textAlign:p,left:u,top:h,right:u+d.w,bottom:h+d.h})}return n}(t,n,o)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,n))}getIndexAngle(t){return Jo(t*(Ao/(this._pointLabels.length||1))+Vo(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(lo(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(lo(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return function(t,e,i){return hs(t,{label:i,index:e,type:"pointLabel"})}(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const n=this.getIndexAngle(t)-Io+i;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:n,bottom:o}=this._pointLabelItems[t];return{left:e,top:i,right:n,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Td(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:n}=e,o=this._pointLabels.length;let r,s,a;if(e.pointLabels.display&&function(t,e){const{ctx:i,options:{pointLabels:n}}=t;for(let o=e-1;o>=0;o--){const e=n.setContext(t.getPointLabelContext(o)),r=cs(e.font),{x:s,y:a,textAlign:l,left:c,top:d,right:h,bottom:p}=t._pointLabelItems[o],{backdropColor:u}=e;if(!lo(u)){const t=ls(e.backdropPadding);i.fillStyle=u,i.fillRect(c-t.left,d-t.top,h-c+t.width,p-d+t.height)}Zr(i,t._pointLabels[o],s,a+r.lineHeight/2,r,{color:e.color,textAlign:l,textBaseline:"middle"})}}(this,o),n.display&&this.ticks.forEach(((t,e)=>{0!==e&&(s=this.getDistanceFromCenterForValue(t.value),function(t,e,i,n){const o=t.ctx,r=e.circular,{color:s,lineWidth:a}=e;!r&&!n||!s||!a||i<0||(o.save(),o.strokeStyle=s,o.lineWidth=a,o.setLineDash(e.borderDash),o.lineDashOffset=e.borderDashOffset,o.beginPath(),Td(t,i,r,n),o.closePath(),o.stroke(),o.restore())}(this,n.setContext(this.getContext(e-1)),s,o))})),i.display){for(t.save(),r=o-1;r>=0;r--){const n=i.setContext(this.getPointLabelContext(r)),{color:o,lineWidth:l}=n;l&&o&&(t.lineWidth=l,t.strokeStyle=o,t.setLineDash(n.borderDash),t.lineDashOffset=n.borderDashOffset,s=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),a=this.getPointPosition(r,s),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(a.x,a.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const n=this.getIndexAngle(0);let o,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((n,s)=>{if(0===s&&!e.reverse)return;const a=i.setContext(this.getContext(s)),l=cs(a.font);if(o=this.getDistanceFromCenterForValue(this.ticks[s].value),a.showLabelBackdrop){t.font=l.string,r=t.measureText(n.label).width,t.fillStyle=a.backdropColor;const e=ls(a.backdropPadding);t.fillRect(-r/2-e.left,-o-l.size/2-e.top,r+e.width,l.size+e.height)}Zr(t,n.label,0,-o,l,{color:a.color})})),t.restore()}drawTitle(){}}Ad.id="radialLinear",Ad.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Pl.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},Ad.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},Ad.descriptors={angleLines:{_fallback:"grid"}};const Dd={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Cd=Object.keys(Dd);function jd(t,e){return t-e}function Id(t,e){if(lo(e))return null;const i=t._adapter,{parser:n,round:o,isoWeekday:r}=t._parseOpts;let s=e;return"function"==typeof n&&(s=n(s)),po(s)||(s="string"==typeof n?i.parse(s,n):i.parse(s)),null===s?null:(o&&(s="week"!==o||!Fo(r)&&!0!==r?i.startOf(s,o):i.startOf(s,"isoWeek",r)),+s)}function Ld(t,e,i,n){const o=Cd.length;for(let r=Cd.indexOf(t);r<o-1;++r){const t=Dd[Cd[r]],o=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(o*t.size))<=n)return Cd[r]}return Cd[o-1]}function Nd(t,e,i){if(i){if(i.length){const{lo:n,hi:o}=ps(i,e);t[i[n]>=e?i[n]:i[o]]=!0}}else t[e]=!0}function Bd(t,e,i){const n=[],o={},r=e.length;let s,a;for(s=0;s<r;++s)a=e[s],o[a]=s,n.push({value:a,major:!1});return 0!==r&&i?function(t,e,i,n){const o=t._adapter,r=+o.startOf(e[0].value,n),s=e[e.length-1].value;let a,l;for(a=r;a<=s;a=+o.add(a,1,n))l=i[a],l>=0&&(e[l].major=!0);return e}(t,n,o,i):n}class zd extends Ll{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const i=t.time||(t.time={}),n=this._adapter=new Va._date(t.adapters.date);ko(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Id(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:n,max:o,minDefined:r,maxDefined:s}=this.getUserBounds();function a(t){r||isNaN(t.min)||(n=Math.min(n,t.min)),s||isNaN(t.max)||(o=Math.max(o,t.max))}r&&s||(a(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||a(this.getMinMax(!1))),n=po(n)&&!isNaN(n)?n:+e.startOf(Date.now(),i),o=po(o)&&!isNaN(o)?o:+e.endOf(Date.now(),i)+1,this.min=Math.min(n,o-1),this.max=Math.max(n+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,n="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const o=this.min,r=function(t,e,i){let n=0,o=t.length;for(;n<o&&t[n]<e;)n++;for(;o>n&&t[o-1]>i;)o--;return n>0||o<t.length?t.slice(n,o):t}(n,o,this.max);return this._unit=e.unit||(i.autoSkip?Ld(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):function(t,e,i,n,o){for(let r=Cd.length-1;r>=Cd.indexOf(i);r--){const i=Cd[r];if(Dd[i].common&&t._adapter.diff(o,n,i)>=e-1)return i}return Cd[i?Cd.indexOf(i):0]}(this,r.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=Cd.indexOf(t)+1,i=Cd.length;e<i;++e)if(Dd[Cd[e]].common)return Cd[e]}(this._unit):void 0,this.initOffsets(n),t.reverse&&r.reverse(),Bd(this,r,this._majorUnit)}initOffsets(t){let e,i,n=0,o=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),n=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),o=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;n=Qo(n,0,r),o=Qo(o,0,r),this._offsets={start:n,end:o,factor:1/(n+1+o)}}_generate(){const t=this._adapter,e=this.min,i=this.max,n=this.options,o=n.time,r=o.unit||Ld(o.minUnit,e,i,this._getLabelCapacity(e)),s=fo(o.stepSize,1),a="week"===r&&o.isoWeekday,l=Fo(a)||!0===a,c={};let d,h,p=e;if(l&&(p=+t.startOf(p,"isoWeek",a)),p=+t.startOf(p,l?"day":r),t.diff(i,e,r)>1e5*s)throw new Error(e+" and "+i+" are too far apart with stepSize of "+s+" "+r);const u="data"===n.ticks.source&&this.getDataTimestamps();for(d=p,h=0;d<i;d=+t.add(d,s,r),h++)Nd(c,d,u);return d!==i&&"ticks"!==n.bounds&&1!==h||Nd(c,d,u),Object.keys(c).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,n){const o=this.options,r=o.time.displayFormats,s=this._unit,a=this._majorUnit,l=s&&r[s],c=a&&r[a],d=i[e],h=a&&c&&d&&d.major,p=this._adapter.format(t,n||(h?c:l)),u=o.ticks.callback;return u?mo(u,[p,e,i],this):p}generateTickLabels(t){let e,i,n;for(e=0,i=t.length;e<i;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,n=Vo(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(n),r=Math.sin(n),s=this._resolveTickFontOptions(0).size;return{w:i*o+s*r,h:i*r+s*o}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,n=i[e.unit]||i.millisecond,o=this._tickFormatFunction(t,0,Bd(this,[t],this._majorUnit),n),r=this._getLabelSize(o),s=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return s>0?s:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(t=0,e=n.length;t<e;++t)i=i.concat(n[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const n=this.getLabels();for(e=0,i=n.length;e<i;++e)t.push(Id(this,n[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return ys(t.sort(jd))}}function Wd(t,e,i){let n,o,r,s,a=0,l=t.length-1;i?(e>=t[a].pos&&e<=t[l].pos&&({lo:a,hi:l}=us(t,"pos",e)),({pos:n,time:r}=t[a]),({pos:o,time:s}=t[l])):(e>=t[a].time&&e<=t[l].time&&({lo:a,hi:l}=us(t,"time",e)),({time:n,pos:r}=t[a]),({time:o,pos:s}=t[l]));const c=o-n;return c?r+(s-r)*(e-n)/c:r}zd.id="time",zd.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class Fd extends zd{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Wd(e,this.min),this._tableRange=Wd(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,n=[],o=[];let r,s,a,l,c;for(r=0,s=t.length;r<s;++r)l=t[r],l>=e&&l<=i&&n.push(l);if(n.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(r=0,s=n.length;r<s;++r)c=n[r+1],a=n[r-1],l=n[r],Math.round((c+a)/2)!==l&&o.push({time:l,pos:r/(s-1)});return o}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Wd(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Wd(this._table,i*this._tableRange+this._minPos,!0)}}Fd.id="timeseries",Fd.defaults=zd.defaults;const Hd=[Fa,Ac,bd,Object.freeze({__proto__:null,CategoryScale:xd,LinearScale:_d,LogarithmicScale:Sd,RadialLinearScale:Ad,TimeScale:zd,TimeSeriesScale:Fd})];cc.register(...Hd);const Ud=cc;var Vd=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Yd=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let qd=class extends Q{updated(t){t.has("options")&&this.options&&this.loadCanvas().then((()=>{console.log("canvas loaded.")}))}render(){return D` <div style="width: 100%; height:100%;">
      <canvas id="bar-chart" width="max-content" height="max-content"></canvas>
    </div>`}loadCanvas(){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const t=yield this.canvas;t&&this.options&&new Ud(t,this.options)}))}};var Kd;qd.styles=o`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,Vd([at({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("#bar-chart")},enumerable:!0,configurable:!0})}),Yd("design:type",Object)],qd.prototype,"canvas",void 0),Vd([st({type:Object,converter:Object}),Yd("design:type",Object)],qd.prototype,"options",void 0),qd=Vd([ot("nidoca-chart-js-wrapper")],qd),et.getUniqueInstance().initDefaultComponents(),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(t){t.STRING="String",t.NUMBER="Number",t.BOOLEAN="Boolean",t.COMBOBOX="Class",t.ARRAY="Array",t.UNDEFINED="undefined"}(Kd||(Kd={}));class Gd{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?Kd.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?Kd.UNDEFINED:this.getTypeName():Kd.COMBOBOX}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let i=0;i<e.length;i++){const n=e[i];if(n.key==t)return n.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class Xd{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let i=[];if(e&&(e.tagName==t&&i.push(e),e.children.length>0)){const n=null==e?void 0:e.children;for(let e=0;e<n.length;e++)i=i.concat(this.getElementsByTagName(t,n.item(e)))}return i}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed. no lit element ? wrong lit version ?");const e=[];for(const i of Array.from(t.keys()))e.push(new Gd(i,t.get(i)));return e}}class Jd{constructor(t){this.propertyWrapper=t}getInputElement(t){if(null==t)return D``;const e=t.classWrapper;if(null==e)return D``;switch(this.propertyWrapper.getRenderType()){case Kd.STRING:return D`
                    <nidoca-form-text .textType="${oe.TEXT}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${e.instance[this.propertyWrapper.propertyName]}"
                                      @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    /></nidoca-form-text>`;case Kd.NUMBER:return D`
                    <nidoca-form-text
                            label="${this.propertyWrapper.propertyName}"
                            .textType="${oe.NUMBER}"
                            value="${e.instance[this.propertyWrapper.propertyName]}"
                            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    ></nidoca-form-text>`;case Kd.BOOLEAN:return D`
                    <nidoca-form-switch
                            label="${this.propertyWrapper.propertyName}"
                            type="checkbox"
                            .checked="${e.instance[this.propertyWrapper.propertyName]}"
                            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    ></nidoca-form-switch>`;case Kd.COMBOBOX:return D`
                    <nidoca-form-combobox
                            label="${this.propertyWrapper.propertyName}"
                            .options="${ie.enumToOptions(this.propertyWrapper.getType(),!1)}"
                            value="${Object.keys(this.propertyWrapper.getType()).filter((t=>this.propertyWrapper.getType()[t]==e.instance[this.propertyWrapper.propertyName]))[0]}"
                            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(i.target.getOutputData().value),t.parent.requestUpdate()}}"
                    >
                    </nidoca-form-combobox>`;case Kd.ARRAY:return D`
                    <nidoca-form-combobox
                            label="${this.propertyWrapper.propertyName}"
                            .options="${ie.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
                            .multiple="${!0}"
                            size="5"
                            .value="${e.instance[this.propertyWrapper.propertyName]}"
                            @input="${t=>{e.instance[this.propertyWrapper.propertyName]=t.target.getOutputData().value,e.instance.requestUpdate()}}"
                    >
                    </nidoca-form-combobox>
                `;default:return D``}}getAsHtml(t){switch(this.propertyWrapper.getConverterTypeName()){case Kd.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case Kd.ARRAY:return"";case Kd.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case Kd.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case Kd.STRING:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case Kd.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsAngular(t){switch(this.propertyWrapper.getRenderType()){case Kd.COMBOBOX:return`[${this.propertyWrapper.propertyName}]="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case Kd.STRING:return`[${this.propertyWrapper.propertyName}]="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case Kd.ARRAY:return`[${this.propertyWrapper.propertyName}]="\${[]}"\n`;default:return`[${this.propertyWrapper.propertyName}]="\${}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getConverterTypeName()){case Kd.COMBOBOX:case Kd.ARRAY:return"";case Kd.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getConverterTypeName()){case Kd.COMBOBOX:case Kd.ARRAY:return"";case Kd.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class Zd{constructor(t,e){this.parent=t,this.classWrapper=e}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsAngular(this))).join("  ")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(t){return t.indexOf(">")>-1&&(t=t.substr(t.indexOf(">")+1,t.length)),t}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(D`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new Jd(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}var Qd=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},th=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let eh=class extends Q{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(t){t.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new Zd(this,new Xd(this.element)),this.requestUpdate())}render(){var t,e,i,n,o,r,s,a;return D`
            <nidoca-section .theme="${it.PRIMARY}">
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
                    ${(null===(t=this.webcomponentGuiWrapper)||void 0===t?void 0:t.hasProperties())?D`
                                <nidoca-text-h2 class="paddingTopBottom">Attribute</nidoca-text-h2>
                                ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((t=>D`${t.getInputElement(this.webcomponentGuiWrapper)}
                                    <div class="paddingTopBottom"></div>`))}
                            `:D``}
                    ${(null===(e=this.webcomponentGuiWrapper)||void 0===e?void 0:e.classWrapper.hasSlots())?D`
                                <nidoca-text-h2 class="paddingTopBottom">Slots</nidoca-text-h2>

                                <nidoca-table theme="surface"
                                              .headers="${["name"]}"
                                              .rows="${this.toSlotRows(this.webcomponentGuiWrapper.classWrapper.getSlotNames())}"
                                >
                                </nidoca-table>`:D``}
                    ${this.customEventNames.length>0?D`
                                <nidoca-text-h2 class="paddingTopBottom">Custom Events</nidoca-text-h2>
                                <nidoca-table class="paddingTopBottom" .headers="${["name"]}"
                                              .rows="${this.toCustomEventRows(this.customEventNames)}">
                                </nidoca-table>`:D``}
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
                    <nidoca-code class="paddingTopBottom">${null===(n=this.webcomponentGuiWrapper)||void 0===n?void 0:n.getAsJavascript()}
                    </nidoca-code>
                </nidoca-tab-content>

                <nidoca-tab-content slot="tabContent">
                    <nidoca-code class="paddingTopBottom">${null===(o=this.webcomponentGuiWrapper)||void 0===o?void 0:o.getTypescript()}</nidoca-code>
                </nidoca-tab-content>

                <nidoca-tab-content slot="tabContent">
                    <nidoca-code class="paddingTopBottom">${null===(r=this.webcomponentGuiWrapper)||void 0===r?void 0:r.getAsLit()}</nidoca-code>
                </nidoca-tab-content>

                <nidoca-tab-content slot="tabContent">
                    <nidoca-code class="paddingTopBottom">${null===(s=this.webcomponentGuiWrapper)||void 0===s?void 0:s.getAsHtml()}</nidoca-code>
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
            <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements()[0];i instanceof HTMLElement&&(this.element=i)}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t.propertyWrapper.propertyName),i.push(t.propertyWrapper.getTypeName()),i.push(t.propertyWrapper.getConverterTypeName()),i.push(t.propertyWrapper.getRenderType()),e.push(i),i})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}};eh.styles=o`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
    
    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
    
  `,Qd([st({type:Array}),th("design:type",Array)],eh.prototype,"customEventNames",void 0),Qd([st({type:Object}),th("design:type",Object)],eh.prototype,"element",void 0),eh=Qd([ot("webcomponent-viewer")],eh);var ih=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let nh=class extends Q{constructor(){super(...arguments),this.componentMap=new Map,this.options=[]}render(){return D`
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


        `}slotChanged(t){const e=t.target.assignedElements(),i=e.length;for(let t=0;t<i;t++){const i=e[t];i instanceof HTMLElement&&(null==this.elementName&&(this.elementName=i.tagName),this.componentMap.set(i.tagName,i.cloneNode(!0)))}this.options=ie.stringArrayToOptions(Array.from(this.componentMap.keys())),this.requestUpdate()}};nh.styles=o`
        slot {
            display:none;
        }
    `,ih([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],nh.prototype,"elementName",void 0),nh=ih([ot("webcomponent-viewer-container")],nh);let oh=class extends Q{render(){return D`
      <nidoca-section>
        <div style="padding-top:20vh;padding-bottom:20vh;">
          <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
            <nidoca-img
              width="100px"
              height="100px"
              src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg"
            >
            </nidoca-img>
            <nidoca-text-h1>&nbsp;nidoca-webcomponents</nidoca-text-h1>
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

      <nidoca-section>
        <nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img>
        <nidoca-article
          style="padding-left:25px;"
          title="Lorem Ipsum"
          summary="Lorem Ipsum Dolorem ipsum med en to."
          text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
        ></nidoca-article>
      </nidoca-section>

      <nidoca-container .theme="${it.SECONDARY}">
        <nidoca-section>
          <nidoca-article
            title="Responsive Komponenten"
            summary="Die Komponenten sind für Desktop, Tablet und Mobile optimiert."
            text="The components looks good on all devices, because they are designed responsive. Responsive web design is a
            creative and technical paradigm for creating websites, so that they can react to the properties of the end
            device used, especially smartphones and tablet computers."
          >
          </nidoca-article>
        </nidoca-section>
      </nidoca-container>

      <nidoca-container .theme="${it.BACKGROUND}">
        <nidoca-section>
          <nidoca-article
            title="Webcomponents"
            summary="Alle Komponenten erfüllen den Webcomponent Standart"
            text="Webkomponenten sind eine Gruppe von Web-Technologien, die es ermöglichen, benutzerdefinierte, wiederverwendbare HTML Elemente zu erstellen, deren Funktionalität gekapselt ist und damit vollständig getrennt von anderem Code."
          >
          </nidoca-article>
        </nidoca-section>
      </nidoca-container>

      <nidoca-container .theme="${it.PRIMARY}">
        <nidoca-section>
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
    `}};oh.styles=o``,oh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-main")],oh);var rh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},sh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ah=class extends Q{constructor(){super(...arguments),this.aufgaben=[[]]}firstUpdated(){Vn.search("/vertrag","").then((t=>{const e=t.filter((t=>t.kosten>0)).sort(((t,e)=>t.kosten/t.abrechnungsperiode>e.kosten/e.abrechnungsperiode?-1:1));let i=0;e.forEach((t=>{i+=t.kosten/t.abrechnungsperiode})),console.log(i),this.options={type:"bar",data:{labels:e.map((t=>t.name)),datasets:[{indexAxis:"y",label:"Kosten pro Monat",data:e.map((t=>t.kosten/t.abrechnungsperiode)),backgroundColor:e.map((()=>getComputedStyle(document.body).getPropertyValue("--app-color-background"))),borderWidth:0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}}}}})),Vn.search("/vertrag_kategorie","").then((t=>{this.options2={type:"pie",data:{labels:t.map((t=>t.kategorie)),datasets:[{label:"My First Dataset",data:t.map((t=>t.kosten)),backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]}}})),Vn.search("/aufgabe","?offset=0&limit=100&order=ablaufdatum.asc&titel=like.*").then((t=>{const e=new Hn,i=[[]];t.forEach((t=>{i.push([t.titel,e.formatDate(t.ablaufdatum,"dd.MM.yyyy")])})),this.aufgaben=i}))}render(){return D`
            <nidoca-dashboard>
                <nidoca-text-h1 style="padding: var(--space-2);width: 100%;">Dashboard</nidoca-text-h1>

                <nidoca-dashboard-box-50>
                    <nidoca-card>
                        <nidoca-box>
                            <nidoca-text-h2>Kostenverteilung pro Monat in Euro</nidoca-text-h2>
                            <nidoca-chart-js-wrapper style="height:350px;"
                                                     .options="${this.options}"></nidoca-chart-js-wrapper>
                        </nidoca-box>
                    </nidoca-card>
                </nidoca-dashboard-box-50>

                <nidoca-dashboard-box-50>
                    <nidoca-card>
                        <nidoca-box>
                            <nidoca-text-h2>Kostenverteilung pro Kategorie</nidoca-text-h2>
                            <nidoca-chart-js-wrapper .options="${this.options2}"></nidoca-chart-js-wrapper>
                        </nidoca-box>
                    </nidoca-card>
                </nidoca-dashboard-box-50>

                <nidoca-dashboard-box-100>
                    <nidoca-card>
                        <nidoca-box>
                            <nidoca-text-h2>Nächste Aufgaben</nidoca-text-h2>

                            <nidoca-table theme="surface" .headers="${["Titel","Ablaufdatum"]}"
                                          .rows="${this.aufgaben}"></nidoca-table>
                        </nidoca-box>
                    </nidoca-card>
                </nidoca-dashboard-box-100>
            </nidoca-dashboard>
        `}};ah.styles=o``,rh([st(),sh("design:type",Object)],ah.prototype,"options",void 0),rh([st(),sh("design:type",Object)],ah.prototype,"options2",void 0),rh([st(),sh("design:type",Array)],ah.prototype,"aufgaben",void 0),ah=rh([ot("nidoca-page-dashboard")],ah);var lh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let ch=class extends Q{constructor(){super(...arguments),this.elementName="nidoca-tabs"}render(){return D`
            <nidoca-section>
                <nidoca-article
                        title="Komponentenübersicht"
                        text="Auf dieser Seite kannst du dir die einzelnen Komponenten von Nidoca anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
                ></nidoca-article>
            </nidoca-section>

            <nidoca-section>
                <webcomponent-viewer-container>
                    ${et.getUniqueInstance().registeredElementNames.map((t=>D`
                        ${et.getUniqueInstance().registeredElementsMap.get(t)}
                    `))}
                </webcomponent-viewer-container>
            </nidoca-section>
        `}};ch.styles=o``,lh([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],ch.prototype,"elementName",void 0),ch=lh([ot("nidoca-page-playground")],ch);let dh=class extends Q{render(){return D`
      <nidoca-section>
        <nidoca-article
          title="Komponentenübersicht"
          text="Auf dieser Seite kannst du dir die einzelnen Komponenten von Nidoca anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
        ></nidoca-article>
      </nidoca-section>

      ${et.getUniqueInstance().registeredElementNames.map((t=>D`
          <nidoca-section>
            <nidoca-text type="H4" text="<${t}></${t}>"></nidoca-text>
            ${et.getUniqueInstance().registeredElementsMap.get(t)}
          </nidoca-section>
        `))}
    `}};dh.styles=o``,dh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-components")],dh);let hh=class extends Q{render(){return D`
      <nidoca-section>
        <nidoca-article title="Impressum" summary="Angaben gemäß § 5 TMG">
          <nidoca-text>Dominik Bruhn</nidoca-text>
          <nidoca-text>Holzwickeder Straße 109c</nidoca-text>
          <nidoca-text>44309 Dortmund</nidoca-text>
          <nidoca-layout-spacer></nidoca-layout-spacer>
          <nidoca-text>Telefonnummer: +49 152 052 488 62</nidoca-text>
          <nidoca-text>E-Mail: dominikbruhn [at] googlemail.com</nidoca-text>
        </nidoca-article>
      </nidoca-section>

      <nidoca-section>
        <nidoca-article title="Streitsschlichtung">
          <nidoca-text
            >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="${mi.BLANK}"
              >https://ec.europa.eu/consumers/odr</nidoca-link
            >. <br />Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.</nidoca-text
          >
          <nidoca-text>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </nidoca-text>
        </nidoca-article>
      </nidoca-section>

      <nidoca-section>
        <nidoca-article title="Haftungsinhalt">
          <nidoca-text>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
            Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
            eine rechtswidrige Tätigkeit hinweisen.<br />
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </nidoca-text>
        </nidoca-article>
      </nidoca-section>

      <nidoca-section>
        <nidoca-article title="Haftungslinks">
          <nidoca-text>
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

      <nidoca-section>
        <nidoca-article title="Copyright">
          <nidoca-text>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </nidoca-text>
        </nidoca-article>
      </nidoca-section>

      <nidoca-section>
        <nidoca-article title="Quelle">
          <nidoca-link href="https://www.e-recht24.de/impressum-generator.html" targetType="${mi.BLANK}"
            >https://www.e-recht24.de/impressum-generator.html</nidoca-link
          >
        </nidoca-article>
      </nidoca-section>

      <div style="padding-top:var(--space-8); padding-bottom:var(--space-8);">
        <nidoca-section>
          <nidoca-article title="Google Material Icons">
            <nidoca-link href="https://fonts.google.com/icons" targetType="${mi.BLANK}"
              >https://fonts.google.com/icons</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
        <nidoca-section>
          <nidoca-article title="Google Fonts">
            <nidoca-link href=" https://fonts.google.com/" targetType="${mi.BLANK}">
              https://fonts.google.com/</nidoca-link
            >
          </nidoca-article>
        </nidoca-section>
      </div>
    `}};hh.styles=o`
    nidoca-section {
      padding-bottom: var(--space-2);
    }
  `,hh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-imprint")],hh);var ph=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},uh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fh=class extends Q{constructor(){super(),this.cssVars=[],this.cssVars=((t=document.styleSheets)=>{const e=[];return Array.from(t).forEach((t=>{Array.from(t.cssRules).forEach((t=>{if(!t||!t.style)return;const i=t.style;Array.from(i).forEach((t=>{t.startsWith("--")&&-1==e.indexOf(t)&&e.push(t)}))}))})),e})()}render(){return D`
      <nidoca-layout-spacer top="var(--space-8)">
        <nidoca-section>
          <nidoca-article title="CSS Variablen">
            ${Qt([this.cssVars],(()=>D`
                  ${Jt(this.cssVars,(t=>D`
                      <nidoca-form-text
                        style="width:100%;"
                        @input="${e=>{document.documentElement.style.setProperty(t,e.target?e.target.getOutputData().value:"")}}"
                        type="${t.indexOf("color")>-1?oe.COLOR:oe.TEXT}"
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
    `}};fh.styles=o``,ph([st({type:Array}),uh("design:type",Array)],fh.prototype,"cssVars",void 0),fh=ph([ot("nidoca-page-settings"),uh("design:paramtypes",[])],fh);let gh=class extends Q{render(){return D``}};gh.styles=o``,gh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-privacy")],gh);let mh=class extends Q{render(){return D``}};mh.styles=o``,mh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-terms-of-use")],mh);class yh{constructor(){this.id=0,this.name="",this.beschreibung="",this.internetseite="",this.benutzername="",this.adresse="",this.email="",this.iban="",this.vertragsnehmer="",this.kategorie="",this.vertragsbeginn=new Date,this.vertragsende=new Date,this.kuendigungsfrist=0,this.vertragsnummer="",this.ansprechpatrtner="",this.supporttelefon="",this.kosten=0,this.abrechnungsperiode=0,this.aktiv=!1,this.gekuendigt=!1}}class bh{constructor(){this.id=0,this.titel="",this.beschreibung="",this.ablaufdatum=new Date,this.erledigt=!1}}class xh extends Kn{getModel(){return new yh}getPath(){return"/vertrag"}getPrimaryText(t){return t.name}getSecondaryText(t){return t.beschreibung}getSectionKey(){return"name"}getProperties(){const t=super.getProperties();return t.forEach((t=>{"adresse"!=t.key&&"beschreibung"!=t.key||(t.type="textarea"),"internetseite"==t.key&&(t.type="url"),"name"==t.key&&(t.required=!0)})),t}search(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return Vn.search(this.getPath(),"?offset=0&limit=100&order=name.asc&name=like.*".concat(t).concat("*"))}))}}let vh=class extends Q{render(){return D` <nidoca-generic-crud .controller="${new xh}"></nidoca-generic-crud> `}};vh.styles=o``,vh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-vertrag")],vh);class wh extends Kn{getModel(){return new bh}getPath(){return"/aufgabe"}getSectionKey(){return"ablaufdatum"}getPrimaryText(t){return t.titel}getSecondaryText(t){return t.beschreibung}getProperties(){const t=super.getProperties();return t.forEach((t=>{"beschreibung"==t.key&&(t.type="textarea"),"ablaufdatum"==t.key&&(t.required=!0)})),t}search(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return Vn.search(this.getPath(),"?offset=0&limit=100&order=ablaufdatum.asc&titel=like.*".concat(t).concat("*"))}))}}let _h=class extends Q{render(){return D`
            <nidoca-generic-crud .controller="${new wh}"></nidoca-generic-crud> `}};_h.styles=o``,_h=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-aufgabe")],_h);class kh{constructor(){this.listeners=[],window.onpopstate=t=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(t.state)),this.notifyListeners()},document.addEventListener("click",(t=>{if(!this.shouldIgnoreEvent(t)){const e=this.getAnchor(t);e&&!this.shouldIgnoreAnchor(e)&&(t.preventDefault(),e.hash.length>0&&this.navigate(e.hash))}}))}static getUniqueInstance(){return kh.uniqueInstance||(kh.uniqueInstance=new kh),kh.uniqueInstance}subscribe(t){console.trace("subscribe router listener"),this.listeners.push(t)}back(){history.back()}forward(){history.forward()}navigate(t,e=null){-1==t.indexOf("#")&&(t="#".concat(t)),console.trace("navigate to: %s",t),null!=e&&console.trace("state: %s",JSON.stringify(e)),document.location.hash!==t?(history.pushState(e,"",t),this.notifyListeners()):console.trace("you are already on page: "+t)}getCurrentState(){return history.state}getStateProperty(t){const e=this.getCurrentState();return null!=e?e[t]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const t=this.getCurrentPage();this.listeners.forEach((e=>e.routeChanged(t)))}shouldIgnoreEvent(t){return t.defaultPrevented||0!==t.button||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey}getAnchor(t){for(const e of t.composedPath?t.composedPath():[])if(this.isAnchor(e))return e;let e=t.target;for(;e&&!this.isAnchor(e);)e=e.parentNode;return e&&this.isAnchor(e)?e:null}isAnchor(t){return t.nodeName&&"a"===t.nodeName.toLowerCase()}shouldIgnoreAnchor(t){return!(!t.target||"_self"===t.target.toLowerCase())||(!!t.hasAttribute("download")||(t.origin||this.getAnchorOrigin(t))!==window.location.origin)}getAnchorOrigin(t){const e=t.port,i=t.protocol;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}}let Sh=class extends Q{render(){return D`
      <nidoca-list slot="sidebar">
        <nidoca-list-item
          icon="home"
          text="Home"
          href="#main"
          .rendered="${!0}"
          @click="${()=>kh.getUniqueInstance().navigate("main")}"
        ></nidoca-list-item>
        <nidoca-list-item
          icon="home"
          text="Gallery"
          href="#main"
          .rendered="${!0}"
          @click="${()=>kh.getUniqueInstance().navigate("gallery")}"
        ></nidoca-list-item>
      </nidoca-list>
    `}};Sh.styles=o``,Sh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-elevation-settings")],Sh);var Rh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Oh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $h=class extends Q{constructor(){super(...arguments),this.theme=it.BACKGROUND,this.label="Anmeldung",this.usernameLabel="Benutzername/Email",this.passwordLabel="Passwort",this.buttonLabel="Anmelden"}render(){return D`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.EMAIL}"
            label="${this.usernameLabel}"
            name="username"
            required
            trailingIcon="account_circle"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${oe.PASSWORD}"
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
    `}login(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-login-submit",{detail:this.formComponent.getOutputData(),bubbles:!1,composed:!1}))}};$h.styles=o`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Rh([st({type:it,converter:String}),Oh("design:type",Object)],$h.prototype,"theme",void 0),Rh([st({type:String,converter:String}),Oh("design:type",String)],$h.prototype,"label",void 0),Rh([st({type:String,converter:String}),Oh("design:type",String)],$h.prototype,"usernameLabel",void 0),Rh([st({type:String,converter:String}),Oh("design:type",String)],$h.prototype,"passwordLabel",void 0),Rh([st({type:String,converter:String}),Oh("design:type",String)],$h.prototype,"buttonLabel",void 0),Rh([lt("#authenitcate-form"),Oh("design:type",Object)],$h.prototype,"formComponent",void 0),$h=Rh([ot("nidoca-form-login")],$h);var Eh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ph=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Mh=class extends Q{constructor(){super(),this.showPopup=!1,this.popupContent=D``,this.navigationClosed=!1,this.prominent=!1,this.currentPage=D`
        <nidoca-page-main></nidoca-page-main>`,this.elevationShow=!1,kh.getUniqueInstance().subscribe(this),this.routeChanged(kh.getUniqueInstance().getCurrentPage())}routeChanged(t){switch(console.log("enter new page, url: %s",t),t){case"dashboard":this.currentPage=D`
                    <nidoca-page-dashboard></nidoca-page-dashboard>`;break;case"playground":this.currentPage=D`
                    <nidoca-page-playground></nidoca-page-playground>`;break;case"components":this.currentPage=D`
                    <nidoca-page-components></nidoca-page-components>`;break;case"vertrag":this.currentPage=D`
                    <nidoca-page-vertrag></nidoca-page-vertrag>`;break;case"aufgabe":this.currentPage=D`
                    <nidoca-page-aufgabe></nidoca-page-aufgabe>`;break;case"settings":this.currentPage=D`
                    <nidoca-page-settings></nidoca-page-settings>`;break;case"imprint":this.currentPage=D`
                    <nidoca-page-imprint></nidoca-page-imprint>`;break;case"terms-of-use":this.currentPage=D`
                    <nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"privacy":this.currentPage=D`
                    <nidoca-page-privacy></nidoca-page-privacy>`;break;default:this.currentPage=D`
                    <nidoca-page-main></nidoca-page-main>`}}render(){return D`
            <nidoca-template .prominent="${this.prominent}" .navigationClosed="${this.navigationClosed}">
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        icon="person"
                        @nidoca-event-icon-clicked="${()=>{this.showPopup=!0,this.popupContent=D`
                                <nidoca-icon
                                        @nidoca-event-icon-clicked="${()=>this.showPopup=!1}"
                                        icon="close"
                                        clickable
                                ></nidoca-icon>
                                <nidoca-form-login
                                        @nidoca-form-login-submit="${t=>function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){(yield Vn.login(t.detail.jsonObject.username,t.detail.jsonObject.password))&&(this.showPopup=!1)}))}"
                                ></nidoca-form-login>`}}"
                ></nidoca-icon>
                <nidoca-icon slot="topRight" style="padding-right:var(--space-2);" icon="share"></nidoca-icon>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        icon="more_vert"
                        .clickable="${!0}"
                        @nidoca-event-icon-clicked="${t=>{this.elevationShow=!0,this.elevationAssociatedElement=t.target,this.elevationContentElement=D`
                                <nidoca-elevation-settings></nidoca-elevation-settings>`}}"
                ></nidoca-icon>

                <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

                <span slot="content">${this.currentPage}</span>

                <nidoca-menu slot="left" theme="primary">
                    <nidoca-menu-item text="Start" @click="${()=>kh.getUniqueInstance().navigate("main")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Dashboard"
                                      @click="${()=>kh.getUniqueInstance().navigate("dashboard")}">
                    </nidoca-menu-item>

                    <nidoca-menu-area text="Framework"></nidoca-menu-area>

                    <nidoca-menu-item text="Spielwiese"
                                      @click="${()=>kh.getUniqueInstance().navigate("playground")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Verträge" @click="${()=>kh.getUniqueInstance().navigate("vertrag")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Aufgabe" @click="${()=>kh.getUniqueInstance().navigate("aufgabe")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item
                            text="Komponenten"
                            @click="${()=>kh.getUniqueInstance().navigate("components")}"
                    >
                    </nidoca-menu-item>

                    <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>

                    <nidoca-menu-item text="Impressum"
                                      @click="${()=>kh.getUniqueInstance().navigate("imprint")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Datenschutz"
                                      @click="${()=>kh.getUniqueInstance().navigate("privacy")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item
                            text="Nutzungsbedingungen"
                            @click="${()=>kh.getUniqueInstance().navigate("terms-of-use")}"
                    >
                    </nidoca-menu-item>

                    <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>

                    <nidoca-menu-item
                            icon="home"
                            text="Einstellungen"
                            @click="${()=>kh.getUniqueInstance().navigate("settings")}"
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
        `}};Eh([st({type:Boolean}),Ph("design:type",Boolean)],Mh.prototype,"showPopup",void 0),Eh([st({type:Object}),Ph("design:type",Object)],Mh.prototype,"popupContent",void 0),Eh([st({type:Boolean}),Ph("design:type",Boolean)],Mh.prototype,"navigationClosed",void 0),Eh([st({type:Boolean}),Ph("design:type",Boolean)],Mh.prototype,"prominent",void 0),Eh([st({type:Object}),Ph("design:type",Object)],Mh.prototype,"currentPage",void 0),Eh([st({type:Boolean}),Ph("design:type",Boolean)],Mh.prototype,"elevationShow",void 0),Eh([st({type:Object}),Ph("design:type",Object)],Mh.prototype,"elevationAssociatedElement",void 0),Eh([st({type:Object}),Ph("design:type",Object)],Mh.prototype,"elevationContentElement",void 0),Mh=Eh([ot("nidoca-app"),Ph("design:paramtypes",[])],Mh)})();