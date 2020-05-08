import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TargetType, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { PreviewFormatterService } from './preview-formatter';
import { DividerType } from '../divider/component';

@customElement('page-divider')
export class PageDivider extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagedivider');
   }

   @property()
   dividerType: string = DividerType.THIN;

   @property()
   opacity: number = 1.0;

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
            flexItemBasisValue="100%"
         >
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-divider/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               ><i>BoxComponent</i> ${I18nService.getUniqueInstance().getValue('pagedivider_text')}</nidoca-typography
            >

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
                     flexItemBasisValue="100%"
                  >
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.NUMBER}"
                           step="0.1"
                           min="0.0"
                           max="1.0"
                           label="${I18nService.getUniqueInstance().getValue('pagediider_label')}"
                           .value="${this.opacity}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.opacity = event.detail.outputData.value)}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(DividerType)}"
                           label="Trenner Typ:"
                           .value="${InputfieldComponent.enumGetKeyFromValue(DividerType, this.dividerType)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.dividerType = (<any>DividerType)[event.detail.outputData.value])}"
                        ></nidoca-inputfield>
                     </nidoca-form>

                     <nidoca-divider
                        dividerType="${this.dividerType}"
                        .opacity="${this.opacity}"
                     ></nidoca-divider> </nidoca-flex-container
               ></nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-divider '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.dividerType, DividerType))
                        .concat('opacity="')
                        .concat(String(this.opacity))
                        .concat('"')
                        .concat('></nidoca-divider>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
