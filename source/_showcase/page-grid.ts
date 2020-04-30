import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
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
               ><i>GridContainerComponent</i>${I18nService.getUniqueInstance().getValue('pagegrid_body')}</component-typography
            >
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               >${I18nService.getUniqueInstance().getValue('pagegrid_body1')}</component-typography
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
                     itemFlexBasisValue="100%"
                     ><component-spacer
                        spacerSize="${SpacerSize.MEDIUM}"
                        spacerAlignment="${SpacerAlignment.VERTICAL}"
                     ></component-spacer>
                     <component-grid-container
                        .gridJustifyItems="${GridJustifyItems.CENTER}"
                        .gridAlignItems="${GridAlignItems.CENTER}"
                        .gridTemplateRows="${['1fr']}"
                        .gridTemplateColumns="${['1fr']}"
                     >
                        <component-box height="auto" width="50vmin">
                           <component-grid-container
                              style="background-color: var(--app-color-primary-background);"
                              gridJustifyItems="${this.gridJustifyItems}"
                              gridAlignItems="${this.gridAlignItems}"
                              .gridTemplateRows="${this.gridTemplateRows}"
                              .gridTemplateColumns="${this.gridTemplateColumns}"
                           >
                              ${this.createBox(8, 8)} ${this.createBox(9, 8)} ${this.createBox(8, 9)} ${this.createBox(8, 12)}
                              ${this.createBox(12, 8)} ${this.createBox(9, 8)} ${this.createBox(9, 9)} ${this.createBox(9, 8)}
                              ${this.createBox(9, 8)}
                           </component-grid-container>
                        </component-box>
                     </component-grid-container>
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
                     </component-form> </component-flex-container
               ></component-tab-content>
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

   private createBox(width: number, height: number) {
      return html`
         <component-box
            style="background-color: var(--app-color-surface-background);"
            width="${width}vmin"
            height="${height}vmin"
         ></component-box>
      `;
   }
}
