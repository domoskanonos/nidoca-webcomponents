import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./component.css');

export class RichMediaType {
   static IMG: string = 'IMG';
   static MOVIE: string = 'MOVIE';
}

@customElement('component-rich-media')
export class RichMediaComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   static IDENTIFIER: string = 'ImgComponent';

   @property()
   src: string = '';

   @property()
   clazz: string = '';

   @property()
   cssStyle: string = '';

   @property()
   text: string = '';

   @property()
   rendered: boolean = true;

   render() {
      return this.rendered
         ? html`
              <span class="${this.clazz}"><img src="${this.src}" style="${this.cssStyle}"/></span>
           `
         : html``;
   }

   getOutputData(): undefined {
      return undefined;
   }
}
