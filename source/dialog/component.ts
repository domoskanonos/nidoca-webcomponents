import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { TransitionType, VisibleType } from '..';

const componentCSS = require('./component.css');

@customElement('nidoca-dialog')
export class NidocaDialog extends LitElement {

   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   show: boolean = false;

   render() {
      return html`
         <nidoca-visible visibleType="${this.show ? VisibleType.NORMAL : VisibleType.HIDE}">
            <div class="fullScreen opacScreen"></div>
            <div class="fullScreen wrapperOutside">
               <div class="wrapperInside">
                  <!-- Dialog -->
                  <nidoca-transition .transitionType="${TransitionType.SLIDE_CENTER}">
                     <div class="dialogContainer">
                        <slot></slot>
                     </div>
                  </nidoca-transition>
               </div>
            </div>
         </nidoca-visible>
      `;
   }
}
