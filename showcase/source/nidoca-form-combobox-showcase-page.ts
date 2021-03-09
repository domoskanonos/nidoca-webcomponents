import {
  FlexContainerProperties,
  FlexItemProperties,
  FormOutputData,
  NidocaFormCombobox,
  TextType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-combobox-showcase-page')
export class NidocaFormComboboxShowcasePage extends NidocaShowcaseTemplate {
  @property()
  name: string = '';

  @property()
  value: any = '';

  @property()
  label: string = '';

  @property()
  options: FormOutputData[] = [];

  @property()
  required: boolean = false;

  @property()
  errorText: string = '';

  @property()
  infoText: string = '';

  @property()
  warningText: string = '';

  @property()
  size: number = 0;

  @property()
  multiple: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaFormCombobox = new NidocaFormCombobox();

    this.name = initComponent.name;

    this.value = initComponent.value;

    this.label = initComponent.label;

    this.options = initComponent.options;

    this.required = initComponent.required;

    this.errorText = initComponent.errorText;

    this.infoText = initComponent.infoText;

    this.warningText = initComponent.warningText;

    this.size = initComponent.size;

    this.multiple = initComponent.multiple;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-combobox/>"></nidoca-typography>
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
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-form-combobox
              name="${this.name}"
              .value="${this.value}"
              label="${this.label}"
              .options="${this.options}"
              .required="${this.required}"
              errorText="${this.errorText}"
              infoText="${this.infoText}"
              warningText="${this.warningText}"
              .size="${this.size}"
              .multiple="${this.multiple}"
              >nidoca-form-combobox</nidoca-form-combobox
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form-combobox \n    name="' +
            this.toValue(this.name) +
            '" .\n    value="' +
            this.toValue(this.value) +
            '" \n    label="' +
            this.toValue(this.label) +
            '" .\n    options="' +
            this.toValue(this.options) +
            '" .\n    required="' +
            this.toValue(this.required) +
            '" \n    errorText="' +
            this.toValue(this.errorText) +
            '" \n    infoText="' +
            this.toValue(this.infoText) +
            '" \n    warningText="' +
            this.toValue(this.warningText) +
            '" .\n    size="' +
            this.toValue(this.size) +
            '" .\n    multiple="' +
            this.toValue(this.multiple) +
            '"  >\n     nidoca-form-combobox\n</nidoca-form-combobox>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['name', 'string'],
            ['value', 'any'],
            ['label', 'string'],
            ['options', 'FormOutputData[]'],
            ['required', 'boolean'],
            ['errorText', 'string'],
            ['infoText', 'string'],
            ['warningText', 'string'],
            ['size', 'number'],
            ['multiple', 'boolean'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
