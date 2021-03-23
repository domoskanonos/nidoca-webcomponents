import {
  ContainerProperty,
  NidocaCaptcha,
  NidocaDevice,
  NidocaFormText,
  SpacerSize,
  SpacerType,
  TextType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-captcha-showcase-page')
export class NidocaCaptchaShowcasePage extends NidocaShowcaseTemplate {
  @property()
  numberOne: number = 0;

  @property()
  numberTwo: number = 0;

  @property()
  inputfield: NidocaFormText | undefined = undefined;

  constructor() {
    super();
    let initComponent: NidocaCaptcha | null = null;
    initComponent = this.loadShowcaseInitData('NidocaCaptcha');
    if (initComponent == null) {
      initComponent = new NidocaCaptcha();
    }

    this.numberOne = initComponent.numberOne;

    this.numberTwo = initComponent.numberTwo;

    this.inputfield = initComponent.inputfield;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-captcha .numberOne="${this.numberOne}" .numberTwo="${this.numberTwo}" .inputfield="${this.inputfield}"
            >${this.loadShowcaseContent('NidocaCaptcha')}</nidoca-captcha
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-captcha/>"></nidoca-typography>
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
                    textType="${TextType.NUMBER}"
                    label="numberOne"
                    .value="${this.numberOne}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.numberOne = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    textType="${TextType.NUMBER}"
                    label="numberTwo"
                    .value="${this.numberTwo}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.numberTwo = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
                <nidoca-code
                  code="${'<nidoca-captcha \n  .numberOne="' +
                  this.toAttributeCodeString(this.numberOne, 'number') +
                  '" \n  .numberTwo="' +
                  this.toAttributeCodeString(this.numberTwo, 'number') +
                  '" \n  .inputfield="' +
                  this.toAttributeCodeString(this.inputfield, 'NidocaFormText | undefined') +
                  '" >\n     nidoca-captcha\n</nidoca-captcha>'}"
                ></nidoca-code>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['numberOne', this.object2Value('number', null)],
              ['numberTwo', this.object2Value('number', null)],
              ['inputfield', this.object2Value('NidocaFormText | undefined', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-container>
    `;
  }
}
