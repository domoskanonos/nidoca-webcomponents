import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, query} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaArticle} from "./nidoca-article";
import {NidocaContainer} from "./nidoca-container";
import {NidocaSection} from "./nidoca-section";
import {Nidoca, NidocaTheme} from "./nidoca-meta";
import {NidocaForm} from "./nidoca-form";
import {NidocaTemplate} from "./nidoca-template";
import {NidocaBox} from "./nidoca-box";

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
      color: inherit;
    }

    .H1,
    .H2,
    .H3,
    .H4,
    .H5,
    .H6,
    .SUBTITLE1,
    .SUBTITLE2,
    .BODY1,
    .BODY2,
    .BUTTON,
    .CAPTION,
    .OVERLINE {
      vertical-align: text-bottom;
    }

    .H1,
    ::slotted(.H1) {
      font-size: var(--font-size-h1);
      line-height: calc(var(--font-size-h1) * var(--font-line-height-multiplicator));
    }

    .H2,
    ::slotted(.H2) {
      font-size: var(--font-size-h2);
      line-height: calc(var(--font-size-h2) * var(--font-line-height-multiplicator));
    }

    .H3,
    ::slotted(.H3) {
      font-size: var(--font-size-h3);
      line-height: calc(var(--font-size-h3) * var(--font-line-height-multiplicator));
    }

    .H4,
    ::slotted(.H4) {
      font-size: var(--font-size-h4);
      line-height: calc(var(--font-size-h4) * var(--font-line-height-multiplicator));
    }

    .H5,
    ::slotted(.H5) {
      font-size: var(--font-size-h5);
      line-height: calc(var(--font-size-h5) * var(--font-line-height-multiplicator));
    }

    .H6,
    ::slotted(.H6) {
      font-size: var(--font-size-h6);
      line-height: calc(var(--font-size-h6) * var(--font-line-height-multiplicator));
    }

    .BODY1,
    ::slotted(.BODY1) {
      font-size: var(--font-size);
      line-height: calc(var(--font-size) * var(--font-line-height-multiplicator));
    }

    .BODY2,
    ::slotted(.BODY2) {
      font-size: var(--font-size-body-2);
      line-height: calc(var(--font-size-body-2) * var(--font-line-height-multiplicator));
      text-decoration-style: solid;
    }

    .SUBTITLE1,
    ::slotted(.SUBTITLE1) {
      font-size: var(--font-size-subtitle-1);
      line-height: calc(var(--font-size-subtitle-1) * var(--font-line-height-multiplicator));
    }

    .SUBTITLE2,
    ::slotted(.SUBTITLE2) {
      font-size: var(--font-size-subtitle-2);
      line-height: calc(var(--font-size-subtitle-2) * var(--font-line-height-multiplicator));
    }

    .BUTTON,
    ::slotted(.BUTTON) {
      font-size: var(--font-size-button);
      line-height: calc(var(--font-size-button) * var(--font-line-height-multiplicator));
      text-transform: uppercase;
    }

    .CAPTION,
    ::slotted(.CAPTION) {
      font-size: var(--font-size-caption);
      line-height: calc(var(--font-size-caption) * var(--font-line-height-multiplicator));
    }

    .OVERLINE,
    ::slotted(.OVERLINE) {
      font-size: var(--font-size-overline);
      line-height: calc(var(--font-size-overline) * var(--font-line-height-multiplicator));
      text-transform: uppercase;
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
            <style>

                .SUBTITLE1,
                .SUBTITLE2,
                .CAPTION {
                    color: var(--app-color-${this.theme}-border);
                }

            </style>
            <slot id="slotElement">${this.text}</slot>`;
    }
}
