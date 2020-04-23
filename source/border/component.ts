import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';

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

export class BorderSize {
   static THIN: string = 'THIN';
   static MEDIUM: string = 'MEDIUM';
   static THICK: string = 'THICK';
}

const componentCSS = require('./component.css');

@customElement('component-border')
export class BorderComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   borderType: string = BorderType.ALL;

   @property()
   borderSize: string = BorderSize.THIN;

   render() {
      return html`
         <slot class="BORDER ${this.borderType}  ${this.borderSize}"></slot>
      `;
   }
}
