import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { ButtonType, ColorScheme, TypographyType } from '..';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-button')
export class PageButton extends PageAbstract {
   @property()
   buttonType: string = ButtonType.CONTAINED;

   @property()
   showLeadingIcon: boolean = true;

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
            <component-typography .typographyType="${TypographyType.H1}" text="Buttons"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="Buttons allow users to take actions, and make choices, with a single tap."
            ></component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="Interactive demo"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="This demo lets you preview the button component, its variations, and configuration options. Each tab displays a different type of button."
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
                           .options="${InputfieldComponent.enumToComboboxItems(ButtonType)}"
                           label="buttonType"
                           value="${this.buttonType}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeButtonType(event)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.CHECKBOX}"
                           label="Trailing Icon"
                           assistiveText="Es besteht die Möglichkeit an jeden Button links ein Icon zu plazieren."
                           .checked="${this.showLeadingIcon}"
                           @component-inputfield-change="${() => this.switchLeadingIcon()}"
                        ></component-inputfield>
                     </component-form>

                     <component-button
                        buttonType="${this.buttonType}"
                        leadingIcon="${this.showLeadingIcon ? 'sentiment_satisfied_alt' : ''}"
                        text="Mein Button"
                     ></component-button> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-button '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.buttonType, ButtonType))
                        .concat(' leadingIcon="sentiment_satisfied_alt" text="Mein&nbsp;Button"></component-button>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }

   private changeButtonType(event: CustomEvent) {
      let buttonType: string = (<any>ButtonType)[event.detail.outputData.value];
      console.log('change buttonType: {}', buttonType);
      this.buttonType = buttonType;
   }

   private switchLeadingIcon() {
      this.showLeadingIcon = !Boolean(this.showLeadingIcon);
   }
}
