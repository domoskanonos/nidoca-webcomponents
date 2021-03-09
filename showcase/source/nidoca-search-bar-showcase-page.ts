import {
  FlexContainerProperties,
  FlexItemProperties,
  NidocaSearchBar,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-search-bar-showcase-page')
export class NidocaSearchBarShowcasePage extends NidocaShowcaseTemplate {
  @property()
  placeholder: string = '';

  @property()
  value: string = '';

  constructor() {
    super();
    let initComponent: NidocaSearchBar = new NidocaSearchBar();

    this.placeholder = initComponent.placeholder;

    this.value = initComponent.value;
  }

  getContent(): TemplateResult {
    return html`
      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperties.CONTAINER_WIDTH_50,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_BOTH, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-search-bar/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer
              .spacerAlignment="${SpacerAlignment.VERTICAL}"
              .spacerSize="${SpacerSize.LITTLE}"
            ></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
              <nidoca-search-bar placeholder=${this.placeholder} value=${this.value}
                >nidoca-search-bar</nidoca-search-bar
              >
            </nidoca-box>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent">
            <nidoca-spacer
              .spacerAlignment="${SpacerAlignment.VERTICAL}"
              .spacerSize="${SpacerSize.LITTLE}"
            ></nidoca-spacer>
            <nidoca-box cssStyle="width:100%; height:50vh;background-color: var(--app-color-surface-background-light)">
              <nidoca-code code="Code"></nidoca-code>
            </nidoca-box>
          </nidoca-tab-content>
        </nidoca-tabs>

        <nidoca-form-text
          label="placeholder"
          .value="${this.placeholder}"
          @nidoca-form-text-event-change="${(event: CustomEvent) => (this.placeholder = event.detail.value)}"
        ></nidoca-form-text>

        <nidoca-form-text
          label="value"
          .value="${this.value}"
          @nidoca-form-text-event-change="${(event: CustomEvent) => (this.value = event.detail.value)}"
        ></nidoca-form-text>

        <nidoca-table
          .headers="${['property', 'type']}"
          .rows="${[
            ['placeholder', 'string'],
            ['value', 'string'],
          ]}"
        ></nidoca-table>
      </nidoca-flex-container>
    `;
  }
}
