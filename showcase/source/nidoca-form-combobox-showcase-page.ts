import {FormOutputData} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-combobox-showcase-page')
export class NidocaFormComboboxShowcasePage extends NidocaShowcaseTemplate {
  @property()
  name: string | undefined | null = '';

  @property()
  value: any | undefined | null = undefined;

  @property()
  label: string | undefined | null = '';

  @property()
  options: FormOutputData[] | undefined | null = [];

  @property()
  required: boolean | undefined | null = false;

  @property()
  errorText: string | undefined | null = '';

  @property()
  infoText: string | undefined | null = '';

  @property()
  warningText: string | undefined | null = '';

  @property()
  size: number | undefined | null = undefined;

  @property()
  multiple: boolean | undefined | null = false;

  @property()
  selectElement: HTMLSelectElement | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html``;
  }
}
