"use strict";(()=>{var er=Object.defineProperty;var Dr=Object.getOwnPropertyDescriptor;var Br=(a,t,r)=>t in a?er(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var e=(a,t,r,i)=>{for(var n=i>1?void 0:i?Dr(t,r):t,l=a.length-1,d;l>=0;l--)(d=a[l])&&(n=(i?d(t,r,n):d(n))||n);return i&&n&&er(t,r,n),n};var p=(a,t,r)=>Br(a,typeof t!="symbol"?t+"":t,r);var rr=class a{static uniqueInstance;static getUniqueInstance(){return a.uniqueInstance||(a.uniqueInstance=new a),a.uniqueInstance}listeners=[];constructor(){window.onpopstate=t=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(t.state)),this.notifyListeners()},document.addEventListener("click",t=>{if(!this.shouldIgnoreEvent(t)){let r=this.getAnchor(t);r&&!this.shouldIgnoreAnchor(r)&&(t.preventDefault(),r.hash.length>0&&this.navigate(r.hash))}})}subscribe(t){console.trace("subscribe router listener"),this.listeners.push(t)}back(){history.back()}forward(){history.forward()}navigate(t,r=null){if(t.indexOf("#")==-1&&(t="#".concat(t)),console.trace("navigate to: %s",t),r!=null&&console.trace("state: %s",JSON.stringify(r)),document.location.hash===t){console.trace("you are already on page: "+t);return}history.pushState(r,"",t),this.notifyListeners()}getCurrentState(){return history.state}getStateProperty(t){let r=this.getCurrentState();return r!=null?r[t]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){let t=this.getCurrentPage();this.listeners.forEach(r=>r.routeChanged(t))}shouldIgnoreEvent(t){return t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey}getAnchor(t){for(let i of t.composedPath?t.composedPath():[])if(this.isAnchor(i))return i;let r=t.target;for(;r&&!this.isAnchor(r);)r=r.parentNode;return r&&this.isAnchor(r)?r:null}isAnchor(t){return t.nodeName&&t.nodeName.toLowerCase()==="a"}shouldIgnoreAnchor(t){return!!(t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||(t.origin||this.getAnchorOrigin(t))!==window.location.origin)}getAnchorOrigin(t){let r=t.port,i=t.protocol,d=i==="http:"&&r==="80"||i==="https:"&&r==="443"?t.hostname:t.host;return`${i}//${d}`}};var ir=class a{static generateImageBase64(t,r,i){let n=document.createElement("canvas");n.width=128,n.height=128;let l=n.getContext("2d");if(!l)throw new Error("Canvas context is not available");l.fillStyle=i,l.fillRect(0,0,n.width,n.height),l.fillStyle=r;let d=document.body,u=getComputedStyle(d).getPropertyValue("--font-family")||"Arial";l.font=`bold 64px ${u}`,l.textAlign="center",l.textBaseline="alphabetic";let $=t.charAt(0).toUpperCase(),S=l.measureText($),x=S.actualBoundingBoxAscent-S.actualBoundingBoxDescent;return l.fillText($,n.width/2,n.height/2+x/2),n.toDataURL("image/png")}static renderImgText(t){return a.generateImageBase64(t,"#555555","#ffffff")}};var Ge=class a{dbName;storeName;keyField;db=null;static DB_VERSION=2;constructor(t,r,i){this.dbName=t,this.storeName=r,this.keyField=i}async openDatabase(){this.db=await new Promise((t,r)=>{let i=indexedDB.open(this.dbName,a.DB_VERSION);i.onupgradeneeded=()=>{let n=i.result;console.log(`onupgradeneeded triggered. Aktuelle Version: ${n.version}`),n.objectStoreNames.contains(this.storeName)||(n.createObjectStore(this.storeName,{keyPath:this.keyField}),console.log(`Object Store '${this.storeName}' mit KeyPath '${String(this.keyField)}' erstellt.`))},i.onsuccess=()=>{console.log(`IndexedDB '${this.dbName}' ge\xF6ffnet.`),t(i.result)},i.onerror=()=>{console.error("Fehler beim \xD6ffnen der Datenbank:",i.error),r(new Error(i.error?.message||"Unknown error"))},i.onblocked=()=>{console.warn("Datenbank wird von einer anderen Verbindung blockiert."),r(new Error("Datenbank ist blockiert."))}})}async add(t){return new Promise((r,i)=>{if(this.db){console.log("add() called");let d=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).add(t);d.onsuccess=()=>r(),d.onerror=()=>i(d.error)}})}async update(t){let r=await this.openDatabase();return new Promise((i,n)=>{if(this.db){let b=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).put(t);b.onsuccess=()=>i(),b.onerror=()=>n(b.error)}})}async delete(t){return new Promise((r,i)=>{if(this.db){let d=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).delete(t);d.onsuccess=()=>r(),d.onerror=()=>i(d.error)}})}async get(t){return new Promise((r,i)=>{if(this.db){let d=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).get(t);d.onsuccess=()=>r(d.result),d.onerror=()=>i(d.error)}})}async getAll(){return new Promise((t,r)=>{if(this.db){let l=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).getAll();l.onsuccess=()=>t(l.result),l.onerror=()=>r(l.error)}})}close(){this.db?.close()}},nr=class{name="";email=null;phone=null;energy=0;image=null},or=class{id=null;myself=null;friends=[];goals=[]},sr=class{description="";time_min=0;time_max=0;energy=0;image=""},ar=class{name="";actions=[]},lr=class{title="";description="";image="";actions=[];routines=[]};(async()=>{let a=new Ge("AppDatabase","Karmatica","id");await a.openDatabase();let t={id:1,myself:{name:"Dominik Bruhn",email:"dominikbruhn@googlemail.com",phone:"015205248862",energy:1,image:null},friends:[{name:"Nico Bruhn",email:null,phone:null,energy:1,image:null},{name:"Christoph Juretko",email:null,phone:null,energy:.6,image:null},{name:"Tim Poloczek",email:null,phone:null,energy:.5,image:null},{name:"Dennis Ratzer",email:null,phone:null,energy:.4,image:null},{name:"Nicole Eckert",email:null,phone:null,energy:.4,image:null},{name:"Stefan Harzke",email:null,phone:null,energy:.6,image:null},{name:"Denis Ergashbaev",email:null,phone:null,energy:.6,image:null},{name:"Bastian \xDCckermann",email:null,phone:null,energy:.2,image:null},{name:"Daniela Meyer zu Ummeln",email:null,phone:null,energy:0,image:null},{name:"Mark Enger",email:null,phone:null,energy:.3,image:null},{name:"Matthias Manasterni",email:null,phone:null,energy:.6,image:null},{name:"Dejan Guberinic",email:null,phone:null,energy:.5,image:null},{name:"Carina Bruhn",email:null,phone:null,energy:0,image:null}],goals:[{title:"Intellektuelle Steigerung",description:"Wachstum und Entwicklung der intellektuellen F\xE4higkeiten einer Person.",image:null,actions:[{description:"Neue Themen lernen",time_min:15,time_max:240,energy:.9,image:null},{description:"Ein Buch lesen",time_min:15,time_max:180,energy:.8,image:null},{description:"Objektive Nachrichten lesen",time_min:15,time_max:30,energy:0,image:null}],routines:[]},{title:"Fit und gesund",description:"Einen gesunden Lebensstil und k\xF6rperliche Fitness aufrechterhalten.",image:null,actions:[{description:"Gesund einkaufen und essen",time_min:30,time_max:null,energy:1,image:null},{description:"Vitamin-D-Tablette im Winter einnehmen",time_min:0,time_max:null,energy:.4,image:null},{description:"Schlafen",time_min:480,time_max:480,energy:1,image:null},{description:"Koffein, Alkohol und Rauchen vermeiden",time_min:0,time_max:null,energy:.8,image:null},{description:"Laufen",time_min:120,time_max:120,energy:1,image:null},{description:"Gym",time_min:120,time_max:120,energy:1,image:null},{description:"Fu\xDFball spielen",time_min:90,time_max:90,energy:1,image:null},{description:"Schwimmen gehen",time_min:120,time_max:240,energy:.5,image:null},{description:"Fitness-Workout",time_min:30,time_max:30,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]},{title:"Guter Papa",description:"Ein unterst\xFCtzender und pr\xE4senter Papa sein.",image:null,actions:[{description:"Lego spielen",time_min:10,time_max:120,energy:.9,image:null},{description:"Gesellschaftsspiele spielen",time_min:30,time_max:180,energy:.8,image:null},{description:"Ins Kino gehen",time_min:120,time_max:180,energy:.7,image:null},{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null}],routines:[]},{title:"Gl\xFCcklich sein",description:"Langfristiges Gl\xFCck und Zufriedenheit erreichen.",image:null,actions:[{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null},{description:"Urlaub machen",time_min:1440,time_max:40320,energy:1,image:null},{description:"Flohmarkt besuchen",time_min:45,time_max:120,energy:.6,image:null},{description:"Spazieren gehen",time_min:30,time_max:180,energy:.4,image:null},{description:"Massage bekommen",time_min:80,time_max:200,energy:.9,image:null},{description:"Computerspiele spielen",time_min:20,time_max:180,energy:0,image:null},{description:"Ein Buch lesen",time_min:15,time_max:180,energy:.8,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Gute Musik h\xF6ren",time_min:0,time_max:null,energy:.8,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Boden wischen",time_min:45,time_max:45,energy:.7,image:null},{description:"Fitness-Workout",time_min:30,time_max:30,energy:.9,image:null},{description:"Kurzer Schlaf zur Wiederherstellung der Energie",time_min:10,time_max:30,energy:.8,image:null},{description:"\xDCber Dinge nachdenken, f\xFCr die man dankbar ist",time_min:5,time_max:20,energy:.9,image:null},{description:"Mit geliebten Menschen in Kontakt bleiben",time_min:10,time_max:120,energy:.8,image:null}],routines:[]},{title:"Resiliente Person",description:"Eine resiliente und entspannte Person sein.",image:null,actions:[{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null},{description:"Spazieren gehen",time_min:30,time_max:180,energy:.4,image:null},{description:"Massage bekommen",time_min:80,time_max:200,energy:.9,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Gute Musik h\xF6ren",time_min:0,time_max:null,energy:.8,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Kurzer Schlaf zur Wiederherstellung der Energie",time_min:10,time_max:30,energy:.8,image:null},{description:"\xDCber Dinge nachdenken, f\xFCr die man dankbar ist",time_min:5,time_max:20,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]},{title:"Sicherheit",description:"Ein gutes Gef\xFChl von Sicherheit haben.",image:null,actions:[{description:"Vorr\xE4te und Krisenwerkzeuge einrichten",time_min:0,time_max:120,energy:.6,image:null},{description:"Finanzen kontinuierlich optimieren",time_min:10,time_max:60,energy:.2,image:null},{description:"In Verm\xF6genswerte f\xFCr Wachstum investieren",time_min:10,time_max:60,energy:.2,image:null}],routines:[]},{title:"Finanzielle Freiheit",description:"Finanzielle Unabh\xE4ngigkeit erreichen.",image:null,actions:[{description:"Minimalistisch leben. Konsum minimieren.",time_min:0,time_max:null,energy:.7,image:null},{description:"Finanzen kontinuierlich optimieren",time_min:10,time_max:60,energy:.2,image:null},{description:"In Verm\xF6genswerte f\xFCr Wachstum investieren",time_min:10,time_max:60,energy:.2,image:null}],routines:[]},{title:"F\xFCr immer leben",description:"In der Lage sein, f\xFCr immer zu leben.",image:null,actions:[{description:"Gesund einkaufen und essen",time_min:30,time_max:null,energy:1,image:null},{description:"Schlafen",time_min:480,time_max:480,energy:1,image:null},{description:"Koffein, Alkohol und Rauchen vermeiden",time_min:0,time_max:null,energy:.8,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]}]};a.add(t),a.close(),console.log("Karmatica erfolgreich in die IndexedDB eingef\xFCgt!")})();var mr=class{async getAll(t){if(!t)return[];try{let r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch data: ${r.status}`);return await r.json()}catch(r){return console.error("Error fetching data:",r),[]}}};var we=class{static capitalizeFirstLetter(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}};var ke=globalThis,Se=ke.ShadowRoot&&(ke.ShadyCSS===void 0||ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ke=Symbol(),cr=new WeakMap,ee=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==Ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o,r=this.t;if(Se&&t===void 0){let i=r!==void 0&&r.length===1;i&&(t=cr.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&cr.set(r,t))}return t}toString(){return this.cssText}},pr=a=>new ee(typeof a=="string"?a:a+"",void 0,Ke),c=(a,...t)=>{let r=a.length===1?a[0]:t.reduce((i,n,l)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+a[l+1],a[0]);return new ee(r,a,Ke)},dr=(a,t)=>{if(Se)a.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(let r of t){let i=document.createElement("style"),n=ke.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=r.cssText,a.appendChild(i)}},Xe=Se?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let r="";for(let i of t.cssRules)r+=i.cssText;return pr(r)})(a):a;var{is:qr,defineProperty:jr,getOwnPropertyDescriptor:Ur,getOwnPropertyNames:Vr,getOwnPropertySymbols:Gr,getPrototypeOf:Kr}=Object,_e=globalThis,hr=_e.trustedTypes,Xr=hr?hr.emptyScript:"",Yr=_e.reactiveElementPolyfillSupport,re=(a,t)=>a,ie={toAttribute(a,t){switch(t){case Boolean:a=a?Xr:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let r=a;switch(t){case Boolean:r=a!==null;break;case Number:r=a===null?null:Number(a);break;case Object:case Array:try{r=JSON.parse(a)}catch{r=null}}return r}},Te=(a,t)=>!qr(a,t),ur={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:Te};Symbol.metadata??=Symbol("metadata"),_e.litPropertyMetadata??=new WeakMap;var rt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=ur){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(t,i,r);n!==void 0&&jr(this.prototype,t,n)}}static getPropertyDescriptor(t,r,i){let{get:n,set:l}=Ur(this.prototype,t)??{get(){return this[r]},set(d){this[r]=d}};return{get:n,set(d){let b=n?.call(this);l?.call(this,d),this.requestUpdate(t,b,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ur}static _$Ei(){if(this.hasOwnProperty(re("elementProperties")))return;let t=Kr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(re("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(re("properties"))){let r=this.properties,i=[...Vr(r),...Gr(r)];for(let n of i)this.createProperty(n,r[n])}let t=this[Symbol.metadata];if(t!==null){let r=litPropertyMetadata.get(t);if(r!==void 0)for(let[i,n]of r)this.elementProperties.set(i,n)}this._$Eh=new Map;for(let[r,i]of this.elementProperties){let n=this._$Eu(r,i);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let r=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let n of i)r.unshift(Xe(n))}else t!==void 0&&r.push(Xe(t));return r}static _$Eu(t,r){let i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,r=this.constructor.elementProperties;for(let i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$ET(t,r){let i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){let l=(i.converter?.toAttribute!==void 0?i.converter:ie).toAttribute(r,i.type);this._$Em=t,l==null?this.removeAttribute(n):this.setAttribute(n,l),this._$Em=null}}_$AK(t,r){let i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){let l=i.getPropertyOptions(n),d=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:ie;this._$Em=n;let b=d.fromAttribute(r,l.type);this[n]=b??this._$Ej?.get(n)??b,this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){let n=this.constructor,l=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??Te)(l,r)||i.useDefault&&i.reflect&&l===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:i,reflect:n,wrapped:l},d){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,d??r??this[t]),l!==!0||d!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(r=void 0),this._$AL.set(t,r)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[n,l]of this._$Ep)this[n]=l;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[n,l]of i){let{wrapped:d}=l,b=this[n];d!==!0||this._$AL.has(n)||b===void 0||this.C(n,void 0,l,b)}}let t=!1,r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(r)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};rt.elementStyles=[],rt.shadowRootOptions={mode:"open"},rt[re("elementProperties")]=new Map,rt[re("finalized")]=new Map,Yr?.({ReactiveElement:rt}),(_e.reactiveElementVersions??=[]).push("2.1.1");var We=globalThis,Re=We.trustedTypes,fr=Re?Re.createPolicy("lit-html",{createHTML:a=>a}):void 0,Je="$lit$",it=`lit$${Math.random().toFixed(9).slice(2)}$`,Ze="?"+it,Wr=`<${Ze}>`,yt=document,oe=()=>yt.createComment(""),se=a=>a===null||typeof a!="object"&&typeof a!="function",Qe=Array.isArray,$r=a=>Qe(a)||typeof a?.[Symbol.iterator]=="function",Ye=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gr=/-->/g,br=/>/g,bt=RegExp(`>|${Ye}(?:([^\\s"'>=/]+)(${Ye}*=${Ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xr=/'/g,yr=/"/g,Er=/^(?:script|style|textarea|title)$/i,Fe=a=>(t,...r)=>({_$litType$:a,strings:t,values:r}),o=Fe(1),di=Fe(2),hi=Fe(3),q=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),vr=new WeakMap,xt=yt.createTreeWalker(yt,129);function wr(a,t){if(!Qe(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return fr!==void 0?fr.createHTML(t):t}var kr=(a,t)=>{let r=a.length-1,i=[],n,l=t===2?"<svg>":t===3?"<math>":"",d=ne;for(let b=0;b<r;b++){let u=a[b],$,S,x=-1,k=0;for(;k<u.length&&(d.lastIndex=k,S=d.exec(u),S!==null);)k=d.lastIndex,d===ne?S[1]==="!--"?d=gr:S[1]!==void 0?d=br:S[2]!==void 0?(Er.test(S[2])&&(n=RegExp("</"+S[2],"g")),d=bt):S[3]!==void 0&&(d=bt):d===bt?S[0]===">"?(d=n??ne,x=-1):S[1]===void 0?x=-2:(x=d.lastIndex-S[2].length,$=S[1],d=S[3]===void 0?bt:S[3]==='"'?yr:xr):d===yr||d===xr?d=bt:d===gr||d===br?d=ne:(d=bt,n=void 0);let y=d===bt&&a[b+1].startsWith("/>")?" ":"";l+=d===ne?u+Wr:x>=0?(i.push($),u.slice(0,x)+Je+u.slice(x)+it+y):u+it+(x===-2?b:y)}return[wr(a,l+(a[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},ae=class a{constructor({strings:t,_$litType$:r},i){let n;this.parts=[];let l=0,d=0,b=t.length-1,u=this.parts,[$,S]=kr(t,r);if(this.el=a.createElement($,i),xt.currentNode=this.el.content,r===2||r===3){let x=this.el.content.firstChild;x.replaceWith(...x.childNodes)}for(;(n=xt.nextNode())!==null&&u.length<b;){if(n.nodeType===1){if(n.hasAttributes())for(let x of n.getAttributeNames())if(x.endsWith(Je)){let k=S[d++],y=n.getAttribute(x).split(it),L=/([.?@])?(.*)/.exec(k);u.push({type:1,index:l,name:L[2],strings:y,ctor:L[1]==="."?Ce:L[1]==="?"?Ae:L[1]==="@"?Oe:$t}),n.removeAttribute(x)}else x.startsWith(it)&&(u.push({type:6,index:l}),n.removeAttribute(x));if(Er.test(n.tagName)){let x=n.textContent.split(it),k=x.length-1;if(k>0){n.textContent=Re?Re.emptyScript:"";for(let y=0;y<k;y++)n.append(x[y],oe()),xt.nextNode(),u.push({type:2,index:++l});n.append(x[k],oe())}}}else if(n.nodeType===8)if(n.data===Ze)u.push({type:2,index:l});else{let x=-1;for(;(x=n.data.indexOf(it,x+1))!==-1;)u.push({type:7,index:l}),x+=it.length-1}l++}}static createElement(t,r){let i=yt.createElement("template");return i.innerHTML=t,i}};function vt(a,t,r=a,i){if(t===q)return t;let n=i!==void 0?r._$Co?.[i]:r._$Cl,l=se(t)?void 0:t._$litDirective$;return n?.constructor!==l&&(n?._$AO?.(!1),l===void 0?n=void 0:(n=new l(a),n._$AT(a,r,i)),i!==void 0?(r._$Co??=[])[i]=n:r._$Cl=n),n!==void 0&&(t=vt(a,n._$AS(a,t.values),n,i)),t}var Le=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:r},parts:i}=this._$AD,n=(t?.creationScope??yt).importNode(r,!0);xt.currentNode=n;let l=xt.nextNode(),d=0,b=0,u=i[0];for(;u!==void 0;){if(d===u.index){let $;u.type===2?$=new qt(l,l.nextSibling,this,t):u.type===1?$=new u.ctor(l,u.name,u.strings,this,t):u.type===6&&($=new Ie(l,this,t)),this._$AV.push($),u=i[++b]}d!==u?.index&&(l=xt.nextNode(),d++)}return xt.currentNode=yt,n}p(t){let r=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}},qt=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,i,n){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=vt(this,t,r),se(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):$r(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==_&&se(this._$AH)?this._$AA.nextSibling.data=t:this.T(yt.createTextNode(t)),this._$AH=t}$(t){let{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ae.createElement(wr(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(r);else{let l=new Le(n,this),d=l.u(this.options);l.p(r),this.T(d),this._$AH=l}}_$AC(t){let r=vr.get(t.strings);return r===void 0&&vr.set(t.strings,r=new ae(t)),r}k(t){Qe(this._$AH)||(this._$AH=[],this._$AR());let r=this._$AH,i,n=0;for(let l of t)n===r.length?r.push(i=new a(this.O(oe()),this.O(oe()),this,this.options)):i=r[n],i._$AI(l),n++;n<r.length&&(this._$AR(i&&i._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},$t=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,n,l){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=l,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}_$AI(t,r=this,i,n){let l=this.strings,d=!1;if(l===void 0)t=vt(this,t,r,0),d=!se(t)||t!==this._$AH&&t!==q,d&&(this._$AH=t);else{let b=t,u,$;for(t=l[0],u=0;u<l.length-1;u++)$=vt(this,b[i+u],r,u),$===q&&($=this._$AH[u]),d||=!se($)||$!==this._$AH[u],$===_?t=_:t!==_&&(t+=($??"")+l[u+1]),this._$AH[u]=$}d&&!n&&this.j(t)}j(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ce=class extends $t{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===_?void 0:t}},Ae=class extends $t{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==_)}},Oe=class extends $t{constructor(t,r,i,n,l){super(t,r,i,n,l),this.type=5}_$AI(t,r=this){if((t=vt(this,t,r,0)??_)===q)return;let i=this._$AH,n=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,l=t!==_&&(i===_||n);n&&this.element.removeEventListener(this.name,this,i),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ie=class{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){vt(this,t)}},Sr={M:Je,P:it,A:Ze,C:1,L:kr,R:Le,D:$r,V:vt,I:qt,H:$t,N:Ae,U:Oe,B:Ce,F:Ie},Jr=We.litHtmlPolyfillSupport;Jr?.(ae,qt),(We.litHtmlVersions??=[]).push("3.3.1");var _r=(a,t,r)=>{let i=r?.renderBefore??t,n=i._$litPart$;if(n===void 0){let l=r?.renderBefore??null;i._$litPart$=n=new qt(t.insertBefore(oe(),l),l,void 0,r??{})}return n._$AI(a),n};var Ne=globalThis,G=class extends rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_r(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};G._$litElement$=!0,G.finalized=!0,Ne.litElementHydrateSupport?.({LitElement:G});var Zr=Ne.litElementPolyfillSupport;Zr?.({LitElement:G});(Ne.litElementVersions??=[]).push("4.2.1");var f=(n=>(n.primary="primary",n.secondary="secondary",n.surface="surface",n.plain="plain",n))(f||{}),v=class{static getStyle(t){return t?t=="plain"?o``:o` <style>
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
          </style>`:o``}static getOposite(t){return t=="plain"?"surface":t=="primary"||t=="primary"?"secondary":t=="secondary"?"primary":"plain"}getParentTheme(t){let r=t;for(;r!=null;){if(r.theme!=null)return r.theme;r=r.parentElement}}};var m=a=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(a,t)}):customElements.define(a,t)};var Qr={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:Te},Fr=(a=Qr,t,r)=>{let{kind:i,metadata:n}=r,l=globalThis.litPropertyMetadata.get(n);if(l===void 0&&globalThis.litPropertyMetadata.set(n,l=new Map),i==="setter"&&((a=Object.create(a)).wrapped=!0),l.set(r.name,a),i==="accessor"){let{name:d}=r;return{set(b){let u=t.get.call(this);t.set.call(this,b),this.requestUpdate(d,u,a)},init(b){return b!==void 0&&this.C(d,void 0,a,b),b}}}if(i==="setter"){let{name:d}=r;return function(b){let u=this[d];t.call(this,b),this.requestUpdate(d,u,a)}}throw Error("Unsupported decorator location: "+i)};function s(a){return(t,r)=>typeof r=="object"?Fr(a,t,r):((i,n,l)=>{let d=n.hasOwnProperty(l);return n.constructor.createProperty(l,i),d?Object.getOwnPropertyDescriptor(n,l):void 0})(a,t,r)}function jt(a){return s({...a,state:!0,attribute:!1})}var Et=(a,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(a,t,r),r);function g(a,t){return(r,i,n)=>{let l=d=>d.renderRoot?.querySelector(a)??null;if(t){let{get:d,set:b}=typeof i=="object"?r:n??(()=>{let u=Symbol();return{get(){return this[u]},set($){this[u]=$}}})();return Et(r,i,{get(){let u=d.call(this);return u===void 0&&(u=l(this),(u!==null||this.hasUpdated)&&b.call(this,u)),u}})}return Et(r,i,{get(){return l(this)}})}}var h=class extends G{theme="plain";throwCustomEvent(t,r){this.dispatchEvent(new CustomEvent(t,{detail:r,bubbles:!0,composed:!0}))}};e([s({type:f,converter:String})],h.prototype,"theme",2);var Tr=class{constructor(t,r,i=10240){this.key=t;this.minWidth=r;this.maxWidth=i}asMediaStyle(t){let r="@media ";return this.minWidth&&(r=r.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(r=r.concat(" and "))),this.maxWidth&&(r=r.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),r=r.concat("{"),r=r.concat(t),r=r.concat("} "),r}};var Z=class extends h{key=null;item={};title="";updated(t){t.has("item")&&(this.title=this.item.constructor.name)}formComponent;render(){return o`
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
    `}renderFormFields(){let t=[];for(let[r,i]of Object.entries(this.item)){let n=we.capitalizeFirstLetter(r),l;switch(typeof i){case"boolean":l=o`
            <nidoca-form-switch
              style="padding-bottom:var(--space-2);"
              label="${n}"
              name="${r}"
              .value="${i||""}"
            ></nidoca-form-switch>
          `;break;case"string":l=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${n}"
              name="${r}"
              .value="${i||""}"
            ></nidoca-form-text>
          `;break;case"number":l=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${n}"
              name="${r}"
              type="number"
              .value="${i||""}"
            ></nidoca-form-text>
          `;break;default:l=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${n}"
              name="${r}"
              .value="${i&&JSON.stringify(i)}"
            ></nidoca-form-text>
          `}t.push(l)}return o`${t}`}deleteItem(){this.formComponent!=null&&(console.log("item deleted."),this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-deleted",this.item))}updateItem(){this.formComponent!=null&&this.formComponent.validate()&&(this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-updated",this.item))}saveItem(){this.formComponent!=null&&this.formComponent.validate()&&(this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-saved",this.item))}cancel(){this.throwCustomEvent("nidoca-event-generic-edit-cancel",this.item)}};e([s({type:Object})],Z.prototype,"key",2),e([s({type:Object})],Z.prototype,"item",2),e([s({type:String})],Z.prototype,"title",2),e([g("#form")],Z.prototype,"formComponent",2),Z=e([m("nidoca-generic-edit")],Z);var wt=class extends h{slotElement;render(){return o`
    <nidoca-container>
      <nidoca-search-bar></nidoca-search-bar>
      <nidoca-list id="listElement">
        <slot></slot>
      </nidoca-list>
    </nidoca-container>
    `}};e([g("#listElement")],wt.prototype,"slotElement",2),wt=e([m("nidoca-list-search")],wt);var kt=class extends h{listView=!0;edit=null;listSearch=null;render(){return o`<slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}updated(t){super.updated(t),t.has("listSearch"),this.listView}slotChanged(t){let r=t.target;if(r==null)return;let i=r.assignedElements();for(let n=0;n<i.length;n++){let l=i[n];l instanceof wt&&(this.listSearch=l),l instanceof Z&&(this.edit=l)}}};e([jt()],kt.prototype,"listView",2),e([jt()],kt.prototype,"edit",2),e([jt()],kt.prototype,"listSearch",2),kt=e([m("nidoca-crud")],kt);var K=class extends h{theme="surface";header="";opened=!1;render(){return o`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?o` <slot></slot>`:o``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=!this.opened,console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};p(K,"styles",c`
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
  `),e([s({type:f,converter:String})],K.prototype,"theme",2),e([s({type:String})],K.prototype,"header",2),e([s({type:Boolean})],K.prototype,"opened",2),K=e([m("nidoca-accordion-item")],K);var R=class extends h{theme="plain";overline="";title="";summary="";text="";render(){return o`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?o` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:o``}
        ${this.title?o` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:o``}
        ${this.summary?o`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:o``}
        ${this.text?o` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:o``}
        <slot></slot>
      </div>
    `}static example(t="",r="plain"){return o`<nidoca-article
      theme="${r}"
      slot="${t}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`}};p(R,"styles",c`
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
  `),e([s({type:f,converter:String})],R.prototype,"theme",2),e([s({type:String})],R.prototype,"overline",2),e([s({type:String})],R.prototype,"title",2),e([s({type:String})],R.prototype,"summary",2),e([s({type:String})],R.prototype,"text",2),R=e([m("nidoca-article")],R);var Rr=(r=>(r.single="single",r.multi="multi",r))(Rr||{}),mt=class extends h{theme="plain";accordionType="single";accordionSlot;updated(t){super.updated(t),t.forEach((r,i)=>{if(i=="theme"&&this.accordionSlot!=null){let n=this.accordionSlot.assignedElements();for(let l=0;l<n.length;l++){let d=n[l];d instanceof K&&(d.theme=this.theme)}}})}render(){return o`
      ${v.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let r=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let i=this.accordionSlot.assignedElements();for(let n=0;n<i.length;n++){let l=i[n];l instanceof K&&l!=r&&(l.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return o`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${R.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};p(mt,"styles",c`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `),e([s({type:f,converter:String})],mt.prototype,"theme",2),e([s({type:Rr,converter:String})],mt.prototype,"accordionType",2),e([g("#accordionSlot")],mt.prototype,"accordionSlot",2),mt=e([m("nidoca-accordion")],mt);var Lr=(n=>(n.none="none",n.shadow_1="shadow_1",n.shadow_2="shadow_2",n.shadow_3="shadow_3",n))(Lr||{}),X=class extends h{theme="primary";shadowType="shadow_1";icon="";clickable=!0;deactivated=!1;title="";render(){return o`
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
    `}};p(X,"styles",c`
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
  `),e([s({type:String})],X.prototype,"theme",2),e([s({type:Object})],X.prototype,"shadowType",2),e([s({type:String})],X.prototype,"icon",2),e([s({type:Boolean})],X.prototype,"clickable",2),e([s({type:Boolean})],X.prototype,"deactivated",2),e([s({type:String})],X.prototype,"title",2),X=e([m("nidoca-icon-extended")],X);var Cr=(n=>(n[n.current=0]="current",n[n.completed=1]="completed",n[n.open=2]="open",n[n.finish=3]="finish",n))(Cr||{}),j=class extends h{icon="";primaryText="";state;isLast=!1;index;first=!1;render(){return o`
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
    `}determineBackgroundColor(t){return t==1?"var(--app-color-text-primary)":t==0?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==3?"var(--app-color-success)":t==1?"var(--mdc-theme-on-primary)":t==0?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){let t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};p(j,"styles",c`
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
  `),e([s({type:String})],j.prototype,"icon",2),e([s({type:String})],j.prototype,"primaryText",2),e([s({type:Number})],j.prototype,"state",2),e([s({type:Boolean})],j.prototype,"isLast",2),j=e([m("nidoca-wizard-step")],j);var Ut=class extends h{wizardSlot;render(){return o`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){let r=t.target;if(r==null)return;let i=r.assignedElements(),n=0;for(let l=0;l<i.length;l++){let d=i[l];d instanceof j&&(d.index=l,d.state==0&&(n=l),d.index==i.length-1&&(d.isLast=!0))}this.changeState(n)}stepClicked(t){let r=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",r),this.changeState(r)}changeState(t){if(this.wizardSlot){let r=this.wizardSlot.assignedElements();for(let i=0;i<r.length;i++){let n=r[i];n instanceof j&&n.index!==void 0&&(n.index<t?n.state=1:n.index==t?n.state=0:n.state=2)}}}};p(Ut,"styles",c``),e([g("#wizardSlot")],Ut.prototype,"wizardSlot",2),Ut=e([m("nidoca-wizard")],Ut);var ct=class extends h{clickable=!0;theme="surface";text="";render(){return o`
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
    `}static example(t=""){return o`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};p(ct,"styles",c`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }
    .clickable {
      cursor: pointer;
    }
  `),e([s({type:Boolean})],ct.prototype,"clickable",2),e([s({type:f,converter:String})],ct.prototype,"theme",2),e([s({type:String})],ct.prototype,"text",2),ct=e([m("nidoca-chip")],ct);var St=class extends h{code="";theme="plain";render(){return o`
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
    `}static example(t=""){return o`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};p(St,"styles",c`
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
  `),e([s({type:String})],St.prototype,"code",2),e([s({type:String})],St.prototype,"theme",2),St=e([m("nidoca-code")],St);var ze=class{static PROGRESS="PROGRESS";static PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"},_t=class extends h{theme;progressType=ze.PROGRESS;render(){return o` <style>
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

      <progress class="${this.progressType}"></progress>`}};p(_t,"styles",c``),e([s({type:f,converter:String})],_t.prototype,"theme",2),e([s({type:ze,converter:String})],_t.prototype,"progressType",2),_t=e([m("nidoca-progress")],_t);var He=(i=>(i.contained="contained",i.outlined="outlined",i.text="text",i))(He||{}),nt=class extends h{theme="primary";buttonType="contained";icon="";text="";render(){return o`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};p(nt,"styles",c`
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
  `),e([s({type:f,converter:String})],nt.prototype,"theme",2),e([s({type:He,converter:String})],nt.prototype,"buttonType",2),e([s({type:String})],nt.prototype,"icon",2),e([s({type:String})],nt.prototype,"text",2),nt=e([m("nidoca-button")],nt);var Ar=class{key="";value},H=class extends h{};var Or=class{jsonObject;formData=FormData.prototype},Tt=class extends h{autocomplete=!0;slotElement;render(){return o`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,r={};for(let n of this.getInputElements(this.slotElement)){let l=n.getOutputData();r[l.key]=l.value,t.append(l.key,l.value)}let i={};return i.jsonObject=r,i.formData=t,i}validate(){let t=!0;for(let r of this.getInputElements(this.slotElement))r.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let r=[],i=t.assignedElements({flatten:!0});for(let n=0;n<i.length;n++){let l=i[n];this.recursiveInputElementSearch(l,r)}return r}recursiveInputElementSearch(t,r){if(t instanceof H)r.push(t);else if(t.hasChildNodes()){let i=t.children;for(let n of[].slice.call(i))this.recursiveInputElementSearch(n,r)}}};p(Tt,"styles",c`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `),e([s({type:Boolean})],Tt.prototype,"autocomplete",2),e([g("#slotElement")],Tt.prototype,"slotElement",2),Tt=e([m("nidoca-form")],Tt);var Ir={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pe=a=>(...t)=>({_$litDirective$:a,values:t}),Vt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};var{I:Nr}=Sr;var zr=()=>document.createComment(""),Gt=(a,t,r)=>{let i=a._$AA.parentNode,n=t===void 0?a._$AB:t._$AA;if(r===void 0){let l=i.insertBefore(zr(),n),d=i.insertBefore(zr(),n);r=new Nr(l,d,a,a.options)}else{let l=r._$AB.nextSibling,d=r._$AM,b=d!==a;if(b){let u;r._$AQ?.(a),r._$AM=a,r._$AP!==void 0&&(u=a._$AU)!==d._$AU&&r._$AP(u)}if(l!==n||b){let u=r._$AA;for(;u!==l;){let $=u.nextSibling;i.insertBefore(u,n),u=$}}}return r},pt=(a,t,r=a)=>(a._$AI(t,r),a),ti={},Hr=(a,t=ti)=>a._$AH=t,Pr=a=>a._$AH,Me=a=>{a._$AR(),a._$AA.remove()};var Mr=(a,t,r)=>{let i=new Map;for(let n=t;n<=r;n++)i.set(a[n],n);return i},Kt=Pe(class extends Vt{constructor(a){if(super(a),a.type!==Ir.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,t,r){let i;r===void 0?r=t:t!==void 0&&(i=t);let n=[],l=[],d=0;for(let b of a)n[d]=i?i(b,d):d,l[d]=r(b,d),d++;return{values:l,keys:n}}render(a,t,r){return this.dt(a,t,r).values}update(a,[t,r,i]){let n=Pr(a),{values:l,keys:d}=this.dt(t,r,i);if(!Array.isArray(n))return this.ut=d,l;let b=this.ut??=[],u=[],$,S,x=0,k=n.length-1,y=0,L=l.length-1;for(;x<=k&&y<=L;)if(n[x]===null)x++;else if(n[k]===null)k--;else if(b[x]===d[y])u[y]=pt(n[x],l[y]),x++,y++;else if(b[k]===d[L])u[L]=pt(n[k],l[L]),k--,L--;else if(b[x]===d[L])u[L]=pt(n[x],l[L]),Gt(a,u[L+1],n[x]),x++,L--;else if(b[k]===d[y])u[y]=pt(n[k],l[y]),Gt(a,n[x],n[k]),k--,y++;else if($===void 0&&($=Mr(d,y,L),S=Mr(b,x,k)),$.has(b[x]))if($.has(b[k])){let et=S.get(d[y]),Ve=et!==void 0?n[et]:null;if(Ve===null){let tr=Gt(a,n[x]);pt(tr,l[y]),u[y]=tr}else u[y]=pt(Ve,l[y]),Gt(a,n[x],Ve),n[et]=null;y++}else Me(n[k]),k--;else Me(n[x]),x++;for(;y<=L;){let et=Gt(a,u[L+1]);pt(et,l[y]),u[y++]=et}for(;x<=k;){let et=n[x++];et!==null&&Me(et)}return this.ut=d,Hr(a,u),q}});var ei={},le=Pe(class extends Vt{constructor(){super(...arguments),this.ot=ei}render(a,t){return t()}update(a,[t,r]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((i,n)=>i===this.ot[n]))return q}else if(this.ot===t)return q;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,r)}});var C=class extends H{theme="surface";trailingIcon="";label="";errorText="";infoText="";warningText="";value="";options=[];name="";required=!0;multiple=!1;size=1;selectElement;render(){return o` <style>
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
            ${le([this.value,this.options],()=>o`
                ${Kt(this.options,t=>t==null?o` <option></option>`:this.isSelectedOption(t)?o` <option value="${t.key}" selected>${t.value}</option> `:o` <option value="${t.key}">${t.value}</option> `)}
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
          `:o``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let r=0,i=this.selectElement.options.length;r<i;r++)this.selectElement.options[r].selected&&t.push(this.options[r].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let r=!1;for(let i of this.value)if(r=t.key===i,r)return!0}return this.value===t.key}static enumToOptions(t,r=!0){let i=[];return r&&i.push({key:"",value:""}),Object.keys(t).forEach(n=>{i.push({key:n,value:t[n]})}),i}static stringArrayToOptions(t,r=!0){let i=[];return r&&i.push({key:"",value:""}),t.forEach(n=>{i.push({key:n,value:n})}),i}static toComboboxOptions(t=null,r=null){if(t==null)return[];let i=[];return Object.values(t).forEach(n=>{let l=String(Object.keys(t)[Object.values(t).indexOf(n)]);r&&(l=l.concat(r)),i.push({key:n,value:l})}),i}};p(C,"styles",c`
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
  `),e([s({type:f,converter:String})],C.prototype,"theme",2),e([s({type:String})],C.prototype,"trailingIcon",2),e([s({type:String})],C.prototype,"label",2),e([s({type:String})],C.prototype,"errorText",2),e([s({type:String})],C.prototype,"infoText",2),e([s({type:String})],C.prototype,"warningText",2),e([s()],C.prototype,"value",2),e([s({type:Array})],C.prototype,"options",2),e([s({type:String})],C.prototype,"name",2),e([s({type:Boolean})],C.prototype,"required",2),e([s({type:Boolean})],C.prototype,"multiple",2),e([s({type:Number})],C.prototype,"size",2),e([g("#selectElement")],C.prototype,"selectElement",2),C=e([m("nidoca-form-combobox")],C);var T=a=>a??_;var ot=(y=>(y.color="color",y.email="email",y.hidden="hidden",y.number="number",y.password="password",y.tel="tel",y.text="text",y.search="search",y.url="url",y.date="date",y.month="month",y.time="time",y.week="week",y))(ot||{}),w=class extends H{type="text";label="";placeholder="";trailingIcon="";errorText="";infoText="";warningText="";name="";value="";required=!1;disabled=!1;checked=!1;maxlength;minlength;min;max;step;size;pattern;inputElement;theme="plain";render(){return this.type=="hidden"?o`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:o` <style>
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
              `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t?.trim()}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),this.errorText==""}};p(w,"styles",c`
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
  `),e([s({type:ot,converter:String})],w.prototype,"type",2),e([s({type:String})],w.prototype,"label",2),e([s({type:String})],w.prototype,"placeholder",2),e([s({type:String})],w.prototype,"trailingIcon",2),e([s({type:String})],w.prototype,"errorText",2),e([s({type:String})],w.prototype,"infoText",2),e([s({type:String})],w.prototype,"warningText",2),e([s({type:String})],w.prototype,"name",2),e([s()],w.prototype,"value",2),e([s({type:Boolean})],w.prototype,"required",2),e([s({type:Boolean})],w.prototype,"disabled",2),e([s({type:Boolean})],w.prototype,"checked",2),e([s({type:Number})],w.prototype,"maxlength",2),e([s({type:Number})],w.prototype,"minlength",2),e([s({type:Number})],w.prototype,"min",2),e([s({type:Number})],w.prototype,"max",2),e([s({type:String})],w.prototype,"step",2),e([s({type:Number})],w.prototype,"size",2),e([s({type:String})],w.prototype,"pattern",2),e([g("#inputElement")],w.prototype,"inputElement",2),e([s({type:f,converter:String})],w.prototype,"theme",2),w=e([m("nidoca-form-text")],w);var De=class extends w{constructor(){super(),this.type="date"}};De=e([m("nidoca-form-date")],De);var O=class extends H{theme="surface";infoText="";warningText="";errorText="";name="";value="";label="";required=!1;placeholder="";disabled=!1;rows=5;inputElement;render(){return o` <style>
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
          `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};p(O,"styles",c`
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
  `),e([s({type:f,converter:String})],O.prototype,"theme",2),e([s({type:String})],O.prototype,"infoText",2),e([s({type:String})],O.prototype,"warningText",2),e([s({type:String})],O.prototype,"errorText",2),e([s({type:String})],O.prototype,"name",2),e([s()],O.prototype,"value",2),e([s({type:String})],O.prototype,"label",2),e([s({type:Boolean})],O.prototype,"required",2),e([s({type:String})],O.prototype,"placeholder",2),e([s({type:Boolean})],O.prototype,"disabled",2),e([s({type:Number})],O.prototype,"rows",2),e([g("#inputElement")],O.prototype,"inputElement",2),O=e([m("nidoca-form-textarea")],O);var Rt=class extends H{validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}theme="primary";inputElement;render(){return o`
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
    `}upload(){this.inputElement?.click()}};p(Rt,"styles",c`
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
  `),e([s({type:f,converter:String})],Rt.prototype,"theme",2),e([g("#inputElement")],Rt.prototype,"inputElement",2),Rt=e([m("nidoca-form-upload")],Rt);var z=class extends H{name="";label="";infoText="";errorText="";warningText="";required=!1;disabled=!1;checked=!1;theme="primary";inputElement;constructor(){super(),this.theme=v.prototype.getParentTheme(this)||"plain"}render(){return o`
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
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};p(z,"styles",c`
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
  `),e([s({type:String})],z.prototype,"name",2),e([s({type:String})],z.prototype,"label",2),e([s({type:String})],z.prototype,"infoText",2),e([s({type:String})],z.prototype,"errorText",2),e([s({type:String})],z.prototype,"warningText",2),e([s({type:Boolean})],z.prototype,"required",2),e([s({type:Boolean})],z.prototype,"disabled",2),e([s({type:Boolean})],z.prototype,"checked",2),e([s({type:String})],z.prototype,"theme",2),e([g("#inputElement")],z.prototype,"inputElement",2),z=e([m("nidoca-form-switch")],z);var Q=class extends h{theme="primary";label="Newsletter";emailLabel="Deine Emailadresse";buttonLabel="Registrieren";formComponent;render(){return o`
      <nidoca-box theme="${T(this.theme)}">
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};p(Q,"styles",c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),e([s({type:f,converter:String})],Q.prototype,"theme",2),e([s({type:String,converter:String})],Q.prototype,"label",2),e([s({type:String,converter:String})],Q.prototype,"emailLabel",2),e([s({type:String,converter:String})],Q.prototype,"buttonLabel",2),e([g("#form")],Q.prototype,"formComponent",2),Q=e([m("nidoca-form-newsletter")],Q);var F=class extends h{theme="primary";label="Passwort zur\xFCcksetzen";emailLabel="Deine Emailadresse";buttonLabel="Zur\xFCcksetzen";formComponent;render(){return o`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};p(F,"styles",c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),e([s({type:f,converter:String})],F.prototype,"theme",2),e([s({type:String,converter:String})],F.prototype,"label",2),e([s({type:String,converter:String})],F.prototype,"emailLabel",2),e([s({type:String,converter:String})],F.prototype,"buttonLabel",2),e([g("#form")],F.prototype,"formComponent",2),F=e([m("nidoca-form-reset-password")],F);var I=class extends h{theme="surface";label="Passwort \xE4ndern";oldPasswordLabel="Altes Passwort";newPasswordLabel="Neues Passwort";repeatNewPasswordLabel="Wiederholen";buttonLabel="\xC4ndern";formComponent;oldPasswordInputField;newPasswordInputField;repeatNewPasswordInputField;showErrorMessageSamePassword=!1;errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";showErrorMessagePasswordDiff=!1;errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein";render(){return o`
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
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};p(I,"styles",c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),e([s({type:f,converter:String})],I.prototype,"theme",2),e([s({type:String,converter:String})],I.prototype,"label",2),e([s({type:String,converter:String})],I.prototype,"oldPasswordLabel",2),e([s({type:String,converter:String})],I.prototype,"newPasswordLabel",2),e([s({type:String,converter:String})],I.prototype,"repeatNewPasswordLabel",2),e([s({type:String,converter:String})],I.prototype,"buttonLabel",2),e([g("#form")],I.prototype,"formComponent",2),e([g("#oldPassword")],I.prototype,"oldPasswordInputField",2),e([g("#newPassword")],I.prototype,"newPasswordInputField",2),e([g("#repeatNewPassword")],I.prototype,"repeatNewPasswordInputField",2),e([s()],I.prototype,"errorMessageSamePasswordLabel",2),e([s()],I.prototype,"errorMessagePasswordDiffLabel",2),I=e([m("nidoca-form-change-password")],I);var Y=class extends h{theme="primary";label="Registrieren";emailLabel="Email";passwordLabel="Passwort";buttonLabel="Registrieren";formComponent;render(){return o`
      <nidoca-box theme="${T(this.theme)}">
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};p(Y,"styles",c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),e([s({type:f,converter:String})],Y.prototype,"theme",2),e([s({type:String,converter:String})],Y.prototype,"label",2),e([s({type:String,converter:String})],Y.prototype,"emailLabel",2),e([s({type:String,converter:String})],Y.prototype,"passwordLabel",2),e([s({type:String,converter:String})],Y.prototype,"buttonLabel",2),e([g("#form")],Y.prototype,"formComponent",2),Y=e([m("nidoca-form-register")],Y);var Xt=class extends h{code="";render(){return o``}};p(Xt,"styles",c``),e([s({type:String})],Xt.prototype,"code",2),Xt=e([m("nidoca-upload")],Xt);var Lt=class extends h{theme="plain";text="";render(){return o`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};p(Lt,"styles",c`
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
  `),e([s({type:f,converter:String})],Lt.prototype,"theme",2),e([s({type:String,converter:String})],Lt.prototype,"text",2),Lt=e([m("nidoca-hr")],Lt);var Ct=class extends h{text="";icon="";render(){return o`
      <div class="container">
        ${this.icon?o` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:o``}
        ${this.text?o` <nidoca-text-button>${this.text}</nidoca-text-button>`:o``}
        <slot></slot>
      </div>
    `}static example(t=""){return o`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};p(Ct,"styles",c`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `),e([s({type:String})],Ct.prototype,"text",2),e([s({type:String})],Ct.prototype,"icon",2),Ct=e([m("nidoca-menu-area")],Ct);var U=class extends h{text="";icon="";selected=!1;theme="surface";render(){return o`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};p(U,"styles",c`
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
  `),e([s({type:String})],U.prototype,"text",2),e([s({type:String})],U.prototype,"icon",2),e([s({type:Boolean})],U.prototype,"selected",2),e([s({type:String})],U.prototype,"theme",2),U=e([m("nidoca-menu-item")],U);var At=class extends h{theme="plain";slotElement;render(){return o` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((r,i)=>{if(i=="theme"&&this.slotElement!=null){let n=this.slotElement.assignedElements();for(let l=0;l<n.length;l++){let d=n[l];d instanceof U&&(d.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let r=this.slotElement.assignedElements();for(let i=0;i<r.length;i++){let n=r[i];if(n instanceof U){let l=n.getBoundingClientRect();l.left<t.x&&l.right>t.x&&(l.top<t.y&&l.bottom>t.y?n.selected=!0:n.selected=!1)}}}})}static example(t=""){return o`
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
    `}};p(At,"styles",c`
    :host,
    slot {
      display: block;
    }
  `),e([s({type:String})],At.prototype,"theme",2),e([g("#slotElement")],At.prototype,"slotElement",2),At=e([m("nidoca-menu")],At);var W=class extends h{height="auto";width="auto";left="auto";top="auto";right="auto";bottom="auto";render(){return o`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,r,i,n,l,d){return"height:".concat(t).concat(";").concat("width:").concat(r).concat(";").concat("left:").concat(i).concat(";").concat("right:").concat(n).concat(";").concat("top:").concat(l).concat(";").concat("bottom:").concat(d).concat(";")}};p(W,"styles",c`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `),e([s({type:String})],W.prototype,"height",2),e([s({type:String})],W.prototype,"width",2),e([s({type:String})],W.prototype,"left",2),e([s({type:String})],W.prototype,"top",2),e([s({type:String})],W.prototype,"right",2),e([s({type:String})],W.prototype,"bottom",2),W=e([m("nidoca-layout-floating")],W);var Yt=class extends h{theme="plain";render(){return o`<slot></slot>`}};p(Yt,"styles",c`
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
  `),e([s({type:String})],Yt.prototype,"theme",2),Yt=e([m("nidoca-container")],Yt);var Ot=class extends h{theme;hideSidebox=!0;constructor(){super(),this.theme=v.prototype.getParentTheme(this)||"plain"}render(){return o` <style>
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
      ${this.hideSidebox?o``:o` <slot class="sidebox" name="sidebox"></slot>`}`}};p(Ot,"styles",c`
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
  `),e([s({type:f,converter:String})],Ot.prototype,"theme",2),e([s({type:Boolean,converter:String})],Ot.prototype,"hideSidebox",2),Ot=e([m("nidoca-split-screen")],Ot);var V=class extends h{icon="";clickable=!0;deactivated=!1;title="";render(){return o`
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
    `}};p(V,"styles",c`
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
  `),e([s({type:String})],V.prototype,"icon",2),e([s({type:Boolean})],V.prototype,"clickable",2),e([s({type:Boolean})],V.prototype,"deactivated",2),e([s({type:String})],V.prototype,"title",2),V=e([m("nidoca-icon")],V);var Wt=class extends h{rippleContainerElement;render(){return o`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(this.rippleContainerElement!=null){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);let r=this.rippleContainerElement.getBoundingClientRect(),i=Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${i}; --x:${t.clientX-r.left}; --y:${t.clientY-r.top};`)}}};p(Wt,"styles",c`
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
  `),e([g("#rippleContainer")],Wt.prototype,"rippleContainerElement",2),Wt=e([m("nidoca-ripple")],Wt);var P=class extends h{src="";width="100%";height="auto";zoom=!1;render(){return this.src?o`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:o``}static exampleImage(){return"data:image/jpeg;base64,IMG"}static example(t=""){return o`<nidoca-img width="64px" width="64px" slot="${t}" src="${this.exampleImage()} "></nidoca-img>`}};p(P,"styles",c`
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
  `),e([s({type:String})],P.prototype,"src",2),e([s({type:String})],P.prototype,"width",2),e([s({type:String})],P.prototype,"height",2),e([s({type:Boolean})],P.prototype,"zoom",2),P=e([m("nidoca-img")],P);var It=class extends P{static example(t=""){return o`<nidoca-img-round width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img-round>`}};p(It,"styles",c`
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
  `),It=e([m("nidoca-img-round")],It);var zt=class extends h{theme="plain";selected;render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:o``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let r=t.target;if(r==null)return;let i=r.assignedElements();for(let n=0;n<i.length;n++){let l=i[n];if(l instanceof P){this.selected==null&&n==0&&(this.selected=l.cloneNode(!0)),l.addEventListener("click",b=>{b.target&&(this.selected=b.target.cloneNode(!0))}),l.width="148px";let d=l.classList;d.contains("img")||d.add("img")}}}};p(zt,"styles",c`
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
  `),e([s({type:f,converter:String})],zt.prototype,"theme",2),e([jt()],zt.prototype,"selected",2),zt=e([m("nidoca-img-slider")],zt);var Jt=class extends h{src="";render(){return o`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};p(Jt,"styles",c``),e([s({type:String})],Jt.prototype,"src",2),Jt=e([m("nidoca-movie")],Jt);var M=class extends h{theme;label="";placeholder="";name="";min=1;max=10;errorText="";numberOne=1;numberTwo=1;inputfield;render(){return o`
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
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,r){return Math.random()*(r-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};p(M,"styles",c`
    :host {
      display: block;
      width: 100%;
    }
  `),e([s({type:f,converter:String})],M.prototype,"theme",2),e([s({type:String})],M.prototype,"label",2),e([s({type:String})],M.prototype,"placeholder",2),e([s({type:String})],M.prototype,"name",2),e([s({type:Number})],M.prototype,"min",2),e([s({type:Number})],M.prototype,"max",2),e([s({type:String})],M.prototype,"errorText",2),e([g("#inputfield")],M.prototype,"inputfield",2),M=e([m("nidoca-form-captcha")],M);var dt=class extends h{text="";href="";targetType="_self";render(){return o`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};p(dt,"styles",c`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `),e([s({type:String})],dt.prototype,"text",2),e([s({type:String})],dt.prototype,"href",2),e([s({type:String})],dt.prototype,"targetType",2),dt=e([m("nidoca-link")],dt);var A=class extends h{theme="surface";primaryText="";secondaryText="";tertiaryText="";infoText="";selected=!1;render(){return o`
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
      ${It.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};p(A,"styles",c`
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
  `),e([s({type:f,converter:String})],A.prototype,"theme",2),e([s({type:String})],A.prototype,"primaryText",2),e([s({type:String})],A.prototype,"secondaryText",2),e([s({type:String})],A.prototype,"tertiaryText",2),e([s({type:String})],A.prototype,"infoText",2),e([s({type:Boolean})],A.prototype,"selected",2),A=e([m("nidoca-list-item")],A);var st=class extends h{theme="surface";text="";render(){return o`
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
    `}static example(){return o`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};p(st,"styles",c`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `),e([s({type:f,converter:String})],st.prototype,"theme",2),e([s({type:String})],st.prototype,"text",2),st=e([m("nidoca-list-section")],st);var Ht=class extends h{multiselect=!1;slotElement;updated(t){super.updated(t),t.forEach((r,i)=>{i=="theme"&&this.getItems().forEach(n=>{n.theme=this.theme})})}render(){return o`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let r=t.target;r.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let r=this.slotElement.assignedElements();for(let i=0;i<r.length;i++){let n=r[i];n instanceof A&&t.push(n)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let r=this.slotElement.assignedElements();for(let i=0;i<r.length;i++){let n=r[i];n instanceof A&&n.selected&&t.push(n)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let r=this.slotElement.assignedElements(),i=0;for(let n=0;n<r.length;n++){let l=r[n];l instanceof A&&(l.selected&&t.push(i),i++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return o`<nidoca-list theme="primary">
      ${st.example()} ${A.example()} ${A.example()} ${A.example()}
    </nidoca-list>`}};p(Ht,"styles",c`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `),e([s({type:Boolean})],Ht.prototype,"multiselect",2),e([g("#slotElement")],Ht.prototype,"slotElement",2),Ht=e([m("nidoca-list")],Ht);var Pt=class extends h{theme="plain";prominent=!1;render(){return o`
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
    `}};p(Pt,"styles",c`
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
  `),e([s({type:String,converter:String})],Pt.prototype,"theme",2),e([s({type:Boolean})],Pt.prototype,"prominent",2),Pt=e([m("nidoca-top-app-bar")],Pt);var ht=class extends h{headers=["column 1","column 2"];rows=[["row 1",new V],["row 2",new V]];theme="plain";render(){return o`
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
            ${le([this.headers],()=>o` ${Kt(this.headers,t=>o` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${le([this.rows],()=>o`
                  ${Kt(this.rows,t=>o`
                        <tr>
                          ${Kt(t,r=>o` <td colspan="1" rowspan="1">${r}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};p(ht,"styles",c`
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
  `),e([s({type:Array})],ht.prototype,"headers",2),e([s({type:Array})],ht.prototype,"rows",2),e([s({type:f,converter:String})],ht.prototype,"theme",2),ht=e([m("nidoca-table")],ht);var ut=class extends h{selected=!1;render(){return this.selected?o` <slot></slot>`:o``}};p(ut,"styles",c`
    :host,
    slot {
      display: block;
    }
  `),e([s({type:Boolean})],ut.prototype,"selected",2),ut=e([m("nidoca-tab-content")],ut);var J=class extends h{selected=!1;text="";theme="surface";render(){return o`
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
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};p(J,"styles",c`
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
  `),e([s({type:Boolean})],J.prototype,"selected",2),e([s({type:String})],J.prototype,"text",2),e([s({type:String})],J.prototype,"theme",2),J=e([m("nidoca-tab")],J);var at=class extends h{tabSlot;tabContentSlot;theme="surface";tabIndex=0;render(){return o`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),i=100/t.length,n=t[this.tabIndex];for(let l=0;l<t.length;l++){let d=t[l];d instanceof J&&(d.theme=this.theme,d.style.width=String(i).concat("%"),d==n?(d.selected=!0,d.classList.add("SELECTED")):(d.selected=!1,d.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let r=this.tabContentSlot.assignedElements();for(let i=0;i<r.length;i++){let n=r[i];n instanceof ut&&(this.tabIndex==t?n.selected=!0:n.selected=!1,t++)}}}tabClicked(t){let r=t.detail;this.changeTabIndex(r)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let r=this.tabSlot.assignedElements();for(let i=0;i<r.length;i++){let n=r[i];if(n instanceof J&&n==t){this.tabIndex=i;break}}}}static example(t=""){return o`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};p(at,"styles",c`
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
  `),e([g("#tabSlot")],at.prototype,"tabSlot",2),e([g("#tabContentSlot")],at.prototype,"tabContentSlot",2),e([s({type:String})],at.prototype,"theme",2),e([s({type:Number})],at.prototype,"tabIndex",2),at=e([m("nidoca-tabs")],at);var ft=class extends h{hideLeft=!0;prominent=!1;leftElement;constructor(){super(),document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let r=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-r.width}})}render(){return o`
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
    `}};p(ft,"styles",c`
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
  `),e([s({type:Boolean})],ft.prototype,"hideLeft",2),e([s({type:Boolean})],ft.prototype,"prominent",2),e([g("#left")],ft.prototype,"leftElement",2),ft=e([m("nidoca-template")],ft);var gt=class extends h{videoElement;canvasElement;buttonElement;firstUpdated(t){super.firstUpdated(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(r=>{this.videoElement&&(this.videoElement.srcObject=r)})}render(){return o`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let t=this.canvasElement.getContext("2d");if(t){t.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let r=this.canvasElement.toDataURL("image/jpeg");console.log(r)}}}};p(gt,"styles",c``),e([g("#video")],gt.prototype,"videoElement",2),e([g("#canvas")],gt.prototype,"canvasElement",2),e([g("#click-photo")],gt.prototype,"buttonElement",2),gt=e([m("nidoca-video")],gt);var Mt=class extends h{src="";canvasElements=[];storeCanvasElements=[];img;render(){return o`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>o`${t}`)}
    `}updated(t){super.updated(t),t.forEach((r,i)=>{if(console.debug(`${this.tagName} : property ${String(i)} changed. oldValue: ${r}`),i=="src"){this.convert();let n=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let r=document.createElement("canvas");r.width=t[0],r.height=t[1];let i=r.getContext("2d");i&&this.img&&(this.img.crossOrigin="anonymous",i.drawImage(this.img,0,0,t[0],t[1]),r.toBlob(n=>{},"image/webp")),this.canvasElements.push(r)}),this.requestUpdate()})}};p(Mt,"styles",c``),e([s({type:String})],Mt.prototype,"src",2),e([g("#img")],Mt.prototype,"img",2),Mt=e([m("nidoca-svg-2-webp")],Mt);var E=class extends h{theme="plain";text="";render(){return o`<style>
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
    `}};p(E,"styles",c`
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
  `),e([s({type:f,converter:String})],E.prototype,"theme",2),e([s({type:String})],E.prototype,"text",2),E=e([m("nidoca-text")],E);var me=class extends E{render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};p(me,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 450;
      font-size: 105%;
    }
  `),me=e([m("nidoca-text-body")],me);var ce=class extends E{render(){return o`${super.render()}`}};p(ce,"styles",c`
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
  `),ce=e([m("nidoca-text-button")],ce);var pe=class extends E{};p(pe,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `),pe=e([m("nidoca-text-overline")],pe);var de=class extends E{render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};p(de,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 100%;
    }
  `),de=e([m("nidoca-text-subtitle")],de);var D=class extends E{render(){return o`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};p(D,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 350;
      line-height: 1.25em;
      font-size: 95%;
    }
  `),D=e([m("nidoca-text-caption")],D);var Be=class extends D{render(){return o`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Be=e([m("nidoca-text-error")],Be);var qe=class extends D{render(){return o`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};qe=e([m("nidoca-text-success")],qe);var je=class extends D{render(){return o`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};je=e([m("nidoca-text-warning")],je);var Ue=class extends D{render(){return o`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ue=e([m("nidoca-text-info")],Ue);var he=class extends E{};p(he,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `),he=e([m("nidoca-text-h1")],he);var ue=class extends E{};p(ue,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `),ue=e([m("nidoca-text-h2")],ue);var fe=class extends E{};p(fe,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `),fe=e([m("nidoca-text-h3")],fe);var ge=class extends E{};p(ge,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `),ge=e([m("nidoca-text-h4")],ge);var be=class extends E{};p(be,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `),be=e([m("nidoca-text-h5")],be);var xe=class extends E{};p(xe,"styles",c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `),xe=e([m("nidoca-text-h6")],xe);var Dt=class extends G{message="Dies ist eine Testnachricht";toastElement;showToast(t=3e3){this.toastElement.classList.add("show"),setTimeout(()=>{this.hideToast()},t)}hideToast(){this.toastElement.classList.remove("show")}render(){return o`
      <div id="toast" class="toast">
        ${this.message}
      </div>
    `}};p(Dt,"styles",c`
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
  `),e([s({type:String})],Dt.prototype,"message",2),e([g("#toast")],Dt.prototype,"toastElement",2),Dt=e([m("nidoca-toast")],Dt);var N=class extends h{value="";placeholder="";disabled=!1;inputElement;theme="plain";render(){return o`
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
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",r=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",r.type,JSON.stringify(r.detail)),this.dispatchEvent(r)}static example(t=""){return o`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};p(N,"styles",c`
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
  `),e([s({type:String})],N.prototype,"value",2),e([s({type:String})],N.prototype,"placeholder",2),e([s({type:Boolean})],N.prototype,"disabled",2),e([g("#inputElement")],N.prototype,"inputElement",2),e([s({type:f,converter:String})],N.prototype,"theme",2),N=e([m("nidoca-search-bar")],N);var ye=class{static CENTER="CENTER";static LEFT="LEFT";static RIGHT="RIGHT";static TOP="TOP";static BOTTOM="BOTTOM";static SLIDE_CENTER="SLIDE_CENTER";static SLIDE_LEFT="SLIDE_LEFT";static SLIDE_RIGHT="SLIDE_RIGHT";static SLIDE_TOP="SLIDE_TOP";static SLIDE_BOTTOM="SLIDE_BOTTOM"},Bt=class extends h{transitionType=ye.CENTER;duration=.5;render(){return o` <div class="${T(this.transitionType)}"><slot></slot></div> `}};p(Bt,"styles",c`
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
  `),e([s({type:String})],Bt.prototype,"transitionType",2),e([s({type:Number})],Bt.prototype,"duration",2),Bt=e([m("nidoca-transition")],Bt);var Zt=class extends h{show=!1;render(){return this.show?o`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${ye.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:o``}};p(Zt,"styles",c`
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
  `),e([s({type:Boolean})],Zt.prototype,"show",2),Zt=e([m("nidoca-dialog")],Zt);var tt=class extends h{show=!1;title="Ja oder Nein ?";description="Entscheide dich";labelButtonYes="Ja";labelButtonNo="Nein";render(){return o`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};p(tt,"styles",c``),e([s({type:Boolean})],tt.prototype,"show",2),e([s({type:String})],tt.prototype,"title",2),e([s({type:String})],tt.prototype,"description",2),e([s({type:String})],tt.prototype,"labelButtonYes",2),e([s({type:String})],tt.prototype,"labelButtonNo",2),tt=e([m("nidoca-dialog-decision")],tt);var Qt=class extends h{icon="";render(){return o`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `}static example(t="",r="surface"){return o`
      <nidoca-infobox slot="${t}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${r}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${r}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `}};p(Qt,"styles",c`
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
  `),e([s({type:String})],Qt.prototype,"icon",2),Qt=e([m("nidoca-infobox")],Qt);var lt=class extends h{theme="surface";src="";title="";subtitle="";render(){return o`
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
    >`}};p(lt,"styles",c`
    :host {
      display: block;
    }
  `),e([s({type:f,converter:String})],lt.prototype,"theme",2),e([s({type:String})],lt.prototype,"src",2),e([s({type:String})],lt.prototype,"title",2),e([s({type:String})],lt.prototype,"subtitle",2),lt=e([m("nidoca-avatar")],lt);var Ft=class extends h{theme="surface";render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};p(Ft,"styles",c`
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
  `),e([s({type:f,converter:String})],Ft.prototype,"theme",2),Ft=e([m("nidoca-card")],Ft);var ve=class extends h{render(){return o`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){let r=t.target;if(r==null)return;let i=r.assignedElements();for(let n=0;n<i.length;n++){let d=i[n].classList;d.contains("flexItem")||d.add("flexItem"),d.contains("flexItemDevice")||d.add("flexItemDevice")}}};p(ve,"styles",c`
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
  `),ve=e([m("nidoca-gallery")],ve);var $e=class extends h{render(){return o`<slot></slot>`}print(){let t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};p($e,"styles",c`
    :host {
      display: none;
    }
  `),$e=e([m("nidoca-print")],$e);var Ee=class extends h{render(){return o`
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let i=t.target.assignedElements(),n=i.length;for(let l=0;l<n;l++){let b=i[l].classList,u="item_count_"+n;b.contains(u)||b.add(u)}}};p(Ee,"styles",c`
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
  `),Ee=e([m("nidoca-section")],Ee);var Nt=class extends h{cards=[];render(){return o`
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
    `}clicked(t){this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:{index:-1,card:t},bubbles:!0,composed:!0}))}};p(Nt,"styles",c`
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
  `),e([s({type:Array})],Nt.prototype,"cards",2),Nt=e([m("nidoca-dashboard")],Nt);var te=class extends h{theme="plain";render(){return o`
      ${v.getStyle(this.theme)}
      <slot></slot>
    `}};p(te,"styles",c`
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
  `),e([s({type:f,converter:String})],te.prototype,"theme",2),te=e([m("nidoca-box")],te);var B=class extends h{theme="primary";label="Deine Nachricht";nameLabel="Dein Name";emailLabel="Deine Email";titleLabel="Betreff";messageLabel="Deine Nachricht";buttonLabel="Senden";formComponent;render(){return o`
      <nidoca-box theme="${T(this.theme)}">
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
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};p(B,"styles",c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),e([s({type:f,converter:String})],B.prototype,"theme",2),e([s({type:String,converter:String})],B.prototype,"label",2),e([s({type:String,converter:String})],B.prototype,"nameLabel",2),e([s({type:String,converter:String})],B.prototype,"emailLabel",2),e([s({type:String,converter:String})],B.prototype,"titleLabel",2),e([s({type:String,converter:String})],B.prototype,"messageLabel",2),e([s({type:String,converter:String})],B.prototype,"buttonLabel",2),e([g("#authenitcate-form")],B.prototype,"formComponent",2),B=e([m("nidoca-form-contact")],B);})();
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
