import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaTypographyType, NidocaLayoutFlexJustifyContent, NidocaLayoutSpacerSize, NidocaLayoutFlexAlignItems} from "../index";
import {NidocaLayoutSpacerType} from "../nidoca-layout-spacer";

@customElement("nidoca-page-settings")
export class NidocaPageSettings extends LitElement {
  static styles = css``;
  render(): any {
    return html`
      <nidoca-layout-spacer nidocaSpacerSize="${NidocaLayoutSpacerSize.LITTLE}"></nidoca-layout-spacer>
      <nidoca-layout-flex
        flexItemBasisValue="auto"
        .flexJustifyContent="${NidocaLayoutFlexJustifyContent.FLEX_START}"
        .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
      >
        <nidoca-icon
          icon="arrow_back"
          .clickable="${true}"
          .withIconSpace="${false}"
          @nidoca-event-icon-clicked="${() => NidocaRouter.getUniqueInstance().back()}"
        ></nidoca-icon>
        <nidoca-layout-spacer
          NidocaSpacerSize="${NidocaLayoutSpacerSize.SMALL}"
          .spacerTypes="${[NidocaLayoutSpacerType.LEFT, NidocaLayoutSpacerType.RIGHT]}"
        ></nidoca-layout-spacer>
        <nidoca-typography .typographyType="${NidocaTypographyType.H3}">Settings</nidoca-typography>
      </nidoca-layout-flex>
      <nidoca-layout-spacer
        nidocaSpacerSize="${NidocaLayoutSpacerSize.LITTLE}"
        .nidocaSpacerType="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
      >
      </nidoca-layout-spacer>
      <nidoca-layout-flex
        .flexJustifyContent="${NidocaLayoutFlexJustifyContent.FLEX_START}"
        .alignItems="${NidocaLayoutFlexAlignItems.CENTER}"
      >
        <nidoca-layout-spacer
          NidocaSpacerSize="${NidocaLayoutSpacerSize.LITTLE}"
          .nidocaSpacerType="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
        >
          <nidoca-typography .typographyType="${NidocaTypographyType.H6}">Spracheinstellungen</nidoca-typography>
        </nidoca-layout-spacer>
      </nidoca-layout-flex>
    `;
  }
}
