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
         <component-flex-container
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
            <component-typography .typographyType="${TypographyType.H2}" text="<nidoca-wizard/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>ProgressComponent</i>${I18nService.getUniqueInstance().getValue('pagewizard_description')}
            </component-typography>

            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}">
                  <component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer>
                  <nidoca-wizard .wizardSteps="${this.wizardSteps}"></nidoca-wizard>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<nidoca-wizard .wizardSteps="${'
                        .concat(JSON.stringify(this.wizardSteps))
                        .concat('}"></nidoca-wizard>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
