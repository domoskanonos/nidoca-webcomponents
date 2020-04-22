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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-visible/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>VisibleComponent</i> ist eine Komponente deren einzige Aufgabe es ist Komponenten sichtbar und unsichtbar zu machen.
               Dabei kann man noch entscheiden ob der eigentliche Platz der Komponente bestehen bleibt (<i>invisible</i>) oder
               nicht (<i>hide</i>).
            </component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="Interaktive Demo"></component-typography>
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
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(VisibleType)}"
                           label="VisibleType"
                           value="${this.visibleType}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.visibleType = (<any>VisibleType)[event.detail.outputData.value])}"
                        ></component-inputfield>
                     </component-form>

                     <component-border borderType="${BorderType.ALL}">
                        <component-visible visibleType="${this.visibleType}">
                           <component-rich-media src="https://picsum.photos/400/400"></component-rich-media>
                        </component-visible>
                     </component-border>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-visible '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.visibleType, VisibleType))
                        .concat('></component-visible>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
