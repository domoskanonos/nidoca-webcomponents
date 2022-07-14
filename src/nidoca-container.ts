import {css, html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme, NidocaThemeHelper} from '.';

@customElement('nidoca-container')
export class NidocaContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    slot {
      display: block;
      margin: auto;
      width: auto;
      max-width: var(--max-width);
    }
  `;

  @property({type: String})
  theme: string = NidocaTheme.background;

  render(): unknown {
    return html`
      ${NidocaThemeHelper.getStyle(this.theme)}
      <slot></slot>
    `;
  }
}
