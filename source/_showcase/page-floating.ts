import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { ButtonType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';
import { IconShadowType } from '../icon/component';

@customElement('page-floating')
export class PageFloating extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagefloating');
   }

   @property()
   height: string = 'auto';

   @property()
   width: string = 'auto';

   @property()
   left: string = 'auto';

   @property()
   top: string = 'auto';

   @property()
   right: string = '20px';

   @property()
   bottom: string = 'auto';

   getMainComponent(): TemplateResult {
      return html`
         <component-floating-container
            left="${this.left}"
            right="${this.right}"
            top="${this.top}"
            bottom="${this.bottom}"
            height="${this.height}"
            width="${this.width}"
         >
            <component-icon
               clickable="true"
               icon="thumb_up_alt"
               round="true"
               color="#ffffff"
               backgroundColor="#0d47a1"
               size="36"
               .iconShadowType="${IconShadowType.DEFAULT_SHADOW}"
            ></component-icon>
         </component-floating-container>
         <component-flex-container
            .flexContainerProperties="${[
               FlexContainerProperties.CONTAINER_WIDTH_50,
               FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING
            ]}"
            .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <component-typography
               .typographyType="${TypographyType.H2}"
               text="<component-floating-container/>"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               <i>FloatingComponent</i>${I18nService.getUniqueInstance().getValue('pagefloating_description')}
            </component-typography>
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               ${I18nService.getUniqueInstance().getValue('pagefloating_demo_description')}
            </component-typography>

            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}"
                  ><component-flex-container
                     .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100, FlexContainerProperties.SMARTPHONE_MAX_WIDTH]}"
                     .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_VERTICAL, FlexItemProperties.KEYLINE_SIZE_ZERO]}"
                     itemFlexBasisValue="100%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagefloating_height_label')}"
                           .value="${this.height}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.height = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagefloating_width_label')}"
                           .value="${this.width}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.width = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagefloating_left_label')}"
                           .value="${this.left}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.left = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagefloating_right_label')}"
                           .value="${this.right}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.right = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagefloating_top_label')}"
                           .value="${this.top}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.top = event.detail.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="${I18nService.getUniqueInstance().getValue('pagefloating_bottom_label')}"
                           .value="${this.bottom}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.bottom = event.detail.value)}"
                        ></component-inputfield>
                     </component-form> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code code="<component-floating-container></component-floating-container>"> </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
