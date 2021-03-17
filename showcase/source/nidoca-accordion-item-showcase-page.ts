import {
  AccordionType,
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
          FlexContainerProperties.CONTAINER_WIDTH_75,
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
                <nidoca-form-text
                  label="header"
                  .value="${this.header}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.header = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-switch
                  name="opened"
                  infoText="opened"
                  .selected="${this.opened}"
                  @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.opened = event.detail.value)}"
                ></nidoca-form-switch>
              </nidoca-accordion-item>

              <nidoca-accordion-item header="slots">
                <nidoca-table
                  .headers="${['slot name', 'components', 'add']}"
                  .rows="${[
                    [
                      '',
                      html`<nidoca-form-combobox></nidoca-form-combobox>`,
                      html`<nidoca-icon icon="add"></nidoca-icon>`,
                    ],
                  ]}"
                ></nidoca-table>
              </nidoca-accordion-item>
            </nidoca-accordion>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-accordion-item header="${this.header}" .opened="${this.opened}"
              >nidoca-accordion-item</nidoca-accordion-item
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-accordion-item \n  header="' +
            this.toAttributeCodeString(this.header, 'string') +
            '" \n  .opened="' +
            this.toAttributeCodeString(this.opened, 'boolean') +
            '" >\n     nidoca-accordion-item\n</nidoca-accordion-item>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['header', this.object2Value('string', null)],
            ['opened', this.object2Value('boolean', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
