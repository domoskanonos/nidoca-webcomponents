import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme} from ".";

/**
 * state: stable
 */
@customElement("nidoca-top-app-bar")
export class NidocaTopAppBar extends LitElement {
    static styles = css`
    :host {
      display: block;
      width: 100%;
      position: sticky;
      top:0;
      min-height: calc(var(--line-height) * 2);
    }

    .bar {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      align-content: space-around;
      height:100%;
    }

    slot {
      display: flex;
      align-items: center;
    }

    .prominent {
      display:block;
    }
  `;

    @property({type: NidocaTheme, converter: String})
    theme: string | undefined = NidocaTheme.PRIMARY;

    @property({type: Boolean})
    prominent: boolean = false;

    render(): TemplateResult {
        return html`
            ${NidocaTheme.getStyle(this.theme)}
            <div class="bar">
                <slot name="left"></slot>
                <slot name="center"></slot>
                <slot name="right"></slot>
            </div>
            ${this.prominent ? html`
                <slot class="prominent" name="prominent"></slot>` : html``}
        `;
    }
}
