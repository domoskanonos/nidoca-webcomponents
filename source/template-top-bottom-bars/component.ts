import { css, html, property, query, TemplateResult, unsafeCSS, LitElement } from 'lit-element';

import { BasicService } from '@domoskanonos/frontend-basis/lib';
import { NidocaIcon } from '..';

const componentCSS = require('./component.css');

export abstract class NidocaTopBottomTemplate extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'DefaultTemplate';

   @property()
   menuSwitchIcon = 'menu';

   @property()
   menuCss: string = 'menuClosed basicShadow';

   @query('#top')
   private topElement: HTMLElement | undefined;
   @query('#left')
   private leftElement: HTMLElement | undefined;
   @query('#main')
   private mainElement: HTMLElement | undefined;

   render() {
      return html`
         <div class="container" @nidoca-event-icon-clicked="${this.menuItemClicked}">
            <div id="top" class="${this.menuCss}">
               ${this.getTopContent()}
            </div>
            <div id="left" class="${this.menuCss}">
               ${this.getLeftComponent()}
            </div>
            <div id="main" class="${this.menuCss}">
               ${this.getMainComponent()}
            </div>
            <div id="bottom" class="${this.menuCss}">
               ${this.getBottomContent()}
            </div>
         </div>
      `;
   }

   abstract getMainComponent(): TemplateResult;

   abstract getLeftComponent(): TemplateResult;

   abstract getTopContent(): TemplateResult;

   abstract getBottomContent(): TemplateResult;

   protected inputDataChanged(): void {}

   public getOutputData(): undefined {
      return undefined;
   }

   menuItemClicked(event: CustomEvent) {
      let id: NidocaIcon = event.detail;
      if (BasicService.getUniqueInstance().isEqual(id.icon, this.menuSwitchIcon)) {
         console.log('menuItemClicked...');
         this.toogleMenu();
      }
   }

   private toogleMenu(): void {
      if (this.menuCss.indexOf('menuClosed') == -1) {
         this.menuCss = 'menuClosed basicShadow';
      } else {
         this.menuCss = 'basicShadow';
      }
   }
}
