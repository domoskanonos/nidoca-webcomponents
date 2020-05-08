import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
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
   gridAlignItems: string = GridFlexAlignItems.CENTER;

   @property()
   gridTemplateRows: string[] = ['1fr', '1fr', '1fr'];

   @property()
   gridTemplateColumns: string[] = ['1fr', '1fr', '1fr'];

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
            <nidoca-typography
               .typographyType="${TypographyType.H2}"
               text="<nidoca-grid-container/>"
            ></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               ><i>GridContainerComponent</i>${I18nService.getUniqueInstance().getValue('pagegrid_body')}</nidoca-typography
            >
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               >${I18nService.getUniqueInstance().getValue('pagegrid_body1')}</nidoca-typography
            >
            <nidoca-tabs>
               <nidoca-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></nidoca-tab>
               <nidoca-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}"
                  ><nidoca-flex-container
                     .flexContainerProperties="${[
                        FlexContainerProperties.CONTAINER_WIDTH_100,
                        FlexContainerProperties.TABLET_MAX_WIDTH,
                        FlexContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .flexItemProperties="${[
                        FlexItemProperties.KEYLINE_ALIGNMENT_BOTH,
                        FlexItemProperties.KEYLINE_SIZE_MEDIUM,
                        FlexItemProperties.SMARTPHONE_MAX_WIDTH,
                        FlexItemProperties.TABLET_MAX_WIDTH
                     ]}"
                     flexItemBasisValue="100%"
                     ><nidoca-spacer
                        spacerSize="${SpacerSize.MEDIUM}"
                        spacerAlignment="${SpacerAlignment.VERTICAL}"
                     ></nidoca-spacer>
                     <nidoca-grid-container
                        .gridJustifyItems="${GridJustifyItems.CENTER}"
                        .gridAlignItems="${GridFlexAlignItems.CENTER}"
                        .gridTemplateRows="${['1fr']}"
                        .gridTemplateColumns="${['1fr']}"
                     >
                        <nidoca-box height="auto" width="50vmin">
                           <nidoca-grid-container
                              style="background-color: var(--app-color-primary-background);"
                              gridJustifyItems="${this.gridJustifyItems}"
                              gridAlignItems="${this.gridAlignItems}"
                              .gridTemplateRows="${this.gridTemplateRows}"
                              .gridTemplateColumns="${this.gridTemplateColumns}"
                           >
                              ${this.createBox(8, 8)} ${this.createBox(9, 8)} ${this.createBox(8, 9)} ${this.createBox(8, 12)}
                              ${this.createBox(12, 8)} ${this.createBox(9, 8)} ${this.createBox(9, 9)} ${this.createBox(9, 8)}
                              ${this.createBox(9, 8)}
                           </nidoca-grid-container>
                        </nidoca-box>
                     </nidoca-grid-container>
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(GridJustifyItems)}"
                           label="gridJustifyItems"
                           value="${InputfieldComponent.enumGetKeyFromValue(GridJustifyItems, this.gridJustifyItems)}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeGridJustifyContent(event)}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(GridAlignItems)}"
                           label="gridAlignItems"
                           value="${InputfieldComponent.enumGetKeyFromValue(GridAlignItems, this.gridAlignItems)}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeGridAlignContent(event)}"
                        ></nidoca-inputfield>
                     </nidoca-form> </nidoca-flex-container
               ></nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-grid-container '
                        .concat(
                           PreviewFormatterService.getUniqueInstance().property2String(this.gridJustifyItems, GridJustifyItems)
                        )
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.gridAlignItems, GridAlignItems))
                        .concat(' .gridTemplateRows="${')
                        .concat(JSON.stringify(this.gridTemplateRows))
                        .concat('}" .gridTemplateColumns="${')
                        .concat(JSON.stringify(this.gridTemplateColumns))
                        .concat('}"></nidoca-grid-container>')}"
                  ></nidoca-code>
               </nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
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
         <nidoca-box
            style="background-color: var(--app-color-surface-background);"
            width="${width}vmin"
            height="${height}vmin"
         ></nidoca-box>
      `;
   }
}
