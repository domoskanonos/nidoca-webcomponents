import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaAccordionItem,
  SpacerAlignment,
  SpacerSize,
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
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-accordion-item header="${this.header}" .opened="${this.opened}"
            >nidoca-accordion-item</nidoca-accordion-item
          >
        </nidoca-box>
      </nidoca-floating-container>

      <nidoca-spacer size="12.5vh" spacerAlignment="${SpacerAlignment.VERTICAL}"></nidoca-spacer>

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
        <nidoca-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.VERTICAL}">
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-accordion-item/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
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
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-accordion-item \n  header="' +
                this.toAttributeCodeString(this.header, 'string') +
                '" \n  .opened="' +
                this.toAttributeCodeString(this.opened, 'boolean') +
                '" >\n     nidoca-accordion-item\n</nidoca-accordion-item>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table .headers="${['slots']}" .rows="${[['<slot ></slot>']]}"></nidoca-table>

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
