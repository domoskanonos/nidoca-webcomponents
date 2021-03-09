import {FlexContainerProperties, FlexItemProperties, NidocaBox, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-box-showcase-page')
export class NidocaBoxShowcasePage extends NidocaShowcaseTemplate {
  @property()
  cssStyle: string = '';

  constructor() {
    super();
    let initComponent: NidocaBox = new NidocaBox();

    this.cssStyle = initComponent.cssStyle;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-box/>"></nidoca-typography>
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
              label="cssStyle"
              .value="${this.cssStyle}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.cssStyle = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-box cssStyle="${this.cssStyle}">nidoca-box</nidoca-box>
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-box \n    cssStyle="' +
            this.toValue(this.cssStyle) +
            '" >\n     nidoca-box\n</nidoca-box>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        Slot: [object Object]

        <nidoca-table .headers="${['property', 'type']}" .rows="${[['cssStyle', 'string']]}"></nidoca-table>

        <nidoca-table .headers="${['property', 'type']}" .rows="${[['render', 'render']]}"></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
