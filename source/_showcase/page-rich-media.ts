import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
import { ButtonType, InputfieldComponent, InputfieldType, RichMediaType, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-rich-media')
export class pagerichmediaComponent extends PageAbstract {
   @property()
   src: string = 'https://picsum.photos/400/400';

   @property()
   richMediaType: string = RichMediaType.IMG;

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
            <component-typography .typographyType="${TypographyType.H1}" text="Medien"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="Die Komponente RichMediaComponent wird dazu verwenden, Bilder und Videos darzustellen."
            ></component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="Interaktive Demo"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="Hier können Sie die Komponente ausführlich testen. Anschließend können Sie den zugehörigen Quellcode unter 'Code' begutachten"
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
                           label="richMediaType"
                           .options="${InputfieldComponent.enumToComboboxItems(RichMediaType)}"
                           value="${this.richMediaType}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeRichMediaType(event)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="Link"
                           value="${this.src}"
                           assistiveText="Geben Sie hier den Link ihres Bildes oder Videos ein"
                        ></component-inputfield>
                     </component-form>
                     <component-rich-media
                        richMediaType="${this.richMediaType}"
                        src="${this.src}"
                     ></component-rich-media> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-rich-media '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.richMediaType, RichMediaType))
                        .concat(' src="')
                        .concat(this.src)
                        .concat('">\n</component-rich-media>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
   private changeRichMediaType(event: CustomEvent) {
      let richMediaType: string = (<any>RichMediaType)[event.detail.outputData.value];
      console.log('change richMediaType: {}', richMediaType);
      this.richMediaType = richMediaType;
   }
}
