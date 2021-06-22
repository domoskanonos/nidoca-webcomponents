import {css, customElement, html, property, TemplateResult} from "lit-element";
import {LitElement} from "lit-element";
import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  RichMediaProperties,
  TypographyType,
} from ".";
import { NidocaSpacerSize } from "./nidoca-spacer";

@customElement("nidoca-avatar")
export class NidocaAvatar extends LitElement {
  @property({type: String})
  imgSrc: string = "";

  @property({type: String})
  title: string = "";

  @property({type: String})
  description: string = "";

  render(): TemplateResult {
    return html`<nidoca-flex-container
      .flexDirection="${FlexDirection.COLUMN}"
      .flexWrap="${FlexWrap.WRAP}"
      .flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
      .flexAlignItems="${FlexAlignItems.CENTER}"
      .flexAlignContent="${FlexAlignContent.CENTER}"
    >
      <nidoca-img src="${this.imgSrc}" .richMediaProperties="${[RichMediaProperties.ROUND]}"> </nidoca-img>
      <nidoca-spacer spacerSize="${NidocaSpacerSize.LITTLE}">
        <nidoca-typography typographyType="${TypographyType.H3}">${this.title}</nidoca-typography>
      </nidoca-spacer>
      <nidoca-typography typographyType="${TypographyType.H5}">${this.description}</nidoca-typography>
    </nidoca-flex-container>`;
  }
}
