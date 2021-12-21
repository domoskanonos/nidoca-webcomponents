import {css, html, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {repeat} from "lit/directives/repeat.js";
import {guard} from "lit/directives/guard.js";
import {FormOutputData, NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";
import {InputframeMode} from ".";

@customElement("nidoca-form-combobox")
export class NidocaFormCombobox extends NidocaFormAbstractInputElement {
  static styles = css`
    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--line-height-large);
      line-height: var(--line-height-large);
    }

    select option {
      color: inherit;
      background: inherit;
    }

    select[multiple] {
      line-height: unset;
      height: auto;
    }

    select:focus {
      outline: none;
      box-shadow: none;
    }

    select:valid {
      outline: none;
      box-shadow: none;
    }
  `;

  @property()
  value: any = "";

  @property({type: FormOutputData})
  options: FormOutputData[] = [];

  @property({type: String})
  name: string = "";

  @property({type: String})
  label: string = "";

  @property({type: String})
  errorText: string = "";

  @property({type: String})
  infoText: string = "";

  @property({type: String})
  warningText: string = "";

  @property({type: Boolean})
  required: boolean = true;

  @property({type: Boolean})
  multiple: boolean = false;

  @property({type: Number})
  size: number = 1;

  @property({type: String})
  inputframeMode: InputframeMode = InputframeMode.NORMAL;

  @query("#selectElement")
  private selectElement: HTMLSelectElement | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-form-inputframe
        label="${this.label}"
        errorText="${this.errorText}"
        infoText="${this.infoText}"
        warningText="${this.warningText}"
        .inputframeMode="${this.inputframeMode}"
      >
        <select
          id="selectElement"
          name="${this.name}"
          size="${this.size}"
          ?required="${this.required}"
          ?multiple="${this.multiple}"
        >
          ${guard(
            [this.value, this.options],
            () => html`
              ${repeat(this.options, (option: FormOutputData) =>
                option == undefined
                  ? html` <option></option>`
                  : this.isSelectedOption(option)
                  ? html` <option value="${option.key}" selected>${option.value}</option> `
                  : html` <option value="${option.key}">${option.value}</option> `
              )}
            `
          )}
        </select>
      </nidoca-form-inputframe>
    `;
  }

  getOutputData(): FormOutputData {
    let outputValue: any = this.value;
    if (this.selectElement != null && this.multiple) {
      outputValue = [];
      for (let i = 0, len = this.selectElement.options.length; i < len; i++) {
        const opt: HTMLOptionElement = this.selectElement.options[i];
        if (opt.selected) {
          outputValue.push(this.options[i].key);
        }
      }
    } else if (this.selectElement != null) {
      if (this.selectElement.value.length == 0) {
        outputValue = null;
      } else {
        outputValue = this.selectElement.value;
      }
    }
    return <FormOutputData>{
      key: this.name,
      value: outputValue,
    };
  }

  public validate(): boolean {
    this.errorText = "";
    if (
      this.selectElement != null &&
      !this.selectElement.validity.valid &&
      this.selectElement.validationMessage != this.errorText
    ) {
      this.errorText = this.selectElement.validationMessage;
    }
    return this.errorText.length == 0;
  }

  private isSelectedOption(option: FormOutputData) {
    if (this.multiple) {
      let isSelected = false;
      for (const val of this.value) {
        isSelected = option.key === val;
        if (isSelected) {
          return true;
        }
      }
    }
    return this.value === option.key;
  }

  static enumToOptions(enumeration: any, emptyElement: boolean = true): FormOutputData[] {
    const options: FormOutputData[] = [];
    if (emptyElement) {
      options.push(<FormOutputData>{key: "", value: ""});
    }
    Object.keys(enumeration).forEach((key) => {
      options.push(<FormOutputData>{key: key, value: enumeration[key]});
    });
    return options;
  }

  static stringArrayToOptions(stringArray: string[], emptyElement: boolean = true): FormOutputData[] {
    const options: FormOutputData[] = [];
    if (emptyElement) {
      options.push(<FormOutputData>{key: "", value: ""});
    }
    stringArray.forEach((key: string) => {
      options.push(<FormOutputData>{key: key, value: key});
    });
    return options;
  }

  static toComboboxOptions(type: any = null, typeName: string | null = null): FormOutputData[] {
    if (type == null) {
      return [];
    }

    const retval: FormOutputData[] = [];

    Object.values(type).forEach((item: any) => {
      let value: string = String(Object.keys(type)[Object.values(type).indexOf(item)]);
      if (typeName) {
        value = value.concat(typeName);
      }
      retval.push(<FormOutputData>{
        key: item,
        value: value,
      });
    });

    return retval;
  }
}
