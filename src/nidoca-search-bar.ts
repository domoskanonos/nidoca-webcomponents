import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {NidocaTheme} from ".";
import {
  NidocaLayoutFlexAlignContent,
  NidocaLayoutFlexAlignItems,
  NidocaLayoutFlexDirection,
  NidocaLayoutFlexJustifyContent,
  NidocaLayoutFlexWrap,
} from "./nidoca-layout-flex";
import {NidocaLayoutSpacerType} from "./nidoca-layout-spacer";

@customElement("nidoca-search-bar")
export class NidocaSearchBar extends LitElement {
  static styles = css`
    :host {
      width: 100%;
    }

    input {
      height: var(--line-height-large);
      line-height: var(--line-height-large);
      font: inherit;
      color: inherit;
      background-color: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: NidocaTheme = NidocaTheme.PRIMARY;

  @property({type: String})
  value: string = "";

  @property({type: String})
  placeholder: string = "";

  @property({type: Boolean})
  disabled: boolean = false;

  @query("#inputElement")
  private inputElement: HTMLInputElement | undefined;

  render(): TemplateResult {
    return html`
      <style>
        .container {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-layout-flex
        class="container"
        .flexDirection="${NidocaLayoutFlexDirection.ROW}"
        .flexWrap="${NidocaLayoutFlexWrap.NO_WRAP}"
        .flexJustifyContent="${NidocaLayoutFlexJustifyContent.FLEX_START}"
        .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
        .flexAlignContent="${NidocaLayoutFlexAlignContent.FLEX_START}"
      >
        <nidoca-icon icon="search"></nidoca-icon>
        <input
          id="inputElement"
          type="text"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${() => this.valueChanged()}"
        />
        <nidoca-icon icon="close" @click="${() => this.clearValue()}"></nidoca-icon>
      </nidoca-layout-flex>
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
