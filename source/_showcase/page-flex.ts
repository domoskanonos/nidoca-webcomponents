import { customElement, html, property, query, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {
   AlignContent,
   AlignItems,
   FlexContainerProperties,
   FlexComponent,
   FlexDirection,
   FlexJustifyContent,
   FlexWrap,
   FlexItemProperties
} from '../flex-container/component';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';

@customElement('page-layout')
export class PageLayoutComponent extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagelayout');
   }

   @property()
   flexContainerProperties: string[] = [FlexContainerProperties.CONTAINER_WIDTH_100, FlexContainerProperties.CONTAINER_HEIGHT_100];

   @property()
   flexDirection: string = FlexDirection.ROW;

   @property()
   flexWrap: string = FlexWrap.WRAP;

   @property()
   flexJustifyContent: string = FlexJustifyContent.SPACE_AROUND;

   @property()
   alignContent: string = AlignContent.SPACE_AROUND;

   @property()
   flexItemProperties: string[] = [];

   @property()
   itemFlexBasisValue: string = 'auto';

   @property()
   alignItems: string = AlignItems.CENTER;

   getMainComponent(): TemplateResult {
      return html`
         <nidoca-floating-container
            top="var(--menubar-height)"
            width="100%"
            style="background-color: var(--app-color-surface-background);"
            ><nidoca-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               <nidoca-grid-container
                  .gridJustifyItems="${GridJustifyItems.CENTER}"
                  .gridAlignItems="${GridAlignItems.CENTER}"
                  .gridTemplateRows="${['1fr']}"
                  .gridTemplateColumns="${['1fr']}"
               >
                  <nidoca-box height="40vmin" width="40vmin">
                     <nidoca-flex-container
                        style="background-color: var(--app-color-primary-background);"
                        .flexContainerProperties="${this.flexContainerProperties}"
                        .flexItemProperties="${this.flexItemProperties}"
                        itemFlexBasisValue="${this.itemFlexBasisValue}"
                        .flexDirection="${this.flexDirection}"
                        .flexWrap="${this.flexWrap}"
                        .flexJustifyContent="${this.flexJustifyContent}"
                        .alignItems="${this.alignItems}"
                        .alignContent="${this.alignContent}"
                     >
                        ${this.createBox(4, 4)} ${this.createBox(7, 4)} ${this.createBox(4, 7)} ${this.createBox(4, 7)}
                        ${this.createBox(9, 5)} ${this.createBox(7, 5)} ${this.createBox(9, 7)} ${this.createBox(9, 5)}
                        ${this.createBox(7, 4)}
                     </nidoca-flex-container>
                  </nidoca-box></nidoca-grid-container
               >
            </nidoca-spacer>
         </nidoca-floating-container>
         <nidoca-spacer size="22vmin" spacerAlignment="${SpacerAlignment.VERTICAL}"></nidoca-spacer>

         <nidoca-flex-container
            .flexContainerProperties="${[
               FlexContainerProperties.CONTAINER_WIDTH_50,
               FlexContainerProperties.TABLET_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
               FlexContainerProperties.TABLET_HORIZONTAL_PADDING
            ]}"
            .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <nidoca-typography
               .typographyType="${TypographyType.H2}"
               text="<nidoca-flex-container/>"
            ></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               ><i>component-flex-container</i> ${I18nService.getUniqueInstance().getValue('pageflex_body')}</nidoca-typography
            >
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               >${I18nService.getUniqueInstance().getValue('pageflex_body1')}
            </nidoca-typography>

            <nidoca-tabs>
               <nidoca-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></nidoca-tab>
               <nidoca-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer>
                  <nidoca-flex-container
                     .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
                     .flexItemProperties="${[FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     .itemFlexBasisValues="${['auto', '100%', '100%']}"
                     .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
                  >
                     <nidoca-typography .typographyType="${TypographyType.H4}"
                        >${I18nService.getUniqueInstance().getValue('pageflex_demo_properties')}</nidoca-typography
                     >

                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(FlexDirection)}"
                           label="${I18nService.getUniqueInstance().getValue('pageflex_direction')}"
                           value="${this.flexDirection}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeFlexDirection(event)}"
                        ></nidoca-inputfield>

                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(FlexWrap)}"
                           label="${I18nService.getUniqueInstance().getValue('pageflex_wrap')}"
                           .value="${InputfieldComponent.enumGetKeyFromValue(FlexWrap, this.flexWrap)}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeFlexWrap(event)}"
                        ></nidoca-inputfield>

                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(FlexJustifyContent)}"
                           label="${I18nService.getUniqueInstance().getValue('pageflex_justify')}"
                           .value="${InputfieldComponent.enumGetKeyFromValue(FlexJustifyContent, this.flexJustifyContent)}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeFlexJustify(event)}"
                        ></nidoca-inputfield>

                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(AlignItems)}"
                           label="${I18nService.getUniqueInstance().getValue('pageflex_align')}"
                           .value="${InputfieldComponent.enumGetKeyFromValue(AlignItems, this.alignItems)}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeAlignItems(event)}"
                        ></nidoca-inputfield>

                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(AlignContent)}"
                           label="${I18nService.getUniqueInstance().getValue('pageflex_align_content')}"
                           .value="${InputfieldComponent.enumGetKeyFromValue(AlignContent, this.alignContent)}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeAlignContent(event)}"
                        ></nidoca-inputfield>

                        <nidoca-inputfield
                           label="${I18nService.getUniqueInstance().getValue('pageflex_standard')}"
                           value="${this.itemFlexBasisValue}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeItemFlexBasis(event)}"
                        ></nidoca-inputfield>

                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(FlexContainerProperties)}"
                           label="${I18nService.getUniqueInstance().getValue('pageflex_container')}"
                           .value="${this.flexContainerProperties}"
                           size="10"
                           multiple="true"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.flexContainerProperties = event.detail.outputData.value)}"
                        ></nidoca-inputfield>

                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(FlexItemProperties)}"
                           label="${I18nService.getUniqueInstance().getValue('pageflex_content')}"
                           .value="${this.flexItemProperties}"
                           size="10"
                           multiple="true"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.flexItemProperties = event.detail.outputData.value)}"
                        ></nidoca-inputfield>
                     </nidoca-form>
                  </nidoca-flex-container>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-flex-container'
                        .concat(
                           PreviewFormatterService.getUniqueInstance().propertyArray2String(
                              this.flexContainerProperties,
                              FlexContainerProperties
                           )
                        )
                        .concat(
                           PreviewFormatterService.getUniqueInstance().propertyArray2String(this.flexItemProperties, FlexItemProperties)
                        )
                        .concat(
                           'itemFlexBasisValue="'
                              .concat(this.itemFlexBasisValue)
                              .concat('"')
                              .concat(
                                 PreviewFormatterService.getUniqueInstance().property2String(this.flexDirection, FlexDirection)
                              )
                              .concat(PreviewFormatterService.getUniqueInstance().property2String(this.flexWrap, FlexWrap))
                              .concat(
                                 PreviewFormatterService.getUniqueInstance().property2String(
                                    this.flexJustifyContent,
                                    FlexJustifyContent
                                 )
                              )
                              .concat(PreviewFormatterService.getUniqueInstance().property2String(this.alignItems, AlignItems))
                              .concat(
                                 PreviewFormatterService.getUniqueInstance().property2String(this.alignContent, AlignContent)
                              )
                              .concat('></nidoca-flex-container>')
                        )}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }

   private changeFlexDirection(event: CustomEvent) {
      this.flexDirection = (<any>FlexDirection)[event.detail.outputData.value];
   }

   private changeFlexWrap(event: CustomEvent) {
      this.flexWrap = (<any>FlexWrap)[event.detail.outputData.value];
   }

   private changeFlexJustify(event: CustomEvent) {
      this.flexJustifyContent = (<any>FlexJustifyContent)[event.detail.outputData.value];
   }

   private changeAlignItems(event: CustomEvent) {
      this.alignItems = (<any>AlignItems)[event.detail.outputData.value];
   }

   private changeAlignContent(event: CustomEvent) {
      this.alignContent = (<any>AlignContent)[event.detail.outputData.value];
   }

   private changeItemFlexBasis(event: CustomEvent) {
      this.itemFlexBasisValue = event.detail.outputData.value;
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
