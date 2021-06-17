import {customElement, html, LitElement, TemplateResult} from 'lit-element';

@customElement('nidoca-showcase')
export class NidocaShowcase extends LitElement {
  render(): TemplateResult {
    return html`
      <nidoca-template>
        <nidoca-icon slot="content" icon="menu"></nidoca-icon>
      </nidoca-template>
    `;
  }
}
