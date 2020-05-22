import { LitElement } from 'lit-element';
import { NidocaListItem } from './item/component';
export declare class NidocaList extends LitElement {
    static styles: import("lit-element").CSSResult;
    selectionMode: boolean;
    slotElement: HTMLSlotElement | undefined;
    protected update(changedProperties: Map<PropertyKey, unknown>): void;
    render(): import("lit-element").TemplateResult;
    getItems(): NidocaListItem[];
    getSelectedItems(): NidocaListItem[];
    getSelectedIndexes(): number[];
}
