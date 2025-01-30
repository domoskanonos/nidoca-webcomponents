import { html, TemplateResult } from 'lit-element';
import { NidocaForm, NidocaHtml, NidocaUtil } from '../nidoca-webcomponents';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('nidoca-generic-edit')
export class NidocaGenericEdit extends NidocaHtml {

  @property({ type: Object })
  key: keyof any | null = null;

  @property({ type: Object })
  item: any = {};

  @property({ type: String })
  title: string = "";

  updated(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('item')) {
      this.title = (this.item as any).constructor.name;
    }
  }
  @query('#form')
  formComponent: NidocaForm | undefined;

  render() {
    return html`
    <nidoca-container>
      <nidoca-top-app-bar style="min-height: 48px;" prominent>
          <nidoca-text-body slot="left">${this.title}</nidoca-text-body>
          <nidoca-icon slot="right" style="padding-right:var(--space)" icon="save" @click="${() => this.saveItem()}"></nidoca-icon>
          <nidoca-icon slot="right" style="padding-right:var(--space)" icon="delete" @click="${() => this.deleteItem()}"></nidoca-icon>
          <nidoca-icon slot="right" style="padding-right:var(--space)" icon="cancel" @click="${() => this.cancel()}" clickable ></nidoca-icon>
        </nidoca-top-app-bar>
      <nidoca-form id="form">
        ${this.renderFormFields()}
        <input type="hidden" name="${this.key}" value="${this.item[this.key as keyof any]}"/>
      </nidoca-form>
    </nidoca-container>
    `;
  }

  renderFormFields(): TemplateResult {
    const fields: TemplateResult[] = [];
    for (const [propertyKey, propertyValue] of Object.entries(this.item as Record<string, unknown>)) {
      let propertyName = NidocaUtil.capitalizeFirstLetter(propertyKey);
      let field: TemplateResult;
      switch (typeof propertyValue) {
        case 'boolean':
          field = html`
            <nidoca-form-switch
              style="padding-bottom:var(--space-2);"
              label="${propertyName}"
              name="${propertyKey}"
              .value="${propertyValue ? propertyValue as boolean:""}"
            ></nidoca-form-switch>
          `;
          break;
        case 'string':
          field = html`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${propertyName}"
              name="${propertyKey}"
              .value="${propertyValue ? propertyValue as string:""}"
            ></nidoca-form-text>
          `;
          break;
        case 'number':
          field = html`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${propertyName}"
              name="${propertyKey}"
              type="number"
              .value="${propertyValue ? propertyValue as number: ""}"
            ></nidoca-form-text>
          `;
          break;
        default:
          field = html`
            <nidoca-form-text
              style="padding-bottom:var(--space-2);"
              label="${propertyName}"
              name="${propertyKey}"
              .value="${propertyValue ?JSON.stringify(propertyValue): propertyValue}"
            ></nidoca-form-text>
          `;
      }
      fields.push(field);
    }
    return html`${fields}`;
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

  cancel() {
    this.throwCustomEvent("nidoca-event-generic-edit-cancel", this.item);
  }


}
