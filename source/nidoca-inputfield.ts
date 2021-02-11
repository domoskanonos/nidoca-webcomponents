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
import {NidocaFormInputElement} from './nidoca-form-input-element';

export enum InputfieldType {
    TEXTAREA = 'textarea',
    SWITCH = 'SWITCH',
    CHECKBOX = 'checkbox',
    COLOR = 'color',
    DATE = 'date',
    DATETIME_LOCAL = 'datetime-local',
    EMAIL = 'email',
    FILE = 'file',
    HIDDEN = 'hidden',
    MONTH = 'month',
    NUMBER = 'number',
    PASSWORD = 'password',
    RANGE = 'range',
    SEARCH = 'search',
    TEL = 'tel',
    TEXT = 'text',
    TIME = 'time',
    URL = 'url',
    WEEK = 'week',
    COMBOBOX = 'combobox',
}

export enum InputfieldMode {
    CLEAN = 'CLEAN',
    FILLED = 'FILLED',
}

@customElement('nidoca-inputfield')
export class NidocaInputfield extends NidocaFormInputElement {
    static styles = css`
    .ENABLED {
      background-color: var(--app-color-surface-background-light);
    }

    .DISABLED {
      background-color: var(--app-color-surface-background);
    }

    input,
    select,
    textarea {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      line-height: var(--line-height);
      height: auto;
    }

    textarea {
      min-height: 150px;
    }

    select[multiple] {
      line-height: unset;
      height: auto;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    input:valid,
    select:valid,
    textarea:valid {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    input[type='checkbox'] {
      width: auto;
    }

    input[type='color'] {
      padding-left: 0;
    }

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button,
    ::-webkit-clear-button {
    }

    input[type='range'] {
      -webkit-appearance: none;
      width: 100%;
      height: 5px;
      border-radius: 5px;
      background: var(--app-color-primary-background-light);
      outline: none;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
    }

    input[type='range']::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: var(--line-height);
      height: var(--line-height);
      border-radius: 50%;
      background: var(--app-color-primary-background);
      cursor: pointer;
    }

    input[type='range']::-moz-range-thumb {
      width: var(--line-height);
      height: var(--line-height);
      border-radius: 50%;
      background: var(--app-color-primary-background);
      cursor: pointer;
    }

    input[type='datetime-local']::-webkit-calendar-picker-indicator,
    input[type='date']::-webkit-calendar-picker-indicator,
    input[type='month']::-webkit-calendar-picker-indicator,
    input[type='week']::-webkit-calendar-picker-indicator,
    input[type='datetime-local']::-moz-calendar-picker-indicator,
    input[type='date']::-moz-calendar-picker-indicator,
    input[type='month']::-moz-calendar-picker-indicator,
    input[type='week']::-moz-calendar-picker-indicator {
      color: rgba(0, 0, 0, 0);
      opacity: 1;
      display: block;
      width: 20px;
      height: 20px;
      border-width: thin;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus input:-webkit-autofill,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
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
    inputfieldType: string = InputfieldType.TEXT;

    @property()
    inputfieldMode: string = InputfieldMode.FILLED;

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
        return this.inputfieldType != InputfieldType.HIDDEN
            ? html`
                    <nidoca-border
                            .borderProperties='${[
                                BorderProperties.FULL_WIDTH,
                                this.showSelectedBorder()
                                        ? BorderProperties.BOTTOM_SELECTED
                                        : this.showBorder()
                                        ? BorderProperties.BOTTOM
                                        : BorderProperties.NONE,
                            ]}'
                    >

                        <nidoca-grid-container
                                class='${this.disabled ? 'DISABLED' : 'ENABLED'}'
                                minHeight='68px'
                                .gridJustifyItems='${GridJustifyItems.STRETCH}'
                                .gridAlignItems='${GridAlignItems.CENTER}'
                                .gridTemplateRows='${['1fr']}'
                                .gridTemplateColumns='${['1fr']}'
                        >
                            <nidoca-spacer size='4px;' spacerAlignment='${SpacerAlignment.VERTICAL}'>
                                <nidoca-grid-container
                                        .gridJustifyItems='${GridJustifyItems.STRETCH}'
                                        .gridAlignItems='${GridAlignItems.CENTER}'
                                        .gridTemplateRows='${['auto']}'
                                        .gridTemplateColumns='${['auto', '1fr', 'auto', 'auto']}'
                                >
                                    <nidoca-visible
                                            visibleType='${
                                                    BasicService.getUniqueInstance().isNotBlank(this.leadingIcon)
                                                            ? VisibleType.NORMAL
                                                            : VisibleType.HIDE
                                            }'
                                    >
                                        <nidoca-icon icon='${this.leadingIcon}'
                                                     .clickable='${this.leadingIconClickable}'></nidoca-icon>
                                    </nidoca-visible>
                                    <nidoca-spacer spacerSize='${
                                            this.inputfieldType == InputfieldType.SWITCH || this.inputfieldType == InputfieldType.FILE
                                                    ? SpacerSize.ZERO
                                                    : SpacerSize.MEDIUM
                                    }' spacerAlignment='${SpacerAlignment.HORIZONTAL}'>
                                        <nidoca-flex-container
                                                .flexContainerProperties='${[
                                                    FlexContainerProperties.CONTAINER_WIDTH_100,
                                                    FlexContainerProperties.CONTAINER_HEIGHT_100,
                                                ]}'
                                                .flexAlignContent='${FlexAlignContent.CENTER}'
                                                flexItemBasisValue='100%'
                                        >
                                            <nidoca-visible
                                                    visibleType='${this.showLabelText() ? VisibleType.NORMAL : VisibleType.HIDE}'>
                                                <nidoca-typography
                                                        .typographyType='${TypographyType.OVERLINE}'
                                                        text='${this.label}'
                                                ></nidoca-typography>
                                            </nidoca-visible>
                                            ${
                                                    this.inputfieldType == InputfieldType.FILE
                                                            ? html`
                                                                <nidoca-grid-container
                                                                        .gridTemplateRows='${['auto']}'
                                                                        .gridTemplateColumns='${['1fr', 'auto']}'
                                                                >
                                                                    <nidoca-flex-container
                                                                            .flexContainerProperties='${[FlexContainerProperties.CONTAINER_WIDTH_100]}'
                                                                            flexItemBasisValue='100%'
                                                                    >
                                                                        <nidoca-typography
                                                                                .typographyType='${TypographyType.SUBTITLE1}'
                                                                                text='${this.assistiveText}'
                                                                        ></nidoca-typography>
                                                                        <nidoca-typography
                                                                                .typographyType='${TypographyType.SUBTITLE2}'
                                                                                text='${this.infoText}'
                                                                        ></nidoca-typography
                                                                        >
                                                                    </nidoca-flex-container>
                                                                    <nidoca-container>
                                                                        <nidoca-icon
                                                                                icon='attachment'
                                                                                .clickable='${true}'
                                                                                @nidoca-event-icon-clicked='
                                          ${() => this.inputElemet?.click()}
                                          '
                                                                        ></nidoca-icon>
                                                                    </nidoca-container>
                                                                </nidoca-grid-container>
                                                                <nidoca-visible visibleType='${VisibleType.HIDE}'>
                                                                    <input
                                                                            id='inputElement'
                                                                            class='slider'
                                                                            accept='${this.accept}'
                                                                            max-size='${this.maxSize}'
                                                                            name='${this.name}'
                                                                            type='${this.inputfieldType}'
                                                                            value='${this.prepareValue(this.value)}'
                                                                            ?multiple='${this.multiple}'
                                                                            @change='${(event: Event) => this.change(event)}'
                                                                    /></nidoca-visible>
                                                            `
                                                            : this.inputfieldType == InputfieldType.COMBOBOX
                                                            ? html`
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
                                                                                                    <option value='${this.getOptionKey(optionModel)}'
                                                                                                            selected>
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
                                                            `
                                                            : this.inputfieldType == InputfieldType.TEXTAREA
                                                                    ? html`
                                                                        <textarea
                                                                                id='textareaElement'
                                                                                name='${this.name}'
                                                                                @keyup='${this.keyup}'
                                                                                ?required='${this.required}'
                                                                                minlength='${this.minlength}'
                                                                                maxlength='${this.maxlength}'
                                                                                rows='${this.size}'
                                                                        >
${this.prepareValue(this.value)}</textarea
                                                                        >
                                                                    `
                                                                    : this.inputfieldType == InputfieldType.SWITCH
                                                                            ? html`
                                                                                <nidoca-grid-container
                                                                                        .gridTemplateRows='${['auto']}'
                                                                                        .gridTemplateColumns='${['1fr', 'auto']}'
                                                                                >
                                                                                    <nidoca-flex-container
                                                                                            .flexContainerProperties='${[FlexContainerProperties.CONTAINER_WIDTH_100]}'
                                                                                            flexItemBasisValue='100%'
                                                                                    >
                                                                                        <nidoca-typography
                                                                                                .typographyType='${TypographyType.SUBTITLE1}'
                                                                                                text='${this.infoText}'
                                                                                        >
                                                                                            <slot></slot
                                                                                            >
                                                                                        </nidoca-typography>
                                                                                        <nidoca-visible
                                                                                                visibleType='${BasicService.getUniqueInstance().isNotBlank(this.assistiveText)
                                                                                                        ? VisibleType.NORMAL
                                                                                                        : VisibleType.HIDE}'
                                                                                        >
                                                                                            <nidoca-typography
                                                                                                    .typographyType='${TypographyType.SUBTITLE2}'
                                                                                                    text='${this.assistiveText}'
                                                                                            ></nidoca-typography>
                                                                                        </nidoca-visible>
                                                                                    </nidoca-flex-container>
                                                                                    <componetn-container>
                                                                                        <nidoca-visible
                                                                                                visibleType='${this.checked ? VisibleType.HIDE : VisibleType.NORMAL}'
                                                                                        >
                                                                                            <nidoca-icon
                                                                                                    @nidoca-event-icon-clicked='${() => {
                                                                                                        this.switchChecked();
                                                                                                    }}'
                                                                                                    icon='toggle_off'
                                                                                                    .clickable='${true}'
                                                                                            ></nidoca-icon>
                                                                                        </nidoca-visible>
                                                                                        <nidoca-visible
                                                                                                visibleType='${this.checked ? VisibleType.NORMAL : VisibleType.HIDE}'
                                                                                        >
                                                                                            <nidoca-icon
                                                                                                    color='var(--app-color-primary-background)'
                                                                                                    @nidoca-event-icon-clicked='${() => {
                                                                                                        this.switchChecked();
                                                                                                    }}'
                                                                                                    icon='toggle_on'
                                                                                                    .clickable='${true}'
                                                                                            ></nidoca-icon>
                                                                                        </nidoca-visible>
                                                                                    </componetn-container>
                                                                                </nidoca-grid-container>
                                                                            `
                                                                            : html`
                                                                                <input
                                                                                        id='inputElement'
                                                                                        name='${this.name}'
                                                                                        type='${this.inputfieldType}'
                                                                                        value='${this.prepareValue(this.value)}'
                                                                                        placeholder='${BasicService.getUniqueInstance().isBlank(this.placeholder) &&
                                                                                        !this.showLabelText()
                                                                                                ? this.label
                                                                                                : this.placeholder}'
                                                                                        size='${this.size}'
                                                                                        minlength='${this.minlength}'
                                                                                        maxlength='${this.maxlength}'
                                                                                        min='${this.min}'
                                                                                        max='${this.max}'
                                                                                        step='${this.step}'
                                                                                        ?required='${this.required}'
                                                                                        ?disabled='${this.disabled}'
                                                                                        ?checked='${this.checked}'
                                                                                        ?multiple='${this.multiple}'
                                                                                        @keyup='${this.keyup}'
                                                                                        @change='${(event: Event) => this.change(event)}'
                                                                                        @focus='${(event: Event) => this.focused(event)}'
                                                                                        @focusout='${(event: Event) => this.focusout(event)}'
                                                                                />
                                                                            `
                                            }
                                        </nidoca-flex-container
                                        >
                                    </nidoca-spacer>
                                    <nidoca-visible
                                            visibleType='${
                                                    BasicService.getUniqueInstance().isNotBlank(this.trailingIcon)
                                                            ? VisibleType.NORMAL
                                                            : VisibleType.HIDE
                                            }'
                                    >
                                        <nidoca-icon icon='${this.trailingIcon}' .clickable='${
                                                this.trailingIconClickable
                                        }'></nidoca-icon>
                                    </nidoca-visible>
                                </nidoca-grid-container>
                            </nidoca-spacer>
                        </nidoca-grid-container>
                    </nidoca-border>
                    <nidoca-visible visibleType='${
                            this.showAdditionalTextContainer() ? VisibleType.NORMAL : VisibleType.HIDE
                    }'>
                        <nidoca-spacer spacerSize='${SpacerSize.LITTLE}' spacerAlignment='${SpacerAlignment.VERTICAL}'>
                            <nidoca-flex-container
                                    .flexContainerProperties='${[FlexContainerProperties.CONTAINER_WIDTH_100]}'
                                    flexItemBasisValue='auto'
                                    flexJustifyContent='${FlexJustifyContent.SPACE_BETWEEN}'
                            >
                                <nidoca-typography
                                        .typographyType='${TypographyType.OVERLINE}'
                                        text='${this.assistiveText}'
                                ></nidoca-typography>
                                <nidoca-typography
                                        .typographyType='${TypographyType.OVERLINE}'
                                        text='${this.infoText}'
                                ></nidoca-typography>
                            </nidoca-flex-container>
                    </nidoca-visible>
                    </nidoca-spacer>
                    <nidoca-visible visibleType='${
                            BasicService.getUniqueInstance().isNotBlank(this.errorText)
                                    ? VisibleType.NORMAL
                                    : this.inputfieldMode == InputfieldMode.CLEAN
                                    ? VisibleType.HIDE
                                    : VisibleType.INVISIBLE
                    }'>
                        <nidoca-typography
                                style='color:var(--app-color-error)'
                                .typographyType='${TypographyType.OVERLINE}'
                                text='${this.errorText}'
                        ></nidoca-typography>
                    </nidoca-visible>
            `
            : html`
                    <input
                            id='inputElement'
                            name='${this.name}'
                            type='${this.inputfieldType}'
                            value='${this.prepareValue(this.value)}'
                    />
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
        switch (this.inputfieldType) {
            case InputfieldType.COMBOBOX:
                return this.selectElemet != null ? this.selectElemet.validity.valid : false;
            case InputfieldType.TEXTAREA:
                return this.textareaElement != null ? this.textareaElement.validity.valid : false;
            case InputfieldType.SWITCH:
                return this.required ? this.required && this.checked : true;
            case InputfieldType.FILE:
                return !this.maxFileSizeReached() && !this.unexpectedFileType();
            default:
                return this.inputElemet != null ? this.inputElemet.validity.valid : false;
        }
    }
    
    
    public validate(): boolean {
        this.errorText = '';
        if (this.inputElemet != null) {
            if (this.inputElemet.validity.valid) {
                this.value = this.inputElemet.value;
                this.oldValue = this.inputElemet.value;
            }
            if (this.inputfieldType === InputfieldType.FILE) {
                let errorTextFile = '';
                if (this.maxFileSizeReached()) {
                    errorTextFile = I18nService.getUniqueInstance().getValue('nidoca-inputfield-file-error-max-size-reached');
                }
                if (this.unexpectedFileType()) {
                    if (errorTextFile.length > 0) {
                        errorTextFile = errorTextFile.concat('\n');
                    }
                    errorTextFile = I18nService.getUniqueInstance().getValue('nidoca-inputfield-file-error-allowed-file-type');
                }
                this.errorText = errorTextFile;
            } else if (this.inputElemet.validationMessage != this.errorText) {
                this.errorText = this.inputElemet.validationMessage;
            }
        }

        switch (this.inputfieldType) {
            case InputfieldType.SWITCH:
                if (!this.checked && this.required) {
                    this.errorText = I18nService.getUniqueInstance().getValue('nidoca-inputfield-switch-error-should-true');
                }
                break;
            case InputfieldType.TEXTAREA:
                if (this.textareaElement != undefined && this.textareaElement.validationMessage != this.errorText) {
                    this.errorText = this.textareaElement.validationMessage;
                }
                break;
            case InputfieldType.COMBOBOX:
                if (
                    this.selectElemet != null &&
                    !this.selectElemet.validity.valid &&
                    this.selectElemet.validationMessage != this.errorText
                ) {
                    this.errorText = this.selectElemet.validationMessage;
                }
                break;
        }
        return this.errorText == null || this.errorText == undefined || this.errorText.length == 0;
    }

    getOutputData(): KeyValuePair {
        let outputValue: any = this.oldValue;

        switch (this.inputfieldType) {
            case InputfieldType.COMBOBOX:
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
                break;
            case InputfieldType.SWITCH:
                outputValue = this.checked;
                break;
            case InputfieldType.DATETIME_LOCAL:
            case InputfieldType.DATE:
                outputValue = this.inputElemet?.valueAsDate;
                break;
            case InputfieldType.TEXTAREA:
                outputValue = this.textareaElement?.value;
                break;
            case InputfieldType.FILE:
                outputValue = this.inputElemet?.files;
                break;
            case InputfieldType.HIDDEN:
                outputValue = this.inputElemet?.value;
                if (outputValue.length == 0) {
                    outputValue = null;
                }
                break;
            default:
                outputValue = this.inputElemet?.value;
                break;
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

        switch (this.inputfieldType) {
            case InputfieldType.DATE:
                if (typeof value == 'string') {
                    return value;
                }
                value = value.toISOString().substr(0, 10);
                break;
            default:
                value = BasicService.getUniqueInstance().beautifyText(value);
                break;
        }

        if (this.inputElemet != undefined) {
            this.inputElemet.value = value;
        }

        if (this.textareaElement != undefined) {
            this.textareaElement.value = value;
        }

        return value;
    }

    public updateInfoText(): void {
        if (!this.showBorder()) {
            this.infoText = '';
            return;
        }
        switch (this.inputfieldType) {
            case InputfieldType.SWITCH:
            case InputfieldType.COLOR:
            case InputfieldType.DATE:
            case InputfieldType.DATETIME_LOCAL:
            case InputfieldType.EMAIL:
            case InputfieldType.FILE:
            case InputfieldType.HIDDEN:
            case InputfieldType.MONTH:
            case InputfieldType.RANGE:
            case InputfieldType.SEARCH:
            case InputfieldType.TEL:
            case InputfieldType.TIME:
            case InputfieldType.URL:
            case InputfieldType.WEEK:
                break;
            case InputfieldType.NUMBER:
                this.infoText = BasicService.getUniqueInstance()
                    .getValue(this.min, '')
                    .toString()
                    .concat('-')
                    .concat(BasicService.getUniqueInstance().getValue(this.max, '').toString());
                break;
            case InputfieldType.TEXT:
            case InputfieldType.PASSWORD:
                this.infoText = this.value.length
                    .toString()
                    .concat('/')
                    .concat(BasicService.getUniqueInstance().getValue(this.maxlength, '0').toString());
                break;
        }
    }

    private showBorder(): boolean {
        return this.inputfieldMode != InputfieldMode.CLEAN && BasicService.getUniqueInstance().isNotBlank(this.label);
    }

    private showSelectedBorder(): boolean {
        return (
            this.inputfieldMode != InputfieldMode.CLEAN &&
            this.showBorder() &&
            this.selected &&
            this.inputfieldType !== InputfieldType.RANGE &&
            this.inputfieldType !== InputfieldType.COLOR
        );
    }

    private showLabelText(): boolean {
        return (
            ((this.selected ||
                this.inputfieldType === InputfieldType.COLOR ||
                this.inputfieldType === InputfieldType.COMBOBOX ||
                this.inputfieldType === InputfieldType.TEXTAREA ||
                this.inputfieldType === InputfieldType.RANGE ||
                this.inputfieldType === InputfieldType.FILE ||
                this.inputfieldType === InputfieldType.SWITCH ||
                this.inputfieldType === InputfieldType.CHECKBOX ||
                this.inputfieldType === InputfieldType.NUMBER ||
                this.inputfieldType === InputfieldType.MONTH ||
                this.inputfieldType === InputfieldType.TIME ||
                this.inputfieldType === InputfieldType.WEEK ||
                this.inputfieldType === InputfieldType.DATE ||
                this.inputfieldType === InputfieldType.DATETIME_LOCAL) &&
                BasicService.getUniqueInstance().isNotBlank(this.label)) ||
            (BasicService.getUniqueInstance().isNotBlank(this.value) &&
                BasicService.getUniqueInstance().isNotBlank(this.label))
        );
    }

    private showAdditionalTextContainer() {
        return (
            this.inputfieldType != InputfieldType.SWITCH &&
            this.inputfieldType != InputfieldType.FILE &&
            (this.assistiveText.length > 0 || this.infoText.length > 0)
        );
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

    static inputfieldTypeByTypescriptType(tyescriptType: TypescriptType): InputfieldType {
        switch (tyescriptType) {
            case TypescriptType.NUMBER:
                return InputfieldType.NUMBER;
            case TypescriptType.BOOLEAN:
                return InputfieldType.SWITCH;
            case TypescriptType.DATE:
                return InputfieldType.DATE;
            case TypescriptType.STRING:
            default:
                return InputfieldType.TEXT;
        }
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
