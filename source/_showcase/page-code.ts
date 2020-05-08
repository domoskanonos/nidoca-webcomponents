import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { TypographyType } from '..';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-code/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               ><i>Code Component</i> ${I18nService.getUniqueInstance().getValue('pagecode_body')}</nidoca-typography
            >
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}" text=""></nidoca-typography>

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
                     .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="50%"
                  >
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(CodeFormatter)}"
                           label="CodeFormatter"
                           value="${this.codeFormatter}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeCodeFormatter(event)}"
                        ></nidoca-inputfield
                        ><nidoca-inputfield
                           .inputfieldType="${InputfieldType.TEXTAREA}"
                           label="Code"
                           value="${this.code}"
                           @component-inputfield-keyup="${(event: CustomEvent) => this.changeText(event)}"
                        ></nidoca-inputfield>
                     </nidoca-form>
                     <nidoca-code codeFormatter="${this.codeFormatter}" code="${this.code}"></nidoca-code>
                  </nidoca-flex-container>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-code
                     code="${'<nidoca-code '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.codeFormatter, CodeFormatter))
                        .concat(' code="<HTML></HTML>"></nidoca-code>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
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
