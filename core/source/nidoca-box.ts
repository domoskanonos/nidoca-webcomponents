import {css, customElement, html, unsafeCSS, LitElement, property, TemplateResult} from 'lit-element';

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

    .container {
      display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
      display: -ms-flexbox; /* TWEENER - IE 10 */
      display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
      display: flex; /* NEW, Spec - Firefox, Chrome, Opera */

      justify-content: center;
      align-items: center;
    }
  `;

  @property()
  cssStyle: string = 'height:auto; width:auto;';

  render(): TemplateResult {
    return html`
      <div class="container" style="${this.cssStyle}">
        <slot></slot>
      </div>
    `;
  }
}
