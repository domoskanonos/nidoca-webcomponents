import {
  DividerType,
  FlexContainerProperties,
  FlexItemProperties,
  NidocaDivider,
  TextType,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-divider-showcase-page')
export class NidocaDividerShowcasePage extends NidocaShowcaseTemplate {
  @property()
  dividerType: DividerType = Object.values(DividerType)[0];

  @property()
  opacity: number = 0;

  constructor() {
    super();
    let initComponent: NidocaDivider = new NidocaDivider();

    this.dividerType = initComponent.dividerType;

    this.opacity = initComponent.opacity;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperties.CONTAINER_WIDTH_100,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-divider/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>

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
            <nidoca-form-text
              textType="${TextType.NUMBER}"
              label="opacity"
              .value="${this.opacity}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.opacity = event.detail.value)}"
            ></nidoca-form-text>

            <nidoca-form-switch
              label="opacity"
              .value="${this.opacity}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.opacity = event.detail.value)}"
            ></nidoca-form-switch>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-divider .dividerType="${this.dividerType}" .opacity="${this.opacity}"
              >nidoca-divider</nidoca-divider
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-divider .\n    dividerType="' +
            this.toValue(this.dividerType) +
            '" .\n    opacity="' +
            this.toValue(this.opacity) +
            '" >\n     nidoca-divider\n</nidoca-divider>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['dividerType', 'DividerType'],
            ['opacity', 'number'],
          ]}"
        ></nidoca-table>

        <nidoca-table .headers="${['property', 'type']}" .rows="${[['render', 'render']]}"></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
