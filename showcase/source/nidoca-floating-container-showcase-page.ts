import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFloatingContainer,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-floating-container-showcase-page')
export class NidocaFloatingContainerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  height: string = '';

  @property()
  width: string = '';

  @property()
  left: string = '';

  @property()
  top: string = '';

  @property()
  right: string = '';

  @property()
  bottom: string = '';

  constructor() {
    super();
    let initComponent: NidocaFloatingContainer = new NidocaFloatingContainer();

    this.height = initComponent.height;

    this.width = initComponent.width;

    this.left = initComponent.left;

    this.top = initComponent.top;

    this.right = initComponent.right;

    this.bottom = initComponent.bottom;
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
        <nidoca-typography
          .typographyType="${TypographyType.H2}"
          text="<nidoca-floating-container/>"
        ></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer .spacerAlignment="${SpacerAlignment.VERTICAL}" .spacerSize="${SpacerSize.BIG}">
              <nidoca-floating-container
                height=${this.height}
                width=${this.width}
                left=${this.left}
                top=${this.top}
                right=${this.right}
                bottom=${this.bottom}
                >nidoca-floating-container</nidoca-floating-container
              >
            </nidoca-spacer>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> </nidoca-tab-content>
        </nidoca-tabs>
      </nidoca-flex-container>

      <nidoca-table
        .headers="${['property', 'type']}"
        .rows="${[
          ['height', 'string'],
          ['width', 'string'],
          ['left', 'string'],
          ['top', 'string'],
          ['right', 'string'],
          ['bottom', 'string'],
        ]}"
      ></nidoca-table>
    `;
  }
}
