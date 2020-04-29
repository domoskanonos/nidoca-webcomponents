import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {BorderType, InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType} from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { PreviewFormatterService } from './preview-formatter';
import { BorderSize, ShadowType } from '../border/component';

@customElement('page-border')
export class PageBorder extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageborder');
   }

   @property()
   borderType: string = BorderType.ALL;

   @property()
   borderSize: string = BorderSize.MEDIUM;

   @property()
   shadowType: string = ShadowType.NONE;

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-border/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               ${I18nService.getUniqueInstance().getValue('page_border_description')}
            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pageborder_body')}"
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
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(BorderType)}"
                           label="${I18nService.getUniqueInstance().getValue('pageborder_visible')}"
                           value="${this.borderType}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.borderType = (<any>BorderType)[event.detail.outputData.value])}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(BorderSize)}"
                           label="${I18nService.getUniqueInstance().getValue('pageborder_size')}"
                           value="${this.borderSize}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.borderSize = (<any>BorderSize)[event.detail.outputData.value])}"
                        ></component-inputfield>

                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(ShadowType)}"
                           label="${I18nService.getUniqueInstance().getValue('pageborder_shadow')}"
                           value="${this.shadowType}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.shadowType = (<any>ShadowType)[event.detail.outputData.value])}"
                        ></component-inputfield>
                     </component-form>

                     <component-border
                        borderType="${this.borderType}"
                        borderSize="${this.borderSize}"
                        shadowType="${this.shadowType}"
                     >
                        <component-rich-media src="https://dummyimage.com/300x300/ffffff/ffffff"></component-rich-media>
                     </component-border>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-border '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.borderType, BorderType))
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.borderSize, BorderSize))
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.shadowType, ShadowType))
                        .concat('></component-border>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
