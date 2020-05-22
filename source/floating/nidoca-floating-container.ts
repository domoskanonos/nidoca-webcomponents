import { css, customElement, html, property, LitElement } from 'lit-element';

@customElement('nidoca-floating-container')
export class NidocaFloatingContainer extends LitElement {
   static styles = css`
      .FLOATING {
         position: fixed;
         display: inline;
         margin: auto;
         background-color: inherit;
         color: inherit;
      }
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
