import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme} from './nidoca-meta';

@customElement('nidoca-text')
export class NidocaText extends LitElement {
  static styles = css`
    :host,
    slot,
    ::slotted(:host),
    ::slotted(slot) {
      display: block;
      font-weight: 400;
      line-height: 1.5em;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined = NidocaTheme.primary;

  @property({type: String})
  text: string = '';

  render(): TemplateResult {
    return html` <slot>${this.text}</slot>`;
  }
}
