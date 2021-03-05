import {
  FlexContainerProperties,
  FlexItemProperties,
  FormOutputData,
  NidocaFormCombobox,
  SpacerAlignment,
  SpacerSize,
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
          FlexContainerProperties.CONTAINER_WIDTH_50,
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
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer
              .spacerAlignment="${SpacerAlignment.VERTICAL}"
              .spacerSize="${SpacerSize.LITTLE}"
            ></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
              <nidoca-form-combobox
                name=${this.name}
                .value=${this.value}
                label=${this.label}
                .options=${this.options}
                .required=${this.required}
                errorText=${this.errorText}
                infoText=${this.infoText}
                warningText=${this.warningText}
                .size=${this.size}
                .multiple=${this.multiple}
                >nidoca-form-combobox</nidoca-form-combobox
              >
            </nidoca-box>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer
              .spacerAlignment="${SpacerAlignment.VERTICAL}"
              .spacerSize="${SpacerSize.LITTLE}"
            ></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            </nidoca-box>
          </nidoca-tab-content>
        </nidoca-tabs>

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
}
