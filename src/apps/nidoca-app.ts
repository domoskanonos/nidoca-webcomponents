import {html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";

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

@customElement("nidoca-app")
export class NidocaApp extends LitElement implements NidocaRouteListener {

    @property({type: Array})
    pages: PageReference[] = [];

    @property({type: Boolean})
    loggedIn: boolean = false;

    @property({type: Object})
    currentPage: any = html`
        <nidoca-page-dashboard></nidoca-page-dashboard>`;

    constructor() {
        super();
        NidocaRouter.getUniqueInstance().subscribe(this);
        this.routeChanged(NidocaRouter.getUniqueInstance().getCurrentPage());
    }

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);
        if (_changedProperties.has("loggedIn")) {
            if (!this.loggedIn) {
                console.log("route to login page.");
                NidocaRouter.getUniqueInstance().navigate("login");
            }
        }
    }

    routeChanged(url: string): void {
        console.log("enter new page, url: %s", url);
        for (let i = 0; i < this.pages.length; i++) {
            let pageReference = this.pages[i];
            if (pageReference.route == url) {
                this.currentPage = html`${document.createElement(pageReference.rootComponent)}`;
                break;
            }
        }
    }

    render(): TemplateResult {
        return this.loggedIn ? html`
            <nidoca-template>
                <nidoca-text-body slot="topCenter"
                "></nidoca-text-body>
                <nidoca-icon
                        style="padding-right:var(--space-2);"
                        slot="topRight"
                        @nidoca-event-icon-clicked="${() => {
                            this.dispatchEvent(
                                    new CustomEvent("nidoca-event-app-logout", {
                                        detail: this,
                                        bubbles: true,
                                        composed: true,
                                    })
                            );
                        }}" icon="logout"></nidoca-icon>

                <span slot="content">${this.currentPage}</span>

                <nidoca-menu slot="left" theme="primary">
                    ${this.pages.map((page: PageReference) => html`
                        <nidoca-menu-item text="${page.name}"
                                          @click="${() => NidocaRouter.getUniqueInstance().navigate(page.route)}"></nidoca-menu-item>`)}
                </nidoca-menu>


            </nidoca-template>
        ` : html`
            <nidoca-page-login @nidoca-form-login-submit="${(event: CustomEvent) => {
                this.dispatchEvent(
                        new CustomEvent("nidoca-event-app-login", {
                            detail: event.detail,
                            bubbles: true,
                            composed: true,
                        })
                );
            }}"></nidoca-page-login>`;
    }
}
