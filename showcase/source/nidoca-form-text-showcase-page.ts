import {
  AccordionType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFormText,
  TextType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-text-showcase-page')
export class NidocaFormTextShowcasePage extends NidocaShowcaseTemplate {
  @property()
  textType: TextType = Object.values(TextType)[0];

  @property()
  name: string = '';

  @property()
  value: any = '';

  @property()
  label: string = '';

  @property()
  required: boolean = false;

  @property()
  placeholder: string = '';

  @property()
  disabled: boolean = false;

  @property()
  checked: boolean = false;

  @property()
  maxlength: number | undefined = 0;

  @property()
  minlength: number | undefined = 0;

  @property()
  min: number | undefined = 0;

  @property()
  max: number | undefined = 0;

  @property()
  step: number | undefined = 0;

  @property()
  size: number | undefined = 0;

  @property()
  errorText: string = '';

  @property()
  infoText: string = '';

  @property()
  warningText: string = '';

  constructor() {
    super();
    let initComponent: NidocaFormText = new NidocaFormText();

    this.textType = initComponent.textType;

    this.name = initComponent.name;

    this.value = initComponent.value;

    this.label = initComponent.label;

    this.required = initComponent.required;

    this.placeholder = initComponent.placeholder;

    this.disabled = initComponent.disabled;

    this.checked = initComponent.checked;

    this.maxlength = initComponent.maxlength;

    this.minlength = initComponent.minlength;

    this.min = initComponent.min;

    this.max = initComponent.max;

    this.step = initComponent.step;

    this.size = initComponent.size;

    this.errorText = initComponent.errorText;

    this.infoText = initComponent.infoText;

    this.warningText = initComponent.warningText;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperties.CONTAINER_WIDTH_75,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-text/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="showcase"></nidoca-typography>

        <nidoca-flex-container
          .flexContainerProperties="${[
            FlexContainerProperties.CONTAINER_WIDTH_100,
            FlexContainerProperties.TABLET_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
            FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
          ]}"
          .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
          flexItemBasisValue="33.3%"
        >
          <nidoca-container>
            <nidoca-accordion .accordionType="${AccordionType.SINGLE}">
              <nidoca-accordion-item header="properties" .opened="${true}">
                <nidoca-form-combobox
                  label="textType"
                  .value="${this.textType}"
                  .options="${this.toComboboxOptions(TextType)}"
                  @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.textType = event.detail.value)}"
                ></nidoca-form-combobox>

                <nidoca-form-text
                  label="name"
                  .value="${this.name}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.name = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="label"
                  .value="${this.label}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.label = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-switch
                  name="required"
                  infoText="required"
                  .selected="${this.required}"
                  @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.required = event.detail.value)}"
                ></nidoca-form-switch>

                <nidoca-form-text
                  label="placeholder"
                  .value="${this.placeholder}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.placeholder = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-switch
                  name="disabled"
                  infoText="disabled"
                  .selected="${this.disabled}"
                  @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.disabled = event.detail.value)}"
                ></nidoca-form-switch>

                <nidoca-form-switch
                  name="checked"
                  infoText="checked"
                  .selected="${this.checked}"
                  @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.checked = event.detail.value)}"
                ></nidoca-form-switch>

                <nidoca-form-text
                  textType="${TextType.NUMBER}"
                  label="maxlength"
                  .value="${this.maxlength}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.maxlength = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  textType="${TextType.NUMBER}"
                  label="minlength"
                  .value="${this.minlength}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.minlength = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  textType="${TextType.NUMBER}"
                  label="min"
                  .value="${this.min}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.min = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  textType="${TextType.NUMBER}"
                  label="max"
                  .value="${this.max}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.max = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  textType="${TextType.NUMBER}"
                  label="step"
                  .value="${this.step}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.step = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  textType="${TextType.NUMBER}"
                  label="size"
                  .value="${this.size}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="errorText"
                  .value="${this.errorText}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.errorText = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="infoText"
                  .value="${this.infoText}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.infoText = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="warningText"
                  .value="${this.warningText}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.warningText = event.detail.value)}"
                ></nidoca-form-text>
              </nidoca-accordion-item>
            </nidoca-accordion>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-form-text
              .textType="${this.textType}"
              name="${this.name}"
              .value="${this.value}"
              label="${this.label}"
              .required="${this.required}"
              placeholder="${this.placeholder}"
              .disabled="${this.disabled}"
              .checked="${this.checked}"
              .maxlength="${this.maxlength}"
              .minlength="${this.minlength}"
              .min="${this.min}"
              .max="${this.max}"
              .step="${this.step}"
              .size="${this.size}"
              errorText="${this.errorText}"
              infoText="${this.infoText}"
              warningText="${this.warningText}"
              >nidoca-form-text</nidoca-form-text
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form-text \n  .textType="' +
            this.toAttributeCodeString(this.textType, 'TextType', TextType) +
            '" \n  name="' +
            this.toAttributeCodeString(this.name, 'string') +
            '" \n  .value="' +
            this.toAttributeCodeString(this.value, 'any') +
            '" \n  label="' +
            this.toAttributeCodeString(this.label, 'string') +
            '" \n  .required="' +
            this.toAttributeCodeString(this.required, 'boolean') +
            '" \n  placeholder="' +
            this.toAttributeCodeString(this.placeholder, 'string') +
            '" \n  .disabled="' +
            this.toAttributeCodeString(this.disabled, 'boolean') +
            '" \n  .checked="' +
            this.toAttributeCodeString(this.checked, 'boolean') +
            '" \n  .maxlength="' +
            this.toAttributeCodeString(this.maxlength, 'number | undefined') +
            '" \n  .minlength="' +
            this.toAttributeCodeString(this.minlength, 'number | undefined') +
            '" \n  .min="' +
            this.toAttributeCodeString(this.min, 'number | undefined') +
            '" \n  .max="' +
            this.toAttributeCodeString(this.max, 'number | undefined') +
            '" \n  .step="' +
            this.toAttributeCodeString(this.step, 'number | undefined') +
            '" \n  .size="' +
            this.toAttributeCodeString(this.size, 'number | undefined') +
            '" \n  errorText="' +
            this.toAttributeCodeString(this.errorText, 'string') +
            '" \n  infoText="' +
            this.toAttributeCodeString(this.infoText, 'string') +
            '" \n  warningText="' +
            this.toAttributeCodeString(this.warningText, 'string') +
            '"  >\n     nidoca-form-text\n</nidoca-form-text>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['textType', this.object2Value('TextType', TextType)],
            ['name', this.object2Value('string', null)],
            ['value', this.object2Value('any', null)],
            ['label', this.object2Value('string', null)],
            ['required', this.object2Value('boolean', null)],
            ['placeholder', this.object2Value('string', null)],
            ['disabled', this.object2Value('boolean', null)],
            ['checked', this.object2Value('boolean', null)],
            ['maxlength', this.object2Value('number | undefined', null)],
            ['minlength', this.object2Value('number | undefined', null)],
            ['min', this.object2Value('number | undefined', null)],
            ['max', this.object2Value('number | undefined', null)],
            ['step', this.object2Value('number | undefined', null)],
            ['size', this.object2Value('number | undefined', null)],
            ['errorText', this.object2Value('string', null)],
            ['infoText', this.object2Value('string', null)],
            ['warningText', this.object2Value('string', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
