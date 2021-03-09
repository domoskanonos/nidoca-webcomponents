import {
  FlexContainerProperties,
  FlexItemProperties,
  FormProperties,
  NidocaForm,
  NidocaFormOutputData,
  SpacerAlignment,
  SpacerSize,
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
        FlexContainerProperties.CONTAINER_WIDTH_50,
        FlexContainerProperties.TABLET_MAX_WIDTH,
        FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
        FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
        FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
      ]}"
      .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
      flexItemBasisValue="100%"
  >
      <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-output-data/>"></nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.BODY1}">
        <br />description<br /><br />
      </nidoca-typography>
      <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
      <nidoca-tabs>
        <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
        <nidoca-tab slot="tab" text="source"></nidoca-tab>
        <nidoca-tab-content slot="tabContent" .selected="${true}">

            <nidoca-spacer .spacerAlignment="${SpacerAlignment.VERTICAL}" .spacerSize="${
      SpacerSize.LITTLE
    }"></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">



            <nidoca-form-output-data.jsonObject=${this.jsonObject} 
.formData=${this.formData} 
            >nidoca-form-output-data</nidoca-form-output-data>



            </nidoca-box>



        </nidoca-tab-content>
        <nidoca-tab-content slot="tabContent">

            <nidoca-spacer .spacerAlignment="${SpacerAlignment.VERTICAL}" .spacerSize="${
      SpacerSize.LITTLE
    }"></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">

                <nidoca-code code="Code"></nidoca-code>

            </nidoca-box>


        </nidoca-tab-content>
      </nidoca-tabs>









 






 



      <nidoca-table .headers="${['property', 'type']}" .rows="${[
      ['jsonObject', 'any'],
      ['formData', 'FormData'],
    ]}"></nidoca-table>

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
          FlexContainerProperties.CONTAINER_WIDTH_50,
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
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer
              .spacerAlignment="${SpacerAlignment.VERTICAL}"
              .spacerSize="${SpacerSize.LITTLE}"
            ></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
              <nidoca-form .formProperties=${this.formProperties} .autocomplete=${this.autocomplete}
                >nidoca-form</nidoca-form
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
            ['formProperties', 'FormProperties[]'],
            ['autocomplete', 'boolean'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
