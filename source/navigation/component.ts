import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./component.css');

export enum NavigationType {
   DISMISSIBLE = 'DISMISSIBLE',
   PERMANENT = 'PERMANENT',
   MODAL = 'MODAL'
}

@customElement('component-navigation')
export class NavigationComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   closed: boolean = false;

   @property()
   navigationType: string = NavigationType.PERMANENT;

   render() {
      return html`
         <div class="NAVIGATION ${this.navigationType} ${this.closed ? 'CLOSED' : ''}">
            <slot name="contentBefore"></slot>
            <slot name="links"></slot>
            <slot name="contentAfter"></slot>
         </div>
      `;
   }
}
