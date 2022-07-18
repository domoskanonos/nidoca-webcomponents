import {css, html, LitElement, PropertyValues, TemplateResult} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {NidocaTheme} from '.';
import {NidocaListItem} from './nidoca-list-item';

@customElement('nidoca-list')
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
  `;

  @property({type: String})
  theme: string = NidocaTheme.surface;

  @property({type: Boolean})
  multiSelect: boolean = false;

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
      <style>
        ::slotted(nidoca-list-section) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-hover);
        }

        ::slotted(nidoca-list-section) {
          border-color: var(--app-color-${this.theme}-border);
          border-bottom-style: solid;
          border-width: thin;
        }

        ::slotted(nidoca-list-item:hover) {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <slot
        @nidoca-event-list-item-clicked="${(event: CustomEvent) => {
          if (!this.multiSelect) {
            this.unselectAll();
            const nidocaListItem: NidocaListItem = <NidocaListItem>event.target;
            nidocaListItem.selected = true;
          }
        }}"
        class="slotList"
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
    console.log('sdojsdoijsoidjsdioj ' + this.getItems().length);
    this.getItems().forEach((item) => {
      item.selected = false;
    });
  }
}
