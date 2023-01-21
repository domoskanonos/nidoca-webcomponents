import {html, LitElement, TemplateResult, css} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';

@customElement('nidoca-elevation')
export class NidocaElevation extends NidocaHtml {
  static styles = css`
    .container {
      position: fixed;
      z-index: 999;
    }
  `;

  @property({type: Boolean})
  show: boolean = false;

  @property({type: Object})
  associatedElement: HTMLElement | undefined;

  constructor() {
    super();
    addEventListener('click', (me: MouseEvent) => {
      const rect = this.associatedElement?.getBoundingClientRect();
      if (rect) {
        if (rect.top > me.clientY || rect.right < me.clientX || rect.left > me.clientX || rect.bottom < me.clientY) {
          this.dispatchEvent(
            new CustomEvent('nidoca-elevation-event-closeme', {
              detail: this,
              bubbles: true,
              composed: true,
            })
          );
        }
      }
    });
  }

  render(): TemplateResult {
    return this.show
      ? html`
          <div class="container" style="${this.calculatePositionStyle(this.associatedElement)}">
            <nidoca-border>
              <slot id="slot"></slot>
            </nidoca-border>
          </div>
        `
      : html``;
  }

  calculatePositionStyle(basedOnComponent: HTMLElement | undefined): string {
    let style: string = '';
    if (basedOnComponent) {
      const rect = basedOnComponent.getBoundingClientRect();
      if (rect.right > window.innerWidth / 2) {
        style += `right:${window.innerWidth - rect.right}px;`;
      } else {
        style += `left:${rect.left}px;`;
      }
      if (rect.top > window.innerHeight / 2) {
        style += `bottom:${rect.height + window.innerHeight - rect.top}px;`;
      } else {
        style += `top:${rect.bottom}px;`;
      }
    }
    return style;
  }
}
