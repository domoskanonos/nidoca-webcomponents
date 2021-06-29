import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap, TypographyType} from "..";

@customElement("nidoca-page-list")
export class NidocaPageGallery extends LitElement {
  static styles = css``;

  @property({type: Boolean})
  prominent: boolean = false;

  render(): TemplateResult {
    return html`
      <nidoca-flex-container
        .flexDirection="${FlexDirection.ROW}"
        .flexWrap="${FlexWrap.WRAP}"
        .flexJustifyContent="${FlexJustifyContent.SPACE_BETWEEN}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
        .flexAlignContent="${FlexAlignContent.CENTER}"
      >
        <nidoca-template .prominent="${this.prominent}">
          <nidoca-typography slot="topCenter" typographyType="${TypographyType.BODY1}"
            >nidoca framework</nidoca-typography
          >

          <nidoca-icon slot="topLeft" icon="menu" .clickable="${true}"></nidoca-icon>

          <nidoca-icon
            slot="topRight"
            icon="${this.prominent ? "search_off" : "search"}"
            @nidoca-event-icon-clicked="${() => (this.prominent = !this.prominent)}"
          ></nidoca-icon>
          <nidoca-icon
            slot="topRight"
            icon="person"
            @nidoca-event-icon-clicked="${() => {
              console.log("");
            }}"
          ></nidoca-icon>
          <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
          <nidoca-icon
            slot="topRight"
            icon="more_vert"
            .clickable="${true}"
            @nidoca-event-icon-clicked="${(event: CustomEvent) => {
              console.log("");
            }}"
          ></nidoca-icon>

          <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

          <span slot="content">
            <nidoca-list>
              ${[{primary: "primary", secondary: "secondary"}].map(
                (item, index) => html`<nidoca-list-item hasMeta twoline @click="${() => this.clicked(index)}"
                  >${item.primary}
                  <span slot="secondary">${item.secondary}</span>
                  <nidoca-icon slot="meta">arrow_right</nidoca-icon>
                </nidoca-list-item>`
              )}
            </nidoca-list>
          </span>

          <nidoca-navigation slot="sidebar">
            <nidoca-navigation-link
              slot="links"
              icon="home"
              text="Home"
              href="#main"
              .rendered="${true}"
              @nidoca-event-link-clicked="${() => NidocaRouter.getUniqueInstance().navigate("main")}"
            ></nidoca-navigation-link>
            <nidoca-navigation-link
              slot="links"
              icon="home"
              text="Gallery"
              href="#main"
              .rendered="${true}"
              @nidoca-event-link-clicked="${() => NidocaRouter.getUniqueInstance().navigate("gallery")}"
            ></nidoca-navigation-link>
          </nidoca-navigation>
        </nidoca-template>
      </nidoca-flex-container>
    `;
  }
  clicked(index: number) {
    throw new Error("Method not implemented.");
  }
}
