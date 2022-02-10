import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, query} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme} from "./nidoca-meta";

export enum NidocaTextType {
    H1 = "H1",
    H2 = "H2",
    H3 = "H3",
    H4 = "H4",
    H5 = "H5",
    H6 = "H6",
    SUBTITLE1 = "SUBTITLE1",
    SUBTITLE2 = "SUBTITLE2",
    BODY1 = "BODY1",
    BODY2 = "BODY2",
    BUTTON = "BUTTON",
    CAPTION = "CAPTION",
    OVERLINE = "OVERLINE",
}

@customElement("nidoca-text")
export class NidocaText extends LitElement {
    static styles = css`
    :host,
    slot {
      display: block;
      vertical-align: text-bottom;
    }
  `;

    @property({type: NidocaTextType, converter: String})
    type: string = NidocaTextType.BODY1;

    @property({type: String})
    text: string = "";

    @property({type: String})
    theme: string | undefined;

    constructor() {
        super();
        this.theme = NidocaTheme.prototype.getParentTheme(this) || NidocaTheme.BACKGROUND;
    }

    @query("#slotElement")
    private slotElement: HTMLSlotElement | undefined;

    updated(changedProperties: PropertyValues): void {
        super.updated(changedProperties);
        changedProperties.forEach((_oldValue, propName) => {
            if (this.slotElement && propName == "type") {
                this.slotElement.classList.remove(...this.slotElement.classList);
                this.slotElement.classList.add(this.type);
            }
        });
    }

    render(): TemplateResult {
        return html`
            <slot id="slotElement">${this.text}</slot>`;
    }
}
