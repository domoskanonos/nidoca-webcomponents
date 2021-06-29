import {html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";


@customElement("nidoca-floating-container")
export class NidocaFloatingContainer extends LitElement {
  static styles = css`
    .floatingContainer {
      position: fixed;
      display: inline;
      margin: auto;
      background-color: inherit;
      color: inherit;
    }
  `;

  @property({type: String})
  height: string = "auto";

  @property({type: String})
  width: string = "auto";

  @property({type: String})
  left: string = "auto";

  @property({type: String})
  top: string = "auto";

  @property({type: String})
  right: string = "auto";

  @property({type: String})
  bottom: string = "auto";

  render(): TemplateResult {
    return html`
      <slot
        class="floatingContainer"
        style="${this.toStyle(this.height, this.width, this.left, this.right, this.top, this.bottom)}"
      ></slot>
    `;
  }

  private toStyle(height: string, width: string, left: string, right: string, top: string, bottom: string) {
    return "height:"
      .concat(height)
      .concat(";")
      .concat("width:")
      .concat(width)
      .concat(";")
      .concat("left:")
      .concat(left)
      .concat(";")
      .concat("right:")
      .concat(right)
      .concat(";")
      .concat("top:")
      .concat(top)
      .concat(";")
      .concat("bottom:")
      .concat(bottom)
      .concat(";");
  }
}
