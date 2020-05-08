import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ButtonType, FlexWrap, InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { AccordionType } from '../accordion/component';

@customElement('page-accordion')
export class PageAccordion extends PageAbstract {
   @property()
   accordionType: string = AccordionType.SINGLE;

   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageaccordion');
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-accordion/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               <i>AccordionComponent</i> wird zum seperieren von Inhalten verwendet. Dabei kann man zwischen zwei Modi auswählen:
               SINGLE, MULTI Modus SINGLE führt dazu das immer nur ein Akkordeonelement ausgeklappt ist und die anderen
               automatisch geschlossen werden. Modus MULIT erlaubt es mehrere Akkordeonelemente gleichzeitig aufklappen zu können.
            </nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('demo')}"
            ></nidoca-typography>
            <nidoca-tabs>
               <nidoca-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></nidoca-tab>
               <nidoca-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}"
                  ><nidoca-flex-container
                     .flexContainerProperties="${[
                        FlexContainerProperties.CONTAINER_WIDTH_100,
                        FlexContainerProperties.TABLET_MAX_WIDTH,
                        FlexContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .flexItemProperties="${[]}"
                     itemFlexBasisValue="100%"
                  >
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(AccordionType)}"
                           label="${I18nService.getUniqueInstance().getValue('pageaccordion_accordiontype_label')}"
                           .value="${InputfieldComponent.enumGetKeyFromValue(AccordionType, this.accordionType)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.accordionType = (<any>AccordionType)[event.detail.outputData.value])}"
                        ></nidoca-inputfield>
                     </nidoca-form>
                     <nidoca-spacer
                        spacerSize="${SpacerSize.MEDIUM}"
                        spacerAlignment="${SpacerAlignment.VERTICAL}"
                     ></nidoca-spacer
                     ><nidoca-accordion accordionType="${this.accordionType}">
                        <nidoca-accordion-item header="${I18nService.getUniqueInstance().getValue('pageaccordion_header_1')}">
                           <nidoca-rich-media src="https://picsum.photos/400/100"></nidoca-rich-media>
                        </nidoca-accordion-item>
                        <nidoca-accordion-item header="${I18nService.getUniqueInstance().getValue('pageaccordion_header_2')}">
                           <nidoca-rich-media src="https://picsum.photos/400/100"></nidoca-rich-media>
                        </nidoca-accordion-item>
                     </nidoca-accordion> </nidoca-flex-container
               ></nidoca-tab-content>
               <nidoca-tab-content slot="tabContent">
                  <nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code> </nidoca-code>
               </nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
