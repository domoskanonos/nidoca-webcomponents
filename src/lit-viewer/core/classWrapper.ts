import {LitElement} from "lit-element";
import {PropertyWrapper} from "./propertyWrapper";

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

  public getProperties(): PropertyWrapper[] {
    const obj: any = this.instance.constructor;
    const propNames: any = Object.getOwnPropertyNames(obj);
    propNames.forEach((propName: string) => {
      console.log("name: " + propName + " value: " + obj[propName]);
    });

    const newLocal = obj["elementProperties"];
    console.log(newLocal);
    //name: elementProperties value: [object Map]
    //classWrapper.ts:19 name: __attributeToPropertyMap value: [object Map]

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
