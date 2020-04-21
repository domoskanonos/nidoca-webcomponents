import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { RouterService } from '@domoskanonos/frontend-basis';
import { BasicService } from '@domoskanonos/frontend-basis';
import { NavigationLinkComponent } from './navigation-link/component';

const componentCSS = require('./component.css');

@customElement('component-navigation')
export class NavigationComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   closed: boolean = false;

   render() {
      return html`
         <div class="NAVIGATION ${this.closed ? 'CLOSED' : ''}">
            <slot name="contentBefore"></slot>
            <slot name="links"></slot>
            <slot name="contentAfter"></slot>
         </div>
      `;
   }
}
