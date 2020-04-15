import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ButtonType, ColorScheme, InputfieldComponent, InputfieldType, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
import { PreviewFormatterService } from './preview-formatter';

@customElement('page-color')
export class PageColor extends PageAbstract {
   @property()
   colorScheme: string = ColorScheme.BACKGROUND_COLOR;

   getMainComponent(): TemplateResult {
      return html`
         <effect-color colorScheme="${this.colorScheme}">
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
}
