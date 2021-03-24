import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  FormProperties,
  NidocaDevice,
  NidocaForm,
  NidocaFormOutputData,
  SpacerSize,
  SpacerType,
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
    let initComponent: NidocaFormOutputData | null = null;
    initComponent = this.loadShowcaseInitData('NidocaFormOutputData');
    if (initComponent == null) {
      initComponent = new NidocaFormOutputData();
    }

    this.jsonObject = initComponent.jsonObject;

    this.formData = initComponent.formData;
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
          <nidoca-form-output-data .jsonObject="${this.jsonObject}" .formData="${this.formData}"
            >${this.loadShowcaseContent('NidocaFormOutputData')}</nidoca-form-output-data
          >
        </nidoca-flex-container>
      </nidoca-floating-container>

      <nidoca-spacer cssStyle="padding:20vh;" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-flex-container containerStyle="width:75%;" .devices="${[NidocaDevice.DESKTOP]}">
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography
              .typographyType="${TypographyType.H2}"
              text="<nidoca-form-output-data/>"
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
                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    label="formData"
                    .value="${this.formData}"
                    .options="${this.toComboboxOptions('FormData', FormData)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.formData = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

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
                    code="${'<nidoca-form-output-data \n  .jsonObject="' +
                    this.toAttributeCodeString(this.jsonObject, 'any') +
                    '" \n  .formData="' +
                    this.toAttributeCodeString(this.formData, 'FormData', FormData) +
                    '" >\n     nidoca-form-output-data\n</nidoca-form-output-data>'}"
                  ></nidoca-code>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['slots']}"
            .rows="${[
              ['<slot></slot>'],
              ['<slot name="header"></slot>'],
              ['<slot name="errorMessages&quot; style&#x3D;&quot;color: var(--app-color-error);"></slot>'],
              ['<slot name="footer"></slot>'],
            ]}"
          ></nidoca-table>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['jsonObject', this.object2Value('any', null)],
              ['formData', this.object2Value('FormData', FormData)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
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
    let initComponent: NidocaForm | null = null;
    initComponent = this.loadShowcaseInitData('NidocaForm');
    if (initComponent == null) {
      initComponent = new NidocaForm();
    }

    this.formProperties = initComponent.formProperties;

    this.autocomplete = initComponent.autocomplete;
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
          <nidoca-form .formProperties="${this.formProperties}" .autocomplete="${this.autocomplete}"
            >${this.loadShowcaseContent('NidocaForm')}</nidoca-form
          >
        </nidoca-flex-container>
      </nidoca-floating-container>

      <nidoca-spacer cssStyle="padding:20vh;" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-flex-container containerStyle="width:75%;" .devices="${[NidocaDevice.DESKTOP]}">
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form/>"></nidoca-typography>
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
                  <nidoca-form-combobox
                    .multiple="${true}"
                    size="5"
                    label="formProperties"
                    .value="${this.formProperties}"
                    .options="${this.toComboboxOptions('FormProperties', FormProperties)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.formProperties = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-switch
                    name="autocomplete"
                    infoText="autocomplete"
                    .selected="${this.autocomplete}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) =>
                      (this.autocomplete = event.detail.value)}"
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
                    code="${'<nidoca-form \n  .formProperties="' +
                    this.toAttributeCodeString(this.formProperties, 'FormProperties[]', FormProperties) +
                    '" \n  .autocomplete="' +
                    this.toAttributeCodeString(this.autocomplete, 'boolean') +
                    '"   >\n     nidoca-form\n</nidoca-form>'}"
                  ></nidoca-code>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['slots']}"
            .rows="${[
              ['<slot></slot>'],
              ['<slot name="header"></slot>'],
              ['<slot name="errorMessages&quot; style&#x3D;&quot;color: var(--app-color-error);"></slot>'],
              ['<slot name="footer"></slot>'],
            ]}"
          ></nidoca-table>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['formProperties', this.object2Value('FormProperties[]', null)],
              ['autocomplete', this.object2Value('boolean', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-flex-container>
    `;
  }
}
