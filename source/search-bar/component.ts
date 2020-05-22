import { css, customElement, html, LitElement, property, query } from 'lit-element';
import {InputfieldType, NidocaInputfield, NidocaIcon, GridJustifyItems, GridAlignItems, InputfieldMode} from '..';
import { BasicService } from '@domoskanonos/frontend-basis';

@customElement('nidoca-search-bar')
export class NidocaSearchBar extends LitElement {
   static styles = css``;

   @property()
   placeholder: string = '';

   @property()
   trailingIcon: string = '';

   @property()
   value: string = '';

   @query('#inputfieldComponent')
   private inputfieldComponent: NidocaInputfield | undefined;

   render() {
      return html`
         <nidoca-grid-container
            .gridJustifyItems="${GridJustifyItems.STRETCH}"
            .gridAlignItems="${GridAlignItems.STRETCH}"
            .gridTemplateRows="${['1fr']}"
            .gridTemplateColumns="${['auto', '1fr']}"
         >
            <nidoca-icon icon="search"></nidoca-icon>
            <nidoca-inputfield
               id="inputfieldComponent"
               @nidoca-event-inputfield-keyup="${() => this.textfieldKeyUp()}"
               @nidoca-event-icon-clicked="${(event: CustomEvent) => {
                  this.textfieldIconClicked(event);
               }}"
               placeholder="${this.placeholder}"
               value="${this.value}"
               .automaticInfoText="${false}"
               .inputfieldType="${InputfieldType.TEXT}"
               .inputfieldMode="${InputfieldMode.CLEAN}"
               trailingIcon="${this.trailingIcon}"
               .trailingIconClickable="${true}"
            ></nidoca-inputfield>
         </nidoca-grid-container>
      `;
   }

   getOutputData(): string {
      let searchBarOutputData: string = '';
      if (this.inputfieldComponent != null && this.inputfieldComponent.inputElemet != null) {
         searchBarOutputData = this.inputfieldComponent.inputElemet.value;
      }
      return searchBarOutputData;
   }

   private textfieldIconClicked(event: CustomEvent) {
      let nidocaIcon: NidocaIcon = event.detail;
      switch (nidocaIcon.icon) {
         case 'close':
            if (this.inputfieldComponent != null && this.inputfieldComponent.inputElemet != null) {
               this.inputfieldComponent.inputElemet.value = '';
               this.inputfieldComponent.inputElemet.focus();
            }
            this.setTrailingIcon();
            break;
      }
   }

   private textfieldKeyUp() {
      this.setTrailingIcon();
   }

   private setTrailingIcon() {
      if (BasicService.getUniqueInstance().isNotBlank(this.getOutputData())) {
         this.trailingIcon = 'close';
      } else {
         this.trailingIcon = '';
      }
   }
}
