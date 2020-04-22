import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { ColorScheme, InputfieldType, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-box')
export class PageBox extends PageAbstract {

    constructor() {
        super();
        this.navigationTitle = 'BoxComponent'
    }
    @property()
   height: string = '50vmin';

   @property()
   width: string = '50vmin';

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-box/>"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}"
               ><i>BoxComponent</i> wird im Zusammenspiel mit den beiden Komponenten <i>FlexComponent</i> und
               <i>GridComponent</i> für die Positionerung und das Layouting der Anwendung verwendet.<br /><br />
               Sie wird eingesetzt um Inhalte auf eine bestimmte Höhe und Breite einzuschränken. In der Regel wird dann innherhalb
               eine <i>GridComponent</i> oder eine <i>FlexComponent</i> verwendet um die Unterkomponenten weiter zu
               strukturieren.<br /><br />
               Es gibt zwei Attribute mit der man die Höhe und die Breite der Komponente ändern kann. Es wir empfohlen Breite und
               Höhe in Abhängigkeit der Viewport Größe zu definieren, also die Masseinheiten <i>vw, vh, vmin, vmax</i> anstelle
               von <i>px, em, %</i> zu verwenden. Das hat den Vorteil das die Box auch auf Tablets und Smartphones der Größe
               entsprechend dargestellt wird.</component-typography
            >
            <component-typography .typographyType="${TypographyType.H4}" text="Interaktive Demo"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}" text=""></component-typography>

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
                     .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_BOTH, ItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="100%"
                  >
                     <component-form>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="Höhe der Box"
                           value="${this.height}"
                           @component-inputfield-keyup="${(event: CustomEvent) => (this.height = event.detail.value)}"
                        ></component-inputfield>
                        <component-inputfield
                           .inputfieldType="${InputfieldType.TEXT}"
                           label="Breite der Box"
                           value="${this.width}"
                           @component-inputfield-keyup="${(event: CustomEvent) => (this.width = event.detail.value)}"
                        ></component-inputfield>
                     </component-form>
                     <effect-color colorScheme="${ColorScheme.PRIMARY_SCHEME}">
                        <component-box height="${this.height}" width="${this.width}"> </component-box>
                     </effect-color>
                  </component-flex-container>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code
                     code="${'<component-box height="'
                        .concat(this.height)
                        .concat('" width="')
                        .concat(this.width)
                        .concat('"></component-box>')}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
