import {
  ContainerProperty,
  NidocaDevice,
  NidocaListItem,
  SpacerSize,
  SpacerType,
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
    let initComponent: NidocaListItem | null = null;
    initComponent = this.loadShowcaseInitData('NidocaListItem');
    if (initComponent == null) {
      initComponent = new NidocaListItem();
    }

    this.selectionMode = initComponent.selectionMode;

    this.selected = initComponent.selected;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-list-item .selectionMode="${this.selectionMode}" .selected="${this.selected}"
            >${this.loadShowcaseContent('NidocaListItem')}</nidoca-list-item
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-list-item/>"></nidoca-typography>
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
                  <nidoca-form-switch
                    name="selectionMode"
                    infoText="selectionMode"
                    .selected="${this.selectionMode}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) =>
                      (this.selectionMode = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-switch
                    name="selected"
                    infoText="selected"
                    .selected="${this.selected}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.selected = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
                <nidoca-code
                  code="${'<nidoca-list-item \n  .selectionMode="' +
                  this.toAttributeCodeString(this.selectionMode, 'boolean') +
                  '" \n  .selected="' +
                  this.toAttributeCodeString(this.selected, 'boolean') +
                  '" >\n     nidoca-list-item\n</nidoca-list-item>'}"
                ></nidoca-code>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['selectionMode', this.object2Value('boolean', null)],
              ['selected', this.object2Value('boolean', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-container>
    `;
  }
}
