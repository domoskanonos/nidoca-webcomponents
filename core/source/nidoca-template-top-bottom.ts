import {css, html, property, query, TemplateResult, LitElement} from 'lit-element';

import {NidocaIcon} from './nidoca-icon';

export abstract class NidocaTopBottomTemplate extends LitElement {
  static styles = css`
    .container {
      height: calc(100vh - var(--menubar-height));
      width: 100%;
      padding: 0;
      margin: 0;
    }

    #top {
      position: fixed;
      width: calc(100%);
      height: var(--menubar-height);
      right: 0;
      z-index: 10;
    }

    #top.menuClosed {
      width: 100%;
    }

    #bottom {
      position: fixed;
      width: 100px;
      height: calc(50%);
      right: 0;
      bottom: 25%;
      z-index: 10;
    }

    @media (orientation: portrait) {
      #bottom {
        position: fixed;
        width: calc(100%);
        height: var(--menubar-height);
        right: 0;
        bottom: 0;
        z-index: 10;
      }
      #bottom.menuClosed {
        width: 100%;
      }
    }

    #left {
      height: calc(100% - var(--menubar-height));
      width: var(--menu-size);
      transition: left 0.25s linear;
      position: fixed;
      z-index: 1;
      top: var(--menubar-height);
      left: 0;
      overflow-x: hidden;
    }

    #left.menuClosed {
      left: calc(-1 * var(--menu-size));
      transition: left 0.25s linear;
    }

    #main {
      padding-top: var(--menubar-height);

      min-height: 100%;
    }
    #main.menuClosed {
      margin-left: 0;
    }

    @media screen and (min-width: 521px) {
      #main {
        transition: margin-left 0.25s linear;
        margin-left: var(--menu-size);
      }

      #main.menuClosed {
        margin-left: 0;
        transition: margin-left 0.25s linear;
      }
    }
  `;

  static IDENTIFIER: string = 'DefaultTemplate';

  @property()
  menuSwitchIcon: string = 'menu';

  @property()
  menuCss: string = 'menuClosed basicShadow';

  @query('#top')
  private topElement: HTMLElement | undefined;
  @query('#left')
  private leftElement: HTMLElement | undefined;
  @query('#main')
  private mainElement: HTMLElement | undefined;

  render(): TemplateResult {
    return html`
      <div class="container" @nidoca-event-icon-clicked="${this.menuItemClicked}">
        <div id="top" class="${this.menuCss}">${this.getTopContent()}</div>
        <div id="left" class="${this.menuCss}">${this.getLeftComponent()}</div>
        <div id="main" class="${this.menuCss}">${this.getMainComponent()}</div>
        <div id="bottom" class="${this.menuCss}">${this.getBottomContent()}</div>
      </div>
    `;
  }

  abstract getMainComponent(): TemplateResult;

  abstract getLeftComponent(): TemplateResult;

  abstract getTopContent(): TemplateResult;

  abstract getBottomContent(): TemplateResult;

  menuItemClicked(event: CustomEvent) {
    let id: NidocaIcon = event.detail;
    if (id.icon === this.menuSwitchIcon) {
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
