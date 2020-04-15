import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';
import { BasicService } from '@domoskanonos/frontend-basis';

export class BorderType {
   static NONE: string = 'NONE';
   static ALL: string = 'ALL';
   static HORIZONTAL: string = 'HORIZONTAL';
   static VERTICAL: string = 'VERTICAL';
   static LEFT: string = 'LEFT';
   static RIGHT: string = 'RIGHT';
   static TOP: string = 'TOP';
   static BOTTOM: string = 'BOTTOM';
   static BOTTOM_SELECTED: string = 'BOTTOM_SELECTED';
}

export class BorderInputData extends AbstractInputData {
   componentIdentifier = BorderComponent.IDENTIFIER;
   borderType: string = BorderType.ALL;
}

const componentCSS = require('./component.css');

@customElement('component-border')
export class BorderComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'BorderComponent';

   @property()
   borderType: string = BorderType.ALL;

   render() {
      return html`
         <slot class="BORDER ${this.borderType}"></slot>
      `;
   }
}
