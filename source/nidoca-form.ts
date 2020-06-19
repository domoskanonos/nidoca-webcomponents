import {css, customElement, html, LitElement, property, query, unsafeCSS} from 'lit-element';
import {NidocaInputfield, InputfieldType} from './nidoca-inputfield';
import {guard} from 'lit-html/directives/guard';
import {repeat} from 'lit-html/directives/repeat';
import {BasicService} from '@domoskanonos/frontend-basis';
import {NidocaButton} from './nidoca-button';

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
      justify-content: space-evenly;
      align-items: start;
      align-content: space-evenly;
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
        <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
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

  slotChanged(event: Event) {
    let slotElement: HTMLSlotElement = <HTMLSlotElement>event.target;
    if (slotElement == null) {
      return;
    }
    let elements: Element[] = slotElement.assignedElements();
    for (let index = 0; index < elements.length; index++) {
      let element: Element = elements[index];
      if (element instanceof NidocaInputfield && element.inputfieldType != InputfieldType.HIDDEN) {
        element.classList.add('formElement');
      }
    }
  }

  public isValid(): boolean {
    if (this.slotElement != null) {
      let elements: Element[] = this.slotElement.assignedElements();
      for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
        let element: Element = elements[elementIndex];
        if (element instanceof NidocaInputfield) {
          if (!element.isValid()) {
            return false;
          }
        }
      }
    }
    return true;
  }

  public validate(): boolean {
    if (this.slotElement != null) {
      let elements: Element[] = this.slotElement.assignedElements();
      for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
        let element: Element = elements[elementIndex];
        if (element instanceof NidocaInputfield) {
          element.validate();
        }
      }
    }
    return this.isValid();
  }

  public getOutputData(): NidocaFormOutputData {
    let formData = new FormData();
    let json: any = {};

    if (this.slotElement != null) {
      let elements: Element[] = this.slotElement.assignedElements();
      for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
        let element: Element = elements[elementIndex];
        if (element instanceof NidocaInputfield) {
          let elementOutputData = element.getOutputData();
          json[elementOutputData.key] = elementOutputData.value;
          formData.append(elementOutputData.key, elementOutputData.value);
        }
      }
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
}
