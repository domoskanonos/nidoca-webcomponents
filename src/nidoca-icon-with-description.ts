import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTextType} from ".";

@customElement("nidoca-icon-with-description")
export class NidocaIconWithDescription extends LitElement {
  static styles = css`
    :host {
      display: block;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  @property({type: String})
  primaryText: string = "";

  @property({type: String})
  text: string = "";

  @property({type: String})
  icon: string = "";

  render(): TemplateResult {
    return html`
      <nidoca-icon icon="${this.icon}" style="font-size: 8vw; padding:var(--space-4);"></nidoca-icon>
      <nidoca-text
        style="padding-left:var(--space-4);padding-right:var(--space-4);padding-bottom:var(--space-4);text-align:center;"
        .type="${NidocaTextType.BODY2}"
      >
        ${this.text}
        <slot></slot>
      </nidoca-text>
    `;
  }
}
