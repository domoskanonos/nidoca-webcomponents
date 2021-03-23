import {
  ContainerProperty,
  NidocaDevice,
  NidocaGridContainer,
  SpacerSize,
  SpacerType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-grid-container-showcase-page')
export class NidocaGridContainerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  gridTemplateRows: string[] = [];

  @property()
  gridTemplateColumns: string[] = [];

  @property()
  gridJustifyItems: string = '';

  @property()
  gridAlignItems: string = '';

  @property()
  height: string = '';

  @property()
  minHeight: string = '';

  @property()
  width: string = '';

  @property()
  minWidth: string = '';

  constructor() {
    super();
    let initComponent: NidocaGridContainer | null = null;
    initComponent = this.loadShowcaseInitData('NidocaGridContainer');
    if (initComponent == null) {
      initComponent = new NidocaGridContainer();
    }

    this.gridTemplateRows = initComponent.gridTemplateRows;

    this.gridTemplateColumns = initComponent.gridTemplateColumns;

    this.gridJustifyItems = initComponent.gridJustifyItems;

    this.gridAlignItems = initComponent.gridAlignItems;

    this.height = initComponent.height;

    this.minHeight = initComponent.minHeight;

    this.width = initComponent.width;

    this.minWidth = initComponent.minWidth;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-grid-container
            .gridTemplateRows="${this.gridTemplateRows}"
            .gridTemplateColumns="${this.gridTemplateColumns}"
            gridJustifyItems="${this.gridJustifyItems}"
            gridAlignItems="${this.gridAlignItems}"
            height="${this.height}"
            minHeight="${this.minHeight}"
            width="${this.width}"
            minWidth="${this.minWidth}"
            >${this.loadShowcaseContent('NidocaGridContainer')}</nidoca-grid-container
          >
        </nidoca-box>
      </nidoca-floating-container>

      <nidoca-spacer size="20vh" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-container
        .containerProperties="${[
          ContainerProperty.WIDTH_75,
          ContainerProperty.SMARTPHONE_MAX_WIDTH,
          ContainerProperty.TABLET_MAX_WIDTH,
        ]}"
      >
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography
              .typographyType="${TypographyType.H2}"
              text="<nidoca-grid-container/>"
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
                    size="3"
                    label="gridTemplateRows"
                    .value="${this.gridTemplateRows}"
                    .options="${this.toComboboxOptions('String', String)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.gridTemplateRows = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    .multiple="${true}"
                    size="3"
                    label="gridTemplateColumns"
                    .value="${this.gridTemplateColumns}"
                    .options="${this.toComboboxOptions('String', String)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.gridTemplateColumns = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="gridJustifyItems"
                    .value="${this.gridJustifyItems}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) =>
                      (this.gridJustifyItems = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="gridAlignItems"
                    .value="${this.gridAlignItems}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) =>
                      (this.gridAlignItems = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="height"
                    .value="${this.height}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.height = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="minHeight"
                    .value="${this.minHeight}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.minHeight = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="width"
                    .value="${this.width}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.width = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="minWidth"
                    .value="${this.minWidth}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.minWidth = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
                <nidoca-code
                  code="${'<nidoca-grid-container \n  .gridTemplateRows="' +
                  this.toAttributeCodeString(this.gridTemplateRows, 'string[]', String) +
                  '" \n  .gridTemplateColumns="' +
                  this.toAttributeCodeString(this.gridTemplateColumns, 'string[]', String) +
                  '" \n  gridJustifyItems="' +
                  this.toAttributeCodeString(this.gridJustifyItems, 'string') +
                  '" \n  gridAlignItems="' +
                  this.toAttributeCodeString(this.gridAlignItems, 'string') +
                  '" \n  height="' +
                  this.toAttributeCodeString(this.height, 'string') +
                  '" \n  minHeight="' +
                  this.toAttributeCodeString(this.minHeight, 'string') +
                  '" \n  width="' +
                  this.toAttributeCodeString(this.width, 'string') +
                  '" \n  minWidth="' +
                  this.toAttributeCodeString(this.minWidth, 'string') +
                  '" >\n     nidoca-grid-container\n</nidoca-grid-container>'}"
                ></nidoca-code>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['gridTemplateRows', this.object2Value('string[]', null)],
              ['gridTemplateColumns', this.object2Value('string[]', null)],
              ['gridJustifyItems', this.object2Value('string', null)],
              ['gridAlignItems', this.object2Value('string', null)],
              ['height', this.object2Value('string', null)],
              ['minHeight', this.object2Value('string', null)],
              ['width', this.object2Value('string', null)],
              ['minWidth', this.object2Value('string', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-container>
    `;
  }
}
