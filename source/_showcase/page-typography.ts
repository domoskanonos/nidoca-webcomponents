import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TypographyType } from '../typography/component';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-typography')
export class PageTypography extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagetypography');
   }

   @property()
   typographyType: string = TypographyType.BODY1;

   @property()
   text: string = 'Lorem ipsum dolor sit amet';

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-typography/>"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagetopology_text1')}"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagetopology_text2')}"
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
                     .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_BOTH, ItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="50%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(TypographyType)}"
                           label="${I18nService.getUniqueInstance().getValue('pagetopology_type')}"
                           value="${this.typographyType}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeTypographyType(event)}"
                        ></component-inputfield>

                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXTAREA}"
                           label="${I18nService.getUniqueInstance().getValue('pagetopology_text_label')}"
                           value="${this.text}"
                           @component-inputfield-keyup="${(event: CustomEvent) => this.changeText(event)}"
                        ></component-inputfield>
                     </component-form>

                     <component-typography typographyType="${this.typographyType}" text="${this.text}">
                     </component-typography> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-typography '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.typographyType, TypographyType))
                        .concat(' text="')
                        .concat(this.text)
                        .concat('"></component-typography>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }

   private changeTypographyType(event: CustomEvent) {
      let typographyType: string = (<any>TypographyType)[event.detail.outputData.value];
      console.log('change buttonType: {}', typographyType);
      this.typographyType = typographyType;
   }

   private changeText(event: CustomEvent) {
      let text: string = (<any>TypographyType)[event.detail.outputData.value];
      console.log('change buttonType: {}', text);
      this.text = text;
   }
}
