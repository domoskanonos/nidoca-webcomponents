import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { BorderType, SpacerAlignment, SpacerSize } from '..';

const componentCSS = require('./component.css');

export class DividerType {
   static THIN: string = 'THIN';
   static MEDIUM: string = 'MEDIUM';
   static THICK: string = 'THICK';
}

@customElement('component-divider')
export class DividerComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   dividerType: string = DividerType.THIN;

   render() {
      return html`
         <div class="DIVIDER ${this.dividerType}"></div>
      `;
   }
}
