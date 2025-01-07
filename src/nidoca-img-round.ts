import { css, html, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { NidocaImg } from './nidoca-img';

@customElement('nidoca-img-round')
export class NidocaImgRound extends NidocaImg {
  static styles = css`
    :host {
      font-size: 0;
      display: inline-block;
      box-sizing: border-box;
    }
    :host img {
      object-position: center;
      object-fit: cover;
      padding: 0.25em;
      border-radius: 50%;
    }

    :host .zoom:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }
  `;

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-img-round width="64px" width="64px" slot="${slotName}" src="face.jpg"></nidoca-img-round>`;
  }
}
