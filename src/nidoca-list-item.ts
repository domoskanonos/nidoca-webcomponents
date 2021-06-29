import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {VisibleType} from "./nidoca-visible";
import {FormOutputData} from "./nidoca-form-abstract-input-element";

@customElement("nidoca-list-item")
export class NidocaListItem extends LitElement {
  static styles = css`
    .LIST_ITEM_SLOT {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
      width: 100%;
    }

    .LIST_ITEM {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: auto 1fr;
      cursor: pointer;
    }

    .LIST_ITEM:hover {
      background-color: var(--app-color-surface-background-light);
    }
  `;

  @property({type: Boolean})
  selectionMode: boolean = false;

  @property({type: Boolean})
  selected: boolean = false;

  protected update(changedProperties: Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
    if (changedProperties.get("selectionMode") != undefined) {
      if (!this.selectionMode) {
        this.selected = false;
      }
    }
  }

  render(): TemplateResult {
    return html`
      <nidoca-ripple>
        <div class="LIST_ITEM">
          <nidoca-visible visibleType="${this.selectionMode ? VisibleType.NORMAL : VisibleType.HIDE}">
            <nidoca-icon
              @click="${() => this.switchSelected()}"
              icon="${this.selected ? "check_box" : "check_box_outline_blank"}"
            ></nidoca-icon>
          </nidoca-visible>
          <slot class="LIST_ITEM_SLOT" @click="${() => this.itemClicked()}"></slot></div
      ></nidoca-ripple>
    `;
  }

  itemClicked() {
    this.dispatchEvent(
      new CustomEvent("nidoca-event-list-item-clicked", {
        detail: this,
        bubbles: true,
        composed: true,
      })
    );
  }

  switchSelected() {
    this.selected = Boolean(!this.selected);
    if (this.selected) {
      this.dispatchEvent(
        new CustomEvent("nidoca-event-list-item-select", {
          detail: this,
          bubbles: true,
          composed: true,
        })
      );
    } else {
      this.dispatchEvent(
        new CustomEvent("nidoca-event-list-item-unselect", {
          detail: this,
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
