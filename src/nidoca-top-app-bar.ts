import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-top-app-bar")
export class NidocaTopAppBar extends LitElement {
  static styles = css`
    :host {
      width: 100%;
      position: relativ;
      display: block;
      height: min-content;
    }

    .bar {
      min-height: var(--line-height-2);
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      align-content: space-around;
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

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.PRIMARY;

  @property({type: Boolean})
  prominent: boolean = false;

  render(): TemplateResult {
    return html`
      ${NidocaTheme.getStyle(this.theme)}
      <div class="bar">
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
