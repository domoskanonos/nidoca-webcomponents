import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {
   AlignContent,
   AlignItems,
   ContainerProperties,
   FlexDirection,
   FlexJustifyContent,
   FlexWrap,
   ItemProperties
} from '../flex-container/component';
import { InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { IconShadowType } from '../icon/component';

@customElement('page-list')
export class PageList extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'ListComponent';
   }

   @property()
   selectionMode: boolean = false;

   //listItemContent: [] = ['','',''];

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-list/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>ListComponent</i>${I18nService.getUniqueInstance().getValue('pagelist_description')}
            </component-typography>
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>

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
                  <component-flex-container
                     .containerProperties="${[
                        ContainerProperties.CONTAINER_WIDTH_100,
                        ContainerProperties.TABLET_MAX_WIDTH,
                        ContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_BOTH, ItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="100%"
                  >
                     <component-form>
                        <component-inputfield
                           label="${I18nService.getUniqueInstance().getValue('pagelist_selection_mode_checkbox')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pagelist_selection_mode_assistive_text')}"
                           infoText="${I18nService.getUniqueInstance().getValue('pagelist_selection_mode_info_text')}"
                           .inputfieldType="${InputfieldType.CHECKBOX}"
                           .checked="${this.selectionMode}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.selectionMode = event.detail.outputData.value)}"
                        ></component-inputfield>
                     </component-form>
                     <component-list .selectionMode="${this.selectionMode}">
                     
                     
                     
                     
                        <component-list-item>
                           <component-icon
                              clickable="false"
                              icon="thumb_up_alt"
                              round="true"
                              color="#ffffff"
                              backgroundColor="#0d47a1"
                              size="32"
                              .iconShadowType="${IconShadowType.DEFAULT_SHADOW}"
                           ></component-icon>

                           <component-typography>Lorem Ipsum Dolorem</component-typography>
                        </component-list-item>
                        
                        
                        
                     </component-list>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-dialog .show="'.concat(String(this.selectionMode)).concat('"></component-dialog>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
