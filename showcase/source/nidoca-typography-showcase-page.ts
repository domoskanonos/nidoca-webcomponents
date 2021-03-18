import {
  FlexContainerProperty,
  FlexItemProperty,
  NidocaTypography,
  SpacerAlignment,
  SpacerSize,
  TypographyAlignment,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-typography-showcase-page')
export class NidocaTypographyShowcasePage extends NidocaShowcaseTemplate {
  @property()
  typographyType: TypographyType = Object.values(TypographyType)[0];

  @property()
  typographyAlignment: TypographyAlignment = Object.values(TypographyAlignment)[0];

  @property()
  text: string = '';

  constructor() {
    super();
    let initComponent: NidocaTypography = new NidocaTypography();

    this.typographyType = initComponent.typographyType;

    this.typographyAlignment = initComponent.typographyAlignment;

    this.text = initComponent.text;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-typography
            .typographyType="${this.typographyType}"
            .typographyAlignment="${this.typographyAlignment}"
            text="${this.text}"
          ></nidoca-typography>
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-typography/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-combobox
                label="typographyType"
                .value="${this.typographyType}"
                .options="${this.toComboboxOptions('TypographyType', TypographyType)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                  (this.typographyType = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: typographyType
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-combobox
                label="typographyAlignment"
                .value="${this.typographyAlignment}"
                .options="${this.toComboboxOptions('TypographyAlignment', TypographyAlignment)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                  (this.typographyAlignment = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: typographyAlignment
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="text"
                .value="${this.text}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.text = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: text
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-typography \n  .typographyType="' +
                this.toAttributeCodeString(this.typographyType, 'TypographyType', TypographyType) +
                '" \n  .typographyAlignment="' +
                this.toAttributeCodeString(this.typographyAlignment, 'TypographyAlignment', TypographyAlignment) +
                '" \n  text="' +
                this.toAttributeCodeString(this.text, 'string') +
                '" >\n     nidoca-typography\n</nidoca-typography>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['typographyType', this.object2Value('TypographyType', TypographyType)],
            ['typographyAlignment', this.object2Value('TypographyAlignment', TypographyAlignment)],
            ['text', this.object2Value('string', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
