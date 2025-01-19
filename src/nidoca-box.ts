import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { NidocaTheme, NidocaThemeHelper } from './nidoca-meta';

@customElement('nidoca-box')
export class NidocaBox extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
      padding: var(--space-2);
      box-sizing: border-box;
    }
    slot {
      display: block;
      margin: auto;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      :host {
        padding: var(--space);
      }
    }

    @media only screen and (max-width: 640px) {
      :host {
        padding: var(--space);
      }
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string | undefined = NidocaTheme.plain;

  render(): TemplateResult {
    return html`
      ${NidocaThemeHelper.getStyle(this.theme)}
      <slot></slot>
    `;
  }
}
