import {css, customElement, html, unsafeCSS, LitElement, property} from 'lit-element';

@customElement('nidoca-box')
export class NidocaBox extends LitElement {
  static styles = css`
    :host,
    *,
    ::slotted(*) {
      box-sizing: border-box;
      color: inherit;
      background-color: inherit;
    }
  `;

  @property()
  height: string = '100vh';

  @property()
  width: string = '100vw';

  render() {
    return html`
      <div style="height:${this.height}; width:${this.width}; overflow: auto;">
        <slot></slot>
      </div>
    `;
  }
}
