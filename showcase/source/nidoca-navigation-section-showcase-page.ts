import {
  ContainerProperty,
  NidocaDevice,
  NidocaNavigationSection,
  SpacerSize,
  SpacerType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-navigation-section-showcase-page')
export class NidocaNavigationSectionShowcasePage extends NidocaShowcaseTemplate {
  @property()
  text: string = '';

  @property()
  rendered: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaNavigationSection | null = null;
    initComponent = this.loadShowcaseInitData('NidocaNavigationSection');
    if (initComponent == null) {
      initComponent = new NidocaNavigationSection();
    }

    this.text = initComponent.text;

    this.rendered = initComponent.rendered;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:40vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-navigation-section text="${this.text}" .rendered="${this.rendered}"
            >${this.loadShowcaseContent('NidocaNavigationSection')}</nidoca-navigation-section
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
              text="<nidoca-navigation-section/>"
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
                    label="text"
                    .value="${this.text}"
                    @nidoca-form-text-event-change="${(event: CustomEvent) => (this.text = event.detail.value)}"
                    warningText=""
                    errorText=""
                    infoText=""
                  ></nidoca-form-text>

                  <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" .spacerTypes="${[SpacerType.ALL]}"></nidoca-spacer>

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
                </nidoca-spacer>
              </nidoca-spacer>
            </nidoca-tab-content>

            <nidoca-tab-content slot="tabContent">
              <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" .spacerTypes="${[SpacerType.ALL]}">
                <nidoca-code
                  code="${'<nidoca-navigation-section \n  text="' +
                  this.toAttributeCodeString(this.text, 'string') +
                  '" \n  .rendered="' +
                  this.toAttributeCodeString(this.rendered, 'boolean') +
                  '" >\n     nidoca-navigation-section\n</nidoca-navigation-section>'}"
                ></nidoca-code>
              </nidoca-spacer>
            </nidoca-tab-content>
          </nidoca-tabs>

          <nidoca-table
            .headers="${['property', 'type']}"
            .rows="${[
              ['text', this.object2Value('string', null)],
              ['rendered', this.object2Value('boolean', null)],
            ]}"
          ></nidoca-table>
        </nidoca-flex-container>
      </nidoca-container>
    `;
  }
}
