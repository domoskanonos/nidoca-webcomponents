import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

import { AbstractInputData } from '../../abstract-component/component';

const componentCSS = require('./component.css');

export class TeaserMenuElementInputData extends AbstractInputData {
   selected: boolean = false;
}

@customElement('component-teaser-menu-element')
export class TeaserElementMenuComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'TeaserElementMenuComponent';

   static EVENT_TEASER_MENU_ELEMENT_CLICK: string = 'component-teaser-menu-element-click';

   @property()
   selected: boolean = false;

   render() {
      return html`
         <div class="menuItem ${this.selected ? 'selected' : ''}" @click="${this.menuElementClicked}"></div>
      `;
   }

   menuElementClicked() {
      console.log('teaser menu element clicked');
      this.selected = true;
      //this.dispatchSimpleCustomEvent(TeaserElementMenuComponent.EVENT_TEASER_MENU_ELEMENT_CLICK, this.getOutputData());
   }

   getDefaultInputData(): TeaserMenuElementInputData {
      return <TeaserMenuElementInputData>{
         componentIdentifier: TeaserElementMenuComponent.IDENTIFIER,
         selected: false
      };
   }
}
