import {css, customElement, html, LitElement, TemplateResult} from 'lit-element';

@customElement('nidoca-top-app-bar')
export class NidocaTopAppBar extends LitElement {
  static styles = css`
    .TOP_APP_BAR {
      width: 100vw;
      display: grid;
      grid-template-rows: var(--menubar-height);
      grid-template-columns: auto auto auto;
      color: inherit;
      background-color: inherit;
    }

    .left {
      justify-self: start;
    }
    .center {
      justify-self: center;
    }

    .right {
      justify-self: end;
    }

    .prominent {
    }

    .left,
    .center,
    .right {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: center;
    }
  `;

  render(): TemplateResult {
    return html`
      <div class="TOP_APP_BAR">
        <div class="left">
          <slot name="leftComponents"></slot>
        </div>

        <div class="center">
          <slot name="mainComponents"></slot>
        </div>
        <div class="right">
          <slot name="rightComponents"></slot>
        </div>
        <div class="prominent">
          <slot name="prominentComponents"></slot>
        </div>
      </div>
    `;
  }
}
