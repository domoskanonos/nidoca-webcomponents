import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFlexLayoutAlignContent, NidocaFlexLayoutAlignItems, NidocaFlexLayoutDirection, NidocaFlexLayoutJustifyContent, NidocaFlexLayoutWrap} from "./nidoca-layout-flex";
import {NidocaLayoutSpacerType, NidocaLayoutSpacerSize} from "./nidoca-layout-spacer";
import {NidocaTypographyType} from "./nidoca-typography";

@customElement("nidoca-list-section")
export class NidocaMenuSection extends LitElement {
  static styles = css``;

  @property({type: String})
  text: string = "";

  @property({type: Boolean})
  rendered: boolean = true;

  render(): any {
    return this.rendered
      ? html`
          <nidoca-layout-flex
            .flexItemProperties="${[]}"
            .flexDirection="${NidocaFlexLayoutDirection.ROW}"
            .flexWrap="${NidocaFlexLayoutWrap.NO_WRAP}"
            .flexJustifyContent="${NidocaFlexLayoutJustifyContent.FLEX_END}"
            .flexAlignItems="${NidocaFlexLayoutAlignItems.CENTER}"
            .flexAlignContent="${NidocaFlexLayoutAlignContent.FLEX_START}"
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
