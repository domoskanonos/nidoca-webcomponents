import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';

@customElement('page-spacer')
export class PageSpacer extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'SpacerComponent';
   }

   @property()
   size: string = '';

   @property()
   spacerSize: string = SpacerSize.MEDIUM;

   @property()
   spacerAlignment: string = SpacerAlignment.BOTH;

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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-spacer/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               ><i>SpacerComponent</i> ${I18nService.getUniqueInstance().getValue('pagespacer_text')}
            </nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}" text=""></nidoca-typography>

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
                     <nidoca-spacer
                        spacerSize="${SpacerSize.MEDIUM}"
                        spacerAlignment="${SpacerAlignment.VERTICAL}"
                     ></nidoca-spacer>
                     <nidoca-grid-container
                        .gridJustifyItems="${GridJustifyItems.CENTER}"
                        .gridAlignItems="${GridAlignItems.CENTER}"
                        .gridTemplateRows="${['1fr']}"
                        .gridTemplateColumns="${['1fr']}"
                     >
                        <nidoca-container>
                           <nidoca-box
                              style="background-color: var(--app-color-primary-background);"
                              width="min-content"
                              height="min-content"
                           >
                              <nidoca-spacer
                                 spacerAlignment="${this.spacerAlignment}"
                                 spacerSize="${this.spacerSize}"
                                 size="${this.size}"
                              >
                                 <nidoca-box
                                    style="background-color: var(--app-color-surface-background);"
                                    width="200px"
                                    height="200px"
                                 ></nidoca-box>
                              </nidoca-spacer>
                           </nidoca-box>
                        </nidoca-container>
                     </nidoca-grid-container>

                     <nidoca-form
                        ><nidoca-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagespacer_size_label')}"
                           .value="${this.size}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.size = event.detail.outputData.value)}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           label="${I18nService.getUniqueInstance().getValue('pagespacer_label')}"
                           .options="${InputfieldComponent.enumToComboboxItems(SpacerAlignment)}"
                           value="${InputfieldComponent.enumGetKeyFromValue(SpacerAlignment, this.spacerAlignment)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.spacerAlignment = (<any>SpacerAlignment)[event.detail.outputData.value])}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           label="${I18nService.getUniqueInstance().getValue('pagespacer_label1')}"
                           .options="${InputfieldComponent.enumToComboboxItems(SpacerSize)}"
                           value="${InputfieldComponent.enumGetKeyFromValue(SpacerSize, this.spacerSize)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.spacerSize = (<any>SpacerSize)[event.detail.outputData.value])}"
                        ></nidoca-inputfield>
                     </nidoca-form>
                  </nidoca-flex-container>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-spacer spacerAlignment="'
                        .concat(this.spacerAlignment)
                        .concat('" spacerSize="')
                        .concat(this.spacerSize)
                        .concat('" size="')
                        .concat(this.size)
                        .concat('"></nidoca-spacer>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
