"use strict";(()=>{var qr=Object.defineProperty;var jr=Object.getOwnPropertyDescriptor;var r=(a,e,t,n)=>{for(var i=n>1?void 0:n?jr(e,t):e,l=a.length-1,m;l>=0;l--)(m=a[l])&&(i=(n?m(e,t,i):m(i))||i);return n&&i&&qr(e,t,i),i};var G=class a{constructor(){this.listeners=[];window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",e=>{if(!this.shouldIgnoreEvent(e)){let t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}})}static getUniqueInstance(){return a.uniqueInstance||(a.uniqueInstance=new a),a.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){if(e.indexOf("#")==-1&&(e="#".concat(e)),console.trace("navigate to: %s",e),t!=null&&console.trace("state: %s",JSON.stringify(t)),document.location.hash===e){console.trace("you are already on page: "+e);return}history.pushState(t,"",e),this.notifyListeners()}getCurrentState(){return history.state}getStateProperty(e){let t=this.getCurrentState();return t!=null?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){let e=this.getCurrentPage();this.listeners.forEach(t=>t.routeChanged(e))}shouldIgnoreEvent(e){return e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(let n of e.composedPath?e.composedPath():[])if(this.isAnchor(n))return n;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&e.nodeName.toLowerCase()==="a"}shouldIgnoreAnchor(e){return!!(e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){let t=e.port,n=e.protocol,m=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${m}`}};var Oe=class a{static generateImageBase64(e,t,n){let i=document.createElement("canvas");i.width=128,i.height=128;let l=i.getContext("2d");if(!l)throw new Error("Canvas context is not available");l.fillStyle=n,l.fillRect(0,0,i.width,i.height),l.fillStyle=t;let m=document.body,u=getComputedStyle(m).getPropertyValue("--font-family")||"Arial";l.font=`bold 64px ${u}`,l.textAlign="center",l.textBaseline="alphabetic";let w=e.charAt(0).toUpperCase(),S=l.measureText(w),y=S.actualBoundingBoxAscent-S.actualBoundingBoxDescent;return l.fillText(w,i.width/2,i.height/2+y/2),i.toDataURL("image/png")}static renderImgText(e){return a.generateImageBase64(e,"#555555","#ffffff")}};var se=class a{constructor(e,t,n){this.db=null;this.dbName=e,this.storeName=t,this.keyField=n}static{this.DB_VERSION=2}async openDatabase(){this.db=await new Promise((e,t)=>{let n=indexedDB.open(this.dbName,a.DB_VERSION);n.onupgradeneeded=()=>{let i=n.result;console.log(`onupgradeneeded triggered. Aktuelle Version: ${i.version}`),i.objectStoreNames.contains(this.storeName)||(i.createObjectStore(this.storeName,{keyPath:this.keyField}),console.log(`Object Store '${this.storeName}' mit KeyPath '${String(this.keyField)}' erstellt.`))},n.onsuccess=()=>{console.log(`IndexedDB '${this.dbName}' ge\xF6ffnet.`),e(n.result)},n.onerror=()=>{console.error("Fehler beim \xD6ffnen der Datenbank:",n.error),t(new Error(n.error?.message||"Unknown error"))},n.onblocked=()=>{console.warn("Datenbank wird von einer anderen Verbindung blockiert."),t(new Error("Datenbank ist blockiert."))}})}async add(e){return new Promise((t,n)=>{if(this.db){console.log("add() called");let m=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).add(e);m.onsuccess=()=>t(),m.onerror=()=>n(m.error)}})}async update(e){let t=await this.openDatabase();return new Promise((n,i)=>{if(this.db){let h=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).put(e);h.onsuccess=()=>n(),h.onerror=()=>i(h.error)}})}async delete(e){return new Promise((t,n)=>{if(this.db){let m=this.db.transaction(this.storeName,"readwrite").objectStore(this.storeName).delete(e);m.onsuccess=()=>t(),m.onerror=()=>n(m.error)}})}async get(e){return new Promise((t,n)=>{if(this.db){let m=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).get(e);m.onsuccess=()=>t(m.result),m.onerror=()=>n(m.error)}})}async getAll(){return new Promise((e,t)=>{if(this.db){let l=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).getAll();l.onsuccess=()=>e(l.result),l.onerror=()=>t(l.error)}})}close(){this.db?.close()}},ze=class{constructor(){this.name="";this.email=null;this.phone=null;this.energy=0;this.image=null}};(async()=>{let a=new se("AppDatabase","Karmatica","id");await a.openDatabase();let e={id:1,myself:{name:"Dominik Bruhn",email:"dominikbruhn@googlemail.com",phone:"015205248862",energy:1,image:null},friends:[{name:"Nico Bruhn",email:null,phone:null,energy:1,image:null},{name:"Christoph Juretko",email:null,phone:null,energy:.6,image:null},{name:"Tim Poloczek",email:null,phone:null,energy:.5,image:null},{name:"Dennis Ratzer",email:null,phone:null,energy:.4,image:null},{name:"Nicole Eckert",email:null,phone:null,energy:.4,image:null},{name:"Stefan Harzke",email:null,phone:null,energy:.6,image:null},{name:"Denis Ergashbaev",email:null,phone:null,energy:.6,image:null},{name:"Bastian \xDCckermann",email:null,phone:null,energy:.2,image:null},{name:"Daniela Meyer zu Ummeln",email:null,phone:null,energy:0,image:null},{name:"Mark Enger",email:null,phone:null,energy:.3,image:null},{name:"Matthias Manasterni",email:null,phone:null,energy:.6,image:null},{name:"Dejan Guberinic",email:null,phone:null,energy:.5,image:null},{name:"Carina Bruhn",email:null,phone:null,energy:0,image:null}],goals:[{title:"Intellektuelle Steigerung",description:"Wachstum und Entwicklung der intellektuellen F\xE4higkeiten einer Person.",image:null,actions:[{description:"Neue Themen lernen",time_min:15,time_max:240,energy:.9,image:null},{description:"Ein Buch lesen",time_min:15,time_max:180,energy:.8,image:null},{description:"Objektive Nachrichten lesen",time_min:15,time_max:30,energy:0,image:null}],routines:[]},{title:"Fit und gesund",description:"Einen gesunden Lebensstil und k\xF6rperliche Fitness aufrechterhalten.",image:null,actions:[{description:"Gesund einkaufen und essen",time_min:30,time_max:null,energy:1,image:null},{description:"Vitamin-D-Tablette im Winter einnehmen",time_min:0,time_max:null,energy:.4,image:null},{description:"Schlafen",time_min:480,time_max:480,energy:1,image:null},{description:"Koffein, Alkohol und Rauchen vermeiden",time_min:0,time_max:null,energy:.8,image:null},{description:"Laufen",time_min:120,time_max:120,energy:1,image:null},{description:"Gym",time_min:120,time_max:120,energy:1,image:null},{description:"Fu\xDFball spielen",time_min:90,time_max:90,energy:1,image:null},{description:"Schwimmen gehen",time_min:120,time_max:240,energy:.5,image:null},{description:"Fitness-Workout",time_min:30,time_max:30,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]},{title:"Guter Papa",description:"Ein unterst\xFCtzender und pr\xE4senter Papa sein.",image:null,actions:[{description:"Lego spielen",time_min:10,time_max:120,energy:.9,image:null},{description:"Gesellschaftsspiele spielen",time_min:30,time_max:180,energy:.8,image:null},{description:"Ins Kino gehen",time_min:120,time_max:180,energy:.7,image:null},{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null}],routines:[]},{title:"Gl\xFCcklich sein",description:"Langfristiges Gl\xFCck und Zufriedenheit erreichen.",image:null,actions:[{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null},{description:"Urlaub machen",time_min:1440,time_max:40320,energy:1,image:null},{description:"Flohmarkt besuchen",time_min:45,time_max:120,energy:.6,image:null},{description:"Spazieren gehen",time_min:30,time_max:180,energy:.4,image:null},{description:"Massage bekommen",time_min:80,time_max:200,energy:.9,image:null},{description:"Computerspiele spielen",time_min:20,time_max:180,energy:0,image:null},{description:"Ein Buch lesen",time_min:15,time_max:180,energy:.8,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Gute Musik h\xF6ren",time_min:0,time_max:null,energy:.8,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Boden wischen",time_min:45,time_max:45,energy:.7,image:null},{description:"Fitness-Workout",time_min:30,time_max:30,energy:.9,image:null},{description:"Kurzer Schlaf zur Wiederherstellung der Energie",time_min:10,time_max:30,energy:.8,image:null},{description:"\xDCber Dinge nachdenken, f\xFCr die man dankbar ist",time_min:5,time_max:20,energy:.9,image:null},{description:"Mit geliebten Menschen in Kontakt bleiben",time_min:10,time_max:120,energy:.8,image:null}],routines:[]},{title:"Resiliente Person",description:"Eine resiliente und entspannte Person sein.",image:null,actions:[{description:"Einen gem\xFCtlichen Filmabend machen",time_min:100,time_max:180,energy:.2,image:null},{description:"Spazieren gehen",time_min:30,time_max:180,energy:.4,image:null},{description:"Massage bekommen",time_min:80,time_max:200,energy:.9,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Gute Musik h\xF6ren",time_min:0,time_max:null,energy:.8,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Kurzer Schlaf zur Wiederherstellung der Energie",time_min:10,time_max:30,energy:.8,image:null},{description:"\xDCber Dinge nachdenken, f\xFCr die man dankbar ist",time_min:5,time_max:20,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]},{title:"Sicherheit",description:"Ein gutes Gef\xFChl von Sicherheit haben.",image:null,actions:[{description:"Vorr\xE4te und Krisenwerkzeuge einrichten",time_min:0,time_max:120,energy:.6,image:null},{description:"Finanzen kontinuierlich optimieren",time_min:10,time_max:60,energy:.2,image:null},{description:"In Verm\xF6genswerte f\xFCr Wachstum investieren",time_min:10,time_max:60,energy:.2,image:null}],routines:[]},{title:"Finanzielle Freiheit",description:"Finanzielle Unabh\xE4ngigkeit erreichen.",image:null,actions:[{description:"Minimalistisch leben. Konsum minimieren.",time_min:0,time_max:null,energy:.7,image:null},{description:"Finanzen kontinuierlich optimieren",time_min:10,time_max:60,energy:.2,image:null},{description:"In Verm\xF6genswerte f\xFCr Wachstum investieren",time_min:10,time_max:60,energy:.2,image:null}],routines:[]},{title:"F\xFCr immer leben",description:"In der Lage sein, f\xFCr immer zu leben.",image:null,actions:[{description:"Gesund einkaufen und essen",time_min:30,time_max:null,energy:1,image:null},{description:"Schlafen",time_min:480,time_max:480,energy:1,image:null},{description:"Koffein, Alkohol und Rauchen vermeiden",time_min:0,time_max:null,energy:.8,image:null},{description:"In die Sauna gehen zur Entspannung",time_min:60,time_max:120,energy:.9,image:null},{description:"Meditation",time_min:10,time_max:60,energy:.9,image:null},{description:"Regelm\xE4\xDFige Gesundheitschecks",time_min:60,time_max:60,energy:.8,image:null}],routines:[]}]};a.add(e),a.close(),console.log("Karmatica erfolgreich in die IndexedDB eingef\xFCgt!")})();var Me=class{static capitalizeFirstLetter(e){return e&&e.charAt(0).toUpperCase()+e.slice(1)}};var Pe=globalThis,De=Pe.ShadowRoot&&(Pe.ShadyCSS===void 0||Pe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lr=Symbol(),br=new WeakMap,ae=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==lr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(De&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=br.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&br.set(t,e))}return e}toString(){return this.cssText}},xr=a=>new ae(typeof a=="string"?a:a+"",void 0,lr),c=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((n,i,l)=>n+(m=>{if(m._$cssResult$===!0)return m.cssText;if(typeof m=="number")return m;throw Error("Value passed to 'css' function must be a 'css' function result: "+m+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[l+1],a[0]);return new ae(t,a,lr)},vr=(a,e)=>{if(De)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=Pe.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,a.appendChild(n)}},mr=De?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return xr(t)})(a):a;var{is:Ur,defineProperty:Vr,getOwnPropertyDescriptor:Gr,getOwnPropertyNames:Kr,getOwnPropertySymbols:Xr,getPrototypeOf:Yr}=Object,Be=globalThis,wr=Be.trustedTypes,Jr=wr?wr.emptyScript:"",Zr=Be.reactiveElementPolyfillSupport,le=(a,e)=>a,me={toAttribute(a,e){switch(e){case Boolean:a=a?Jr:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},We=(a,e)=>!Ur(a,e),$r={attribute:!0,type:String,converter:me,reflect:!1,useDefault:!1,hasChanged:We};Symbol.metadata??=Symbol("metadata"),Be.litPropertyMetadata??=new WeakMap;var gt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$r){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Vr(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:l}=Gr(this.prototype,e)??{get(){return this[t]},set(m){this[t]=m}};return{get:i,set(m){let h=i?.call(this);l?.call(this,m),this.requestUpdate(e,h,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$r}static _$Ei(){if(this.hasOwnProperty(le("elementProperties")))return;let e=Yr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le("properties"))){let t=this.properties,n=[...Kr(t),...Xr(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(mr(i))}else e!==void 0&&t.push(mr(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let l=(n.converter?.toAttribute!==void 0?n.converter:me).toAttribute(t,n.type);this._$Em=e,l==null?this.removeAttribute(i):this.setAttribute(i,l),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let l=n.getPropertyOptions(i),m=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:me;this._$Em=i;let h=m.fromAttribute(t,l.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let i=this.constructor,l=this[e];if(n??=i.getPropertyOptions(e),!((n.hasChanged??We)(l,t)||n.useDefault&&n.reflect&&l===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:l},m){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,m??t??this[e]),l!==!0||m!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,l]of this._$Ep)this[i]=l;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,l]of n){let{wrapped:m}=l,h=this[i];m!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,l,h)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};gt.elementStyles=[],gt.shadowRootOptions={mode:"open"},gt[le("elementProperties")]=new Map,gt[le("finalized")]=new Map,Zr?.({ReactiveElement:gt}),(Be.reactiveElementVersions??=[]).push("2.1.1");var cr=globalThis,qe=cr.trustedTypes,Er=qe?qe.createPolicy("lit-html",{createHTML:a=>a}):void 0,dr="$lit$",yt=`lit$${Math.random().toFixed(9).slice(2)}$`,hr="?"+yt,Qr=`<${hr}>`,Ct=document,ce=()=>Ct.createComment(""),de=a=>a===null||typeof a!="object"&&typeof a!="function",ur=Array.isArray,Lr=a=>ur(a)||typeof a?.[Symbol.iterator]=="function",pr=`[ 	
\f\r]`,pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kr=/-->/g,Tr=/>/g,Rt=RegExp(`>|${pr}(?:([^\\s"'>=/]+)(${pr}*=${pr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sr=/'/g,_r=/"/g,Cr=/^(?:script|style|textarea|title)$/i,fr=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),o=fr(1),gn=fr(2),yn=fr(3),K=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Rr=new WeakMap,Lt=Ct.createTreeWalker(Ct,129);function Ar(a,e){if(!ur(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Er!==void 0?Er.createHTML(e):e}var Ir=(a,e)=>{let t=a.length-1,n=[],i,l=e===2?"<svg>":e===3?"<math>":"",m=pe;for(let h=0;h<t;h++){let u=a[h],w,S,y=-1,E=0;for(;E<u.length&&(m.lastIndex=E,S=m.exec(u),S!==null);)E=m.lastIndex,m===pe?S[1]==="!--"?m=kr:S[1]!==void 0?m=Tr:S[2]!==void 0?(Cr.test(S[2])&&(i=RegExp("</"+S[2],"g")),m=Rt):S[3]!==void 0&&(m=Rt):m===Rt?S[0]===">"?(m=i??pe,y=-1):S[1]===void 0?y=-2:(y=m.lastIndex-S[2].length,w=S[1],m=S[3]===void 0?Rt:S[3]==='"'?_r:Sr):m===_r||m===Sr?m=Rt:m===kr||m===Tr?m=pe:(m=Rt,i=void 0);let b=m===Rt&&a[h+1].startsWith("/>")?" ":"";l+=m===pe?u+Qr:y>=0?(n.push(w),u.slice(0,y)+dr+u.slice(y)+yt+b):u+yt+(y===-2?h:b)}return[Ar(a,l+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},he=class a{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let l=0,m=0,h=e.length-1,u=this.parts,[w,S]=Ir(e,t);if(this.el=a.createElement(w,n),Lt.currentNode=this.el.content,t===2||t===3){let y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(i=Lt.nextNode())!==null&&u.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(let y of i.getAttributeNames())if(y.endsWith(dr)){let E=S[m++],b=i.getAttribute(y).split(yt),C=/([.?@])?(.*)/.exec(E);u.push({type:1,index:l,name:C[2],strings:b,ctor:C[1]==="."?Ue:C[1]==="?"?Ve:C[1]==="@"?Ge:It}),i.removeAttribute(y)}else y.startsWith(yt)&&(u.push({type:6,index:l}),i.removeAttribute(y));if(Cr.test(i.tagName)){let y=i.textContent.split(yt),E=y.length-1;if(E>0){i.textContent=qe?qe.emptyScript:"";for(let b=0;b<E;b++)i.append(y[b],ce()),Lt.nextNode(),u.push({type:2,index:++l});i.append(y[E],ce())}}}else if(i.nodeType===8)if(i.data===hr)u.push({type:2,index:l});else{let y=-1;for(;(y=i.data.indexOf(yt,y+1))!==-1;)u.push({type:7,index:l}),y+=yt.length-1}l++}}static createElement(e,t){let n=Ct.createElement("template");return n.innerHTML=e,n}};function At(a,e,t=a,n){if(e===K)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,l=de(e)?void 0:e._$litDirective$;return i?.constructor!==l&&(i?._$AO?.(!1),l===void 0?i=void 0:(i=new l(a),i._$AT(a,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=At(a,i._$AS(a,e.values),i,n)),e}var je=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Ct).importNode(t,!0);Lt.currentNode=i;let l=Lt.nextNode(),m=0,h=0,u=n[0];for(;u!==void 0;){if(m===u.index){let w;u.type===2?w=new Kt(l,l.nextSibling,this,e):u.type===1?w=new u.ctor(l,u.name,u.strings,this,e):u.type===6&&(w=new Ke(l,this,e)),this._$AV.push(w),u=n[++h]}m!==u?.index&&(l=Lt.nextNode(),m++)}return Lt.currentNode=Ct,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Kt=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=At(this,e,t),de(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Lr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&de(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ct.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=he.createElement(Ar(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let l=new je(i,this),m=l.u(this.options);l.p(t),this.T(m),this._$AH=l}}_$AC(e){let t=Rr.get(e.strings);return t===void 0&&Rr.set(e.strings,t=new he(e)),t}k(e){ur(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let l of e)i===t.length?t.push(n=new a(this.O(ce()),this.O(ce()),this,this.options)):n=t[i],n._$AI(l),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},It=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,l){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=l,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}_$AI(e,t=this,n,i){let l=this.strings,m=!1;if(l===void 0)e=At(this,e,t,0),m=!de(e)||e!==this._$AH&&e!==K,m&&(this._$AH=e);else{let h=e,u,w;for(e=l[0],u=0;u<l.length-1;u++)w=At(this,h[n+u],t,u),w===K&&(w=this._$AH[u]),m||=!de(w)||w!==this._$AH[u],w===R?e=R:e!==R&&(e+=(w??"")+l[u+1]),this._$AH[u]=w}m&&!i&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ue=class extends It{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}},Ve=class extends It{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}},Ge=class extends It{constructor(e,t,n,i,l){super(e,t,n,i,l),this.type=5}_$AI(e,t=this){if((e=At(this,e,t,0)??R)===K)return;let n=this._$AH,i=e===R&&n!==R||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,l=e!==R&&(n===R||i);i&&this.element.removeEventListener(this.name,this,n),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){At(this,e)}},Hr={M:dr,P:yt,A:hr,C:1,L:Ir,R:je,D:Lr,V:At,I:Kt,H:It,N:Ve,U:Ge,B:Ue,F:Ke},Fr=cr.litHtmlPolyfillSupport;Fr?.(he,Kt),(cr.litHtmlVersions??=[]).push("3.3.1");var Or=(a,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let l=t?.renderBefore??null;n._$litPart$=i=new Kt(e.insertBefore(ce(),l),l,void 0,t??{})}return i._$AI(a),i};var gr=globalThis,A=class extends gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Or(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}};A._$litElement$=!0,A.finalized=!0,gr.litElementHydrateSupport?.({LitElement:A});var Nr=gr.litElementPolyfillSupport;Nr?.({LitElement:A});(gr.litElementVersions??=[]).push("4.2.1");var f=(i=>(i.primary="primary",i.secondary="secondary",i.surface="surface",i.plain="plain",i))(f||{}),v=class{static getStyle(e){return e?e=="plain"?o``:o` <style>
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
          </style>`:o``}static getOposite(e){return e=="plain"?"surface":e=="primary"||e=="primary"?"secondary":e=="secondary"?"primary":"plain"}getParentTheme(e){let t=e;for(;t!=null;){if(t.theme!=null)return t.theme;t=t.parentElement}}};var p=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};var tn={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:We},en=(a=tn,e,t)=>{let{kind:n,metadata:i}=t,l=globalThis.litPropertyMetadata.get(i);if(l===void 0&&globalThis.litPropertyMetadata.set(i,l=new Map),n==="setter"&&((a=Object.create(a)).wrapped=!0),l.set(t.name,a),n==="accessor"){let{name:m}=t;return{set(h){let u=e.get.call(this);e.set.call(this,h),this.requestUpdate(m,u,a)},init(h){return h!==void 0&&this.C(m,void 0,a,h),h}}}if(n==="setter"){let{name:m}=t;return function(h){let u=this[m];e.call(this,h),this.requestUpdate(m,u,a)}}throw Error("Unsupported decorator location: "+n)};function s(a){return(e,t)=>typeof t=="object"?en(a,e,t):((n,i,l)=>{let m=i.hasOwnProperty(l);return i.constructor.createProperty(l,n),m?Object.getOwnPropertyDescriptor(i,l):void 0})(a,e,t)}function bt(a){return s({...a,state:!0,attribute:!1})}var Ht=(a,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(a,e,t),t);function g(a,e){return(t,n,i)=>{let l=m=>m.renderRoot?.querySelector(a)??null;if(e){let{get:m,set:h}=typeof n=="object"?t:i??(()=>{let u=Symbol();return{get(){return this[u]},set(w){this[u]=w}}})();return Ht(t,n,{get(){let u=m.call(this);return u===void 0&&(u=l(this),(u!==null||this.hasUpdated)&&h.call(this,u)),u}})}return Ht(t,n,{get(){return l(this)}})}}var d=class extends A{constructor(){super(...arguments);this.theme="plain"}throwCustomEvent(t,n){this.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))}};r([s({type:f,converter:String})],d.prototype,"theme",2);var st=class extends d{constructor(){super(...arguments);this.key=null;this.item={};this.title=""}updated(t){t.has("item")&&(this.title=this.item.constructor.name)}render(){return o`
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
    `}renderFormFields(){let t=[];for(let[n,i]of Object.entries(this.item)){let l=Me.capitalizeFirstLetter(n),m;switch(typeof i){case"boolean":m=o`
            <nidoca-form-switch
              style="padding-bottom:var(--space-2);"
              label="${l}"
              name="${n}"
              .value="${i||""}"
            ></nidoca-form-switch>
          `;break;case"string":m=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${l}"
              name="${n}"
              .value="${i||""}"
            ></nidoca-form-text>
          `;break;case"number":m=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${l}"
              name="${n}"
              type="number"
              .value="${i||""}"
            ></nidoca-form-text>
          `;break;default:m=o`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${l}"
              name="${n}"
              .value="${i&&JSON.stringify(i)}"
            ></nidoca-form-text>
          `}t.push(m)}return o`${t}`}deleteItem(){this.formComponent!=null&&(console.log("item deleted."),this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-deleted",this.item))}updateItem(){this.formComponent!=null&&this.formComponent.validate()&&(this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-updated",this.item))}saveItem(){this.formComponent!=null&&this.formComponent.validate()&&(this.item=this.formComponent.getOutputData().jsonObject,this.throwCustomEvent("nidoca-event-generic-edit-item-saved",this.item))}cancel(){this.throwCustomEvent("nidoca-event-generic-edit-cancel",this.item)}};r([s({type:Object})],st.prototype,"key",2),r([s({type:Object})],st.prototype,"item",2),r([s({type:String})],st.prototype,"title",2),r([g("#form")],st.prototype,"formComponent",2),st=r([p("nidoca-generic-edit")],st);var Ot=class extends d{render(){return o`
    <nidoca-container>
      <nidoca-search-bar></nidoca-search-bar>
      <nidoca-list id="listElement">
        <slot></slot>
      </nidoca-list>
    </nidoca-container>
    `}};r([g("#listElement")],Ot.prototype,"slotElement",2),Ot=r([p("nidoca-list-search")],Ot);var zt=class extends d{constructor(){super(...arguments);this.listView=!0;this.edit=null;this.listSearch=null}render(){return o`<slot @slotchange="${t=>this.slotChanged(t)}"></slot>`}updated(t){super.updated(t),t.has("listSearch"),this.listView}slotChanged(t){let n=t.target;if(n==null)return;let i=n.assignedElements();for(let l=0;l<i.length;l++){let m=i[l];m instanceof Ot&&(this.listSearch=m),m instanceof st&&(this.edit=m)}}};r([bt()],zt.prototype,"listView",2),r([bt()],zt.prototype,"edit",2),r([bt()],zt.prototype,"listSearch",2),zt=r([p("nidoca-crud")],zt);var N=class extends d{constructor(){super(...arguments);this.theme="surface";this.header="";this.opened=!1}render(){return o`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?o` <slot></slot>`:o``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=!this.opened,console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};N.styles=c`
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
  `,r([s({type:f,converter:String})],N.prototype,"theme",2),r([s({type:String})],N.prototype,"header",2),r([s({type:Boolean})],N.prototype,"opened",2),N=r([p("nidoca-accordion-item")],N);var _=class extends d{constructor(){super(...arguments);this.theme="plain";this.overline="";this.title="";this.summary="";this.text=""}render(){return o`
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
  `,r([s({type:f,converter:String})],_.prototype,"theme",2),r([s({type:String})],_.prototype,"overline",2),r([s({type:String})],_.prototype,"title",2),r([s({type:String})],_.prototype,"summary",2),r([s({type:String})],_.prototype,"text",2),_=r([p("nidoca-article")],_);var zr=(t=>(t.single="single",t.multi="multi",t))(zr||{}),tt=class extends d{constructor(){super(...arguments);this.theme="plain";this.accordionType="single"}updated(t){super.updated(t),t.forEach((n,i)=>{if(i=="theme"&&this.accordionSlot!=null){let l=this.accordionSlot.assignedElements();for(let m=0;m<l.length;m++){let h=l[m];h instanceof N&&(h.theme=this.theme)}}})}render(){return o`
      ${v.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${t=>this.accordionSwitched(t)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(t){let n=t.detail;switch(this.accordionType){case"single":if(this.accordionSlot!=null){let i=this.accordionSlot.assignedElements();for(let l=0;l<i.length;l++){let m=i[l];m instanceof N&&m!=n&&(m.opened=!1)}}break;case"multi":break}t.stopPropagation()}static example(t=""){return o`<nidoca-accordion slot="${t}" theme="plain">
      <nidoca-accordion-item header="Lorem Ipsum" opened> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 2"> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 3"> ${_.example()} </nidoca-accordion-item>
      <nidoca-accordion-item header="Lorem Ipsum 4"> ${_.example()} </nidoca-accordion-item>
    </nidoca-accordion>`}};tt.styles=c`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  `,r([s({type:f,converter:String})],tt.prototype,"theme",2),r([s({type:zr,converter:String})],tt.prototype,"accordionType",2),r([g("#accordionSlot")],tt.prototype,"accordionSlot",2),tt=r([p("nidoca-accordion")],tt);var D=class extends d{constructor(){super(...arguments);this.theme="primary";this.shadowType="shadow_1";this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return o`
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
    `}};D.styles=c`
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
  `,r([s({type:String})],D.prototype,"theme",2),r([s({type:Object})],D.prototype,"shadowType",2),r([s({type:String})],D.prototype,"icon",2),r([s({type:Boolean})],D.prototype,"clickable",2),r([s({type:Boolean})],D.prototype,"deactivated",2),r([s({type:String})],D.prototype,"title",2),D=r([p("nidoca-icon-extended")],D);var X=class extends d{constructor(){super(...arguments);this.icon="";this.primaryText="";this.isLast=!1;this.first=!1}render(){return o`
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
    `}determineBackgroundColor(t){return t==1?"var(--app-color-text-primary)":t==0?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(t){return t==3?"var(--app-color-success)":t==1?"var(--mdc-theme-on-primary)":t==0?"var(--app-color-text-secondary)":"var(--app-color-text-surface)"}stepClicked(){let t=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}};X.styles=c`
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
  `,r([s({type:String})],X.prototype,"icon",2),r([s({type:String})],X.prototype,"primaryText",2),r([s({type:Number})],X.prototype,"state",2),r([s({type:Boolean})],X.prototype,"isLast",2),X=r([p("nidoca-wizard-step")],X);var Xt=class extends d{render(){return o`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){let t=e.target;if(t==null)return;let n=t.assignedElements(),i=0;for(let l=0;l<n.length;l++){let m=n[l];m instanceof X&&(m.index=l,m.state==0&&(i=l),m.index==n.length-1&&(m.isLast=!0))}this.changeState(i)}stepClicked(e){let t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){let t=this.wizardSlot.assignedElements();for(let n=0;n<t.length;n++){let i=t[n];i instanceof X&&i.index!==void 0&&(i.index<e?i.state=1:i.index==e?i.state=0:i.state=2)}}}};Xt.styles=c``,r([g("#wizardSlot")],Xt.prototype,"wizardSlot",2),Xt=r([p("nidoca-wizard")],Xt);var et=class extends d{constructor(){super(...arguments);this.clickable=!0;this.theme="surface";this.text=""}render(){return o`
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
    `}static example(t=""){return o`<nidoca-chip slot="${t}" clickable text="Mein Chip"></nidoca-chip>`}};et.styles=c`
    .chip {
      display: inline-block;
      padding: var(--space-2);
      border-radius: 1rem;
      line-height: var(--height-medium);
    }
    .clickable {
      cursor: pointer;
    }
  `,r([s({type:Boolean})],et.prototype,"clickable",2),r([s({type:f,converter:String})],et.prototype,"theme",2),r([s({type:String})],et.prototype,"text",2),et=r([p("nidoca-chip")],et);var at=class extends d{constructor(){super(...arguments);this.code="";this.theme="plain"}render(){return o`
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
    `}static example(t=""){return o`<nidoca-code slot="${t}" theme="surface"> my code </nidoca-code>`}};at.styles=c`
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
  `,r([s({type:String})],at.prototype,"code",2),r([s({type:String})],at.prototype,"theme",2),at=r([p("nidoca-code")],at);var Xe=class{static{this.PROGRESS="PROGRESS"}static{this.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}},Mt=class extends d{constructor(){super(...arguments);this.progressType=Xe.PROGRESS}render(){return o` <style>
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

      <progress class="${this.progressType}"></progress>`}};Mt.styles=c``,r([s({type:f,converter:String})],Mt.prototype,"theme",2),r([s({type:Xe,converter:String})],Mt.prototype,"progressType",2),Mt=r([p("nidoca-progress")],Mt);var Ye=(n=>(n.contained="contained",n.outlined="outlined",n.text="text",n))(Ye||{}),Y=class extends d{constructor(){super(...arguments);this.theme="primary";this.buttonType="contained";this.icon="";this.text=""}render(){return o`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-button slot="${t}" text="Start" icon="home"></nidoca-button>`}};Y.styles=c`
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
  `,r([s({type:f,converter:String})],Y.prototype,"theme",2),r([s({type:Ye,converter:String})],Y.prototype,"buttonType",2),r([s({type:String})],Y.prototype,"icon",2),r([s({type:String})],Y.prototype,"text",2),Y=r([p("nidoca-button")],Y);var B=class extends d{};var Pt=class extends d{constructor(){super(...arguments);this.autocomplete=!0}render(){return o`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){let t=new FormData,n={};for(let l of this.getInputElements(this.slotElement)){let m=l.getOutputData();n[m.key]=m.value,t.append(m.key,m.value)}let i={};return i.jsonObject=n,i.formData=t,i}validate(){let t=!0;for(let n of this.getInputElements(this.slotElement))n.validate()||(t=!1);return t||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),t}getInputElements(t){if(t==null)return[];let n=[],i=t.assignedElements({flatten:!0});for(let l=0;l<i.length;l++){let m=i[l];this.recursiveInputElementSearch(m,n)}return n}recursiveInputElementSearch(t,n){if(t instanceof B)n.push(t);else if(t.hasChildNodes()){let i=t.children;for(let l of[].slice.call(i))this.recursiveInputElementSearch(l,n)}}};Pt.styles=c`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,r([s({type:Boolean})],Pt.prototype,"autocomplete",2),r([g("#slotElement")],Pt.prototype,"slotElement",2),Pt=r([p("nidoca-form")],Pt);var Mr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Je=a=>(...e)=>({_$litDirective$:a,values:e}),Yt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:rn}=Hr;var Pr=()=>document.createComment(""),Jt=(a,e,t)=>{let n=a._$AA.parentNode,i=e===void 0?a._$AB:e._$AA;if(t===void 0){let l=n.insertBefore(Pr(),i),m=n.insertBefore(Pr(),i);t=new rn(l,m,a,a.options)}else{let l=t._$AB.nextSibling,m=t._$AM,h=m!==a;if(h){let u;t._$AQ?.(a),t._$AM=a,t._$AP!==void 0&&(u=a._$AU)!==m._$AU&&t._$AP(u)}if(l!==i||h){let u=t._$AA;for(;u!==l;){let w=u.nextSibling;n.insertBefore(u,i),u=w}}}return t},vt=(a,e,t=a)=>(a._$AI(e,t),a),nn={},Dr=(a,e=nn)=>a._$AH=e,Br=a=>a._$AH,Ze=a=>{a._$AR(),a._$AA.remove()};var Wr=(a,e,t)=>{let n=new Map;for(let i=e;i<=t;i++)n.set(a[i],i);return n},wt=Je(class extends Yt{constructor(a){if(super(a),a.type!==Mr.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let i=[],l=[],m=0;for(let h of a)i[m]=n?n(h,m):m,l[m]=t(h,m),m++;return{values:l,keys:i}}render(a,e,t){return this.dt(a,e,t).values}update(a,[e,t,n]){let i=Br(a),{values:l,keys:m}=this.dt(e,t,n);if(!Array.isArray(i))return this.ut=m,l;let h=this.ut??=[],u=[],w,S,y=0,E=i.length-1,b=0,C=l.length-1;for(;y<=E&&b<=C;)if(i[y]===null)y++;else if(i[E]===null)E--;else if(h[y]===m[b])u[b]=vt(i[y],l[b]),y++,b++;else if(h[E]===m[C])u[C]=vt(i[E],l[C]),E--,C--;else if(h[y]===m[C])u[C]=vt(i[y],l[C]),Jt(a,u[C+1],i[y]),y++,C--;else if(h[E]===m[b])u[b]=vt(i[E],l[b]),Jt(a,i[y],i[E]),E--,b++;else if(w===void 0&&(w=Wr(m,b,C),S=Wr(h,y,E)),w.has(h[y]))if(w.has(h[E])){let ft=S.get(m[b]),ar=ft!==void 0?i[ft]:null;if(ar===null){let yr=Jt(a,i[y]);vt(yr,l[b]),u[b]=yr}else u[b]=vt(ar,l[b]),Jt(a,i[y],ar),i[ft]=null;b++}else Ze(i[E]),E--;else Ze(i[y]),y++;for(;b<=C;){let ft=Jt(a,u[C+1]);vt(ft,l[b]),u[b++]=ft}for(;y<=E;){let ft=i[y++];ft!==null&&Ze(ft)}return this.ut=m,Dr(a,u),K}});var on={},Dt=Je(class extends Yt{constructor(){super(...arguments),this.ot=on}render(a,e){return e()}update(a,[e,t]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,i)=>n===this.ot[i]))return K}else if(this.ot===e)return K;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,t)}});var k=class extends B{constructor(){super(...arguments);this.theme="surface";this.trailingIcon="";this.label="";this.errorText="";this.infoText="";this.warningText="";this.value="";this.options=[];this.name="";this.required=!0;this.multiple=!1;this.size=1}render(){return o` <style>
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
            ${Dt([this.value,this.options],()=>o`
                ${wt(this.options,t=>t==null?o` <option></option>`:this.isSelectedOption(t)?o` <option value="${t.key}" selected>${t.value}</option> `:o` <option value="${t.key}">${t.value}</option> `)}
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
          `:o``}`}getOutputData(){let t=this.value;if(this.selectElement!=null&&this.multiple){t=[];for(let n=0,i=this.selectElement.options.length;n<i;n++)this.selectElement.options[n].selected&&t.push(this.options[n].key)}else this.selectElement!=null&&(this.selectElement.value.length==0?t=null:t=this.selectElement.value);return{key:this.name,value:t}}validate(){return this.errorText="",this.selectElement!=null&&!this.selectElement.validity.valid&&this.selectElement.validationMessage!=this.errorText&&(this.errorText=this.selectElement.validationMessage),this.errorText.length==0}isSelectedOption(t){if(this.multiple){let n=!1;for(let i of this.value)if(n=t.key===i,n)return!0}return this.value===t.key}static enumToOptions(t,n=!0){let i=[];return n&&i.push({key:"",value:""}),Object.keys(t).forEach(l=>{i.push({key:l,value:t[l]})}),i}static stringArrayToOptions(t,n=!0){let i=[];return n&&i.push({key:"",value:""}),t.forEach(l=>{i.push({key:l,value:l})}),i}static toComboboxOptions(t=null,n=null){if(t==null)return[];let i=[];return Object.values(t).forEach(l=>{let m=String(Object.keys(t)[Object.values(t).indexOf(l)]);n&&(m=m.concat(n)),i.push({key:l,value:m})}),i}};k.styles=c`
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
  `,r([s({type:f,converter:String})],k.prototype,"theme",2),r([s({type:String})],k.prototype,"trailingIcon",2),r([s({type:String})],k.prototype,"label",2),r([s({type:String})],k.prototype,"errorText",2),r([s({type:String})],k.prototype,"infoText",2),r([s({type:String})],k.prototype,"warningText",2),r([s()],k.prototype,"value",2),r([s({type:Array})],k.prototype,"options",2),r([s({type:String})],k.prototype,"name",2),r([s({type:Boolean})],k.prototype,"required",2),r([s({type:Boolean})],k.prototype,"multiple",2),r([s({type:Number})],k.prototype,"size",2),r([g("#selectElement")],k.prototype,"selectElement",2),k=r([p("nidoca-form-combobox")],k);var L=a=>a??R;var rt=(b=>(b.color="color",b.email="email",b.hidden="hidden",b.number="number",b.password="password",b.tel="tel",b.text="text",b.search="search",b.url="url",b.date="date",b.month="month",b.time="time",b.week="week",b))(rt||{}),$=class extends B{constructor(){super(...arguments);this.type="text";this.label="";this.placeholder="";this.trailingIcon="";this.errorText="";this.infoText="";this.warningText="";this.name="";this.value="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="plain"}render(){return this.type=="hidden"?o`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:o` <style>
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
                size="${L(this.size)}"
                minlength="${L(this.minlength)}"
                maxlength="${L(this.maxlength)}"
                pattern="${L(this.pattern)}"
                min="${L(this.min)}"
                max="${L(this.max)}"
                step="${L(this.step)}"
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
              `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t?.trim()}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),this.errorText==""}};$.styles=c`
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
  `,r([s({type:rt,converter:String})],$.prototype,"type",2),r([s({type:String})],$.prototype,"label",2),r([s({type:String})],$.prototype,"placeholder",2),r([s({type:String})],$.prototype,"trailingIcon",2),r([s({type:String})],$.prototype,"errorText",2),r([s({type:String})],$.prototype,"infoText",2),r([s({type:String})],$.prototype,"warningText",2),r([s({type:String})],$.prototype,"name",2),r([s()],$.prototype,"value",2),r([s({type:Boolean})],$.prototype,"required",2),r([s({type:Boolean})],$.prototype,"disabled",2),r([s({type:Boolean})],$.prototype,"checked",2),r([s({type:Number})],$.prototype,"maxlength",2),r([s({type:Number})],$.prototype,"minlength",2),r([s({type:Number})],$.prototype,"min",2),r([s({type:Number})],$.prototype,"max",2),r([s({type:String})],$.prototype,"step",2),r([s({type:Number})],$.prototype,"size",2),r([s({type:String})],$.prototype,"pattern",2),r([g("#inputElement")],$.prototype,"inputElement",2),r([s({type:f,converter:String})],$.prototype,"theme",2),$=r([p("nidoca-form-text")],$);var Qe=class extends ${constructor(){super(),this.type="date"}};Qe=r([p("nidoca-form-date")],Qe);var I=class extends B{constructor(){super(...arguments);this.theme="surface";this.infoText="";this.warningText="";this.errorText="";this.name="";this.value="";this.label="";this.required=!1;this.placeholder="";this.disabled=!1;this.rows=5}render(){return o` <style>
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
          `:o``}`}getOutputData(){let t=this.inputElement?.value;return{key:this.name,value:t}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};I.styles=c`
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
  `,r([s({type:f,converter:String})],I.prototype,"theme",2),r([s({type:String})],I.prototype,"infoText",2),r([s({type:String})],I.prototype,"warningText",2),r([s({type:String})],I.prototype,"errorText",2),r([s({type:String})],I.prototype,"name",2),r([s()],I.prototype,"value",2),r([s({type:String})],I.prototype,"label",2),r([s({type:Boolean})],I.prototype,"required",2),r([s({type:String})],I.prototype,"placeholder",2),r([s({type:Boolean})],I.prototype,"disabled",2),r([s({type:Number})],I.prototype,"rows",2),r([g("#inputElement")],I.prototype,"inputElement",2),I=r([p("nidoca-form-textarea")],I);var Bt=class extends B{constructor(){super(...arguments);this.theme="primary"}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return o`
      <nidoca-box theme="${L(this.theme)}">
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
    `}upload(){this.inputElement?.click()}};Bt.styles=c`
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
  `,r([s({type:f,converter:String})],Bt.prototype,"theme",2),r([g("#inputElement")],Bt.prototype,"inputElement",2),Bt=r([p("nidoca-form-upload")],Bt);var M=class extends B{constructor(){super();this.name="";this.label="";this.infoText="";this.errorText="";this.warningText="";this.required=!1;this.disabled=!1;this.checked=!1;this.theme="primary";this.theme=v.prototype.getParentTheme(this)||"plain"}render(){return o`
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
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",this.inputElement!=null&&!this.inputElement.validity.valid&&this.inputElement.validationMessage!=this.errorText&&(this.errorText=this.inputElement.validationMessage),this.errorText==""}};M.styles=c`
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
  `,r([s({type:String})],M.prototype,"name",2),r([s({type:String})],M.prototype,"label",2),r([s({type:String})],M.prototype,"infoText",2),r([s({type:String})],M.prototype,"errorText",2),r([s({type:String})],M.prototype,"warningText",2),r([s({type:Boolean})],M.prototype,"required",2),r([s({type:Boolean})],M.prototype,"disabled",2),r([s({type:Boolean})],M.prototype,"checked",2),r([s({type:String})],M.prototype,"theme",2),r([g("#inputElement")],M.prototype,"inputElement",2),M=r([p("nidoca-form-switch")],M);var lt=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Newsletter";this.emailLabel="Deine Emailadresse";this.buttonLabel="Registrieren"}render(){return o`
      <nidoca-box theme="${L(this.theme)}">
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};lt.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],lt.prototype,"theme",2),r([s({type:String,converter:String})],lt.prototype,"label",2),r([s({type:String,converter:String})],lt.prototype,"emailLabel",2),r([s({type:String,converter:String})],lt.prototype,"buttonLabel",2),r([g("#form")],lt.prototype,"formComponent",2),lt=r([p("nidoca-form-newsletter")],lt);var mt=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Passwort zur\xFCcksetzen";this.emailLabel="Deine Emailadresse";this.buttonLabel="Zur\xFCcksetzen"}render(){return o`
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};mt.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],mt.prototype,"theme",2),r([s({type:String,converter:String})],mt.prototype,"label",2),r([s({type:String,converter:String})],mt.prototype,"emailLabel",2),r([s({type:String,converter:String})],mt.prototype,"buttonLabel",2),r([g("#form")],mt.prototype,"formComponent",2),mt=r([p("nidoca-form-reset-password")],mt);var H=class extends d{constructor(){super(...arguments);this.theme="surface";this.label="Passwort \xE4ndern";this.oldPasswordLabel="Altes Passwort";this.newPasswordLabel="Neues Passwort";this.repeatNewPasswordLabel="Wiederholen";this.buttonLabel="\xC4ndern";this.showErrorMessageSamePassword=!1;this.errorMessageSamePasswordLabel="Altes und neues Passwort d\xFCrfen nicht \xFCbereinstimmen.";this.showErrorMessagePasswordDiff=!1;this.errorMessagePasswordDiffLabel="Die Passw\xF6rter stimmen nicht \xFCberein"}render(){return o`
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
    `}changePassword(){this.formComponent?.validate()&&(this.showErrorMessagePasswordDiff=!1,this.newPasswordInputField?.getOutputData().value!=this.repeatNewPasswordInputField?.getOutputData().value&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,this.oldPasswordInputField?.getOutputData().value==this.newPasswordInputField?.getOutputData().value&&(this.showErrorMessageSamePassword=!0),!this.showErrorMessagePasswordDiff&&!this.showErrorMessageSamePassword?this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})):this.requestUpdate())}};H.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],H.prototype,"theme",2),r([s({type:String,converter:String})],H.prototype,"label",2),r([s({type:String,converter:String})],H.prototype,"oldPasswordLabel",2),r([s({type:String,converter:String})],H.prototype,"newPasswordLabel",2),r([s({type:String,converter:String})],H.prototype,"repeatNewPasswordLabel",2),r([s({type:String,converter:String})],H.prototype,"buttonLabel",2),r([g("#form")],H.prototype,"formComponent",2),r([g("#oldPassword")],H.prototype,"oldPasswordInputField",2),r([g("#newPassword")],H.prototype,"newPasswordInputField",2),r([g("#repeatNewPassword")],H.prototype,"repeatNewPasswordInputField",2),r([s()],H.prototype,"errorMessageSamePasswordLabel",2),r([s()],H.prototype,"errorMessagePasswordDiffLabel",2),H=r([p("nidoca-form-change-password")],H);var nt=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Registrieren";this.emailLabel="Email";this.passwordLabel="Passwort";this.buttonLabel="Registrieren"}render(){return o`
      <nidoca-box theme="${L(this.theme)}">
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
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};nt.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],nt.prototype,"theme",2),r([s({type:String,converter:String})],nt.prototype,"label",2),r([s({type:String,converter:String})],nt.prototype,"emailLabel",2),r([s({type:String,converter:String})],nt.prototype,"passwordLabel",2),r([s({type:String,converter:String})],nt.prototype,"buttonLabel",2),r([g("#form")],nt.prototype,"formComponent",2),nt=r([p("nidoca-form-register")],nt);var Zt=class extends d{constructor(){super(...arguments);this.code=""}render(){return o``}};Zt.styles=c``,r([s({type:String})],Zt.prototype,"code",2),Zt=r([p("nidoca-upload")],Zt);var Wt=class extends d{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return o`
      <style>
        .hr {
          border-color: var(--app-color-${this.theme}-border);
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-text-body>${this.text}</nidoca-text-body>

      <div class="hr"></div>
    `}};Wt.styles=c`
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
  `,r([s({type:f,converter:String})],Wt.prototype,"theme",2),r([s({type:String,converter:String})],Wt.prototype,"text",2),Wt=r([p("nidoca-hr")],Wt);var pt=class extends d{constructor(){super(...arguments);this.text="";this.icon=""}render(){return o`
      <div class="container">
        ${this.icon?o` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:o``}
        ${this.text?o` <nidoca-text-button>${this.text}</nidoca-text-button>`:o``}
        <slot></slot>
      </div>
    `}static example(t=""){return o`<nidoca-menu-area slot="${t}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`}};pt.styles=c`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,r([s({type:String})],pt.prototype,"text",2),r([s({type:String})],pt.prototype,"icon",2),pt=r([p("nidoca-menu-area")],pt);var P=class extends d{constructor(){super(...arguments);this.text="";this.icon="";this.selected=!1;this.theme="surface"}render(){return o`
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
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}static example(t=""){return o`<nidoca-menu-item slot="${t}" text="Start" icon="home"></nidoca-menu-item>`}};P.styles=c`
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
  `,r([s({type:String})],P.prototype,"text",2),r([s({type:String})],P.prototype,"icon",2),r([s({type:Boolean})],P.prototype,"selected",2),r([s({type:String})],P.prototype,"theme",2),P=r([p("nidoca-menu-item")],P);var ct=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return o` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}updated(t){super.updated(t),t.forEach((n,i)=>{if(i=="theme"&&this.slotElement!=null){let l=this.slotElement.assignedElements();for(let m=0;m<l.length;m++){let h=l[m];h instanceof P&&(h.theme=this.theme)}}})}firstUpdated(){this.addEventListener("click",t=>{if(this.slotElement!=null){let n=this.slotElement.assignedElements();for(let i=0;i<n.length;i++){let l=n[i];if(l instanceof P){let m=l.getBoundingClientRect();m.left<t.x&&m.right>t.x&&(m.top<t.y&&m.bottom>t.y?l.selected=!0:l.selected=!1)}}}})}static example(t=""){return o`
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
    `}};ct.styles=c`
    :host,
    slot {
      display: block;
    }
  `,r([s({type:String})],ct.prototype,"theme",2),r([g("#slotElement")],ct.prototype,"slotElement",2),ct=r([p("nidoca-menu")],ct);var ot=class extends d{constructor(){super(...arguments);this.height="auto";this.width="auto";this.left="auto";this.top="auto";this.right="auto";this.bottom="auto"}render(){return o`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(t,n,i,l,m,h){return"height:".concat(t).concat(";").concat("width:").concat(n).concat(";").concat("left:").concat(i).concat(";").concat("right:").concat(l).concat(";").concat("top:").concat(m).concat(";").concat("bottom:").concat(h).concat(";")}};ot.styles=c`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,r([s({type:String})],ot.prototype,"height",2),r([s({type:String})],ot.prototype,"width",2),r([s({type:String})],ot.prototype,"left",2),r([s({type:String})],ot.prototype,"top",2),r([s({type:String})],ot.prototype,"right",2),r([s({type:String})],ot.prototype,"bottom",2),ot=r([p("nidoca-layout-floating")],ot);var Qt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return o`<slot></slot>`}};Qt.styles=c`
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
  `,r([s({type:String})],Qt.prototype,"theme",2),Qt=r([p("nidoca-container")],Qt);var qt=class extends d{constructor(){super();this.hideSidebox=!0;this.theme=v.prototype.getParentTheme(this)||"plain"}render(){return o` <style>
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
      ${this.hideSidebox?o``:o` <slot class="sidebox" name="sidebox"></slot>`}`}};qt.styles=c`
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
  `,r([s({type:f,converter:String})],qt.prototype,"theme",2),r([s({type:Boolean,converter:String})],qt.prototype,"hideSidebox",2),qt=r([p("nidoca-split-screen")],qt);var O=class extends d{constructor(){super(...arguments);this.icon="";this.clickable=!0;this.deactivated=!1;this.title=""}render(){return o`
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
    `}};O.styles=c`
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
  `,r([s({type:String})],O.prototype,"icon",2),r([s({type:Boolean})],O.prototype,"clickable",2),r([s({type:Boolean})],O.prototype,"deactivated",2),r([s({type:String})],O.prototype,"title",2),O=r([p("nidoca-icon")],O);var Ft=class extends d{render(){return o`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(this.rippleContainerElement!=null){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);let t=this.rippleContainerElement.getBoundingClientRect(),n=Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2))*2;this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${n}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};Ft.styles=c`
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
  `,r([g("#rippleContainer")],Ft.prototype,"rippleContainerElement",2),Ft=r([p("nidoca-ripple")],Ft);var z=class extends d{constructor(){super(...arguments);this.src="";this.width="100%";this.height="auto";this.zoom=!1}render(){return this.src?o`<img class="${this.zoom?"zoom":""}" width="${this.width}" height="${this.height}" src="${this.src}" />`:o``}static exampleImage(){return"data:image/jpeg;base64,IMG"}static example(t=""){return o`<nidoca-img width="64px" width="64px" slot="${t}" src="${this.exampleImage()} "></nidoca-img>`}};z.styles=c`
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
  `,r([s({type:String})],z.prototype,"src",2),r([s({type:String})],z.prototype,"width",2),r([s({type:String})],z.prototype,"height",2),r([s({type:Boolean})],z.prototype,"zoom",2),z=r([p("nidoca-img")],z);var J=class extends z{static example(e=""){return o`<nidoca-img-round width="64px" width="64px" slot="${e}" src="face.jpg"></nidoca-img-round>`}};J.styles=c`
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
  `,J=r([p("nidoca-img-round")],J);var jt=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected?this.selected:o``}</div>

      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let n=t.target;if(n==null)return;let i=n.assignedElements();for(let l=0;l<i.length;l++){let m=i[l];if(m instanceof z){this.selected==null&&l==0&&(this.selected=m.cloneNode(!0)),m.addEventListener("click",u=>{u.target&&(this.selected=u.target.cloneNode(!0))}),m.width="148px";let h=m.classList;h.contains("img")||h.add("img")}}}};jt.styles=c`
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
  `,r([s({type:f,converter:String})],jt.prototype,"theme",2),r([bt()],jt.prototype,"selected",2),jt=r([p("nidoca-img-slider")],jt);var Nt=class extends d{constructor(){super(...arguments);this.src=""}render(){return o`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};Nt.styles=c``,r([s({type:String})],Nt.prototype,"src",2),Nt=r([p("nidoca-movie")],Nt);var q=class extends d{constructor(){super(...arguments);this.label="";this.placeholder="";this.name="";this.min=1;this.max=10;this.errorText="";this.numberOne=1;this.numberTwo=1}render(){return o`
      <nidoca-form-text
        theme="${L(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${"number"}"
        value=""
      ></nidoca-form-text>
    `}updated(t){(t.has("min")||t.has("max"))&&this.generateNewNumber(),super.updated(t)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(t,n){return Math.random()*(n-t)+t}isValid(){return this.inputfield!=null?this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value):!1}validate(){let t=this.isValid();return t&&this.inputfield!=null?this.inputfield.errorText="":this.inputfield!=null&&(this.inputfield.errorText=this.errorText),t}};q.styles=c`
    :host {
      display: block;
      width: 100%;
    }
  `,r([s({type:f,converter:String})],q.prototype,"theme",2),r([s({type:String})],q.prototype,"label",2),r([s({type:String})],q.prototype,"placeholder",2),r([s({type:String})],q.prototype,"name",2),r([s({type:Number})],q.prototype,"min",2),r([s({type:Number})],q.prototype,"max",2),r([s({type:String})],q.prototype,"errorText",2),r([g("#inputfield")],q.prototype,"inputfield",2),q=r([p("nidoca-form-captcha")],q);var $t=class extends d{constructor(){super(...arguments);this.text="";this.href="";this.targetType="_self"}render(){return o`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};$t.styles=c`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,r([s({type:String})],$t.prototype,"text",2),r([s({type:String})],$t.prototype,"href",2),r([s({type:String})],$t.prototype,"targetType",2),$t=r([p("nidoca-link")],$t);var T=class extends d{constructor(){super(...arguments);this.theme="surface";this.primaryText="";this.secondaryText="";this.tertiaryText="";this.infoText="";this.selected=!1}render(){return o`
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
      ${J.example("left")}
      <nidoca-icon slot="right" icon="menu"></nidoca-icon>
    </nidoca-list-item>`}};T.styles=c`
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
  `,r([s({type:f,converter:String})],T.prototype,"theme",2),r([s({type:String})],T.prototype,"primaryText",2),r([s({type:String})],T.prototype,"secondaryText",2),r([s({type:String})],T.prototype,"tertiaryText",2),r([s({type:String})],T.prototype,"infoText",2),r([s({type:Boolean})],T.prototype,"selected",2),T=r([p("nidoca-list-item")],T);var W=class extends d{constructor(){super(...arguments);this.theme="surface";this.text=""}render(){return o`
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
    `}static example(){return o`<nidoca-list-section theme="primary">Section A</nidoca-list-section>`}};W.styles=c`
  :host {
     display:block;
     padding-left: var(--space-2);  
     width:100%;
     box-sizing:border-box;
  `,r([s({type:f,converter:String})],W.prototype,"theme",2),r([s({type:String})],W.prototype,"text",2),W=r([p("nidoca-list-section")],W);var Z=class extends d{constructor(){super(...arguments);this.multiselect=!1}updated(t){super.updated(t),t.forEach((n,i)=>{i=="theme"&&this.getItems().forEach(l=>{l.theme=this.theme})})}render(){return o`
      <slot
        @nidoca-event-list-item-clicked="${t=>{if(!this.multiselect){this.unselectAll();let n=t.target;n.selected=!0}}}"
        id="slotElement"
      ></slot>
    `}getItems(){let t=[];if(this.slotElement!=null){let n=this.slotElement.assignedElements();for(let i=0;i<n.length;i++){let l=n[i];l instanceof T&&t.push(l)}}return t}getSelectedItems(){let t=[];if(this.slotElement!=null){let n=this.slotElement.assignedElements();for(let i=0;i<n.length;i++){let l=n[i];l instanceof T&&l.selected&&t.push(l)}}return t}getSelectedIndexes(){let t=[];if(this.slotElement!=null){let n=this.slotElement.assignedElements(),i=0;for(let l=0;l<n.length;l++){let m=n[l];m instanceof T&&(m.selected&&t.push(i),i++)}}return t}selectAll(){this.getItems().forEach(t=>{t.selected=!0})}unselectAll(){this.getItems().forEach(t=>{t.selected=!1})}static example(){return o`<nidoca-list theme="primary">
      ${W.example()} ${T.example()} ${T.example()} ${T.example()}
    </nidoca-list>`}};Z.styles=c`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,r([s({type:Boolean})],Z.prototype,"multiselect",2),r([g("#slotElement")],Z.prototype,"slotElement",2),Z=r([p("nidoca-list")],Z);var dt=class extends d{constructor(){super(...arguments);this.theme="plain";this.prominent=!1}render(){return o`
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
    `}};dt.styles=c`
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
  `,r([s({type:String,converter:String})],dt.prototype,"theme",2),r([s({type:Boolean})],dt.prototype,"prominent",2),dt=r([p("nidoca-top-app-bar")],dt);var Et=class extends d{constructor(){super(...arguments);this.headers=["column 1","column 2"];this.rows=[["row 1",new O],["row 2",new O]];this.theme="plain"}render(){return o`
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
            ${Dt([this.headers],()=>o` ${wt(this.headers,t=>o` <th colspan="1" rowspan="1">${t}</th> `)} `)}
          </thead>
          <tbody>
            ${Dt([this.rows],()=>o`
                  ${wt(this.rows,t=>o`
                        <tr>
                          ${wt(t,n=>o` <td colspan="1" rowspan="1">${n}</td> `)}
                        </tr>
                      `)}
                `)}
          </tbody>
        </table>
      </div>
    `}};Et.styles=c`
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
  `,r([s({type:Array})],Et.prototype,"headers",2),r([s({type:Array})],Et.prototype,"rows",2),r([s({type:f,converter:String})],Et.prototype,"theme",2),Et=r([p("nidoca-table")],Et);var kt=class extends d{constructor(){super(...arguments);this.selected=!1}render(){return this.selected?o` <slot></slot>`:o``}};kt.styles=c`
    :host,
    slot {
      display: block;
    }
  `,r([s({type:Boolean})],kt.prototype,"selected",2),kt=r([p("nidoca-tab-content")],kt);var it=class extends d{constructor(){super(...arguments);this.selected=!1;this.text="";this.theme="surface"}render(){return o`
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
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};it.styles=c`
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
  `,r([s({type:Boolean})],it.prototype,"selected",2),r([s({type:String})],it.prototype,"text",2),r([s({type:String})],it.prototype,"theme",2),it=r([p("nidoca-tab")],it);var Q=class extends d{constructor(){super(...arguments);this.theme="surface";this.tabIndex=0}render(){return o`
      <div class="container" @nidoca-event-tab-clicked="${t=>this.tabClicked(t)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.tabIndexChanged()}update(t){super.update(t),t.get("tabIndex")!=null&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(this.tabSlot!=null){let t=this.tabSlot.assignedElements(),i=100/t.length,l=t[this.tabIndex];for(let m=0;m<t.length;m++){let h=t[m];h instanceof it&&(h.theme=this.theme,h.style.width=String(i).concat("%"),h==l?(h.selected=!0,h.classList.add("SELECTED")):(h.selected=!1,h.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let t=0;if(this.tabContentSlot!=null){let n=this.tabContentSlot.assignedElements();for(let i=0;i<n.length;i++){let l=n[i];l instanceof kt&&(this.tabIndex==t?l.selected=!0:l.selected=!1,t++)}}}tabClicked(t){let n=t.detail;this.changeTabIndex(n)}changeTabIndex(t){if(!t.selected&&this.tabSlot!=null){let n=this.tabSlot.assignedElements();for(let i=0;i<n.length;i++){let l=n[i];if(l instanceof it&&l==t){this.tabIndex=i;break}}}}static example(t=""){return o`
      <nidoca-tabs theme="surface" slot="${t}" tabIndex="0">
        <nidoca-tab slot="tab"><nidoca-text>Tab 1</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 2</nidoca-text></nidoca-tab>
        <nidoca-tab slot="tab"><nidoca-text>Tab 3</nidoca-text></nidoca-tab>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent"> ${_.example()} </nidoca-tab-content>
      </nidoca-tabs>
    `}};Q.styles=c`
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
  `,r([g("#tabSlot")],Q.prototype,"tabSlot",2),r([g("#tabContentSlot")],Q.prototype,"tabContentSlot",2),r([s({type:String})],Q.prototype,"theme",2),r([s({type:Number})],Q.prototype,"tabIndex",2),Q=r([p("nidoca-tabs")],Q);var Tt=class extends d{constructor(){super();this.hideLeft=!0;this.prominent=!1;document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",t=>{if(!this.hideLeft&&this.leftElement){console.log("close");let n=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=t.x-n.width}})}render(){return o`
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
    `}};Tt.styles=c`
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
  `,r([s({type:Boolean})],Tt.prototype,"hideLeft",2),r([s({type:Boolean})],Tt.prototype,"prominent",2),r([g("#left")],Tt.prototype,"leftElement",2),Tt=r([p("nidoca-template")],Tt);var St=class extends d{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(t=>{this.videoElement&&(this.videoElement.srcObject=t)})}render(){return o`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){let e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);let t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};St.styles=c``,r([g("#video")],St.prototype,"videoElement",2),r([g("#canvas")],St.prototype,"canvasElement",2),r([g("#click-photo")],St.prototype,"buttonElement",2),St=r([p("nidoca-video")],St);var Ut=class extends d{constructor(){super(...arguments);this.src="";this.canvasElements=[];this.storeCanvasElements=[]}render(){return o`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map(t=>o`${t}`)}
    `}updated(t){super.updated(t),t.forEach((n,i)=>{if(console.debug(`${this.tagName} : property ${String(i)} changed. oldValue: ${n}`),i=="src"){this.convert();let l=[["App-Symbol",512,512],["Vorstellungsgrafik",1024,500],["screenshoot_dummy",1920,1080]]}})}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach(t=>{let n=document.createElement("canvas");n.width=t[0],n.height=t[1];let i=n.getContext("2d");i&&this.img&&(this.img.crossOrigin="anonymous",i.drawImage(this.img,0,0,t[0],t[1]),n.toBlob(l=>{},"image/webp")),this.canvasElements.push(n)}),this.requestUpdate()})}};Ut.styles=c``,r([s({type:String})],Ut.prototype,"src",2),r([g("#img")],Ut.prototype,"img",2),Ut=r([p("nidoca-svg-2-webp")],Ut);var x=class extends d{constructor(){super(...arguments);this.theme="plain";this.text=""}render(){return o`<style>
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
    `}};x.styles=c`
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
  `,r([s({type:f,converter:String})],x.prototype,"theme",2),r([s({type:String})],x.prototype,"text",2),x=r([p("nidoca-text")],x);var ue=class extends x{render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ue.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 450;
      font-size: 105%;
    }
  `,ue=r([p("nidoca-text-body")],ue);var fe=class extends x{render(){return o`${super.render()}`}};fe.styles=c`
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
  `,fe=r([p("nidoca-text-button")],fe);var ge=class extends x{};ge.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1em;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,ge=r([p("nidoca-text-overline")],ge);var ye=class extends x{render(){return o` <slot style="color: var(--app-color-text-${this.theme});">${this.text}</slot>`}};ye.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.25em;
      font-weight: 400;
      font-size: 100%;
    }
  `,ye=r([p("nidoca-text-subtitle")],ye);var j=class extends x{render(){return o`<style>
        slot {
          color: var(--app-color-subtext-${this.theme});
        }
      </style>
      <slot>${this.text}</slot>`}};j.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 350;
      line-height: 1.25em;
      font-size: 95%;
    }
  `,j=r([p("nidoca-text-caption")],j);var Fe=class extends j{render(){return o`<style>
        slot {
          color: var(--app-color-error-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Fe=r([p("nidoca-text-error")],Fe);var Ne=class extends j{render(){return o`<style>
        slot {
          color: var(--app-color-success-background);
        }
      </style>
      <slot>${this.text}</slot>`}};Ne=r([p("nidoca-text-success")],Ne);var tr=class extends j{render(){return o`<style>
        slot {
          color: var(--app-color-warning-background);
        }
      </style>
      <slot>${this.text}</slot>`}};tr=r([p("nidoca-text-warning")],tr);var er=class extends j{render(){return o`<style>
        slot {
          color: var(--app-color-info-background);
        }
      </style>
      <slot>${this.text}</slot>`}};er=r([p("nidoca-text-info")],er);var be=class extends x{};be.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1.1em;
    }
  `,be=r([p("nidoca-text-h1")],be);var xe=class extends x{};xe.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.2em;
    }
  `,xe=r([p("nidoca-text-h2")],xe);var ve=class extends x{};ve.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,ve=r([p("nidoca-text-h3")],ve);var we=class extends x{};we.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 130%;
      line-height: 1.5em;
    }
  `,we=r([p("nidoca-text-h4")],we);var $e=class extends x{};$e.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 120%;
      line-height: 1.5em;
    }
  `,$e=r([p("nidoca-text-h5")],$e);var Ee=class extends x{};Ee.styles=c`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,Ee=r([p("nidoca-text-h6")],Ee);var ht=class extends A{constructor(){super(...arguments);this.message="Dies ist eine Testnachricht"}showToast(t=3e3){this.toastElement.classList.add("show"),setTimeout(()=>{this.hideToast()},t)}hideToast(){this.toastElement.classList.remove("show")}render(){return o`
      <div id="toast" class="toast">
        ${this.message}
      </div>
    `}};ht.styles=c`
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
  `,r([s({type:String})],ht.prototype,"message",2),r([g("#toast")],ht.prototype,"toastElement",2),ht=r([p("nidoca-toast")],ht);var U=class extends d{constructor(){super(...arguments);this.value="";this.placeholder="";this.disabled=!1;this.theme="plain"}render(){return o`
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
    `}clearValue(){this.value=""}async valueChanged(){let t="nidoca-search-bar-event-value-changed",n=new CustomEvent(t,{detail:this.inputElement?.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",n.type,JSON.stringify(n.detail)),this.dispatchEvent(n)}static example(t=""){return o`<nidoca-search-bar slot="${t}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`}};U.styles=c`
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
  `,r([s({type:String})],U.prototype,"value",2),r([s({type:String})],U.prototype,"placeholder",2),r([s({type:Boolean})],U.prototype,"disabled",2),r([g("#inputElement")],U.prototype,"inputElement",2),r([s({type:f,converter:String})],U.prototype,"theme",2),U=r([p("nidoca-search-bar")],U);var ke=class{static{this.CENTER="CENTER"}static{this.LEFT="LEFT"}static{this.RIGHT="RIGHT"}static{this.TOP="TOP"}static{this.BOTTOM="BOTTOM"}static{this.SLIDE_CENTER="SLIDE_CENTER"}static{this.SLIDE_LEFT="SLIDE_LEFT"}static{this.SLIDE_RIGHT="SLIDE_RIGHT"}static{this.SLIDE_TOP="SLIDE_TOP"}static{this.SLIDE_BOTTOM="SLIDE_BOTTOM"}},Vt=class extends d{constructor(){super(...arguments);this.transitionType=ke.CENTER;this.duration=.5}render(){return o` <div class="${L(this.transitionType)}"><slot></slot></div> `}};Vt.styles=c`
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
  `,r([s({type:String})],Vt.prototype,"transitionType",2),r([s({type:Number})],Vt.prototype,"duration",2),Vt=r([p("nidoca-transition")],Vt);var te=class extends d{constructor(){super(...arguments);this.show=!1}render(){return this.show?o`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${ke.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:o``}};te.styles=c`
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
  `,r([s({type:Boolean})],te.prototype,"show",2),te=r([p("nidoca-dialog")],te);var ut=class extends d{constructor(){super(...arguments);this.show=!1;this.title="Ja oder Nein ?";this.description="Entscheide dich";this.labelButtonYes="Ja";this.labelButtonNo="Nein"}render(){return o`<nidoca-dialog .show="${this.show}">
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
    </nidoca-dialog>`}};ut.styles=c``,r([s({type:Boolean})],ut.prototype,"show",2),r([s({type:String})],ut.prototype,"title",2),r([s({type:String})],ut.prototype,"description",2),r([s({type:String})],ut.prototype,"labelButtonYes",2),r([s({type:String})],ut.prototype,"labelButtonNo",2),ut=r([p("nidoca-dialog-decision")],ut);var xt=class extends d{constructor(){super(...arguments);this.icon=""}render(){return o`
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
    `}};xt.styles=c`
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
  `,r([s({type:String})],xt.prototype,"icon",2),xt=r([p("nidoca-infobox")],xt);var F=class extends d{constructor(){super(...arguments);this.theme="surface";this.src="";this.title="";this.subtitle=""}render(){return o`
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
    >`}};F.styles=c`
    :host {
      display: block;
    }
  `,r([s({type:f,converter:String})],F.prototype,"theme",2),r([s({type:String})],F.prototype,"src",2),r([s({type:String})],F.prototype,"title",2),r([s({type:String})],F.prototype,"subtitle",2),F=r([p("nidoca-avatar")],F);var ee=class extends d{constructor(){super(...arguments);this.theme="surface"}render(){return o`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};ee.styles=c`
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
  `,r([s({type:f,converter:String})],ee.prototype,"theme",2),ee=r([p("nidoca-card")],ee);var Te=class extends d{render(){return o`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){let t=e.target;if(t==null)return;let n=t.assignedElements();for(let i=0;i<n.length;i++){let m=n[i].classList;m.contains("flexItem")||m.add("flexItem"),m.contains("flexItemDevice")||m.add("flexItemDevice")}}};Te.styles=c`
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
  `,Te=r([p("nidoca-gallery")],Te);var Se=class extends d{render(){return o`<slot></slot>`}print(){let e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};Se.styles=c`
    :host {
      display: none;
    }
  `,Se=r([p("nidoca-print")],Se);var _e=class extends d{render(){return o`
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){let n=e.target.assignedElements(),i=n.length;for(let l=0;l<i;l++){let h=n[l].classList,u="item_count_"+i;h.contains(u)||h.add(u)}}};_e.styles=c`
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
  `,_e=r([p("nidoca-section")],_e);var re=class extends d{constructor(){super(...arguments);this.cards=[]}render(){return o`
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
    `}clicked(t){this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:{index:-1,card:t},bubbles:!0,composed:!0}))}};re.styles=c`
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
  `,r([s({type:Array})],re.prototype,"cards",2),re=r([p("nidoca-dashboard")],re);var ne=class extends d{constructor(){super(...arguments);this.theme="plain"}render(){return o`
      ${v.getStyle(this.theme)}
      <slot></slot>
    `}};ne.styles=c`
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
  `,r([s({type:f,converter:String})],ne.prototype,"theme",2),ne=r([p("nidoca-box")],ne);var V=class extends d{constructor(){super(...arguments);this.theme="primary";this.label="Deine Nachricht";this.nameLabel="Dein Name";this.emailLabel="Deine Email";this.titleLabel="Betreff";this.messageLabel="Deine Nachricht";this.buttonLabel="Senden"}render(){return o`
      <nidoca-box theme="${L(this.theme)}">
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
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};V.styles=c`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,r([s({type:f,converter:String})],V.prototype,"theme",2),r([s({type:String,converter:String})],V.prototype,"label",2),r([s({type:String,converter:String})],V.prototype,"nameLabel",2),r([s({type:String,converter:String})],V.prototype,"emailLabel",2),r([s({type:String,converter:String})],V.prototype,"titleLabel",2),r([s({type:String,converter:String})],V.prototype,"messageLabel",2),r([s({type:String,converter:String})],V.prototype,"buttonLabel",2),r([g("#authenitcate-form")],V.prototype,"formComponent",2),V=r([p("nidoca-form-contact")],V);var rr=class{getClassName(){return this.getTypeName()?this.getTypeName():this.getConverterTypeName()}constructor(e,t){this.propertyName=e,this.propertyValue=t}getRenderType(){return this.isConverterTypeArray()||this.isArray()?"Array":this.getTypeName()==null?"Class":this.getTypeName()}getEnumValues(){let e=[];return Object.values(this.getType()).forEach(t=>{e.push({key:t,value:String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(t)])})}),e}getEnumValue(e){return Object.values(this.getType())[Object.keys(this.getType()).indexOf(e)]}getEnumKey(e){let t=this.getEnumValues();for(let n=0;n<t.length;n++){let i=t[n];if(i.key==e)return i.value}}isConverterTypeArray(){return this.getConverterTypeName()=="Array"}isArray(){return this.getTypeName()=="Array"}isPrimitive(){return this.getTypeName()=="String"||this.getTypeName()=="Boolean"||this.getTypeName()=="Number"}getType(){return this.propertyValue?.type}getTypeName(){return this.getType().name}getConverterType(){return this.propertyValue.converter}getConverterTypeName(){return this.getConverterType()?.name}getTypeOf(){return typeof this.propertyValue}toString(){return JSON.stringify({name:this.propertyValue.type.name,prototype:this.propertyValue},null,2)}};var nr=class{constructor(e){this.instance=e}getClassName(){return this.instance.constructor.name}getTagName(){return this.instance.localName}getHTMLTag(){return"<".concat(this.getTagName()).concat(">").concat("</").concat(this.getTagName()).concat(">")}getClazz(){return this.instance.constructor}getSlotNames(){return this.getSlots().map(e=>e.name?e.name:"default")}getSlots(){return this.getElementsByTagName("SLOT",this.instance.shadowRoot)}hasSlots(){return this.getSlots().length>0}getElementsByTagName(e,t){let n=[];if(t&&(t.tagName==e&&n.push(t),t.children.length>0)){let l=t?.children;for(let m=0;m<l.length;m++)n=n.concat(this.getElementsByTagName(e,l.item(m)))}return n}getElementProperties(){let e=this.instance.constructor.elementProperties;e||(e=new Map);let t=[];for(let n of Array.from(e.keys()))t.push(new rr(n,e.get(n)));return t}getOwnPropertieNames(){let e=this.instance.constructor;return Object.getOwnPropertyNames(e)}};var or=class{constructor(e){this.propertyWrapper=e}getInputElement(e){if(e==null)return o``;let t=e.webcomponentWrapper;if(t==null)return o``;switch(this.propertyWrapper.getRenderType()){case"String":return o`
                    <nidoca-form-text .textType="${"text"}"
                                      label="${this.propertyWrapper.propertyName}"
                                      value="${t.instance[this.propertyWrapper.propertyName]}"
                                      @input="${i=>{t.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,e.parent.requestUpdate()}}"
                    /></nidoca-form-text>`;case"Number":return o` <nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${"number"}"
          value="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{t.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,e.parent.requestUpdate()}}"
        ></nidoca-form-text>`;case"Boolean":return o` <nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${t.instance[this.propertyWrapper.propertyName]}"
          @input="${i=>{t.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,e.parent.requestUpdate()}}"
        ></nidoca-form-switch>`;case"Class":return o` <nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${k.enumToOptions(this.propertyWrapper.getType(),!1)}"
          value="${Object.keys(this.propertyWrapper.getType()).filter(i=>this.propertyWrapper.getType()[i]==t.instance[this.propertyWrapper.propertyName])[0]}"
          @input="${i=>{t.instance[this.propertyWrapper.propertyName]=this.propertyWrapper.getEnumValue(i.target.getOutputData().value),e.parent.requestUpdate()}}"
        >
        </nidoca-form-combobox>`;case"Array":return o`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${k.toComboboxOptions(this.propertyWrapper.getType(),this.propertyWrapper.getTypeName())}"
            .multiple="${!0}"
            size="5"
            .value="${t.instance[this.propertyWrapper.propertyName]}"
            @input="${i=>{t.instance[this.propertyWrapper.propertyName]=i.target.getOutputData().value,t.instance.requestUpdate()}}"
          >
          </nidoca-form-combobox>
        `;default:return o``}}getAsHtml(e){switch(this.propertyWrapper.getRenderType()){case"Boolean":return`${this.propertyWrapper.propertyName}
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
`}}};var ir=class{constructor(e,t){this.parent=e;this.webcomponentWrapper=t}getAsHtml(){return`<${this.webcomponentWrapper.getTagName()}
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
`.trim()}renderPropertyGui(){let e=[];for(let t of this.getPropertyGuiWrappers())e.push(o`
          <div>
            <b>${t.propertyWrapper.propertyName}</b>

            <pre>${t.propertyWrapper.getTypeName()}</pre>
            <div>${t.getInputElement(this)}</div>
          </div>
        `);return e}getPropertyGuiWrappers(){let e=[];for(let t of this.webcomponentWrapper.getElementProperties())e.push(new or(t));return e}getPropertieNames(){let e=[];return this.getPropertyGuiWrappers().map(t=>{e.push(t.propertyWrapper.propertyName)}),e}hasProperties(){return this.getPropertieNames().length>0}};var Gt=class extends A{constructor(){super(...arguments);this.webcomponentGuiWrapper=null;this.customEventNames=[]}updated(t){t.has("element")&&this.element!=null&&(this.element.style.flexBasis="auto",this.webcomponentGuiWrapper=new ir(this,new nr(this.element)),this.requestUpdate())}render(){return this.element?o` <nidoca-section theme="primary">
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
          <slot @slotchange="${t=>this.slotChanged(t)}"></slot>`:o`Kein Element ausgewählt.`}slotChanged(t){let n=t.target;if(n==null)return;let l=n.assignedElements()[0];l instanceof HTMLElement&&(this.element=l)}toAttributeRows(t){let n=[[]];return t&&t.map(i=>{let l=[];return l.push(i.propertyWrapper.propertyName),l.push(i.propertyWrapper.getTypeName()),l.push(i.propertyWrapper.getConverterTypeName()),l.push(i.propertyWrapper.getRenderType()),n.push(l),l}),n}toSlotRows(t){let n=[[]];return t&&t.map(i=>{let l=[];return l.push(i),n.push(l),l}),n}toCustomEventRows(t){let n=[[]];return t&&t.map(i=>{let l=[];return l.push(i),n.push(l),l}),n}};Gt.styles=c`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }

    .paddingTopBottom {
      padding-top: var(--space-2);
      padding-bottom: var(--space-2);
    }
  `,r([s({type:Array})],Gt.prototype,"customEventNames",2),r([s({type:Object})],Gt.prototype,"element",2),Gt=r([p("webcomponent-viewer")],Gt);var oe=class extends A{constructor(){super(...arguments);this.componentMap=new Map;this.value="";this.options=[]}render(){return o`
      <nidoca-form-combobox
        name="components"
        label="Komponenten"
        value="${this.value}"
        .options="${this.options}"
        @input="${t=>{let n=t.target.getOutputData().value,i=this.componentMap.get(n);this.webcomponentViewer&&(console.log(`change element: ${n}`),this.webcomponentViewer.element=i)}}"
      ></nidoca-form-combobox>

      <nidoca-hr></nidoca-hr>

      <webcomponent-viewer id="webcomponentViewer"></webcomponent-viewer>
      <slot @slotchange="${t=>this.slotChanged(t)}"></slot>
    `}slotChanged(t){let i=t.target.assignedElements(),l=i.length;for(let m=0;m<l;m++){let h=i[m];h instanceof HTMLElement&&(this.webcomponentViewer&&this.webcomponentViewer.element==null&&(this.webcomponentViewer.element=h,this.value=h.tagName),this.componentMap.set(h.tagName,h.cloneNode(!0)))}this.options=k.stringArrayToOptions(Array.from(this.componentMap.keys())),this.requestUpdate()}};oe.styles=c`
    slot {
      display: none;
    }
  `,r([g("#webcomponentViewer")],oe.prototype,"webcomponentViewer",2),oe=r([p("webcomponent-viewer-container")],oe);var sr=class extends A{render(){return o`<nidoca-container>
      <nidoca-section>
        <webcomponent-viewer-container>
          ${Z.example()} ${T.example()} ${W.example()}
          ${J.example()}
    </webcomponent-viewer-container>
      </nidoca-section>
      </nidoca-container>`}};sr=r([p("nidoca-viewer")],sr);var Re=class extends d{render(){return o`
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

      ${this.getComponentHtml(ht,new ht,"NidocaToast Komponente.")}
      ${this.getComponentHtml(xt,new xt,"Infobox Komponente.")}
      ${this.getComponentHtml(D,new D,"Standard Icon Komponente.")}
      ${this.getComponentHtml(O,new O,"Standard Icon Komponente.")}
      ${this.getComponentHtml(O,new O,"Standard Icon Komponente.")}
      ${this.getComponentHtml(at,new at,"Komponente um Quellcode darzustellen.")}
      ${this.getComponentHtml(Q,new Q,"Top App Bar Komponente")}
      ${this.getComponentHtml(x,new x,"Typography Komponenten")}
      ${this.getComponentHtml(dt,new dt,"Top App Bar Komponente")}
      ${this.getComponentHtml(et,new et,"Chip Komponente")}
      ${this.getComponentHtml(_,new _,"Artikel Komponente")}
      ${this.getComponentHtml(tt,new tt,"Accordion Komponente")}
      ${this.getComponentHtml(Y,new Y,"Button")}
      ${this.getComponentHtml(ct,new ct,"Men\xFC")}
      ${this.getComponentHtml(P,new P,"Men\xFCelement")}
      ${this.getComponentHtml(pt,new pt,"Men\xFCbereich")}
      ${this.getComponentHtml(U,new U,"Suchfeld")}
      ${this.getComponentHtml(z,new z,"Einfaches Bild")}
      ${this.getComponentHtml(J,new J,"Rundes Bild")}
      ${this.getComponentHtml(F,new F,"Avatar Komponente, Bild mit Text")}
      ${this.getComponentHtml(W,new W,"Unterkomponente f\xFCr die Komponente <nidoca-list/>")}
      ${this.getComponentHtml(T,new T,"Unterkomponente f\xFCr die Komponente <nidoca-list/>")}
      ${this.getComponentHtml(Z,new Z,"Listenkomponente f\xFCr mobile und Desktop Anwendungen. Unterkomponenten dieser Komponente sind nidoca-list-section und nidoca-list-item")}
    `}getComponentHtml(e,t,n){return o` <nidoca-container>
      <nidoca-section style="padding:var(--space-4);">
        <nidoca-card style="padding:var(--space-4); heigth:500px;"> ${e.example()} </nidoca-card>
        <nidoca-article
          style="padding:var(--space-4);"
          theme="plain"
          overline="<${t.tagName}></${t.tagName}>"
          title="${t.tagName}"
          text="${n}"
        >
          <nidoca-button
            style="width:250px;"
            @nidoca-event-button-clicked="${()=>window.open("https://domoskanonos.github.io/nidoca-lit-viewer/","_blank")}"
            >Ausprobieren</nidoca-button
          >
        </nidoca-article>
      </nidoca-section>
    </nidoca-container>`}};Re.styles=c``,Re=r([p("nidoca-page-main")],Re);var Le=class extends d{render(){return o`
      <nidoca-container>
        <nidoca-viewer></nidoca-viewer>
      </nidoca-container>
    `}};Le.styles=c`
    .infobox {
      padding: var(--space-2);
    }
  `,Le=r([p("nidoca-page-webcomponents")],Le);var _t=class extends d{constructor(){super(...arguments);this.karmatica=void 0;this.listData=[];this.cards=[{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/goal.webp",title:"Ziele",description:"Wir haben uns Ziele gesetzt, die wir erreichen wollen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/friend.webp",title:"Freunde",description:"Wir haben Freunde, die uns bei unseren Pl\xE4nen unterst\xFCtzen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/action.webp",title:"Aktionen",description:"Wir haben Aktionen geplant, die wir durchf\xFChren wollen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/routine.webp",title:"Routinen",description:"Wir haben Routinen, die wir einhalten wollen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/next_action.webp",title:"N\xE4chste Aktion",description:"Hier gehts zu deinen n\xE4chsten Aktionen"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/habit.webp",title:"Gewohnheiten",description:"Hier gehts zu deinen Gewohnheiten"},{imgSrc:"https://raw.githubusercontent.com/domoskanonos/nidoca-webcomponents/refs/heads/main/public/happiness.webp",title:"Gl\xFCck",description:"Was ist eigentlich Gl\xFCck"}];this.selectedCard=this.cards[0]}firstUpdated(t){let n=new se("AppDatabase","Karmatica","id");console.log("Open karmatica"),n.openDatabase().then(async()=>{this.karmatica=await n.get(1),this.listData=this.karmatica?.friends?this.karmatica.friends:[],this.requestUpdate()})}render(){return o`
      <nidoca-crud>   
        <nidoca-generic-edit .item="${new ze}" key="id"></nidoca-generic-edit>
        <nidoca-list-search @nidoca-search-bar-event-value-changed="${t=>{let n=t.detail;this.listData=(this.karmatica?this.karmatica.friends:[]).filter(i=>i.name.indexOf(n)>-1)}}">
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
                        src="${t.image?t.image:Oe.renderImgText(t.name)}"
                      ></nidoca-img-round>
                  <nidoca-icon slot="right" icon=""></nidoca-icon>
                </nidoca-list-item>`)}
        </nidoca-list-search>
      </nidoca-crud>`}cardClicked(t){console.log("cardClicked");let n=t.detail;this.selectedCard=n.card}};r([bt()],_t.prototype,"karmatica",2),r([bt()],_t.prototype,"listData",2),r([s({type:Array})],_t.prototype,"cards",2),r([s({type:Object})],_t.prototype,"selectedCard",2),_t=r([p("nidoca-page-generic-app")],_t);var Ce=class extends d{render(){return o`
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
    `}};Ce.styles=c`
    nidoca-article {
      padding-bottom: var(--space-2);
    }
  `,Ce=r([p("nidoca-page-imprint")],Ce);var ie=class extends d{constructor(){super(...arguments);this.cssVars=[]}firstUpdated(){let t=(n=document.styleSheets)=>{let i=[];return Array.from(n).forEach(l=>{Array.from(l.cssRules).forEach(m=>{if(!m||!m.style)return;let h=m.style;Array.from(h).forEach(u=>{u.startsWith("--")&&i.indexOf(u)==-1&&i.push(u)})})}),i};this.cssVars=t(),console.log(this.cssVars)}render(){return o`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${Dt([this.cssVars],()=>o`
                ${wt(this.cssVars,t=>o`
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
    `}};ie.styles=c``,r([s({type:Array})],ie.prototype,"cssVars",2),ie=r([p("nidoca-page-settings")],ie);var Ae=class extends d{render(){return o``}};Ae.styles=c``,Ae=r([p("nidoca-page-privacy")],Ae);var Ie=class extends d{render(){return o``}};Ie.styles=c``,Ie=r([p("nidoca-page-terms-of-use")],Ie);var He=class extends d{constructor(){super();this.content=o``;G.getUniqueInstance().subscribe(this),this.routeChanged(G.getUniqueInstance().getCurrentPage())}routeChanged(t){switch(t){case"privacy":this.content=o`<nidoca-page-privacy></nidoca-page-privacy>`;break;case"imprint":this.content=o`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"settings":this.content=o`<nidoca-page-settings></nidoca-page-settings>`;break;case"terms-of-use":this.content=o`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;case"genericapp":this.content=o`<nidoca-page-generic-app></nidoca-page-generic-app>`;break;case"webcomponents":this.content=o`<nidoca-page-webcomponents></nidoca-page-webcomponents>`;break;case"main":this.content=o`<nidoca-page-main></nidoca-page-main>`;break;default:this.content=o`<nidoca-page-webcomponents></nidoca-page-webcomponents>`}}render(){return o`
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
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#main")}}"
            icon="home"
            text="Start"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Webcomponents"
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#webcomponents")}}"
          ></nidoca-menu-item>

          <nidoca-menu-item
            text="Generic App"
            @nidoca-event-menu-item-clicked="${()=>{G.getUniqueInstance().navigate("#genericapp")}}"
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
    `}};r([s({type:Object})],He.prototype,"content",2),He=r([p("nidoca-my-app")],He);})();
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
