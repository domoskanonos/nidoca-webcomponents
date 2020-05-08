import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {
   FlexAlignContent,
   FlexAlignItems,
   FlexDirection,
   FlexJustifyContent,
   FlexWrap,
   SpacerAlignment,
   SpacerSize,
   TypographyType
} from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';

@customElement('page-dialog')
export class PageDialog extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagedialog');
   }

   @property()
   showDialog: boolean = false;

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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-dialog/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               <i>DialogComponent</i>${I18nService.getUniqueInstance().getValue('page_dialog')}
            </nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></nidoca-typography>

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
                     <nidoca-button
                        text="Zeige Dialog"
                        @component-button-click="${() => {
                           this.showDialog = true;
                        }}"
                     >
                     </nidoca-button>
                     <nidoca-dialog .show="${this.showDialog}">
                        <nidoca-flex-container
                           .flexContainerProperties="${[
                              FlexContainerProperties.CONTAINER_WIDTH_100,
                              FlexContainerProperties.CONTAINER_HEIGHT_100
                           ]}"
                           .flexItemProperties="${[FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
                           flexItemBasisValue="100%"
                           .flexDirection="${FlexDirection.ROW}"
                           .flexWrap="${FlexWrap.WRAP}"
                           .flexJustifyContent="${FlexJustifyContent.CENTER}"
                           .flexAlignItems="${FlexAlignItems.START}"
                           .flexAlignContent="${FlexAlignContent.CENTER}"
                        >
                           <nidoca-rich-media src="https://picsum.photos/200/200"></nidoca-rich-media>
                           <nidoca-button
                              text="Dialog schließen"
                              @component-button-click="${() => {
                                 this.showDialog = false;
                              }}"
                           >
                           </nidoca-button>
                        </nidoca-flex-container>
                     </nidoca-dialog>
                  </nidoca-flex-container>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-dialog .show="'.concat(String(this.showDialog)).concat('"></nidoca-dialog>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
