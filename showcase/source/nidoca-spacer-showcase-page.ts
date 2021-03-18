import {
  FlexContainerProperty,
  FlexItemProperty,
  NidocaSpacer,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-spacer-showcase-page')
export class NidocaSpacerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  spacerSize: SpacerSize = Object.values(SpacerSize)[0];

  @property()
  spacerAlignment: SpacerAlignment = Object.values(SpacerAlignment)[0];

  @property()
  size: string = '';

  constructor() {
    super();
    let initComponent: NidocaSpacer = new NidocaSpacer();

    this.spacerSize = initComponent.spacerSize;

    this.spacerAlignment = initComponent.spacerAlignment;

    this.size = initComponent.size;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-spacer
            .spacerSize="${this.spacerSize}"
            .spacerAlignment="${this.spacerAlignment}"
            size="${this.size}"
          ></nidoca-spacer>
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-spacer/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-combobox
                label="spacerSize"
                .value="${this.spacerSize}"
                .options="${this.toComboboxOptions('SpacerSize', SpacerSize)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.spacerSize = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: spacerSize
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-combobox
                label="spacerAlignment"
                .value="${this.spacerAlignment}"
                .options="${this.toComboboxOptions('SpacerAlignment', SpacerAlignment)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                  (this.spacerAlignment = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: spacerAlignment
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="size"
                .value="${this.size}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: size
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-spacer \n  .spacerSize="' +
                this.toAttributeCodeString(this.spacerSize, 'SpacerSize', SpacerSize) +
                '" \n  .spacerAlignment="' +
                this.toAttributeCodeString(this.spacerAlignment, 'SpacerAlignment', SpacerAlignment) +
                '" \n  size="' +
                this.toAttributeCodeString(this.size, 'string') +
                '" >\n     nidoca-spacer\n</nidoca-spacer>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['spacerSize', this.object2Value('SpacerSize', SpacerSize)],
            ['spacerAlignment', this.object2Value('SpacerAlignment', SpacerAlignment)],
            ['size', this.object2Value('string', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
