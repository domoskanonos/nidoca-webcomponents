import {html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {
  NidocaLayoutFlexAlignContent,
  NidocaLayoutFlexAlignItems,
  NidocaLayoutFlexDirection,
  NidocaLayoutFlexJustifyContent,
  NidocaLayoutFlexWrap,
  NidocaImgProperties,
  NidocaTypographyType,
} from ".";

@customElement("nidoca-avatar")
export class NidocaAvatar extends LitElement {
  @property({type: String})
  imgSrc: string = "";

  @property({type: String})
  title: string = "";

  @property({type: String})
  description: string = "";

  render(): TemplateResult {
    return html`<nidoca-layout-flex
      .flexDirection="${NidocaLayoutFlexDirection.COLUMN}"
      .flexWrap="${NidocaLayoutFlexWrap.WRAP}"
      .flexJustifyContent="${NidocaLayoutFlexJustifyContent.SPACE_BETWEEN}"
      .flexAlignItems="${NidocaLayoutFlexAlignItems.CENTER}"
      .flexAlignContent="${NidocaLayoutFlexAlignContent.CENTER}"
    >
      <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[NidocaImgProperties.ROUND]}"> </nidoca-img>
      <nidoca-layout-spacer left="var(--space-little)" right="var(--space-little)" top="var(--space-little)" bottom="var(--space-little)">
        <nidoca-typography typographyType="${NidocaTypographyType.H3}">${this.title}</nidoca-typography>
      </nidoca-layout-spacer>
      <nidoca-typography typographyType="${NidocaTypographyType.H5}">${this.description}</nidoca-typography>
    </nidoca-layout-flex>`;
  }
}
