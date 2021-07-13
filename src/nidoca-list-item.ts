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
      <nidoca-ripple @mousedown="${() => this.mouseDownAction()}" @mouseup="${() => this.mouseUpAction()}">
        <div class="container">
          ${this.selectionMode
            ? html`<nidoca-icon
                class="columnSelection"
                @click="${() => this.switchSelected()}"
                icon="${this.selected ? "check_box" : "check_box_outline_blank"}"
              ></nidoca-icon>`
            : html`<span></span>`}
          <slot name="graphic" class="slotGraphic"></slot>
          <div class="containerTypography">
            <slot></slot>
            <slot name="secondary"></slot>
          </div>
          <slot name="meta" class="slotMeta"></slot>
        </div>
      </nidoca-ripple>
    `;
  }

  private clickStart: number | null = null;

  mouseDownAction(): void {
    this.clickStart = Date.now();
  }

  mouseUpAction(): void {
    if (this.clickStart) {
      const diff: number = Date.now() - this.clickStart + 1;
      let eventName: string = "";
      if (diff > 500) {
        eventName = "nidoca-event-list-item-long-click";
      } else {
        eventName = "nidoca-event-list-item-click";
      }
      this.dispatchEvent(
        new CustomEvent(eventName, {
          detail: this,
          bubbles: true,
          composed: true,
        })
      );
    }
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
