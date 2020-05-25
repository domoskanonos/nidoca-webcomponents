import {css, customElement, html, LitElement, property} from 'lit-element';

export enum TargetType {
  BLANK = '_blank',
  SELF = '_self',
  PARENT = '_parent',
  TOP = '_top',
}

@customElement('nidoca-link')
export class NidocaLink extends LitElement {
  static styles = css`
    :host,
    ::slotted(:host) {
      display: contents;
    }
    a {
      color: inherit;
      background-color: inherit;
    }
  `;

  @property()
  text: string = '';

  @property()
  href: string = '';

  @property()
  targetType: string = TargetType.SELF;

  render() {
    return html`
      <a href="${this.href}" target="${this.targetType}">${this.text}<slot></slot></a>
    `;
  }
}
