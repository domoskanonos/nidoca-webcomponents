import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {NidocaPostgrestClient} from "./service/nidoca-postgrest-client";
import {NidocaStore, NidocaStoreListener} from "./service/nidoca-store";
import {AppController, ChannelsEnum} from "./service/app-controller";

export enum PageReferenceType {
    anchor = "anchor",
    page = "page",
}

export interface AppModel {
    name: string;
    pages: PageReference[];
}

export interface PageReference {
    type: PageReferenceType;
    name: string;
    route: string;
    rootComponent: string;
    icon: string;
}

export const _APP_MODEL: AppModel = {
    name: "nidoca",
    pages: [<PageReference>{
        type: PageReferenceType.page,
        name: "Dashboard",
        route: "dashboard",
        rootComponent: "nidoca-page-dashboard"
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
    ]
}


@customElement("nidoca-my-app")
export class NidocaMyApp extends LitElement implements NidocaStoreListener {

    @property({type: Array})
    pages: PageReference[] = [];

    @property({type: Boolean})
    loggedIn: boolean = NidocaPostgrestClient.isLoggedIn();

    @property({type: Object})
    currentPage: any = html`
        <nidoca-page-dashboard></nidoca-page-dashboard>`;

    constructor() {
        super();
        NidocaStore.addListener(this);
    }

    channelUpdated(channel: string, item: any): void {
        console.log(`receive item for channel: ${channel},item: ${item}`);
        if (channel == ChannelsEnum.isLoggedIn)
            this.loggedIn = item;
    }

    render(): TemplateResult {
        return html`
            <nidoca-app .loggedIn="${this.loggedIn}" .pages="${_APP_MODEL.pages}"
                        @nidoca-event-app-login="${async (event: CustomEvent) => {
                            const loggedIn = await NidocaPostgrestClient.login(
                                    event.detail.jsonObject.username,
                                    event.detail.jsonObject.password
                            );
                            NidocaStore.updateItem(ChannelsEnum.isLoggedIn, loggedIn);
                            if (loggedIn) {
                                AppController.loadData().then(() => {
                                    console.log("data loaded." + loggedIn);
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
