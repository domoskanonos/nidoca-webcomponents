import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { InputfieldType } from '../inputfield/component';
import { IconComponent, TypographyType } from '..';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
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
   color: string = '';

   @property()
   clickable: boolean = false;

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
            <component-typography .typographyType="${TypographyType.H1}" text="Icons"></component-typography>
            <component-typography type="${TypographyType.BODY1}"
               ><i>Icon Component</i> ist eine Komponente mit der man die Google Material Icons in seine Anwendung integrieren
               kann. Sie basiert auf den Google Material Design Richtlinien:
               <component-link href="https://material.io/design/iconography/system-icons.html#design-principles"
                  >Google Material Design Richtlinien</component-link
               >
            </component-typography>
            <component-typography type="${TypographyType.BODY1}"
               >Eine Übersicht aller Icons kannst du hier finden :
               <component-link href="https://material.io/resources/icons/?style=baseline">Google Material Icons</component-link>
            </component-typography>

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
                           label="Klickbar ?"
                           .inputfieldType="${InputfieldType.CHECKBOX}"
                           @component-inputfield-change="${(event: CustomEvent) =>
                              (this.clickable = event.detail.outputData.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           label="Farbe"
                           .inputfieldType="${InputfieldType.COLOR}"
                           @component-inputfield-change="${(event: CustomEvent) => (this.color = event.detail.outputData.value)}"
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
                        <component-flex-container .containerClazzes="${[ContainerClazzValues.CONTAINER_WIDTH_100]}">
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
                        .size="${this.iconSize}"
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
                        .concat('"\n .size="')
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
