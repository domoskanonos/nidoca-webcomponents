import {css, customElement, html, LitElement, property, TemplateResult} from 'lit-element';

export enum RichMediaType {
  IMG = 'IMG',
  MOVIE = 'MOVIE',
}

export enum RichMediaProperties {
  ROUND = 'ROUND',
  CLICKABLE = 'CLICKABLE',
  ZOOM_WRAPPED = 'ZOOM_WRAPPED',
  FULL_WIDTH = 'FULL_WIDTH',
}

@customElement('nidoca-rich-media')
export class NidocaRichMedia extends LitElement {
  static styles = css`
    :host,
    span {
      margin: 0;
      padding: 0;
      font-size: 0;
      letter-spacing: 0;
      line-height: 0;
    }

    img,
    iframe {
      box-sizing: border-box;
      height: auto;
      width: auto;
    }

    .CLICKABLE {
      cursor: pointer;
    }

    .ZOOM_WRAPPED {
      overflow: hidden;
    }
    .ZOOM_WRAPPED img:hover {
      transform: scale(1.1, 1.1);
      transition: transform 0.5s;
    }

    .FULL_WIDTH {
      box-sizing: border-box;
    }
    .FULL_WIDTH img,
    .FULL_WIDTH iframe {
      width: 100%;
    }

    .ROUND {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 75%;
      box-sizing: border-box;
    }
    .ROUND img,
    .ROUND iframe {
      padding: 0.25em;
      border-radius: 50%;
      width: 100%;
    }

    @media only screen and (max-width: 768px), only screen and (orientation: portrait) {
    }
  `;

  @property()
  src: string = 'http://picsum.photos/400/300';

  @property()
  richMediaType: RichMediaType = RichMediaType.IMG;

  @property()
  richMediaProperties: RichMediaProperties[] = [RichMediaProperties.CLICKABLE];

  render(): TemplateResult {
    return this.richMediaType == RichMediaType.IMG
      ? html`
          <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"><img src="${this.src}" /></span>
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
