import {css, html, TemplateResult, LitElement} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import { NidocaButtonType } from './nidoca-button';

@customElement('nidoca-dialog-decision')
export class NidocaDialogDecision extends NidocaHtml {
  static styles = css``;

  @property({type: Boolean})
  show: boolean = false;

  @property({type: String})
  title: string = 'Ja oder Nein ?';

  @property({type: String})
  description: string = 'Entscheide dich';

  @property({type: String})
  labelButtonYes: string = 'Ja';

  @property({type: String})
  labelButtonNo: string = 'Nein';

  render(): TemplateResult {
    return html`<nidoca-dialog .show="${this.show}">
      <nidoca-box style="width:300px;">
        <nidoca-text-h2 style="padding-bottom:var(--space-2);">${this.title}</nidoca-text-h2>
        <nidoca-text style="padding-bottom:var(--space-2);">${this.description} </nidoca-text>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${NidocaButtonType.text}"
          @click="${() => {
            this.dispatchEvent(
              new CustomEvent('nidoca-dialog-decision-yes', {
                detail: this,
                bubbles: true,
                composed: true,
              })
            );
          }}"
          >${this.labelButtonYes}
        </nidoca-button>
        <nidoca-button
          style="padding-bottom:var(--space-2);"
          type="${NidocaButtonType.text}"
          @click="${() => {
            this.dispatchEvent(
              new CustomEvent('nidoca-dialog-decision-no', {
                detail: this,
                bubbles: true,
                composed: true,
              })
            );
          }}"
          >${this.labelButtonNo}
        </nidoca-button>
      </nidoca-box>
    </nidoca-dialog>`;
  }
}
