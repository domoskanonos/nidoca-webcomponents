import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { BorderProperties, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
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
         <nidoca-flex-container
            .flexContainerProperties="${[
               FlexContainerProperties.CONTAINER_WIDTH_50,
               FlexContainerProperties.TABLET_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
               FlexContainerProperties.TABLET_HORIZONTAL_PADDING
            ]}"
            .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
            flexItemBasisValue="100%"
         >
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-inputfield/>"></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="Text fields let users enter and edit text."
            ></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="This demo lets you preview the text field component, its variations, and configuration options. Each tab displays a different type of text field."
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
                     .flexContainerProperties="${[
                        FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
                        FlexContainerProperties.TABLET_HORIZONTAL_PADDING
                     ]}"
                     .flexItemProperties="${[
                        FlexItemProperties.KEYLINE_ALIGNMENT_BOTH,
                        FlexItemProperties.KEYLINE_SIZE_MEDIUM,
                        FlexItemProperties.SMARTPHONE_MAX_WIDTH,
                        FlexItemProperties.TABLET_MAX_WIDTH
                     ]}"
                     flexItemBasisValue="100%"
                     ><nidoca-flex-container
                        .flexContainerProperties="${[
                           FlexContainerProperties.CONTAINER_WIDTH_75,
                           FlexContainerProperties.TABLET_MAX_WIDTH,
                           FlexContainerProperties.SMARTPHONE_MAX_WIDTH
                        ]}"
                        .flexItemProperties="${[FlexItemProperties.SMARTPHONE_MAX_WIDTH, FlexItemProperties.TABLET_MAX_WIDTH]}"
                        flexItemBasisValue="100%"
                        ><nidoca-spacer
                           spacerSize="${SpacerSize.MEDIUM}"
                           spacerAlignment="${SpacerAlignment.VERTICAL}"
                        ></nidoca-spacer
                        ><nidoca-border .borderProperties="${[BorderProperties.FULL_WIDTH, BorderProperties.ALL]}"
                           ><nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.BOTH}"
                              ><nidoca-form>
                                 <nidoca-inputfield
                                    name="username"
                                    .inputfieldType="${this.type}"
                                    label="${this.type.toLocaleUpperCase()}"
                                    trailingIcon="${this.showTrailingIcon ? 'account_circle' : ''}"
                                    leadingIcon="${this.showLeadingIcon ? 'account_circle' : ''}"
                                    assistiveText="assistiveText"
                                    infoText="infoText"
                                    required="true"
                                 ></nidoca-inputfield> </nidoca-form></nidoca-spacer
                        ></nidoca-border>
                     </nidoca-flex-container>
                     <nidoca-typography .typographyType="${TypographyType.H4}"
                        >${I18nService.getUniqueInstance().getValue('pageflex_demo_properties')}</nidoca-typography
                     >
                     <nidoca-form>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(InputfieldType)}"
                           label="Typ"
                           value="${this.type}"
                           @component-inputfield-change="${(event: CustomEvent) => this.changeType(event)}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.SWITCH}"
                           label="Trailing Icon"
                           assistiveText="Es besteht die Möglichkeit an jedes Eingabefeld rechts ein Icon zu plazieren."
                           .checked="${this.showTrailingIcon}"
                           @component-inputfield-change="${() => this.switchTrailingIcon()}"
                        ></nidoca-inputfield>
                        <nidoca-inputfield
                           .inputfieldType="${InputfieldType.SWITCH}"
                           label="Trailing Icon"
                           assistiveText="Es besteht die Möglichkeit an jedes Eingabefeld links ein Icon zu plazieren."
                           .checked="${this.showLeadingIcon}"
                           @component-inputfield-change="${() => this.switchLeadingIcon()}"
                        ></nidoca-inputfield>
                     </nidoca-form> </nidoca-flex-container
               ></nidoca-tab-content>
               <nidoca-tab-content slot="tabContent">
                  <nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer>

                  <nidoca-code
                     code="${'<nidoca-inputfield '
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
                        .concat('required="true"></nidoca-inputfield>')}"
                  ></nidoca-code>
               </nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
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
