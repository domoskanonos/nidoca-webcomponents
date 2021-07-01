import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {query} from "lit/decorators/query";
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
            @keyup="${this.handleKeyup}"
            @change="${() => this.handleChange()}"
            @focus="${() => this.handleFocus()}"
            @focusout="${() => this.handleFocusout()}"
          />
          <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.RIGHT]}">
            <nidoca-icon icon="close" @click="${() => (this.value = "")}"></nidoca-icon>
          </nidoca-layout-spacer>
        </nidoca-layout-flex-container>
    `;
  }

  clearValue() {
    this.value = "";
  }

  async handleFocus(): Promise<void> {
    this.dispatchSearchValueChanged("nidoca-form-text-event-focus");
  }

  async handleFocusout(): Promise<void> {
    this.dispatchSearchValueChanged("nidoca-form-text-focusout");
  }

  async handleChange(): Promise<void> {
    this.dispatchSearchValueChanged("nidoca-form-text-event-change");
  }

  async handleKeyup(): Promise<void> {
    this.dispatchSearchValueChanged("nidoca-form-text-event-change");
  }

  async dispatchSearchValueChanged(eventName: string): Promise<void> {
    const customEvent = new CustomEvent(eventName, {
      detail: this.inputElement?.value,
      bubbles: true,
      composed: true,
    });
    console.debug("dispatch custom event type: %s, detail: %s", customEvent.type, JSON.stringify(customEvent.detail));
    this.dispatchEvent(customEvent);
  }
}
