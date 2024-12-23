import {css, html, LitElement, TemplateResult} from 'lit';
import {NidocaHtml} from './../nidoca-html';

import {customElement} from 'lit/decorators.js';

@customElement('nidoca-page-login')
export class NidocaPageLogin extends NidocaHtml {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 100vh;
      width: 100vw;
    }

    .right {
      background-color: var(--app-color-text-primary-background);
    }

    .left {
      margin: auto;
      width: min-content;
      height: min-content;
    }

    @media only screen and (max-width: 640px) {
      :host {
        grid-template-columns: 1fr;
      }
      .right {
        display: block;
        overflow: hidden;
        position: absolute;
        height: 100%;
        width: 100%;
        opacity: 0.1;
        z-index: -1;
      }
    }
  `;

  render(): TemplateResult {
    return html`
      <nidoca-form-login class="left"></nidoca-form-login>
      <nidoca-img class="right" src="http://nidoca.eu/img/IMG_0524.jpg"></nidoca-img>
    `;
  }
}
