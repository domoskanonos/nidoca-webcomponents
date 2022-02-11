import {css, html, LitElement, PropertyValues} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-container")
export class NidocaContainer extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .container,
    ::slotted(.container) {
      margin: auto;
    }
  `;

  @property({type: String})
  width: string = "";

  @property({type: String})
  height: string = "";

  @property({type: String})
  minWidth: string = "";

  @property({type: String})
  minHeight: string = "";

  @property({type: String})
  contentWidth: string = "";

  @property({type: String})
  contentHeight: string = "";

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined;

  render(): unknown {
    return html`
      ${NidocaTheme.getStyle(this.theme)}
      <div class="container theme">
        <div class="container" style="">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
