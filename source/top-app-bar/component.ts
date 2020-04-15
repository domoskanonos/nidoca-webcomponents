import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';
import { ComponentLoader } from '../abstract/component-loader';
import { guard } from 'lit-html/directives/guard';
import { repeat } from 'lit-html/directives/repeat';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class TopAppBarInputData extends AbstractInputData {
   leftInputData: AbstractInputData[] = [];
   mainInputData: AbstractInputData[] = [];
   rightInputData: AbstractInputData[] = [];
}

@customElement('component-top-app-bar')
export class TopAppBarComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'ToolbarComponent';

   @property()
   leftInputData: AbstractInputData[] = [];

   @property()
   mainInputData: AbstractInputData[] = [];

   @property()
   rightInputData: AbstractInputData[] = [];

   constructor() {
      super();
   }

   render() {
      return html`
         <div class="topappbar">
            <div class="left">
               ${guard(
                  this.leftInputData,
                  () =>
                     html`
                        ${repeat(
                           this.leftInputData,
                           (inputData) => html`
                              ${ComponentLoader.getUniqueInstance().createComponentFromInputData(inputData)}
                           `
                        )}
                     `
               )}
               <slot name="leftComponents"></slot>
            </div>

            <div class="center">
               ${guard(
                  this.mainInputData,
                  () =>
                     html`
                        ${repeat(
                           this.mainInputData,
                           (inputData) => html`
                              ${ComponentLoader.getUniqueInstance().createComponentFromInputData(inputData)}
                           `
                        )}
                     `
               )}<slot name="mainComponents"></slot>
            </div>
            <div class="right">
               ${guard(
                  this.rightInputData,
                  () =>
                     html`
                        ${repeat(
                           this.rightInputData,
                           (inputData) => html`
                              ${ComponentLoader.getUniqueInstance().createComponentFromInputData(inputData)}
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
