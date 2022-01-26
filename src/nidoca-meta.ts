export const MOBILE_MIN_WIDTH = 0;
export const MOBILE_MAX_WIDTH = 640;
export const TABLE_MIN_WIDTH = 641;
export const TABLET_MAX_WIDTH = 1007;
export const DESKTOP_MIN_WIDTH = 1008;

import {NidocaArticle} from ".";

export class Nidoca {
  initDefaultComponents() {
    const mylElement = new NidocaArticle();
    //<NidocaArticle>document.createElement("nidoca-article");
    mylElement.title = "Ut enim ad minim veniam";
    mylElement.summary="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip";
    mylElement.text =
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
    console.log(mylElement.title);
    this.registeredElementsMap.set("nidoca-article", mylElement);

    this.registerElementName("nidoca-typography");
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

  private _registeredElementsMap: Map<string, HTMLElement> = new Map<string, HTMLElement>();

  public get registeredElementsMap(): Map<string, HTMLElement> {
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
    this.registeredElementsMap.set(elementName, element);
  }
}

export class NidocaTheme {
  static readonly PRIMARY: string = "primary";
  static readonly SECONDARY: string = "secondary";
  static readonly SURFACE: string = "surface";
  static readonly BACKGROUND: string = "background";
}
