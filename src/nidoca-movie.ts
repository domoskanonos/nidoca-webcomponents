import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';

@customElement('nidoca-movie')
export class NidocaMovie extends NidocaHtml {
  static styles = css``;

  @property({type: String})
  src: string = '';

  render(): TemplateResult {
    return html`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `;
  }
}
