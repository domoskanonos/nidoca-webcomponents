import {
  FlexContainerProperty,
  FlexItemProperty,
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
    let initComponent: NidocaBorder | null = null;
    initComponent = this.loadShowcaseInitData('NidocaBorder');
    if (initComponent == null) {
      initComponent = new NidocaBorder();
    }

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
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-border
            .borderProperties="${this.borderProperties}"
            borderSize="${this.borderSize}"
            shadowType="${this.shadowType}"
            >${this.loadShowcaseContent('NidocaBorder')}</nidoca-border
          >
        </nidoca-box>
      </nidoca-floating-container>

      <nidoca-spacer size="12.5vh" spacerAlignment="${SpacerAlignment.VERTICAL}"></nidoca-spacer>

      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperty.CONTAINER_WIDTH_75,
          FlexContainerProperty.TABLET_MAX_WIDTH,
          FlexContainerProperty.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperty.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperty.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperty.KEYLINE_ALIGNMENT_BOTH, FlexItemProperty.KEYLINE_SIZE_MEDIUM]}"
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
              <nidoca-form-combobox
                .multiple="${true}"
                size="3"
                label="borderProperties"
                .value="${this.borderProperties}"
                .options="${this.toComboboxOptions('String', String)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                  (this.borderProperties = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="borderSize"
                .value="${this.borderSize}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.borderSize = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="shadowType"
                .value="${this.shadowType}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.shadowType = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-border \n  .borderProperties="' +
                this.toAttributeCodeString(this.borderProperties, 'string[]', String) +
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
