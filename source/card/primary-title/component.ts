import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../..';

const componentCSS = require('./component.css');

export class CardPrimaryTitleInputData extends AbstractInputData {}

@customElement('component-card-primary-title')
export class CardPrimaryTitleComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'CardActionComponent';

   render() {
      return html`
               <div><slot></slot></div>
      `;
   }

   getDefaultInputData(): CardPrimaryTitleInputData {
      return <CardPrimaryTitleInputData>{};
   }
}
