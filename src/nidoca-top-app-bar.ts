import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-top-app-bar")
export class NidocaTopAppBar extends LitElement {
  static styles = css`
    :host {
      height: 60px;
      width: 100%;
      position: relativ;
      display: block;
      width: 100%;
    }

    slot {
      display: flex;
      align-items: center;
    }

    .prominent {
      flex-basis: 100%;
      flex-grow: 3;
    }
  `;

  @property({type: String})
  theme: string = NidocaTheme.PRIMARY;

  @property({type: Boolean})
  prominent: boolean = false;

  render(): TemplateResult {
    return html`
      <style>
        :host,
        slot {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>

      <div
        style="width:100%; display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between;align-content:space-around;"
      >
        <span>
          <slot name="left"></slot>
        </span>
        <span>
          <slot name="center"></slot>
        </span>
        <span>
          <slot name="right"></slot>
        </span>
      </div>
      ${this.prominent ? html`<slot class="prominent" name="prominent"></slot>` : html``}
    `;
  }
}
