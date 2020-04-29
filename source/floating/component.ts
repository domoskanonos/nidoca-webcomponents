import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-floating-container')
export class FloatingComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   left: string = 'auto';

   @property()
   top: string = 'auto';

   @property()
   right: string = 'auto';

   @property()
   bottom: string = 'auto';

   render() {
      return html`
         <slot class="FLOATING" style="${this.toPositionStyle(this.left, this.right, this.top, this.bottom)}"></slot>
      `;
   }

   private toPositionStyle(left: string, right: string, top: string, bottom: string) {
      return 'left:'
         .concat(left)
         .concat(';')
         .concat('right:')
         .concat(right)
         .concat(';')
         .concat('top:')
         .concat(top)
         .concat(';')
         .concat('bottom:')
         .concat(bottom)
         .concat(';');
   }
}
