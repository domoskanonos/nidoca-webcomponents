import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-container')
export class ContainerComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   // static IDENTIFIER: string = 'ContainerComponent';

   @property()
   rendered: boolean = true;

   @property()
   cssStyle: string = '';

   render() {
      return this.rendered
         ? html`
              <span style="${this.cssStyle}"><slot></slot></span>
           `
         : html``;
   }

   getDefaultInputData(): any {
      //return <ContainerInputData>{};
   }
}
