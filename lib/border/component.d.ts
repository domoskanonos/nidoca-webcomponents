import { LitElement } from 'lit-element';
export declare enum BorderProperties {
    NONE = "NONE",
    ALL = "ALL",
    ALL_ROUND = "ALL_ROUND",
    HORIZONTAL = "HORIZONTAL",
    VERTICAL = "VERTICAL",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    TOP = "TOP",
    BOTTOM = "BOTTOM",
    BOTTOM_SELECTED = "BOTTOM_SELECTED",
    FULL_WIDTH = "FULL_WIDTH"
}
export declare enum BorderSize {
    THIN = "THIN",
    MEDIUM = "MEDIUM",
    THICK = "THICK"
}
export declare enum ShadowType {
    NONE = "NONE",
    KEY_LIGHT = "KEY_LIGHT",
    AMBIENT_LIGHT = "AMBIENT_LIGHT",
    COMBINED = "COMBINED"
}
export declare class NidocaBorder extends LitElement {
    static styles: import("lit-element").CSSResult;
    borderProperties: string[];
    borderSize: string;
    shadowType: string;
    render(): import("lit-element").TemplateResult;
    toBorderPropertiesString(borderPropertieses: string[]): string;
}
