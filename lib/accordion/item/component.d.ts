import { LitElement } from 'lit-element';
export declare class NidocaAccordionItem extends LitElement {
    static styles: import("lit-element").CSSResult;
    header: string;
    opened: boolean;
    render(): import("lit-element").TemplateResult;
    toggle(): void;
}
