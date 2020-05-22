import { css, customElement, html, LitElement, property } from 'lit-element';

export enum SpacerAlignment {
   BOTH = 'both',
   HORIZONTAL = 'horizontalAlignment',
   VERTICAL = 'verticalAlignment',
}

export enum SpacerSize {
   ZERO = 'spacerZero',
   LITTLE = 'spaceLittle',
   SMALL = 'spaceSmall',
   MEDIUM = 'spaceMedium',
   NORMAL = 'spaceNormal',
   BIG = 'spaceBig',
   MAX = 'spaceMax',
}

@customElement('nidoca-spacer')
export class NidocaSpacer extends LitElement {
   static styles = css`
      :host,
      ::slotted(:host) {
      }

      .spacer,
      ::slotted(.spacer) {
         box-sizing: border-box;
         display: block;
      }

      .horizontalAlignment,
      ::slotted(.horizontalAlignment) {
         padding-top: 0 !important;
         padding-bottom: 0 !important;
      }

      .verticalAlignment,
      ::slotted(.verticalAlignment) {
         padding-left: 0 !important;
         padding-right: 0 !important;
      }

      .spaceLittle,
      ::slotted(.spaceLittle) {
         padding: var(--space-little);
      }

      .spaceSmall,
      ::slotted(.spaceSmall) {
         padding: var(--space-small);
      }

      .spaceMedium,
      ::slotted(.spaceMedium) {
         padding: var(--space-medium);
      }

      .spaceNormal,
      ::slotted(.spaceNormal) {
         padding: var(--space-normal);
      }

      .spaceBig,
      ::slotted(.spaceBig) {
         padding: var(--space-big);
      }

      .spaceMax,
      ::slotted(.spaceMax) {
         padding: var(--space-max);
      }
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
            return 'padding-top:'.concat(size).concat(';').concat('padding-bottom:').concat(size).concat(';');
         case SpacerAlignment.HORIZONTAL:
            return 'padding-left:'.concat(size).concat(';').concat('padding-right:').concat(size).concat(';');
         case SpacerAlignment.BOTH:
            return 'padding:'.concat(size).concat(';');
      }
      return '';
   }
}
