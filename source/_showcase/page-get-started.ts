import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { SpacerAlignment, SpacerSize, TargetType, TypographyType } from '..';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import {I18nService} from "@domoskanonos/frontend-basis";

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
            <component-typography .typographyType="${TypographyType.H1}" text="Get started"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               wc-atomic is a lightweight ui-framework based on
               <component-link href="https://www.webcomponents.org/" targetType="${TargetType.BLANK}">webcomponents</component-link>,
               <component-link href="https://www.typescriptlang.org/" targetType="${TargetType.BLANK}">typescript</component-link>
               and
               <component-link href="https://lit-element.polymer-project.org/" targetType="${TargetType.BLANK}"
                  >litelement</component-link
               >
            </component-typography>

            <component-typography .typographyType="${TypographyType.H4}" text="Installation"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               Installation is simple with
               <component-link href="https://www.npmjs.com/package/@domoskanonos/wc-atomic" targetType="${TargetType.BLANK}"
                  >npm</component-link
               >:
               <component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               </component-spacer>
               <component-code code="npm i @domoskanonos/wc-atomic"></component-code>
               <component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               </component-spacer>
               or refer directly in package.json:
               <component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               </component-spacer>
               <component-code>"dependencies": { "@domoskanonos/wc-atomic": "latest",... }</component-code>
            </component-typography>

            <component-typography .typographyType="${TypographyType.H4}" text="Basic Template"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               You can also use the ready-made basic template, which you can find here:
               <component-link href="https://github.com/domoskanonos/wc-atomic-template" targetType="${TargetType.BLANK}"
                  >basic template</component-link
               >
               . It contains a basic set of files on which you can build your application.
            </component-typography>
         </component-flex-container>
      `;
   }
}
