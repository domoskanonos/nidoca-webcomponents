import {css, customElement, html, property, unsafeCSS, LitElement} from 'lit-element';
import {AbstractInputData} from '../abstract-component/component';

const componentCSS = require('./component.css');

export class DialogInputData extends AbstractInputData {
   componentIdentifier = DialogComponent.IDENTIFIER;
   show: boolean = false;
}

@customElement('component-dialog')
export class DialogComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'DialogComponent';

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

   getDefaultInputData(): DialogInputData {
      return DialogInputData.prototype;
   }
}
