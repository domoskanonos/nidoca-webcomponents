import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../../abstract-component/component';
import { ComponentLoader } from '../../abstract/component-loader';
import { BasicService } from '@domoskanonos/frontend-basis';

import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';

const componentCSS = require('./component.css');

export class TeaserElementInputData extends AbstractInputData {
   selected?: boolean;
   backgroundContent?: AbstractInputData[];
   foregroundContent?: AbstractInputData[];
}

@customElement('component-teaser-element')
export class TeaserElementComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'TeaserElementComponent';

   @property()
   selected: boolean = false;

   @property()
   foregroundContent: AbstractInputData[] = [];

   @property()
   backgroundContent: AbstractInputData[] = [];

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
                              ${ComponentLoader.getUniqueInstance().createComponentFromInputData(item)}
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
                              ${ComponentLoader.getUniqueInstance().createComponentFromInputData(item)}
                           `
                        )}
                     `
               )}
               <slot name="foreground"></slot>
            </div>
         </div>
      `;
   }

   getDefaultInputData(): TeaserElementInputData {
      return <TeaserElementInputData>{
         componentIdentifier: TeaserElementComponent.IDENTIFIER,
         selected: false,
         foregroundContent: [],
         backgroundContent: []
      };
   }
}
