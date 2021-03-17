import {
  AccordionType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaFloatingContainer,
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
    let initComponent: NidocaFloatingContainer = new NidocaFloatingContainer();

    this.height = initComponent.height;

    this.width = initComponent.width;

    this.left = initComponent.left;

    this.top = initComponent.top;

    this.right = initComponent.right;

    this.bottom = initComponent.bottom;
  }

  getContent(): TemplateResult {
    return html`
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
        <nidoca-typography
          .typographyType="${TypographyType.H2}"
          text="<nidoca-floating-container/>"
        ></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="showcase"></nidoca-typography>

        <nidoca-flex-container
          .flexContainerProperties="${[
            FlexContainerProperties.CONTAINER_WIDTH_100,
            FlexContainerProperties.TABLET_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
            FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
          ]}"
          .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
          flexItemBasisValue="33.3%"
        >
          <nidoca-container>
            <nidoca-accordion .accordionType="${AccordionType.SINGLE}">
              <nidoca-accordion-item header="properties" .opened="${true}">
                <nidoca-form-text
                  label="height"
                  .value="${this.height}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.height = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="width"
                  .value="${this.width}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.width = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="left"
                  .value="${this.left}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.left = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="top"
                  .value="${this.top}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.top = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="right"
                  .value="${this.right}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.right = event.detail.value)}"
                ></nidoca-form-text>

                <nidoca-form-text
                  label="bottom"
                  .value="${this.bottom}"
                  @nidoca-form-text-event-change="${(event: CustomEvent) => (this.bottom = event.detail.value)}"
                ></nidoca-form-text>
              </nidoca-accordion-item>
            </nidoca-accordion>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-floating-container
              height="${this.height}"
              width="${this.width}"
              left="${this.left}"
              top="${this.top}"
              right="${this.right}"
              bottom="${this.bottom}"
              >nidoca-floating-container</nidoca-floating-container
            >
          </nidoca-box>

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
        </nidoca-flex-container>

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
    `;
  }
}
