import { LitElement } from 'lit-element';
export declare enum TransitionType {
    CENTER = "CENTER",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    SLIDE_CENTER = "SLIDE_CENTER",
    SLIDE_LEFT = "SLIDE_LEFT",
    SLIDE_RIGHT = "SLIDE_RIGHT",
    SLIDE_TOP = "SLIDE_TOP",
    SLIDE_BOTTOM = "SLIDE_BOTTOM"
}
export declare class NidocaTransition extends LitElement {
    transitionType: TransitionType;
    duration: number;
    static styles: import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
