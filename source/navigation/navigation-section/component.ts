import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

import {
   FlexAlignContent,
   FlexAlignItems,
   FlexDirection,
   FlexJustifyContent,
   FlexWrap,
   SpacerAlignment,
   SpacerSize,
   TypographyType
} from '../..';
import { FlexContainerProperties } from '../../flex-container/component';

const componentCSS = require('./component.css');

@customElement('nidoca-navigation-section')
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
              <nidoca-flex-container
                 .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
                 .flexItemProperties="${[]}"
                 .flexDirection="${FlexDirection.ROW}"
                 .flexWrap="${FlexWrap.NO_WRAP}"
                 .flexJustifyContent="${FlexJustifyContent.FLEX_END}"
                 .flexAlignItems="${FlexAlignItems.CENTER}"
                 .flexAlignContent="${FlexAlignContent.FLEX_START}"
                 flexItemBasisValue="80%"
              >
                 <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}">
                    <nidoca-typography .typographyType="${TypographyType.H6}" text="${this.text}"></nidoca-typography>
                 </nidoca-spacer>
              </nidoca-flex-container>
           `
         : html``;
   }
}
