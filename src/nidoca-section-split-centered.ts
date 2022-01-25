import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaDevice} from ".";

@customElement("nidoca-section-split-centered")
export class NidocaSectionSplitCentered extends LitElement {
  static styles = css`
    .parentContainer,
    ::slotted(.parentContainer) {
      margin: auto;
    }

    .container {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      align-content: center;
      padding-top: var(--space-max);
      padding-bottom: var(--space-max);
      width: 50%;
      margin: auto;
    }

    .item {
      display: block;
      flex-basis: 50%;
      padding: var(--space-medium);
    }

    @media only screen and (min-width: ${NidocaDevice.TABLET.minWidth}px) and (max-width: ${NidocaDevice.TABLET
        .maxWidth}px) {
      .container {
        width: 100%;
        background-color: green;
      }
    }

    @media only screen and (max-width: ${NidocaDevice.MOBILE.maxWidth}px) {
      .container {
        width: 100%;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .item {
        flex-basis: 100%;
        padding: 0;
      }
    }
  `;

  render(): TemplateResult {
    return html`
      <div class="parentContainer">
        <div class="container">
          <slot class="item" name="left"></slot>
          <slot class="item" name="right"></slot>
        </div>
      </div>
    `;
  }
}
