import { LitElement } from 'lit-element';
export declare class NidocaListItem extends LitElement {
    static styles: import("lit-element").CSSResult;
    selectionMode: boolean;
    selected: boolean;
    protected update(changedProperties: Map<PropertyKey, unknown>): void;
    render(): import("lit-element").TemplateResult;
    itemClicked(): void;
    switchSelected(): void;
}
