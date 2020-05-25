import {css, customElement, html, property, LitElement} from 'lit-element';
import {guard} from 'lit-html/directives/guard';
import {repeat} from 'lit-html/directives/repeat';

@customElement('nidoca-top-app-bar')
export class NidocaTopAppBar extends LitElement {
  static styles = css`
    .topappbar {
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

  @property()
  leftComponents: LitElement[] = [];

  @property()
  mainComponents: LitElement[] = [];

  @property()
  rightComponents: LitElement[] = [];

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="topappbar">
        <div class="left">
          ${guard(
            this.leftComponents,
            () =>
              html`
                ${repeat(
                  this.leftComponents,
                  component =>
                    html`
                      ${component}
                    `
                )}
              `
          )}
          <slot name="leftComponents"></slot>
        </div>

        <div class="center">
          ${guard(
            this.mainComponents,
            () =>
              html`
                ${repeat(
                  this.mainComponents,
                  component =>
                    html`
                      ${component}
                    `
                )}
              `
          )}<slot name="mainComponents"></slot>
        </div>
        <div class="right">
          ${guard(
            this.rightComponents,
            () =>
              html`
                ${repeat(
                  this.rightComponents,
                  component =>
                    html`
                      ${component}
                    `
                )}
              `
          )}
          <slot name="rightComponents"></slot>
        </div>
        <div class="prominent">
          <slot name="prominentComponents"></slot>
        </div>
      </div>
    `;
  }
}
