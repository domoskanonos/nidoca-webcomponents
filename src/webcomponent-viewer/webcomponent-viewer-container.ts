import {customElement, html, LitElement, TemplateResult} from "lit-element";
import {css} from "lit-element";
import {property} from "lit/decorators.js";

@customElement("webcomponent-viewer-container")
export class WebcomponentViewerContainer extends LitElement {
    static styles = css``;

    @property({type: Boolean, converter: String})
    hideSidebox: boolean = true;

    public render(): TemplateResult {
        return html`
            <nidoca-split-screen .hideSidebox="${this.hideSidebox}">
                <div slot="left">
                    Left
                </div>

                <div slot="sidebox">
                    Sidebox
                </div>
            </nidoca-split-screen>

        `;
    }

}
