import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType, TypographyType } from '..';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-grid')
export class PageGrid extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagegrid');
   }

   @property()
   gridJustifyItems: string = GridJustifyItems.CENTER;

   @property()
   gridAlignItems: string = GridAlignItems.CENTER;

   @property()
   gridTemplateRows: string[] = ['1fr', '1fr', '1fr'];

   @property()
   gridTemplateColumns: string[] = ['1fr', '1fr', '1fr'];

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
            <component-typography
               .typographyType="${TypographyType.H2}"
               text="<component-grid-container/>"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>GridContainerComponent</i> ist die Umsetzung des CSS Grid-Layouts (<i>display:grid</i>), eines der
               leistungsstärkste in CSS verfügbare Layoutsystem. <br />
               Es ist ein 2-dimensionales System, d.h. es kann sowohl Spalten als auch Zeilen verarbeiten. Im Gegensatz zum
               Flex-Layout (display:flex), welches weitgehend ein 1-dimensionales System ist.</component-typography
            >
            <component-typography .typographyType="${TypographyType.H4}" text="Interaktive Demo"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               >Hier können Sie die Komponente ausführlich testen. Anschließend können Sie den zugehörigen Quellcode unter
               <i>Code</i> begutachten</component-typography
            >
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
                     .itemProperties="${[
                        ItemProperties.KEYLINE_ALIGNMENT_BOTH,
                        ItemProperties.KEYLINE_SIZE_MEDIUM,
                        ItemProperties.SMARTPHONE_MAX_WIDTH,
                        ItemProperties.TABLET_MAX_WIDTH
                     ]}"
                     itemFlexBasisValue="50%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(GridJustifyItems)}"
                           label="gridJustifyItems"
                           value="${InputfieldComponent.enumGetKeyFromValue(GridJustifyItems, this.gridJustifyItems)}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeGridJustifyContent(event)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(GridAlignItems)}"
                           label="gridAlignItems"
                           value="${InputfieldComponent.enumGetKeyFromValue(GridAlignItems, this.gridAlignItems)}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeGridAlignContent(event)}"
                        ></component-inputfield>
                     </component-form>

                     <effect-color backgroundColor="var(--app-color-primary-background)">
                        <component-grid-container
                           gridJustifyItems="${this.gridJustifyItems}"
                           gridAlignItems="${this.gridAlignItems}"
                           .gridTemplateRows="${this.gridTemplateRows}"
                           .gridTemplateColumns="${this.gridTemplateColumns}"
                        >
                           ${this.createImg(7, 7)} ${this.createImg(9, 7)} ${this.createImg(7, 9)} ${this.createImg(7, 12)}
                           ${this.createImg(12, 7)} ${this.createImg(9, 7)} ${this.createImg(9, 9)} ${this.createImg(9, 7)}
                           ${this.createImg(9, 7)}
                        </component-grid-container>
                     </effect-color>
                  </component-flex-container></component-tab-content
               >
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-grid-container '
                        .concat(
                           PreviewFormatterService.getUniqueInstance().property2String(this.gridJustifyItems, GridJustifyItems)
                        )
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.gridAlignItems, GridAlignItems))
                        .concat(' .gridTemplateRows="${')
                        .concat(JSON.stringify(this.gridTemplateRows))
                        .concat('}" .gridTemplateColumns="${')
                        .concat(JSON.stringify(this.gridTemplateColumns))
                        .concat('}"></component-grid-container>')}"
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
         <effect-color backgroundColor="var(--app-color-secondary-background)">
            <component-box width="${width}vmin" height="${height}vmin"></component-box>
         </effect-color>
      `;
   }
}
