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
   richMediaType: string = RichMediaType.IMG;

   render() {
      return this.richMediaType == RichMediaType.IMG
         ? html`
              <span><img src="${this.src}"/></span>
           `
         : html`
              <iframe
                 width="560"
                 height="315"
                 src="${this.src}"
                 frameborder="0"
                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                 allowfullscreen
              ></iframe>
           `;
   }

   getOutputData(): undefined {
      return undefined;
   }
}
