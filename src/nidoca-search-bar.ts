import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-search-bar")
export class NidocaSearchBar extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      min-height: calc(var(--line-height) * 2);
    }

    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      padding: 0;
    }

    input:focus {
      outline: none;
      box-shadow: none;
    }
  `;

  @property({type: String})
  value: string = "";

  @property({type: String})
  placeholder: string = "";

  @property({type: Boolean})
  disabled: boolean = false;

  @query("#inputElement")
  private inputElement: HTMLInputElement | undefined;

  @property({type: NidocaTheme, converter: String})
  theme: string;

  constructor() {
    super();
    this.theme = NidocaTheme.prototype.getParentTheme(this) || NidocaTheme.PRIMARY;
  }

  render(): TemplateResult {
    return html`
      <style>
        *,
        ::slotted(*) {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-icon style="padding-right:var(--space);padding-left:var(--space);" icon="search"></nidoca-icon>
      <input
        id="inputElement"
        type="text"
        value="${this.value}"
        placeholder="${this.placeholder}"
        ?disabled="${this.disabled}"
        @input="${() => this.valueChanged()}"
      />
      <nidoca-icon
        style="padding-right:var(--space);padding-left:var(--space);"
        icon="close"
        @click="${() => this.clearValue()}"
      ></nidoca-icon>
    `;
  }

  clearValue(): void {
    this.value = "";
  }

  async valueChanged(): Promise<void> {
    const eventName = "nidoca-search-bar-event-value-changed";
    const customEvent = new CustomEvent(eventName, {
      detail: this.inputElement?.value,
      bubbles: true,
      composed: true,
    });
    console.debug("dispatch custom event type: %s, detail: %s", customEvent.type, JSON.stringify(customEvent.detail));
    this.dispatchEvent(customEvent);
  }
}
