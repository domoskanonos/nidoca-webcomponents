import {css, customElement, html, property, query, LitElement, TemplateResult} from "lit";
import {NidocaListItem} from "./nidoca-list-item";

@customElement("nidoca-list")
export class NidocaList extends LitElement {
  static styles = css`
    .LIST_SLOT {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `;

  @property({type: Boolean})
  selectionMode: boolean = false;

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;

  protected update(changedProperties: Map<PropertyKey, unknown>): void {
    super.update(changedProperties);
    if (changedProperties.get("selectionMode") != undefined) {
      this.getItems().forEach((listItemComponent) => {
        listItemComponent.selectionMode = this.selectionMode;
      });
    }
  }

  render(): TemplateResult {
    return html` <slot class="LIST_SLOT" id="slotElement"></slot> `;
  }

  getItems(): NidocaListItem[] {
    const all: NidocaListItem[] = [];
    if (this.slotElement != null) {
      const slottedElements = this.slotElement.assignedElements();
      for (let index = 0; index < slottedElements.length; index++) {
        const element = slottedElements[index];
        if (element instanceof NidocaListItem) {
          all.push(element);
        }
      }
    }
    return all;
  }

  getSelectedItems(): NidocaListItem[] {
    const selection: NidocaListItem[] = [];
    if (this.slotElement != null) {
      const slottedElements = this.slotElement.assignedElements();
      for (let index = 0; index < slottedElements.length; index++) {
        const element = slottedElements[index];
        if (element instanceof NidocaListItem) {
          if (element.selected) {
            selection.push(element);
          }
        }
      }
    }
    return selection;
  }

  getSelectedIndexes(): number[] {
    const selection: number[] = [];
    if (this.slotElement != null) {
      const slottedElements = this.slotElement.assignedElements();
      for (let index = 0; index < slottedElements.length; index++) {
        const element = slottedElements[index];
        if (element instanceof NidocaListItem) {
          if (element.selected) {
            selection.push(index);
          }
        }
      }
    }
    return selection;
  }
}
