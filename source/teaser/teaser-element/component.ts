import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';


import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';

const componentCSS = require('./component.css');


@customElement('component-teaser-element')
export class TeaserElementComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   selected: boolean = false;

   @property()
   foregroundContent: LitElement[] = [];

   @property()
   backgroundContent: LitElement[] = [];

   render() {
      return html`
         <div class="item ${this.selected ? 'selected' : ''}">
            <div class="background">
               ${guard(
                  [this.backgroundContent],
                  () =>
                     html`
                        ${repeat(
                           this.backgroundContent,
                           (item) => html`
                              ${item}
                           `
                        )}
                     `
               )}
               <slot name="background"></slot>
            </div>
            <div class="foreground">
               ${guard(
                  [this.foregroundContent],
                  () =>
                     html`
                        ${repeat(
                           this.foregroundContent,
                           (item) => html`
                              ${item}
                           `
                        )}
                     `
               )}
               <slot name="foreground"></slot>
            </div>
         </div>
      `;
   }

}
