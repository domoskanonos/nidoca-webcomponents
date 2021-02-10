import {css, customElement, html, LitElement, property, query} from 'lit-element';
import {NidocaInputElement} from './nidoca-input-element';
import {BasicService} from '@domoskanonos/frontend-basis';

export class NidocaFormOutputData {
  jsonObject: any;
  formData: FormData = FormData.prototype;
}

export enum FormProperties {
  ROW_LAYOUT = 'ROW_LAYOUT',
  COLUMN_LAYOUT = 'COLUMN_LAYOUT',
  FULL_WIDTH = 'FULL_WIDTH',
}

@customElement('nidoca-form')
export class NidocaForm extends LitElement {
  static styles = css`
    .FORM {
      box-sizing: border-box;
    }
    .COLUMN_LAYOUT {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: stretch;
      align-content: space-around;
    }
    .ROW_LAYOUT {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
    }
    .FULL_WIDTH {
      width: 100%;
    }

    @media only screen and (orientation: portrait) {
      .FORM {
        width: 100%;
      }
    }
  `;

  @property()
  formProperties: FormProperties[] = [];

  @property()
  autocomplete: boolean = true;

  @query('#slotElement')
  slotElement: HTMLSlotElement | undefined;

  @query('#htmlForm')
  htmlForm: HTMLFormElement | undefined;

  protected render() {
    return html`
      <form
        class="${this.toFormPropertiesString(this.formProperties)}"
        id="htmlForm"
        @nidoca-event-button-clicked="${this.formButtonClicked}"
        autocomplete="${this.autocomplete}"
      >
        <slot name="header"></slot>
        <slot name="errorMessages" style="color: var(--app-color-error);"></slot>
        <slot id="slotElement"></slot>
        <slot name="footer"></slot>
      </form>
    `;
  }

  toFormPropertiesString(formProperties: FormProperties[]) {
    let formPropertiesClazzString: string = 'FORM';
    formProperties.forEach((clazz) => {
      formPropertiesClazzString = formPropertiesClazzString.concat(' ').concat(clazz);
    });
    return formPropertiesClazzString;
  }

  getInputElements(slotElement: HTMLSlotElement | undefined): NidocaInputElement[] {
    if (slotElement == null) {
      return [];
    }
    let inputElements: NidocaInputElement[] = [];
    let elements: Element[] = slotElement.assignedElements({flatten: true});
    for (let index = 0; index < elements.length; index++) {
      let element: Element = elements[index];
      this.recursiveInputElementSearch(element, inputElements);
    }
    return inputElements;
  }

  public isValid(): boolean {
    for (let element of this.getInputElements(this.slotElement)) {
      if (!element.isValid()) {
        return false;
      }
    }
    return true;
  }

  public validate(): boolean {
    for (let element of this.getInputElements(this.slotElement)) {
      element.validate();
    }
    return this.isValid();
  }

  public getOutputData(): NidocaFormOutputData {
    let formData = new FormData();
    let json: any = {};

    for (let element of this.getInputElements(this.slotElement)) {
      let elementOutputData = element.getOutputData();
      // @ts-ignore
      json[elementOutputData.key] = elementOutputData.value;
      // @ts-ignore
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
        BasicService.getUniqueInstance().dispatchSimpleCustomEvent(
          this,
          'nidoca-event-form-submit-button-clicked',
          this.getOutputData()
        );
        break;
    }
  }

  private recursiveInputElementSearch(element: Element, inputElements: NidocaInputElement[]) {
    if (element instanceof NidocaInputElement) {
      inputElements.push(element);
    } else if (element.hasChildNodes()) {
      for (let childElement of element.children) {
        this.recursiveInputElementSearch(childElement, inputElements);
      }
    }
  }
}
