import {NidocaTemplate, WizardStep} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-wizard-showcase-page')
export class NidocaWizardShowcasePage extends NidocaTemplate {
  @property()
  wizardSteps: WizardStep[] | undefined | null = [];

  @property()
  selectedStep: WizardStep | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
  getLeftNavigationContent(): TemplateResult {
    return html``;
  }
  getTopContent(): TemplateResult {
    return html``;
  }
}
