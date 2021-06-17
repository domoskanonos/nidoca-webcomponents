import {css, customElement, html, LitElement, TemplateResult, property} from "lit-element";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from ".";

@customElement("nidoca-top-app-bar")
export class NidocaTopAppBar extends LitElement {
  static styles = css`
    slot {
      display: block;
    }

    .prominent {
      flex-basis: 100%;
      flex-grow: 3;
    }

  `;

  @property({type: Boolean})
  prominent: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-flex-container
        .devices="${[]}"
        .flexDirection="${FlexDirection.ROW}"
        .flexWrap="${FlexWrap.WRAP}"
        .flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
        .flexAlignContent="${FlexAlignContent.SPACE_AROUND}"
        containerStyle=""
        itemStyle=""
      >
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
        ${this.prominent ? html`<slot class="prominent" name="prominent"></slot>` : html``}
      </nidoca-flex-container>
    `;
  }
  
}
