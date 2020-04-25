import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {
   SpacerAlignment,
   SpacerSize,
   TypographyType
} from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { ContainerProperties, ItemProperties } from '../flex-container/component';


@customElement('page-tabs')
export class PageTabs extends PageAbstract {

   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagetabs');
   }

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
            <component-typography .typographyType="${TypographyType.H2}" text="<component-tabs/>"></component-typography>
            <component-typography
               .typographyType="${TypographyType.BODY1}"
               text="Komponente um Inhalte zu seperieren."
            ></component-typography>
            <component-tabs>
               <component-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></component-tab>
               <component-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></component-tab>
               <component-tab-content slot="tabContent" .selected="${true}">
                  <component-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></component-spacer>

                  <component-box height="50vmin" width="50vmin">
                     <component-tabs>
                        <component-tab slot="tab" .selected="${true}" text="Tab 1"></component-tab>
                        <component-tab slot="tab" text="Tab 2"></component-tab>
                        <component-tab-content slot="tabContent" .selected="${true}">Inhalt 1</component-tab-content>
                        <component-tab-content slot="tabContent">Inhalt 2</component-tab-content>
                     </component-tabs>
                  </component-box>
               </component-tab-content>
               <component-tab-content slot="tabContent"
                  ><component-code>
                     ${'<component-tabs '
                        .concat(
                           '>\n' +
                              '<component-tab slot="tab" .selected="${true}" text="Tab 1"></component-tab>\n' +
                              '<component-tab slot="tab" text="Tab 2"></component-tab>\n' +
                              '<component-tab-content slot="tabContent" .selected="${true}">Inhalt 1</component-tab-content>\n' +
                              '<component-tab-content slot="tabContent">Inhalt 2</component-tab-content>\n' +
                              '</component-tabs>'
                        )}
                  </component-code></component-tab-content
               >
            </component-tabs>
         </component-flex-container>
      `;
   }
}
