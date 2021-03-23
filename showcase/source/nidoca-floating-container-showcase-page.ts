import {
  ContainerProperty,
  NidocaDevice,
  NidocaFloatingContainer,
  SpacerSize,
  SpacerType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-floating-container-showcase-page')
export class NidocaFloatingContainerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  height: string = '';

  @property()
  width: string = '';

  @property()
  left: string = '';

  @property()
  top: string = '';

  @property()
  right: string = '';

  @property()
  bottom: string = '';

  constructor() {
    super();
    let initComponent: NidocaFloatingContainer | null = null;
    initComponent = this.loadShowcaseInitData('NidocaFloatingContainer');
    if (initComponent == null) {
      initComponent = new NidocaFloatingContainer();
    }

    this.height = initComponent.height;

    this.width = initComponent.width;

    this.left = initComponent.left;

    this.top = initComponent.top;

    this.right = initComponent.right;

    this.bottom = initComponent.bottom;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-floating-container
            height="${this.height}"
            width="${this.width}"
            left="${this.left}"
            top="${this.top}"
            right="${this.right}"
            bottom="${this.bottom}"
            >${this.loadShowcaseContent('NidocaFloatingContainer')}</nidoca-floating-container
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
            <nidoca-typography
              .typographyType="${TypographyType.H2}"
              text="<nidoca-floating-container/>"
            ></nidoca-typography>
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
                  <nidoca-form-text
                    label="height"
                    .value="${this.height}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.height = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="width"
                    .value="${this.width}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.width = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="left"
                    .value="${this.left}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.left = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="top"
                    .value="${this.top}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.top = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="right"
                    .value="${this.right}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.right = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

                  <nidoca-form-text
                    label="bottom"
                    .value="${this.bottom}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.bottom = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
                <nidoca-code
                  code="${'<nidoca-floating-container \n  height="' +
                  this.toAttributeCodeString(this.height, 'string') +
                  '" \n  width="' +
                  this.toAttributeCodeString(this.width, 'string') +
                  '" \n  left="' +
                  this.toAttributeCodeString(this.left, 'string') +
                  '" \n  top="' +
                  this.toAttributeCodeString(this.top, 'string') +
                  '" \n  right="' +
                  this.toAttributeCodeString(this.right, 'string') +
                  '" \n  bottom="' +
                  this.toAttributeCodeString(this.bottom, 'string') +
                  '" >\n     nidoca-floating-container\n</nidoca-floating-container>'}"
                ></nidoca-code>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['height', this.object2Value('string', null)],
              ['width', this.object2Value('string', null)],
              ['left', this.object2Value('string', null)],
              ['top', this.object2Value('string', null)],
              ['right', this.object2Value('string', null)],
              ['bottom', this.object2Value('string', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-container>
    `;
  }
}
