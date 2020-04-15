import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-code')
export class CodeComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   code: string = '';

   render() {
      return html`
         <pre>
                <code>${this.code}<slot></slot></code>
            </pre>
      `;
   }
}
