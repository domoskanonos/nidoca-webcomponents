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
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
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
      </nidoca-floating-container>

      <nidoca-spacer size="12.5vh" spacerAlignment="${SpacerAlignment.VERTICAL}"></nidoca-spacer>

      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperties.CONTAINER_WIDTH_75,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.VERTICAL}">
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-flex-container/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
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
                @nidoca-form-text-event-change="${(event: CustomEvent) =>
                  (this.flexJustifyContent = event.detail.value)}"
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
                label="flexItemBasisValue"
                .value="${this.flexItemBasisValue}"
                @nidoca-form-text-event-change="${(event: CustomEvent) =>
                  (this.flexItemBasisValue = event.detail.value)}"
              ></nidoca-form-text>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-flex-container \n  flexDirection="' +
                this.toAttributeCodeString(this.flexDirection, 'string') +
                '" \n  flexWrap="' +
                this.toAttributeCodeString(this.flexWrap, 'string') +
                '" \n  flexJustifyContent="' +
                this.toAttributeCodeString(this.flexJustifyContent, 'string') +
                '" \n  flexAlignItems="' +
                this.toAttributeCodeString(this.flexAlignItems, 'string') +
                '" \n  flexAlignContent="' +
                this.toAttributeCodeString(this.flexAlignContent, 'string') +
                '" \n  .flexContainerProperties="' +
                this.toAttributeCodeString(this.flexContainerProperties, 'string[]') +
                '" \n  .flexItemProperties="' +
                this.toAttributeCodeString(this.flexItemProperties, 'string[]') +
                '" \n  flexItemBasisValue="' +
                this.toAttributeCodeString(this.flexItemBasisValue, 'string') +
                '" \n  .flexItemBasisValues="' +
                this.toAttributeCodeString(this.flexItemBasisValues, 'string[]') +
                '"  >\n     nidoca-flex-container\n</nidoca-flex-container>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['flexDirection', this.object2Value('string', null)],
            ['flexWrap', this.object2Value('string', null)],
            ['flexJustifyContent', this.object2Value('string', null)],
            ['flexAlignItems', this.object2Value('string', null)],
            ['flexAlignContent', this.object2Value('string', null)],
            ['flexContainerProperties', this.object2Value('string[]', null)],
            ['flexItemProperties', this.object2Value('string[]', null)],
            ['flexItemBasisValue', this.object2Value('string', null)],
            ['flexItemBasisValues', this.object2Value('string[]', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
