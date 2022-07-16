import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme, NidocaThemeHelper} from '.';

@customElement('nidoca-list-item')
export class NidocaListItem extends LitElement {
  static styles = css`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: 1fr 1fr minmax(auto, 100%) 1fr;
      padding: var(--space-2);
    }

    .item {
      align-self: center;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
      flex-basis: 100%;
    }

    .containerTypography {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined;

  @property({type: Boolean})
  selectable: boolean = false;

  @property({type: Boolean})
  selected: boolean = false;

  @property({type: String})
  primaryText: string = '';

  @property({type: String})
  secondaryText: string = '';

  constructor() {
    super();
    this.theme = NidocaThemeHelper.prototype.getParentTheme(this) || NidocaTheme.background;
  }

  render(): TemplateResult {
    return html`
      <style>
        .selected {
          backdrop-filter: contrast(var(--app-color-percent-selected));
        }
      </style>
      <div class="container ${this.selected ? 'selected' : ''}">
        ${this.selectable
          ? html` <nidoca-icon
              style="padding-right: var(--space-2);"
              class="item"
              @click="${() => this.switchSelected()}"
              icon="${this.selected ? 'check_box' : 'check_box_outline_blank'}"
            ></nidoca-icon>`
          : html`<span></span>`}
        <slot name="graphic" class="item"></slot>
        <div class="containerTypography">
          ${this.primaryText ? html` <nidoca-text class="item">${this.primaryText} </nidoca-text>` : html``}
          <slot></slot>
          ${this.secondaryText
            ? html` <nidoca-text-caption class="item">${this.secondaryText} </nidoca-text-caption>`
            : html``}
          <slot name="secondary"></slot>
        </div>
        <slot name="meta" class="item"></slot>
      </div>
    `;
  }

  switchSelected(): void {
    this.selected = Boolean(!this.selected);
    if (this.selected) {
      this.dispatchEvent(
        new CustomEvent('nidoca-event-list-item-select', {
          detail: this,
          bubbles: true,
          composed: true,
        })
      );
    } else {
      this.dispatchEvent(
        new CustomEvent('nidoca-event-list-item-unselect', {
          detail: this,
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
