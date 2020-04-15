import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-dialog')
export class DialogComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   show: boolean = false;

   render() {
      return html`
         <div class="${!this.show ? 'hide' : ''} fullScreen opacScreen"></div>
         <div class="${!this.show ? 'hide' : ''} fullScreen wrapperOutside">
            <div class="wrapperInside">
               <!-- Dialog -->
               <div class="dialogContainer">
                  <slot></slot>
               </div>
            </div>
         </div>
      `;
   }
}
