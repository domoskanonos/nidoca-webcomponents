import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { WizardStep } from '../wizard/component';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-wizard')
export class PageWizard extends PageAbstract {
   @property()
   wizardSteps: WizardStep[] = [
      <WizardStep>{ title: 'Step 1', icon: '' },
      <WizardStep>{ title: 'Step 2', icon: '' },
      <WizardStep>{ title: 'Step 3', icon: '' },
      <WizardStep>{ title: 'Step 4', icon: '' },
      <WizardStep>{ title: 'Step 5', icon: '' },
      <WizardStep>{ title: 'Step 6', icon: '' }
   ];

   constructor() {
      super();
      this.navigationTitle = 'NidocaWizard';
   }

   getMainComponent(): TemplateResult {
      return html`
         <nidoca-flex-container
            .flexContainerProperties="${[
               FlexContainerProperties.CONTAINER_WIDTH_50,
               FlexContainerProperties.TABLET_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
               FlexContainerProperties.TABLET_HORIZONTAL_PADDING
            ]}"
            .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-wizard/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               <i>ProgressComponent</i>${I18nService.getUniqueInstance().getValue('pagewizard_description')}
            </nidoca-typography>

            <nidoca-tabs>
               <nidoca-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></nidoca-tab>
               <nidoca-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}">
                  <nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer>
                  <nidoca-wizard .wizardSteps="${this.wizardSteps}"></nidoca-wizard>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-wizard .wizardSteps="${'
                        .concat(JSON.stringify(this.wizardSteps))
                        .concat('}"></nidoca-wizard>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
