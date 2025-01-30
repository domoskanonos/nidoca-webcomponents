import { html, TemplateResult } from "lit-html";
import { NidocaGenericList } from "./generic-list";
import { css } from "lit";
import { customElement, property } from 'lit/decorators.js';

@customElement('nidoca-generic-list-search')
export class NidocaGenericListSearch extends NidocaGenericList {

  static styles = css`
    :host {
      display: block;
      max-width: 768px;
      margin: 0 auto;
      line-height: 0;
    }
  `;

  render() {
    return html`
    <nidoca-search-bar @nidoca-search-bar-event-value-changed="${(event: CustomEvent) => this.internSearch(event.detail)}"></nidoca-search-bar>
    ${super.render()}
            `;
  }

  private internSearch(searchText: string) {
    this.data = this.search(searchText);
  }

  protected search(searchText: string): any[] {
    
  }

  protected renderListItem(item: any): TemplateResult {
    throw new Error("Method not implemented.");
  }
  itemClicked(item: any): void {
    throw new Error("Method not implemented.");
  }

}


