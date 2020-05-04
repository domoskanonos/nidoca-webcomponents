import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { FlexJustifyContent, IconComponent, SpacerAlignment, SpacerSize, TargetType, TypographyType } from '..';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';
import { IconShadowType } from '../icon/component';
import { PreviewFormatterService } from './preview-formatter';
import { GridAlignItems, GridJustifyItems } from '../grid-container/component';

@customElement('page-icon')
export class PageIconComponent extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageicon');
   }

   @property()
   icon: string = 'thumb_up_alt';

   @property()
   size: number = 64;

   @property()
   sizeUnit: string = 'px';

   @property()
   color: string = '#ffffff';

   @property()
   backgroundColor: string = '#0d47a1';

   @property()
   clickable: boolean = false;

   @property()
   withIconSpace: boolean = true;

   @property()
   round: boolean = true;

   @property()
   iconShadowType: string = IconShadowType.DEFAULT_SHADOW;

   getMainComponent(): TemplateResult {
      return html`
         <component-floating-container
            top="var(--menubar-height)"
            width="100%"
            style="background-color: var(--app-color-surface-background);"
            ><component-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               <component-grid-container
                  .gridJustifyItems="${GridJustifyItems.CENTER}"
                  .gridAlignItems="${GridAlignItems.CENTER}"
                  .gridTemplateRows="${['1fr']}"
                  .gridTemplateColumns="${['1fr']}"
               >
                  <component-icon
                     .clickable="${this.clickable}"
                     icon="${this.icon}"
                     color="${this.color}"
                     backgroundColor="${this.backgroundColor}"
                     .size="${this.size}"
                     .withIconSpace="${this.withIconSpace}"
                     .round="${this.round}"
                     iconShadowType="${this.iconShadowType}"
                  ></component-icon>
               </component-grid-container>
            </component-spacer>
         </component-floating-container>

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
            <component-spacer
               size="${String(this.withIconSpace ? this.size * 1.5 : this.size).concat(this.sizeUnit)}"
               spacerAlignment="${SpacerAlignment.VERTICAL}"
            ></component-spacer>
            <component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}"></component-spacer>
            <component-typography .typographyType=" ${TypographyType.H2}" text="<component-icon/>"></component-typography>
            <component-typography type="${TypographyType.BODY1}"
               ><i>IconComponent</i> ${I18nService.getUniqueInstance().getValue('pageicon_description')}
               <component-link href="https://material.io/resources/icons/?style=baseline" targetType="${TargetType.BLANK}"
                  >${I18nService.getUniqueInstance().getValue('pageicon_link_google_material_icons')}</component-link
               >
            </component-typography>
            <component-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               ${I18nService.getUniqueInstance().getValue('pageicon_description_demo')}
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
                     .containerProperties="${[
                        ContainerProperties.CONTAINER_WIDTH_100,
                        ContainerProperties.TABLET_MAX_WIDTH,
                        ContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .itemProperties="${[
                        ItemProperties.KEYLINE_ALIGNMENT_BOTH,
                        ItemProperties.KEYLINE_SIZE_MEDIUM,
                        ItemProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     itemFlexBasisValue="100%"
                     .flexJustifyContent="${FlexJustifyContent.SPACE_AROUND}"
                  >
                     <component-form>
                        <component-inputfield
                           label="${I18nService.getUniqueInstance().getValue('pageicon_label2')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pageicon_body4')}"
                           infoText="${I18nService.getUniqueInstance().getValue('pageicon_body5')}"
                           .inputfieldType="${InputfieldType.SWITCH}"
                           .checked="${this.clickable}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.clickable = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           label="${I18nService.getUniqueInstance().getValue('pageicon_body6')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pageicon_body7')}"
                           .inputfieldType="${InputfieldType.SWITCH}"
                           .checked="${this.withIconSpace}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.withIconSpace = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           label="${I18nService.getUniqueInstance().getValue('pageicon_property_round_label')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pageicon_property_round_assitive_text')}"
                           .inputfieldType="${InputfieldType.SWITCH}"
                           .checked="${this.round}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.round = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.COMBOBOX}"
                           .options="${InputfieldComponent.enumToComboboxItems(IconShadowType)}"
                           label="${I18nService.getUniqueInstance().getValue('pageicon_iconShadowType')}"
                           .value="${InputfieldComponent.enumGetKeyFromValue(IconShadowType, this.iconShadowType)}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.iconShadowType = (<any>IconShadowType)[event.detail.outputData.value])}"
                        ></component-inputfield>
                        <component-inputfield
                           label="Farbe"
                           value="${this.color}"
                           .inputfieldType="${InputfieldType.COLOR}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.color = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           label="Hintegrundfarbe"
                           .inputfieldType="${InputfieldType.COLOR}"
                           value="${this.backgroundColor}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.backgroundColor = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .required="${true}"
                           label="Größe"
                           .inputfieldType="${InputfieldType.NUMBER}"
                           min="18"
                           max="128"
                           step="1"
                           value="${this.size}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.size = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-flex-container .containerProperties="${[ContainerProperties.CONTAINER_WIDTH_100]}">
                           <component-icon
                              icon="sports_motorsports"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="sports_rugby"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="sports_soccer"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="sports_tennis"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="sports_volleyball"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="thumb_down_alt"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="thumb_up_alt"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="whatshot"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="check_box"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="check_box_outline_blank"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="indeterminate_check_box"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="radio_button_checked"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="radio_button_unchecked"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="star"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="star_border"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="star_half"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="toggle_off"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                           <component-icon
                              icon="toggle_on"
                              clickable="true"
                              @component-icon-click="${(event: CustomEvent) => {
                                 this.icon = (<IconComponent>event.detail).icon;
                              }}"
                           ></component-icon>
                        </component-flex-container>
                     </component-form> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent">
                  <component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-icon clickable="'
                        .concat(this.clickable ? 'true' : 'false')
                        .concat('" icon="')
                        .concat(this.icon)
                        .concat('" round="')
                        .concat(String(this.round))
                        .concat('" color="')
                        .concat(this.color)
                        .concat('" backgroundColor="')
                        .concat(this.backgroundColor)
                        .concat('"\n size="')
                        .concat(String(this.size))
                        .concat('"')
                        .concat(PreviewFormatterService.getUniqueInstance().property2String(this.iconShadowType, IconShadowType))
                        .concat('></component-icon>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
