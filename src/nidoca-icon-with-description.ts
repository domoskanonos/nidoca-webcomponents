import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTypographyAlignment, NidocaTypographyType} from ".";

@customElement("nidoca-icon-with-description")
export class NidocaIconWithDescription extends LitElement {
  static styles = css``;

  @property({type: String})
  primaryText: string = "";

  @property({type: String})
  text: string = "";

  @property({type: String})
  icon: string = "";

  render(): TemplateResult {
    return html`
      <nidoca-layout-spacer top="48px" bottom="48px">
        <div style="display:flex;flex-direction:column;align-items:center">
          <nidoca-icon
            icon="${this.icon}"
            style="font-size: 96px; padding:var(--space-normal);"
            backgroundColor="var(--app-color-surface-background)"
          ></nidoca-icon>
          <nidoca-typography .type="${NidocaTypographyType.H2}">${this.primaryText}</nidoca-typography>
          <nidoca-layout-spacer>
            <nidoca-typography
              .type="${NidocaTypographyType.BODY2}"
              .textAlign="${NidocaTypographyAlignment.CENTER}"
            >
              ${this.text}
              <slot></slot>
            </nidoca-typography>
          </nidoca-layout-spacer>
        </div>
      </nidoca-layout-spacer>
    `;
  }
}
