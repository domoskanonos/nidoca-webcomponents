import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TransitionType } from '../effect-transition/component';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';
import { ContainerProperties, ItemProperties } from '../flex-container/component';

@customElement('page-ripple')
export class RipplePage extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'RippleEffect';
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
            <component-typography .typographyType="${TypographyType.H2}" text="<effect-ripple/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>RippleComponent</i> ${I18nService.getUniqueInstance().getValue('pageripple_text')}</component-typography
            >
            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('pageborder_typoh4')}"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}" text=""></component-typography>

            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-flex-container
                     .containerProperties="${[
                        ContainerProperties.CONTAINER_WIDTH_100,
                        ContainerProperties.TABLET_MAX_WIDTH,
                        ContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .itemProperties="${[
                        ItemProperties.KEYLINE_ALIGNMENT_BOTH,
                        ItemProperties.KEYLINE_SIZE_MEDIUM,
                        ItemProperties.SMARTPHONE_MAX_WIDTH,
                        ItemProperties.TABLET_MAX_WIDTH
                     ]}"
                     itemFlexBasisValue="50%"
                  >

                     <effect-ripple>
                        <component-rich-media src="https://picsum.photos/400/400"></component-rich-media>
                     </effect-ripple>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<effect-ripple '
                        .concat(' ></effect-ripple>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }

}
