import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TransitionType } from '../effect-transition/component';
import { InputfieldComponent, InputfieldType, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';

@customElement('page-transition')
export class TransitionPage extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = 'TransitionComponent';
   }

   @property()
   transitionType: string = TransitionType.LEFT;

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
            <component-typography .typographyType="${TypographyType.H2}" text="<effect-transition/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>TransitionComponent</i> ist eine Komponente mit der man Inhalte anmutig einblenden kann.</component-typography
            >
            <component-typography .typographyType="${TypographyType.H4}" text="Interaktive Demo"></component-typography>
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
                     .containerClazzes="${[
                        ContainerClazzValues.CONTAINER_WIDTH_100,
                        ContainerClazzValues.TABLET_MAX_WIDTH,
                        ContainerClazzValues.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .itemClazzes="${[
                        ItemClazzValues.KEYLINE_ALIGNMENT_BOTH,
                        ItemClazzValues.KEYLINE_SIZE_MEDIUM,
                        ItemClazzValues.SMARTPHONE_MAX_WIDTH,
                        ItemClazzValues.TABLET_MAX_WIDTH
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
