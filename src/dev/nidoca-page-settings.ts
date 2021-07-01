import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {NidocaTypographyType, FlexJustifyContent, NidocaSpacerSize, FlexAlignItems} from "../index";
import {NidocaSpacerType} from "../nidoca-layout-spacer";

@customElement("nidoca-page-settings")
export class NidocaPageSettings extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`
      <nidoca-layout-spacer nidocaSpacerSize="${NidocaSpacerSize.LITTLE}"></nidoca-layout-spacer>
      <nidoca-layout-flex-container
        flexItemBasisValue="auto"
        .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
      >
        <nidoca-icon
          icon="arrow_back"
          .clickable="${true}"
          .withIconSpace="${false}"
          @nidoca-event-icon-clicked="${() => NidocaRouter.getUniqueInstance().back()}"
        ></nidoca-icon>
        <nidoca-layout-spacer
          NidocaSpacerSize="${NidocaSpacerSize.SMALL}"
          .spacerTypes="${[NidocaSpacerType.LEFT, NidocaSpacerType.RIGHT]}"
        ></nidoca-layout-spacer>
        <nidoca-typography .typographyType="${NidocaTypographyType.H3}">Settings</nidoca-typography>
      </nidoca-layout-flex-container>
      <nidoca-layout-spacer
        nidocaSpacerSize="${NidocaSpacerSize.LITTLE}"
        .nidocaSpacerType="${[NidocaSpacerType.TOP, NidocaSpacerType.BOTTOM]}"
      >
      </nidoca-layout-spacer>
      <nidoca-layout-flex-container
        .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
        .alignItems="${FlexAlignItems.CENTER}"
      >
        <nidoca-layout-spacer
          NidocaSpacerSize="${NidocaSpacerSize.LITTLE}"
          .nidocaSpacerType="${[NidocaSpacerType.TOP, NidocaSpacerType.BOTTOM]}"
        >
          <nidoca-typography .typographyType="${NidocaTypographyType.H6}">Spracheinstellungen</nidoca-typography>
        </nidoca-layout-spacer>
      </nidoca-layout-flex-container>
    `;
  }
}
