import {
  DividerType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaDivider,
  SpacerAlignment,
  SpacerSize,
  TextType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-divider-showcase-page')
export class NidocaDividerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  dividerType: DividerType = Object.values(DividerType)[0];

  @property()
  opacity: number = 0;

  constructor() {
    super();
    let initComponent: NidocaDivider = new NidocaDivider();

    this.dividerType = initComponent.dividerType;

    this.opacity = initComponent.opacity;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-divider .dividerType="${this.dividerType}" .opacity="${this.opacity}">nidoca-divider</nidoca-divider>
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-divider/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-combobox
                label="dividerType"
                .value="${this.dividerType}"
                .options="${this.toComboboxOptions(DividerType)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) => (this.dividerType = event.detail.value)}"
              ></nidoca-form-combobox>

              <nidoca-form-text
                textType="${TextType.NUMBER}"
                label="opacity"
                .value="${this.opacity}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.opacity = event.detail.value)}"
              ></nidoca-form-text>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-divider \n  .dividerType="' +
                this.toAttributeCodeString(this.dividerType, 'DividerType', DividerType) +
                '" \n  .opacity="' +
                this.toAttributeCodeString(this.opacity, 'number') +
                '" >\n     nidoca-divider\n</nidoca-divider>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['dividerType', this.object2Value('DividerType', DividerType)],
            ['opacity', this.object2Value('number', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
