"use strict";(()=>{var Pi=Object.defineProperty;var Bi=Object.getOwnPropertyDescriptor;var i=(s,e,t,n)=>{for(var a=n>1?void 0:n?Bi(e,t):e,l=s.length-1,d;l>=0;l--)(d=s[l])&&(a=(n?d(e,t,a):d(a))||a);return n&&a&&Pi(e,t,a),a};var Ae=window,Ce=Ae.ShadowRoot&&(Ae.ShadyCSS===void 0||Ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),ci=new WeakMap,ee=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ce&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ci.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ci.set(t,e))}return e}toString(){return this.cssText}},di=s=>new ee(typeof s=="string"?s:s+"",void 0,Qe),c=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((n,a,l)=>n+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[l+1],s[0]);return new ee(t,s,Qe)},Fe=(s,e)=>{Ce?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let n=document.createElement("style"),a=Ae.litNonce;a!==void 0&&n.setAttribute("nonce",a),n.textContent=t.cssText,s.appendChild(n)})},Ie=Ce?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return di(t)})(s):s;var Ne,ze=window,pi=ze.trustedTypes,Ui=pi?pi.emptyScript:"",hi=ze.reactiveElementPolyfillSupport,ei={toAttribute(s,e){switch(e){case Boolean:s=s?Ui:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ui=(s,e)=>e!==s&&(e==e||s==s),ti={attribute:!0,type:String,converter:ei,reflect:!1,hasChanged:ui},ii="finalized",nt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,n)=>{let a=this._$Ep(n,t);a!==void 0&&(this._$Ev.set(a,n),e.push(a))}),e}static createProperty(e,t=ti){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let n=typeof e=="symbol"?Symbol():"__"+e,a=this.getPropertyDescriptor(e,n,t);a!==void 0&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(a){let l=this[e];this[t]=a,this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ti}static finalize(){if(this.hasOwnProperty(ii))return!1;this[ii]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let a of n)this.createProperty(a,t[a])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let a of n)t.unshift(Ie(a))}else e!==void 0&&t.push(Ie(e));return t}static _$Ep(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Fe(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=ti){var a;let l=this.constructor._$Ep(e,n);if(l!==void 0&&n.reflect===!0){let d=(((a=n.converter)===null||a===void 0?void 0:a.toAttribute)!==void 0?n.converter:ei).toAttribute(t,n.type);this._$El=e,d==null?this.removeAttribute(l):this.setAttribute(l,d),this._$El=null}}_$AK(e,t){var n;let a=this.constructor,l=a._$Ev.get(e);if(l!==void 0&&this._$El!==l){let d=a.getPropertyOptions(l),h=typeof d.converter=="function"?{fromAttribute:d.converter}:((n=d.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?d.converter:ei;this._$El=l,this[l]=h.fromAttribute(t,d.type),this._$El=null}}requestUpdate(e,t,n){let a=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ui)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((a,l)=>this[l]=a),this._$Ei=void 0);let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(a=>{var l;return(l=a.hostUpdate)===null||l===void 0?void 0:l.call(a)}),this.update(n)):this._$Ek()}catch(a){throw t=!1,this._$Ek(),a}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var a;return(a=n.hostUpdated)===null||a===void 0?void 0:a.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};nt[ii]=!0,nt.elementProperties=new Map,nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},hi?.({ReactiveElement:nt}),((Ne=ze.reactiveElementVersions)!==null&&Ne!==void 0?Ne:ze.reactiveElementVersions=[]).push("1.6.3");var ni,He=window,jt=He.trustedTypes,fi=jt?jt.createPolicy("lit-html",{createHTML:s=>s}):void 0,Oe="$lit$",ot=`lit$${(Math.random()+"").slice(9)}$`,ri="?"+ot,ji=`<${ri}>`,wt=document,ne=()=>wt.createComment(""),oe=s=>s===null||typeof s!="object"&&typeof s!="function",$i=Array.isArray,ki=s=>$i(s)||typeof s?.[Symbol.iterator]=="function",oi=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gi=/-->/g,bi=/>/g,xt=RegExp(`>|${oi}(?:([^\\s"'>=/]+)(${oi}*=${oi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yi=/'/g,xi=/"/g,Ei=/^(?:script|style|textarea|title)$/i,Si=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),o=Si(1),tn=Si(2),U=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),vi=new WeakMap,vt=wt.createTreeWalker(wt,129,null,!1);function Ti(s,e){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return fi!==void 0?fi.createHTML(e):e}var _i=(s,e)=>{let t=s.length-1,n=[],a,l=e===2?"<svg>":"",d=ie;for(let h=0;h<t;h++){let f=s[h],b,$,E=-1,x=0;for(;x<f.length&&(d.lastIndex=x,$=d.exec(f),$!==null);)x=d.lastIndex,d===ie?$[1]==="!--"?d=gi:$[1]!==void 0?d=bi:$[2]!==void 0?(Ei.test($[2])&&(a=RegExp("</"+$[2],"g")),d=xt):$[3]!==void 0&&(d=xt):d===xt?$[0]===">"?(d=a??ie,E=-1):$[1]===void 0?E=-2:(E=d.lastIndex-$[2].length,b=$[1],d=$[3]===void 0?xt:$[3]==='"'?xi:yi):d===xi||d===yi?d=xt:d===gi||d===bi?d=ie:(d=xt,a=void 0);let y=d===xt&&s[h+1].startsWith("/>")?" ":"";l+=d===ie?f+ji:E>=0?(n.push(b),f.slice(0,E)+Oe+f.slice(E)+ot+y):f+ot+(E===-2?(n.push(void 0),h):y)}return[Ti(s,l+(s[t]||"<?>")+(e===2?"</svg>":"")),n]},re=class s{constructor({strings:e,_$litType$:t},n){let a;this.parts=[];let l=0,d=0,h=e.length-1,f=this.parts,[b,$]=_i(e,t);if(this.el=s.createElement(b,n),vt.currentNode=this.el.content,t===2){let E=this.el.content,x=E.firstChild;x.remove(),E.append(...x.childNodes)}for(;(a=vt.nextNode())!==null&&f.length<h;){if(a.nodeType===1){if(a.hasAttributes()){let E=[];for(let x of a.getAttributeNames())if(x.endsWith(Oe)||x.startsWith(ot)){let y=$[d++];if(E.push(x),y!==void 0){let S=a.getAttribute(y.toLowerCase()+Oe).split(ot),L=/([.?@])?(.*)/.exec(y);f.push({type:1,index:l,name:L[2],strings:S,ctor:L[1]==="."?Me:L[1]==="?"?Pe:L[1]==="@"?Be:kt})}else f.push({type:6,index:l})}for(let x of E)a.removeAttribute(x)}if(Ei.test(a.tagName)){let E=a.textContent.split(ot),x=E.length-1;if(x>0){a.textContent=jt?jt.emptyScript:"";for(let y=0;y<x;y++)a.append(E[y],ne()),vt.nextNode(),f.push({type:2,index:++l});a.append(E[x],ne())}}}else if(a.nodeType===8)if(a.data===ri)f.push({type:2,index:l});else{let E=-1;for(;(E=a.data.indexOf(ot,E+1))!==-1;)f.push({type:7,index:l}),E+=ot.length-1}l++}}static createElement(e,t){let n=wt.createElement("template");return n.innerHTML=e,n}};function $t(s,e,t=s,n){var a,l,d,h;if(e===U)return e;let f=n!==void 0?(a=t._$Co)===null||a===void 0?void 0:a[n]:t._$Cl,b=oe(e)?void 0:e._$litDirective$;return f?.constructor!==b&&((l=f?._$AO)===null||l===void 0||l.call(f,!1),b===void 0?f=void 0:(f=new b(s),f._$AT(s,t,n)),n!==void 0?((d=(h=t)._$Co)!==null&&d!==void 0?d:h._$Co=[])[n]=f:t._$Cl=f),f!==void 0&&(e=$t(s,f._$AS(s,e.values),f,n)),e}var De=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:n},parts:a}=this._$AD,l=((t=e?.creationScope)!==null&&t!==void 0?t:wt).importNode(n,!0);vt.currentNode=l;let d=vt.nextNode(),h=0,f=0,b=a[0];for(;b!==void 0;){if(h===b.index){let $;b.type===2?$=new qt(d,d.nextSibling,this,e):b.type===1?$=new b.ctor(d,b.name,b.strings,this,e):b.type===6&&($=new Ue(d,this,e)),this._$AV.push($),b=a[++f]}h!==b?.index&&(d=vt.nextNode(),h++)}return vt.currentNode=wt,l}v(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},qt=class s{constructor(e,t,n,a){var l;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=a,this._$Cp=(l=a?.isConnected)===null||l===void 0||l}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$t(this,e,t),oe(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==U&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ki(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==T&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.$(wt.createTextNode(e)),this._$AH=e}g(e){var t;let{values:n,_$litType$:a}=e,l=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=re.createElement(Ti(a.h,a.h[0]),this.options)),a);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===l)this._$AH.v(n);else{let d=new De(l,this),h=d.u(this.options);d.v(n),this.$(h),this._$AH=d}}_$AC(e){let t=vi.get(e.strings);return t===void 0&&vi.set(e.strings,t=new re(e)),t}T(e){$i(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,a=0;for(let l of e)a===t.length?t.push(n=new s(this.k(ne()),this.k(ne()),this,this.options)):n=t[a],n._$AI(l),a++;a<t.length&&(this._$AR(n&&n._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){let a=e.nextSibling;e.remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},kt=class{constructor(e,t,n,a,l){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=l,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,a){let l=this.strings,d=!1;if(l===void 0)e=$t(this,e,t,0),d=!oe(e)||e!==this._$AH&&e!==U,d&&(this._$AH=e);else{let h=e,f,b;for(e=l[0],f=0;f<l.length-1;f++)b=$t(this,h[n+f],t,f),b===U&&(b=this._$AH[f]),d||(d=!oe(b)||b!==this._$AH[f]),b===T?e=T:e!==T&&(e+=(b??"")+l[f+1]),this._$AH[f]=b}d&&!a&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Me=class extends kt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},qi=jt?jt.emptyScript:"",Pe=class extends kt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,qi):this.element.removeAttribute(this.name)}},Be=class extends kt{constructor(e,t,n,a,l){super(e,t,n,a,l),this.type=5}_$AI(e,t=this){var n;if((e=(n=$t(this,e,t,0))!==null&&n!==void 0?n:T)===U)return;let a=this._$AH,l=e===T&&a!==T||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,d=e!==T&&(a===T||l);l&&this.element.removeEventListener(this.name,this,a),d&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},Ue=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){$t(this,e)}},Ri={O:Oe,P:ot,A:ri,C:1,M:_i,L:De,R:ki,D:$t,I:qt,V:kt,H:Pe,N:Be,U:Me,F:Ue},wi=He.litHtmlPolyfillSupport;wi?.(re,qt),((ni=He.litHtmlVersions)!==null&&ni!==void 0?ni:He.litHtmlVersions=[]).push("2.8.0");var Li=(s,e,t)=>{var n,a;let l=(n=t?.renderBefore)!==null&&n!==void 0?n:e,d=l._$litPart$;if(d===void 0){let h=(a=t?.renderBefore)!==null&&a!==void 0?a:null;l._$litPart$=d=new qt(e.insertBefore(ne(),h),h,void 0,t??{})}return d._$AI(s),d};var si,ai;var mt=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Li(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return U}};mt.finalized=!0,mt._$litElement$=!0,(si=globalThis.litElementHydrateSupport)===null||si===void 0||si.call(globalThis,{LitElement:mt});var Ai=globalThis.litElementPolyfillSupport;Ai?.({LitElement:mt});((ai=globalThis.litElementVersions)!==null&&ai!==void 0?ai:globalThis.litElementVersions=[]).push("3.3.3");var u=(a=>(a.primary="primary",a.secondary="secondary",a.surface="surface",a.plain="plain",a))(u||{}),v=class{static getStyle(e){return e?e=="plain"?o``:o` <style>
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
          </style>`:o``}static getOposite(e){return e=="plain"?"surface":e=="primary"||e=="primary"?"secondary":e=="secondary"?"primary":"plain"}getParentTheme(e){let t=e;for(;t!=null;){if(t.theme!=null)return t.theme;t=t.parentElement}}};var p=class extends mt{};var m=s=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(s,e):((t,n)=>{let{kind:a,elements:l}=n;return{kind:a,elements:l,finisher(d){customElements.define(t,d)}}})(s,e);var Vi=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}},Gi=(s,e,t)=>{e.constructor.createProperty(t,s)};function r(s){return(e,t)=>t!==void 0?Gi(s,e,t):Vi(s,e)}function Ci(s){return r({...s,state:!0})}var Et=({finisher:s,descriptor:e})=>(t,n)=>{var a;if(n===void 0){let l=(a=t.originalKey)!==null&&a!==void 0?a:t.key,d=e!=null?{kind:"method",placement:"prototype",key:l,descriptor:e(t.key)}:{...t,key:l};return s!=null&&(d.finisher=function(h){s(h,l)}),d}{let l=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),s?.(l,n)}};function g(s,e){return Et({descriptor:t=>{let n={get(){var a,l;return(l=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(s))!==null&&l!==void 0?l:null},enumerable:!0,configurable:!0};if(e){let a=typeof t=="symbol"?Symbol():"__"+t;n.get=function(){var l,d;return this[a]===void 0&&(this[a]=(d=(l=this.renderRoot)===null||l===void 0?void 0:l.querySelector(s))!==null&&d!==void 0?d:null),this[a]}}return n}})}var li,zn=((li=window.HTMLSlotElement)===null||li===void 0?void 0:li.prototype.assignedElements)!=null?(s,e)=>s.assignedElements(e):(s,e)=>s.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var W=class extends p{constructor(){super(...arguments);this.theme="surface";this.header="";this.opened=!1}render(){return o`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?o` <slot></slot>`:o``}
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
  `,i([r({type:u,converter:String})],W.prototype,"theme",2),i([r({type:String})],W.prototype,"header",2),i([r({type:Boolean})],W.prototype,"opened",2),W=i([m("nidoca-accordion-item")],W);var R=class extends p{constructor(){super(...arguments);this.theme="plain";this.overline="";this.title="";this.summary="";this.text=""}render(){return o`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?o` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:o``}
        ${this.title?o` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:o``}
        ${this.summary?o`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:o``}
        ${this.text?o` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:o``}
        <slot></slot>
      </div>
    `}static example(t="",n="plain"){return o`<nidoca-article
      theme="${n}"
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
  `,i([r({type:u,converter:String})],R.prototype,"theme",2),i([r({type:String})],R.prototype,"overline",2),i([r({type:String})],R.prototype,"title",2),i([r({type:String})],R.prototype,"summary",2),i([r({type:String})],R.prototype,"text",2),R=i([m("nidoca-article")],R);var Ii=(t=>(t.single="single",t.multi="multi",t))(Ii||{}),ct=class extends p{constructor(){super(...arguments);this.theme="plain";this.accordionType="single"}updated(t){super.updated(t),t.forEach((n,a)=>{if(a=="theme"&&this.accordionSlot!=null){let l=this.accordionSlot.assignedElements();for(let d=0;d<l.length;d++){let h=l[d];h instanceof W&&(h.theme=this.theme)}}})}render(){return o`
      ${v.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let n=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let a=this.accordionSlot.assignedElements();for(let l=0;l<a.length;l++){let d=a[l];d instanceof W&&d!=n&&(d.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return o`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${R.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};ct.styles=c`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,i([r({type:u,converter:String})],ct.prototype,"theme",2),i([r({type:Ii,converter:String})],ct.prototype,"accordionType",2),i([g("#accordionSlot")],ct.prototype,"accordionSlot",2),ct=i([m("nidoca-accordion")],ct);var X=class extends p{constructor(){super(...arguments);this.theme="primary";this.shadowType="shadow_1";this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return o`
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
    `}async clicked(){if(this.clickable&&!this.deactivated){let t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}static example(t=""){return o`
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
  `,i([r({type:String})],X.prototype,"theme",2),i([r({type:Object})],X.prototype,"shadowType",2),i([r({type:String})],X.prototype,"icon",2),i([r({type:Boolean})],X.prototype,"clickable",2),i([r({type:Boolean})],X.prototype,"deactivated",2),i([r({type:String})],X.prototype,"title",2),X=i([m("nidoca-icon-extended")],X);var j=class extends p{constructor(){super(...arguments);this.icon="";this.primaryText="";this.isLast=!1;this.first=!1}render(){return o`
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

          ${this.isLast?o``:o`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(t){return t==1?"var(--app-color-text-primary)":t==0?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==3?"var(--app-color-success)":t==1?"var(--mdc-theme-on-primary)":t==0?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){let t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};j.styles=c`
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
  `,i([r({type:String})],j.prototype,"icon",2),i([r({type:String})],j.prototype,"primaryText",2),i([r({type:Number})],j.prototype,"state",2),i([r({type:Boolean})],j.prototype,"isLast",2),j=i([m("nidoca-wizard-step")],j);var Vt=class extends p{render(){return o`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){let t=e.target;if(t==null)return;let n=t.assignedElements(),a=0;for(let l=0;l<n.length;l++){let d=n[l];d instanceof j&&(d.index=l,d.state==0&&(a=l),d.index==n.length-1&&(d.isLast=!0))}this.changeState(a)}stepClicked(e){let t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){let t=this.wizardSlot.assignedElements();for(let n=0;n<t.length;n++){let a=t[n];a instanceof j&&a.index!==void 0&&(a.index<e?a.state=1:a.index==e?a.state=0:a.state=2)}}}};Vt.styles=c``,i([g("#wizardSlot")],Vt.prototype,"wizardSlot",2),Vt=i([m("nidoca-wizard")],Vt);var dt=class extends p{constructor(){super(...arguments);this.clickable=!0;this.theme="surface";this.text=""}render(){return o`
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
    `}static example(t=""){return o`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};dt.styles=c`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }

    .clickable {
      cursor: pointer;
    }
  `,i([r({type:Boolean})],dt.prototype,"clickable",2),i([r({type:u,converter:String})],dt.prototype,"theme",2),i([r({type:String})],dt.prototype,"text",2),dt=i([m("nidoca-chip")],dt);var St=class extends p{constructor(){super(...arguments);this.code="";this.theme="plain"}render(){return o`
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
    `}static example(t=""){return o`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};St.styles=c`
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
  `,i([r({type:String})],St.prototype,"code",2),i([r({type:String})],St.prototype,"theme",2),St=i([m("nidoca-code")],St);var Tt=class extends p{constructor(){super();this.show=!1;addEventListener("click",t=>{let n=this.associatedElement?.getBoundingClientRect();n&&(n.top>t.clientY||n.right<t.clientX||n.left>t.clientX||n.bottom<t.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))})}render(){return this.show?o`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:o``}calculatePositionStyle(t){let n="";if(t){let a=t.getBoundingClientRect();a.right>window.innerWidth/2?n+=`right:${window.innerWidth-a.right}px;`:n+=`left:${a.left}px;`,a.top>window.innerHeight/2?n+=`bottom:${a.height+window.innerHeight-a.top}px;`:n+=`top:${a.bottom}px;`}return n}};Tt.styles=c`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,i([r({type:Boolean})],Tt.prototype,"show",2),i([r({type:Object})],Tt.prototype,"associatedElement",2),Tt=i([m("nidoca-elevation")],Tt);var je=class{static{this.PROGRESS="PROGRESS"}static{this.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}},_t=class extends p{constructor(){super(...arguments);this.progressType=je.PROGRESS}render(){return o` <style>
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

      <progress class="${this.progressType}"></progress>`}};_t.styles=c``,i([r({type:u,converter:String})],_t.prototype,"theme",2),i([r({type:je,converter:String})],_t.prototype,"progressType",2),_t=i([m("nidoca-progress")],_t);var qe=(n=>(n.contained="contained",n.outlined="outlined",n.text="text",n))(qe||{}),rt=class extends p{constructor(){super(...arguments);this.theme="primary";this.buttonType="contained";this.icon="";this.text=""}render(){return o`
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
        ${this.icon?o`<nidoca-icon
              .clickable="${!1}"
              .icon="${this.icon}"
              style="padding-right:var(--space);"
            ></nidoca-icon>`:o``}

        <nidoca-text-button theme="${this.theme}"
          >${this.text}
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};rt.styles=c`
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
  `,i([r({type:u,converter:String})],rt.prototype,"theme",2),i([r({type:qe,converter:String})],rt.prototype,"buttonType",2),i([r({type:String})],rt.prototype,"icon",2),i([r({type:String})],rt.prototype,"text",2),rt=i([m("nidoca-button")],rt);var O=class extends p{};var Rt=class extends p{constructor(){super(...arguments);this.autocomplete=!0}render(){return o`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,n={};for(let l of this.getInputElements(this.slotElement)){let d=l.getOutputData();n[d.key]=d.value,t.append(d.key,d.value)}let a={};return a.jsonObject=n,a.formData=t,a}validate(){let t=!0;for(let n of this.getInputElements(this.slotElement))n.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let n=[],a=t.assignedElements({flatten:!0});for(let l=0;l<a.length;l++){let d=a[l];this.recursiveInputElementSearch(d,n)}return n}recursiveInputElementSearch(t,n){if(t instanceof O)n.push(t);else if(t.hasChildNodes()){let a=t.children;for(let l of[].slice.call(a))this.recursiveInputElementSearch(l,n)}}};Rt.styles=c`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,i([r({type:Boolean})],Rt.prototype,"autocomplete",2),i([g("#slotElement")],Rt.prototype,"slotElement",2),Rt=i([m("nidoca-form")],Rt);var zi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ve=s=>(...e)=>({_$litDirective$:s,values:e}),Gt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Wi}=Ri;var Hi=()=>document.createComment(""),Wt=(s,e,t)=>{var n;let a=s._$AA.parentNode,l=e===void 0?s._$AB:e._$AA;if(t===void 0){let d=a.insertBefore(Hi(),l),h=a.insertBefore(Hi(),l);t=new Wi(d,h,s,s.options)}else{let d=t._$AB.nextSibling,h=t._$AM,f=h!==s;if(f){let b;(n=t._$AQ)===null||n===void 0||n.call(t,s),t._$AM=s,t._$AP!==void 0&&(b=s._$AU)!==h._$AU&&t._$AP(b)}if(d!==l||f){let b=t._$AA;for(;b!==d;){let $=b.nextSibling;a.insertBefore(b,l),b=$}}}return t},pt=(s,e,t=s)=>(s._$AI(e,t),s),Xi={},Oi=(s,e=Xi)=>s._$AH=e,Di=s=>s._$AH,Ge=s=>{var e;(e=s._$AP)===null||e===void 0||e.call(s,!1,!0);let t=s._$AA,n=s._$AB.nextSibling;for(;t!==n;){let a=t.nextSibling;t.remove(),t=a}};var Mi=(s,e,t)=>{let n=new Map;for(let a=e;a<=t;a++)n.set(s[a],a);return n},ht=Ve(class extends Gt{constructor(s){if(super(s),s.type!==zi.CHILD)throw Error("repeat() can only be used in text expressions")}ct(s,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let a=[],l=[],d=0;for(let h of s)a[d]=n?n(h,d):d,l[d]=t(h,d),d++;return{values:l,keys:a}}render(s,e,t){return this.ct(s,e,t).values}update(s,[e,t,n]){var a;let l=Di(s),{values:d,keys:h}=this.ct(e,t,n);if(!Array.isArray(l))return this.ut=h,d;let f=(a=this.ut)!==null&&a!==void 0?a:this.ut=[],b=[],$,E,x=0,y=l.length-1,S=0,L=d.length-1;for(;x<=y&&S<=L;)if(l[x]===null)x++;else if(l[y]===null)y--;else if(f[x]===h[S])b[S]=pt(l[x],d[S]),x++,S++;else if(f[y]===h[L])b[L]=pt(l[y],d[L]),y--,L--;else if(f[x]===h[L])b[L]=pt(l[x],d[L]),Wt(s,b[L+1],l[x]),x++,L--;else if(f[y]===h[S])b[S]=pt(l[y],d[S]),Wt(s,l[x],l[y]),y--,S++;else if($===void 0&&($=Mi(h,S,L),E=Mi(f,x,y)),$.has(f[x]))if($.has(f[y])){let it=E.get(h[S]),Ze=it!==void 0?l[it]:null;if(Ze===null){let mi=Wt(s,l[x]);pt(mi,d[S]),b[S]=mi}else b[S]=pt(Ze,d[S]),Wt(s,l[x],Ze),l[it]=null;S++}else Ge(l[y]),y--;else Ge(l[x]),x++;for(;S<=L;){let it=Wt(s,b[L+1]);pt(it,d[S]),b[S++]=it}for(;x<=y;){let it=l[x++];it!==null&&Ge(it)}return this.ut=h,Oi(s,b),U}});var Yi={},Lt=Ve(class extends Gt{constructor(){super(...arguments),this.st=Yi}render(s,e){return e()}update(s,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.st)&&this.st.length===e.length&&e.every((n,a)=>n===this.st[a]))return U}else if(this.st===e)return U;return this.st=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var A=class extends O{constructor(){super(...arguments);this.theme="surface";this.trailingIcon="";this.label="";this.errorText="";this.infoText="";this.warningText="";this.value="";this.options=[];this.name="";this.required=!0;this.multiple=!1;this.size=1}render(){return o` <style>
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
        ${this.trailingIcon?o` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:o``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${Lt([this.value,this.options],()=>o`
                ${ht(this.options,t=>t==null?o` <option></option>`:this.isSelectedOption(t)?o` <option value="${t.key}" selected>${t.value}</option> `:o` <option value="${t.key}">${t.value}</option> `)}
              `)}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?o`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?o` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:o``}
              ${this.warningText?o` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:o``}
              ${this.errorText?o` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:o``}
            </div>
          `:o``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let n=0,a=this.selectElement.options.length;n<a;n++)this.selectElement.options[n].selected&&t.push(this.options[n].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let n=!1;for(let a of this.value)if(n=t.key===a,n)return!0}return this.value===t.key}static enumToOptions(t,n=!0){let a=[];return n&&a.push({key:"",value:""}),Object.keys(t).forEach(l=>{a.push({key:l,value:t[l]})}),a}static stringArrayToOptions(t,n=!0){let a=[];return n&&a.push({key:"",value:""}),t.forEach(l=>{a.push({key:l,value:l})}),a}static toComboboxOptions(t=null,n=null){if(t==null)return[];let a=[];return Object.values(t).forEach(l=>{let d=String(Object.keys(t)[Object.values(t).indexOf(l)]);n&&(d=d.concat(n)),a.push({key:l,value:d})}),a}};A.styles=c`
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
  `,i([r({type:u,converter:String})],A.prototype,"theme",2),i([r({type:String})],A.prototype,"trailingIcon",2),i([r({type:String})],A.prototype,"label",2),i([r({type:String})],A.prototype,"errorText",2),i([r({type:String})],A.prototype,"infoText",2),i([r({type:String})],A.prototype,"warningText",2),i([r()],A.prototype,"value",2),i([r({type:Array})],A.prototype,"options",2),i([r({type:String})],A.prototype,"name",2),i([r({type:Boolean})],A.prototype,"required",2),i([r({type:Boolean})],A.prototype,"multiple",2),i([r({type:Number})],A.prototype,"size",2),i([g("#selectElement")],A.prototype,"selectElement",2),A=i([m("nidoca-form-combobox")],A);var _=s=>s??T;var Z=(y=>(y.color="color",y.email="email",y.hidden="hidden",y.number="number",y.password="password",y.tel="tel",y.text="text",y.search="search",y.url="url",y.date="date",y.month="month",y.time="time",y.week="week",y))(Z||{}),k=class extends O{constructor(){super(...arguments);this.type="text";this.label="";this.placeholder="";this.trailingIcon="";this.errorText="";this.infoText="";this.warningText="";this.name="";this.value="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="surface"}render(){return this.type=="hidden"?o`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:o` <style>
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
            ${this.trailingIcon?o` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:o``}
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

          ${this.infoText||this.warningText||this.errorText?o`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?o` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:o``}
                  ${this.warningText?o` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:o``}
                  ${this.errorText?o` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:o``}
                </div>
              `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t?.trim()}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),this.errorText==""}};k.styles=c`
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
  `,i([r({type:Z,converter:String})],k.prototype,"type",2),i([r({type:String})],k.prototype,"label",2),i([r({type:String})],k.prototype,"placeholder",2),i([r({type:String})],k.prototype,"trailingIcon",2),i([r({type:String})],k.prototype,"errorText",2),i([r({type:String})],k.prototype,"infoText",2),i([r({type:String})],k.prototype,"warningText",2),i([r({type:String})],k.prototype,"name",2),i([r()],k.prototype,"value",2),i([r({type:Boolean})],k.prototype,"required",2),i([r({type:Boolean})],k.prototype,"disabled",2),i([r({type:Boolean})],k.prototype,"checked",2),i([r({type:Number})],k.prototype,"maxlength",2),i([r({type:Number})],k.prototype,"minlength",2),i([r({type:Number})],k.prototype,"min",2),i([r({type:Number})],k.prototype,"max",2),i([r({type:String})],k.prototype,"step",2),i([r({type:Number})],k.prototype,"size",2),i([r({type:String})],k.prototype,"pattern",2),i([g("#inputElement")],k.prototype,"inputElement",2),i([r({type:u,converter:String})],k.prototype,"theme",2),k=i([m("nidoca-form-text")],k);var We=class extends k{constructor(){super(),this.type="date"}};We=i([m("nidoca-form-date")],We);var C=class extends O{constructor(){super(...arguments);this.theme="surface";this.infoText="";this.warningText="";this.errorText="";this.name="";this.value="";this.label="";this.required=!1;this.placeholder="";this.disabled=!1;this.rows=5}render(){return o` <style>
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

      ${this.infoText||this.warningText||this.errorText?o`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?o` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:o``}
              ${this.warningText?o` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:o``}
              ${this.errorText?o` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:o``}
            </div>
          `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};C.styles=c`
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
  `,i([r({type:u,converter:String})],C.prototype,"theme",2),i([r({type:String})],C.prototype,"infoText",2),i([r({type:String})],C.prototype,"warningText",2),i([r({type:String})],C.prototype,"errorText",2),i([r({type:String})],C.prototype,"name",2),i([r()],C.prototype,"value",2),i([r({type:String})],C.prototype,"label",2),i([r({type:Boolean})],C.prototype,"required",2),i([r({type:String})],C.prototype,"placeholder",2),i([r({type:Boolean})],C.prototype,"disabled",2),i([r({type:Number})],C.prototype,"rows",2),i([g("#inputElement")],C.prototype,"inputElement",2),C=i([m("nidoca-form-textarea")],C);var At=class extends O{constructor(){super(...arguments);this.theme="primary"}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return o`
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
    `}upload(){this.inputElement?.click()}};At.styles=c`
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
  `,i([r({type:u,converter:String})],At.prototype,"theme",2),i([g("#inputElement")],At.prototype,"inputElement",2),At=i([m("nidoca-form-upload")],At);var H=class extends O{constructor(){super();this.name="";this.label="";this.infoText="";this.errorText="";this.warningText="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="primary";this.theme=v.prototype.getParentTheme(this)||"plain"}render(){return o`
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

        ${this.infoText.length>0?o` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:o``}

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

      ${this.warningText?o` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:o``}
      ${this.errorText?o` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:o``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};H.styles=c`
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
  `,i([r({type:String})],H.prototype,"name",2),i([r({type:String})],H.prototype,"label",2),i([r({type:String})],H.prototype,"infoText",2),i([r({type:String})],H.prototype,"errorText",2),i([r({type:String})],H.prototype,"warningText",2),i([r({type:Boolean})],H.prototype,"required",2),i([r({type:Boolean})],H.prototype,"disabled",2),i([r({type:Boolean})],H.prototype,"checked",2),i([r({type:String})],H.prototype,"theme",2),i([g("#inputElement")],H.prototype,"inputElement",2),H=i([m("nidoca-form-switch")],H);var Q=class extends p{constructor(){super(...arguments);this.theme="primary";this.label="Newsletter";this.emailLabel="Deine Emailadresse";this.buttonLabel="Registrieren"}render(){return o`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Q.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([r({type:u,converter:String})],Q.prototype,"theme",2),i([r({type:String,converter:String})],Q.prototype,"label",2),i([r({type:String,converter:String})],Q.prototype,"emailLabel",2),i([r({type:String,converter:String})],Q.prototype,"buttonLabel",2),i([g("#form")],Q.prototype,"formComponent",2),Q=i([m("nidoca-form-newsletter")],Q);var F=class extends p{constructor(){super(...arguments);this.theme="primary";this.label="Passwort zur\xFCcksetzen";this.emailLabel="Deine Emailadresse";this.buttonLabel="Zur\xFCcksetzen"}render(){return o`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};F.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([r({type:u,converter:String})],F.prototype,"theme",2),i([r({type:String,converter:String})],F.prototype,"label",2),i([r({type:String,converter:String})],F.prototype,"emailLabel",2),i([r({type:String,converter:String})],F.prototype,"buttonLabel",2),i([g("#form")],F.prototype,"formComponent",2),F=i([m("nidoca-form-reset-password")],F);var I=class extends p{constructor(){super(...arguments);this.theme="surface";this.label="Passwort \xE4ndern";this.oldPasswordLabel="Altes Passwort";this.newPasswordLabel="Neues Passwort";this.repeatNewPasswordLabel="Wiederholen";this.buttonLabel="\xC4ndern";this.showErrorMessageSamePassword=!1;this.errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";this.showErrorMessagePasswordDiff=!1;this.errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein"}render(){return o`
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
        ${this.showErrorMessageSamePassword?o` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:o``}
        ${this.showErrorMessagePasswordDiff?o` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:o``}
      </nidoca-box>
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};I.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([r({type:u,converter:String})],I.prototype,"theme",2),i([r({type:String,converter:String})],I.prototype,"label",2),i([r({type:String,converter:String})],I.prototype,"oldPasswordLabel",2),i([r({type:String,converter:String})],I.prototype,"newPasswordLabel",2),i([r({type:String,converter:String})],I.prototype,"repeatNewPasswordLabel",2),i([r({type:String,converter:String})],I.prototype,"buttonLabel",2),i([g("#form")],I.prototype,"formComponent",2),i([g("#oldPassword")],I.prototype,"oldPasswordInputField",2),i([g("#newPassword")],I.prototype,"newPasswordInputField",2),i([g("#repeatNewPassword")],I.prototype,"repeatNewPasswordInputField",2),i([r()],I.prototype,"errorMessageSamePasswordLabel",2),i([r()],I.prototype,"errorMessagePasswordDiffLabel",2),I=i([m("nidoca-form-change-password")],I);var Y=class extends p{constructor(){super(...arguments);this.theme="primary";this.label="Registrieren";this.emailLabel="Email";this.passwordLabel="Passwort";this.buttonLabel="Registrieren"}render(){return o`
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
  `,i([r({type:u,converter:String})],Y.prototype,"theme",2),i([r({type:String,converter:String})],Y.prototype,"label",2),i([r({type:String,converter:String})],Y.prototype,"emailLabel",2),i([r({type:String,converter:String})],Y.prototype,"passwordLabel",2),i([r({type:String,converter:String})],Y.prototype,"buttonLabel",2),i([g("#form")],Y.prototype,"formComponent",2),Y=i([m("nidoca-form-register")],Y);var Xt=class extends p{constructor(){super(...arguments);this.code=""}render(){return o``}};Xt.styles=c``,i([r({type:String})],Xt.prototype,"code",2),Xt=i([m("nidoca-upload")],Xt);var Ct=class extends p{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return o`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};Ct.styles=c`
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
  `,i([r({type:u,converter:String})],Ct.prototype,"theme",2),i([r({type:String,converter:String})],Ct.prototype,"text",2),Ct=i([m("nidoca-hr")],Ct);var It=class extends p{constructor(){super(...arguments);this.text="";this.icon=""}render(){return o`
      <div class="container">
        ${this.icon?o` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:o``}
        ${this.text?o` <nidoca-text-button>${this.text}</nidoca-text-button>`:o``}
        <slot></slot>
      </div>
    `}static example(t=""){return o`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};It.styles=c`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,i([r({type:String})],It.prototype,"text",2),i([r({type:String})],It.prototype,"icon",2),It=i([m("nidoca-menu-area")],It);var q=class extends p{constructor(){super(...arguments);this.text="";this.icon="";this.selected=!1;this.theme="surface"}render(){return o`
      <style>
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?o` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:o``}
        ${this.text?o` <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>`:o``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};q.styles=c`
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
  `,i([r({type:String})],q.prototype,"text",2),i([r({type:String})],q.prototype,"icon",2),i([r({type:Boolean})],q.prototype,"selected",2),i([r({type:String})],q.prototype,"theme",2),q=i([m("nidoca-menu-item")],q);var zt=class extends p{constructor(){super(...arguments);this.theme="surface"}render(){return o` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((n,a)=>{if(a=="theme"&&this.slotElement!=null){let l=this.slotElement.assignedElements();for(let d=0;d<l.length;d++){let h=l[d];h instanceof q&&(h.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let n=this.slotElement.assignedElements();for(let a=0;a<n.length;a++){let l=n[a];if(l instanceof q){let d=l.getBoundingClientRect();d.left<t.x&&d.right>t.x&&(d.top<t.y&&d.bottom>t.y?l.selected=!0:l.selected=!1)}}}})}static example(t=""){return o`
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
    `}};zt.styles=c`
    :host,
    slot {
      display: block;
    }
  `,i([r({type:String})],zt.prototype,"theme",2),i([g("#slotElement")],zt.prototype,"slotElement",2),zt=i([m("nidoca-menu")],zt);var K=class extends p{constructor(){super(...arguments);this.height="auto";this.width="auto";this.left="auto";this.top="auto";this.right="auto";this.bottom="auto"}render(){return o`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,n,a,l,d,h){return"height:".concat(t).concat(";").concat("width:").concat(n).concat(";").concat("left:").concat(a).concat(";").concat("right:").concat(l).concat(";").concat("top:").concat(d).concat(";").concat("bottom:").concat(h).concat(";")}};K.styles=c`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,i([r({type:String})],K.prototype,"height",2),i([r({type:String})],K.prototype,"width",2),i([r({type:String})],K.prototype,"left",2),i([r({type:String})],K.prototype,"top",2),i([r({type:String})],K.prototype,"right",2),i([r({type:String})],K.prototype,"bottom",2),K=i([m("nidoca-layout-floating")],K);var Yt=class extends p{constructor(){super(...arguments);this.theme="plain"}render(){return o`
      ${v.getStyle(this.theme)}
      <slot></slot>
    `}};Yt.styles=c`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `,i([r({type:String})],Yt.prototype,"theme",2),Yt=i([m("nidoca-container")],Yt);var Ht=class extends p{constructor(){super();this.hideSidebox=!0;this.theme=v.prototype.getParentTheme(this)||"plain"}render(){return o` <style>
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
      ${this.hideSidebox?o``:o` <slot class="sidebox" name="sidebox"></slot>`}`}};Ht.styles=c`
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
  `,i([r({type:u,converter:String})],Ht.prototype,"theme",2),i([r({type:Boolean,converter:String})],Ht.prototype,"hideSidebox",2),Ht=i([m("nidoca-split-screen")],Ht);var V=class extends p{constructor(){super(...arguments);this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return o`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.title}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}async clicked(){if(this.clickable&&!this.deactivated){let t="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",t),this.dispatchEvent(new CustomEvent(t,{detail:this,bubbles:!0,composed:!0}))}}static example(t=""){return o`
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
  `,i([r({type:String})],V.prototype,"icon",2),i([r({type:Boolean})],V.prototype,"clickable",2),i([r({type:Boolean})],V.prototype,"deactivated",2),i([r({type:String})],V.prototype,"title",2),V=i([m("nidoca-icon")],V);var Kt=class extends p{render(){return o`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(this.rippleContainerElement!=null){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);let t=this.rippleContainerElement.getBoundingClientRect(),n=Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${n}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};Kt.styles=c`
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
  `,i([g("#rippleContainer")],Kt.prototype,"rippleContainerElement",2),Kt=i([m("nidoca-ripple")],Kt);var D=class extends p{constructor(){super(...arguments);this.src="";this.width="auto";this.height="auto";this.zoom=!1}render(){return this.src?o`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:o``}static example(t=""){return o`<nidoca-img width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img>`}};D.styles=c`
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
  `,i([r({type:String})],D.prototype,"src",2),i([r({type:String})],D.prototype,"width",2),i([r({type:String})],D.prototype,"height",2),i([r({type:Boolean})],D.prototype,"zoom",2),D=i([m("nidoca-img")],D);var Ot=class extends D{static example(e=""){return o`<nidoca-img-round width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img-round>`}};Ot.styles=c`
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
  `,Ot=i([m("nidoca-img-round")],Ot);var Dt=class extends p{constructor(){super(...arguments);this.theme="plain"}render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:o``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let n=t.target;if(n==null)return;let a=n.assignedElements();for(let l=0;l<a.length;l++){let d=a[l];if(d instanceof D){this.selected==null&&l==0&&(this.selected=d.cloneNode(!0)),d.addEventListener("click",f=>{f.target&&(this.selected=f.target.cloneNode(!0))}),d.width="148px";let h=d.classList;h.contains("img")||h.add("img")}}}};Dt.styles=c`
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
  `,i([r({type:u,converter:String})],Dt.prototype,"theme",2),i([Ci()],Dt.prototype,"selected",2),Dt=i([m("nidoca-img-slider")],Dt);var Jt=class extends p{constructor(){super(...arguments);this.src=""}render(){return o`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Jt.styles=c``,i([r({type:String})],Jt.prototype,"src",2),Jt=i([m("nidoca-movie")],Jt);var M=class extends p{constructor(){super(...arguments);this.label="";this.placeholder="";this.name="";this.min=1;this.max=10;this.errorText="";this.numberOne=1;this.numberTwo=1}render(){return o`
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
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,n){return Math.random()*(n-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};M.styles=c`
    :host {
      display: block;
      width: 100%;
    }
  `,i([r({type:u,converter:String})],M.prototype,"theme",2),i([r({type:String})],M.prototype,"label",2),i([r({type:String})],M.prototype,"placeholder",2),i([r({type:String})],M.prototype,"name",2),i([r({type:Number})],M.prototype,"min",2),i([r({type:Number})],M.prototype,"max",2),i([r({type:String})],M.prototype,"errorText",2),i([g("#inputfield")],M.prototype,"inputfield",2),M=i([m("nidoca-form-captcha")],M);var ut=class extends p{constructor(){super(...arguments);this.text="";this.href="";this.targetType="_self"}render(){return o`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};ut.styles=c`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,i([r({type:String})],ut.prototype,"text",2),i([r({type:String})],ut.prototype,"href",2),i([r({type:String})],ut.prototype,"targetType",2),ut=i([m("nidoca-link")],ut);var z=class extends p{constructor(){super(...arguments);this.theme="surface";this.primaryText="";this.secondaryText="";this.selected=!1}render(){return o`
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
          ${this.primaryText?o` <nidoca-text-body theme="${this.theme}" class="item">${this.primaryText} </nidoca-text-body>`:o``}
          <slot></slot>
          ${this.secondaryText?o` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-caption>`:o``}
          <slot name="secondary"></slot>
        </div>
        <slot name="right" class="item right"></slot>
      </div>
    `}switchSelected(){this.selected=!this.selected,this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this.selected,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-list-item
      theme="primary"
      slot="${t}"
      primaryText="List Item"
      secondaryText="List Item Secondary Text"
    >
      ${Ot.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};z.styles=c`
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
  `,i([r({type:u,converter:String})],z.prototype,"theme",2),i([r({type:String})],z.prototype,"primaryText",2),i([r({type:String})],z.prototype,"secondaryText",2),i([r({type:Boolean})],z.prototype,"selected",2),z=i([m("nidoca-list-item")],z);var st=class extends p{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return o`
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
    `}static example(){return o`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};st.styles=c`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,i([r({type:u,converter:String})],st.prototype,"theme",2),i([r({type:String})],st.prototype,"text",2),st=i([m("nidoca-list-section")],st);var ft=class extends p{constructor(){super(...arguments);this.theme="surface";this.multiselect=!1}updated(t){super.updated(t),t.forEach((n,a)=>{a=="theme"&&this.getItems().forEach(l=>{l.theme=this.theme})})}render(){return o`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let n=t.target;n.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let n=this.slotElement.assignedElements();for(let a=0;a<n.length;a++){let l=n[a];l instanceof z&&t.push(l)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let n=this.slotElement.assignedElements();for(let a=0;a<n.length;a++){let l=n[a];l instanceof z&&l.selected&&t.push(l)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let n=this.slotElement.assignedElements(),a=0;for(let l=0;l<n.length;l++){let d=n[l];d instanceof z&&(d.selected&&t.push(a),a++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return o`<nidoca-list theme="primary">
      ${st.example()} ${z.example()} ${z.example()} ${z.example()}
    </nidoca-list>`}};ft.styles=c`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,i([r({type:u,converter:String})],ft.prototype,"theme",2),i([r({type:Boolean})],ft.prototype,"multiselect",2),i([g("#slotElement")],ft.prototype,"slotElement",2),ft=i([m("nidoca-list")],ft);var Mt=class extends p{constructor(){super(...arguments);this.theme="primary";this.prominent=!1}render(){return o`
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
      ${this.prominent?o` <slot class="prominent" name="prominent"></slot>`:o``}
    `}static example(t=""){return o`
      <nidoca-top-app-bar slot="${t}" style="min-height: 48px;" theme="primary" prominent>
        <nidoca-text-body slot="center">Toolbar</nidoca-text-body>
        <nidoca-icon slot="left" style="padding-left:var(--space)" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" style="padding-right:var(--space)" icon="more_vert" clickable></nidoca-icon>
        <nidoca-search-bar theme="primary" slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>
    `}};Mt.styles=c`
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
  `,i([r({type:String,converter:String})],Mt.prototype,"theme",2),i([r({type:Boolean})],Mt.prototype,"prominent",2),Mt=i([m("nidoca-top-app-bar")],Mt);var gt=class extends p{constructor(){super(...arguments);this.headers=["column 1","column 2"];this.rows=[["row 1",new V],["row 2",new V]];this.theme="plain"}render(){return o`
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
            ${Lt([this.headers],()=>o` ${ht(this.headers,t=>o` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${Lt([this.rows],()=>o`
                  ${ht(this.rows,t=>o`
                        <tr>
                          ${ht(t,n=>o` <td colspan="1" rowspan="1">${n}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};gt.styles=c`
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
  `,i([r({type:Array})],gt.prototype,"headers",2),i([r({type:Array})],gt.prototype,"rows",2),i([r({type:u,converter:String})],gt.prototype,"theme",2),gt=i([m("nidoca-table")],gt);var bt=class extends p{constructor(){super(...arguments);this.selected=!1}render(){return this.selected?o` <slot></slot>`:o``}};bt.styles=c`
    :host,
    slot {
      display: block;
    }
  `,i([r({type:Boolean})],bt.prototype,"selected",2),bt=i([m("nidoca-tab-content")],bt);var J=class extends p{constructor(){super(...arguments);this.selected=!1;this.text="";this.theme="surface"}render(){return o`
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
        ${this.text?o` <nidoca-text text="${this.text}"></nidoca-text> `:o``}
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
  `,i([r({type:Boolean})],J.prototype,"selected",2),i([r({type:String})],J.prototype,"text",2),i([r({type:String})],J.prototype,"theme",2),J=i([m("nidoca-tab")],J);var at=class extends p{constructor(){super(...arguments);this.theme="surface";this.tabIndex=0}render(){return o`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),a=100/t.length,l=t[this.tabIndex];for(let d=0;d<t.length;d++){let h=t[d];h instanceof J&&(h.theme=this.theme,h.style.width=String(a).concat("%"),h==l?(h.selected=!0,h.classList.add("SELECTED")):(h.selected=!1,h.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let n=this.tabContentSlot.assignedElements();for(let a=0;a<n.length;a++){let l=n[a];l instanceof bt&&(this.tabIndex==t?l.selected=!0:l.selected=!1,t++)}}}tabClicked(t){let n=t.detail;this.changeTabIndex(n)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let n=this.tabSlot.assignedElements();for(let a=0;a<n.length;a++){let l=n[a];if(l instanceof J&&l==t){this.tabIndex=a;break}}}}static example(t=""){return o`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};at.styles=c`
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
  `,i([g("#tabSlot")],at.prototype,"tabSlot",2),i([g("#tabContentSlot")],at.prototype,"tabContentSlot",2),i([r({type:String})],at.prototype,"theme",2),i([r({type:Number})],at.prototype,"tabIndex",2),at=i([m("nidoca-tabs")],at);var N=class extends p{constructor(){super();this.hideLeft=!0;this.prominent=!1;document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let n=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-n.width}})}updated(t){super.updated(t)}render(){return o`
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
    `}};N.styles=c`
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
  `,i([r({type:Boolean})],N.prototype,"hideLeft",2),i([r({type:Boolean})],N.prototype,"prominent",2),i([g("#header")],N.prototype,"headerElement",2),i([g("#left")],N.prototype,"leftElement",2),i([g("#content")],N.prototype,"contentElement",2),N=i([m("nidoca-template")],N);var yt=class extends p{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{this.videoElement&&(this.videoElement.srcObject=t)})}render(){return o`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};yt.styles=c``,i([g("#video")],yt.prototype,"videoElement",2),i([g("#canvas")],yt.prototype,"canvasElement",2),i([g("#click-photo")],yt.prototype,"buttonElement",2),yt=i([m("nidoca-video")],yt);var Pt=class extends p{constructor(){super(...arguments);this.src="";this.canvasElements=[];this.storeCanvasElements=[]}render(){return o`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>o`${t}`)}
    `}updated(t){super.updated(t),t.forEach((n,a)=>{if(console.debug(`${this.tagName} : property ${String(a)} changed. oldValue: ${n}`),a=="src"){this.convert();let l=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let n=document.createElement("canvas");n.width=t[0],n.height=t[1];let a=n.getContext("2d");a&&this.img&&(this.img.crossOrigin="anonymous",a.drawImage(this.img,0,0,t[0],t[1]),n.toBlob(l=>{},"image/webp")),this.canvasElements.push(n)}),this.requestUpdate()})}};Pt.styles=c``,i([r({type:String})],Pt.prototype,"src",2),i([g("#img")],Pt.prototype,"img",2),Pt=i([m("nidoca-svg-2-webp")],Pt);var w=class extends p{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return o`<style>
        slot {
          color: var(--app-color-text-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}static example(t=""){return o`
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
    `}};w.styles=c`
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
  `,i([r({type:u,converter:String})],w.prototype,"theme",2),i([r({type:String})],w.prototype,"text",2),w=i([m("nidoca-text")],w);var se=class extends w{render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};se.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 105%;
    }
  `,se=i([m("nidoca-text-body")],se);var ae=class extends w{render(){return o`${super.render()}`}};ae.styles=c`
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
  `,ae=i([m("nidoca-text-button")],ae);var le=class extends w{};le.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,le=i([m("nidoca-text-overline")],le);var me=class extends w{render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};me.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 600;
      font-size: 105%;
    }
  `,me=i([m("nidoca-text-subtitle")],me);var P=class extends w{render(){return o`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};P.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.25em;
    }
  `,P=i([m("nidoca-text-caption")],P);var Xe=class extends P{render(){return o`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Xe=i([m("nidoca-text-error")],Xe);var Ye=class extends P{render(){return o`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ye=i([m("nidoca-text-success")],Ye);var Ke=class extends P{render(){return o`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ke=i([m("nidoca-text-warning")],Ke);var Je=class extends P{render(){return o`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Je=i([m("nidoca-text-info")],Je);var ce=class extends w{};ce.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,ce=i([m("nidoca-text-h1")],ce);var de=class extends w{};de.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `,de=i([m("nidoca-text-h2")],de);var pe=class extends w{};pe.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,pe=i([m("nidoca-text-h3")],pe);var he=class extends w{};he.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,he=i([m("nidoca-text-h4")],he);var ue=class extends w{};ue.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,ue=i([m("nidoca-text-h5")],ue);var fe=class extends w{};fe.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,fe=i([m("nidoca-text-h6")],fe);var tt=class extends p{constructor(){super(...arguments);this.value="";this.placeholder="";this.disabled=!1;this.theme="surface"}render(){return o`
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
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",n=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",n.type,JSON.stringify(n.detail)),this.dispatchEvent(n)}static example(t=""){return o`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};tt.styles=c`
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
  `,i([r({type:String})],tt.prototype,"value",2),i([r({type:String})],tt.prototype,"placeholder",2),i([r({type:Boolean})],tt.prototype,"disabled",2),i([g("#inputElement")],tt.prototype,"inputElement",2),i([r({type:u,converter:String})],tt.prototype,"theme",2),tt=i([m("nidoca-search-bar")],tt);var ge=class{static{this.CENTER="CENTER"}static{this.LEFT="LEFT"}static{this.RIGHT="RIGHT"}static{this.TOP="TOP"}static{this.BOTTOM="BOTTOM"}static{this.SLIDE_CENTER="SLIDE_CENTER"}static{this.SLIDE_LEFT="SLIDE_LEFT"}static{this.SLIDE_RIGHT="SLIDE_RIGHT"}static{this.SLIDE_TOP="SLIDE_TOP"}static{this.SLIDE_BOTTOM="SLIDE_BOTTOM"}},Bt=class extends p{constructor(){super(...arguments);this.transitionType=ge.CENTER;this.duration=.5}render(){return o` <div class="${_(this.transitionType)}"><slot></slot></div> `}};Bt.styles=c`
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
  `,i([r({type:String})],Bt.prototype,"transitionType",2),i([r({type:Number})],Bt.prototype,"duration",2),Bt=i([m("nidoca-transition")],Bt);var Zt=class extends p{constructor(){super(...arguments);this.show=!1}render(){return this.show?o`
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
        `:o``}};Zt.styles=c`
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
  `,i([r({type:Boolean})],Zt.prototype,"show",2),Zt=i([m("nidoca-dialog")],Zt);var et=class extends p{constructor(){super(...arguments);this.show=!1;this.title="Ja oder Nein ?";this.description="Entscheide dich";this.labelButtonYes="Ja";this.labelButtonNo="Nein"}render(){return o`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};et.styles=c``,i([r({type:Boolean})],et.prototype,"show",2),i([r({type:String})],et.prototype,"title",2),i([r({type:String})],et.prototype,"description",2),i([r({type:String})],et.prototype,"labelButtonYes",2),i([r({type:String})],et.prototype,"labelButtonNo",2),et=i([m("nidoca-dialog-decision")],et);var Qt=class extends p{constructor(){super(...arguments);this.icon=""}render(){return o`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `}static example(t="",n="surface"){return o`
      <nidoca-infobox slot="${t}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${n}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${n}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `}};Qt.styles=c`
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
  `,i([r({type:String})],Qt.prototype,"icon",2),Qt=i([m("nidoca-infobox")],Qt);var lt=class extends p{constructor(){super(...arguments);this.theme="surface";this.src="";this.title="";this.subtitle=""}render(){return o`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.src}"></nidoca-img-round>
                <div style="padding: var(--space);">
                <nidoca-text-body style="text-align:center;" theme="${this.theme}">${this.title}</nidoca-text-body>
                <nidoca-text-caption style="text-align:center;" theme="${this.theme}">${this.subtitle}</nidoca-text-caption>

  </div>
            </div>
            </div>`}static example(t=""){return o`<nidoca-avatar
      width="64px"
      width="64px"
      slot="${t}"
      title="Dominik Bruhn"
      subtitle="Softwareentwickler"
      src="face.jpg"
      >Dominik Bruhn</nidoca-avatar
    >`}};lt.styles=c`
    :host {
      display: block;
    }
  `,i([r({type:u,converter:String})],lt.prototype,"theme",2),i([r({type:String})],lt.prototype,"src",2),i([r({type:String})],lt.prototype,"title",2),i([r({type:String})],lt.prototype,"subtitle",2),lt=i([m("nidoca-avatar")],lt);var Ft=class extends p{constructor(){super(...arguments);this.theme="surface"}render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Ft.styles=c`
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
  `,i([r({type:u,converter:String})],Ft.prototype,"theme",2),Ft=i([m("nidoca-card")],Ft);var be=class extends p{render(){return o`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){let t=e.target;if(t==null)return;let n=t.assignedElements();for(let a=0;a<n.length;a++){let d=n[a].classList;d.contains("flexItem")||d.add("flexItem"),d.contains("flexItemDevice")||d.add("flexItemDevice")}}};be.styles=c`
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
  `,be=i([m("nidoca-gallery")],be);var ye=class extends p{render(){return o`<slot></slot>`}print(){let e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};ye.styles=c`
    :host {
      display: none;
    }
  `,ye=i([m("nidoca-print")],ye);var xe=class extends p{render(){return o`
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){let n=e.target.assignedElements(),a=n.length;for(let l=0;l<a;l++){let h=n[l].classList,f="item_count_"+a;h.contains(f)||h.add(f)}}};xe.styles=c`
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
  `,xe=i([m("nidoca-section")],xe);var ve=class extends p{render(){return o` <slot></slot>`}};ve.styles=c`
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
  `,ve=i([m("nidoca-dashboard")],ve);var we=class extends p{render(){return o` <slot></slot>`}};we.styles=c`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,we=i([m("nidoca-dashboard-box-25")],we);var $e=class extends p{render(){return o` <slot></slot>`}};$e.styles=c`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,$e=i([m("nidoca-dashboard-box-50")],$e);var ke=class extends p{render(){return o` <slot></slot>`}};ke.styles=c`
    :host {
      width: 100%;
      display: block;
    }
  `,ke=i([m("nidoca-dashboard-box-100")],ke);var Ut=class extends p{constructor(){super(...arguments);this.clickable=!0;this.title=""}render(){return o`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};Ut.styles=c`
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
  `,i([r({type:Boolean})],Ut.prototype,"clickable",2),i([r({type:String})],Ut.prototype,"title",2),Ut=i([m("nidoca-dashboard-card")],Ut);var Nt=class extends p{constructor(){super(...arguments);this.theme="plain"}render(){return o`
      ${v.getStyle(this.theme)}
      <slot></slot>
    `}};Nt.styles=c`
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
  `,i([r({type:u,converter:String})],Nt.prototype,"theme",2),Nt=i([m("nidoca-box")],Nt);var B=class extends p{constructor(){super(...arguments);this.theme="primary";this.label="Deine Nachricht";this.nameLabel="Dein Name";this.emailLabel="Deine Email";this.titleLabel="Betreff";this.messageLabel="Deine Nachricht";this.buttonLabel="Senden"}render(){return o`
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
  `,i([r({type:u,converter:String})],B.prototype,"theme",2),i([r({type:String,converter:String})],B.prototype,"label",2),i([r({type:String,converter:String})],B.prototype,"nameLabel",2),i([r({type:String,converter:String})],B.prototype,"emailLabel",2),i([r({type:String,converter:String})],B.prototype,"titleLabel",2),i([r({type:String,converter:String})],B.prototype,"messageLabel",2),i([r({type:String,converter:String})],B.prototype,"buttonLabel",2),i([g("#authenitcate-form")],B.prototype,"formComponent",2),B=i([m("nidoca-form-contact")],B);var Ee=class extends p{render(){return o`
     huhu xxx
    `}};Ee.styles=c``,Ee=i([m("nidoca-page-main")],Ee);var Se=class extends p{render(){return o`
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
  `,Se=i([m("nidoca-page-product-template")],Se);var Te=class extends p{render(){return o`
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
  `,Te=i([m("nidoca-page-imprint")],Te);var te=class extends p{constructor(){super(...arguments);this.cssVars=[]}firstUpdated(){let t=(n=document.styleSheets)=>{let a=[];return Array.from(n).forEach(l=>{Array.from(l.cssRules).forEach(d=>{if(!d||!d.style)return;let h=d.style;Array.from(h).forEach(f=>{f.startsWith("--")&&a.indexOf(f)==-1&&a.push(f)})})}),a};this.cssVars=t(),console.log(this.cssVars)}render(){return o`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${Lt([this.cssVars],()=>o`
                ${ht(this.cssVars,t=>o`
                    <nidoca-form-text
                      style="width:100%;padding-bottom: var(--space-3);"
                      @input="${n=>{document.documentElement.style.setProperty(t,n.target?n.target.getOutputData().value:"")}}"
                      type="${t.indexOf("color")>-1?"color":"text"}"
                      name="${t}"
                      value="${getComputedStyle(document.documentElement).getPropertyValue(t).trim()}"
                      label="${t}"
                    ></nidoca-form-text>
                  `)}
              `)}
        </nidoca-article>
      </nidoca-container>
    `}};te.styles=c``,i([r({type:Array})],te.prototype,"cssVars",2),te=i([m("nidoca-page-settings")],te);var _e=class extends p{render(){return o``}};_e.styles=c``,_e=i([m("nidoca-page-privacy")],_e);var Re=class extends p{render(){return o``}};Re.styles=c``,Re=i([m("nidoca-page-terms-of-use")],Re);var G=class s{constructor(){this.listeners=[],window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",e=>{if(!this.shouldIgnoreEvent(e)){let t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}})}static getUniqueInstance(){return s.uniqueInstance||(s.uniqueInstance=new s),s.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){if(e.indexOf("#")==-1&&(e="#".concat(e)),console.trace("navigate to: %s",e),t!=null&&console.trace("state: %s",JSON.stringify(t)),document.location.hash===e){console.trace("you are already on page: "+e);return}history.pushState(t,"",e),this.notifyListeners()}getCurrentState(){return history.state}getStateProperty(e){let t=this.getCurrentState();return t!=null?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){let e=this.getCurrentPage();this.listeners.forEach(t=>t.routeChanged(e))}shouldIgnoreEvent(e){return e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(let n of e.composedPath?e.composedPath():[])if(this.isAnchor(n))return n;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&e.nodeName.toLowerCase()==="a"}shouldIgnoreAnchor(e){return!!(e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){let t=e.port,n=e.protocol,d=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${d}`}};var Le=class extends p{constructor(){super();this.content=o``;G.getUniqueInstance().subscribe(this),this.routeChanged(G.getUniqueInstance().getCurrentPage())}routeChanged(t){switch(t){case"privacy":this.content=o`<nidoca-page-privacy></nidoca-page-privacy>`;break;case"imprint":this.content=o`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"settings":this.content=o`<nidoca-page-settings></nidoca-page-settings>`;break;case"terms-of-use":this.content=o`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"product-template":this.content=o`<nidoca-page-product-template></nidoca-page-product-template>`;break;case"main":this.content=o`<nidoca-page-main></nidoca-page-main>`;break;default:this.content=o`<nidoca-page-main></nidoca-page-main>`}}render(){return o`
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
            text="Produkt-Template"
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#product-template")}}"
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
    `}};i([r({type:Object})],Le.prototype,"content",2),Le=i([m("nidoca-my-app")],Le);})();
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
