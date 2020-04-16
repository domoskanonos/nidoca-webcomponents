import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ButtonType, ColorScheme, InputfieldComponent, InputfieldType, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
import { PreviewFormatterService } from './preview-formatter';
import { BackgroundColorClazz, TextColorClazz } from '../effect-color/component';

@customElement('page-color')
export class PageColor extends PageAbstract {
   @property()
   colorScheme: string = ColorScheme.DEFAULT_SCHEME;

   @property()
   textColorClazz: string = TextColorClazz.DEFAULT;

   @property()
   backgroundColorClazz: string = BackgroundColorClazz.DEFAULT;

   @property()
   textColor: string = '';

   @property()
   backgroundColor: string = '';

   getMainComponent(): TemplateResult {
      return html`
         <effect-color colorScheme="${this.colorScheme}" textColorClazz="${this.textColorClazz}" backgroundColorClazz="${this.backgroundColorClazz}">
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
               <component-typography .typographyType="${TypographyType.H1}" text="Color Schemes"></component-typography>
               <component-typography
                  .typographyType="${TypographyType.BODY1}"
                  text="Color Scheme Test Page"
               ></component-typography>
               <component-typography .typographyType="${TypographyType.H4}" text="Interactive demo"></component-typography>
               <component-typography
                  .typographyType="${TypographyType.BODY1}"
                  text="This demo lets you preview the color effect component, its variations, and configuration options."
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
                           ContainerClazzValues.CONTAINER_100,
                           ContainerClazzValues.TABLET_MAX_WIDTH,
                           ContainerClazzValues.SMARTPHONE_MAX_WIDTH
                        ]}"
                        .itemClazzes="${[ItemClazzValues.KEYLINE_ALIGNMENT_BOTH, ItemClazzValues.KEYLINE_SIZE_MEDIUM]}"
                        itemFlexBasisValue="100%"
                     >
                        <component-form>
                           <component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(ColorScheme)}"
                              label="colorScheme"
                              value="${this.colorScheme}"
                              @component-inputfield-change="${(event: CustomEvent) => this.changeColorScheme(event)}"
                           ></component-inputfield>
                           <component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(TextColorClazz)}"
                              label="textColorClazz"
                              value="${this.textColorClazz}"
                              @component-inputfield-change="${(event: CustomEvent) => this.changeTextColorClazz(event)}"
                           ></component-inputfield
                           ><component-inputfield
                              .inputfieldType="${InputfieldType.COMBOBOX}"
                              .options="${InputfieldComponent.enumToComboboxItems(BackgroundColorClazz)}"
                              label="backgroundColorClazz"
                              value="${this.backgroundColorClazz}"
                              @component-inputfield-change="${(event: CustomEvent) => this.changeBackgroundColorClazz(event)}"
                           ></component-inputfield>
                           <component-link href="https://material.io/design/iconography/system-icons.html#design-principles"
                              >Google Material Design Richtlinien</component-link
                           >

                           <component-button buttonType="${ButtonType.CONTAINED}">ButtonType.CONTAINED</component-button>
                           <component-button buttonType="${ButtonType.OUTLINED}">ButtonType.CONTAINED</component-button>
                           <component-button buttonType="${ButtonType.TEXT}">ButtonType.CONTAINED</component-button>
                        </component-form>
                     </component-flex-container></component-tab-content
                  >
                  <component-tab-content slot="tabContent"
                     ><component-code
                        code="${PreviewFormatterService.getUniqueInstance().format(
                           '<effect-color '
                              .concat(PreviewFormatterService.getUniqueInstance().property2String(this.colorScheme, ColorScheme))
                              .concat(' leadingIcon="sentiment_satisfied_alt" text="Mein&nbsp;Button"></effect-color>')
                        )}"
                     >
                     </component-code
                  ></component-tab-content>
               </component-tabs>
            </component-flex-container>
         </effect-color>
      `;
   }

   private changeColorScheme(event: CustomEvent) {
      let colorScheme: string = (<any>ColorScheme)[event.detail.outputData.value];
      console.log('change colorScheme: {}', colorScheme);
      this.colorScheme = colorScheme;
   }

   private changeTextColorClazz(event: CustomEvent) {
      let textColorClazz: string = (<any>TextColorClazz)[event.detail.outputData.value];
      console.log('change textColorClazz: {}', textColorClazz);
      this.textColorClazz = textColorClazz;
   }

   private changeBackgroundColorClazz(event: CustomEvent) {
      let backgroundColorClazz: string = (<any>BackgroundColorClazz)[event.detail.outputData.value];
      console.log('change backgroundColorClazz: {}', backgroundColorClazz);
      this.backgroundColorClazz = backgroundColorClazz;
   }
}
