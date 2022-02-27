import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaShadowType} from "./nidoca-box-shadow";

@customElement("nidoca-card")
export class NidocaCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: auto;
    }
    slot {
      display: block;
    }
  `;

  render(): TemplateResult {
    return html`
      <nidoca-box-shadow .shadowType="${NidocaShadowType.KEY_LIGHT}">
        <slot></slot>
      </nidoca-box-shadow>
    `;
  }
}
