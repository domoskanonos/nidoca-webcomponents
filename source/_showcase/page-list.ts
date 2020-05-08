import { customElement, html, property, TemplateResult } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { PageAbstract } from './page-abstract';
import {
   AlignContent,
   AlignItems,
   FlexContainerProperties,
   FlexDirection,
   FlexJustifyContent,
   FlexWrap,
   FlexItemProperties
} from '../flex-container/component';
import { InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { IconShadowType } from '../icon/component';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';

@customElement('page-list')
export class PageList extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'ListComponent';
   }

   @property()
   selectionMode: boolean = false;

   listItemContent: string[] = ['', '', ''];

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-list/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>ListComponent</i>${I18nService.getUniqueInstance().getValue('pagelist_description')}
            </component-typography>
            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}">
                  <component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer>
                  <component-flex-container
                     .flexContainerProperties="${[
                        FlexContainerProperties.CONTAINER_WIDTH_100,
                        FlexContainerProperties.TABLET_MAX_WIDTH,
                        FlexContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="100%"
                  >
                     <component-form>
                        <component-inputfield
                           label="${I18nService.getUniqueInstance().getValue('pagelist_selection_mode_checkbox')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pagelist_selection_mode_assistive_text')}"
                           .inputfieldType="${InputfieldType.SWITCH}"
                           .checked="${this.selectionMode}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.selectionMode = event.detail.outputData.value)}"
                        ></component-inputfield>
                     </component-form>
                     <component-list .selectionMode="${this.selectionMode}">
                        ${guard(
                           [this.selectionMode, this.listItemContent],
                           () =>
                              html`
                                 ${repeat(
                                    this.listItemContent,
                                    (identifier: string) =>
                                       html`
                                          <component-list-item id="${identifier}">
                                             <component-grid-container
                                                .gridJustifyItems="${GridJustifyItems.START}"
                                                .gridAlignItems="${GridAlignItems.CENTER}"
                                                .gridTemplateRows="${['1fr']}"
                                                .gridTemplateColumns="${['auto', '1fr', 'auto']}"
                                             >
                                                <component-icon
                                                   clickable="false"
                                                   icon="thumb_up_alt"
                                                   round="true"
                                                   size="18"
                                                   color="var(--app-color-surface)"
                                                   backgroundColor="var(--app-color-surface-background)"
                                                   .iconShadowType="${IconShadowType.DEFAULT_SHADOW}"
                                                ></component-icon>
                                                <component-spacer
                                                   spacerSize="${SpacerSize.MEDIUM}"
                                                   spacerAlignment="${SpacerAlignment.BOTH}"
                                                >
                                                   <component-typography>Lorem Ipsum Dolorem</component-typography>
                                                </component-spacer>
                                                <component-icon clickable="false" icon="more_vert" round="true"></component-icon>
                                             </component-grid-container>
                                          </component-list-item>
                                       `
                                 )}
                              `
                        )}
                     </component-list>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-list .selectionMode="${'
                        .concat(String(this.selectionMode))
                        .concat('}"><component-list-item></component-list-item></component-list>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
