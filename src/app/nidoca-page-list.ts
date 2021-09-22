import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {query} from "lit/decorators.js";
import {
  NidocaFlexLayoutAlignContent,
  NidocaFlexLayoutAlignItems,
  NidocaFlexLayoutDirection,
  NidocaFlexLayoutJustifyContent,
  NidocaFlexLayoutWrap,
  NidocaTheme,
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
  elevationContentElement: any = html`
    <nidoca-list .theme=${NidocaTheme.SURFACE}>
      <nidoca-list-item text="Kündigung drucken" @click="${() => this.printElement?.print()}">hiuhiuh</nidoca-list-item>
      <nidoca-list-item icon="delete" title="Vertrag löschen"></nidoca-list-item>
      <nidoca-list-item icon="share" title="Teilen"></nidoca-list-item>
      <nidoca-list-item text="Alle auswählen" @click="${() => console.log("")}"></nidoca-list-item>
      <nidoca-list-item text="Alle abwählen" @click="${() => (this.selectionMode = false)}"></nidoca-list-item>
    </nidoca-list>

    <nidoca-layout-section>
    <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
    <nidoca-layout-spacer>
      <nidoca-typography typographyType="${NidocaTypographyType.H1}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>
      <nidoca-typography typographyType="${NidocaTypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
      <nidoca-button>Lorem Ipsum</nidoca-button>
      <nidoca-button buttonType="${NidocaButtonType.OUTLINED}">OUTLINED</nidoca-button>
    </nidoca-layout-spacer>

    <nidoca-icon-extended icon="home"></nidoca-icon-extended>
    <nidoca-dialog-action .show="${false}">
      <nidoca-typography slot="header" typographyType="${NidocaTypographyType.H1}"
        >${DUMMY_DESCRIPTION_SHORT}</nidoca-typography
      >
      <nidoca-typography slot="text" typographyType="${NidocaTypographyType.BODY1}"
        >${DUMMY_DESCRIPTION}</nidoca-typography
      >

      <nidoca-button slot="action" buttonType="${NidocaButtonType.TEXT}">Ok</nidoca-button>
      <nidoca-button slot="action" buttonType="${NidocaButtonType.TEXT}">Ok</nidoca-button>
      <nidoca-button>Ok</nidoca-button>
    </nidoca-dialog-action>
  </nidoca-layout-section>

  <nidoca-layout-section>
    <nidoca-layout-spacer>
      <nidoca-typography typographyType="${NidocaTypographyType.H3}">${DUMMY_DESCRIPTION_SHORT}</nidoca-typography>

      <nidoca-typography typographyType="${NidocaTypographyType.BODY1}">${DUMMY_DESCRIPTION}</nidoca-typography>
    </nidoca-layout-spacer>
    <nidoca-img style="width:200px;height:500px" src="${DUMMY_IMAGE}"> </nidoca-img>
    <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
    <nidoca-img src="${DUMMY_IMAGE}"> </nidoca-img>
  </nidoca-layout-section>

  <nidoca-layout-section>
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
    <nidoca-typography text="Header 1" typographyType="${NidocaTypographyType.H1}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Header 2" typographyType="${NidocaTypographyType.H2}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Header 3" typographyType="${NidocaTypographyType.H3}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Header 4" typographyType="${NidocaTypographyType.H4}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Header 5" typographyType="${NidocaTypographyType.H5}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Header 6" typographyType="${NidocaTypographyType.H6}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Button" typographyType="${NidocaTypographyType.BUTTON}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Mein Text Body 1" typographyType="${NidocaTypographyType.BODY1}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Mein Text Body 2" typographyType="${NidocaTypographyType.BODY2}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Caption" typographyType="${NidocaTypographyType.CAPTION}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Overline" typographyType="${NidocaTypographyType.OVERLINE}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Subtitel 1" typographyType="${NidocaTypographyType.SUBTITLE1}"> </nidoca-typography>
    <br />
    <nidoca-typography text="Subtitel 2" typographyType="${NidocaTypographyType.SUBTITLE2}"> </nidoca-typography>
    <br />


  `;

  @query("#print")
  printElement: NidocaPrint | undefined;

  render(): any {
    return html`
      <nidoca-layout-flex
        .flexDirection="${NidocaFlexLayoutDirection.COLUMN}"
        .flexWrap="${NidocaFlexLayoutWrap.WRAP}"
        .flexJustifyContent="${NidocaFlexLayoutJustifyContent.CENTER}"
        .flexAlignItems="${NidocaFlexLayoutAlignItems.CENTER}"
        .flexAlignContent="${NidocaFlexLayoutAlignContent.CENTER}"
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

        <nidoca-top-app-bar .prominent="${this.prominent}" .theme="${NidocaTheme.SURFACE}">
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
      </nidoca-layout-flex>

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
