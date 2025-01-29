import { html, TemplateResult } from "lit-html";
import { property, state } from 'lit/decorators.js';
import { NidocaGenericList } from "./generic-list";
import { css } from "lit";

export abstract class NidocaGenericListSearch extends NidocaGenericList {

  static styles = css`
    :host {
      display: block;
      max-width: 768px;
      margin: 0 auto;
      line-height: 0;
    }
  `;

  @property({ type: String })
  imgSrc: string = '';

  render() {
    return html`
    <nidoca-img src="${this.imgSrc}" alt=""></nidoca-img>
    <nidoca-search-bar @nidoca-search-bar-event-value-changed="${(event: CustomEvent) => this.internSearch(event.detail)}"></nidoca-search-bar>
    ${super.render()}
            `;
  }

  private internSearch(searchText: string) {
    this.data = this.search(searchText);
  }

  protected abstract search(searchText: string): any[];

}


