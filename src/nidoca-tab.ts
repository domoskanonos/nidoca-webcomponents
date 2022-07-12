import {css, html, TemplateResult, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme, NidocaThemeHelper} from '.';

@customElement('nidoca-tab')
export class NidocaTab extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding-right: var(--space);
    }

    .container {
      line-height: var(--height-min);
      height: var(--height-min);
      box-sizing: border-box;
      cursor: pointer;
      border-width: var(--border-width-max);
      border-bottom-style: solid;
    }

    slot {
      display: block;
    }
  `;

  @property({type: Boolean})
  selected: boolean = false;

  @property({type: String})
  text: string = '';

  @property({type: String})
  theme: string = NidocaTheme.surface;

  render(): TemplateResult {
    return html`
      <style>
        .container {
          border-color: var(--app-color-${this.theme}-background);
        }
        .selected {
          border-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container ${this.selected ? 'selected' : ''}" @click="${() => this.tabClicked()}">
        ${this.text ? html` <nidoca-text text="${this.text}"></nidoca-text> ` : html``}
        <slot></slot>
      </div>
    `;
  }

  private tabClicked(): void {
    console.log('tab clicked.');
    this.dispatchEvent(new CustomEvent('nidoca-event-tab-clicked', {detail: this, bubbles: true, composed: true}));
  }
}
