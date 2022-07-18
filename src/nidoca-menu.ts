import {css, html, TemplateResult, LitElement, PropertyValues} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {NidocaMenuItem, NidocaTheme} from '.';

@customElement('nidoca-menu')
export class NidocaMenu extends LitElement {
  static styles = css`
    :host,
    slot {
      display: block;
    }
  `;

  @property({type: String})
  theme: string = NidocaTheme.surface;

  @query('#slotElement')
  private slotElement: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return html` <style>
        :host,
        *,
        ::slotted(*) {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }
      </style>
      <slot id="slotElement"></slot>`;
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    changedProperties.forEach((_oldValue, propName) => {
      if (propName == 'theme') {
        if (this.slotElement != null) {
          const slottedElements = this.slotElement.assignedElements();
          for (let index = 0; index < slottedElements.length; index++) {
            const element = slottedElements[index];
            if (element instanceof NidocaMenuItem) {
              element.theme = this.theme;
            }
          }
        }
      }
    });
  }

  protected firstUpdated() {
    this.addEventListener('click', (event: MouseEvent) => {
      if (this.slotElement != null) {
        const slottedElements = this.slotElement.assignedElements();
        for (let index = 0; index < slottedElements.length; index++) {
          const element = slottedElements[index];
          if (element instanceof NidocaMenuItem) {
            const rect = element.getBoundingClientRect();
            if (rect.left < event.x && rect.right > event.x) {
              if (rect.top < event.y && rect.bottom > event.y) {
                element.selected = true;
              } else {
                element.selected = false;
              }
            }
          }
        }
      }
    });
  }
}
