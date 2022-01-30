import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, query} from "lit/decorators.js";
import {property} from "lit/decorators.js";

export enum NidocaTypographyType {
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
      display: inline-block;
      line-height: 0;
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
      text-overflow: ellipsis;
      overflow: hidden;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      text-decoration: none;
      line-height: normal;
      white-space: normal;
      word-wrap: normal;
      word-break: break-word;
    }

    .H1 {
      font-size: 3.5rem;
    }

    .H2,
    ::slotted(.H2) {
      font-size: 2.75rem;
      vertical-align: top;
    }

    .H3 {
      font-size: 2.5rem;
    }

    .H4 {
      font-size: 1.5rem;
    }

    .H5 {
      font-size: 1.25rem;
    }

    .H6 {
      font-size: 1.15rem;
    }

    .H4,
    .H5,
    .H6,
    .OVERLINE,
    .CAPTION,
    .SUBTITLE2 {
      opacity: 0.6;
    }

    .SUBTITLE1 {
      font-size: 1rem;
    }

    .SUBTITLE2 {
      font-size: 0.875rem;
    }

    .BODY1 {
      font-size: 1em;
      text-decoration-style: solid;
      font-size: 1.5rem;
      font-weight: 200;
    }

    .BODY2 {
      text-decoration-style: solid;
      font-size: 1.25rem;
      font-weight: 300;
    }

    .BUTTON {
      font-size: 0.875rem;
      text-transform: uppercase;
    }

    .CAPTION {
      font-size: 0.75rem;
    }

    .OVERLINE {
      font-size: 0.625rem;
      text-transform: uppercase;
    }
  `;

  @property({type: NidocaTypographyType, converter: String})
  type: string = NidocaTypographyType.BODY1;

  @property({type: String})
  text: string = "";

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
    return html`<slot id="slotElement">${this.text}</slot>`;
  }
}
