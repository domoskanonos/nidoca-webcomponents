export enum RenderType {
  STRING = "String",
  NUMBER = "Number",
  BOOLEAN = "Boolean",
  COMBOBOX = "Class",
  ARRAY = "Array",
  UNDEFINED = "undefined",
}

export class PropertyWrapper {
  getClassName(): string {
    const name = this.propertyName;
    //return this.propertyName.slice(0, 1).toUpperCase() + name.slice(1, this.propertyName.length);
    return this.getTypeName() ? this.getTypeName() : this.getConverterTypeName();
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

    if (!this.isPrimitive()) {
      return RenderType.COMBOBOX;
    }

    let renderType: RenderType | null = null;
    if (renderType == null) {
      return <RenderType>this.getTypeName();
    }

    return RenderType.UNDEFINED;

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

  isPrimitive(): boolean {
    return this.getTypeName() == "String" | this.getTypeName() == "Boolean"|| this.getTypeName() == "Number";
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
