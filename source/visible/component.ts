import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./component.css');

export enum VisibleType {
   HIDE = 'HIDE',
   INVISIBLE = 'INVISIBLE',
   NORMAL = 'NORMAL'
}

@customElement('nidoca-visible')
export class VisibleEffect extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   visibleType: string = VisibleType.HIDE;

   render() {
      return html`
         <slot class="${this.visibleType}"></slot>
      `;
   }
}
