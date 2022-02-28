import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";
import {NidocaTheme} from "./nidoca-meta";

@customElement("nidoca-card")
export class NidocaCard extends LitElement {
    static styles = css`
    :host {
      display: block;
      border-radius: 1rem;
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      overflow:hidden;
      box-shadow: 0 var(--space) var(--space) rgba(0, 0, 0, 0.08), 0 var(--space) var(--space) rgba(0, 0, 0, 0.23);
 
}

    }
    slot {
      height:100%;
      width:100%;
      display: block;
    }
  `;

    @property({type: NidocaTheme, converter: String})
    theme: string = NidocaTheme.SURFACE;

    render(): TemplateResult {
        return html`
            <style>
                :host {
                    border-color: var(--app-color-${this.theme}-border);
                }
            </style>
            <slot></slot>
        `;
    }
}
