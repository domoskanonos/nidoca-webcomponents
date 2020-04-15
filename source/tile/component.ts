import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData} from '../abstract-component/component';

const componentCSS = require('./component.css');

export class TileInputData extends AbstractInputData {
   componentInputData?: AbstractInputData;
}

@customElement('component-tile')
export class TileComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'TileComponent';

   @property()
   cssStyle: string = '';

   getDefaultInputData(): TileInputData {
      return <TileInputData>{
         componentIdentifier: TileComponent.IDENTIFIER
      };
   }
}
