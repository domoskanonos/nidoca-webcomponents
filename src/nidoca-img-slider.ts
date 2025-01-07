import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property, state } from 'lit/decorators.js';
import { NidocaImg } from './nidoca-img';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-img-slider')
export class NidocaImgSlider extends NidocaHtml {
  static styles = css`
    :host,
    ::slotted(:host) {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      align-self: center;
    }

    slot,
    ::slotted(slot) {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      width: 100%;
    }

    ::slotted(.img) {
      cursor: pointer;
    }

    .container {
      text-align: center;
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string = NidocaTheme.plain;

  @state()
  selected: NidocaImg | undefined;

  render(): TemplateResult {
    return html`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div class="container">${this.selected ? this.selected : html``}</div>

      <slot @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
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
      if (element instanceof NidocaImg) {
        if (this.selected == undefined && index == 0) {
          this.selected = <NidocaImg>element.cloneNode(true);
        }
        element.addEventListener('click', (event: MouseEvent) => {
          if (event.target) {
            this.selected = <NidocaImg>(<NidocaImg>event.target).cloneNode(true);
          }
        });
        element.width = '148px';
        const classList = element.classList;
        if (!classList.contains('img')) {
          classList.add('img');
        }
      }
    }
  }
}
