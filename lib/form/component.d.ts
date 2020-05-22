import { LitElement } from 'lit-element';
import { NidocaButton } from '..';
export declare class NidocaFormOutputData {
    jsonObject: any;
    formData: FormData;
}
export declare class NidocaForm extends LitElement {
    static styles: import("lit-element").CSSResult;
    buttons: NidocaButton[];
    slotElement: HTMLSlotElement | undefined;
    htmlForm: HTMLFormElement | undefined;
    protected render(): import("lit-element").TemplateResult;
    slotChanged(event: Event): void;
    isValid(): boolean;
    validate(): boolean;
    getOutputData(): NidocaFormOutputData;
    private formButtonClicked;
}
