import {
  FlexContainerProperties,
  FlexItemProperties,
  FormProperties,
  NidocaForm,
  NidocaFormOutputData,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-output-data-showcase-page')
export class NidocaFormOutputDataShowcasePage extends NidocaShowcaseTemplate {
  @property()
  jsonObject: any = '';

  @property()
  formData: FormData = Object.values(FormData)[0];

  constructor() {
    super();
    let initComponent: NidocaFormOutputData = new NidocaFormOutputData();

    this.jsonObject = initComponent.jsonObject;

    this.formData = initComponent.formData;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-output-data/>"></nidoca-typography>
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
          <nidoca-container> </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-form-output-data .jsonObject="${this.jsonObject}" .formData="${this.formData}"
              >nidoca-form-output-data</nidoca-form-output-data
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form-output-data .\n    jsonObject="' +
            this.toValue(this.jsonObject) +
            '" .\n    formData="' +
            this.toValue(this.formData) +
            '" >\n     nidoca-form-output-data\n</nidoca-form-output-data>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot:

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['jsonObject', 'any'],
            ['formData', 'FormData'],
          ]}"
        ></nidoca-table>

        <nidoca-table .headers="${['property', 'type']}" .rows="${[]}"></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
@customElement('nidoca-form-showcase-page')
export class NidocaFormShowcasePage extends NidocaShowcaseTemplate {
  @property()
  formProperties: FormProperties[] = [];

  @property()
  autocomplete: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaForm = new NidocaForm();

    this.formProperties = initComponent.formProperties;

    this.autocomplete = initComponent.autocomplete;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form/>"></nidoca-typography>
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
          <nidoca-container> </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-form .formProperties="${this.formProperties}" .autocomplete="${this.autocomplete}"
              >nidoca-form</nidoca-form
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form .\n    formProperties="' +
            this.toValue(this.formProperties) +
            '" .\n    autocomplete="' +
            this.toValue(this.autocomplete) +
            '"   >\n     nidoca-form\n</nidoca-form>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['formProperties', 'FormProperties[]'],
            ['autocomplete', 'boolean'],
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
