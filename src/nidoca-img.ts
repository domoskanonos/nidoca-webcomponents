import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';

@customElement('nidoca-img')
export class NidocaImg extends NidocaHtml {
  static styles = css`
    :host {
      font-size: 0;
    }
    :host img {
      object-position: center;
      object-fit: cover;
    }

    :host .zoom:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }
  `;

  @property({ type: String })
  src: string = '';

  @property({ type: String })
  width: string = '100%';

  @property({ type: String })
  height: string = 'auto';

  @property({ type: Boolean })
  zoom: boolean = false;

  render(): TemplateResult {
    return this.src
      ? html`<img class="${this.zoom ? 'zoom' : ''}" width="${this.width}" height="${this.height}" src="${this.src}" />`
      : html``;
  }


  static exampleImage(): String {
    return 'data:image/jpeg;base64,IMG';
  }

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-img width="64px" width="64px" slot="${slotName}" src="${this.exampleImage()} "></nidoca-img>`;
  }
}
