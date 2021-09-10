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
    return (
      this.name.slice(0, 1).toUpperCase() + name.slice(1, this.name.length)
    );
  }

  public name: string;
  public prototype: any;

  constructor(name: string, prototype: any) {
    this.name = name;
    this.prototype = prototype;
  }

  public getPropertyType(): PropertyType {
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
    return this.getPropertyType() == PropertyType.CLAZZ
      ? this.prototype.type.name
      : this.getPropertyType();
  }

  getEnumValues(): any[] {
    const enumValues: any[] = [];
    Object.values(this.getType()).forEach((value: any) => {
      enumValues.push({
        key: value,
        value: String(
          Object.keys(this.getType())[
            Object.values(this.getType()).indexOf(value)
          ]
        ),
      });
    });
    return enumValues;
  }

  getEnumValue(key: any): any {
    return Object.values(this.getType())[
      Object.keys(this.getType()).indexOf(key)
    ];
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
    return this.prototype ? this.prototype.type : undefined;
  }

  public toString(): string {
    return JSON.stringify(
      {
        name: this.prototype.type.name,
        prototype: this.prototype,
      },
      null,
      2
    );
  }
}
