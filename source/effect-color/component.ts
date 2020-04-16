import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { BasicService } from '@domoskanonos/frontend-basis';

export class ColorScheme {
   static PRIMARY_COLOR: string = 'PRIMARY_COLOR';
   static SECONDARY_COLOR: string = 'SECONDARY_COLOR';
   static SURFACE_COLOR: string = 'SURFACE_COLOR';
   static BACKGROUND_COLOR: string = 'BACKGROUND_COLOR';
}

export class TextColorClazz {
   static DEFAULT: string = 'DEFAULT';
   static SUCCESS: string = 'SUCCESS';
   static ERROR: string = 'ERROR';
   static WARNING: string = 'WARNING';
   static INFO: string = 'INFO';
   static ACTIVE: string = 'ACTIVE';
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
   colorScheme: string = ColorScheme.BACKGROUND_COLOR;

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
            class="${this.colorScheme} ${this.textColorClazz} ${this.backgroundColorClazz}"
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

          case ColorScheme.PRIMARY_COLOR :
              color = 'var(--app-color-primary)';
              colorActive = 'var(--app-color-primary-active)';
              backgroundColor = 'var(--app-color-primary-background)';
              backgroundColorHover = 'var(--app-color-primary-background-hover)';
                            break

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
