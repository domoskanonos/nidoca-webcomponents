import { css, customElement, html, property, unsafeCSS } from 'lit-element';
import { LitElement } from 'lit-element';

export class BorderProperties {
   static NONE: string = 'NONE';
   static ALL: string = 'ALL';
   static ALL_ROUND: string = 'ALL_ROUND';
   static HORIZONTAL: string = 'HORIZONTAL';
   static VERTICAL: string = 'VERTICAL';
   static LEFT: string = 'LEFT';
   static RIGHT: string = 'RIGHT';
   static TOP: string = 'TOP';
   static BOTTOM: string = 'BOTTOM';
   static BOTTOM_SELECTED: string = 'BOTTOM_SELECTED';
   static FULL_WIDTH: string = 'FULL_WIDTH';
}

export class BorderSize {
   static THIN: string = 'THIN';
   static MEDIUM: string = 'MEDIUM';
   static THICK: string = 'THICK';
}

export class ShadowType {
   static NONE: string = 'NONE';
   static KEY_LIGHT: string = 'KEY_LIGHT';
   static AMBIENT_LIGHT: string = 'AMBIENT_LIGHT';
   static COMBINED: string = 'COMBINED';
}

const componentCSS = require('./component.css');

@customElement('component-border')
export class BorderComponent extends LitElement {
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
         <slot
            class="${this.toBorderPropertiesString(this.borderProperties)} ${this.borderSize} ${this
               .shadowType}"
         ></slot>
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
