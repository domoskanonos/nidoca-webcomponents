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
   FULL_WIDTH = 'FULL_WIDTH',
}

export enum BorderSize {
   THIN = 'THIN',
   MEDIUM = 'MEDIUM',
   THICK = 'THICK',
}

export enum ShadowType {
   NONE = 'NONE',
   KEY_LIGHT = 'KEY_LIGHT',
   AMBIENT_LIGHT = 'AMBIENT_LIGHT',
   COMBINED = 'COMBINED',
}

@customElement('nidoca-border')
export class NidocaBorder extends LitElement {
   static styles = css`
      :host,
      * {
         box-sizing: border-box;
         color: inherit;
         background-color: inherit;
      }
      .BORDER {
         border-color: var(--app-color-surface-background);
      }

      slot {
         display: inline-block;
      }

      .FULL_WIDTH {
         width: 100%;
      }

      .THIN {
         border-width: thin;
      }

      .MEDIUM {
         border-width: 2px;
      }

      .THICK {
         border-width: 4px;
      }

      .ALL {
         border-style: solid;
      }

      .ALL_ROUND {
         overflow: hidden;
         border: 1px solid;
         border-color: var(--app-color-surface-background);
         border-radius: 10px;
      }

      .HORIZONTAL,
      .TOP {
         border-top-style: solid;
      }

      .HORIZONTAL,
      .BOTTOM {
         border-bottom-style: solid;
      }

      .VERTICAL,
      .LEFT {
         border-left-style: solid;
      }

      .VERTICAL,
      .RIGHT {
         border-right-style: solid;
      }

      .BOTTOM_SELECTED {
         border-bottom-style: solid;
         border-color: var(--app-color-primary-background);
      }

      .KEY_LIGHT {
         box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }

      .AMBIENT_LIGHT {
         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      }

      .COMBINED {
         box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }
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
