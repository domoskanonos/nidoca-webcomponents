import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {query} from "lit/decorators/query";
import {NidocaFormAbstractInputElement} from "./nidoca-form-abstract-input-element";

export class NidocaFormOutputData {
  jsonObject: any;
  formData: FormData = FormData.prototype;
}

@customElement("nidoca-form")
export class NidocaForm extends LitElement {
  static styles = css`
    .container {
      box-sizing: border-box;
    }
  `;

  @property({type : Boolean})
  autocomplete: boolean = true;

  @query("#slotElement")
  private slotElement: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return html`
      <form
        class="container"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        .?autocomplete="${this.autocomplete}"
      >
        <slot id="slotElement"></slot>
      </form>
    `;
  }

  getInputElements(slotElement: HTMLSlotElement | undefined): NidocaFormAbstractInputElement[] {
    if (slotElement == null) {
      return [];
    }
    const inputElements: NidocaFormAbstractInputElement[] = [];
    const elements: Element[] = slotElement.assignedElements({flatten: true});
    for (let index = 0; index < elements.length; index++) {
      const element: Element = elements[index];
      this.recursiveInputElementSearch(element, inputElements);
    }
    return inputElements;
  }

  public validate(): boolean {
    let valid: boolean = true;
    for (const element of this.getInputElements(this.slotElement)) {
      if (!element.validate()) {
        valid = false;
        break;
      }
    }
    return valid;
  }

  public getOutputData(): NidocaFormOutputData {
    const formData = new FormData();
    const json: any = {};

    for (const element of this.getInputElements(this.slotElement)) {
      const elementOutputData = element.getOutputData();
      json[elementOutputData.key] = elementOutputData.value;
      formData.append(elementOutputData.key, elementOutputData.value);
    }

    const outputData = <NidocaFormOutputData>{};
    outputData.jsonObject = json;

    outputData.formData = formData;

    return outputData;
  }

  private formButtonClicked(event: CustomEvent) {
    console.log("formButton clicked: " + event.detail);
    const buttonIdentifier = event.detail;
    switch (buttonIdentifier) {
      case "submitButton":
        this.dispatchEvent(
          new CustomEvent("nidoca-event-form-submit-button-clicked", {
            detail: this.getOutputData(),
            bubbles: true,
            composed: true,
          })
        );
        break;
    }
  }

  private recursiveInputElementSearch(element: Element, inputElements: NidocaFormAbstractInputElement[]) {
    if (element instanceof NidocaFormAbstractInputElement) {
      inputElements.push(element);
    } else if (element.hasChildNodes()) {
      const childrens:HTMLCollection = element.children;
      for (const childElement of  [].slice.call(childrens)) {
        this.recursiveInputElementSearch(childElement, inputElements);
      }
    }
  }
}
