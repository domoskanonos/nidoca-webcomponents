import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

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
      let colorActive = 'var(--app-color-active)';
      let backgroundColor = 'var(--app-color-background)';
      let backgroundColorHover = 'var(--app-color-background-hover)';

      switch (this.colorScheme) {
         case ColorScheme.PRIMARY_SCHEME:
            color = 'var(--app-color-primary)';
            colorActive = 'var(--app-color-primary-active)';
            backgroundColor = 'var(--app-color-primary-background)';
            backgroundColorHover = 'var(--app-color-primary-background-hover)';
            break;
         case ColorScheme.SECONDARY_SCHEME:
            color = 'var(--app-color-secondary)';
            colorActive = 'var(--app-color-secondary-active)';
            backgroundColor = 'var(--app-color-secondary-background)';
            backgroundColorHover = 'var(--app-color-secondary-background-hover)';
            break;
         case ColorScheme.SURFACE_SCHEME:
            color = 'var(--app-color-surface)';
            colorActive = 'var(--app-color-surface-active)';
            backgroundColor = 'var(--app-color-surface-background)';
            backgroundColorHover = 'var(--app-color-surface-background-hover)';
            break;
      }

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
               --app-color-background-hover: ${backgroundColorHover};
               --app-color-active: ${colorActive};
            }
         </style>
      `;
   }
}
