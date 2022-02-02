import {css, html, TemplateResult, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTextType} from "./nidoca-text";

@customElement("nidoca-list-section")
export class NidocaListSection extends LitElement {
    static styles = css`
  :host {
 display:block;
 padding-left: var(--space-2);

  `;

    @property({type: String})
    text: string = "";

    render(): TemplateResult {
        return html`
            <nidoca-text style="flex-basis:100%;" .type="${NidocaTextType.CAPTION}" text="${this.text}">
                <slot></slot>
            </nidoca-text>
        `;
    }
}
