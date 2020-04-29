import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TransitionType } from '../effect-transition/component';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';
import { ContainerProperties, ItemProperties } from '../flex-container/component';

@customElement('page-transition')
export class TransitionPage extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'TransitionEffect';
   }

   @property()
   transitionType: string = TransitionType.SLIDE_CENTER;

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
            <component-typography .typographyType="${TypographyType.H2}" text="<effect-transition/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>TransitionComponent</i> ${I18nService.getUniqueInstance().getValue('pageripple_text')}</component-typography
            >
            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('pageborder_typoh4')}"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}" text=""></component-typography>

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
                  ></component-spacer
                  ><component-flex-container
                     .containerProperties="${[
                        ContainerProperties.CONTAINER_WIDTH_100,
                        ContainerProperties.TABLET_MAX_WIDTH,
                        ContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .itemProperties="${[
                        ItemProperties.KEYLINE_ALIGNMENT_BOTH,
                        ItemProperties.KEYLINE_SIZE_MEDIUM,
                        ItemProperties.SMARTPHONE_MAX_WIDTH,
                        ItemProperties.TABLET_MAX_WIDTH
                     ]}"
                     itemFlexBasisValue="50%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(TransitionType)}"
                           label="buttonType"
                           value="${this.transitionType}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeTransitionType(event)}"
                        ></component-inputfield>
                     </component-form>

                     <effect-transition transitionType="${this.transitionType}">
                        <component-rich-media src="https://picsum.photos/400/400"></component-rich-media>
                     </effect-transition>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<effect-transition '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.transitionType, TransitionType))
                        .concat(' ></effect-transition>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }

   private changeTransitionType(event: CustomEvent) {
      let transitionType: string = (<any>TransitionType)[event.detail.outputData.value];
      console.log('change transitionType: {}', transitionType);
      this.transitionType = transitionType;
   }
}
