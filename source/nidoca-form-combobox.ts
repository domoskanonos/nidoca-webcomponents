import {css, customElement, html, property, query, LitElement} from 'lit-element';
import {repeat} from 'lit-html/directives/repeat';
import {guard} from 'lit-html/directives/guard';
import {KeyValuePair, TypescriptType, BasicService, I18nService} from '@domoskanonos/frontend-basis';
import {BorderProperties} from './nidoca-border';
import {GridAlignItems, GridJustifyItems} from './nidoca-grid-container';
import {SpacerAlignment, SpacerSize} from './nidoca-spacer';
import {VisibleType} from './nidoca-visible';
import {FlexAlignContent, FlexContainerProperties, FlexJustifyContent} from './nidoca-flex-container';
import {TypographyType} from './nidoca-typography';
import {NidocaInputElement} from './nidoca-input-element';

@customElement('nidoca-form-combobox')
export class NidocaFormCombobox extends NidocaInputElement {
    static styles = css`
    select{
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      line-height: var(--line-height);
      height: auto;
    }

    select[multiple] {
      line-height: unset;
      height: auto;
    }

    select:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    select:valid {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: #000;
      -webkit-box-shadow: 0 0 0px 1000px var(--app-color-surface-background-light) inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  `;

    @property()
    name: string = '';

    @property()
    value: any;

    @property()
    oldValue: any;

    @property()
    placeholder: string = '';

    @property()
    required: boolean = false;

    @property()
    disabled: boolean = false;

    @property()
    checked: boolean = false;

    @property()
    multiple: boolean = false;

    @property()
    accept: string = '*/*';

    @property()
    maxSize: number = 2048;

    @property()
    maxlength: number | undefined;

    @property()
    minlength: number | undefined;

    @property()
    min: number | undefined;

    @property()
    max: number | undefined;

    @property()
    step: number | undefined;

    @property()
    size: number | undefined;

    @property()
    label: string = '';

    @property()
    assistiveText: string = '';

    @property()
    infoText: string = '';

    @property()
    errorText: string = '';

    @property()
    leadingIcon: string = '';

    @property()
    trailingIcon: string = '';

    @property()
    leadingIconClickable: boolean = false;

    @property()
    trailingIconClickable: boolean = false;

    @property()
    selected: boolean = false;

    @property()
    options: any[] = [];

    @property()
    valueKeyField: string = '';

    @property()
    optionKeyField: string = 'key';

    @property()
    optionValueField: string = 'value';

    @query('#inputElement')
    inputElemet: HTMLInputElement | undefined;

    @query('#selectElement')
    selectElemet: HTMLSelectElement | undefined;

    @query('#textareaElement')
    textareaElement: HTMLTextAreaElement | undefined;

    render() {
        return html`


        <nidoca-border
          .borderProperties='${[
            BorderProperties.FULL_WIDTH, BorderProperties.NONE,
        ]}'
        >

                  <nidoca-flex-container
                    .flexContainerProperties='${[
            FlexContainerProperties.CONTAINER_WIDTH_100,
            FlexContainerProperties.CONTAINER_HEIGHT_100,
        ]}'
                    .flexAlignContent='${FlexAlignContent.CENTER}'
                    flexItemBasisValue='100%'
                  >
                    
                      <nidoca-typography
                        .typographyType='${TypographyType.OVERLINE}'
                        text='${this.label}'
                      ></nidoca-typography>
                    
                   
                   
                   
                          <select
                            id='selectElement'
                            ?required='${this.required}'
                            ?multiple='${this.multiple}'
                            name='${this.name}'
                            size='${this.size}'
                            @change='${(event: Event) => this.change(event)}'
                            @focus='${(event: Event) => this.focused(event)}'
                            @focusout='${(event: Event) => this.focusout(event)}'
                          >
                            ${guard(
            [this.value, this.options],
            () => html`
                                ${repeat(this.options, (optionModel) =>
                this.isSelectedOption(optionModel)
                    ? html`
                                      <option value='${this.getOptionKey(optionModel)}' selected>
                                        ${this.getOptionValue(optionModel)}
                                      </option>
                                    `
                    : html`
                                      <option value='${this.getOptionKey(optionModel)}'>
                                        ${this.getOptionValue(optionModel)}
                                      </option>
                                    `,
            )}
                              `,
        )}
                          </select>
                      
                  </nidoca-flex-container
                  >
          </nidoca-grid-container>
        </nidoca-border>
       
        <nidoca-visible visibleType='${
            BasicService.getUniqueInstance().isNotBlank(this.errorText)
                ? VisibleType.NORMAL
                : VisibleType.INVISIBLE
        }'>
          <nidoca-typography
            style='color:var(--app-color-error)'
            .typographyType='${TypographyType.OVERLINE}'
            text='${this.errorText}'
          ></nidoca-typography>
        </nidoca-visible>
      `;
    }

