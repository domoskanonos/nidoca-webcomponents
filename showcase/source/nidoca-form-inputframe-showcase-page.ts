import {
  FlexContainerProperty,
  FlexItemProperty,
  NidocaFormInputframe,
  SpacerAlignment,
  SpacerSize,
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
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-form-inputframe
            label="${this.label}"
            .errorText="${this.errorText}"
            .infoText="${this.infoText}"
            .warningText="${this.warningText}"
            .selected="${this.selected}"
          ></nidoca-form-inputframe>
        </nidoca-box>
      </nidoca-floating-container>

      <nidoca-spacer size="12.5vh" spacerAlignment="${SpacerAlignment.VERTICAL}"></nidoca-spacer>

      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperty.CONTAINER_WIDTH_75,
          FlexContainerProperty.TABLET_MAX_WIDTH,
          FlexContainerProperty.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperty.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperty.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperty.KEYLINE_ALIGNMENT_BOTH, FlexItemProperty.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.VERTICAL}">
          <nidoca-typography
            .typographyType="${TypographyType.H2}"
            text="<nidoca-form-inputframe/>"
          ></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-text
                label="label"
                .value="${this.label}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.label = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: label
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="errorText"
                .value="${this.errorText}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.errorText = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: errorText
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="infoText"
                .value="${this.infoText}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.infoText = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: infoText
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="warningText"
                .value="${this.warningText}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.warningText = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: warningText
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-switch
                name="selected"
                infoText="selected"
                .selected="${this.selected}"
                @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.selected = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-switch>

              JHUHUH: selected
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
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
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>

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
