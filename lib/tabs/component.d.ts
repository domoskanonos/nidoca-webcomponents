import { LitElement } from 'lit-element';
export declare class NidocaTabs extends LitElement {
    static styles: import("lit-element").CSSResult;
    tabSlot: HTMLSlotElement | undefined;
    tabContentSlot: HTMLSlotElement | undefined;
    protected firstUpdated(_changedProperties: Map<PropertyKey, unknown>): void;
    protected update(changedProperties: Map<PropertyKey, unknown>): void;
    private changeSelectedTabStyle;
    render(): import("lit-element").TemplateResult;
    private tabClicked;
}
