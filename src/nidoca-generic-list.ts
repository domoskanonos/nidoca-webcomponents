import {css, html, LitElement, PropertyValues} from "lit";
import {customElement} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaTextType} from ".";

export abstract class GenericListController<T> {
  abstract search(searchText: string): Promise<T[]>;
  abstract getPrimaryText(item: T): string;
}

@customElement("nidoca-generic-list")
export class NidocaGenericList extends LitElement {
  static styles = css``;

  @property({type: Object, converter: Object})
  controller: GenericListController<any> | undefined;

  items: any[] = [];

  item: any = {};

  @property({type: Boolean, converter: String})
  hideSidebox: boolean = true;

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    changedProperties.forEach((_oldValue, propName) => {
      if (propName == "controller" && this.controller) {
        this.controller.search("").then((items: any[]) => {
          this.items = items;
          this.requestUpdate();
        });
      }
    });
  }

  render(): any {
    return html`
      <nidoca-split-screen .hideSidebox="${this.hideSidebox}">
        <div slot="left">
          <nidoca-box>
            <nidoca-text type="${NidocaTextType.H2}">Verträge</nidoca-text>
            <nidoca-text type="${NidocaTextType.CAPTION}">${this.items.length} Verträge</nidoca-text>
            <nidoca-search-bar
              @nidoca-search-bar-event-value-changed="${(event: CustomEvent) => {
                this.controller?.search(event.detail).then((items: any[]) => {
                  this.items = items;
                  this.requestUpdate();
                });
              }}"
              theme="surface"
            ></nidoca-search-bar>
          </nidoca-box>
          <nidoca-list theme="secondary" selectionMode>
            ${this.items.map((item) => {
              return html`
                <nidoca-list-item
                  @nidoca-event-list-item-click="${() => {
                    this.item = item;
                    this.hideSidebox = false;
                    this.requestUpdate();
                  }}"
                  primaryText="${this.getPrimaryText(item)}"
                  secondaryText=""
                ></nidoca-list-item>
              `;
            })}
            <nidoca-list-section>A</nidoca-list-section>
          </nidoca-list>
        </div>

        <div slot="sidebox">
          <div>${this.getPrimaryText(this.item)}</div>
          <nidoca-button
            @nidoca-event-button-clicked="${() => {
              this.hideSidebox = true;
            }}"
            >Schließen</nidoca-button
          >
        </div>
      </nidoca-split-screen>
    `;
  }

  getPrimaryText(item: any): string {
    return this.controller ? this.controller.getPrimaryText(item) : "";
  }
}
