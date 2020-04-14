import { customElement, html, property, query, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {
   AlignContent,
   AlignItems,
   ContainerClazzValues,
   FlexComponent,
   FlexDirection,
   FlexJustifyContent,
   FlexWrap,
   ItemClazzValues
} from '../flex-container/component';
import { ButtonType, ColorScheme, InputfieldComponent, InputfieldType, SpacerSize, TypographyType } from '..';
import { BasicService, I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-layout')
export class PageLayoutComponent extends PageAbstract {
   @property()
   containerClazzes: string[] = [ContainerClazzValues.CONTAINER_100];

   @property()
   colorScheme: string = ColorScheme.SECONDARY_COLOR;

   @property()
   itemClazzes: string[] = [ItemClazzValues.TABLET_MAX_WIDTH, ItemClazzValues.SMARTPHONE_MAX_WIDTH];

   @property()
   itemFlexBasisValue: string = 'auto';

   @property()
   flexDirection: string = FlexDirection.ROW;

   @property()
   flexWrap: string = FlexWrap.WRAP;

   @property()
   flexJustifyContent: string = FlexJustifyContent.FLEX_START;

   @property()
   alignItems: string = AlignItems.STRETCH;

   @property()
   alignContent: string = AlignContent.STRETCH;

   @query('#sample-flex-container')
   flexContainer: FlexComponent | undefined;

   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
            .containerClazzes="${[
               ContainerClazzValues.CONTAINER_50,
               ContainerClazzValues.TABLET_MAX_WIDTH,
               ContainerClazzValues.SMARTPHONE_MAX_WIDTH,
               ContainerClazzValues.SMARTPHONE_HORIZONTAL_PADDING,
               ContainerClazzValues.TABLET_HORIZONTAL_PADDING
            ]}"
            .itemClazzes="${[ItemClazzValues.KEYLINE_ALIGNMENT_HORIZONTAL, ItemClazzValues.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <component-typography .typographyType="${TypographyType.H1}" text="Layout System"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="Positionieren und Ausrichten von Elementen"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="Interactive demo"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               >Die Komponente <i>component-flex-container</i> basiert auf dem CSS Flexbox Layout Modell (display: flex). Auf
               dieser Seite können Sie diese Komponente und deren Eigenschaften ausführlich testen.</component-typography
            >

            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}">
                  <component-flex-container
                     .containerClazzes="${[ContainerClazzValues.CONTAINER_100]}"
                     .itemClazzes="${[ItemClazzValues.KEYLINE_SIZE_MEDIUM]}"
                     .itemFlexBasisValues="${['50%', '50%']}"
                  >
                     <component-container cssStyle="height:500px;">
                        <effect-color colorScheme="${this.colorScheme}">
                           <component-flex-container
                              id="sample-flex-container"
                              .containerClazzes="${this.containerClazzes}"
                              colorScheme="${this.colorScheme}"
                              .itemClazzes="${this.itemClazzes}"
                              itemFlexBasisValue="${this.itemFlexBasisValue}"
                              .flexDirection="${this.flexDirection}"
                              .flexWrap="${this.flexWrap}"
                              .flexJustifyContent="${this.flexJustifyContent}"
                              .alignItems="${this.alignItems}"
                              .alignContent="${this.alignContent}"
                           >
                              ${this.createImg(50, 50)} ${this.createImg(75, 50)} ${this.createImg(50, 75)}
                              ${this.createImg(50, 100)} ${this.createImg(100, 50)} ${this.createImg(75, 50)}
                              ${this.createImg(75, 75)} ${this.createImg(75, 50)} ${this.createImg(75, 50)}
                           </component-flex-container>
                        </effect-color>
                     </component-container>

                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(FlexDirection)}"
                           label="FlexDirection"
                           value="${this.flexDirection}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeFlexDirection(event)}"
                        ></component-inputfield>

                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(ContainerClazzValues)}"
                           label="ContainerClazzValues"
                           value="${this.containerClazzes}"
                           size="10"
                           multiple="true"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeContainerClazzes(event)}"
                        ></component-inputfield>

                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(FlexWrap)}"
                           label="FlexWrap"
                           value="${this.flexWrap}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeFlexWrap(event)}"
                        ></component-inputfield>

                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(FlexJustifyContent)}"
                           label="FlexJustifyContent"
                           value="${this.flexJustifyContent}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeFlexJustify(event)}"
                        ></component-inputfield>

                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(AlignItems)}"
                           label="AlignItems"
                           value="${this.alignItems}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeAlignItems(event)}"
                        ></component-inputfield>

                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(AlignContent)}"
                           label="AlignContent"
                           value="${this.alignContent}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeAlignContent(event)}"
                        ></component-inputfield>

                        <component-inputfield
                           label="itemFlexBasisValue"
                           value="${this.itemFlexBasisValue}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeItemFlexBasis(event)}"
                        ></component-inputfield>
                     </component-form>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${PreviewFormatterService.getUniqueInstance().format(
                        '<component-flex-container'
                           .concat(
                              PreviewFormatterService.getUniqueInstance().propertyArray2String(
                                 this.containerClazzes,
                                 ContainerClazzValues
                              )
                           )
                           .concat(PreviewFormatterService.getUniqueInstance().property2String(this.colorScheme, ColorScheme))
                           .concat(
                              PreviewFormatterService.getUniqueInstance().propertyArray2String(this.itemClazzes, ItemClazzValues)
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
                           )
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

   private changeContainerClazzes(event: CustomEvent) {
      this.containerClazzes = event.detail.outputData.value;
   }

   private createImg(width: number, height: number) {
      return html`
         <component-rich-media src="https://picsum.photos/${width}/${height}" text="Mein Bild"></component-rich-media>
      `;
   }
}
