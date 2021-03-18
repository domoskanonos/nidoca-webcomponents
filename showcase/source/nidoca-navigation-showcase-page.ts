import {
  FlexContainerProperties,
  FlexItemProperties,
  NavigationStyle,
  NidocaNavigation,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-navigation-showcase-page')
export class NidocaNavigationShowcasePage extends NidocaShowcaseTemplate {
  @property()
  navigationStyle: NavigationStyle = Object.values(NavigationStyle)[0];

  constructor() {
    super();
    let initComponent: NidocaNavigation = new NidocaNavigation();

    this.navigationStyle = initComponent.navigationStyle;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-navigation .navigationStyle="${this.navigationStyle}">nidoca-navigation</nidoca-navigation>
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-navigation/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-combobox
                label="navigationStyle"
                .value="${this.navigationStyle}"
                .options="${this.toComboboxOptions(NavigationStyle)}"
                @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                  (this.navigationStyle = event.detail.value)}"
              ></nidoca-form-combobox>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-navigation \n  .navigationStyle="' +
                this.toAttributeCodeString(this.navigationStyle, 'NavigationStyle', NavigationStyle) +
                '" >\n     nidoca-navigation\n</nidoca-navigation>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table
          .headers="${['slots']}"
          .rows="${[
            ['<slot name="contentBefore"></slot>'],
            ['<slot name="links"></slot>'],
            ['<slot name="contentAfter"></slot>'],
          ]}"
        ></nidoca-table>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[['navigationStyle', this.object2Value('NavigationStyle', NavigationStyle)]]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
