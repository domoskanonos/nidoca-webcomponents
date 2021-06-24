import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";
import {TypographyType} from "..";

@customElement("nidoca-app")
export class NidocaApp extends LitElement implements NidocaRouteListener {
  @property({type: Boolean})
  prominent: boolean = false;

  @property({type: Object})
  currentPage: TemplateResult = html`<nidoca-page-main></nidoca-page-main>`;

  constructor() {
    super();
    NidocaRouter.getUniqueInstance().subscribe(this);
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
      case "main":
      default:
        this.currentPage = html`<nidoca-page-main></nidoca-page-main>`;
        break;
    }
  }

  render(): TemplateResult {
    return html`
      <nidoca-template .prominent="${this.prominent}">
        <nidoca-typography slot="topCenter" typographyType="${TypographyType.BODY1}"
          >nidoca framework</nidoca-typography
        >
        <nidoca-icon
          slot="topRight"
          icon="${this.prominent ? "search_off" : "search"}"
          @nidoca-event-icon-clicked="${() => (this.prominent = !this.prominent)}"
        ></nidoca-icon>
        <nidoca-icon slot="topRight" icon="person"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="more_vert"></nidoca-icon>

        <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

        <span slot="content">${this.currentPage}</span>

        <nidoca-navigation slot="sidebar">
          <nidoca-navigation-link
            slot="links"
            icon="home"
            text="Home"
            href="#main"
            .rendered="${true}"
            @nidoca-event-link-clicked="${() => NidocaRouter.getUniqueInstance().navigate("main")}"
          ></nidoca-navigation-link>
          <nidoca-navigation-link
            slot="links"
            icon="home"
            text="Gallery"
            href="#main"
            .rendered="${true}"
            @nidoca-event-link-clicked="${() => NidocaRouter.getUniqueInstance().navigate("gallery")}"
          ></nidoca-navigation-link>
        </nidoca-navigation>
      </nidoca-template>
    `;
  }
}
