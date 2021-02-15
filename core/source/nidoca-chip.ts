import {css, customElement, html} from 'lit-element';
import {LitElement} from 'lit-element';

@customElement('nidoca-chip')
export class NidocaChip extends LitElement {
  static styles = css`
    .CHIP {
      display: inline-block;
      background: var(--app-color-surface-background-light);
      padding: 0 12px;
      border-radius: 32px;
      font-size: 13px;
      line-height: 32px;
    }

    .CHIP-hover:hover {
      background: #ccc;
    }
  `;

  render() {
    return html`
      <div class="CHIP">
        <slot></slot>
      </div>
    `;
  }
}
