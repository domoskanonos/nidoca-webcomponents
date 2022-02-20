import {html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";

@customElement("nidoca-app")
export class NidocaApp extends LitElement implements NidocaRouteListener {
  @property({type: Boolean})
  showPopup: boolean = false;

  @property({type: Object})
  popupContent: any = html``;

  @property({type: Boolean})
  navigationClosed: boolean = false;

  @property({type: Boolean})
  prominent: boolean = false;

  @property({type: Object})
  currentPage: any = html` <nidoca-page-main></nidoca-page-main>`;

  @property({type: Boolean})
  elevationShow: boolean = false;

  @property({type: Object})
  elevationAssociatedElement: HTMLElement | undefined;

  @property({type: Object})
  elevationContentElement: any | undefined;

  constructor() {
    super();
    NidocaRouter.getUniqueInstance().subscribe(this);
    this.routeChanged(NidocaRouter.getUniqueInstance().getCurrentPage());
  }

  routeChanged(url: string): void {
    console.log("enter new page, url: %s", url);
    switch (url) {
      case "dashboard":
        this.currentPage = html` <nidoca-page-dashboard></nidoca-page-dashboard>`;
        break;
      case "playground":
        this.currentPage = html` <nidoca-page-playground></nidoca-page-playground>`;
        break;
      case "components":
        this.currentPage = html` <nidoca-page-components></nidoca-page-components>`;
        break;
      case "list":
        this.currentPage = html` <nidoca-page-list></nidoca-page-list>`;
        break;
      case "settings":
        this.currentPage = html` <nidoca-page-settings></nidoca-page-settings>`;
        break;
      case "imprint":
        this.currentPage = html` <nidoca-page-imprint></nidoca-page-imprint>`;
        break;
      case "terms-of-use":
        this.currentPage = html` <nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;
        break;
      case "privacy":
        this.currentPage = html` <nidoca-page-privacy></nidoca-page-privacy>`;
        break;
      case "main":
      default:
        this.currentPage = html` <nidoca-page-main></nidoca-page-main>`;
        break;
    }
  }

  render(): TemplateResult {
    return html`
            <nidoca-template .prominent="${this.prominent}" .navigationClosed="${this.navigationClosed}">
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>

                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        icon="${this.prominent ? "search_off" : "search"}"
                        @nidoca-event-icon-clicked="${() => (this.prominent = !this.prominent)}"
                ></nidoca-icon>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        icon="person"
                        @nidoca-event-icon-clicked="${() => {
                          this.showPopup = true;
                          this.popupContent = html` <nidoca-form-login
                            @nidoca-event-icon-clicked="${() => (this.showPopup = false)}"
                            @nidoca-form-login-submit="${async (event: CustomEvent) => {
                              const loggedIn = await NidocaPostgrestClient.login(
                                event.detail.jsonObject.username,
                                event.detail.jsonObject.password
                              );

                              if (loggedIn) {
                                this.showPopup = false;
                              }
                            }}"
                          ></nidoca-form-login>`;
                        }}"
                ></nidoca-icon>
                <nidoca-icon slot="topRight" style="padding-right:var(--space-2);" icon="share"></nidoca-icon>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        icon="more_vert"
                        .clickable="${true}"
                        @nidoca-event-icon-clicked="${(event: CustomEvent) => {
                          this.elevationShow = true;
                          this.elevationAssociatedElement = <HTMLElement>event.target;
                          this.elevationContentElement = html` <nidoca-elevation-settings></nidoca-elevation-settings>`;
                        }}"
                ></nidoca-icon>

                <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

                <span slot="content">${this.currentPage}</span>


                <nidoca-avatar
                        style="width:150px;"
                        slot="left"
                        imgSrc="https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg"
                >
                    <nidoca-text-body>Dominik Bruhn</nidoca-text-body>
                    <nidoca-text-caption>Softwareentwickler</nidoca-text-caption>
                </nidoca-avatar>

                <nidoca-menu slot="left" theme="primary">
                    <nidoca-menu-item text="Start" @click="${() => NidocaRouter.getUniqueInstance().navigate("main")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Dashboard"
                                      @click="${() => NidocaRouter.getUniqueInstance().navigate("dashboard")}">
                    </nidoca-menu-item>

                    <nidoca-menu-area text="Framework"></nidoca-menu-area>

                    <nidoca-menu-item text="Spielwiese"
                                      @click="${() => NidocaRouter.getUniqueInstance().navigate("playground")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Liste" @click="${() => NidocaRouter.getUniqueInstance().navigate("list")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item
                            text="Komponenten"
                            @click="${() => NidocaRouter.getUniqueInstance().navigate("components")}"
                    >
                    </nidoca-menu-item>

                    <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>

                    <nidoca-menu-item text="Impressum"
                                      @click="${() => NidocaRouter.getUniqueInstance().navigate("imprint")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Datenschutz"
                                      @click="${() => NidocaRouter.getUniqueInstance().navigate("privacy")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item
                            text="Nutzungsbedingungen"
                            @click="${() => NidocaRouter.getUniqueInstance().navigate("terms-of-use")}"
                    >
                    </nidoca-menu-item>

                    <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>

                    <nidoca-menu-item
                            icon="home"
                            text="Einstellungen"
                            @click="${() => NidocaRouter.getUniqueInstance().navigate("settings")}"
                    >
                    </nidoca-menu-item>
                </nidoca-menu>
            </nidoca-template>
            <nidoca-dialog .show="${this.showPopup}" @nidoca-form-login-closePopup="${() => (this.showPopup = false)}"
            >${this.popupContent}
            </nidoca-dialog>
            <nidoca-elevation
                    .show="${this.elevationShow}"
                    .associatedElement="${this.elevationAssociatedElement}"
                    @mouseout="${() => (this.elevationShow = false)}"
            >${this.elevationContentElement}
            </nidoca-elevation>
        `;
  }
}
