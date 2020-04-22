import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {
   BorderType,
   ButtonType,
   ColorScheme,
   InputfieldComponent,
   InputfieldType,
   TransitionType,
   TypographyType,
   VisibleType
} from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { PreviewFormatterService } from './preview-formatter';
import { BackgroundColorClazz, TextColorClazz } from '../effect-color/component';

@customElement('page-border')
export class PageBorder extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageborder');
   }

   @property()
   borderType: string = BorderType.ALL;

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
            <component-typography .typographyType="${TypographyType.H1}" text="BorderComponent"></component-typography>
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
                     .containerProperties="${[
                        ContainerProperties.CONTAINER_WIDTH_100,
                        ContainerProperties.TABLET_MAX_WIDTH,
                        ContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_BOTH, ItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="100%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(BorderType)}"
                           label="VisibleType"
                           value="${this.borderType}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.borderType = (<any>BorderType)[event.detail.outputData.value])}"
                        ></component-inputfield>
                     </component-form>

                     <component-border borderType="${this.borderType}">
                        <component-rich-media src="https://dummyimage.com/400x400/ffffff/ffffff"></component-rich-media>
                     </component-border>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-border '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.borderType, BorderType))
                        .concat('></component-border>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
