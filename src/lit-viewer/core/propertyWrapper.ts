export enum RenderType {
  STRING = "String",
  NUMBER = "Number",
  BOOLEAN = "boolean",
  CLAZZ = "Class",
  OBJECT = "Object",
  ENUMERATION = "Enum",
  ARRAY = "Array",
  UNDEFINED = "undefined",
}

export class PropertyWrapper {
  getClassName(): string {
    const name = this.propertyName;
    return this.propertyName.slice(0, 1).toUpperCase() + name.slice(1, this.propertyName.length);
  }

  public propertyName: string;
  public propertyValue: any;

  constructor(propertyName: string, propertyValue: any) {
    this.propertyName = propertyName;
    this.propertyValue = propertyValue;
  }

  public getRenderType(): RenderType {
    if (this.isArray()) {
      return RenderType.ARRAY;
    }
    if (this.isEnum()) {
      return RenderType.ENUMERATION;
    }

    return this.getConverterTypeName();
  }

  isEnum() {
    if (this.getType() instanceof Object && !(this.propertyValue.type.name == RenderType.STRING)) {
      return this.getType() instanceof Object;
    }
    return false;
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
    return this.getConverterTypeName() == "Array";
  }

  public getType(): any | undefined {
    return this.propertyValue?.type;
  }

  getTypeName(): string {
    return this.getType().name;
  }

  public getConverterType(): any | undefined {
    return this.propertyValue.converter;
  }

  public getConverterTypeName(): any | undefined {
    return this.getConverterType()?.name;
  }

  public getTypeOf(): any | undefined {
    return typeof this.propertyValue;
  }

  public toString(): string {
    return JSON.stringify(
      {
        name: this.propertyValue.type.name,
        prototype: this.propertyValue,
      },
      null,
      2
    );
  }
}
