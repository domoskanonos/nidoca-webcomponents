import {css, customElement, html, LitElement, property, query} from 'lit-element';
import {GridAlignItems, GridJustifyItems} from './nidoca-grid-container';
import {NidocaIcon} from './nidoca-icon';
import {BorderProperties, BorderSize, ShadowType} from './nidoca-border';
import {BasicService} from '@domoskanonos/frontend-basis';

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

  render() {
    return html`
      <nidoca-border
        .borderProperties="${[BorderProperties.ALL, BorderProperties.FULL_WIDTH]}"
        .borderSize="${BorderSize.THIN}"
        .shadowType="${ShadowType.NONE}"
      >
        <nidoca-grid-container
          .gridJustifyItems="${GridJustifyItems.STRETCH}"
          .gridAlignItems="${GridAlignItems.STRETCH}"
          .gridTemplateRows="${['1fr']}"
          .gridTemplateColumns="${['auto', '1fr']}"
        >
          <nidoca-icon icon="search"></nidoca-icon>
          <input
            class="input-field"
            id="inputfieldComponent"
            type="search"
            @keyup="${() => this.textfieldKeyUp()}"
            placeholder="${this.placeholder}"
            value="${this.value}"
          />
        </nidoca-grid-container>
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
    console.log('textfieldKeyUp');
    BasicService.getUniqueInstance().dispatchSimpleCustomEvent(this, 'nidoca-event-search', this.getOutputData());
  }
}
