import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  NidocaDevice,
  NidocaFlexContainer,
  SpacerSize,
  SpacerType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-flex-container-showcase-page')
export class NidocaFlexContainerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  devices: NidocaDevice[] = [];

  @property()
  flexDirection: FlexDirection = Object.values(FlexDirection)[0];

  @property()
  flexWrap: FlexWrap = Object.values(FlexWrap)[0];

  @property()
  flexJustifyContent: FlexJustifyContent = Object.values(FlexJustifyContent)[0];

  @property()
  flexAlignItems: FlexAlignItems = Object.values(FlexAlignItems)[0];

  @property()
  flexAlignContent: FlexAlignContent = Object.values(FlexAlignContent)[0];

  @property()
  containerStyle: string = '';

  @property()
  itemStyle: string = '';

  constructor() {
    super();
    let initComponent: NidocaFlexContainer | null = null;
    initComponent = this.loadShowcaseInitData('NidocaFlexContainer');
    if (initComponent == null) {
      initComponent = new NidocaFlexContainer();
    }

    this.devices = initComponent.devices;

    this.flexDirection = initComponent.flexDirection;

    this.flexWrap = initComponent.flexWrap;

    this.flexJustifyContent = initComponent.flexJustifyContent;

    this.flexAlignItems = initComponent.flexAlignItems;

    this.flexAlignContent = initComponent.flexAlignContent;

    this.containerStyle = initComponent.containerStyle;

    this.itemStyle = initComponent.itemStyle;
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
          <nidoca-flex-container
            .devices="${this.devices}"
            .flexDirection="${this.flexDirection}"
            .flexWrap="${this.flexWrap}"
            .flexJustifyContent="${this.flexJustifyContent}"
            .flexAlignItems="${this.flexAlignItems}"
            .flexAlignContent="${this.flexAlignContent}"
            containerStyle="${this.containerStyle}"
            itemStyle="${this.itemStyle}"
            >${this.loadShowcaseContent('NidocaFlexContainer')}</nidoca-flex-container
          >
        </nidoca-flex-container>
      </nidoca-floating-container>

      <nidoca-spacer cssStyle="padding:20vh;" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-flex-container containerStyle="width:75%;" .devices="${[NidocaDevice.DESKTOP]}">
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography
              .typographyType="${TypographyType.H2}"
              text="<nidoca-flex-container/>"
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
                    label="flexDirection"
                    .value="${this.flexDirection}"
                    .options="${this.toComboboxOptions('FlexDirection', FlexDirection)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.flexDirection = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    label="flexWrap"
                    .value="${this.flexWrap}"
                    .options="${this.toComboboxOptions('FlexWrap', FlexWrap)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.flexWrap = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    label="flexJustifyContent"
                    .value="${this.flexJustifyContent}"
                    .options="${this.toComboboxOptions('FlexJustifyContent', FlexJustifyContent)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.flexJustifyContent = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    label="flexAlignItems"
                    .value="${this.flexAlignItems}"
                    .options="${this.toComboboxOptions('FlexAlignItems', FlexAlignItems)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.flexAlignItems = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    label="flexAlignContent"
                    .value="${this.flexAlignContent}"
                    .options="${this.toComboboxOptions('FlexAlignContent', FlexAlignContent)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.flexAlignContent = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="containerStyle"
                    .value="${this.containerStyle}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) =>
                      (this.containerStyle = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="itemStyle"
                    .value="${this.itemStyle}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.itemStyle = event.detail.value)}"
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
                    code="${'<nidoca-flex-container \n  .devices="' +
                    this.toAttributeCodeString(this.devices, 'NidocaDevice[]', NidocaDevice) +
                    '" \n  .flexDirection="' +
                    this.toAttributeCodeString(this.flexDirection, 'FlexDirection', FlexDirection) +
                    '" \n  .flexWrap="' +
                    this.toAttributeCodeString(this.flexWrap, 'FlexWrap', FlexWrap) +
                    '" \n  .flexJustifyContent="' +
                    this.toAttributeCodeString(this.flexJustifyContent, 'FlexJustifyContent', FlexJustifyContent) +
                    '" \n  .flexAlignItems="' +
                    this.toAttributeCodeString(this.flexAlignItems, 'FlexAlignItems', FlexAlignItems) +
                    '" \n  .flexAlignContent="' +
                    this.toAttributeCodeString(this.flexAlignContent, 'FlexAlignContent', FlexAlignContent) +
                    '" \n  containerStyle="' +
                    this.toAttributeCodeString(this.containerStyle, 'string') +
                    '" \n  itemStyle="' +
                    this.toAttributeCodeString(this.itemStyle, 'string') +
                    '"  >\n     nidoca-flex-container\n</nidoca-flex-container>'}"
                  ></nidoca-code>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['devices', this.object2Value('NidocaDevice[]', null)],
              ['flexDirection', this.object2Value('FlexDirection', FlexDirection)],
              ['flexWrap', this.object2Value('FlexWrap', FlexWrap)],
              ['flexJustifyContent', this.object2Value('FlexJustifyContent', FlexJustifyContent)],
              ['flexAlignItems', this.object2Value('FlexAlignItems', FlexAlignItems)],
              ['flexAlignContent', this.object2Value('FlexAlignContent', FlexAlignContent)],
              ['containerStyle', this.object2Value('string', null)],
              ['itemStyle', this.object2Value('string', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-flex-container>
    `;
  }
}
