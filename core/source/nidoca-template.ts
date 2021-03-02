import {css, html, property, query, TemplateResult, LitElement} from 'lit-element';

import {NavigationType} from './nidoca-navigation';
import {BorderProperties} from './nidoca-border';
import {NidocaIcon} from './nidoca-icon';

export abstract class NidocaTemplate extends LitElement {
  static styles = css`
    #top {
      position: fixed;
      width: calc(100%);
      height: var(--menubar-height);
      right: 0;
      z-index: 10;
      background-color: var(--app-color-primary-background);
      color: var(--app-color-primary);
    }

    #top.menuClosed {
      width: 100%;
    }

    #main {
      padding-top: var(--menubar-height);
      min-height: 100%;
    }
    #main.menuClosed {
      margin-left: 0;
    }

    #main.body-opacity {
      opacity: 0.5;
      transition: all 0.35s ease;
    }

    #main.menuClosed {
      margin-left: 0;
      opacity: 1;
      background: #fff;
      transition: all 0.35s ease;
    }

    #main.dismissible-main {
      opacity: 1;
      transition: all 0.35s ease;
    }

    #main.menuClosed {
      margin-left: 0;
      opacity: 1;
      background: #fff;
      transition: all 0.35s ease;
    }

    .permanent-main {
      width: calc(100vw - var(--menu-size)) !important;
      position: relative;
      float: right;
      transition: all 0.35s ease;
    }

    .dismissible-main {
      width: calc(100vw - var(--menu-size)) !important;
      position: relative;
      float: right;
      transition: all 0.35s ease;
    }

    #main {
      width: 100%;
    }

    @media screen and (min-width: 521px) {
      #main {
        transition: margin-left 0.25s linear;
        margin-left: var(--menu-size);
      }
    }
  `;

  @property()
  menuSwitchIcon = 'menu';

  @property()
  menuCss: string = 'menuClosed basicShadow';

  @property()
  navigationClosed: boolean = true;

  @property()
  navType: string = NavigationType.DISMISSIBLE;

  @query('#top')
  private topElement: HTMLElement | undefined;
  @query('#left')
  private leftElement: HTMLElement | undefined;
  @query('#main')
  private mainElement: HTMLElement | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-navigation
        @nidoca-event-link-clicked="${(event: CustomEvent) => this.navigationLinkClicked(event)}"
        .closed="
                ${this.navigationClosed}"
        navigationType="${this.navType}"
      >
        ${this.getLeftNavigationContent()}
      </nidoca-navigation>
      <div
        id="top"
        class="${this.menuCss}"
        @nidoca-event-icon-clicked="${(event: CustomEvent) => this.menuIconClicked(event)}"
      >
        <nidoca-border ..borderProperties="${[BorderProperties.BOTTOM]}"> ${this.getTopContent()}</nidoca-border>
      </div>
      <div id="main" class="${this.menuCss} body-opacity">${this.getMainComponent()}</div>
    `;
  }

  navigationLinkClicked(event: CustomEvent<any>): void {
    throw new Error('Method not implemented.' + event);
  }

  getMainComponent(): TemplateResult {
    return html``;
  }
  getLeftNavigationContent(): TemplateResult {
    return html``;
  }
  getTopContent(): TemplateResult {
    return html``;
  }

  menuIconClicked(event: CustomEvent) {
    let id: NidocaIcon = event.detail;
    if (id.icon === this.menuSwitchIcon) {
      console.log('menu icon clicked...');
      this.toogleMenu();
    }
  }

  private toogleMenu(): void {
    if (this.menuCss.indexOf('menuClosed') == -1) {
      this.menuCss = 'menuClosed basicShadow';
      this.navigationClosed = true;
    } else if (this.navType == NavigationType.PERMANENT) {
      this.menuCss = 'permanent-top permanent-main';
      this.navigationClosed = false;
    } else if (this.navType == NavigationType.DISMISSIBLE) {
      this.menuCss = 'dismissible-main';
      this.navigationClosed = false;
    } else {
      this.menuCss = 'basicShadow';
      this.navigationClosed = false;
    }
  }
}
