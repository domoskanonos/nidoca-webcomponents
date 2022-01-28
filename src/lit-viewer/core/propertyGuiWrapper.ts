import {PropertyWrapper, RenderType} from "./propertyWrapper";
import {html, LitElement, TemplateResult} from "lit";
import {ClassGuiWrapper} from "./classGuiWrapper";
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

    const classWrapper: ClassWrapper<any> | null = classGuiWrapper.classWrapper;

    if (classWrapper == null) {
      return html``;
    }
    const propertyType: RenderType = this.propertyWrapper.getRenderType();
    switch (propertyType) {
      case RenderType.STRING:
        return html`<nidoca-form-text .textType="${NidocaTextType.TEXT}"
        label="${this.propertyWrapper.propertyName}"
          value="${classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
            classGuiWrapper.showcaseElement.requestUpdate();
          }}"
        /></nidoca-form-text>`;
      case RenderType.NUMBER:
        return html`<nidoca-form-text
          label="${this.propertyWrapper.propertyName}"
          .textType="${NidocaTextType.NUMBER}"
          value="${classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
            classGuiWrapper.showcaseElement.requestUpdate();
          }}"
        ></nidoca-form-text>`;
      case RenderType.BOOLEAN: {
        return html`<nidoca-form-switch
          label="${this.propertyWrapper.propertyName}"
          type="checkbox"
          .checked="${classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
            classGuiWrapper.showcaseElement.requestUpdate();
          }}"
        ></nidoca-form-switch>`;
      }
      case RenderType.COMBOBOX: {
        return html`<nidoca-form-combobox
          label="${this.propertyWrapper.propertyName}"
          .options="${NidocaFormCombobox.enumToOptions(this.propertyWrapper.getType(), false)}"
          value="${classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]}"
          @input="${(eventArg: any) => {
            classWrapper.instance[this.propertyWrapper.propertyName] = this.propertyWrapper.getEnumValue(
              eventArg.target.getOutputData().value
            );
            classGuiWrapper.showcaseElement.requestUpdate();
          }}"
        >
        </nidoca-form-combobox>`;
      }
      case RenderType.ARRAY:
        return html`
          <nidoca-form-combobox
            label="${this.propertyWrapper.propertyName}"
            .options="${NidocaFormCombobox.toComboboxOptions(
              this.propertyWrapper.getType(),
              this.propertyWrapper.getTypeName()
            )}"
            .multiple="${true}"
            size="5"
            .value="${classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]}"
            @input="${(eventArg: any) => {
              classWrapper.instance[this.propertyWrapper.propertyName] = eventArg.target.getOutputData().value;
              classWrapper.instance.requestUpdate();
            }}"
          >
          </nidoca-form-combobox>
        `;
      default:
        return html``;
    }
  }

  getAsHtml(classGuiWrapper: ClassGuiWrapper<LitElement>): string {
    const propertyType: RenderType = this.propertyWrapper.getConverterTypeName();
    switch (propertyType) {
      case RenderType.BOOLEAN:
        return `.${this.propertyWrapper.propertyName}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }"\n`;
      case RenderType.ARRAY:
        return "";
      case RenderType.COMBOBOX:
        return `${this.propertyWrapper.propertyName}="${this.propertyWrapper.getEnumKey(
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        )}"\n`;
      default:
        return `${this.propertyWrapper.propertyName}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }"\n`;
    }
  }

  getAsLit(classGuiWrapper: ClassGuiWrapper<LitElement>): string {
    const propertyType: RenderType = this.propertyWrapper.getRenderType();
    switch (propertyType) {
      case RenderType.COMBOBOX:
        return `.${
          this.propertyWrapper.propertyName
        }="\${${this.propertyWrapper.getClassName()}.${this.propertyWrapper.getEnumKey(
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        )}}"\n`;
      case RenderType.STRING:
        return `${this.propertyWrapper.propertyName}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }"\n`;
      case RenderType.ARRAY:
        return `.${this.propertyWrapper.propertyName}="\${[]}"\n`;
      default:
        return `.${this.propertyWrapper.propertyName}="\${}"\n`;
    }
  }

  getAsJavascript(classGuiWrapper: ClassGuiWrapper<LitElement>): string {
    const propertyType: RenderType = this.propertyWrapper.getConverterTypeName();
    switch (propertyType) {
      case RenderType.COMBOBOX:
      case RenderType.ARRAY:
        return "";
      case RenderType.STRING:
        return `element.${this.propertyWrapper.propertyName}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }";\n`;
      default:
        return `element.${this.propertyWrapper.propertyName}=${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        };\n`;
    }
  }

  getAsTypescript(classGuiWrapper: ClassGuiWrapper<LitElement>): string {
    const propertyType: RenderType = this.propertyWrapper.getConverterTypeName();
    switch (propertyType) {
      case RenderType.COMBOBOX:
      case RenderType.ARRAY:
        return "";
      case RenderType.STRING:
        return `element.${this.propertyWrapper.propertyName}="${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        }";\n`;
      default:
        return `element.${this.propertyWrapper.propertyName}=${
          classGuiWrapper.classWrapper.instance[this.propertyWrapper.propertyName as keyof LitElement]
        };\n`;
    }
  }
}
