import {FlexContainerProperties, FlexItemProperties, NidocaBorder, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-border-showcase-page')
export class NidocaBorderShowcasePage extends NidocaShowcaseTemplate {
  @property()
  borderProperties: string[] = [];

  @property()
  borderSize: string = '';

  @property()
  shadowType: string = '';

  constructor() {
    super();
    let initComponent: NidocaBorder = new NidocaBorder();

    this.borderProperties = initComponent.borderProperties;

    this.borderSize = initComponent.borderSize;

    this.shadowType = initComponent.shadowType;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-border/>"></nidoca-typography>
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
              label="borderProperties"
              .value="${this.borderProperties}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.borderProperties = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="borderSize"
              .value="${this.borderSize}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.borderSize = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="shadowType"
              .value="${this.shadowType}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.shadowType = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-border
              .borderProperties="${this.borderProperties}"
              borderSize="${this.borderSize}"
              shadowType="${this.shadowType}"
              >nidoca-border</nidoca-border
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-border .\n    borderProperties="' +
            this.toValue(this.borderProperties) +
            '" \n    borderSize="' +
            this.toValue(this.borderSize) +
            '" \n    shadowType="' +
            this.toValue(this.shadowType) +
            '" >\n     nidoca-border\n</nidoca-border>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['borderProperties', 'string[]'],
            ['borderSize', 'string'],
            ['shadowType', 'string'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
