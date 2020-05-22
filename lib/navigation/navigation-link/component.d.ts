import { LitElement } from 'lit-element';
export declare class NidocaNavigationLink extends LitElement {
    static styles: import("lit-element").CSSResult;
    icon: string;
    text: string;
    href: string;
    rendered: boolean;
    render(): import("lit-element").TemplateResult;
    private linkClicked;
}
