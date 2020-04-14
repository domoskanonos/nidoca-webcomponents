import {css, customElement, html, property, unsafeCSS, LitElement} from 'lit-element';
import {AbstractInputData} from "../..";

const componentCSS = require('./component.css');

export class CardActionInputData extends AbstractInputData {
}

@customElement('component-card-actions')
export class CardActionComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'CardActionComponent';

   render() {
      return html`<div><slot></slot></div>`;
   }

   getDefaultInputData(): CardActionInputData {
      return <CardActionInputData>{};
   }

}
