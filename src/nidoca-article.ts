import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme} from './nidoca-meta';

@customElement('nidoca-article')
export class NidocaArticle extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
    }
    slot {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;

    }

    .paddingBottom {
      padding-bottom: var(--space);
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.plain;

  @property({type: String})
  overline: string = '';

  @property({type: String})
  title: string = '';

  @property({type: String})
  summary: string = '';

  @property({type: String})
  text: string = '';

  render(): TemplateResult {
    return html`
      <div style="background-color: var(--app-color-${this.theme}-background); display:flex; flex-direction:column;">
        ${this.overline
          ? html` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.overline}</nidoca-text-body> `
          : html``}
        ${this.title
          ? html` <nidoca-text-h2 theme="${this.theme}" class="paddingBottom">${this.title}</nidoca-text-h2> `
          : html``}
        ${this.summary
          ? html`
              <nidoca-text-caption theme="${this.theme}" class="paddingBottom">${this.summary}</nidoca-text-caption>
            `
          : html``}
        ${this.text
          ? html` <nidoca-text-body theme="${this.theme}" class="paddingBottom">${this.text}</nidoca-text-body>`
          : html``}
        <slot></slot>
      </div>
    `;
  }

  static example(slotName: string = '', theme: string = 'plain'): TemplateResult {
    return html`<nidoca-article
      theme="${theme}"
      slot="${slotName}"
      style="padding:25px;"
      overline="Lorem Ipsum Dolorem"
      title="Lorem Ipsum"
      summary="Lorem Ipsum Dolorem ipsum med en to."
      text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
    ></nidoca-article>`;
  }
}
