import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./component.css');

export enum SpacerAlignment {
   BOTH = 'both',
   HORIZONTAL = 'horizontalAlignment',
   VERTICAL = 'verticalAlignment'
}

export enum SpacerSize {
   ZERO = 'spacerZero',
   LITTLE = 'spaceLittle',
   SMALL = 'spaceSmall',
   MEDIUM = 'spaceMedium',
   NORMAL = 'spaceNormal',
   BIG = 'spaceBig',
   MAX = 'spaceMax'
}

@customElement('nidoca-spacer')
export class NidocaSpacer extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

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
