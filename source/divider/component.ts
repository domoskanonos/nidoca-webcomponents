import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import {BorderType, SpacerAlignment, SpacerSize} from '..';

const componentCSS = require('./component.css');

@customElement('component-divider')
export class DividerComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   spacerSize: SpacerSize = SpacerSize.MEDIUM;

   render() {
      return html`
         <component-border borderType="${BorderType.BOTTOM}">
            <component-spacer spacerSize="${this.spacerSize}" spacerAlignment="${SpacerAlignment.BOTH}"> </component-spacer>
         </component-border>
         <component-spacer spacerSize="${this.spacerSize}" spacerAlignment="${SpacerAlignment.BOTH}"> </component-spacer>
      `;
   }

}
