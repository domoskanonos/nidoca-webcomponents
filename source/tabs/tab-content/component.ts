import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { VisibleType } from '../..';

const componentCSS = require('./component.css');

@customElement('nidoca-tab-content')
export class TabContentComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   selected: boolean = false;

   render() {
      return html`
         <nidoca-visible visibleType="${this.selected ? VisibleType.NORMAL : VisibleType.HIDE}">
            <slot></slot>
         </nidoca-visible>
      `;
   }
}
