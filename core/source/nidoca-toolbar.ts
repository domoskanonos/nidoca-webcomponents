import {css, customElement, html, LitElement, property, TemplateResult} from 'lit-element';
import {FlexJustifyContent} from './nidoca-flex-container';

export class ToolbarAlignment {
  static HORIZONTAL: string = 'HORIZONTAL';
  static VERTICAL: string = 'VERTICAL';
}

@customElement('nidoca-toolbar')
export class ToolbarComponent extends LitElement {
  static styles = css`
    .TOOLBAR {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      box-sizing: border-box;
      overflow: auto;
    }

    .HORIZONTAL {
      flex-direction: row;
    }

    .VERTICAL {
      flex-direction: column;
    }
  `;

  @property()
  toolbarAlignment: string = ToolbarAlignment.HORIZONTAL;

  @property()
  flexJustifyContent: string = FlexJustifyContent.FLEX_START;

  @property()
  height: string = 'auto';

  @property()
  width: string = 'auto';

  render(): TemplateResult {
    return html`
      <div
        class="TOOLBAR ${this.toolbarAlignment}"
        style="justify-content:${this.flexJustifyContent};height:${this.height};width:${this.width};"
      >
        <slot></slot>
      </div>
    `;
  }
}
