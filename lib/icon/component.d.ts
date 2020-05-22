import { LitElement } from 'lit-element';
export declare enum IconShadowType {
    NONE = "NONE",
    DEFAULT_SHADOW = "DEFAULT_SHADOW",
    SHADOW_1 = "SHADOW_1",
    SHADOW_2 = "SHADOW_2",
    SHADOW_3 = "SHADOW_3"
}
export declare class NidocaIcon extends LitElement {
    static styles: import("lit-element").CSSResult;
    icon: string;
    color: string;
    backgroundColor: string;
    iconShadowType: string;
    size: number;
    sizeUnit: string;
    title: string;
    withIconSpace: boolean;
    round: boolean;
    clickable: boolean;
    render(): import("lit-element").TemplateResult;
    clicked(): Promise<void>;
}
