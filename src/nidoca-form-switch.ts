import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {NidocaTheme} from ".";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";
import {NidocaTypographyType} from "./nidoca-text";

@customElement("nidoca-form-switch")
export class NidocaFormSwitch extends NidocaFormAbstractInputElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .switch {
      position: relative;
      display: inline-block;
      height: 18px;
      width: 48px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      width: 40px;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--app-color-surface-background);
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 0px;
      bottom: -4px;

      -webkit-transition: 0.4s;
      transition: 0.4s;
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(16px);
      -ms-transform: translateX(16px);
      transform: translateX(16px);
    }

    .slider.round {
      border-radius: 12px;
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
  infoText: string = "";

  @property({type: String})
  errorText: string = "";

  @property({type: String})
  warningText: string = "";

  @property({type: Boolean})
  required: boolean = false;

  @property({type: Boolean})
  disabled: boolean = false;

  @property({type: Boolean})
  checked: boolean = false;

  @property({type: String})
  theme: NidocaTheme = NidocaTheme.PRIMARY;

  @query("#inputElement")
  private inputElement: HTMLInputElement | undefined;

  render(): TemplateResult {
    return html`
      <style>
        .slider:before {
          background-color: var(--app-color-${this.theme}-background-dark);
        }
        input:checked + .slider:before {
          background-color: var(--app-color-${this.theme}-background);
        }
        input:checked + .slider {
          background-color: var(--app-color-${this.theme}-background-light);
        }
        input:focus + .slider {
          box-shadow: 0 0 20px var(--app-color-${this.theme}-background);
        }
      </style>

      <nidoca-list-item>
        <nidoca-text .type="${NidocaTypographyType.SUBTITLE1}" text="${this.label}">
          <slot></slot>
        </nidoca-text>

        ${this.infoText.length > 0
          ? html` <nidoca-text
              .type="${NidocaTypographyType.SUBTITLE2}"
              text="${this.infoText}"
            ></nidoca-text>`
          : html``}

        <label class="switch" slot="meta">
          <input
            id="inputElement"
            name="${this.name}"
            type="checkbox"
            ?checked="${this.checked}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            @input="${(eventArg: any) => {
              this.checked = eventArg.target.checked;
              console.log(this.checked);
            }}"
          />
          <span class="slider round"></span>
        </label>
      </nidoca-list-item>

      ${this.warningText
        ? html` <nidoca-text
            style="color:var(--app-color-warning-background)"
            .type="${NidocaTypographyType.BODY1}"
            text="${this.warningText}"
          ></nidoca-text>`
        : html``}
      ${this.errorText
        ? html` <nidoca-text
            style="color:var(--app-color-error-background)"
            .type="${NidocaTypographyType.BODY1}"
            text="${this.errorText}"
          ></nidoca-text>`
        : html``}
    `;
  }

  getOutputData(): FormOutputData {
    return <FormOutputData>{
      key: this.name,
      value: this.checked,
    };
  }

  public validate(): boolean {
    this.errorText = "";
    if (
      this.inputElement != null &&
      !this.inputElement.validity.valid &&
      this.inputElement.validationMessage != this.errorText
    ) {
      this.errorText = this.inputElement.validationMessage;
    }
    return this.errorText == "";
  }
}
