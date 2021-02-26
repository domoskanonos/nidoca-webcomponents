import {css, customElement, html, property, query, TemplateResult} from 'lit-element';
import {repeat} from 'lit-html/directives/repeat';
import {guard} from 'lit-html/directives/guard';
import {FormOutputData, NidocaFormAbstractInputElement} from './nidoca-form-abstract-input-element';

@customElement('nidoca-form-combobox')
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
  name: string = '';

  @property()
  value: any;

  @property()
  label: string = '';

  @property()
  options: FormOutputData[] = [];

  @property()
  required: boolean = false;

  @property()
  errorText: string | undefined;

  @property()
  infoText: string | undefined;

  @property()
  warningText: string | undefined;

  @property()
  size: number = 1;

  @property()
  multiple: boolean = false;

  @query('#selectElement')
  selectElement: HTMLSelectElement | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-inputframe
        label="${this.label}"
        .errorText="${this.errorText}"
        .infoText="${this.infoText}"
        .warningText="${this.warningText}"
      >
        <select
          id="selectElement"
          name="${this.name}"
          size="${this.size}"
          ?required="${this.required}"
          ?multiple="${this.multiple}"
          @change="${() => this.change()}"
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
      </nidoca-inputframe>
    `;
  }

  getOutputData(): FormOutputData {
    let outputValue: any = this.value;
    if (this.selectElement != null && this.multiple) {
      outputValue = [];
      for (let i = 0, len = this.selectElement.options.length; i < len; i++) {
        let opt: HTMLOptionElement = this.selectElement.options[i];
        if (opt.selected) {
          outputValue.push(opt.value);
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

  async focused() {
    this.dispatchOutputDataChangeEvent();
  }

  async focusout() {
    this.dispatchOutputDataChangeEvent();
  }

  async change() {
    this.dispatchOutputDataChangeEvent();
  }

  async dispatchOutputDataChangeEvent() {
    if (this.validate()) {
      let customEvent = new CustomEvent('nidoca-form-combobox-event-change', {
        detail: this.getOutputData(),
        bubbles: true,
        composed: true,
      });
      console.debug('dispatch custom event type: %s, detail: %s', customEvent.type, JSON.stringify(customEvent.detail));
      this.dispatchEvent(customEvent);
    }
  }

  public validate(): boolean {
    this.errorText = undefined;
    if (
      this.selectElement != null &&
      !this.selectElement.validity.valid &&
      this.selectElement.validationMessage != this.errorText
    ) {
      this.errorText = this.selectElement.validationMessage;
    }
    return this.errorText == undefined;
  }

  private isSelectedOption(option: FormOutputData): boolean {
    if (this.multiple) {
      let isSelected: boolean = false;
      for (let option of this.value) {
        isSelected = this.value === option.value;
        if (isSelected) {
          return true;
        }
      }
    }
    return this.value === option.value;
  }

  static enumToOptions(enumeration: any, emptyElement: boolean = true): any[] {
    let options: FormOutputData[] = [];
    if (emptyElement) {
      options.push(<FormOutputData>{key: '', value: ''});
    }
    Object.keys(enumeration).forEach((key) => {
      options.push(<FormOutputData>{key: key, value: enumeration[key]});
    });
    return options;
  }
}
