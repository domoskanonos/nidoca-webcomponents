import {
  FlexContainerProperty,
  FlexItemProperty,
  NidocaNavigationLink,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-navigation-link-showcase-page')
export class NidocaNavigationLinkShowcasePage extends NidocaShowcaseTemplate {
  @property()
  icon: string = '';

  @property()
  text: string = '';

  @property()
  href: string = '';

  @property()
  rendered: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaNavigationLink = new NidocaNavigationLink();

    this.icon = initComponent.icon;

    this.text = initComponent.text;

    this.href = initComponent.href;

    this.rendered = initComponent.rendered;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-navigation-link
            icon="${this.icon}"
            text="${this.text}"
            href="${this.href}"
            .rendered="${this.rendered}"
          ></nidoca-navigation-link>
        </nidoca-box>
      </nidoca-floating-container>

      <nidoca-spacer size="12.5vh" spacerAlignment="${SpacerAlignment.VERTICAL}"></nidoca-spacer>

      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperty.CONTAINER_WIDTH_75,
          FlexContainerProperty.TABLET_MAX_WIDTH,
          FlexContainerProperty.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperty.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperty.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperty.KEYLINE_ALIGNMENT_BOTH, FlexItemProperty.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.VERTICAL}">
          <nidoca-typography
            .typographyType="${TypographyType.H2}"
            text="<nidoca-navigation-link/>"
          ></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-text
                label="icon"
                .value="${this.icon}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.icon = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: icon
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="text"
                .value="${this.text}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.text = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: text
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-text
                label="href"
                .value="${this.href}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.href = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-text>

              JHUHUH: href
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>

              <nidoca-form-switch
                name="rendered"
                infoText="rendered"
                .selected="${this.rendered}"
                @nidoca-form-switch-event-change="${(event: CustomEvent) => (this.rendered = event.detail.value)}"
                warningText=""
                errorText=""
                infoText=""
              ></nidoca-form-switch>

              JHUHUH: rendered
              <nidoca-spacer
                spacerSize="${SpacerSize.MEDIUM}"
                spacerAlignment="${SpacerAlignment.VERTICAL}"
              ></nidoca-spacer>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-navigation-link \n  icon="' +
                this.toAttributeCodeString(this.icon, 'string') +
                '" \n  text="' +
                this.toAttributeCodeString(this.text, 'string') +
                '" \n  href="' +
                this.toAttributeCodeString(this.href, 'string') +
                '" \n  .rendered="' +
                this.toAttributeCodeString(this.rendered, 'boolean') +
                '" >\n     nidoca-navigation-link\n</nidoca-navigation-link>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['icon', this.object2Value('string', null)],
            ['text', this.object2Value('string', null)],
            ['href', this.object2Value('string', null)],
            ['rendered', this.object2Value('boolean', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
