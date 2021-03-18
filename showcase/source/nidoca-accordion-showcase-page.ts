import {
  AccordionType,
  FlexContainerProperty,
  FlexItemProperty,
  NidocaAccordion,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-accordion-showcase-page')
export class NidocaAccordionShowcasePage extends NidocaShowcaseTemplate {
  @property()
  accordionType: AccordionType = Object.values(AccordionType)[0];

  constructor() {
    super();
    let initComponent: NidocaAccordion = new NidocaAccordion();

    this.accordionType = initComponent.accordionType;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-accordion .accordionType="${this.accordionType}"></nidoca-accordion>
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-accordion/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-combobox
                label="accordionType"
                .value="${this.accordionType}"
                .options="${this.toComboboxOptions('AccordionType', AccordionType)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                  (this.accordionType = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: accordionType
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-accordion \n  .accordionType="' +
                this.toAttributeCodeString(this.accordionType, 'AccordionType', AccordionType) +
                '"  >\n     nidoca-accordion\n</nidoca-accordion>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[['accordionType', this.object2Value('AccordionType', AccordionType)]]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
