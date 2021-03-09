import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFormInputframe,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-inputframe-showcase-page')
export class NidocaFormInputframeShowcasePage extends NidocaShowcaseTemplate {
  @property()
  label: string = '';

  @property()
  errorText: string | undefined = '';

  @property()
  infoText: string | undefined = '';

  @property()
  warningText: string | undefined = '';

  @property()
  selected: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaFormInputframe = new NidocaFormInputframe();

    this.label = initComponent.label;

    this.errorText = initComponent.errorText;

    this.infoText = initComponent.infoText;

    this.warningText = initComponent.warningText;

    this.selected = initComponent.selected;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-inputframe/>"></nidoca-typography>
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
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-form-inputframe
              label="${this.label}"
              .errorText="${this.errorText}"
              .infoText="${this.infoText}"
              .warningText="${this.warningText}"
              .selected="${this.selected}"
              >nidoca-form-inputframe</nidoca-form-inputframe
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form-inputframe \n    label="' +
            this.toValue(this.label) +
            '" .\n    errorText="' +
            this.toValue(this.errorText) +
            '" .\n    infoText="' +
            this.toValue(this.infoText) +
            '" .\n    warningText="' +
            this.toValue(this.warningText) +
            '" .\n    selected="' +
            this.toValue(this.selected) +
            '" >\n     nidoca-form-inputframe\n</nidoca-form-inputframe>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['label', 'string'],
            ['errorText', 'string | undefined'],
            ['infoText', 'string | undefined'],
            ['warningText', 'string | undefined'],
            ['selected', 'boolean'],
          ]}"
        ></nidoca-table>

        <nidoca-table .headers="${['property', 'type']}" .rows="${[['render', 'render']]}"></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
