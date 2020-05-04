import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';

export class TypographyType {
   static H1: string = 'H1';
   static H2: string = 'H2';
   static H3: string = 'H3';
   static H4: string = 'H4';
   static H5: string = 'H5';
   static H6: string = 'H6';
   static SUBTITLE1: string = 'SUBTITLE1';
   static SUBTITLE2: string = 'SUBTITLE2';
   static BODY1: string = 'BODY1';
   static BODY2: string = 'BODY2';
   static BUTTON: string = 'BUTTON';
   static CAPTION: string = 'CAPTION';
   static OVERLINE: string = 'OVERLINE';
}

const componentCSS = require('./component.css');

@customElement('component-typography')
export class TypographyComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   typographyType: string = TypographyType.BODY1;

   @property()
   text: string = '';

   @property()
   clazz: string = '';

   @property()
   cssStyle: string = '';

   render() {
      return html`
         <span class="${this.typographyType} ${this.clazz}" style="${this.cssStyle}"> ${this.text}<slot></slot> </span>
      `;
   }
}
