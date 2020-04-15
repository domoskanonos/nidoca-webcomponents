import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';
import { LinkComponent, LinkInputData } from '../link/component';
import { guard } from 'lit-html/directives/guard';
import { repeat } from 'lit-html/directives/repeat';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class BreadcrumbInputData extends AbstractInputData {
   links?: LinkInputData[];
}

@customElement('component-breadcrumb')
export class BreadcrumbComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'BreadcrumbComponent';

   @property()
   links: LinkInputData[] = [];

   render() {
      return html`
         <component-flex-container .containerClazzes="CONTAINER_100 alignItemsCenter">
            ${guard(
               this.links,
               () =>
                  html`
                     ${repeat(
                        this.links,
                        (link, index) => html`
                           <component-icon
                              iconClazz="${index > 0 && index < this.links.length ? 'fas fa-chevron-right' : ''}"
                              clickable="false"
                              .status="2"
                           ></component-icon>
                           <component-link .inputData="${link}"></component-link>
                        `
                     )}
                  `
            )}
         </component-flex-container>
      `;
   }

   getDefaultInputData(): BreadcrumbInputData {
      return <BreadcrumbInputData>{
         componentIdentifier: BreadcrumbComponent.IDENTIFIER,
         links: [
            <LinkInputData>{
               componentIdentifier: LinkComponent.IDENTIFIER,
               text: 'Mein Katalog',
               href: ''
            },
            <LinkInputData>{
               componentIdentifier: LinkComponent.IDENTIFIER,
               text: 'Meine Welt',
               href: ''
            },
            <LinkInputData>{
               componentIdentifier: LinkComponent.IDENTIFIER,
               text: 'Meine Anwendungen',
               href: ''
            }
         ]
      };
   }
}
