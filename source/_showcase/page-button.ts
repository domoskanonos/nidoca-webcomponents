import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { ButtonType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
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
         <nidoca-flex-container
            .flexContainerProperties="${[
               FlexContainerProperties.CONTAINER_WIDTH_50,
               FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING
            ]}"
            .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-button/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               ${I18nService.getUniqueInstance().getValue(
                  'pagebutton_description_1'
               )}<i>@component-button-click</i>${I18nService.getUniqueInstance().getValue('pagebutton_description_2')}
            </nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="${I18nService.getUniqueInstance().getValue('pagebutton_var')}"
            ></nidoca-typography>

            <nidoca-tabs>
               <nidoca-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></nidoca-tab>
               <nidoca-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}"
                  ><nidoca-flex-container
                     .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100, FlexContainerProperties.SMARTPHONE_MAX_WIDTH]}"
                     .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_VERTICAL, FlexItemProperties.KEYLINE_SIZE_ZERO]}"
                     itemFlexBasisValue="100%"
                  >
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(ButtonType)}"
                           label="${I18nService.getUniqueInstance().getValue('pagebutton_buttontype')}"
                           value="${this.buttonType}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeButtonType(event)}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.SWITCH}"
                           label="${I18nService.getUniqueInstance().getValue('pagebutton_leading_label')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pagebutton_leading_text')}"
                           .checked="${this.showLeadingIcon}"
                           @component-inputfield-change="${() => this.switchLeadingIcon()}"
                        ></nidoca-inputfield>
                     </nidoca-form>

                     <nidoca-button
                        buttonType="${this.buttonType}"
                        leadingIcon="${this.showLeadingIcon ? 'sentiment_satisfied_alt' : ''}"
                        text="${I18nService.getUniqueInstance().getValue('pagebutton_button_text')}"
                     ></nidoca-button> </nidoca-flex-container
               ></nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-button '
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.buttonType, ButtonType))
                        .concat(' leadingIcon="sentiment_satisfied_alt" text="')
                        .concat(I18nService.getUniqueInstance().getValue('pagebutton_button_text'))
                        .concat('"></nidoca-button>')}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
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
