import {css, customElement, html, property, unsafeCSS, LitElement, TemplateResult} from 'lit-element';
import {VisibleType} from './nidoca-visible';
import {TransitionType} from './nidoca-transition';

@customElement('nidoca-dialog')
export class NidocaDialog extends LitElement {
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
      width: min-content;
      height: auto;

      padding: 0;
      margin: 0 auto;
    }
  `;

  @property()
  show: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-visible visibleType="${this.show ? VisibleType.NORMAL : VisibleType.HIDE}">
        <div class="fullScreen opacScreen"></div>
        <div class="fullScreen wrapperOutside">
          <div class="wrapperInside">
            <!-- Dialog -->
            <nidoca-transition .transitionType="${TransitionType.SLIDE_CENTER}">
              <div class="dialogContainer">
                <slot></slot>
              </div>
            </nidoca-transition>
          </div>
        </div>
      </nidoca-visible>
    `;
  }
}
