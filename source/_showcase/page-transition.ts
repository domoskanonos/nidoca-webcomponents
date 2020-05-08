import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TransitionType } from '../effect-transition/component';
import { InputfieldComponent, InputfieldType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';

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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<effect-transition/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               ><i>TransitionComponent</i> ${I18nService.getUniqueInstance().getValue(
                  'pageripple_description'
               )}</nidoca-typography
            >
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('pageborder_typoh4')}"
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
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-flex-container
                     .flexContainerProperties="${[
                        FlexContainerProperties.CONTAINER_WIDTH_100,
                        FlexContainerProperties.TABLET_MAX_WIDTH,
                        FlexContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .flexItemProperties="${[
                        FlexItemProperties.KEYLINE_ALIGNMENT_BOTH,
                        FlexItemProperties.KEYLINE_SIZE_MEDIUM,
                        FlexItemProperties.SMARTPHONE_MAX_WIDTH,
                        FlexItemProperties.TABLET_MAX_WIDTH
                     ]}"
                     itemFlexBasisValue="50%"
                  >
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(TransitionType)}"
                           label="buttonType"
                           value="${this.transitionType}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeTransitionType(event)}"
                        ></nidoca-inputfield>
                     </nidoca-form>

                     <effect-transition transitionType="${this.transitionType}">
                        <nidoca-rich-media src="https://picsum.photos/400/400"></nidoca-rich-media>
                     </effect-transition>
                  </nidoca-flex-container>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<effect-transition '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.transitionType, TransitionType))
                        .concat(' ></effect-transition>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }

   private changeTransitionType(event: CustomEvent) {
      let transitionType: string = (<any>TransitionType)[event.detail.outputData.value];
      console.log('change transitionType: {}', transitionType);
      this.transitionType = transitionType;
   }
}
