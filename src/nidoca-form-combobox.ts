import {css, html, TemplateResult} from 'lit';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {query} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import {guard} from 'lit/directives/guard.js';
import {FormOutputData, NidocaFormAbstractInputElement} from './nidoca-form-abstract-input-element';
import {NidocaTheme} from './nidoca-meta';

@customElement('nidoca-form-combobox')
export class NidocaFormCombobox extends NidocaFormAbstractInputElement {
  static styles = css`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    option {
      padding: 0;
    }

    select {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      height: var(--height-min);
      line-height: var(--height-min);
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

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.surface;

  @property({type: String})
  trailingIcon: string = '';

  @property({type: String})
  label: string = '';

  @property({type: String})
  errorText: string = '';

  @property({type: String})
  infoText: string = '';

  @property({type: String})
  warningText: string = '';

  @property()
  value: string | string[] = '';

  @property({type: Array})
  options: FormOutputData[] = [];

  @property({type: String})
  name: string = '';

  @property({type: Boolean})
  required: boolean = true;

  @property({type: Boolean})
  multiple: boolean = false;

  @property({type: Number})
  size: number = 1;

  @query('#selectElement')
  private selectElement: HTMLSelectElement | undefined;

  render(): TemplateResult {
    return html` <style>
        .parentContainer,
        ::slotted(.parentContainer) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .parentContainer:focus-within,
        ::slotted(.parentContainer:focus-within) {
          border-color: var(--app-color-${this.theme}-selected);
          filter: brightness(var(--app-darken-1));
        }

        option {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <div class="parentContainer">
        ${this.trailingIcon
          ? html` <nidoca-icon
              style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
              icon="${this.trailingIcon}"
            ></nidoca-icon>`
          : html``}
        <div class="container">
          <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
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
        </div>
      </div>
      ${this.infoText || this.warningText || this.errorText
        ? html`
            <div style="display:flex;flex-direction:column;">
              ${this.infoText ? html` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>` : html``}
              ${this.warningText
                ? html` <nidoca-text-warning
                    style="color:var(--app-color-warning-background)"
                    text="${this.warningText}"
                  ></nidoca-text-warning>`
                : html``}
              ${this.errorText
                ? html` <nidoca-text-error
                    style="color:var(--app-color-error-background)"
                    text="${this.errorText}"
                  ></nidoca-text-error>`
                : html``}
            </div>
          `
        : html``}`;
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
    this.errorText = '';
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
      options.push(<FormOutputData>{key: '', value: ''});
    }
    Object.keys(enumeration).forEach((key) => {
      options.push(<FormOutputData>{key: key, value: enumeration[key]});
    });
    return options;
  }

  static stringArrayToOptions(stringArray: string[], emptyElement: boolean = true): FormOutputData[] {
    const options: FormOutputData[] = [];
    if (emptyElement) {
      options.push(<FormOutputData>{key: '', value: ''});
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
