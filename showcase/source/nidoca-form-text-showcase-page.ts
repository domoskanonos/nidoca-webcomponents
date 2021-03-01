import {FlexContainerProperties, FlexItemProperties, TextType, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-form-text-showcase-page')
export class NidocaFormTextShowcasePage extends NidocaShowcaseTemplate {
  @property()
  textType: TextType | undefined | null = undefined;

  @property()
  name: string | undefined | null = '';

  @property()
  value: any | undefined | null = undefined;

  @property()
  label: string | undefined | null = '';

  @property()
  required: boolean | undefined | null = false;

  @property()
  placeholder: string | undefined | null = '';

  @property()
  disabled: boolean | undefined | null = false;

  @property()
  checked: boolean | undefined | null = false;

  @property()
  multiple: boolean | undefined | null = false;

  @property()
  maxlength: number | undefined | null = undefined;

  @property()
  minlength: number | undefined | null = undefined;

  @property()
  min: number | undefined | null = undefined;

  @property()
  max: number | undefined | null = undefined;

  @property()
  step: number | undefined | null = undefined;

  @property()
  size: number | undefined | null = undefined;

  @property()
  errorText: string | undefined | null = '';

  @property()
  infoText: string | undefined | null = '';

  @property()
  warningText: string | undefined | null = '';

  @property()
  inputElement: HTMLInputElement | undefined | null = undefined;

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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-form-text/>"></nidoca-typography>
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
