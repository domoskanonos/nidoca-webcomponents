import { LitElement } from 'lit-element';
export declare enum ProgressType {
    PROGRESS = "PROGRESS",
    PROGRESS_CIRCULAR = "PROGRESS_CIRCULAR"
}
export declare class NidocaProgress extends LitElement {
    static styles: import("lit-element").CSSResult;
    progressType: ProgressType;
    render(): import("lit-element").TemplateResult;
}
