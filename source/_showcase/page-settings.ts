import { customElement, html, TemplateResult } from 'lit-element';
import { I18nService, LanguageKey } from '@domoskanonos/frontend-basis';
import { PageAbstract } from './page-abstract';
import { AlignItems, FlexJustifyContent, KeyValueData, SpacerAlignment, SpacerSize, TypographyType } from '..';
import { ContainerClazzValues } from '../flex-container/component';

@customElement('page-settings')
export class PageSettings extends PageAbstract {
   getMainComponent(): TemplateResult {
      return html`
         <component-spacer spacerSize="${SpacerSize.LITTLE}"></component-spacer>
         <component-flex-container
            .containerClazzes="${[
               ContainerClazzValues.CONTAINER_50,
               ContainerClazzValues.SMARTPHONE_MAX_WIDTH,
               ContainerClazzValues.SMARTPHONE_HORIZONTAL_PADDING
            ]}"
            itemFlexBasisValue="auto"
            .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
            .alignItems="${AlignItems.CENTER}"
         >
            <component-icon .withIconSpace="${false}" icon="settings"></component-icon>
            <component-spacer spacerSize="${SpacerSize.SMALL}" spacerAlignment="${SpacerAlignment.HORIZONTAL}"></component-spacer>
            <component-typography .typographyType="${TypographyType.H4}"
               >${I18nService.getUniqueInstance().getValue('settings')}</component-typography
            >
         </component-flex-container>
         <component-divider spacerSize="${SpacerSize.LITTLE}"></component-divider>
         <component-flex-container
            .containerClazzes="${[
               ContainerClazzValues.CONTAINER_50,
               ContainerClazzValues.SMARTPHONE_MAX_WIDTH,
               ContainerClazzValues.SMARTPHONE_HORIZONTAL_PADDING
            ]}"
            itemFlexBasisValue="100%"
            .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
            .alignItems="${AlignItems.CENTER}"
         >
            <component-typography .typographyType="${TypographyType.H6}"
               >${I18nService.getUniqueInstance().getValue('settings_language')}</component-typography
            >
            <component-i18n-selector
               label="${I18nService.getUniqueInstance().getValue('component_i18n_label')}"
               langKey="${I18nService.getUniqueInstance().getLanguage()}"
               .languages="${[
                  <KeyValueData>{
                     key: LanguageKey.DE,
                     value: I18nService.getUniqueInstance().getValue('component_i18n_de')
                  },
                  <KeyValueData>{
                     key: LanguageKey.EN,
                     value: I18nService.getUniqueInstance().getValue('component_i18n_en')
                  }
               ]}"
            ></component-i18n-selector>
         </component-flex-container>
      `;
   }
}
