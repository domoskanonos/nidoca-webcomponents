import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ButtonType, ColorScheme, InputfieldComponent, InputfieldType, TypographyType } from '..';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-grid')
export class PageGrid extends PageAbstract {
   @property()
   gridJustifyItems: string = GridJustifyItems.START;

   @property()
   gridAlignItems: string = GridAlignItems.START;

   @property()
   gridTemplateRows: string[] = ['1fr', '1fr', '1fr'];

   @property()
   gridTemplateColumns: string[] = ['1fr', '1fr', '1fr'];

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
            <component-typography .typographyType="${TypographyType.H1}" text="Grid Layout"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="CSS-Rasterlayout ist das leistungsstärkste in CSS verfügbare Layoutsystem. 
                        Es ist ein 2-dimensionales System, d.h. es kann sowohl Spalten als auch Zeilen verarbeiten,
                        im Gegensatz zu Flexbox, das weitgehend ein 1-dimensionales System ist. Sie arbeiten mit Grid-Layout,
                        indem Sie CSS-Regeln sowohl auf ein übergeordnetes Element (das zum Grid-Container wird) als auch auf die untergeordneten Elemente dieses Elements (die zu Grid-Elementen werden) anwenden."
            ></component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="Interactive demo"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="This demo lets you preview the grid layout component, its variations, and configuration options."
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
                     itemFlexBasisValue="50%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(GridJustifyItems)}"
                           label="gridJustifyItems"
                           value="${this.gridJustifyItems}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeGridJustifyContent(event)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(GridAlignItems)}"
                           label="gridAlignItems"
                           value="${this.gridAlignItems}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeGridAlignContent(event)}"
                        ></component-inputfield>
                     </component-form>

                     <effect-color colorScheme="${ColorScheme.PRIMARY_SCHEME}">
                        <component-grid-container
                           gridJustifyItems="${this.gridJustifyItems}"
                           gridAlignItems="${this.gridAlignItems}"
                           .gridTemplateRows="${this.gridTemplateRows}"
                           .gridTemplateColumns="${this.gridTemplateColumns}"
                        >
                           ${this.createImg(50, 50)} ${this.createImg(75, 50)} ${this.createImg(50, 75)}
                           ${this.createImg(50, 100)} ${this.createImg(100, 50)} ${this.createImg(75, 50)}
                           ${this.createImg(75, 75)} ${this.createImg(75, 50)} ${this.createImg(75, 50)}
                        </component-grid-container>
                     </effect-color>
                  </component-flex-container></component-tab-content
               >
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${PreviewFormatterService.getUniqueInstance().format(
                        '<component-grid-container '
                           .concat(
                              PreviewFormatterService.getUniqueInstance().property2String(this.gridJustifyItems, GridJustifyItems)
                           )
                           .concat(
                              PreviewFormatterService.getUniqueInstance().property2String(this.gridAlignItems, GridAlignItems)
                           )
                           .concat(' .gridTemplateRows="${')
                           .concat(JSON.stringify(this.gridTemplateRows))
                           .concat('}" .gridTemplateColumns="${')
                           .concat(JSON.stringify(this.gridTemplateColumns))
                           .concat('}"></component-grid-container>')
                     )}"
                  ></component-code>
               </component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }

   private changeGridJustifyContent(event: CustomEvent) {
      let gridJustifyItems: string = (<any>GridJustifyItems)[event.detail.outputData.value];
      console.log('change gridJustifyItems: {}', gridJustifyItems);
      this.gridJustifyItems = gridJustifyItems;
   }

   private changeGridAlignContent(event: CustomEvent) {
      let gridAlignItems: string = (<any>GridAlignItems)[event.detail.outputData.value];
      console.log('change gridAlignItems: {}', gridAlignItems);
      this.gridAlignItems = gridAlignItems;
   }

   private createImg(width: number, height: number) {
      return html`
         <component-rich-media src="https://picsum.photos/${width}/${height}" text="Mein Bild"></component-rich-media>
      `;
   }
}
