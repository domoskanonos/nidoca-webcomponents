import {css, customElement, html, property, unsafeCSS, LitElement} from 'lit-element';
import {AbstractInputData} from "../..";

const componentCSS = require('./component.css');

export class CardSupportingTextInputData extends AbstractInputData {
}

@customElement('component-card-supporting-text')
export class CardSupportingTextComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'CardSupportingTextComponent';

   render() {
      return html`<div><slot></slot></div>`;
   }

   getDefaultInputData(): CardSupportingTextInputData {
      return <CardSupportingTextInputData>{};
   }
}
