"use strict";(()=>{var Pr=Object.defineProperty;var Mr=Object.getOwnPropertyDescriptor;var r=(a,e,t,o)=>{for(var i=o>1?void 0:o?Mr(e,t):e,l=a.length-1,c;l>=0;l--)(c=a[l])&&(i=(o?c(e,t,i):c(i))||i);return o&&i&&Pr(e,t,i),i};var Oe=globalThis,He=Oe.ShadowRoot&&(Oe.ShadyCSS===void 0||Oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nr=Symbol(),hr=new WeakMap,ee=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==nr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(He&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=hr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&hr.set(t,e))}return e}toString(){return this.cssText}},ur=a=>new ee(typeof a=="string"?a:a+"",void 0,nr),m=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((o,i,l)=>o+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[l+1],a[0]);return new ee(t,a,nr)},ir=(a,e)=>{if(He)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),i=Oe.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,a.appendChild(o)}},Ie=He?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return ur(t)})(a):a;var{is:Wr,defineProperty:Br,getOwnPropertyDescriptor:Dr,getOwnPropertyNames:Ur,getOwnPropertySymbols:qr,getPrototypeOf:jr}=Object,ze=globalThis,fr=ze.trustedTypes,Gr=fr?fr.emptyScript:"",Vr=ze.reactiveElementPolyfillSupport,re=(a,e)=>a,oe={toAttribute(a,e){switch(e){case Boolean:a=a?Gr:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Pe=(a,e)=>!Wr(a,e),gr={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:Pe};Symbol.metadata??=Symbol("metadata"),ze.litPropertyMetadata??=new WeakMap;var st=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=gr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Br(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){let{get:i,set:l}=Dr(this.prototype,e)??{get(){return this[t]},set(c){this[t]=c}};return{get(){return i?.call(this)},set(c){let u=i?.call(this);l.call(this,c),this.requestUpdate(e,u,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??gr}static _$Ei(){if(this.hasOwnProperty(re("elementProperties")))return;let e=jr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(re("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(re("properties"))){let t=this.properties,o=[...Ur(t),...qr(t)];for(let i of o)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,i]of t)this.elementProperties.set(o,i)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let i=this._$Eu(t,o);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)t.unshift(Ie(i))}else e!==void 0&&t.push(Ie(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ir(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){let o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){let l=(o.converter?.toAttribute!==void 0?o.converter:oe).toAttribute(t,o.type);this._$Em=e,l==null?this.removeAttribute(i):this.setAttribute(i,l),this._$Em=null}}_$AK(e,t){let o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let l=o.getPropertyOptions(i),c=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:oe;this._$Em=i,this[i]=c.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Pe)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,l]of this._$Ep)this[i]=l;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[i,l]of o)l.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],l)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};st.elementStyles=[],st.shadowRootOptions={mode:"open"},st[re("elementProperties")]=new Map,st[re("finalized")]=new Map,Vr?.({ReactiveElement:st}),(ze.reactiveElementVersions??=[]).push("2.0.4");var ar=globalThis,Me=ar.trustedTypes,yr=Me?Me.createPolicy("lit-html",{createHTML:a=>a}):void 0,lr="$lit$",at=`lit$${Math.random().toFixed(9).slice(2)}$`,pr="?"+at,Xr=`<${pr}>`,$t=document,ie=()=>$t.createComment(""),se=a=>a===null||typeof a!="object"&&typeof a!="function",mr=Array.isArray,Er=a=>mr(a)||typeof a?.[Symbol.iterator]=="function",sr=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,br=/-->/g,xr=/>/g,xt=RegExp(`>|${sr}(?:([^\\s"'>=/]+)(${sr}*=${sr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vr=/'/g,$r=/"/g,kr=/^(?:script|style|textarea|title)$/i,cr=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),n=cr(1),so=cr(2),ao=cr(3),D=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),wr=new WeakMap,vt=$t.createTreeWalker($t,129);function Tr(a,e){if(!mr(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return yr!==void 0?yr.createHTML(e):e}var Sr=(a,e)=>{let t=a.length-1,o=[],i,l=e===2?"<svg>":e===3?"<math>":"",c=ne;for(let u=0;u<t;u++){let h=a[u],w,R,y=-1,E=0;for(;E<h.length&&(c.lastIndex=E,R=c.exec(h),R!==null);)E=c.lastIndex,c===ne?R[1]==="!--"?c=br:R[1]!==void 0?c=xr:R[2]!==void 0?(kr.test(R[2])&&(i=RegExp("</"+R[2],"g")),c=xt):R[3]!==void 0&&(c=xt):c===xt?R[0]===">"?(c=i??ne,y=-1):R[1]===void 0?y=-2:(y=c.lastIndex-R[2].length,w=R[1],c=R[3]===void 0?xt:R[3]==='"'?$r:vr):c===$r||c===vr?c=xt:c===br||c===xr?c=ne:(c=xt,i=void 0);let b=c===xt&&a[u+1].startsWith("/>")?" ":"";l+=c===ne?h+Xr:y>=0?(o.push(w),h.slice(0,y)+lr+h.slice(y)+at+b):h+at+(y===-2?u:b)}return[Tr(a,l+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},ae=class a{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let l=0,c=0,u=e.length-1,h=this.parts,[w,R]=Sr(e,t);if(this.el=a.createElement(w,o),vt.currentNode=this.el.content,t===2||t===3){let y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(i=vt.nextNode())!==null&&h.length<u;){if(i.nodeType===1){if(i.hasAttributes())for(let y of i.getAttributeNames())if(y.endsWith(lr)){let E=R[c++],b=i.getAttribute(y).split(at),L=/([.?@])?(.*)/.exec(E);h.push({type:1,index:l,name:L[2],strings:b,ctor:L[1]==="."?Be:L[1]==="?"?De:L[1]==="@"?Ue:Et}),i.removeAttribute(y)}else y.startsWith(at)&&(h.push({type:6,index:l}),i.removeAttribute(y));if(kr.test(i.tagName)){let y=i.textContent.split(at),E=y.length-1;if(E>0){i.textContent=Me?Me.emptyScript:"";for(let b=0;b<E;b++)i.append(y[b],ie()),vt.nextNode(),h.push({type:2,index:++l});i.append(y[E],ie())}}}else if(i.nodeType===8)if(i.data===pr)h.push({type:2,index:l});else{let y=-1;for(;(y=i.data.indexOf(at,y+1))!==-1;)h.push({type:7,index:l}),y+=at.length-1}l++}}static createElement(e,t){let o=$t.createElement("template");return o.innerHTML=e,o}};function wt(a,e,t=a,o){if(e===D)return e;let i=o!==void 0?t._$Co?.[o]:t._$Cl,l=se(e)?void 0:e._$litDirective$;return i?.constructor!==l&&(i?._$AO?.(!1),l===void 0?i=void 0:(i=new l(a),i._$AT(a,t,o)),o!==void 0?(t._$Co??=[])[o]=i:t._$Cl=i),i!==void 0&&(e=wt(a,i._$AS(a,e.values),i,o)),e}var We=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,i=(e?.creationScope??$t).importNode(t,!0);vt.currentNode=i;let l=vt.nextNode(),c=0,u=0,h=o[0];for(;h!==void 0;){if(c===h.index){let w;h.type===2?w=new Ut(l,l.nextSibling,this,e):h.type===1?w=new h.ctor(l,h.name,h.strings,this,e):h.type===6&&(w=new qe(l,this,e)),this._$AV.push(w),h=o[++u]}c!==h?.index&&(l=vt.nextNode(),c++)}return vt.currentNode=$t,i}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},Ut=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,i){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=wt(this,e,t),se(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Er(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&se(this._$AH)?this._$AA.nextSibling.data=e:this.T($t.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ae.createElement(Tr(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(t);else{let l=new We(i,this),c=l.u(this.options);l.p(t),this.T(c),this._$AH=l}}_$AC(e){let t=wr.get(e.strings);return t===void 0&&wr.set(e.strings,t=new ae(e)),t}k(e){mr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,i=0;for(let l of e)i===t.length?t.push(o=new a(this.O(ie()),this.O(ie()),this,this.options)):o=t[i],o._$AI(l),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,i,l){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=T}_$AI(e,t=this,o,i){let l=this.strings,c=!1;if(l===void 0)e=wt(this,e,t,0),c=!se(e)||e!==this._$AH&&e!==D,c&&(this._$AH=e);else{let u=e,h,w;for(e=l[0],h=0;h<l.length-1;h++)w=wt(this,u[o+h],t,h),w===D&&(w=this._$AH[h]),c||=!se(w)||w!==this._$AH[h],w===T?e=T:e!==T&&(e+=(w??"")+l[h+1]),this._$AH[h]=w}c&&!i&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Be=class extends Et{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},De=class extends Et{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Ue=class extends Et{constructor(e,t,o,i,l){super(e,t,o,i,l),this.type=5}_$AI(e,t=this){if((e=wt(this,e,t,0)??T)===D)return;let o=this._$AH,i=e===T&&o!==T||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,l=e!==T&&(o===T||i);i&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qe=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){wt(this,e)}},Rr={M:lr,P:at,A:pr,C:1,L:Sr,R:We,D:Er,V:wt,I:Ut,H:Et,N:De,U:Ue,B:Be,F:qe},Yr=ar.litHtmlPolyfillSupport;Yr?.(ae,Ut),(ar.litHtmlVersions??=[]).push("3.2.1");var _r=(a,e,t)=>{let o=t?.renderBefore??e,i=o._$litPart$;if(i===void 0){let l=t?.renderBefore??null;o._$litPart$=i=new Ut(e.insertBefore(ie(),l),l,void 0,t??{})}return i._$AI(a),i};var I=class extends st{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_r(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};I._$litElement$=!0,I.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:I});var Kr=globalThis.litElementPolyfillSupport;Kr?.({LitElement:I});(globalThis.litElementVersions??=[]).push("4.1.1");var f=(i=>(i.primary="primary",i.secondary="secondary",i.surface="surface",i.plain="plain",i))(f||{}),x=class{static getStyle(e){return e?e=="plain"?n``:n` <style>
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
          </style>`:n``}static getOposite(e){return e=="plain"?"surface":e=="primary"||e=="primary"?"secondary":e=="secondary"?"primary":"plain"}getParentTheme(e){let t=e;for(;t!=null;){if(t.theme!=null)return t.theme;t=t.parentElement}}};var d=class extends I{};var p=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};var Jr={attribute:!0,type:String,converter:oe,reflect:!1,hasChanged:Pe},Zr=(a=Jr,e,t)=>{let{kind:o,metadata:i}=t,l=globalThis.litPropertyMetadata.get(i);if(l===void 0&&globalThis.litPropertyMetadata.set(i,l=new Map),l.set(t.name,a),o==="accessor"){let{name:c}=t;return{set(u){let h=e.get.call(this);e.set.call(this,u),this.requestUpdate(c,h,a)},init(u){return u!==void 0&&this.P(c,void 0,a),u}}}if(o==="setter"){let{name:c}=t;return function(u){let h=this[c];e.call(this,u),this.requestUpdate(c,h,a)}}throw Error("Unsupported decorator location: "+o)};function s(a){return(e,t)=>typeof t=="object"?Zr(a,e,t):((o,i,l)=>{let c=i.hasOwnProperty(l);return i.constructor.createProperty(l,c?{...o,wrapped:!0}:o),c?Object.getOwnPropertyDescriptor(i,l):void 0})(a,e,t)}function Lr(a){return s({...a,state:!0,attribute:!1})}var kt=(a,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(a,e,t),t);function g(a,e){return(t,o,i)=>{let l=c=>c.renderRoot?.querySelector(a)??null;if(e){let{get:c,set:u}=typeof o=="object"?t:i??(()=>{let h=Symbol();return{get(){return this[h]},set(w){this[h]=w}}})();return kt(t,o,{get(){let h=c.call(this);return h===void 0&&(h=l(this),(h!==null||this.hasUpdated)&&u.call(this,h)),h}})}return kt(t,o,{get(){return l(this)}})}}var V=class extends d{constructor(){super(...arguments);this.theme="surface";this.header="";this.opened=!1}render(){return n`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?n` <slot></slot>`:n``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=!this.opened,console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};V.styles=m`
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
  `,r([s({type:f,converter:String})],V.prototype,"theme",2),r([s({type:String})],V.prototype,"header",2),r([s({type:Boolean})],V.prototype,"opened",2),V=r([p("nidoca-accordion-item")],V);var _=class extends d{constructor(){super(...arguments);this.theme="plain";this.overline="";this.title="";this.summary="";this.text=""}render(){return n`
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
    ></nidoca-article>`}};_.styles=m`
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
  `,r([s({type:f,converter:String})],_.prototype,"theme",2),r([s({type:String})],_.prototype,"overline",2),r([s({type:String})],_.prototype,"title",2),r([s({type:String})],_.prototype,"summary",2),r([s({type:String})],_.prototype,"text",2),_=r([p("nidoca-article")],_);var Ar=(t=>(t.single="single",t.multi="multi",t))(Ar||{}),ct=class extends d{constructor(){super(...arguments);this.theme="plain";this.accordionType="single"}updated(t){super.updated(t),t.forEach((o,i)=>{if(i=="theme"&&this.accordionSlot!=null){let l=this.accordionSlot.assignedElements();for(let c=0;c<l.length;c++){let u=l[c];u instanceof V&&(u.theme=this.theme)}}})}render(){return n`
      ${x.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let o=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let i=this.accordionSlot.assignedElements();for(let l=0;l<i.length;l++){let c=i[l];c instanceof V&&c!=o&&(c.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return n`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${_.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};ct.styles=m`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,r([s({type:f,converter:String})],ct.prototype,"theme",2),r([s({type:Ar,converter:String})],ct.prototype,"accordionType",2),r([g("#accordionSlot")],ct.prototype,"accordionSlot",2),ct=r([p("nidoca-accordion")],ct);var X=class extends d{constructor(){super(...arguments);this.theme="primary";this.shadowType="shadow_1";this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return n`
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
    `}};X.styles=m`
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
  `,r([s({type:String})],X.prototype,"theme",2),r([s({type:Object})],X.prototype,"shadowType",2),r([s({type:String})],X.prototype,"icon",2),r([s({type:Boolean})],X.prototype,"clickable",2),r([s({type:Boolean})],X.prototype,"deactivated",2),r([s({type:String})],X.prototype,"title",2),X=r([p("nidoca-icon-extended")],X);var U=class extends d{constructor(){super(...arguments);this.icon="";this.primaryText="";this.isLast=!1;this.first=!1}render(){return n`
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
    `}determineBackgroundColor(t){return t==1?"var(--app-color-text-primary)":t==0?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==3?"var(--app-color-success)":t==1?"var(--mdc-theme-on-primary)":t==0?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){let t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};U.styles=m`
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
  `,r([s({type:String})],U.prototype,"icon",2),r([s({type:String})],U.prototype,"primaryText",2),r([s({type:Number})],U.prototype,"state",2),r([s({type:Boolean})],U.prototype,"isLast",2),U=r([p("nidoca-wizard-step")],U);var qt=class extends d{render(){return n`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){let t=e.target;if(t==null)return;let o=t.assignedElements(),i=0;for(let l=0;l<o.length;l++){let c=o[l];c instanceof U&&(c.index=l,c.state==0&&(i=l),c.index==o.length-1&&(c.isLast=!0))}this.changeState(i)}stepClicked(e){let t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){let t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){let i=t[o];i instanceof U&&i.index!==void 0&&(i.index<e?i.state=1:i.index==e?i.state=0:i.state=2)}}}};qt.styles=m``,r([g("#wizardSlot")],qt.prototype,"wizardSlot",2),qt=r([p("nidoca-wizard")],qt);var dt=class extends d{constructor(){super(...arguments);this.clickable=!0;this.theme="surface";this.text=""}render(){return n`
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
    `}static example(t=""){return n`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};dt.styles=m`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }

    .clickable {
      cursor: pointer;
    }
  `,r([s({type:Boolean})],dt.prototype,"clickable",2),r([s({type:f,converter:String})],dt.prototype,"theme",2),r([s({type:String})],dt.prototype,"text",2),dt=r([p("nidoca-chip")],dt);var Tt=class extends d{constructor(){super(...arguments);this.code="";this.theme="plain"}render(){return n`
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
    `}static example(t=""){return n`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};Tt.styles=m`
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
  `,r([s({type:String})],Tt.prototype,"code",2),r([s({type:String})],Tt.prototype,"theme",2),Tt=r([p("nidoca-code")],Tt);var St=class extends d{constructor(){super();this.show=!1;addEventListener("click",t=>{let o=this.associatedElement?.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))})}render(){return this.show?n`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:n``}calculatePositionStyle(t){let o="";if(t){let i=t.getBoundingClientRect();i.right>window.innerWidth/2?o+=`right:${window.innerWidth-i.right}px;`:o+=`left:${i.left}px;`,i.top>window.innerHeight/2?o+=`bottom:${i.height+window.innerHeight-i.top}px;`:o+=`top:${i.bottom}px;`}return o}};St.styles=m`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,r([s({type:Boolean})],St.prototype,"show",2),r([s({type:Object})],St.prototype,"associatedElement",2),St=r([p("nidoca-elevation")],St);var je=class{static{this.PROGRESS="PROGRESS"}static{this.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}},Rt=class extends d{constructor(){super(...arguments);this.progressType=je.PROGRESS}render(){return n` <style>
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

      <progress class="${this.progressType}"></progress>`}};Rt.styles=m``,r([s({type:f,converter:String})],Rt.prototype,"theme",2),r([s({type:je,converter:String})],Rt.prototype,"progressType",2),Rt=r([p("nidoca-progress")],Rt);var Ge=(o=>(o.contained="contained",o.outlined="outlined",o.text="text",o))(Ge||{}),lt=class extends d{constructor(){super(...arguments);this.theme="primary";this.buttonType="contained";this.icon="";this.text=""}render(){return n`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return n`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};lt.styles=m`
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
  `,r([s({type:f,converter:String})],lt.prototype,"theme",2),r([s({type:Ge,converter:String})],lt.prototype,"buttonType",2),r([s({type:String})],lt.prototype,"icon",2),r([s({type:String})],lt.prototype,"text",2),lt=r([p("nidoca-button")],lt);var z=class extends d{};var _t=class extends d{constructor(){super(...arguments);this.autocomplete=!0}render(){return n`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,o={};for(let l of this.getInputElements(this.slotElement)){let c=l.getOutputData();o[c.key]=c.value,t.append(c.key,c.value)}let i={};return i.jsonObject=o,i.formData=t,i}validate(){let t=!0;for(let o of this.getInputElements(this.slotElement))o.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let o=[],i=t.assignedElements({flatten:!0});for(let l=0;l<i.length;l++){let c=i[l];this.recursiveInputElementSearch(c,o)}return o}recursiveInputElementSearch(t,o){if(t instanceof z)o.push(t);else if(t.hasChildNodes()){let i=t.children;for(let l of[].slice.call(i))this.recursiveInputElementSearch(l,o)}}};_t.styles=m`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,r([s({type:Boolean})],_t.prototype,"autocomplete",2),r([g("#slotElement")],_t.prototype,"slotElement",2),_t=r([p("nidoca-form")],_t);var Cr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ve=a=>(...e)=>({_$litDirective$:a,values:e}),jt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Qr}=Rr;var Or=()=>document.createComment(""),Gt=(a,e,t)=>{let o=a._$AA.parentNode,i=e===void 0?a._$AB:e._$AA;if(t===void 0){let l=o.insertBefore(Or(),i),c=o.insertBefore(Or(),i);t=new Qr(l,c,a,a.options)}else{let l=t._$AB.nextSibling,c=t._$AM,u=c!==a;if(u){let h;t._$AQ?.(a),t._$AM=a,t._$AP!==void 0&&(h=a._$AU)!==c._$AU&&t._$AP(h)}if(l!==i||u){let h=t._$AA;for(;h!==l;){let w=h.nextSibling;o.insertBefore(h,i),h=w}}}return t},ht=(a,e,t=a)=>(a._$AI(e,t),a),Fr={},Hr=(a,e=Fr)=>a._$AH=e,Ir=a=>a._$AH,Xe=a=>{a._$AP?.(!1,!0);let e=a._$AA,t=a._$AB.nextSibling;for(;e!==t;){let o=e.nextSibling;e.remove(),e=o}};var zr=(a,e,t)=>{let o=new Map;for(let i=e;i<=t;i++)o.set(a[i],i);return o},ut=Ve(class extends jt{constructor(a){if(super(a),a.type!==Cr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,e,t){let o;t===void 0?t=e:e!==void 0&&(o=e);let i=[],l=[],c=0;for(let u of a)i[c]=o?o(u,c):c,l[c]=t(u,c),c++;return{values:l,keys:i}}render(a,e,t){return this.dt(a,e,t).values}update(a,[e,t,o]){let i=Ir(a),{values:l,keys:c}=this.dt(e,t,o);if(!Array.isArray(i))return this.ut=c,l;let u=this.ut??=[],h=[],w,R,y=0,E=i.length-1,b=0,L=l.length-1;for(;y<=E&&b<=L;)if(i[y]===null)y++;else if(i[E]===null)E--;else if(u[y]===c[b])h[b]=ht(i[y],l[b]),y++,b++;else if(u[E]===c[L])h[L]=ht(i[E],l[L]),E--,L--;else if(u[y]===c[L])h[L]=ht(i[y],l[L]),Gt(a,h[L+1],i[y]),y++,L--;else if(u[E]===c[b])h[b]=ht(i[E],l[b]),Gt(a,i[y],i[E]),E--,b++;else if(w===void 0&&(w=zr(c,b,L),R=zr(u,y,E)),w.has(u[y]))if(w.has(u[E])){let it=R.get(c[b]),or=it!==void 0?i[it]:null;if(or===null){let dr=Gt(a,i[y]);ht(dr,l[b]),h[b]=dr}else h[b]=ht(or,l[b]),Gt(a,i[y],or),i[it]=null;b++}else Xe(i[E]),E--;else Xe(i[y]),y++;for(;b<=L;){let it=Gt(a,h[L+1]);ht(it,l[b]),h[b++]=it}for(;y<=E;){let it=i[y++];it!==null&&Xe(it)}return this.ut=c,Hr(a,h),D}});var Nr={},Lt=Ve(class extends jt{constructor(){super(...arguments),this.ot=Nr}render(a,e){return e()}update(a,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,i)=>o===this.ot[i]))return D}else if(this.ot===e)return D;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var k=class extends z{constructor(){super(...arguments);this.theme="surface";this.trailingIcon="";this.label="";this.errorText="";this.infoText="";this.warningText="";this.value="";this.options=[];this.name="";this.required=!0;this.multiple=!1;this.size=1}render(){return n` <style>
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
            ${Lt([this.value,this.options],()=>n`
                ${ut(this.options,t=>t==null?n` <option></option>`:this.isSelectedOption(t)?n` <option value="${t.key}" selected>${t.value}</option> `:n` <option value="${t.key}">${t.value}</option> `)}
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
          `:n``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let o=0,i=this.selectElement.options.length;o<i;o++)this.selectElement.options[o].selected&&t.push(this.options[o].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let o=!1;for(let i of this.value)if(o=t.key===i,o)return!0}return this.value===t.key}static enumToOptions(t,o=!0){let i=[];return o&&i.push({key:"",value:""}),Object.keys(t).forEach(l=>{i.push({key:l,value:t[l]})}),i}static stringArrayToOptions(t,o=!0){let i=[];return o&&i.push({key:"",value:""}),t.forEach(l=>{i.push({key:l,value:l})}),i}static toComboboxOptions(t=null,o=null){if(t==null)return[];let i=[];return Object.values(t).forEach(l=>{let c=String(Object.keys(t)[Object.values(t).indexOf(l)]);o&&(c=c.concat(o)),i.push({key:l,value:c})}),i}};k.styles=m`
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
  `,r([s({type:f,converter:String})],k.prototype,"theme",2),r([s({type:String})],k.prototype,"trailingIcon",2),r([s({type:String})],k.prototype,"label",2),r([s({type:String})],k.prototype,"errorText",2),r([s({type:String})],k.prototype,"infoText",2),r([s({type:String})],k.prototype,"warningText",2),r([s()],k.prototype,"value",2),r([s({type:Array})],k.prototype,"options",2),r([s({type:String})],k.prototype,"name",2),r([s({type:Boolean})],k.prototype,"required",2),r([s({type:Boolean})],k.prototype,"multiple",2),r([s({type:Number})],k.prototype,"size",2),r([g("#selectElement")],k.prototype,"selectElement",2),k=r([p("nidoca-form-combobox")],k);var S=a=>a??T;var Y=(b=>(b.color="color",b.email="email",b.hidden="hidden",b.number="number",b.password="password",b.tel="tel",b.text="text",b.search="search",b.url="url",b.date="date",b.month="month",b.time="time",b.week="week",b))(Y||{}),$=class extends z{constructor(){super(...arguments);this.type="text";this.label="";this.placeholder="";this.trailingIcon="";this.errorText="";this.infoText="";this.warningText="";this.name="";this.value="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="surface"}render(){return this.type=="hidden"?n`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:n` <style>
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
              `:n``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t?.trim()}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),this.errorText==""}};$.styles=m`
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
  `,r([s({type:Y,converter:String})],$.prototype,"type",2),r([s({type:String})],$.prototype,"label",2),r([s({type:String})],$.prototype,"placeholder",2),r([s({type:String})],$.prototype,"trailingIcon",2),r([s({type:String})],$.prototype,"errorText",2),r([s({type:String})],$.prototype,"infoText",2),r([s({type:String})],$.prototype,"warningText",2),r([s({type:String})],$.prototype,"name",2),r([s()],$.prototype,"value",2),r([s({type:Boolean})],$.prototype,"required",2),r([s({type:Boolean})],$.prototype,"disabled",2),r([s({type:Boolean})],$.prototype,"checked",2),r([s({type:Number})],$.prototype,"maxlength",2),r([s({type:Number})],$.prototype,"minlength",2),r([s({type:Number})],$.prototype,"min",2),r([s({type:Number})],$.prototype,"max",2),r([s({type:String})],$.prototype,"step",2),r([s({type:Number})],$.prototype,"size",2),r([s({type:String})],$.prototype,"pattern",2),r([g("#inputElement")],$.prototype,"inputElement",2),r([s({type:f,converter:String})],$.prototype,"theme",2),$=r([p("nidoca-form-text")],$);var Ye=class extends ${constructor(){super(),this.type="date"}};Ye=r([p("nidoca-form-date")],Ye);var C=class extends z{constructor(){super(...arguments);this.theme="surface";this.infoText="";this.warningText="";this.errorText="";this.name="";this.value="";this.label="";this.required=!1;this.placeholder="";this.disabled=!1;this.rows=5}render(){return n` <style>
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
          `:n``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};C.styles=m`
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
  `,r([s({type:f,converter:String})],C.prototype,"theme",2),r([s({type:String})],C.prototype,"infoText",2),r([s({type:String})],C.prototype,"warningText",2),r([s({type:String})],C.prototype,"errorText",2),r([s({type:String})],C.prototype,"name",2),r([s()],C.prototype,"value",2),r([s({type:String})],C.prototype,"label",2),r([s({type:Boolean})],C.prototype,"required",2),r([s({type:String})],C.prototype,"placeholder",2),r([s({type:Boolean})],C.prototype,"disabled",2),r([s({type:Number})],C.prototype,"rows",2),r([g("#inputElement")],C.prototype,"inputElement",2),C=r([p("nidoca-form-textarea")],C);var At=class extends z{constructor(){super(...arguments);this.theme="primary"}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return n`
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
    `}upload(){this.inputElement?.click()}};At.styles=m`
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
  `,r([s({type:f,converter:String})],At.prototype,"theme",2),r([g("#inputElement")],At.prototype,"inputElement",2),At=r([p("nidoca-form-upload")],At);var H=class extends z{constructor(){super();this.name="";this.label="";this.infoText="";this.errorText="";this.warningText="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="primary";this.theme=x.prototype.getParentTheme(this)||"plain"}render(){return n`
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
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};H.styles=m`
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
  `,r([s({type:String})],H.prototype,"name",2),r([s({type:String})],H.prototype,"label",2),r([s({type:String})],H.prototype,"infoText",2),r([s({type:String})],H.prototype,"errorText",2),r([s({type:String})],H.prototype,"warningText",2),r([s({type:Boolean})],H.prototype,"required",2),r([s({type:Boolean})],H.prototype,"disabled",2),r([s({type:Boolean})],H.prototype,"checked",2),r([s({type:String})],H.prototype,"theme",2),r([g("#inputElement")],H.prototype,"inputElement",2),H=r([p("nidoca-form-switch")],H);var N=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Newsletter";this.emailLabel="Deine Emailadresse";this.buttonLabel="Registrieren"}render(){return n`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};N.styles=m`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],N.prototype,"theme",2),r([s({type:String,converter:String})],N.prototype,"label",2),r([s({type:String,converter:String})],N.prototype,"emailLabel",2),r([s({type:String,converter:String})],N.prototype,"buttonLabel",2),r([g("#form")],N.prototype,"formComponent",2),N=r([p("nidoca-form-newsletter")],N);var tt=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Passwort zur\xFCcksetzen";this.emailLabel="Deine Emailadresse";this.buttonLabel="Zur\xFCcksetzen"}render(){return n`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};tt.styles=m`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],tt.prototype,"theme",2),r([s({type:String,converter:String})],tt.prototype,"label",2),r([s({type:String,converter:String})],tt.prototype,"emailLabel",2),r([s({type:String,converter:String})],tt.prototype,"buttonLabel",2),r([g("#form")],tt.prototype,"formComponent",2),tt=r([p("nidoca-form-reset-password")],tt);var O=class extends d{constructor(){super(...arguments);this.theme="surface";this.label="Passwort \xE4ndern";this.oldPasswordLabel="Altes Passwort";this.newPasswordLabel="Neues Passwort";this.repeatNewPasswordLabel="Wiederholen";this.buttonLabel="\xC4ndern";this.showErrorMessageSamePassword=!1;this.errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";this.showErrorMessagePasswordDiff=!1;this.errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein"}render(){return n`
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
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};O.styles=m`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],O.prototype,"theme",2),r([s({type:String,converter:String})],O.prototype,"label",2),r([s({type:String,converter:String})],O.prototype,"oldPasswordLabel",2),r([s({type:String,converter:String})],O.prototype,"newPasswordLabel",2),r([s({type:String,converter:String})],O.prototype,"repeatNewPasswordLabel",2),r([s({type:String,converter:String})],O.prototype,"buttonLabel",2),r([g("#form")],O.prototype,"formComponent",2),r([g("#oldPassword")],O.prototype,"oldPasswordInputField",2),r([g("#newPassword")],O.prototype,"newPasswordInputField",2),r([g("#repeatNewPassword")],O.prototype,"repeatNewPasswordInputField",2),r([s()],O.prototype,"errorMessageSamePasswordLabel",2),r([s()],O.prototype,"errorMessagePasswordDiffLabel",2),O=r([p("nidoca-form-change-password")],O);var K=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Registrieren";this.emailLabel="Email";this.passwordLabel="Passwort";this.buttonLabel="Registrieren"}render(){return n`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};K.styles=m`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],K.prototype,"theme",2),r([s({type:String,converter:String})],K.prototype,"label",2),r([s({type:String,converter:String})],K.prototype,"emailLabel",2),r([s({type:String,converter:String})],K.prototype,"passwordLabel",2),r([s({type:String,converter:String})],K.prototype,"buttonLabel",2),r([g("#form")],K.prototype,"formComponent",2),K=r([p("nidoca-form-register")],K);var Vt=class extends d{constructor(){super(...arguments);this.code=""}render(){return n``}};Vt.styles=m``,r([s({type:String})],Vt.prototype,"code",2),Vt=r([p("nidoca-upload")],Vt);var Ct=class extends d{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return n`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};Ct.styles=m`
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
  `,r([s({type:f,converter:String})],Ct.prototype,"theme",2),r([s({type:String,converter:String})],Ct.prototype,"text",2),Ct=r([p("nidoca-hr")],Ct);var Ot=class extends d{constructor(){super(...arguments);this.text="";this.icon=""}render(){return n`
      <div class="container">
        ${this.icon?n` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:n``}
        ${this.text?n` <nidoca-text-button>${this.text}</nidoca-text-button>`:n``}
        <slot></slot>
      </div>
    `}static example(t=""){return n`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};Ot.styles=m`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,r([s({type:String})],Ot.prototype,"text",2),r([s({type:String})],Ot.prototype,"icon",2),Ot=r([p("nidoca-menu-area")],Ot);var q=class extends d{constructor(){super(...arguments);this.text="";this.icon="";this.selected=!1;this.theme="surface"}render(){return n`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return n`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};q.styles=m`
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
  `,r([s({type:String})],q.prototype,"text",2),r([s({type:String})],q.prototype,"icon",2),r([s({type:Boolean})],q.prototype,"selected",2),r([s({type:String})],q.prototype,"theme",2),q=r([p("nidoca-menu-item")],q);var Ht=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return n` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((o,i)=>{if(i=="theme"&&this.slotElement!=null){let l=this.slotElement.assignedElements();for(let c=0;c<l.length;c++){let u=l[c];u instanceof q&&(u.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let i=0;i<o.length;i++){let l=o[i];if(l instanceof q){let c=l.getBoundingClientRect();c.left<t.x&&c.right>t.x&&(c.top<t.y&&c.bottom>t.y?l.selected=!0:l.selected=!1)}}}})}static example(t=""){return n`
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
    `}};Ht.styles=m`
    :host,
    slot {
      display: block;
    }
  `,r([s({type:String})],Ht.prototype,"theme",2),r([g("#slotElement")],Ht.prototype,"slotElement",2),Ht=r([p("nidoca-menu")],Ht);var J=class extends d{constructor(){super(...arguments);this.height="auto";this.width="auto";this.left="auto";this.top="auto";this.right="auto";this.bottom="auto"}render(){return n`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,o,i,l,c,u){return"height:".concat(t).concat(";").concat("width:").concat(o).concat(";").concat("left:").concat(i).concat(";").concat("right:").concat(l).concat(";").concat("top:").concat(c).concat(";").concat("bottom:").concat(u).concat(";")}};J.styles=m`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,r([s({type:String})],J.prototype,"height",2),r([s({type:String})],J.prototype,"width",2),r([s({type:String})],J.prototype,"left",2),r([s({type:String})],J.prototype,"top",2),r([s({type:String})],J.prototype,"right",2),r([s({type:String})],J.prototype,"bottom",2),J=r([p("nidoca-layout-floating")],J);var Xt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      ${x.getStyle(this.theme)}
      <slot></slot>
    `}};Xt.styles=m`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,r([s({type:String})],Xt.prototype,"theme",2),Xt=r([p("nidoca-container")],Xt);var It=class extends d{constructor(){super();this.hideSidebox=!0;this.theme=x.prototype.getParentTheme(this)||"plain"}render(){return n` <style>
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
      ${this.hideSidebox?n``:n` <slot class="sidebox" name="sidebox"></slot>`}`}};It.styles=m`
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
  `,r([s({type:f,converter:String})],It.prototype,"theme",2),r([s({type:Boolean,converter:String})],It.prototype,"hideSidebox",2),It=r([p("nidoca-split-screen")],It);var j=class extends d{constructor(){super(...arguments);this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return n`
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
    `}};j.styles=m`
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
  `,r([s({type:String})],j.prototype,"icon",2),r([s({type:Boolean})],j.prototype,"clickable",2),r([s({type:Boolean})],j.prototype,"deactivated",2),r([s({type:String})],j.prototype,"title",2),j=r([p("nidoca-icon")],j);var Yt=class extends d{render(){return n`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(this.rippleContainerElement!=null){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);let t=this.rippleContainerElement.getBoundingClientRect(),o=Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};Yt.styles=m`
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
  `,r([g("#rippleContainer")],Yt.prototype,"rippleContainerElement",2),Yt=r([p("nidoca-ripple")],Yt);var P=class extends d{constructor(){super(...arguments);this.src="";this.width="auto";this.height="auto";this.zoom=!1}render(){return this.src?n`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:n``}static example(t=""){return n`<nidoca-img width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img>`}};P.styles=m`
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
  `,r([s({type:String})],P.prototype,"src",2),r([s({type:String})],P.prototype,"width",2),r([s({type:String})],P.prototype,"height",2),r([s({type:Boolean})],P.prototype,"zoom",2),P=r([p("nidoca-img")],P);var pt=class extends P{static example(e=""){return n`<nidoca-img-round width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img-round>`}};pt.styles=m`
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
  `,pt=r([p("nidoca-img-round")],pt);var zt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:n``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let o=t.target;if(o==null)return;let i=o.assignedElements();for(let l=0;l<i.length;l++){let c=i[l];if(c instanceof P){this.selected==null&&l==0&&(this.selected=c.cloneNode(!0)),c.addEventListener("click",h=>{h.target&&(this.selected=h.target.cloneNode(!0))}),c.width="148px";let u=c.classList;u.contains("img")||u.add("img")}}}};zt.styles=m`
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
  `,r([s({type:f,converter:String})],zt.prototype,"theme",2),r([Lr()],zt.prototype,"selected",2),zt=r([p("nidoca-img-slider")],zt);var Kt=class extends d{constructor(){super(...arguments);this.src=""}render(){return n`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Kt.styles=m``,r([s({type:String})],Kt.prototype,"src",2),Kt=r([p("nidoca-movie")],Kt);var M=class extends d{constructor(){super(...arguments);this.label="";this.placeholder="";this.name="";this.min=1;this.max=10;this.errorText="";this.numberOne=1;this.numberTwo=1}render(){return n`
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
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,o){return Math.random()*(o-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};M.styles=m`
    :host {
      display: block;
      width: 100%;
    }
  `,r([s({type:f,converter:String})],M.prototype,"theme",2),r([s({type:String})],M.prototype,"label",2),r([s({type:String})],M.prototype,"placeholder",2),r([s({type:String})],M.prototype,"name",2),r([s({type:Number})],M.prototype,"min",2),r([s({type:Number})],M.prototype,"max",2),r([s({type:String})],M.prototype,"errorText",2),r([g("#inputfield")],M.prototype,"inputfield",2),M=r([p("nidoca-form-captcha")],M);var ft=class extends d{constructor(){super(...arguments);this.text="";this.href="";this.targetType="_self"}render(){return n`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};ft.styles=m`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,r([s({type:String})],ft.prototype,"text",2),r([s({type:String})],ft.prototype,"href",2),r([s({type:String})],ft.prototype,"targetType",2),ft=r([p("nidoca-link")],ft);var A=class extends d{constructor(){super(...arguments);this.theme="surface";this.primaryText="";this.secondaryText="";this.selected=!1}render(){return n`
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
      ${pt.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};A.styles=m`
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
  `,r([s({type:f,converter:String})],A.prototype,"theme",2),r([s({type:String})],A.prototype,"primaryText",2),r([s({type:String})],A.prototype,"secondaryText",2),r([s({type:Boolean})],A.prototype,"selected",2),A=r([p("nidoca-list-item")],A);var Z=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return n`
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
    `}static example(){return n`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};Z.styles=m`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,r([s({type:f,converter:String})],Z.prototype,"theme",2),r([s({type:String})],Z.prototype,"text",2),Z=r([p("nidoca-list-section")],Z);var et=class extends d{constructor(){super(...arguments);this.theme="surface";this.multiselect=!1}updated(t){super.updated(t),t.forEach((o,i)=>{i=="theme"&&this.getItems().forEach(l=>{l.theme=this.theme})})}render(){return n`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let o=t.target;o.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let i=0;i<o.length;i++){let l=o[i];l instanceof A&&t.push(l)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let i=0;i<o.length;i++){let l=o[i];l instanceof A&&l.selected&&t.push(l)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements(),i=0;for(let l=0;l<o.length;l++){let c=o[l];c instanceof A&&(c.selected&&t.push(i),i++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return n`<nidoca-list theme="primary">
      ${Z.example()} ${A.example()} ${A.example()} ${A.example()}
    </nidoca-list>`}};et.styles=m`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,r([s({type:f,converter:String})],et.prototype,"theme",2),r([s({type:Boolean})],et.prototype,"multiselect",2),r([g("#slotElement")],et.prototype,"slotElement",2),et=r([p("nidoca-list")],et);var Pt=class extends d{constructor(){super(...arguments);this.theme="primary";this.prominent=!1}render(){return n`
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
    `}};Pt.styles=m`
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
  `,r([s({type:String,converter:String})],Pt.prototype,"theme",2),r([s({type:Boolean})],Pt.prototype,"prominent",2),Pt=r([p("nidoca-top-app-bar")],Pt);var gt=class extends d{constructor(){super(...arguments);this.headers=["column 1","column 2"];this.rows=[["row 1",new j],["row 2",new j]];this.theme="plain"}render(){return n`
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
            ${Lt([this.headers],()=>n` ${ut(this.headers,t=>n` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${Lt([this.rows],()=>n`
                  ${ut(this.rows,t=>n`
                        <tr>
                          ${ut(t,o=>n` <td colspan="1" rowspan="1">${o}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};gt.styles=m`
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
  `,r([s({type:Array})],gt.prototype,"headers",2),r([s({type:Array})],gt.prototype,"rows",2),r([s({type:f,converter:String})],gt.prototype,"theme",2),gt=r([p("nidoca-table")],gt);var yt=class extends d{constructor(){super(...arguments);this.selected=!1}render(){return this.selected?n` <slot></slot>`:n``}};yt.styles=m`
    :host,
    slot {
      display: block;
    }
  `,r([s({type:Boolean})],yt.prototype,"selected",2),yt=r([p("nidoca-tab-content")],yt);var Q=class extends d{constructor(){super(...arguments);this.selected=!1;this.text="";this.theme="surface"}render(){return n`
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
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};Q.styles=m`
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
  `,r([s({type:Boolean})],Q.prototype,"selected",2),r([s({type:String})],Q.prototype,"text",2),r([s({type:String})],Q.prototype,"theme",2),Q=r([p("nidoca-tab")],Q);var F=class extends d{constructor(){super(...arguments);this.theme="surface";this.tabIndex=0}render(){return n`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),i=100/t.length,l=t[this.tabIndex];for(let c=0;c<t.length;c++){let u=t[c];u instanceof Q&&(u.theme=this.theme,u.style.width=String(i).concat("%"),u==l?(u.selected=!0,u.classList.add("SELECTED")):(u.selected=!1,u.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let o=this.tabContentSlot.assignedElements();for(let i=0;i<o.length;i++){let l=o[i];l instanceof yt&&(this.tabIndex==t?l.selected=!0:l.selected=!1,t++)}}}tabClicked(t){let o=t.detail;this.changeTabIndex(o)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let o=this.tabSlot.assignedElements();for(let i=0;i<o.length;i++){let l=o[i];if(l instanceof Q&&l==t){this.tabIndex=i;break}}}}static example(t=""){return n`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};F.styles=m`
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
  `,r([g("#tabSlot")],F.prototype,"tabSlot",2),r([g("#tabContentSlot")],F.prototype,"tabContentSlot",2),r([s({type:String})],F.prototype,"theme",2),r([s({type:Number})],F.prototype,"tabIndex",2),F=r([p("nidoca-tabs")],F);var rt=class extends d{constructor(){super();this.hideLeft=!0;this.prominent=!1;document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let o=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-o.width}})}updated(t){super.updated(t)}render(){return n`
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
    `}};rt.styles=m`
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
  `,r([s({type:Boolean})],rt.prototype,"hideLeft",2),r([s({type:Boolean})],rt.prototype,"prominent",2),r([g("#header")],rt.prototype,"headerElement",2),r([g("#left")],rt.prototype,"leftElement",2),r([g("#content")],rt.prototype,"contentElement",2),rt=r([p("nidoca-template")],rt);var bt=class extends d{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{this.videoElement&&(this.videoElement.srcObject=t)})}render(){return n`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};bt.styles=m``,r([g("#video")],bt.prototype,"videoElement",2),r([g("#canvas")],bt.prototype,"canvasElement",2),r([g("#click-photo")],bt.prototype,"buttonElement",2),bt=r([p("nidoca-video")],bt);var Mt=class extends d{constructor(){super(...arguments);this.src="";this.canvasElements=[];this.storeCanvasElements=[]}render(){return n`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>n`${t}`)}
    `}updated(t){super.updated(t),t.forEach((o,i)=>{if(console.debug(`${this.tagName} : property ${String(i)} changed. oldValue: ${o}`),i=="src"){this.convert();let l=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let o=document.createElement("canvas");o.width=t[0],o.height=t[1];let i=o.getContext("2d");i&&this.img&&(this.img.crossOrigin="anonymous",i.drawImage(this.img,0,0,t[0],t[1]),o.toBlob(l=>{},"image/webp")),this.canvasElements.push(o)}),this.requestUpdate()})}};Mt.styles=m``,r([s({type:String})],Mt.prototype,"src",2),r([g("#img")],Mt.prototype,"img",2),Mt=r([p("nidoca-svg-2-webp")],Mt);var v=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return n`<style>
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
    `}};v.styles=m`
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
  `,r([s({type:f,converter:String})],v.prototype,"theme",2),r([s({type:String})],v.prototype,"text",2),v=r([p("nidoca-text")],v);var le=class extends v{render(){return n` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};le.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 105%;
    }
  `,le=r([p("nidoca-text-body")],le);var pe=class extends v{render(){return n`${super.render()}`}};pe.styles=m`
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
  `,pe=r([p("nidoca-text-button")],pe);var me=class extends v{};me.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,me=r([p("nidoca-text-overline")],me);var ce=class extends v{render(){return n` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ce.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,ce=r([p("nidoca-text-subtitle")],ce);var W=class extends v{render(){return n`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};W.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,W=r([p("nidoca-text-caption")],W);var Ke=class extends W{render(){return n`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ke=r([p("nidoca-text-error")],Ke);var Je=class extends W{render(){return n`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Je=r([p("nidoca-text-success")],Je);var Ze=class extends W{render(){return n`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ze=r([p("nidoca-text-warning")],Ze);var Qe=class extends W{render(){return n`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Qe=r([p("nidoca-text-info")],Qe);var de=class extends v{};de.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,de=r([p("nidoca-text-h1")],de);var he=class extends v{};he.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `,he=r([p("nidoca-text-h2")],he);var ue=class extends v{};ue.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,ue=r([p("nidoca-text-h3")],ue);var fe=class extends v{};fe.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,fe=r([p("nidoca-text-h4")],fe);var ge=class extends v{};ge.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,ge=r([p("nidoca-text-h5")],ge);var ye=class extends v{};ye.styles=m`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,ye=r([p("nidoca-text-h6")],ye);var ot=class extends d{constructor(){super(...arguments);this.value="";this.placeholder="";this.disabled=!1;this.theme="surface"}render(){return n`
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
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",o=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",o.type,JSON.stringify(o.detail)),this.dispatchEvent(o)}static example(t=""){return n`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};ot.styles=m`
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
  `,r([s({type:String})],ot.prototype,"value",2),r([s({type:String})],ot.prototype,"placeholder",2),r([s({type:Boolean})],ot.prototype,"disabled",2),r([g("#inputElement")],ot.prototype,"inputElement",2),r([s({type:f,converter:String})],ot.prototype,"theme",2),ot=r([p("nidoca-search-bar")],ot);var be=class{static{this.CENTER="CENTER"}static{this.LEFT="LEFT"}static{this.RIGHT="RIGHT"}static{this.TOP="TOP"}static{this.BOTTOM="BOTTOM"}static{this.SLIDE_CENTER="SLIDE_CENTER"}static{this.SLIDE_LEFT="SLIDE_LEFT"}static{this.SLIDE_RIGHT="SLIDE_RIGHT"}static{this.SLIDE_TOP="SLIDE_TOP"}static{this.SLIDE_BOTTOM="SLIDE_BOTTOM"}},Wt=class extends d{constructor(){super(...arguments);this.transitionType=be.CENTER;this.duration=.5}render(){return n` <div class="${S(this.transitionType)}"><slot></slot></div> `}};Wt.styles=m`
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
  `,r([s({type:String})],Wt.prototype,"transitionType",2),r([s({type:Number})],Wt.prototype,"duration",2),Wt=r([p("nidoca-transition")],Wt);var Jt=class extends d{constructor(){super(...arguments);this.show=!1}render(){return this.show?n`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${be.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:n``}};Jt.styles=m`
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
  `,r([s({type:Boolean})],Jt.prototype,"show",2),Jt=r([p("nidoca-dialog")],Jt);var nt=class extends d{constructor(){super(...arguments);this.show=!1;this.title="Ja oder Nein ?";this.description="Entscheide dich";this.labelButtonYes="Ja";this.labelButtonNo="Nein"}render(){return n`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};nt.styles=m``,r([s({type:Boolean})],nt.prototype,"show",2),r([s({type:String})],nt.prototype,"title",2),r([s({type:String})],nt.prototype,"description",2),r([s({type:String})],nt.prototype,"labelButtonYes",2),r([s({type:String})],nt.prototype,"labelButtonNo",2),nt=r([p("nidoca-dialog-decision")],nt);var Zt=class extends d{constructor(){super(...arguments);this.icon=""}render(){return n`
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
    `}};Zt.styles=m`
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
  `,r([s({type:String})],Zt.prototype,"icon",2),Zt=r([p("nidoca-infobox")],Zt);var mt=class extends d{constructor(){super(...arguments);this.theme="surface";this.src="";this.title="";this.subtitle=""}render(){return n`
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
    >`}};mt.styles=m`
    :host {
      display: block;
    }
  `,r([s({type:f,converter:String})],mt.prototype,"theme",2),r([s({type:String})],mt.prototype,"src",2),r([s({type:String})],mt.prototype,"title",2),r([s({type:String})],mt.prototype,"subtitle",2),mt=r([p("nidoca-avatar")],mt);var Qt=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return n`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Qt.styles=m`
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
  `,r([s({type:f,converter:String})],Qt.prototype,"theme",2),Qt=r([p("nidoca-card")],Qt);var xe=class extends d{render(){return n`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){let t=e.target;if(t==null)return;let o=t.assignedElements();for(let i=0;i<o.length;i++){let c=o[i].classList;c.contains("flexItem")||c.add("flexItem"),c.contains("flexItemDevice")||c.add("flexItemDevice")}}};xe.styles=m`
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
  `,xe=r([p("nidoca-gallery")],xe);var ve=class extends d{render(){return n`<slot></slot>`}print(){let e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};ve.styles=m`
    :host {
      display: none;
    }
  `,ve=r([p("nidoca-print")],ve);var $e=class extends d{render(){return n`
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){let o=e.target.assignedElements(),i=o.length;for(let l=0;l<i;l++){let u=o[l].classList,h="item_count_"+i;u.contains(h)||u.add(h)}}};$e.styles=m`
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
  `,$e=r([p("nidoca-section")],$e);var we=class extends d{render(){return n` <slot></slot>`}};we.styles=m`
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
  `,we=r([p("nidoca-dashboard")],we);var Ee=class extends d{render(){return n` <slot></slot>`}};Ee.styles=m`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,Ee=r([p("nidoca-dashboard-box-25")],Ee);var ke=class extends d{render(){return n` <slot></slot>`}};ke.styles=m`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,ke=r([p("nidoca-dashboard-box-50")],ke);var Te=class extends d{render(){return n` <slot></slot>`}};Te.styles=m`
    :host {
      width: 100%;
      display: block;
    }
  `,Te=r([p("nidoca-dashboard-box-100")],Te);var Bt=class extends d{constructor(){super(...arguments);this.clickable=!0;this.title=""}render(){return n`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Bt.styles=m`
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
  `,r([s({type:Boolean})],Bt.prototype,"clickable",2),r([s({type:String})],Bt.prototype,"title",2),Bt=r([p("nidoca-dashboard-card")],Bt);var Ft=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      ${x.getStyle(this.theme)}
      <slot></slot>
    `}};Ft.styles=m`
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
  `,r([s({type:f,converter:String})],Ft.prototype,"theme",2),Ft=r([p("nidoca-box")],Ft);var B=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Deine Nachricht";this.nameLabel="Dein Name";this.emailLabel="Deine Email";this.titleLabel="Betreff";this.messageLabel="Deine Nachricht";this.buttonLabel="Senden"}render(){return n`
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
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};B.styles=m`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],B.prototype,"theme",2),r([s({type:String,converter:String})],B.prototype,"label",2),r([s({type:String,converter:String})],B.prototype,"nameLabel",2),r([s({type:String,converter:String})],B.prototype,"emailLabel",2),r([s({type:String,converter:String})],B.prototype,"titleLabel",2),r([s({type:String,converter:String})],B.prototype,"messageLabel",2),r([s({type:String,converter:String})],B.prototype,"buttonLabel",2),r([g("#authenitcate-form")],B.prototype,"formComponent",2),B=r([p("nidoca-form-contact")],B);var Fe=class{getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}constructor(e,t){this.propertyName=e,this.propertyValue=t}getRenderType(){return this.isConverterTypeArray()||this.isArray()?"Array":this.getTypeName()==null?"Class":this.getTypeName()}getEnumValues(){let e=[];return Object.values(this.getType()).forEach(t=>{e.push({key:t,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(t)])})}),e}getEnumValue(e){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(e)]}getEnumKey(e){let t=this.getEnumValues();for(let o=0;o<t.length;o++){let i=t[o];if(i.key==e)return i.value}}isConverterTypeArray(){return this.getConverterTypeName()=="Array"}isArray(){return this.getTypeName()=="Array"}isPrimitive(){return this.getTypeName()=="String"||this.getTypeName()=="Boolean"||this.getTypeName()=="Number"}getType(){return this.propertyValue?.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){return this.getConverterType()?.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}};var Ne=class{constructor(e){this.instance=e}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map(e=>e.name?e.name:"default")}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(e,t){let o=[];if(t&&(t.tagName==e&&o.push(t),t.children.length>0)){let l=t?.children;for(let c=0;c<l.length;c++)o=o.concat(this.getElementsByTagName(e,l.item(c)))}return o}getElementProperties(){let e=this.instance.constructor.elementProperties;e||(e=new Map);let t=[];for(let o of Array.from(e.keys()))t.push(new Fe(o,e.get(o)));return t}getOwnPropertieNames(){let e=this.instance.constructor;return Object.getOwnPropertyNames(e)}};var tr=class{constructor(e){this.propertyWrapper=e}getInputElement(e){if(e==null)return n``;let t=e.webcomponentWrapper;if(t==null)return n``;switch(this.propertyWrapper.getRenderType()){case"String":return n`
                    <nidoca-form-text .textType="${"text"}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${t.instance[this.propertyWrapper.propertyName]}"
                                      @input="${i=>{t.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,e.parent.requestUpdate()}}"
                    /></nidoca-form-text>`;case"Number":return n` <nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${"number"}"
          value="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{t.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,e.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case"Boolean":return n` <nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{t.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,e.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case"Class":return n` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${k.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter(i=>this.propertyWrapper.getType()[i]==t.instance[this.propertyWrapper.propertyName])[0]}"
          @input="${i=>{t.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(i.target.getOutputData().value),e.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case"Array":return n`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${k.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${t.instance[this.propertyWrapper.propertyName]}"
            @input="${i=>{t.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return n``}}getAsHtml(e){switch(this.propertyWrapper.getRenderType()){case"Boolean":return`${this.propertyWrapper.propertyName}
`;case"Array":return"";default:return`${this.propertyWrapper.propertyName}="${e.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}"
`}}getAsLit(e){switch(this.propertyWrapper.getRenderType()){case"Class":case"String":return`${this.propertyWrapper.propertyName}="${e.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}"
`;case"Boolean":return`${this.propertyWrapper.propertyName}
`;case"Array":return`.${this.propertyWrapper.propertyName}="\${[]}"
`;default:return`.${this.propertyWrapper.propertyName}="\${}"
`}}getAsAngular(e){switch(this.propertyWrapper.getRenderType()){case"Class":case"String":return`[${this.propertyWrapper.propertyName}]="${e.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}"
`;case"Array":return`[${this.propertyWrapper.propertyName}]="\${[]}"
`;default:return`[${this.propertyWrapper.propertyName}]="\${}"
`}}getAsJavascript(e){switch(this.propertyWrapper.getRenderType()){case"Class":case"Array":return"";case"String":return`element.${this.propertyWrapper.propertyName}="${e.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}";
`;default:return`element.${this.propertyWrapper.propertyName}=${e.webcomponentWrapper.instance[this.propertyWrapper.propertyName]};
`}}getAsTypescript(e){switch(this.propertyWrapper.getRenderType()){case"Array":return"";case"Class":case"String":return`element.${this.propertyWrapper.propertyName}="${e.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}";
`;default:return`element.${this.propertyWrapper.propertyName}=${e.webcomponentWrapper.instance[this.propertyWrapper.propertyName]};
`}}};var er=class{constructor(e,t){this.parent=e;this.webcomponentWrapper=t}getAsHtml(){return`<${this.webcomponentWrapper.getTagName()}
${this.getPropertyGuiWrappers().map(t=>t.getAsHtml(this)).join("")}></${this.webcomponentWrapper.getTagName()}>
`.trim()}getAsJavascript(){return`<${this.webcomponentWrapper.getTagName()} id="meinElement"></${this.webcomponentWrapper.getTagName()}>
<script>
  const element = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers().map(t=>t.getAsJavascript(this)).join("  ")}<\/script>
`.trim()}getTypescript(){return`
const element : ${this.webcomponentWrapper.getClassName()} = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers().map(t=>t.getAsTypescript(this)).join("  ")}
`.trim()}getAsLit(){return`
<${this.webcomponentWrapper.getTagName()}
  ${this.getPropertyGuiWrappers().map(t=>t.getAsLit(this)).join("  ")}>
`.trim()}getAsAngular(){return`<${this.webcomponentWrapper.getTagName()}
${this.getPropertyGuiWrappers().map(t=>t.getAsAngular(this)).join("  ")}></${this.webcomponentWrapper.getTagName()}>
`.trim()}renderPropertyGui(){let e=[];for(let t of this.getPropertyGuiWrappers())e.push(n`
          <div>
            <b>${t.propertyWrapper.propertyName}</b>

            <pre>${t.propertyWrapper.getTypeName()}</pre>
            <div>${t.getInputElement(this)}</div>
          </div>
        `);return e}getPropertyGuiWrappers(){let e=[];for(let t of this.webcomponentWrapper.getElementProperties())e.push(new tr(t));return e}getPropertieNames(){let e=[];return this.getPropertyGuiWrappers().map(t=>{e.push(t.propertyWrapper.propertyName)}),e}hasProperties(){return this.getPropertieNames().length>0}};var Dt=class extends I{constructor(){super(...arguments);this.webcomponentGuiWrapper=null;this.customEventNames=[]}updated(t){t.has("element")&&this.element!=null&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new er(this,new Ne(this.element)),this.requestUpdate())}render(){return this.element?n` <nidoca-section theme="primary">
            <div>
              <nidoca-text-h2 class="paddingTopBottom">Tag</nidoca-text-h2>
              <nidoca-code
                >${this.webcomponentGuiWrapper?this.webcomponentGuiWrapper.webcomponentWrapper.getHTMLTag():""}
              </nidoca-code>

              <div style="padding-top:var(--space-3);">
                <nidoca-card style="padding:var(--space-4)" theme="primary"> ${this.element}</nidoca-card>
              </div>
            </div>

            <div style="padding-left:var(--space-3)">
              ${this.webcomponentGuiWrapper?.hasProperties()?n`
                    <nidoca-text-h2 class="paddingTopBottom">Attribute</nidoca-text-h2>
                    ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map(t=>n`${t.getInputElement(this.webcomponentGuiWrapper)}
                        <div class="paddingTopBottom"></div>`)}
                  `:n``}
              ${this.webcomponentGuiWrapper?.webcomponentWrapper.hasSlots()?n` <nidoca-text-h2 class="paddingTopBottom">Slots</nidoca-text-h2>

                    <nidoca-table
                      theme="surface"
                      .headers="${["name"]}"
                      .rows="${this.toSlotRows(this.webcomponentGuiWrapper.webcomponentWrapper.getSlotNames())}"
                    >
                    </nidoca-table>`:n``}
              ${this.customEventNames.length>0?n` <nidoca-text-h2 class="paddingTopBottom">Custom Events</nidoca-text-h2>
                    <nidoca-table
                      class="paddingTopBottom"
                      .headers="${["name"]}"
                      .rows="${this.toCustomEventRows(this.customEventNames)}"
                    >
                    </nidoca-table>`:n``}
            </div>
          </nidoca-section>

          <nidoca-hr></nidoca-hr>

          <nidoca-text-h2 class="paddingTopBottom">Quelltext</nidoca-text-h2>
          <nidoca-tabs tabIndex="0">
            <nidoca-tab slot="tab">Html</nidoca-tab>
            <nidoca-tab slot="tab">Javascript</nidoca-tab>
            <nidoca-tab slot="tab">Typescript</nidoca-tab>
            <nidoca-tab slot="tab">Lit</nidoca-tab>
            <nidoca-tab slot="tab">Angular</nidoca-tab>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getAsHtml()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getAsJavascript()} </nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getTypescript()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getAsLit()}</nidoca-code>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-code class="paddingTopBottom">${this.webcomponentGuiWrapper?.getAsAngular()}</nidoca-code>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-hr></nidoca-hr>

          <nidoca-text-h2 class="paddingTopBottom">Attribute Übersicht</nidoca-text-h2>
          <nidoca-table
            class="paddingTopBottom"
            theme="surface"
            .headers="${["name","type","converter type","render type"]}"
            .rows="${this.toAttributeRows(this.webcomponentGuiWrapper?.getPropertyGuiWrappers())}"
          >
          </nidoca-table>
          <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`:n`Kein Element ausgewählt.`}slotChanged(t){let o=t.target;if(o==null)return;let l=o.assignedElements()[0];l instanceof HTMLElement&&(this.element=l)}toAttributeRows(t){let o=[[]];return t&&t.map(i=>{let l=[];return l.push(i.propertyWrapper.propertyName),l.push(i.propertyWrapper.getTypeName()),l.push(i.propertyWrapper.getConverterTypeName()),l.push(i.propertyWrapper.getRenderType()),o.push(l),l}),o}toSlotRows(t){let o=[[]];return t&&t.map(i=>{let l=[];return l.push(i),o.push(l),l}),o}toCustomEventRows(t){let o=[[]];return t&&t.map(i=>{let l=[];return l.push(i),o.push(l),l}),o}};Dt.styles=m`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }

    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
  `,r([s({type:Array})],Dt.prototype,"customEventNames",2),r([s({type:Object})],Dt.prototype,"element",2),Dt=r([p("webcomponent-viewer")],Dt);var Nt=class extends I{constructor(){super(...arguments);this.componentMap=new Map;this.value="";this.options=[]}render(){return n`
      <nidoca-form-combobox
        name="components"
        label="Komponenten"
        value="${this.value}"
        .options="${this.options}"
        @input="${t=>{let o=t.target.getOutputData().value,i=this.componentMap.get(o);this.webcomponentViewer&&(console.log(`change element: ${o}`),this.webcomponentViewer.element=i)}}"
      ></nidoca-form-combobox>

      <nidoca-hr></nidoca-hr>

      <webcomponent-viewer id="webcomponentViewer"></webcomponent-viewer>
      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let i=t.target.assignedElements(),l=i.length;for(let c=0;c<l;c++){let u=i[c];u instanceof HTMLElement&&(this.webcomponentViewer&&this.webcomponentViewer.element==null&&(this.webcomponentViewer.element=u,this.value=u.tagName),this.componentMap.set(u.tagName,u.cloneNode(!0)))}this.options=k.stringArrayToOptions(Array.from(this.componentMap.keys())),this.requestUpdate()}};Nt.styles=m`
    slot {
      display: none;
    }
  `,r([g("#webcomponentViewer")],Nt.prototype,"webcomponentViewer",2),Nt=r([p("webcomponent-viewer-container")],Nt);var rr=class extends I{render(){return n`<nidoca-container>
      <nidoca-section>
        <webcomponent-viewer-container>
          ${F.example()}${et.example()} ${A.example()} ${Z.example()}
          ${pt.example()}
        </webcomponent-viewer-container>
      </nidoca-section>
    </nidoca-container>`}};rr=r([p("nidoca-viewer")],rr);var Se=class extends d{render(){return n`
     huhu xxx
    `}};Se.styles=m``,Se=r([p("nidoca-page-main")],Se);var Re=class extends d{render(){return n`
      <nidoca-container>
        <nidoca-viewer></nidoca-viewer>
      </nidoca-container>
    `}};Re.styles=m`
    .infobox {
      padding: var(--space-2);
    }
  `,Re=r([p("nidoca-page-webcomponents")],Re);var _e=class extends d{render(){return n`
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
    `}};_e.styles=m`
    nidoca-article {
      padding-bottom: var(--space-2);
    }
  `,_e=r([p("nidoca-page-imprint")],_e);var te=class extends d{constructor(){super(...arguments);this.cssVars=[]}firstUpdated(){let t=(o=document.styleSheets)=>{let i=[];return Array.from(o).forEach(l=>{Array.from(l.cssRules).forEach(c=>{if(!c||!c.style)return;let u=c.style;Array.from(u).forEach(h=>{h.startsWith("--")&&i.indexOf(h)==-1&&i.push(h)})})}),i};this.cssVars=t(),console.log(this.cssVars)}render(){return n`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${Lt([this.cssVars],()=>n`
                ${ut(this.cssVars,t=>n`
                    <nidoca-form-text
                      style="width:100%;padding-bottom: var(--space-3);"
                      @input="${o=>{document.documentElement.style.setProperty(t,o.target?o.target.getOutputData().value:"")}}"
                      type="${t.indexOf("color")>-1?"color":"text"}"
                      name="${t}"
                      value="${getComputedStyle(document.documentElement).getPropertyValue(t).trim()}"
                      label="${t}"
                    ></nidoca-form-text>
                  `)}
              `)}
        </nidoca-article>
      </nidoca-container>
    `}};te.styles=m``,r([s({type:Array})],te.prototype,"cssVars",2),te=r([p("nidoca-page-settings")],te);var Le=class extends d{render(){return n``}};Le.styles=m``,Le=r([p("nidoca-page-privacy")],Le);var Ae=class extends d{render(){return n``}};Ae.styles=m``,Ae=r([p("nidoca-page-terms-of-use")],Ae);var G=class a{constructor(){this.listeners=[],window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",e=>{if(!this.shouldIgnoreEvent(e)){let t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}})}static getUniqueInstance(){return a.uniqueInstance||(a.uniqueInstance=new a),a.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){if(e.indexOf("#")==-1&&(e="#".concat(e)),console.trace("navigate to: %s",e),t!=null&&console.trace("state: %s",JSON.stringify(t)),document.location.hash===e){console.trace("you are already on page: "+e);return}history.pushState(t,"",e),this.notifyListeners()}getCurrentState(){return history.state}getStateProperty(e){let t=this.getCurrentState();return t!=null?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){let e=this.getCurrentPage();this.listeners.forEach(t=>t.routeChanged(e))}shouldIgnoreEvent(e){return e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(let o of e.composedPath?e.composedPath():[])if(this.isAnchor(o))return o;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&e.nodeName.toLowerCase()==="a"}shouldIgnoreAnchor(e){return!!(e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){let t=e.port,o=e.protocol,c=o==="http:"&&t==="80"||o==="https:"&&t==="443"?e.hostname:e.host;return`${o}//${c}`}};var Ce=class extends d{constructor(){super();this.content=n``;G.getUniqueInstance().subscribe(this),this.routeChanged(G.getUniqueInstance().getCurrentPage())}routeChanged(t){switch(t){case"privacy":this.content=n`<nidoca-page-privacy></nidoca-page-privacy>`;break;case"imprint":this.content=n`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"settings":this.content=n`<nidoca-page-settings></nidoca-page-settings>`;break;case"terms-of-use":this.content=n`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"webcomponents":this.content=n`<nidoca-page-webcomponents></nidoca-page-webcomponents>`;break;case"main":this.content=n`<nidoca-page-main></nidoca-page-main>`;break;default:this.content=n`<nidoca-page-webcomponents></nidoca-page-webcomponents>`}}render(){return n`
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
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#main")}}"
            icon="home"
            text="Start"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text=">Webcomponents"
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#webcomponents")}}"
          ></nidoca-menu-item>

          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
          <nidoca-menu-item
            text="Impressum"
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#imprint")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Datenschutz"
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#privacy")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#terms-of-use")}}"
          ></nidoca-menu-item>
          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
          <nidoca-menu-item
            text="Einstellungen"
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#settings")}}"
          ></nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
    `}};r([s({type:Object})],Ce.prototype,"content",2),Ce=r([p("nidoca-my-app")],Ce);})();
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
