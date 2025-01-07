import { css, html, TemplateResult, LitElement, PropertyValues } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement, property, query } from 'lit/decorators.js';
import { NidocaTheme } from './nidoca-meta';
import { NidocaMenuItem } from './nidoca-menu-item';

@customElement('nidoca-menu')
export class NidocaMenu extends NidocaHtml {
  static styles = css`
    :host,
    slot {
      display: block;
    }
  `;

  @property({ type: String })
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

  static example(slotName: string = ''): TemplateResult {
    return html`
      <nidoca-menu slot="${slotName}" theme="primary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"></nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"></nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"></nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"></nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"></nidoca-menu-item>
      </nidoca-menu>
    `;
  }
}
