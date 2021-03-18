import {
  FlexContainerProperty,
  FlexItemProperty,
  NidocaWizard,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
  WizardStep,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-wizard-showcase-page')
export class NidocaWizardShowcasePage extends NidocaShowcaseTemplate {
  @property()
  wizardSteps: WizardStep[] = [];

  @property()
  selectedStep: WizardStep = Object.values(WizardStep)[0];

  constructor() {
    super();
    let initComponent: NidocaWizard = new NidocaWizard();

    this.wizardSteps = initComponent.wizardSteps;

    this.selectedStep = initComponent.selectedStep;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-wizard .wizardSteps="${this.wizardSteps}" .selectedStep="${this.selectedStep}"></nidoca-wizard>
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-wizard/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-combobox
                .multiple="${true}"
                label="wizardSteps"
                .value="${this.wizardSteps}"
                .options="${this.toComboboxOptions('WizardStep', WizardStep)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.wizardSteps = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: wizardSteps
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-combobox
                label="selectedStep"
                .value="${this.selectedStep}"
                .options="${this.toComboboxOptions('WizardStep', WizardStep)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.selectedStep = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: selectedStep
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-wizard \n  .wizardSteps="' +
                this.toAttributeCodeString(this.wizardSteps, 'WizardStep[]', WizardStep) +
                '" \n  .selectedStep="' +
                this.toAttributeCodeString(this.selectedStep, 'WizardStep', WizardStep) +
                '" >\n     nidoca-wizard\n</nidoca-wizard>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['wizardSteps', this.object2Value('WizardStep[]', null)],
            ['selectedStep', this.object2Value('WizardStep', WizardStep)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
