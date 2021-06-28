import {css, customElement, html, LitElement, TemplateResult, property} from "lit";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from ".";

@customElement("nidoca-top-app-bar")
export class NidocaTopAppBar extends LitElement {
  static styles = css`
    slot {
      display: flex;
    }

    .prominent {
      flex-basis: 100%;
      flex-grow: 3;
    }
  `;

  @property({type: Boolean})
  prominent: boolean = false;

  @property({type: String})
  cssStyle: string = "height:60px;";

  render(): TemplateResult {
    return html`
      <nidoca-flex-container style="width:100%;"
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
      </nidoca-flex-container>
      ${this.prominent ? html`<slot class="prominent" name="prominent"></slot>` : html``}
    `;
  }
}
