import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ContainerProperties, ItemProperties } from '../flex-container/component';

@customElement('page-accordion')
export class PageAccordion extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageaccordion');
   }

   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
            .containerProperties="${[
               ContainerProperties.CONTAINER_WIDTH_50,
               ContainerProperties.TABLET_MAX_WIDTH,
               ContainerProperties.SMARTPHONE_MAX_WIDTH,
               ContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
               ContainerProperties.TABLET_HORIZONTAL_PADDING
            ]}"
            .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, ItemProperties.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <component-typography .typographyType="${TypographyType.H2}" text="<component-accordion/>"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="Komponente um Inhalte zu seperieren."
            ></component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('demo')}"></component-typography>
            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}"
                  ><component-flex-container
                     .containerProperties="${[
                        ContainerProperties.CONTAINER_WIDTH_100,
                        ContainerProperties.TABLET_MAX_WIDTH,
                        ContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_BOTH, ItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="100%"
                  >
                     <component-accordion>
                        <component-accordion-item header="1">
                           <component-typography .typographyType="${TypographyType.H2}" text="1"></component-typography>
                        </component-accordion-item>
                        <component-accordion-item header="2">
                           <component-typography .typographyType="${TypographyType.H2}" text="2"></component-typography>
                        </component-accordion-item>
                     </component-accordion> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent">
                  <component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code> </component-code>
               </component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
