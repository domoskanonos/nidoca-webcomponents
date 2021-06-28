import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {TypographyType, FlexJustifyContent, NidocaSpacerSize, FlexAlignItems} from "../index";
import {NidocaSpacerType} from "../nidoca-spacer";

@customElement("nidoca-page-settings")
export class NidocaPageSettings extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`
      <nidoca-spacer nidocaSpacerSize="${NidocaSpacerSize.LITTLE}"></nidoca-spacer>
      <nidoca-flex-container
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
        <nidoca-spacer
          NidocaSpacerSize="${NidocaSpacerSize.SMALL}"
          .spacerTypes="${[NidocaSpacerType.LEFT, NidocaSpacerType.RIGHT]}"
        ></nidoca-spacer>
        <nidoca-typography .typographyType="${TypographyType.H3}">Settings</nidoca-typography>
      </nidoca-flex-container>
      <nidoca-spacer
        nidocaSpacerSize="${NidocaSpacerSize.LITTLE}"
        .nidocaSpacerType="${[NidocaSpacerType.TOP, NidocaSpacerType.BOTTOM]}"
      >
      </nidoca-spacer>
      <nidoca-flex-container
        .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
        .alignItems="${FlexAlignItems.CENTER}"
      >
        <nidoca-spacer
          NidocaSpacerSize="${NidocaSpacerSize.LITTLE}"
          .nidocaSpacerType="${[NidocaSpacerType.TOP, NidocaSpacerType.BOTTOM]}"
        >
          <nidoca-typography .typographyType="${TypographyType.H6}">Spracheinstellungen</nidoca-typography>
        </nidoca-spacer>
      </nidoca-flex-container>
    `;
  }
}