    private getOptionValue(optionModel: any) {
        return BasicService.getUniqueInstance().isBlank(this.optionValueField)
            ? optionModel
            : optionModel[this.optionValueField];
    }

    private getOptionKey(optionModel: any) {
        return BasicService.getUniqueInstance().isBlank(this.optionKeyField)
            ? optionModel
            : optionModel[this.optionKeyField];
    }

    private getValueKey(valueModel: any) {
        return BasicService.getUniqueInstance().isBlank(this.valueKeyField) ? valueModel : valueModel[this.valueKeyField];
    }

    private switchChecked() {
        this.checked = !Boolean(this.checked);
        BasicService.getUniqueInstance().dispatchSimpleCustomEvent(
            this,
            'nidoca-event-inputfield-change',
            this.getOutputData(),
        );
    }

    async keyup() {
        BasicService.getUniqueInstance().dispatchSimpleCustomEvent(
            this,
            'nidoca-event-inputfield-keyup',
            this.getOutputData(),
        );
    }

    async focused(event: Event) {
        console.log('event: '.concat(JSON.stringify(event)));
        this.oldValue = this.value;
        this.selected = true;
        BasicService.getUniqueInstance().dispatchSimpleCustomEvent(
            this,
            'nidoca-event-inputfield-focus',
            this.getOutputData(),
        );
    }

    async focusout(event: Event) {
        console.log('focusout event: '.concat(JSON.stringify(event)));
        this.selected = false;
        this.validate();
        BasicService.getUniqueInstance().dispatchSimpleCustomEvent(
            this,
            'nidoca-event-inputfield-focus-out',
            this.getOutputData(),
        );
    }

    async change(event: Event) {
        console.log('change event: '.concat(JSON.stringify(event)));
        BasicService.getUniqueInstance().dispatchSimpleCustomEvent(
            this,
            'nidoca-event-inputfield-change',
            this.getOutputData(),
        );
    }

    public isValid(): boolean {

        return this.selectElemet != null ? this.selectElemet.validity.valid : false;

    }

    public validate(): void {
        this.errorText = '';
        if (this.inputElemet != null) {
            if (this.inputElemet.validity.valid) {
                this.value = this.inputElemet.value;
                this.oldValue = this.inputElemet.value;
            } else if (this.inputElemet.validationMessage != this.errorText) {
                this.errorText = this.inputElemet.validationMessage;
            }
        }
        if (
            this.selectElemet != null &&
            !this.selectElemet.validity.valid &&
            this.selectElemet.validationMessage != this.errorText
        ) {
            this.errorText = this.selectElemet.validationMessage;
        }

    }

    getOutputData(): KeyValuePair {
        let outputValue: any = this.oldValue;

        if (this.selectElemet != null && this.multiple) {
            outputValue = [];
            for (let i = 0, len = this.selectElemet.options.length; i < len; i++) {
                let opt: HTMLOptionElement = this.selectElemet.options[i];
                if (opt.selected) {
                    outputValue.push(this.options[i]);
                    //outputValue.push(opt.value);
                }
            }
        } else if (this.selectElemet != null) {
            if (this.selectElemet.value.length == 0) {
                outputValue = null;
            } else {
                outputValue = this.selectElemet.value;
            }
        }

        return <KeyValuePair>{
            key: this.name,
            value: outputValue,
        };
    }

