import {css, html, TemplateResult, LitElement, PropertyValues} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {query} from 'lit/decorators.js';

@customElement('nidoca-template')
export class NidocaTemplate extends NidocaHtml {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    }

    #left {
      display: block;
      color: var(--app-color-text-primary);
      background-color: var(--app-color-primary-background);
      min-width: 280px;
      min-height: 100%;
      max-height: 100%;
    }

    #left.hideLeft {
      transition: all 0.35s ease;
      display: none;
    }

    @media screen and (max-width: 640px) {
      #left {
        position: fixed;
        z-index: 1;
      }
    }

    .right {
      width: 100%;
      height: 100vh;
      overflow: scroll;
    }
  `;

  @property({type: Boolean})
  hideLeft: boolean = true;

  @property({type: Boolean})
  prominent: boolean = false;

  @query('#header')
  private headerElement: HTMLElement | undefined;

  @query('#left')
  private leftElement: HTMLElement | undefined;

  @query('#content')
  private contentElement: HTMLElement | undefined;

  constructor() {
    super();
    document.getElementsByTagName('html')[0].setAttribute('oncontextmenu', 'return false'); // avoid right click context menu
    this.addEventListener('click', (event: MouseEvent) => {
      if (!this.hideLeft && this.leftElement) {
        console.log('close');
        const rect = this.leftElement.getBoundingClientRect();
        this.hideLeft = 641 > window.innerWidth && 0 <= event.x - rect.width;
      }
    });
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);
    /*
            new Promise((resolve) => requestAnimationFrame(resolve)).then(() => {
              if (this.headerElement != undefined) {
                const height = this.headerElement.offsetHeight;
                const topStyle = "top:".concat(String(height)).concat("px;");
                const paddingTopStyle = "padding-top:".concat(String(height)).concat("px;");
                console.debug("set header height to corresponding elements: %s", topStyle);
                if (this.leftElement != undefined) {
                  this.leftElement.setAttribute("style", topStyle);
                }
                if (this.contentElement != undefined) {
                  this.contentElement.setAttribute("style", paddingTopStyle);
                }
              }
            });
             */
  }

  render(): TemplateResult {
    return html`
      <slot
        id="left"
        @nidoca-event-menu-item-clicked="${() => {
          if (641 > window.innerWidth) {
            this.hideLeft = true;
          }
        }}"
        class="${this.hideLeft ? 'hideLeft' : ''}"
        name="left"
      >
      </slot>

      <div class="right">
        <nidoca-top-app-bar theme="primary" id="header" .prominent="${this.prominent}">
          <nidoca-icon
            slot="left"
            style="padding-left:var(--space-2);"
            icon="menu"
            .clickable="${true}"
            @nidoca-event-icon-clicked="${() => {
              this.hideLeft = !this.hideLeft;
            }}"
          ></nidoca-icon>

          <span slot="left">
            <slot class="slotHeader" name="topLeft"></slot>
          </span>
          <span slot="center">
            <slot class="slotHeader" name="topCenter"></slot>
          </span>
          <span slot="right">
            <slot class="slotHeader" name="topRight"></slot>
          </span>
          <span style="width: 100%;" slot="prominent">
            <slot class="slotHeader" name="prominent"></slot>
          </span>
        </nidoca-top-app-bar>
        <slot id="content" name="content"></slot>
      </div>
    `;
  }
}
