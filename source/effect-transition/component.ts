import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./component.css');

export enum TransitionType {
   CENTER = 'CENTER',
   LEFT = 'LEFT',
   RIGHT = 'RIGHT',
   TOP = 'TOP',
   BOTTOM = 'BOTTOM',
   SLIDE_CENTER = 'SLIDE_CENTER',
   SLIDE_LEFT = 'SLIDE_LEFT',
   SLIDE_RIGHT = 'SLIDE_RIGHT',
   SLIDE_TOP = 'SLIDE_TOP',
   SLIDE_BOTTOM = 'SLIDE_BOTTOM'
}

@customElement('effect-transition')
export class TransitionComponent extends LitElement {
   @property()
   transitionType: TransitionType = TransitionType.CENTER;

   @property()
   duration: number = 0.5; // seconds

   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   render() {
      return html`
         <div class="${this.transitionType}"><slot></slot></div>
      `;
   }
}
