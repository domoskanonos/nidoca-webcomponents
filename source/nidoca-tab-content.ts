import { css, customElement, html, property, LitElement } from 'lit-element';
import { VisibleType } from './nidoca-visible';

@customElement('nidoca-tab-content')
export class NidocaTabContent extends LitElement {
  static styles = css``;

  @property()
  selected: boolean = false;

  render() {
    return html`
      <nidoca-visible visibleType="${this.selected ? VisibleType.NORMAL : VisibleType.HIDE}">
        <slot></slot>
      </nidoca-visible>
    `;
  }
}
