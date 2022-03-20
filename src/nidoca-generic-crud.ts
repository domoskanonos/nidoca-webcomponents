import {css, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {customElement, query} from "lit/decorators.js";
import {property} from "lit/decorators.js";
import {NidocaForm, NidocaFormTextType, NidocaSearchBar, NidocaTheme} from ".";
import {NidocaHelperForm} from "@domoskanonos/nidoca-form-helper";
import {NidocaDateHelper} from "@domoskanonos/nidoca-date-helper";
import {ifDefined} from "lit/directives/if-defined.js";
import {NidocaPostgrestClient} from "./app/service/nidoca-postgrest-client";

export type CRUDPropertyType = "id" | "object" | "date" | "checkbox" | "number" | "any" | "textarea" | "1:n";

export interface CRUDProperty {
  type: CRUDPropertyType;
  key: string;
  required: boolean;
  step: string;
}

export enum CRUDLabelKeys {
  MODEL_SINGLE = "MODEL_SINGLE",
  MODEL_MULTI = "MODEL_MULTI",
}

export abstract class GenericCRUDController<T> {
  abstract search(searchText: string): Promise<T[]>;

  abstract update(item: T): Promise<boolean>;

  abstract persist(item: T): Promise<T>;

  abstract delete(item: T): Promise<boolean>;

  /**
   * returned section text for new section in list view.
   */
  abstract getSectionText(item: T): string;

  /**
   * method to identify when a new section should be include in list view.
   * returned true, if new section should be inserted, false if not.
   *
   */
  abstract newSection(previousItem: T, item: T): boolean;

  abstract getPrimaryIdKey(): string;

  private labels: Map<string, string>;

  private properties: CRUDProperty[];

  constructor() {
    let model: any = this.getModel();
    this.labels = new Map<string, string>();
    this.labels.set(CRUDLabelKeys.MODEL_SINGLE, model.constructor.name);
    this.labels.set(CRUDLabelKeys.MODEL_MULTI, model.constructor.name);
    Object.keys(model).map((key) => {
      this.labels.set(key, key.charAt(0).toUpperCase().concat(key.slice(1)));
    });
    this.properties = [];
    Object.keys(model).map((key) => {
      const type: any = typeof model[key];
      this.properties.push(<CRUDProperty>{
        key: key,
        type:
          this.getPrimaryIdKey() == key
            ? "id"
            : type == "object"
            ? model[key] instanceof Date
              ? "date"
              : "object"
            : type == "boolean"
            ? "checkbox"
            : type,
        required: false,
        step: type == "number" ? "any" : undefined,
      });
    });
  }

  getText(key: string): string {
    const value = this.labels.get(key);
    return value ? value : "";
  }

  getPropertie(key: string): CRUDProperty | undefined {
    const properties = this.getProperties();
    for (let i = 0; i < properties.length; i++) {
      const propertie: CRUDProperty = properties[i];
      if (propertie.key == key) {
        return propertie;
      }
    }
    return undefined;
  }

  getProperties(): CRUDProperty[] {
    return this.properties;
  }

  abstract getModel(): T;

  abstract getPrimaryText(item: T): string;

  abstract getSecondaryText(item: T): string;
}

export abstract class GenericPostgrestController<T> extends GenericCRUDController<T> {
  delete(item: any): Promise<boolean> {
    return NidocaPostgrestClient.delete(this.getPath(), item[this.getPrimaryIdKey()]);
  }

  persist(item: any): Promise<any> {
    delete item[this.getPrimaryIdKey()];
    return NidocaPostgrestClient.persist(this.getPath(), item);
  }

  update(item: any): Promise<boolean> {
    return NidocaPostgrestClient.update(this.getPath(), item[this.getPrimaryIdKey()], item);
  }

  getPrimaryIdKey(): string {
    return "id";
  }

  getSectionText(item: any): string {
    const nidocaDateHelper: NidocaDateHelper = new NidocaDateHelper();
    const sectionKey = this.getSectionKey();
    const sectionPropertie = this.getPropertie(sectionKey);
    if (sectionPropertie) {
      switch (sectionPropertie.type) {
        case "date":
          return nidocaDateHelper.formatDate(item.ablaufdatum, "dd.MM.yyyy");
        default:
          return item.name.charAt(0);
      }
    }
    return "";
  }

  newSection(previousItem: any, item: any): boolean {
    if (previousItem) {
      const sectionKey = this.getSectionKey();
      const sectionPropertie = this.getPropertie(sectionKey);
      if (sectionPropertie) {
        const previousSectionText = this.getSectionText(previousItem);
        const sectionText = this.getSectionText(item);
        switch (sectionPropertie.type) {
          case "date":
            return item[sectionKey].getTime() > previousItem[sectionKey].getTime();
          default:
            return previousSectionText.charAt(0) != sectionText.charAt(0);
        }
      }
    }
    return false;
  }

  abstract getPath(): string;

  abstract getSectionKey(): string;
}

@customElement("nidoca-generic-crud")
export class NidocaGenericCRUD extends LitElement {
  static styles = css`
    .formElement {
      padding-bottom: var(--space-2);
    }
  `;

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
            <nidoca-text-h2>${this.controller?.getText(CRUDLabelKeys.MODEL_SINGLE)}</nidoca-text-h2>
            <nidoca-text-caption
              >${this.items.length} ${this.controller?.getText(CRUDLabelKeys.MODEL_MULTI)}
            </nidoca-text-caption>
            <nidoca-search-bar
              style="flex-basis:auto;"
              id="searchbar"
              placeholder="Suche..."
              @nidoca-search-bar-event-value-changed="${(event: CustomEvent) => {
                const searchText = event.detail;
                this.search(searchText);
              }}"
            ></nidoca-search-bar>
          </nidoca-box>
          <nidoca-list selectionMode>
            ${this.items.map((item, index) => {
              return html`
                ${index == 0 || this.controller?.newSection(this.items[index - 1], item)
                  ? html` <nidoca-list-section>${this.controller?.getSectionText(item)} </nidoca-list-section>`
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
                  <nidoca-top-app-bar theme="background">
                    <nidoca-text-body slot="left">
                      ${this.controller?.getText(CRUDLabelKeys.MODEL_SINGLE)}
                    </nidoca-text-body>
                    <nidoca-icon
                      style="padding-right: var(--space-2);"
                      icon="done"
                      slot="right"
                      title="Speichern"
                      @nidoca-event-icon-clicked="${() => {
                        this.errorMessage = "";
                        if (this.editForm && this.editForm.validate()) {
                          const nidocaFormHelper: NidocaHelperForm<any> = new NidocaHelperForm();
                          const currentItem = nidocaFormHelper.getCurrent(this.editForm);
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
                  ${this.errorMessage ? html` <nidoca-text-error>${this.errorMessage}</nidoca-text-error>` : html``}
                </nidoca-box>

                <nidoca-box>
                  <nidoca-form id="editForm">
                    ${this.properties.map((property: CRUDProperty) => {
                      let templateResult: TemplateResult;
                      switch (property.type) {
                        case "id":
                          templateResult = html`
                            <nidoca-form-text
                              class="formElement"
                              type="${NidocaFormTextType.HIDDEN}"
                              name="${property.key}"
                              value="${this.item[property.key]}"
                            >
                            </nidoca-form-text>
                          `;
                          break;
                        case "any":
                        case "object":
                          templateResult = html``;
                          break;
                        case "date":
                          templateResult = html` <nidoca-form-date
                            class="formElement"
                            name="${property.key}"
                            label="${this.controller ? this.controller?.getText(property.key) : ""}"
                            value="${this.item[property.key]
                              ? this.nidocaDateHelper.formatDate(this.item[property.key], "yyyy-MM-dd")
                              : ""}"
                            ?required="${property.required}"
                          ></nidoca-form-date>`;
                          break;
                        case "checkbox":
                          templateResult = html` <nidoca-form-switch
                            class="formElement"
                            name="${property.key}"
                            label="${this.controller ? this.controller?.getText(property.key) : ""}"
                            .checked="${this.item[property.key]}"
                          ></nidoca-form-switch>`;
                          break;
                        case "textarea":
                          templateResult = html` <nidoca-form-textarea
                            class="formElement"
                            type="${property.type}"
                            name="${property.key}"
                            label="${this.controller ? this.controller?.getText(property.key) : ""}"
                            value="${this.item[property.key]}"
                            ?required="${property.required}"
                          ></nidoca-form-textarea>`;
                          break;
                        case "1:n":
                          templateResult = html``;
                          break;
                        case "number":
                        default:
                          templateResult = html` <nidoca-form-text
                            class="formElement"
                            type="text"
                            step="${ifDefined(property.step)}"
                            name="${property.key}"
                            label="${this.controller ? this.controller?.getText(property.key) : ""}"
                            value="${this.item[property.key]}"
                            ?required="${property.required}"
                          >
                          </nidoca-form-text>`;
                          break;
                      }
                      return templateResult;
                    })}
                  </nidoca-form>
                  <slot></slot>
                </nidoca-box>
              `
            : html``}
        </div>
      </nidoca-split-screen>

      <nidoca-layout-floating bottom="4vw" right="4vw">
        <nidoca-icon-extended
          icon="add"
          style="font-size: var(--icon-size-max);"
          clickable
          @nidoca-event-icon-clicked="${() => {
            this.initItem({});
          }}"
        >
        </nidoca-icon-extended>
      </nidoca-layout-floating>

      <nidoca-dialog-decision
        title="Element löschen ?"
        description="Möchtest du das Element wirklich löschen ? Es geht unwiederuflich verloren."
        .show="${this.showDeleteDialog}"
        @nidoca-dialog-decision-no="${() => {
          this.showDeleteDialog = false;
        }}"
        @nidoca-dialog-decision-yes="${() => {
          this.controller?.delete(this.item).then(() => {
            this.hideSidebox = true;
            this.showDeleteDialog = false;
            this.search(this.searchbar ? this.searchbar.value : "");
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

  private search(searchText: string) {
    this.controller?.search(searchText).then((items: any[]) => {
      this.items = items;
      this.requestUpdate();
    });
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
    this.dispatchEvent(
      new CustomEvent("nidoca-event-generic-crud-new-item", {detail: item, bubbles: true, composed: true})
    );
  }

  getPrimaryIdKey() {
    return this.controller ? this.controller.getPrimaryIdKey() : "id";
  }

  getPrimaryText(item: any): string {
    return this.controller ? this.controller.getPrimaryText(item) : "";
  }

  getSecondaryText(item: any): string {
    return this.controller ? this.controller.getSecondaryText(item) : "";
  }
}
