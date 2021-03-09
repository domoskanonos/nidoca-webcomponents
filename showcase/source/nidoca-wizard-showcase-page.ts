import {
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
          FlexContainerProperties.CONTAINER_WIDTH_100,
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
          <nidoca-container> </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-wizard .wizardSteps="${this.wizardSteps}" .selectedStep="${this.selectedStep}"
              >nidoca-wizard</nidoca-wizard
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-wizard .\n    wizardSteps="' +
            this.toValue(this.wizardSteps) +
            '" .\n    selectedStep="' +
            this.toValue(this.selectedStep) +
            '" >\n     nidoca-wizard\n</nidoca-wizard>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['wizardSteps', 'WizardStep[]'],
            ['selectedStep', 'WizardStep'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
