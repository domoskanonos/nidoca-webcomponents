import { css, customElement, html, property, unsafeCSS, LitElement } from 'lit-element';

export enum TypographyType {
   H1 = 'H1',
   H2 = 'H2',
   H3 = 'H3',
   H4 = 'H4',
   H5 = 'H5',
   H6 = 'H6',
   SUBTITLE1 = 'SUBTITLE1',
   SUBTITLE2 = 'SUBTITLE2',
   BODY1 = 'BODY1',
   BODY2 = 'BODY2',
   BUTTON = 'BUTTON',
   CAPTION = 'CAPTION',
   OVERLINE = 'OVERLINE'
}

export enum TypographyAlignment {
   JUSTIFY = 'text-align:justify;',
   JUSTIFY_ALL = 'text-align:justify-all;',
   LEFT = 'text-align: left;',
   RIGHT = 'text-align: right;',
   CENTER = 'text-align: center;',
   START = 'text-align: start;',
   END = 'text-align: end;',
   MATCH_PARENT = 'text-align: match-parent;',
   INHERIT = 'text-align: inherit;',
   INITIAL = 'text-align: initial;',
   UNSET = 'text-align: unset;'
}

const componentCSS = require('./component.css');

@customElement('nidoca-typography')
export class TypographyComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   typographyType: TypographyType = TypographyType.BODY1;

   @property()
   typographyAlignment: TypographyAlignment = TypographyAlignment.JUSTIFY;

   @property()
   text: string = '';

   render() {
      return html`
         <span class="TYPOGRAPHY ${this.typographyType}" style="${this.typographyAlignment}">${this.text}<slot></slot></span>
      `;
   }
}
