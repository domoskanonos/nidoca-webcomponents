import {css, html, TemplateResult} from 'lit';

import {customElement} from 'lit/decorators.js';
import {property} from 'lit/decorators.js';
import {query} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import {NidocaTheme} from './nidoca-meta';
import {FormOutputData, NidocaFormAbstractInputElement} from './nidoca-form-abstract-input-element';

export enum NidocaFormTextType {
  color = 'color',
  email = 'email',
  hidden = 'hidden',
  number = 'number',
  password = 'password',
  tel = 'tel',
  text = 'text',
  search = 'search',
  url = 'url',
  date = 'date',
  month = 'month',
  time = 'time',
  week = 'week',
}

@customElement('nidoca-form-text')
export class NidocaFormText extends NidocaFormAbstractInputElement {
  static styles = css`
    :host,
    slot {
      display: block;
      width: 100%;
    }
    .parentContainer {
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      padding: var(--space);
      border-bottom-style: solid;
      border-width: var(--border-width-min);
      height: var(--height-max);
      box-sizing: border-box;
    }

    .container {
      width: 100%;
      display: flex;
      align-content: center;
      flex-direction: column;
    }

    input {
      font: inherit;
      box-sizing: border-box;
      width: 100%;
      border: none;
      background: inherit;
      color: inherit;
      line-height: var(--height-min);
    }

    input:focus {
      outline: none;
      box-shadow: none;
      background: inherit;
    }

    input:focus::placeholder {
      color: transparent;
    }
  `;

  @property({type: NidocaFormTextType, converter: String})
  type: string = NidocaFormTextType.text;

  @property({type: String})
  label: string = '';

  @property({type: String})
  placeholder: string = '';

  @property({type: String})
  trailingIcon: string = '';

  @property({type: String})
  errorText: string = '';

  @property({type: String})
  infoText: string = '';

  @property({type: String})
  warningText: string = '';

  @property({type: String})
  name: string = '';

  @property()
  value: string = '';

  @property({type: Boolean})
  required: boolean = false;

  @property({type: Boolean})
  disabled: boolean = false;

  @property({type: Boolean})
  checked: boolean = false;

  @property({type: Number})
  maxlength: number | undefined;

  @property({type: Number})
  minlength: number | undefined;

  @property({type: Number})
  min: number | undefined;

  @property({type: Number})
  max: number | undefined;

  @property({type: String})
  step: number | undefined;

  @property({type: Number})
  size: number | undefined;

  @property({type: String})
  pattern: string | undefined;

  @query('#inputElement')
  private inputElement: HTMLInputElement | undefined;

  @property({type: NidocaTheme, converter: String})
  theme: string = NidocaTheme.surface;

  render(): TemplateResult {
    return this.type == NidocaFormTextType.hidden
      ? html`<input id="inputElement" name="${this.name}" type="${this.type}" value="${this.value}" />`
      : html` <style>
            .parentContainer,
            ::slotted(.parentContainer) {
              color: var(--app-color-text-${this.theme});
              background-color: var(--app-color-${this.theme}-background);
            }

            .parentContainer,
            ::slotted(.parentContainer) {
              border-color: var(--app-color-${this.theme}-border);
            }

            .parentContainer:focus-within,
            ::slotted(.parentContainer:focus-within) {
              border-color: var(--app-color-${this.theme}-border);
              background-color: var(--app-color-${this.theme}-selected);
            }
          </style>
          <div class="parentContainer border">
            ${this.trailingIcon
              ? html` <nidoca-icon
                  style="font-size: var(--icon-size-big);padding-left:var(--space);padding-right:var(--space);"
                  icon="${this.trailingIcon}"
                ></nidoca-icon>`
              : html``}
            <div class="container">
              <nidoca-text-caption class="label" text="${this.label}"></nidoca-text-caption>
              <input
                id="inputElement"
                name="${this.name}"
                .type="${this.type}"
                value="${this.value}"
                placeholder="${this.placeholder}"
                size="${ifDefined(this.size)}"
                minlength="${ifDefined(this.minlength)}"
                maxlength="${ifDefined(this.maxlength)}"
                pattern="${ifDefined(this.pattern)}"
                min="${ifDefined(this.min)}"
                max="${ifDefined(this.max)}"
                step="${ifDefined(this.step)}"
                ?required="${this.required}"
                ?disabled="${this.disabled}"
                ?checked="${this.checked}"
              />
            </div>
          </div>

          ${this.infoText || this.warningText || this.errorText
            ? html`
                <div style="display:flex;flex-direction:column;">
                  ${this.infoText ? html` <nidoca-text-info text="${this.infoText}"></nidoca-text-info>` : html``}
                  ${this.warningText
                    ? html` <nidoca-text-warning
                        style="color:var(--app-color-warning-background)"
                        text="${this.warningText}"
                      ></nidoca-text-warning>`
                    : html``}
                  ${this.errorText
                    ? html` <nidoca-text-error
                        style="color:var(--app-color-error-background)"
                        text="${this.errorText}"
                      ></nidoca-text-error>`
                    : html``}
                </div>
              `
            : html``}`;
  }

  getOutputData(): FormOutputData {
    const outputValue: string | undefined = this.inputElement?.value;
    return <FormOutputData>{
      key: this.name,
      value: outputValue?.trim(),
    };
  }

  public validate(): boolean {
    this.errorText = '';
    if (
      this.inputElement != null &&
      !this.inputElement.validity.valid &&
      this.inputElement.validationMessage != this.errorText
    ) {
      this.errorText = this.inputElement.validationMessage;
      if (this.inputElement.validity.patternMismatch && this.pattern) {
        this.errorText = this.errorText.concat(' Format: ').concat(this.pattern);
      }
    }
    return this.errorText == '';
  }
}
