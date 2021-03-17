import {
  AccordionType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaListItem,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-list-item-showcase-page')
export class NidocaListItemShowcasePage extends NidocaShowcaseTemplate {
  @property()
  selectionMode: boolean = false;

  @property()
  selected: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaListItem = new NidocaListItem();

    this.selectionMode = initComponent.selectionMode;

    this.selected = initComponent.selected;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-list-item/>"></nidoca-typography>
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
                <nidoca-form-switch
                  name="selectionMode"
                  infoText="selectionMode"
                  .selected="${this.selectionMode}"
                  @nidoca-form-switch-event-change="${(event: CustomEvent) =>
                    (this.selectionMode = event.detail.value)}"
                ></nidoca-form-switch>

                <nidoca-form-switch
                  name="selected"
                  infoText="selected"
                  .selected="${this.selected}"
                  @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.selected = event.detail.value)}"
                ></nidoca-form-switch>
              </nidoca-accordion-item>
            </nidoca-accordion>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-list-item .selectionMode="${this.selectionMode}" .selected="${this.selected}"
              >nidoca-list-item</nidoca-list-item
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-list-item \n  .selectionMode="' +
            this.toAttributeCodeString(this.selectionMode, 'boolean') +
            '" \n  .selected="' +
            this.toAttributeCodeString(this.selected, 'boolean') +
            '" >\n     nidoca-list-item\n</nidoca-list-item>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['selectionMode', this.object2Value('boolean', null)],
            ['selected', this.object2Value('boolean', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
