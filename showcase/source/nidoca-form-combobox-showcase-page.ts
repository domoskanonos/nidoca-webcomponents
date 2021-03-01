import {FlexContainerProperties, FlexItemProperties, FormOutputData, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-combobox-showcase-page')
export class NidocaFormComboboxShowcasePage extends NidocaShowcaseTemplate {
  @property()
  name: string | undefined | null = '';

  @property()
  value: any | undefined | null = undefined;

  @property()
  label: string | undefined | null = '';

  @property()
  options: FormOutputData[] | undefined | null = [];

  @property()
  required: boolean | undefined | null = false;

  @property()
  errorText: string | undefined | null = '';

  @property()
  infoText: string | undefined | null = '';

  @property()
  warningText: string | undefined | null = '';

  @property()
  size: number | undefined | null = undefined;

  @property()
  multiple: boolean | undefined | null = false;

  @property()
  selectElement: HTMLSelectElement | undefined | null = undefined;

  getMainComponent(): TemplateResult {
    return html`
      <nidoca-flex-container
        .flexContainerProperties="${[
          FlexContainerProperties.CONTAINER_WIDTH_50,
          FlexContainerProperties.TABLET_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
          FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
          FlexContainerProperties.TABLET_HORIZONTAL_PADDING,
        ]}"
        .flexItemProperties="${[
          FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL,
          FlexItemProperties.KEYLINE_SIZE_MEDIUM,
        ]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-combobox/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}"> </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> </nidoca-tab-content>
        </nidoca-tabs>
      </nidoca-flex-container>
    `;
  }
}
