import { LitElement } from 'lit-element';
export declare enum SpacerAlignment {
    BOTH = "both",
    HORIZONTAL = "horizontalAlignment",
    VERTICAL = "verticalAlignment"
}
export declare enum SpacerSize {
    ZERO = "spacerZero",
    LITTLE = "spaceLittle",
    SMALL = "spaceSmall",
    MEDIUM = "spaceMedium",
    NORMAL = "spaceNormal",
    BIG = "spaceBig",
    MAX = "spaceMax"
}
export declare class NidocaSpacer extends LitElement {
    static styles: import("lit-element").CSSResult;
    spacerSize: string;
    spacerAlignment: string;
    size: string;
    render(): import("lit-element").TemplateResult;
    private toSizeStyle;
}
