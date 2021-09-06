import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from ".";
import {NidocaShadowType} from "./nidoca-box-shadow";

@customElement("nidoca-card")
export class NidocaCard extends LitElement {
  static styles = css``;

  @property({type: String})
  code: string = "";

  render(): TemplateResult {
    return html`
      <nidoca-box-shadow .shadowType="${NidocaShadowType.KEY_LIGHT}">
        <nidoca-layout-flex-container
          .flexDirection="${FlexDirection.COLUMN}"
          .flexWrap="${FlexWrap.WRAP}"
          .flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
          .flexAlignItems="${FlexAlignItems.FLEX_START}"
          .flexAlignContent="${FlexAlignContent.FLEX_START}"
        >
          <slot name="media"></slot>
          <nidoca-layout-spacer>
            <slot name="supportingText"></slot>
            <slot name="actions"></slot>
          </nidoca-layout-spacer>
        </nidoca-layout-flex-container>
        <slot></slot>
      </nidoca-box-shadow>
    `;
  }
}
