import {FlexContainerProperties, FlexItemProperties, NidocaFormSwitch, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-switch-showcase-page')
export class NidocaFormSwitchShowcasePage extends NidocaShowcaseTemplate {
  @property()
  assistiveText: string = '';

  @property()
  infoText: string = '';

  @property()
  errorText: string = '';

  @property()
  checked: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaFormSwitch = new NidocaFormSwitch();

    this.assistiveText = initComponent.assistiveText;

    this.infoText = initComponent.infoText;

    this.errorText = initComponent.errorText;

    this.checked = initComponent.checked;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-switch/>"></nidoca-typography>
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
              label="assistiveText"
              .value="${this.assistiveText}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.assistiveText = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="infoText"
              .value="${this.infoText}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.infoText = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="errorText"
              .value="${this.errorText}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.errorText = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-form-switch
              assistiveText="${this.assistiveText}"
              infoText="${this.infoText}"
              errorText="${this.errorText}"
              .checked="${this.checked}"
              >nidoca-form-switch</nidoca-form-switch
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form-switch \n    assistiveText="' +
            this.toValue(this.assistiveText) +
            '" \n    infoText="' +
            this.toValue(this.infoText) +
            '" \n    errorText="' +
            this.toValue(this.errorText) +
            '" .\n    checked="' +
            this.toValue(this.checked) +
            '"  >\n     nidoca-form-switch\n</nidoca-form-switch>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['assistiveText', 'string'],
            ['infoText', 'string'],
            ['errorText', 'string'],
            ['checked', 'boolean'],
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
