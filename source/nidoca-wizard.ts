import { css, customElement, html, property, LitElement } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import {TypographyType} from "./nidoca-typography";

export interface WizardStep {
   title: string;
   icon?: string;
}

@customElement('nidoca-wizard')
export class NidocaWizard extends LitElement {
   static styles = css`
      .WIZARD {
      }

      .WIZARD_STEP {
         float: left;
      }

      .WIZARD_ICON {
         width: 50px;
         height: 50px;
         float: left;
         border: 2px solid var(--app-color-primary-background);
         border-radius: 50%;
         margin-right: 20px;
         position: relative;
         transition: all 0.35s;
         color: var(--app-color-primary-background);
      }

      .WIZARD_ICON::after {
         content: '';
         position: absolute;
         top: 50%;
         transform: translateY(-50%);
         right: -22px;
         width: 20px;
         height: 5px;

         border-bottom: 2px solid var(--app-color-primary-background);
      }

      .WIZARD_STEP:last-child .WIZARD_ICON {
         overflow: hidden;
      }

      .WIZARD_ICON:hover {
         background: var(--app-color-primary-background);
         color: #ffffff;
      }

      .WIZARD_STEP:first-child .WIZARD_ICON {
         background: var(--app-color-primary-background);
         color: #ffffff;
      }

      .WIZARD_STEP:first-child .WIZARD_ICON::after {
         background: var(--app-color-primary-background);
      }

      .WIZARD_TITLE {
         width: 50px;
         text-align: center;
      }
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
                                       @nidoca-event-icon-clicked="${() => {
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
