import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {NidocaBorderProperty as NidocaBorderProperty} from ".";

@customElement("nidoca-list-item")
export class NidocaListItem extends LitElement {
  static styles = css`
    .container {
      display: grid;
      cursor: pointer;
      grid-template-columns: 1fr 1fr minmax(auto, 100%) 1fr;
      min-height: var(--line-height-massiv);
    }

    .container:hover {
      background-color: var(--app-color-surface-background-light);
    }

    .slotGraphic,
    .slotMeta,
    .columnSelection {
      align-self: center;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
    }

    .containerTypography {
      display: flex;
      flex-direction: column;
      align-self: center;
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
        <div class="container">
          ${this.selectionMode
            ? html`<nidoca-icon
                class="columnSelection"
                @click="${() => this.switchSelected()}"
                icon="${this.selected ? "check_box" : "check_box_outline_blank"}"
              ></nidoca-icon>`
            : html`<span></span>`}
          <slot name="graphic" class="slotGraphic" @click="${() => this.itemClicked()}"></slot>
          <div class="containerTypography">
            <slot class="" @click="${() => this.itemClicked()}"></slot>
            <slot name="secondary" @click="${() => this.itemClicked()}"></slot>
          </div>
          <slot name="meta" class="slotMeta" @click="${() => this.itemClicked()}"></slot>
        </div>
      </nidoca-ripple>
      <nidoca-border
        .borderProperties="${[NidocaBorderProperty.BOTTOM, NidocaBorderProperty.FULL_WIDTH]}"
      ></nidoca-border>
    `;
  }

  itemClicked(): void {
    this.dispatchEvent(
      new CustomEvent("nidoca-event-list-item-clicked", {
        detail: this,
        bubbles: true,
        composed: true,
      })
    );
  }

  switchSelected(): void {
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
