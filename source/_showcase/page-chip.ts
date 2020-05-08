import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { IconShadowType } from '../icon/component';

@customElement('page-chip')
export class PageChip extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'ListComponent';
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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-chip/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>ProgressComponent</i>${I18nService.getUniqueInstance().getValue('pagechip_description')}
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
                  <component-chip
                     ><component-typography
                        .typographyType="${TypographyType.SUBTITLE1}"
                        text="Some Content"
                     ></component-typography
                  ></component-chip>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code code="${'<component-chip></component-chip>'}"> </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
