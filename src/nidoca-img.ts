import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";

export class NidocaImgProperties {
  static readonly ROUND = "ROUND";
  static readonly CLICKABLE = "CLICKABLE";
  static readonly ZOOM_WRAPPED = "ZOOM_WRAPPED";
  static readonly FULL_WIDTH = "FULL_WIDTH";
}

@customElement("nidoca-img")
export class NidocaImg extends LitElement {
  static styles = css`
    :host,
    span {
      margin: 0;
      padding: 0;
      font-size: 0;
      letter-spacing: 0;
      line-height: 0;
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
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
    .FULL_WIDTH img {
      width: 100%;
    }

    .ROUND {
      display: block;
      margin-left: auto;
      margin-right: auto;
      box-sizing: border-box;
    }
    .ROUND img {
      padding: 0.25em;
      border-radius: 50%;
      width: 100%;
    }

    @media only screen and (max-width: 768px), only screen and (orientation: portrait) {
    }
  `;

  @property({type: String})
  src: string = "http://picsum.photos/400/300";

  @property({type: NidocaImgProperties, converter: Array})
  richMediaProperties: NidocaImgProperties[] = [NidocaImgProperties.CLICKABLE, NidocaImgProperties.FULL_WIDTH];

  render(): TemplateResult {
    return html`
      <span class="${this.toRichMediaPropertiesString(this.richMediaProperties)}"><img src="${this.src}" /></span>
    `;
  }

  private toRichMediaPropertiesString(richMediaProperties: NidocaImgProperties[]) {
    let richMediaPropertiesString: string = "";
    richMediaProperties.forEach((_propertie: NidocaImgProperties) => {
      richMediaPropertiesString = richMediaPropertiesString.concat(" ").concat("");
    });
    return richMediaPropertiesString;
  }
}
