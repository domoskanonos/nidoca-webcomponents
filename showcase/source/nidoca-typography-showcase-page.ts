import {
  ContainerProperty,
  NidocaDevice,
  NidocaTypography,
  SpacerSize,
  SpacerType,
  TypographyAlignment,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-typography-showcase-page')
export class NidocaTypographyShowcasePage extends NidocaShowcaseTemplate {
  @property()
  typographyType: TypographyType = Object.values(TypographyType)[0];

  @property()
  typographyAlignment: TypographyAlignment = Object.values(TypographyAlignment)[0];

  @property()
  text: string = '';

  constructor() {
    super();
    let initComponent: NidocaTypography | null = null;
    initComponent = this.loadShowcaseInitData('NidocaTypography');
    if (initComponent == null) {
      initComponent = new NidocaTypography();
    }

    this.typographyType = initComponent.typographyType;

    this.typographyAlignment = initComponent.typographyAlignment;

    this.text = initComponent.text;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-typography
            .typographyType="${this.typographyType}"
            .typographyAlignment="${this.typographyAlignment}"
            text="${this.text}"
            >${this.loadShowcaseContent('NidocaTypography')}</nidoca-typography
          >
        </nidoca-box>
      </nidoca-floating-container>

      <nidoca-spacer size="20vh" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-container
        .containerProperties="${[
          ContainerProperty.WIDTH_75,
          ContainerProperty.SMARTPHONE_MAX_WIDTH,
          ContainerProperty.TABLET_MAX_WIDTH,
        ]}"
      >
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-typography/>"></nidoca-typography>
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
                    label="typographyType"
                    .value="${this.typographyType}"
                    .options="${this.toComboboxOptions('TypographyType', TypographyType)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.typographyType = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    label="typographyAlignment"
                    .value="${this.typographyAlignment}"
                    .options="${this.toComboboxOptions('TypographyAlignment', TypographyAlignment)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.typographyAlignment = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="text"
                    .value="${this.text}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.text = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
                <nidoca-code
                  code="${'<nidoca-typography \n  .typographyType="' +
                  this.toAttributeCodeString(this.typographyType, 'TypographyType', TypographyType) +
                  '" \n  .typographyAlignment="' +
                  this.toAttributeCodeString(this.typographyAlignment, 'TypographyAlignment', TypographyAlignment) +
                  '" \n  text="' +
                  this.toAttributeCodeString(this.text, 'string') +
                  '" >\n     nidoca-typography\n</nidoca-typography>'}"
                ></nidoca-code>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['typographyType', this.object2Value('TypographyType', TypographyType)],
              ['typographyAlignment', this.object2Value('TypographyAlignment', TypographyAlignment)],
              ['text', this.object2Value('string', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-container>
    `;
  }
}
