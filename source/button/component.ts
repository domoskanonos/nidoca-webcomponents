import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { AbstractComponent, AbstractInputData } from '../abstract-component/component';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class ButtonType {
   static CONTAINED = 'CONTAINED';
   static OUTLINED = 'OUTLINED';
   static TEXT = 'TEXT';
}

export class ButtonInputData extends AbstractInputData {
   text?: string;
   leadingIcon: string = '';
}

@customElement('component-button')
export class ButtonComponent extends AbstractComponent<ButtonInputData, undefined> {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'ButtonComponent';

   static EVENT_CLICK: string = 'component-button-clicked';

   @property()
   buttonType: ButtonType = ButtonType.CONTAINED;

   @property()
   leadingIcon: string = new ButtonInputData().leadingIcon;

   @property()
   text: string = '';

   protected inputDataChanged() {
      this.text = BasicService.getUniqueInstance().getValue(this.inputData.text, '');
   }

   render() {
      return html`
         <div class="BUTTON ${this.buttonType}">
            <effect-ripple @click="${this.clicked}">
               <component-grid-container .gridTemplateRows="${['auto']}" .gridTemplateColumns="${['auto', '1fr']}"
                  ><component-icon
                     .rendered="${BasicService.getUniqueInstance().isNotBlank(this.leadingIcon)}"
                     icon="${this.leadingIcon}"
                  >
                  </component-icon>
                  <component-container>
                     <component-typography text="${this.text}"></component-typography>
                     <slot></slot>
                  </component-container> </component-grid-container
            ></effect-ripple>
         </div>
      `;
   }

   async clicked() {
      this.dispatchSimpleCustomEvent(ButtonComponent.EVENT_CLICK, this);
   }

   getOutputData(): any {
      return undefined;
   }
}
