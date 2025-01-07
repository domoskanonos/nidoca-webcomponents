import { css, html, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html.js';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-accordion-item')
export class NidocaAccordionItem extends NidocaHtml {
  static styles = css`
    :host {
      border-left-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-width: thin;
      display: block;
      width: 100%;
    }

    
    .header {
      height: var(--height-medium);
      box-sizing: border-box;
      padding-left: var(--space-2);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      align-content: center;
      cursor: pointer;
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.surface;

  @property({ type: String })
  header: string = '';

  @property({ type: Boolean })
  opened: boolean = false;

  render(): TemplateResult {
    return html`
      <div @click="${() => this.toggle()}" class="header">
        <nidoca-text theme="${this.theme}" text="${this.header}"></nidoca-text>
        <nidoca-icon icon="${this.opened ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}"></nidoca-icon>
      </div>
      ${this.opened ? html` <slot></slot>` : html``}
    `;
  }

  toggle() {
    console.log('accordion clicked, state=' + this.opened);
    this.opened = Boolean(!this.opened);
    console.log('accordion clicked, after state=' + this.opened);
    this.dispatchEvent(
      new CustomEvent('nidoca-event-accordion-item-clicked', {
        detail: this,
        bubbles: true,
        composed: true,
      })
    );
  }
}
