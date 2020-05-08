import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { SpacerAlignment, SpacerSize, TargetType, TypographyType } from '..';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-get-started')
export class PageGetStarted extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagegetstarted');
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
            flexItemBasisValue="100%"
         >
            <nidoca-typography
               .typographyType="${TypographyType.H1}"
               text="${I18nService.getUniqueInstance().getValue('pagegetstarted')}"
            ></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               wc-atomic is a lightweight ui-framework based on
               <nidoca-link href="https://www.webcomponents.org/" targetType="${TargetType.BLANK}"
                  >${I18nService.getUniqueInstance().getValue('page_get_webcomponent')}</nidoca-link
               >,
               <nidoca-link href="https://www.typescriptlang.org/" targetType="${TargetType.BLANK}">typescript</nidoca-link>
               and
               <nidoca-link href="https://lit-element.polymer-project.org/" targetType="${TargetType.BLANK}"
                  >${I18nService.getUniqueInstance().getValue('page_get_litelement')}</nidoca-link
               >
            </nidoca-typography>

            <nidoca-typography
               .typographyType="${TypographyType.H4}"
               text="${I18nService.getUniqueInstance().getValue('page_get_init')}"
            ></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               ${I18nService.getUniqueInstance().getValue('page_get_init_simple')}
               <nidoca-link href="https://www.npmjs.com/package/@domoskanonos/wc-atomic" targetType="${TargetType.BLANK}"
                  >npm</nidoca-link
               >:
               <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               </nidoca-spacer>
               <nidoca-code code="npm i @domoskanonos/wc-atomic"></nidoca-code>
               <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               </nidoca-spacer>
               ${I18nService.getUniqueInstance().getValue('page_get_text2')}
               <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               </nidoca-spacer>
               <nidoca-code code="${'"dependencies": { "@domoskanonos/wc-atomic": "latest",... }'}"></nidoca-code>
            </nidoca-typography>

            <nidoca-typography .typographyType="${TypographyType.H4}" text="Basic Template"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               ${I18nService.getUniqueInstance().getValue('page_get_text3')}
               <nidoca-link href="https://github.com/domoskanonos/wc-atomic-template" targetType="${TargetType.BLANK}"
                  >${I18nService.getUniqueInstance().getValue('page_get_template')}</nidoca-link
               >
               . ${I18nService.getUniqueInstance().getValue('page_get_text')}
            </nidoca-typography>
         </nidoca-flex-container>
      `;
   }
}
