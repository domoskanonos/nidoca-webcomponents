import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { BorderProperties, InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { PreviewFormatterService } from './preview-formatter';
import { BorderSize, ShadowType } from '../border/component';

@customElement('page-border')
export class PageBorder extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageborder');
   }

   @property()
   borderProperties: string[] = [BorderProperties.ALL];

   @property()
   borderSize: string = BorderSize.MEDIUM;

   @property()
   shadowType: string = ShadowType.NONE;

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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-border/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               ${I18nService.getUniqueInstance().getValue('page_border_description')}
            <nidoca-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue(
         'interactive_demo'
      )}"></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pageborder_body')}"
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
                     .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="100%"
                  >
                     <nidoca-form>           
                         <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(BorderProperties)}"
                           label="${I18nService.getUniqueInstance().getValue('pageborder_properties')}"
                           .value="${this.borderProperties}"
                           size="5"
                           multiple="true"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.borderProperties = event.detail.outputData.value)}"
                        ></nidoca-inputfield>
                        
                        
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(BorderSize)}"
                           label="${I18nService.getUniqueInstance().getValue('pageborder_size')}"
                           value="${this.borderSize}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.borderSize = (<any>BorderSize)[event.detail.outputData.value])}"
                        ></nidoca-inputfield>

                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(ShadowType)}"
                           label="${I18nService.getUniqueInstance().getValue('pageborder_shadow')}"
                           value="${this.shadowType}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.shadowType = (<any>ShadowType)[event.detail.outputData.value])}"
                        ></nidoca-inputfield>
                     </nidoca-form>

                     <nidoca-border
                        .borderProperties="${this.borderProperties}"
                        borderSize="${this.borderSize}"
                        shadowType="${this.shadowType}"
                     >
                        <nidoca-rich-media src="https://dummyimage.com/300x300/ffffff/ffffff"></nidoca-rich-media>
                     </nidoca-border>
                  </nidoca-flex-container>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-border '
                        .concat(
                           PreviewFormatterService.getUniqueInstance().property2String(this.borderProperties, BorderProperties)
                        )
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.borderSize, BorderSize))
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.shadowType, ShadowType))
                        .concat('></nidoca-border>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
