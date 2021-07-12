import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {NidocaTypographyType} from "..";
import { ButtonType } from "../nidoca-button";
import {DUMMY_DESCRIPTION, DUMMY_DESCRIPTION_SHORT, DUMMY_IMAGE, DUMMY_TITLE} from "./constants";

@customElement("nidoca-page-main")
export class NidocaPageMain extends LitElement {
  
  static styles = css``;


  render(): TemplateResult {
    return html`
        <nidoca-layout-section >
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
          <nidoca-layout-spacer>
            <nidoca-typography typographyType="${NidocaTypographyType.H1}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>
            <nidoca-typography typographyType="${NidocaTypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
            <nidoca-button>Lorem Ipsum</nidoca-button>
          </nidoca-layout-spacer>




          <nidoca-icon-extended icon="home"></nidoca-icon-extended>
          <nidoca-dialog-action .show="${false}">

          <nidoca-typography slot="header" typographyType="${NidocaTypographyType.H1}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>
            <nidoca-typography slot="text" typographyType="${NidocaTypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>

            <nidoca-button slot="action" buttonType="${ButtonType.TEXT}">Ok</nidoca-button>
            <nidoca-button slot="action" buttonType="${ButtonType.TEXT}">Ok</nidoca-button>
            <nidoca-button>Ok</nidoca-button>
          </nidoca-dialog-action>



        </nidoca-layout-section>

        <nidoca-layout-section >
          <nidoca-layout-spacer>
            <nidoca-typography typographyType="${NidocaTypographyType.H3}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>

            <nidoca-typography typographyType="${NidocaTypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
          </nidoca-layout-spacer>
          <nidoca-img style="width:200px;height:500px" src="${DUMMY_IMAGE}"> </nidoca-img>
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
        </nidoca-layout-section>

        <nidoca-layout-section >
          <nidoca-layout-spacer>
            <nidoca-typography typographyType="${NidocaTypographyType.H3}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>
            <nidoca-typography typographyType="${NidocaTypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
          </nidoca-layout-spacer>

          <nidoca-avatar
            title="${DUMMY_TITLE}"
            description="${DUMMY_DESCRIPTION_SHORT}"
            imgSrc="${DUMMY_IMAGE}"           
          ></nidoca-avatar>
          <nidoca-avatar
            title="${DUMMY_TITLE}"
            description="${DUMMY_DESCRIPTION_SHORT}"
            imgSrc="${DUMMY_IMAGE}"
          ></nidoca-avatar>
          <nidoca-avatar
            title="${DUMMY_TITLE}"
            description="${DUMMY_DESCRIPTION_SHORT}"
            imgSrc="${DUMMY_IMAGE}"
          ></nidoca-avatar>
        </nidoca-layout-section>

       

    `;
  }
}
