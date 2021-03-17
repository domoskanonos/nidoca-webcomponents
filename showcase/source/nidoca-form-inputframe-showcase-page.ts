import {
  AccordionType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFormInputframe,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-inputframe-showcase-page')
export class NidocaFormInputframeShowcasePage extends NidocaShowcaseTemplate {
  @property()
  label: string = '';

  @property()
  errorText: string | undefined = '';

  @property()
  infoText: string | undefined = '';

  @property()
  warningText: string | undefined = '';

  @property()
  selected: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaFormInputframe = new NidocaFormInputframe();

    this.label = initComponent.label;

    this.errorText = initComponent.errorText;

    this.infoText = initComponent.infoText;

    this.warningText = initComponent.warningText;

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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-inputframe/>"></nidoca-typography>
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
                  label="label"
                  .value="${this.label}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.label = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="errorText"
                  .value="${this.errorText}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.errorText = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="infoText"
                  .value="${this.infoText}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.infoText = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="warningText"
                  .value="${this.warningText}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.warningText = event.detail.value)}"
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
            <nidoca-form-inputframe
              label="${this.label}"
              .errorText="${this.errorText}"
              .infoText="${this.infoText}"
              .warningText="${this.warningText}"
              .selected="${this.selected}"
              >nidoca-form-inputframe</nidoca-form-inputframe
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-form-inputframe \n  label="' +
            this.toAttributeCodeString(this.label, 'string') +
            '" \n  .errorText="' +
            this.toAttributeCodeString(this.errorText, 'string | undefined') +
            '" \n  .infoText="' +
            this.toAttributeCodeString(this.infoText, 'string | undefined') +
            '" \n  .warningText="' +
            this.toAttributeCodeString(this.warningText, 'string | undefined') +
            '" \n  .selected="' +
            this.toAttributeCodeString(this.selected, 'boolean') +
            '" >\n     nidoca-form-inputframe\n</nidoca-form-inputframe>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['label', this.object2Value('string', null)],
            ['errorText', this.object2Value('string | undefined', null)],
            ['infoText', this.object2Value('string | undefined', null)],
            ['warningText', this.object2Value('string | undefined', null)],
            ['selected', this.object2Value('boolean', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
