import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TypographyType } from '../typography/component';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { SpacerAlignment, SpacerSize, TargetType } from '..';
import {I18nService} from "@domoskanonos/frontend-basis";

@customElement('page-imprint')
export class PageImprintComponent extends PageAbstract {
    constructor() {
        super();
        this.navigationTitle = I18nService.getUniqueInstance().getValue('pageimprint');
    }

   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
            .containerProperties="${[
               ContainerProperties.CONTAINER_WIDTH_50,
               ContainerProperties.TABLET_MAX_WIDTH,
               ContainerProperties.SMARTPHONE_MAX_WIDTH,
               ContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
               ContainerProperties.TABLET_HORIZONTAL_PADDING
            ]}"
            .itemProperties="${[ItemProperties.KEYLINE_ALIGNMENT_HORIZONTAL, ItemProperties.KEYLINE_SIZE_ZERO]}"
            itemFlexBasisValue="100%"
         >
            <component-typography .typographyType="${TypographyType.H1}" text="Imprint"></component-typography>
            <component-typography .typographyType="${TypographyType.H4}">Site operator / responsible</component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">Dominik Bruhn</component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">Holzwickeder Straße 109c</component-typography>
            <component-typography .typographyType="${TypographyType.BODY1}">44309 Dortmund</component-typography>
            <component-spacer spacerSize="${SpacerSize.LITTLE}" spacerAlignment="${SpacerAlignment.VERTICAL}"> </component-spacer>
            <component-typography .typographyType="${TypographyType.BODY1}">Germany</component-typography>
            <component-spacer spacerSize="${SpacerSize.MEDIUM}" spacerAlignment="${SpacerAlignment.VERTICAL}"> </component-spacer>
            <component-typography .typographyType="${TypographyType.BODY1}"
               >dominikbruhn [at] googlemail.com</component-typography
            >
         </component-flex-container>
      `;
   }
}
