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
            <nidoca-icon icon="home"></nidoca-icon>
         `
      ],
      [
         'Menü',
         html`
            <nidoca-icon icon="menu"></nidoca-icon>
         `
      ]
   ];

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
            itemFlexBasisValue="100%"
         >
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-table/>"></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="Eine einfache Tabelle zum Darstellen von Listeninhalten"
            ></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.H4}" text="Beispiel"></nidoca-typography>

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
                        FlexContainerProperties.CONTAINER_WIDTH_100,
                        FlexContainerProperties.TABLET_MAX_WIDTH,
                        FlexContainerProperties.SMARTPHONE_MAX_WIDTH
                     ]}"
                     .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
                     itemFlexBasisValue="100%"
                     ><nidoca-spacer
                        spacerSize="${SpacerSize.MEDIUM}"
                        spacerAlignment="${SpacerAlignment.VERTICAL}"
                     ></nidoca-spacer>
                     <nidoca-table .headers="${this.headers}" .rows="${this.rows}">
                     </nidoca-table> </nidoca-flex-container
               ></nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer
                  ><nidoca-code
                     code="${'<nidoca-table .headers="${'
                        .concat(JSON.stringify(this.headers))
                        .concat('}" .rows="${'.concat(JSON.stringify(this.rows)).concat('}"> </nidoca-table>'))}"
                  >
                  </nidoca-code
               ></nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
