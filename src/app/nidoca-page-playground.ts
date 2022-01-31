import {css, html, LitElement, TemplateResult} from "lit";
import {customElement, property} from "lit/decorators.js";

import {Nidoca, NidocaFormCombobox} from "..";

@customElement("nidoca-page-playground")
export class NidocaPagePlayground extends LitElement {
  static styles = css``;

  @property({type: String})
  elementName: string = "nidoca-dialog";

  render(): TemplateResult {
    return html`
      <nidoca-section style="width:50%;">
        <nidoca-layout-spacer top="var(--space-8)" bottom="var(--space-8)">
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

      <nidoca-section style="width:50%;">
        <webcomponent-viewer>
          ${Nidoca.getUniqueInstance().registeredElementsMap.get(this.elementName)}
        </webcomponent-viewer>
      </nidoca-section>
    `;
  }
}
