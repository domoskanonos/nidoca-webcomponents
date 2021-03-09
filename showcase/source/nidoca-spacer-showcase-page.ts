import {
  FlexContainerProperties,
  FlexItemProperties,
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-spacer/>"></nidoca-typography>
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
              label="size"
              .value="${this.size}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-spacer
              .spacerSize="${this.spacerSize}"
              .spacerAlignment="${this.spacerAlignment}"
              size="${this.size}"
              >nidoca-spacer</nidoca-spacer
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-spacer .\n    spacerSize="' +
            this.toValue(this.spacerSize) +
            '" .\n    spacerAlignment="' +
            this.toValue(this.spacerAlignment) +
            '" \n    size="' +
            this.toValue(this.size) +
            '" >\n     nidoca-spacer\n</nidoca-spacer>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['spacerSize', 'SpacerSize'],
            ['spacerAlignment', 'SpacerAlignment'],
            ['size', 'string'],
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