    private prepareValue(value: any): any {
        if (value == null) {
            value = '';
        }

        if (this.inputElemet != undefined) {
            this.inputElemet.value = value;
        }

        if (this.textareaElement != undefined) {
            this.textareaElement.value = value;
        }

        return value;
    }

    static enumToComboboxItems(enumeration: any): KeyValuePair[] {
        let options: KeyValuePair[] = [];
        Object.keys(enumeration).forEach((key) => {
            options.push(<KeyValuePair>{key: key, value: enumeration[key]});
        });
        return options;
    }

    static enumToComboboxItemsI18n(enumeration: any, i18nPrefix: string): KeyValuePair[] {
        let options: KeyValuePair[] = [];
        Object.keys(enumeration).forEach((key) => {
            options.push(<KeyValuePair>{
                key: key,
                value: I18nService.getUniqueInstance().getValue(i18nPrefix.concat(enumeration[key])),
            });
        });
        return options;
    }

    static clazzToComboboxItems(clazz: any): KeyValuePair[] {
        let options: KeyValuePair[] = [];
        Object.keys(clazz).forEach((key) => {
            options.push(<KeyValuePair>{key: clazz[key], value: key});
        });
        return options;
    }

    static object2KeyValuePairArray(
        object: any,
        keyFieldName: string,
        valueFieldName: string,
        withEmptyItem: boolean = false,
    ): KeyValuePair[] {
        let options: KeyValuePair[] = [];
        if (withEmptyItem) {
            options.push(<KeyValuePair>{key: '', value: {}});
        }
        Object.keys(object).map(function (e) {
            let value: any = object[e];
            options.push(<KeyValuePair>{key: value[keyFieldName], value: value[valueFieldName]});
        });
        return options;
    }

    static stringArray2KeyValuePairArrayWithI18nValueMapping(
        arr: string[],
        i18nPrefix: string,
        withEmptyItem: boolean = false,
    ): KeyValuePair[] {
        let options: KeyValuePair[] = [];
        if (withEmptyItem) {
            options.push(<KeyValuePair>{key: '', value: {}});
        }
        Object.keys(arr).map(function (value) {
            options.push(<KeyValuePair>{
                key: value,
                value: I18nService.getUniqueInstance().getValue(i18nPrefix.concat(value)),
            });
        });
        return options;
    }

    private isSelectedOption(optionModel: any): boolean {
        if (this.multiple) {
            let isSelected: boolean = false;
            /**
             for (let item of Object.values<any>(this.value)) {
        isSelected = BasicService.getUniqueInstance().isEqual(this.getValueKey(item), this.getOptionKey(optionModel));
        if (isSelected) {
          return true;
        }
      }
             **/
        }

        return BasicService.getUniqueInstance().isEqual(this.getValueKey(this.value), this.getOptionKey(optionModel));
    }

    private maxFileSizeReached(): boolean {
        let files: FileList | null | undefined = this.inputElemet?.files;
        if (files != null) {
            for (let i = 0; i < files.length; i++) {
                let file: File | null = files.item(i);
                if (file != null && file.size / 1024 > this.maxSize) {
                    return true;
                }
            }
        }
        return false;
    }

    private unexpectedFileType(): boolean {
        if (this.accept == '*/*') {
            return false;
        }
        let files: FileList | null | undefined = this.inputElemet?.files;
        if (files != null) {
            for (let i = 0; i < files.length; i++) {
                let file: File | null = files.item(i);
                if (file != null) {
                    let filename = file.name;
                    let fileEnding = filename.substr(filename.lastIndexOf('.') + 1);
                    if (this.accept == 'image/*' && (fileEnding == 'jpg' || fileEnding == 'png' || fileEnding == 'gif')) {
                        continue;
                    }
                    if (this.accept.indexOf(fileEnding) == -1) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
