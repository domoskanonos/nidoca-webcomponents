import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { guard } from 'lit-html/directives/guard';
import { repeat } from 'lit-html/directives/repeat';
import { RouterService } from '@domoskanonos/frontend-basis';
import { BasicService } from '@domoskanonos/frontend-basis';
import { NavigationLinkComponent } from './navigation-link/component';

const componentCSS = require('./component.css');

@customElement('component-navigation')
export class NavigationComponent extends LitElement {
   @property()
   clazz: string = '';

   @property()
   links: NavigationLinkComponent[] = [];

   @property()
   contentBefore: LitElement[] = [];

   @property()
   contentAfter: LitElement[] = [];

   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'NavigationComponent';

   render() {
      return html`
         <div>
            ${guard(
               this.contentBefore,
               () =>
                  html`
                     ${repeat(
                        this.contentBefore,
                        (components) => html`
                           ${components}
                        `
                     )}
                  `
            )}
            <slot name="contentBefore"></slot>

            ${this.links.map(
               (linkItem) => html`
                  <component-navigation-link
                     icon="${linkItem.icon}"
                     text="${linkItem.text}"
                     href="${linkItem.href}"
                  ></component-navigation-link>
               `
            )}
            <slot name="links"></slot>
            ${guard(
               this.contentAfter,
               () =>
                  html`
                     ${repeat(
                        this.contentAfter,
                        (components) => html`
                           ${components}
                        `
                     )}
                  `
            )}
            <slot name="contentAfter"></slot>
         </div>
      `;
   }

   private clickedMenuItem(linkItem: NavigationLinkComponent) {
      RouterService.getUniqueInstance().navigate(BasicService.getUniqueInstance().getValue(linkItem.href, ''));
   }
}
