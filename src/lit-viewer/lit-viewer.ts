import {customElement, html, LitElement, TemplateResult} from "lit-element";
import {ClassWrapper} from "./core/classWrapper";
import {ClassGuiWrapper} from "./core/classGuiWrapper";
import {css} from "lit-element";
import {PropertyGuiWrapper} from "./core/propertyGuiWrapper";
import {NidocaLayoutSpacerType} from "../nidoca-layout-spacer";
import {NidocaTypographyType} from "../nidoca-typography";
import {property} from "lit/decorators.js";
import {NidocaContainerSize} from "../nidoca-layout-container";

@customElement("lit-viewer")
export class LitViewer extends LitElement {
  static styles = css`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `;

  private clazzGuiWrapper: ClassGuiWrapper<any> | null = null;

  @property({type: Array})
  customEventNames: string[] = [];

  public render(): TemplateResult {
    return html`
      <div class="container">

      <nidoca-layout-spacer .spacerTypes="${[NidocaLayoutSpacerType.LEFT, NidocaLayoutSpacerType.RIGHT]}">


      <nidoca-layout-spacer
      .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
    > <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Tag</nidoca-typography>
    </nidoca-layout-spacer>
        <nidoca-code
          >${"<"
            .concat(this.clazzGuiWrapper ? this.clazzGuiWrapper.classWrapper.getTagName() : "")
            .concat("/>")}</nidoca-code
        >

        <nidoca-layout-container .containerSize="${NidocaContainerSize._75}">
          <nidoca-layout-spacer>
            <slot @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
          </nidoca-layout-spacer>
        </nidoca-layout-container>

          ${this.clazzGuiWrapper
            ? html`
                ${this.clazzGuiWrapper?.hasProperties()
                  ? html`<nidoca-layout-spacer
                        .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
                      >
                        <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Attribute</nidoca-typography>
                      </nidoca-layout-spacer>

                      <nidoca-table
                        .headers="${["name", "type", "converter type", "render type", "values"]}"
                        .rows="${this.toAttributeRows(this.clazzGuiWrapper.getPropertyGuiWrappers())}"
                      >
                      </nidoca-table>`
                  : html``}
                ${this.clazzGuiWrapper?.classWrapper.hasSlots()
                  ? html` <nidoca-layout-spacer
                        .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
                      >
                        <nidoca-typography .typographyType="${NidocaTypographyType.H2}">Slots</nidoca-typography>
                      </nidoca-layout-spacer>

                      <nidoca-table
                        .headers="${["name"]}"
                        .rows="${this.toSlotRows(this.clazzGuiWrapper?.classWrapper.getSlotNames())}"
                      >
                      </nidoca-table>`
                  : html``}
                ${this.customEventNames.length > 0
                  ? html`<nidoca-layout-spacer
                        .spacerTypes="${[NidocaLayoutSpacerType.TOP, NidocaLayoutSpacerType.BOTTOM]}"
                      >
                        <nidoca-typography .typographyType="${NidocaTypographyType.H2}"
                          >Custom Events</nidoca-typography
                        > </nidoca-layout-spacer
                      ><nidoca-table .headers="${["name"]}" .rows="${this.toCustomEventRows(this.customEventNames)}">
                      </nidoca-table>`
                  : html``}

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
                      <nidoca-code style="width:100%;">${this.clazzGuiWrapper.getAsJavascript()}</nidoca-code>
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
        </nidoca-layout-spacer>
      </div>
    `;
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
