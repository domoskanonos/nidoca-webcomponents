import {
  FlexContainerProperty,
  FlexItemProperty,
  NidocaRichMedia,
  RichMediaProperties,
  RichMediaType,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-rich-media-showcase-page')
export class NidocaRichMediaShowcasePage extends NidocaShowcaseTemplate {
  @property()
  src: string = '';

  @property()
  richMediaType: RichMediaType = Object.values(RichMediaType)[0];

  @property()
  richMediaProperties: RichMediaProperties[] = [];

  constructor() {
    super();
    let initComponent: NidocaRichMedia = new NidocaRichMedia();

    this.src = initComponent.src;

    this.richMediaType = initComponent.richMediaType;

    this.richMediaProperties = initComponent.richMediaProperties;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-rich-media
            src="${this.src}"
            .richMediaType="${this.richMediaType}"
            .richMediaProperties="${this.richMediaProperties}"
          ></nidoca-rich-media>
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-rich-media/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-text
                label="src"
                .value="${this.src}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.src = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: src
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-combobox
                label="richMediaType"
                .value="${this.richMediaType}"
                .options="${this.toComboboxOptions('RichMediaType', RichMediaType)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                  (this.richMediaType = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: richMediaType
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-combobox
                .multiple="${true}"
                label="richMediaProperties"
                .value="${this.richMediaProperties}"
                .options="${this.toComboboxOptions('RichMediaProperties', RichMediaProperties)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                  (this.richMediaProperties = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: richMediaProperties
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-rich-media \n  src="' +
                this.toAttributeCodeString(this.src, 'string') +
                '" \n  .richMediaType="' +
                this.toAttributeCodeString(this.richMediaType, 'RichMediaType', RichMediaType) +
                '" \n  .richMediaProperties="' +
                this.toAttributeCodeString(this.richMediaProperties, 'RichMediaProperties[]', RichMediaProperties) +
                '" >\n     nidoca-rich-media\n</nidoca-rich-media>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['src', this.object2Value('string', null)],
            ['richMediaType', this.object2Value('RichMediaType', RichMediaType)],
            ['richMediaProperties', this.object2Value('RichMediaProperties[]', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
