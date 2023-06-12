import {css, html, TemplateResult} from 'lit';
import {NidocaHtml} from './nidoca-html';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {query} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {FormOutputData, NidocaFormAbstractInputElement} from './nidoca-form-abstract-input-element';
import { NidocaTheme } from './nidoca-meta';

@customElement('nidoca-form-upload')
export class NidocaFormUpload extends NidocaFormAbstractInputElement {
  validate(): boolean {
    throw new Error('Method not implemented.');
  }
  getOutputData(): FormOutputData {
    throw new Error('Method not implemented.');
  }
  static styles = css`
    :host,
    slot {
      display: block;
      width: 100%;
    }

    .container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }

    .icon {
      font-size: 96px;
      align-self: center;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string | undefined = NidocaTheme.primary;

  @query('#inputElement')
  private inputElement: HTMLInputElement | undefined;

  render(): TemplateResult {
    return html`
      <nidoca-box theme="${ifDefined(this.theme)}">
        <div class="container">
          <nidoca-icon
            clickable
            class="icon"
            @nidoca-event-icon-clicked="${() => this.upload()}"
            icon="cloud_upload"
          ></nidoca-icon>

          Upload your Files
          <input style="display:none;" id="inputElement" name="file" type="file" />
        </div>
      </nidoca-box>
    `;
  }

  upload() {
    this.inputElement?.click();
  }
}
