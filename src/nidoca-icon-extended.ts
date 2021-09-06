import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaColorScheme} from ".";

export enum NidocaIconShadowType {
  NONE = "NONE",
  DEFAULT_SHADOW = "DEFAULT_SHADOW",
  SHADOW_1 = "SHADOW_1",
  SHADOW_2 = "SHADOW_2",
  SHADOW_3 = "SHADOW_3",
}

@customElement("nidoca-icon-extended")
export class NidocaIconExtended extends LitElement {
  static styles = css`
    .round {
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }

    .DEFAULT_SHADOW {
      -moz-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_1 {
      -moz-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      -webkit-box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
      box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24);
    }

    .SHADOW_2 {
      -moz-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      -webkit-box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 3px 0 rgba(0, 0, 0, 0.23);
    }

    .SHADOW_3 {
      -moz-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      -webkit-box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
      box-shadow: 0 14px 14px 0 rgba(0, 0, 0, 0.25), 0 10px 5px 0 rgba(0, 0, 0, 0.22);
    }
  `;

  @property({type: String})
  icon: string = "";

  @property({type: String})
  colorScheme: NidocaColorScheme = NidocaColorScheme.PRIMARY;

  @property({type: String})
  shadowType: NidocaIconShadowType = NidocaIconShadowType.DEFAULT_SHADOW;

  @property({type: Boolean})
  clickable: boolean = true;

  @property({type: Boolean})
  deactivated: boolean = false;

  @property({type: String})
  cssStyle: string = "font-size: var(--icon-size); padding:var(--space-normal)";

  render(): TemplateResult {
    return html`
      <style>
        .iconExtended {
          display: inline-block;
          color: var(--app-color-${this.colorScheme});
          background-color: var(--app-color-${this.colorScheme}-background);
        }
      </style>

      <span class="iconExtended round ${this.shadowType}">
        <nidoca-icon
          .deactivated="${this.deactivated}"
          .clickable="${this.clickable}"
          icon="${this.icon}"
          title="${this.title}"
          cssStyle="${this.cssStyle}"
        ></nidoca-icon>
      </span>
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
