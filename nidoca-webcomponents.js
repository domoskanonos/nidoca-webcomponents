"use strict";(()=>{var Rr=Object.defineProperty;var Ir=Object.getOwnPropertyDescriptor;var r=(a,e,t,o)=>{for(var n=o>1?void 0:o?Ir(e,t):e,l=a.length-1,p;l>=0;l--)(p=a[l])&&(n=(o?p(e,t,n):p(n))||n);return o&&n&&Rr(e,t,n),n};var er=class a{constructor(){this.listeners=[];window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",e=>{if(!this.shouldIgnoreEvent(e)){let t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}})}static getUniqueInstance(){return a.uniqueInstance||(a.uniqueInstance=new a),a.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){if(e.indexOf("#")==-1&&(e="#".concat(e)),console.trace("navigate to: %s",e),t!=null&&console.trace("state: %s",JSON.stringify(t)),document.location.hash===e){console.trace("you are already on page: "+e);return}history.pushState(t,"",e),this.notifyListeners()}getCurrentState(){return history.state}getStateProperty(e){let t=this.getCurrentState();return t!=null?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){let e=this.getCurrentPage();this.listeners.forEach(t=>t.routeChanged(e))}shouldIgnoreEvent(e){return e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(let o of e.composedPath?e.composedPath():[])if(this.isAnchor(o))return o;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&e.nodeName.toLowerCase()==="a"}shouldIgnoreAnchor(e){return!!(e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){let t=e.port,o=e.protocol,p=o==="http:"&&t==="80"||o==="https:"&&t==="443"?e.hostname:e.host;return`${o}//${p}`}};var we=class{static generateImageBase64(e,t,o){let n=document.createElement("canvas");n.width=128,n.height=128;let l=n.getContext("2d");if(!l)throw new Error("Canvas context is not available");l.fillStyle=o,l.fillRect(0,0,n.width,n.height),l.fillStyle=t;let p=document.body,h=getComputedStyle(p).getPropertyValue("--font-family")||"Arial";l.font=`bold 64px ${h}`,l.textAlign="center",l.textBaseline="alphabetic";let v=e.charAt(0).toUpperCase(),E=l.measureText(v),x=E.actualBoundingBoxAscent-E.actualBoundingBoxDescent;return l.fillText(v,n.width/2,n.height/2+x/2),n.toDataURL("image/png")}};var rr=class{constructor(e,t,o=10240){this.key=e;this.minWidth=t;this.maxWidth=o}asMediaStyle(e){let t="@media ";return this.minWidth&&(t=t.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(t=t.concat(" and "))),this.maxWidth&&(t=t.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),t=t.concat("{"),t=t.concat(e),t=t.concat("} "),t}};var Ee=globalThis,Se=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ke=Symbol(),or=new WeakMap,Ft=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Se&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=or.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&or.set(t,e))}return e}toString(){return this.cssText}},nr=a=>new Ft(typeof a=="string"?a:a+"",void 0,Ke),c=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((o,n,l)=>o+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+a[l+1],a[0]);return new Ft(t,a,Ke)},Ye=(a,e)=>{if(Se)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),n=Ee.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=t.cssText,a.appendChild(o)}},Te=Se?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return nr(t)})(a):a;var{is:Pr,defineProperty:Br,getOwnPropertyDescriptor:zr,getOwnPropertyNames:jr,getOwnPropertySymbols:$r,getPrototypeOf:Dr}=Object,He=globalThis,ir=He.trustedTypes,Cr=ir?ir.emptyScript:"",Lr=He.reactiveElementPolyfillSupport,_t=(a,e)=>a,Nt={toAttribute(a,e){switch(e){case Boolean:a=a?Cr:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Oe=(a,e)=>!Pr(a,e),sr={attribute:!0,type:String,converter:Nt,reflect:!1,hasChanged:Oe};Symbol.metadata??=Symbol("metadata"),He.litPropertyMetadata??=new WeakMap;var tt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),n=this.getPropertyDescriptor(e,o,t);n!==void 0&&Br(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){let{get:n,set:l}=zr(this.prototype,e)??{get(){return this[t]},set(p){this[t]=p}};return{get(){return n?.call(this)},set(p){let f=n?.call(this);l.call(this,p),this.requestUpdate(e,f,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sr}static _$Ei(){if(this.hasOwnProperty(_t("elementProperties")))return;let e=Dr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_t("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_t("properties"))){let t=this.properties,o=[...jr(t),...$r(t)];for(let n of o)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,n]of t)this.elementProperties.set(o,n)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let n=this._$Eu(t,o);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let n of o)t.unshift(Te(n))}else e!==void 0&&t.push(Te(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ye(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EC(e,t){let o=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,o);if(n!==void 0&&o.reflect===!0){let l=(o.converter?.toAttribute!==void 0?o.converter:Nt).toAttribute(t,o.type);this._$Em=e,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Em=null}}_$AK(e,t){let o=this.constructor,n=o._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let l=o.getPropertyOptions(n),p=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:Nt;this._$Em=n,this[n]=p.fromAttribute(t,l.type),this._$Em=null}}requestUpdate(e,t,o){if(e!==void 0){if(o??=this.constructor.getPropertyOptions(e),!(o.hasChanged??Oe)(this[e],t))return;this.P(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,o){this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[n,l]of o)l.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],l)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(t=>this._$EC(t,this[t])),this._$EU()}updated(e){}firstUpdated(e){}};tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},tt[_t("elementProperties")]=new Map,tt[_t("finalized")]=new Map,Lr?.({ReactiveElement:tt}),(He.reactiveElementVersions??=[]).push("2.0.4");var Ze=globalThis,Re=Ze.trustedTypes,ar=Re?Re.createPolicy("lit-html",{createHTML:a=>a}):void 0,Je="$lit$",et=`lit$${Math.random().toFixed(9).slice(2)}$`,Fe="?"+et,Vr=`<${Fe}>`,bt=document,ee=()=>bt.createComment(""),re=a=>a===null||typeof a!="object"&&typeof a!="function",_e=Array.isArray,hr=a=>_e(a)||typeof a?.[Symbol.iterator]=="function",Xe=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lr=/-->/g,mr=/>/g,xt=RegExp(`>|${Xe}(?:([^\\s"'>=/]+)(${Xe}*=${Xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cr=/'/g,pr=/"/g,ur=/^(?:script|style|textarea|title)$/i,Ne=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),s=Ne(1),eo=Ne(2),ro=Ne(3),M=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),dr=new WeakMap,yt=bt.createTreeWalker(bt,129);function fr(a,e){if(!_e(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return ar!==void 0?ar.createHTML(e):e}var gr=(a,e)=>{let t=a.length-1,o=[],n,l=e===2?"<svg>":e===3?"<math>":"",p=te;for(let f=0;f<t;f++){let h=a[f],v,E,x=-1,w=0;for(;w<h.length&&(p.lastIndex=w,E=p.exec(h),E!==null);)w=p.lastIndex,p===te?E[1]==="!--"?p=lr:E[1]!==void 0?p=mr:E[2]!==void 0?(ur.test(E[2])&&(n=RegExp("</"+E[2],"g")),p=xt):E[3]!==void 0&&(p=xt):p===xt?E[0]===">"?(p=n??te,x=-1):E[1]===void 0?x=-2:(x=p.lastIndex-E[2].length,v=E[1],p=E[3]===void 0?xt:E[3]==='"'?pr:cr):p===pr||p===cr?p=xt:p===lr||p===mr?p=te:(p=xt,n=void 0);let y=p===xt&&a[f+1].startsWith("/>")?" ":"";l+=p===te?h+Vr:x>=0?(o.push(v),h.slice(0,x)+Je+h.slice(x)+et+y):h+et+(x===-2?f:y)}return[fr(a,l+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},oe=class a{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let l=0,p=0,f=e.length-1,h=this.parts,[v,E]=gr(e,t);if(this.el=a.createElement(v,o),yt.currentNode=this.el.content,t===2||t===3){let x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(n=yt.nextNode())!==null&&h.length<f;){if(n.nodeType===1){if(n.hasAttributes())for(let x of n.getAttributeNames())if(x.endsWith(Je)){let w=E[p++],y=n.getAttribute(x).split(et),O=/([.?@])?(.*)/.exec(w);h.push({type:1,index:l,name:O[2],strings:y,ctor:O[1]==="."?Pe:O[1]==="?"?Be:O[1]==="@"?ze:At}),n.removeAttribute(x)}else x.startsWith(et)&&(h.push({type:6,index:l}),n.removeAttribute(x));if(ur.test(n.tagName)){let x=n.textContent.split(et),w=x.length-1;if(w>0){n.textContent=Re?Re.emptyScript:"";for(let y=0;y<w;y++)n.append(x[y],ee()),yt.nextNode(),h.push({type:2,index:++l});n.append(x[w],ee())}}}else if(n.nodeType===8)if(n.data===Fe)h.push({type:2,index:l});else{let x=-1;for(;(x=n.data.indexOf(et,x+1))!==-1;)h.push({type:7,index:l}),x+=et.length-1}l++}}static createElement(e,t){let o=bt.createElement("template");return o.innerHTML=e,o}};function vt(a,e,t=a,o){if(e===M)return e;let n=o!==void 0?t._$Co?.[o]:t._$Cl,l=re(e)?void 0:e._$litDirective$;return n?.constructor!==l&&(n?._$AO?.(!1),l===void 0?n=void 0:(n=new l(a),n._$AT(a,t,o)),o!==void 0?(t._$Co??=[])[o]=n:t._$Cl=n),n!==void 0&&(e=vt(a,n._$AS(a,e.values),n,o)),e}var Ie=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,n=(e?.creationScope??bt).importNode(t,!0);yt.currentNode=n;let l=yt.nextNode(),p=0,f=0,h=o[0];for(;h!==void 0;){if(p===h.index){let v;h.type===2?v=new Lt(l,l.nextSibling,this,e):h.type===1?v=new h.ctor(l,h.name,h.strings,this,e):h.type===6&&(v=new je(l,this,e)),this._$AV.push(v),h=o[++f]}p!==h?.index&&(l=yt.nextNode(),p++)}return yt.currentNode=bt,n}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},Lt=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,n){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=vt(this,e,t),re(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==M&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):hr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&re(this._$AH)?this._$AA.nextSibling.data=e:this.T(bt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=oe.createElement(fr(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(t);else{let l=new Ie(n,this),p=l.u(this.options);l.p(t),this.T(p),this._$AH=l}}_$AC(e){let t=dr.get(e.strings);return t===void 0&&dr.set(e.strings,t=new oe(e)),t}k(e){_e(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,n=0;for(let l of e)n===t.length?t.push(o=new a(this.O(ee()),this.O(ee()),this,this.options)):o=t[n],o._$AI(l),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},At=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,n,l){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=S}_$AI(e,t=this,o,n){let l=this.strings,p=!1;if(l===void 0)e=vt(this,e,t,0),p=!re(e)||e!==this._$AH&&e!==M,p&&(this._$AH=e);else{let f=e,h,v;for(e=l[0],h=0;h<l.length-1;h++)v=vt(this,f[o+h],t,h),v===M&&(v=this._$AH[h]),p||=!re(v)||v!==this._$AH[h],v===S?e=S:e!==S&&(e+=(v??"")+l[h+1]),this._$AH[h]=v}p&&!n&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Pe=class extends At{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},Be=class extends At{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},ze=class extends At{constructor(e,t,o,n,l){super(e,t,o,n,l),this.type=5}_$AI(e,t=this){if((e=vt(this,e,t,0)??S)===M)return;let o=this._$AH,n=e===S&&o!==S||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,l=e!==S&&(o===S||n);n&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},je=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){vt(this,e)}},xr={M:Je,P:et,A:Fe,C:1,L:gr,R:Ie,D:hr,V:vt,I:Lt,H:At,N:Be,U:ze,B:Pe,F:je},Mr=Ze.litHtmlPolyfillSupport;Mr?.(oe,Lt),(Ze.litHtmlVersions??=[]).push("3.2.1");var yr=(a,e,t)=>{let o=t?.renderBefore??e,n=o._$litPart$;if(n===void 0){let l=t?.renderBefore??null;o._$litPart$=n=new Lt(e.insertBefore(ee(),l),l,void 0,t??{})}return n._$AI(a),n};var at=class extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});var qr=globalThis.litElementPolyfillSupport;qr?.({LitElement:at});(globalThis.litElementVersions??=[]).push("4.1.1");var u=(n=>(n.primary="primary",n.secondary="secondary",n.surface="surface",n.plain="plain",n))(u||{}),b=class{static getStyle(e){return e?e=="plain"?s``:s` <style>
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
          </style>`:s``}static getOposite(e){return e=="plain"?"surface":e=="primary"||e=="primary"?"secondary":e=="secondary"?"primary":"plain"}getParentTheme(e){let t=e;for(;t!=null;){if(t.theme!=null)return t.theme;t=t.parentElement}}};var d=class extends at{};var m=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};var Gr={attribute:!0,type:String,converter:Nt,reflect:!1,hasChanged:Oe},Ur=(a=Gr,e,t)=>{let{kind:o,metadata:n}=t,l=globalThis.litPropertyMetadata.get(n);if(l===void 0&&globalThis.litPropertyMetadata.set(n,l=new Map),l.set(t.name,a),o==="accessor"){let{name:p}=t;return{set(f){let h=e.get.call(this);e.set.call(this,f),this.requestUpdate(p,h,a)},init(f){return f!==void 0&&this.P(p,void 0,a),f}}}if(o==="setter"){let{name:p}=t;return function(f){let h=this[p];e.call(this,f),this.requestUpdate(p,h,a)}}throw Error("Unsupported decorator location: "+o)};function i(a){return(e,t)=>typeof t=="object"?Ur(a,e,t):((o,n,l)=>{let p=n.hasOwnProperty(l);return n.constructor.createProperty(l,p?{...o,wrapped:!0}:o),p?Object.getOwnPropertyDescriptor(n,l):void 0})(a,e,t)}function $e(a){return i({...a,state:!0,attribute:!1})}var kt=(a,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(a,e,t),t);function g(a,e){return(t,o,n)=>{let l=p=>p.renderRoot?.querySelector(a)??null;if(e){let{get:p,set:f}=typeof o=="object"?t:n??(()=>{let h=Symbol();return{get(){return this[h]},set(v){this[h]=v}}})();return kt(t,o,{get(){let h=p.call(this);return h===void 0&&(h=l(this),(h!==null||this.hasUpdated)&&f.call(this,h)),h}})}return kt(t,o,{get(){return l(this)}})}}var W=class extends d{constructor(){super(...arguments);this.theme="surface";this.header="";this.opened=!1}render(){return s`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?s` <slot></slot>`:s``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=!this.opened,console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};W.styles=c`
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
  `,r([i({type:u,converter:String})],W.prototype,"theme",2),r([i({type:String})],W.prototype,"header",2),r([i({type:Boolean})],W.prototype,"opened",2),W=r([m("nidoca-accordion-item")],W);var H=class extends d{constructor(){super(...arguments);this.theme="plain";this.overline="";this.title="";this.summary="";this.text=""}render(){return s`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?s` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:s``}
        ${this.title?s` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:s``}
        ${this.summary?s`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:s``}
        ${this.text?s` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:s``}
        <slot></slot>
      </div>
    `}static example(t="",o="plain"){return s`<nidoca-article
      theme="${o}"
      slot="${t}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`}};H.styles=c`
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
  `,r([i({type:u,converter:String})],H.prototype,"theme",2),r([i({type:String})],H.prototype,"overline",2),r([i({type:String})],H.prototype,"title",2),r([i({type:String})],H.prototype,"summary",2),r([i({type:String})],H.prototype,"text",2),H=r([m("nidoca-article")],H);var br=(t=>(t.single="single",t.multi="multi",t))(br||{}),lt=class extends d{constructor(){super(...arguments);this.theme="plain";this.accordionType="single"}updated(t){super.updated(t),t.forEach((o,n)=>{if(n=="theme"&&this.accordionSlot!=null){let l=this.accordionSlot.assignedElements();for(let p=0;p<l.length;p++){let f=l[p];f instanceof W&&(f.theme=this.theme)}}})}render(){return s`
      ${b.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let o=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let n=this.accordionSlot.assignedElements();for(let l=0;l<n.length;l++){let p=n[l];p instanceof W&&p!=o&&(p.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return s`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${H.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${H.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${H.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${H.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};lt.styles=c`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,r([i({type:u,converter:String})],lt.prototype,"theme",2),r([i({type:br,converter:String})],lt.prototype,"accordionType",2),r([g("#accordionSlot")],lt.prototype,"accordionSlot",2),lt=r([m("nidoca-accordion")],lt);var j=class extends d{constructor(){super(...arguments);this.theme="primary";this.endpoint="";this.primaryTextField="";this.secondaryTextField="";this.tertiaryTextField="";this.infoTextField="";this.groupByField="";this.imgSrcField="";this.rightIcon="";this.data=[]}connectedCallback(){super.connectedCallback(),this.fetchData()}async fetchData(){if(this.endpoint)try{let t=await fetch(this.endpoint);if(!t.ok)throw new Error(`Failed to fetch data: ${t.status}`);this.data=await t.json()}catch(t){console.error("Error fetching data:",t)}}render(){if(!this.data.length)return s`<p>Loading data...</p>`;if(this.groupByField){let t=this.data.reduce((o,n)=>{let l=n[this.groupByField]||"UNBEKANNT";return o[l]||(o[l]=[]),o[l].push(n),o},{});return s`
            ${Object.keys(t).map(o=>{let n=t[o];return s`
                <nidoca-list-section theme="${this.theme}">${o}</nidoca-list-section>
                <nidoca-list theme="${this.theme}">
                  ${n.map(l=>s`
                    <nidoca-list-item
                      @click="${()=>this.itemClicked(l)}"
                      theme="${this.theme}"
                      primaryText="${l[this.primaryTextField]||""}"
                      secondaryText="${l[this.secondaryTextField]||""}"
                      tertiaryText="${l[this.tertiaryTextField]||""}"
                      infoText="${l[this.infoTextField]||""}"
                    >
                      <nidoca-img-round width="64px" width="64px" slot="left" src="${this.renderImg(l[this.primaryTextField]||"",l[this.imgSrcField])}"></nidoca-img-round>
                      <nidoca-icon slot="right" icon="${this.rightIcon}"></nidoca-icon>
                    </nidoca-list-item>
                  `)}
                </nidoca-list>
              `})}
          `}else return s`
            <nidoca-list theme="${this.theme}">
              ${this.data.map(t=>s`
                <nidoca-list-item
                  @click="${()=>this.itemClicked(t)}"
                  theme="${this.theme}"
                  primaryText="${t[this.primaryTextField]||""}"
                  secondaryText="${t[this.secondaryTextField]||""}"
                  tertiaryText="${t[this.tertiaryTextField]||""}"
                  infoText="${t[this.infoTextField]||""}"
                >
                  <nidoca-img-round width="64px" width="64px" slot="left" src="${this.imgSrcField}"></nidoca-img-round>
                  <nidoca-icon slot="right" icon="chevron_right"></nidoca-icon>
                </nidoca-list-item>
              `)}
            </nidoca-list>
          `}renderImg(t,o){return o==null||o==null||o==""?we.generateImageBase64(t,"#555555","#ffffff"):o}itemClicked(t){this.dispatchEvent(new CustomEvent("nidoca-event-nidoca-api-list-item-clicked",{detail:t,bubbles:!0,composed:!0}))}static example(t=""){return s`
          <nidoca-api-list 
            theme="primary"
            slot="${t}"
            endpoint="http://localhost:3000/recommended_actions"
            primaryTextField="action_title"
            rightIcon="chevron_right"
            secondaryTextField="action_description"
            infoTextField="action_energy"
            groupByField="goal_title"
            imgSrcField="action_image"
            groupByField="goal_title"
          >
          </nidoca-api-list>
        `}};r([i({type:u,converter:String})],j.prototype,"theme",2),r([i({type:String})],j.prototype,"endpoint",2),r([i({type:String})],j.prototype,"primaryTextField",2),r([i({type:String})],j.prototype,"secondaryTextField",2),r([i({type:String})],j.prototype,"tertiaryTextField",2),r([i({type:String})],j.prototype,"infoTextField",2),r([i({type:String})],j.prototype,"groupByField",2),r([i({type:String})],j.prototype,"imgSrcField",2),r([i({type:String})],j.prototype,"rightIcon",2),r([$e()],j.prototype,"data",2),j=r([m("nidoca-api-list")],j);var vr=(n=>(n.none="none",n.shadow_1="shadow_1",n.shadow_2="shadow_2",n.shadow_3="shadow_3",n))(vr||{}),Q=class extends d{constructor(){super(...arguments);this.theme="primary";this.shadowType="shadow_1";this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return s`
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
    `}async clicked(){if(this.clickable&&!this.deactivated){let t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}static example(t=""){return s`
      <nidoca-icon-extended
        slot="${t}"
        style="padding-left:var(--space)"
        clickable
        icon="home"
        title="Mein Icon"
      ></nidoca-icon-extended>
    `}};Q.styles=c`
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
  `,r([i({type:String})],Q.prototype,"theme",2),r([i({type:Object})],Q.prototype,"shadowType",2),r([i({type:String})],Q.prototype,"icon",2),r([i({type:Boolean})],Q.prototype,"clickable",2),r([i({type:Boolean})],Q.prototype,"deactivated",2),r([i({type:String})],Q.prototype,"title",2),Q=r([m("nidoca-icon-extended")],Q);var Ar=(n=>(n[n.current=0]="current",n[n.completed=1]="completed",n[n.open=2]="open",n[n.finish=3]="finish",n))(Ar||{}),q=class extends d{constructor(){super(...arguments);this.icon="";this.primaryText="";this.isLast=!1;this.first=!1}render(){return s`
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

          ${this.isLast?s``:s`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==1?"var(--app-color-text-primary)":t==0?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==3?"var(--app-color-success)":t==1?"var(--mdc-theme-on-primary)":t==0?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){let t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};q.styles=c`
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
  `,r([i({type:String})],q.prototype,"icon",2),r([i({type:String})],q.prototype,"primaryText",2),r([i({type:Number})],q.prototype,"state",2),r([i({type:Boolean})],q.prototype,"isLast",2),q=r([m("nidoca-wizard-step")],q);var Vt=class extends d{render(){return s`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){let t=e.target;if(t==null)return;let o=t.assignedElements(),n=0;for(let l=0;l<o.length;l++){let p=o[l];p instanceof q&&(p.index=l,p.state==0&&(n=l),p.index==o.length-1&&(p.isLast=!0))}this.changeState(n)}stepClicked(e){let t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){let t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){let n=t[o];n instanceof q&&n.index!==void 0&&(n.index<e?n.state=1:n.index==e?n.state=0:n.state=2)}}}};Vt.styles=c``,r([g("#wizardSlot")],Vt.prototype,"wizardSlot",2),Vt=r([m("nidoca-wizard")],Vt);var mt=class extends d{constructor(){super(...arguments);this.clickable=!0;this.theme="surface";this.text=""}render(){return s`
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
    `}static example(t=""){return s`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};mt.styles=c`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }
    .clickable {
      cursor: pointer;
    }
  `,r([i({type:Boolean})],mt.prototype,"clickable",2),r([i({type:u,converter:String})],mt.prototype,"theme",2),r([i({type:String})],mt.prototype,"text",2),mt=r([m("nidoca-chip")],mt);var wt=class extends d{constructor(){super(...arguments);this.code="";this.theme="plain"}render(){return s`
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
    `}static example(t=""){return s`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};wt.styles=c`
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
  `,r([i({type:String})],wt.prototype,"code",2),r([i({type:String})],wt.prototype,"theme",2),wt=r([m("nidoca-code")],wt);var Et=class extends d{constructor(){super();this.show=!1;addEventListener("click",t=>{let o=this.associatedElement?.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))})}render(){return this.show?s`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:s``}calculatePositionStyle(t){let o="";if(t){let n=t.getBoundingClientRect();n.right>window.innerWidth/2?o+=`right:${window.innerWidth-n.right}px;`:o+=`left:${n.left}px;`,n.top>window.innerHeight/2?o+=`bottom:${n.height+window.innerHeight-n.top}px;`:o+=`top:${n.bottom}px;`}return o}};Et.styles=c`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,r([i({type:Boolean})],Et.prototype,"show",2),r([i({type:Object})],Et.prototype,"associatedElement",2),Et=r([m("nidoca-elevation")],Et);var De=class{static{this.PROGRESS="PROGRESS"}static{this.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}},St=class extends d{constructor(){super(...arguments);this.progressType=De.PROGRESS}render(){return s` <style>
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

      <progress class="${this.progressType}"></progress>`}};St.styles=c``,r([i({type:u,converter:String})],St.prototype,"theme",2),r([i({type:De,converter:String})],St.prototype,"progressType",2),St=r([m("nidoca-progress")],St);var Ce=(o=>(o.contained="contained",o.outlined="outlined",o.text="text",o))(Ce||{}),rt=class extends d{constructor(){super(...arguments);this.theme="primary";this.buttonType="contained";this.icon="";this.text=""}render(){return s`
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
        ${this.icon?s`<nidoca-icon
              .clickable="${!1}"
              .icon="${this.icon}"
              style="padding-right:var(--space);"
            ></nidoca-icon>`:s``}

        <nidoca-text-button theme="${this.theme}"
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return s`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};rt.styles=c`
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
  `,r([i({type:u,converter:String})],rt.prototype,"theme",2),r([i({type:Ce,converter:String})],rt.prototype,"buttonType",2),r([i({type:String})],rt.prototype,"icon",2),r([i({type:String})],rt.prototype,"text",2),rt=r([m("nidoca-button")],rt);var kr=class{constructor(){this.key=""}},$=class extends d{};var wr=class{constructor(){this.formData=FormData.prototype}},Tt=class extends d{constructor(){super(...arguments);this.autocomplete=!0}render(){return s`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,o={};for(let l of this.getInputElements(this.slotElement)){let p=l.getOutputData();o[p.key]=p.value,t.append(p.key,p.value)}let n={};return n.jsonObject=o,n.formData=t,n}validate(){let t=!0;for(let o of this.getInputElements(this.slotElement))o.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let o=[],n=t.assignedElements({flatten:!0});for(let l=0;l<n.length;l++){let p=n[l];this.recursiveInputElementSearch(p,o)}return o}recursiveInputElementSearch(t,o){if(t instanceof $)o.push(t);else if(t.hasChildNodes()){let n=t.children;for(let l of[].slice.call(n))this.recursiveInputElementSearch(l,o)}}};Tt.styles=c`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,r([i({type:Boolean})],Tt.prototype,"autocomplete",2),r([g("#slotElement")],Tt.prototype,"slotElement",2),Tt=r([m("nidoca-form")],Tt);var Er={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Le=a=>(...e)=>({_$litDirective$:a,values:e}),Mt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Wr}=xr;var Sr=()=>document.createComment(""),qt=(a,e,t)=>{let o=a._$AA.parentNode,n=e===void 0?a._$AB:e._$AA;if(t===void 0){let l=o.insertBefore(Sr(),n),p=o.insertBefore(Sr(),n);t=new Wr(l,p,a,a.options)}else{let l=t._$AB.nextSibling,p=t._$AM,f=p!==a;if(f){let h;t._$AQ?.(a),t._$AM=a,t._$AP!==void 0&&(h=a._$AU)!==p._$AU&&t._$AP(h)}if(l!==n||f){let h=t._$AA;for(;h!==l;){let v=h.nextSibling;o.insertBefore(h,n),h=v}}}return t},ct=(a,e,t=a)=>(a._$AI(e,t),a),Qr={},Tr=(a,e=Qr)=>a._$AH=e,Hr=a=>a._$AH,Ve=a=>{a._$AP?.(!1,!0);let e=a._$AA,t=a._$AB.nextSibling;for(;e!==t;){let o=e.nextSibling;e.remove(),e=o}};var Or=(a,e,t)=>{let o=new Map;for(let n=e;n<=t;n++)o.set(a[n],n);return o},Gt=Le(class extends Mt{constructor(a){if(super(a),a.type!==Er.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,e,t){let o;t===void 0?t=e:e!==void 0&&(o=e);let n=[],l=[],p=0;for(let f of a)n[p]=o?o(f,p):p,l[p]=t(f,p),p++;return{values:l,keys:n}}render(a,e,t){return this.dt(a,e,t).values}update(a,[e,t,o]){let n=Hr(a),{values:l,keys:p}=this.dt(e,t,o);if(!Array.isArray(n))return this.ut=p,l;let f=this.ut??=[],h=[],v,E,x=0,w=n.length-1,y=0,O=l.length-1;for(;x<=w&&y<=O;)if(n[x]===null)x++;else if(n[w]===null)w--;else if(f[x]===p[y])h[y]=ct(n[x],l[y]),x++,y++;else if(f[w]===p[O])h[O]=ct(n[w],l[O]),w--,O--;else if(f[x]===p[O])h[O]=ct(n[x],l[O]),qt(a,h[O+1],n[x]),x++,O--;else if(f[w]===p[y])h[y]=ct(n[w],l[y]),qt(a,n[x],n[w]),w--,y++;else if(v===void 0&&(v=Or(p,y,O),E=Or(f,x,w)),v.has(f[x]))if(v.has(f[w])){let N=E.get(p[y]),Qe=N!==void 0?n[N]:null;if(Qe===null){let tr=qt(a,n[x]);ct(tr,l[y]),h[y]=tr}else h[y]=ct(Qe,l[y]),qt(a,n[x],Qe),n[N]=null;y++}else Ve(n[w]),w--;else Ve(n[x]),x++;for(;y<=O;){let N=qt(a,h[O+1]);ct(N,l[y]),h[y++]=N}for(;x<=w;){let N=n[x++];N!==null&&Ve(N)}return this.ut=p,Tr(a,h),M}});var Kr={},ne=Le(class extends Mt{constructor(){super(...arguments),this.ot=Kr}render(a,e){return e()}update(a,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((o,n)=>o===this.ot[n]))return M}else if(this.ot===e)return M;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var R=class extends ${constructor(){super(...arguments);this.theme="surface";this.trailingIcon="";this.label="";this.errorText="";this.infoText="";this.warningText="";this.value="";this.options=[];this.name="";this.required=!0;this.multiple=!1;this.size=1}render(){return s` <style>
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
        ${this.trailingIcon?s` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:s``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${ne([this.value,this.options],()=>s`
                ${Gt(this.options,t=>t==null?s` <option></option>`:this.isSelectedOption(t)?s` <option value="${t.key}" selected>${t.value}</option> `:s` <option value="${t.key}">${t.value}</option> `)}
              `)}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?s`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?s` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:s``}
              ${this.warningText?s` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:s``}
              ${this.errorText?s` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:s``}
            </div>
          `:s``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let o=0,n=this.selectElement.options.length;o<n;o++)this.selectElement.options[o].selected&&t.push(this.options[o].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let o=!1;for(let n of this.value)if(o=t.key===n,o)return!0}return this.value===t.key}static enumToOptions(t,o=!0){let n=[];return o&&n.push({key:"",value:""}),Object.keys(t).forEach(l=>{n.push({key:l,value:t[l]})}),n}static stringArrayToOptions(t,o=!0){let n=[];return o&&n.push({key:"",value:""}),t.forEach(l=>{n.push({key:l,value:l})}),n}static toComboboxOptions(t=null,o=null){if(t==null)return[];let n=[];return Object.values(t).forEach(l=>{let p=String(Object.keys(t)[Object.values(t).indexOf(l)]);o&&(p=p.concat(o)),n.push({key:l,value:p})}),n}};R.styles=c`
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
  `,r([i({type:u,converter:String})],R.prototype,"theme",2),r([i({type:String})],R.prototype,"trailingIcon",2),r([i({type:String})],R.prototype,"label",2),r([i({type:String})],R.prototype,"errorText",2),r([i({type:String})],R.prototype,"infoText",2),r([i({type:String})],R.prototype,"warningText",2),r([i()],R.prototype,"value",2),r([i({type:Array})],R.prototype,"options",2),r([i({type:String})],R.prototype,"name",2),r([i({type:Boolean})],R.prototype,"required",2),r([i({type:Boolean})],R.prototype,"multiple",2),r([i({type:Number})],R.prototype,"size",2),r([g("#selectElement")],R.prototype,"selectElement",2),R=r([m("nidoca-form-combobox")],R);var T=a=>a??S;var ot=(y=>(y.color="color",y.email="email",y.hidden="hidden",y.number="number",y.password="password",y.tel="tel",y.text="text",y.search="search",y.url="url",y.date="date",y.month="month",y.time="time",y.week="week",y))(ot||{}),k=class extends ${constructor(){super(...arguments);this.type="text";this.label="";this.placeholder="";this.trailingIcon="";this.errorText="";this.infoText="";this.warningText="";this.name="";this.value="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="surface"}render(){return this.type=="hidden"?s`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:s` <style>
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
            ${this.trailingIcon?s` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:s``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${T(this.size)}"
                minlength="${T(this.minlength)}"
                maxlength="${T(this.maxlength)}"
                pattern="${T(this.pattern)}"
                min="${T(this.min)}"
                max="${T(this.max)}"
                step="${T(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?s`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?s` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:s``}
                  ${this.warningText?s` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:s``}
                  ${this.errorText?s` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:s``}
                </div>
              `:s``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t?.trim()}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),this.errorText==""}};k.styles=c`
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
  `,r([i({type:ot,converter:String})],k.prototype,"type",2),r([i({type:String})],k.prototype,"label",2),r([i({type:String})],k.prototype,"placeholder",2),r([i({type:String})],k.prototype,"trailingIcon",2),r([i({type:String})],k.prototype,"errorText",2),r([i({type:String})],k.prototype,"infoText",2),r([i({type:String})],k.prototype,"warningText",2),r([i({type:String})],k.prototype,"name",2),r([i()],k.prototype,"value",2),r([i({type:Boolean})],k.prototype,"required",2),r([i({type:Boolean})],k.prototype,"disabled",2),r([i({type:Boolean})],k.prototype,"checked",2),r([i({type:Number})],k.prototype,"maxlength",2),r([i({type:Number})],k.prototype,"minlength",2),r([i({type:Number})],k.prototype,"min",2),r([i({type:Number})],k.prototype,"max",2),r([i({type:String})],k.prototype,"step",2),r([i({type:Number})],k.prototype,"size",2),r([i({type:String})],k.prototype,"pattern",2),r([g("#inputElement")],k.prototype,"inputElement",2),r([i({type:u,converter:String})],k.prototype,"theme",2),k=r([m("nidoca-form-text")],k);var Me=class extends k{constructor(){super(),this.type="date"}};Me=r([m("nidoca-form-date")],Me);var P=class extends ${constructor(){super(...arguments);this.theme="surface";this.infoText="";this.warningText="";this.errorText="";this.name="";this.value="";this.label="";this.required=!1;this.placeholder="";this.disabled=!1;this.rows=5}render(){return s` <style>
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

      ${this.infoText||this.warningText||this.errorText?s`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?s` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:s``}
              ${this.warningText?s` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:s``}
              ${this.errorText?s` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:s``}
            </div>
          `:s``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};P.styles=c`
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
  `,r([i({type:u,converter:String})],P.prototype,"theme",2),r([i({type:String})],P.prototype,"infoText",2),r([i({type:String})],P.prototype,"warningText",2),r([i({type:String})],P.prototype,"errorText",2),r([i({type:String})],P.prototype,"name",2),r([i()],P.prototype,"value",2),r([i({type:String})],P.prototype,"label",2),r([i({type:Boolean})],P.prototype,"required",2),r([i({type:String})],P.prototype,"placeholder",2),r([i({type:Boolean})],P.prototype,"disabled",2),r([i({type:Number})],P.prototype,"rows",2),r([g("#inputElement")],P.prototype,"inputElement",2),P=r([m("nidoca-form-textarea")],P);var Ht=class extends ${constructor(){super(...arguments);this.theme="primary"}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return s`
      <nidoca-box theme="${T(this.theme)}">
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
    `}upload(){this.inputElement?.click()}};Ht.styles=c`
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
  `,r([i({type:u,converter:String})],Ht.prototype,"theme",2),r([g("#inputElement")],Ht.prototype,"inputElement",2),Ht=r([m("nidoca-form-upload")],Ht);var z=class extends ${constructor(){super();this.name="";this.label="";this.infoText="";this.errorText="";this.warningText="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="primary";this.theme=b.prototype.getParentTheme(this)||"plain"}render(){return s`
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

        ${this.infoText.length>0?s` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:s``}

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

      ${this.warningText?s` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:s``}
      ${this.errorText?s` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:s``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};z.styles=c`
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
  `,r([i({type:String})],z.prototype,"name",2),r([i({type:String})],z.prototype,"label",2),r([i({type:String})],z.prototype,"infoText",2),r([i({type:String})],z.prototype,"errorText",2),r([i({type:String})],z.prototype,"warningText",2),r([i({type:Boolean})],z.prototype,"required",2),r([i({type:Boolean})],z.prototype,"disabled",2),r([i({type:Boolean})],z.prototype,"checked",2),r([i({type:String})],z.prototype,"theme",2),r([g("#inputElement")],z.prototype,"inputElement",2),z=r([m("nidoca-form-switch")],z);var Z=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Newsletter";this.emailLabel="Deine Emailadresse";this.buttonLabel="Registrieren"}render(){return s`
      <nidoca-box theme="${T(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${b.getOposite(this.theme)}"
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
            theme="${b.getOposite(this.theme)}"
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
  `,r([i({type:u,converter:String})],Z.prototype,"theme",2),r([i({type:String,converter:String})],Z.prototype,"label",2),r([i({type:String,converter:String})],Z.prototype,"emailLabel",2),r([i({type:String,converter:String})],Z.prototype,"buttonLabel",2),r([g("#form")],Z.prototype,"formComponent",2),Z=r([m("nidoca-form-newsletter")],Z);var J=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Passwort zur\xFCcksetzen";this.emailLabel="Deine Emailadresse";this.buttonLabel="Zur\xFCcksetzen"}render(){return s`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${b.getOposite(this.theme)}"
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
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};J.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:u,converter:String})],J.prototype,"theme",2),r([i({type:String,converter:String})],J.prototype,"label",2),r([i({type:String,converter:String})],J.prototype,"emailLabel",2),r([i({type:String,converter:String})],J.prototype,"buttonLabel",2),r([g("#form")],J.prototype,"formComponent",2),J=r([m("nidoca-form-reset-password")],J);var B=class extends d{constructor(){super(...arguments);this.theme="surface";this.label="Passwort \xE4ndern";this.oldPasswordLabel="Altes Passwort";this.newPasswordLabel="Neues Passwort";this.repeatNewPasswordLabel="Wiederholen";this.buttonLabel="\xC4ndern";this.showErrorMessageSamePassword=!1;this.errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";this.showErrorMessagePasswordDiff=!1;this.errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein"}render(){return s`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?s` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:s``}
        ${this.showErrorMessagePasswordDiff?s` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:s``}
      </nidoca-box>
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};B.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:u,converter:String})],B.prototype,"theme",2),r([i({type:String,converter:String})],B.prototype,"label",2),r([i({type:String,converter:String})],B.prototype,"oldPasswordLabel",2),r([i({type:String,converter:String})],B.prototype,"newPasswordLabel",2),r([i({type:String,converter:String})],B.prototype,"repeatNewPasswordLabel",2),r([i({type:String,converter:String})],B.prototype,"buttonLabel",2),r([g("#form")],B.prototype,"formComponent",2),r([g("#oldPassword")],B.prototype,"oldPasswordInputField",2),r([g("#newPassword")],B.prototype,"newPasswordInputField",2),r([g("#repeatNewPassword")],B.prototype,"repeatNewPasswordInputField",2),r([i()],B.prototype,"errorMessageSamePasswordLabel",2),r([i()],B.prototype,"errorMessagePasswordDiffLabel",2),B=r([m("nidoca-form-change-password")],B);var K=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Registrieren";this.emailLabel="Email";this.passwordLabel="Passwort";this.buttonLabel="Registrieren"}render(){return s`
      <nidoca-box theme="${T(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${b.getOposite(this.theme)}"
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
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};K.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:u,converter:String})],K.prototype,"theme",2),r([i({type:String,converter:String})],K.prototype,"label",2),r([i({type:String,converter:String})],K.prototype,"emailLabel",2),r([i({type:String,converter:String})],K.prototype,"passwordLabel",2),r([i({type:String,converter:String})],K.prototype,"buttonLabel",2),r([g("#form")],K.prototype,"formComponent",2),K=r([m("nidoca-form-register")],K);var Ut=class extends d{constructor(){super(...arguments);this.code=""}render(){return s``}};Ut.styles=c``,r([i({type:String})],Ut.prototype,"code",2),Ut=r([m("nidoca-upload")],Ut);var Ot=class extends d{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return s`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};Ot.styles=c`
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
  `,r([i({type:u,converter:String})],Ot.prototype,"theme",2),r([i({type:String,converter:String})],Ot.prototype,"text",2),Ot=r([m("nidoca-hr")],Ot);var Rt=class extends d{constructor(){super(...arguments);this.text="";this.icon=""}render(){return s`
      <div class="container">
        ${this.icon?s` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:s``}
        ${this.text?s` <nidoca-text-button>${this.text}</nidoca-text-button>`:s``}
        <slot></slot>
      </div>
    `}static example(t=""){return s`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};Rt.styles=c`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,r([i({type:String})],Rt.prototype,"text",2),r([i({type:String})],Rt.prototype,"icon",2),Rt=r([m("nidoca-menu-area")],Rt);var G=class extends d{constructor(){super(...arguments);this.text="";this.icon="";this.selected=!1;this.theme="surface"}render(){return s`
      <style>
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?s` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:s``}
        ${this.text?s` <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>`:s``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return s`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};G.styles=c`
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
  `,r([i({type:String})],G.prototype,"text",2),r([i({type:String})],G.prototype,"icon",2),r([i({type:Boolean})],G.prototype,"selected",2),r([i({type:String})],G.prototype,"theme",2),G=r([m("nidoca-menu-item")],G);var It=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return s` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((o,n)=>{if(n=="theme"&&this.slotElement!=null){let l=this.slotElement.assignedElements();for(let p=0;p<l.length;p++){let f=l[p];f instanceof G&&(f.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let n=0;n<o.length;n++){let l=o[n];if(l instanceof G){let p=l.getBoundingClientRect();p.left<t.x&&p.right>t.x&&(p.top<t.y&&p.bottom>t.y?l.selected=!0:l.selected=!1)}}}})}static example(t=""){return s`
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
  `,r([i({type:String})],It.prototype,"theme",2),r([g("#slotElement")],It.prototype,"slotElement",2),It=r([m("nidoca-menu")],It);var Y=class extends d{constructor(){super(...arguments);this.height="auto";this.width="auto";this.left="auto";this.top="auto";this.right="auto";this.bottom="auto"}render(){return s`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,o,n,l,p,f){return"height:".concat(t).concat(";").concat("width:").concat(o).concat(";").concat("left:").concat(n).concat(";").concat("right:").concat(l).concat(";").concat("top:").concat(p).concat(";").concat("bottom:").concat(f).concat(";")}};Y.styles=c`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,r([i({type:String})],Y.prototype,"height",2),r([i({type:String})],Y.prototype,"width",2),r([i({type:String})],Y.prototype,"left",2),r([i({type:String})],Y.prototype,"top",2),r([i({type:String})],Y.prototype,"right",2),r([i({type:String})],Y.prototype,"bottom",2),Y=r([m("nidoca-layout-floating")],Y);var Wt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return s`
      ${b.getStyle(this.theme)}
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
  `,r([i({type:String})],Wt.prototype,"theme",2),Wt=r([m("nidoca-container")],Wt);var Pt=class extends d{constructor(){super();this.hideSidebox=!0;this.theme=b.prototype.getParentTheme(this)||"plain"}render(){return s` <style>
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
      ${this.hideSidebox?s``:s` <slot class="sidebox" name="sidebox"></slot>`}`}};Pt.styles=c`
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
  `,r([i({type:u,converter:String})],Pt.prototype,"theme",2),r([i({type:Boolean,converter:String})],Pt.prototype,"hideSidebox",2),Pt=r([m("nidoca-split-screen")],Pt);var U=class extends d{constructor(){super(...arguments);this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return s`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.title}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}async clicked(){if(this.clickable&&!this.deactivated){let t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}static example(t=""){return s`
      <nidoca-icon
        slot="${t}"
        style="padding-left:var(--space)"
        clickable
        icon="menu"
        title="Mein Icon"
      ></nidoca-icon>
    `}};U.styles=c`
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
  `,r([i({type:String})],U.prototype,"icon",2),r([i({type:Boolean})],U.prototype,"clickable",2),r([i({type:Boolean})],U.prototype,"deactivated",2),r([i({type:String})],U.prototype,"title",2),U=r([m("nidoca-icon")],U);var Qt=class extends d{render(){return s`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(this.rippleContainerElement!=null){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);let t=this.rippleContainerElement.getBoundingClientRect(),o=Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};Qt.styles=c`
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
  `,r([g("#rippleContainer")],Qt.prototype,"rippleContainerElement",2),Qt=r([m("nidoca-ripple")],Qt);var D=class extends d{constructor(){super(...arguments);this.src="";this.width="auto";this.height="auto";this.zoom=!1}render(){return this.src?s`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:s``}static exampleImage(){return"data:image/jpeg;base64,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"}static example(t=""){return s`<nidoca-img width="64px" width="64px" slot="${t}" src="${this.exampleImage()} "></nidoca-img>`}};D.styles=c`
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
  `,r([i({type:String})],D.prototype,"src",2),r([i({type:String})],D.prototype,"width",2),r([i({type:String})],D.prototype,"height",2),r([i({type:Boolean})],D.prototype,"zoom",2),D=r([m("nidoca-img")],D);var Bt=class extends D{static example(e=""){return s`<nidoca-img-round width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img-round>`}};Bt.styles=c`
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
  `,Bt=r([m("nidoca-img-round")],Bt);var zt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return s`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:s``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let o=t.target;if(o==null)return;let n=o.assignedElements();for(let l=0;l<n.length;l++){let p=n[l];if(p instanceof D){this.selected==null&&l==0&&(this.selected=p.cloneNode(!0)),p.addEventListener("click",h=>{h.target&&(this.selected=h.target.cloneNode(!0))}),p.width="148px";let f=p.classList;f.contains("img")||f.add("img")}}}};zt.styles=c`
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
  `,r([i({type:u,converter:String})],zt.prototype,"theme",2),r([$e()],zt.prototype,"selected",2),zt=r([m("nidoca-img-slider")],zt);var Kt=class extends d{constructor(){super(...arguments);this.src=""}render(){return s`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Kt.styles=c``,r([i({type:String})],Kt.prototype,"src",2),Kt=r([m("nidoca-movie")],Kt);var C=class extends d{constructor(){super(...arguments);this.label="";this.placeholder="";this.name="";this.min=1;this.max=10;this.errorText="";this.numberOne=1;this.numberTwo=1}render(){return s`
      <nidoca-form-text
        theme="${T(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${"number"}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,o){return Math.random()*(o-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};C.styles=c`
    :host {
      display: block;
      width: 100%;
    }
  `,r([i({type:u,converter:String})],C.prototype,"theme",2),r([i({type:String})],C.prototype,"label",2),r([i({type:String})],C.prototype,"placeholder",2),r([i({type:String})],C.prototype,"name",2),r([i({type:Number})],C.prototype,"min",2),r([i({type:Number})],C.prototype,"max",2),r([i({type:String})],C.prototype,"errorText",2),r([g("#inputfield")],C.prototype,"inputfield",2),C=r([m("nidoca-form-captcha")],C);var pt=class extends d{constructor(){super(...arguments);this.text="";this.href="";this.targetType="_self"}render(){return s`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};pt.styles=c`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,r([i({type:String})],pt.prototype,"text",2),r([i({type:String})],pt.prototype,"href",2),r([i({type:String})],pt.prototype,"targetType",2),pt=r([m("nidoca-link")],pt);var I=class extends d{constructor(){super(...arguments);this.theme="surface";this.primaryText="";this.secondaryText="";this.tertiaryText="";this.infoText="";this.selected=!1}render(){return s`
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
          ${this.primaryText?s` <nidoca-text-body theme="${this.theme}" class="item">${this.primaryText} </nidoca-text-body>`:s``}
          <slot></slot>
          ${this.secondaryText?s` <nidoca-text-subtitle theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-subtitle>`:s``}
          <slot name="secondary"></slot>

          ${this.tertiaryText?s` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.tertiaryText}
              </nidoca-text-caption>`:s``}
          <slot name="tertiary"></slot>
        </div>
         ${this.infoText?s` <nidoca-text-button theme="${this.theme}" class="item right"
                >${this.infoText}
              </nidoca-text-button>`:s`<slot name="info"></slot>`}
        <slot name="right" class="item right"></slot>
      </div>
    `}switchSelected(){this.selected=!this.selected,this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this.selected,bubbles:!0,composed:!0}))}static example(t=""){return s`<nidoca-list-item
      theme="primary"
      slot="${t}"
      primaryText="List Item"
      secondaryText="List Item Secondary Text"
    >
      ${Bt.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};I.styles=c`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: min-content 1fr min-content min-content;
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
  `,r([i({type:u,converter:String})],I.prototype,"theme",2),r([i({type:String})],I.prototype,"primaryText",2),r([i({type:String})],I.prototype,"secondaryText",2),r([i({type:String})],I.prototype,"tertiaryText",2),r([i({type:String})],I.prototype,"infoText",2),r([i({type:Boolean})],I.prototype,"selected",2),I=r([m("nidoca-list-item")],I);var nt=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return s`
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
    `}static example(){return s`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};nt.styles=c`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,r([i({type:u,converter:String})],nt.prototype,"theme",2),r([i({type:String})],nt.prototype,"text",2),nt=r([m("nidoca-list-section")],nt);var dt=class extends d{constructor(){super(...arguments);this.theme="surface";this.multiselect=!1}updated(t){super.updated(t),t.forEach((o,n)=>{n=="theme"&&this.getItems().forEach(l=>{l.theme=this.theme})})}render(){return s`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let o=t.target;o.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let n=0;n<o.length;n++){let l=o[n];l instanceof I&&t.push(l)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let n=0;n<o.length;n++){let l=o[n];l instanceof I&&l.selected&&t.push(l)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements(),n=0;for(let l=0;l<o.length;l++){let p=o[l];p instanceof I&&(p.selected&&t.push(n),n++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return s`<nidoca-list theme="primary">
      ${nt.example()} ${I.example()} ${I.example()} ${I.example()}
    </nidoca-list>`}};dt.styles=c`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,r([i({type:u,converter:String})],dt.prototype,"theme",2),r([i({type:Boolean})],dt.prototype,"multiselect",2),r([g("#slotElement")],dt.prototype,"slotElement",2),dt=r([m("nidoca-list")],dt);var jt=class extends d{constructor(){super(...arguments);this.theme="primary";this.prominent=!1}render(){return s`
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
      ${this.prominent?s` <slot class="prominent" name="prominent"></slot>`:s``}
    `}static example(t=""){return s`
      <nidoca-top-app-bar slot="${t}" style="min-height: 48px;" theme="primary" prominent>
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>
        <nidoca-search-bar theme="primary" slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>
    `}};jt.styles=c`
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
  `,r([i({type:String,converter:String})],jt.prototype,"theme",2),r([i({type:Boolean})],jt.prototype,"prominent",2),jt=r([m("nidoca-top-app-bar")],jt);var ht=class extends d{constructor(){super(...arguments);this.headers=["column 1","column 2"];this.rows=[["row 1",new U],["row 2",new U]];this.theme="plain"}render(){return s`
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
            ${ne([this.headers],()=>s` ${Gt(this.headers,t=>s` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${ne([this.rows],()=>s`
                  ${Gt(this.rows,t=>s`
                        <tr>
                          ${Gt(t,o=>s` <td colspan="1" rowspan="1">${o}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};ht.styles=c`
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
  `,r([i({type:Array})],ht.prototype,"headers",2),r([i({type:Array})],ht.prototype,"rows",2),r([i({type:u,converter:String})],ht.prototype,"theme",2),ht=r([m("nidoca-table")],ht);var ut=class extends d{constructor(){super(...arguments);this.selected=!1}render(){return this.selected?s` <slot></slot>`:s``}};ut.styles=c`
    :host,
    slot {
      display: block;
    }
  `,r([i({type:Boolean})],ut.prototype,"selected",2),ut=r([m("nidoca-tab-content")],ut);var X=class extends d{constructor(){super(...arguments);this.selected=!1;this.text="";this.theme="surface"}render(){return s`
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
        ${this.text?s` <nidoca-text text="${this.text}"></nidoca-text> `:s``}
        <slot></slot>
      </div>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};X.styles=c`
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
  `,r([i({type:Boolean})],X.prototype,"selected",2),r([i({type:String})],X.prototype,"text",2),r([i({type:String})],X.prototype,"theme",2),X=r([m("nidoca-tab")],X);var it=class extends d{constructor(){super(...arguments);this.theme="surface";this.tabIndex=0}render(){return s`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),n=100/t.length,l=t[this.tabIndex];for(let p=0;p<t.length;p++){let f=t[p];f instanceof X&&(f.theme=this.theme,f.style.width=String(n).concat("%"),f==l?(f.selected=!0,f.classList.add("SELECTED")):(f.selected=!1,f.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let o=this.tabContentSlot.assignedElements();for(let n=0;n<o.length;n++){let l=o[n];l instanceof ut&&(this.tabIndex==t?l.selected=!0:l.selected=!1,t++)}}}tabClicked(t){let o=t.detail;this.changeTabIndex(o)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let o=this.tabSlot.assignedElements();for(let n=0;n<o.length;n++){let l=o[n];if(l instanceof X&&l==t){this.tabIndex=n;break}}}}static example(t=""){return s`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${H.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${H.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${H.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};it.styles=c`
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
  `,r([g("#tabSlot")],it.prototype,"tabSlot",2),r([g("#tabContentSlot")],it.prototype,"tabContentSlot",2),r([i({type:String})],it.prototype,"theme",2),r([i({type:Number})],it.prototype,"tabIndex",2),it=r([m("nidoca-tabs")],it);var ft=class extends d{constructor(){super();this.hideLeft=!0;this.prominent=!1;document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let o=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-o.width}})}render(){return s`
      <slot
        id="left"
        @nidoca-event-menu-item-clicked="${()=>{641>window.innerWidth&&(this.hideLeft=!0)}}"
        class="${this.hideLeft?"hideLeft":""}"
        name="left"
      >
      </slot>

      <div class="right">
        <nidoca-top-app-bar theme="primary" .prominent="${this.prominent}">
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
        <slot name="content"></slot>
      </div>
    `}};ft.styles=c`
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
  `,r([i({type:Boolean})],ft.prototype,"hideLeft",2),r([i({type:Boolean})],ft.prototype,"prominent",2),r([g("#left")],ft.prototype,"leftElement",2),ft=r([m("nidoca-template")],ft);var gt=class extends d{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{this.videoElement&&(this.videoElement.srcObject=t)})}render(){return s`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};gt.styles=c``,r([g("#video")],gt.prototype,"videoElement",2),r([g("#canvas")],gt.prototype,"canvasElement",2),r([g("#click-photo")],gt.prototype,"buttonElement",2),gt=r([m("nidoca-video")],gt);var $t=class extends d{constructor(){super(...arguments);this.src="";this.canvasElements=[];this.storeCanvasElements=[]}render(){return s`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>s`${t}`)}
    `}updated(t){super.updated(t),t.forEach((o,n)=>{if(console.debug(`${this.tagName} : property ${String(n)} changed. oldValue: ${o}`),n=="src"){this.convert();let l=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let o=document.createElement("canvas");o.width=t[0],o.height=t[1];let n=o.getContext("2d");n&&this.img&&(this.img.crossOrigin="anonymous",n.drawImage(this.img,0,0,t[0],t[1]),o.toBlob(l=>{},"image/webp")),this.canvasElements.push(o)}),this.requestUpdate()})}};$t.styles=c``,r([i({type:String})],$t.prototype,"src",2),r([g("#img")],$t.prototype,"img",2),$t=r([m("nidoca-svg-2-webp")],$t);var A=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return s`<style>
        slot {
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}static example(t=""){return s`
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
    `}};A.styles=c`
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
  `,r([i({type:u,converter:String})],A.prototype,"theme",2),r([i({type:String})],A.prototype,"text",2),A=r([m("nidoca-text")],A);var ie=class extends A{render(){return s` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ie.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 450;
      font-size: 105%;
    }
  `,ie=r([m("nidoca-text-body")],ie);var se=class extends A{render(){return s`${super.render()}`}};se.styles=c`
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
  `,se=r([m("nidoca-text-button")],se);var ae=class extends A{};ae.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,ae=r([m("nidoca-text-overline")],ae);var le=class extends A{render(){return s` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};le.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 100%;
    }
  `,le=r([m("nidoca-text-subtitle")],le);var L=class extends A{render(){return s`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};L.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 350;
      line-height: 1.25em;
      font-size: 95%;
    }
  `,L=r([m("nidoca-text-caption")],L);var qe=class extends L{render(){return s`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};qe=r([m("nidoca-text-error")],qe);var Ge=class extends L{render(){return s`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ge=r([m("nidoca-text-success")],Ge);var Ue=class extends L{render(){return s`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ue=r([m("nidoca-text-warning")],Ue);var We=class extends L{render(){return s`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};We=r([m("nidoca-text-info")],We);var me=class extends A{};me.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,me=r([m("nidoca-text-h1")],me);var ce=class extends A{};ce.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `,ce=r([m("nidoca-text-h2")],ce);var pe=class extends A{};pe.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,pe=r([m("nidoca-text-h3")],pe);var de=class extends A{};de.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,de=r([m("nidoca-text-h4")],de);var he=class extends A{};he.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,he=r([m("nidoca-text-h5")],he);var ue=class extends A{};ue.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,ue=r([m("nidoca-text-h6")],ue);var F=class extends d{constructor(){super(...arguments);this.value="";this.placeholder="";this.disabled=!1;this.theme="surface"}render(){return s`
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
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",o=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",o.type,JSON.stringify(o.detail)),this.dispatchEvent(o)}static example(t=""){return s`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};F.styles=c`
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
  `,r([i({type:String})],F.prototype,"value",2),r([i({type:String})],F.prototype,"placeholder",2),r([i({type:Boolean})],F.prototype,"disabled",2),r([g("#inputElement")],F.prototype,"inputElement",2),r([i({type:u,converter:String})],F.prototype,"theme",2),F=r([m("nidoca-search-bar")],F);var fe=class{static{this.CENTER="CENTER"}static{this.LEFT="LEFT"}static{this.RIGHT="RIGHT"}static{this.TOP="TOP"}static{this.BOTTOM="BOTTOM"}static{this.SLIDE_CENTER="SLIDE_CENTER"}static{this.SLIDE_LEFT="SLIDE_LEFT"}static{this.SLIDE_RIGHT="SLIDE_RIGHT"}static{this.SLIDE_TOP="SLIDE_TOP"}static{this.SLIDE_BOTTOM="SLIDE_BOTTOM"}},Dt=class extends d{constructor(){super(...arguments);this.transitionType=fe.CENTER;this.duration=.5}render(){return s` <div class="${T(this.transitionType)}"><slot></slot></div> `}};Dt.styles=c`
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
  `,r([i({type:String})],Dt.prototype,"transitionType",2),r([i({type:Number})],Dt.prototype,"duration",2),Dt=r([m("nidoca-transition")],Dt);var Yt=class extends d{constructor(){super(...arguments);this.show=!1}render(){return this.show?s`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${fe.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:s``}};Yt.styles=c`
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
  `,r([i({type:Boolean})],Yt.prototype,"show",2),Yt=r([m("nidoca-dialog")],Yt);var _=class extends d{constructor(){super(...arguments);this.show=!1;this.title="Ja oder Nein ?";this.description="Entscheide dich";this.labelButtonYes="Ja";this.labelButtonNo="Nein"}render(){return s`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};_.styles=c``,r([i({type:Boolean})],_.prototype,"show",2),r([i({type:String})],_.prototype,"title",2),r([i({type:String})],_.prototype,"description",2),r([i({type:String})],_.prototype,"labelButtonYes",2),r([i({type:String})],_.prototype,"labelButtonNo",2),_=r([m("nidoca-dialog-decision")],_);var Xt=class extends d{constructor(){super(...arguments);this.icon=""}render(){return s`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `}static example(t="",o="surface"){return s`
      <nidoca-infobox slot="${t}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${o}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${o}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `}};Xt.styles=c`
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
  `,r([i({type:String})],Xt.prototype,"icon",2),Xt=r([m("nidoca-infobox")],Xt);var st=class extends d{constructor(){super(...arguments);this.theme="surface";this.src="";this.title="";this.subtitle=""}render(){return s`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.src}"></nidoca-img-round>
                <div style="padding: var(--space);">
                <nidoca-text-body style="text-align:center;" theme="${this.theme}">${this.title}</nidoca-text-body>
                <nidoca-text-caption style="text-align:center;" theme="${this.theme}">${this.subtitle}</nidoca-text-caption>

  </div>
            </div>
            </div>`}static example(t=""){return s`<nidoca-avatar
      width="64px"
      width="64px"
      slot="${t}"
      title="Dominik Bruhn"
      subtitle="Softwareentwickler"
      src="face.jpg"
      >Dominik Bruhn</nidoca-avatar
    >`}};st.styles=c`
    :host {
      display: block;
    }
  `,r([i({type:u,converter:String})],st.prototype,"theme",2),r([i({type:String})],st.prototype,"src",2),r([i({type:String})],st.prototype,"title",2),r([i({type:String})],st.prototype,"subtitle",2),st=r([m("nidoca-avatar")],st);var Zt=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return s`
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
  `,r([i({type:u,converter:String})],Zt.prototype,"theme",2),Zt=r([m("nidoca-card")],Zt);var ge=class extends d{render(){return s`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){let t=e.target;if(t==null)return;let o=t.assignedElements();for(let n=0;n<o.length;n++){let p=o[n].classList;p.contains("flexItem")||p.add("flexItem"),p.contains("flexItemDevice")||p.add("flexItemDevice")}}};ge.styles=c`
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
  `,ge=r([m("nidoca-gallery")],ge);var xe=class extends d{render(){return s`<slot></slot>`}print(){let e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};xe.styles=c`
    :host {
      display: none;
    }
  `,xe=r([m("nidoca-print")],xe);var ye=class extends d{render(){return s`
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){let o=e.target.assignedElements(),n=o.length;for(let l=0;l<n;l++){let f=o[l].classList,h="item_count_"+n;f.contains(h)||f.add(h)}}};ye.styles=c`
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
  `,ye=r([m("nidoca-section")],ye);var be=class extends d{render(){return s` <slot></slot>`}};be.styles=c`
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
  `,be=r([m("nidoca-dashboard")],be);var ve=class extends d{render(){return s` <slot></slot>`}};ve.styles=c`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,ve=r([m("nidoca-dashboard-box-25")],ve);var Ae=class extends d{render(){return s` <slot></slot>`}};Ae.styles=c`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,Ae=r([m("nidoca-dashboard-box-50")],Ae);var ke=class extends d{render(){return s` <slot></slot>`}};ke.styles=c`
    :host {
      width: 100%;
      display: block;
    }
  `,ke=r([m("nidoca-dashboard-box-100")],ke);var Ct=class extends d{constructor(){super(...arguments);this.clickable=!0;this.title=""}render(){return s`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ct.styles=c`
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
  `,r([i({type:Boolean})],Ct.prototype,"clickable",2),r([i({type:String})],Ct.prototype,"title",2),Ct=r([m("nidoca-dashboard-card")],Ct);var Jt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return s`
      ${b.getStyle(this.theme)}
      <slot></slot>
    `}};Jt.styles=c`
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
  `,r([i({type:u,converter:String})],Jt.prototype,"theme",2),Jt=r([m("nidoca-box")],Jt);var V=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Deine Nachricht";this.nameLabel="Dein Name";this.emailLabel="Deine Email";this.titleLabel="Betreff";this.messageLabel="Deine Nachricht";this.buttonLabel="Senden"}render(){return s`
      <nidoca-box theme="${T(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${"text"}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email"}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"text"}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${b.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${"contained"}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};V.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:u,converter:String})],V.prototype,"theme",2),r([i({type:String,converter:String})],V.prototype,"label",2),r([i({type:String,converter:String})],V.prototype,"nameLabel",2),r([i({type:String,converter:String})],V.prototype,"emailLabel",2),r([i({type:String,converter:String})],V.prototype,"titleLabel",2),r([i({type:String,converter:String})],V.prototype,"messageLabel",2),r([i({type:String,converter:String})],V.prototype,"buttonLabel",2),r([g("#authenitcate-form")],V.prototype,"formComponent",2),V=r([m("nidoca-form-contact")],V);})();
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