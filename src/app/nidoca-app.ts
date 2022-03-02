import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {NidocaStore, NidocaStoreListener} from "./service/nidoca-store";
import {ChannelsEnum} from "./service/app-controller";

@customElement("nidoca-app")
export class NidocaApp extends LitElement implements NidocaRouteListener, NidocaStoreListener {

    @property({type: Boolean})
    navigationClosed: boolean = false;

    @property({type: Boolean})
    prominent: boolean = false;

    @property({type: Boolean})
    isLoggedIn: boolean = false;

    @property({type: Object})
    currentPage: any = html`
        <nidoca-page-dashboard></nidoca-page-dashboard>`;

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
        NidocaStore.addListener(this);
    }

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
        if (_changedProperties.has("isLoggedIn")) {
            if (!this.isLoggedIn) {
                console.log("route to login page.");
                NidocaRouter.getUniqueInstance().navigate("login");
            }
        }
    }

    channelUpdated(channel: string, item: any): void {
        console.log(`receive item for channel: ${channel},item: ${item}`);
        if (channel == ChannelsEnum.isLoggedIn)
            this.isLoggedIn = item;
    }

    routeChanged(url: string): void {
        console.log("enter new page, url: %s", url);
        switch (url) {
            case "dashboard":
                this.currentPage = html`
                    <nidoca-page-dashboard></nidoca-page-dashboard>`;
                break;
            case "playground":
                this.currentPage = html`
                    <nidoca-page-playground></nidoca-page-playground>`;
                break;
            case "components":
                this.currentPage = html`
                    <nidoca-page-components></nidoca-page-components>`;
                break;
            case "vertrag":
                this.currentPage = html`
                    <nidoca-page-vertrag></nidoca-page-vertrag>`;
                break;
            case "aufgabe":
                this.currentPage = html`
                    <nidoca-page-aufgabe></nidoca-page-aufgabe>`;
                break;
            case "settings":
                this.currentPage = html`
                    <nidoca-page-settings></nidoca-page-settings>`;
                break;
            case "imprint":
                this.currentPage = html`
                    <nidoca-page-imprint></nidoca-page-imprint>`;
                break;
            case "terms-of-use":
                this.currentPage = html`
                    <nidoca-page-terms-of-use></nidoca-page-terms-of-use>`;
                break;
            case "privacy":
                this.currentPage = html`
                    <nidoca-page-privacy></nidoca-page-privacy>`;
                break;
            case "main":
            default:
                this.currentPage = html`
                    <nidoca-page-main></nidoca-page-main>`;
                break;
        }
    }

    render(): TemplateResult {
        return this.isLoggedIn ? html`
            <nidoca-template .prominent="${this.prominent}" .navigationClosed="${this.navigationClosed}">
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${() => {
                            NidocaPostgrestClient.logout();
                            NidocaStore.updateItem(ChannelsEnum.isLoggedIn, NidocaPostgrestClient.isLoggedIn());
                        }}" icon="logout"></nidoca-icon>

                <nidoca-icon slot="topRight" style="padding-right:var(--space-2);" icon="share"></nidoca-icon>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        icon="more_vert"
                        .clickable="${true}"
                        @nidoca-event-icon-clicked="${(event: CustomEvent) => {
                            this.elevationShow = true;
                            this.elevationAssociatedElement = <HTMLElement>event.target;
                            this.elevationContentElement = html`
                                <nidoca-elevation-settings></nidoca-elevation-settings>`;
                        }}"
                ></nidoca-icon>

                <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

                <span slot="content">${this.currentPage}</span>

                <nidoca-menu slot="left" theme="primary">
                    <nidoca-menu-item text="Start"
                                      @click="${() => NidocaRouter.getUniqueInstance().navigate("main")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Dashboard"
                                      @click="${() => NidocaRouter.getUniqueInstance().navigate("dashboard")}">
                    </nidoca-menu-item>

                    <nidoca-menu-area text="Framework"></nidoca-menu-area>

                    <nidoca-menu-item text="Spielwiese"
                                      @click="${() => NidocaRouter.getUniqueInstance().navigate("playground")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Verträge" @click="${() =>
                            NidocaRouter.getUniqueInstance().navigate("vertrag")}">
                    </nidoca-menu-item>

                    <nidoca-menu-item text="Aufgabe" @click="${() =>
                            NidocaRouter.getUniqueInstance().navigate("aufgabe")}">
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
            <nidoca-elevation
                    .show="${this.elevationShow}"
                    .associatedElement="${this.elevationAssociatedElement}"
                    @mouseout="${() => (this.elevationShow = false)}"
            >${this.elevationContentElement}
            </nidoca-elevation>
        ` : html`
            <nidoca-page-login @nidoca-form-login-submit="${async (event: CustomEvent) => {
                const loggedIn = await NidocaPostgrestClient.login(
                        event.detail.jsonObject.username,
                        event.detail.jsonObject.password
                );
                NidocaStore.updateItem(ChannelsEnum.isLoggedIn, loggedIn);
                if (loggedIn) {
                    NidocaRouter.getUniqueInstance().navigate("dashboard");
                }
            }}"></nidoca-page-login>`;
    }
}
