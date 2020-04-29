import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-floating-container')
export class FloatingComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   left: number = 0;

   @property()
   top: number = 0;

   @property()
   right: number = 0;

   @property()
   bottom: number = 0;

   render() {
      return html`
         <span class="FLOATING" style="${this.toPositionStyle(this.left, this.right, this.top, this.bottom)}"></span>
      `;
   }

   private toPositionStyle(left: number, right: number, top: number, bottom: number) {
      return 'left:'
         .concat(String(left))
         .concat(';')
         .concat('right:')
         .concat(String(right))
         .concat(';')
         .concat('top:')
         .concat(String(top))
         .concat(';')
         .concat('bottom:')
         .concat(String(bottom))
         .concat(';');
   }
}
