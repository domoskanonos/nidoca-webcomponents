import { LitElement } from 'lit-element';
export declare class NidocaSearchBar extends LitElement {
    static styles: import("lit-element").CSSResult;
    placeholder: string;
    trailingIcon: string;
    value: string;
    private inputfieldComponent;
    render(): import("lit-element").TemplateResult;
    getOutputData(): string;
    private textfieldIconClicked;
    private textfieldKeyUp;
    private setTrailingIcon;
}
