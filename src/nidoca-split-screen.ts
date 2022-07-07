import {css, html, TemplateResult, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {NidocaDevice, NidocaTheme} from '.';

@customElement('nidoca-split-screen')
export class NidocaSplitScreen extends LitElement {
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

    @media only screen and (min-width: ${NidocaDevice.TABLET.minWidth}px) and (max-width: ${NidocaDevice.TABLET
        .maxWidth}px) {
      .sidebox {
        width: 50vw;
      }
    }

    @media only screen and (max-width: ${NidocaDevice.MOBILE.maxWidth}px) {
      .sidebox {
        width: 100%;
      }
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string;

  @property({type: Boolean, converter: String})
  hideSidebox: boolean = true;

  constructor() {
    super();
    this.theme = NidocaTheme.prototype.getParentTheme(this) || NidocaTheme.BACKGROUND;
  }

  render(): TemplateResult {
    return html` <style>
        .listbox,
        .sidebox {
          color: var(--app-color-${this.theme});
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
