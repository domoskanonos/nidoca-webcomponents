import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TypographyType } from '../typography/component';
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { SpacerAlignment, SpacerSize, TargetType } from '..';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-imprint')
export class PageImprintComponent extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageimprint');
   }

   getMainComponent(): TemplateResult {
      return html`
         <nidoca-flex-container
            .flexContainerProperties="${[
               FlexContainerProperties.CONTAINER_WIDTH_50,
               FlexContainerProperties.TABLET_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
               FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
               FlexContainerProperties.TABLET_HORIZONTAL_PADDING
            ]}"
            .flexItemProperties="${[FlexItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, FlexItemProperties.KEYLINE_SIZE_ZERO]}"
            flexItemBasisValue="100%"
         >
            <nidoca-typography .typographyType="${TypographyType.H1}" text="Imprint"></nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.H4}">Site operator / responsible</nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">Dominik Bruhn</nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">Holzwickeder Straße 109c</nidoca-typography>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">44309 Dortmund</nidoca-typography>
            <nidoca-spacer spacerSize="${SpacerSize.LITTLE}" spacerAlignment="${SpacerAlignment.VERTICAL}"> </nidoca-spacer>
            <nidoca-typography .typographyType="${TypographyType.BODY1}">Germany</nidoca-typography>
            <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}"> </nidoca-spacer>
            <nidoca-typography .typographyType="${TypographyType.BODY1}"
               >dominikbruhn [at] googlemail.com</nidoca-typography
            >
         </nidoca-flex-container>
      `;
   }
}
