import {NidocaRouter} from "@domoskanonos/nidoca-router";
import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {query} from "lit/decorators/query";
import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  NidocaColorScheme,
  NidocaTypographyType,
} from "..";
import {NidocaLayoutSpacerSize, NidocaLayoutSpacerType} from "../nidoca-layout-spacer";
import {NidocaPrint} from "../nidoca-print";

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
  elevationContentElement: TemplateResult = html`
    <nidoca-list .colorScheme=${NidocaColorScheme.SURFACE}>
      <nidoca-list-item text="Kündigung drucken" @click="${() => this.printElement?.print()}">hiuhiuh</nidoca-list-item>
      <nidoca-list-item icon="delete" title="Vertrag löschen"></nidoca-list-item>
      <nidoca-list-item icon="share" title="Teilen"></nidoca-list-item>
      <nidoca-list-item text="Alle auswählen" @click="${() => console.log("")}"></nidoca-list-item>
      <nidoca-list-item text="Alle abwählen" @click="${() => (this.selectionMode = false)}"></nidoca-list-item>
    </nidoca-list>
  `;

  @query("#print")
  printElement: NidocaPrint | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-layout-flex-container
        .flexDirection="${FlexDirection.COLUMN}"
        .flexWrap="${FlexWrap.WRAP}"
        .flexJustifyContent="${FlexJustifyContent.CENTER}"
        .flexAlignItems="${FlexAlignItems.CENTER}"
        .flexAlignContent="${FlexAlignContent.CENTER}"
      >
        <nidoca-layout-spacer>
          <nidoca-typography typographyType="${NidocaTypographyType.H1}">Listenansicht mit Suche</nidoca-typography>
        </nidoca-layout-spacer>
        <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.BOTTOM]}">
          <nidoca-typography typographyType="${NidocaTypographyType.BODY1}"
            >Diese Listenansicht ist ein schönes Beispiel wie man eine Liste an Elementen anzeigt und verschiedene
            Funktionalität implementieren kann.</nidoca-typography
          >
        </nidoca-layout-spacer>

        <nidoca-top-app-bar .prominent="${this.prominent}" .colorScheme="${NidocaColorScheme.SURFACE}">
          <nidoca-layout-spacer
            slot="left"
            spacerSize="${NidocaLayoutSpacerSize.MEDIUM}"
            .spacerTypes=${[NidocaLayoutSpacerType.LEFT]}
          >
            <nidoca-typography typographyType="${NidocaTypographyType.BODY1}"
              >Aufgaben</nidoca-typography
            ></nidoca-layout-spacer
          >
          <nidoca-icon
            slot="right"
            icon="${this.prominent ? "search_off" : "search"}"
            @nidoca-event-icon-clicked="${() => (this.prominent = !this.prominent)}"
          ></nidoca-icon>
          <nidoca-icon
            slot="right"
            icon="${this.selectionMode ? "low_priority" : "list"}"
            @nidoca-event-icon-clicked="${() => {
              this.selectionMode = !this.selectionMode;
            }}"
          ></nidoca-icon>
          <nidoca-icon slot="topRight" icon="share"></nidoca-icon>
          <nidoca-icon
            slot="right"
            icon="more_vert"
            .clickable="${true}"
            @nidoca-event-icon-clicked="${(event: CustomEvent) => {
              this.elevationAssociatedElement = <HTMLElement>event.target;
              this.elevationShow = true;
            }}"
          ></nidoca-icon>

          <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
        </nidoca-top-app-bar>

        <nidoca-list .selectionMode="${this.selectionMode}">
          ${[
            {primary: "List Item", secondary: "Komponente muss schöner werden"},
            {primary: "List Item", secondary: "Komponente muss schöner werden"},
            {primary: "List Item", secondary: "Komponente muss schöner werden"},
            {primary: "List Item", secondary: "Komponente muss schöner werden"},
            {primary: "List Item", secondary: "Komponente muss schöner werden"},
          ].map(
            (item) => html`
              <nidoca-list-item
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
      </nidoca-layout-flex-container>

      <nidoca-layout-spacer slot="topRight">
        <nidoca-icon
          icon="more_vert"
          .clickable="${true}"
          @nidoca-event-icon-clicked="${(event: CustomEvent) => {
            this.elevationAssociatedElement = <HTMLElement>event.target;
            this.elevationShow = true;
          }}"
        ></nidoca-icon>
      </nidoca-layout-spacer>

      <nidoca-elevation
        .show="${this.elevationShow}"
        .associatedElement="${this.elevationAssociatedElement}"
        @nidoca-elevation-event-closeme="${() => (this.elevationShow = false)}"
        >${this.elevationContentElement}</nidoca-elevation
      >

      <nidoca-print id="print">Hallo, finde ich super das es so geht <br/>Huhuh<br/>Huhuh<br/>Huhuh<br/>Huhuh<br/>Huhuh<br/>Huhuh</nidoca-print>
    `;
  }
}
