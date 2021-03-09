import {
  DateType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFormDate,
  SpacerAlignment,
  SpacerSize,
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
          FlexContainerProperties.CONTAINER_WIDTH_50,
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
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer
              .spacerAlignment="${SpacerAlignment.VERTICAL}"
              .spacerSize="${SpacerSize.LITTLE}"
            ></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
              <nidoca-form-date
                .dateType=${this.dateType}
                name=${this.name}
                .value=${this.value}
                label=${this.label}
                .required=${this.required}
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .checked=${this.checked}
                .multiple=${this.multiple}
                .maxlength=${this.maxlength}
                .minlength=${this.minlength}
                .min=${this.min}
                .max=${this.max}
                .step=${this.step}
                .size=${this.size}
                .errorText=${this.errorText}
                .infoText=${this.infoText}
                .warningText=${this.warningText}
                >nidoca-form-date</nidoca-form-date
              >
            </nidoca-box>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer
              .spacerAlignment="${SpacerAlignment.VERTICAL}"
              .spacerSize="${SpacerSize.LITTLE}"
            ></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
              <nidoca-code code="Code"></nidoca-code>
            </nidoca-box>
          </nidoca-tab-content>
        </nidoca-tabs>

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
}
