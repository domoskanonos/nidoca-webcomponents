import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTextType} from "./nidoca-text";

@customElement("nidoca-list-section")
export class NidocaListSection extends LitElement {
  static styles = css``;

  @property({type: String})
  text: string = "";

  render(): TemplateResult {
    return html`
      <div
        style="display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-end;align-content:flex-start;"
      >
        <div style="flex-basis:100%;">
          <nidoca-text .type="${NidocaTextType.H6}" text="${this.text}"></nidoca-text>
        </div>
      </div>
    `;
  }
}
