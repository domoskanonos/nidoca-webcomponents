import { css, html, TemplateResult, LitElement } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement, property } from 'lit/decorators.js';
import { NidocaTheme, NidocaThemeHelper } from './nidoca-meta';

@customElement('nidoca-split-screen')
export class NidocaSplitScreen extends NidocaHtml {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    .listbox {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
    }

    .sidebox {
      display: block;
      z-index: 1;
      position: fixed;
      right: 0;
      width: 33vw;
      min-height: 100%;
      transition: all 0.35s linear;
      overflow-y: scroll;
      max-height: 100%;
    }

    @media only screen and (min-width: 641px) and (max-width: 1007px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: 640px) {
      .sidebox {
        width: 100%;
      }
    }
  `;

  @property({ type: NidocaTheme, converter: String })
  theme: string;

  @property({ type: Boolean, converter: String })
  hideSidebox: boolean = true;

  constructor() {
    super();
    this.theme = NidocaThemeHelper.prototype.getParentTheme(this) || NidocaTheme.plain;
  }

  render(): TemplateResult {
    return html` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-text-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }

        .sidebox {
          border-color: var(--app-color-${this.theme}-border);
          border-left-style: solid;
          border-width: thin;
        }
      </style>
      <slot class="listbox" name="left"></slot>
      ${this.hideSidebox ? html`` : html` <slot class="sidebox" name="sidebox"></slot>`}`;
  }
}
