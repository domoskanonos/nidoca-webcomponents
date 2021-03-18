import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaLink,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-link-showcase-page')
export class NidocaLinkShowcasePage extends NidocaShowcaseTemplate {
  @property()
  text: string = '';

  @property()
  href: string = '';

  @property()
  targetType: string = '';

  constructor() {
    super();
    let initComponent: NidocaLink = new NidocaLink();

    this.text = initComponent.text;

    this.href = initComponent.href;

    this.targetType = initComponent.targetType;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-floating-container
        top="var(--menubar-height)"
        width="100%"
        style="background-color: var(--app-color-surface-background);"
      >
        <nidoca-box cssStyle="width:100%; height:25vh;background-color: var(--app-color-surface-background-light)">
          <nidoca-link text="${this.text}" href="${this.href}" targetType="${this.targetType}">nidoca-link</nidoca-link>
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
          <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-link/>"></nidoca-typography>
        </nidoca-spacer>

        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="properties"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>

          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-form-text
                label="text"
                .value="${this.text}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.text = event.detail.value)}"
              ></nidoca-form-text>

              <nidoca-form-text
                label="href"
                .value="${this.href}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.href = event.detail.value)}"
              ></nidoca-form-text>

              <nidoca-form-text
                label="targetType"
                .value="${this.targetType}"
                @nidoca-form-text-event-change="${(event: CustomEvent) => (this.targetType = event.detail.value)}"
              ></nidoca-form-text>
            </nidoca-spacer>
          </nidoca-tab-content>

          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer spacerSize="${SpacerSize.NORMAL}" spacerAlignment="${SpacerAlignment.VERTICAL}">
              <nidoca-code
                code="${'<nidoca-link \n  text="' +
                this.toAttributeCodeString(this.text, 'string') +
                '" \n  href="' +
                this.toAttributeCodeString(this.href, 'string') +
                '" \n  targetType="' +
                this.toAttributeCodeString(this.targetType, 'string') +
                '" >\n     nidoca-link\n</nidoca-link>'}"
              ></nidoca-code>
            </nidoca-spacer>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-table .headers="${['slots']}" .rows="${[['<slot></slot>']]}"></nidoca-table>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['text', this.object2Value('string', null)],
            ['href', this.object2Value('string', null)],
            ['targetType', this.object2Value('string', null)],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
