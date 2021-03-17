import {
  AccordionType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaWizard,
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-wizard/>"></nidoca-typography>
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
                  label="selectedStep"
                  .value="${this.selectedStep}"
                  .options="${this.toComboboxOptions(WizardStep)}"
                  @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                    (this.selectedStep = event.detail.value)}"
                ></nidoca-form-combobox>
              </nidoca-accordion-item>
            </nidoca-accordion>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-wizard .wizardSteps="${this.wizardSteps}" .selectedStep="${this.selectedStep}"
              >nidoca-wizard</nidoca-wizard
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-wizard \n  .wizardSteps="' +
            this.toAttributeCodeString(this.wizardSteps, 'WizardStep[]') +
            '" \n  .selectedStep="' +
            this.toAttributeCodeString(this.selectedStep, 'WizardStep', WizardStep) +
            '" >\n     nidoca-wizard\n</nidoca-wizard>'}"
          ></nidoca-code>
        </nidoca-flex-container>

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
