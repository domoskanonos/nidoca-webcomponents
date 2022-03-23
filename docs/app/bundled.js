/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class n{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=(t,...i)=>{const o=1===t.length?t[0]:i.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new n(o,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new n("string"==typeof t?t:t+"",e))(i)})(t):t;var s;const a=window.trustedTypes,l=a?a.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Eh(i,e);void 0!==n&&(this._$Eu.set(n,i),t.push(n))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const o=this[t];this[e]=n,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),n=window.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var n,o;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const s=(null!==(o=null===(n=i.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==o?o:d.toAttribute)(e,i.type);this._$Ei=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Ei=null}}_$AK(t,e){var i,n,o;const r=this.constructor,s=r._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=r.getPropertyOptions(s),a=t.converter,l=null!==(o=null!==(n=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==o?o:d.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.2.0");const g=globalThis.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,b="?"+y,v=`<${b}>`,x=document,w=(t="")=>x.createComment(t),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,S=t=>{var e;return k(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,E=/>/g,P=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,T=/"/g,M=/^(?:script|style|textarea)$/i,A=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),D=A(1),C=(A(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),I=new WeakMap,L=x.createTreeWalker(x,129,null,!1),N=(t,e)=>{const i=t.length-1,n=[];let o,r=2===e?"<svg>":"",s=R;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===R?"!--"===l[1]?s=O:void 0!==l[1]?s=E:void 0!==l[2]?(M.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=P):void 0!==l[3]&&(s=P):s===P?">"===l[0]?(s=null!=o?o:R,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?P:'"'===l[3]?T:$):s===T||s===$?s=P:s===O||s===E?s=R:(s=P,o=void 0);const h=s===P&&t[e+1].startsWith("/>")?" ":"";r+=s===R?i+v:c>=0?(n.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+y+h):i+y+(-2===c?(n.push(void 0),e):h)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==m?m.createHTML(a):a,n]};class z{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,r=0;const s=t.length-1,a=this.parts,[l,c]=N(t,e);if(this.el=z.createElement(l,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=L.nextNode())&&a.length<s;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[r++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?K:"@"===e[1]?Y:U})}else a.push({type:6,index:o})}for(const e of t)n.removeAttribute(e)}if(M.test(n.tagName)){const t=n.textContent.split(y),e=t.length-1;if(e>0){n.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],w()),L.nextNode(),a.push({type:2,index:++o});n.append(t[e],w())}}}else if(8===n.nodeType)if(n.data===b)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(y,t+1));)a.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,n){var o,r,s,a;if(e===C)return e;let l=void 0!==n?null===(o=i._$Cl)||void 0===o?void 0:o[n]:i._$Cu;const c=_(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(s=(a=i)._$Cl)&&void 0!==s?s:a._$Cl=[])[n]=l:i._$Cu=l),void 0!==l&&(e=B(t,l._$AS(t,e.values),l,n)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:x).importNode(i,!0);L.currentNode=o;let r=L.nextNode(),s=0,a=0,l=n[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new F(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new G(r,this,t)),this.v.push(e),l=n[++a]}s!==(null==l?void 0:l.index)&&(r=L.nextNode(),s++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,n){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),_(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==C&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):S(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==j&&_(this._$AH)?this._$AA.nextSibling.data=t:this.S(x.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,o="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=z.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new W(o,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new z(t)),e}A(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new F(this.M(w()),this.M(w()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class U{constructor(t,e,i,n,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const o=this.strings;let r=!1;if(void 0===o)t=B(this,t,e,0),r=!_(t)||t!==this._$AH&&t!==C,r&&(this._$AH=t);else{const n=t;let s,a;for(t=o[0],s=0;s<o.length-1;s++)a=B(this,n[i+s],e,s),a===C&&(a=this._$AH[s]),r||(r=!_(a)||a!==this._$AH[s]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}r&&!n&&this.k(t)}k(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends U{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===j?void 0:t}}const H=g?g.emptyScript:"";class K extends U{constructor(){super(...arguments),this.type=4}k(t){t&&t!==j?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class Y extends U{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:j)===C)return;const n=this._$AH,o=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==j&&(n===j||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const q={P:"$lit$",V:y,L:b,I:1,N,R:W,D:S,j:B,H:F,O:U,F:K,B:Y,W:V,Z:G},X=window.litHtmlPolyfillSupport;var J,Z;null==X||X(z,F),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.1.1");class Q extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var n,o;const r=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let s=r._$litPart$;if(void 0===s){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=s=new F(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return C}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Q}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.1.1");class et{constructor(){this._registeredElementsMap=new Map}initDefaultComponents(){this._registeredElementsMap.set("nidoca-form-upload",D`
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
            <nidoca-text>Ut enim ad minim veniam.</nidoca-text>`);const t=new li;t.src="http://nidoca.eu/img/DSC02586.jpg",t.width="100%",t.height="100%",this.registeredElementsMap.set("nidoca-img",D`${t}`);const e=new hi;e.src="http://www.youtube.com/embed/lJIrF4YjHfQ",this.registeredElementsMap.set("nidoca-movie",D`${e}`),this.registeredElementsMap.set("nidoca-search-bar",D`
                <nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`),this.registeredElementsMap.set("nidoca-avatar",D`
                <nidoca-avatar
                        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
                        primaryText="Dominik Bruhn"
                        description="Softwareentwickler"
                >
                </nidoca-avatar>`);const i=new Dt;i.style.padding="var(--space-6)",this.registeredElementsMap.set("nidoca-progress",D`${i}`);const n=new Qe;n.style.padding="var(--space-6)",n.icon="home",n.primaryText="Home Icon",n.clickable=!0,n.style.fontSize="96px",this.registeredElementsMap.set("nidoca-icon",D`${n}`),this._registeredElementsMap.set("nidoca-menu",D`
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
                </nidoca-icon-with-description>`)}static getUniqueInstance(){return et.uniqueInstance||(et.uniqueInstance=new et),et.uniqueInstance}get registeredElementsMap(){return this._registeredElementsMap}get registeredElementNames(){const t=[];for(const e of this.registeredElementsMap.keys())t.push(e);return t}registerElementName(t){console.log(`register element: ${t}`);const e=document.createElement(t);this.registeredElementsMap.set(t,D`${e}`)}}class it{static getStyle(t){return t?t==it.TRANSPARENT?D``:D`
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
                </style>`:D``}static getOposite(t){return t==it.BACKGROUND?it.SURFACE:t==it.PRIMARY||t==it.PRIMARY?it.SECONDARY:t==it.SECONDARY?it.PRIMARY:it.BACKGROUND}getParentTheme(t){let e=t;for(;null!=e;){if(null!=e.theme)return e.theme;e=e.parentElement}}}it.PRIMARY="primary",it.SECONDARY="secondary",it.SURFACE="surface",it.BACKGROUND="background",it.TRANSPARENT="transparent";class nt{constructor(t,e,i=10240){this.key=t,this.minWidth=e,this.maxWidth=i}static applyDevices(t,e){for(let i=0;i<e.length;i++)if(e[i]==this.getCurrentScreen())return t;return""}static getCurrentScreen(){let t=null;return[nt.MOBILE,nt.TABLET,nt.DESKTOP].forEach((e=>{(null==e.minWidth||e.minWidth<window.innerWidth)&&(null==e.maxWidth||e.maxWidth>window.innerWidth)&&(t=e)})),t}asMediaStyle(t){let e="@media ";return this.minWidth&&(e=e.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(e=e.concat(" and "))),this.maxWidth&&(e=e.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),e=e.concat("{"),e=e.concat(t),e=e.concat("} "),e}}nt.MOBILE=new nt("MOBILE",0,640),nt.TABLET=new nt("TABLET",641,1007),nt.DESKTOP=new nt("DESKTOP",1008),nt.WIDE_DESKTOP=new nt("WIDE_DESKTOP",1008);const ot=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){window.customElements.define(t,e)}}})(t,e),rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)}const at=({finisher:t,descriptor:e})=>(i,n)=>{var o;if(void 0===n){const n=null!==(o=i.originalKey)&&void 0!==o?o:i.key,r=null!=e?{kind:"method",placement:"prototype",key:n,descriptor:e(i.key)}:{...i,key:n};return null!=t&&(r.finisher=function(e){t(e,n)}),r}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,n,e(n)),null==t||t(o,n)}};function lt(t,e){return at({descriptor:i=>{const n={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[e]&&(this[e]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==n?n:null),this[e]}}return n}})}var ct;null===(ct=window.HTMLSlotElement)||void 0===ct||ct.prototype.assignedElements;var dt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ht=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let pt=class extends Q{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return D`
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
  `,ft([st({type:it,converter:String}),gt("design:type",String)],mt.prototype,"theme",void 0),ft([st({type:ut,converter:String}),gt("design:type",String)],mt.prototype,"accordionType",void 0),ft([lt("#accordionSlot"),gt("design:type",Object)],mt.prototype,"accordionSlot",void 0),mt=ft([ot("nidoca-accordion")],mt);var yt,bt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},vt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t[t.CURRENT=0]="CURRENT",t[t.COMPLETED=1]="COMPLETED",t[t.OPEN=2]="OPEN",t[t.FINISH=3]="FINISH"}(yt||(yt={}));let xt=class extends Q{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return D`
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

          ${this.isLast?D``:D`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"
          ><slot></slot>
        </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==yt.COMPLETED?"var(--app-color-primary)":t==yt.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==yt.FINISH?"var(--app-color-success)":t==yt.COMPLETED?"var(--mdc-theme-on-primary)":t==yt.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};xt.styles=o`
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
  `,bt([st({type:String}),vt("design:type",String)],xt.prototype,"icon",void 0),bt([st({type:String}),vt("design:type",String)],xt.prototype,"primaryText",void 0),bt([st({type:Number}),vt("design:type",Object)],xt.prototype,"state",void 0),bt([st({type:Boolean}),vt("design:type",Boolean)],xt.prototype,"isLast",void 0),xt=bt([ot("nidoca-wizard-step")],xt);var wt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let _t=class extends Q{render(){return D`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements();let n=0;for(let t=0;t<i.length;t++){const e=i[t];e instanceof xt&&(e.index=t,e.state==yt.CURRENT&&(n=t),e.index==i.length-1&&(e.isLast=!0))}this.changeState(n)}stepClicked(t){const e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){const e=this.wizardSlot.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];n instanceof xt&&void 0!==n.index&&(n.index<t?n.state=yt.COMPLETED:n.index==t?n.state=yt.CURRENT:n.state=yt.OPEN)}}}};_t.styles=o``,wt([lt("#wizardSlot"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],_t.prototype,"wizardSlot",void 0),_t=wt([ot("nidoca-wizard")],_t);var kt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let St=class extends Q{constructor(){super(...arguments),this.clickable=!0}render(){return D`
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
  `,Rt([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ot.prototype,"code",void 0),Ot=Rt([ot("nidoca-code")],Ot);var Et=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Pt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $t=class extends Q{constructor(){super(),this.show=!1,addEventListener("click",(t=>{var e;const i=null===(e=this.associatedElement)||void 0===e?void 0:e.getBoundingClientRect();i&&(i.top>t.clientY||i.right<t.clientX||i.left>t.clientX||i.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?D`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:D``}calculatePositionStyle(t){let e="";if(t){const i=t.getBoundingClientRect();i.right>window.innerWidth/2?e+=`right:${window.innerWidth-i.right}px;`:e+=`left:${i.left}px;`,i.top>window.innerHeight/2?e+=`bottom:${i.height+window.innerHeight-i.top}px;`:e+=`top:${i.bottom}px;`}return e}};$t.styles=o`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,Et([st({type:Boolean}),Pt("design:type",Boolean)],$t.prototype,"show",void 0),Et([st({type:Object}),Pt("design:type",Object)],$t.prototype,"associatedElement",void 0),$t=Et([ot("nidoca-elevation"),Pt("design:paramtypes",[])],$t);var Tt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Mt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class At{}At.PROGRESS="PROGRESS",At.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let Dt=class extends Q{constructor(){super(...arguments),this.progressType=At.PROGRESS}render(){return D` <style>
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

      <progress class="${this.progressType}"></progress>`}};Dt.styles=o``,Tt([st({type:it,converter:String}),Mt("design:type",Object)],Dt.prototype,"theme",void 0),Tt([st({type:At,converter:String}),Mt("design:type",String)],Dt.prototype,"progressType",void 0),Dt=Tt([ot("nidoca-progress")],Dt);var Ct,jt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},It=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.CONTAINED="CONTAINED",t.OUTLINED="OUTLINED",t.TEXT="TEXT"}(Ct||(Ct={}));let Lt=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.buttonType=Ct.CONTAINED,this.leadingIcon="",this.text=""}render(){return D`
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
  `,jt([st({type:it,converter:String}),It("design:type",Object)],Lt.prototype,"theme",void 0),jt([st({type:Ct,converter:String}),It("design:type",String)],Lt.prototype,"buttonType",void 0),jt([st({type:String}),It("design:type",String)],Lt.prototype,"leadingIcon",void 0),jt([st({type:String}),It("design:type",String)],Lt.prototype,"text",void 0),Lt=jt([ot("nidoca-button")],Lt);class Nt extends Q{}var zt=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Bt=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Wt=class extends Q{constructor(){super(...arguments),this.autocomplete=!0}render(){return D`
            <form autocomplete="${this.autocomplete?"on":"off"}">
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
  `,zt([st({type:Boolean}),Bt("design:type",Boolean)],Wt.prototype,"autocomplete",void 0),zt([lt("#slotElement"),Bt("design:type",Object)],Wt.prototype,"slotElement",void 0),Wt=zt([ot("nidoca-form")],Wt);const Ft=t=>(...e)=>({_$litDirective$:t,values:e});class Ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const{H:Vt}=q,Ht=()=>document.createComment(""),Kt=(t,e,i)=>{var n;const o=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=o.insertBefore(Ht(),r),n=o.insertBefore(Ht(),r);i=new Vt(e,n,t,t.options)}else{const e=i._$AB.nextSibling,s=i._$AM,a=s!==t;if(a){let e;null===(n=i._$AQ)||void 0===n||n.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==s._$AU&&i._$AP(e)}if(e!==r||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;o.insertBefore(t,r),t=e}}}return i},Yt=(t,e,i=t)=>(t._$AI(e,i),t),Gt={},qt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const n=t._$AB.nextSibling;for(;i!==n;){const t=i.nextSibling;i.remove(),i=t}},Xt=(t,e,i)=>{const n=new Map;for(let o=e;o<=i;o++)n.set(t[o],o);return n},Jt=Ft(class extends Ut{constructor(t){if(super(t),2!==t.type)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let n;void 0===i?i=e:void 0!==e&&(n=e);const o=[],r=[];let s=0;for(const e of t)o[s]=n?n(e,s):s,r[s]=i(e,s),s++;return{values:r,keys:o}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,n]){var o;const r=t._$AH,{values:s,keys:a}=this.dt(e,i,n);if(!Array.isArray(r))return this.at=a,s;const l=null!==(o=this.at)&&void 0!==o?o:this.at=[],c=[];let d,h,p=0,u=r.length-1,f=0,g=s.length-1;for(;p<=u&&f<=g;)if(null===r[p])p++;else if(null===r[u])u--;else if(l[p]===a[f])c[f]=Yt(r[p],s[f]),p++,f++;else if(l[u]===a[g])c[g]=Yt(r[u],s[g]),u--,g--;else if(l[p]===a[g])c[g]=Yt(r[p],s[g]),Kt(t,c[g+1],r[p]),p++,g--;else if(l[u]===a[f])c[f]=Yt(r[u],s[f]),Kt(t,r[p],r[u]),u--,f++;else if(void 0===d&&(d=Xt(a,f,g),h=Xt(l,p,u)),d.has(l[p]))if(d.has(l[u])){const e=h.get(a[f]),i=void 0!==e?r[e]:null;if(null===i){const e=Kt(t,r[p]);Yt(e,s[f]),c[f]=e}else c[f]=Yt(i,s[f]),Kt(t,r[p],i),r[e]=null;f++}else qt(r[u]),u--;else qt(r[p]),p++;for(;f<=g;){const e=Kt(t,c[g+1]);Yt(e,s[f]),c[f++]=e}for(;p<=u;){const t=r[p++];null!==t&&qt(t)}return this.at=a,((t,e=Gt)=>{t._$AH=e})(t,c),C}}),Zt={},Qt=Ft(class extends Ut{constructor(){super(...arguments),this.nt=Zt}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.nt)&&this.nt.length===e.length&&e.every(((t,e)=>t===this.nt[e])))return C}else if(this.nt===e)return C;return this.nt=Array.isArray(e)?Array.from(e):e,this.render(e,i)}});var te=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ee=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ie=class extends Nt{constructor(){super(...arguments),this.theme=it.SURFACE,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return D`
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
                            `:D``}`}getOutputData(){var t;const e=null===(t=this.inputElement)||void 0===t?void 0:t.value;return{key:this.name,value:null==e?void 0:e.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};ae.styles=o`
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
  `,ge([st({type:String}),me("design:type",String)],ye.prototype,"name",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"label",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"infoText",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"errorText",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"warningText",void 0),ge([st({type:Boolean}),me("design:type",Boolean)],ye.prototype,"required",void 0),ge([st({type:Boolean}),me("design:type",Boolean)],ye.prototype,"disabled",void 0),ge([st({type:Boolean}),me("design:type",Boolean)],ye.prototype,"checked",void 0),ge([st({type:String}),me("design:type",String)],ye.prototype,"theme",void 0),ge([lt("#inputElement"),me("design:type",Object)],ye.prototype,"inputElement",void 0),ye=ge([ot("nidoca-form-switch"),me("design:paramtypes",[])],ye);var be=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ve=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let xe=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return D`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};xe.styles=o`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,be([st({type:it,converter:String}),ve("design:type",Object)],xe.prototype,"theme",void 0),be([st({type:String,converter:String}),ve("design:type",String)],xe.prototype,"label",void 0),be([st({type:String,converter:String}),ve("design:type",String)],xe.prototype,"emailLabel",void 0),be([st({type:String,converter:String}),ve("design:type",String)],xe.prototype,"buttonLabel",void 0),be([lt("#form"),ve("design:type",Object)],xe.prototype,"formComponent",void 0),xe=be([ot("nidoca-form-newsletter")],xe);var we=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},_e=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ke=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return D`
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
  `,Se([st({type:it,converter:String}),Re("design:type",String)],Oe.prototype,"theme",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"label",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"oldPasswordLabel",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"newPasswordLabel",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"repeatNewPasswordLabel",void 0),Se([st({type:String,converter:String}),Re("design:type",String)],Oe.prototype,"buttonLabel",void 0),Se([lt("#form"),Re("design:type",Object)],Oe.prototype,"formComponent",void 0),Se([lt("#oldPassword"),Re("design:type",Object)],Oe.prototype,"oldPasswordInputField",void 0),Se([lt("#newPassword"),Re("design:type",Object)],Oe.prototype,"newPasswordInputField",void 0),Se([lt("#repeatNewPassword"),Re("design:type",Object)],Oe.prototype,"repeatNewPasswordInputField",void 0),Se([st(),Re("design:type",String)],Oe.prototype,"errorMessageSamePasswordLabel",void 0),Se([st(),Re("design:type",String)],Oe.prototype,"errorMessagePasswordDiffLabel",void 0),Oe=Se([ot("nidoca-form-change-password")],Oe);var Ee=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Pe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let $e=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return D`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};$e.styles=o`
    :host {
      display: block;
      width:100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,Ee([st({type:it,converter:String}),Pe("design:type",Object)],$e.prototype,"theme",void 0),Ee([st({type:String,converter:String}),Pe("design:type",String)],$e.prototype,"label",void 0),Ee([st({type:String,converter:String}),Pe("design:type",String)],$e.prototype,"emailLabel",void 0),Ee([st({type:String,converter:String}),Pe("design:type",String)],$e.prototype,"passwordLabel",void 0),Ee([st({type:String,converter:String}),Pe("design:type",String)],$e.prototype,"buttonLabel",void 0),Ee([lt("#form"),Pe("design:type",Object)],$e.prototype,"formComponent",void 0),$e=Ee([ot("nidoca-form-register")],$e);var Te=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Me=class extends Q{constructor(){super(...arguments),this.code=""}render(){return D``}};Me.styles=o``,Te([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Me.prototype,"code",void 0),Me=Te([ot("nidoca-upload")],Me);var Ae=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},De=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ce=class extends Q{constructor(){super(),this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return D`
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
  `,je([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ie.prototype,"text",void 0),Ie=je([ot("nidoca-menu-area")],Ie);var Le=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ne=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ze=class extends Q{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1}render(){return D`
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
        `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};ze.styles=o`
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
      
  `,Le([st({type:String}),Ne("design:type",String)],ze.prototype,"text",void 0),Le([st({type:String}),Ne("design:type",String)],ze.prototype,"icon",void 0),Le([st({type:Boolean}),Ne("design:type",Boolean)],ze.prototype,"selected",void 0),ze=Le([ot("nidoca-menu-item")],ze);var Be=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},We=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Fe=class extends Q{constructor(){super(...arguments),this.theme=it.SECONDARY}render(){return D`
            <style>
                :host,
                *,
                ::slotted(*) {
                    color: var(--app-color-${this.theme});
                    background-color: var(--app-color-${this.theme}-background);
                    border-color: var(--app-color-${this.theme}-border);
                }
            </style>
            <slot id="slotElement"></slot>`}firstUpdated(){this.addEventListener("click",(t=>{if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];if(n instanceof ze){const e=n.getBoundingClientRect();e.left<t.x&&e.right>t.x&&(e.top<t.y&&e.bottom>t.y?n.selected=!0:n.selected=!1)}}}}))}};Fe.styles=o`
    :host,
    slot {
      display: block;
    }
    slot {
    }
  `,Be([st({type:it,converter:String}),We("design:type",Object)],Fe.prototype,"theme",void 0),Be([lt("#slotElement"),We("design:type",Object)],Fe.prototype,"slotElement",void 0),Fe=Be([ot("nidoca-menu")],Fe);var Ue=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ve=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let He=class extends Q{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return D`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,i,n,o,r){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(i).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(o).concat(";").concat("bottom:").concat(r).concat(";")}};He.styles=o`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,Ue([st({type:String}),Ve("design:type",String)],He.prototype,"height",void 0),Ue([st({type:String}),Ve("design:type",String)],He.prototype,"width",void 0),Ue([st({type:String}),Ve("design:type",String)],He.prototype,"left",void 0),Ue([st({type:String}),Ve("design:type",String)],He.prototype,"top",void 0),Ue([st({type:String}),Ve("design:type",String)],He.prototype,"right",void 0),Ue([st({type:String}),Ve("design:type",String)],He.prototype,"bottom",void 0),He=Ue([ot("nidoca-layout-floating")],He);var Ke=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Ye=class extends Q{constructor(){super(...arguments),this.theme=it.BACKGROUND}render(){return D`
            ${it.getStyle(this.theme)}
            <slot></slot>
        `}};Ye.styles=o`

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
    
  `,Ke([st({type:it,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Ye.prototype,"theme",void 0),Ye=Ke([ot("nidoca-container")],Ye);var Ge=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},qe=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xe=class extends Q{constructor(){super(),this.hideSidebox=!0,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return D` <style>
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
      ${this.hideSidebox?D``:D` <slot class="sidebox" name="sidebox"></slot>`}`}};Xe.styles=o`
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
  `,Ge([st({type:it,converter:String}),qe("design:type",String)],Xe.prototype,"theme",void 0),Ge([st({type:Boolean,converter:String}),qe("design:type",Boolean)],Xe.prototype,"hideSidebox",void 0),Xe=Ge([ot("nidoca-split-screen"),qe("design:paramtypes",[])],Xe);var Je=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ze=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Qe=class extends Q{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return D`
            <i
                    class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
                    title="${this.primaryText}"
                    @click="${this.clicked}"
            >${this.icon}</i
            >
        `}clicked(){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};Qe.styles=o`
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
    
  `,Je([st({type:String}),Ze("design:type",String)],Qe.prototype,"icon",void 0),Je([st({type:Boolean}),Ze("design:type",Boolean)],Qe.prototype,"clickable",void 0),Je([st({type:Boolean}),Ze("design:type",Boolean)],Qe.prototype,"deactivated",void 0),Je([st({type:String}),Ze("design:type",String)],Qe.prototype,"primaryText",void 0),Qe=Je([ot("nidoca-icon")],Qe);var ti=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ei=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class ii{}ii.NONE="NONE",ii.DEFAULT_SHADOW="DEFAULT_SHADOW",ii.SHADOW_1="SHADOW_1",ii.SHADOW_2="SHADOW_2",ii.SHADOW_3="SHADOW_3";let ni=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.shadowType=ii.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return D`
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
        `}clicked(){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}))}};ni.styles=o`
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
  `,ti([st({type:String}),ei("design:type",String)],ni.prototype,"theme",void 0),ti([st({type:Object}),ei("design:type",ii)],ni.prototype,"shadowType",void 0),ti([st({type:String}),ei("design:type",String)],ni.prototype,"icon",void 0),ti([st({type:Boolean}),ei("design:type",Boolean)],ni.prototype,"clickable",void 0),ti([st({type:Boolean}),ei("design:type",Boolean)],ni.prototype,"deactivated",void 0),ni=ti([ot("nidoca-icon-extended")],ni);var oi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let ri=class extends Q{render(){return D`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(null!=this.rippleContainerElement){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);const e=this.rippleContainerElement.getBoundingClientRect(),i=2*Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${i}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};ri.styles=o`
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
  `,oi([lt("#rippleContainer"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],ri.prototype,"rippleContainerElement",void 0),ri=oi([ot("nidoca-ripple")],ri);var si=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let li=class extends Q{constructor(){super(...arguments),this.src="",this.width="100%",this.height="100%"}render(){return this.src?D`<img width="${this.width}" height="${this.height}" src="${this.src}"/>`:D``}};li.styles=o`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,si([st({type:String}),ai("design:type",String)],li.prototype,"src",void 0),si([st({type:String}),ai("design:type",String)],li.prototype,"width",void 0),si([st({type:String}),ai("design:type",String)],li.prototype,"height",void 0),li=si([ot("nidoca-img")],li);let ci=class extends li{render(){return D`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};ci.styles=o`
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
  `,ci=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-img-round")],ci);var di=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let hi=class extends Q{constructor(){super(...arguments),this.src=""}render(){return D`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};hi.styles=o``,di([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],hi.prototype,"src",void 0),hi=di([ot("nidoca-movie")],hi);var pi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ui=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let fi=class extends Q{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return D`
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
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const t=this.isValid();return t&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),t}};fi.styles=o`
    :host {
      display: block;
      width: 100%;
    }
  `,pi([st({type:it,converter:String}),ui("design:type",Object)],fi.prototype,"theme",void 0),pi([st({type:String}),ui("design:type",String)],fi.prototype,"label",void 0),pi([st({type:String}),ui("design:type",String)],fi.prototype,"placeholder",void 0),pi([st({type:String}),ui("design:type",String)],fi.prototype,"name",void 0),pi([st({type:Number}),ui("design:type",Number)],fi.prototype,"min",void 0),pi([st({type:Number}),ui("design:type",Number)],fi.prototype,"max",void 0),pi([st({type:String}),ui("design:type",String)],fi.prototype,"errorText",void 0),pi([lt("#inputfield"),ui("design:type",Object)],fi.prototype,"inputfield",void 0),fi=pi([ot("nidoca-form-captcha")],fi);var gi,mi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},yi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.BLANK="_blank",t.SELF="_self",t.PARENT="_parent",t.TOP="_top"}(gi||(gi={}));let bi=class extends Q{constructor(){super(...arguments),this.text="",this.href="",this.targetType=gi.SELF}render(){return D`<a href="${this.href}" .target="${this.targetType}">
            <nidoca-text>${this.text}</nidoca-text>
            <slot></slot>
        </a> `}};bi.styles=o`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height:1.5em;
     }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,mi([st({type:String}),yi("design:type",String)],bi.prototype,"text",void 0),mi([st({type:String}),yi("design:type",String)],bi.prototype,"href",void 0),mi([st({type:String}),yi("design:type",String)],bi.prototype,"targetType",void 0),bi=mi([ot("nidoca-link")],bi);var vi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},xi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let wi=class extends Q{constructor(){super(),this.multiSelect=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}update(t){super.update(t),null!=t.get("selectionMode")&&(this.multiSelect||(this.selected=!1))}render(){return D`
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
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let t="";t=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",console.log(t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};wi.styles=o`
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
  `,vi([st({type:it,converter:String}),xi("design:type",Object)],wi.prototype,"theme",void 0),vi([st({type:Boolean}),xi("design:type",Boolean)],wi.prototype,"multiSelect",void 0),vi([st({type:Boolean}),xi("design:type",Boolean)],wi.prototype,"selected",void 0),vi([st({type:String}),xi("design:type",String)],wi.prototype,"primaryText",void 0),vi([st({type:String}),xi("design:type",String)],wi.prototype,"secondaryText",void 0),wi=vi([ot("nidoca-list-item"),xi("design:paramtypes",[])],wi);var _i=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},ki=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Si=class extends Q{constructor(){super(),this.multiSelect=!1,this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"selectionMode"==e&&this.getItems().forEach((t=>{t.multiSelect=this.multiSelect}))}))}render(){return D`
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
    `}getItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];n instanceof wi&&t.push(n)}}return t}getSelectedItems(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];n instanceof wi&&n.selected&&t.push(n)}}return t}getSelectedIndexes(){const t=[];if(null!=this.slotElement){const e=this.slotElement.assignedElements();let i=0;for(let n=0;n<e.length;n++){const o=e[n];o instanceof wi&&(o.selected&&t.push(i),i++)}}return t}selectAll(){this.getItems().forEach((t=>{t.selected=!0}))}unselectAll(){console.log("sdojsdoijsoidjsdioj "+this.getItems().length),this.getItems().forEach((t=>{t.selected=!1}))}};Si.styles=o`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,_i([st({type:it,converter:String}),ki("design:type",Object)],Si.prototype,"theme",void 0),_i([st({type:Boolean}),ki("design:type",Boolean)],Si.prototype,"multiSelect",void 0),_i([lt("#slotElement"),ki("design:type",Object)],Si.prototype,"slotElement",void 0),Si=_i([ot("nidoca-list"),ki("design:paramtypes",[])],Si);var Ri=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Oi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ei=class extends Q{constructor(){super(),this.text="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}render(){return D`
      <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-caption>
    `}};Ei.styles=o`
  :host {
     display:block;
     padding-left: var(--space-2);  
  `,Ri([st({type:it,converter:String}),Oi("design:type",Object)],Ei.prototype,"theme",void 0),Ri([st({type:String}),Oi("design:type",String)],Ei.prototype,"text",void 0),Ei=Ri([ot("nidoca-list-section"),Oi("design:paramtypes",[])],Ei);var Pi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},$i=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ti=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.prominent=!1}render(){return D`
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
  `,Pi([st({type:it,converter:String}),$i("design:type",Object)],Ti.prototype,"theme",void 0),Pi([st({type:Boolean}),$i("design:type",Boolean)],Ti.prototype,"prominent",void 0),Ti=Pi([ot("nidoca-top-app-bar")],Ti);var Mi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ai=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Di=class extends Q{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new Qe],["row 2",new Qe]],this.theme=it.BACKGROUND}render(){return D`
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
    `}};Di.styles=o`
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
  `,Mi([st({type:Array}),Ai("design:type",Array)],Di.prototype,"headers",void 0),Mi([st({type:Array}),Ai("design:type",Array)],Di.prototype,"rows",void 0),Mi([st({type:it,converter:String}),Ai("design:type",String)],Di.prototype,"theme",void 0),Di=Mi([ot("nidoca-table")],Di);var Ci=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let ji=class extends Q{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?D`
            <slot></slot>`:D``}};ji.styles=o`
      :host,slot {
      display:block;
    }
  `,Ci([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],ji.prototype,"selected",void 0),ji=Ci([ot("nidoca-tab-content")],ji);var Ii=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Li=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ni=class extends Q{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=it.SURFACE}render(){return D`
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
        `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ni.styles=o`
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

  `,Ii([st({type:Boolean}),Li("design:type",Boolean)],Ni.prototype,"selected",void 0),Ii([st({type:String}),Li("design:type",String)],Ni.prototype,"text",void 0),Ii([st({type:String}),Li("design:type",String)],Ni.prototype,"theme",void 0),Ni=Ii([ot("nidoca-tab")],Ni);var zi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Bi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Wi=class extends Q{constructor(){super(...arguments),this.theme=it.SURFACE,this.tabIndex=0}render(){return D`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),null!=t.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const t=this.tabSlot.assignedElements(),e=100/t.length,i=t[this.tabIndex];for(let n=0;n<t.length;n++){const o=t[n];o instanceof Ni&&(o.theme=this.theme,o.style.width=String(e).concat("%"),o==i?(o.selected=!0,o.classList.add("SELECTED")):(o.selected=!1,o.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(null!=this.tabContentSlot){const e=this.tabContentSlot.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];n instanceof ji&&(this.tabIndex==t?n.selected=!0:n.selected=!1,t++)}}}tabClicked(t){const e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&null!=this.tabSlot){const e=this.tabSlot.assignedElements();for(let i=0;i<e.length;i++){const n=e[i];if(n instanceof Ni&&n==t){this.tabIndex=i;break}}}}};Wi.styles=o`
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
  `,zi([lt("#tabSlot"),Bi("design:type",Object)],Wi.prototype,"tabSlot",void 0),zi([lt("#tabContentSlot"),Bi("design:type",Object)],Wi.prototype,"tabContentSlot",void 0),zi([st({type:String}),Bi("design:type",String)],Wi.prototype,"theme",void 0),zi([st({type:Number}),Bi("design:type",Number)],Wi.prototype,"tabIndex",void 0),Wi=zi([ot("nidoca-tabs")],Wi);var Fi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ui=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Vi=class extends Q{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(t=>{if(!this.hideLeft&&this.leftElement){console.log("close");const e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}}))}updated(t){super.updated(t)}render(){return D`
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
    
  `,Fi([st({type:Boolean}),Ui("design:type",Boolean)],Vi.prototype,"hideLeft",void 0),Fi([st({type:Boolean}),Ui("design:type",Boolean)],Vi.prototype,"prominent",void 0),Fi([lt("#header"),Ui("design:type",Object)],Vi.prototype,"headerElement",void 0),Fi([lt("#left"),Ui("design:type",Object)],Vi.prototype,"leftElement",void 0),Fi([lt("#content"),Ui("design:type",Object)],Vi.prototype,"contentElement",void 0),Vi=Fi([ot("nidoca-template"),Ui("design:paramtypes",[])],Vi);var Hi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ki=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Yi=class extends Q{firstUpdated(t){super.firstUpdated(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((t=>{this.videoElement&&(this.videoElement.srcObject=t)}))}render(){return D`


            <video id="video" width="320" height="240" autoplay></video>
            <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
            <canvas id="canvas" width="320" height="240"></canvas>




        `}makeFoto(){if(this.canvasElement&&this.videoElement){const t=this.canvasElement.getContext("2d");if(t){t.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let e=this.canvasElement.toDataURL("image/jpeg");console.log(e)}}}};Yi.styles=o`
    
  `,Hi([lt("#video"),Ki("design:type",Object)],Yi.prototype,"videoElement",void 0),Hi([lt("#canvas"),Ki("design:type",Object)],Yi.prototype,"canvasElement",void 0),Hi([lt("#click-photo"),Ki("design:type",Object)],Yi.prototype,"buttonElement",void 0),Yi=Hi([ot("nidoca-video")],Yi);var Gi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},qi=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Xi=class extends Q{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return D`

            <img style="display: none;" id="img" src="${this.src}"/>


            ${this.canvasElements.map((t=>D`${t}`))}



        `}updated(t){super.updated(t),t.forEach(((t,e)=>{console.debug(`${this.tagName} : property ${String(e)} changed. oldValue: ${t}`),"src"==e&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((t=>{const e=document.createElement("canvas");e.width=t[0],e.height=t[1];let i=e.getContext("2d");i&&this.img&&(this.img.crossOrigin="anonymous",i.drawImage(this.img,0,0,t[0],t[1]),e.toBlob((t=>{}),"image/webp")),this.canvasElements.push(e)})),this.requestUpdate()})}};Xi.styles=o`
    
  `,Gi([st({type:String}),qi("design:type",String)],Xi.prototype,"src",void 0),Gi([lt("#img"),qi("design:type",Object)],Xi.prototype,"img",void 0),Xi=Gi([ot("nidoca-svg-2-webp")],Xi);var Ji=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Zi=class extends Q{constructor(){super(...arguments),this.text=""}render(){return D` <slot id="slotElement">${this.text}</slot>`}};Zi.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `,Ji([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Zi.prototype,"text",void 0),Zi=Ji([ot("nidoca-text")],Zi);let Qi=class extends Zi{render(){return D`
            ${super.render()}`}};Qi.styles=o`
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
  `,Qi=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-button")],Qi);let tn=class extends Zi{};tn.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,tn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-overline")],tn);let en=class extends Zi{render(){return D` ${super.render()}`}};en.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.5em;
      font-weight: 400;
    }
  `,en=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-body")],en);let nn=class extends Zi{};nn.styles=o`
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
    
  `,nn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-caption")],nn);let on=class extends nn{constructor(){super(),this.style.color="red"}};on=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-error"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],on);let rn=class extends nn{constructor(){super(),this.style.color="green"}};rn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-success"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],rn);let sn=class extends nn{constructor(){super(),this.style.color="yellow"}};sn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-warning"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],sn);let an=class extends nn{constructor(){super(),this.style.color="blue"}};an=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-info"),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[])],an);let ln=class extends Zi{};ln.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.0em;
    }
  `,ln=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h1")],ln);let cn=class extends Zi{};cn.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,cn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h2")],cn);let dn=class extends Zi{};dn.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,dn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h3")],dn);let hn=class extends Zi{};hn.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 115%;
      line-height: 1.5em;
    }
  `,hn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h4")],hn);let pn=class extends Zi{};pn.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,pn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h5")],pn);let un=class extends Zi{};un.styles=o`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 105%;
      line-height: 1.5em;
    }
  `,un=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-text-h6")],un);var fn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},gn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let mn=class extends Q{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=it.SURFACE}render(){return D`
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
        `}clearValue(){this.value=""}valueChanged(){var t;return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(t=this.inputElement)||void 0===t?void 0:t.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}))}};mn.styles=o`
    
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
    
  `,fn([st({type:String}),gn("design:type",String)],mn.prototype,"value",void 0),fn([st({type:String}),gn("design:type",String)],mn.prototype,"placeholder",void 0),fn([st({type:Boolean}),gn("design:type",Boolean)],mn.prototype,"disabled",void 0),fn([lt("#inputElement"),gn("design:type",Object)],mn.prototype,"inputElement",void 0),fn([st({type:it,converter:String}),gn("design:type",String)],mn.prototype,"theme",void 0),mn=fn([ot("nidoca-search-bar")],mn);var yn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},bn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class vn{}vn.CENTER="CENTER",vn.LEFT="LEFT",vn.RIGHT="RIGHT",vn.TOP="TOP",vn.BOTTOM="BOTTOM",vn.SLIDE_CENTER="SLIDE_CENTER",vn.SLIDE_LEFT="SLIDE_LEFT",vn.SLIDE_RIGHT="SLIDE_RIGHT",vn.SLIDE_TOP="SLIDE_TOP",vn.SLIDE_BOTTOM="SLIDE_BOTTOM";let xn=class extends Q{constructor(){super(...arguments),this.transitionType=vn.CENTER,this.duration=.5}render(){return D` <div .class="${this.transitionType}"><slot></slot></div> `}};xn.styles=o`
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
  `,yn([st({type:Object}),bn("design:type",vn)],xn.prototype,"transitionType",void 0),yn([st({type:Number}),bn("design:type",Number)],xn.prototype,"duration",void 0),xn=yn([ot("nidoca-transition")],xn);var wn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let _n=class extends Q{constructor(){super(...arguments),this.show=!1}render(){return this.show?D`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${vn.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:D``}};_n.styles=o`
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
  `,wn([st({type:Boolean}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Boolean)],_n.prototype,"show",void 0),_n=wn([ot("nidoca-dialog")],_n);var kn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Sn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Rn=class extends Q{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return D`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};Rn.styles=o``,kn([st({type:Boolean}),Sn("design:type",Boolean)],Rn.prototype,"show",void 0),kn([st({type:String}),Sn("design:type",String)],Rn.prototype,"title",void 0),kn([st({type:String}),Sn("design:type",String)],Rn.prototype,"description",void 0),kn([st({type:String}),Sn("design:type",String)],Rn.prototype,"labelButtonYes",void 0),kn([st({type:String}),Sn("design:type",String)],Rn.prototype,"labelButtonNo",void 0),Rn=kn([ot("nidoca-dialog-decision")],Rn);var On=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},En=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};class Pn{}Pn.ROUND="ROUND",Pn.CLICKABLE="CLICKABLE",Pn.ZOOM_WRAPPED="ZOOM_WRAPPED",Pn.FULL_WIDTH="FULL_WIDTH";let $n=class extends Q{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[Pn.CLICKABLE,Pn.FULL_WIDTH]}render(){return D`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(t){let e="";return t.forEach((t=>{e=e.concat(" ").concat("")})),e}};$n.styles=o`
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
  `,On([st({type:String}),En("design:type",String)],$n.prototype,"src",void 0),On([st({type:String}),En("design:type",String)],$n.prototype,"width",void 0),On([st({type:String}),En("design:type",String)],$n.prototype,"height",void 0),On([st({type:Pn,converter:Array}),En("design:type",Array)],$n.prototype,"richMediaProperties",void 0),$n=On([ot("nidoca-img-roullnd")],$n);var Tn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Mn=class extends Q{constructor(){super(...arguments),this.imgSrc=""}render(){return D`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[Pn.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};Mn.styles=o`
    :host {
      display: block;
    }
  `,Tn([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Mn.prototype,"imgSrc",void 0),Mn=Tn([ot("nidoca-avatar")],Mn);var An=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Dn=class extends Q{constructor(){super(...arguments),this.theme=it.SURFACE}render(){return D`
            <style>
                :host {
                    border-color: var(--app-color-${this.theme}-border);
                }
            </style>
            <slot></slot>
        `}};Dn.styles=o`
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
  `,An([st({type:it,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Dn.prototype,"theme",void 0),Dn=An([ot("nidoca-card")],Dn);let Cn=class extends Q{render(){return D`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements();for(let t=0;t<i.length;t++){const e=i[t].classList;e.contains("flexItem")||e.add("flexItem"),e.contains("flexItemDevice")||e.add("flexItemDevice")}}};Cn.styles=o`
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
  `,Cn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-gallery")],Cn);let jn=class extends Q{render(){return D`<slot></slot>`}print(){const t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};jn.styles=o`
    :host {
      display: none;
    }
  `,jn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-print")],jn);let In=class extends Q{constructor(){super(...arguments),this.flexBasis="auto"}render(){return D`
            <style>
                .item,
                ::slotted(.item) {
                    flex-basis: ${this.flexBasis};
                }
            </style>
            <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
        `}slotChanged(t){const e=t.target,i=e.offsetWidth,n=e.assignedElements(),o=n.length,r=[];let s=0;for(let t=0;t<o;t++){const e=n[t];if(e.setAttribute("class","item"),e instanceof HTMLElement){const t=e.style.width;if(0==t.length)r.push(e);else{const e=t.toUpperCase();s+=e.indexOf("PX")>-1?Number(e.replace("PX","")):Number(e.replace("%",""))/100*i}}}let a=100;s>0&&(a=100-s/i*100),0==a&&(a=100/o),this.flexBasis=String(a/r.length)+"%",this.requestUpdate()}};In.styles=o`
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
  `,In=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-section")],In);var Ln=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Nn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let zn=class extends Q{render(){return D`
            <slot></slot>`}};zn.styles=o`
    
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

  `,zn=Ln([ot("nidoca-dashboard")],zn);let Bn=class extends Q{render(){return D`
            <slot></slot>`}};Bn.styles=o`
    :host {
        display:block;
        width:25%;
    }
    
    @media only screen and (max-width: 1919px) {
        :host {
        width:50%;
        }
    }
    
    `,Bn=Ln([ot("nidoca-dashboard-box-25")],Bn);let Wn=class extends Q{render(){return D`
            <slot></slot>`}};Wn.styles=o`
    :host {
        width:50%;
        display:block;
    }
    @media only screen and (max-width: 1919px) {
        :host {
        width:100%;
        }
    }

    `,Wn=Ln([ot("nidoca-dashboard-box-50")],Wn);let Fn=class extends Q{render(){return D`
            <slot></slot>`}};Fn.styles=o`
    :host {
        width:100%;
        display:block;
    }
    `,Fn=Ln([ot("nidoca-dashboard-box-100")],Fn);let Un=class extends Q{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return D`
            <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
                <nidoca-box>
                    <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
                    <slot></slot>
                </nidoca-box>
            </nidoca-card>
        `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Un.styles=o`
    
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
    
    `,Ln([st({type:Boolean}),Nn("design:type",Boolean)],Un.prototype,"clickable",void 0),Ln([st({type:String}),Nn("design:type",String)],Un.prototype,"title",void 0),Un=Ln([ot("nidoca-dashboard-card")],Un);var Vn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Hn=class extends Q{constructor(){super(...arguments),this.theme=it.TRANSPARENT}render(){return D`
            ${it.getStyle(this.theme)}
            <slot></slot>
        `}};Hn.styles=o`
    :host {
      display: block;
      padding: var(--space-6);
      box-sizing:border-box;
    }
    slot {
    display:block;
      margin:auto;
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
  `,Vn([st({type:it,converter:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],Hn.prototype,"theme",void 0),Hn=Vn([ot("nidoca-box")],Hn);var Kn=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Yn=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Gn=class extends Q{constructor(){super(...arguments),this.overline="",this.title="",this.summary="",this.text=""}render(){return D`
      <div style="display:flex; flex-direction:column;">
        ${this.overline?D` <nidoca-text class="paddingBottom">${this.overline}</nidoca-text> `:D``}
        ${this.title?D` <nidoca-text-h2 class="paddingBottom">${this.title}</nidoca-text-h2> `:D``}
        ${this.summary?D` <nidoca-text-caption class="paddingBottom">${this.summary}</nidoca-text-caption> `:D``}
        ${this.text?D` <nidoca-text class="paddingBottom">${this.text}</nidoca-text>`:D``}
        <slot></slot>
      </div>
    `}};Gn.styles=o`
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

  `,Kn([st({type:String}),Yn("design:type",String)],Gn.prototype,"overline",void 0),Kn([st({type:String}),Yn("design:type",String)],Gn.prototype,"title",void 0),Kn([st({type:String}),Yn("design:type",String)],Gn.prototype,"summary",void 0),Kn([st({type:String}),Yn("design:type",String)],Gn.prototype,"text",void 0),Gn=Kn([ot("nidoca-article")],Gn);class qn{getCurrent(t){if(null==t)return t;const e={};return this.getElements(t).forEach((t=>{const i=t.tagName,n=t.getAttribute("name");if(null==n||null==n)console.warn("input name is empty.");else{const o=t.value;if("INPUT"==i)switch(t.getAttribute("type")){case"number":e[n]=Number(o);break;case"date":case"datetime":e[n]=new Date(o);break;case"text":e[n]=o;break;case"checkbox":e[n]=t.checked;break;default:t.checked?e[n]=t.checked:""==o||isNaN(o)?e[n]=o:e[n]=Number(o)}else"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||(e[n]=o)}})),e}getElements(t){let e=[];if(t){const i=t.tagName;if("INPUT"!=i&&"BUTTON"!=i&&"SELECT"!=i&&"TEXTAREA"!=i||e.push(t),t.children.length>0){const i=null==t?void 0:t.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}if(t.shadowRoot&&t.shadowRoot.children.length>0){const i=t.shadowRoot.children;for(let t=0;t<i.length;t++)e=e.concat(this.getElements(i.item(t)))}}return e}}class Xn{parseDate(t,e){const i=/[^0-9a-z]/gi;let n=0,o=0,r=0,s=0,a=0,l=0,c=0;const d=t.split(i);try{e.split(i).forEach((function(t,e){switch((""+t).charAt(0)){case"y":case"Y":n=parseInt(d[e]);break;case"M":o=parseInt(d[e])-1;break;case"d":r=parseInt(d[e]);break;case"h":case"H":case"k":case"K":s=parseInt(d[e]);break;case"m":a=parseInt(d[e]);break;case"s":l=parseInt(d[e]);break;case"S":c=parseInt(d[e])}}))}catch(t){throw console.log(t),new Error("Invalid date format.")}return new Date(n,o,r,s,a,l,c)}formatDate(t,e){if(null==t)return"";const i={};return i.M=t.getMonth()+1,i.d=t.getDate(),i.h=t.getHours(),i.m=t.getMinutes(),i.s=t.getSeconds(),e=e.replace(/(M+|d+|h+|m+|s+)/g,(function(t){return((t.length>1?"0":"")+i[t.slice(-1)]).slice(-2)})),e.replace(/(y+)/g,(function(e){return t.getFullYear().toString().slice(-e.length)}))}parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let n=0;n<e.length;n++)if(e[n].exec(i)){console.debug("parse date string to date, key=%s, value=%s",t,i),i=new Date(i);break}return i}))}diffDays(t,e){if(null==t||null==t||null==e||null==e)return null;const i=t.getTime();return(e.getTime()-i)/864e5}}var Jn=function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))};class Zn{constructor(t,e,i,n){this.token=t,this.role=e,this.email=i,this.exp=n}getExpireDate(){return new Date(1e3*this.exp)}}class Qn{constructor(t){this.host=t}static searchOr(t,e){let i="";return t.forEach((t=>{console.log(JSON.stringify(t)),t[e]&&(i=0==i.length?"&or=(":i.concat(","),i=i.concat(`${e}.eq.${t[e]}`))})),i.length>0&&(i=i.concat(")")),i}static login(t,e){return Jn(this,void 0,void 0,(function*(){console.log(`login ${t}`);const i=yield fetch(this.HOST.concat("/rpc/login"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({email:t,pass:e})});if(200==i.status){const t=(yield i.json()).token;t&&localStorage.setItem(Qn.token_key,t)}else console.warn("login response status: ",i.status);return 200==i.status}))}static parseJwt(t){const e=t.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map((function(t){return"%"+("00"+t.charCodeAt(0).toString(16)).slice(-2)})).join("")),n=JSON.parse(i);return new Zn(t,n.role,n.email,n.exp)}static getToken(){const t=localStorage.getItem(Qn.token_key);if(t)return this.parseJwt(t)}static persist(t,e){return Jn(this,void 0,void 0,(function*(){const i=this.HOST.concat(t),n=yield this.request(i,"POST","application/json; charset=utf-8",e);return console.log("persist item, value: %s",JSON.stringify(e)),200==n.status?this.parse(yield n.text())[0]:void 0}))}static update(t,e,i){return Jn(this,void 0,void 0,(function*(){const n=this.HOST.concat(t).concat("?id=eq.".concat(e));console.debug("update item value: %s",JSON.stringify(i));const o=yield this.request(n,"PUT","application/json; charset=utf-8",i);return console.log("item updated ? ".concat(String(o.status))),200==o.status}))}static delete(t,e){return Jn(this,void 0,void 0,(function*(){const i=this.HOST.concat(t).concat("?id=eq.").concat(e),n=yield this.request(i,"DELETE","application/json; charset=utf-8",void 0);return console.debug("delete item for id= %s",e),200==n.status}))}static search(t,e){return Jn(this,void 0,void 0,(function*(){const i=this.HOST.concat(t).concat(e),n=yield this.request(i,"GET","application/json; charset=utf-8",void 0);return 200==n.status?this.parse(yield n.text()):void 0}))}static request(t,e,i,n){return Jn(this,void 0,void 0,(function*(){const o={"Accept-Encoding":"*"};o["Content-Type"]=i,o.Prefer="return=representation";const r=this.getToken();r&&(o.Authorization=`Bearer ${r.token}`);const s={headers:o,method:e,body:JSON.stringify(n)},a=yield fetch(t,s);return console.info("response status: ",a.status),a}))}static parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let t=0;t<e.length;t++)if(e[t].exec(i)){i=new Date(i);break}return i}))}static isLoggedIn(){return null!=this.getToken()}static logout(){localStorage.removeItem(this.token_key)}}Qn.token_key="token",Qn.HOST="https://api.nidoca.com";var to,eo=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},io=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.MODEL_SINGLE="MODEL_SINGLE",t.MODEL_MULTI="MODEL_MULTI"}(to||(to={}));class no extends class{constructor(){let t=this.getModel();this.labels=new Map,this.labels.set(to.MODEL_SINGLE,t.constructor.name),this.labels.set(to.MODEL_MULTI,t.constructor.name),Object.keys(t).map((t=>{this.labels.set(t,t.charAt(0).toUpperCase().concat(t.slice(1)))})),this.properties=[],Object.keys(t).map((e=>{const i=typeof t[e];this.properties.push({key:e,type:this.getPrimaryIdKey()==e?"id":"object"==i?t[e]instanceof Date?"date":"object":"boolean"==i?"checkbox":i,required:!1,step:"number"==i?"any":void 0})}))}getText(t){return this.labels.get(t)||""}getPropertie(t){const e=this.getProperties();for(let i=0;i<e.length;i++){const n=e[i];if(n.key==t)return n}}getProperties(){return this.properties}}{delete(t){return Qn.delete(this.getPath(),t[this.getPrimaryIdKey()])}persist(t){return delete t[this.getPrimaryIdKey()],Qn.persist(this.getPath(),t)}update(t){return Qn.update(this.getPath(),t[this.getPrimaryIdKey()],t)}getPrimaryIdKey(){return"id"}getSectionText(t){const e=new Xn,i=this.getSectionKey(),n=this.getPropertie(i);return n?"date"===n.type?e.formatDate(t.ablaufdatum,"dd.MM.yyyy"):t.name.charAt(0):""}newSection(t,e){if(t){const i=this.getSectionKey(),n=this.getPropertie(i);if(n){const o=this.getSectionText(t),r=this.getSectionText(e);return"date"===n.type?e[i].getTime()>t[i].getTime():o.charAt(0)!=r.charAt(0)}}return!1}}let oo=class extends Q{constructor(){super(),this.nidocaDateHelper=new Xn,this.items=[],this.properties=[],this.hideSidebox=!0,this.showDeleteDialog=!1,this.showDuplicateDialog=!1,this.errorMessage="",this.theme=it.prototype.getParentTheme(this)||it.BACKGROUND}updated(t){super.updated(t),t.forEach(((t,e)=>{"controller"==e&&this.controller&&(this.properties=this.controller.getProperties(),this.controller.search("").then((t=>{this.items=t,this.requestUpdate()})))}))}render(){var t,e,i;return D`
      <nidoca-split-screen .hideSidebox="${this.hideSidebox}">
        <div slot="left">
          <nidoca-box>
            <nidoca-text-h2>${null===(t=this.controller)||void 0===t?void 0:t.getText(to.MODEL_SINGLE)}</nidoca-text-h2>
            <nidoca-text-caption
              >${this.items.length} ${null===(e=this.controller)||void 0===e?void 0:e.getText(to.MODEL_MULTI)}
            </nidoca-text-caption>
            <nidoca-search-bar
              style="flex-basis:auto;"
              id="searchbar"
              placeholder="Suche..."
              @nidoca-search-bar-event-value-changed="${t=>{const e=t.detail;this.search(e)}}"
            ></nidoca-search-bar>
          </nidoca-box>
          <nidoca-list selectionMode>
            ${this.items.map(((t,e)=>{var i,n;return D`
                ${0==e||(null===(i=this.controller)||void 0===i?void 0:i.newSection(this.items[e-1],t))?D` <nidoca-list-section>${null===(n=this.controller)||void 0===n?void 0:n.getSectionText(t)} </nidoca-list-section>`:D``}
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
                    <nidoca-text-body slot="left">
                      ${null===(i=this.controller)||void 0===i?void 0:i.getText(to.MODEL_SINGLE)}
                    </nidoca-text-body>
                    <nidoca-icon
                      style="padding-right: var(--space-2);"
                      icon="done"
                      slot="right"
                      title="Speichern"
                      @nidoca-event-icon-clicked="${()=>{var t,e;if(this.errorMessage="",this.editForm&&this.editForm.validate()){const i=(new qn).getCurrent(this.editForm);""==i[this.getPrimaryIdKey()]?(i[this.getPrimaryIdKey()]=null,null===(t=this.controller)||void 0===t||t.persist(i).then((t=>{this.item=void 0,this.hideSidebox=!0,this.updateList(t)}))):null===(e=this.controller)||void 0===e||e.update(i).then((t=>{t?(this.item=void 0,this.hideSidebox=!0,this.updateList(i)):this.errorMessage="Fehler beim Speichern"}))}else this.errorMessage="Das Formular enthält Fehler. Bitte überprüfen Sie den Inhalt"}}"
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
                  ${this.errorMessage?D` <nidoca-text-error>${this.errorMessage}</nidoca-text-error>`:D``}
                </nidoca-box>

                <nidoca-box>
                  <nidoca-form id="editForm">
                    ${this.properties.map((t=>{var e,i,n,o;let r;switch(t.type){case"id":r=D`
                            <nidoca-form-text
                              class="formElement"
                              type="${oe.HIDDEN}"
                              name="${t.key}"
                              value="${this.item[t.key]}"
                            >
                            </nidoca-form-text>
                          `;break;case"any":case"object":case"1:n":r=D``;break;case"date":r=D` <nidoca-form-date
                            class="formElement"
                            name="${t.key}"
                            label="${this.controller?null===(e=this.controller)||void 0===e?void 0:e.getText(t.key):""}"
                            value="${this.item[t.key]?this.nidocaDateHelper.formatDate(this.item[t.key],"yyyy-MM-dd"):""}"
                            ?required="${t.required}"
                          ></nidoca-form-date>`;break;case"checkbox":r=D` <nidoca-form-switch
                            class="formElement"
                            name="${t.key}"
                            label="${this.controller?null===(i=this.controller)||void 0===i?void 0:i.getText(t.key):""}"
                            .checked="${this.item[t.key]}"
                          ></nidoca-form-switch>`;break;case"textarea":r=D` <nidoca-form-textarea
                            class="formElement"
                            type="${t.type}"
                            name="${t.key}"
                            label="${this.controller?null===(n=this.controller)||void 0===n?void 0:n.getText(t.key):""}"
                            value="${this.item[t.key]}"
                            ?required="${t.required}"
                          ></nidoca-form-textarea>`;break;default:r=D` <nidoca-form-text
                            class="formElement"
                            type="text"
                            step="${ne(t.step)}"
                            name="${t.key}"
                            label="${this.controller?null===(o=this.controller)||void 0===o?void 0:o.getText(t.key):""}"
                            value="${this.item[t.key]}"
                            ?required="${t.required}"
                          >
                          </nidoca-form-text>`}return r}))}
                  </nidoca-form>
                  <slot></slot>
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
    `}search(t){var e;null===(e=this.controller)||void 0===e||e.search(t).then((t=>{this.items=t,this.requestUpdate()}))}updateList(t){var e;let i=!0;const n=null===(e=this.controller)||void 0===e?void 0:e.getPrimaryIdKey();n&&(this.items=this.items.map((e=>e[n]==t[n]?(i=!1,t):e)),t[n]&&i&&this.items.push(t))}initItem(t){this.item=t,this.hideSidebox=!1,this.dispatchEvent(new CustomEvent("nidoca-event-generic-crud-new-item",{detail:t,bubbles:!0,composed:!0}))}getPrimaryIdKey(){return this.controller?this.controller.getPrimaryIdKey():"id"}getPrimaryText(t){return this.controller?this.controller.getPrimaryText(t):""}getSecondaryText(t){return this.controller?this.controller.getSecondaryText(t):""}};oo.styles=o`
    .formElement {
      padding-bottom: var(--space-2);
    }
  `,eo([st({type:Object,converter:Object}),io("design:type",Object)],oo.prototype,"controller",void 0),eo([st({type:Object,converter:Object}),io("design:type",Object)],oo.prototype,"item",void 0),eo([st({type:Boolean,converter:String}),io("design:type",Boolean)],oo.prototype,"hideSidebox",void 0),eo([st({type:Boolean,converter:String}),io("design:type",Boolean)],oo.prototype,"showDeleteDialog",void 0),eo([st({type:Boolean,converter:String}),io("design:type",Boolean)],oo.prototype,"showDuplicateDialog",void 0),eo([st({type:it,converter:String}),io("design:type",String)],oo.prototype,"theme",void 0),eo([lt("#searchbar"),io("design:type",Object)],oo.prototype,"searchbar",void 0),eo([lt("#editForm"),io("design:type",Object)],oo.prototype,"editForm",void 0),eo([st({type:String,converter:String}),io("design:type",String)],oo.prototype,"errorMessage",void 0),oo=eo([ot("nidoca-generic-crud"),io("design:paramtypes",[])],oo);var ro=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},so=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ao=class extends Q{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return D`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
        .type="${oe.BODY2}"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `}};ao.styles=o`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,ro([st({type:String}),so("design:type",String)],ao.prototype,"primaryText",void 0),ro([st({type:String}),so("design:type",String)],ao.prototype,"text",void 0),ro([st({type:String}),so("design:type",String)],ao.prototype,"icon",void 0),ao=ro([ot("nidoca-icon-with-description")],ao);var lo=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},co=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ho=class extends Q{constructor(){super(...arguments),this.theme=it.PRIMARY,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return D`
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
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};ho.styles=o`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,lo([st({type:it,converter:String}),co("design:type",Object)],ho.prototype,"theme",void 0),lo([st({type:String,converter:String}),co("design:type",String)],ho.prototype,"label",void 0),lo([st({type:String,converter:String}),co("design:type",String)],ho.prototype,"nameLabel",void 0),lo([st({type:String,converter:String}),co("design:type",String)],ho.prototype,"emailLabel",void 0),lo([st({type:String,converter:String}),co("design:type",String)],ho.prototype,"titleLabel",void 0),lo([st({type:String,converter:String}),co("design:type",String)],ho.prototype,"messageLabel",void 0),lo([st({type:String,converter:String}),co("design:type",String)],ho.prototype,"buttonLabel",void 0),lo([lt("#authenitcate-form"),co("design:type",Object)],ho.prototype,"formComponent",void 0),ho=lo([ot("nidoca-form-contact")],ho);const po="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function uo(t,e,i){const n=i||(t=>Array.prototype.slice.call(t));let o=!1,r=[];return function(...i){r=n(i),o||(o=!0,po.call(window,(()=>{o=!1,t.apply(e,r)})))}}const fo=t=>"start"===t?"left":"end"===t?"right":"center",go=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2;function mo(){}const yo=function(){let t=0;return function(){return t++}}();function bo(t){return null==t}function vo(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function xo(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const wo=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function _o(t,e){return wo(t)?t:e}function ko(t,e){return void 0===t?e:t}const So=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function Ro(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function Oo(t,e,i,n){let o,r,s;if(vo(t))if(r=t.length,n)for(o=r-1;o>=0;o--)e.call(i,t[o],o);else for(o=0;o<r;o++)e.call(i,t[o],o);else if(xo(t))for(s=Object.keys(t),r=s.length,o=0;o<r;o++)e.call(i,t[s[o]],s[o])}function Eo(t,e){let i,n,o,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(o=t[i],r=e[i],o.datasetIndex!==r.datasetIndex||o.index!==r.index)return!1;return!0}function Po(t){if(vo(t))return t.map(Po);if(xo(t)){const e=Object.create(null),i=Object.keys(t),n=i.length;let o=0;for(;o<n;++o)e[i[o]]=Po(t[i[o]]);return e}return t}function $o(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function To(t,e,i,n){if(!$o(t))return;const o=e[t],r=i[t];xo(o)&&xo(r)?Mo(o,r,n):e[t]=Po(r)}function Mo(t,e,i){const n=vo(e)?e:[e],o=n.length;if(!xo(t))return t;const r=(i=i||{}).merger||To;for(let s=0;s<o;++s){if(!xo(e=n[s]))continue;const o=Object.keys(e);for(let n=0,s=o.length;n<s;++n)r(o[n],t,e,i)}return t}function Ao(t,e){return Mo(t,e,{merger:Do})}function Do(t,e,i){if(!$o(t))return;const n=e[t],o=i[t];xo(n)&&xo(o)?Ao(n,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=Po(o))}function Co(t,e){const i=t.indexOf(".",e);return-1===i?t.length:i}function jo(t,e){if(""===e)return t;let i=0,n=Co(e,i);for(;t&&n>i;)t=t[e.substr(i,n-i)],i=n+1,n=Co(e,i);return t}function Io(t){return t.charAt(0).toUpperCase()+t.slice(1)}const Lo=t=>void 0!==t,No=t=>"function"==typeof t,zo=(t,e)=>{if(t.size!==e.size)return!1;for(const i of t)if(!e.has(i))return!1;return!0},Bo=Math.PI,Wo=2*Bo,Fo=Wo+Bo,Uo=Number.POSITIVE_INFINITY,Vo=Bo/180,Ho=Bo/2,Ko=Bo/4,Yo=2*Bo/3,Go=Math.log10,qo=Math.sign;function Xo(t){const e=Math.round(t);t=Zo(t,e,t/1e3)?e:t;const i=Math.pow(10,Math.floor(Go(t))),n=t/i;return(n<=1?1:n<=2?2:n<=5?5:10)*i}function Jo(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Zo(t,e,i){return Math.abs(t-e)<i}function Qo(t,e,i){let n,o,r;for(n=0,o=t.length;n<o;n++)r=t[n][i],isNaN(r)||(e.min=Math.min(e.min,r),e.max=Math.max(e.max,r))}function tr(t){return t*(Bo/180)}function er(t){return t*(180/Bo)}function ir(t){if(!wo(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function nr(t,e){const i=e.x-t.x,n=e.y-t.y,o=Math.sqrt(i*i+n*n);let r=Math.atan2(n,i);return r<-.5*Bo&&(r+=Wo),{angle:r,distance:o}}function or(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function rr(t,e){return(t-e+Fo)%Wo-Bo}function sr(t){return(t%Wo+Wo)%Wo}function ar(t,e,i,n){const o=sr(t),r=sr(e),s=sr(i),a=sr(r-o),l=sr(s-o),c=sr(o-r),d=sr(o-s);return o===r||o===s||n&&r===s||a>l&&c<d}function lr(t,e,i){return Math.max(e,Math.min(i,t))}function cr(t,e,i,n=1e-6){return t>=Math.min(e,i)-n&&t<=Math.max(e,i)+n}const dr=t=>0===t||1===t,hr=(t,e,i)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*Wo/i),pr=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*Wo/i)+1,ur={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Ho),easeOutSine:t=>Math.sin(t*Ho),easeInOutSine:t=>-.5*(Math.cos(Bo*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>dr(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>dr(t)?t:hr(t,.075,.3),easeOutElastic:t=>dr(t)?t:pr(t,.075,.3),easeInOutElastic(t){const e=.1125;return dr(t)?t:t<.5?.5*hr(2*t,e,.45):.5+.5*pr(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-ur.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,i=2.75;return t<1/i?e*t*t:t<2/i?e*(t-=1.5/i)*t+.75:t<2.5/i?e*(t-=2.25/i)*t+.9375:e*(t-=2.625/i)*t+.984375},easeInOutBounce:t=>t<.5?.5*ur.easeInBounce(2*t):.5*ur.easeOutBounce(2*t-1)+.5},fr={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},gr="0123456789ABCDEF",mr=t=>gr[15&t],yr=t=>gr[(240&t)>>4]+gr[15&t],br=t=>(240&t)>>4==(15&t);function vr(t){return t+.5|0}const xr=(t,e,i)=>Math.max(Math.min(t,i),e);function wr(t){return xr(vr(2.55*t),0,255)}function _r(t){return xr(vr(255*t),0,255)}function kr(t){return xr(vr(t/2.55)/100,0,1)}function Sr(t){return xr(vr(100*t),0,100)}const Rr=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,Or=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Er(t,e,i){const n=e*Math.min(i,1-i),o=(e,o=(e+t/30)%12)=>i-n*Math.max(Math.min(o-3,9-o,1),-1);return[o(0),o(8),o(4)]}function Pr(t,e,i){const n=(n,o=(n+t/60)%6)=>i-i*e*Math.max(Math.min(o,4-o,1),0);return[n(5),n(3),n(1)]}function $r(t,e,i){const n=Er(t,1,.5);let o;for(e+i>1&&(o=1/(e+i),e*=o,i*=o),o=0;o<3;o++)n[o]*=1-e-i,n[o]+=e;return n}function Tr(t){const e=t.r/255,i=t.g/255,n=t.b/255,o=Math.max(e,i,n),r=Math.min(e,i,n),s=(o+r)/2;let a,l,c;return o!==r&&(c=o-r,l=s>.5?c/(2-o-r):c/(o+r),a=o===e?(i-n)/c+(i<n?6:0):o===i?(n-e)/c+2:(e-i)/c+4,a=60*a+.5),[0|a,l||0,s]}function Mr(t,e,i,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,n)).map(_r)}function Ar(t,e,i){return Mr(Er,t,e,i)}function Dr(t){return(t%360+360)%360}const Cr={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},jr={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let Ir;function Lr(t,e,i){if(t){let n=Tr(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*i,0===e?360:1)),n=Ar(n),t.r=n[0],t.g=n[1],t.b=n[2]}}function Nr(t,e){return t?Object.assign(e||{},t):t}function zr(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=_r(t[3]))):(e=Nr(t,{r:0,g:0,b:0,a:1})).a=_r(e.a),e}function Br(t){return"r"===t.charAt(0)?function(t){const e=Rr.exec(t);let i,n,o,r=255;if(e){if(e[7]!==i){const t=+e[7];r=255&(e[8]?wr(t):255*t)}return i=+e[1],n=+e[3],o=+e[5],i=255&(e[2]?wr(i):i),n=255&(e[4]?wr(n):n),o=255&(e[6]?wr(o):o),{r:i,g:n,b:o,a:r}}}(t):function(t){const e=Or.exec(t);let i,n=255;if(!e)return;e[5]!==i&&(n=e[6]?wr(+e[5]):_r(+e[5]));const o=Dr(+e[2]),r=+e[3]/100,s=+e[4]/100;return i="hwb"===e[1]?function(t,e,i){return Mr($r,t,e,i)}(o,r,s):"hsv"===e[1]?function(t,e,i){return Mr(Pr,t,e,i)}(o,r,s):Ar(o,r,s),{r:i[0],g:i[1],b:i[2],a:n}}(t)}class Wr{constructor(t){if(t instanceof Wr)return t;const e=typeof t;let i;var n,o,r;"object"===e?i=zr(t):"string"===e&&(r=(n=t).length,"#"===n[0]&&(4===r||5===r?o={r:255&17*fr[n[1]],g:255&17*fr[n[2]],b:255&17*fr[n[3]],a:5===r?17*fr[n[4]]:255}:7!==r&&9!==r||(o={r:fr[n[1]]<<4|fr[n[2]],g:fr[n[3]]<<4|fr[n[4]],b:fr[n[5]]<<4|fr[n[6]],a:9===r?fr[n[7]]<<4|fr[n[8]]:255})),i=o||function(t){Ir||(Ir=function(){const t={},e=Object.keys(jr),i=Object.keys(Cr);let n,o,r,s,a;for(n=0;n<e.length;n++){for(s=a=e[n],o=0;o<i.length;o++)r=i[o],a=a.replace(r,Cr[r]);r=parseInt(jr[s],16),t[a]=[r>>16&255,r>>8&255,255&r]}return t}(),Ir.transparent=[0,0,0,0]);const e=Ir[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}(t)||Br(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Nr(this._rgb);return t&&(t.a=kr(t.a)),t}set rgb(t){this._rgb=zr(t)}rgbString(){return this._valid?function(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${kr(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}(this._rgb):this._rgb}hexString(){return this._valid?function(t){var e=function(t){return br(t.r)&&br(t.g)&&br(t.b)&&br(t.a)}(t)?mr:yr;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):""):t}(this._rgb):this._rgb}hslString(){return this._valid?function(t){if(!t)return;const e=Tr(t),i=e[0],n=Sr(e[1]),o=Sr(e[2]);return t.a<255?`hsla(${i}, ${n}%, ${o}%, ${kr(t.a)})`:`hsl(${i}, ${n}%, ${o}%)`}(this._rgb):this._rgb}mix(t,e){const i=this;if(t){const n=i.rgb,o=t.rgb;let r;const s=e===r?.5:e,a=2*s-1,l=n.a-o.a,c=((a*l==-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,n.r=255&c*n.r+r*o.r+.5,n.g=255&c*n.g+r*o.g+.5,n.b=255&c*n.b+r*o.b+.5,n.a=s*n.a+(1-s)*o.a,i.rgb=n}return i}clone(){return new Wr(this.rgb)}alpha(t){return this._rgb.a=_r(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=vr(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Lr(this._rgb,2,t),this}darken(t){return Lr(this._rgb,2,-t),this}saturate(t){return Lr(this._rgb,1,t),this}desaturate(t){return Lr(this._rgb,1,-t),this}rotate(t){return function(t,e){var i=Tr(t);i[0]=Dr(i[0]+e),i=Ar(i),t.r=i[0],t.g=i[1],t.b=i[2]}(this._rgb,t),this}}function Fr(t){return new Wr(t)}const Ur=t=>t instanceof CanvasGradient||t instanceof CanvasPattern;function Vr(t){return Ur(t)?t:Fr(t)}function Hr(t){return Ur(t)?t:Fr(t).saturate(.5).darken(.1).hexString()}const Kr=Object.create(null),Yr=Object.create(null);function Gr(t,e){if(!e)return t;const i=e.split(".");for(let e=0,n=i.length;e<n;++e){const n=i[e];t=t[n]||(t[n]=Object.create(null))}return t}function qr(t,e,i){return"string"==typeof e?Mo(Gr(t,e),i):Mo(Gr(t,""),e)}var Xr=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>Hr(e.backgroundColor),this.hoverBorderColor=(t,e)=>Hr(e.borderColor),this.hoverColor=(t,e)=>Hr(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return qr(this,t,e)}get(t){return Gr(this,t)}describe(t,e){return qr(Yr,t,e)}override(t,e){return qr(Kr,t,e)}route(t,e,i,n){const o=Gr(this,t),r=Gr(this,i),s="_"+e;Object.defineProperties(o,{[s]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[s],e=r[n];return xo(t)?Object.assign({},e,t):ko(t,e)},set(t){this[s]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Jr(t,e,i,n,o){let r=e[o];return r||(r=e[o]=t.measureText(o).width,i.push(o)),r>n&&(n=r),n}function Zr(t,e,i,n){let o=(n=n||{}).data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(o=n.data={},r=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let s=0;const a=i.length;let l,c,d,h,p;for(l=0;l<a;l++)if(h=i[l],null!=h&&!0!==vo(h))s=Jr(t,o,r,s,h);else if(vo(h))for(c=0,d=h.length;c<d;c++)p=h[c],null==p||vo(p)||(s=Jr(t,o,r,s,p));t.restore();const u=r.length/2;if(u>i.length){for(l=0;l<u;l++)delete o[r[l]];r.splice(0,u)}return s}function Qr(t,e,i){const n=t.currentDevicePixelRatio,o=0!==i?Math.max(i/2,.5):0;return Math.round((e-o)*n)/n+o}function ts(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function es(t,e,i,n){let o,r,s,a,l;const c=e.pointStyle,d=e.rotation,h=e.radius;let p=(d||0)*Vo;if(c&&"object"==typeof c&&(o=c.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(i,n),t.rotate(p),t.drawImage(c,-c.width/2,-c.height/2,c.width,c.height),void t.restore();if(!(isNaN(h)||h<=0)){switch(t.beginPath(),c){default:t.arc(i,n,h,0,Wo),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(p)*h,n-Math.cos(p)*h),p+=Yo,t.lineTo(i+Math.sin(p)*h,n-Math.cos(p)*h),p+=Yo,t.lineTo(i+Math.sin(p)*h,n-Math.cos(p)*h),t.closePath();break;case"rectRounded":l=.516*h,a=h-l,r=Math.cos(p+Ko)*a,s=Math.sin(p+Ko)*a,t.arc(i-r,n-s,l,p-Bo,p-Ho),t.arc(i+s,n-r,l,p-Ho,p),t.arc(i+r,n+s,l,p,p+Ho),t.arc(i-s,n+r,l,p+Ho,p+Bo),t.closePath();break;case"rect":if(!d){a=Math.SQRT1_2*h,t.rect(i-a,n-a,2*a,2*a);break}p+=Ko;case"rectRot":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+s,n-r),t.lineTo(i+r,n+s),t.lineTo(i-s,n+r),t.closePath();break;case"crossRot":p+=Ko;case"cross":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+r,n+s),t.moveTo(i+s,n-r),t.lineTo(i-s,n+r);break;case"star":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+r,n+s),t.moveTo(i+s,n-r),t.lineTo(i-s,n+r),p+=Ko,r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+r,n+s),t.moveTo(i+s,n-r),t.lineTo(i-s,n+r);break;case"line":r=Math.cos(p)*h,s=Math.sin(p)*h,t.moveTo(i-r,n-s),t.lineTo(i+r,n+s);break;case"dash":t.moveTo(i,n),t.lineTo(i+Math.cos(p)*h,n+Math.sin(p)*h)}t.fill(),e.borderWidth>0&&t.stroke()}}function is(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function ns(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function os(t){t.restore()}function rs(t,e,i,n,o){if(!e)return t.lineTo(i.x,i.y);if("middle"===o){const n=(e.x+i.x)/2;t.lineTo(n,e.y),t.lineTo(n,i.y)}else"after"===o!=!!n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function ss(t,e,i,n){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?i.cp2x:i.cp1x,n?i.cp2y:i.cp1y,i.x,i.y)}function as(t,e,i,n,o,r={}){const s=vo(e)?e:[e],a=r.strokeWidth>0&&""!==r.strokeColor;let l,c;for(t.save(),t.font=o.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]),bo(e.rotation)||t.rotate(e.rotation),e.color&&(t.fillStyle=e.color),e.textAlign&&(t.textAlign=e.textAlign),e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,r),l=0;l<s.length;++l)c=s[l],a&&(r.strokeColor&&(t.strokeStyle=r.strokeColor),bo(r.strokeWidth)||(t.lineWidth=r.strokeWidth),t.strokeText(c,i,n,r.maxWidth)),t.fillText(c,i,n,r.maxWidth),ls(t,i,n,c,r),n+=o.lineHeight;t.restore()}function ls(t,e,i,n,o){if(o.strikethrough||o.underline){const r=t.measureText(n),s=e-r.actualBoundingBoxLeft,a=e+r.actualBoundingBoxRight,l=i-r.actualBoundingBoxAscent,c=i+r.actualBoundingBoxDescent,d=o.strikethrough?(l+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(s,d),t.lineTo(a,d),t.stroke()}}function cs(t,e){const{x:i,y:n,w:o,h:r,radius:s}=e;t.arc(i+s.topLeft,n+s.topLeft,s.topLeft,-Ho,Bo,!0),t.lineTo(i,n+r-s.bottomLeft),t.arc(i+s.bottomLeft,n+r-s.bottomLeft,s.bottomLeft,Bo,Ho,!0),t.lineTo(i+o-s.bottomRight,n+r),t.arc(i+o-s.bottomRight,n+r-s.bottomRight,s.bottomRight,Ho,0,!0),t.lineTo(i+o,n+s.topRight),t.arc(i+o-s.topRight,n+s.topRight,s.topRight,0,-Ho,!0),t.lineTo(i+s.topLeft,n)}const ds=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),hs=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function ps(t,e){const i=(""+t).match(ds);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}const us=t=>+t||0;function fs(t,e){const i={},n=xo(e),o=n?Object.keys(e):e,r=xo(t)?n?i=>ko(t[i],t[e[i]]):e=>t[e]:()=>t;for(const t of o)i[t]=us(r(t));return i}function gs(t){return fs(t,{top:"y",right:"x",bottom:"y",left:"x"})}function ms(t){return fs(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ys(t){const e=gs(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function bs(t,e){t=t||{},e=e||Xr.font;let i=ko(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let n=ko(t.style,e.style);n&&!(""+n).match(hs)&&(console.warn('Invalid font style specified: "'+n+'"'),n="");const o={family:ko(t.family,e.family),lineHeight:ps(ko(t.lineHeight,e.lineHeight),i),size:i,style:n,weight:ko(t.weight,e.weight),string:""};return o.string=function(t){return!t||bo(t.size)||bo(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(o),o}function vs(t,e,i,n){let o,r,s,a=!0;for(o=0,r=t.length;o<r;++o)if(s=t[o],void 0!==s&&(void 0!==e&&"function"==typeof s&&(s=s(e),a=!1),void 0!==i&&vo(s)&&(s=s[i%s.length],a=!1),void 0!==s))return n&&!a&&(n.cacheable=!1),s}function xs(t,e){return Object.assign(Object.create(t),e)}function ws(t,e,i){i=i||(i=>t[i]<e);let n,o=t.length-1,r=0;for(;o-r>1;)n=r+o>>1,i(n)?r=n:o=n;return{lo:r,hi:o}}const _s=(t,e,i)=>ws(t,i,(n=>t[n][e]<i)),ks=(t,e,i)=>ws(t,i,(n=>t[n][e]>=i)),Ss=["push","pop","shift","splice","unshift"];function Rs(t,e){const i=t._chartjs;if(!i)return;const n=i.listeners,o=n.indexOf(e);-1!==o&&n.splice(o,1),n.length>0||(Ss.forEach((e=>{delete t[e]})),delete t._chartjs)}function Os(t){const e=new Set;let i,n;for(i=0,n=t.length;i<n;++i)e.add(t[i]);return e.size===n?t:Array.from(e)}function Es(t,e=[""],i=t,n,o=(()=>t[0])){Lo(n)||(n=Ns("_fallback",t));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:n,_getTarget:o,override:o=>Es([o,...t],e,i,n)};return new Proxy(r,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,n)=>As(i,n,(()=>function(t,e,i,n){let o;for(const r of e)if(o=Ns(Ts(r,t),i),Lo(o))return Ms(t,o)?Is(i,n,t,o):o}(n,e,t,i))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>zs(t).includes(e),ownKeys:t=>zs(t),set(t,e,i){const n=t._storage||(t._storage=o());return t[e]=n[e]=i,delete t._keys,!0}})}function Ps(t,e,i,n){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:i,_stack:new Set,_descriptors:$s(t,n),setContext:e=>Ps(t,e,i,n),override:o=>Ps(t.override(o),e,i,n)};return new Proxy(o,{deleteProperty:(e,i)=>(delete e[i],delete t[i],!0),get:(t,e,i)=>As(t,e,(()=>function(t,e,i){const{_proxy:n,_context:o,_subProxy:r,_descriptors:s}=t;let a=n[e];return No(a)&&s.isScriptable(e)&&(a=function(t,e,i,n){const{_proxy:o,_context:r,_subProxy:s,_stack:a}=i;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);return a.add(t),e=e(r,s||n),a.delete(t),Ms(t,e)&&(e=Is(o._scopes,o,t,e)),e}(e,a,t,i)),vo(a)&&a.length&&(a=function(t,e,i,n){const{_proxy:o,_context:r,_subProxy:s,_descriptors:a}=i;if(Lo(r.index)&&n(t))e=e[r.index%e.length];else if(xo(e[0])){const i=e,n=o._scopes.filter((t=>t!==i));e=[];for(const l of i){const i=Is(n,o,t,l);e.push(Ps(i,r,s&&s[t],a))}}return e}(e,a,t,s.isIndexable)),Ms(e,a)&&(a=Ps(a,o,r&&r[e],s)),a}(t,e,i))),getOwnPropertyDescriptor:(e,i)=>e._descriptors.allKeys?Reflect.has(t,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,i),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,i)=>Reflect.has(t,i),ownKeys:()=>Reflect.ownKeys(t),set:(e,i,n)=>(t[i]=n,delete e[i],!0)})}function $s(t,e={scriptable:!0,indexable:!0}){const{_scriptable:i=e.scriptable,_indexable:n=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:i,indexable:n,isScriptable:No(i)?i:()=>i,isIndexable:No(n)?n:()=>n}}const Ts=(t,e)=>t?t+Io(e):e,Ms=(t,e)=>xo(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function As(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const n=i();return t[e]=n,n}function Ds(t,e,i){return No(t)?t(e,i):t}const Cs=(t,e)=>!0===t?e:"string"==typeof t?jo(e,t):void 0;function js(t,e,i,n,o){for(const r of e){const e=Cs(i,r);if(e){t.add(e);const r=Ds(e._fallback,i,o);if(Lo(r)&&r!==i&&r!==n)return r}else if(!1===e&&Lo(n)&&i!==n)return null}return!1}function Is(t,e,i,n){const o=e._rootScopes,r=Ds(e._fallback,i,n),s=[...t,...o],a=new Set;a.add(n);let l=Ls(a,s,i,r||i,n);return null!==l&&(!Lo(r)||r===i||(l=Ls(a,s,r,l,n),null!==l))&&Es(Array.from(a),[""],o,r,(()=>function(t,e,i){const n=t._getTarget();e in n||(n[e]={});const o=n[e];return vo(o)&&xo(i)?i:o}(e,i,n)))}function Ls(t,e,i,n,o){for(;i;)i=js(t,e,i,n,o);return i}function Ns(t,e){for(const i of e){if(!i)continue;const e=i[t];if(Lo(e))return e}}function zs(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const i of t)for(const t of Object.keys(i).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}const Bs=Number.EPSILON||1e-14,Ws=(t,e)=>e<t.length&&!t[e].skip&&t[e],Fs=t=>"x"===t?"y":"x";function Us(t,e,i,n){const o=t.skip?e:t,r=e,s=i.skip?e:i,a=or(r,o),l=or(s,r);let c=a/(a+l),d=l/(a+l);c=isNaN(c)?0:c,d=isNaN(d)?0:d;const h=n*c,p=n*d;return{previous:{x:r.x-h*(s.x-o.x),y:r.y-h*(s.y-o.y)},next:{x:r.x+p*(s.x-o.x),y:r.y+p*(s.y-o.y)}}}function Vs(t,e,i){return Math.max(Math.min(t,i),e)}function Hs(t,e,i,n,o){let r,s,a,l;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)!function(t,e="x"){const i=Fs(e),n=t.length,o=Array(n).fill(0),r=Array(n);let s,a,l,c=Ws(t,0);for(s=0;s<n;++s)if(a=l,l=c,c=Ws(t,s+1),l){if(c){const t=c[e]-l[e];o[s]=0!==t?(c[i]-l[i])/t:0}r[s]=a?c?qo(o[s-1])!==qo(o[s])?0:(o[s-1]+o[s])/2:o[s-1]:o[s]}!function(t,e,i){const n=t.length;let o,r,s,a,l,c=Ws(t,0);for(let d=0;d<n-1;++d)l=c,c=Ws(t,d+1),l&&c&&(Zo(e[d],0,Bs)?i[d]=i[d+1]=0:(o=i[d]/e[d],r=i[d+1]/e[d],a=Math.pow(o,2)+Math.pow(r,2),a<=9||(s=3/Math.sqrt(a),i[d]=o*s*e[d],i[d+1]=r*s*e[d])))}(t,o,r),function(t,e,i="x"){const n=Fs(i),o=t.length;let r,s,a,l=Ws(t,0);for(let c=0;c<o;++c){if(s=a,a=l,l=Ws(t,c+1),!a)continue;const o=a[i],d=a[n];s&&(r=(o-s[i])/3,a[`cp1${i}`]=o-r,a[`cp1${n}`]=d-r*e[c]),l&&(r=(l[i]-o)/3,a[`cp2${i}`]=o+r,a[`cp2${n}`]=d+r*e[c])}}(t,r,e)}(t,o);else{let i=n?t[t.length-1]:t[0];for(r=0,s=t.length;r<s;++r)a=t[r],l=Us(i,a,t[Math.min(r+1,s-(n?0:1))%s],e.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,i=a}e.capBezierPoints&&function(t,e){let i,n,o,r,s,a=is(t[0],e);for(i=0,n=t.length;i<n;++i)s=r,r=a,a=i<n-1&&is(t[i+1],e),r&&(o=t[i],s&&(o.cp1x=Vs(o.cp1x,e.left,e.right),o.cp1y=Vs(o.cp1y,e.top,e.bottom)),a&&(o.cp2x=Vs(o.cp2x,e.left,e.right),o.cp2y=Vs(o.cp2y,e.top,e.bottom)))}(t,i)}function Ks(){return"undefined"!=typeof window&&"undefined"!=typeof document}function Ys(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function Gs(t,e,i){let n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}const qs=t=>window.getComputedStyle(t,null),Xs=["top","right","bottom","left"];function Js(t,e,i){const n={};i=i?"-"+i:"";for(let o=0;o<4;o++){const r=Xs[o];n[r]=parseFloat(t[e+"-"+r+i])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}function Zs(t,e){const{canvas:i,currentDevicePixelRatio:n}=e,o=qs(i),r="border-box"===o.boxSizing,s=Js(o,"padding"),a=Js(o,"border","width"),{x:l,y:c,box:d}=function(t,e){const i=t.native||t,n=i.touches,o=n&&n.length?n[0]:i,{offsetX:r,offsetY:s}=o;let a,l,c=!1;if(((t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot))(r,s,i.target))a=r,l=s;else{const t=e.getBoundingClientRect();a=o.clientX-t.left,l=o.clientY-t.top,c=!0}return{x:a,y:l,box:c}}(t,i),h=s.left+(d&&a.left),p=s.top+(d&&a.top);let{width:u,height:f}=e;return r&&(u-=s.width+a.width,f-=s.height+a.height),{x:Math.round((l-h)/u*i.width/n),y:Math.round((c-p)/f*i.height/n)}}const Qs=t=>Math.round(10*t)/10;function ta(t,e,i){const n=e||1,o=Math.floor(t.height*n),r=Math.floor(t.width*n);t.height=o/n,t.width=r/n;const s=t.canvas;return s.style&&(i||!s.style.height&&!s.style.width)&&(s.style.height=`${t.height}px`,s.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==n||s.height!==o||s.width!==r)&&(t.currentDevicePixelRatio=n,s.height=o,s.width=r,t.ctx.setTransform(n,0,0,n,0,0),!0)}const ea=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function ia(t,e){const i=function(t,e){return qs(t).getPropertyValue(e)}(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function na(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function oa(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:"middle"===n?i<.5?t.y:e.y:"after"===n?i<1?t.y:e.y:i>0?e.y:t.y}}function ra(t,e,i,n){const o={x:t.cp2x,y:t.cp2y},r={x:e.cp1x,y:e.cp1y},s=na(t,o,i),a=na(o,r,i),l=na(r,e,i),c=na(s,a,i),d=na(a,l,i);return na(c,d,i)}const sa=new Map;function aa(t,e,i){return function(t,e){e=e||{};const i=t+JSON.stringify(e);let n=sa.get(i);return n||(n=new Intl.NumberFormat(t,e),sa.set(i,n)),n}(e,i).format(t)}function la(t,e,i){return t?function(t,e){return{x:i=>t+t+e-i,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,i):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function ca(t,e){let i,n;"ltr"!==e&&"rtl"!==e||(i=t.canvas.style,n=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)}function da(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function ha(t){return"angle"===t?{between:ar,compare:rr,normalize:sr}:{between:cr,compare:(t,e)=>t-e,normalize:t=>t}}function pa({start:t,end:e,count:i,loop:n,style:o}){return{start:t%i,end:e%i,loop:n&&(e-t+1)%i==0,style:o}}function ua(t,e,i){if(!i)return[t];const{property:n,start:o,end:r}=i,s=e.length,{compare:a,between:l,normalize:c}=ha(n),{start:d,end:h,loop:p,style:u}=function(t,e,i){const{property:n,start:o,end:r}=i,{between:s,normalize:a}=ha(n),l=e.length;let c,d,{start:h,end:p,loop:u}=t;if(u){for(h+=l,p+=l,c=0,d=l;c<d&&s(a(e[h%l][n]),o,r);++c)h--,p--;h%=l,p%=l}return p<h&&(p+=l),{start:h,end:p,loop:u,style:t.style}}(t,e,i),f=[];let g,m,y,b=!1,v=null;for(let t=d,i=d;t<=h;++t)m=e[t%s],m.skip||(g=c(m[n]),g!==y&&(b=l(g,o,r),null===v&&(b||l(o,y,g)&&0!==a(o,y))&&(v=0===a(g,o)?t:i),null!==v&&(!b||0===a(r,g)||l(r,y,g))&&(f.push(pa({start:v,end:t,loop:p,count:s,style:u})),v=null),i=t,y=g));return null!==v&&f.push(pa({start:v,end:h,loop:p,count:s,style:u})),f}function fa(t,e){const i=[],n=t.segments;for(let o=0;o<n.length;o++){const r=ua(n[o],t.points,e);r.length&&i.push(...r)}return i}function ga(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function ma(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}var ya=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,n){const o=e.listeners[n],r=e.duration;o.forEach((n=>n({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(i-e.start,r)})))}_refresh(){this._request||(this._running=!0,this._request=po.call(window,(()=>{this._update(),this._request=null,this._running&&this._refresh()})))}_update(t=Date.now()){let e=0;this._charts.forEach(((i,n)=>{if(!i.running||!i.items.length)return;const o=i.items;let r,s=o.length-1,a=!1;for(;s>=0;--s)r=o[s],r._active?(r._total>i.duration&&(i.duration=r._total),r.tick(t),a=!0):(o[s]=o[o.length-1],o.pop());a&&(n.draw(),this._notify(n,i,t,"progress")),o.length||(i.running=!1,this._notify(n,i,t,"complete"),i.initial=!1),e+=o.length})),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){const e=this._charts;let i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce(((t,e)=>Math.max(t,e._duration)),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const i=e.items;let n=i.length-1;for(;n>=0;--n)i[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};const ba="transparent",va={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){const n=Vr(t||ba),o=n.valid&&Vr(e||ba);return o&&o.valid?o.mix(n,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class xa{constructor(t,e,i,n){const o=e[i];n=vs([t.to,n,o,t.from]);const r=vs([t.from,o,n]);this._active=!0,this._fn=t.fn||va[t.type||typeof r],this._easing=ur[t.easing]||ur.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);const n=this._target[this._prop],o=i-this._start,r=this._duration-o;this._start=i,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=vs([t.to,e,n,t.from]),this._from=vs([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,i=this._duration,n=this._prop,o=this._from,r=this._loop,s=this._to;let a;if(this._active=o!==s&&(r||e<i),!this._active)return this._target[n]=s,void this._notify(!0);e<0?this._target[n]=o:(a=e/i%2,a=r&&a>1?2-a:a,a=this._easing(Math.min(1,Math.max(0,a))),this._target[n]=this._fn(o,s,a))}wait(){const t=this._promises||(this._promises=[]);return new Promise(((e,i)=>{t.push({res:e,rej:i})}))}_notify(t){const e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}Xr.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const wa=Object.keys(Xr.animation);Xr.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),Xr.set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),Xr.describe("animations",{_fallback:"animation"}),Xr.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class _a{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!xo(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach((i=>{const n=t[i];if(!xo(n))return;const o={};for(const t of wa)o[t]=n[t];(vo(n.properties)&&n.properties||[i]).forEach((t=>{t!==i&&e.has(t)||e.set(t,o)}))}))}_animateOptions(t,e){const i=e.options,n=function(t,e){if(!e)return;let i=t.options;if(i)return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i;t.options=e}(t,i);if(!n)return[];const o=this._createAnimations(n,i);return i.$shared&&function(t,e){const i=[],n=Object.keys(e);for(let e=0;e<n.length;e++){const o=t[n[e]];o&&o.active()&&i.push(o.wait())}return Promise.all(i)}(t.options.$animations,i).then((()=>{t.options=i}),(()=>{})),o}_createAnimations(t,e){const i=this._properties,n=[],o=t.$animations||(t.$animations={}),r=Object.keys(e),s=Date.now();let a;for(a=r.length-1;a>=0;--a){const l=r[a];if("$"===l.charAt(0))continue;if("options"===l){n.push(...this._animateOptions(t,e));continue}const c=e[l];let d=o[l];const h=i.get(l);if(d){if(h&&d.active()){d.update(h,c,s);continue}d.cancel()}h&&h.duration?(o[l]=d=new xa(h,t,l,c),n.push(d)):t[l]=c}return n}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const i=this._createAnimations(t,e);return i.length?(ya.add(this._chart,i),!0):void 0}}function ka(t,e){const i=t&&t.options||{},n=i.reverse,o=void 0===i.min?e:0,r=void 0===i.max?e:0;return{start:n?r:o,end:n?o:r}}function Sa(t,e){const i=[],n=t._getSortedDatasetMetas(e);let o,r;for(o=0,r=n.length;o<r;++o)i.push(n[o].index);return i}function Ra(t,e,i,n={}){const o=t.keys,r="single"===n.mode;let s,a,l,c;if(null!==e){for(s=0,a=o.length;s<a;++s){if(l=+o[s],l===i){if(n.all)continue;break}c=t.values[l],wo(c)&&(r||0===e||qo(e)===qo(c))&&(e+=c)}return e}}function Oa(t,e){const i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function Ea(t,e,i){const n=t[e]||(t[e]={});return n[i]||(n[i]={})}function Pa(t,e,i,n){for(const o of e.getMatchingVisibleMetas(n).reverse()){const e=t[o.index];if(i&&e>0||!i&&e<0)return o.index}return null}function $a(t,e){const{chart:i,_cachedMeta:n}=t,o=i._stacks||(i._stacks={}),{iScale:r,vScale:s,index:a}=n,l=r.axis,c=s.axis,d=function(t,e,i){return`${t.id}.${e.id}.${i.stack||i.type}`}(r,s,n),h=e.length;let p;for(let t=0;t<h;++t){const i=e[t],{[l]:r,[c]:h}=i;p=(i._stacks||(i._stacks={}))[c]=Ea(o,d,r),p[a]=h,p._top=Pa(p,s,!0,n.type),p._bottom=Pa(p,s,!1,n.type)}}function Ta(t,e){const i=t.scales;return Object.keys(i).filter((t=>i[t].axis===e)).shift()}function Ma(t,e){const i=t.controller.index,n=t.vScale&&t.vScale.axis;if(n){e=e||t._parsed;for(const t of e){const e=t._stacks;if(!e||void 0===e[n]||void 0===e[n][i])return;delete e[n][i]}}}const Aa=t=>"reset"===t||"none"===t,Da=(t,e)=>e?t:Object.assign({},t);class Ca{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Oa(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&Ma(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,i=this.getDataset(),n=(t,e,i,n)=>"x"===t?e:"r"===t?n:i,o=e.xAxisID=ko(i.xAxisID,Ta(t,"x")),r=e.yAxisID=ko(i.yAxisID,Ta(t,"y")),s=e.rAxisID=ko(i.rAxisID,Ta(t,"r")),a=e.indexAxis,l=e.iAxisID=n(a,o,r,s),c=e.vAxisID=n(a,r,o,s);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(s),e.iScale=this.getScaleForId(l),e.vScale=this.getScaleForId(c)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Rs(this._data,this),t._stacked&&Ma(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(xo(e))this._data=function(t){const e=Object.keys(t),i=new Array(e.length);let n,o,r;for(n=0,o=e.length;n<o;++n)r=e[n],i[n]={x:r,y:t[r]};return i}(e);else if(i!==e){if(i){Rs(i,this);const t=this._cachedMeta;Ma(t),t._parsed=[]}e&&Object.isExtensible(e)&&(this,(n=e)._chartjs?n._chartjs.listeners.push(this):(Object.defineProperty(n,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[this]}}),Ss.forEach((t=>{const e="_onData"+Io(t),i=n[t];Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value(...t){const o=i.apply(this,t);return n._chartjs.listeners.forEach((i=>{"function"==typeof i[e]&&i[e](...t)})),o}})})))),this._syncList=[],this._data=e}var n}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,i=this.getDataset();let n=!1;this._dataCheck();const o=e._stacked;e._stacked=Oa(e.vScale,e),e.stack!==i.stack&&(n=!0,Ma(e),e.stack=i.stack),this._resyncElements(t),(n||o!==e._stacked)&&$a(this,e._parsed)}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:i,_data:n}=this,{iScale:o,_stacked:r}=i,s=o.axis;let a,l,c,d=0===t&&e===n.length||i._sorted,h=t>0&&i._parsed[t-1];if(!1===this._parsing)i._parsed=n,i._sorted=!0,c=n;else{c=vo(n[t])?this.parseArrayData(i,n,t,e):xo(n[t])?this.parseObjectData(i,n,t,e):this.parsePrimitiveData(i,n,t,e);const o=()=>null===l[s]||h&&l[s]<h[s];for(a=0;a<e;++a)i._parsed[a+t]=l=c[a],d&&(o()&&(d=!1),h=l);i._sorted=d}r&&$a(this,c)}parsePrimitiveData(t,e,i,n){const{iScale:o,vScale:r}=t,s=o.axis,a=r.axis,l=o.getLabels(),c=o===r,d=new Array(n);let h,p,u;for(h=0,p=n;h<p;++h)u=h+i,d[h]={[s]:c||o.parse(l[u],u),[a]:r.parse(e[u],u)};return d}parseArrayData(t,e,i,n){const{xScale:o,yScale:r}=t,s=new Array(n);let a,l,c,d;for(a=0,l=n;a<l;++a)c=a+i,d=e[c],s[a]={x:o.parse(d[0],c),y:r.parse(d[1],c)};return s}parseObjectData(t,e,i,n){const{xScale:o,yScale:r}=t,{xAxisKey:s="x",yAxisKey:a="y"}=this._parsing,l=new Array(n);let c,d,h,p;for(c=0,d=n;c<d;++c)h=c+i,p=e[h],l[c]={x:o.parse(jo(p,s),h),y:r.parse(jo(p,a),h)};return l}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){const n=this.chart,o=this._cachedMeta,r=e[t.axis];return Ra({keys:Sa(n,!0),values:e._stacks[t.axis]},r,o.index,{mode:i})}updateRangeFromParsed(t,e,i,n){const o=i[e.axis];let r=null===o?NaN:o;const s=n&&i._stacks[e.axis];n&&s&&(n.values=s,r=Ra(n,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const i=this._cachedMeta,n=i._parsed,o=i._sorted&&t===i.iScale,r=n.length,s=this._getOtherScale(t),a=((t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:Sa(i,!0),values:null})(e,i,this.chart),l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:c,max:d}=function(t){const{min:e,max:i,minDefined:n,maxDefined:o}=t.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:o?i:Number.POSITIVE_INFINITY}}(s);let h,p;function u(){p=n[h];const e=p[s.axis];return!wo(p[t.axis])||c>e||d<e}for(h=0;h<r&&(u()||(this.updateRangeFromParsed(l,t,p,a),!o));++h);if(o)for(h=r-1;h>=0;--h)if(!u()){this.updateRangeFromParsed(l,t,p,a);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,i=[];let n,o,r;for(n=0,o=e.length;n<o;++n)r=e[n][t.axis],wo(r)&&i.push(r);return i}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,i=e.iScale,n=e.vScale,o=this.getParsed(t);return{label:i?""+i.getLabelForValue(o[i.axis]):"",value:n?""+n.getLabelForValue(o[n.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=function(t){let e,i,n,o;return xo(t)?(e=t.top,i=t.right,n=t.bottom,o=t.left):e=i=n=o=t,{top:e,right:i,bottom:n,left:o,disabled:!1===t}}(ko(this.options.clip,function(t,e,i){if(!1===i)return!1;const n=ka(t,i),o=ka(e,i);return{top:o.end,right:n.end,bottom:o.start,left:n.start}}(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,i=this._cachedMeta,n=i.data||[],o=e.chartArea,r=[],s=this._drawStart||0,a=this._drawCount||n.length-s,l=this.options.drawActiveElementsOnTop;let c;for(i.dataset&&i.dataset.draw(t,o,s,a),c=s;c<s+a;++c){const e=n[c];e.hidden||(e.active&&l?r.push(e):e.draw(t,o))}for(c=0;c<r.length;++c)r[c].draw(t,o)}getStyle(t,e){const i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){const n=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const e=this._cachedMeta.data[t];o=e.$context||(e.$context=function(t,e,i){return xs(t,{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:i,index:e,mode:"default",type:"data"})}(this.getContext(),t,e)),o.parsed=this.getParsed(t),o.raw=n.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=function(t,e){return xs(t,{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}(this.chart.getContext(),this.index)),o.dataset=n,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){const n="active"===e,o=this._cachedDataOpts,r=t+"-"+e,s=o[r],a=this.enableOptionSharing&&Lo(i);if(s)return Da(s,a);const l=this.chart.config,c=l.datasetElementScopeKeys(this._type,t),d=n?[`${t}Hover`,"hover",t,""]:[t,""],h=l.getOptionScopes(this.getDataset(),c),p=Object.keys(Xr.elements[t]),u=l.resolveNamedOptions(h,p,(()=>this.getContext(i,n)),d);return u.$shared&&(u.$shared=a,o[r]=Object.freeze(Da(u,a))),u}_resolveAnimations(t,e,i){const n=this.chart,o=this._cachedDataOpts,r=`animation-${e}`,s=o[r];if(s)return s;let a;if(!1!==n.options.animation){const n=this.chart.config,o=n.datasetAnimationScopeKeys(this._type,e),r=n.getOptionScopes(this.getDataset(),o);a=n.createResolver(r,this.getContext(t,i,e))}const l=new _a(n,a&&a.animations);return a&&a._cacheable&&(o[r]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Aa(t)||this.chart._animationsDisabled}updateElement(t,e,i,n){Aa(n)?Object.assign(t,i):this._resolveAnimations(e,n).update(t,i)}updateSharedOptions(t,e,i){t&&!Aa(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,n){t.active=n;const o=this.getStyle(e,n);this._resolveAnimations(e,i,n).update(t,{options:!n&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,i=this._cachedMeta.data;for(const[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];const n=i.length,o=e.length,r=Math.min(o,n);r&&this.parse(0,r),o>n?this._insertElements(n,o-n,t):o<n&&this._removeElements(o,n-o)}_insertElements(t,e,i=!0){const n=this._cachedMeta,o=n.data,r=t+e;let s;const a=t=>{for(t.length+=e,s=t.length-1;s>=r;s--)t[s]=t[s-e]};for(a(o),s=t;s<r;++s)o[s]=new this.dataElementType;this._parsing&&a(n._parsed),this.parse(t,e),i&&this.updateElements(o,t,e,"reset")}updateElements(t,e,i,n){}_removeElements(t,e){const i=this._cachedMeta;if(this._parsing){const n=i._parsed.splice(t,e);i._stacked&&Ma(i,n)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,i,n]=t;this[e](i,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function ja(t){const e=t.iScale,i=function(t,e){if(!t._cache.$bar){const i=t.getMatchingVisibleMetas(e);let n=[];for(let e=0,o=i.length;e<o;e++)n=n.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=Os(n.sort(((t,e)=>t-e)))}return t._cache.$bar}(e,t.type);let n,o,r,s,a=e._length;const l=()=>{32767!==r&&-32768!==r&&(Lo(s)&&(a=Math.min(a,Math.abs(r-s)||a)),s=r)};for(n=0,o=i.length;n<o;++n)r=e.getPixelForValue(i[n]),l();for(s=void 0,n=0,o=e.ticks.length;n<o;++n)r=e.getPixelForTick(n),l();return a}function Ia(t,e,i,n){return vo(t)?function(t,e,i,n){const o=i.parse(t[0],n),r=i.parse(t[1],n),s=Math.min(o,r),a=Math.max(o,r);let l=s,c=a;Math.abs(s)>Math.abs(a)&&(l=a,c=s),e[i.axis]=c,e._custom={barStart:l,barEnd:c,start:o,end:r,min:s,max:a}}(t,e,i,n):e[i.axis]=i.parse(t,n),e}function La(t,e,i,n){const o=t.iScale,r=t.vScale,s=o.getLabels(),a=o===r,l=[];let c,d,h,p;for(c=i,d=i+n;c<d;++c)p=e[c],h={},h[o.axis]=a||o.parse(s[c],c),l.push(Ia(p,h,r,c));return l}function Na(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function za(t,e,i,n){let o=e.borderSkipped;const r={};if(!o)return void(t.borderSkipped=r);const{start:s,end:a,reverse:l,top:c,bottom:d}=function(t){let e,i,n,o,r;return t.horizontal?(e=t.base>t.x,i="left",n="right"):(e=t.base<t.y,i="bottom",n="top"),e?(o="end",r="start"):(o="start",r="end"),{start:i,end:n,reverse:e,top:o,bottom:r}}(t);"middle"===o&&i&&(t.enableBorderRadius=!0,(i._top||0)===n?o=c:(i._bottom||0)===n?o=d:(r[Ba(d,s,a,l)]=!0,o=c)),r[Ba(o,s,a,l)]=!0,t.borderSkipped=r}function Ba(t,e,i,n){var o,r,s;return n?(s=i,t=Wa(t=(o=t)===(r=e)?s:o===s?r:o,i,e)):t=Wa(t,e,i),t}function Wa(t,e,i){return"start"===t?e:"end"===t?i:t}function Fa(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}Ca.defaults={},Ca.prototype.datasetElementType=null,Ca.prototype.dataElementType=null;class Ua extends Ca{parsePrimitiveData(t,e,i,n){return La(t,e,i,n)}parseArrayData(t,e,i,n){return La(t,e,i,n)}parseObjectData(t,e,i,n){const{iScale:o,vScale:r}=t,{xAxisKey:s="x",yAxisKey:a="y"}=this._parsing,l="x"===o.axis?s:a,c="x"===r.axis?s:a,d=[];let h,p,u,f;for(h=i,p=i+n;h<p;++h)f=e[h],u={},u[o.axis]=o.parse(jo(f,l),h),d.push(Ia(jo(f,c),u,r,h));return d}updateRangeFromParsed(t,e,i,n){super.updateRangeFromParsed(t,e,i,n);const o=i._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:i,vScale:n}=e,o=this.getParsed(t),r=o._custom,s=Na(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(o[n.axis]);return{label:""+i.getLabelForValue(o[i.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize(),this._cachedMeta.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,n){const o="reset"===n,{index:r,_cachedMeta:{vScale:s}}=this,a=s.getBasePixel(),l=s.isHorizontal(),c=this._getRuler(),d=this.resolveDataElementOptions(e,n),h=this.getSharedOptions(d),p=this.includeOptions(n,h);this.updateSharedOptions(h,n,d);for(let d=e;d<e+i;d++){const e=this.getParsed(d),i=o||bo(e[s.axis])?{base:a,head:a}:this._calculateBarValuePixels(d),u=this._calculateBarIndexPixels(d,c),f=(e._stacks||{})[s.axis],g={horizontal:l,base:i.base,enableBorderRadius:!f||Na(e._custom)||r===f._top||r===f._bottom,x:l?i.head:u.center,y:l?u.center:i.head,height:l?u.size:Math.abs(i.size),width:l?Math.abs(i.size):u.size};p&&(g.options=h||this.resolveDataElementOptions(d,t[d].active?"active":n));const m=g.options||t[d].options;za(g,m,f,r),Fa(g,m,c.ratio),this.updateElement(t[d],d,g,n)}}_getStacks(t,e){const i=this._cachedMeta.iScale,n=i.getMatchingVisibleMetas(this._type),o=i.options.stacked,r=n.length,s=[];let a,l;for(a=0;a<r;++a)if(l=n[a],l.controller.options.grouped){if(void 0!==e){const t=l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis];if(bo(t)||isNaN(t))continue}if((!1===o||-1===s.indexOf(l.stack)||void 0===o&&void 0===l.stack)&&s.push(l.stack),l.index===t)break}return s.length||s.push(void 0),s}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){const n=this._getStacks(t,i),o=void 0!==e?n.indexOf(e):-1;return-1===o?n.length-1:o}_getRuler(){const t=this.options,e=this._cachedMeta,i=e.iScale,n=[];let o,r;for(o=0,r=e.data.length;o<r;++o)n.push(i.getPixelForValue(this.getParsed(o)[i.axis],o));const s=t.barThickness;return{min:s||ja(e),pixels:n,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:i},options:{base:n,minBarLength:o}}=this,r=n||0,s=this.getParsed(t),a=s._custom,l=Na(a);let c,d,h=s[e.axis],p=0,u=i?this.applyStack(e,s,i):h;u!==h&&(p=u-h,u=h),l&&(h=a.barStart,u=a.barEnd-a.barStart,0!==h&&qo(h)!==qo(a.barEnd)&&(p=0),p+=h);const f=bo(n)||l?p:n;let g=e.getPixelForValue(f);if(c=this.chart.getDataVisibility(t)?e.getPixelForValue(p+u):g,d=c-g,Math.abs(d)<o&&(d=function(t,e,i){return 0!==t?qo(t):(e.isHorizontal()?1:-1)*(e.min>=i?1:-1)}(d,e,r)*o,h===r&&(g-=d/2),c=g+d),g===e.getPixelForValue(r)){const t=qo(d)*e.getLineWidthForValue(r)/2;g+=t,d-=t}return{size:d,base:g,head:c,center:c+d/2}}_calculateBarIndexPixels(t,e){const i=e.scale,n=this.options,o=n.skipNull,r=ko(n.maxBarThickness,1/0);let s,a;if(e.grouped){const i=o?this._getStackCount(t):e.stackCount,l="flex"===n.barThickness?function(t,e,i,n){const o=e.pixels,r=o[t];let s=t>0?o[t-1]:null,a=t<o.length-1?o[t+1]:null;const l=i.categoryPercentage;null===s&&(s=r-(null===a?e.end-e.start:a-r)),null===a&&(a=r+r-s);const c=r-(r-Math.min(s,a))/2*l;return{chunk:Math.abs(a-s)/2*l/n,ratio:i.barPercentage,start:c}}(t,e,n,i):function(t,e,i,n){const o=i.barThickness;let r,s;return bo(o)?(r=e.min*i.categoryPercentage,s=i.barPercentage):(r=o*n,s=1),{chunk:r/n,ratio:s,start:e.pixels[t]-r/2}}(t,e,n,i),c=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);s=l.start+l.chunk*c+l.chunk/2,a=Math.min(r,l.chunk*l.ratio)}else s=i.getPixelForValue(this.getParsed(t)[i.axis],t),a=Math.min(r,e.min*e.ratio);return{base:s-a/2,head:s+a/2,center:s,size:a}}draw(){const t=this._cachedMeta,e=t.vScale,i=t.data,n=i.length;let o=0;for(;o<n;++o)null!==this.getParsed(o)[e.axis]&&i[o].draw(this._ctx)}}Ua.id="bar",Ua.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},Ua.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class Va extends Ca{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,n){const o=super.parsePrimitiveData(t,e,i,n);for(let t=0;t<o.length;t++)o[t]._custom=this.resolveDataElementOptions(t+i).radius;return o}parseArrayData(t,e,i,n){const o=super.parseArrayData(t,e,i,n);for(let t=0;t<o.length;t++){const n=e[i+t];o[t]._custom=ko(n[2],this.resolveDataElementOptions(t+i).radius)}return o}parseObjectData(t,e,i,n){const o=super.parseObjectData(t,e,i,n);for(let t=0;t<o.length;t++){const n=e[i+t];o[t]._custom=ko(n&&n.r&&+n.r,this.resolveDataElementOptions(t+i).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,{xScale:i,yScale:n}=e,o=this.getParsed(t),r=i.getLabelForValue(o.x),s=n.getLabelForValue(o.y),a=o._custom;return{label:e.label,value:"("+r+", "+s+(a?", "+a:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,n){const o="reset"===n,{iScale:r,vScale:s}=this._cachedMeta,a=this.resolveDataElementOptions(e,n),l=this.getSharedOptions(a),c=this.includeOptions(n,l),d=r.axis,h=s.axis;for(let a=e;a<e+i;a++){const e=t[a],i=!o&&this.getParsed(a),l={},p=l[d]=o?r.getPixelForDecimal(.5):r.getPixelForValue(i[d]),u=l[h]=o?s.getBasePixel():s.getPixelForValue(i[h]);l.skip=isNaN(p)||isNaN(u),c&&(l.options=this.resolveDataElementOptions(a,e.active?"active":n),o&&(l.options.radius=0)),this.updateElement(e,a,l,n)}this.updateSharedOptions(l,n,a)}resolveDataElementOptions(t,e){const i=this.getParsed(t);let n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const o=n.radius;return"active"!==e&&(n.radius=0),n.radius+=ko(i&&i._custom,o),n}}Va.id="bubble",Va.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},Va.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class Ha extends Ca{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const i=this.getDataset().data,n=this._cachedMeta;if(!1===this._parsing)n._parsed=i;else{let o,r,s=t=>+i[t];if(xo(i[t])){const{key:t="value"}=this._parsing;s=e=>+jo(i[e],t)}for(o=t,r=t+e;o<r;++o)n._parsed[o]=s(o)}}_getRotation(){return tr(this.options.rotation-90)}_getCircumference(){return tr(this.options.circumference)}_getRotationExtents(){let t=Wo,e=-Wo;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){const n=this.chart.getDatasetMeta(i).controller,o=n._getRotation(),r=n._getCircumference();t=Math.min(t,o),e=Math.max(e,o+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:i}=e,n=this._cachedMeta,o=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,s=Math.max((Math.min(i.width,i.height)-r)/2,0),a=Math.min((c=s,"string"==typeof(l=this.options.cutout)&&l.endsWith("%")?parseFloat(l)/100:l/c),1);var l,c;const d=this._getRingWeight(this.index),{circumference:h,rotation:p}=this._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:g,offsetY:m}=function(t,e,i){let n=1,o=1,r=0,s=0;if(e<Wo){const a=t,l=a+e,c=Math.cos(a),d=Math.sin(a),h=Math.cos(l),p=Math.sin(l),u=(t,e,n)=>ar(t,a,l,!0)?1:Math.max(e,e*i,n,n*i),f=(t,e,n)=>ar(t,a,l,!0)?-1:Math.min(e,e*i,n,n*i),g=u(0,c,h),m=u(Ho,d,p),y=f(Bo,c,h),b=f(Bo+Ho,d,p);n=(g-y)/2,o=(m-b)/2,r=-(g+y)/2,s=-(m+b)/2}return{ratioX:n,ratioY:o,offsetX:r,offsetY:s}}(p,h,a),y=(i.width-r)/u,b=(i.height-r)/f,v=Math.max(Math.min(y,b)/2,0),x=So(this.options.radius,v),w=(x-Math.max(x*a,0))/this._getVisibleDatasetWeightTotal();this.offsetX=g*x,this.offsetY=m*x,n.total=this.calculateTotal(),this.outerRadius=x-w*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-w*d,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){const i=this.options,n=this._cachedMeta,o=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===n._parsed[t]||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*o/Wo)}updateElements(t,e,i,n){const o="reset"===n,r=this.chart,s=r.chartArea,a=r.options.animation,l=(s.left+s.right)/2,c=(s.top+s.bottom)/2,d=o&&a.animateScale,h=d?0:this.innerRadius,p=d?0:this.outerRadius,u=this.resolveDataElementOptions(e,n),f=this.getSharedOptions(u),g=this.includeOptions(n,f);let m,y=this._getRotation();for(m=0;m<e;++m)y+=this._circumference(m,o);for(m=e;m<e+i;++m){const e=this._circumference(m,o),i=t[m],r={x:l+this.offsetX,y:c+this.offsetY,startAngle:y,endAngle:y+e,circumference:e,outerRadius:p,innerRadius:h};g&&(r.options=f||this.resolveDataElementOptions(m,i.active?"active":n)),y+=e,this.updateElement(i,m,r,n)}this.updateSharedOptions(f,n,u)}calculateTotal(){const t=this._cachedMeta,e=t.data;let i,n=0;for(i=0;i<e.length;i++){const o=t._parsed[i];null===o||isNaN(o)||!this.chart.getDataVisibility(i)||e[i].hidden||(n+=Math.abs(o))}return n}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?Wo*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=aa(e._parsed[t],i.options.locale);return{label:n[t]||"",value:o}}getMaxBorderWidth(t){let e=0;const i=this.chart;let n,o,r,s,a;if(!t)for(n=0,o=i.data.datasets.length;n<o;++n)if(i.isDatasetVisible(n)){r=i.getDatasetMeta(n),t=r.data,s=r.controller;break}if(!t)return 0;for(n=0,o=t.length;n<o;++n)a=s.resolveDataElementOptions(n),"inner"!==a.borderAlign&&(e=Math.max(e,a.borderWidth||0,a.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let i=0,n=t.length;i<n;++i){const t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max(ko(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}Ha.id="doughnut",Ha.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},Ha.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},Ha.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,n)=>{const o=t.getDatasetMeta(0).controller.getStyle(n);return{text:e,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(n),index:n}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label;const i=": "+t.formattedValue;return vo(e)?(e=e.slice(),e[0]+=i):e+=i,e}}}}};class Ka extends Ca{initialize(){this.enableOptionSharing=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:i,data:n=[],_dataset:o}=e,r=this.chart._animationsDisabled;let{start:s,count:a}=function(t,e,i){const n=e.length;let o=0,r=n;if(t._sorted){const{iScale:s,_parsed:a}=t,l=s.axis,{min:c,max:d,minDefined:h,maxDefined:p}=s.getUserBounds();h&&(o=lr(Math.min(_s(a,s.axis,c).lo,i?n:_s(e,l,s.getPixelForValue(c)).lo),0,n-1)),r=p?lr(Math.max(_s(a,s.axis,d).hi+1,i?0:_s(e,l,s.getPixelForValue(d)).hi+1),o,n)-o:n-o}return{start:o,count:r}}(e,n,r);this._drawStart=s,this._drawCount=a,function(t){const{xScale:e,yScale:i,_scaleRanges:n}=t,o={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!n)return t._scaleRanges=o,!0;const r=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==i.min||n.ymax!==i.max;return Object.assign(n,o),r}(e)&&(s=0,a=n.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!o._decimated,i.points=n;const l=this.resolveDatasetElementOptions(t);this.options.showLine||(l.borderWidth=0),l.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:l},t),this.updateElements(n,s,a,t)}updateElements(t,e,i,n){const o="reset"===n,{iScale:r,vScale:s,_stacked:a,_dataset:l}=this._cachedMeta,c=this.resolveDataElementOptions(e,n),d=this.getSharedOptions(c),h=this.includeOptions(n,d),p=r.axis,u=s.axis,{spanGaps:f,segment:g}=this.options,m=Jo(f)?f:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||o||"none"===n;let b=e>0&&this.getParsed(e-1);for(let c=e;c<e+i;++c){const e=t[c],i=this.getParsed(c),f=y?e:{},v=bo(i[u]),x=f[p]=r.getPixelForValue(i[p],c),w=f[u]=o||v?s.getBasePixel():s.getPixelForValue(a?this.applyStack(s,i,a):i[u],c);f.skip=isNaN(x)||isNaN(w)||v,f.stop=c>0&&i[p]-b[p]>m,g&&(f.parsed=i,f.raw=l.data[c]),h&&(f.options=d||this.resolveDataElementOptions(c,e.active?"active":n)),y||this.updateElement(e,c,f,n),b=i}this.updateSharedOptions(d,n,c)}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return i;const o=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,o,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}Ka.id="line",Ka.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},Ka.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class Ya extends Ca{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,i=this.chart,n=i.data.labels||[],o=aa(e._parsed[t].r,i.options.locale);return{label:n[t]||"",value:o}}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}_updateRadius(){const t=this.chart,e=t.chartArea,i=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(n/2,0),r=(o-Math.max(i.cutoutPercentage?o/100*i.cutoutPercentage:1,0))/t.getVisibleDatasetCount();this.outerRadius=o-r*this.index,this.innerRadius=this.outerRadius-r}updateElements(t,e,i,n){const o="reset"===n,r=this.chart,s=this.getDataset(),a=r.options.animation,l=this._cachedMeta.rScale,c=l.xCenter,d=l.yCenter,h=l.getIndexAngle(0)-.5*Bo;let p,u=h;const f=360/this.countVisibleElements();for(p=0;p<e;++p)u+=this._computeAngle(p,n,f);for(p=e;p<e+i;p++){const e=t[p];let i=u,g=u+this._computeAngle(p,n,f),m=r.getDataVisibility(p)?l.getDistanceFromCenterForValue(s.data[p]):0;u=g,o&&(a.animateScale&&(m=0),a.animateRotate&&(i=g=h));const y={x:c,y:d,innerRadius:0,outerRadius:m,startAngle:i,endAngle:g,options:this.resolveDataElementOptions(p,e.active?"active":n)};this.updateElement(e,p,y,n)}}countVisibleElements(){const t=this.getDataset(),e=this._cachedMeta;let i=0;return e.data.forEach(((e,n)=>{!isNaN(t.data[n])&&this.chart.getDataVisibility(n)&&i++})),i}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?tr(this.resolveDataElementOptions(t,e).angle||i):0}}Ya.id="polarArea",Ya.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},Ya.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:i}}=t.legend.options;return e.labels.map(((e,n)=>{const o=t.getDatasetMeta(0).controller.getStyle(n);return{text:e,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,lineWidth:o.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(n),index:n}}))}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class Ga extends Ha{}Ga.id="pie",Ga.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class qa extends Ca{getLabelAndValue(t){const e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}update(t){const e=this._cachedMeta,i=e.dataset,n=e.data||[],o=e.iScale.getLabels();if(i.points=n,"resize"!==t){const e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);const r={_loop:!0,_fullLoop:o.length===n.length,options:e};this.updateElement(i,void 0,r,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,i,n){const o=this.getDataset(),r=this._cachedMeta.rScale,s="reset"===n;for(let a=e;a<e+i;a++){const e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":n),l=r.getPointPositionForValue(a,o.data[a]),c=s?r.xCenter:l.x,d=s?r.yCenter:l.y,h={x:c,y:d,angle:l.angle,skip:isNaN(c)||isNaN(d),options:i};this.updateElement(e,a,h,n)}}}qa.id="radar",qa.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},qa.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Xa extends Ka{}Xa.id="scatter",Xa.defaults={showLine:!1,fill:!1},Xa.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Ja=Object.freeze({__proto__:null,BarController:Ua,BubbleController:Va,DoughnutController:Ha,LineController:Ka,PolarAreaController:Ya,PieController:Ga,RadarController:qa,ScatterController:Xa});function Za(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Qa{constructor(t){this.options=t||{}}formats(){return Za()}parse(t,e){return Za()}format(t,e){return Za()}add(t,e,i){return Za()}diff(t,e,i){return Za()}startOf(t,e,i){return Za()}endOf(t,e){return Za()}}Qa.override=function(t){Object.assign(Qa.prototype,t)};var tl={_date:Qa};function el(t,e){return"native"in t?{x:t.x,y:t.y}:Zs(t,e)}function il(t,e,i,n){const{controller:o,data:r,_sorted:s}=t,a=o._cachedMeta.iScale;if(a&&e===a.axis&&"r"!==e&&s&&r.length){const t=a._reversePixels?ks:_s;if(!n)return t(r,e,i);if(o._sharedOptions){const n=r[0],o="function"==typeof n.getRange&&n.getRange(e);if(o){const n=t(r,e,i-o),s=t(r,e,i+o);return{lo:n.lo,hi:s.hi}}}}return{lo:0,hi:r.length-1}}function nl(t,e,i,n,o){const r=t.getSortedVisibleDatasetMetas(),s=i[e];for(let t=0,i=r.length;t<i;++t){const{index:i,data:a}=r[t],{lo:l,hi:c}=il(r[t],e,s,o);for(let t=l;t<=c;++t){const e=a[t];e.skip||n(e,i,t)}}}function ol(t,e,i,n){const o=[];return is(e,t.chartArea,t._minPadding)?(nl(t,i,e,(function(t,i,r){t.inRange(e.x,e.y,n)&&o.push({element:t,datasetIndex:i,index:r})}),!0),o):o}function rl(t,e,i,n,o){return is(e,t.chartArea,t._minPadding)?"r"!==i||n?function(t,e,i,n,o){let r=[];const s=function(t){const e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){const o=e?Math.abs(t.x-n.x):0,r=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}}(i);let a=Number.POSITIVE_INFINITY;return nl(t,i,e,(function(i,l,c){const d=i.inRange(e.x,e.y,o);if(n&&!d)return;const h=i.getCenterPoint(o);if(!is(h,t.chartArea,t._minPadding)&&!d)return;const p=s(e,h);p<a?(r=[{element:i,datasetIndex:l,index:c}],a=p):p===a&&r.push({element:i,datasetIndex:l,index:c})})),r}(t,e,i,n,o):function(t,e,i,n){let o=[];return nl(t,i,e,(function(t,i,r){const{startAngle:s,endAngle:a}=t.getProps(["startAngle","endAngle"],n),{angle:l}=nr(t,{x:e.x,y:e.y});ar(l,s,a)&&o.push({element:t,datasetIndex:i,index:r})})),o}(t,e,i,o):[]}function sl(t,e,i,n){const o=el(e,t),r=[],s=i.axis,a="x"===s?"inXRange":"inYRange";let l=!1;return function(t,e){const i=t.getSortedVisibleDatasetMetas();let n,o,r;for(let t=0,s=i.length;t<s;++t){({index:n,data:o}=i[t]);for(let t=0,i=o.length;t<i;++t)r=o[t],r.skip||e(r,n,t)}}(t,((t,e,i)=>{t[a](o[s],n)&&r.push({element:t,datasetIndex:e,index:i}),t.inRange(o.x,o.y,n)&&(l=!0)})),i.intersect&&!l?[]:r}var al={modes:{index(t,e,i,n){const o=el(e,t),r=i.axis||"x",s=i.intersect?ol(t,o,r,n):rl(t,o,r,!1,n),a=[];return s.length?(t.getSortedVisibleDatasetMetas().forEach((t=>{const e=s[0].index,i=t.data[e];i&&!i.skip&&a.push({element:i,datasetIndex:t.index,index:e})})),a):[]},dataset(t,e,i,n){const o=el(e,t),r=i.axis||"xy";let s=i.intersect?ol(t,o,r,n):rl(t,o,r,!1,n);if(s.length>0){const e=s[0].datasetIndex,i=t.getDatasetMeta(e).data;s=[];for(let t=0;t<i.length;++t)s.push({element:i[t],datasetIndex:e,index:t})}return s},point:(t,e,i,n)=>ol(t,el(e,t),i.axis||"xy",n),nearest:(t,e,i,n)=>rl(t,el(e,t),i.axis||"xy",i.intersect,n),x:(t,e,i,n)=>sl(t,e,{axis:"x",intersect:i.intersect},n),y:(t,e,i,n)=>sl(t,e,{axis:"y",intersect:i.intersect},n)}};const ll=["left","top","right","bottom"];function cl(t,e){return t.filter((t=>t.pos===e))}function dl(t,e){return t.filter((t=>-1===ll.indexOf(t.pos)&&t.box.axis===e))}function hl(t,e){return t.sort(((t,i)=>{const n=e?i:t,o=e?t:i;return n.weight===o.weight?n.index-o.index:n.weight-o.weight}))}function pl(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function ul(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function fl(t,e,i,n){const{pos:o,box:r}=i,s=t.maxPadding;if(!xo(o)){i.size&&(t[o]-=i.size);const e=n[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?r.height:r.width),i.size=e.size/e.count,t[o]+=i.size}r.getPadding&&ul(s,r.getPadding());const a=Math.max(0,e.outerWidth-pl(s,t,"left","right")),l=Math.max(0,e.outerHeight-pl(s,t,"top","bottom")),c=a!==t.w,d=l!==t.h;return t.w=a,t.h=l,i.horizontal?{same:c,other:d}:{same:d,other:c}}function gl(t,e){const i=e.maxPadding;return function(t){const n={left:0,top:0,right:0,bottom:0};return t.forEach((t=>{n[t]=Math.max(e[t],i[t])})),n}(t?["left","right"]:["top","bottom"])}function ml(t,e,i,n){const o=[];let r,s,a,l,c,d;for(r=0,s=t.length,c=0;r<s;++r){a=t[r],l=a.box,l.update(a.width||e.w,a.height||e.h,gl(a.horizontal,e));const{same:s,other:h}=fl(e,i,a,n);c|=s&&o.length,d=d||h,l.fullSize||o.push(a)}return c&&ml(o,e,i,n)||d}function yl(t,e,i,n,o){t.top=i,t.left=e,t.right=e+n,t.bottom=i+o,t.width=n,t.height=o}function bl(t,e,i,n){const o=i.padding;let{x:r,y:s}=e;for(const a of t){const t=a.box,l=n[a.stack]||{count:1,placed:0,weight:1},c=a.stackWeight/l.weight||1;if(a.horizontal){const n=e.w*c,r=l.size||t.height;Lo(l.start)&&(s=l.start),t.fullSize?yl(t,o.left,s,i.outerWidth-o.right-o.left,r):yl(t,e.left+l.placed,s,n,r),l.start=s,l.placed+=n,s=t.bottom}else{const n=e.h*c,s=l.size||t.width;Lo(l.start)&&(r=l.start),t.fullSize?yl(t,r,o.top,s,i.outerHeight-o.bottom-o.top):yl(t,r,e.top+l.placed,s,n),l.start=r,l.placed+=n,r=t.right}}e.x=r,e.y=s}Xr.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var vl={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,n){if(!t)return;const o=ys(t.options.layout.padding),r=Math.max(e-o.width,0),s=Math.max(i-o.height,0),a=function(t){const e=function(t){const e=[];let i,n,o,r,s,a;for(i=0,n=(t||[]).length;i<n;++i)o=t[i],({position:r,options:{stack:s,stackWeight:a=1}}=o),e.push({index:i,box:o,pos:r,horizontal:o.isHorizontal(),weight:o.weight,stack:s&&r+s,stackWeight:a});return e}(t),i=hl(e.filter((t=>t.box.fullSize)),!0),n=hl(cl(e,"left"),!0),o=hl(cl(e,"right")),r=hl(cl(e,"top"),!0),s=hl(cl(e,"bottom")),a=dl(e,"x"),l=dl(e,"y");return{fullSize:i,leftAndTop:n.concat(r),rightAndBottom:o.concat(l).concat(s).concat(a),chartArea:cl(e,"chartArea"),vertical:n.concat(o).concat(l),horizontal:r.concat(s).concat(a)}}(t.boxes),l=a.vertical,c=a.horizontal;Oo(t.boxes,(t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()}));const d=l.reduce(((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1),0)||1,h=Object.freeze({outerWidth:e,outerHeight:i,padding:o,availableWidth:r,availableHeight:s,vBoxMaxWidth:r/2/d,hBoxMaxHeight:s/2}),p=Object.assign({},o);ul(p,ys(n));const u=Object.assign({maxPadding:p,w:r,h:s,x:o.left,y:o.top},o),f=function(t,e){const i=function(t){const e={};for(const i of t){const{stack:t,pos:n,stackWeight:o}=i;if(!t||!ll.includes(n))continue;const r=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=o}return e}(t),{vBoxMaxWidth:n,hBoxMaxHeight:o}=e;let r,s,a;for(r=0,s=t.length;r<s;++r){a=t[r];const{fullSize:s}=a.box,l=i[a.stack],c=l&&a.stackWeight/l.weight;a.horizontal?(a.width=c?c*n:s&&e.availableWidth,a.height=o):(a.width=n,a.height=c?c*o:s&&e.availableHeight)}return i}(l.concat(c),h);ml(a.fullSize,u,h,f),ml(l,u,h,f),ml(c,u,h,f)&&ml(l,u,h,f),function(t){const e=t.maxPadding;function i(i){const n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(u),bl(a.leftAndTop,u,h,f),u.x+=u.w,u.y+=u.h,bl(a.rightAndBottom,u,h,f),t.chartArea={left:u.left,top:u.top,right:u.left+u.w,bottom:u.top+u.h,height:u.h,width:u.w},Oo(a.chartArea,(e=>{const i=e.box;Object.assign(i,t.chartArea),i.update(u.w,u.h,{left:0,top:0,right:0,bottom:0})}))}};class xl{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,n){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):i)}}isAttached(t){return!0}updateConfig(t){}}class wl extends xl{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const _l={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},kl=t=>null===t||""===t,Sl=!!ea&&{passive:!0};function Rl(t,e,i){t.canvas.removeEventListener(e,i,Sl)}function Ol(t,e){for(const i of t)if(i===e||i.contains(e))return!0}function El(t,e,i){const n=t.canvas,o=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||Ol(i.addedNodes,n),e=e&&!Ol(i.removedNodes,n);e&&i()}));return o.observe(document,{childList:!0,subtree:!0}),o}function Pl(t,e,i){const n=t.canvas,o=new MutationObserver((t=>{let e=!1;for(const i of t)e=e||Ol(i.removedNodes,n),e=e&&!Ol(i.addedNodes,n);e&&i()}));return o.observe(document,{childList:!0,subtree:!0}),o}const $l=new Map;let Tl=0;function Ml(){const t=window.devicePixelRatio;t!==Tl&&(Tl=t,$l.forEach(((e,i)=>{i.currentDevicePixelRatio!==t&&e()})))}function Al(t,e,i){const n=t.canvas,o=n&&Ys(n);if(!o)return;const r=uo(((t,e)=>{const n=o.clientWidth;i(t,e),n<o.clientWidth&&i()}),window),s=new ResizeObserver((t=>{const e=t[0],i=e.contentRect.width,n=e.contentRect.height;0===i&&0===n||r(i,n)}));return s.observe(o),function(t,e){$l.size||window.addEventListener("resize",Ml),$l.set(t,e)}(t,r),s}function Dl(t,e,i){i&&i.disconnect(),"resize"===e&&function(t){$l.delete(t),$l.size||window.removeEventListener("resize",Ml)}(t)}function Cl(t,e,i){const n=t.canvas,o=uo((e=>{null!==t.ctx&&i(function(t,e){const i=_l[t.type]||t.type,{x:n,y:o}=Zs(t,e);return{type:i,chart:e,native:t,x:void 0!==n?n:null,y:void 0!==o?o:null}}(e,t))}),t,(t=>{const e=t[0];return[e,e.offsetX,e.offsetY]}));return function(t,e,i){t.addEventListener(e,i,Sl)}(n,e,o),o}class jl extends xl{acquireContext(t,e){const i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(function(t,e){const i=t.style,n=t.getAttribute("height"),o=t.getAttribute("width");if(t.$chartjs={initial:{height:n,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",kl(o)){const e=ia(t,"width");void 0!==e&&(t.width=e)}if(kl(n))if(""===t.style.height)t.height=t.width/(e||2);else{const e=ia(t,"height");void 0!==e&&(t.height=e)}}(t,e),i):null}releaseContext(t){const e=t.canvas;if(!e.$chartjs)return!1;const i=e.$chartjs.initial;["height","width"].forEach((t=>{const n=i[t];bo(n)?e.removeAttribute(t):e.setAttribute(t,n)}));const n=i.style||{};return Object.keys(n).forEach((t=>{e.style[t]=n[t]})),e.width=e.width,delete e.$chartjs,!0}addEventListener(t,e,i){this.removeEventListener(t,e);const n=t.$proxies||(t.$proxies={}),o={attach:El,detach:Pl,resize:Al}[e]||Cl;n[e]=o(t,e,i)}removeEventListener(t,e){const i=t.$proxies||(t.$proxies={}),n=i[e];n&&(({attach:Dl,detach:Dl,resize:Dl}[e]||Rl)(t,e,n),i[e]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,n){return function(t,e,i,n){const o=qs(t),r=Js(o,"margin"),s=Gs(o.maxWidth,t,"clientWidth")||Uo,a=Gs(o.maxHeight,t,"clientHeight")||Uo,l=function(t,e,i){let n,o;if(void 0===e||void 0===i){const r=Ys(t);if(r){const t=r.getBoundingClientRect(),s=qs(r),a=Js(s,"border","width"),l=Js(s,"padding");e=t.width-l.width-a.width,i=t.height-l.height-a.height,n=Gs(s.maxWidth,r,"clientWidth"),o=Gs(s.maxHeight,r,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:n||Uo,maxHeight:o||Uo}}(t,e,i);let{width:c,height:d}=l;if("content-box"===o.boxSizing){const t=Js(o,"border","width"),e=Js(o,"padding");c-=e.width+t.width,d-=e.height+t.height}return c=Math.max(0,c-r.width),d=Math.max(0,n?Math.floor(c/n):d-r.height),c=Qs(Math.min(c,s,l.maxWidth)),d=Qs(Math.min(d,a,l.maxHeight)),c&&!d&&(d=Qs(c/2)),{width:c,height:d}}(t,e,i,n)}isAttached(t){const e=Ys(t);return!(!e||!e.isConnected)}}class Il{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return Jo(this.x)&&Jo(this.y)}getProps(t,e){const i=this.$animations;if(!e||!i)return this;const n={};return t.forEach((t=>{n[t]=i[t]&&i[t].active()?i[t]._to:this[t]})),n}}Il.defaults={},Il.defaultRoutes=void 0;const Ll={values:t=>vo(t)?t:""+t,numeric(t,e,i){if(0===t)return"0";const n=this.chart.options.locale;let o,r=t;if(i.length>1){const e=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(e<1e-4||e>1e15)&&(o="scientific"),r=function(t,e){let i=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(i)>=1&&t!==Math.floor(t)&&(i=t-Math.floor(t)),i}(t,i)}const s=Go(Math.abs(r)),a=Math.max(Math.min(-1*Math.floor(s),20),0),l={notation:o,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),aa(t,n,l)},logarithmic(t,e,i){if(0===t)return"0";const n=t/Math.pow(10,Math.floor(Go(t)));return 1===n||2===n||5===n?Ll.numeric.call(this,t,e,i):""}};var Nl={formatters:Ll};function zl(t,e,i,n,o){const r=ko(n,0),s=Math.min(ko(o,t.length),t.length);let a,l,c,d=0;for(i=Math.ceil(i),o&&(a=o-n,i=a/Math.floor(a/i)),c=r;c<0;)d++,c=Math.round(r+d*i);for(l=Math.max(r,0);l<s;l++)l===c&&(e.push(t[l]),d++,c=Math.round(r+d*i))}Xr.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Nl.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),Xr.route("scale.ticks","color","","color"),Xr.route("scale.grid","color","","borderColor"),Xr.route("scale.grid","borderColor","","borderColor"),Xr.route("scale.title","color","","color"),Xr.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),Xr.describe("scales",{_fallback:"scale"}),Xr.describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});const Bl=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function Wl(t,e){const i=[],n=t.length/e,o=t.length;let r=0;for(;r<o;r+=n)i.push(t[Math.floor(r)]);return i}function Fl(t,e,i){const n=t.ticks.length,o=Math.min(e,n-1),r=t._startPixel,s=t._endPixel,a=1e-6;let l,c=t.getPixelForTick(o);if(!(i&&(l=1===n?Math.max(c-r,s-c):0===e?(t.getPixelForTick(1)-c)/2:(c-t.getPixelForTick(o-1))/2,c+=o<e?l:-l,c<r-a||c>s+a)))return c}function Ul(t){return t.drawTicks?t.tickLength:0}function Vl(t,e){if(!t.display)return 0;const i=bs(t.font,e),n=ys(t.padding);return(vo(t.text)?t.text.length:1)*i.lineHeight+n.height}function Hl(t,e,i){let n=fo(t);return(i&&"right"!==e||!i&&"right"===e)&&(n=(t=>"left"===t?"right":"right"===t?"left":t)(n)),n}class Kl extends Il{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:n}=this;return t=_o(t,Number.POSITIVE_INFINITY),e=_o(e,Number.NEGATIVE_INFINITY),i=_o(i,Number.POSITIVE_INFINITY),n=_o(n,Number.NEGATIVE_INFINITY),{min:_o(t,i),max:_o(e,n),minDefined:wo(t),maxDefined:wo(e)}}getMinMax(t){let e,{min:i,max:n,minDefined:o,maxDefined:r}=this.getUserBounds();if(o&&r)return{min:i,max:n};const s=this.getMatchingVisibleMetas();for(let a=0,l=s.length;a<l;++a)e=s[a].controller.getMinMax(this,t),o||(i=Math.min(i,e.min)),r||(n=Math.max(n,e.max));return i=r&&i>n?n:i,n=o&&i>n?i:n,{min:_o(i,_o(n,i)),max:_o(n,_o(i,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Ro(this.options.beforeUpdate,[this])}update(t,e,i){const{beginAtZero:n,grace:o,ticks:r}=this.options,s=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=function(t,e,i){const{min:n,max:o}=t,r=So(e,(o-n)/2),s=(t,e)=>i&&0===t?0:t+e;return{min:s(n,-Math.abs(r)),max:s(o,r)}}(this,o,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const a=s<this.ticks.length;this._convertTicksToLabels(a?Wl(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||"auto"===r.source)&&(this.ticks=function(t,e){const i=t.options.ticks,n=i.maxTicksLimit||function(t){const e=t.options.offset,i=t._tickSize(),n=t._length/i+(e?0:1),o=t._maxLength/i;return Math.floor(Math.min(n,o))}(t),o=i.major.enabled?function(t){const e=[];let i,n;for(i=0,n=t.length;i<n;i++)t[i].major&&e.push(i);return e}(e):[],r=o.length,s=o[0],a=o[r-1],l=[];if(r>n)return function(t,e,i,n){let o,r=0,s=i[0];for(n=Math.ceil(n),o=0;o<t.length;o++)o===s&&(e.push(t[o]),r++,s=i[r*n])}(e,l,o,r/n),l;const c=function(t,e,i){const n=function(t){const e=t.length;let i,n;if(e<2)return!1;for(n=t[0],i=1;i<e;++i)if(t[i]-t[i-1]!==n)return!1;return n}(t),o=e.length/i;if(!n)return Math.max(o,1);const r=function(t){const e=[],i=Math.sqrt(t);let n;for(n=1;n<i;n++)t%n==0&&(e.push(n),e.push(t/n));return i===(0|i)&&e.push(i),e.sort(((t,e)=>t-e)).pop(),e}(n);for(let t=0,e=r.length-1;t<e;t++){const e=r[t];if(e>o)return e}return Math.max(o,1)}(o,e,n);if(r>0){let t,i;const n=r>1?Math.round((a-s)/(r-1)):null;for(zl(e,l,c,bo(n)?0:s-n,s),t=0,i=r-1;t<i;t++)zl(e,l,c,o[t],o[t+1]);return zl(e,l,c,a,bo(n)?e.length:a+n),l}return zl(e,l,c),l}(this,this.ticks),this._labelSizes=null),a&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Ro(this.options.afterUpdate,[this])}beforeSetDimensions(){Ro(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Ro(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Ro(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Ro(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let i,n,o;for(i=0,n=t.length;i<n;i++)o=t[i],o.label=Ro(e.callback,[o.value,i,t],this)}afterTickToLabelConversion(){Ro(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Ro(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,i=this.ticks.length,n=e.minRotation||0,o=e.maxRotation;let r,s,a,l=n;if(!this._isVisible()||!e.display||n>=o||i<=1||!this.isHorizontal())return void(this.labelRotation=n);const c=this._getLabelSizes(),d=c.widest.width,h=c.highest.height,p=lr(this.chart.width-d,0,this.maxWidth);r=t.offset?this.maxWidth/i:p/(i-1),d+6>r&&(r=p/(i-(t.offset?.5:1)),s=this.maxHeight-Ul(t.grid)-e.padding-Vl(t.title,this.chart.options.font),a=Math.sqrt(d*d+h*h),l=er(Math.min(Math.asin(lr((c.highest.height+6)/r,-1,1)),Math.asin(lr(s/a,-1,1))-Math.asin(lr(h/a,-1,1)))),l=Math.max(n,Math.min(o,l))),this.labelRotation=l}afterCalculateLabelRotation(){Ro(this.options.afterCalculateLabelRotation,[this])}beforeFit(){Ro(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:i,title:n,grid:o}}=this,r=this._isVisible(),s=this.isHorizontal();if(r){const r=Vl(n,e.options.font);if(s?(t.width=this.maxWidth,t.height=Ul(o)+r):(t.height=this.maxHeight,t.width=Ul(o)+r),i.display&&this.ticks.length){const{first:e,last:n,widest:o,highest:r}=this._getLabelSizes(),a=2*i.padding,l=tr(this.labelRotation),c=Math.cos(l),d=Math.sin(l);if(s){const e=i.mirror?0:d*o.width+c*r.height;t.height=Math.min(this.maxHeight,t.height+e+a)}else{const e=i.mirror?0:c*o.width+d*r.height;t.width=Math.min(this.maxWidth,t.width+e+a)}this._calculatePadding(e,n,d,c)}}this._handleMargins(),s?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,n){const{ticks:{align:o,padding:r},position:s}=this.options,a=0!==this.labelRotation,l="top"!==s&&"x"===this.axis;if(this.isHorizontal()){const s=this.getPixelForTick(0)-this.left,c=this.right-this.getPixelForTick(this.ticks.length-1);let d=0,h=0;a?l?(d=n*t.width,h=i*e.height):(d=i*t.height,h=n*e.width):"start"===o?h=e.width:"end"===o?d=t.width:(d=t.width/2,h=e.width/2),this.paddingLeft=Math.max((d-s+r)*this.width/(this.width-s),0),this.paddingRight=Math.max((h-c+r)*this.width/(this.width-c),0)}else{let i=e.height/2,n=t.height/2;"start"===o?(i=0,n=t.height):"end"===o&&(i=e.height,n=0),this.paddingTop=i+r,this.paddingBottom=n+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Ro(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)bo(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let i=this.ticks;e<i.length&&(i=Wl(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,e){const{ctx:i,_longestTextCache:n}=this,o=[],r=[];let s,a,l,c,d,h,p,u,f,g,m,y=0,b=0;for(s=0;s<e;++s){if(c=t[s].label,d=this._resolveTickFontOptions(s),i.font=h=d.string,p=n[h]=n[h]||{data:{},gc:[]},u=d.lineHeight,f=g=0,bo(c)||vo(c)){if(vo(c))for(a=0,l=c.length;a<l;++a)m=c[a],bo(m)||vo(m)||(f=Jr(i,p.data,p.gc,f,m),g+=u)}else f=Jr(i,p.data,p.gc,f,c),g=u;o.push(f),r.push(g),y=Math.max(f,y),b=Math.max(g,b)}!function(t,e){Oo(t,(t=>{const i=t.gc,n=i.length/2;let o;if(n>e){for(o=0;o<n;++o)delete t.data[i[o]];i.splice(0,n)}}))}(n,e);const v=o.indexOf(y),x=r.indexOf(b),w=t=>({width:o[t]||0,height:r[t]||0});return{first:w(0),last:w(e-1),widest:w(v),highest:w(x),widths:o,heights:r}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return lr(this._alignToPixels?Qr(this.chart,e,0):e,-32768,32767)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const i=e[t];return i.$context||(i.$context=function(t,e,i){return xs(t,{tick:i,index:e,type:"tick"})}(this.getContext(),t,i))}return this.$context||(this.$context=xs(this.chart.getContext(),{scale:this,type:"scale"}))}_tickSize(){const t=this.options.ticks,e=tr(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),o=this._getLabelSizes(),r=t.autoSkipPadding||0,s=o?o.widest.width+r:0,a=o?o.highest.height+r:0;return this.isHorizontal()?a*i>s*n?s/i:a/n:a*n<s*i?a/i:s/n}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,i=this.chart,n=this.options,{grid:o,position:r}=n,s=o.offset,a=this.isHorizontal(),l=this.ticks.length+(s?1:0),c=Ul(o),d=[],h=o.setContext(this.getContext()),p=h.drawBorder?h.borderWidth:0,u=p/2,f=function(t){return Qr(i,t,p)};let g,m,y,b,v,x,w,_,k,S,R,O;if("top"===r)g=f(this.bottom),x=this.bottom-c,_=g-u,S=f(t.top)+u,O=t.bottom;else if("bottom"===r)g=f(this.top),S=t.top,O=f(t.bottom)-u,x=g+u,_=this.top+c;else if("left"===r)g=f(this.right),v=this.right-c,w=g-u,k=f(t.left)+u,R=t.right;else if("right"===r)g=f(this.left),k=t.left,R=f(t.right)-u,v=g+u,w=this.left+c;else if("x"===e){if("center"===r)g=f((t.top+t.bottom)/2+.5);else if(xo(r)){const t=Object.keys(r)[0],e=r[t];g=f(this.chart.scales[t].getPixelForValue(e))}S=t.top,O=t.bottom,x=g+u,_=x+c}else if("y"===e){if("center"===r)g=f((t.left+t.right)/2);else if(xo(r)){const t=Object.keys(r)[0],e=r[t];g=f(this.chart.scales[t].getPixelForValue(e))}v=g-u,w=v-c,k=t.left,R=t.right}const E=ko(n.ticks.maxTicksLimit,l),P=Math.max(1,Math.ceil(l/E));for(m=0;m<l;m+=P){const t=o.setContext(this.getContext(m)),e=t.lineWidth,n=t.color,r=o.borderDash||[],l=t.borderDashOffset,c=t.tickWidth,h=t.tickColor,p=t.tickBorderDash||[],u=t.tickBorderDashOffset;y=Fl(this,m,s),void 0!==y&&(b=Qr(i,y,e),a?v=w=k=R=b:x=_=S=O=b,d.push({tx1:v,ty1:x,tx2:w,ty2:_,x1:k,y1:S,x2:R,y2:O,width:e,color:n,borderDash:r,borderDashOffset:l,tickWidth:c,tickColor:h,tickBorderDash:p,tickBorderDashOffset:u}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(t){const e=this.axis,i=this.options,{position:n,ticks:o}=i,r=this.isHorizontal(),s=this.ticks,{align:a,crossAlign:l,padding:c,mirror:d}=o,h=Ul(i.grid),p=h+c,u=d?-c:p,f=-tr(this.labelRotation),g=[];let m,y,b,v,x,w,_,k,S,R,O,E,P="middle";if("top"===n)w=this.bottom-u,_=this._getXAxisLabelAlignment();else if("bottom"===n)w=this.top+u,_=this._getXAxisLabelAlignment();else if("left"===n){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,x=t.x}else if("right"===n){const t=this._getYAxisLabelAlignment(h);_=t.textAlign,x=t.x}else if("x"===e){if("center"===n)w=(t.top+t.bottom)/2+p;else if(xo(n)){const t=Object.keys(n)[0],e=n[t];w=this.chart.scales[t].getPixelForValue(e)+p}_=this._getXAxisLabelAlignment()}else if("y"===e){if("center"===n)x=(t.left+t.right)/2-p;else if(xo(n)){const t=Object.keys(n)[0],e=n[t];x=this.chart.scales[t].getPixelForValue(e)}_=this._getYAxisLabelAlignment(h).textAlign}"y"===e&&("start"===a?P="top":"end"===a&&(P="bottom"));const $=this._getLabelSizes();for(m=0,y=s.length;m<y;++m){b=s[m],v=b.label;const t=o.setContext(this.getContext(m));k=this.getPixelForTick(m)+o.labelOffset,S=this._resolveTickFontOptions(m),R=S.lineHeight,O=vo(v)?v.length:1;const e=O/2,i=t.color,a=t.textStrokeColor,c=t.textStrokeWidth;let h;if(r?(x=k,E="top"===n?"near"===l||0!==f?-O*R+R/2:"center"===l?-$.highest.height/2-e*R+R:-$.highest.height+R/2:"near"===l||0!==f?R/2:"center"===l?$.highest.height/2-e*R:$.highest.height-O*R,d&&(E*=-1)):(w=k,E=(1-O)*R/2),t.showLabelBackdrop){const e=ys(t.backdropPadding),i=$.heights[m],n=$.widths[m];let o=w+E-e.top,r=x-e.left;switch(P){case"middle":o-=i/2;break;case"bottom":o-=i}switch(_){case"center":r-=n/2;break;case"right":r-=n}h={left:r,top:o,width:n+e.width,height:i+e.height,color:t.backdropColor}}g.push({rotation:f,label:v,font:S,color:i,strokeColor:a,strokeWidth:c,textOffset:E,textAlign:_,textBaseline:P,translation:[x,w],backdrop:h})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-tr(this.labelRotation))return"top"===t?"left":"right";let i="center";return"start"===e.align?i="left":"end"===e.align&&(i="right"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:i,mirror:n,padding:o}}=this.options,r=t+o,s=this._getLabelSizes().widest.width;let a,l;return"left"===e?n?(l=this.right+o,"near"===i?a="left":"center"===i?(a="center",l+=s/2):(a="right",l+=s)):(l=this.right-r,"near"===i?a="right":"center"===i?(a="center",l-=s/2):(a="left",l=this.left)):"right"===e?n?(l=this.left+o,"near"===i?a="right":"center"===i?(a="center",l-=s/2):(a="left",l-=s)):(l=this.left+r,"near"===i?a="left":"center"===i?(a="center",l+=s/2):(a="right",l=this.right)):a="right",{textAlign:a,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:i,top:n,width:o,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,n,o,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex((e=>e.value===t));return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,i=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,r;const s=(t,e,n)=>{n.width&&n.color&&(i.save(),i.lineWidth=n.width,i.strokeStyle=n.color,i.setLineDash(n.borderDash||[]),i.lineDashOffset=n.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(e.display)for(o=0,r=n.length;o<r;++o){const t=n[o];e.drawOnChartArea&&s({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),e.drawTicks&&s({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{grid:i}}=this,n=i.setContext(this.getContext()),o=i.drawBorder?n.borderWidth:0;if(!o)return;const r=i.setContext(this.getContext(0)).lineWidth,s=this._borderValue;let a,l,c,d;this.isHorizontal()?(a=Qr(t,this.left,o)-o/2,l=Qr(t,this.right,r)+r/2,c=d=s):(c=Qr(t,this.top,o)-o/2,d=Qr(t,this.bottom,r)+r/2,a=l=s),e.save(),e.lineWidth=n.borderWidth,e.strokeStyle=n.borderColor,e.beginPath(),e.moveTo(a,c),e.lineTo(l,d),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const e=this.ctx,i=this._computeLabelArea();i&&ns(e,i);const n=this._labelItems||(this._labelItems=this._computeLabelItems(t));let o,r;for(o=0,r=n.length;o<r;++o){const t=n[o],i=t.font,r=t.label;t.backdrop&&(e.fillStyle=t.backdrop.color,e.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height)),as(e,r,0,t.textOffset,i,t)}i&&os(e)}drawTitle(){const{ctx:t,options:{position:e,title:i,reverse:n}}=this;if(!i.display)return;const o=bs(i.font),r=ys(i.padding),s=i.align;let a=o.lineHeight/2;"bottom"===e||"center"===e||xo(e)?(a+=r.bottom,vo(i.text)&&(a+=o.lineHeight*(i.text.length-1))):a+=r.top;const{titleX:l,titleY:c,maxWidth:d,rotation:h}=function(t,e,i,n){const{top:o,left:r,bottom:s,right:a,chart:l}=t,{chartArea:c,scales:d}=l;let h,p,u,f=0;const g=s-o,m=a-r;if(t.isHorizontal()){if(p=go(n,r,a),xo(i)){const t=Object.keys(i)[0],n=i[t];u=d[t].getPixelForValue(n)+g-e}else u="center"===i?(c.bottom+c.top)/2+g-e:Bl(t,i,e);h=a-r}else{if(xo(i)){const t=Object.keys(i)[0],n=i[t];p=d[t].getPixelForValue(n)-m+e}else p="center"===i?(c.left+c.right)/2-m+e:Bl(t,i,e);u=go(n,s,o),f="left"===i?-Ho:Ho}return{titleX:p,titleY:u,maxWidth:h,rotation:f}}(this,a,e,s);as(t,i.text,0,0,o,{color:i.color,maxWidth:d,rotation:h,textAlign:Hl(s,e,n),textBaseline:"middle",translation:[l,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,i=ko(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===Kl.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",n=[];let o,r;for(o=0,r=e.length;o<r;++o){const r=e[o];r[i]!==this.id||t&&r.type!==t||n.push(r)}return n}_resolveTickFontOptions(t){return bs(this.options.ticks.setContext(this.getContext(t)).font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Yl{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let i;(function(t){return"id"in t&&"defaults"in t})(e)&&(i=this.register(e));const n=this.items,o=t.id,r=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in n||(n[o]=t,function(t,e,i){const n=Mo(Object.create(null),[i?Xr.get(i):{},Xr.get(e),t.defaults]);Xr.set(e,n),t.defaultRoutes&&function(t,e){Object.keys(e).forEach((i=>{const n=i.split("."),o=n.pop(),r=[t].concat(n).join("."),s=e[i].split("."),a=s.pop(),l=s.join(".");Xr.route(r,o,l,a)}))}(e,t.defaultRoutes),t.descriptors&&Xr.describe(e,t.descriptors)}(t,r,i),this.override&&Xr.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,i=t.id,n=this.scope;i in e&&delete e[i],n&&i in Xr[n]&&(delete Xr[n][i],this.override&&delete Kr[i])}}var Gl=new class{constructor(){this.controllers=new Yl(Ca,"datasets",!0),this.elements=new Yl(Il,"elements"),this.plugins=new Yl(Object,"plugins"),this.scales=new Yl(Kl,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach((e=>{const n=i||this._getRegistryForType(e);i||n.isForType(e)||n===this.plugins&&e.id?this._exec(t,n,e):Oo(e,(e=>{const n=i||this._getRegistryForType(e);this._exec(t,n,e)}))}))}_exec(t,e,i){const n=Io(t);Ro(i["before"+n],[],i),e[t](i),Ro(i["after"+n],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){const n=e.get(t);if(void 0===n)throw new Error('"'+t+'" is not a registered '+i+".");return n}};class ql{constructor(){this._init=[]}notify(t,e,i,n){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));const o=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(o,t,e,i);return"afterDestroy"===e&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall")),r}_notify(t,e,i,n){n=n||{};for(const o of t){const t=o.plugin;if(!1===Ro(t[i],[e,n,o.options],t)&&n.cancelable)return!1}return!0}invalidate(){bo(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const i=t&&t.config,n=ko(i.options&&i.options.plugins,{}),o=function(t){const e=[],i=Object.keys(Gl.plugins.items);for(let t=0;t<i.length;t++)e.push(Gl.getPlugin(i[t]));const n=t.plugins||[];for(let t=0;t<n.length;t++){const i=n[t];-1===e.indexOf(i)&&e.push(i)}return e}(i);return!1!==n||e?function(t,e,i,n){const o=[],r=t.getContext();for(let s=0;s<e.length;s++){const a=e[s],l=Xl(i[a.id],n);null!==l&&o.push({plugin:a,options:Jl(t.config,a,l,r)})}return o}(t,o,n,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],i=this._cache,n=(t,e)=>t.filter((t=>!e.some((e=>t.plugin.id===e.plugin.id))));this._notify(n(e,i),t,"stop"),this._notify(n(i,e),t,"start")}}function Xl(t,e){return e||!1!==t?!0===t?{}:t:null}function Jl(t,e,i,n){const o=t.pluginScopeKeys(e),r=t.getOptionScopes(i,o);return t.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Zl(t,e){const i=Xr.datasets[t]||{};return((e.datasets||{})[t]||{}).indexAxis||e.indexAxis||i.indexAxis||"x"}function Ql(t,e){return"x"===t||"y"===t?t:e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase();var i}function tc(t){const e=t.options||(t.options={});e.plugins=ko(e.plugins,{}),e.scales=function(t,e){const i=Kr[t.type]||{scales:{}},n=e.scales||{},o=Zl(t.type,e),r=Object.create(null),s=Object.create(null);return Object.keys(n).forEach((t=>{const e=n[t];if(!xo(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);const a=Ql(t,e),l=function(t,e){return t===e?"_index_":"_value_"}(a,o),c=i.scales||{};r[a]=r[a]||t,s[t]=Ao(Object.create(null),[{axis:a},e,c[a],c[l]])})),t.data.datasets.forEach((i=>{const o=i.type||t.type,a=i.indexAxis||Zl(o,e),l=(Kr[o]||{}).scales||{};Object.keys(l).forEach((t=>{const e=function(t,e){let i=t;return"_index_"===t?i=e:"_value_"===t&&(i="x"===e?"y":"x"),i}(t,a),o=i[e+"AxisID"]||r[e]||e;s[o]=s[o]||Object.create(null),Ao(s[o],[{axis:e},n[o],l[t]])}))})),Object.keys(s).forEach((t=>{const e=s[t];Ao(e,[Xr.scales[e.type],Xr.scale])})),s}(t,e)}function ec(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}const ic=new Map,nc=new Set;function oc(t,e){let i=ic.get(t);return i||(i=e(),ic.set(t,i),nc.add(i)),i}const rc=(t,e,i)=>{const n=jo(e,i);void 0!==n&&t.add(n)};class sc{constructor(t){this._config=function(t){return(t=t||{}).data=ec(t.data),tc(t),t}(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=ec(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),tc(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return oc(t,(()=>[[`datasets.${t}`,""]]))}datasetAnimationScopeKeys(t,e){return oc(`${t}.transition.${e}`,(()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]]))}datasetElementScopeKeys(t,e){return oc(`${t}-${e}`,(()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]]))}pluginScopeKeys(t){const e=t.id;return oc(`${this.type}-plugin-${e}`,(()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]]))}_cachedScopes(t,e){const i=this._scopeCache;let n=i.get(t);return n&&!e||(n=new Map,i.set(t,n)),n}getOptionScopes(t,e,i){const{options:n,type:o}=this,r=this._cachedScopes(t,i),s=r.get(e);if(s)return s;const a=new Set;e.forEach((e=>{t&&(a.add(t),e.forEach((e=>rc(a,t,e)))),e.forEach((t=>rc(a,n,t))),e.forEach((t=>rc(a,Kr[o]||{},t))),e.forEach((t=>rc(a,Xr,t))),e.forEach((t=>rc(a,Yr,t)))}));const l=Array.from(a);return 0===l.length&&l.push(Object.create(null)),nc.has(e)&&r.set(e,l),l}chartOptionScopes(){const{options:t,type:e}=this;return[t,Kr[e]||{},Xr.datasets[e]||{},{type:e},Xr,Yr]}resolveNamedOptions(t,e,i,n=[""]){const o={$shared:!0},{resolver:r,subPrefixes:s}=ac(this._resolverCache,t,n);let a=r;(function(t,e){const{isScriptable:i,isIndexable:n}=$s(t);for(const o of e){const e=i(o),r=n(o),s=(r||e)&&t[o];if(e&&(No(s)||lc(s))||r&&vo(s))return!0}return!1})(r,e)&&(o.$shared=!1,a=Ps(r,i=No(i)?i():i,this.createResolver(t,i,s)));for(const t of e)o[t]=a[t];return o}createResolver(t,e,i=[""],n){const{resolver:o}=ac(this._resolverCache,t,i);return xo(e)?Ps(o,e,void 0,n):o}}function ac(t,e,i){let n=t.get(e);n||(n=new Map,t.set(e,n));const o=i.join();let r=n.get(o);return r||(r={resolver:Es(e,i),subPrefixes:i.filter((t=>!t.toLowerCase().includes("hover")))},n.set(o,r)),r}const lc=t=>xo(t)&&Object.getOwnPropertyNames(t).reduce(((e,i)=>e||No(t[i])),!1),cc=["top","bottom","left","right","chartArea"];function dc(t,e){return"top"===t||"bottom"===t||-1===cc.indexOf(t)&&"x"===e}function hc(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}function pc(t){const e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),Ro(i&&i.onComplete,[t],e)}function uc(t){const e=t.chart,i=e.options.animation;Ro(i&&i.onProgress,[t],e)}function fc(t){return Ks()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const gc={},mc=t=>{const e=fc(t);return Object.values(gc).filter((t=>t.canvas===e)).pop()};function yc(t,e,i){const n=Object.keys(t);for(const o of n){const n=+o;if(n>=e){const r=t[o];delete t[o],(i>0||n>e)&&(t[n+i]=r)}}}class bc{constructor(t,e){const i=this.config=new sc(e),n=fc(t),o=mc(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas can be reused.");const r=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||function(t){return!Ks()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?wl:jl}(n)),this.platform.updateConfig(i);const s=this.platform.acquireContext(n,r.aspectRatio),a=s&&s.canvas,l=a&&a.height,c=a&&a.width;this.id=yo(),this.ctx=s,this.canvas=a,this.width=c,this.height=l,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new ql,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=function(t,e){let i;return function(...n){return e?(clearTimeout(i),i=setTimeout(t,e,n)):t.apply(this,n),e}}((t=>this.update(t)),r.resizeDelay||0),this._dataChanges=[],gc[this.id]=this,s&&a?(ya.listen(this,"complete",pc),ya.listen(this,"progress",uc),this._initialize(),this.attached&&this.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:n,_aspectRatio:o}=this;return bo(t)?e&&o?o:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ta(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return ts(this.canvas,this.ctx),this}stop(){return ya.stop(this),this}resize(t,e){ya.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const i=this.options,n=this.canvas,o=i.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,e,o),s=i.devicePixelRatio||this.platform.getDevicePixelRatio(),a=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,ta(this,s,!0)&&(this.notifyPlugins("resize",{size:r}),Ro(i.onResize,[this,r],this),this.attached&&this._doResize(a)&&this.render())}ensureScalesHaveIDs(){Oo(this.options.scales||{},((t,e)=>{t.id=e}))}buildOrUpdateScales(){const t=this.options,e=t.scales,i=this.scales,n=Object.keys(i).reduce(((t,e)=>(t[e]=!1,t)),{});let o=[];e&&(o=o.concat(Object.keys(e).map((t=>{const i=e[t],n=Ql(t,i),o="r"===n,r="x"===n;return{options:i,dposition:o?"chartArea":r?"bottom":"left",dtype:o?"radialLinear":r?"category":"linear"}})))),Oo(o,(e=>{const o=e.options,r=o.id,s=Ql(r,o),a=ko(o.type,e.dtype);void 0!==o.position&&dc(o.position,s)===dc(e.dposition)||(o.position=e.dposition),n[r]=!0;let l=null;r in i&&i[r].type===a?l=i[r]:(l=new(Gl.getScale(a))({id:r,type:a,ctx:this.ctx,chart:this}),i[l.id]=l),l.init(o,t)})),Oo(n,((t,e)=>{t||delete i[e]})),Oo(i,(t=>{vl.configure(this,t,t.options),vl.addBox(this,t)}))}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort(((t,e)=>t.index-e.index)),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(hc("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach(((t,i)=>{0===e.filter((e=>e===t._dataset)).length&&this._destroyDatasetMeta(i)}))}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let i,n;for(this._removeUnreferencedMetasets(),i=0,n=e.length;i<n;i++){const n=e[i];let o=this.getDatasetMeta(i);const r=n.type||this.config.type;if(o.type&&o.type!==r&&(this._destroyDatasetMeta(i),o=this.getDatasetMeta(i)),o.type=r,o.indexAxis=n.indexAxis||Zl(r,this.options),o.order=n.order||0,o.index=i,o.label=""+n.label,o.visible=this.isDatasetVisible(i),o.controller)o.controller.updateIndex(i),o.controller.linkScales();else{const e=Gl.getController(r),{datasetElementType:n,dataElementType:s}=Xr.datasets[r];Object.assign(e.prototype,{dataElementType:Gl.getElement(s),datasetElementType:n&&Gl.getElement(n)}),o.controller=new e(this,i),t.push(o.controller)}}return this._updateMetasets(),t}_resetElements(){Oo(this.data.datasets,((t,e)=>{this.getDatasetMeta(e).controller.reset()}),this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let t=0,e=this.data.datasets.length;t<e;t++){const{controller:e}=this.getDatasetMeta(t),i=!n&&-1===o.indexOf(e);e.buildOrUpdateElements(i),r=Math.max(+e.getMaxOverflow(),r)}r=this._minPadding=i.layout.autoPadding?r:0,this._updateLayout(r),n||Oo(o,(t=>{t.reset()})),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(hc("z","_idx"));const{_active:s,_lastEvent:a}=this;a?this._eventHandler(a,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){Oo(this.scales,(t=>{vl.removeBox(this,t)})),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);zo(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:i,start:n,count:o}of e)yc(t,n,"_removeElements"===i?-o:o)}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,i=e=>new Set(t.filter((t=>t[0]===e)).map(((t,e)=>e+","+t.splice(1).join(",")))),n=i(0);for(let t=1;t<e;t++)if(!zo(n,i(t)))return;return Array.from(n).map((t=>t.split(","))).map((t=>({method:t[1],start:+t[2],count:+t[3]})))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;vl.update(this,this.width,this.height,t);const e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],Oo(this.boxes,(t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))}),this),this._layers.forEach(((t,e)=>{t._idx=e})),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,No(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const i=this.getDatasetMeta(t),n={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",n)&&(i.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(ya.has(this)?this.attached&&!ya.running(this)&&ya.start(this):(this.draw(),pc({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0)return;if(!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,i=[];let n,o;for(n=0,o=e.length;n<o;++n){const o=e[n];t&&!o.visible||i.push(o)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,i=t._clip,n=!i.disabled,o=this.chartArea,r={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",r)&&(n&&ns(e,{left:!1===i.left?0:o.left-i.left,right:!1===i.right?this.width:o.right+i.right,top:!1===i.top?0:o.top-i.top,bottom:!1===i.bottom?this.height:o.bottom+i.bottom}),t.controller.draw(),n&&os(e),r.cancelable=!1,this.notifyPlugins("afterDatasetDraw",r))}getElementsAtEventForMode(t,e,i,n){const o=al.modes[e];return"function"==typeof o?o(this,t,i,n):[]}getDatasetMeta(t){const e=this.data.datasets[t],i=this._metasets;let n=i.filter((t=>t&&t._dataset===e)).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context=xs(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){this.getDatasetMeta(t).hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){const n=i?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,n);Lo(e)?(o.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),r.update(o,{visible:i}),this.update((e=>e.datasetIndex===t?n:void 0)))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),ya.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),ts(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete gc[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,i=(i,n)=>{e.addEventListener(this,i,n),t[i]=n},n=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};Oo(this.options.events,(t=>i(t,n)))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,i=(i,n)=>{e.addEventListener(this,i,n),t[i]=n},n=(i,n)=>{t[i]&&(e.removeEventListener(this,i,n),delete t[i])},o=(t,e)=>{this.canvas&&this.resize(t,e)};let r;const s=()=>{n("attach",s),this.attached=!0,this.resize(),i("resize",o),i("detach",r)};r=()=>{this.attached=!1,n("resize",o),this._stop(),this._resize(0,0),i("attach",s)},e.isAttached(this.canvas)?s():r()}unbindEvents(){Oo(this._listeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._listeners={},Oo(this._responsiveListeners,((t,e)=>{this.platform.removeEventListener(this,e,t)})),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){const n=i?"set":"remove";let o,r,s,a;for("dataset"===e&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+n+"DatasetHoverStyle"]()),s=0,a=t.length;s<a;++s){r=t[s];const e=r&&this.getDatasetMeta(r.datasetIndex).controller;e&&e[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],i=t.map((({datasetIndex:t,index:e})=>{const i=this.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}));!Eo(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){const n=this.options.hover,o=(t,e)=>t.filter((t=>!e.some((e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)))),r=o(e,t),s=i?t:o(t,e);r.length&&this.updateHoverStyle(r,n.mode,!1),s.length&&n.mode&&this.updateHoverStyle(s,n.mode,!0)}_eventHandler(t,e){const i={event:t,replay:e,cancelable:!0,inChartArea:is(t,this.chartArea,this._minPadding)},n=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,n))return;const o=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,n),(o||i.changed)&&this.render(),this}_handleEvent(t,e,i){const{_active:n=[],options:o}=this,r=e,s=this._getActiveElements(t,n,i,r),a=function(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}(t),l=function(t,e,i,n){return i&&"mouseout"!==t.type?n?e:t:null}(t,this._lastEvent,i,a);i&&(this._lastEvent=null,Ro(o.onHover,[t,s,this],this),a&&Ro(o.onClick,[t,s,this],this));const c=!Eo(s,n);return(c||e)&&(this._active=s,this._updateHoverStyles(s,n,e)),this._lastEvent=l,c}_getActiveElements(t,e,i,n){if("mouseout"===t.type)return[];if(!i)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,n)}}const vc=()=>Oo(bc.instances,(t=>t._plugins.invalidate())),xc=!0;function wc(t,e,i){const{startAngle:n,pixelMargin:o,x:r,y:s,outerRadius:a,innerRadius:l}=e;let c=o/a;t.beginPath(),t.arc(r,s,a,n-c,i+c),l>o?(c=o/l,t.arc(r,s,l,i+c,n-c,!0)):t.arc(r,s,o,i+Ho,n-Ho),t.closePath(),t.clip()}function _c(t,e,i,n){return{x:i+t*Math.cos(e),y:n+t*Math.sin(e)}}function kc(t,e,i,n,o){const{x:r,y:s,startAngle:a,pixelMargin:l,innerRadius:c}=e,d=Math.max(e.outerRadius+n+i-l,0),h=c>0?c+n+i+l:0;let p=0;const u=o-a;if(n){const t=((c>0?c-n:0)+(d>0?d-n:0))/2;p=(u-(0!==t?u*t/(t+n):u))/2}const f=(u-Math.max(.001,u*d-i/Bo)/d)/2,g=a+f+p,m=o-f-p,{outerStart:y,outerEnd:b,innerStart:v,innerEnd:x}=function(t,e,i,n){const o=fs(t.options.borderRadius,["outerStart","outerEnd","innerStart","innerEnd"]),r=(i-e)/2,s=Math.min(r,n*e/2),a=t=>{const e=(i-Math.min(r,t))*n/2;return lr(t,0,Math.min(r,e))};return{outerStart:a(o.outerStart),outerEnd:a(o.outerEnd),innerStart:lr(o.innerStart,0,s),innerEnd:lr(o.innerEnd,0,s)}}(e,h,d,m-g),w=d-y,_=d-b,k=g+y/w,S=m-b/_,R=h+v,O=h+x,E=g+v/R,P=m-x/O;if(t.beginPath(),t.arc(r,s,d,k,S),b>0){const e=_c(_,S,r,s);t.arc(e.x,e.y,b,S,m+Ho)}const $=_c(O,m,r,s);if(t.lineTo($.x,$.y),x>0){const e=_c(O,P,r,s);t.arc(e.x,e.y,x,m+Ho,P+Math.PI)}if(t.arc(r,s,h,m-x/h,g+v/h,!0),v>0){const e=_c(R,E,r,s);t.arc(e.x,e.y,v,E+Math.PI,g-Ho)}const T=_c(w,g,r,s);if(t.lineTo(T.x,T.y),y>0){const e=_c(w,k,r,s);t.arc(e.x,e.y,y,g-Ho,k)}t.closePath()}Object.defineProperties(bc,{defaults:{enumerable:xc,value:Xr},instances:{enumerable:xc,value:gc},overrides:{enumerable:xc,value:Kr},registry:{enumerable:xc,value:Gl},version:{enumerable:xc,value:"3.7.0"},getChart:{enumerable:xc,value:mc},register:{enumerable:xc,value:(...t)=>{Gl.add(...t),vc()}},unregister:{enumerable:xc,value:(...t)=>{Gl.remove(...t),vc()}}});class Sc extends Il{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){const n=this.getProps(["x","y"],i),{angle:o,distance:r}=nr(n,{x:t,y:e}),{startAngle:s,endAngle:a,innerRadius:l,outerRadius:c,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),h=this.options.spacing/2,p=ko(d,a-s)>=Wo||ar(o,s,a),u=cr(r,l+h,c+h);return p&&u}getCenterPoint(t){const{x:e,y:i,startAngle:n,endAngle:o,innerRadius:r,outerRadius:s}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:a,spacing:l}=this.options,c=(n+o)/2,d=(r+s+l+a)/2;return{x:e+Math.cos(c)*d,y:i+Math.sin(c)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:e,circumference:i}=this,n=(e.offset||0)/2,o=(e.spacing||0)/2;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>Wo?Math.floor(i/Wo):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let r=0;if(n){r=n/2;const e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*r,Math.sin(e)*r),this.circumference>=Bo&&(r=n)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;const s=function(t,e,i,n){const{fullCircles:o,startAngle:r,circumference:s}=e;let a=e.endAngle;if(o){kc(t,e,i,n,r+Wo);for(let e=0;e<o;++e)t.fill();isNaN(s)||(a=r+s%Wo,s%Wo==0&&(a+=Wo))}return kc(t,e,i,n,a),t.fill(),a}(t,this,r,o);(function(t,e,i,n,o){const{options:r}=e,{borderWidth:s,borderJoinStyle:a}=r,l="inner"===r.borderAlign;s&&(l?(t.lineWidth=2*s,t.lineJoin=a||"round"):(t.lineWidth=s,t.lineJoin=a||"bevel"),e.fullCircles&&function(t,e,i){const{x:n,y:o,startAngle:r,pixelMargin:s,fullCircles:a}=e,l=Math.max(e.outerRadius-s,0),c=e.innerRadius+s;let d;for(i&&wc(t,e,r+Wo),t.beginPath(),t.arc(n,o,c,r+Wo,r,!0),d=0;d<a;++d)t.stroke();for(t.beginPath(),t.arc(n,o,l,r,r+Wo),d=0;d<a;++d)t.stroke()}(t,e,l),l&&wc(t,e,o),kc(t,e,i,n,o),t.stroke())})(t,this,r,o,s),t.restore()}}function Rc(t,e,i=e){t.lineCap=ko(i.borderCapStyle,e.borderCapStyle),t.setLineDash(ko(i.borderDash,e.borderDash)),t.lineDashOffset=ko(i.borderDashOffset,e.borderDashOffset),t.lineJoin=ko(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=ko(i.borderWidth,e.borderWidth),t.strokeStyle=ko(i.borderColor,e.borderColor)}function Oc(t,e,i){t.lineTo(i.x,i.y)}function Ec(t,e,i={}){const n=t.length,{start:o=0,end:r=n-1}=i,{start:s,end:a}=e,l=Math.max(o,s),c=Math.min(r,a),d=o<s&&r<s||o>a&&r>a;return{count:n,start:l,loop:e.loop,ilen:c<l&&!d?n+c-l:c-l}}function Pc(t,e,i,n){const{points:o,options:r}=e,{count:s,start:a,loop:l,ilen:c}=Ec(o,i,n),d=function(t){return t.stepped?rs:t.tension||"monotone"===t.cubicInterpolationMode?ss:Oc}(r);let h,p,u,{move:f=!0,reverse:g}=n||{};for(h=0;h<=c;++h)p=o[(a+(g?c-h:h))%s],p.skip||(f?(t.moveTo(p.x,p.y),f=!1):d(t,u,p,g,r.stepped),u=p);return l&&(p=o[(a+(g?c:0))%s],d(t,u,p,g,r.stepped)),!!l}function $c(t,e,i,n){const o=e.points,{count:r,start:s,ilen:a}=Ec(o,i,n),{move:l=!0,reverse:c}=n||{};let d,h,p,u,f,g,m=0,y=0;const b=t=>(s+(c?a-t:t))%r,v=()=>{u!==f&&(t.lineTo(m,f),t.lineTo(m,u),t.lineTo(m,g))};for(l&&(h=o[b(0)],t.moveTo(h.x,h.y)),d=0;d<=a;++d){if(h=o[b(d)],h.skip)continue;const e=h.x,i=h.y,n=0|e;n===p?(i<u?u=i:i>f&&(f=i),m=(y*m+e)/++y):(v(),t.lineTo(e,i),p=n,y=0,u=f=i),g=i}v()}function Tc(t){const e=t.options,i=e.borderDash&&e.borderDash.length;return t._decimated||t._loop||e.tension||"monotone"===e.cubicInterpolationMode||e.stepped||i?Pc:$c}Sc.id="arc",Sc.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0},Sc.defaultRoutes={backgroundColor:"backgroundColor"};const Mc="function"==typeof Path2D;class Ac extends Il{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){const n=i.spanGaps?this._loop:this._fullLoop;Hs(this._points,i,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=function(t,e){const i=t.points,n=t.options.spanGaps,o=i.length;if(!o)return[];const r=!!t._loop,{start:s,end:a}=function(t,e,i,n){let o=0,r=e-1;if(i&&!n)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,i&&(r+=o);r>o&&t[r%e].skip;)r--;return r%=e,{start:o,end:r}}(i,o,r,n);return function(t,e,i,n){return n&&n.setContext&&i?function(t,e,i,n){const o=t._chart.getContext(),r=ga(t.options),{_datasetIndex:s,options:{spanGaps:a}}=t,l=i.length,c=[];let d=r,h=e[0].start,p=h;function u(t,e,n,o){const r=a?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=r;for(;i[e%l].skip;)e+=r;t%l!=e%l&&(c.push({start:t%l,end:e%l,loop:n,style:o}),d=o,h=e%l)}}for(const t of e){h=a?h:t.start;let e,r=i[h%l];for(p=h+1;p<=t.end;p++){const a=i[p%l];e=ga(n.setContext(xs(o,{type:"segment",p0:r,p1:a,p0DataIndex:(p-1)%l,p1DataIndex:p%l,datasetIndex:s}))),ma(e,d)&&u(h,p-1,t.loop,d),r=a,d=e}h<p-1&&u(h,p-1,t.loop,d)}return c}(t,e,i,n):e}(t,!0===n?[{start:s,end:a,loop:r}]:function(t,e,i,n){const o=t.length,r=[];let s,a=e,l=t[e];for(s=e+1;s<=i;++s){const i=t[s%o];i.skip||i.stop?l.skip||(n=!1,r.push({start:e%o,end:(s-1)%o,loop:n}),e=a=i.stop?s:null):(a=s,l.skip&&(e=s)),l=i}return null!==a&&r.push({start:e%o,end:a%o,loop:n}),r}(i,s,a<s?a+o:a,!!t._fullLoop&&0===s&&a===o-1),i,e)}(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){const i=this.options,n=t[e],o=this.points,r=fa(this,{property:e,start:n,end:n});if(!r.length)return;const s=[],a=function(t){return t.stepped?oa:t.tension||"monotone"===t.cubicInterpolationMode?ra:na}(i);let l,c;for(l=0,c=r.length;l<c;++l){const{start:c,end:d}=r[l],h=o[c],p=o[d];if(h===p){s.push(h);continue}const u=a(h,p,Math.abs((n-h[e])/(p[e]-h[e])),i.stepped);u[e]=t[e],s.push(u)}return 1===s.length?s[0]:s}pathSegment(t,e,i){return Tc(this)(t,this,e,i)}path(t,e,i){const n=this.segments,o=Tc(this);let r=this._loop;e=e||0,i=i||this.points.length-e;for(const s of n)r&=o(t,this,s,{start:e,end:e+i-1});return!!r}draw(t,e,i,n){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),function(t,e,i,n){Mc&&!e.options.segment?function(t,e,i,n){let o=e._path;o||(o=e._path=new Path2D,e.path(o,i,n)&&o.closePath()),Rc(t,e.options),t.stroke(o)}(t,e,i,n):function(t,e,i,n){const{segments:o,options:r}=e,s=Tc(e);for(const a of o)Rc(t,r,a.style),t.beginPath(),s(t,e,a,{start:i,end:i+n-1})&&t.closePath(),t.stroke()}(t,e,i,n)}(t,this,i,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function Dc(t,e,i,n){const o=t.options,{[i]:r}=t.getProps([i],n);return Math.abs(e-r)<o.radius+o.hitRadius}Ac.id="line",Ac.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},Ac.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},Ac.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class Cc extends Il{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){const n=this.options,{x:o,y:r}=this.getProps(["x","y"],i);return Math.pow(t-o,2)+Math.pow(e-r,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,e){return Dc(this,t,"x",e)}inYRange(t,e){return Dc(this,t,"y",e)}getCenterPoint(t){const{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;return e=Math.max(e,e&&t.hoverRadius||0),2*(e+(e&&t.borderWidth||0))}draw(t,e){const i=this.options;this.skip||i.radius<.1||!is(this,e,this.size(i)/2)||(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,es(t,i,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function jc(t,e){const{x:i,y:n,base:o,width:r,height:s}=t.getProps(["x","y","base","width","height"],e);let a,l,c,d,h;return t.horizontal?(h=s/2,a=Math.min(i,o),l=Math.max(i,o),c=n-h,d=n+h):(h=r/2,a=i-h,l=i+h,c=Math.min(n,o),d=Math.max(n,o)),{left:a,top:c,right:l,bottom:d}}function Ic(t,e,i,n){return t?0:lr(e,i,n)}function Lc(t,e,i,n){const o=null===e,r=null===i,s=t&&!(o&&r)&&jc(t,n);return s&&(o||cr(e,s.left,s.right))&&(r||cr(i,s.top,s.bottom))}function Nc(t,e){t.rect(e.x,e.y,e.w,e.h)}function zc(t,e,i={}){const n=t.x!==i.x?-e:0,o=t.y!==i.y?-e:0,r=(t.x+t.w!==i.x+i.w?e:0)-n,s=(t.y+t.h!==i.y+i.h?e:0)-o;return{x:t.x+n,y:t.y+o,w:t.w+r,h:t.h+s,radius:t.radius}}Cc.id="point",Cc.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},Cc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class Bc extends Il{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:i,backgroundColor:n}}=this,{inner:o,outer:r}=function(t){const e=jc(t),i=e.right-e.left,n=e.bottom-e.top,o=function(t,e,i){const n=t.options.borderWidth,o=t.borderSkipped,r=gs(n);return{t:Ic(o.top,r.top,0,i),r:Ic(o.right,r.right,0,e),b:Ic(o.bottom,r.bottom,0,i),l:Ic(o.left,r.left,0,e)}}(t,i/2,n/2),r=function(t,e,i){const{enableBorderRadius:n}=t.getProps(["enableBorderRadius"]),o=t.options.borderRadius,r=ms(o),s=Math.min(e,i),a=t.borderSkipped,l=n||xo(o);return{topLeft:Ic(!l||a.top||a.left,r.topLeft,0,s),topRight:Ic(!l||a.top||a.right,r.topRight,0,s),bottomLeft:Ic(!l||a.bottom||a.left,r.bottomLeft,0,s),bottomRight:Ic(!l||a.bottom||a.right,r.bottomRight,0,s)}}(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n,radius:r},inner:{x:e.left+o.l,y:e.top+o.t,w:i-o.l-o.r,h:n-o.t-o.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,r.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(o.b,o.r))}}}}(this),s=(a=r.radius).topLeft||a.topRight||a.bottomLeft||a.bottomRight?cs:Nc;var a;t.save(),r.w===o.w&&r.h===o.h||(t.beginPath(),s(t,zc(r,e,o)),t.clip(),s(t,zc(o,-e,r)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),s(t,zc(o,e)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,i){return Lc(this,t,e,i)}inXRange(t,e){return Lc(this,t,null,e)}inYRange(t,e){return Lc(this,null,t,e)}getCenterPoint(t){const{x:e,y:i,base:n,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+n)/2:e,y:o?i:(i+n)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}Bc.id="bar",Bc.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},Bc.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var Wc=Object.freeze({__proto__:null,ArcElement:Sc,LineElement:Ac,PointElement:Cc,BarElement:Bc});function Fc(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function Uc(t){t.data.datasets.forEach((t=>{Fc(t)}))}var Vc={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled)return void Uc(t);const n=t.width;t.data.datasets.forEach(((e,o)=>{const{_data:r,indexAxis:s}=e,a=t.getDatasetMeta(o),l=r||e.data;if("y"===vs([s,t.options.indexAxis]))return;if("line"!==a.type)return;const c=t.scales[a.xAxisID];if("linear"!==c.type&&"time"!==c.type)return;if(t.options.parsing)return;let d,{start:h,count:p}=function(t,e){const i=e.length;let n,o=0;const{iScale:r}=t,{min:s,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(o=lr(_s(e,r.axis,s).lo,0,i-1)),n=c?lr(_s(e,r.axis,a).hi+1,o,i)-o:i-o,{start:o,count:n}}(a,l);if(p<=(i.threshold||4*n))Fc(e);else{switch(bo(r)&&(e._data=l,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":d=function(t,e,i,n,o){const r=o.samples||n;if(r>=i)return t.slice(e,e+i);const s=[],a=(i-2)/(r-2);let l=0;const c=e+i-1;let d,h,p,u,f,g=e;for(s[l++]=t[g],d=0;d<r-2;d++){let n,o=0,r=0;const c=Math.floor((d+1)*a)+1+e,m=Math.min(Math.floor((d+2)*a)+1,i)+e,y=m-c;for(n=c;n<m;n++)o+=t[n].x,r+=t[n].y;o/=y,r/=y;const b=Math.floor(d*a)+1+e,v=Math.min(Math.floor((d+1)*a)+1,i)+e,{x,y:w}=t[g];for(p=u=-1,n=b;n<v;n++)u=.5*Math.abs((x-o)*(t[n].y-w)-(x-t[n].x)*(r-w)),u>p&&(p=u,h=t[n],f=n);s[l++]=h,g=f}return s[l++]=t[c],s}(l,h,p,n,i);break;case"min-max":d=function(t,e,i,n){let o,r,s,a,l,c,d,h,p,u,f=0,g=0;const m=[],y=e+i-1,b=t[e].x,v=t[y].x-b;for(o=e;o<e+i;++o){r=t[o],s=(r.x-b)/v*n,a=r.y;const e=0|s;if(e===l)a<p?(p=a,c=o):a>u&&(u=a,d=o),f=(g*f+r.x)/++g;else{const i=o-1;if(!bo(c)&&!bo(d)){const e=Math.min(c,d),n=Math.max(c,d);e!==h&&e!==i&&m.push({...t[e],x:f}),n!==h&&n!==i&&m.push({...t[n],x:f})}o>0&&i!==h&&m.push(t[i]),m.push(r),l=e,g=0,p=u=a,c=d=h=o}}return m}(l,h,p,n);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=d}}))},destroy(t){Uc(t)}};function Hc(t,e,i){const n=function(t){const e=t.options,i=e.fill;let n=ko(i&&i.target,i);return void 0===n&&(n=!!e.backgroundColor),!1!==n&&null!==n&&(!0===n?"origin":n)}(t);if(xo(n))return!isNaN(n.value)&&n;let o=parseFloat(n);return wo(o)&&Math.floor(o)===o?("-"!==n[0]&&"+"!==n[0]||(o=e+o),!(o===e||o<0||o>=i)&&o):["origin","start","end","stack","shape"].indexOf(n)>=0&&n}class Kc{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){const{x:n,y:o,radius:r}=this;return e=e||{start:0,end:Wo},t.arc(n,o,r,e.end,e.start,!0),!i.bounds}interpolate(t){const{x:e,y:i,radius:n}=this,o=t.angle;return{x:e+Math.cos(o)*n,y:i+Math.sin(o)*n,angle:o}}}function Yc(t,e,i){for(;e>t;e--){const t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function Gc(t,e,i){const n=[];for(let o=0;o<i.length;o++){const r=i[o],{first:s,last:a,point:l}=qc(r,e,"x");if(!(!l||s&&a))if(s)n.unshift(l);else if(t.push(l),!a)break}t.push(...n)}function qc(t,e,i){const n=t.interpolate(e,i);if(!n)return{};const o=n[i],r=t.segments,s=t.points;let a=!1,l=!1;for(let t=0;t<r.length;t++){const e=r[t],n=s[e.start][i],c=s[e.end][i];if(cr(o,n,c)){a=o===n,l=o===c;break}}return{first:a,last:l,point:n}}function Xc(t){const{chart:e,fill:i,line:n}=t;if(wo(i))return function(t,e){const i=t.getDatasetMeta(e);return i&&t.isDatasetVisible(e)?i.dataset:null}(e,i);if("stack"===i)return function(t){const{scale:e,index:i,line:n}=t,o=[],r=n.segments,s=n.points,a=function(t,e){const i=[],n=t.getMatchingVisibleMetas("line");for(let t=0;t<n.length;t++){const o=n[t];if(o.index===e)break;o.hidden||i.unshift(o.dataset)}return i}(e,i);a.push(Jc({x:null,y:e.bottom},n));for(let t=0;t<r.length;t++){const e=r[t];for(let t=e.start;t<=e.end;t++)Gc(o,s[t],a)}return new Ac({points:o,options:{}})}(t);if("shape"===i)return!0;const o=function(t){return(t.scale||{}).getPointPositionForValue?function(t){const{scale:e,fill:i}=t,n=e.options,o=e.getLabels().length,r=[],s=n.reverse?e.max:e.min,a=n.reverse?e.min:e.max;let l,c,d;if(d="start"===i?s:"end"===i?a:xo(i)?i.value:e.getBaseValue(),n.grid.circular)return c=e.getPointPositionForValue(0,s),new Kc({x:c.x,y:c.y,radius:e.getDistanceFromCenterForValue(d)});for(l=0;l<o;++l)r.push(e.getPointPositionForValue(l,d));return r}(t):function(t){const{scale:e={},fill:i}=t;let n,o=null;return"start"===i?o=e.bottom:"end"===i?o=e.top:xo(i)?o=e.getPixelForValue(i.value):e.getBasePixel&&(o=e.getBasePixel()),wo(o)?(n=e.isHorizontal(),{x:n?o:null,y:n?null:o}):null}(t)}(t);return o instanceof Kc?o:Jc(o,n)}function Jc(t,e){let i=[],n=!1;return vo(t)?(n=!0,i=t):i=function(t,e){const{x:i=null,y:n=null}=t||{},o=e.points,r=[];return e.segments.forEach((({start:t,end:e})=>{e=Yc(t,e,o);const s=o[t],a=o[e];null!==n?(r.push({x:s.x,y:n}),r.push({x:a.x,y:n})):null!==i&&(r.push({x:i,y:s.y}),r.push({x:i,y:a.y}))})),r}(t,e),i.length?new Ac({points:i,options:{tension:0},_loop:n,_fullLoop:n}):null}function Zc(t,e,i){let n=t[e].fill;const o=[e];let r;if(!i)return n;for(;!1!==n&&-1===o.indexOf(n);){if(!wo(n))return n;if(r=t[n],!r)return!1;if(r.visible)return n;o.push(n),n=r.fill}return!1}function Qc(t,e,i){t.beginPath(),e.path(t),t.lineTo(e.last().x,i),t.lineTo(e.first().x,i),t.closePath(),t.clip()}function td(t,e,i,n){if(n)return;let o=e[t],r=i[t];return"angle"===t&&(o=sr(o),r=sr(r)),{property:t,start:o,end:r}}function ed(t,e,i,n){return t&&e?n(t[i],e[i]):t?t[i]:e?e[i]:0}function id(t,e,i){const{top:n,bottom:o}=e.chart.chartArea,{property:r,start:s,end:a}=i||{};"x"===r&&(t.beginPath(),t.rect(s,n,a-s,o-n),t.clip())}function nd(t,e,i,n){const o=e.interpolate(i,n);o&&t.lineTo(o.x,o.y)}function od(t,e){const{line:i,target:n,property:o,color:r,scale:s}=e,a=function(t,e,i){const n=t.segments,o=t.points,r=e.points,s=[];for(const t of n){let{start:n,end:a}=t;a=Yc(n,a,o);const l=td(i,o[n],o[a],t.loop);if(!e.segments){s.push({source:t,target:l,start:o[n],end:o[a]});continue}const c=fa(e,l);for(const e of c){const n=td(i,r[e.start],r[e.end],e.loop),a=ua(t,o,n);for(const t of a)s.push({source:t,target:e,start:{[i]:ed(l,n,"start",Math.max)},end:{[i]:ed(l,n,"end",Math.min)}})}}return s}(i,n,o);for(const{source:e,target:l,start:c,end:d}of a){const{style:{backgroundColor:a=r}={}}=e,h=!0!==n;t.save(),t.fillStyle=a,id(t,s,h&&td(o,c,d)),t.beginPath();const p=!!i.pathSegment(t,e);let u;if(h){p?t.closePath():nd(t,n,d,o);const e=!!n.pathSegment(t,l,{move:p,reverse:!0});u=p&&e,u||nd(t,n,c,o)}t.closePath(),t.fill(u?"evenodd":"nonzero"),t.restore()}}function rd(t,e,i){const n=Xc(e),{line:o,scale:r,axis:s}=e,a=o.options,l=a.fill,c=a.backgroundColor,{above:d=c,below:h=c}=l||{};n&&o.points.length&&(ns(t,i),function(t,e){const{line:i,target:n,above:o,below:r,area:s,scale:a}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&r!==o&&(Qc(t,n,s.top),od(t,{line:i,target:n,color:o,scale:a,property:l}),t.restore(),t.save(),Qc(t,n,s.bottom)),od(t,{line:i,target:n,color:r,scale:a,property:l}),t.restore()}(t,{line:o,target:n,above:d,below:h,area:i,scale:r,axis:s}),os(t))}var sd={id:"filler",afterDatasetsUpdate(t,e,i){const n=(t.data.datasets||[]).length,o=[];let r,s,a,l;for(s=0;s<n;++s)r=t.getDatasetMeta(s),a=r.dataset,l=null,a&&a.options&&a instanceof Ac&&(l={visible:t.isDatasetVisible(s),index:s,fill:Hc(a,s,n),chart:t,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,o.push(l);for(s=0;s<n;++s)l=o[s],l&&!1!==l.fill&&(l.fill=Zc(o,s,i.propagate))},beforeDraw(t,e,i){const n="beforeDraw"===i.drawTime,o=t.getSortedVisibleDatasetMetas(),r=t.chartArea;for(let e=o.length-1;e>=0;--e){const i=o[e].$filler;i&&(i.line.updateControlPoints(r,i.axis),n&&rd(t.ctx,i,r))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;const n=t.getSortedVisibleDatasetMetas();for(let e=n.length-1;e>=0;--e){const i=n[e].$filler;i&&rd(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){const n=e.meta.$filler;n&&!1!==n.fill&&"beforeDatasetDraw"===i.drawTime&&rd(t.ctx,n,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const ad=(t,e)=>{let{boxHeight:i=e,boxWidth:n=e}=t;return t.usePointStyle&&(i=Math.min(i,e),n=Math.min(n,e)),{boxWidth:n,boxHeight:i,itemHeight:Math.max(e,i)}};class ld extends Il{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Ro(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter((e=>t.filter(e,this.chart.data)))),t.sort&&(e=e.sort(((e,i)=>t.sort(e,i,this.chart.data)))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display)return void(this.width=this.height=0);const i=t.labels,n=bs(i.font),o=n.size,r=this._computeTitleHeight(),{boxWidth:s,itemHeight:a}=ad(i,o);let l,c;e.font=n.string,this.isHorizontal()?(l=this.maxWidth,c=this._fitRows(r,o,s,a)+10):(c=this.maxHeight,l=this._fitCols(r,o,s,a)+10),this.width=Math.min(l,t.maxWidth||this.maxWidth),this.height=Math.min(c,t.maxHeight||this.maxHeight)}_fitRows(t,e,i,n){const{ctx:o,maxWidth:r,options:{labels:{padding:s}}}=this,a=this.legendHitBoxes=[],l=this.lineWidths=[0],c=n+s;let d=t;o.textAlign="left",o.textBaseline="middle";let h=-1,p=-c;return this.legendItems.forEach(((t,u)=>{const f=i+e/2+o.measureText(t.text).width;(0===u||l[l.length-1]+f+2*s>r)&&(d+=c,l[l.length-(u>0?0:1)]=0,p+=c,h++),a[u]={left:0,top:p,row:h,width:f,height:n},l[l.length-1]+=f+s})),d}_fitCols(t,e,i,n){const{ctx:o,maxHeight:r,options:{labels:{padding:s}}}=this,a=this.legendHitBoxes=[],l=this.columnSizes=[],c=r-t;let d=s,h=0,p=0,u=0,f=0;return this.legendItems.forEach(((t,r)=>{const g=i+e/2+o.measureText(t.text).width;r>0&&p+n+2*s>c&&(d+=h+s,l.push({width:h,height:p}),u+=h+s,f++,h=p=0),a[r]={left:u,top:p,col:f,width:g,height:n},h=Math.max(h,g),p+=n+s})),d+=h,l.push({width:h,height:p}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:n},rtl:o}}=this,r=la(o,this.left,this.width);if(this.isHorizontal()){let o=0,s=go(i,this.left+n,this.right-this.lineWidths[o]);for(const a of e)o!==a.row&&(o=a.row,s=go(i,this.left+n,this.right-this.lineWidths[o])),a.top+=this.top+t+n,a.left=r.leftForLtr(r.x(s),a.width),s+=a.width+n}else{let o=0,s=go(i,this.top+t+n,this.bottom-this.columnSizes[o].height);for(const a of e)a.col!==o&&(o=a.col,s=go(i,this.top+t+n,this.bottom-this.columnSizes[o].height)),a.top=s,a.left+=this.left+n,a.left=r.leftForLtr(r.x(a.left),a.width),s+=a.height+n}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){const t=this.ctx;ns(t,this),this._draw(),os(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:i,ctx:n}=this,{align:o,labels:r}=t,s=Xr.color,a=la(t.rtl,this.left,this.width),l=bs(r.font),{color:c,padding:d}=r,h=l.size,p=h/2;let u;this.drawTitle(),n.textAlign=a.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=l.string;const{boxWidth:f,boxHeight:g,itemHeight:m}=ad(r,h),y=this.isHorizontal(),b=this._computeTitleHeight();u=y?{x:go(o,this.left+d,this.right-i[0]),y:this.top+d+b,line:0}:{x:this.left+d,y:go(o,this.top+b+d,this.bottom-e[0].height),line:0},ca(this.ctx,t.textDirection);const v=m+d;this.legendItems.forEach(((x,w)=>{n.strokeStyle=x.fontColor||c,n.fillStyle=x.fontColor||c;const _=n.measureText(x.text).width,k=a.textAlign(x.textAlign||(x.textAlign=r.textAlign)),S=f+p+_;let R=u.x,O=u.y;a.setWidth(this.width),y?w>0&&R+S+d>this.right&&(O=u.y+=v,u.line++,R=u.x=go(o,this.left+d,this.right-i[u.line])):w>0&&O+v>this.bottom&&(R=u.x=R+e[u.line].width+d,u.line++,O=u.y=go(o,this.top+b+d,this.bottom-e[u.line].height)),function(t,e,i){if(isNaN(f)||f<=0||isNaN(g)||g<0)return;n.save();const o=ko(i.lineWidth,1);if(n.fillStyle=ko(i.fillStyle,s),n.lineCap=ko(i.lineCap,"butt"),n.lineDashOffset=ko(i.lineDashOffset,0),n.lineJoin=ko(i.lineJoin,"miter"),n.lineWidth=o,n.strokeStyle=ko(i.strokeStyle,s),n.setLineDash(ko(i.lineDash,[])),r.usePointStyle){const r={radius:f*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:o},s=a.xPlus(t,f/2);es(n,r,s,e+p)}else{const r=e+Math.max((h-g)/2,0),s=a.leftForLtr(t,f),l=ms(i.borderRadius);n.beginPath(),Object.values(l).some((t=>0!==t))?cs(n,{x:s,y:r,w:f,h:g,radius:l}):n.rect(s,r,f,g),n.fill(),0!==o&&n.stroke()}n.restore()}(a.x(R),O,x),R=((t,e,i,n)=>t===(n?"left":"right")?i:"center"===t?(e+i)/2:e)(k,R+f+p,y?R+S:this.right,t.rtl),function(t,e,i){as(n,i.text,t,e+m/2,l,{strikethrough:i.hidden,textAlign:a.textAlign(i.textAlign)})}(a.x(R),O,x),y?u.x+=S+d:u.y+=v})),da(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,i=bs(e.font),n=ys(e.padding);if(!e.display)return;const o=la(t.rtl,this.left,this.width),r=this.ctx,s=e.position,a=i.size/2,l=n.top+a;let c,d=this.left,h=this.width;if(this.isHorizontal())h=Math.max(...this.lineWidths),c=this.top+l,d=go(t.align,d,this.right-h);else{const e=this.columnSizes.reduce(((t,e)=>Math.max(t,e.height)),0);c=l+go(t.align,this.top,this.bottom-e-t.labels.padding-this._computeTitleHeight())}const p=go(s,d,d+h);r.textAlign=o.textAlign(fo(s)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=i.string,as(r,e.text,p,c,i)}_computeTitleHeight(){const t=this.options.title,e=bs(t.font),i=ys(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,n,o;if(cr(t,this.left,this.right)&&cr(e,this.top,this.bottom))for(o=this.legendHitBoxes,i=0;i<o.length;++i)if(n=o[i],cr(t,n.left,n.left+n.width)&&cr(e,n.top,n.top+n.height))return this.legendItems[i];return null}handleEvent(t){const e=this.options;if(!function(t,e){return!("mousemove"!==t||!e.onHover&&!e.onLeave)||!(!e.onClick||"click"!==t&&"mouseup"!==t)}(t.type,e))return;const i=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type){const n=this._hoveredItem,o=((t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index)(n,i);n&&!o&&Ro(e.onLeave,[t,n,this],this),this._hoveredItem=i,i&&!o&&Ro(e.onHover,[t,i,this],this)}else i&&Ro(e.onClick,[t,i,this],this)}}var cd={id:"legend",_element:ld,start(t,e,i){const n=t.legend=new ld({ctx:t.ctx,options:i,chart:t});vl.configure(t,n,i),vl.addBox(t,n)},stop(t){vl.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){const n=t.legend;vl.configure(t,n,i),n.options=i},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){const n=e.datasetIndex,o=i.chart;o.isDatasetVisible(n)?(o.hide(n),e.hidden=!0):(o.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:n,textAlign:o,color:r}}=t.legend.options;return t._getSortedDatasetMetas().map((t=>{const s=t.controller.getStyle(i?0:void 0),a=ys(s.borderWidth);return{text:e[t.index].label,fillStyle:s.backgroundColor,fontColor:r,hidden:!t.visible,lineCap:s.borderCapStyle,lineDash:s.borderDash,lineDashOffset:s.borderDashOffset,lineJoin:s.borderJoinStyle,lineWidth:(a.width+a.height)/4,strokeStyle:s.borderColor,pointStyle:n||s.pointStyle,rotation:s.rotation,textAlign:o||s.textAlign,borderRadius:0,datasetIndex:t.index}}),this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class dd extends Il{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const i=this.options;if(this.left=0,this.top=0,!i.display)return void(this.width=this.height=this.right=this.bottom=0);this.width=this.right=t,this.height=this.bottom=e;const n=vo(i.text)?i.text.length:1;this._padding=ys(i.padding);const o=n*bs(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:i,bottom:n,right:o,options:r}=this,s=r.align;let a,l,c,d=0;return this.isHorizontal()?(l=go(s,i,o),c=e+t,a=o-i):("left"===r.position?(l=i+t,c=go(s,n,e),d=-.5*Bo):(l=o-t,c=go(s,e,n),d=.5*Bo),a=n-e),{titleX:l,titleY:c,maxWidth:a,rotation:d}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const i=bs(e.font),n=i.lineHeight/2+this._padding.top,{titleX:o,titleY:r,maxWidth:s,rotation:a}=this._drawArgs(n);as(t,e.text,0,0,i,{color:e.color,maxWidth:s,rotation:a,textAlign:fo(e.align),textBaseline:"middle",translation:[o,r]})}}var hd={id:"title",_element:dd,start(t,e,i){!function(t,e){const i=new dd({ctx:t.ctx,options:e,chart:t});vl.configure(t,i,e),vl.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){const e=t.titleBlock;vl.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){const n=t.titleBlock;vl.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const pd=new WeakMap;var ud={id:"subtitle",start(t,e,i){const n=new dd({ctx:t.ctx,options:i,chart:t});vl.configure(t,n,i),vl.addBox(t,n),pd.set(t,n)},stop(t){vl.removeBox(t,pd.get(t)),pd.delete(t)},beforeUpdate(t,e,i){const n=pd.get(t);vl.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const fd={average(t){if(!t.length)return!1;let e,i,n=0,o=0,r=0;for(e=0,i=t.length;e<i;++e){const i=t[e].element;if(i&&i.hasValue()){const t=i.tooltipPosition();n+=t.x,o+=t.y,++r}}return{x:n/r,y:o/r}},nearest(t,e){if(!t.length)return!1;let i,n,o,r=e.x,s=e.y,a=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){const n=t[i].element;if(n&&n.hasValue()){const t=or(e,n.getCenterPoint());t<a&&(a=t,o=n)}}if(o){const t=o.tooltipPosition();r=t.x,s=t.y}return{x:r,y:s}}};function gd(t,e){return e&&(vo(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function md(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function yd(t,e){const{element:i,datasetIndex:n,index:o}=e,r=t.getDatasetMeta(n).controller,{label:s,value:a}=r.getLabelAndValue(o);return{chart:t,label:s,parsed:r.getParsed(o),raw:t.data.datasets[n].data[o],formattedValue:a,dataset:r.getDataset(),dataIndex:o,datasetIndex:n,element:i}}function bd(t,e){const i=t.chart.ctx,{body:n,footer:o,title:r}=t,{boxWidth:s,boxHeight:a}=e,l=bs(e.bodyFont),c=bs(e.titleFont),d=bs(e.footerFont),h=r.length,p=o.length,u=n.length,f=ys(e.padding);let g=f.height,m=0,y=n.reduce(((t,e)=>t+e.before.length+e.lines.length+e.after.length),0);y+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*c.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),y&&(g+=u*(e.displayColors?Math.max(a,l.lineHeight):l.lineHeight)+(y-u)*l.lineHeight+(y-1)*e.bodySpacing),p&&(g+=e.footerMarginTop+p*d.lineHeight+(p-1)*e.footerSpacing);let b=0;const v=function(t){m=Math.max(m,i.measureText(t).width+b)};return i.save(),i.font=c.string,Oo(t.title,v),i.font=l.string,Oo(t.beforeBody.concat(t.afterBody),v),b=e.displayColors?s+2+e.boxPadding:0,Oo(n,(t=>{Oo(t.before,v),Oo(t.lines,v),Oo(t.after,v)})),b=0,i.font=d.string,Oo(t.footer,v),i.restore(),m+=f.width,{width:m,height:g}}function vd(t,e,i,n){const{x:o,width:r}=i,{width:s,chartArea:{left:a,right:l}}=t;let c="center";return"center"===n?c=o<=(a+l)/2?"left":"right":o<=r/2?c="left":o>=s-r/2&&(c="right"),function(t,e,i,n){const{x:o,width:r}=n,s=i.caretSize+i.caretPadding;return"left"===t&&o+r+s>e.width||"right"===t&&o-r-s<0||void 0}(c,t,e,i)&&(c="center"),c}function xd(t,e,i){const n=i.yAlign||e.yAlign||function(t,e){const{y:i,height:n}=e;return i<n/2?"top":i>t.height-n/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||vd(t,e,i,n),yAlign:n}}function wd(t,e,i,n){const{caretSize:o,caretPadding:r,cornerRadius:s}=t,{xAlign:a,yAlign:l}=i,c=o+r,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=ms(s);let f=function(t,e){let{x:i,width:n}=t;return"right"===e?i-=n:"center"===e&&(i-=n/2),i}(e,a);const g=function(t,e,i){let{y:n,height:o}=t;return"top"===e?n+=i:n-="bottom"===e?o+i:o/2,n}(e,l,c);return"center"===l?"left"===a?f+=c:"right"===a&&(f-=c):"left"===a?f-=Math.max(d,p)+o:"right"===a&&(f+=Math.max(h,u)+o),{x:lr(f,0,n.width-e.width),y:lr(g,0,n.height-e.height)}}function _d(t,e,i){const n=ys(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-n.right:t.x+n.left}function kd(t){return gd([],md(t))}function Sd(t,e){const i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class Rd extends Il{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,i=this.options.setContext(this.getContext()),n=i.enabled&&e.options.animation&&i.animations,o=new _a(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=(this,xs(this.chart.getContext(),{tooltip:this,tooltipItems:this._tooltipItems,type:"tooltip"})))}getTitle(t,e){const{callbacks:i}=e,n=i.beforeTitle.apply(this,[t]),o=i.title.apply(this,[t]),r=i.afterTitle.apply(this,[t]);let s=[];return s=gd(s,md(n)),s=gd(s,md(o)),s=gd(s,md(r)),s}getBeforeBody(t,e){return kd(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const{callbacks:i}=e,n=[];return Oo(t,(t=>{const e={before:[],lines:[],after:[]},o=Sd(i,t);gd(e.before,md(o.beforeLabel.call(this,t))),gd(e.lines,o.label.call(this,t)),gd(e.after,md(o.afterLabel.call(this,t))),n.push(e)})),n}getAfterBody(t,e){return kd(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const{callbacks:i}=e,n=i.beforeFooter.apply(this,[t]),o=i.footer.apply(this,[t]),r=i.afterFooter.apply(this,[t]);let s=[];return s=gd(s,md(n)),s=gd(s,md(o)),s=gd(s,md(r)),s}_createItems(t){const e=this._active,i=this.chart.data,n=[],o=[],r=[];let s,a,l=[];for(s=0,a=e.length;s<a;++s)l.push(yd(this.chart,e[s]));return t.filter&&(l=l.filter(((e,n,o)=>t.filter(e,n,o,i)))),t.itemSort&&(l=l.sort(((e,n)=>t.itemSort(e,n,i)))),Oo(l,(e=>{const i=Sd(t.callbacks,e);n.push(i.labelColor.call(this,e)),o.push(i.labelPointStyle.call(this,e)),r.push(i.labelTextColor.call(this,e))})),this.labelColors=n,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=l,l}update(t,e){const i=this.options.setContext(this.getContext()),n=this._active;let o,r=[];if(n.length){const t=fd[i.position].call(this,n,this._eventPosition);r=this._createItems(i),this.title=this.getTitle(r,i),this.beforeBody=this.getBeforeBody(r,i),this.body=this.getBody(r,i),this.afterBody=this.getAfterBody(r,i),this.footer=this.getFooter(r,i);const e=this._size=bd(this,i),s=Object.assign({},t,e),a=xd(this.chart,i,s),l=wd(i,s,a,this.chart);this.xAlign=a.xAlign,this.yAlign=a.yAlign,o={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(o={opacity:0});this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,n){const o=this.getCaretPosition(t,i,n);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,i){const{xAlign:n,yAlign:o}=this,{caretSize:r,cornerRadius:s}=i,{topLeft:a,topRight:l,bottomLeft:c,bottomRight:d}=ms(s),{x:h,y:p}=t,{width:u,height:f}=e;let g,m,y,b,v,x;return"center"===o?(v=p+f/2,"left"===n?(g=h,m=g-r,b=v+r,x=v-r):(g=h+u,m=g+r,b=v-r,x=v+r),y=g):(m="left"===n?h+Math.max(a,c)+r:"right"===n?h+u-Math.max(l,d)-r:this.caretX,"top"===o?(b=p,v=b-r,g=m-r,y=m+r):(b=p+f,v=b+r,g=m+r,y=m-r),x=b),{x1:g,x2:m,x3:y,y1:b,y2:v,y3:x}}drawTitle(t,e,i){const n=this.title,o=n.length;let r,s,a;if(o){const l=la(i.rtl,this.x,this.width);for(t.x=_d(this,i.titleAlign,i),e.textAlign=l.textAlign(i.titleAlign),e.textBaseline="middle",r=bs(i.titleFont),s=i.titleSpacing,e.fillStyle=i.titleColor,e.font=r.string,a=0;a<o;++a)e.fillText(n[a],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s,a+1===o&&(t.y+=i.titleMarginBottom-s)}}_drawColorBox(t,e,i,n,o){const r=this.labelColors[i],s=this.labelPointStyles[i],{boxHeight:a,boxWidth:l,boxPadding:c}=o,d=bs(o.bodyFont),h=_d(this,"left",o),p=n.x(h),u=a<d.lineHeight?(d.lineHeight-a)/2:0,f=e.y+u;if(o.usePointStyle){const e={radius:Math.min(l,a)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},i=n.leftForLtr(p,l)+l/2,c=f+a/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,es(t,e,i,c),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,es(t,e,i,c)}else{t.lineWidth=r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const e=n.leftForLtr(p,l-c),i=n.leftForLtr(n.xPlus(p,1),l-c-2),s=ms(r.borderRadius);Object.values(s).some((t=>0!==t))?(t.beginPath(),t.fillStyle=o.multiKeyBackground,cs(t,{x:e,y:f,w:l,h:a,radius:s}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),cs(t,{x:i,y:f+1,w:l-2,h:a-2,radius:s}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(e,f,l,a),t.strokeRect(e,f,l,a),t.fillStyle=r.backgroundColor,t.fillRect(i,f+1,l-2,a-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){const{body:n}=this,{bodySpacing:o,bodyAlign:r,displayColors:s,boxHeight:a,boxWidth:l,boxPadding:c}=i,d=bs(i.bodyFont);let h=d.lineHeight,p=0;const u=la(i.rtl,this.x,this.width),f=function(i){e.fillText(i,u.x(t.x+p),t.y+h/2),t.y+=h+o},g=u.textAlign(r);let m,y,b,v,x,w,_;for(e.textAlign=r,e.textBaseline="middle",e.font=d.string,t.x=_d(this,g,i),e.fillStyle=i.bodyColor,Oo(this.beforeBody,f),p=s&&"right"!==g?"center"===r?l/2+c:l+2+c:0,v=0,w=n.length;v<w;++v){for(m=n[v],y=this.labelTextColors[v],e.fillStyle=y,Oo(m.before,f),b=m.lines,s&&b.length&&(this._drawColorBox(e,t,v,u,i),h=Math.max(d.lineHeight,a)),x=0,_=b.length;x<_;++x)f(b[x]),h=d.lineHeight;Oo(m.after,f)}p=0,h=d.lineHeight,Oo(this.afterBody,f),t.y-=o}drawFooter(t,e,i){const n=this.footer,o=n.length;let r,s;if(o){const a=la(i.rtl,this.x,this.width);for(t.x=_d(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=a.textAlign(i.footerAlign),e.textBaseline="middle",r=bs(i.footerFont),e.fillStyle=i.footerColor,e.font=r.string,s=0;s<o;++s)e.fillText(n[s],a.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+i.footerSpacing}}drawBackground(t,e,i,n){const{xAlign:o,yAlign:r}=this,{x:s,y:a}=t,{width:l,height:c}=i,{topLeft:d,topRight:h,bottomLeft:p,bottomRight:u}=ms(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(s+d,a),"top"===r&&this.drawCaret(t,e,i,n),e.lineTo(s+l-h,a),e.quadraticCurveTo(s+l,a,s+l,a+h),"center"===r&&"right"===o&&this.drawCaret(t,e,i,n),e.lineTo(s+l,a+c-u),e.quadraticCurveTo(s+l,a+c,s+l-u,a+c),"bottom"===r&&this.drawCaret(t,e,i,n),e.lineTo(s+p,a+c),e.quadraticCurveTo(s,a+c,s,a+c-p),"center"===r&&"left"===o&&this.drawCaret(t,e,i,n),e.lineTo(s,a+d),e.quadraticCurveTo(s,a,s+d,a),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,i=this.$animations,n=i&&i.x,o=i&&i.y;if(n||o){const i=fd[t.position].call(this,this._active,this._eventPosition);if(!i)return;const r=this._size=bd(this,t),s=Object.assign({},i,this._size),a=xd(e,t,s),l=wd(t,s,a,e);n._to===l.x&&o._to===l.y||(this.xAlign=a.xAlign,this.yAlign=a.yAlign,this.width=r.width,this.height=r.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}draw(t){const e=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(e);const n={width:this.width,height:this.height},o={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const r=ys(e.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&s&&(t.save(),t.globalAlpha=i,this.drawBackground(o,t,n,e),ca(t,e.textDirection),o.y+=r.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),da(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const i=this._active,n=t.map((({datasetIndex:t,index:e})=>{const i=this.chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}})),o=!Eo(i,n),r=this._positionChanged(n,e);(o||r)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,o=this._active||[],r=this._getActiveElements(t,o,e,i),s=this._positionChanged(r,t),a=e||!Eo(r,o)||s;return a&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),a}_getActiveElements(t,e,i,n){const o=this.options;if("mouseout"===t.type)return[];if(!n)return e;const r=this.chart.getElementsAtEventForMode(t,o.mode,o,i);return o.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:i,caretY:n,options:o}=this,r=fd[o.position].call(this,t,e);return!1!==r&&(i!==r.x||n!==r.y)}}Rd.positioners=fd;var Od={id:"tooltip",_element:Rd,positioners:fd,afterInit(t,e,i){i&&(t.tooltip=new Rd({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){const e=t.tooltip,i={tooltip:e};!1!==t.notifyPlugins("beforeTooltipDraw",i)&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i))},afterEvent(t,e){if(t.tooltip){const i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:mo,title(t){if(t.length>0){const e=t[0],i=e.chart.data.labels,n=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return i[e.dataIndex]}return""},afterTitle:mo,beforeBody:mo,beforeLabel:mo,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const i=t.formattedValue;return bo(i)||(e+=i),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:mo,afterBody:mo,beforeFooter:mo,footer:mo,afterFooter:mo}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Ed=Object.freeze({__proto__:null,Decimation:Vc,Filler:sd,Legend:cd,SubTitle:ud,Title:hd,Tooltip:Od});class Pd extends Kl{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const t=this.getLabels();for(const{index:i,label:n}of e)t[i]===n&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(bo(t))return null;const i=this.getLabels();return((t,e)=>null===t?null:lr(Math.round(t),0,e))(e=isFinite(e)&&i[e]===t?e:function(t,e,i,n){const o=t.indexOf(e);return-1===o?((t,e,i,n)=>("string"==typeof e?(i=t.push(e)-1,n.unshift({index:i,label:e})):isNaN(e)&&(i=null),i))(t,e,i,n):o!==t.lastIndexOf(e)?i:o}(i,t,ko(e,t),this._addedLabels),i.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:i,max:n}=this.getMinMax(!0);"ticks"===this.options.bounds&&(t||(i=0),e||(n=this.getLabels().length-1)),this.min=i,this.max=n}buildTicks(){const t=this.min,e=this.max,i=this.options.offset,n=[];let o=this.getLabels();o=0===t&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)n.push({value:i});return n}getLabelForValue(t){const e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function $d(t,e,{horizontal:i,minRotation:n}){const o=tr(n),r=(i?Math.sin(o):Math.cos(o))||.001,s=.75*e*(""+t).length;return Math.min(e/r,s)}Pd.id="category",Pd.defaults={ticks:{callback:Pd.prototype.getLabelForValue}};class Td extends Kl{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return bo(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds();let{min:n,max:o}=this;const r=t=>n=e?n:t,s=t=>o=i?o:t;if(t){const t=qo(n),e=qo(o);t<0&&e<0?s(0):t>0&&e>0&&r(0)}if(n===o){let e=1;(o>=Number.MAX_SAFE_INTEGER||n<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*o)),s(o+e),t||r(n-e)}this.min=n,this.max=o}getTickLimit(){const t=this.options.ticks;let e,{maxTicksLimit:i,stepSize:n}=t;return n?(e=Math.ceil(this.max/n)-Math.floor(this.min/n)+1,e>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${e} ticks. Limiting to 1000.`),e=1e3)):(e=this.computeTickLimit(),i=i||11),i&&(e=Math.min(i,e)),e}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let i=this.getTickLimit();i=Math.max(2,i);const n=function(t,e){const i=[],{bounds:n,step:o,min:r,max:s,precision:a,count:l,maxTicks:c,maxDigits:d,includeBounds:h}=t,p=o||1,u=c-1,{min:f,max:g}=e,m=!bo(r),y=!bo(s),b=!bo(l),v=(g-f)/(d+1);let x,w,_,k,S=Xo((g-f)/u/p)*p;if(S<1e-14&&!m&&!y)return[{value:f},{value:g}];k=Math.ceil(g/S)-Math.floor(f/S),k>u&&(S=Xo(k*S/u/p)*p),bo(a)||(x=Math.pow(10,a),S=Math.ceil(S*x)/x),"ticks"===n?(w=Math.floor(f/S)*S,_=Math.ceil(g/S)*S):(w=f,_=g),m&&y&&o&&function(t,e){const i=Math.round(t);return i-e<=t&&i+e>=t}((s-r)/o,S/1e3)?(k=Math.round(Math.min((s-r)/S,c)),S=(s-r)/k,w=r,_=s):b?(w=m?r:w,_=y?s:_,k=l-1,S=(_-w)/k):(k=(_-w)/S,k=Zo(k,Math.round(k),S/1e3)?Math.round(k):Math.ceil(k));const R=Math.max(ir(S),ir(w));x=Math.pow(10,bo(a)?R:a),w=Math.round(w*x)/x,_=Math.round(_*x)/x;let O=0;for(m&&(h&&w!==r?(i.push({value:r}),w<r&&O++,Zo(Math.round((w+O*S)*x)/x,r,$d(r,v,t))&&O++):w<r&&O++);O<k;++O)i.push({value:Math.round((w+O*S)*x)/x});return y&&h&&_!==s?i.length&&Zo(i[i.length-1].value,s,$d(s,v,t))?i[i.length-1].value=s:i.push({value:s}):y&&_!==s||i.push({value:_}),i}({maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},this._range||this);return"ticks"===t.bounds&&Qo(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}configure(){const t=this.ticks;let e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){const n=(i-e)/Math.max(t.length-1,1)/2;e-=n,i+=n}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return aa(t,this.chart.options.locale,this.options.ticks.format)}}class Md extends Td{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=wo(t)?t:0,this.max=wo(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,i=tr(this.options.ticks.minRotation),n=(t?Math.sin(i):Math.cos(i))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/n))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function Ad(t){return 1==t/Math.pow(10,Math.floor(Go(t)))}Md.id="linear",Md.defaults={ticks:{callback:Nl.formatters.numeric}};class Dd extends Kl{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const i=Td.prototype.parse.apply(this,[t,e]);if(0!==i)return wo(i)&&i>0?i:null;this._zero=!0}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=wo(t)?Math.max(0,t):null,this.max=wo(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let i=this.min,n=this.max;const o=e=>i=t?i:e,r=t=>n=e?n:t,s=(t,e)=>Math.pow(10,Math.floor(Go(t))+e);i===n&&(i<=0?(o(1),r(10)):(o(s(i,-1)),r(s(n,1)))),i<=0&&o(s(n,-1)),n<=0&&r(s(i,1)),this._zero&&this.min!==this._suggestedMin&&i===s(this.min,0)&&o(s(i,-1)),this.min=i,this.max=n}buildTicks(){const t=this.options,e=function(t,e){const i=Math.floor(Go(e.max)),n=Math.ceil(e.max/Math.pow(10,i)),o=[];let r=_o(t.min,Math.pow(10,Math.floor(Go(e.min)))),s=Math.floor(Go(r)),a=Math.floor(r/Math.pow(10,s)),l=s<0?Math.pow(10,Math.abs(s)):1;do{o.push({value:r,major:Ad(r)}),++a,10===a&&(a=1,++s,l=s>=0?1:l),r=Math.round(a*Math.pow(10,s)*l)/l}while(s<i||s===i&&a<n);const c=_o(t.max,r);return o.push({value:c,major:Ad(r)}),o}({min:this._userMin,max:this._userMax},this);return"ticks"===t.bounds&&Qo(e,this,"value"),t.reverse?(e.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),e}getLabelForValue(t){return void 0===t?"0":aa(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=Go(t),this._valueRange=Go(this.max)-Go(t)}getPixelForValue(t){return void 0!==t&&0!==t||(t=this.min),null===t||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(Go(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function Cd(t){const e=t.ticks;if(e.display&&t.display){const t=ys(e.backdropPadding);return ko(e.font&&e.font.size,Xr.font.size)+t.height}return 0}function jd(t,e,i,n,o){return t===n||t===o?{start:e-i/2,end:e+i/2}:t<n||t>o?{start:e-i,end:e}:{start:e,end:e+i}}function Id(t,e,i,n,o){const r=Math.abs(Math.sin(i)),s=Math.abs(Math.cos(i));let a=0,l=0;n.start<e.l?(a=(e.l-n.start)/r,t.l=Math.min(t.l,e.l-a)):n.end>e.r&&(a=(n.end-e.r)/r,t.r=Math.max(t.r,e.r+a)),o.start<e.t?(l=(e.t-o.start)/s,t.t=Math.min(t.t,e.t-l)):o.end>e.b&&(l=(o.end-e.b)/s,t.b=Math.max(t.b,e.b+l))}function Ld(t){return 0===t||180===t?"center":t<180?"left":"right"}function Nd(t,e,i){return"right"===i?t-=e:"center"===i&&(t-=e/2),t}function zd(t,e,i){return 90===i||270===i?t-=e/2:(i>270||i<90)&&(t-=e),t}function Bd(t,e,i,n){const{ctx:o}=t;if(i)o.arc(t.xCenter,t.yCenter,e,0,Wo);else{let i=t.getPointPosition(0,e);o.moveTo(i.x,i.y);for(let r=1;r<n;r++)i=t.getPointPosition(r,e),o.lineTo(i.x,i.y)}}Dd.id="logarithmic",Dd.defaults={ticks:{callback:Nl.formatters.logarithmic,major:{enabled:!0}}};class Wd extends Td{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ys(Cd(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=wo(t)&&!isNaN(t)?t:0,this.max=wo(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Cd(this.options))}generateTickLabels(t){Td.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map(((t,e)=>{const i=Ro(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""})).filter(((t,e)=>this.chart.getDataVisibility(e)))}fit(){const t=this.options;t.display&&t.pointLabels.display?function(t){const e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),n=[],o=[],r=t._pointLabels.length,s=t.options.pointLabels,a=s.centerPointLabels?Bo/r:0;for(let h=0;h<r;h++){const r=s.setContext(t.getPointLabelContext(h));o[h]=r.padding;const p=t.getPointPosition(h,t.drawingArea+o[h],a),u=bs(r.font),f=(l=t.ctx,c=u,d=vo(d=t._pointLabels[h])?d:[d],{w:Zr(l,c.string,d),h:d.length*c.lineHeight});n[h]=f;const g=sr(t.getIndexAngle(h)+a),m=Math.round(er(g));Id(i,e,g,jd(m,p.x,f.w,0,180),jd(m,p.y,f.h,90,270))}var l,c,d;t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){const n=[],o=t._pointLabels.length,r=t.options,s=Cd(r)/2,a=t.drawingArea,l=r.pointLabels.centerPointLabels?Bo/o:0;for(let r=0;r<o;r++){const o=t.getPointPosition(r,a+s+i[r],l),c=Math.round(er(sr(o.angle+Ho))),d=e[r],h=zd(o.y,d.h,c),p=Ld(c),u=Nd(o.x,d.w,p);n.push({x:o.x,y:h,textAlign:p,left:u,top:h,right:u+d.w,bottom:h+d.h})}return n}(t,n,o)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,n))}getIndexAngle(t){return sr(t*(Wo/(this._pointLabels.length||1))+tr(this.options.startAngle||0))}getDistanceFromCenterForValue(t){if(bo(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(bo(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const i=e[t];return function(t,e,i){return xs(t,{label:i,index:e,type:"pointLabel"})}(this.getContext(),t,i)}}getPointPosition(t,e,i=0){const n=this.getIndexAngle(t)-Ho+i;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:i,right:n,bottom:o}=this._pointLabelItems[t];return{left:e,top:i,right:n,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const i=this.ctx;i.save(),i.beginPath(),Bd(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:i,grid:n}=e,o=this._pointLabels.length;let r,s,a;if(e.pointLabels.display&&function(t,e){const{ctx:i,options:{pointLabels:n}}=t;for(let o=e-1;o>=0;o--){const e=n.setContext(t.getPointLabelContext(o)),r=bs(e.font),{x:s,y:a,textAlign:l,left:c,top:d,right:h,bottom:p}=t._pointLabelItems[o],{backdropColor:u}=e;if(!bo(u)){const t=ys(e.backdropPadding);i.fillStyle=u,i.fillRect(c-t.left,d-t.top,h-c+t.width,p-d+t.height)}as(i,t._pointLabels[o],s,a+r.lineHeight/2,r,{color:e.color,textAlign:l,textBaseline:"middle"})}}(this,o),n.display&&this.ticks.forEach(((t,e)=>{0!==e&&(s=this.getDistanceFromCenterForValue(t.value),function(t,e,i,n){const o=t.ctx,r=e.circular,{color:s,lineWidth:a}=e;!r&&!n||!s||!a||i<0||(o.save(),o.strokeStyle=s,o.lineWidth=a,o.setLineDash(e.borderDash),o.lineDashOffset=e.borderDashOffset,o.beginPath(),Bd(t,i,r,n),o.closePath(),o.stroke(),o.restore())}(this,n.setContext(this.getContext(e-1)),s,o))})),i.display){for(t.save(),r=o-1;r>=0;r--){const n=i.setContext(this.getPointLabelContext(r)),{color:o,lineWidth:l}=n;l&&o&&(t.lineWidth=l,t.strokeStyle=o,t.setLineDash(n.borderDash),t.lineDashOffset=n.borderDashOffset,s=this.getDistanceFromCenterForValue(e.ticks.reverse?this.min:this.max),a=this.getPointPosition(r,s),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(a.x,a.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;const n=this.getIndexAngle(0);let o,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach(((n,s)=>{if(0===s&&!e.reverse)return;const a=i.setContext(this.getContext(s)),l=bs(a.font);if(o=this.getDistanceFromCenterForValue(this.ticks[s].value),a.showLabelBackdrop){t.font=l.string,r=t.measureText(n.label).width,t.fillStyle=a.backdropColor;const e=ys(a.backdropPadding);t.fillRect(-r/2-e.left,-o-l.size/2-e.top,r+e.width,l.size+e.height)}as(t,n.label,0,-o,l,{color:a.color})})),t.restore()}drawTitle(){}}Wd.id="radialLinear",Wd.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Nl.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},Wd.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},Wd.descriptors={angleLines:{_fallback:"grid"}};const Fd={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ud=Object.keys(Fd);function Vd(t,e){return t-e}function Hd(t,e){if(bo(e))return null;const i=t._adapter,{parser:n,round:o,isoWeekday:r}=t._parseOpts;let s=e;return"function"==typeof n&&(s=n(s)),wo(s)||(s="string"==typeof n?i.parse(s,n):i.parse(s)),null===s?null:(o&&(s="week"!==o||!Jo(r)&&!0!==r?i.startOf(s,o):i.startOf(s,"isoWeek",r)),+s)}function Kd(t,e,i,n){const o=Ud.length;for(let r=Ud.indexOf(t);r<o-1;++r){const t=Fd[Ud[r]],o=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(o*t.size))<=n)return Ud[r]}return Ud[o-1]}function Yd(t,e,i){if(i){if(i.length){const{lo:n,hi:o}=ws(i,e);t[i[n]>=e?i[n]:i[o]]=!0}}else t[e]=!0}function Gd(t,e,i){const n=[],o={},r=e.length;let s,a;for(s=0;s<r;++s)a=e[s],o[a]=s,n.push({value:a,major:!1});return 0!==r&&i?function(t,e,i,n){const o=t._adapter,r=+o.startOf(e[0].value,n),s=e[e.length-1].value;let a,l;for(a=r;a<=s;a=+o.add(a,1,n))l=i[a],l>=0&&(e[l].major=!0);return e}(t,n,o,i):n}class qd extends Kl{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const i=t.time||(t.time={}),n=this._adapter=new tl._date(t.adapters.date);Ao(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Hd(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,i=t.time.unit||"day";let{min:n,max:o,minDefined:r,maxDefined:s}=this.getUserBounds();function a(t){r||isNaN(t.min)||(n=Math.min(n,t.min)),s||isNaN(t.max)||(o=Math.max(o,t.max))}r&&s||(a(this._getLabelBounds()),"ticks"===t.bounds&&"labels"===t.ticks.source||a(this.getMinMax(!1))),n=wo(n)&&!isNaN(n)?n:+e.startOf(Date.now(),i),o=wo(o)&&!isNaN(o)?o:+e.endOf(Date.now(),i)+1,this.min=Math.min(n,o-1),this.max=Math.max(n+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){const t=this.options,e=t.time,i=t.ticks,n="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const o=this.min,r=function(t,e,i){let n=0,o=t.length;for(;n<o&&t[n]<e;)n++;for(;o>n&&t[o-1]>i;)o--;return n>0||o<t.length?t.slice(n,o):t}(n,o,this.max);return this._unit=e.unit||(i.autoSkip?Kd(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):function(t,e,i,n,o){for(let r=Ud.length-1;r>=Ud.indexOf(i);r--){const i=Ud[r];if(Fd[i].common&&t._adapter.diff(o,n,i)>=e-1)return i}return Ud[i?Ud.indexOf(i):0]}(this,r.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=Ud.indexOf(t)+1,i=Ud.length;e<i;++e)if(Fd[Ud[e]].common)return Ud[e]}(this._unit):void 0,this.initOffsets(n),t.reverse&&r.reverse(),Gd(this,r,this._majorUnit)}initOffsets(t){let e,i,n=0,o=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),n=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),o=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;n=lr(n,0,r),o=lr(o,0,r),this._offsets={start:n,end:o,factor:1/(n+1+o)}}_generate(){const t=this._adapter,e=this.min,i=this.max,n=this.options,o=n.time,r=o.unit||Kd(o.minUnit,e,i,this._getLabelCapacity(e)),s=ko(o.stepSize,1),a="week"===r&&o.isoWeekday,l=Jo(a)||!0===a,c={};let d,h,p=e;if(l&&(p=+t.startOf(p,"isoWeek",a)),p=+t.startOf(p,l?"day":r),t.diff(i,e,r)>1e5*s)throw new Error(e+" and "+i+" are too far apart with stepSize of "+s+" "+r);const u="data"===n.ticks.source&&this.getDataTimestamps();for(d=p,h=0;d<i;d=+t.add(d,s,r),h++)Yd(c,d,u);return d!==i&&"ticks"!==n.bounds&&1!==h||Yd(c,d,u),Object.keys(c).sort(((t,e)=>t-e)).map((t=>+t))}getLabelForValue(t){const e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,n){const o=this.options,r=o.time.displayFormats,s=this._unit,a=this._majorUnit,l=s&&r[s],c=a&&r[a],d=i[e],h=a&&c&&d&&d.major,p=this._adapter.format(t,n||(h?c:l)),u=o.ticks.callback;return u?Ro(u,[p,e,i],this):p}generateTickLabels(t){let e,i,n;for(e=0,i=t.length;e<i;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,i=this.ctx.measureText(t).width,n=tr(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(n),r=Math.sin(n),s=this._resolveTickFontOptions(0).size;return{w:i*o+s*r,h:i*r+s*o}}_getLabelCapacity(t){const e=this.options.time,i=e.displayFormats,n=i[e.unit]||i.millisecond,o=this._tickFormatFunction(t,0,Gd(this,[t],this._majorUnit),n),r=this._getLabelSize(o),s=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return s>0?s:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(t=0,e=n.length;t<e;++t)i=i.concat(n[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){const t=this._cache.labels||[];let e,i;if(t.length)return t;const n=this.getLabels();for(e=0,i=n.length;e<i;++e)t.push(Hd(this,n[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Os(t.sort(Vd))}}function Xd(t,e,i){let n,o,r,s,a=0,l=t.length-1;i?(e>=t[a].pos&&e<=t[l].pos&&({lo:a,hi:l}=_s(t,"pos",e)),({pos:n,time:r}=t[a]),({pos:o,time:s}=t[l])):(e>=t[a].time&&e<=t[l].time&&({lo:a,hi:l}=_s(t,"time",e)),({time:n,pos:r}=t[a]),({time:o,pos:s}=t[l]));const c=o-n;return c?r+(s-r)*(e-n)/c:r}qd.id="time",qd.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class Jd extends qd{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Xd(e,this.min),this._tableRange=Xd(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:i}=this,n=[],o=[];let r,s,a,l,c;for(r=0,s=t.length;r<s;++r)l=t[r],l>=e&&l<=i&&n.push(l);if(n.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(r=0,s=n.length;r<s;++r)c=n[r+1],a=n[r-1],l=n[r],Math.round((c+a)/2)!==l&&o.push({time:l,pos:r/(s-1)});return o}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(Xd(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return Xd(this._table,i*this._tableRange+this._minPos,!0)}}Jd.id="timeseries",Jd.defaults=qd.defaults;const Zd=[Ja,Wc,Ed,Object.freeze({__proto__:null,CategoryScale:Pd,LinearScale:Md,LogarithmicScale:Dd,RadialLinearScale:Wd,TimeScale:qd,TimeSeriesScale:Jd})];bc.register(...Zd);const Qd=bc;var th=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},eh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let ih=class extends Q{updated(t){t.has("options")&&this.options&&this.loadCanvas().then((()=>{console.log("canvas loaded.")}))}render(){return D` <div style="width: 100%; height:100%;">
      <canvas id="bar-chart" width="max-content" height="max-content"></canvas>
    </div>`}loadCanvas(){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const t=yield this.canvas;t&&this.options&&(console.log(this.options),new Qd(t,this.options))}))}};ih.styles=o`
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,th([at({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector("#bar-chart")},enumerable:!0,configurable:!0})}),eh("design:type",Object)],ih.prototype,"canvas",void 0),th([st({type:Object,converter:Object}),eh("design:type",Object)],ih.prototype,"options",void 0),ih=th([ot("nidoca-chart-js-wrapper")],ih);let nh=class extends Q{render(){return D`
            <nidoca-form-login class="left"></nidoca-form-login>
            <nidoca-img class="right"
                        src="http://nidoca.eu/img/IMG_0524.jpg"
            ></nidoca-img>
        `}};nh.styles=o`
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
`,nh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-login")],nh);var oh,rh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},sh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};!function(t){t.anchor="anchor",t.page="page"}(oh||(oh={}));let ah=class extends Q{constructor(){super(...arguments),this.loggedIn=!1}updated(t){if(super.updated(t),t.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),t.has("route")&&this.root){for(let t=0;t<this.root.childs.length;t++){let e=this.root.childs[t];if(e.route==this.route){this.contentComponent=document.createElement(e.rootComponent);break}}this.requestUpdate()}}render(){var t;return this.loggedIn?D`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?D`${this.contentComponent}`:D``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(t=this.root)||void 0===t?void 0:t.childs.map((t=>D`
                        <nidoca-menu-item text="${t.name}"
                                          @click="${()=>{this.routeTo(t)}}"></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:D`
            <nidoca-page-login @nidoca-form-login-submit="${t=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:t.detail,bubbles:!0,composed:!0}))}}"></nidoca-page-login>`}routeTo(t){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:t.route,bubbles:!0,composed:!0}))}};var lh;rh([st({type:Array}),sh("design:type",Object)],ah.prototype,"root",void 0),rh([st({type:Boolean}),sh("design:type",Boolean)],ah.prototype,"loggedIn",void 0),rh([st({type:String,converter:String}),sh("design:type",Object)],ah.prototype,"route",void 0),ah=rh([ot("nidoca-app")],ah),et.getUniqueInstance().initDefaultComponents(),console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information."),function(t){t.STRING="String",t.NUMBER="Number",t.BOOLEAN="Boolean",t.COMBOBOX="Class",t.ARRAY="Array",t.UNDEFINED="undefined"}(lh||(lh={}));class ch{constructor(t,e){this.propertyName=t,this.propertyValue=e}getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}getRenderType(){return this.isConverterTypeArray()?lh.ARRAY:this.isPrimitive()||this.isArray()?this.isArray()?lh.UNDEFINED:this.getTypeName():lh.COMBOBOX}getEnumValues(){const t=[];return Object.values(this.getType()).forEach((e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})})),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){const e=this.getEnumValues();for(let i=0;i<e.length;i++){const n=e[i];if(n.key==t)return n.value}}isConverterTypeArray(){return"Array"==this.getConverterTypeName()}isArray(){return"Array"==this.getTypeName()}isPrimitive(){return"String"==this.getTypeName()||"Boolean"==this.getTypeName()||"Number"==this.getTypeName()}getType(){var t;return null===(t=this.propertyValue)||void 0===t?void 0:t.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){var t;return null===(t=this.getConverterType())||void 0===t?void 0:t.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}}class dh{constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map((t=>t.name?t.name:"default"))}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let i=[];if(e&&(e.tagName==t&&i.push(e),e.children.length>0)){const n=null==e?void 0:e.children;for(let e=0;e<n.length;e++)i=i.concat(this.getElementsByTagName(t,n.item(e)))}return i}getPropertieNames(){const t=this.instance.constructor;return Object.getOwnPropertyNames(t)}getProperties(){const t=this.instance.constructor.elementProperties;if(!t)throw new Error("selected item malformed. no lit element ? wrong lit version ?");const e=[];for(const i of Array.from(t.keys()))e.push(new ch(i,t.get(i)));return e}}class hh{constructor(t){this.propertyWrapper=t}getInputElement(t){if(null==t)return D``;const e=t.classWrapper;if(null==e)return D``;switch(this.propertyWrapper.getRenderType()){case lh.STRING:return D`
                    <nidoca-form-text .textType="${oe.TEXT}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${e.instance[this.propertyWrapper.propertyName]}"
                                      @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    /></nidoca-form-text>`;case lh.NUMBER:return D`
                    <nidoca-form-text
                            label="${this.propertyWrapper.propertyName}"
                            .textType="${oe.NUMBER}"
                            value="${e.instance[this.propertyWrapper.propertyName]}"
                            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    ></nidoca-form-text>`;case lh.BOOLEAN:return D`
                    <nidoca-form-switch
                            label="${this.propertyWrapper.propertyName}"
                            type="checkbox"
                            .checked="${e.instance[this.propertyWrapper.propertyName]}"
                            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    ></nidoca-form-switch>`;case lh.COMBOBOX:return D`
                    <nidoca-form-combobox
                            label="${this.propertyWrapper.propertyName}"
                            .options="${ie.enumToOptions(this.propertyWrapper.getType(),!1)}"
                            value="${Object.keys(this.propertyWrapper.getType()).filter((t=>this.propertyWrapper.getType()[t]==e.instance[this.propertyWrapper.propertyName]))[0]}"
                            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(i.target.getOutputData().value),t.parent.requestUpdate()}}"
                    >
                    </nidoca-form-combobox>`;case lh.ARRAY:return D`
                    <nidoca-form-combobox
                            label="${this.propertyWrapper.propertyName}"
                            .options="${ie.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
                            .multiple="${!0}"
                            size="5"
                            .value="${e.instance[this.propertyWrapper.propertyName]}"
                            @input="${t=>{e.instance[this.propertyWrapper.propertyName]=t.target.getOutputData().value,e.instance.requestUpdate()}}"
                    >
                    </nidoca-form-combobox>
                `;default:return D``}}getAsHtml(t){switch(this.propertyWrapper.getConverterTypeName()){case lh.BOOLEAN:return`.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case lh.ARRAY:return"";case lh.COMBOBOX:return`${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}"\n`;default:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case lh.COMBOBOX:return`.${this.propertyWrapper.propertyName}="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case lh.STRING:return`${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case lh.ARRAY:return`.${this.propertyWrapper.propertyName}="\${[]}"\n`;default:return`.${this.propertyWrapper.propertyName}="\${}"\n`}}getAsAngular(t){switch(this.propertyWrapper.getRenderType()){case lh.COMBOBOX:return`[${this.propertyWrapper.propertyName}]="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(t.classWrapper.instance[this.propertyWrapper.propertyName])}}"\n`;case lh.STRING:return`[${this.propertyWrapper.propertyName}]="${t.classWrapper.instance[this.propertyWrapper.propertyName]}"\n`;case lh.ARRAY:return`[${this.propertyWrapper.propertyName}]="\${[]}"\n`;default:return`[${this.propertyWrapper.propertyName}]="\${}"\n`}}getAsJavascript(t){switch(this.propertyWrapper.getConverterTypeName()){case lh.COMBOBOX:case lh.ARRAY:return"";case lh.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}getAsTypescript(t){switch(this.propertyWrapper.getConverterTypeName()){case lh.COMBOBOX:case lh.ARRAY:return"";case lh.STRING:return`element.${this.propertyWrapper.propertyName}="${t.classWrapper.instance[this.propertyWrapper.propertyName]}";\n`;default:return`element.${this.propertyWrapper.propertyName}=${t.classWrapper.instance[this.propertyWrapper.propertyName]};\n`}}}class ph{constructor(t,e){this.parent=t,this.classWrapper=e}getAsHtml(){return`\n<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsHtml(this))).join("")}></${this.classWrapper.getTagName()}>\n`}getAsJavascript(){return`\n<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>\n<script>\n  const element = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsJavascript(this))).join("  ")}<\/script>\n`}getTypescript(){return`\nconst element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsTypescript(this))).join("  ")}\n`}getAsLit(){return`\n<${this.classWrapper.getTagName()}\n  ${this.getPropertyGuiWrappers().map((t=>t.getAsLit(this))).join("  ")}>\n`}getAsAngular(){return`<${this.classWrapper.getTagName()}\n${this.getPropertyGuiWrappers().map((t=>t.getAsAngular(this))).join("  ")}></${this.classWrapper.getTagName()}>\n`}removeOwnTag(t){return t.indexOf(">")>-1&&(t=t.substr(t.indexOf(">")+1,t.length)),t}renderPropertyGui(){const t=[];for(const e of this.getPropertyGuiWrappers())t.push(D`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){const t=[];for(const e of this.classWrapper.getProperties())t.push(new hh(e));return t}getPropertieNames(){const t=[];return this.getPropertyGuiWrappers().map((e=>{t.push(e.propertyWrapper.propertyName)})),t}hasProperties(){return this.getPropertieNames().length>0}}var uh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},fh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let gh=class extends Q{constructor(){super(...arguments),this.webcomponentGuiWrapper=null,this.customEventNames=[]}updated(t){t.has("element")&&null!=this.element&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new ph(this,new dh(this.element)),this.requestUpdate())}render(){var t,e,i,n,o,r,s,a;return D`
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
            <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}slotChanged(t){const e=t.target;if(null==e)return;const i=e.assignedElements()[0];i instanceof HTMLElement&&(this.element=i)}toAttributeRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t.propertyWrapper.propertyName),i.push(t.propertyWrapper.getTypeName()),i.push(t.propertyWrapper.getConverterTypeName()),i.push(t.propertyWrapper.getRenderType()),e.push(i),i})),e}toSlotRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}toCustomEventRows(t){const e=[[]];return t&&t.map((t=>{const i=[];return i.push(t),e.push(i),i})),e}};gh.styles=o`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
    
    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
    
  `,uh([st({type:Array}),fh("design:type",Array)],gh.prototype,"customEventNames",void 0),uh([st({type:Object}),fh("design:type",Object)],gh.prototype,"element",void 0),gh=uh([ot("webcomponent-viewer")],gh);var mh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let yh=class extends Q{constructor(){super(...arguments),this.componentMap=new Map,this.options=[]}render(){return D`
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


        `}slotChanged(t){const e=t.target.assignedElements(),i=e.length;for(let t=0;t<i;t++){const i=e[t];i instanceof HTMLElement&&(null==this.elementName&&(this.elementName=i.tagName),this.componentMap.set(i.tagName,i.cloneNode(!0)))}this.options=ie.stringArrayToOptions(Array.from(this.componentMap.keys())),this.requestUpdate()}};yh.styles=o`
        slot {
            display:none;
        }
    `,mh([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],yh.prototype,"elementName",void 0),yh=mh([ot("webcomponent-viewer-container")],yh);let bh=class extends Q{render(){return D`
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
    `}};bh.styles=o``,bh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-main")],bh);class vh{constructor(){}static addListener(t){console.log("add nidoca store listener"),this._listeners.push(t)}static removeListener(t){this._listeners=this._listeners.filter((e=>!Object.is(t,e)))}static updateItem(t,e){localStorage.setItem(t,JSON.stringify(e)),t&&vh._listeners.forEach((i=>{i.channelUpdated(t,e)}))}static getItem(t){if(null==t)return;let e=localStorage.getItem(t);return null!=e?vh.parse(e):void 0}static parse(t){const e=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(t,(function(t,i){if("string"==typeof i)for(let t=0;t<e.length;t++)if(e[t].exec(i)){i=new Date(i);break}return i}))}}vh._listeners=[];var xh;!function(t){t.isLoggedIn="isLoggedIn",t.alleVertraege="alleVertraege",t.alleAufgaben="alleAufgaben",t.alleVertragKategorie="alleVertragKategorie",t.alleKontakte="alleKontakte"}(xh||(xh={}));class wh{static getKostenProMonat(){const t=wh.alleKostenpflichtigeVertraege();let e=0;return t&&t.forEach((t=>{e+=t.kosten/t.abrechnungsperiode})),e}static alleKostenpflichtigeVertraege(){const t=vh.getItem(xh.alleVertraege);if(null!=t)return t.filter((t=>t.kosten>0)).sort(((t,e)=>t.kosten/t.abrechnungsperiode>e.kosten/e.abrechnungsperiode?-1:1))}static getVertraegeVertragsendeErreichtUndNichtGekuendigt(){const t=vh.getItem(xh.alleVertraege);return null==t?[]:t.filter((t=>t.aktiv&&!t.gekuendigt&&t.vertragsende&&t.vertragsende.getTime()-1e3*t.kuendigungsfrist*60*60*24<(new Date).getTime()))}static getAnzahlVertragsendeErreichtUndNichtGekuendigt(){return this.getVertraegeVertragsendeErreichtUndNichtGekuendigt().length}static alleKostenpflichtigeVertraegeChart(){const t=wh.alleKostenpflichtigeVertraege();if(null!=t)return{type:"bar",data:{labels:t.map((t=>t.name)),datasets:[{indexAxis:"y",label:"Kosten pro Monat",data:t.map((t=>t.kosten/t.abrechnungsperiode)),backgroundColor:t.map((()=>getComputedStyle(document.body).getPropertyValue("--app-color-background"))),borderWidth:0}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}}}}}static getVertraegeKategorieChartConfiguration(){let t=vh.getItem(xh.alleVertragKategorie);if(null!=t)return{type:"pie",data:{labels:t.map((t=>t.kategorie)),datasets:[{label:"My First Dataset",data:t.map((t=>t.kosten)),backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]}}}static getAufgaben(){let t=vh.getItem(xh.alleAufgaben);return t?t.map((t=>[t.titel,(new Xn).formatDate(t.ablaufdatum,"dd.MM.yyyy")])):void 0}static getAbgelaufeneAufgaben(){let t=vh.getItem(xh.alleAufgaben);return t?t.filter((t=>t.ablaufdatum.getTime()<=(new Date).getTime())):[]}static getAnzahlAbgelaufeneAufgaben(){return this.getAbgelaufeneAufgaben().length}static getOffeneAufgaben(){let t=vh.getItem(xh.alleAufgaben);return t?t.filter((t=>!t.erledigt)):[]}static getAnzahlOffeneAufgaben(){return this.getOffeneAufgaben().length}}class _h{constructor(){this.listeners=[],window.onpopstate=t=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(t.state)),this.notifyListeners()},document.addEventListener("click",(t=>{if(!this.shouldIgnoreEvent(t)){const e=this.getAnchor(t);e&&!this.shouldIgnoreAnchor(e)&&(t.preventDefault(),e.hash.length>0&&this.navigate(e.hash))}}))}static getUniqueInstance(){return _h.uniqueInstance||(_h.uniqueInstance=new _h),_h.uniqueInstance}subscribe(t){console.trace("subscribe router listener"),this.listeners.push(t)}back(){history.back()}forward(){history.forward()}navigate(t,e=null){-1==t.indexOf("#")&&(t="#".concat(t)),console.trace("navigate to: %s",t),null!=e&&console.trace("state: %s",JSON.stringify(e)),document.location.hash!==t?(history.pushState(e,"",t),this.notifyListeners()):console.trace("you are already on page: "+t)}getCurrentState(){return history.state}getStateProperty(t){const e=this.getCurrentState();return null!=e?e[t]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const t=this.getCurrentPage();this.listeners.forEach((e=>e.routeChanged(t)))}shouldIgnoreEvent(t){return t.defaultPrevented||0!==t.button||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey}getAnchor(t){for(const e of t.composedPath?t.composedPath():[])if(this.isAnchor(e))return e;let e=t.target;for(;e&&!this.isAnchor(e);)e=e.parentNode;return e&&this.isAnchor(e)?e:null}isAnchor(t){return t.nodeName&&"a"===t.nodeName.toLowerCase()}shouldIgnoreAnchor(t){return!(!t.target||"_self"===t.target.toLowerCase())||(!!t.hasAttribute("download")||(t.origin||this.getAnchorOrigin(t))!==window.location.origin)}getAnchorOrigin(t){const e=t.port,i=t.protocol;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}}var kh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Sh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Rh=class extends Q{constructor(){super(),this.options=wh.alleKostenpflichtigeVertraegeChart(),this.options2=wh.getVertraegeKategorieChartConfiguration(),this.aufgaben=wh.getAufgaben(),this.abgelaufeneAufgaben=wh.getAnzahlAbgelaufeneAufgaben(),this.offeneAufgaben=wh.getAnzahlOffeneAufgaben(),this.anzahlVertragsendeErreichtUndNichtGekuendigt=wh.getAnzahlVertragsendeErreichtUndNichtGekuendigt(),this.kostenProMonat=wh.getKostenProMonat(),vh.addListener(this)}channelUpdated(t,e){switch(console.log(`receive item for channel: ${t}.`),t){case xh.alleVertraege:this.options=wh.alleKostenpflichtigeVertraegeChart(),this.anzahlVertragsendeErreichtUndNichtGekuendigt=wh.getAnzahlVertragsendeErreichtUndNichtGekuendigt();break;case xh.alleVertragKategorie:this.options2=wh.getVertraegeKategorieChartConfiguration();break;case xh.alleAufgaben:this.aufgaben=wh.getAufgaben(),this.abgelaufeneAufgaben=wh.getAnzahlAbgelaufeneAufgaben()}}render(){return D`
      <nidoca-svg-2-webp></nidoca-svg-2-webp>

      <nidoca-dashboard>
        <nidoca-text-h1 style="padding: var(--space-2);width: 100%;">Dashboard</nidoca-text-h1>

        <nidoca-dashboard-box-25>
          <nidoca-dashboard-card
            title="Nächster Geburtstag"
            clickable
            @nidoca-event-dashboard-card-clicked="${()=>{const t=wh.getAbgelaufeneAufgaben();_h.getUniqueInstance().navigate("aufgabe",{searchParam:Qn.searchOr(t,"id")})}}"
          >
            <nidoca-icon style="font-size:96px;" icon="cake"></nidoca-icon>
            <nidoca-text style=""> Mark Enger </nidoca-text>
          </nidoca-dashboard-card>
        </nidoca-dashboard-box-25>

        <nidoca-dashboard-box-25>
          <nidoca-dashboard-card
            title="Aufgaben"
            clickable
            @nidoca-event-dashboard-card-clicked="${()=>{const t=wh.getAbgelaufeneAufgaben();_h.getUniqueInstance().navigate("aufgabe",{searchParam:Qn.searchOr(t,"id")})}}"
          >
            <nidoca-text-h1 style="text-align: center;color:var(--app-color-error-background);">
              ${this.abgelaufeneAufgaben}
            </nidoca-text-h1>
            <nidoca-text style="text-align: center;color:var(--app-color-error-background);"> abgelaufen </nidoca-text>
          </nidoca-dashboard-card>
        </nidoca-dashboard-box-25>
        <nidoca-dashboard-box-25>
          <nidoca-dashboard-card
            title="Aufgaben"
            clickable
            @nidoca-event-dashboard-card-clicked="${()=>{const t=wh.getOffeneAufgaben();_h.getUniqueInstance().navigate("aufgabe",{searchParam:Qn.searchOr(t,"id")})}}"
          >
            <nidoca-text-h1 style="text-align: center;color:var(--app-color-info-background);">
              ${this.offeneAufgaben}
            </nidoca-text-h1>
            <nidoca-text style="text-align: center;color:var(--app-color-info-background);"> offen </nidoca-text>
          </nidoca-dashboard-card>
        </nidoca-dashboard-box-25>
        <nidoca-dashboard-box-25>
          <nidoca-dashboard-card
            title="Vertrag"
            clickable
            @nidoca-event-dashboard-card-clicked="${()=>{const t=wh.getVertraegeVertragsendeErreichtUndNichtGekuendigt();_h.getUniqueInstance().navigate("vertrag",{searchParam:Qn.searchOr(t,"id")})}}"
          >
            <nidoca-text-h1 style="text-align: center;color:var(--app-color-error-background);">
              ${this.anzahlVertragsendeErreichtUndNichtGekuendigt}
            </nidoca-text-h1>
            <nidoca-text style="text-align: center;color:var(--app-color-error-background);"> kündigen </nidoca-text>
          </nidoca-dashboard-card>
        </nidoca-dashboard-box-25>
        <nidoca-dashboard-box-25>
          <nidoca-dashboard-card title="Kosten Pro Monat">
            <nidoca-text-h3 style="text-align: center;color:var(--app-color-error-background);">
              ${this.kostenProMonat?this.kostenProMonat.toFixed(2):"-"} €
            </nidoca-text-h3>
            <nidoca-text style="text-align: center;color:var(--app-color-error-background);"> kündigen </nidoca-text>
          </nidoca-dashboard-card>
        </nidoca-dashboard-box-25>
        <nidoca-dashboard-box-50>
          <nidoca-dashboard-card title="Kostenverteilung pro Monat in Euro">
            <nidoca-chart-js-wrapper style="height:350px;" .options="${this.options}"></nidoca-chart-js-wrapper>
          </nidoca-dashboard-card>
        </nidoca-dashboard-box-50>

        <nidoca-dashboard-box-50>
          <nidoca-dashboard-card title="Kostenverteilung pro Kategorie">
            <nidoca-chart-js-wrapper .options="${this.options2}"></nidoca-chart-js-wrapper>
          </nidoca-dashboard-card>
        </nidoca-dashboard-box-50>

        <nidoca-dashboard-box-100>
          <nidoca-dashboard-card title="Nächste Aufgabe">
            ${this.aufgaben?D` <nidoca-table
                  theme="surface"
                  .headers="${["Titel","Ablaufdatum"]}"
                  .rows="${this.aufgaben}"
                ></nidoca-table>`:D``}
          </nidoca-dashboard-card>
        </nidoca-dashboard-box-100>
      </nidoca-dashboard>
    `}};Rh.styles=o``,kh([st(),Sh("design:type",Object)],Rh.prototype,"options",void 0),kh([st(),Sh("design:type",Object)],Rh.prototype,"options2",void 0),kh([st(),Sh("design:type",Object)],Rh.prototype,"aufgaben",void 0),kh([st(),Sh("design:type",Object)],Rh.prototype,"abgelaufeneAufgaben",void 0),kh([st(),Sh("design:type",Object)],Rh.prototype,"offeneAufgaben",void 0),kh([st(),Sh("design:type",Object)],Rh.prototype,"anzahlVertragsendeErreichtUndNichtGekuendigt",void 0),kh([st(),Sh("design:type",Object)],Rh.prototype,"kostenProMonat",void 0),Rh=kh([ot("nidoca-page-dashboard"),Sh("design:paramtypes",[])],Rh);var Oh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let Eh=class extends Q{constructor(){super(...arguments),this.elementName="nidoca-tabs"}render(){return D`
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
        `}};Eh.styles=o``,Oh([st({type:String}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",String)],Eh.prototype,"elementName",void 0),Eh=Oh([ot("nidoca-page-playground")],Eh);let Ph=class extends Q{render(){return D`
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
    `}};Ph.styles=o``,Ph=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-components")],Ph);let $h=class extends Q{render(){return D`
            <nidoca-container>
                <nidoca-article title="Impressum" summary="Angaben gemäß § 5 TMG">
                    <nidoca-text>Dominik Bruhn</nidoca-text>
                    <nidoca-text>Holzwickeder Straße 109c</nidoca-text>
                    <nidoca-text>44309 Dortmund</nidoca-text>
                    <nidoca-layout-spacer></nidoca-layout-spacer>
                    <nidoca-text>Telefonnummer: +49 152 052 488 62</nidoca-text>
                    <nidoca-text>E-Mail: dominikbruhn [at] googlemail.com</nidoca-text>
                </nidoca-article>
                <nidoca-article title="Streitsschlichtung">
                    <nidoca-text
                    >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                        <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="${gi.BLANK}"
                        >https://ec.europa.eu/consumers/odr
                        </nidoca-link
                        >
                        . <br/>Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.
                    </nidoca-text
                    >
                    <nidoca-text>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </nidoca-text>
                </nidoca-article>
                <nidoca-article title="Haftungsinhalt">
                    <nidoca-text>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                        allgemeinen
                        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                        verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                        forschen, die auf
                        eine rechtswidrige Tätigkeit hinweisen.<br/>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                        Gesetzen
                        bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                        Kenntnis einer
                        konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                        werden wir diese
                        Inhalte umgehend entfernen.
                    </nidoca-text>
                </nidoca-article>
                <nidoca-article title="Haftungslinks">
                    <nidoca-text>
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                        haben.
                        Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                        verlinkten
                        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
                        Seiten
                        wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
                        waren zum
                        Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
                        Seiten ist
                        jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    </nidoca-text>
                </nidoca-article>
                <nidoca-article title="Copyright">
                    <nidoca-text>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen
                        Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                        außerhalb der
                        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                        Erstellers.
                        Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                        gestattet.<br/>
                        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                        Urheberrechte Dritter
                        beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                        auf eine
                        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                        Bekanntwerden von
                        Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                    </nidoca-text>
                </nidoca-article>
                <nidoca-article title="Quelle">
                    <nidoca-link href="https://www.e-recht24.de/impressum-generator.html"
                                 targetType="${gi.BLANK}"
                    >https://www.e-recht24.de/impressum-generator.html
                    </nidoca-link
                    >
                </nidoca-article>
                <div style="padding-top:var(--space-8); padding-bottom:var(--space-8);">
                    <nidoca-article title="Google Material Icons">
                        <nidoca-link href="https://fonts.google.com/icons" targetType="${gi.BLANK}"
                        >https://fonts.google.com/icons
                        </nidoca-link
                        >
                    </nidoca-article>
                    <nidoca-article title="Google Fonts">
                        <nidoca-link href=" https://fonts.google.com/" targetType="${gi.BLANK}">
                            https://fonts.google.com/
                        </nidoca-link
                        >
                    </nidoca-article>
                </div>
            </nidoca-container>
        `}};$h.styles=o`
    nidoca-article {
      padding-bottom: var(--space-2);
    }
  `,$h=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-imprint")],$h);var Th=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Mh=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Ah=class extends Q{constructor(){super(),this.cssVars=[],this.cssVars=((t=document.styleSheets)=>{const e=[];return Array.from(t).forEach((t=>{Array.from(t.cssRules).forEach((t=>{if(!t||!t.style)return;const i=t.style;Array.from(i).forEach((t=>{t.startsWith("--")&&-1==e.indexOf(t)&&e.push(t)}))}))})),e})()}render(){return D`
            <nidoca-container>
                <nidoca-article title="CSS Variablen">
                    ${Qt([this.cssVars],(()=>D`
                                        ${Jt(this.cssVars,(t=>D`
                                                    <nidoca-form-text
                                                            style="width:100%;padding-bottom: var(--space-3);"
                                                            @input="${e=>{document.documentElement.style.setProperty(t,e.target?e.target.getOutputData().value:"")}}"
                                                            type="${t.indexOf("color")>-1?oe.COLOR:oe.TEXT}"
                                                            name="${t}"
                                                            value="${getComputedStyle(document.documentElement).getPropertyValue(t).trim()}"
                                                            label="${t}"
                                                    ></nidoca-form-text>
                                                `))}
                                    `))}
                </nidoca-article>
            </nidoca-container>
        `}};Ah.styles=o``,Th([st({type:Array}),Mh("design:type",Array)],Ah.prototype,"cssVars",void 0),Ah=Th([ot("nidoca-page-settings"),Mh("design:paramtypes",[])],Ah);let Dh=class extends Q{render(){return D``}};Dh.styles=o``,Dh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-privacy")],Dh);let Ch=class extends Q{render(){return D``}};Ch.styles=o``,Ch=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-terms-of-use")],Ch);class jh{constructor(){this.id=0,this.name="",this.beschreibung="",this.internetseite="",this.benutzername="",this.adresse="",this.email="",this.iban="",this.vertragsnehmer="",this.kategorie="",this.vertragsbeginn=new Date,this.vertragsende=new Date,this.kuendigungsfrist=0,this.vertragsnummer="",this.ansprechpatrtner="",this.supporttelefon="",this.kosten=0,this.abrechnungsperiode=0,this.aktiv=!1,this.gekuendigt=!1}}class Ih extends no{getModel(){return new jh}getPath(){return"/vertrag"}getPrimaryText(t){return t.name}getSecondaryText(t){return t.beschreibung}getSectionKey(){return"name"}getProperties(){const t=super.getProperties();return t.forEach((t=>{"adresse"!=t.key&&"beschreibung"!=t.key||(t.type="textarea"),"internetseite"==t.key&&(t.type="url"),"name"==t.key&&(t.required=!0)})),t}search(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return(yield Qn.search(this.getPath(),"?offset=0&limit=100&order=name.asc&name=like.*".concat(t).concat("*")))||[]}))}}let Lh=class extends Q{render(){return D`
            <nidoca-generic-crud .controller="${new Ih}"></nidoca-generic-crud> `}};Lh.styles=o``,Lh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-vertrag")],Lh);class Nh{constructor(){this.id=0,this.titel="",this.beschreibung="",this.ablaufdatum=new Date,this.erledigt=!1}}class zh extends no{getModel(){return new Nh}getPath(){return"/aufgabe"}getSectionKey(){return"ablaufdatum"}getPrimaryText(t){return t.titel}getSecondaryText(t){return t.beschreibung}getProperties(){const t=super.getProperties();return t.forEach((t=>{"beschreibung"==t.key&&(t.type="textarea"),"ablaufdatum"==t.key&&(t.required=!0)})),t}search(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return(yield Qn.search(this.getPath(),"?offset=0&limit=100&order=ablaufdatum.asc&titel=like.*".concat(t).concat("*").concat(history.state&&history.state.searchParam?history.state.searchParam:"")))||[]}))}}let Bh=class extends Q{render(){return D`
            <nidoca-generic-crud .controller="${new zh}"></nidoca-generic-crud> `}};Bh.styles=o``,Bh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-aufgabe")],Bh);class Wh{constructor(){this.id=0,this.name="",this.url="",this.benutzername=""}}class Fh extends no{getModel(){return new Wh}getPath(){return"/konto"}getSectionKey(){return"url"}getPrimaryText(t){return t.url}getSecondaryText(t){return t.benutzername}search(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return(yield Qn.search(this.getPath(),"?offset=0&limit=100&order=url.asc&url=like.*".concat(t).concat("*").concat(history.state&&history.state.searchParam?history.state.searchParam:"")))||[]}))}}let Uh=class extends Q{render(){return D` <nidoca-generic-crud .controller="${new Fh}"></nidoca-generic-crud> `}};Uh.styles=o``,Uh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-konto")],Uh);class Vh{constructor(){this.id=0,this.vorname="",this.name="",this.spitzname="",this.email="",this.adresse="",this.telefon="",this.mobilnummer="",this.kategorie="",this.geburtstag=new Date}}class Hh extends no{getModel(){return new Vh}getPath(){return"/kontakt"}getSectionKey(){return"url"}getPrimaryText(t){return t.vorname}getSecondaryText(t){return t.name}getProperties(){const t=super.getProperties();return t.forEach((t=>{"adresse"==t.key&&(t.type="textarea")})),t}search(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return(yield Qn.search(this.getPath(),"?offset=0&limit=100&order=name.asc&or=(".concat("name.like.*").concat(t).concat("*").concat(",vorname.like.*").concat(t).concat("*").concat(",spitzname.like.*").concat(t).concat("*").concat(")")))||[]}))}}let Kh=class extends Q{render(){return D` <nidoca-generic-crud .controller="${new Hh}"></nidoca-generic-crud> `}};Kh.styles=o``,Kh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-kontakt")],Kh);class Yh{constructor(){this.id=0,this.name=""}}class Gh{constructor(){this.id=0,this.name=""}}class qh extends no{getModel(){return new Yh}getPath(){return"/projekt"}getSectionKey(){return"url"}getPrimaryText(t){return t.name}getSecondaryText(t){return t.name}getProperties(){const t=super.getProperties();return t.forEach((t=>{"modul_id"==t.key&&(t.type="1:n")})),t}search(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return(yield Qn.search(this.getPath(),"?offset=0&limit=100&order=name.asc&name=like.*".concat(t).concat("*").concat(history.state&&history.state.searchParam?history.state.searchParam:"")))||[]}))}}let Xh=class extends Q{render(){return D`
            <nidoca-generic-crud .controller="${new qh}"></nidoca-generic-crud> `}};Xh.styles=o``,Xh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-projekt")],Xh);class Jh extends no{getModel(){return new Gh}getPath(){return"/modul"}getSectionKey(){return"url"}getPrimaryText(t){return t.name}getSecondaryText(t){return t.name}search(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return(yield Qn.search(this.getPath(),"?offset=0&limit=100&order=name.asc&name=like.*".concat(t).concat("*").concat(history.state&&history.state.searchParam?history.state.searchParam:"")))||[]}))}}let Zh=class extends Q{render(){return D`
            <nidoca-generic-crud .controller="${new Jh}"></nidoca-generic-crud> `}};Zh.styles=o``,Zh=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-page-modul")],Zh);class Qh{constructor(){this.id=0,this.name="",this.type="",this.json="",this.template=""}}var tp=Object.prototype.toString,ep=Array.isArray||function(t){return"[object Array]"===tp.call(t)};function ip(t){return"function"==typeof t}function np(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function op(t,e){return null!=t&&"object"==typeof t&&e in t}var rp=RegExp.prototype.test,sp=/\S/;var ap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},lp=/\s*/,cp=/\s+/,dp=/\s*=/,hp=/\s*\}/,pp=/#|\^|\/|>|\{|&|=|!/;function up(t){this.string=t,this.tail=t,this.pos=0}function fp(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function gp(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}up.prototype.eos=function(){return""===this.tail},up.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var i=e[0];return this.tail=this.tail.substring(i.length),this.pos+=i.length,i},up.prototype.scanUntil=function(t){var e,i=this.tail.search(t);switch(i){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,i),this.tail=this.tail.substring(i)}return this.pos+=e.length,e},fp.prototype.push=function(t){return new fp(t,this)},fp.prototype.lookup=function(t){var e,i,n,o=this.cache;if(o.hasOwnProperty(t))e=o[t];else{for(var r,s,a,l=this,c=!1;l;){if(t.indexOf(".")>0)for(r=l.view,s=t.split("."),a=0;null!=r&&a<s.length;)a===s.length-1&&(c=op(r,s[a])||(i=r,n=s[a],null!=i&&"object"!=typeof i&&i.hasOwnProperty&&i.hasOwnProperty(n))),r=r[s[a++]];else r=l.view[t],c=op(l.view,t);if(c){e=r;break}l=l.parent}o[t]=e}return ip(e)&&(e=e.call(this.view)),e},gp.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},gp.prototype.parse=function(t,e){var i=this.templateCache,n=t+":"+(e||mp.tags).join(":"),o=void 0!==i,r=o?i.get(n):void 0;return null==r&&(r=function(t,e){if(!t)return[];var i,n,o,r,s=!1,a=[],l=[],c=[],d=!1,h=!1,p="",u=0;function f(){if(d&&!h)for(;c.length;)delete l[c.pop()];else c=[];d=!1,h=!1}function g(t){if("string"==typeof t&&(t=t.split(cp,2)),!ep(t)||2!==t.length)throw new Error("Invalid tags: "+t);i=new RegExp(np(t[0])+"\\s*"),n=new RegExp("\\s*"+np(t[1])),o=new RegExp("\\s*"+np("}"+t[1]))}g(e||mp.tags);for(var m,y,b,v,x,w,_=new up(t);!_.eos();){if(m=_.pos,b=_.scanUntil(i))for(var k=0,S=b.length;k<S;++k)r=v=b.charAt(k),function(t,e){return rp.call(t,e)}(sp,r)?(h=!0,s=!0,p+=" "):(c.push(l.length),p+=v),l.push(["text",v,m,m+1]),m+=1,"\n"===v&&(f(),p="",u=0,s=!1);if(!_.scan(i))break;if(d=!0,y=_.scan(pp)||"name",_.scan(lp),"="===y?(b=_.scanUntil(dp),_.scan(dp),_.scanUntil(n)):"{"===y?(b=_.scanUntil(o),_.scan(hp),_.scanUntil(n),y="&"):b=_.scanUntil(n),!_.scan(n))throw new Error("Unclosed tag at "+_.pos);if(x=">"==y?[y,b,m,_.pos,p,u,s]:[y,b,m,_.pos],u++,l.push(x),"#"===y||"^"===y)a.push(x);else if("/"===y){if(!(w=a.pop()))throw new Error('Unopened section "'+b+'" at '+m);if(w[1]!==b)throw new Error('Unclosed section "'+w[1]+'" at '+m)}else"name"===y||"{"===y||"&"===y?h=!0:"="===y&&g(b)}if(f(),w=a.pop())throw new Error('Unclosed section "'+w[1]+'" at '+_.pos);return function(t){for(var e,i=[],n=i,o=[],r=0,s=t.length;r<s;++r)switch((e=t[r])[0]){case"#":case"^":n.push(e),o.push(e),n=e[4]=[];break;case"/":o.pop()[5]=e[2],n=o.length>0?o[o.length-1][4]:i;break;default:n.push(e)}return i}(function(t){for(var e,i,n=[],o=0,r=t.length;o<r;++o)(e=t[o])&&("text"===e[0]&&i&&"text"===i[0]?(i[1]+=e[1],i[3]=e[3]):(n.push(e),i=e));return n}(l))}(t,e),o&&i.set(n,r)),r},gp.prototype.render=function(t,e,i,n){var o=this.getConfigTags(n),r=this.parse(t,o),s=e instanceof fp?e:new fp(e,void 0);return this.renderTokens(r,s,i,t,n)},gp.prototype.renderTokens=function(t,e,i,n,o){for(var r,s,a,l="",c=0,d=t.length;c<d;++c)a=void 0,"#"===(s=(r=t[c])[0])?a=this.renderSection(r,e,i,n,o):"^"===s?a=this.renderInverted(r,e,i,n,o):">"===s?a=this.renderPartial(r,e,i,o):"&"===s?a=this.unescapedValue(r,e):"name"===s?a=this.escapedValue(r,e,o):"text"===s&&(a=this.rawValue(r)),void 0!==a&&(l+=a);return l},gp.prototype.renderSection=function(t,e,i,n,o){var r=this,s="",a=e.lookup(t[1]);if(a){if(ep(a))for(var l=0,c=a.length;l<c;++l)s+=this.renderTokens(t[4],e.push(a[l]),i,n,o);else if("object"==typeof a||"string"==typeof a||"number"==typeof a)s+=this.renderTokens(t[4],e.push(a),i,n,o);else if(ip(a)){if("string"!=typeof n)throw new Error("Cannot use higher-order sections without the original template");null!=(a=a.call(e.view,n.slice(t[3],t[5]),(function(t){return r.render(t,e,i,o)})))&&(s+=a)}else s+=this.renderTokens(t[4],e,i,n,o);return s}},gp.prototype.renderInverted=function(t,e,i,n,o){var r=e.lookup(t[1]);if(!r||ep(r)&&0===r.length)return this.renderTokens(t[4],e,i,n,o)},gp.prototype.indentPartial=function(t,e,i){for(var n=e.replace(/[^ \t]/g,""),o=t.split("\n"),r=0;r<o.length;r++)o[r].length&&(r>0||!i)&&(o[r]=n+o[r]);return o.join("\n")},gp.prototype.renderPartial=function(t,e,i,n){if(i){var o=this.getConfigTags(n),r=ip(i)?i(t[1]):i[t[1]];if(null!=r){var s=t[6],a=t[5],l=t[4],c=r;0==a&&l&&(c=this.indentPartial(r,l,s));var d=this.parse(c,o);return this.renderTokens(d,e,i,c,n)}}},gp.prototype.unescapedValue=function(t,e){var i=e.lookup(t[1]);if(null!=i)return i},gp.prototype.escapedValue=function(t,e,i){var n=this.getConfigEscape(i)||mp.escape,o=e.lookup(t[1]);if(null!=o)return"number"==typeof o&&n===mp.escape?String(o):n(o)},gp.prototype.rawValue=function(t){return t[1]},gp.prototype.getConfigTags=function(t){return ep(t)?t:t&&"object"==typeof t?t.tags:void 0},gp.prototype.getConfigEscape=function(t){return t&&"object"==typeof t&&!ep(t)?t.escape:void 0};var mp={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){yp.templateCache=t},get templateCache(){return yp.templateCache}},yp=new gp;mp.clearCache=function(){return yp.clearCache()},mp.parse=function(t,e){return yp.parse(t,e)},mp.render=function(t,e,i,n){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+(ep(o=t)?"array":typeof o)+'" was given as the first argument for mustache#render(template, view, partials)');var o;return yp.render(t,e,i,n)},mp.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return ap[t]}))},mp.Scanner=up,mp.Context=fp,mp.Writer=gp;const bp=mp;var vp=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};class xp extends no{getModel(){return new Qh}getPath(){return"/vorlage"}getSectionKey(){return"url"}getPrimaryText(t){return t.name}getSecondaryText(t){return t.name}getProperties(){const t=super.getProperties();return t.forEach((t=>{"template"==t.key&&(t.type="textarea"),"json"==t.key&&(t.type="textarea")})),t}search(t){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){return(yield Qn.search(this.getPath(),"?offset=0&limit=100&order=name.asc&name=like.*".concat(t).concat("*").concat(history.state&&history.state.searchParam?history.state.searchParam:"")))||[]}))}}let wp=class extends Q{constructor(){super(...arguments),this.controller=new xp}render(){return D`
      <nidoca-generic-crud
        @nidoca-event-generic-crud-new-item="${t=>{this.model=t.detail}}"
        .controller="${this.controller}"
      >
        <div>${D`${this.renderModel(this.model)}`}</div>
      </nidoca-generic-crud>
    `}renderModel(t){if(t){const e=t.json,i=bp.render(t.template,e);return console.log(i),i}return""}};wp.styles=o``,vp([st({type:Qh,converter:Object}),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:type",Object)],wp.prototype,"model",void 0),wp=vp([ot("nidoca-page-vorlage")],wp);let _p=class extends Q{render(){return D`
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
    `}};_p.styles=o``,_p=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s}([ot("nidoca-elevation-settings")],_p);var kp=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Sp=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let Rp=class extends Q{constructor(){super(...arguments),this.theme=it.TRANSPARENT,this.label="Anmeldung",this.usernameLabel="Benutzername/Email",this.passwordLabel="Passwort",this.buttonLabel="Anmelden"}render(){return D`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            type="${oe.EMAIL}"
            label="${this.usernameLabel}"
            name="username"
            required
            trailingIcon="account_circle"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${it.getOposite(this.theme)}"
            class="paddingBottom"
            type="${oe.PASSWORD}"
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
    `}login(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-login-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Rp.styles=o`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,kp([st({type:it,converter:String}),Sp("design:type",Object)],Rp.prototype,"theme",void 0),kp([st({type:String,converter:String}),Sp("design:type",String)],Rp.prototype,"label",void 0),kp([st({type:String,converter:String}),Sp("design:type",String)],Rp.prototype,"usernameLabel",void 0),kp([st({type:String,converter:String}),Sp("design:type",String)],Rp.prototype,"passwordLabel",void 0),kp([st({type:String,converter:String}),Sp("design:type",String)],Rp.prototype,"buttonLabel",void 0),kp([lt("#authenitcate-form"),Sp("design:type",Object)],Rp.prototype,"formComponent",void 0),Rp=kp([ot("nidoca-form-login")],Rp);var Op=function(t,e,i,n){var o,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,i,s):o(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},Ep=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};const Pp={type:oh.anchor,childs:[{type:oh.page,name:"Dashboard",route:"dashboard",rootComponent:"nidoca-page-dashboard"},{type:oh.page,name:"Kontakt",route:"kontakt",rootComponent:"nidoca-page-kontakt"},{type:oh.page,name:"Projekt",route:"projekt",rootComponent:"nidoca-page-projekt"},{type:oh.page,name:"Modul",route:"modul",rootComponent:"nidoca-page-modul"},{type:oh.page,name:"Vorlage",route:"vorlage",rootComponent:"nidoca-page-vorlage"},{type:oh.page,name:"Verträge",route:"vertrag",rootComponent:"nidoca-page-vertrag"},{type:oh.page,name:"Aufgaben",route:"aufgabe",rootComponent:"nidoca-page-aufgabe"},{type:oh.page,name:"Konto",route:"konto",rootComponent:"nidoca-page-konto"},{type:oh.page,name:"Impressum",route:"imprint",rootComponent:"nidoca-page-imprint"},{type:oh.page,name:"Datenschutz",route:"privacy",rootComponent:"nidoca-page-privacy"},{type:oh.page,name:"Nutzungsbedingungen",route:"terms-of-use",rootComponent:"nidoca-page-terms-of-use"},{type:oh.page,icon:"home",name:"Einstellungen",route:"settings",rootComponent:"nidoca-page-settings"}],route:"dashboard",name:"Root"};let $p=class extends Q{constructor(){super(),this.pages=[],this.loggedIn=!0,this.route="",_h.getUniqueInstance().subscribe(this),this.routeChanged(_h.getUniqueInstance().getCurrentPage()),vh.addListener(this)}routeChanged(t){this.route=t}channelUpdated(t,e){console.log(`receive item for channel: ${t},item: ${e}`),t==xh.isLoggedIn&&(this.loggedIn=e)}render(){return D`
            <nidoca-app route="${this.route}" .loggedIn="${this.loggedIn}" .root="${Pp}"
                        @nidoca-event-app-route="${t=>{_h.getUniqueInstance().navigate(t.detail)}}"
                        @nidoca-event-app-login="${t=>function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){const e=yield Qn.login(t.detail.jsonObject.username,t.detail.jsonObject.password);vh.updateItem(xh.isLoggedIn,e),e&&class{static loadData(){return function(t,e,i,n){return new(i||(i=Promise))((function(o,r){function s(t){try{l(n.next(t))}catch(t){r(t)}}function a(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}l((n=n.apply(t,e||[])).next())}))}(this,void 0,void 0,(function*(){vh.updateItem(xh.isLoggedIn,Qn.isLoggedIn()),vh.updateItem(xh.alleVertraege,yield Qn.search("/vertrag","")),vh.updateItem(xh.alleKontakte,yield Qn.search("/kontakt","")),vh.updateItem(xh.alleAufgaben,yield Qn.search("/aufgabe","?order=ablaufdatum.asc")),vh.updateItem(xh.alleVertragKategorie,yield Qn.search("/vertrag_kategorie",""))}))}}.loadData().then((()=>{console.log("data loaded."+e),this.route="dashboard",this.loggedIn=e}))}))}" @nidoca-event-app-logout="${()=>{Qn.logout(),vh.updateItem(xh.isLoggedIn,Qn.isLoggedIn()),this.loggedIn=Qn.isLoggedIn()}}"></nidoca-app>`}};Op([st({type:Array}),Ep("design:type",Array)],$p.prototype,"pages",void 0),Op([st({type:Boolean}),Ep("design:type",Boolean)],$p.prototype,"loggedIn",void 0),Op([st({type:Object}),Ep("design:type",String)],$p.prototype,"route",void 0),$p=Op([ot("nidoca-my-app"),Ep("design:paramtypes",[])],$p)})();