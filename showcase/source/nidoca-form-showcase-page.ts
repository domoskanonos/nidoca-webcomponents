import {FormProperties} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-output-data-showcase-page')
export class NidocaFormOutputDataShowcasePage extends NidocaShowcaseTemplate {
  @property()
  jsonObject: any | undefined | null = undefined;

  @property()
  formData: FormData | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
@customElement('nidoca-form-showcase-page')
export class NidocaFormShowcasePage extends NidocaShowcaseTemplate {
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
}
