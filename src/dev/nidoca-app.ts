import {html, LitElement, TemplateResult, css} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";
import {NidocaTypographyType} from "..";
import {NidocaColorScheme} from "../nidoca-meta";

@customElement("nidoca-app")
export class NidocaApp extends LitElement implements NidocaRouteListener {
  @property({type: Boolean})
  showPopup: boolean = false;

  @property({type: Object})
  popupContent: TemplateResult = html``;

  @property({type: Boolean})
  navigationClosed: boolean = true;

  @property({type: Boolean})
  prominent: boolean = false;

  @property({type: Object})
  currentPage: TemplateResult = html`<nidoca-page-main></nidoca-page-main>`;

  @property({type: Boolean})
  elevationShow: boolean = false;

  @property({type: Object})
  elevationAssociatedElement: HTMLElement | undefined;

  @property({type: Object})
  elevationContentElement: TemplateResult | undefined;

  constructor() {
    super();
    NidocaRouter.getUniqueInstance().subscribe(this);
  }

  firstUpdated(): void {
    this.routeChanged(NidocaRouter.getUniqueInstance().getCurrentPage());
  }

  routeChanged(url: string): void {
    console.log("enter new page, url: %s", url);
    switch (url) {
      case "gallery":
        this.currentPage = html`<nidoca-page-gallery></nidoca-page-gallery>`;
        break;
      case "settings":
        this.currentPage = html`<nidoca-page-settings></nidoca-page-settings>`;
        break;
      case "list":
        this.currentPage = html`<nidoca-page-list></nidoca-page-list>`;
        break;
      case "form":
        this.currentPage = html`<nidoca-page-form></nidoca-page-form>`;
        break;
      case "topAppBar":
        this.currentPage = html`<nidoca-page-top-app-bar></nidoca-page-top-app-bar>`;
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
        .colorScheme="${NidocaColorScheme.PRIMARY}"
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
          <nidoca-list-item
            icon="home"
            text="Home"
            .rendered="${true}"
            @click="${() => NidocaRouter.getUniqueInstance().navigate("main")}"
          ></nidoca-list-item>
          <nidoca-list-item
            icon="home"
            text="Gallery"
            .rendered="${true}"
            @click="${() => NidocaRouter.getUniqueInstance().navigate("gallery")}"
          ></nidoca-list-item>
          <nidoca-list-item
            icon="home"
            text="topAppBar"
            .rendered="${true}"
            @click="${() => NidocaRouter.getUniqueInstance().navigate("topAppBar")}"
          ></nidoca-list-item>
          <nidoca-list-item @click="${() => NidocaRouter.getUniqueInstance().navigate("list")}">Liste</nidoca-list-item>
          <nidoca-list-item @click="${() => NidocaRouter.getUniqueInstance().navigate("form")}">
            <nidoca-typography .typographyType="${NidocaTypographyType.H6}">Formular</nidoca-typography>
            <nidoca-icon slot="graphic" icon="face">face</nidoca-icon>
            <nidoca-icon slot="meta" icon="arrow_right">arrow_right</nidoca-icon>
          </nidoca-list-item>
        </nidoca-list>
      </nidoca-template>
      <nidoca-dialog
        .show="${this.showPopup}"
        .content="${this.popupContent}"
        @nidoca-popup-login-closePopup="${() => (this.showPopup = false)}"
      >
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
