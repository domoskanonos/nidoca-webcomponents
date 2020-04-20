import { css, customElement, html, unsafeCSS, LitElement, property } from 'lit-element';

const componentCSS = require('./component.css');

@customElement('component-box')
export class BoxComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   height: string = '100vh';

   @property()
   width: string = '100vw';

   render() {
      return html`
         <div style="height:${this.height}; width:${this.width};">
            <slot></slot>
         </div>
      `;
   }
}
