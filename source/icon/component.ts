import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis/lib';
import { ShadowType } from '../border/component';

const componentCSS = require('./component.css');

export enum IconShadowType {
   NONE = 'NONE',
   DEFAULT_SHADOW = 'DEFAULT_SHADOW',
   SHADOW_1 = 'SHADOW_1',
   SHADOW_2 = 'SHADOW_2',
   SHADOW_3 = 'SHADOW_3'
}

@customElement('nidoca-icon')
export class NidocaIcon extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   icon: string = '';

   @property()
   color: string = '';

   @property()
   backgroundColor: string = '';

   @property()
   iconShadowType: string = ShadowType.NONE;

   @property()
   size: number = 24;

   @property()
   sizeUnit: string = 'px';

   @property()
   title: string = '';

   @property()
   withIconSpace: boolean = true;

   @property()
   round: boolean = false;

   @property()
   clickable: boolean = false;

   render() {
      return html`
         <nidoca-spacer size="${this.withIconSpace ? String(this.size / 2).concat(this.sizeUnit) : '0px'}">
            <span
               class="icon-container ${this.iconShadowType} ${this.clickable ? 'clickable' : ''} ${this.round ? 'ROUND' : ''}"
               title="${this.title}"
               @click="${this.clicked}"
               style="${this.backgroundColor ? 'background-color:'.concat(this.backgroundColor).concat(';') : ''} ${this.round
                  ? 'height:'
                       .concat((this.size * 2).toString())
                       .concat('px;')
                       .concat('width:')
                       .concat((this.size * 2).toString())
                       .concat('px;')
                  : ''}"
               ><i
                  class="material-icons"
                  style="${this.color.length > 0 ? 'color: '.concat(this.color).concat(';') : ''} ${this.size != undefined
                     ? 'font-size: ' + this.size.toString().concat(this.sizeUnit.concat(';'))
                     : ''}"
                  >${this.icon}</i
               >
            </span>
         </nidoca-spacer>
      `;
   }

   async clicked() {
      if (this.clickable) {
         BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-icon-clicked', this);
      }
   }
}
