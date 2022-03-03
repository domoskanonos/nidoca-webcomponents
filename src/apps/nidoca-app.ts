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
export class NidocaApp extends LitElement {

    @property({type: Array})
    pages: PageReference[] = [];

    @property({type: Boolean})
    loggedIn: boolean = false;

    @property({type: String, converter: String})
    route: string | undefined;

    currentPage: PageReference | undefined;

    protected updated(_changedProperties: PropertyValues) {
        super.updated(_changedProperties);

        if (_changedProperties.has("route")) {
            for (let i = 0; i < this.pages.length; i++) {
                let pageReference = this.pages[i];
                if (pageReference.route == this.route) {
                    this.currentPage = pageReference;
                    break;
                }
            }
            this.requestUpdate();
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

                <span slot="content">${this.currentPage && this.currentPage.rootComponent ? html`${document.createElement(this.currentPage.rootComponent)}` : html``}</span>

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
