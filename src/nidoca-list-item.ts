import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from ".";

@customElement("nidoca-list-item")
export class NidocaListItem extends LitElement {
  static styles = css`
    slot {
      height: var(--line-height-massiv);
    }

    .container {
      cursor: pointer;
    }

    .container:hover {
      background-color: var(--app-color-surface-background-light);
    }

    .slotGraphic,
    .slotMeta,
    .columnSelection {
      display: block;
      width: var(--line-height-big);
    }

    .containerTypography {
      width: 100%;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr;
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
        <nidoca-flex-container
          class="container"
          .flexDirection="${FlexDirection.ROW}"
          .flexWrap="${FlexWrap.NO_WRAP}"
          .flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
          .flexAlignItems="${FlexAlignItems.STRETCH}"
        >
          ${this.selectionMode
            ? html`<nidoca-icon
                class="columnSelection"
                @click="${() => this.switchSelected()}"
                icon="${this.selected ? "check_box" : "check_box_outline_blank"}"
              ></nidoca-icon>`
            : html``}
          <slot name="graphic" class="slotGraphic" @click="${() => this.itemClicked()}"></slot>
          <div class="containerTypography">
            <slot class="slotItem" @click="${() => this.itemClicked()}"></slot>
            <slot name="secondary" @click="${() => this.itemClicked()}"></slot>
          </div>

          <slot name="meta" class="slotMeta" @click="${() => this.itemClicked()}"></slot>
        </nidoca-flex-container>
      </nidoca-ripple>
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
