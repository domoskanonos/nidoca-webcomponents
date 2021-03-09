import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaAccordionItem,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-accordion-item-showcase-page')
export class NidocaAccordionItemShowcasePage extends NidocaShowcaseTemplate {
  @property()
  header: string = '';

  @property()
  opened: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaAccordionItem = new NidocaAccordionItem();

    this.header = initComponent.header;

    this.opened = initComponent.opened;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-accordion-item/>"></nidoca-typography>
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
              label="header"
              .value="${this.header}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.header = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-accordion-item header="${this.header}" .opened="${this.opened}"
              >nidoca-accordion-item</nidoca-accordion-item
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-accordion-item \n    header="' +
            this.toValue(this.header) +
            '" .\n    opened="' +
            this.toValue(this.opened) +
            '" >\n     nidoca-accordion-item\n</nidoca-accordion-item>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['header', 'string'],
            ['opened', 'boolean'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
