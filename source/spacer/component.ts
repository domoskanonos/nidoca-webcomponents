import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class SpacerAlignment {
   static BOTH: string = '';
   static HORIZONTAL: string = 'horizontalAlignment';
   static VERTICAL: string = 'verticalAlignment';
}

export class SpacerSize {
   static ZERO: string = '';
   static LITTLE: string = 'spaceLittle';
   static SMALL: string = 'spaceSmall';
   static MEDIUM: string = 'spaceMedium';
   static BIG: string = 'spaceBig';
   static MAX: string = 'spaceMax';
}

@customElement('component-spacer')
export class SpacerComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'SpacerComponent';

   @property()
   cssStyle: string = '';

   @property()
   spacerSize: string = SpacerSize.ZERO;

   @property()
   spacerAlignment: string = SpacerAlignment.BOTH;

   render() {
      return html`
         <span class="spacer ${this.spacerSize} ${this.spacerAlignment}" style="${this.cssStyle}"><slot></slot></span>
      `;
   }
}
