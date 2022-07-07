import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement} from 'lit/decorators.js';
import {GenericPostgrestController} from './components/nidoca-generic-crud';
import {NidocaPostgrestClient} from './service/nidoca-postgrest-client';
import {Modul} from './model/projekt';

export class ModulListController extends GenericPostgrestController<Modul> {
  getModel() {
    return new Modul();
  }

  getPath(): string {
    return '/modul';
  }

  getSectionKey(): string {
    return 'url';
  }

  getPrimaryText(item: Modul): string {
    return item.name;
  }

  getSecondaryText(item: Modul): string {
    return item.name;
  }

  async search(searchText: string): Promise<Modul[]> {
    const result: any[] | undefined = await NidocaPostgrestClient.search(
      this.getPath(),
      '?offset=0&limit=100&order=name.asc&name=like.*'
        .concat(searchText)
        .concat('*')
        .concat(history.state ? (history.state.searchParam ? history.state.searchParam : '') : '')
    );
    return result ? result : [];
  }
}

@customElement('nidoca-page-modul')
export class NidocaPageModul extends LitElement {
  static styles = css``;

  render(): TemplateResult {
    return html` <nidoca-generic-crud .controller="${new ModulListController()}"></nidoca-generic-crud> `;
  }
}
