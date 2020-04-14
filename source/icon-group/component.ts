import { css, customElement, html, property, unsafeCSS, LitElement} from 'lit-element';
import { AbstractInputData } from '../abstract-component/component';
import { guard } from 'lit-html/directives/guard';
import { repeat } from 'lit-html/directives/repeat';
import { IconComponent, IconInputData } from '../icon/component';
import { BasicService } from '@domoskanonos/frontend-basis';

const componentCSS = require('./component.css');

export class IconGroupInputData extends AbstractInputData {
   clazz?: string;
   icons?: IconInputData[];
}

@customElement('component-icon-group')
export class IconGroupComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'IconGroupComponent';

   static EVENT_ICON_CLICK: string = 'component-icon-group-icon-click';

   @property()
   icons: IconInputData[] = [];

   @property()
   clazz: string = '';

   render() {
      return html`
         <span class="${this.clazz}">
            ${guard(
               this.icons,
               () =>
                  html`
                     ${repeat(
                        this.icons,
                        (icon) => html`
                           <component-icon
                              .inputData="${icon}"
                              @component-icon-click="${() => this.iconClicked()}"
                           ></component-icon>
                        `
                     )}
                  `
            )}
         </span>
      `;
   }

   iconClicked() {
      // this.dispatchCompoundCustomEvent(IconGroupComponent.EVENT_ICON_CLICK, event, index);
   }
}
