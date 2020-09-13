import {css, customElement, html, LitElement, property, unsafeCSS} from 'lit-element';
import {BasicService} from '@domoskanonos/frontend-basis';
import {GridAlignItems, GridJustifyItems} from './nidoca-grid-container';
import {VisibleType} from './nidoca-visible';

@customElement('nidoca-list-item')
export class NidocaListItem extends LitElement {
  static styles = css`
    .LIST_ITEM_SLOT {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      width:100%;
    }

    .LIST_ITEM {
      cursor: pointer;
    }

    .LIST_ITEM:hover {
      background-color: var(--app-color-surface-background-light);
    }
  `;

  @property()
  selectionMode: boolean = false;

  @property()
  selected: boolean = false;

  protected update(changedProperties: Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
    if (changedProperties.get('selectionMode') != undefined) {
      if (!this.selectionMode) {
        this.selected = false;
      }
    }
  }

  render() {
    return html`
      <nidoca-ripple>
        <nidoca-grid-container
          class="LIST_ITEM"
          .gridJustifyItems="${GridJustifyItems.START}"
          .gridAlignItems="${GridAlignItems.CENTER}"
          .gridTemplateRows="${['1fr']}"
          .gridTemplateColumns="${['auto', '1fr']}"
        >
          <nidoca-visible visibleType="${this.selectionMode ? VisibleType.NORMAL : VisibleType.HIDE}">
            <nidoca-icon
              @click="${() => this.switchSelected()}"
              icon="${this.selected ? 'check_box' : 'check_box_outline_blank'}"
            ></nidoca-icon>
          </nidoca-visible>
          <slot class="LIST_ITEM_SLOT" @click="${() => this.itemClicked()}"></slot> </nidoca-grid-container
      ></nidoca-ripple>
    `;
  }

  itemClicked() {
    BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-list-item-clicked', this);
  }

  switchSelected() {
    this.selected = Boolean(!this.selected);
    if (this.selected) {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-list-item-select', this);
    } else {
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-list-item-unselect', this);
    }
  }
}
