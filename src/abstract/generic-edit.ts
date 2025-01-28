import { html, TemplateResult } from 'lit-element';
import { NidocaForm, NidocaHtml, NidocaRouter } from '../nidoca-webcomponents';
import { property, query } from 'lit/decorators.js';

export abstract class NidocaGenericEdit<T> extends NidocaHtml {

  key: any = null;

  item: T = <T>{};

  protected constructor() {
    super();
    this.init();
  }
  init() {
    this.key = this.getKey();
    this.item = this.initObject();
  }

  abstract getKey(): any;

  abstract initObject(): T;

  abstract cancel(): void;


  @property()
  dialogDeleteTitle: string = "";

  @property()
  dialogDeleteDescription: string = "";

  @property()
  showDeleteDialog: boolean = false;

  @query('#form')
  formComponent: NidocaForm | undefined;

  render() {
    return html`
    <h2>Person</h2>
    <nidoca-form id="form">
      ${this.renderFormFields()}
      <input type="hidden" name="${this.key}" value="${this.item[this.key]}"/>
      <nidoca-button style="padding-bottom:var(--space-2);" @click="${()=>this.saveItem()}">Speichern</nidoca-button>
      <nidoca-button style="padding-bottom:var(--space-2);" @click="${()=>this.cancel()}">Abbrechen</nidoca-button>
      <nidoca-button style="padding-bottom:var(--space-2);" @click="${()=>this.deleteItem()}">Löschen</nidoca-button>
    </nidoca-form>

    <decision-dialog-component
      @decision-dialog-component-ok-event="${() => this.deleteItemHideDialog()}"
      @decision-dialog-component-cancel-event="${() => (this.showDeleteDialog = false)}"
      title="${this.dialogDeleteTitle}"
      description="${this.dialogDeleteDescription}"
      .showDialog="${this.showDeleteDialog}"
    ></decision-dialog-component>
    `;
  }

  /**
   * Hier erfolgt die dynamische Erzeugung der Eingabefelder.
   */
  renderFormFields(): TemplateResult {
    const fields: TemplateResult[] = [];

    console.log('item', this.item);
    // Per Object.entries(this.item) kannst du Schlüssel und Wert iterieren.
    for (const [propertyKey, propertyValue] of Object.entries(this.item as Record<string, unknown>)) {
      // Wir prüfen den Typ des Wertes, um das passende Eingabefeld zu generieren
      let field: TemplateResult;

      switch (typeof propertyValue) {
        case 'boolean':
          // Beispiel: Checkbox / Switch
          field = html`
            <nidoca-form-switch
              style="padding-bottom:var(--space-2);"
              label="${propertyKey}"
              name="${propertyKey}"
              .value="${propertyValue as boolean}"
            ></nidoca-form-switch>
          `;
          break;

        case 'string':
          // Beispiel: Textfeld
          field = html`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${propertyKey}"
              name="${propertyKey}"
              .value="${propertyValue as string}"
            ></nidoca-form-text>
          `;
          break;

        case 'number':
          // Beispiel: Zahlenfeld (falls gewünscht)
          field = html`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${propertyKey}"
              name="${propertyKey}"
              type="number"
              .value="${propertyValue as number}"
            ></nidoca-form-text>
          `;
          break;

        default:
          // Fallback: für komplexere Strukturen, Arrays, Objekte etc.
          field = html`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${propertyKey}"
              name="${propertyKey}"
              .value="${JSON.stringify(propertyValue)}"
            ></nidoca-form-text>
          `;
      }

      fields.push(field);
    }

    // Rückgabe der erzeugten Felder als TemplateResult
    return html`${fields}`;
  }

  abstract getItemById(identifier: any): Promise<T>;

  abstract itemToProperties(item: T): void;


  deleteItemHideDialog() {
      this.showDeleteDialog = false;
      this.deleteItem();
  }

  deleteItem() {
    if (this.formComponent != null) {
      console.log('item deleted.');
      this.item = this.formComponent.getOutputData().jsonObject;
      this.throwCustomEvent("nidoca-event-generic-edit-item-deleted", this.item);
    }
  }

  updateItem() {
    if (this.formComponent != null && this.formComponent.validate()) {
      this.item = this.formComponent.getOutputData().jsonObject;
      this.throwCustomEvent("nidoca-event-generic-edit-item-updated", this.item);
    }
  }

  saveItem() {
    if (this.formComponent != null && this.formComponent.validate()) {
      this.item = this.formComponent.getOutputData().jsonObject;
      this.throwCustomEvent("nidoca-event-generic-edit-item-saved", this.item);
    }
  }

}
