import { css, html, TemplateResult } from 'lit';
import { NidocaHtml } from './abstract/nidoca-html';

import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators.js';
import { query } from 'lit/decorators.js';
import { NidocaFormAbstractInputElement } from './nidoca-form-abstract-input-element';

export class NidocaFormOutputData {
  jsonObject: any;
  formData: FormData = FormData.prototype;
}

@customElement('nidoca-form')
export class NidocaForm extends NidocaHtml {
  static styles = css`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    form {
      box-sizing: border-box;
    }
  `;

  @property({ type: Boolean })
  autocomplete: boolean = true;

  @query('#slotElement')
  private slotElement: HTMLSlotElement | undefined;

  render(): TemplateResult {
    return html`
      <form autocomplete="${this.autocomplete ? 'on' : 'off'}">
        <slot id="slotElement"></slot>
      </form>
    `;
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

  public validate(): boolean {
    let valid: boolean = true;
    for (const element of this.getInputElements(this.slotElement)) {
      if (!element.validate()) {
        if (valid) {
          //element.select();
          //element.parentElement?.scrollIntoView(true);
        }
        valid = false;
      }
    }
    if (!valid) {
      this.dispatchEvent(
        new CustomEvent('nidoca-form-validation-failed', {
          detail: this.getOutputData(),
          bubbles: true,
          composed: true,
        })
      );
    }
    return valid;
  }

  getInputElements(slotElement: HTMLSlotElement | undefined): NidocaFormAbstractInputElement[] {
    if (slotElement == null) {
      return [];
    }
    const inputElements: NidocaFormAbstractInputElement[] = [];
    const elements: Element[] = slotElement.assignedElements({ flatten: true });
    for (let index = 0; index < elements.length; index++) {
      const element: Element = elements[index];
      this.recursiveInputElementSearch(element, inputElements);
    }
    return inputElements;
  }

  private recursiveInputElementSearch(element: Element, inputElements: NidocaFormAbstractInputElement[]) {
    if (element instanceof NidocaFormAbstractInputElement) {
      inputElements.push(element);
    } else if (element.hasChildNodes()) {
      const childrens: HTMLCollection = element.children;
      for (const childElement of [].slice.call(childrens)) {
        this.recursiveInputElementSearch(childElement, inputElements);
      }
    }
  }
}
