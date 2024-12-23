import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {query} from 'lit/decorators.js';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-search-bar')
export class NidocaSearchBar extends NidocaHtml {
  static styles = css`
    :host {
      width: 100%;
      display: block;
    }

    .container {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      padding: var(--space);
      height: var(--height-medium);
      box-sizing: border-box;
    }

    input {
      font: inherit;
      width: 100%;
      border: none;
      padding: 0;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
    }
  `;

  @property({type: String})
  value: string = '';

  @property({type: String})
  placeholder: string = '';

  @property({type: Boolean})
  disabled: boolean = false;

  @query('#inputElement')
  private inputElement: HTMLInputElement | undefined;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.surface;

  render(): TemplateResult {
    return html`
      <style>
        .container,
        input {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
          border-color: var(--app-color-${this.theme}-border);
        }

        .container:focus-within,
        input:focus-within {
          border-color: var(--app-color-${this.theme}-selected);
          background-color: var(--app-color-${this.theme}-selected);
        }
      </style>
      <div class="container border">
        <nidoca-icon style="padding-right:var(--space);padding-left:var(--space);" icon="search"></nidoca-icon>
        <input
          id="inputElement"
          type="text"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          @input="${() => this.valueChanged()}"
        />
        <nidoca-icon
          style="padding-right:var(--space);padding-left:var(--space);"
          icon="close"
          @click="${() => this.clearValue()}"
        ></nidoca-icon>
      </div>
    `;
  }

  clearValue(): void {
    this.value = '';
  }

  async valueChanged(): Promise<void> {
    const eventName = 'nidoca-search-bar-event-value-changed';
    const customEvent = new CustomEvent(eventName, {
      detail: this.inputElement?.value,
      bubbles: true,
      composed: true,
    });
    console.debug('dispatch custom event type: %s, detail: %s', customEvent.type, JSON.stringify(customEvent.detail));
    this.dispatchEvent(customEvent);
  }

  static example(slotName: string = ''): TemplateResult {
    return html`<nidoca-search-bar slot="${slotName}" theme="primary" placeholder="Suche..."></nidoca-search-bar>`;
  }
}
