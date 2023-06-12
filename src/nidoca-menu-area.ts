import {css, html, TemplateResult} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';

@customElement('nidoca-menu-area')
export class NidocaMenuArea extends NidocaHtml {
  static styles = css`
    .container {
      display: flex;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }
  `;

  @property({type: String})
  text: string = '';

  @property({type: String})
  icon: string = '';

  render(): TemplateResult {
    return html`
      <div class="container">
        ${this.icon
          ? html` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`
          : html``}
        ${this.text ? html` <nidoca-text-button>${this.text}</nidoca-text-button>` : html``}
        <slot></slot>
      </div>
    `;
  }

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-menu-area slot="${slotName}" icon="gavel" text="Rechtliches"></nidoca-menu-area>`;
  }
}
