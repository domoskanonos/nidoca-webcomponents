import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFlexLayoutAlignContent, NidocaFlexLayoutAlignItems, NidocaFlexLayoutDirection, NidocaFlexLayoutJustifyContent, NidocaFlexLayoutWrap, NidocaTheme} from ".";

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

  @property({type: NidocaTheme})
  theme: NidocaTheme = NidocaTheme.PRIMARY;

  @property({type: Boolean})
  prominent: boolean = false;

  @property({type: String})
  cssStyle: string = "height:60px;width:100%;position:relativ;";

  render(): any {
    return html`
      <style>
        :host,
        slot {
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>
      <nidoca-layout-flex
        .flexDirection="${NidocaFlexLayoutDirection.ROW}"
        .flexWrap="${NidocaFlexLayoutWrap.NO_WRAP}"
        .flexJustifyContent="${NidocaFlexLayoutJustifyContent.SPACE_BETWEEN}"
        .flexAlignItems="${NidocaFlexLayoutAlignItems.CENTER}"
        .flexAlignContent="${NidocaFlexLayoutAlignContent.SPACE_AROUND}"
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
      </nidoca-layout-flex>
      ${this.prominent ? html`<slot class="prominent" name="prominent"></slot>` : html``}
    `;
  }
}
