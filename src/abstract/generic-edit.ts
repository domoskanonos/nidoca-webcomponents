import { html, TemplateResult } from 'lit-element';
import { NidocaForm, NidocaHtml, NidocaRouter } from '../nidoca-webcomponents';
import { property, query } from 'lit/decorators';

export abstract class NidocaAbstractComponentEdit<T> extends NidocaHtml {

  identifier: any = null;

  item: T = <T>{};

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

  abstract getItemById(identifier: any): Promise<T>;

  abstract executeSave(item: T): Promise<T>;

  abstract executeUpdate(identifier: any, item: T): Promise<T>;

  abstract executeDelete(identifier: any): Promise<void>;

  abstract renderFormFields(): TemplateResult;

  abstract itemToProperties(item: T): void;

  abstract getIdentifier(item: T): any;

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
        this.executeSave(this.item).then((item) => {
          this.identifier = this.getIdentifier(item);
          this.item = item;
          NidocaRouter.getUniqueInstance().back();
        });
      }
    }
  }
}
