import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { IconComponent, TypographyType } from '..';

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
                                 <component-icon
                                    icon="${wizardStep.icon}"
                                    clickable="true"
                                    @component-icon-click="${() => {
                                       this.selectedStep = wizardStep;
                                    }}"
                                 ></component-icon>
                                 <component-typography
                                    .typographyType="${TypographyType.OVERLINE}"
                                    text="${wizardStep.title}"
                                 ></component-typography>
                              </div>
                           `
                     )}
                  `
            )}
         </div>
      `;
   }
}
