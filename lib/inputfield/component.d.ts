import { LitElement } from 'lit-element';
import { KeyValueData } from '../meta';
export declare enum InputfieldType {
    TEXTAREA = "textarea",
    SWITCH = "SWITCH",
    CHECKBOX = "checkbox",
    COLOR = "color",
    DATE = "date",
    DATETIME_LOCAL = "datetime-local",
    EMAIL = "email",
    FILE = "file",
    HIDDEN = "hidden",
    MONTH = "month",
    NUMBER = "number",
    PASSWORD = "password",
    RANGE = "range",
    SEARCH = "search",
    TEL = "tel",
    TEXT = "text",
    TIME = "time",
    URL = "url",
    WEEK = "week",
    COMBOBOX = "combobox"
}
export declare enum InputfieldMode {
    CLEAN = "CLEAN",
    FILLED = "FILLED"
}
export declare class InputfieldDataChangeEvent {
    type?: string;
    outputData?: KeyValueData;
    element?: HTMLInputElement;
}
export declare class NidocaInputfield extends LitElement {
    static styles: import("lit-element").CSSResult;
    name: string;
    value: any;
    oldValue: any;
    inputfieldType: string;
    inputfieldMode: string;
    placeholder: string;
    required: boolean;
    disabled: boolean;
    checked: boolean;
    multiple: boolean;
    maxlength: number | undefined;
    minlength: number | undefined;
    min: number | undefined;
    max: number | undefined;
    step: number | undefined;
    size: number | undefined;
    label: string;
    assistiveText: string;
    infoText: string;
    errorText: string;
    leadingIcon: string;
    trailingIcon: string;
    leadingIconClickable: boolean;
    trailingIconClickable: boolean;
    selected: boolean;
    options: KeyValueData[];
    inputElemet: HTMLInputElement | undefined;
    selectElemet: HTMLSelectElement | undefined;
    textareaElement: HTMLTextAreaElement | undefined;
    render(): import("lit-element").TemplateResult;
    private switchChecked;
    keyup(): Promise<void>;
    focused(event: Event): Promise<void>;
    focusout(event: Event): Promise<void>;
    change(event: Event): Promise<void>;
    isValid(): boolean;
    validate(): void;
    getOutputData(): KeyValueData;
    private prepareValue;
    updateInfoText(): void;
    private showBorder;
    private showSelectedBorder;
    private showLabelText;
    private showAdditionalTextContainer;
    static enumToComboboxItems(enumeration: any): KeyValueData[];
    static clazzToComboboxItems(clazz: any): KeyValueData[];
    static object2KeyValueDataArray(object: any, keyFieldName: string, valueFieldName: string, withEmptyItem?: boolean): KeyValueData[];
}
