import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { NidocaIcon, TypographyType } from '..';

const componentCSS = require('./component.css');

export interface WizardStep {
   title: string;
   icon?: string;
}

@customElement('nidoca-wizard')
export class NidocaWizard extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   wizardSteps: WizardStep[] = [];

   @property()
   selectedStep: WizardStep | undefined;

   render() {
      return html`
         <div class="WIZARD">
            ${guard(
               [this.wizardSteps],
               () =>
                  html`
                     ${repeat(
                        this.wizardSteps,
                        (wizardStep: WizardStep) =>
                           html`
                              <div class="WIZARD_STEP">
                                 <div class="WIZARD_ICON">
                                    <nidoca-icon
                                    icon="${wizardStep.icon}"
                                    clickable="true"
                                    @nidoca-icon-clicked="${() => {
                                       this.selectedStep = wizardStep;
                                    }}"
                                 ></nidoca-icon>
                                 </div>
                                 <div class="WIZARD_TITLE">
                                    <nidoca-typography
                                       .typographyType="${TypographyType.OVERLINE}"
                                       text="${wizardStep.title}"
                                    ></nidoca-typography>
                                 </div>
                              </div>
                           `
                     )}
                  `
            )}
         </div>
      `;
   }
}
