import {css, html, LitElement, PropertyValues, TemplateResult} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement, property, query} from 'lit/decorators.js';
import {NidocaListItem} from './nidoca-list-item';
import { NidocaTheme } from './nidoca-meta';
import { NidocaListSection } from './nidoca-list-section';

@customElement('nidoca-list')
export class NidocaList extends NidocaHtml {
  static styles = css`
    :host {
      width: 100%;
    }
    #slotElement {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 1fr;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.surface;

  @property({type: Boolean})
  multiselect: boolean = false;

  @query('#slotElement')
  private slotElement: HTMLSlotElement | undefined;

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    changedProperties.forEach((_oldValue, propName) => {
      if (propName == 'theme') {
        this.getItems().forEach((listItemComponent) => {
          listItemComponent.theme = this.theme;
        });
      }
    });
  }

  render(): TemplateResult {
    return html`
      <slot
        @nidoca-event-list-item-clicked="${(event: CustomEvent) => {
          if (!this.multiselect) {
            this.unselectAll();
            const nidocaListItem: NidocaListItem = <NidocaListItem>event.target;
            nidocaListItem.selected = true;
          }
        }}"
        id="slotElement"
      ></slot>
    `;
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

  static example(): TemplateResult {
    return html`<nidoca-list theme="primary">
      ${NidocaListSection.example()} ${NidocaListItem.example()} ${NidocaListItem.example()} ${NidocaListItem.example()}
    </nidoca-list>`;
  }
}
