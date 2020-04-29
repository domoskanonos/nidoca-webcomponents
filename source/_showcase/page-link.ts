import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType, TargetType, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-link')
export class PageLink extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagelink');
   }

   @property()
   targetType: string = TargetType.BLANK;

   @property()
   href: string = '';

   @property()
   text: string = 'Link';

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-link/>"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagelink_body')}"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('pageborder_typoh4')}"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagelink_body1')}"
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
                     itemFlexBasisValue="50%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(TargetType)}"
                           label="TargetType"
                           .value="${InputfieldComponent.enumGetKeyFromValue(TargetType, this.targetType)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.targetType = (<any>TargetType)[event.detail.outputData.value])}"
                        ></component-inputfield>
                     </component-form>
                     <component-link href="${this.href}" targetType="${this.targetType}">${this.text}</component-link>
                  </component-flex-container></component-tab-content
               >
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-link '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.targetType, TargetType))
                        .concat(' href="')
                        .concat(this.href)
                        .concat('" text="')
                        .concat(this.text)
                        .concat('"></component-link>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
