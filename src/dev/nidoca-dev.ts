import {customElement, html, LitElement, property, TemplateResult} from "lit-element";
import {TypographyType} from "..";
import {ButtonType} from "../nidoca-button";
import {DUMMY_DESCRIPTION, DUMMY_DESCRIPTION_SHORT, DUMMY_IMAGE, DUMMY_TITLE} from "./constants";
import {NidocaRouteListener, NidocaRouter} from "@domoskanonos/nidoca-router";

@customElement("nidoca-dev")
export class NidocaShowcase extends LitElement implements NidocaRouteListener {
  @property({type: Boolean})
  prominent: boolean = false;

  constructor() {
    super();
    NidocaRouter.getUniqueInstance().subscribe(this);
  }
  routeChanged(relUrl: string): void {
    console.log(relUrl);
    //throw new Error("Method not implemented.");
  }

  render(): TemplateResult {
    return html`
      <nidoca-template .prominent="${this.prominent}">
        <nidoca-typography slot="topCenter" typographyType="${TypographyType.BODY1}"
          >nidoca framework</nidoca-typography
        >
        <nidoca-icon
          slot="topRight"
          icon="search"
          @nidoca-event-icon-clicked="${() => (this.prominent = !this.prominent)}"
        ></nidoca-icon>
        <nidoca-icon slot="topRight" icon="person"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
        <nidoca-icon slot="topRight" icon="more_vert"></nidoca-icon>

        <nidoca-form-text name="search" slot="prominent"></nidoca-form-text>

        <nidoca-layout-section slot="content">
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
          <nidoca-spacer>
            <nidoca-typography typographyType="${TypographyType.H1}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>
            <nidoca-typography typographyType="${TypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
            <nidoca-button>Lorem Ipsum</nidoca-button>
          </nidoca-spacer>
        </nidoca-layout-section>

        <nidoca-layout-section slot="content">
          <nidoca-spacer>
            <nidoca-typography typographyType="${TypographyType.H3}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>

            <nidoca-typography typographyType="${TypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
          </nidoca-spacer>
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
          <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
        </nidoca-layout-section>

        <nidoca-layout-section slot="content">
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

        <nidoca-gallery slot="content">
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
      </nidoca-template>
    `;
  }
}
