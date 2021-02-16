import {css, customElement, html} from 'lit-element';
import {LitElement} from 'lit-element';

@customElement('nidoca-showcase')
export class NidocaShowcase extends LitElement {
  static styles = css``;

  render() {
    return html`
      
      Hallo

      <nidoca-button></nidoca-button>

    `;
  }
}
