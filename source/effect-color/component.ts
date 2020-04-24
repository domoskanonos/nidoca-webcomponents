import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

@customElement('effect-color')
export class ColorEffect extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   textColor: string = '';

   @property()
   backgroundColor: string = '';

   render() {
      return html`
         <slot
            style="${BasicService.getUniqueInstance().isNotBlank(this.textColor)
               ? 'color: '.concat(this.textColor).concat(';')
               : ''}${BasicService.getUniqueInstance().isNotBlank(this.backgroundColor)
               ? 'background-color: '.concat(this.backgroundColor).concat(';')
               : ''}"
         ></slot>
      `;
   }
}
