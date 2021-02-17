import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';

@customElement('nidoca-container')
export class NidocaContainer extends LitElement {
  static styles = css`
    :host {
      box-sizing: border-box;
    }
  `;

  @property()
  rendered: boolean = true;

  @property()
  cssStyle: string = '';

  render(): TemplateResult {
    return this.rendered
      ? html`
          <slot style="${this.cssStyle}"></slot>
        `
      : html``;
  }
}
