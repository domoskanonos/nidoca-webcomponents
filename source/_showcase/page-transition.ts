import { customElement, html, property, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TransitionType } from '../effect-transition/component';
import { ButtonType, InputfieldComponent, InputfieldType } from '..';
import {I18nService} from "@domoskanonos/frontend-basis";

@customElement('page-transition')
export class TransitionPage extends PageAbstract {

   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pagetransition');
   }

   @property()
   transitionType: string = TransitionType.LEFT;

   getMainComponent(): TemplateResult {
      return html`
         <component-inputfield
            .inputfieldType="${InputfieldType.COMBOBOX}"
            .options="${InputfieldComponent.enumToComboboxItems(TransitionType)}"
            label="buttonType"
            value="${this.transitionType}"
            @component-inputfield-change="${(event: CustomEvent) => this.changeTransitionType(event)}"
         ></component-inputfield>

         <component-transition transitionType="${this.transitionType}">
            <div style="width:500px; height:500px;background-color: green">Some Content to fade in....</div>
         </component-transition>
      `;
   }
   private changeTransitionType(event: CustomEvent) {
      let transitionType: string = (<any>TransitionType)[event.detail.outputData.value];
      console.log('change transitionType: {}', transitionType);
      this.transitionType = transitionType;
   }
}
