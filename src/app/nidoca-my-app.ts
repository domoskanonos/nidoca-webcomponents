import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {NidocaStore, NidocaStoreListener} from "./service/nidoca-store";
import {AppController, ChannelsEnum} from "./service/app-controller";
import {AppModel, PageReference, PageReferenceType} from "../apps/nidoca-app";

export const _APP_MODEL: AppModel = {
    name: "nidoca",
    root: <PageReference>{
        type: PageReferenceType.anchor,
        childs: [<PageReference>{
            type: PageReferenceType.page,
            name: "Dashboard",
            route: "dashboard",
            rootComponent: "nidoca-page-dashboard"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Kontakt",
            route: "kontakt",
            rootComponent: "nidoca-page-kontakt"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Projekt",
            route: "projekt",
            rootComponent: "nidoca-page-projekt"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Modul",
            route: "modul",
            rootComponent: "nidoca-page-modul"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Vorlage",
            route: "vorlage",
            rootComponent: "nidoca-page-vorlage"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Verträge",
            route: "vertrag",
            rootComponent: "nidoca-page-vertrag"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Aufgaben",
            route: "aufgabe",
            rootComponent: "nidoca-page-aufgabe"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Konto",
            route: "konto",
            rootComponent: "nidoca-page-konto"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Impressum",
            route: "imprint",
            rootComponent: "nidoca-page-imprint"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Datenschutz",
            route: "privacy",
            rootComponent: "nidoca-page-privacy"
        }, <PageReference>{
            type: PageReferenceType.page,
            name: "Nutzungsbedingungen",
            route: "terms-of-use",
            rootComponent: "nidoca-page-terms-of-use"
        }, <PageReference>{
            type: PageReferenceType.page,
            icon: "home",
            name: "Einstellungen",
            route: "settings",
            rootComponent: "nidoca-page-settings"
        }
        ], route: "dashboard", name: "Root"
    }
}

@customElement("nidoca-my-app")
export class NidocaMyApp extends LitElement implements NidocaStoreListener, NidocaRouteListener {

    @property({type: Array})
    pages: PageReference[] = [];

    @property({type: Boolean})
    loggedIn: boolean = NidocaPostgrestClient.isLoggedIn();

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
        if (channel == ChannelsEnum.isLoggedIn)
            this.loggedIn = item;
    }

    render(): TemplateResult {
        return html`
            <nidoca-app route="${this.route}" .loggedIn="${this.loggedIn}" .root="${_APP_MODEL.root}"
                        @nidoca-event-app-route="${(event: CustomEvent) => {
                            NidocaRouter.getUniqueInstance().navigate(event.detail);
                        }}"
                        @nidoca-event-app-login="${async (event: CustomEvent) => {
                            const loggedIn = await NidocaPostgrestClient.login(
                                    event.detail.jsonObject.username,
                                    event.detail.jsonObject.password
                            );
                            NidocaStore.updateItem(ChannelsEnum.isLoggedIn, loggedIn);
                            if (loggedIn) {
                                AppController.loadData().then(() => {
                                    console.log("data loaded." + loggedIn);
                                    this.route = "dashboard";
                                    this.loggedIn = loggedIn;
                                });
                            }
                        }}" @nidoca-event-app-logout="${() => {
                NidocaPostgrestClient.logout();
                NidocaStore.updateItem(ChannelsEnum.isLoggedIn, NidocaPostgrestClient.isLoggedIn());
                this.loggedIn = NidocaPostgrestClient.isLoggedIn();
            }}"></nidoca-app>`;
    }
}
