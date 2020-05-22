import { LitElement } from 'lit-element';
export declare enum RichMediaType {
    IMG = "IMG",
    MOVIE = "MOVIE"
}
export declare enum RichMediaProperties {
    ROUND = "ROUND",
    CLICKABLE = "CLICKABLE",
    ZOOM_WRAPPED = "ZOOM_WRAPPED",
    FULL_WIDTH = "FULL_WIDTH"
}
export declare class NidocaRichMedia extends LitElement {
    static styles: import("lit-element").CSSResult;
    src: string;
    richMediaType: string;
    richMediaProperties: RichMediaProperties[];
    render(): import("lit-element").TemplateResult;
    private toRichMediaPropertiesString;
}
