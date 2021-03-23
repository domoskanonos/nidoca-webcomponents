import {
  ContainerProperty,
  NidocaDevice,
  NidocaWizard,
  SpacerSize,
  SpacerType,
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
    let initComponent: NidocaWizard | null = null;
    initComponent = this.loadShowcaseInitData('NidocaWizard');
    if (initComponent == null) {
      initComponent = new NidocaWizard();
    }

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
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-wizard .wizardSteps="${this.wizardSteps}" .selectedStep="${this.selectedStep}"
            >${this.loadShowcaseContent('NidocaWizard')}</nidoca-wizard
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-wizard/>"></nidoca-typography>
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
                  <nidoca-form-combobox
                    .multiple="${true}"
                    size="3"
                    label="wizardSteps"
                    .value="${this.wizardSteps}"
                    .options="${this.toComboboxOptions('WizardStep', WizardStep)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.wizardSteps = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    label="selectedStep"
                    .value="${this.selectedStep}"
                    .options="${this.toComboboxOptions('WizardStep', WizardStep)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.selectedStep = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
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
      </nidoca-container>
    `;
  }
}
