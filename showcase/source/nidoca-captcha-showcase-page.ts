import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaCaptcha,
  NidocaFormText,
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
    let initComponent: NidocaCaptcha = new NidocaCaptcha();

    this.numberOne = initComponent.numberOne;

    this.numberTwo = initComponent.numberTwo;

    this.inputfield = initComponent.inputfield;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperties.CONTAINER_WIDTH_100,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-captcha/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>

        <nidoca-flex-container
          .flexContainerProperties="${[
            FlexContainerProperties.CONTAINER_WIDTH_100,
            FlexContainerProperties.TABLET_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
            FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
          ]}"
          .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
          flexItemBasisValue="33.3%"
        >
          <nidoca-container>
            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="numberOne"
              .value="${this.numberOne}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.numberOne = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="numberOne"
              .value="${this.numberOne}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.numberOne = event.detail.value)}"
            ></nidoca-form-switch>

            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="numberTwo"
              .value="${this.numberTwo}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.numberTwo = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="numberTwo"
              .value="${this.numberTwo}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.numberTwo = event.detail.value)}"
            ></nidoca-form-switch>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-captcha
              .numberOne="${this.numberOne}"
              .numberTwo="${this.numberTwo}"
              .inputfield="${this.inputfield}"
              >nidoca-captcha</nidoca-captcha
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-captcha .\n    numberOne="' +
            this.toValue(this.numberOne) +
            '" .\n    numberTwo="' +
            this.toValue(this.numberTwo) +
            '" .\n    inputfield="' +
            this.toValue(this.inputfield) +
            '" >\n     nidoca-captcha\n</nidoca-captcha>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['numberOne', 'number'],
            ['numberTwo', 'number'],
            ['inputfield', 'NidocaFormText | undefined'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
