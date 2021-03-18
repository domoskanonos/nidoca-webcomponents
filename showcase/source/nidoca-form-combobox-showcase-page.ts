import {
  FlexContainerProperty,
  FlexItemProperty,
  FormOutputData,
  NidocaFormCombobox,
  SpacerAlignment,
  SpacerSize,
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
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
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
          ></nidoca-form-combobox>
        </nidoca-box>
      </nidoca-floating-container>

      <nidoca-spacer size="12.5vh" spacerAlignment="${SpacerAlignment.VERTICAL}"></nidoca-spacer>

      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperty.CONTAINER_WIDTH_75,
          FlexContainerProperty.TABLET_MAX_WIDTH,
          FlexContainerProperty.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperty.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperty.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperty.KEYLINE_ALIGNMENT_BOTH, FlexItemProperty.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.VERTICAL}">
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-combobox/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-text
                label="name"
                .value="${this.name}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.name = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: name
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              JHUHUH: value
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="label"
                .value="${this.label}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.label = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: label
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-combobox
                .multiple="${true}"
                label="options"
                .value="${this.options}"
                .options="${this.toComboboxOptions('FormOutputData', null)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.options = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: options
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-switch
                name="required"
                infoText="required"
                .selected="${this.required}"
                @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.required = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-switch>

              JHUHUH: required
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="errorText"
                .value="${this.errorText}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.errorText = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: errorText
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="infoText"
                .value="${this.infoText}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.infoText = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: infoText
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="warningText"
                .value="${this.warningText}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.warningText = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: warningText
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                textType="${TextType.NUMBER}"
                label="size"
                .value="${this.size}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: size
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-switch
                name="multiple"
                infoText="multiple"
                .selected="${this.multiple}"
                @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.multiple = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-switch>

              JHUHUH: multiple
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-form-combobox \n  name="' +
                this.toAttributeCodeString(this.name, 'string') +
                '" \n  .value="' +
                this.toAttributeCodeString(this.value, 'any') +
                '" \n  label="' +
                this.toAttributeCodeString(this.label, 'string') +
                '" \n  .options="' +
                this.toAttributeCodeString(this.options, 'FormOutputData[]', FormOutputData) +
                '" \n  .required="' +
                this.toAttributeCodeString(this.required, 'boolean') +
                '" \n  errorText="' +
                this.toAttributeCodeString(this.errorText, 'string') +
                '" \n  infoText="' +
                this.toAttributeCodeString(this.infoText, 'string') +
                '" \n  warningText="' +
                this.toAttributeCodeString(this.warningText, 'string') +
                '" \n  .size="' +
                this.toAttributeCodeString(this.size, 'number') +
                '" \n  .multiple="' +
                this.toAttributeCodeString(this.multiple, 'boolean') +
                '"  >\n     nidoca-form-combobox\n</nidoca-form-combobox>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['name', this.object2Value('string', null)],
            ['value', this.object2Value('any', null)],
            ['label', this.object2Value('string', null)],
            ['options', this.object2Value('FormOutputData[]', null)],
            ['required', this.object2Value('boolean', null)],
            ['errorText', this.object2Value('string', null)],
            ['infoText', this.object2Value('string', null)],
            ['warningText', this.object2Value('string', null)],
            ['size', this.object2Value('number', null)],
            ['multiple', this.object2Value('boolean', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
