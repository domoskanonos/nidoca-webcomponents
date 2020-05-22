import { LitElement } from 'lit-element';
export declare enum FlexContainerProperties {
    CONTAINER_WIDTH_MIN_CONTENT = "CONTAINER_WIDTH_MIN_CONTENT",
    CONTAINER_WIDTH_AUTO = "CONTAINER_WIDTH_AUTO",
    CONTAINER_WIDTH_100 = "CONTAINER_WIDTH_100",
    CONTAINER_WIDTH_75 = "CONTAINER_WIDTH_75",
    CONTAINER_WIDTH_50 = "CONTAINER_WIDTH_50",
    CONTAINER_WIDTH_25 = "CONTAINER_WIDTH_25",
    CONTAINER_HEIGHT_100 = "CONTAINER_HEIGHT_100",
    TABLET_MAX_WIDTH = "TABLET_MAX_WIDTH",
    SMARTPHONE_MAX_WIDTH = "SMARTPHONE_MAX_WIDTH",
    SMARTPHONE_HORIZONTAL_PADDING = "SMARTPHONE_HORIZONTAL_PADDING",
    SMARTPHONE_VERTICAL_PADDING = "SMARTPHONE_VERTICAL_PADDING",
    TABLET_HORIZONTAL_PADDING = "TABLET_HORIZONTAL_PADDING",
    TABLET_VERTICAL_PADDING = "TABLET_VERTICAL_PADDING"
}
export declare enum FlexItemProperties {
    TABLET_MAX_WIDTH = "TABLET_MAX_WIDTH",
    SMARTPHONE_MAX_WIDTH = "SMARTPHONE_MAX_WIDTH",
    KEYLINE_ALIGNMENT_HORIZONTAL = "KEYLINE_ALIGNMENT_HORIZONTAL",
    KEYLINE_ALIGNMENT_VERTICAL = "KEYLINE_ALIGNMENT_VERTICAL",
    KEYLINE_ALIGNMENT_BOTH = "KEYLINE_ALIGNMENT_BOTH",
    KEYLINE_SIZE_ZERO = "KEYLINE_SIZE_ZERO",
    KEYLINE_SIZE_LITTLE = "KEYLINE_SIZE_LITTLE",
    KEYLINE_SIZE_SMALL = "KEYLINE_SIZE_SMALL",
    KEYLINE_SIZE_MEDIUM = "KEYLINE_SIZE_MEDIUM",
    KEYLINE_SIZE_BIG = "KEYLINE_SIZE_BIG",
    KEYLINE_SIZE_MAX = "KEYLINE_SIZE_MAX"
}
export declare enum FlexDirection {
    ROW = "row",
    ROW_REVERSE = "rowData-reverse",
    COLUMN = "column",
    COLUMN_REVERSE = "column-reverse"
}
export declare enum FlexWrap {
    WRAP = "wrap",
    NO_WRAP = "nowrap",
    WRAP_REVERSE = "flexWrap-reverse"
}
export declare enum FlexJustifyContent {
    FLEX_START = "flex-start",
    FLEX_END = "flex-end",
    CENTER = "center",
    SPACE_BETWEEN = "space-between",
    SPACE_AROUND = "space-around",
    SPACE_EVENLY = "space-evenly"
}
export declare enum FlexAlignItems {
    FLEX_START = "flex-start",
    FLEX_END = "flex-end",
    CENTER = "center",
    STRETCH = "stretch",
    START = "start",
    END = "end",
    BASELINE = "baseline",
    FIRST_BASELINE = "first baseline",
    LAST_BASLINE = "last baseline",
    SAFE = "safe",
    UNSAFE = "unsafe"
}
export declare enum FlexAlignContent {
    FLEX_START = "flex-start",
    FLEX_END = "flex-end",
    CENTER = "center",
    STRETCH = "stretch",
    SPACE_AROUND = "space-around",
    SPACE_EVENLY = "space-evenly",
    SPACE_BETWEEN = "space-between",
    START = "start",
    END = "end",
    BASELINE = "baseline",
    FIRST_BASELINE = "first baseline",
    LAST_BASLINE = "last baseline",
    SAFE = "safe",
    UNSAFE = "unsafe"
}
export declare class NidocaFlex extends LitElement {
    static styles: import("lit-element").CSSResult;
    flexDirection: string;
    flexWrap: string;
    flexJustifyContent: string;
    flexAlignItems: string;
    flexAlignContent: string;
    flexContainerProperties: string[];
    flexItemProperties: string[];
    flexItemBasisValue: string;
    flexItemBasisValues: string[];
    slotElement: HTMLSlotElement | undefined;
    render(): import("lit-element").TemplateResult;
    protected update(changedProperties: Map<PropertyKey, unknown>): void;
    slotChanged(event: Event): void;
    private changeSlotComponentsStyle;
    private changeItemStyle;
    private getFlexItemStyle;
    toContainerPropertiesString(flexContainerPropertieses: string[]): string;
}
