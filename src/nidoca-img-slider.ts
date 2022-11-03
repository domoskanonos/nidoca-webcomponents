import {css, html, TemplateResult, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {NidocaTheme} from './nidoca-meta';

@customElement('nidoca-img-slider')
export class NidocaImgSlider extends LitElement {
  static styles = css`
    :host,
    ::slotted(:host) {
      display: block;
    }
  `;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.plain;

  render(): TemplateResult {
    return html`
      <style>
        :host {
          background-color: var(--app-color-${this.theme}-background);
        }
      </style>


      <slot></slot>

      
    `;
  }
}
