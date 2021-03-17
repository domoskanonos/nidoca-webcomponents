import {
  AccordionType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFormSwitch,
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
    let initComponent: NidocaFormSwitch = new NidocaFormSwitch();

    this.name = initComponent.name;

    this.assistiveText = initComponent.assistiveText;

    this.infoText = initComponent.infoText;

    this.errorText = initComponent.errorText;

    this.selected = initComponent.selected;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-switch/>"></nidoca-typography>
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
                <nidoca-form-text
                  label="name"
                  .value="${this.name}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.name = event.detail.value)}"
                ></nidoca-form-text>

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

                <nidoca-form-switch
                  name="selected"
                  infoText="selected"
                  .selected="${this.selected}"
                  @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.selected = event.detail.value)}"
                ></nidoca-form-switch>
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
            <nidoca-form-switch
              name="${this.name}"
              assistiveText="${this.assistiveText}"
              infoText="${this.infoText}"
              errorText="${this.errorText}"
              .selected="${this.selected}"
              >nidoca-form-switch</nidoca-form-switch
            >
          </nidoca-box>

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
            '" >\n     nidoca-form-switch\n</nidoca-form-switch>'}"
          ></nidoca-code>
        </nidoca-flex-container>

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
      </nidoca-flex-container>
    `;
  }
}
