import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  NidocaDevice,
  NidocaRichMedia,
  RichMediaProperties,
  RichMediaType,
  SpacerSize,
  SpacerType,
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
    let initComponent: NidocaRichMedia | null = null;
    initComponent = this.loadShowcaseInitData('NidocaRichMedia');
    if (initComponent == null) {
      initComponent = new NidocaRichMedia();
    }

    this.src = initComponent.src;

    this.richMediaType = initComponent.richMediaType;

    this.richMediaProperties = initComponent.richMediaProperties;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        height="40vh"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-flex-container
          .flexDirection="${FlexDirection.ROW}"
          .flexWrap="${FlexWrap.WRAP}"
          .flexJustifyContent="${FlexJustifyContent.CENTER}"
          .flexAlignItems="${FlexAlignItems.CENTER}"
          .flexAlignContent="${FlexAlignContent.SPACE_AROUND}"
          containerStyle="height:100%; width:100%; background-color:var(--app-color-surface-background-light)"
          itemStyle=""
        >
          <nidoca-rich-media
            src="${this.src}"
            .richMediaType="${this.richMediaType}"
            .richMediaProperties="${this.richMediaProperties}"
            >${this.loadShowcaseContent('NidocaRichMedia')}</nidoca-rich-media
          >
        </nidoca-flex-container>
      </nidoca-floating-container>

      <nidoca-spacer cssStyle="padding:20vh;" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-flex-container containerStyle="width:75%;" .devices="${[NidocaDevice.DESKTOP]}">
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-rich-media/>"></nidoca-typography>
          </nidoca-spacer>

          <nidoca-tabs>
            <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
            <nidoca-tab slot="tab" text="source"></nidoca-tab>

            <nidoca-tab-content slot="tabContent" .selected="${true}">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.TOP, SpacerType.BOTTOM]}">
                <nidoca-spacer
                  spacerSize="${SpacerSize.NORMAL}"
                  .spacerTypes="${[SpacerType.LEFT, SpacerType.RIGHT]}"
                  .devices="${[NidocaDevice.MOBILE]}"
                >
                  <nidoca-form-text
                    label="src"
                    .value="${this.src}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.src = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

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

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    .multiple="${true}"
                    size="5"
                    label="richMediaProperties"
                    .value="${this.richMediaProperties}"
                    .options="${this.toComboboxOptions('RichMediaProperties', RichMediaProperties)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.richMediaProperties = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.TOP, SpacerType.BOTTOM]}">
                <nidoca-spacer
                  spacerSize="${SpacerSize.NORMAL}"
                  .spacerTypes="${[SpacerType.LEFT, SpacerType.RIGHT]}"
                  .devices="${[NidocaDevice.MOBILE]}"
                >
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
      </nidoca-flex-container>
    `;
  }
}
