import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaDevice, NidocaTheme} from '.';

@customElement('nidoca-box')
export class NidocaBox extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: var(--space-6);
      box-sizing: border-box;
    }
    slot {
      display: block;
      margin: auto;
    }

    @media only screen and (min-width: ${NidocaDevice.TABLET.minWidth}px) and (max-width: ${NidocaDevice.TABLET
        .maxWidth}px) {
      :host {
        padding: var(--space-4);
      }
    }

    @media only screen and (max-width: ${NidocaDevice.MOBILE.maxWidth}px) {
      :host {
        padding: var(--space-2);
      }
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined = NidocaTheme.TRANSPARENT;

  render(): TemplateResult {
    return html`
      ${NidocaTheme.getStyle(this.theme)}
      <slot></slot>
    `;
  }
}
