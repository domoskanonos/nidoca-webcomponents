import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { ButtonType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-button')
export class PageButton extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagebutton');
   }

   @property()
   buttonType: string = ButtonType.PRIMARY;

   @property()
   showLeadingIcon: boolean = true;

   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
            .containerProperties="${[
               ContainerProperties.CONTAINER_WIDTH_50,
               ContainerProperties.SMARTPHONE_MAX_WIDTH,
               ContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
            ]}"
            .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, ItemProperties.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <component-typography .typographyType="${TypographyType.H2}" text="<component-button/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               ${I18nService.getUniqueInstance().getValue(
                  'pagebutton_description_1'
               )}<i>@component-button-click</i>${I18nService.getUniqueInstance().getValue('pagebutton_description_2')}
            </component-typography>
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagebutton_var')}"
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
                     .containerProperties="${[ContainerProperties.CONTAINER_WIDTH_100, ContainerProperties.SMARTPHONE_MAX_WIDTH]}"
                     .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_VERTICAL, ItemProperties.KEYLINE_SIZE_ZERO]}"
                     itemFlexBasisValue="100%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(ButtonType)}"
                           label="${I18nService.getUniqueInstance().getValue('pagebutton_buttontype')}"
                           value="${this.buttonType}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeButtonType(event)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.CHECKBOX}"
                           label="${I18nService.getUniqueInstance().getValue('pagebutton_leading_label')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pagebutton_leading_text')}"
                           .checked="${this.showLeadingIcon}"
                           @component-inputfield-change="${() => this.switchLeadingIcon()}"
                        ></component-inputfield>
                     </component-form>

                     <component-button
                        buttonType="${this.buttonType}"
                        leadingIcon="${this.showLeadingIcon ? 'sentiment_satisfied_alt' : ''}"
                        text="${I18nService.getUniqueInstance().getValue('pagebutton_button_text')}"
                     ></component-button> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-button '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.buttonType, ButtonType))
                        .concat(' leadingIcon="sentiment_satisfied_alt" text="')
                        .concat(I18nService.getUniqueInstance().getValue('pagebutton_button_text'))
                        .concat('"></component-button>')}"
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
