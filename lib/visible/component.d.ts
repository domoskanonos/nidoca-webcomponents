import { LitElement } from 'lit-element';
export declare enum VisibleType {
    HIDE = "HIDE",
    INVISIBLE = "INVISIBLE",
    NORMAL = "NORMAL"
}
export declare class NidocaVisible extends LitElement {
    static styles: import("lit-element").CSSResult;
    visibleType: string;
    render(): import("lit-element").TemplateResult;
}
