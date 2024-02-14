"use strict";(()=>{var Ar=Object.defineProperty;var Cr=Object.getOwnPropertyDescriptor;var r=(a,e,t,o)=>{for(var s=o>1?void 0:o?Cr(e,t):e,l=a.length-1,p;l>=0;l--)(p=a[l])&&(s=(o?p(e,t,s):p(s))||s);return o&&s&&Ar(e,t,s),s};var Ee=window,we=Ee.ShadowRoot&&(Ee.ShadyCSS===void 0||Ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ve=Symbol(),rr=new WeakMap,Ft=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(we&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=rr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&rr.set(t,e))}return e}toString(){return this.cssText}},or=a=>new Ft(typeof a=="string"?a:a+"",void 0,Ve),c=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((o,s,l)=>o+(p=>{if(p._$cssResult$===!0)return p.cssText;if(typeof p=="number")return p;throw Error("Value passed to 'css' function must be a 'css' function result: "+p+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+a[l+1],a[0]);return new Ft(t,a,Ve)},Ge=(a,e)=>{we?a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let o=document.createElement("style"),s=Ee.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,a.appendChild(o)})},ke=we?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return or(t)})(a):a;var Xe,Se=window,ir=Se.trustedTypes,Or=ir?ir.emptyScript:"",nr=Se.reactiveElementPolyfillSupport,Ke={toAttribute(a,e){switch(e){case Boolean:a=a?Or:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},sr=(a,e)=>e!==a&&(e==e||a==a),Ye={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:sr},Je="finalized",et=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,o)=>{let s=this._$Ep(o,t);s!==void 0&&(this._$Ev.set(s,o),e.push(s))}),e}static createProperty(e,t=Ye){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(s){let l=this[e];this[t]=s,this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ye}static finalize(){if(this.hasOwnProperty(Je))return!1;this[Je]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let s of o)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let s of o)t.unshift(ke(s))}else e!==void 0&&t.push(ke(e));return t}static _$Ep(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ge(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=Ye){var s;let l=this.constructor._$Ep(e,o);if(l!==void 0&&o.reflect===!0){let p=(((s=o.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?o.converter:Ke).toAttribute(t,o.type);this._$El=e,p==null?this.removeAttribute(l):this.setAttribute(l,p),this._$El=null}}_$AK(e,t){var o;let s=this.constructor,l=s._$Ev.get(e);if(l!==void 0&&this._$El!==l){let p=s.getPropertyOptions(l),u=typeof p.converter=="function"?{fromAttribute:p.converter}:((o=p.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?p.converter:Ke;this._$El=l,this[l]=u.fromAttribute(t,p.type),this._$El=null}}requestUpdate(e,t,o){let s=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||sr)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,l)=>this[l]=s),this._$Ei=void 0);let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var l;return(l=s.hostUpdate)===null||l===void 0?void 0:l.call(s)}),this.update(o)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var s;return(s=o.hostUpdated)===null||s===void 0?void 0:s.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};et[Je]=!0,et.elementProperties=new Map,et.elementStyles=[],et.shadowRootOptions={mode:"open"},nr?.({ReactiveElement:et}),((Xe=Se.reactiveElementVersions)!==null&&Xe!==void 0?Xe:Se.reactiveElementVersions=[]).push("1.6.3");var We,Te=window,Dt=Te.trustedTypes,ar=Dt?Dt.createPolicy("lit-html",{createHTML:a=>a}):void 0,_e="$lit$",rt=`lit$${(Math.random()+"").slice(9)}$`,Qe="?"+rt,Hr=`<${Qe}>`,xt=document,te=()=>xt.createComment(""),ee=a=>a===null||typeof a!="object"&&typeof a!="function",ur=Array.isArray,fr=a=>ur(a)||typeof a?.[Symbol.iterator]=="function",Ze=`[ 	
\f\r]`,Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lr=/-->/g,mr=/>/g,bt=RegExp(`>|${Ze}(?:([^\\s"'>=/]+)(${Ze}*=${Ze}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pr=/'/g,cr=/"/g,gr=/^(?:script|style|textarea|title)$/i,br=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),n=br(1),Yr=br(2),q=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),dr=new WeakMap,yt=xt.createTreeWalker(xt,129,null,!1);function yr(a,e){if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return ar!==void 0?ar.createHTML(e):e}var xr=(a,e)=>{let t=a.length-1,o=[],s,l=e===2?"<svg>":"",p=Nt;for(let u=0;u<t;u++){let f=a[u],b,E,k=-1,x=0;for(;x<f.length&&(p.lastIndex=x,E=p.exec(f),E!==null);)x=p.lastIndex,p===Nt?E[1]==="!--"?p=lr:E[1]!==void 0?p=mr:E[2]!==void 0?(gr.test(E[2])&&(s=RegExp("</"+E[2],"g")),p=bt):E[3]!==void 0&&(p=bt):p===bt?E[0]===">"?(p=s??Nt,k=-1):E[1]===void 0?k=-2:(k=p.lastIndex-E[2].length,b=E[1],p=E[3]===void 0?bt:E[3]==='"'?cr:pr):p===cr||p===pr?p=bt:p===lr||p===mr?p=Nt:(p=bt,s=void 0);let y=p===bt&&a[u+1].startsWith("/>")?" ":"";l+=p===Nt?f+Hr:k>=0?(o.push(b),f.slice(0,k)+_e+f.slice(k)+rt+y):f+rt+(k===-2?(o.push(void 0),u):y)}return[yr(a,l+(a[t]||"<?>")+(e===2?"</svg>":"")),o]},re=class a{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let l=0,p=0,u=e.length-1,f=this.parts,[b,E]=xr(e,t);if(this.el=a.createElement(b,o),yt.currentNode=this.el.content,t===2){let k=this.el.content,x=k.firstChild;x.remove(),k.append(...x.childNodes)}for(;(s=yt.nextNode())!==null&&f.length<u;){if(s.nodeType===1){if(s.hasAttributes()){let k=[];for(let x of s.getAttributeNames())if(x.endsWith(_e)||x.startsWith(rt)){let y=E[p++];if(k.push(x),y!==void 0){let S=s.getAttribute(y.toLowerCase()+_e).split(rt),L=/([.?@])?(.*)/.exec(y);f.push({type:1,index:l,name:L[2],strings:S,ctor:L[1]==="."?Le:L[1]==="?"?Ae:L[1]==="@"?Ce:$t})}else f.push({type:6,index:l})}for(let x of k)s.removeAttribute(x)}if(gr.test(s.tagName)){let k=s.textContent.split(rt),x=k.length-1;if(x>0){s.textContent=Dt?Dt.emptyScript:"";for(let y=0;y<x;y++)s.append(k[y],te()),yt.nextNode(),f.push({type:2,index:++l});s.append(k[x],te())}}}else if(s.nodeType===8)if(s.data===Qe)f.push({type:2,index:l});else{let k=-1;for(;(k=s.data.indexOf(rt,k+1))!==-1;)f.push({type:7,index:l}),k+=rt.length-1}l++}}static createElement(e,t){let o=xt.createElement("template");return o.innerHTML=e,o}};function vt(a,e,t=a,o){var s,l,p,u;if(e===q)return e;let f=o!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[o]:t._$Cl,b=ee(e)?void 0:e._$litDirective$;return f?.constructor!==b&&((l=f?._$AO)===null||l===void 0||l.call(f,!1),b===void 0?f=void 0:(f=new b(a),f._$AT(a,t,o)),o!==void 0?((p=(u=t)._$Co)!==null&&p!==void 0?p:u._$Co=[])[o]=f:t._$Cl=f),f!==void 0&&(e=vt(a,f._$AS(a,e.values),f,o)),e}var Re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:o},parts:s}=this._$AD,l=((t=e?.creationScope)!==null&&t!==void 0?t:xt).importNode(o,!0);yt.currentNode=l;let p=yt.nextNode(),u=0,f=0,b=s[0];for(;b!==void 0;){if(u===b.index){let E;b.type===2?E=new Bt(p,p.nextSibling,this,e):b.type===1?E=new b.ctor(p,b.name,b.strings,this,e):b.type===6&&(E=new Oe(p,this,e)),this._$AV.push(E),b=s[++f]}u!==b?.index&&(p=yt.nextNode(),u++)}return yt.currentNode=xt,l}v(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},Bt=class a{constructor(e,t,o,s){var l;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cp=(l=s?.isConnected)===null||l===void 0||l}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=vt(this,e,t),ee(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==q&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):fr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==T&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.$(xt.createTextNode(e)),this._$AH=e}g(e){var t;let{values:o,_$litType$:s}=e,l=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=re.createElement(yr(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===l)this._$AH.v(o);else{let p=new Re(l,this),u=p.u(this.options);p.v(o),this.$(u),this._$AH=p}}_$AC(e){let t=dr.get(e.strings);return t===void 0&&dr.set(e.strings,t=new re(e)),t}T(e){ur(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,s=0;for(let l of e)s===t.length?t.push(o=new a(this.k(te()),this.k(te()),this,this.options)):o=t[s],o._$AI(l),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},$t=class{constructor(e,t,o,s,l){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,s){let l=this.strings,p=!1;if(l===void 0)e=vt(this,e,t,0),p=!ee(e)||e!==this._$AH&&e!==q,p&&(this._$AH=e);else{let u=e,f,b;for(e=l[0],f=0;f<l.length-1;f++)b=vt(this,u[o+f],t,f),b===q&&(b=this._$AH[f]),p||(p=!ee(b)||b!==this._$AH[f]),b===T?e=T:e!==T&&(e+=(b??"")+l[f+1]),this._$AH[f]=b}p&&!s&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Le=class extends $t{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},Ir=Dt?Dt.emptyScript:"",Ae=class extends $t{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,Ir):this.element.removeAttribute(this.name)}},Ce=class extends $t{constructor(e,t,o,s,l){super(e,t,o,s,l),this.type=5}_$AI(e,t=this){var o;if((e=(o=vt(this,e,t,0))!==null&&o!==void 0?o:T)===q)return;let s=this._$AH,l=e===T&&s!==T||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,p=e!==T&&(s===T||l);l&&this.element.removeEventListener(this.name,this,s),p&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},Oe=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){vt(this,e)}},vr={O:_e,P:rt,A:Qe,C:1,M:xr,L:Re,R:fr,D:vt,I:Bt,V:$t,H:Ae,N:Ce,U:Le,F:Oe},hr=Te.litHtmlPolyfillSupport;hr?.(re,Bt),((We=Te.litHtmlVersions)!==null&&We!==void 0?We:Te.litHtmlVersions=[]).push("2.8.0");var $r=(a,e,t)=>{var o,s;let l=(o=t?.renderBefore)!==null&&o!==void 0?o:e,p=l._$litPart$;if(p===void 0){let u=(s=t?.renderBefore)!==null&&s!==void 0?s:null;l._$litPart$=p=new Bt(e.insertBefore(te(),u),u,void 0,t??{})}return p._$AI(a),p};var Fe,Ne;var lt=class extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$r(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return q}};lt.finalized=!0,lt._$litElement$=!0,(Fe=globalThis.litElementHydrateSupport)===null||Fe===void 0||Fe.call(globalThis,{LitElement:lt});var Er=globalThis.litElementPolyfillSupport;Er?.({LitElement:lt});((Ne=globalThis.litElementVersions)!==null&&Ne!==void 0?Ne:globalThis.litElementVersions=[]).push("3.3.3");var h=(s=>(s.primary="primary",s.secondary="secondary",s.surface="surface",s.plain="plain",s))(h||{}),v=class{static getStyle(e){return e?e=="plain"?n``:n` <style>
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
          </style>`:n``}static getOposite(e){return e=="plain"?"surface":e=="primary"||e=="primary"?"secondary":e=="secondary"?"primary":"plain"}getParentTheme(e){let t=e;for(;t!=null;){if(t.theme!=null)return t.theme;t=t.parentElement}}};var d=class extends lt{};var m=a=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(a,e):((t,o)=>{let{kind:s,elements:l}=o;return{kind:s,elements:l,finisher(p){customElements.define(t,p)}}})(a,e);var zr=(a,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,a)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,a)}},Pr=(a,e,t)=>{e.constructor.createProperty(t,a)};function i(a){return(e,t)=>t!==void 0?Pr(a,e,t):zr(a,e)}function wr(a){return i({...a,state:!0})}var Et=({finisher:a,descriptor:e})=>(t,o)=>{var s;if(o===void 0){let l=(s=t.originalKey)!==null&&s!==void 0?s:t.key,p=e!=null?{kind:"method",placement:"prototype",key:l,descriptor:e(t.key)}:{...t,key:l};return a!=null&&(p.finisher=function(u){a(u,l)}),p}{let l=t.constructor;e!==void 0&&Object.defineProperty(t,o,e(o)),a?.(l,o)}};function g(a,e){return Et({descriptor:t=>{let o={get(){var s,l;return(l=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(a))!==null&&l!==void 0?l:null},enumerable:!0,configurable:!0};if(e){let s=typeof t=="symbol"?Symbol():"__"+t;o.get=function(){var l,p;return this[s]===void 0&&(this[s]=(p=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(a))!==null&&p!==void 0?p:null),this[s]}}return o}})}var tr,So=((tr=window.HTMLSlotElement)===null||tr===void 0?void 0:tr.prototype.assignedElements)!=null?(a,e)=>a.assignedElements(e):(a,e)=>a.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var G=class extends d{constructor(){super(...arguments);this.theme="surface";this.header="";this.opened=!1}render(){return n`
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
  `,r([i({type:h,converter:String})],G.prototype,"theme",2),r([i({type:String})],G.prototype,"header",2),r([i({type:Boolean})],G.prototype,"opened",2),G=r([m("nidoca-accordion-item")],G);var R=class extends d{constructor(){super(...arguments);this.theme="plain";this.overline="";this.title="";this.summary="";this.text=""}render(){return n`
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
    ></nidoca-article>`}};R.styles=c`
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
  `,r([i({type:h,converter:String})],R.prototype,"theme",2),r([i({type:String})],R.prototype,"overline",2),r([i({type:String})],R.prototype,"title",2),r([i({type:String})],R.prototype,"summary",2),r([i({type:String})],R.prototype,"text",2),R=r([m("nidoca-article")],R);var kr=(t=>(t.single="single",t.multi="multi",t))(kr||{}),mt=class extends d{constructor(){super(...arguments);this.theme="plain";this.accordionType="single"}updated(t){super.updated(t),t.forEach((o,s)=>{if(s=="theme"&&this.accordionSlot!=null){let l=this.accordionSlot.assignedElements();for(let p=0;p<l.length;p++){let u=l[p];u instanceof G&&(u.theme=this.theme)}}})}render(){return n`
      ${v.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let o=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let s=this.accordionSlot.assignedElements();for(let l=0;l<s.length;l++){let p=s[l];p instanceof G&&p!=o&&(p.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return n`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${R.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};mt.styles=c`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,r([i({type:h,converter:String})],mt.prototype,"theme",2),r([i({type:kr,converter:String})],mt.prototype,"accordionType",2),r([g("#accordionSlot")],mt.prototype,"accordionSlot",2),mt=r([m("nidoca-accordion")],mt);var X=class extends d{constructor(){super(...arguments);this.theme="primary";this.shadowType="shadow_1";this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return n`
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
    `}};X.styles=c`
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
  `,r([i({type:String})],X.prototype,"theme",2),r([i({type:Object})],X.prototype,"shadowType",2),r([i({type:String})],X.prototype,"icon",2),r([i({type:Boolean})],X.prototype,"clickable",2),r([i({type:Boolean})],X.prototype,"deactivated",2),r([i({type:String})],X.prototype,"title",2),X=r([m("nidoca-icon-extended")],X);var U=class extends d{constructor(){super(...arguments);this.icon="";this.primaryText="";this.isLast=!1;this.first=!1}render(){return n`
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
  `,r([i({type:String})],U.prototype,"icon",2),r([i({type:String})],U.prototype,"primaryText",2),r([i({type:Number})],U.prototype,"state",2),r([i({type:Boolean})],U.prototype,"isLast",2),U=r([m("nidoca-wizard-step")],U);var qt=class extends d{render(){return n`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){let t=e.target;if(t==null)return;let o=t.assignedElements(),s=0;for(let l=0;l<o.length;l++){let p=o[l];p instanceof U&&(p.index=l,p.state==0&&(s=l),p.index==o.length-1&&(p.isLast=!0))}this.changeState(s)}stepClicked(e){let t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){let t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){let s=t[o];s instanceof U&&s.index!==void 0&&(s.index<e?s.state=1:s.index==e?s.state=0:s.state=2)}}}};qt.styles=c``,r([g("#wizardSlot")],qt.prototype,"wizardSlot",2),qt=r([m("nidoca-wizard")],qt);var pt=class extends d{constructor(){super(...arguments);this.clickable=!0;this.theme="surface";this.text=""}render(){return n`
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
    `}static example(t=""){return n`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};pt.styles=c`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }

    .clickable {
      cursor: pointer;
    }
  `,r([i({type:Boolean})],pt.prototype,"clickable",2),r([i({type:h,converter:String})],pt.prototype,"theme",2),r([i({type:String})],pt.prototype,"text",2),pt=r([m("nidoca-chip")],pt);var wt=class extends d{constructor(){super(...arguments);this.code="";this.theme="plain"}render(){return n`
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
    `}static example(t=""){return n`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};wt.styles=c`
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
  `,r([i({type:String})],wt.prototype,"code",2),r([i({type:String})],wt.prototype,"theme",2),wt=r([m("nidoca-code")],wt);var kt=class extends d{constructor(){super();this.show=!1;addEventListener("click",t=>{let o=this.associatedElement?.getBoundingClientRect();o&&(o.top>t.clientY||o.right<t.clientX||o.left>t.clientX||o.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))})}render(){return this.show?n`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:n``}calculatePositionStyle(t){let o="";if(t){let s=t.getBoundingClientRect();s.right>window.innerWidth/2?o+=`right:${window.innerWidth-s.right}px;`:o+=`left:${s.left}px;`,s.top>window.innerHeight/2?o+=`bottom:${s.height+window.innerHeight-s.top}px;`:o+=`top:${s.bottom}px;`}return o}};kt.styles=c`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,r([i({type:Boolean})],kt.prototype,"show",2),r([i({type:Object})],kt.prototype,"associatedElement",2),kt=r([m("nidoca-elevation")],kt);var He=class{static{this.PROGRESS="PROGRESS"}static{this.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}},St=class extends d{constructor(){super(...arguments);this.progressType=He.PROGRESS}render(){return n` <style>
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

      <progress class="${this.progressType}"></progress>`}};St.styles=c``,r([i({type:h,converter:String})],St.prototype,"theme",2),r([i({type:He,converter:String})],St.prototype,"progressType",2),St=r([m("nidoca-progress")],St);var Ie=(o=>(o.contained="contained",o.outlined="outlined",o.text="text",o))(Ie||{}),ot=class extends d{constructor(){super(...arguments);this.theme="primary";this.buttonType="contained";this.icon="";this.text=""}render(){return n`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return n`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};ot.styles=c`
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
  `,r([i({type:h,converter:String})],ot.prototype,"theme",2),r([i({type:Ie,converter:String})],ot.prototype,"buttonType",2),r([i({type:String})],ot.prototype,"icon",2),r([i({type:String})],ot.prototype,"text",2),ot=r([m("nidoca-button")],ot);var z=class extends d{};var Tt=class extends d{constructor(){super(...arguments);this.autocomplete=!0}render(){return n`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,o={};for(let l of this.getInputElements(this.slotElement)){let p=l.getOutputData();o[p.key]=p.value,t.append(p.key,p.value)}let s={};return s.jsonObject=o,s.formData=t,s}validate(){let t=!0;for(let o of this.getInputElements(this.slotElement))o.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let o=[],s=t.assignedElements({flatten:!0});for(let l=0;l<s.length;l++){let p=s[l];this.recursiveInputElementSearch(p,o)}return o}recursiveInputElementSearch(t,o){if(t instanceof z)o.push(t);else if(t.hasChildNodes()){let s=t.children;for(let l of[].slice.call(s))this.recursiveInputElementSearch(l,o)}}};Tt.styles=c`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,r([i({type:Boolean})],Tt.prototype,"autocomplete",2),r([g("#slotElement")],Tt.prototype,"slotElement",2),Tt=r([m("nidoca-form")],Tt);var Sr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ze=a=>(...e)=>({_$litDirective$:a,values:e}),Ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Mr}=vr;var Tr=()=>document.createComment(""),jt=(a,e,t)=>{var o;let s=a._$AA.parentNode,l=e===void 0?a._$AB:e._$AA;if(t===void 0){let p=s.insertBefore(Tr(),l),u=s.insertBefore(Tr(),l);t=new Mr(p,u,a,a.options)}else{let p=t._$AB.nextSibling,u=t._$AM,f=u!==a;if(f){let b;(o=t._$AQ)===null||o===void 0||o.call(t,a),t._$AM=a,t._$AP!==void 0&&(b=a._$AU)!==u._$AU&&t._$AP(b)}if(p!==l||f){let b=t._$AA;for(;b!==p;){let E=b.nextSibling;s.insertBefore(b,l),b=E}}}return t},ct=(a,e,t=a)=>(a._$AI(e,t),a),Dr={},_r=(a,e=Dr)=>a._$AH=e,Rr=a=>a._$AH,Pe=a=>{var e;(e=a._$AP)===null||e===void 0||e.call(a,!1,!0);let t=a._$AA,o=a._$AB.nextSibling;for(;t!==o;){let s=t.nextSibling;t.remove(),t=s}};var Lr=(a,e,t)=>{let o=new Map;for(let s=e;s<=t;s++)o.set(a[s],s);return o},Vt=ze(class extends Ut{constructor(a){if(super(a),a.type!==Sr.CHILD)throw Error("repeat() can only be used in text expressions")}ct(a,e,t){let o;t===void 0?t=e:e!==void 0&&(o=e);let s=[],l=[],p=0;for(let u of a)s[p]=o?o(u,p):p,l[p]=t(u,p),p++;return{values:l,keys:s}}render(a,e,t){return this.ct(a,e,t).values}update(a,[e,t,o]){var s;let l=Rr(a),{values:p,keys:u}=this.ct(e,t,o);if(!Array.isArray(l))return this.ut=u,p;let f=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],b=[],E,k,x=0,y=l.length-1,S=0,L=p.length-1;for(;x<=y&&S<=L;)if(l[x]===null)x++;else if(l[y]===null)y--;else if(f[x]===u[S])b[S]=ct(l[x],p[S]),x++,S++;else if(f[y]===u[L])b[L]=ct(l[y],p[L]),y--,L--;else if(f[x]===u[L])b[L]=ct(l[x],p[L]),jt(a,b[L+1],l[x]),x++,L--;else if(f[y]===u[S])b[S]=ct(l[y],p[S]),jt(a,l[x],l[y]),y--,S++;else if(E===void 0&&(E=Lr(u,S,L),k=Lr(f,x,y)),E.has(f[x]))if(E.has(f[y])){let tt=k.get(u[S]),je=tt!==void 0?l[tt]:null;if(je===null){let er=jt(a,l[x]);ct(er,p[S]),b[S]=er}else b[S]=ct(je,p[S]),jt(a,l[x],je),l[tt]=null;S++}else Pe(l[y]),y--;else Pe(l[x]),x++;for(;S<=L;){let tt=jt(a,b[L+1]);ct(tt,p[S]),b[S++]=tt}for(;x<=y;){let tt=l[x++];tt!==null&&Pe(tt)}return this.ut=u,_r(a,b),q}});var Br={},oe=ze(class extends Ut{constructor(){super(...arguments),this.st=Br}render(a,e){return e()}update(a,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.st)&&this.st.length===e.length&&e.every((o,s)=>o===this.st[s]))return q}else if(this.st===e)return q;return this.st=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var A=class extends z{constructor(){super(...arguments);this.theme="surface";this.trailingIcon="";this.label="";this.errorText="";this.infoText="";this.warningText="";this.value="";this.options=[];this.name="";this.required=!0;this.multiple=!1;this.size=1}render(){return n` <style>
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
                ${Vt(this.options,t=>t==null?n` <option></option>`:this.isSelectedOption(t)?n` <option value="${t.key}" selected>${t.value}</option> `:n` <option value="${t.key}">${t.value}</option> `)}
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
          `:n``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let o=0,s=this.selectElement.options.length;o<s;o++)this.selectElement.options[o].selected&&t.push(this.options[o].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let o=!1;for(let s of this.value)if(o=t.key===s,o)return!0}return this.value===t.key}static enumToOptions(t,o=!0){let s=[];return o&&s.push({key:"",value:""}),Object.keys(t).forEach(l=>{s.push({key:l,value:t[l]})}),s}static stringArrayToOptions(t,o=!0){let s=[];return o&&s.push({key:"",value:""}),t.forEach(l=>{s.push({key:l,value:l})}),s}static toComboboxOptions(t=null,o=null){if(t==null)return[];let s=[];return Object.values(t).forEach(l=>{let p=String(Object.keys(t)[Object.values(t).indexOf(l)]);o&&(p=p.concat(o)),s.push({key:l,value:p})}),s}};A.styles=c`
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
  `,r([i({type:h,converter:String})],A.prototype,"theme",2),r([i({type:String})],A.prototype,"trailingIcon",2),r([i({type:String})],A.prototype,"label",2),r([i({type:String})],A.prototype,"errorText",2),r([i({type:String})],A.prototype,"infoText",2),r([i({type:String})],A.prototype,"warningText",2),r([i()],A.prototype,"value",2),r([i({type:Array})],A.prototype,"options",2),r([i({type:String})],A.prototype,"name",2),r([i({type:Boolean})],A.prototype,"required",2),r([i({type:Boolean})],A.prototype,"multiple",2),r([i({type:Number})],A.prototype,"size",2),r([g("#selectElement")],A.prototype,"selectElement",2),A=r([m("nidoca-form-combobox")],A);var _=a=>a??T;var it=(y=>(y.color="color",y.email="email",y.hidden="hidden",y.number="number",y.password="password",y.tel="tel",y.text="text",y.search="search",y.url="url",y.date="date",y.month="month",y.time="time",y.week="week",y))(it||{}),w=class extends z{constructor(){super(...arguments);this.type="text";this.label="";this.placeholder="";this.trailingIcon="";this.errorText="";this.infoText="";this.warningText="";this.name="";this.value="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="surface"}render(){return this.type=="hidden"?n`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:n` <style>
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
                size="${_(this.size)}"
                minlength="${_(this.minlength)}"
                maxlength="${_(this.maxlength)}"
                pattern="${_(this.pattern)}"
                min="${_(this.min)}"
                max="${_(this.max)}"
                step="${_(this.step)}"
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
  `,r([i({type:it,converter:String})],w.prototype,"type",2),r([i({type:String})],w.prototype,"label",2),r([i({type:String})],w.prototype,"placeholder",2),r([i({type:String})],w.prototype,"trailingIcon",2),r([i({type:String})],w.prototype,"errorText",2),r([i({type:String})],w.prototype,"infoText",2),r([i({type:String})],w.prototype,"warningText",2),r([i({type:String})],w.prototype,"name",2),r([i()],w.prototype,"value",2),r([i({type:Boolean})],w.prototype,"required",2),r([i({type:Boolean})],w.prototype,"disabled",2),r([i({type:Boolean})],w.prototype,"checked",2),r([i({type:Number})],w.prototype,"maxlength",2),r([i({type:Number})],w.prototype,"minlength",2),r([i({type:Number})],w.prototype,"min",2),r([i({type:Number})],w.prototype,"max",2),r([i({type:String})],w.prototype,"step",2),r([i({type:Number})],w.prototype,"size",2),r([i({type:String})],w.prototype,"pattern",2),r([g("#inputElement")],w.prototype,"inputElement",2),r([i({type:h,converter:String})],w.prototype,"theme",2),w=r([m("nidoca-form-text")],w);var Me=class extends w{constructor(){super(),this.type="date"}};Me=r([m("nidoca-form-date")],Me);var C=class extends z{constructor(){super(...arguments);this.theme="surface";this.infoText="";this.warningText="";this.errorText="";this.name="";this.value="";this.label="";this.required=!1;this.placeholder="";this.disabled=!1;this.rows=5}render(){return n` <style>
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
          `:n``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};C.styles=c`
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
  `,r([i({type:h,converter:String})],C.prototype,"theme",2),r([i({type:String})],C.prototype,"infoText",2),r([i({type:String})],C.prototype,"warningText",2),r([i({type:String})],C.prototype,"errorText",2),r([i({type:String})],C.prototype,"name",2),r([i()],C.prototype,"value",2),r([i({type:String})],C.prototype,"label",2),r([i({type:Boolean})],C.prototype,"required",2),r([i({type:String})],C.prototype,"placeholder",2),r([i({type:Boolean})],C.prototype,"disabled",2),r([i({type:Number})],C.prototype,"rows",2),r([g("#inputElement")],C.prototype,"inputElement",2),C=r([m("nidoca-form-textarea")],C);var _t=class extends z{constructor(){super(...arguments);this.theme="primary"}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return n`
      <nidoca-box theme="${_(this.theme)}">
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
    `}upload(){this.inputElement?.click()}};_t.styles=c`
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
  `,r([i({type:h,converter:String})],_t.prototype,"theme",2),r([g("#inputElement")],_t.prototype,"inputElement",2),_t=r([m("nidoca-form-upload")],_t);var I=class extends z{constructor(){super();this.name="";this.label="";this.infoText="";this.errorText="";this.warningText="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="primary";this.theme=v.prototype.getParentTheme(this)||"plain"}render(){return n`
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
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};I.styles=c`
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
  `,r([i({type:String})],I.prototype,"name",2),r([i({type:String})],I.prototype,"label",2),r([i({type:String})],I.prototype,"infoText",2),r([i({type:String})],I.prototype,"errorText",2),r([i({type:String})],I.prototype,"warningText",2),r([i({type:Boolean})],I.prototype,"required",2),r([i({type:Boolean})],I.prototype,"disabled",2),r([i({type:Boolean})],I.prototype,"checked",2),r([i({type:String})],I.prototype,"theme",2),r([g("#inputElement")],I.prototype,"inputElement",2),I=r([m("nidoca-form-switch")],I);var W=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Newsletter";this.emailLabel="Deine Emailadresse";this.buttonLabel="Registrieren"}render(){return n`
      <nidoca-box theme="${_(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${v.getOposite(this.theme)}"
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
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};W.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:h,converter:String})],W.prototype,"theme",2),r([i({type:String,converter:String})],W.prototype,"label",2),r([i({type:String,converter:String})],W.prototype,"emailLabel",2),r([i({type:String,converter:String})],W.prototype,"buttonLabel",2),r([g("#form")],W.prototype,"formComponent",2),W=r([m("nidoca-form-newsletter")],W);var Z=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Passwort zur\xFCcksetzen";this.emailLabel="Deine Emailadresse";this.buttonLabel="Zur\xFCcksetzen"}render(){return n`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${v.getOposite(this.theme)}"
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
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Z.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:h,converter:String})],Z.prototype,"theme",2),r([i({type:String,converter:String})],Z.prototype,"label",2),r([i({type:String,converter:String})],Z.prototype,"emailLabel",2),r([i({type:String,converter:String})],Z.prototype,"buttonLabel",2),r([g("#form")],Z.prototype,"formComponent",2),Z=r([m("nidoca-form-reset-password")],Z);var O=class extends d{constructor(){super(...arguments);this.theme="surface";this.label="Passwort \xE4ndern";this.oldPasswordLabel="Altes Passwort";this.newPasswordLabel="Neues Passwort";this.repeatNewPasswordLabel="Wiederholen";this.buttonLabel="\xC4ndern";this.showErrorMessageSamePassword=!1;this.errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";this.showErrorMessagePasswordDiff=!1;this.errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein"}render(){return n`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${v.getOposite(this.theme)}"
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
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};O.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:h,converter:String})],O.prototype,"theme",2),r([i({type:String,converter:String})],O.prototype,"label",2),r([i({type:String,converter:String})],O.prototype,"oldPasswordLabel",2),r([i({type:String,converter:String})],O.prototype,"newPasswordLabel",2),r([i({type:String,converter:String})],O.prototype,"repeatNewPasswordLabel",2),r([i({type:String,converter:String})],O.prototype,"buttonLabel",2),r([g("#form")],O.prototype,"formComponent",2),r([g("#oldPassword")],O.prototype,"oldPasswordInputField",2),r([g("#newPassword")],O.prototype,"newPasswordInputField",2),r([g("#repeatNewPassword")],O.prototype,"repeatNewPasswordInputField",2),r([i()],O.prototype,"errorMessageSamePasswordLabel",2),r([i()],O.prototype,"errorMessagePasswordDiffLabel",2),O=r([m("nidoca-form-change-password")],O);var Y=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Registrieren";this.emailLabel="Email";this.passwordLabel="Passwort";this.buttonLabel="Registrieren"}render(){return n`
      <nidoca-box theme="${_(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${v.getOposite(this.theme)}"
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
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Y.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:h,converter:String})],Y.prototype,"theme",2),r([i({type:String,converter:String})],Y.prototype,"label",2),r([i({type:String,converter:String})],Y.prototype,"emailLabel",2),r([i({type:String,converter:String})],Y.prototype,"passwordLabel",2),r([i({type:String,converter:String})],Y.prototype,"buttonLabel",2),r([g("#form")],Y.prototype,"formComponent",2),Y=r([m("nidoca-form-register")],Y);var Gt=class extends d{constructor(){super(...arguments);this.code=""}render(){return n``}};Gt.styles=c``,r([i({type:String})],Gt.prototype,"code",2),Gt=r([m("nidoca-upload")],Gt);var Rt=class extends d{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return n`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};Rt.styles=c`
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
  `,r([i({type:h,converter:String})],Rt.prototype,"theme",2),r([i({type:String,converter:String})],Rt.prototype,"text",2),Rt=r([m("nidoca-hr")],Rt);var Lt=class extends d{constructor(){super(...arguments);this.text="";this.icon=""}render(){return n`
      <div class="container">
        ${this.icon?n` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:n``}
        ${this.text?n` <nidoca-text-button>${this.text}</nidoca-text-button>`:n``}
        <slot></slot>
      </div>
    `}static example(t=""){return n`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};Lt.styles=c`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,r([i({type:String})],Lt.prototype,"text",2),r([i({type:String})],Lt.prototype,"icon",2),Lt=r([m("nidoca-menu-area")],Lt);var j=class extends d{constructor(){super(...arguments);this.text="";this.icon="";this.selected=!1;this.theme="surface"}render(){return n`
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
  `,r([i({type:String})],j.prototype,"text",2),r([i({type:String})],j.prototype,"icon",2),r([i({type:Boolean})],j.prototype,"selected",2),r([i({type:String})],j.prototype,"theme",2),j=r([m("nidoca-menu-item")],j);var At=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return n` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((o,s)=>{if(s=="theme"&&this.slotElement!=null){let l=this.slotElement.assignedElements();for(let p=0;p<l.length;p++){let u=l[p];u instanceof j&&(u.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];if(l instanceof j){let p=l.getBoundingClientRect();p.left<t.x&&p.right>t.x&&(p.top<t.y&&p.bottom>t.y?l.selected=!0:l.selected=!1)}}}})}static example(t=""){return n`
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
    `}};At.styles=c`
    :host,
    slot {
      display: block;
    }
  `,r([i({type:String})],At.prototype,"theme",2),r([g("#slotElement")],At.prototype,"slotElement",2),At=r([m("nidoca-menu")],At);var K=class extends d{constructor(){super(...arguments);this.height="auto";this.width="auto";this.left="auto";this.top="auto";this.right="auto";this.bottom="auto"}render(){return n`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,o,s,l,p,u){return"height:".concat(t).concat(";").concat("width:").concat(o).concat(";").concat("left:").concat(s).concat(";").concat("right:").concat(l).concat(";").concat("top:").concat(p).concat(";").concat("bottom:").concat(u).concat(";")}};K.styles=c`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,r([i({type:String})],K.prototype,"height",2),r([i({type:String})],K.prototype,"width",2),r([i({type:String})],K.prototype,"left",2),r([i({type:String})],K.prototype,"top",2),r([i({type:String})],K.prototype,"right",2),r([i({type:String})],K.prototype,"bottom",2),K=r([m("nidoca-layout-floating")],K);var Xt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      ${v.getStyle(this.theme)}
      <slot></slot>
    `}};Xt.styles=c`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,r([i({type:String})],Xt.prototype,"theme",2),Xt=r([m("nidoca-container")],Xt);var Ct=class extends d{constructor(){super();this.hideSidebox=!0;this.theme=v.prototype.getParentTheme(this)||"plain"}render(){return n` <style>
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
      ${this.hideSidebox?n``:n` <slot class="sidebox" name="sidebox"></slot>`}`}};Ct.styles=c`
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
  `,r([i({type:h,converter:String})],Ct.prototype,"theme",2),r([i({type:Boolean,converter:String})],Ct.prototype,"hideSidebox",2),Ct=r([m("nidoca-split-screen")],Ct);var V=class extends d{constructor(){super(...arguments);this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return n`
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
    `}};V.styles=c`
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
  `,r([i({type:String})],V.prototype,"icon",2),r([i({type:Boolean})],V.prototype,"clickable",2),r([i({type:Boolean})],V.prototype,"deactivated",2),r([i({type:String})],V.prototype,"title",2),V=r([m("nidoca-icon")],V);var Yt=class extends d{render(){return n`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(this.rippleContainerElement!=null){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);let t=this.rippleContainerElement.getBoundingClientRect(),o=Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};Yt.styles=c`
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
  `,r([g("#rippleContainer")],Yt.prototype,"rippleContainerElement",2),Yt=r([m("nidoca-ripple")],Yt);var P=class extends d{constructor(){super(...arguments);this.src="";this.width="auto";this.height="auto";this.zoom=!1}render(){return this.src?n`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:n``}static example(t=""){return n`<nidoca-img width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img>`}};P.styles=c`
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
  `,r([i({type:String})],P.prototype,"src",2),r([i({type:String})],P.prototype,"width",2),r([i({type:String})],P.prototype,"height",2),r([i({type:Boolean})],P.prototype,"zoom",2),P=r([m("nidoca-img")],P);var Ot=class extends P{static example(e=""){return n`<nidoca-img-round width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img-round>`}};Ot.styles=c`
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
  `,Ot=r([m("nidoca-img-round")],Ot);var Ht=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:n``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let o=t.target;if(o==null)return;let s=o.assignedElements();for(let l=0;l<s.length;l++){let p=s[l];if(p instanceof P){this.selected==null&&l==0&&(this.selected=p.cloneNode(!0)),p.addEventListener("click",f=>{f.target&&(this.selected=f.target.cloneNode(!0))}),p.width="148px";let u=p.classList;u.contains("img")||u.add("img")}}}};Ht.styles=c`
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
  `,r([i({type:h,converter:String})],Ht.prototype,"theme",2),r([wr()],Ht.prototype,"selected",2),Ht=r([m("nidoca-img-slider")],Ht);var Kt=class extends d{constructor(){super(...arguments);this.src=""}render(){return n`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Kt.styles=c``,r([i({type:String})],Kt.prototype,"src",2),Kt=r([m("nidoca-movie")],Kt);var M=class extends d{constructor(){super(...arguments);this.label="";this.placeholder="";this.name="";this.min=1;this.max=10;this.errorText="";this.numberOne=1;this.numberTwo=1}render(){return n`
      <nidoca-form-text
        theme="${_(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${"number"}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,o){return Math.random()*(o-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};M.styles=c`
    :host {
      display: block;
      width: 100%;
    }
  `,r([i({type:h,converter:String})],M.prototype,"theme",2),r([i({type:String})],M.prototype,"label",2),r([i({type:String})],M.prototype,"placeholder",2),r([i({type:String})],M.prototype,"name",2),r([i({type:Number})],M.prototype,"min",2),r([i({type:Number})],M.prototype,"max",2),r([i({type:String})],M.prototype,"errorText",2),r([g("#inputfield")],M.prototype,"inputfield",2),M=r([m("nidoca-form-captcha")],M);var dt=class extends d{constructor(){super(...arguments);this.text="";this.href="";this.targetType="_self"}render(){return n`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};dt.styles=c`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,r([i({type:String})],dt.prototype,"text",2),r([i({type:String})],dt.prototype,"href",2),r([i({type:String})],dt.prototype,"targetType",2),dt=r([m("nidoca-link")],dt);var H=class extends d{constructor(){super(...arguments);this.theme="surface";this.primaryText="";this.secondaryText="";this.selected=!1}render(){return n`
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
      ${Ot.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};H.styles=c`
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
  `,r([i({type:h,converter:String})],H.prototype,"theme",2),r([i({type:String})],H.prototype,"primaryText",2),r([i({type:String})],H.prototype,"secondaryText",2),r([i({type:Boolean})],H.prototype,"selected",2),H=r([m("nidoca-list-item")],H);var nt=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return n`
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
    `}static example(){return n`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};nt.styles=c`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,r([i({type:h,converter:String})],nt.prototype,"theme",2),r([i({type:String})],nt.prototype,"text",2),nt=r([m("nidoca-list-section")],nt);var ht=class extends d{constructor(){super(...arguments);this.theme="surface";this.multiselect=!1}updated(t){super.updated(t),t.forEach((o,s)=>{s=="theme"&&this.getItems().forEach(l=>{l.theme=this.theme})})}render(){return n`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let o=t.target;o.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];l instanceof H&&t.push(l)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];l instanceof H&&l.selected&&t.push(l)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let o=this.slotElement.assignedElements(),s=0;for(let l=0;l<o.length;l++){let p=o[l];p instanceof H&&(p.selected&&t.push(s),s++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return n`<nidoca-list theme="primary">
      ${nt.example()} ${H.example()} ${H.example()} ${H.example()}
    </nidoca-list>`}};ht.styles=c`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,r([i({type:h,converter:String})],ht.prototype,"theme",2),r([i({type:Boolean})],ht.prototype,"multiselect",2),r([g("#slotElement")],ht.prototype,"slotElement",2),ht=r([m("nidoca-list")],ht);var It=class extends d{constructor(){super(...arguments);this.theme="primary";this.prominent=!1}render(){return n`
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
    `}};It.styles=c`
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
  `,r([i({type:String,converter:String})],It.prototype,"theme",2),r([i({type:Boolean})],It.prototype,"prominent",2),It=r([m("nidoca-top-app-bar")],It);var ut=class extends d{constructor(){super(...arguments);this.headers=["column 1","column 2"];this.rows=[["row 1",new V],["row 2",new V]];this.theme="plain"}render(){return n`
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
            ${oe([this.headers],()=>n` ${Vt(this.headers,t=>n` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${oe([this.rows],()=>n`
                  ${Vt(this.rows,t=>n`
                        <tr>
                          ${Vt(t,o=>n` <td colspan="1" rowspan="1">${o}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};ut.styles=c`
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
  `,r([i({type:Array})],ut.prototype,"headers",2),r([i({type:Array})],ut.prototype,"rows",2),r([i({type:h,converter:String})],ut.prototype,"theme",2),ut=r([m("nidoca-table")],ut);var ft=class extends d{constructor(){super(...arguments);this.selected=!1}render(){return this.selected?n` <slot></slot>`:n``}};ft.styles=c`
    :host,
    slot {
      display: block;
    }
  `,r([i({type:Boolean})],ft.prototype,"selected",2),ft=r([m("nidoca-tab-content")],ft);var J=class extends d{constructor(){super(...arguments);this.selected=!1;this.text="";this.theme="surface"}render(){return n`
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
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};J.styles=c`
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
  `,r([i({type:Boolean})],J.prototype,"selected",2),r([i({type:String})],J.prototype,"text",2),r([i({type:String})],J.prototype,"theme",2),J=r([m("nidoca-tab")],J);var st=class extends d{constructor(){super(...arguments);this.theme="surface";this.tabIndex=0}render(){return n`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),s=100/t.length,l=t[this.tabIndex];for(let p=0;p<t.length;p++){let u=t[p];u instanceof J&&(u.theme=this.theme,u.style.width=String(s).concat("%"),u==l?(u.selected=!0,u.classList.add("SELECTED")):(u.selected=!1,u.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let o=this.tabContentSlot.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];l instanceof ft&&(this.tabIndex==t?l.selected=!0:l.selected=!1,t++)}}}tabClicked(t){let o=t.detail;this.changeTabIndex(o)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let o=this.tabSlot.assignedElements();for(let s=0;s<o.length;s++){let l=o[s];if(l instanceof J&&l==t){this.tabIndex=s;break}}}}static example(t=""){return n`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
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
  `,r([g("#tabSlot")],st.prototype,"tabSlot",2),r([g("#tabContentSlot")],st.prototype,"tabContentSlot",2),r([i({type:String})],st.prototype,"theme",2),r([i({type:Number})],st.prototype,"tabIndex",2),st=r([m("nidoca-tabs")],st);var Q=class extends d{constructor(){super();this.hideLeft=!0;this.prominent=!1;document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let o=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-o.width}})}updated(t){super.updated(t)}render(){return n`
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
    `}};Q.styles=c`
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
  `,r([i({type:Boolean})],Q.prototype,"hideLeft",2),r([i({type:Boolean})],Q.prototype,"prominent",2),r([g("#header")],Q.prototype,"headerElement",2),r([g("#left")],Q.prototype,"leftElement",2),r([g("#content")],Q.prototype,"contentElement",2),Q=r([m("nidoca-template")],Q);var gt=class extends d{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{this.videoElement&&(this.videoElement.srcObject=t)})}render(){return n`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};gt.styles=c``,r([g("#video")],gt.prototype,"videoElement",2),r([g("#canvas")],gt.prototype,"canvasElement",2),r([g("#click-photo")],gt.prototype,"buttonElement",2),gt=r([m("nidoca-video")],gt);var zt=class extends d{constructor(){super(...arguments);this.src="";this.canvasElements=[];this.storeCanvasElements=[]}render(){return n`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>n`${t}`)}
    `}updated(t){super.updated(t),t.forEach((o,s)=>{if(console.debug(`${this.tagName} : property ${String(s)} changed. oldValue: ${o}`),s=="src"){this.convert();let l=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let o=document.createElement("canvas");o.width=t[0],o.height=t[1];let s=o.getContext("2d");s&&this.img&&(this.img.crossOrigin="anonymous",s.drawImage(this.img,0,0,t[0],t[1]),o.toBlob(l=>{},"image/webp")),this.canvasElements.push(o)}),this.requestUpdate()})}};zt.styles=c``,r([i({type:String})],zt.prototype,"src",2),r([g("#img")],zt.prototype,"img",2),zt=r([m("nidoca-svg-2-webp")],zt);var $=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return n`<style>
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
    `}};$.styles=c`
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
  `,r([i({type:h,converter:String})],$.prototype,"theme",2),r([i({type:String})],$.prototype,"text",2),$=r([m("nidoca-text")],$);var ie=class extends ${render(){return n` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ie.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 105%;
    }
  `,ie=r([m("nidoca-text-body")],ie);var ne=class extends ${render(){return n`${super.render()}`}};ne.styles=c`
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
  `,ne=r([m("nidoca-text-button")],ne);var se=class extends ${};se.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,se=r([m("nidoca-text-overline")],se);var ae=class extends ${render(){return n` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ae.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,ae=r([m("nidoca-text-subtitle")],ae);var D=class extends ${render(){return n`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};D.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,D=r([m("nidoca-text-caption")],D);var De=class extends D{render(){return n`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};De=r([m("nidoca-text-error")],De);var Be=class extends D{render(){return n`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Be=r([m("nidoca-text-success")],Be);var qe=class extends D{render(){return n`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};qe=r([m("nidoca-text-warning")],qe);var Ue=class extends D{render(){return n`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ue=r([m("nidoca-text-info")],Ue);var le=class extends ${};le.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,le=r([m("nidoca-text-h1")],le);var me=class extends ${};me.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `,me=r([m("nidoca-text-h2")],me);var pe=class extends ${};pe.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,pe=r([m("nidoca-text-h3")],pe);var ce=class extends ${};ce.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,ce=r([m("nidoca-text-h4")],ce);var de=class extends ${};de.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,de=r([m("nidoca-text-h5")],de);var he=class extends ${};he.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,he=r([m("nidoca-text-h6")],he);var F=class extends d{constructor(){super(...arguments);this.value="";this.placeholder="";this.disabled=!1;this.theme="surface"}render(){return n`
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
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",o=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",o.type,JSON.stringify(o.detail)),this.dispatchEvent(o)}static example(t=""){return n`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};F.styles=c`
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
  `,r([i({type:String})],F.prototype,"value",2),r([i({type:String})],F.prototype,"placeholder",2),r([i({type:Boolean})],F.prototype,"disabled",2),r([g("#inputElement")],F.prototype,"inputElement",2),r([i({type:h,converter:String})],F.prototype,"theme",2),F=r([m("nidoca-search-bar")],F);var ue=class{static{this.CENTER="CENTER"}static{this.LEFT="LEFT"}static{this.RIGHT="RIGHT"}static{this.TOP="TOP"}static{this.BOTTOM="BOTTOM"}static{this.SLIDE_CENTER="SLIDE_CENTER"}static{this.SLIDE_LEFT="SLIDE_LEFT"}static{this.SLIDE_RIGHT="SLIDE_RIGHT"}static{this.SLIDE_TOP="SLIDE_TOP"}static{this.SLIDE_BOTTOM="SLIDE_BOTTOM"}},Pt=class extends d{constructor(){super(...arguments);this.transitionType=ue.CENTER;this.duration=.5}render(){return n` <div class="${_(this.transitionType)}"><slot></slot></div> `}};Pt.styles=c`
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
  `,r([i({type:String})],Pt.prototype,"transitionType",2),r([i({type:Number})],Pt.prototype,"duration",2),Pt=r([m("nidoca-transition")],Pt);var Jt=class extends d{constructor(){super(...arguments);this.show=!1}render(){return this.show?n`
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
        `:n``}};Jt.styles=c`
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
  `,r([i({type:Boolean})],Jt.prototype,"show",2),Jt=r([m("nidoca-dialog")],Jt);var N=class extends d{constructor(){super(...arguments);this.show=!1;this.title="Ja oder Nein ?";this.description="Entscheide dich";this.labelButtonYes="Ja";this.labelButtonNo="Nein"}render(){return n`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};N.styles=c``,r([i({type:Boolean})],N.prototype,"show",2),r([i({type:String})],N.prototype,"title",2),r([i({type:String})],N.prototype,"description",2),r([i({type:String})],N.prototype,"labelButtonYes",2),r([i({type:String})],N.prototype,"labelButtonNo",2),N=r([m("nidoca-dialog-decision")],N);var Wt=class extends d{constructor(){super(...arguments);this.icon=""}render(){return n`
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
    `}};Wt.styles=c`
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
  `,r([i({type:String})],Wt.prototype,"icon",2),Wt=r([m("nidoca-infobox")],Wt);var at=class extends d{constructor(){super(...arguments);this.theme="surface";this.src="";this.title="";this.subtitle=""}render(){return n`
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
  `,r([i({type:h,converter:String})],at.prototype,"theme",2),r([i({type:String})],at.prototype,"src",2),r([i({type:String})],at.prototype,"title",2),r([i({type:String})],at.prototype,"subtitle",2),at=r([m("nidoca-avatar")],at);var Zt=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return n`
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
  `,r([i({type:h,converter:String})],Zt.prototype,"theme",2),Zt=r([m("nidoca-card")],Zt);var fe=class extends d{render(){return n`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){let t=e.target;if(t==null)return;let o=t.assignedElements();for(let s=0;s<o.length;s++){let p=o[s].classList;p.contains("flexItem")||p.add("flexItem"),p.contains("flexItemDevice")||p.add("flexItemDevice")}}};fe.styles=c`
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
  `,fe=r([m("nidoca-gallery")],fe);var ge=class extends d{render(){return n`<slot></slot>`}print(){let e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};ge.styles=c`
    :host {
      display: none;
    }
  `,ge=r([m("nidoca-print")],ge);var be=class extends d{render(){return n`
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){let o=e.target.assignedElements(),s=o.length;for(let l=0;l<s;l++){let u=o[l].classList,f="item_count_"+s;u.contains(f)||u.add(f)}}};be.styles=c`
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
  `,be=r([m("nidoca-section")],be);var ye=class extends d{render(){return n` <slot></slot>`}};ye.styles=c`
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
  `,ye=r([m("nidoca-dashboard")],ye);var xe=class extends d{render(){return n` <slot></slot>`}};xe.styles=c`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,xe=r([m("nidoca-dashboard-box-25")],xe);var ve=class extends d{render(){return n` <slot></slot>`}};ve.styles=c`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,ve=r([m("nidoca-dashboard-box-50")],ve);var $e=class extends d{render(){return n` <slot></slot>`}};$e.styles=c`
    :host {
      width: 100%;
      display: block;
    }
  `,$e=r([m("nidoca-dashboard-box-100")],$e);var Mt=class extends d{constructor(){super(...arguments);this.clickable=!0;this.title=""}render(){return n`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Mt.styles=c`
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
  `,r([i({type:Boolean})],Mt.prototype,"clickable",2),r([i({type:String})],Mt.prototype,"title",2),Mt=r([m("nidoca-dashboard-card")],Mt);var Qt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return n`
      ${v.getStyle(this.theme)}
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
  `,r([i({type:h,converter:String})],Qt.prototype,"theme",2),Qt=r([m("nidoca-box")],Qt);var B=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Deine Nachricht";this.nameLabel="Dein Name";this.emailLabel="Deine Email";this.titleLabel="Betreff";this.messageLabel="Deine Nachricht";this.buttonLabel="Senden"}render(){return n`
      <nidoca-box theme="${_(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${"text"}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email"}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"text"}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${v.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${"contained"}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};B.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([i({type:h,converter:String})],B.prototype,"theme",2),r([i({type:String,converter:String})],B.prototype,"label",2),r([i({type:String,converter:String})],B.prototype,"nameLabel",2),r([i({type:String,converter:String})],B.prototype,"emailLabel",2),r([i({type:String,converter:String})],B.prototype,"titleLabel",2),r([i({type:String,converter:String})],B.prototype,"messageLabel",2),r([i({type:String,converter:String})],B.prototype,"buttonLabel",2),r([g("#authenitcate-form")],B.prototype,"formComponent",2),B=r([m("nidoca-form-contact")],B);})();
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

@lit/reactive-element/decorators/base.js:
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
