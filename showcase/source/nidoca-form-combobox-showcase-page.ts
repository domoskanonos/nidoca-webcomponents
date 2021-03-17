import {
  AccordionType,
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
          FlexContainerProperties.CONTAINER_WIDTH_75,
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
                  name="multiple"
                  infoText="multiple"
                  .selected="${this.multiple}"
                  @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.multiple = event.detail.value)}"
                ></nidoca-form-switch>
              </nidoca-accordion-item>
            </nidoca-accordion>
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
            code="${'<nidoca-form-combobox \n  name="' +
            this.toAttributeCodeString(this.name, 'string') +
            '" \n  .value="' +
            this.toAttributeCodeString(this.value, 'any') +
            '" \n  label="' +
            this.toAttributeCodeString(this.label, 'string') +
            '" \n  .options="' +
            this.toAttributeCodeString(this.options, 'FormOutputData[]') +
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
        </nidoca-flex-container>

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
