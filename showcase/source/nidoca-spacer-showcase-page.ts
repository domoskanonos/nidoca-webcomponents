import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  NidocaDevice,
  NidocaSpacer,
  SpacerSize,
  SpacerType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-spacer-showcase-page')
export class NidocaSpacerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  devices: NidocaDevice[] = [];

  @property()
  spacerTypes: SpacerType[] = [];

  @property()
  spacerSize: SpacerSize = Object.values(SpacerSize)[0];

  @property()
  cssStyle: string = '';

  constructor() {
    super();
    let initComponent: NidocaSpacer | null = null;
    initComponent = this.loadShowcaseInitData('NidocaSpacer');
    if (initComponent == null) {
      initComponent = new NidocaSpacer();
    }

    this.devices = initComponent.devices;

    this.spacerTypes = initComponent.spacerTypes;

    this.spacerSize = initComponent.spacerSize;

    this.cssStyle = initComponent.cssStyle;
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
          <nidoca-spacer
            .devices="${this.devices}"
            .spacerTypes="${this.spacerTypes}"
            .spacerSize="${this.spacerSize}"
            cssStyle="${this.cssStyle}"
            >${this.loadShowcaseContent('NidocaSpacer')}</nidoca-spacer
          >
        </nidoca-flex-container>
      </nidoca-floating-container>

      <nidoca-spacer cssStyle="padding:20vh;" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-flex-container containerStyle="width:75%;" .devices="${[NidocaDevice.DESKTOP]}">
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-spacer/>"></nidoca-typography>
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
                    label="devices"
                    .value="${this.devices}"
                    .options="${this.toComboboxOptions('NidocaDevice', NidocaDevice)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.devices = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    .multiple="${true}"
                    size="5"
                    label="spacerTypes"
                    .value="${this.spacerTypes}"
                    .options="${this.toComboboxOptions('SpacerType', SpacerType)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.spacerTypes = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    label="spacerSize"
                    .value="${this.spacerSize}"
                    .options="${this.toComboboxOptions('SpacerSize', SpacerSize)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.spacerSize = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="cssStyle"
                    .value="${this.cssStyle}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.cssStyle = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

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
                    code="${'<nidoca-spacer \n  .devices="' +
                    this.toAttributeCodeString(this.devices, 'NidocaDevice[]', NidocaDevice) +
                    '" \n  .spacerTypes="' +
                    this.toAttributeCodeString(this.spacerTypes, 'SpacerType[]', SpacerType) +
                    '" \n  .spacerSize="' +
                    this.toAttributeCodeString(this.spacerSize, 'SpacerSize', SpacerSize) +
                    '" \n  cssStyle="' +
                    this.toAttributeCodeString(this.cssStyle, 'string') +
                    '" >\n     nidoca-spacer\n</nidoca-spacer>'}"
                  ></nidoca-code>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>
          <nidoca-spacer></nidoca-spacer>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['devices', this.object2Value('NidocaDevice[]', null)],
              ['spacerTypes', this.object2Value('SpacerType[]', null)],
              ['spacerSize', this.object2Value('SpacerSize', SpacerSize)],
              ['cssStyle', this.object2Value('string', null)],
            ]}"
          ></nidoca-table>
          <nidoca-spacer></nidoca-spacer>
        </nidoca-flex-container>
      </nidoca-flex-container>
    `;
  }
}
