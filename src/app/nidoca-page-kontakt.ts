import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {CRUDProperty, GenericPostgrestController} from './components/nidoca-generic-crud';
import {NidocaPostgrestClient} from './service/nidoca-postgrest-client';
import {Kontakt} from './model/kontakt';

export class KontaktListController extends GenericPostgrestController<Kontakt> {
  getModel() {
    return new Kontakt();
  }

  getPath(): string {
    return '/kontakt';
  }

  getSectionKey(): string {
    return 'url';
  }

  getPrimaryText(item: Kontakt): string {
    return item.vorname;
  }

  getSecondaryText(item: Kontakt): string {
    return item.name;
  }

  getProperties(): CRUDProperty[] {
    const properties = super.getProperties();
    properties.forEach((propertie: CRUDProperty) => {
      if (propertie.key == 'adresse') propertie.type = 'textarea';
    });
    return properties;
  }

  async search(searchText: string): Promise<Kontakt[]> {
    const result: any[] | undefined = await NidocaPostgrestClient.search(
      this.getPath(),
      '?offset=0&limit=100&order=name.asc&or=('
        .concat('name.like.*')
        .concat(searchText)
        .concat('*')
        .concat(',vorname.like.*')
        .concat(searchText)
        .concat('*')
        .concat(',spitzname.like.*')
        .concat(searchText)
        .concat('*')
        .concat(')')
    );
    return result ? result : [];
  }
}

@customElement('nidoca-page-kontakt')
export class NidocaPageKontakt extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html` <nidoca-generic-crud .controller="${new KontaktListController()}"></nidoca-generic-crud> `;
  }
}
