import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaDevice} from ".";

export enum NidocaContainerSize {
  _100 = "_100",
  _75 = "_75",
  _50 = "_50",
  _25 = "_25",
  MIN_CONTENT = "MIN_CONTENT",
  AUTO = "AUTO",
}

@customElement("nidoca-container")
export class NidocaContainer extends LitElement {
  static styles = css`
    .container,
    ::slotted(.container) {
      margin: auto;
    }

    ._100,
    ::slotted(._100) {
      width: 100%;
    }
    ._75,
    ::slotted(._75) {
      width: 75%;
    }
    ._50,
    ::slotted(._50) {
      width: 50%;
    }
    ._25,
    ::slotted(._25) {
      width: 25%;
    }

    .MIN_CONTENT,
    ::slotted(.MIN_CONTENT) {
      width: min-content;
    }
    .AUTO,
    ::slotted(.AUTO) {
      width: auto;
    }
  `;

  @property({type: NidocaContainerSize, converter: String})
  containerSize: NidocaContainerSize = NidocaContainerSize.AUTO;

  @property({type: Array})
  devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET, NidocaDevice.MOBILE];

  render(): any {
    return html`
      <div class="container ${this.containerSize}">
        <div class="container AUTO">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
