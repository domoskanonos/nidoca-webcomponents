import { css, html, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';

@customElement('nidoca-upload')
export class NidocaUpload extends NidocaHtml {
  static styles = css``;

  @property({ type: String })
  code: string = '';

  render(): any {
    return html``;
  }
}
