import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import { TypographyType } from '..';

const componentCSS = require('./component.css');

export class TargetType {
   static BLANK: string = '_blank';
   static SELF: string = '_self';
   static PARENT: string = '_parent';
   static TOP: string = '_top';
}

@customElement('nidoca-link')
export class LinkComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   text: string = '';

   @property()
   href: string = '';

   @property()
   targetType: string = TargetType.SELF;

   render() {
      return html`
         <a href="${this.href}" target="${this.targetType}"
            ><nidoca-typography .typographyType="${TypographyType.BODY1}">${this.text}<slot></slot></nidoca-typography
         ></a>
      `;
   }
}
