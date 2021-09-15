import { customElement, html, LitElement, TemplateResult } from "lit-element";

import { ClassWrapper } from "./core/classWrapper";
import { ClassGuiWrapper } from "./core/classGuiWrapper";
import { css } from "lit-element";
import { NidocaFormCombobox, NidocaShadowType } from "..";

@customElement("lit-viewer")
export class LitViewer extends LitElement {
  static styles = css`
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
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



        <nidoca-table
        .headers="${["slotName"]}"
        .rows="${this.toSlotHeaderRows(this.clazzGuiWrapper?.classWrapper.getSlotNames())}"
      >
      </nidoca-table>


        <div>
          ${this.clazzGuiWrapper
        ? html`
                <div>
                  <h1>Attribute:</h1>

                  <nidoca-form-combobox
                    .options="${NidocaFormCombobox.stringArrayToOptions(this.clazzGuiWrapper.getPropertieNames())}"
                    @input="${() => alert("siodjhdofih")}"
                  ></nidoca-form-combobox>

                  <div class="flexContainer">
                    ${this.clazzGuiWrapper.getPropertyGuiWrappers().map(
          (prop) => html`
                        <nidoca-card>
                          <nidoca-typography slot="supportingText">${prop.propertyWrapper.name}</nidoca-typography>
                          <nidoca-typography slot="supportingText"
                            >${prop.propertyWrapper.getTypeName()}</nidoca-typography
                          >
                          <nidoca-typography slot="actions"
                            >${prop.getInputElement(this.clazzGuiWrapper)}</nidoca-typography
                          >
                        </nidoca-card>
                      `
        )}
                  </div>
                </div>

                <div class="flexContainer">
                  <div class="flexItem">
                    <h2>Html Quellcode:</h2>
                    <pre>${this.clazzGuiWrapper.getAsHtml()}</pre>
                  </div>
                  <div class="flexItem">
                    <h2>Lit Quellcode:</h2>
                    <pre>${this.clazzGuiWrapper.getAsLit()}</pre>
                  </div>

                  <div class="flexItem">
                    <h2>Angular Quellcode:</h2>
                    <pre>${this.clazzGuiWrapper.getAsHtml()}</pre>
                  </div>
                  <div class="flexItem">
                    <h2>Typescript:</h2>
                    <pre>${this.clazzGuiWrapper.getTypescript()}</pre>
                  </div>
                  <div class="flexItem">
                    <h2>Vanilla JS:</h2>
                    <pre>${this.clazzGuiWrapper.getVanillaJS()}</pre>
                  </div>
                </div>
              `
        : html``}
        </div>
      </div>
    `;
  }

  toSlotHeaderRows(arr: string[] | undefined) {
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
