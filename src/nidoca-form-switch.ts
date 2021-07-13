import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";
import {NidocaTypographyType} from "./nidoca-typography";
import {VisibleType} from "./nidoca-visible";

@customElement("nidoca-form-switch")
export class NidocaFormSwitch extends NidocaFormAbstractInputElement {
  static styles = css`
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `;

  @property({type: String})
  name: string = "";

  @property({type: String})
  label: string = "";

  @property({type: String})
  assistiveText: string = "";

  @property({type: String})
  errorText: string = "";

  @property({type: Boolean})
  checked: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-typography .typographyType="${NidocaTypographyType.SUBTITLE1}" text="${this.label}">
        <slot></slot>
      </nidoca-typography>
      <nidoca-visible visibleType="${this.assistiveText.length > 0 ? VisibleType.NORMAL : VisibleType.HIDE}">
        <nidoca-typography
          .typographyType="${NidocaTypographyType.SUBTITLE2}"
          text="${this.assistiveText}"
        ></nidoca-typography>
      </nidoca-visible>
      <label class="switch">
        <input id="inputElement" name="${this.name}" type="checkbox" ?checked="${this.checked}" />
        <span class="slider round"></span>
      </label>
    `;
  }

  getOutputData(): FormOutputData {
    return <FormOutputData>{
      key: this.name,
      value: this.checked,
    };
  }

  validate(): boolean {
    return true;
  }

  private switchSelected() {
    this.checked = !this.checked;
    if (this.validate()) {
      const customEvent = new CustomEvent("nidoca-form-switch-event-change", {
        detail: this.getOutputData(),
        bubbles: true,
        composed: true,
      });
      console.debug("dispatch custom event type: %s, detail: %s", customEvent.type, JSON.stringify(customEvent.detail));
      this.dispatchEvent(customEvent);
    }
  }
}
