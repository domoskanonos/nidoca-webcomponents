import { LitElement } from 'lit-element';
export declare enum GridJustifyItems {
    START = "start",
    END = "end",
    CENTER = "center",
    STRETCH = "stretch"
}
export declare enum GridAlignItems {
    START = "start",
    END = "end",
    CENTER = "center",
    STRETCH = "stretch"
}
export declare class NidocaGrid extends LitElement {
    static styles: import("lit-element").CSSResult;
    gridTemplateRows: string[];
    gridTemplateColumns: string[];
    gridJustifyItems: string;
    gridAlignItems: string;
    height: string;
    minHeight: string;
    render(): import("lit-element").TemplateResult;
    private toGridTemplateRowsStyle;
    private toGridTemplateColumnsStyle;
    private toHeightStyle;
    private toMinHeightStyle;
    private toGridJustifyItems;
    private toGridAlignItems;
}
