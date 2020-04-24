import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

export class VariantFactor {
   static NORMAL: number = 1.0;
   static LIGHTEN_1: number = 0.9;
   static LIGHTEN_2: number = 0.8;
   static LIGHTEN_3: number = 0.7;
   static LIGHTEN_4: number = 0.6;
   static LIGHTEN_5: number = 0.5;
   static DARKEN_1: number = 1.1;
   static DARKEN_2: number = 1.2;
   static DARKEN_3: number = 1.3;
   static DARKEN_4: number = 1.4;
   static DARKEN_5: number = 1.5;
}

export class ColorScheme {
   static DEFAULT_SCHEME: string = 'BACKGROUND_COLOR';
   static PRIMARY_SCHEME: string = 'PRIMARY_COLOR';
   static SECONDARY_SCHEME: string = 'SECONDARY_COLOR';
   static SURFACE_SCHEME: string = 'SURFACE_COLOR';
}

export class TextColorClazz {
   static DEFAULT: string = 'DEFAULT';
   static SUCCESS: string = 'SUCCESS';
   static ERROR: string = 'ERROR';
   static WARNING: string = 'WARNING';
   static INFO: string = 'INFO';
}

export class BackgroundColorClazz {
   static DEFAULT: string = 'DEFAULT';
   static ERROR: string = 'BACKGROUND_ERROR';
   static WARNING: string = 'BACKGROUND_WARNING';
}

const componentCSS = require('./component.css');

@customElement('effect-color')
export class ColorEffect extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   variantFactor: number = VariantFactor.NORMAL;

   @property()
   colorScheme: string = ColorScheme.DEFAULT_SCHEME;

   @property()
   textColorClazz: string = TextColorClazz.DEFAULT;

   @property()
   backgroundColorClazz: string = BackgroundColorClazz.DEFAULT;

   @property()
   textColor: string = '';

   @property()
   backgroundColor: string = '';

   render() {
      return html`
         ${this.createSchemaStyle()}

         <slot
            style="${BasicService.getUniqueInstance().isNotBlank(this.textColor)
               ? 'color: '.concat(this.textColor).concat(';')
               : ''}${BasicService.getUniqueInstance().isNotBlank(this.backgroundColor)
               ? 'background-color: '.concat(this.backgroundColor).concat(';')
               : ''}"
         ></slot>
      `;
   }

   private createSchemaStyle() {
      let color = 'var(--app-color)';
      let backgroundColor = 'var(--app-color-background)';

      switch (this.colorScheme) {
         case ColorScheme.PRIMARY_SCHEME:
            color = 'var(--app-color-primary)';
            backgroundColor = this.calculateColor('--app-color-primary-background');
            break;
         case ColorScheme.SECONDARY_SCHEME:
            color = 'var(--app-color-secondary)';
            backgroundColor = this.calculateColor('--app-secondary-background');
            break;
         case ColorScheme.SURFACE_SCHEME:
            color = 'var(--app-color-surface)';
            backgroundColor = 'var(--app-color-surface-background)';
            break;
      }

      console.log(backgroundColor);

      switch (this.backgroundColorClazz) {
         case BackgroundColorClazz.ERROR:
            backgroundColor = 'var(--app-color-error)';
            break;
         case BackgroundColorClazz.WARNING:
            backgroundColor = 'var(--app-color-warning)';
            break;
      }

      switch (this.textColorClazz) {
         case TextColorClazz.SUCCESS:
            color = 'var(--app-color-success)';
            break;
         case TextColorClazz.INFO:
            color = 'var(--app-color-info)';
            break;
         case TextColorClazz.WARNING:
            color = 'var(--app-color-warning)';
            break;
         case TextColorClazz.ERROR:
            color = 'var(--app-color-error)';
            break;
      }

      return html`
         <style>
            :root,
            * {
               --app-color: ${color};
               --app-color-background: ${backgroundColor};
            }
         </style>
      `;
   }

   calculateColor(colorKey: string): string {
      return 'rgba(calc(var('
         .concat(colorKey)
         .concat('-r)*')
         .concat(String(this.variantFactor))
         .concat('),calc(var(')
         .concat(colorKey)
         .concat('-g)*')
         .concat(String(this.variantFactor))
         .concat('),calc(var(')
         .concat(colorKey)
         .concat('-b)*')
         .concat(String(this.variantFactor))
         .concat('),1)');
   }
}
