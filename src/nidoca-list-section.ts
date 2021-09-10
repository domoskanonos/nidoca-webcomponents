import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFlexAlignContent, NidocaFlexAlignItems, NidocaFlexDirection, NidocaFlexJustifyContent, NidocaFlexWrap} from "./nidoca-layout-flex-container";
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
          <nidoca-layout-flex-container
            .flexItemProperties="${[]}"
            .flexDirection="${NidocaFlexDirection.ROW}"
            .flexWrap="${NidocaFlexWrap.NO_WRAP}"
            .flexJustifyContent="${NidocaFlexJustifyContent.FLEX_END}"
            .flexAlignItems="${NidocaFlexAlignItems.CENTER}"
            .flexAlignContent="${NidocaFlexAlignContent.FLEX_START}"
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
