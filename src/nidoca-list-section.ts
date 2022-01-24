import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTypographyType} from "./nidoca-typography";

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
        <nidoca-layout-spacer style="flex-basis:100%;">
          <nidoca-typography .typographyType="${NidocaTypographyType.H6}" text="${this.text}"></nidoca-typography>
        </nidoca-layout-spacer>
      </div>
    `;
  }
}
