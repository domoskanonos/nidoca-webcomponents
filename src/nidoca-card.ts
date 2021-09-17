import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFlexLayoutAlignContent, NidocaFlexLayoutAlignItems, NidocaFlexLayoutDirection, NidocaFlexLayoutJustifyContent, NidocaFlexLayoutWrap} from ".";
import {NidocaShadowType} from "./nidoca-box-shadow";

@customElement("nidoca-card")
export class NidocaCard extends LitElement {
  static styles = css``;

  render(): any {
    return html`
      <nidoca-box-shadow .shadowType="${NidocaShadowType.KEY_LIGHT}">
        <nidoca-flex-layout
          .flexDirection="${NidocaFlexLayoutDirection.COLUMN}"
          .flexWrap="${NidocaFlexLayoutWrap.WRAP}"
          .flexJustifyContent="${NidocaFlexLayoutJustifyContent.SPACE_BETWEEN}"
          .flexAlignItems="${NidocaFlexLayoutAlignItems.FLEX_START}"
          .flexAlignContent="${NidocaFlexLayoutAlignContent.FLEX_START}"
        >
          <slot name="media"></slot>
          <nidoca-layout-spacer>
            <slot name="supportingText"></slot>
            <slot name="actions"></slot>
          </nidoca-layout-spacer>
        </nidoca-flex-layout>
        <slot></slot>
      </nidoca-box-shadow>
    `;
  }
}
