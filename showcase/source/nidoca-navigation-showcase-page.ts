import {
  ContainerProperty,
  NavigationStyle,
  NidocaDevice,
  NidocaNavigation,
  SpacerSize,
  SpacerType,
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
    let initComponent: NidocaNavigation | null = null;
    initComponent = this.loadShowcaseInitData('NidocaNavigation');
    if (initComponent == null) {
      initComponent = new NidocaNavigation();
    }

    this.navigationStyle = initComponent.navigationStyle;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-navigation .navigationStyle="${this.navigationStyle}"
            >${this.loadShowcaseContent('NidocaNavigation')}</nidoca-navigation
          >
        </nidoca-box>
      </nidoca-floating-container>

      <nidoca-spacer size="20vh" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

      <nidoca-container
        .containerProperties="${[
          ContainerProperty.WIDTH_75,
          ContainerProperty.SMARTPHONE_MAX_WIDTH,
          ContainerProperty.TABLET_MAX_WIDTH,
        ]}"
      >
        <nidoca-flex-container itemStyle="flex-basis: 100%;">
          <nidoca-spacer spacerSize="${SpacerSize.BIG}" .spacerTypes="${[SpacerType.ALL]}">
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-navigation/>"></nidoca-typography>
          </nidoca-spacer>

          <nidoca-tabs>
            <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
            <nidoca-tab slot="tab" text="source"></nidoca-tab>

            <nidoca-tab-content slot="tabContent" .selected="${true}">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.TOP, SpacerType.BOTTOM]}">
                <nidoca-spacer
                  spacerSize="${SpacerSize.NORMAL}"
                  .spacerTypes="${[SpacerType.LEFT, SpacerType.RIGHT]}"
                  .devices="${[NidocaDevice.MOBILE]}"
                >
                  <nidoca-form-combobox
                    label="navigationStyle"
                    .value="${this.navigationStyle}"
                    .options="${this.toComboboxOptions('NavigationStyle', NavigationStyle)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.navigationStyle = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-combobox>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
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
      </nidoca-container>
    `;
  }
}
