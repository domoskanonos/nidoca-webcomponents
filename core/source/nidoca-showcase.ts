import { css, customElement, html, TemplateResult } from 'lit-element';
import { LitElement } from 'lit-element';
import { SpacerAlignment, SpacerSize } from './nidoca-spacer';
import { TextType } from './nidoca-form-text';
import { FormOutputData } from './nidoca-form-abstract-input-element';
import { FlexContainerProperties, FlexItemProperties, TypographyType } from '.';
import { NidocaTemplate } from './nidoca-template';

@customElement('nidoca-showcase')
export class NidocaShowcase extends NidocaTemplate {

   getContent(): TemplateResult {
      return html`
        <nidoca-flex-container
            .flexContainerProperties="${[
            FlexContainerProperties.CONTAINER_WIDTH_50,
            FlexContainerProperties.TABLET_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
            FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
            FlexContainerProperties.TABLET_HORIZONTAL_PADDING
         ]}"
            .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
            flexItemBasisValue="100%"
         >
            <nidoca-typography .typographyType="${TypographyType.H2}" text="<nidoca-table/>"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">
               <br />description<br /><br />
            </nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.H4}" text="example"></nidoca-typography>
            <nidoca-tabs>
               <nidoca-tab slot="tab" .selected="${true}" text="demo"></nidoca-tab>
               <nidoca-tab slot="tab" text="source"></nidoca-tab>
               <nidoca-tab-content slot="tabContent" .selected="${true}">
               </nidoca-tab-content>
               <nidoca-tab-content slot="tabContent">
               </nidoca-tab-content>
            </nidoca-tabs>
         </nidoca-flex-container>
    `;
   }
}
