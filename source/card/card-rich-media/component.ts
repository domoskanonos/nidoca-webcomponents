import {css, customElement, html, property, unsafeCSS, LitElement} from 'lit-element';
import {AbstractInputData} from "../..";

const componentCSS = require('./component.css');

export class CardRichMediaInputData extends AbstractInputData {
}

@customElement('component-card-rich-media')
export class CardRichMediaComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'CardRichMediaComponent';

   render() {
      return html`<div><slot></slot></div>`;
   }

   getDefaultInputData(): CardRichMediaInputData {
      return <CardRichMediaInputData>{};
   }
}
