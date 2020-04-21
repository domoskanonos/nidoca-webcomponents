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
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
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
            .containerClazzes="${[
               ContainerClazzValues.CONTAINER_WIDTH_50,
               ContainerClazzValues.TABLET_MAX_WIDTH,
               ContainerClazzValues.SMARTPHONE_MAX_WIDTH,
               ContainerClazzValues.SMARTPHONE_HORIZONTAL_PADDING,
               ContainerClazzValues.TABLET_HORIZONTAL_PADDING
            ]}"
            .itemClazzes="${[ItemClazzValues.KEYLINE_ALIGNMENT_HORIZONTAL, ItemClazzValues.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <component-typography .typographyType="${TypographyType.H1}" text="DialogComponent"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>BorderComponent</i> ist eine Komponente mit der man um Inhaltselemente einen Rahmen legen kann. Dabei kann der
               Rahmen das Element komplett einfassen, oder auch nur einzelne Seiten.
            </component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="Interaktive Demo"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="Hier kannst du die einzelnen Auswahlmöglichkeiten der Komponente ausprobieren."
            ></component-typography>

            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}"
                  ><component-flex-container
                     .containerClazzes="${[
                        ContainerClazzValues.CONTAINER_WIDTH_100,
                        ContainerClazzValues.TABLET_MAX_WIDTH,
                        ContainerClazzValues.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .itemClazzes="${[ItemClazzValues.KEYLINE_ALIGNMENT_BOTH, ItemClazzValues.KEYLINE_SIZE_MEDIUM]}"
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
                     code="${'<component-dialog .show="'.concat(this.showDialog).concat('"></component-dialog>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
