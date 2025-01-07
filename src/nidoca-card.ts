import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement, property } from 'lit/decorators.js';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-card')
export class NidocaCard extends NidocaHtml {
  static styles = css`
    :host {
      box-sizing: border-box;
      display: block;
      border-radius: 1rem;
      border-style: solid;
      border-width: var(--border-width-min);
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.16);
      height: 100%;
    }
    slot {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.surface;

  render(): TemplateResult {
    return html`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background-light);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot></slot>
    `;
  }
}
