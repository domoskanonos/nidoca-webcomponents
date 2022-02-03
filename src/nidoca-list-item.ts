import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFormTextType, NidocaTextType} from ".";

@customElement("nidoca-list-item")
export class NidocaListItem extends LitElement {
    static styles = css`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: 1fr 1fr minmax(auto, 100%) 1fr;
      padding: var(--space-2);     
    }

    .item {
      align-self: center;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }    
  `;

    @property({type: Boolean})
    selectionMode: boolean = false;

    @property({type: Boolean})
    selected: boolean = false;

    @property({type: String})
    primaryText: string = "";

    @property({type: String})
    secondaryText: string = "";

    protected update(changedProperties: Map<PropertyKey, unknown>): void {
        super.update(changedProperties);
        if (changedProperties.get("selectionMode") != undefined) {
            if (!this.selectionMode) {
                this.selected = false;
            }
        }
    }

    render(): TemplateResult {
        return html`
            <div class="container" @mousedown="${() => this.downAction()}"
                 @mouseup="${() => this.upAction()}"
                 @pointerup="${() => this.upAction()}"
                 @pointerdown="${() => this.downAction()}">
                ${this.selectionMode
                        ? html`
                            <nidoca-icon
                                    style="padding-right: var(--space-2);"
                                    class="item"
                                    @click="${() => this.switchSelected()}"
                                    icon="${this.selected ? "check_box" : "check_box_outline_blank"}"
                            ></nidoca-icon>`
                        : html`<span></span>`}
                <slot name="graphic" class="item"></slot>
                <div class="containerTypography">
                    ${this.primaryText
                            ? html`
                                <nidoca-text class="item" .type="${NidocaTextType.BODY1}"
                                >${this.primaryText}
                                </nidoca-text
                                >`
                            : html``}
                    <slot></slot>
                    ${this.secondaryText
                            ? html`
                                <nidoca-text class="item" .type="${NidocaTextType.SUBTITLE1}"
                                >${this.secondaryText}
                                </nidoca-text
                                >`
                            : html``}
                    <slot name="secondary"></slot>
                </div>
                <slot name="meta" class="item"></slot>
            </div>
        `;
    }

    private clickStart: number | null = null;

    downAction(): void {
        this.clickStart = Date.now();
    }

    upAction(): void {
        if (this.clickStart) {
            const diff: number = Date.now() - this.clickStart + 1;
            let eventName: string = "";
            if (diff > 500) {
                eventName = "nidoca-event-list-item-long-click";
            } else {
                eventName = "nidoca-event-list-item-click";
            }
            console.log(eventName);
            this.dispatchEvent(
                new CustomEvent(eventName, {
                    detail: this,
                    bubbles: true,
                    composed: true,
                })
            );
        }
    }

    switchSelected(): void {
        this.selected = Boolean(!this.selected);
        if (this.selected) {
            this.dispatchEvent(
                new CustomEvent("nidoca-event-list-item-select", {
                    detail: this,
                    bubbles: true,
                    composed: true,
                })
            );
        } else {
            this.dispatchEvent(
                new CustomEvent("nidoca-event-list-item-unselect", {
                    detail: this,
                    bubbles: true,
                    composed: true,
                })
            );
        }
    }
}
