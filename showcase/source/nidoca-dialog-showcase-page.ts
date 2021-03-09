import {FlexContainerProperties, FlexItemProperties, NidocaDialog, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-dialog-showcase-page')
export class NidocaDialogShowcasePage extends NidocaShowcaseTemplate {
  @property()
  show: boolean = false;

  constructor() {
    super();
    let initComponent: NidocaDialog = new NidocaDialog();

    this.show = initComponent.show;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-dialog/>"></nidoca-typography>
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
          <nidoca-container> </nidoca-container>

          <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
            <nidoca-dialog .show="${this.show}">nidoca-dialog</nidoca-dialog>
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-dialog .\n    show="' +
            this.toValue(this.show) +
            '" >\n     nidoca-dialog\n</nidoca-dialog>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table .headers="${['property', 'type']}" .rows="${[['show', 'boolean']]}"></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
