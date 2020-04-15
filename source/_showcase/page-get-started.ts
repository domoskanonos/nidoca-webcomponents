import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { SpacerAlignment, SpacerSize, TargetType, TypographyType } from '..';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';

@customElement('page-get-started')
export class PageGetStarted extends PageAbstract {
   getMainComponent(): TemplateResult {
      return html`
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
            <component-typography .typographyType="${TypographyType.H1}" text="Get started"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               wc-atomic is a lightweight ui-framework based on
               <component-link href="https://www.webcomponents.org/" target="${TargetType.BLANK}">webcomponents</component-link>,
               <component-link href="https://www.typescriptlang.org/" target="${TargetType.BLANK}">typescript</component-link>
               and
               <component-link href="https://lit-element.polymer-project.org/" target="${TargetType.BLANK}"
                  >litelement</component-link
               >
            </component-typography>

            <component-typography .typographyType="${TypographyType.H4}" text="Installation"></component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">
               Installation is simple with npm:
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
               <component-link href="https://github.com/domoskanonos/wc-atomictemplate" target="${TargetType.BLANK}"
                  >basic template</component-link
               > .
               It contains a basic set of files on which you can build your application.
            </component-typography>
         </component-flex-container>
      `;
   }
}
