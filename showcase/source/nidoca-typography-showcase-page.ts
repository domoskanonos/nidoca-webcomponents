import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaTypography,
  SpacerAlignment,
  SpacerSize,
  TypographyAlignment,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-typography-showcase-page')
export class NidocaTypographyShowcasePage extends NidocaShowcaseTemplate {
  @property()
  typographyType: TypographyType = Object.values(TypographyType)[0];

  @property()
  typographyAlignment: TypographyAlignment = Object.values(TypographyAlignment)[0];

  @property()
  text: string = '';

  constructor() {
    super();
    let initComponent: NidocaTypography = new NidocaTypography();

    this.typographyType = initComponent.typographyType;

    this.typographyAlignment = initComponent.typographyAlignment;

    this.text = initComponent.text;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-typography/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer .spacerAlignment="${SpacerAlignment.VERTICAL}" .spacerSize="${SpacerSize.BIG}">
              <nidoca-typography
                .typographyType=${this.typographyType}
                .typographyAlignment=${this.typographyAlignment}
                text=${this.text}
              ></nidoca-typography>
            </nidoca-spacer>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> </nidoca-tab-content>
        </nidoca-tabs>
      </nidoca-flex-container>
    `;
  }
}
