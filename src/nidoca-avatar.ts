import {html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {
  NidocaFlexAlignContent,
  NidocaFlexAlignItems,
  NidocaFlexDirection,
  NidocaFlexJustifyContent,
  NidocaFlexWrap,
  RichMediaProperties,
  NidocaTypographyType,
} from ".";
import { NidocaLayoutSpacerSize } from "./nidoca-layout-spacer";

@customElement("nidoca-avatar")
export class NidocaAvatar extends LitElement {
  @property({type: String})
  imgSrc: string = "";

  @property({type: String})
  title: string = "";

  @property({type: String})
  description: string = "";

  render(): any {
    return html`<nidoca-layout-flex-container
      .flexDirection="${NidocaFlexDirection.COLUMN}"
      .flexWrap="${NidocaFlexWrap.WRAP}"
      .flexJustifyContent="${NidocaFlexJustifyContent.SPACE_BETWEEN}"
      .flexAlignItems="${NidocaFlexAlignItems.CENTER}"
      .flexAlignContent="${NidocaFlexAlignContent.CENTER}"
    >
      <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[RichMediaProperties.ROUND]}"> </nidoca-img>
      <nidoca-layout-spacer spacerSize="${NidocaLayoutSpacerSize.LITTLE}">
        <nidoca-typography typographyType="${NidocaTypographyType.H3}">${this.title}</nidoca-typography>
      </nidoca-layout-spacer>
      <nidoca-typography typographyType="${NidocaTypographyType.H5}">${this.description}</nidoca-typography>
    </nidoca-layout-flex-container>`;
  }
}
