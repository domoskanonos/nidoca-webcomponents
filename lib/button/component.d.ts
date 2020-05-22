import { LitElement } from 'lit-element';
export declare enum ButtonType {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY"
}
export declare class NidocaButton extends LitElement {
    static styles: import("lit-element").CSSResult;
    buttonType: ButtonType;
    leadingIcon: string;
    text: string;
    render(): import("lit-element").TemplateResult;
    clicked(): void;
}
