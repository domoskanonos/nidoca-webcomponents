import {FlexContainerProperties, FlexItemProperties, NidocaList, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-list-showcase-page')
export class NidocaListShowcasePage extends NidocaShowcaseTemplate {
  @property()
  selectionMode: boolean = false;

  @property()
  slotElement: HTMLSlotElement | undefined = undefined;

  constructor() {
    super();
    let initComponent: NidocaList = new NidocaList();

    this.selectionMode = initComponent.selectionMode;

    this.slotElement = initComponent.slotElement;
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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-list/>"></nidoca-typography>
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
            <nidoca-list .selectionMode="${this.selectionMode}" .slotElement="${this.slotElement}"
              >nidoca-list</nidoca-list
            >
          </nidoca-box>

          <nidoca-code
            code="${'<nidoca-list .\n    selectionMode="' +
            this.toValue(this.selectionMode) +
            '" .\n    slotElement="' +
            this.toValue(this.slotElement) +
            '" >\n     nidoca-list\n</nidoca-list>'}"
          ></nidoca-code>
        </nidoca-flex-container>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['selectionMode', 'boolean'],
            ['slotElement', 'HTMLSlotElement | undefined'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }

  toValue(item: any): string {
    return String(item);
  }
}
