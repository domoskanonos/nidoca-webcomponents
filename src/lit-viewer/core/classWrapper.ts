import { LitElement } from "lit-element";
import { PropertyWrapper } from "./propertyWrapper";

export class ClassWrapper<T extends LitElement> {
  public instance: T;

  constructor(element: T) {
    this.instance = element;
  }

  public getClassName() {
    return this.instance.constructor.name;
  }

  getTagName(): string {
    return this.instance.localName;
  }

  public getClazz(): any {
    return this.instance.constructor;
  }

  public getSlotNames(): string[] {
    return this.getSlots().map((prop) => { return prop.name ? prop.name : "default" });
  }

  public getSlots(): HTMLSlotElement[] {
    return this.getElementsByTagName("SLOT", this.instance.shadowRoot);
  }

  private getElementsByTagName(tagName: string, element: any | undefined | null): HTMLSlotElement[] {
    let retval: HTMLSlotElement[] = [];
    if (element) {
      const elementTagName = element.tagName;
      if (elementTagName == tagName) {
        retval.push(<HTMLSlotElement>element);
      }
      if (element.children.length > 0) {
        const elements = element?.children;
        for (let i = 0; i < elements.length; i++) {
          retval = retval.concat(this.getElementsByTagName(tagName, elements.item(i)));
        }
      }
    }
    return retval;
  }


  public getPropertieNames(): string[] {
    const obj: any = this.instance.constructor;
    const propNames: string[] = Object.getOwnPropertyNames(obj);
    return propNames;
  }

  public getProperties(): PropertyWrapper[] {
    const classProperties: Map<string, any> = (<any>this.instance.constructor)["elementProperties"];
    if (!classProperties) {
      throw new Error("selected item malformed");
    }
    const classPropertyArray: PropertyWrapper[] = [];
    for (const key of Array.from(classProperties.keys())) {
      classPropertyArray.push(new PropertyWrapper(key, classProperties.get(key)));
    }
    return classPropertyArray;
  }

}
