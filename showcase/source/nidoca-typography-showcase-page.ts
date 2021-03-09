import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaTypography,
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
          FlexContainerProperties.CONTAINER_WIDTH_100,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-typography/>"></nidoca-typography>
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
              label="text"
              .value="${this.text}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.text = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-typography
              .typographyType="${this.typographyType}"
              .typographyAlignment="${this.typographyAlignment}"
              text="${this.text}"
              >nidoca-typography</nidoca-typography
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-typography .\n    typographyType="' +
            this.toValue(this.typographyType) +
            '" .\n    typographyAlignment="' +
            this.toValue(this.typographyAlignment) +
            '" \n    text="' +
            this.toValue(this.text) +
            '" >\n     nidoca-typography\n</nidoca-typography>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['typographyType', 'TypographyType'],
            ['typographyAlignment', 'TypographyAlignment'],
            ['text', 'string'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
