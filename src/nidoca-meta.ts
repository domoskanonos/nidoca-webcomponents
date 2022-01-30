export const MOBILE_MIN_WIDTH = 0;
export const MOBILE_MAX_WIDTH = 640;
export const TABLE_MIN_WIDTH = 641;
export const TABLET_MAX_WIDTH = 1007;
export const DESKTOP_MIN_WIDTH = 1008;

import {html, HTMLTemplateResult, TemplateResult} from "lit";
import {
  NidocaArticle,
  NidocaAvatar,
  NidocaIcon,
  NidocaImg,
  NidocaListItem,
  NidocaMovie,
  NidocaProgress,
  NidocaSearchBar,
  NidocaTypography,
  NidocaTypographyType,
} from ".";

export class Nidoca {
  initDefaultComponents() {
    //nidoca-article
    const nidocaArticle = new NidocaArticle();
    nidocaArticle.style.padding = "var(--space-3)";
    nidocaArticle.title = "Ut enim ad minim veniam";
    nidocaArticle.summary = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip";
    nidocaArticle.text =
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    this.registeredElementsMap.set("nidoca-article", html`${nidocaArticle}`);

    //nidoca-typography
    const nidocaTypography = new NidocaTypography();
    nidocaTypography.style.padding = "var(--space-3)";
    nidocaTypography.text = "Typography";
    nidocaTypography.type = "BODY1";
    nidocaTypography.textAlign = "left";
    this.registeredElementsMap.set("nidoca-typography", html`${nidocaTypography}`);

    //nidoca-img
    const nidocaImg = new NidocaImg();
    nidocaImg.src = "http://nidoca.eu/img/DSC02586.jpg";
    nidocaImg.width = "100%";
    nidocaImg.height = "100%";
    this.registeredElementsMap.set("nidoca-img", html`${nidocaImg}`);

    //nidoca-movie
    const nidocaMovie = new NidocaMovie();
    nidocaMovie.src = "http://www.youtube.com/embed/lJIrF4YjHfQ";
    this.registeredElementsMap.set("nidoca-movie", html`${nidocaMovie}`);

    //nidoca-search-bar
    this.registeredElementsMap.set(
      "nidoca-search-bar",
      html`<nidoca-search-bar theme="secondary" placeholder="Suche..."></nidoca-search-bar>`
    );

    //nidoca-avatar
    const nidocaAvatar = new NidocaAvatar();
    nidocaAvatar.style.padding = "var(--space-3)";
    nidocaAvatar.imgSrc = "https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg";
    nidocaAvatar.primaryText = "Dominik Bruhn";
    nidocaAvatar.description = "Softwareentwickler";
    this.registeredElementsMap.set("nidoca-avatar", html`${nidocaAvatar}`);

    //nidoca-progress
    const nidocaProgress = new NidocaProgress();
    nidocaProgress.style.padding = "var(--space-6)";
    this.registeredElementsMap.set("nidoca-progress", html`${nidocaProgress}`);

    //nidoca-icon
    const nidocaIcon = new NidocaIcon();
    nidocaIcon.style.padding = "var(--space-6)";
    nidocaIcon.icon = "home";
    nidocaIcon.primaryText = "Home Icon";
    nidocaIcon.clickable = true;
    nidocaIcon.style.fontSize = "96px";
    this.registeredElementsMap.set("nidoca-icon", html`${nidocaIcon}`);

    //nidoca-list-item
    const nidocaListItem = new NidocaListItem();
    nidocaListItem.selectionMode = true;
    nidocaListItem.selected = true;
    nidocaListItem.primaryText = "List Item";
    nidocaListItem.secondaryText = "List Item Secondary Text";
    this.registeredElementsMap.set("nidoca-list-item", html`${nidocaListItem}`);

    //nidoca-list
    this.registeredElementsMap.set(
      "nidoca-list",
      html`<nidoca-list theme="primary" selectionMode stlye="padding:var(--space-6);"
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
      ></nidoca-list>`
    );

    this._registeredElementsMap.set(
      "nidoca-menu",
      html` <nidoca-menu theme="secondary">
        <nidoca-menu-item text="Start"></nidoca-menu-item>
        <nidoca-menu-area text="Framework"></nidoca-menu-area>
        <nidoca-menu-item text="Komponenten"> </nidoca-menu-item>
        <nidoca-menu-area icon="gavel" text="Rechtliches"></nidoca-menu-area>
        <nidoca-menu-item text="Impressum"> </nidoca-menu-item>
        <nidoca-menu-item text="Datenschutz"> </nidoca-menu-item>
        <nidoca-menu-item text="Nutzungsbedingungen"> </nidoca-menu-item>
        <nidoca-menu-area text="Sonstiges"></nidoca-menu-area>
        <nidoca-menu-item icon="home" text="Einstellungen"> </nidoca-menu-item>
      </nidoca-menu>`
    );

    this._registeredElementsMap.set(
      "nidoca-accordion",
      html`<nidoca-accordion .theme="${NidocaTheme.PRIMARY}"
        ><nidoca-accordion-item header="Lorem Ipsum" opened
          ><nidoca-article
            style="padding:25px;"
            title="Lorem Ipsum"
            summary="Lorem Ipsum Dolorem ipsum med en to."
            text="Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to. Lorem Ipsum Dolorem ipsum med en to."
          ></nidoca-article></nidoca-accordion-item
        ><nidoca-accordion-item header="Bild 2"
          ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img></nidoca-accordion-item
        ><nidoca-accordion-item header="Bild 3"
          ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img></nidoca-accordion-item
        ><nidoca-accordion-item header="Bild 4"
          ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img></nidoca-accordion-item
      ></nidoca-accordion>`
    );
    this._registeredElementsMap.set("nidoca-box-shadow", html`<nidoca-box-shadow></nidoca-box-shadow>`);
    this._registeredElementsMap.set(
      "nidoca-button",
      html`<nidoca-button leadingIcon="home" buttonType="OUTLINED">Mein Button</nidoca-button>`
    );
    this._registeredElementsMap.set("nidoca-card", html`<nidoca-card></nidoca-card>`);
    this._registeredElementsMap.set("nidoca-chip", html`<nidoca-chip>jojij</nidoca-chip>`);
    this._registeredElementsMap.set("nidoca-code", html`<nidoca-code></nidoca-code>`);
    this._registeredElementsMap.set("nidoca-dialog-action", html`<nidoca-dialog-action></nidoca-dialog-action>`);
    this._registeredElementsMap.set(
      "nidoca-elevation",
      html`
        <nidoca-elevation
          .show="${true}"
          .associatedElement="${undefined}"
          @nidoca-elevation-event-closeme="${() => alert("Hallo")}"
        >joijiojoij
        </nidoca-elevation>
      `
    );
    this._registeredElementsMap.set("nidoca-dialog", html`<nidoca-dialog></nidoca-dialog>`);
    this._registeredElementsMap.set(
      "nidoca-form-combobox",
      html`<nidoca-form-combobox
        theme="primary"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
        .options="${[
          {key: "item1", value: "Item 1"},
          {key: "item2", value: "Item 2"},
        ]}"
        value="item2"
      ></nidoca-form-combobox>`
    );
    this._registeredElementsMap.set(
      "nidoca-form-date",
      html`<nidoca-form-date
        theme="primary"
        label="Geburtstag"
        placeholder="Platzhalter"
        trailingIcon="home"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-date>`
    );
    this._registeredElementsMap.set("nidoca-form-switch", html`<nidoca-form-switch></nidoca-form-switch>`);
    this._registeredElementsMap.set(
      "nidoca-form-text",
      html`
        <nidoca-form-text
          style="width:100%;"
          theme="primary"
          label="Mein Textfeld"
          placeholder="Platzhalter"
          trailingIcon="home"
          infoText="Info"
          warningText="Warnung"
          errorText="Fehler"
          name="text"
        >
        </nidoca-form-text>
      `
    );
    this._registeredElementsMap.set(
      "nidoca-form-textarea",
      html`<nidoca-form-textarea
        style="width:100%;"
        theme="primary"
        label="Mein Textfeld"
        placeholder="Platzhalter"
        infoText="Info"
        warningText="Warnung"
        errorText="Fehler"
        name="text"
      ></nidoca-form-textarea>`
    );
    this._registeredElementsMap.set(
      "nidoca-form-captcha",
      html`<nidoca-form-captcha
        theme="primary"
        label="Wie lautet das Ergebnis von:"
        name="captcha"
      ></nidoca-form-captcha>`
    );

    this._registeredElementsMap.set(
      "nidoca-gallery",
      html`<nidoca-gallery
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
        ><nidoca-img src="http://nidoca.eu/img/DSC02586.jpg"></nidoca-img
      ></nidoca-gallery>`
    );
    this._registeredElementsMap.set("nidoca-link", html`<nidoca-link></nidoca-link>`);
    this._registeredElementsMap.set("nidoca-ripple", html`<nidoca-ripple></nidoca-ripple>`);
    this._registeredElementsMap.set(
      "nidoca-tabs",
      html`
        <nidoca-tabs tabIndex="0">
          <nidoca-tab slot="tab">Tab 1</nidoca-tab>
          <nidoca-tab slot="tab">Tab 2</nidoca-tab>
          <nidoca-tab slot="tab">Tab 3</nidoca-tab>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 1 </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 2 </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> Tab Inhalt 3 </nidoca-tab-content>
        </nidoca-tabs>
      `
    );
    this._registeredElementsMap.set("nidoca-table", html`<nidoca-table></nidoca-table>`);
    this._registeredElementsMap.set(
      "nidoca-top-app-bar",
      html`<nidoca-top-app-bar .theme="${NidocaTheme.PRIMARY}">
        <nidoca-typography slot="center" type="${NidocaTypographyType.BODY1}">Top App Bar</nidoca-typography>
        <nidoca-icon slot="left" clickable icon="menu"></nidoca-icon>
        <nidoca-icon slot="right" icon="search"></nidoca-icon>
        <nidoca-icon slot="right" icon="more_vert" clickable></nidoca-icon>

        <nidoca-search-bar slot="prominent" placeholder="Suche..."></nidoca-search-bar>
      </nidoca-top-app-bar>`
    );
    this._registeredElementsMap.set("nidoca-upload", html`<nidoca-upload></nidoca-upload>`);
    this._registeredElementsMap.set("nidoca-wizard", html`<nidoca-wizard></nidoca-wizard>`);
  }
  private static uniqueInstance: Nidoca;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static getUniqueInstance() {
    if (!Nidoca.uniqueInstance) {
      Nidoca.uniqueInstance = new Nidoca();
    }
    return Nidoca.uniqueInstance;
  }

  private _registeredElementsMap: Map<string, TemplateResult> = new Map<string, TemplateResult>();

  public get registeredElementsMap(): Map<string, TemplateResult> {
    return this._registeredElementsMap;
  }

  public get registeredElementNames(): string[] {
    const elementNames: string[] = [];
    for (const key of this.registeredElementsMap.keys()) {
      elementNames.push(key);
    }
    return elementNames;
  }

  public registerElementName(elementName: string): void {
    console.log(`register element: ${elementName}`);
    const element = document.createElement(elementName);
    this.registeredElementsMap.set(elementName, html`${element}`);
  }
}

export class NidocaTheme {
  static getStyle(theme: NidocaTheme | undefined): HTMLTemplateResult {
    return theme
      ? html`<style>
          :host,
          *,
          ::slotted(*) {
            color: var(--app-color-${theme});
            background-color: var(--app-color-${theme}-background);
          }
        </style>`
      : html``;
  }
  static readonly PRIMARY: string = "primary";
  static readonly SECONDARY: string = "secondary";
  static readonly SURFACE: string = "surface";
  static readonly BACKGROUND: string = "background";
}
