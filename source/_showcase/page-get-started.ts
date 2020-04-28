import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { SpacerAlignment, SpacerSize, TargetType, TypographyType } from '..';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-get-started')
export class PageGetStarted extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagegetstarted');
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
            <component-typography .typographyType="${TypographyType.H1}" text="${I18nService.getUniqueInstance().getValue('pagegetstarted')}"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               wc-atomic is a lightweight ui-framework based on
               <component-link href="https://www.webcomponents.org/" targetType="${TargetType.BLANK}"
                  >${I18nService.getUniqueInstance().getValue('page_get_webcomponent')}</component-link
               >,
               <component-link href="https://www.typescriptlang.org/" targetType="${TargetType.BLANK}">typescript</component-link>
               and
               <component-link href="https://lit-element.polymer-project.org/" targetType="${TargetType.BLANK}"
                  >${I18nService.getUniqueInstance().getValue('page_get_litelement')}</component-link
               >
            </component-typography>

            <component-typography .typographyType="${TypographyType.H4}" text="${I18nService.getUniqueInstance().getValue('page_get_init')}"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
            ${I18nService.getUniqueInstance().getValue('page_get_init_simple')}
               <component-link href="https://www.npmjs.com/package/@domoskanonos/wc-atomic" targetType="${TargetType.BLANK}"
                  >npm</component-link
               >:
               <component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               </component-spacer>
               <component-code code="npm i @domoskanonos/wc-atomic"></component-code>
               <component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               </component-spacer>
               ${I18nService.getUniqueInstance().getValue('page_get_text2')}
               <component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               </component-spacer>
               <component-code code="${'"dependencies": { "@domoskanonos/wc-atomic": "latest",... }'}"></component-code>
            </component-typography>

            <component-typography .typographyType="${TypographyType.H4}" text="Basic Template"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               ${I18nService.getUniqueInstance().getValue('page_get_text3')}
               <component-link href="https://github.com/domoskanonos/wc-atomic-template" targetType="${TargetType.BLANK}"
                  >${I18nService.getUniqueInstance().getValue('page_get_template')}</component-link
               >
               . ${I18nService.getUniqueInstance().getValue('page_get_text')}
            </component-typography>
         </component-flex-container>
      `;
   }
}
