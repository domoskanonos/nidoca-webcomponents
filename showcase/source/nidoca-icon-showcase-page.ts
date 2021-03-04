import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaIcon,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-icon-showcase-page')
export class NidocaIconShowcasePage extends NidocaShowcaseTemplate {
  @property()
  icon: string | null | undefined = '';

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
          FlexContainerProperties.CONTAINER_WIDTH_50,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[
          FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL,
          FlexItemProperties.KEYLINE_SIZE_MEDIUM,
        ]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-icon/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer .spacerAlignment="${SpacerAlignment.VERTICAL}" .spacerSize="${SpacerSize.BIG}">
              <nidoca-icon
                .icon=${this.icon}
                color=${this.color}
                backgroundColor=${this.backgroundColor}
                iconShadowType=${this.iconShadowType}
                .size=${this.size}
                sizeUnit=${this.sizeUnit}
                iconTitle=${this.iconTitle}
                .withIconSpace=${this.withIconSpace}
                .round=${this.round}
                .clickable=${this.clickable}
                .deactivated=${this.deactivated}
              ></nidoca-icon>
            </nidoca-spacer>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> </nidoca-tab-content>
        </nidoca-tabs>
      </nidoca-flex-container>
    `;
  }
}
