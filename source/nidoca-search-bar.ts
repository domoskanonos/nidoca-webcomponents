import {css, customElement, html, LitElement, property, query, TemplateResult} from 'lit-element';
import {BorderProperty, BorderSize} from './nidoca-border';

@customElement('nidoca-search-bar')
export class NidocaSearchBar extends LitElement {
  static styles = css`
    .input-field {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      color: inherit;
      background-color: inherit;
      line-height: var(--line-height);
      height: auto;
    }

    .input-field:focus,
    .input-field:valid {
      outline: none;
      box-shadow: none;
      background: inherit;
    }
  `;

  @property()
  placeholder: string = '';

  @property()
  value: string = '';

  @query('#htmlInputElement')
  private htmlInputElement: HTMLInputElement | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-border
        .borderProperties="${[BorderProperty.ALL, BorderProperty.FULL_WIDTH]}"
        .borderSize="${BorderSize.THIN}"
      >
        <nidoca-flex-container>
          <nidoca-icon icon="search"></nidoca-icon>
          <input
            class="input-field"
            id="htmlInputElement"
            type="search"
            @keyup="${() => this.textfieldKeyUp()}"
            placeholder="${this.placeholder}"
            value="${this.value}"
          />
        </nidoca-flex-container>
      </nidoca-border>
    `;
  }

  getOutputData(): string {
    let searchBarOutputData: string = '';
    if (this.htmlInputElement != null) {
      searchBarOutputData = this.htmlInputElement.value;
    }
    return searchBarOutputData;
  }

  private textfieldKeyUp() {
    this.dispatchEvent(
      new CustomEvent('nidoca-event-search', {detail: this.getOutputData(), bubbles: true, composed: true})
    );
  }
}
