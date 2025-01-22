import { css, html, PropertyValues, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { NidocaAbstractGenericListCRUD } from '../../abstract/generic-list-crud';
import { Person } from '../../util/nidoca-indexdb';
import { NidocaImgHelper } from '../../nidoca-webcomponents';

@customElement('person-list-crud')
export class NidocaListCRUD extends NidocaAbstractGenericListCRUD<Person> {
  @property({ type: Array })
  persons: Person[] = [];

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.data = this.persons;
  }

  protected updated(changedProperties: PropertyValues): void {
    // Überprüfen, ob die Eigenschaft "persons" aktualisiert wurde
    if (changedProperties.has('persons')) {
      console.log('Persons property updated:', this.persons);
      this.data = this.persons; // Aktualisiere die Daten oder führe weitere Aktionen aus
    }
  }

  protected search(searchText: string): Person[] {
    return this.persons.filter((item) => {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  protected renderListItem(item: Person): TemplateResult {
    return html`
      <nidoca-list-item
        @click="${() => this.itemClicked(item)}"
        theme="${this.theme}"
        primaryText="${item.name || ''}"
        secondaryText="${item.email || ''}"
        tertiaryText="${item.phone || ''}"
        infoText="${item.energy || ''}"
      >
        <nidoca-img-round
          width="64px"
          height="64px"
          slot="left"
          src="${item.image ? item.image : NidocaImgHelper.renderImgText(item.name)}"
        ></nidoca-img-round>
        <nidoca-icon slot="right" icon=""></nidoca-icon>
      </nidoca-list-item>
    `;
  }

  itemClicked(item: Person): void {
    console.log('Item clicked:', item);
    // Implementiere die gewünschte Funktionalität
  }
}
