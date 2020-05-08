import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { ButtonType, InputfieldComponent, InputfieldType, RichMediaType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';
import { RichMediaProperties } from '../rich-media/component';

@customElement('page-rich-media')
export class pagerichmedia extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagerichmedia');
   }

   @property()
   src: string = 'https://picsum.photos/400/400';
   //src: string = 'https://www.youtube.com/embed/gG_JWPF99vA?list=WL';

   @property()
   richMediaType: string = RichMediaType.IMG;

   @property()
   richMediaProperties: RichMediaProperties[] = [];

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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-rich-media/>"></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagerich_description')}"
            ></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagerich_description_demo')}"
            ></nidoca-typography>

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
                        FlexItemProperties.KEYLINE_SIZE_MEDIUM,
                        FlexItemProperties.SMARTPHONE_MAX_WIDTH,
                        FlexItemProperties.TABLET_MAX_WIDTH
                     ]}"
                     itemFlexBasisValue="50%"
                  >
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           label="richMediaType"
                           .options="${InputfieldComponent.enumToComboboxItems(RichMediaType)}"
                           value="${this.richMediaType}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.richMediaType = (<any>RichMediaType)[event.detail.outputData.value])}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagerich_link_label')}"
                           value="${this.src}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pagerich_assistive_text_link')}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(RichMediaProperties)}"
                           label="${I18nService.getUniqueInstance().getValue('pagerich_richMediaProperties_label')}"
                           .value="${this.richMediaProperties}"
                           size="10"
                           multiple="true"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.richMediaProperties = event.detail.outputData.value)}"
                        ></nidoca-inputfield>
                     </nidoca-form>
                     <nidoca-rich-media
                        richMediaType="${this.richMediaType}"
                        src="${this.src}"
                        .richMediaProperties="${this.richMediaProperties}"
                     ></nidoca-rich-media> </nidoca-flex-container
               ></nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-rich-media '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.richMediaType, RichMediaType))
                        .concat(' src="')
                        .concat(this.src)
                        .concat('">\n</nidoca-rich-media>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
