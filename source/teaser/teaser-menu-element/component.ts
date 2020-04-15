import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';
const componentCSS = require('./component.css');

@customElement('component-teaser-menu-element')
export class TeaserElementMenuComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

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
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, TeaserElementMenuComponent.EVENT_TEASER_MENU_ELEMENT_CLICK);
   }

}
