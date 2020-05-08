import { css, customElement, html, property, query, unsafeCSS, LitElement } from 'lit-element';
import { InputfieldComponent, InputfieldType } from '../inputfield/component';
import { guard } from 'lit-html/directives/guard';
import { repeat } from 'lit-html/directives/repeat';
import { ButtonComponent } from '..';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class KeyValueData {
   key: string = '';
   value: any;
}

export class FormComponentOutputData {
   jsonObject: any;
   formData: FormData = FormData.prototype;
}

@customElement('nidoca-form')
export class FormComponent extends LitElement {
   static IDENTIFIER: string = 'FormComponent';

   static EVENT_SUBMIT_BUTTON: string = 'component-form-submit-button-click';

   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   buttons: ButtonComponent[] = [];

   @query('#slotElement')
   slotElement: HTMLSlotElement | undefined;

   @query('#htmlForm')
   htmlForm: HTMLFormElement | undefined;

   protected render() {
      return html`
         <form id="htmlForm" @component-button-click="${this.formButtonClicked}">
            <slot name="header"></slot>

            <effect-color color="var(--app-color-error)">
               <slot name="errorMessages"></slot>
            </effect-color>
            <slot id="slotElement" @slotchange="${(event: Event) => this.slotChanged(event)}"></slot>
            ${guard(
               this.buttons,
               () =>
                  html`
                     ${repeat(
                        this.buttons,
                        (buttons) => html`
                           ${buttons}
                        `
                     )}
                  `
            )}
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
         if (element instanceof InputfieldComponent && element.inputfieldType != InputfieldType.HIDDEN) {
            element.classList.add('formElement');
         }
      }
   }

   public isValid(): boolean {
      if (this.slotElement != null) {
         let elements: Element[] = this.slotElement.assignedElements();
         for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
            let element: Element = elements[elementIndex];
            if (element instanceof InputfieldComponent) {
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
            if (element instanceof InputfieldComponent) {
               element.validate();
            }
         }
      }
      return this.isValid();
   }

   public getOutputData(): FormComponentOutputData {
      let formData = new FormData();
      let json: any = {};

      if (this.slotElement != null) {
         let elements: Element[] = this.slotElement.assignedElements();
         for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
            let element: Element = elements[elementIndex];
            if (element instanceof InputfieldComponent) {
               let elementOutputData = element.getOutputData();
               json[elementOutputData.key] = elementOutputData.value;
               formData.append(elementOutputData.key, elementOutputData.value);
            }
         }
      }

      let outputData = <FormComponentOutputData>{};
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
               FormComponent.EVENT_SUBMIT_BUTTON,
               this.getOutputData()
            );
            break;
      }
   }
}
