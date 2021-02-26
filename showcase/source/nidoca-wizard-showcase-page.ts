import {WizardStep} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-wizard-showcase-page')
export class NidocaWizardShowcasePage extends NidocaShowcaseTemplate {
  @property()
  wizardSteps: WizardStep[] | undefined | null = [];

  @property()
  selectedStep: WizardStep | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
