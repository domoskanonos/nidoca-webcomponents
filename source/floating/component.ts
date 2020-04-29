import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-floating-container')
export class FloatingComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   height: string = 'auto';

   @property()
   width: string = 'auto';

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
         <slot
            class="FLOATING"
            style="${this.toStyle(this.height, this.width, this.left, this.right, this.top, this.bottom)}"
         ></slot>
      `;
   }

   private toStyle(height: string, width: string, left: string, right: string, top: string, bottom: string) {
      return 'height:'
         .concat(height)
         .concat(';')
         .concat('width:')
         .concat(width)
         .concat(';')
         .concat('left:')
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
