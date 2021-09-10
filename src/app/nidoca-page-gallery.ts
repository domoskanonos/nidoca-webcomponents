import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaButtonType, NidocaTypographyType} from "..";
import {DUMMY_DESCRIPTION, DUMMY_IMAGE, DUMMY_TITLE} from "./constants";

@customElement("nidoca-page-gallery")
export class NidocaPageGallery extends LitElement {
  
  static styles = css``;


  render(): any {
    return html`
        <nidoca-gallery >
          ${["", "", "", "", "", "", "", "", ""].map(
            () => html`
              <nidoca-card>
                <nidoca-img slot="media" src="${DUMMY_IMAGE}"> </nidoca-img>
                <nidoca-typography slot="supportingText" typographyType="${NidocaTypographyType.H3}"
                  >${DUMMY_TITLE}</nidoca-typography
                >
                <nidoca-typography slot="supportingText" typographyType="${NidocaTypographyType.BODY1}"
                  >${DUMMY_DESCRIPTION}
                </nidoca-typography>

                <nidoca-button buttonType="${NidocaButtonType.TEXT}" slot="actions">Go</nidoca-button>
                <nidoca-button buttonType="${NidocaButtonType.TEXT}" slot="actions">Leave</nidoca-button>
              </nidoca-card>
            `
          )}
        </nidoca-gallery>

    `;
  }
}
