import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators/custom-element";
import {property} from "lit/decorators/property";
import {NidocaColorScheme} from ".";
import {NidocaShadowType as NidocaShadowType} from "./nidoca-box-shadow";

@customElement("nidoca-dialog-action")
export class NidocaDialogAction extends LitElement {
  static styles = css`
    slot {
      width: 300px;
      display: flex;
    }
  `;

  @property({type: Boolean})
  show: boolean = false;
  @property({type: String})
  colorScheme: NidocaColorScheme = NidocaColorScheme.BACKGROUND;

  render(): TemplateResult {
    return html`
      <style>
        .box {
          display: inline-block;
          color: var(--app-color-${this.colorScheme});
          background-color: var(--app-color-${this.colorScheme}-background);
        }
      </style>
      <nidoca-dialog .show="${this.show}">
        <nidoca-card class="box" .shadowType="${NidocaShadowType.KEY_LIGHT}">
          <nidoca-layout-spacer>
            <slot name="header"></slot>
            <slot name="text"></slot>
            <slot name="action"></slot>
          </nidoca-layout-spacer>
        </nidoca-card>
      </nidoca-dialog>
    `;
  }
}
