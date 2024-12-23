"use strict";(()=>{var $r=Object.defineProperty;var Er=Object.getOwnPropertyDescriptor;var r=(a,e,t,o)=>{for(var s=o>1?void 0:o?Er(e,t):e,l=a.length-1,c;l>=0;l--)(c=a[l])&&(s=(o?c(e,t,s):c(s))||s);return o&&s&&$r(e,t,s),s};var Ee=globalThis,we=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ve=Symbol(),Fe=new WeakMap,Zt=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(we&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=Fe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Fe.set(t,e))}return e}toString(){return this.cssText}},Ne=a=>new Zt(typeof a=="string"?a:a+"",void 0,Ve),p=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((o,s,l)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+a[l+1],a[0]);return new Zt(t,a,Ve)},Ge=(a,e)=>{if(we)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),s=Ee.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,a.appendChild(o)}},ke=we?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return Ne(t)})(a):a;var{is:wr,defineProperty:kr,getOwnPropertyDescriptor:Sr,getOwnPropertyNames:Tr,getOwnPropertySymbols:_r,getPrototypeOf:Rr}=Object,Se=globalThis,tr=Se.trustedTypes,Lr=tr?tr.emptyScript:"",Ar=Se.reactiveElementPolyfillSupport,Qt=(a,e)=>a,Ft={toAttribute(a,e){switch(e){case Boolean:a=a?Lr:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Te=(a,e)=>!wr(a,e),er={attribute:!0,type:String,converter:Ft,reflect:!1,hasChanged:Te};Symbol.metadata??=Symbol("metadata"),Se.litPropertyMetadata??=new WeakMap;var tt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=er){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&kr(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){let{get:s,set:l}=Sr(this.prototype,e)??{get(){return this[t]},set(c){this[t]=c}};return{get(){return s?.call(this)},set(c){let f=s?.call(this);l.call(this,c),this.requestUpdate(e,f,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??er}static _$Ei(){if(this.hasOwnProperty(Qt("elementProperties")))return;let e=Rr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qt("properties"))){let t=this.properties,o=[...Tr(t),..._r(t)];for(let s of o)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let s of o)t.unshift(ke(s))}else e!==void 0&&t.push(ke(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ge(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){let o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){let l=(o.converter?.toAttribute!==void 0?o.converter:Ft).toAttribute(t,o.type);this._$Em=e,l==null?this.removeAttribute(s):this.setAttribute(s,l),this._$Em=null}}_$AK(e,t){let o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let l=o.getPropertyOptions(s),c=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:Ft;this._$Em=s,this[s]=c.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Te)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,l]of this._$Ep)this[s]=l;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[s,l]of o)l.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],l)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},tt[Qt("elementProperties")]=new Map,tt[Qt("finalized")]=new Map,Ar?.({ReactiveElement:tt}),(Se.reactiveElementVersions??=[]).push("2.0.4");var Ye=globalThis,_e=Ye.trustedTypes,rr=_e?_e.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ke="$lit$",et=`lit$${Math.random().toFixed(9).slice(2)}$`,Je="?"+et,Cr=`<${Je}>`,yt=document,te=()=>yt.createComment(""),ee=a=>a===null||typeof a!="object"&&typeof a!="function",We=Array.isArray,lr=a=>We(a)||typeof a?.[Symbol.iterator]=="function",Xe=`[ 	
\f\r]`,Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,or=/-->/g,ir=/>/g,gt=RegExp(`>|${Xe}(?:([^\\s"'>=/]+)(${Xe}*=${Xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nr=/'/g,sr=/"/g,mr=/^(?:script|style|textarea|title)$/i,Ze=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),n=Ze(1),Xr=Ze(2),Yr=Ze(3),B=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),ar=new WeakMap,bt=yt.createTreeWalker(yt,129);function pr(a,e){if(!We(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return rr!==void 0?rr.createHTML(e):e}var cr=(a,e)=>{let t=a.length-1,o=[],s,l=e===2?"<svg>":e===3?"<math>":"",c=Nt;for(let f=0;f<t;f++){let h=a[f],E,T,b=-1,w=0;for(;w<h.length&&(c.lastIndex=w,T=c.exec(h),T!==null);)w=c.lastIndex,c===Nt?T[1]==="!--"?c=or:T[1]!==void 0?c=ir:T[2]!==void 0?(mr.test(T[2])&&(s=RegExp("</"+T[2],"g")),c=gt):T[3]!==void 0&&(c=gt):c===gt?T[0]===">"?(c=s??Nt,b=-1):T[1]===void 0?b=-2:(b=c.lastIndex-T[2].length,E=T[1],c=T[3]===void 0?gt:T[3]==='"'?sr:nr):c===sr||c===nr?c=gt:c===or||c===ir?c=Nt:(c=gt,s=void 0);let y=c===gt&&a[f+1].startsWith("/>")?" ":"";l+=c===Nt?h+Cr:b>=0?(o.push(E),h.slice(0,b)+Ke+h.slice(b)+et+y):h+et+(b===-2?f:y)}return[pr(a,l+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},re=class a{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let l=0,c=0,f=e.length-1,h=this.parts,[E,T]=cr(e,t);if(this.el=a.createElement(E,o),bt.currentNode=this.el.content,t===2||t===3){let b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(s=bt.nextNode())!==null&&h.length<f;){if(s.nodeType===1){if(s.hasAttributes())for(let b of s.getAttributeNames())if(b.endsWith(Ke)){let w=T[c++],y=s.getAttribute(b).split(et),R=/([.?@])?(.*)/.exec(w);h.push({type:1,index:l,name:R[2],strings:y,ctor:R[1]==="."?Le:R[1]==="?"?Ae:R[1]==="@"?Ce:vt}),s.removeAttribute(b)}else b.startsWith(et)&&(h.push({type:6,index:l}),s.removeAttribute(b));if(mr.test(s.tagName)){let b=s.textContent.split(et),w=b.length-1;if(w>0){s.textContent=_e?_e.emptyScript:"";for(let y=0;y<w;y++)s.append(b[y],te()),bt.nextNode(),h.push({type:2,index:++l});s.append(b[w],te())}}}else if(s.nodeType===8)if(s.data===Je)h.push({type:2,index:l});else{let b=-1;for(;(b=s.data.indexOf(et,b+1))!==-1;)h.push({type:7,index:l}),b+=et.length-1}l++}}static createElement(e,t){let o=yt.createElement("template");return o.innerHTML=e,o}};function xt(a,e,t=a,o){if(e===B)return e;let s=o!==void 0?t._$Co?.[o]:t._$Cl,l=ee(e)?void 0:e._$litDirective$;return s?.constructor!==l&&(s?._$AO?.(!1),l===void 0?s=void 0:(s=new l(a),s._$AT(a,t,o)),o!==void 0?(t._$Co??=[])[o]=s:t._$Cl=s),s!==void 0&&(e=xt(a,s._$AS(a,e.values),s,o)),e}var Re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??yt).importNode(t,!0);bt.currentNode=s;let l=bt.nextNode(),c=0,f=0,h=o[0];for(;h!==void 0;){if(c===h.index){let E;h.type===2?E=new Mt(l,l.nextSibling,this,e):h.type===1?E=new h.ctor(l,h.name,h.strings,this,e):h.type===6&&(E=new Oe(l,this,e)),this._$AV.push(E),h=o[++f]}c!==h?.index&&(l=bt.nextNode(),c++)}return bt.currentNode=yt,s}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},Mt=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=xt(this,e,t),ee(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):lr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(yt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=re.createElement(pr(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{let l=new Re(s,this),c=l.u(this.options);l.p(t),this.T(c),this._$AH=l}}_$AC(e){let t=ar.get(e.strings);return t===void 0&&ar.set(e.strings,t=new re(e)),t}k(e){We(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,s=0;for(let l of e)s===t.length?t.push(o=new a(this.O(te()),this.O(te()),this,this.options)):o=t[s],o._$AI(l),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},vt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,l){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=k}_$AI(e,t=this,o,s){let l=this.strings,c=!1;if(l===void 0)e=xt(this,e,t,0),c=!ee(e)||e!==this._$AH&&e!==B,c&&(this._$AH=e);else{let f=e,h,E;for(e=l[0],h=0;h<l.length-1;h++)E=xt(this,f[o+h],t,h),E===B&&(E=this._$AH[h]),c||=!ee(E)||E!==this._$AH[h],E===k?e=k:e!==k&&(e+=(E??"")+l[h+1]),this._$AH[h]=E}c&&!s&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Le=class extends vt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Ae=class extends vt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},Ce=class extends vt{constructor(e,t,o,s,l){super(e,t,o,s,l),this.type=5}_$AI(e,t=this){if((e=xt(this,e,t,0)??k)===B)return;let o=this._$AH,s=e===k&&o!==k||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,l=e!==k&&(o===k||s);s&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Oe=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){xt(this,e)}},dr={M:Ke,P:et,A:Je,C:1,L:cr,R:Re,D:lr,V:xt,I:Mt,H:vt,N:Ae,U:Ce,B:Le,F:Oe},Or=Ye.litHtmlPolyfillSupport;Or?.(re,Mt),(Ye.litHtmlVersions??=[]).push("3.2.1");var hr=(a,e,t)=>{let o=t?.renderBefore??e,s=o._$litPart$;if(s===void 0){let l=t?.renderBefore??null;o._$litPart$=s=new Mt(e.insertBefore(te(),l),l,void 0,t??{})}return s._$AI(a),s};var at=class extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=hr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});var Hr=globalThis.litElementPolyfillSupport;Hr?.({LitElement:at});(globalThis.litElementVersions??=[]).push("4.1.1");var u=(s=>(s.primary="primary",s.secondary="secondary",s.surface="surface",s.plain="plain",s))(u||{}),x=class{static getStyle(e){return e?e=="plain"?n``:n` <style>
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
          </style>`:n``}static getOposite(e){return e=="plain"?"surface":e=="primary"||e=="primary"?"secondary":e=="secondary"?"primary":"plain"}getParentTheme(e){let t=e;for(;t!=null;){if(t.theme!=null)return t.theme;t=t.parentElement}}};var d=class extends at{};var m=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};var Ir={attribute:!0,type:String,converter:Ft,reflect:!1,hasChanged:Te},zr=(a=Ir,e,t)=>{let{kind:o,metadata:s}=t,l=globalThis.litPropertyMetadata.get(s);if(l===void 0&&globalThis.litPropertyMetadata.set(s,l=new Map),l.set(t.name,a),o==="accessor"){let{name:c}=t;return{set(f){let h=e.get.call(this);e.set.call(this,f),this.requestUpdate(c,h,a)},init(f){return f!==void 0&&this.P(c,void 0,a),f}}}if(o==="setter"){let{name:c}=t;return function(f){let h=this[c];e.call(this,f),this.requestUpdate(c,h,a)}}throw Error("Unsupported decorator location: "+o)};function i(a){return(e,t)=>typeof t=="object"?zr(a,e,t):((o,s,l)=>{let c=s.hasOwnProperty(l);return s.constructor.createProperty(l,c?{...o,wrapped:!0}:o),c?Object.getOwnPropertyDescriptor(s,l):void 0})(a,e,t)}function ur(a){return i({...a,state:!0,attribute:!1})}var $t=(a,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(a,e,t),t);function g(a,e){return(t,o,s)=>{let l=c=>c.renderRoot?.querySelector(a)??null;if(e){let{get:c,set:f}=typeof o=="object"?t:s??(()=>{let h=Symbol();return{get(){return this[h]},set(E){this[h]=E}}})();return $t(t,o,{get(){let h=c.call(this);return h===void 0&&(h=l(this),(h!==null||this.hasUpdated)&&f.call(this,h)),h}})}return $t(t,o,{get(){return l(this)}})}}var V=class extends d{constructor(){super(...arguments);this.theme="surface";this.header="";this.opened=!1}render(){return n`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?n` <slot></slot>`:n``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=!this.opened,console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};V.styles=p`
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
  `,r([i({type:u,converter:String})],V.prototype,"theme",2),r([i({type:String})],V.prototype,"header",2),r([i({type:Boolean})],V.prototype,"opened",2),V=r([m("nidoca-accordion-item")],V);var _=class extends d{constructor(){super(...arguments);this.theme="plain";this.overline="";this.title="";this.summary="";this.text=""}render(){return n`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?n` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:n``}
        ${this.title?n` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:n``}
        ${this.summary?n`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:n``}
        ${this.text?n` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:n``}
        <slot></slot>
      </div>
    `}static example(t="",o="plain"){return n`<nidoca-article
      theme="${o}"
      slot="${t}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`}};_.styles=p`
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
  `,r([i({type:u,converter:String})],_.prototype,"theme",2),r([i({type:String})],_.prototype,"overline",2),r([i({type:String})],_.prototype,"title",2),r([i({type:String})],_.prototype,"summary",2),r([i({type:String})],_.prototype,"text",2),_=r([m("nidoca-article")],_);var fr=(t=>(t.single="single",t.multi="multi",t))(fr||{}),lt=class extends d{constructor(){super(...arguments);this.theme="plain";this.accordionType="single"}updated(t){super.updated(t),t.forEach((o,s)=>{if(s=="theme"&&this.accordionSlot!=null){let l=this.accordionSlot.assignedElements();for(let c=0;c<l.length;c++){let f=l[c];f instanceof V&&(f.theme=this.theme)}}})}render(){return n`
      ${x.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let o=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let s=this.accordionSlot.assignedElements();for(let l=0;l<s.length;l++){let c=s[l];c instanceof V&&c!=o&&(c.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return n`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${_.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};lt.styles=p`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,r([i({type:u,converter:String})],lt.prototype,"theme",2),r([i({type:fr,converter:String})],lt.prototype,"accordionType",2),r([g("#accordionSlot")],lt.prototype,"accordionSlot",2),lt=r([m("nidoca-accordion")],lt);var G=class extends d{constructor(){super(...arguments);this.theme="primary";this.shadowType="shadow_1";this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return n`
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
    `}};G.styles=p`
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
  `,r([i({type:String})],G.prototype,"theme",2),r([i({type:Object})],G.prototype,"shadowType",2),r([i({type:String})],G.prototype,"icon",2),r([i({type:Boolean})],G.prototype,"clickable",2),r([i({type:Boolean})],G.prototype,"deactivated",2),r([i({type:String})],G.prototype,"title",2),G=r([m("nidoca-icon-extended")],G);var U=class extends d{constructor(){super(...arguments);this.icon="";this.primaryText="";this.isLast=!1;this.first=!1}render(){return n`
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
    `}determineBackgroundColor(t){return t==1?"var(--app-color-text-primary)":t==0?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==3?"var(--app-color-success)":t==1?"var(--mdc-theme-on-primary)":t==0?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){let t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};U.styles=p`
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
  `,r([i({type:String})],U.prototype,"icon",2),r([i({type:String})],U.prototype,"primaryText",2),r([i({type:Number})],U.prototype,"state",2),r([i({type:Boolean})],U.prototype,"isLast",2),U=r([m("nidoca-wizard-step")],U);var Dt=class extends d{render(){return n`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){let t=e.target;if(t==null)return;let o=t.assignedElements(),s=0;for(let l=0;l<o.length;l++){let c=o[l];c instanceof U&&(c.index=l,c.state==0&&(s=l),c.index==o.length-1&&(c.isLast=!0))}this.changeState(s)}stepClicked(e){let t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){let t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){let s=t[o];s instanceof U&&s.index!==void 0&&(s.index<e?s.state=1:s.index==e?s.state=0:s.state=2)}}}};Dt.styles=p``,r([g("#wizardSlot")],Dt.prototype,"wizardSlot",2),Dt=r([m("nidoca-wizard")],Dt);var mt=class extends d{constructor(){super(...arguments);this.clickable=!0;this.theme="surface";this.text=""}render(){return n`
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
    `}static example(t=""){return n`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};mt.styles=p`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }

    .clickable {
      cursor: pointer;
    }
  `,r([i({type:Boolean})],mt.prototype,"clickable",2),r([i({type:u,converter:String})],mt.prototype,"theme",2),r([i({type:String})],mt.prototype,"text",2),mt=r([m("nidoca-chip")],mt);var Et=class extends d{constructor(){super(...arguments);this.code="";this.theme="plain"}render(){return n`
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
    `}static example(t=""){return n`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};Et.styles=p`
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
  `,r([i({type:String})],Et.prototype,"code",2),r([i({type:String})],Et.prototype,"theme",2),Et=r([m("nidoca-code")],Et);var wt=class extends d{constructor(){super();this.show=!1;addEventListener("click",t=>{let o=this.associatedElement?.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))})}render(){return this.show?n`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:n``}calculatePositionStyle(t){let o="";if(t){let s=t.getBoundingClientRect();s.right>window.innerWidth/2?o+=`right:${window.innerWidth-s.right}px;`:o+=`left:${s.left}px;`,s.top>window.innerHeight/2?o+=`bottom:${s.height+window.innerHeight-s.top}px;`:o+=`top:${s.bottom}px;`}return o}};wt.styles=p`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,r([i({type:Boolean})],wt.prototype,"show",2),r([i({type:Object})],wt.prototype,"associatedElement",2),wt=r([m("nidoca-elevation")],wt);var He=class{static{this.PROGRESS="PROGRESS"}static{this.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}},kt=class extends d{constructor(){super(...arguments);this.progressType=He.PROGRESS}render(){return n` <style>
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

      <progress class="${this.progressType}"></progress>`}};kt.styles=p``,r([i({type:u,converter:String})],kt.prototype,"theme",2),r([i({type:He,converter:String})],kt.prototype,"progressType",2),kt=r([m("nidoca-progress")],kt);var Ie=(o=>(o.contained="contained",o.outlined="outlined",o.text="text",o))(Ie||{}),rt=class extends d{constructor(){super(...arguments);this.theme="primary";this.buttonType="contained";this.icon="";this.text=""}render(){return n`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return n`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};rt.styles=p`
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
  `,r([i({type:u,converter:String})],rt.prototype,"theme",2),r([i({type:Ie,converter:String})],rt.prototype,"buttonType",2),r([i({type:String})],rt.prototype,"icon",2),r([i({type:String})],rt.prototype,"text",2),rt=r([m("nidoca-button")],rt);var I=class extends d{};var St=class extends d{constructor(){super(...arguments);this.autocomplete=!0}render(){return n`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,o={};for(let l of this.getInputElements(this.slotElement)){let c=l.getOutputData();o[c.key]=c.value,t.append(c.key,c.value)}let s={};return s.jsonObject=o,s.formData=t,s}validate(){let t=!0;for(let o of this.getInputElements(this.slotElement))o.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let o=[],s=t.assignedElements({flatten:!0});for(let l=0;l<s.length;l++){let c=s[l];this.recursiveInputElementSearch(c,o)}return o}recursiveInputElementSearch(t,o){if(t instanceof I)o.push(t);else if(t.hasChildNodes()){let s=t.children;for(let l of[].slice.call(s))this.recursiveInputElementSearch(l,o)}}};St.styles=p`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,r([i({type:Boolean})],St.prototype,"autocomplete",2),r([g("#slotElement")],St.prototype,"slotElement",2),St=r([m("nidoca-form")],St);var gr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ze=a=>(...e)=>({_$litDirective$:a,values:e}),Bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Pr}=dr;var br=()=>document.createComment(""),Ut=(a,e,t)=>{let o=a._$AA.parentNode,s=e===void 0?a._$AB:e._$AA;if(t===void 0){let l=o.insertBefore(br(),s),c=o.insertBefore(br(),s);t=new Pr(l,c,a,a.options)}else{let l=t._$AB.nextSibling,c=t._$AM,f=c!==a;if(f){let h;t._$AQ?.(a),t._$AM=a,t._$AP!==void 0&&(h=a._$AU)!==c._$AU&&t._$AP(h)}if(l!==s||f){let h=t._$AA;for(;h!==l;){let E=h.nextSibling;o.insertBefore(h,s),h=E}}}return t},pt=(a,e,t=a)=>(a._$AI(e,t),a),Mr={},yr=(a,e=Mr)=>a._$AH=e,xr=a=>a._$AH,Pe=a=>{a._$AP?.(!1,!0);let e=a._$AA,t=a._$AB.nextSibling;for(;e!==t;){let o=e.nextSibling;e.remove(),e=o}};var vr=(a,e,t)=>{let o=new Map;for(let s=e;s<=t;s++)o.set(a[s],s);return o},qt=ze(class extends Bt{constructor(a){if(super(a),a.type!==gr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,e,t){let o;t===void 0?t=e:e!==void 0&&(o=e);let s=[],l=[],c=0;for(let f of a)s[c]=o?o(f,c):c,l[c]=t(f,c),c++;return{values:l,keys:s}}render(a,e,t){return this.dt(a,e,t).values}update(a,[e,t,o]){let s=xr(a),{values:l,keys:c}=this.dt(e,t,o);if(!Array.isArray(s))return this.ut=c,l;let f=this.ut??=[],h=[],E,T,b=0,w=s.length-1,y=0,R=l.length-1;for(;b<=w&&y<=R;)if(s[b]===null)b++;else if(s[w]===null)w--;else if(f[b]===c[y])h[y]=pt(s[b],l[y]),b++,y++;else if(f[w]===c[R])h[R]=pt(s[w],l[R]),w--,R--;else if(f[b]===c[R])h[R]=pt(s[b],l[R]),Ut(a,h[R+1],s[b]),b++,R--;else if(f[w]===c[y])h[y]=pt(s[w],l[y]),Ut(a,s[b],s[w]),w--,y++;else if(E===void 0&&(E=vr(c,y,R),T=vr(f,b,w)),E.has(f[b]))if(E.has(f[w])){let N=T.get(c[y]),je=N!==void 0?s[N]:null;if(je===null){let Qe=Ut(a,s[b]);pt(Qe,l[y]),h[y]=Qe}else h[y]=pt(je,l[y]),Ut(a,s[b],je),s[N]=null;y++}else Pe(s[w]),w--;else Pe(s[b]),b++;for(;y<=R;){let N=Ut(a,h[R+1]);pt(N,l[y]),h[y++]=N}for(;b<=w;){let N=s[b++];N!==null&&Pe(N)}return this.ut=c,yr(a,h),B}});var Dr={},oe=ze(class extends Bt{constructor(){super(...arguments),this.ot=Dr}render(a,e){return e()}update(a,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,s)=>o===this.ot[s]))return B}else if(this.ot===e)return B;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var L=class extends I{constructor(){super(...arguments);this.theme="surface";this.trailingIcon="";this.label="";this.errorText="";this.infoText="";this.warningText="";this.value="";this.options=[];this.name="";this.required=!0;this.multiple=!1;this.size=1}render(){return n` <style>
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
            ${oe([this.value,this.options],()=>n`
                ${qt(this.options,t=>t==null?n` <option></option>`:this.isSelectedOption(t)?n` <option value="${t.key}" selected>${t.value}</option> `:n` <option value="${t.key}">${t.value}</option> `)}
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
          `:n``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let o=0,s=this.selectElement.options.length;o<s;o++)this.selectElement.options[o].selected&&t.push(this.options[o].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let o=!1;for(let s of this.value)if(o=t.key===s,o)return!0}return this.value===t.key}static enumToOptions(t,o=!0){let s=[];return o&&s.push({key:"",value:""}),Object.keys(t).forEach(l=>{s.push({key:l,value:t[l]})}),s}static stringArrayToOptions(t,o=!0){let s=[];return o&&s.push({key:"",value:""}),t.forEach(l=>{s.push({key:l,value:l})}),s}static toComboboxOptions(t=null,o=null){if(t==null)return[];let s=[];return Object.values(t).forEach(l=>{let c=String(Object.keys(t)[Object.values(t).indexOf(l)]);o&&(c=c.concat(o)),s.push({key:l,value:c})}),s}};L.styles=p`
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
  `,r([i({type:u,converter:String})],L.prototype,"theme",2),r([i({type:String})],L.prototype,"trailingIcon",2),r([i({type:String})],L.prototype,"label",2),r([i({type:String})],L.prototype,"errorText",2),r([i({type:String})],L.prototype,"infoText",2),r([i({type:String})],L.prototype,"warningText",2),r([i()],L.prototype,"value",2),r([i({type:Array})],L.prototype,"options",2),r([i({type:String})],L.prototype,"name",2),r([i({type:Boolean})],L.prototype,"required",2),r([i({type:Boolean})],L.prototype,"multiple",2),r([i({type:Number})],L.prototype,"size",2),r([g("#selectElement")],L.prototype,"selectElement",2),L=r([m("nidoca-form-combobox")],L);var S=a=>a??k;var ot=(y=>(y.color="color",y.email="email",y.hidden="hidden",y.number="number",y.password="password",y.tel="tel",y.text="text",y.search="search",y.url="url",y.date="date",y.month="month",y.time="time",y.week="week",y))(ot||{}),$=class extends I{constructor(){super(...arguments);this.type="text";this.label="";this.placeholder="";this.trailingIcon="";this.errorText="";this.infoText="";this.warningText="";this.name="";this.value="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="surface"}render(){return this.type=="hidden"?n`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:n` <style>
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
              `:n``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t?.trim()}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),this.errorText==""}};$.styles=p`
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
  `,r([i({type:ot,converter:String})],$.prototype,"type",2),r([i({type:String})],$.prototype,"label",2),r([i({type:String})],$.prototype,"placeholder",2),r([i({type:String})],$.prototype,"trailingIcon",2),r([i({type:String})],$.prototype,"errorText",2),r([i({type:String})],$.prototype,"infoText",2),r([i({type:String})],$.prototype,"warningText",2),r([i({type:String})],$.prototype,"name",2),r([i()],$.prototype,"value",2),r([i({type:Boolean})],$.prototype,"required",2),r([i({type:Boolean})],$.prototype,"disabled",2),r([i({type:Boolean})],$.prototype,"checked",2),r([i({type:Number})],$.prototype,"maxlength",2),r([i({type:Number})],$.prototype,"minlength",2),r([i({type:Number})],$.prototype,"min",2),r([i({type:Number})],$.prototype,"max",2),r([i({type:String})],$.prototype,"step",2),r([i({type:Number})],$.prototype,"size",2),r([i({type:String})],$.prototype,"pattern",2),r([g("#inputElement")],$.prototype,"inputElement",2),r([i({type:u,converter:String})],$.prototype,"theme",2),$=r([m("nidoca-form-text")],$);var Me=class extends ${constructor(){super(),this.type="date"}};Me=r([m("nidoca-form-date")],Me);var A=class extends I{constructor(){super(...arguments);this.theme="surface";this.infoText="";this.warningText="";this.errorText="";this.name="";this.value="";this.label="";this.required=!1;this.placeholder="";this.disabled=!1;this.rows=5}render(){return n` <style>
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
          `:n``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};A.styles=p`
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
  `,r([i({type:u,converter:String})],A.prototype,"theme",2),r([i({type:String})],A.prototype,"infoText",2),r([i({type:String})],A.prototype,"warningText",2),r([i({type:String})],A.prototype,"errorText",2),r([i({type:String})],A.prototype,"name",2),r([i()],A.prototype,"value",2),r([i({type:String})],A.prototype,"label",2),r([i({type:Boolean})],A.prototype,"required",2),r([i({type:String})],A.prototype,"placeholder",2),r([i({type:Boolean})],A.prototype,"disabled",2),r([i({type:Number})],A.prototype,"rows",2),r([g("#inputElement")],A.prototype,"inputElement",2),A=r([m("nidoca-form-textarea")],A);var Tt=class extends I{constructor(){super(...arguments);this.theme="primary"}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return n`
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
    `}upload(){this.inputElement?.click()}};Tt.styles=p`
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
  `,r([i({type:u,converter:String})],Tt.prototype,"theme",2),r([g("#inputElement")],Tt.prototype,"inputElement",2),Tt=r([m("nidoca-form-upload")],Tt);var H=class extends I{constructor(){super();this.name="";this.label="";this.infoText="";this.errorText="";this.warningText="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="primary";this.theme=x.prototype.getParentTheme(this)||"plain"}render(){return n`
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
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};H.styles=p`
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
  `,r([i({type:String})],H.prototype,"name",2),r([i({type:String})],H.prototype,"label",2),r([i({type:String})],H.prototype,"infoText",2),r([i({type:String})],H.prototype,"errorText",2),r([i({type:String})],H.prototype,"warningText",2),r([i({type:Boolean})],H.prototype,"required",2),r([i({type:Boolean})],H.prototype,"disabled",2),r([i({type:Boolean})],H.prototype,"checked",2),r([i({type:String})],H.prototype,"theme",2),r([g("#inputElement")],H.prototype,"inputElement",2),H=r([m("nidoca-form-switch")],H);var J=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Newsletter";this.emailLabel="Deine Emailadresse";this.buttonLabel="Registrieren"}render(){return n`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};J.styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:u,converter:String})],J.prototype,"theme",2),r([i({type:String,converter:String})],J.prototype,"label",2),r([i({type:String,converter:String})],J.prototype,"emailLabel",2),r([i({type:String,converter:String})],J.prototype,"buttonLabel",2),r([g("#form")],J.prototype,"formComponent",2),J=r([m("nidoca-form-newsletter")],J);var W=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Passwort zur\xFCcksetzen";this.emailLabel="Deine Emailadresse";this.buttonLabel="Zur\xFCcksetzen"}render(){return n`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};W.styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:u,converter:String})],W.prototype,"theme",2),r([i({type:String,converter:String})],W.prototype,"label",2),r([i({type:String,converter:String})],W.prototype,"emailLabel",2),r([i({type:String,converter:String})],W.prototype,"buttonLabel",2),r([g("#form")],W.prototype,"formComponent",2),W=r([m("nidoca-form-reset-password")],W);var C=class extends d{constructor(){super(...arguments);this.theme="surface";this.label="Passwort \xE4ndern";this.oldPasswordLabel="Altes Passwort";this.newPasswordLabel="Neues Passwort";this.repeatNewPasswordLabel="Wiederholen";this.buttonLabel="\xC4ndern";this.showErrorMessageSamePassword=!1;this.errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";this.showErrorMessagePasswordDiff=!1;this.errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein"}render(){return n`
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
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};C.styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:u,converter:String})],C.prototype,"theme",2),r([i({type:String,converter:String})],C.prototype,"label",2),r([i({type:String,converter:String})],C.prototype,"oldPasswordLabel",2),r([i({type:String,converter:String})],C.prototype,"newPasswordLabel",2),r([i({type:String,converter:String})],C.prototype,"repeatNewPasswordLabel",2),r([i({type:String,converter:String})],C.prototype,"buttonLabel",2),r([g("#form")],C.prototype,"formComponent",2),r([g("#oldPassword")],C.prototype,"oldPasswordInputField",2),r([g("#newPassword")],C.prototype,"newPasswordInputField",2),r([g("#repeatNewPassword")],C.prototype,"repeatNewPasswordInputField",2),r([i()],C.prototype,"errorMessageSamePasswordLabel",2),r([i()],C.prototype,"errorMessagePasswordDiffLabel",2),C=r([m("nidoca-form-change-password")],C);var X=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Registrieren";this.emailLabel="Email";this.passwordLabel="Passwort";this.buttonLabel="Registrieren"}render(){return n`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};X.styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:u,converter:String})],X.prototype,"theme",2),r([i({type:String,converter:String})],X.prototype,"label",2),r([i({type:String,converter:String})],X.prototype,"emailLabel",2),r([i({type:String,converter:String})],X.prototype,"passwordLabel",2),r([i({type:String,converter:String})],X.prototype,"buttonLabel",2),r([g("#form")],X.prototype,"formComponent",2),X=r([m("nidoca-form-register")],X);var jt=class extends d{constructor(){super(...arguments);this.code=""}render(){return n``}};jt.styles=p``,r([i({type:String})],jt.prototype,"code",2),jt=r([m("nidoca-upload")],jt);var _t=class extends d{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return n`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};_t.styles=p`
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
  `,r([i({type:u,converter:String})],_t.prototype,"theme",2),r([i({type:String,converter:String})],_t.prototype,"text",2),_t=r([m("nidoca-hr")],_t);var Rt=class extends d{constructor(){super(...arguments);this.text="";this.icon=""}render(){return n`
      <div class="container">
        ${this.icon?n` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:n``}
        ${this.text?n` <nidoca-text-button>${this.text}</nidoca-text-button>`:n``}
        <slot></slot>
      </div>
    `}static example(t=""){return n`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};Rt.styles=p`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,r([i({type:String})],Rt.prototype,"text",2),r([i({type:String})],Rt.prototype,"icon",2),Rt=r([m("nidoca-menu-area")],Rt);var q=class extends d{constructor(){super(...arguments);this.text="";this.icon="";this.selected=!1;this.theme="surface"}render(){return n`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return n`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};q.styles=p`
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
  `,r([i({type:String})],q.prototype,"text",2),r([i({type:String})],q.prototype,"icon",2),r([i({type:Boolean})],q.prototype,"selected",2),r([i({type:String})],q.prototype,"theme",2),q=r([m("nidoca-menu-item")],q);var Lt=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return n` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((o,s)=>{if(s=="theme"&&this.slotElement!=null){let l=this.slotElement.assignedElements();for(let c=0;c<l.length;c++){let f=l[c];f instanceof q&&(f.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];if(l instanceof q){let c=l.getBoundingClientRect();c.left<t.x&&c.right>t.x&&(c.top<t.y&&c.bottom>t.y?l.selected=!0:l.selected=!1)}}}})}static example(t=""){return n`
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
    `}};Lt.styles=p`
    :host,
    slot {
      display: block;
    }
  `,r([i({type:String})],Lt.prototype,"theme",2),r([g("#slotElement")],Lt.prototype,"slotElement",2),Lt=r([m("nidoca-menu")],Lt);var Y=class extends d{constructor(){super(...arguments);this.height="auto";this.width="auto";this.left="auto";this.top="auto";this.right="auto";this.bottom="auto"}render(){return n`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,o,s,l,c,f){return"height:".concat(t).concat(";").concat("width:").concat(o).concat(";").concat("left:").concat(s).concat(";").concat("right:").concat(l).concat(";").concat("top:").concat(c).concat(";").concat("bottom:").concat(f).concat(";")}};Y.styles=p`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,r([i({type:String})],Y.prototype,"height",2),r([i({type:String})],Y.prototype,"width",2),r([i({type:String})],Y.prototype,"left",2),r([i({type:String})],Y.prototype,"top",2),r([i({type:String})],Y.prototype,"right",2),r([i({type:String})],Y.prototype,"bottom",2),Y=r([m("nidoca-layout-floating")],Y);var Vt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      ${x.getStyle(this.theme)}
      <slot></slot>
    `}};Vt.styles=p`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,r([i({type:String})],Vt.prototype,"theme",2),Vt=r([m("nidoca-container")],Vt);var At=class extends d{constructor(){super();this.hideSidebox=!0;this.theme=x.prototype.getParentTheme(this)||"plain"}render(){return n` <style>
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
      ${this.hideSidebox?n``:n` <slot class="sidebox" name="sidebox"></slot>`}`}};At.styles=p`
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
  `,r([i({type:u,converter:String})],At.prototype,"theme",2),r([i({type:Boolean,converter:String})],At.prototype,"hideSidebox",2),At=r([m("nidoca-split-screen")],At);var j=class extends d{constructor(){super(...arguments);this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return n`
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
    `}};j.styles=p`
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
  `,r([i({type:String})],j.prototype,"icon",2),r([i({type:Boolean})],j.prototype,"clickable",2),r([i({type:Boolean})],j.prototype,"deactivated",2),r([i({type:String})],j.prototype,"title",2),j=r([m("nidoca-icon")],j);var Gt=class extends d{render(){return n`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(this.rippleContainerElement!=null){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);let t=this.rippleContainerElement.getBoundingClientRect(),o=Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};Gt.styles=p`
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
  `,r([g("#rippleContainer")],Gt.prototype,"rippleContainerElement",2),Gt=r([m("nidoca-ripple")],Gt);var z=class extends d{constructor(){super(...arguments);this.src="";this.width="auto";this.height="auto";this.zoom=!1}render(){return this.src?n`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:n``}static example(t=""){return n`<nidoca-img width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img>`}};z.styles=p`
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
  `,r([i({type:String})],z.prototype,"src",2),r([i({type:String})],z.prototype,"width",2),r([i({type:String})],z.prototype,"height",2),r([i({type:Boolean})],z.prototype,"zoom",2),z=r([m("nidoca-img")],z);var Ct=class extends z{static example(e=""){return n`<nidoca-img-round width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img-round>`}};Ct.styles=p`
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
  `,Ct=r([m("nidoca-img-round")],Ct);var Ot=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:n``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let o=t.target;if(o==null)return;let s=o.assignedElements();for(let l=0;l<s.length;l++){let c=s[l];if(c instanceof z){this.selected==null&&l==0&&(this.selected=c.cloneNode(!0)),c.addEventListener("click",h=>{h.target&&(this.selected=h.target.cloneNode(!0))}),c.width="148px";let f=c.classList;f.contains("img")||f.add("img")}}}};Ot.styles=p`
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
  `,r([i({type:u,converter:String})],Ot.prototype,"theme",2),r([ur()],Ot.prototype,"selected",2),Ot=r([m("nidoca-img-slider")],Ot);var Xt=class extends d{constructor(){super(...arguments);this.src=""}render(){return n`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Xt.styles=p``,r([i({type:String})],Xt.prototype,"src",2),Xt=r([m("nidoca-movie")],Xt);var P=class extends d{constructor(){super(...arguments);this.label="";this.placeholder="";this.name="";this.min=1;this.max=10;this.errorText="";this.numberOne=1;this.numberTwo=1}render(){return n`
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
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,o){return Math.random()*(o-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};P.styles=p`
    :host {
      display: block;
      width: 100%;
    }
  `,r([i({type:u,converter:String})],P.prototype,"theme",2),r([i({type:String})],P.prototype,"label",2),r([i({type:String})],P.prototype,"placeholder",2),r([i({type:String})],P.prototype,"name",2),r([i({type:Number})],P.prototype,"min",2),r([i({type:Number})],P.prototype,"max",2),r([i({type:String})],P.prototype,"errorText",2),r([g("#inputfield")],P.prototype,"inputfield",2),P=r([m("nidoca-form-captcha")],P);var ct=class extends d{constructor(){super(...arguments);this.text="";this.href="";this.targetType="_self"}render(){return n`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};ct.styles=p`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,r([i({type:String})],ct.prototype,"text",2),r([i({type:String})],ct.prototype,"href",2),r([i({type:String})],ct.prototype,"targetType",2),ct=r([m("nidoca-link")],ct);var O=class extends d{constructor(){super(...arguments);this.theme="surface";this.primaryText="";this.secondaryText="";this.selected=!1}render(){return n`
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
      ${Ct.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};O.styles=p`
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
  `,r([i({type:u,converter:String})],O.prototype,"theme",2),r([i({type:String})],O.prototype,"primaryText",2),r([i({type:String})],O.prototype,"secondaryText",2),r([i({type:Boolean})],O.prototype,"selected",2),O=r([m("nidoca-list-item")],O);var it=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return n`
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
    `}static example(){return n`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};it.styles=p`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,r([i({type:u,converter:String})],it.prototype,"theme",2),r([i({type:String})],it.prototype,"text",2),it=r([m("nidoca-list-section")],it);var dt=class extends d{constructor(){super(...arguments);this.theme="surface";this.multiselect=!1}updated(t){super.updated(t),t.forEach((o,s)=>{s=="theme"&&this.getItems().forEach(l=>{l.theme=this.theme})})}render(){return n`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let o=t.target;o.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];l instanceof O&&t.push(l)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];l instanceof O&&l.selected&&t.push(l)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements(),s=0;for(let l=0;l<o.length;l++){let c=o[l];c instanceof O&&(c.selected&&t.push(s),s++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return n`<nidoca-list theme="primary">
      ${it.example()} ${O.example()} ${O.example()} ${O.example()}
    </nidoca-list>`}};dt.styles=p`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,r([i({type:u,converter:String})],dt.prototype,"theme",2),r([i({type:Boolean})],dt.prototype,"multiselect",2),r([g("#slotElement")],dt.prototype,"slotElement",2),dt=r([m("nidoca-list")],dt);var Ht=class extends d{constructor(){super(...arguments);this.theme="primary";this.prominent=!1}render(){return n`
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
    `}};Ht.styles=p`
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
  `,r([i({type:String,converter:String})],Ht.prototype,"theme",2),r([i({type:Boolean})],Ht.prototype,"prominent",2),Ht=r([m("nidoca-top-app-bar")],Ht);var ht=class extends d{constructor(){super(...arguments);this.headers=["column 1","column 2"];this.rows=[["row 1",new j],["row 2",new j]];this.theme="plain"}render(){return n`
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
            ${oe([this.headers],()=>n` ${qt(this.headers,t=>n` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${oe([this.rows],()=>n`
                  ${qt(this.rows,t=>n`
                        <tr>
                          ${qt(t,o=>n` <td colspan="1" rowspan="1">${o}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};ht.styles=p`
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
  `,r([i({type:Array})],ht.prototype,"headers",2),r([i({type:Array})],ht.prototype,"rows",2),r([i({type:u,converter:String})],ht.prototype,"theme",2),ht=r([m("nidoca-table")],ht);var ut=class extends d{constructor(){super(...arguments);this.selected=!1}render(){return this.selected?n` <slot></slot>`:n``}};ut.styles=p`
    :host,
    slot {
      display: block;
    }
  `,r([i({type:Boolean})],ut.prototype,"selected",2),ut=r([m("nidoca-tab-content")],ut);var K=class extends d{constructor(){super(...arguments);this.selected=!1;this.text="";this.theme="surface"}render(){return n`
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
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};K.styles=p`
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
  `,r([i({type:Boolean})],K.prototype,"selected",2),r([i({type:String})],K.prototype,"text",2),r([i({type:String})],K.prototype,"theme",2),K=r([m("nidoca-tab")],K);var nt=class extends d{constructor(){super(...arguments);this.theme="surface";this.tabIndex=0}render(){return n`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),s=100/t.length,l=t[this.tabIndex];for(let c=0;c<t.length;c++){let f=t[c];f instanceof K&&(f.theme=this.theme,f.style.width=String(s).concat("%"),f==l?(f.selected=!0,f.classList.add("SELECTED")):(f.selected=!1,f.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let o=this.tabContentSlot.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];l instanceof ut&&(this.tabIndex==t?l.selected=!0:l.selected=!1,t++)}}}tabClicked(t){let o=t.detail;this.changeTabIndex(o)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let o=this.tabSlot.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];if(l instanceof K&&l==t){this.tabIndex=s;break}}}}static example(t=""){return n`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};nt.styles=p`
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
  `,r([g("#tabSlot")],nt.prototype,"tabSlot",2),r([g("#tabContentSlot")],nt.prototype,"tabContentSlot",2),r([i({type:String})],nt.prototype,"theme",2),r([i({type:Number})],nt.prototype,"tabIndex",2),nt=r([m("nidoca-tabs")],nt);var Z=class extends d{constructor(){super();this.hideLeft=!0;this.prominent=!1;document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let o=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-o.width}})}updated(t){super.updated(t)}render(){return n`
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
    `}};Z.styles=p`
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
  `,r([i({type:Boolean})],Z.prototype,"hideLeft",2),r([i({type:Boolean})],Z.prototype,"prominent",2),r([g("#header")],Z.prototype,"headerElement",2),r([g("#left")],Z.prototype,"leftElement",2),r([g("#content")],Z.prototype,"contentElement",2),Z=r([m("nidoca-template")],Z);var ft=class extends d{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{this.videoElement&&(this.videoElement.srcObject=t)})}render(){return n`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};ft.styles=p``,r([g("#video")],ft.prototype,"videoElement",2),r([g("#canvas")],ft.prototype,"canvasElement",2),r([g("#click-photo")],ft.prototype,"buttonElement",2),ft=r([m("nidoca-video")],ft);var It=class extends d{constructor(){super(...arguments);this.src="";this.canvasElements=[];this.storeCanvasElements=[]}render(){return n`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>n`${t}`)}
    `}updated(t){super.updated(t),t.forEach((o,s)=>{if(console.debug(`${this.tagName} : property ${String(s)} changed. oldValue: ${o}`),s=="src"){this.convert();let l=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let o=document.createElement("canvas");o.width=t[0],o.height=t[1];let s=o.getContext("2d");s&&this.img&&(this.img.crossOrigin="anonymous",s.drawImage(this.img,0,0,t[0],t[1]),o.toBlob(l=>{},"image/webp")),this.canvasElements.push(o)}),this.requestUpdate()})}};It.styles=p``,r([i({type:String})],It.prototype,"src",2),r([g("#img")],It.prototype,"img",2),It=r([m("nidoca-svg-2-webp")],It);var v=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return n`<style>
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
    `}};v.styles=p`
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
  `,r([i({type:u,converter:String})],v.prototype,"theme",2),r([i({type:String})],v.prototype,"text",2),v=r([m("nidoca-text")],v);var ie=class extends v{render(){return n` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ie.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 105%;
    }
  `,ie=r([m("nidoca-text-body")],ie);var ne=class extends v{render(){return n`${super.render()}`}};ne.styles=p`
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
  `,ne=r([m("nidoca-text-button")],ne);var se=class extends v{};se.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,se=r([m("nidoca-text-overline")],se);var ae=class extends v{render(){return n` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ae.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,ae=r([m("nidoca-text-subtitle")],ae);var M=class extends v{render(){return n`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};M.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,M=r([m("nidoca-text-caption")],M);var De=class extends M{render(){return n`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};De=r([m("nidoca-text-error")],De);var Be=class extends M{render(){return n`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Be=r([m("nidoca-text-success")],Be);var Ue=class extends M{render(){return n`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ue=r([m("nidoca-text-warning")],Ue);var qe=class extends M{render(){return n`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};qe=r([m("nidoca-text-info")],qe);var le=class extends v{};le.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,le=r([m("nidoca-text-h1")],le);var me=class extends v{};me.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `,me=r([m("nidoca-text-h2")],me);var pe=class extends v{};pe.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,pe=r([m("nidoca-text-h3")],pe);var ce=class extends v{};ce.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,ce=r([m("nidoca-text-h4")],ce);var de=class extends v{};de.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,de=r([m("nidoca-text-h5")],de);var he=class extends v{};he.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,he=r([m("nidoca-text-h6")],he);var Q=class extends d{constructor(){super(...arguments);this.value="";this.placeholder="";this.disabled=!1;this.theme="surface"}render(){return n`
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
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",o=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",o.type,JSON.stringify(o.detail)),this.dispatchEvent(o)}static example(t=""){return n`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};Q.styles=p`
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
  `,r([i({type:String})],Q.prototype,"value",2),r([i({type:String})],Q.prototype,"placeholder",2),r([i({type:Boolean})],Q.prototype,"disabled",2),r([g("#inputElement")],Q.prototype,"inputElement",2),r([i({type:u,converter:String})],Q.prototype,"theme",2),Q=r([m("nidoca-search-bar")],Q);var ue=class{static{this.CENTER="CENTER"}static{this.LEFT="LEFT"}static{this.RIGHT="RIGHT"}static{this.TOP="TOP"}static{this.BOTTOM="BOTTOM"}static{this.SLIDE_CENTER="SLIDE_CENTER"}static{this.SLIDE_LEFT="SLIDE_LEFT"}static{this.SLIDE_RIGHT="SLIDE_RIGHT"}static{this.SLIDE_TOP="SLIDE_TOP"}static{this.SLIDE_BOTTOM="SLIDE_BOTTOM"}},zt=class extends d{constructor(){super(...arguments);this.transitionType=ue.CENTER;this.duration=.5}render(){return n` <div class="${S(this.transitionType)}"><slot></slot></div> `}};zt.styles=p`
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
  `,r([i({type:String})],zt.prototype,"transitionType",2),r([i({type:Number})],zt.prototype,"duration",2),zt=r([m("nidoca-transition")],zt);var Yt=class extends d{constructor(){super(...arguments);this.show=!1}render(){return this.show?n`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${ue.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:n``}};Yt.styles=p`
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
  `,r([i({type:Boolean})],Yt.prototype,"show",2),Yt=r([m("nidoca-dialog")],Yt);var F=class extends d{constructor(){super(...arguments);this.show=!1;this.title="Ja oder Nein ?";this.description="Entscheide dich";this.labelButtonYes="Ja";this.labelButtonNo="Nein"}render(){return n`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};F.styles=p``,r([i({type:Boolean})],F.prototype,"show",2),r([i({type:String})],F.prototype,"title",2),r([i({type:String})],F.prototype,"description",2),r([i({type:String})],F.prototype,"labelButtonYes",2),r([i({type:String})],F.prototype,"labelButtonNo",2),F=r([m("nidoca-dialog-decision")],F);var Kt=class extends d{constructor(){super(...arguments);this.icon=""}render(){return n`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `}static example(t="",o="surface"){return n`
      <nidoca-infobox slot="${t}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${o}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${o}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `}};Kt.styles=p`
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
  `,r([i({type:String})],Kt.prototype,"icon",2),Kt=r([m("nidoca-infobox")],Kt);var st=class extends d{constructor(){super(...arguments);this.theme="surface";this.src="";this.title="";this.subtitle=""}render(){return n`
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
    >`}};st.styles=p`
    :host {
      display: block;
    }
  `,r([i({type:u,converter:String})],st.prototype,"theme",2),r([i({type:String})],st.prototype,"src",2),r([i({type:String})],st.prototype,"title",2),r([i({type:String})],st.prototype,"subtitle",2),st=r([m("nidoca-avatar")],st);var Jt=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return n`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Jt.styles=p`
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
  `,r([i({type:u,converter:String})],Jt.prototype,"theme",2),Jt=r([m("nidoca-card")],Jt);var fe=class extends d{render(){return n`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){let t=e.target;if(t==null)return;let o=t.assignedElements();for(let s=0;s<o.length;s++){let c=o[s].classList;c.contains("flexItem")||c.add("flexItem"),c.contains("flexItemDevice")||c.add("flexItemDevice")}}};fe.styles=p`
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
  `,fe=r([m("nidoca-gallery")],fe);var ge=class extends d{render(){return n`<slot></slot>`}print(){let e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};ge.styles=p`
    :host {
      display: none;
    }
  `,ge=r([m("nidoca-print")],ge);var be=class extends d{render(){return n`
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){let o=e.target.assignedElements(),s=o.length;for(let l=0;l<s;l++){let f=o[l].classList,h="item_count_"+s;f.contains(h)||f.add(h)}}};be.styles=p`
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
  `,be=r([m("nidoca-section")],be);var ye=class extends d{render(){return n` <slot></slot>`}};ye.styles=p`
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
  `,ye=r([m("nidoca-dashboard")],ye);var xe=class extends d{render(){return n` <slot></slot>`}};xe.styles=p`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,xe=r([m("nidoca-dashboard-box-25")],xe);var ve=class extends d{render(){return n` <slot></slot>`}};ve.styles=p`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,ve=r([m("nidoca-dashboard-box-50")],ve);var $e=class extends d{render(){return n` <slot></slot>`}};$e.styles=p`
    :host {
      width: 100%;
      display: block;
    }
  `,$e=r([m("nidoca-dashboard-box-100")],$e);var Pt=class extends d{constructor(){super(...arguments);this.clickable=!0;this.title=""}render(){return n`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Pt.styles=p`
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
  `,r([i({type:Boolean})],Pt.prototype,"clickable",2),r([i({type:String})],Pt.prototype,"title",2),Pt=r([m("nidoca-dashboard-card")],Pt);var Wt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      ${x.getStyle(this.theme)}
      <slot></slot>
    `}};Wt.styles=p`
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
  `,r([i({type:u,converter:String})],Wt.prototype,"theme",2),Wt=r([m("nidoca-box")],Wt);var D=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Deine Nachricht";this.nameLabel="Dein Name";this.emailLabel="Deine Email";this.titleLabel="Betreff";this.messageLabel="Deine Nachricht";this.buttonLabel="Senden"}render(){return n`
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
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};D.styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:u,converter:String})],D.prototype,"theme",2),r([i({type:String,converter:String})],D.prototype,"label",2),r([i({type:String,converter:String})],D.prototype,"nameLabel",2),r([i({type:String,converter:String})],D.prototype,"emailLabel",2),r([i({type:String,converter:String})],D.prototype,"titleLabel",2),r([i({type:String,converter:String})],D.prototype,"messageLabel",2),r([i({type:String,converter:String})],D.prototype,"buttonLabel",2),r([g("#authenitcate-form")],D.prototype,"formComponent",2),D=r([m("nidoca-form-contact")],D);})();
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
