import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
import { ColorScheme, InputfieldComponent, InputfieldType, RichMediaType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { GridAlignItems } from '../grid-container/component';

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-spacer/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>SpacerComponent</i> wird eingesetzt um zwischen einzelnen Komponenten Abstand zu erzeugen. Dabei kann man
               horizontalen, bzw. vertikalen Abstand erzeugen, oder auch eine Art unsichtbaren Rahmen um einzelne Elemente
               erzeugen.
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
                     .containerClazzes="${[
                        ContainerClazzValues.CONTAINER_WIDTH_100,
                        ContainerClazzValues.TABLET_MAX_WIDTH,
                        ContainerClazzValues.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .itemClazzes="${[ItemClazzValues.KEYLINE_ALIGNMENT_BOTH, ItemClazzValues.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="100%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           label="Ausrichtung"
                           .options="${InputfieldComponent.enumToComboboxItems(SpacerAlignment)}"
                           value="${InputfieldComponent.enumGetKeyFromValue(SpacerAlignment, this.spacerAlignment)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.spacerAlignment = (<any>SpacerAlignment)[event.detail.outputData.value])}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           label="Größe Abstand"
                           .options="${InputfieldComponent.enumToComboboxItems(SpacerSize)}"
                           value="${InputfieldComponent.enumGetKeyFromValue(SpacerSize, this.spacerSize)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.spacerSize = (<any>SpacerSize)[event.detail.outputData.value])}"
                        ></component-inputfield>
                     </component-form>
                     <effect-color colorScheme="${ColorScheme.PRIMARY_SCHEME}">
                        <component-box width="min-content" height="min-content">
                           <component-spacer spacerAlignment="${this.spacerAlignment}" spacerSize="${this.spacerSize}">
                              <component-rich-media src="https://picsum.photos/200/200"></component-rich-media>
                           </component-spacer>
                        </component-box>
                     </effect-color>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
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
