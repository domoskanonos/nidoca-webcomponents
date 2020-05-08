import { customElement, html, property, TemplateResult } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';
import { PageAbstract } from './page-abstract';
import {
   FlexAlignContent,
   FlexAlignItems,
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-list/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               <i>ListComponent</i>${I18nService.getUniqueInstance().getValue('pagelist_description')}
            </nidoca-typography>
            <nidoca-tabs>
               <nidoca-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></nidoca-tab>
               <nidoca-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}">
                  <nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer>
                  <nidoca-flex-container
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
                           label="${I18nService.getUniqueInstance().getValue('pagelist_selection_mode_checkbox')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pagelist_selection_mode_assistive_text')}"
                           .inputfieldType="${InputfieldType.SWITCH}"
                           .checked="${this.selectionMode}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.selectionMode = event.detail.outputData.value)}"
                        ></nidoca-inputfield>
                     </nidoca-form>
                     <nidoca-list .selectionMode="${this.selectionMode}">
                        ${guard(
                           [this.selectionMode, this.listItemContent],
                           () =>
                              html`
                                 ${repeat(
                                    this.listItemContent,
                                    (identifier: string) =>
                                       html`
                                          <nidoca-list-item id="${identifier}">
                                             <nidoca-grid-container
                                                .gridJustifyItems="${GridJustifyItems.START}"
                                                .gridAlignItems="${GridAlignItems.CENTER}"
                                                .gridTemplateRows="${['1fr']}"
                                                .gridTemplateColumns="${['auto', '1fr', 'auto']}"
                                             >
                                                <nidoca-icon
                                                   clickable="false"
                                                   icon="thumb_up_alt"
                                                   round="true"
                                                   size="18"
                                                   color="var(--app-color-surface)"
                                                   backgroundColor="var(--app-color-surface-background)"
                                                   .iconShadowType="${IconShadowType.DEFAULT_SHADOW}"
                                                ></nidoca-icon>
                                                <nidoca-spacer
                                                   spacerSize="${SpacerSize.MEDIUM}"
                                                   spacerAlignment="${SpacerAlignment.BOTH}"
                                                >
                                                   <nidoca-typography>Lorem Ipsum Dolorem</nidoca-typography>
                                                </nidoca-spacer>
                                                <nidoca-icon clickable="false" icon="more_vert" round="true"></nidoca-icon>
                                             </nidoca-grid-container>
                                          </nidoca-list-item>
                                       `
                                 )}
                              `
                        )}
                     </nidoca-list>
                  </nidoca-flex-container>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-list .selectionMode="${'
                        .concat(String(this.selectionMode))
                        .concat('}"><nidoca-list-item></nidoca-list-item></nidoca-list>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
