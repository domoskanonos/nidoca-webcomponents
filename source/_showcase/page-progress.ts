import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ProgressType } from '../progress/component';
import { BorderSize } from '../border/component';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-progress')
export class PageProgress extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'ProgressComponent';
   }

   @property()
   progressType: ProgressType = ProgressType.PROGRESS;

   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-progress/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>ProgressComponent</i>${I18nService.getUniqueInstance().getValue('pageprogress_description')}
            </component-typography>

            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}">
                  <component-form>
                     <component-inputfield
                        .inputfieldType="${InputfieldType.COMBOBOX}"
                        .options="${InputfieldComponent.enumToComboboxItems(ProgressType)}"
                        label="${I18nService.getUniqueInstance().getValue('pageprogress_progressType')}"
                        .value="${InputfieldComponent.enumGetKeyFromValue(ProgressType, this.progressType)}"
                        @component-inputfield-change="${(event: CustomEvent) =>
                           (this.progressType = (<any>ProgressType)[event.detail.outputData.value])}"
                     ></component-inputfield>
                  </component-form>
                  <component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer>
                  <component-progress progressType="${this.progressType}"></component-progress>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-progress .progressType=${ProgressType.'
                        .concat(this.progressType)
                        .concat('}"></component-progress>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
