import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaBorder,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
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
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-border
            .borderProperties="${this.borderProperties}"
            borderSize="${this.borderSize}"
            shadowType="${this.shadowType}"
            >nidoca-border</nidoca-border
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-border/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
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
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-border \n  .borderProperties="' +
                this.toAttributeCodeString(this.borderProperties, 'string[]') +
                '" \n  borderSize="' +
                this.toAttributeCodeString(this.borderSize, 'string') +
                '" \n  shadowType="' +
                this.toAttributeCodeString(this.shadowType, 'string') +
                '" >\n     nidoca-border\n</nidoca-border>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['borderProperties', this.object2Value('string[]', null)],
            ['borderSize', this.object2Value('string', null)],
            ['shadowType', this.object2Value('string', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
