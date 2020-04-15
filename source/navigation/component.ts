import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';
import { guard } from 'lit-html/directives/guard';
import { ComponentLoader } from '../abstract/component-loader';
import { repeat } from 'lit-html/directives/repeat';
import { RouterService } from '@domoskanonos/frontend-basis';
import { NavigationLinkInputData } from './navigation-link/component';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class NavigationInputData extends AbstractInputData {
   clazz?: string;
   links?: NavigationLinkInputData[];
   contentBefore?: AbstractInputData[];
   contentAfter?: AbstractInputData[];
}

@customElement('component-navigation')
export class NavigationComponent extends LitElement {
   @property()
   clazz: string = '';

   @property()
   links: NavigationLinkInputData[] = [];

   @property()
   contentBefore: AbstractInputData[] = [];

   @property()
   contentAfter: AbstractInputData[] = [];

   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'NavigationComponent';

   getDefaultInputData(): NavigationInputData {
      return <NavigationInputData>{
         componentIdentifier: NavigationComponent.IDENTIFIER,
         links: [
            { text: 'Homepage', href: '#', icon: 'icon-home' },
            { text: 'Get started', href: '#get-started', iconClazz: '' },
            { text: 'Form', href: '#form', iconClazz: '' },
            { text: 'Media', href: '#media', iconClazz: '' },
            { text: 'Komponenten', href: '#c', iconClazz: '' },
            { text: 'Komplexe Komponenten', href: '#cc', iconClazz: '' },
            { text: 'Dynamische Komponenten', href: '#dc', iconClazz: '' }
         ]
      };
   }

   render() {
      return html`
         <div>
            ${guard(
               this.contentBefore,
               () =>
                  html`
                     ${repeat(
                        this.contentBefore,
                        (inputData) => html`
                           ${ComponentLoader.getUniqueInstance().createComponentFromInputData(inputData)}
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
                        (inputData) => html`
                           ${ComponentLoader.getUniqueInstance().createComponentFromInputData(inputData)}
                        `
                     )}
                  `
            )}
            <slot name="contentAfter"></slot>
         </div>
      `;
   }

   private clickedMenuItem(linkItem: NavigationLinkInputData) {
       RouterService.getUniqueInstance().navigate(BasicService.getUniqueInstance().getValue(linkItem.href, ''));
   }
}
