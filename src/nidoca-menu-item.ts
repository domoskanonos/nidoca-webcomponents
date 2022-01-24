import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTypographyType} from ".";

export enum NidocaMenuItemType {
    ITEM = "item",
    SECTION = "section",
}

@customElement("nidoca-menu-item")
export class NidocaMenuItem extends LitElement {
    static styles = css`
    .item {
      cursor: pointer;
    }
  `;

    @property({type: String})
    text: string = "";

    @property({type: String})
    icon: string = "";

    @property({type: String})
    type: string = NidocaMenuItemType.ITEM;

    render(): TemplateResult {
        return html`
            <div class="container ${this.type}">
                ${this.icon
                        ? html`
                            <nidoca-icon
                                    slot="graphic"
                                    icon="gavel"
                                    style="padding-left:var(--space-normal);padding-right:var(--space-normal)"
                            ></nidoca-icon>`
                        : html`
                            <nidoca-layout-spacer
                                    slot="graphic"
                                    left="28px"
                                    right="28px"
                            ></nidoca-layout-spacer>`}
                ${this.text
                        ? html`
                            <nidoca-typography .typographyType="${NidocaTypographyType.H6}">${this.text}
                            </nidoca-typography>`
                        : html``}
            </div>
        `;
    }
}
