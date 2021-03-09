import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaIcon,
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
    let initComponent: NidocaIcon = new NidocaIcon();

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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-icon/>"></nidoca-typography>
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
              label="icon"
              .value="${this.icon}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.icon = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="color"
              .value="${this.color}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.color = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="backgroundColor"
              .value="${this.backgroundColor}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.backgroundColor = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="iconShadowType"
              .value="${this.iconShadowType}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.iconShadowType = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="size"
              .value="${this.size}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="size"
              .value="${this.size}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
            ></nidoca-form-switch>

            <nidoca-form-text
              label="sizeUnit"
              .value="${this.sizeUnit}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.sizeUnit = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="iconTitle"
              .value="${this.iconTitle}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.iconTitle = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
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
              >nidoca-icon</nidoca-icon
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-icon \n    icon="' +
            this.toValue(this.icon) +
            '" \n    color="' +
            this.toValue(this.color) +
            '" \n    backgroundColor="' +
            this.toValue(this.backgroundColor) +
            '" \n    iconShadowType="' +
            this.toValue(this.iconShadowType) +
            '" .\n    size="' +
            this.toValue(this.size) +
            '" \n    sizeUnit="' +
            this.toValue(this.sizeUnit) +
            '" \n    iconTitle="' +
            this.toValue(this.iconTitle) +
            '" .\n    withIconSpace="' +
            this.toValue(this.withIconSpace) +
            '" .\n    round="' +
            this.toValue(this.round) +
            '" .\n    clickable="' +
            this.toValue(this.clickable) +
            '" .\n    deactivated="' +
            this.toValue(this.deactivated) +
            '" >\n     nidoca-icon\n</nidoca-icon>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['icon', 'string'],
            ['color', 'string'],
            ['backgroundColor', 'string'],
            ['iconShadowType', 'string'],
            ['size', 'number'],
            ['sizeUnit', 'string'],
            ['iconTitle', 'string'],
            ['withIconSpace', 'boolean'],
            ['round', 'boolean'],
            ['clickable', 'boolean'],
            ['deactivated', 'boolean'],
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
