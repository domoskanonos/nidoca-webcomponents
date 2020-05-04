import { css, customElement, html, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { BorderType } from '..';
import { ShadowType } from '../border/component';

const componentCSS = require('./component.css');

@customElement('component-progress')
export class ProgressComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   render() {
      return html`
         <component-border .borderProperties="${[BorderType.NONE, BorderType.FULL_WIDTH]}" shadowType="${ShadowType.KEY_LIGHT}">
            <div class="PROGRESS"></div>
         </component-border>
      `;
   }
}
