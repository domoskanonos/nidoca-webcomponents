import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {
   BorderType,
   ButtonType,
   ColorScheme,
   InputfieldComponent,
   InputfieldType,
   SpacerSize,
   TransitionType,
   TypographyType,
   VisibleType
} from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { PreviewFormatterService } from './preview-formatter';
import { BackgroundColorClazz, TextColorClazz } from '../effect-color/component';

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-dialog/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>DialogComponent</i> ist eine Komponente um Inhalte im Vordergrund darzustellen. Der restliche Hintergrund wird ausgegraut.
            </component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="Interaktive Demo"></component-typography>

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
                     <component-button
                        text="Zeige Dialog"
                        @component-button-click="${() => {
                           this.showDialog = true;
                        }}"
                     >
                     </component-button>
                     <component-dialog .show="${this.showDialog}">
                      <component-button
                        text="Dialog schließen"
                        @component-button-click="${() => {
                           this.showDialog = false;
                        }}"
                     >
                     </component-dialog>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-dialog .show="'.concat(String(this.showDialog)).concat('"></component-dialog>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
