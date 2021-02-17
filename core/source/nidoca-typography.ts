import {css, customElement, html, property, unsafeCSS, LitElement, TemplateResult} from 'lit-element';

export enum TypographyType {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  SUBTITLE1 = 'SUBTITLE1',
  SUBTITLE2 = 'SUBTITLE2',
  BODY1 = 'BODY1',
  BODY2 = 'BODY2',
  BUTTON = 'BUTTON',
  CAPTION = 'CAPTION',
  OVERLINE = 'OVERLINE',
}

export enum TypographyAlignment {
  JUSTIFY = 'text-align:justify;',
  JUSTIFY_ALL = 'text-align:justify-all;',
  LEFT = 'text-align: left;',
  RIGHT = 'text-align: right;',
  CENTER = 'text-align: center;',
  START = 'text-align: start;',
  END = 'text-align: end;',
  MATCH_PARENT = 'text-align: match-parent;',
  INHERIT = 'text-align: inherit;',
  INITIAL = 'text-align: initial;',
  UNSET = 'text-align: unset;',
}

@customElement('nidoca-typography')
export class NidocaTypography extends LitElement {
  static styles = css`
    :host,
    ::slotted(:host) {
    }

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

    .H1,
    .H2,
    .H3,
    .H4,
    .H5,
    .H6 {
    }

    .H1 {
      font-size: 2.75rem;
      letter-spacing: -0.09375rem;
      font-weight: 300;
    }

    .H2,
    ::slotted(.H2) {
      font-size: 2.5rem;
      vertical-align: top;
      font-weight: 300;
    }

    .H3 {
      font-size: 2rem;
      font-weight: 400;
    }

    .H4 {
      font-size: 1.5rem;
      font-weight: 400;
    }

    .H5 {
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: 0rem;
    }

    .H6 {
      font-size: 1.15rem;
      font-weight: 500;
    }

    .SUBTITLE1 {
      font-size: 1rem;
      font-weight: 400;
    }

    .SUBTITLE2 {
      font-size: 0.875rem;
      font-weight: 500;
    }

    .BODY1 {
      font-size: 1em;
      font-weight: 500;
      text-decoration-style: solid;
      line-height: 1.5;
    }

    .BODY2 {
      font-size: 0.875rem;
      font-weight: 500;
      text-decoration-style: solid;
      line-height: 1.5;
    }

    .BUTTON {
      font-size: 0.875rem;
      text-transform: uppercase;
      font-weight: 700;
    }

    .CAPTION {
      font-size: 0.75rem;
      font-weight: 600;
    }

    .OVERLINE {
      font-size: 0.625rem;
      text-transform: uppercase;
      font-weight: 500;
    }
  `;

  @property()
  typographyType: TypographyType = TypographyType.BODY1;

  @property()
  typographyAlignment: TypographyAlignment = TypographyAlignment.START;

  @property()
  text: string = '';

  render(): TemplateResult {
    return html`
      <span class="TYPOGRAPHY ${this.typographyType}" style="${this.typographyAlignment}"
        >${this.text}<slot></slot
      ></span>
    `;
  }
}
