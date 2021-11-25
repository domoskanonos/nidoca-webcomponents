import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaLayoutFlexAlignContent, NidocaLayoutFlexAlignItems, NidocaLayoutFlexDirection, NidocaLayoutFlexJustifyContent, NidocaLayoutFlexWrap} from "./nidoca-layout-flex";
import {NidocaLayoutSpacerType, NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {NidocaTypographyType} from "./nidoca-typography";

@customElement("nidoca-list-section")
export class NidocaMenuSection extends LitElement {
  static styles = css``;

  @property({type: String})
  text: string = "";

  @property({type: Boolean})
  rendered: boolean = true;

  render(): TemplateResult {
    return this.rendered
      ? html`
          <nidoca-layout-flex
            .flexItemProperties="${[]}"
            .flexDirection="${NidocaLayoutFlexDirection.ROW}"
            .flexWrap="${NidocaLayoutFlexWrap.NO_WRAP}"
            .flexJustifyContent="${NidocaLayoutFlexJustifyContent.FLEX_END}"
            .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
            .flexAlignContent="${NidocaLayoutFlexAlignContent.FLEX_START}"
            itemStyle="flex-basis: 100%;"
          >
            <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.SMALL}" .spacerTypes="${[NidocaLayoutSpacerType.ALL]}">
              <nidoca-typography .typographyType="${NidocaTypographyType.H6}" text="${this.text}"></nidoca-typography>
            </nidoca-layout-spacer>
          </nidoca-layout-flex>
        `
      : html``;
  }
}
