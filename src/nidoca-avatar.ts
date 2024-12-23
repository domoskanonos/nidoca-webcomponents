import {css, html, LitElement, TemplateResult} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme} from './nidoca-meta';

@customElement('nidoca-avatar')
export class NidocaAvatar extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.surface;

  @property({type: String})
  src: string = '';

  @property({type: String})
  title: string = '';

  @property({type: String})
  subtitle: string = '';

  render(): TemplateResult {
    return html`
            <div
                    style="display:flex;flex-direction:column;align-items:center;justify-content:space-between;align-content:center;"
            >
                <nidoca-img-round src="${this.src}"></nidoca-img-round>
                <div style="padding: var(--space);">
                <nidoca-text-body style="text-align:center;" theme="${this.theme}">${this.title}</nidoca-text-body>
                <nidoca-text-caption style="text-align:center;" theme="${this.theme}">${this.subtitle}</nidoca-text-caption>

  </div>
            </div>
            </div>`;
  }

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-avatar
      width="64px"
      width="64px"
      slot="${slotName}"
      title="Dominik Bruhn"
      subtitle="Softwareentwickler"
      src="face.jpg"
      >Dominik Bruhn</nidoca-avatar
    >`;
  }
}
