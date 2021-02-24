/*! For license information please see showcase.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={7551:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BasicEnumRepository=void 0;const i=o(8807);t.BasicEnumRepository=class{constructor(){this.i18nPrefix="enum-"}asEnumKeyValueArray(e){let t=[];return Object.keys(e).forEach((o=>{t.push({key:o,value:e[o]})})),t}asEnumKeyValueArrayI18n(e,t=!1){let o=[];return t&&o.push({key:"",value:i.I18nService.getUniqueInstance().getValue(this.i18nPrefix.concat("empty-entry"))}),Object.keys(e).forEach((t=>{o.push({key:t,value:i.I18nService.getUniqueInstance().getValue(this.i18nPrefix.concat(e[t]))})})),o}asStringArray(e){let t=[];return Object.keys(e).forEach((e=>{t.push(e)})),t}}},194:function(e,t,o){var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.BasicRemoteRepository=void 0;const n=o(5617),r=o(5825);t.BasicRemoteRepository=class{constructor(e,t){this.httpClient=e,this.path=t}getAll(){return i(this,void 0,void 0,(function*(){let e=n.HttpClientService.getDefaultGetRequestInstance();e.path=this.path.concat("/BASIC/ALL");let t=yield this.httpClient.request(e),o=yield t.text();return JSON.parse(o)}))}persist(e){return i(this,void 0,void 0,(function*(){console.log("persist item, value: %s",JSON.stringify(e));let t=n.HttpClientService.getDefaultGetRequestInstance();t.path=this.path.concat("/BASIC/CREATE"),t.requestMethod=n.HttpClientRequestType.POST,t.body=JSON.stringify(e);let o=yield this.httpClient.request(t),i=yield o.text();return JSON.parse(i)}))}update(e,t){return i(this,void 0,void 0,(function*(){console.debug("update item for id= %s, value: %s",e,JSON.stringify(t));let o=n.HttpClientService.getDefaultGetRequestInstance();o.path=this.path.concat("/BASIC/UPDATE/").concat(String(e)),o.requestMethod=n.HttpClientRequestType.PUT,o.body=JSON.stringify(t);let i=yield this.httpClient.request(o),a=yield i.text();return r.BasicService.getUniqueInstance().parse(a)}))}delete(e){return i(this,void 0,void 0,(function*(){console.debug("delete item for id= %s",e);let t=n.HttpClientService.getDefaultGetRequestInstance();t.path=this.path.concat("/BASIC/DELETE/").concat(String(e)),t.requestMethod=n.HttpClientRequestType.DELETE,yield this.httpClient.request(t)}))}findById(e){return i(this,void 0,void 0,(function*(){if(null==e)return Promise.reject();{console.debug("find item by id=%s",e);let t=n.HttpClientService.getDefaultGetRequestInstance();t.path=this.path.concat("/BASIC/FIND_BY_ID/").concat(String(e));let o=yield this.httpClient.request(t),i=yield o.text();return r.BasicService.getUniqueInstance().parse(i)}}))}search(e=0,t=0,o="",a){return i(this,void 0,void 0,(function*(){let i=n.HttpClientService.getDefaultGetRequestInstance();i.path=this.path.concat("/SEARCH/ALL?").concat(a).concat("&page=").concat(String(e)).concat("&size=").concat(String(t)).concat("&sort=").concat(o);let s=yield this.httpClient.request(i),c=yield s.text();return r.BasicService.getUniqueInstance().parse(c)}))}}},5825:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.BasicService=void 0;class BasicService{constructor(){}static getUniqueInstance(){return BasicService.uniqueInstance||(BasicService.uniqueInstance=new BasicService),BasicService.uniqueInstance}getRandomNumber(e,t){return Math.floor(Math.random()*t)+e}parseDate(e,t){const o=/[^0-9a-z]/gi;let i=0,n=0,r=0,a=0,s=0,c=0,l=0,d=e.split(o);console.log(d);try{t.split(o).forEach((function(e,t){let o=(""+e).charAt(0);switch(console.log(o),o){case"y":case"Y":i=parseInt(d[t]);break;case"M":n=parseInt(d[t])-1;break;case"d":r=parseInt(d[t]);break;case"h":case"H":case"k":case"K":a=parseInt(d[t]);break;case"m":s=parseInt(d[t]);break;case"s":c=parseInt(d[t]);break;case"S":l=parseInt(d[t])}}))}catch(e){throw console.log(e),new Error("Invalid date format.")}return new Date(i,n,r,a,s,c,l)}formatDate(date,format){if(null==date)return"";let z={M:date.getMonth()+1,d:date.getDate(),h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()};return format=format.replace(/(M+|d+|h+|m+|s+)/g,(function(v){return((v.length>1?"0":"")+eval("z."+v.slice(-1))).slice(-2)})),format.replace(/(y+)/g,(function(e){return date.getFullYear().toString().slice(-e.length)}))}parse(e){let t=[/(\d{4}-\d{2}-\d{2})[A-Z]+(\d{2}:\d{2}:\d{2}).([0-9+-:]+)/,/(\d{4}-\d{2}-\d{2})/];return JSON.parse(e,(function(e,o){if("string"==typeof o)for(let i=0;i<t.length;i++){if(t[i].exec(o)){console.debug("parse date string to date, key=%s, value=%s",e,o),o=new Date(o);break}}return o}))}getEnumKey(e,t){let o="";return Object.keys(t).forEach((i=>{e==t[i]&&(o=i)})),o}isNotEmpty(e){return!this.isEmpty(e)}isEmpty(e){return null==e}isBlank(e){return this.isEmpty(e)||""==e}isNotBlank(e){return!this.isBlank(e)}clone(e){return Object.assign({},e)}cloneArray(e){return e.map((e=>e))}isEqual(e,t){return e===t}getValue(e,t){return null==e?t:e}beautifyText(e,t={}){return null==e||null==e?"":e instanceof Number||"number"==typeof e?e.toLocaleString(window.navigator.language,t):e instanceof Date?e.toLocaleDateString():e}copyToClipboard(e){const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}dispatchSimpleCustomEvent(e,t,o){console.debug("dispatch simple custom event: "+t+", data="+JSON.stringify(o));let i=new CustomEvent(t,{detail:o,bubbles:!0,composed:!0});e.dispatchEvent(i)}}exports.BasicService=BasicService},2624:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DataReceiverService=void 0;class o{constructor(){this.uiRefreshListener=new Map}static getUniqueInstance(){return o.uniqueInstance||(o.uniqueInstance=new o),o.uniqueInstance}register(e,t){let o=this.uiRefreshListener.get(e);null==o&&(o=[],this.uiRefreshListener.set(e,o)),o.push(t),console.log("register channelListener: "+e+", new register size: "+o.length)}unregister(e,t){let o=this.uiRefreshListener.get(e);if(null==o)return void console.log("nothing to remove");let i=o.indexOf(t);console.log("remove listener on index="+i),o=o.slice(i,1),this.uiRefreshListener.set(e,o),console.log("unregister size:"+o.length)}informListener(e,t){let o=this.uiRefreshListener.get(e);null!=o&&o.forEach((o=>{console.log("data received for channel: "+e),o.dataRecieved(e,t)}))}}t.DataReceiverService=o},3576:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DataStoreService=void 0;t.DataStoreService=class{constructor(e){this.storage=e,this.storage=e}setItem(e,t){this.storage.setItem(e,JSON.stringify(t))}getItem(e){if(null!=e){let t=this.storage.getItem(e);return null!==t?JSON.parse(t):null}return null}removeItem(e){console.log("remove channel: "+e),null!=e&&this.storage.removeItem(e)}}},5617:function(e,t){var o=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.HttpClientService=t.HttpClientProperties=t.HttpClientRequest=t.HttpClientRequestType=t.HttpResponseCode=t.HttpResponseCodeInterceptor=t.HttpClientCredentials=t.HttpClientCorsMode=t.HttpClientContentType=void 0;class i{}t.HttpClientContentType=i,i.MULTIPART_FORM_DATA="multipart/form-data",i.FORM="application/x-www-form-urlencoded",i.JSON="application/json",i.XML="application/xml",i.UNDEFINED=void 0;class n{}t.HttpClientCorsMode=n,n.SAME_ORIGIN="same-origin",n.CORS="cors",n.NO_CORS="no-cors";class r{}t.HttpClientCredentials=r,r.SAME_ORIGIN="same-origin",r.INCLUDE="include",r.OMIT="omit";t.HttpResponseCodeInterceptor=class{};class a{}t.HttpResponseCode=a,a.UNDEFINED=0,a.OK=200,a.UNAUTHORIZED=401,a.FORBIDDEN=403,a.REDIRECT=302;class s{}t.HttpClientRequestType=s,s.GET="GET",s.POST="POST",s.PUT="PUT",s.DELETE="DELETE",s.PATCH="PATCH";class c{constructor(){this.path="",this.requestMethod=s.GET,this.contentType=i.JSON,this.credentials=r.OMIT,this.cors=n.CORS}}t.HttpClientRequest=c;class l{constructor(){this.baseURL="http://localhost:8099"}}t.HttpClientProperties=l;class d{constructor(){this._config=new l,this._defaultRequest=new c,this.httpResponseCodeInterceptors=[]}static getUniqueInstance(){return d.uniqueInstance||(d.uniqueInstance=new d),d.uniqueInstance}get config(){return this._config}addHttpResponseCodeInterceptor(e){this.httpResponseCodeInterceptors.push(e)}get defaultRequest(){return this._defaultRequest}get defaultRequestInstance(){return Object.assign({},this.defaultRequest)}static getDefaultPostRequest(){let e=this.getDefaultRequestInstance();return e.requestMethod=s.POST,e}static getDefaultPutRequest(){let e=this.getDefaultRequestInstance();return e.requestMethod=s.PUT,e}static getDefaultPatchRequestInstance(){let e=this.getDefaultRequestInstance();return e.requestMethod=s.PATCH,e}static getDefaultDeleteRequestInstance(){let e=this.getDefaultRequestInstance();return e.requestMethod=s.DELETE,e}static getDefaultGetRequestInstance(){let e=this.getDefaultRequestInstance();return e.requestMethod=s.GET,e}static getDefaultRequestInstance(){return d.getUniqueInstance().defaultRequestInstance}request(e){return o(this,void 0,void 0,(function*(){null!=e.baseURL&&0!=e.baseURL.length||(e.baseURL=this.config.baseURL);let t=e.baseURL+e.path,o={Accept:"*","Accept-Encoding":"*"};console.debug("set request url: "+t),console.debug("set request method: "+e.requestMethod),null!=e.contentType&&(console.debug("set content type header: ",e.contentType),o["Content-Type"]=e.contentType),console.debug("set body: "+JSON.stringify(e.body)),console.debug("set credentials: "+e.credentials),console.debug("set mode: "+e.cors),console.debug("set headers: "+JSON.stringify(o));const i={headers:o,method:e.requestMethod,body:e.body,credentials:e.credentials,mode:e.cors},n=yield fetch(t,i);return console.info("response status: ",n.status),this.httpResponseCodeInterceptors.forEach((e=>{e.getCodes().forEach((t=>{n.status==t&&e.run()}))})),n}))}sendFormData(e,t,o=this.config.baseURL){console.log("send form data %s",t);let n=new URLSearchParams;t.forEach(((e,t)=>{n.append(t,e.toString())}));let r=this.defaultRequestInstance;return r.requestMethod=s.POST,r.contentType=i.FORM,r.path=e,r.baseURL=o,r.body=n,this.request(r)}uploadFiles(e,t){return o(this,void 0,void 0,(function*(){let o={files:[],response:{}};if(null!=t)for(let n,r=0;n=t[r];r++){const t=new FormData;t.append("file",n);let r=this.defaultRequestInstance;r.requestMethod=s.POST,r.contentType=i.UNDEFINED,r.path=e,r.baseURL=this.config.baseURL,r.body=t;let a={file:n,response:yield this.request(r),filename:n.name,uploadDate:new Date};o.files.push(a)}return o}))}}t.HttpClientService=d},8807:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.I18nService=t.LanguageEnum=void 0,function(e){e.DE="DE",e.EN="EN"}(o=t.LanguageEnum||(t.LanguageEnum={}));class i{constructor(){this.storage=localStorage,null==this.storage.getItem(i.LOCAL_STORAGE_I18N_LANGUAGE_KEY)&&this.setLanguage(window.navigator.language)}static getUniqueInstance(){return i.uniqueInstance||(i.uniqueInstance=new i,null==this.uniqueInstance.getLanguage()&&this.uniqueInstance.setLanguage(i.DEFAULT_LANGUGAGE)),i.uniqueInstance}setLanguage(e){switch(e){case o.DE:case o.EN:break;default:e=i.DEFAULT_LANGUGAGE}console.log("set language: %s",e),this.storage.setItem(i.LOCAL_STORAGE_I18N_LANGUAGE_KEY,JSON.stringify(e))}getLanguage(){let e=this.storage.getItem(i.LOCAL_STORAGE_I18N_LANGUAGE_KEY);return null!=e?JSON.parse(e):i.DEFAULT_LANGUGAGE}getCurrentData(){return this.getData(this.getLanguage())}getData(e){let t=this.storage.getItem(i.LOCAL_STORAGE_I18N_LANGUAGE_SET_PREFIX+e);return null!=t?JSON.parse(t):null}saveData(e,t=this.getLanguage()){this.storage.setItem(i.LOCAL_STORAGE_I18N_LANGUAGE_SET_PREFIX+t,JSON.stringify(e))}addData(e,t=this.getLanguage()){let o=this.getData(t);null==o?this.saveData(e,t):(Object.keys(e).forEach((t=>{console.log(t),o[t]=e[t]})),this.saveData(o,t))}getValue(e){let t=this.getCurrentData(),o="";return null!=t&&null!=t[e]&&(o=t[e]),o.length>0?o:"???".concat(e).concat("???")}addItem(e){console.log("add language item: "+JSON.stringify(e));let t=this.getData(e.languageEnum);null==t&&(t={}),t[e.key]=e.value,this.saveData(e.code,t)}}t.I18nService=i,i.LOCAL_STORAGE_I18N_LANGUAGE_KEY="LOCAL_STORAGE_I18N_LANGUAGE_KEY",i.LOCAL_STORAGE_I18N_LANGUAGE_SET_PREFIX="LOCAL_STORAGE_I18N_LANGUAGE_SET-",i.DEFAULT_LANGUGAGE=o.EN},8222:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});var i=o(46);Object.defineProperty(t,"KeyValuePairs",{enumerable:!0,get:function(){return i.KeyValuePairs}}),Object.defineProperty(t,"TypescriptType",{enumerable:!0,get:function(){return i.TypescriptType}}),Object.defineProperty(t,"TyescriptTypeUtil",{enumerable:!0,get:function(){return i.TyescriptTypeUtil}});var n=o(5825);Object.defineProperty(t,"BasicService",{enumerable:!0,get:function(){return n.BasicService}});var r=o(2624);Object.defineProperty(t,"DataReceiverService",{enumerable:!0,get:function(){return r.DataReceiverService}});var a=o(3576);Object.defineProperty(t,"DataStoreService",{enumerable:!0,get:function(){return a.DataStoreService}});var s=o(4380);Object.defineProperty(t,"ScreenOrientationType",{enumerable:!0,get:function(){return s.ScreenOrientationType}}),Object.defineProperty(t,"ScreenService",{enumerable:!0,get:function(){return s.ScreenService}});var c=o(7617);Object.defineProperty(t,"ParamService",{enumerable:!0,get:function(){return c.ParamService}});var l=o(5617);Object.defineProperty(t,"HttpClientService",{enumerable:!0,get:function(){return l.HttpClientService}}),Object.defineProperty(t,"HttpClientCorsMode",{enumerable:!0,get:function(){return l.HttpClientCorsMode}}),Object.defineProperty(t,"HttpClientCredentials",{enumerable:!0,get:function(){return l.HttpClientCredentials}}),Object.defineProperty(t,"HttpClientProperties",{enumerable:!0,get:function(){return l.HttpClientProperties}}),Object.defineProperty(t,"HttpClientContentType",{enumerable:!0,get:function(){return l.HttpClientContentType}}),Object.defineProperty(t,"HttpResponseCode",{enumerable:!0,get:function(){return l.HttpResponseCode}}),Object.defineProperty(t,"HttpResponseCodeInterceptor",{enumerable:!0,get:function(){return l.HttpResponseCodeInterceptor}});var d=o(8807);Object.defineProperty(t,"I18nService",{enumerable:!0,get:function(){return d.I18nService}}),Object.defineProperty(t,"LanguageEnum",{enumerable:!0,get:function(){return d.LanguageEnum}});var p=o(1611);Object.defineProperty(t,"RouterService",{enumerable:!0,get:function(){return p.RouterService}});var u=o(2454);Object.defineProperty(t,"SlotService",{enumerable:!0,get:function(){return u.SlotService}});var h=o(8752);Object.defineProperty(t,"UiRefresherService",{enumerable:!0,get:function(){return h.UiRefresherService}});var f=o(194);Object.defineProperty(t,"BasicRemoteRepository",{enumerable:!0,get:function(){return f.BasicRemoteRepository}});var y=o(7551);Object.defineProperty(t,"BasicEnumRepository",{enumerable:!0,get:function(){return y.BasicEnumRepository}});var g=o(1571);Object.defineProperty(t,"WebApiServicePermissionRequest",{enumerable:!0,get:function(){return g.WebApiServicePermissionRequest}}),Object.defineProperty(t,"WebApiService",{enumerable:!0,get:function(){return g.WebApiService}});var m=o(1205);Object.defineProperty(t,"UnauthorizedHttpResponseCodeInterceptor",{enumerable:!0,get:function(){return m.UnauthorizedHttpResponseCodeInterceptor}}),Object.defineProperty(t,"AuthPrivilege",{enumerable:!0,get:function(){return m.AuthPrivilege}}),Object.defineProperty(t,"AuthRole",{enumerable:!0,get:function(){return m.AuthRole}}),Object.defineProperty(t,"AuthUser",{enumerable:!0,get:function(){return m.AuthUser}}),Object.defineProperty(t,"SecureServiceProperties",{enumerable:!0,get:function(){return m.SecureServiceProperties}}),Object.defineProperty(t,"SecureService",{enumerable:!0,get:function(){return m.SecureService}})},46:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.KeyValuePairs=t.TyescriptTypeUtil=t.TypescriptType=void 0,function(e){e.UNKNOWN="unknown",e.STRING="string",e.NUMBER="number",e.DATE="date",e.BOOLEAN="boolean",e.ENUM="enum",e.OBJECT="object"}(o=t.TypescriptType||(t.TypescriptType={}));class i{static byObject(e){let t=typeof e;"object"==t&&(e instanceof Date?t="date":e instanceof Number?t="number":e instanceof Boolean&&(t="boolean"));let i=o;for(let e of Object.keys(i))if(e=t)return i[e];return o.UNKNOWN}static getTypeOf(e,t){return i.byObject(e[t])}static getSubTypesOf(e){let t=new n;return Object.keys(e).forEach((o=>{t.push({key:o,value:i.getTypeOf(e,o)})})),t}}t.TyescriptTypeUtil=i;class n{constructor(){this._items=[]}get items(){return this._items}push(e){this._items.push(e)}getItem(e){for(let t of this._items)if(t.key==e)return t;return null}getValue(e){let t=this.getItem(e);return null!=t?t.value:null}getKeys(){let e=[];return this._items.forEach((t=>{null!=t.key&&e.push(t.key)})),e}getValues(){let e=[];return this._items.forEach((t=>{e.push(t.value)})),e}}t.KeyValuePairs=n},7617:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ParamService=void 0;class o{constructor(){}static getUniqueInstance(){return o.uniqueInstance||(o.uniqueInstance=new o),o.uniqueInstance}getParam(e,t=null){let o=new URLSearchParams(window.location.search).get(e);return null==o?t:o}}t.ParamService=o},1611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RouterService=void 0;class o{constructor(){this.listeners=[],window.onpopstate=()=>{this.notifyListeners()},document.addEventListener("click",(e=>{if(!this.shouldIgnoreEvent(e)){let t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}}))}static getUniqueInstance(){return o.uniqueInstance||(o.uniqueInstance=new o),o.uniqueInstance}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter((t=>t!==e))}}back(){history.back()}navigate(e,t=null){-1==e.indexOf("#")&&(e="#".concat(e)),console.log("navigate to: %s",e),null!=t&&console.log("state: %s",JSON.stringify(t)),document.location.hash!==e?(history.pushState(t,"",e),this.notifyListeners()):console.log("you are already on page: "+e)}getCurrentState(){return history.state}getStateProperty(e){let t=this.getCurrentState();return null!=t?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getPath(){return document.location.hash}notifyListeners(){const e=this.getPath();this.listeners.forEach((t=>t(e)))}shouldIgnoreEvent(e){return e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(let t of e.composedPath?e.composedPath():[])if(this.isAnchor(t))return t;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&"a"===e.nodeName.toLowerCase()}shouldIgnoreAnchor(e){if(e.target&&"_self"!==e.target.toLowerCase())return!0;if(e.hasAttribute("download"))return!0;return(e.origin||this.getAnchorOrigin(e))!==window.location.origin}getAnchorOrigin(e){const t=e.port,o=e.protocol;return`${o}//${"http:"===o&&"80"===t||"https:"===o&&"443"===t?e.hostname:e.host}`}}t.RouterService=o},4380:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScreenService=t.ScreenOrientationType=void 0;class o{}t.ScreenOrientationType=o,o.PORTRAIT="PORTRAIT",o.LANDSCAPE="LANDSCAPE";class i{static getUniqueInstance(){return i.uniqueInstance||(i.uniqueInstance=new i),i.uniqueInstance}getOrientation(){return window.innerHeight>window.innerWidth?o.PORTRAIT:o.LANDSCAPE}}t.ScreenService=i},1205:function(e,t,o){var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SecureService=t.UnauthorizedHttpResponseCodeInterceptor=t.SecureServiceProperties=t.AuthPrivilege=t.AuthRole=t.AuthUser=void 0;const n=o(5617),r=o(1611),a=o(5825),s=o(5617);t.AuthUser=class{constructor(){this.roles=[]}};t.AuthRole=class{constructor(){this.privileges=[]}};t.AuthPrivilege=class{};class c{constructor(){this.loginPath="/dologin",this.logoutPath="/dologout",this.authenticatedUserPath="/SYSTEM/AUTH/USER",this.loginPage="login"}}t.SecureServiceProperties=c;class l extends s.HttpResponseCodeInterceptor{constructor(e){super(),this.redirectPage=e}getCodes(){return[n.HttpResponseCode.UNAUTHORIZED]}run(){console.log("not authenticated, redirect to login page..."),d.getUniqueInstance().setAuthenticated(!1),r.RouterService.getUniqueInstance().navigate(this.redirectPage)}}t.UnauthorizedHttpResponseCodeInterceptor=l;class d{constructor(){this._config=new c}get config(){return this._config}static getUniqueInstance(){return d.uniqueInstance||(n.HttpClientService.getUniqueInstance().defaultRequest.cors=n.HttpClientCorsMode.CORS,n.HttpClientService.getUniqueInstance().defaultRequest.credentials=n.HttpClientCredentials.INCLUDE,d.uniqueInstance=new d),d.uniqueInstance}secureMode(){this.isAuthenticated()||r.RouterService.getUniqueInstance().getCurrentPage()===this.config.loginPage||(console.log("secure mode, automatic redirect to login page."),r.RouterService.getUniqueInstance().navigate(this.config.loginPage))}sendFormData(e,t,o){return i(this,void 0,void 0,(function*(){let i=null;return i=null!=o?yield n.HttpClientService.getUniqueInstance().sendFormData(e,t,o):yield n.HttpClientService.getUniqueInstance().sendFormData(e,t),i.status==n.HttpResponseCode.FORBIDDEN&&(console.log("form request forbidden."),this.resetLoginData()),i}))}request(e){return i(this,void 0,void 0,(function*(){let t=yield n.HttpClientService.getUniqueInstance().request(e);return t.status==n.HttpResponseCode.OK?console.log("request successfully."):t.status==n.HttpResponseCode.FORBIDDEN?(console.log("request forbidden."),this.resetLoginData()):t.status==n.HttpResponseCode.REDIRECT&&console.log("request redirected."),t}))}login(e,t,o){return i(this,void 0,void 0,(function*(){let i=yield n.HttpClientService.getUniqueInstance().sendFormData(this.config.loginPath,e);if(i.status==n.HttpResponseCode.OK){let e=yield this.refreshAuthUser();if(null==e&&null!=o)r.RouterService.getUniqueInstance().navigate(o);else if(null==e)throw new Error("error refresh authUser data...");null!=t&&r.RouterService.getUniqueInstance().navigate(t)}else this.resetLoginData();return i}))}logout(e){return i(this,void 0,void 0,(function*(){let t=n.HttpClientService.getUniqueInstance().defaultRequestInstance;t.path=this.config.logoutPath;yield this.request(t);return this.resetLoginData(),null!=e&&r.RouterService.getUniqueInstance().navigate(e),this.isAuthenticated()}))}isAuthenticated(){return"1"==sessionStorage.getItem(d.SESSION_STORAGE_SECURE_SERVICE_IS_LOGGED_IN)&&null!=this.getAuthUser()}setAuthenticated(e){sessionStorage.setItem(d.SESSION_STORAGE_SECURE_SERVICE_IS_LOGGED_IN,e?"1":"0")}getAuthUser(){let e=sessionStorage.getItem(d.SESSION_STORAGE_SECURE_SERVICE_AUTH_USER);return null==e||0==e.length?null:a.BasicService.getUniqueInstance().parse(e)}setAuthUser(e){sessionStorage.setItem(d.SESSION_STORAGE_SECURE_SERVICE_AUTH_USER,JSON.stringify(e))}refreshAuthUser(){return i(this,void 0,void 0,(function*(){let e=n.HttpClientService.getUniqueInstance().defaultRequestInstance;e.requestMethod=n.HttpClientRequestType.GET,e.contentType=n.HttpClientContentType.JSON,e.path=this.config.authenticatedUserPath;let t=yield n.HttpClientService.getUniqueInstance().request(e),o=yield t.text(),i=JSON.parse(o);return null!=i?this.setLoginData(i,!0):this.resetLoginData(),i}))}setLoginData(e,t){this.setAuthUser(e),this.setAuthenticated(t)}resetLoginData(){this.setLoginData(null,!1)}}t.SecureService=d,d.SESSION_STORAGE_SECURE_SERVICE_IS_LOGGED_IN="SESSION_STORAGE_SECURE_SERVICE_IS_LOGGED_IN",d.SESSION_STORAGE_SECURE_SERVICE_AUTH_USER="SESSION_STORAGE_SECURE_SERVICE_AUTH_USER"},2454:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SlotService=void 0;t.SlotService=class{constructor(e){if(this.slotElement=e,null==this.slotElement||null==this.slotElement)throw new Error("slot element is undefined.")}indexOf(e){let t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){if(t[o]===e)return o}return-1}getElementByType(e,t){let o=this.slotElement.assignedElements(),i=0;for(let n=0;n<o.length;n++){let r=o[n];if(r instanceof e){if(t==i)return r;i++}}return null}}},8752:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UiRefresherService=void 0;class o{constructor(){this.uiRefreshListener=new Map}static getUniqueInstance(){return o.uniqueInstance||(o.uniqueInstance=new o),o.uniqueInstance}register(e,t){let o=this.uiRefreshListener.get(e);null==o&&(o=[],this.uiRefreshListener.set(e,o)),o.push(t),console.log("register channelListener: "+e+", new register size: "+o.length)}unregister(e,t){let o=this.uiRefreshListener.get(e);if(null==o)return void console.log("nothing to remove");let i=o.indexOf(t);console.log("remove listener on index="+i),o=o.slice(i,1),this.uiRefreshListener.set(e,o),console.log("unregister size:"+o.length)}informListener(e){let t=this.uiRefreshListener.get(e);null!=t&&t.forEach((t=>{console.log("inform ui refresh listener for channel: "+e),t.updateUI(e)}))}}t.UiRefresherService=o},1571:function(e,t){var o=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.WebApiService=t.WebApiServicePermissionRequest=void 0;class i{}t.WebApiServicePermissionRequest=i,i.NOTIFICATION="NOTIFICATION";class n{static getUniqueInstance(){return n.uniqueInstance||(n.uniqueInstance=new n),n.uniqueInstance}requestPermission(e){return o(this,void 0,void 0,(function*(){switch(e){case i.NOTIFICATION:if("granted"==(yield Notification.requestPermission()))return console.debug("html 5 notification permission granted."),!0;break;default:return!1}return!1}))}notify(e,t){new Notification(e,t).close()}startCam(e){return o(this,void 0,void 0,(function*(){let t=null;if(null!=e){if(!("mediaDevices"in navigator)||null!=t){let e="Your browser does not support media devices.";return console.error(e),Promise.reject(e)}t=yield navigator.mediaDevices.getUserMedia({video:!0}),e.srcObject=t,yield e.play()}return t}))}stopCam(e,t){if(null!=t){t.getTracks()[0].stop(),null!=e&&e.load(),t=null}}}t.WebApiService=n},7106:function(e,t,o){var i=this&&this.__createBinding||(Object.create?function(e,t,o,i){void 0===i&&(i=o),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[o]}})}:function(e,t,o,i){void 0===i&&(i=o),e[i]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||i(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(o(4237),t),n(o(2516),t),n(o(788),t),n(o(1085),t),n(o(6890),t),n(o(4661),t),n(o(9347),t),n(o(9637),t),n(o(6523),t),n(o(6205),t),n(o(9899),t),n(o(2881),t),n(o(2161),t),n(o(1795),t),n(o(1564),t),n(o(5793),t),n(o(7178),t),n(o(8224),t),n(o(8220),t),n(o(4791),t),n(o(4097),t),n(o(1255),t),n(o(1541),t),n(o(547),t),n(o(8877),t),n(o(2531),t),n(o(9072),t),n(o(620),t),n(o(4242),t),n(o(6110),t),n(o(6316),t),n(o(7434),t),n(o(1565),t),n(o(4503),t),n(o(2986),t),n(o(9605),t),n(o(2322),t),n(o(5986),t),n(o(5578),t),n(o(378),t),n(o(8509),t)},2516:function(e,t,o){var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaAbstractApp=t.AppData=void 0;const n=o(8789);t.AppData=class{};class r extends n.LitElement{preRender(){return i(this,void 0,void 0,(function*(){return Promise.resolve()}))}constructor(){super(),document.getElementsByTagName("TITLE")[0].textContent=this.getAppTitle()}render(){return this.renderPage()}firstUpdated(){this.registerEventListener()}registerEventListener(){}getDefaultInputData(){return{}}getOutputData(){}inputDataChanged(){}}t.NidocaAbstractApp=r},1085:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaAccordionItem=void 0;const r=o(8789),a=o(8789),s=o(2161),c=o(6523),l=o(1565),d=o(6110);let p=class extends a.LitElement{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return r.html`
      <div class="ACCORDION_ITEM">
        <nidoca-border .borderProperties="${[c.BorderProperties.ALL,c.BorderProperties.FULL_WIDTH]}">
          <nidoca-grid-container
            class="ACCORDION_HEADER"
            @click="${()=>this.toggle()}"
            .gridJustifyItems="${s.GridJustifyItems.STRETCH}"
            .gridAlignItems="${s.GridAlignItems.CENTER}"
            .gridTemplateRows="${["1fr"]}"
            .gridTemplateColumns="${["auto","1fr","auto"]}"
            ><nidoca-spacer
              spacerSize="${l.SpacerSize.MEDIUM}"
              spacerAlignment="${l.SpacerAlignment.HORIZONTAL}"
            ></nidoca-spacer>
            <nidoca-typography text="${this.header}"></nidoca-typography>
            <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
          </nidoca-grid-container>
          <nidoca-visible visibleType="${this.opened?d.VisibleType.NORMAL:d.VisibleType.HIDE}">
            <slot></slot>
          </nidoca-visible>
        </nidoca-border>
      </div>
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};p.styles=r.css`
    .ACCORDION_HEADER {
      cursor: pointer;
    }
  `,i([r.property(),n("design:type",String)],p.prototype,"header",void 0),i([r.property(),n("design:type",Boolean)],p.prototype,"opened",void 0),p=i([r.customElement("nidoca-accordion-item")],p),t.NidocaAccordionItem=p},788:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaAccordion=t.AccordionType=void 0;const r=o(8789),a=o(8789),s=o(1085);var c;!function(e){e.SINGLE="SINGLE",e.MULTI="MULTI"}(c=t.AccordionType||(t.AccordionType={}));let l=class extends a.LitElement{constructor(){super(...arguments),this.accordionType=c.SINGLE}render(){return r.html`
      <div @nidoca-event-accordion-item-clicked="${e=>this.accordionSwitched(e)}">
        <slot id="accordionSlot"></slot>
      </div>
    `}accordionSwitched(e){let t=e.detail;switch(this.accordionType){case c.SINGLE:if(null!=this.accordionSlot){let e=this.accordionSlot.assignedElements();for(let o=0;o<e.length;o++){let i=e[o];i instanceof s.NidocaAccordionItem&&i!=t&&(i.opened=!1)}}break;case c.MULTI:}}};l.styles=r.css``,i([r.property(),n("design:type",String)],l.prototype,"accordionType",void 0),i([r.query("#accordionSlot"),n("design:type",Object)],l.prototype,"accordionSlot",void 0),l=i([r.customElement("nidoca-accordion")],l),t.NidocaAccordion=l},6523:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaBorder=t.ShadowType=t.BorderSize=t.BorderProperties=void 0;const r=o(8789),a=o(8789);var s,c,l;!function(e){e.NONE="NONE",e.ALL="ALL",e.ALL_ROUND="ALL_ROUND",e.HORIZONTAL="HORIZONTAL",e.VERTICAL="VERTICAL",e.LEFT="LEFT",e.RIGHT="RIGHT",e.TOP="TOP",e.BOTTOM="BOTTOM",e.BOTTOM_SELECTED="BOTTOM_SELECTED",e.FULL_WIDTH="FULL_WIDTH",e.FULL_HEIGHT="FULL_HEIGHT"}(s=t.BorderProperties||(t.BorderProperties={})),function(e){e.THIN="THIN",e.MEDIUM="MEDIUM",e.THICK="THICK"}(c=t.BorderSize||(t.BorderSize={})),function(e){e.NONE="NONE",e.KEY_LIGHT="KEY_LIGHT",e.AMBIENT_LIGHT="AMBIENT_LIGHT",e.COMBINED="COMBINED"}(l=t.ShadowType||(t.ShadowType={}));let d=class extends a.LitElement{constructor(){super(...arguments),this.borderProperties=[s.NONE],this.borderSize=c.THIN,this.shadowType=l.NONE}render(){return r.html`
      <slot
        class="${this.toBorderPropertiesString(this.borderProperties)} ${this.borderSize} ${this.shadowType}"
      ></slot>
    `}toBorderPropertiesString(e){let t="BORDER";return e.forEach((e=>{t=t.concat(" ").concat(e)})),t}};d.styles=r.css`
    :host,
    * {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
    }
    .BORDER {
      border-color: var(--app-color-surface-background);
    }

    slot {
      display: inline-block;
    }

    .FULL_WIDTH {
      width: 100%;
    }

    .FULL_HEIGHT {
      height: 100%;
    }

    .THIN {
      border-width: thin;
    }

    .MEDIUM {
      border-width: 2px;
    }

    .THICK {
      border-width: 4px;
    }

    .ALL {
      border-style: solid;
    }

    .ALL_ROUND {
      overflow: hidden;
      border: 1px solid;
      border-color: var(--app-color-surface-background);
      border-radius: 10px;
    }

    .HORIZONTAL,
    .TOP {
      border-top-style: solid;
    }

    .HORIZONTAL,
    .BOTTOM {
      border-bottom-style: solid;
    }

    .VERTICAL,
    .LEFT {
      border-left-style: solid;
    }

    .VERTICAL,
    .RIGHT {
      border-right-style: solid;
    }

    .BOTTOM_SELECTED {
      border-bottom: 0.2em solid;
      border-color: var(--app-color-primary-background);
    }

    .KEY_LIGHT {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .AMBIENT_LIGHT {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .COMBINED {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
  `,i([r.property(),n("design:type",Array)],d.prototype,"borderProperties",void 0),i([r.property(),n("design:type",String)],d.prototype,"borderSize",void 0),i([r.property(),n("design:type",String)],d.prototype,"shadowType",void 0),d=i([r.customElement("nidoca-border")],d),t.NidocaBorder=d},6890:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaBox=void 0;const r=o(8789);let a=class extends r.LitElement{constructor(){super(...arguments),this.height="100vh",this.width="100vw"}render(){return r.html`
      <div style="height:${this.height}; width:${this.width}; overflow: auto;">
        <slot></slot>
      </div>
    `}};a.styles=r.css`
    :host,
    *,
    ::slotted(*) {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
    }
  `,i([r.property(),n("design:type",String)],a.prototype,"height",void 0),i([r.property(),n("design:type",String)],a.prototype,"width",void 0),a=i([r.customElement("nidoca-box")],a),t.NidocaBox=a},9899:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaButton=t.ButtonType=void 0;const r=o(8789),a=o(8789),s=o(4237),c=o(6110),l=o(1565),d=o(5578);var p;!function(e){e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY",e.CLEAR="CLEAR"}(p=t.ButtonType||(t.ButtonType={}));let u=class extends a.LitElement{constructor(){super(),this.buttonType=p.PRIMARY,this.text=""}render(){return r.html`
      <nidoca-ripple>
        <nidoca-flex-container
          class="BUTTON ${this.buttonType}"
          @click="${()=>{this.clicked()}}"
          .flexContainerProperties="${[s.FlexContainerProperties.CONTAINER_WIDTH_AUTO]}"
          flexWrap="${s.FlexWrap.NO_WRAP}"
          .flexJustifyContent="${s.FlexJustifyContent.CENTER}"
          .flexAlignItems="${s.FlexAlignItems.CENTER}"
        >
          <nidoca-visible visibleType="${this.leadingIcon?c.VisibleType.NORMAL:c.VisibleType.HIDE}">
            <nidoca-icon .icon="${this.leadingIcon}"></nidoca-icon>
          </nidoca-visible>
          <nidoca-visible visibleType="${this.leadingIcon?c.VisibleType.NORMAL:c.VisibleType.HIDE}">
            <nidoca-visible
              visibleType="${this.buttonType==p.CLEAR?c.VisibleType.HIDE:c.VisibleType.NORMAL}"
            >
              <nidoca-spacer spacerSize="${l.SpacerSize.MEDIUM}"></nidoca-spacer>
            </nidoca-visible>
          </nidoca-visible>
          <nidoca-typography text="${this.text}" typographyType="${d.TypographyType.BUTTON}">
            <slot></slot>
          </nidoca-typography>

          <nidoca-visible visibleType="${this.buttonType==p.CLEAR?c.VisibleType.HIDE:c.VisibleType.NORMAL}">
            <nidoca-spacer spacerSize="${l.SpacerSize.MEDIUM}"></nidoca-spacer>
          </nidoca-visible>
        </nidoca-flex-container>
      </nidoca-ripple>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};u.styles=r.css`
    .BUTTON {
      cursor: pointer;
      text-transform: uppercase;
      box-sizing: border-box;
      font-family: inherit;
      text-align: center;
      vertical-align: center;
      line-height: 48px;
    }

    .PRIMARY {
      background-color: var(--app-color-primary-background);
      color: var(--app-color-primary);
    }
    ::slotted(.PRIMARY:hover),
    .PRIMARY:hover,
    ::slotted(.PRIMARY:active),
    .PRIMARY:active {
      background-color: var(--app-color-primary-background-dark);
      color: var(--app-color-primary-dark);
    }

    .SECONDARY {
      background-color: var(--app-color-secondary-background);
      color: var(--app-color-secondary);
    }
    ::slotted(.SECONDARY:hover),
    .SECONDARY:hover,
    ::slotted(.SECONDARY:active),
    .SECONDARY:active {
      background-color: var(--app-color-secondary-background-dark);
      color: var(--app-color-secondary-dark);
    }

    @media only screen and (orientation: portrait) {
      button,
      .btn {
        width: 100%;
      }
    }
  `,i([r.property(),n("design:type",String)],u.prototype,"buttonType",void 0),i([r.property(),n("design:type",Object)],u.prototype,"leadingIcon",void 0),i([r.property(),n("design:type",String)],u.prototype,"text",void 0),u=i([r.customElement("nidoca-button"),n("design:paramtypes",[])],u),t.NidocaButton=u},1255:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaCaptcha=void 0;const r=o(8789);let a=class extends r.LitElement{constructor(){super(...arguments),this.numberOne=1,this.numberTwo=10}render(){return r.html`
      <nidoca-form-text
        id="inputfield"
        @nidoca-event-inputfield-focus-out="${()=>this.validate()}"
        label="${"nidoca-captcha-label".concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        name="captcha"
        trailingIcon="create"
        value=""
      ></nidoca-form-text>
    `}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){let e=this.isValid();return e&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText="nidoca-captcha-wrong-value"),e}};a.styles=r.css``,i([r.property(),n("design:type",Number)],a.prototype,"numberOne",void 0),i([r.property(),n("design:type",Number)],a.prototype,"numberTwo",void 0),i([r.query("#inputfield"),n("design:type",Object)],a.prototype,"inputfield",void 0),a=i([r.customElement("nidoca-captcha-component")],a),t.NidocaCaptcha=a},9347:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaChip=void 0;const n=o(8789),r=o(8789);let a=class extends r.LitElement{render(){return n.html`
      <div class="CHIP">
        <slot></slot>
      </div>
    `}};a.styles=n.css`
    .CHIP {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 12px;
      border-radius: 32px;
      font-size: 13px;
      line-height: 32px;
    }

    .CHIP-hover:hover {
      background: #ccc;
    }
  `,a=i([n.customElement("nidoca-chip")],a),t.NidocaChip=a},378:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaDialog=void 0;const r=o(8789),a=o(6110),s=o(1031);let c=class extends r.LitElement{constructor(){super(...arguments),this.show=!1}render(){return r.html`
      <nidoca-visible visibleType="${this.show?a.VisibleType.NORMAL:a.VisibleType.HIDE}">
        <div class="fullScreen opacScreen"></div>
        <div class="fullScreen wrapperOutside">
          <div class="wrapperInside">
            <!-- Dialog -->
            <nidoca-transition .transitionType="${s.TransitionType.SLIDE_CENTER}">
              <div class="dialogContainer">
                <slot></slot>
              </div>
            </nidoca-transition>
          </div>
        </div>
      </nidoca-visible>
    `}};c.styles=r.css`
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
      width: min-content;
      height: auto;

      padding: 0;
      margin: 0 auto;
    }
  `,i([r.property(),n("design:type",Boolean)],c.prototype,"show",void 0),c=i([r.customElement("nidoca-dialog")],c),t.NidocaDialog=c},2881:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaDivider=t.DividerType=void 0;const r=o(8789);var a;!function(e){e.THIN="THIN",e.MEDIUM="MEDIUM",e.THICK="THICK"}(a=t.DividerType||(t.DividerType={}));let s=class extends r.LitElement{constructor(){super(...arguments),this.dividerType=a.THIN,this.opacity=1}render(){return r.html` <div class="DIVIDER ${this.dividerType}" style="opacity: ${this.opacity};"></div> `}};s.styles=r.css`
    .DIVIDER,
    ::slotted(.DIVIDER) {
      width: 100%;
      background-color: #000000;
    }

    .THIN {
      height: 1px;
    }

    .MEDIUM {
      height: 2px;
    }

    .THICK {
      height: 4px;
    }
  `,i([r.property(),n("design:type",String)],s.prototype,"dividerType",void 0),i([r.property(),n("design:type",Number)],s.prototype,"opacity",void 0),s=i([r.customElement("nidoca-divider")],s),t.NidocaDivider=s},4237:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFlex=t.FlexAlignContent=t.FlexAlignItems=t.FlexJustifyContent=t.FlexWrap=t.FlexDirection=t.FlexItemProperties=t.FlexContainerProperties=void 0;const r=o(8789);var a,s,c,l,d;!function(e){e.CONTAINER_WIDTH_MIN_CONTENT="CONTAINER_WIDTH_MIN_CONTENT",e.CONTAINER_WIDTH_AUTO="CONTAINER_WIDTH_AUTO",e.CONTAINER_WIDTH_100="CONTAINER_WIDTH_100",e.CONTAINER_WIDTH_75="CONTAINER_WIDTH_75",e.CONTAINER_WIDTH_50="CONTAINER_WIDTH_50",e.CONTAINER_WIDTH_25="CONTAINER_WIDTH_25",e.CONTAINER_HEIGHT_100="CONTAINER_HEIGHT_100",e.TABLET_MAX_WIDTH="TABLET_MAX_WIDTH",e.SMARTPHONE_MAX_WIDTH="SMARTPHONE_MAX_WIDTH",e.SMARTPHONE_HORIZONTAL_PADDING="SMARTPHONE_HORIZONTAL_PADDING",e.SMARTPHONE_VERTICAL_PADDING="SMARTPHONE_VERTICAL_PADDING",e.TABLET_HORIZONTAL_PADDING="TABLET_HORIZONTAL_PADDING",e.TABLET_VERTICAL_PADDING="TABLET_VERTICAL_PADDING"}(t.FlexContainerProperties||(t.FlexContainerProperties={})),function(e){e.TABLET_MAX_WIDTH="TABLET_MAX_WIDTH",e.SMARTPHONE_MAX_WIDTH="SMARTPHONE_MAX_WIDTH",e.KEYLINE_ALIGNMENT_HORIZONTAL="KEYLINE_ALIGNMENT_HORIZONTAL",e.KEYLINE_ALIGNMENT_VERTICAL="KEYLINE_ALIGNMENT_VERTICAL",e.KEYLINE_ALIGNMENT_BOTH="KEYLINE_ALIGNMENT_BOTH",e.KEYLINE_SIZE_ZERO="KEYLINE_SIZE_ZERO",e.KEYLINE_SIZE_LITTLE="KEYLINE_SIZE_LITTLE",e.KEYLINE_SIZE_SMALL="KEYLINE_SIZE_SMALL",e.KEYLINE_SIZE_MEDIUM="KEYLINE_SIZE_MEDIUM",e.KEYLINE_SIZE_BIG="KEYLINE_SIZE_BIG",e.KEYLINE_SIZE_MAX="KEYLINE_SIZE_MAX"}(t.FlexItemProperties||(t.FlexItemProperties={})),function(e){e.ROW="row",e.ROW_REVERSE="rowData-reverse",e.COLUMN="column",e.COLUMN_REVERSE="column-reverse"}(a=t.FlexDirection||(t.FlexDirection={})),function(e){e.WRAP="wrap",e.NO_WRAP="nowrap",e.WRAP_REVERSE="flexWrap-reverse"}(s=t.FlexWrap||(t.FlexWrap={})),function(e){e.FLEX_START="flex-start",e.FLEX_END="flex-end",e.CENTER="center",e.SPACE_BETWEEN="space-between",e.SPACE_AROUND="space-around",e.SPACE_EVENLY="space-evenly"}(c=t.FlexJustifyContent||(t.FlexJustifyContent={})),function(e){e.FLEX_START="flex-start",e.FLEX_END="flex-end",e.CENTER="center",e.STRETCH="stretch",e.START="start",e.END="end",e.BASELINE="baseline",e.FIRST_BASELINE="first baseline",e.LAST_BASLINE="last baseline",e.SAFE="safe",e.UNSAFE="unsafe"}(l=t.FlexAlignItems||(t.FlexAlignItems={})),function(e){e.FLEX_START="flex-start",e.FLEX_END="flex-end",e.CENTER="center",e.STRETCH="stretch",e.SPACE_AROUND="space-around",e.SPACE_EVENLY="space-evenly",e.SPACE_BETWEEN="space-between",e.START="start",e.END="end",e.BASELINE="baseline",e.FIRST_BASELINE="first baseline",e.LAST_BASLINE="last baseline",e.SAFE="safe",e.UNSAFE="unsafe"}(d=t.FlexAlignContent||(t.FlexAlignContent={}));let p=class extends r.LitElement{constructor(){super(...arguments),this.flexDirection=a.ROW,this.flexWrap=s.WRAP,this.flexJustifyContent=c.FLEX_START,this.flexAlignItems=l.FLEX_START,this.flexAlignContent=d.FLEX_START,this.flexContainerProperties=[],this.flexItemProperties=[],this.flexItemBasisValue="auto",this.flexItemBasisValues=[]}render(){return r.html`
      <div
        class="${this.toContainerPropertiesString(this.flexContainerProperties)}"
        style="flex-direction: ${this.flexDirection}; flex-wrap: ${this.flexWrap}; justify-content: ${this.flexJustifyContent}; align-items: ${this.flexAlignItems}; align-content: ${this.flexAlignContent};"
      >
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}update(e){super.update(e),null==e.get("flexItemBasisValue")&&null==e.get("flexItemBasisValues")&&null==e.get("flexItemProperties")||this.changeSlotComponentsStyle(this.slotElement)}slotChanged(e){let t=e.target;this.changeSlotComponentsStyle(t)}changeSlotComponentsStyle(e){if(null==e)return;let t=e.assignedElements();for(let e=0;e<t.length;e++){let o=t[e];this.changeItemStyle(o,e)}}changeItemStyle(e,t){let o=e.classList;o.value="",o.add("FLEX_ITEM"),this.flexItemProperties.forEach((e=>{o.add(e)}));let i=e.getAttribute("style");if(null===i)e.setAttribute("style",this.getFlexItemStyle(t)+";");else{let o=i.split(";");i="",o.forEach((e=>{e.length>0&&-1===e.lastIndexOf("flex-basis")&&-1===e.lastIndexOf("max-width")&&(i+=e+";")})),i+=this.getFlexItemStyle(t)+";",e.setAttribute("style",i)}}getFlexItemStyle(e){let t=this.flexItemBasisValues[e]?this.flexItemBasisValues[e]:this.flexItemBasisValue;return"flex-basis: ".concat(t).concat(";max-width: ").concat(t)}toContainerPropertiesString(e){let t="FLEX_CONTAINER";return e.forEach((e=>{t=t.concat(" ").concat(e)})),t}};p.styles=r.css`
    :host,
    *,
    ::slotted(*) {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
    }

    .FLEX_CONTAINER,
    ::slotted(.FLEX_CONTAINER) {
      margin: auto;
      display: flex;
      overflow: auto;
      box-sizing: border-boxed;
    }

    .CONTAINER_WIDTH_MIN_CONTENT,
    ::slotted(.CONTAINER_WIDTH_MIN_CONTENT) {
      width: min-content;
      height: min-content;
    }

    .CONTAINER_HEIGHT_100,
    ::slotted(.CONTAINER_HEIGHT_100) {
      height: 100%;
    }

    .CONTAINER_WIDTH_AUTO,
    ::slotted(.CONTAINER_WIDTH_AUTO) {
      width: auto;
    }

    .CONTAINER_WIDTH_100,
    ::slotted(.CONTAINER_WIDTH_100) {
      width: 100%;
    }

    .CONTAINER_WIDTH_75,
    ::slotted(.CONTAINER_WIDTH_75) {
      width: 75%;
    }

    .CONTAINER_WIDTH_50,
    ::slotted(.CONTAINER_WIDTH_50) {
      width: 50%;
    }

    .CONTAINER_WIDTH_25,
    ::slotted(.CONTAINER_WIDTH_25) {
      width: 25%;
    }

    .FLEX_ITEM,
    ::slotted(.FLEX_ITEM) {
      box-sizing: border-box;
      overflow: auto;
    }

    .KEYLINE_SIZE_LITTLE,
    ::slotted(.KEYLINE_SIZE_LITTLE) {
      padding-right: var(--space-little);
      padding-bottom: var(--space-little);
    }

    .KEYLINE_SIZE_SMALL,
    ::slotted(.KEYLINE_SIZE_SMALL) {
      padding-right: var(--space-small);
      padding-bottom: var(--space-small);
    }

    .KEYLINE_SIZE_MEDIUM,
    ::slotted(.KEYLINE_SIZE_MEDIUM) {
      padding-right: var(--space-medium);
      padding-bottom: var(--space-medium);
    }

    .KEYLINE_SIZE_BIG,
    ::slotted(.KEYLINE_SIZE_BIG) {
      padding-right: var(--space-big);
      padding-bottom: var(--space-big);
    }

    .KEYLINE_SIZE_MAX,
    ::slotted(.KEYLINE_SIZE_MAX) {
      padding-right: var(--space-max);
      padding-bottom: var(--space-max);
    }

    .KEYLINE_ALIGNMENT_HORIZONTAL,
    ::slotted(.KEYLINE_ALIGNMENT_HORIZONTAL) {
      padding-bottom: 0;
    }

    .KEYLINE_ALIGNMENT_VERTICAL,
    ::slotted(.KEYLINE_ALIGNMENT_VERTICAL) {
      padding-right: 0;
    }

    .KEYLINE_SIZE_ALIGNMENT_BOTH,
    ::slotted(.KEYLINE_SIZE_ALIGNMENT_BOTH) {
      padding: 0;
    }

    @media only screen and (max-width: 1280px) and (orientation: portrait) {
      .FLEX_CONTAINER.TABLET_HORIZONTAL_PADDING {
        padding-left: var(--space-normal);
        padding-right: var(--space-normal);
      }

      .FLEX_CONTAINER.TABLET_VERTICAL_PADDING {
        padding-top: var(--space-normal);
        padding-bottom: var(--space-normal);
      }

      .FLEX_CONTAINER.TABLET_MAX_WIDTH,
      ::slotted(.FLEX_CONTAINER.TABLET_MAX_WIDTH) {
        width: 100%;
      }

      ::slotted(.FLEX_ITEM.TABLET_MAX_WIDTH),
      .FLEX_ITEM.TABLET_MAX_WIDTH {
        flex-basis: 100% !important;
        max-width: 100% !important;
      }
    }

    @media only screen and (max-width: 768px) and (orientation: portrait) {
      .FLEX_CONTAINER.SMARTPHONE_HORIZONTAL_PADDING {
        padding-left: var(--space-big);
        padding-right: var(--space-big);
      }

      .FLEX_CONTAINER.SMARTPHONE_VERTICAL_PADDING {
        padding-top: var(--space-big);
        padding-bottom: var(--space-big);
      }

      .FLEX_CONTAINER.SMARTPHONE_MAX_WIDTH,
      ::slotted(.FLEX_CONTAINER.SMARTPHONE_MAX_WIDTH) {
        width: 100%;
      }

      ::slotted(.FLEX_ITEM.SMARTPHONE_MAX_WIDTH),
      .FLEX_ITEM.SMARTPHONE_MAX_WIDTH {
        flex-basis: 100% !important;
        max-width: 100% !important;
      }
    }
  `,i([r.property(),n("design:type",String)],p.prototype,"flexDirection",void 0),i([r.property(),n("design:type",String)],p.prototype,"flexWrap",void 0),i([r.property(),n("design:type",String)],p.prototype,"flexJustifyContent",void 0),i([r.property(),n("design:type",String)],p.prototype,"flexAlignItems",void 0),i([r.property(),n("design:type",String)],p.prototype,"flexAlignContent",void 0),i([r.property(),n("design:type",Array)],p.prototype,"flexContainerProperties",void 0),i([r.property(),n("design:type",Array)],p.prototype,"flexItemProperties",void 0),i([r.property(),n("design:type",String)],p.prototype,"flexItemBasisValue",void 0),i([r.property(),n("design:type",Array)],p.prototype,"flexItemBasisValues",void 0),i([r.query("#slotElement"),n("design:type",Object)],p.prototype,"slotElement",void 0),p=i([r.customElement("nidoca-flex-container")],p),t.NidocaFlex=p},6205:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFloatingContainer=void 0;const r=o(8789);let a=class extends r.LitElement{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return r.html`
      <slot
        class="FLOATING"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(e,t,o,i,n,r){return"height:".concat(e).concat(";").concat("width:").concat(t).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(i).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(r).concat(";")}};a.styles=r.css`
    .FLOATING {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,i([r.property(),n("design:type",String)],a.prototype,"height",void 0),i([r.property(),n("design:type",String)],a.prototype,"width",void 0),i([r.property(),n("design:type",String)],a.prototype,"left",void 0),i([r.property(),n("design:type",String)],a.prototype,"top",void 0),i([r.property(),n("design:type",String)],a.prototype,"right",void 0),i([r.property(),n("design:type",String)],a.prototype,"bottom",void 0),a=i([r.customElement("nidoca-floating-container")],a),t.NidocaFloatingContainer=a},8220:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormAbstractInputElement=void 0;const i=o(8789);class n extends i.LitElement{}t.NidocaFormAbstractInputElement=n},1564:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormCombobox=void 0;const a=o(8789),s=o(449),c=o(1021),l=o(8220);let d=class extends l.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.name="",this.label="",this.options=[],this.required=!1,this.size=1,this.multiple=!1}render(){return a.html`
      <nidoca-inputframe
        label="${this.label}"
        .errorText="${this.errorText}"
        .infoText="${this.infoText}"
        .warningText="${this.warningText}"
      >
        <select
          id="selectElement"
          name="${this.name}"
          size="${this.size}"
          ?required="${this.required}"
          ?multiple="${this.multiple}"
          @change="${()=>this.change()}"
        >
          ${c.guard([this.value,this.options],(()=>a.html`
              ${s.repeat(this.options,(e=>null==e?a.html` <option></option>`:this.isSelectedOption(e)?a.html` <option value="${e.key}" selected>${e.value}</option> `:a.html` <option value="${e.key}">${e.value}</option> `))}
            `))}
        </select>
      </nidoca-inputframe>
    `}getOutputData(){let e=this.value;if(null!=this.selectElement&&this.multiple){e=[];for(let t=0,o=this.selectElement.options.length;t<o;t++){let o=this.selectElement.options[t];o.selected&&e.push(o.value)}}else null!=this.selectElement&&(e=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:e}}focused(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}focusout(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}change(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}dispatchOutputDataChangeEvent(){return r(this,void 0,void 0,(function*(){if(this.validate()){let e=new CustomEvent("nidoca-form-combobox-event-change",{detail:this.getOutputData(),bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}}))}validate(){return this.errorText=void 0,null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),null==this.errorText}isSelectedOption(e){if(this.multiple){let e=!1;for(let t of this.value)if(e=this.value===t.value,e)return!0}return this.value===e.value}static enumToOptions(e,t=!0){let o=[];return t&&o.push({key:"",value:""}),Object.keys(e).forEach((t=>{o.push({key:t,value:e[t]})})),o}};d.styles=a.css`
    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
    }

    select option {
      color: inherit;
      background: inherit;
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
  `,i([a.property(),n("design:type",String)],d.prototype,"name",void 0),i([a.property(),n("design:type",Object)],d.prototype,"value",void 0),i([a.property(),n("design:type",String)],d.prototype,"label",void 0),i([a.property(),n("design:type",Array)],d.prototype,"options",void 0),i([a.property(),n("design:type",Boolean)],d.prototype,"required",void 0),i([a.property(),n("design:type",Object)],d.prototype,"errorText",void 0),i([a.property(),n("design:type",Object)],d.prototype,"infoText",void 0),i([a.property(),n("design:type",Object)],d.prototype,"warningText",void 0),i([a.property(),n("design:type",Number)],d.prototype,"size",void 0),i([a.property(),n("design:type",Boolean)],d.prototype,"multiple",void 0),i([a.query("#selectElement"),n("design:type",Object)],d.prototype,"selectElement",void 0),d=i([a.customElement("nidoca-form-combobox")],d),t.NidocaFormCombobox=d},7178:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormDate=t.DateType=void 0;const a=o(8789),s=o(8220);var c;!function(e){e.DATE="date",e.DATETIME_LOCAL="datetime-local",e.MONTH="month",e.TIME="time",e.WEEK="week"}(c=t.DateType||(t.DateType={}));let l=class extends s.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.dateType=c.DATE,this.name="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.multiple=!1}render(){return a.html`
      <nidoca-inputframe
        label="${this.label}"
        .errorText="${this.errorText}"
        .infoText="${this.infoText}"
        .warningText="${this.warningText}"
      >
        <input
          id="inputElement"
          name="${this.name}"
          type="${this.dateType}"
          value="${this.value}"
          placeholder="${this.placeholder?this.placeholder:this.label}"
          size="${this.size}"
          minlength="${this.minlength}"
          maxlength="${this.maxlength}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?multiple="${this.multiple}"
          @keyup="${this.handleKeyup}"
          @change="${()=>this.handleChange()}"
          @focus="${()=>this.handleFocus()}"
          @focusout="${()=>this.handleFocusout()}"
        />
      </nidoca-inputframe>
    `}getOutputData(){var e;let t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}handleFocus(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}handleFocusout(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}handleChange(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}handleKeyup(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}dispatchOutputDataChangeEvent(){return r(this,void 0,void 0,(function*(){if(this.validate()){let e=new CustomEvent("nidoca-form-text-event-change",{detail:this.getOutputData(),bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}}))}validate(){return this.errorText=void 0,null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),null==this.errorText}};l.styles=a.css`
    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
    }
    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `,i([a.property(),n("design:type",String)],l.prototype,"dateType",void 0),i([a.property(),n("design:type",String)],l.prototype,"name",void 0),i([a.property(),n("design:type",Object)],l.prototype,"value",void 0),i([a.property(),n("design:type",String)],l.prototype,"label",void 0),i([a.property(),n("design:type",Boolean)],l.prototype,"required",void 0),i([a.property(),n("design:type",String)],l.prototype,"placeholder",void 0),i([a.property(),n("design:type",Boolean)],l.prototype,"disabled",void 0),i([a.property(),n("design:type",Boolean)],l.prototype,"checked",void 0),i([a.property(),n("design:type",Boolean)],l.prototype,"multiple",void 0),i([a.property(),n("design:type",Object)],l.prototype,"maxlength",void 0),i([a.property(),n("design:type",Object)],l.prototype,"minlength",void 0),i([a.property(),n("design:type",Object)],l.prototype,"min",void 0),i([a.property(),n("design:type",Object)],l.prototype,"max",void 0),i([a.property(),n("design:type",Object)],l.prototype,"step",void 0),i([a.property(),n("design:type",Object)],l.prototype,"size",void 0),i([a.property(),n("design:type",Object)],l.prototype,"errorText",void 0),i([a.property(),n("design:type",Object)],l.prototype,"infoText",void 0),i([a.property(),n("design:type",Object)],l.prototype,"warningText",void 0),i([a.query("#inputElement"),n("design:type",Object)],l.prototype,"inputElement",void 0),l=i([a.customElement("nidoca-form-date")],l),t.NidocaFormDate=l},8224:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormInputframe=void 0;const a=o(8789),s=o(6523),c=o(6110),l=o(4237),d=o(5578),p=o(1565);let u=class extends a.LitElement{constructor(){super(...arguments),this.label="",this.selected=!1}render(){return a.html`
      <nidoca-border
        class="main"
        .borderSize="${this.selected?s.BorderSize.THIN:s.BorderSize.MEDIUM}"
        .borderProperties="${[s.BorderProperties.FULL_WIDTH,this.selected?s.BorderProperties.BOTTOM_SELECTED:s.BorderProperties.BOTTOM]}"
        @mouseover="${()=>this.mouseover()}"
        @mouseout="${()=>this.mouseout()}"
      >
        <nidoca-spacer spacerSize="${p.SpacerSize.SMALL}" spacerAlignment="${p.SpacerAlignment.BOTH}">
          <nidoca-flex-container
            .flexContainerProperties="${[l.FlexContainerProperties.CONTAINER_WIDTH_100,l.FlexContainerProperties.CONTAINER_HEIGHT_100]}"
            .flexAlignContent="${l.FlexAlignContent.CENTER}"
            flexItemBasisValue="100%"
          >
            <nidoca-typography .typographyType="${d.TypographyType.CAPTION}" text="${this.label}"></nidoca-typography>
            <slot></slot>
          </nidoca-flex-container>
        </nidoca-spacer>
      </nidoca-border>

      <nidoca-flex-container
        .flexContainerProperties="${[l.FlexContainerProperties.CONTAINER_WIDTH_100,l.FlexContainerProperties.CONTAINER_HEIGHT_100]}"
        .flexAlignContent="${l.FlexAlignContent.CENTER}"
        flexItemBasisValue="100%"
        ><nidoca-visible visibleType="${this.infoText?c.VisibleType.NORMAL:c.VisibleType.HIDE}">
          <nidoca-typography .typographyType="${d.TypographyType.BODY1}" text="${this.infoText}"></nidoca-typography>
        </nidoca-visible>

        <nidoca-visible visibleType="${this.warningText?c.VisibleType.NORMAL:c.VisibleType.HIDE}">
          <nidoca-typography
            style="color:var(--app-color-warning-background)"
            .typographyType="${d.TypographyType.BODY1}"
            text="${this.warningText}"
          ></nidoca-typography>
        </nidoca-visible>

        <nidoca-visible visibleType="${this.errorText?c.VisibleType.NORMAL:c.VisibleType.HIDE}">
          <nidoca-typography
            style="color:var(--app-color-error-background)"
            .typographyType="${d.TypographyType.BODY1}"
            text="${this.errorText}"
          ></nidoca-typography> </nidoca-visible
      ></nidoca-flex-container>
    `}mouseover(){return r(this,void 0,void 0,(function*(){this.selected=!0}))}mouseout(){return r(this,void 0,void 0,(function*(){this.selected=!1}))}};u.styles=a.css`
    .main {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
    }
  `,i([a.property(),n("design:type",String)],u.prototype,"label",void 0),i([a.property(),n("design:type",Object)],u.prototype,"errorText",void 0),i([a.property(),n("design:type",Object)],u.prototype,"infoText",void 0),i([a.property(),n("design:type",Object)],u.prototype,"warningText",void 0),i([a.property(),n("design:type",Boolean)],u.prototype,"selected",void 0),u=i([a.customElement("nidoca-inputframe")],u),t.NidocaFormInputframe=u},5793:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormText=t.TextType=void 0;const a=o(8789),s=o(8220);var c;!function(e){e.EMAIL="email",e.HIDDEN="hidden",e.NUMBER="number",e.PASSWORD="password",e.TEL="tel",e.TEXT="text",e.URL="url"}(c=t.TextType||(t.TextType={}));let l=class extends s.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.textType=c.TEXT,this.name="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.multiple=!1}render(){return a.html`
      <nidoca-inputframe
        label="${this.label}"
        .errorText="${this.errorText}"
        .infoText="${this.infoText}"
        .warningText="${this.warningText}"
      >
        <input
          id="inputElement"
          name="${this.name}"
          type="${this.textType}"
          value="${this.value}"
          placeholder="${this.placeholder?this.placeholder:this.label}"
          size="${this.size}"
          minlength="${this.minlength}"
          maxlength="${this.maxlength}"
          min="${this.min}"
          max="${this.max}"
          step="${this.step}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?multiple="${this.multiple}"
          @keyup="${this.handleKeyup}"
          @change="${()=>this.handleChange()}"
          @focus="${()=>this.handleFocus()}"
          @focusout="${()=>this.handleFocusout()}"
        />
      </nidoca-inputframe>
    `}getOutputData(){var e;let t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}handleFocus(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}handleFocusout(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}handleChange(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}handleKeyup(){return r(this,void 0,void 0,(function*(){this.dispatchOutputDataChangeEvent()}))}dispatchOutputDataChangeEvent(){return r(this,void 0,void 0,(function*(){if(this.validate()){let e=new CustomEvent("nidoca-form-text-event-change",{detail:this.getOutputData(),bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}}))}validate(){return this.errorText=void 0,null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),null==this.errorText}};l.styles=a.css`
    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
    }
    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `,i([a.property(),n("design:type",String)],l.prototype,"textType",void 0),i([a.property(),n("design:type",String)],l.prototype,"name",void 0),i([a.property(),n("design:type",Object)],l.prototype,"value",void 0),i([a.property(),n("design:type",String)],l.prototype,"label",void 0),i([a.property(),n("design:type",Boolean)],l.prototype,"required",void 0),i([a.property(),n("design:type",String)],l.prototype,"placeholder",void 0),i([a.property(),n("design:type",Boolean)],l.prototype,"disabled",void 0),i([a.property(),n("design:type",Boolean)],l.prototype,"checked",void 0),i([a.property(),n("design:type",Boolean)],l.prototype,"multiple",void 0),i([a.property(),n("design:type",Object)],l.prototype,"maxlength",void 0),i([a.property(),n("design:type",Object)],l.prototype,"minlength",void 0),i([a.property(),n("design:type",Object)],l.prototype,"min",void 0),i([a.property(),n("design:type",Object)],l.prototype,"max",void 0),i([a.property(),n("design:type",Object)],l.prototype,"step",void 0),i([a.property(),n("design:type",Object)],l.prototype,"size",void 0),i([a.property(),n("design:type",Object)],l.prototype,"errorText",void 0),i([a.property(),n("design:type",Object)],l.prototype,"infoText",void 0),i([a.property(),n("design:type",Object)],l.prototype,"warningText",void 0),i([a.query("#inputElement"),n("design:type",Object)],l.prototype,"inputElement",void 0),l=i([a.customElement("nidoca-form-text")],l),t.NidocaFormText=l},1795:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaForm=t.FormProperties=t.NidocaFormOutputData=void 0;const r=o(8789),a=o(8220);t.NidocaFormOutputData=class{constructor(){this.formData=FormData.prototype}},function(e){e.ROW_LAYOUT="ROW_LAYOUT",e.COLUMN_LAYOUT="COLUMN_LAYOUT",e.FULL_WIDTH="FULL_WIDTH"}(t.FormProperties||(t.FormProperties={}));let s=class extends r.LitElement{constructor(){super(...arguments),this.formProperties=[],this.autocomplete=!0}render(){return r.html`
      <form
        class="${this.toFormPropertiesString(this.formProperties)}"
        id="htmlForm"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        autocomplete="${this.autocomplete}"
      >
        <slot name="header"></slot>
        <slot name="errorMessages" style="color: var(--app-color-error);"></slot>
        <slot id="slotElement"></slot>
        <slot name="footer"></slot>
      </form>
    `}toFormPropertiesString(e){let t="FORM";return e.forEach((e=>{t=t.concat(" ").concat(e)})),t}getInputElements(e){if(null==e)return[];let t=[],o=e.assignedElements({flatten:!0});for(let e=0;e<o.length;e++){let i=o[e];this.recursiveInputElementSearch(i,t)}return t}validate(){let e=!0;for(let t of this.getInputElements(this.slotElement))if(!t.validate()){e=!1;break}return e}getOutputData(){let e=new FormData,t={};for(let o of this.getInputElements(this.slotElement)){let i=o.getOutputData();t[i.key]=i.value,e.append(i.key,i.value)}let o={};return o.jsonObject=t,o.formData=e,o}formButtonClicked(e){switch(console.log("formButton clicked: "+e.detail),e.detail){case"submitButton":this.dispatchEvent(new CustomEvent("nidoca-event-form-submit-button-clicked",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}}recursiveInputElementSearch(e,t){if(e instanceof a.NidocaFormAbstractInputElement)t.push(e);else if(e.hasChildNodes())for(let o of e.children)this.recursiveInputElementSearch(o,t)}};s.styles=r.css`
    .FORM {
      box-sizing: border-box;
    }
    .COLUMN_LAYOUT {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: stretch;
      align-content: space-around;
    }
    .ROW_LAYOUT {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
    .FULL_WIDTH {
      width: 100%;
    }

    @media only screen and (orientation: portrait) {
      .FORM {
        width: 100%;
      }
    }
  `,i([r.property(),n("design:type",Array)],s.prototype,"formProperties",void 0),i([r.property(),n("design:type",Boolean)],s.prototype,"autocomplete",void 0),i([r.query("#slotElement"),n("design:type",Object)],s.prototype,"slotElement",void 0),i([r.query("#htmlForm"),n("design:type",Object)],s.prototype,"htmlForm",void 0),s=i([r.customElement("nidoca-form")],s),t.NidocaForm=s},2161:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaGrid=t.GridAlignItems=t.GridJustifyItems=void 0;const r=o(8789);!function(e){e.START="start",e.END="end",e.CENTER="center",e.STRETCH="stretch"}(t.GridJustifyItems||(t.GridJustifyItems={})),function(e){e.START="start",e.END="end",e.CENTER="center",e.STRETCH="stretch"}(t.GridAlignItems||(t.GridAlignItems={}));let a=class extends r.LitElement{constructor(){super(...arguments),this.gridTemplateRows=[],this.gridTemplateColumns=[],this.gridJustifyItems="",this.gridAlignItems="",this.height="",this.minHeight="",this.width="",this.minWidth=""}render(){return r.html`
      <div
        class="GRID_CONTAINER"
        style="${this.toGridJustifyItems(this.gridJustifyItems)}${this.toGridAlignItems(this.gridAlignItems)}${this.toGridTemplateRowsStyle(this.gridTemplateRows)}${this.toGridTemplateColumnsStyle(this.gridTemplateColumns)}${this.toHeightStyle(this.height)}${this.toMinHeightStyle(this.minHeight)}${this.toWidthStyle(this.width)}${this.toMinWidthStyle(this.minWidth)}"
      >
        <slot></slot>
      </div>
    `}toGridTemplateRowsStyle(e){let t="";return e.length>0&&(t="grid-template-rows:",e.forEach((e=>{t=t.concat(" ").concat(e)})),t=t.concat(";")),t}toGridTemplateColumnsStyle(e){let t="";return e.length>0&&(t="grid-template-columns:",e.forEach((e=>{t=t.concat(" ").concat(e)})),t=t.concat(";")),t}toHeightStyle(e){return e.length>0?"height:".concat(e).concat(";"):""}toMinHeightStyle(e){return e.length>0?"min-height:".concat(e).concat(";"):""}toWidthStyle(e){return e.length>0?"width:".concat(e).concat(";"):""}toMinWidthStyle(e){return e.length>0?"min-height:".concat(e).concat(";"):""}toGridJustifyItems(e){return e?"justify-items:".concat(e).concat(";"):""}toGridAlignItems(e){return e?"align-items:".concat(e).concat(";"):""}};a.styles=r.css`
    *,
    ::slotted(*) {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
    }

    .GRID_CONTAINER,
    ::slotted(.GRID_CONTAINER) {
      display: grid;
      box-sizing: border-box;
    }
  `,i([r.property(),n("design:type",Array)],a.prototype,"gridTemplateRows",void 0),i([r.property(),n("design:type",Array)],a.prototype,"gridTemplateColumns",void 0),i([r.property(),n("design:type",String)],a.prototype,"gridJustifyItems",void 0),i([r.property(),n("design:type",String)],a.prototype,"gridAlignItems",void 0),i([r.property(),n("design:type",String)],a.prototype,"height",void 0),i([r.property(),n("design:type",String)],a.prototype,"minHeight",void 0),i([r.property(),n("design:type",String)],a.prototype,"width",void 0),i([r.property(),n("design:type",String)],a.prototype,"minWidth",void 0),a=i([r.customElement("nidoca-grid-container")],a),t.NidocaGrid=a},4791:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaIcon=t.IconShadowType=void 0;const a=o(8789),s=o(6523);!function(e){e.NONE="NONE",e.DEFAULT_SHADOW="DEFAULT_SHADOW",e.SHADOW_1="SHADOW_1",e.SHADOW_2="SHADOW_2",e.SHADOW_3="SHADOW_3"}(t.IconShadowType||(t.IconShadowType={}));let c=class extends a.LitElement{constructor(){super(...arguments),this.color="",this.backgroundColor="",this.iconShadowType=s.ShadowType.NONE,this.size=24,this.sizeUnit="px",this.iconTitle="",this.withIconSpace=!0,this.round=!1,this.clickable=!1,this.deactivated=!1}render(){return a.html`
      <nidoca-spacer size="${this.withIconSpace?String(this.size/2).concat(this.sizeUnit):"0px"}">
        <span
          class="icon-container ${this.iconShadowType} ${this.clickable&&!this.deactivated?"clickable":""} ${this.round?"ROUND":""} ${this.deactivated?"deactivated":""}"
          title="${this.title}"
          @click="${this.clicked}"
          style="${"line-height: ".concat(this.size.toString()).concat(this.sizeUnit).concat(";")}${"width: ".concat(this.size.toString()).concat(this.sizeUnit).concat(";")}${this.backgroundColor?"background-color:".concat(this.backgroundColor).concat(";"):""} ${this.round?"height:".concat((2*this.size).toString()).concat("px;").concat("width:").concat((2*this.size).toString()).concat("px;"):""}"
          ><i
            class="material-icons"
            style="${this.color.length>0?"color: ".concat(this.color).concat(";"):""} ${null!=this.size?"font-size: ".concat(this.size.toString()).concat(this.sizeUnit).concat(";"):""}"
            >${this.icon}</i
          ><slot></slot>
        </span>
      </nidoca-spacer>
    `}clicked(){return r(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){let e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};c.styles=a.css`
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: var(--icon-size);
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

    .icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: inherit;
      color: inherit;
    }

    .icon-container:active {
      color: var(--app-color-secondary-background);
    }

    .ROUND {
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }

    .DEFAULT_SHADOW {
      -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_1 {
      -moz-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    .SHADOW_2 {
      -moz-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_3 {
      -moz-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      -webkit-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
    }

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      color: var(--app-color-surface-background-dark);
    }
  `,i([a.property(),n("design:type",Object)],c.prototype,"icon",void 0),i([a.property(),n("design:type",String)],c.prototype,"color",void 0),i([a.property(),n("design:type",String)],c.prototype,"backgroundColor",void 0),i([a.property(),n("design:type",String)],c.prototype,"iconShadowType",void 0),i([a.property(),n("design:type",Number)],c.prototype,"size",void 0),i([a.property(),n("design:type",String)],c.prototype,"sizeUnit",void 0),i([a.property(),n("design:type",String)],c.prototype,"iconTitle",void 0),i([a.property(),n("design:type",Boolean)],c.prototype,"withIconSpace",void 0),i([a.property(),n("design:type",Boolean)],c.prototype,"round",void 0),i([a.property(),n("design:type",Boolean)],c.prototype,"clickable",void 0),i([a.property(),n("design:type",Boolean)],c.prototype,"deactivated",void 0),c=i([a.customElement("nidoca-icon")],c),t.NidocaIcon=c},1541:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaLink=t.TargetType=void 0;const r=o(8789);var a;!function(e){e.BLANK="_blank",e.SELF="_self",e.PARENT="_parent",e.TOP="_top"}(a=t.TargetType||(t.TargetType={}));let s=class extends r.LitElement{constructor(){super(...arguments),this.text="",this.href="",this.targetType=a.SELF}render(){return r.html` <a href="${this.href}" target="${this.targetType}">${this.text}<slot></slot></a> `}};s.styles=r.css`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,i([r.property(),n("design:type",String)],s.prototype,"text",void 0),i([r.property(),n("design:type",String)],s.prototype,"href",void 0),i([r.property(),n("design:type",String)],s.prototype,"targetType",void 0),s=i([r.customElement("nidoca-link")],s),t.NidocaLink=s},8877:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaListItem=void 0;const r=o(8789),a=o(2161),s=o(6110);let c=class extends r.LitElement{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1}update(e){super.update(e),null!=e.get("selectionMode")&&(this.selectionMode||(this.selected=!1))}render(){return r.html`
      <nidoca-ripple>
        <nidoca-grid-container
          class="LIST_ITEM"
          .gridJustifyItems="${a.GridJustifyItems.START}"
          .gridAlignItems="${a.GridAlignItems.CENTER}"
          .gridTemplateRows="${["1fr"]}"
          .gridTemplateColumns="${["auto","1fr"]}"
        >
          <nidoca-visible visibleType="${this.selectionMode?s.VisibleType.NORMAL:s.VisibleType.HIDE}">
            <nidoca-icon
              @click="${()=>this.switchSelected()}"
              icon="${this.selected?"check_box":"check_box_outline_blank"}"
            ></nidoca-icon>
          </nidoca-visible>
          <slot class="LIST_ITEM_SLOT" @click="${()=>this.itemClicked()}"></slot> </nidoca-grid-container
      ></nidoca-ripple>
    `}itemClicked(){this.dispatchEvent(new CustomEvent("nidoca-event-list-item-clicked",{detail:this,bubbles:!0,composed:!0}))}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};c.styles=r.css`
    .LIST_ITEM_SLOT {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      width: 100%;
    }

    .LIST_ITEM {
      cursor: pointer;
    }

    .LIST_ITEM:hover {
      background-color: var(--app-color-surface-background-light);
    }
  `,i([r.property(),n("design:type",Boolean)],c.prototype,"selectionMode",void 0),i([r.property(),n("design:type",Boolean)],c.prototype,"selected",void 0),c=i([r.customElement("nidoca-list-item")],c),t.NidocaListItem=c},547:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaList=void 0;const r=o(8789),a=o(8877);let s=class extends r.LitElement{constructor(){super(...arguments),this.selectionMode=!1}update(e){super.update(e),null!=e.get("selectionMode")&&this.getItems().forEach((e=>{e.selectionMode=this.selectionMode}))}render(){return r.html` <slot class="LIST_SLOT" id="slotElement"></slot> `}getItems(){let e=[];if(null!=this.slotElement){let t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){let i=t[o];i instanceof a.NidocaListItem&&e.push(i)}}return e}getSelectedItems(){let e=[];if(null!=this.slotElement){let t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){let i=t[o];i instanceof a.NidocaListItem&&i.selected&&e.push(i)}}return e}getSelectedIndexes(){let e=[];if(null!=this.slotElement){let t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){let i=t[o];i instanceof a.NidocaListItem&&i.selected&&e.push(o)}}return e}};s.styles=r.css`
    .LIST_SLOT {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,i([r.property(),n("design:type",Boolean)],s.prototype,"selectionMode",void 0),i([r.query("#slotElement"),n("design:type",Object)],s.prototype,"slotElement",void 0),s=i([r.customElement("nidoca-list")],s),t.NidocaList=s},4242:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaNavigationLink=void 0;const r=o(8789),a=o(1565),s=o(4237),c=o(5578);let l=class extends r.LitElement{constructor(){super(...arguments),this.icon="",this.text="",this.href="",this.rendered=!0}render(){return this.rendered?r.html`
          <div
            class="navItem"
            class="${"TODO: RouterService.getUniqueInstance().getPath()"==this.href?"navItem selected":"navItem"}"
          >
            <nidoca-spacer spacerSize="${a.SpacerSize.SMALL}" spacerAlignment="${a.SpacerAlignment.VERTICAL}">
              <nidoca-flex-container
                @click="${()=>this.linkClicked()}"
                .flexContainerProperties="${[s.FlexContainerProperties.CONTAINER_WIDTH_100]}"
                .flexItemProperties="${[]}"
                .flexDirection="${s.FlexDirection.ROW}"
                .flexWrap="${s.FlexWrap.NO_WRAP}"
                .flexJustifyContent="${s.FlexJustifyContent.SPACE_AROUND}"
                .flexAlignItems="${s.FlexAlignItems.CENTER}"
                .flexAlignContent="${s.FlexAlignContent.FLEX_START}"
                .flexItemBasisValues="${["auto","80%"]}"
              >
                <nidoca-icon icon="${this.icon}" .withIconSpace="${!1}"></nidoca-icon>
                <nidoca-typography typographyType="${c.TypographyType.BODY2}">${this.text}</nidoca-typography>
              </nidoca-flex-container>
            </nidoca-spacer>
          </div>
        `:r.html``}linkClicked(){let e="nidoca-event-link-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this.href,bubbles:!0,composed:!0}))}};l.styles=r.css`
    .navItem {
      cursor: pointer;
    }

    ::slotted(.navItem.selected),
    .navItem.selected,
    ::slotted(.navItem:hover),
    .navItem:hover,
    ::slotted(.navItem:active),
    .navItem:active {
      color: var(--app-color-primary-light);
      background-color: var(--app-color-primary-background-dark);
    }
  `,i([r.property(),n("design:type",String)],l.prototype,"icon",void 0),i([r.property(),n("design:type",String)],l.prototype,"text",void 0),i([r.property(),n("design:type",String)],l.prototype,"href",void 0),i([r.property(),n("design:type",Boolean)],l.prototype,"rendered",void 0),l=i([r.customElement("nidoca-navigation-link")],l),t.NidocaNavigationLink=l},6316:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaNavigationSection=void 0;const r=o(8789),a=o(4237),s=o(1565),c=o(5578);let l=class extends r.LitElement{constructor(){super(...arguments),this.text="",this.rendered=!0}render(){return this.rendered?r.html`
          <nidoca-flex-container
            .flexContainerProperties="${[a.FlexContainerProperties.CONTAINER_WIDTH_100]}"
            .flexItemProperties="${[]}"
            .flexDirection="${a.FlexDirection.ROW}"
            .flexWrap="${a.FlexWrap.NO_WRAP}"
            .flexJustifyContent="${a.FlexJustifyContent.FLEX_END}"
            .flexAlignItems="${a.FlexAlignItems.CENTER}"
            .flexAlignContent="${a.FlexAlignContent.FLEX_START}"
            flexItemBasisValue="100%"
          >
            <nidoca-spacer spacerSize="${s.SpacerSize.SMALL}" spacerAlignment="${s.SpacerAlignment.BOTH}">
              <nidoca-typography .typographyType="${c.TypographyType.H6}" text="${this.text}"></nidoca-typography>
            </nidoca-spacer>
          </nidoca-flex-container>
        `:r.html``}};l.styles=r.css``,i([r.property(),n("design:type",String)],l.prototype,"text",void 0),i([r.property(),n("design:type",Boolean)],l.prototype,"rendered",void 0),l=i([r.customElement("nidoca-navigation-section")],l),t.NidocaNavigationSection=l},9072:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaNavigation=t.NavigationStyle=t.NavigationType=void 0;const r=o(8789);var a,s;!function(e){e.DISMISSIBLE="DISMISSIBLE",e.PERMANENT="PERMANENT",e.MODAL="MODAL"}(a=t.NavigationType||(t.NavigationType={})),function(e){e.SURFACE="SURFACE",e.PRIMARY="PRIMARY",e.SECONDARY="SECONDARY"}(s=t.NavigationStyle||(t.NavigationStyle={}));let c=class extends r.LitElement{constructor(){super(...arguments),this.closed=!1,this.navigationType=a.PERMANENT,this.navigationStyle=s.PRIMARY}render(){return r.html`
      <div class="NAVIGATION ${this.navigationType} ${this.navigationStyle} ${this.closed?"CLOSED":""}">
        <slot name="contentBefore"></slot>
        <slot name="links"></slot>
        <slot name="contentAfter"></slot>
      </div>
    `}};c.styles=r.css`
    .SURFACE {
      background-color: var(--app-color-surface-background);
      color: var(--app-color-surface);
    }

    .PRIMARY {
      background-color: var(--app-color-primary-background);
      color: var(--app-color-primary);
    }

    .SECONDARY {
      background-color: var(--app-color-secondary-background);
      color: var(--app-color-secondary);
    }

    .NAVIGATION {
      height: 100%;
      width: var(--menu-size);
      transition: left 0.25s linear;
      position: fixed;
      z-index: 10;
      top: var(--toolbar-height);
      left: 0;
      overflow-x: hidden;
      margin-top: var(--toolbar-height);
    }

    .CLOSED {
      left: calc(-1 * var(--menu-size));
      transition: left 0.25s linear;
    }

    .DISMISSIBLE {
      height: 100vh;
      width: var(--menu-size);
      transition: left 0.25s linear;
      /* position: absolute;
   z-index: 11;
   top: 0;
   left: 0; */
      top: 0px;
      overflow-x: hidden;
      margin: 0;
      transition: all 0.15s ease;
      z-index: 11;
    }
    .PERMANENT {
      height: 100vh;
      width: var(--menu-size);
      transition: left 0.25s linear;
      /* position: absolute;
   z-index: 11;
   top: 0;
   left: 0; */
      top: 0px;
      overflow-x: hidden;
      margin: 0;
      transition: all 0.35s ease;
    }
    .MODAL {
      height: 100vh;
      width: var(--menu-size);
      transition: left 0.25s linear;
      position: fixed;
      z-index: 11;
      top: 0;
      left: 0;
      overflow-x: hidden;
      margin: 0;
    }
  `,i([r.property(),n("design:type",Boolean)],c.prototype,"closed",void 0),i([r.property(),n("design:type",String)],c.prototype,"navigationType",void 0),i([r.property(),n("design:type",String)],c.prototype,"navigationStyle",void 0),c=i([r.customElement("nidoca-navigation")],c),t.NidocaNavigation=c},9637:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaProgress=t.ProgressType=void 0;const r=o(8789),a=o(8789);var s;!function(e){e.PROGRESS="PROGRESS",e.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR"}(s=t.ProgressType||(t.ProgressType={}));let c=class extends a.LitElement{constructor(){super(...arguments),this.progressType=s.PROGRESS}render(){return r.html` <progress class="${this.progressType}"></progress> `}};c.styles=r.css`
    .PROGRESS {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border: none;
      height: 0.25em;
      color: var(--app-color-primary-background);
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
      color: var(--app-color-primary-background);
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
  `,i([r.property(),n("design:type",String)],c.prototype,"progressType",void 0),c=i([r.customElement("nidoca-progress")],c),t.NidocaProgress=c},4097:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaRichMedia=t.RichMediaProperties=t.RichMediaType=void 0;const r=o(8789);var a;!function(e){e.IMG="IMG",e.MOVIE="MOVIE"}(a=t.RichMediaType||(t.RichMediaType={})),function(e){e.ROUND="ROUND",e.CLICKABLE="CLICKABLE",e.ZOOM_WRAPPED="ZOOM_WRAPPED",e.FULL_WIDTH="FULL_WIDTH"}(t.RichMediaProperties||(t.RichMediaProperties={}));let s=class extends r.LitElement{constructor(){super(...arguments),this.src="",this.richMediaType=a.IMG,this.richMediaProperties=[]}render(){return this.richMediaType==a.IMG?r.html`
          <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"><img src="${this.src}" /></span>
        `:r.html`
          <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}">
            <iframe
              src="${this.src}"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe
          ></span>
        `}toRichMediaPropertiesString(e){let t="";return e.forEach((e=>{t=t.concat(" ").concat(e)})),t}};s.styles=r.css`
    :host,
    span {
      margin: 0;
      padding: 0;
      font-size: 0;
      letter-spacing: 0;
      line-height: 0;
    }

    img,
    iframe {
      box-sizing: border-box;
      height: auto;
      width: auto;
    }

    .CLICKABLE {
      cursor: pointer;
    }

    .ZOOM_WRAPPED {
      overflow: hidden;
    }
    .ZOOM_WRAPPED img:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }

    .FULL_WIDTH {
      box-sizing: border-box;
    }
    .FULL_WIDTH img,
    .FULL_WIDTH iframe {
      width: 100%;
    }

    .ROUND {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 75%;
      box-sizing: border-box;
    }
    .ROUND img,
    .ROUND iframe {
      padding: 0.25em;
      border-radius: 50%;
      width: 100%;
    }

    @media only screen and (max-width: 768px), only screen and (orientation: portrait) {
    }
  `,i([r.property(),n("design:type",String)],s.prototype,"src",void 0),i([r.property(),n("design:type",String)],s.prototype,"richMediaType",void 0),i([r.property(),n("design:type",Array)],s.prototype,"richMediaProperties",void 0),s=i([r.customElement("nidoca-rich-media")],s),t.NidocaRichMedia=s},620:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaSearchBar=void 0;const r=o(8789),a=o(2161),s=o(6523);let c=class extends r.LitElement{constructor(){super(...arguments),this.placeholder="",this.value=""}render(){return r.html`
      <nidoca-border
        .borderProperties="${[s.BorderProperties.ALL,s.BorderProperties.FULL_WIDTH]}"
        .borderSize="${s.BorderSize.THIN}"
        .shadowType="${s.ShadowType.NONE}"
      >
        <nidoca-grid-container
          .gridJustifyItems="${a.GridJustifyItems.STRETCH}"
          .gridAlignItems="${a.GridAlignItems.STRETCH}"
          .gridTemplateRows="${["1fr"]}"
          .gridTemplateColumns="${["auto","1fr"]}"
        >
          <nidoca-icon icon="search"></nidoca-icon>
          <input
            class="input-field"
            id="htmlInputElement"
            type="search"
            @keyup="${()=>this.textfieldKeyUp()}"
            placeholder="${this.placeholder}"
            value="${this.value}"
          />
        </nidoca-grid-container>
      </nidoca-border>
    `}getOutputData(){let e="";return null!=this.htmlInputElement&&(e=this.htmlInputElement.value),e}textfieldKeyUp(){this.dispatchEvent(new CustomEvent("nidoca-event-search",{detail:this.getOutputData(),bubbles:!0,composed:!0}))}};c.styles=r.css`
    .input-field {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      line-height: var(--line-height);
      height: auto;
    }

    .input-field:focus,
    .input-field:valid {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `,i([r.property(),n("design:type",String)],c.prototype,"placeholder",void 0),i([r.property(),n("design:type",String)],c.prototype,"value",void 0),i([r.query("#htmlInputElement"),n("design:type",Object)],c.prototype,"htmlInputElement",void 0),c=i([r.customElement("nidoca-search-bar")],c),t.NidocaSearchBar=c},8509:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaShowcase=void 0;const n=o(8789),r=o(8789),a=o(1565),s=o(5793);let c=class extends r.LitElement{render(){return n.html`
      <nidoca-spacer spacerSize="${a.SpacerSize.NORMAL}">
        <nidoca-form>
          <nidoca-form-combobox
            name="opinionLikeSite"
            label="Wie findest du diese Seite ?"
            value="ok"
            .options="${[{key:"",value:"Bitte wählen"},{key:"verryGood",value:"Sehr gut"},{key:"ok",value:"Ein  bisschen gut"},{key:"bad",value:"Schlecht"}]}"
            required="true"
            infoText="Wie findest du den diese tolle Seite"
            warningText="Du weißt ja was du auswählen musst oder ? :-)"
          >
          </nidoca-form-combobox>

          <nidoca-form-combobox
            name="languages"
            label="Welche Sprachen sprichst du ?"
            value="france"
            multiple="true"
            size="5"
            .options="${[{key:"german",value:"Deutsch"},{key:"english",value:"Englisch"},{key:"spanish",value:"Spanisch"},{key:"france",value:"Französisch"},{key:"japanese",value:"Japanisch"}]}"
            required="true"
            infoText="Gib hier die Sprachen ein die du sprichst"
            warningText="Bitte gib nur die ein, die du fließend sprichst"
          >
          </nidoca-form-combobox>

          <nidoca-form-text
            .textType="${s.TextType.TEXT}"
            name="name"
            label="Wie heißt du ?"
            value=""
            placeholder="Max Mustermann"
            required="true"
            min="1"
            max="100"
            minlength="2"
            minlength="100"
            infoText="Gib hier die Sprachen ein die du sprichst"
            warningText="Bitte gib nur die ein, die du fließend sprichst"
          >
          </nidoca-form-text>
        </nidoca-form>
      </nidoca-spacer>
    `}};c.styles=n.css``,c=i([n.customElement("nidoca-showcase")],c),t.NidocaShowcase=c},1565:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaSpacer=t.SpacerSize=t.SpacerAlignment=void 0;const r=o(8789);var a,s;!function(e){e.BOTH="both",e.HORIZONTAL="horizontalAlignment",e.VERTICAL="verticalAlignment"}(a=t.SpacerAlignment||(t.SpacerAlignment={})),function(e){e.ZERO="spacerZero",e.LITTLE="spaceLittle",e.SMALL="spaceSmall",e.MEDIUM="spaceMedium",e.NORMAL="spaceNormal",e.BIG="spaceBig",e.MAX="spaceMax"}(s=t.SpacerSize||(t.SpacerSize={}));let c=class extends r.LitElement{constructor(){super(...arguments),this.spacerSize=s.ZERO,this.spacerAlignment=a.BOTH,this.size=""}render(){return r.html`
      <span class="spacer ${this.spacerSize} ${this.spacerAlignment}" style="${this.toSizeStyle(this.size)}"
        ><slot></slot
      ></span>
    `}toSizeStyle(e){if(null==e||0==e.length)return"";switch(this.spacerAlignment){case a.VERTICAL:return"padding-top:".concat(e).concat(";").concat("padding-bottom:").concat(e).concat(";");case a.HORIZONTAL:return"padding-left:".concat(e).concat(";").concat("padding-right:").concat(e).concat(";");case a.BOTH:return"padding:".concat(e).concat(";")}return""}};c.styles=r.css`
    :host,
    ::slotted(:host) {
    }

    .spacer,
    ::slotted(.spacer) {
      box-sizing: border-box;
      display: block;
    }

    .horizontalAlignment,
    ::slotted(.horizontalAlignment) {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }

    .verticalAlignment,
    ::slotted(.verticalAlignment) {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .spaceLittle,
    ::slotted(.spaceLittle) {
      padding: var(--space-little);
    }

    .spaceSmall,
    ::slotted(.spaceSmall) {
      padding: var(--space-small);
    }

    .spaceMedium,
    ::slotted(.spaceMedium) {
      padding: var(--space-medium);
    }

    .spaceNormal,
    ::slotted(.spaceNormal) {
      padding: var(--space-normal);
    }

    .spaceBig,
    ::slotted(.spaceBig) {
      padding: var(--space-big);
    }

    .spaceMax,
    ::slotted(.spaceMax) {
      padding: var(--space-max);
    }
  `,i([r.property(),n("design:type",String)],c.prototype,"spacerSize",void 0),i([r.property(),n("design:type",String)],c.prototype,"spacerAlignment",void 0),i([r.property(),n("design:type",String)],c.prototype,"size",void 0),c=i([r.customElement("nidoca-spacer")],c),t.NidocaSpacer=c},9605:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTabContent=void 0;const r=o(8789),a=o(6110);let s=class extends r.LitElement{constructor(){super(...arguments),this.selected=!1}render(){return r.html`
      <nidoca-visible visibleType="${this.selected?a.VisibleType.NORMAL:a.VisibleType.HIDE}">
        <slot></slot>
      </nidoca-visible>
    `}};s.styles=r.css``,i([r.property(),n("design:type",Boolean)],s.prototype,"selected",void 0),s=i([r.customElement("nidoca-tab-content")],s),t.NidocaTabContent=s},2986:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTab=void 0;const r=o(8789),a=o(5578);let s=class extends r.LitElement{constructor(){super(...arguments),this.selected=!1,this.text=""}render(){return r.html`
      <span class="tab ${this.selected?"SELECTED":""}" @click="${()=>this.tabClicked()}">
        ${this.text?r.html`
              <nidoca-typography .typographyType="${a.TypographyType.OVERLINE}" text="${this.text}"></nidoca-typography>
            `:r.html``}
        <slot></slot>
      </span>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};s.styles=r.css`
    :host {
      border-width: 4px;
      border-color: var(--app-color-surface-background);
      border-bottom-style: solid;
      margin-left: 2px;
      margin-right: 2px;
    }

    :host(.SELECTED) {
      border-color: var(--app-color-primary-background);
    }

    .tab,
    ::slotted(.tab) {
      cursor: pointer;
      box-sizing: border-box;
    }
  `,i([r.property(),n("design:type",Boolean)],s.prototype,"selected",void 0),i([r.property(),n("design:type",String)],s.prototype,"text",void 0),s=i([r.customElement("nidoca-tab")],s),t.NidocaTab=s},7434:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTable=void 0;const r=o(8789),a=o(1021),s=o(449);let c=class extends r.LitElement{constructor(){super(...arguments),this.headers=[],this.rows=[[]]}render(){return r.html`
      <div>
        <table>
          <thead>
            ${a.guard([this.headers],(()=>r.html` ${s.repeat(this.headers,(e=>r.html` <th colspan="1" rowspan="1">${e}</th> `))} `))}
          </thead>
          <tbody>
            ${a.guard([this.rows],(()=>r.html`
                  ${s.repeat(this.rows,(e=>r.html`
                        <tr>
                          ${s.repeat(e,(e=>r.html` <td colspan="1" rowspan="1">${e}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};c.styles=r.css`
    table,
    ::slotted(table) {
      border-spacing: 0;
      width: 100%;
    }

    td,
    th {
      vertical-align: center;
      padding: var(--space-small);
      box-sizing: border-box;
      text-align: left;
      border-bottom: 1px solid var(--app-color-surface-background);
      border-left: 1px solid var(--app-color-surface-background);
    }

    tr > td:last-of-type,
    th:last-of-type {
      border-right: 1px solid var(--app-color-surface-background);
    }

    th {
      border-top: 1px solid var(--app-color-surface-background);
      background-color: var(--app-color-surface-background-dark);
      color: var(--app-color);
    }
  `,i([r.property(),n("design:type",Array)],c.prototype,"headers",void 0),i([r.property(),n("design:type",Array)],c.prototype,"rows",void 0),c=i([r.customElement("nidoca-table")],c),t.NidocaTable=c},4503:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTabs=void 0;const r=o(8789),a=o(9605),s=o(2986);let c=class extends r.LitElement{firstUpdated(e){super.firstUpdated(e),this.changeSelectedTabStyle()}update(e){super.update(e),null!=e.get("tabType")&&this.changeSelectedTabStyle()}changeSelectedTabStyle(){if(null!=this.tabSlot){let e=this.tabSlot.assignedElements();console.log(e.length);let t=100/e.length;for(let o=0;o<e.length;o++){let i=e[o];i instanceof s.NidocaTab&&(i.style.width=String(t).concat("%"),i.selected&&i.classList.add("SELECTED"))}}}render(){return r.html`
      <nidoca-grid-container
        @nidoca-event-tab-clicked="${e=>this.tabClicked(e)}"
        .gridTemplateRows="${["auto","auto"]}"
        .gridTemplateColumns="${["100%"]}"
      >
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </nidoca-grid-container>
    `}tabClicked(e){let t=e.detail;if(t.selected)return;let o=0;if(null!=this.tabSlot){let e=this.tabSlot.assignedElements();for(let i=0;i<e.length;i++){let n=e[i];n instanceof s.NidocaTab&&(n==t?(o=i,n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}console.log("tab selected, index = %s",o);let i=0;if(null!=this.tabContentSlot){let e=this.tabContentSlot.assignedElements();for(let t=0;t<e.length;t++){let n=e[t];n instanceof a.NidocaTabContent&&(n.selected=o==i,i++)}}}};c.styles=r.css`
    slot {
      display: inline;
    }

    #tabSlot {
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,i([r.query("#tabSlot"),n("design:type",Object)],c.prototype,"tabSlot",void 0),i([r.query("#tabContentSlot"),n("design:type",Object)],c.prototype,"tabContentSlot",void 0),c=i([r.customElement("nidoca-tabs")],c),t.NidocaTabs=c},5986:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTopBottomTemplate=void 0;const r=o(8789);class a extends r.LitElement{constructor(){super(...arguments),this.menuSwitchIcon="menu",this.menuCss="menuClosed basicShadow"}render(){return r.html`
      <div class="container" @nidoca-event-icon-clicked="${this.menuItemClicked}">
        <div id="top" class="${this.menuCss}">${this.getTopContent()}</div>
        <div id="left" class="${this.menuCss}">${this.getLeftComponent()}</div>
        <div id="main" class="${this.menuCss}">${this.getMainComponent()}</div>
        <div id="bottom" class="${this.menuCss}">${this.getBottomContent()}</div>
      </div>
    `}menuItemClicked(e){e.detail.icon===this.menuSwitchIcon&&(console.log("menuItemClicked..."),this.toogleMenu())}toogleMenu(){-1==this.menuCss.indexOf("menuClosed")?this.menuCss="menuClosed basicShadow":this.menuCss="basicShadow"}}a.styles=r.css`
    .container {
      height: calc(100vh - var(--menubar-height));
      width: 100%;
      padding: 0;
      margin: 0;
    }

    #top {
      position: fixed;
      width: calc(100%);
      height: var(--menubar-height);
      right: 0;
      z-index: 10;
    }

    #top.menuClosed {
      width: 100%;
    }

    #bottom {
      position: fixed;
      width: 100px;
      height: calc(50%);
      right: 0;
      bottom: 25%;
      z-index: 10;
    }

    @media (orientation: portrait) {
      #bottom {
        position: fixed;
        width: calc(100%);
        height: var(--menubar-height);
        right: 0;
        bottom: 0;
        z-index: 10;
      }
      #bottom.menuClosed {
        width: 100%;
      }
    }

    #left {
      height: calc(100% - var(--menubar-height));
      width: var(--menu-size);
      transition: left 0.25s linear;
      position: fixed;
      z-index: 1;
      top: var(--menubar-height);
      left: 0;
      overflow-x: hidden;
    }

    #left.menuClosed {
      left: calc(-1 * var(--menu-size));
      transition: left 0.25s linear;
    }

    #main {
      padding-top: var(--menubar-height);

      min-height: 100%;
    }
    #main.menuClosed {
      margin-left: 0;
    }

    @media screen and (min-width: 521px) {
      #main {
        transition: margin-left 0.25s linear;
        margin-left: var(--menu-size);
      }

      #main.menuClosed {
        margin-left: 0;
        transition: margin-left 0.25s linear;
      }
    }
  `,a.IDENTIFIER="DefaultTemplate",i([r.property(),n("design:type",String)],a.prototype,"menuSwitchIcon",void 0),i([r.property(),n("design:type",String)],a.prototype,"menuCss",void 0),i([r.query("#top"),n("design:type",Object)],a.prototype,"topElement",void 0),i([r.query("#left"),n("design:type",Object)],a.prototype,"leftElement",void 0),i([r.query("#main"),n("design:type",Object)],a.prototype,"mainElement",void 0),t.NidocaTopBottomTemplate=a},2322:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTemplate=void 0;const r=o(8789),a=o(9072),s=o(6523);class c extends r.LitElement{constructor(){super(...arguments),this.menuSwitchIcon="menu",this.menuCss="menuClosed basicShadow",this.navigationClosed=!0,this.navType=a.NavigationType.DISMISSIBLE}render(){return r.html`
      <nidoca-navigation .closed="${this.navigationClosed}" navigationType="${this.navType}">
        ${this.getLeftNavigationContent()}
      </nidoca-navigation>
      <div
        id="top"
        class="${this.menuCss}"
        @nidoca-event-icon-clicked="${e=>this.menuItemClicked(e)}"
      >
        <nidoca-border ..borderProperties="${[s.BorderProperties.BOTTOM]}"> ${this.getTopContent()} </nidoca-border>
      </div>
      <div id="main" class="${this.menuCss} body-opacity">${this.getMainComponent()}</div>
    `}menuItemClicked(e){e.detail.icon===this.menuSwitchIcon&&(console.log("menuItemClicked..."),this.toogleMenu())}toogleMenu(){-1==this.menuCss.indexOf("menuClosed")?(this.menuCss="menuClosed basicShadow",this.navigationClosed=!0):this.navType==a.NavigationType.PERMANENT?(this.menuCss="permanent-top permanent-main",this.navigationClosed=!1):this.navType==a.NavigationType.DISMISSIBLE?(this.menuCss="dismissible-main",this.navigationClosed=!1):(this.menuCss="basicShadow",this.navigationClosed=!1)}}c.styles=r.css`
    #top {
      position: fixed;
      width: calc(100%);
      height: var(--menubar-height);
      right: 0;
      z-index: 10;
      background-color: var(--app-color-primary-background);
      color: var(--app-color-primary);
    }

    #top.menuClosed {
      width: 100%;
    }

    #main {
      padding-top: var(--menubar-height);
      min-height: 100%;
    }
    #main.menuClosed {
      margin-left: 0;
    }

    #main.body-opacity {
      opacity: 0.5;
      transition: all 0.35s ease;
    }

    #main.menuClosed {
      margin-left: 0;
      opacity: 1;
      background: #fff;
      transition: all 0.35s ease;
    }

    #main.dismissible-main {
      opacity: 1;
      transition: all 0.35s ease;
    }

    #main.menuClosed {
      margin-left: 0;
      opacity: 1;
      background: #fff;
      transition: all 0.35s ease;
    }

    .permanent-main {
      width: calc(100vw - var(--menu-size)) !important;
      position: relative;
      float: right;
      transition: all 0.35s ease;
    }

    .dismissible-main {
      width: calc(100vw - var(--menu-size)) !important;
      position: relative;
      float: right;
      transition: all 0.35s ease;
    }

    #main {
      width: 100%;
    }

    @media screen and (min-width: 521px) {
      #main {
        transition: margin-left 0.25s linear;
        margin-left: var(--menu-size);
      }
    }
  `,i([r.property(),n("design:type",Object)],c.prototype,"menuSwitchIcon",void 0),i([r.property(),n("design:type",String)],c.prototype,"menuCss",void 0),i([r.property(),n("design:type",Boolean)],c.prototype,"navigationClosed",void 0),i([r.property(),n("design:type",String)],c.prototype,"navType",void 0),i([r.query("#top"),n("design:type",Object)],c.prototype,"topElement",void 0),i([r.query("#left"),n("design:type",Object)],c.prototype,"leftElement",void 0),i([r.query("#main"),n("design:type",Object)],c.prototype,"mainElement",void 0),t.NidocaTemplate=c},2531:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTopAppBar=void 0;const n=o(8789);let r=class extends n.LitElement{render(){return n.html`
      <div class="TOP_APP_BAR">
        <div class="left">
          <slot name="leftComponents"></slot>
        </div>

        <div class="center">
          <slot name="mainComponents"></slot>
        </div>
        <div class="right">
          <slot name="rightComponents"></slot>
        </div>
        <div class="prominent">
          <slot name="prominentComponents"></slot>
        </div>
      </div>
    `}};r.styles=n.css`
    .TOP_APP_BAR {
      width: 100vw;
      display: grid;
      grid-template-rows: var(--menubar-height);
      grid-template-columns: auto auto auto;
      color: inherit;
      background-color: inherit;
    }

    .left {
      justify-self: start;
    }
    .center {
      justify-self: center;
    }

    .right {
      justify-self: end;
    }

    .prominent {
    }

    .left,
    .center,
    .right {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
    }
  `,r=i([n.customElement("nidoca-top-app-bar")],r),t.NidocaTopAppBar=r},1031:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTransition=t.TransitionType=void 0;const r=o(8789);var a;!function(e){e.CENTER="CENTER",e.LEFT="LEFT",e.RIGHT="RIGHT",e.TOP="TOP",e.BOTTOM="BOTTOM",e.SLIDE_CENTER="SLIDE_CENTER",e.SLIDE_LEFT="SLIDE_LEFT",e.SLIDE_RIGHT="SLIDE_RIGHT",e.SLIDE_TOP="SLIDE_TOP",e.SLIDE_BOTTOM="SLIDE_BOTTOM"}(a=t.TransitionType||(t.TransitionType={}));let s=class extends r.LitElement{constructor(){super(...arguments),this.transitionType=a.CENTER,this.duration=.5}render(){return r.html` <div class="${this.transitionType}"><slot></slot></div> `}};s.styles=r.css`
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
  `,i([r.property(),n("design:type",String)],s.prototype,"transitionType",void 0),i([r.property(),n("design:type",Number)],s.prototype,"duration",void 0),s=i([r.customElement("nidoca-transition")],s),t.NidocaTransition=s},5578:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTypography=t.TypographyAlignment=t.TypographyType=void 0;const r=o(8789);var a,s;!function(e){e.H1="H1",e.H2="H2",e.H3="H3",e.H4="H4",e.H5="H5",e.H6="H6",e.SUBTITLE1="SUBTITLE1",e.SUBTITLE2="SUBTITLE2",e.BODY1="BODY1",e.BODY2="BODY2",e.BUTTON="BUTTON",e.CAPTION="CAPTION",e.OVERLINE="OVERLINE"}(a=t.TypographyType||(t.TypographyType={})),function(e){e.JUSTIFY="text-align:justify;",e.JUSTIFY_ALL="text-align:justify-all;",e.LEFT="text-align: left;",e.RIGHT="text-align: right;",e.CENTER="text-align: center;",e.START="text-align: start;",e.END="text-align: end;",e.MATCH_PARENT="text-align: match-parent;",e.INHERIT="text-align: inherit;",e.INITIAL="text-align: initial;",e.UNSET="text-align: unset;"}(s=t.TypographyAlignment||(t.TypographyAlignment={}));let c=class extends r.LitElement{constructor(){super(...arguments),this.typographyType=a.BODY1,this.typographyAlignment=s.START,this.text=""}render(){return r.html`
      <span class="TYPOGRAPHY ${this.typographyType}" style="${this.typographyAlignment}"
        >${this.text}<slot></slot
      ></span>
    `}};c.styles=r.css`
    :host,
    ::slotted(:host) {
    }

    .TYPOGRAPHY {
      display: inline-block;
    }

    .H1,
    .H2,
    .H3,
    .H4,
    .H5,
    .H6,
    .SUBTITLE1,
    .SUBTITLE2,
    .BODY1,
    .BODY2,
    .BUTTON,
    .CAPTION,
    .OVERLINE {
      text-overflow: ellipsis;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      line-height: normal;
      white-space: normal;
      word-wrap: normal;
      word-break: break-word;
    }

    .H1,
    .H2,
    .H3,
    .H4,
    .H5,
    .H6 {
    }

    .H1 {
      font-size: 2.75rem;
      letter-spacing: -0.09375rem;
      font-weight: 300;
    }

    .H2,
    ::slotted(.H2) {
      font-size: 2.5rem;
      vertical-align: top;
      font-weight: 300;
    }

    .H3 {
      font-size: 2rem;
      font-weight: 400;
    }

    .H4 {
      font-size: 1.5rem;
      font-weight: 400;
    }

    .H5 {
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: 0rem;
    }

    .H6 {
      font-size: 1.15rem;
      font-weight: 500;
    }

    .SUBTITLE1 {
      font-size: 1rem;
      font-weight: 400;
    }

    .SUBTITLE2 {
      font-size: 0.875rem;
      font-weight: 500;
    }

    .BODY1 {
      font-size: 1em;
      font-weight: 500;
      text-decoration-style: solid;
      line-height: 1.5;
    }

    .BODY2 {
      font-size: 0.875rem;
      font-weight: 500;
      text-decoration-style: solid;
      line-height: 1.5;
    }

    .BUTTON {
      font-size: 0.875rem;
      text-transform: uppercase;
      font-weight: 700;
    }

    .CAPTION {
      font-size: 0.75rem;
      font-weight: 600;
    }

    .OVERLINE {
      font-size: 0.625rem;
      text-transform: uppercase;
      font-weight: 500;
    }
  `,i([r.property(),n("design:type",String)],c.prototype,"typographyType",void 0),i([r.property(),n("design:type",String)],c.prototype,"typographyAlignment",void 0),i([r.property(),n("design:type",String)],c.prototype,"text",void 0),c=i([r.customElement("nidoca-typography")],c),t.NidocaTypography=c},6110:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaVisible=t.VisibleType=void 0;const r=o(8789);var a;!function(e){e.HIDE="HIDE",e.INVISIBLE="INVISIBLE",e.NORMAL="NORMAL"}(a=t.VisibleType||(t.VisibleType={}));let s=class extends r.LitElement{constructor(){super(...arguments),this.visibleType=a.HIDE}render(){return r.html` <slot class="${this.visibleType}"></slot> `}};s.styles=r.css`
    .HIDE,
    ::slotted(.HIDE) {
      display: none !important;
      visibility: hidden !important;
    }

    .INVISIBLE,
    ::slotted(.INVISIBLE) {
      visibility: hidden !important;
    }
  `,i([r.property(),n("design:type",String)],s.prototype,"visibleType",void 0),s=i([r.customElement("nidoca-visible")],s),t.NidocaVisible=s},4661:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaWizard=void 0;const r=o(8789),a=o(449),s=o(1021),c=o(5578);let l=class extends r.LitElement{constructor(){super(...arguments),this.wizardSteps=[]}render(){return r.html`
      <div class="WIZARD">
        ${s.guard([this.wizardSteps],(()=>r.html`
              ${a.repeat(this.wizardSteps,(e=>r.html`
                    <div class="WIZARD_STEP">
                      <div class="WIZARD_ICON">
                        <nidoca-icon
                          icon="${e.icon}"
                          clickable="true"
                          @nidoca-event-icon-clicked="${()=>{this.selectedStep=e}}"
                        ></nidoca-icon>
                      </div>
                      <div class="WIZARD_TITLE">
                        <nidoca-typography
                          .typographyType="${c.TypographyType.OVERLINE}"
                          text="${e.title}"
                        ></nidoca-typography>
                      </div>
                    </div>
                  `))}
            `))}
      </div>
    `}};l.styles=r.css`
    .WIZARD {
    }

    .WIZARD_STEP {
      float: left;
    }

    .WIZARD_ICON {
      width: 50px;
      height: 50px;
      float: left;
      border: 2px solid var(--app-color-primary-background);
      border-radius: 50%;
      margin-right: 20px;
      position: relative;
      transition: all 0.35s;
      color: var(--app-color-primary-background);
    }

    .WIZARD_ICON::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -22px;
      width: 20px;
      height: 5px;

      border-bottom: 2px solid var(--app-color-primary-background);
    }

    .WIZARD_STEP:last-child .WIZARD_ICON {
      overflow: hidden;
    }

    .WIZARD_ICON:hover {
      background: var(--app-color-primary-background);
      color: #ffffff;
    }

    .WIZARD_STEP:first-child .WIZARD_ICON {
      background: var(--app-color-primary-background);
      color: #ffffff;
    }

    .WIZARD_STEP:first-child .WIZARD_ICON::after {
      background: var(--app-color-primary-background);
    }

    .WIZARD_TITLE {
      width: 50px;
      text-align: center;
    }
  `,i([r.property(),n("design:type",Array)],l.prototype,"wizardSteps",void 0),i([r.property(),n("design:type",Object)],l.prototype,"selectedStep",void 0),l=i([r.customElement("nidoca-wizard")],l),t.NidocaWizard=l},8789:(e,t,o)=>{o.r(t),o.d(t,{CSSResult:()=>H,LitElement:()=>q,SVGTemplateResult:()=>p.Ch,TemplateResult:()=>p.js,UpdatingElement:()=>T,css:()=>$,customElement:()=>E,defaultConverter:()=>v,eventOptions:()=>j,html:()=>p.dy,internalProperty:()=>x,notEqual:()=>b,property:()=>R,query:()=>I,queryAll:()=>N,queryAssignedNodes:()=>L,queryAsync:()=>w,supportsAdoptingStyleSheets:()=>D,svg:()=>p.YP,unsafeCSS:()=>U});var i=o(6921),n=o(560);function r(e,t){const{element:{content:o},parts:i}=e,n=document.createTreeWalker(o,133,null,!1);let r=s(i),a=i[r],c=-1,l=0;const d=[];let p=null;for(;n.nextNode();){c++;const e=n.currentNode;for(e.previousSibling===p&&(p=null),t.has(e)&&(d.push(e),null===p&&(p=e)),null!==p&&l++;void 0!==a&&a.index===c;)a.index=null!==p?-1:a.index-l,r=s(i,r),a=i[r]}d.forEach((e=>e.parentNode.removeChild(e)))}const a=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,133,null,!1);for(;o.nextNode();)t++;return t},s=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if((0,n.pC)(t))return o}return-1};var c=o(4787),l=o(2432),d=o(3122),p=o(8153);const u=(e,t)=>`${e}--${t}`;let h=!0;void 0===window.ShadyCSS?h=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),h=!1);const f=e=>t=>{const o=u(t.type,e);let i=l.r.get(o);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},l.r.set(o,i));let r=i.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(n.Jw);if(r=i.keyString.get(a),void 0===r){const o=t.getTemplateElement();h&&window.ShadyCSS.prepareTemplateDom(o,e),r=new n.YS(t,o),i.keyString.set(a,r)}return i.stringsArray.set(t.strings,r),r},y=["html","svg"],g=new Set,m=(e,t,o)=>{g.add(e);const i=o?o.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:c}=n;if(0===c)return void window.ShadyCSS.prepareTemplateStyles(i,e);const d=document.createElement("style");for(let e=0;e<c;e++){const t=n[e];t.parentNode.removeChild(t),d.textContent+=t.textContent}(e=>{y.forEach((t=>{const o=l.r.get(u(t,e));void 0!==o&&o.keyString.forEach((e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{o.add(e)})),r(e,o)}))}))})(e);const p=i.content;o?function(e,t,o=null){const{element:{content:i},parts:n}=e;if(null==o)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let c=s(n),l=0,d=-1;for(;r.nextNode();)for(d++,r.currentNode===o&&(l=a(t),o.parentNode.insertBefore(t,o));-1!==c&&n[c].index===d;){if(l>0){for(;-1!==c;)n[c].index+=l,c=s(n,c);return}c=s(n,c)}}(o,d,p.firstChild):p.insertBefore(d,p.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const h=p.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)t.insertBefore(h.cloneNode(!0),t.firstChild);else if(o){p.insertBefore(d,p.firstChild);const e=new Set;e.add(d),r(o,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const v={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},b=(e,t)=>t!==e&&(t==t||e==e),_={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b},O="finalized";class T extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,o)=>{const i=this._attributeNameForProperty(o,t);void 0!==i&&(this._attributeToPropertyMap.set(i,o),e.push(i))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=_){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():`__${e}`,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdateInternal(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||_}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(O)||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=b){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,i=t.converter||v,n="function"==typeof i?i:i.fromAttribute;return n?n(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,i=t.converter;return(i&&i.toAttribute||v.toAttribute)(e,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=_){const i=this.constructor,n=i._attributeNameForProperty(e,o);if(void 0!==n){const e=i._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const o=this.constructor,i=o._attributeToPropertyMap.get(e);if(void 0!==i){const e=o.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=o._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,o){let i=!0;if(void 0!==e){const n=this.constructor;o=o||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}T.finalized=!0;const E=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:i}=t;return{kind:o,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),S=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(o){o.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function R(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):S(e,t)}function x(e){return R({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}function I(e,t){return(o,i)=>{const n={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():`__${i}`;n.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(e)),this[t]}}return void 0!==i?P(n,o,i):C(n,o)}}function w(e){return(t,o)=>{const i={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==o?P(i,t,o):C(i,t)}}function N(e){return(t,o)=>{const i={get(){return this.renderRoot.querySelectorAll(e)},enumerable:!0,configurable:!0};return void 0!==o?P(i,t,o):C(i,t)}}const P=(e,t,o)=>{Object.defineProperty(t,o,e)},C=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function j(e){return(t,o)=>void 0!==o?((e,t,o)=>{Object.assign(t[o],e)})(e,t,o):((e,t)=>Object.assign(Object.assign({},t),{finisher(o){Object.assign(o.prototype[t.key],e)}}))(e,t)}const A=Element.prototype,k=A.msMatchesSelector||A.webkitMatchesSelector;function L(e="",t=!1,o=""){return(i,n)=>{const r={get(){const i="slot"+(e?`[name=${e}]`:":not([name])"),n=this.renderRoot.querySelector(i);let r=n&&n.assignedNodes({flatten:t});return r&&o&&(r=r.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches?e.matches(o):k.call(e,o)))),r},enumerable:!0,configurable:!0};return void 0!==n?P(r,i,n):C(r,i)}}const D=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,M=Symbol();class H{constructor(e,t){if(t!==M)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(D?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const U=e=>new H(String(e),M),$=(e,...t)=>{const o=t.reduce(((t,o,i)=>t+(e=>{if(e instanceof H)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[i+1]),e[0]);return new H(o,M)};(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const B={};class q extends T{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,o)=>e.reduceRight(((e,o)=>Array.isArray(o)?t(o,e):(e.add(o),e)),o),o=t(e,new Set),i=[];o.forEach((e=>i.unshift(e))),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!D){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return U(t)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?D?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==B&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return B}}q.finalized=!0,q.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const n=o.scopeName,r=c.L.has(t),a=h&&11===t.nodeType&&!!t.host,s=a&&!g.has(n),l=s?document.createDocumentFragment():t;if((0,c.s)(e,l,Object.assign({templateFactory:f(n)},o)),s){const e=c.L.get(l);c.L.delete(l);const o=e.value instanceof d.R?e.value.template:void 0;m(n,l,o),(0,i.r4)(t,t.firstChild),t.appendChild(l),c.L.set(t,e)}!r&&a&&window.ShadyCSS.styleElement(t.host)}},1021:(e,t,o)=>{o.r(t),o.d(t,{guard:()=>r});var i=o(8153);const n=new WeakMap,r=(0,i.XM)(((e,t)=>o=>{const i=n.get(o);if(Array.isArray(e)){if(Array.isArray(i)&&i.length===e.length&&e.every(((e,t)=>e===i[t])))return}else if(i===e&&(void 0!==e||n.has(o)))return;o.setValue(t()),n.set(o,Array.isArray(e)?Array.from(e):e)}))},449:(e,t,o)=>{o.r(t),o.d(t,{repeat:()=>p});var i=o(8153);const n=(e,t)=>{const o=e.startNode.parentNode,n=void 0===t?e.endNode:t.startNode,r=o.insertBefore((0,i.IW)(),n);o.insertBefore((0,i.IW)(),n);const a=new i.nt(e.options);return a.insertAfterNode(r),a},r=(e,t)=>(e.setValue(t),e.commit(),e),a=(e,t,o)=>{const n=e.startNode.parentNode,r=o?o.startNode:e.endNode,a=t.endNode.nextSibling;a!==r&&(0,i.V)(n,t.startNode,a,r)},s=e=>{(0,i.r4)(e.startNode.parentNode,e.startNode,e.endNode.nextSibling)},c=(e,t,o)=>{const i=new Map;for(let n=t;n<=o;n++)i.set(e[n],n);return i},l=new WeakMap,d=new WeakMap,p=(0,i.XM)(((e,t,o)=>{let p;return void 0===o?o=t:void 0!==t&&(p=t),t=>{if(!(t instanceof i.nt))throw new Error("repeat can only be used in text bindings");const u=l.get(t)||[],h=d.get(t)||[],f=[],y=[],g=[];let m,v,b=0;for(const t of e)g[b]=p?p(t,b):b,y[b]=o(t,b),b++;let _=0,O=u.length-1,T=0,E=y.length-1;for(;_<=O&&T<=E;)if(null===u[_])_++;else if(null===u[O])O--;else if(h[_]===g[T])f[T]=r(u[_],y[T]),_++,T++;else if(h[O]===g[E])f[E]=r(u[O],y[E]),O--,E--;else if(h[_]===g[E])f[E]=r(u[_],y[E]),a(t,u[_],f[E+1]),_++,E--;else if(h[O]===g[T])f[T]=r(u[O],y[T]),a(t,u[O],u[_]),O--,T++;else if(void 0===m&&(m=c(g,T,E),v=c(h,_,O)),m.has(h[_]))if(m.has(h[O])){const e=v.get(g[T]),o=void 0!==e?u[e]:null;if(null===o){const e=n(t,u[_]);r(e,y[T]),f[T]=e}else f[T]=r(o,y[T]),a(t,o,u[_]),u[e]=null;T++}else s(u[O]),O--;else s(u[_]),_++;for(;T<=E;){const e=n(t,f[E+1]);r(e,y[T]),f[T++]=e}for(;_<=O;){const e=u[_++];null!==e&&s(e)}l.set(t,f),d.set(t,g)}}))},3695:(e,t,o)=>{o.d(t,{X:()=>n,w:()=>r});const i=new WeakMap,n=e=>(...t)=>{const o=e(...t);return i.set(o,!0),o},r=e=>"function"==typeof e&&i.has(e)},6921:(e,t,o)=>{o.d(t,{eC:()=>i,V:()=>n,r4:()=>r});const i="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,o=null,i=null)=>{for(;t!==o;){const o=t.nextSibling;e.insertBefore(t,i),t=o}},r=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}}},1301:(e,t,o)=>{o.d(t,{J:()=>i,L:()=>n});const i={},n={}},8356:(e,t,o)=>{o.d(t,{QG:()=>p,nt:()=>h,JG:()=>f,m:()=>y,K1:()=>v});var i=o(3695),n=o(6921),r=o(1301),a=o(3122),s=o(9823),c=o(560);const l=e=>null===e||!("object"==typeof e||"function"==typeof e),d=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class p{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new u(this)}_getValue(){const e=this.strings,t=e.length-1,o=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=o[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!d(e))return e}let i="";for(let n=0;n<t;n++){i+=e[n];const t=o[n];if(void 0!==t){const e=t.value;if(l(e)||!d(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r.J||l(e)&&e===this.value||(this.value=e,(0,i.w)(e)||(this.committer.dirty=!0))}commit(){for(;(0,i.w)(this.value);){const e=this.value;this.value=r.J,e(this)}this.value!==r.J&&this.committer.commit()}}class h{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild((0,c.IW)()),this.endNode=e.appendChild((0,c.IW)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=(0,c.IW)()),e.__insert(this.endNode=(0,c.IW)())}insertAfterPart(e){e.__insert(this.startNode=(0,c.IW)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;(0,i.w)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r.J,e(this)}const e=this.__pendingValue;e!==r.J&&(l(e)?e!==this.value&&this.__commitText(e):e instanceof s.j?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):d(e)?this.__commitIterable(e):e===r.L?(this.value=r.L,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof a.R&&this.value.template===t)this.value.update(e.values);else{const o=new a.R(t,e.processor,this.options),i=o._clone();o.update(e.values),this.__commitNode(i),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,i=0;for(const n of e)o=t[i],void 0===o&&(o=new h(this.options),t.push(o),0===i?o.appendIntoPart(this):o.insertAfterPart(t[i-1])),o.setValue(n),o.commit(),i++;i<t.length&&(t.length=i,this.clear(o&&o.endNode))}clear(e=this.startNode){(0,n.r4)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class f{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;(0,i.w)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r.J,e(this)}if(this.__pendingValue===r.J)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r.J}}class y extends p{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new g(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class g extends u{}let m=!1;(()=>{try{const e={get capture(){return m=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class v{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;(0,i.w)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r.J,e(this)}if(this.__pendingValue===r.J)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=b(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r.J}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const b=e=>e&&(m?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},4787:(e,t,o)=>{o.d(t,{L:()=>a,s:()=>s});var i=o(6921),n=o(8356),r=o(2432);const a=new WeakMap,s=(e,t,o)=>{let s=a.get(t);void 0===s&&((0,i.r4)(t,t.firstChild),a.set(t,s=new n.nt(Object.assign({templateFactory:r.t},o))),s.appendInto(t)),s.setValue(e),s.commit()}},2432:(e,t,o)=>{o.d(t,{t:()=>n,r:()=>r});var i=o(560);function n(e){let t=r.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},r.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const n=e.strings.join(i.Jw);return o=t.keyString.get(n),void 0===o&&(o=new i.YS(e,e.getTemplateElement()),t.keyString.set(n,o)),t.stringsArray.set(e.strings,o),o}const r=new Map},3122:(e,t,o)=>{o.d(t,{R:()=>r});var i=o(6921),n=o(560);class r{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i.eC?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let a,s=0,c=0,l=r.nextNode();for(;s<o.length;)if(a=o[s],(0,n.pC)(a)){for(;c<a.index;)c++,"TEMPLATE"===l.nodeName&&(t.push(l),r.currentNode=l.content),null===(l=r.nextNode())&&(r.currentNode=t.pop(),l=r.nextNode());if("node"===a.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,a.name,a.strings,this.options));s++}else this.__parts.push(void 0),s++;return i.eC&&(document.adoptNode(e),customElements.upgrade(e)),e}}},9823:(e,t,o)=>{o.d(t,{j:()=>s,C:()=>c});var i=o(6921),n=o(560);const r=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),a=` ${n.Jw} `;class s{constructor(e,t,o,i){this.strings=e,this.values=t,this.type=o,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let i=0;i<e;i++){const e=this.strings[i],r=e.lastIndexOf("\x3c!--");o=(r>-1||o)&&-1===e.indexOf("--\x3e",r+1);const s=n.W5.exec(e);t+=null===s?e+(o?a:n.N):e.substr(0,s.index)+s[1]+s[2]+n.$E+s[3]+n.Jw}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==r&&(t=r.createHTML(t)),e.innerHTML=t,e}}class c extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,o=t.firstChild;return t.removeChild(o),(0,i.V)(t,o.firstChild),e}}},560:(e,t,o)=>{o.d(t,{Jw:()=>i,N:()=>n,$E:()=>a,YS:()=>s,pC:()=>l,IW:()=>d,W5:()=>p});const i=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${n}`),a="$lit$";class s{constructor(e,t){this.parts=[],this.element=t;const o=[],n=[],s=document.createTreeWalker(t.content,133,null,!1);let l=0,u=-1,h=0;const{strings:f,values:{length:y}}=e;for(;h<y;){const e=s.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let i=0;for(let e=0;e<o;e++)c(t[e].name,a)&&i++;for(;i-- >0;){const t=f[h],o=p.exec(t)[2],i=o.toLowerCase()+a,n=e.getAttribute(i);e.removeAttribute(i);const s=n.split(r);this.parts.push({type:"attribute",index:u,name:o,strings:s}),h+=s.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,n=t.split(r),s=n.length-1;for(let t=0;t<s;t++){let o,r=n[t];if(""===r)o=d();else{const e=p.exec(r);null!==e&&c(e[2],a)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-a.length)+e[3]),o=document.createTextNode(r)}i.insertBefore(o,e),this.parts.push({type:"node",index:++u})}""===n[s]?(i.insertBefore(d(),e),o.push(e)):e.data=n[s],h+=s}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&u!==l||(u++,t.insertBefore(d(),e)),l=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(o.push(e),u--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=n.pop()}for(const e of o)e.parentNode.removeChild(e)}}const c=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},l=e=>-1!==e.index,d=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},8153:(e,t,o)=>{o.d(t,{nt:()=>i.nt,Ch:()=>r.C,js:()=>r.j,IW:()=>c.IW,XM:()=>a.X,dy:()=>l,r4:()=>s.r4,V:()=>s.V,YP:()=>d});var i=o(8356);const n=new class{handleAttributeExpressions(e,t,o,n){const r=t[0];if("."===r){return new i.m(e,t.slice(1),o).parts}if("@"===r)return[new i.K1(e,t.slice(1),n.eventContext)];if("?"===r)return[new i.JG(e,t.slice(1),o)];return new i.QG(e,t,o).parts}handleTextExpression(e){return new i.nt(e)}};var r=o(9823),a=o(3695),s=o(6921),c=(o(1301),o(4787),o(2432),o(3122),o(560));"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const l=(e,...t)=>new r.j(e,t,"html",n),d=(e,...t)=>new r.C(e,t,"svg",n)},7589:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaAccordionItemShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.header="",this.opened=!1}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"header",void 0),i([r.property(),n("design:type",Object)],s.prototype,"opened",void 0),s=i([r.customElement("nidoca-accordion-item-showcase-page")],s),t.NidocaAccordionItemShowcasePage=s},7520:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaAccordionShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.accordionType="",this.accordionSlot=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"accordionType",void 0),i([r.property(),n("design:type",Object)],s.prototype,"accordionSlot",void 0),s=i([r.customElement("nidoca-accordion-showcase-page")],s),t.NidocaAccordionShowcasePage=s},1711:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaBorderShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.borderProperties=[],this.borderSize="",this.shadowType=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"borderProperties",void 0),i([r.property(),n("design:type",Object)],s.prototype,"borderSize",void 0),i([r.property(),n("design:type",Object)],s.prototype,"shadowType",void 0),s=i([r.customElement("nidoca-border-showcase-page")],s),t.NidocaBorderShowcasePage=s},7015:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaBoxShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.height="",this.width=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"height",void 0),i([r.property(),n("design:type",Object)],s.prototype,"width",void 0),s=i([r.customElement("nidoca-box-showcase-page")],s),t.NidocaBoxShowcasePage=s},2575:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaButtonShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.buttonType=void 0,this.leadingIcon="",this.text=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"buttonType",void 0),i([r.property(),n("design:type",Object)],s.prototype,"leadingIcon",void 0),i([r.property(),n("design:type",Object)],s.prototype,"text",void 0),s=i([r.customElement("nidoca-button-showcase-page")],s),t.NidocaButtonShowcasePage=s},6703:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaCaptchaShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.numberOne=void 0,this.numberTwo=void 0,this.inputfield=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"numberOne",void 0),i([r.property(),n("design:type",Object)],s.prototype,"numberTwo",void 0),i([r.property(),n("design:type",Object)],s.prototype,"inputfield",void 0),s=i([r.customElement("nidoca-captcha-showcase-page")],s),t.NidocaCaptchaShowcasePage=s},3222:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaChipShowcasePage=void 0;const n=o(8789),r=o(8986);let a=class extends r.NidocaShowcaseTemplate{getMainComponent(){return n.html``}};a=i([n.customElement("nidoca-chip-showcase-page")],a),t.NidocaChipShowcasePage=a},8058:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaDialogShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.show=!1}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"show",void 0),s=i([r.customElement("nidoca-dialog-showcase-page")],s),t.NidocaDialogShowcasePage=s},8436:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaDividerShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.dividerType="",this.opacity=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"dividerType",void 0),i([r.property(),n("design:type",Object)],s.prototype,"opacity",void 0),s=i([r.customElement("nidoca-divider-showcase-page")],s),t.NidocaDividerShowcasePage=s},5254:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFlexShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.flexDirection="",this.flexWrap="",this.flexJustifyContent="",this.flexAlignItems="",this.flexAlignContent="",this.flexContainerProperties=[],this.flexItemProperties=[],this.flexItemBasisValue="",this.flexItemBasisValues=[],this.slotElement=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"flexDirection",void 0),i([r.property(),n("design:type",Object)],s.prototype,"flexWrap",void 0),i([r.property(),n("design:type",Object)],s.prototype,"flexJustifyContent",void 0),i([r.property(),n("design:type",Object)],s.prototype,"flexAlignItems",void 0),i([r.property(),n("design:type",Object)],s.prototype,"flexAlignContent",void 0),i([r.property(),n("design:type",Object)],s.prototype,"flexContainerProperties",void 0),i([r.property(),n("design:type",Object)],s.prototype,"flexItemProperties",void 0),i([r.property(),n("design:type",Object)],s.prototype,"flexItemBasisValue",void 0),i([r.property(),n("design:type",Object)],s.prototype,"flexItemBasisValues",void 0),i([r.property(),n("design:type",Object)],s.prototype,"slotElement",void 0),s=i([r.customElement("nidoca-flex-showcase-page")],s),t.NidocaFlexShowcasePage=s},7030:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFloatingContainerShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.height="",this.width="",this.left="",this.top="",this.right="",this.bottom=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"height",void 0),i([r.property(),n("design:type",Object)],s.prototype,"width",void 0),i([r.property(),n("design:type",Object)],s.prototype,"left",void 0),i([r.property(),n("design:type",Object)],s.prototype,"top",void 0),i([r.property(),n("design:type",Object)],s.prototype,"right",void 0),i([r.property(),n("design:type",Object)],s.prototype,"bottom",void 0),s=i([r.customElement("nidoca-floating-container-showcase-page")],s),t.NidocaFloatingContainerShowcasePage=s},8786:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormComboboxShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.name="",this.value=void 0,this.label="",this.options=[],this.required=!1,this.errorText="",this.infoText="",this.warningText="",this.size=void 0,this.multiple=!1,this.selectElement=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"name",void 0),i([r.property(),n("design:type",Object)],s.prototype,"value",void 0),i([r.property(),n("design:type",Object)],s.prototype,"label",void 0),i([r.property(),n("design:type",Object)],s.prototype,"options",void 0),i([r.property(),n("design:type",Object)],s.prototype,"required",void 0),i([r.property(),n("design:type",Object)],s.prototype,"errorText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"infoText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"warningText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"size",void 0),i([r.property(),n("design:type",Object)],s.prototype,"multiple",void 0),i([r.property(),n("design:type",Object)],s.prototype,"selectElement",void 0),s=i([r.customElement("nidoca-form-combobox-showcase-page")],s),t.NidocaFormComboboxShowcasePage=s},7489:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormDateShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.dateType=void 0,this.name="",this.value=void 0,this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.multiple=!1,this.maxlength=void 0,this.minlength=void 0,this.min=void 0,this.max=void 0,this.step=void 0,this.size=void 0,this.errorText="",this.infoText="",this.warningText="",this.inputElement=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"dateType",void 0),i([r.property(),n("design:type",Object)],s.prototype,"name",void 0),i([r.property(),n("design:type",Object)],s.prototype,"value",void 0),i([r.property(),n("design:type",Object)],s.prototype,"label",void 0),i([r.property(),n("design:type",Object)],s.prototype,"required",void 0),i([r.property(),n("design:type",Object)],s.prototype,"placeholder",void 0),i([r.property(),n("design:type",Object)],s.prototype,"disabled",void 0),i([r.property(),n("design:type",Object)],s.prototype,"checked",void 0),i([r.property(),n("design:type",Object)],s.prototype,"multiple",void 0),i([r.property(),n("design:type",Object)],s.prototype,"maxlength",void 0),i([r.property(),n("design:type",Object)],s.prototype,"minlength",void 0),i([r.property(),n("design:type",Object)],s.prototype,"min",void 0),i([r.property(),n("design:type",Object)],s.prototype,"max",void 0),i([r.property(),n("design:type",Object)],s.prototype,"step",void 0),i([r.property(),n("design:type",Object)],s.prototype,"size",void 0),i([r.property(),n("design:type",Object)],s.prototype,"errorText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"infoText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"warningText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"inputElement",void 0),s=i([r.customElement("nidoca-form-date-showcase-page")],s),t.NidocaFormDateShowcasePage=s},9365:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormInputframeShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.label="",this.errorText="",this.infoText="",this.warningText="",this.selected=!1}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"label",void 0),i([r.property(),n("design:type",Object)],s.prototype,"errorText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"infoText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"warningText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"selected",void 0),s=i([r.customElement("nidoca-form-inputframe-showcase-page")],s),t.NidocaFormInputframeShowcasePage=s},2310:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormShowcasePage=t.NidocaFormOutputDataShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.jsonObject=void 0,this.formData=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"jsonObject",void 0),i([r.property(),n("design:type",Object)],s.prototype,"formData",void 0),s=i([r.customElement("nidoca-form-output-data-showcase-page")],s),t.NidocaFormOutputDataShowcasePage=s;let c=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.formProperties=[],this.autocomplete=!1,this.slotElement=void 0,this.htmlForm=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],c.prototype,"formProperties",void 0),i([r.property(),n("design:type",Object)],c.prototype,"autocomplete",void 0),i([r.property(),n("design:type",Object)],c.prototype,"slotElement",void 0),i([r.property(),n("design:type",Object)],c.prototype,"htmlForm",void 0),c=i([r.customElement("nidoca-form-showcase-page")],c),t.NidocaFormShowcasePage=c},3387:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormTextShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.textType=void 0,this.name="",this.value=void 0,this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.checked=!1,this.multiple=!1,this.maxlength=void 0,this.minlength=void 0,this.min=void 0,this.max=void 0,this.step=void 0,this.size=void 0,this.errorText="",this.infoText="",this.warningText="",this.inputElement=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"textType",void 0),i([r.property(),n("design:type",Object)],s.prototype,"name",void 0),i([r.property(),n("design:type",Object)],s.prototype,"value",void 0),i([r.property(),n("design:type",Object)],s.prototype,"label",void 0),i([r.property(),n("design:type",Object)],s.prototype,"required",void 0),i([r.property(),n("design:type",Object)],s.prototype,"placeholder",void 0),i([r.property(),n("design:type",Object)],s.prototype,"disabled",void 0),i([r.property(),n("design:type",Object)],s.prototype,"checked",void 0),i([r.property(),n("design:type",Object)],s.prototype,"multiple",void 0),i([r.property(),n("design:type",Object)],s.prototype,"maxlength",void 0),i([r.property(),n("design:type",Object)],s.prototype,"minlength",void 0),i([r.property(),n("design:type",Object)],s.prototype,"min",void 0),i([r.property(),n("design:type",Object)],s.prototype,"max",void 0),i([r.property(),n("design:type",Object)],s.prototype,"step",void 0),i([r.property(),n("design:type",Object)],s.prototype,"size",void 0),i([r.property(),n("design:type",Object)],s.prototype,"errorText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"infoText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"warningText",void 0),i([r.property(),n("design:type",Object)],s.prototype,"inputElement",void 0),s=i([r.customElement("nidoca-form-text-showcase-page")],s),t.NidocaFormTextShowcasePage=s},5118:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaGridShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.gridTemplateRows=[],this.gridTemplateColumns=[],this.gridJustifyItems="",this.gridAlignItems="",this.height="",this.minHeight="",this.width="",this.minWidth=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"gridTemplateRows",void 0),i([r.property(),n("design:type",Object)],s.prototype,"gridTemplateColumns",void 0),i([r.property(),n("design:type",Object)],s.prototype,"gridJustifyItems",void 0),i([r.property(),n("design:type",Object)],s.prototype,"gridAlignItems",void 0),i([r.property(),n("design:type",Object)],s.prototype,"height",void 0),i([r.property(),n("design:type",Object)],s.prototype,"minHeight",void 0),i([r.property(),n("design:type",Object)],s.prototype,"width",void 0),i([r.property(),n("design:type",Object)],s.prototype,"minWidth",void 0),s=i([r.customElement("nidoca-grid-showcase-page")],s),t.NidocaGridShowcasePage=s},5651:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaIconShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.icon="",this.color="",this.backgroundColor="",this.iconShadowType="",this.size=void 0,this.sizeUnit="",this.iconTitle="",this.withIconSpace=!1,this.round=!1,this.clickable=!1,this.deactivated=!1}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"icon",void 0),i([r.property(),n("design:type",Object)],s.prototype,"color",void 0),i([r.property(),n("design:type",Object)],s.prototype,"backgroundColor",void 0),i([r.property(),n("design:type",Object)],s.prototype,"iconShadowType",void 0),i([r.property(),n("design:type",Object)],s.prototype,"size",void 0),i([r.property(),n("design:type",Object)],s.prototype,"sizeUnit",void 0),i([r.property(),n("design:type",Object)],s.prototype,"iconTitle",void 0),i([r.property(),n("design:type",Object)],s.prototype,"withIconSpace",void 0),i([r.property(),n("design:type",Object)],s.prototype,"round",void 0),i([r.property(),n("design:type",Object)],s.prototype,"clickable",void 0),i([r.property(),n("design:type",Object)],s.prototype,"deactivated",void 0),s=i([r.customElement("nidoca-icon-showcase-page")],s),t.NidocaIconShowcasePage=s},3531:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaLinkShowcasePage=t.NidocaLinkInterfaceShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.text="",this.href="",this.targetType=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"text",void 0),i([r.property(),n("design:type",Object)],s.prototype,"href",void 0),i([r.property(),n("design:type",Object)],s.prototype,"targetType",void 0),s=i([r.customElement("nidoca-link-interface-showcase-page")],s),t.NidocaLinkInterfaceShowcasePage=s;let c=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.text="",this.href="",this.targetType=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],c.prototype,"text",void 0),i([r.property(),n("design:type",Object)],c.prototype,"href",void 0),i([r.property(),n("design:type",Object)],c.prototype,"targetType",void 0),c=i([r.customElement("nidoca-link-showcase-page")],c),t.NidocaLinkShowcasePage=c},344:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaListItemShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.selectionMode=!1,this.selected=!1}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"selectionMode",void 0),i([r.property(),n("design:type",Object)],s.prototype,"selected",void 0),s=i([r.customElement("nidoca-list-item-showcase-page")],s),t.NidocaListItemShowcasePage=s},1393:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaListShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.selectionMode=!1,this.slotElement=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"selectionMode",void 0),i([r.property(),n("design:type",Object)],s.prototype,"slotElement",void 0),s=i([r.customElement("nidoca-list-showcase-page")],s),t.NidocaListShowcasePage=s},6144:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaNavigationLinkShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.icon="",this.text="",this.href="",this.rendered=!1}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"icon",void 0),i([r.property(),n("design:type",Object)],s.prototype,"text",void 0),i([r.property(),n("design:type",Object)],s.prototype,"href",void 0),i([r.property(),n("design:type",Object)],s.prototype,"rendered",void 0),s=i([r.customElement("nidoca-navigation-link-showcase-page")],s),t.NidocaNavigationLinkShowcasePage=s},661:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaNavigationSectionShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.text="",this.rendered=!1}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"text",void 0),i([r.property(),n("design:type",Object)],s.prototype,"rendered",void 0),s=i([r.customElement("nidoca-navigation-section-showcase-page")],s),t.NidocaNavigationSectionShowcasePage=s},1501:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaNavigationShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.closed=!1,this.navigationType="",this.navigationStyle=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"closed",void 0),i([r.property(),n("design:type",Object)],s.prototype,"navigationType",void 0),i([r.property(),n("design:type",Object)],s.prototype,"navigationStyle",void 0),s=i([r.customElement("nidoca-navigation-showcase-page")],s),t.NidocaNavigationShowcasePage=s},6383:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaProgressShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.progressType=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"progressType",void 0),s=i([r.customElement("nidoca-progress-showcase-page")],s),t.NidocaProgressShowcasePage=s},6606:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaRichMediaShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.src="",this.richMediaType="",this.richMediaProperties=[]}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"src",void 0),i([r.property(),n("design:type",Object)],s.prototype,"richMediaType",void 0),i([r.property(),n("design:type",Object)],s.prototype,"richMediaProperties",void 0),s=i([r.customElement("nidoca-rich-media-showcase-page")],s),t.NidocaRichMediaShowcasePage=s},6903:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaSearchBarShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.placeholder="",this.value="",this.htmlInputElement=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"placeholder",void 0),i([r.property(),n("design:type",Object)],s.prototype,"value",void 0),i([r.property(),n("design:type",Object)],s.prototype,"htmlInputElement",void 0),s=i([r.customElement("nidoca-search-bar-showcase-page")],s),t.NidocaSearchBarShowcasePage=s},8776:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaShowcaseApp=void 0;const r=o(8222),a=o(7106),s=o(8789);let c=class extends a.NidocaAbstractApp{preRender(){const e=Object.create(null,{preRender:{get:()=>super.preRender}});return n(this,void 0,void 0,(function*(){return e.preRender.call(this)}))}renderPage(){let e=r.RouterService.getUniqueInstance().getCurrentPage();switch(console.log("current path: ".concat(e)),e){case"nidoca-flex-container":return s.html` <nidoca-flex-container></nidoca-flex-container> `;case"nidoca-accordion":return s.html` <nidoca-accordion></nidoca-accordion> `;case"nidoca-accordion-item":return s.html` <nidoca-accordion-item></nidoca-accordion-item> `;case"nidoca-box":return s.html` <nidoca-box></nidoca-box> `;case"nidoca-wizard":return s.html` <nidoca-wizard></nidoca-wizard> `;case"nidoca-chip":return s.html` <nidoca-chip></nidoca-chip> `;case"nidoca-progress":return s.html` <nidoca-progress></nidoca-progress> `;case"nidoca-border":return s.html` <nidoca-border></nidoca-border> `;case"nidoca-floating-container":return s.html` <nidoca-floating-container></nidoca-floating-container> `;case"nidoca-button":return s.html` <nidoca-button></nidoca-button> `;case"nidoca-divider":return s.html` <nidoca-divider></nidoca-divider> `;case"nidoca-grid-container":return s.html` <nidoca-grid-container></nidoca-grid-container> `;case"nidoca-form":return s.html` <nidoca-form></nidoca-form> `;case"nidoca-form-combobox":return s.html` <nidoca-form-combobox></nidoca-form-combobox> `;case"nidoca-form-text":return s.html` <nidoca-form-text></nidoca-form-text> `;case"nidoca-form-date":return s.html` <nidoca-form-date></nidoca-form-date> `;case"nidoca-form-inputframe":return s.html` <nidoca-form-inputframe></nidoca-form-inputframe> `;case"nidoca-icon":return s.html` <nidoca-icon></nidoca-icon> `;case"nidoca-rich-media":return s.html` <nidoca-rich-media></nidoca-rich-media> `;case"nidoca-captcha":return s.html` <nidoca-captcha></nidoca-captcha> `;case"nidoca-link":return s.html` <nidoca-link></nidoca-link> `;case"nidoca-list":return s.html` <nidoca-list></nidoca-list> `;case"nidoca-list-item":return s.html` <nidoca-list-item></nidoca-list-item> `;case"nidoca-top-app-bar":return s.html` <nidoca-top-app-bar></nidoca-top-app-bar> `;case"nidoca-navigation":return s.html` <nidoca-navigation></nidoca-navigation> `;case"nidoca-search-bar":return s.html` <nidoca-search-bar></nidoca-search-bar> `;case"nidoca-navigation-link":return s.html` <nidoca-navigation-link></nidoca-navigation-link> `;case"nidoca-visible":return s.html` <nidoca-visible></nidoca-visible> `;case"nidoca-navigation-section":return s.html` <nidoca-navigation-section></nidoca-navigation-section> `;case"nidoca-table":return s.html` <nidoca-table></nidoca-table> `;case"nidoca-spacer":return s.html` <nidoca-spacer></nidoca-spacer> `;case"nidoca-tabs":return s.html` <nidoca-tabs></nidoca-tabs> `;case"nidoca-tab":return s.html` <nidoca-tab></nidoca-tab> `;case"nidoca-tab-content":return s.html` <nidoca-tab-content></nidoca-tab-content> `;case"nidoca-typography":return s.html` <nidoca-typography></nidoca-typography> `;case"nidoca-dialog":return s.html` <nidoca-dialog></nidoca-dialog> `;case"nidoca-showcase":return s.html` <nidoca-showcase></nidoca-showcase> `;case"nidoca-showcase-dashboard-page":default:return s.html` <nidoca-showcase-dashboard-page></nidoca-showcase-dashboard-page> `}}getAppTitle(){return"nidoca showcase"}};c=i([s.customElement("nidoca-showcase-app")],c),t.NidocaShowcaseApp=c},6321:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaShowcaseDashboardPage=void 0;const n=o(8789),r=o(8986);let a=class extends r.NidocaShowcaseTemplate{getMainComponent(){return n.html`Dashboard`}};a=i([n.customElement("nidoca-showcase-dashboard-page")],a),t.NidocaShowcaseDashboardPage=a},5097:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaShowcaseShowcasePage=void 0;const n=o(8789),r=o(8986);let a=class extends r.NidocaShowcaseTemplate{getMainComponent(){return n.html``}};a=i([n.customElement("nidoca-showcase-showcase-page")],a),t.NidocaShowcaseShowcasePage=a},8986:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaShowcaseTemplate=void 0;const i=o(7106),n=o(8789);class r extends i.NidocaTemplate{constructor(){super(),this.navType=i.NavigationType.PERMANENT}getTopContent(){return n.html`
      <nidoca-top-app-bar>
        ${this.getTopLeftComponent()} ${this.getTopMainComponent()} ${this.getTopRightComponent()}
      </nidoca-top-app-bar>
    `}getTopLeftComponent(){return n.html`
      <nidoca-icon title="Menü" slot="leftComponents" icon="menu" .clickable="${!0}"></nidoca-icon>
      <nidoca-typography slot="leftComponents" .typographyType="${i.TypographyType.BODY1}"
        >nidoca showcase
      </nidoca-typography>
    `}getTopMainComponent(){return n.html``}getTopRightComponent(){return n.html``}getLeftNavigationContent(){return n.html`
      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-flex-container>"
        href="nidoca-flex-container"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-accordion>"
        href="nidoca-accordion"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-accordion-item>"
        href="nidoca-accordion-item"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-box>" href="nidoca-box"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-wizard>" href="nidoca-wizard"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-chip>" href="nidoca-chip"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-progress>"
        href="nidoca-progress"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-border>" href="nidoca-border"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-floating-container>"
        href="nidoca-floating-container"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-button>" href="nidoca-button"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-divider>"
        href="nidoca-divider"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-grid-container>"
        href="nidoca-grid-container"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-form>" href="nidoca-form"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-form-combobox>"
        href="nidoca-form-combobox"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-form-text>"
        href="nidoca-form-text"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-form-date>"
        href="nidoca-form-date"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-form-inputframe>"
        href="nidoca-form-inputframe"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-icon>" href="nidoca-icon"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-rich-media>"
        href="nidoca-rich-media"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-captcha>"
        href="nidoca-captcha"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-link>" href="nidoca-link"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-list>" href="nidoca-list"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-list-item>"
        href="nidoca-list-item"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-top-app-bar>"
        href="nidoca-top-app-bar"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-navigation>"
        href="nidoca-navigation"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-search-bar>"
        href="nidoca-search-bar"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-navigation-link>"
        href="nidoca-navigation-link"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-visible>"
        href="nidoca-visible"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-navigation-section>"
        href="nidoca-navigation-section"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-table>" href="nidoca-table"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-spacer>" href="nidoca-spacer"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-tabs>" href="nidoca-tabs"></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-tab>" href="nidoca-tab"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-tab-content>"
        href="nidoca-tab-content"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-typography>"
        href="nidoca-typography"
      ></nidoca-navigation-link>

      <nidoca-navigation-link slot="links" icon="" text="<nidoca-dialog>" href="nidoca-dialog"></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="<nidoca-showcase>"
        href="nidoca-showcase"
      ></nidoca-navigation-link>

      <nidoca-navigation-link
        slot="links"
        icon=""
        text="Dashboard"
        href="nidoca-showcase-dashboard-page"
      ></nidoca-navigation-link>
    `}}t.NidocaShowcaseTemplate=r},5922:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaSpacerShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.spacerSize="",this.spacerAlignment="",this.size=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"spacerSize",void 0),i([r.property(),n("design:type",Object)],s.prototype,"spacerAlignment",void 0),i([r.property(),n("design:type",Object)],s.prototype,"size",void 0),s=i([r.customElement("nidoca-spacer-showcase-page")],s),t.NidocaSpacerShowcasePage=s},1685:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTabContentShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.selected=!1}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"selected",void 0),s=i([r.customElement("nidoca-tab-content-showcase-page")],s),t.NidocaTabContentShowcasePage=s},5889:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTabShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.selected=!1,this.text=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"selected",void 0),i([r.property(),n("design:type",Object)],s.prototype,"text",void 0),s=i([r.customElement("nidoca-tab-showcase-page")],s),t.NidocaTabShowcasePage=s},9923:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTableShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.headers=[],this.rows=[[]]}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"headers",void 0),i([r.property(),n("design:type",Object)],s.prototype,"rows",void 0),s=i([r.customElement("nidoca-table-showcase-page")],s),t.NidocaTableShowcasePage=s},812:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTabsShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.tabSlot=void 0,this.tabContentSlot=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"tabSlot",void 0),i([r.property(),n("design:type",Object)],s.prototype,"tabContentSlot",void 0),s=i([r.customElement("nidoca-tabs-showcase-page")],s),t.NidocaTabsShowcasePage=s},7918:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTopAppBarShowcasePage=void 0;const n=o(8789),r=o(8986);let a=class extends r.NidocaShowcaseTemplate{getMainComponent(){return n.html``}};a=i([n.customElement("nidoca-top-app-bar-showcase-page")],a),t.NidocaTopAppBarShowcasePage=a},979:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTypographyShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.typographyType=void 0,this.typographyAlignment=void 0,this.text=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"typographyType",void 0),i([r.property(),n("design:type",Object)],s.prototype,"typographyAlignment",void 0),i([r.property(),n("design:type",Object)],s.prototype,"text",void 0),s=i([r.customElement("nidoca-typography-showcase-page")],s),t.NidocaTypographyShowcasePage=s},3072:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaVisibleShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.visibleType=""}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"visibleType",void 0),s=i([r.customElement("nidoca-visible-showcase-page")],s),t.NidocaVisibleShowcasePage=s},8323:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaWizardShowcasePage=void 0;const r=o(8789),a=o(8986);let s=class extends a.NidocaShowcaseTemplate{constructor(){super(...arguments),this.wizardSteps=[],this.selectedStep=void 0}getMainComponent(){return r.html``}};i([r.property(),n("design:type",Object)],s.prototype,"wizardSteps",void 0),i([r.property(),n("design:type",Object)],s.prototype,"selectedStep",void 0),s=i([r.customElement("nidoca-wizard-showcase-page")],s),t.NidocaWizardShowcasePage=s}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,t)=>{for(var o in t)__webpack_require__.o(t,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};__webpack_require__(7589),__webpack_require__(7520),__webpack_require__(1711),__webpack_require__(7015),__webpack_require__(2575),__webpack_require__(6703),__webpack_require__(3222),__webpack_require__(8058),__webpack_require__(8436),__webpack_require__(5254),__webpack_require__(7030),__webpack_require__(8786),__webpack_require__(7489),__webpack_require__(9365),__webpack_require__(2310),__webpack_require__(3387),__webpack_require__(5118),__webpack_require__(5651),__webpack_require__(3531),__webpack_require__(344),__webpack_require__(1393),__webpack_require__(6144),__webpack_require__(661),__webpack_require__(1501),__webpack_require__(6383),__webpack_require__(6606),__webpack_require__(6903),__webpack_require__(8776),__webpack_require__(6321),__webpack_require__(5097),__webpack_require__(5922),__webpack_require__(1685),__webpack_require__(5889),__webpack_require__(9923),__webpack_require__(812),__webpack_require__(7918),__webpack_require__(979),__webpack_require__(3072),__webpack_require__(8323)})();