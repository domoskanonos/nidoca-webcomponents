import {html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {NidocaStore, NidocaStoreListener} from "./service/nidoca-store";
import {AppController, ChannelsEnum} from "./service/app-controller";
import {PageReference} from "../apps/nidoca-app";

@customElement("nidoca-my-app")
export class NidocaMyApp extends LitElement implements NidocaStoreListener, NidocaRouteListener {
  @property({type: Array})
  pages: PageReference[] = [];

  @property({type: Boolean})
  //loggedIn: boolean = NidocaPostgrestClient.isLoggedIn();
  loggedIn: boolean = true;

  @property({type: Object})
  route: string = "";

  constructor() {
    super();
    NidocaRouter.getUniqueInstance().subscribe(this);
    this.routeChanged(NidocaRouter.getUniqueInstance().getCurrentPage());
    NidocaStore.addListener(this);
  }

  routeChanged(relUrl: string): void {
    this.route = relUrl;
  }

  channelUpdated(channel: string, item: any): void {
    console.log(`receive item for channel: ${channel},item: ${item}`);
    if (channel == ChannelsEnum.isLoggedIn) this.loggedIn = item;
  }

  render(): TemplateResult {
    return html`
    
    <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${() => {
                            window.location.href = "https://github.com/domoskanonos/nidoca-webcomponents";
                        }}" icon="logout"></nidoca-icon>

                <span slot="content">Hallo</span>

                <nidoca-menu slot="left" theme="primary">
                    ${this.root?.childs.map((page: PageReference) => html`
                        <nidoca-menu-item text="${page.name}"
                                          @click="${() => {
                                              this.routeTo(page);
                                          }}"></nidoca-menu-item>`
                    )}
                </nidoca-menu>
            </nidoca-template>


    `;
  }
}
