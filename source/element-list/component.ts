import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';

const componentCSS = require('./component.css');

export class ElementListInputData extends AbstractInputData {
   componentIdentifier = ElementListComponent.IDENTIFIER;
}

@customElement('component-element-list')
export class ElementListComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'ElementListComponent';

   render() {
      return html`
         <header>
            <slot></slot>
         </header>
      `;
   }
}
