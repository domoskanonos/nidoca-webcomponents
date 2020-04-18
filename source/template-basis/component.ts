import {css, html, property, query, TemplateResult, unsafeCSS, LitElement} from 'lit-element';

import {BasicService} from '@domoskanonos/frontend-basis';
import {BorderType, ColorScheme, IconComponent} from '..';

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

    @query('#top')
    private topElement: HTMLElement | undefined;
    @query('#left')
    private leftElement: HTMLElement | undefined;
    @query('#main')
    private mainElement: HTMLElement | undefined;

    render() {
        return html`
         <div class="container" @component-icon-click="${this.menuItemClicked}">
            <top id="top" class="${this.menuCss}">
               <effect-color colorScheme="${ColorScheme.PRIMARY_SCHEME}">
                  <component-border borderType="${BorderType.BOTTOM}">
                     ${this.getTopContent()}
                  </component-border>
               </effect-color>
            </top>
            <div id="left" class="${this.menuCss}">
               <effect-color colorScheme="${ColorScheme.PRIMARY_SCHEME}"
                  ><component-border borderType="${BorderType.RIGHT}">
                     ${this.getLeftComponent()}
                  </component-border></effect-color
               >
            </div>
            <div id="main" class="${this.menuCss}">
               ${this.getMainComponent()}
            </div>
         </div>
      `;
    }

    abstract getMainComponent(): TemplateResult;

    abstract getLeftComponent(): TemplateResult;

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
        } else {
            this.menuCss = 'basicShadow';
        }
    }
}
