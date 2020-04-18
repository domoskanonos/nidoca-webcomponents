import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import { AlignContent, AlignItems, FlexDirection, FlexJustifyContent, FlexWrap, SpacerSize, TypographyType } from '..';
import { ContainerClazzValues, ItemClazzValues } from '../flex-container/component';
import { I18nService } from '@domoskanonos/frontend-basis';

@customElement('page-introduction')
export class PageIntroduction extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageintroduction');
   }

   getMainComponent(): TemplateResult {
      return html`
         <component-flex-container
            .containerClazzes="${[ContainerClazzValues.CONTAINER_WIDTH_100]}"
            .itemClazzes="${[ItemClazzValues.SMARTPHONE_MAX_WIDTH]}"
            .direction="${FlexDirection.ROW}"
            .wrap="${FlexWrap.WRAP}"
            .flexJustifyContent="${FlexJustifyContent.CENTER}"
            .alignItems="${AlignItems.CENTER}"
            .alignContent="${AlignContent.FLEX_START}"
            itemFlexBasisValue="50%"
         >
            <component-flex-container .containerClazzes="${[ContainerClazzValues.CONTAINER_WIDTH_75]}" itemFlexBasisValue="100%">
               <component-typography .typographyType="${TypographyType.H2}">WC-Atomic</component-typography>
               <component-typography .typographyType="${TypographyType.H6}"
                  >Erstelle wunderbare PWA Single Page Anwendungen</component-typography
               >
               <component-typography>
                  WC-Atomic ist ein Open Source Projekt mit dem sie moderne PWA und Single Page Anwendungen bauen können. Das
                  Framework basiert auf
                  <component-link href="https://lit-element.polymer-project.org/">Lit-Element</component-link> und Typescript.
               </component-typography>
            </component-flex-container>

            <component-rich-media src="https://picsum.photos/1200/400" text="Mein Bild"></component-rich-media>
         </component-flex-container>

         <component-flex-container
            .containerClazzes="${[ContainerClazzValues.CONTAINER_WIDTH_100]}"
            .itemClazzes="${[ItemClazzValues.SMARTPHONE_MAX_WIDTH]}"
            .direction="${FlexDirection.ROW}"
            .wrap="${FlexWrap.WRAP}"
            .flexJustifyContent="${FlexJustifyContent.CENTER}"
            .alignItems="${AlignItems.CENTER}"
            .alignContent="${AlignContent.FLEX_START}"
            itemFlexBasisValue="25%"
         >
            <component-rich-media src="https://picsum.photos/500/400" text="Mein Bild"></component-rich-media>
            <component-rich-media src="https://picsum.photos/550/400" text="Mein Bild"></component-rich-media>
            <component-rich-media src="https://picsum.photos/600/400" text="Mein Bild"></component-rich-media>

            <component-flex-container .containerClazzes="${['CONTAINER_WIDTH_75']}" itemFlexBasisValue="100%">
               <component-typography .typographyType="${TypographyType.H4}">Bildquelle</component-typography>
               <component-typography .typographyType="${TypographyType.BODY1}">
                  Die hier abgebildeten Fotos stammen von:
                  <component-link href="https://picsum.photos">https://picsum.photos</component-link></component-typography
               >
            </component-flex-container>
         </component-flex-container>
      `;
   }
}
