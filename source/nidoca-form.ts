import {css, customElement, html, LitElement, property, query, TemplateResult} from 'lit-element';
import {NidocaFormAbstractInputElement} from './nidoca-form-abstract-input-element';

export class NidocaFormOutputData {
  jsonObject: any;
  formData: FormData = FormData.prototype;
}

@customElement('nidoca-form')
export class NidocaForm extends LitElement {
  static styles = css`
    .FORM {
      box-sizing: border-box;
    }
  `;

  @property({type : Boolean})
  autocomplete: boolean = true;

  @query('#slotElement')
  private slotElement: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return html`
      <form
        class="FORM"
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
    let inputElements: NidocaFormAbstractInputElement[] = [];
    let elements: Element[] = slotElement.assignedElements({flatten: true});
    for (let index = 0; index < elements.length; index++) {
      let element: Element = elements[index];
      this.recursiveInputElementSearch(element, inputElements);
    }
    return inputElements;
  }

  public validate(): boolean {
    let valid: boolean = true;
    for (let element of this.getInputElements(this.slotElement)) {
      if (!element.validate()) {
        valid = false;
        break;
      }
    }
    return valid;
  }

  public getOutputData(): NidocaFormOutputData {
    let formData = new FormData();
    let json: any = {};

    for (let element of this.getInputElements(this.slotElement)) {
      let elementOutputData = element.getOutputData();
      json[elementOutputData.key] = elementOutputData.value;
      formData.append(elementOutputData.key, elementOutputData.value);
    }

    let outputData = <NidocaFormOutputData>{};
    outputData.jsonObject = json;

    outputData.formData = formData;

    return outputData;
  }

  private formButtonClicked(event: CustomEvent) {
    console.log('formButton clicked: ' + event.detail);
    let buttonIdentifier = event.detail;
    switch (buttonIdentifier) {
      case 'submitButton':
        this.dispatchEvent(
          new CustomEvent('nidoca-event-form-submit-button-clicked', {
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
      let childrens:HTMLCollection = element.children;
      for (let childElement of  [].slice.call(childrens)) {
        this.recursiveInputElementSearch(childElement, inputElements);
      }
    }
  }
}
