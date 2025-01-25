import { html, TemplateResult } from 'lit-element';
import { NidocaForm, NidocaHtml, NidocaRouter } from '../nidoca-webcomponents';
import { property, query } from 'lit/decorators.js';

export abstract class NidocaGenericEdit<T> extends NidocaHtml {

  identifier: any = null;

  item: T = <T>{};

  protected constructor() {
    super();
    this.init();
  }
  init() {
    this.identifier = this.getIdentifier();
    this.item = this.initObject();
  }

  abstract getIdentifier(): any;

  abstract initObject(): T;







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
      <nidoca-form id="form">
        ${this.renderFormFields()}
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

  abstract executeSave(item: T): Promise<T>;

  abstract executeUpdate(identifier: any, item: T): Promise<T>;

  abstract executeDelete(identifier: any): Promise<void>;

  abstract itemToProperties(item: T): void;


  deleteItemHideDialog() {
    if (this.identifier != null) {
      this.showDeleteDialog = false;
      this.deleteItem();
    }
  }

  deleteItem() {
    if (this.identifier != null) {
      this.executeDelete(this.identifier).then(() => {
        console.log('item deleted.');
        NidocaRouter.getUniqueInstance().back();
      });
    }
  }

  updateItem() {
    if (this.formComponent != null && this.formComponent.validate()) {
      this.item = this.formComponent.getOutputData().jsonObject;
      if (this.identifier != null) {
        console.log('save item, identifier {}', this.identifier);
        this.executeUpdate(this.identifier, this.item).then((item) => {
          this.item = item;
          NidocaRouter.getUniqueInstance().back();
        });
      }
    }
  }

  saveItem() {
    if (this.formComponent != null && this.formComponent.validate()) {
      this.item = this.formComponent.getOutputData().jsonObject;
      if (this.identifier == null) {
        console.log('save item, identifier {}', this.identifier);
        this.executeSave(this.item).then((item: T) => {
          this.identifier = (item as any)[this.getIdentifier()];
          this.item = item;
          NidocaRouter.getUniqueInstance().back();
        });
      }
    }
  }
}
