"use strict";(()=>{var xr=Object.defineProperty;var Ur=Object.getOwnPropertyDescriptor;var Vr=(a,t,e)=>t in a?xr(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var r=(a,t,e,n)=>{for(var i=n>1?void 0:n?Ur(t,e):t,l=a.length-1,d;l>=0;l--)(d=a[l])&&(i=(n?d(t,e,i):d(i))||i);return n&&i&&xr(t,e,i),i};var c=(a,t,e)=>Vr(a,typeof t!="symbol"?t+"":t,e);var K=class a{static uniqueInstance;static getUniqueInstance(){return a.uniqueInstance||(a.uniqueInstance=new a),a.uniqueInstance}listeners=[];constructor(){window.onpopstate=t=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(t.state)),this.notifyListeners()},document.addEventListener("click",t=>{if(!this.shouldIgnoreEvent(t)){let e=this.getAnchor(t);e&&!this.shouldIgnoreAnchor(e)&&(t.preventDefault(),e.hash.length>0&&this.navigate(e.hash))}})}subscribe(t){console.trace("subscribe router listener"),this.listeners.push(t)}back(){history.back()}forward(){history.forward()}navigate(t,e=null){if(t.indexOf("#")==-1&&(t="#".concat(t)),console.trace("navigate to: %s",t),e!=null&&console.trace("state: %s",JSON.stringify(e)),document.location.hash===t){console.trace("you are already on page: "+t);return}history.pushState(e,"",t),this.notifyListeners()}getCurrentState(){return history.state}getStateProperty(t){let e=this.getCurrentState();return e!=null?e[t]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){let t=this.getCurrentPage();this.listeners.forEach(e=>e.routeChanged(t))}shouldIgnoreEvent(t){return t.defaultPrevented||t.button!==0||t.shiftKey||t.ctrlKey||t.altKey||t.metaKey}getAnchor(t){for(let n of t.composedPath?t.composedPath():[])if(this.isAnchor(n))return n;let e=t.target;for(;e&&!this.isAnchor(e);)e=e.parentNode;return e&&this.isAnchor(e)?e:null}isAnchor(t){return t.nodeName&&t.nodeName.toLowerCase()==="a"}shouldIgnoreAnchor(t){return!!(t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||(t.origin||this.getAnchorOrigin(t))!==window.location.origin)}getAnchorOrigin(t){let e=t.port,n=t.protocol,d=n==="http:"&&e==="80"||n==="https:"&&e==="443"?t.hostname:t.host;return`${n}//${d}`}};var ze=class a{static generateImageBase64(t,e,n){let i=document.createElement("canvas");i.width=128,i.height=128;let l=i.getContext("2d");if(!l)throw new Error("Canvas context is not available");l.fillStyle=n,l.fillRect(0,0,i.width,i.height),l.fillStyle=e;let d=document.body,u=getComputedStyle(d).getPropertyValue("--font-family")||"Arial";l.font=`bold 64px ${u}`,l.textAlign="center",l.textBaseline="alphabetic";let $=t.charAt(0).toUpperCase(),_=l.measureText($),b=_.actualBoundingBoxAscent-_.actualBoundingBoxDescent;return l.fillText($,i.width/2,i.height/2+b/2),i.toDataURL("image/png")}static renderImgText(t){return a.generateImageBase64(t,"#555555","#ffffff")}};var ae=class a{dbName;storeName;keyField;db=null;static DB_VERSION=2;constructor(t,e,n){this.dbName=t,this.storeName=e,this.keyField=n}async openDatabase(){this.db=await new Promise((t,e)=>{let n=indexedDB.open(this.dbName,a.DB_VERSION);n.onupgradeneeded=()=>{let i=n.result;console.log(`onupgradeneeded triggered. Aktuelle Version: ${i.version}`),i.objectStoreNames.contains(this.storeName)||(i.createObjectStore(this.storeName,{keyPath:this.keyField}),console.log(`Object Store '${this.storeName}' mit KeyPath '${String(this.keyField)}' erstellt.`))},n.onsuccess=()=>{console.log(`IndexedDB '${this.dbName}' ge\xF6ffnet.`),t(n.result)},n.onerror=()=>{console.error("Fehler beim \xD6ffnen der Datenbank:",n.error),e(new Error(n.error?.message||"Unknown error"))},n.onblocked=()=>{console.warn("Datenbank wird von einer anderen Verbindung blockiert."),e(new Error("Datenbank ist blockiert."))}})}async add(t){return new Promise((e,n)=>{if(this.db){console.log("add() called");let d=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).add(t);d.onsuccess=()=>e(),d.onerror=()=>n(d.error)}})}async update(t){let e=await this.openDatabase();return new Promise((n,i)=>{if(this.db){let g=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).put(t);g.onsuccess=()=>n(),g.onerror=()=>i(g.error)}})}async delete(t){return new Promise((e,n)=>{if(this.db){let d=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).delete(t);d.onsuccess=()=>e(),d.onerror=()=>n(d.error)}})}async get(t){return new Promise((e,n)=>{if(this.db){let d=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).get(t);d.onsuccess=()=>e(d.result),d.onerror=()=>n(d.error)}})}async getAll(){return new Promise((t,e)=>{if(this.db){let l=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).getAll();l.onsuccess=()=>t(l.result),l.onerror=()=>e(l.error)}})}close(){this.db?.close()}},Me=class{name="";email=null;phone=null;energy=0;image=null};(async()=>{let a=new ae("AppDatabase","Karmatica","id");await a.openDatabase();let t={id:1,myself:{name:"Dominik Bruhn",email:"dominikbruhn@googlemail.com",phone:"015205248862",energy:1,image:null},friends:[{name:"Nico Bruhn",email:null,phone:null,energy:1,image:null},{name:"Christoph Juretko",email:null,phone:null,energy:.6,image:null},{name:"Tim Poloczek",email:null,phone:null,energy:.5,image:null},{name:"Dennis Ratzer",email:null,phone:null,energy:.4,image:null},{name:"Nicole Eckert",email:null,phone:null,energy:.4,image:null},{name:"Stefan Harzke",email:null,phone:null,energy:.6,image:null},{name:"Denis Ergashbaev",email:null,phone:null,energy:.6,image:null},{name:"Bastian \xDCckermann",email:null,phone:null,energy:.2,image:null},{name:"Daniela Meyer zu Ummeln",email:null,phone:null,energy:0,image:null},{name:"Mark Enger",email:null,phone:null,energy:.3,image:null},{name:"Matthias Manasterni",email:null,phone:null,energy:.6,image:null},{name:"Dejan Guberinic",email:null,phone:null,energy:.5,image:null},{name:"Carina Bruhn",email:null,phone:null,energy:0,image:null}],goals:[{title:"Intellektuelle Steigerung",description:"Wachstum und Entwicklung der intellektuellen F\xE4higkeiten einer Person.",image:null,actions:[{description:"Neue Themen lernen",time_min:15,time_max:240,energy:.9,image:null},{description:"Ein Buch lesen",time_min:15,time_max:180,energy:.8,image:null},{description:"Objektive Nachrichten lesen",time_min:15,time_max:30,energy:0,image:null}],routines:[]},{title:"Fit und gesund",description:"Einen gesunden Lebensstil und k\xF6rperliche Fitness aufrechterhalten.",image:null,actions:[{description:"Gesund einkaufen und essen",time_min:30,time_max:null,energy:1,image:null},{description:"Vitamin-D-Tablette im Winter einnehmen",time_min:0,time_max:null,energy:.4,image:null},{description:"Schlafen",time_min:480,time_max:480,energy:1,image:null},{description:"Koffein, Alkohol und Rauchen vermeiden",time_min:0,time_max:null,energy:.8,image:null},{description:"Laufen",time_min:120,time_max:120,energy:1,image:null},{description:"Gym",time_min:120,time_max:120,energy:1,image:null},{description:"Fu\xDFball spielen",time_min:90,time_max:90,energy:1,image:null},{description:"Schwimmen gehen",time_min:120,time_max:240,energy:.5,image:null},{description:"Fitness-Workout",time_min:30,time_max:30,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]},{title:"Guter Papa",description:"Ein unterst\xFCtzender und pr\xE4senter Papa sein.",image:null,actions:[{description:"Lego spielen",time_min:10,time_max:120,energy:.9,image:null},{description:"Gesellschaftsspiele spielen",time_min:30,time_max:180,energy:.8,image:null},{description:"Ins Kino gehen",time_min:120,time_max:180,energy:.7,image:null},{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null}],routines:[]},{title:"Gl\xFCcklich sein",description:"Langfristiges Gl\xFCck und Zufriedenheit erreichen.",image:null,actions:[{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null},{description:"Urlaub machen",time_min:1440,time_max:40320,energy:1,image:null},{description:"Flohmarkt besuchen",time_min:45,time_max:120,energy:.6,image:null},{description:"Spazieren gehen",time_min:30,time_max:180,energy:.4,image:null},{description:"Massage bekommen",time_min:80,time_max:200,energy:.9,image:null},{description:"Computerspiele spielen",time_min:20,time_max:180,energy:0,image:null},{description:"Ein Buch lesen",time_min:15,time_max:180,energy:.8,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Gute Musik h\xF6ren",time_min:0,time_max:null,energy:.8,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Boden wischen",time_min:45,time_max:45,energy:.7,image:null},{description:"Fitness-Workout",time_min:30,time_max:30,energy:.9,image:null},{description:"Kurzer Schlaf zur Wiederherstellung der Energie",time_min:10,time_max:30,energy:.8,image:null},{description:"\xDCber Dinge nachdenken, f\xFCr die man dankbar ist",time_min:5,time_max:20,energy:.9,image:null},{description:"Mit geliebten Menschen in Kontakt bleiben",time_min:10,time_max:120,energy:.8,image:null}],routines:[]},{title:"Resiliente Person",description:"Eine resiliente und entspannte Person sein.",image:null,actions:[{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null},{description:"Spazieren gehen",time_min:30,time_max:180,energy:.4,image:null},{description:"Massage bekommen",time_min:80,time_max:200,energy:.9,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Gute Musik h\xF6ren",time_min:0,time_max:null,energy:.8,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Kurzer Schlaf zur Wiederherstellung der Energie",time_min:10,time_max:30,energy:.8,image:null},{description:"\xDCber Dinge nachdenken, f\xFCr die man dankbar ist",time_min:5,time_max:20,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]},{title:"Sicherheit",description:"Ein gutes Gef\xFChl von Sicherheit haben.",image:null,actions:[{description:"Vorr\xE4te und Krisenwerkzeuge einrichten",time_min:0,time_max:120,energy:.6,image:null},{description:"Finanzen kontinuierlich optimieren",time_min:10,time_max:60,energy:.2,image:null},{description:"In Verm\xF6genswerte f\xFCr Wachstum investieren",time_min:10,time_max:60,energy:.2,image:null}],routines:[]},{title:"Finanzielle Freiheit",description:"Finanzielle Unabh\xE4ngigkeit erreichen.",image:null,actions:[{description:"Minimalistisch leben. Konsum minimieren.",time_min:0,time_max:null,energy:.7,image:null},{description:"Finanzen kontinuierlich optimieren",time_min:10,time_max:60,energy:.2,image:null},{description:"In Verm\xF6genswerte f\xFCr Wachstum investieren",time_min:10,time_max:60,energy:.2,image:null}],routines:[]},{title:"F\xFCr immer leben",description:"In der Lage sein, f\xFCr immer zu leben.",image:null,actions:[{description:"Gesund einkaufen und essen",time_min:30,time_max:null,energy:1,image:null},{description:"Schlafen",time_min:480,time_max:480,energy:1,image:null},{description:"Koffein, Alkohol und Rauchen vermeiden",time_min:0,time_max:null,energy:.8,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]}]};a.add(t),a.close(),console.log("Karmatica erfolgreich in die IndexedDB eingef\xFCgt!")})();var Pe=class{static capitalizeFirstLetter(t){return t&&t.charAt(0).toUpperCase()+t.slice(1)}};var De=globalThis,Be=De.ShadowRoot&&(De.ShadyCSS===void 0||De.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mr=Symbol(),vr=new WeakMap,le=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==mr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Be&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=vr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&vr.set(e,t))}return t}toString(){return this.cssText}},wr=a=>new le(typeof a=="string"?a:a+"",void 0,mr),p=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((n,i,l)=>n+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[l+1],a[0]);return new le(e,a,mr)},$r=(a,t)=>{if(Be)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=De.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,a.appendChild(n)}},pr=Be?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return wr(e)})(a):a;var{is:Gr,defineProperty:Kr,getOwnPropertyDescriptor:Xr,getOwnPropertyNames:Yr,getOwnPropertySymbols:Jr,getPrototypeOf:Zr}=Object,We=globalThis,Er=We.trustedTypes,Qr=Er?Er.emptyScript:"",Fr=We.reactiveElementPolyfillSupport,me=(a,t)=>a,pe={toAttribute(a,t){switch(t){case Boolean:a=a?Qr:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},qe=(a,t)=>!Gr(a,t),kr={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:qe};Symbol.metadata??=Symbol("metadata"),We.litPropertyMetadata??=new WeakMap;var yt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=kr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Kr(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:l}=Xr(this.prototype,t)??{get(){return this[e]},set(d){this[e]=d}};return{get:i,set(d){let g=i?.call(this);l?.call(this,d),this.requestUpdate(t,g,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??kr}static _$Ei(){if(this.hasOwnProperty(me("elementProperties")))return;let t=Zr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me("properties"))){let e=this.properties,n=[...Yr(e),...Jr(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(pr(i))}else t!==void 0&&e.push(pr(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let l=(n.converter?.toAttribute!==void 0?n.converter:pe).toAttribute(e,n.type);this._$Em=t,l==null?this.removeAttribute(i):this.setAttribute(i,l),this._$Em=null}}_$AK(t,e){let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let l=n.getPropertyOptions(i),d=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:pe;this._$Em=i;let g=d.fromAttribute(e,l.type);this[i]=g??this._$Ej?.get(i)??g,this._$Em=null}}requestUpdate(t,e,n){if(t!==void 0){let i=this.constructor,l=this[t];if(n??=i.getPropertyOptions(t),!((n.hasChanged??qe)(l,e)||n.useDefault&&n.reflect&&l===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:l},d){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,d??e??this[t]),l!==!0||d!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,l]of this._$Ep)this[i]=l;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,l]of n){let{wrapped:d}=l,g=this[i];d!==!0||this._$AL.has(i)||g===void 0||this.C(i,void 0,l,g)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},yt[me("elementProperties")]=new Map,yt[me("finalized")]=new Map,Fr?.({ReactiveElement:yt}),(We.reactiveElementVersions??=[]).push("2.1.1");var dr=globalThis,je=dr.trustedTypes,Tr=je?je.createPolicy("lit-html",{createHTML:a=>a}):void 0,hr="$lit$",bt=`lit$${Math.random().toFixed(9).slice(2)}$`,ur="?"+bt,Nr=`<${ur}>`,At=document,de=()=>At.createComment(""),he=a=>a===null||typeof a!="object"&&typeof a!="function",fr=Array.isArray,Ar=a=>fr(a)||typeof a?.[Symbol.iterator]=="function",cr=`[ 	
\f\r]`,ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sr=/-->/g,_r=/>/g,Lt=RegExp(`>|${cr}(?:([^\\s"'>=/]+)(${cr}*=${cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rr=/'/g,Lr=/"/g,Ir=/^(?:script|style|textarea|title)$/i,gr=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),o=gr(1),bn=gr(2),xn=gr(3),X=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Cr=new WeakMap,Ct=At.createTreeWalker(At,129);function Hr(a,t){if(!fr(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tr!==void 0?Tr.createHTML(t):t}var Or=(a,t)=>{let e=a.length-1,n=[],i,l=t===2?"<svg>":t===3?"<math>":"",d=ce;for(let g=0;g<e;g++){let u=a[g],$,_,b=-1,k=0;for(;k<u.length&&(d.lastIndex=k,_=d.exec(u),_!==null);)k=d.lastIndex,d===ce?_[1]==="!--"?d=Sr:_[1]!==void 0?d=_r:_[2]!==void 0?(Ir.test(_[2])&&(i=RegExp("</"+_[2],"g")),d=Lt):_[3]!==void 0&&(d=Lt):d===Lt?_[0]===">"?(d=i??ce,b=-1):_[1]===void 0?b=-2:(b=d.lastIndex-_[2].length,$=_[1],d=_[3]===void 0?Lt:_[3]==='"'?Lr:Rr):d===Lr||d===Rr?d=Lt:d===Sr||d===_r?d=ce:(d=Lt,i=void 0);let x=d===Lt&&a[g+1].startsWith("/>")?" ":"";l+=d===ce?u+Nr:b>=0?(n.push($),u.slice(0,b)+hr+u.slice(b)+bt+x):u+bt+(b===-2?g:x)}return[Hr(a,l+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},ue=class a{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let l=0,d=0,g=t.length-1,u=this.parts,[$,_]=Or(t,e);if(this.el=a.createElement($,n),Ct.currentNode=this.el.content,e===2||e===3){let b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(i=Ct.nextNode())!==null&&u.length<g;){if(i.nodeType===1){if(i.hasAttributes())for(let b of i.getAttributeNames())if(b.endsWith(hr)){let k=_[d++],x=i.getAttribute(b).split(bt),A=/([.?@])?(.*)/.exec(k);u.push({type:1,index:l,name:A[2],strings:x,ctor:A[1]==="."?Ve:A[1]==="?"?Ge:A[1]==="@"?Ke:Ht}),i.removeAttribute(b)}else b.startsWith(bt)&&(u.push({type:6,index:l}),i.removeAttribute(b));if(Ir.test(i.tagName)){let b=i.textContent.split(bt),k=b.length-1;if(k>0){i.textContent=je?je.emptyScript:"";for(let x=0;x<k;x++)i.append(b[x],de()),Ct.nextNode(),u.push({type:2,index:++l});i.append(b[k],de())}}}else if(i.nodeType===8)if(i.data===ur)u.push({type:2,index:l});else{let b=-1;for(;(b=i.data.indexOf(bt,b+1))!==-1;)u.push({type:7,index:l}),b+=bt.length-1}l++}}static createElement(t,e){let n=At.createElement("template");return n.innerHTML=t,n}};function It(a,t,e=a,n){if(t===X)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl,l=he(t)?void 0:t._$litDirective$;return i?.constructor!==l&&(i?._$AO?.(!1),l===void 0?i=void 0:(i=new l(a),i._$AT(a,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=It(a,i._$AS(a,t.values),i,n)),t}var Ue=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??At).importNode(e,!0);Ct.currentNode=i;let l=Ct.nextNode(),d=0,g=0,u=n[0];for(;u!==void 0;){if(d===u.index){let $;u.type===2?$=new Xt(l,l.nextSibling,this,t):u.type===1?$=new u.ctor(l,u.name,u.strings,this,t):u.type===6&&($=new Xe(l,this,t)),this._$AV.push($),u=n[++g]}d!==u?.index&&(l=Ct.nextNode(),d++)}return Ct.currentNode=At,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Xt=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=It(this,t,e),he(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==X&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ar(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&he(this._$AH)?this._$AA.nextSibling.data=t:this.T(At.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ue.createElement(Hr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{let l=new Ue(i,this),d=l.u(this.options);l.p(e),this.T(d),this._$AH=l}}_$AC(t){let e=Cr.get(t.strings);return e===void 0&&Cr.set(t.strings,e=new ue(t)),e}k(t){fr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let l of t)i===e.length?e.push(n=new a(this.O(de()),this.O(de()),this,this.options)):n=e[i],n._$AI(l),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Ht=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,l){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=l,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}_$AI(t,e=this,n,i){let l=this.strings,d=!1;if(l===void 0)t=It(this,t,e,0),d=!he(t)||t!==this._$AH&&t!==X,d&&(this._$AH=t);else{let g=t,u,$;for(t=l[0],u=0;u<l.length-1;u++)$=It(this,g[n+u],e,u),$===X&&($=this._$AH[u]),d||=!he($)||$!==this._$AH[u],$===L?t=L:t!==L&&(t+=($??"")+l[u+1]),this._$AH[u]=$}d&&!i&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ve=class extends Ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}},Ge=class extends Ht{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}},Ke=class extends Ht{constructor(t,e,n,i,l){super(t,e,n,i,l),this.type=5}_$AI(t,e=this){if((t=It(this,t,e,0)??L)===X)return;let n=this._$AH,i=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,l=t!==L&&(n===L||i);i&&this.element.removeEventListener(this.name,this,n),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Xe=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){It(this,t)}},zr={M:hr,P:bt,A:ur,C:1,L:Or,R:Ue,D:Ar,V:It,I:Xt,H:Ht,N:Ge,U:Ke,B:Ve,F:Xe},tn=dr.litHtmlPolyfillSupport;tn?.(ue,Xt),(dr.litHtmlVersions??=[]).push("3.3.1");var Mr=(a,t,e)=>{let n=e?.renderBefore??t,i=n._$litPart$;if(i===void 0){let l=e?.renderBefore??null;n._$litPart$=i=new Xt(t.insertBefore(de(),l),l,void 0,e??{})}return i._$AI(a),i};var yr=globalThis,I=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Mr(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return X}};I._$litElement$=!0,I.finalized=!0,yr.litElementHydrateSupport?.({LitElement:I});var en=yr.litElementPolyfillSupport;en?.({LitElement:I});(yr.litElementVersions??=[]).push("4.2.1");var f=(i=>(i.primary="primary",i.secondary="secondary",i.surface="surface",i.plain="plain",i))(f||{}),w=class{static getStyle(t){return t?t=="plain"?o``:o` <style>
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
          </style>`:o``}static getOposite(t){return t=="plain"?"surface":t=="primary"||t=="primary"?"secondary":t=="secondary"?"primary":"plain"}getParentTheme(t){let e=t;for(;e!=null;){if(e.theme!=null)return e.theme;e=e.parentElement}}};var m=a=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(a,t)}):customElements.define(a,t)};var rn={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:qe},nn=(a=rn,t,e)=>{let{kind:n,metadata:i}=e,l=globalThis.litPropertyMetadata.get(i);if(l===void 0&&globalThis.litPropertyMetadata.set(i,l=new Map),n==="setter"&&((a=Object.create(a)).wrapped=!0),l.set(e.name,a),n==="accessor"){let{name:d}=e;return{set(g){let u=t.get.call(this);t.set.call(this,g),this.requestUpdate(d,u,a)},init(g){return g!==void 0&&this.C(d,void 0,a,g),g}}}if(n==="setter"){let{name:d}=e;return function(g){let u=this[d];t.call(this,g),this.requestUpdate(d,u,a)}}throw Error("Unsupported decorator location: "+n)};function s(a){return(t,e)=>typeof e=="object"?nn(a,t,e):((n,i,l)=>{let d=i.hasOwnProperty(l);return i.constructor.createProperty(l,n),d?Object.getOwnPropertyDescriptor(i,l):void 0})(a,t,e)}function xt(a){return s({...a,state:!0,attribute:!1})}var Ot=(a,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(a,t,e),e);function y(a,t){return(e,n,i)=>{let l=d=>d.renderRoot?.querySelector(a)??null;if(t){let{get:d,set:g}=typeof n=="object"?e:i??(()=>{let u=Symbol();return{get(){return this[u]},set($){this[u]=$}}})();return Ot(e,n,{get(){let u=d.call(this);return u===void 0&&(u=l(this),(u!==null||this.hasUpdated)&&g.call(this,u)),u}})}return Ot(e,n,{get(){return l(this)}})}}var h=class extends I{theme="plain";throwCustomEvent(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}};r([s({type:f,converter:String})],h.prototype,"theme",2);var at=class extends h{key=null;item={};title="";updated(t){t.has("item")&&(this.title=this.item.constructor.name)}formComponent;render(){return o`
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
    `}renderFormFields(){let t=[];for(let[e,n]of Object.entries(this.item)){let i=Pe.capitalizeFirstLetter(e),l;switch(typeof n){case"boolean":l=o`
            <nidoca-form-switch
              style="padding-bottom:var(--space-2);"
              label="${i}"
              name="${e}"
              .value="${n||""}"
            ></nidoca-form-switch>
          `;break;case"string":l=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${i}"
              name="${e}"
              .value="${n||""}"
            ></nidoca-form-text>
          `;break;case"number":l=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${i}"
              name="${e}"
              type="number"
              .value="${n||""}"
            ></nidoca-form-text>
          `;break;default:l=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${i}"
              name="${e}"
              .value="${n&&JSON.stringify(n)}"
            ></nidoca-form-text>
          `}t.push(l)}return o`${t}`}deleteItem(){this.formComponent!=null&&(console.log("item deleted."),this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-deleted",this.item))}updateItem(){this.formComponent!=null&&this.formComponent.validate()&&(this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-updated",this.item))}saveItem(){this.formComponent!=null&&this.formComponent.validate()&&(this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-saved",this.item))}cancel(){this.throwCustomEvent("nidoca-event-generic-edit-cancel",this.item)}};r([s({type:Object})],at.prototype,"key",2),r([s({type:Object})],at.prototype,"item",2),r([s({type:String})],at.prototype,"title",2),r([y("#form")],at.prototype,"formComponent",2),at=r([m("nidoca-generic-edit")],at);var zt=class extends h{slotElement;render(){return o`
    <nidoca-container>
      <nidoca-search-bar></nidoca-search-bar>
      <nidoca-list id="listElement">
        <slot></slot>
      </nidoca-list>
    </nidoca-container>
    `}};r([y("#listElement")],zt.prototype,"slotElement",2),zt=r([m("nidoca-list-search")],zt);var Mt=class extends h{listView=!0;edit=null;listSearch=null;render(){return o`<slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}updated(t){super.updated(t),t.has("listSearch"),this.listView}slotChanged(t){let e=t.target;if(e==null)return;let n=e.assignedElements();for(let i=0;i<n.length;i++){let l=n[i];l instanceof zt&&(this.listSearch=l),l instanceof at&&(this.edit=l)}}};r([xt()],Mt.prototype,"listView",2),r([xt()],Mt.prototype,"edit",2),r([xt()],Mt.prototype,"listSearch",2),Mt=r([m("nidoca-crud")],Mt);var tt=class extends h{theme="surface";header="";opened=!1;render(){return o`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?o` <slot></slot>`:o``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=!this.opened,console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};c(tt,"styles",p`
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
  `),r([s({type:f,converter:String})],tt.prototype,"theme",2),r([s({type:String})],tt.prototype,"header",2),r([s({type:Boolean})],tt.prototype,"opened",2),tt=r([m("nidoca-accordion-item")],tt);var R=class extends h{theme="plain";overline="";title="";summary="";text="";render(){return o`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline?o` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `:o``}
        ${this.title?o` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `:o``}
        ${this.summary?o`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `:o``}
        ${this.text?o` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`:o``}
        <slot></slot>
      </div>
    `}static example(t="",e="plain"){return o`<nidoca-article
      theme="${e}"
      slot="${t}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`}};c(R,"styles",p`
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
  `),r([s({type:f,converter:String})],R.prototype,"theme",2),r([s({type:String})],R.prototype,"overline",2),r([s({type:String})],R.prototype,"title",2),r([s({type:String})],R.prototype,"summary",2),r([s({type:String})],R.prototype,"text",2),R=r([m("nidoca-article")],R);var Pr=(e=>(e.single="single",e.multi="multi",e))(Pr||{}),et=class extends h{theme="plain";accordionType="single";accordionSlot;updated(t){super.updated(t),t.forEach((e,n)=>{if(n=="theme"&&this.accordionSlot!=null){let i=this.accordionSlot.assignedElements();for(let l=0;l<i.length;l++){let d=i[l];d instanceof tt&&(d.theme=this.theme)}}})}render(){return o`
      ${w.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let e=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let n=this.accordionSlot.assignedElements();for(let i=0;i<n.length;i++){let l=n[i];l instanceof tt&&l!=e&&(l.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return o`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${R.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${R.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};c(et,"styles",p`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `),r([s({type:f,converter:String})],et.prototype,"theme",2),r([s({type:Pr,converter:String})],et.prototype,"accordionType",2),r([y("#accordionSlot")],et.prototype,"accordionSlot",2),et=r([m("nidoca-accordion")],et);var B=class extends h{theme="primary";shadowType="shadow_1";icon="";clickable=!0;deactivated=!1;title="";render(){return o`
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
    `}};c(B,"styles",p`
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
  `),r([s({type:String})],B.prototype,"theme",2),r([s({type:Object})],B.prototype,"shadowType",2),r([s({type:String})],B.prototype,"icon",2),r([s({type:Boolean})],B.prototype,"clickable",2),r([s({type:Boolean})],B.prototype,"deactivated",2),r([s({type:String})],B.prototype,"title",2),B=r([m("nidoca-icon-extended")],B);var Y=class extends h{icon="";primaryText="";state;isLast=!1;index;first=!1;render(){return o`
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
    `}determineBackgroundColor(t){return t==1?"var(--app-color-text-primary)":t==0?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==3?"var(--app-color-success)":t==1?"var(--mdc-theme-on-primary)":t==0?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){let t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};c(Y,"styles",p`
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
  `),r([s({type:String})],Y.prototype,"icon",2),r([s({type:String})],Y.prototype,"primaryText",2),r([s({type:Number})],Y.prototype,"state",2),r([s({type:Boolean})],Y.prototype,"isLast",2),Y=r([m("nidoca-wizard-step")],Y);var Yt=class extends h{wizardSlot;render(){return o`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${t=>this.stepClicked(t)}"
      >
        <slot id="wizardSlot" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </div>
    `}slotChanged(t){let e=t.target;if(e==null)return;let n=e.assignedElements(),i=0;for(let l=0;l<n.length;l++){let d=n[l];d instanceof Y&&(d.index=l,d.state==0&&(i=l),d.index==n.length-1&&(d.isLast=!0))}this.changeState(i)}stepClicked(t){let e=t.detail;console.debug("wizard step clicked, selectedStepIndex: %s",e),this.changeState(e)}changeState(t){if(this.wizardSlot){let e=this.wizardSlot.assignedElements();for(let n=0;n<e.length;n++){let i=e[n];i instanceof Y&&i.index!==void 0&&(i.index<t?i.state=1:i.index==t?i.state=0:i.state=2)}}}};c(Yt,"styles",p``),r([y("#wizardSlot")],Yt.prototype,"wizardSlot",2),Yt=r([m("nidoca-wizard")],Yt);var rt=class extends h{clickable=!0;theme="surface";text="";render(){return o`
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
    `}static example(t=""){return o`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};c(rt,"styles",p`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }
    .clickable {
      cursor: pointer;
    }
  `),r([s({type:Boolean})],rt.prototype,"clickable",2),r([s({type:f,converter:String})],rt.prototype,"theme",2),r([s({type:String})],rt.prototype,"text",2),rt=r([m("nidoca-chip")],rt);var lt=class extends h{code="";theme="plain";render(){return o`
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
    `}static example(t=""){return o`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};c(lt,"styles",p`
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
  `),r([s({type:String})],lt.prototype,"code",2),r([s({type:String})],lt.prototype,"theme",2),lt=r([m("nidoca-code")],lt);var Ye=class{static PROGRESS="PROGRESS";static PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"},Pt=class extends h{theme;progressType=Ye.PROGRESS;render(){return o` <style>
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

      <progress class="${this.progressType}"></progress>`}};c(Pt,"styles",p``),r([s({type:f,converter:String})],Pt.prototype,"theme",2),r([s({type:Ye,converter:String})],Pt.prototype,"progressType",2),Pt=r([m("nidoca-progress")],Pt);var Je=(n=>(n.contained="contained",n.outlined="outlined",n.text="text",n))(Je||{}),J=class extends h{theme="primary";buttonType="contained";icon="";text="";render(){return o`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};c(J,"styles",p`
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
  `),r([s({type:f,converter:String})],J.prototype,"theme",2),r([s({type:Je,converter:String})],J.prototype,"buttonType",2),r([s({type:String})],J.prototype,"icon",2),r([s({type:String})],J.prototype,"text",2),J=r([m("nidoca-button")],J);var W=class extends h{};var Dt=class extends h{autocomplete=!0;slotElement;render(){return o`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,e={};for(let i of this.getInputElements(this.slotElement)){let l=i.getOutputData();e[l.key]=l.value,t.append(l.key,l.value)}let n={};return n.jsonObject=e,n.formData=t,n}validate(){let t=!0;for(let e of this.getInputElements(this.slotElement))e.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let e=[],n=t.assignedElements({flatten:!0});for(let i=0;i<n.length;i++){let l=n[i];this.recursiveInputElementSearch(l,e)}return e}recursiveInputElementSearch(t,e){if(t instanceof W)e.push(t);else if(t.hasChildNodes()){let n=t.children;for(let i of[].slice.call(n))this.recursiveInputElementSearch(i,e)}}};c(Dt,"styles",p`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `),r([s({type:Boolean})],Dt.prototype,"autocomplete",2),r([y("#slotElement")],Dt.prototype,"slotElement",2),Dt=r([m("nidoca-form")],Dt);var Dr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ze=a=>(...t)=>({_$litDirective$:a,values:t}),Jt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:on}=zr;var Br=()=>document.createComment(""),Zt=(a,t,e)=>{let n=a._$AA.parentNode,i=t===void 0?a._$AB:t._$AA;if(e===void 0){let l=n.insertBefore(Br(),i),d=n.insertBefore(Br(),i);e=new on(l,d,a,a.options)}else{let l=e._$AB.nextSibling,d=e._$AM,g=d!==a;if(g){let u;e._$AQ?.(a),e._$AM=a,e._$AP!==void 0&&(u=a._$AU)!==d._$AU&&e._$AP(u)}if(l!==i||g){let u=e._$AA;for(;u!==l;){let $=u.nextSibling;n.insertBefore(u,i),u=$}}}return e},wt=(a,t,e=a)=>(a._$AI(t,e),a),sn={},Wr=(a,t=sn)=>a._$AH=t,qr=a=>a._$AH,Qe=a=>{a._$AR(),a._$AA.remove()};var jr=(a,t,e)=>{let n=new Map;for(let i=t;i<=e;i++)n.set(a[i],i);return n},$t=Ze(class extends Jt{constructor(a){if(super(a),a.type!==Dr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,t,e){let n;e===void 0?e=t:t!==void 0&&(n=t);let i=[],l=[],d=0;for(let g of a)i[d]=n?n(g,d):d,l[d]=e(g,d),d++;return{values:l,keys:i}}render(a,t,e){return this.dt(a,t,e).values}update(a,[t,e,n]){let i=qr(a),{values:l,keys:d}=this.dt(t,e,n);if(!Array.isArray(i))return this.ut=d,l;let g=this.ut??=[],u=[],$,_,b=0,k=i.length-1,x=0,A=l.length-1;for(;b<=k&&x<=A;)if(i[b]===null)b++;else if(i[k]===null)k--;else if(g[b]===d[x])u[x]=wt(i[b],l[x]),b++,x++;else if(g[k]===d[A])u[A]=wt(i[k],l[A]),k--,A--;else if(g[b]===d[A])u[A]=wt(i[b],l[A]),Zt(a,u[A+1],i[b]),b++,A--;else if(g[k]===d[x])u[x]=wt(i[k],l[x]),Zt(a,i[b],i[k]),k--,x++;else if($===void 0&&($=jr(d,x,A),_=jr(g,b,k)),$.has(g[b]))if($.has(g[k])){let gt=_.get(d[x]),lr=gt!==void 0?i[gt]:null;if(lr===null){let br=Zt(a,i[b]);wt(br,l[x]),u[x]=br}else u[x]=wt(lr,l[x]),Zt(a,i[b],lr),i[gt]=null;x++}else Qe(i[k]),k--;else Qe(i[b]),b++;for(;x<=A;){let gt=Zt(a,u[A+1]);wt(gt,l[x]),u[x++]=gt}for(;b<=k;){let gt=i[b++];gt!==null&&Qe(gt)}return this.ut=d,Wr(a,u),X}});var an={},Bt=Ze(class extends Jt{constructor(){super(...arguments),this.ot=an}render(a,t){return t()}update(a,[t,e]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,i)=>n===this.ot[i]))return X}else if(this.ot===t)return X;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,e)}});var T=class extends W{theme="surface";trailingIcon="";label="";errorText="";infoText="";warningText="";value="";options=[];name="";required=!0;multiple=!1;size=1;selectElement;render(){return o` <style>
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
            ${Bt([this.value,this.options],()=>o`
                ${$t(this.options,t=>t==null?o` <option></option>`:this.isSelectedOption(t)?o` <option value="${t.key}" selected>${t.value}</option> `:o` <option value="${t.key}">${t.value}</option> `)}
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
          `:o``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let e=0,n=this.selectElement.options.length;e<n;e++)this.selectElement.options[e].selected&&t.push(this.options[e].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let e=!1;for(let n of this.value)if(e=t.key===n,e)return!0}return this.value===t.key}static enumToOptions(t,e=!0){let n=[];return e&&n.push({key:"",value:""}),Object.keys(t).forEach(i=>{n.push({key:i,value:t[i]})}),n}static stringArrayToOptions(t,e=!0){let n=[];return e&&n.push({key:"",value:""}),t.forEach(i=>{n.push({key:i,value:i})}),n}static toComboboxOptions(t=null,e=null){if(t==null)return[];let n=[];return Object.values(t).forEach(i=>{let l=String(Object.keys(t)[Object.values(t).indexOf(i)]);e&&(l=l.concat(e)),n.push({key:i,value:l})}),n}};c(T,"styles",p`
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
  `),r([s({type:f,converter:String})],T.prototype,"theme",2),r([s({type:String})],T.prototype,"trailingIcon",2),r([s({type:String})],T.prototype,"label",2),r([s({type:String})],T.prototype,"errorText",2),r([s({type:String})],T.prototype,"infoText",2),r([s({type:String})],T.prototype,"warningText",2),r([s()],T.prototype,"value",2),r([s({type:Array})],T.prototype,"options",2),r([s({type:String})],T.prototype,"name",2),r([s({type:Boolean})],T.prototype,"required",2),r([s({type:Boolean})],T.prototype,"multiple",2),r([s({type:Number})],T.prototype,"size",2),r([y("#selectElement")],T.prototype,"selectElement",2),T=r([m("nidoca-form-combobox")],T);var C=a=>a??L;var nt=(x=>(x.color="color",x.email="email",x.hidden="hidden",x.number="number",x.password="password",x.tel="tel",x.text="text",x.search="search",x.url="url",x.date="date",x.month="month",x.time="time",x.week="week",x))(nt||{}),E=class extends W{type="text";label="";placeholder="";trailingIcon="";errorText="";infoText="";warningText="";name="";value="";required=!1;disabled=!1;checked=!1;maxlength;minlength;min;max;step;size;pattern;inputElement;theme="plain";render(){return this.type=="hidden"?o`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:o` <style>
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
                size="${C(this.size)}"
                minlength="${C(this.minlength)}"
                maxlength="${C(this.maxlength)}"
                pattern="${C(this.pattern)}"
                min="${C(this.min)}"
                max="${C(this.max)}"
                step="${C(this.step)}"
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
              `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t?.trim()}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),this.errorText==""}};c(E,"styles",p`
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
  `),r([s({type:nt,converter:String})],E.prototype,"type",2),r([s({type:String})],E.prototype,"label",2),r([s({type:String})],E.prototype,"placeholder",2),r([s({type:String})],E.prototype,"trailingIcon",2),r([s({type:String})],E.prototype,"errorText",2),r([s({type:String})],E.prototype,"infoText",2),r([s({type:String})],E.prototype,"warningText",2),r([s({type:String})],E.prototype,"name",2),r([s()],E.prototype,"value",2),r([s({type:Boolean})],E.prototype,"required",2),r([s({type:Boolean})],E.prototype,"disabled",2),r([s({type:Boolean})],E.prototype,"checked",2),r([s({type:Number})],E.prototype,"maxlength",2),r([s({type:Number})],E.prototype,"minlength",2),r([s({type:Number})],E.prototype,"min",2),r([s({type:Number})],E.prototype,"max",2),r([s({type:String})],E.prototype,"step",2),r([s({type:Number})],E.prototype,"size",2),r([s({type:String})],E.prototype,"pattern",2),r([y("#inputElement")],E.prototype,"inputElement",2),r([s({type:f,converter:String})],E.prototype,"theme",2),E=r([m("nidoca-form-text")],E);var Fe=class extends E{constructor(){super(),this.type="date"}};Fe=r([m("nidoca-form-date")],Fe);var H=class extends W{theme="surface";infoText="";warningText="";errorText="";name="";value="";label="";required=!1;placeholder="";disabled=!1;rows=5;inputElement;render(){return o` <style>
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
          `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};c(H,"styles",p`
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
  `),r([s({type:f,converter:String})],H.prototype,"theme",2),r([s({type:String})],H.prototype,"infoText",2),r([s({type:String})],H.prototype,"warningText",2),r([s({type:String})],H.prototype,"errorText",2),r([s({type:String})],H.prototype,"name",2),r([s()],H.prototype,"value",2),r([s({type:String})],H.prototype,"label",2),r([s({type:Boolean})],H.prototype,"required",2),r([s({type:String})],H.prototype,"placeholder",2),r([s({type:Boolean})],H.prototype,"disabled",2),r([s({type:Number})],H.prototype,"rows",2),r([y("#inputElement")],H.prototype,"inputElement",2),H=r([m("nidoca-form-textarea")],H);var Wt=class extends W{validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}theme="primary";inputElement;render(){return o`
      <nidoca-box theme="${C(this.theme)}">
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
    `}upload(){this.inputElement?.click()}};c(Wt,"styles",p`
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
  `),r([s({type:f,converter:String})],Wt.prototype,"theme",2),r([y("#inputElement")],Wt.prototype,"inputElement",2),Wt=r([m("nidoca-form-upload")],Wt);var P=class extends W{name="";label="";infoText="";errorText="";warningText="";required=!1;disabled=!1;checked=!1;theme="primary";inputElement;constructor(){super(),this.theme=w.prototype.getParentTheme(this)||"plain"}render(){return o`
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
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};c(P,"styles",p`
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
  `),r([s({type:String})],P.prototype,"name",2),r([s({type:String})],P.prototype,"label",2),r([s({type:String})],P.prototype,"infoText",2),r([s({type:String})],P.prototype,"errorText",2),r([s({type:String})],P.prototype,"warningText",2),r([s({type:Boolean})],P.prototype,"required",2),r([s({type:Boolean})],P.prototype,"disabled",2),r([s({type:Boolean})],P.prototype,"checked",2),r([s({type:String})],P.prototype,"theme",2),r([y("#inputElement")],P.prototype,"inputElement",2),P=r([m("nidoca-form-switch")],P);var mt=class extends h{theme="primary";label="Newsletter";emailLabel="Deine Emailadresse";buttonLabel="Registrieren";formComponent;render(){return o`
      <nidoca-box theme="${C(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${w.getOposite(this.theme)}"
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
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};c(mt,"styles",p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),r([s({type:f,converter:String})],mt.prototype,"theme",2),r([s({type:String,converter:String})],mt.prototype,"label",2),r([s({type:String,converter:String})],mt.prototype,"emailLabel",2),r([s({type:String,converter:String})],mt.prototype,"buttonLabel",2),r([y("#form")],mt.prototype,"formComponent",2),mt=r([m("nidoca-form-newsletter")],mt);var pt=class extends h{theme="primary";label="Passwort zur\xFCcksetzen";emailLabel="Deine Emailadresse";buttonLabel="Zur\xFCcksetzen";formComponent;render(){return o`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${w.getOposite(this.theme)}"
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
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};c(pt,"styles",p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),r([s({type:f,converter:String})],pt.prototype,"theme",2),r([s({type:String,converter:String})],pt.prototype,"label",2),r([s({type:String,converter:String})],pt.prototype,"emailLabel",2),r([s({type:String,converter:String})],pt.prototype,"buttonLabel",2),r([y("#form")],pt.prototype,"formComponent",2),pt=r([m("nidoca-form-reset-password")],pt);var O=class extends h{theme="surface";label="Passwort \xE4ndern";oldPasswordLabel="Altes Passwort";newPasswordLabel="Neues Passwort";repeatNewPasswordLabel="Wiederholen";buttonLabel="\xC4ndern";formComponent;oldPasswordInputField;newPasswordInputField;repeatNewPasswordInputField;showErrorMessageSamePassword=!1;errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";showErrorMessagePasswordDiff=!1;errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein";render(){return o`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${w.getOposite(this.theme)}"
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
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};c(O,"styles",p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),r([s({type:f,converter:String})],O.prototype,"theme",2),r([s({type:String,converter:String})],O.prototype,"label",2),r([s({type:String,converter:String})],O.prototype,"oldPasswordLabel",2),r([s({type:String,converter:String})],O.prototype,"newPasswordLabel",2),r([s({type:String,converter:String})],O.prototype,"repeatNewPasswordLabel",2),r([s({type:String,converter:String})],O.prototype,"buttonLabel",2),r([y("#form")],O.prototype,"formComponent",2),r([y("#oldPassword")],O.prototype,"oldPasswordInputField",2),r([y("#newPassword")],O.prototype,"newPasswordInputField",2),r([y("#repeatNewPassword")],O.prototype,"repeatNewPasswordInputField",2),r([s()],O.prototype,"errorMessageSamePasswordLabel",2),r([s()],O.prototype,"errorMessagePasswordDiffLabel",2),O=r([m("nidoca-form-change-password")],O);var ot=class extends h{theme="primary";label="Registrieren";emailLabel="Email";passwordLabel="Passwort";buttonLabel="Registrieren";formComponent;render(){return o`
      <nidoca-box theme="${C(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${w.getOposite(this.theme)}"
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
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"password"}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};c(ot,"styles",p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),r([s({type:f,converter:String})],ot.prototype,"theme",2),r([s({type:String,converter:String})],ot.prototype,"label",2),r([s({type:String,converter:String})],ot.prototype,"emailLabel",2),r([s({type:String,converter:String})],ot.prototype,"passwordLabel",2),r([s({type:String,converter:String})],ot.prototype,"buttonLabel",2),r([y("#form")],ot.prototype,"formComponent",2),ot=r([m("nidoca-form-register")],ot);var Qt=class extends h{code="";render(){return o``}};c(Qt,"styles",p``),r([s({type:String})],Qt.prototype,"code",2),Qt=r([m("nidoca-upload")],Qt);var qt=class extends h{theme="plain";text="";render(){return o`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};c(qt,"styles",p`
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
  `),r([s({type:f,converter:String})],qt.prototype,"theme",2),r([s({type:String,converter:String})],qt.prototype,"text",2),qt=r([m("nidoca-hr")],qt);var ct=class extends h{text="";icon="";render(){return o`
      <div class="container">
        ${this.icon?o` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:o``}
        ${this.text?o` <nidoca-text-button>${this.text}</nidoca-text-button>`:o``}
        <slot></slot>
      </div>
    `}static example(t=""){return o`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};c(ct,"styles",p`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `),r([s({type:String})],ct.prototype,"text",2),r([s({type:String})],ct.prototype,"icon",2),ct=r([m("nidoca-menu-area")],ct);var D=class extends h{text="";icon="";selected=!1;theme="surface";render(){return o`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};c(D,"styles",p`
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
  `),r([s({type:String})],D.prototype,"text",2),r([s({type:String})],D.prototype,"icon",2),r([s({type:Boolean})],D.prototype,"selected",2),r([s({type:String})],D.prototype,"theme",2),D=r([m("nidoca-menu-item")],D);var dt=class extends h{theme="plain";slotElement;render(){return o` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((e,n)=>{if(n=="theme"&&this.slotElement!=null){let i=this.slotElement.assignedElements();for(let l=0;l<i.length;l++){let d=i[l];d instanceof D&&(d.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let e=this.slotElement.assignedElements();for(let n=0;n<e.length;n++){let i=e[n];if(i instanceof D){let l=i.getBoundingClientRect();l.left<t.x&&l.right>t.x&&(l.top<t.y&&l.bottom>t.y?i.selected=!0:i.selected=!1)}}}})}static example(t=""){return o`
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
    `}};c(dt,"styles",p`
    :host,
    slot {
      display: block;
    }
  `),r([s({type:String})],dt.prototype,"theme",2),r([y("#slotElement")],dt.prototype,"slotElement",2),dt=r([m("nidoca-menu")],dt);var it=class extends h{height="auto";width="auto";left="auto";top="auto";right="auto";bottom="auto";render(){return o`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,e,n,i,l,d){return"height:".concat(t).concat(";").concat("width:").concat(e).concat(";").concat("left:").concat(n).concat(";").concat("right:").concat(i).concat(";").concat("top:").concat(l).concat(";").concat("bottom:").concat(d).concat(";")}};c(it,"styles",p`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `),r([s({type:String})],it.prototype,"height",2),r([s({type:String})],it.prototype,"width",2),r([s({type:String})],it.prototype,"left",2),r([s({type:String})],it.prototype,"top",2),r([s({type:String})],it.prototype,"right",2),r([s({type:String})],it.prototype,"bottom",2),it=r([m("nidoca-layout-floating")],it);var Ft=class extends h{theme="plain";render(){return o`<slot></slot>`}};c(Ft,"styles",p`
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
  `),r([s({type:String})],Ft.prototype,"theme",2),Ft=r([m("nidoca-container")],Ft);var jt=class extends h{theme;hideSidebox=!0;constructor(){super(),this.theme=w.prototype.getParentTheme(this)||"plain"}render(){return o` <style>
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
      ${this.hideSidebox?o``:o` <slot class="sidebox" name="sidebox"></slot>`}`}};c(jt,"styles",p`
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
  `),r([s({type:f,converter:String})],jt.prototype,"theme",2),r([s({type:Boolean,converter:String})],jt.prototype,"hideSidebox",2),jt=r([m("nidoca-split-screen")],jt);var z=class extends h{icon="";clickable=!0;deactivated=!1;title="";render(){return o`
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
    `}};c(z,"styles",p`
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
  `),r([s({type:String})],z.prototype,"icon",2),r([s({type:Boolean})],z.prototype,"clickable",2),r([s({type:Boolean})],z.prototype,"deactivated",2),r([s({type:String})],z.prototype,"title",2),z=r([m("nidoca-icon")],z);var Nt=class extends h{rippleContainerElement;render(){return o`
      <div id="rippleContainer" anim="ripple" @click="${t=>this.clicked(t)}">
        <slot></slot>
      </div>
    `}clicked(t){if(this.rippleContainerElement!=null){t instanceof TouchEvent&&(t=t.touches?t.touches[0]:t);let e=this.rippleContainerElement.getBoundingClientRect(),n=Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(t instanceof MouseEvent||t instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${n}; --x:${t.clientX-e.left}; --y:${t.clientY-e.top};`)}}};c(Nt,"styles",p`
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
  `),r([y("#rippleContainer")],Nt.prototype,"rippleContainerElement",2),Nt=r([m("nidoca-ripple")],Nt);var M=class extends h{src="";width="100%";height="auto";zoom=!1;render(){return this.src?o`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:o``}static exampleImage(){return"data:image/jpeg;base64,IMG"}static example(t=""){return o`<nidoca-img width="64px" width="64px" slot="${t}" src="${this.exampleImage()} "></nidoca-img>`}};c(M,"styles",p`
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
  `),r([s({type:String})],M.prototype,"src",2),r([s({type:String})],M.prototype,"width",2),r([s({type:String})],M.prototype,"height",2),r([s({type:Boolean})],M.prototype,"zoom",2),M=r([m("nidoca-img")],M);var Z=class extends M{static example(t=""){return o`<nidoca-img-round width="64px" width="64px" slot="${t}" src="face.jpg"></nidoca-img-round>`}};c(Z,"styles",p`
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
  `),Z=r([m("nidoca-img-round")],Z);var Ut=class extends h{theme="plain";selected;render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:o``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let e=t.target;if(e==null)return;let n=e.assignedElements();for(let i=0;i<n.length;i++){let l=n[i];if(l instanceof M){this.selected==null&&i==0&&(this.selected=l.cloneNode(!0)),l.addEventListener("click",g=>{g.target&&(this.selected=g.target.cloneNode(!0))}),l.width="148px";let d=l.classList;d.contains("img")||d.add("img")}}}};c(Ut,"styles",p`
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
  `),r([s({type:f,converter:String})],Ut.prototype,"theme",2),r([xt()],Ut.prototype,"selected",2),Ut=r([m("nidoca-img-slider")],Ut);var te=class extends h{src="";render(){return o`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};c(te,"styles",p``),r([s({type:String})],te.prototype,"src",2),te=r([m("nidoca-movie")],te);var j=class extends h{theme;label="";placeholder="";name="";min=1;max=10;errorText="";numberOne=1;numberTwo=1;inputfield;render(){return o`
      <nidoca-form-text
        theme="${C(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${"number"}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,e){return Math.random()*(e-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};c(j,"styles",p`
    :host {
      display: block;
      width: 100%;
    }
  `),r([s({type:f,converter:String})],j.prototype,"theme",2),r([s({type:String})],j.prototype,"label",2),r([s({type:String})],j.prototype,"placeholder",2),r([s({type:String})],j.prototype,"name",2),r([s({type:Number})],j.prototype,"min",2),r([s({type:Number})],j.prototype,"max",2),r([s({type:String})],j.prototype,"errorText",2),r([y("#inputfield")],j.prototype,"inputfield",2),j=r([m("nidoca-form-captcha")],j);var Et=class extends h{text="";href="";targetType="_self";render(){return o`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};c(Et,"styles",p`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `),r([s({type:String})],Et.prototype,"text",2),r([s({type:String})],Et.prototype,"href",2),r([s({type:String})],Et.prototype,"targetType",2),Et=r([m("nidoca-link")],Et);var S=class extends h{theme="surface";primaryText="";secondaryText="";tertiaryText="";infoText="";selected=!1;render(){return o`
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
      ${Z.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};c(S,"styles",p`
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
  `),r([s({type:f,converter:String})],S.prototype,"theme",2),r([s({type:String})],S.prototype,"primaryText",2),r([s({type:String})],S.prototype,"secondaryText",2),r([s({type:String})],S.prototype,"tertiaryText",2),r([s({type:String})],S.prototype,"infoText",2),r([s({type:Boolean})],S.prototype,"selected",2),S=r([m("nidoca-list-item")],S);var q=class extends h{theme="surface";text="";render(){return o`
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
    `}static example(){return o`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};c(q,"styles",p`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `),r([s({type:f,converter:String})],q.prototype,"theme",2),r([s({type:String})],q.prototype,"text",2),q=r([m("nidoca-list-section")],q);var Q=class extends h{multiselect=!1;slotElement;updated(t){super.updated(t),t.forEach((e,n)=>{n=="theme"&&this.getItems().forEach(i=>{i.theme=this.theme})})}render(){return o`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let e=t.target;e.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let e=this.slotElement.assignedElements();for(let n=0;n<e.length;n++){let i=e[n];i instanceof S&&t.push(i)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let e=this.slotElement.assignedElements();for(let n=0;n<e.length;n++){let i=e[n];i instanceof S&&i.selected&&t.push(i)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let e=this.slotElement.assignedElements(),n=0;for(let i=0;i<e.length;i++){let l=e[i];l instanceof S&&(l.selected&&t.push(n),n++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return o`<nidoca-list theme="primary">
      ${q.example()} ${S.example()} ${S.example()} ${S.example()}
    </nidoca-list>`}};c(Q,"styles",p`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `),r([s({type:Boolean})],Q.prototype,"multiselect",2),r([y("#slotElement")],Q.prototype,"slotElement",2),Q=r([m("nidoca-list")],Q);var ht=class extends h{theme="plain";prominent=!1;render(){return o`
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
    `}};c(ht,"styles",p`
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
  `),r([s({type:String,converter:String})],ht.prototype,"theme",2),r([s({type:Boolean})],ht.prototype,"prominent",2),ht=r([m("nidoca-top-app-bar")],ht);var kt=class extends h{headers=["column 1","column 2"];rows=[["row 1",new z],["row 2",new z]];theme="plain";render(){return o`
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
            ${Bt([this.headers],()=>o` ${$t(this.headers,t=>o` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${Bt([this.rows],()=>o`
                  ${$t(this.rows,t=>o`
                        <tr>
                          ${$t(t,e=>o` <td colspan="1" rowspan="1">${e}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};c(kt,"styles",p`
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
  `),r([s({type:Array})],kt.prototype,"headers",2),r([s({type:Array})],kt.prototype,"rows",2),r([s({type:f,converter:String})],kt.prototype,"theme",2),kt=r([m("nidoca-table")],kt);var Tt=class extends h{selected=!1;render(){return this.selected?o` <slot></slot>`:o``}};c(Tt,"styles",p`
    :host,
    slot {
      display: block;
    }
  `),r([s({type:Boolean})],Tt.prototype,"selected",2),Tt=r([m("nidoca-tab-content")],Tt);var st=class extends h{selected=!1;text="";theme="surface";render(){return o`
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
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};c(st,"styles",p`
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
  `),r([s({type:Boolean})],st.prototype,"selected",2),r([s({type:String})],st.prototype,"text",2),r([s({type:String})],st.prototype,"theme",2),st=r([m("nidoca-tab")],st);var F=class extends h{tabSlot;tabContentSlot;theme="surface";tabIndex=0;render(){return o`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),n=100/t.length,i=t[this.tabIndex];for(let l=0;l<t.length;l++){let d=t[l];d instanceof st&&(d.theme=this.theme,d.style.width=String(n).concat("%"),d==i?(d.selected=!0,d.classList.add("SELECTED")):(d.selected=!1,d.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let e=this.tabContentSlot.assignedElements();for(let n=0;n<e.length;n++){let i=e[n];i instanceof Tt&&(this.tabIndex==t?i.selected=!0:i.selected=!1,t++)}}}tabClicked(t){let e=t.detail;this.changeTabIndex(e)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let e=this.tabSlot.assignedElements();for(let n=0;n<e.length;n++){let i=e[n];if(i instanceof st&&i==t){this.tabIndex=n;break}}}}static example(t=""){return o`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${R.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};c(F,"styles",p`
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
  `),r([y("#tabSlot")],F.prototype,"tabSlot",2),r([y("#tabContentSlot")],F.prototype,"tabContentSlot",2),r([s({type:String})],F.prototype,"theme",2),r([s({type:Number})],F.prototype,"tabIndex",2),F=r([m("nidoca-tabs")],F);var St=class extends h{hideLeft=!0;prominent=!1;leftElement;constructor(){super(),document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let e=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-e.width}})}render(){return o`
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
    `}};c(St,"styles",p`
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
  `),r([s({type:Boolean})],St.prototype,"hideLeft",2),r([s({type:Boolean})],St.prototype,"prominent",2),r([y("#left")],St.prototype,"leftElement",2),St=r([m("nidoca-template")],St);var _t=class extends h{videoElement;canvasElement;buttonElement;firstUpdated(t){super.firstUpdated(t),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(e=>{this.videoElement&&(this.videoElement.srcObject=e)})}render(){return o`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let t=this.canvasElement.getContext("2d");if(t){t.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let e=this.canvasElement.toDataURL("image/jpeg");console.log(e)}}}};c(_t,"styles",p``),r([y("#video")],_t.prototype,"videoElement",2),r([y("#canvas")],_t.prototype,"canvasElement",2),r([y("#click-photo")],_t.prototype,"buttonElement",2),_t=r([m("nidoca-video")],_t);var Vt=class extends h{src="";canvasElements=[];storeCanvasElements=[];img;render(){return o`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>o`${t}`)}
    `}updated(t){super.updated(t),t.forEach((e,n)=>{if(console.debug(`${this.tagName} : property ${String(n)} changed. oldValue: ${e}`),n=="src"){this.convert();let i=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let e=document.createElement("canvas");e.width=t[0],e.height=t[1];let n=e.getContext("2d");n&&this.img&&(this.img.crossOrigin="anonymous",n.drawImage(this.img,0,0,t[0],t[1]),e.toBlob(i=>{},"image/webp")),this.canvasElements.push(e)}),this.requestUpdate()})}};c(Vt,"styles",p``),r([s({type:String})],Vt.prototype,"src",2),r([y("#img")],Vt.prototype,"img",2),Vt=r([m("nidoca-svg-2-webp")],Vt);var v=class extends h{theme="plain";text="";render(){return o`<style>
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
    `}};c(v,"styles",p`
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
  `),r([s({type:f,converter:String})],v.prototype,"theme",2),r([s({type:String})],v.prototype,"text",2),v=r([m("nidoca-text")],v);var fe=class extends v{render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};c(fe,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 450;
      font-size: 105%;
    }
  `),fe=r([m("nidoca-text-body")],fe);var ge=class extends v{render(){return o`${super.render()}`}};c(ge,"styles",p`
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
  `),ge=r([m("nidoca-text-button")],ge);var ye=class extends v{};c(ye,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `),ye=r([m("nidoca-text-overline")],ye);var be=class extends v{render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};c(be,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 100%;
    }
  `),be=r([m("nidoca-text-subtitle")],be);var U=class extends v{render(){return o`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};c(U,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 350;
      line-height: 1.25em;
      font-size: 95%;
    }
  `),U=r([m("nidoca-text-caption")],U);var Ne=class extends U{render(){return o`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ne=r([m("nidoca-text-error")],Ne);var tr=class extends U{render(){return o`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};tr=r([m("nidoca-text-success")],tr);var er=class extends U{render(){return o`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};er=r([m("nidoca-text-warning")],er);var rr=class extends U{render(){return o`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};rr=r([m("nidoca-text-info")],rr);var xe=class extends v{};c(xe,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `),xe=r([m("nidoca-text-h1")],xe);var ve=class extends v{};c(ve,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `),ve=r([m("nidoca-text-h2")],ve);var we=class extends v{};c(we,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `),we=r([m("nidoca-text-h3")],we);var $e=class extends v{};c($e,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `),$e=r([m("nidoca-text-h4")],$e);var Ee=class extends v{};c(Ee,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `),Ee=r([m("nidoca-text-h5")],Ee);var ke=class extends v{};c(ke,"styles",p`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `),ke=r([m("nidoca-text-h6")],ke);var ut=class extends I{message="Dies ist eine Testnachricht";toastElement;showToast(t=3e3){this.toastElement.classList.add("show"),setTimeout(()=>{this.hideToast()},t)}hideToast(){this.toastElement.classList.remove("show")}render(){return o`
      <div id="toast" class="toast">
        ${this.message}
      </div>
    `}};c(ut,"styles",p`
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
  `),r([s({type:String})],ut.prototype,"message",2),r([y("#toast")],ut.prototype,"toastElement",2),ut=r([m("nidoca-toast")],ut);var V=class extends h{value="";placeholder="";disabled=!1;inputElement;theme="plain";render(){return o`
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
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",e=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}static example(t=""){return o`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};c(V,"styles",p`
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
  `),r([s({type:String})],V.prototype,"value",2),r([s({type:String})],V.prototype,"placeholder",2),r([s({type:Boolean})],V.prototype,"disabled",2),r([y("#inputElement")],V.prototype,"inputElement",2),r([s({type:f,converter:String})],V.prototype,"theme",2),V=r([m("nidoca-search-bar")],V);var Te=class{static CENTER="CENTER";static LEFT="LEFT";static RIGHT="RIGHT";static TOP="TOP";static BOTTOM="BOTTOM";static SLIDE_CENTER="SLIDE_CENTER";static SLIDE_LEFT="SLIDE_LEFT";static SLIDE_RIGHT="SLIDE_RIGHT";static SLIDE_TOP="SLIDE_TOP";static SLIDE_BOTTOM="SLIDE_BOTTOM"},Gt=class extends h{transitionType=Te.CENTER;duration=.5;render(){return o` <div class="${C(this.transitionType)}"><slot></slot></div> `}};c(Gt,"styles",p`
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
  `),r([s({type:String})],Gt.prototype,"transitionType",2),r([s({type:Number})],Gt.prototype,"duration",2),Gt=r([m("nidoca-transition")],Gt);var ee=class extends h{show=!1;render(){return this.show?o`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${Te.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:o``}};c(ee,"styles",p`
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
  `),r([s({type:Boolean})],ee.prototype,"show",2),ee=r([m("nidoca-dialog")],ee);var ft=class extends h{show=!1;title="Ja oder Nein ?";description="Entscheide dich";labelButtonYes="Ja";labelButtonNo="Nein";render(){return o`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};c(ft,"styles",p``),r([s({type:Boolean})],ft.prototype,"show",2),r([s({type:String})],ft.prototype,"title",2),r([s({type:String})],ft.prototype,"description",2),r([s({type:String})],ft.prototype,"labelButtonYes",2),r([s({type:String})],ft.prototype,"labelButtonNo",2),ft=r([m("nidoca-dialog-decision")],ft);var vt=class extends h{icon="";render(){return o`
      <nidoca-icon-extended class="icon" icon="${this.icon}"></nidoca-icon-extended>
      <nidoca-card class="card">
        <slot></slot>
      </nidoca-card>
    `}static example(t="",e="surface"){return o`
      <nidoca-infobox slot="${t}" icon="handshake" style="width:250px; height:250px;">
        <nidoca-text-h5 theme="${e}">Community</nidoca-text-h5>
        <nidoca-text-body theme="${e}"
          >Gemeinsam sind wir stark. Wenn wir einander helfen, können wir alles erreichen. Wir wollen unsere Community
          stärken.</nidoca-text-body
        >
      </nidoca-infobox>
    `}};c(vt,"styles",p`
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
  `),r([s({type:String})],vt.prototype,"icon",2),vt=r([m("nidoca-infobox")],vt);var N=class extends h{theme="surface";src="";title="";subtitle="";render(){return o`
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
    >`}};c(N,"styles",p`
    :host {
      display: block;
    }
  `),r([s({type:f,converter:String})],N.prototype,"theme",2),r([s({type:String})],N.prototype,"src",2),r([s({type:String})],N.prototype,"title",2),r([s({type:String})],N.prototype,"subtitle",2),N=r([m("nidoca-avatar")],N);var re=class extends h{theme="surface";render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};c(re,"styles",p`
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
  `),r([s({type:f,converter:String})],re.prototype,"theme",2),re=r([m("nidoca-card")],re);var Se=class extends h{render(){return o`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${t=>this.slotChanged(t)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(t){let e=t.target;if(e==null)return;let n=e.assignedElements();for(let i=0;i<n.length;i++){let d=n[i].classList;d.contains("flexItem")||d.add("flexItem"),d.contains("flexItemDevice")||d.add("flexItemDevice")}}};c(Se,"styles",p`
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
  `),Se=r([m("nidoca-gallery")],Se);var _e=class extends h{render(){return o`<slot></slot>`}print(){let t=window.open("");t&&(t.document.write(this.innerHTML),t.print(),t.close())}};c(_e,"styles",p`
    :host {
      display: none;
    }
  `),_e=r([m("nidoca-print")],_e);var Re=class extends h{render(){return o`
      <slot id="container" class="container" @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let n=t.target.assignedElements(),i=n.length;for(let l=0;l<i;l++){let g=n[l].classList,u="item_count_"+i;g.contains(u)||g.add(u)}}};c(Re,"styles",p`
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
  `),Re=r([m("nidoca-section")],Re);var ne=class extends h{cards=[];render(){return o`
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
    `}clicked(t){this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:{index:-1,card:t},bubbles:!0,composed:!0}))}};c(ne,"styles",p`
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
  `),r([s({type:Array})],ne.prototype,"cards",2),ne=r([m("nidoca-dashboard")],ne);var oe=class extends h{theme="plain";render(){return o`
      ${w.getStyle(this.theme)}
      <slot></slot>
    `}};c(oe,"styles",p`
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
  `),r([s({type:f,converter:String})],oe.prototype,"theme",2),oe=r([m("nidoca-box")],oe);var G=class extends h{theme="primary";label="Deine Nachricht";nameLabel="Dein Name";emailLabel="Deine Email";titleLabel="Betreff";messageLabel="Deine Nachricht";buttonLabel="Senden";formComponent;render(){return o`
      <nidoca-box theme="${C(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${"text"}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"email"}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${"text"}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${w.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${"contained"}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};c(G,"styles",p`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `),r([s({type:f,converter:String})],G.prototype,"theme",2),r([s({type:String,converter:String})],G.prototype,"label",2),r([s({type:String,converter:String})],G.prototype,"nameLabel",2),r([s({type:String,converter:String})],G.prototype,"emailLabel",2),r([s({type:String,converter:String})],G.prototype,"titleLabel",2),r([s({type:String,converter:String})],G.prototype,"messageLabel",2),r([s({type:String,converter:String})],G.prototype,"buttonLabel",2),r([y("#authenitcate-form")],G.prototype,"formComponent",2),G=r([m("nidoca-form-contact")],G);var nr=class{getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}propertyName;propertyValue;constructor(t,e){this.propertyName=t,this.propertyValue=e}getRenderType(){return this.isConverterTypeArray()||this.isArray()?"Array":this.getTypeName()==null?"Class":this.getTypeName()}getEnumValues(){let t=[];return Object.values(this.getType()).forEach(e=>{t.push({key:e,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(e)])})}),t}getEnumValue(t){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(t)]}getEnumKey(t){let e=this.getEnumValues();for(let n=0;n<e.length;n++){let i=e[n];if(i.key==t)return i.value}}isConverterTypeArray(){return this.getConverterTypeName()=="Array"}isArray(){return this.getTypeName()=="Array"}isPrimitive(){return this.getTypeName()=="String"||this.getTypeName()=="Boolean"||this.getTypeName()=="Number"}getType(){return this.propertyValue?.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){return this.getConverterType()?.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}};var or=class{instance;constructor(t){this.instance=t}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map(t=>t.name?t.name:"default")}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(t,e){let n=[];if(e&&(e.tagName==t&&n.push(e),e.children.length>0)){let l=e?.children;for(let d=0;d<l.length;d++)n=n.concat(this.getElementsByTagName(t,l.item(d)))}return n}getElementProperties(){let t=this.instance.constructor.elementProperties;t||(t=new Map);let e=[];for(let n of Array.from(t.keys()))e.push(new nr(n,t.get(n)));return e}getOwnPropertieNames(){let t=this.instance.constructor;return Object.getOwnPropertyNames(t)}};var ir=class{propertyWrapper;constructor(t){this.propertyWrapper=t}getInputElement(t){if(t==null)return o``;let e=t.webcomponentWrapper;if(e==null)return o``;switch(this.propertyWrapper.getRenderType()){case"String":return o`
                    <nidoca-form-text .textType="${"text"}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${e.instance[this.propertyWrapper.propertyName]}"
                                      @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
                    /></nidoca-form-text>`;case"Number":return o` <nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${"number"}"
          value="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case"Boolean":return o` <nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${e.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case"Class":return o` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${T.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter(i=>this.propertyWrapper.getType()[i]==e.instance[this.propertyWrapper.propertyName])[0]}"
          @input="${i=>{e.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(i.target.getOutputData().value),t.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case"Array":return o`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${T.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${e.instance[this.propertyWrapper.propertyName]}"
            @input="${i=>{e.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,e.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return o``}}getAsHtml(t){switch(this.propertyWrapper.getRenderType()){case"Boolean":return`${this.propertyWrapper.propertyName}
`;case"Array":return"";default:return`${this.propertyWrapper.propertyName}="${t.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}"
`}}getAsLit(t){switch(this.propertyWrapper.getRenderType()){case"Class":case"String":return`${this.propertyWrapper.propertyName}="${t.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}"
`;case"Boolean":return`${this.propertyWrapper.propertyName}
`;case"Array":return`.${this.propertyWrapper.propertyName}="\${[]}"
`;default:return`.${this.propertyWrapper.propertyName}="\${}"
`}}getAsAngular(t){switch(this.propertyWrapper.getRenderType()){case"Class":case"String":return`[${this.propertyWrapper.propertyName}]="${t.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}"
`;case"Array":return`[${this.propertyWrapper.propertyName}]="\${[]}"
`;default:return`[${this.propertyWrapper.propertyName}]="\${}"
`}}getAsJavascript(t){switch(this.propertyWrapper.getRenderType()){case"Class":case"Array":return"";case"String":return`element.${this.propertyWrapper.propertyName}="${t.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}";
`;default:return`element.${this.propertyWrapper.propertyName}=${t.webcomponentWrapper.instance[this.propertyWrapper.propertyName]};
`}}getAsTypescript(t){switch(this.propertyWrapper.getRenderType()){case"Array":return"";case"Class":case"String":return`element.${this.propertyWrapper.propertyName}="${t.webcomponentWrapper.instance[this.propertyWrapper.propertyName]}";
`;default:return`element.${this.propertyWrapper.propertyName}=${t.webcomponentWrapper.instance[this.propertyWrapper.propertyName]};
`}}};var sr=class{constructor(t,e){this.parent=t;this.webcomponentWrapper=e}getAsHtml(){return`<${this.webcomponentWrapper.getTagName()}
${this.getPropertyGuiWrappers().map(e=>e.getAsHtml(this)).join("")}></${this.webcomponentWrapper.getTagName()}>
`.trim()}getAsJavascript(){return`<${this.webcomponentWrapper.getTagName()} id="meinElement"></${this.webcomponentWrapper.getTagName()}>
<script>
  const element = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers().map(e=>e.getAsJavascript(this)).join("  ")}<\/script>
`.trim()}getTypescript(){return`
const element : ${this.webcomponentWrapper.getClassName()} = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers().map(e=>e.getAsTypescript(this)).join("  ")}
`.trim()}getAsLit(){return`
<${this.webcomponentWrapper.getTagName()}
  ${this.getPropertyGuiWrappers().map(e=>e.getAsLit(this)).join("  ")}>
`.trim()}getAsAngular(){return`<${this.webcomponentWrapper.getTagName()}
${this.getPropertyGuiWrappers().map(e=>e.getAsAngular(this)).join("  ")}></${this.webcomponentWrapper.getTagName()}>
`.trim()}renderPropertyGui(){let t=[];for(let e of this.getPropertyGuiWrappers())t.push(o`
          <div>
            <b>${e.propertyWrapper.propertyName}</b>

            <pre>${e.propertyWrapper.getTypeName()}</pre>
            <div>${e.getInputElement(this)}</div>
          </div>
        `);return t}getPropertyGuiWrappers(){let t=[];for(let e of this.webcomponentWrapper.getElementProperties())t.push(new ir(e));return t}getPropertieNames(){let t=[];return this.getPropertyGuiWrappers().map(e=>{t.push(e.propertyWrapper.propertyName)}),t}hasProperties(){return this.getPropertieNames().length>0}};var Kt=class extends I{webcomponentGuiWrapper=null;customEventNames=[];element;updated(t){t.has("element")&&this.element!=null&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new sr(this,new or(this.element)),this.requestUpdate())}render(){return this.element?o` <nidoca-section theme="primary">
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
              ${this.webcomponentGuiWrapper?.hasProperties()?o`
                    <nidoca-text-h2 class="paddingTopBottom">Attribute</nidoca-text-h2>
                    ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map(t=>o`${t.getInputElement(this.webcomponentGuiWrapper)}
                        <div class="paddingTopBottom"></div>`)}
                  `:o``}
              ${this.webcomponentGuiWrapper?.webcomponentWrapper.hasSlots()?o` <nidoca-text-h2 class="paddingTopBottom">Slots</nidoca-text-h2>

                    <nidoca-table
                      theme="surface"
                      .headers="${["name"]}"
                      .rows="${this.toSlotRows(this.webcomponentGuiWrapper.webcomponentWrapper.getSlotNames())}"
                    >
                    </nidoca-table>`:o``}
              ${this.customEventNames.length>0?o` <nidoca-text-h2 class="paddingTopBottom">Custom Events</nidoca-text-h2>
                    <nidoca-table
                      class="paddingTopBottom"
                      .headers="${["name"]}"
                      .rows="${this.toCustomEventRows(this.customEventNames)}"
                    >
                    </nidoca-table>`:o``}
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
          <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`:o`Kein Element ausgewählt.`}slotChanged(t){let e=t.target;if(e==null)return;let i=e.assignedElements()[0];i instanceof HTMLElement&&(this.element=i)}toAttributeRows(t){let e=[[]];return t&&t.map(n=>{let i=[];return i.push(n.propertyWrapper.propertyName),i.push(n.propertyWrapper.getTypeName()),i.push(n.propertyWrapper.getConverterTypeName()),i.push(n.propertyWrapper.getRenderType()),e.push(i),i}),e}toSlotRows(t){let e=[[]];return t&&t.map(n=>{let i=[];return i.push(n),e.push(i),i}),e}toCustomEventRows(t){let e=[[]];return t&&t.map(n=>{let i=[];return i.push(n),e.push(i),i}),e}};c(Kt,"styles",p`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }

    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
  `),r([s({type:Array})],Kt.prototype,"customEventNames",2),r([s({type:Object})],Kt.prototype,"element",2),Kt=r([m("webcomponent-viewer")],Kt);var ie=class extends I{webcomponentViewer;componentMap=new Map;value="";options=[];render(){return o`
      <nidoca-form-combobox
        name="components"
        label="Komponenten"
        value="${this.value}"
        .options="${this.options}"
        @input="${t=>{let e=t.target.getOutputData().value,n=this.componentMap.get(e);this.webcomponentViewer&&(console.log(`change element: ${e}`),this.webcomponentViewer.element=n)}}"
      ></nidoca-form-combobox>

      <nidoca-hr></nidoca-hr>

      <webcomponent-viewer id="webcomponentViewer"></webcomponent-viewer>
      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let n=t.target.assignedElements(),i=n.length;for(let l=0;l<i;l++){let d=n[l];d instanceof HTMLElement&&(this.webcomponentViewer&&this.webcomponentViewer.element==null&&(this.webcomponentViewer.element=d,this.value=d.tagName),this.componentMap.set(d.tagName,d.cloneNode(!0)))}this.options=T.stringArrayToOptions(Array.from(this.componentMap.keys())),this.requestUpdate()}};c(ie,"styles",p`
    slot {
      display: none;
    }
  `),r([y("#webcomponentViewer")],ie.prototype,"webcomponentViewer",2),ie=r([m("webcomponent-viewer-container")],ie);var ar=class extends I{render(){return o`<nidoca-container>
      <nidoca-section>
        <webcomponent-viewer-container>
          ${Q.example()} ${S.example()} ${q.example()}
          ${Z.example()}
    </webcomponent-viewer-container>
      </nidoca-section>
      </nidoca-container>`}};ar=r([m("nidoca-viewer")],ar);var Le=class extends h{render(){return o`
      <nidoca-container style="">
        <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
          <nidoca-img src="logo.svg" width="128px"></nidoca-img>
          <nidoca-text-h2 style="padding-left:var(--space-2);">nidoca-webcomponents</nidoca-text-h2>
        </div>
      </nidoca-container>
      <!--
      <nidoca-container theme="primary">
        <nidoca-text-h1 style="text-align:center;">HTML Einbindung</nidoca-text-h1>

        <nidoca-code
          >&lt;script
          src=&quot;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca-webcomponents.js&quot;&gt;&lt;/script&gt;
          &lt;style&gt;@import
          url(&#39;https://domoskanonos.github.io/nidoca-webcomponents/webcomponents/nidoca.css&#39;);&lt;/style&gt;
          &lt;nidoca-button&gt;Mein Button&lt;/nidoca-button&gt;
        </nidoca-code>
      </nidoca-container>
  -->
      <nidoca-container>
        <nidoca-text-h1 style="text-align:center;">Komponenten</nidoca-text-h1>
      </nidoca-container>

      ${this.getComponentHtml(ut,new ut,"NidocaToast Komponente.")}
      ${this.getComponentHtml(vt,new vt,"Infobox Komponente.")}
      ${this.getComponentHtml(B,new B,"Standard Icon Komponente.")}
      ${this.getComponentHtml(z,new z,"Standard Icon Komponente.")}
      ${this.getComponentHtml(z,new z,"Standard Icon Komponente.")}
      ${this.getComponentHtml(lt,new lt,"Komponente um Quellcode darzustellen.")}
      ${this.getComponentHtml(F,new F,"Top App Bar Komponente")}
      ${this.getComponentHtml(v,new v,"Typography Komponenten")}
      ${this.getComponentHtml(ht,new ht,"Top App Bar Komponente")}
      ${this.getComponentHtml(rt,new rt,"Chip Komponente")}
      ${this.getComponentHtml(R,new R,"Artikel Komponente")}
      ${this.getComponentHtml(et,new et,"Accordion Komponente")}
      ${this.getComponentHtml(J,new J,"Button")}
      ${this.getComponentHtml(dt,new dt,"Men\xFC")}
      ${this.getComponentHtml(D,new D,"Men\xFCelement")}
      ${this.getComponentHtml(ct,new ct,"Men\xFCbereich")}
      ${this.getComponentHtml(V,new V,"Suchfeld")}
      ${this.getComponentHtml(M,new M,"Einfaches Bild")}
      ${this.getComponentHtml(Z,new Z,"Rundes Bild")}
      ${this.getComponentHtml(N,new N,"Avatar Komponente, Bild mit Text")}
      ${this.getComponentHtml(q,new q,"Unterkomponente f\xFCr die Komponente <nidoca-list/>")}
      ${this.getComponentHtml(S,new S,"Unterkomponente f\xFCr die Komponente <nidoca-list/>")}
      ${this.getComponentHtml(Q,new Q,"Listenkomponente f\xFCr mobile und Desktop Anwendungen. Unterkomponenten dieser Komponente sind nidoca-list-section und nidoca-list-item")}
    `}getComponentHtml(t,e,n){return o` <nidoca-container>
      <nidoca-section style="padding:var(--space-4);">
        <nidoca-card style="padding:var(--space-4); heigth:500px;"> ${t.example()} </nidoca-card>
        <nidoca-article
          style="padding:var(--space-4);"
          theme="plain"
          overline="<${e.tagName}></${e.tagName}>"
          title="${e.tagName}"
          text="${n}"
        >
          <nidoca-button
            style="width:250px;"
            @nidoca-event-button-clicked="${()=>window.open("https://domoskanonos.github.io/nidoca-lit-viewer/","_blank")}"
            >Ausprobieren</nidoca-button
          >
        </nidoca-article>
      </nidoca-section>
    </nidoca-container>`}};c(Le,"styles",p``),Le=r([m("nidoca-page-main")],Le);var Ce=class extends h{render(){return o`
      <nidoca-container>
        <nidoca-viewer></nidoca-viewer>
      </nidoca-container>
    `}};c(Ce,"styles",p`
    .infobox {
      padding: var(--space-2);
    }
  `),Ce=r([m("nidoca-page-webcomponents")],Ce);var Rt=class extends h{karmatica=void 0;listData=[];cards=[{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/goal.webp",title:"Ziele",description:"Wir haben uns Ziele gesetzt, die wir erreichen wollen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/friend.webp",title:"Freunde",description:"Wir haben Freunde, die uns bei unseren Pl\xE4nen unterst\xFCtzen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/action.webp",title:"Aktionen",description:"Wir haben Aktionen geplant, die wir durchf\xFChren wollen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/routine.webp",title:"Routinen",description:"Wir haben Routinen, die wir einhalten wollen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/next_action.webp",title:"N\xE4chste Aktion",description:"Hier gehts zu deinen n\xE4chsten Aktionen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/habit.webp",title:"Gewohnheiten",description:"Hier gehts zu deinen Gewohnheiten"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/happiness.webp",title:"Gl\xFCck",description:"Was ist eigentlich Gl\xFCck"}];selectedCard=this.cards[0];firstUpdated(t){let e=new ae("AppDatabase","Karmatica","id");console.log("Open karmatica"),e.openDatabase().then(async()=>{this.karmatica=await e.get(1),this.listData=this.karmatica?.friends?this.karmatica.friends:[],this.requestUpdate()})}render(){return o`
      <nidoca-crud>   
        <nidoca-generic-edit .item="${new Me}" key="id"></nidoca-generic-edit>
        <nidoca-list-search @nidoca-search-bar-event-value-changed="${t=>{let e=t.detail;this.listData=(this.karmatica?this.karmatica.friends:[]).filter(n=>n.name.indexOf(e)>-1)}}">
        ${this.listData.map(t=>o`
                  <nidoca-list-item
                    theme="${this.theme}"
                    primaryText="${t.name||""}"
                    secondaryText="${t.email||""}"
                    tertiaryText="${t.phone||""}"
                    infoText="${t.energy||""}"
                      >
                      <nidoca-img-round
                        width="64px"
                        height="64px"
                        slot="left"
                        src="${t.image?t.image:ze.renderImgText(t.name)}"
                      ></nidoca-img-round>
                  <nidoca-icon slot="right" icon=""></nidoca-icon>
                </nidoca-list-item>`)}
        </nidoca-list-search>
      </nidoca-crud>`}cardClicked(t){console.log("cardClicked");let e=t.detail;this.selectedCard=e.card}};r([xt()],Rt.prototype,"karmatica",2),r([xt()],Rt.prototype,"listData",2),r([s({type:Array})],Rt.prototype,"cards",2),r([s({type:Object})],Rt.prototype,"selectedCard",2),Rt=r([m("nidoca-page-generic-app")],Rt);var Ae=class extends h{render(){return o`
      <nidoca-container>
        <nidoca-article title="Impressum" summary="Angaben gemäß § 5 TMG">
          <nidoca-text>Dominik Bruhn</nidoca-text>
          <nidoca-text>Arcostraße 54</nidoca-text>
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
    `}};c(Ae,"styles",p`
    nidoca-article {
      padding-bottom: var(--space-2);
    }
  `),Ae=r([m("nidoca-page-imprint")],Ae);var se=class extends h{cssVars=[];firstUpdated(){let t=(e=document.styleSheets)=>{let n=[];return Array.from(e).forEach(i=>{Array.from(i.cssRules).forEach(l=>{if(!l||!l.style)return;let d=l.style;Array.from(d).forEach(g=>{g.startsWith("--")&&n.indexOf(g)==-1&&n.push(g)})})}),n};this.cssVars=t(),console.log(this.cssVars)}render(){return o`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${Bt([this.cssVars],()=>o`
                ${$t(this.cssVars,t=>o`
                    <nidoca-form-text
                      style="width:100%;padding-bottom: var(--space-3);"
                      @input="${e=>{document.documentElement.style.setProperty(t,e.target?e.target.getOutputData().value:"")}}"
                      type="${t.indexOf("color")>-1?"color":"text"}"
                      name="${t}"
                      value="${getComputedStyle(document.documentElement).getPropertyValue(t).trim()}"
                      label="${t}"
                    ></nidoca-form-text>
                  `)}
              `)}
        </nidoca-article>
      </nidoca-container>
    `}};c(se,"styles",p``),r([s({type:Array})],se.prototype,"cssVars",2),se=r([m("nidoca-page-settings")],se);var Ie=class extends h{render(){return o``}};c(Ie,"styles",p``),Ie=r([m("nidoca-page-privacy")],Ie);var He=class extends h{render(){return o``}};c(He,"styles",p``),He=r([m("nidoca-page-terms-of-use")],He);var Oe=class extends h{content=o``;constructor(){super(),K.getUniqueInstance().subscribe(this),this.routeChanged(K.getUniqueInstance().getCurrentPage())}routeChanged(t){switch(t){case"privacy":this.content=o`<nidoca-page-privacy></nidoca-page-privacy>`;break;case"imprint":this.content=o`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"settings":this.content=o`<nidoca-page-settings></nidoca-page-settings>`;break;case"terms-of-use":this.content=o`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"genericapp":this.content=o`<nidoca-page-generic-app></nidoca-page-generic-app>`;break;case"webcomponents":this.content=o`<nidoca-page-webcomponents></nidoca-page-webcomponents>`;break;case"main":this.content=o`<nidoca-page-main></nidoca-page-main>`;break;default:this.content=o`<nidoca-page-webcomponents></nidoca-page-webcomponents>`}}render(){return o`
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
        <nidoca-menu slot="left">
          <nidoca-menu-item
            @nidoca-event-menu-item-clicked="${()=>{K.getUniqueInstance().navigate("#main")}}"
            icon="home"
            text="Start"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Webcomponents"
            @nidoca-event-menu-item-clicked="${()=>{K.getUniqueInstance().navigate("#webcomponents")}}"
          ></nidoca-menu-item>

          <nidoca-menu-item
            text="Generic App"
            @nidoca-event-menu-item-clicked="${()=>{K.getUniqueInstance().navigate("#genericapp")}}"
          ></nidoca-menu-item>

          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
          <nidoca-menu-item
            text="Impressum"
            @nidoca-event-menu-item-clicked="${()=>{K.getUniqueInstance().navigate("#imprint")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Datenschutz"
            @nidoca-event-menu-item-clicked="${()=>{K.getUniqueInstance().navigate("#privacy")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @nidoca-event-menu-item-clicked="${()=>{K.getUniqueInstance().navigate("#terms-of-use")}}"
          ></nidoca-menu-item>
          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
          <nidoca-menu-item
            text="Einstellungen"
            @nidoca-event-menu-item-clicked="${()=>{K.getUniqueInstance().navigate("#settings")}}"
          ></nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
    `}};r([s({type:Object})],Oe.prototype,"content",2),Oe=r([m("nidoca-my-app")],Oe);})();
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
