import { css, html, PropertyValues, TemplateResult } from 'lit';
import { NidocaGenericListSearch } from '../../abstract/generic-list-search';
import { customElement, property } from 'lit/decorators.js';
import { NidocaImgHelper } from '../../nidoca-webcomponents';
import { Person } from './person';

@customElement('person-list-search')
export class PersonListSearch extends NidocaGenericListSearch<Person> {

  getKey() {
    "id";
  }

  initObject(): Person {
    return new Person();
  }


  protected search(searchText: string): Person[] {
    return this.data.filter((item) => {
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
