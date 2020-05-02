import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-accordion')
export class AccordionComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   render() {
      return html`
         <div>
            <slot></slot>
         </div>
      `;
   }
}
