import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';

export type NidocaTargetType = '_blank' | '_self' | '_parent' | '_top';

@customElement('nidoca-link')
export class NidocaLink extends NidocaHtml {
  static styles = css`
    :host,
    ::slotted(:host) {
      display: inline-block;
      line-height: 1.5em;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `;

  @property({type: String})
  text: string = '';

  @property({type: String})
  href: string = '';

  @property({type: String})
  targetType: string = '_self';

  render(): TemplateResult {
    return html`<a href="${this.href}" .target="${this.targetType}">
      <nidoca-text>${this.text}</nidoca-text>
      <slot></slot>
    </a> `;
  }
}
