import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';

@customElement('page-table')
export class PageTable extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagetable');
   }

   @property()
   headers: string[] = ['Text', 'Komponente'];

   @property()
   rows: [(string | TemplateResult)[], (string | TemplateResult)[]] = [
      [
         'Haus',
         html`
            <component-icon icon="home"></component-icon>
         `
      ],
      [
         'Menü',
         html`
            <component-icon icon="menu"></component-icon>
         `
      ]
   ];

   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
            .flexContainerProperties="${[
               FlexContainerProperties.CONTAINER_WIDTH_50,
               FlexContainerProperties.TABLET_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
               FlexContainerProperties.TABLET_HORIZONTAL_PADDING
            ]}"
            .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
            itemFlexBasisValue="100%"
         >
            <component-typography .typographyType="${TypographyType.H2}" text="<component-table/>"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="Eine einfache Tabelle zum Darstellen von Listeninhalten"
            ></component-typography>
            <component-typography .typographyType="${TypographyType.H4}" text="Beispiel"></component-typography>

            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}"
                  ><component-flex-container
                     .flexContainerProperties="${[
                        FlexContainerProperties.CONTAINER_WIDTH_100,
                        FlexContainerProperties.TABLET_MAX_WIDTH,
                        FlexContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="100%"
                     ><component-spacer
                        spacerSize="${SpacerSize.MEDIUM}"
                        spacerAlignment="${SpacerAlignment.VERTICAL}"
                     ></component-spacer>
                     <component-table .headers="${this.headers}" .rows="${this.rows}">
                     </component-table> </component-flex-container
               ></component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer
                  ><component-code
                     code="${'<component-table .headers="${'
                        .concat(JSON.stringify(this.headers))
                        .concat('}" .rows="${'.concat(JSON.stringify(this.rows)).concat('}"> </component-table>'))}"
                  >
                  </component-code
               ></component-tab-content>
            </component-tabs>
         </component-flex-container>
      `;
   }
}
