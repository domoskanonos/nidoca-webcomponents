"use strict";(()=>{var Li=Object.defineProperty;var Ai=Object.getOwnPropertyDescriptor;var i=(a,e,t,r)=>{for(var s=r>1?void 0:r?Ai(e,t):e,m=a.length-1,p;m>=0;m--)(p=a[m])&&(s=(r?p(e,t,s):p(s))||s);return r&&s&&Li(e,t,s),s};var Ae=globalThis,Ce=Ae.ShadowRoot&&(Ae.ShadyCSS===void 0||Ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),si=new WeakMap,Nt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ce&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=si.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&si.set(t,e))}return e}toString(){return this.cssText}},ai=a=>new Nt(typeof a=="string"?a:a+"",void 0,Qe),c=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((r,s,m)=>r+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+a[m+1],a[0]);return new Nt(t,a,Qe)},Fe=(a,e)=>{if(Ce)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),s=Ae.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,a.appendChild(r)}},Ie=Ce?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return ai(t)})(a):a;var{is:Ci,defineProperty:Ii,getOwnPropertyDescriptor:Oi,getOwnPropertyNames:zi,getOwnPropertySymbols:Hi,getPrototypeOf:Di}=Object,Oe=globalThis,li=Oe.trustedTypes,Mi=li?li.emptyScript:"",Pi=Oe.reactiveElementPolyfillSupport,te=(a,e)=>a,ee={toAttribute(a,e){switch(e){case Boolean:a=a?Mi:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},ze=(a,e)=>!Ci(a,e),mi={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:ze};Symbol.metadata??=Symbol("metadata"),Oe.litPropertyMetadata??=new WeakMap;var it=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=mi){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Ii(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){let{get:s,set:m}=Oi(this.prototype,e)??{get(){return this[t]},set(p){this[t]=p}};return{get(){return s?.call(this)},set(p){let f=s?.call(this);m.call(this,p),this.requestUpdate(e,f,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??mi}static _$Ei(){if(this.hasOwnProperty(te("elementProperties")))return;let e=Di(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(te("properties"))){let t=this.properties,r=[...zi(t),...Hi(t)];for(let s of r)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let s of r)t.unshift(Ie(s))}else e!==void 0&&t.push(Ie(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){let m=(r.converter?.toAttribute!==void 0?r.converter:ee).toAttribute(t,r.type);this._$Em=e,m==null?this.removeAttribute(s):this.setAttribute(s,m),this._$Em=null}}_$AK(e,t){let r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let m=r.getPropertyOptions(s),p=typeof m.converter=="function"?{fromAttribute:m.converter}:m.converter?.fromAttribute!==void 0?m.converter:ee;this._$Em=s,this[s]=p.fromAttribute(t,m.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??ze)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,m]of this._$Ep)this[s]=m;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[s,m]of r)m.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],m)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};it.elementStyles=[],it.shadowRootOptions={mode:"open"},it[te("elementProperties")]=new Map,it[te("finalized")]=new Map,Pi?.({ReactiveElement:it}),(Oe.reactiveElementVersions??=[]).push("2.0.4");var ti=globalThis,He=ti.trustedTypes,ci=He?He.createPolicy("lit-html",{createHTML:a=>a}):void 0,ei="$lit$",rt=`lit$${Math.random().toFixed(9).slice(2)}$`,ii="?"+rt,Bi=`<${ii}>`,vt=document,re=()=>vt.createComment(""),ne=a=>a===null||typeof a!="object"&&typeof a!="function",ri=Array.isArray,gi=a=>ri(a)||typeof a?.[Symbol.iterator]=="function",Ne=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pi=/-->/g,di=/>/g,yt=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hi=/'/g,ui=/"/g,bi=/^(?:script|style|textarea|title)$/i,ni=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),n=ni(1),Ni=ni(2),tr=ni(3),B=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),fi=new WeakMap,xt=vt.createTreeWalker(vt,129);function yi(a,e){if(!ri(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return ci!==void 0?ci.createHTML(e):e}var xi=(a,e)=>{let t=a.length-1,r=[],s,m=e===2?"<svg>":e===3?"<math>":"",p=ie;for(let f=0;f<t;f++){let h=a[f],$,T,b=-1,E=0;for(;E<h.length&&(p.lastIndex=E,T=p.exec(h),T!==null);)E=p.lastIndex,p===ie?T[1]==="!--"?p=pi:T[1]!==void 0?p=di:T[2]!==void 0?(bi.test(T[2])&&(s=RegExp("</"+T[2],"g")),p=yt):T[3]!==void 0&&(p=yt):p===yt?T[0]===">"?(p=s??ie,b=-1):T[1]===void 0?b=-2:(b=p.lastIndex-T[2].length,$=T[1],p=T[3]===void 0?yt:T[3]==='"'?ui:hi):p===ui||p===hi?p=yt:p===pi||p===di?p=ie:(p=yt,s=void 0);let y=p===yt&&a[f+1].startsWith("/>")?" ":"";m+=p===ie?h+Bi:b>=0?(r.push($),h.slice(0,b)+ei+h.slice(b)+rt+y):h+rt+(b===-2?f:y)}return[yi(a,m+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},oe=class a{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let m=0,p=0,f=e.length-1,h=this.parts,[$,T]=xi(e,t);if(this.el=a.createElement($,r),xt.currentNode=this.el.content,t===2||t===3){let b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(s=xt.nextNode())!==null&&h.length<f;){if(s.nodeType===1){if(s.hasAttributes())for(let b of s.getAttributeNames())if(b.endsWith(ei)){let E=T[p++],y=s.getAttribute(b).split(rt),R=/([.?@])?(.*)/.exec(E);h.push({type:1,index:m,name:R[2],strings:y,ctor:R[1]==="."?Me:R[1]==="?"?Pe:R[1]==="@"?Be:$t}),s.removeAttribute(b)}else b.startsWith(rt)&&(h.push({type:6,index:m}),s.removeAttribute(b));if(bi.test(s.tagName)){let b=s.textContent.split(rt),E=b.length-1;if(E>0){s.textContent=He?He.emptyScript:"";for(let y=0;y<E;y++)s.append(b[y],re()),xt.nextNode(),h.push({type:2,index:++m});s.append(b[E],re())}}}else if(s.nodeType===8)if(s.data===ii)h.push({type:2,index:m});else{let b=-1;for(;(b=s.data.indexOf(rt,b+1))!==-1;)h.push({type:7,index:m}),b+=rt.length-1}m++}}static createElement(e,t){let r=vt.createElement("template");return r.innerHTML=e,r}};function wt(a,e,t=a,r){if(e===B)return e;let s=r!==void 0?t._$Co?.[r]:t._$Cl,m=ne(e)?void 0:e._$litDirective$;return s?.constructor!==m&&(s?._$AO?.(!1),m===void 0?s=void 0:(s=new m(a),s._$AT(a,t,r)),r!==void 0?(t._$Co??=[])[r]=s:t._$Cl=s),s!==void 0&&(e=wt(a,s._$AS(a,e.values),s,r)),e}var De=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,s=(e?.creationScope??vt).importNode(t,!0);xt.currentNode=s;let m=xt.nextNode(),p=0,f=0,h=r[0];for(;h!==void 0;){if(p===h.index){let $;h.type===2?$=new Ut(m,m.nextSibling,this,e):h.type===1?$=new h.ctor(m,h.name,h.strings,this,e):h.type===6&&($=new Ue(m,this,e)),this._$AV.push($),h=r[++f]}p!==h?.index&&(m=xt.nextNode(),p++)}return xt.currentNode=vt,s}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Ut=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=wt(this,e,t),ne(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.T(vt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=oe.createElement(yi(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(t);else{let m=new De(s,this),p=m.u(this.options);m.p(t),this.T(p),this._$AH=m}}_$AC(e){let t=fi.get(e.strings);return t===void 0&&fi.set(e.strings,t=new oe(e)),t}k(e){ri(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,s=0;for(let m of e)s===t.length?t.push(r=new a(this.O(re()),this.O(re()),this,this.options)):r=t[s],r._$AI(m),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},$t=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,m){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=m,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=k}_$AI(e,t=this,r,s){let m=this.strings,p=!1;if(m===void 0)e=wt(this,e,t,0),p=!ne(e)||e!==this._$AH&&e!==B,p&&(this._$AH=e);else{let f=e,h,$;for(e=m[0],h=0;h<m.length-1;h++)$=wt(this,f[r+h],t,h),$===B&&($=this._$AH[h]),p||=!ne($)||$!==this._$AH[h],$===k?e=k:e!==k&&(e+=($??"")+m[h+1]),this._$AH[h]=$}p&&!s&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Me=class extends $t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Pe=class extends $t{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},Be=class extends $t{constructor(e,t,r,s,m){super(e,t,r,s,m),this.type=5}_$AI(e,t=this){if((e=wt(this,e,t,0)??k)===B)return;let r=this._$AH,s=e===k&&r!==k||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,m=e!==k&&(r===k||s);s&&this.element.removeEventListener(this.name,this,r),m&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ue=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){wt(this,e)}},vi={M:ei,P:rt,A:ii,C:1,L:xi,R:De,D:gi,V:wt,I:Ut,H:$t,N:Pe,U:Be,B:Me,F:Ue},Ui=ti.litHtmlPolyfillSupport;Ui?.(oe,Ut),(ti.litHtmlVersions??=[]).push("3.2.1");var wi=(a,e,t)=>{let r=t?.renderBefore??e,s=r._$litPart$;if(s===void 0){let m=t?.renderBefore??null;r._$litPart$=s=new Ut(e.insertBefore(re(),m),m,void 0,t??{})}return s._$AI(a),s};var lt=class extends it{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};lt._$litElement$=!0,lt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lt});var ji=globalThis.litElementPolyfillSupport;ji?.({LitElement:lt});(globalThis.litElementVersions??=[]).push("4.1.1");var u=(s=>(s.primary="primary",s.secondary="secondary",s.surface="surface",s.plain="plain",s))(u||{}),x=class{static getStyle(e){return e?e=="plain"?n``:n` <style>
            :host,
            *,
            ::slotted(*) {
              color: var(--app-color-${e});
              background-color: var(--app-color-${e}-background);
              border-color: var(--app-color-${e}-border);
            }

            ::slotted(.h2),
            .h2 {
              color: #3f6796;
            }
          </style>`:n``}static getOposite(e){return e=="plain"?"surface":e=="primary"||e=="primary"?"secondary":e=="secondary"?"primary":"plain"}getParentTheme(e){let t=e;for(;t!=null;){if(t.theme!=null)return t.theme;t=t.parentElement}}};var d=class extends lt{};var l=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};var qi={attribute:!0,type:String,converter:ee,reflect:!1,hasChanged:ze},Vi=(a=qi,e,t)=>{let{kind:r,metadata:s}=t,m=globalThis.litPropertyMetadata.get(s);if(m===void 0&&globalThis.litPropertyMetadata.set(s,m=new Map),m.set(t.name,a),r==="accessor"){let{name:p}=t;return{set(f){let h=e.get.call(this);e.set.call(this,f),this.requestUpdate(p,h,a)},init(f){return f!==void 0&&this.P(p,void 0,a),f}}}if(r==="setter"){let{name:p}=t;return function(f){let h=this[p];e.call(this,f),this.requestUpdate(p,h,a)}}throw Error("Unsupported decorator location: "+r)};function o(a){return(e,t)=>typeof t=="object"?Vi(a,e,t):((r,s,m)=>{let p=s.hasOwnProperty(m);return s.constructor.createProperty(m,p?{...r,wrapped:!0}:r),p?Object.getOwnPropertyDescriptor(s,m):void 0})(a,e,t)}function $i(a){return o({...a,state:!0,attribute:!1})}var Et=(a,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(a,e,t),t);function g(a,e){return(t,r,s)=>{let m=p=>p.renderRoot?.querySelector(a)??null;if(e){let{get:p,set:f}=typeof r=="object"?t:s??(()=>{let h=Symbol();return{get(){return this[h]},set($){this[h]=$}}})();return Et(t,r,{get(){let h=p.call(this);return h===void 0&&(h=m(this),(h!==null||this.hasUpdated)&&f.call(this,h)),h}})}return Et(t,r,{get(){return m(this)}})}}var G=class extends d{constructor(){super(...arguments);this.theme="surface";this.header="";this.opened=!1}render(){return n`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?n` <slot></slot>`:n``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=!this.opened,console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};G.styles=c`
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
      box-sizing: border-box;
      padding-left: var(--space-2);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      cursor: pointer;
    }
  `,i([o({type:u,converter:String})],G.prototype,"theme",2),i([o({type:String})],G.prototype,"header",2),i([o({type:Boolean})],G.prototype,"opened",2),G=i([l("nidoca-accordion-item")],G);var _=class extends d{constructor(){super(...arguments);this.theme="plain";this.overline="";this.title="";this.summary="";this.text=""}render(){return n`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?n` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:n``}
        ${this.title?n` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:n``}
        ${this.summary?n`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:n``}
        ${this.text?n` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:n``}
        <slot></slot>
      </div>
    `}static example(t="",r="plain"){return n`<nidoca-article
      theme="${r}"
      slot="${t}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`}};_.styles=c`
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
      padding-bottom: var(--space);
    }
  `,i([o({type:u,converter:String})],_.prototype,"theme",2),i([o({type:String})],_.prototype,"overline",2),i([o({type:String})],_.prototype,"title",2),i([o({type:String})],_.prototype,"summary",2),i([o({type:String})],_.prototype,"text",2),_=i([l("nidoca-article")],_);var Ei=(t=>(t.single="single",t.multi="multi",t))(Ei||{}),mt=class extends d{constructor(){super(...arguments);this.theme="plain";this.accordionType="single"}updated(t){super.updated(t),t.forEach((r,s)=>{if(s=="theme"&&this.accordionSlot!=null){let m=this.accordionSlot.assignedElements();for(let p=0;p<m.length;p++){let f=m[p];f instanceof G&&(f.theme=this.theme)}}})}render(){return n`
      ${x.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let r=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let s=this.accordionSlot.assignedElements();for(let m=0;m<s.length;m++){let p=s[m];p instanceof G&&p!=r&&(p.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return n`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${_.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};mt.styles=c`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,i([o({type:u,converter:String})],mt.prototype,"theme",2),i([o({type:Ei,converter:String})],mt.prototype,"accordionType",2),i([g("#accordionSlot")],mt.prototype,"accordionSlot",2),mt=i([l("nidoca-accordion")],mt);var W=class extends d{constructor(){super(...arguments);this.theme="primary";this.shadowType="shadow_1";this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return n`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <span class="iconExtended icon ${this.shadowType}">
        <nidoca-icon
          .deactivated="${this.deactivated}"
          .clickable="${this.clickable}"
          icon="${this.icon}"
        ></nidoca-icon>
      </span>
    `}async clicked(){if(this.clickable&&!this.deactivated){let t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}static example(t=""){return n`
      <nidoca-icon-extended
        slot="${t}"
        style="padding-left:var(--space)"
        clickable
        icon="home"
        title="Mein Icon"
      ></nidoca-icon-extended>
    `}};W.styles=c`
    .icon {
      padding: var(--space);
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }

    .default {
      -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .shadow_1 {
      -moz-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    .shadow_2 {
      -moz-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .shadow_3 {
      -moz-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      -webkit-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
    }
  `,i([o({type:String})],W.prototype,"theme",2),i([o({type:Object})],W.prototype,"shadowType",2),i([o({type:String})],W.prototype,"icon",2),i([o({type:Boolean})],W.prototype,"clickable",2),i([o({type:Boolean})],W.prototype,"deactivated",2),i([o({type:String})],W.prototype,"title",2),W=i([l("nidoca-icon-extended")],W);var U=class extends d{constructor(){super(...arguments);this.icon="";this.primaryText="";this.isLast=!1;this.first=!1}render(){return n`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${"none"}"
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

          ${this.isLast?n``:n`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==1?"var(--app-color-text-primary)":t==0?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==3?"var(--app-color-success)":t==1?"var(--mdc-theme-on-primary)":t==0?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){let t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};U.styles=c`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space);
    }

    .wizard-step-connector.selected {
      padding: var(--space);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-text-color-primary);
    }
  `,i([o({type:String})],U.prototype,"icon",2),i([o({type:String})],U.prototype,"primaryText",2),i([o({type:Number})],U.prototype,"state",2),i([o({type:Boolean})],U.prototype,"isLast",2),U=i([l("nidoca-wizard-step")],U);var jt=class extends d{render(){return n`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){let t=e.target;if(t==null)return;let r=t.assignedElements(),s=0;for(let m=0;m<r.length;m++){let p=r[m];p instanceof U&&(p.index=m,p.state==0&&(s=m),p.index==r.length-1&&(p.isLast=!0))}this.changeState(s)}stepClicked(e){let t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){let t=this.wizardSlot.assignedElements();for(let r=0;r<t.length;r++){let s=t[r];s instanceof U&&s.index!==void 0&&(s.index<e?s.state=1:s.index==e?s.state=0:s.state=2)}}}};jt.styles=c``,i([g("#wizardSlot")],jt.prototype,"wizardSlot",2),jt=i([l("nidoca-wizard")],jt);var ct=class extends d{constructor(){super(...arguments);this.clickable=!0;this.theme="surface";this.text=""}render(){return n`
      <style>
        .chip:hover {
          background-color: var(--app-color-${this.theme}-background-dark);
        }
        .chip {
          background-color: var(--app-color-${this.theme}-background-light);
        }
      </style>
      <div class="chip ${this.clickable?"clickable":""}">
        <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>
        <slot></slot>
      </div>
    `}static example(t=""){return n`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};ct.styles=c`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }

    .clickable {
      cursor: pointer;
    }
  `,i([o({type:Boolean})],ct.prototype,"clickable",2),i([o({type:u,converter:String})],ct.prototype,"theme",2),i([o({type:String})],ct.prototype,"text",2),ct=i([l("nidoca-chip")],ct);var kt=class extends d{constructor(){super(...arguments);this.code="";this.theme="plain"}render(){return n`
      <style>
        code {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border: solid 1px var(--app-color-${this.theme}-border);
        }
      </style>
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}static example(t=""){return n`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};kt.styles=c`
    :host {
      display: block;
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
      border-radius: 0.375em;
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
  `,i([o({type:String})],kt.prototype,"code",2),i([o({type:String})],kt.prototype,"theme",2),kt=i([l("nidoca-code")],kt);var St=class extends d{constructor(){super();this.show=!1;addEventListener("click",t=>{let r=this.associatedElement?.getBoundingClientRect();r&&(r.top>t.clientY||r.right<t.clientX||r.left>t.clientX||r.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))})}render(){return this.show?n`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:n``}calculatePositionStyle(t){let r="";if(t){let s=t.getBoundingClientRect();s.right>window.innerWidth/2?r+=`right:${window.innerWidth-s.right}px;`:r+=`left:${s.left}px;`,s.top>window.innerHeight/2?r+=`bottom:${s.height+window.innerHeight-s.top}px;`:r+=`top:${s.bottom}px;`}return r}};St.styles=c`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,i([o({type:Boolean})],St.prototype,"show",2),i([o({type:Object})],St.prototype,"associatedElement",2),St=i([l("nidoca-elevation")],St);var je=class{static{this.PROGRESS="PROGRESS"}static{this.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}},Tt=class extends d{constructor(){super(...arguments);this.progressType=je.PROGRESS}render(){return n` <style>
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
      </style>

      <progress class="${this.progressType}"></progress>`}};Tt.styles=c``,i([o({type:u,converter:String})],Tt.prototype,"theme",2),i([o({type:je,converter:String})],Tt.prototype,"progressType",2),Tt=i([l("nidoca-progress")],Tt);var qe=(r=>(r.contained="contained",r.outlined="outlined",r.text="text",r))(qe||{}),nt=class extends d{constructor(){super(...arguments);this.theme="primary";this.buttonType="contained";this.icon="";this.text=""}render(){return n`
      <style>
        .outlined {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-text-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .contained {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .text {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${()=>{this.clicked()}}"
      >
        ${this.icon?n`<nidoca-icon
              .clickable="${!1}"
              .icon="${this.icon}"
              style="padding-right:var(--space);"
            ></nidoca-icon>`:n``}

        <nidoca-text-button theme="${this.theme}"
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return n`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};nt.styles=c`
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
  `,i([o({type:u,converter:String})],nt.prototype,"theme",2),i([o({type:qe,converter:String})],nt.prototype,"buttonType",2),i([o({type:String})],nt.prototype,"icon",2),i([o({type:String})],nt.prototype,"text",2),nt=i([l("nidoca-button")],nt);var z=class extends d{};var _t=class extends d{constructor(){super(...arguments);this.autocomplete=!0}render(){return n`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,r={};for(let m of this.getInputElements(this.slotElement)){let p=m.getOutputData();r[p.key]=p.value,t.append(p.key,p.value)}let s={};return s.jsonObject=r,s.formData=t,s}validate(){let t=!0;for(let r of this.getInputElements(this.slotElement))r.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let r=[],s=t.assignedElements({flatten:!0});for(let m=0;m<s.length;m++){let p=s[m];this.recursiveInputElementSearch(p,r)}return r}recursiveInputElementSearch(t,r){if(t instanceof z)r.push(t);else if(t.hasChildNodes()){let s=t.children;for(let m of[].slice.call(s))this.recursiveInputElementSearch(m,r)}}};_t.styles=c`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,i([o({type:Boolean})],_t.prototype,"autocomplete",2),i([g("#slotElement")],_t.prototype,"slotElement",2),_t=i([l("nidoca-form")],_t);var ki={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ve=a=>(...e)=>({_$litDirective$:a,values:e}),qt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Gi}=vi;var Si=()=>document.createComment(""),Vt=(a,e,t)=>{let r=a._$AA.parentNode,s=e===void 0?a._$AB:e._$AA;if(t===void 0){let m=r.insertBefore(Si(),s),p=r.insertBefore(Si(),s);t=new Gi(m,p,a,a.options)}else{let m=t._$AB.nextSibling,p=t._$AM,f=p!==a;if(f){let h;t._$AQ?.(a),t._$AM=a,t._$AP!==void 0&&(h=a._$AU)!==p._$AU&&t._$AP(h)}if(m!==s||f){let h=t._$AA;for(;h!==m;){let $=h.nextSibling;r.insertBefore(h,s),h=$}}}return t},pt=(a,e,t=a)=>(a._$AI(e,t),a),Wi={},Ti=(a,e=Wi)=>a._$AH=e,_i=a=>a._$AH,Ge=a=>{a._$AP?.(!1,!0);let e=a._$AA,t=a._$AB.nextSibling;for(;e!==t;){let r=e.nextSibling;e.remove(),e=r}};var Ri=(a,e,t)=>{let r=new Map;for(let s=e;s<=t;s++)r.set(a[s],s);return r},dt=Ve(class extends qt{constructor(a){if(super(a),a.type!==ki.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,e,t){let r;t===void 0?t=e:e!==void 0&&(r=e);let s=[],m=[],p=0;for(let f of a)s[p]=r?r(f,p):p,m[p]=t(f,p),p++;return{values:m,keys:s}}render(a,e,t){return this.dt(a,e,t).values}update(a,[e,t,r]){let s=_i(a),{values:m,keys:p}=this.dt(e,t,r);if(!Array.isArray(s))return this.ut=p,m;let f=this.ut??=[],h=[],$,T,b=0,E=s.length-1,y=0,R=m.length-1;for(;b<=E&&y<=R;)if(s[b]===null)b++;else if(s[E]===null)E--;else if(f[b]===p[y])h[y]=pt(s[b],m[y]),b++,y++;else if(f[E]===p[R])h[R]=pt(s[E],m[R]),E--,R--;else if(f[b]===p[R])h[R]=pt(s[b],m[R]),Vt(a,h[R+1],s[b]),b++,R--;else if(f[E]===p[y])h[y]=pt(s[E],m[y]),Vt(a,s[b],s[E]),E--,y++;else if($===void 0&&($=Ri(p,y,R),T=Ri(f,b,E)),$.has(f[b]))if($.has(f[E])){let et=T.get(p[y]),Ze=et!==void 0?s[et]:null;if(Ze===null){let oi=Vt(a,s[b]);pt(oi,m[y]),h[y]=oi}else h[y]=pt(Ze,m[y]),Vt(a,s[b],Ze),s[et]=null;y++}else Ge(s[E]),E--;else Ge(s[b]),b++;for(;y<=R;){let et=Vt(a,h[R+1]);pt(et,m[y]),h[y++]=et}for(;b<=E;){let et=s[b++];et!==null&&Ge(et)}return this.ut=p,Ti(a,h),B}});var Xi={},Rt=Ve(class extends qt{constructor(){super(...arguments),this.ot=Xi}render(a,e){return e()}update(a,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((r,s)=>r===this.ot[s]))return B}else if(this.ot===e)return B;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var L=class extends z{constructor(){super(...arguments);this.theme="surface";this.trailingIcon="";this.label="";this.errorText="";this.infoText="";this.warningText="";this.value="";this.options=[];this.name="";this.required=!0;this.multiple=!1;this.size=1}render(){return n` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: brightness(var(--app-darken-1));
        }

        option {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer">
        ${this.trailingIcon?n` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:n``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${Rt([this.value,this.options],()=>n`
                ${dt(this.options,t=>t==null?n` <option></option>`:this.isSelectedOption(t)?n` <option value="${t.key}" selected>${t.value}</option> `:n` <option value="${t.key}">${t.value}</option> `)}
              `)}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?n`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?n` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:n``}
              ${this.warningText?n` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:n``}
              ${this.errorText?n` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:n``}
            </div>
          `:n``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let r=0,s=this.selectElement.options.length;r<s;r++)this.selectElement.options[r].selected&&t.push(this.options[r].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let r=!1;for(let s of this.value)if(r=t.key===s,r)return!0}return this.value===t.key}static enumToOptions(t,r=!0){let s=[];return r&&s.push({key:"",value:""}),Object.keys(t).forEach(m=>{s.push({key:m,value:t[m]})}),s}static stringArrayToOptions(t,r=!0){let s=[];return r&&s.push({key:"",value:""}),t.forEach(m=>{s.push({key:m,value:m})}),s}static toComboboxOptions(t=null,r=null){if(t==null)return[];let s=[];return Object.values(t).forEach(m=>{let p=String(Object.keys(t)[Object.values(t).indexOf(m)]);r&&(p=p.concat(r)),s.push({key:m,value:p})}),s}};L.styles=c`
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
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    option {
      padding: 0;
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
  `,i([o({type:u,converter:String})],L.prototype,"theme",2),i([o({type:String})],L.prototype,"trailingIcon",2),i([o({type:String})],L.prototype,"label",2),i([o({type:String})],L.prototype,"errorText",2),i([o({type:String})],L.prototype,"infoText",2),i([o({type:String})],L.prototype,"warningText",2),i([o()],L.prototype,"value",2),i([o({type:Array})],L.prototype,"options",2),i([o({type:String})],L.prototype,"name",2),i([o({type:Boolean})],L.prototype,"required",2),i([o({type:Boolean})],L.prototype,"multiple",2),i([o({type:Number})],L.prototype,"size",2),i([g("#selectElement")],L.prototype,"selectElement",2),L=i([l("nidoca-form-combobox")],L);var S=a=>a??k;var J=(y=>(y.color="color",y.email="email",y.hidden="hidden",y.number="number",y.password="password",y.tel="tel",y.text="text",y.search="search",y.url="url",y.date="date",y.month="month",y.time="time",y.week="week",y))(J||{}),w=class extends z{constructor(){super(...arguments);this.type="text";this.label="";this.placeholder="";this.trailingIcon="";this.errorText="";this.infoText="";this.warningText="";this.name="";this.value="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="surface"}render(){return this.type=="hidden"?n`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:n` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-text-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }

            .parentContainer,
            ::slotted(.parentContainer) {
              border-color: var(--app-color-${this.theme}-border);
            }

            .parentContainer:focus-within,
            ::slotted(.parentContainer:focus-within) {
              border-color: var(--app-color-${this.theme}-border);
              background-color: var(--app-color-${this.theme}-selected);
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon?n` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:n``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${S(this.size)}"
                minlength="${S(this.minlength)}"
                maxlength="${S(this.maxlength)}"
                pattern="${S(this.pattern)}"
                min="${S(this.min)}"
                max="${S(this.max)}"
                step="${S(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?n`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?n` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:n``}
                  ${this.warningText?n` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:n``}
                  ${this.errorText?n` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:n``}
                </div>
              `:n``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t?.trim()}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),this.errorText==""}};w.styles=c`
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
      box-sizing: border-box;
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
  `,i([o({type:J,converter:String})],w.prototype,"type",2),i([o({type:String})],w.prototype,"label",2),i([o({type:String})],w.prototype,"placeholder",2),i([o({type:String})],w.prototype,"trailingIcon",2),i([o({type:String})],w.prototype,"errorText",2),i([o({type:String})],w.prototype,"infoText",2),i([o({type:String})],w.prototype,"warningText",2),i([o({type:String})],w.prototype,"name",2),i([o()],w.prototype,"value",2),i([o({type:Boolean})],w.prototype,"required",2),i([o({type:Boolean})],w.prototype,"disabled",2),i([o({type:Boolean})],w.prototype,"checked",2),i([o({type:Number})],w.prototype,"maxlength",2),i([o({type:Number})],w.prototype,"minlength",2),i([o({type:Number})],w.prototype,"min",2),i([o({type:Number})],w.prototype,"max",2),i([o({type:String})],w.prototype,"step",2),i([o({type:Number})],w.prototype,"size",2),i([o({type:String})],w.prototype,"pattern",2),i([g("#inputElement")],w.prototype,"inputElement",2),i([o({type:u,converter:String})],w.prototype,"theme",2),w=i([l("nidoca-form-text")],w);var We=class extends w{constructor(){super(),this.type="date"}};We=i([l("nidoca-form-date")],We);var A=class extends z{constructor(){super(...arguments);this.theme="surface";this.infoText="";this.warningText="";this.errorText="";this.name="";this.value="";this.label="";this.required=!1;this.placeholder="";this.disabled=!1;this.rows=5}render(){return n` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .parentContainer,
        ::slotted(.parentContainer) {
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          background-color: var(--app-color-${this.theme}-hover);
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

      ${this.infoText||this.warningText||this.errorText?n`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?n` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:n``}
              ${this.warningText?n` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:n``}
              ${this.errorText?n` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:n``}
            </div>
          `:n``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};A.styles=c`
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
  `,i([o({type:u,converter:String})],A.prototype,"theme",2),i([o({type:String})],A.prototype,"infoText",2),i([o({type:String})],A.prototype,"warningText",2),i([o({type:String})],A.prototype,"errorText",2),i([o({type:String})],A.prototype,"name",2),i([o()],A.prototype,"value",2),i([o({type:String})],A.prototype,"label",2),i([o({type:Boolean})],A.prototype,"required",2),i([o({type:String})],A.prototype,"placeholder",2),i([o({type:Boolean})],A.prototype,"disabled",2),i([o({type:Number})],A.prototype,"rows",2),i([g("#inputElement")],A.prototype,"inputElement",2),A=i([l("nidoca-form-textarea")],A);var Lt=class extends z{constructor(){super(...arguments);this.theme="primary"}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return n`
      <nidoca-box theme="${S(this.theme)}">
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
    `}upload(){this.inputElement?.click()}};Lt.styles=c`
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
  `,i([o({type:u,converter:String})],Lt.prototype,"theme",2),i([g("#inputElement")],Lt.prototype,"inputElement",2),Lt=i([l("nidoca-form-upload")],Lt);var O=class extends z{constructor(){super();this.name="";this.label="";this.infoText="";this.errorText="";this.warningText="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="primary";this.theme=x.prototype.getParentTheme(this)||"plain"}render(){return n`
      <style>
        .slider {
          background-color: var(--app-color-${this.theme}-border);
        }

        .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }

        input:checked + .slider:before {
          background-color: var(--app-color-text-${this.theme});
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

        ${this.infoText.length>0?n` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:n``}

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

      ${this.warningText?n` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:n``}
      ${this.errorText?n` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:n``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};O.styles=c`
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
      content: '';
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
  `,i([o({type:String})],O.prototype,"name",2),i([o({type:String})],O.prototype,"label",2),i([o({type:String})],O.prototype,"infoText",2),i([o({type:String})],O.prototype,"errorText",2),i([o({type:String})],O.prototype,"warningText",2),i([o({type:Boolean})],O.prototype,"required",2),i([o({type:Boolean})],O.prototype,"disabled",2),i([o({type:Boolean})],O.prototype,"checked",2),i([o({type:String})],O.prototype,"theme",2),i([g("#inputElement")],O.prototype,"inputElement",2),O=i([l("nidoca-form-switch")],O);var Z=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Newsletter";this.emailLabel="Deine Emailadresse";this.buttonLabel="Registrieren"}render(){return n`
      <nidoca-box theme="${S(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email"}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Z.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([o({type:u,converter:String})],Z.prototype,"theme",2),i([o({type:String,converter:String})],Z.prototype,"label",2),i([o({type:String,converter:String})],Z.prototype,"emailLabel",2),i([o({type:String,converter:String})],Z.prototype,"buttonLabel",2),i([g("#form")],Z.prototype,"formComponent",2),Z=i([l("nidoca-form-newsletter")],Z);var Q=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Passwort zur\xFCcksetzen";this.emailLabel="Deine Emailadresse";this.buttonLabel="Zur\xFCcksetzen"}render(){return n`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email"}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Q.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([o({type:u,converter:String})],Q.prototype,"theme",2),i([o({type:String,converter:String})],Q.prototype,"label",2),i([o({type:String,converter:String})],Q.prototype,"emailLabel",2),i([o({type:String,converter:String})],Q.prototype,"buttonLabel",2),i([g("#form")],Q.prototype,"formComponent",2),Q=i([l("nidoca-form-reset-password")],Q);var C=class extends d{constructor(){super(...arguments);this.theme="surface";this.label="Passwort \xE4ndern";this.oldPasswordLabel="Altes Passwort";this.newPasswordLabel="Neues Passwort";this.repeatNewPasswordLabel="Wiederholen";this.buttonLabel="\xC4ndern";this.showErrorMessageSamePassword=!1;this.errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";this.showErrorMessagePasswordDiff=!1;this.errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein"}render(){return n`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?n` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:n``}
        ${this.showErrorMessagePasswordDiff?n` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:n``}
      </nidoca-box>
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};C.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([o({type:u,converter:String})],C.prototype,"theme",2),i([o({type:String,converter:String})],C.prototype,"label",2),i([o({type:String,converter:String})],C.prototype,"oldPasswordLabel",2),i([o({type:String,converter:String})],C.prototype,"newPasswordLabel",2),i([o({type:String,converter:String})],C.prototype,"repeatNewPasswordLabel",2),i([o({type:String,converter:String})],C.prototype,"buttonLabel",2),i([g("#form")],C.prototype,"formComponent",2),i([g("#oldPassword")],C.prototype,"oldPasswordInputField",2),i([g("#newPassword")],C.prototype,"newPasswordInputField",2),i([g("#repeatNewPassword")],C.prototype,"repeatNewPasswordInputField",2),i([o()],C.prototype,"errorMessageSamePasswordLabel",2),i([o()],C.prototype,"errorMessagePasswordDiffLabel",2),C=i([l("nidoca-form-change-password")],C);var X=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Registrieren";this.emailLabel="Email";this.passwordLabel="Passwort";this.buttonLabel="Registrieren"}render(){return n`
      <nidoca-box theme="${S(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email"}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};X.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([o({type:u,converter:String})],X.prototype,"theme",2),i([o({type:String,converter:String})],X.prototype,"label",2),i([o({type:String,converter:String})],X.prototype,"emailLabel",2),i([o({type:String,converter:String})],X.prototype,"passwordLabel",2),i([o({type:String,converter:String})],X.prototype,"buttonLabel",2),i([g("#form")],X.prototype,"formComponent",2),X=i([l("nidoca-form-register")],X);var Gt=class extends d{constructor(){super(...arguments);this.code=""}render(){return n``}};Gt.styles=c``,i([o({type:String})],Gt.prototype,"code",2),Gt=i([l("nidoca-upload")],Gt);var At=class extends d{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return n`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};At.styles=c`
    :host,
    ::slotted(:host) {
      display: block;
      width: 100%;
      padding-right: var(--space-2);
      padding-left: var(--space-2);
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
      text-align: center;
    }
    ::slotted(slot),
    div {
      display: block;
    }
    .hr {
      border-bottom-style: solid;
      border-width: thin;
    }
  `,i([o({type:u,converter:String})],At.prototype,"theme",2),i([o({type:String,converter:String})],At.prototype,"text",2),At=i([l("nidoca-hr")],At);var Ct=class extends d{constructor(){super(...arguments);this.text="";this.icon=""}render(){return n`
      <div class="container">
        ${this.icon?n` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:n``}
        ${this.text?n` <nidoca-text-button>${this.text}</nidoca-text-button>`:n``}
        <slot></slot>
      </div>
    `}static example(t=""){return n`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};Ct.styles=c`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,i([o({type:String})],Ct.prototype,"text",2),i([o({type:String})],Ct.prototype,"icon",2),Ct=i([l("nidoca-menu-area")],Ct);var j=class extends d{constructor(){super(...arguments);this.text="";this.icon="";this.selected=!1;this.theme="surface"}render(){return n`
      <style>
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?n` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:n``}
        ${this.text?n` <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>`:n``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return n`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};j.styles=c`
    .container {
      display: flex;
      cursor: pointer;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));
    }
  `,i([o({type:String})],j.prototype,"text",2),i([o({type:String})],j.prototype,"icon",2),i([o({type:Boolean})],j.prototype,"selected",2),i([o({type:String})],j.prototype,"theme",2),j=i([l("nidoca-menu-item")],j);var It=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return n` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((r,s)=>{if(s=="theme"&&this.slotElement!=null){let m=this.slotElement.assignedElements();for(let p=0;p<m.length;p++){let f=m[p];f instanceof j&&(f.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let r=this.slotElement.assignedElements();for(let s=0;s<r.length;s++){let m=r[s];if(m instanceof j){let p=m.getBoundingClientRect();p.left<t.x&&p.right>t.x&&(p.top<t.y&&p.bottom>t.y?m.selected=!0:m.selected=!1)}}}})}static example(t=""){return n`
      <nidoca-menu slot="${t}" theme="primary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"></nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"></nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"></nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"></nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"></nidoca-menu-item>
      </nidoca-menu>
    `}};It.styles=c`
    :host,
    slot {
      display: block;
    }
  `,i([o({type:String})],It.prototype,"theme",2),i([g("#slotElement")],It.prototype,"slotElement",2),It=i([l("nidoca-menu")],It);var Y=class extends d{constructor(){super(...arguments);this.height="auto";this.width="auto";this.left="auto";this.top="auto";this.right="auto";this.bottom="auto"}render(){return n`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,r,s,m,p,f){return"height:".concat(t).concat(";").concat("width:").concat(r).concat(";").concat("left:").concat(s).concat(";").concat("right:").concat(m).concat(";").concat("top:").concat(p).concat(";").concat("bottom:").concat(f).concat(";")}};Y.styles=c`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,i([o({type:String})],Y.prototype,"height",2),i([o({type:String})],Y.prototype,"width",2),i([o({type:String})],Y.prototype,"left",2),i([o({type:String})],Y.prototype,"top",2),i([o({type:String})],Y.prototype,"right",2),i([o({type:String})],Y.prototype,"bottom",2),Y=i([l("nidoca-layout-floating")],Y);var Wt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      ${x.getStyle(this.theme)}
      <slot></slot>
    `}};Wt.styles=c`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,i([o({type:String})],Wt.prototype,"theme",2),Wt=i([l("nidoca-container")],Wt);var Ot=class extends d{constructor(){super();this.hideSidebox=!0;this.theme=x.prototype.getParentTheme(this)||"plain"}render(){return n` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .sidebox {
          border-color: var(--app-color-${this.theme}-border);
          border-left-style: solid;
          border-width: thin;
        }
      </style>
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox?n``:n` <slot class="sidebox" name="sidebox"></slot>`}`}};Ot.styles=c`
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

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: 640px) {
      .sidebox {
        width: 100%;
      }
    }
  `,i([o({type:u,converter:String})],Ot.prototype,"theme",2),i([o({type:Boolean,converter:String})],Ot.prototype,"hideSidebox",2),Ot=i([l("nidoca-split-screen")],Ot);var q=class extends d{constructor(){super(...arguments);this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return n`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.title}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}async clicked(){if(this.clickable&&!this.deactivated){let t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}static example(t=""){return n`
      <nidoca-icon
        slot="${t}"
        style="padding-left:var(--space)"
        clickable
        icon="menu"
        title="Mein Icon"
      ></nidoca-icon>
    `}};q.styles=c`
    :host {
      display: inline-block;
      font-size: var(--icon-size);
    }
    .material-icons {
      font-family: 'Material Icons';
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
      font-feature-settings: 'liga';
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
  `,i([o({type:String})],q.prototype,"icon",2),i([o({type:Boolean})],q.prototype,"clickable",2),i([o({type:Boolean})],q.prototype,"deactivated",2),i([o({type:String})],q.prototype,"title",2),q=i([l("nidoca-icon")],q);var Xt=class extends d{render(){return n`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(this.rippleContainerElement!=null){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);let t=this.rippleContainerElement.getBoundingClientRect(),r=Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${r}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};Xt.styles=c`
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

    [anim='ripple'] {
      position: relative;
      overflow: hidden;
    }

    [anim='ripple']:before {
      content: '';
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
  `,i([g("#rippleContainer")],Xt.prototype,"rippleContainerElement",2),Xt=i([l("nidoca-ripple")],Xt);var H=class extends d{constructor(){super(...arguments);this.src="";this.width="auto";this.height="auto";this.zoom=!1}render(){return this.src?n`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:n``}static example(t=""){return n`<nidoca-img width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img>`}};H.styles=c`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }

    :host .zoom:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }
  `,i([o({type:String})],H.prototype,"src",2),i([o({type:String})],H.prototype,"width",2),i([o({type:String})],H.prototype,"height",2),i([o({type:Boolean})],H.prototype,"zoom",2),H=i([l("nidoca-img")],H);var zt=class extends H{static example(e=""){return n`<nidoca-img-round width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img-round>`}};zt.styles=c`
    :host {
      font-size: 0;
      display: inline-block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }

    :host .zoom:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }
  `,zt=i([l("nidoca-img-round")],zt);var Ht=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:n``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let r=t.target;if(r==null)return;let s=r.assignedElements();for(let m=0;m<s.length;m++){let p=s[m];if(p instanceof H){this.selected==null&&m==0&&(this.selected=p.cloneNode(!0)),p.addEventListener("click",h=>{h.target&&(this.selected=h.target.cloneNode(!0))}),p.width="148px";let f=p.classList;f.contains("img")||f.add("img")}}}};Ht.styles=c`
    :host,
    ::slotted(:host) {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      align-self: center;
    }

    slot,
    ::slotted(slot) {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      width: 100%;
    }

    ::slotted(.img) {
      cursor: pointer;
    }

    .container {
      text-align: center;
    }
  `,i([o({type:u,converter:String})],Ht.prototype,"theme",2),i([$i()],Ht.prototype,"selected",2),Ht=i([l("nidoca-img-slider")],Ht);var Yt=class extends d{constructor(){super(...arguments);this.src=""}render(){return n`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Yt.styles=c``,i([o({type:String})],Yt.prototype,"src",2),Yt=i([l("nidoca-movie")],Yt);var D=class extends d{constructor(){super(...arguments);this.label="";this.placeholder="";this.name="";this.min=1;this.max=10;this.errorText="";this.numberOne=1;this.numberTwo=1}render(){return n`
      <nidoca-form-text
        theme="${S(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${"number"}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,r){return Math.random()*(r-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};D.styles=c`
    :host {
      display: block;
      width: 100%;
    }
  `,i([o({type:u,converter:String})],D.prototype,"theme",2),i([o({type:String})],D.prototype,"label",2),i([o({type:String})],D.prototype,"placeholder",2),i([o({type:String})],D.prototype,"name",2),i([o({type:Number})],D.prototype,"min",2),i([o({type:Number})],D.prototype,"max",2),i([o({type:String})],D.prototype,"errorText",2),i([g("#inputfield")],D.prototype,"inputfield",2),D=i([l("nidoca-form-captcha")],D);var ht=class extends d{constructor(){super(...arguments);this.text="";this.href="";this.targetType="_self"}render(){return n`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};ht.styles=c`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,i([o({type:String})],ht.prototype,"text",2),i([o({type:String})],ht.prototype,"href",2),i([o({type:String})],ht.prototype,"targetType",2),ht=i([l("nidoca-link")],ht);var I=class extends d{constructor(){super(...arguments);this.theme="surface";this.primaryText="";this.secondaryText="";this.selected=!1}render(){return n`
      <style>
        .container {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
        .container.selected {
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div @click="${()=>this.switchSelected()}" class="container ${this.selected?"selected":""}">
        <slot name="left" class="item left"></slot>
        <div class="containerTypography">
          ${this.primaryText?n` <nidoca-text-body theme="${this.theme}" class="item">${this.primaryText} </nidoca-text-body>`:n``}
          <slot></slot>
          ${this.secondaryText?n` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-caption>`:n``}
          <slot name="secondary"></slot>
        </div>
        <slot name="right" class="item right"></slot>
      </div>
    `}switchSelected(){this.selected=!this.selected,this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this.selected,bubbles:!0,composed:!0}))}static example(t=""){return n`<nidoca-list-item
      theme="primary"
      slot="${t}"
      primaryText="List Item"
      secondaryText="List Item Secondary Text"
    >
      ${zt.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};I.styles=c`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: min-content 1fr min-content;
      padding: var(--space-2);
    }

    .item {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .left {
      padding-right: var(--space-2);
    }

    .right {
      padding-left: var(--space-2);
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `,i([o({type:u,converter:String})],I.prototype,"theme",2),i([o({type:String})],I.prototype,"primaryText",2),i([o({type:String})],I.prototype,"secondaryText",2),i([o({type:Boolean})],I.prototype,"selected",2),I=i([l("nidoca-list-item")],I);var ot=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return n`
      <style>
        :host {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background-dark);
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }

        :host {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <nidoca-text-body theme="${this.theme}" style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-body>
    `}static example(){return n`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};ot.styles=c`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,i([o({type:u,converter:String})],ot.prototype,"theme",2),i([o({type:String})],ot.prototype,"text",2),ot=i([l("nidoca-list-section")],ot);var ut=class extends d{constructor(){super(...arguments);this.theme="surface";this.multiselect=!1}updated(t){super.updated(t),t.forEach((r,s)=>{s=="theme"&&this.getItems().forEach(m=>{m.theme=this.theme})})}render(){return n`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let r=t.target;r.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let r=this.slotElement.assignedElements();for(let s=0;s<r.length;s++){let m=r[s];m instanceof I&&t.push(m)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let r=this.slotElement.assignedElements();for(let s=0;s<r.length;s++){let m=r[s];m instanceof I&&m.selected&&t.push(m)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let r=this.slotElement.assignedElements(),s=0;for(let m=0;m<r.length;m++){let p=r[m];p instanceof I&&(p.selected&&t.push(s),s++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return n`<nidoca-list theme="primary">
      ${ot.example()} ${I.example()} ${I.example()} ${I.example()}
    </nidoca-list>`}};ut.styles=c`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,i([o({type:u,converter:String})],ut.prototype,"theme",2),i([o({type:Boolean})],ut.prototype,"multiselect",2),i([g("#slotElement")],ut.prototype,"slotElement",2),ut=i([l("nidoca-list")],ut);var Dt=class extends d{constructor(){super(...arguments);this.theme="primary";this.prominent=!1}render(){return n`
      <style>
        * {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>

      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?n` <slot class="prominent" name="prominent"></slot>`:n``}
    `}static example(t=""){return n`
      <nidoca-top-app-bar slot="${t}" style="min-height: 48px;" theme="primary" prominent>
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>
        <nidoca-search-bar theme="primary" slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>
    `}};Dt.styles=c`
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
      box-sizing: border-box;
    }

    slot {
      display: flex;
      align-items: center;
      flex-basis: auto;
    }

    .prominent {
      display: block;
    }
  `,i([o({type:String,converter:String})],Dt.prototype,"theme",2),i([o({type:Boolean})],Dt.prototype,"prominent",2),Dt=i([l("nidoca-top-app-bar")],Dt);var ft=class extends d{constructor(){super(...arguments);this.headers=["column 1","column 2"];this.rows=[["row 1",new q],["row 2",new q]];this.theme="plain"}render(){return n`
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
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <div>
        <table>
          <thead>
            ${Rt([this.headers],()=>n` ${dt(this.headers,t=>n` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${Rt([this.rows],()=>n`
                  ${dt(this.rows,t=>n`
                        <tr>
                          ${dt(t,r=>n` <td colspan="1" rowspan="1">${r}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};ft.styles=c`
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
  `,i([o({type:Array})],ft.prototype,"headers",2),i([o({type:Array})],ft.prototype,"rows",2),i([o({type:u,converter:String})],ft.prototype,"theme",2),ft=i([l("nidoca-table")],ft);var gt=class extends d{constructor(){super(...arguments);this.selected=!1}render(){return this.selected?n` <slot></slot>`:n``}};gt.styles=c`
    :host,
    slot {
      display: block;
    }
  `,i([o({type:Boolean})],gt.prototype,"selected",2),gt=i([l("nidoca-tab-content")],gt);var K=class extends d{constructor(){super(...arguments);this.selected=!1;this.text="";this.theme="surface"}render(){return n`
      <style>
        .container {
          color: var(--app-color-text-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background-light);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
        :hover {
          border-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.tabClicked()}">
        ${this.text?n` <nidoca-text text="${this.text}"></nidoca-text> `:n``}
        <slot></slot>
      </div>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};K.styles=c`
    :host {
      display: block;
      margin-right: var(--space);
      overflow: hidden;
    }

    .container {
      box-sizing: border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }

    slot {
      display: block;
    }
  `,i([o({type:Boolean})],K.prototype,"selected",2),i([o({type:String})],K.prototype,"text",2),i([o({type:String})],K.prototype,"theme",2),K=i([l("nidoca-tab")],K);var st=class extends d{constructor(){super(...arguments);this.theme="surface";this.tabIndex=0}render(){return n`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),s=100/t.length,m=t[this.tabIndex];for(let p=0;p<t.length;p++){let f=t[p];f instanceof K&&(f.theme=this.theme,f.style.width=String(s).concat("%"),f==m?(f.selected=!0,f.classList.add("SELECTED")):(f.selected=!1,f.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let r=this.tabContentSlot.assignedElements();for(let s=0;s<r.length;s++){let m=r[s];m instanceof gt&&(this.tabIndex==t?m.selected=!0:m.selected=!1,t++)}}}tabClicked(t){let r=t.detail;this.changeTabIndex(r)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let r=this.tabSlot.assignedElements();for(let s=0;s<r.length;s++){let m=r[s];if(m instanceof K&&m==t){this.tabIndex=s;break}}}}static example(t=""){return n`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};st.styles=c`
    :host {
      display: block;
      width: 100%;
    }
    slot {
      display: block;
    }

    .container {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 100%;
    }

    #tabSlot {
      display: flex;
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      align-items: end;
      justify-content: center;
    }
  `,i([g("#tabSlot")],st.prototype,"tabSlot",2),i([g("#tabContentSlot")],st.prototype,"tabContentSlot",2),i([o({type:String})],st.prototype,"theme",2),i([o({type:Number})],st.prototype,"tabIndex",2),st=i([l("nidoca-tabs")],st);var F=class extends d{constructor(){super();this.hideLeft=!0;this.prominent=!1;document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let r=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-r.width}})}updated(t){super.updated(t)}render(){return n`
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
    `}};F.styles=c`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
      color: var(--app-color-text-primary);
      background-color: var(--app-color-primary-background);
      min-width: 280px;
      min-height: 100%;
      max-height: 100%;
    }

    #left.hideLeft {
      transition: all 0.35s ease;
      display: none;
    }

    @media screen and (max-width: 640px) {
      #left {
        position: fixed;
        z-index: 1;
      }
    }

    .right {
      width: 100%;
      height: 100vh;
      overflow: scroll;
    }
  `,i([o({type:Boolean})],F.prototype,"hideLeft",2),i([o({type:Boolean})],F.prototype,"prominent",2),i([g("#header")],F.prototype,"headerElement",2),i([g("#left")],F.prototype,"leftElement",2),i([g("#content")],F.prototype,"contentElement",2),F=i([l("nidoca-template")],F);var bt=class extends d{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{this.videoElement&&(this.videoElement.srcObject=t)})}render(){return n`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};bt.styles=c``,i([g("#video")],bt.prototype,"videoElement",2),i([g("#canvas")],bt.prototype,"canvasElement",2),i([g("#click-photo")],bt.prototype,"buttonElement",2),bt=i([l("nidoca-video")],bt);var Mt=class extends d{constructor(){super(...arguments);this.src="";this.canvasElements=[];this.storeCanvasElements=[]}render(){return n`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>n`${t}`)}
    `}updated(t){super.updated(t),t.forEach((r,s)=>{if(console.debug(`${this.tagName} : property ${String(s)} changed. oldValue: ${r}`),s=="src"){this.convert();let m=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let r=document.createElement("canvas");r.width=t[0],r.height=t[1];let s=r.getContext("2d");s&&this.img&&(this.img.crossOrigin="anonymous",s.drawImage(this.img,0,0,t[0],t[1]),r.toBlob(m=>{},"image/webp")),this.canvasElements.push(r)}),this.requestUpdate()})}};Mt.styles=c``,i([o({type:String})],Mt.prototype,"src",2),i([g("#img")],Mt.prototype,"img",2),Mt=i([l("nidoca-svg-2-webp")],Mt);var v=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return n`<style>
        slot {
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}static example(t=""){return n`
      <div slot="${t}">
        <nidoca-text-h1>nidoca-text-h1</nidoca-text-h1>
        <nidoca-text-h2>nidoca-text-h2</nidoca-text-h2>
        <nidoca-text-h3>nidoca-text-h3</nidoca-text-h3>
        <nidoca-text-h4>nidoca-text-h4</nidoca-text-h4>
        <nidoca-text-h5>nidoca-text-h5</nidoca-text-h5>
        <nidoca-text-h6>nidoca-text-h6</nidoca-text-h6>
        <nidoca-text>nidoca-text</nidoca-text>
        <nidoca-text-body>nidoca-text-body</nidoca-text-body>
        <nidoca-text-overline>nidoca-text-overline</nidoca-text-overline>
        <nidoca-text-subtitle>nidoca-text-subtitle</nidoca-text-subtitle>
        <nidoca-text-caption>nidoca-text-caption</nidoca-text-caption>
        <nidoca-text-button>nidoca-text-button</nidoca-text-button>
        <nidoca-text-error>nidoca-text-error</nidoca-text-error>
        <nidoca-text-warning>nidoca-text-warning</nidoca-text-warning>
        <nidoca-text-info>nidoca-text-info</nidoca-text-info>
        <nidoca-text-success>nidoca-text-success</nidoca-text-success>
      </div>
    `}};v.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 100%;
    }

    slot {
    }
  `,i([o({type:u,converter:String})],v.prototype,"theme",2),i([o({type:String})],v.prototype,"text",2),v=i([l("nidoca-text")],v);var se=class extends v{render(){return n` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};se.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 105%;
    }
  `,se=i([l("nidoca-text-body")],se);var ae=class extends v{render(){return n`${super.render()}`}};ae.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `,ae=i([l("nidoca-text-button")],ae);var le=class extends v{};le.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,le=i([l("nidoca-text-overline")],le);var me=class extends v{render(){return n` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};me.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,me=i([l("nidoca-text-subtitle")],me);var M=class extends v{render(){return n`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};M.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,M=i([l("nidoca-text-caption")],M);var Xe=class extends M{render(){return n`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Xe=i([l("nidoca-text-error")],Xe);var Ye=class extends M{render(){return n`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ye=i([l("nidoca-text-success")],Ye);var Ke=class extends M{render(){return n`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ke=i([l("nidoca-text-warning")],Ke);var Je=class extends M{render(){return n`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Je=i([l("nidoca-text-info")],Je);var ce=class extends v{};ce.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,ce=i([l("nidoca-text-h1")],ce);var pe=class extends v{};pe.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `,pe=i([l("nidoca-text-h2")],pe);var de=class extends v{};de.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,de=i([l("nidoca-text-h3")],de);var he=class extends v{};he.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,he=i([l("nidoca-text-h4")],he);var ue=class extends v{};ue.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,ue=i([l("nidoca-text-h5")],ue);var fe=class extends v{};fe.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,fe=i([l("nidoca-text-h6")],fe);var N=class extends d{constructor(){super(...arguments);this.value="";this.placeholder="";this.disabled=!1;this.theme="surface"}render(){return n`
      <style>
        .container,
        input {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .container:focus-within,
        input:focus-within {
          border-color: var(--app-color-${this.theme}-selected);
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container border">
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
      </div>
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",r=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",r.type,JSON.stringify(r.detail)),this.dispatchEvent(r)}static example(t=""){return n`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};N.styles=c`
    :host {
      width: 100%;
      display: block;
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
      box-sizing: border-box;
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
  `,i([o({type:String})],N.prototype,"value",2),i([o({type:String})],N.prototype,"placeholder",2),i([o({type:Boolean})],N.prototype,"disabled",2),i([g("#inputElement")],N.prototype,"inputElement",2),i([o({type:u,converter:String})],N.prototype,"theme",2),N=i([l("nidoca-search-bar")],N);var ge=class{static{this.CENTER="CENTER"}static{this.LEFT="LEFT"}static{this.RIGHT="RIGHT"}static{this.TOP="TOP"}static{this.BOTTOM="BOTTOM"}static{this.SLIDE_CENTER="SLIDE_CENTER"}static{this.SLIDE_LEFT="SLIDE_LEFT"}static{this.SLIDE_RIGHT="SLIDE_RIGHT"}static{this.SLIDE_TOP="SLIDE_TOP"}static{this.SLIDE_BOTTOM="SLIDE_BOTTOM"}},Pt=class extends d{constructor(){super(...arguments);this.transitionType=ge.CENTER;this.duration=.5}render(){return n` <div class="${S(this.transitionType)}"><slot></slot></div> `}};Pt.styles=c`
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
  `,i([o({type:String})],Pt.prototype,"transitionType",2),i([o({type:Number})],Pt.prototype,"duration",2),Pt=i([l("nidoca-transition")],Pt);var Kt=class extends d{constructor(){super(...arguments);this.show=!1}render(){return this.show?n`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${ge.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:n``}};Kt.styles=c`
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
  `,i([o({type:Boolean})],Kt.prototype,"show",2),Kt=i([l("nidoca-dialog")],Kt);var tt=class extends d{constructor(){super(...arguments);this.show=!1;this.title="Ja oder Nein ?";this.description="Entscheide dich";this.labelButtonYes="Ja";this.labelButtonNo="Nein"}render(){return n`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${"text"}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${"text"}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};tt.styles=c``,i([o({type:Boolean})],tt.prototype,"show",2),i([o({type:String})],tt.prototype,"title",2),i([o({type:String})],tt.prototype,"description",2),i([o({type:String})],tt.prototype,"labelButtonYes",2),i([o({type:String})],tt.prototype,"labelButtonNo",2),tt=i([l("nidoca-dialog-decision")],tt);var Jt=class extends d{constructor(){super(...arguments);this.icon=""}render(){return n`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `}static example(t="",r="surface"){return n`
      <nidoca-infobox slot="${t}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${r}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${r}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `}};Jt.styles=c`
    :host {
      display: block;
      text-align: center;
    }
    slot {
      display: block;
      padding-top: var(--icon-size);
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-bottom: var(--space-2);
    }

    .card {
      display: block;
      margin-top: calc(((var(--icon-size) / 2) +var(--space)) * -1);
    }
  `,i([o({type:String})],Jt.prototype,"icon",2),Jt=i([l("nidoca-infobox")],Jt);var at=class extends d{constructor(){super(...arguments);this.theme="surface";this.src="";this.title="";this.subtitle=""}render(){return n`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.src}"></nidoca-img-round>
                <div style="padding: var(--space);">
                <nidoca-text-body style="text-align:center;" theme="${this.theme}">${this.title}</nidoca-text-body>
                <nidoca-text-caption style="text-align:center;" theme="${this.theme}">${this.subtitle}</nidoca-text-caption>

  </div>
            </div>
            </div>`}static example(t=""){return n`<nidoca-avatar
      width="64px"
      width="64px"
      slot="${t}"
      title="Dominik Bruhn"
      subtitle="Softwareentwickler"
      src="face.jpg"
      >Dominik Bruhn</nidoca-avatar
    >`}};at.styles=c`
    :host {
      display: block;
    }
  `,i([o({type:u,converter:String})],at.prototype,"theme",2),i([o({type:String})],at.prototype,"src",2),i([o({type:String})],at.prototype,"title",2),i([o({type:String})],at.prototype,"subtitle",2),at=i([l("nidoca-avatar")],at);var Zt=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return n`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Zt.styles=c`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
      height: 100%;
    }
    slot {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `,i([o({type:u,converter:String})],Zt.prototype,"theme",2),Zt=i([l("nidoca-card")],Zt);var be=class extends d{render(){return n`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){let t=e.target;if(t==null)return;let r=t.assignedElements();for(let s=0;s<r.length;s++){let p=r[s].classList;p.contains("flexItem")||p.add("flexItem"),p.contains("flexItemDevice")||p.add("flexItemDevice")}}};be.styles=c`
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
  `,be=i([l("nidoca-gallery")],be);var ye=class extends d{render(){return n`<slot></slot>`}print(){let e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};ye.styles=c`
    :host {
      display: none;
    }
  `,ye=i([l("nidoca-print")],ye);var xe=class extends d{render(){return n`
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){let r=e.target.assignedElements(),s=r.length;for(let m=0;m<s;m++){let f=r[m].classList,h="item_count_"+s;f.contains(h)||f.add(h)}}};xe.styles=c`
    :host {
      display: block;
      margin: auto;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }

    ::slotted(.item_count_1) {
      flex-basis: 100%;
      width: 100%;
    }
    ::slotted(.item_count_2) {
      flex-basis: 50%;
      width: 50%;
    }
    ::slotted(.item_count_3) {
      flex-basis: 33.3%;
      width: 33.3%;
    }
    ::slotted(.item_count_4) {
      flex-basis: 25%;
      width: 25%;
    }

    @media only screen and (max-width: 1007px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      ::slotted(.item_count_1),
      ::slotted(.item_count_2),
      ::slotted(.item_count_3),
      ::slotted(.item_count_4) {
        flex-basis: 100%;
        width: 100%;
      }
    }
  `,xe=i([l("nidoca-section")],xe);var ve=class extends d{render(){return n` <slot></slot>`}};ve.styles=c`
    :host {
      display: block;
    }

    slot {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: stretch;
      width: 50%;
      margin: auto;
    }

    @media only screen and (max-width: 1007px) {
      slot {
        width: 100%;
      }
    }
  `,ve=i([l("nidoca-dashboard")],ve);var we=class extends d{render(){return n` <slot></slot>`}};we.styles=c`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,we=i([l("nidoca-dashboard-box-25")],we);var $e=class extends d{render(){return n` <slot></slot>`}};$e.styles=c`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,$e=i([l("nidoca-dashboard-box-50")],$e);var Ee=class extends d{render(){return n` <slot></slot>`}};Ee.styles=c`
    :host {
      width: 100%;
      display: block;
    }
  `,Ee=i([l("nidoca-dashboard-box-100")],Ee);var Bt=class extends d{constructor(){super(...arguments);this.clickable=!0;this.title=""}render(){return n`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Bt.styles=c`
    :host {
      padding: var(--space-2);
      box-sizing: border-box;
    }

    :host,
    nidoca-card {
      display: block;
      height: 100%;
      width: 100%;
    }

    .clickable {
      cursor: pointer;
    }
  `,i([o({type:Boolean})],Bt.prototype,"clickable",2),i([o({type:String})],Bt.prototype,"title",2),Bt=i([l("nidoca-dashboard-card")],Bt);var Qt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      ${x.getStyle(this.theme)}
      <slot></slot>
    `}};Qt.styles=c`
    :host {
      display: block;
      padding: var(--space-6);
      box-sizing: border-box;
    }
    slot {
      display: block;
      margin: auto;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      :host {
        padding: var(--space-4);
      }
    }

    @media only screen and (max-width: 640px) {
      :host {
        padding: var(--space-2);
      }
    }
  `,i([o({type:u,converter:String})],Qt.prototype,"theme",2),Qt=i([l("nidoca-box")],Qt);var P=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Deine Nachricht";this.nameLabel="Dein Name";this.emailLabel="Deine Email";this.titleLabel="Betreff";this.messageLabel="Deine Nachricht";this.buttonLabel="Senden"}render(){return n`
      <nidoca-box theme="${S(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${"text"}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email"}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"text"}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${x.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${"contained"}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};P.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([o({type:u,converter:String})],P.prototype,"theme",2),i([o({type:String,converter:String})],P.prototype,"label",2),i([o({type:String,converter:String})],P.prototype,"nameLabel",2),i([o({type:String,converter:String})],P.prototype,"emailLabel",2),i([o({type:String,converter:String})],P.prototype,"titleLabel",2),i([o({type:String,converter:String})],P.prototype,"messageLabel",2),i([o({type:String,converter:String})],P.prototype,"buttonLabel",2),i([g("#authenitcate-form")],P.prototype,"formComponent",2),P=i([l("nidoca-form-contact")],P);var ke=class extends d{render(){return n`
     huhu xxx
    `}};ke.styles=c``,ke=i([l("nidoca-page-main")],ke);var Se=class extends d{render(){return n`
      <nidoca-container>
        <nidoca-section>
          <nidoca-img-slider>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2014/10/23/20/51/iphone-500291__340.jpg"></nidoca-img>
            <nidoca-img src="https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg"></nidoca-img>
          </nidoca-img-slider>

          <nidoca-article
            style="padding:var(--space-8);"
            title="Auktionsvorlage"
            overline="Responsive moderne Auktionsvorlage für Ihre Produkte"
            summary="Digitales Produkt, direkter Download, kostenloser Versand"
          >
            <nidoca-text-body>
              Mit dieser Auktionsvorlage verbessern Sie Ihre Verkaufschancen und erhöhen Ihren Umsatz. Durch das moderne
              Design und responsive Layout heben Sie sich deutlich von der Konkurrenz ab und überzeugen durch ein
              seriösen, ausdrucksstarken Auftritt.
            </nidoca-text-body>

            <nidoca-section style="padding-top:var(--space-2);">
              <nidoca-button style="padding-right:var(--space-2);" icon="shopping_cart">Sofort-Kaufen</nidoca-button>
              <nidoca-button
                style=""
                icon="contact_support"
                @click="${()=>window.open("https://www.ebay.de/contact/sendmsg?&recipient=dortmund.digital","_blanck")}"
                >Frage stellen</nidoca-button
              >
            </nidoca-section>
          </nidoca-article>
        </nidoca-section>

        <nidoca-hr text="Unser Angebot"></nidoca-hr>

        <nidoca-section style="padding-bottom:var(--space-3);">
          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Weiterer Vertriebskanal</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>
          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Zeit sparen</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>

          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>

          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>
        </nidoca-section>

        <nidoca-hr text="Ihre Vorteile"></nidoca-hr>

        <nidoca-section style="padding-bottom:var(--space-3);">
          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Weiterer Vertriebskanal</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>
          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Zeit sparen</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>

          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>

          <nidoca-infobox icon="handshake" class="infobox">
            <nidoca-text-h5 theme="surface">Community</nidoca-text-h5>
            <nidoca-text-body theme="surface"
              >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere
              Community stärken.</nidoca-text-body
            >
          </nidoca-infobox>
        </nidoca-section>

        <nidoca-section style="padding-top:var(--space-8);">
          <nidoca-article title="Digital-U GmbH">
            <nidoca-text-body
              >Die Digital-U GmbH wurde im Jahr 2016 gegründet. Der Firmensitz befindet sich in der Bier- und
              Fußballhauptstadt Dortmund. Wir sind ein junges Team, das es sich zur Aufgabe gemacht hat, echten Mehrwert
              für Unternehmen zu schaffen.</nidoca-text-body
            >
            <nidoca-text-body
              >Für unsere Kunden entwickeln wir digitale Lösungen und individuelle Benutzeroberflächen. Dabei setzen wir
              auf aktuelle Technologien und einer agilen Softwareentwicklung. Egal ob moderne progressive
              Webanwendungen, native Apps oder klassische Desktopoberflächen. Unser Team besteht aus Mitarbeitern aus
              den Bereichen Betriebswirtschaft, Marketing und Vertrieb und IT mit insgesamt über einem halben
              Jahrhundert Berufserfahrung.</nidoca-text-body
            >
            <nidoca-section style="padding-top:var(--space-2);">
              <nidoca-button
                style="padding-right:var(--space-2);"
                @click="${()=>window.open("https://www.ebay.de/usr/dortmund.digital","_blanck")}"
                >Verkäuferprofil</nidoca-button
              >
              <nidoca-button
                @click="${()=>window.open("https://feedback.ebay.de/fdbk/feedback_profile/dortmund.digital","_blanck")}"
                >Unsere Bewertungen</nidoca-button
              >
            </nidoca-section>
          </nidoca-article>
          <nidoca-img
            width="320px"
            style="text-align:center;"
            src="https://github.com/DortmundDigital/android-webview/raw/main/taxlancer/logo.png"
          ></nidoca-img>
        </nidoca-section>
      </nidoca-container>
    `}};Se.styles=c`
    .infobox {
      padding: var(--space-2);
    }
  `,Se=i([l("nidoca-page-product-template")],Se);var Te=class extends d{render(){return n`
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
            <nidoca-link href="https://ec.europa.eu/consumers/odr" targetType="_blanck"
              >https://ec.europa.eu/consumers/odr
            </nidoca-link>
            . <br />Unsere E-Mail-Adresse und Telefonnummer finden Sie oben auf dieser Seite.
          </nidoca-text>
          <nidoca-text>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </nidoca-text>
        </nidoca-article>
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
        <nidoca-article title="Quelle">
          <nidoca-link href="https://www.e-recht24.de/impressum-generator.html" targetType="_blanck"
            >https://www.e-recht24.de/impressum-generator.html
          </nidoca-link>
        </nidoca-article>
        <nidoca-article title="Google Material Icons">
          <nidoca-text> Unser Framework und diese Seite verwenden die Google Material Icons Bibliothek: </nidoca-text>
          <nidoca-link href="https://fonts.google.com/icons" targetType="_blanck"
            >https://fonts.google.com/icons
          </nidoca-link>
        </nidoca-article>
        <nidoca-article title="Google Fonts">
          <nidoca-text> Unser Framework und diese Seite verwenden Google Fonts: </nidoca-text>
          <nidoca-link href="https://fonts.google.com/" targetType="_blanck"> https://fonts.google.com/ </nidoca-link>
        </nidoca-article>
        <nidoca-article title="Bilder von Pixabay">
          <nidoca-text> Diese Seite verwendet Bilder von Pixabay </nidoca-text>
          <nidoca-link href="https://pixabay.com" targetType="_blanck">pixabay.com</nidoca-link>
        </nidoca-article>
      </nidoca-container>
    `}};Te.styles=c`
    nidoca-article {
      padding-bottom: var(--space-2);
    }
  `,Te=i([l("nidoca-page-imprint")],Te);var Ft=class extends d{constructor(){super(...arguments);this.cssVars=[]}firstUpdated(){let t=(r=document.styleSheets)=>{let s=[];return Array.from(r).forEach(m=>{Array.from(m.cssRules).forEach(p=>{if(!p||!p.style)return;let f=p.style;Array.from(f).forEach(h=>{h.startsWith("--")&&s.indexOf(h)==-1&&s.push(h)})})}),s};this.cssVars=t(),console.log(this.cssVars)}render(){return n`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${Rt([this.cssVars],()=>n`
                ${dt(this.cssVars,t=>n`
                    <nidoca-form-text
                      style="width:100%;padding-bottom: var(--space-3);"
                      @input="${r=>{document.documentElement.style.setProperty(t,r.target?r.target.getOutputData().value:"")}}"
                      type="${t.indexOf("color")>-1?"color":"text"}"
                      name="${t}"
                      value="${getComputedStyle(document.documentElement).getPropertyValue(t).trim()}"
                      label="${t}"
                    ></nidoca-form-text>
                  `)}
              `)}
        </nidoca-article>
      </nidoca-container>
    `}};Ft.styles=c``,i([o({type:Array})],Ft.prototype,"cssVars",2),Ft=i([l("nidoca-page-settings")],Ft);var _e=class extends d{render(){return n``}};_e.styles=c``,_e=i([l("nidoca-page-privacy")],_e);var Re=class extends d{render(){return n``}};Re.styles=c``,Re=i([l("nidoca-page-terms-of-use")],Re);var V=class a{constructor(){this.listeners=[],window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",e=>{if(!this.shouldIgnoreEvent(e)){let t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}})}static getUniqueInstance(){return a.uniqueInstance||(a.uniqueInstance=new a),a.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){if(e.indexOf("#")==-1&&(e="#".concat(e)),console.trace("navigate to: %s",e),t!=null&&console.trace("state: %s",JSON.stringify(t)),document.location.hash===e){console.trace("you are already on page: "+e);return}history.pushState(t,"",e),this.notifyListeners()}getCurrentState(){return history.state}getStateProperty(e){let t=this.getCurrentState();return t!=null?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){let e=this.getCurrentPage();this.listeners.forEach(t=>t.routeChanged(e))}shouldIgnoreEvent(e){return e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(let r of e.composedPath?e.composedPath():[])if(this.isAnchor(r))return r;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&e.nodeName.toLowerCase()==="a"}shouldIgnoreAnchor(e){return!!(e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){let t=e.port,r=e.protocol,p=r==="http:"&&t==="80"||r==="https:"&&t==="443"?e.hostname:e.host;return`${r}//${p}`}};var Le=class extends d{constructor(){super();this.content=n``;V.getUniqueInstance().subscribe(this),this.routeChanged(V.getUniqueInstance().getCurrentPage())}routeChanged(t){switch(t){case"privacy":this.content=n`<nidoca-page-privacy></nidoca-page-privacy>`;break;case"imprint":this.content=n`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"settings":this.content=n`<nidoca-page-settings></nidoca-page-settings>`;break;case"terms-of-use":this.content=n`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"product-template":this.content=n`<nidoca-page-product-template></nidoca-page-product-template>`;break;case"main":this.content=n`<nidoca-page-main></nidoca-page-main>`;break;default:this.content=n`<nidoca-page-main></nidoca-page-main>`}}render(){return n`
      <nidoca-template>
        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_self"
          href="https://domoskanonos.github.io/nidoca-webcomponents/"
          >Homepage</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-webcomponents/docs/index.html"
          >Typedoc</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://github.com/domoskanonos/nidoca-webcomponents"
          >Github</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-lit-viewer/"
          >Spielwiese</nidoca-link
        >

        <div slot="content">${this.content}</div>

        <div slot="left" style="height:var(--height-medium);"></div>
        <nidoca-menu slot="left" theme="primary">
          <nidoca-menu-item
            @nidoca-event-menu-item-clicked="${()=>{V.getUniqueInstance().navigate("#main")}}"
            icon="home"
            text="Start"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Produkt-Template"
            @nidoca-event-menu-item-clicked="${()=>{V.getUniqueInstance().navigate("#product-template")}}"
          ></nidoca-menu-item>

          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
          <nidoca-menu-item
            text="Impressum"
            @nidoca-event-menu-item-clicked="${()=>{V.getUniqueInstance().navigate("#imprint")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Datenschutz"
            @nidoca-event-menu-item-clicked="${()=>{V.getUniqueInstance().navigate("#privacy")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @nidoca-event-menu-item-clicked="${()=>{V.getUniqueInstance().navigate("#terms-of-use")}}"
          ></nidoca-menu-item>
          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
          <nidoca-menu-item
            text="Einstellungen"
            @nidoca-event-menu-item-clicked="${()=>{V.getUniqueInstance().navigate("#settings")}}"
          ></nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
    `}};i([o({type:Object})],Le.prototype,"content",2),Le=i([l("nidoca-my-app")],Le);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/guard.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
