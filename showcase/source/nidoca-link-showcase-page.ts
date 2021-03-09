import {FlexContainerProperties, FlexItemProperties, NidocaLink, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-link-showcase-page')
export class NidocaLinkShowcasePage extends NidocaShowcaseTemplate {
  @property()
  text: string = '';

  @property()
  href: string = '';

  @property()
  targetType: string = '';

  constructor() {
    super();
    let initComponent: NidocaLink = new NidocaLink();

    this.text = initComponent.text;

    this.href = initComponent.href;

    this.targetType = initComponent.targetType;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-link/>"></nidoca-typography>
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

            <nidoca-form-text
              label="href"
              .value="${this.href}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.href = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="targetType"
              .value="${this.targetType}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.targetType = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-link text="${this.text}" href="${this.href}" targetType="${this.targetType}"
              >nidoca-link</nidoca-link
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-link \n    text="' +
            this.toValue(this.text) +
            '" \n    href="' +
            this.toValue(this.href) +
            '" \n    targetType="' +
            this.toValue(this.targetType) +
            '" >\n     nidoca-link\n</nidoca-link>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['text', 'string'],
            ['href', 'string'],
            ['targetType', 'string'],
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
