import {
  AccordionType,
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
          FlexContainerProperties.CONTAINER_WIDTH_75,
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
                <nidoca-form-combobox
                  label="spacerSize"
                  .value="${this.spacerSize}"
                  .options="${this.toComboboxOptions(SpacerSize)}"
                  @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.spacerSize = event.detail.value)}"
                ></nidoca-form-combobox>

                <nidoca-form-combobox
                  label="spacerAlignment"
                  .value="${this.spacerAlignment}"
                  .options="${this.toComboboxOptions(SpacerAlignment)}"
                  @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                    (this.spacerAlignment = event.detail.value)}"
                ></nidoca-form-combobox>

                <nidoca-form-text
                  label="size"
                  .value="${this.size}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.size = event.detail.value)}"
                ></nidoca-form-text>
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
            <nidoca-spacer
              .spacerSize="${this.spacerSize}"
              .spacerAlignment="${this.spacerAlignment}"
              size="${this.size}"
              >nidoca-spacer</nidoca-spacer
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-spacer \n  .spacerSize="' +
            this.toAttributeCodeString(this.spacerSize, 'SpacerSize', SpacerSize) +
            '" \n  .spacerAlignment="' +
            this.toAttributeCodeString(this.spacerAlignment, 'SpacerAlignment', SpacerAlignment) +
            '" \n  size="' +
            this.toAttributeCodeString(this.size, 'string') +
            '" >\n     nidoca-spacer\n</nidoca-spacer>'}"
          ></nidoca-code>
        </nidoca-flex-container>

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
