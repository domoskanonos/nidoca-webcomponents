import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TargetType, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-divider/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>BoxComponent</i> ${I18nService.getUniqueInstance().getValue('pagedivider_text')}</component-typography
            >

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
                           .inputfieldType="${InputfieldType.NUMBER}"
                           step="0.1"
                           min="0.0"
                           max="1.0"
                           label="${I18nService.getUniqueInstance().getValue('pagediider_label')}"
                           .value="${this.opacity}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.opacity = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(DividerType)}"
                           label="Trenner Typ:"
                           .value="${InputfieldComponent.enumGetKeyFromValue(DividerType, this.dividerType)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.dividerType = (<any>DividerType)[event.detail.outputData.value])}"
                        ></component-inputfield>
                     </component-form>

                     <component-divider
                        dividerType="${this.dividerType}"
                        .opacity="${this.opacity}"
                     ></component-divider> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-divider '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.dividerType, DividerType))
                        .concat('opacity="')
                        .concat(String(this.opacity))
                        .concat('"')
                        .concat('></component-divider>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
