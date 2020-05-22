import { LitElement } from 'lit-element';
export declare enum AccordionType {
    SINGLE = "SINGLE",
    MULTI = "MULTI"
}
export declare class NidocaAccordion extends LitElement {
    static styles: import("lit-element").CSSResult;
    accordionType: string;
    accordionSlot: HTMLSlotElement | undefined;
    render(): import("lit-element").TemplateResult;
    private accordionSwitched;
}
