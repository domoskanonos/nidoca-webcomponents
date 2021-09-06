import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from "./nidoca-layout-flex-container";
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
          <nidoca-layout-flex-container
            .flexItemProperties="${[]}"
            .flexDirection="${FlexDirection.ROW}"
            .flexWrap="${FlexWrap.NO_WRAP}"
            .flexJustifyContent="${FlexJustifyContent.FLEX_END}"
            .flexAlignItems="${FlexAlignItems.CENTER}"
            .flexAlignContent="${FlexAlignContent.FLEX_START}"
            itemStyle="flex-basis: 100%;"
          >
            <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.SMALL}" .spacerTypes="${[NidocaLayoutSpacerType.ALL]}">
              <nidoca-typography .typographyType="${NidocaTypographyType.H6}" text="${this.text}"></nidoca-typography>
            </nidoca-layout-spacer>
          </nidoca-layout-flex-container>
        `
      : html``;
  }
}
