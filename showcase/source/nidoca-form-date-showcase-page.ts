import {
  DateType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFormDate,
  TextType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-date-showcase-page')
export class NidocaFormDateShowcasePage extends NidocaShowcaseTemplate {
  @property()
  dateType: DateType = Object.values(DateType)[0];

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
  multiple: boolean = false;

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
  errorText: string | undefined = '';

  @property()
  infoText: string | undefined = '';

  @property()
  warningText: string | undefined = '';

  constructor() {
    super();
    let initComponent: NidocaFormDate = new NidocaFormDate();

    this.dateType = initComponent.dateType;

    this.name = initComponent.name;

    this.value = initComponent.value;

    this.label = initComponent.label;

    this.required = initComponent.required;

    this.placeholder = initComponent.placeholder;

    this.disabled = initComponent.disabled;

    this.checked = initComponent.checked;

    this.multiple = initComponent.multiple;

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
          FlexContainerProperties.CONTAINER_WIDTH_100,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-date/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>

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

            <nidoca-form-text
              label="placeholder"
              .value="${this.placeholder}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.placeholder = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="maxlength"
              .value="${this.maxlength}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.maxlength = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="maxlength"
              .value="${this.maxlength}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.maxlength = event.detail.value)}"
            ></nidoca-form-switch>

            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="minlength"
              .value="${this.minlength}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.minlength = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="minlength"
              .value="${this.minlength}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.minlength = event.detail.value)}"
            ></nidoca-form-switch>

            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="min"
              .value="${this.min}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.min = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="min"
              .value="${this.min}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.min = event.detail.value)}"
            ></nidoca-form-switch>

            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="max"
              .value="${this.max}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.max = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="max"
              .value="${this.max}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.max = event.detail.value)}"
            ></nidoca-form-switch>

            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="step"
              .value="${this.step}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.step = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="step"
              .value="${this.step}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.step = event.detail.value)}"
            ></nidoca-form-switch>

            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="size"
              .value="${this.size}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="size"
              .value="${this.size}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
            ></nidoca-form-switch>

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
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-form-date
              .dateType="${this.dateType}"
              name="${this.name}"
              .value="${this.value}"
              label="${this.label}"
              .required="${this.required}"
              placeholder="${this.placeholder}"
              .disabled="${this.disabled}"
              .checked="${this.checked}"
              .multiple="${this.multiple}"
              .maxlength="${this.maxlength}"
              .minlength="${this.minlength}"
              .min="${this.min}"
              .max="${this.max}"
              .step="${this.step}"
              .size="${this.size}"
              .errorText="${this.errorText}"
              .infoText="${this.infoText}"
              .warningText="${this.warningText}"
              >nidoca-form-date</nidoca-form-date
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form-date .\n    dateType="' +
            this.toValue(this.dateType) +
            '" \n    name="' +
            this.toValue(this.name) +
            '" .\n    value="' +
            this.toValue(this.value) +
            '" \n    label="' +
            this.toValue(this.label) +
            '" .\n    required="' +
            this.toValue(this.required) +
            '" \n    placeholder="' +
            this.toValue(this.placeholder) +
            '" .\n    disabled="' +
            this.toValue(this.disabled) +
            '" .\n    checked="' +
            this.toValue(this.checked) +
            '" .\n    multiple="' +
            this.toValue(this.multiple) +
            '" .\n    maxlength="' +
            this.toValue(this.maxlength) +
            '" .\n    minlength="' +
            this.toValue(this.minlength) +
            '" .\n    min="' +
            this.toValue(this.min) +
            '" .\n    max="' +
            this.toValue(this.max) +
            '" .\n    step="' +
            this.toValue(this.step) +
            '" .\n    size="' +
            this.toValue(this.size) +
            '" .\n    errorText="' +
            this.toValue(this.errorText) +
            '" .\n    infoText="' +
            this.toValue(this.infoText) +
            '" .\n    warningText="' +
            this.toValue(this.warningText) +
            '"  >\n     nidoca-form-date\n</nidoca-form-date>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['dateType', 'DateType'],
            ['name', 'string'],
            ['value', 'any'],
            ['label', 'string'],
            ['required', 'boolean'],
            ['placeholder', 'string'],
            ['disabled', 'boolean'],
            ['checked', 'boolean'],
            ['multiple', 'boolean'],
            ['maxlength', 'number | undefined'],
            ['minlength', 'number | undefined'],
            ['min', 'number | undefined'],
            ['max', 'number | undefined'],
            ['step', 'number | undefined'],
            ['size', 'number | undefined'],
            ['errorText', 'string | undefined'],
            ['infoText', 'string | undefined'],
            ['warningText', 'string | undefined'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
