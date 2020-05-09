import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TypographyAlignment, TypographyType } from '../typography/component';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
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
   typographyAlignment: string = TypographyAlignment.JUSTIFY;

   @property()
   text: string =
      'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet';

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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-typography/>"></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagetopology_text1')}"
            ></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagetopology_text2')}"
            ></nidoca-typography>

            <nidoca-tabs>
               <nidoca-tab slot="tab" .selected="${true}" text="${I18nService.getUniqueInstance().getValue('demo')}"></nidoca-tab>
               <nidoca-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}"
                  ><nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}"></nidoca-spacer
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
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(TypographyType)}"
                           label="${I18nService.getUniqueInstance().getValue('pagetypography_type')}"
                           value="${this.typographyType}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.typographyType = (<any>TypographyType)[event.detail.outputData.value])}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(TypographyAlignment)}"
                           label="${I18nService.getUniqueInstance().getValue('pagetypography_alignment')}"
                           value="${this.typographyAlignment}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.typographyAlignment = (<any>TypographyAlignment)[event.detail.outputData.value])}"
                        ></nidoca-inputfield>
                     </nidoca-form>

                     <nidoca-typography
                        typographyType="${this.typographyType}"
                        typographyAlignment="${this.typographyAlignment}"
                        text="${this.text}"
                     >
                     </nidoca-typography> </nidoca-flex-container
               ></nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}"></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-typography '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.typographyType, TypographyType))
                        .concat(
                           PreviewFormatterService.getUniqueInstance().property2String(
                              this.typographyAlignment,
                              TypographyAlignment
                           )
                        )
                        .concat(' text="')
                        .concat(this.text)
                        .concat('"></nidoca-typography>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
