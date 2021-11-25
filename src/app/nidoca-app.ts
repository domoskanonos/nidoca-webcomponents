import {html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";
import {NidocaTypographyType} from "..";
import {NidocaTheme} from "../nidoca-meta";

@customElement("nidoca-app")
export class NidocaApp extends LitElement implements NidocaRouteListener {

  @property({type: Boolean})
  showPopup: boolean = false;

  @property({type: Object})
  popupContent: any = html``;

  @property({type: Boolean})
  navigationClosed: boolean = true;

  @property({type: Boolean})
  prominent: boolean = false;

  @property({type: Object})
  currentPage: any = html`<nidoca-page-main></nidoca-page-main>`;

  @property({type: Boolean})
  elevationShow: boolean = false;

  @property({type: Object})
  elevationAssociatedElement: HTMLElement | undefined;

  @property({type: Object})
  elevationContentElement: any | undefined;

  constructor() {
    super();
    NidocaRouter.getUniqueInstance().subscribe(this);
  }


  routeChanged(url: string): void {
    console.log("enter new page, url: %s", url);
    switch (url) {
      case "components":
        this.currentPage = html`<nidoca-page-components></nidoca-page-components>`;
        break;
      case "settings":
        this.currentPage = html`<nidoca-page-settings></nidoca-page-settings>`;
        break;
      case "imprint":
        this.currentPage = html`<nidoca-page-imprint></nidoca-page-imprint>`;
        break;
      case "main":
      default:
        this.currentPage = html`<nidoca-page-main></nidoca-page-main>`;
        break;
    }
  }

  render(): TemplateResult {
    return html`
      <nidoca-template
        .prominent="${this.prominent}"
        .navigationClosed="${this.navigationClosed}"
        .theme="${NidocaTheme.PRIMARY}"
      >
        <nidoca-typography slot="topCenter" typographyType="${NidocaTypographyType.BODY1}"
          >nidoca framework</nidoca-typography
        >
        <nidoca-icon
          slot="topLeft"
          icon="${this.navigationClosed ? "menu" : "clear"}"
          .clickable="${true}"
          @nidoca-event-icon-clicked="${() => (this.navigationClosed = !this.navigationClosed)}"
        ></nidoca-icon>
        <nidoca-icon
          slot="topRight"
          icon="${this.prominent ? "search_off" : "search"}"
          @nidoca-event-icon-clicked="${() => (this.prominent = !this.prominent)}"
        ></nidoca-icon>
        <nidoca-icon
          slot="topRight"
          icon="person"
          @nidoca-event-icon-clicked="${() => {
            this.showPopup = true;
            this.popupContent = html`<nidoca-popup-login></nidoca-popup-login>`;
          }}"
        ></nidoca-icon>
        <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
        <nidoca-icon
          slot="topRight"
          icon="more_vert"
          .clickable="${true}"
          @nidoca-event-icon-clicked="${(event: CustomEvent) => {
            this.elevationShow = true;
            this.elevationAssociatedElement = <HTMLElement>event.target;
            this.elevationContentElement = html`<nidoca-elevation-settings></nidoca-elevation-settings>`;
          }}"
        ></nidoca-icon>

        <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

        <span slot="content">${this.currentPage}</span>

        <nidoca-list slot="sidebar">

          <nidoca-list-item @click="${() => NidocaRouter.getUniqueInstance().navigate("main")}">
            <nidoca-typography .typographyType="${NidocaTypographyType.H6}">Start</nidoca-typography>
          </nidoca-list-item>
          <nidoca-list-item @click="${() => NidocaRouter.getUniqueInstance().navigate("components")}">
            <nidoca-typography .typographyType="${NidocaTypographyType.H6}">Komponenten</nidoca-typography>
          </nidoca-list-item>
          <nidoca-list-item @click="${() => NidocaRouter.getUniqueInstance().navigate("settings")}">
            <nidoca-typography .typographyType="${NidocaTypographyType.H6}">Einstellungen</nidoca-typography>
            <nidoca-layout-spacer slot="graphic"></nidoca-layout-spacer>
          </nidoca-list-item>
          <nidoca-list-item @click="${() => NidocaRouter.getUniqueInstance().navigate("imprint")}">
            <nidoca-typography .typographyType="${NidocaTypographyType.H6}">Impressum</nidoca-typography>
            <nidoca-icon slot="graphic" icon="gavel"></nidoca-icon>
          </nidoca-list-item>
        </nidoca-list>
      </nidoca-template>
      <nidoca-dialog
        .show="${this.showPopup}"
        @nidoca-popup-login-closePopup="${() => (this.showPopup = false)}"
      >${this.popupContent}
      </nidoca-dialog>
      <nidoca-elevation
        .show="${this.elevationShow}"
        .associatedElement="${this.elevationAssociatedElement}"
        @mouseout="${() => (this.elevationShow = false)}"
        >${this.elevationContentElement}</nidoca-elevation
      >
    `;
  }
}
