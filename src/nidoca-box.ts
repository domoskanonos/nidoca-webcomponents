import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-box")
export class NidocaBox extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: var(--space-6);
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined = NidocaTheme.BACKGROUND;

  render(): TemplateResult {
    return html`
      ${NidocaTheme.getStyle(this.theme)}
      <slot></slot>
    `;
  }
}
