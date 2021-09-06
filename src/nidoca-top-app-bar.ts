import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap, NidocaColorScheme} from ".";

@customElement("nidoca-top-app-bar")
export class NidocaTopAppBar extends LitElement {
  static styles = css`
    :host {
      display: block;
      width:100%;
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
  colorScheme: NidocaColorScheme = NidocaColorScheme.PRIMARY;

  @property({type: Boolean})
  prominent: boolean = false;

  @property({type: String})
  cssStyle: string = "height:60px;width:100%;position:relativ;";

  render(): TemplateResult {
    return html`
      <style>
        :host,
        slot {
          color: var(--app-color-${this.colorScheme});
          background-color: var(--app-color-${this.colorScheme}-background);
        }
      </style>
      <nidoca-layout-flex-container
        .flexDirection="${FlexDirection.ROW}"
        .flexWrap="${FlexWrap.NO_WRAP}"
        .flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
        .flexAlignContent="${FlexAlignContent.SPACE_AROUND}"
        containerStyle="${this.cssStyle}"
        itemStyle=""
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
      </nidoca-layout-flex-container>
      ${this.prominent ? html`<slot class="prominent" name="prominent"></slot>` : html``}
    `;
  }
}
