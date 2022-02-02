import {css, html, LitElement, TemplateResult} from "lit";
import {customElement} from "lit/decorators.js";
import {NidocaTextType} from "../nidoca-text";

@customElement("nidoca-page-list")
export class NidocaPageList extends LitElement {
    static styles = css``;

    render(): TemplateResult {
        return html`
            <nidoca-box>
                <nidoca-text type="${NidocaTextType.H2}">Kontakte</nidoca-text>
                <nidoca-text type="${NidocaTextType.CAPTION}">80 Kontakte</nidoca-text>
                <nidoca-search-bar theme="surface"></nidoca-search-bar>
            </nidoca-box>
            <nidoca-list theme="secondary" selectionMode>
                <nidoca-list-section>A</nidoca-list-section>
                <nidoca-list-item primaryText="List Item"
                                  secondaryText="List Item Secondary Text"></nidoca-list-item>
                <nidoca-list-item primaryText="List Item"
                                  secondaryText="List Item Secondary Text"></nidoca-list-item>
                <nidoca-list-section>B</nidoca-list-section>
                <nidoca-list-item primaryText="List Item"
                                  secondaryText="List Item Secondary Text"></nidoca-list-item>
            </nidoca-list>
        `;
    }
}
