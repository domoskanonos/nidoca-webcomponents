import {DateType, NidocaTemplate} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';

@customElement('nidoca-form-date-showcase-page')
export class NidocaFormDateShowcasePage extends NidocaTemplate {
  @property()
  dateType: DateType | undefined | null = undefined;

  @property()
  name: string | undefined | null = '';

  @property()
  value: any | undefined | null = undefined;

  @property()
  label: string | undefined | null = '';

  @property()
  required: boolean | undefined | null = false;

  @property()
  placeholder: string | undefined | null = '';

  @property()
  disabled: boolean | undefined | null = false;

  @property()
  checked: boolean | undefined | null = false;

  @property()
  multiple: boolean | undefined | null = false;

  @property()
  maxlength: number | undefined | null = undefined;

  @property()
  minlength: number | undefined | null = undefined;

  @property()
  min: number | undefined | null = undefined;

  @property()
  max: number | undefined | null = undefined;

  @property()
  step: number | undefined | null = undefined;

  @property()
  size: number | undefined | null = undefined;

  @property()
  errorText: string | undefined | null = '';

  @property()
  infoText: string | undefined | null = '';

  @property()
  warningText: string | undefined | null = '';

  @property()
  inputElement: HTMLInputElement | undefined | null = undefined;

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
