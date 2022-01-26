import {customElement, html, LitElement, PropertyValues, TemplateResult} from "lit-element";
import {ClassWrapper as WebcomponentWrapper} from "./core/classWrapper";
import {ClassGuiWrapper as WebcomponentGuiWrapper} from "./core/classGuiWrapper";
import {css} from "lit-element";
import {PropertyGuiWrapper} from "./core/propertyGuiWrapper";
import {NidocaTypographyType} from "../nidoca-typography";
import {property} from "lit/decorators.js";
import {NidocaTheme} from "..";

@customElement("lit-viewer")
export class LitViewer extends LitElement {
  static styles = css`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `;

  private clazzGuiWrapper: WebcomponentGuiWrapper<any> | null = null;

  @property({type: Array})
  customEventNames: string[] = [];

  @property({type: Object})
  element: HTMLElement | undefined;

  @property({type: String})
  elementName: string = "";

  updated(_changedProperties: PropertyValues): void {
    if (_changedProperties.has("element") && this.element != undefined) {
      this.clazzGuiWrapper = new WebcomponentGuiWrapper(new WebcomponentWrapper(<LitElement>this.element));
      this.requestUpdate();
    }
    if (_changedProperties.has("elementName") && this.elementName != "") {
      const htmlElement = document.createElement(this.elementName);
      this.element = htmlElement;
    }
  }

  public render(): TemplateResult {
    return this.clazzGuiWrapper
      ? html`
          <nidoca-section-split width="100%">
            <div slot="left">
              <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Tag</nidoca-typography>
              </nidoca-layout-spacer>
              <nidoca-code>${this.clazzGuiWrapper ? this.clazzGuiWrapper.classWrapper.getHTMLTag() : ""} </nidoca-code>

              ${this.clazzGuiWrapper.hasProperties()
                ? html` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                      <nidoca-typography .typographyType="${NidocaTypographyType.H2}"> Attribute </nidoca-typography>
                    </nidoca-layout-spacer>

                    <nidoca-table
                      .headers="${["name", "type", "converter type", "render type", "values"]}"
                      .rows="${this.toAttributeRows(this.clazzGuiWrapper.getPropertyGuiWrappers())}"
                    >
                    </nidoca-table>`
                : html``}
              ${this.clazzGuiWrapper.classWrapper.hasSlots()
                ? html` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                      <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Slots </nidoca-typography>
                    </nidoca-layout-spacer>

                    <nidoca-table
                      .headers="${["name"]}"
                      .rows="${this.toSlotRows(this.clazzGuiWrapper.classWrapper.getSlotNames())}"
                    >
                    </nidoca-table>`
                : html``}
              ${this.customEventNames.length > 0
                ? html` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                      <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Custom Events </nidoca-typography>
                    </nidoca-layout-spacer>
                    <nidoca-table .headers="${["name"]}" .rows="${this.toCustomEventRows(this.customEventNames)}">
                    </nidoca-table>`
                : html``}
            </div>

            <nidoca-tabs tabIndex="0" slot="right">
              <nidoca-tab slot="tab">Vorschau</nidoca-tab>
              <nidoca-tab slot="tab">Javascript</nidoca-tab>
              <nidoca-tab slot="tab">Typescript</nidoca-tab>
              <nidoca-tab slot="tab">Lit</nidoca-tab>
              <nidoca-tab slot="tab">Angular</nidoca-tab>

              <nidoca-tab-content slot="tabContent">
                <nidoca-section .theme="${NidocaTheme.PRIMARY}">
                  <nidoca-layout-spacer left="50px" right="50px" top="50px" bottom="50px">
                    ${this.element}
                  </nidoca-layout-spacer>
                </nidoca-section>
              </nidoca-tab-content>

              <nidoca-tab-content slot="tabContent">
                <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-code style="width:100%;">${this.clazzGuiWrapper.getAsJavascript()} </nidoca-code>
                </nidoca-layout-spacer>
              </nidoca-tab-content>

              <nidoca-tab-content slot="tabContent">
                <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-code>${this.clazzGuiWrapper.getTypescript()}</nidoca-code>
                </nidoca-layout-spacer>
              </nidoca-tab-content>

              <nidoca-tab-content slot="tabContent">
                <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-code>${this.clazzGuiWrapper.getAsLit()}</nidoca-code>
                </nidoca-layout-spacer>
              </nidoca-tab-content>

              <nidoca-tab-content slot="tabContent">
                <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-code>${this.clazzGuiWrapper.getAsHtml()}</nidoca-code>
                </nidoca-layout-spacer>
              </nidoca-tab-content>
            </nidoca-tabs>
          </nidoca-section-split>
        `
      : html``;
  }

  toAttributeRows(arr: PropertyGuiWrapper[] | undefined) {
    const retval: string[][] = [[]];
    if (arr) {
      arr.map((prop) => {
        const arr: any[] = [];
        arr.push(prop.propertyWrapper.propertyName);
        arr.push(prop.propertyWrapper.getTypeName());
        arr.push(prop.propertyWrapper.getConverterTypeName());
        arr.push(prop.propertyWrapper.getRenderType());
        arr.push(prop.getInputElement(this.clazzGuiWrapper));
        retval.push(arr);
        return arr;
      });
    }
    return retval;
  }

  toSlotRows(arr: string[] | undefined) {
    const retval: string[][] = [[]];
    if (arr) {
      arr.map((name) => {
        const arr: string[] = [];
        arr.push(name);
        retval.push(arr);
        return arr;
      });
    }
    return retval;
  }

  toCustomEventRows(arr: string[] | undefined) {
    const retval: string[][] = [[]];
    if (arr) {
      arr.map((name) => {
        const arr: string[] = [];
        arr.push(name);
        retval.push(arr);
        return arr;
      });
    }
    return retval;
  }
}
