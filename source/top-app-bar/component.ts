import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { guard } from 'lit-html/directives/guard';
import { repeat } from 'lit-html/directives/repeat';

const componentCSS = require('./component.css');

@customElement('nidoca-top-app-bar')
export class TopAppBarComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'ToolbarComponent';

   @property()
   leftComponents: LitElement[] = [];

   @property()
   mainComponents: LitElement[] = [];

   @property()
   rightComponents: LitElement[] = [];

   constructor() {
      super();
   }

   render() {
      return html`
         <div class="topappbar">
            <div class="left">
               ${guard(
                  this.leftComponents,
                  () =>
                     html`
                        ${repeat(
                           this.leftComponents,
                           (component) => html`
                              ${component}
                           `
                        )}
                     `
               )}
               <slot name="leftComponents"></slot>
            </div>

            <div class="center">
               ${guard(
                  this.mainComponents,
                  () =>
                     html`
                        ${repeat(
                           this.mainComponents,
                           (component) => html`
                              ${component}
                           `
                        )}
                     `
               )}<slot name="mainComponents"></slot>
            </div>
            <div class="right">
               ${guard(
                  this.rightComponents,
                  () =>
                     html`
                        ${repeat(
                           this.rightComponents,
                           (component) => html`
                              ${component}
                           `
                        )}
                     `
               )}
               <slot name="rightComponents"></slot>
            </div>
            <div class="prominent">
               <slot name="prominentComponents"></slot>
            </div>
         </div>
      `;
   }
}
