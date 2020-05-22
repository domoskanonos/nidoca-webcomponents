import { LitElement } from 'lit-element';
export declare enum TargetType {
    BLANK = "_blank",
    SELF = "_self",
    PARENT = "_parent",
    TOP = "_top"
}
export declare class NidocaLink extends LitElement {
    static styles: import("lit-element").CSSResult;
    text: string;
    href: string;
    targetType: string;
    render(): import("lit-element").TemplateResult;
}
