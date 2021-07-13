import {css, html, TemplateResult, LitElement, PropertyValues} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {query} from "lit/decorators/query";
import {NidocaListItem} from "./nidoca-list-item";

@customElement("nidoca-list")
export class NidocaList extends LitElement {
  static styles = css`
    :host {
      width: 100%;
    }
    .slotList {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }

    .slotList > * {
    }
  `;

  @property({type: Boolean})
  selectionMode: boolean = false;

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      console.debug(`${this.tagName} : property ${String(propName)} changed. oldValue: ${oldValue}`);
      if (propName == "selectionMode") {
        this.getItems().forEach((listItemComponent) => {
          listItemComponent.selectionMode = this.selectionMode;
        });
      }
    });
  }

  render(): TemplateResult {
    return html` <slot class="slotList" id="slotElement"></slot> `;
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
      let nliIndex: number = 0;
      for (let i = 0; i < slottedElements.length; i++) {
        const element = slottedElements[i];
        if (element instanceof NidocaListItem) {
          if (element.selected) {
            selection.push(nliIndex);
          }
          nliIndex++;
        }
      }
    }
    return selection;
  }

  selectAll(): void {
    this.getItems().forEach((item) => {
      item.selected = true;
    });
  }

  unselectAll(): void {
    this.getItems().forEach((item) => {
      item.selected = false;
    });
  }
}
