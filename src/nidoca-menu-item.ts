import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme} from './nidoca-meta';

@customElement('nidoca-menu-item')
export class NidocaMenuItem extends NidocaHtml {
  static styles = css`
    .container {
      display: flex;
      cursor: pointer;
      padding-left: var(--space-2);
      padding-right: var(--space-2);
      padding-top: var(--space);
      padding-bottom: var(--space);
    }

    .selected {
      backdrop-filter: contrast(var(--app-color-percent-selected));
    }
  `;

  @property({type: String})
  text: string = '';

  @property({type: String})
  icon: string = '';

  @property({type: Boolean})
  selected: boolean = false;

  @property({type: String})
  theme: string = NidocaTheme.surface;

  render(): TemplateResult {
    return html`
      <style>
        .container:hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <div class="container ${this.selected ? 'selected' : ''}" @click="${() => this.clicked()}">
        ${this.icon
          ? html` <nidoca-icon
              slot="graphic"
              icon="${this.icon}"
              style="padding-right:var(--space); font-size:var(--icon-size);"
            ></nidoca-icon>`
          : html``}
        ${this.text ? html` <nidoca-text-body theme="${this.theme}">${this.text}</nidoca-text-body>` : html``}
      </div>
    `;
  }

  private clicked() {
    this.dispatchEvent(
      new CustomEvent('nidoca-event-menu-item-clicked', {
        detail: this,
        bubbles: true,
        composed: true,
      })
    );
  }

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-menu-item slot="${slotName}" text="Start" icon="home"></nidoca-menu-item>`;
  }
}
