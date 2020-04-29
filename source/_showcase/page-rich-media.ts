import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { ButtonType, InputfieldComponent, InputfieldType, RichMediaType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-rich-media')
export class pagerichmedia extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagerichmedia');
   }

   @property()
   src: string = 'https://picsum.photos/400/400';

   @property()
   richMediaType: string = RichMediaType.IMG;

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-rich-media/>"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagerich_text')}"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('pageborder_typoh4')}"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagerich_text1')}"
            ></component-typography>

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
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           label="richMediaType"
                           .options="${InputfieldComponent.enumToComboboxItems(RichMediaType)}"
                           value="${this.richMediaType}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.richMediaType = (<any>RichMediaType)[event.detail.outputData.value])}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="Link"
                           value="${this.src}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pagerich_text2')}"
                        ></component-inputfield>
                     </component-form>
                     <component-rich-media
                        richMediaType="${this.richMediaType}"
                        src="${this.src}"
                     ></component-rich-media> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-rich-media '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.richMediaType, RichMediaType))
                        .concat(' src="')
                        .concat(this.src)
                        .concat('">\n</component-rich-media>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
