import { LitElement } from 'lit-element';
export interface WizardStep {
    title: string;
    icon?: string;
}
export declare class NidocaWizard extends LitElement {
    static styles: import("lit-element").CSSResult;
    wizardSteps: WizardStep[];
    selectedStep: WizardStep | undefined;
    render(): import("lit-element").TemplateResult;
}
