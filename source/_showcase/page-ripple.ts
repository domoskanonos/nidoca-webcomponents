import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TransitionType } from '../effect-transition/component';
import { FlexJustifyContent, InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';

@customElement('page-ripple')
export class RipplePage extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'RippleEffect';
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-ripple/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               ><i>RippleComponent</i> ${I18nService.getUniqueInstance().getValue('pageripple_description')}</nidoca-typography
            >
            <nidoca-tabs>
               <nidoca-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></nidoca-tab>
               <nidoca-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-flex-container
                     .flexContainerProperties="${[
                        FlexContainerProperties.CONTAINER_WIDTH_100,
                        FlexContainerProperties.TABLET_MAX_WIDTH,
                        FlexContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .flexItemProperties="${[
                        FlexItemProperties.KEYLINE_ALIGNMENT_BOTH,
                        FlexItemProperties.SMARTPHONE_MAX_WIDTH,
                        FlexItemProperties.TABLET_MAX_WIDTH
                     ]}"
                     itemFlexBasisValue="auto"
                     .flexJustifyContent="${FlexJustifyContent.CENTER}"
                  >
                     <nidoca-ripple>
                        <nidoca-rich-media src="https://picsum.photos/400/400"></nidoca-rich-media>
                     </nidoca-ripple>
                  </nidoca-flex-container>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-ripple><nidoca-rich-media src="https://picsum.photos/400/400"></nidoca-rich-media></nidoca-ripple>'}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
