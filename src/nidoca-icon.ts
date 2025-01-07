import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';

@customElement('nidoca-icon')
export class NidocaIcon extends NidocaHtml {
  static styles = css`
    :host {
      display: inline-block;
      font-size: var(--icon-size);
    }
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
    }

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      filter: brightness(var(--app-lighten-2));
    }

    .clickable:hover {
      filter: brightness(var(--app-darken-2));
    }
  `;

  @property({ type: String })
  icon: string = '';

  @property({ type: Boolean })
  clickable: boolean = true;

  @property({ type: Boolean })
  deactivated: boolean = false;

  @property({ type: String })
  title: string = '';

  render(): TemplateResult {
    return html`
      <i
        class="material-icons ${this.deactivated ? 'deactivated' : ''} ${this.clickable ? 'clickable' : ''}"
        title="${this.title}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `;
  }

  async clicked(): Promise<void> {
    if (this.clickable && !this.deactivated) {
      const customEventName = 'nidoca-event-icon-clicked';
      console.log('dispatch custom event: %s', customEventName);
      this.dispatchEvent(
        new CustomEvent(customEventName, {
          detail: this,
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  static example(slotName: string = ''): TemplateResult {
    return html`
      <nidoca-icon
        slot="${slotName}"
        style="padding-left:var(--space)"
        clickable
        icon="menu"
        title="Mein Icon"
      ></nidoca-icon>
    `;
  }
}
