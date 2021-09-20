export enum PropertyType {
  STRING = "String",
  NUMBER = "Number",
  BOOLEAN = "Boolean",
  CLAZZ = "Class",
  OBJECT = "Object",
  ENUMERATION = "Enum",
  ARRAY = "Array",
  UNDEFINED = "undefined",
}

export class PropertyWrapper {
  getClassName(): string {
    const name = this.name;
    return this.name.slice(0, 1).toUpperCase() + name.slice(1, this.name.length);
  }

  public name: string;
  public obj: any;

  constructor(name: string, obj: any) {
    this.name = name;
    this.obj = obj;
  }

  public getPropertyType(): PropertyType {
    //console.log(JSON.stringify(this.obj));
    const typeName: any | undefined = this.getType().name;
    if (typeName == undefined) {
      if (this.getType() instanceof Object) {
        return PropertyType.ENUMERATION;
      }
      return PropertyType.UNDEFINED;
    }
    if (typeName) {
      switch (typeName) {
        case "String":
          return PropertyType.STRING;
        case "Boolean":
          return PropertyType.BOOLEAN;
        case "Number":
          return PropertyType.NUMBER;
        case "Object":
          return PropertyType.OBJECT;
        case "Array":
          return PropertyType.ARRAY;
        default:
          return PropertyType.CLAZZ;
      }
    } else {
      return PropertyType.OBJECT;
    }
  }

  getTypeName(): string {
    return this.getPropertyType() == PropertyType.CLAZZ ? this.obj.type.name : this.getPropertyType();
  }

  getEnumValues(): any[] {
    const enumValues: any[] = [];
    Object.values(this.getType()).forEach((value: any) => {
      enumValues.push({
        key: value,
        value: String(Object.keys(this.getType())[Object.values(this.getType()).indexOf(value)]),
      });
    });
    return enumValues;
  }

  getEnumValue(key: any): any {
    return Object.values(this.getType())[Object.keys(this.getType()).indexOf(key)];
  }

  getEnumKey(value: any): any {
    const values = this.getEnumValues();
    for (let i = 0; i < values.length; i++) {
      const item: any = values[i];
      if (item.key == value) {
        return item.value;
      }
    }
  }

  isArray(): boolean {
    return Array.isArray(this.getType());
  }

  public getType(): any | undefined {
    //console.log("getType: "+ typeof this.obj);
    return this.obj ? this.obj.type : undefined;
  }

  public getTypeOf(): any | undefined {
    console.log("Type of : " + typeof this.obj);
    return typeof this.obj;
  }

  public toString(): string {
    return JSON.stringify(
      {
        name: this.obj.type.name,
        prototype: this.obj,
      },
      null,
      2
    );
  }
}
