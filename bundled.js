/*! For license information please see bundled.js.LICENSE.txt */
(()=>{"use strict";var e={4729:(e,t,o)=>{o.r(t),o.d(t,{NidocaRouter:()=>i});class i{constructor(){this.listeners=[],window.onpopstate=e=>{console.trace("onpopstate event: location: "+document.location+", state: "+JSON.stringify(e.state)),this.notifyListeners()},document.addEventListener("click",(e=>{if(!this.shouldIgnoreEvent(e)){const t=this.getAnchor(e);t&&!this.shouldIgnoreAnchor(t)&&(e.preventDefault(),t.hash.length>0&&this.navigate(t.hash))}}))}static getUniqueInstance(){return i.uniqueInstance||(i.uniqueInstance=new i),i.uniqueInstance}subscribe(e){console.trace("subscribe router listener"),this.listeners.push(e)}back(){history.back()}forward(){history.forward()}navigate(e,t=null){-1==e.indexOf("#")&&(e="#".concat(e)),console.trace("navigate to: %s",e),null!=t&&console.trace("state: %s",JSON.stringify(t)),document.location.hash!==e?(history.pushState(t,"",e),this.notifyListeners()):console.trace("you are already on page: "+e)}getCurrentState(){return history.state}getStateProperty(e){const t=this.getCurrentState();return null!=t?t[e]:null}getCurrentPage(){return document.location.hash.replace("#","")}getHash(){return document.location.hash}notifyListeners(){const e=this.getCurrentPage();this.listeners.forEach((t=>t.routeChanged(e)))}shouldIgnoreEvent(e){return e.defaultPrevented||0!==e.button||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey}getAnchor(e){for(const t of e.composedPath?e.composedPath():[])if(this.isAnchor(t))return t;let t=e.target;for(;t&&!this.isAnchor(t);)t=t.parentNode;return t&&this.isAnchor(t)?t:null}isAnchor(e){return e.nodeName&&"a"===e.nodeName.toLowerCase()}shouldIgnoreAnchor(e){return!(!e.target||"_self"===e.target.toLowerCase())||(!!e.hasAttribute("download")||(e.origin||this.getAnchorOrigin(e))!==window.location.origin)}getAnchorOrigin(e){const t=e.port,o=e.protocol;return`${o}//${"http:"===o&&"80"===t||"https:"===o&&"443"===t?e.hostname:e.host}`}}},3853:function(e,t,o){var i=this&&this.__createBinding||(Object.create?function(e,t,o,i){void 0===i&&(i=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,i,n)}:function(e,t,o,i){void 0===i&&(i=o),e[i]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||i(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),o(4432),o(5912),o(6462),o(9048),o(7416),o(8688),n(o(9320),t)},9320:function(e,t,o){var i,n=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaMyApp=void 0;const a=o(4729),s=o(9392),c=o(5595);let l=class extends s.LitElement{constructor(){super(),this.content=s.html``,a.NidocaRouter.getUniqueInstance().subscribe(this),this.routeChanged(a.NidocaRouter.getUniqueInstance().getCurrentPage())}routeChanged(e){switch(e){case"privacy":this.content=s.html`<nidoca-page-privacy></nidoca-page-privacy>`;break;case"imprint":this.content=s.html`<nidoca-page-imprint></nidoca-page-imprint>`;break;case"settings":this.content=s.html`<nidoca-page-settings></nidoca-page-settings>`;break;case"terms-of-use":this.content=s.html`<nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;break;default:this.content=s.html`<nidoca-page-main></nidoca-page-main>`}}render(){return s.html`
      <nidoca-template>
        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_self"
          href="https://domoskanonos.github.io/nidoca-documentation/"
          >Homepage</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://domoskanonos.github.io/nidoca-documentation/typedocs/index.html"
          >Typedoc</nidoca-link
        >

        <nidoca-link
          slot="topRight"
          style="padding-right:var(--space-2);"
          targetType="_blank"
          href="https://github.com/domoskanonos/nidoca-webcomponents"
          >Github</nidoca-link
        >

        <div slot="content">${this.content}</div>

        <div slot="left" style="height:var(--height-medium);"></div>
        <nidoca-menu slot="left" theme="primary">
          <nidoca-menu-item
            @nidoca-event-menu-item-clicked="${()=>{a.NidocaRouter.getUniqueInstance().navigate("#main")}}"
            icon="home"
            text="Start"
          ></nidoca-menu-item>
          <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
          <nidoca-menu-item
            text="Impressum"
            @nidoca-event-menu-item-clicked="${()=>{a.NidocaRouter.getUniqueInstance().navigate("#imprint")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Datenschutz"
            @nidoca-event-menu-item-clicked="${()=>{a.NidocaRouter.getUniqueInstance().navigate("#privacy")}}"
          ></nidoca-menu-item>
          <nidoca-menu-item
            text="Nutzungsbedingungen"
            @nidoca-event-menu-item-clicked="${()=>{a.NidocaRouter.getUniqueInstance().navigate("#terms-of-use")}}"
          ></nidoca-menu-item>
          <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
          <nidoca-menu-item
            text="Einstellungen"
            @nidoca-event-menu-item-clicked="${()=>{a.NidocaRouter.getUniqueInstance().navigate("#settings")}}"
          ></nidoca-menu-item>
        </nidoca-menu>
      </nidoca-template>
    `}};n([(0,c.property)({type:Object}),r("design:type","function"==typeof(i="undefined"!=typeof TemplateResult&&TemplateResult)?i:Object)],l.prototype,"content",void 0),l=n([(0,c.customElement)("nidoca-my-app"),r("design:paramtypes",[])],l),t.NidocaMyApp=l},6462:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaPageSettings=void 0;const n=o(9392),r=o(5595);let a=class extends n.LitElement{render(){return n.html`
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
          <nidoca-link href=" https://fonts.google.com/" targetType="_blanck"> https://fonts.google.com/ </nidoca-link>
        </nidoca-article>
      </nidoca-container>
    `}};a.styles=n.css`
    nidoca-article {
      padding-bottom: var(--space-2);
    }
  `,a=i([(0,r.customElement)("nidoca-page-imprint")],a),t.NidocaPageSettings=a},5912:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaPageMain=void 0;const n=o(9392),r=o(5595);let a=class extends n.LitElement{render(){return n.html` <nidoca-container style="padding-top:20vh;padding-bottom:20vh;">
        <div style="display:flex;align-items:center;justify-content:center;align-content:flex-start;">
          <nidoca-img src="logo.svg" width="128px"></nidoca-img>
          <nidoca-text-h1 style="padding-left:var(--space-2);">nidoca-webcomponents</nidoca-text-h1>
        </div>
      </nidoca-container>

      <nidoca-container theme="primary">
        <nidoca-section>
          <nidoca-icon-with-description title="Komponentenbibliothek" icon="local_library">
            Die Nidoca Webcomponents ist eine Sammlung von Webkomponenten mit über 36 Komponenten. Diese sind für den
            direkten Einsatz in deiner Webanwendung. Egal ob normales HTML, Angular, React, Lit. Die Komponenten können
            dank der Webcomponent Technologie überall in andere Frameworks eingebaungen werden.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Leichtgewichtig" icon="code">
            Es ist ein sehr kleines, leichtes Komponenten-Framework, das nur 32 KB klein ist. Es enthält mehr als 30
            Komponenten und diverse Zusatzfunktionen wie Routing / Internationalisierung und Speicherung. Komponenten
            können einfach angepasst werden und sind sehr einfach erweiterbar. erstellen.
          </nidoca-icon-with-description>
          <nidoca-icon-with-description title="Open Source" icon="lightbulb">
            Es ist ein Open-Source-Projekt, das Sie auf Github finden können. Du kannst das Projekt natürlich gerne
            finanziell unterstützen, wenn es dir gefällt.
          </nidoca-icon-with-description>
        </nidoca-section>
      </nidoca-container>
      https://jsfiddle.net/domoskanonos/04ndLcj7/10/
      <nidoca-code>
        https://domoskanonos.github.io/nidoca-documentation/webcomponents/nidoca-webcomponents.js
        https://domoskanonos.github.io/nidoca-documentation/webcomponents/nidoca.css
      </nidoca-code>`}};a.styles=n.css``,a=i([(0,r.customElement)("nidoca-page-main")],a),t.NidocaPageMain=a},7416:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaPagePrivacy=void 0;const n=o(9392),r=o(5595);let a=class extends n.LitElement{render(){return n.html``}};a.styles=n.css``,a=i([(0,r.customElement)("nidoca-page-privacy")],a),t.NidocaPagePrivacy=a},9048:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaPageSettings=void 0;const r=o(9392),a=o(5595),s=o(3012),c=o(2386),l=o(4432);let d=class extends r.LitElement{constructor(){super(...arguments),this.cssVars=[]}firstUpdated(){this.cssVars=((e=document.styleSheets)=>{const t=[];return Array.from(e).forEach((e=>{Array.from(e.cssRules).forEach((e=>{if(!e||!e.style)return;const o=e.style;Array.from(o).forEach((e=>{e.startsWith("--")&&-1==t.indexOf(e)&&t.push(e)}))}))})),t})(),console.log(this.cssVars)}render(){return r.html`
      <nidoca-container>
        <nidoca-article title="CSS Variablen">
          ${(0,s.guard)([this.cssVars],(()=>r.html`
                ${(0,c.repeat)(this.cssVars,(e=>r.html`
                    <nidoca-form-text
                      style="width:100%;padding-bottom: var(--space-3);"
                      @input="${t=>{document.documentElement.style.setProperty(e,t.target?t.target.getOutputData().value:"")}}"
                      type="${e.indexOf("color")>-1?l.NidocaFormTextType.COLOR:l.NidocaFormTextType.TEXT}"
                      name="${e}"
                      value="${getComputedStyle(document.documentElement).getPropertyValue(e).trim()}"
                      label="${e}"
                    ></nidoca-form-text>
                  `))}
              `))}
        </nidoca-article>
      </nidoca-container>
    `}};d.styles=r.css``,i([(0,a.property)({type:Array}),n("design:type",Array)],d.prototype,"cssVars",void 0),d=i([(0,a.customElement)("nidoca-page-settings")],d),t.NidocaPageSettings=d},8688:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaPageTermsOfUse=void 0;const n=o(9392),r=o(5595);let a=class extends n.LitElement{render(){return n.html``}};a.styles=n.css``,a=i([(0,r.customElement)("nidoca-page-terms-of-use")],a),t.NidocaPageTermsOfUse=a},762:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaApp=t.PageReferenceType=void 0;const r=o(9392),a=o(5595),s=o(5595);var c;(c=t.PageReferenceType||(t.PageReferenceType={})).anchor="anchor",c.page="page";let l=class extends r.LitElement{constructor(){super(...arguments),this.loggedIn=!1}updated(e){if(super.updated(e),e.has("root")&&this.root&&this.root.childs&&this.routeTo(this.root.childs[0]),e.has("route")&&this.root){for(let e=0;e<this.root.childs.length;e++){const t=this.root.childs[e];if(t.route==this.route){this.contentComponent=document.createElement(t.rootComponent);break}}this.requestUpdate()}}render(){var e;return this.loggedIn?r.html`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${()=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-logout",{detail:this,bubbles:!0,composed:!0}))}}" icon="logout"></nidoca-icon>

                <span slot="content">${this.contentComponent?r.html`${this.contentComponent}`:r.html``}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${null===(e=this.root)||void 0===e?void 0:e.childs.map((e=>r.html` <nidoca-menu-item
                        text="${e.name}"
                        @click="${()=>{this.routeTo(e)}}"
                      ></nidoca-menu-item>`))}
                </nidoca-menu>
            </nidoca-template>
        `:r.html` <nidoca-page-login
          @nidoca-form-login-submit="${e=>{this.dispatchEvent(new CustomEvent("nidoca-event-app-login",{detail:e.detail,bubbles:!0,composed:!0}))}}"
        ></nidoca-page-login>`}routeTo(e){this.dispatchEvent(new CustomEvent("nidoca-event-app-route",{detail:e.route,bubbles:!0,composed:!0}))}};i([(0,s.property)({type:Array}),n("design:type",Object)],l.prototype,"root",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"loggedIn",void 0),i([(0,s.property)({type:String,converter:String}),n("design:type",Object)],l.prototype,"route",void 0),l=i([(0,a.customElement)("nidoca-app")],l),t.NidocaApp=l},4432:function(e,t,o){var i=this&&this.__createBinding||(Object.create?function(e,t,o,i){void 0===i&&(i=o);var n=Object.getOwnPropertyDescriptor(t,o);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,i,n)}:function(e,t,o,i){void 0===i&&(i=o),e[i]=t[o]}),n=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||i(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaDevice=void 0;var r=o(5614);Object.defineProperty(t,"NidocaDevice",{enumerable:!0,get:function(){return r.NidocaDevice}}),n(o(5098),t),n(o(3666),t),n(o(8591),t),n(o(2757),t),n(o(9046),t),n(o(8350),t),n(o(9656),t),n(o(1617),t),n(o(2474),t),n(o(7443),t),n(o(3515),t),n(o(9261),t),n(o(8353),t),n(o(6692),t),n(o(8976),t),n(o(4697),t),n(o(9754),t),n(o(9287),t),n(o(9637),t),n(o(4404),t),n(o(7546),t),n(o(1289),t),n(o(2666),t),n(o(7457),t),n(o(7603),t),n(o(2350),t),n(o(942),t),n(o(5614),t),n(o(2077),t),n(o(996),t),n(o(7203),t),n(o(1465),t),n(o(3155),t),n(o(6355),t),n(o(3008),t),n(o(8716),t),n(o(6257),t),n(o(8865),t),n(o(2353),t),n(o(882),t),n(o(836),t),n(o(5467),t),n(o(1280),t),n(o(5467),t),n(o(1508),t),n(o(2633),t),n(o(7825),t),n(o(2835),t),n(o(1822),t),n(o(8589),t),n(o(786),t),n(o(3487),t),n(o(7821),t),n(o(4375),t),n(o(5777),t),n(o(8712),t),n(o(1268),t),n(o(5728),t),n(o(8026),t),n(o(7984),t),n(o(6374),t),n(o(2251),t),n(o(5412),t),n(o(1322),t),n(o(2604),t),n(o(4257),t),n(o(8454),t),n(o(1442),t),n(o(3038),t),n(o(1052),t),n(o(3049),t),n(o(6987),t),n(o(8083),t),n(o(7906),t),n(o(7717),t),n(o(2756),t),n(o(5202),t),n(o(8969),t),n(o(6698),t),n(o(9649),t),n(o(762),t)},8591:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaAccordionItem=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.header="",this.opened=!1}render(){return r.html`
      <div @click="${()=>this.toggle()}" class="header">
        <nidoca-text text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened?"keyboard_arrow_down":"keyboard_arrow_up"}"></nidoca-icon>
      </div>
      ${this.opened?r.html` <slot></slot>`:r.html``}
    `}toggle(){console.log("accordion clicked, state="+this.opened),this.opened=Boolean(!this.opened),console.log("accordion clicked, after state="+this.opened),this.dispatchEvent(new CustomEvent("nidoca-event-accordion-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};c.styles=r.css`
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
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"header",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],c.prototype,"opened",void 0),c=i([(0,a.customElement)("nidoca-accordion-item")],c),t.NidocaAccordionItem=c},3666:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaAccordion=t.AccordionType=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(4432),d=o(8591);var p;!function(e){e.SINGLE="SINGLE",e.MULTI="MULTI"}(p=t.AccordionType||(t.AccordionType={}));let h=class extends r.LitElement{constructor(){super(...arguments),this.theme=l.NidocaTheme.surface,this.accordionType=p.SINGLE}render(){return r.html`
      ${l.NidocaThemeHelper.getStyle(this.theme)}
      <slot
        @nidoca-event-accordion-item-clicked="${e=>this.accordionSwitched(e)}"
        id="accordionSlot"
      ></slot>
    `}accordionSwitched(e){const t=e.detail;switch(this.accordionType){case p.SINGLE:if(null!=this.accordionSlot){const e=this.accordionSlot.assignedElements();for(let o=0;o<e.length;o++){const i=e[o];i instanceof d.NidocaAccordionItem&&i!=t&&(i.opened=!1)}}case p.MULTI:}e.stopPropagation()}};h.styles=r.css`
    :host {
      border-top-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
      box-sizing: border-box;
    }

    slot {
      font-size: 0;
    }
  `,i([(0,s.property)({type:l.NidocaTheme,converter:String}),n("design:type",String)],h.prototype,"theme",void 0),i([(0,s.property)({type:p,converter:String}),n("design:type",String)],h.prototype,"accordionType",void 0),i([(0,c.query)("#accordionSlot"),n("design:type",Object)],h.prototype,"accordionSlot",void 0),h=i([(0,a.customElement)("nidoca-accordion")],h),t.NidocaAccordion=h},5202:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaArticle=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.overline="",this.title="",this.summary="",this.text=""}render(){return r.html`
      <div style="display:flex; flex-direction:column;">
        ${this.overline?r.html` <nidoca-text class="paddingBottom">${this.overline}</nidoca-text> `:r.html``}
        ${this.title?r.html` <nidoca-text-h2 class="paddingBottom">${this.title}</nidoca-text-h2> `:r.html``}
        ${this.summary?r.html` <nidoca-text-caption class="paddingBottom">${this.summary}</nidoca-text-caption> `:r.html``}
        ${this.text?r.html` <nidoca-text class="paddingBottom">${this.text}</nidoca-text>`:r.html``}
        <slot></slot>
      </div>
    `}};c.styles=r.css`
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
      padding-bottom: var(--space-2);
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"overline",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"title",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"summary",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"text",void 0),c=i([(0,a.customElement)("nidoca-article")],c),t.NidocaArticle=c},1052:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaAvatar=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(6386);let l=class extends r.LitElement{constructor(){super(...arguments),this.imgSrc=""}render(){return r.html`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.imgSrc}" .richMediaProperties="${[c.NidocaImgProperties.ROUND]}"></nidoca-img-round>
                <nidoca-layout-spacer
                        left="var(--space)"
                        right="var(--space)"
                        top="var(--space)"
                        bottom="var(--space)"
                >
                    <slot></slot>
                </nidoca-layout-spacer>
            </div>
            </div>`}};l.styles=r.css`
    :host {
      display: block;
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"imgSrc",void 0),l=i([(0,a.customElement)("nidoca-avatar")],l),t.NidocaAvatar=l},2756:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaBox=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends r.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.transparent}render(){return r.html`
      ${c.NidocaThemeHelper.getStyle(this.theme)}
      <slot></slot>
    `}};l.styles=r.css`
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
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),n("design:type",Object)],l.prototype,"theme",void 0),l=i([(0,a.customElement)("nidoca-box")],l),t.NidocaBox=l},7443:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaButton=t.NidocaButtonType=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5098);var l;!function(e){e.CONTAINED="CONTAINED",e.OUTLINED="OUTLINED",e.TEXT="TEXT"}(l=t.NidocaButtonType||(t.NidocaButtonType={}));let d=class extends r.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.buttonType=l.CONTAINED,this.leadingIcon="",this.text=""}render(){return r.html`
      <style>
        .OUTLINED {
          color: var(--app-color-${this.theme}-background);
          background-color: var(--app-color-${this.theme});
          border-color: var(--app-color-${this.theme}-background);
        }

        .CONTAINED {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-background);
        }

        .TEXT {
          color: var(--app-color-${this.theme}-background);
        }

        :hover {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <div
        class="container ${this.buttonType}"
        @click="${()=>{this.clicked()}}"
      >
        ${this.leadingIcon?r.html` <nidoca-icon .clickable="${!1}" .icon="${this.leadingIcon}"></nidoca-icon>`:r.html``}

        <nidoca-text-button text="${this.text}">
          <slot></slot>
        </nidoca-text-button>
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-button-clicked",{detail:this,bubbles:!0,composed:!0}))}};d.styles=r.css`
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
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),n("design:type",Object)],d.prototype,"theme",void 0),i([(0,s.property)({type:l,converter:String}),n("design:type",String)],d.prototype,"buttonType",void 0),i([(0,s.property)({type:String}),n("design:type",String)],d.prototype,"leadingIcon",void 0),i([(0,s.property)({type:String}),n("design:type",String)],d.prototype,"text",void 0),d=i([(0,a.customElement)("nidoca-button")],d),t.NidocaButton=d},3049:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaCard=void 0;const r=o(9392),a=o(5595),s=o(5098);let c=class extends r.LitElement{constructor(){super(...arguments),this.theme=s.NidocaTheme.surface}render(){return r.html`
      <style>
        :host {
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `}};c.styles=r.css`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
    }
    slot {
      display: block;
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),n("design:type",String)],c.prototype,"theme",void 0),c=i([(0,a.customElement)("nidoca-card")],c),t.NidocaCard=c},8350:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaChip=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.clickable=!0}render(){return r.html`
      <div class="chip ${this.clickable?"clickable":""}">
        <slot></slot>
      </div>
    `}};c.styles=r.css`
    .chip {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 var(--space-4);
      border-radius: var(--line-height-3);
      line-height: var(--line-height-3);
    }

    .chip:hover {
      background: var(--app-color-surface-background-dark);
    }

    .clickable {
      cursor: pointer;
    }
  `,i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],c.prototype,"clickable",void 0),c=i([(0,a.customElement)("nidoca-chip")],c),t.NidocaChip=c},9656:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaCode=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.code=""}render(){return r.html`
      <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
    `}};c.styles=r.css`
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
      background: var(--app-color-surface-background);
      border-radius: 0.375em;
      border: solid 1px var(--app-color-surface-background-dark);
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
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"code",void 0),c=i([(0,a.customElement)("nidoca-code")],c),t.NidocaCode=c},996:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaContainer=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends r.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.background}render(){return r.html`
      ${c.NidocaThemeHelper.getStyle(this.theme)}
      <slot></slot>
    `}};l.styles=r.css`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: min-content;
    }

    @media only screen and (min-width: 641px) and (max-width: 1918px) {
      slot {
        width: 50%;
      }
    }

    @media only screen and (max-width: 640px) {
      slot {
        width: 90%;
      }
    }

    @media only screen and (min-width: 1919px) {
      slot {
        width: 75%;
      }
    }
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),n("design:type",String)],l.prototype,"theme",void 0),l=i([(0,a.customElement)("nidoca-container")],l),t.NidocaContainer=l},7717:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaDashboardCard=t.NidocaDashboardBox100=t.NidocaDashboardBox50=t.NidocaDashboardBox25=t.NidocaDashboard=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{render(){return r.html` <slot></slot>`}};c.styles=r.css`
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
  `,c=i([(0,a.customElement)("nidoca-dashboard")],c),t.NidocaDashboard=c;let l=class extends r.LitElement{render(){return r.html` <slot></slot>`}};l.styles=r.css`
    :host {
      display: block;
      width: 25%;
    }

    @media only screen and (max-width: 1919px) {
      :host {
        width: 50%;
      }
    }
  `,l=i([(0,a.customElement)("nidoca-dashboard-box-25")],l),t.NidocaDashboardBox25=l;let d=class extends r.LitElement{render(){return r.html` <slot></slot>`}};d.styles=r.css`
    :host {
      width: 50%;
      display: block;
    }
    @media only screen and (max-width: 1919px) {
      :host {
        width: 100%;
      }
    }
  `,d=i([(0,a.customElement)("nidoca-dashboard-box-50")],d),t.NidocaDashboardBox50=d;let p=class extends r.LitElement{render(){return r.html` <slot></slot>`}};p.styles=r.css`
    :host {
      width: 100%;
      display: block;
    }
  `,p=i([(0,a.customElement)("nidoca-dashboard-box-100")],p),t.NidocaDashboardBox100=p;let h=class extends r.LitElement{constructor(){super(...arguments),this.clickable=!0,this.title=""}render(){return r.html`
      <nidoca-card @click="${()=>this.clicked()}" class="${this.clickable?"clickable":""}">
        <nidoca-box>
          <nidoca-text-h6 style="padding-bottom: var(--space-2);">${this.title}</nidoca-text-h6>
          <slot></slot>
        </nidoca-box>
      </nidoca-card>
    `}clicked(){this.clickable&&this.dispatchEvent(new CustomEvent("nidoca-event-dashboard-card-clicked",{detail:this,bubbles:!0,composed:!0}))}};h.styles=r.css`
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
  `,i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],h.prototype,"clickable",void 0),i([(0,s.property)({type:String}),n("design:type",String)],h.prototype,"title",void 0),h=i([(0,a.customElement)("nidoca-dashboard-card")],h),t.NidocaDashboardCard=h},3038:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaDialogDecision=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends r.LitElement{constructor(){super(...arguments),this.show=!1,this.title="Ja oder Nein ?",this.description="Entscheide dich",this.labelButtonYes="Ja",this.labelButtonNo="Nein"}render(){return r.html`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${c.NidocaButtonType.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-yes",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${c.NidocaButtonType.TEXT}"
          @click="${()=>{this.dispatchEvent(new CustomEvent("nidoca-dialog-decision-no",{detail:this,bubbles:!0,composed:!0}))}}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`}};l.styles=r.css``,i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"show",void 0),i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"title",void 0),i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"description",void 0),i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"labelButtonYes",void 0),i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"labelButtonNo",void 0),l=i([(0,a.customElement)("nidoca-dialog-decision")],l),t.NidocaDialogDecision=l},1442:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaDialog=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(1686);let l=class extends r.LitElement{constructor(){super(...arguments),this.show=!1}render(){return this.show?r.html`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${c.NidocaTransitionType.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `:r.html``}};l.styles=r.css`
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
  `,i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"show",void 0),l=i([(0,a.customElement)("nidoca-dialog")],l),t.NidocaDialog=l},1617:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaElevation=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(),this.show=!1,addEventListener("click",(e=>{var t;const o=null===(t=this.associatedElement)||void 0===t?void 0:t.getBoundingClientRect();o&&(o.top>e.clientY||o.right<e.clientX||o.left>e.clientX||o.bottom<e.clientY)&&this.dispatchEvent(new CustomEvent("nidoca-elevation-event-closeme",{detail:this,bubbles:!0,composed:!0}))}))}render(){return this.show?r.html`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `:r.html``}calculatePositionStyle(e){let t="";if(e){const o=e.getBoundingClientRect();o.right>window.innerWidth/2?t+=`right:${window.innerWidth-o.right}px;`:t+=`left:${o.left}px;`,o.top>window.innerHeight/2?t+=`bottom:${o.height+window.innerHeight-o.top}px;`:t+=`top:${o.bottom}px;`}return t}};c.styles=r.css`
    .container {
      position: fixed;
      z-index: 999;
    }
  `,i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],c.prototype,"show",void 0),i([(0,s.property)({type:Object}),n("design:type",Object)],c.prototype,"associatedElement",void 0),c=i([(0,a.customElement)("nidoca-elevation"),n("design:paramtypes",[])],c),t.NidocaElevation=c},2666:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormAbstractInputElement=t.FormOutputData=void 0;const i=o(9392);t.FormOutputData=class{constructor(){this.key=""}};class n extends i.LitElement{}t.NidocaFormAbstractInputElement=n},8865:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormCaptcha=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(796),d=o(4432),p=o(8353);let h=class extends r.LitElement{constructor(){super(...arguments),this.label="",this.placeholder="",this.name="",this.min=1,this.max=10,this.errorText="",this.numberOne=1,this.numberTwo=1}render(){return r.html`
      <nidoca-form-text
        theme="${(0,l.ifDefined)(this.theme)}"
        id="inputfield"
        placeholder="${this.placeholder}"
        label="${this.label.concat(" ").concat(String(this.numberOne)).concat(" + ").concat(String(this.numberTwo)).concat(" = ?")}"
        @nidoca-form-text-focusout="${()=>this.validate()}"
        name="${this.name}"
        trailingIcon="create"
        type="${p.NidocaFormTextType.NUMBER}"
        value=""
      ></nidoca-form-text>
    `}updated(e){(e.has("min")||e.has("max"))&&this.generateNewNumber(),super.updated(e)}generateNewNumber(){this.numberOne=Math.round(this.getRandomNumber(this.min,this.max)),this.numberTwo=Math.round(this.getRandomNumber(this.min,this.max)),this.requestUpdate()}getRandomNumber(e,t){return Math.random()*(t-e)+e}isValid(){return null!=this.inputfield&&this.numberOne+this.numberTwo==Number(this.inputfield.getOutputData().value)}validate(){const e=this.isValid();return e&&null!=this.inputfield?this.inputfield.errorText="":null!=this.inputfield&&(this.inputfield.errorText=this.errorText),e}};h.styles=r.css`
    :host {
      display: block;
      width: 100%;
    }
  `,i([(0,s.property)({type:d.NidocaTheme,converter:String}),n("design:type",Object)],h.prototype,"theme",void 0),i([(0,s.property)({type:String}),n("design:type",String)],h.prototype,"label",void 0),i([(0,s.property)({type:String}),n("design:type",String)],h.prototype,"placeholder",void 0),i([(0,s.property)({type:String}),n("design:type",String)],h.prototype,"name",void 0),i([(0,s.property)({type:Number}),n("design:type",Number)],h.prototype,"min",void 0),i([(0,s.property)({type:Number}),n("design:type",Number)],h.prototype,"max",void 0),i([(0,s.property)({type:String}),n("design:type",String)],h.prototype,"errorText",void 0),i([(0,c.query)("#inputfield"),n("design:type",Object)],h.prototype,"inputfield",void 0),h=i([(0,a.customElement)("nidoca-form-captcha")],h),t.NidocaFormCaptcha=h},4404:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormChangePassword=void 0;const r=o(9392),a=o(5595),s=o(4432);let c=class extends r.LitElement{constructor(){super(...arguments),this.theme=s.NidocaTheme.surface,this.label="Passwort ändern",this.oldPasswordLabel="Altes Passwort",this.newPasswordLabel="Neues Passwort",this.repeatNewPasswordLabel="Wiederholen",this.buttonLabel="Ändern",this.showErrorMessageSamePassword=!1,this.errorMessageSamePasswordLabel="Altes und neues Passwort dürfen nicht übereinstimmen.",this.showErrorMessagePasswordDiff=!1,this.errorMessagePasswordDiffLabel="Die Passwörter stimmen nicht überein"}render(){return r.html`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            id="oldPassword"
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${s.NidocaFormTextType.PASSWORD}"
            label="${this.oldPasswordLabel}"
            name="oldPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="newPassword"
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${s.NidocaFormTextType.PASSWORD}"
            label="${this.newPasswordLabel}"
            name="newPassword"
            required
          ></nidoca-form-text>

          <nidoca-form-text
            id="repeatNewPassword"
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${s.NidocaFormTextType.PASSWORD}"
            label="${this.repeatNewPasswordLabel}"
            name="repeatNewPassword"
            required
          ></nidoca-form-text>

          <nidoca-button
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.changePassword()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
        ${this.showErrorMessageSamePassword?r.html` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessageSamePasswordLabel}"
            ></nidoca-text>`:r.html``}
        ${this.showErrorMessagePasswordDiff?r.html` <nidoca-text
              style="color:var(--app-color-error-background)"
              text="${this.errorMessagePasswordDiffLabel}"
            ></nidoca-text>`:r.html``}
      </nidoca-box>
    `}changePassword(){var e,t,o,i,n;(null===(e=this.formComponent)||void 0===e?void 0:e.validate())&&(this.showErrorMessagePasswordDiff=!1,(null===(t=this.newPasswordInputField)||void 0===t?void 0:t.getOutputData().value)!=(null===(o=this.repeatNewPasswordInputField)||void 0===o?void 0:o.getOutputData().value)&&(this.showErrorMessagePasswordDiff=!0),this.showErrorMessageSamePassword=!1,(null===(i=this.oldPasswordInputField)||void 0===i?void 0:i.getOutputData().value)==(null===(n=this.newPasswordInputField)||void 0===n?void 0:n.getOutputData().value)&&(this.showErrorMessageSamePassword=!0),this.showErrorMessagePasswordDiff||this.showErrorMessageSamePassword?this.requestUpdate():this.dispatchEvent(new CustomEvent("nidoca-form-change-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0})))}};c.styles=r.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),n("design:type",String)],c.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],c.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],c.prototype,"oldPasswordLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],c.prototype,"newPasswordLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],c.prototype,"repeatNewPasswordLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],c.prototype,"buttonLabel",void 0),i([(0,a.query)("#form"),n("design:type",Object)],c.prototype,"formComponent",void 0),i([(0,a.query)("#oldPassword"),n("design:type",Object)],c.prototype,"oldPasswordInputField",void 0),i([(0,a.query)("#newPassword"),n("design:type",Object)],c.prototype,"newPasswordInputField",void 0),i([(0,a.query)("#repeatNewPassword"),n("design:type",Object)],c.prototype,"repeatNewPasswordInputField",void 0),i([(0,a.property)(),n("design:type",String)],c.prototype,"errorMessageSamePasswordLabel",void 0),i([(0,a.property)(),n("design:type",String)],c.prototype,"errorMessagePasswordDiffLabel",void 0),c=i([(0,a.customElement)("nidoca-form-change-password")],c),t.NidocaFormChangePassword=c},9261:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormCombobox=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(2386),d=o(3012),p=o(2666),h=o(5098);let u=class extends p.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.theme=h.NidocaTheme.surface,this.trailingIcon="",this.label="",this.errorText="",this.infoText="",this.warningText="",this.value="",this.options=[],this.name="",this.required=!0,this.multiple=!1,this.size=1}render(){return r.html` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: brightness(var(--app-darken-1));
        }

        option {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer">
        ${this.trailingIcon?r.html` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`:r.html``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
          <select
            id="selectElement"
            name="${this.name}"
            size="${this.size}"
            ?required="${this.required}"
            ?multiple="${this.multiple}"
          >
            ${(0,d.guard)([this.value,this.options],(()=>r.html`
                ${(0,l.repeat)(this.options,(e=>null==e?r.html` <option></option>`:this.isSelectedOption(e)?r.html` <option value="${e.key}" selected>${e.value}</option> `:r.html` <option value="${e.key}">${e.value}</option> `))}
              `))}
          </select>
        </div>
      </div>
      ${this.infoText||this.warningText||this.errorText?r.html`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?r.html` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:r.html``}
              ${this.warningText?r.html` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:r.html``}
              ${this.errorText?r.html` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:r.html``}
            </div>
          `:r.html``}`}getOutputData(){let e=this.value;if(null!=this.selectElement&&this.multiple){e=[];for(let t=0,o=this.selectElement.options.length;t<o;t++)this.selectElement.options[t].selected&&e.push(this.options[t].key)}else null!=this.selectElement&&(e=0==this.selectElement.value.length?null:this.selectElement.value);return{key:this.name,value:e}}validate(){return this.errorText="",null==this.selectElement||this.selectElement.validity.valid||this.selectElement.validationMessage==this.errorText||(this.errorText=this.selectElement.validationMessage),0==this.errorText.length}isSelectedOption(e){if(this.multiple){let t=!1;for(const o of this.value)if(t=e.key===o,t)return!0}return this.value===e.key}static enumToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),Object.keys(e).forEach((t=>{o.push({key:t,value:e[t]})})),o}static stringArrayToOptions(e,t=!0){const o=[];return t&&o.push({key:"",value:""}),e.forEach((e=>{o.push({key:e,value:e})})),o}static toComboboxOptions(e=null,t=null){if(null==e)return[];const o=[];return Object.values(e).forEach((i=>{let n=String(Object.keys(e)[Object.values(e).indexOf(i)]);t&&(n=n.concat(t)),o.push({key:i,value:n})})),o}};u.styles=r.css`
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
  `,i([(0,s.property)({type:h.NidocaTheme,converter:String}),n("design:type",String)],u.prototype,"theme",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"trailingIcon",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"label",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"errorText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"infoText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"warningText",void 0),i([(0,s.property)(),n("design:type",Object)],u.prototype,"value",void 0),i([(0,s.property)({type:Array}),n("design:type",Array)],u.prototype,"options",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"name",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],u.prototype,"required",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],u.prototype,"multiple",void 0),i([(0,s.property)({type:Number}),n("design:type",Number)],u.prototype,"size",void 0),i([(0,c.query)("#selectElement"),n("design:type",Object)],u.prototype,"selectElement",void 0),u=i([(0,a.customElement)("nidoca-form-combobox")],u),t.NidocaFormCombobox=u},6698:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormContact=void 0;const r=o(9392),a=o(5595),s=o(796),c=o(4432);let l=class extends r.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.label="Deine Nachricht",this.nameLabel="Dein Name",this.emailLabel="Deine Email",this.titleLabel="Betreff",this.messageLabel="Deine Nachricht",this.buttonLabel="Senden"}render(){return r.html`
      <nidoca-box theme="${(0,s.ifDefined)(this.theme)}">
        <nidoca-form id="authenitcate-form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>
          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            name="name"
            textType="${c.NidocaFormTextType.TEXT}"
            value=""
            label="${this.nameLabel}"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
            required
          ></nidoca-form-text>
          <nidoca-form-text
            label="${this.titleLabel}"
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.TEXT}"
            value=""
            label="title"
            required
          ></nidoca-form-text>
          <nidoca-form-textarea
            label="${this.messageLabel}"
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            name="message"
            trailingIcon="vpn_key"
            required
          ></nidoca-form-textarea>
          <nidoca-button
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.sendMessage()}"
            .buttonType="${c.NidocaButtonType.CONTAINED}"
            >${this.buttonLabel}
          </nidoca-button>
        </nidoca-form>
      </nidoca-box>
    `}sendMessage(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-contact-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};l.styles=r.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:c.NidocaTheme,converter:String}),n("design:type",Object)],l.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"nameLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"emailLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"titleLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"messageLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"buttonLabel",void 0),i([(0,a.query)("#authenitcate-form"),n("design:type",Object)],l.prototype,"formComponent",void 0),l=i([(0,a.customElement)("nidoca-form-contact")],l),t.NidocaFormContact=l},6692:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormDate=void 0;const r=o(5595),a=o(4432);let s=class extends a.NidocaFormText{constructor(){super(),this.type=a.NidocaFormTextType.DATE}};s=i([(0,r.customElement)("nidoca-form-date"),n("design:paramtypes",[])],s),t.NidocaFormDate=s},9287:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormNewsletter=void 0;const r=o(9392),a=o(5595),s=o(796),c=o(4432);let l=class extends r.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.label="Newsletter",this.emailLabel="Deine Emailadresse",this.buttonLabel="Registrieren"}render(){return r.html`
      <nidoca-box theme="${(0,s.ifDefined)(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-newsletter-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};l.styles=r.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:c.NidocaTheme,converter:String}),n("design:type",Object)],l.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"emailLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"buttonLabel",void 0),i([(0,a.query)("#form"),n("design:type",Object)],l.prototype,"formComponent",void 0),l=i([(0,a.customElement)("nidoca-form-newsletter")],l),t.NidocaFormNewsletter=l},7546:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormRegister=void 0;const r=o(9392),a=o(5595),s=o(796),c=o(4432);let l=class extends r.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.label="Registrieren",this.emailLabel="Email",this.passwordLabel="Passwort",this.buttonLabel="Registrieren"}render(){return r.html`
      <nidoca-box theme="${(0,s.ifDefined)(this.theme)}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="account_circle"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-form-text
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${c.NidocaFormTextType.PASSWORD}"
            label="${this.passwordLabel}"
            name="password"
            trailingIcon="vpn_key"
            required
            minLength="8"
          ></nidoca-form-text>

          <nidoca-button
            theme="${c.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-register-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};l.styles=r.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:c.NidocaTheme,converter:String}),n("design:type",Object)],l.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"emailLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"passwordLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],l.prototype,"buttonLabel",void 0),i([(0,a.query)("#form"),n("design:type",Object)],l.prototype,"formComponent",void 0),l=i([(0,a.customElement)("nidoca-form-register")],l),t.NidocaFormRegister=l},9637:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormResetPassword=void 0;const r=o(9392),a=o(5595),s=o(4432);let c=class extends r.LitElement{constructor(){super(...arguments),this.theme=s.NidocaTheme.primary,this.label="Passwort zurücksetzen",this.emailLabel="Deine Emailadresse",this.buttonLabel="Zurücksetzen"}render(){return r.html`
      <nidoca-box theme="${this.theme}">
        <nidoca-form id="form">
          <nidoca-text-h2 class="paddingBottom">${this.label}</nidoca-text-h2>

          <nidoca-form-text
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            textType="${s.NidocaFormTextType.EMAIL}"
            label="${this.emailLabel}"
            name="email"
            trailingIcon="email"
            required
            minLength="4"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
          ></nidoca-form-text>

          <nidoca-button
            theme="${s.NidocaThemeHelper.getOposite(this.theme)}"
            class="paddingBottom"
            @nidoca-event-button-clicked="${()=>this.register()}"
            >${this.buttonLabel}
          </nidoca-button>

          <slot></slot>
        </nidoca-form>
      </nidoca-box>
    `}register(){this.formComponent&&this.formComponent.validate()&&this.dispatchEvent(new CustomEvent("nidoca-form-reset-password-submit",{detail:this.formComponent.getOutputData(),bubbles:!0,composed:!0}))}};c.styles=r.css`
    :host {
      display: block;
      width: 100%;
    }

    .paddingBottom {
      padding-bottom: var(--space-3);
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),n("design:type",String)],c.prototype,"theme",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],c.prototype,"label",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],c.prototype,"emailLabel",void 0),i([(0,a.property)({type:String,converter:String}),n("design:type",String)],c.prototype,"buttonLabel",void 0),i([(0,a.query)("#form"),n("design:type",Object)],c.prototype,"formComponent",void 0),c=i([(0,a.customElement)("nidoca-form-reset-password")],c),t.NidocaFormResetPassword=c},9754:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormSwitch=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(4432),d=o(2666);let p=class extends d.NidocaFormAbstractInputElement{constructor(){super(),this.name="",this.label="",this.infoText="",this.errorText="",this.warningText="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=l.NidocaTheme.primary,this.theme=l.NidocaThemeHelper.prototype.getParentTheme(this)||l.NidocaTheme.background}render(){return r.html`
      <style>
        .slider {
          background-color: var(--app-color-${this.theme}-border);
        }

        .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }

        input:checked + .slider:before {
          background-color: var(--app-color-${this.theme});
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

        ${this.infoText.length>0?r.html` <nidoca-text-caption text="${this.infoText}"></nidoca-text-caption>`:r.html``}

        <label class="switch" slot="meta">
          <input
            id="inputElement"
            name="${this.name}"
            type="checkbox"
            ?checked="${this.checked}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            @input="${e=>{this.checked=e.target.checked,console.log(this.checked)}}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      ${this.warningText?r.html` <nidoca-text-error text="${this.warningText}"></nidoca-text-error>`:r.html``}
      ${this.errorText?r.html` <nidoca-text-error text="${this.errorText}"></nidoca-text-error>`:r.html``}
    `}getOutputData(){return{key:this.name,value:this.checked}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};p.styles=r.css`
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
  `,i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"name",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"label",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"infoText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"errorText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"warningText",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],p.prototype,"required",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],p.prototype,"disabled",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],p.prototype,"checked",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"theme",void 0),i([(0,c.query)("#inputElement"),n("design:type",Object)],p.prototype,"inputElement",void 0),p=i([(0,a.customElement)("nidoca-form-switch"),n("design:paramtypes",[])],p),t.NidocaFormSwitch=p},8353:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormText=t.NidocaFormTextType=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(796),d=o(5098),p=o(2666);var h;!function(e){e.COLOR="color",e.EMAIL="email",e.HIDDEN="hidden",e.NUMBER="number",e.PASSWORD="password",e.TEL="tel",e.TEXT="text",e.SEARCH="search",e.URL="url",e.DATE="date",e.DATETIME_LOCAL="datetime-local",e.MONTH="month",e.TIME="time",e.WEEK="week"}(h=t.NidocaFormTextType||(t.NidocaFormTextType={}));let u=class extends p.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.type=h.TEXT,this.label="",this.placeholder="",this.trailingIcon="",this.errorText="",this.infoText="",this.warningText="",this.name="",this.value="",this.required=!1,this.disabled=!1,this.checked=!1,this.theme=d.NidocaTheme.surface}render(){return this.type==h.HIDDEN?r.html`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`:r.html` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }

            .parentContainer,
            ::slotted(.parentContainer) {
              border-color: var(--app-color-${this.theme}-border);
            }

            .parentContainer:focus-within,
            ::slotted(.parentContainer:focus-within) {
              border-color: var(--app-color-${this.theme}-border);
              filter: contrast(var(--app-color-percent-selected));
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon?r.html` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`:r.html``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${(0,l.ifDefined)(this.size)}"
                minlength="${(0,l.ifDefined)(this.minlength)}"
                maxlength="${(0,l.ifDefined)(this.maxlength)}"
                pattern="${(0,l.ifDefined)(this.pattern)}"
                min="${(0,l.ifDefined)(this.min)}"
                max="${(0,l.ifDefined)(this.max)}"
                step="${(0,l.ifDefined)(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText||this.warningText||this.errorText?r.html`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText?r.html` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:r.html``}
                  ${this.warningText?r.html` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`:r.html``}
                  ${this.errorText?r.html` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`:r.html``}
                </div>
              `:r.html``}`}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:null==t?void 0:t.trim()}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage,this.inputElement.validity.patternMismatch&&this.pattern&&(this.errorText=this.errorText.concat(" Format: ").concat(this.pattern))),""==this.errorText}};u.styles=r.css`
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
  `,i([(0,s.property)({type:h,converter:String}),n("design:type",String)],u.prototype,"type",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"label",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"placeholder",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"trailingIcon",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"errorText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"infoText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"warningText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],u.prototype,"name",void 0),i([(0,s.property)(),n("design:type",String)],u.prototype,"value",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],u.prototype,"required",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],u.prototype,"disabled",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],u.prototype,"checked",void 0),i([(0,s.property)({type:Number}),n("design:type",Object)],u.prototype,"maxlength",void 0),i([(0,s.property)({type:Number}),n("design:type",Object)],u.prototype,"minlength",void 0),i([(0,s.property)({type:Number}),n("design:type",Object)],u.prototype,"min",void 0),i([(0,s.property)({type:Number}),n("design:type",Object)],u.prototype,"max",void 0),i([(0,s.property)({type:String}),n("design:type",Object)],u.prototype,"step",void 0),i([(0,s.property)({type:Number}),n("design:type",Object)],u.prototype,"size",void 0),i([(0,s.property)({type:String}),n("design:type",Object)],u.prototype,"pattern",void 0),i([(0,c.query)("#inputElement"),n("design:type",Object)],u.prototype,"inputElement",void 0),i([(0,s.property)({type:d.NidocaTheme,converter:String}),n("design:type",String)],u.prototype,"theme",void 0),u=i([(0,a.customElement)("nidoca-form-text")],u),t.NidocaFormText=u},8976:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormTextarea=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(4432),d=o(2666);let p=class extends d.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.theme=l.NidocaTheme.surface,this.infoText="",this.warningText="",this.errorText="",this.name="",this.value="",this.label="",this.required=!1,this.placeholder="",this.disabled=!1,this.rows=5}render(){return r.html` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .parentContainer,
        ::slotted(.parentContainer) {
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          filter: contrast(var(--app-color-percent-hover));
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

      ${this.infoText||this.warningText||this.errorText?r.html`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText?r.html` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>`:r.html``}
              ${this.warningText?r.html` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`:r.html``}
              ${this.errorText?r.html` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`:r.html``}
            </div>
          `:r.html``}`}getOutputData(){var e;const t=null===(e=this.inputElement)||void 0===e?void 0:e.value;return{key:this.name,value:t}}validate(){return this.errorText="",null==this.inputElement||this.inputElement.validity.valid||this.inputElement.validationMessage==this.errorText||(this.errorText=this.inputElement.validationMessage),""==this.errorText}};p.styles=r.css`
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
  `,i([(0,s.property)({type:l.NidocaTheme,converter:String}),n("design:type",String)],p.prototype,"theme",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"infoText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"warningText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"errorText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"name",void 0),i([(0,s.property)(),n("design:type",String)],p.prototype,"value",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"label",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],p.prototype,"required",void 0),i([(0,s.property)({type:String}),n("design:type",String)],p.prototype,"placeholder",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],p.prototype,"disabled",void 0),i([(0,s.property)({type:Number}),n("design:type",Number)],p.prototype,"rows",void 0),i([(0,c.query)("#inputElement"),n("design:type",Object)],p.prototype,"inputElement",void 0),p=i([(0,a.customElement)("nidoca-form-textarea")],p),t.NidocaFormTextarea=p},4697:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaFormUpload=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(796),d=o(4432),p=o(2666);let h=class extends p.NidocaFormAbstractInputElement{constructor(){super(...arguments),this.theme=d.NidocaTheme.primary}validate(){throw new Error("Method not implemented.")}getOutputData(){throw new Error("Method not implemented.")}render(){return r.html`
      <nidoca-box theme="${(0,l.ifDefined)(this.theme)}">
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
    `}upload(){var e;null===(e=this.inputElement)||void 0===e||e.click()}};h.styles=r.css`
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
  `,i([(0,s.property)({type:d.NidocaTheme,converter:String}),n("design:type",Object)],h.prototype,"theme",void 0),i([(0,c.query)("#inputElement"),n("design:type",Object)],h.prototype,"inputElement",void 0),h=i([(0,a.customElement)("nidoca-form-upload")],h),t.NidocaFormUpload=h},3515:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaForm=t.NidocaFormOutputData=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5595),l=o(2666);t.NidocaFormOutputData=class{constructor(){this.formData=FormData.prototype}};let d=class extends r.LitElement{constructor(){super(...arguments),this.autocomplete=!0}render(){return r.html`
      <form autocomplete="${this.autocomplete?"on":"off"}">
        <slot id="slotElement"></slot>
      </form>
    `}getOutputData(){const e=new FormData,t={};for(const o of this.getInputElements(this.slotElement)){const i=o.getOutputData();t[i.key]=i.value,e.append(i.key,i.value)}const o={};return o.jsonObject=t,o.formData=e,o}validate(){let e=!0;for(const t of this.getInputElements(this.slotElement))t.validate()||(e=!1);return e||this.dispatchEvent(new CustomEvent("nidoca-form-validation-failed",{detail:this.getOutputData(),bubbles:!0,composed:!0})),e}getInputElements(e){if(null==e)return[];const t=[],o=e.assignedElements({flatten:!0});for(let e=0;e<o.length;e++){const i=o[e];this.recursiveInputElementSearch(i,t)}return t}recursiveInputElementSearch(e,t){if(e instanceof l.NidocaFormAbstractInputElement)t.push(e);else if(e.hasChildNodes()){const o=e.children;for(const e of[].slice.call(o))this.recursiveInputElementSearch(e,t)}}};d.styles=r.css`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `,i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],d.prototype,"autocomplete",void 0),i([(0,c.query)("#slotElement"),n("design:type",Object)],d.prototype,"slotElement",void 0),d=i([(0,a.customElement)("nidoca-form")],d),t.NidocaForm=d},6987:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaGallery=void 0;const n=o(9392),r=o(5595);let a=class extends n.LitElement{render(){return n.html`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </nidoca-layout-spacer>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();for(let e=0;e<o.length;e++){const t=o[e].classList;t.contains("flexItem")||t.add("flexItem"),t.contains("flexItemDevice")||t.add("flexItemDevice")}}};a.styles=n.css`
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
  `,a=i([(0,r.customElement)("nidoca-gallery")],a),t.NidocaGallery=a},7457:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaHr=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5098);let l=class extends r.LitElement{constructor(){super(),this.theme=c.NidocaThemeHelper.prototype.getParentTheme(this)||c.NidocaTheme.background}render(){return r.html`
      <style>
        hr {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }
      </style>
      <hr />
    `}};l.styles=r.css`
    :host,
    ::slotted(:host) {
      display: block;
      padding-top: var(--space-4);
      padding-bottom: var(--space-4);
    }
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),n("design:type",String)],l.prototype,"theme",void 0),l=i([(0,a.customElement)("nidoca-hr"),n("design:paramtypes",[])],l),t.NidocaHr=l},3155:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaIconExtended=t.NidocaIconShadowType=void 0;const a=o(9392),s=o(5595),c=o(5595),l=o(4432);class d{}t.NidocaIconShadowType=d,d.NONE="NONE",d.DEFAULT_SHADOW="DEFAULT_SHADOW",d.SHADOW_1="SHADOW_1",d.SHADOW_2="SHADOW_2",d.SHADOW_3="SHADOW_3";let p=class extends a.LitElement{constructor(){super(...arguments),this.theme=l.NidocaTheme.primary,this.shadowType=d.DEFAULT_SHADOW,this.icon="",this.clickable=!0,this.deactivated=!1}render(){return a.html`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <span class="iconExtended round ${this.shadowType}">
        <nidoca-icon
          .deactivated="${this.deactivated}"
          .clickable="${this.clickable}"
          icon="${this.icon}"
          style="font-size: inherit;"
        ></nidoca-icon>
      </span>
    `}clicked(){return r(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};p.styles=a.css`
    .round {
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
  `,i([(0,c.property)({type:String}),n("design:type",String)],p.prototype,"theme",void 0),i([(0,c.property)({type:Object}),n("design:type",d)],p.prototype,"shadowType",void 0),i([(0,c.property)({type:String}),n("design:type",String)],p.prototype,"icon",void 0),i([(0,c.property)({type:Boolean}),n("design:type",Boolean)],p.prototype,"clickable",void 0),i([(0,c.property)({type:Boolean}),n("design:type",Boolean)],p.prototype,"deactivated",void 0),p=i([(0,s.customElement)("nidoca-icon-extended")],p),t.NidocaIconExtended=p},8969:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaIconWithDescription=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.primaryText="",this.text="",this.icon=""}render(){return r.html`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `}};c.styles=r.css`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"primaryText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"text",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"icon",void 0),c=i([(0,a.customElement)("nidoca-icon-with-description")],c),t.NidocaIconWithDescription=c},1465:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaIcon=void 0;const a=o(9392),s=o(5595),c=o(5595);let l=class extends a.LitElement{constructor(){super(...arguments),this.icon="",this.clickable=!0,this.deactivated=!1,this.primaryText=""}render(){return a.html`
      <i
        class="material-icons ${this.deactivated?"deactivated":""} ${this.clickable?"clickable":""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `}clicked(){return r(this,void 0,void 0,(function*(){if(this.clickable&&!this.deactivated){const e="nidoca-event-icon-clicked";console.log("dispatch custom event: %s",e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}))}};l.styles=a.css`
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
  `,i([(0,c.property)({type:String}),n("design:type",String)],l.prototype,"icon",void 0),i([(0,c.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"clickable",void 0),i([(0,c.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"deactivated",void 0),i([(0,c.property)({type:String}),n("design:type",String)],l.prototype,"primaryText",void 0),l=i([(0,s.customElement)("nidoca-icon")],l),t.NidocaIcon=l},6386:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaImgRoundXX=t.NidocaImgProperties=void 0;const r=o(9392),a=o(5595);class s{}t.NidocaImgProperties=s,s.ROUND="ROUND",s.CLICKABLE="CLICKABLE",s.ZOOM_WRAPPED="ZOOM_WRAPPED",s.FULL_WIDTH="FULL_WIDTH";class c extends r.LitElement{constructor(){super(...arguments),this.src="http://picsum.photos/400/300",this.width="100%",this.height="100%",this.richMediaProperties=[s.CLICKABLE,s.FULL_WIDTH]}render(){return r.html`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"
        ><img width="${this.width}" height="${this.height}" src="${this.src}"
      /></span>
    `}toRichMediaPropertiesString(e){let t="";return e.forEach((e=>{t=t.concat(" ").concat("")})),t}}c.styles=r.css`
    :host,
    span {
      margin: 0;
      padding: 0;
      font-size: 0;
      letter-spacing: 0;
      line-height: 0;
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
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
    .FULL_WIDTH img {
      width: 100%;
    }

    .ROUND {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
    }
    .ROUND img {
      padding: 0.25em;
      border-radius: 50%;
      width: 100%;
    }

    @media only screen and (max-width: 768px), only screen and (orientation: portrait) {
    }
  `,i([(0,a.property)({type:String}),n("design:type",String)],c.prototype,"src",void 0),i([(0,a.property)({type:String}),n("design:type",String)],c.prototype,"width",void 0),i([(0,a.property)({type:String}),n("design:type",String)],c.prototype,"height",void 0),i([(0,a.property)({type:s,converter:Array}),n("design:type",Array)],c.prototype,"richMediaProperties",void 0),t.NidocaImgRoundXX=c},8716:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaImgRound=void 0;const n=o(9392),r=o(5595),a=o(3008);let s=class extends a.NidocaImg{render(){return n.html`<img width="${this.width}" height="${this.height}" src="${this.src}" />`}};s.styles=n.css`
    :host {
      font-size: 0;
      display: block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }
  `,s=i([(0,r.customElement)("nidoca-img-round")],s),t.NidocaImgRound=s},3008:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaImg=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.src="",this.width="100%",this.height="100%"}render(){return this.src?r.html`<img width="${this.width}" height="${this.height}" src="${this.src}" />`:r.html``}};c.styles=r.css`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"src",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"width",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"height",void 0),c=i([(0,a.customElement)("nidoca-img")],c),t.NidocaImg=c},2077:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaLayoutFloatingContainer=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.height="auto",this.width="auto",this.left="auto",this.top="auto",this.right="auto",this.bottom="auto"}render(){return r.html`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height,this.width,this.left,this.right,this.top,this.bottom)}"
      ></slot>
    `}toStyle(e,t,o,i,n,r){return"height:".concat(e).concat(";").concat("width:").concat(t).concat(";").concat("left:").concat(o).concat(";").concat("right:").concat(i).concat(";").concat("top:").concat(n).concat(";").concat("bottom:").concat(r).concat(";")}};c.styles=r.css`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"height",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"width",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"left",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"top",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"right",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"bottom",void 0),c=i([(0,a.customElement)("nidoca-layout-floating")],c),t.NidocaLayoutFloatingContainer=c},5614:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaDevice=void 0,t.NidocaDevice=class{constructor(e,t,o=10240){this.key=e,this.minWidth=t,this.maxWidth=o}asMediaStyle(e){let t="@media ";return this.minWidth&&(t=t.concat("(min-width: ").concat(String(this.minWidth)).concat("px)"),this.maxWidth&&(t=t.concat(" and "))),this.maxWidth&&(t=t.concat("(max-width: ").concat(String(this.maxWidth)).concat("px)")),t=t.concat("{"),t=t.concat(e),t=t.concat("} "),t}}},2353:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaLink=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.text="",this.href="",this.targetType="_self"}render(){return r.html`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `}};c.styles=r.css`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"text",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"href",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"targetType",void 0),c=i([(0,a.customElement)("nidoca-link")],c),t.NidocaLink=c},836:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaListItem=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends r.LitElement{constructor(){super(),this.multiSelect=!1,this.selected=!1,this.primaryText="",this.secondaryText="",this.clickStart=null,this.theme=c.NidocaThemeHelper.prototype.getParentTheme(this)||c.NidocaTheme.background}update(e){super.update(e),null!=e.get("selectionMode")&&(this.multiSelect||(this.selected=!1))}render(){return r.html`
      <style>
        .selected {
          backdrop-filter: contrast(var(--app-color-percent-selected));
        }
      </style>
      <div
        class="container ${this.selected?"selected":""}"
        @mousedown="${()=>this.downAction()}"
        @mouseup="${()=>this.upAction()}"
        @pointerup="${()=>this.upAction()}"
        @pointerdown="${()=>this.downAction()}"
      >
        ${this.multiSelect?r.html` <nidoca-icon
              style="padding-right: var(--space-2);"
              class="item"
              @click="${()=>this.switchSelected()}"
              icon="${this.selected?"check_box":"check_box_outline_blank"}"
            ></nidoca-icon>`:r.html`<span></span>`}
        <slot name="graphic" class="item"></slot>
        <div class="containerTypography">
          ${this.primaryText?r.html` <nidoca-text class="item">${this.primaryText} </nidoca-text>`:r.html``}
          <slot></slot>
          ${this.secondaryText?r.html` <nidoca-text-caption class="item">${this.secondaryText} </nidoca-text-caption>`:r.html``}
          <slot name="secondary"></slot>
        </div>
        <slot name="meta" class="item"></slot>
      </div>
    `}downAction(){this.clickStart=Date.now()}upAction(){if(this.clickStart){let e="";e=Date.now()-this.clickStart+1>500?"nidoca-event-list-item-long-click":"nidoca-event-list-item-click",console.log(e),this.dispatchEvent(new CustomEvent(e,{detail:this,bubbles:!0,composed:!0}))}}switchSelected(){this.selected=Boolean(!this.selected),this.selected?this.dispatchEvent(new CustomEvent("nidoca-event-list-item-select",{detail:this,bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("nidoca-event-list-item-unselect",{detail:this,bubbles:!0,composed:!0}))}};l.styles=r.css`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: 1fr 1fr minmax(auto, 100%) 1fr;
      padding: var(--space-2);
    }

    .item {
      align-self: center;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),n("design:type",Object)],l.prototype,"theme",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"multiSelect",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"selected",void 0),i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"primaryText",void 0),i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"secondaryText",void 0),l=i([(0,a.customElement)("nidoca-list-item"),n("design:paramtypes",[])],l),t.NidocaListItem=l},5467:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaListSection=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5098);let l=class extends r.LitElement{constructor(){super(),this.text="",this.theme=c.NidocaThemeHelper.prototype.getParentTheme(this)||c.NidocaTheme.background}render(){return r.html`
      <nidoca-text-caption style="flex-basis:100%;" text="${this.text}">
        <slot></slot>
      </nidoca-text-caption>
    `}};l.styles=r.css`
  :host {
     display:block;
     padding-left: var(--space-2);  
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),n("design:type",Object)],l.prototype,"theme",void 0),i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"text",void 0),l=i([(0,a.customElement)("nidoca-list-section"),n("design:paramtypes",[])],l),t.NidocaListSection=l},882:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaList=void 0;const r=o(9392),a=o(5595),s=o(4432),c=o(836);let l=class extends r.LitElement{constructor(){super(),this.multiSelect=!1,this.theme=s.NidocaThemeHelper.prototype.getParentTheme(this)||s.NidocaTheme.background}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"selectionMode"==t&&this.getItems().forEach((e=>{e.multiSelect=this.multiSelect}))}))}render(){return r.html`
      <style>
        slot {
          border-color: var(--app-color-${this.theme}-border);
          border-top-style: solid;
          border-width: thin;
        }

        ::slotted(nidoca-list-section) {
          color: var(--app-color-${this.theme});
          backdrop-filter: contrast(var(--app-color-percent-optional));
        }

        ::slotted(nidoca-list-item) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        ::slotted(nidoca-list-item),
        ::slotted(nidoca-list-section) {
          border-bottom-style: solid;
          border-width: var(--border-width-min);
        }

        ::slotted(nidoca-list-item:hover) {
          filter: contrast(var(--app-color-percent-hover));
        }
      </style>
      <slot
        @nidoca-event-list-item-click="${e=>{this.multiSelect||this.unselectAll(),e.detail.selected=!0}}"
        @nidoca-event-list-item-unselect="${()=>{this.multiSelect=0===this.getSelectedItems().length}}"
        class="slotList"
        id="slotElement"
      ></slot>
    `}getItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof c.NidocaListItem&&e.push(i)}}return e}getSelectedItems(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof c.NidocaListItem&&i.selected&&e.push(i)}}return e}getSelectedIndexes(){const e=[];if(null!=this.slotElement){const t=this.slotElement.assignedElements();let o=0;for(let i=0;i<t.length;i++){const n=t[i];n instanceof c.NidocaListItem&&(n.selected&&e.push(o),o++)}}return e}selectAll(){this.getItems().forEach((e=>{e.selected=!0}))}unselectAll(){console.log("sdojsdoijsoidjsdioj "+this.getItems().length),this.getItems().forEach((e=>{e.selected=!1}))}};l.styles=r.css`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),n("design:type",Object)],l.prototype,"theme",void 0),i([(0,a.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"multiSelect",void 0),i([(0,a.query)("#slotElement"),n("design:type",Object)],l.prototype,"slotElement",void 0),l=i([(0,a.customElement)("nidoca-list"),n("design:paramtypes",[])],l),t.NidocaList=l},7603:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaMenuArea=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.text="",this.icon=""}render(){return r.html`
      <div class="container">
        ${this.icon?r.html` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:r.html``}
        ${this.text?r.html` <nidoca-text-button>${this.text}</nidoca-text-button>`:r.html``}
        <slot></slot>
      </div>
    `}};c.styles=r.css`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"text",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"icon",void 0),c=i([(0,a.customElement)("nidoca-menu-area")],c),t.NidocaMenuArea=c},2350:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaMenuItem=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.text="",this.icon="",this.selected=!1}render(){return r.html`
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.clicked()}">
        ${this.icon?r.html` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`:r.html``}
        ${this.text?r.html` <nidoca-text>${this.text}</nidoca-text>`:r.html``}
      </div>
    `}clicked(){this.dispatchEvent(new CustomEvent("nidoca-event-menu-item-clicked",{detail:this,bubbles:!0,composed:!0}))}};c.styles=r.css`
    .container {
      display: flex;
      cursor: pointer;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .container:hover {
      backdrop-filter: contrast(var(--app-color-percent-hover));
    }

    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"text",void 0),i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"icon",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],c.prototype,"selected",void 0),c=i([(0,a.customElement)("nidoca-menu-item")],c),t.NidocaMenuItem=c},942:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaMenu=void 0;const r=o(9392),a=o(5595),s=o(4432);let c=class extends r.LitElement{constructor(){super(...arguments),this.theme=s.NidocaTheme.secondary}render(){return r.html` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`}firstUpdated(){this.addEventListener("click",(e=>{if(null!=this.slotElement){const t=this.slotElement.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];if(i instanceof s.NidocaMenuItem){const t=i.getBoundingClientRect();t.left<e.x&&t.right>e.x&&(t.top<e.y&&t.bottom>e.y?i.selected=!0:i.selected=!1)}}}}))}};c.styles=r.css`
    :host,
    slot {
      display: block;
    }
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),n("design:type",Object)],c.prototype,"theme",void 0),i([(0,a.query)("#slotElement"),n("design:type",Object)],c.prototype,"slotElement",void 0),c=i([(0,a.customElement)("nidoca-menu")],c),t.NidocaMenu=c},5098:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaThemeHelper=t.NidocaTheme=void 0;const i=o(9392);var n;!function(e){e.primary="primary",e.secondary="secondary",e.surface="surface",e.background="background",e.transparent="transparent"}(n=t.NidocaTheme||(t.NidocaTheme={})),t.NidocaThemeHelper=class{static getStyle(e){return e?e==n.transparent?i.html``:i.html` <style>
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
          </style>`:i.html``}static getOposite(e){return e==n.background?n.surface:e==n.primary||e==n.primary?n.secondary:e==n.secondary?n.primary:n.background}getParentTheme(e){let t=e;for(;null!=t;){if(null!=t.theme)return t.theme;t=t.parentElement}}}},6257:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaMovie=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.src=""}render(){return r.html`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `}};c.styles=r.css``,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"src",void 0),c=i([(0,a.customElement)("nidoca-movie")],c),t.NidocaMovie=c},8083:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaPrint=void 0;const n=o(9392),r=o(5595);let a=class extends n.LitElement{render(){return n.html`<slot></slot>`}print(){const e=window.open("");e&&(e.document.write(this.innerHTML),e.print(),e.close())}};a.styles=n.css`
    :host {
      display: none;
    }
  `,a=i([(0,r.customElement)("nidoca-print")],a),t.NidocaPrint=a},2474:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaProgress=t.ProgressType=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5098);class l{}t.ProgressType=l,l.PROGRESS="PROGRESS",l.PROGRESS_CIRCULAR="PROGRESS_CIRCULAR";let d=class extends r.LitElement{constructor(){super(...arguments),this.progressType=l.PROGRESS}render(){return r.html` <style>
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

      <progress class="${this.progressType}"></progress>`}};d.styles=r.css``,i([(0,s.property)({type:c.NidocaTheme,converter:String}),n("design:type",Object)],d.prototype,"theme",void 0),i([(0,s.property)({type:l,converter:String}),n("design:type",String)],d.prototype,"progressType",void 0),d=i([(0,a.customElement)("nidoca-progress")],d),t.NidocaProgress=d},6355:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaRipple=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{render(){return r.html`
      <div id="rippleContainer" anim="ripple" @click="${e=>this.clicked(e)}">
        <slot></slot>
      </div>
    `}clicked(e){if(null!=this.rippleContainerElement){e instanceof TouchEvent&&(e=e.touches?e.touches[0]:e);const t=this.rippleContainerElement.getBoundingClientRect(),o=2*Math.sqrt(Math.pow(t.width,2)+Math.pow(t.height,2));this.rippleContainerElement.style.cssText="--s: 0; --o: 1;",this.rippleContainerElement.offsetTop,(e instanceof MouseEvent||e instanceof Touch)&&(this.rippleContainerElement.style.cssText=`--t: 1; --o: 0; --d: ${o}; --x:${e.clientX-t.left}; --y:${e.clientY-t.top};`)}}};c.styles=r.css`
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
  `,i([(0,s.query)("#rippleContainer"),n("design:type",Object)],c.prototype,"rippleContainerElement",void 0),c=i([(0,a.customElement)("nidoca-ripple")],c),t.NidocaRipple=c},8454:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function a(e){try{c(i.next(e))}catch(e){r(e)}}function s(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaSearchBar=void 0;const a=o(9392),s=o(5595),c=o(5595),l=o(5595),d=o(4432);let p=class extends a.LitElement{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.theme=d.NidocaTheme.surface}render(){return a.html`
      <style>
        .container,
        input {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .container:focus-within,
        ::slotted(.container:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: contrast(var(--app-color-percent-selected));
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
    `}clearValue(){this.value=""}valueChanged(){var e;return r(this,void 0,void 0,(function*(){const t=new CustomEvent("nidoca-search-bar-event-value-changed",{detail:null===(e=this.inputElement)||void 0===e?void 0:e.value,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",t.type,JSON.stringify(t.detail)),this.dispatchEvent(t)}))}};p.styles=a.css`
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
  `,i([(0,c.property)({type:String}),n("design:type",String)],p.prototype,"value",void 0),i([(0,c.property)({type:String}),n("design:type",String)],p.prototype,"placeholder",void 0),i([(0,c.property)({type:Boolean}),n("design:type",Boolean)],p.prototype,"disabled",void 0),i([(0,l.query)("#inputElement"),n("design:type",Object)],p.prototype,"inputElement",void 0),i([(0,c.property)({type:d.NidocaTheme,converter:String}),n("design:type",String)],p.prototype,"theme",void 0),p=i([(0,s.customElement)("nidoca-search-bar")],p),t.NidocaSearchBar=p},7906:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaSection=void 0;const n=o(9392),r=o(5595);let a=class extends n.LitElement{constructor(){super(...arguments),this.flexBasis="auto"}render(){return n.html`
      <style>
        .item,
        ::slotted(.item) {
          flex-basis: ${this.flexBasis};
        }
      </style>
      <slot id="container" class="container" @slotchange="${e=>this.slotChanged(e)}"></slot>
    `}slotChanged(e){const t=e.target,o=t.offsetWidth,i=t.assignedElements(),n=i.length,r=[];let a=0;for(let e=0;e<n;e++){const t=i[e];if(t.setAttribute("class","item"),t instanceof HTMLElement){const e=t.style.width;if(0==e.length)r.push(t);else{const t=e.toUpperCase();a+=t.indexOf("PX")>-1?Number(t.replace("PX","")):Number(t.replace("%",""))/100*o}}}let s=100;a>0&&(s=100-a/o*100),0==s&&(s=100/n),this.flexBasis=String(s/r.length)+"%",this.requestUpdate()}};a.styles=n.css`
    :host {
      display: block;
      margin: auto;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      .item {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: 10240px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
      }
    }
  `,a=i([(0,r.customElement)("nidoca-section")],a),t.NidocaSection=a},7203:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaSplitScreen=void 0;const r=o(9392),a=o(5595),s=o(4432);let c=class extends r.LitElement{constructor(){super(),this.hideSidebox=!0,this.theme=s.NidocaThemeHelper.prototype.getParentTheme(this)||s.NidocaTheme.background}render(){return r.html` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .sidebox {
          border-color: var(--app-color-${this.theme}-border);
          border-left-style: solid;
          border-width: thin;
        }
      </style>
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox?r.html``:r.html` <slot class="sidebox" name="sidebox"></slot>`}`}};c.styles=r.css`
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
  `,i([(0,a.property)({type:s.NidocaTheme,converter:String}),n("design:type",String)],c.prototype,"theme",void 0),i([(0,a.property)({type:Boolean,converter:String}),n("design:type",Boolean)],c.prototype,"hideSidebox",void 0),c=i([(0,a.customElement)("nidoca-split-screen"),n("design:paramtypes",[])],c),t.NidocaSplitScreen=c},786:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaSvg2Webp=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.src="https://raw.githubusercontent.com/domoskanonos/devbox/main/assets/logo-ink.svg",this.canvasElements=[],this.storeCanvasElements=[]}render(){return r.html`
      <img style="display: none;" id="img" src="${this.src}" />

      ${this.canvasElements.map((e=>r.html`${e}`))}
    `}updated(e){super.updated(e),e.forEach(((e,t)=>{console.debug(`${this.tagName} : property ${String(t)} changed. oldValue: ${e}`),"src"==t&&this.convert()}))}convert(){this.img&&(console.log("GO"),this.img.onload=()=>{[[12,12],[16,16],[22,22],[24,24],[32,32],[36,36],[48,48],[64,64],[72,72],[96,96],[128,128],[144,144],[192,192]].forEach((e=>{const t=document.createElement("canvas");t.width=e[0],t.height=e[1];const o=t.getContext("2d");o&&this.img&&(this.img.crossOrigin="anonymous",o.drawImage(this.img,0,0,e[0],e[1]),t.toBlob((e=>{}),"image/webp")),this.canvasElements.push(t)})),this.requestUpdate()})}};c.styles=r.css``,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"src",void 0),i([(0,a.query)("#img"),n("design:type",Object)],c.prototype,"img",void 0),c=i([(0,a.customElement)("nidoca-svg-2-webp")],c),t.NidocaSvg2Webp=c},2835:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTabContent=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.selected=!1}render(){return this.selected?r.html` <slot></slot>`:r.html``}};c.styles=r.css`
    :host,
    slot {
      display: block;
    }
  `,i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],c.prototype,"selected",void 0),c=i([(0,a.customElement)("nidoca-tab-content")],c),t.NidocaTabContent=c},7825:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTab=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends r.LitElement{constructor(){super(...arguments),this.selected=!1,this.text="",this.theme=c.NidocaTheme.surface}render(){return r.html`
      <style>
        .container {
          border-color: var(--app-color-${this.theme}-background);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container ${this.selected?"selected":""}" @click="${()=>this.tabClicked()}">
        ${this.text?r.html` <nidoca-text text="${this.text}"></nidoca-text> `:r.html``}
        <slot></slot>
      </div>
    `}tabClicked(){console.log("tab clicked."),this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked",{detail:this,bubbles:!0,composed:!0}))}};l.styles=r.css`
    :host {
      display: block;
      padding-right: var(--space);
    }

    .container {
      line-height: var(--height-min);
      height: var(--height-min);
      box-sizing: border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }

    slot {
      display: block;
    }
  `,i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"selected",void 0),i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"text",void 0),i([(0,s.property)({type:String}),n("design:type",String)],l.prototype,"theme",void 0),l=i([(0,a.customElement)("nidoca-tab")],l),t.NidocaTab=l},1508:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTable=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(3012),l=o(2386),d=o(4432),p=o(1465);let h=class extends r.LitElement{constructor(){super(...arguments),this.headers=["column 1","column 2"],this.rows=[["row 1",new p.NidocaIcon],["row 2",new p.NidocaIcon]],this.theme=d.NidocaTheme.background}render(){return r.html`
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
          color: var(--app-color-${this.theme});
        }
      </style>
      <div>
        <table>
          <thead>
            ${(0,c.guard)([this.headers],(()=>r.html` ${(0,l.repeat)(this.headers,(e=>r.html` <th colspan="1" rowspan="1">${e}</th> `))} `))}
          </thead>
          <tbody>
            ${(0,c.guard)([this.rows],(()=>r.html`
                  ${(0,l.repeat)(this.rows,(e=>r.html`
                        <tr>
                          ${(0,l.repeat)(e,(e=>r.html` <td colspan="1" rowspan="1">${e}</td> `))}
                        </tr>
                      `))}
                `))}
          </tbody>
        </table>
      </div>
    `}};h.styles=r.css`
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
  `,i([(0,s.property)({type:Array}),n("design:type",Array)],h.prototype,"headers",void 0),i([(0,s.property)({type:Array}),n("design:type",Array)],h.prototype,"rows",void 0),i([(0,s.property)({type:d.NidocaTheme,converter:String}),n("design:type",String)],h.prototype,"theme",void 0),h=i([(0,a.customElement)("nidoca-table")],h),t.NidocaTable=h},2633:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTabs=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(2835),l=o(7825),d=o(4432);let p=class extends r.LitElement{constructor(){super(...arguments),this.theme=d.NidocaTheme.surface,this.tabIndex=0}render(){return r.html`
      <div class="container" @nidoca-event-tab-clicked="${e=>this.tabClicked(e)}">
        <slot id="tabSlot" name="tab"></slot>
        <slot id="tabContentSlot" name="tabContent"></slot>
      </div>
    `}firstUpdated(e){super.firstUpdated(e),this.tabIndexChanged()}update(e){super.update(e),null!=e.get("tabIndex")&&this.tabIndexChanged()}tabIndexChanged(){this.updateNidocaTabElements(),this.updateNidocaTabContentElemnts()}updateNidocaTabElements(){if(null!=this.tabSlot){const e=this.tabSlot.assignedElements(),t=100/e.length,o=e[this.tabIndex];for(let i=0;i<e.length;i++){const n=e[i];n instanceof l.NidocaTab&&(n.theme=this.theme,n.style.width=String(t).concat("%"),n==o?(n.selected=!0,n.classList.add("SELECTED")):(n.selected=!1,n.classList.remove("SELECTED")))}}}updateNidocaTabContentElemnts(){let e=0;if(null!=this.tabContentSlot){const t=this.tabContentSlot.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof c.NidocaTabContent&&(this.tabIndex==e?i.selected=!0:i.selected=!1,e++)}}}tabClicked(e){const t=e.detail;this.changeTabIndex(t)}changeTabIndex(e){if(!e.selected&&null!=this.tabSlot){const t=this.tabSlot.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];if(i instanceof l.NidocaTab&&i==e){this.tabIndex=o;break}}}}};p.styles=r.css`
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
      margin: 0px auto;
      text-align: center;
      width: 100% !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,i([(0,s.query)("#tabSlot"),n("design:type",Object)],p.prototype,"tabSlot",void 0),i([(0,s.query)("#tabContentSlot"),n("design:type",Object)],p.prototype,"tabContentSlot",void 0),i([(0,a.property)({type:String}),n("design:type",String)],p.prototype,"theme",void 0),i([(0,a.property)({type:Number}),n("design:type",Number)],p.prototype,"tabIndex",void 0),p=i([(0,a.customElement)("nidoca-tabs")],p),t.NidocaTabs=p},1822:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTemplate=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(5595);let l=class extends r.LitElement{constructor(){super(),this.hideLeft=!0,this.prominent=!1,document.getElementsByTagName("html")[0].setAttribute("oncontextmenu","return false"),this.addEventListener("click",(e=>{if(!this.hideLeft&&this.leftElement){console.log("close");const t=this.leftElement.getBoundingClientRect();this.hideLeft=641>window.innerWidth&&0<=e.x-t.width}}))}updated(e){super.updated(e)}render(){return r.html`
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
    `}};l.styles=r.css`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
      color: var(--app-color-primary);
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
  `,i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"hideLeft",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"prominent",void 0),i([(0,c.query)("#header"),n("design:type",Object)],l.prototype,"headerElement",void 0),i([(0,c.query)("#left"),n("design:type",Object)],l.prototype,"leftElement",void 0),i([(0,c.query)("#content"),n("design:type",Object)],l.prototype,"contentElement",void 0),l=i([(0,a.customElement)("nidoca-template"),n("design:paramtypes",[])],l),t.NidocaTemplate=l},5777:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextBody=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{render(){return n.html` ${super.render()}`}};s.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1.5em;
      font-weight: 400;
    }
  `,s=i([(0,r.customElement)("nidoca-text-body")],s),t.NidocaTextBody=s},7821:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextButton=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{render(){return n.html` ${super.render()}`}};s.styles=n.css`
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
  `,s=i([(0,r.customElement)("nidoca-text-button")],s),t.NidocaTextButton=s},8712:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextCaption=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
      filter: brightness(var(--app-lighten-3));
    }
  `,s=i([(0,r.customElement)("nidoca-text-caption")],s),t.NidocaTextCaption=s},1268:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextError=void 0;const r=o(5595),a=o(4432);let s=class extends a.NidocaTextCaption{constructor(){super(),this.style.color="red"}};s=i([(0,r.customElement)("nidoca-text-error"),n("design:paramtypes",[])],s),t.NidocaTextError=s},6374:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextH1=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 200%;
      line-height: 1em;
    }
  `,s=i([(0,r.customElement)("nidoca-text-h1")],s),t.NidocaTextH1=s},2251:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextH2=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 170%;
      line-height: 1.5em;
    }
  `,s=i([(0,r.customElement)("nidoca-text-h2")],s),t.NidocaTextH2=s},5412:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextH3=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 600;
      font-size: 150%;
      line-height: 1.5em;
    }
  `,s=i([(0,r.customElement)("nidoca-text-h3")],s),t.NidocaTextH3=s},1322:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextH4=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 115%;
      line-height: 1.5em;
    }
  `,s=i([(0,r.customElement)("nidoca-text-h4")],s),t.NidocaTextH4=s},2604:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextH5=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 110%;
      line-height: 1.5em;
    }
  `,s=i([(0,r.customElement)("nidoca-text-h5")],s),t.NidocaTextH5=s},4257:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextH6=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      font-size: 105%;
      line-height: 1.5em;
    }
  `,s=i([(0,r.customElement)("nidoca-text-h6")],s),t.NidocaTextH6=s},7984:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextInfo=void 0;const r=o(5595),a=o(4432);let s=class extends a.NidocaTextCaption{constructor(){super(),this.style.color="blue"}};s=i([(0,r.customElement)("nidoca-text-info"),n("design:paramtypes",[])],s),t.NidocaTextInfo=s},4375:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextOverline=void 0;const n=o(9392),r=o(5595),a=o(4432);let s=class extends a.NidocaText{};s.styles=n.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
    }
  `,s=i([(0,r.customElement)("nidoca-text-overline")],s),t.NidocaTextOverline=s},5728:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextSuccess=void 0;const r=o(5595),a=o(4432);let s=class extends a.NidocaTextCaption{constructor(){super(),this.style.color="green"}};s=i([(0,r.customElement)("nidoca-text-success"),n("design:paramtypes",[])],s),t.NidocaTextSuccess=s},8026:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTextWarning=void 0;const r=o(5595),a=o(4432);let s=class extends a.NidocaTextCaption{constructor(){super(),this.style.color="yellow"}};s=i([(0,r.customElement)("nidoca-text-warning"),n("design:paramtypes",[])],s),t.NidocaTextWarning=s},3487:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaText=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.text=""}render(){return r.html` <slot id="slotElement">${this.text}</slot>`}};c.styles=r.css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"text",void 0),c=i([(0,a.customElement)("nidoca-text")],c),t.NidocaText=c},1280:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTopAppBar=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(4432);let l=class extends r.LitElement{constructor(){super(...arguments),this.theme=c.NidocaTheme.primary,this.prominent=!1}render(){return r.html`
      ${c.NidocaThemeHelper.getStyle(this.theme)}
      <div class="bar">
        <slot name="left" style="justify-content:flex-start;"></slot>
        <slot name="center" style="justify-content:center;"></slot>
        <slot name="right" style="justify-content:flex-end;"></slot>
      </div>
      ${this.prominent?r.html` <slot class="prominent" name="prominent"></slot>`:r.html``}
    `}};l.styles=r.css`
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
  `,i([(0,s.property)({type:c.NidocaTheme,converter:String}),n("design:type",Object)],l.prototype,"theme",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],l.prototype,"prominent",void 0),l=i([(0,a.customElement)("nidoca-top-app-bar")],l),t.NidocaTopAppBar=l},1686:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaTransition=t.NidocaTransitionType=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(796);class l{}t.NidocaTransitionType=l,l.CENTER="CENTER",l.LEFT="LEFT",l.RIGHT="RIGHT",l.TOP="TOP",l.BOTTOM="BOTTOM",l.SLIDE_CENTER="SLIDE_CENTER",l.SLIDE_LEFT="SLIDE_LEFT",l.SLIDE_RIGHT="SLIDE_RIGHT",l.SLIDE_TOP="SLIDE_TOP",l.SLIDE_BOTTOM="SLIDE_BOTTOM";let d=class extends r.LitElement{constructor(){super(...arguments),this.transitionType=l.CENTER,this.duration=.5}render(){return r.html` <div class="${(0,c.ifDefined)(this.transitionType)}"><slot></slot></div> `}};d.styles=r.css`
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
  `,i([(0,s.property)({type:String}),n("design:type",String)],d.prototype,"transitionType",void 0),i([(0,s.property)({type:Number}),n("design:type",Number)],d.prototype,"duration",void 0),d=i([(0,a.customElement)("nidoca-transition")],d),t.NidocaTransition=d},1289:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaUpload=void 0;const r=o(9392),a=o(5595),s=o(5595);let c=class extends r.LitElement{constructor(){super(...arguments),this.code=""}render(){return r.html``}};c.styles=r.css``,i([(0,s.property)({type:String}),n("design:type",String)],c.prototype,"code",void 0),c=i([(0,a.customElement)("nidoca-upload")],c),t.NidocaUpload=c},8589:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaVideo=void 0;const r=o(9392),a=o(5595);let s=class extends r.LitElement{firstUpdated(e){super.firstUpdated(e),navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((e=>{this.videoElement&&(this.videoElement.srcObject=e)}))}render(){return r.html`
      <video id="video" width="320" height="240" autoplay></video>
      <button id="click-photo" @click="${()=>this.makeFoto()}">Click Photo</button>
      <canvas id="canvas" width="320" height="240"></canvas>
    `}makeFoto(){if(this.canvasElement&&this.videoElement){const e=this.canvasElement.getContext("2d");if(e){e.drawImage(this.videoElement,0,0,this.canvasElement.width,this.canvasElement.height);const t=this.canvasElement.toDataURL("image/jpeg");console.log(t)}}}};s.styles=r.css``,i([(0,a.query)("#video"),n("design:type",Object)],s.prototype,"videoElement",void 0),i([(0,a.query)("#canvas"),n("design:type",Object)],s.prototype,"canvasElement",void 0),i([(0,a.query)("#click-photo"),n("design:type",Object)],s.prototype,"buttonElement",void 0),s=i([(0,a.customElement)("nidoca-video")],s),t.NidocaVideo=s},2757:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaWizardStep=t.WizardStepState=void 0;const r=o(9392),a=o(5595),s=o(5595),c=o(4432);var l;!function(e){e[e.CURRENT=0]="CURRENT",e[e.COMPLETED=1]="COMPLETED",e[e.OPEN=2]="OPEN",e[e.FINISH=3]="FINISH"}(l=t.WizardStepState||(t.WizardStepState={}));let d=class extends r.LitElement{constructor(){super(...arguments),this.icon="",this.primaryText="",this.isLast=!1,this.first=!1}render(){return r.html`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:space-evenly;align-content:space-evenly;"
      >
        <div
          style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;align-content:space-evenly;"
        >
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${c.NidocaIconShadowType.NONE}"
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

          ${this.isLast?r.html``:r.html`<nidoca-icon color="${this.determineBackgroundColor(this.state)}" icon="label_important">
              </nidoca-icon>`}
        </div>
        <nidoca-text style="width:48px;" text="${this.primaryText}"><slot></slot> </nidoca-text>
      </div>
    `}determineBackgroundColor(e){return e==l.COMPLETED?"var(--app-color-primary)":e==l.CURRENT?"var(--app-color-secondary-background)":"var(--app-color-surface-background)"}determineColor(e){return e==l.FINISH?"var(--app-color-success)":e==l.COMPLETED?"var(--mdc-theme-on-primary)":e==l.CURRENT?"var(--app-color-secondary)":"var(--app-color-surface)"}stepClicked(){const e=new CustomEvent("nidoca-event-wizard-step-clicked",{detail:this.index,bubbles:!0,composed:!0});console.debug("dispatch custom event type: %s, detail: %s",e.type,JSON.stringify(e.detail)),this.dispatchEvent(e)}};d.styles=r.css`
    .wizard-step-connector {
      color: var(--app-color-surface);
      background-color: var(--app-color-surface-background);
      padding: var(--space);
    }

    .wizard-step-connector.selected {
      padding: var(--space);
      color: var(--mdc-theme-on-primary);
      background-color: var(--app-color-primary);
    }
  `,i([(0,s.property)({type:String}),n("design:type",String)],d.prototype,"icon",void 0),i([(0,s.property)({type:String}),n("design:type",String)],d.prototype,"primaryText",void 0),i([(0,s.property)({type:Number}),n("design:type",Object)],d.prototype,"state",void 0),i([(0,s.property)({type:Boolean}),n("design:type",Boolean)],d.prototype,"isLast",void 0),d=i([(0,a.customElement)("nidoca-wizard-step")],d),t.NidocaWizardStep=d},9046:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},n=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaWizard=void 0;const r=o(9392),a=o(5595),s=o(2757);let c=class extends r.LitElement{render(){return r.html`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:flex-start;justify-content:flex-start;align-content:space-evenly;"
        @nidoca-event-wizard-step-clicked="${e=>this.stepClicked(e)}"
      >
        <slot id="wizardSlot" @slotchange="${e=>this.slotChanged(e)}"></slot>
      </div>
    `}slotChanged(e){const t=e.target;if(null==t)return;const o=t.assignedElements();let i=0;for(let e=0;e<o.length;e++){const t=o[e];t instanceof s.NidocaWizardStep&&(t.index=e,t.state==s.WizardStepState.CURRENT&&(i=e),t.index==o.length-1&&(t.isLast=!0))}this.changeState(i)}stepClicked(e){const t=e.detail;console.debug("wizard step clicked, selectedStepIndex: %s",t),this.changeState(t)}changeState(e){if(this.wizardSlot){const t=this.wizardSlot.assignedElements();for(let o=0;o<t.length;o++){const i=t[o];i instanceof s.NidocaWizardStep&&void 0!==i.index&&(i.index<e?i.state=s.WizardStepState.COMPLETED:i.index==e?i.state=s.WizardStepState.CURRENT:i.state=s.WizardStepState.OPEN)}}}};c.styles=r.css``,i([(0,a.query)("#wizardSlot"),n("design:type",Object)],c.prototype,"wizardSlot",void 0),c=i([(0,a.customElement)("nidoca-wizard")],c),t.NidocaWizard=c},9649:function(e,t,o){var i=this&&this.__decorate||function(e,t,o,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,o,a):n(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.NidocaPageLogin=void 0;const n=o(9392),r=o(5595);let a=class extends n.LitElement{render(){return n.html`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `}};a.styles=n.css`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100vh;
      width: 100vw;
    }

    .right {
      background-color: var(--app-color-primary-background);
    }

    .left {
      margin: auto;
      width: min-content;
      height: min-content;
    }

    @media only screen and (max-width: 640px) {
      :host {
        grid-template-columns: 1fr;
      }
      .right {
        display: block;
        overflow: hidden;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0.1;
        z-index: -1;
      }
    }
  `,a=i([(0,r.customElement)("nidoca-page-login")],a),t.NidocaPageLogin=a},875:(e,t,o)=>{o.d(t,{XM:()=>n,Xe:()=>r,pX:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>(...t)=>({_$litDirective$:e,values:t});class r{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},3692:(e,t,o)=>{var i;o.d(t,{Al:()=>z,Jb:()=>R,Ld:()=>E,YP:()=>S,dy:()=>_,sY:()=>$});const n=globalThis.trustedTypes,r=n?n.createPolicy("lit-html",{createHTML:e=>e}):void 0,a=`lit$${(Math.random()+"").slice(9)}$`,s="?"+a,c=`<${s}>`,l=document,d=(e="")=>l.createComment(e),p=e=>null===e||"object"!=typeof e&&"function"!=typeof e,h=Array.isArray,u=e=>{var t;return h(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,y=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,b=/'/g,v=/"/g,x=/^(?:script|style|textarea|title)$/i,w=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),_=w(1),S=w(2),R=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),O=new WeakMap,$=(e,t,o)=>{var i,n;const r=null!==(i=null==o?void 0:o.renderBefore)&&void 0!==i?i:t;let a=r._$litPart$;if(void 0===a){const e=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new C(t.insertBefore(d(),e),e,void 0,null!=o?o:{})}return a._$AI(e),a},k=l.createTreeWalker(l,129,null,!1),j=(e,t)=>{const o=e.length-1,i=[];let n,s=2===t?"<svg>":"",l=f;for(let t=0;t<o;t++){const o=e[t];let r,d,p=-1,h=0;for(;h<o.length&&(l.lastIndex=h,d=l.exec(o),null!==d);)h=l.lastIndex,l===f?"!--"===d[1]?l=m:void 0!==d[1]?l=y:void 0!==d[2]?(x.test(d[2])&&(n=RegExp("</"+d[2],"g")),l=g):void 0!==d[3]&&(l=g):l===g?">"===d[0]?(l=null!=n?n:f,p=-1):void 0===d[1]?p=-2:(p=l.lastIndex-d[2].length,r=d[1],l=void 0===d[3]?g:'"'===d[3]?v:b):l===v||l===b?l=g:l===m||l===y?l=f:(l=g,n=void 0);const u=l===g&&e[t+1].startsWith("/>")?" ":"";s+=l===f?o+c:p>=0?(i.push(r),o.slice(0,p)+"$lit$"+o.slice(p)+a+u):o+a+(-2===p?(i.push(void 0),t):u)}const d=s+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==r?r.createHTML(d):d,i]};class T{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,c=0;const l=e.length-1,p=this.parts,[h,u]=j(e,t);if(this.el=T.createElement(h,o),k.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=k.nextNode())&&p.length<l;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(a)){const o=u[c++];if(e.push(t),void 0!==o){const e=i.getAttribute(o.toLowerCase()+"$lit$").split(a),t=/([.?@])?(.*)/.exec(o);p.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?L:"?"===t[1]?I:"@"===t[1]?M:A})}else p.push({type:6,index:r})}for(const t of e)i.removeAttribute(t)}if(x.test(i.tagName)){const e=i.textContent.split(a),t=e.length-1;if(t>0){i.textContent=n?n.emptyScript:"";for(let o=0;o<t;o++)i.append(e[o],d()),k.nextNode(),p.push({type:2,index:++r});i.append(e[t],d())}}}else if(8===i.nodeType)if(i.data===s)p.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(a,e+1));)p.push({type:7,index:r}),e+=a.length-1}r++}}static createElement(e,t){const o=l.createElement("template");return o.innerHTML=e,o}}function N(e,t,o=e,i){var n,r,a,s;if(t===R)return t;let c=void 0!==i?null===(n=o._$Cl)||void 0===n?void 0:n[i]:o._$Cu;const l=p(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,o,i)),void 0!==i?(null!==(a=(s=o)._$Cl)&&void 0!==a?a:s._$Cl=[])[i]=c:o._$Cu=c),void 0!==c&&(t=N(e,c._$AS(e,t.values),c,i)),t}class P{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:o},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:l).importNode(o,!0);k.currentNode=n;let r=k.nextNode(),a=0,s=0,c=i[0];for(;void 0!==c;){if(a===c.index){let t;2===c.type?t=new C(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new B(r,this,e)),this.v.push(t),c=i[++s]}a!==(null==c?void 0:c.index)&&(r=k.nextNode(),a++)}return n}m(e){let t=0;for(const o of this.v)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class C{constructor(e,t,o,i){var n;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),p(e)?e===E||null==e||""===e?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==R&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):u(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==E&&p(this._$AH)?this._$AA.nextSibling.data=e:this.k(l.createTextNode(e)),this._$AH=e}T(e){var t;const{values:o,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=T.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.m(o);else{const e=new P(n,this),t=e.p(this.options);e.m(o),this.k(t),this._$AH=e}}_$AC(e){let t=O.get(e.strings);return void 0===t&&O.set(e.strings,t=new T(e)),t}S(e){h(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const n of e)i===t.length?t.push(o=new C(this.M(d()),this.M(d()),this,this.options)):o=t[i],o._$AI(n),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class A{constructor(e,t,o,i,n){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const n=this.strings;let r=!1;if(void 0===n)e=N(this,e,t,0),r=!p(e)||e!==this._$AH&&e!==R,r&&(this._$AH=e);else{const i=e;let a,s;for(e=n[0],a=0;a<n.length-1;a++)s=N(this,i[o+a],t,a),s===R&&(s=this._$AH[a]),r||(r=!p(s)||s!==this._$AH[a]),s===E?e=E:e!==E&&(e+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!i&&this.C(e)}C(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class L extends A{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===E?void 0:e}}const D=n?n.emptyScript:"";class I extends A{constructor(){super(...arguments),this.type=4}C(e){e&&e!==E?this.element.setAttribute(this.name,D):this.element.removeAttribute(this.name)}}class M extends A{constructor(e,t,o,i,n){super(e,t,o,i,n),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=N(this,e,t,0))&&void 0!==o?o:E)===R)return;const i=this._$AH,n=e===E&&i!==E||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==E&&(i===E||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class B{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const z={L:"$lit$",P:a,V:s,I:1,N:j,R:P,j:u,D:N,H:C,F:A,O:I,W:M,B:L,Z:B},H=window.litHtmlPolyfillSupport;null==H||H(T,C),(null!==(i=globalThis.litHtmlVersions)&&void 0!==i?i:globalThis.litHtmlVersions=[]).push("2.2.6")},5595:(e,t,o)=>{o.r(t),o.d(t,{customElement:()=>i,eventOptions:()=>c,property:()=>r,query:()=>l,queryAll:()=>d,queryAssignedElements:()=>f,queryAssignedNodes:()=>m,queryAsync:()=>p,state:()=>a});const i=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:o,elements:i}=t;return{kind:o,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),n=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(o){o.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(o){o.createProperty(t.key,e)}};function r(e){return(t,o)=>void 0!==o?((e,t,o)=>{t.constructor.createProperty(o,e)})(e,t,o):n(e,t)}function a(e){return r({...e,state:!0})}const s=({finisher:e,descriptor:t})=>(o,i)=>{var n;if(void 0===i){const i=null!==(n=o.originalKey)&&void 0!==n?n:o.key,r=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(o.key)}:{...o,key:i};return null!=e&&(r.finisher=function(t){e(t,i)}),r}{const n=o.constructor;void 0!==t&&Object.defineProperty(o,i,t(i)),null==e||e(n,i)}};function c(e){return s({finisher:(t,o)=>{Object.assign(t.prototype[o],e)}})}function l(e,t){return s({descriptor:o=>{const i={get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==o?o:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;i.get=function(){var o,i;return void 0===this[t]&&(this[t]=null!==(i=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}function d(e){return s({descriptor:t=>({get(){var t,o;return null!==(o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}function p(e){return s({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}var h;const u=null!=(null===(h=window.HTMLSlotElement)||void 0===h?void 0:h.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));function f(e){const{slot:t,selector:o}=null!=e?e:{};return s({descriptor:i=>({get(){var i;const n="slot"+(t?`[name=${t}]`:":not([name])"),r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(n),a=null!=r?u(r,e):[];return o?a.filter((e=>e.matches(o))):a},enumerable:!0,configurable:!0})})}function m(e,t,o){let i,n=e;return"object"==typeof e?(n=e.slot,i=e):i={flatten:t},o?f({slot:n,flatten:t,selector:o}):s({descriptor:e=>({get(){var e,t;const o="slot"+(n?`[name=${n}]`:":not([name])"),r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o);return null!==(t=null==r?void 0:r.assignedNodes(i))&&void 0!==t?t:[]},enumerable:!0,configurable:!0})})}},3012:(e,t,o)=>{o.r(t),o.d(t,{guard:()=>a});var i=o(3692),n=o(875);const r={},a=(0,n.XM)(class extends n.Xe{constructor(){super(...arguments),this.nt=r}render(e,t){return t()}update(e,[t,o]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return i.Jb}else if(this.nt===t)return i.Jb;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,o)}})},796:(e,t,o)=>{o.r(t),o.d(t,{ifDefined:()=>n});var i=o(3692);const n=e=>null!=e?e:i.Ld},2386:(e,t,o)=>{o.r(t),o.d(t,{repeat:()=>h});var i=o(3692),n=o(875);const{H:r}=i.Al,a=()=>document.createComment(""),s=(e,t,o)=>{var i;const n=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===o){const t=n.insertBefore(a(),s),i=n.insertBefore(a(),s);o=new r(t,i,e,e.options)}else{const t=o._$AB.nextSibling,r=o._$AM,a=r!==e;if(a){let t;null===(i=o._$AQ)||void 0===i||i.call(o,e),o._$AM=e,void 0!==o._$AP&&(t=e._$AU)!==r._$AU&&o._$AP(t)}if(t!==s||a){let e=o._$AA;for(;e!==t;){const t=e.nextSibling;n.insertBefore(e,s),e=t}}}return o},c=(e,t,o=e)=>(e._$AI(t,o),e),l={},d=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let o=e._$AA;const i=e._$AB.nextSibling;for(;o!==i;){const e=o.nextSibling;o.remove(),o=e}},p=(e,t,o)=>{const i=new Map;for(let n=t;n<=o;n++)i.set(e[n],n);return i},h=(0,n.XM)(class extends n.Xe{constructor(e){if(super(e),e.type!==n.pX.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,o){let i;void 0===o?o=t:void 0!==t&&(i=t);const n=[],r=[];let a=0;for(const t of e)n[a]=i?i(t,a):a,r[a]=o(t,a),a++;return{values:r,keys:n}}render(e,t,o){return this.dt(e,t,o).values}update(e,[t,o,n]){var r;const a=e._$AH,{values:h,keys:u}=this.dt(t,o,n);if(!Array.isArray(a))return this.ut=u,h;const f=null!==(r=this.ut)&&void 0!==r?r:this.ut=[],m=[];let y,g,b=0,v=a.length-1,x=0,w=h.length-1;for(;b<=v&&x<=w;)if(null===a[b])b++;else if(null===a[v])v--;else if(f[b]===u[x])m[x]=c(a[b],h[x]),b++,x++;else if(f[v]===u[w])m[w]=c(a[v],h[w]),v--,w--;else if(f[b]===u[w])m[w]=c(a[b],h[w]),s(e,m[w+1],a[b]),b++,w--;else if(f[v]===u[x])m[x]=c(a[v],h[x]),s(e,a[b],a[v]),v--,x++;else if(void 0===y&&(y=p(u,x,w),g=p(f,b,v)),y.has(f[b]))if(y.has(f[v])){const t=g.get(u[x]),o=void 0!==t?a[t]:null;if(null===o){const t=s(e,a[b]);c(t,h[x]),m[x]=t}else m[x]=c(o,h[x]),s(e,a[b],o),a[t]=null;x++}else d(a[v]),v--;else d(a[b]),b++;for(;x<=w;){const t=s(e,m[w+1]);c(t,h[x]),m[x++]=t}for(;b<=v;){const e=a[b++];null!==e&&d(e)}return this.ut=u,((e,t=l)=>{e._$AH=t})(e,m),i.Jb}})},9392:(e,t,o)=>{o.r(t),o.d(t,{CSSResult:()=>a,LitElement:()=>S,ReactiveElement:()=>b,UpdatingElement:()=>_,_$LE:()=>E,_$LH:()=>w.Al,adoptStyles:()=>l,css:()=>c,defaultConverter:()=>m,getCompatibleStyle:()=>d,html:()=>w.dy,noChange:()=>w.Jb,notEqual:()=>y,nothing:()=>w.Ld,render:()=>w.sY,supportsAdoptingStyleSheets:()=>i,svg:()=>w.YP,unsafeCSS:()=>s});const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class a{constructor(e,t,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&r.set(t,e))}return e}toString(){return this.cssText}}const s=e=>new a("string"==typeof e?e:e+"",void 0,n),c=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1]),e[0]);return new a(o,e,n)},l=(e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),i=window.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=t.cssText,e.appendChild(o)}))},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return s(t)})(e):e;var p;const h=window.trustedTypes,u=h?h.emptyScript:"",f=window.reactiveElementPolyfillSupport,m={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},y=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:y};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const i=this._$Ep(o,t);void 0!==i&&(this._$Ev.set(i,o),e.push(i))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return l(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=g){var i,n;const r=this.constructor._$Ep(e,o);if(void 0!==r&&!0===o.reflect){const a=(null!==(n=null===(i=o.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:m.toAttribute)(t,o.type);this._$El=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$El=null}}_$AK(e,t){var o,i;const n=this.constructor,r=n._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=n.getPropertyOptions(r),a=e.converter,s=null!==(i=null!==(o=null==a?void 0:a.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==i?i:m.fromAttribute;this._$El=r,this[r]=s(t,e.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||y)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:b}),(null!==(p=globalThis.reactiveElementVersions)&&void 0!==p?p:globalThis.reactiveElementVersions=[]).push("1.3.3");var v,x,w=o(3692);const _=b;class S extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,w.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return w.Jb}}S.finalized=!0,S._$litElement$=!0,null===(v=globalThis.litElementHydrateSupport)||void 0===v||v.call(globalThis,{LitElement:S});const R=globalThis.litElementPolyfillSupport;null==R||R({LitElement:S});const E={_$AK:(e,t,o)=>{e._$AK(t,o)},_$AL:e=>e._$AL};(null!==(x=globalThis.litElementVersions)&&void 0!==x?x:globalThis.litElementVersions=[]).push("3.2.1")}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,o),r.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(3853)})();