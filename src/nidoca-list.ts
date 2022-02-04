import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {NidocaTheme} from ".";
import {NidocaListItem} from "./nidoca-list-item";

@customElement("nidoca-list")
export class NidocaList extends LitElement {
    static styles = css`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `;

    @property({type: NidocaTheme, converter: String})
    theme: string | undefined;

    @property({type: Boolean})
    multiSelect: boolean = false;

    @query("#slotElement")
    private slotElement: HTMLSlotElement | undefined;

    constructor() {
        super();
        this.theme = NidocaTheme.prototype.getParentTheme(this) || NidocaTheme.BACKGROUND;
    }

    updated(changedProperties: PropertyValues): void {
        super.updated(changedProperties);
        changedProperties.forEach((oldValue, propName) => {
            console.debug(`${this.tagName} : property ${String(propName)} changed. oldValue: ${oldValue}`);
            if (propName == "selectionMode") {
                this.getItems().forEach((listItemComponent) => {
                    listItemComponent.multiSelect = this.multiSelect;
                });
            }
        });
    }

    render(): TemplateResult {
        return html`
            <style>

                slot {
                    border-color: var(--app-color-${this.theme}-border);
                    border-top-style: solid;
                    border-width: thin;
                }

                ::slotted(nidoca-list-section) {
                    color: var(--app-color-${this.theme});
                    background-color: var(--app-color-${this.theme}-background-light);
                }

                ::slotted(nidoca-list-item) {
                    color: var(--app-color-${this.theme});
                    background-color: var(--app-color-${this.theme}-background);
                }

                ::slotted(nidoca-list-item), ::slotted(nidoca-list-section) {
                    border-color: var(--app-color-${this.theme}-border);
                    border-bottom-style: solid;
                    border-width: thin;
                }

                ::slotted(nidoca-list-item:hover) {
                    background-color: var(--app-color-background-selected);
                }
            </style>
            <slot
                    @nidoca-event-list-item-click="${(event: CustomEvent) => {
                        if (!this.multiSelect) {
                            this.unselectAll();
                        }
                        event.detail.selected = true;
                    }}"

                    @nidoca-event-list-item-unselect="${() => {
                        this.multiSelect = this.getSelectedItems().length === 0;
                    }}"
                    class="slotList"
                    id="slotElement"
            ></slot> `;
    }

    getItems(): NidocaListItem[] {
        const all: NidocaListItem[] = [];
        if (this.slotElement != null) {
            const slottedElements = this.slotElement.assignedElements();
            for (let index = 0; index < slottedElements.length; index++) {
                const element = slottedElements[index];
                if (element instanceof NidocaListItem) {
                    all.push(element);
                }
            }
        }
        return all;
    }

    getSelectedItems(): NidocaListItem[] {
        const selection: NidocaListItem[] = [];
        if (this.slotElement != null) {
            const slottedElements = this.slotElement.assignedElements();
            for (let index = 0; index < slottedElements.length; index++) {
                const element = slottedElements[index];
                if (element instanceof NidocaListItem) {
                    if (element.selected) {
                        selection.push(element);
                    }
                }
            }
        }
        return selection;
    }

    getSelectedIndexes(): number[] {
        const selection: number[] = [];
        if (this.slotElement != null) {
            const slottedElements = this.slotElement.assignedElements();
            let nliIndex: number = 0;
            for (let i = 0; i < slottedElements.length; i++) {
                const element = slottedElements[i];
                if (element instanceof NidocaListItem) {
                    if (element.selected) {
                        selection.push(nliIndex);
                    }
                    nliIndex++;
                }
            }
        }
        return selection;
    }

    selectAll(): void {
        this.getItems().forEach((item) => {
            item.selected = true;
        });
    }

    unselectAll(): void {
        console.log("sdojsdoijsoidjsdioj " + this.getItems().length);
        this.getItems().forEach((item) => {
            item.selected = false;
        });
    }
}
