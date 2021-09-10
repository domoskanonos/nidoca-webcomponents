import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFlexAlignContent, NidocaFlexAlignItems, NidocaFlexDirection, NidocaFlexJustifyContent, NidocaFlexWrap} from ".";
import {NidocaShadowType} from "./nidoca-box-shadow";

@customElement("nidoca-card")
export class NidocaCard extends LitElement {
  static styles = css``;

  render(): any {
    return html`
      <nidoca-box-shadow .shadowType="${NidocaShadowType.KEY_LIGHT}">
        <nidoca-layout-flex-container
          .flexDirection="${NidocaFlexDirection.COLUMN}"
          .flexWrap="${NidocaFlexWrap.WRAP}"
          .flexJustifyContent="${NidocaFlexJustifyContent.SPACE_BETWEEN}"
          .flexAlignItems="${NidocaFlexAlignItems.FLEX_START}"
          .flexAlignContent="${NidocaFlexAlignContent.FLEX_START}"
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
