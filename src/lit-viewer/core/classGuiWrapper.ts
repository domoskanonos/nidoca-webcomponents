import {html, LitElement, TemplateResult} from "lit-element";
import {LitViewer} from "..";
import {FormOutputData} from "../..";
import {ClassWrapper} from "./classWrapper";
import {PropertyGuiWrapper} from "./propertyGuiWrapper";

export class ClassGuiWrapper<T extends LitElement> {
  public classWrapper: ClassWrapper<T>;

  public showcaseElement: LitViewer;

  constructor(showcaseElement: LitViewer, classWrapper: ClassWrapper<T>) {
    this.showcaseElement = showcaseElement;
    this.classWrapper = classWrapper;
  }

  public getAsHtml(): string {
    const htmlString: string = `
<${this.classWrapper.getTagName()}
${this.getPropertyGuiWrappers()
  .map((propertyGuiWrapper) => {
    return propertyGuiWrapper.getAsHtml(this);
  })
  .join("")}></${this.classWrapper.getTagName()}>
`;
    return htmlString;
  }

  public getAsJavascript(): string {
    const htmlString: string = `
<${this.classWrapper.getTagName()} id="meinElement"></${this.classWrapper.getTagName()}>
<script>
  const element = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers()
    .map((propertyGuiWrapper) => {
      return propertyGuiWrapper.getAsJavascript(this);
    })
    .join("  ")}</script>
`;
    return htmlString;
  }

  public getTypescript(): string {
    const htmlString: string = `
const element : ${this.classWrapper.getClassName()} = document.getElementById("meinElement");
  ${this.getPropertyGuiWrappers()
    .map((propertyGuiWrapper) => {
      return propertyGuiWrapper.getAsTypescript(this);
    })
    .join("  ")}
`;
    return htmlString;
  }

  public getAsLit(): string {
    const htmlString: string = `
<${this.classWrapper.getTagName()}
  ${this.getPropertyGuiWrappers()
    .map((propertyGuiWrapper) => {
      return propertyGuiWrapper.getAsLit(this);
    })
    .join("  ")}>
</${this.classWrapper.getTagName()}>
`;
    return htmlString;
  }

  public getAsAngular(): string {
    const htmlString: string = `
<${this.classWrapper.getTagName()}
${this.classWrapper
  .getProperties()
  .map((propertyArg) => {
    return `.${propertyArg.propertyName}="\${this.${propertyArg.propertyName}}"\n`;
  })
  .join("")}></${this.classWrapper.getTagName()}>
`;
    return htmlString;
  }

  public renderPropertyGui(): TemplateResult[] {
    const returnArray: TemplateResult[] = [];
    for (const prop of this.getPropertyGuiWrappers()) {
      returnArray.push(
        html`
          <div>
            <b>${prop.propertyWrapper.propertyName}</b>

            <pre>${prop.propertyWrapper.getTypeName()}</pre>
            <div>${prop.getInputElement(this)}</div>
          </div>
        `
      );
    }
    return returnArray;
  }
  public getPropertyGuiWrappers(): PropertyGuiWrapper[] {
    const propertyGuiWrappers: PropertyGuiWrapper[] = [];
    for (const prop of this.classWrapper.getProperties()) {
      propertyGuiWrappers.push(new PropertyGuiWrapper(prop));
    }
    return propertyGuiWrappers;
  }

  public getPropertieNames(): string[] {
    const retval: string[] = [];
    this.getPropertyGuiWrappers().map((prop) => {
      retval.push(prop.propertyWrapper.propertyName);
    });
    return retval;
  }

  hasProperties(): boolean {
    return this.getPropertieNames().length > 0;
  }
}
