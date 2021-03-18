import {
  FlexContainerProperty,
  FlexItemProperty,
  NidocaTable,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-table-showcase-page')
export class NidocaTableShowcasePage extends NidocaShowcaseTemplate {
  @property()
  headers: any[] = [];

  @property()
  rows: any[] = [];

  constructor() {
    super();
    let initComponent: NidocaTable = new NidocaTable();

    this.headers = initComponent.headers;

    this.rows = initComponent.rows;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-table .headers="${this.headers}" .rows="${this.rows}"></nidoca-table>
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-table/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-combobox
                .multiple="${true}"
                label="headers"
                .value="${this.headers}"
                .options="${this.toComboboxOptions('String', String)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.headers = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: headers
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-combobox
                .multiple="${true}"
                label="rows"
                .value="${this.rows}"
                .options="${this.toComboboxOptions('String', String)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.rows = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-combobox>

              JHUHUH: rows
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-table \n  .headers="' +
                this.toAttributeCodeString(this.headers, 'any[]', String) +
                '" \n  .rows="' +
                this.toAttributeCodeString(this.rows, 'any[]', String) +
                '" >\n     nidoca-table\n</nidoca-table>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['headers', this.object2Value('any[]', null)],
            ['rows', this.object2Value('any[]', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
