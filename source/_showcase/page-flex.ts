import { customElement, html, property, query, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {
   AlignContent,
   AlignItems,
   ContainerProperties,
   FlexComponent,
   FlexDirection,
   FlexJustifyContent,
   FlexWrap,
   ItemProperties
} from '../flex-container/component';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-layout')
export class PageLayoutComponent extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagelayout');
   }

   @property()
   containerProperties: string[] = [ContainerProperties.CONTAINER_WIDTH_100, ContainerProperties.CONTAINER_HEIGHT_100];

   @property()
   flexDirection: string = FlexDirection.ROW;

   @property()
   flexWrap: string = FlexWrap.WRAP;

   @property()
   flexJustifyContent: string = FlexJustifyContent.CENTER;

   @property()
   alignContent: string = AlignContent.CENTER;

   @property()
   itemProperties: string[] = [];

   @property()
   itemFlexBasisValue: string = 'auto';

   @property()
   alignItems: string = AlignItems.START;

   getMainComponent(): TemplateResult {
      return html`
         <component-floating-container top="200px" left="50%">
            <component-box height="30vmin" width="30vmin">
               <component-flex-container
                  style="background-color: var(--app-color-primary-background);"
                  .containerProperties="${this.containerProperties}"
                  .itemProperties="${this.itemProperties}"
                  itemFlexBasisValue="${this.itemFlexBasisValue}"
                  .flexDirection="${this.flexDirection}"
                  .flexWrap="${this.flexWrap}"
                  .flexJustifyContent="${this.flexJustifyContent}"
                  .alignItems="${this.alignItems}"
                  .alignContent="${this.alignContent}"
               >
                  ${this.createBox(3, 3)} ${this.createBox(6, 3)} ${this.createBox(3, 6)} ${this.createBox(3, 6)}
                  ${this.createBox(6, 3)} ${this.createBox(6, 3)} ${this.createBox(6, 6)} ${this.createBox(6, 3)}
                  ${this.createBox(6, 3)}
               </component-flex-container>
            </component-box>
         </component-floating-container>

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
               text="<component-flex-container/>"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>component-flex-container</i> ${I18nService.getUniqueInstance().getValue('pageflex_body')}</component-typography
            >
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               >${I18nService.getUniqueInstance().getValue('pageflex_body1')}
            </component-typography>

            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer>
                  <component-flex-container
                     .containerProperties="${[ContainerProperties.CONTAINER_WIDTH_100]}"
                     .itemProperties="${[ItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     .itemFlexBasisValues="${['auto', '100%', '100%']}"
                     .flexJustifyContent="${FlexJustifyContent.CENTER}"
                  >
                     <component-typography .typographyType="${TypographyType.H4}"
                        >${I18nService.getUniqueInstance().getValue('pageflex_demo_properties')}</component-typography
                     >
                     <component-box height="350px" width="100%">
                        <component-form>
                           <component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(FlexDirection)}"
                              label="${I18nService.getUniqueInstance().getValue('pageflex_direction')}"
                              value="${this.flexDirection}"
                              @component-inputfield-change="${(event: CustomEvent) => this.changeFlexDirection(event)}"
                           ></component-inputfield>

                           <component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(FlexWrap)}"
                              label="${I18nService.getUniqueInstance().getValue('pageflex_wrap')}"
                              .value="${InputfieldComponent.enumGetKeyFromValue(FlexWrap, this.flexWrap)}"
                              @component-inputfield-change="${(event: CustomEvent) => this.changeFlexWrap(event)}"
                           ></component-inputfield>

                           <component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(FlexJustifyContent)}"
                              label="${I18nService.getUniqueInstance().getValue('pageflex_justify')}"
                              .value="${InputfieldComponent.enumGetKeyFromValue(FlexJustifyContent, this.flexJustifyContent)}"
                              @component-inputfield-change="${(event: CustomEvent) => this.changeFlexJustify(event)}"
                           ></component-inputfield>

                           <component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(AlignItems)}"
                              label="${I18nService.getUniqueInstance().getValue('pageflex_align')}"
                              .value="${InputfieldComponent.enumGetKeyFromValue(AlignItems, this.alignItems)}"
                              @component-inputfield-change="${(event: CustomEvent) => this.changeAlignItems(event)}"
                           ></component-inputfield>

                           <component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(AlignContent)}"
                              label="${I18nService.getUniqueInstance().getValue('pageflex_align_content')}"
                              .value="${InputfieldComponent.enumGetKeyFromValue(AlignContent, this.alignContent)}"
                              @component-inputfield-change="${(event: CustomEvent) => this.changeAlignContent(event)}"
                           ></component-inputfield>

                           <component-inputfield
                              label="${I18nService.getUniqueInstance().getValue('pageflex_standard')}"
                              value="${this.itemFlexBasisValue}"
                              @component-inputfield-change="${(event: CustomEvent) => this.changeItemFlexBasis(event)}"
                           ></component-inputfield>

                           <component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(ContainerProperties)}"
                              label="${I18nService.getUniqueInstance().getValue('pageflex_container')}"
                              .value="${this.containerProperties}"
                              size="10"
                              multiple="true"
                              @component-inputfield-change="${(event: CustomEvent) =>
                                 (this.containerProperties = event.detail.outputData.value)}"
                           ></component-inputfield>

                           <component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(ItemProperties)}"
                              label="${I18nService.getUniqueInstance().getValue('pageflex_content')}"
                              .value="${this.itemProperties}"
                              size="10"
                              multiple="true"
                              @component-inputfield-change="${(event: CustomEvent) =>
                                 (this.itemProperties = event.detail.outputData.value)}"
                           ></component-inputfield>
                        </component-form>
                     </component-box>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-flex-container'
                        .concat(
                           PreviewFormatterService.getUniqueInstance().propertyArray2String(
                              this.containerProperties,
                              ContainerProperties
                           )
                        )
                        .concat(
                           PreviewFormatterService.getUniqueInstance().propertyArray2String(this.itemProperties, ItemProperties)
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
                              .concat('></component-flex-container>')
                        )}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
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
         <component-box
            style="background-color: var(--app-color-surface-background);"
            width="${width}vmin"
            height="${height}vmin"
         ></component-box>
      `;
   }
}
