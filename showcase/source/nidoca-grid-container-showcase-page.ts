import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaGridContainer,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-grid-container-showcase-page')
export class NidocaGridContainerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  gridTemplateRows: string[] = [];

  @property()
  gridTemplateColumns: string[] = [];

  @property()
  gridJustifyItems: string = '';

  @property()
  gridAlignItems: string = '';

  @property()
  height: string = '';

  @property()
  minHeight: string = '';

  @property()
  width: string = '';

  @property()
  minWidth: string = '';

  constructor() {
    super();
    let initComponent: NidocaGridContainer = new NidocaGridContainer();

    this.gridTemplateRows = initComponent.gridTemplateRows;

    this.gridTemplateColumns = initComponent.gridTemplateColumns;

    this.gridJustifyItems = initComponent.gridJustifyItems;

    this.gridAlignItems = initComponent.gridAlignItems;

    this.height = initComponent.height;

    this.minHeight = initComponent.minHeight;

    this.width = initComponent.width;

    this.minWidth = initComponent.minWidth;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-grid-container/>"></nidoca-typography>
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
          <nidoca-container>
            <nidoca-form-text
              label="gridTemplateRows"
              .value="${this.gridTemplateRows}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.gridTemplateRows = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="gridTemplateColumns"
              .value="${this.gridTemplateColumns}"
              @nidoca-form-text-event-change="${(event: CustomEvent) =>
                (this.gridTemplateColumns = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="gridJustifyItems"
              .value="${this.gridJustifyItems}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.gridJustifyItems = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="gridAlignItems"
              .value="${this.gridAlignItems}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.gridAlignItems = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="height"
              .value="${this.height}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.height = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="minHeight"
              .value="${this.minHeight}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.minHeight = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="width"
              .value="${this.width}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.width = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-text
              label="minWidth"
              .value="${this.minWidth}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.minWidth = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-grid-container
              .gridTemplateRows="${this.gridTemplateRows}"
              .gridTemplateColumns="${this.gridTemplateColumns}"
              gridJustifyItems="${this.gridJustifyItems}"
              gridAlignItems="${this.gridAlignItems}"
              height="${this.height}"
              minHeight="${this.minHeight}"
              width="${this.width}"
              minWidth="${this.minWidth}"
              >nidoca-grid-container</nidoca-grid-container
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-grid-container .\n    gridTemplateRows="' +
            this.toValue(this.gridTemplateRows) +
            '" .\n    gridTemplateColumns="' +
            this.toValue(this.gridTemplateColumns) +
            '" \n    gridJustifyItems="' +
            this.toValue(this.gridJustifyItems) +
            '" \n    gridAlignItems="' +
            this.toValue(this.gridAlignItems) +
            '" \n    height="' +
            this.toValue(this.height) +
            '" \n    minHeight="' +
            this.toValue(this.minHeight) +
            '" \n    width="' +
            this.toValue(this.width) +
            '" \n    minWidth="' +
            this.toValue(this.minWidth) +
            '" >\n     nidoca-grid-container\n</nidoca-grid-container>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['gridTemplateRows', 'string[]'],
            ['gridTemplateColumns', 'string[]'],
            ['gridJustifyItems', 'string'],
            ['gridAlignItems', 'string'],
            ['height', 'string'],
            ['minHeight', 'string'],
            ['width', 'string'],
            ['minWidth', 'string'],
          ]}"
        ></nidoca-table>

        <nidoca-table .headers="${['property', 'type']}" .rows="${[['render', 'render']]}"></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
