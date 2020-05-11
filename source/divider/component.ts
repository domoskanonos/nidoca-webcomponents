import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';

const componentCSS = require('./component.css');

export enum DividerType {
   THIN = 'THIN',
   MEDIUM = 'MEDIUM',
   THICK = 'THICK'
}

@customElement('nidoca-divider')
export class NidocaDivider extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   dividerType: string = DividerType.THIN;

   @property()
   opacity: number = 1.0;

   render() {
      return html`
         <div class="DIVIDER ${this.dividerType}" style="opacity: ${this.opacity};"></div>
      `;
   }
}
