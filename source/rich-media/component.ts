import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';

const componentCSS = require('./component.css');

export class RichMediaType {
   static IMG: string = 'IMG';
   static MOVIE: string = 'MOVIE';
}

export enum RichMediaProperties {
   ROUND = 'ROUND',
   CLICKABLE = 'CLICKABLE',
   ZOOM_WRAPPED = 'ZOOM_WRAPPED',
   FULL_WIDTH = 'FULL_WIDTH'
}

@customElement('nidoca-rich-media')
export class RichMediaComponent extends LitElement {
   static styles = css`
      ${unsafeCSS(componentCSS)}
   `;

   @property()
   src: string = '';

   @property()
   richMediaType: string = RichMediaType.IMG;

   @property()
   richMediaProperties: RichMediaProperties[] = [];

   render() {
      return this.richMediaType == RichMediaType.IMG
         ? html`
              <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"><img src="${this.src}"/></span>
           `
         : html`
              <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}">
                 <iframe
                    src="${this.src}"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                 ></iframe
              ></span>
           `;
   }

   private toRichMediaPropertiesString(richMediaProperties: RichMediaProperties[]) {
      let richMediaPropertiesString: string = '';
      richMediaProperties.forEach((propertie: RichMediaProperties) => {
         richMediaPropertiesString = richMediaPropertiesString.concat(' ').concat(propertie);
      });
      return richMediaPropertiesString;
   }
}
