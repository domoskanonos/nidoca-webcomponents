import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFlexContainer,
  SpacerAlignment,
  SpacerSize,
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
          FlexContainerProperties.CONTAINER_WIDTH_50,
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
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer
              .spacerAlignment="${SpacerAlignment.VERTICAL}"
              .spacerSize="${SpacerSize.LITTLE}"
            ></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
              <nidoca-flex-container
                flexDirection=${this.flexDirection}
                flexWrap=${this.flexWrap}
                flexJustifyContent=${this.flexJustifyContent}
                flexAlignItems=${this.flexAlignItems}
                flexAlignContent=${this.flexAlignContent}
                .flexContainerProperties=${this.flexContainerProperties}
                .flexItemProperties=${this.flexItemProperties}
                flexItemBasisValue=${this.flexItemBasisValue}
                .flexItemBasisValues=${this.flexItemBasisValues}
                >nidoca-flex-container</nidoca-flex-container
              >
            </nidoca-box>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer
              .spacerAlignment="${SpacerAlignment.VERTICAL}"
              .spacerSize="${SpacerSize.LITTLE}"
            ></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
              <nidoca-code code="Code"></nidoca-code>
            </nidoca-box>
          </nidoca-tab-content>
        </nidoca-tabs>

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
          @nidoca-form-text-event-change="${(event: CustomEvent) => (this.flexItemBasisValues = event.detail.value)}"
        ></nidoca-form-text>

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
}
