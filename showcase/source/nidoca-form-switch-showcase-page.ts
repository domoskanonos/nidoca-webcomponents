import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexWrap,
  NidocaDevice,
  NidocaFormSwitch,
  SpacerSize,
  SpacerType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-switch-showcase-page')
export class NidocaFormSwitchShowcasePage extends NidocaShowcaseTemplate {
  @property()
  name: string = '';

  @property()
  assistiveText: string = '';

  @property()
  infoText: string = '';

  @property()
  errorText: string = '';

  @property()
  selected: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaFormSwitch | null = null;
    initComponent = this.loadShowcaseInitData('NidocaFormSwitch');
    if (initComponent == null) {
      initComponent = new NidocaFormSwitch();
    }

    this.name = initComponent.name;

    this.assistiveText = initComponent.assistiveText;

    this.infoText = initComponent.infoText;

    this.errorText = initComponent.errorText;

    this.selected = initComponent.selected;
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
          <nidoca-form-switch
            name="${this.name}"
            assistiveText="${this.assistiveText}"
            infoText="${this.infoText}"
            errorText="${this.errorText}"
            .selected="${this.selected}"
            >${this.loadShowcaseContent('NidocaFormSwitch')}</nidoca-form-switch
          >
        </nidoca-flex-container>
      </nidoca-floating-container>

      <nidoca-spacer cssStyle="padding:20vh;" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-flex-container containerStyle="width:75%;" .devices="${[NidocaDevice.DESKTOP]}">
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-switch/>"></nidoca-typography>
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
                    label="name"
                    .value="${this.name}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.name = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="assistiveText"
                    .value="${this.assistiveText}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) =>
                      (this.assistiveText = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="infoText"
                    .value="${this.infoText}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.infoText = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="errorText"
                    .value="${this.errorText}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.errorText = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-switch
                    name="selected"
                    infoText="selected"
                    .selected="${this.selected}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.selected = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

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
                    code="${'<nidoca-form-switch \n  name="' +
                    this.toAttributeCodeString(this.name, 'string') +
                    '" \n  assistiveText="' +
                    this.toAttributeCodeString(this.assistiveText, 'string') +
                    '" \n  infoText="' +
                    this.toAttributeCodeString(this.infoText, 'string') +
                    '" \n  errorText="' +
                    this.toAttributeCodeString(this.errorText, 'string') +
                    '" \n  .selected="' +
                    this.toAttributeCodeString(this.selected, 'boolean') +
                    '" >\n     nidoca-form-switch\n' +
                    this.loadShowcaseContentAsHtml('NidocaFormSwitch') +
                    '\n</nidoca-form-switch>'}"
                  ></nidoca-code>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>
          <nidoca-spacer></nidoca-spacer>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['name', this.object2Value('string', null)],
              ['assistiveText', this.object2Value('string', null)],
              ['infoText', this.object2Value('string', null)],
              ['errorText', this.object2Value('string', null)],
              ['selected', this.object2Value('boolean', null)],
            ]}"
          ></nidoca-table>
          <nidoca-spacer></nidoca-spacer>
        </nidoca-flex-container>
      </nidoca-flex-container>
    `;
  }
}
