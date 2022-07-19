import {css, html, TemplateResult, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme} from './nidoca-meta';

@customElement('nidoca-article')
export class NidocaArticle extends LitElement {
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
      padding-bottom: var(--space-2);
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.primary;

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
      <div style="display:flex; flex-direction:column;">
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
}
