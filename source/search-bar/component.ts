import { css, customElement, html, LitElement, property, query, unsafeCSS } from 'lit-element';
import {InputfieldType, InputfieldComponent, IconComponent} from '..';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export enum SearchBarState {
   NORMAL = 'NORMAL',
   SEARCH = 'SEARCH',
   MOUSE_OUT = 'MOUSE_OUT'
}

export class SearchBarOutputData {
   value: string = '';
}

@customElement('nidoca-search-bar')
export class SearchBarComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'SearchBarComponent';

   constructor() {
      super();
   }

   @property()
   placeholder: string = '';

   @property()
   trailingIcon: string = '';

   @property()
   value: string = '';

   @query('#inputfieldComponent')
   private inputfieldComponent: InputfieldComponent | undefined;

   render() {
      return html`
         <div class="search-bar">
            <slot></slot>
            <nidoca-icon icon="search"></nidoca-icon>
            <nidoca-inputfield
               id="inputfieldComponent"
               @component-inputfield-keyup="${() => this.textfieldKeyUp()}"
               @component-icon-click="${(event: CustomEvent) => {
                  this.textfieldIconClicked(event);
               }}"
               placeholder="${this.placeholder}"
               value="${this.value}"
               .automaticInfoText="${false}"
               .inputfieldType="${InputfieldType.TEXT}"
               trailingIcon="${this.trailingIcon}"
               .leadingIconClickable="${true}"
               .trailingIconClickable="${true}"
            ></nidoca-inputfield>
         </div>
      `;
   }

   getOutputData(): SearchBarOutputData {
      let searchBarOutputData = new SearchBarOutputData();
      if (this.inputfieldComponent != null && this.inputfieldComponent.inputElemet != null) {
         searchBarOutputData.value = this.inputfieldComponent.inputElemet.value;
      }
      return searchBarOutputData;
   }

   private textfieldIconClicked(event: CustomEvent) {
      let nidocaIcon: IconComponent = event.detail;
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
      if (BasicService.getUniqueInstance().isNotBlank(this.getOutputData().value)) {
         this.trailingIcon = 'close';
      } else {
         this.trailingIcon = '';
      }
   }
}
