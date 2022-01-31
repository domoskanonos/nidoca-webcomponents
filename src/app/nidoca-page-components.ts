import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";

import {Nidoca} from "..";

@customElement("nidoca-page-components")
export class NidocaPageGallery extends LitElement {
    static styles = css``;

    render(): TemplateResult {
        return html`
            <nidoca-section style="width:50%;">
                <nidoca-layout-spacer top="var(--space-8)" bottom="var(--space-8)">
                    <nidoca-article
                            title="Komponentenübersicht"
                            text="Auf dieser Seite kannst du dir die einzelnen Komponenten von Nidoca anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
                    ></nidoca-article>
                    <nidoca-layout-spacer top="20px"></nidoca-layout-spacer>
                </nidoca-layout-spacer>
            </nidoca-section>

            ${Nidoca.getUniqueInstance().registeredElementNames.map(
                    (elementName) => html`
                        <nidoca-section style="width:50%;padding-top:var(--space)">
                            <nidoca-text type="H4" text="<${elementName}></${elementName}>"></nidoca-text>
                            ${Nidoca.getUniqueInstance().registeredElementsMap.get(elementName)}
                        </nidoca-section>
                    `
            )}
        `;
    }
}
