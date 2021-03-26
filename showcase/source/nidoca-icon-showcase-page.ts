import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  IconShadowType,
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
  iconShadowType: IconShadowType = Object.values(IconShadowType)[0];

  @property()
  withIconSpace: boolean = false;

  @property()
  round: boolean = false;

  @property()
  clickable: boolean = false;

  @property()
  deactivated: boolean = false;

  @property()
  color: string = '';

  @property()
  backgroundColor: string = '';

  @property()
  size: number = 0;

  @property()
  sizeUnit: string = '';

  constructor() {
    super();
    let initComponent: NidocaIcon | null = null;
    initComponent = this.loadShowcaseInitData('NidocaIcon');
    if (initComponent == null) {
      initComponent = new NidocaIcon();
    }

    this.icon = initComponent.icon;

    this.iconShadowType = initComponent.iconShadowType;

    this.withIconSpace = initComponent.withIconSpace;

    this.round = initComponent.round;

    this.clickable = initComponent.clickable;

    this.deactivated = initComponent.deactivated;

    this.color = initComponent.color;

    this.backgroundColor = initComponent.backgroundColor;

    this.size = initComponent.size;

    this.sizeUnit = initComponent.sizeUnit;
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
          <nidoca-icon
            icon="${this.icon}"
            .iconShadowType="${this.iconShadowType}"
            .withIconSpace="${this.withIconSpace}"
            .round="${this.round}"
            .clickable="${this.clickable}"
            .deactivated="${this.deactivated}"
            color="${this.color}"
            backgroundColor="${this.backgroundColor}"
            .size="${this.size}"
            sizeUnit="${this.sizeUnit}"
            >${this.loadShowcaseContent('NidocaIcon')}</nidoca-icon
          >
        </nidoca-flex-container>
      </nidoca-floating-container>

      <nidoca-spacer cssStyle="padding:20vh;" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-flex-container containerStyle="width:75%;" .devices="${[NidocaDevice.DESKTOP]}">
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

                  <nidoca-form-combobox
                    label="iconShadowType"
                    .value="${this.iconShadowType}"
                    .options="${this.toComboboxOptions('IconShadowType', IconShadowType)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.iconShadowType = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

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
                    code="${'<nidoca-icon \n  icon="' +
                    this.toAttributeCodeString(this.icon, 'string') +
                    '" \n  .iconShadowType="' +
                    this.toAttributeCodeString(this.iconShadowType, 'IconShadowType', IconShadowType) +
                    '" \n  .withIconSpace="' +
                    this.toAttributeCodeString(this.withIconSpace, 'boolean') +
                    '" \n  .round="' +
                    this.toAttributeCodeString(this.round, 'boolean') +
                    '" \n  .clickable="' +
                    this.toAttributeCodeString(this.clickable, 'boolean') +
                    '" \n  .deactivated="' +
                    this.toAttributeCodeString(this.deactivated, 'boolean') +
                    '" \n  color="' +
                    this.toAttributeCodeString(this.color, 'string') +
                    '" \n  backgroundColor="' +
                    this.toAttributeCodeString(this.backgroundColor, 'string') +
                    '" \n  .size="' +
                    this.toAttributeCodeString(this.size, 'number') +
                    '" \n  sizeUnit="' +
                    this.toAttributeCodeString(this.sizeUnit, 'string') +
                    '" >\n     nidoca-icon\n</nidoca-icon>'}"
                  ></nidoca-code>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['icon', this.object2Value('string', null)],
              ['iconShadowType', this.object2Value('IconShadowType', IconShadowType)],
              ['withIconSpace', this.object2Value('boolean', null)],
              ['round', this.object2Value('boolean', null)],
              ['clickable', this.object2Value('boolean', null)],
              ['deactivated', this.object2Value('boolean', null)],
              ['color', this.object2Value('string', null)],
              ['backgroundColor', this.object2Value('string', null)],
              ['size', this.object2Value('number', null)],
              ['sizeUnit', this.object2Value('string', null)],
            ]}"
          ></nidoca-table>
          <nidoca-spacer></nidoca-spacer>
        </nidoca-flex-container>
      </nidoca-flex-container>
    `;
  }
}
