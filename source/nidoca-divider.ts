import {css, customElement, html, property, LitElement, TemplateResult} from 'lit-element';

export enum DividerType {
  THIN = 'THIN',
  MEDIUM = 'MEDIUM',
  THICK = 'THICK',
}

@customElement('nidoca-divider')
export class NidocaDivider extends LitElement {
  static styles = css`
    .DIVIDER,
    ::slotted(.DIVIDER) {
      width: 100%;
      background-color: #000000;
    }

    .THIN {
      height: 1px;
    }

    .MEDIUM {
      height: 2px;
    }

    .THICK {
      height: 4px;
    }
  `;

  @property()
  dividerType: DividerType = DividerType.THIN;

  @property()
  opacity: number = 1.0;

  render(): TemplateResult {
    return html` <div class="DIVIDER ${this.dividerType}" style="opacity: ${this.opacity};"></div> `;
  }
}
