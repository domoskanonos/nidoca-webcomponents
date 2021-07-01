import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from ".";
import {BorderProperty} from "./nidoca-border";

@customElement("nidoca-card")
export class NidocaCard extends LitElement {
  static styles = css``;

  @property({type: String})
  code: string = "";

  render(): TemplateResult {
    return html`
      <nidoca-border .borderProperties="${[BorderProperty.ALL]}">
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
      </nidoca-border>
    `;
  }
}
