import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {
  NidocaTypographyType,
  NidocaLayoutFlexJustifyContent,
  NidocaLayoutFlexAlignItems,
  NidocaLayoutFlexAlignContent,
  NidocaDevice,
  NidocaContainerSize,
  NidocaLayoutFlexDirection,
  NidocaLayoutFlexWrap,
} from "../index";

@customElement("nidoca-page-settings")
export class NidocaPageSettings extends LitElement {
  static styles = css``;
  render(): TemplateResult {
    return html`
      <nidoca-layout-spacer
        .devices="${[NidocaDevice.MOBILE, NidocaDevice.TABLET]}"
      >
        <nidoca-layout-container
          .containerSize="${NidocaContainerSize._50}"
          .devices="${[NidocaDevice.DESKTOP]}"
          .contentSize="${NidocaContainerSize.AUTO}"
        >
          <nidoca-layout-flex
            .flexDirection="${NidocaLayoutFlexDirection.COLUMN}"
            .flexWrap="${NidocaLayoutFlexWrap.NO_WRAP}"
            .flexJustifyContent="${NidocaLayoutFlexJustifyContent.CENTER}"
            .flexAlignItems="${NidocaLayoutFlexAlignItems.FLEX_START}"
            .flexAlignContent="${NidocaLayoutFlexAlignContent.CENTER}"
          >
            <nidoca-layout-spacer
            >
              <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Einstellungen</nidoca-typography>
            </nidoca-layout-spacer>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.H4}">Angaben gemäß § 5 TMG</nidoca-typography>
            <nidoca-layout-spacer
            ></nidoca-layout-spacer>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}">Dominik Bruhn</nidoca-typography>
            <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}"
              >Holzwickeder Straße 109c</nidoca-typography
            >
          </nidoca-layout-flex>
        </nidoca-layout-container>
      </nidoca-layout-spacer>
    `;
  }
}
