import { css, html, LitElement, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement, state } from 'lit/decorators.js';

@customElement('nidoca-section')
export class NidocaSection extends NidocaHtml {
  static styles = css`
    :host {
      display: block;
      margin: auto;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }

    ::slotted(.item_count_1) {
      flex-basis: 100%;
      width: 100%;
    }
    ::slotted(.item_count_2) {
      flex-basis: 50%;
      width: 50%;
    }
    ::slotted(.item_count_3) {
      flex-basis: 33.3%;
      width: 33.3%;
    }
    ::slotted(.item_count_4) {
      flex-basis: 25%;
      width: 25%;
    }

    @media only screen and (max-width: 1007px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      ::slotted(.item_count_1),
      ::slotted(.item_count_2),
      ::slotted(.item_count_3),
      ::slotted(.item_count_4) {
        flex-basis: 100%;
        width: 100%;
      }
    }
  `;

  render(): TemplateResult {
    return html`
      <slot id="container" class="container" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
    `;
  }

  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    const elements: Element[] = slotElement.assignedElements();
    const elementSize = elements.length;
    for (let index = 0; index < elementSize; index++) {
      const element: Element = elements[index];
      const classList = element.classList;
      const itemClazz = 'item_count_' + elementSize;
      if (!classList.contains(itemClazz)) {
        classList.add(itemClazz);
      }
    }
  }
}
