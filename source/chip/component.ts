import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';
import { SpacerSize, TypographyType } from '..';

const componentCSS = require('./component.css');

export class ChipInputData extends AbstractInputData {
   spacerSize: SpacerSize = SpacerSize.LITTLE;
}

@customElement('component-chip')
export class ChipComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'ChipComponent';

   @property()
   clazz: string = 'PRIMARY_COLOR';

   @property()
   spacerSize: SpacerSize = SpacerSize.LITTLE;

   render() {
      return html`
         <span class="chip ${this.clazz} ${this.spacerSize}">
            <slot></slot>
         </span>
      `;
   }
}
