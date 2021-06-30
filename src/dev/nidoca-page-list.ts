import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {FlexAlignContent, FlexAlignItems, FlexDirection, FlexJustifyContent, FlexWrap, NidocaTypographyType} from "..";
import {NidocaSpacerSize, NidocaSpacerType} from "../nidoca-spacer";

@customElement("nidoca-page-list")
export class NidocaPageGallery extends LitElement {
  static styles = css``;

  @property({type: Boolean})
  prominent: boolean = false;

  @property({type: Boolean})
  selectionMode: boolean = false;

  @property({type: Boolean})
  elevationShow: boolean = false;

  @property({type: Object})
  elevationAssociatedElement: HTMLElement | undefined;

  @property({type: Object})
  elevationContentElement: TemplateResult = html`sdjoidj`;

  render(): TemplateResult {
    return html`
      <nidoca-flex-container
        .flexDirection="${FlexDirection.COLUMN}"
        .flexWrap="${FlexWrap.WRAP}"
        .flexJustifyContent="${FlexJustifyContent.CENTER}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
        .flexAlignContent="${FlexAlignContent.CENTER}"
      >
        <nidoca-spacer>
          <nidoca-typography typographyType="${NidocaTypographyType.H1}">Listenansicht mit Suche</nidoca-typography>
        </nidoca-spacer>
        <nidoca-spacer .spacerTypes="${[NidocaSpacerType.BOTTOM]}">
          <nidoca-typography typographyType="${NidocaTypographyType.BODY1}"
            >Diese Listenansicht ist ein schönes Beispiel wie man eine Liste an Elementen anzeigt und verschiedene
            Funktionalität implementieren kann.</nidoca-typography
          >
        </nidoca-spacer>
        <nidoca-template .prominent="${this.prominent}">
          <nidoca-spacer slot="topLeft" spacerSize="${NidocaSpacerSize.MEDIUM}" .spacerTypes=${[NidocaSpacerType.LEFT]}>
            <nidoca-typography typographyType="${NidocaTypographyType.BODY1}"
              >Aufgaben</nidoca-typography
            ></nidoca-spacer
          >

          <nidoca-icon
            slot="topRight"
            icon="${this.prominent ? "search_off" : "search"}"
            @nidoca-event-icon-clicked="${() => (this.prominent = !this.prominent)}"
          ></nidoca-icon>
          <nidoca-icon
            slot="topRight"
            icon="${this.selectionMode ? "low_priority" : "list"}"
            @nidoca-event-icon-clicked="${() => {
              this.selectionMode = !this.selectionMode;
            }}"
          ></nidoca-icon>
          <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
          <nidoca-icon
            slot="topRight"
            icon="more_vert"
            .clickable="${true}"
            @nidoca-event-icon-clicked="${(event: CustomEvent) => {
              this.elevationAssociatedElement = <HTMLElement>event.target;
              this.elevationShow = true;
            }}"
          ></nidoca-icon>

          <nidoca-search-bar style="width:100%;" slot="prominent" placeholder="Suche..."></nidoca-search-bar>

          <span slot="content">
            <nidoca-list
              .selectionMode="${this.selectionMode}"
              style="background: var(--app-color-surface-background); "
            >
              ${[
                {primary: "List Item", secondary: "Komponente muss schöner werden"},
                {primary: "List Item", secondary: "Komponente muss schöner werden"},
                {primary: "List Item", secondary: "Komponente muss schöner werden"},
                {primary: "List Item", secondary: "Komponente muss schöner werden"},
                {primary: "List Item", secondary: "Komponente muss schöner werden"},
              ].map(
                (item, index) => html`
                  <nidoca-list-item @click="${() => this.clicked(index)}"
                    ><nidoca-typography .typographyType="${NidocaTypographyType.H6}">${item.primary}</nidoca-typography>
                    <nidoca-typography .typographyType="${NidocaTypographyType.BODY1}" slot="secondary"
                      >${item.secondary}</nidoca-typography
                    >
                    <nidoca-icon slot="graphic" icon="face">face</nidoca-icon>
                    <nidoca-icon slot="meta" icon="arrow_right">arrow_right</nidoca-icon>
                  </nidoca-list-item>
                `
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

      <nidoca-elevation
        .show="${this.elevationShow}"
        .associatedElement="${this.elevationAssociatedElement}"
        .content="${this.elevationContentElement}"
        @mouseout="${() => (this.elevationShow = false)}"
      ></nidoca-elevation>
    `;
  }
  clicked(index: number): void {
    throw new Error("Method not implemented.");
  }
}
