import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';

const componentCSS = require('./component.css');

export enum ProgressType {
   PROGRESS = 'PROGRESS',
   PROGRESS_CIRCULAR = 'PROGRESS_CIRCULAR'
}

@customElement('component-progress')
export class ProgressComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   progressType: ProgressType = ProgressType.PROGRESS;

   render() {
      return html`
         <progress class="${this.progressType}" />
      `;
   }
}
