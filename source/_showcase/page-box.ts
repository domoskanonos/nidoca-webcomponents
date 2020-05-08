import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-box')
export class PageBox extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'BoxComponent';
   }
   @property()
   height: string = '50vmin';

   @property()
   width: string = '50vmin';

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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-box/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               ><i>BoxComponent</i>${I18nService.getUniqueInstance().getValue(
                  'pagebox_description_1'
               )}<i>FlexComponent</i>${I18nService.getUniqueInstance().getValue(
                  'pagebox_description_2'
               )}<i>GridComponent</i>${I18nService.getUniqueInstance().getValue(
                  'pagebox_description_3'
               )}<br />${I18nService.getUniqueInstance().getValue('pagebox_description_4')}
               <i>vw, vh, vmin, vmax</i>
               ${I18nService.getUniqueInstance().getValue('pagebox_description_5')}
               <i>px, em, %</i>
               ${I18nService.getUniqueInstance().getValue('pagebox_description_6')}
            </nidoca-typography>
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
                     flexItemBasisValue="100%"
                  >
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagebox_text')}"
                           value="${this.height}"
                           @component-inputfield-keyup="${(event: CustomEvent) => (this.height = event.detail.value)}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagebox_test1')}"
                           value="${this.width}"
                           @component-inputfield-keyup="${(event: CustomEvent) => (this.width = event.detail.value)}"
                        ></nidoca-inputfield>
                     </nidoca-form>
                     <nidoca-container>
                        <nidoca-box
                           style="background-color: var(--app-color-primary-background);"
                           height="${this.height}"
                           width="${this.width}"
                        >
                        </nidoca-box>
                     </nidoca-container>
                  </nidoca-flex-container>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent">
                  <nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-box height="'
                        .concat(this.height)
                        .concat('" width="')
                        .concat(this.width)
                        .concat('"></nidoca-box>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
