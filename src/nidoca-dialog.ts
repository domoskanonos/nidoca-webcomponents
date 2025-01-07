import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaTransitionType } from './nidoca-transition';

@customElement('nidoca-dialog')
export class NidocaDialog extends NidocaHtml {
  static styles = css`
    .fullScreen {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .opacScreen {
      z-index: 20;
      opacity: 0.85;
      background-color: var(--app-color-surface-background);
    }

    .wrapperOutside {
      display: table;
      z-index: 30;
    }

    .wrapperInside {
      display: table-cell;
      vertical-align: middle;
    }

    .dialogContainer {
      width: max-content;
      height: auto;

      padding: 0;
      margin: 0 auto;
    }
  `;

  @property({ type: Boolean })
  show: boolean = false;

  render(): TemplateResult {
    return this.show
      ? html`
          <div class="fullScreen opacScreen"></div>
          <div class="fullScreen wrapperOutside">
            <div class="wrapperInside">
              <!-- Dialog -->
              <nidoca-transition .transitionType="${NidocaTransitionType.SLIDE_CENTER}">
                <div class="dialogContainer">
                  <slot></slot>
                </div>
              </nidoca-transition>
            </div>
          </div>
        `
      : html``;
  }
}
