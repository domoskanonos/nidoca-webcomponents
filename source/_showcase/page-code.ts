import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { TypographyType } from '..';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';
import { CodeFormatter } from '../code/component';

@customElement('page-code')
export class PageCode extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagecode');
   }

   @property()
   codeFormatter: string = CodeFormatter.HTML;

   @property()
   code: string = '<html></html>';

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-code/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>Code Component</i> ${I18nService.getUniqueInstance().getValue('pagecode_body')}</component-typography
            >
            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"></component-typography>
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
                     itemFlexBasisValue="50%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(CodeFormatter)}"
                           label="CodeFormatter"
                           value="${this.codeFormatter}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeCodeFormatter(event)}"
                        ></component-inputfield
                        ><component-inputfield
                           .inputfieldType="${InputfieldType.TEXTAREA}"
                           label="Code"
                           value="${this.code}"
                           @component-inputfield-keyup="${(event: CustomEvent) => this.changeText(event)}"
                        ></component-inputfield>
                     </component-form>
                     <component-code codeFormatter="${this.codeFormatter}" code="${this.code}"></component-code>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-code '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.codeFormatter, CodeFormatter))
                        .concat(' code="<HTML></HTML>"></component-code>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }

   private changeCodeFormatter(event: CustomEvent) {
      let codeFormatter: string = (<any>CodeFormatter)[event.detail.outputData.value];
      console.log('change codeFormatter: {}', codeFormatter);
      this.codeFormatter = codeFormatter;
   }
   private changeText(event: CustomEvent) {
      let code: string = event.detail.value;
      console.log('change code: {}', code);
      this.code = code;
   }
}
