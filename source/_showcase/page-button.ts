import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldInputData, InputfieldType } from '../inputfield/component';
import { ButtonType, FlexDirection, TypographyType } from '..';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-button')
export class PageInputComponent extends PageAbstract {
   @property()
   type: string = InputfieldType.TEXT;

   @property()
   showLeadingIcon: boolean = true;

   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
            .containerClazzes="${[
               ContainerClazzValues.CONTAINER_50,
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
         </component-flex-container>

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
                     ContainerClazzValues.CONTAINER_50,
                     ContainerClazzValues.TABLET_MAX_WIDTH,
                     ContainerClazzValues.SMARTPHONE_MAX_WIDTH,
                     ContainerClazzValues.SMARTPHONE_HORIZONTAL_PADDING,
                     ContainerClazzValues.TABLET_HORIZONTAL_PADDING
                  ]}"
                  .itemClazzes="${[ItemClazzValues.KEYLINE_ALIGNMENT_BOTH, ItemClazzValues.KEYLINE_SIZE_MEDIUM]}"
                  itemFlexBasisValue="50%"
               >
                  <component-form>
                     <component-inputfield
                        .inputfieldType="ButtonType"
                        .options="${InputfieldComponent.enumToComboboxItems(ButtonType)}"
                        label="buttonType"
                        value="${this.type}"
                        @component-inputfield-change="${(event: CustomEvent) => this.changeType(event)}"
                     ></component-inputfield>
                     <component-inputfield
                        .inputfieldType="${InputfieldType.CHECKBOX}"
                        label="Trailing Icon"
                        assistiveText="Es besteht die Möglichkeit an jedes Eingabefeld links ein Icon zu plazieren."
                        .checked="${this.showLeadingIcon}"
                        @component-inputfield-change="${() => this.switchLeadingIcon()}"
                     ></component-inputfield>
                  </component-form>

                  <component-button leadingIcon="${this.showLeadingIcon ? 'account_circle' : ''}">Mein Button</component-button>
               </component-flex-container></component-tab-content
            >
            <component-tab-content slot="tabContent"><component-code>spodkpofspdofj</component-code></component-tab-content>
         </component-tabs>
      `;
   }

   private changeType(event: CustomEvent) {
      let type: string = (<any>InputfieldType)[event.detail.outputData.value];
      console.log('change type: {}', type);
      this.type = type;
   }

   private switchLeadingIcon() {
      this.showLeadingIcon = !Boolean(this.showLeadingIcon);
   }
}
