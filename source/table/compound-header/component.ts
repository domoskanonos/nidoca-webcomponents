import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData } from '../../abstract-component/component';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class TableCompoundHeaderInputData extends AbstractInputData {
   text?: string;
   cssStyle?: string;
}

@customElement('component-table-compound-header')
export class TableCompoundHeader extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'AccordionItemComponent';

   @property()
   text: string = '';

   @property()
   cssStyle: string = '';

   render() {
      return html`
         <div class="compoundHeader" style="${this.cssStyle}">
            <component-typography>${this.text}</component-typography>
            <slot></slot>
         </div>
      `;
   }

   getDefaultInputData(): TableCompoundHeaderInputData {
      return <TableCompoundHeaderInputData>{
         componentIdentifier: TableCompoundHeader.IDENTIFIER,
         text: 'Mein Gruppierungskopf'
      };
   }
}
