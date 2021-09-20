import {PropertyWrapper, PropertyType} from "./propertyWrapper";
import {html, LitElement, TemplateResult} from "lit";
import {ClassGuiWrapper} from "./classGuiWrapper";
import {repeat} from "lit/directives/repeat.js";
import {NidocaFormCombobox} from "../../nidoca-form-combobox";
import {NidocaTextType} from "../..";
import {ClassWrapper} from "./classWrapper";

export class PropertyGuiWrapper {
  public propertyWrapper: PropertyWrapper;

  constructor(propertyWrapper: PropertyWrapper) {
    this.propertyWrapper = propertyWrapper;
  }

  public getInputElement(classGuiWrapper: ClassGuiWrapper<any> | null): TemplateResult {
    if (classGuiWrapper == null) {
      return html``;
    }
    return this.renderPropertyInput(classGuiWrapper.classWrapper, this.propertyWrapper);
  }

  private renderPropertyInput(classWrapper: ClassWrapper<any> | null, propertyWrapper: PropertyWrapper) {
    if (classWrapper == null) {
      return html``;
    }
    const propertyType: PropertyType = propertyWrapper.getPropertyType();
    switch (propertyType) {
      case PropertyType.STRING:
        return html`<nidoca-form-text .textType="${NidocaTextType.TEXT}"
          value="${classWrapper.instance[propertyWrapper.name as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[propertyWrapper.name] = eventArg.target.getOutputData().value;
            classWrapper.instance.requestUpdate();
          }}"
        /></nidoca-form-text>`;
      case PropertyType.NUMBER:
        return html`<nidoca-form-text
          .textType="${NidocaTextType.NUMBER}"
          value="${classWrapper.instance[propertyWrapper.name as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[propertyWrapper.name] = eventArg.target.getOutputData().value;
            classWrapper.instance.requestUpdate();
          }}"
        ></nidoca-form-text>`;
      case PropertyType.BOOLEAN: {
        return html`<input
          type="checkbox"
          @input="${(eventArg: any) => {
            classWrapper.instance[propertyWrapper.name] = eventArg.target.checked;
            classWrapper.instance.requestUpdate();
          }}"
        />`;
      }
      case PropertyType.ENUMERATION: {
        return html`<nidoca-form-combobox
          .options="${NidocaFormCombobox.enumToOptions(propertyWrapper.getType(), false)}"
          value="${classWrapper.instance[propertyWrapper.name as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[propertyWrapper.name] = propertyWrapper.getEnumValue(
              eventArg.target.getOutputData().value
            );
            classWrapper.instance.requestUpdate();
          }}"
        >
        </nidoca-form-combobox>`;
      }
      case PropertyType.ARRAY:
        return html`
          ${repeat(classWrapper.instance[propertyWrapper.name as keyof LitElement], (obj: any) => {
            return this.renderPropertyInput(classWrapper, new PropertyWrapper(obj.key, obj.prototype));
            //return html` <h1>${JSON.stringify(new PropertyWrapper(obj.key, obj.prototype))} - ${JSON.stringify(typeof obj)}"</h1>`;
          })}
        `;
      case PropertyType.CLAZZ:
      default:
        return html``;
    }
  }

  getAsHtml(classGuiWrapper: ClassGuiWrapper<LitElement>): string {
    const propertyType: PropertyType = this.propertyWrapper.getPropertyType();
    switch (propertyType) {
      case PropertyType.BOOLEAN:
        return `.${this.propertyWrapper.name}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        }"\n`;
      case PropertyType.CLAZZ:
      case PropertyType.ARRAY:
        return "";
      case PropertyType.ENUMERATION:
        return `${this.propertyWrapper.name}="${this.propertyWrapper.getEnumKey(
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        )}"\n`;
      default:
        return `${this.propertyWrapper.name}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        }"\n`;
    }
  }

  getAsLit(classGuiWrapper: ClassGuiWrapper<LitElement>): string {
    const propertyType: PropertyType = this.propertyWrapper.getPropertyType();
    switch (propertyType) {
      case PropertyType.CLAZZ:
        return `.${this.propertyWrapper.name}="\${new ${this.propertyWrapper.getClassName()}()}"\n`;
      case PropertyType.ENUMERATION:
        return `.${
          this.propertyWrapper.name
        }="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        )}}"\n`;
      case PropertyType.STRING:
        return `${this.propertyWrapper.name}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        }"\n`;
      case PropertyType.ARRAY:
        return `.${this.propertyWrapper.name}="\${[]}"\n`;
      default:
        return `.${this.propertyWrapper.name}="\${${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        }}"\n`;
    }
  }

  getAsJavascript(classGuiWrapper: ClassGuiWrapper<LitElement>): string {
    const propertyType: PropertyType = this.propertyWrapper.getPropertyType();
    switch (propertyType) {
      case PropertyType.ENUMERATION:
      case PropertyType.CLAZZ:
      case PropertyType.ARRAY:
        return ``;
      case PropertyType.STRING:
        return `element.${this.propertyWrapper.name}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        }";\n`;
      default:
        return `element.${this.propertyWrapper.name}=${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        };\n`;
    }
  }

  getAsTypescript(classGuiWrapper: ClassGuiWrapper<LitElement>): string {
    const propertyType: PropertyType = this.propertyWrapper.getPropertyType();
    switch (propertyType) {
      case PropertyType.ENUMERATION:
      case PropertyType.CLAZZ:
      case PropertyType.ARRAY:
        return ``;
      case PropertyType.STRING:
        return `element.${this.propertyWrapper.name}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        }";\n`;
      default:
        return `element.${this.propertyWrapper.name}=${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]
        };\n`;
    }
  }
}
