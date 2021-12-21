import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTheme, NidocaDevice} from ".";
import {NidocaShadowType as NidocaShadowType} from "./nidoca-box-shadow";

@customElement("nidoca-dialog-action")
export class NidocaDialogAction extends LitElement {
  static styles = css`
    slot {
      display: flex;
    }
  `;

  @property({type: Boolean})
  show: boolean = false;
  
  @property({type: NidocaTheme})
  theme: NidocaTheme = NidocaTheme.BACKGROUND;

  render(): TemplateResult {
    return html`
      <style>
        .box {
          display: inline-block;
          color: var(--app-color-${this.theme});
          background-color: var(--app-color-${this.theme}-background);
        }
        ${NidocaDevice.MOBILE.asMediaStyle("slot{min-width:320px;}")}
        ${NidocaDevice.TABLET.asMediaStyle("slot{min-width:480px;}")}
        ${NidocaDevice.DESKTOP.asMediaStyle("slot{min-width:640px;}")}
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
