import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {
  FlexAlignContent as NidocaFlexAlignContent,
  FlexAlignItems as NidocaFlexAlignItems,
  FlexDirection as NidocaFlexDirection,
  FlexJustifyContent as NidocaFlexJustifyContent,
  FlexWrap as NidocaFlexWrap,
} from ".";
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
      <nidoca-layout-flex-container
        .flexDirection="${NidocaFlexDirection.ROW}"
        .flexWrap="${NidocaFlexWrap.NO_WRAP}"
        .flexJustifyContent="${NidocaFlexJustifyContent.FLEX_START}"
        .flexAlignItems="${NidocaFlexAlignItems.FLEX_START}"
        .flexAlignContent="${NidocaFlexAlignContent.FLEX_START}"
      >
        <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.RIGHT]}">
          <nidoca-icon icon="search"></nidoca-icon>
        </nidoca-layout-spacer>
        <input
          id="inputElement"
          type="text"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${() => this.valueChanged()}"
        />
        <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.RIGHT]}">
          <nidoca-icon icon="close" @click="${() => this.clearValue()}"></nidoca-icon>
        </nidoca-layout-spacer>
      </nidoca-layout-flex-container>
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
