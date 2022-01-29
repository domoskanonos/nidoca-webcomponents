import {customElement, html, LitElement, PropertyValues, TemplateResult} from "lit-element";
import {WebcomponentWrapper as WebcomponentWrapper} from "./core/webcomponent-wrapper";
import {WebcomponentGuiWrapper as WebcomponentGuiWrapper} from "./core/webcomponent-gui-wrapper";
import {css} from "lit-element";
import {PropertyGuiWrapper} from "./core/property-gui-wrapper";
import {NidocaTypographyType} from "../nidoca-typography";
import {property} from "lit/decorators.js";
import {NidocaTheme} from "..";

@customElement("webcomponent-viewer")
export class LitViewer extends LitElement {
  static styles = css`
    .container {
      display: grid;
      grid-template-columns: 1fr;
    }
  `;

  private webcomponentGuiWrapper: WebcomponentGuiWrapper | null = null;

  @property({type: Array})
  customEventNames: string[] = [];

  @property({type: Object})
  element: HTMLElement | undefined;

  updated(_changedProperties: PropertyValues): void {
    if (_changedProperties.has("element") && this.element != undefined) {
      this.element.style.flexBasis = "auto";
      this.webcomponentGuiWrapper = new WebcomponentGuiWrapper(this, new WebcomponentWrapper(this.element));
      this.requestUpdate();
    }
  }

  public render(): TemplateResult {
    return html` <nidoca-section .theme="${NidocaTheme.PRIMARY}">
        <div>
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-typography .type="${NidocaTypographyType.H2}">Tag</nidoca-typography>
          </nidoca-layout-spacer>
          <nidoca-code
            >${this.webcomponentGuiWrapper ? this.webcomponentGuiWrapper.classWrapper.getHTMLTag() : ""}
          </nidoca-code>

          <div style="padding-top:var(--space-medium);">
            <nidoca-section> ${this.element} </nidoca-section>
          </div>
        </div>

        <div style="padding-left:var(--space-medium)">
          ${this.webcomponentGuiWrapper?.hasProperties()
            ? html`
                <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${NidocaTypographyType.H2}"> Attribute </nidoca-typography>
                </nidoca-layout-spacer>

                ${this.webcomponentGuiWrapper.getPropertyGuiWrappers().map((prop) => {
                  return html`${prop.getInputElement(this.webcomponentGuiWrapper)}
                    <div style="padding-bottom:var(--space-big);"></div>`;
                })}
              `
            : html``}
          ${this.webcomponentGuiWrapper?.classWrapper.hasSlots()
            ? html` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${NidocaTypographyType.H2}">Slots </nidoca-typography>
                </nidoca-layout-spacer>

                <nidoca-table
                  .headers="${["name"]}"
                  .rows="${this.toSlotRows(this.webcomponentGuiWrapper.classWrapper.getSlotNames())}"
                >
                </nidoca-table>`
            : html``}
          ${this.customEventNames.length > 0
            ? html` <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
                  <nidoca-typography .type="${NidocaTypographyType.H2}">Custom Events </nidoca-typography>
                </nidoca-layout-spacer>
                <nidoca-table .headers="${["name"]}" .rows="${this.toCustomEventRows(this.customEventNames)}">
                </nidoca-table>`
            : html``}
        </div>
      </nidoca-section>
      <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
        <nidoca-typography .type="${NidocaTypographyType.H2}"> Quelltext </nidoca-typography>
      </nidoca-layout-spacer>
      <nidoca-tabs tabIndex="0">
        <nidoca-tab slot="tab">Javascript</nidoca-tab>
        <nidoca-tab slot="tab">Typescript</nidoca-tab>
        <nidoca-tab slot="tab">Lit</nidoca-tab>
        <nidoca-tab slot="tab">Angular</nidoca-tab>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code style="width:100%;">${this.webcomponentGuiWrapper?.getAsJavascript()} </nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${this.webcomponentGuiWrapper?.getTypescript()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${this.webcomponentGuiWrapper?.getAsLit()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>

        <nidoca-tab-content slot="tabContent">
          <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
            <nidoca-code>${this.webcomponentGuiWrapper?.getAsHtml()}</nidoca-code>
          </nidoca-layout-spacer>
        </nidoca-tab-content>
      </nidoca-tabs>

      <nidoca-layout-spacer top="var(--space-little)" bottom="var(--space-little)">
        <nidoca-typography .type="${NidocaTypographyType.H2}"> Attribute </nidoca-typography>
      </nidoca-layout-spacer>

      <nidoca-table
        .headers="${["name", "type", "converter type", "render type"]}"
        .rows="${this.toAttributeRows(this.webcomponentGuiWrapper?.getPropertyGuiWrappers())}"
      >
      </nidoca-table>
      <slot @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>`;
  }
  slotChanged(event: Event): void {
    const slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    if (slotElement == undefined) {
      return;
    }
    const elements: Element[] = slotElement.assignedElements();
    const element: Element = elements[0];
    if (element instanceof HTMLElement) {
      this.element = element;
    }
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
