import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";

import {Nidoca, NidocaFormCombobox, NidocaTypographyType} from "..";

@customElement("nidoca-page-components")
export class NidocaPageGallery extends LitElement {
  static styles = css``;

  @property({type: String})
  elementName: string = "nidoca-article";

  render(): TemplateResult {
    return html`
      <nidoca-section width="50%">
        <nidoca-layout-spacer top="var(--space-max)">
          <nidoca-article
            title="Komponentenübersicht"
            text="Auf dieser Seite kannst du dir die einzelnen Komponenten von Nidoca anschauen. Mithilfe des Konfigurators, kannst du die Komponenten und deren Attribute verwalten und die Verwendung testen. Anschließend kannst du dir den Quellcode für deine entsprechende Umgebung kopieren und die Komponente verwenden."
          ></nidoca-article>
          <nidoca-layout-spacer top="20px"></nidoca-layout-spacer>
          <nidoca-form-combobox
            name="components"
            label="Komponenten"
            value="${this.elementName}"
            .options="${NidocaFormCombobox.stringArrayToOptions(Nidoca.getUniqueInstance().registeredElementNames)}"
            @input="${(event: Event) => {
              this.elementName = (<NidocaFormCombobox>event.target).getOutputData().value;
            }}"
          ></nidoca-form-combobox>
        </nidoca-layout-spacer>
      </nidoca-section>

      <lit-viewer .element="${Nidoca.getUniqueInstance().registeredElementsMap.get(this.elementName)}"></lit-viewer>
    `;
  }
}
