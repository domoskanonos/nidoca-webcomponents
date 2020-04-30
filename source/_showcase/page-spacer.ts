import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
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
   spacerSize: string = SpacerSize.MEDIUM;

   @property()
   spacerAlignment: string = SpacerAlignment.BOTH;

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-spacer/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>SpacerComponent</i> ${I18nService.getUniqueInstance().getValue('pagespacer_text')}
            </component-typography>
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}" text=""></component-typography>

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
                     <component-spacer
                        spacerSize="${SpacerSize.MEDIUM}"
                        spacerAlignment="${SpacerAlignment.VERTICAL}"
                     ></component-spacer>
                     <component-grid-container
                        .gridJustifyItems="${GridJustifyItems.CENTER}"
                        .gridAlignItems="${GridAlignItems.CENTER}"
                        .gridTemplateRows="${['1fr']}"
                        .gridTemplateColumns="${['1fr']}"
                     >
                        <component-container>
                           <component-box
                              style="background-color: var(--app-color-primary-background);"
                              width="min-content"
                              height="min-content"
                           >
                              <component-spacer spacerAlignment="${this.spacerAlignment}" spacerSize="${this.spacerSize}">
                                 <component-box
                                    style="background-color: var(--app-color-surface-background);"
                                    width="200px"
                                    height="200px"
                                 ></component-box>
                              </component-spacer>
                           </component-box>
                        </component-container>
                     </component-grid-container>

                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           label="${I18nService.getUniqueInstance().getValue('pagespacer_label')}"
                           .options="${InputfieldComponent.enumToComboboxItems(SpacerAlignment)}"
                           value="${InputfieldComponent.enumGetKeyFromValue(SpacerAlignment, this.spacerAlignment)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.spacerAlignment = (<any>SpacerAlignment)[event.detail.outputData.value])}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           label="${I18nService.getUniqueInstance().getValue('pagespacer_label1')}"
                           .options="${InputfieldComponent.enumToComboboxItems(SpacerSize)}"
                           value="${InputfieldComponent.enumGetKeyFromValue(SpacerSize, this.spacerSize)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.spacerSize = (<any>SpacerSize)[event.detail.outputData.value])}"
                        ></component-inputfield>
                     </component-form>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-spacer spacerAlignment="'
                        .concat(this.spacerAlignment)
                        .concat('" spacerSize="')
                        .concat(this.spacerSize)
                        .concat('"></component-spacer>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
