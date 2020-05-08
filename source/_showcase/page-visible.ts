import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { BorderProperties, InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType, VisibleType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { PreviewFormatterService } from './preview-formatter';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';

@customElement('page-visible')
export class PageVisible extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagevisible');
   }

   @property()
   visibleType: string = VisibleType.NORMAL;

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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-visible/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               <i>VisibleComponent</i> ${I18nService.getUniqueInstance().getValue('pagevisible_body')}
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
                        .gridAlignItems="${GridFlexAlignItems.CENTER}"
                        .gridTemplateRows="${['1fr']}"
                        .gridTemplateColumns="${['1fr']}"
                     >
                        <nidoca-container>
                           <nidoca-border ..borderProperties="${[BorderProperties.ALL]}">
                              <nidoca-visible visibleType="${this.visibleType}">
                                 <nidoca-box
                                    style="background-color: var(--app-color-primary-background);"
                                    width="200px"
                                    height="200px"
                                 ></nidoca-box>
                              </nidoca-visible>
                           </nidoca-border>
                        </nidoca-container>
                     </nidoca-grid-container>
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(VisibleType)}"
                           label="${I18nService.getUniqueInstance().getValue('pagevisible_visibletype')}"
                           value="${this.visibleType}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.visibleType = (<any>VisibleType)[event.detail.outputData.value])}"
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
                     code="${'<nidoca-visible '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.visibleType, VisibleType))
                        .concat('></nidoca-visible>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
