import {css, customElement, html, LitElement, property, unsafeCSS} from 'lit-element';

import {
   AlignContent,
   AlignItems,
   FlexDirection,
   FlexJustifyContent,
   FlexWrap,
   SpacerAlignment,
   SpacerSize,
   TypographyType
} from '../..';
import { ContainerClazzValues } from '../../flex-container/component';

const componentCSS = require('./component.css');

@customElement('component-navigation-section')
export class NavigationSectionComponent extends LitElement {

   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   text: string = '';

   @property()
   rendered: boolean = true;

   render() {
      return this.rendered
         ? html`
              <component-flex-container
                 .containerClazzes="${[ContainerClazzValues.CONTAINER_100]}"
                 .itemClazzes="${[]}"
                 .flexDirection="${FlexDirection.ROW}"
                 .flexWrap="${FlexWrap.NO_WRAP}"
                 .flexJustifyContent="${FlexJustifyContent.FLEX_END}"
                 .alignItems="${AlignItems.CENTER}"
                 .alignContent="${AlignContent.FLEX_START}"
                 itemFlexBasisValue="80%"
              >
                 <component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
                    <component-typography .typographyType="${TypographyType.CAPTION}" text="${this.text}"></component-typography>
                 </component-spacer>
              </component-flex-container>
           `
         : html``;
   }
}
