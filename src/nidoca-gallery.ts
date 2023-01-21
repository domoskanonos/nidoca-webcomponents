import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';

@customElement('nidoca-gallery')
export class NidocaGallery extends NidocaHtml {
  static styles = css`
    slot,
    ::slotted(slot) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    .flexItem,
    ::slotted(.flexItem) {
      flex-basis: 24%;
      padding-top: var(--space-3);
    }
  `;

  render(): TemplateResult {
    return html`
      <nidoca-layout-spacer bottom="var(--space)" left="">
        <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
      </nidoca-layout-spacer>
    `;
  }

  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    if (slotElement == undefined) {
      return;
    }
    const elements: Element[] = slotElement.assignedElements();
    for (let index = 0; index < elements.length; index++) {
      const element: Element = elements[index];
      const classList = element.classList;
      if (!classList.contains('flexItem')) {
        classList.add('flexItem');
      }
      if (!classList.contains('flexItemDevice')) {
        classList.add('flexItemDevice');
      }
    }
  }
}
