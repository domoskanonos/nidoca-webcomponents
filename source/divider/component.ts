import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { AbstractInputData} from '../abstract-component/component';
import {BorderType, SpacerAlignment, SpacerSize} from '..';
import {BasicService} from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class DividerInputData extends AbstractInputData {
   componentIdentifier = DividerComponent.IDENTIFIER;
   spacerSize: SpacerSize = SpacerSize.MEDIUM;
}

@customElement('component-divider')
export class DividerComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'DividerComponent';

   @property()
   spacerSize: SpacerSize = SpacerSize.MEDIUM;

   render() {
      return html`
         <component-border borderType="${BorderType.BOTTOM}">
            <component-spacer spacerSize="${this.spacerSize}" spacerAlignment="${SpacerAlignment.BOTH}"> </component-spacer>
         </component-border>
         <component-spacer spacerSize="${this.spacerSize}" spacerAlignment="${SpacerAlignment.BOTH}"> </component-spacer>
      `;
   }

   getDefaultInputData(): any {
      return <DividerInputData>{};
   }
}
