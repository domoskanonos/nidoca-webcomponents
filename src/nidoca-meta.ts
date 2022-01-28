export const MOBILE_MIN_WIDTH = 0;
export const MOBILE_MAX_WIDTH = 640;
export const TABLE_MIN_WIDTH = 641;
export const TABLET_MAX_WIDTH = 1007;
export const DESKTOP_MIN_WIDTH = 1008;

import {html, TemplateResult} from "lit";
import {
  NidocaArticle,
  NidocaAvatar,
  NidocaIcon,
  NidocaImg,
  NidocaList,
  NidocaListItem,
  NidocaMovie,
  NidocaProgress,
  NidocaSearchBar,
  NidocaTypography,
} from ".";

export class Nidoca {
  initDefaultComponents() {
    //nidoca-article
    const nidocaArticle = new NidocaArticle();
    nidocaArticle.style.padding = "var(--space-medium)";
    nidocaArticle.title = "Ut enim ad minim veniam";
    nidocaArticle.summary = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip";
    nidocaArticle.text =
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    this.registeredElementsMap.set("nidoca-article", html`${nidocaArticle}`);

    //nidoca-typography
    const nidocaTypography = new NidocaTypography();
    nidocaTypography.style.padding = "var(--space-medium)";
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
    const searchbar = new NidocaSearchBar();
    searchbar.placeholder = "Suche...";
    this.registeredElementsMap.set("nidoca-search-bar", html`${searchbar}`);

    //nidoca-avatar
    const nidocaAvatar = new NidocaAvatar();
    nidocaAvatar.style.padding = "var(--space-medium)";
    nidocaAvatar.imgSrc = "https://github.com/domoskanonos/nidoca-assets/raw/main/avatar.jpg";
    nidocaAvatar.primaryText = "Dominik Bruhn";
    nidocaAvatar.description = "Softwareentwickler";
    this.registeredElementsMap.set("nidoca-avatar", html`${nidocaAvatar}`);

    //nidoca-progress
    const nidocaProgress = new NidocaProgress();
    nidocaProgress.style.padding = "var(--space-big)";
    this.registeredElementsMap.set("nidoca-progress", html`${nidocaProgress}`);

    //nidoca-icon
    const nidocaIcon = new NidocaIcon();
    nidocaIcon.style.padding = "var(--space-big)";
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
    const nidocaList = new NidocaList();
    nidocaList.appendChild(nidocaListItem.cloneNode(true));
    this.registeredElementsMap.set(
      "nidoca-list",
      html`<nidoca-list selectionMode stlye="padding:var(--space-big);"
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
        ><nidoca-list-item primaryText="List Item" secondaryText="List Item Secondary Text"></nidoca-list-item
      ></nidoca-list>`
    );

    this._registeredElementsMap.set(
      "nidoca-menu",
      html` <nidoca-menu>
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
  static readonly PRIMARY: string = "primary";
  static readonly SECONDARY: string = "secondary";
  static readonly SURFACE: string = "surface";
  static readonly BACKGROUND: string = "background";
}
