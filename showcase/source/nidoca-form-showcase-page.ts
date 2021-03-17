import {
  AccordionType,
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
          FlexContainerProperties.CONTAINER_WIDTH_75,
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
                  label="formData"
                  .value="${this.formData}"
                  .options="${this.toComboboxOptions(FormData)}"
                  @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.formData = event.detail.value)}"
                ></nidoca-form-combobox>
              </nidoca-accordion-item>

              <nidoca-accordion-item header="slots">
                <nidoca-table
                  .headers="${['slot name', 'components', 'add']}"
                  .rows="${[
                    [
                      'header',
                      html`<nidoca-form-combobox></nidoca-form-combobox>`,
                      html`<nidoca-icon icon="add"></nidoca-icon>`,
                    ],
                    [
                      'errorMessages&quot; style&#x3D;&quot;color: var(--app-color-error);',
                      html`<nidoca-form-combobox></nidoca-form-combobox>`,
                      html`<nidoca-icon icon="add"></nidoca-icon>`,
                    ],
                    [
                      'footer',
                      html`<nidoca-form-combobox></nidoca-form-combobox>`,
                      html`<nidoca-icon icon="add"></nidoca-icon>`,
                    ],
                  ]}"
                ></nidoca-table>
              </nidoca-accordion-item>
            </nidoca-accordion>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-form-output-data .jsonObject="${this.jsonObject}" .formData="${this.formData}"
              >nidoca-form-output-data</nidoca-form-output-data
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form-output-data \n  .jsonObject="' +
            this.toAttributeCodeString(this.jsonObject, 'any') +
            '" \n  .formData="' +
            this.toAttributeCodeString(this.formData, 'FormData', FormData) +
            '" >\n     nidoca-form-output-data\n</nidoca-form-output-data>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['jsonObject', this.object2Value('any', null)],
            ['formData', this.object2Value('FormData', FormData)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
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
          FlexContainerProperties.CONTAINER_WIDTH_75,
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
                <nidoca-form-switch
                  name="autocomplete"
                  infoText="autocomplete"
                  .selected="${this.autocomplete}"
                  @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.autocomplete = event.detail.value)}"
                ></nidoca-form-switch>
              </nidoca-accordion-item>

              <nidoca-accordion-item header="slots">
                <nidoca-table
                  .headers="${['slot name', 'components', 'add']}"
                  .rows="${[
                    [
                      'header',
                      html`<nidoca-form-combobox></nidoca-form-combobox>`,
                      html`<nidoca-icon icon="add"></nidoca-icon>`,
                    ],
                    [
                      'errorMessages&quot; style&#x3D;&quot;color: var(--app-color-error);',
                      html`<nidoca-form-combobox></nidoca-form-combobox>`,
                      html`<nidoca-icon icon="add"></nidoca-icon>`,
                    ],
                    [
                      'footer',
                      html`<nidoca-form-combobox></nidoca-form-combobox>`,
                      html`<nidoca-icon icon="add"></nidoca-icon>`,
                    ],
                  ]}"
                ></nidoca-table>
              </nidoca-accordion-item>
            </nidoca-accordion>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-form .formProperties="${this.formProperties}" .autocomplete="${this.autocomplete}"
              >nidoca-form</nidoca-form
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form \n  .formProperties="' +
            this.toAttributeCodeString(this.formProperties, 'FormProperties[]') +
            '" \n  .autocomplete="' +
            this.toAttributeCodeString(this.autocomplete, 'boolean') +
            '"   >\n     nidoca-form\n</nidoca-form>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['formProperties', this.object2Value('FormProperties[]', null)],
            ['autocomplete', this.object2Value('boolean', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
