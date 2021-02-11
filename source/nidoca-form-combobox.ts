import {css, customElement, html, property, query} from 'lit-element';
import {repeat} from 'lit-html/directives/repeat';
import {guard} from 'lit-html/directives/guard';
import {KeyValuePair, TypescriptType, BasicService, KeyValuePairs} from '@domoskanonos/frontend-basis';
import {BorderProperties} from './nidoca-border';
import {VisibleType} from './nidoca-visible';
import {FlexAlignContent, FlexContainerProperties} from './nidoca-flex-container';
import {TypographyType} from './nidoca-typography';
import {NidocaFormInputElement} from './nidoca-form-input-element';

@customElement('nidoca-form-combobox')
export class NidocaFormCombobox extends NidocaFormInputElement {
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
  options: KeyValuePair[] = [];

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
  disabled: boolean = false;

  @property()
  multiple: boolean = false;

  @property()
  maxSize: number = 2048;

  @property()
  maxlength: number | undefined;

  @property()
  minlength: number | undefined;

  @property()
  selected: boolean = false;

  @query('#selectElement')
  selectElement: HTMLSelectElement | undefined;

  render() {
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
          @focus="${() => this.focused()}"
          @focusout="${() => this.focusout()}"
        >
          ${guard(
            [this.value, this.options],
            () => html`
              ${repeat(this.options, (option: KeyValuePair) =>
                this.isSelectedOption(option)
                  ? html` <option value="${option.key}" selected>${option.value}</option> `
                  : html` <option value="${option.key}">${option.value}</option> `
              )}
            `
          )}
        </select>
      </nidoca-inputframe>
    `;
  }

  getOutputData(): KeyValuePair {
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
    return <KeyValuePair>{
      key: this.name,
      value: outputValue,
    };
  }

  async focused() {
    this.selected = true;
    this.dispatchOutputDataChangeEvent();
  }

  async focusout() {
    this.selected = false;
    this.dispatchOutputDataChangeEvent();
  }

  async change() {
    this.dispatchOutputDataChangeEvent();
  }

  async dispatchOutputDataChangeEvent() {
    if (this.validate()) {
      let customEvent = new CustomEvent('nidoca-form-combobox-event-change', {
        detail: this.getOutputData(),
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

  private isSelectedOption(option: KeyValuePair): boolean {
    if (this.multiple) {
      let isSelected: boolean = false;
      for (let option of this.value) {
        isSelected = this.value = option.value;
        if (isSelected) {
          return true;
        }
      }
    }
    return this.value === option.value;
  }

  static enumToOptions(enumeration: any, emptyElement: boolean = true): any[] {
    let options: KeyValuePair[] = [];
    if (emptyElement) {
      options.push(<KeyValuePair>{key: '', value: ''});
    }
    Object.keys(enumeration).forEach((key) => {
      options.push(<KeyValuePair>{key: key, value: enumeration[key]});
    });
    return options;
  }
}
