import { css, customElement, html, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-chip')
export class ChipComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   render() {
      return html`
         <div class="CHIP">
            <slot></slot>
         </div>
      `;
   }
}
