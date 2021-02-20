import {FormProperties, NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-form-output-data-showcase-page')
export class NidocaFormOutputDataShowcasePage extends NidocaTemplate {
  @property()
  jsonObject: any | undefined | null = undefined;

  @property()
  formData: FormData | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
  getLeftNavigationContent(): TemplateResult {
    return html``;
  }
  getTopContent(): TemplateResult {
    return html``;
  }
}
@customElement('nidoca-form-showcase-page')
export class NidocaFormShowcasePage extends NidocaTemplate {
  @property()
  formProperties: FormProperties[] | undefined | null = [];

  @property()
  autocomplete: boolean | undefined | null = false;

  @property()
  slotElement: HTMLSlotElement | undefined | null = undefined;

  @property()
  htmlForm: HTMLFormElement | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
  getLeftNavigationContent(): TemplateResult {
    return html``;
  }
  getTopContent(): TemplateResult {
    return html``;
  }
}
