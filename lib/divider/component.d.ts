import { LitElement } from 'lit-element';
export declare enum DividerType {
    THIN = "THIN",
    MEDIUM = "MEDIUM",
    THICK = "THICK"
}
export declare class NidocaDivider extends LitElement {
    static styles: import("lit-element").CSSResult;
    dividerType: string;
    opacity: number;
    render(): import("lit-element").TemplateResult;
}
