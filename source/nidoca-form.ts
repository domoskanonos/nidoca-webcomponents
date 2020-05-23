import { css, customElement, html, LitElement, property, query, unsafeCSS } from 'lit-element';
import { NidocaInputfield, InputfieldType } from './nidoca-inputfield';
import { guard } from 'lit-html/directives/guard';
import { repeat } from 'lit-html/directives/repeat';
import { BasicService } from '@domoskanonos/frontend-basis';
import {NidocaButton} from "./nidoca-button";

export class NidocaFormOutputData {
   jsonObject: any;
   formData: FormData = FormData.prototype;
}

@customElement('nidoca-form')
export class NidocaForm extends LitElement {
   static styles = css`
      .formElement,
      ::slotted(.formElement) {
         padding-bottom: var(--space-medium);
         box-sizing: border-box;
         display: block;
      }

      form {
         width: 100%;
         box-sizing: border-box;
      }

      @media only screen and (orientation: portrait) {
         form {
         }
      }
   `;

   @property()
   buttons: NidocaButton[] = [];

   @query('#slotElement')
   slotElement: HTMLSlotElement | undefined;

   @query('#htmlForm')
   htmlForm: HTMLFormElement | undefined;

   protected render() {
      return html`
         <form id="htmlForm" @nidoca-event-button-clicked="${this.formButtonClicked}">
            <slot name="header"></slot>
            <slot style="color: var(--app-color-error);" name="errorMessages"></slot>
            <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
            ${guard(this.buttons, () => html` ${repeat(this.buttons, (buttons) => html` ${buttons} `)} `)}
         </form>
      `;
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
