import {css, html, LitElement, PropertyValues} from "lit";
import {customElement, query} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaButtonType, NidocaForm, NidocaFormTextType, NidocaSearchBar, NidocaTextType, NidocaTheme} from ".";
import {NidocaHelperForm} from "@domoskanonos/nidoca-form-helper";
import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";
import {guard} from "lit/directives/guard.js";
import {ifDefined} from "lit/directives/if-defined.js";

export interface CRUDProperty {
  type: string;
  key: string;
  label: string;
  required: boolean;
  step: string;
}

export abstract class GenericCRUDController<T> {
  abstract search(searchText: string): Promise<T[]>;

  abstract update(item: T): Promise<boolean>;

  abstract persist(item: T): Promise<T>;

  abstract delete(item: T): Promise<boolean>;

  abstract getPrimaryIdKey(): string;

  abstract getPrimaryText(item: T): string;

  abstract getSecondaryText(item: T): string;

  abstract getProperties(): CRUDProperty[];

  fromModel(model: any): CRUDProperty[] {
    const properties: CRUDProperty[] = [];
    Object.keys(model).map((key) => {
      const type: any = typeof model[key];
      properties.push(<CRUDProperty>{
        key: key,
        label: key.charAt(0).toUpperCase().concat(key.slice(1)),
        type:
          type == "object" ? (model[key] instanceof Date ? "date" : "object") : type == "boolean" ? "checkbox" : type,
        required: false,
        step: type == "number" ? "any" : undefined,
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

  @property({type: Object, converter: Object})
  item: any;

  properties: CRUDProperty[] = [];

  @property({type: Boolean, converter: String})
  hideSidebox: boolean = true;

  @property({type: Boolean, converter: String})
  showDeleteDialog: boolean = false;

  @property({type: Boolean, converter: String})
  showDuplicateDialog: boolean = false;

  @property({type: NidocaTheme, converter: String})
  theme: string;

  @query("#searchbar")
  private searchbar: NidocaSearchBar | undefined;

  @query("#editForm")
  editForm: NidocaForm | undefined;

  @property({type: String, converter: String})
  errorMessage: string = "";

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

            <div style="display:flex;flex-direction:row;">
              <nidoca-search-bar
                style="flex-basis:auto;"
                id="searchbar"
                @nidoca-search-bar-event-value-changed="${(event: CustomEvent) => {
                  this.controller?.search(event.detail).then((items: any[]) => {
                    this.items = items;
                    this.requestUpdate();
                  });
                }}"
                theme="surface"
              ></nidoca-search-bar>

              <nidoca-button
                style="flex-basis:200px;padding-left:var(--space-2)"
                leadingIcon="add"
                @nidoca-event-button-clicked="${() => {
                  this.initItem({});
                }}"
                >Neuer Vertrag</nidoca-button
              >
            </div>
          </nidoca-box>
          <nidoca-list selectionMode>
            ${this.items.map((item, index) => {
              return html`
                ${index == 0 || this.newSection(this.items[index - 1], item)
                  ? html`<nidoca-list-section>${this.getPrimaryText(item).charAt(0)}</nidoca-list-section>`
                  : html``}
                <nidoca-list-item
                  @nidoca-event-list-item-click="${() => {
                    this.initItem(item);
                  }}"
                  primaryText="${this.getPrimaryText(item)}"
                  secondaryText="${this.getSecondaryText(item)}"
                ></nidoca-list-item>
              `;
            })}
          </nidoca-list>
        </div>

        <div slot="sidebox">
          ${this.item
            ? html`
                <nidoca-box>
                  <nidoca-top-app-bar>
                    <nidoca-text-body slot="left">${this.getPrimaryText(this.item)}</nidoca-text-body>
                    <nidoca-icon
                      style="padding-right: var(--space-2);"
                      icon="done"
                      slot="right"
                      title="Speichern"
                      @nidoca-event-icon-clicked="${() => {
                        this.errorMessage = "";
                        if (this.editForm && this.editForm.validate()) {
                          const nidocaFormHelper: NidocaHelperForm<any> = new NidocaHelperForm();
                          const currentItem = nidocaFormHelper.getCurrent(this);
                          if (currentItem[this.getPrimaryIdKey()] == "") {
                            currentItem[this.getPrimaryIdKey()] = null;
                            this.controller?.persist(currentItem).then((item: any) => {
                              this.item = undefined;
                              this.hideSidebox = true;
                              this.updateList(item);
                            });
                          } else {
                            this.controller?.update(currentItem).then((success: boolean) => {
                              if (success) {
                                this.item = undefined;
                                this.hideSidebox = true;
                                this.updateList(currentItem);
                              } else {
                                this.errorMessage = "Fehler beim Speichern";
                              }
                            });
                          }
                        } else {
                          this.errorMessage = "Das Formular enthält Fehler. Bitte überprüfen Sie den Inhalt";
                        }
                      }}"
                    ></nidoca-icon>

                    <nidoca-icon
                      style="padding-right: var(--space-2);"
                      slot="right"
                      icon="content_copy"
                      @nidoca-event-icon-clicked="${() => {
                        this.showDuplicateDialog = true;
                      }}"
                    ></nidoca-icon>

                    <nidoca-icon
                      style="padding-right: var(--space-2);"
                      slot="right"
                      icon="delete"
                      clickable
                      @nidoca-event-icon-clicked="${() => {
                        this.showDeleteDialog = true;
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
                  ${this.errorMessage ? html`<nidoca-text-error>${this.errorMessage}</nidoca-text-error>` : html``}
                </nidoca-box>

                <nidoca-box>
                  <nidoca-form id="editForm">
                    ${this.properties.map((property: CRUDProperty) => {
                      return html`${property.key == this.getPrimaryIdKey()
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
                              label="${property.label}"
                              value="${this.item[property.key]
                                ? this.nidocaDateHelper.formatDate(this.item[property.key], "yyyy-MM-dd")
                                : ""}"
                              ?required="${property.required}"
                            ></nidoca-form-date>`
                          : property.type == "checkbox"
                          ? html` <nidoca-form-switch
                              name="${property.key}"
                              label="${property.label}"
                              .checked="${this.item[property.key]}"
                            ></nidoca-form-switch>`
                          : property.type == "object"
                          ? html``
                          : property.type == "textarea"
                          ? html`<nidoca-form-textarea
                              type="${property.type}"
                              name="${property.key}"
                              label="${property.label}"
                              value="${this.item[property.key]}"
                              ?required="${property.required}"
                            ></nidoca-form-textarea>`
                          : html`
                              <nidoca-form-text
                                type="${property.type}"
                                step="${ifDefined(property.step)}"
                                name="${property.key}"
                                label="${property.label}"
                                value="${this.item[property.key]}"
                                ?required="${property.required}"
                              >
                              </nidoca-form-text>
                            `}

                        <div style="padding-bottom:var(--space-4)"></div> `;
                    })}
                  </nidoca-form>
                </nidoca-box>
              `
            : html``}
        </div>
      </nidoca-split-screen>

      <nidoca-dialog-decision
        title="Element löschen ?"
        description="Möchtest du das Element wirklich löschen ? Es geht unwiederuflich verloren."
        .show="${this.showDeleteDialog}"
        @nidoca-dialog-decision-no="${() => {
          this.showDeleteDialog = false;
        }}"
        @nidoca-dialog-decision-yes="${() => {
          this.controller?.delete(this.item).then(() => {
            this.controller?.search(this.searchbar ? this.searchbar.value : "").then((items: any[]) => {
              this.items = items;
              this.hideSidebox = true;
              this.showDeleteDialog = false;
              this.requestUpdate();
            });
          });
        }}"
      >
      </nidoca-dialog-decision>

      <nidoca-dialog-decision
        title="Element duplizieren ?"
        description="Möchtest du diese Element wirklich duplizieren ?"
        .show="${this.showDuplicateDialog}"
        @nidoca-dialog-decision-no="${() => {
          this.showDuplicateDialog = false;
        }}"
        @nidoca-dialog-decision-yes="${() => {
          this.item = Object.assign({}, this.item);
          this.item[this.getPrimaryIdKey()] = undefined;
          this.showDuplicateDialog = false;
        }}"
      >
      </nidoca-dialog-decision>
    `;
  }
  updateList(item: any): void {
    let newItem: boolean = true;
    const primaryKey: string | undefined = this.controller?.getPrimaryIdKey();
    if (primaryKey) {
      this.items = this.items.map((listItem) => {
        if (listItem[primaryKey] == item[primaryKey]) {
          newItem = false;
          return item;
        } else {
          return listItem;
        }
      });
      if (item[primaryKey] && newItem) {
        this.items.push(item);
      }
    }
  }

  initItem(item: any) {
    this.item = item;
    this.hideSidebox = false;
  }

  getPrimaryIdKey() {
    return this.controller ? this.controller.getPrimaryIdKey() : "id";
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
}
