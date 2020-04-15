import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../../abstract-component/component';
import { TabInputData, VisibleType } from '../..';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class TabContentInputData extends AbstractInputData {
   selected: boolean = true;
}

@customElement('component-tab-content')
export class TabContentComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'TabContentComponent';

   @property()
   selected: boolean = false;

   render() {
      return html`
         <effect-visible visibleType="${this.selected ? VisibleType.NORMAL : VisibleType.HIDE}">
            <slot></slot>
         </effect-visible>
      `;
   }
}
