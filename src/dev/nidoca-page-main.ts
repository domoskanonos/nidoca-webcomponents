import {css, customElement, html, LitElement, TemplateResult} from "lit-element";
import {ButtonType, TypographyType} from "..";
import {DUMMY_DESCRIPTION, DUMMY_DESCRIPTION_SHORT, DUMMY_IMAGE, DUMMY_TITLE} from "./constants";

@customElement("nidoca-page-main")
export class NidocaPageMain extends LitElement {
  
  static styles = css``;


  render(): TemplateResult {
    return html`
        <nidoca-layout-section >
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
          <nidoca-spacer>
            <nidoca-typography typographyType="${TypographyType.H1}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>
            <nidoca-typography typographyType="${TypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
            <nidoca-button>Lorem Ipsum</nidoca-button>
          </nidoca-spacer>
        </nidoca-layout-section>

        <nidoca-layout-section >
          <nidoca-spacer>
            <nidoca-typography typographyType="${TypographyType.H3}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>

            <nidoca-typography typographyType="${TypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
          </nidoca-spacer>
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
        </nidoca-layout-section>

        <nidoca-layout-section >
          <nidoca-spacer>
            <nidoca-typography typographyType="${TypographyType.H3}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>
            <nidoca-typography typographyType="${TypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
          </nidoca-spacer>

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

        <nidoca-gallery >
          ${["", "", "", "", "", "", "", "", ""].map(
            () => html`
              <nidoca-card>
                <nidoca-img slot="media" src="${DUMMY_IMAGE}"> </nidoca-img>
                <nidoca-typography slot="supportingText" typographyType="${TypographyType.H3}"
                  >${DUMMY_TITLE}</nidoca-typography
                >
                <nidoca-typography slot="supportingText" typographyType="${TypographyType.BODY1}"
                  >${DUMMY_DESCRIPTION}
                </nidoca-typography>

                <nidoca-button buttonType="${ButtonType.CLEAR}" slot="actions">Go</nidoca-button>
                <nidoca-button buttonType="${ButtonType.CLEAR}" slot="actions">Leave</nidoca-button>
              </nidoca-card>
            `
          )}
        </nidoca-gallery>

    `;
  }
}
