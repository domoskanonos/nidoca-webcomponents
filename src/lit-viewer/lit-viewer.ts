import {customElement, html, LitElement, TemplateResult} from "lit-element";

import {ClassWrapper} from "./core/classWrapper";
import {ClassGuiWrapper} from "./core/classGuiWrapper";
import {css} from "lit-element";
import {NidocaFormCombobox, NidocaShadowType} from "..";
import {PropertyGuiWrapper} from "./core/propertyGuiWrapper";
import {NidocaLayoutSpacerType} from "../nidoca-layout-spacer";
import {NidocaTypographyType} from "../nidoca-typography";

@customElement("lit-viewer")
export class LitViewer extends LitElement {
  static styles = css`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `;

  private clazzGuiWrapper: ClassGuiWrapper<any> | null = null;

  public render(): TemplateResult {
    return html`
      <div class="container">
        <nidoca-box-shadow style="width:100%; height:100%;" .shadowType="${NidocaShadowType.KEY_LIGHT}">
          <nidoca-layout-spacer>
            <slot @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
          </nidoca-layout-spacer>
        </nidoca-box-shadow>

        <div>
          ${this.clazzGuiWrapper
            ? html`
                <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}">
                  <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Attribute</nidoca-typography>
                </nidoca-layout-spacer>

                <nidoca-table
                  .headers="${["name", "type", "values"]}"
                  .rows="${this.toAttributeRows(this.clazzGuiWrapper.getPropertyGuiWrappers())}"
                >
                </nidoca-table>

                <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}">
                  <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Slots</nidoca-typography>
                </nidoca-layout-spacer>

                <nidoca-table
                  .headers="${["name"]}"
                  .rows="${this.toSlotRows(this.clazzGuiWrapper?.classWrapper.getSlotNames())}"
                >
                </nidoca-table>

                <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}">
                  <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Quelltext</nidoca-typography>
                </nidoca-layout-spacer>

                <nidoca-tabs>
                  <nidoca-tab slot="tab">Javascript</nidoca-tab>
                  <nidoca-tab slot="tab">Typescript</nidoca-tab>
                  <nidoca-tab slot="tab">Lit</nidoca-tab>
                  <nidoca-tab slot="tab">Angular</nidoca-tab>

                  <nidoca-tab-content slot="tabContent">
                    <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.TOP]}">
                      <nidoca-code>${this.clazzGuiWrapper.getAsJavascript()}</nidoca-code>
                    </nidoca-layout-spacer>
                  </nidoca-tab-content>

                  <nidoca-tab-content slot="tabContent">
                    <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.TOP]}">
                      <nidoca-code>${this.clazzGuiWrapper.getTypescript()}</nidoca-code>
                    </nidoca-layout-spacer>
                  </nidoca-tab-content>

                  <nidoca-tab-content slot="tabContent">
                    <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.TOP]}">
                      <nidoca-code>${this.clazzGuiWrapper.getAsLit()}</nidoca-code>
                    </nidoca-layout-spacer>
                  </nidoca-tab-content>

                  <nidoca-tab-content slot="tabContent">
                    <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.TOP]}">
                      <nidoca-code>${this.clazzGuiWrapper.getAsHtml()}</nidoca-code>
                    </nidoca-layout-spacer>
                  </nidoca-tab-content>
                </nidoca-tabs>
              `
            : html``}
        </div>
      </div>
    `;
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

  toAttributeRows(arr: PropertyGuiWrapper[] | undefined) {
    const retval: string[][] = [[]];
    if (arr) {
      arr.map((prop) => {
        const arr: any[] = [];
        arr.push(prop.propertyWrapper.name);
        arr.push(prop.propertyWrapper.getTypeName());
        arr.push(prop.getInputElement(this.clazzGuiWrapper));
        retval.push(arr);
        return arr;
      });
    }
    return retval;
  }

  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    const elements: Element[] = slotElement.assignedElements();
    const firstSlotElement = elements[0];
    if (firstSlotElement instanceof LitElement) {
      this.clazzGuiWrapper = new ClassGuiWrapper(this, new ClassWrapper(<LitElement>firstSlotElement));
    }
    this.requestUpdate();
  }
}
