import {
  FlexContainerProperties,
  FlexItemProperties,
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
            >nidoca-rich-media</nidoca-rich-media
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
              ></nidoca-form-text>

              <nidoca-form-combobox
                label="richMediaType"
                .value="${this.richMediaType}"
                .options="${this.toComboboxOptions(RichMediaType)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                  (this.richMediaType = event.detail.value)}"
              ></nidoca-form-combobox>
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
                this.toAttributeCodeString(this.richMediaProperties, 'RichMediaProperties[]') +
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
