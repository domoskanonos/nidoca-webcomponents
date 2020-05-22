import { LitElement } from 'lit-element';
export declare enum NavigationType {
    DISMISSIBLE = "DISMISSIBLE",
    PERMANENT = "PERMANENT",
    MODAL = "MODAL"
}
export declare class NidocaNavigation extends LitElement {
    static styles: import("lit-element").CSSResult;
    closed: boolean;
    navigationType: string;
    render(): import("lit-element").TemplateResult;
}
