import {
  ContainerProperty,
  NidocaDevice,
  NidocaTopAppBar,
  SpacerSize,
  SpacerType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-top-app-bar-showcase-page')
export class NidocaTopAppBarShowcasePage extends NidocaShowcaseTemplate {
  constructor() {
    super();
    let initComponent: NidocaTopAppBar | null = null;
    initComponent = this.loadShowcaseInitData('NidocaTopAppBar');
    if (initComponent == null) {
      initComponent = new NidocaTopAppBar();
    }
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-top-app-bar>${this.loadShowcaseContent('NidocaTopAppBar')}</nidoca-top-app-bar>
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-top-app-bar/>"></nidoca-typography>
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
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
                <nidoca-code
                  code="${'<nidoca-top-app-bar >\n     nidoca-top-app-bar\n</nidoca-top-app-bar>'}"
                ></nidoca-code>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['slots']}"
            .rows="${[
              ['<slot name="leftComponents"></slot>'],
              ['<slot name="mainComponents"></slot>'],
              ['<slot name="rightComponents"></slot>'],
              ['<slot name="prominentComponents"></slot>'],
            ]}"
          ></nidoca-table>

          <nidoca-table .headers="${['property', 'type']}" .rows="${[]}"></nidoca-table>
        </nidoca-flex-container>
      </nidoca-container>
    `;
  }
}
