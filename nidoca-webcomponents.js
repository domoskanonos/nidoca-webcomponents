"use strict";(()=>{var Pr=Object.defineProperty;var Mr=Object.getOwnPropertyDescriptor;var r=(a,e,t,i)=>{for(var n=i>1?void 0:i?Mr(e,t):e,l=a.length-1,m;l>=0;l--)(m=a[l])&&(n=(i?m(e,t,n):m(n))||n);return i&&n&&Pr(e,t,n),n};var tr=class a{constructor(){this.listeners=[];window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",e=>{if(!this.shouldIgnoreEvent(e)){let t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}})}static getUniqueInstance(){return a.uniqueInstance||(a.uniqueInstance=new a),a.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){if(e.indexOf("#")==-1&&(e="#".concat(e)),console.trace("navigate to: %s",e),t!=null&&console.trace("state: %s",JSON.stringify(t)),document.location.hash===e){console.trace("you are already on page: "+e);return}history.pushState(t,"",e),this.notifyListeners()}getCurrentState(){return history.state}getStateProperty(e){let t=this.getCurrentState();return t!=null?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){let e=this.getCurrentPage();this.listeners.forEach(t=>t.routeChanged(e))}shouldIgnoreEvent(e){return e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(let i of e.composedPath?e.composedPath():[])if(this.isAnchor(i))return i;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&e.nodeName.toLowerCase()==="a"}shouldIgnoreAnchor(e){return!!(e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){let t=e.port,i=e.protocol,m=i==="http:"&&t==="80"||i==="https:"&&t==="443"?e.hostname:e.host;return`${i}//${m}`}};var er=class a{static generateImageBase64(e,t,i){let n=document.createElement("canvas");n.width=128,n.height=128;let l=n.getContext("2d");if(!l)throw new Error("Canvas context is not available");l.fillStyle=i,l.fillRect(0,0,n.width,n.height),l.fillStyle=t;let m=document.body,h=getComputedStyle(m).getPropertyValue("--font-family")||"Arial";l.font=`bold 64px ${h}`,l.textAlign="center",l.textBaseline="alphabetic";let v=e.charAt(0).toUpperCase(),k=l.measureText(v),b=k.actualBoundingBoxAscent-k.actualBoundingBoxDescent;return l.fillText(v,n.width/2,n.height/2+b/2),n.toDataURL("image/png")}static renderImgText(e){return a.generateImageBase64(e,"#555555","#ffffff")}};var Ve=class a{constructor(e,t,i){this.db=null;this.dbName=e,this.storeName=t,this.keyField=i}static{this.DB_VERSION=2}async openDatabase(){this.db=await new Promise((e,t)=>{let i=indexedDB.open(this.dbName,a.DB_VERSION);i.onupgradeneeded=()=>{let n=i.result;console.log(`onupgradeneeded triggered. Aktuelle Version: ${n.version}`),n.objectStoreNames.contains(this.storeName)||(n.createObjectStore(this.storeName,{keyPath:this.keyField}),console.log(`Object Store '${this.storeName}' mit KeyPath '${String(this.keyField)}' erstellt.`))},i.onsuccess=()=>{console.log(`IndexedDB '${this.dbName}' ge\xF6ffnet.`),e(i.result)},i.onerror=()=>{console.error("Fehler beim \xD6ffnen der Datenbank:",i.error),t(new Error(i.error?.message||"Unknown error"))},i.onblocked=()=>{console.warn("Datenbank wird von einer anderen Verbindung blockiert."),t(new Error("Datenbank ist blockiert."))}})}async add(e){return new Promise((t,i)=>{if(this.db){console.log("add() called");let m=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).add(e);m.onsuccess=()=>t(),m.onerror=()=>i(m.error)}})}async update(e){let t=await this.openDatabase();return new Promise((i,n)=>{if(this.db){let u=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).put(e);u.onsuccess=()=>i(),u.onerror=()=>n(u.error)}})}async delete(e){return new Promise((t,i)=>{if(this.db){let m=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).delete(e);m.onsuccess=()=>t(),m.onerror=()=>i(m.error)}})}async get(e){return new Promise((t,i)=>{if(this.db){let m=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).get(e);m.onsuccess=()=>t(m.result),m.onerror=()=>i(m.error)}})}async getAll(){return new Promise((e,t)=>{if(this.db){let l=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).getAll();l.onsuccess=()=>e(l.result),l.onerror=()=>t(l.error)}})}close(){this.db?.close()}},rr=class{constructor(){this.name="";this.email=null;this.phone=null;this.energy=0;this.image=null}},ir=class{constructor(){this.id=null;this.myself=null;this.friends=[];this.goals=[]}},nr=class{constructor(){this.description="";this.time_min=0;this.time_max=0;this.energy=0;this.image=""}},or=class{constructor(){this.name="";this.actions=[]}},sr=class{constructor(){this.title="";this.description="";this.image="";this.actions=[];this.routines=[]}};(async()=>{let a=new Ve("AppDatabase","Karmatica","id");await a.openDatabase();let e={id:1,myself:{name:"Dominik Bruhn",email:"dominikbruhn@googlemail.com",phone:"015205248862",energy:1,image:null},friends:[{name:"Nico Bruhn",email:null,phone:null,energy:1,image:null},{name:"Christoph Juretko",email:null,phone:null,energy:.6,image:null},{name:"Tim Poloczek",email:null,phone:null,energy:.5,image:null},{name:"Dennis Ratzer",email:null,phone:null,energy:.4,image:null},{name:"Nicole Eckert",email:null,phone:null,energy:.4,image:null},{name:"Stefan Harzke",email:null,phone:null,energy:.6,image:null},{name:"Denis Ergashbaev",email:null,phone:null,energy:.6,image:null},{name:"Bastian \xDCckermann",email:null,phone:null,energy:.2,image:null},{name:"Daniela Meyer zu Ummeln",email:null,phone:null,energy:0,image:null},{name:"Mark Enger",email:null,phone:null,energy:.3,image:null},{name:"Matthias Manasterni",email:null,phone:null,energy:.6,image:null},{name:"Dejan Guberinic",email:null,phone:null,energy:.5,image:null},{name:"Carina Bruhn",email:null,phone:null,energy:0,image:null}],goals:[{title:"Intellektuelle Steigerung",description:"Wachstum und Entwicklung der intellektuellen F\xE4higkeiten einer Person.",image:null,actions:[{description:"Neue Themen lernen",time_min:15,time_max:240,energy:.9,image:null},{description:"Ein Buch lesen",time_min:15,time_max:180,energy:.8,image:null},{description:"Objektive Nachrichten lesen",time_min:15,time_max:30,energy:0,image:null}],routines:[]},{title:"Fit und gesund",description:"Einen gesunden Lebensstil und k\xF6rperliche Fitness aufrechterhalten.",image:null,actions:[{description:"Gesund einkaufen und essen",time_min:30,time_max:null,energy:1,image:null},{description:"Vitamin-D-Tablette im Winter einnehmen",time_min:0,time_max:null,energy:.4,image:null},{description:"Schlafen",time_min:480,time_max:480,energy:1,image:null},{description:"Koffein, Alkohol und Rauchen vermeiden",time_min:0,time_max:null,energy:.8,image:null},{description:"Laufen",time_min:120,time_max:120,energy:1,image:null},{description:"Gym",time_min:120,time_max:120,energy:1,image:null},{description:"Fu\xDFball spielen",time_min:90,time_max:90,energy:1,image:null},{description:"Schwimmen gehen",time_min:120,time_max:240,energy:.5,image:null},{description:"Fitness-Workout",time_min:30,time_max:30,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]},{title:"Guter Papa",description:"Ein unterst\xFCtzender und pr\xE4senter Papa sein.",image:null,actions:[{description:"Lego spielen",time_min:10,time_max:120,energy:.9,image:null},{description:"Gesellschaftsspiele spielen",time_min:30,time_max:180,energy:.8,image:null},{description:"Ins Kino gehen",time_min:120,time_max:180,energy:.7,image:null},{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null}],routines:[]},{title:"Gl\xFCcklich sein",description:"Langfristiges Gl\xFCck und Zufriedenheit erreichen.",image:null,actions:[{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null},{description:"Urlaub machen",time_min:1440,time_max:40320,energy:1,image:null},{description:"Flohmarkt besuchen",time_min:45,time_max:120,energy:.6,image:null},{description:"Spazieren gehen",time_min:30,time_max:180,energy:.4,image:null},{description:"Massage bekommen",time_min:80,time_max:200,energy:.9,image:null},{description:"Computerspiele spielen",time_min:20,time_max:180,energy:0,image:null},{description:"Ein Buch lesen",time_min:15,time_max:180,energy:.8,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Gute Musik h\xF6ren",time_min:0,time_max:null,energy:.8,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Boden wischen",time_min:45,time_max:45,energy:.7,image:null},{description:"Fitness-Workout",time_min:30,time_max:30,energy:.9,image:null},{description:"Kurzer Schlaf zur Wiederherstellung der Energie",time_min:10,time_max:30,energy:.8,image:null},{description:"\xDCber Dinge nachdenken, f\xFCr die man dankbar ist",time_min:5,time_max:20,energy:.9,image:null},{description:"Mit geliebten Menschen in Kontakt bleiben",time_min:10,time_max:120,energy:.8,image:null}],routines:[]},{title:"Resiliente Person",description:"Eine resiliente und entspannte Person sein.",image:null,actions:[{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null},{description:"Spazieren gehen",time_min:30,time_max:180,energy:.4,image:null},{description:"Massage bekommen",time_min:80,time_max:200,energy:.9,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Gute Musik h\xF6ren",time_min:0,time_max:null,energy:.8,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Kurzer Schlaf zur Wiederherstellung der Energie",time_min:10,time_max:30,energy:.8,image:null},{description:"\xDCber Dinge nachdenken, f\xFCr die man dankbar ist",time_min:5,time_max:20,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]},{title:"Sicherheit",description:"Ein gutes Gef\xFChl von Sicherheit haben.",image:null,actions:[{description:"Vorr\xE4te und Krisenwerkzeuge einrichten",time_min:0,time_max:120,energy:.6,image:null},{description:"Finanzen kontinuierlich optimieren",time_min:10,time_max:60,energy:.2,image:null},{description:"In Verm\xF6genswerte f\xFCr Wachstum investieren",time_min:10,time_max:60,energy:.2,image:null}],routines:[]},{title:"Finanzielle Freiheit",description:"Finanzielle Unabh\xE4ngigkeit erreichen.",image:null,actions:[{description:"Minimalistisch leben. Konsum minimieren.",time_min:0,time_max:null,energy:.7,image:null},{description:"Finanzen kontinuierlich optimieren",time_min:10,time_max:60,energy:.2,image:null},{description:"In Verm\xF6genswerte f\xFCr Wachstum investieren",time_min:10,time_max:60,energy:.2,image:null}],routines:[]},{title:"F\xFCr immer leben",description:"In der Lage sein, f\xFCr immer zu leben.",image:null,actions:[{description:"Gesund einkaufen und essen",time_min:30,time_max:null,energy:1,image:null},{description:"Schlafen",time_min:480,time_max:480,energy:1,image:null},{description:"Koffein, Alkohol und Rauchen vermeiden",time_min:0,time_max:null,energy:.8,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]}]};a.add(e),a.close(),console.log("Karmatica erfolgreich in die IndexedDB eingef\xFCgt!")})();var ar=class{async getAll(e){if(!e)return[];try{let t=await fetch(e);if(!t.ok)throw new Error(`Failed to fetch data: ${t.status}`);return await t.json()}catch(t){return console.error("Error fetching data:",t),[]}}};var Ee=class{static capitalizeFirstLetter(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}};var we=globalThis,ke=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),lr=new WeakMap,te=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ke&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=lr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&lr.set(t,e))}return e}toString(){return this.cssText}},mr=a=>new te(typeof a=="string"?a:a+"",void 0,Ge),p=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((i,n,l)=>i+(m=>{if(m._$cssResult$===!0)return m.cssText;if(typeof m=="number")return m;throw Error("Value passed to 'css' function must be a 'css' function result: "+m+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+a[l+1],a[0]);return new te(t,a,Ge)},cr=(a,e)=>{if(ke)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let i=document.createElement("style"),n=we.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,a.appendChild(i)}},Ke=ke?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return mr(t)})(a):a;var{is:Dr,defineProperty:Br,getOwnPropertyDescriptor:qr,getOwnPropertyNames:jr,getOwnPropertySymbols:Ur,getPrototypeOf:Vr}=Object,Se=globalThis,pr=Se.trustedTypes,Gr=pr?pr.emptyScript:"",Kr=Se.reactiveElementPolyfillSupport,ee=(a,e)=>a,re={toAttribute(a,e){switch(e){case Boolean:a=a?Gr:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},_e=(a,e)=>!Dr(a,e),dr={attribute:!0,type:String,converter:re,reflect:!1,useDefault:!1,hasChanged:_e};Symbol.metadata??=Symbol("metadata"),Se.litPropertyMetadata??=new WeakMap;var et=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=dr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Br(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){let{get:n,set:l}=qr(this.prototype,e)??{get(){return this[t]},set(m){this[t]=m}};return{get:n,set(m){let u=n?.call(this);l?.call(this,m),this.requestUpdate(e,u,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??dr}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;let e=Vr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){let t=this.properties,i=[...jr(t),...Ur(t)];for(let n of i)this.createProperty(n,t[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[t,i]of this.elementProperties){let n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(Ke(n))}else e!==void 0&&t.push(Ke(e));return t}static _$Eu(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){let i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(n!==void 0&&i.reflect===!0){let l=(i.converter?.toAttribute!==void 0?i.converter:re).toAttribute(t,i.type);this._$Em=e,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Em=null}}_$AK(e,t){let i=this.constructor,n=i._$Eh.get(e);if(n!==void 0&&this._$Em!==n){let l=i.getPropertyOptions(n),m=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:re;this._$Em=n;let u=m.fromAttribute(t,l.type);this[n]=u??this._$Ej?.get(n)??u,this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){let n=this.constructor,l=this[e];if(i??=n.getPropertyOptions(e),!((i.hasChanged??_e)(l,t)||i.useDefault&&i.reflect&&l===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:n,wrapped:l},m){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,m??t??this[e]),l!==!0||m!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,l]of i){let{wrapped:m}=l,u=this[n];m!==!0||this._$AL.has(n)||u===void 0||this.C(n,void 0,l,u)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};et.elementStyles=[],et.shadowRootOptions={mode:"open"},et[ee("elementProperties")]=new Map,et[ee("finalized")]=new Map,Kr?.({ReactiveElement:et}),(Se.reactiveElementVersions??=[]).push("2.1.1");var Ye=globalThis,Te=Ye.trustedTypes,hr=Te?Te.createPolicy("lit-html",{createHTML:a=>a}):void 0,We="$lit$",rt=`lit$${Math.random().toFixed(9).slice(2)}$`,Je="?"+rt,Xr=`<${Je}>`,xt=document,ne=()=>xt.createComment(""),oe=a=>a===null||typeof a!="object"&&typeof a!="function",Ze=Array.isArray,yr=a=>Ze(a)||typeof a?.[Symbol.iterator]=="function",Xe=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ur=/-->/g,fr=/>/g,gt=RegExp(`>|${Xe}(?:([^\\s"'>=/]+)(${Xe}*=${Xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gr=/'/g,br=/"/g,vr=/^(?:script|style|textarea|title)$/i,Qe=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),o=Qe(1),ci=Qe(2),pi=Qe(3),B=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),xr=new WeakMap,bt=xt.createTreeWalker(xt,129);function $r(a,e){if(!Ze(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return hr!==void 0?hr.createHTML(e):e}var Er=(a,e)=>{let t=a.length-1,i=[],n,l=e===2?"<svg>":e===3?"<math>":"",m=ie;for(let u=0;u<t;u++){let h=a[u],v,k,b=-1,w=0;for(;w<h.length&&(m.lastIndex=w,k=m.exec(h),k!==null);)w=m.lastIndex,m===ie?k[1]==="!--"?m=ur:k[1]!==void 0?m=fr:k[2]!==void 0?(vr.test(k[2])&&(n=RegExp("</"+k[2],"g")),m=gt):k[3]!==void 0&&(m=gt):m===gt?k[0]===">"?(m=n??ie,b=-1):k[1]===void 0?b=-2:(b=m.lastIndex-k[2].length,v=k[1],m=k[3]===void 0?gt:k[3]==='"'?br:gr):m===br||m===gr?m=gt:m===ur||m===fr?m=ie:(m=gt,n=void 0);let x=m===gt&&a[u+1].startsWith("/>")?" ":"";l+=m===ie?h+Xr:b>=0?(i.push(v),h.slice(0,b)+We+h.slice(b)+rt+x):h+rt+(b===-2?u:x)}return[$r(a,l+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},se=class a{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let l=0,m=0,u=e.length-1,h=this.parts,[v,k]=Er(e,t);if(this.el=a.createElement(v,i),bt.currentNode=this.el.content,t===2||t===3){let b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(n=bt.nextNode())!==null&&h.length<u;){if(n.nodeType===1){if(n.hasAttributes())for(let b of n.getAttributeNames())if(b.endsWith(We)){let w=k[m++],x=n.getAttribute(b).split(rt),R=/([.?@])?(.*)/.exec(w);h.push({type:1,index:l,name:R[2],strings:x,ctor:R[1]==="."?Le:R[1]==="?"?Ce:R[1]==="@"?Ae:vt}),n.removeAttribute(b)}else b.startsWith(rt)&&(h.push({type:6,index:l}),n.removeAttribute(b));if(vr.test(n.tagName)){let b=n.textContent.split(rt),w=b.length-1;if(w>0){n.textContent=Te?Te.emptyScript:"";for(let x=0;x<w;x++)n.append(b[x],ne()),bt.nextNode(),h.push({type:2,index:++l});n.append(b[w],ne())}}}else if(n.nodeType===8)if(n.data===Je)h.push({type:2,index:l});else{let b=-1;for(;(b=n.data.indexOf(rt,b+1))!==-1;)h.push({type:7,index:l}),b+=rt.length-1}l++}}static createElement(e,t){let i=xt.createElement("template");return i.innerHTML=e,i}};function yt(a,e,t=a,i){if(e===B)return e;let n=i!==void 0?t._$Co?.[i]:t._$Cl,l=oe(e)?void 0:e._$litDirective$;return n?.constructor!==l&&(n?._$AO?.(!1),l===void 0?n=void 0:(n=new l(a),n._$AT(a,t,i)),i!==void 0?(t._$Co??=[])[i]=n:t._$Cl=n),n!==void 0&&(e=yt(a,n._$AS(a,e.values),n,i)),e}var Re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??xt).importNode(t,!0);bt.currentNode=n;let l=bt.nextNode(),m=0,u=0,h=i[0];for(;h!==void 0;){if(m===h.index){let v;h.type===2?v=new Bt(l,l.nextSibling,this,e):h.type===1?v=new h.ctor(l,h.name,h.strings,this,e):h.type===6&&(v=new Oe(l,this,e)),this._$AV.push(v),h=i[++u]}m!==h?.index&&(l=bt.nextNode(),m++)}return bt.currentNode=xt,n}p(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Bt=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=yt(this,e,t),oe(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(xt.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=se.createElement($r(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{let l=new Re(n,this),m=l.u(this.options);l.p(t),this.T(m),this._$AH=l}}_$AC(e){let t=xr.get(e.strings);return t===void 0&&xr.set(e.strings,t=new se(e)),t}k(e){Ze(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let l of e)n===t.length?t.push(i=new a(this.O(ne()),this.O(ne()),this,this.options)):i=t[n],i._$AI(l),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},vt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,l){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=l,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(e,t=this,i,n){let l=this.strings,m=!1;if(l===void 0)e=yt(this,e,t,0),m=!oe(e)||e!==this._$AH&&e!==B,m&&(this._$AH=e);else{let u=e,h,v;for(e=l[0],h=0;h<l.length-1;h++)v=yt(this,u[i+h],t,h),v===B&&(v=this._$AH[h]),m||=!oe(v)||v!==this._$AH[h],v===S?e=S:e!==S&&(e+=(v??"")+l[h+1]),this._$AH[h]=v}m&&!n&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Le=class extends vt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},Ce=class extends vt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},Ae=class extends vt{constructor(e,t,i,n,l){super(e,t,i,n,l),this.type=5}_$AI(e,t=this){if((e=yt(this,e,t,0)??S)===B)return;let i=this._$AH,n=e===S&&i!==S||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,l=e!==S&&(i===S||n);n&&this.element.removeEventListener(this.name,this,i),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Oe=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){yt(this,e)}},wr={M:We,P:rt,A:Je,C:1,L:Er,R:Re,D:yr,V:yt,I:Bt,H:vt,N:Ce,U:Ae,B:Le,F:Oe},Yr=Ye.litHtmlPolyfillSupport;Yr?.(se,Bt),(Ye.litHtmlVersions??=[]).push("3.3.1");var kr=(a,e,t)=>{let i=t?.renderBefore??e,n=i._$litPart$;if(n===void 0){let l=t?.renderBefore??null;i._$litPart$=n=new Bt(e.insertBefore(ne(),l),l,void 0,t??{})}return n._$AI(a),n};var Fe=globalThis,V=class extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=kr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};V._$litElement$=!0,V.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:V});var Wr=Fe.litElementPolyfillSupport;Wr?.({LitElement:V});(Fe.litElementVersions??=[]).push("4.2.1");var f=(n=>(n.primary="primary",n.secondary="secondary",n.surface="surface",n.plain="plain",n))(f||{}),y=class{static getStyle(e){return e?e=="plain"?o``:o` <style>
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
          </style>`:o``}static getOposite(e){return e=="plain"?"surface":e=="primary"||e=="primary"?"secondary":e=="secondary"?"primary":"plain"}getParentTheme(e){let t=e;for(;t!=null;){if(t.theme!=null)return t.theme;t=t.parentElement}}};var c=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};var Jr={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:_e},Zr=(a=Jr,e,t)=>{let{kind:i,metadata:n}=t,l=globalThis.litPropertyMetadata.get(n);if(l===void 0&&globalThis.litPropertyMetadata.set(n,l=new Map),i==="setter"&&((a=Object.create(a)).wrapped=!0),l.set(t.name,a),i==="accessor"){let{name:m}=t;return{set(u){let h=e.get.call(this);e.set.call(this,u),this.requestUpdate(m,h,a)},init(u){return u!==void 0&&this.C(m,void 0,a,u),u}}}if(i==="setter"){let{name:m}=t;return function(u){let h=this[m];e.call(this,u),this.requestUpdate(m,h,a)}}throw Error("Unsupported decorator location: "+i)};function s(a){return(e,t)=>typeof t=="object"?Zr(a,e,t):((i,n,l)=>{let m=n.hasOwnProperty(l);return n.constructor.createProperty(l,i),m?Object.getOwnPropertyDescriptor(n,l):void 0})(a,e,t)}function qt(a){return s({...a,state:!0,attribute:!1})}var $t=(a,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(a,e,t),t);function g(a,e){return(t,i,n)=>{let l=m=>m.renderRoot?.querySelector(a)??null;if(e){let{get:m,set:u}=typeof i=="object"?t:n??(()=>{let h=Symbol();return{get(){return this[h]},set(v){this[h]=v}}})();return $t(t,i,{get(){let h=m.call(this);return h===void 0&&(h=l(this),(h!==null||this.hasUpdated)&&u.call(this,h)),h}})}return $t(t,i,{get(){return l(this)}})}}var d=class extends V{constructor(){super(...arguments);this.theme="plain"}throwCustomEvent(t,i){this.dispatchEvent(new CustomEvent(t,{detail:i,bubbles:!0,composed:!0}))}};r([s({type:f,converter:String})],d.prototype,"theme",2);var Sr=class{constructor(e,t,i=10240){this.key=e;this.minWidth=t;this.maxWidth=i}asMediaStyle(e){let t="@media ";return this.minWidth&&(t=t.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(t=t.concat(" and "))),this.maxWidth&&(t=t.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),t=t.concat("{"),t=t.concat(e),t=t.concat("} "),t}};var J=class extends d{constructor(){super(...arguments);this.key=null;this.item={};this.title=""}updated(t){t.has("item")&&(this.title=this.item.constructor.name)}render(){return o`
    <nidoca-container>
      <nidoca-top-app-bar style="min-height: 48px;" prominent>
          <nidoca-text-body slot="left">${this.title}</nidoca-text-body>
          <nidoca-icon slot="right" style="padding-right:var(--space)" icon="save" @click="${()=>this.saveItem()}"></nidoca-icon>
          <nidoca-icon slot="right" style="padding-right:var(--space)" icon="delete" @click="${()=>this.deleteItem()}"></nidoca-icon>
          <nidoca-icon slot="right" style="padding-right:var(--space)" icon="cancel" @click="${()=>this.cancel()}" clickable ></nidoca-icon>
        </nidoca-top-app-bar>
      <nidoca-form id="form">
        ${this.renderFormFields()}
        <input type="hidden" name="${this.key}" value="${this.item[this.key]}"/>
      </nidoca-form>
    </nidoca-container>
    `}renderFormFields(){let t=[];for(let[i,n]of Object.entries(this.item)){let l=Ee.capitalizeFirstLetter(i),m;switch(typeof n){case"boolean":m=o`
            <nidoca-form-switch
              style="padding-bottom:var(--space-2);"
              label="${l}"
              name="${i}"
              .value="${n||""}"
            ></nidoca-form-switch>
          `;break;case"string":m=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${l}"
              name="${i}"
              .value="${n||""}"
            ></nidoca-form-text>
          `;break;case"number":m=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${l}"
              name="${i}"
              type="number"
              .value="${n||""}"
            ></nidoca-form-text>
          `;break;default:m=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${l}"
              name="${i}"
              .value="${n&&JSON.stringify(n)}"
            ></nidoca-form-text>
          `}t.push(m)}return o`${t}`}deleteItem(){this.formComponent!=null&&(console.log("item deleted."),this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-deleted",this.item))}updateItem(){this.formComponent!=null&&this.formComponent.validate()&&(this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-updated",this.item))}saveItem(){this.formComponent!=null&&this.formComponent.validate()&&(this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-saved",this.item))}cancel(){this.throwCustomEvent("nidoca-event-generic-edit-cancel",this.item)}};r([s({type:Object})],J.prototype,"key",2),r([s({type:Object})],J.prototype,"item",2),r([s({type:String})],J.prototype,"title",2),r([g("#form")],J.prototype,"formComponent",2),J=r([c("nidoca-generic-edit")],J);var Et=class extends d{render(){return o`
    <nidoca-container>
      <nidoca-search-bar></nidoca-search-bar>
      <nidoca-list id="listElement">
        <slot></slot>
      </nidoca-list>
    </nidoca-container>
    `}};r([g("#listElement")],Et.prototype,"slotElement",2),Et=r([c("nidoca-list-search")],Et);var wt=class extends d{constructor(){super(...arguments);this.listView=!0;this.edit=null;this.listSearch=null}render(){return o`<slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}updated(t){super.updated(t),t.has("listSearch"),this.listView}slotChanged(t){let i=t.target;if(i==null)return;let n=i.assignedElements();for(let l=0;l<n.length;l++){let m=n[l];m instanceof Et&&(this.listSearch=m),m instanceof J&&(this.edit=m)}}};r([qt()],wt.prototype,"listView",2),r([qt()],wt.prototype,"edit",2),r([qt()],wt.prototype,"listSearch",2),wt=r([c("nidoca-crud")],wt);var G=class extends d{constructor(){super(...arguments);this.theme="surface";this.header="";this.opened=!1}render(){return o`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?o` <slot></slot>`:o``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=!this.opened,console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};G.styles=p`
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
  `,r([s({type:f,converter:String})],G.prototype,"theme",2),r([s({type:String})],G.prototype,"header",2),r([s({type:Boolean})],G.prototype,"opened",2),G=r([c("nidoca-accordion-item")],G);var T=class extends d{constructor(){super(...arguments);this.theme="plain";this.overline="";this.title="";this.summary="";this.text=""}render(){return o`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?o` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:o``}
        ${this.title?o` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:o``}
        ${this.summary?o`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:o``}
        ${this.text?o` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:o``}
        <slot></slot>
      </div>
    `}static example(t="",i="plain"){return o`<nidoca-article
      theme="${i}"
      slot="${t}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`}};T.styles=p`
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
  `,r([s({type:f,converter:String})],T.prototype,"theme",2),r([s({type:String})],T.prototype,"overline",2),r([s({type:String})],T.prototype,"title",2),r([s({type:String})],T.prototype,"summary",2),r([s({type:String})],T.prototype,"text",2),T=r([c("nidoca-article")],T);var _r=(t=>(t.single="single",t.multi="multi",t))(_r||{}),lt=class extends d{constructor(){super(...arguments);this.theme="plain";this.accordionType="single"}updated(t){super.updated(t),t.forEach((i,n)=>{if(n=="theme"&&this.accordionSlot!=null){let l=this.accordionSlot.assignedElements();for(let m=0;m<l.length;m++){let u=l[m];u instanceof G&&(u.theme=this.theme)}}})}render(){return o`
      ${y.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let i=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let n=this.accordionSlot.assignedElements();for(let l=0;l<n.length;l++){let m=n[l];m instanceof G&&m!=i&&(m.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return o`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${T.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${T.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${T.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${T.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};lt.styles=p`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,r([s({type:f,converter:String})],lt.prototype,"theme",2),r([s({type:_r,converter:String})],lt.prototype,"accordionType",2),r([g("#accordionSlot")],lt.prototype,"accordionSlot",2),lt=r([c("nidoca-accordion")],lt);var Tr=(n=>(n.none="none",n.shadow_1="shadow_1",n.shadow_2="shadow_2",n.shadow_3="shadow_3",n))(Tr||{}),K=class extends d{constructor(){super(...arguments);this.theme="primary";this.shadowType="shadow_1";this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return o`
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
    `}};K.styles=p`
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
  `,r([s({type:String})],K.prototype,"theme",2),r([s({type:Object})],K.prototype,"shadowType",2),r([s({type:String})],K.prototype,"icon",2),r([s({type:Boolean})],K.prototype,"clickable",2),r([s({type:Boolean})],K.prototype,"deactivated",2),r([s({type:String})],K.prototype,"title",2),K=r([c("nidoca-icon-extended")],K);var Rr=(n=>(n[n.current=0]="current",n[n.completed=1]="completed",n[n.open=2]="open",n[n.finish=3]="finish",n))(Rr||{}),q=class extends d{constructor(){super(...arguments);this.icon="";this.primaryText="";this.isLast=!1;this.first=!1}render(){return o`
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
    `}determineBackgroundColor(t){return t==1?"var(--app-color-text-primary)":t==0?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==3?"var(--app-color-success)":t==1?"var(--mdc-theme-on-primary)":t==0?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){let t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};q.styles=p`
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
  `,r([s({type:String})],q.prototype,"icon",2),r([s({type:String})],q.prototype,"primaryText",2),r([s({type:Number})],q.prototype,"state",2),r([s({type:Boolean})],q.prototype,"isLast",2),q=r([c("nidoca-wizard-step")],q);var jt=class extends d{render(){return o`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){let t=e.target;if(t==null)return;let i=t.assignedElements(),n=0;for(let l=0;l<i.length;l++){let m=i[l];m instanceof q&&(m.index=l,m.state==0&&(n=l),m.index==i.length-1&&(m.isLast=!0))}this.changeState(n)}stepClicked(e){let t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){let t=this.wizardSlot.assignedElements();for(let i=0;i<t.length;i++){let n=t[i];n instanceof q&&n.index!==void 0&&(n.index<e?n.state=1:n.index==e?n.state=0:n.state=2)}}}};jt.styles=p``,r([g("#wizardSlot")],jt.prototype,"wizardSlot",2),jt=r([c("nidoca-wizard")],jt);var mt=class extends d{constructor(){super(...arguments);this.clickable=!0;this.theme="surface";this.text=""}render(){return o`
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
    `}static example(t=""){return o`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};mt.styles=p`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }
    .clickable {
      cursor: pointer;
    }
  `,r([s({type:Boolean})],mt.prototype,"clickable",2),r([s({type:f,converter:String})],mt.prototype,"theme",2),r([s({type:String})],mt.prototype,"text",2),mt=r([c("nidoca-chip")],mt);var kt=class extends d{constructor(){super(...arguments);this.code="";this.theme="plain"}render(){return o`
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
    `}static example(t=""){return o`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};kt.styles=p`
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
  `,r([s({type:String})],kt.prototype,"code",2),r([s({type:String})],kt.prototype,"theme",2),kt=r([c("nidoca-code")],kt);var Ie=class{static{this.PROGRESS="PROGRESS"}static{this.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}},St=class extends d{constructor(){super(...arguments);this.progressType=Ie.PROGRESS}render(){return o` <style>
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

      <progress class="${this.progressType}"></progress>`}};St.styles=p``,r([s({type:f,converter:String})],St.prototype,"theme",2),r([s({type:Ie,converter:String})],St.prototype,"progressType",2),St=r([c("nidoca-progress")],St);var ze=(i=>(i.contained="contained",i.outlined="outlined",i.text="text",i))(ze||{}),it=class extends d{constructor(){super(...arguments);this.theme="primary";this.buttonType="contained";this.icon="";this.text=""}render(){return o`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};it.styles=p`
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
  `,r([s({type:f,converter:String})],it.prototype,"theme",2),r([s({type:ze,converter:String})],it.prototype,"buttonType",2),r([s({type:String})],it.prototype,"icon",2),r([s({type:String})],it.prototype,"text",2),it=r([c("nidoca-button")],it);var Lr=class{constructor(){this.key=""}},z=class extends d{};var Cr=class{constructor(){this.formData=FormData.prototype}},_t=class extends d{constructor(){super(...arguments);this.autocomplete=!0}render(){return o`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,i={};for(let l of this.getInputElements(this.slotElement)){let m=l.getOutputData();i[m.key]=m.value,t.append(m.key,m.value)}let n={};return n.jsonObject=i,n.formData=t,n}validate(){let t=!0;for(let i of this.getInputElements(this.slotElement))i.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let i=[],n=t.assignedElements({flatten:!0});for(let l=0;l<n.length;l++){let m=n[l];this.recursiveInputElementSearch(m,i)}return i}recursiveInputElementSearch(t,i){if(t instanceof z)i.push(t);else if(t.hasChildNodes()){let n=t.children;for(let l of[].slice.call(n))this.recursiveInputElementSearch(l,i)}}};_t.styles=p`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,r([s({type:Boolean})],_t.prototype,"autocomplete",2),r([g("#slotElement")],_t.prototype,"slotElement",2),_t=r([c("nidoca-form")],_t);var Ar={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},He=a=>(...e)=>({_$litDirective$:a,values:e}),Ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Qr}=wr;var Or=()=>document.createComment(""),Vt=(a,e,t)=>{let i=a._$AA.parentNode,n=e===void 0?a._$AB:e._$AA;if(t===void 0){let l=i.insertBefore(Or(),n),m=i.insertBefore(Or(),n);t=new Qr(l,m,a,a.options)}else{let l=t._$AB.nextSibling,m=t._$AM,u=m!==a;if(u){let h;t._$AQ?.(a),t._$AM=a,t._$AP!==void 0&&(h=a._$AU)!==m._$AU&&t._$AP(h)}if(l!==n||u){let h=t._$AA;for(;h!==l;){let v=h.nextSibling;i.insertBefore(h,n),h=v}}}return t},ct=(a,e,t=a)=>(a._$AI(e,t),a),Fr={},Ir=(a,e=Fr)=>a._$AH=e,zr=a=>a._$AH,Pe=a=>{a._$AR(),a._$AA.remove()};var Hr=(a,e,t)=>{let i=new Map;for(let n=e;n<=t;n++)i.set(a[n],n);return i},Gt=He(class extends Ut{constructor(a){if(super(a),a.type!==Ar.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,e,t){let i;t===void 0?t=e:e!==void 0&&(i=e);let n=[],l=[],m=0;for(let u of a)n[m]=i?i(u,m):m,l[m]=t(u,m),m++;return{values:l,keys:n}}render(a,e,t){return this.dt(a,e,t).values}update(a,[e,t,i]){let n=zr(a),{values:l,keys:m}=this.dt(e,t,i);if(!Array.isArray(n))return this.ut=m,l;let u=this.ut??=[],h=[],v,k,b=0,w=n.length-1,x=0,R=l.length-1;for(;b<=w&&x<=R;)if(n[b]===null)b++;else if(n[w]===null)w--;else if(u[b]===m[x])h[x]=ct(n[b],l[x]),b++,x++;else if(u[w]===m[R])h[R]=ct(n[w],l[R]),w--,R--;else if(u[b]===m[R])h[R]=ct(n[b],l[R]),Vt(a,h[R+1],n[b]),b++,R--;else if(u[w]===m[x])h[x]=ct(n[w],l[x]),Vt(a,n[b],n[w]),w--,x++;else if(v===void 0&&(v=Hr(m,x,R),k=Hr(u,b,w)),v.has(u[b]))if(v.has(u[w])){let tt=k.get(m[x]),Ue=tt!==void 0?n[tt]:null;if(Ue===null){let Ne=Vt(a,n[b]);ct(Ne,l[x]),h[x]=Ne}else h[x]=ct(Ue,l[x]),Vt(a,n[b],Ue),n[tt]=null;x++}else Pe(n[w]),w--;else Pe(n[b]),b++;for(;x<=R;){let tt=Vt(a,h[R+1]);ct(tt,l[x]),h[x++]=tt}for(;b<=w;){let tt=n[b++];tt!==null&&Pe(tt)}return this.ut=m,Ir(a,h),B}});var Nr={},ae=He(class extends Ut{constructor(){super(...arguments),this.ot=Nr}render(a,e){return e()}update(a,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((i,n)=>i===this.ot[n]))return B}else if(this.ot===e)return B;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var L=class extends z{constructor(){super(...arguments);this.theme="surface";this.trailingIcon="";this.label="";this.errorText="";this.infoText="";this.warningText="";this.value="";this.options=[];this.name="";this.required=!0;this.multiple=!1;this.size=1}render(){return o` <style>
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
            ${ae([this.value,this.options],()=>o`
                ${Gt(this.options,t=>t==null?o` <option></option>`:this.isSelectedOption(t)?o` <option value="${t.key}" selected>${t.value}</option> `:o` <option value="${t.key}">${t.value}</option> `)}
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
          `:o``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let i=0,n=this.selectElement.options.length;i<n;i++)this.selectElement.options[i].selected&&t.push(this.options[i].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let i=!1;for(let n of this.value)if(i=t.key===n,i)return!0}return this.value===t.key}static enumToOptions(t,i=!0){let n=[];return i&&n.push({key:"",value:""}),Object.keys(t).forEach(l=>{n.push({key:l,value:t[l]})}),n}static stringArrayToOptions(t,i=!0){let n=[];return i&&n.push({key:"",value:""}),t.forEach(l=>{n.push({key:l,value:l})}),n}static toComboboxOptions(t=null,i=null){if(t==null)return[];let n=[];return Object.values(t).forEach(l=>{let m=String(Object.keys(t)[Object.values(t).indexOf(l)]);i&&(m=m.concat(i)),n.push({key:l,value:m})}),n}};L.styles=p`
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
  `,r([s({type:f,converter:String})],L.prototype,"theme",2),r([s({type:String})],L.prototype,"trailingIcon",2),r([s({type:String})],L.prototype,"label",2),r([s({type:String})],L.prototype,"errorText",2),r([s({type:String})],L.prototype,"infoText",2),r([s({type:String})],L.prototype,"warningText",2),r([s()],L.prototype,"value",2),r([s({type:Array})],L.prototype,"options",2),r([s({type:String})],L.prototype,"name",2),r([s({type:Boolean})],L.prototype,"required",2),r([s({type:Boolean})],L.prototype,"multiple",2),r([s({type:Number})],L.prototype,"size",2),r([g("#selectElement")],L.prototype,"selectElement",2),L=r([c("nidoca-form-combobox")],L);var _=a=>a??S;var nt=(x=>(x.color="color",x.email="email",x.hidden="hidden",x.number="number",x.password="password",x.tel="tel",x.text="text",x.search="search",x.url="url",x.date="date",x.month="month",x.time="time",x.week="week",x))(nt||{}),E=class extends z{constructor(){super(...arguments);this.type="text";this.label="";this.placeholder="";this.trailingIcon="";this.errorText="";this.infoText="";this.warningText="";this.name="";this.value="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="plain"}render(){return this.type=="hidden"?o`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:o` <style>
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
              `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t?.trim()}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),this.errorText==""}};E.styles=p`
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
  `,r([s({type:nt,converter:String})],E.prototype,"type",2),r([s({type:String})],E.prototype,"label",2),r([s({type:String})],E.prototype,"placeholder",2),r([s({type:String})],E.prototype,"trailingIcon",2),r([s({type:String})],E.prototype,"errorText",2),r([s({type:String})],E.prototype,"infoText",2),r([s({type:String})],E.prototype,"warningText",2),r([s({type:String})],E.prototype,"name",2),r([s()],E.prototype,"value",2),r([s({type:Boolean})],E.prototype,"required",2),r([s({type:Boolean})],E.prototype,"disabled",2),r([s({type:Boolean})],E.prototype,"checked",2),r([s({type:Number})],E.prototype,"maxlength",2),r([s({type:Number})],E.prototype,"minlength",2),r([s({type:Number})],E.prototype,"min",2),r([s({type:Number})],E.prototype,"max",2),r([s({type:String})],E.prototype,"step",2),r([s({type:Number})],E.prototype,"size",2),r([s({type:String})],E.prototype,"pattern",2),r([g("#inputElement")],E.prototype,"inputElement",2),r([s({type:f,converter:String})],E.prototype,"theme",2),E=r([c("nidoca-form-text")],E);var Me=class extends E{constructor(){super(),this.type="date"}};Me=r([c("nidoca-form-date")],Me);var A=class extends z{constructor(){super(...arguments);this.theme="surface";this.infoText="";this.warningText="";this.errorText="";this.name="";this.value="";this.label="";this.required=!1;this.placeholder="";this.disabled=!1;this.rows=5}render(){return o` <style>
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
          `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};A.styles=p`
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
  `,r([s({type:f,converter:String})],A.prototype,"theme",2),r([s({type:String})],A.prototype,"infoText",2),r([s({type:String})],A.prototype,"warningText",2),r([s({type:String})],A.prototype,"errorText",2),r([s({type:String})],A.prototype,"name",2),r([s()],A.prototype,"value",2),r([s({type:String})],A.prototype,"label",2),r([s({type:Boolean})],A.prototype,"required",2),r([s({type:String})],A.prototype,"placeholder",2),r([s({type:Boolean})],A.prototype,"disabled",2),r([s({type:Number})],A.prototype,"rows",2),r([g("#inputElement")],A.prototype,"inputElement",2),A=r([c("nidoca-form-textarea")],A);var Tt=class extends z{constructor(){super(...arguments);this.theme="primary"}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return o`
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
  `,r([s({type:f,converter:String})],Tt.prototype,"theme",2),r([g("#inputElement")],Tt.prototype,"inputElement",2),Tt=r([c("nidoca-form-upload")],Tt);var I=class extends z{constructor(){super();this.name="";this.label="";this.infoText="";this.errorText="";this.warningText="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="primary";this.theme=y.prototype.getParentTheme(this)||"plain"}render(){return o`
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
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};I.styles=p`
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
  `,r([s({type:String})],I.prototype,"name",2),r([s({type:String})],I.prototype,"label",2),r([s({type:String})],I.prototype,"infoText",2),r([s({type:String})],I.prototype,"errorText",2),r([s({type:String})],I.prototype,"warningText",2),r([s({type:Boolean})],I.prototype,"required",2),r([s({type:Boolean})],I.prototype,"disabled",2),r([s({type:Boolean})],I.prototype,"checked",2),r([s({type:String})],I.prototype,"theme",2),r([g("#inputElement")],I.prototype,"inputElement",2),I=r([c("nidoca-form-switch")],I);var Z=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Newsletter";this.emailLabel="Deine Emailadresse";this.buttonLabel="Registrieren"}render(){return o`
      <nidoca-box theme="${_(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${y.getOposite(this.theme)}"
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
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Z.styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],Z.prototype,"theme",2),r([s({type:String,converter:String})],Z.prototype,"label",2),r([s({type:String,converter:String})],Z.prototype,"emailLabel",2),r([s({type:String,converter:String})],Z.prototype,"buttonLabel",2),r([g("#form")],Z.prototype,"formComponent",2),Z=r([c("nidoca-form-newsletter")],Z);var Q=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Passwort zur\xFCcksetzen";this.emailLabel="Deine Emailadresse";this.buttonLabel="Zur\xFCcksetzen"}render(){return o`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${y.getOposite(this.theme)}"
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
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};Q.styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],Q.prototype,"theme",2),r([s({type:String,converter:String})],Q.prototype,"label",2),r([s({type:String,converter:String})],Q.prototype,"emailLabel",2),r([s({type:String,converter:String})],Q.prototype,"buttonLabel",2),r([g("#form")],Q.prototype,"formComponent",2),Q=r([c("nidoca-form-reset-password")],Q);var O=class extends d{constructor(){super(...arguments);this.theme="surface";this.label="Passwort \xE4ndern";this.oldPasswordLabel="Altes Passwort";this.newPasswordLabel="Neues Passwort";this.repeatNewPasswordLabel="Wiederholen";this.buttonLabel="\xC4ndern";this.showErrorMessageSamePassword=!1;this.errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";this.showErrorMessagePasswordDiff=!1;this.errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein"}render(){return o`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${y.getOposite(this.theme)}"
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
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};O.styles=p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],O.prototype,"theme",2),r([s({type:String,converter:String})],O.prototype,"label",2),r([s({type:String,converter:String})],O.prototype,"oldPasswordLabel",2),r([s({type:String,converter:String})],O.prototype,"newPasswordLabel",2),r([s({type:String,converter:String})],O.prototype,"repeatNewPasswordLabel",2),r([s({type:String,converter:String})],O.prototype,"buttonLabel",2),r([g("#form")],O.prototype,"formComponent",2),r([g("#oldPassword")],O.prototype,"oldPasswordInputField",2),r([g("#newPassword")],O.prototype,"newPasswordInputField",2),r([g("#repeatNewPassword")],O.prototype,"repeatNewPasswordInputField",2),r([s()],O.prototype,"errorMessageSamePasswordLabel",2),r([s()],O.prototype,"errorMessagePasswordDiffLabel",2),O=r([c("nidoca-form-change-password")],O);var X=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Registrieren";this.emailLabel="Email";this.passwordLabel="Passwort";this.buttonLabel="Registrieren"}render(){return o`
      <nidoca-box theme="${_(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${y.getOposite(this.theme)}"
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
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${y.getOposite(this.theme)}"
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
  `,r([s({type:f,converter:String})],X.prototype,"theme",2),r([s({type:String,converter:String})],X.prototype,"label",2),r([s({type:String,converter:String})],X.prototype,"emailLabel",2),r([s({type:String,converter:String})],X.prototype,"passwordLabel",2),r([s({type:String,converter:String})],X.prototype,"buttonLabel",2),r([g("#form")],X.prototype,"formComponent",2),X=r([c("nidoca-form-register")],X);var Kt=class extends d{constructor(){super(...arguments);this.code=""}render(){return o``}};Kt.styles=p``,r([s({type:String})],Kt.prototype,"code",2),Kt=r([c("nidoca-upload")],Kt);var Rt=class extends d{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return o`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};Rt.styles=p`
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
  `,r([s({type:f,converter:String})],Rt.prototype,"theme",2),r([s({type:String,converter:String})],Rt.prototype,"text",2),Rt=r([c("nidoca-hr")],Rt);var Lt=class extends d{constructor(){super(...arguments);this.text="";this.icon=""}render(){return o`
      <div class="container">
        ${this.icon?o` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:o``}
        ${this.text?o` <nidoca-text-button>${this.text}</nidoca-text-button>`:o``}
        <slot></slot>
      </div>
    `}static example(t=""){return o`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};Lt.styles=p`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,r([s({type:String})],Lt.prototype,"text",2),r([s({type:String})],Lt.prototype,"icon",2),Lt=r([c("nidoca-menu-area")],Lt);var j=class extends d{constructor(){super(...arguments);this.text="";this.icon="";this.selected=!1;this.theme="surface"}render(){return o`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};j.styles=p`
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
  `,r([s({type:String})],j.prototype,"text",2),r([s({type:String})],j.prototype,"icon",2),r([s({type:Boolean})],j.prototype,"selected",2),r([s({type:String})],j.prototype,"theme",2),j=r([c("nidoca-menu-item")],j);var Ct=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return o` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((i,n)=>{if(n=="theme"&&this.slotElement!=null){let l=this.slotElement.assignedElements();for(let m=0;m<l.length;m++){let u=l[m];u instanceof j&&(u.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let i=this.slotElement.assignedElements();for(let n=0;n<i.length;n++){let l=i[n];if(l instanceof j){let m=l.getBoundingClientRect();m.left<t.x&&m.right>t.x&&(m.top<t.y&&m.bottom>t.y?l.selected=!0:l.selected=!1)}}}})}static example(t=""){return o`
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
    `}};Ct.styles=p`
    :host,
    slot {
      display: block;
    }
  `,r([s({type:String})],Ct.prototype,"theme",2),r([g("#slotElement")],Ct.prototype,"slotElement",2),Ct=r([c("nidoca-menu")],Ct);var Y=class extends d{constructor(){super(...arguments);this.height="auto";this.width="auto";this.left="auto";this.top="auto";this.right="auto";this.bottom="auto"}render(){return o`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,i,n,l,m,u){return"height:".concat(t).concat(";").concat("width:").concat(i).concat(";").concat("left:").concat(n).concat(";").concat("right:").concat(l).concat(";").concat("top:").concat(m).concat(";").concat("bottom:").concat(u).concat(";")}};Y.styles=p`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,r([s({type:String})],Y.prototype,"height",2),r([s({type:String})],Y.prototype,"width",2),r([s({type:String})],Y.prototype,"left",2),r([s({type:String})],Y.prototype,"top",2),r([s({type:String})],Y.prototype,"right",2),r([s({type:String})],Y.prototype,"bottom",2),Y=r([c("nidoca-layout-floating")],Y);var Xt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return o`<slot></slot>`}};Xt.styles=p`
    :host {
      display: block;
    }

    slot {
      max-width: 768px;
      display: block;
      margin: 0 auto;
      line-height: 0;
      width: auto;
      max-width: var(--max-width);
    }
  `,r([s({type:String})],Xt.prototype,"theme",2),Xt=r([c("nidoca-container")],Xt);var At=class extends d{constructor(){super();this.hideSidebox=!0;this.theme=y.prototype.getParentTheme(this)||"plain"}render(){return o` <style>
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
      ${this.hideSidebox?o``:o` <slot class="sidebox" name="sidebox"></slot>`}`}};At.styles=p`
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
  `,r([s({type:f,converter:String})],At.prototype,"theme",2),r([s({type:Boolean,converter:String})],At.prototype,"hideSidebox",2),At=r([c("nidoca-split-screen")],At);var U=class extends d{constructor(){super(...arguments);this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return o`
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
    `}};U.styles=p`
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
  `,r([s({type:String})],U.prototype,"icon",2),r([s({type:Boolean})],U.prototype,"clickable",2),r([s({type:Boolean})],U.prototype,"deactivated",2),r([s({type:String})],U.prototype,"title",2),U=r([c("nidoca-icon")],U);var Yt=class extends d{render(){return o`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(this.rippleContainerElement!=null){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);let t=this.rippleContainerElement.getBoundingClientRect(),i=Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${i}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};Yt.styles=p`
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
  `,r([g("#rippleContainer")],Yt.prototype,"rippleContainerElement",2),Yt=r([c("nidoca-ripple")],Yt);var H=class extends d{constructor(){super(...arguments);this.src="";this.width="100%";this.height="auto";this.zoom=!1}render(){return this.src?o`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:o``}static exampleImage(){return"data:image/jpeg;base64,IMG"}static example(t=""){return o`<nidoca-img width="64px" width="64px" slot="${t}" src="${this.exampleImage()} "></nidoca-img>`}};H.styles=p`
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
  `,r([s({type:String})],H.prototype,"src",2),r([s({type:String})],H.prototype,"width",2),r([s({type:String})],H.prototype,"height",2),r([s({type:Boolean})],H.prototype,"zoom",2),H=r([c("nidoca-img")],H);var Ot=class extends H{static example(e=""){return o`<nidoca-img-round width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img-round>`}};Ot.styles=p`
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
  `,Ot=r([c("nidoca-img-round")],Ot);var It=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:o``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let i=t.target;if(i==null)return;let n=i.assignedElements();for(let l=0;l<n.length;l++){let m=n[l];if(m instanceof H){this.selected==null&&l==0&&(this.selected=m.cloneNode(!0)),m.addEventListener("click",h=>{h.target&&(this.selected=h.target.cloneNode(!0))}),m.width="148px";let u=m.classList;u.contains("img")||u.add("img")}}}};It.styles=p`
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
  `,r([s({type:f,converter:String})],It.prototype,"theme",2),r([qt()],It.prototype,"selected",2),It=r([c("nidoca-img-slider")],It);var Wt=class extends d{constructor(){super(...arguments);this.src=""}render(){return o`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Wt.styles=p``,r([s({type:String})],Wt.prototype,"src",2),Wt=r([c("nidoca-movie")],Wt);var P=class extends d{constructor(){super(...arguments);this.label="";this.placeholder="";this.name="";this.min=1;this.max=10;this.errorText="";this.numberOne=1;this.numberTwo=1}render(){return o`
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
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,i){return Math.random()*(i-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};P.styles=p`
    :host {
      display: block;
      width: 100%;
    }
  `,r([s({type:f,converter:String})],P.prototype,"theme",2),r([s({type:String})],P.prototype,"label",2),r([s({type:String})],P.prototype,"placeholder",2),r([s({type:String})],P.prototype,"name",2),r([s({type:Number})],P.prototype,"min",2),r([s({type:Number})],P.prototype,"max",2),r([s({type:String})],P.prototype,"errorText",2),r([g("#inputfield")],P.prototype,"inputfield",2),P=r([c("nidoca-form-captcha")],P);var pt=class extends d{constructor(){super(...arguments);this.text="";this.href="";this.targetType="_self"}render(){return o`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};pt.styles=p`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,r([s({type:String})],pt.prototype,"text",2),r([s({type:String})],pt.prototype,"href",2),r([s({type:String})],pt.prototype,"targetType",2),pt=r([c("nidoca-link")],pt);var C=class extends d{constructor(){super(...arguments);this.theme="surface";this.primaryText="";this.secondaryText="";this.tertiaryText="";this.infoText="";this.selected=!1}render(){return o`
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
          ${this.secondaryText?o` <nidoca-text-subtitle theme="${this.theme}" class="item"
                >${this.secondaryText}
              </nidoca-text-subtitle>`:o``}
          <slot name="secondary"></slot>

          ${this.tertiaryText?o` <nidoca-text-caption theme="${this.theme}" class="item"
                >${this.tertiaryText}
              </nidoca-text-caption>`:o``}
          <slot name="tertiary"></slot>
        </div>
         ${this.infoText?o` <nidoca-text-button theme="${this.theme}" class="item right"
                >${this.infoText}
              </nidoca-text-button>`:o`<slot name="info"></slot>`}
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
    </nidoca-list-item>`}};C.styles=p`
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
  `,r([s({type:f,converter:String})],C.prototype,"theme",2),r([s({type:String})],C.prototype,"primaryText",2),r([s({type:String})],C.prototype,"secondaryText",2),r([s({type:String})],C.prototype,"tertiaryText",2),r([s({type:String})],C.prototype,"infoText",2),r([s({type:Boolean})],C.prototype,"selected",2),C=r([c("nidoca-list-item")],C);var ot=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return o`
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
    `}static example(){return o`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};ot.styles=p`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,r([s({type:f,converter:String})],ot.prototype,"theme",2),r([s({type:String})],ot.prototype,"text",2),ot=r([c("nidoca-list-section")],ot);var zt=class extends d{constructor(){super(...arguments);this.multiselect=!1}updated(t){super.updated(t),t.forEach((i,n)=>{n=="theme"&&this.getItems().forEach(l=>{l.theme=this.theme})})}render(){return o`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let i=t.target;i.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let i=this.slotElement.assignedElements();for(let n=0;n<i.length;n++){let l=i[n];l instanceof C&&t.push(l)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let i=this.slotElement.assignedElements();for(let n=0;n<i.length;n++){let l=i[n];l instanceof C&&l.selected&&t.push(l)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let i=this.slotElement.assignedElements(),n=0;for(let l=0;l<i.length;l++){let m=i[l];m instanceof C&&(m.selected&&t.push(n),n++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return o`<nidoca-list theme="primary">
      ${ot.example()} ${C.example()} ${C.example()} ${C.example()}
    </nidoca-list>`}};zt.styles=p`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,r([s({type:Boolean})],zt.prototype,"multiselect",2),r([g("#slotElement")],zt.prototype,"slotElement",2),zt=r([c("nidoca-list")],zt);var Ht=class extends d{constructor(){super(...arguments);this.theme="plain";this.prominent=!1}render(){return o`
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
  `,r([s({type:String,converter:String})],Ht.prototype,"theme",2),r([s({type:Boolean})],Ht.prototype,"prominent",2),Ht=r([c("nidoca-top-app-bar")],Ht);var dt=class extends d{constructor(){super(...arguments);this.headers=["column 1","column 2"];this.rows=[["row 1",new U],["row 2",new U]];this.theme="plain"}render(){return o`
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
            ${ae([this.headers],()=>o` ${Gt(this.headers,t=>o` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${ae([this.rows],()=>o`
                  ${Gt(this.rows,t=>o`
                        <tr>
                          ${Gt(t,i=>o` <td colspan="1" rowspan="1">${i}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};dt.styles=p`
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
  `,r([s({type:Array})],dt.prototype,"headers",2),r([s({type:Array})],dt.prototype,"rows",2),r([s({type:f,converter:String})],dt.prototype,"theme",2),dt=r([c("nidoca-table")],dt);var ht=class extends d{constructor(){super(...arguments);this.selected=!1}render(){return this.selected?o` <slot></slot>`:o``}};ht.styles=p`
    :host,
    slot {
      display: block;
    }
  `,r([s({type:Boolean})],ht.prototype,"selected",2),ht=r([c("nidoca-tab-content")],ht);var W=class extends d{constructor(){super(...arguments);this.selected=!1;this.text="";this.theme="surface"}render(){return o`
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
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};W.styles=p`
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
  `,r([s({type:Boolean})],W.prototype,"selected",2),r([s({type:String})],W.prototype,"text",2),r([s({type:String})],W.prototype,"theme",2),W=r([c("nidoca-tab")],W);var st=class extends d{constructor(){super(...arguments);this.theme="surface";this.tabIndex=0}render(){return o`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),n=100/t.length,l=t[this.tabIndex];for(let m=0;m<t.length;m++){let u=t[m];u instanceof W&&(u.theme=this.theme,u.style.width=String(n).concat("%"),u==l?(u.selected=!0,u.classList.add("SELECTED")):(u.selected=!1,u.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let i=this.tabContentSlot.assignedElements();for(let n=0;n<i.length;n++){let l=i[n];l instanceof ht&&(this.tabIndex==t?l.selected=!0:l.selected=!1,t++)}}}tabClicked(t){let i=t.detail;this.changeTabIndex(i)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let i=this.tabSlot.assignedElements();for(let n=0;n<i.length;n++){let l=i[n];if(l instanceof W&&l==t){this.tabIndex=n;break}}}}static example(t=""){return o`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${T.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${T.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${T.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};st.styles=p`
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
  `,r([g("#tabSlot")],st.prototype,"tabSlot",2),r([g("#tabContentSlot")],st.prototype,"tabContentSlot",2),r([s({type:String})],st.prototype,"theme",2),r([s({type:Number})],st.prototype,"tabIndex",2),st=r([c("nidoca-tabs")],st);var ut=class extends d{constructor(){super();this.hideLeft=!0;this.prominent=!1;document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let i=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-i.width}})}render(){return o`
      <slot
        id="left"
        @nidoca-event-menu-item-clicked="${()=>{641>window.innerWidth&&(this.hideLeft=!0)}}"
        class="${this.hideLeft?"hideLeft":""}"
        name="left"
      >
      </slot>

      <div class="right">
        <nidoca-top-app-bar .prominent="${this.prominent}">
          <nidoca-icon
            slot="left"
            style="padding-left:var(--space-2);"
            icon="menu"
            ?clickable="${!0}"
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
    `}};ut.styles=p`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
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
  `,r([s({type:Boolean})],ut.prototype,"hideLeft",2),r([s({type:Boolean})],ut.prototype,"prominent",2),r([g("#left")],ut.prototype,"leftElement",2),ut=r([c("nidoca-template")],ut);var ft=class extends d{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{this.videoElement&&(this.videoElement.srcObject=t)})}render(){return o`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};ft.styles=p``,r([g("#video")],ft.prototype,"videoElement",2),r([g("#canvas")],ft.prototype,"canvasElement",2),r([g("#click-photo")],ft.prototype,"buttonElement",2),ft=r([c("nidoca-video")],ft);var Pt=class extends d{constructor(){super(...arguments);this.src="";this.canvasElements=[];this.storeCanvasElements=[]}render(){return o`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>o`${t}`)}
    `}updated(t){super.updated(t),t.forEach((i,n)=>{if(console.debug(`${this.tagName} : property ${String(n)} changed. oldValue: ${i}`),n=="src"){this.convert();let l=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let i=document.createElement("canvas");i.width=t[0],i.height=t[1];let n=i.getContext("2d");n&&this.img&&(this.img.crossOrigin="anonymous",n.drawImage(this.img,0,0,t[0],t[1]),i.toBlob(l=>{},"image/webp")),this.canvasElements.push(i)}),this.requestUpdate()})}};Pt.styles=p``,r([s({type:String})],Pt.prototype,"src",2),r([g("#img")],Pt.prototype,"img",2),Pt=r([c("nidoca-svg-2-webp")],Pt);var $=class extends d{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return o`<style>
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
    `}};$.styles=p`
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
  `,r([s({type:f,converter:String})],$.prototype,"theme",2),r([s({type:String})],$.prototype,"text",2),$=r([c("nidoca-text")],$);var le=class extends ${render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};le.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 450;
      font-size: 105%;
    }
  `,le=r([c("nidoca-text-body")],le);var me=class extends ${render(){return o`${super.render()}`}};me.styles=p`
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
  `,me=r([c("nidoca-text-button")],me);var ce=class extends ${};ce.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,ce=r([c("nidoca-text-overline")],ce);var pe=class extends ${render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};pe.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 100%;
    }
  `,pe=r([c("nidoca-text-subtitle")],pe);var M=class extends ${render(){return o`<style>
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
      font-weight: 350;
      line-height: 1.25em;
      font-size: 95%;
    }
  `,M=r([c("nidoca-text-caption")],M);var De=class extends M{render(){return o`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};De=r([c("nidoca-text-error")],De);var Be=class extends M{render(){return o`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Be=r([c("nidoca-text-success")],Be);var qe=class extends M{render(){return o`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};qe=r([c("nidoca-text-warning")],qe);var je=class extends M{render(){return o`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};je=r([c("nidoca-text-info")],je);var de=class extends ${};de.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,de=r([c("nidoca-text-h1")],de);var he=class extends ${};he.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `,he=r([c("nidoca-text-h2")],he);var ue=class extends ${};ue.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,ue=r([c("nidoca-text-h3")],ue);var fe=class extends ${};fe.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,fe=r([c("nidoca-text-h4")],fe);var ge=class extends ${};ge.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,ge=r([c("nidoca-text-h5")],ge);var be=class extends ${};be.styles=p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,be=r([c("nidoca-text-h6")],be);var Mt=class extends V{constructor(){super(...arguments);this.message="Dies ist eine Testnachricht"}showToast(t=3e3){this.toastElement.classList.add("show"),setTimeout(()=>{this.hideToast()},t)}hideToast(){this.toastElement.classList.remove("show")}render(){return o`
      <div id="toast" class="toast">
        ${this.message}
      </div>
    `}};Mt.styles=p`
    .toast {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #323232;
      color: white;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      min-width: 250px;
      text-align: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 1000; /* Sicherstellen, dass der Toast über anderen Elementen liegt */
    }

    .toast.show {
      opacity: 1;
      visibility: visible;
    }
  `,r([s({type:String})],Mt.prototype,"message",2),r([g("#toast")],Mt.prototype,"toastElement",2),Mt=r([c("nidoca-toast")],Mt);var F=class extends d{constructor(){super(...arguments);this.value="";this.placeholder="";this.disabled=!1;this.theme="plain"}render(){return o`
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
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",i=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",i.type,JSON.stringify(i.detail)),this.dispatchEvent(i)}static example(t=""){return o`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};F.styles=p`
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
  `,r([s({type:String})],F.prototype,"value",2),r([s({type:String})],F.prototype,"placeholder",2),r([s({type:Boolean})],F.prototype,"disabled",2),r([g("#inputElement")],F.prototype,"inputElement",2),r([s({type:f,converter:String})],F.prototype,"theme",2),F=r([c("nidoca-search-bar")],F);var xe=class{static{this.CENTER="CENTER"}static{this.LEFT="LEFT"}static{this.RIGHT="RIGHT"}static{this.TOP="TOP"}static{this.BOTTOM="BOTTOM"}static{this.SLIDE_CENTER="SLIDE_CENTER"}static{this.SLIDE_LEFT="SLIDE_LEFT"}static{this.SLIDE_RIGHT="SLIDE_RIGHT"}static{this.SLIDE_TOP="SLIDE_TOP"}static{this.SLIDE_BOTTOM="SLIDE_BOTTOM"}},Dt=class extends d{constructor(){super(...arguments);this.transitionType=xe.CENTER;this.duration=.5}render(){return o` <div class="${_(this.transitionType)}"><slot></slot></div> `}};Dt.styles=p`
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
  `,r([s({type:String})],Dt.prototype,"transitionType",2),r([s({type:Number})],Dt.prototype,"duration",2),Dt=r([c("nidoca-transition")],Dt);var Jt=class extends d{constructor(){super(...arguments);this.show=!1}render(){return this.show?o`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${xe.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:o``}};Jt.styles=p`
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
  `,r([s({type:Boolean})],Jt.prototype,"show",2),Jt=r([c("nidoca-dialog")],Jt);var N=class extends d{constructor(){super(...arguments);this.show=!1;this.title="Ja oder Nein ?";this.description="Entscheide dich";this.labelButtonYes="Ja";this.labelButtonNo="Nein"}render(){return o`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};N.styles=p``,r([s({type:Boolean})],N.prototype,"show",2),r([s({type:String})],N.prototype,"title",2),r([s({type:String})],N.prototype,"description",2),r([s({type:String})],N.prototype,"labelButtonYes",2),r([s({type:String})],N.prototype,"labelButtonNo",2),N=r([c("nidoca-dialog-decision")],N);var Zt=class extends d{constructor(){super(...arguments);this.icon=""}render(){return o`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `}static example(t="",i="surface"){return o`
      <nidoca-infobox slot="${t}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${i}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${i}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `}};Zt.styles=p`
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
  `,r([s({type:String})],Zt.prototype,"icon",2),Zt=r([c("nidoca-infobox")],Zt);var at=class extends d{constructor(){super(...arguments);this.theme="surface";this.src="";this.title="";this.subtitle=""}render(){return o`
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
    >`}};at.styles=p`
    :host {
      display: block;
    }
  `,r([s({type:f,converter:String})],at.prototype,"theme",2),r([s({type:String})],at.prototype,"src",2),r([s({type:String})],at.prototype,"title",2),r([s({type:String})],at.prototype,"subtitle",2),at=r([c("nidoca-avatar")],at);var Qt=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};Qt.styles=p`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
      height: 100%;
      overflow:hidden;
    }
    slot {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,r([s({type:f,converter:String})],Qt.prototype,"theme",2),Qt=r([c("nidoca-card")],Qt);var ye=class extends d{render(){return o`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){let t=e.target;if(t==null)return;let i=t.assignedElements();for(let n=0;n<i.length;n++){let m=i[n].classList;m.contains("flexItem")||m.add("flexItem"),m.contains("flexItemDevice")||m.add("flexItemDevice")}}};ye.styles=p`
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
  `,ye=r([c("nidoca-gallery")],ye);var ve=class extends d{render(){return o`<slot></slot>`}print(){let e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};ve.styles=p`
    :host {
      display: none;
    }
  `,ve=r([c("nidoca-print")],ve);var $e=class extends d{render(){return o`
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){let i=e.target.assignedElements(),n=i.length;for(let l=0;l<n;l++){let u=i[l].classList,h="item_count_"+n;u.contains(h)||u.add(h)}}};$e.styles=p`
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
  `,$e=r([c("nidoca-section")],$e);var Ft=class extends d{constructor(){super(...arguments);this.cards=[]}render(){return o`
      <div class="container">
        ${this.cards.map(t=>o`
            <nidoca-card class="item" @click="${()=>this.clicked(t)}">
              <nidoca-ripple>
                <nidoca-img src="${t.imgSrc}" alt="${t.title}"></nidoca-img>
                <nidoca-box>
                  <nidoca-text-h6>${t.title}</nidoca-text-h6>
                  <nidoca-text-body>${t.description}</nidoca-text-body>
                </nidoca-box>
              </nidoca-ripple>
            </nidoca-card>
          `)}
      </div>
    `}clicked(t){this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:{index:-1,card:t},bubbles:!0,composed:!0}))}};Ft.styles=p`
    :host {
      display: block;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--space-2);
      max-width: 1007px;
      margin: 0 auto;
    }

    .item {
      flex: 0 0 calc(50% - var(--space-2));
      box-sizing: border-box;
      cursor: pointer;
    }

    @media only screen and (max-width: 512px) {
      .item {
        flex: 0 0 calc(100% - var(--space-2));
      }
    }
  `,r([s({type:Array})],Ft.prototype,"cards",2),Ft=r([c("nidoca-dashboard")],Ft);var Nt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return o`
      ${y.getStyle(this.theme)}
      <slot></slot>
    `}};Nt.styles=p`
    :host {
      display: block;
      padding: var(--space-2);
      box-sizing: border-box;
    }
    slot {
      display: block;
      margin: auto;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      :host {
        padding: var(--space);
      }
    }

    @media only screen and (max-width: 640px) {
      :host {
        padding: var(--space);
      }
    }
  `,r([s({type:f,converter:String})],Nt.prototype,"theme",2),Nt=r([c("nidoca-box")],Nt);var D=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Deine Nachricht";this.nameLabel="Dein Name";this.emailLabel="Deine Email";this.titleLabel="Betreff";this.messageLabel="Deine Nachricht";this.buttonLabel="Senden"}render(){return o`
      <nidoca-box theme="${_(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${"text"}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email"}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"text"}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${y.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${y.getOposite(this.theme)}"
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
  `,r([s({type:f,converter:String})],D.prototype,"theme",2),r([s({type:String,converter:String})],D.prototype,"label",2),r([s({type:String,converter:String})],D.prototype,"nameLabel",2),r([s({type:String,converter:String})],D.prototype,"emailLabel",2),r([s({type:String,converter:String})],D.prototype,"titleLabel",2),r([s({type:String,converter:String})],D.prototype,"messageLabel",2),r([s({type:String,converter:String})],D.prototype,"buttonLabel",2),r([g("#authenitcate-form")],D.prototype,"formComponent",2),D=r([c("nidoca-form-contact")],D);})();
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
