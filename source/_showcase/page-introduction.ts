import { customElement, html, TemplateResult } from 'lit-element';
import { PageAbstract } from './page-abstract';
import {
   AlignContent,
   AlignItems,
   ButtonType,
   FlexDirection,
   FlexJustifyContent,
   FlexWrap,
   SpacerAlignment,
   SpacerSize,
   TargetType,
   TypographyType
} from '..';
import { ContainerProperties, ItemProperties } from '../flex-container/component';
import { I18nService, RouterService } from '@domoskanonos/frontend-basis';

@customElement('page-introduction')
export class PageIntroduction extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageintroduction');
   }

   getMainComponent(): TemplateResult {
      return html`
         <component-box
            height="60vmin"
            width="100vw"
            style="color: var(--app-color-primary);background-color: var(--app-color-primary-background-light);"
         >
            <component-flex-container
               .containerProperties="${[
                  ContainerProperties.CONTAINER_WIDTH_50,
                  ContainerProperties.SMARTPHONE_MAX_WIDTH,
                  ContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
                  ContainerProperties.CONTAINER_HEIGHT_100
               ]}"
               itemFlexBasisValue="100%"
               .alignContent="${AlignContent.CENTER}"
            >
               <component-typography .typographyType="${TypographyType.H1}">WC-Atomic</component-typography>
               <component-typography>
                  WC-Atomic ist ein leichtgewichtiges UI-Framework, das auf
                  <component-link href="https://www.webcomponents.org/" targetType="${TargetType.BLANK}"
                     >Webcomponents</component-link
                  >,
                  <component-link href="https://www.typescriptlang.org/" targetType="${TargetType.BLANK}"
                     >Typescript</component-link
                  >
                  und
                  <component-link href="https://lit-element.polymer-project.org/" targetType="${TargetType.BLANK}"
                     >LitElement</component-link
                  >
                  aufbaut.
               </component-typography>

               <component-spacer spacerSize="${SpacerSize.MEDIUM}"></component-spacer>

               <component-flex-container
                  .containerProperties="${[ContainerProperties.CONTAINER_WIDTH_AUTO]}"
                  .itemProperties="${[ItemProperties.KEYLINE_SIZE_MEDIUM]}"
                  itemFlexBasisValue="auto"
                  .flexDirection="${FlexDirection.ROW}"
                  .flexWrap="${FlexWrap.WRAP}"
                  .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
                  .alignItems="${AlignItems.START}"
                  .alignContent="${AlignContent.FLEX_START}"
               >
                  <component-button
                     .buttonType="${ButtonType.SECONDARY}"
                     text="Installation"
                     @component-button-click="${() => {
                        RouterService.getUniqueInstance().navigate('getStarted');
                     }}"
                  ></component-button>
                  <component-button .buttonType="${ButtonType.SECONDARY}" text="Dokumentation"></component-button>
               </component-flex-container>
            </component-flex-container>
         </component-box>

         <component-flex-container
            .containerProperties="${[ContainerProperties.CONTAINER_WIDTH_100]}"
            .itemProperties="${[ItemProperties.SMARTPHONE_MAX_WIDTH]}"
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
            <component-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               <component-flex-container .containerProperties="${['CONTAINER_WIDTH_75']}" itemFlexBasisValue="100%">
                  <component-typography .typographyType="${TypographyType.H4}">Bildquelle</component-typography>
                  <component-typography .typographyType="${TypographyType.BODY1}">
                     Die hier abgebildeten Fotos stammen von:
                     <component-link href="https://picsum.photos">https://picsum.photos</component-link></component-typography
                  >
               </component-flex-container></component-spacer
            >
         </component-flex-container>
      `;
   }
}
