import { css, customElement, html, LitElement, property, PropertyValues, query, unsafeCSS } from 'lit-element';

const componentCSS = require('./component.css');

/**
 * check source: https://codepen.io/jakob-e/pen/XZoZWQ
 */
@customElement('component-ripple')
export class RippleComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @query('#rippleContainer')
   private rippleContainerElement: HTMLSpanElement | undefined;

   protected firstUpdated(_changedProperties: PropertyValues): void {
      super.firstUpdated(_changedProperties);
   }

   render() {
      return html`
         <div id="rippleContainer" anim="ripple" @click="${(event: MouseEvent | TouchEvent) => this.clicked(event)}">
            <slot></slot>
         </div>
      `;
   }

   private clicked(event: MouseEvent | TouchEvent | Touch) {
      if (this.rippleContainerElement != undefined) {
         if (event instanceof TouchEvent) {
            event = event.touches ? event.touches[0] : event;
         }
         const r = this.rippleContainerElement.getBoundingClientRect(),
            d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
         this.rippleContainerElement.style.cssText = `--s: 0; --o: 1;`;
         this.rippleContainerElement.offsetTop;
         if (event instanceof MouseEvent || event instanceof Touch) {
            this.rippleContainerElement.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${event.clientX -
               r.left}; --y:${event.clientY - r.top};`;
         }
      }
   }
}
