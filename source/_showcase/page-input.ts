import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { BorderType, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';

@customElement('page-inputfield')
export class PageInputComponent extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageinput');
   }

   @property()
   type: string = InputfieldType.TEXT;

   @property()
   showLeadingIcon: boolean = true;

   @property()
   showTrailingIcon: boolean = true;

   @property()
   leadingIconClickable: boolean = false;

   @property()
   trailingIconClickable: boolean = false;

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-inputfield/>"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="Text fields let users enter and edit text."
            ></component-typography>
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="This demo lets you preview the text field component, its variations, and configuration options. Each tab displays a different type of text field."
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
                     .containerProperties="${[
                        ContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
                        ContainerProperties.TABLET_HORIZONTAL_PADDING
                     ]}"
                     .itemProperties="${[
                        ItemProperties.KEYLINE_ALIGNMENT_BOTH,
                        ItemProperties.KEYLINE_SIZE_MEDIUM,
                        ItemProperties.SMARTPHONE_MAX_WIDTH,
                        ItemProperties.TABLET_MAX_WIDTH
                     ]}"
                     itemFlexBasisValue="100%"
                     ><component-flex-container
                        .containerProperties="${[
                           ContainerProperties.CONTAINER_WIDTH_75,
                           ContainerProperties.TABLET_MAX_WIDTH,
                           ContainerProperties.SMARTPHONE_MAX_WIDTH
                        ]}"
                        .itemProperties="${[
                           ItemProperties.SMARTPHONE_MAX_WIDTH,
                           ItemProperties.TABLET_MAX_WIDTH
                        ]}"
                        itemFlexBasisValue="100%"
                        ><component-spacer
                           spacerSize="${SpacerSize.MEDIUM}"
                           spacerAlignment="${SpacerAlignment.VERTICAL}"
                        ></component-spacer
                        ><component-border .borderProperties="${[BorderType.FULL_WIDTH, BorderType.ALL]}"
                           ><component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.BOTH}"
                              ><component-form>
                                 <component-inputfield
                                    name="username"
                                    .inputfieldType="${this.type}"
                                    label="${this.type.toLocaleUpperCase()}"
                                    trailingIcon="${this.showTrailingIcon ? 'account_circle' : ''}"
                                    leadingIcon="${this.showLeadingIcon ? 'account_circle' : ''}"
                                    assistiveText="assistiveText"
                                    infoText="infoText"
                                    required="true"
                                 ></component-inputfield> </component-form></component-spacer
                        ></component-border>
                     </component-flex-container>
                     <component-typography .typographyType="${TypographyType.H4}"
                        >${I18nService.getUniqueInstance().getValue('pageflex_demo_properties')}</component-typography
                     >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(InputfieldType)}"
                           label="Typ"
                           value="${this.type}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeType(event)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.CHECKBOX}"
                           label="Trailing Icon"
                           assistiveText="Es besteht die Möglichkeit an jedes Eingabefeld rechts ein Icon zu plazieren."
                           .checked="${this.showTrailingIcon}"
                           @component-inputfield-change="${() => this.switchTrailingIcon()}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.CHECKBOX}"
                           label="Trailing Icon"
                           assistiveText="Es besteht die Möglichkeit an jedes Eingabefeld links ein Icon zu plazieren."
                           .checked="${this.showLeadingIcon}"
                           @component-inputfield-change="${() => this.switchLeadingIcon()}"
                        ></component-inputfield>
                     </component-form> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent">
                  <component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer>

                  <component-code
                     code="${'<component-inputfield '
                        .concat('label="')
                        .concat(this.type.toLocaleUpperCase())
                        .concat('" ')
                        .concat('trailingIcon="')
                        .concat(this.showTrailingIcon ? 'account_circle' : '')
                        .concat('" ')
                        .concat('leadingIcon="')
                        .concat(this.showLeadingIcon ? 'account_circle' : '')
                        .concat('" ')
                        .concat('name="fieldName" ')
                        .concat('assistiveText="assistiveText" ')
                        .concat('infoText="infoText" ')
                        .concat('required="true"></component-inputfield>')}"
                  ></component-code>
               </component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }

   private changeType(event: CustomEvent) {
      let type: string = (<any>InputfieldType)[event.detail.outputData.value];
      console.log('change type: {}', type);
      this.type = type;
   }

   private switchTrailingIcon() {
      this.showTrailingIcon = !Boolean(this.showTrailingIcon);
   }
   private switchLeadingIcon() {
      this.showLeadingIcon = !Boolean(this.showLeadingIcon);
   }
}
