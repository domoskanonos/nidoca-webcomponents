import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { SpacerAlignment, SpacerSize, TypographyType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';

@customElement('page-tabs')
export class PageTabs extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagetabs');
   }

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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-tabs/>"></nidoca-typography>
            <nidoca-typography
               .typographyType="${TypographyType.BODY1}"
               text="Komponente um Inhalte zu seperieren."
            ></nidoca-typography>
            <nidoca-tabs>
               <nidoca-tab
                  slot="tab"
                  .selected="${true}"
                  text="${I18nService.getUniqueInstance().getValue('demo')}"
               ></nidoca-tab>
               <nidoca-tab slot="tab" text="${I18nService.getUniqueInstance().getValue('source')}"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}">
                  <nidoca-spacer
                     spacerSize="${SpacerSize.MEDIUM}"
                     spacerAlignment="${SpacerAlignment.VERTICAL}"
                  ></nidoca-spacer>

                  <nidoca-box height="50vmin" width="50vmin">
                     <nidoca-tabs>
                        <nidoca-tab slot="tab" .selected="${true}" text="Tab 1"></nidoca-tab>
                        <nidoca-tab slot="tab" text="Tab 2"></nidoca-tab>
                        <nidoca-tab-content slot="tabContent" .selected="${true}">Inhalt 1</nidoca-tab-content>
                        <nidoca-tab-content slot="tabContent">Inhalt 2</nidoca-tab-content>
                     </nidoca-tabs>
                  </nidoca-box>
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent"
                  ><nidoca-code>
                     ${'<nidoca-tabs '.concat(
                        '>\n' +
                           '<nidoca-tab slot="tab" .selected="${true}" text="Tab 1"></nidoca-tab>\n' +
                           '<nidoca-tab slot="tab" text="Tab 2"></nidoca-tab>\n' +
                           '<nidoca-tab-content slot="tabContent" .selected="${true}">Inhalt 1</nidoca-tab-content>\n' +
                           '<nidoca-tab-content slot="tabContent">Inhalt 2</nidoca-tab-content>\n' +
                           '</nidoca-tabs>'
                     )}
                  </nidoca-code></nidoca-tab-content
               >
            </nidoca-tabs>
         </nidoca-flex-container>
      `;
   }
}
