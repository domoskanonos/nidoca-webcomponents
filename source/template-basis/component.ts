import { css, html, property, query, TemplateResult, unsafeCSS, LitElement } from 'lit-element';

import { BasicService, I18nService } from '@domoskanonos/frontend-basis';
import { BorderType, IconComponent, InputfieldComponent, InputfieldType, NavigationComponent } from '..';
import { NavigationType } from '../navigation/component';

const componentCSS = require('./component.css');

export abstract class BasisTemplate extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'DefaultTemplate';

   @property()
   menuSwitchIcon = 'menu';

   @property()
   menuCss: string = 'menuClosed basicShadow';

   @property()
   navigationClosed: boolean = true;

   @property()
   navigationType: string = NavigationType.DISMISSIBLE;

   @query('#top')
   private topElement: HTMLElement | undefined;
   @query('#left')
   private leftElement: HTMLElement | undefined;
   @query('#main')
   private mainElement: HTMLElement | undefined;

   render() {
      return html`
         <component-border borderType="${BorderType.RIGHT}">
            <component-navigation .closed="${this.navigationClosed}" navigationType="${this.navigationType}">
               ${this.getLeftNavigationContent()}
            </component-navigation>
         </component-border>

         <top id="top" class="${this.menuCss}" @component-icon-click="${this.menuItemClicked}">
            <component-border borderType="${BorderType.BOTTOM}">
               ${this.getTopContent()}
            </component-border>
         </top>
         <div id="main" class="${this.menuCss} body-opacity">
            ${this.getMainComponent()}
         </div>
      `;
   }

   abstract getMainComponent(): TemplateResult;

   abstract getLeftNavigationContent(): TemplateResult;

   abstract getTopContent(): TemplateResult;

   menuItemClicked(event: CustomEvent) {
      let id: IconComponent = event.detail;
      if (BasicService.getUniqueInstance().isEqual(id.icon, this.menuSwitchIcon)) {
         console.log('menuItemClicked...');
         this.toogleMenu();
      }
   }

   private toogleMenu(): void {
      if (this.menuCss.indexOf('menuClosed') == -1) {
         this.menuCss = 'menuClosed basicShadow';
         this.navigationClosed = true;
      } else if (this.navigationType == NavigationType.PERMANENT) {
         this.menuCss = 'permanent-top permanent-main';
         this.navigationClosed = false;
      } else if (this.navigationType == NavigationType.DISMISSIBLE) {
         this.menuCss = 'dismissible-main';
         this.navigationClosed = false;
      } else {
         this.menuCss = 'basicShadow';
         this.navigationClosed = false;
      }
   }
}
