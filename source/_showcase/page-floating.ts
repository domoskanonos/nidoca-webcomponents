import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { ButtonType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-floating')
export class PageFloating extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagefloating');
   }

   @property()
   top: number = 0;

   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
            .containerProperties="${[
               ContainerProperties.CONTAINER_WIDTH_50,
               ContainerProperties.SMARTPHONE_MAX_WIDTH,
               ContainerProperties.SMARTPHONE_HORIZONTAL_PADDING
            ]}"
            .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, ItemProperties.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <component-typography
               .typographyType="${TypographyType.H2}"
               text="<component-floating-container/>"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>FloatingComponent</i>${I18nService.getUniqueInstance().getValue('pagefloating_description')}
            </component-typography>
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagebutton_var')}"
            ></component-typography>

            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}"
                  ><component-flex-container
                     .containerProperties="${[ContainerProperties.CONTAINER_WIDTH_100, ContainerProperties.SMARTPHONE_MAX_WIDTH]}"
                     .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_VERTICAL, ItemProperties.KEYLINE_SIZE_ZERO]}"
                     itemFlexBasisValue="100%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.NUMBER}"
                           label="${I18nService.getUniqueInstance().getValue('pagefloating_top_label')}"
                           .checked="${this.top}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.top = event.detail.value)}"
                        ></component-inputfield>
                     </component-form>

                     <component-floating-container
                        top="${this.top}"
                     ></component-floating-container> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code code="<component-floating-container></component-floating-container>"> </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
