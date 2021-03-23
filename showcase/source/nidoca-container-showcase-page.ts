import {
  ContainerProperty,
  NidocaContainer,
  NidocaDevice,
  SpacerSize,
  SpacerType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-container-showcase-page')
export class NidocaContainerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  rendered: boolean = false;

  @property()
  cssStyle: string = '';

  @property()
  containerProperties: ContainerProperty[] = [];

  constructor() {
    super();
    let initComponent: NidocaContainer | null = null;
    initComponent = this.loadShowcaseInitData('NidocaContainer');
    if (initComponent == null) {
      initComponent = new NidocaContainer();
    }

    this.rendered = initComponent.rendered;

    this.cssStyle = initComponent.cssStyle;

    this.containerProperties = initComponent.containerProperties;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-container
            .rendered="${this.rendered}"
            cssStyle="${this.cssStyle}"
            .containerProperties="${this.containerProperties}"
            >${this.loadShowcaseContent('NidocaContainer')}</nidoca-container
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
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-container/>"></nidoca-typography>
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
                    name="rendered"
                    infoText="rendered"
                    .selected="${this.rendered}"
                    @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.rendered = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-switch>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="cssStyle"
                    .value="${this.cssStyle}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.cssStyle = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-combobox
                    .multiple="${true}"
                    size="3"
                    label="containerProperties"
                    .value="${this.containerProperties}"
                    .options="${this.toComboboxOptions('ContainerProperty', ContainerProperty)}"
                    @nidoca-form-combobox-event-change="${(event: CustomEvent) =>
                      (this.containerProperties = event.detail.value)}"
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
                  code="${'<nidoca-container \n  .rendered="' +
                  this.toAttributeCodeString(this.rendered, 'boolean') +
                  '" \n  cssStyle="' +
                  this.toAttributeCodeString(this.cssStyle, 'string') +
                  '" \n  .containerProperties="' +
                  this.toAttributeCodeString(this.containerProperties, 'ContainerProperty[]', ContainerProperty) +
                  '" >\n     nidoca-container\n</nidoca-container>'}"
                ></nidoca-code>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['rendered', this.object2Value('boolean', null)],
              ['cssStyle', this.object2Value('string', null)],
              ['containerProperties', this.object2Value('ContainerProperty[]', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-container>
    `;
  }
}
