import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap} from "./nidoca-flex-container";
import {NidocaSpacerType, NidocaSpacerSize} from "./nidoca-spacer";
import {NidocaTypographyType} from "./nidoca-typography";

@customElement("nidoca-navigation-section")
export class NidocaNavigationSection extends LitElement {
  static styles = css``;

  @property({type: String})
  text: string = "";

  @property({type: Boolean})
  rendered: boolean = true;

  render(): TemplateResult {
    return this.rendered
      ? html`
          <nidoca-flex-container
            .flexItemProperties="${[]}"
            .flexDirection="${FlexDirection.ROW}"
            .flexWrap="${FlexWrap.NO_WRAP}"
            .flexJustifyContent="${FlexJustifyContent.FLEX_END}"
            .flexAlignItems="${FlexAlignItems.CENTER}"
            .flexAlignContent="${FlexAlignContent.FLEX_START}"
            itemStyle="flex-basis: 100%;"
          >
            <nidoca-spacer spacerSize="${NidocaSpacerSize.SMALL}" .spacerTypes="${[NidocaSpacerType.ALL]}">
              <nidoca-typography .typographyType="${NidocaTypographyType.H6}" text="${this.text}"></nidoca-typography>
            </nidoca-spacer>
          </nidoca-flex-container>
        `
      : html``;
  }
}
