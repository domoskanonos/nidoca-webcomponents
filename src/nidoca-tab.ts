import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme} from ".";
import {NidocaTextType} from "./nidoca-text";

@customElement("nidoca-tab")
export class NidocaTab extends LitElement {
  static styles = css`
    :host {
      border-color: var(--app-color-surface-background);
      border-width: 4px;
      border-bottom-style: solid;
      margin-left: 2px;
      margin-right: 2px;
    }

    .tab,
    ::slotted(.tab) {
      cursor: pointer;
      box-sizing: border-box;
    }
  `;

  @property({type: Boolean})
  selected: boolean = false;

  @property({type: String})
  text: string = "";

  @property({type: String})
  theme: NidocaTheme = NidocaTheme.PRIMARY;

  render(): TemplateResult {
    return html`
      <style>
        :host(.SELECTED) {
          border-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <span class="tab ${this.selected ? "SELECTED" : ""}" @click="${() => this.tabClicked()}">
        ${this.text
          ? html` <nidoca-text .type="${NidocaTextType.OVERLINE}" text="${this.text}"></nidoca-text> `
          : html``}
        <slot></slot>
      </span>
    `;
  }

  private tabClicked(): void {
    console.log("tab clicked.");
    this.dispatchEvent(new CustomEvent("nidoca-event-tab-clicked", {detail: this, bubbles: true, composed: true}));
  }
}
