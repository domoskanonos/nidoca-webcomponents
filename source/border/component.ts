import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';

export enum BorderProperties {
   NONE = 'NONE',
   ALL = 'ALL',
   ALL_ROUND = 'ALL_ROUND',
   HORIZONTAL = 'HORIZONTAL',
   VERTICAL = 'VERTICAL',
   LEFT = 'LEFT',
   RIGHT = 'RIGHT',
   TOP = 'TOP',
   BOTTOM = 'BOTTOM',
   BOTTOM_SELECTED = 'BOTTOM_SELECTED',
   FULL_WIDTH = 'FULL_WIDTH'
}

export enum BorderSize {
   THIN = 'THIN',
   MEDIUM = 'MEDIUM',
   THICK = 'THICK'
}

export enum ShadowType {
   NONE = 'NONE',
   KEY_LIGHT = 'KEY_LIGHT',
   AMBIENT_LIGHT = 'AMBIENT_LIGHT',
   COMBINED = 'COMBINED'
}

const componentCSS = require('./component.css');

@customElement('nidoca-border')
export class NidocaBorder extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   borderProperties: string[] = [BorderProperties.NONE];

   @property()
   borderSize: string = BorderSize.THIN;

   @property()
   shadowType: string = ShadowType.NONE;

   render() {
      return html`
         <slot class="${this.toBorderPropertiesString(this.borderProperties)} ${this.borderSize} ${this.shadowType}"></slot>
      `;
   }

   toBorderPropertiesString(borderPropertieses: string[]) {
      let borderClazzString: string = 'BORDER';
      borderPropertieses.forEach((clazz) => {
         borderClazzString = borderClazzString.concat(' ').concat(clazz);
      });
      return borderClazzString;
   }

}
