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
      width: min-content;
    }

    @media only screen and (min-width: 641px) and (max-width: 1918px) {
      slot {
        width: 50%;
      }
    }

    @media only screen and (max-width: 640px) {
      slot {
        width: 90%;
      }
    }

    @media only screen and (min-width: 1919px) {
      slot {
        width: 75%;
      }
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.background;

  render(): unknown {
    return html`
      ${NidocaThemeHelper.getStyle(this.theme)}
      <slot></slot>
    `;
  }
}
