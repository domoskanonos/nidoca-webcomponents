import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./component.css');

export class SpacerAlignment {
   static BOTH: string = 'both';
   static HORIZONTAL: string = 'horizontalAlignment';
   static VERTICAL: string = 'verticalAlignment';
}

export class SpacerSize {
   static ZERO: string = 'spacerZero';
   static LITTLE: string = 'spaceLittle';
   static SMALL: string = 'spaceSmall';
   static MEDIUM: string = 'spaceMedium';
   static NORMAL: string = 'spaceNormal';
   static BIG: string = 'spaceBig';
   static MAX: string = 'spaceMax';
}

@customElement('nidoca-spacer')
export class SpacerComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'SpacerComponent';

   @property()
   spacerSize: string = SpacerSize.ZERO;

   @property()
   spacerAlignment: string = SpacerAlignment.BOTH;

   @property()
   size: string = '';

   render() {
      return html`
         <span class="spacer ${this.spacerSize} ${this.spacerAlignment}" style="${this.toSizeStyle(this.size)}"
            ><slot></slot
         ></span>
      `;
   }

   private toSizeStyle(size: string): string {
      if (size == null || size.length == 0) {
         return '';
      }
      switch (this.spacerAlignment) {
         case SpacerAlignment.VERTICAL:
            return 'padding-top:'
               .concat(size)
               .concat(';')
               .concat('padding-bottom:')
               .concat(size)
               .concat(';');
         case SpacerAlignment.HORIZONTAL:
            return 'padding-left:'
               .concat(size)
               .concat(';')
               .concat('padding-right:')
               .concat(size)
               .concat(';');
         case SpacerAlignment.BOTH:
            return 'padding:'.concat(size).concat(';');
      }
      return '';
   }
}
