import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { TypographyType } from '../typography/component';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
import { SpacerAlignment, SpacerSize, TargetType } from '..';

@customElement('page-imprint')
export class PageImprintComponent extends PageAbstract {
   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
            .containerClazzes="${[
               ContainerClazzValues.CONTAINER_50,
               ContainerClazzValues.TABLET_MAX_WIDTH,
               ContainerClazzValues.SMARTPHONE_MAX_WIDTH,
               ContainerClazzValues.SMARTPHONE_HORIZONTAL_PADDING,
               ContainerClazzValues.TABLET_HORIZONTAL_PADDING
            ]}"
            .itemClazzes="${[ItemClazzValues.KEYLINE_ALIGNMENT_HORIZONTAL, ItemClazzValues.KEYLINE_SIZE_ZERO]}"
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
