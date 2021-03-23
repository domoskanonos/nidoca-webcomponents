import {
  ContainerProperty,
  NidocaDevice,
  NidocaIcon,
  SpacerSize,
  SpacerType,
  TextType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-icon-showcase-page')
export class NidocaIconShowcasePage extends NidocaShowcaseTemplate {
  @property()
  icon: string = '';

  @property()
  color: string = '';

  @property()
  backgroundColor: string = '';

  @property()
  iconShadowType: string = '';

  @property()
  size: number = 0;

  @property()
  sizeUnit: string = '';

  @property()
  iconTitle: string = '';

  @property()
  withIconSpace: boolean = false;

  @property()
  round: boolean = false;

  @property()
  clickable: boolean = false;

  @property()
  deactivated: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaIcon | null = null;
    initComponent = this.loadShowcaseInitData('NidocaIcon');
    if (initComponent == null) {
      initComponent = new NidocaIcon();
    }

    this.icon = initComponent.icon;

    this.color = initComponent.color;

    this.backgroundColor = initComponent.backgroundColor;

    this.iconShadowType = initComponent.iconShadowType;

    this.size = initComponent.size;

    this.sizeUnit = initComponent.sizeUnit;

    this.iconTitle = initComponent.iconTitle;

    this.withIconSpace = initComponent.withIconSpace;

    this.round = initComponent.round;

    this.clickable = initComponent.clickable;

    this.deactivated = initComponent.deactivated;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-icon
            icon="${this.icon}"
            color="${this.color}"
            backgroundColor="${this.backgroundColor}"
            iconShadowType="${this.iconShadowType}"
            .size="${this.size}"
            sizeUnit="${this.sizeUnit}"
            iconTitle="${this.iconTitle}"
            .withIconSpace="${this.withIconSpace}"
            .round="${this.round}"
            .clickable="${this.clickable}"
            .deactivated="${this.deactivated}"
            >${this.loadShowcaseContent('NidocaIcon')}</nidoca-icon
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-icon/>"></nidoca-typography>
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
                  <nidoca-form-text
                    label="icon"
                    .value="${this.icon}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.icon = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="color"
                    .value="${this.color}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.color = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="backgroundColor"
                    .value="${this.backgroundColor}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) =>
                      (this.backgroundColor = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="iconShadowType"
                    .value="${this.iconShadowType}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) =>
                      (this.iconShadowType = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    textType="${TextType.NUMBER}"
                    label="size"
                    .value="${this.size}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="sizeUnit"
                    .value="${this.sizeUnit}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.sizeUnit = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="iconTitle"
                    .value="${this.iconTitle}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.iconTitle = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-switch
                    name="withIconSpace"
                    infoText="withIconSpace"
                    .selected="${this.withIconSpace}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) =>
                      (this.withIconSpace = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-switch
                    name="round"
                    infoText="round"
                    .selected="${this.round}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.round = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-switch
                    name="clickable"
                    infoText="clickable"
                    .selected="${this.clickable}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.clickable = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-switch
                    name="deactivated"
                    infoText="deactivated"
                    .selected="${this.deactivated}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) =>
                      (this.deactivated = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
                <nidoca-code
                  code="${'<nidoca-icon \n  icon="' +
                  this.toAttributeCodeString(this.icon, 'string') +
                  '" \n  color="' +
                  this.toAttributeCodeString(this.color, 'string') +
                  '" \n  backgroundColor="' +
                  this.toAttributeCodeString(this.backgroundColor, 'string') +
                  '" \n  iconShadowType="' +
                  this.toAttributeCodeString(this.iconShadowType, 'string') +
                  '" \n  .size="' +
                  this.toAttributeCodeString(this.size, 'number') +
                  '" \n  sizeUnit="' +
                  this.toAttributeCodeString(this.sizeUnit, 'string') +
                  '" \n  iconTitle="' +
                  this.toAttributeCodeString(this.iconTitle, 'string') +
                  '" \n  .withIconSpace="' +
                  this.toAttributeCodeString(this.withIconSpace, 'boolean') +
                  '" \n  .round="' +
                  this.toAttributeCodeString(this.round, 'boolean') +
                  '" \n  .clickable="' +
                  this.toAttributeCodeString(this.clickable, 'boolean') +
                  '" \n  .deactivated="' +
                  this.toAttributeCodeString(this.deactivated, 'boolean') +
                  '" >\n     nidoca-icon\n</nidoca-icon>'}"
                ></nidoca-code>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['icon', this.object2Value('string', null)],
              ['color', this.object2Value('string', null)],
              ['backgroundColor', this.object2Value('string', null)],
              ['iconShadowType', this.object2Value('string', null)],
              ['size', this.object2Value('number', null)],
              ['sizeUnit', this.object2Value('string', null)],
              ['iconTitle', this.object2Value('string', null)],
              ['withIconSpace', this.object2Value('boolean', null)],
              ['round', this.object2Value('boolean', null)],
              ['clickable', this.object2Value('boolean', null)],
              ['deactivated', this.object2Value('boolean', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-container>
    `;
  }
}
