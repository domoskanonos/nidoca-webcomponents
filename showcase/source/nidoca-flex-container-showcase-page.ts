import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFlexContainer,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-flex-container-showcase-page')
export class NidocaFlexContainerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  flexDirection: string = '';

  @property()
  flexWrap: string = '';

  @property()
  flexJustifyContent: string = '';

  @property()
  flexAlignItems: string = '';

  @property()
  flexAlignContent: string = '';

  @property()
  flexContainerProperties: string[] = [];

  @property()
  flexItemProperties: string[] = [];

  @property()
  flexItemBasisValue: string = '';

  @property()
  flexItemBasisValues: string[] = [];

  constructor() {
    super();
    let initComponent: NidocaFlexContainer = new NidocaFlexContainer();

    this.flexDirection = initComponent.flexDirection;

    this.flexWrap = initComponent.flexWrap;

    this.flexJustifyContent = initComponent.flexJustifyContent;

    this.flexAlignItems = initComponent.flexAlignItems;

    this.flexAlignContent = initComponent.flexAlignContent;

    this.flexContainerProperties = initComponent.flexContainerProperties;

    this.flexItemProperties = initComponent.flexItemProperties;

    this.flexItemBasisValue = initComponent.flexItemBasisValue;

    this.flexItemBasisValues = initComponent.flexItemBasisValues;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-flex-container/>"></nidoca-typography>
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
              label="flexDirection"
              .value="${this.flexDirection}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.flexDirection = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="flexWrap"
              .value="${this.flexWrap}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.flexWrap = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="flexJustifyContent"
              .value="${this.flexJustifyContent}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.flexJustifyContent = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="flexAlignItems"
              .value="${this.flexAlignItems}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.flexAlignItems = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="flexAlignContent"
              .value="${this.flexAlignContent}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.flexAlignContent = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="flexContainerProperties"
              .value="${this.flexContainerProperties}"
              @nidoca-form-text-event-change="${(event: CustomEvent) =>
                (this.flexContainerProperties = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="flexItemProperties"
              .value="${this.flexItemProperties}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.flexItemProperties = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="flexItemBasisValue"
              .value="${this.flexItemBasisValue}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.flexItemBasisValue = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="flexItemBasisValues"
              .value="${this.flexItemBasisValues}"
              @nidoca-form-text-event-change="${(event: CustomEvent) =>
                (this.flexItemBasisValues = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-flex-container
              flexDirection="${this.flexDirection}"
              flexWrap="${this.flexWrap}"
              flexJustifyContent="${this.flexJustifyContent}"
              flexAlignItems="${this.flexAlignItems}"
              flexAlignContent="${this.flexAlignContent}"
              .flexContainerProperties="${this.flexContainerProperties}"
              .flexItemProperties="${this.flexItemProperties}"
              flexItemBasisValue="${this.flexItemBasisValue}"
              .flexItemBasisValues="${this.flexItemBasisValues}"
              >nidoca-flex-container</nidoca-flex-container
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-flex-container \n    flexDirection="' +
            this.toValue(this.flexDirection) +
            '" \n    flexWrap="' +
            this.toValue(this.flexWrap) +
            '" \n    flexJustifyContent="' +
            this.toValue(this.flexJustifyContent) +
            '" \n    flexAlignItems="' +
            this.toValue(this.flexAlignItems) +
            '" \n    flexAlignContent="' +
            this.toValue(this.flexAlignContent) +
            '" .\n    flexContainerProperties="' +
            this.toValue(this.flexContainerProperties) +
            '" .\n    flexItemProperties="' +
            this.toValue(this.flexItemProperties) +
            '" \n    flexItemBasisValue="' +
            this.toValue(this.flexItemBasisValue) +
            '" .\n    flexItemBasisValues="' +
            this.toValue(this.flexItemBasisValues) +
            '"  >\n     nidoca-flex-container\n</nidoca-flex-container>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['flexDirection', 'string'],
            ['flexWrap', 'string'],
            ['flexJustifyContent', 'string'],
            ['flexAlignItems', 'string'],
            ['flexAlignContent', 'string'],
            ['flexContainerProperties', 'string[]'],
            ['flexItemProperties', 'string[]'],
            ['flexItemBasisValue', 'string'],
            ['flexItemBasisValues', 'string[]'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
