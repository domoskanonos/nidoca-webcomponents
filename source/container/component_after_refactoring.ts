import {css, customElement, html, LitElement, property, unsafeCSS} from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-container')
export class ContainerComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

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
}
