import {css, html, LitElement, PropertyValues} from "lit";
import {customElement, query} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaFormTextType, NidocaSearchBar, NidocaTextType, NidocaTheme} from ".";
import {NidocaHelperForm} from "@domoskanonos/nidoca-form-helper";
import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";

export interface CRUDProperty {
  type: string;
  key: string;
}

export abstract class GenericCRUDController<T> {
  abstract search(searchText: string): Promise<T[]>;

  abstract save(item: T): Promise<T>;

  abstract getPrimaryText(item: T): string;

  abstract getSecondaryText(item: T): string;

  abstract getProperties(): CRUDProperty[];

  fromModel(model: any): CRUDProperty[] {
    const properties: CRUDProperty[] = [];
    Object.keys(model).map((key) => {
      const type: any = typeof model[key];
      properties.push(<CRUDProperty>{
        key: key,
        type: type == "object" ? (model[key] instanceof Date ? "date" : "object") : type,
      });
    });
    return properties;
  }
}

@customElement("nidoca-generic-crud")
export class NidocaGenericCRUD extends LitElement {
  static styles = css``;

  @property({type: Object, converter: Object})
  controller: GenericCRUDController<any> | undefined;

  private nidocaDateHelper: NidocaDateHelper = new NidocaDateHelper();

  items: any[] = [];

  item: any = {};

  properties: CRUDProperty[] = [];

  @property({type: Boolean, converter: String})
  hideSidebox: boolean = true;

  @property({type: NidocaTheme, converter: String})
  theme: string;

  @query("#searchbar")
  private searchbar: NidocaSearchBar | undefined;

  constructor() {
    super();
    this.theme = NidocaTheme.prototype.getParentTheme(this) || NidocaTheme.BACKGROUND;
  }

  updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    changedProperties.forEach((_oldValue, propName) => {
      if (propName == "controller" && this.controller) {
        this.properties = this.controller.getProperties();
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
              id="searchbar"
              @nidoca-search-bar-event-value-changed="${(event: CustomEvent) => {
                this.controller?.search(event.detail).then((items: any[]) => {
                  this.items = items;
                  this.requestUpdate();
                });
              }}"
              theme="surface"
            ></nidoca-search-bar>
          </nidoca-box>
          <nidoca-list selectionMode>
            ${this.items.map((item, index) => {
              return html`
                ${index == 0 || this.newSection(this.items[index - 1], item)
                  ? html`<nidoca-list-section>${this.getPrimaryText(item).charAt(0)}</nidoca-list-section>`
                  : html``}
                <nidoca-list-item
                  @nidoca-event-list-item-click="${() => {
                    this.item = item;
                    this.hideSidebox = false;
                    this.requestUpdate();
                  }}"
                  primaryText="${this.getPrimaryText(item)}"
                  secondaryText="${this.getSecondaryText(item)}"
                ></nidoca-list-item>
              `;
            })}
          </nidoca-list>
        </div>

        <div slot="sidebox">
          <nidoca-box>
            <nidoca-top-app-bar>
              <nidoca-text slot="left">${this.getPrimaryText(this.item)}</nidoca-text>
              <nidoca-icon
                style="padding-right: var(--space-2);"
                icon="done"
                slot="right"
                title="Speichern"
                @click="${() => {
                  this.controller?.save(this.item).then((item: any) => {
                    this.item = item;
                    this.controller?.search(this.searchbar ? this.searchbar.value : "").then((items: any[]) => {
                      this.items = items;
                      this.requestUpdate();
                    });
                  });
                }}"
              ></nidoca-icon>
              <nidoca-icon
                slot="right"
                icon="close"
                clickable
                @nidoca-event-icon-clicked="${() => {
                  this.hideSidebox = true;
                }}"
              ></nidoca-icon>
            </nidoca-top-app-bar>
            <nidoca-hr></nidoca-hr>
          </nidoca-box>

          <nidoca-box>
            <nidoca-form id="editElement" @input="${() => this.inputChanged()}">
              ${this.properties.map((property: CRUDProperty) => {
                return html`${property.key == "id"
                    ? html`
                        <nidoca-form-text
                          type="${NidocaFormTextType.HIDDEN}"
                          name="${property.key}"
                          value="${this.item[property.key]}"
                        >
                        </nidoca-form-text>
                      `
                    : property.type == "date"
                    ? html` <nidoca-form-date
                        name="${property.key}"
                        label="${property.key}"
                        value="${this.item[property.key]
                          ? this.nidocaDateHelper.formatDate(this.item[property.key], "yyyy-MM-dd")
                          : ""}"
                      ></nidoca-form-date>`
                    : property.type == "boolean"
                    ? html` <nidoca-form-switch
                        name="${property.key}"
                        label="${property.key}"
                        .checked="${this.item[property.key]}"
                      ></nidoca-form-switch>`
                    : property.type == "object"
                    ? html``
                    : html`
                        <nidoca-form-text
                          type="${property.type}"
                          name="${property.key}"
                          label="${property.key}"
                          value="${this.item[property.key]}"
                        >
                        </nidoca-form-text>
                      `}

                  <div style="padding-bottom:var(--space-4)"></div> `;
              })}
            </nidoca-form>
          </nidoca-box>
        </div>
      </nidoca-split-screen>
    `;
  }
  newSection(previousItem: any, item: any) {
    if (this.controller && previousItem) {
      const previousPrimaryText = this.controller?.getPrimaryText(previousItem);
      const primaryText = this.controller?.getPrimaryText(item);
      return previousPrimaryText.charAt(0) != primaryText.charAt(0);
    } else {
      return false;
    }
  }

  getPrimaryText(item: any): string {
    return this.controller ? this.controller.getPrimaryText(item) : "";
  }

  getSecondaryText(item: any): string {
    return this.controller ? this.controller.getSecondaryText(item) : "";
  }

  inputChanged(): void {
    const nidocaFormHelper: NidocaHelperForm<any> = new NidocaHelperForm();
    this.item = nidocaFormHelper.getCurrent(this);
  }
}
