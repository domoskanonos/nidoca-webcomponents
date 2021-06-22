import {css, customElement, html, property, unsafeCSS, LitElement, TemplateResult} from "lit-element";
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
        <nidoca-flex-container
          .flexDirection="${FlexDirection.COLUMN}"
          .flexWrap="${FlexWrap.WRAP}"
          .flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
          .flexAlignItems="${FlexAlignItems.FLEX_START}"
          .flexAlignContent="${FlexAlignContent.FLEX_START}"
        >
          <slot name="media"></slot>
          <nidoca-spacer>
            <slot name="supportingText"></slot>
            <slot name="actions"></slot>
          </nidoca-spacer>
        </nidoca-flex-container>
      </nidoca-border>
    `;
  }
}
