import {
  AccordionType,
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
          FlexContainerProperties.CONTAINER_WIDTH_75,
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
        <nidoca-typography .typographyType="${TypographyType.H4}" text="showcase"></nidoca-typography>

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
            <nidoca-accordion .accordionType="${AccordionType.SINGLE}">
              <nidoca-accordion-item header="properties" .opened="${true}">
                <nidoca-form-combobox
                  label="buttonType"
                  .value="${this.buttonType}"
                  .options="${this.toComboboxOptions(ButtonType)}"
                  @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.buttonType = event.detail.value)}"
                ></nidoca-form-combobox>

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
              </nidoca-accordion-item>

              <nidoca-accordion-item header="slots">
                <nidoca-table
                  .headers="${['slot name', 'components', 'add']}"
                  .rows="${[
                    [
                      '',
                      html`<nidoca-form-combobox></nidoca-form-combobox>`,
                      html`<nidoca-icon icon="add"></nidoca-icon>`,
                    ],
                  ]}"
                ></nidoca-table>
              </nidoca-accordion-item>
            </nidoca-accordion>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-button .buttonType="${this.buttonType}" leadingIcon="${this.leadingIcon}" text="${this.text}"
              >nidoca-button</nidoca-button
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-button \n  .buttonType="' +
            this.toAttributeCodeString(this.buttonType, 'ButtonType', ButtonType) +
            '" \n  leadingIcon="' +
            this.toAttributeCodeString(this.leadingIcon, 'string') +
            '" \n  text="' +
            this.toAttributeCodeString(this.text, 'string') +
            '" >\n     nidoca-button\n</nidoca-button>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['buttonType', this.object2Value('ButtonType', ButtonType)],
            ['leadingIcon', this.object2Value('string', null)],
            ['text', this.object2Value('string', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
