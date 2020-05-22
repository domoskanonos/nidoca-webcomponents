import { TemplateResult, LitElement } from 'lit-element';
export declare abstract class NidocaTemplate extends LitElement {
    static styles: import("lit-element").CSSResult;
    menuSwitchIcon: string;
    menuCss: string;
    navigationClosed: boolean;
    navigationType: string;
    private topElement;
    private leftElement;
    private mainElement;
    render(): TemplateResult;
    abstract getMainComponent(): TemplateResult;
    abstract getLeftNavigationContent(): TemplateResult;
    abstract getTopContent(): TemplateResult;
    menuItemClicked(event: CustomEvent): void;
    private toogleMenu;
}
