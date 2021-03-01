import {FlexContainerProperties, FlexItemProperties, TypographyType} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-flex-showcase-page')
export class NidocaFlexShowcasePage extends NidocaShowcaseTemplate {
  @property()
  flexDirection: string | undefined | null = '';

  @property()
  flexWrap: string | undefined | null = '';

  @property()
  flexJustifyContent: string | undefined | null = '';

  @property()
  flexAlignItems: string | undefined | null = '';

  @property()
  flexAlignContent: string | undefined | null = '';

  @property()
  flexContainerProperties: string[] | undefined | null = [];

  @property()
  flexItemProperties: string[] | undefined | null = [];

  @property()
  flexItemBasisValue: string | undefined | null = '';

  @property()
  flexItemBasisValues: string[] | undefined | null = [];

  @property()
  slotElement: HTMLSlotElement | undefined | null = undefined;

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
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-flex/>"></nidoca-typography>
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
