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
import { FlexContainerProperties, FlexItemProperties } from '../flex-container/component';
import { I18nService, RouterService } from '@domoskanonos/frontend-basis';

@customElement('page-introduction')
export class PageIntroduction extends PageAbstract {
   constructor() {
      super();
      this.navigationTitle = I18nService.getUniqueInstance().getValue('pageintroduction');
   }

   getMainComponent(): TemplateResult {
      return html`
         <nidoca-box
            height="60vmin"
            width="100vw"
            style="color: var(--app-color-primary);background-color: var(--app-color-primary-background-light);"
         >
            <nidoca-flex-container
               .flexContainerProperties="${[
                  FlexContainerProperties.CONTAINER_WIDTH_50,
                  FlexContainerProperties.SMARTPHONE_MAX_WIDTH,
                  FlexContainerProperties.SMARTPHONE_HORIZONTAL_PADDING,
                  FlexContainerProperties.CONTAINER_HEIGHT_100
               ]}"
               itemFlexBasisValue="auto"
               .flexJustifyContent="${FlexJustifyContent.SPACE_AROUND}"
               .alignContent="${AlignContent.CENTER}"
            >
               <nidoca-typography .typographyType="${TypographyType.H1}">WC-Atomic</nidoca-typography>
               <nidoca-typography>
                  WC-Atomic ist ein leichtgewichtiges UI-Framework, das auf
                  <nidoca-link href="https://www.webcomponents.org/" targetType="${TargetType.BLANK}"
                     >Webcomponents</nidoca-link
                  >,
                  <nidoca-link href="https://www.typescriptlang.org/" targetType="${TargetType.BLANK}"
                     >Typescript</nidoca-link
                  >
                  und
                  <nidoca-link href="https://lit-element.polymer-project.org/" targetType="${TargetType.BLANK}"
                     >LitElement</nidoca-link
                  >
                  aufbaut.
               </nidoca-typography>

               <nidoca-spacer spacerSize="${SpacerSize.MEDIUM}"></nidoca-spacer>

               <nidoca-flex-container
                  .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_AUTO]}"
                  .flexItemProperties="${[FlexItemProperties.KEYLINE_SIZE_MEDIUM]}"
                  itemFlexBasisValue="auto"
                  .flexDirection="${FlexDirection.ROW}"
                  .flexWrap="${FlexWrap.WRAP}"
                  .flexJustifyContent="${FlexJustifyContent.FLEX_START}"
                  .alignItems="${AlignItems.START}"
                  .alignContent="${AlignContent.FLEX_START}"
               >
                  <nidoca-button
                     .buttonType="${ButtonType.SECONDARY}"
                     text="Installation"
                     @component-button-click="${() => {
                        RouterService.getUniqueInstance().navigate('getStarted');
                     }}"
                  ></nidoca-button>
                  <nidoca-button .buttonType="${ButtonType.SECONDARY}" text="Dokumentation"></nidoca-button>
               </nidoca-flex-container>
            </nidoca-flex-container>
         </nidoca-box>

         <nidoca-flex-container
            .flexContainerProperties="${[FlexContainerProperties.CONTAINER_WIDTH_100]}"
            .flexItemProperties="${[FlexItemProperties.SMARTPHONE_MAX_WIDTH]}"
            .direction="${FlexDirection.ROW}"
            .wrap="${FlexWrap.WRAP}"
            .flexJustifyContent="${FlexJustifyContent.CENTER}"
            .alignItems="${AlignItems.CENTER}"
            .alignContent="${AlignContent.FLEX_START}"
            itemFlexBasisValue="25%"
         >
            <nidoca-rich-media src="https://picsum.photos/500/400" text="Mein Bild"></nidoca-rich-media>
            <nidoca-rich-media src="https://picsum.photos/550/400" text="Mein Bild"></nidoca-rich-media>
            <nidoca-rich-media src="https://picsum.photos/600/400" text="Mein Bild"></nidoca-rich-media>
            <nidoca-spacer spacerSize="${SpacerSize.BIG}" spacerAlignment="${SpacerAlignment.VERTICAL}">
               <nidoca-flex-container .flexContainerProperties="${['CONTAINER_WIDTH_75']}" itemFlexBasisValue="100%">
                  <nidoca-typography .typographyType="${TypographyType.H4}">Bildquelle</nidoca-typography>
                  <nidoca-typography .typographyType="${TypographyType.BODY1}">
                     Die hier abgebildeten Fotos stammen von:
                     <nidoca-link href="https://picsum.photos">https://picsum.photos</nidoca-link></nidoca-typography
                  >
               </nidoca-flex-container></nidoca-spacer
            >
         </nidoca-flex-container>
      `;
   }
}
