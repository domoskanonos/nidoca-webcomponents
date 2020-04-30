import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-box/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
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
            </component-typography>
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>
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
                     itemFlexBasisValue="100%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagebox_text')}"
                           value="${this.height}"
                           @component-inputfield-keyup="${(event: CustomEvent) => (this.height = event.detail.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagebox_test1')}"
                           value="${this.width}"
                           @component-inputfield-keyup="${(event: CustomEvent) => (this.width = event.detail.value)}"
                        ></component-inputfield>
                     </component-form>
                     <component-container>
                        <component-box
                           style="background-color: var(--app-color-primary-background);"
                           height="${this.height}"
                           width="${this.width}"
                        >
                        </component-box>
                     </component-container>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent">
                  <component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-box height="'
                        .concat(this.height)
                        .concat('" width="')
                        .concat(this.width)
                        .concat('"></component-box>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
