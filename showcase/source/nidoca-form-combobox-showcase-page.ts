import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  FormOutputData,
  NidocaDevice,
  NidocaFormCombobox,
  SpacerSize,
  SpacerType,
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
    let initComponent: NidocaFormCombobox | null = null;
    initComponent = this.loadShowcaseInitData('NidocaFormCombobox');
    if (initComponent == null) {
      initComponent = new NidocaFormCombobox();
    }

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
        height="40vh"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-flex-container
          .flexDirection="${FlexDirection.ROW}"
          .flexWrap="${FlexWrap.WRAP}"
          .flexJustifyContent="${FlexJustifyContent.CENTER}"
          .flexAlignItems="${FlexAlignItems.CENTER}"
          .flexAlignContent="${FlexAlignContent.SPACE_AROUND}"
          containerStyle="height:100%; width:100%; background-color:var(--app-color-surface-background-light)"
          itemStyle=""
        >
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
            >${this.loadShowcaseContent('NidocaFormCombobox')}</nidoca-form-combobox
          >
        </nidoca-flex-container>
      </nidoca-floating-container>

      <nidoca-spacer cssStyle="padding:20vh;" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-flex-container containerStyle="width:75%;" .devices="${[NidocaDevice.DESKTOP]}">
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography
              .typographyType="${TypographyType.H2}"
              text="<nidoca-form-combobox/>"
            ></nidoca-typography>
          </nidoca-spacer>

          <nidoca-tabs>
            <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
            <nidoca-tab slot="tab" text="source"></nidoca-tab>

            <nidoca-tab-content slot="tabContent" .selected="${true}">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.TOP, SpacerType.BOTTOM]}">
                <nidoca-spacer
                  spacerSize="${SpacerSize.NORMAL}"
                  .spacerTypes="${[SpacerType.LEFT, SpacerType.RIGHT]}"
                  .devices="${[NidocaDevice.MOBILE]}"
                >
                  <nidoca-form-text
                    label="name"
                    .value="${this.name}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.name = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="label"
                    .value="${this.label}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.label = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    .multiple="${true}"
                    size="5"
                    label="options"
                    .value="${this.options}"
                    .options="${this.toComboboxOptions('FormOutputData', FormOutputData)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.options = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-switch
                    name="required"
                    infoText="required"
                    .selected="${this.required}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.required = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="errorText"
                    .value="${this.errorText}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.errorText = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="infoText"
                    .value="${this.infoText}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.infoText = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="warningText"
                    .value="${this.warningText}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.warningText = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    textType="${TextType.NUMBER}"
                    label="size"
                    .value="${this.size}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-switch
                    name="multiple"
                    infoText="multiple"
                    .selected="${this.multiple}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.multiple = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.TOP, SpacerType.BOTTOM]}">
                <nidoca-spacer
                  spacerSize="${SpacerSize.NORMAL}"
                  .spacerTypes="${[SpacerType.LEFT, SpacerType.RIGHT]}"
                  .devices="${[NidocaDevice.MOBILE]}"
                >
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
      </nidoca-flex-container>
    `;
  }
}
