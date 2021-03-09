import {
  ButtonType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaButton,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-button-showcase-page')
export class NidocaButtonShowcasePage extends NidocaShowcaseTemplate {
  @property()
  buttonType: ButtonType = Object.values(ButtonType)[0];

  @property()
  leadingIcon: string = '';

  @property()
  text: string = '';

  constructor() {
    super();
    let initComponent: NidocaButton = new NidocaButton();

    this.buttonType = initComponent.buttonType;

    this.leadingIcon = initComponent.leadingIcon;

    this.text = initComponent.text;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-button/>"></nidoca-typography>
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
              label="leadingIcon"
              .value="${this.leadingIcon}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.leadingIcon = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="text"
              .value="${this.text}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.text = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-button .buttonType="${this.buttonType}" leadingIcon="${this.leadingIcon}" text="${this.text}"
              >nidoca-button</nidoca-button
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-button .\n    buttonType="' +
            this.toValue(this.buttonType) +
            '" \n    leadingIcon="' +
            this.toValue(this.leadingIcon) +
            '" \n    text="' +
            this.toValue(this.text) +
            '" >\n     nidoca-button\n</nidoca-button>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['buttonType', 'ButtonType'],
            ['leadingIcon', 'string'],
            ['text', 'string'],
          ]}"
        ></nidoca-table>

        <nidoca-table .headers="${['property', 'type']}" .rows="${[['render', 'render']]}"></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
