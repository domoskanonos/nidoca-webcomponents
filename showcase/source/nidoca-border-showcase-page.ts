import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  NidocaBorder,
  NidocaDevice,
  SpacerSize,
  SpacerType,
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
          <nidoca-border
            .borderProperties="${this.borderProperties}"
            borderSize="${this.borderSize}"
            shadowType="${this.shadowType}"
            >${this.loadShowcaseContent('NidocaBorder')}</nidoca-border
          >
        </nidoca-flex-container>
      </nidoca-floating-container>

      <nidoca-spacer cssStyle="padding:20vh;" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-flex-container containerStyle="width:75%;" .devices="${[NidocaDevice.DESKTOP]}">
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-border/>"></nidoca-typography>
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
                  <nidoca-form-combobox
                    .multiple="${true}"
                    size="5"
                    label="borderProperties"
                    .value="${this.borderProperties}"
                    .options="${this.toComboboxOptions('String', String)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.borderProperties = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="borderSize"
                    .value="${this.borderSize}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.borderSize = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="shadowType"
                    .value="${this.shadowType}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.shadowType = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

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
                    code="${'<nidoca-border \n  .borderProperties="' +
                    this.toAttributeCodeString(this.borderProperties, 'string[]', String) +
                    '" \n  borderSize="' +
                    this.toAttributeCodeString(this.borderSize, 'string') +
                    '" \n  shadowType="' +
                    this.toAttributeCodeString(this.shadowType, 'string') +
                    '" >\n     nidoca-border\n' +
                    this.loadShowcaseContentAsHtml('NidocaBorder') +
                    '\n</nidoca-border>'}"
                  ></nidoca-code>
                </nidoca-spacer>
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
          <nidoca-spacer></nidoca-spacer>
        </nidoca-flex-container>
      </nidoca-flex-container>
    `;
  }
}
