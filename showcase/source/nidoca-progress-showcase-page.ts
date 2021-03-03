import {
  FlexContainerProperties,
  FlexItemProperties,
  ProgressType,
  SpacerAlignment,
  SpacerSize,
  TypographyType,
} from '@domoskanonos/nidoca-core';
import {customElement, html, property, TemplateResult} from 'lit-element';
import {NidocaShowcaseTemplate} from './nidoca-showcase-template';

@customElement('nidoca-progress-showcase-page')
export class NidocaProgressShowcasePage extends NidocaShowcaseTemplate {
  @property()
  progressType: ProgressType = Object.values(ProgressType)[0];

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
        .flexItemProperties="${[
          FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL,
          FlexItemProperties.KEYLINE_SIZE_MEDIUM,
        ]}"
        flexItemBasisValue="100%"
      >
        <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-progress/>"></nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.BODY1}"> <br />description<br /><br /> </nidoca-typography>
        <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
        <nidoca-tabs>
          <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
          <nidoca-tab slot="tab" text="source"></nidoca-tab>
          <nidoca-tab-content slot="tabContent" .selected="${true}">
            <nidoca-spacer .spacerAlignment="${SpacerAlignment.VERTICAL}" .spacerSize="${SpacerSize.BIG}">
              <nidoca-progress .progressType=${this.progressType}></nidoca-progress>
            </nidoca-spacer>
          </nidoca-tab-content>
          <nidoca-tab-content slot="tabContent"> </nidoca-tab-content>
        </nidoca-tabs>
      </nidoca-flex-container>
    `;
  }
}
