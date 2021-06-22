import {css, customElement, html, LitElement, property, TemplateResult} from "lit-element";

@customElement("nidoca-movie")
export class NidocaMovie extends LitElement {
  static styles = css``;

  @property({type: String})
  src: string = "http://picsum.photos/400/300";

  render(): TemplateResult {
    return html`
      <span>
        <iframe
          src="${this.src}"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe
      ></span>
    `;
  }
}
