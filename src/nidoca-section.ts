import {css, html, TemplateResult, LitElement, PropertyValues} from "lit";
import {customElement, property, query} from "lit/decorators.js";
import {MOBILE_MAX_WIDTH, NidocaDevice, NidocaTheme, TABLET_MAX_WIDTH, TABLE_MIN_WIDTH} from ".";

@customElement("nidoca-section")
export class NidocaSection extends LitElement {
  static styles = css`
    .parentContainer,
    ::slotted(.parentContainer) {
      margin: auto;
    }

    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: flex-start;
      margin: auto;
    }

    .item {
      display: block;
      flex-basis: 100%;
    }

    @media only screen and (min-width: ${TABLE_MIN_WIDTH}px) and (max-width: ${TABLET_MAX_WIDTH}px) {
      .container {
        width: 100%;
      }
    }

    @media only screen and (max-width: ${MOBILE_MAX_WIDTH}px) {
      .container {
        width: 100%;
      }
    }
  `;

  @property({type: NidocaDevice, converter: Array})
  devices: NidocaDevice[] = [NidocaDevice.DESKTOP, NidocaDevice.TABLET];

  @property({type: NidocaTheme, converter: String})
  theme: NidocaTheme = NidocaTheme.BACKGROUND;

  @property({type: String})
  width: string = "50%";

  @query("#container")
  private container: HTMLElement | undefined;

  updated(_changedProperties: PropertyValues): void {
    for (let i = 0; i < this.devices.length; i++) {
      const device: NidocaDevice = this.devices[i];
      if (this.container != undefined && device == NidocaDevice.getCurrentScreen()) {
        if (_changedProperties.has("width") && this.width != "") {
          this.container.style.width = this.width;
        }
        break;
      }
    }
    super.updated(_changedProperties);
  }

  render(): TemplateResult {
    return html`
      <div class="parentContainer">
        <div id="container" class="container">
          <slot class="item"></slot>
        </div>
      </div>
    `;
  }
}
