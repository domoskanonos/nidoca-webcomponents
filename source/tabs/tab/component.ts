import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis/lib';
import { TypographyType } from '../..';

const componentCSS = require('./component.css');

@customElement('nidoca-tab')
export class NidocaTab extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   selected: boolean = false;

   @property()
   text: string = '';

   render() {
      return html`
         <span class="tab ${this.selected ? 'SELECTED' : ''}" @click="${() => this.tabClicked()}">
            ${BasicService.getUniqueInstance().isNotBlank(this.text)
               ? html`
                    <nidoca-typography .typographyType="${TypographyType.OVERLINE}" text="${this.text}"></nidoca-typography>
                 `
               : html``}
            <slot></slot>
         </span>
      `;
   }

   private tabClicked(): void {
      console.log('tab clicked.');
      BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-tab-clicked', this);
   }
}
