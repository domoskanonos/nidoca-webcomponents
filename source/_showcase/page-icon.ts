import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldType } from '../inputfield/component';
import { FlexJustifyContent, IconComponent, TargetType, TypographyType } from '..';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-icon')
export class PageIconComponent extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageicon');
   }

   @property()
   icon: string = 'thumb_up_alt';

   @property()
   iconSize: number = 96;

   @property()
   color: string = '#ffffff';

   @property()
   backgroundColor: string = '#0d47a1';

   @property()
   clickable: boolean = false;

   @property()
   withIconSpace: boolean = true;

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-icon/>"></component-typography>
            <component-typography type="${TypographyType.BODY1}"
               ><i>Icon Component</i> ${I18nService.getUniqueInstance().getValue('pageicon_body2')}
               <component-link href="https://material.io/resources/icons/?style=baseline" targetType="${TargetType.BLANK}"
                  >${I18nService.getUniqueInstance().getValue('pageicon_label1')}</component-link
               >
            </component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('interactive_demo')}"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
              ${I18nService.getUniqueInstance().getValue('pageicon_body3')}
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
                     .itemFlexBasisValues="${['50%', 'auto']}"
                     .flexJustifyContent="${FlexJustifyContent.SPACE_AROUND}"
                  >
                     <component-form>
                        <component-inputfield
                           label="${I18nService.getUniqueInstance().getValue('pageicon_label2')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pageicon_body4')}"
                           infoText="${I18nService.getUniqueInstance().getValue('pageicon_body5')}"
                           .inputfieldType="${InputfieldType.CHECKBOX}"
                           .checked="${this.clickable}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.clickable = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           label="${I18nService.getUniqueInstance().getValue('pageicon_body6')}"
                           assistiveText="${I18nService.getUniqueInstance().getValue('pageicon_body7')}"
                           .inputfieldType="${InputfieldType.CHECKBOX}"
                           .checked="${this.withIconSpace}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.withIconSpace = event.detail.outputData.value)}"
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
                           max="256"
                           step="1"
                           value="${this.iconSize}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.iconSize = event.detail.outputData.value)}"
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
                     </component-form>

                     <component-icon
                        .clickable="${this.clickable}"
                        icon="${this.icon}"
                        color="${this.color}"
                        backgroundColor="${this.backgroundColor}"
                        .size="${this.iconSize}"
                        .withIconSpace="${this.withIconSpace}"
                     ></component-icon> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-icon .clickable="'
                        .concat(this.clickable ? 'true' : 'false')
                        .concat('" icon="')
                        .concat(this.icon)
                        .concat('" color="')
                        .concat(this.color)
                        .concat('"\n size="')
                        .concat(String(this.iconSize))
                        .concat('"></component-icon>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
