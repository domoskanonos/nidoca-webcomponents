import {css, customElement, html, property, LitElement, TemplateResult} from "lit-element";

export enum ShadowType {
  NONE = "NONE",
  KEY_LIGHT = "KEY_LIGHT",
  AMBIENT_LIGHT = "AMBIENT_LIGHT",
  COMBINED = "COMBINED",
}

@customElement("nidoca-box-shadow")
export class NidocaBoxShadow extends LitElement {
  static styles = css`

    .SHADOW {
      display: inline-block;
    }

    .KEY_LIGHT {
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .AMBIENT_LIGHT {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }

    .COMBINED {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
  `;

  @property({ type: String })
  shadowType: ShadowType = ShadowType.NONE;

  render(): TemplateResult {
    return html` <span class="SHADOW ${this.shadowType}"><slot></slot></span> `;
  }
}
