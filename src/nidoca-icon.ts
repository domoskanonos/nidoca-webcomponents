import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme} from "./nidoca-meta";

@customElement("nidoca-icon")
export class NidocaIcon extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-size: var(--icon-size);
    }
    .material-icons {
      font-family: "Material Icons";
      font-weight: normal;
      font-style: normal;
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: "liga";
    }

    .clickable {
      cursor: pointer;
    }

    .deactivated {
      color: var(--app-color-surface-background-dark);
    }
  `;

  @property({type: String})
  icon: string = "";

  @property({type: Boolean})
  clickable: boolean = true;

  @property({type: Boolean})
  deactivated: boolean = false;

  @property({type: String})
  primaryText: string = "";

  @property({type: NidocaTheme, converter: String})
  theme: string;

  constructor() {
    super();
    this.theme = NidocaTheme.prototype.getParentTheme(this) || NidocaTheme.BACKGROUND;
  }

  render(): TemplateResult {
    return html`
      <style>
        :hover {
          background-color: var(--app-color-${this.theme}-hover);
        }
      </style>
      <i
        class="material-icons ${this.deactivated ? "deactivated" : ""} ${this.clickable ? "clickable" : ""}"
        title="${this.primaryText}"
        @click="${this.clicked}"
        >${this.icon}</i
      >
    `;
  }

  async clicked(): Promise<void> {
    if (this.clickable && !this.deactivated) {
      const customEventName = "nidoca-event-icon-clicked";
      console.log("dispatch custom event: %s", customEventName);
      this.dispatchEvent(
        new CustomEvent(customEventName, {
          detail: this,
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}
