import { TemplateResult, LitElement } from 'lit-element';
export declare abstract class NidocaTopBottomTemplate extends LitElement {
    static styles: import("lit-element").CSSResult;
    static IDENTIFIER: string;
    menuSwitchIcon: string;
    menuCss: string;
    private topElement;
    private leftElement;
    private mainElement;
    render(): TemplateResult;
    abstract getMainComponent(): TemplateResult;
    abstract getLeftComponent(): TemplateResult;
    abstract getTopContent(): TemplateResult;
    abstract getBottomContent(): TemplateResult;
    protected inputDataChanged(): void;
    getOutputData(): undefined;
    menuItemClicked(event: CustomEvent): void;
    private toogleMenu;
}
