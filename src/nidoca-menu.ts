import {css, html, TemplateResult, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {NidocaTheme} from ".";

@customElement("nidoca-menu")
export class NidocaMenu extends LitElement {
    static styles = css`
    :host,
    slot {
      display: block;
    }

    slot {
      padding-left: var(--space-4);
      padding-right: var(--space-4);
    }
  `;

    @property({type: NidocaTheme, converter: String})
    theme: string | undefined;

    render(): TemplateResult {
        return html`
            ${NidocaTheme.getStyle(this.theme)}
            <slot></slot>`;
    }
}
