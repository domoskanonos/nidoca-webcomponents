import {FlexContainerProperties, FlexItemProperties, NidocaVisible, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-visible-showcase-page')
export class NidocaVisibleShowcasePage extends NidocaShowcaseTemplate {
  @property()
  visibleType: string = '';

  constructor() {
    super();
    let initComponent: NidocaVisible = new NidocaVisible();

    this.visibleType = initComponent.visibleType;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-visible/>"></nidoca-typography>
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
              label="visibleType"
              .value="${this.visibleType}"
              @nidoca-form-text-event-change="${(event: CustomEvent) => (this.visibleType = event.detail.value)}"
            ></nidoca-form-text>
          </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-visible visibleType="${this.visibleType}">nidoca-visible</nidoca-visible>
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-visible \n    visibleType="' +
            this.toValue(this.visibleType) +
            '" >\n     nidoca-visible\n</nidoca-visible>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table .headers="${['property', 'type']}" .rows="${[['visibleType', 'string']]}"></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
