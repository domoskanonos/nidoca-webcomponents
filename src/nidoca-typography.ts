import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";

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

export enum NidocaTypographyAlignment {
  JUSTIFY = "text-align:justify;",
  JUSTIFY_ALL = "text-align:justify-all;",
  LEFT = "text-align: left;",
  RIGHT = "text-align: right;",
  CENTER = "text-align: center;",
  START = "text-align: start;",
  END = "text-align: end;",
  MATCH_PARENT = "text-align: match-parent;",
  INHERIT = "text-align: inherit;",
  INITIAL = "text-align: initial;",
  UNSET = "text-align: unset;",
}

@customElement("nidoca-typography")
export class NidocaTypography extends LitElement {
  static styles = css`
    .TYPOGRAPHY {
      display: inline-block;
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
      font-size: 2.75rem;
    }

    .H2,
    ::slotted(.H2) {
      font-size: 2.5rem;
      vertical-align: top;
    }

    .H3 {
      font-size: 2rem;
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
      line-height: 1.5;
    }

    .BODY2 {
      font-size: 0.875rem;
      text-decoration-style: solid;
      line-height: 1.5;
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

  @property({type: String})
  typographyType: NidocaTypographyType = NidocaTypographyType.BODY1;

  @property({type: String})
  typographyAlignment: NidocaTypographyAlignment = NidocaTypographyAlignment.START;

  @property({type: String})
  text: string = "";

  render(): TemplateResult {
    return html`
      <span class="TYPOGRAPHY ${this.typographyType}" style="${this.typographyAlignment}"
        >${this.text}<slot></slot
      ></span>
    `;
  }
}
