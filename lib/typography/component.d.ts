import { LitElement } from 'lit-element';
export declare enum TypographyType {
    H1 = "H1",
    H2 = "H2",
    H3 = "H3",
    H4 = "H4",
    H5 = "H5",
    H6 = "H6",
    SUBTITLE1 = "SUBTITLE1",
    SUBTITLE2 = "SUBTITLE2",
    BODY1 = "BODY1",
    BODY2 = "BODY2",
    BUTTON = "BUTTON",
    CAPTION = "CAPTION",
    OVERLINE = "OVERLINE"
}
export declare enum TypographyAlignment {
    JUSTIFY = "text-align:justify;",
    JUSTIFY_ALL = "text-align:justify-all;",
    LEFT = "text-align: left;",
    RIGHT = "text-align: right;",
    CENTER = "text-align: center;",
    START = "text-align: start;",
    END = "text-align: end;",
    MATCH_PARENT = "text-align: match-parent;",
    INHERIT = "text-align: inherit;",
    INITIAL = "text-align: initial;",
    UNSET = "text-align: unset;"
}
export declare class NidocaTypography extends LitElement {
    static styles: import("lit-element").CSSResult;
    typographyType: TypographyType;
    typographyAlignment: TypographyAlignment;
    text: string;
    render(): import("lit-element").TemplateResult;
}
