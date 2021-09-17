import {PropertyWrapper, PropertyType} from "./propertyWrapper";
import {html, LitElement, TemplateResult} from "lit";
import {ClassGuiWrapper} from "./classGuiWrapper";
import {repeat} from "lit/directives/repeat.js";
import {NidocaFormCombobox} from "../../nidoca-form-combobox";
import { NidocaTextType } from "../..";

export class PropertyGuiWrapper {
  public propertyWrapper: PropertyWrapper;

  constructor(propertyWrapper: PropertyWrapper) {
    this.propertyWrapper = propertyWrapper;
  }

  public getInputElement(classGuiWrapper: ClassGuiWrapper<any> | null): TemplateResult {
    if (classGuiWrapper == null) {
      return html``;
    }
    const propertyType: PropertyType = this.propertyWrapper.getPropertyType();
    switch (propertyType) {
      case PropertyType.STRING:
        return html`<nidoca-form-text .textType="${NidocaTextType.TEXT}"
          value="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classGuiWrapper.classWrapper.instance[this.propertyWrapper.name] = eventArg.target.getOutputData().value;
            classGuiWrapper.classWrapper.instance.requestUpdate();
            classGuiWrapper.showcaseElement.requestUpdate();
          }}"
        /></nidoca-form-text>`;
      case PropertyType.NUMBER:
        return html`<nidoca-form-text .textType="${NidocaTextType.NUMBER}"
          value="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classGuiWrapper.classWrapper.instance[this.propertyWrapper.name] = eventArg.target.getOutputData().value;
            classGuiWrapper.classWrapper.instance.requestUpdate();
            classGuiWrapper.showcaseElement.requestUpdate();
          }}"
        ></nidoca-form-text>`;
      case PropertyType.BOOLEAN: {
        return html`<input
          type="checkbox"
          @input="${(eventArg: any) => {
            classGuiWrapper.classWrapper.instance[this.propertyWrapper.name] = eventArg.target.checked;
            classGuiWrapper.classWrapper.instance.requestUpdate();
            classGuiWrapper.showcaseElement.requestUpdate();
          }}"
        />`;
      }
      case PropertyType.ENUMERATION: {
        const enumValues: any[] = this.propertyWrapper.getEnumValues();
        return html`<nidoca-form-combobox
          .options="${NidocaFormCombobox.enumToOptions(this.propertyWrapper.getType(),false)}"
          value="${classGuiWrapper.classWrapper.instance[this.propertyWrapper.name as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classGuiWrapper.classWrapper.instance[this.propertyWrapper.name] = this.propertyWrapper.getEnumValue(
              eventArg.target.getOutputData().value
            );
            classGuiWrapper.classWrapper.instance.requestUpdate();
            classGuiWrapper.showcaseElement.requestUpdate();
          }}"
        >
        </nidoca-form-combobox>`;
      }
      case PropertyType.ARRAY:
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
